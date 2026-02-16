<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { useLocalStorage } from '@vueuse/core';
import { computed } from 'vue';

const cookieAccepted = useLocalStorage('cookie_accepted', false);

const visible = computed(() => !cookieAccepted.value);

const acceptCookies = () => {
  cookieAccepted.value = true;
};
</script>

<template>
  <div
    v-if="visible"
    class="bg-text/90 fixed bottom-4 left-1/2 z-50 flex w-full max-w-[863px] -translate-x-1/2 items-center justify-between gap-4 rounded-full px-6 py-4.5"
  >
    <p class="text-mob-small-reg text-white">
      Мы собираем файлы cookie для аналитики и правильной работы сайта.
      <Link href="/page/privacy-policy" class="text-mob-small-bold">Подробнее...</Link>
    </p>

    <button type="button" class="text-mob-small-reg bg-filling cursor-pointer rounded-full px-6 py-4" @click="acceptCookies">Согласиться</button>
  </div>
</template>

<style scoped></style>
