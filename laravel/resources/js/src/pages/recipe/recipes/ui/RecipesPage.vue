<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3';
import { computed, ref, useTemplateRef, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { route } from 'ziggy-js';

import { IRecipe, RecipeCard } from '@/entities/recipes';
import { AddToFavorite } from '@/features/Product/add-to-favorite';
import IconCircleCross from '@/shared/icons/IconCircleCross.svg';
import IconPlus from '@/shared/icons/IconPlus.svg';
import IconSearch from '@/shared/icons/IconSearch.svg';
import { useScreenSize } from '@/shared/media-queries';
import { VContainer } from '@/shared/ui/container';
import { EmptyPlug } from '@/shared/ui/empty-plug';
import { VPagination } from '@/shared/ui/pagination';
import { VPicture } from '@/shared/ui/picture';
import { VShare } from '@/shared/ui/share';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';
import SelectButton from '@/shared/ui/volt/SelectButton.vue';

const { isDesktop } = useScreenSize();

const breadcrumbItems = [
  { label: 'Главная', route: route('main-page') },
  { label: 'Рецепты', route: route('recipe.index') },
];

const pageContent = useTemplateRef('recipes-page');

const { t } = useI18n();

type TRecipeFastTag = {
  id: string;
  title: string;
  order_number: number;
};

const props = defineProps<{
  recipes: IRecipe[];
  recipeCategories: TRecipeFastTag[];
  seoData: {
    page_name: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
  };
}>();

const filters = useForm({
  selection_id: route().queryParams?.selection_id ?? [],
  recipe_search: route().queryParams?.recipe_search ?? undefined,
});

const resetSearch = (): void => {
  filters.recipe_search = '';
  filters.get(route('recipe.index'), {
    only: ['recipes', 'recipeCategories'],
    preserveScroll: true,
  });
};

watch(
  () => filters.recipe_search,
  (newVal, oldVal) => {
    if (oldVal && !newVal) {
      resetSearch();
    }
  },
);

const onPageUpdate = async (): Promise<void> => {
  pageContent.value?.scrollIntoView({
    behavior: 'smooth',
  });
};

const currentPage = ref(1);
const perPage: number = 16;

const paginatedRecipes = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return props.recipes.slice(start, end);
});

const fastTags = computed(() => {
  return [...props.recipeCategories];
});

const applyFilters = (): Promise<void> => {
  return new Promise<void>((resolve) => {
    filters.get(route('recipe.index'), {
      only: ['recipes', 'recipeCategories'],
      preserveScroll: true,
    });
    resolve();
  });
};
</script>

<template>
  <Head v-if="seoData">
    <title>{{ seoData.seo_title }}</title>
    <meta name="description" :content="seoData.seo_description" />
    <meta name="keywords" :content="seoData.seo_keywords" />
  </Head>
  <div ref="recipes-page">
    <VContainer class="flex flex-col px-6 sm:px-8">
      <Breadcrumb v-if="!isDesktop" :model="breadcrumbItems" class="mb-4 bg-white px-0!">
        <template #item="{ item }">
          <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
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
              <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
                {{ item.label }}
              </Link>
            </template>
          </Breadcrumb>
          <h1 class="font-vast text-vast-mob-title-bold lg:text-vast-title-bold text-white">Рецепты</h1>
        </div>
      </div>
      <form class="flex flex-col justify-between gap-2 lg:flex-row" @submit.prevent>
        <SelectButton v-model="filters.selection_id" :options="fastTags" option-label="title" option-value="id" multiple @value-change="applyFilters">
          <template #option="{ option }">
            <span class="inline-flex gap-2">{{ option.title }} <IconCircleCross class="group-p-checked:inline hidden" /></span>
          </template>
        </SelectButton>
        <div class="flex max-w-150 flex-1 items-center justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4">
          <input v-model="filters.recipe_search" type="text" class="text-subsidiary-reg w-full outline-none" :placeholder="t('header.search')" />
          <button type="button" @click.stop="resetSearch">
            <IconPlus v-if="!!filters.recipe_search" class="text-default rotate-45 cursor-pointer" />
          </button>
          <button
            type="submit"
            class="bg-text disabled:bg-filling cursor-pointer rounded-[50px] p-2 text-white disabled:cursor-not-allowed disabled:text-[#666666]"
            :disabled="!filters.recipe_search"
            @click="applyFilters"
          >
            <IconSearch />
          </button>
        </div>
      </form>
      <div v-if="filters.recipe_search && recipes.length === 0" class="bg-light-gray mx-auto mt-16 max-w-[1200px] rounded-[40px] md:mt-30">
        <div class="flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48">
          <VPicture src="/images/test-images/image_exclamation.webp" alt="восклицание" class="-mt-20 max-w-[120px] lg:max-w-[200px]" />
          <p class="text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]">
            К сожалению, по заданным параметрам ничего не найдено
          </p>
        </div>
      </div>
      <EmptyPlug v-else-if="recipes.length === 0" class="mx-auto mt-16 md:mt-30" />
      <section v-else class="mt-8 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-8">
        <RecipeCard
          v-for="recipe in paginatedRecipes"
          :id="recipe.id"
          :key="recipe.id"
          :title="recipe.title"
          :description="recipe.mini_description"
          :image="recipe.image.path"
          :cook-time="recipe.cooking_time_minutes"
          :portions="recipe.number_of_persons"
          :difficulty="recipe.difficult"
          :is-favorite="recipe.is_wishlist"
        >
          <template #actions="{ isFavorite }">
            <AddToFavorite :id="recipe.id" :initial-value="isFavorite" item-type="recipe" />
            <!--            <div class="bg-text/80 cursor-pointer rounded-full p-2 text-white">-->
            <!--              <IconShare />-->
            <!--            </div>-->
            <VShare :url="route('recipe.show', { recipe: recipe.id })" />
          </template>
        </RecipeCard>
      </section>

      <VPagination
        v-model="currentPage"
        :per-page="perPage"
        :total-count="recipes.length"
        class="mx-auto mt-4 md:mt-8"
        @update:model-value="onPageUpdate"
      />
    </VContainer>
  </div>
</template>

<style scoped>
.catalog-banner {
  background-color: var(--color-gray-200);
  background-image: url('/images/test-images/recipe-banner.webp'), linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
}
</style>
