<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import { ICombinationDetail } from '@/entities/combination';
import { ProductCard } from '@/entities/products';
import { AddToFavorite } from '@/features/Product/add-to-favorite';
import { AddToCart } from '@/features/Product/manage-cart';
import CombinationBlock from '@/pages/combination-detail/ui/CombinationBlock.vue';
import { useScreenSize } from '@/shared/media-queries';
import { VBreadcrumb } from '@/shared/ui/breadcrumb';
import { VContainer } from '@/shared/ui/container';
import { VPicture } from '@/shared/ui/picture';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';

const { combination } = defineProps<{
  combination: ICombinationDetail;
}>();

const combinationBaseBreadcrumbs = [
  { label: 'Главная', route: route('main-page') },
  { label: 'Рекомендации по сочетанию продуктов', route: route('combination.index') },
  { label: combination.name },
];

const { isDesktop } = useScreenSize();
</script>

<template>
  <VContainer>
    <section class="px-6 sm:px-8">
      <Breadcrumb v-if="!isDesktop" :model="combinationBaseBreadcrumbs" class="mb-4 bg-white px-0!">
        <template #item="{ item }">
          <Link
            class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200"
            :href="item.route"
            :only="['products', 'category_target', 'is_products_group', 'fast_filter_tags']"
          >
            {{ item.label }}
          </Link>
        </template>
      </Breadcrumb>
      <header
        class="rounded-20 combination-banner mb-8 bg-gray-100 mask-[url(../../images/masks/for-newsletter-mobile.svg)] mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 py-4 min-[425px]:mask-[url(../../images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-auto lg:min-h-65 lg:px-8 lg:py-8"
      >
        <div class="flex min-h-42 flex-col justify-end gap-4 pb-8 lg:justify-between">
          <VBreadcrumb v-if="isDesktop" :model="combinationBaseBreadcrumbs" class="shrink-0" />
          <h1 class="font-vast text-vast-mob-title-bold lg:text-vast-title-bold text-white lg:max-w-1/2">
            {{ combination.name }}
          </h1>
        </div>
      </header>
      <div class="grid gap-10 lg:gap-20">
        <div class="grid gap-8 pr-6 sm:pr-0 xl:grid-cols-2">
          <div class="flex flex-col gap-4 lg:gap-8">
            <div class="flex flex-col gap-4">
              <h2 class="text-default-bold lg:text-heavy-bold">{{ combination.name }}</h2>
              <p class="text-subsidiary-reg lg:text-mob-small-reg">{{ combination.description }}</p>
            </div>
            <div class="mt-4 flex flex-col gap-4 lg:mt-0">
              <h3 class="text-mob-small-bold lg:text-default-bold">Способы приготовления</h3>
              <p class="text-subsidiary-reg lg:text-mob-small-reg">
                {{ combination.cooking_method }}
              </p>
            </div>
          </div>
          <div class="grid grid-cols-[auto_minmax(132px,_1fr)] gap-2 lg:grid-cols-3 lg:gap-8">
            <ProductCard
              :id="combination.product.id"
              :has-gift="combination.product.is_have_gift"
              :slug="combination.product.slug"
              :title="combination.product.name"
              :images="combination.product.images.map((i) => i.path)"
              :weight="combination.product.weight"
              :description="combination.product.short_description"
              :is-favorite="combination.product.is_wishlist"
              :degree-type="combination.product.degree_type"
              :categories="combination.product.tags.map((b) => b.name) ?? []"
              :unit="combination.product.weight_type"
              :price="Number(combination.product.sale_price) ?? 0"
              :price-unit="combination.product.price_type"
              :sale-percent="combination.product.sale_percent"
              :is-new="combination.product.is_new"
              :old-price="Number(combination.product.price) ?? 0"
              :cashback_percent="combination.product.cashback_percent"
            >
              <template #favoriteButton>
                <AddToFavorite :id="combination.product.id" :initial-value="combination.product.is_wishlist" />
              </template>
              <template #footer>
                <AddToCart :id="combination.product.id" :count-in-cart="combination.product.count_in_cart" :quantity="combination.product.quantity" />
              </template>
            </ProductCard>
            <VPicture
              :src="combination.image.path"
              height="100%"
              width="100%"
              alt="Возможное сочетание продукта"
              class="block overflow-hidden rounded-2xl lg:col-span-2"
            />
          </div>
        </div>
        <section v-if="combination.garnishes && combination.garnishes.length" class="grid gap-6 lg:gap-8">
          <header class="flex flex-col justify-between gap-4 pr-6 sm:pr-0 lg:flex-row lg:gap-8">
            <h3 class="text-default-bold lg:text-heavy-bold">Рекомендуемые гарниры</h3>
            <p class="text-subsidiary-reg lg:text-mob-small-reg lg:max-w-136">{{ combination.garnish_title }}</p>
          </header>
          <template v-for="garnish in combination.garnishes" :key="garnish.id">
            <CombinationBlock :variant="garnish" />
          </template>
        </section>
        <section v-if="combination.sauces && combination.sauces.length" class="grid gap-6 lg:gap-8">
          <header class="flex flex-col justify-between gap-4 pr-6 sm:pr-0 lg:flex-row lg:gap-8">
            <h3 class="text-default-bold lg:text-heavy-bold">Рекомендуемые соусы</h3>
            <p class="text-subsidiary-reg lg:text-mob-small-reg lg:max-w-136">{{ combination.sauce_title }}</p>
          </header>
          <template v-for="sause in combination.sauces" :key="sause.id">
            <CombinationBlock :variant="sause" />
          </template>
        </section>
        <section v-if="combination.drinks && combination.drinks.length" class="grid gap-6 lg:gap-8">
          <header class="flex flex-col justify-between gap-4 pr-6 sm:pr-0 lg:flex-row lg:gap-8">
            <h3 class="text-default-bold lg:text-heavy-bold">Рекомендуемые напитки</h3>
            <p class="text-subsidiary-reg lg:text-mob-small-reg lg:max-w-136">{{ combination.drink_title }}</p>
          </header>
          <div class="grid grid-cols-2 gap-2 pr-6 sm:pr-0 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
            <div v-for="drink in combination.drinks" :key="drink.id" class="flex flex-col gap-2">
              <VPicture :src="drink.image.path" alt="Напиток" width="100%" height="100%" class="h-[200px] overflow-hidden rounded-2xl lg:h-[300px]" />
              <p class="text-default-bold">{{ drink.name }}</p>
              <p class="text-mob-small-reg">{{ drink.description }}</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  </VContainer>
</template>

<style scoped>
.combination-banner {
  background-color: var(--color-gray-200);
  background-image: url('/images/test-images/combination.jpg'), linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
}
</style>
