<template>
  <Rating
    unstyled
    :pt="theme"
    :ptOptions="{
      mergeProps: ptViewMerge,
    }"
  >
    <template #onicon="{ toggleCallback }">
      <StarFillIcon
        @click.stop="toggleCallback"
        class="text-base text-[#EBBA1A] transition-colors duration-200 focus:border-0 focus:!outline-0"
        :class="size === 'large' ? 'h-6 w-6' : 'h-4 w-4'"
      />
    </template>
    <template #officon="{ toggleCallback }">
      <StarFillIcon
        @click.stop="toggleCallback"
        class="dark:text-surface-400 text-base text-[#E0E0E0] transition-colors duration-200 focus:border-0 focus:!outline-0"
        :class="size === 'large' ? 'h-6 w-6' : 'h-4 w-4'"
      />
    </template>
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </Rating>
</template>

<script setup lang="ts">
import type { RatingPassThroughOptions, RatingProps } from 'primevue/rating';

import StarIcon from '@primevue/icons/star';
import StarFillIcon from '@primevue/icons/starfill';
import Rating from 'primevue/rating';
import { ref } from 'vue';

import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ RatingProps {
  size?: 'small' | 'large';
}

defineProps<Props>();

const theme = ref<RatingPassThroughOptions>({
  root: `relative flex items-center gap-1 p-disabled:opacity-60 p-disabled:pointer-events-none p-readonly:pointer-events-none`,
  option: `inline-flex items-center cursor-pointer rounded-full`,
});
</script>
