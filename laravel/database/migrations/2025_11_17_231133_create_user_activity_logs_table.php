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
        Schema::create('user_activity_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('cascade');
            $table->string('activity_type'); // registration, login, social_auth, password_reset_request, password_reset, notification_sent
            $table->string('status'); // success, failed
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->json('metadata')->nullable(); // Дополнительные данные
            $table->string('social_provider')->nullable(); // vkontakte, yandex
            $table->string('notification_type')->nullable(); // novelty, promo
            $table->string('notification_status')->nullable(); // pending, sent, failed
            $table->unsignedBigInteger('related_id')->nullable(); // ID связанной сущности (product_id, promotion_id)
            $table->timestamps();

            $table->index(['user_id', 'activity_type']);
            $table->index(['activity_type', 'status']);
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_activity_logs');
    }
};
