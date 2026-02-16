<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { ref, useTemplateRef } from 'vue';
import { useI18n } from 'vue-i18n';

import { ProfileLayout } from '@/app/layouts';
import { IDelivery } from '@/entities/order';
import { IOrderedProduct } from '@/entities/products/model/product';
import { IUser } from '@/entities/user';
import { IUserBonusCard } from '@/entities/user/model/userTypes';
import { AddToCart } from '@/features/Product/manage-cart';
import { TBanner } from '@/shared/banner';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg';
import IconChats from '@/shared/icons/IconChats.svg';
import IconCheckCircle from '@/shared/icons/IconCheckCircle.svg';
import IconQuestion from '@/shared/icons/IconQuestion.svg';
import IconRepeat from '@/shared/icons/IconRepeat.svg';
import IconXCircle from '@/shared/icons/IconXCircleWhite.svg';
import { Nullable } from '@/shared/lib/utility-types/Nullable';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VPicture } from '@/shared/ui/picture';
import { VScrollPanel } from '@/shared/ui/scroll-panel';
import { VSlider } from '@/shared/ui/slider';
import { BonusCard } from '@/widgets/bonus-card';
import { ReferralModal } from '@/widgets/referral-modal';

const { t } = useI18n();

defineOptions({
  layout: ProfileLayout,
});

const props = defineProps<{
  auth: { user: IUser };
  orderedProducts: IOrderedProduct[];
  deliveries: IDelivery[];
  userBonusCard: IUserBonusCard;
  itemsWithoutReviewCount: number;
  flash: { success: Nullable<string>; message: Nullable<string> };
  second_banners: TBanner[];
  first_banners: TBanner[];
}>();

const { isMobile } = useScreenSize();

const showMessage = ref<boolean>(false);

const isReferralModalOpen = ref<boolean>(false);
const referralModalRef = useTemplateRef('referralModalRef');

const openReferralModal = (): void => {
  referralModalRef.value?.openModal();
};

if (props.flash.success) {
  showMessage.value = true;
}
</script>

<template>
  <div class="w-full max-md:p-6">
    <div v-if="!isMobile && showMessage" class="bg-push-green text-mob-small-reg mb-2 flex items-center justify-between rounded-lg p-2">
      <div class="flex items-center gap-2">
        <IconCheckCircle class="text-ready-green h-5 w-5" />
        <span>{{ flash.success }}</span>
      </div>
      <button class="cursor-pointer" @click="showMessage = false">
        <IconXCircle class="h-5 w-5" />
      </button>
    </div>
    <nav class="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4">
      <Link
        :href="route('promotion.index')"
        class="bg-input hover:bg-filling flex shrink-0 items-center rounded-2xl p-3 pb-10 transition-colors duration-300"
      >
        <div>
          <h5 class="text-mob-small-bold md:text-default-bold lg:text-nowrap">Промокоды и акции</h5>
          <p v-if="!isMobile" class="text-subsidiary-reg text-additional mt-1">Больше выгоды от покупок</p>
        </div>
        <VPicture src="/images/profile/SalePercent.png" alt="SalePercent" width="74px" class="-mb-14" />
        <IconCaretRight />
      </Link>
      <Link
        :href="route('user.profile.white_list')"
        class="bg-input hover:bg-filling flex items-center justify-between rounded-2xl p-3 pb-10 transition-colors duration-300"
      >
        <div>
          <h5 class="text-mob-small-bold md:text-default-bold">Избранное</h5>
          <p v-if="!isMobile" class="text-subsidiary-reg text-additional mt-1">Любимые товары</p>
        </div>
        <VPicture src="/images/profile/Heart.png" alt="SalePercent" width="74px" class="-mb-14" />
        <IconCaretRight />
      </Link>
      <Link
        :href="route('user.profile.white_list')"
        :data="{ tab: 'recipes' }"
        class="bg-input hover:bg-filling flex shrink-0 items-center rounded-2xl p-3 pb-10 transition-colors duration-300"
      >
        <div>
          <h5 class="text-mob-small-bold md:text-default-bold lg:text-nowrap">Любимые рецепты</h5>
          <p v-if="!isMobile" class="text-subsidiary-reg text-additional mt-1">от шеф-повара</p>
        </div>
        <VPicture src="/images/profile/Grill.webp" alt="SalePercent" width="74px" class="-mb-14" />
        <IconCaretRight />
      </Link>
      <Link
        :href="route('user.profile.reviews')"
        class="bg-input hover:bg-filling flex items-center justify-between rounded-2xl p-3 pb-10 transition-colors duration-300"
      >
        <div>
          <h5 class="text-mob-small-bold md:text-default-bold">{{ t('profile.waiting_reviews') }}</h5>
          <p v-if="!isMobile" class="text-subsidiary-reg text-additional mt-1">
            {{ t('profile.waiting_reviews_little', itemsWithoutReviewCount) }}
          </p>
        </div>
        <VPicture src="/images/profile/Stars.png" alt="Stars" width="74px" class="-mb-14" />
        <IconCaretRight />
      </Link>
    </nav>

    <div class="mt-8 flex flex-col gap-8 min-[1568px]:flex-row min-[1568px]:items-stretch">
      <div class="flex flex-1 flex-col gap-2 lg:gap-6">
        <div v-if="!deliveries.length" class="bg-light-gray rounded-20 p-4">
          <h3 class="text-default-bold">Доставка</h3>
          <p class="text-additional text-subsidiary-medium mt-0.5">Доставка не ожидается</p>
          <div class="mt-8 flex items-center gap-2 max-md:pb-12 md:mt-6 md:gap-8">
            <VPicture src="/images/test-images/image_package.webp" alt="Package" :width="isMobile ? '60px' : '124px'" />
            <p class="text-small-medium md:text-default-medium">Здесь покажем ближайшие доставки</p>
          </div>
        </div>
        <div v-else class="max-lg:mb-4 min-[1568px]:max-w-[600px] lg:max-[1568px]:max-w-[calc(99svw_-_64px_-_352px_-_32px)]">
          <VSlider
            :slides="deliveries"
            :slider-options="{
              allowTouchMove: true,
              breakpoints: {
                0: { slidesPerView: 1, spaceBetween: 0 },
              },
            }"
          >
            <template #slide="{ slide }">
              <article class="bg-light-gray rounded-20 flex h-full flex-col gap-4 p-2 md:p-4">
                <div class="flex flex-col justify-between gap-2 lg:flex-row lg:items-center">
                  <h5 class="text-default-bold">Доставка рассчитывается</h5>
                  <div
                    class="text-mob-small-medium rounded-lg px-3 py-2"
                    :class="{
                      'bg-full': slide.status === 'В обработке' || slide.status === 'Новый' || slide.status === 'Ожидает оплаты',
                      'bg-[#CEE9F9]':
                        slide.status === 'Оплачен' ||
                        slide.status === 'В работе/в сборке' ||
                        slide.status === 'Подтвержден' ||
                        slide.status === 'Отправлен/в пути',
                      'bg-push-green': slide.status === 'Выполнен' || slide.status === 'Готов к выдаче',
                      'bg-[#ED1C241A]': slide.status === 'Отменён',
                    }"
                  >
                    <span class="text-subsidiary-medium text-additional">Статус заказа: </span>
                    <span>{{ slide.status }}</span>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <p class="text-additional text-subsidiary-medium">
                    Заказ: <span class="text-text text-mob-small-medium">{{ slide.id }}</span>
                  </p>
                  <p class="text-additional text-subsidiary-medium">
                    от: <span class="text-text text-mob-small-medium">{{ slide.created_at }}</span>
                  </p>
                </div>
                <div class="flex flex-col justify-between gap-1 lg:flex-row lg:items-center">
                  <p class="text-small-medium lg:text-default-medium">
                    {{ t('profile.delivery_total') }}
                    {{ t('profile.delivery_description', slide.product_count) }}
                    {{ slide.order_price }} руб
                  </p>
                  <Link
                    :href="route('user.profile.orders.history.show', slide.id)"
                    class="text-subsidiary-reg bg-filling rounded-20 hover:bg-default flex w-fit flex-shrink-0 items-center gap-2 px-3 py-2 transition-colors duration-300 hover:text-white"
                  >
                    <span>Подробнее</span>
                    <IconCaretRight />
                  </Link>
                </div>
              </article>
            </template>
          </VSlider>
        </div>
        <template v-if="isMobile">
          <BonusCard
            :card-number="userBonusCard.number"
            :card-level="userBonusCard.level"
            :cashback="userBonusCard.cashback + '%'"
            :card-balance="userBonusCard.amount"
          />

          <div
            class="border-text rounded-20 bg-light-gray mt-2 flex cursor-pointer items-center justify-between gap-8 border p-4"
            @click="openReferralModal"
          >
            <div>
              <h5 class="text-small-medium">Пригласить друга</h5>
              <p class="text-subsidiary-reg mt-1 font-light">+500 баллов вам, другу - приветственный бонус</p>
            </div>
            <VPicture src="/images/imageGift.png" alt="logo" width="60px" height="" />
          </div>
        </template>
        <div class="bg-light-gray rounded-20 p-4 max-lg:mt-4">
          <div class="flex items-center justify-between">
            <h3 class="text-default-bold">Вы недавно заказывали</h3>
            <Link
              v-if="orderedProducts && !isMobile"
              :href="route('user.profile.orders_history')"
              class="text-subsidiary-reg bg-filling rounded-20 hover:bg-default flex flex-shrink-0 items-center gap-2 px-3 py-2 transition-colors duration-300 hover:text-white"
            >
              <span>Все заказы</span>
              <IconCaretRight />
            </Link>
          </div>
          <div v-if="orderedProducts.length === 0" class="my-4 flex items-start gap-8 md:items-center lg:my-26">
            <VPicture src="/images/test-images/EmptyCart.webp" alt="Package" :width="isMobile ? '60px' : '124px'" />
            <div>
              <p class="text-mob-small-medium md:text-default-medium max-md:max-w-[200px]">
                Здесь покажем ваши заказы <br v-if="!isMobile" />
                за последнее время
              </p>
              <VButton label="В каталог" class="mt-8" />
            </div>
          </div>
          <div v-else class="mt-4">
            <VScrollPanel class="max-h-[305px]">
              <article
                v-for="product in orderedProducts"
                :key="product.id"
                class="border-b-filling flex flex-col justify-between gap-4 border-b py-3 last:border-b-0 md:flex-row md:items-center"
              >
                <div class="flex items-center gap-4">
                  <VPicture
                    v-if="product.item.images[0]?.path"
                    :src="product.item.images[0].path"
                    alt="product_image"
                    :width="isMobile ? '74px' : '116px'"
                    :height="isMobile ? '64px' : '80px'"
                    class="flex-shrink-0"
                    img-classes="rounded-lg"
                  />
                  <VPicture
                    v-else
                    src="/images/productPlaceholder.png"
                    alt="productPlaceholder"
                    :width="isMobile ? '74px' : '116px'"
                    :height="isMobile ? '64px' : '80px'"
                    class="flex-shrink-0"
                    img-classes="rounded-lg"
                  />
                  <div class="flex flex-col justify-between gap-3">
                    <h4 class="text-mob-small-bold line-clamp-2">{{ product.item.name }}</h4>
                    <div v-if="!!product.unit_sale_percent" class="flex items-center gap-4">
                      <div class="flex flex-col gap-0.5">
                        <span class="text-subsidiary text-complimentary-reg line-through"
                          >{{ product.price_for_unit }} {{ product.item.price_type }}</span
                        >
                        <span class="text-mob-small-bold">{{ product.price_for_unit_without_sale }} {{ product.item.price_type }} </span>
                      </div>
                      <div v-if="product.unit_sale_percent" class="bg-delete text-complimentary-reg rounded-20 px-2 py-1 text-white">
                        -{{ product.unit_sale_percent }}%
                      </div>
                    </div>
                    <span v-else class="text-mob-small-bold"> {{ product.item.price }} {{ product.item.price_type }} </span>
                  </div>
                </div>
                <AddToCart :id="product.item.id" :is-combo="product.type === 'Combo'" retry class="text-nowrap" />
              </article>
            </VScrollPanel>
          </div>
        </div>
      </div>
      <div class="flex max-w-full flex-col gap-6 min-[1568px]:max-w-120 lg:max-[1568px]:max-w-[calc(99dvw_-_64px_-_352px_-_32px)]">
        <BonusCard
          v-if="!isMobile"
          :card-number="userBonusCard.number"
          :card-level="userBonusCard.level"
          :cashback="userBonusCard.cashback + '%'"
          :card-balance="userBonusCard.amount"
        />

        <VSlider
          :slider-options="{
            spaceBetween: 20,
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
            },
          }"
          :slides="first_banners"
        >
          <template #slide="{ slide }">
            <div
              :style="{ backgroundImage: `url(${slide.image.path}), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))` }"
              class="rounded-20 flex h-full flex-col justify-between gap-3 bg-[url(/images/privilege_banner.webp)] bg-cover bg-center bg-no-repeat p-4 text-white bg-blend-color"
            >
              <div>
                <p class="text-subsidiary-medium md:text-mob-small-medium mb-3">{{ slide.description }}</p>
                <h4 class="font-vast text-vast-mob-title-bold mb-1">{{ slide.title }}</h4>
                <p class="text-subsidiary-medium md:text-mob-small-reg">{{ slide.addition_description }}</p>
              </div>
              <Link v-if="slide.button_text && slide.link_url" :href="slide.link_url">
                <VButton :label="slide.button_text" variant="light" class="w-full" />
              </Link>
            </div>
          </template>
        </VSlider>
        <!--          <div class="bg-text rounded-20 mt-2 flex justify-between p-4 text-white">-->
        <!--            <p class="text-small-medium">Подарочная карта</p>-->
        <!--            <VPicture src="/images/logo.png" alt="logo" width="50px" height="" />-->
        <!--          </div>-->
        <div
          v-if="!isMobile"
          class="border-text rounded-20 bg-light-gray flex cursor-pointer items-center justify-between gap-8 border p-4"
          @click="openReferralModal"
        >
          <div>
            <h5 class="text-small-medium">Пригласить друга</h5>
            <p class="text-subsidiary-reg mt-1 font-light">+500 баллов вам, другу - приветственный бонус</p>
          </div>
          <VPicture src="/images/imageGift.png" alt="logo" width="60px" height="" />
        </div>

        <VSlider
          :slider-options="{
            spaceBetween: 20,
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
            },
          }"
          :slides="second_banners"
        >
          <template #slide="{ slide }">
            <div
              :style="{ backgroundImage: `url(${slide.image.path}), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))` }"
              class="rounded-20 flex h-full flex-col justify-between gap-3 bg-[url(/images/privilege_banner.webp)] bg-cover bg-center bg-no-repeat p-4 text-white bg-blend-color"
            >
              <div>
                <h4 class="font-vast text-vast-mob-title-bold mb-1">{{ slide.title }}</h4>
                <p class="text-subsidiary-medium md:text-mob-small-medium mb-1">{{ slide.description }}</p>
                <p class="text-subsidiary-medium md:text-mob-small-reg">{{ slide.addition_description }}</p>
              </div>
              <Link v-if="slide.button_text && slide.link_url" :href="slide.link_url">
                <VButton :label="slide.button_text" variant="light" class="w-full" />
              </Link>
            </div>
          </template>
        </VSlider>
      </div>
    </div>
    <div class="rounded-20 mt-8 p-3 shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] md:p-4">
      <h3 class="text-default-bold">Техническая поддержка</h3>
      <nav class="mt-4 flex flex-col justify-between gap-2 md:flex-row">
        <a href="mailto:inet_shop@primefood.ru" class="bg-input hover:bg-filling flex w-full items-center gap-2 rounded-lg p-3 transition-colors duration-200 max-md:px-2">
          <IconChats />
          <span class="text-mob-small-reg">Написать в поддержку</span>
        </a>
        <Link
          href="/page/return-exchange"
          class="bg-input hover:bg-filling flex w-full items-center gap-2 rounded-lg p-3 transition-colors duration-200 max-md:px-2"
        >
          <IconRepeat />
          <span class="text-mob-small-reg">Условия возврата и обмена товаров</span>
        </Link>
        <Link
          :href="route('faq.faq.index')"
          class="bg-input hover:bg-filling flex w-full items-center gap-2 rounded-lg p-3 transition-colors duration-200 max-md:px-2"
        >
          <IconQuestion />
          <span class="text-mob-small-reg">Частые вопросы</span>
        </Link>
      </nav>
    </div>
    <ReferralModal ref="referralModalRef" v-model:visible="isReferralModalOpen" />
  </div>
</template>

<style scoped>
:deep(.slide-next-btn),
:deep(.slide-prev-btn) {
  width: 40px;
  height: 40px;
}

:deep(.slide-next-btn) {
  right: -6px;
}

:deep(.slide-prev-btn) {
  left: -6px;
}
</style>
