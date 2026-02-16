<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { route } from 'ziggy-js';

import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VPicture } from '@/shared/ui/picture';

const { isMobile } = useScreenSize();
</script>

<template>
  <section class="bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15">
    <div class="flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15">
      <VPicture src="/images/test-images/image_phone_credit.webp" alt="heart" class="lg:ml-20 xl:scale-115" :height="isMobile ? '100px' : '170px'" />
      <div class="flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]">
        <p class="text-default-medium md:text-heavy-medium max-md:text-center">Здесь покажем историю начисления и списания баллов</p>
        <Link :href="route('catalog.index')">
          <VButton :label="'Подробнее о бонусной системе'" class="w-fit max-md:mt-6 md:mt-8" />
        </Link>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
