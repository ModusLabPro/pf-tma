<template>
  <Button
    unstyled
    :pt="theme"
    :ptOptions="{
      mergeProps: ptViewMerge,
    }"
  >
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </Button>
</template>

<script setup lang="ts">
import type { ButtonPassThroughOptions, ButtonProps } from 'primevue/button';

import Button from 'primevue/button';
import { ref } from 'vue';

import { ptViewMerge } from '@/shared/ui/volt/utils';

interface Props extends /* @vue-ignore */ ButtonProps {}
defineProps<Props>();

const theme = ref<ButtonPassThroughOptions>({
  root: `inline-flex cursor-pointer select-none items-center justify-center overflow-hidden relative
        px-4 py-2 gap-2 rounded-md disabled:pointer-events-none disabled:opacity-60 transition-colors duration-200
        bg-primary enabled:hover:bg-default enabled:active:bg-default !text-white
        border border-primary enabled:hover:border-default enabled:active:border-default
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary min-h-12 text-subsidiary-reg relative
        p-vertical:flex-col p-fluid:w-full p-fluid:p-icon-only:w-10
        p-icon-only:w-10 p-icon-only:px-0 p-icon-only:gap-0
        p-icon-only:p-rounded:rounded-full p-icon-only:p-rounded:h-10
        p-small:text-complimentary-reg p-small:px-4 p-small:py-2 p-small:min-h-9.5
        p-large:text-[1.125rem] p-large:px-[0.875rem] p-large:py-[0.625rem]
        p-raised:shadow-sm p-rounded:rounded-[2rem]
        p-outlined:bg-transparent enabled:hover:p-outlined:bg-transparent enabled:hover:p-outlined:border-default enabled:active:p-outlined:bg-transparent
        p-outlined:border-primary enabled:hover:p-outlined:text-default  enabled:active:p-outlined:border-default
        p-outlined:!text-primary enabled:hover:p-outlined:!text-default enabled:active:p-outlined:text-default
        dark:p-outlined:bg-transparent dark:enabled:hover:p-outlined:bg-primary/5 dark:enabled:active:p-outlined:bg-primary/15
        dark:p-outlined:border-primary-700 dark:enabled:hover:p-outlined:border-primary-700 dark:enabled:active:p-outlined:border-primary-700
        dark:p-outlined:text-primary dark:enabled:hover:p-outlined:text-primary dark:enabled:active:p-outlined:text-primary
        p-text:bg-transparent enabled:hover:p-text:bg-primary-50 enabled:active:p-text:bg-primary-100
        p-text:border-transparent enabled:hover:p-text:border-transparent enabled:active:p-text:border-transparent
        p-text:text-primary enabled:hover:p-text:text-primary enabled:active:p-text:text-primary
        dark:p-text:bg-transparent dark:enabled:hover:p-text:bg-primary/5 dark:enabled:active:p-text:bg-primary/15
        dark:p-text:border-transparent dark:enabled:hover:p-text:border-transparent dark:enabled:active:p-text:border-transparent
        dark:p-text:text-primary dark:enabled:hover:p-text:text-primary dark:enabled:active:p-text:text-primary
        transition-all duration-200 ease-in
    `,
  loadingIcon: `animate-spin`,
  icon: `p-right:order-1 p-bottom:order-2`,
  label: `p-icon-only:invisible p-icon-only:w-0
        p-small:text-complimentary-reg p-large:text-[1.125rem]`,
  pcBadge: {
    root: `inline-flex items-center justify-center rounded-full
        py-0 px-1 text-[10px]/[14px] min-w-[18px] h-[18px]
        bg-primary text-primary-contrast
        p-empty:min-w-2 p-empty:h-2 p-empty:rounded-full p-empty:p-0
        p-circle:p-0 p-circle:rounded-full
        p-secondary:bg-surface-100 dark:p-secondary:bg-surface-800 p-secondary:text-surface-600 dark:p-secondary:text-surface-300
        p-success:bg-green-500 dark:p-success:bg-green-400 p-success:text-white dark:p-success:text-green-950
        p-info:bg-sky-500 dark:p-info:bg-sky-400 p-info:text-white dark:p-info:text-sky-950
        p-warn:bg-orange-500 dark:p-warn:bg-orange-400 p-warn:text-white dark:p-warn:text-orange-950
        p-danger:bg-[#C92D47] dark:p-danger:bg-red-400 p-danger:text-white dark:p-danger:text-red-950
        p-contrast:bg-surface-950 dark:p-contrast:bg-white p-contrast:text-white dark:p-contrast:text-surface-950
        p-small:text-[0.625rem] p-small:min-w-5 p-small:h-5
        p-large:text-sm p-large:min-w-7 p-large:h-7
        p-xlarge:text-base p-xlarge:min-w-8 p-xlarge:h-8`,
  },
});
</script>
