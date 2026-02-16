ifneq (,$(wildcard ./.env))
    include .env
    export
endif

COMPOSE_FILE ?= docker-compose.local.yml
COMPOSE_FILE_SSR ?= docker-compose-ssr.local.yml

setup: 
	cp .env.example .env; 
	cp laravel/.env.example laravel/.env;
	docker network create appnet

# start deploying
start-dep: composer npm composer-install dockerInstall build up 

git-config:
	@echo "Настройка Git..."
	@read -p "Введите ваше имя: " name; \
	git config user.name "$$name"; \
	read -p "Введите вашу электронную почту: " email; \
	git config user.email "$$email"; \
	echo "Настройка завершена."; \
	git config user.name; \
	git config user.email

# deploying
composer:
	bash deploying/composer.sh
npm:
	apt install nodejs; node -v; apt install npm
composer-dep:
	composer install 
dockerInstall:
	bash deploying/docker-install.sh


# Чистая инициализация
init: docker-down-clear docker-build up

# Полностью обновить образы
update: docker-down-clear docker-pull docker-build-pull up

# Delete images by tag
delete-tag: docker-clear-images-tag
# Delete iages by names
delete-name: docker-clear-images-name

# shortcuts
start: docker-up composer-install key-storage npm-install
stop: docker-down
restart: stop start
rebuild: stop build start npm-build
build: docker-build

docker-build:
	docker-compose -f ${COMPOSE_FILE} build
docker-up:
	docker-compose -f ${COMPOSE_FILE} up -d
docker-down:
	docker-compose -f ${COMPOSE_FILE} down --remove-orphans
docker-down-clear:
	docker-compose -f ${COMPOSE_FILE} down -v --remove-orphans
docker-pull:
	docker-compose -f ${COMPOSE_FILE} pull
docker-clear-images-tag:
	docker rmi $$(docker images --format '{{.Repository}}:{{.Tag}}' | grep ':${TAG}') -f
docker-clear-images-name:
	docker rmi $$(docker images --format '{{.Repository}}:{{.Tag}}' | grep '${PROJECT}') -f
composer-update:
	docker-compose -f ${COMPOSE_FILE} exec app composer update
composer-install:
	docker-compose -f ${COMPOSE_FILE} exec app composer install
key-storage:
	docker-compose -f ${COMPOSE_FILE} exec app php artisan key:generate
	docker-compose -f ${COMPOSE_FILE} exec app chmod -R 777 storage
chmod:
	docker exec -it php chmod -R 777 
exec:
	docker-compose -f ${COMPOSE_FILE} exec app bash
npm-install:
	docker run --rm -v "${PWD}/laravel:/app" node:18-bookworm-slim bash -c "cd /app && npm install"
npm-build:
	docker run --rm -v "${PWD}/laravel:/app" node:18-bookworm-slim bash -c "cd /app && npm run build"
npm-build-ssr:
	docker run --rm -v "${PWD}/laravel:/app" node:20-bookworm-slim bash -c "cd /app && npm run build:ssr"

# SSR команды для локальной разработки
ssr-start: docker-ssr-up composer-ssr-install key-ssr-storage npm-ssr-install npm-ssr-build
ssr-stop: docker-ssr-down
ssr-restart: ssr-stop ssr-start
ssr-rebuild: ssr-stop docker-ssr-build ssr-start
docker-ssr-build:
	docker-compose -f ${COMPOSE_FILE_SSR} build
docker-ssr-up:
	docker-compose -f ${COMPOSE_FILE_SSR} up -d
docker-ssr-down:
	docker-compose -f ${COMPOSE_FILE_SSR} down --remove-orphans
docker-ssr-down-clear:
	docker-compose -f ${COMPOSE_FILE_SSR} down -v --remove-orphans
composer-ssr-install:
	docker-compose -f ${COMPOSE_FILE_SSR} exec app composer install
key-ssr-storage:
	docker-compose -f ${COMPOSE_FILE_SSR} exec app php artisan key:generate
	docker-compose -f ${COMPOSE_FILE_SSR} exec app chmod -R 777 storage
npm-ssr-install:
	docker run --rm -v "${PWD}/laravel:/app" node:20-bookworm-slim bash -c "cd /app && npm install"
npm-ssr-build:
	docker run --rm -v "${PWD}/laravel:/app" node:20-bookworm-slim bash -c "cd /app && npm run build:ssr"
ssr-exec:
	docker-compose -f ${COMPOSE_FILE_SSR} exec app bash
ssr-migrate:
	docker-compose -f ${COMPOSE_FILE_SSR} exec app php artisan migrate
ssr-migrate-fresh:
	docker-compose -f ${COMPOSE_FILE_SSR} exec app php artisan migrate:fresh
ssr-migrate-fresh-seed:
	docker-compose -f ${COMPOSE_FILE_SSR} exec app php artisan migrate:fresh --seed
ssr-check:
	@echo "🔍 Проверка SSR сервера в Docker контейнере (SSR режим)..."
	@CONTAINER=$$(docker-compose -f ${COMPOSE_FILE_SSR} ps -q app 2>/dev/null); \
	if [ -z "$$CONTAINER" ]; then \
		echo "❌ Контейнер app не запущен. Запустите: make ssr-start"; \
		exit 1; \
	fi; \
	echo "✅ Контейнер запущен: $$CONTAINER"; \
	echo ""; \
	echo "📋 Проверка процессов SSR (через supervisor должен быть запущен процесс ssr):"; \
	docker exec $$CONTAINER ps aux 2>/dev/null | grep -E "node.*ssr|inertia.*ssr|ssr\.js" | grep -v grep || echo "⚠️  SSR процесс не найден. Проверьте supervisor"; \
	echo ""; \
	echo "📄 Проверка SSR бандла:"; \
	docker exec $$CONTAINER bash -c "test -f /var/www/html/bootstrap/ssr/ssr.js && (echo '✅ SSR бандл найден:'; ls -lh /var/www/html/bootstrap/ssr/ssr.js) || echo '❌ SSR бандл не найден. Выполните: make npm-ssr-build'"; \
	echo ""; \
	echo "🔌 Проверка порта SSR сервера (13714):"; \
	docker exec $$CONTAINER bash -c "netstat -tlnp 2>/dev/null | grep 13714 || ss -tlnp 2>/dev/null | grep 13714 || echo '⚠️  Порт 13714 не слушается'"; \
	echo ""; \
	echo "🌐 Проверка HTTP ответа (первые 500 символов):"; \
	curl -s -A "Googlebot/2.1" http://localhost:8116/catalog 2>/dev/null | head -c 500 || echo "❌ Не удалось получить ответ от сервера"; \
	echo ""
ssr-test:
	@bash laravel/check-ssr.sh http://localhost:8116/catalog

# Проверка SSR для обычного docker-compose.local.yml
check-ssr:
	@echo "🔍 Проверка SSR сервера в Docker контейнере (обычный режим)..."
	@CONTAINER=$$(docker-compose -f docker-compose.local.yml ps -q app 2>/dev/null); \
	if [ -z "$$CONTAINER" ]; then \
		echo "❌ Контейнер app не запущен. Запустите: make start"; \
		exit 1; \
	fi; \
	echo "✅ Контейнер запущен: $$CONTAINER"; \
	echo ""; \
	echo "📋 Проверка процессов (SSR может работать через встроенный механизм Inertia):"; \
	docker exec $$CONTAINER ps aux 2>/dev/null | grep -E "node|inertia|ssr|php.*artisan" | grep -v grep || echo "⚠️  SSR процесс не найден в списке процессов"; \
	echo ""; \
	echo "📄 Проверка SSR бандла:"; \
	docker exec $$CONTAINER bash -c "test -f /var/www/html/bootstrap/ssr/ssr.js && (echo '✅ SSR бандл найден:'; ls -lh /var/www/html/bootstrap/ssr/ssr.js) || echo '❌ SSR бандл не найден. Выполните: make npm-build'"; \
	echo ""; \
	echo "🔌 Проверка порта SSR сервера (13714) - необязательно, если используется встроенный SSR:"; \
	docker exec $$CONTAINER bash -c "netstat -tlnp 2>/dev/null | grep 13714 || ss -tlnp 2>/dev/null | grep 13714 || echo '⚠️  Порт 13714 не слушается (нормально для встроенного SSR Inertia)'"; \
	echo ""; \
	echo "🌐 Проверка HTTP ответа (с User-Agent бота):"; \
	HTML=$$(curl -s -A "Googlebot/2.1" http://localhost:8116/catalog 2>/dev/null); \
	if [ -z "$$HTML" ]; then \
		echo "❌ Не удалось получить ответ от сервера"; \
	else \
		echo "✅ Получен HTTP ответ ($$(echo \"$$HTML\" | wc -c | tr -d ' ') байт)"; \
		echo ""; \
		echo "Проверка наличия контента в div#app:"; \
		APP_CONTENT=$$(echo "$$HTML" | sed -n '/<div id="app"/,/<\/div>/p' | head -20); \
		if echo "$$APP_CONTENT" | grep -q -E "(<header|<main|<section|<article|<h1|<h2|<nav|<div)"; then \
			echo "✅ SSR работает! Контент найден в div#app"; \
			echo "Первые 300 символов контента:"; \
			echo "$$APP_CONTENT" | head -c 300; \
			echo ""; \
		else \
			echo "❌ SSR может не работать. В div#app нет HTML контента"; \
			echo "Первые 200 символов:"; \
			echo "$$APP_CONTENT" | head -c 200; \
		fi; \
	fi; \
	echo ""; \
	echo ""; \
	echo "💡 Для запуска SSR сервера выполните:"; \
	echo "   docker-compose -f docker-compose.local.yml exec app php artisan inertia:start-ssr"; \
	echo "   или в фоновом режиме:"; \
	echo "   docker-compose -f docker-compose.local.yml exec -d app php artisan inertia:start-ssr"
#migrate:
#	${DOCKER_EXEC_APP} php artisan migrate:fresh $(s)

run-tests:
	read -p "Тип теста? - " type; \
	if [ -z "$$type" ]; then\
		type="Feature"; \
	fi; \
	docker compose -f ${COMPOSE_FILE} exec app php artisan test --testsuite=$$type

tinker:
	docker compose -f ${COMPOSE_FILE} exec app php artisan tinker app/Console/tinker.php

migrate:
	docker-compose -f docker-compose.local.yml exec app php artisan migrate
migrate-fresh:
	docker-compose -f docker-compose.local.yml exec app php artisan migrate:fresh
migrate-fresh-seed:
	docker-compose -f docker-compose.local.yml exec app php artisan migrate:fresh --seed

# ---------- Telegram Mini App (TMA) ----------
# Требуют запущенных контейнеров (make start). Переменные — в laravel/.env (TELEGRAM_BOT_TOKEN, TELEGRAM_WEBAPP_URL_DEV и др.).
# Полное описание: docs/TMA_FLOW.md и раздел 9 в LOCAL_SETUP.md

# Установить webhook для бота.
# Без параметра: URL берётся из TELEGRAM_WEBAPP_URL_DEV в laravel/.env.
# С NGROK_URL: обновляет TELEGRAM_WEBAPP_URL_DEV в .env и сразу ставит webhook (удобно после перезапуска ngrok).
#   Пример: make telegram-set-webhook NGROK_URL=https://4a37-212-85-174-93.ngrok-free.app
telegram-set-webhook:
	@if [ -n "$(NGROK_URL)" ]; then \
		url="$(NGROK_URL)"; url="$${url%/}"; \
		url_tg_app="$$url/tg-app"; url_webhook="$$url/telegram/bot-webhook"; \
		if grep -q '^TELEGRAM_WEBAPP_URL_DEV=' laravel/.env 2>/dev/null; then \
			sed "s|^TELEGRAM_WEBAPP_URL_DEV=.*|TELEGRAM_WEBAPP_URL_DEV=$$url_tg_app|" laravel/.env > laravel/.env.tmp && mv laravel/.env.tmp laravel/.env; \
		else \
			echo "TELEGRAM_WEBAPP_URL_DEV=$$url_tg_app" >> laravel/.env; \
		fi; \
		echo "Обновлён TELEGRAM_WEBAPP_URL_DEV=$$url_tg_app"; \
		$(MAKE) telegram-set-webhook-url URL="$$url_webhook"; \
	else \
		docker-compose -f ${COMPOSE_FILE} exec app php artisan telegram:set-webhook; \
	fi

# Установить webhook с явным URL (например после смены ngrok). Пример: make telegram-set-webhook-url URL=https://abc.ngrok-free.app/telegram/bot-webhook
telegram-set-webhook-url:
	@if [ -z "$(URL)" ]; then echo "Укажите URL: make telegram-set-webhook-url URL=https://..."; exit 1; fi; \
	docker-compose -f ${COMPOSE_FILE} exec app php artisan telegram:set-webhook --url="$(URL)"

# Миграции (создают в т.ч. таблицу telegram_contacts). Используйте make migrate.
# Сборка фронта TMA входит в make npm-build / make rebuild.

# Список команд TMA (краткая справка)
telegram-help:
	@echo "Telegram Mini App — команды make:"
	@echo "  make telegram-set-webhook                    — webhook из TELEGRAM_WEBAPP_URL_DEV в .env"
	@echo "  make telegram-set-webhook NGROK_URL=<url>     — обновить .env и поставить webhook (после перезапуска ngrok)"
	@echo "  make telegram-set-webhook-url URL=<url>       — webhook с явным URL"
	@echo "  make telegram-routes                          — проверить маршруты telegram/*"
	@echo "  make telegram-help                            — этот список"
	@echo "  make migrate / make start                     — миграции, контейнеры"
	@echo "Подробнее: docs/TMA_FLOW.md, LOCAL_SETUP.md (раздел 9)."

# Проверка маршрутов TMA (webapp-auth, register-welcome, bot-webhook)
telegram-routes:
	docker-compose -f ${COMPOSE_FILE} exec app php artisan route:list --path=telegram

bash:
	docker exec -it ${PROJECT}_app bash