<script setup lang="ts">
import { useFiltersStore } from '@/app/layouts/catalog-layout';
import { VButton } from '@/shared/ui/button';
import { AccordionFieldset } from '@/shared/ui/fieldset';
import { VIftaLabel } from '@/shared/ui/ifta-label';
import Checkbox from '@/shared/ui/volt/Checkbox.vue';
import InputNumber from '@/shared/ui/volt/InputNumber.vue';
import SecondaryButton from '@/shared/ui/volt/SecondaryButton.vue';

const filtersStore = useFiltersStore();
</script>

<template>
  <h3 v-if="$page.props.products.total > 0" class="text-medium-bold mb-3">Фильтры</h3>
  <form v-if="$page.props.products.total > 0" class="grid gap-3" @submit.prevent="() => filtersStore.applyFilters(true)">
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
          <Checkbox v-model="filtersStore.filters.brands" :value="brand.slug" /><span class="text-mob-small-reg">{{ brand.name }}</span>
        </label>
      </div>
    </AccordionFieldset>
    <AccordionFieldset legend="Тип упаковки">
      <div class="flex flex-col gap-3">
        <template v-for="type in $page.props.filter_data.box_type" :key="type">
          <label v-if="type" class="flex items-center gap-3">
            <Checkbox v-model="filtersStore.filters.box_type" :value="type" /><span class="text-mob-small-reg">{{ type }}</span>
          </label>
        </template>
      </div>
    </AccordionFieldset>
    <AccordionFieldset v-if="$page.props.filter_data.cashback_percent?.length" legend="Бонусные акции">
      <div class="flex flex-col gap-3">
        <template v-for="percent in $page.props.filter_data.cashback_percent" :key="percent">
          <label v-if="percent" class="flex items-center gap-3">
            <Checkbox v-model="filtersStore.filters.cashback_percent" :value="percent" /><span class="text-mob-small-reg">Кэшбэк {{ percent }}%</span>
          </label>
        </template>
      </div>
    </AccordionFieldset>
    <div class="grid gap-2">
      <VButton label="Применить" :disabled="filtersStore.filters.processing" />
      <SecondaryButton label="Сбросить" rounded @click.prevent="filtersStore.resetFilters" />
    </div>
  </form>
</template>

<style scoped></style>
