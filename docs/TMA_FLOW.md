# Сценарий регистрации/авторизации TMA через Telegram (телефон)

Реализованный поток соответствует описанному алгоритму из четырёх шагов.

---

## Быстрый старт (порядок развёртывания)

Последовательность важна: **сначала** получаем публичный URL (ngrok), **затем** прописываем его в `.env`, **потом** поднимаем сервисы и ставим webhook.

| Шаг | Действие |
|-----|----------|
| 1 | Запустить туннель: в отдельном терминале **`ngrok http 8116`** (порт, на котором слушает приложение). Оставить ngrok работать. |
| 2 | В выводе ngrok скопировать **HTTPS URL** (например `https://4a37-212-85-174-93.ngrok-free.app`). |
| 3 | В **`laravel/.env`** задать (или обновить): `TELEGRAM_WEBAPP_URL_DEV=https://ВАШ-URL-ИЗ-NGROK/tg-app`, а также `TELEGRAM_BOT_TOKEN` и при необходимости `TELEGRAM_BOT_NAME` (username бота без @). |
| 4 | Из корня проекта: **`make start`** — поднять контейнеры. |
| 5 | **`make migrate`** — один раз, чтобы создалась таблица `telegram_contacts` (если ещё не выполняли). |
| 6 | **`make telegram-set-webhook`** — установить webhook (URL возьмётся из `TELEGRAM_WEBAPP_URL_DEV`). Либо одной командой: **`make telegram-set-webhook NGROK_URL=https://ВАШ-URL-ИЗ-NGROK`** (тогда шаг 3 можно заменить этой командой после `make start`). |
| 7 | В **BotFather** → ваш бот → Menu Button → указать URL Mini App: `https://ВАШ-URL-ИЗ-NGROK/tg-app`. |
| 8 | В Telegram открыть бота → «Начать» → «Открыть приложение» и пройти сценарий (имя/email → поделиться контактом). |

**После перезапуска ngrok** (новый URL): повторить шаги 2–3 (обновить URL в `.env`) и шаг 6, либо сразу **`make telegram-set-webhook NGROK_URL=https://НОВЫЙ-URL`** и обновить Menu Button в BotFather.

---

## 1. Вход через Telegram-бота. Кнопка «Начать» → приветствие и «Открыть приложение»

- Пользователь открывает бота в Telegram и нажимает **«Начать»** (стандартная кнопка или команда `/start`).
- Бот отвечает приветствием (имя из Telegram) и одной инлайн-кнопкой **«Открыть приложение»** (Web App).
- **Реализация:** `TelegramBotController::webhook()` → `handleStart()` при сообщении `/start` без параметра. Текст приветствия и `inline_keyboard` с `web_app.url` (Mini App URL из `TELEGRAM_WEBAPP_URL` / `TELEGRAM_WEBAPP_URL_DEV`).

---

## 2. Открытие TMA и приветственная страница (имя + email)

- По нажатию **«Открыть приложение»** открывается Mini App (страница `/tg-app`).
- При первом заходе бэкенд по `initData` не находит пользователя по `telegram_id` и возвращает **need_welcome**.
- Фронт показывает шаг **«Добро пожаловать»**: поля «Имя» и «Email», кнопка «Продолжить».
- После отправки формы вызывается **POST /telegram/register-welcome** (initData, name, email) → создаётся/обновляется пользователь с `telegram_id`, без телефона.
- **Реализация:** `TelegramAuthController::webappAuth()` (need_welcome), `registerWelcome()`; в `TelegramApp.vue` — шаг `welcome`, форма и вызов `register-welcome`.

---

## 3. Страница «Подтверждение телефона» и кнопка «Поделиться»

- После успешного register-welcome бэкенд возвращает **need_phone**, фронт переходит на шаг **«Подтверждение телефона»**.
- Отображается текст:  
  *«Чтобы начать пользоваться приложением, просто отправьте свой номер телефона, нажав на кнопку «Поделиться».»*  
  и кнопка **«Поделиться»**.
- По нажатию «Поделиться» открывается чат с ботом (`openTelegramLink('https://t.me/BOT?start=share_phone')`). В чате бот показывает клавиатуру с кнопкой **«Поделиться»** (request_contact). Пользователь нажимает её → появляется нативное окно Telegram с подтверждением «Отправить номер?» → после «Отправить» контакт уходит боту.
- Бот получает контакт в вебхуке, сохраняет номер в `telegram_contacts` и привязывает к пользователю: ищет пользователя по `telegram_id` (созданного на шаге 2) или по номеру телефона; обновляет `users.phone` и `phone_verified_at`, при необходимости создаёт связь в `telegram_contacts.user_id`.
- Пользователь возвращается в TMA (по кнопке «Открыть приложение» в ответе бота или повторно открыв Mini App) и нажимает «Я отправил контакт» (или просто открывает приложение) → снова вызывается **webapp-auth** → пользователь находится по `telegram_id` и телефону → выполняется **Auth::login($user)**.
- **Реализация:** шаг `phone` в `TelegramApp.vue`, кнопка «Поделиться» (openTelegramLink), `TelegramBotController::handleContact()` при получении контакта; в `webappAuth` — поиск по `TelegramContact` и логин.

---

## 4. Последующие входы в TMA — приложение «помнит» пользователя

- При каждом открытии Mini App фронт вызывает **POST /telegram/webapp-auth** с `initData`.
- Бэкенд ищет пользователя по `telegram_id` из подписанных данных Telegram; при наличии пользователя с заполненным телефоном выполняет **Auth::login($user)** и возвращает **success**.
- Сессия Laravel (cookie) сохраняется в WebView Telegram, поэтому при следующих открытиях TMA пользователь остаётся авторизованным и видит экран «Добро пожаловать в PrimeFoods! Вы успешно авторизованы» и кнопку **«Перейти в приложение»** (переход на `/menu` или другой раздел для авторизованных).
- **Реализация:** в `webappAuth` при найденном пользователе с телефоном — `Auth::login($user)`; на фронте при `success` — обновление данных и отображение экрана с кнопкой перехода в приложение.

---

## Технические детали

| Компонент | Файл / маршрут |
|-----------|-----------------|
| Вебхук бота | `POST /telegram/bot-webhook` → `TelegramBotController::webhook` |
| Авторизация TMA | `POST /telegram/webapp-auth` → `TelegramAuthController::webappAuth` |
| Приветственный шаг | `POST /telegram/register-welcome` → `TelegramAuthController::registerWelcome` |
| Хранение контактов бота | таблица `telegram_contacts`, модель `TelegramContact` |
| Фронт TMA | `laravel/resources/js/src/pages/telegram-app/ui/TelegramApp.vue` |
| Страница Mini App | GET `/tg-app` → Inertia `telegram-app/ui/TelegramApp` |
| Вход по токену (после TMA) | GET `/telegram/login-by-token?token=...` → логин, редирект на `/menu` |

---

## Интеграция с монолитом

Приложение — монолит (Laravel + Inertia, один домен). Авторизация TMA встроена в общую систему так:

- **Guard и сессия:** используется стандартный guard `web` и общая сессия (driver из `config/session.php`). Пользователь, созданный/найденный в TMA, — тот же `User`, что и при обычном входе по email/телефону.
- **Маршруты:** все маршруты TMA (`/telegram/*`) подключаются через `AuthorizationModuleServiceProvider` с middleware `web`, то есть с сессией и cookie в том же домене.
- **Переход в приложение:** кнопка «Перейти в приложение» ведёт на `GET /telegram/login-by-token?token=...`. В монолите это тот же домен: контроллер выполняет `Auth::login($user)` и редирект на `route('menu-page')` (`/menu`). Ответ устанавливает cookie сессии; при переходе на `/menu` cookie уходит с запросом, middleware `auth` и `verified` проходят.
- **Middleware `/menu`:** маршрут защищён `auth` и `verified` (EnsureVerified). Пользователи TMA получают при регистрации `email_verified_at`, при отправке контакта — `phone_verified_at`, поэтому после входа по токену доступ к `/menu` разрешён.
- **Токен вместо cookie в WebView:** в WebView Telegram cookie сессии иногда не сохраняются. Поэтому при успешном `webapp-auth` сервер отдаёт одноразовый `login_token`; переход «Перейти в приложение» идёт по ссылке с этим токеном. Обработчик `loginByToken` логинит пользователя в общую сессию монолита и редиректит на `/menu` — дальше всё как для обычного авторизованного пользователя.

Итог: один домен, одна сессия, одна модель User; TMA лишь ещё один способ входа в тот же монолит.

---

## Команды Make для Telegram Mini App

Все команды — из **корня проекта**. Сначала должны быть запущены **ngrok** и прописан **`TELEGRAM_WEBAPP_URL_DEV`** в `laravel/.env`, затем **`make start`**; после этого — webhook, миграции и т.д. (см. [Быстрый старт](#быстрый-старт-порядок-развёртывания)).

| Команда | Описание |
|--------|----------|
| `make start` | Поднять контейнеры. Выполнять **после** настройки ngrok и `.env`. |
| `make migrate` | Миграции (в т.ч. таблица `telegram_contacts`). Один раз после первого развёртывания TMA. |
| `make telegram-set-webhook` | Установить webhook; URL берётся из `TELEGRAM_WEBAPP_URL_DEV` в `laravel/.env`. |
| `make telegram-set-webhook NGROK_URL=<url>` | Обновить `TELEGRAM_WEBAPP_URL_DEV` в `.env` и установить webhook одной командой (удобно после перезапуска ngrok). Пример: `make telegram-set-webhook NGROK_URL=https://4a37-212-85-174-93.ngrok-free.app`. |
| `make telegram-set-webhook-url URL=<url>` | Установить webhook с явным URL. Пример: `make telegram-set-webhook-url URL=https://abc.ngrok-free.app/telegram/bot-webhook`. |
| `make telegram-routes` | Показать маршруты `telegram/*` (проверка, что webapp-auth, register-welcome, bot-webhook зарегистрированы). |
| `make telegram-help` | Краткий список команд TMA. |
| `make npm-build` | Собрать фронт (в т.ч. страницу TMA). Входит в `make rebuild`. |

**Локальная разработка с ngrok:** подробнее — `LOCAL_SETUP.md` (раздел 9).

---

## Проверка и устранение неполадок

Если функционал не срабатывает, проверьте по шагам **в указанном порядке**.

### 1. Сначала ngrok, потом .env

Сначала запускается **ngrok** — только после этого появляется публичный URL для подстановки в `.env`:

1. В отдельном терминале: **`ngrok http 8116`** (оставить работать).
2. Скопировать HTTPS URL из вывода ngrok.
3. В **`laravel/.env`** задать **полный** URL с путём `/tg-app`:

```env
TELEGRAM_WEBAPP_URL_DEV=https://ВАШ-ID.ngrok-free.app/tg-app
```

Если указать только `https://ВАШ-ID.ngrok-free.app` (без `/tg-app`), кнопка «Открыть приложение» в боте откроет главную страницу сайта, а не TMA.

### 2. Контейнеры и webhook

- Контейнеры подняты: **`make start`** (после настройки ngrok и `.env`).
- Webhook установлен на текущий ngrok: **`make telegram-set-webhook`** или **`make telegram-set-webhook NGROK_URL=https://ВАШ-ID.ngrok-free.app`**.
- При каждом новом запуске ngrok (новый URL) — снова обновить `.env` и выполнить `make telegram-set-webhook` (или команду с `NGROK_URL`). В BotFather обновить Menu Button на новый URL. Иначе бот не отвечает.

### 3. Доступность приложения

В браузере по `https://ВАШ-ID.ngrok-free.app/tg-app` должна открываться страница TMA (не ошибка и не главная без приложения).

### 4. Маршруты

Из корня проекта:

```bash
docker-compose -f docker-compose.local.yml exec app php artisan route:list --path=telegram
```

Должны быть: `POST telegram/webapp-auth`, `POST telegram/register-welcome`, `POST telegram/bot-webhook`. Если их нет — проверьте, что в `config/app.php` в `providers` есть `Authorization\Providers\AuthorizationModuleServiceProvider::class`.

### 5. Бот и переменные в .env

В `laravel/.env` заданы:

- `TELEGRAM_BOT_TOKEN` — токен от @BotFather
- `TELEGRAM_BOT_NAME` — username бота **без @** (например `PrimeFooodsBot`)

### 6. Открывать TMA только из Telegram

Страница `/tg-app` рассчитана на запуск из Telegram (есть `window.Telegram.WebApp` и `initData`). При открытии по прямой ссылке в обычном браузере возможны сообщения вроде «Это приложение доступно только в Telegram» или ошибки авторизации — это ожидаемо.

### 7. Сессия не сохраняется после входа (при открытии из бота)

Если после «Открыть приложение» в ответе бота приложение снова просит авторизацию, в **`laravel/.env`** для WebView Telegram можно задать:

```env
SESSION_SAME_SITE=none
SESSION_SECURE_COOKIE=true
```

(приложение должно работать по HTTPS, например через ngrok.) Затем перезапустить контейнеры.

### 8. Сборка фронта

После изменений во фронте TMA пересоберите: **`make npm-build`** (или `make rebuild`).

---

**Чеклист (порядок важен):**

1. **ngrok** запущен: `ngrok http 8116` → скопирован HTTPS URL.
2. В **`laravel/.env`**: `TELEGRAM_WEBAPP_URL_DEV=https://....ngrok-free.app/tg-app`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_BOT_NAME`.
3. **`make start`** — контейнеры подняты.
4. **`make telegram-set-webhook`** (или с `NGROK_URL=...`) — webhook установлен.
5. В **BotFather**: Menu Button = `https://....ngrok-free.app/tg-app`.
6. В Telegram: бот → «Начать» → «Открыть приложение» — проверка сценария.
