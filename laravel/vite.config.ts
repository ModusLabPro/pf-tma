import { resolve } from 'node:path';
import path from 'path';

import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';

// ВАЖНО: Плагин ignoreCSSInSSR временно отключен, так как он блокировал CSS в обычной сборке
// Для SSR сборки CSS обычно не требуется (обрабатывается на клиенте)
// Если CSS нужен в SSR, можно использовать другой подход

export default defineConfig(({ ssrBuild }) => {
  // Заглушка для vue-yandex-maps нужна только в SSR режиме
  // В клиентской сборке должен использоваться настоящий пакет
  const isSSR = ssrBuild === true;
  
  return {
    plugins: [
      laravel({
        input: 'resources/js/app.ts',
        ssr: 'resources/js/ssr.js',
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
      // ignoreCSSInSSR плагин временно отключен - он блокировал CSS в обычной сборке
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './resources/js/src'),
        'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
        // Заглушка для vue-yandex-maps ТОЛЬКО в SSR режиме
        // В клиентской сборке используется настоящий пакет vue-yandex-maps
        ...(isSSR ? {
          'vue-yandex-maps': path.resolve(__dirname, './resources/js/ssr-stubs/vue-yandex-maps.js'),
        } : {}),
      },
    },
    ssr: {
      noExternal: ['@inertiajs/vue3', 'vue', '@vue/server-renderer'],
    },
  };
});
