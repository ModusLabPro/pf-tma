#!/bin/bash
# Скрипт для проверки работы SSR

URL="${1:-http://localhost:8116/catalog}"
echo "🔍 Проверка SSR для: $URL"
echo ""

# Получаем HTML
HTML=$(curl -s -A "Googlebot/2.1" "$URL")

# Проверяем размер
SIZE=$(echo "$HTML" | wc -c)
echo "📊 Размер HTML: $SIZE байт"

# Проверяем наличие контента в div#app
APP_CONTENT=$(echo "$HTML" | sed -n '/<div id="app"/,/<\/div>/p' | head -50)

# Подсчитываем ключевые слова
KEYWORDS_COUNT=$(echo "$HTML" | grep -c "Каталог\|товар\|product\|catalog" || echo "0")
echo "🔑 Найдено ключевых слов: $KEYWORDS_COUNT"

# Проверяем наличие data-page
HAS_DATA_PAGE=$(echo "$HTML" | grep -q 'data-page=' && echo "да" || echo "нет")
echo "📄 Атрибут data-page: $HAS_DATA_PAGE"

# Проверяем наличие HTML контента внутри div#app
HAS_CONTENT=$(echo "$APP_CONTENT" | grep -q -E "(<header|<main|<section|<article|<h1|<h2|<nav)" && echo "да" || echo "нет")
echo "📝 HTML контент в div#app: $HAS_CONTENT"

echo ""
echo "--- Первые 500 символов div#app ---"
echo "$APP_CONTENT" | head -c 500
echo ""
echo "..."

echo ""
if [ "$HAS_CONTENT" = "да" ] && [ "$KEYWORDS_COUNT" -gt 5 ]; then
    echo "✅ SSR работает корректно!"
    exit 0
else
    echo "❌ SSR может не работать. Проверьте:"
    echo "   1. Запущен ли SSR сервер: php artisan inertia:start-ssr"
    echo "   2. Собран ли SSR бандл: npm run build:ssr"
    echo "   3. Очищен ли кеш Laravel: php artisan cache:clear"
    exit 1
fi

