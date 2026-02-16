<template>
  <InputMask
    unstyled
    :pt="theme"
    :ptOptions="{
      mergeProps: ptViewMerge,
    }"
  />
</template>

<script setup lang="ts">
import type { InputMaskPassThroughOptions, InputMaskProps } from 'primevue/inputmask';

import InputMask from 'primevue/inputmask';
import { ref } from 'vue';

import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ InputMaskProps {}
defineProps<Props>();

const theme = ref<InputMaskPassThroughOptions>({
  root: (options) => {
    return {
      class: [
        `p-inputtext appearance-none rounded-[20px] outline-hidden
        bg-[#F3F5F7] dark:bg-surface-950
        p-filled:bg-surface-50 dark:p-filled:bg-surface-800
        text-mob-small-reg dark:text-surface-0
        placeholder:text-additional dark:placeholder:text-surface-400
        border border-[#F3F5F7] dark:border-surface-700
        enabled:hover:border-surface-400 dark:enabled:hover:border-surface-600
        enabled:focus:border-primary enabled:focus:bg-white
        disabled:bg-[#F3F5F7] disabled:border-none disabled:cursor-not-allowed
        dark:disabled:bg-surface-700 dark:disabled:text-surface-400
        p-invalid:border-marker/10 dark:p-invalid:border-red-300 p-invalid:bg-marker/10
        p-invalid:placeholder:text-red-600 dark:p-invalid:placeholder:text-red-400
        p-[15px] p-fluid:w-full
        p-small:text-sm p-small:px-[0.625rem] p-small:py-[0.375rem]
        p-large:text-lg p-large:px-[0.875rem] p-large:py-[0.625rem]
        transition-colors duration-200 shadow-[0_1px_2px_0_rgba(18,18,23,0.05)]`,
        {
          'border-text p-invalid:border-marker bg-transparent p-filled': options.context.filled,
        },
      ],
    };
  },
});
</script>
