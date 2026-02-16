<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3';
import { addDays, differenceInCalendarDays, format, isToday, isTomorrow } from 'date-fns';
import { computed, onUnmounted, ref, shallowRef, watch, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';

import { IAddress } from '@/entities/address';
import CartProductCard from '@/entities/cart/ui/CartProductCard.vue';
import { ICity } from '@/entities/city';
import { CombinationPreviewCard } from '@/entities/combination';
import { ProductCard } from '@/entities/products';
import { RecipeCard } from '@/entities/recipes';
import { useOrderCalculate } from '@/features/orderCalculate';
import { AddToFavorite } from '@/features/Product/add-to-favorite';
import { AddToCart } from '@/features/Product/manage-cart';
import ProductQuantityIndicator from '@/pages/product/ui/ProductQuantityIndicator.vue';
import ProductReviews from '@/pages/product/ui/ProductReviews.vue';
import ProductSlider from '@/pages/product/ui/ProductSlider.vue';
import IconArrowDown from '@/shared/icons/IconArrowDown.svg?skipsvgo';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg?skipsvgo';
import { useScreenSize } from '@/shared/media-queries';
import { VTooltip } from '@/shared/tooltip';
import { VContainer } from '@/shared/ui/container';
import { VPicture } from '@/shared/ui/picture';
import { ProductDelivery } from '@/shared/ui/product-delivery';
import { VSection } from '@/shared/ui/section';
import { VShare } from '@/shared/ui/share';
import { VSlider } from '@/shared/ui/slider';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';
import Rating from '@/shared/ui/volt/Rating.vue';
import Select from '@/shared/ui/volt/Select.vue';
import { CatalogBanner } from '@/widgets/catalog-banner';

import { IProductPageProps } from '../model';

const { t } = useI18n();

const props = defineProps<IProductPageProps>();

const selectedCity = ref<ICity>();

const selectedAddress = shallowRef<IAddress>();

const { calculateData, calculateOrder, calculationModel } = useOrderCalculate();
calculationModel.delivery_type = 'courier';
calculationModel.product_id = props.product.id;

const getFormattingDeliveryDate = (daysCount: number): string => {
  const finalDate = addDays(new Date(), daysCount);

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
};

const formattingDeliveryDate = computed<string>(() => {
  if (!calculateData.value || !calculateData.value.delivery_detail.delivery_zone_time_min) return '';
  return getFormattingDeliveryDate(calculateData.value.delivery_detail.delivery_zone_time_min);
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
  const primaryCity = props.auth.user.addresses.find((address) => address.is_primary);

  if (primaryCity) {
    selectedAddress.value = primaryCity;
    setCity(primaryCity);
  }
}

const tabs = computed<Array<{ id: string; label: string }>>(() => {
  const baseTabs = [
    { id: 'about', label: t('product_detail_card.about_product') },
    { id: 'reviews', label: `Отзывы (${props.product.reviews_count})` },
    { id: 'delivery', label: t('product_detail_card.delivery') },
    { id: 'manufacturer', label: t('product_detail_card.manufacturer') },
  ];

  if (props.product.cutting.content) {
    baseTabs.splice(3, 0, { id: 'cutting', label: t('product_detail_card.cutting') });
  }

  return baseTabs;
});

const currentTab = ref<string>('about');

const isExpanded = ref(false);
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

const toggle = (): void => {
  isExpanded.value = !isExpanded.value;
};

const firstAttributes = computed(() => props.product.attributes.filter((a) => a.isFirstAttribute));
const otherAttributes = computed(() => props.product.attributes.filter((a) => !a.isFirstAttribute));
const filledAttributesCount = computed(() => props.product.attributes.filter((a) => !!a.value).length);
const filledOtherAttributesCount = computed(() => props.product.attributes.filter((a) => !a.isFirstAttribute && !!a.value).length);

const breadcrumbItems = computed<{ label: string; route: string }[]>(() => {
  const items = [
    { label: 'Главная', route: route('main-page') },
    { label: 'Каталог', route: route('catalog.index') },
  ];

  const categoryItems = props.product.categories.map((el, index) => {
    const slugPath = props.product.categories
      .slice(0, index + 1)
      .map((cat) => cat.slug)
      .join('/');

    return {
      label: el.name,
      route: `/catalog/${slugPath}`,
    };
  });

  return [
    ...items,
    ...categoryItems,
    { label: props.product.name, route: `/catalog/product/${props.product.slug}` },
  ];
});

function getEmbedLink(link: string) {
  if (!link) return null;

  if (link.includes('youtube.com/watch?v=')) {
    const id = new URL(link).searchParams.get('v');
    return `https://www.youtube.com/embed/${id}`;
  }
  if (link.includes('youtu.be/')) {
    const id = link.split('youtu.be/')[1].split(/[?&]/)[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  if (link.includes('rutube.ru/video/')) {
    const id = link.split('/video/')[1]?.split('/')[0];
    return `https://rutube.ru/play/embed/${id}`;
  }
  if (link.includes('rutube.ru/play/embed/')) {
    return link;
  }

  if (link.includes('vimeo.com/')) {
    const id = link.split('vimeo.com/')[1]?.split(/[?&]/)[0];
    return `https://player.vimeo.com/video/${id}`;
  }

  return link;
}

const embedLink = computed(() => getEmbedLink(props.product?.cutting?.video_link));

watch(selectedCity, (newCity) => {
  if (newCity) {
    calculationModel.city_id = newCity.id;
  }
});

watchEffect(calculateOrder);
const { isMobile } = useScreenSize();

const appName = import.meta.env.VITE_APP_NAME;
</script>

<template>
  <VContainer class="text-text">
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
        <div class="flex-1">
          <div class="flex flex-col gap-8 max-md:items-center sm:flex-row">
            <div class="max-md:max-w-full">
              <ProductSlider :product="product" />
            </div>
            <div class="w-full max-sm:px-6">
              <div class="text-subsidiary-medium md:text-mob-small-medium flex justify-between">
                <div class="flex items-center gap-2">
                  <div class="flex items-center gap-1">
                    {{ product.average_rating }}
                    <Rating :default-value="Number(product.average_rating)" readonly class="-mt-0.5" />
                  </div>
                  <a href="#reviews" class="text-subsidiary flex items-center gap-1 md:gap-2" @click="currentTab = 'reviews'">
                    <span>{{ t('product_detail_card.reviews', product.reviews_count) }}</span>
                    <IconCaretRight width="16px" height="16px" />
                  </a>
                </div>
                <div v-if="product.article_number">
                  <span class="text-subsidiary max-md:text-complimentary-reg">{{ t('product_detail_card.article') }}</span>
                  {{ product.article_number }}
                </div>
              </div>
              <h1 class="text-small-medium lg:text-large-medium mt-6">{{ product.name }}</h1>
              <p class="text-subsidiary-reg md:text-small-medium">
                <span class="text-complimentary-reg md:text-mob-small-medium text-subsidiary">Средний вес:</span>
                {{ product.weight }} {{ product.weight_type }}
              </p>
              <div v-if="filledAttributesCount" class="bg-input rounded-20 mt-6 hidden flex-col gap-4 p-4 min-[1500px]:flex">
                <template v-for="attribute in firstAttributes" :key="attribute.attribute_id">
                  <div v-if="attribute.value" class="bg-filling text-subsidiary w-fit rounded-lg px-2 py-1 text-[14px] font-medium">
                    <span v-if="attribute.isFirstAttribute">
                      {{ attribute.attribute_name }}:
                      <span class="text-mob-small-medium text-text">
                        {{ attribute.value }}
                      </span>
                    </span>
                  </div>
                </template>

                <dl v-if="filledOtherAttributesCount" class="grid grid-cols-2 gap-y-2.5 md:max-w-[350px]">
                  <template v-for="attribute in otherAttributes" :key="attribute.attribute_id">
                    <template v-if="attribute.value">
                      <dt class="text-complimentary-reg md:text-subsidiary-medium text-additional">{{ attribute.attribute_name }}:</dt>
                      <dd class="text-subsidiary-medium md:text-mob-small-medium -mt-1">
                        {{ attribute.value }}
                      </dd>
                    </template>
                  </template>
                </dl>
              </div>
              <div class="rounded-20 mx-auto mt-6 hidden max-w-md p-4 shadow-[0px_2px_20px_rgba(0,0,0,0.25)] min-[1500px]:!hidden sm:block">
                <template v-if="!!product.sale_price">
                  <div class="flex justify-between">
                    <p v-if="product.sale_price" class="text-small-medium md:text-heavy-medium">{{ product.sale_price }} {{ product.price_type }}</p>
                    <p class="text-small-medium md:text-medium-medium text-subsidiary line-through">{{ product.price }} {{ product.price_type }}</p>
                  </div>
                </template>
                <p v-else class="text-small-medium md:text-heavy-medium">{{ product.price }} {{ product.price_type }}</p>
                <ProductQuantityIndicator class="mt-2" :quantity="product.quantity" />
                <div class="mt-6 flex flex-col gap-2">
                  <AddToCart :id="product.id" :count-in-cart="product.count_in_cart" :quantity="product.quantity" button-type="full" />
                </div>
              </div>
              <div v-if="isMobile">
                <div class="rounded-20 mt-4 p-4 shadow-[0px_2px_20px_rgba(0,0,0,0.25)]">
                  <template v-if="!!product.sale_price">
                    <div class="flex justify-between">
                      <p v-if="product.sale_price" class="text-small-medium md:text-heavy-medium">
                        {{ product.sale_price }} {{ product.price_type }}
                      </p>
                      <p class="text-small-medium md:text-medium-medium text-subsidiary line-through">{{ product.price }} {{ product.price_type }}</p>
                    </div>
                  </template>
                  <p v-else class="text-small-medium md:text-heavy-medium">{{ product.price }} {{ product.price_type }}</p>
                  <ProductQuantityIndicator class="mt-2" :quantity="product.quantity" />
                  <div class="mt-6 flex flex-col gap-2">
                    <AddToCart :id="product.id" :count-in-cart="product.count_in_cart" :quantity="product.quantity" button-type="full" />
                  </div>
                </div>
                <div class="border-filling rounded-20 text-text-secondary mt-6 w-full border p-4">
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
                  <div v-if="calculateData?.delivery_detail.pickup_location_time_min" class="border-t-filling mt-2 border-t">
                    <h5 class="text-small-medium py-2">{{ t('product_detail_card.pickup') }}</h5>
                    <p class="text-mob-small-reg text-additional">
                      {{ getFormattingDeliveryDate(calculateData.delivery_detail.pickup_location_time_min) }}
                    </p>
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
          </div>
          <div class="mt-8">
            <div>
              <div class="hidden w-full gap-4 min-[1500px]:!hidden sm:flex">
                <div v-if="filledAttributesCount > 0" class="bg-input rounded-20 mt-6 flex basis-1/2 flex-col gap-4 p-4">
                  <template v-for="attribute in firstAttributes" :key="attribute.attribute_id">
                    <template v-if="attribute.value">
                      <div class="bg-filling text-subsidiary mb-2 w-fit rounded-lg px-2 py-1 text-[14px] font-medium">
                        <span v-if="attribute.isFirstAttribute">
                          {{ attribute.attribute_name }}:
                          <span class="text-mob-small-medium text-text">
                            {{ attribute.value }}
                          </span>
                        </span>
                      </div>
                    </template>
                  </template>

                  <dl class="grid grid-cols-2 gap-y-2.5 md:max-w-[350px]">
                    <template v-for="attribute in otherAttributes" :key="attribute.attribute_id">
                      <template v-if="attribute.value">
                        <dt class="text-complimentary-reg md:text-subsidiary-medium text-additional">{{ attribute.attribute_name }}:</dt>
                        <dd class="text-subsidiary-medium md:text-mob-small-medium -mt-1">
                          {{ attribute.value }}
                        </dd>
                      </template>
                    </template>
                  </dl>
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
                  <div v-if="calculateData?.delivery_detail.pickup_location_time_min" class="border-t-filling mt-2 border-t">
                    <h5 class="text-small-medium py-2">{{ t('product_detail_card.pickup') }}</h5>
                    <p class="text-mob-small-reg text-additional">
                      {{ getFormattingDeliveryDate(calculateData.delivery_detail.pickup_location_time_min) }}
                    </p>
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
              <template v-if="product.gift_product && product.gift_product?.gift_items.length"></template>
              <CartProductCard
                v-for="gift in product.gift_product?.gift_items"
                :key="gift.id"
                gift-type="forProduct"
                :item="{ ...gift, total_price: 0 }"
              >
                <template #addToCart>
                  <div v-if="gift.is_available" class="text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2">
                    1 шт
                  </div>
                  <span v-else class="text-mob-small-bold">Нет в наличии</span>
                </template>
              </CartProductCard>
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
                  <div v-if="isMobile && filledAttributesCount > 0" class="bg-input rounded-20 mt-6 mb-4 p-4">
                    <template v-for="attribute in firstAttributes" :key="attribute.attribute_id">
                      <template v-if="attribute.value">
                        <div class="bg-filling text-subsidiary mb-2 w-fit rounded-lg px-2 py-1 text-[14px] font-medium">
                          <span v-if="attribute.isFirstAttribute">
                            {{ attribute.attribute_name }}:
                            <span class="text-mob-small-medium text-text">
                              {{ attribute.value }}
                            </span>
                          </span>
                        </div>
                      </template>
                    </template>

                    <dl class="mt-4 grid grid-cols-2 gap-y-2.5 md:max-w-[350px]">
                      <template v-for="attribute in otherAttributes" :key="attribute.attribute_id">
                        <template v-if="attribute.value">
                          <dt class="text-complimentary-reg md:text-subsidiary-medium text-additional">{{ attribute.attribute_name }}:</dt>
                          <dd class="text-subsidiary-medium md:text-mob-small-medium -mt-1">
                            {{ attribute.value }}
                          </dd>
                        </template>
                      </template>
                    </dl>
                  </div>
                  <p
                    ref="descriptionRef"
                    :class="['text-subsidiary-reg transition-all duration-300 ease-in-out', { 'line-clamp-3': !isExpanded }]"
                    v-html="product.description"
                  />
                  <button
                    v-if="isExpandable"
                    class="text-subsidiary-medium mt-2 flex cursor-pointer items-center gap-2 focus:outline-none"
                    :aria-expanded="isExpanded"
                    @click="toggle"
                  >
                    {{ isExpanded ? 'Меньше' : 'Смотреть полностью' }}
                    <IconArrowDown :class="['mt-0.5 transition-transform duration-200 ease-in-out', { 'rotate-180': isExpanded }]" />
                  </button>
                </div>
                <div v-if="currentTab === 'reviews'" id="reviews">
                  <ProductReviews :reviews="product.reviews" :slug="product.slug" />
                </div>
                <div v-if="currentTab === 'delivery'" id="delivery">
                  <ProductDelivery />
                </div>
                <div v-if="currentTab === 'cutting'" class="flex flex-col gap-2 md:flex-row md:justify-between md:gap-8">
                  <div>
                    <div v-html="product.cutting.content" />
                    <VPicture v-if="product.cutting?.image?.path" :src="product.cutting?.image?.path" alt="бык" class="mt-4" />
                    <div
                      v-if="product.cutting.button_text"
                      class="bg-filling hover:bg-default text-subsidiary-reg mt-4 w-fit rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white"
                    >
                      <a :href="product.cutting.button_link" class="flex items-center gap-2">
                        <span>{{ product.cutting.button_text }}</span>
                        <IconCaretRight :width="'16px'" :height="'16px'" />
                      </a>
                    </div>
                  </div>
                  <div v-if="product.cutting?.video_link" class="shrink-0">
                    <h4 class="text-default-medium">Видео</h4>
                    <div class="rounded-20 mt-3 overflow-hidden">
                      <iframe width="352" height="240" :src="embedLink" allow="clipboard-write; autoplay" allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
                <div v-if="currentTab === 'manufacturer'" class="sm:grid sm:grid-cols-[auto_1fr] sm:gap-8">
                  <div class="flex-grow items-center gap-2 max-md:mt-4 max-sm:flex">
                    <VPicture
                      v-if="product.manufacturer?.image?.path"
                      :src="product.manufacturer?.image?.path"
                      alt="123"
                      class="max-w-[60px] flex-shrink-0 sm:min-w-[132px]"
                    />
                    <h4 v-if="isMobile" class="text-small-medium uppercase">
                      {{ product.manufacturer.name }}
                    </h4>
                  </div>
                  <div class="text-subsidiary-reg sm:text-mob-small-reg">
                    <h4 v-if="!isMobile" class="text-default-medium uppercase">
                      {{ product.manufacturer.name }}
                    </h4>
                    <div v-html="product.manufacturer.content" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden max-w-[352px] min-[1500px]:block">
          <div class="rounded-20 min-w-[352px] p-4 shadow">
            <template v-if="!!product.sale_price">
              <div class="flex justify-between">
                <p v-if="product.sale_price" class="text-small-medium md:text-heavy-medium">{{ product.sale_price }} {{ product.price_type }}</p>
                <p class="text-small-medium md:text-medium-medium text-subsidiary line-through">{{ product.price }} {{ product.price_type }}</p>
              </div>
            </template>
            <p v-else class="text-small-medium md:text-heavy-medium">{{ product.price }} {{ product.price_type }}</p>
            <ProductQuantityIndicator class="mt-2" :quantity="product.quantity" />
            <div class="mt-6 flex flex-col gap-2">
              <AddToCart :id="product.id" :count-in-cart="product.count_in_cart" :quantity="product.quantity" button-type="full" />
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
            <div v-if="calculateData?.delivery_detail.pickup_location_time_min" class="border-t-filling mt-2 border-t">
              <h5 class="text-small-medium py-2">{{ t('product_detail_card.pickup') }}</h5>
              <p class="text-mob-small-reg text-additional">
                {{ getFormattingDeliveryDate(calculateData.delivery_detail.pickup_location_time_min) }}
              </p>
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
    <VSection v-if="recomended_recipes.length > 0" :title="t('product_detail_card.chef_recipes')" class="mt-12 max-[640px]:!p-0 max-[640px]:!pl-4">
      <template #headerAction>
        <div
          class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4"
        >
          <Link :href="route('recipe.index')" class="flex items-center gap-2">
            <span>Все</span>
            <IconCaretRight :width="'16px'" :height="'16px'" />
          </Link>
        </div>
      </template>

      <VSlider
        :slides="recomended_recipes"
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
              <AddToFavorite :id="slide.id" :initial-value="isFavorite" />
              <VShare :url="route('recipe.show', { recipe: slide.id })" />
            </template>
          </RecipeCard>
        </template>
      </VSlider>
    </VSection>
    <VSection
      v-if="recommended_products.length > 0"
      :title="t('product_detail_card.often_bought_with')"
      class="mt-12 max-[640px]:!p-0 max-[640px]:!pl-4"
    >
      <VSlider
        :slides="recommended_products"
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
            :slug="slide.slug"
            :title="slide.name"
            :images="slide.images.map((i) => i.path)"
            :weight="slide.weight"
            :description="slide.short_description"
            :is-favorite="slide.is_wishlist"
            :degree-type="slide.degree_type"
            :categories="slide.tags.map((b) => b.name) ?? []"
            :unit="slide.weight_type"
            :sale-percent="slide.sale_percent"
            :is-new="slide.is_new"
            :price="Number(slide.sale_price) ?? 0"
            :price-unit="slide.price_type"
            :old-price="Number(slide.price) ?? 0"
            :cashback_percent="slide.cashback_percent"
          >
            <template #favoriteButton>
              <AddToFavorite :id="slide.id" :initial-value="slide.is_wishlist" />
            </template>
            <template #footer>
              <AddToCart :id="slide.id" :count-in-cart="slide.count_in_cart" :quantity="product.quantity" />
            </template>
          </ProductCard>
        </template>
      </VSlider>
    </VSection>

    <VSection v-if="combinations.length > 0" title="Рекомендации по сочетанию продуктов" class="mt-4 max-[640px]:!p-0 max-[640px]:!pl-4">
      <template #headerAction>
        <div
          class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4"
        >
          <Link :href="route('combination.index')" class="flex items-center gap-2">
            <span>Все</span>
            <IconCaretRight :width="'16px'" :height="'16px'" />
          </Link>
        </div>
      </template>
      <VSlider
        :slides="combinations"
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
          <CombinationPreviewCard :combination="slide" />
        </template>
      </VSlider>
    </VSection>

    <VSection v-if="user_purchased_products.length > 0" :title="'Вы уже покупали'" class="mt-4 max-[640px]:!p-0 max-[640px]:!pl-4">
      <template #headerAction>
        <div
          class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4"
        >
          <Link :href="route('user.profile.orders_history')" class="flex items-center gap-2">
            <span>Все</span>
            <IconCaretRight :width="'16px'" :height="'16px'" />
          </Link>
        </div>
      </template>
      <VSlider
        :slides="user_purchased_products"
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
            :slug="slide.slug"
            :title="slide.name"
            :images="slide.images.map((i) => i.path)"
            :weight="slide.weight"
            :description="slide.short_description"
            :is-favorite="slide.is_wishlist"
            :degree-type="slide.degree_type"
            :categories="slide.tags.map((b) => b.name) ?? []"
            :unit="slide.weight_type"
            :sale-percent="slide.sale_percent"
            :is-new="slide.is_new"
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

    <VSection>
      <CatalogBanner />
    </VSection>
  </VContainer>
</template>
