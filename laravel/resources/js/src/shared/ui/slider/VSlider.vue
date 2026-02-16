<script setup lang="ts" generic="T">
import type { SwiperOptions } from 'swiper/types';

import { SwiperContainer } from 'swiper/element';
import { register } from 'swiper/element/bundle';
import { computed, shallowRef, useId } from 'vue';

import IconCaretLeft from '@/shared/icons/IconCaretLeft.svg';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg';
import { useScreenSize } from '@/shared/media-queries';

import { defaultSwiperBreakpoints } from './model/defaultSwiperBreakpoints';

const { isMobile } = useScreenSize();

register();

const props = defineProps<{
  slides: T[];
  sliderOptions?: SwiperOptions;
}>();

const sliderId = useId();

const sliderOptions = computed<SwiperOptions>(() => {
  const options = props.sliderOptions ? { ...props.sliderOptions } : {};

  if (!options.breakpoints) {
    options.breakpoints = defaultSwiperBreakpoints;
  }

  options.navigation = options.navigation ?? {
    nextEl: `.next-btn-${sliderId}`,
    prevEl: `.prev-btn-${sliderId}`,
  };
  return options;
});

const _slides = computed<{ key: string; slide: T }[]>(() => props.slides.map((slide) => ({ key: useId(), slide })));

const sliderInst = shallowRef<SwiperContainer>();

const slideNext = (): void => {
  sliderInst.value?.swiper.slideNext();
};

const slidePrev = (): void => {
  sliderInst.value?.swiper.slidePrev();
};

defineSlots<{
  slide(props: { slide: T }): unknown;
  controllers(props: { slideNext: () => void; slidePrev: () => void }): unknown;
  prevBtn(props: { slidePrev: () => void }): unknown;
  nextBtn(props: { slideNext: () => void }): unknown;
}>();
</script>

<template>
  <div class="relative">
    <swiper-container ref="sliderInst" v-bind="sliderOptions">
      <swiper-slide v-for="{ slide, key } in _slides" :key="key" class="!h-auto pb-0.5">
        <slot name="slide" :slide />
      </swiper-slide>
    </swiper-container>
    <slot v-if="!isMobile" name="controllers" :slide-next="slideNext" :slide-prev="slidePrev">
      <slot name="prevBtn" :slide-prev="slidePrev">
        <button
          class="absolute top-[calc(50%-24px)] left-0 z-10 flex h-12 w-12 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] disabled:invisible slide-prev-btn"
          :class="`prev-btn-${sliderId}`"
        >
          <IconCaretLeft />
        </button>
      </slot>
      <slot name="nextBtn" :slide-next="slideNext">
        <button
          class="absolute top-[calc(50%-24px)] right-0 z-10 flex h-12 w-12 translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] disabled:invisible slide-next-btn"
          :class="`next-btn-${sliderId}`"
        >
          <IconCaretRight />
        </button>
      </slot>
    </slot>
  </div>
</template>

<style scoped></style>
