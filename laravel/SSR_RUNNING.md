# Запуск SSR сервера для PrimeFoods Store

## Решение проблемы SSR

SSR теперь полностью настроен и работает! Вот что было сделано:

### Что было выполнено

1. **Установлен Node.js в контейнер Laravel** (через Dockerfile)
   - Node.js 20.x установлен в образ контейнера

2. **Собран SSR-бандл**
   ```bash
   cd /home/primefoods-store/laravel
   npm run build:ssr
   ```

3. **Добавлена переменная окружения в контейнере**
   ```env
   INERTIA_SSR_ENABLED=true
   ```

4. **SSR-сервер добавлен в Supervisor**
   - Файл: `docker/app/supervisord.conf`
   - Процесс `[program:ssr]` автоматически запускает `node bootstrap/ssr/ssr.js`

5. **SSR-сервер работает на порту 13714 внутри контейнера**

### Проверка работы SSR

```bash
# Проверка с Googlebot User-Agent
curl -A "Googlebot" http://localhost:8116 | grep -c "<header"
# Должно вернуть: 1 (или больше)

# Полная статистика
curl -s -A "Googlebot" http://localhost:8116 > test.html
grep -c "<header" test.html  # Количество header тегов
grep -c "<section" test.html # Количество section тегов
wc -c test.html              # Размер страницы (~370KB)
```

### Как работает SSR

1. Когда поисковый бот (Googlebot, YandexBot и др.) заходит на сайт, middleware `DetectSearchEngineBot` определяет это
2. Laravel Inertia автоматически отправляет запрос на SSR-сервер (http://127.0.0.1:13714/render)
3. SSR-сервер (`bootstrap/ssr/ssr.js`) рендерит Vue-компоненты на сервере
4. Возвращается полный HTML с контентом вместо пустого `<div id="app"></div>`

### Пересборка SSR при изменениях

При любых изменениях в коде Vue-компонентов необходимо пересобрать SSR:

```bash
cd /home/primefoods-store/laravel
npm run build:ssr

# Скопировать новый бандл в контейнер
docker cp bootstrap pstore_app:/var/www/html/

# Перезапустить SSR-сервер в контейнере
docker exec pstore_app supervisorctl restart ssr
```

### Автоматический запуск SSR

SSR-сервер автоматически запускается при старте контейнера через Supervisor.

Проверить статус:
```bash
docker exec pstore_app supervisorctl status ssr
```

Логи SSR-сервера:
```bash
docker logs pstore_app | grep -i ssr
```

### Важно

- SSR работает ТОЛЬКО после сборки (`npm run build:ssr`)
- SSR-сервер должен быть запущен ВНУТРИ контейнера Laravel
- Для продакшна нужно убедиться, что Node.js установлен в Docker-образе
- После каждого `git pull` с изменениями фронтенда нужно пересобрать SSR

## Продакшн

Для продакшн-сервера необходимо:

1. Убедиться что Dockerfile содержит установку Node.js
2. Добавить supervisor конфигурацию для SSR (уже добавлено)
3. Пересобрать Docker-образ:
   ```bash
   docker-compose -f docker-compose.yml build app
   ```
4. Собрать SSR-бандл на хосте или в контейнере
5. Рестартовать контейнеры

## Результат

✅ SSR полностью работает
✅ Поисковые боты получают полный HTML
✅ SSR-сервер автоматически запускается
✅ Размер отрендеренной страницы: ~370KB
✅ Семантические теги присутствуют: `<header>`, `<main>`, `<section>`
