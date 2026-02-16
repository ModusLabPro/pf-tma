<script setup lang="ts">
import YandexLogo from '@/shared/icons/IconYandexLogo.svg';
</script>

<template>
  <a
    :href="route('yandex.get')"
    class="bg-filling hover:bg-surface-200 flex items-center justify-center rounded-full px-6 py-2.5 transition-colors duration-200"
  >
    <YandexLogo />
  </a>
</template>
