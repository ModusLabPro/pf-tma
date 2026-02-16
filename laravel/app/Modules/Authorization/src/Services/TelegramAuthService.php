<?php

namespace Authorization\Services;

use Illuminate\Support\Facades\Log;

class TelegramAuthService
{
    /**
     * Валидация initData от Telegram WebApp
     * 
     * @param string $initData Query string от Telegram.WebApp.initData
     * @return array|false Массив с данными пользователя или false при ошибке
     */
    public static function validateInitData(string $initData): array|false
    {
        try {
            // Разбираем query string
            parse_str($initData, $data);
            
            if (!isset($data['hash'])) {
                Log::warning('Telegram auth: отсутствует hash в initData');
                return false;
            }
            
            $hash = $data['hash'];
            unset($data['hash']);
            
            // Проверяем auth_date (не старше 24 часов)
            if (isset($data['auth_date'])) {
                $authDate = (int) $data['auth_date'];
                $currentTime = time();
                if ($currentTime - $authDate > 86400) { // 24 часа
                    Log::warning('Telegram auth: истёк срок действия auth_date', [
                        'auth_date' => $authDate,
                        'current_time' => $currentTime,
                    ]);
                    return false;
                }
            }
            
            // Строим data_check_string
            ksort($data);
            $dataCheckString = [];
            foreach ($data as $key => $value) {
                $dataCheckString[] = "{$key}={$value}";
            }
            $dataCheckString = implode("\n", $dataCheckString);
            
            // Вычисляем secret_key
            // Согласно документации Telegram:
            //   secret_key = HMAC_SHA256(key="WebAppData", data=bot_token)
            //   hash = HMAC_SHA256(key=secret_key, data=data_check_string)
            // PHP hash_hmac(algo, data, key) — аргументы: data первым, key вторым
            $botToken = config('services.telegram.bot_token');
            if (!$botToken) {
                Log::error('Telegram auth: Bot Token не настроен');
                return false;
            }
            
            $secretKey = hash_hmac('sha256', $botToken, 'WebAppData', true);
            
            // Вычисляем HMAC
            $calculatedHash = bin2hex(
                hash_hmac('sha256', $dataCheckString, $secretKey, true)
            );
            
            // Сравниваем хеши (timing-safe comparison)
            if (!hash_equals($calculatedHash, $hash)) {
                Log::warning('Telegram auth: неверная подпись', [
                    'calculated' => $calculatedHash,
                    'received' => $hash,
                    'data_check_string_preview' => mb_substr($dataCheckString, 0, 200),
                    'bot_token_prefix' => substr($botToken, 0, 6) . '***',
                ]);
                return false;
            }
            
            Log::info('Telegram auth: подпись валидна', [
                'user_id' => json_decode($data['user'] ?? '{}', true)['id'] ?? null,
            ]);
            
            // Парсим user данные (если есть)
            $userData = [];
            if (isset($data['user'])) {
                $userData = json_decode($data['user'], true);
            }
            
            return [
                'user' => $userData,
                'auth_date' => $data['auth_date'] ?? null,
                'query_id' => $data['query_id'] ?? null,
                'start_param' => $data['start_param'] ?? null,
            ];
            
        } catch (\Exception $e) {
            Log::error('Telegram auth: ошибка валидации', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
            ]);
            return false;
        }
    }
}
