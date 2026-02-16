<script setup lang="ts">
import { Link, router } from '@inertiajs/vue3';
import { computed, ref, useTemplateRef } from 'vue';
import { route } from 'ziggy-js';

import { PromoLayout } from '@/app/layouts';
import { ICombo } from '@/entities/combo';
import { ProductCard } from '@/entities/products';
import { AddToCart } from '@/features/Product/manage-cart';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VContainer } from '@/shared/ui/container';
import { VPagination } from '@/shared/ui/pagination';
import { VSection } from '@/shared/ui/section';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';
import { EmptyPlug } from '@/shared/ui/empty-plug';

defineOptions({
  layout: PromoLayout,
});

const { combos } = defineProps<{
  combos: ICombo[];
}>();

const { isDesktop } = useScreenSize();

const breadcrumbItems = [
  { label: 'Главная', route: route('main-page') },
  { label: 'Комбо наборы', route: route('combo.index') },
];

const pageContent = useTemplateRef('combos-page');

const onPageUpdate = async (): Promise<void> => {
  pageContent.value?.scrollIntoView({
    behavior: 'smooth',
  });
};

const currentPage = ref<number>(1);
const perPage: number = 12;

const paginatedCombos = computed<ICombo[]>(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return combos.slice(start, end);
});
</script>

<template>
  <div ref="combos-page">
    <VContainer class="px-6 sm:px-8">
      <Breadcrumb v-if="!isDesktop" :model="breadcrumbItems" class="mb-4 bg-white px-0!">
        <template #item="{ item }">
          <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
            {{ item.label }}
          </Link>
        </template>
      </Breadcrumb>
      <div
        class="rounded-20 combo-banner mb-4 h-50 bg-gray-100 mask-[url(/images/masks/for_catalog_mobile.svg)] mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 pt-4 min-[425px]:mask-[url(/images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-65 lg:px-8 lg:pt-8"
      >
        <div class="flex h-42 flex-col justify-end gap-4 pb-8 md:max-w-1/2 lg:h-47 lg:justify-between">
          <Breadcrumb v-if="isDesktop" :model="breadcrumbItems">
            <template #item="{ item }">
              <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
                {{ item.label }}
              </Link>
            </template>
          </Breadcrumb>
          <h1 class="font-vast text-vast-mob-title-bold lg:text-vast-title-bold text-white">Комбо наборы</h1>
        </div>
      </div>
    </VContainer>
    <VContainer>
      <VSection>
        <div v-if="combos.length" class="grid gap-2 min-[490px]:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-8">
          <ProductCard
            v-for="combo in paginatedCombos"
            :id="combo.id"
            :key="combo.id"
            class="flex h-full flex-col"
            :title="combo.name"
            :is-combo="true"
            :images="combo.images.map((i) => i.path)"
            :description="combo.short_description"
            :price="Number(combo.sale_price) ?? 0"
            :price-unit="combo.price_type"
            :old-price="Number(combo.price) ?? 0"
            :cashback_percent="combo.cashback_percent"
          >
            <template #footer>
              <AddToCart :id="combo.id" :count-in-cart="combo.count_in_cart" nowrap type="combo" is-combo :quantity="combo.quantity" />
            </template>
          </ProductCard>
        </div>
        <EmptyPlug v-else class="mx-auto" />
        <VButton v-if="combos.length" label="Назад в каталог" class="mx-auto mt-8 w-fit" @click="router.visit(route('catalog.index'))" />
        <VPagination
          v-if="combos.length"
          v-model="currentPage"
          :per-page="perPage"
          :total-count="combos.length"
          class="mx-auto mt-8 justify-center"
          @update:model-value="onPageUpdate"
        />
      </VSection>
    </VContainer>
  </div>
</template>

<style scoped>
.combo-banner {
  background-color: var(--color-gray-200);
  background-image: url('/images/test-images/main-slider.jpg'), linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
}
</style>
