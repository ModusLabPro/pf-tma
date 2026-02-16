<template>
  <Dialog
    unstyled
    :pt="theme"
    :ptOptions="{
      mergeProps: ptViewMerge,
    }"
  >
    <template #closebutton="{ closeCallback }">
      <SecondaryButton v-if="isDesktop" variant="text" rounded @click="closeCallback" autofocus>
        <template #icon>
          <TimesIcon class="text-subsidiary h-5 w-5 lg:h-7 lg:w-7" />
        </template>
      </SecondaryButton>
      <button v-else @click="closeCallback">
        <TimesIcon class="text-subsidiary h-5 w-5 lg:h-7 lg:w-7" />
      </button>
    </template>
    <template #maximizebutton="{ maximized, maximizeCallback }">
      <SecondaryButton variant="text" rounded @click="maximizeCallback" autofocus>
        <template #icon>
          <WindowMinimizeIcon v-if="maximized" />
          <WindowMaximizeIcon v-else />
        </template>
      </SecondaryButton>
    </template>
    <template v-for="(_, slotName) in $slots" v-slot:[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import type { DialogPassThroughOptions, DialogProps } from 'primevue/dialog';

import TimesIcon from '@primevue/icons/times';
import WindowMaximizeIcon from '@primevue/icons/windowmaximize';
import WindowMinimizeIcon from '@primevue/icons/windowminimize';
import Dialog from 'primevue/dialog';
import { ref } from 'vue';

import { useScreenSize } from '@/shared/media-queries';

import SecondaryButton from './SecondaryButton.vue';
import { ptViewMerge } from './utils';

const { isDesktop } = useScreenSize();
interface Props extends /* @vue-ignore */ DialogProps {}
defineProps<Props>();

const theme = ref<DialogPassThroughOptions>({
  root: `max-h-[90%] max-w-screen rounded-4xl
        border border-surface-200 dark:border-surface-700
        bg-surface-0 dark:bg-surface-900
        text-text dark:text-surface-0 shadow-[0_4px_40px_0_rgba(0,0,0,0.15)]
        p-maximized:w-screen p-maximized:h-screen p-maximized:top-0 p-maximized:start-0p-maximized: max-h-full p-maximized:rounded-none`,
  header: `flex items-center justify-between shrink-0 p-4 lg:p-8 lg:pb-2`,
  title: `font-semibold text-xl`,
  headerActions: `flex items-center gap-2 ml-auto`,
  content: `overflow-y-auto pt-0 px-4 pb-3 lg:px-8 lg:pb-8 p-maximized:grow`,
  footer: `shrink-0 pt-0 px-4 pb-4 lg:px-8 lg:pb-8 flex justify-end gap-2`,
  mask: `p-modal:bg-primary/70 p-modal:fixed p-modal:top-0 p-modal:start-0 p-modal:w-full p-modal:h-full`,
  transition: {
    enterFromClass: 'opacity-0 scale-75',
    enterActiveClass: 'transition-all duration-150 ease-[cubic-bezier(0,0,0.2,1)]',
    leaveActiveClass: 'transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]',
    leaveToClass: 'opacity-0 scale-75',
  },
});
</script>
