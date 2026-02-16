<?php

namespace Database\Seeders;

use Address\Database\Seeders\AddressSeeder;
use Address\Database\Seeders\ContactMethodsSeeder;
use Alert\Database\Seeders\AlertSeeder;
use Analitic\Database\Seeders\AnaliticSeeder;
use App\Modules\WhiteList\List\database\seeders\WhiteListSeeder;
use Article\Database\Seeders\ArticleSeeder;
use Attribute\Database\Seeders\AttributeSeeder;
use Banner\Database\Seeders\BannerSeeder;
use Bonus\Database\Seeders\BonusSeeder;
use Brand\Database\Seeders\BrandSeeder;
use Cart\Database\Seeders\CartSeeder;
use Category\Database\Seeders\CategorySeeder;
use Category\Database\Seeders\MainCategorySeeder;
use City\Database\Seeders\CitySeeder;
use Combination\Database\Seeders\CombinationSeeder;
use Combo\Database\Seeders\ComboSeeder;
use Comment\Database\Seeders\CommentSeeder;
use ContactForm\Database\Seeders\ContactFormSeeder;
use Delivery\Database\Seeders\DeliveryZoneSeeder;
use Delivery\Database\Seeders\PickupLocationSeeder;
use Faq\Database\Seeders\FaqSeeder;
use Filter\Database\Seeders\FilterSeeder;
use GlobalPromotion\Database\Seeders\GlobalPromotionSeeder;
use Illuminate\Database\Seeder;
use Localization\Database\Seeders\LocalizationSeeder;
use Loyalty\Database\Seeders\LoyaltySeeder;
use Manufacturer\Database\Seeders\ManufacturerSeeder;
use Notification\Database\Seeders\NotificationSeeder;
use Order\Database\Seeders\OrderPromocodeSeeder;
use Order\Database\Seeders\OrderSeeder;
use Order\Database\Seeders\TransactionSeeder;
use Pages\Database\Seeders\PageSeeder;
use Pages\Database\Seeders\RewardSeeder;
use Pages\Database\Seeders\TeamSeeder;
use Product\Database\Seeders\ProductSeeder;
use Product\Database\Seeders\MoreProductSeeder;

use Product\Database\Seeders\RecomendedProductsSeeder;
use Promotion\Database\Seeders\PromotionSeeder;
use Recipe\Database\Seeders\RecipeSeeder;
use Review\Database\Seeders\ReviewSeeder;
use Robots\Database\Seeders\RobotsSeeder;
use SeoPage\Database\Seeders\SeoPageSeeder;
use Setting\Database\Seeders\SettingSeeder;
use Tag\Database\Seeders\TagSeeder;
use User\Database\Seeders\UserSeeder;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(LoyaltySeeder::class);
        $this->call(ContactMethodsSeeder::class);
        $this->call(UserSeeder::class);
        $this->call([
            CitySeeder::class,
            AddressSeeder::class,
            MoonshineSeeder::class,
            AttributeSeeder::class,
            LocalizationSeeder::class,
            BrandSeeder::class,
            CategorySeeder::class,
            TagSeeder::class,
            ManufacturerSeeder::class,
            ProductSeeder::class,

//            MoreProductSeeder::class,


            ComboSeeder::class,
            TransactionSeeder::class,
            OrderSeeder::class,
            OrderPromocodeSeeder::class,
            ContactFormSeeder::class,
            AnaliticSeeder::class,
            CartSeeder::class,
            ArticleSeeder::class,
            RecipeSeeder::class,
            ReviewSeeder::class,
            WhiteListSeeder::class,
            FilterSeeder::class,
            MainCategorySeeder::class,
            PageSeeder::class,
            FaqSeeder::class,
            TeamSeeder::class,
            RewardSeeder::class,
            BonusSeeder::class,
            PickupLocationSeeder::class,
            RecomendedProductsSeeder::class,
            AlertSeeder::class,
            DeliveryZoneSeeder::class,
            PromotionSeeder::class,
            CommentSeeder::class,
            NotificationSeeder::class,
            CombinationSeeder::class,
            SettingSeeder::class,
            RobotsSeeder::class,
            SeoPageSeeder::class,
            GlobalPromotionSeeder::class,
            BannerSeeder::class,
        ]);


        // User::factory(10)->create();

//        User::factory()->create([
//            'name' => 'Test User',
//            'email' => 'test@example.com',
//        ]);
    }
}
