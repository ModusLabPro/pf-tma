<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    @if (isset($page['props']['seoData']['seo_title']))
        <title>{{ $page['props']['seoData']['seo_title'] }}</title>
    @elseif (isset($page['props']['product']['seo_title']))
        <title>{{ $page['props']['product']['seo_title'] }}</title>
    @elseif (isset($page['props']['product']['name']))
        <title>{{ $page['props']['product']['name'] }} - {{ config('app.name', 'PrimeFoods') }}</title>
    @else
        <title inertia>{{ config('app.name', 'Laravel') }}</title>
    @endif

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet"/>

    <meta name="yandex-verification" content="cf60a8fce8a65466" />


    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.ts', "resources/js/src/pages/{$page['component']}.vue"])
    @inertiaHead

    <!-- Telegram WebApp SDK -->
    <script src="https://telegram.org/js/telegram-web-app.js"></script>

    <!-- SEO Meta теги -->
    @php
        $seoData = $page['props']['seoData'] ?? null;
        $hasProductMeta = isset($product_meta_tags) && count($product_meta_tags) > 0;
    @endphp

    @if($hasProductMeta)
        <!-- Для продуктов - используем product_meta_tags -->
        @if(isset($product_meta_tags['title']))
        <title>{{ $product_meta_tags['title'] }}</title>
        @endif

        @if(isset($product_meta_tags['description']))
        <meta name="description" content="{{ $product_meta_tags['description'] }}" />
        @endif

        @if(isset($product_meta_tags['keywords']))
        <meta name="keywords" content="{{ $product_meta_tags['keywords'] }}" />
        @endif

        <!-- OpenGraph теги для продуктов -->
        @foreach($product_meta_tags as $property => $content)
            @if(str_starts_with($property, 'og:'))
        <meta property="{{ $property }}" content="{{ $content }}" />
            @endif
        @endforeach
    @elseif($seoData)
        <!-- Для обычных страниц - используем seoData -->
        @if(isset($seoData['seo_title']))
        <title>{{ $seoData['seo_title'] }}</title>
        <meta property="og:title" content="{{ $seoData['seo_title'] }}" />
        @endif

        @if(isset($seoData['seo_description']))
        <meta name="description" content="{{ $seoData['seo_description'] }}" />
        <meta property="og:description" content="{{ $seoData['seo_description'] }}" />
        @endif

        @if(isset($seoData['seo_keywords']))
        <meta name="keywords" content="{{ $seoData['seo_keywords'] }}" />
        @endif

        <!-- Обязательные OG теги -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="{{ url()->current() }}" />
        <meta property="og:site_name" content="{{ config('app.name', 'PrimeFoods') }}" />
        <meta property="og:locale" content="ru_RU" />

        <!-- Дефолтное изображение для OG -->
        @php
            $defaultOgImage = asset('images/logo.png');
        @endphp
        <meta property="og:image" content="{{ $defaultOgImage }}" />
        <meta property="og:image:alt" content="{{ $seoData['seo_title'] ?? config('app.name') }}" />
    @endif
</head>
</head>
<body class="h-full">
    <script>
            (function(w,d,u){
                    var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                    var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
            })(window,document,'https://cdn-ru.bitrix24.ru/b10886302/crm/site_button/loader_1_4puske.js');
    </script>
<!-- Breadcrumbs Schema.org - статический вывод для валидаторов и ботов -->
@if(isset($breadcrumbs_seo) && count($breadcrumbs_seo) > 0)
    <script type="application/ld+json" data-schema="breadcrumb">
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
        @foreach($breadcrumbs_seo as $index => $crumb)
            {
                "@type": "ListItem",
                "position": {{ $index + 1 }},
            "item": {
                "@id": "{{ $crumb['url'] }}",
                "name": "{{ $crumb['name'] }}"
            }
        }@if(!$loop->last)
                ,
            @endif
        @endforeach
        ]
    }
    </script>
@endif

<!-- Product Schema.org - для страниц товаров -->
@if(isset($product_schema) && $product_schema)
    <script type="application/ld+json" data-schema="product">
        {!! json_encode($product_schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) !!}
    </script>
@endif

<!-- Organization Schema.org - статические данные компании (на всех страницах) -->
@if(isset($organization_schema) && $organization_schema)
    <script type="application/ld+json" data-schema="organization">
        {!! json_encode($organization_schema, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT) !!}
    </script>
@endif

@inertia

<script type="text/javascript">
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

    ym(82887567, 'init', {webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/82887567" style="position:absolute; left:-9999px;" alt="" /></div></noscript>

<!-- Обновление breadcrumbs и meta тегов при SPA навигации -->
<script>
    // Функция для обновления breadcrumbs в head
    function updateBreadcrumbs(breadcrumbs) {
        if (!breadcrumbs || breadcrumbs.length === 0) {
            return;
        }

        // Удаляем старый скрипт если есть
        const oldScript = document.querySelector('script[data-schema="breadcrumb"]');
        if (oldScript) {
            oldScript.remove();
        }

        // Формируем данные
        const breadcrumbsData = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbs.map((crumb, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@id": crumb.url,
                    "name": crumb.name
                }
            }))
        };

        // Создаем новый скрипт
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', 'breadcrumb');
        script.textContent = JSON.stringify(breadcrumbsData);

        // Вставляем в head
        document.head.appendChild(script);
    }

    // Функция для обновления мета-тегов
    function updateMetaTags(seoData) {
        if (!seoData) {
            return;
        }

        // Обновляем title
        if (seoData.seo_title) {
            document.title = seoData.seo_title;

            // Обновляем og:title
            let ogTitle = document.querySelector('meta[property="og:title"]');
            if (!ogTitle) {
                ogTitle = document.createElement('meta');
                ogTitle.setAttribute('property', 'og:title');
                document.head.appendChild(ogTitle);
            }
            ogTitle.setAttribute('content', seoData.seo_title);
        }

        // Обновляем description
        if (seoData.seo_description) {
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.setAttribute('name', 'description');
                document.head.appendChild(metaDesc);
            }
            metaDesc.setAttribute('content', seoData.seo_description);

            // Обновляем og:description
            let ogDesc = document.querySelector('meta[property="og:description"]');
            if (!ogDesc) {
                ogDesc = document.createElement('meta');
                ogDesc.setAttribute('property', 'og:description');
                document.head.appendChild(ogDesc);
            }
            ogDesc.setAttribute('content', seoData.seo_description);
        }

        // Обновляем keywords
        if (seoData.seo_keywords) {
            let metaKeywords = document.querySelector('meta[name="keywords"]');
            if (!metaKeywords) {
                metaKeywords = document.createElement('meta');
                metaKeywords.setAttribute('name', 'keywords');
                document.head.appendChild(metaKeywords);
            }
            metaKeywords.setAttribute('content', seoData.seo_keywords);
        }

        // Обновляем обязательные OG теги
        // og:type
        let ogType = document.querySelector('meta[property="og:type"]');
        if (!ogType) {
            ogType = document.createElement('meta');
            ogType.setAttribute('property', 'og:type');
            document.head.appendChild(ogType);
        }
        ogType.setAttribute('content', 'website');

        // og:url
        let ogUrl = document.querySelector('meta[property="og:url"]');
        if (!ogUrl) {
            ogUrl = document.createElement('meta');
            ogUrl.setAttribute('property', 'og:url');
            document.head.appendChild(ogUrl);
        }
        ogUrl.setAttribute('content', window.location.href);

        // og:locale
        let ogLocale = document.querySelector('meta[property="og:locale"]');
        if (!ogLocale) {
            ogLocale = document.createElement('meta');
            ogLocale.setAttribute('property', 'og:locale');
            document.head.appendChild(ogLocale);
        }
        ogLocale.setAttribute('content', 'ru_RU');

        // og:site_name
        let ogSiteName = document.querySelector('meta[property="og:site_name"]');
        if (!ogSiteName) {
            ogSiteName = document.createElement('meta');
            ogSiteName.setAttribute('property', 'og:site_name');
            document.head.appendChild(ogSiteName);
        }
        ogSiteName.setAttribute('content', '{{ config('app.name', 'PrimeFoods') }}');

        // og:image - дефолтное изображение
        let ogImage = document.querySelector('meta[property="og:image"]');
        if (!ogImage) {
            ogImage = document.createElement('meta');
            ogImage.setAttribute('property', 'og:image');
            document.head.appendChild(ogImage);
        }
        // Если нет специфического изображения, используем дефолтное
        if (!ogImage.getAttribute('content') || ogImage.getAttribute('content').includes('og-default')) {
            ogImage.setAttribute('content', '{{ asset('images/logo.png') }}');
        }
    }

    // Обновляем при загрузке страницы
    document.addEventListener('DOMContentLoaded', function () {
        if (window.$page && window.$page.props) {
            if (window.$page.props.breadcrumbs) {
                updateBreadcrumbs(window.$page.props.breadcrumbs);
            }
            if (window.$page.props.seoData) {
                updateMetaTags(window.$page.props.seoData);
            }
        }
    });

    // Слушаем события Inertia для обновления при навигации
    document.addEventListener('inertia:success', function (event) {
        const props = event.detail.page.props;

        if (props.breadcrumbs) {
            updateBreadcrumbs(props.breadcrumbs);
        }

        if (props.seoData) {
            updateMetaTags(props.seoData);
        }
    });
</script>

<script src="https://yastatic.net/share2/share.js"></script>
</body>

</html>
