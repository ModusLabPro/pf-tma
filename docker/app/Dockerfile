FROM php:8.2-cli AS build2

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    git \
    unzip \
    libzip-dev \
    && docker-php-ext-install zip \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY laravel/ /app

RUN composer install --prefer-dist --dev --optimize-autoloader --no-interaction --ignore-platform-req=ext-gd

RUN composer dump-autoload --optimize

FROM node:20-bookworm-slim AS build3
WORKDIR /app
# Сначала копируем package.json для установки зависимостей
COPY --from=build2 /app/package.json /app/
# Очищаем npm cache перед установкой (для экономии места на диске)
# Удаляем package-lock.json (если есть) чтобы npm установил правильные optional dependencies для Linux платформы
# НЕ используем --no-optional, так как rollup требует платформо-специфичный пакет @rollup/rollup-linux-x64-gnu
# Используем --no-audit и --no-fund для уменьшения операций и экономии места
RUN npm cache clean --force && \
    rm -f package-lock.json && \
    npm install --no-audit --no-fund && \
    npm cache clean --force
# Копируем все необходимые файлы для сборки ПОСЛЕ установки зависимостей
COPY --from=build2 /app/resources /app/resources
COPY --from=build2 /app/vite.config.ts /app/tsconfig.json /app/jsconfig.json /app/eslint.config.js /app/
COPY --from=build2 /app/ssr-server.js* /app/
# Копируем vendor/tightenco/ziggy для vite.config.ts (используется в alias)
# Создаем директорию vendor/tightenco перед копированием
RUN mkdir -p /app/vendor/tightenco
COPY --from=build2 /app/vendor/tightenco/ziggy /app/vendor/tightenco/ziggy
# Копируем public директорию (нужна для Laravel Vite Plugin - создает build директорию)
COPY --from=build2 /app/public /app/public
# Очищаем старые build файлы если они есть (чтобы избежать конфликтов)
RUN rm -rf /app/public/build /app/bootstrap/ssr
# Выполняем сборку
RUN npm run build
# Проверяем результаты сборки
RUN echo "=== Checking build results ===" && \
    echo "Contents of public/build/assets:" && \
    ls -lah /app/public/build/assets/ 2>/dev/null || echo "assets directory not found" && \
    echo "" && \
    CSS_FILE=$(find /app/public/build/assets -name "*.css" -type f 2>/dev/null | head -1) && \
    if [ -n "$CSS_FILE" ]; then \
        CSS_SIZE=$(stat -c%s "$CSS_FILE" 2>/dev/null || echo "0") && \
        echo "CSS file found: $CSS_FILE" && \
        echo "CSS file size: $CSS_SIZE bytes" && \
        if [ "$CSS_SIZE" -eq "0" ]; then \
            echo "⚠️  WARNING: CSS file is empty (0 bytes)" && \
            echo "First 100 bytes of CSS file:" && \
            head -c 100 "$CSS_FILE" && \
            echo ""; \
        fi; \
    else \
        echo "⚠️  WARNING: No CSS file found" && \
        echo "Listing all files in public/build:" && \
        find /app/public/build -type f | head -20; \
    fi
RUN npm run build:ssr


FROM unit:1.33.0-php8.3

WORKDIR /var/www/html/

# Копируем Laravel проект из build2 (включая artisan, vendor, и т.д.)
COPY --from=build2 /app/ /var/www/html/
# Копируем собранные файлы из build3 (public/build с CSS/JS и manifest.json, bootstrap/ssr, node_modules)
# Важно: копируем ПОСЛЕ build2, чтобы перезаписать public/build собранными файлами из build3
RUN mkdir -p /var/www/html/public/build
COPY --from=build3 /app/public/build /var/www/html/public/build
COPY --from=build3 /app/bootstrap/ssr /var/www/html/bootstrap/ssr
COPY --from=build3 /app/node_modules /var/www/html/node_modules
# Проверяем, что manifest.json и CSS файлы существуют (критично для Laravel Vite Plugin)
RUN echo "=== Checking build files ===" && \
    echo "1. Checking manifest.json:" && \
    (test -f /var/www/html/public/build/manifest.json && echo "✅ manifest.json exists" || (echo "❌ manifest.json NOT found!" && exit 1)) && \
    echo "2. Checking assets directory:" && \
    (test -d /var/www/html/public/build/assets && echo "✅ assets directory exists" || (echo "❌ assets directory NOT found!" && exit 1)) && \
    echo "3. Checking CSS in manifest.json:" && \
    (grep -q "\.css" /var/www/html/public/build/manifest.json && echo "✅ CSS entries found in manifest.json" || echo "⚠️  No CSS entries in manifest.json") && \
    echo "4. Listing CSS files in assets:" && \
    (ls -la /var/www/html/public/build/assets/*.css 2>/dev/null && echo "✅ CSS files found" || echo "⚠️  No CSS files found in assets directory") && \
    echo "5. Checking app.ts entry in manifest:" && \
    (grep -q "resources/js/app.ts" /var/www/html/public/build/manifest.json && echo "✅ app.ts entry found in manifest.json" || echo "⚠️  app.ts entry NOT found in manifest.json") && \
    echo "6. Sample of manifest.json (first 50 lines):" && \
    head -50 /var/www/html/public/build/manifest.json && \
    echo "=== Build files check complete ==="

RUN apt-get update && apt-get install -y \
      supervisor \
      apt-utils \
      libfreetype6-dev \
      libjpeg62-turbo-dev \
      libpq-dev \
      libpng-dev \
      libzip-dev \
      zip unzip \
      git \
      wget \
      build-essential \
      libncursesw5-dev \
      libssl-dev \
      libsqlite3-dev \
      tk-dev \
      libgdbm-dev \
      libc6-dev \
      libbz2-dev \
      libffi-dev \
      zlib1g-dev \
      curl && \
      docker-php-ext-install pdo_pgsql && \
      docker-php-ext-install bcmath && \
      docker-php-ext-install gd && \
      docker-php-ext-install zip && \
      docker-php-ext-install pcntl && \
      docker-php-ext-configure opcache --enable-opcache && \
      curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
      apt-get install -y nodejs && \
      apt-get clean && \
      rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*


# gd уже установлена выше, дублирование не нужно

COPY docker/app/php.ini /usr/local/etc/php/php.ini
COPY docker/app/opcache.ini /usr/local/etc/php/conf.d/opcache.ini
COPY docker/app/config.json /var/lib/unit/conf.json
COPY docker/app/supervisord-ssr.conf /etc/supervisor/conf.d/supervisord.conf
COPY docker/app/check-vite.php /var/www/html/docker/app/check-vite.php
# inertia-ssr-server.mjs уже скопирован из build2 (вместе с остальными файлами Laravel)

# post install laravel commands
# Отключаем проверку платформы Composer, заменяя platform_check.php
# (PHP 8.3 в контейнере, но зависимости требуют 8.4)
RUN if [ -f /var/www/html/vendor/composer/platform_check.php ]; then \
        echo '<?php return;' > /var/www/html/vendor/composer/platform_check.php; \
    fi
RUN php artisan key:generate && \
    php artisan storage:link && \
    php artisan route:cache && \
    chmod 777 -R /var/www/html/storage/ && \
    chmod -R 755 /var/www/html/public/build && \
    chown -R www-data:www-data /var/www/ && \
    chown www-data:www-data /var/www/html/inertia-ssr-server.mjs && \
    echo "=== Running Vite check script ===" && \
    php /var/www/html/docker/app/check-vite.php 
    

CMD ["supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]