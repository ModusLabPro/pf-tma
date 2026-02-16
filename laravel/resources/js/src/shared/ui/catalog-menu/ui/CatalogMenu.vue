<script setup lang="ts">
import type { ICatalogMenuItem } from '../model/catalogMenuProps';

import { Link, usePage } from '@inertiajs/vue3';
import { computed, defineAsyncComponent, ref, watch } from 'vue';

// import { useFiltersStore } from '@/app/layouts/catalog-layout';
import IconCaretLeft from '@/shared/icons/IconCaretLeft.svg';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg?skipsvgo';
import { compare } from '@/shared/lib/helpers/compare';
import { iconLoader } from '@/shared/lib/helpers/iconLoader';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';

import { ICatalogCategory, ICatalogMenuProps, TargetCategory } from '../model/catalogMenuProps';

const page = usePage<ICatalogMenuProps>();

const {
  basePath = 'catalog',
  baseBreadcrumbs = [
    { label: 'Главная', route: route('main-page') },
    { label: 'Каталог', route: route('catalog.index') },
  ],
  only = undefined,
  isCatalogPage,
} = defineProps<{
  basePath?: string;
  isCatalogPage?: boolean;
  baseBreadcrumbs?: { label: string; route: string }[];
  only?: string[];
}>();

const selectedCategory = computed<TargetCategory | null>(() => page.props.category_target);

const categoriesChain = computed<Omit<TargetCategory, 'parent'>[]>(() => {
  const chain: Omit<TargetCategory, 'parent'>[] = [];

  const getChain = (category: TargetCategory, chainArr: Omit<TargetCategory, 'parent'>[]): void => {
    chainArr.unshift({
      id: category.id,
      name: category.name,
      slug: category.slug,
      path: category.path,
    });
    if (category.parent) {
      getChain(category.parent, chainArr);
    }
  };

  if (page.props.category_target) {
    getChain(page.props.category_target, chain);
  }

  return chain;
});

const menuItems = ref<ICatalogMenuItem[]>([]);
const loader = iconLoader();
const updateMenuItems = (): ICatalogMenuItem[] => {
  const categoryTransform = (category: ICatalogCategory): ICatalogMenuItem => {
    return {
      id: category.id,
      title: category.name,
      icon: category.icon_path ? defineAsyncComponent(() => loader(category.icon_path)) : category.icon_path,
      route: isCatalogPage ? `/${basePath}/${category.path}` : `/${basePath}/?category=${category.path}`,
      slug: category.slug,
      path: category.path,
      items: category.children.map((c) => categoryTransform(c)),
    };
  };
  if (!selectedCategory.value) {
    return page.props.categories.map((category) => categoryTransform(category));
  }
  const childElsList: ICatalogCategory[] = categoriesChain.value.reduce((acc: ICatalogCategory[], val) => {
    const _acc = acc.find((c) => c.id === val.id)?.children ?? [];
    if (!_acc.length) {
      return acc;
    }
    return _acc;
  }, page.props.categories);

  return childElsList.map((c) => categoryTransform(c));
};
// const menuItems = computed<ICatalogMenuItem[]>(() => {
//   const categoryTransform = (category: ICatalogCategory): ICatalogMenuItem => {
//     return {
//       id: category.id,
//       title: category.name,
//       icon: category.icon_path ? defineAsyncComponent(() => iconLoader(category.icon_path)) : category.icon_path,
//       route: `/catalog/?category=${category.slug}`,
//       slug: category.slug,
//       items: category.children.map((c) => categoryTransform(c)),
//     };
//   };
//   if (!selectedCategory.value) {
//     return page.props.categories.map((category) => categoryTransform(category));
//   }
//   const childElsList: ICatalogCategory[] = categoriesChain.value.reduce((acc: ICatalogCategory[], val) => {
//     const _acc = acc.find((c) => c.id === val.id)?.children ?? [];
//     if (!_acc.length) {
//       return acc;
//     }
//     return _acc;
//   }, page.props.categories);
//
//   return childElsList.map((c) => categoryTransform(c));
// });
// const filtersStore = useFiltersStore();
const showCategoriesBreadcrumbs = computed<boolean>(() => {
  if (!categoriesChain.value.length) {
    return false;
  }
  if (categoriesChain.value.length > 1) {
    return true;
  }
  return !!page.props.categories.find((el) => el.id === selectedCategory.value?.id)?.children.length;
});

const emit = defineEmits<{
  'close-menu': [];
  'change-category': [];
}>();

const breadcrumbItems = computed<{ label: string; route: string }[]>(() => {
  const items = [...baseBreadcrumbs];
  console.log(categoriesChain.value);
  console.log([
    ...items,
    ...categoriesChain.value.map((el) => ({
      label: el.name,
      route: isCatalogPage ? `/${basePath}/${el.path}` : `/${basePath}/?category=${el.path}`,
    })),
  ]);
  return [
    ...items,
    ...categoriesChain.value.map((el) => ({
      label: el.name,
      route: isCatalogPage ? `/${basePath}/${el.path}` : `/${basePath}/?category=${el.path}`,
    })),
  ];
});

const handleLinkClick = (items: ICatalogMenuItem[]): void => {
  // filtersStore.onChangeCategory();
  emit('change-category');
  if (items.length === 0) {
    emit('close-menu');
  }
};

const handleApply = (): void => {
  emit('close-menu');
};

const { isDesktop } = useScreenSize();
watch(
  [() => page.props.categories, selectedCategory, () => basePath],
  (value, oldValue) => {
    if (!compare(value, oldValue)) {
      menuItems.value = updateMenuItems();
    }
  },
  {
    immediate: true,
    deep: true,
  },
);

defineExpose({
  breadcrumbItems,
});
</script>

<template>
  <Breadcrumb v-if="!isDesktop" :model="breadcrumbItems" class="bg-light-gray mb-3 !shrink-0 !overflow-auto" pt:root="px-3">
    <template #item="{ item }">
      <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route" :only>
        {{ item.label }}
      </Link>
    </template>
  </Breadcrumb>
  <nav class="grid grid-rows-[auto_1fr] gap-0.5">
    <ul v-if="showCategoriesBreadcrumbs">
      <template v-for="(item, index) in categoriesChain" :key="item.id">
        <li v-if="!menuItems.some((el) => el.id === item.id)" class="mb-0.5 last:mb-0">
          <Link
            :href="isCatalogPage ? `/${basePath}` : `/${basePath}/`"
            :only="only"
            class="sm:bg-subsidiary-filling text-subsidiary-medium hover:text-default flex items-center gap-2 rounded-lg bg-white py-3 pr-3 transition-colors sm:max-w-56"
            :style="{
              paddingInlineStart: `${(index + 1) * 12}px`,
            }"
            :on-click="() => emit('change-category')"
          >
            <IconCaretLeft class="text-default h-4 w-4 shrink-0" />
            <span class="truncate">
              {{ item.name }}
            </span>
          </Link>
        </li>
      </template>
    </ul>
    <ul>
      <template v-for="({ id, title, icon, route, items }, index) in menuItems" :key="id">
        <li>
          <Link
            :href="
              id === selectedCategory?.id
                ? selectedCategory?.parent?.path
                  ? isCatalogPage
                    ? `/${basePath}/${selectedCategory.parent.path}`
                    : `/${basePath}/?category=${selectedCategory.parent.path}`
                  : `/${basePath}`
                : route
            "
            class="text-subsidiary-reg hover:text-default border-stroke inline-flex w-full cursor-pointer items-center justify-between border-b p-3 transition-colors"
            :class="{
              'bg-full rounded-lg border-transparent': id === selectedCategory?.id,
              'border-transparent': menuItems.findIndex((i) => i.id === selectedCategory?.id) - 1 === index,
            }"
            :only="only"
            @click="handleLinkClick(items)"
          >
            <span class="inline-flex items-center gap-2">
              <Component :is="icon" v-if="icon" />
              {{ title }}
            </span>
            <IconCaretRight v-if="items?.length" class="text-default h-4 w-4" />
          </Link>
        </li>
      </template>
    </ul>
    <VButton v-if="showCategoriesBreadcrumbs && !isDesktop" label="Применить" class="mt-4" @click="handleApply" />
  </nav>
</template>

<style scoped></style>
