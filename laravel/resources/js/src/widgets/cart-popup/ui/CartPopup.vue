<script setup lang="ts">
import { router, usePage } from '@inertiajs/vue3';
import { useId, useTemplateRef, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import { ICart } from '@/entities/cart/model/cart';
import CartProductCard from '@/entities/cart/ui/CartProductCard.vue';
import { IUser } from '@/entities/user';
import { useOrderCalculate } from '@/features/orderCalculate';
import { AddToCart } from '@/features/Product/manage-cart';
import { clearCart } from '@/features/Product/manage-cart/model';
import RemoveProductPosition from '@/features/Product/manage-cart/ui/RemoveProductPosition.vue';
import IconShoppingCart from '@/shared/icons/IconShoppingCart.svg?skipsvgo';
import { Nullable } from '@/shared/lib/utility-types/Nullable';
import { VTooltip } from '@/shared/tooltip';
import { VButton } from '@/shared/ui/button';
import { VPicture } from '@/shared/ui/picture';
import { VScrollPanel } from '@/shared/ui/scroll-panel';
import Button from '@/shared/ui/volt/Button.vue';
import VoltButton from '@/shared/ui/volt/Button.vue';
import OverlayBadge from '@/shared/ui/volt/OverlayBadge.vue';
import Popover from '@/shared/ui/volt/Popover.vue';

const { t } = useI18n();
const { calculateData, calculateOrder } = useOrderCalculate();

// Не вызываем calculateOrder во время SSR
if (typeof window !== 'undefined') {
  calculateOrder();
}

const cartContainer = useTemplateRef<InstanceType<typeof Popover>>('cart-popover');

const toggleCartPopover = (e: Event): void => {
  cartContainer.value?.toggle(e);
};

const page = usePage<{ cart: ICart; auth: { user: Nullable<IUser> } }>();

const toCreateOrder = (e: Event): void => {
  router.visit(route('order.create'));
  cartContainer.value?.toggle(e);
};

const toCart = (e: Event): void => {
  router.visit(route('cart.index'));
  cartContainer.value?.toggle(e);
};

watch(
  () => page.props.cart,
  () => {
    // Не вызываем calculateOrder во время SSR
    if (typeof window !== 'undefined') {
      calculateOrder();
    }
  },
);
</script>

<template>
  <OverlayBadge :value="page.props.cart?.cartQuantity || 0" severity="danger" class="!translate-x-0 !translate-y-0">
    <Button :label="t('header.cart')" rounded variant="outlined" @click="toggleCartPopover">
      <template #icon>
        <IconShoppingCart />
      </template>
    </Button>
  </OverlayBadge>
  <Popover ref="cart-popover">
    <div v-if="page.props.cart?.items?.length > 0" class="max-w-[593px]">
      <div class="grid grid-rows-[auto_1fr_auto] gap-4">
        <div class="flex items-center justify-between gap-8">
          <span class="inline-flex items-center gap-2">
            <span class="text-small-medium">{{ t('cart.cart') }}</span>
            <span class="text-small-medium text-[#867F7F]">{{ t('cart.goods', page.props.cart?.cartQuantity || 0) }}</span>
          </span>
          <button
            class="bg-filling text-complimentary-reg hover:bg-surface-200 cursor-pointer rounded-[50px] px-3 py-2 transition-colors duration-200"
            @click="clearCart"
          >
            {{ t('cart.clear_cart') }}
          </button>
        </div>
        <div class="pb-4">
          <VScrollPanel style="max-height: 220px; width: 593px">
            <div class="grid grid-flow-row gap-2">
              <CartProductCard v-for="item in (page.props.cart?.formatedItems || [])" :key="item.id + useId()" :item="item" type="short">
                <template #addToCart>
                  <AddToCart
                    v-if="item.is_available"
                    :id="item.item.id"
                    :type="item.is_combo ? 'combo' : 'product'"
                    :count-in-cart="item.quantity"
                    :can-quick-buy="false"
                    :is-combo="item.is_combo"
                  />
                  <div v-else class="flex items-center gap-4">
                    <span class="text-mob-small-bold">Нет в наличии</span>
                    <VoltButton label="Под заказ" rounded size="small" class="!text-complimentary-reg !py-3" />
                  </div>
                </template>
                <template #removePosition>
                  <RemoveProductPosition :id="item.item.id" :type="item.is_combo ? 'combo' : 'product'" :count-in-cart="item.quantity" />
                </template>
                <template #removeGiftPosition="{ giftId, giftQuantity, isCombo }">
                  <RemoveProductPosition :id="giftId" :type="isCombo ? 'combo' : 'product'" :count-in-cart="giftQuantity" with-confirm />
                </template>
              </CartProductCard>
            </div>
          </VScrollPanel>
        </div>
        <div class="flex justify-between gap-4">
          <div class="flex flex-col gap-0.5">
            <p v-if="page.props.auth?.user" class="flex items-center gap-1">
              <span class="text-complimentary-reg text-subsidiary">Доставка:</span>
              <span class="text-subsidiary-medium text-text">{{ calculateData?.delivery_detail.delivery_price }} руб</span>
              <VTooltip value="Стоимость доставки зависит от адреса, веса и стоимости заказа" />
            </p>
            <p class="text-mob-small-medium text-text flex gap-2">
              <span>{{ t('cart.total') }}:</span>
              <span
                >{{ t('cart.goods', page.props.cart?.cartQuantity || 0) }} {{ t('cart.on') }} {{ page.props.cart?.cartPrice || 0 }}
                {{ t('cart.currency_rub') }}</span
              >
            </p>
            <p v-if="!page.props.auth?.user" class="flex items-center gap-1">
              <span class="text-additional text-complimentary-reg">{{ t('cart.cost_without_delivery') }}</span>
              <VTooltip value="Стоимость доставки зависит от адреса, веса и стоимости заказа" />
            </p>
          </div>
          <div class="flex items-center gap-2">
            <VoltButton
              :label="t('cart.checkout')"
              rounded
              size="small"
              :disabled="(page.props.cart?.cartQuantity || 0) === 0"
              class="!text-complimentary-reg !py-3"
              @click="toCreateOrder"
            />
            <button
              class="text-complimentary-reg border-text hover:text-default hover:border-default cursor-pointer rounded-full border px-4 py-3 transition-all duration-300"
              @click="toCart"
            >
              {{ t('cart.go_to_cart') }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="max-w-[593px]">
      <div class="flex items-center gap-4 p-4">
        <VPicture src="/images/test-images/EmptyCart.webp" alt="Пустая корзина" img-classes="w-[190px] h-[140px]" />
        <div>
          <h4 class="text-default-medium">Корзина пока пуста</h4>
          <p class="text-subsidiary-reg mt-2">Выбирайте понравившиеся товары в нашем каталоге и добавляйте их в корзину</p>
          <div class="mt-6">
            <VButton label="В каталог" @click="router.visit(route('catalog.index'))" />
          </div>
        </div>
      </div>
    </div>
  </Popover>
</template>

<style scoped></style>
