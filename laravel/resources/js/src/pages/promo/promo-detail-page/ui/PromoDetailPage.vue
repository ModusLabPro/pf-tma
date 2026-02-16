<script setup lang="ts">
import { Link, router } from '@inertiajs/vue3';
import { computed, ref, useTemplateRef } from 'vue';
import { route } from 'ziggy-js';

import { PromoLayout } from '@/app/layouts';
import { ProductCard } from '@/entities/products';
import { IPromoDetails } from '@/entities/promo';
import { AddToFavorite } from '@/features/Product/add-to-favorite';
import { AddToCart } from '@/features/Product/manage-cart';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VContainer } from '@/shared/ui/container';
import { VPagination } from '@/shared/ui/pagination';
import { VSection } from '@/shared/ui/section';
import { VShare } from '@/shared/ui/share';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';

defineOptions({
  layout: PromoLayout,
});

const props = defineProps<{
  promotion: IPromoDetails;
}>();

const pageContent = useTemplateRef('promo-page');

const onPageUpdate = async (): Promise<void> => {
  pageContent.value?.scrollIntoView({
    behavior: 'smooth',
  });
};

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return props.promotion.items.slice(start, end);
});

const currentPage = ref<number>(1);
const perPage: number = 18;

const breadcrumbItems = computed<{ label: string; route: string }[]>(() => {
  const items = [
    { label: 'Главная', route: route('main-page') },
    { label: 'Акции и спецпредложения', route: route('promotion.index') },
  ];

  return [
    ...items,
    {
      label: props.promotion.name,
      route: route('promotion.show', props.promotion.id),
    },
  ];
});

const { isDesktop } = useScreenSize();
</script>

<template>
  <div ref="promo-page">
    <VContainer class="px-6 sm:px-8">
      <Breadcrumb v-if="!isDesktop" :model="breadcrumbItems" class="mb-4 bg-white max-md:px-0!">
        <template #item="{ item }">
          <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
            {{ item.label }}
          </Link>
        </template>
      </Breadcrumb>
      <div
        class="rounded-20 mb-4 h-full mask-[url(../../images/masks/for-newsletter-mobile.svg)] bg-cover bg-center bg-no-repeat mask-cover mask-bottom-left mask-no-repeat px-4 pt-4 min-sm:mask-[url(../../images/masks/for_catalog.svg)] lg:px-8 lg:pt-8"
        :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${promotion.image.path})` }"
      >
        <div class="flex flex-col-reverse gap-6 pb-8 lg:flex-row lg:items-start lg:justify-between">
          <div class="flex flex-col justify-between gap-10">
            <Breadcrumb v-if="isDesktop" :model="breadcrumbItems">
              <template #item="{ item }">
                <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
                  {{ item.label }}
                </Link>
              </template>
            </Breadcrumb>
            <div class="flex h-full flex-col gap-4">
              <h1 class="font-vast text-vast-mob-title-bold lg:text-vast-title-bold max-w-[920px] text-white uppercase">
                {{ promotion.name }}
              </h1>
              <p class="bg-delete text-subsidiary-medium mb-6 w-fit rounded-full px-2 py-1 text-white">Действует до {{ promotion.end_date }}</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <!--            <div class="bg-text/80 cursor-pointer rounded-full p-2 text-white">-->
            <!--              <IconShare />-->
            <!--            </div>-->
            <VShare :url="route('promotion.show', { promotion: promotion.id })" />
            <div>
              <p
                class="text-subsidiary-reg rounded-20 border-complimentary w-fit border bg-[#e5e5e5]/10 p-1.5 text-white backdrop-blur-[10px] lg:px-3 lg:py-2"
              >
                {{ promotion.type }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </VContainer>
    <VContainer>
      <VSection>
        <div v-if="promotion.items.length" class="grid grid-cols-2 gap-x-2 gap-y-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-4 xl:grid-cols-6 xl:gap-x-8">
          <ProductCard
            v-for="product in paginatedProducts"
            :id="product.item.id"
            :key="product.item.id"
            :has-gift="product.is_combo ? false : product.item.is_have_gift"
            :slug="product.is_combo ? '' : product.item.slug"
            :title="product.item.name"
            :images="product.item.images.map((i) => i.path)"
            :weight="product.item.weight"
            :description="product.item.short_description"
            :is-favorite="product.item.is_wishlist"
            :degree-type="product.item.degree_type"
            :is-combo="product.is_combo"
            :categories="product.item.tags?.map((t) => t.name)"
            :unit="product.item.weight_type"
            :price="Math.round(Number(product.item.sale_price)) ?? 0"
            :price-unit="product.item.price_type"
            :sale-percent="product.item?.sale_percent ?? null"
            :old-price="Math.round(Number(product.item.price)) ?? 0"
            :cashback_percent="product.item.cashback_percent"
          >
            <template #favoriteButton>
              <AddToFavorite :id="product.item.id" :initial-value="product.item.is_wishlist" />
            </template>
            <template #footer>
              <AddToCart
                :id="product.item.id"
                :count-in-cart="product.item.count_in_cart"
                :type="product.is_combo ? 'combo' : 'product'"
                :quantity="product.item.quantity"
              />
            </template>
          </ProductCard>
        </div>
        <VButton v-if="isDesktop" label="Назад к акциям" class="mx-auto mt-8 w-fit" @click="router.visit(route('promotion.index'))" />

        <VPagination
          v-if="promotion.items.length"
          v-model="currentPage"
          :per-page="perPage"
          :total-count="promotion.items.length"
          class="mx-auto mt-8 justify-center"
          @update:model-value="onPageUpdate"
        />
        <VButton v-if="!isDesktop" label="Назад к акциям" class="mx-auto mt-8 w-fit" @click="router.visit(route('promotion.index'))" />
      </VSection>
    </VContainer>
  </div>
</template>

<style scoped></style>
