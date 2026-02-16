<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { useFetch } from '@vueuse/core';
import { computed, ref, useId, watch } from 'vue';

import { ICity } from '@/entities/city';
import IconArrowDown from '@/shared/icons/IconArrowDown.svg';
import { Nullable } from '@/shared/lib/utility-types/Nullable';
import { useScreenSize } from '@/shared/media-queries';
import { VFloatLabel } from '@/shared/ui/float-label';
import { VFloatingInput } from '@/shared/ui/floating-input';
import { VFormItem } from '@/shared/ui/form-item';
import AutoComplete from '@/shared/ui/volt/AutoComplete.vue';
import Popover from '@/shared/ui/volt/Popover.vue';
import VRadioButton from '@/shared/ui/volt/RadioButton.vue';

const page = usePage<{ cities: ICity[] }>();

const props = defineProps<{
  errors?: Record<string, string>;
  index?: string;
  validateField?: (path: string) => void;
  disabled?: boolean;
}>();

const getError = (field: string) => {
  if (!props.errors) return undefined;

  if (props.index !== undefined) {
    const nestedKey = `addresses.${props.index}.${field}`;
    if (nestedKey in props.errors) {
      return props.errors[nestedKey];
    }
  }

  return props.errors[field] ?? undefined;
};

const cityId = defineModel<number>('cityId');
const deliveryZoneId = defineModel<Nullable<number>>('deliveryZoneId');
const valueDadata = defineModel<string>('valueDadata');
const postalCode = defineModel<Nullable<string>>('postalCode');
const entrance = defineModel<Nullable<string>>('entrance');
const floor = defineModel<Nullable<string>>('floor');
const apartment = defineModel<Nullable<string>>('apartment');

const progress = defineModel<{ filled: number; total: number }>('progress', {
  default: () => ({ filled: 0, total: 7 }),
});

const filledFields = computed(() => {
  let count = 0;
  if (cityId.value) count++;
  if (valueDadata.value?.trim()) count++;
  if (postalCode.value?.trim()) count++;
  if (deliveryZoneId.value !== null && deliveryZoneId.value !== undefined) count++;
  if (entrance.value?.trim()) count++;
  if (floor.value?.trim()) count++;
  if (apartment.value?.trim()) count++;
  return count;
});

watch(
  filledFields,
  (newFilled) => {
    progress.value = { ...progress.value, filled: newFilled };
  },
  { immediate: true },
);

const cityPopover = ref<InstanceType<typeof Popover>>();
const zonePopover = ref<InstanceType<typeof Popover>>();
const isCitySelectOpen = ref<boolean>(false);
const isZoneSelectOpen = ref<boolean>(false);

const selectedCityName = computed(() => {
  return page.props.cities.find((city) => city.id === cityId.value)?.name || '';
});

const selectedZone = computed(() => {
  const city = page.props.cities.find((city) => city.id === cityId.value);
  return city?.delivery_zones.find((zone) => zone.id === Number(deliveryZoneId.value)) || null;
});

const availableZones = computed(() => {
  return (
    page.props.cities
      .find((city) => city.id === cityId.value)
      ?.delivery_zones.map((zone) => ({
        ...zone,
        name: [zone.name, zone.description].filter((el) => Boolean(el)).join(', '),
      })) || ''
  );
});

const toggleCitySelect = (event: Event, city: ICity) => {
  cityPopover.value?.toggle(event);
  props.validateField?.(`addresses.${props.index}.city_id`);
  if (city?.name !== 'Другой город') valueDadata.value = city?.name;
};

const hasZones = computed(() => {
  const city = page.props.cities.find((c) => c.id === cityId.value);
  return !!city?.delivery_zones?.length;
});

const toggleZoneSelect = (event: Event) => {
  zonePopover.value?.toggle(event);
  props.validateField?.(`addresses.${props.index}.delivery_zone_id`);
};

const { isDesktop } = useScreenSize();

const dadataQuery = computed(() => {
  return {
    query: valueDadata.value,
    // locations: selectedCityName.value
    //   ? selectedCityName.value === 'Москва' || selectedCityName.value === 'Санкт-Петербург'
    //     ? [{ region: selectedCityName.value }]
    //     : selectedCityName.value === 'Другой город'
    //       ? undefined
    //       : [{ city: selectedCityName.value }]
    //   : undefined,
    from_bound: { value: selectedCityName.value ? 'street' : 'city' },
    to_bound: { value: 'house' },
    restrict_value: true,
  };
});

const { data, execute } = useFetch<{ suggestions: { value: string }[] }>(
  'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
  {
    headers: {
      Authorization: `Token ${import.meta.env.VITE_DADATA_TOKEN}`,
    },
  },
  {
    immediate: false,
    afterFetch(ctx) {
      ctx.data.suggestions = ctx.data.suggestions.map((el: any) => el.value);
      return ctx;
    },
  },
)
  .post(dadataQuery)
  .json();

const inputId = useId();
const zonePrefix = useId();
</script>

<template>
  <div>
    <div>
      <div class="grid gap-2 lg:grid-cols-[1.5fr_2fr_1fr]">
        <div class="w-full">
          <VFormItem :error="getError('city_id')">
            <button
              class="bg-input rounded-20 flex w-full cursor-pointer items-center justify-between border border-transparent px-[15px] py-[13px] shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] transition-all duration-200 ease-in disabled:cursor-not-allowed disabled:!border-[#F3F5F7] disabled:bg-[#F3F5F7]"
              type="button"
              :disabled
              :class="{
                '!border-text border bg-transparent': !!selectedCityName || isCitySelectOpen,
                '!border-[#ED1C241A] !bg-[#ED1C241A]': !!getError('city_id'),
              }"
              @click.stop="toggleCitySelect"
            >
              <span class="text-additional transition-colors duration-200 ease-in" :class="{ 'text-text': !!selectedCityName || isCitySelectOpen }">
                {{ selectedCityName || 'Город' }} <span class="text-red-500">*</span>
              </span>
              <IconArrowDown class="text-default transition-transform duration-200 ease-in" :class="{ 'rotate-180': isCitySelectOpen }" />
            </button>
          </VFormItem>
          <Popover ref="cityPopover" append-to="self" class="lg:min-w-[350px]" @show="isCitySelectOpen = true" @hide="isCitySelectOpen = false">
            <div class="text-small-regular flex min-w-[260px] flex-col">
              <div
                v-for="city in page.props.cities"
                :key="city.id"
                class="hover:bg-input flex w-full cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors duration-200 ease-in"
              >
                <VRadioButton
                  v-model="cityId"
                  :input-id="String(city.id)"
                  :name="String(city.id)"
                  :value="city.id"
                  @change="toggleCitySelect($event, city)"
                />
                <label class="w-full cursor-pointer" :for="String(city.id)">{{ city.name }}</label>
              </div>
            </div>
          </Popover>
        </div>
        <div v-if="!isDesktop" class="w-full">
          <VFormItem :error="hasZones ? getError('delivery_zone_id') : ''">
            <button
              class="bg-input rounded-20 flex w-full cursor-pointer items-center justify-between border border-transparent px-[15px] py-[13px] shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] transition-all duration-200 ease-in disabled:cursor-not-allowed disabled:bg-gray-200 lg:min-w-[352px]"
              type="button"
              :disabled="!hasZones || disabled"
              :class="{
                '!border-text border bg-transparent': !!selectedZone?.id || isZoneSelectOpen,
                '!border-[#ED1C241A] !bg-[#ED1C241A]': !!getError('delivery_zone_id') && hasZones,
              }"
              @click.stop="toggleZoneSelect"
            >
              <span class="text-additional transition-colors duration-200 ease-in" :class="{ 'text-text': !!selectedZone?.id || isZoneSelectOpen }">
                {{ selectedZone?.name || 'Выберите зону доставки' }} <span v-if="hasZones" class="text-red-500">*</span>
              </span>
              <IconArrowDown class="text-default transition-transform duration-200 ease-in" :class="{ 'rotate-180': isZoneSelectOpen }" />
            </button>
          </VFormItem>
          <Popover ref="zonePopover" class="lg:min-w-[350px]" @show="isZoneSelectOpen = true" @hide="isZoneSelectOpen = false">
            <div v-if="availableZones" class="text-small-regular flex min-w-[260px] flex-col">
              <div
                v-for="zone in availableZones"
                :key="zone.id"
                class="hover:bg-input flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors duration-200 ease-in"
              >
                <VRadioButton
                  v-model="deliveryZoneId"
                  :input-id="String(zonePrefix + zone.id)"
                  :name="String(zonePrefix + zone.id)"
                  :value="zone.id"
                  @change="toggleZoneSelect"
                />
                <label class="w-full cursor-pointer" :for="String(zonePrefix + zone.id)">{{ zone.name }}</label>
              </div>
            </div>
            <template v-else-if="selectedCityName === 'Другой город'">
              <span>Для этого города нет зоны доставки</span>
            </template>
            <template v-else>
              <span>Сначала выберите город</span>
            </template>
          </Popover>
        </div>
        <VFormItem :error="getError('value_dadata')">
          <VFloatLabel :label="selectedCityName === 'Другой город' ? 'Город, улица, номер дома' : 'Улица, номер дома'" required>
            <template #default="{ labelId }">
              <AutoComplete
                v-model="valueDadata"
                fluid
                :input-id="labelId"
                :disabled
                :suggestions="data?.suggestions ?? []"
                :invalid="!!getError('value_dadata')"
                @complete="() => execute()"
                @blur="props.validateField?.(`addresses.${props.index}.value_dadata`)"
              />
            </template>
          </VFloatLabel>
        </VFormItem>
        <VFloatingInput v-if="isDesktop" v-model="postalCode" class="w-full" :name="inputId" label="Индекс" clearable :disabled />
      </div>
      <div v-if="isDesktop" class="mt-2 grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-2">
        <div class="w-full">
          <VFormItem :error="hasZones ? getError('delivery_zone_id') : ''">
            <button
              class="bg-input rounded-20 flex w-full cursor-pointer items-center justify-between border border-transparent px-[15px] py-[13px] shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] transition-all duration-200 ease-in disabled:cursor-not-allowed disabled:!border-[#F3F5F7] disabled:bg-[#F3F5F7] lg:min-w-[352px]"
              type="button"
              :disabled="!hasZones || disabled"
              :class="{
                '!border-text border bg-transparent': !!selectedZone?.id || isZoneSelectOpen,
                '!border-[#ED1C241A] !bg-[#ED1C241A]': !!getError('delivery_zone_id') && hasZones,
              }"
              @click.stop="toggleZoneSelect"
            >
              <span
                class="text-additional max-w-[280px] truncate transition-colors duration-200 ease-in"
                :class="{ 'text-text': !!selectedZone?.id || isZoneSelectOpen }"
              >
                {{ selectedZone?.name || 'Выберите зону доставки' }} <span v-if="hasZones" class="text-red-500">*</span>
              </span>
              <IconArrowDown class="text-default transition-transform duration-200 ease-in" :class="{ 'rotate-180': isZoneSelectOpen }" />
            </button>
          </VFormItem>
          <Popover ref="zonePopover" class="lg:min-w-[350px]" @show="isZoneSelectOpen = true" @hide="isZoneSelectOpen = false">
            <div v-if="availableZones" class="text-small-regular flex min-w-[260px] flex-col">
              <div
                v-for="zone in availableZones"
                :key="zone.id"
                class="hover:bg-input flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors duration-200 ease-in"
              >
                <VRadioButton
                  v-model="deliveryZoneId"
                  :input-id="String(zonePrefix + zone.id)"
                  :name="String(zonePrefix + zone.id)"
                  :value="zone.id"
                  @change="toggleZoneSelect"
                />
                <label class="w-full cursor-pointer" :for="String(zonePrefix + zone.id)">{{ zone.name }}</label>
              </div>
            </div>
            <template v-else-if="!hasZones">
              <span>Для этого города нет зоны доставки</span>
            </template>
            <template v-else>
              <span>Сначала выберите город</span>
            </template>
          </Popover>
        </div>
        <VFloatingInput v-model="entrance" class="w-full" label="Подъезд" :name="'entrance' + inputId" clearable :disabled />
        <VFloatingInput v-model="floor" class="w-full" label="Этаж" :name="'floor' + inputId" clearable :disabled />
        <VFloatingInput v-model="apartment" class="w-full" :name="'apartment' + inputId" label="Квартира" clearable :disabled />
      </div>
      <div v-else class="mt-2 grid grid-cols-2 gap-2">
        <VFloatingInput v-model="postalCode" class="w-full" :name="inputId" label="Индекс" clearable :disabled />
        <VFloatingInput v-model="entrance" class="w-full" label="Подъезд" :name="'entrance' + inputId" clearable :disabled />
        <VFloatingInput v-model="floor" class="w-full" label="Этаж" :name="'floor' + inputId" clearable :disabled />
        <VFloatingInput v-model="apartment" class="w-full" :name="'apartment' + inputId" label="Квартира" clearable :disabled />
      </div>
    </div>
    <div>
      <slot name="additionalFields" />
    </div>
  </div>
</template>
