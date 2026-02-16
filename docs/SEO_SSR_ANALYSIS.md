# Анализ и план доработок для SSR/Prerender и SEO

## Текущее состояние проекта

### Архитектура
- **Backend**: Laravel 12
- **Frontend**: Vue 3 + Inertia.js
- **Сборка**: Vite
- **SSR**: Не настроен (закомментирован в `vite.config.ts`)

### Проблема

Поисковые роботы (Google, Yandex) получают **пустой HTML** без мета-тегов и контента, потому что:

1. **SSR не настроен** - Inertia.js работает только на клиенте
2. **Мета-теги рендерятся через Vue компонент `<Head>`** - они не попадают в исходный HTML
3. **Нет обработки User-Agent** для определения поисковых роботов
4. **Контент генерируется на клиенте** - роботы видят только базовую структуру

### Что видят поисковые роботы сейчас

```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title inertia>Laravel</title>
    <!-- Мета-теги отсутствуют -->
</head>
<body class="h-full">
    <div id="app" data-page="{...json...}"></div>
    <!-- Контент отсутствует -->
</body>
</html>
```

## Решения

### Вариант 1: SSR через Inertia SSR (Рекомендуется)

**Преимущества:**
- ✅ Полный контроль над рендерингом
- ✅ Мета-теги и контент в исходном HTML
- ✅ Лучшая производительность для пользователей
- ✅ Поддержка Inertia.js из коробки

**Недостатки:**
- ⚠️ Требует настройки Node.js сервера
- ⚠️ Увеличивает сложность инфраструктуры

### Вариант 2: Prerender (Альтернатива)

**Преимущества:**
- ✅ Проще в настройке
- ✅ Не требует изменений в коде приложения
- ✅ Можно использовать внешний сервис (Prerender.io)

**Недостатки:**
- ⚠️ Требует отдельный сервис/сервер
- ⚠️ Может быть медленнее для динамического контента
- ⚠️ Дополнительные расходы на инфраструктуру

### Вариант 3: Гибридный подход (SSR + Prerender для ботов)

**Преимущества:**
- ✅ SSR для пользователей (быстро)
- ✅ Prerender для ботов (просто)
- ✅ Оптимальный баланс

## План доработок (Вариант 1: SSR)

### Этап 1: Настройка SSR для Inertia.js

#### 1.1 Установка зависимостей

```bash
npm install @inertiajs/server @vue/server-renderer
```

#### 1.2 Создание SSR entry point

**Файл**: `laravel/resources/js/ssr.js`

```javascript
import { createSSRApp, h } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { createInertiaApp } from '@inertiajs/vue3/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from 'ziggy-js';
import { i18n } from '@/shared/i18n';
import PrimeVue from 'primevue/config';
import { ru } from 'primelocale/js/ru.js';
import { DefaultLayout } from './src/app/layouts';

export default function render(page) {
  return createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      return resolvePageComponent(
        `./src/pages/${name}.vue`,
        import.meta.glob('./src/pages/**/*.vue')
      );
    },
    setup({ App, props, plugin }) {
      const app = createSSRApp({ render: () => h(App, props) });
      
      // Настройка i18n
      for (const locale of ['ru', 'en']) {
        i18n.global.setLocaleMessage(
          locale,
          props.initialPage?.props?.translations?.[locale] ?? {}
        );
      }
      
      app.use(plugin);
      app.use(i18n);
      app.use(ZiggyVue, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.url),
      });
      app.use(PrimeVue, {
        unstyled: true,
        locale: { ...ru },
      });
      
      return app;
    },
  });
}
```

#### 1.3 Обновление vite.config.ts

```typescript
import { resolve } from 'node:path';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [
    laravel({
      input: 'resources/js/app.ts',
      ssr: 'resources/js/ssr.js', // Раскомментировать
      refresh: true,
    }),
    tailwindcss(),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('swiper-'),
        },
      },
    }),
    svgLoader({
      svgo: false,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/js/src'),
      'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
    },
  },
  ssr: {
    noExternal: ['@inertiajs/vue3', 'vue', '@vue/server-renderer'],
  },
});
```

#### 1.4 Обновление HandleInertiaRequests middleware

**Файл**: `laravel/app/Http/Middleware/HandleInertiaRequests.php`

Добавить метод `rootView` для SSR:

```php
public function rootView(Request $request): string
{
    return 'app';
}
```

### Этап 2: Middleware для определения поисковых роботов

#### 2.1 Создание middleware

**Файл**: `laravel/app/Http/Middleware/DetectSearchEngineBot.php`

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class DetectSearchEngineBot
{
    /**
     * Список User-Agent поисковых роботов
     */
    private array $botUserAgents = [
        // Google
        'Googlebot',
        'Googlebot-Image',
        'Googlebot-Video',
        'Googlebot-Mobile',
        'Mediapartners-Google',
        'AdsBot-Google',
        'FeedFetcher-Google',
        
        // Yandex
        'YandexBot',
        'YandexAccessibilityBot',
        'YandexMobileBot',
        'YandexDirectDyn',
        'YandexMetrika',
        'YandexImages',
        'YandexVideo',
        'YandexVideoParser',
        'YandexMedia',
        'YandexBlogs',
        'YandexFavicons',
        'YandexWebmaster',
        'YandexPagechecker',
        'YandexImageResizer',
        'YandexAdNet',
        'YandexDirect',
        'YaDirectFetcher',
        'YandexCalendar',
        'YandexSitelinks',
        'YandexNews',
        'YandexCatalog',
        'YandexAntivirus',
        'YandexMarket',
        'YandexVertis',
        'YandexForDomain',
        'YandexSpravBot',
        'YandexSearchShop',
        'YandexMedianaBot',
        'YandexOntoDB',
        'YandexOntoDBAPI',
        'YandexTurbo',
        
        // Bing
        'Bingbot',
        'BingPreview',
        
        // Другие
        'Slurp', // Yahoo
        'DuckDuckBot',
        'Baiduspider',
        'Sogou',
        'Exabot',
        'facebot', // Facebook
        'ia_archiver', // Alexa
    ];

    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        $userAgent = $request->header('User-Agent', '');
        
        $isBot = $this->isSearchEngineBot($userAgent);
        
        // Сохраняем информацию о боте в запросе
        $request->attributes->set('is_search_engine_bot', $isBot);
        $request->attributes->set('bot_user_agent', $isBot ? $userAgent : null);
        
        return $next($request);
    }

    /**
     * Проверка, является ли User-Agent поисковым роботом
     */
    private function isSearchEngineBot(string $userAgent): bool
    {
        if (empty($userAgent)) {
            return false;
        }

        foreach ($this->botUserAgents as $botAgent) {
            if (stripos($userAgent, $botAgent) !== false) {
                return true;
            }
        }

        return false;
    }
}
```

#### 2.2 Регистрация middleware

**Файл**: `laravel/bootstrap/app.php`

```php
$middleware->web(append: [
    \App\Http\Middleware\HandleInertiaRequests::class,
    \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
    \App\Http\Middleware\LogoutBlockedUser::class,
    \App\Http\Middleware\DetectSearchEngineBot::class, // Добавить
]);
```

### Этап 3: Обновление app.blade.php для SSR

**Файл**: `laravel/resources/views/app.blade.php`

```blade
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    @if (isset($page['props']['seoData']))
        <title>{{ $page['props']['seoData']['seo_title'] ?? config('app.name', 'Laravel') }}</title>
        @if (!empty($page['props']['seoData']['seo_description']))
            <meta name="description" content="{{ $page['props']['seoData']['seo_description'] }}">
        @endif
        @if (!empty($page['props']['seoData']['seo_keywords']))
            <meta name="keywords" content="{{ $page['props']['seoData']['seo_keywords'] }}">
        @endif
    @elseif (isset($page['props']['product']))
        <title>{{ $page['props']['product']['seo_title'] ?? $page['props']['product']['name'] ?? config('app.name') }}</title>
        @if (!empty($page['props']['product']['seo_description']))
            <meta name="description" content="{{ $page['props']['product']['seo_description'] }}">
        @endif
        <meta property="og:type" content="product">
        <meta property="og:title" content="{{ $page['props']['product']['seo_title'] ?? $page['props']['product']['name'] }}">
        <meta property="og:description" content="{{ $page['props']['product']['seo_description'] ?? $page['props']['product']['short_description'] ?? '' }}">
        <meta property="og:url" content="{{ url()->current() }}">
        @if (!empty($page['props']['product']['images']))
            @foreach ($page['props']['product']['images'] as $image)
                <meta property="og:image" content="{{ $image['path'] ?? '' }}">
            @endforeach
        @endif
    @else
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
    @endif

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    
    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.ts', "resources/js/src/pages/{$page['component']}.vue"])
    @inertiaHead
</head>
<body class="h-full">
    @inertia
    <script src="https://yastatic.net/share2/share.js"></script>
</body>
</html>
```

### Этап 4: Настройка SSR сервера

#### 4.1 Создание SSR сервера (Node.js)

**Файл**: `laravel/ssr-server.js`

```javascript
const express = require('express');
const { Inertia } = require('@inertiajs/inertia');
const { createServer } = require('http');
const { render } = require('./resources/js/ssr.js');

const app = express();
const server = createServer(app);

app.use(express.json());

app.post('/render', async (req, res) => {
  try {
    const { page } = req.body;
    const html = await render(page);
    res.json({ html });
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.SSR_PORT || 13714;
server.listen(PORT, () => {
  console.log(`SSR server running on port ${PORT}`);
});
```

#### 4.2 Обновление HandleInertiaRequests для использования SSR

**Файл**: `laravel/app/Http/Middleware/HandleInertiaRequests.php`

Добавить метод `handle`:

```php
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

public function handle(Request $request, Closure $next): Response
{
    $response = $next($request);
    
    // Если это поисковый робот, используем SSR
    if ($request->attributes->get('is_search_engine_bot', false)) {
        // Здесь можно добавить логику для SSR через внешний сервис
        // или использовать встроенный SSR Inertia
    }
    
    return $response;
}
```

### Этап 5: Обновление package.json

```json
{
  "scripts": {
    "build": "vite build",
    "build:ssr": "vite build --ssr",
    "dev": "vite",
    "dev:ssr": "vite --ssr",
    "ssr": "node ssr-server.js"
  },
  "dependencies": {
    "@inertiajs/server": "^2.0",
    "@vue/server-renderer": "^3.5.13"
  }
}
```

## Альтернативный вариант: Prerender

Если SSR слишком сложен, можно использовать Prerender:

### Вариант 2A: Prerender.io (Облачный сервис)

#### 2A.1 Middleware для Prerender

**Файл**: `laravel/app/Http/Middleware/PrerenderMiddleware.php`

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class PrerenderMiddleware
{
    private string $prerenderUrl = 'https://service.prerender.io';
    private string $prerenderToken; // Получить на prerender.io

    public function handle(Request $request, Closure $next): Response
    {
        $userAgent = $request->header('User-Agent', '');
        $isBot = $this->isSearchEngineBot($userAgent);
        
        if ($isBot && !$request->is('admin/*')) {
            $url = $request->fullUrl();
            $prerenderUrl = $this->prerenderUrl . '/' . urlencode($url);
            
            $ch = curl_init($prerenderUrl);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'X-Prerender-Token: ' . $this->prerenderToken,
            ]);
            
            $html = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
            
            if ($httpCode === 200 && $html) {
                return response($html, 200)->header('Content-Type', 'text/html');
            }
        }
        
        return $next($request);
    }
    
    private function isSearchEngineBot(string $userAgent): bool
    {
        // Использовать тот же метод, что и в DetectSearchEngineBot
        return false; // Упрощенная версия
    }
}
```

### Вариант 2B: Self-hosted Prerender (Puppeteer)

#### 2B.1 Установка Prerender

```bash
npm install prerender puppeteer
```

#### 2B.2 Создание сервера Prerender

**Файл**: `laravel/prerender-server.js`

```javascript
const prerender = require('prerender');
const server = prerender({
  port: 3000,
  chromeFlags: ['--no-sandbox', '--headless', '--disable-gpu'],
});

server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
```

## Рекомендации по реализации

### Приоритет 1: SSR через Inertia SSR

1. ✅ Настроить SSR entry point
2. ✅ Обновить vite.config.ts
3. ✅ Создать middleware для определения ботов
4. ✅ Обновить app.blade.php для базовых мета-тегов
5. ✅ Настроить SSR сервер (Node.js)
6. ✅ Протестировать с реальными User-Agent ботов

### Приоритет 2: Улучшение мета-тегов

1. ✅ Убедиться, что все страницы передают `seoData` в props
2. ✅ Добавить Open Graph теги для всех страниц
3. ✅ Добавить Twitter Card теги
4. ✅ Добавить структурированные данные (JSON-LD)

### Приоритет 3: Тестирование

1. ✅ Проверить с Google Search Console
2. ✅ Проверить с Yandex Webmaster
3. ✅ Использовать инструменты:
   - Google Rich Results Test
   - Yandex Validator
   - Facebook Sharing Debugger

## Проверка работы

### Тестирование User-Agent

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

## Дополнительные улучшения

### 1. Структурированные данные (JSON-LD)

Добавить в `app.blade.php`:

```blade
@if (isset($page['props']['product']))
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "{{ $page['props']['product']['name'] }}",
  "description": "{{ $page['props']['product']['description'] }}",
  "image": "{{ $page['props']['product']['images'][0]['path'] ?? '' }}",
  "offers": {
    "@type": "Offer",
    "price": "{{ $page['props']['product']['price'] }}",
    "priceCurrency": "RUB"
  }
}
</script>
@endif
```

### 2. Sitemap.xml

Убедиться, что sitemap.xml доступен и содержит все важные страницы.

### 3. robots.txt

Проверить, что robots.txt правильно настроен.

## Заключение

Для обеспечения корректной индексации сайта поисковыми системами необходимо:

1. **Настроить SSR** - чтобы роботы получали полный HTML с мета-тегами
2. **Определять ботов** - через middleware по User-Agent
3. **Передавать мета-теги** - через props в Inertia и рендерить в app.blade.php
4. **Тестировать** - с реальными User-Agent ботов

Рекомендуется начать с **Варианта 1 (SSR через Inertia SSR)**, так как это наиболее правильное и производительное решение для SPA приложений.

