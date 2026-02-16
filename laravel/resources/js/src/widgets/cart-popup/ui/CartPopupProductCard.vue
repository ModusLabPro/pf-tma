<script setup lang="ts">
import { ICartItem } from '@/entities/cart/model/cart';
import { AddToCart } from '@/features/Product/manage-cart';
import { VPicture } from '@/shared/ui/picture';

defineProps<{
  item: ICartItem;
}>();
</script>

<template>
  <div v-if="!item.is_combo" class="border-b-filling grid grid-cols-[auto_1fr_auto] gap-4 border-b py-2">
    <VPicture
      v-if="item.item.images[0]?.path"
      :src="item.item.images[0].path"
      alt="Изображение товара"
      width="116px"
      height="80px"
      class="rounded-lg"
    />
    <div v-else class="bg-surface-100 h-20 w-[116px] rounded-lg" />
    <div class="flex flex-col gap-3 py-2">
      <h4 class="text-mob-small-bold max-w-[435px] truncate">{{ item.item.name }}</h4>
      <div class="flex gap-4">
        <div>
          <AddToCart :count-in-cart="item.quantity" :can-quick-buy="false" :is-combo="item.is_combo" />
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
