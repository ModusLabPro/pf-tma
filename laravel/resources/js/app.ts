import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ru } from 'primelocale/js/ru.js';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';
import { createApp, DefineComponent, h, nextTick } from 'vue';
import { createYmaps } from 'vue-yandex-maps';
import { ZiggyVue } from 'ziggy-js';

import { i18n } from '@/shared/i18n';

import '../css/app.css';

import { createPinia } from 'pinia';
import { I18n } from 'vue-i18n';

import { DefaultLayout } from './src/app/layouts';

const availableLocales = ['ru', 'en'];

export async function loadLocaleMessages(i18n: I18n, locale: string) {
  // load locale messages with dynamic import
  const messages = await import(/* webpackChunkName: "locale-[request]" */ `./src/shared/i18n/messages/${locale}.json`);

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default);

  return nextTick();
}

createInertiaApp({
  resolve: async (name) => {
    const page = await resolvePageComponent<DefineComponent>(`./src/pages/${name}.vue`, import.meta.glob<DefineComponent>('./src/pages/**/*.vue'));
    // ВАЖНО: `layout: false` — валидное значение (например, для Telegram Mini App).
    // Нельзя использовать `||`, иначе false будет заменён на DefaultLayout.
    if (page.default.layout === undefined) {
      page.default.layout = DefaultLayout;
    }
    return page;
  },
  title: (title) => (title ? `${title} - Primefoods` : 'Primefoods'),
  setup({ el, App, props, plugin }) {
    for (const locale of availableLocales) {
      i18n.global.setLocaleMessage(locale, props.initialPage?.props?.translations?.[locale] ?? {});
    }
    const pinia = createPinia();
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(i18n)
      .use(ZiggyVue)
      .use(pinia)
      .use(ToastService)
      .use(PrimeVue, {
        unstyled: true,
        locale: {
          ...ru,
        },
      })
      .use(ConfirmationService)
      .use(
        createYmaps({
          apikey: '3064cd17-9aca-4152-8904-c78817123e8f',
        }),
      )
      .directive('tooltip', Tooltip)
      .mount(el);
  },
});
