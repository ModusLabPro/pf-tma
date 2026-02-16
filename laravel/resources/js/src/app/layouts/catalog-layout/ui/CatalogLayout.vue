<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { route } from 'ziggy-js';

import { MainLayout } from '@/app/layouts';
import { useFiltersStore } from '@/app/layouts/catalog-layout';
import CatalogFiltersMobile from '@/app/layouts/catalog-layout/ui/CatalogFiltersMobile.vue';
import CatalogSortMobile from '@/app/layouts/catalog-layout/ui/CatalogSortMobile.vue';
import { CombinationPreviewCard } from '@/entities/combination';
import { ProductCard } from '@/entities/products';
import { AddToFavorite } from '@/features/Product/add-to-favorite';
import { AddToCart } from '@/features/Product/manage-cart';
import { ICatalogPageProps, TargetCategory } from '@/pages/catalog';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg?skipsvgo';
import { useScreenSize } from '@/shared/media-queries';
import { CatalogMenu } from '@/shared/ui/catalog-menu';
import { VContainer } from '@/shared/ui/container';
import { VSection } from '@/shared/ui/section';
import { VSlider } from '@/shared/ui/slider';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';
import { CatalogBanner } from '@/widgets/catalog-banner';

import CatalogFilters from './CatalogFilters.vue';
import QuickFilters from './QuickFilters.vue';

const page = usePage<ICatalogPageProps>();

const filtersStore = useFiltersStore();

const isSearchActive = computed(() => !!filtersStore.filters.search);

const categoriesChain = computed<Omit<TargetCategory, 'parent'>[]>(() => {
  const chain: Omit<TargetCategory, 'parent'>[] = [];

  const getChain = (category: TargetCategory, chainArr: Omit<TargetCategory, 'parent'>[]): void => {
    chainArr.unshift({
      id: category.id,
      name: category.name,
      slug: category.slug,
      path: category.path,
    });
    if (category.parent) {
      getChain(category.parent, chainArr);
    }
  };

  if (page.props.category_target) {
    getChain(page.props.category_target, chain);
  }

  return chain;
});

const breadcrumbItems = computed<{ label: string; route: string }[]>(() => {
  const items = [
    { label: 'Главная', route: route('main-page') },
    { label: 'Каталог', route: route('catalog.index') },
  ];

  if (filtersStore.filters.search) {
    items.push({ label: 'Результаты поиска', route: route('catalog.index') });
  }

  return [
    ...items,
    ...categoriesChain.value.map((el) => ({
      label: el.name,
      route: `/catalog/${el.path}`,
    })),
  ];
});

const { isDesktop } = useScreenSize();
</script>

<template>
  <MainLayout>
    <VContainer class="px-6 sm:px-8">
      <Breadcrumb v-if="!isDesktop" :model="breadcrumbItems" class="mb-4 bg-white px-0!">
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
      <div
        class="rounded-20 catalog-banner mb-4 h-50 bg-gray-100 mask-[url(../../images/masks/for_catalog_mobile.svg)] mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 pt-4 min-[425px]:mask-[url(../../images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-65 lg:px-8 lg:pt-8"
      >
        <div class="flex h-42 max-w-1/2 flex-col justify-end gap-4 pb-8 lg:h-47 lg:justify-between">
          <Breadcrumb v-if="isDesktop" :model="breadcrumbItems">
            <template #item="{ item }">
              <Link
                class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200"
                :href="item.route"
                @click="() => filtersStore.onChangeCategory()"
              >
                {{ item.label }}
              </Link>
            </template>
          </Breadcrumb>
          <h1 class="font-vast text-vast-mob-title-bold lg:text-vast-title-bold text-white">
            <template v-if="!route().params?.category">{{ isSearchActive ? 'Результаты поиска' : 'Каталог' }}</template>
            <template v-else>{{ page.props.category_target?.name }}</template>
          </h1>
        </div>
      </div>
      <div class="flex gap-8">
        <aside v-if="isDesktop" class="w-56">
          <div class="grid gap-6">
            <section>
              <h3 class="text-medium-bold mb-3">Каталог товаров</h3>
              <CatalogMenu
                :is-catalog-page="true"
                :categories-chain
                :only="['products', 'category_target', 'is_products_group', 'fast_filter_tags', 'filter_data', 'seoData']"
                @change-category="filtersStore.onChangeCategory"
              />
            </section>
            <section>
              <CatalogFilters />
            </section>
          </div>
        </aside>
        <div class="flex-1">
          <div v-if="!isDesktop" class="mb-3 flex justify-between gap-3">
            <CatalogFiltersMobile />
            <CatalogSortMobile />
          </div>
          <QuickFilters class="mb-4" />
          <slot />
        </div>
      </div>
    </VContainer>
    <VContainer>
      <VSection v-if="page.props.products_recommended?.length" class="pr-0 sm:pr-8">
        <template #header>
          <header class="mb-8 flex items-center justify-between gap-3 pr-6 sm:pr-0">
            <h2 class="text-default-bold sm:text-heavy-bold">Рекомендуемые товары</h2>
          </header>
        </template>
        <template #headerAction></template>
        <VSlider
          :slides="page.props.products_recommended"
          :slider-options="{
            slidesPerView: 6,
            spaceBetween: 32,
            allowTouchMove: true,
          }"
        >
          <template #slide="{ slide }">
            <ProductCard
              :id="slide.id"
              :key="`${slide.id}-${slide.count_in_cart}`"
              :slug="slide.slug"
              :has-gift="slide.is_have_gift"
              :title="slide.name"
              :images="slide.images.map((i) => i.path)"
              :weight="slide.weight"
              :description="slide.short_description"
              :is-favorite="slide.is_wishlist"
              :degree-type="slide.degree_type"
              :is-new="slide.is_new"
              :sale-percent="slide.sale_percent"
              :categories="slide.tags.map((b) => b.name)"
              :unit="slide.weight_type"
              :price="Number(slide.sale_price) ?? 0"
              :price-unit="slide.price_type"
              :old-price="Number(slide.price) ?? 0"
              :cashback_percent="slide.cashback_percent"
            >
              <template #favoriteButton>
                <AddToFavorite :id="slide.id" :initial-value="slide.is_wishlist" />
              </template>
              <template #footer>
                <AddToCart :id="slide.id" :count-in-cart="slide.count_in_cart" :quantity="slide.quantity" />
              </template>
            </ProductCard>
          </template>
        </VSlider>
      </VSection>
      <VSection
        v-if="page.props.combinations && page.props.combinations.length > 0"
        title="Рекомендации по сочетанию продуктов"
        class="mt-4 max-[640px]:!p-0 max-[640px]:!pl-4"
      >
        <template #headerAction>
          <div
            class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4"
          >
            <Link :href="route('combination.index')" class="flex items-center gap-2">
              <span>Все</span>
              <IconCaretRight :width="'16px'" :height="'16px'" />
            </Link>
          </div>
        </template>
        <VSlider
          :slides="page.props.combinations"
          :slider-options="{
            slidesPerView: 4,
            spaceBetween: 32,
            allowTouchMove: true,
            breakpoints: {
              0: { slidesPerView: 1.7, spaceBetween: 8 },
              640: { slidesPerView: 3, spaceBetween: 16 },
              1280: { slidesPerView: 4, spaceBetween: 32 },
            },
          }"
        >
          <template #slide="{ slide }">
            <CombinationPreviewCard :combination="slide" />
          </template>
        </VSlider>
      </VSection>
      <VSection>
        <CatalogBanner />
      </VSection>
    </VContainer>
  </MainLayout>
</template>

<style scoped>
.catalog-banner {
  background-color: var(--color-gray-200);
  background-image: url('/images/test-images/catalog.jpg'), linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
}
</style>
