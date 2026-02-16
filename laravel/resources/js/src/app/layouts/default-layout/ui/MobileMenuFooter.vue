<script setup lang="ts">
import { LangSwitcher } from '@/shared/i18n';
import IconDzenOutline from '@/shared/icons/IconDzenOutline.svg?skipsvgo';
import IconTelegramOutline from '@/shared/icons/IconTelegramOutline.svg?skipsvgo';
import IconVkOutline from '@/shared/icons/IconVkOutline.svg?skipsvgo';
import IconYoutubeOutline from '@/shared/icons/IconYoutubeOutline.svg?skipsvgo';
import { useScreenSize } from '@/shared/media-queries';

const { isMobile, isTablet } = useScreenSize();
</script>

<template>
  <div class="flex flex-col gap-2 pt-6">
    <LangSwitcher />
    <p class="text-complimentary-reg text-additional">Станьте частью нашего сообщества</p>
    <a href="tel:88005504622" class="text-small-bold">8-800-550-46-22</a>
    <p class="text-complimentary-reg text-additional">Станьте частью нашего сообщества</p>
    <div class="flex justify-between gap-4">
      <a href="https://www.youtube.com/channel/UCAiFMHSSTHQqL3Kd0D_3_hQ" target="_blank">
        <IconYoutubeOutline
          class="hover:text-default text-[#83939E] transition-colors duration-300"
          :width="isMobile || isTablet ? '48px' : '32px'"
          :height="isMobile || isTablet ? '48px' : '32px'"
        />
      </a>
      <a href="https://t.me/primefoods_ru" target="_blank">
        <IconTelegramOutline
          class="hover:text-default text-[#83939E] transition-colors duration-300"
          :width="isMobile || isTablet ? '48px' : '32px'"
          :height="isMobile || isTablet ? '48px' : '32px'"
        />
      </a>
      <a href="https://dzen.ru/primefoods" target="_blank">
        <IconDzenOutline
          class="hover:text-default text-[#83939E] transition-colors duration-300"
          :width="isMobile || isTablet ? '48px' : '32px'"
          :height="isMobile || isTablet ? '48px' : '32px'"
        />
      </a>
      <a href="https://vk.com/primefoods_ru" target="_blank">
        <IconVkOutline
          class="hover:text-default text-[#83939E] transition-colors duration-300"
          :width="isMobile || isTablet ? '48px' : '32px'"
          :height="isMobile || isTablet ? '48px' : '32px'"
        />
      </a>
    </div>
  </div>
</template>

<style scoped></style>
