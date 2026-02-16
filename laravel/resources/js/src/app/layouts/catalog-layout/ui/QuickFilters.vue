<script setup lang="ts">
import { usePage } from '@inertiajs/vue3';
import { computed, ref } from 'vue';

import { useFiltersStore } from '@/app/layouts/catalog-layout';
import { ICatalogPageProps, TFastFilterTag } from '@/pages/catalog';
import IconArrowDown from '@/shared/icons/IconArrowDown.svg';
import IconArrowUp from '@/shared/icons/IconArrowUp.svg';
import IconCircleCross from '@/shared/icons/IconCircleCross.svg';
import IconSort from '@/shared/icons/IconSort.svg';
import { useScreenSize } from '@/shared/media-queries';
import RadioButton from '@/shared/ui/volt/RadioButton.vue';
import Select from '@/shared/ui/volt/Select.vue';
import SelectButton from '@/shared/ui/volt/SelectButton.vue';

const page = usePage<ICatalogPageProps>();

// const quickFiltersModel = useForm({
//   fast_tag: route().queryParams?.fast_tag ?? [],
//   sort: route().queryParams?.sort,
// });

const sortOptions = ref([
  {
    label: 'Популярные',
    value: 'pop',
  },
  {
    label: 'Выше рейтинг покупателей',
    value: 'rating',
  },
  {
    label: 'Дешевле',
    value: 'cheaper',
  },
  {
    label: 'Дороже',
    value: 'expensive',
  },
  {
    label: 'Новинки',
    value: 'new',
  },
]);

const showAllTags = ref(false);
const MAX_VISIBLE_TAGS = 6;

const fastTags = computed<TFastFilterTag[]>(() => {
  return [...page.props.fast_filter_tags];
});

const visibleTags = computed<TFastFilterTag[]>(() => {
  if (showAllTags.value || fastTags.value.length <= MAX_VISIBLE_TAGS) {
    return fastTags.value;
  }
  return fastTags.value.slice(0, MAX_VISIBLE_TAGS);
});

const hiddenTagsCount = computed(() => {
  return Math.max(0, fastTags.value.length - MAX_VISIBLE_TAGS);
});

const filtersStore = useFiltersStore();

// const applyFilters = (): void => {
//   quickFiltersModel.get(route('catalog.index'), {
//     only: ['products', 'is_products_group'],
//   });
// };
const { isDesktop } = useScreenSize();
// router.on('navigate', () => {
//   quickFiltersModel.fast_tag = route().queryParams?.fast_tag ?? [];
//   quickFiltersModel.sort = route().queryParams?.sort;
// });
</script>

<template>
  <form v-if="page.props.products.total > 0" class="flex w-full items-start justify-between gap-4" @submit.prevent>
    <div class="flex flex-wrap items-center gap-2">
      <SelectButton
        v-model="filtersStore.filters.fast_tag"
        :options="visibleTags"
        option-label="name"
        option-value="slug"
        multiple
        @value-change="() => filtersStore.applyFilters(true)"
      >
        <template #option="{ option }">
          <span class="inline-flex gap-2">{{ option.name }} <IconCircleCross class="group-p-checked:inline hidden" /></span>
        </template>
      </SelectButton>

      <button
        v-if="hiddenTagsCount > 0"
        type="button"
        class="rounded-20 text-mob-small-reg bg-input hover:text-default flex cursor-pointer items-center gap-0.5 px-4 py-3.5 transition-all duration-200"
        @click="showAllTags = !showAllTags"
      >
        {{ showAllTags ? 'Скрыть' : `Еще ${hiddenTagsCount}` }}
        <IconArrowDown v-if="!showAllTags" />
        <IconArrowUp v-else />
      </button>
    </div>

    <div v-if="isDesktop" class="relative flex-shrink-0">
      <IconSort class="absolute start-4 top-1/2 z-1 -translate-y-1/2" />
      <Select
        v-model="filtersStore.filters.sort"
        :options="sortOptions"
        option-value="value"
        option-label="label"
        pt:root="ps-12"
        variant="filled"
        placeholder="Сортировка"
        show-clear
        @value-change="() => filtersStore.applyFilters(true)"
      >
        <template #header>
          <div class="p-4">
            <span class="text-subsidiary-medium">Какие товары показать сначала</span>
          </div>
        </template>
        <template #option="{ option, selected }">
          <RadioButton :model-value="selected" :input-id="option.value" binary />
          <label class="cursor-pointer pl-3" :for="option.value">{{ option.label }}</label>
        </template>
        <template #clearicon>
          <button
            class="text-additional inline-flex cursor-pointer items-center justify-center"
            @click.stop="
              () => {
                filtersStore.filters.sort = undefined;
                filtersStore.applyFilters(true);
              }
            "
          >
            <i class="pi pi-times"></i>
          </button>
        </template>
      </Select>
    </div>
  </form>
</template>

<style scoped></style>
