<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('products', function (Blueprint $table) {
            if (!Schema::hasColumn('products', 'is_first_order_gift')) {
                $table->boolean('is_first_order_gift')->default(false)->after('is_new');
            }
        });

        Schema::table('cart_items', function (Blueprint $table) {
            if (!Schema::hasColumn('cart_items', 'is_gift')) {
                $table->boolean('is_gift')->default(false)->after('quantity');
            }
        });

        Schema::table('order_items', function (Blueprint $table) {
            if (!Schema::hasColumn('order_items', 'is_gift')) {
                $table->boolean('is_gift')->default(false)->after('quantity');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            if (Schema::hasColumn('products', 'is_first_order_gift')) {
                $table->dropColumn('is_first_order_gift');
            }
        });

        Schema::table('cart_items', function (Blueprint $table) {
            if (Schema::hasColumn('cart_items', 'is_gift')) {
                $table->dropColumn('is_gift');
            }
        });

        Schema::table('order_items', function (Blueprint $table) {
            if (Schema::hasColumn('order_items', 'is_gift')) {
                $table->dropColumn('is_gift');
            }
        });
    }
};

