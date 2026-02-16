<script setup lang="ts">
import { computed, shallowRef } from 'vue';

import { useFiltersStore } from '@/app/layouts/catalog-layout';
import IconFilters from '@/shared/icons/IconFilters.svg';
import { VButton } from '@/shared/ui/button';
import { AccordionFieldset } from '@/shared/ui/fieldset';
import { VIftaLabel } from '@/shared/ui/ifta-label';
import Checkbox from '@/shared/ui/volt/Checkbox.vue';
import Dialog from '@/shared/ui/volt/Dialog.vue';
import InputNumber from '@/shared/ui/volt/InputNumber.vue';
import SecondaryButton from '@/shared/ui/volt/SecondaryButton.vue';

const isDialogOpen = shallowRef<boolean>(false);
const filtersStore = useFiltersStore();

const badgeValue = computed<number>(() => {
  let value = 0;
  if (filtersStore.filters.price_from || filtersStore.filters.price_to) {
    value += 1;
  }
  if (filtersStore.filters.weight_to || filtersStore.filters.weight_from) {
    value += 1;
  }
  if (filtersStore.filters.box_type?.length) {
    value += 1;
  }
  if (filtersStore.filters.brands?.length) {
    value += 1;
  }
  return value;
});

// watch(isDialogOpen, (newValue: boolean): void => {
//   if (newValue) {
//     setFilters();
//   }
// });
</script>

<template>
  <button class="rounded-20 bg-text text-subsidiary-reg flex items-center gap-2 px-4 py-[14px] text-white" @click="isDialogOpen = true">
    <IconFilters />
    Фильтры
    <span v-if="badgeValue" class="block min-w-[14px] rounded-full bg-[#F04E27] p-0.5 text-[8px]/[10px]">{{ badgeValue }}</span>
  </button>
  <Dialog v-model:visible="isDialogOpen" modal :draggable="false" class="!lg:max-w-[530px] !max-w-[90vw]" header="Фильтры">
    <form class="grid gap-3" @submit.prevent="() => filtersStore.applyFilters(true)">
      <div class="form-wrapper grid max-h-[310px] gap-3 overflow-y-scroll">
        <fieldset class="flex gap-2">
          <legend class="text-mob-small-reg mb-1">Цена</legend>
          <VIftaLabel label="от">
            <InputNumber
              v-model="filtersStore.filters.price_from"
              class="basis-1/2"
              :placeholder="$page.props.filter_data.price_min.toLocaleString()"
              :min="$page.props.filter_data.price_min"
              :max="filtersStore.filters.price_to ?? $page.props.filter_data.price_max"
            />
          </VIftaLabel>
          <VIftaLabel label="до">
            <InputNumber
              v-model="filtersStore.filters.price_to"
              class="basis-1/2"
              :placeholder="$page.props.filter_data.price_max.toLocaleString()"
              :min="filtersStore.filters.price_from ?? $page.props.filter_data.price_min"
              :max="$page.props.filter_data.price_max"
            />
          </VIftaLabel>
        </fieldset>
        <fieldset class="flex gap-2">
          <legend class="text-mob-small-reg mb-1">Вес продукта (кг)</legend>
          <VIftaLabel label="от">
            <InputNumber
              v-model="filtersStore.filters.weight_from"
              class="basis-1/2"
              :placeholder="$page.props.filter_data.weight_min"
              :min-fraction-digits="1"
              :max-fraction-digits="3"
              :min="$page.props.filter_data.weight_min"
              :max="filtersStore.filters.weight_to ?? $page.props.filter_data.weight_max"
            />
          </VIftaLabel>
          <VIftaLabel label="до">
            <InputNumber
              v-model="filtersStore.filters.weight_to"
              class="basis-1/2"
              :placeholder="$page.props.filter_data.weight_max"
              :min-fraction-digits="1"
              :max-fraction-digits="3"
              :min="filtersStore.filters.weight_from ?? $page.props.filter_data.weight_min"
              :max="$page.props.filter_data.weight_max"
            />
          </VIftaLabel>
        </fieldset>
        <AccordionFieldset legend="Бренд">
          <div class="flex flex-col gap-3">
            <label v-for="brand in $page.props.filter_data.brands" :key="brand.slug" class="flex items-center gap-3">
              <Checkbox v-model="filtersStore.filters.brands" :value="brand.slug" /><span class="text-mob-small-reg">{{ brand.slug }}</span>
            </label>
          </div>
        </AccordionFieldset>
        <AccordionFieldset legend="Тип упаковки">
          <div class="flex flex-col gap-3">
            <label v-for="type in $page.props.filter_data.box_type" :key="type" class="flex items-center gap-3">
              <Checkbox v-model="filtersStore.filters.box_type" :value="type" /><span class="text-mob-small-reg">{{ type }}</span>
            </label>
          </div>
        </AccordionFieldset>
        <AccordionFieldset v-if="$page.props.filter_data.cashback_percent?.length" legend="Бонусные акции">
          <div class="flex flex-col gap-3">
            <label v-for="percent in $page.props.filter_data.cashback_percent" :key="percent" class="flex items-center gap-3">
              <Checkbox v-model="filtersStore.filters.cashback_percent" :value="percent" /><span class="text-mob-small-reg"
                >Кэшбэк {{ percent }}%</span
              >
            </label>
          </div>
        </AccordionFieldset>
      </div>
      <div class="grid gap-2">
        <VButton label="Применить" :disabled="filtersStore.filters.processing" />
        <SecondaryButton label="Сбросить" rounded @click.prevent="filtersStore.resetFilters" />
      </div>
    </form>
  </Dialog>
</template>

<style scoped></style>
