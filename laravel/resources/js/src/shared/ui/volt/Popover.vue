<template>
  <Popover
    ref="el"
    unstyled
    :pt="theme"
    :ptOptions="{
      mergeProps: ptViewMerge,
    }"
  >
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </Popover>
</template>

<script setup lang="ts">
import type { PopoverPassThroughOptions, PopoverProps } from 'primevue/popover';

import Popover from 'primevue/popover';
import { onMounted, onUnmounted, ref } from 'vue';

import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ PopoverProps {}

defineProps<Props>();

const theme = ref<PopoverPassThroughOptions>({
  root: `mt-[10px] p-flipped:-mt-[10px] p-flipped:mb-[10px]
        bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0
        border border-surface-200 dark:border-surface-700
        rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]
        p-flipped:before:bottom-auto p-flipped:before:top-full p-flipped:after:bottom-auto p-flipped:after:top-full
        p-flipped:after:border-b-transparent p-flipped:after:border-t-surface-0 dark:p-flipped:after:border-t-surface-900
        p-flipped:before:border-b-transparent p-flipped:before:border-t-surface-200 dark:p-flipped:before:border-t-surface-700`,
  content: `p-4`,
  transition: {
    enterFromClass: 'opacity-0 scale-y-75',
    enterActiveClass: 'transition duration-120 ease-[cubic-bezier(0,0,0.2,1)]',
    leaveActiveClass: 'transition-opacity duration-100 ease-linear',
    leaveToClass: 'opacity-0',
  },
});

const el = ref();
defineExpose({
  toggle: (event: Event, target?: any) => el.value.toggle(event, target),
  show: (event: Event, target?: any) => el.value.show(event, target),
  hide: () => el.value.toggle(),
});

const handleScroll = () => {
  if (el.value) {
    el.value.hide();
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
