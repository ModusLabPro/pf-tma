@livewireScripts
@livewireStyles

@if($item?->uuid_1c)
Категория 1C: {{$item->category_1c}} <br>
Подкатегория 1C: {{$item->subcategory_1c}} <br> <br>
@endif

@livewire(App\Livewire\Moonshine\Components\CategoriesSelected::class, ['categoriesIdCheckedArray' => $categoriesIdCheckedArray, 'defaultChecked' => $defaultChecked])
