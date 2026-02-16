<script setup lang="ts">
import type { PopoverPassThroughOptions } from 'primevue/popover';

import { Link, usePage } from '@inertiajs/vue3';
import { Popover } from 'primevue';
import { MenuItem } from 'primevue/menuitem';
import { computed, defineAsyncComponent, onBeforeUnmount, onMounted, ref, shallowRef } from 'vue';
import { useI18n } from 'vue-i18n';

import IconArrowDown from '@/shared/icons/IconArrowDown.svg';
import IconPot from '@/shared/icons/IconPot.svg';
import IconSheep from '@/shared/icons/IconSheep.svg';
import IconSquaresFour from '@/shared/icons/IconSquaresFour.svg?skipsvgo';
import { iconLoader } from '@/shared/lib/helpers/iconLoader';
import { ICatalogCategory } from '@/shared/ui/catalog-menu/model/catalogMenuProps';
import { VMenuItem } from '@/shared/ui/dropdown-menu';
import { VScrollPanel } from '@/shared/ui/scroll-panel';
import { VTieredMenu } from '@/shared/ui/tiered-menu';

const { t } = useI18n();

const menuRef = shallowRef<InstanceType<typeof VTieredMenu>>();

const toggleMenu = (event: Event): void => {
  menuRef.value?.toggle(event);
};

const page = usePage();
const loader = iconLoader();

const prepareCategory = (category: ICatalogCategory, addSeparator: boolean): MenuItem[] => {
  const tempEls: MenuItem[] = [];
  tempEls.push({
    id: category.id,
    label: category.name,
    route: route('catalog.index', {
      category: category.path,
    }),
    iconComponent: category.icon_path ? defineAsyncComponent(() => loader(category.icon_path)) : null,
    items: category.children?.length
      ? category.children.map((c: ICatalogCategory, index, array) => prepareCategory(c, !!array.length && index !== array.length - 1)).flat()
      : undefined,
  });
  if (addSeparator) {
    tempEls.push({
      separator: true,
    });
  }
  return tempEls;
};

// Используем computed для реактивного вычисления menuItems в SSR контексте
const menuItems = computed(() => {
  const categories = page.props.categories || [];
  if (!Array.isArray(categories) || categories.length === 0) {
    return [];
  }
  return categories.map((category, index, array) => prepareCategory(category, index !== array.length - 1)).flat();
});

const theme = ref<PopoverPassThroughOptions>({
  root: `mt-[10px] p-flipped:-mt-[10px] p-flipped:mb-[10px]
        bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0
        border border-surface-200 dark:border-surface-700
        rounded-2xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]
        p-flipped:before:bottom-auto p-flipped:before:top-full p-flipped:after:bottom-auto p-flipped:after:top-full
        p-flipped:after:border-b-transparent p-flipped:after:border-t-surface-0 dark:p-flipped:after:border-t-surface-900
        p-flipped:before:border-b-transparent p-flipped:before:border-t-surface-200 dark:p-flipped:before:border-t-surface-700`,
  content: ``,
  transition: {
    enterFromClass: 'opacity-0 scale-y-75',
    enterActiveClass: 'transition duration-120 ease-[cubic-bezier(0,0,0.2,1)]',
    leaveActiveClass: 'transition-opacity duration-100 ease-linear',
    leaveToClass: 'opacity-0',
  },
});

const openSubMenu = (itemId: number): void => {
  console.log(itemId);
};

onMounted(() => {
  const hideOnScroll = (): void => {
    menuRef.value?.hide();
  };
  window.addEventListener('scroll', hideOnScroll);

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', hideOnScroll);
  });
});
</script>

<template>
  <div>
    <button
      class="bg-default text-subsidiary-reg flex cursor-pointer items-center justify-center gap-2 rounded-[50px] px-4 py-3 text-white lg:min-w-[130px]"
      @click="toggleMenu"
    >
      <IconSquaresFour />
      {{ t('header.catalog') }}
    </button>
    <Popover ref="menuRef" :pt="theme" unstyled class="max-h-125">
      <div class="rounded-lg bg-[#F2F2F2] p-4">
        <VScrollPanel class="h-full max-h-125">
          <ul>
            <template v-for="item in menuItems" :key="item.id">
              <VMenuItem :item="item" :is-nested="false" />
            </template>
          </ul>
        </VScrollPanel>
      </div>

      <!--        <VTieredMenu :model="menuItems" class="top-0 z-0 max-w-75">-->
      <!--          <template #item="{ item, label, hasSubmenu }">-->
      <!--            <span class="inline-flex w-full items-center gap-2">-->
      <!--              <Link :href="item.route" class="flex items-center gap-2 p-3">-->
      <!--                <Component :is="item.iconComponent" />-->
      <!--                {{ label }}-->
      <!--              </Link>-->
      <!--              <IconArrowDown v-if="hasSubmenu" class="ml-auto text-[#A39874]" />-->
      <!--            </span>-->
      <!--          </template>-->
      <!--        </VTieredMenu>-->
    </Popover>
  </div>
</template>

<style scoped></style>
