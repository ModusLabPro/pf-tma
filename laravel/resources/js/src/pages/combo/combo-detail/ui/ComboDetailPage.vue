<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { addDays, differenceInCalendarDays, format, isToday, isTomorrow } from 'date-fns';
import { computed, onUnmounted, ref, shallowRef, watch, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';

import { IAddress } from '@/entities/address';
import { ICity } from '@/entities/city';
import { IComboDetail } from '@/entities/combo';
import { IUser } from '@/entities/user';
import { useOrderCalculate } from '@/features/orderCalculate';
import { AddToCart } from '@/features/Product/manage-cart';
import ProductQuantityIndicator from '@/pages/product/ui/ProductQuantityIndicator.vue';
import ProductReviews from '@/pages/product/ui/ProductReviews.vue';
import ProductSlider from '@/pages/product/ui/ProductSlider.vue';
import { TBanner } from '@/shared/banner';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg?skipsvgo';
import { Nullable } from '@/shared/lib/utility-types/Nullable';
import { useScreenSize } from '@/shared/media-queries';
import { VTooltip } from '@/shared/tooltip';
import { VContainer } from '@/shared/ui/container';
import { VPicture } from '@/shared/ui/picture';
import { ProductDelivery } from '@/shared/ui/product-delivery';
import { VSection } from '@/shared/ui/section';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';
import Rating from '@/shared/ui/volt/Rating.vue';
import Select from '@/shared/ui/volt/Select.vue';
import { CatalogBanner } from '@/widgets/catalog-banner';

const { t } = useI18n();

const props = defineProps<{
  combo: IComboDetail;
  banners: TBanner[];
  cities: ICity[];
  auth: { user: Nullable<IUser> };
}>();

const selectedCity = ref<ICity>();

const selectedAddress = shallowRef<IAddress>();

const { calculateData, calculateOrder, calculationModel } = useOrderCalculate();
calculationModel.delivery_type = 'courier';
calculationModel.product_id = props.combo.id;

const formattingDeliveryDate = computed<string>(() => {
  if (!calculateData.value) return '';
  const finalDate = addDays(new Date(), calculateData.value.delivery_detail.delivery_zone_time_min);

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

const hasNoZones = computed<boolean>(() => {
  return !((selectedCity.value?.delivery_zones?.length ?? 0) > 0);
});

const setCity = (address: IAddress): void => {
  selectedCity.value = props.cities.find((city) => city.id === address.city_id);
  calculationModel.delivery_zone_id = address.delivery_zone_id;
};

if (props.auth.user) {
  const primaryCity = props.auth.user?.addresses?.find((address) => address.is_primary);

  if (primaryCity) {
    selectedAddress.value = primaryCity;
    setCity(primaryCity);
  }
}

const tabs = computed<Array<{ id: string; label: string }>>(() => {
  const baseTabs = [
    { id: 'about', label: 'Состав' },
    { id: 'reviews', label: `Отзывы (${props.combo.reviews_count})` },
    { id: 'delivery', label: t('product_detail_card.delivery') },
  ];

  return baseTabs;
});

const currentTab = ref<string>('about');

// const isExpanded = ref(false);
const isExpandable = ref(false);
const descriptionRef = ref<HTMLElement | null>(null);

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const el = entry.target as HTMLElement;
    const height = el.getBoundingClientRect().height;
    isExpandable.value = height > 42;
  }
});

watch(descriptionRef, (el) => {
  if (el) {
    resizeObserver.observe(el);
  }
});

onUnmounted(() => {
  resizeObserver.disconnect();
});

// const toggle = (): void => {
//   isExpanded.value = !isExpanded.value;
// };

const breadcrumbItems = computed<{ label: string; route: string }[]>(() => {
  const items = [
    { label: 'Главная', route: route('main-page') },
    { label: 'Комбо наборы', route: route('combo.index') },
  ];

  return [...items, { label: props.combo.name, route: `/combo/${props.combo.id}` }];
});

watchEffect(calculateOrder);
const { isMobile, isTablet } = useScreenSize();
</script>

<template>
  <VContainer>
    <Breadcrumb v-if="isMobile" :model="breadcrumbItems" class="mx-3 mb-4 !shrink-0 !overflow-auto bg-white">
      <template #item="{ item }">
        <Link
          class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200"
          :href="item.route"
          :only="['products', 'category_target']"
        >
          {{ item.label }}
        </Link>
      </template>
    </Breadcrumb>
    <Breadcrumb v-else :model="breadcrumbItems" class="mx-8 mt-6">
      <template #item="{ item }">
        <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
          {{ item.label }}
        </Link>
      </template>
    </Breadcrumb>
    <VSection class="max-sm:!p-0">
      <div class="gap-8 lg:flex">
        <div class="w-full">
          <div class="flex flex-col gap-8 max-md:items-center sm:flex-row">
            <div class="max-md:max-w-full">
              <ProductSlider :product="combo" />
            </div>
            <div class="w-full max-sm:px-6">
              <div class="text-subsidiary-medium md:text-mob-small-medium flex justify-between">
                <div class="flex items-center gap-2">
                  <div class="flex items-center gap-1">
                    {{ combo.average_rating }}
                    <Rating :default-value="Number(combo.average_rating)" readonly class="-mt-0.5" />
                  </div>
                  <a href="#reviews" class="text-subsidiary flex items-center gap-1 md:gap-2" @click="currentTab = 'reviews'">
                    <span>{{ t('product_detail_card.reviews', combo.reviews_count) }}</span>
                    <IconCaretRight width="16px" height="16px" />
                  </a>
                </div>
                <div>
                  <span class="text-subsidiary max-md:text-complimentary-reg">{{ t('product_detail_card.article') }}</span>
                  {{ combo.article_number }}
                </div>
              </div>
              <h1 class="text-small-medium lg:text-large-medium mt-6">{{ combo.name }}</h1>
              <p class="text-subsidiary-reg md:text-small-medium">
                <span class="text-complimentary-reg md:text-mob-small-medium text-subsidiary">Средний вес:</span>
                {{ combo.weight }} {{ combo.weight_type }}
              </p>
              <div class="bg-input rounded-20 mt-6 hidden flex-col gap-3 p-4 min-[1500px]:flex">
                <h5 class="text-mob-small-reg text-additional">О товаре</h5>
                <p ref="descriptionRef" :class="['text-mob-small-reg transition-all duration-300 ease-in-out']" v-html="combo.description" />
                <!--                <button-->
                <!--                  v-if="isExpandable"-->
                <!--                  class="text-subsidiary-medium mt-2 flex cursor-pointer items-center gap-2 focus:outline-none"-->
                <!--                  :aria-expanded="isExpanded"-->
                <!--                  @click="toggle"-->
                <!--                >-->
                <!--                  {{ isExpanded ? 'Меньше' : 'Смотреть полностью' }}-->
                <!--                  <IconArrowDown :class="['mt-0.5 transition-transform duration-200 ease-in-out', { 'rotate-180': isExpanded }]" />-->
                <!--                </button>-->
              </div>
              <div class="rounded-20 mx-auto mt-6 hidden max-w-md p-4 shadow-[0px_2px_20px_rgba(0,0,0,0.25)] min-[1500px]:!hidden sm:block">
                <template v-if="!!combo.sale_price">
                  <div class="flex justify-between">
                    <p v-if="combo.sale_price" class="text-small-medium md:text-heavy-medium">{{ combo.sale_price }} {{ combo.price_type }}</p>
                    <p class="text-small-medium md:text-medium-medium text-subsidiary line-through">{{ combo.price }} {{ combo.price_type }}</p>
                  </div>
                </template>
                <p v-else class="text-small-medium md:text-heavy-medium">{{ combo.price }} {{ combo.price_type }}</p>
                <ProductQuantityIndicator class="mt-2" :quantity="'Много'" />
                <div class="mt-6 flex flex-col gap-2">
                  <AddToCart :id="combo.id" :count-in-cart="combo.count_in_cart" button-type="full" />
                </div>
              </div>
              <div v-if="isMobile">
                <div class="rounded-20 mt-4 p-4 shadow-[0px_2px_20px_rgba(0,0,0,0.25)]">
                  <template v-if="!!combo.sale_price">
                    <div class="flex justify-between">
                      <p v-if="combo.sale_price" class="text-small-medium md:text-heavy-medium">{{ combo.sale_price }} {{ combo.price_type }}</p>
                      <p class="text-small-medium md:text-medium-medium text-subsidiary line-through">{{ combo.price }} {{ combo.price_type }}</p>
                    </div>
                  </template>
                  <p v-else class="text-small-medium md:text-heavy-medium">{{ combo.price }} {{ combo.price_type }}</p>
                  <ProductQuantityIndicator class="mt-2" :quantity="'Много'" />
                  <div class="mt-6 flex flex-col gap-2">
                    <AddToCart :id="combo.id" :count-in-cart="combo.count_in_cart" button-type="full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="sm:mt-8">
            <div>
              <div class="flex w-full flex-col-reverse gap-4 max-sm:px-6 min-[1500px]:!hidden sm:flex-row">
                <div class="bg-input rounded-20 basis-1/2 p-4 sm:mt-6">
                  <h5 class="text-mob-small-reg text-additional">О товаре</h5>
                  <p ref="descriptionRef" :class="['text-mob-small-reg transition-all duration-300 ease-in-out']" v-html="combo.description" />
                </div>
                <div class="border-filling rounded-20 text-text-secondary mt-6 basis-1/2 border p-4">
                  <h4 class="text-default-medium">{{ t('product_detail_card.delivery_info') }}</h4>
                  <div class="mt-6 flex flex-col gap-2">
                    <p class="text-small-medium">{{ t('product_detail_card.delivery_address') }}</p>
                    <Select
                      v-if="props.auth.user"
                      v-model="selectedAddress"
                      :options="props.auth.user.addresses"
                      fluid
                      option-label="final_address"
                      size="large"
                      placeholder="Выберите адресс"
                      @update:model-value="setCity"
                    />
                    <Select
                      v-model="selectedCity"
                      :options="props.cities"
                      option-label="name"
                      fluid
                      size="large"
                      :placeholder="t('cart_page.city')"
                    />
                    <Select
                      v-if="!hasNoZones && calculationModel.delivery_type === 'courier'"
                      v-model="calculationModel.delivery_zone_id"
                      :options="deliveryZones"
                      option-value="id"
                      option-label="name"
                      fluid
                      :empty-message="selectedCity ? 'Для этого города нет зон доставки' : 'Сначала выберите город'"
                      size="large"
                      placeholder="Выберите зону доставки"
                    />
                    <p
                      v-if="calculateData?.delivery_detail.delivery_zone_time_min && calculationModel.delivery_zone_id"
                      class="text-mob-small-reg text-additional"
                    >
                      Доставим {{ formattingDeliveryDate }}
                    </p>
                    <p v-if="hasNoZones" class="flex w-min min-w-[238px] gap-1">
                      <span class="text-mob-small-reg text-additional block w-fit">Срок и стоимость доставки определяется индивидуально</span>
                      <VTooltip value="Стоимость доставки зависит от адреса, веса и стоимости заказа" />
                    </p>
                  </div>
                  <div
                    v-if="calculateData?.delivery_detail.delivery_zone_time_min && calculationModel.delivery_zone_id"
                    class="border-t-filling mt-2 border-t py-2"
                  >
                    <h5 class="text-small-medium mb-2">Стоимость доставки</h5>
                    <dl class="grid grid-cols-2 items-center gap-2">
                      <dt class="text-mob-small-reg">Заказ от {{ calculateData.delivery_detail.delivery_zone_min_order_sum }} руб.</dt>
                      <dd class="text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5">бесплатно</dd>
                      <dt class="text-mob-small-reg">Заказ до {{ calculateData.delivery_detail.delivery_zone_min_order_sum }} руб.</dt>
                      <dd class="text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5">
                        {{ calculateData?.delivery_detail.delivery_price }} руб.
                      </dd>
                    </dl>
                  </div>
                  <div v-if="false" class="border-t-filling mt-2 border-t">
                    <h5 class="text-small-medium py-2">{{ t('product_detail_card.pickup') }}</h5>
                    <p v-if="false" class="text-mob-small-reg text-additional">Послезавтра, 26.06.2025</p>
                  </div>
                  <div
                    class="bg-filling hover:bg-default text-subsidiary-reg mt-6 w-fit rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white"
                  >
                    <a href="#delivery" class="flex items-center gap-2" @click="currentTab = 'delivery'">
                      <span>{{ t('product_detail_card.all_delivery_terms') }}</span>
                      <IconCaretRight :width="'16px'" :height="'16px'" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="mt-8 w-full max-w-full overflow-x-auto max-sm:pl-6">
                <div class="flex min-w-max gap-2 whitespace-nowrap">
                  <button
                    v-for="tab in tabs"
                    :key="tab.id"
                    class="text-subsidiary-reg md:text-mob-small-reg bg-input rounded-20 shrink-0 cursor-pointer px-4 py-3"
                    :class="currentTab === tab.id ? 'bg-text text-white' : ''"
                    @click="currentTab = tab.id"
                  >
                    {{ tab.label }}
                  </button>
                </div>
              </div>
              <div class="mt-4 max-sm:px-6 lg:mt-8">
                <div v-if="currentTab === 'about'">
                  <div
                    v-for="item in combo.products"
                    :key="item.id"
                    class="grid gap-4 py-2 lg:grid-cols-[auto_1fr_auto]"
                    :class="isMobile ? 'border-b-filling border-b' : 'border-b-filling border-b'"
                  >
                    <VPicture
                      v-if="item.images[0]?.path && !isMobile"
                      :src="item.images[0].path"
                      alt="Изображение товара"
                      class="flex-shrink-0 rounded-lg"
                      :width="isMobile ? '74px' : '225px'"
                      :height="isMobile ? '64px' : '133px'"
                      img-classes="rounded-lg"
                    />
                    <div v-else-if="isMobile" class="flex items-start gap-2">
                      <VPicture
                        v-if="item.images[0]?.path"
                        :src="item.images[0].path"
                        alt="Изображение товара"
                        class="flex-shrink-0 rounded-lg"
                        :width="isMobile ? '74px' : '225px'"
                        :height="isMobile ? '64px' : '133px'"
                        img-classes="rounded-lg"
                      />
                      <h4 class="text-subsidiary-medium sm:text-mob-small-bold">
                        {{ item.name }}
                      </h4>
                    </div>
                    <div v-else class="bg-surface-100 h-20 rounded-lg sm:w-[116px]" />
                    <div class="flex flex-col gap-3 py-2">
                      <h4 v-if="!isMobile" class="text-subsidiary-medium sm:text-mob-small-bold line-clamp-2">
                        {{ item.name }}
                      </h4>
                      <dl v-if="item.type !== 'Combo'" class="flex items-center" :class="isTablet || isMobile ? 'flex-wrap gap-1' : ''">
                        <dt class="text-complimentary-reg text-additional mr-2">Артикул:</dt>
                        <dd class="text-subsidiary-medium mr-8">{{ item.article_number }}</dd>
                        <dt class="text-complimentary-reg text-additional mr-2">Средний вес:</dt>
                        <dd class="text-subsidiary-medium mr-8">{{ item.weight }} {{ item.weight_type }}</dd>
                        <!--                        <dt class="text-complimentary-reg text-additional mr-2">Упаковка:</dt>-->
                        <!--                        <dd class="text-subsidiary-medium mr-8">{{ item.type_of_packing }}</dd>-->
                        <dt class="text-complimentary-reg text-additional mr-2">Бренд:</dt>
                        <dd class="text-subsidiary-medium mr-8">{{ item.brands[0].name }}</dd>
                      </dl>
                      <div class="flex gap-8">
                        <div class="text-subsidiary-medium bg-filling rounded-xl px-3 py-2">{{ 1 }} шт</div>
                        <div class="flex items-center gap-2 md:gap-8">
                          <div class="flex flex-col gap-0.5">
                            <span class="text-complimentary-reg">{{ item.price }} <span>руб/кг</span> </span>
                            <span class="text-mob-small-bold">{{ item.sale_price }} <span>руб</span></span>
                          </div>
                          <div v-if="!!item.sale_percent" class="text-subsidiary text-complimentary-reg flex flex-col gap-0.5">
                            <p class="line-through">
                              {{ item.price }}
                              <span>руб/кг</span>
                            </p>
                            <p class="line-through">{{ item.price }} руб</p>
                          </div>
                          <div v-if="!!item.sale_percent" class="bg-delete text-complimentary-reg rounded-full px-2 py-1 text-white">
                            -{{ item.sale_percent }} %
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="currentTab === 'reviews'" id="reviews">
                  <ProductReviews :reviews="combo.reviews" />
                </div>
                <div v-if="currentTab === 'delivery'" id="delivery">
                  <ProductDelivery />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden max-w-[352px] min-[1500px]:block">
          <div class="rounded-20 min-w-[352px] p-4 shadow">
            <template v-if="!!combo.sale_price">
              <div class="flex justify-between">
                <p v-if="combo.sale_price" class="text-small-medium md:text-heavy-medium">{{ combo.sale_price }} {{ combo.price_type }}</p>
                <p class="text-small-medium md:text-medium-medium text-subsidiary line-through">{{ combo.price }} {{ combo.price_type }}</p>
              </div>
            </template>
            <p v-else class="text-small-medium md:text-heavy-medium">{{ combo.price }} {{ combo.price_type }}</p>
            <ProductQuantityIndicator class="mt-2" :quantity="'Много'" />
            <div class="mt-6 flex flex-col gap-2">
              <AddToCart :id="combo.id" :count-in-cart="combo.count_in_cart" button-type="full" />
            </div>
          </div>
          <div class="border-filling rounded-20 text-text-secondary mt-6 max-w-[352px] border p-4">
            <h4 class="text-default-medium">{{ t('product_detail_card.delivery_info') }}</h4>
            <div class="mt-6 flex flex-col gap-2">
              <p class="text-small-medium">{{ t('product_detail_card.delivery_address') }}</p>
              <Select
                v-if="props.auth.user"
                v-model="selectedAddress"
                :options="props.auth.user.addresses"
                fluid
                option-label="final_address"
                size="large"
                placeholder="Выберите адрес"
                @update:model-value="setCity"
              />
              <Select v-model="selectedCity" :options="props.cities" option-label="name" fluid size="large" :placeholder="t('cart_page.city')" />
              <Select
                v-if="!hasNoZones && calculationModel.delivery_type === 'courier'"
                v-model="calculationModel.delivery_zone_id"
                :options="deliveryZones"
                option-value="id"
                option-label="name"
                fluid
                :empty-message="selectedCity ? 'Для этого города нет зон доставки' : 'Сначала выберите город'"
                size="large"
                placeholder="Выберите зону доставки"
              />
              <p
                v-if="calculateData?.delivery_detail.delivery_zone_time_min && calculationModel.delivery_zone_id"
                class="text-mob-small-reg text-additional"
              >
                Доставим {{ formattingDeliveryDate }}
              </p>
              <p v-if="hasNoZones" class="flex w-min min-w-[238px] gap-1">
                <span class="text-mob-small-reg text-additional block w-fit">Срок и стоимость доставки определяется индивидуально</span>
                <VTooltip value="Стоимость доставки зависит от адреса, веса и стоимости заказа" />
              </p>
            </div>
            <div
              v-if="calculateData?.delivery_detail.delivery_zone_time_min && calculationModel.delivery_zone_id"
              class="border-t-filling mt-2 border-t py-2"
            >
              <h5 class="text-small-medium mb-2">Стоимость доставки</h5>
              <dl class="grid grid-cols-2 items-center gap-2">
                <dt class="text-mob-small-reg">
                  Заказ от {{ calculateData.delivery_detail.delivery_zone_min_order_sum }}
                  руб.
                </dt>
                <dd class="text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5">бесплатно</dd>
                <dt class="text-mob-small-reg">
                  Заказ до {{ calculateData.delivery_detail.delivery_zone_min_order_sum }}
                  руб.
                </dt>
                <dd class="text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5">
                  {{ calculateData?.delivery_detail.delivery_price }} руб.
                </dd>
              </dl>
            </div>
            <div v-if="false" class="border-t-filling mt-2 border-t">
              <h5 class="text-small-medium py-2">{{ t('product_detail_card.pickup') }}</h5>
              <p v-if="false" class="text-mob-small-reg text-additional">Послезавтра, 26.06.2025</p>
            </div>
            <div
              class="bg-filling hover:bg-default text-subsidiary-reg mt-6 w-fit rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white"
            >
              <a href="#delivery" class="flex items-center gap-2" @click="currentTab = 'delivery'">
                <span>{{ t('product_detail_card.all_delivery_terms') }}</span>
                <IconCaretRight :width="'16px'" :height="'16px'" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </VSection>

    <VSection>
      <CatalogBanner />
    </VSection>
  </VContainer>
</template>
