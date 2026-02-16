<script setup lang="ts">
import { shallowRef } from 'vue';

import IconArrowDown from '@/shared/icons/IconArrowDown.svg?skipsvgo';

defineProps<{
  legend: string;
}>();

const isOpen = shallowRef<boolean>(false);
</script>

<template>
  <fieldset class="bg-input rounded-20">
    <legend class="rounded-t-20 bg-input mb-4 flex w-full cursor-pointer items-center justify-between px-4 pt-4" @click="isOpen = !isOpen">
      {{ legend }} <IconArrowDown class="text-default h-5 w-5 transition" :class="{ 'rotate-180': isOpen }" />
    </legend>
    <Transition
      enter-from-class="max-h-0"
      enter-active-class="transition-all duration-300"
      enter-to-class="max-h-100"
      leave-from-class="max-h-100"
      leave-active-class="transition-all duration-200"
      leave-to-class="max-h-0"
    >
      <div v-show="isOpen" class="border-t-filling overflow-hidden border-t p-4">
        <slot />
      </div>
    </Transition>
  </fieldset>
</template>

<style scoped></style>
