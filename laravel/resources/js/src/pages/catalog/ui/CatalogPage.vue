<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { shallowRef, useTemplateRef } from 'vue';
import { useI18n } from 'vue-i18n';

import { CatalogLayout } from '@/app/layouts';
import { useFiltersStore } from '@/app/layouts/catalog-layout';
import { IProduct, ProductCard } from '@/entities/products';
import { AddToFavorite } from '@/features/Product/add-to-favorite';
import { AddToCart } from '@/features/Product/manage-cart';
import { ICatalogPageProps } from '@/pages/catalog';
import { VPagination } from '@/shared/ui/pagination';
import { VPicture } from '@/shared/ui/picture';

defineProps<ICatalogPageProps>();

defineOptions({
  layout: CatalogLayout,
});

const pageContent = useTemplateRef('catalog-page');
const filtersStore = useFiltersStore();

const currentPage = shallowRef<number>(route().queryParams?.page ? Number(route().queryParams.page) : 1);
const onPageUpdate = async (): Promise<void> => {
  await filtersStore.applyFilters();
  // pageContent.value?.scrollIntoView({
  //   behavior: 'smooth',
  // });
};

const getMeta = (arr: any[]) => arr.find((i) => i.__meta__);

const { t } = useI18n();
</script>

<template>
  <Head v-if="seoData">
    <title>{{ seoData.seo_title }}</title>
    <meta v-if="seoData.seo_description" name="description" :content="seoData.seo_description" />
    <meta v-if="seoData.seo_keywords" name="keywords" :content="seoData.seo_keywords" />
  </Head>
  <div v-if="products.total > 0" ref="catalog-page" class="grid gap-8">
    <template v-if="is_products_group">
      <section v-for="(value, key) in products.data as Record<string, IProduct[]>" :key>
        <header class="mb-4 flex items-center max-md:justify-between lg:gap-6">
          <h2 class="md:text-heavy-bold text-default-bold">{{ key }}</h2>
          <span v-if="getMeta(value)?.second_item_discount_percent" class="text-subsidiary-medium bg-ready-green rounded-full px-2 py-1 text-white">
            -{{ getMeta(value).second_item_discount_percent }}% на второй товар
          </span>
        </header>
        <div class="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 2xl:grid-cols-5">
          <template v-for="product in value">
            <ProductCard
              v-if="product.id"
              :id="product.id"
              :key="product.id"
              :has-gift="product.is_have_gift"
              :slug="product.slug"
              :title="product.name"
              :images="product.images.map((i) => i.path)"
              :weight="product.weight"
              :description="product.short_description"
              :is-favorite="product.is_wishlist"
              :degree-type="product.degree_type"
              :categories="product.tags.map((b) => b.name) ?? []"
              :unit="product.weight_type"
              :price="Number(product.sale_price) ?? 0"
              :price-unit="product.price_type"
              :sale-percent="product.sale_percent"
              :is-new="product.is_new"
              :old-price="Number(product.price) ?? 0"
              :cashback-percent="product.cashback_percent"
              :category-id="category_target?.id"
            >
              <template #favoriteButton>
                <AddToFavorite :id="product.id" :initial-value="product.is_wishlist" />
              </template>
              <template #footer>
                <AddToCart :id="product.id" :count-in-cart="product.count_in_cart" :quantity="product.quantity" />
              </template>
            </ProductCard>
          </template>
        </div>
      </section>
    </template>
    <template v-else>
      <h3 v-if="filtersStore.filters.search" class="text-heavy-bold mt-4">
        {{ t('catalog.found') }} <span class="text-subsidiary text-heavy">{{ t('catalog.products', products.total) }}</span>
      </h3>
      <div class="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 2xl:grid-cols-5">
        <ProductCard
          v-for="product in products.data as IProduct[]"
          :id="product.id"
          :key="product.id"
          :has-gift="product.is_have_gift"
          :slug="product.slug"
          :title="product.name"
          :images="product.images.map((i) => i.path)"
          :weight="product.weight"
          :description="product.short_description"
          :is-favorite="product.is_wishlist"
          :degree-type="product.degree_type"
          :categories="product.tags.map((b) => b.name) ?? []"
          :unit="product.weight_type"
          :price="Number(product.sale_price) ?? 0"
          :price-unit="product.price_type"
          :sale-percent="product.sale_percent"
          :is-new="product.is_new"
          :old-price="Number(product.price) ?? 0"
          :cashback_percent="product.cashback_percent"
          :category-id="category_target?.id"
        >
          <template #favoriteButton>
            <AddToFavorite :id="product.id" :initial-value="product.is_wishlist" />
          </template>
          <template #footer>
            <AddToCart :id="product.id" :count-in-cart="product.count_in_cart" :quantity="product.quantity" />
          </template>
        </ProductCard>
      </div>
    </template>
    <VPagination
      v-model="filtersStore.filters.page"
      :per-page="products.per_page"
      :total-count="products.total"
      class="mx-auto"
      @update:model-value="onPageUpdate"
    />
  </div>
  <div v-else class="bg-light-gray mt-16 rounded-[40px] md:mt-30">
    <div class="flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48">
      <VPicture src="/images/test-images/image_exclamation.webp" alt="восклицание" class="-mt-20 max-w-[120px] lg:max-w-[200px]" />
      <p class="text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]">
        К сожалению, по заданным параметрам ничего не найдено
      </p>
    </div>
  </div>
</template>

<style scoped></style>
