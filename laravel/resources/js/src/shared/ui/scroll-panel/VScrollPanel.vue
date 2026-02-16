<script setup lang="ts">
import type { ScrollPanelProps } from 'primevue/scrollpanel';

import ScrollPanel from 'primevue/scrollpanel';

const props = defineProps<ScrollPanelProps>();
</script>

<template>
  <ScrollPanel v-bind="props" class="panel">
    <slot />
  </ScrollPanel>
</template>

<style scoped>
@reference "../../../../../css/app.css";

.panel {
  & :deep(.p-scrollpanel-content-container) {
    @apply relative z-10 float-left h-full w-full overflow-hidden;
  }
  & :deep(.p-scrollpanel-content) {
    @apply relative h-full w-[calc(100%+8px)] overflow-auto ps-0 pt-0 pr-[18px] [scrollbar-width:none];
  }

  & :deep(.p-scrollpanel-content::-webkit-scrollbar) {
    @apply hidden;
  }

  & :deep(.p-scrollpanel-bar) {
    @apply bg-complimentary dark:bg-surface-800 focus-visible:outline-primary relative z-20 cursor-pointer rounded-sm border-none opacity-0 transition-opacity duration-200 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2;
  }

  & :deep(.p-scrollpanel-bar-y) {
    @apply top-0 w-2;
  }

  & :deep(.p-scrollpanel-bar-x) {
    @apply bottom-0 h-2;
  }

  & :deep(.p-scrollpanel-hidden) {
    @apply invisible;
  }

  & :deep(.p-scrollpanel:hover .p-scrollpanel-bar),
  & :deep(.p-scrollpanel:active .p-scrollpanel-bar) {
    @apply opacity-100;
  }
  & :deep(.p-scrollpanel-grabbed) {
    @apply select-none;
  }
}
</style>
