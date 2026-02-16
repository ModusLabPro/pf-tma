<script setup lang="ts">
import { router, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { route } from 'ziggy-js';

import { ICart } from '@/entities/cart/model/cart';
import IconMinus from '@/shared/icons/IconMinus.svg';
import IconPlus from '@/shared/icons/IconPlus.svg';
import { VButton } from '@/shared/ui/button';
import { default as VoltButton } from '@/shared/ui/volt/Button.vue';

import { getCartItemQuantity, manageCart } from '../model';

const props = withDefaults(
  defineProps<{
    id?: number;
    type?: 'product' | 'combo';
    countInCart?: number;
    canQuickBuy?: boolean;
    buttonType?: 'short' | 'full';
    isCombo?: boolean;
    quantity?: 'Много' | 'Мало' | 'Под заказ';
    retry?: boolean;
    nowrap?: boolean;
  }>(),
  {
    id: 0,
    countInCart: 0,
    canQuickBuy: true,
    type: 'product',
    buttonType: 'short',
    quantity: 'Много',
    retry: false,
    nowrap: false,
  },
);

const emit = defineEmits<{
  (event: 'add'): void;
  (event: 'remove'): void;
}>();

const page = usePage<{ cart: ICart }>();

const count = computed(() => getCartItemQuantity(page.props.cart, props.id, props.type));

const { addProductToCart, removeProductFromCart } = manageCart(props.id, props.countInCart, props.type);
const { t } = useI18n();

const createOrder = () => {
  if (props.isCombo) {
    router.visit(
      route('order.create', {
        _query: {
          combo_id: props.id,
        },
      }),
    );
  } else {
    router.visit(
      route('order.create', {
        _query: {
          product_id: props.id,
        },
      }),
    );
  }
};

const onAddProduct = () => {
  addProductToCart();
  emit('add');
};

const onRemoveProduct = () => {
  removeProductFromCart();
  emit('remove');
};
</script>

<template>
  <div
    class="flex items-stretch gap-1"
    :class="{
      'flex-col': !nowrap || buttonType === 'full',
      'md:flex-row': buttonType !== 'full',
    }"
  >
    <template v-if="quantity !== 'Под заказ' && !retry">
      <template v-if="count === 0">
        <VoltButton
          v-if="buttonType === 'short'"
          class="!text-complimentary-reg nowrap w-full"
          :label="t('product_card.in_cart')"
          size="small"
          rounded
          @click.stop="onAddProduct"
        />
        <VButton v-else :label="t('product_card.in_cart')" @click.stop="onAddProduct" />
      </template>
      <div v-else class="bg-filling text-subsidiary-medium flex w-full items-center justify-between gap-1 rounded-xl px-2 py-2">
        <button class="cursor-pointer" @click.stop="onRemoveProduct">
          <IconMinus class="hover:text-default h-5 w-5 transition-colors duration-250" />
        </button>
        <div class="w-[24px]" :class="buttonType === 'full' ? 'flex w-[70px] flex-col items-center py-1' : 'text-center'">
          <span>{{ count }}</span>
          <p v-if="buttonType === 'full'" class="text-complimentary-reg text-additional nowrap">В корзине</p>
        </div>
        <button class="cursor-pointer" @click.stop="onAddProduct">
          <IconPlus class="hover:text-default h-5 w-5 transition-colors duration-250" />
        </button>
      </div>
      <template v-if="canQuickBuy">
        <VoltButton
          v-if="buttonType === 'short'"
          class="!text-complimentary-reg w-full !px-4 !py-1 text-nowrap"
          :label="t('product_card.buy_now')"
          size="small"
          variant="outlined"
          rounded
          @click.stop="createOrder"
        />
        <VButton v-else :label="t('product_card.buy_now')" variant="outline" @click.stop="createOrder" />
      </template>
    </template>
    <template v-else-if="retry">
      <VoltButton size="small" variant="outlined" rounded label="Повторить покупку" @click="createOrder" />
    </template>
    <template v-else>
      <VButton v-if="buttonType === 'full'" label="Ожидается" disabled />
      <VoltButton v-else class="!text-complimentary-reg nowrap w-full" label="Ожидается" disabled size="small" rounded />
    </template>
  </div>
</template>

<style scoped></style>
