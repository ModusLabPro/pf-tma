<script setup lang="ts">
import { router } from '@inertiajs/vue3';

import IconXCircleDelete from '@/shared/icons/IconXCircleDelete.svg';

defineProps<{
  type: 'alert' | 'notify';
  id: number;
}>();

const deleteAlert = (id: number, type: 'alert' | 'notify'): void => {
  router.delete(route('alert.mark-as-deleted'), {
    preserveScroll: true,
    preserveState: true,
    data: {
      id,
      type,
    },
  });
};
</script>

<template>
  <button class="bg-input deleteButton hover:bg-text cursor-pointer rounded-full p-3" type="button" @click.stop="deleteAlert(id, type)">
    <div class="bg-delete deleteIconCircle rounded-full transition-all duration-300 ease-in">
      <IconXCircleDelete class="deleteIcon h-3 w-3" />
    </div>
  </button>
</template>

<style scoped>
.deleteIcon {
  color: var(--color-white);
  transition: all 0.3s ease;
}

.deleteButton:hover {
  transition: all 0.3s ease;
  background: var(--color-text);

  .deleteIconCircle {
    background-color: var(--color-white);
  }

  .deleteIcon {
    color: var(--color-text);
  }
}
</style>
