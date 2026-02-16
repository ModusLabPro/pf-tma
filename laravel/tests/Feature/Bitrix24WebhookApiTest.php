<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Order\Models\Order;
use Tests\TestCase;
use User\Models\User;

class Bitrix24WebhookApiTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Тест обновления deal_id через webhook
     */
    public function test_update_deal_id_via_webhook()
    {
        // Создаем пользователя и заказ
        $user = User::factory()->create();
        $order = Order::factory()->create([
            'user_id' => $user->id,
            'bitrix_lead_id' => '12345',
            'bitrix_deal_id' => null
        ]);

        // Данные для webhook'а
        $webhookData = [
            'lead_id' => '12345',
            'deal_id' => '67890',
            'timestamp' => time()
        ];

        // Отправляем POST запрос
        $response = $this->postJson('/order/bitrix24/webhook/deal-update', $webhookData);

        // Проверяем успешный ответ
        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'message' => 'Deal ID updated successfully',
                'order_id' => $order->id,
                'lead_id' => '12345',
                'deal_id' => '67890'
            ]);

        // Проверяем, что deal_id сохранился в базе
        $this->assertDatabaseHas('orders', [
            'id' => $order->id,
            'bitrix_lead_id' => '12345',
            'bitrix_deal_id' => '67890'
        ]);
    }

    /**
     * Тест валидации webhook'а
     */
    public function test_webhook_validation()
    {
        // Отправляем запрос без обязательных полей
        $response = $this->postJson('/order/bitrix24/webhook/deal-update', []);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['lead_id', 'deal_id']);
    }

    /**
     * Тест поиска несуществующего заказа
     */
    public function test_webhook_order_not_found()
    {
        $webhookData = [
            'lead_id' => 'nonexistent',
            'deal_id' => '67890'
        ];

        $response = $this->postJson('/order/bitrix24/webhook/deal-update', $webhookData);

        $response->assertStatus(404)
            ->assertJson([
                'success' => false,
                'message' => 'Order not found',
                'lead_id' => 'nonexistent'
            ]);
    }

    /**
     * Тест получения заказа по lead_id
     */
    public function test_get_order_by_lead_id()
    {
        $user = User::factory()->create();
        $order = Order::factory()->create([
            'user_id' => $user->id,
            'bitrix_lead_id' => '12345',
            'bitrix_deal_id' => '67890'
        ]);

        $response = $this->getJson('/order/bitrix24/order/by-lead-id?lead_id=12345');

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'order' => [
                    'id' => $order->id,
                    'bitrix_lead_id' => '12345',
                    'bitrix_deal_id' => '67890'
                ]
            ]);
    }

    /**
     * Тест получения статуса интеграции
     */
    public function test_integration_status()
    {
        // Создаем тестовые заказы
        $user = User::factory()->create();
        
        Order::factory()->create([
            'user_id' => $user->id,
            'bitrix_lead_id' => '12345',
            'bitrix_deal_id' => '67890'
        ]);
        
        Order::factory()->create([
            'user_id' => $user->id,
            'bitrix_lead_id' => '12346',
            'bitrix_deal_id' => null
        ]);

        $response = $this->getJson('/order/bitrix24/status');

        $response->assertStatus(200)
            ->assertJson([
                'success' => true,
                'integration_status' => [
                    'total_orders_with_leads' => 2,
                    'total_orders_with_deals' => 1,
                    'orders_waiting_for_deals' => 1,
                    'integration_enabled' => true
                ]
            ]);
    }
}
