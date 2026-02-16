<script setup lang="ts">
import { TBanner } from '@/shared/banner';

const { banner } = defineProps<{
  banner: TBanner;
}>();
</script>

<template>
  <div
    :style="{ backgroundImage: `url(${banner.image.path}), linear-gradient(to bottom, rgba(2, 40, 63, 0), rgba(2, 40, 63, 1))` }"
    class="rounded-20 flex min-h-[238px] w-full items-end bg-cover bg-center bg-no-repeat p-4 text-white bg-blend-color md:min-h-[193px] md:items-center md:p-6"
  >
    <div class="grid gap-2">
      <div v-if="banner.promotion_days_left" class="bg-delete text-subsidiary-medium w-fit rounded-[100px] px-2 py-1 text-white">
        Еще {{ banner.promotion_days_left }} дней
      </div>
      <h2 class="text-vast-mob-title-bold md:text-vast-title-bold uppercase">{{ banner.title }}</h2>
      <p class="text-mob-small-bold md:text-default-bold">{{ banner.description }}</p>
      <p class="text-subsidiary-reg md:text-mob-small-reg">{{ banner.addition_description }}</p>
      <slot name="button" :banner="banner" />
    </div>
  </div>
</template>

<style scoped></style>
