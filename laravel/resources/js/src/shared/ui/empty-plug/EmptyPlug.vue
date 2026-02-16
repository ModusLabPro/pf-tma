<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import { VButton } from '@/shared/ui/button';
import { VPicture } from '@/shared/ui/picture';
</script>

<template>
  <div class="bg-light-gray max-w-300 rounded-[40px]">
    <div class="flex flex-col items-center gap-8 px-4 py-6 md:gap-15 lg:flex-row lg:justify-center lg:px-48">
      <VPicture src="/images/test-images/image_exclamation.webp" alt="восклицание" class="-mt-15 max-w-[120px] lg:max-w-[200px]" />
      <div class="flex flex-col justify-between gap-8 xl:max-w-[540px]">
        <p class="text-mob-small-medium md:text-heavy-medium max-md:text-center">
          Здесь пока ничего нет, но скоро будет! <br />
          Мы уже бежим за новыми порциями контента
        </p>
        <Link :href="route('main-page')">
          <VButton label="На главную" />
        </Link>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
