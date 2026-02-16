<?php

namespace App\Http\Controllers\Moonshine;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use MoonShine\Laravel\Models\MoonshineUser;
use User\Models\User;

class ImpersonateUserController extends Controller
{
    private const IMPERSONATOR_ROLE = 'Имперсонация';
    private const IMPERSONATOR_EMAIL = 'impersonator@primefoods.local';

    public function __invoke(Request $request, User $user): RedirectResponse
    {
        /** @var MoonshineUser|null $admin */
        $admin = Auth::guard('moonshine')->user();

        if (! $admin || ! $this->isAllowed($admin)) {
            abort(403);
        }

        // Важно: оба guard'а (moonshine и web) хранятся в одной Laravel-сессии.
        // При логине Laravel может регенерировать session id — поэтому сохраняем admin id и восстанавливаем его.
        $moonshineId = Auth::guard('moonshine')->id();

        // Логинимся на web-guard под выбранным клиентом (Laravel сам регенерирует session id)
        Auth::guard('web')->login($user);

        // На всякий случай восстанавливаем moonshine-guard после возможной регенерации сессии
        if ($moonshineId) {
            Auth::guard('moonshine')->loginUsingId($moonshineId);
        }

        logger()->notice('MoonShine: impersonate user', [
            'moonshine_user_id' => $admin->id,
            'impersonated_user_id' => $user->getKey(),
        ]);

        // Перекидываем на главную сайта
        return redirect('/');
    }

    private function isAllowed(MoonshineUser $admin): bool
    {
        $allowedEmail = self::IMPERSONATOR_EMAIL;
        $allowedRoleName = self::IMPERSONATOR_ROLE;

        if ($allowedEmail !== '' && $admin->email === $allowedEmail) {
            return true;
        }

        return $allowedRoleName !== ''
            && ($admin->moonshineUserRole?->name === $allowedRoleName);
    }
}

