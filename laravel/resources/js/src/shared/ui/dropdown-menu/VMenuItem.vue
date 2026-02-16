<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem';

import { Link } from '@inertiajs/vue3';
import { onMounted, reactive, shallowRef, useTemplateRef } from 'vue';

import IconArrowDown from '@/shared/icons/IconArrowDown.svg';
import VSubMenu from '@/shared/ui/dropdown-menu/VSubMenu.vue';

const props = defineProps<{
  item: MenuItem;
  isNested: boolean;
}>();

const emit = defineEmits<{
  (event: 'toggle', value: boolean): void;
  (event: 'open'): void;
  (event: 'close'): void;
}>();

const showSubMenu = shallowRef<boolean>(false);
const isSubSubMenuOpen = shallowRef<boolean>(false);
const itemRef = useTemplateRef<HTMLElement>('itemRef');

const subMenuPosition: {
  top: number | string;
  left: number | string;
} = reactive({
  top: 0,
  left: 0,
});

const getSubMenuPosition = (): void => {
  if (!itemRef.value) return;
  const { top, right } = itemRef.value.getBoundingClientRect();
  subMenuPosition.top = `${top - 16}px`;
  subMenuPosition.left = `${right}px`;
};

const onShowSubMenu = (): void => {
  if (props.item.items) {
    getSubMenuPosition();
    showSubMenu.value = true;
    emit('toggle', true);
  }
};

const onHideSubMenu = (): void => {
  if (isSubSubMenuOpen.value) return;
  showSubMenu.value = false;
};
</script>

<template>
  <li v-if="!item.separator" ref="itemRef" :data-item-id="item.id" @mouseenter="onShowSubMenu" @mouseleave="onHideSubMenu">
    <span class="inline-flex w-full items-center gap-2">
      <Link :href="item.route" class="flex grow items-center gap-2 p-3">
        <Component :is="item.iconComponent" />
        {{ item.label }}
      </Link>
      <IconArrowDown v-if="item.items" class="ml-auto text-[#A39874]" />
    </span>
  </li>
  <li v-else role="separator" class="bg-stroke h-px w-full"></li>
  <Teleport to="body">
    <template v-if="item.items">
      <VSubMenu
        v-model:is-visible="showSubMenu"
        v-model:is-children-menu-visible="isSubSubMenuOpen"
        :style="subMenuPosition"
        :items="item.items"
        class="fixed z-[5000]"
        @mouseenter="showSubMenu = true"
        @toggle="onHideSubMenu"
        @open="$emit('open')"
        @close="$emit('close')"
      />
    </template>
  </Teleport>
</template>

<style scoped></style>
