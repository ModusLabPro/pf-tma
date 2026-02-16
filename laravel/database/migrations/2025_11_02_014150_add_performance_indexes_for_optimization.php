<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 
     * Безопасно добавляет индексы для оптимизации производительности.
     * Все индексы проверяются на существование перед созданием.
     * 
     * 
     */

//      Что делает миграция
// Добавляет индексы на часто используемые поля:
// orders:
// bitrix_deal_id — для поиска по ID сделки Bitrix24
// user_id, status, created_at — для фильтров
// Составной индекс (user_id, status, created_at) — для списков заказов пользователя
// order_promocodes:
// promocode — для поиска промокода
// status — для фильтрации
// cart_items:
// Составной (item_type, item_id) — для поиска товаров в корзине
// cart_id — для фильтрации по корзине
// order_items:
// order_id — для связки с заказом
// Составной (item_type, item_id) — для поиска товаров
// products:
// is_active — для фильтрации активных товаров
// users:
// email, phone — для поиска пользователей

    public function up(): void
    {
        // Индексы для orders
        Schema::table('orders', function (Blueprint $table) {
            // Индекс для поиска по bitrix_deal_id (используется в OrderApiController)
            if (!$this->hasIndex('orders', 'orders_bitrix_deal_id_index')) {
                $table->index('bitrix_deal_id', 'orders_bitrix_deal_id_index');
            }
            
            // Индексы для user_id, status, created_at могут уже существовать через foreign keys,
            // но проверим и добавим если нужно
            if (!$this->hasIndex('orders', 'orders_user_id_index')) {
                $table->index('user_id', 'orders_user_id_index');
            }
            
            if (!$this->hasIndex('orders', 'orders_status_index')) {
                $table->index('status', 'orders_status_index');
            }
            
            if (!$this->hasIndex('orders', 'orders_created_at_index')) {
                $table->index('created_at', 'orders_created_at_index');
            }
            
            // Составной индекс для частого запроса: получение заказов пользователя с фильтрацией
            if (!$this->hasIndex('orders', 'orders_user_status_created_index')) {
                $table->index(['user_id', 'status', 'created_at'], 'orders_user_status_created_index');
            }
        });

        // Индексы для order_promocodes
        Schema::table('order_promocodes', function (Blueprint $table) {
            // Индекс для поиска промокода по коду (используется часто в OrderController)
            if (!$this->hasIndex('order_promocodes', 'order_promocodes_promocode_index')) {
                $table->index('promocode', 'order_promocodes_promocode_index');
            }
            
            // Индекс для фильтрации по статусу
            if (!$this->hasIndex('order_promocodes', 'order_promocodes_status_index')) {
                $table->index('status', 'order_promocodes_status_index');
            }
        });

        // Индексы для cart_items
        Schema::table('cart_items', function (Blueprint $table) {
            // Составной индекс для поиска товара в корзине по типу и ID
            // morphs('item') создает item_type и item_id, но составного индекса нет
            if (!$this->hasIndex('cart_items', 'cart_items_item_type_id_index')) {
                $table->index(['item_type', 'item_id'], 'cart_items_item_type_id_index');
            }
            
            // Индекс на cart_id (может уже существовать через foreign key, но проверим)
            if (!$this->hasIndex('cart_items', 'cart_items_cart_id_index')) {
                $table->index('cart_id', 'cart_items_cart_id_index');
            }
        });

        // Индексы для order_items
        Schema::table('order_items', function (Blueprint $table) {
            // Индекс на order_id (может уже существовать через foreign key)
            if (!$this->hasIndex('order_items', 'order_items_order_id_index')) {
                $table->index('order_id', 'order_items_order_id_index');
            }
            
            // Составной индекс для поиска по типу товара и ID
            if (!$this->hasIndex('order_items', 'order_items_item_type_id_index')) {
                $table->index(['item_type', 'item_id'], 'order_items_item_type_id_index');
            }
        });

        // Индексы для products
        Schema::table('products', function (Blueprint $table) {
            // Индекс для фильтрации активных товаров (используется везде в active() scope)
            if (!$this->hasIndex('products', 'products_is_active_index')) {
                $table->index('is_active', 'products_is_active_index');
            }
        });

        // Индексы для users (для быстрого поиска по email и phone)
        if (Schema::hasTable('users')) {
            Schema::table('users', function (Blueprint $table) {
                // Индекс на email (может уже существовать как unique)
                if (!$this->hasIndex('users', 'users_email_index') && !$this->hasUniqueIndex('users', 'users_email_unique')) {
                    $table->index('email', 'users_email_index');
                }
                
                // Индекс на phone (используется в OrderController для поиска пользователя)
                if ($this->hasColumn('users', 'phone') && !$this->hasIndex('users', 'users_phone_index')) {
                    $table->index('phone', 'users_phone_index');
                }
            });
        }
    }

    /**
     * Reverse the migrations.
     * 
     * Безопасно удаляет созданные индексы.
     * Проверяет существование перед удалением.
     */
    public function down(): void
    {
        // Удаляем индексы в обратном порядке
        Schema::table('users', function (Blueprint $table) {
            if ($this->hasIndex('users', 'users_phone_index')) {
                $table->dropIndex('users_phone_index');
            }
            if ($this->hasIndex('users', 'users_email_index')) {
                $table->dropIndex('users_email_index');
            }
        });

        Schema::table('products', function (Blueprint $table) {
            if ($this->hasIndex('products', 'products_is_active_index')) {
                $table->dropIndex('products_is_active_index');
            }
        });

        Schema::table('order_items', function (Blueprint $table) {
            if ($this->hasIndex('order_items', 'order_items_item_type_id_index')) {
                $table->dropIndex('order_items_item_type_id_index');
            }
            if ($this->hasIndex('order_items', 'order_items_order_id_index')) {
                $table->dropIndex('order_items_order_id_index');
            }
        });

        Schema::table('cart_items', function (Blueprint $table) {
            if ($this->hasIndex('cart_items', 'cart_items_cart_id_index')) {
                $table->dropIndex('cart_items_cart_id_index');
            }
            if ($this->hasIndex('cart_items', 'cart_items_item_type_id_index')) {
                $table->dropIndex('cart_items_item_type_id_index');
            }
        });

        Schema::table('order_promocodes', function (Blueprint $table) {
            if ($this->hasIndex('order_promocodes', 'order_promocodes_status_index')) {
                $table->dropIndex('order_promocodes_status_index');
            }
            if ($this->hasIndex('order_promocodes', 'order_promocodes_promocode_index')) {
                $table->dropIndex('order_promocodes_promocode_index');
            }
        });

        Schema::table('orders', function (Blueprint $table) {
            if ($this->hasIndex('orders', 'orders_user_status_created_index')) {
                $table->dropIndex('orders_user_status_created_index');
            }
            if ($this->hasIndex('orders', 'orders_created_at_index')) {
                $table->dropIndex('orders_created_at_index');
            }
            if ($this->hasIndex('orders', 'orders_status_index')) {
                $table->dropIndex('orders_status_index');
            }
            if ($this->hasIndex('orders', 'orders_user_id_index')) {
                $table->dropIndex('orders_user_id_index');
            }
            if ($this->hasIndex('orders', 'orders_bitrix_deal_id_index')) {
                $table->dropIndex('orders_bitrix_deal_id_index');
            }
        });
    }

    /**
     * Проверяет существование индекса в PostgreSQL
     */
    private function hasIndex(string $table, string $indexName): bool
    {
        try {
            $connection = Schema::getConnection();
            $database = $connection->getDatabaseName();
            
            $result = DB::selectOne(
                "SELECT COUNT(*) as count 
                 FROM pg_indexes 
                 WHERE schemaname = 'public' 
                 AND tablename = ? 
                 AND indexname = ?",
                [$table, $indexName]
            );
            
            return $result && $result->count > 0;
        } catch (\Exception $e) {
            // Если запрос не выполнился (например, таблицы еще нет), возвращаем false
            return false;
        }
    }

    /**
     * Проверяет существование уникального индекса в PostgreSQL
     */
    private function hasUniqueIndex(string $table, string $indexName): bool
    {
        return $this->hasIndex($table, $indexName);
    }

    /**
     * Проверяет существование колонки в таблице
     */
    private function hasColumn(string $table, string $column): bool
    {
        return Schema::hasColumn($table, $column);
    }
};

