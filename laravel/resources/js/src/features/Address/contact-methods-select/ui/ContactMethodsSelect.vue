<script setup lang="ts">
import { ref } from 'vue';

import IconArrowDown from '@/shared/icons/IconArrowDown.svg';
import IconXCircle from '@/shared/icons/IconXCircle.svg';
import { VFloatLabel } from '@/shared/ui/float-label';
import MultiSelect from '@/shared/ui/volt/MultiSelect.vue';

interface IContactMethod {
  id: number;
  name: string;
}

const model = defineModel<number[]>({ default: [] });

defineProps<{
  options: IContactMethod[];
}>();

const isOpen = ref(false);

const clearSelection = () => {
  model.value = [];
};
</script>

<template>
  <VFloatLabel label="Способ связи">
    <template #default="{ labelId }">
      <MultiSelect
        v-model="model"
        :input-id="labelId"
        :options="options"
        option-label="name"
        option-value="id"
        class="w-full"
        @show="isOpen = true"
        @hide="isOpen = false"
      >
        <template #value="{ value }">
          <span v-if="value?.length" class="flex w-full justify-between">
            <span>Выбрано</span>
            <span
              class="text-subsidiary-reg bg-text absolute top-1/2 right-[14px] flex -translate-y-1/2 items-center gap-1 rounded-full py-0.5 pr-1 pl-2 text-white"
            >
              <span> {{ value.length }}</span>
              <button type="button" class="bg-filling p text-additional cursor-pointer rounded-full" @click.stop="clearSelection">
                <IconXCircle class="h-4 w-4" />
              </button>
            </span>
          </span>
        </template>
        <template #dropdownicon>
          <IconArrowDown class="text-default h-4 w-4" :class="{ 'rotate-180': isOpen }" />
        </template>
      </MultiSelect>
    </template>
  </VFloatLabel>
</template>
