<template>
  <ConfirmDialog
    unstyled
    :pt="theme"
    :ptOptions="{
      mergeProps: ptViewMerge,
    }"
  >
    <template #container="{ message, acceptCallback, rejectCallback }">
      <div class="flex shrink-0 items-center justify-end px-8 pt-8 pb-2">
        <button rounded @click="rejectCallback" class="text-subsidiary hover:text-text transition-colors">
          <IconXCircleDelete class="h-8 w-8" />
        </button>
      </div>
      <p class="text-heavy-bold px-8 pb-2 text-center">{{ message.header }}</p>
      <div class="text-mob-regular flex items-center gap-4 overflow-y-auto px-8 text-center">
        {{ message.message }}
      </div>
      <div class="flex gap-2 px-8 pt-6 pb-8">
        <VButton @click="rejectCallback" :label="message.rejectProps.label" variant="outline" class="basis-1/2" />
        <VButton @click="acceptCallback" :label="message.acceptProps.label" class="basis-1/2" />
      </div>
    </template>
  </ConfirmDialog>
</template>

<script setup lang="ts">
import type { ConfirmDialogPassThroughOptions, ConfirmDialogProps } from 'primevue/confirmdialog';

import ExclamationTriangeIcon from '@primevue/icons/exclamationtriangle';
import TimesIcon from '@primevue/icons/times';
import ConfirmDialog from 'primevue/confirmdialog';
import { ref } from 'vue';

import IconXCircleDelete from '@/shared/icons/IconXCircleDelete.svg';
import { VButton } from '@/shared/ui/button';

import Button from './Button.vue';
import SecondaryButton from './SecondaryButton.vue';
import { ptViewMerge } from './utils';

interface Props extends /* @vue-ignore */ ConfirmDialogProps {}
defineProps<Props>();

const theme = ref<ConfirmDialogPassThroughOptions>({
  root: `max-h-[90%] max-w-110 rounded-4xl
        border border-surface-200 dark:border-surface-700
        bg-surface-0 dark:bg-surface-900
        text-surface-700 dark:text-surface-0 shadow-[0_4px_40px_0_rgba(0,0,0,0.15)]`,
  mask: `bg-primary/70 fixed top-0 start-0 w-full h-full`,
  transition: {
    enterFromClass: 'opacity-0 scale-75',
    enterActiveClass: 'transition-all duration-150 ease-[cubic-bezier(0,0,0.2,1)]',
    leaveActiveClass: 'transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]',
    leaveToClass: 'opacity-0 scale-75',
  },
});
</script>
