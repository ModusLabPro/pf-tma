import type { SwiperOptions } from 'swiper/types';

export const defaultSwiperBreakpoints: SwiperOptions['breakpoints'] = {
  0: { slidesPerView: 1.7, spaceBetween: 6 },
  640: { slidesPerView: 3, spaceBetween: 16 },
  1024: { slidesPerView: 4, spaceBetween: 24 },
  1280: { slidesPerView: 5, spaceBetween: 32 },
  1530: { slidesPerView: 6, spaceBetween: 32 },
};
