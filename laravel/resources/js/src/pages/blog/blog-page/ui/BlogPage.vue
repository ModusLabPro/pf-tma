<script setup lang="ts">
import { Link, router, useForm } from '@inertiajs/vue3';
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { route } from 'ziggy-js';

import { ArticleBlog, ArticleCard } from '@/entities/article';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg';
import IconPlus from '@/shared/icons/IconPlus.svg';
import IconSearch from '@/shared/icons/IconSearch.svg';
import IconSort from '@/shared/icons/IconSort.svg';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VContainer } from '@/shared/ui/container';
import { EmptyPlug } from '@/shared/ui/empty-plug';
import { VPicture } from '@/shared/ui/picture';
import { VScrollPanel } from '@/shared/ui/scroll-panel';
import { VSection } from '@/shared/ui/section';
import { VShare } from '@/shared/ui/share';
import { VSlider } from '@/shared/ui/slider';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';
import VDialog from '@/shared/ui/volt/Dialog.vue';
import RadioButton from '@/shared/ui/volt/RadioButton.vue';
import Select from '@/shared/ui/volt/Select.vue';

import { IBlogPageProps } from '../model/blogPageProps';

const { isDesktop, isMobile } = useScreenSize();

defineProps<IBlogPageProps>();

const breadcrumbItems = [
  { label: 'Главная', route: route('main-page') },
  { label: 'Блог', route: route('blog.index') },
];

const filters = useForm({
  sort: route().queryParams?.sort ?? undefined,
  blog_search: route().queryParams?.blog_search ?? undefined,
});

const filtersApplied = ref<boolean>(false);

if (route().queryParams?.sort || route().queryParams?.blog_search) {
  filtersApplied.value = true;
}

watch(
  () => filters.blog_search,
  (newVal, oldVal) => {
    if (oldVal && !newVal) {
      resetSearch();
    }
  },
);

const sortOptions = ref([
  {
    label: 'Популярные',
    value: 'popular',
  },
  {
    label: 'Новинки',
    value: 'newest',
  },
]);

const resetSearch = (): void => {
  filters.blog_search = '';
  filters.get(route('blog.index'), {
    preserveScroll: true,
  });
};

const applyFilters = () => {
  return new Promise<void>((resolve) => {
    filters.get(route('blog.index'), {
      preserveScroll: true,
      onSuccess: () => {
        filtersApplied.value = true;
        resolve();
      },
    });
  });
};

const isSortModalOpen = ref<boolean>(false);

const { t } = useI18n();
</script>

<template>
  <VContainer class="px-6 sm:px-8">
    <Breadcrumb v-if="!isDesktop" :model="breadcrumbItems" class="mb-4 bg-white">
      <template #item="{ item }">
        <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
          {{ item.label }}
        </Link>
      </template>
    </Breadcrumb>
    <div
      class="rounded-20 blog-banner mb-4 h-50 bg-gray-100 mask-[url(/images/masks/for_catalog_mobile.svg)] mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 pt-4 min-[425px]:mask-[url(/images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-65 lg:px-8 lg:pt-8"
    >
      <div class="flex h-42 flex-col justify-end gap-4 pb-8 lg:h-47 lg:justify-between">
        <Breadcrumb v-if="isDesktop" :model="breadcrumbItems">
          <template #item="{ item }">
            <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
              {{ item.label }}
            </Link>
          </template>
        </Breadcrumb>
        <h1 class="font-vast text-vast-mob-title-bold lg:text-vast-title-bold text-white">Блог</h1>
      </div>
    </div>
  </VContainer>
  <VContainer>
    <VSection>
      <template v-if="popular_selections.length || selections.length || mainSelection" #header>
        <header class="flex items-center justify-between gap-3">
          <h2 class="text-default-bold sm:text-heavy-bold">Категории блога</h2>
          <form class="flex flex-grow flex-row items-stretch justify-end gap-2" @submit.prevent>
            <div
              v-if="isDesktop"
              class="flex max-w-150 flex-1 items-center justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4"
            >
              <input v-model="filters.blog_search" type="text" class="text-subsidiary-reg w-full outline-none" :placeholder="t('header.search')" />
              <span @click.stop="resetSearch">
                <IconPlus v-if="!!filters.blog_search" class="text-default rotate-45 cursor-pointer" />
              </span>
              <button
                class="bg-text disabled:bg-filling cursor-pointer rounded-[50px] p-2 text-white disabled:cursor-not-allowed disabled:text-[#666666]"
                :disabled="!filters.blog_search"
                @click="applyFilters"
              >
                <IconSearch />
              </button>
            </div>
            <div v-if="!isMobile" class="relative">
              <IconSort class="absolute start-4 top-1/2 z-1 -translate-y-1/2" />
              <Select
                v-model="filters.sort"
                :options="sortOptions"
                option-value="value"
                option-label="label"
                pt:overlay="!rounded-20 px-2 mt-2"
                variant="filled"
                class="p-1 pl-12"
                placeholder="Сортировка"
                show-clear
                @value-change="() => applyFilters()"
              >
                <template #header>
                  <div class="p-2">
                    <span class="text-subsidiary-medium text-nowrap">Какие статьи показать сначала</span>
                  </div>
                </template>
                <template #option="{ option, selected }">
                  <RadioButton :model-value="selected" :input-id="option.value" binary />
                  <label class="cursor-pointer pl-3" :for="option.value">{{ option.label }}</label>
                </template>
                <template #clearicon>
                  <button
                    class="text-additional inline-flex cursor-pointer items-center justify-center"
                    @click.stop="
                      () => {
                        filters.sort = undefined;
                        applyFilters();
                      }
                    "
                  >
                    <i class="pi pi-times"></i>
                  </button>
                </template>
              </Select>
            </div>
            <button v-else class="bg-input rounded-20 flex items-center gap-2 px-4 py-3.5" @click="isSortModalOpen = true">
              <IconSort class="h-4 w-4" />
              <span class="text-subsidiary-reg">Сортировка</span>
            </button>
            <VDialog v-model:visible="isSortModalOpen" :draggable="false" modal class="w-80 max-md:mx-4" header="Сортировка">
              <p class="text-subsidiary-reg md:text-mob-small-reg">Какие новости показать сначала</p>
              <div class="mt-3 flex flex-col gap-2">
                <div v-for="sort in sortOptions" :key="sort.label" class="ml-2">
                  <RadioButton v-model="filters.sort" :input-id="sort.value" :name="sort.label" :value="sort.value" />
                  <label class="cursor-pointer pl-3" :for="sort.label">{{ sort.label }}</label>
                </div>
                <VButton
                  label="Применить"
                  class="mt-3"
                  @click="
                    isSortModalOpen = false;
                    applyFilters();
                  "
                />
              </div>
            </VDialog>
          </form>
        </header>
        <div
          v-if="!isDesktop"
          class="mt-2 flex flex-1 items-center justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4"
        >
          <input v-model="filters.blog_search" type="text" class="text-subsidiary-reg w-full outline-none" :placeholder="t('header.search')" />
          <span @click.stop="resetSearch">
            <IconPlus v-if="!!filters.blog_search" class="text-default rotate-45 cursor-pointer" />
          </span>
          <button
            class="bg-text disabled:bg-filling cursor-pointer rounded-[50px] p-2 text-white disabled:cursor-not-allowed disabled:text-[#666666]"
            :disabled="!filters.blog_search"
            @click="applyFilters"
          >
            <IconSearch />
          </button>
        </div>
      </template>
      <template v-if="filtersApplied && (filters.blog_search || filters.sort)">
        <div v-if="selections.length > 0" class="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
          <ArticleCard
            v-for="article in selections"
            :id="article.id"
            :key="article.id"
            :title="article.title"
            :image="article.image"
            :description="article.description"
            :article-count="article.article_count"
            is-category
            :updated-at="article.updated_at"
          />
        </div>
        <div v-else class="bg-light-gray mx-auto mt-16 max-w-[1200px] rounded-[40px] md:mt-30">
          <div class="flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48">
            <VPicture src="/images/test-images/image_exclamation.webp" alt="восклицание" class="-mt-20 max-w-[120px] lg:max-w-[200px]" />
            <p class="text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]">
              К сожалению, по заданным параметрам ничего не найдено
            </p>
          </div>
        </div>
      </template>
      <EmptyPlug v-else-if="!popular_selections.length && !selections.length && !mainSelection" class="mx-auto mt-6 md:mt-15" />
      <template v-else>
        <div class="mt-4 grid gap-8 md:grid-cols-2" :class="popular_selections.length ? 'xl:grid-cols-[352px_1fr_480px]' : 'xl:grid-cols-2'">
          <div class="flex flex-col gap-6">
            <ArticleCard
              v-for="article in selections"
              :id="article.id"
              :key="article.id"
              :title="article.title"
              :image="article.image"
              :description="article.description"
              :article-count="article.article_count"
              is-category
              :updated-at="article.updated_at"
            />
          </div>
          <div
            v-if="!!mainSelection?.id"
            class="rounded-20 hidden h-full w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat p-2 max-md:flex max-md:h-60 max-md:py-3 md:p-6 min-xl:flex"
            :style="{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${mainSelection?.image?.path || '/images/productPlaceholder.png'})`,
              backgroundColor: 'var(--color-gray-200)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'multiply',
            }"
            @click="router.visit(route('blog.selection.show', mainSelection.id))"
          >
            <div class="mt-auto flex flex-1 items-end text-white">
              <div class="flex w-full flex-col gap-2">
                <div class="flex w-full items-center justify-between">
                  <span class="text-mob-small-reg"
                    ><span class="text-small-bold">{{ mainSelection.article_count }}</span> статей</span
                  >
                  <span class="text-complimentary-reg">Обновлено: {{ mainSelection.updated_at }}</span>
                </div>
                <h2 class="text-mob-small-bold md:text-large-bold">{{ mainSelection.title }}</h2>
                <p class="text-subsidiary-reg md:text-mob-small-reg">{{ mainSelection.description }}</p>
              </div>
            </div>
          </div>
          <div v-if="popular_selections.length" class="bg-light-gray rounded-20 px-2 py-3 md:px-4 md:py-6">
            <h2 class="text-default-bold sm:text-heavy-bold mb-1">Популярное</h2>
            <VScrollPanel class="max-h-[460px] md:max-h-[600px]">
              <article v-for="article in popular_selections" :key="article.id" class="border-b-filling border-b py-3">
                <Link :href="route('blog.selection.show', article.id)" class="flex">
                  <VPicture
                    :src="article.image.path"
                    alt="Изображение статьи"
                    :width="isDesktop ? '122px' : '82px'"
                    :height="isDesktop ? '122px' : '82px'"
                    img-classes="rounded-2xl"
                    class="shrink-0"
                  />
                  <div class="flex w-full flex-col gap-2 p-2 md:p-4">
                    <div class="text-additional flex items-center justify-between">
                      <span class="text-subsidiary-reg md:text-mob-small-reg"
                        ><span class="text-subsidiary-medium md:text-small-bold">{{ article.article_count }}</span> статей</span
                      >
                      <span class="text-complimentary-reg">Обновлено: {{ article.updated_at }}</span>
                    </div>
                    <h2 class="text-mob-small-bold md:text-default-bold">{{ article.title }}</h2>
                    <p class="text-complimentary-reg md:text-mob-small-reg">{{ article.description }}</p>
                  </div>
                </Link>
              </article>
            </VScrollPanel>
          </div>
          <div
            v-if="!!mainSelection?.id"
            class="rounded-20 col-span-2 flex h-full min-h-70 w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat p-2 max-md:hidden max-md:h-60 max-md:py-3 md:p-6 xl:hidden"
            :style="{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${mainSelection?.image?.path || '/images/productPlaceholder.png'})`,
              backgroundColor: 'var(--color-gray-200)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundBlendMode: 'multiply',
            }"
            @click="router.visit(route('blog.selection.show', mainSelection.id))"
          >
            <div class="mt-auto flex flex-1 items-end text-white">
              <div class="flex w-full flex-col gap-2">
                <div class="flex w-full items-center justify-between">
                  <span class="text-mob-small-reg"
                    ><span class="text-small-bold">{{ mainSelection.article_count }}</span> статей</span
                  >
                  <span class="text-complimentary-reg">Обновлено: {{ mainSelection.updated_at }}</span>
                </div>
                <h2 class="text-mob-small-bold md:text-large-bold">{{ mainSelection.title }}</h2>
                <p class="text-subsidiary-reg md:text-mob-small-reg">{{ mainSelection.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </VSection>
    <VSection v-if="popular_article.length" title="Популярные статьи" class="max-[640px]:!pr-0">
      <template #headerAction>
        <div
          class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4"
        >
          <Link href="#" class="flex items-center gap-2">
            <span>Все</span>
            <IconCaretRight :width="'16px'" :height="'16px'" />
          </Link>
        </div>
      </template>
      <VSlider
        :slides="popular_article"
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
          <ArticleBlog
            :id="slide.id"
            :key="slide.id"
            :title="slide.title"
            :description="slide.mini_description"
            :updated-at="slide.created_at"
            :image="slide.image"
          >
            <template #actions>
              <VShare :url="route('blog.article.show', slide.id)" />
            </template>
          </ArticleBlog>
        </template>
      </VSlider>
    </VSection>
  </VContainer>
</template>

<style scoped>
.blog-banner {
  background-color: var(--color-gray-200);
  background-image: url('/images/blog-bg.webp'), linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
}
</style>
