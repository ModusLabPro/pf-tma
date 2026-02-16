<?php

namespace App\Observers;

use App\Services\SitemapService;
use Product\Models\Product;

class ProductObserver
{
    public function __construct(
        protected SitemapService $sitemapService
    ) {}

    /**
     * Handle the Product "saved" event.
     */
    public function saved(Product $product): void
    {
        $shouldInclude = $this->sitemapService->shouldIncludeModel('product', $product);
        $this->sitemapService->updateItem('product', $product, $shouldInclude);
    }

    /**
     * Handle the Product "deleted" event.
     */
    public function deleted(Product $product): void
    {
        $this->sitemapService->updateItem('product', $product, false);
    }
}

