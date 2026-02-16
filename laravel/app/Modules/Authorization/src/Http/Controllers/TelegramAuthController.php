<?php

namespace Authorization\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\UserActivityLog;
use App\Services\ActivityLogService;
use App\Support\UserBlockHelper;
use Authorization\Exceptions\CodeService\CodeServiceException;
use Authorization\Mail\CodeVerification;
use Authorization\Models\TelegramContact;
use Authorization\Services\TelegramAuthService;
use Authorization\Services\VerifyCodeService;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Referral\Models\Referral;
use User\Models\User;

class TelegramAuthController extends Controller
{
    public function __construct(
        private VerifyCodeService $codeService,
    ) {
    }

    public function webappAuth(Request $request, ActivityLogService $activityLogService): JsonResponse
    {
        try {
            return $this->webappAuthHandler($request, $activityLogService);
        } catch (\Illuminate\Validation\ValidationException $e) {
            throw $e;
        } catch (\Throwable $e) {
            Log::error('Telegram webappAuth error', [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ]);
            return response()->json([
                'success' => false,
                'error' => 'Ошибка авторизации. Попробуйте позже.',
            ], 500);
        }
    }

    private function webappAuthHandler(Request $request, ActivityLogService $activityLogService): JsonResponse
    {
        $isProd = config('app.env') === 'production';

        $request->validate([
            'initData' => $isProd ? 'required|string' : 'nullable|string',
        ]);
        
        $rawInitData = $request->input('initData');
        $telegramData = null;

        Log::info('Telegram webappAuth: входящий запрос', [
            'has_initData' => !empty($rawInitData),
            'initData_length' => strlen($rawInitData ?? ''),
            'is_prod' => $isProd,
        ]);

        if (!empty($rawInitData)) {
            $telegramData = TelegramAuthService::validateInitData($rawInitData);
        }

        if ($telegramData) {
            Log::info('Telegram webappAuth: initData валиден', [
                'telegram_id' => $telegramData['user']['id'] ?? null,
            ]);
        } elseif (!$isProd) {
            Log::warning('Telegram webappAuth: initData невалиден, используется debug-режим');
            $telegramData = [
                'user' => [
                    'id' => 1000000000 + (int) ($request->user()?->id ?? 0),
                    'username' => 'debug_webapp',
                    'first_name' => 'Debug',
                    'last_name' => 'WebApp',
                    'photo_url' => null,
                ],
                'auth_date' => time(),
                'query_id' => null,
                'start_param' => null,
            ];
        }

        if (!$telegramData) {
            $activityLogService->logSocialAuth(null, $request, UserActivityLog::PROVIDER_TELEGRAM, false);
            return response()->json([
                'success' => false,
                'error' => 'Неверная подпись Telegram данных',
            ], 401);
        }
        
        $userInfo = $telegramData['user'] ?? null;
        
        if (!$userInfo || !isset($userInfo['id'])) {
            return response()->json([
                'success' => false,
                'error' => 'Данные пользователя не найдены',
            ], 400);
        }
        
        $telegramId = (string) $userInfo['id'];
        $telegramUsername = $userInfo['username'] ?? null;
        $telegramFirstName = $userInfo['first_name'] ?? null;
        $telegramLastName = $userInfo['last_name'] ?? null;
        $telegramPhotoUrl = $userInfo['photo_url'] ?? null;
        $telegramPhone = isset($userInfo['phone_number'])
            ? \App\Helpers\PhoneHelper::formatPhone($userInfo['phone_number'])
            : null;

        if (Auth::check()) {
            $user = Auth::user();
            
            $telegramExists = User::where('telegram_id', $telegramId)
                ->where('id', '!=', $user->id)
                ->exists();
            
            if ($telegramExists) {
                return response()->json([
                    'success' => false,
                    'error' => 'Этот Telegram аккаунт уже привязан к другому пользователю',
                ], 409);
            }
            
            $updateData = [
                'telegram_id' => $telegramId,
                'telegram_username' => $telegramUsername,
                'telegram_first_name' => $telegramFirstName,
                'telegram_last_name' => $telegramLastName,
                'telegram_photo_url' => $telegramPhotoUrl,
            ];
            if (isset($userInfo['phone_number'])) {
                $phone = \App\Helpers\PhoneHelper::formatPhone($userInfo['phone_number']);
                $updateData['phone'] = $phone;
                $updateData['phone_verified_at'] = Carbon::now();
            }
            $user->update($updateData);

            if (empty($user->name) && $telegramFirstName) {
                $user->update(['name' => $telegramFirstName]);
            }
            if (empty($user->last_name) && $telegramLastName) {
                $user->update(['last_name' => $telegramLastName]);
            }

            return response()->json([
                'success' => true,
                'linked' => true,
                'user' => $user->only(['id', 'name', 'email', 'phone']),
                'login_token' => $this->makeLoginToken($user),
            ]);
        }
        
        $user = User::where('telegram_id', $telegramId)->first();

        if (!$user && $telegramPhone) {
            $user = User::where('phone', $telegramPhone)->first();
            if ($user) {
                $user->update([
                    'telegram_id' => $telegramId,
                    'telegram_username' => $telegramUsername,
                    'telegram_first_name' => $telegramFirstName,
                    'telegram_last_name' => $telegramLastName,
                    'telegram_photo_url' => $telegramPhotoUrl,
                ]);
            }
        }
        if (!$user) {
            $contact = TelegramContact::where('telegram_id', $telegramId)->first();
            if ($contact && $contact->phone) {
                $user = $contact->user_id ? User::find($contact->user_id) : null;
                if (!$user) {
                    $user = User::where('phone', $contact->phone)->first();
                }
                if (!$user && !$isProd) {
                    // Пользователь мог быть создан с debug telegram_id при пустом initData
                    $user = User::where('telegram_id', '1000000000')
                        ->where(function ($q) {
                            $q->whereNull('phone')->orWhere('phone', '');
                        })
                        ->orderByDesc('updated_at')
                        ->first();
                }
                if ($user) {
                    if (!$user->telegram_id || $user->telegram_id === '1000000000') {
                        $user->update([
                            'telegram_id' => $telegramId,
                            'telegram_username' => $telegramUsername,
                            'telegram_first_name' => $telegramFirstName,
                            'telegram_last_name' => $telegramLastName,
                            'telegram_photo_url' => $telegramPhotoUrl,
                            'phone' => $contact->phone,
                            'phone_verified_at' => Carbon::now(),
                        ]);
                    } elseif (empty($user->phone)) {
                        $user->update([
                            'phone' => $contact->phone,
                            'phone_verified_at' => Carbon::now(),
                        ]);
                    }
                    $contact->update(['user_id' => $user->id]);
                    $user->refresh();
                }
            }
        }

        if ($user && empty($user->phone)) {
            $contact = TelegramContact::where('telegram_id', $telegramId)->first();
            if ($contact && $contact->phone) {
                $user->update([
                    'phone' => $contact->phone,
                    'phone_verified_at' => Carbon::now(),
                ]);
                $contact->update(['user_id' => $user->id]);
            }
        }

        if ($user && empty($user->phone)) {
            $botName = config('services.telegram.bot_name', '');
            return response()->json([
                'success' => false,
                'need_phone' => true,
                'message' => 'Чтобы начать пользоваться приложением, отправьте номер телефона в чате с ботом (кнопка «Поделиться»).',
                'bot_username' => $botName ?: null,
            ], 200);
        }

        if ($user) {
            if (UserBlockHelper::isBlocked($user)) {
                $activityLogService->logSocialAuth($user, $request, UserActivityLog::PROVIDER_TELEGRAM, false);
                Log::warning('Telegram auth: попытка входа заблокированного пользователя', [
                    'user_id' => $user->id,
                    'telegram_id' => $telegramId,
                ]);
                return response()->json([
                    'success' => false,
                    'errors' => ['blocked' => UserBlockHelper::blockMessage()],
                ], 403);
            }
            if ($telegramPhone && ($user->phone !== $telegramPhone)) {
                $user->update([
                    'phone' => $telegramPhone,
                    'phone_verified_at' => Carbon::now(),
                ]);
            }
            Auth::login($user);
            $activityLogService->logSocialAuth($user, $request, UserActivityLog::PROVIDER_TELEGRAM, true, false);
            Log::info('Telegram webappAuth: пользователь авторизован', [
                'user_id' => $user->id,
                'telegram_id' => $telegramId,
                'phone' => $user->phone,
            ]);
            return response()->json([
                'success' => true,
                'registered' => false,
                'user' => $user->only(['id', 'name', 'email', 'phone']),
                'login_token' => $this->makeLoginToken($user),
            ]);
        }

        $botName = config('services.telegram.bot_name', '');
        return response()->json([
            'success' => false,
            'need_welcome' => true,
            'message' => 'Укажите имя и email для продолжения',
            'bot_username' => $botName ?: null,
        ], 200);
    }

    public function registerWelcome(Request $request): JsonResponse
    {
        $isProd = config('app.env') === 'production';
        $request->validate([
            'initData' => $isProd ? 'required|string' : 'nullable|string',
            'name' => 'required|string|max:255',
            'email' => 'required|email',
        ]);

        $rawInitData = $request->input('initData');
        $telegramData = !empty($rawInitData)
            ? TelegramAuthService::validateInitData($rawInitData)
            : null;

        // В режиме разработки при пустом/невалидном initData используем того же отладочного пользователя, что и в webappAuth
        if ((!$telegramData || !isset($telegramData['user']['id'])) && !$isProd) {
            $telegramData = [
                'user' => [
                    'id' => 1000000000,
                    'username' => 'debug_webapp',
                    'first_name' => 'Debug',
                    'last_name' => 'WebApp',
                    'photo_url' => null,
                ],
            ];
        }

        if (!$telegramData || !isset($telegramData['user']['id'])) {
            return response()->json(['success' => false, 'error' => 'Неверные данные Telegram'], 401);
        }

        $userInfo = $telegramData['user'];
        $telegramId = (string) $userInfo['id'];
        $telegramUsername = $userInfo['username'] ?? null;
        $telegramFirstName = $userInfo['first_name'] ?? null;
        $telegramLastName = $userInfo['last_name'] ?? null;
        $telegramPhotoUrl = $userInfo['photo_url'] ?? null;

        $name = trim($request->input('name'));
        $email = strtolower(trim($request->input('email')));

        $user = User::where('telegram_id', $telegramId)->first();
        if ($user) {
            $user->update([
                'name' => $name ?: ($user->name ?? $telegramFirstName),
                'last_name' => $user->last_name ?: $telegramLastName,
                'email' => $email,
                'telegram_username' => $telegramUsername,
                'telegram_first_name' => $telegramFirstName,
                'telegram_last_name' => $telegramLastName,
                'telegram_photo_url' => $telegramPhotoUrl,
            ]);
        } else {
            if (User::where('email', $email)->where(function ($q) use ($telegramId) {
                $q->whereNull('telegram_id')->orWhere('telegram_id', '!=', $telegramId);
            })->exists()) {
                return response()->json([
                    'success' => false,
                    'error' => 'Этот email уже используется другим аккаунтом',
                ], 409);
            }
            try {
                $user = User::create([
                    'name' => $name ?: $telegramFirstName,
                    'last_name' => $telegramLastName,
                    'email' => $email,
                    'email_verified_at' => Carbon::now(),
                    'telegram_id' => $telegramId,
                    'telegram_username' => $telegramUsername,
                    'telegram_first_name' => $telegramFirstName,
                    'telegram_last_name' => $telegramLastName,
                    'telegram_photo_url' => $telegramPhotoUrl,
                ]);
            } catch (\Throwable $e) {
                Log::error('Telegram registerWelcome: ошибка создания пользователя', [
                    'email' => $email,
                    'error' => $e->getMessage(),
                ]);
                return response()->json([
                    'success' => false,
                    'error' => 'Не удалось создать аккаунт. Попробуйте ещё раз или укажите другой email.',
                ], 500);
            }
        }

        $botName = config('services.telegram.bot_name', '');
        return response()->json([
            'success' => true,
            'need_phone' => true,
            'message' => 'Теперь отправьте номер телефона в чате с ботом',
            'bot_username' => $botName ?: null,
            'user' => $user->only(['id', 'name', 'email', 'phone']),
        ]);
    }

    public function sendEmailCode(Request $request): JsonResponse
    {
        $request->validate([
            'initData' => 'required|string',
            'email' => 'required|email',
        ]);

        $telegramData = TelegramAuthService::validateInitData($request->initData);
        if (!$telegramData || !isset($telegramData['user']['id'])) {
            return response()->json(['success' => false, 'error' => 'Неверные данные Telegram'], 401);
        }

        $email = strtolower($request->input('email'));

        $verifyCode = $this->codeService->make([
            'ip_address' => $request->ip(),
            'confirmation_subject' => $email,
            'target' => 'telegram_email_link',
        ]);

        try {
            Mail::to($email)->send(new CodeVerification(['code' => $verifyCode->code]));
        } catch (\Throwable $e) {
            Log::error('Telegram email code: ошибка отправки письма', ['email' => $email, 'error' => $e->getMessage()]);
            return response()->json(['success' => false, 'error' => 'Не удалось отправить письмо'], 500);
        }

        return response()->json([
            'success' => true,
            'message' => 'Код отправлен на указанный email',
        ]);
    }

    public function confirmEmailAndLink(Request $request, ActivityLogService $activityLogService): JsonResponse
    {
        $request->validate([
            'initData' => 'required|string',
            'email' => 'required|email',
            'code' => ['required', 'numeric', 'digits:' . config('code_verification.code_length')],
        ]);

        $telegramData = TelegramAuthService::validateInitData($request->initData);
        if (!$telegramData || !isset($telegramData['user']['id'])) {
            return response()->json(['success' => false, 'error' => 'Неверные данные Telegram'], 401);
        }

        $userInfo = $telegramData['user'];
        $telegramId = (string) $userInfo['id'];
        $telegramUsername = $userInfo['username'] ?? null;
        $telegramFirstName = $userInfo['first_name'] ?? null;
        $telegramLastName = $userInfo['last_name'] ?? null;
        $telegramPhotoUrl = $userInfo['photo_url'] ?? null;
        $telegramPhone = isset($userInfo['phone_number'])
            ? \App\Helpers\PhoneHelper::formatPhone($userInfo['phone_number'])
            : null;

        $email = strtolower($request->input('email'));

        try {
            $trueCode = $this->codeService->check(
                code: $request->input('code'),
                subject: $email,
                ip: $request->ip(),
            );
        } catch (CodeServiceException $e) {
            return response()->json(['success' => false, 'error' => $e->getMessage()], 400);
        }

        $trueCode->update(['status' => true]);

        $user = User::where('email', $email)->first();
        $isNewUser = false;

        if ($user) {
            if (User::where('telegram_id', $telegramId)->where('id', '!=', $user->id)->exists()) {
                return response()->json([
                    'success' => false,
                    'error' => 'Этот Telegram аккаунт уже привязан к другому пользователю',
                ], 409);
            }
            $updateData = [
                'telegram_id' => $telegramId,
                'telegram_username' => $telegramUsername,
                'telegram_first_name' => $telegramFirstName,
                'telegram_last_name' => $telegramLastName,
                'telegram_photo_url' => $telegramPhotoUrl,
            ];
            if ($telegramPhone) {
                $updateData['phone'] = $telegramPhone;
                $updateData['phone_verified_at'] = Carbon::now();
            }
            $user->update($updateData);
            if (empty($user->name) && $telegramFirstName) {
                $user->update(['name' => $telegramFirstName]);
            }
            if (empty($user->last_name) && $telegramLastName) {
                $user->update(['last_name' => $telegramLastName]);
            }
        } else {
            $isNewUser = true;
            $user = User::create([
                'name' => $telegramFirstName,
                'last_name' => $telegramLastName,
                'email' => $email,
                'email_verified_at' => Carbon::now(),
                'telegram_id' => $telegramId,
                'telegram_username' => $telegramUsername,
                'telegram_first_name' => $telegramFirstName,
                'telegram_last_name' => $telegramLastName,
                'telegram_photo_url' => $telegramPhotoUrl,
                'phone' => $telegramPhone,
                'phone_verified_at' => $telegramPhone ? Carbon::now() : null,
                'password' => null,
            ]);

            if ($referralCode = session('referral_code')) {
                $referral = Referral::where('referral_code', $referralCode)->whereNull('invited_id')->first();
                if ($referral) {
                    $alreadyInvited = Referral::where('invited_id', $user->id)->exists();
                    if (!$alreadyInvited && $referral->inviter_id !== (int) $user->id) {
                        $referral->update(['invited_id' => $user->id]);
                    }
                }
            }
        }

        if (UserBlockHelper::isBlocked($user)) {
            $activityLogService->logSocialAuth($user, $request, UserActivityLog::PROVIDER_TELEGRAM, false);
            return response()->json([
                'success' => false,
                'errors' => ['blocked' => UserBlockHelper::blockMessage()],
            ], 403);
        }

        Auth::login($user);
        $activityLogService->logSocialAuth($user, $request, UserActivityLog::PROVIDER_TELEGRAM, true, $isNewUser);

        return response()->json([
            'success' => true,
            'registered' => $isNewUser,
            'user' => $user->only(['id', 'name', 'email', 'phone']),
            'login_token' => $this->makeLoginToken($user),
        ]);
    }

    /**
     * Одноразовый токен для входа при переходе из TMA (обход проблемы с cookie в WebView).
     */
    private function makeLoginToken(User $user): string
    {
        $token = Str::random(64);
        Cache::put('telegram_login:' . $token, $user->id, now()->addMinutes(5));
        return $token;
    }

    /**
     * Вход по токену из TMA и редирект в приложение (GET, чтобы переход по ссылке работал без cookie).
     */
    /**
     * Вход по одноразовому токену из TMA.
     * В монолите сессия (guard web) общая: после Auth::login() редирект на /menu
     * передаёт cookie в том же домене, пользователь остаётся авторизованным.
     */
    public function loginByToken(Request $request)
    {
        $token = $request->query('token');
        if (!$token) {
            return redirect('/')->with('error', 'Неверная ссылка входа.');
        }

        $userId = Cache::pull('telegram_login:' . $token);
        if (!$userId) {
            return redirect('/')->with('error', 'Ссылка входа устарела или уже использована.');
        }

        $user = User::find($userId);
        if (!$user) {
            return redirect('/')->with('error', 'Пользователь не найден.');
        }

        Auth::login($user);
        return redirect()->route('menu-page');
    }

    public function detach(): JsonResponse
    {
        $user = Auth::user();
        
        if (!$user->telegram_id) {
            return response()->json([
                'success' => false,
                'error' => 'Telegram аккаунт не привязан',
            ], 400);
        }
        
        $user->update([
            'telegram_id' => null,
            'telegram_username' => null,
            'telegram_first_name' => null,
            'telegram_last_name' => null,
            'telegram_photo_url' => null,
        ]);
        
        return response()->json([
            'success' => true,
            'message' => 'Telegram аккаунт отвязан',
        ]);
    }
}
