# План реализации Telegram Mini App и авторизации через Telegram

## 🎯 Рекомендуемый подход: Гибридная авторизация (Best Practice)

### Почему гибридный подход?

1. **Единый аккаунт везде** — пользователь может начать в Mini App, продолжить на сайте
2. **Соответствие паттерну проекта** — у вас уже есть OAuth (VK, Yandex) с привязкой/отвязкой
3. **Лучший UX** — меньше барьеров для входа
4. **Масштабируемость** — легко добавить другие способы авторизации

---

## 📋 Этапы реализации

### Этап 1: Создание и настройка Telegram-бота

#### 1.1. Создание бота через @BotFather

1. Открыть Telegram и найти `@BotFather`
2. Выполнить команду `/newbot`
3. Указать имя бота (например: "PrimeFoods")
4. Указать username (например: `@PrimeFoodsBot`)
5. **Сохранить Bot Token** — он понадобится для `.env`

#### 1.2. Настройка Mini App

1. В `@BotFather` выполнить `/mybots`
2. Выбрать созданного бота
3. Перейти в "Bot Settings" → "Menu Button"
4. Установить кнопку "Open App" с URL вашего Mini App:
   ```
   https://primefoods.ru/tg-app
   ```
   (или `https://tma.primefoods.ru` для отдельного поддомена)

#### 1.3. Настройка команд бота (опционально)

В `@BotFather` выполнить `/setcommands` для вашего бота:

```
start - Открыть приложение
help - Помощь
orders - Мои заказы
```

#### 1.4. Добавление переменных окружения

В `laravel/.env` добавить:

```env
# Telegram Bot
TELEGRAM_BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_BOT_NAME=PrimeFoodsBot
TELEGRAM_WEBAPP_URL=https://primefoods.ru/tg-app

# Для локальной разработки используйте ngrok или Cloudflare Tunnel
# Пример с ngrok: https://abc123.ngrok-free.app/tg-app
TELEGRAM_WEBAPP_URL_DEV=https://your-ngrok-url.ngrok-free.app/tg-app

# Для проверки подписи (используется Bot Token)
# TELEGRAM_BOT_TOKEN уже указан выше
```

**⚠️ ВАЖНО:** Telegram Bot **НЕ принимает** `localhost` URLs. Для локальной разработки обязательно нужен публичный HTTPS туннель (ngrok, Cloudflare Tunnel и т.д.).

В `config/services.php` добавить:

```php
'telegram' => [
    'bot_token' => env('TELEGRAM_BOT_TOKEN'),
    'bot_name' => env('TELEGRAM_BOT_NAME'),
    'webapp_url' => env('TELEGRAM_WEBAPP_URL'),
    'webapp_url_dev' => env('TELEGRAM_WEBAPP_URL_DEV'),
],
```

---

### Этап 2: Расширение модели User

#### 2.1. Миграция для добавления полей Telegram

Создать миграцию: `laravel/app/Modules/User/database/migrations/YYYY_MM_DD_HHMMSS_add_telegram_fields_to_users_table.php`

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->bigInteger('telegram_id')->nullable()->unique()->after('yandex_id');
            $table->string('telegram_username', 100)->nullable()->after('telegram_id');
            $table->string('telegram_first_name', 100)->nullable()->after('telegram_username');
            $table->string('telegram_last_name', 100)->nullable()->after('telegram_first_name');
            $table->string('telegram_photo_url')->nullable()->after('telegram_last_name');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'telegram_id',
                'telegram_username',
                'telegram_first_name',
                'telegram_last_name',
                'telegram_photo_url',
            ]);
        });
    }
};
```

#### 2.2. Обновление модели User

В `laravel/app/Modules/User/src/Models/User.php`:

```php
protected $fillable = [
    // ... существующие поля
    'telegram_id',
    'telegram_username',
    'telegram_first_name',
    'telegram_last_name',
    'telegram_photo_url',
];

// Добавить метод для проверки привязки Telegram
public function hasTelegram(): bool
{
    return !empty($this->telegram_id);
}
```

---

### Этап 3: Реализация проверки подписи Telegram (Backend)

#### 3.1. Создание сервиса для валидации Telegram данных

Создать: `laravel/app/Modules/Authorization/src/Services/TelegramAuthService.php`

**Ключевые моменты безопасности:**
- Telegram передаёт данные в формате `initData` (query string)
- Параметр `hash` содержит HMAC-SHA256 подпись
- **ВСЕГДА проверяем подпись на сервере** — никогда не доверяем клиенту

**Алгоритм проверки:**
1. Получить `initData` от клиента
2. Разобрать query string на параметры
3. Извлечь `hash` (это подпись)
4. Построить `data_check_string` из остальных параметров (в алфавитном порядке)
5. Вычислить `secret_key = HMAC_SHA256("WebAppData", BOT_TOKEN)`
6. Вычислить `hmac = HMAC_SHA256(data_check_string, secret_key)`
7. Сравнить `hmac` с `hash`
8. Проверить `auth_date` (не старше 24 часов)

#### 3.2. Структура сервиса

```php
<?php

namespace Authorization\Services;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Crypt;

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
            $botToken = config('services.telegram.bot_token');
            $secretKey = hash_hmac('sha256', 'WebAppData', $botToken, true);
            
            // Вычисляем HMAC
            $calculatedHash = bin2hex(
                hash_hmac('sha256', $dataCheckString, $secretKey, true)
            );
            
            // Сравниваем хеши (timing-safe comparison)
            if (!hash_equals($calculatedHash, $hash)) {
                Log::warning('Telegram auth: неверная подпись', [
                    'calculated' => $calculatedHash,
                    'received' => $hash,
                ]);
                return false;
            }
            
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
```

---

### Этап 4: Контроллер для авторизации через Telegram

#### 4.1. Создание контроллера

Создать: `laravel/app/Modules/Authorization/src/Http/Controllers/TelegramAuthController.php`

**Логика (по аналогии с VkontakteController):**

1. **Если пользователь уже авторизован** → привязка Telegram к существующему аккаунту
2. **Если не авторизован:**
   - Ищем по `telegram_id`
   - Если не нашли → ищем по `phone` (если есть в данных Telegram)
   - Если не нашли → создаём нового пользователя
3. Авторизуем пользователя через `Auth::login()`
4. Логируем событие через `ActivityLogService`

```php
<?php

namespace Authorization\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\UserActivityLog;
use App\Services\ActivityLogService;
use App\Support\UserBlockHelper;
use Authorization\Services\TelegramAuthService;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Referral\Models\Referral;
use User\Models\User;

class TelegramAuthController extends Controller
{
    public function webappAuth(Request $request, ActivityLogService $activityLogService): JsonResponse
    {
        $request->validate([
            'initData' => 'required|string',
        ]);
        
        // Валидация подписи Telegram
        $telegramData = TelegramAuthService::validateInitData($request->initData);
        
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
        
        // Если пользователь уже авторизован → привязка
        if (Auth::check()) {
            $user = Auth::user();
            
            // Проверяем, что этот Telegram ID не привязан к другому пользователю
            $telegramExists = User::where('telegram_id', $telegramId)
                ->where('id', '!=', $user->id)
                ->exists();
            
            if ($telegramExists) {
                return response()->json([
                    'success' => false,
                    'error' => 'Этот Telegram аккаунт уже привязан к другому пользователю',
                ], 409);
            }
            
            // Привязываем Telegram
            $user->update([
                'telegram_id' => $telegramId,
                'telegram_username' => $telegramUsername,
                'telegram_first_name' => $telegramFirstName,
                'telegram_last_name' => $telegramLastName,
                'telegram_photo_url' => $telegramPhotoUrl,
            ]);
            
            // Заполняем имя, если не заполнено
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
            ]);
        }
        
        // Ищем пользователя по telegram_id
        $user = User::where('telegram_id', $telegramId)->first();
        
        // Если не нашли, ищем по телефону (если есть в Telegram)
        if (!$user && isset($userInfo['phone_number'])) {
            $phone = \App\Helpers\PhoneHelper::formatPhone($userInfo['phone_number']);
            $user = User::where('phone', $phone)->first();
            
            if ($user) {
                // Привязываем Telegram к существующему аккаунту
                $user->update([
                    'telegram_id' => $telegramId,
                    'telegram_username' => $telegramUsername,
                    'telegram_first_name' => $telegramFirstName,
                    'telegram_last_name' => $telegramLastName,
                    'telegram_photo_url' => $telegramPhotoUrl,
                ]);
            }
        }
        
        // Если всё ещё не нашли → создаём нового пользователя
        $isNewUser = false;
        if (!$user) {
            $isNewUser = true;
            $user = User::create([
                'name' => $telegramFirstName,
                'last_name' => $telegramLastName,
                'telegram_id' => $telegramId,
                'telegram_username' => $telegramUsername,
                'telegram_first_name' => $telegramFirstName,
                'telegram_last_name' => $telegramLastName,
                'telegram_photo_url' => $telegramPhotoUrl,
                'phone' => isset($userInfo['phone_number']) 
                    ? \App\Helpers\PhoneHelper::formatPhone($userInfo['phone_number']) 
                    : null,
                'phone_verified_at' => isset($userInfo['phone_number']) ? Carbon::now() : null,
                'password' => null,
            ]);
            
            // Обработка реферального кода (если есть)
            if ($referralCode = session('referral_code')) {
                $referral = Referral::where('referral_code', $referralCode)
                    ->whereNull('invited_id')
                    ->first();
                
                if ($referral && $referral->inviter_id !== $user->id) {
                    $alreadyInvited = Referral::where('invited_id', $user->id)->exists();
                    if (!$alreadyInvited) {
                        $referral->update(['invited_id' => $user->id]);
                    }
                }
            }
        }
        
        // Проверка блокировки
        if (UserBlockHelper::isBlocked($user)) {
            $activityLogService->logSocialAuth($user, $request, UserActivityLog::PROVIDER_TELEGRAM, false);
            
            Log::warning('Telegram auth: попытка входа заблокированного пользователя', [
                'user_id' => $user->id,
                'telegram_id' => $telegramId,
            ]);
            
            return response()->json([
                'success' => false,
                'errors' => [
                    'blocked' => UserBlockHelper::blockMessage(),
                ],
            ], 403);
        }
        
        // Авторизуем пользователя
        Auth::login($user);
        
        // Логирование
        $activityLogService->logSocialAuth(
            $user, 
            $request, 
            UserActivityLog::PROVIDER_TELEGRAM, 
            true, 
            $isNewUser
        );
        
        return response()->json([
            'success' => true,
            'registered' => $isNewUser,
            'user' => $user->only(['id', 'name', 'email', 'phone']),
        ]);
    }
    
    /**
     * Отвязка Telegram аккаунта
     */
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
```

#### 4.2. Добавление роутов

В `laravel/app/Modules/Authorization/routes/auth.php`:

```php
// Telegram Mini App авторизация
Route::post('telegram/webapp-auth', [TelegramAuthController::class, 'webappAuth'])
    ->name('telegram.webapp.auth');

// Отвязка Telegram (требует авторизации)
Route::middleware('auth')->group(function () {
    Route::post('telegram/detach', [TelegramAuthController::class, 'detach'])
        ->name('telegram.detach');
});
```

---

### Этап 5: Frontend — интеграция Telegram WebApp

#### 5.1. Создание отдельного роута для Mini App

В `laravel/resources/js/app.js` или в роутинге Inertia добавить:

```javascript
// Telegram Mini App route
{
    path: '/tg-app',
    name: 'telegram-app',
    component: () => import('./pages/TelegramApp.vue'),
    meta: {
        requiresAuth: false, // авторизация через Telegram
    },
}
```

#### 5.2. Создание компонента TelegramApp.vue

Создать: `laravel/resources/js/pages/TelegramApp.vue`

```vue
<template>
    <div class="telegram-app">
        <div v-if="loading" class="loading">
            Авторизация...
        </div>
        
        <div v-else-if="error" class="error">
            {{ error }}
        </div>
        
        <div v-else>
            <!-- Основной контент Mini App -->
            <router-view />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const loading = ref(true);
const error = ref(null);
const router = useRouter();

onMounted(async () => {
    // Проверяем, что мы в Telegram WebApp
    if (!window.Telegram?.WebApp) {
        error.value = 'Это приложение доступно только в Telegram';
        loading.value = false;
        return;
    }
    
    const tg = window.Telegram.WebApp;
    
    // Инициализация Telegram WebApp
    tg.ready();
    tg.expand(); // Разворачиваем на весь экран
    
    // Настройка темы (опционально)
    tg.setHeaderColor('#ffffff');
    tg.setBackgroundColor('#ffffff');
    
    // Получаем initData
    const initData = tg.initData;
    
    if (!initData) {
        error.value = 'Не удалось получить данные от Telegram';
        loading.value = false;
        return;
    }
    
    try {
        // Отправляем на backend для валидации и авторизации
        const response = await axios.post('/telegram/webapp-auth', {
            initData: initData,
        });
        
        if (response.data.success) {
            // Авторизация успешна
            // Laravel установит cookie сессии автоматически
            // Теперь можно загружать данные пользователя
            
            // Переходим на главную страницу Mini App
            router.push('/tg-app/main');
        } else {
            error.value = response.data.error || 'Ошибка авторизации';
        }
    } catch (err) {
        console.error('Telegram auth error:', err);
        error.value = err.response?.data?.error || 'Ошибка подключения к серверу';
    } finally {
        loading.value = false;
    }
});
</script>
```

#### 5.3. Подключение Telegram WebApp SDK

В `laravel/resources/views/app.blade.php` или в отдельном layout для Mini App:

```html
<!-- Telegram WebApp SDK -->
<script src="https://telegram.org/js/telegram-web-app.js"></script>
```

---

### Этап 6: Интеграция с основным сайтом (опционально)

#### 6.1. Telegram Login Widget на сайте

Для входа через Telegram на основном сайте (не в Mini App) можно использовать **Telegram Login Widget**.

Добавить в форму входа компонент:

```vue
<!-- laravel/resources/js/components/TelegramLoginWidget.vue -->
<template>
    <div class="telegram-login-widget">
        <script 
            async 
            src="https://telegram.org/js/telegram-widget.js?22" 
            data-telegram-login="{{ botName }}" 
            data-size="large" 
            data-onauth="onTelegramAuth"
            data-request-access="write"
        ></script>
    </div>
</template>

<script setup>
// Обработчик авторизации через виджет
window.onTelegramAuth = function(user) {
    // Отправляем данные на backend
    axios.post('/telegram/widget-auth', {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        photo_url: user.photo_url,
        auth_date: user.auth_date,
        hash: user.hash,
    }).then(response => {
        if (response.data.success) {
            window.location.reload();
        }
    });
};
</script>
```

#### 6.2. Endpoint для виджета

В `TelegramAuthController` добавить метод `widgetAuth()` (аналогично `webappAuth`, но с другой валидацией подписи для виджета).

---

### Этап 7: Обновление профиля пользователя

#### 7.1. Добавление статуса Telegram в профиль

В компоненте редактирования профиля (`ProfileEdit.vue`) добавить:

```vue
<template>
    <!-- ... существующий код ... -->
    
    <div class="social-connections">
        <h3>Привязанные аккаунты</h3>
        
        <!-- Telegram -->
        <div class="connection-item">
            <span>Telegram</span>
            <span v-if="user.telegram_id">
                ✓ Привязан (@{{ user.telegram_username }})
                <button @click="detachTelegram">Отвязать</button>
            </span>
            <span v-else>
                Не привязан
                <a :href="telegramBotUrl" target="_blank">Привязать</a>
            </span>
        </div>
        
        <!-- VK, Yandex (существующие) -->
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const user = ref(/* данные пользователя */);
const telegramBotUrl = `https://t.me/${config('services.telegram.bot_name')}?start=link`;

const detachTelegram = async () => {
    if (!confirm('Отвязать Telegram аккаунт?')) return;
    
    try {
        await axios.post('/telegram/detach');
        // Обновить данные пользователя
        user.value.telegram_id = null;
    } catch (err) {
        alert('Ошибка при отвязке');
    }
};
</script>
```

---

### Этап 8: Webhook для бота (опционально)

#### 8.1. Обработка команд бота

Создать: `laravel/app/Modules/Telegram/src/Http/Controllers/TelegramWebhookController.php`

```php
<?php

namespace Telegram\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TelegramWebhookController extends Controller
{
    public function handle(Request $request)
    {
        $update = $request->all();
        
        // Обработка команды /start
        if (isset($update['message']['text']) && str_starts_with($update['message']['text'], '/start')) {
            $chatId = $update['message']['chat']['id'];
            $startParam = explode(' ', $update['message']['text'])[1] ?? null;
            
            // Отправляем сообщение с кнопкой "Открыть приложение"
            $this->sendMessage($chatId, 'Добро пожаловать в PrimeFoods!', [
                'inline_keyboard' => [[
                    [
                        'text' => 'Открыть приложение',
                        'web_app' => ['url' => config('services.telegram.webapp_url')],
                    ],
                ]],
            ]);
        }
        
        return response()->json(['ok' => true]);
    }
    
    private function sendMessage($chatId, $text, $replyMarkup = null)
    {
        // Использовать Telegram Bot API для отправки сообщения
        // Можно использовать библиотеку типа telegram-bot-sdk
    }
}
```

#### 8.2. Настройка webhook

В `@BotFather` выполнить:
```
/setwebhook
URL: https://primefoods.ru/api/telegram/webhook
```

---

### Этап 9: Обновление ActivityLogService

Добавить константу для Telegram в `UserActivityLog`:

```php
const PROVIDER_TELEGRAM = 'telegram';
```

---

### Этап 10: Тестирование

#### 10.1. Локальное тестирование

**⚠️ КРИТИЧЕСКИ ВАЖНО:** Telegram Bot **НЕ принимает** `localhost` URLs. Для локальной разработки **обязательно** нужен публичный HTTPS туннель.

**Вариант 1: ngrok**

1. **Регистрация и настройка:**
   - Зарегистрируйтесь на https://dashboard.ngrok.com/signup (бесплатно)
   - Получите authtoken: https://dashboard.ngrok.com/get-started/your-authtoken
   - Установите authtoken:
     ```bash
     ngrok config add-authtoken ваш_authtoken_здесь
     ```

2. Установите ngrok: https://ngrok.com/download
   ```bash
   # macOS
   brew install ngrok
   ```

3. Запустите туннель на порт вашего приложения:
   ```bash
   ngrok http 8116
   ```

4. Скопируйте полученный HTTPS URL (например: `https://abc123.ngrok-free.app`)

5. Добавьте в `laravel/.env`:
   ```env
   TELEGRAM_WEBAPP_URL_DEV=https://abc123.ngrok-free.app/tg-app
   ```

6. В @BotFather настройте Menu Button с этим URL

7. **Важно:** При каждом перезапуске ngrok URL меняется (на бесплатном плане). Для стабильной разработки используйте:
   - ngrok с зарегистрированным аккаунтом и статическим доменом (платный план)
   - Или Cloudflare Tunnel (см. ниже) — не требует регистрации

**Вариант 2: Cloudflare Tunnel (рекомендуется для локальной разработки)**

**Преимущества:** Не требует регистрации, бесплатный, стабильный домен

1. Установите `cloudflared`:
   ```bash
   # macOS
   brew install cloudflared
   
   # Или скачайте с https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/
   ```

2. Запустите туннель:
   ```bash
   cloudflared tunnel --url http://localhost:8116
   ```

3. Скопируйте полученный HTTPS URL (например: `https://abc123.trycloudflare.com`)

4. Используйте полученный URL аналогично ngrok в настройках выше

**Вариант 3: Локальный домен с самоподписанным сертификатом (только для тестирования)**

Можно использовать локальный домен с HTTPS, но это сложнее и требует настройки DNS и сертификатов. Для большинства случаев ngrok — оптимальный выбор.

#### 10.2. Сценарии тестирования

1. ✅ Открытие Mini App → автоматическая авторизация
2. ✅ Создание нового пользователя через Telegram
3. ✅ Вход существующего пользователя по telegram_id
4. ✅ Привязка Telegram к существующему аккаунту (если авторизован)
5. ✅ Отвязка Telegram из профиля
6. ✅ Проверка блокировки пользователя
7. ✅ Обработка ошибок (неверная подпись, истёкший auth_date)

---

### Этап 11: Документация

Обновить:
- `docs/LOCAL_SETUP.md` — добавить секцию про Telegram Bot Token
- Создать `docs/TELEGRAM_MINI_APP.md` — детальная документация API

---

## 🔒 Безопасность

### Критически важно:

1. **ВСЕГДА проверять подпись на сервере** — никогда не доверять клиенту
2. **Проверять auth_date** — отклонять запросы старше 24 часов
3. **Использовать timing-safe сравнение** (`hash_equals`)
4. **Логировать все попытки авторизации** (успешные и неуспешные)
5. **Хранить Bot Token в `.env`** — никогда не коммитить в репозиторий

---

## 📝 Чеклист реализации

- [ ] Создан бот в @BotFather
- [ ] Добавлены переменные окружения
- [ ] Создана миграция для полей Telegram
- [ ] Обновлена модель User
- [ ] Реализован TelegramAuthService
- [ ] Создан TelegramAuthController
- [ ] Добавлены роуты
- [ ] Создан компонент TelegramApp.vue
- [ ] Подключен Telegram WebApp SDK
- [ ] Обновлён профиль пользователя (привязка/отвязка)
- [ ] Добавлено логирование в ActivityLogService
- [ ] Настроен webhook (опционально)
- [ ] Протестированы все сценарии
- [ ] Обновлена документация

---

## 🚀 Следующие шаги

После реализации базовой авторизации можно добавить:

1. **Уведомления через бота** — отправка уведомлений о заказах
2. **Быстрые действия** — кнопки для повторного заказа, отслеживания заказа
3. **Интеграция с корзиной** — синхронизация корзины между сайтом и Mini App
4. **Персонализация** — использование данных Telegram для улучшения UX
