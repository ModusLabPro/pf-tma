<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import { computed, useId, useTemplateRef } from 'vue';
import { useI18n } from 'vue-i18n';

import IconGiftOutline from '@/shared/icons/IconGiftOutline.svg';
import IconSnowflake from '@/shared/icons/IconSnowflake.svg';
import IconThermometr from '@/shared/icons/IconThermometr.svg';
import { Nullable } from '@/shared/lib/utility-types/Nullable';
import { useScreenSize } from '@/shared/media-queries';
import { VPicture } from '@/shared/ui/picture';

const props = defineProps<{
  id: number;
  title: string;
  images: string[];
  slug?: string;
  isNew?: boolean;
  isCombo?: boolean;
  degreeType?: 'chilled' | 'frozen';
  salePercent?: Nullable<number>;
  weight?: string;
  isFavorite?: boolean;
  type?: string;
  countInCart?: number;
  categories?: string[];
  unit?: string;
  price: number;
  priceUnit: string;
  oldPrice?: number;
  hasGift?: boolean;
  description?: string;
  cashbackPercent?: Nullable<number>;
  categoryId?: Nullable<number>;
}>();

const goToProduct = (): void => {
  if (props.isCombo) {
    router.visit(route('combo.show', props.id));
  } else {
    const url = route('catalog.product.show', props.slug);
    const query = props.categoryId ? `?category_id=${props.categoryId}` : '';
    router.visit(url + query);
  }
};

const salesBlock = useTemplateRef('salesBlock');

const productCardNb = computed(() => {
  if (salesBlock.value) {
    const nbHeight = salesBlock.value.clientHeight - 28 + 4;
    const nbWeight = salesBlock.value.clientWidth - 28 + 4;
    return {
      '--nb-r': '14px',
      '--nb-w': `${nbWeight}px`,
      '--nb-h': `${nbHeight > 0 ? nbHeight : 0}px`,
    };
  }
  const getWidth = () => {
    if (props.isNew && props.salePercent) return props.salePercent > 9 ? '74px' : '67px';
    else if (props.salePercent) return props.salePercent > 9 ? '14px' : '9px';
    else return '33px';
  };

  return {
    '--nb-r': '14px',
    '--nb-w': getWidth(),
    '--nb-h': '0px',
  };
});

const cardId = useId();
const { isDesktop, isTablet } = useScreenSize();
const { t } = useI18n();
</script>

<template>
  <article
    class="rounded-20 bg-card relative flex h-full cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:bg-white hover:shadow sm:max-w-[352px]"
    @click="goToProduct"
  >
    <div
      class="relative will-change-transform"
      :class="(isNew || !!salePercent || cashbackPercent) && !hasGift ? 'nebo nebo--tr' : ''"
      :style="(isNew || !!salePercent || cashbackPercent) && !hasGift ? productCardNb : ''"
    >
      <div class="absolute top-2 left-2 z-10 flex items-center gap-2 will-change-transform">
        <div v-if="degreeType">
          <div v-if="degreeType === 'frozen'" class="bg-text/80 cursor-pointer rounded-full p-2">
            <IconSnowflake />
          </div>
          <div v-else class="bg-text/80 cursor-pointer rounded-full p-2">
            <IconThermometr />
          </div>
        </div>

        <slot name="favoriteButton" />
      </div>

      <swiper-container
        v-if="images.length > 0"
        :pagination="{
          enabled: true,
          el: `.pagination-${cardId}`,
        }"
        :space-between="8"
        nested="true"
      >
        <swiper-slide v-for="image in images" :key="image" class="relative will-change-transform">
          <VPicture
            v-if="image"
            :src="image"
            :alt="title"
            width="100%"
            :height="isDesktop || isTablet ? '200px' : '120px'"
            class="!h-[120px] overflow-hidden rounded-2xl will-change-transform md:!h-[200px]"
          />
        </swiper-slide>
      </swiper-container>
      <VPicture
        v-else
        src="/images/productPlaceholder.png"
        alt="Изображение товара"
        width="100%"
        :height="isDesktop || isTablet ? '200px' : '120px'"
        class="!h-[120px] overflow-hidden rounded-2xl will-change-transform md:!h-[200px]"
      />
      <div
        class="text-text scrollbar-hide absolute bottom-2 left-2 z-10 flex w-full max-w-full items-center gap-2 overflow-x-auto pr-4 text-[10px]/[10px] text-nowrap whitespace-nowrap will-change-transform"
      >
        <div v-for="category in categories" :key="category" class="bg-filling shrink-0 rounded-lg px-2 py-1">
          {{ category }}
        </div>
      </div>
    </div>

    <div class="sw-pagination my-2 flex h-px gap-1 px-4" :class="`pagination-${cardId}`"></div>

    <div v-if="hasGift" class="bg-text/80 absolute top-2 right-2 z-10 cursor-pointer rounded-full p-2">
      <IconGiftOutline class="h-4 w-4 text-white" />
    </div>
    <div v-else-if="isNew || !!salePercent || cashbackPercent" ref="salesBlock" class="absolute top-0.5 right-1 grid justify-items-end gap-0.5">
      <div v-if="isNew || !!salePercent" class="flex justify-end gap-x-1">
        <div v-if="!!salePercent" class="bg-delete text-complimentary-reg rounded-full p-1 text-white will-change-transform">-{{ salePercent }}%</div>
        <div v-if="isNew" class="bg-default text-complimentary-reg rounded-full p-1 text-white will-change-transform">Новинка</div>
      </div>
      <div v-if="cashbackPercent" class="bg-marker text-complimentary-reg rounded-full p-1 text-white will-change-transform">
        Кэшбек +{{ cashbackPercent }}%
      </div>
    </div>

    <div class="flex flex-1 flex-col justify-between gap-2 px-4 pb-4">
      <header class="flex flex-col gap-3">
        <div class="flex flex-col gap-2">
          <slot name="title">
            <h3 class="text-mob-small-bold">{{ title }}</h3>
          </slot>
          <span v-if="description" class="text-complimentary-reg">{{ description }}</span>
        </div>
        <span v-if="weight" class="text-subsidiary text-complimentary-reg flex items-center gap-1">
          {{ t('product_card.average_weight') }}: <span class="text-subsidiary-medium text-text">{{ `${weight} ${unit}` }}</span>
        </span>
      </header>
      <div class="mt-auto flex flex-col gap-4">
        <div class="flex flex-col-reverse justify-between gap-1 md:flex-row md:items-center md:gap-2">
          <template v-if="!!price">
            <span class="text-small-bold text-default">
              {{ `${price.toLocaleString('ru-RU')} ${priceUnit}` }}
            </span>
            <span v-if="oldPrice" class="text-complimentary-reg text-subsidiary line-through">
              {{ `${oldPrice.toLocaleString('ru-RU')} ${priceUnit}` }}
            </span>
          </template>
          <template v-else>
            <span class="text-small-bold text-default">
              {{ `${oldPrice?.toLocaleString('ru-RU')} ${priceUnit}` }}
            </span>
          </template>
        </div>
        <footer v-if="$slots.footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </article>
</template>

<style scoped>
.sw-pagination {
  & :deep(.swiper-pagination-bullet) {
    background-color: var(--color-filling);
    display: block;
    flex: 1;
  }

  & :deep(.swiper-pagination-bullet:only-child) {
    display: none;
  }

  & :deep(.swiper-pagination-bullet-active) {
    background-color: var(--color-default);
    display: block;
    flex: 1;
  }
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
