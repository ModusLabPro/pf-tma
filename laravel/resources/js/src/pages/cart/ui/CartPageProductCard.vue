<script setup lang="ts">
import { ICartItem } from '@/entities/cart/model/cart';
import { AddToCart } from '@/features/Product/manage-cart';
import { useScreenSize } from '@/shared/media-queries';
import { VPicture } from '@/shared/ui/picture';

const { isMobile } = useScreenSize();

defineProps<{
  item: ICartItem;
}>();
</script>

<template>
  <div v-if="!item.is_combo">
    <div class="grid grid-cols-[auto_1fr_auto] gap-4 py-2" :class="isMobile ? '' : 'border-b-filling border-b'">
      <VPicture
        v-if="item.item.images[0]?.path"
        :src="item.item.images[0].path"
        alt="Изображение товара"
        :width="isMobile ? '74px' : '116px'"
        :height="isMobile ? '64px' : '80px'"
        class="rounded-lg"
      />
      <div v-else class="bg-surface-100 h-20 rounded-lg sm:w-[116px]" />
      <div class="gap-3 py-2 sm:flex sm:flex-col">
        <h4 class="text-subsidiary-medium sm:text-mob-small-bold">{{ item.item.name }}</h4>
        <dl v-if="!isMobile" class="flex items-center">
          <dt class="text-complimentary-reg text-additional mr-2">Артикул:</dt>
          <dd class="text-subsidiary-medium mr-8">221312312</dd>
          <dt class="text-complimentary-reg text-additional mr-2">Средний вес:</dt>
          <dd class="text-subsidiary-medium mr-8">{{ item.item.weight }} {{ item.item.weight_type }}</dd>
          <dt class="text-complimentary-reg text-additional mr-2">Упаковка:</dt>
          <dd class="text-subsidiary-medium mr-8">Вакуумная упаковка</dd>
          <dt class="text-complimentary-reg text-additional mr-2">Бренд:</dt>
          <dd class="text-subsidiary-medium mr-8">{{ item.item.brands[0]?.name }}</dd>
        </dl>
        <div v-if="!isMobile" class="flex gap-4">
          <div>
            <AddToCart :count-in-cart="item.quantity" :can-quick-buy="false" />
          </div>
          <div class="flex gap-4">
            <div class="flex flex-col gap-0.5">
              <span class="text-complimentary-reg">{{ item.item_price }} {{ item.item.price_type }}</span>
              <span class="text-mob-small-bold">{{ item.total_price }} руб</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="border-b-filling border-b pb-2">
      <dl class="mt-3 flex flex-wrap items-center gap-2">
        <dt class="text-complimentary-reg text-additional">Артикул:</dt>
        <dd class="text-complimentary-reg">221312312</dd>
        <dt class="text-complimentary-reg text-additional">Средний вес:</dt>

        <dd class="text-complimentary-reg">{{ item.item.weight }} {{ item.item.weight_type }}</dd>
      </dl>
      <dl class="mt-0.5 flex flex-wrap items-center gap-2">
        <dt class="text-complimentary-reg text-additional">Упаковка:</dt>
        <dd class="text-complimentary-reg">Вакуумная упаковка</dd>
        <dt class="text-complimentary-reg text-additional">Бренд:</dt>
        <dd class="text-complimentary-reg">{{ item.item.brands[0]?.name }}</dd>
      </dl>
      <div class="mt-3 flex gap-4">
        <div>
          <AddToCart :count-in-cart="item.quantity" :can-quick-buy="false" />
        </div>
        <div class="flex gap-4">
          <div class="flex flex-col gap-0.5">
            <span class="text-complimentary-reg">{{ item.item_price }} {{ item.item.price_type }}</span>
            <span class="text-mob-small-bold">{{ item.total_price }} руб</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
