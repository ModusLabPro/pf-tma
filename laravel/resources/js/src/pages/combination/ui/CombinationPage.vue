<script setup lang="ts">
import type { ICombinationPageProps } from '../model/combinationPageProps';

import { Head, Link, router } from '@inertiajs/vue3';
import { shallowRef } from 'vue';

import { CombinationLayout } from '@/app/layouts';
import { CombinationPreviewCard, ICombination } from '@/entities/combination';
import { VPagination } from '@/shared/ui/pagination';
import { VPicture } from '@/shared/ui/picture';

defineOptions({
  layout: CombinationLayout,
});

defineProps<ICombinationPageProps>();

const currentPage = shallowRef<number>(route().queryParams.page ? Number(route().queryParams.page) : 1);
const onUpdatePage = (pageNumber: number): void => {
  const currentRoute = route().current();
  const currentQuery = route().queryParams;
  if (currentRoute) {
    router.visit(route(currentRoute, { ...currentQuery, page: pageNumber }), {
      only: ['combinations'],
    });
  }
};
</script>

<template>
  <Head>
    <title>{{ seoData.seo_title }}</title>
    <meta name="description" :content="seoData.seo_description" />
    <meta name="keywords" :content="seoData.seo_keywords" />
  </Head>
  <div v-if="combinations.total > 0" ref="catalog-page" class="flex flex-col gap-8">
    <template v-if="is_combinations_group">
      <section v-for="(value, key) in combinations.data as Record<string, ICombination[]>" :key>
        <header class="mb-4">
          <h2 class="md:text-heavy-bold text-default-bold">{{ key }}</h2>
        </header>
        <div class="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          <template v-for="combination in value" :key="combination.id">
            <Link :href="route('combination.show', { combination: combination.id })">
              <CombinationPreviewCard :combination />
            </Link>
          </template>
        </div>
      </section>
    </template>
    <template v-else>
      <div class="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
        <template v-for="combination in combinations.data as ICombination[]" :key="combination.id">
          <Link :href="route('combination.show', { combination: combination.id })">
            <CombinationPreviewCard :combination />
          </Link>
        </template>
      </div>
    </template>
    <VPagination
      v-model="currentPage"
      :per-page="combinations.per_page"
      :total-count="combinations.total"
      class="mx-auto"
      @update:model-value="onUpdatePage"
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
