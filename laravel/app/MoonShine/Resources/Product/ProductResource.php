<?php

declare(strict_types=1);

namespace App\MoonShine\Resources\Product;

use App\Modules\Product\Product\src\Enums\DegreeTypeEnum;
use App\Modules\Product\Product\src\Enums\PriceTypeEnum;
use App\Modules\Product\Product\src\Enums\WeightTypeEnum;
use App\Modules\Product\Product\src\Models\AdminTag;
use App\MoonShine\CustomFields\ImageCustom;
use App\MoonShine\CustomFields\ProductVideoCustom;
use App\MoonShine\Fields\PreviewImagesSelect;
use App\MoonShine\Resources\Product\CityCounts\CityCountResource;
use App\MoonShine\Resources\Product\CityPrice\CityPriceResource;
use App\MoonShine\Resources\Product\Manufacturer\ManufacturerResource;
use App\MoonShine\Resources\Product\RelatedProducts\RelatedProductResource;
use App\MoonShine\Resources\Promotion\PromotionResource;
use App\MoonShine\Resources\System\CityResource;
use App\MoonShine\Traits\Localization\HasMoonshineTranslate;
use Attribute\Enums\InputTypeEnum;
use Attribute\Models\Attribute as AttributeProduct;
use Attribute\Models\AttributeCategory;
use Attribute\Models\ProductAttribute;
use Carbon\Carbon;
use Category\Models\ProductCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Localization\Models\Lang;
use Localization\Models\Localization;
use MoonShine\AssetManager\InlineJs;
use MoonShine\Laravel\Fields\Relationships\BelongsTo;
use MoonShine\Laravel\Fields\Relationships\BelongsToMany;
use MoonShine\Laravel\Fields\Relationships\HasMany;
use MoonShine\Laravel\Fields\Relationships\HasOne;
use MoonShine\Laravel\Fields\Relationships\RelationRepeater;
use MoonShine\Laravel\Fields\Slug;
use MoonShine\Laravel\QueryTags\QueryTag;
use MoonShine\Laravel\Resources\ModelResource;
use MoonShine\Support\DTOs\FileItemExtra;
use MoonShine\TinyMce\Fields\TinyMce;
use MoonShine\UI\Components\Badge;
use MoonShine\UI\Components\Boolean;
use MoonShine\UI\Components\Collapse;
use MoonShine\UI\Components\Components;
use MoonShine\UI\Components\Layout\Box;
use MoonShine\UI\Components\Layout\Flex;
use MoonShine\UI\Components\Tabs;
use MoonShine\UI\Components\Tabs\Tab;
use MoonShine\UI\Fields\Date;
use MoonShine\UI\Fields\Enum;
use MoonShine\UI\Fields\Field;
use MoonShine\UI\Fields\ID;
use MoonShine\Contracts\UI\FieldContract;
use MoonShine\Contracts\UI\ComponentContract;
use MoonShine\UI\Fields\Number;
use MoonShine\UI\Fields\Preview;
use MoonShine\UI\Fields\RangeSlider;
use MoonShine\UI\Fields\Select;
use MoonShine\UI\Fields\Switcher;
use MoonShine\UI\Fields\Template;
use MoonShine\UI\Fields\Text;
use MoonShine\UI\Fields\Textarea;
use Notification\Enums\NotificationTypeEnum;
use Notification\Models\PromoNotification;
use phpseclib3\File\ASN1\Maps\Attribute;
use Product\Models\CuttingProduct;
use Product\Models\Product;
use Product\Models\ProductsAdminTag;
use User\Models\User;
use Illuminate\Validation\ValidationException;
use function PHPUnit\Framework\isInt;

/**
 * @extends ModelResource<Product>
 */
class ProductResource extends ModelResource
{
    use HasMoonshineTranslate;
    protected string $model = Product::class;

    protected string $title = 'Продукты';

    protected array $with = ['categories'];

    protected bool $isAsync = false;

    protected function onLoad(): void
    {
        $this->getAssetManager()
            ->prepend(InlineJs::make(<<<'JS'
            document.addEventListener('DOMContentLoaded', () => {
                // Проверка размера для изображений
                document.querySelectorAll('input[type="file"][name="images[]"]').forEach(input => {
                    input.addEventListener('change', function() {
                        const maxSize = 8 * 1024 * 1024;
                        for (let i = 0; i < this.files.length; i++) {
                            if (this.files[i].size > maxSize) {
                                alert('Максимальный размер загружаемого файла 8МБ');
                                this.value = '';
                                break;
                            }
                        }
                    });
                });

                // Проверка размера для видео
                document.querySelectorAll('input[type="file"][name="videos[]"]').forEach(input => {
                    input.addEventListener('change', function() {
                        const maxSize = 2 * 1024 * 1024;
                        for (let i = 0; i < this.files.length; i++) {
                            if (this.files[i].size > maxSize) {
                                alert('Максимальный размер загружаемого файла 2МБ');
                                this.value = '';
                                break;
                            }
                        }
                    });
                });

                // Сохранение поискового запроса при использовании query tags (быстрые фильтры)
                const searchInput = document.querySelector('input[name="search"]');
                
                // Функция для получения текущего поискового запроса
                const getCurrentSearch = () => {
                    if (searchInput && searchInput.value) {
                        return searchInput.value;
                    }
                    const urlParams = new URLSearchParams(window.location.search);
                    return urlParams.get('search') || '';
                };

                // Сохраняем поисковый запрос при изменении
                if (searchInput) {
                    // Сохраняем текущий поиск из URL при загрузке
                    const urlParams = new URLSearchParams(window.location.search);
                    const urlSearch = urlParams.get('search');
                    if (urlSearch) {
                        searchInput.value = urlSearch;
                        sessionStorage.setItem('moonshine_search_query', urlSearch);
                    }

                    // Сохраняем при изменении
                    searchInput.addEventListener('input', function() {
                        if (this.value) {
                            sessionStorage.setItem('moonshine_search_query', this.value);
                        } else {
                            sessionStorage.removeItem('moonshine_search_query');
                        }
                    });
                }

                // Перехватываем клики на все ссылки (включая query tags)
                document.addEventListener('click', function(e) {
                    const link = e.target.closest('a');
                    if (!link) return;

                    const href = link.getAttribute('href');
                    if (!href || href.startsWith('#') || href.startsWith('javascript:')) return;

                    // Проверяем, является ли это query tag
                    // Query tags в MoonShine обычно содержат query-tag в URL
                    const isQueryTag = href.includes('query-tag') || 
                                      href.includes('queryTag') ||
                                      link.classList.contains('query-tag') ||
                                      link.closest('.query-tags');

                    if (isQueryTag) {
                        const currentSearch = getCurrentSearch();
                        if (currentSearch) {
                            e.preventDefault();
                            e.stopPropagation();
                            
                            try {
                                const url = new URL(href, window.location.origin);
                                url.searchParams.set('search', currentSearch);
                                window.location.href = url.toString();
                            } catch (err) {
                                // Если href относительный, обрабатываем по-другому
                                const separator = href.includes('?') ? '&' : '?';
                                const newHref = href + separator + 'search=' + encodeURIComponent(currentSearch);
                                window.location.href = newHref;
                            }
                        }
                    }
                });
            });
            JS
            ));
    }

    protected function search(): array
    {
        return ['id', 'name', 'description','short_description','seo_title','seo_description','uuid_1c', 'uuid_bitrix24'];
    }

    protected function searchQuery(string $terms): void
    {
        $exactArticleMatches = $this->getModel()
            ->newQuery()
            ->select('id')
            ->where('article_number', $terms)
            ->get();

        if ($exactArticleMatches->isNotEmpty()) {
            $productIds = $exactArticleMatches->pluck('id')->toArray();
            $this->newQuery()->whereIn('id', $productIds);
        } else {
            parent::searchQuery($terms);
        }
    }



    protected function indexFields(): iterable
    {
        return [
            ID::make()->sortable(),
            ImageCustom::make('Изображение','firstImage')
                ->multiple()->itemAttributes(fn(string $filename, int $index = 0) => [
                'style' => 'width: 100px; height: 100px;'
            ]),

            Text::make('Название','name'),
            Text::make('Артикул','article_number'),
            BelongsToMany::make('Теги','adminTags','title', resource: ProductAdminTagResource::class)
                ->selectMode()->inLine(
                    separator: ' ',
                    badge: fn($model, $value) => Badge::make((string) $value, 'primary'),
                    ),

            Switcher::make('Актив 1C', 'is_active'),
            Switcher::make('Аналог', 'is_analog')->disabled(),
/*            Number::make('Вес','weight'),*/
/*            Number::make('Цена','price'),*/
        ];
    }

    protected function queryTags(): array
    {

        $tagsAdmin = [];
        foreach (AdminTag::all() as $tag) {
            $tagsAdmin[] = QueryTag::make(
                $tag->title,
                fn(Builder $query) => $query->whereHas('adminTags', function ($query) use ($tag) {
                        $query->where('admin_tags.id', $tag->id);
                    })
            );
        }
        return [
            QueryTag::make(
                'Без цены',
                fn(Builder $query) => $query->whereNull('price')
            ),
            QueryTag::make(
                'Без категории',
                fn(Builder $query) => $query->doesntHave('categories')
            ),
            QueryTag::make(
                'Нет в 1С',
                fn(Builder $query) => $query->whereNull('uuid_1c')
            ),
            QueryTag::make(
                'Активен в 1С',
                fn(Builder $query) => $query->where('is_active', true)
            ),
            QueryTag::make(
                'Подарок за первый заказ',
                fn(Builder $query) => $query->where('is_first_order_gift', true)
            ),
            QueryTag::make(
                'Новинки',
                fn(Builder $query) => $query->where('is_new', true)
            ),
            ...$tagsAdmin
        ];
    }


    protected function getHintForSalePrice(): string
    {
        $isEditPage = $this->getItem() != null;

        if ($isEditPage && $this->getItem()) {
            $item = $this->getItem();
            $promoInfo = $item->getActivePromotionInfo(); // Вызываем метод модели

            if ($promoInfo && $promoInfo['cities']->isNotEmpty()) {
                // Если информация о промоакции и городах есть
                return 'Применяется к городам: ' . $promoInfo['cities']->pluck('name')->join(', ');
            } elseif ($promoInfo) {
                // Если промоакция есть, но города не привязаны
                return 'Активная промоакция не привязана к городам.';
            } else {
                // Если нет подходящей активной промоакции
                return 'Нет активной промоакции.';
            }
        }

        // Если на странице создания или $item не существует
        return 'Города будут доступны после сохранения и привязки активной промоакции.';
    }
        protected function formFields(): iterable
    {

        $readonlyCondition = filled($this->getItem()?->uuid_1c);
        $isAnalogBlocked = $this->getItem()?->is_analog === true;

        $isEditPage = $this->getItem() != null;

        if ($isEditPage && $this->getItem()) {
            $this->getItem()->loadMissing([
                'product_categories',
                'categories',
                'images',
                'videos',
                'videos.preview.preview',
                'attributes', // и т.д.
                'cityPrices.city',
                'cityCounts.city',
                'brands',
                'tags'
            ]);
        }

        $modelClass = $this->getModel()::class;
        $model = $this->getModel();
        if ($isEditPage){
            $localizations = Localization::where('localizationable_type', $this->getModel()::class)
                ->where('localizationable_id', $this->getItem()->id)
                ->get()
                ->groupBy(fn ($item) => $item->lang_id . '.' . $item->field);
        }


        return [

            Box::make([
                Tabs::make([
                    Tab::make('Основное', [
                        Preview::make('', 'is_analog_warning', fn() =>
                            $isAnalogBlocked
                                ? '<p style="color: #666; margin-bottom: 15px;">⚠️ Этот товар является аналогом. Редактирование заблокировано.</p>'
                                : ''
                        )->canSee(fn() => $isAnalogBlocked),

                        BelongsToMany::make('Теги номенклатуры (для администраторов)','adminTags','title', resource: ProductAdminTagResource::class)
                            ->selectMode()
                            ->readonly(condition: $isAnalogBlocked),

/*                        BelongsToMany::make('Промоакции','promotion','name', resource: PromotionResource::class)
                            ->selectMode()
                            ->customAttributes([
                                'data-max-item-count' => 1
                            ]),*/

                        ID::make(),
                        Flex::make([
                            Text::make('Название','name')->required()->unescape()->readonly($isAnalogBlocked),
                            Text::make('Артикул','article_number')->nullable()->readonly($readonlyCondition || $isAnalogBlocked),
                        ]),
                        BelongsTo::make('Производитель','manufacturer','name',ManufacturerResource::class)->required()->readonly($isAnalogBlocked),
                        Flex::make([
                            Enum::make('Тип веса','weight_type')->attach(WeightTypeEnum::class)->required()->readonly($isAnalogBlocked),
                            Number::make('Вес','weight')
                                ->readonly($readonlyCondition || $isAnalogBlocked)
                                ->buttons()
                                ->step(0.1)
                                ->required(),
                        ]),
                        Flex::make([
                                Enum::make('Тип цены','price_type')->attach(PriceTypeEnum::class)->required()->readonly($isAnalogBlocked),

                                Number::make('Основная цена','price')
                                    ->readonly($readonlyCondition || $isAnalogBlocked)
                                    ->step(0.1)
                                    ->required()
                                    ->hint('Отображается, если не выбран город или для выбранного города нет цены'),

                                    Preview::make('Цена со скидкой', 'sale_price_preview', fn() =>
                                    '<input type="text" readonly class="form-input" value="' . ($this->getItem()->sale_price ?? null) . ' ₽">'
                                )->canSee(fn() => $isEditPage)->hint($this->getHintForSalePrice()),
                            ])->class('!items-start'),


                        Switcher::make('Новинка', 'is_new')
                            ->onValue(1)
                            ->offValue(0)
                            ->readonly($isAnalogBlocked),
                        Switcher::make('Подарок за первый заказ', 'is_first_order_gift')
                            ->onValue(1)
                            ->offValue(0)
                            ->readonly($isAnalogBlocked),
                        Text::make('Ключевые слова', 'keywords')
                            ->tags(10)
                            ->readonly($isAnalogBlocked)
                    ]),

                    Tab::make('Изображения', array(
                        Collapse::make('Изображения', array(
                            ImageCustom::make('Изображения','images')->multiple()->itemAttributes(fn(string $filename, int $index = 0) => array(
                                'style' => 'width: 200px; height: 200px;'
                            ))->reorderable(fn($ctx) =>
                                '/file/sort/reorder-images/' . base64_encode($modelClass) . '/' . $ctx->getData()->getKey()
                            )->readonly($isAnalogBlocked),
                            PreviewImagesSelect::make('Превью изображения', 'preview_images')->canSee(fn() => $isEditPage)->readonly($isAnalogBlocked),
                        )),
                    )),

                    Tab::make('Видео', [
                        Collapse::make('Видео', [
                            \App\MoonShine\CustomFields\ProductVideoCustom::make('Видео', 'videos')
                                ->multiple()
                                ->allowedExtensions(['mp4', 'webm', 'mov'])
                                ->removable()
                                ->reorderable(fn($ctx) => '/file/sort/reorder-videos/' . base64_encode(Product::class) . '/' . $ctx->getData()->getKey())
                                ->readonly($isAnalogBlocked)
                                ->changeFill(fn(Model $data) => $data->videos->pluck('path')->toArray())
                                ->onApply(fn() => null)
                                ->onAfterApply(function (Model $item, $values, $field) {
                                    // Удаление
                                    $deletedPaths = collect($field->toValue())->diff($field->getRemainingValues());
                                    $item->videos()->whereIn('path', $deletedPaths)->delete();

                                    // Добавление
                                    if ($values) {
                                        foreach ($values as $file) {
                                            if (!$file instanceof \Illuminate\Http\UploadedFile) continue;

                                            // Формируем путь: Product/{id}/video
                                            $dir = "Product/{$item->id}/video";
                                            $path = $file->store($dir, 'public');

                                            $item->videos()->create([
                                                'fileable_type' => Product::class,
                                                'fileable_id'   => $item->id,
                                                'type_relation' => 'videos',
                                                'file_name'     => $file->getClientOriginalName(),
                                                'path'          => $path,
                                                'extension'     => $file->getClientOriginalExtension(),
                                                'size'          => $file->getSize(),
                                                'disk'          => 'public',
                                            ]);
                                        }
                                    }

                                    return $item;
                                }),
                        ]),
                    ]),

                    Tab::make('Описание', [
                        TinyMce::make('Описание','description')->required()->readonly($isAnalogBlocked),
                        // Text::make('Короткое описание','short_description')->nullable(),
                    ]),
                    Tab::make('Акции', [
                        BelongsToMany::make('Промоакции','promotion','name', resource: PromotionResource::class)
                            ->selectMode()
                            ->customAttributes([
                                'data-max-item-count' => 1
                            ])
                            ->readonly(condition: $isAnalogBlocked),
                        Flex::make([
                            Preview::make('Цена со скидкой', 'sale_price_preview', fn() =>
                                '<input type="text" readonly class="form-input" value="' . ($this->getItem()->sale_price ?? null) . ' ₽">'
                            )->canSee(fn() => $isEditPage)
                            ->hint($this->getHintForSalePrice()),
                            Preview::make('Процент скидки', 'discount_percent', fn() =>
                                '<input type="text" readonly class="form-input" value="' . $this->getItem()->getSalePercent() . '%">'
                            )->canSee(fn() => $isEditPage),
                        ]),
                    ]),

                    Tab::make('Категории', [
                        Preview::make('Категории', 'categories', fn () => view('moonshine.components.categories-selected' ,
                            [
//                              'categoriesIdCheckedArray' => $this->getItem() ? $this->getItem()->product_categories()->pluck('category_id')->toArray() : [],
                                'categoriesIdCheckedArray' => $this->getItem() ? $this->getItem()->product_categories->pluck('category_id')->toArray() : [],
                                'defaultChecked' => $this->getItem() ? false : true,
                                'item' => $this->getItem()
                            ]))
                    ]),

                    Tab::make('Характеристики товара', [
                        Enum::make('Степень охлаждения','degree_type')
                            ->attach(DegreeTypeEnum::class)
                            ->nullable()
                            ->default(null)
                            ->readonly($isAnalogBlocked),
                        ...$this->getAttributesFields()
                    ]),

                    Tab::make('Разделка товара', [
                        HasOne::make('Разделка товара','cutting','id',CuttingProductResource::class)->disableOutside()->readonly($isAnalogBlocked),
                    ]),
                    Tab::make('Цена по городам', [
                        RelationRepeater::make(
                            'Цена по городам',
                            'cityPrices',
                            resource: CityPriceResource::class
                        )->removable()->creatable()->vertical()->readonly($isAnalogBlocked)->fields([
                            ID::make(),
                            BelongsTo::make('Город','city','name',CityResource::class),
                            \MoonShine\UI\Fields\Number::make('Цена','price'),
                        ]),
                    ]),
                    Tab::make('Количество по городам', [
                        RelationRepeater::make(
                            'Количество по городам',
                            'cityCounts',
                            resource: CityCountResource::class
                        )->removable()->creatable()->vertical()->readonly($isAnalogBlocked)->fields([
                            ID::make(),
                            BelongsTo::make('Город','city','name',CityResource::class),
                            \MoonShine\UI\Fields\Number::make('Количество','quantity'),
                        ]),
                    ]),


                    Tab::make('Привязки', [
                        Collapse::make('Бренд',[
                            BelongsToMany::make('Бренд','brands','name',resource: ProductBrandResource::class)
                                ->selectMode()
                                ->readonly(condition: $readonlyCondition),
                            ]),


                        Collapse::make('Теги',[
                            BelongsToMany::make('Теги','tags','name',resource: ProductTagResource::class)
                                ->selectMode()
                                ->creatable()
                                ->readonly(condition: $isAnalogBlocked),
                        ]),
//                        Collapse::make('С этим товаром покупают',[
//                            BelongsToMany::make('Товары','relatedProducts','name',resource: RelatedProductResource::class)
//                                ->selectMode()
//                        ]),

                        Collapse::make('С этим товаром покупают', [
                            BelongsToMany::make('Товары', 'relatedProducts', 'name', ProductResource::class) // ⚠️ Проверь ресурс!
                            ->selectMode()
                                ->placeholder('Начните вводить...')
                                ->readonly(condition: $isAnalogBlocked)

                                ->valuesQuery(function ($query, $field) {
                                    $currentProduct = $this->getItem();

                                    if ($currentProduct && $currentProduct->id) {
                                        $query->where('id', '!=', $currentProduct->id);
                                    }

                                    // 🧩 отладка — покажем, что вообще возвращается
                                    logger('valuesQuery executed', [
                                        'current_id' => $currentProduct->id ?? null,
                                    ]);

                                    return $query->select('id', 'name')->orderBy('id')->limit(20);
                                })

                                ->asyncSearch(
                                    'name',
                                    searchQuery: function ($query, $request, string $term, $field) {
                                        $currentProduct = $this->getItem();

                                        logger('asyncSearch term', ['term' => $term]);

                                        if ($currentProduct && $currentProduct->id) {
                                            $query->where('id', '!=', $currentProduct->id);
                                        }

                                        if ($term !== '') {
                                            $query->where(function ($q) use ($term) {
                                                $q->where('name', 'like', "%{$term}%");
                                                if (is_numeric($term)) {
                                                    $q->orWhere('id', (int) $term);
                                                }
                                            });
                                        }


                                        return $query->select('id', 'name')->orderBy('id')->limit(20);
                                    },
                                    limit: 20
                                ),
                        ]),

                        Collapse::make('Подарки при покупке', [
                            BelongsToMany::make('Подарочный товар', 'giftProducts', 'name', ProductResource::class)
                                ->selectMode()
                                ->customAttributes([
                                    'data-max-item-count' => 1
                                ])
                                ->placeholder('Начните вводить...')
                                ->hint('Подарочный товары автоматически добавляется в корзину при покупке этого товара')
                                ->readonly(condition: $isAnalogBlocked)
                                ->valuesQuery(function ($query, $field) {
                                    $currentProduct = $this->getItem();

                                    if ($currentProduct && $currentProduct->id) {
                                        $query->where('id', '!=', $currentProduct->id);
                                    }

                                    return $query->select('id', 'name')->orderBy('id')->limit(20);
                                })
                                ->asyncSearch(
                                    'name',
                                    searchQuery: function ($query, $request, string $term, $field) {
                                        $currentProduct = $this->getItem();

                                        if ($currentProduct && $currentProduct->id) {
                                            $query->where('id', '!=', $currentProduct->id);
                                        }

                                        if ($term !== '') {
                                            $query->where(function ($q) use ($term) {
                                                $q->where('name', 'like', "%{$term}%");
                                                if (is_numeric($term)) {
                                                    $q->orWhere('id', (int) $term);
                                                }
                                            });
                                        }

                                        return $query->select('id', 'name')->orderBy('id')->limit(20);
                                    },
                                    limit: 20
                                ),
                        ]),
                    ]),
                    Tab::make('1С', [
                        Flex::make([
                            Text::make('Название_1c','name_1c')->nullable()->readonly($readonlyCondition),
                            Text::make('uuid_1c','uuid_1c')->nullable()->readonly($readonlyCondition),
                            Text::make('uuid_bitrix24','uuid_bitrix24')->nullable()->readonly($readonlyCondition),
                        ]),
                        Switcher::make('Актив 1C', 'is_active')->readonly($readonlyCondition),
                        Switcher::make('Аналог', 'is_analog')->disabled(),
                        Textarea::make('Описание_1c','description_1с')->nullable()->readonly($readonlyCondition),
                    ]),
                    Tab::make('Seo', [
                        Text::make('Title','seo_title')->nullable()->readonly($isAnalogBlocked),
                        Text::make('Description','seo_description')->nullable()->readonly($isAnalogBlocked),
                        Slug::make('Slug','slug')->from('name')->unique()->readonly($isAnalogBlocked),
                    ]),
                    Tab::make('Переводы', [
                        Preview::make('Переводы', 'preview', static fn() => view('moonshine.components.translate_component', [
                            'langs' => Lang::all(),
                            'translatedFields' => Product::getTransaledField(),
                            'translations' => $localizations,
                        ])),
                    ])->canSee(fn() => $isEditPage),

                ])->customAttributes([
                    'x-init' => "try{const p=(new URL(window.location.href, window.location.origin)).searchParams.get('ms_tab');if(p){setTimeout(()=>{if(typeof setActiveTab==='function'){setActiveTab(p)}},0)}}catch(e){}",
                ]),

            ])
        ];
    }

    protected function handleVideoUploads(Product $product): void
    {
        $newVideos = request()->file('new_videos', []);
        $newPreviews = request()->file('new_video_previews', []);

        // Убедимся, что массивы — это массивы
        if (!is_array($newVideos)) $newVideos = [];
        if (!is_array($newPreviews)) $newPreviews = [];

        $countVideos = count($newVideos);
        $countPreviews = count($newPreviews);

        // Определяем, сколько пар можно сохранить
        $pairsCount = min($countVideos, $countPreviews);

        if ($pairsCount === 0 && $countVideos === 0) {
            return; // Ничего не загружено
        }

        // Если видео есть, а превью нет — можно сохранить без превью
        if ($countVideos > 0) {
            foreach ($newVideos as $index => $videoFile) {
                if (!$videoFile instanceof \Illuminate\Http\UploadedFile) continue;

                $path = $videoFile->store('videos', 'public');

                $maxPosition = \File\Models\Files\File::where('fileable_type', Product::class)
                    ->where('fileable_id', $product->id)
                    ->max('position') ?? 0;

                $videoModel = \File\Models\Files\File::create([
                    'fileable_type' => Product::class,
                    'fileable_id'   => $product->id,
                    'type_relation' => 'videos',
                    'file_name'     => $videoFile->getClientOriginalName(),
                    'path'          => $path,
                    'extension'     => $videoFile->getClientOriginalExtension(),
                    'size'          => $videoFile->getSize(),
                    'disk'          => 'public',
                    'position' => \File\Models\Files\File::where('fileable_type', Product::class)
                            ->where('fileable_id', $product->id)
                            ->where('type_relation', 'videos') // если нужно, фильтруем по типу
                            ->max('position') + 1,
                ]);

                // Привязываем превью, если оно есть
                if (isset($newPreviews[$index]) && $newPreviews[$index] instanceof \Illuminate\Http\UploadedFile) {
                    $previewFile = $newPreviews[$index];
                    $previewPath = $previewFile->store('video_previews', 'public');

                    $previewModel = \File\Models\Files\File::create([
                        'fileable_type' => Product::class,
                        'fileable_id'   => $product->id,
                        'type_relation' => 'video_previews',
                        'file_name'     => $previewFile->getClientOriginalName(),
                        'path'          => $previewPath,
                        'extension'     => $previewFile->getClientOriginalExtension(),
                        'size'          => $previewFile->getSize(),
                        'disk'          => 'public',
                    ]);

                    \File\Models\VideoPreview::create([
                        'video_id'    => $videoModel->id,
                        'preview_id'  => $previewModel->id,
                    ]);
                }
            }
        }
    }

    public function getAttributesFields(): array
    {
        $attributesFieldsArray = [];
        $isAnalogBlocked = $this->getItem()?->is_analog === true;

        // Загружаем все активные атрибуты
        $attributes = AttributeProduct::where('is_active', true)->get();

        // Если на странице редактирования — подгружаем значения pivot заранее
        $pivotValues = collect();
        if ($this->getItem()) {
            $this->getItem()->loadMissing('attributes');
            $pivotValues = $this->getItem()
                ->attributes
                ->mapWithKeys(fn ($attr) => [$attr->id => $attr->pivot?->value]);
        }

        // Разбиваем атрибуты на группы по 2 в строке
        foreach ($attributes->chunk(2) as $chunk) {
            $fieldsInRow = [];

            foreach ($chunk as $attribute) {
                $fieldName = "attributes[$attribute->id]";
                $field = null;

                // Выбираем тип поля
                switch ($attribute->input_type) {
                    case InputTypeEnum::text:
                        $field = Text::make($attribute->name, $fieldName);
                        break;

                    case InputTypeEnum::number:
                        $field = Number::make($attribute->name, $fieldName)->step(0.1);
                        break;

                    case InputTypeEnum::checkbox:
                        $field = Switcher::make($attribute->name, $fieldName);
                        break;

                    case InputTypeEnum::select:
                        $options = array_combine($attribute->options, $attribute->options);
                        $field = Select::make($attribute->name, $fieldName)->options($options);

                        // множественный выбор
                        if ($attribute->is_many_checked_options) {
                            $field->multiple(true);
                        }

                        // кастомное добавление опций
                        $customChoice = [];
                        if ($attribute->is_select_writable) {
                            $customChoice['data-add-items'] = true;
                            $customChoice['data-add-choices'] = true;
                        }

                        // если много опций — searchable
                        if (count($attribute->options) > 10) {
                            $field->searchable();
                        }

                        $customChoice['data-max-item-count'] = 10;
                        $field->customAttributes($customChoice);
                        break;

                    default:
                        continue 2; // пропускаем неизвестные типы
                }

                // Применяем дефолтное значение из pivot, если есть
                if ($pivotValues->has($attribute->id)) {
                    $pivotValue = $pivotValues[$attribute->id];
                    if (is_string($pivotValue)) {
                        $pivotValue = trim($pivotValue, '"');
                    }
                    $field->default($pivotValue);
                }

                // обязательность
                if ($attribute->is_required) {
                    $field->required();
                } else {
                    $field->nullable();
                }

                // блокируем редактирование, если товар-аналог
                if ($isAnalogBlocked) {
                    $field->readonly(true);
                }

                // отключаем авто-применение
                $fieldsInRow[] = $field->canApply(fn() => false);
            }

            // Добавляем в массив: одиночное поле или строка из 2-х
            $attributesFieldsArray[] = count($fieldsInRow) === 1
                ? $fieldsInRow[0]
                : Flex::make($fieldsInRow);
        }

        return $attributesFieldsArray;
    }


//    public function getAttributesFields () {
//        $attributesFieldsArray = [];
//        $attributes = AttributeProduct::where('is_active', true)->get();
//
//        // Разбиваем атрибуты на группы по 2 (или сколько нужно в одной строке)
//        $chunks = array_chunk($attributes->toArray(), 2);
//
//        foreach ($chunks as $chunk) {
//            $fieldsInRow = [];
//            foreach ($chunk as $attributeData) {
//                $attribute = new AttributeProduct();
//                $attribute->forceFill($attributeData);
//
//                if($attribute->input_type == InputTypeEnum::text) {
//                    $field = Text::make($attribute->name, "attributes[$attribute->id]");
//                } elseif($attribute->input_type == InputTypeEnum::number) {
//                    $field = Number::make($attribute->name, "attributes[$attribute->id]")->step(0.1);
//                } elseif($attribute->input_type == InputTypeEnum::checkbox) {
//                    $field = Switcher::make($attribute->name, "attributes[$attribute->id]");
//                } elseif($attribute->input_type == InputTypeEnum::select) {
//                    $customChoice = [];
//                    $options = array_combine($attribute->options, $attribute->options);
//                    $field = Select::make($attribute->name, "attributes[$attribute->id]")->options($options);
//                    if($attribute->is_many_checked_options) {
//                        $field->multiple(true);
//                    }
//                    if($attribute->is_select_writable) {
//                        $customChoice['data-add-items'] = true;
//                        $customChoice['data-add-choices'] = true;
//                    }
//                    if(count($attribute->options) > 10) {
//                        $field->searchable();
//                    }
//                    $customChoice['data-max-item-count'] = 10;
//                    $field->customAttributes([...$customChoice]);
//                } else {
//                    continue;
//                }
//
//                if ($this->getItem()) {
//                    $pivotValue = $this->getItem()
//                        ->attributes
//                        ->firstWhere('id', $attribute->id)
//                        ?->pivot
//                        ?->value;
//                    if ($pivotValue !== null && is_string($pivotValue)) {
//                        if (str_starts_with($pivotValue, '"') && str_ends_with($pivotValue, '"')) {
//                            $pivotValue = trim($pivotValue, '"');
//                        }
//                    }
//                    $field->default($pivotValue);
//                }
//
//                if($attribute->is_required) {
//                    $field->required();
//                } else {
//                    $field->nullable();
//                }
//
//                $fieldsInRow[] = $field->canApply(fn () => false);
//            }
//
//
//            if (count($fieldsInRow) === 1) {
//                $attributesFieldsArray[] = $fieldsInRow[0];
//            } else {
//                // Иначе оборачиваем в Flex
//                $attributesFieldsArray[] = Flex::make($fieldsInRow);
//            }
//        }
//
//        return $attributesFieldsArray;
//    }

    protected function detailFields(): iterable
    {
        return [
            ID::make(),
            Text::make('uuid_1c','uuid_1c'),
            Text::make('Артикул','article_number'),
            Enum::make('Тип веса','weight_type')->attach(WeightTypeEnum::class)->required(),
            Number::make('Вес','weight'),
            Text::make('Название','name')->unescape(),
            Enum::make('Тип цены','price_type')->attach(PriceTypeEnum::class)->required(),
            Number::make('Цена','price'),
            TinyMce::make('Описание','description'),
            Text::make('Короткое описание','short_description'),
//            Number::make('Скидочная цена','  ')->step(0.1),
            Text::make('seo_title'),
            Text::make('seo_description'),
            Date::make('Дата создания','created_at'),
            Date::make('Дата обновления','updated_at'),
            BelongsToMany::make('Бренд','brands','name',resource: ProductBrandResource::class),
            BelongsToMany::make('Атрибуты','attributes','name',resource: ProductAttributeResource::class),
            BelongsToMany::make('Категории','categories','name',resource: ProductCategoryResource::class),
            BelongsToMany::make('Теги','tags','name',resource: ProductTagResource::class),
            BelongsToMany::make('С этим т-ом покупают','relatedProducts','name',resource: RelatedProductResource::class),
            BelongsToMany::make('Акция товара','promotion','name',resource: PromotionResource::class),
            BelongsToMany::make('Подарочный товар', 'giftProducts', 'name', ProductResource::class),
             RelationRepeater::make(
                 'Количество по городам',
                 'cityCounts',
                 resource: CityCountResource::class
             )->removable()->creatable()->vertical()->fields([
                 ID::make(),
                 BelongsTo::make('Город','city','name',CityResource::class),
                 \MoonShine\UI\Fields\Number::make('Количество','quantity'),
             ]),
        ];
    }
    protected function rules(mixed $item): array
    {
        return [];
    }
    protected function filters(): iterable
    {
        return  [
//            Switcher::make('Из 1С','from_1c')
//                ->nullable()
//                ->default(null)
//                ->onApply(function($query, $value, $field) {
//                    if ($value === true) {
//                        $query->whereNotNull('uuid_1c'); // только товары из 1С
//                    }
//
//                    return $query;
//                }),

            Text::make('Название', 'name')->nullable()->default(null),
            Text::make('uuid_1c', 'uuid_1c')
                ->onApply(function($query, $value, $field) {
                    if (!is_null($value) && $value !== '') {
                        $query->where('uuid_1c', 'like', "%{$value}%");
                    }

                    return $query;
                }),

            Text::make('Описание', 'description')->nullable()->default(null),
            RangeSlider::make('Цена', 'price')
                ->nullable()
                ->default(null)
                ->min(0)
                ->max(100000)
                ->step(500)
                ->onApply(function (\Illuminate\Contracts\Database\Eloquent\Builder $query, $value, Field $field) {
                    if (isset($query) && $value['to'] != 10000 && $value['from'] != 0){
                        $query->where('price', '>=', $value['from'])
                            ->where('price', '<=', $value['to']);
                    }
                }),
            RangeSlider::make('Вес', 'weight')
                ->nullable()
                ->min(0)
                ->max(50)
                ->step(1)
                ->default(null)
                ->onApply(function (\Illuminate\Contracts\Database\Eloquent\Builder $query, $value, Field $field) {
                    if (isset($query) && $value['to'] != 50 && $value['from'] != 0){
                        $query->where('weight', '>=', $value['from'])
                            ->where('weight', '<=', $value['to']);
                    }
                }),

            // Дубликаты быстрых фильтров (query tags) для сохранения поиска
            Switcher::make('Без цены', 'filter_no_price')
                ->nullable()
                ->default(null)
                ->onApply(function($query, $value, $field) {
                    if ($value === true) {
                        $query->whereNull('price');
                    }
                    return $query;
                }),

            Switcher::make('Без категории', 'filter_no_category')
                ->nullable()
                ->default(null)
                ->onApply(function($query, $value, $field) {
                    if ($value === true) {
                        $query->doesntHave('categories');
                    }
                    return $query;
                }),

            Switcher::make('Нет в 1С', 'filter_no_1c')
                ->nullable()
                ->default(null)
                ->onApply(function($query, $value, $field) {
                    if ($value === true) {
                        $query->whereNull('uuid_1c');
                    }
                    return $query;
                }),

            Switcher::make('Активен в 1С', 'filter_active_1c')
                ->nullable()
                ->default(null)
                ->onApply(function($query, $value, $field) {
                    if ($value === true) {
                        $query->where('is_active', true);
                    }
                    return $query;
                }),

            Switcher::make('Подарок за первый заказ', 'filter_first_order_gift')
                ->nullable()
                ->default(null)
                ->onApply(function($query, $value, $field) {
                    if ($value === true) {
                        $query->where('is_first_order_gift', true);
                    }
                    return $query;
                }),

            Switcher::make('Новинки', 'filter_is_new')
                ->nullable()
                ->default(null)
                ->onApply(function($query, $value, $field) {
                    if ($value === true) {
                        $query->where('is_new', true);
                    }
                    return $query;
                }),

            Select::make('Теги номенклатуры', 'filter_admin_tags')
                ->nullable()
                ->default(null)
                ->options(function() {
                    return AdminTag::all()->pluck('title', 'id')->toArray();
                })
                ->multiple()
                ->searchable()
                ->onApply(function($query, $value, $field) {
                    if (!empty($value) && is_array($value)) {
                        $query->whereHas('adminTags', function ($q) use ($value) {
                            $q->whereIn('admin_tags.id', $value);
                        });
                    }
                    return $query;
                }),
        ];
    }


    protected function beforeCreating(mixed $item): mixed
    {
        // Проверка на уникальность подарка за первый заказ
        if ($item->is_first_order_gift) {
            $existingGift = Product::where('is_first_order_gift', true)
                ->where('is_active', true)
                ->first();

            if ($existingGift) {
                throw ValidationException::withMessages([
                    'is_first_order_gift' => ['Подарочный товар может быть только один. Сначала снимите флаг с товара: ' . $existingGift->name . ' (ID: ' . $existingGift->id . ')'],
                ]);
            }
        }

        return $item;
    }

    protected function afterCreated(mixed $item): mixed
    {
        if ($item->is_new == true || $item->is_new == 1){
            $this->createNotificationsForProduct($item);
        }
        $this->setProductAttributeValues($item);
        $this->setCategories($item);

        $this->handleVideoUploads($item);


        return $item;
    }
    protected function beforeUpdating(mixed $item): mixed
    {
        // Блокируем редактирование товаров-аналогов
        if ($item->is_analog === true) {
            throw ValidationException::withMessages([
                'is_analog' => ['Товар-аналог нельзя редактировать.'],
            ]);
        }

        $translations = request('translations', []);
        $modelClass = $item::class;
        $modelId = $item->id;

        foreach ($translations as $langId => $fields) {
            foreach ($fields as $field => $translate) {
                Localization::updateOrCreate(
                    [
                        'localizationable_type' => $modelClass,
                        'localizationable_id' => $modelId,
                        'lang_id' => $langId,
                        'field' => $field,
                    ],
                    [
                        'translate' => $translate ?? '',
                    ]
                );
            }
        }

        return $item;
    }


    protected function afterUpdated(mixed $item): mixed
    {
        // Проверка на уникальность подарка за первый заказ
        if ($item->is_first_order_gift) {
            $existingGift = Product::where('is_first_order_gift', true)
                ->where('id', '!=', $item->id)
                ->first();

            if ($existingGift) {
                $item->update([
                    'is_first_order_gift' => false
                ]);
                throw ValidationException::withMessages([
                    'is_first_order_gift' => ['Подарочный товар может быть только один. Сначала снимите флаг с товара: ' . $existingGift->name . ' (ID: ' . $existingGift->id . ')'],
                ]);
            }
        }
        if ($item->is_new == true || $item->is_new == 1){
            $this->createNotificationsForProduct($item);
        }

        $this->setProductAttributeValues($item);
        $this->setCategories($item);

        $this->attachVideoPreviews($item); // ← только это

        $this->handleVideoUploads($item);

        return $item;
    }

    protected function attachVideoPreviews(Product $product): void
    {
        if (!request()->hasFile('video_previews_temp')) {
            return;
        }

        $previews = request()->file('video_previews_temp');
        // Берём видео в порядке сортировки (position или id)
        $videos = $product->videos()->orderBy('position')->get();

        if ($videos->isEmpty()) return;

        foreach ($videos as $index => $video) {
            // Удаляем старое превью
            if ($video->preview) {
                $oldPreview = $video->preview->preview;
                $video->preview->delete();
                $oldPreview?->delete();
            }

            // Привязываем новое
            if (isset($previews[$index]) && $previews[$index] instanceof \Illuminate\Http\UploadedFile) {
                $file = $previews[$index];
                $path = $file->store('video_previews', 'public');

                $previewFile = \File\Models\Files\File::create([
                    'fileable_type' => Product::class,
                    'fileable_id'   => $product->id,
                    'type_relation' => 'video_previews',
                    'file_name'     => $file->getClientOriginalName(),
                    'path'          => $path,
                    'extension'     => $file->getClientOriginalExtension(),
                    'size'          => $file->getSize(),
                    'disk'          => 'public',
                ]);

                \File\Models\VideoPreview::create([
                    'video_id' => $video->id,
                    'preview_id' => $previewFile->id,
                ]);
            }
        }
    }
    protected function setCategories(Product $item): void
    {
        $categories = request()->input('categories');
        ProductCategory::where('product_id', $item->id)->delete();

        if (!$categories || !is_array($categories)) {
            return;
        }

        foreach ($categories as $categoryId => $checkboxSelectedOn) {
            ProductCategory::create([
                'product_id' => $item->id,
                'category_id' => $categoryId,
            ]);
        }
    }

    protected function setProductAttributeValues(Product $item): void
    {
        $attributes = request()->input('attributes', []);
        foreach ($attributes as $attributeId => $value) {
            $attribute = AttributeProduct::find($attributeId);

            if($value != null) {
                if ($attribute->input_type == InputTypeEnum::checkbox) {
                    $value = ($value === "1" || $value === 1 || $value === true) ? 1 : 0;
                } else {
                    if (!is_numeric($value) && !is_array($value)) {
                        if (is_string($value) && str_starts_with($value, '"') && str_ends_with($value, '"')) {
                            $value = trim($value, '"');
                        }
                        if ($value != null){
                            $value = html_entity_decode($value);
                        }
                    }
                }
            }

            ProductAttribute::updateOrCreate(
                ['product_id' => $item->id, 'attribute_id' => $attributeId],
                ['value' => $value]
            );
        }
    }

    private function createNotificationsForProduct($product): void
    {
        $productCategories = $product->categories()->pluck('categories.id')->toArray();

        if (empty($productCategories)) {
            return;
        }

        $users = User::where('is_self_deleted', false)
            ->where('is_blocked', false)
            ->whereHas('setting', function ($q) {
                $q->where('favorite_categories', true);
            })
            ->with(['setting.favoriteCategories'])
            ->get(['id', 'admin_verify']);

        $activityLogService = app(\App\Services\ActivityLogService::class);

        foreach ($users as $user) {
            $favoriteCategories = $user->setting->favoriteCategories->pluck('id')->toArray();

            $intersect = array_intersect($productCategories, $favoriteCategories);

            if (!empty($intersect)) {
                $exists = PromoNotification::where('user_id', $user->id)
                    ->where('product_id', $product->id)
                    ->exists();

                if (!$exists) {
                    // Для верифицированных: active_date = now()
                    // Для неверифицированных: active_date = now() + 12 hours
                    $activeDate = $user->admin_verify
                        ? now()
                        : now()->addHours(12);

                    $notification = PromoNotification::create([
                        'user_id'    => $user->id,
                        'product_id' => $product->id,
                        'type'       => NotificationTypeEnum::Novelty,
                        'is_read'    => false,
                        'user_deleted' => false,
                        'active_date' => $activeDate,
                    ]);

                    // Логирование отправки уведомления о новом поступлении
                    $activityLogService->logNotificationSent(
                        $user,
                        \App\Models\UserActivityLog::NOTIFICATION_NOVELTY,
                        \App\Models\UserActivityLog::DELIVERY_STATUS_SENT,
                        $product->id,
                        ['notification_id' => $notification->id]
                    );
                }
            }
        }
    }


}
