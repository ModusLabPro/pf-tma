<?php

namespace Authorization\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Helpers\PhoneHelper;
use Authorization\Models\TelegramContact;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use User\Models\User;

/**
 * Обработчик вебхука Telegram Bot API.
 * — /start: приветствие и кнопка «Открыть приложение» (Mini App).
 * — /start share_phone: запрос контакта (кнопка «Поделиться»).
 * — получение контакта: сохранение в telegram_contacts и привязка к пользователю по telegram_id или по телефону.
 */
class TelegramBotController extends Controller
{
    private string $botToken;
    private string $webappUrl;

    public function __construct()
    {
        $this->botToken = (string) (config('services.telegram.bot_token') ?? '');
        $url = config('app.env') === 'production'
            ? (config('services.telegram.webapp_url', '') ?: url('/tg-app'))
            : (config('services.telegram.webapp_url_dev', '') ?: url('/tg-app'));
        $this->webappUrl = is_string($url) ? $url : '';
    }

    public function webhook(Request $request): JsonResponse
    {
        try {
            $payload = $request->all();
            if (empty($payload)) {
                return response()->json(['ok' => true]);
            }

            $message = $payload['message'] ?? null;

            if (!$message) {
                return response()->json(['ok' => true]);
            }

            $chatId = $message['chat']['id'] ?? null;
            $from = $message['from'] ?? null;
            $telegramUserId = $from['id'] ?? null;
            $text = trim($message['text'] ?? '');
            $contact = $message['contact'] ?? null;

            if (!$chatId || !$telegramUserId) {
                return response()->json(['ok' => true]);
            }

            // Пользователь отправил контакт (кнопка «Поделиться»)
            if ($contact) {
                $this->handleContact($chatId, (string) $telegramUserId, $contact, $from);
                return response()->json(['ok' => true]);
            }

            // Команда /start
            if (str_starts_with($text, '/start')) {
                $params = explode(' ', $text, 2);
                $startParam = $params[1] ?? '';
                $this->handleStart($chatId, (string) $telegramUserId, $from, $startParam);
                return response()->json(['ok' => true]);
            }

            return response()->json(['ok' => true]);
        } catch (\Throwable $e) {
            Log::error('Telegram webhook error', [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
            ]);
            return response()->json(['ok' => true]);
        }
    }

    private function handleStart(string $chatId, string $telegramUserId, array $from, string $startParam): void
    {
        if (!$this->botToken) {
            Log::warning('Telegram bot handleStart: TELEGRAM_BOT_TOKEN не задан');
            return;
        }

        $firstName = $from['first_name'] ?? '';

        if ($startParam === 'share_phone') {
            $this->sendMessage($chatId, 'Чтобы начать пользоваться приложением, отправьте свой номер телефона, нажав кнопку «Поделиться» ниже.', [
                'reply_markup' => [
                    'keyboard' => [[
                        ['text' => 'Поделиться', 'request_contact' => true],
                    ]],
                    'resize_keyboard' => true,
                    'one_time_keyboard' => true,
                ],
            ]);
            return;
        }

        $welcomeText = "Здравствуйте, {$firstName}! 👋\n\n";
        $welcomeText .= "Добро пожаловать в PrimeFoods — здесь вы можете быстро оформить заказ, посмотреть меню и акции. Всё просто и удобно.\n\n";
        $welcomeText .= "Чтобы начать — нажмите «Открыть приложение».";

        $replyMarkup = $this->buildWebAppReplyMarkup();
        $this->sendMessage($chatId, $welcomeText, $replyMarkup ? ['reply_markup' => $replyMarkup] : []);
    }

    private function handleContact(string $chatId, string $telegramUserId, array $contact, array $from): void
    {
        $phoneRaw = $contact['phone_number'] ?? '';
        if (!$phoneRaw) {
            $this->sendMessage($chatId, 'Не удалось получить номер телефона. Попробуйте ещё раз.');
            return;
        }

        $phone = PhoneHelper::formatPhone($phoneRaw);
        if (!$phone) {
            $this->sendMessage($chatId, 'Некорректный формат номера. Попробуйте ещё раз.');
            return;
        }

        TelegramContact::updateOrCreate(
            ['telegram_id' => $telegramUserId],
            ['phone' => $phone]
        );

        $user = User::where('telegram_id', $telegramUserId)->first();
        if (!$user) {
            $user = User::where('phone', $phone)->first();
            if ($user) {
                $user->update([
                    'telegram_id' => $telegramUserId,
                    'telegram_username' => $from['username'] ?? null,
                    'telegram_first_name' => $from['first_name'] ?? null,
                    'telegram_last_name' => $from['last_name'] ?? null,
                    'phone' => $phone,
                    'phone_verified_at' => Carbon::now(),
                ]);
                TelegramContact::where('telegram_id', $telegramUserId)->update(['user_id' => $user->id]);
            } else {
                // Пользователь мог быть создан с debug telegram_id (1000000000) при пустом initData
                $user = User::where('telegram_id', '1000000000')
                    ->where(function ($q) {
                        $q->whereNull('phone')->orWhere('phone', '');
                    })
                    ->orderByDesc('updated_at')
                    ->first();
                if ($user) {
                    $user->update([
                        'telegram_id' => $telegramUserId,
                        'telegram_username' => $from['username'] ?? null,
                        'telegram_first_name' => $from['first_name'] ?? null,
                        'telegram_last_name' => $from['last_name'] ?? null,
                        'phone' => $phone,
                        'phone_verified_at' => Carbon::now(),
                    ]);
                    TelegramContact::where('telegram_id', $telegramUserId)->update(['user_id' => $user->id]);
                }
            }
        } else {
            $user->update([
                'phone' => $phone,
                'phone_verified_at' => Carbon::now(),
            ]);
            TelegramContact::where('telegram_id', $telegramUserId)->update(['user_id' => $user->id]);
        }

        $replyMarkup = $this->buildWebAppReplyMarkup();
        $this->sendMessage($chatId, 'Спасибо! Теперь откройте приложение.', $replyMarkup ? ['reply_markup' => $replyMarkup] : []);
    }

    /** Кнопка «Открыть приложение» только при валидном HTTPS URL (Telegram API иначе возвращает ошибку). */
    private function buildWebAppReplyMarkup(): array
    {
        if ($this->webappUrl === '' || !str_starts_with($this->webappUrl, 'https://')) {
            return [];
        }
        return [
            'inline_keyboard' => [[
                [
                    'text' => 'Открыть приложение',
                    'web_app' => ['url' => $this->webappUrl],
                ],
            ]],
        ];
    }

    private function sendMessage(string $chatId, string $text, array $extra = []): void
    {
        if ($this->botToken === '') {
            Log::warning('Telegram bot: TELEGRAM_BOT_TOKEN не задан');
            return;
        }

        try {
            $url = "https://api.telegram.org/bot{$this->botToken}/sendMessage";
            $body = array_merge([
                'chat_id' => $chatId,
                'text' => $text,
                'parse_mode' => 'HTML',
            ], $extra);

            $response = Http::timeout(10)->asJson()->post($url, $body);
            if (!$response->successful()) {
                Log::warning('Telegram bot sendMessage failed', [
                    'chat_id' => $chatId,
                    'status' => $response->status(),
                    'body' => $response->body(),
                ]);
            }
        } catch (\Throwable $e) {
            Log::error('Telegram bot sendMessage exception', [
                'chat_id' => $chatId,
                'message' => $e->getMessage(),
            ]);
        }
    }
}
