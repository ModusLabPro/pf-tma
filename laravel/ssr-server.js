import express from 'express';
import { createServer } from 'http';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Загружаем собранный SSR модуль
const ssrModulePath = join(__dirname, 'bootstrap/ssr/ssr.js');
const { render } = await import(ssrModulePath);

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
