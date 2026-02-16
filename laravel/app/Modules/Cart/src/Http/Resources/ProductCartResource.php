<?php

namespace App\Modules\Cart\src\Http\Resources;

use App\Modules\Product\Attribute\src\Http\Resources\ProductAttributeResource;
use Brand\Http\Resources\BrandResource;
use File\Http\Resources\FileResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Product\Models\Product;

class ProductCartResource extends JsonResource
{
    /**
     * Преобразовать ресурс в массив.
     *
     * @return array<string, mixed>
     */


    public static $model = Product::class;
    public function toArray(Request $request): array
    {

        return [
            'id' => $this->id,
            'name' => $this->translate('name'),
            'article_number' => $this->article_number,
            'weight' => round($this->weight, 2),
            'weight_type' => $this->weight_type?->toString(),
            'price' => round($this->total_price, 2),
            'price_type' => $this->price_type?->toString(),
            'sale_price' => $this->sale_price,
            'cashback_percent' => $this->getCashbackPercent(),
            'images' => FileResource::collection($this->images),
            'attributes' => ProductAttributeResource::collection($this->attributes_values),
            'brands' => BrandResource::collection($this->brands),
            'slug' => $this->slug,

        ];
    }


}
