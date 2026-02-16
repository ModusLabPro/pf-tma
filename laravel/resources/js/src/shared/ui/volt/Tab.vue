<template>
  <Tab
    :value="props.value"
    unstyled
    :pt="theme"
    :ptOptions="{
            mergeProps: ptViewMerge
        }"
  >
    <slot></slot>
  </Tab>
</template>

<script setup lang="ts">
import Tab, { type TabPassThroughOptions, type TabProps } from 'primevue/tab';
import { ref } from 'vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ TabProps {}
const props = defineProps<Props>();

const theme = ref<TabPassThroughOptions>({
  root: `flex-shrink-0 cursor-pointer select-none relative whitespace-nowrap py-2 px-3 md:px-4 lg:min-w-[210px] md:px-[1.125rem]
        text-mob-small-reg
        text-surface-500 dark:text-surface-400
        transition-all duration-250 -mb-px
        rounded-20
        not-p-active:enabled:hover:text-surface-700 dark:not-p-active:enabled:hover:text-surface-0
        p-active:bg-default p-active:text-white
        disabled:pointer-events-none disabled:opacity-60
        focus-visible:z-10 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-primary`
});
</script>
