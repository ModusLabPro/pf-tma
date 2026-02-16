import { createServer } from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ssrPath = path.resolve(__dirname, 'bootstrap/ssr/ssr.js');

// Проверяем наличие SSR бандла
if (!fs.existsSync(ssrPath)) {
  console.error('SSR bundle not found at:', ssrPath);
  process.exit(1);
}

console.log('Loading SSR bundle from:', ssrPath);

// Загружаем SSR модуль
const ssr = await import(ssrPath);

if (!ssr.default) {
  console.error('SSR module does not export default function');
  process.exit(1);
}

const render = ssr.default;

const server = createServer(async (req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  if (req.url !== '/render' || req.method !== 'POST') {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
    return;
  }

  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', async () => {
    try {
      const page = JSON.parse(body);
      const html = await render(page);
      
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Server': 'Inertia SSR'
      });
      res.end(JSON.stringify({ html }));
    } catch (error) {
      console.error('SSR Error:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: error.message, stack: error.stack }));
    }
  });
});

const PORT = process.env.SSR_PORT || 13714;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Inertia SSR server running on port ${PORT}`);
});
