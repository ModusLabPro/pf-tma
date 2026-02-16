<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import { useConfirm } from 'primevue/useconfirm';
import { shallowRef } from 'vue';

import IconCheckCircleGreen from '@/shared/icons/IconCheckCircleGreen.svg';

const { service } = defineProps<{
  service: 'yandex' | 'vk';
}>();

const isHovered = shallowRef<boolean>(false);

const confirm = useConfirm();

const detachService = () => {
  switch (service) {
    case 'vk': {
      router.delete(route('profile.vk.detach'), {
        onSuccess: () => {
          router.reload();
        },
      });
      break;
    }
    case 'yandex': {
      router.delete(route('profile.yandex.detach'), {
        onSuccess: () => {
          router.reload();
        },
      });
      break;
    }
  }
};

const onDetach = (): void => {
  console.log('onDetach');
  confirm.require({
    message: 'Обратите внимание, быстрый вход\n' + 'через нее будет не доступен',
    header: 'Вы уверены, что хотите отвязать социальную сеть?',
    rejectProps: {
      label: 'Отменить',
    },
    acceptProps: {
      label: 'Да, отвязать',
    },
    accept: detachService,
  });
};
</script>

<template>
  <button
    class="text-mob-small-reg relative flex items-center justify-end gap-2 overflow-hidden"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @click.prevent="onDetach"
  >
    <Transition
      enter-from-class="-translate-y-full absolute left-0"
      enter-to-class="-translate-y-0"
      enter-active-class="transition-transform duration-400 ease-in"
      leave-active-class="transition-transform duration-400 ease-in"
      leave-to-class="translate-y-full absolute left-0"
      leave-from-class="translate-y-0"
    >
      <span v-if="isHovered">Отключить</span>
      <span v-else class="text-ready-green">Подключено</span>
    </Transition>
    <IconCheckCircleGreen class="h-5 w-5" />
  </button>
</template>

<style scoped></style>
