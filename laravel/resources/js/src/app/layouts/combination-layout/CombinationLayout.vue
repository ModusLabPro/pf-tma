<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { computed, useTemplateRef } from 'vue';

import { DefaultLayout } from '@/app/layouts';
import { ICatalogPageProps, TargetCategory } from '@/pages/catalog';
import IconFilters from '@/shared/icons/IconFilters.svg';
import { useScreenSize } from '@/shared/media-queries';
import { VBreadcrumb } from '@/shared/ui/breadcrumb';
import { CatalogMenu } from '@/shared/ui/catalog-menu';
import { VContainer } from '@/shared/ui/container';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';

const combinationBaseBreadcrumbs = [
  { label: 'Главная', route: route('main-page') },
  { label: 'Рекомендации по сочетанию продуктов', route: route('combination.index') },
];

const categoriesMenu = useTemplateRef<InstanceType<typeof CatalogMenu>>('categoriesMenu');
const { isDesktop } = useScreenSize();
const page = usePage<ICatalogPageProps>();
// TODO убрать дублирующий функционал
const categoriesChain = computed<Omit<TargetCategory, 'parent'>[]>(() => {
  const chain: Omit<TargetCategory, 'parent'>[] = [];

  const getChain = (category: TargetCategory, chainArr: Omit<TargetCategory, 'parent'>[]): void => {
    chainArr.unshift({
      id: category.id,
      name: category.name,
      slug: category.slug,
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
</script>

<template>
  <DefaultLayout>
    <template #default="{ openMenu }">
      <VContainer>
        <section class="px-6 sm:px-8">
          <Breadcrumb
            v-if="!isDesktop"
            :model="[...combinationBaseBreadcrumbs, ...categoriesChain.map((el) => ({ label: el.name, route: `combination?category=${el.slug}` }))]"
            class="mb-4 bg-white px-0!"
          >
            <template #item="{ item }">
              <Link
                class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200"
                :href="item.route"
                :only="['combinations', 'is_combinations_group', 'category_target']"
              >
                {{ item.label }}
              </Link>
            </template>
          </Breadcrumb>
          <header
            class="rounded-20 combination-banner mb-4 h-50 bg-gray-100 mask-[url(../../images/masks/for_catalog_mobile.svg)] mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 pt-4 min-[425px]:mask-[url(../../images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-65 lg:px-8 lg:pt-8"
          >
            <div class="flex h-42 flex-col justify-end gap-4 pb-8 lg:h-47 lg:justify-between">
              <VBreadcrumb v-if="categoriesMenu?.breadcrumbItems && isDesktop" :model="categoriesMenu.breadcrumbItems" />
              <h1 class="font-vast text-vast-mob-title-bold xl:text-vast-title-bold md:max-w-1/2 text-white">Рекомендации по сочетанию продуктов</h1>
            </div>
          </header>
          <button
            v-if="!isDesktop"
            class="rounded-20 bg-text text-subsidiary-reg mb-4 flex items-center gap-2 px-4 py-[14px] text-white"
            @click="openMenu"
          >
            <IconFilters />
            Все категории
          </button>
          <div class="grid gap-8 lg:grid-cols-[224px_1fr]">
            <div v-if="isDesktop" class="grid grid-rows-[auto_1fr] gap-3">
              <div class="text-medium-bold">Категории продуктов</div>
              <CatalogMenu
                ref="categoriesMenu"
                base-path="combination"
                :only="['combinations', 'is_combinations_group', 'category_target', , 'seoData']"
                :base-breadcrumbs="combinationBaseBreadcrumbs"
              />
            </div>
            <div>
              <slot />
            </div>
          </div>
        </section>
      </VContainer>
    </template>
  </DefaultLayout>
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
