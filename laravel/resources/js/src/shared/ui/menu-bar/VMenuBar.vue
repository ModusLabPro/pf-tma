<script setup lang="ts">
import type { MenubarPassThroughOptions, MenubarProps } from 'primevue/menubar';

import Menubar from 'primevue/menubar';
import { shallowRef } from 'vue';

import { ptViewMerge } from '@/shared/ui/volt/utils';

type Props = /* @vue-ignore */ MenubarProps;

defineProps<Props>();

const theme = shallowRef<MenubarPassThroughOptions>({
  root(options) {
    return {
      class: [
        'flex items-center rounded-lg p-2 gap-2 bg-[#F2F2F2] dark:bg-surface-900 text-surface-700 dark:text-surface-0 group',
        {
          'is-mobile flex-row-reverse relative': options.instance.queryMatches,
          'is-mobile-active': options.state.mobileActive,
        },
      ],
    };
  },
  start: 'flex items-center',
  end: 'flex items-center ms-auto self-center',
  rootList: `flex m-0 p-0 list-none outline-none items-center flex-wrap gap-6
             [&>[data-pc-section="item"]>[data-pc-section="itemcontent"]]:rounded-md

             group-[.is-mobile]:absolute group-[.is-mobile]:hidden group-[.is-mobile]:w-full group-[.is-mobile]:flex-col
             group-[.is-mobile]:top-full group-[.is-mobile]:start-0 group-[.is-mobile]:z-10 group-[.is-mobile]:p-1
             group-[.is-mobile]:gap-0.5 group-[.is-mobile]:rounded-md group-[.is-mobile]:border group-[.is-mobile]:border-surface-200
             group-[.is-mobile]:dark:border-surface-700 group-[.is-mobile]:bg-surface-0 group-[.is-mobile]:dark:bg-surface-900
             group-[.is-mobile]:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]
             group-[.is-mobile]:[&>[data-pc-section="item"]>[data-pc-section="itemcontent"]>[data-pc-section="itemlink"]]:px-3
             group-[.is-mobile]:[&>[data-pc-section="item"]>[data-pc-section="itemcontent"]>[data-pc-section="itemlink"]]:py-3
             group-[.is-mobile]:[&>[data-pc-section="item"]>[data-pc-section="itemcontent"]_[data-pc-section="submenuicon"]]:ms-auto
             group-[.is-mobile]:[&>[data-pc-section="item"]>[data-pc-section="itemcontent"]_[data-pc-section="submenuicon"]]:transition-transform
             group-[.is-mobile]:[&>[data-pc-section="item"]>[data-pc-section="itemcontent"]_[data-pc-section="submenuicon"]]:duration-[200ms]

             group-[.is-mobile]:[&>[data-pc-section="item"][data-p-active="true"]>[data-pc-section="itemcontent"]_[data-pc-section="submenuicon"]]:-rotate-180

             group-[.is-mobile-active]:flex`,
  submenu: `flex m-0 p-0 list-none outline-none hidden absolute min-w-52 z-10 bg-surface-0 dark:bg-surface-900
            border border-surface-200 dark:border-surface-700 text-surface-700 dark:text-surface-0
            flex-col p-1 gap-[2px] rounded-md shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]
            [&_[data-pc-section="separator"]]:border-t
            [&_[data-pc-section="separator"]]:border-surface-200
            [&_[data-pc-section="separator"]]:dark:border-surface-700
            [&_[data-pc-section="item"]]:relative
            [&>[data-pc-section="item"][data-p-active="true"]>[data-pc-section="submenu"]]:block
            [&>[data-pc-section="item"][data-p-active="true"]>[data-pc-section="submenu"]]:start-full
            [&>[data-pc-section="item"][data-p-active="true"]>[data-pc-section="submenu"]]:top-0

            group-[.is-mobile]:w-full group-[.is-mobile]:static group-[.is-mobile]:shadow-none group-[.is-mobile]:border-none
            group-[.is-mobile]:ps-4 group-[.is-mobile]:pe-0
            group-[.is-mobile]:[&_[data-pc-section="submenuicon"]]:rotate-90
            group-[.is-mobile]:[&_[data-pc-section="submenuicon"]]:transition-transform
            group-[.is-mobile]:[&_[data-pc-section="submenuicon"]]:duration-200`,
  itemContent: 'transition-colors duration-200 rounded-sm text-surface-700 dark:text-surface-0',
  itemLink: 'cursor-pointer flex items-center no-underline overflow-hidden relative text-inherit gap-2 select-none outline-none',
  itemIcon: 'text-surface-400 dark:text-surface-500',
  submenuIcon: `text-surface-400 dark:text-surface-500 ms-auto text-sm w-[0.875rem] h-[0.875rem]`,
  item: `p-focus:[&>[data-pc-section="itemcontent"]]:bg-surface-100 p-focus:[&>[data-pc-section="itemcontent"]]:dark:bg-surface-800
         p-focus:[&>[data-pc-section="itemcontent"]]:text-surface-800 p-focus:[&>[data-pc-section="itemcontent"]]:dark:text-surface-0
         p-focus:[&>[data-pc-section="itemcontent"]_[data-pc-section="itemicon"]]:text-surface-500
         p-focus:[&>[data-pc-section="itemcontent"]_[data-pc-section="itemicon"]]:dark:text-surface-400
         p-focus:[&>[data-pc-section="itemcontent"]_[data-pc-section="submenuicon"]]:text-surface-500
         p-focus:[&>[data-pc-section="itemcontent"]_[data-pc-section="submenuicon"]]dark:text-surface-400

         not-p-disabled:[&>[data-pc-section="itemcontent"]:hover]:bg-surface-100
         not-p-disabled:[&>[data-pc-section="itemcontent"]:hover]:dark:bg-surface-800
         not-p-disabled:[&>[data-pc-section="itemcontent"]:hover]:text-surface-800
         not-p-disabled:[&>[data-pc-section="itemcontent"]:hover]:dark:text-surface-0
         not-p-disabled:[&>[data-pc-section="itemcontent"]:hover_[data-pc-section="itemicon"]]:text-surface-500
         not-p-disabled:[&>[data-pc-section="itemcontent"]:hover_[data-pc-section="itemicon"]]:dark:text-surface-400
         not-p-disabled:[&>[data-pc-section="itemcontent"]:hover_[data-pc-section="submenuicon"]]:text-surface-500
         not-p-disabled:[&>[data-pc-section="itemcontent"]:hover_[data-pc-section="submenuicon"]]:dark:text-surface-400

         p-active:[&>[data-pc-section="itemcontent"]]:bg-surface-100
         p-active:[&>[data-pc-section="itemcontent"]]:dark:bg-surface-800
         p-active:[&>[data-pc-section="itemcontent"]]:text-surface-800
         p-active:[&>[data-pc-section="itemcontent"]]:dark:text-surface-0
         p-active:[&>[data-pc-section="itemcontent"]_[data-pc-section="itemicon"]]:text-surface-500
         p-active:[&>[data-pc-section="itemcontent"]_[data-pc-section="itemicon"]]:dark:text-surface-400
         p-active:[&>[data-pc-section="itemcontent"]_[data-pc-section="submenuicon"]]:text-surface-500
         p-active:[&>[data-pc-section="itemcontent"]_[data-pc-section="submenuicon"]]:dark:text-surface-400
         group-[.is-mobile]:w-full group-[.is-mobile]:static
         group-[.is-mobile]:p-active:[&>[data-pc-section="itemcontent"]_[data-pc-section="submenuicon"]]:-rotate-90`,
  button: `hidden justify-center items-center cursor-pointer w-7 h-7 relative border-none rounded-full
           text-surface-500 dark:text-surface-400 hover:text-surface-600 dark:hover:text-surface-300
           bg-transparent hover:bg-surface-100 dark:hover:bg-surface-800
           focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary
           transition-colors duration-200 group-[.is-mobile]:flex`,
  separator: 'group-[.is-mobile]:border-t group-[.is-mobile]:border-surface-200 group-[.is-mobile]:dark:border-surface-700',
  itemLabel: 'text-subsidiary-reg',
});
</script>

<template>
  <Menubar
    :pt="theme"
    :pt-options="{
      mergeProps: ptViewMerge,
    }"
  >
    <template v-for="(_, slotName) in $slots" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps ?? {}" />
    </template>
  </Menubar>
</template>
