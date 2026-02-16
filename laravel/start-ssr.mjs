import createServer from '@inertiajs/core/server';
import { createInertiaApp } from '@inertiajs/vue3';
import { renderToString } from '@vue/server-renderer';
import { createSSRApp, h } from 'vue';
import  fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Функция рендеринга, которая будет вызываться для каждого запроса
async function render(page) {
  return await createInertiaApp({
    page,
    render: renderToString,
    resolve: async (name) => {
      // Динамически импортируем компонент из SSR бандла
      const ssrModule = await import('./bootstrap/ssr/ssr.js');
      // Ищем компонент по имени в экспортах SSR бандла
      return ssrModule[name] || ssrModule.default;
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props),
      }).use(plugin);
    },
  });
}

// Запускаем SSR-сервер
createServer(render, { port: Number(process.env.SSR_PORT || 13714) });
