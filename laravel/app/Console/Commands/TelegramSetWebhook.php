<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

/**
 * Устанавливает URL вебхука для Telegram бота.
 * Для локальной разработки с ngrok используйте TELEGRAM_WEBAPP_URL_DEV (например https://xxx.ngrok-free.app/tg-app) —
 * вебхук будет установлен на https://xxx.ngrok-free.app/telegram/bot-webhook
 */
class TelegramSetWebhook extends Command
{
    protected $signature = 'telegram:set-webhook
                            {--url= : Публичный URL вебхука (например https://abc.ngrok-free.app/telegram/bot-webhook)}';

    protected $description = 'Установить webhook для Telegram бота (для приёма /start и контактов)';

    public function handle(): int
    {
        $token = config('services.telegram.bot_token');
        if (empty($token)) {
            $this->error('TELEGRAM_BOT_TOKEN не задан в .env');
            return Command::FAILURE;
        }

        $url = $this->option('url');
        if ($url) {
            $webhookUrl = rtrim($url, '/');
        } else {
            $webhookUrl = $this->defaultWebhookUrl();
        }

        if (empty($webhookUrl) || !str_starts_with($webhookUrl, 'https://')) {
            $this->error('Для вебхука нужен публичный HTTPS URL.');
            $this->line('Задайте TELEGRAM_WEBAPP_URL_DEV в .env (например https://xxx.ngrok-free.app/tg-app) или укажите --url=https://xxx.ngrok-free.app/telegram/bot-webhook');
            return Command::FAILURE;
        }

        $this->info("Устанавливаю webhook: {$webhookUrl}");

        $response = Http::get("https://api.telegram.org/bot{$token}/setWebhook", [
            'url' => $webhookUrl,
        ]);

        $data = $response->json();
        if ($data['ok'] ?? false) {
            $this->info('Webhook успешно установлен.');
            return Command::SUCCESS;
        }

        $this->error('Ошибка: ' . ($data['description'] ?? $response->body()));
        return Command::FAILURE;
    }

    private function defaultWebhookUrl(): string
    {
        if (config('app.env') === 'production') {
            return rtrim(config('app.url'), '/') . '/telegram/bot-webhook';
        }

        $devUrl = config('services.telegram.webapp_url_dev', '');
        if (empty($devUrl)) {
            return '';
        }

        $parsed = parse_url($devUrl);
        $scheme = $parsed['scheme'] ?? 'https';
        $host = $parsed['host'] ?? '';
        $port = isset($parsed['port']) ? ':' . $parsed['port'] : '';
        if (empty($host)) {
            return '';
        }
        return "{$scheme}://{$host}{$port}/telegram/bot-webhook";
    }
}
