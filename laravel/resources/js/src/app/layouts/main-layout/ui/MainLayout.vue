<script setup lang="ts">
import type { IReview } from '@/entities/review';

import { Link, usePage } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';
import { YandexMapDefaultMarker } from 'vue-yandex-maps';

import IconArrowDownRight from '@/shared/icons/IconArrowDownRight.svg';
import IconCheckCircleGray from '@/shared/icons/IconCheckCircleGray.svg';
import IconClockFilled from '@/shared/icons/IconClockFilled.svg?skipsvgo';
import IconClockOutline from '@/shared/icons/IconClockOutline.svg?skipsvgo';
import IconGlobeOutline from '@/shared/icons/IconGlobeOutline.svg?skipsvgo';
import IconMapPinFilled from '@/shared/icons/IconMapPinFilled.svg?skipsvgo';
import IconMapPinOutline from '@/shared/icons/IconMapPinOutline.svg?skipsvgo';
import IconPhoneCall from '@/shared/icons/IconPhoneCall.svg?skipsvgo';
import IconTruckFilled from '@/shared/icons/IconTruckFilled.svg?skipsvgo';
import { personInitials } from '@/shared/lib/helpers/personInitials';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VContainer } from '@/shared/ui/container';
import { VSection } from '@/shared/ui/section';
import { VNavigationButton } from '@/shared/ui/slider';
import Avatar from '@/shared/ui/volt/Avatar.vue';
import Rating from '@/shared/ui/volt/Rating.vue';
import { VMap } from '@/shared/ui/yandex-map';

import { DefaultLayout } from '../../default-layout';

const page = usePage<{ reviews: IReview[] }>();

const { isMobile, isTablet } = useScreenSize();
const { t } = useI18n();
</script>

<template>
  <DefaultLayout>
    <slot />
    <VContainer class="mt-6 md:mt-20">
      <VSection v-if="page.props.reviews.length > 0" class="bg-light-gray md:rounded-e-20 rounded-e-none !p-0 md:ml-2 lg:ml-0">
        <template #header>
          <header class="flex items-center justify-between gap-4 px-4 pt-4 lg:px-8 lg:pt-8">
            <h2 class="text-heavy-bold">{{ t('main_page.user_reviews') }}</h2>
            <VNavigationButton v-if="!isMobile" slider-key="reviews" />
          </header>
        </template>
        <div class="overflow-hidden">
          <swiper-container
            :navigation="{
              nextEl: '.slider-next-reviews',
              prevEl: '.slider-prev-reviews',
            }"
            :breakpoints="{
              0: { slidesPerView: 1.4, spaceBetween: 8 },
              768: { slidesPerView: 3, spaceBetween: 16 },
              1280: { slidesPerView: 4, spaceBetween: 32 },
            }"
            loop="true"
            slide-active-class="sm:shadow-[0_10px_30px_0_rgba(0,0,0,0.1)]"
            class="ml-4 lg:ml-0 lg:w-[calc(100%_-_64px)]"
          >
            <template v-for="review in page.props.reviews" :key="review.id">
              <swiper-slide class="rounded-20 flex h-auto flex-col md:w-full md:max-w-88">
                <article class="rounded-20 flex h-full flex-col gap-3 bg-white p-4">
                  <div class="flex items-center justify-between gap-3">
                    <div class="flex items-center gap-2">
                      <Avatar shape="circle" :label="review.userName ? personInitials(review.userName) : ''" />
                      <span class="text-subsidiary-medium text-text">{{ review.userName }}.</span>
                    </div>
                    <span class="text-complimentary-bold text-[#867F7F]">{{ review.created_at }}</span>
                  </div>
                  <div class="flex flex-col gap-2">
                    <div class="flex h-[22px] items-center gap-2 text-base/[22px] font-semibold">
                      <Rating :default-value="review.rating" readonly />
                      {{ review.rating }}
                    </div>
                    <h3 class="text-complimentary-bold text-[#AC9B58]">{{ review.name }}</h3>
                  </div>
                  <p class="text-subsidiary-reg flex-grow">
                    {{ review.text }}
                  </p>
                </article>
              </swiper-slide>
            </template>
          </swiper-container>
        </div>
      </VSection>
      <VSection>
        <div class="mt-6 gap-8 max-xl:grid max-xl:grid-cols-2 max-sm:flex max-sm:flex-col-reverse md:mt-20 xl:flex xl:flex-row">
          <div class="">
            <h2 class="text-default-bold sm:text-heavy-bold">{{ t('home_delivery_info.title') }}</h2>
            <p class="max-sm:text-subsidiary-reg max-sm:mt-3">{{ t('home_delivery_info.after_title') }}</p>
            <div class="mt-4 sm:mt-8">
              <ul class="flex flex-col gap-3 sm:gap-6">
                <li class="max-sm:text-subsidiary-reg flex gap-2">
                  <span><IconArrowDownRight /></span>
                  <p>{{ t('home_delivery_info.arrow_text_first') }}</p>
                </li>
                <li class="max-sm:text-subsidiary-reg flex gap-2">
                  <span><IconArrowDownRight /></span>
                  <p>{{ t('home_delivery_info.arrow_text_second') }}</p>
                </li>
                <li class="max-sm:text-subsidiary-reg flex gap-2">
                  <span> <IconArrowDownRight /></span>
                  <p>{{ t('home_delivery_info.arrow_text_third') }}</p>
                </li>
              </ul>
            </div>
            <Link :href="route('faq.faq.index')" class="w-full">
              <VButton v-if="isMobile" label="Подробнее" class="mt-4 w-full" />
            </Link>
          </div>
          <div class="flex flex-col gap-2">
            <div class="bg-light-gray flex gap-2 rounded-2xl p-4">
              <div>
                <IconClockFilled />
              </div>
              <div>
                <h4 class="text-small-medium">{{ t('home_delivery_info.intervals_title') }}</h4>
                <div class="mt-2">
                  <p class="text-subsidiary-reg sm:text-mob-small">09:00 – 21:00</p>
                  <p class="text-complimentary-reg text-subsidiary">{{ t('home_delivery_info.intervals_subtitle') }}</p>
                </div>
              </div>
            </div>
            <div class="bg-light-gray flex gap-2 rounded-2xl p-4">
              <div>
                <IconMapPinFilled />
              </div>
              <div>
                <h4 class="text-small-medium">{{ t('home_delivery_info.regions_title') }}</h4>
                <div class="mt-2">
                  <ul class="text-subsidiary-reg sm:text-mob-small grid grid-flow-col grid-rows-2 gap-2 text-nowrap">
                    <li class="flex items-center gap-1 sm:gap-2">
                      <IconCheckCircleGray />
                      Москва
                    </li>
                    <li class="flex items-center gap-1 sm:gap-2">
                      <IconCheckCircleGray />
                      Сочи
                    </li>
                    <li class="flex items-center gap-1 sm:gap-2">
                      <IconCheckCircleGray />
                      Санкт-Петербург
                    </li>
                    <li class="flex items-center gap-1 sm:gap-2">
                      <IconCheckCircleGray />
                      Нижний Новгород
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="bg-light-gray flex gap-2 rounded-2xl p-4">
              <div>
                <IconTruckFilled />
              </div>
              <div>
                <h4 class="text-small-medium">{{ t('home_delivery_info.order_title') }}</h4>
                <div class="mt-2">
                  <a href="tel:+7 800 101-47-28" class="text-mob-small-bold">+7 800 101-47-28</a>
                  <p class="text-subsidiary-reg sm:text-mob-small">с 10:00 до 20:00</p>
                  <p class="text-complimentary-reg text-subsidiary">{{ t('home_delivery_info.order_weekends') }}</p>
                  <p class="text-subsidiary-reg sm:text-mob-small">{{ t('home_delivery_info.order_online') }}</p>
                </div>
              </div>
            </div>
            <Link :href="route('faq.faq.index')" class="w-full">
              <VButton v-if="!isMobile" :label="t('home_delivery_info.button_more')" class="w-full" />
            </Link>
          </div>
          <div class="bg-light-gray flex flex-col gap-4 rounded-2xl p-4">
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <h4 class="text-small-medium">Москва</h4>
                <div class="bg-default text-complimentary-reg rounded-3xl px-3 py-2 text-white">
                  {{ t('home_delivery_info.pickup_point') }}
                </div>
              </div>
              <div class="text-mob-small-reg mt-3 flex flex-col gap-2">
                <div class="flex items-center gap-2">
                  <IconPhoneCall />
                  <a href="tel:8-499-938-90-10" class="text-mob-small-bold">8-499-938-90-10</a>
                </div>
                <div class="flex items-center gap-2">
                  <IconClockOutline />
                  <p>{{ t('home_delivery_info.open_for') }} 20:00</p>
                </div>
                <div class="flex items-center gap-2">
                  <IconMapPinOutline />
                  <p>{{ t('home_delivery_info.pickup_point_moscow_address') }}</p>
                </div>
                <div class="flex items-center gap-2">
                  <IconGlobeOutline />
                  <a href="https://shop.primefoods.ru" target="_blank">shop.primefoods.ru</a>
                </div>
              </div>
            </div>
            <div class="mx-auto mt-4 overflow-hidden rounded-xl lg:mx-0 lg:mt-auto">
              <VMap v-if="isMobile || isTablet" :zoom="16" :center="[37.428551, 55.697471]" width="280px" height="204px" />
              <VMap v-else :zoom="16" :center="[37.428551, 55.697471]" width="320px" height="204px" />
            </div>
          </div>
          <div class="bg-light-gray flex flex-col gap-4 rounded-2xl p-4">
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <h4 class="text-small-medium">Санкт-Петербург</h4>
                <div class="bg-default text-complimentary-reg rounded-3xl px-3 py-2 text-white">
                  {{ t('home_delivery_info.meat_store') }}
                </div>
              </div>
              <div class="text-mob-small-reg mt-3 flex flex-col gap-2">
                <div class="flex items-center gap-2">
                  <IconPhoneCall />
                  <a href="tel:+7 800 101-47-28" class="text-mob-small-bold">+7 800 101-47-28</a>
                </div>
                <div class="flex items-center gap-2">
                  <IconClockOutline />
                  <p>{{ t('home_delivery_info.open_for') }} 18:00</p>
                </div>
                <div class="flex items-center gap-2">
                  <IconMapPinOutline />
                  <p>{{ t('home_delivery_info.pickup_point_spb_address') }}</p>
                </div>
                <div class="flex items-center gap-2">
                  <IconGlobeOutline />
                  <a href="https://shop.primefoods.ru" target="_blank">shop.primefoods.ru</a>
                </div>
              </div>
            </div>
            <div class="mx-auto mt-4 overflow-hidden rounded-xl lg:mx-0 lg:mt-auto">
              <VMap v-if="isMobile || isTablet" :zoom="16" :center="[30.363874, 59.969486]" width="280px" height="204px">
                <template #marker>
                  <yandex-map-default-marker :settings="{ coordinates: [30.363874, 59.969486], title: 'Прайм Фудс' }" />
                </template>
              </VMap>
              <VMap v-else :zoom="16" :center="[30.363874, 59.969486]" width="320px" height="204px">
                <template #marker>
                  <yandex-map-default-marker :settings="{ coordinates: [30.363874, 59.969486], title: 'Прайм Фудс' }" />
                </template>
              </VMap>
            </div>
          </div>
        </div>
      </VSection>
    </VContainer>
  </DefaultLayout>
</template>

<style scoped>
swiper-container::part(container) {
  padding: 32px;
}

@media (max-width: 1023px) {
  swiper-container::part(container) {
    padding: 16px 16px 16px 0;
    width: calc(100% - 16px);
  }
}
</style>
