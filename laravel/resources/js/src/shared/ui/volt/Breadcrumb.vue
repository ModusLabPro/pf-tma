<template>
  <Breadcrumb
    unstyled
    :pt="theme"
    :ptOptions="{
      mergeProps: ptViewMerge,
    }"
  >
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </Breadcrumb>
</template>

<script setup lang="ts">
import type { BreadcrumbPassThroughOptions, BreadcrumbProps } from 'primevue/breadcrumb';

import Breadcrumb from 'primevue/breadcrumb';
import { ref } from 'vue';

import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ BreadcrumbProps {}
defineProps<Props>();

const theme = ref<BreadcrumbPassThroughOptions>({
  root: `bg-white sm:bg-input rounded-20 dark:bg-surface-900 py-2 sm:px-3 overflow-x-auto sm:w-fit`,
  list: `m-0 p-0 list-none flex items-center flex-nowrap gap-2`,
  item: `last:text-additional shrink-0`,
  itemLink: `no-underline flex items-center gap-2 transition-colors duration-200 rounded-md
        text-text text-complimentary-reg dark:text-surface-400 hover:text-additional dark:hover:text-surface-0
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary`,
  itemIcon: ``,
  itemLabel: ``,
  separator: `flex items-center text-default dark:text-surface-500`,
  separatorIcon: ``,
});
</script>
