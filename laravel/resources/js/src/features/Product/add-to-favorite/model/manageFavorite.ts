import { router } from '@inertiajs/vue3';
import { ref } from 'vue';

export function manageFavorite(id: number, isProductFavorite: boolean = false, itemType: 'product' | 'recipe' = 'product') {
  const isFavorite = ref<boolean>(isProductFavorite);
  const addToFavorite = () => {
    router.post(
      route('whitelist.add'),
      {
        item_id: id,
        item_type: itemType,
      },
      {
        preserveScroll: true,
        preserveState: true,
        only: ['favorite'],
        onSuccess: () => {
          isFavorite.value = true;
        },
      },
    );
  };

  const removeFromFavorite = () => {
    router.delete(route('whitelist.remove'), {
      data: {
        item_id: id,
        item_type: itemType,
      },
      preserveScroll: true,
      preserveState: true,
      only: ['favorite'],
      onSuccess: () => {
        isFavorite.value = false;
      },
    });
  };

  return {
    isFavorite,
    addToFavorite,
    removeFromFavorite,
  };
}
