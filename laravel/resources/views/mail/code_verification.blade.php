<x-mail::message>
# Код подтверждения

Ваш код для входа в PrimeFoods через Telegram Mini App:

**{{ $data['code'] ?? '' }}**

Код действителен {{ config('code_verification.code_lifetime', 10) }} минут.

Если вы не запрашивали этот код, проигнорируйте письмо.

{{ __('Regards,') }}<br>
{{ config('app.name') }}
</x-mail::message>
