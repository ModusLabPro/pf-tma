import { router } from '@inertiajs/vue3';
import { ref } from 'vue';

import { ICart } from '@/entities/cart/model/cart';

export function manageCart(id: number, initialValue: number = 0, type: 'product' | 'combo') {
  const count = ref(initialValue);
  const addProductToCart = () => {
    router.post(
      route('cart.add'),
      { id, type },
      {
        preserveScroll: true,
        preserveState: true,
        only: ['cart'],
        onSuccess: () => {
          count.value++;
        },
      },
    );
  };

  const removeProductPositionFromCart = () => {
    router.delete(route('cart.remove'), {
      data: { item_id: id, quantity: count.value, item_type: type },
      preserveScroll: true,
      preserveState: true,
      only: ['cart'],
      onSuccess: () => {
        count.value = 0;
      },
    });
  };

  const removeProductFromCart = () => {
    router.delete(route('cart.remove'), {
      data: { item_id: id, item_type: type },
      preserveScroll: true,
      preserveState: true,
      only: ['cart'],
      onSuccess: () => {
        count.value--;
      },
    });
  };

  return {
    count,
    addProductToCart,
    removeProductFromCart,
    removeProductPositionFromCart,
  };
}

export const clearCart = () => {
  router.delete(route('cart.clear'), {
    preserveScroll: true,
    preserveState: true,
    only: ['cart'],
  });
};

export function getCartItemQuantity(cart: ICart, id: number, type: 'product' | 'combo'): number {
  const items = cart.items.filter((item) => item.item.id === id);

  const matchedItem = items.find((item) => {
    const isCombo = item.is_combo;
    return (type === 'combo' && isCombo) || (type === 'product' && !isCombo);
  });

  return matchedItem?.quantity || 0;
}
