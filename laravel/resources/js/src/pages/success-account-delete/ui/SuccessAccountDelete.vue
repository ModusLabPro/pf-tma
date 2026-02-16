<script setup lang="ts">
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VContainer } from '@/shared/ui/container';
import { VPicture } from '@/shared/ui/picture';

const { isMobile } = useScreenSize();
</script>

<template>
  <VContainer class="flex w-full items-center justify-center">
    <div
      class="bg-light-gray mx-6 my-30 flex w-full flex-col-reverse rounded-[40px] pt-18 pb-4 max-lg:items-center max-lg:p-4 lg:mx-40 lg:flex-row lg:justify-around lg:pl-20 xl:pl-40"
    >
      <div>
        <h2 class="text-default-medium lg:text-heavy-medium max-lg:text-center">Готово, ваш аккаунт успешно удален</h2>
        <p class="text-subsidiary-reg md:text-mob-small-reg mt-2 max-lg:text-center">
          Если у вас возникли вопросы или проблемы с доступом на сайт, <br v-if="!isMobile" />
          напишите нам
        </p>
        <VButton label="Написать в поддержку" class="mt-8 max-lg:mx-auto" />
      </div>
      <VPicture src="/images/test-images/account-delete.png" alt="" :width="isMobile ? '160px' : '330px'" class="-mt-10 lg:-mt-24" />
    </div>
  </VContainer>
</template>

<style scoped></style>
