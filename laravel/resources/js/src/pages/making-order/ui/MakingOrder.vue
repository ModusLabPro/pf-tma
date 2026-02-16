<script setup lang="ts">
import { Head, Link, router, useForm } from '@inertiajs/vue3';
import { Form } from '@primevue/forms';
import { addDays, differenceInCalendarDays, format, isToday, isTomorrow, parseISO } from 'date-fns';
import { storeToRefs } from 'pinia';
import { useToast } from 'primevue';
import { computed, onBeforeUnmount, ref, shallowRef, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { YandexMapDefaultMarker } from 'vue-yandex-maps';
import { z } from 'zod';

import CartProductCard from '@/entities/cart/ui/CartProductCard.vue';
import { OrderDetail } from '@/entities/order';
import { ContactMethodsSelect } from '@/features/Address/contact-methods-select';
import { ApplyPromocode } from '@/features/applyPromocode';
import { useOrderCalculate } from '@/features/orderCalculate';
import { IProps } from '@/pages/making-order/model/pageProps';
import { usePickupLocationsStore } from '@/pages/making-order/model/usePickupLocationsStore';
import IconCaretLeft from '@/shared/icons/IconCaretLeft.svg';
import IconChats from '@/shared/icons/IconChats.svg';
import IconFire from '@/shared/icons/IconFire.svg';
import IconPickupBonus from '@/shared/icons/IconPickupBonus.svg';
import IconQuestion from '@/shared/icons/IconQuestion.svg';
import IconRepeat from '@/shared/icons/IconRepeat.svg';
import { getCookie } from '@/shared/lib/helpers/getCookie.js';
import { useScreenSize } from '@/shared/media-queries';
import { VTooltip } from '@/shared/tooltip';
import { VButton } from '@/shared/ui/button';
import { VContainer } from '@/shared/ui/container';
import { VFloatLabel } from '@/shared/ui/float-label';
import { VFloatingInput } from '@/shared/ui/floating-input';
import { VFormItem } from '@/shared/ui/form-item';
import { InputPhone } from '@/shared/ui/input-phone';
import { VPicture } from '@/shared/ui/picture';
import { VSection } from '@/shared/ui/section';
import { VSlider } from '@/shared/ui/slider';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';
import Checkbox from '@/shared/ui/volt/Checkbox.vue';
import ProgressBar from '@/shared/ui/volt/ProgressBar.vue';
import RadioButton from '@/shared/ui/volt/RadioButton.vue';
import Textarea from '@/shared/ui/volt/Textarea.vue';
import ToggleSwitch from '@/shared/ui/volt/ToggleSwitch.vue';
import { VMap } from '@/shared/ui/yandex-map';

// import { orderModelResolver } from '../model/orderModel';
import CourierDeliveryForm from './CourierDeliveryForm.vue';
import PickUpForm from './PickUpForm.vue';

const props = defineProps<IProps>();

if (route().queryParams?.product_id || route().queryParams?.combo_id) {
  router.reload({
    only: ['cart'],
  });
}

const { t } = useI18n();

const { isMobile } = useScreenSize();
const { add } = useToast();
const { calculationModel, calculateOrder, calculateData } = useOrderCalculate();

const formattingDeliveryDate = computed<string>(() => {
  if (!calculateData.value) return '';
  const finalDate = calculateData.value.delivery_detail.delivery_date
    ? parseISO(calculateData.value.delivery_detail.delivery_date)
    : addDays(
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

const ymUid = getCookie('_ym_uid');

const breadcrumbs = [
  { label: 'Главная', route: route('main-page') },
  { label: 'Корзина', route: route('cart.index') },
  { label: 'Оформление заказа', route: route('order.create') },
];

const steps = shallowRef([
  {
    id: 1,
    stepName: route().queryParams?.product_id || route().queryParams?.combo_id ? 'Быстрая покупка' : 'Корзина',
    stepDescription: computed(() => t('checkout.added_goods', calculateData.value?.order_detail?.quantity || 0)),
    progress: 100,
  },
  {
    id: 2,
    stepName: 'Данные для доставки',
    stepDescription: 'Заполните данные от этого будет завесить стоимость доставки и итоговая сумма заказа',
    progress: 2.2,
  },
  {
    id: 3,
    stepName: 'Оплата',
    stepDescription: 'Оплатите заказ онлайн или наличными курьеру',
    progress: 0,
  },
  {
    id: 4,
    stepName: 'Подтверждение',
    stepDescription:
      'Подтверждение придет на указанную вами почту или номер телефона. Так же вы сможете просмотреть детали заказа на сайте в личном кабинете',
    progress: 0,
  },
]);

calculationModel.product_id = route().queryParams?.product_id ? Number(route().queryParams?.product_id) : undefined;
calculationModel.combo_id = route().queryParams?.combo_id ? Number(route().queryParams?.combo_id) : undefined;
calculationModel.use_expiring_bonuses = route().queryParams?.use_expiring_bonuses === 'true';

const makeOrderForm = useForm({
  last_name: props.auth.user?.last_name,
  name: props.auth.user?.name,
  second_name: props.auth.user?.second_name,
  email: props.auth.user?.email,
  phone: props.auth.user?.phone,
  delivery_type: route().queryParams?.delivery_type || 'courier',
  comment: '',
  transaction_method_id: undefined,
  address_id: route().queryParams?.address_id,
  pickup_location_id: route().queryParams?.pickup_location_id,
  combo_id: route().queryParams?.combo_id,
  product_id: route().queryParams?.product_id,
  delivery_date: undefined,
  delivery_time_from: undefined,
  delivery_time_to: undefined,
  contact_methods: undefined,
  promo: route().queryParams?.promocode,
  use_expiring_bonuses: route().queryParams?.use_expiring_bonuses === 'true',
  metrica_client_id: null as string | null,
});

const orderModelResolver = computed(() => {
  if (makeOrderForm.delivery_type === 'courier') {
    return z.object({
      last_name: z.string({
        required_error: 'Обязательное поле',
      }),
      name: z.string({
        required_error: 'Обязательное поле',
      }),
      email: z
        .string({
          required_error: 'Обязательное поле',
        })
        .email('Введите корректный e-mail'),
      phone: z
        .string({
          required_error: 'Обязательное поле',
        })
        .regex(/^([0-9\s\-+()]*)$/, 'Введите корректный номер'),
      address_id: z.number({
        required_error: 'Необходимо указать и подтвердить адрес доставки',
      }),
      transaction_method_id: z.number({
        required_error: 'Обязательное поле',
      }),
    });
  }

  return z.object({
    last_name: z.string({
      required_error: 'Обязательное поле',
    }),
    name: z.string({
      required_error: 'Обязательное поле',
    }),
    email: z
      .string({
        required_error: 'Обязательное поле',
      })
      .email('Введите корректный e-mail'),
    phone: z
      .string({
        required_error: 'Обязательное поле',
      })
      .regex(/^([0-9\s\-+()]*)$/, 'Введите корректный номер'),
    pickup_location_id: z.number({
      required_error: 'Необходимо выбрать и подтвердить выбор пункта самовывоза',
    }),
    transaction_method_id: z.number({
      required_error: 'Обязательное поле',
    }),
  });
});

const validationErrors = shallowRef({});

const onUpdateTimeInterval = ({ to, from }: { to: string; from: string }): void => {
  makeOrderForm.delivery_time_from = from;
  makeOrderForm.delivery_time_to = to;
};

watch(
  () => props.transactionMethods,
  (methods) => {
    if (methods?.length === 1 && !makeOrderForm.transaction_method_id) {
      makeOrderForm.transaction_method_id = methods[0].id;
    }
  },
  { immediate: true },
);

const isAgree = shallowRef<boolean>(false);

// const deliveryDate = shallowRef<Date>(new Date());

function pushEcommercePurchase(ecommerce: any) {
  if (!ecommerce) return;

  (window as any).dataLayer = (window as any).dataLayer || [];

  (window as any).dataLayer.push({
    ecommerce,
  });
}

const createFormSubmit = (): void => {
  const { success, error } = orderModelResolver.value.safeParse(makeOrderForm);
  if (success && isAgree.value) {
    makeOrderForm.metrica_client_id = ymUid ?? null;

    makeOrderForm.post(route('order.store'), {
      onSuccess(data) {
        makeOrderForm.reset();
        const ecommerce = data.props?.ecommerce_order_data?.ecommerce;
        pushEcommercePurchase(ecommerce);
        add({
          detail: data.props.flash?.success,
          severity: 'success',
          life: 10000,
          group: 'html',
        });
      },
      onError() {
        add({
          detail: 'Не удалось создать заказ',
          severity: 'error',
          life: 10000,
        });
      },
    });
  } else {
    if (error) {
      for (const [key, value] of Object.entries(error?.format())) {
        validationErrors.value = {
          ...validationErrors.value,
          [key]: { error: Array.isArray(value) ? value : { message: value._errors[0] } },
        };
      }
    }
    if (!isAgree.value) {
      validationErrors.value = { ...validationErrors.value, isAgree: { error: { message: 'Обязательное поле' } } };
    }
    console.log(validationErrors.value);
  }
};

const onPromocodeApplied = (promocode: string): void => {
  calculationModel.promo = promocode;
  makeOrderForm.promo = promocode;
  calculateOrder();
};

const pickupLocationStore = usePickupLocationsStore();

const onChosePickupLocation = async (): Promise<void> => {
  if (pickupLocationStore.selectedLocation) {
    makeOrderForm.pickup_location_id = pickupLocationStore.selectedLocation.id;
    calculationModel.pickup_location_id = pickupLocationStore.selectedLocation.id;
    await calculateOrder();
    makeOrderForm.delivery_date = addDays(new Date(), calculateData.value?.delivery_detail.pickup_location_time_min ?? 0);
    isAddressApplied.value = true;
  }
};

const isAddressApplied = shallowRef<boolean>(false);
const isOtherCity = shallowRef<boolean>(false);

const onAddressApplied = async (value: boolean, otherCity: boolean): Promise<void> => {
  isAddressApplied.value = value;
  isOtherCity.value = otherCity;
  steps.value[1]!.progress = 100;
  try {
    calculationModel.address_id = makeOrderForm.address_id;
    calculationModel.delivery_date = makeOrderForm.delivery_date;
    calculationModel.delivery_time_from = makeOrderForm.delivery_time_from;
    calculationModel.delivery_time_to = makeOrderForm.delivery_time_to;
    await calculateOrder();
  } catch (error) {
    console.error(error);
  }
};

const isCreateDisabled = computed<boolean>(() => {
  switch (makeOrderForm.delivery_type) {
    case 'courier': {
      return !(
        isAddressApplied.value &&
        makeOrderForm.last_name &&
        makeOrderForm.name &&
        makeOrderForm.email &&
        makeOrderForm.phone &&
        makeOrderForm.address_id &&
        makeOrderForm.transaction_method_id &&
        isAgree.value
      );
    }
    case 'pickup': {
      return !(
        makeOrderForm.last_name &&
        makeOrderForm.name &&
        makeOrderForm.email &&
        makeOrderForm.phone &&
        makeOrderForm.pickup_location_id &&
        makeOrderForm.transaction_method_id &&
        isAgree.value
      );
    }
    default: {
      return true;
    }
  }
});
calculateOrder();

onBeforeUnmount(() => {
  pickupLocationStore.resetStore();
});

const onResetAddress = () => {
  isAddressApplied.value = false;
  makeOrderForm.address_id = undefined;
  makeOrderForm.pickup_location_id = undefined;
  steps.value[1]!.progress = 2.2;
};

const onDeblockAddress = async (): Promise<void> => {
  calculationModel.address_id = undefined;
  calculationModel.delivery_date = undefined;
  calculationModel.delivery_time_from = undefined;
  calculationModel.delivery_time_to = undefined;

  await calculateOrder();
};

function smartFormat(number: number): string {
  return new Intl.NumberFormat('ru-RU', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(number);
}

const { selectedCity } = storeToRefs(pickupLocationStore);
const selectedCourierCityId = ref<number>(0);

const pickupBonusPoints = computed(() => {
  if (makeOrderForm.delivery_type === 'courier') {
    const city = props.cities.find((c) => c.id === selectedCourierCityId.value);
    return city?.pickup_bonus_points ?? 0;
  } else if (makeOrderForm.delivery_type === 'pickup') {
    return selectedCity.value?.pickup_bonus_points ?? 0;
  }
  return 0;
});

const checkGift = () => {
  if (!props.auth.user) {
    router.post(
      route('cart.checkGift'),
      {
        email: makeOrderForm.email,
        phone: makeOrderForm.phone,
      },
      {
        only: ['cart'],
        preserveScroll: true,
      },
    );
  }
};

watch(
  () => makeOrderForm.use_expiring_bonuses,
  (newValue) => {
    if (calculationModel.use_expiring_bonuses !== newValue) {
      calculationModel.use_expiring_bonuses = newValue;
      calculateOrder();
    }
  },
);

// const isAndroid = /Android/i.test(navigator.userAgent);
</script>

<template>
  <Head v-if="seoData">
    <title>{{ seoData.seo_title }}</title>
    <meta v-if="seoData.seo_description" name="description" :content="seoData.seo_description" />
    <meta v-if="seoData.seo_keywords" name="keywords" :content="seoData.seo_keywords" />
  </Head>
  <div class="mt-3">
    <VContainer>
      <div class="px-6 sm:px-8">
        <Breadcrumb :model="breadcrumbs" class="mt-4 mb-6 sm:mt-0">
          <template #item="{ item }">
            <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
              {{ item.label }}
            </Link>
          </template>
        </Breadcrumb>
        <VSection class="p-0!">
          <template #header>
            <header class="mb-6 grid w-full gap-4 sm:gap-6">
              <div class="flex max-w-full items-center justify-between gap-4 sm:gap-6">
                <h2 class="text-default-bold sm:text-heavy-bold mb-1">Оформление заказа</h2>
                <Link
                  :href="route('cart.index')"
                  class="bg-filling text-subsidiary-reg text-text hover:bg-default rounded-20 flex items-center gap-2 px-3 py-2 transition-colors hover:text-white"
                >
                  <IconCaretLeft class="h-5 w-5" />
                  {{ isMobile ? 'В корзину' : 'Вернуться в корзину' }}
                </Link>
              </div>
            </header>
          </template>
          <div v-if="banners?.length" class="my-6 w-full">
            <VSlider
              :slider-options="{
                spaceBetween: 20,
                breakpoints: {
                  0: {
                    slidesPerView: 1,
                  },
                },
              }"
              :slides="banners"
              class="max-w-full"
            >
              <template #slide="{ slide }">
                <div
                  :style="{ backgroundImage: `url(${slide.image.path}), linear-gradient(to bottom, rgba(2, 40, 63, 0), rgba(2, 40, 63, 1))` }"
                  class="rounded-20 flex min-h-[238px] w-full items-end bg-cover bg-center bg-no-repeat p-4 text-white bg-blend-color md:min-h-[193px] md:items-center md:p-6"
                >
                  <div class="grid gap-2">
                    <div v-if="slide.promotion_days_left" class="bg-delete text-subsidiary-medium w-fit rounded-[100px] px-2 py-1 text-white">
                      Еще {{ slide.promotion_days_left }} дней
                    </div>
                    <h2 class="text-vast-mob-title-bold md:text-vast-title-bold uppercase">{{ slide.title }}</h2>
                    <p class="text-mob-small-bold md:text-default-bold">{{ slide.description }}</p>
                    <p class="text-subsidiary-reg md:text-mob-small-reg">{{ slide.addition_description }}</p>
                  </div>
                </div>
              </template>
            </VSlider>
          </div>
          <div
            class="bg-light-gray grid w-[calc(100dvw_-_24px)] grid-cols-[repeat(4,minmax(182px,1fr))] gap-1 overflow-x-scroll rounded-2xl p-3 sm:w-full sm:overflow-x-auto"
          >
            <div v-for="step in steps" :key="step.id" class="flex flex-1 flex-col gap-1">
              <ProgressBar :value="step.progress" :show-value="false" />
              <p class="text-mob-small-medium">{{ step.stepName }}</p>
              <p class="text-complimentary-reg text-additional">{{ step.stepDescription }}</p>
            </div>
          </div>
          <div class="mt-6 flex flex-col gap-8 xl:flex-row">
            <div class="grow basis-3/4">
              <Form id="make-order" @submit="createFormSubmit">
                <div class="border-filling border-b border-solid pb-6">
                  <div class="flex flex-col gap-4" :class="{ 'bg-light-gray rounded-20 p-4': auth.user }">
                    <p class="text-small-bold sm:text-default-bold">Получатель</p>
                    <fieldset>
                      <legend class="text-mob-small-medium sm:text-small-medium mb-4">Данные получателя</legend>
                      <div class="grid gap-2 sm:grid-cols-3">
                        <VFloatingInput
                          v-model="makeOrderForm.last_name"
                          label="Ваша фамилия"
                          name="last_name"
                          :error="validationErrors?.last_name?.error?.message"
                          required
                          clearable
                        />
                        <VFloatingInput
                          v-model="makeOrderForm.name"
                          name="name"
                          label="Ваше имя"
                          :error="validationErrors?.name?.error?.message"
                          clearable
                          required
                        />
                        <VFloatingInput v-model="makeOrderForm.second_name" name="second_name" label="Ваше отчество" clearable />
                      </div>
                    </fieldset>
                    <fieldset>
                      <legend class="text-mob-small-medium sm:text-small-medium mb-4">Контактные данные</legend>
                      <div class="grid gap-2 sm:grid-cols-3">
                        <VFloatingInput
                          v-model="makeOrderForm.email"
                          :error="validationErrors?.email?.error?.message"
                          name="email"
                          type="email"
                          label="Ваш e-mail"
                          clearable
                          required
                          @blur="checkGift"
                        />
                        <VFormItem :error="validationErrors?.phone?.error?.message">
                          <VFloatLabel :label="t('checkout.phone')" required>
                            <template #default="{ labelId }">
                              <!--                              <InputMask-->
                              <!--                                v-if="!isAndroid"-->
                              <!--                                :id="labelId"-->
                              <!--                                v-model="makeOrderForm.phone"-->
                              <!--                                :unmask="false"-->
                              <!--                                mask="+7 (999) 999-99-99"-->
                              <!--                                name="phone"-->
                              <!--                                type="tel"-->
                              <!--                                inputmode="numeric"-->
                              <!--                                autocomplete="tel"-->
                              <!--                                autocorrect="off"-->
                              <!--                                autocapitalize="off"-->
                              <!--                                spellcheck="false"-->
                              <!--                                fluid-->
                              <!--                                required-->
                              <!--                                @blur="checkGift"-->
                              <!--                              />-->
                              <InputPhone :id="labelId" v-model="makeOrderForm.phone" @blur="checkGift" />
                            </template>
                          </VFloatLabel>
                        </VFormItem>
                        <ContactMethodsSelect v-model="makeOrderForm.contact_methods" :options="allContactMethods" />
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div class="border-filling mt-6 flex flex-col gap-4 border-b border-solid pb-6">
                  <p class="text-small-bold sm:text-default-bold">Доставка</p>
                  <div class="flex flex-col gap-4 md:flex-row lg:gap-8">
                    <div class="flex flex-col gap-6" :class="[makeOrderForm.delivery_type === 'pickup' ? 'basis-1/2' : 'w-full']">
                      <fieldset>
                        <legend class="text-mob-small-medium sm:text-small-medium mb-4 flex items-center gap-2">
                          <span>Способ доставки</span>
                          <div v-if="pickupBonusPoints" class="bg-push-green text-subsidiary-reg inline-flex items-center gap-2 rounded-full p-2">
                            <IconPickupBonus />
                            <span
                              ><span class="text-subsidiary-medium">+{{ pickupBonusPoints }}</span> баллов за самовывоз
                            </span>
                          </div>
                        </legend>
                        <div class="flex gap-6">
                          <label class="flex items-center gap-3 p-2">
                            <RadioButton v-model="makeOrderForm.delivery_type" value="courier" name="deliveryMethod" :disabled="isAddressApplied" />
                            <span class="text-mob-small-reg">Курьер</span>
                          </label>
                          <label class="flex items-center gap-3 p-2">
                            <RadioButton v-model="makeOrderForm.delivery_type" value="pickup" name="deliveryMethod" :disabled="isAddressApplied" />
                            <span class="text-mob-small-reg">Самовывоз</span>
                          </label>
                        </div>
                      </fieldset>
                      <VFormItem v-if="makeOrderForm.delivery_type === 'courier'" :error="validationErrors?.address_id?.error?.message">
                        <CourierDeliveryForm
                          v-model:address-id="makeOrderForm.address_id"
                          v-model:delivery-date="makeOrderForm.delivery_date"
                          v-model:city-id="selectedCourierCityId"
                          @update:time-interval="onUpdateTimeInterval"
                          @address-applied="onAddressApplied"
                          @reset-address="onResetAddress"
                          @deblock-address="onDeblockAddress"
                        />
                      </VFormItem>
                      <VFormItem v-if="makeOrderForm.delivery_type === 'pickup'" :error="validationErrors?.pickup_location_id?.error?.message">
                        <PickUpForm @apply-chose="onChosePickupLocation" @reset="onResetAddress" />
                      </VFormItem>
                    </div>
                    <div v-if="makeOrderForm.delivery_type === 'pickup'" class="rounded-20 basis-1/2 overflow-hidden">
                      <VMap
                        :zoom="pickupLocationStore.selectedLocation ? 19 : 11"
                        :center="pickupLocationStore.locationCoordinates"
                        :height="isMobile ? '420px' : '100%'"
                      >
                        <template #marker>
                          <template v-for="location in pickupLocationStore.locationsList" :key="location.id">
                            <YandexMapDefaultMarker
                              :settings="{
                                coordinates: [Number(location.longitude), Number(location.latitude)],
                              }"
                            />
                          </template>
                        </template>
                      </VMap>
                    </div>
                  </div>
                </div>
                <div class="border-filling mt-6 flex flex-col gap-4 border-b border-solid pb-6">
                  <p class="text-small-bold sm:text-default-bold">Комментарий к заказу</p>
                  <Textarea v-model="makeOrderForm.comment" class="resize-none" placeholder="Комментарий" />
                </div>
                <div class="border-filling mt-6 flex flex-col gap-4 border-b border-solid pb-6">
                  <p class="text-small-bold sm:text-default-bold">Способ оплаты</p>
                  <VFormItem :error="validationErrors?.transaction_method_id?.error?.message">
                    <div class="grid auto-cols-fr gap-2 sm:grid-flow-col">
                      <label
                        v-for="transactionMethod in transactionMethods"
                        :key="transactionMethod.id"
                        class="bg-light-gray grid grid-cols-[auto_1fr_auto] gap-2 rounded-2xl p-3"
                      >
                        <span>
                          <VPicture v-if="transactionMethod.icon" :src="transactionMethod.icon.path" alt="Иконка" />
                        </span>
                        <span class="inline-flex flex-col gap-1">
                          <span class="text-mob-small-medium">{{ transactionMethod.name }}</span>
                          <span class="text-subsidiary-reg text-additional">{{ transactionMethod.description }}</span>
                        </span>
                        <RadioButton
                          v-model="makeOrderForm.transaction_method_id"
                          :value="transactionMethod.id"
                          :invalid="!!validationErrors?.transaction_method_id?.error?.message"
                          name="transaction_method_id"
                        />
                      </label>
                    </div>
                  </VFormItem>
                </div>
              </Form>
              <div class="mt-6">
                <p class="text-small-bold sm:text-default-bold mb-4">Содержание заказа</p>
                <div class="grid">
                  <template v-if="cart.formatedItems?.length">
                    <CartProductCard v-for="item in cart.formatedItems" :key="item.id" :item>
                      <template #addToCart>
                        <div
                          v-if="!item.is_combo && !item.is_gift"
                          class="text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"
                        >
                          {{ `${smartFormat(item.quantity * Number(item.item.weight))} ${item.item.weight_type}` }}
                        </div>
                        <div v-if="item.is_gift" class="text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2">
                          1 шт
                        </div>
                      </template>
                    </CartProductCard>
                  </template>
                </div>
              </div>
            </div>
            <div class="rounded-20 flex w-full shrink-0 flex-col gap-2 xl:max-w-88">
              <ApplyPromocode @promocode-applied="onPromocodeApplied">
                <template #usePointsExpire>
                  <div v-if="auth.user && calculateData?.order_detail?.bonus_spent_limit" class="mt-6 flex items-center gap-2">
                    <IconFire class="text-delete h-6 w-6" />
                    <div>
                      <p class="text-mob-small-medium">
                        {{ t('checkout.takePoints') }}
                        <span class="text-delete">{{ t('checkout.takePointsValue', calculateData?.order_detail?.bonus_spent_limit) }}</span>
                      </p>
                      <p class="text-subsidiary-reg text-additional">Баллы действуют до {{ $page.props.expireDate }}</p>
                    </div>
                    <ToggleSwitch v-model="makeOrderForm.use_expiring_bonuses" name="use_expiring_bonuses" class="shrink-0" />
                  </div>
                </template>
              </ApplyPromocode>
              <section class="rounded-20 bg-light-gray p-4">
                <header class="mb-4 sm:mb-6">
                  <h4 class="text-small-medium sm:text-default-medium mb-2">Детали доставки</h4>
                  <p class="text-subsidiary-reg text-additional">В зависимости от выбранного способа доставки и адреса данные могут измениться</p>
                </header>
                <dl class="grid grid-cols-[minmax(0,140px)_1fr] items-start gap-2">
                  <template v-if="makeOrderForm.delivery_type === 'courier'">
                    <dt class="text-subsidiary-medium text-subsidiary py-0.5">Срок доставки:</dt>
                    <dd class="text-mob-small-medium">
                      <template v-if="!isOtherCity">
                        <template v-if="calculateData?.delivery_detail.delivery_date">
                          {{ formattingDeliveryDate }}
                        </template>
                        <span v-else class="text-additional">не выбрано</span>
                      </template>
                      <span v-else class="inline-flex items-start gap-1">
                        <span class="block max-w-[120px]">Рассчитывается индивидуально</span>
                        <VTooltip value="Срок доставки зависит от адреса, веса и стоимости заказа" />
                      </span>
                    </dd>
                    <template v-if="!isOtherCity">
                      <dt class="text-subsidiary-medium text-subsidiary py-0.5">Время доставки:</dt>
                      <dd class="text-mob-small-medium">
                        <template v-if="calculateData?.delivery_detail.delivery_time_from && calculateData?.delivery_detail.delivery_time_to">
                          {{ `с ${calculateData.delivery_detail.delivery_time_from} до ${calculateData?.delivery_detail.delivery_time_to}` }}
                        </template>
                        <span v-else class="text-additional">не выбрано</span>
                      </dd>
                    </template>
                    <dt class="text-subsidiary-medium text-subsidiary py-0.5">Город:</dt>
                    <dd class="text-mob-small-medium">
                      <template v-if="calculateData?.delivery_detail.city">
                        {{ calculateData.delivery_detail.city }}
                      </template>
                      <span v-else class="text-additional">не выбрано</span>
                    </dd>
                    <dt class="text-subsidiary-medium text-subsidiary py-0.5">Адрес:</dt>
                    <dd class="text-mob-small-medium">
                      <template v-if="calculateData?.delivery_detail.address_full">
                        {{ calculateData.delivery_detail.address_full }}
                      </template>
                      <span v-else class="text-additional">не выбрано</span>
                    </dd>
                    <template v-if="!isOtherCity">
                      <dt class="text-subsidiary-medium text-subsidiary py-0.5">Зона доставки:</dt>
                      <dd>
                        <template v-if="calculateData?.delivery_detail.delivery_zone_name">
                          <span class="inline-flex items-center gap-1">
                            <span class="text-mob-small-medium">{{ calculateData.delivery_detail.delivery_zone_name }}</span>
                            <span class="text-complimentary-reg text-additional">{{ calculateData?.delivery_detail.delivery_zone_description }}</span>
                          </span>
                        </template>
                        <span v-else class="text-additional text-mob-small-medium block">не выбрано</span>
                      </dd>
                    </template>
                  </template>
                  <template v-if="makeOrderForm.delivery_type === 'pickup'">
                    <dt class="text-subsidiary-medium text-subsidiary py-0.5">Срок доставки:</dt>
                    <dd class="text-mob-small-medium">
                      <template v-if="!isOtherCity">
                        <template v-if="calculateData?.delivery_detail.pickup_location_time_min">
                          {{ formattingDeliveryDate }}
                        </template>
                        <span v-else class="text-additional">не выбрано</span>
                      </template>
                      <span v-else class="inline-flex items-start gap-1">
                        <span class="block max-w-[120px]">Рассчитывается индивидуально</span>
                        <VTooltip value="Срок доставки зависит от адреса, веса и стоимости заказа" />
                      </span>
                    </dd>
                    <dt class="text-subsidiary-medium text-subsidiary self-start py-0.5">Пункт выдачи:</dt>
                    <dd class="text-mob-small-medium">
                      <template v-if="calculateData?.delivery_detail.pickup_location_address && calculateData?.delivery_detail.pickup_location_name">
                        {{ `${calculateData?.delivery_detail.pickup_location_name}, ${calculateData?.delivery_detail.pickup_location_address}` }}
                      </template>
                      <span v-else class="text-additional">не выбран</span>
                    </dd>
                  </template>
                  <dt class="text-subsidiary-medium text-subsidiary py-0.5">
                    {{ makeOrderForm.delivery_type === 'courier' ? 'Стоимость доставки:' : 'Стоимость:' }}
                  </dt>
                  <dd class="text-mob-small-medium">
                    <template v-if="!isOtherCity">
                      <span class="inline-flex items-center gap-2">
                        <template
                          v-if="
                            calculateData?.delivery_detail.delivery_zone_name ||
                            calculateData?.delivery_detail.address_full ||
                            calculateData?.delivery_detail.pickup_location_address
                          "
                        >
                          {{ calculateData?.delivery_detail.delivery_price }} руб.
                        </template>
                        <span v-else class="text-mob-small-medium text-additional">нет данных</span>
                        <VTooltip value="Стоимость доставки зависит от адреса, веса и стоимости заказа" />
                      </span>
                    </template>
                    <template v-else>
                      <span class="flex items-start gap-1">
                        <span class="block max-w-[120px]">Рассчитывается индивидуально</span>
                        <VTooltip value="Стоимость доставки зависит от адреса, веса и стоимости заказа" />
                      </span>
                    </template>
                  </dd>
                </dl>
              </section>
              <OrderDetail
                :order-detail="calculateData?.order_detail ?? null"
                :is-delivery-price-enabled="
                  !!calculateData?.delivery_detail.delivery_zone_name ||
                  !!calculateData?.delivery_detail.address_full ||
                  !!calculateData?.delivery_detail.pickup_location_address
                "
                :is-individual="isOtherCity"
              >
                <template #footer>
                  <VFormItem :error="validationErrors?.isAgree?.error?.message">
                    <div class="flex gap-3">
                      <Checkbox
                        v-model="isAgree"
                        binary
                        required
                        name="agreement"
                        :invalid="!!validationErrors?.isAgree?.error?.message"
                        :form-control="{ invalid: true }"
                      />
                      <p class="text-complimentary-reg text-additional">
                        Нажимая на кнопку «Оформить заказ» я подтверждаю, что ознакомился с
                        <a href="#" target="_blank" class="hover:text-text underline transition-colors">политикой конфиденциальности</a> и
                        <a href="#" target="_blank" class="hover:text-text underline transition-colors">условиями покупки</a>
                      </p>
                    </div>
                  </VFormItem>
                  <VButton label="Оформить заказ" class="mt-6 w-full" form="make-order" />
                </template>
              </OrderDetail>
              <section class="border-filling rounded-20 border border-solid p-4">
                <h4 class="text-small-medium sm:text-default-medium mb-4">Техническая поддержка</h4>
                <div class="grid grid-cols-1 gap-2">
                  <div class="flex flex-col gap-1">
                    <span class="text-complimentary-reg text-additional"
                      >Свяжитесь с нами, если у вас возникли вопросы или проблемы с оформлением заказа</span
                    >
                    <a href="tel:8-499-938-90-10" class="text-small-bold">8-499-938-90-10</a>
                  </div>
                  <div class="flex flex-col gap-1">
                    <span class="text-complimentary-reg text-additional">Или напишите нам на почту</span>
                    <a href="mailto:zakaz@primebeefmoscow.ru" class="text-mob-small-reg">zakaz@primebeefmoscow.ru</a>
                  </div>
                  <div class="grid grid-cols-1 gap-2">
                    <button class="bg-input text-mob-small-reg inline-flex items-center gap-2 rounded-lg p-3 text-start">
                      <IconChats class="shrink-0" />
                      Чат с технической поддержкой
                    </button>
                    <Link href="/page/return-exchange" class="bg-input text-mob-small-reg inline-flex items-center gap-2 rounded-lg p-3 text-start">
                      <IconRepeat class="shrink-0" />
                      Условия возврата и обмена товаров
                    </Link>
                    <Link :href="route('faq.faq.index')" class="bg-input text-mob-small-reg inline-flex items-center gap-2 rounded-lg p-3 text-start">
                      <IconQuestion class="shrink-0" />
                      Частые вопросы
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </VSection>
      </div>
    </VContainer>
  </div>
</template>

<style scoped></style>
