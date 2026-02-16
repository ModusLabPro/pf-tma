<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VContainer } from '@/shared/ui/container';
import { VPicture } from '@/shared/ui/picture';

const { isMobile } = useScreenSize();
</script>

<template>
  <VContainer class="px-6 sm:px-8">
    <div class="my-15 flex h-full w-full items-center justify-center">
      <div class="bg-light-gray mt-16 rounded-[40px]">
        <div class="flex flex-col-reverse items-center gap-8 px-4 py-4 md:flex-row md:gap-15 lg:px-36">
          <div class="max-md:text-center lg:max-w-[509px]">
            <h1 class="lg:font-vast text-default-medium lg:text-vast-title-additional">Ошибка 404</h1>
            <p class="text-subsidiary-reg md:text-mob-small-reg mt-2 max-md:text-center">
              Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке
            </p>
            <Link :href="route('main-page')">
              <VButton label="Перейти на главную" class="mt-8 max-md:mx-auto" />
            </Link>
          </div>
          <VPicture v-if="!isMobile" src="/images/404-img.png" alt="404" class="-mt-10" />
          <VPicture v-else src="/images/404-mob.png" alt="404" class="-mt-20" width="100px" height="100px" />
        </div>
      </div>
    </div>
  </VContainer>
</template>

<style scoped></style>
