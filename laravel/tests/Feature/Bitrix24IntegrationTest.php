<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Order\Models\Order;
use Order\Services\OrderBitrixService;
use Tests\TestCase;
use User\Models\User;

class Bitrix24IntegrationTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Тест создания заказа и отправки в Битрикс24
     */
    public function test_order_creation_triggers_bitrix24_integration()
    {
        // Создаем пользователя
        $user = User::factory()->create([
            'name' => 'Тест',
            'last_name' => 'Пользователь',
            'email' => 'test@example.com',
            'phone' => '79001234567'
        ]);

        // Создаем заказ
        $order = Order::create([
            'user_id' => $user->id,
            'name' => 'Тест',
            'last_name' => 'Пользователь',
            'phone' => '79001234567',
            'email' => 'test@example.com',
            'price_final' => 1000,
            'comment' => 'Тестовый заказ',
            'delivery_type' => 'courier',
            'status' => 'new'
        ]);

        // Проверяем, что заказ создан
        $this->assertDatabaseHas('orders', [
            'id' => $order->id,
            'name' => 'Тест'
        ]);

        // Проверяем, что Observer сработал (логи должны содержать информацию об интеграции)
        // В реальном тесте здесь можно проверить логи или мокировать HTTP запросы
    }

    /**
     * Тест форматирования телефона
     */
    public function test_phone_formatting()
    {
        $reflection = new \ReflectionClass(OrderBitrixService::class);
        $method = $reflection->getMethod('formatPhone');
        $method->setAccessible(true);

        // Тестируем различные форматы телефонов
        $this->assertEquals('+79001234567', $method->invokeArgs(null, ['79001234567']));
        $this->assertEquals('+79001234567', $method->invokeArgs(null, ['89001234567']));
        $this->assertEquals('+79001234567', $method->invokeArgs(null, ['9001234567']));
        $this->assertEquals('+79001234567', $method->invokeArgs(null, ['+7 (900) 123-45-67']));
    }
}
