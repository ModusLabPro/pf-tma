<script setup lang="ts">
import type { ICity } from '@/entities/city';

import { Head, Link, router } from '@inertiajs/vue3';
import { useElementBounding } from '@vueuse/core';
import { addDays, differenceInCalendarDays, format, isToday, isTomorrow } from 'date-fns';
import { storeToRefs } from 'pinia';
import { computed, ref, shallowRef, useId, useTemplateRef, watch, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import { YandexMapDefaultMarker } from 'vue-yandex-maps';

import { IAddress } from '@/entities/address';
import CartProductCard from '@/entities/cart/ui/CartProductCard.vue';
import { OrderDetail } from '@/entities/order';
import { IPickUpLocation } from '@/entities/pick-up-location';
import { ProductCard } from '@/entities/products';
import { RecipeCard } from '@/entities/recipes';
import { ApplyPromocode } from '@/features/applyPromocode';
import { useOrderCalculate } from '@/features/orderCalculate';
import { AddToFavorite } from '@/features/Product/add-to-favorite';
import { AddToCart } from '@/features/Product/manage-cart';
import RemoveProductPosition from '@/features/Product/manage-cart/ui/RemoveProductPosition.vue';
import { usePickupLocationsStore } from '@/pages/making-order/model/usePickupLocationsStore';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg';
import IconClock from '@/shared/icons/IconClockOutline.svg';
import IconGlobeOutline from '@/shared/icons/IconGlobeOutline.svg';
import IconPhone from '@/shared/icons/IconPhoneCall.svg';
import IconPin from '@/shared/icons/IconPin.svg';
import { useScreenSize } from '@/shared/media-queries';
import { VTooltip } from '@/shared/tooltip';
import { VButton } from '@/shared/ui/button';
import { VContainer } from '@/shared/ui/container';
import { VPicture } from '@/shared/ui/picture';
import { VScrollPanel } from '@/shared/ui/scroll-panel';
import { VSection } from '@/shared/ui/section';
import { VShare } from '@/shared/ui/share';
import { VSlider } from '@/shared/ui/slider';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';
import VoltButton from '@/shared/ui/volt/Button.vue';
import RadioButton from '@/shared/ui/volt/RadioButton.vue';
import Select from '@/shared/ui/volt/Select.vue';
import { VMap } from '@/shared/ui/yandex-map';

import { ICartPageProps } from '../model';

const { t } = useI18n();

const props = defineProps<ICartPageProps>();

const breadcrumbItems = [
  { label: 'Главная', route: route('main-page') },
  { label: 'Корзина', route: route('cart.index') },
];

const { calculateData, calculateOrder, calculationModel, loading } = useOrderCalculate();

const formattingDeliveryDate = computed<string>(() => {
  if (!calculateData.value) return '';
  const finalDate = addDays(
    new Date(),
    calculationModel.delivery_type === 'courier'
      ? (calculateData.value.delivery_detail.delivery_zone_time_min ?? 0)
      : (calculateData.value.delivery_detail.pickup_location_time_min ?? 0),
  );

  if (isToday(finalDate)) {
    return `сегодня, ${format(finalDate, 'dd.MM.yyyy')}`;
  }
  if (isTomorrow(finalDate)) {
    return `завтра, ${format(finalDate, 'dd.MM.yyyy')}`;
  }
  if (differenceInCalendarDays(finalDate, new Date()) === 2) {
    return `послезавтра, ${format(finalDate, 'dd.MM.yyyy')}`;
  }
  return format(finalDate, 'dd.MM.yyyy');
});

const pickupLocationsStore = usePickupLocationsStore();

const { locationsList, selectedLocation, selectedCity, locationCoordinates } = storeToRefs(pickupLocationsStore);

calculationModel.delivery_type = 'courier';

// const selectedCityId = shallowRef<number>();
const citiesList = computed<ICity[]>(() => {
  switch (calculationModel.delivery_type) {
    case 'courier': {
      return [...props.cities];
    }
    case 'pickup': {
      return [...props.cities.filter((c) => c.is_has_pickup)];
    }
    default: {
      return [...props.cities];
    }
  }
});

const deliveryZones = computed<ICity['delivery_zones']>(() => {
  return (
    props.cities
      .find((city) => city.id === selectedCity.value?.id)
      ?.delivery_zones.map((zone) => ({
        ...zone,
        name: [zone.name, zone.description].filter((el) => Boolean(el)).join(', '),
      })) || []
  );
});

// calculateOrder();

const deliveryTypes = ref<Array<{ deliveryType: string; key: string; value: 'courier' | 'pickup' }>>([
  { deliveryType: t('cart_page.courier'), key: '1', value: 'courier' },
  { deliveryType: t('cart_page.pickup'), key: '2', value: 'pickup' },
]);

const { isMobile } = useScreenSize();

const toCreateOrder = (): void => {
  router.visit(route('order.create'), {
    data: {
      promocode: calculationModel.promo,
      delivery_type: calculationModel.delivery_type,
      address_id: calculationModel.address_id,
      pickup_location_id: calculationModel.pickup_location_id,
      city_id: selectedCity.value?.id,
      delivery_zone_id: calculationModel.delivery_zone_id,
      use_expiring_bonuses: calculationModel.use_expiring_bonuses,
    },
  });
};

const isOtherCity = computed<boolean>(() => {
  return selectedCity.value?.name === 'Другой город';
});

const onSelectPickupLocation = (location: IPickUpLocation): void => {
  calculationModel.pickup_location_id = location.id;
};

const selectedAddress = shallowRef<IAddress>();

const setCity = (address: IAddress): void => {
  selectedCity.value = props.cities.find((city) => city.id === address.city_id);
  calculationModel.delivery_zone_id = address.delivery_zone_id;
};

if (props.auth.user) {
  const primaryCity = props.auth.user.addresses.find((address) => address.is_primary);

  if (primaryCity) {
    selectedAddress.value = primaryCity;
    setCity(primaryCity);
  }
}

const handleBonusesToggled = (useExpiring: boolean): void => {
  calculationModel.use_expiring_bonuses = useExpiring;
};

watchEffect(calculateOrder);

watch(
  () => selectedCity.value?.id,
  (newId) => {
    if (newId) {
      pickupLocationsStore.getLocations(newId);
    }
  },
);

watch(
  () => props.cart,
  () => {
    calculateOrder();
  },
);

watch(
  () => calculationModel.delivery_type,
  () => {
    calculationModel.delivery_zone_id = undefined;
    calculationModel.pickup_location_id = undefined;
  },
);

// onBeforeUnmount(() => {
//   pickupLocationsStore.resetStore();
// });

const onPromocodeApplied = (promocode: string): void => {
  calculationModel.promo = promocode;
  calculateOrder();
};

const getWorkingHours = (location: IPickUpLocation): string => {
  if (!location.working_hours_from && !location.working_hours_to) return '';
  let hours = 'Открыто';
  if (location.working_hours_from) {
    hours += ` с ${location.working_hours_from}`;
  }
  if (location.working_hours_to) {
    hours += ` по ${location.working_hours_to}`;
  }
  return hours;
};

const pickUpLocationsContainer = useTemplateRef('pickUpLocationsContainer');
const { height: pickUpLocationsContainerHeight } = useElementBounding(pickUpLocationsContainer);

const cartContentWrap = computed(() => {
  if (isMobile.value) {
    return 'div';
  }
  return VScrollPanel;
});
</script>

<template>
  <Head v-if="props.seoData">
    <title>{{ props.seoData.seo_title }}</title>
    <meta v-if="props.seoData.seo_description" name="description" :content="props.seoData.seo_description" />
    <meta v-if="props.seoData.seo_keywords" name="keywords" :content="props.seoData.seo_keywords" />
  </Head>
  <VContainer>
    <Breadcrumb v-if="isMobile" :model="breadcrumbItems" class="mx-3 mb-4 !shrink-0 !overflow-auto bg-white">
      <template #item="{ item }">
        <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
          {{ item.label }}
        </Link>
      </template>
    </Breadcrumb>
    <Breadcrumb v-else :model="breadcrumbItems" class="mx-8 mt-3">
      <template #item="{ item }">
        <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
          {{ item.label }}
        </Link>
      </template>
    </Breadcrumb>
    <div v-if="cartBanners?.length" class="mt-6 px-6 sm:px-8">
      <VSlider
        :slider-options="{
          spaceBetween: 20,
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
          },
        }"
        :slides="cartBanners"
      >
        <template #slide="{ slide }">
          <div
            :style="{ backgroundImage: `url(${slide.image.path}), linear-gradient(to bottom, rgba(2, 40, 63, 0), rgba(2, 40, 63, 1))` }"
            class="rounded-20 flex min-h-[238px] w-full items-end bg-cover bg-center bg-no-repeat p-4 text-white bg-blend-color md:min-h-[193px] md:items-center md:p-6"
          >
            <div class="grid gap-2">
              <h2 class="text-vast-mob-title-bold md:text-vast-title-bold uppercase">{{ slide.title }}</h2>
              <p class="text-mob-small-bold md:text-default-bold">{{ slide.description }}</p>
              <p class="text-subsidiary-reg md:text-mob-small-reg">{{ slide.addition_description }}</p>
            </div>
          </div>
        </template>
      </VSlider>
    </div>
    <VSection v-if="cart.items.length > 0">
      <template #title>
        <h2 class="text-default-bold sm:text-heavy-bold">
          {{ t('cart.cart') }}
          <span class="text-subsidiary text-default-medium sm:text-heavy font-normal">{{ t('cart.goods', cart.cartQuantity) }}</span>
        </h2>
      </template>
      <template #headerAction>
        <div class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white">
          <Link :href="route('catalog.index')" class="flex items-center gap-2">
            <span v-if="!isMobile">{{ t('cart_page.continue_shopping') }}</span>
            <span v-else>В каталог</span>
            <IconCaretRight :width="'16px'" :height="'16px'" />
          </Link>
        </div>
      </template>

      <div class="flex flex-col gap-8 lg:grid-cols-[1fr_0.5fr] xl:grid">
        <div>
          <Component :is="cartContentWrap" :class="{ 'xl:h-[1000px]': !isMobile }">
            <CartProductCard v-for="item in cart.formatedItems" :key="item.id + useId()" :item="item" class="mb-2 last:mb-0">
              <template #addToCart>
                <template v-if="!item.is_gift">
                  <AddToCart
                    v-if="item.is_available"
                    :id="item.item.id"
                    :type="item.is_combo ? 'combo' : 'product'"
                    :count-in-cart="item.quantity"
                    :can-quick-buy="false"
                    :is-combo="item.is_combo"
                  />
                  <div v-else class="flex items-center gap-4">
                    <span class="text-mob-small-bold">Нет в наличии</span>
                    <VoltButton label="Под заказ" rounded size="small" />
                  </div>
                </template>
                <template v-else>
                  <div v-if="item.is_gift" class="text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2">
                    {{ item.quantity }} шт
                  </div>
                </template>
              </template>
              <template v-if="item.can_delete" #removePosition>
                <RemoveProductPosition :id="item.item.id" :type="item.is_combo ? 'combo' : 'product'" :count-in-cart="item.quantity" />
              </template>
              <template #removeGiftPosition="{ giftId, giftQuantity }">
                <RemoveProductPosition :id="giftId" type="product" :count-in-cart="giftQuantity" with-confirm />
              </template>
            </CartProductCard>
          </Component>
        </div>
        <aside class="flex w-full flex-col gap-2 xl:max-w-[480px]">
          <div class="bg-light-gray rounded-20 p-3 sm:p-4">
            <h3 class="text-small-medium sm:text-default-medium">{{ t('cart_page.delivery') }}</h3>
            <div class="mt-3 flex items-center gap-3 max-sm:flex-wrap sm:mt-6 sm:gap-6">
              <div v-for="deliveryType in deliveryTypes" :key="deliveryType.key" class="flex items-center gap-2">
                <RadioButton
                  v-model="calculationModel.delivery_type"
                  :input-id="deliveryType.key"
                  :name="deliveryType.key"
                  :value="deliveryType.value"
                />
                <label class="text-mob-small-reg cursor-pointer" :for="deliveryType.key">{{ deliveryType.deliveryType }}</label>
              </div>
            </div>
            <div class="mt-6">
              <h4 class="text-mob-small-reg">{{ t('cart_page.delivery_address') }}</h4>
              <div class="mt-3">
                <Select
                  v-if="props.auth.user && props.auth.user.addresses.length"
                  v-model="selectedAddress"
                  :options="props.auth.user.addresses"
                  fluid
                  option-label="final_address"
                  variant="filled"
                  size="large"
                  class="mb-2"
                  placeholder="Выберите адрес"
                  @update:model-value="setCity"
                />
                <Select
                  v-model="selectedCity"
                  :options="citiesList"
                  option-label="name"
                  fluid
                  variant="filled"
                  size="large"
                  class="mb-2"
                  :placeholder="t('cart_page.city')"
                />
                <Select
                  v-if="!isOtherCity && calculationModel.delivery_type === 'courier'"
                  v-model="calculationModel.delivery_zone_id"
                  :options="deliveryZones"
                  option-value="id"
                  option-label="name"
                  fluid
                  variant="filled"
                  size="large"
                  placeholder="Выберите зону доставки"
                />
              </div>
            </div>
            <div v-if="calculationModel.delivery_type === 'pickup'" class="mt-4 overflow-hidden rounded-2xl">
              <VMap :zoom="selectedLocation ? 19 : 11" :center="locationCoordinates" height="200px" class="mx-auto mb-3 max-w-[95%]">
                <template #marker>
                  <template v-for="location in locationsList" :key="location.id">
                    <YandexMapDefaultMarker
                      :settings="{
                        coordinates: [Number(location.longitude), Number(location.latitude)],
                      }"
                    />
                  </template>
                </template>
              </VMap>
              <VScrollPanel :style="{ maxHeight: '440px', height: `${pickUpLocationsContainerHeight}px` }">
                <div ref="pickUpLocationsContainer" class="grid grid-cols-1 gap-2">
                  <template v-for="location in locationsList" :key="location.id">
                    <div class="flex gap-2 rounded-2xl bg-white p-3">
                      <div class="grid grow gap-3">
                        <p class="text-mob-small-medium">{{ location.title }}</p>
                        <div class="grid gap-2 min-[820px]:grid-cols-2">
                          <a
                            v-if="location.phone"
                            :href="`tel:${location.phone.replace(/(?!^\+)[^\d]/g, '')}`"
                            class="text-mob-small-bold inline-flex items-center gap-2"
                          >
                            <IconPhone class="h-6 w-6 shrink-0" />
                            {{ location.phone }}
                          </a>
                          <div v-if="location.working_hours_from || location.working_hours_to" class="text-mob-small-reg flex items-center gap-2">
                            <IconClock class="h-6 w-6 shrink-0" />
                            {{ getWorkingHours(location) }}
                          </div>
                          <div class="text-mob-small-reg flex items-center gap-2">
                            <IconPin class="shrink-0" />
                            {{ location.fullAddress }}
                          </div>
                          <a v-if="location.site" :href="location.site" class="text-mob-small-reg flex items-center gap-2">
                            <IconGlobeOutline class="h-6 w-6 shrink-0" />
                            {{ location.site }}
                          </a>
                        </div>
                      </div>
                      <RadioButton v-model="selectedLocation" :value="location" @update:model-value="onSelectPickupLocation" />
                    </div>
                  </template>
                </div>
              </VScrollPanel>
            </div>
            <div
              v-if="((calculationModel.pickup_location_id || calculationModel.delivery_zone_id) && !loading) || isOtherCity"
              class="border-t-solid border-t-filling mt-3 border-t pt-2"
            >
              <h5 class="text-mob-small-reg mb-2">Детали доставки</h5>
              <dl class="grid grid-cols-[minmax(0,140px)_1fr] items-start gap-2">
                <dt class="text-subsidiary-medium text-subsidiary py-0.5">Срок доставки:</dt>
                <dd class="text-mob-small-medium">
                  <template v-if="isOtherCity">
                    <span class="inline-flex items-center gap-1">
                      <span>Рассчитывается индивидуально</span>
                      <VTooltip value="Срок доставки зависит от адреса, веса и стоимости заказа" />
                    </span>
                  </template>
                  <template v-else>
                    {{ formattingDeliveryDate }}
                  </template>
                </dd>
                <template v-if="!isOtherCity && calculationModel.delivery_type !== 'pickup'">
                  <dt class="text-subsidiary-medium text-subsidiary py-0.5">Зона доставки:</dt>
                  <dd class="text-mob-small-medium">
                    <span class="inline-flex items-center gap-1">
                      <span class="text-mob-small-medium">{{ calculateData?.delivery_detail.delivery_zone_name }}</span>
                      <span class="text-complimentary-reg text-additional">{{ calculateData?.delivery_detail.delivery_zone_description }}</span>
                    </span>
                  </dd>
                </template>
                <dt class="text-subsidiary-medium text-subsidiary py-0.5">Стоимость доставки:</dt>
                <dd class="text-mob-small-medium">
                  <span class="inline-flex items-center gap-1">
                    <span>{{ isOtherCity ? 'Рассчитывается индивидуально' : `${calculateData?.delivery_detail.delivery_price} руб` }}</span>
                    <VTooltip value="Стоимость доставки зависит от адреса, веса и стоимости заказа" />
                  </span>
                </dd>
              </dl>
            </div>
          </div>
          <ApplyPromocode :bonus-spent-limit="calculateData?.order_detail?.bonus_spent_limit" @promocode-applied="onPromocodeApplied" @bonuses-toggled="handleBonusesToggled" />
          <OrderDetail
            :order-detail="calculateData?.order_detail ?? null"
            :is-delivery-price-enabled="!!calculationModel.delivery_zone_id || !!calculationModel.pickup_location_id"
            :is-individual="isOtherCity"
          >
            <template #footer>
              <div class="mt-6">
                <div>
                  <VButton :label="t('cart_page.checkout')" :disabled="cart.cartQuantity === 0" class="w-full" @click="toCreateOrder" />
                </div>
                <div>
                  <Link href="/page/return-exchange" class="text-mob-small-reg mt-4 flex items-center gap-2 pb-2"
                    ><span>{{ t('cart_page.return_exchange_terms') }}</span>
                    <IconCaretRight width="20px" height="20px" />
                  </Link>
                </div>
              </div>
            </template>
          </OrderDetail>
        </aside>
      </div>
    </VSection>
    <VSection v-else>
      <div class="bg-light-gray mx-auto max-w-[640px] rounded-[40px]">
        <div class="flex flex-col items-center gap-4 p-6 sm:flex-row">
          <VPicture
            src="/images/test-images/EmptyCart.webp"
            alt="Пустая корзина"
            class="-mt-12"
            img-classes="w-[120px] h-[115px] sm:w-[200px] sm:h-[140px]"
          />
          <div>
            <h4 class="text-default-medium sm:text-heavy-medium max-sm:text-center">Корзина пока пуста</h4>
            <p class="text-subsidiary-reg sm:text-mob-small-reg mt-2 max-sm:text-center">
              Выбирайте понравившиеся товары в нашем каталоге и добавляйте их в корзину
            </p>
            <div class="mt-6">
              <VButton label="В каталог" class="max-sm:mx-auto" @click="router.visit(route('catalog.index'))" />
            </div>
          </div>
        </div>
      </div>
    </VSection>
    <VSection v-if="cart.cartQuantity > 0" :title="t('product_detail_card.often_bought_with')" class="mt-12 max-[640px]:!p-0 max-[640px]:!pl-4">
      <VSlider
        :slides="special_products"
        :slider-options="{
          slidesPerView: 6,
          spaceBetween: 32,
          allowTouchMove: true,
        }"
      >
        <template #slide="{ slide }">
          <ProductCard
            :id="slide.id"
            :key="slide.id"
            :slug="slide.slug"
            :has-gift="slide.is_have_gift"
            :title="slide.name"
            :images="slide.images.map((i) => i.path)"
            :weight="slide.weight"
            :description="slide.short_description"
            :is-favorite="slide.is_wishlist"
            :degree-type="slide.degree_type"
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
    </VSection>

    <VSection v-if="special_products.length > 0" :title="t('main_page.special_offers')" class="mt-12 max-[640px]:!p-0 max-[640px]:!pl-4">
      <template #headerAction>
        <div
          class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4"
        >
          <Link :href="route('main-page')" class="flex items-center gap-2">
            <span>Все</span>
            <IconCaretRight :width="'16px'" :height="'16px'" />
          </Link>
        </div>
      </template>
      <VSlider
        :slides="special_products"
        :slider-options="{
          slidesPerView: 6,
          spaceBetween: 32,
          allowTouchMove: true,
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
            :degree-type="slide.degree_type"
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
    </VSection>

    <VSection v-if="recipes.length > 0" :title="t('product_detail_card.chef_recipes')" class="mt-12 max-[640px]:!p-0 max-[640px]:!pl-4">
      <template #headerAction>
        <div
          class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4"
        >
          <Link :href="route('main-page')" class="flex items-center gap-2">
            <span>Все</span>
            <IconCaretRight :width="'16px'" :height="'16px'" />
          </Link>
        </div>
      </template>

      <VSlider
        :slides="recipes"
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
          <RecipeCard
            :id="slide.id"
            :title="slide.title"
            :description="slide.mini_description"
            :difficulty="slide.difficult"
            :portions="slide.number_of_persons"
            :cook-time="slide.cooking_time_minutes"
            :image="slide.image.path"
            :is-favorite="slide.is_wishlist"
          >
            <template #actions="{ isFavorite }">
              <AddToFavorite :id="slide.id" :initial-value="isFavorite" item-type="recipe" />
              <VShare :url="route('recipe.show', { recipe: slide.id })" />
            </template>
          </RecipeCard>
        </template>
      </VSlider>
    </VSection>
  </VContainer>
</template>

<style scoped></style>
