<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { computed, ref, useTemplateRef } from 'vue';
import { useI18n } from 'vue-i18n';

import { ProfileLayout } from '@/app/layouts';
import { ProductCard } from '@/entities/products';
import { AddToFavorite } from '@/features/Product/add-to-favorite';
import { AddToCart } from '@/features/Product/manage-cart';
import { IProfilePrivilegePageProps } from '@/pages/profile/profile-privilege-program/model/privilegePageProps';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg';
import IconFire from '@/shared/icons/IconFire.svg';
import IconTable from '@/shared/icons/IconTable.svg';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VNavigationButton, VSlider } from '@/shared/ui/slider';
import ProgressBar from '@/shared/ui/volt/ProgressBar.vue';
import { BonusCard } from '@/widgets/bonus-card';
import { ReferralModal } from '@/widgets/referral-modal';

const { t } = useI18n();

defineOptions({
  layout: ProfileLayout,
});

const props = defineProps<IProfilePrivilegePageProps>();

const getGridClasses = computed(() => {
  return props.photoCategories.map((_, index) => {
    if (isCategoriesMobile.value) {
      switch (index) {
        case 0:
          return 'col-span-2 row-span-1';
        case 1:
          return 'col-span-2';
        case 2:
          return 'row-span-1 outline outline-text';
        case 3:
          return 'col-span-1 col-start-1 row-start-4';
        case 4:
          return 'col-span-1 outline outline-text';
        case 5:
          return 'row-start-2 outline outline-text';
        case 6:
          return 'row-start-2';
        case 7:
          return 'col-span-2 row-start-5';
        case 8:
          return 'col-span-1 row-span-1';
        default:
          return '';
      }
    } else {
      switch (index) {
        case 0:
          return 'col-span-6 row-span-4';
        case 1:
          return 'col-span-4 row-span-2 col-start-7 pb-8';
        case 2:
          return 'col-span-5 row-span-2 col-start-11 outline outline-text pb-8';
        case 3:
          return 'col-span-2 row-span-2 col-start-7 row-start-3';
        case 4:
          return 'col-span-7 row-span-2 col-start-9 row-start-3 outline outline-text';
        case 5:
          return 'col-span-5 row-span-3 col-start-11 row-start-5 outline outline-text';
        case 6:
          return 'col-span-3 row-span-3 col-start-4 row-start-5';
        case 7:
          return 'col-span-4 row-span-3 col-start-7 row-start-5';
        case 8:
          return 'col-span-3 row-span-3 row-start-5 pb-8';
        default:
          return '';
      }
    }
  });
});

const { isCategoriesMobile, isCategoriesTablet } = useScreenSize();

const isReferralModalOpen = ref<boolean>(false);
const referralModalRef = useTemplateRef('referralModalRef');

const openReferralModal = (): void => {
  referralModalRef.value?.openModal();
};
</script>

<template>
  <div class="flex w-full flex-col gap-6 max-md:p-6 md:gap-8 lg:min-w-0 lg:flex-1">
    <h1 class="text-default-bold">Программа привилегий</h1>
    <section class="flex flex-col gap-8">
      <nav class="grid gap-2 md:grid-cols-2">
        <div
          class="flex justify-between rounded-2xl p-3 transition-colors duration-300"
          :class="oldestBonusCount ? 'bg-[#F04E2714]' : 'bg-input hover:bg-filling'"
        >
          <div class="flex gap-2">
            <IconFire class="h-6 w-6" :class="oldestBonusCount ? 'text-delete' : 'text-additional'" />
            <div>
              <h5 class="text-mob-small-medium">
                Скоро сгорят <span v-if="!oldestBonusCount" class="text-additional">0 баллов</span>
                <span v-else class="text-delete">{{ t('profile.points', oldestBonusCount) }}</span>
              </h5>
              <p class="text-subsidiary-reg text-additional mt-0.5">
                Баллы действуют {{ oldestBonusCount ? `до ${expireDate}` : '90 дней ' }} <br />
                Успейте потратить!
              </p>
            </div>
          </div>
        </div>
        <Link
          :href="route('user.profile.bonus.history')"
          class="bg-input hover:bg-filling flex justify-between rounded-2xl p-3 transition-colors duration-300"
        >
          <div class="flex gap-2">
            <IconTable class="text-additional h-6 w-6" />
            <div>
              <h5 class="text-mob-small-medium">История начисления и использования баллов</h5>
            </div>
          </div>
          <IconCaretRight />
        </Link>
      </nav>
      <div class="grid gap-8 lg:grid-cols-2">
        <BonusCard
          :card-number="userBonusCard.number"
          :card-level="userBonusCard.level"
          :cashback="userBonusCard.cashback + '%'"
          :card-balance="userBonusCard.amount"
        />
        <div class="bg-text rounded-20 flex flex-col justify-between p-4 text-white">
          <div class="flex flex-col gap-2">
            <h3 class="font-vast text-vast-additional md:text-vast-mob-title-bold font-bold">Пригласи друга</h3>
            <p class="text-subsidiary-reg md:text-mob-small-reg">Пригласи друга и получи 500 баллов</p>
          </div>
          <div class="flex flex-col gap-4 max-lg:mt-8">
            <VButton label="Пригласить" variant="light" class="w-fit" @click="openReferralModal" />
            <p class="text-complimentary-reg text-additional">
              Бонусы будут начислены после того, как приглашенный пользователь совершит первую покупку. Приглашенный пользователь также получает
              приветственные бонусы.
            </p>
          </div>
        </div>
      </div>
      <div class="bg-light-gray grid gap-4 rounded-2xl p-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-0.5">
        <div v-for="level in levels" :key="level.id" class="flex flex-col gap-0.5">
          <h4 class="text-mob-small-medium">
            {{ level.name }} <span class="text-default">CASHBACK {{ level.discount_percent }}%</span>
          </h4>
          <p class="text-additional text-complimentary-reg">
            Сумма заказов за последние 3 месяца {{ level.from ? `от ${level.from}` : '' }}
            {{ level.id === 3 ? 'руб' : '' }}
            {{ level.to ? `до ${level.to} руб` : '' }}
          </p>
          <ProgressBar :value="level.progress" :show-value="false" />
          <span v-if="level.name === currentLevel && level.name !== 'Well Done'" class="text-complimentary-reg">До следующего уровня {{ pointsToNext }} руб</span>
          <span v-else-if="level.name === currentLevel && level.name === 'Well Done'" class="text-complimentary-reg">Вы достигли максимального статуса в Программе лояльности</span>
        </div>
      </div>
    </section>
    <section v-if="banners?.length" class="flex flex-col gap-4">
      <h2 class="text-small-medium">Доступные акции и специальные предложения</h2>
      <div class="relative overflow-hidden rounded-[40px]">
        <swiper-container
          space-between="32"
          loop="true"
          :navigation="{
            nextEl: '.slider-next-main',
            prevEl: '.slider-prev-main',
          }"
        >
          <swiper-slide v-for="banner in banners" :key="banner.id">
            <div
              class="bg-additional relative rounded-[40px] bg-cover bg-bottom bg-no-repeat p-6 md:bg-center md:p-8"
              :style="{
                backgroundImage: `url(${banner.image.path})`,
              }"
            >
              <div class="h-full max-md:mt-8">
                <div class="flex h-full flex-col justify-between text-white">
                  <div>
                    <div v-if="banner.promotion_days_left" class="bg-delete text-subsidiary-medium mb-3 w-fit rounded-[100px] px-2 py-1 text-white">
                      Еще {{ banner.promotion_days_left }} дней
                    </div>
                    <h3 v-if="banner.title" class="font-vast text-vast-additional min-[900px]:text-vast-title-bold mb-3 font-bold uppercase">
                      {{ banner.title }}
                    </h3>
                    <p v-if="banner.description" class="text-subsidiary-medium md:text-mob-small-medium">{{ banner.description }}</p>
                    <p v-if="banner.addition_description" class="text-subsidiary-reg md:text-mob-small-reg mt-2">
                      {{ banner.addition_description }}
                    </p>
                  </div>
                  <Link v-if="banner.link_url && banner.button_text" :href="banner.link_url">
                    <VButton :label="banner.button_text" variant="light" class="mt-8 w-full md:w-fit" />
                  </Link>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
        <VNavigationButton class="absolute top-4 right-4 z-10" slider-key="main" />
      </div>
    </section>
    <section v-if="noveltyProducts?.length" class="flex flex-col gap-4">
      <h2 class="text-default-bold">Новинки</h2>
      <VSlider
        :slides="noveltyProducts"
        :slider-options="{
          allowTouchMove: true,
          slidesPerView: 1.7,
          spaceBetween: 8,
          breakpoints: {
            0: { slidesPerView: 1.7, spaceBetween: 8 },
            640: { slidesPerView: 2, spaceBetween: 12 },
            1080: { slidesPerView: 3, spaceBetween: 24 },
            1440: { slidesPerView: 4, spaceBetween: 32 },
          },
        }"
      >
        <template #slide="{ slide }">
          <ProductCard
            :id="slide.id"
            :key="slide.id"
            :has-gift="slide.is_have_gift"
            :title="slide.name"
            :slug="slide.slug"
            :images="slide.images.map((i) => i.path)"
            :weight="slide.weight"
            :description="slide.short_description"
            :is-favorite="slide.is_wishlist"
            :is-new="slide.is_new"
            :sale-percent="slide.sale_percent"
            :categories="slide.tags.map((b) => b.name) ?? []"
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
    </section>
    <section v-if="photoCategories?.length" class="flex flex-col gap-4">
      <h2 class="text-default-bold">{{ t('main_page.product_categories') }}</h2>
      <div
        v-if="!isCategoriesMobile"
        :class="['grid gap-3', !isCategoriesTablet ? 'grid-cols-11 grid-rows-6' : 'grid-cols-10 grid-rows-[140px_140px]']"
      >
        <Link
          v-for="(category, index) in photoCategories"
          :key="category.id"
          :href="`/catalog/?category=${category.category_slug}`"
          :class="[
            getGridClasses[index],
            'rounded-20 hover:outline-stroke overflow-hidden bg-cover bg-center bg-no-repeat transition-shadow duration-300 ease-in hover:shadow-xl hover:outline',
          ]"
          :style="{ backgroundImage: `url('${category.desktop_photo}')` }"
        >
          <h2
            class="font-vast z-10 max-w-[201px] px-4 pt-4 font-bold uppercase"
            :style="{ color: category.text_color, fontSize: category.desktop_font_size, lineHeight: category.desktop_line_height }"
          >
            {{ category.name }}
          </h2>
          <p v-if="category.description" class="text-subsidiary-reg mt-1 max-w-[150px] pl-4">
            {{ category.description }}
          </p>
        </Link>
      </div>

      <div v-else :class="['grid gap-3', 'auto-rows-[140px] grid-cols-2']">
        <Link
          v-for="(category, index) in photoCategories"
          :key="category.id"
          :href="`/catalog/?category=${category.category_slug}`"
          :class="[
            getGridClasses[index],
            'rounded-20 hover:outline-stroke overflow-hidden bg-size-[100%_100%] bg-center bg-no-repeat transition-shadow duration-300 ease-in hover:shadow-xl hover:outline',
          ]"
          :style="{ backgroundImage: `url('${category.mobile_photo}')` }"
        >
          <h2
            class="font-vast z-10 px-2 pt-2 font-bold uppercase"
            :style="{ color: category.text_color, fontSize: category.mobile_font_size, lineHeight: category.mobile_line_height }"
          >
            {{ category.name }}
          </h2>
          <p v-if="category.description" class="text-subsidiary-reg mt-1 max-w-[150px] pl-2">
            {{ category.description }}
          </p>
        </Link>
      </div>
    </section>
    <ReferralModal ref="referralModalRef" v-model:visible="isReferralModalOpen" />
  </div>
</template>

<style scoped></style>
