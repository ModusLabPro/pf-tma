<?php
/**
 * Скрипт для проверки Vite конфигурации и наличия файлов
 * Запуск: php check-vite.php
 */

// В Docker контейнере файл находится в /var/www/html/docker/app/check-vite.php
// public/build находится в /var/www/html/public/build
$basePath = '/var/www/html/public/build';
$manifestPath = $basePath . '/manifest.json';

echo "=== Vite Configuration Check ===\n\n";

// 1. Проверка manifest.json
echo "1. Checking manifest.json:\n";
if (file_exists($manifestPath)) {
    echo "   ✅ manifest.json exists at: $manifestPath\n";
    $manifest = json_decode(file_get_contents($manifestPath), true);
    if ($manifest) {
        echo "   ✅ manifest.json is valid JSON\n";
        echo "   📊 Total entries: " . count($manifest) . "\n";
        
        // Проверка app.ts entry
        if (isset($manifest['resources/js/app.ts'])) {
            $appEntry = $manifest['resources/js/app.ts'];
            echo "   ✅ app.ts entry found\n";
            if (isset($appEntry['css']) && is_array($appEntry['css'])) {
                echo "   ✅ CSS files in app.ts entry: " . count($appEntry['css']) . "\n";
                foreach ($appEntry['css'] as $cssFile) {
                    $cssPath = $basePath . '/' . $cssFile;
                    echo "      - $cssFile: " . (file_exists($cssPath) ? "✅ exists" : "❌ NOT FOUND") . "\n";
                }
            } else {
                echo "   ⚠️  No CSS array in app.ts entry\n";
            }
            if (isset($appEntry['file'])) {
                $jsPath = $basePath . '/' . $appEntry['file'];
                echo "   JS file: {$appEntry['file']}: " . (file_exists($jsPath) ? "✅ exists" : "❌ NOT FOUND") . "\n";
            }
        } else {
            echo "   ❌ app.ts entry NOT found in manifest.json\n";
        }
    } else {
        echo "   ❌ manifest.json is NOT valid JSON\n";
    }
} else {
    echo "   ❌ manifest.json NOT found at: $manifestPath\n";
}

// 2. Проверка директории assets
echo "\n2. Checking assets directory:\n";
$assetsPath = $basePath . '/assets';
if (is_dir($assetsPath)) {
    echo "   ✅ assets directory exists\n";
    $cssFiles = glob($assetsPath . '/*.css');
    echo "   📊 CSS files found: " . count($cssFiles) . "\n";
    foreach ($cssFiles as $cssFile) {
        echo "      - " . basename($cssFile) . " (" . filesize($cssFile) . " bytes)\n";
    }
} else {
    echo "   ❌ assets directory NOT found at: $assetsPath\n";
}

// 3. Проверка переменных окружения
echo "\n3. Checking environment:\n";
echo "   APP_ENV: " . (getenv('APP_ENV') ?: 'not set') . "\n";
echo "   APP_DEBUG: " . (getenv('APP_DEBUG') ?: 'not set') . "\n";

echo "\n=== Check complete ===\n";

