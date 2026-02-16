<script setup lang="ts">
import type { IAddress } from '@/entities/address';
import type { ICity } from '@/entities/city';
import type { IUser } from '@/entities/user';

import { useForm, usePage } from '@inertiajs/vue3';
import axios from 'axios';
import { addDays, format } from 'date-fns';
import { useToast } from 'primevue';
import { computed, ref, shallowRef, useTemplateRef, watch, watchEffect } from 'vue';
import { ZodError } from 'zod';

import { IDeliveryZone } from '@/entities/city/model/cityTypes';
import { AddressFields } from '@/features/Address/address-fields';
import { useOrderCalculate } from '@/features/orderCalculate';
import IconCalendar from '@/shared/icons/IconCalendar.svg';
import IconCheckCirkleGreen from '@/shared/icons/IconCheckCircleGreen.svg';
import { VButton } from '@/shared/ui/button';
import { VFormItem } from '@/shared/ui/form-item';
import Button from '@/shared/ui/volt/Button.vue';
import DatePicker from '@/shared/ui/volt/DatePicker.vue';
import Popover from '@/shared/ui/volt/Popover.vue';
import SecondaryButton from '@/shared/ui/volt/SecondaryButton.vue';
import Select from '@/shared/ui/volt/Select.vue';

import { IAddressModel } from '../model/address';
import { courierDeliveryFormSchema, courierDeliveryFormSchemaWithoutZone } from '../model/courierDeliveryform.model';
import ChangeAddress from './ChangeAddress.vue';

const page = usePage<{
  cities: Array<ICity>;
  auth: {
    user: IUser;
  };
  userAddresses: IAddress[];
}>();

const emit = defineEmits<{
  (event: 'address-applied', value: boolean, isOtherCity: boolean): void;
  (event: 'reset-address'): void;
  (event: 'deblock-address'): void;
}>();

const { add } = useToast();

const deliveryDate = defineModel<Date>('deliveryDate', {
  default: new Date(),
});
const timeInterval = defineModel<{ to: string; from: string }>('timeInterval');

const addressId = defineModel<number>('addressId');
const cityId = defineModel<number>('cityId');

const isAddressApplied = shallowRef<boolean>(false);

const popover = useTemplateRef('popover');

const { calculationModel, calculateOrder, calculateData } = useOrderCalculate();

const togglePopover = (event: Event): void => {
  popover.value?.toggle(event);
};

const isCalendarOpen = shallowRef<boolean>(false);

const tempDate = shallowRef<Date>(deliveryDate.value);
const tempTimeInterval = shallowRef<{ to: string; from: string }>();
// const selectedUserCity = shallowRef<IAddress>()
const onApplyDeliveryDate = (event: Event): void => {
  // deliveryDate.value = tempDate.value;
  popover.value?.toggle(event);
};

const addressModel = useForm<IAddressModel>({
  city_id: route().queryParams?.city_id ? Number(route().queryParams?.city_id) : undefined,
  delivery_zone_id: route().queryParams?.delivery_zone_id ? Number(route().queryParams?.delivery_zone_id) : undefined,
  city_dadata: '',
  postal_code: '',
  value_dadata: undefined,
  region: '',
  entrance: '',
  floor: '',
  apartment: '',
  dadata_json: undefined,
  street: '',
  house: '',
});

const selectedZone = computed<IDeliveryZone | null>(() => {
  if (!addressModel.delivery_zone_id) return null;
  const selectedCity = page.props.cities.find((c) => c.id === addressModel.city_id);
  return selectedCity?.delivery_zones.find((zone) => zone.id === addressModel.delivery_zone_id) || null;
});

const timeIntervals = computed<{ label: string; value: { from: string; to: string } }[]>(() => {
  if (!selectedZone.value) return [];

  return selectedZone.value.time_intervals.map((i) => ({
    label: `С ${i.from} до ${i.to}`,
    value: {
      to: i.to,
      from: i.from,
    },
  }));
});

const defaultCityId = shallowRef<number | null>(null);
const validateErrors = ref<Record<string, string>>({});

const setCity = (city: IAddress): void => {
  defaultCityId.value = city.id;
  addressModel.defaults({
    city_id: city.city_id,
    delivery_zone_id: city.delivery_zone_id,
    city_dadata: '',
    postal_code: city.postal_code,
    value_dadata: city.value_dadata,
    region: city.region,
    entrance: `${city.entrance ?? ''}`,
    floor: `${city.floor ?? ''}`,
    apartment: `${city.apartment ?? ''}`,
    street: city.street,
    house: `${city.house}`,
  });
  addressModel.reset();
};

if (page.props.auth.user) {
  if (route().queryParams?.address_id) {
    const selectedAddress = page.props.auth.user.addresses.find((address) => address.id == route().queryParams?.address_id);
    if (selectedAddress) {
      setCity(selectedAddress);
    }
  } else if (!route().queryParams?.city_id || !route().queryParams?.delivery_zone_id) {
    const primaryCity = page.props.auth.user.addresses.find((address) => address.is_primary);

    if (primaryCity) {
      setCity(primaryCity);
    }
  }
}

const isLoading = shallowRef<boolean>(false);

const isSelectedCityHasDeliveryZones = computed<boolean>(() => {
  const selectedCity = page.props.cities.find((address) => address.id === addressModel.city_id);
  return !!selectedCity?.delivery_zones.length;
});

const validationSchema = computed(() => {
  if (!isSelectedCityHasDeliveryZones.value) {
    return courierDeliveryFormSchemaWithoutZone;
  }
  return courierDeliveryFormSchema;
});
const onApplyAddress = async (save?: boolean): Promise<void> => {
  try {
    await validationSchema.value.parseAsync(addressModel);
    isLoading.value = true;
    if (!defaultCityId.value || addressModel.isDirty) {
      const res = await axios.post<{ data: { address: IAddress } }>(route('store.api'), {
        address: {
          ...addressModel,
        },
        save,
      });

      addressId.value = res.data.data.address.id;
      isAddressApplied.value = true;
    } else {
      addressId.value = defaultCityId.value!;
      isAddressApplied.value = true;
      await Promise.resolve();
    }

    deliveryDate.value = tempDate.value;
    timeInterval.value = tempTimeInterval.value;
    emit('address-applied', isAddressApplied.value, !isSelectedCityHasDeliveryZones.value);
    // router.visit(route('order.create', { delivery_zone_id: addressModel.delivery_zone_id }), {
    //   only: ['orderCalculate'],
    //   preserveState: true,
    //   preserveScroll: true,
    // });

    // deliveryDate.value = tempDate.value;
  } catch (e) {
    if (e instanceof ZodError) {
      e.issues.forEach((issue) => {
        const path = issue.path.join('.');
        validateErrors.value[path] = issue.message;
      });
    }
    if (save) {
      throw e;
    }
  } finally {
    isLoading.value = false;
  }
};

const onSaveAddress = async (): Promise<void> => {
  try {
    await onApplyAddress(true);
    add({
      detail: 'Адрес сохранен в профиле',
      severity: 'success',
      life: 3000,
    });
  } catch (error) {
    console.error(error);
  }
};

const onDeblockAddress = (): void => {
  setCity({
    id: addressId.value,
    city_id: addressModel.city_id,
    delivery_zone_id: addressModel.delivery_zone_id,
    postal_code: addressModel.postal_code ?? '',
    value_dadata: addressModel.value_dadata ?? '',
    region: addressModel.region ?? null,
    entrance: addressModel.entrance ?? null,
    floor: addressModel.floor ?? null,
    apartment: addressModel.apartment ?? null,
    street: addressModel.street ?? null,
    house: addressModel.house ?? null,
    dadata_json: '',
    user_id: 0,
    car_pass: false,
    contact_method_id: 0,
    is_primary: false,
    final_address: '',
  });

  isAddressApplied.value = false;
  emit('reset-address');
};

watch(addressModel, () => {
  validateErrors.value = {};
});

watch(
  () => addressModel.city_id,
  (newId) => {
    cityId.value = newId;
  },
  { immediate: true },
);

const minDeliveryDate = computed<Date>(() => {
  if (!calculateData.value?.delivery_detail.delivery_zone_time_min) {
    return new Date();
  }

  return addDays(new Date(), calculateData.value.delivery_detail.delivery_zone_time_min);
});
watchEffect(async () => {
  calculationModel.delivery_zone_id = addressModel.delivery_zone_id;
  await calculateOrder();

  if (tempDate.value < minDeliveryDate.value) {
    tempDate.value = minDeliveryDate.value;
  }
});
</script>

<template>
  <div class="grid gap-4 sm:gap-6">
    <div :class="{ 'rounded-20 bg-light-gray p-4': page.props.auth.user }">
      <div class="mb-4 flex justify-between gap-2">
        <p class="text-mob-small-medium sm:text-small-medium">Адрес доставки</p>
        <ChangeAddress
          v-if="page.props.auth.user && page.props.auth.user.addresses && page.props.auth.user.addresses.length"
          :selected-address-id="defaultCityId"
          :disabled="isAddressApplied"
          @change-address="setCity"
        />
      </div>
      <p class="text-subsidiary-reg text-additional mb-2">От адреса зависит ассортимент, цены и условия получения заказа</p>
      <AddressFields
        v-model:apartment="addressModel.apartment"
        v-model:city-id="addressModel.city_id"
        v-model:delivery-zone-id="addressModel.delivery_zone_id"
        v-model:entrance="addressModel.entrance"
        v-model:value-dadata="addressModel.value_dadata"
        v-model:floor="addressModel.floor"
        v-model:postal-code="addressModel.postal_code"
        v-model:city-dadata="addressModel.city_dadata"
        :disabled="isAddressApplied"
        :errors="validateErrors"
      />
    </div>
    <div v-if="isSelectedCityHasDeliveryZones" class="mt-4 grid gap-2 sm:mt-2 sm:grid-cols-2">
      <VFormItem>
        <div
          class="rounded-20 flex items-center justify-between gap-2 border border-solid py-[6px] pr-[6px] pl-[15px] transition-colors"
          :class="[isCalendarOpen ? 'border-primary bg-white' : 'bg-input border-input']"
        >
          <div class="h flex items-center gap-2">
            <IconCalendar class="shrink-0" />
            <span class="text-mob-small-reg max-w-full sm:max-w-full">Дата доставки {{ format(tempDate, 'dd.MM.yyyy') }}</span>
          </div>
          <Button
            :outlined="!isCalendarOpen"
            label="Изменить дату"
            rounded
            size="small"
            :disabled="isAddressApplied"
            class="shrink-0"
            @click="togglePopover"
          />
          <Popover ref="popover" append-to="self" class="delivery-calendar" @show="isCalendarOpen = true" @hide="isCalendarOpen = false">
            <DatePicker v-model="tempDate" inline :min-date="minDeliveryDate" :disabled="isAddressApplied">
              <template #footer>
                <div class="mt-4 flex justify-end">
                  <Button size="small" label="Применить" rounded ml-auto @click="onApplyDeliveryDate" />
                </div>
              </template>
            </DatePicker>
          </Popover>
        </div>
      </VFormItem>
      <VFormItem>
        <Select
          v-model="tempTimeInterval"
          :options="timeIntervals"
          :disabled="isAddressApplied"
          size="large"
          placeholder="Выберите временной интервал доставки"
          option-label="label"
          option-value="value"
          label-class="w-[1px]"
          :empty-message="!addressModel.delivery_zone_id ? 'Выберите зону доставки' : 'Нет доступных вариантов'"
        />
      </VFormItem>
    </div>
    <div class="flex gap-2">
      <VButton
        v-if="!isAddressApplied"
        type="button"
        label="Подтвердить выбор"
        :disabled="isLoading"
        class="w-fit"
        @click.prevent="() => onApplyAddress()"
      />
      <div v-else class="bg-filling text-mob-small-reg flex w-fit items-center gap-2 rounded-[50px] px-6 py-[14px] select-none">
        <IconCheckCirkleGreen />
        Выбор подтвержден
      </div>
      <SecondaryButton v-if="isAddressApplied" label="Редактировать" rounded @click.prevent="onDeblockAddress" />
      <SecondaryButton
        v-if="page.props.auth.user && addressModel.isDirty && !isAddressApplied"
        label="Сохранить адрес"
        rounded
        @click.prevent="onSaveAddress"
      />
    </div>
  </div>
</template>

<style>
.delivery-calendar {
  border-radius: 20px;
  border: none;

  [data-pc-section='content'] {
    padding: 0;
  }
}
</style>
