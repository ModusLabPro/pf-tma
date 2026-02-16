<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import { ref } from 'vue';

import IconCopy from '@/shared/icons/IconCopy.svg';
import VDialog from '@/shared/ui/volt/Dialog.vue';

const visible = defineModel<boolean>('visible', { default: false });

const referralLink = ref<string>('');
const copied = ref<boolean>(false);

const handleVisibilityChange = (value: boolean): void => {
  visible.value = value;
  if (!value) {
    copied.value = false;
  }
};

const openModal = (): void => {
  router.get(
    '/referral/get-link',
    {},
    {
      preserveScroll: true,
      preserveState: true,
      onSuccess: (page: any) => {
        referralLink.value = page.props.flash?.message || '';
        visible.value = true;
      },
    },
  );
};

const copyToClipboard = async (): Promise<void> => {
  try {
    if (referralLink.value) {
      await navigator.clipboard.writeText(referralLink.value);
      copied.value = true;
    } else {
      console.error('Ошибка сервера: ссылка отсутствует');
    }
  } catch (err) {
    console.error('Ошибка при копировании:', err);
  }
};

defineExpose({
  openModal,
});
</script>

<template>
  <VDialog :visible="visible" :draggable="false" modal class="max-md:w-82 md:w-110" @update:visible="handleVisibilityChange">
    <h2 class="text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0">Приглашайте друзей — получайте бонусы!</h2>
    <p class="text-subsidiary-reg md:text-mob-small-reg mt-3 text-center md:mt-2">
      Поделитесь персональной ссылкой и мы начислим вам <span class="font-bold">500 баллов</span>, как только приглашенный друг совершит первую
      покупку.
      <br />
      А ваш друг получит приветственный бонус!
    </p>
    <div class="mt-3 flex flex-col gap-1 md:mt-6">
      <div class="border-text flex items-center justify-between rounded-full border border-dashed px-6 py-4">
        <span class="text-mob-small-reg flex-1 truncate pr-4">{{ referralLink }}</span>
        <button class="shrink-0 cursor-pointer" @click.stop="copyToClipboard">
          <IconCopy />
        </button>
      </div>
      <p
        class="text-complimentary-reg text-additional text-center transition-opacity duration-200 ease-in"
        :class="copied ? 'opacity-100' : 'opacity-0'"
      >
        Ссылка успешно скопирована!
      </p>
    </div>
  </VDialog>
</template>
