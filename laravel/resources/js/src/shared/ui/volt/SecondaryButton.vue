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

import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ ButtonProps {}
defineProps<Props>();

const theme = ref<ButtonPassThroughOptions>({
  root: `inline-flex cursor-pointer select-none items-center justify-center overflow-hidden relative
        px-4 py-2 gap-2 rounded-md disabled:pointer-events-none disabled:opacity-60 transition-colors duration-200
        bg-filling enabled:hover:bg-surface-200 enabled:active:bg-surface-200
        border border-filling enabled:hover:border-surface-200 enabled:active:border-surface-200
        text-text enabled:hover:text-text enabled:active:text-surface-800 min-h-11 lg:min-h-12 text-subsidiary-reg

        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2
        focus-visible:outline-surface-600
        p-vertical:flex-col p-fluid:w-full p-fluid:p-icon-only:w-10
        p-icon-only:w-10 p-icon-only:px-0 p-icon-only:gap-0
        p-icon-only:p-rounded:rounded-full p-icon-only:p-rounded:h-10
        p-small:text-complimentary-reg p-small:px-4 p-small:py-2 p-small:min-h-9.5
        p-large:text-mob-small-reg p-large:px-6 p-large:py-2 p-large:min-h-13
        p-raised:shadow-sm p-rounded:rounded-[2rem]
        p-outlined:bg-transparent enabled:hover:p-outlined:bg-transparent enabled:active:p-outlined:bg-transparent
        p-outlined:border-filling enabled:hover:p-outlined:border-filling enabled:active:p-outlined:border-filling
        p-outlined:text-text enabled:hover:p-outlined:text-text enabled:active:p-outlined:text-text

        p-text:bg-transparent enabled:hover:p-text:bg-surface-50 enabled:active:p-text:bg-surface-100
        p-text:border-transparent enabled:hover:p-text:border-transparent enabled:active:p-text:border-transparent
        p-text:text-text enabled:hover:p-text:text-text enabled:active:p-text:text-text
    `,
  loadingIcon: `animate-spin`,
  icon: `p-right:order-1 p-bottom:order-2`,
  label: `p-icon-only:invisible p-icon-only:w-0
        p-small:text-complimentary-reg p-large:text-mob-small-reg`,
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
