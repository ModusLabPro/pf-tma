import { useMediaQuery } from '@vueuse/core';
import { ComputedRef } from 'vue';

export const useScreenSize = () => {
  const isMobile: ComputedRef<boolean> = useMediaQuery('(max-width: 639px)');
  const isTablet: ComputedRef<boolean> = useMediaQuery('(min-width: 640px) and (max-width: 1023px)');
  const isDesktop: ComputedRef<boolean> = useMediaQuery('(min-width: 1024px)');

  const isCategoriesMobile: ComputedRef<boolean> = useMediaQuery('(max-width: 768px)');
  const isCategoriesTablet: ComputedRef<boolean> = useMediaQuery('(min-width: 768px) and (max-width: 1360px)');
  const isCategoriesDesktop: ComputedRef<boolean> = useMediaQuery('(min-width: 1360px)');

  return {
    isMobile,
    isTablet,
    isDesktop,

    isCategoriesMobile,
    isCategoriesTablet,
    isCategoriesDesktop,
  };
};
