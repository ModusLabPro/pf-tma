<script setup lang="ts">
import { useForm, usePage } from '@inertiajs/vue3';
import { ref, shallowRef, watch } from 'vue';

import { useFiltersStore } from '@/app/layouts/catalog-layout';
import IconSort from '@/shared/icons/IconSort.svg';
import { VButton } from '@/shared/ui/button';
import Dialog from '@/shared/ui/volt/Dialog.vue';
import RadioButton from '@/shared/ui/volt/RadioButton.vue';
import { ICatalogPageProps } from '@/pages/catalog';

const isDialogOpen = shallowRef<boolean>(false);
const filtersStore = useFiltersStore();

// const routeData = route();
//
// const model = useForm({
//   sort: routeData.queryParams?.sort,
// });
//
// const setSort = (): void => {
//   model.sort = routeData.queryParams?.sort;
// };

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

const page = usePage<ICatalogPageProps>()

// const apply = () => {
//   model.get('/catalog', {
//     preserveState: true,
//     only: ['products', 'is_products_group'],
//     onSuccess: () => {
//       isDialogOpen.value = false;
//     },
//   });
// };
//
// watch(isDialogOpen, (newValue: boolean): void => {
//   if (newValue) {
//     setSort();
//   }
// });
</script>

<template>
  <button v-if="page.props.products.total > 0" class="rounded-20 bg-input text-subsidiary-reg flex items-center gap-2 px-4 py-[14px]" @click="isDialogOpen = true">
    <IconSort class="h-4 w-4" :class="{ 'text-default': route().queryParams?.sort }" />
    Сортировка
  </button>
  <Dialog v-model:visible="isDialogOpen" modal :draggable="false" class="!lg:max-w-[530px] !w-[min(530px,90vw)]" header="Сортировка">
    <form class="grid gap-3" @submit.prevent="filtersStore.applyFilters(true)">
      <fieldset>
        <legend class="text-subsidiary-medium mb-3">Какие товары показать сначала</legend>
        <ul class="w-full">
          <li v-for="option in sortOptions" :key="option.value" class="flex items-center gap-3 p-2">
            <RadioButton v-model="filtersStore.filters.sort" :input-id="option.value" :value="option.value" />
            <label class="text-mob-small-reg cursor-pointer" :for="option.value">{{ option.label }}</label>
          </li>
        </ul>
      </fieldset>
      <VButton label="Применить" />
    </form>
  </Dialog>
</template>

<style scoped></style>
