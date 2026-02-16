<script setup lang="ts">
import { Head, Link, useForm } from '@inertiajs/vue3';
import { useWindowSize } from '@vueuse/core';
import { computed, useId } from 'vue';
import { useI18n } from 'vue-i18n';
import { route } from 'ziggy-js';

import { PromoLayout } from '@/app/layouts';
import { IPromo, IPromoTypes } from '@/entities/promo';
import { TBanner } from '@/shared/banner/index.js';
import IconCircleCross from '@/shared/icons/IconCircleCross.svg';
import { Nullable } from '@/shared/lib/utility-types/Nullable';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VContainer } from '@/shared/ui/container';
import { EmptyPlug } from '@/shared/ui/empty-plug';
import { VSection } from '@/shared/ui/section';
import { VShare } from '@/shared/ui/share';
import { VNavigationButton } from '@/shared/ui/slider';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';
import SelectButton from '@/shared/ui/volt/SelectButton.vue';

defineProps<{
  promotions: IPromo[];
  promotionTypes: IPromoTypes[];
  seo_title: Nullable<string>;
  banners: TBanner[];
  seo_description: Nullable<string>;
}>();

defineOptions({
  layout: PromoLayout,
});

const { isDesktop } = useScreenSize();

const breadcrumbItems = [
  { label: 'Главная', route: route('main-page') },
  { label: 'Акции и спецпредложения', route: route('promotion.index') },
];

const filters = useForm({
  type: route().queryParams?.type ?? [],
});

const applyFilters = (): Promise<void> => {
  return new Promise<void>((resolve) => {
    filters.get(route('promotion.index'), {
      only: ['promotions'],
      preserveScroll: true,
      preserveState: true,
    });
    resolve();
  });
};

const { width } = useWindowSize();

const nbStyles = computed(() => {
  if (width.value >= 1280) {
    return {
      '--nb-w': '600px',
      '--nb-r': '44px',
    };
  } else if (width.value >= 900) {
    return {
      '--nb-w': '300px',
      '--nb-r': '32px',
    };
  } else {
    return {
      '--nb-w': '120px',
      '--nb-r': '24px',
    };
  }
});

const { t } = useI18n();
</script>

<template>
  <Head v-if="seo_title || seo_description">
    <title>{{ seo_title }}</title>
    <meta v-if="seo_description" name="description" :content="seo_description" />
  </Head>
  <VContainer class="px-6 md:px-8">
    <Breadcrumb v-if="!isDesktop" :model="breadcrumbItems" class="mb-4">
      <template #item="{ item }">
        <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
          {{ item.label }}
        </Link>
      </template>
    </Breadcrumb>
    <div v-if="banners.length" class="relative">
      <swiper-container
        space-between="32"
        loop="true"
        :navigation="{
          nextEl: '.slider-next-promo',
          prevEl: '.slider-prev-promo',
        }"
      >
        <swiper-slide v-for="banner in banners" :key="banner.id">
          <div
            class="bg-multiply nebo nebo--tr relative mb-4 flex h-70 w-full flex-col justify-between rounded-[40px] bg-cover bg-center bg-no-repeat px-4 pt-4 lg:h-100 lg:p-8"
            :style="{ ...nbStyles, '--nb-h': '1px', backgroundImage: `url(${banner.image.path})` }"
          >
            <div class="rounded-20 absolute inset-0 bg-black/50 mix-blend-multiply"></div>
            <div class="relative z-10 flex h-full flex-col gap-3 pb-8 min-[900px]:max-w-1/2">
              <Breadcrumb v-if="isDesktop" :model="breadcrumbItems">
                <template #item="{ item }">
                  <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
                    {{ item.label }}
                  </Link>
                </template>
              </Breadcrumb>
              <h1
                class="font-vast text-vast-mob-title-bold lg:text-vast-title-bold mt-4 max-w-[600px] text-white uppercase max-[900px]:mt-10 xl:mt-10"
              >
                {{ banner.title }}
              </h1>
              <p v-html="banner.description" class="text-mob-small-reg text-white" />
            </div>

            <div class="relative z-100 mb-1.75 ml-28 flex w-[173px] items-center gap-1 max-[1023px]:mb-8.75">
              <span
                v-for="j in banners"
                :key="j.id"
                :style="{ flexBasis: `${(1 / 3) * 100}%` }"
                class="rounded-20 block h-0.5"
                :class="[j.id === banner.id ? 'bg-white' : 'bg-[#D4D3D3]/50']"
              />
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <VNavigationButton class="absolute bottom-8 left-8 z-10" slider-key="promo" />
    </div>
  </VContainer>
  <VContainer class="mt-4 flex flex-col gap-20 px-2 lg:mt-17.5">
    <VSection>
      <template v-if="promotions.length" #header>
        <div class="mb-8 flex flex-col justify-between gap-3 lg:flex-row lg:items-center">
          <h2 class="text-default-bold md:text-heavy-bold">{{ t('promo_page.promotionsAndSpecialOffers') }}</h2>
          <form class="flex justify-between gap-2" @submit.prevent>
            <SelectButton
              v-model="filters.type"
              :options="promotionTypes"
              option-label="name"
              option-value="type"
              multiple
              @value-change="applyFilters"
            >
              <template #option="{ option }">
                <span class="inline-flex gap-2">{{ option.name }} <IconCircleCross class="group-p-checked:inline hidden" /></span>
              </template>
            </SelectButton>
          </form>
        </div>
      </template>
      <div v-if="promotions.length" class="grid gap-2 md:grid-cols-2 md:gap-4 lg:gap-8 xl:grid-cols-3">
        <article
          v-for="promo in promotions"
          :key="promo.id"
          class="rounded-20 flex flex-col justify-between gap-23 bg-cover bg-center bg-no-repeat p-3 text-white md:p-4"
          :style="{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${promo.image.path})`,
          }"
        >
          <div class="flex items-center justify-between">
            <p
              class="text-complimentary-reg md:text-subsidiary-reg rounded-20 border-complimentary w-fit border bg-[#e5e5e5]/10 p-1 backdrop-blur-[10px] md:px-3 md:py-2"
            >
              {{ promo.type }}
            </p>
            <div class="flex items-center gap-1 md:gap-2">
              <!--              <div class="bg-text/80 rounded-full p-1.5 md:p-2">-->
              <!--                <IconShare class="max-md:h-3 max-md:w-3" />-->
              <!--              </div>-->
              <VShare :url="route('promotion.show', { promotion: promo.id })" />
              <p class="bg-delete text-complimentary-reg md:text-subsidiary-medium rounded-full p-1">
                {{ t('promo_page.daysLeft', promo.days_left) }}
              </p>
              <p class="bg-delete text-complimentary-bold md:text-subsidiary-medium rounded-full p-1">-{{ promo.sale_percent }}%</p>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-default-bold md:text-heavy-bold">{{ promo.name }}</h3>
            <p class="text-subsidiary-medium md:text-mob-small-medium line-clamp-3">
              {{ promo.short_description }}
            </p>
            <div class="mt-1 flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
              <div class="flex flex-row items-center gap-2 md:flex-col md:items-start">
                <span class="text-subsidiary-reg text-filling">Акция действует до:</span>
                <span class="text-mob-small-bold">{{ promo.end_date }}</span>
              </div>
              <Link :href="route('promotion.show', promo.id)">
                <VButton :label="t('promo_page.buyWithDiscount')" variant="light" />
              </Link>
            </div>
          </div>
        </article>
      </div>
      <EmptyPlug v-else class="mx-auto" />
    </VSection>
  </VContainer>
</template>

<style scoped></style>
