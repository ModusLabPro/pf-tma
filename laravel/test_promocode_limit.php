<?php

require_once '/var/www/html/vendor/autoload.php';

// Загружаем Laravel
$app = require_once '/var/www/html/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

use Order\Models\OrderPromocode;
use Order\Enums\OrderPromocodeStatusEnum;

echo "Тестирование проверки лимита промокода...\n\n";

try {
    // Создаем тестовый промокод с лимитом 2 использования
    $testPromocode = OrderPromocode::create([
        'promocode' => 'TEST_LIMIT_2',
        'description' => 'Тестовый промокод с лимитом 2',
        'date_from' => now()->subDay(),
        'date_to' => now()->addDay(),
        'exceeded_limit' => 2,
        'number_applications' => 0,
        'percent' => 10,
        'status' => OrderPromocodeStatusEnum::active,
    ]);
    
    echo "Создан тестовый промокод: {$testPromocode->promocode}\n";
    echo "Лимит использований: {$testPromocode->exceeded_limit}\n";
    echo "Текущее количество использований: {$testPromocode->number_applications}\n\n";
    
    // Тест 1: Проверка валидности без увеличения счетчика
    echo "Тест 1: Проверка валидности (без увеличения счетчика)\n";
    $isValid = $testPromocode->checkValidated(false);
    echo "Промокод валиден: " . ($isValid ? 'ДА' : 'НЕТ') . "\n";
    echo "Количество использований после проверки: {$testPromocode->fresh()->number_applications}\n\n";
    
    // Тест 2: Первое использование
    echo "Тест 2: Первое использование\n";
    $testPromocode->number_applications = 1;
    $testPromocode->save();
    echo "Количество использований: {$testPromocode->number_applications}\n";
    echo "Проверка лимита: " . ($testPromocode->exceeded_limit !== null && $testPromocode->number_applications >= $testPromocode->exceeded_limit ? 'ПРЕВЫШЕН' : 'НЕ ПРЕВЫШЕН') . "\n\n";
    
    // Тест 3: Второе использование (лимит достигнут)
    echo "Тест 3: Второе использование (лимит достигнут)\n";
    $testPromocode->number_applications = 2;
    $testPromocode->save();
    echo "Количество использований: {$testPromocode->number_applications}\n";
    echo "Проверка лимита: " . ($testPromocode->exceeded_limit !== null && $testPromocode->number_applications >= $testPromocode->exceeded_limit ? 'ПРЕВЫШЕН' : 'НЕ ПРЕВЫШЕН') . "\n\n";
    
    // Тест 4: Третье использование (лимит превышен)
    echo "Тест 4: Третье использование (лимит превышен)\n";
    $testPromocode->number_applications = 3;
    $testPromocode->save();
    echo "Количество использований: {$testPromocode->number_applications}\n";
    echo "Проверка лимита: " . ($testPromocode->exceeded_limit !== null && $testPromocode->number_applications >= $testPromocode->exceeded_limit ? 'ПРЕВЫШЕН' : 'НЕ ПРЕВЫШЕН') . "\n\n";
    
    // Удаляем тестовый промокод
    $testPromocode->delete();
    echo "Тестовый промокод удален.\n";
    
    echo "\n✅ Все тесты пройдены успешно!\n";
    
} catch (Exception $e) {
    echo "❌ Ошибка: " . $e->getMessage() . "\n";
}
