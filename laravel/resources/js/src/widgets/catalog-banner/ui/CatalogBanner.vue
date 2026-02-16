<script setup lang="ts">
import { VButton } from '@/shared/ui/button';
import { VNavigationButton } from '@/shared/ui/slider';
</script>

<template>
  <div class="relative overflow-hidden rounded-[40px]">
    <swiper-container
      space-between="32"
      loop="true"
      :navigation="{
        nextEl: '.slider-next-main',
        prevEl: '.slider-prev-main',
      }"
    >
      <swiper-slide v-for="i in 5" :key="i">
        <div
          class="h-105 overflow-hidden rounded-[40px] bg-cover bg-center bg-no-repeat md:h-80"
          :style="{
            backgroundImage: 'url(/images/test-images/main-slider.jpg)',
          }"
        >
          <div class="h-[100%]">
            <div
              class="bg-text h-2/3 mask-[url('/images/masks/for_combo_mobile1.svg')] mask-cover mask-bottom mask-no-repeat p-6 md:h-full md:max-w-[70%] md:mask-[url('/images/masks/for_combo.svg')] md:mask-size-[auto_150%] md:mask-right lg:mask-contain lg:mask-left"
            >
              <div class="mb-6 md:mb-8">
                <div class="font-vast text-vast-mob-title-bold md:text-vast-title-bold mb-2 text-white uppercase md:mb-3">
                  Праздники <br />
                  с Prime Foods
                </div>
                <span class="text-mob-small-reg text-white">Собрали все самое вкусное</span>
              </div>
              <VButton label="Подробнее" variant="light" class="w-full md:mt-14 md:w-fit" />
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper-container>
    <VNavigationButton class="absolute right-4 bottom-4 z-10 shadow-none md:top-4 md:bottom-auto" slider-key="main" button-color="#E7EAEC" />
  </div>
</template>

<style scoped></style>
