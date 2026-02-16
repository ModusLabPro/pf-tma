<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->bigInteger('telegram_id')->nullable()->unique()->after('yandex_id');
            $table->string('telegram_username', 100)->nullable()->after('telegram_id');
            $table->string('telegram_first_name', 100)->nullable()->after('telegram_username');
            $table->string('telegram_last_name', 100)->nullable()->after('telegram_first_name');
            $table->string('telegram_photo_url')->nullable()->after('telegram_last_name');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn([
                'telegram_id',
                'telegram_username',
                'telegram_first_name',
                'telegram_last_name',
                'telegram_photo_url',
            ]);
        });
    }
};
