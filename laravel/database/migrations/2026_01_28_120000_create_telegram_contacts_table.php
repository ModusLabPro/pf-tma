<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('telegram_contacts')) {
            return;
        }

        Schema::create('telegram_contacts', function (Blueprint $table) {
            $table->id();
            $table->string('telegram_id', 32)->index();
            $table->string('phone', 20)->index();
            $table->unsignedBigInteger('user_id')->nullable()->index();
            $table->timestamps();

            $table->unique(['telegram_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('telegram_contacts');
    }
};
