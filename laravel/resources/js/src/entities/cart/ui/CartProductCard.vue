<script setup lang="ts">
import { ICartItem } from '@/entities/cart/model/cart';
import IconGift from '@/shared/icons/IconGift.svg';
import { useScreenSize } from '@/shared/media-queries';
import { VPicture } from '@/shared/ui/picture';

const { isMobile, isTablet } = useScreenSize();

withDefaults(
  defineProps<{
    item: ICartItem & { gift_items?: ICartItem[] };
    type?: 'full' | 'short';
    giftType?: 'firstOrder' | 'forProduct';
  }>(),
  {
    type: 'full',
    giftType: 'firstOrder',
  },
);
</script>

<template>
  <div :class="{ 'bg-input': item.gift_items && item.gift_items.length }">
    <div class="grid grid-cols-[auto_1fr_auto] gap-4 pb-2" :class="isMobile ? '' : 'border-b-filling last:border-b'">
      <div class="relative">
        <VPicture
          v-if="item.item.images[0]?.path"
          :src="item.item.images[0].path"
          alt="Изображение товара"
          :width="isMobile ? '74px' : type === 'full' && !isTablet ? '225px' : '100px'"
          :height="isMobile ? '64px' : type === 'full' && !isTablet ? '133px' : '80px'"
          img-classes="rounded-lg"
          :class="{ 'relative before:absolute before:h-full before:w-full before:bg-white/60 before:content-[\'\']': !item.is_available }"
        />
        <VPicture
          v-else
          src="/images/productPlaceholder.png"
          alt="productPlaceholder"
          :width="isMobile ? '74px' : type === 'full' && !isTablet ? '225px' : '100px'"
          :height="isMobile ? '64px' : type === 'full' && !isTablet ? '133px' : '80px'"
        />
        <div v-if="item.is_gift && type === 'full'" class="bg-text/80 absolute top-1 right-0.5 z-10 cursor-pointer rounded-full p-2">
          <IconGift class="h-5 w-5 text-white" />
        </div>
      </div>
      <div class="gap-3 py-2 sm:flex sm:flex-col">
        <header class="grid gap-2">
          <div v-if="item.is_gift" class="text-complimentary-reg w-fit rounded-[100px] bg-[#325062] px-2 py-1 text-white">
            {{ giftType === 'firstOrder' ? 'Подарок при первом заказе' : 'Подарок к товару' }}
          </div>
          <h4 class="text-subsidiary-medium sm:text-mob-small-bold" :class="type === 'short' ? 'max-w-[435px] truncate' : ''">
            {{ item.item.name }}
          </h4>
        </header>
        <dl v-if="!isMobile && type === 'full' && !item.is_combo" class="flex items-center" :class="isTablet ? 'flex-wrap gap-1' : ''">
          <template v-if="item.item.article_number">
            <dt class="text-complimentary-reg text-additional mr-2">Артикул:</dt>
            <dd class="text-subsidiary-medium mr-8">{{ item.item.article_number }}</dd>
          </template>
          <template v-if="item.item.weight">
            <dt class="text-complimentary-reg text-additional mr-2">Средний вес:</dt>
            <dd class="text-subsidiary-medium mr-8">{{ item.item.weight }} {{ item.item.weight_type }}</dd>
          </template>
          <dt class="text-complimentary-reg text-additional mr-2">Упаковка:</dt>
          <dd class="text-subsidiary-medium mr-8">Вакуумная упаковка</dd>
          <template v-if="item.item.brands && item.item.brands.length">
            <dt class="text-complimentary-reg text-additional mr-2">Бренд:</dt>
            <dd class="text-subsidiary-medium mr-8">{{ item.item.brands[0]?.name }}</dd>
          </template>
        </dl>
        <div v-if="!isMobile" class="flex gap-4">
          <div>
            <slot name="addToCart" />
          </div>
          <div v-if="item.is_available" class="flex items-center gap-4">
            <div class="flex flex-col gap-0.5">
              <span v-if="!item.is_gift" class="text-complimentary-reg"
                >{{ item.item.sale_price ? item.item.sale_price : item.item.price }} <span v-if="!item.is_combo">{{ item.item.price_type }}</span>
                <span v-else>руб</span></span
              >
              <span class="text-mob-small-bold">{{ item.total_price }} руб</span>
            </div>
            <div
              v-if="!!item.sale_percent || !!item?.second_item_discount_amount"
              class="text-subsidiary text-complimentary-reg flex flex-col gap-0.5"
            >
              <p v-if="!item.is_gift" class="line-through">
                {{ item.item.price }} <span v-if="!item.is_combo">{{ item.item.price_type }}</span>
                <span v-else>руб</span>
              </p>
              <p class="line-through">{{ item.total_price_without_sale }} руб</p>
            </div>
            <div
              v-if="!!item.sale_percent && !item.is_gift && !item.second_item_discount_amount"
              class="bg-delete text-complimentary-reg rounded-full px-2 py-1 text-white"
            >
              -{{ item.sale_percent }}%
            </div>
            <div
              v-if="item?.second_item_discount_amount && item?.second_item_discount_percent"
              class="text-subsidiary-medium bg-ready-green rounded-full px-2 py-1 text-white"
            >
              -{{ item?.second_item_discount_percent }}% на второй товар
            </div>
            <div v-if="item.item.cashback_percent" class="bg-marker text-complimentary-reg rounded-full px-2 py-1 text-white">
              +{{ item.item.cashback_percent }}% кэшбека
            </div>
          </div>
        </div>
      </div>
      <slot name="removePosition" />
    </div>
    <div v-if="isMobile && type === 'full' && !item.is_combo" class="border-b-filling pb-2 last:border-b">
      <dl class="mt-3 flex flex-wrap items-center gap-2">
        <template v-if="item.item.article_number">
          <dt class="text-complimentary-reg text-additional">Артикул:</dt>
          <dd class="text-complimentary-reg">{{ item.item.article_number }}</dd>
        </template>
        <template v-if="item.item.weight">
          <dt class="text-complimentary-reg text-additional">Средний вес:</dt>
          <dd class="text-complimentary-reg">{{ item.item.weight }} {{ item.item.weight_type }}</dd>
        </template>
      </dl>
      <dl class="mt-0.5 flex flex-wrap items-center gap-2">
        <dt class="text-complimentary-reg text-additional">Упаковка:</dt>
        <dd class="text-complimentary-reg">Вакуумная упаковка</dd>
        <template v-if="item.item.brands && item.item.brands.length">
          <dt class="text-complimentary-reg text-additional">Бренд:</dt>
          <dd class="text-complimentary-reg">{{ item.item.brands[0]?.name }}</dd>
        </template>
      </dl>
      <div class="mt-3 flex gap-4">
        <slot name="addToCart"></slot>
        <div v-if="item.is_available" class="flex gap-4">
          <div class="flex flex-col gap-0.5">
            <span class="text-complimentary-reg">{{ item.item.price }} {{ item.item.price_type }}</span>
            <span class="text-mob-small-bold">{{ item.total_price }} руб</span>
          </div>
        </div>
      </div>
    </div>
    <template v-if="item.gift_items && item.gift_items.length">
      <CartProductCard v-for="gift in item.gift_items" :key="gift.id" :item="gift" gift-type="forProduct" :type>
        <template #addToCart>
          <div v-if="gift.is_available" class="text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2">
            {{ gift.quantity }} шт
          </div>
          <span v-else class="text-mob-small-bold shrink-0">Нет в наличии</span>
        </template>
        <template #removePosition>
          <slot name="removeGiftPosition" :gift-id="gift.item.id" :gift-quantity="gift.quantity" :is-combo="gift.is_combo" />
        </template>
      </CartProductCard>
    </template>
  </div>
</template>

<style scoped></style>
