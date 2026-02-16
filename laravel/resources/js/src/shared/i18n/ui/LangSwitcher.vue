<script setup lang="ts">
import { en } from 'primelocale/js/en.js';
import { ru } from 'primelocale/js/ru.js';
import { usePrimeVue } from 'primevue';
import { MenuItem } from 'primevue/menuitem';
import { ref, shallowRef } from 'vue';
import { useI18n } from 'vue-i18n';

import { default as VMenu } from '@/shared/ui/volt/Menu.vue';

import IconArrowDown from '../../icons/IconArrowDown.svg';
import IconGlobe from '../../icons/IconGlobe.svg';

const { locale, availableLocales } = useI18n();

const items: MenuItem[] = availableLocales.map((l) => ({
  key: l,
  label: l.toUpperCase(),
  command: () => changeMenu(l),
}));

const menu = shallowRef<InstanceType<typeof VMenu>>();
const isMenuOpened = ref<boolean>(false);
const changeMenu = (key: string): void => {
  locale.value = key;
  const primevue = usePrimeVue();
  switch (key) {
    case 'en': {
      primevue.config.locale = { ...en };
      break;
    }
    case 'ru': {
      primevue.config.locale = { ...ru };
    }
  }
};

const toggleMenu = (event: Event): void => {
  menu.value?.toggle(event);
};
</script>

<template>
  <div>
    <button aria-haspopup="true" aria-controls="switch_lang_menu" class="flex cursor-pointer items-center gap-2" @click="toggleMenu">
      <IconGlobe />
      <span class="text-subsidiary-reg flex items-center gap-0.5">
        {{ locale.toUpperCase() }}
        <IconArrowDown class="transition-transform duration-200" :class="{ 'rotate-180': isMenuOpened }" />
      </span>
    </button>
    <VMenu id="switch_lang_menu" ref="menu" :model="items" popup class="w-fit !min-w-0" @show="isMenuOpened = true" @hide="isMenuOpened = false" />
  </div>
</template>

<style scoped></style>
