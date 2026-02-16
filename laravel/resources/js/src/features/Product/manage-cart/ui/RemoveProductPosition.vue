<script setup lang="ts">
import { useConfirm } from 'primevue/useconfirm';

import IconPlus from '@/shared/icons/IconPlus.svg';

import { manageCart } from '../model';

const props = withDefaults(
  defineProps<{
    id?: number;
    type?: 'product' | 'combo';
    countInCart?: number;
    withConfirm?: boolean;
  }>(),
  {
    id: 0,
    countInCart: 0,
    type: 'product',
    withConfirm: false,
  },
);

const emit = defineEmits<{
  (event: 'remove'): void;
}>();

const { removeProductPositionFromCart } = manageCart(props.id, props.countInCart, props.type);
const confirm = useConfirm();
const onRemovePosition = (): void => {
  if (!props.withConfirm) {
    removeProductPositionFromCart();
    emit('remove');
    return;
  }
  confirm.require({
    message: 'Обратите внимание, подарок нельзя будет вернуть обратно после удаления',
    header: 'Точно хотите удалить? \n' + 'Это бесплатный подарок!',
    rejectProps: {
      label: 'Отмена',
    },
    acceptProps: {
      label: 'Удалить',
    },
    accept: () => {
      removeProductPositionFromCart();
      emit('remove');
    },
  });
};
</script>

<template>
  <button class="inline-flex" @click="onRemovePosition">
    <IconPlus class="text-subsidiary hover:text-default h-4 w-4 rotate-45 cursor-pointer transition-all duration-300" />
  </button>
</template>

<style scoped></style>
