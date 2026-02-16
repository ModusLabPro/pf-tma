<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem';

import { shallowRef, watch } from 'vue';

import VMenuItem from './VMenuItem.vue';

const props = defineProps<{
  items: MenuItem[];
}>();

const emit = defineEmits<{
  (event: 'toggle', value: boolean): void;
  (event: 'open'): void;
  (event: 'close'): void;
}>();

const isVisible = defineModel<boolean>('isVisible');
const isChildrenMenuVisible = shallowRef<boolean>(false);

// const isHasSubMenu = (): boolean => props.items.some((item) => item.items);

const onMouseLeave = () => {
  if (!isChildrenMenuVisible.value) {
    isVisible.value = false;
    emit('toggle', false);
  }
};

// const onToggle = (value: boolean): void => {
//   isChildrenMenuVisible.value = value;
// };
watch(isVisible, (val) => {
  if (val) {
    emit('open');
  }
});
</script>

<template>
  <Transition
    enter-from-class="opacity-0 scale-y-75"
    enter-active-class="transition duration-120 ease-[cubic-bezier(0,0,0.2,1)]"
    leave-active-class="transition-opacity duration-100 ease-linear"
    leave-to-class="opacity-0"
  >
    <div v-show="isVisible" class="min-w-60 rounded-lg bg-[#F2F2F2] p-4" @mouseleave="onMouseLeave">
      <ul>
        <template v-for="item in items" :key="item.id">
          <VMenuItem :item="item" is-nested @open="isChildrenMenuVisible = true" @close="isChildrenMenuVisible = false" />
        </template>
      </ul>
    </div>
  </Transition>
</template>

<style scoped></style>
