<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use MoonShine\Laravel\Models\MoonshineUser;
use MoonShine\Laravel\Models\MoonshineUserRole;

class MoonshineSeeder extends Seeder
{
    private const IMPERSONATOR_ROLE = 'Имперсонация';
    private const IMPERSONATOR_EMAIL = 'impersonator@primefoods.ru';
    private const IMPERSONATOR_PASSWORD = 'PrimefoodsImpersonator2026!';

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MoonshineUser::updateOrCreate(['email' => 'admin@mail.com'],[
            'name' => 'admin',
            'password' => Hash::make('admin'),
            'moonshine_user_role_id' => 1,
        ]);

        // Отдельный админ для импёрсонации (доступ ограниченному кругу лиц)
        $roleName = self::IMPERSONATOR_ROLE;
        $email = self::IMPERSONATOR_EMAIL;
        $password = self::IMPERSONATOR_PASSWORD;

        // Для pgsql: после вставки id=1 в миграции sequence может остаться на 1 и ломать последующие вставки
        $this->syncPgsqlSequence('moonshine_user_roles', 'id');

        $role = MoonshineUserRole::firstOrCreate(['name' => $roleName]);

        $this->syncPgsqlSequence('moonshine_users', 'id');

        MoonshineUser::updateOrCreate(['email' => $email], [
            'name' => 'impersonator',
            'password' => Hash::make($password),
            'moonshine_user_role_id' => $role->id,
        ]);
    }

    private function syncPgsqlSequence(string $table, string $column): void
    {
        if (DB::getDriverName() !== 'pgsql') {
            return;
        }

        // setval(seq, max(id), true) -> nextval будет max(id)+1
        DB::statement("
            SELECT setval(
                pg_get_serial_sequence(?, ?),
                COALESCE((SELECT MAX($column) FROM $table), 1),
                true
            )
        ", [$table, $column]);
    }
}
