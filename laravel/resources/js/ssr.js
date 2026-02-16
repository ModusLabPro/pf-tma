import { createSSRApp, h } from 'vue';
import { renderToString } from '@vue/server-renderer';
import { createInertiaApp } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue, route as createRoute } from 'ziggy-js';
import { i18n } from '@/shared/i18n';
import PrimeVue from 'primevue/config';
import { ru } from 'primelocale/js/ru.js';
import { createPinia } from 'pinia';
import { DefaultLayout } from './src/app/layouts';

// Устанавливаем заглушку route() глобально ДО импорта модулей
// Это нужно для store, которые вызывают route() на верхнем уровне
// Создаем безопасный объект queryParams, который всегда является объектом
const safeQueryParams = {};
const safeParams = {};

const defaultRouteFn = (name, params, absolute) => {
  if (name === undefined) {
    // Возвращаем Router объект с гарантированными объектами
    // Используем Object.create для создания объекта с геттерами
    const routerObj = {
      current: () => null,
      url: '',
    };
    
    // Устанавливаем queryParams и params как собственные свойства с геттерами
    // Это гарантирует, что они всегда будут объектами
    Object.defineProperty(routerObj, 'queryParams', {
      get: () => safeQueryParams,
      enumerable: true,
      configurable: true,
    });
    
    Object.defineProperty(routerObj, 'params', {
      get: () => safeParams,
      enumerable: true,
      configurable: true,
    });
    
    return routerObj;
  }
  return '';
};

if (typeof global !== 'undefined') {
  global.route = defaultRouteFn;
}
if (typeof globalThis !== 'undefined') {
  globalThis.route = defaultRouteFn;
}

createServer((page) => {
  // Инициализируем Ziggy ДО создания приложения, чтобы route() был доступен в store
  const ziggy = page.props.ziggy;
  
  if (ziggy && ziggy.url) {
    // Создаем функцию route() с текущим URL из props
    const currentUrl = new URL(ziggy.url);
    
    // Ziggy будет инициализирован через ZiggyVue плагин в setup функции
    // Здесь просто делаем route() доступным глобально для импортов
    // Используем оригинальную функцию route() из ziggy-js
    if (typeof global !== 'undefined') {
      global.route = createRoute;
    }
    if (typeof globalThis !== 'undefined') {
      globalThis.route = createRoute;
    }
  } else {
    // Если Ziggy не инициализирован, создаем заглушку
    const routeFn = (name, params, absolute) => {
      if (name === undefined) {
        return {
          current: () => null,
          params: {},
          queryParams: {},
          url: '',
        };
      }
      return '';
    };
    
    if (typeof global !== 'undefined') {
      global.route = routeFn;
    }
    if (typeof globalThis !== 'undefined') {
      globalThis.route = routeFn;
    }
  }
  
  return createInertiaApp({
    page,
    render: renderToString,
    resolve: async (name) => {
      const pageComponent = await resolvePageComponent(
        `./src/pages/${name}.vue`,
        import.meta.glob('./src/pages/**/*.vue')
      );
      // ВАЖНО: `layout: false` — валидное значение (например, для Telegram Mini App).
      // Нельзя использовать `||`, иначе false будет заменён на DefaultLayout.
      if (pageComponent.default.layout === undefined) {
        pageComponent.default.layout = DefaultLayout;
      }
      return pageComponent;
    },
    setup({ App, props, plugin }) {
      const app = createSSRApp({ render: () => h(App, props) });
      
      // Настройка i18n
      const availableLocales = ['ru', 'en'];
      for (const locale of availableLocales) {
        i18n.global.setLocaleMessage(
          locale,
          props.initialPage?.props?.translations?.[locale] ?? {}
        );
      }
      
      const pinia = createPinia();
      
      app.use(plugin);
      app.use(i18n);
      app.use(pinia);
      
      // Настройка Ziggy
      let routeFn;
      
      if (ziggy && ziggy.url) {
        const currentUrl = new URL(ziggy.url);
        
        // Создаем объект queryParams из URL searchParams
        const queryParamsObj = {};
        for (const [key, value] of currentUrl.searchParams.entries()) {
          queryParamsObj[key] = value;
        }
        
        const paramsObj = {};
        
        // Инициализируем Ziggy глобально ДО использования createRoute()
        // Это нужно для того, чтобы createRoute() мог использовать глобальный объект Ziggy
        if (typeof globalThis !== 'undefined') {
          globalThis.Ziggy = {
            url: ziggy.url,
            port: ziggy.port || null,
            defaults: ziggy.defaults || {},
            routes: ziggy.routes || {},
          };
        }
        if (typeof global !== 'undefined') {
          global.Ziggy = {
            url: ziggy.url,
            port: ziggy.port || null,
            defaults: ziggy.defaults || {},
            routes: ziggy.routes || {},
          };
        }
        
        // Настраиваем ZiggyVue плагин
        // ZiggyVue также установит Ziggy глобально, но мы уже сделали это выше
        app.use(ZiggyVue, {
          ...ziggy,
          location: currentUrl,
        });
        
        routeFn = (name, params, absolute) => {
          if (name === undefined) {
            // Используем оригинальный createRoute из ziggy-js для получения текущего маршрута
            // createRoute теперь может использовать глобальный объект Ziggy
            try {
              // createRoute() без аргументов возвращает объект Router
              const router = createRoute();
              return {
                current: () => router?.current() || null,
                params: router?.params || paramsObj,
                queryParams: router?.queryParams || queryParamsObj,
                url: router?.url || currentUrl.href,
              };
            } catch (e) {
              // Если не удалось определить маршрут, возвращаем базовый объект
              return {
                current: () => null,
                params: paramsObj,
                queryParams: queryParamsObj,
                url: currentUrl.href,
              };
            }
          }
          return createRoute(name, params, absolute);
        };
      } else {
        // Если Ziggy не инициализирован, создаем заглушку
        routeFn = (name, params, absolute) => {
          if (name === undefined) {
            return {
              current: () => null,
              params: {},
              queryParams: {},
              url: '',
            };
          }
          return '';
        };
      }
      
      // Настраиваем глобальную функцию route() для SSR через globalProperties
      // Это нужно для использования route() в шаблонах через _ctx.route
      app.config.globalProperties.route = routeFn;
      
      // Также делаем route() доступной глобально для импортов
      if (typeof global !== 'undefined') {
        global.route = routeFn;
      }
      if (typeof globalThis !== 'undefined') {
        globalThis.route = routeFn;
      }
      
      app.use(PrimeVue, {
        unstyled: true,
        locale: { ...ru },
      });
      
      return app;
    },
  });
});

