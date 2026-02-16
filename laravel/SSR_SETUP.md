# Настройка SSR для PrimeFoods Store

## Обзор

Реализован Server-Side Rendering (SSR) через Inertia SSR для обеспечения корректной индексации сайта поисковыми системами.

## Что было сделано

### 1. Установлены зависимости
- `@inertiajs/vue3` - уже содержит SSR функциональность через `@inertiajs/vue3/server`
- `@vue/server-renderer` - рендеринг Vue компонентов на сервере
- `express` - для SSR сервера (опционально)

### 2. Создан SSR entry point
**Файл:** `resources/js/ssr.js`

Этот файл содержит конфигурацию для серверного рендеринга Vue компонентов через Inertia.js.

### 3. Обновлен Vite конфигурация
**Файл:** `vite.config.ts`

- Раскомментирован `ssr: 'resources/js/ssr.js'`
- Добавлена конфигурация `ssr.noExternal` для правильной работы с зависимостями

### 4. Создан middleware для определения ботов
**Файл:** `app/Http/Middleware/DetectSearchEngineBot.php`

Middleware определяет поисковых роботов по User-Agent и помечает запросы для применения SSR.

### 5. Обновлен HandleInertiaRequests
**Файл:** `app/Http/Middleware/HandleInertiaRequests.php`

Добавлен метод `rootView()` для поддержки SSR.

### 6. Создан SSR сервер (опционально)
**Файл:** `ssr-server.js`

Node.js сервер для SSR рендеринга. Может использоваться для внешнего SSR или для тестирования.

### 7. Обновлен app.blade.php
**Файл:** `resources/views/app.blade.php`

Обновлена обработка title для корректной работы с SSR.

## Использование

### ⚠️ ВАЖНО: SSR требует сборки проекта!

SSR **НЕ работает автоматически** в режиме разработки без сборки. Для работы SSR необходимо:

1. **Собрать проект с SSR**
2. **Убедиться, что Laravel использует собранные SSR файлы**

### Установка зависимостей

```bash
cd laravel
npm install
```

### Сборка для продакшена

```bash
# Обычная сборка (БЕЗ SSR)
npm run build

# Сборка с SSR (ОБЯЗАТЕЛЬНО для работы SSR!)
npm run build:ssr
```

**После сборки с SSR**, Laravel Vite Plugin автоматически будет использовать SSR для рендеринга страниц.

### Разработка

```bash
# Обычная разработка (БЕЗ SSR)
npm run dev

# Разработка с SSR (требует сборки SSR файлов)
npm run dev:ssr
```

**Примечание:** В режиме разработки SSR может не работать автоматически. Для полной работы SSR в разработке может потребоваться запуск SSR сервера отдельно.

### Запуск SSR сервера (опционально)

```bash
npm run ssr
```

SSR сервер будет доступен на порту 13714 (или порту, указанном в переменной окружения `SSR_PORT`).

## Как это работает

1. **Автоматический SSR через Laravel Vite Plugin**
   - Inertia.js автоматически использует SSR entry point при сборке
   - SSR работает для всех запросов, если включен в конфигурации

2. **Определение поисковых роботов**
   - Middleware `DetectSearchEngineBot` проверяет User-Agent запроса
   - Если это поисковый робот, запрос помечается для SSR

3. **Рендеринг мета-тегов**
   - Мета-теги рендерятся в `app.blade.php` из props Inertia
   - Поддерживаются `seoData` и `product` props

## Проверка работы

### Тестирование с User-Agent ботов

```bash
# Googlebot
curl -H "User-Agent: Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" http://localhost

# YandexBot
curl -H "User-Agent: Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)" http://localhost
```

### Проверка мета-тегов

```bash
curl -s http://localhost/product/slug | grep -E '<title>|<meta name="description"|<meta property="og:'
```

## Важные замечания

1. **SSR работает автоматически** через Laravel Vite Plugin при сборке с SSR
2. **Внешний SSR сервер** (`ssr-server.js`) опционален и может использоваться для дополнительного контроля
3. **Мета-теги** должны передаваться через props Inertia в контроллерах
4. **Производительность**: SSR увеличивает нагрузку на сервер, но улучшает SEO

## Дополнительная информация

Подробная документация находится в папке `docs/`:
- `SEO_SSR_ANALYSIS.md` - полный анализ и план реализации
- `SEO_SSR_SUMMARY.md` - краткая сводка
- `SEO_SSR_VERIFICATION.md` - инструкции по проверке

