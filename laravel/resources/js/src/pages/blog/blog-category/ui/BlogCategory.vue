<script setup lang="ts">
import { Link, useForm } from '@inertiajs/vue3';
import { computed, ref, useTemplateRef, watch } from 'vue';
import { route } from 'ziggy-js';

import { ArticleCard, IArticle } from '@/entities/article';
import IconPlus from '@/shared/icons/IconPlus.svg';
import IconSearch from '@/shared/icons/IconSearch.svg';
import { useScreenSize } from '@/shared/media-queries';
import { VContainer } from '@/shared/ui/container';
import { VPagination } from '@/shared/ui/pagination';
import { VPicture } from '@/shared/ui/picture';
import { VSection } from '@/shared/ui/section';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';

import { IBlogSelection } from '../model/blogCategoryProps';
import { EmptyPlug } from '@/shared/ui/empty-plug';

const { isDesktop } = useScreenSize();

const props = defineProps<{
  selection: IBlogSelection;
}>();

const filters = useForm({
  article_search: route().queryParams?.article_search ?? undefined,
});

const resetSearch = (): void => {
  filters.article_search = '';
  filters.get(route('blog.selection.show', props.selection.id), {
    preserveScroll: true,
  });
};

watch(
  () => filters.article_search,
  (newVal, oldVal) => {
    if (oldVal && !newVal) {
      resetSearch();
    }
  },
);

const applyFilters = (): Promise<void> => {
  return new Promise<void>((resolve) => {
    filters.get(route('blog.selection.show', props.selection.id), {
      preserveScroll: true,
    });
    resolve();
  });
};

const breadcrumbItems = computed<{ label: string; route: string }[]>(() => {
  const items = [
    { label: 'Главная', route: route('main-page') },
    { label: 'Новости', route: route('blog.index') },
  ];

  return [
    ...items,
    {
      label: props.selection.title,
      route: route('blog.selection.show', props.selection.id),
    },
  ];
});

const pageContent = useTemplateRef('article-page');

const onPageUpdate = async (): Promise<void> => {
  pageContent.value?.scrollIntoView({
    behavior: 'smooth',
  });
};

const currentPage = ref<number>(1);
const perPage: number = 12;

const paginatedArticles = computed<IArticle[]>(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return props.selection.articles.slice(start, end);
});
</script>

<template>
  <div ref="article-page">
    <VContainer class="px-6 sm:px-8">
      <Breadcrumb v-if="!isDesktop" :model="breadcrumbItems" class="mb-4 bg-white">
        <template #item="{ item }">
          <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
            {{ item.label }}
          </Link>
        </template>
      </Breadcrumb>
      <div
        class="rounded-20 mb-4 h-50 bg-gray-100 mask-[url(/images/masks/for_catalog_mobile.svg)] mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 pt-4 min-[425px]:mask-[url(/images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-65 lg:px-8 lg:pt-8"
        :style="{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${selection.image?.path || '/images/productPlaceholder.png'})`,
          backgroundColor: 'var(--color-gray-200)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply',
        }"
      >
        <div class="flex h-42 flex-col justify-end gap-4 pb-8 lg:h-47 lg:justify-between xl:max-w-1/2">
          <Breadcrumb v-if="isDesktop" :model="breadcrumbItems">
            <template #item="{ item }">
              <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
                {{ item.label }}
              </Link>
            </template>
          </Breadcrumb>
          <h1 class="font-vast text-vast-mob-title-bold lg:text-vast-title-bold text-white">{{ selection.title }}</h1>
        </div>
      </div>
    </VContainer>
    <VContainer>
      <VSection>
        <template v-if="selection.articles.length" #header>
          <header class="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-3">
            <h2 class="text-default-bold sm:text-heavy-bold">{{ selection.title }}</h2>
            <form class="flex items-stretch gap-2 min-[820px]:flex-grow md:justify-end" @submit.prevent>
              <div
                class="flex max-w-150 flex-1 items-center justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4"
              >
                <input v-model="filters.article_search" type="text" class="text-subsidiary-reg w-full outline-none" placeholder="Найти статью" />
                <span @click.stop="resetSearch">
                  <IconPlus v-if="!!filters.article_search" class="text-default rotate-45 cursor-pointer" />
                </span>
                <button
                  class="bg-text disabled:bg-filling cursor-pointer rounded-[50px] p-2 text-white disabled:cursor-not-allowed disabled:text-[#666666]"
                  :disabled="!filters.article_search"
                  type="submit"
                  @click="applyFilters"
                >
                  <IconSearch />
                </button>
              </div>
            </form>
          </header>
        </template>
        <template v-if="selection.articles.length > 0">
          <div class="mt-5 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
            <ArticleCard
              v-for="article in paginatedArticles"
              :id="article.id"
              :key="article.id"
              :title="article.title"
              :description="article.mini_description"
              :image="article.image"
              :updated-at="article.updated_at"
            />
          </div>
          <VPagination
            v-model="currentPage"
            :per-page="perPage"
            :total-count="props.selection.articles.length"
            class="mx-auto mt-8 justify-center"
            @update:model-value="onPageUpdate"
          />
        </template>
        <div v-else-if="filters.article_search" class="bg-light-gray mx-auto mt-16 max-w-[1200px] rounded-[40px] md:mt-30">
          <div class="flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48">
            <VPicture src="/images/test-images/image_exclamation.webp" alt="восклицание" class="-mt-20 max-w-[120px] lg:max-w-[200px]" />
            <p class="text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]">
              К сожалению, по заданным параметрам ничего не найдено
            </p>
          </div>
        </div>
        <EmptyPlug v-else class="mx-auto mt-6 md:mt-14" />
      </VSection>
    </VContainer>
  </div>
</template>

<style scoped></style>
