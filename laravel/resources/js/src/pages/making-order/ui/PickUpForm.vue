<script setup lang="ts">
import type { IPickUpLocation } from '@/entities/pick-up-location';

import { usePage } from '@inertiajs/vue3';
import { storeToRefs } from 'pinia';
import { shallowRef } from 'vue';

// import { getLocationFromBounds } from 'vue-yandex-maps';

import { ICity } from '@/entities/city';
import { IUser } from '@/entities/user';
import { usePickupLocationsStore } from '@/pages/making-order/model/usePickupLocationsStore';
import IconCheckCirkleGreen from '@/shared/icons/IconCheckCircleGreen.svg';
import IconClock from '@/shared/icons/IconClockOutline.svg';
import IconGlobeOutline from '@/shared/icons/IconGlobeOutline.svg';
import IconPhone from '@/shared/icons/IconPhoneCall.svg';
import IconPin from '@/shared/icons/IconPin.svg';
import { VButton } from '@/shared/ui/button';
import { VFloatLabel } from '@/shared/ui/float-label';
import { VScrollPanel } from '@/shared/ui/scroll-panel';
import InputText from '@/shared/ui/volt/InputText.vue';
import RadioButton from '@/shared/ui/volt/RadioButton.vue';
import SecondaryButton from '@/shared/ui/volt/SecondaryButton.vue';
import Select from '@/shared/ui/volt/Select.vue';

const page = usePage<{
  user_city: {
    city: string;
    city_id: number;
  };
  auth: {
    user: IUser;
  };
  cities: ICity[];
  pickupLocations: IPickUpLocation[];
}>();

const emit = defineEmits<{
  (event: 'applyChose'): void;
  (event: 'reset'): void;
}>();

// const selectedCity = shallowRef<{
//   id: number;
//   name: string;
// } | null>(page.props.user_city ? { name: page.props.user_city.city, id: page.props.user_city.city_id } : null);

const pickupLocationsStore = usePickupLocationsStore();

const { locationsList, selectedLocation, selectedCity } = storeToRefs(pickupLocationsStore);

const onChangeCity = ({ value }: { value: IPickUpLocation }): void => {
  pickupLocationsStore.getLocations(value.id);
};

const isApplied = shallowRef<boolean>(false);

const onApplyChose = (): void => {
  emit('applyChose');
  isApplied.value = true;
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

const reset = (): void => {
  selectedLocation.value = undefined;
  isApplied.value = false;
  emit('reset');
};
</script>

<template>
  <div class="grid gap-4">
    <p class="text-mob-small-medium">Пункты самовывоза</p>
    <div>
      <Select
        v-model="selectedCity"
        option-label="name"
        :options="page.props.cities.filter((c) => c.is_has_pickup)"
        fluid
        size="large"
        placeholder="Выберите город"
        @change="onChangeCity"
      />
      <div class="mt-2 grid grid-cols-2 gap-2">
        <VFloatLabel label="Улица">
          <InputText readonly fluid :model-value="selectedLocation?.street || ''" />
        </VFloatLabel>
        <VFloatLabel label="Номер дома">
          <InputText readonly fluid :model-value="selectedLocation?.house || ''" />
        </VFloatLabel>
      </div>
    </div>
    <VScrollPanel :style="{ height: '440px' }">
      <div class="grid grid-cols-1 gap-2">
        <template v-for="location in locationsList" :key="location.id">
          <div class="bg-input flex gap-2 rounded-2xl p-3">
            <div class="grid grow gap-3">
              <p class="text-mob-small-medium">{{ location.title }}</p>
              <div class="grid min-[820px]:grid-cols-2 gap-2">
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
            <RadioButton v-model="selectedLocation" :disabled="isApplied" :value="location" />
          </div>
        </template>
      </div>
    </VScrollPanel>
    <VButton v-if="!isApplied" label="Подтвердить выбор" class="w-fit" :disabled="!selectedLocation" @click.prevent="onApplyChose" />
    <div v-else class="flex gap-3">
      <div class="bg-filling text-mob-small-reg flex w-fit items-center gap-2 rounded-[50px] px-6 py-[14px] select-none">
        <IconCheckCirkleGreen />
        Выбор подтвержден
      </div>
      <SecondaryButton v-if="isApplied" label="Редактировать" rounded @click.prevent="reset" />
    </div>
  </div>
</template>

<style scoped></style>
