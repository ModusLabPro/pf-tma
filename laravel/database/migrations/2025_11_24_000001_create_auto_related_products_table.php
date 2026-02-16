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
        Schema::create('auto_related_products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')
                ->constrained('products')
                ->cascadeOnDelete();
            $table->foreignId('related_product_id')
                ->constrained('products')
                ->cascadeOnDelete();
            $table->unsignedInteger('joint_orders_count')->default(0);
            $table->unsignedInteger('product_orders_count')->default(0);
            $table->decimal('confidence', 5, 4)->default(0); // ratio 0.0000 - 0.9999
            $table->timestamps();

            $table->unique(['product_id', 'related_product_id']);
            $table->index(['product_id', 'confidence']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auto_related_products');
    }
};

