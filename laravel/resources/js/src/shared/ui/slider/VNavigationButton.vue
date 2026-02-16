<script setup lang="ts">
import IconCaretLeft from '@/shared/icons/IconCaretLeft.svg';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg';

withDefaults(
  defineProps<{
    sliderKey: string;
    buttonColor?: string;
  }>(),
  {
    buttonColor: 'white',
  },
);
</script>

<template>
  <div class="flex w-18 items-center overflow-hidden rounded-[100px] shadow-[0_4px_20px_0_rgba(0,0,0,0.1)] lg:w-20">
    <button class="slider-nav-btn flex-1 cursor-pointer p-3 pr-0 transition-colors hover:bg-gray-100" :class="`slider-prev-${sliderKey}`">
      <IconCaretLeft class="h-5 w-5 lg:h-6 lg:w-6" />
    </button>
    <button class="slider-nav-btn flex-1 cursor-pointer p-3 pl-0 transition-colors hover:bg-gray-100" :class="`slider-next-${sliderKey}`">
      <IconCaretRight class="ml-auto h-5 w-5 lg:h-6 lg:w-6" />
    </button>
  </div>
</template>

<style scoped>
.slider-nav-btn {
  background-color: v-bind(buttonColor);
}

.slider-nav-btn:hover {
  background-color: #f3f4f6;
}
</style>
