<script setup lang="ts">
import type { InputOtpPassThroughMethodOptions, InputOtpProps } from 'primevue/inputotp';

import InputOtp from 'primevue/inputotp';

import { ptViewMerge } from '@/shared/ui/volt/utils';

type Props = /* @vue-ignore */ InputOtpProps;

defineProps<Props>();

const theme = {
  root(opt: InputOtpPassThroughMethodOptions) {
    console.log(opt);
    return {
      class: [
        `flex items-center justify-center gap-1 appearance-none rounded-[20px]
         px-[15px] py-2.5 p-fluid:w-full bg-[#F3F5F7] border has-focus:border-text
         transition-colors duration-200`,
        {
          'border-[#F3F5F7]': !opt.state.tokens.join('').length,
        },
        {
          'border-marker/10 bg-marker/10': opt.props.invalid,
        },
      ],
    };
  },
};
</script>

<template>
  <InputOtp
    unstyled
    :pt="theme"
    :pt-options="{
      mergeProps: ptViewMerge,
    }"
    :length="length ?? 6"
    integer-only
  >
    <template #default="{ attrs, events, index }">
      <input
        type="text"
        v-bind="attrs"
        class="text-medium-medium/[29px] text-text border-additional focus:border-text w-5 border-b text-center outline-hidden transition-colors duration-200"
        :class="{ 'border-none': attrs.value }"
        v-on="events"
      />
      <div v-if="index === 3" class="w-4" />
    </template>
  </InputOtp>
</template>

<style scoped></style>
