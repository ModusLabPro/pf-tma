<?php

namespace Database\Seeders;

use App\Modules\Product\Product\src\Enums\PriceTypeEnum;
use App\Modules\Product\Product\src\Enums\WeightTypeEnum;
use Attribute\Enums\InputTypeEnum;
use Attribute\Models\Attribute;
use Brand\Models\Brand;
use Category\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use MoonShine\Laravel\Models\MoonshineUser;
use Product\Models\Product;
use Tag\Models\Tag;

class FakeCatalogSeeder extends Seeder
{
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

        // категории
        $categories = [
            'ЧТО ПРИГОТОВИТЬ?' => [
                'Быстрый ужин',
                'Детское меню',
                'Отрубы для ростбифа',
                'Праздничный ужин',
            ],
            'WAGYU (Вагю)' => [],
            'СКИДКИ НЕДЕЛИ' => [],
            'Премиальные отрубы' => [
                'Рибай',
                'Шорт лойн',
                'Стриплойн',
                'Вырезка',
                'Ребра',
            ],
            'Dry Aged Zozulinsky&Primebeef' => [],
            'Мраморная говядина' => [
                'Шея и лопатка',
                'Грудинка',
                'Пашина',
                'Задок',
                'Голяшка',
                'Кострец',
                'Покромка',
            ],
            'Мясной Мерч' => [],
            'Рыба' => [],
            'Сыр La Petite Maison' => [],
            'Утка и цыплята' => [],
            'Мраморная говядина Халяль' => [],
            'Порционные стейки' => [],
            'Полуфабрикаты' => [],
            'Мясная гастрономия' => [],
            'Баранина' => [],
            'Грили и Аксессуары' => [
                'Наборы для BBQ',
                'Грили',
                'Перчатки для гриля',
                'Сковороды гриль',
                'Уголь для гриля',
                'Ножи',
                'Копчение',
            ],
            'Слайсеры' => [],
            'Соусы | Специи' => [
                'Перец',
                'Соль',
                'Соусы',
                'Специи',
                'Продукты из трюфелей',
            ],

            'Родитель 1' => [
                'Child Level 2',
            ],
            'Родитель 2' => [
                'First Child Level 2',
                'Second Child Level 2',
            ],
        ];


        foreach ($categories as $parentName => $children) {
            $parentCategory = Category::firstOrCreate(['name' => $parentName,],[
                'slug' => Str::slug($parentName),
                'parent_category_id' => null,
                'explanation' => null,
                'description' => null,
            ]);


            foreach ($children as $childName) {

                $childCategory = Category::firstOrCreate(['name' => $childName,],[
                    'slug' => Str::slug($childName),
                    'parent_category_id' => $parentCategory->id,
                    'explanation' => null,
                    'description' => null,
                ]);

                if ($childName === 'Child Level 2') {
                    $level3 = Category::firstOrCreate([  'name' => 'SubChild Level 3',],[
                        'slug' => Str::slug('SubSubChild Level 3'),
                        'parent_category_id' => $childCategory->id,
                        'explanation' => null,
                        'description' => null,
                    ]);

                    Category::firstOrCreate(['name' => 'SubSubChild Level 4',],[
                        'slug' => Str::slug('SubSubChild Level 4'),
                        'parent_category_id' => $level3->id,
                        'explanation' => null,
                        'description' => null,
                    ]);
                }

                if ($childName === 'First Child Level 2') {
                    Category::firstOrCreate([  'name' => 'Another SubChild Level 3'],[
                        'slug' => Str::slug('Another SubChild Level 3'),
                        'parent_category_id' => $childCategory->id,
                        'explanation' => null,
                        'description' => null,
                    ]);
                }
            }
        }

        for ($i = 1; $i <= 300; $i++) {
            $tags = Tag::all();
            $brands = Brand::all();
            $attributes = Attribute::all();
            // бренды
            $brand = Brand::firstOrCreate(
                [
                    'name' => "Бренд $i",
                ],
                [
                    'parent_brand_id' => null,
                    'explanation' => "Объяснение для бренда $i",
                ]
            );
            // аттрибуты
            $inputType = fake()->randomElement(InputTypeEnum::cases());

            $attribute = Attribute::firstOrCreate(
                [
                    'name' => "Характеристика $i"
                ],
                [
                    'slug' => Str::slug("slug-$i"),
                    'input_type' => $inputType,
                    'options' => $inputType === InputTypeEnum::select ? ['значение 1', 'значение 2', 'значение 3', 'значение 4'] : null,
                    'is_many_checked_options' => (bool)rand(0, 1),
                    'is_select_writable' => (bool)rand(0, 1),

                ]
            );

            // тэги
            $tag = Tag::firstOrCreate([
                'name' => "Tag $i",
            ]);


            $product = Product::firstOrCreate([  'name' => "Продукт $i"],[
                'price' => rand(1000, 5000),
                'sale_price' => rand(0, 1) ? rand(900, 4500) : null,
                'weight' => rand(100, 300) / 100,
                'quantity' => rand(1, 10),
                'description' => "Описание для продукта $i",
                'short_description' => "Короткое описание $i",
                'price_type' => fake()->randomElement(PriceTypeEnum::cases()),
                'weight_type' => fake()->randomElement(WeightTypeEnum::cases()),
            ]);
            $categories = Category::all();

            $randomCategories = $categories->random(min(2, $categories->count()));
            $categoryIdsToAttach = collect();
            foreach ($randomCategories as $category) {
                $categoryIdsToAttach->push($category->id);

                if ($category->parent_category_id) {
                    $categoryIdsToAttach->push($category->parent_category_id);
                }
            }
            $categoryIdsToAttach = $categoryIdsToAttach->unique();
            $product->categories()->attach($categoryIdsToAttach);

            $product->tags()->attach(
                $tags->random(min(3, $tags->count()))->pluck('id')
            );
            $product->brands()->attach(
                $brands->random(min(2, $brands->count()))->pluck('id')
            );
            $product->attributes()->attach(
                $attributes->random(min(3, $attributes->count()))->pluck('id')
            );
        }



    }
}
