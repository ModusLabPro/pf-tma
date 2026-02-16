<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import { computed, watch } from 'vue';

import IconCaretRight from '@/shared/icons/IconCaretRight.svg';
import IconXCircleDelete from '@/shared/icons/IconXCircleDelete.svg';

const isOpen = defineModel<boolean>('isOpen', {
  default: false,
});

const hasRulesParam = computed(() => !!route().queryParams?.rules);

watch(
  () => route().queryParams?.rules,
  (value) => {
    isOpen.value = !!value;
  },
  { immediate: true },
);

watch(isOpen, (open) => {
  if (typeof document === 'undefined') return;
  
  if (open) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
    if (hasRulesParam.value && typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('rules');
      const newUrl = url.pathname + (url.search ? url.search : '') + (url.hash || '');

      router.replace({
        url: newUrl,
        preserveScroll: true,
      });
    }
  }
});

const closeDrawer = () => {
  isOpen.value = false;
};
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 z-[1100] bg-black/50" @click="closeDrawer" />
  </Transition>

  <Transition
    enter-active-class="transition-transform duration-300 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition-transform duration-300 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <aside v-if="isOpen" class="fixed max-[480px]:inset-0 min-[480px]:top-8 min-[480px]:right-8 z-[3001] w-full max-w-md rounded-[40px] bg-white pb-6" @click.stop>
      <div class="flex h-full flex-col">
        <header class="relative flex items-center justify-center p-6">
          <h2 class="text-small-bold text-center">Правила и соглашения</h2>
          <div class="absolute right-8">
            <button
              type="button"
              class="text-text-secondary hover:text-default bg-input flex cursor-pointer items-center justify-center rounded-full p-1 transition-colors"
              @click="closeDrawer"
            >
              <IconXCircleDelete class="h-6 w-6" />
            </button>
          </div>
        </header>

        <div class="mt-4 flex-1 overflow-y-auto px-6">
          <nav class="flex flex-col">
            <a
              href="/documents/Политика_конфиденциальности_ООО_ТД_ПРАЙМ_ФУДС.pdf"
              target="_blank"
              rel="noopener"
              class="text-mob-small-reg border-b-filling hover:text-default transition-color inline-flex items-center justify-between border-b py-4 duration-250"
            >
              <span>Политика конфиденциальности</span>
              <IconCaretRight />
            </a>
            <a
              href="/documents/Пользовательское соглашение.pdf"
              target="_blank"
              rel="noopener"
              class="text-mob-small-reg border-b-filling hover:text-default transition-color inline-flex items-center justify-between border-b py-4 duration-250"
            >
              <span>Пользовательское соглашение</span>
              <IconCaretRight />
            </a>
            <a
              href="/documents/Согласие_на_обработку_персональных_данных.pdf"
              target="_blank"
              rel="noopener"
              class="text-mob-small-reg border-b-filling hover:text-default transition-color inline-flex items-center justify-between border-b py-4 duration-250"
            >
              <span>Согласие на обработку персональных данных</span>
              <IconCaretRight />
            </a>
            <a
              href="/documents/Согласие_на_передачу_персональных_данных_партнерам_ООО_ТД_ПРАЙМ.pdf"
              target="_blank"
              rel="noopener"
              class="text-mob-small-reg border-b-filling hover:text-default transition-color inline-flex items-center justify-between border-b py-4 duration-250"
            >
              <span>Согласие на передачу персональных данных партнерам</span>
              <IconCaretRight />
            </a>
            <a
              href="/documents/Уведомление_об_обработке_персональных_данных_в_ТД_ПРАЙМ_ФУДС.pdf"
              target="_blank"
              rel="noopener"
              class="text-mob-small-reg border-b-filling hover:text-default transition-color inline-flex items-center justify-between border-b py-4 duration-250"
            >
              <span>Уведомление об обработке персональных данных</span>
              <IconCaretRight />
            </a>
            <a
              href="/documents/Условия_продажи_товаров_на_сайте_ООО_ТД_ПРАЙМ_ФУДС.pdf"
              target="_blank"
              rel="noopener"
              class="text-mob-small-reg border-b-filling hover:text-default transition-color inline-flex items-center justify-between border-b py-4 duration-250"
            >
              <span>Условия продажи товаров на сайте</span>
              <IconCaretRight />
            </a>
          </nav>
        </div>
      </div>
    </aside>
  </Transition>
</template>

<style scoped></style>
