<template>
  <AccordionContent
    unstyled
    :pt="theme"
    :ptOptions="{
            mergeProps: ptViewMerge
        }"
  >
    <slot></slot>
  </AccordionContent>
</template>

<script setup lang="ts">
import AccordionContent, { type AccordionContentPassThroughOptions, type AccordionContentProps } from 'primevue/accordioncontent';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ AccordionContentProps {}
defineProps<Props>();

const theme = ref<AccordionContentPassThroughOptions>({
  root: `flex flex-col -mt-5 mb-1`,
  content: `bg-light-gray pt-6 rounded-b-xl dark:bg-surface-900 text-surface-700 dark:text-surface-0 px-[1.125rem] pb-[1.125rem]`,
  transition: {
    enterFromClass: 'max-h-0 opacity-0',
    enterActiveClass: 'overflow-hidden transition-all duration-400 ease-in',
    enterToClass: 'max-h-[500px] opacity-100',
    leaveFromClass: 'max-h-[500px] opacity-100',
    leaveActiveClass: 'overflow-hidden transition-all duration-400 ease-in',
    leaveToClass: 'max-h-0 opacity-0'
  }
});

</script>
