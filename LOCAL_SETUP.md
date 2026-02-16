## Развёртывание проекта PrimeFoods TMA локально

Этот документ описывает последовательность действий для развёртывания проекта PrimeFoods TMA локально с использованием Docker и восстановления дампа базы данных `pg_dump_20251210_095343.sql`.

Проект состоит из:

- **Backend**: PHP/Laravel (каталог `laravel/`)
- **Frontend**: Vite + TypeScript + Vue (`laravel/resources/js`)
- **База данных**: PostgreSQL 15 (контейнер `db`)
- **Служебные сервисы**: `adminer`, `pgadmin`, `mailhog` (см. `docker-compose.local.yml`)
- **Управление окружением**: `docker-compose`, `Makefile`

---

## 0. Предварительные требования

На хостовой машине должны быть установлены:

- Docker (рекомендуется 20+)
- Docker Compose (v2)
- Make

Проверка версий:

```bash
docker --version
docker compose version
make --version
```

Все следующие команды выполняются из корня проекта:

```bash
cd /Users/qb/work/PrimeFoods/TMA/primefoods-tma
```

---

## 1. Создание `.env` файлов

### 1.1. `.env` в корне проекта

Создаём `.env` из примера:

```bash
cp .env.example .env
```

Откройте файл и при необходимости скорректируйте настройки БД и проекта:

```bash
nano .env
```

Рекомендуемая конфигурация для локальной работы с дампом, который будет заливаться в стандартную базу `postgres`:

```env
DB_CONNECTION=pgsql
DB_HOST=db
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=postgres
DB_PASSWORD=dbpass11

PROJECT=primefoods
```

Важно, чтобы значения `DB_*` в корневом `.env` соответствовали значениями в `laravel/.env`.

### 1.2. `.env` в каталоге `laravel/`

Создаём `.env` для Laravel:

```bash
cp laravel/.env.example laravel/.env
```

Откройте файл:

```bash
nano laravel/.env
```

Приведите блок БД к тем же значениям, что и в корневом `.env`:

```env
DB_CONNECTION=pgsql
DB_HOST=db
DB_PORT=5432
DB_DATABASE=postgres
DB_USERNAME=postgres
DB_PASSWORD=dbpass11

SESSION_DRIVER=database
```

При необходимости можно использовать `SESSION_DRIVER=file`, чтобы хранить сессии в файловой системе, но для типовой конфигурации подойдёт `database`.

---

## 2. Запуск контейнеров: `make start`

Запускаем локальное окружение (PHP, БД, вспомогательные сервисы) и устанавливаем зависимости:

```bash
make start
```

Цель `start` в `Makefile` обычно:

- поднимает контейнеры через `docker-compose -f docker-compose.local.yml up -d`;
- выполняет `composer install` внутри контейнера `app`;
- генерирует `APP_KEY` и выставляет права на `storage`;
- устанавливает JS-зависимости (`npm install`) в каталоге `laravel`.

Проверить состояние контейнеров:

```bash
docker-compose -f docker-compose.local.yml ps
```

Должны быть в статусе `Up` как минимум контейнеры `app` и `db`.

---

## 3. Восстановление дампа базы данных

Дамп расположен в корне проекта:

```text
pg_dump_20251210_095343.sql
```

Мы будем восстанавливать его в базу `postgres` внутри контейнера `db`.

### 3.1. Проверить список баз

Необязательный, но полезный шаг:

```bash
docker-compose -f docker-compose.local.yml exec -T db \
  psql -U postgres -l
```

В списке должна быть база `postgres` (стандартная системная БД).

### 3.2. Восстановление дампа

Выполняем восстановление дампа:

```bash
cat pg_dump_20251210_095343.sql | docker-compose -f docker-compose.local.yml exec -T db \
  psql -U postgres -d postgres
```

После успешного выполнения в базе `postgres` появятся все объекты (схемы, таблицы, данные), содержащиеся в дампе.

Убедитесь, что в `laravel/.env` (и корневом `.env`) указано:

```env
DB_DATABASE=postgres
DB_HOST=db
DB_USERNAME=postgres
DB_PASSWORD=dbpass11
```

---

## 4. Выполнение миграций Laravel

После восстановления дампа необходимо дать Laravel возможность:

- создать недостающие служебные таблицы;
- синхронизировать состояние миграций.

Сначала очистим кеш конфигурации:

```bash
docker-compose -f docker-compose.local.yml exec app php artisan config:clear
```

Затем выполним миграции:

```bash
docker-compose -f docker-compose.local.yml exec app php artisan migrate
```

Типичные эффекты:

- создаётся таблица `sessions` (если используется `SESSION_DRIVER=database` и её не было в дампе);
- создаются другие недостающие таблицы из миграций;
- уже существующие таблицы не ломаются, миграции либо помечаются как выполненные, либо пропускаются.

При появлении ошибок (`relation already exists`, несовпадения схемы и т.п.) необходимо разбирать их адресно, анализируя конкретную миграцию и структуру БД.

---

## 5. Сборка фронтенда: `make npm-build`

Чтобы Laravel корректно работал с Vite и не выдавал ошибку вида:

```text
Vite manifest not found at: /var/www/html/public/build/manifest.json
```

нужно собрать фронтенд и сгенерировать манифест.

Выполните:

```bash
make npm-build
```

Под капотом будет запущен контейнер Node, в котором выполняется:

```bash
npm run build
```

В результате в каталоге `laravel/public/build/` появятся:

- собранные JS/CSS-бандлы;
- файл `manifest.json`, который используется директивой Blade `@vite([...])`.

---

## 6. Сборка SSR-бандла: `make npm-ssr-build`

Если проект использует SSR (например, Inertia SSR), необходим отдельный SSR-бандл.

Выполните:

```bash
make npm-ssr-build
```

Под капотом эта цель запускает:

```bash
npm run build:ssr
```

В результате в каталоге `laravel/bootstrap/ssr/` появится файл `ssr.js` и связанные с ним ресурсы, которые используются SSR-сервером.

---

## 7. Перезапуск приложения

После восстановления БД, выполнения миграций и сборки фронтенда/SSR рекомендуется перезапустить контейнер `app`, чтобы:

- очистились возможные кеши;
- подтянулись новые конфигурации и ассеты.

Команда:

```bash
docker-compose -f docker-compose.local.yml restart app
```

---

## 8. Проверка работы проекта

### 8.1. Доступность приложения

Откройте в браузере:

```text
http://localhost:8116
```

Если все шаги выполнены корректно, приложение должно:

- успешно подключаться к БД;
- не выдавать ошибок вида `relation "sessions" does not exist`;
- не выдавать `ViteManifestNotFoundException`.

### 8.2. Дополнительные проверки

- Статус миграций:

  ```bash
  docker-compose -f docker-compose.local.yml exec app php artisan migrate:status
  ```

- Список таблиц в БД:

  ```bash
  docker-compose -f docker-compose.local.yml exec -T db \
    psql -U postgres -d postgres -c "\dt"
  ```

---

## Краткая последовательность шагов

1. Создать `.env` в корне и в `laravel/`:

   ```bash
   cp .env.example .env
   cp laravel/.env.example laravel/.env
   ```

   Настроить `DB_*` в обоих файлах (как минимум `DB_DATABASE=postgres`, `DB_HOST=db`, `DB_USERNAME=postgres`, `DB_PASSWORD=dbpass11`).

2. Запустить окружение:

   ```bash
   make start
   ```

3. Восстановить дамп БД:

   ```bash
   cat pg_dump_20251210_095343.sql | docker-compose -f docker-compose.local.yml exec -T db \
     psql -U postgres -d postgres
   ```

4. Выполнить миграции:

   ```bash
   docker-compose -f docker-compose.local.yml exec app php artisan migrate
   ```

5. Собрать фронтенд:

   ```bash
   make npm-build
   ```

6. Собрать SSR-бандл:

   ```bash
   make npm-ssr-build
   ```

7. Перезапустить приложение:

   ```bash
   docker-compose -f docker-compose.local.yml restart app
   ```

После этого проект должен быть полностью развёрнут и доступен по адресу `http://localhost:8116`.

---

## 9. Настройка Telegram Mini App для локальной разработки

Если вы работаете с Telegram Mini App, необходимо настроить публичный HTTPS туннель, так как Telegram Bot **не принимает** `localhost` URLs.

### 9.1. Использование ngrok

**Шаг 1: Регистрация и настройка ngrok**

1. Зарегистрируйтесь на https://dashboard.ngrok.com/signup (бесплатно)

2. После регистрации получите ваш authtoken: https://dashboard.ngrok.com/get-started/your-authtoken

3. Установите authtoken:
   ```bash
   ngrok config add-authtoken ваш_authtoken_здесь
   ```

4. Установите ngrok (если еще не установлен):
   ```bash
   # macOS
   brew install ngrok
   
   # или скачайте с https://ngrok.com/download
   ```

**Шаг 2: Запуск туннеля**

1. Запустите туннель на порт приложения:
   ```bash
   ngrok http 8116
   ```

2. Скопируйте полученный HTTPS URL из вывода (например: `https://abc123.ngrok-free.app`)

**Шаг 3: Настройка переменных окружения**

Добавьте в `laravel/.env`:
```env
TELEGRAM_BOT_TOKEN=ваш_токен_от_BotFather
TELEGRAM_BOT_NAME=ваш_бот_username
TELEGRAM_WEBAPP_URL=https://primefoods.ru/tg-app
TELEGRAM_WEBAPP_URL_DEV=https://abc123.ngrok-free.app/tg-app
```

**Шаг 4: Настройка бота в Telegram**

1. **Menu Button** (кнопка «Открыть приложение» в чате с ботом):
   - В @BotFather: `/mybots` → выберите бота → Bot Settings → Menu Button
   - Установите URL: `https://abc123.ngrok-free.app/tg-app` (подставьте ваш ngrok URL)

2. **Webhook** (чтобы бот получал команды /start и контакты «Поделиться»):
   - В `laravel/.env` должна быть строка `TELEGRAM_WEBAPP_URL_DEV=https://abc123.ngrok-free.app/tg-app`
   - Из корня проекта выполните:
     ```bash
     make telegram-set-webhook
     ```
   - Команда подставит вебхук `https://abc123.ngrok-free.app/telegram/bot-webhook` из `TELEGRAM_WEBAPP_URL_DEV`. Если ngrok URL изменился, снова выполните `make telegram-set-webhook` или укажите URL явно: `make telegram-set-webhook-url URL=https://новый-url.ngrok-free.app/telegram/bot-webhook`.

**Шаг 5: Выполнение миграции**

```bash
make migrate
```

Создаётся таблица `telegram_contacts` и при необходимости другие миграции.

**⚠️ Важно:** 
- На бесплатном плане ngrok URL меняется при каждом перезапуске — после нового запуска обновите `TELEGRAM_WEBAPP_URL_DEV` в `laravel/.env`, заново настройте Menu Button в BotFather и выполните `make telegram-set-webhook`
- Для стабильной разработки можно использовать статический домен (требует платный план) или Cloudflare Tunnel (см. ниже)

### 9.2. Альтернатива: Cloudflare Tunnel (без регистрации)

Если не хотите регистрироваться в ngrok, можно использовать Cloudflare Tunnel:

1. Установите Cloudflare Tunnel:
   ```bash
   # macOS
   brew install cloudflared
   ```

2. Запустите туннель:
   ```bash
   cloudflared tunnel --url http://localhost:8116
   ```

3. Скопируйте полученный HTTPS URL (например: `https://abc123.trycloudflare.com`)

4. Используйте этот URL аналогично ngrok в настройках выше

**Преимущества Cloudflare Tunnel:**
- Не требует регистрации для базового использования
- Бесплатный
- Стабильный домен (не меняется при перезапуске)

**Справка по командам Make для TMA:** из корня проекта выполните `make telegram-help` или откройте `docs/TMA_FLOW.md` (раздел «Команды Make для Telegram Mini App»).

### 9.3. Проверка работы Telegram Mini App

1. Убедитесь, что туннель (ngrok или Cloudflare) запущен и приложение доступно по HTTPS URL

2. Откройте Telegram и найдите вашего бота

3. Нажмите на кнопку "Open App" (Menu Button)

4. Должна открыться страница `/tg-app` с автоматической авторизацией

5. Если возникают ошибки, проверьте:
   - Запущен ли туннель
   - Правильно ли указан URL в @BotFather
   - Доступно ли приложение по указанному URL в браузере
