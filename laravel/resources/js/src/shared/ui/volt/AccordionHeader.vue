<template>
  <AccordionHeader
    unstyled
    :pt="theme"
    :ptOptions="{
            mergeProps: ptViewMerge
        }"
  >
    <template #toggleicon="{ active }">
      <ChevronDownIcon v-if="active" />
      <ChevronUpIcon v-else />
    </template>
    <slot></slot>
  </AccordionHeader>
</template>

<script setup lang="ts">
import ChevronUpIcon from '@primevue/icons/chevrondown';
import ChevronDownIcon from '@primevue/icons/chevronup';
import AccordionHeader, { type AccordionHeaderPassThroughOptions, type AccordionHeaderProps } from 'primevue/accordionheader';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ AccordionHeaderProps {}
defineProps<Props>();

const theme = ref<AccordionHeaderPassThroughOptions>({
  root: `cursor-pointer disabled:pointer-events-none z-10 disabled:opacity-60 flex items-center justify-between py-1 px-3 font-semibold
        bg-filling rounded-xl dark:bg-surface-900
        text-text dark:text-surface-400
        hover:text-default dark:hover:text-surface-0
        p-active:bg-default p-active:text-white
        transition-colors duration-200
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-primary mb-1`
});
</script>
