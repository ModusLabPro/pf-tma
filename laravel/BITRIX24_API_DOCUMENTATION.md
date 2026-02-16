# API интеграции с Битрикс24 - Документация

## Описание
API для получения deal_id от Битрикс24 и обновления заказов в системе Primefoods.

## Базовый URL
```
https://your-domain.com/order/bitrix24/
```

## Аутентификация
API использует стандартную аутентификацию Laravel. Рекомендуется настроить API ключи или токены для безопасности.

## Endpoints

### 1. Обновление Deal ID

**POST** `/webhook/deal-update`

Обновляет deal_id для заказа по lead_id. Этот endpoint вызывается Битрикс24 через webhook.

#### Параметры запроса:
```json
{
    "lead_id": "12345",
    "deal_id": "67890",
    "timestamp": 1640995200
}
```

#### Параметры:
- `lead_id` (string, обязательный) - ID лида в Битрикс24
- `deal_id` (string, обязательный) - ID сделки в Битрикс24  
- `timestamp` (integer, опциональный) - Временная метка запроса

#### Успешный ответ (200):
```json
{
    "success": true,
    "message": "Deal ID updated successfully",
    "order_id": 456,
    "lead_id": "12345",
    "deal_id": "67890"
}
```

#### Ошибка валидации (422):
```json
{
    "success": false,
    "message": "Validation failed",
    "errors": {
        "lead_id": ["The lead_id field is required."]
    }
}
```

#### Заказ не найден (404):
```json
{
    "success": false,
    "message": "Order not found",
    "lead_id": "12345"
}
```

#### Ошибка сервера (500):
```json
{
    "success": false,
    "message": "Internal server error",
    "error": "Database connection failed"
}
```

### 2. Получение заказа по Lead ID

**GET** `/order/by-lead-id?lead_id=12345`

Получает информацию о заказе по lead_id.

#### Параметры запроса:
- `lead_id` (string, обязательный) - ID лида в Битрикс24

#### Успешный ответ (200):
```json
{
    "success": true,
    "order": {
        "id": 456,
        "name": "Иван",
        "last_name": "Иванов",
        "phone": "79001234567",
        "email": "ivan@example.com",
        "price_final": 1500,
        "status": "new",
        "bitrix_lead_id": "12345",
        "bitrix_deal_id": "67890",
        "created_at": "2025-01-27T10:00:00.000000Z"
    }
}
```

#### Заказ не найден (404):
```json
{
    "success": false,
    "message": "Order not found",
    "lead_id": "12345"
}
```

### 3. Статус интеграции

**GET** `/status`

Получает статистику интеграции с Битрикс24.

#### Успешный ответ (200):
```json
{
    "success": true,
    "integration_status": {
        "total_orders_with_leads": 150,
        "total_orders_with_deals": 120,
        "orders_waiting_for_deals": 30,
        "integration_enabled": true
    }
}
```

## Настройка Webhook в Битрикс24

### 1. Создание исходящего webhook
1. Перейдите в настройки Битрикс24 → Разработчикам → Другое → Исходящие вебхуки
2. Создайте новый webhook
3. Укажите URL: `https://your-domain.com/order/bitrix24/webhook/deal-update`
4. Выберите события: `CRM_DEAL_ADD`, `CRM_DEAL_UPDATE`
5. Скопируйте токен webhook

### 2. Настройка обработчика
В Битрикс24 создайте обработчик события, который будет:
1. Получать событие создания/обновления сделки
2. Извлекать lead_id из сделки
3. Отправлять POST запрос на наш API с lead_id и deal_id

### Пример обработчика в Битрикс24:
```javascript
BX.addCustomEvent('onCrmDealAdd', function(eventData) {
    var dealId = eventData.DEAL_ID;
    var leadId = eventData.LEAD_ID;
    
    if (leadId) {
        BX.ajax.runAction('crm.deal.get', {
            data: { id: dealId }
        }).then(function(response) {
            // Отправляем данные на наш API
            BX.ajax({
                url: 'https://your-domain.com/order/bitrix24/webhook/deal-update',
                method: 'POST',
                data: {
                    lead_id: leadId,
                    deal_id: dealId,
                    timestamp: Math.floor(Date.now() / 1000)
                },
                onsuccess: function(response) {
                    console.log('Deal ID updated successfully');
                },
                onfailure: function(response) {
                    console.error('Failed to update deal ID');
                }
            });
        });
    }
});
```

## Логирование

Все запросы к API логируются в Laravel лог (`storage/logs/laravel.log`):

- **info** - успешные операции
- **warning** - предупреждения (заказ не найден, ошибки валидации)
- **error** - ошибки сервера
- **debug** - детальная информация для отладки

## Безопасность

### Рекомендации:
1. **HTTPS** - используйте только HTTPS для webhook'ов
2. **IP whitelist** - ограничьте доступ только с IP Битрикс24
3. **API токены** - настройте аутентификацию через токены
4. **Rate limiting** - ограничьте количество запросов
5. **Валидация** - всегда валидируйте входящие данные

### Пример middleware для проверки IP:
```php
// В routes/order.php
Route::middleware(['throttle:60,1', 'bitrix24.ip'])->group(function () {
    Route::post('webhook/deal-update', [Bitrix24WebhookController::class, 'updateDealId']);
});
```

## Тестирование

### Тест обновления Deal ID:
```bash
curl -X POST https://your-domain.com/order/bitrix24/webhook/deal-update \
  -H "Content-Type: application/json" \
  -d '{
    "lead_id": "12345",
    "deal_id": "67890"
  }'
```

### Тест получения заказа:
```bash
curl "https://your-domain.com/order/bitrix24/order/by-lead-id?lead_id=12345"
```

### Тест статуса:
```bash
curl "https://your-domain.com/order/bitrix24/status"
```

## Мониторинг

### Проверка интеграции:
1. Создайте тестовый заказ
2. Проверьте создание лида в Битрикс24
3. Проверьте сохранение lead_id в заказе
4. Создайте сделку в Битрикс24
5. Проверьте получение deal_id через webhook
6. Проверьте обновление заказа

### Метрики для мониторинга:
- Количество заказов с lead_id
- Количество заказов с deal_id
- Количество заказов ожидающих deal_id
- Время от создания лида до получения deal_id
- Количество ошибок webhook'ов
