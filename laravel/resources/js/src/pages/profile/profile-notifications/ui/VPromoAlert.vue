<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import { TPromoAlert } from '@/entities/alerts';
import { IProduct } from '@/entities/products';
import { IPromo } from '@/entities/promo';
import { useScreenSize } from '@/shared/media-queries';
import { VPicture } from '@/shared/ui/picture';
import VoltButton from '@/shared/ui/volt/Button.vue';

defineProps<TPromoAlert>();

const { isMobile } = useScreenSize();
</script>

<template>
  <article class="border-b-default items-center gap-4 border-b py-2 transition-colors duration-200 ease-in sm:flex">
    <div v-if="isMobile" class="mb-2 flex items-center justify-between">
      <div
        class="w-full max-w-[94px] rounded-lg py-1 text-center"
        :class="{
          'bg-default': type === 'Новинка',
          'bg-delete': type === 'Акция',
        }"
      >
        <p class="text-complimentary-reg text-white">
          {{ type }}
        </p>
      </div>
      <div class="flex w-full items-center justify-end gap-4">
        <div class="text-complimentary-reg text-additional flex items-center gap-1">
          <div v-if="!is_read" class="bg-default h-2 w-2 rounded-full" />
          <span>{{ created_at }}</span>
        </div>
        <slot name="deleteButton" />
      </div>
    </div>

    <div class="flex w-full items-start xl:items-center">
      <div class="flex shrink-0 flex-col items-stretch gap-1">
        <div
          v-if="!isMobile"
          class="rounded-lg py-1 text-center"
          :class="{
            'bg-default': type === 'Новинка',
            'bg-delete': type === 'Акция',
          }"
        >
          <p class="text-complimentary-reg text-white">
            {{ type }}
          </p>
        </div>
        <template v-if="type === 'Акция'">
          <VPicture
            v-if="!!(item as IPromo).image?.path"
            :src="(item as IPromo).image?.path"
            :alt="(item as IPromo)?.name"
            width="94px"
            :height="isMobile ? '100px' : '64px'"
            img-classes="rounded-lg"
          />
          <VPicture
            v-else
            src="/images/productPlaceholder.png"
            alt="Изображение товара"
            width="94px"
            :height="isMobile ? '100px' : '64px'"
            img-classes="rounded-lg"
          />
        </template>
        <template v-if="type === 'Новинка'">
          <VPicture
            v-if="!!(item as IProduct).images[0]?.path"
            :src="(item as IProduct).images[0]?.path"
            :alt="(item as IProduct).name"
            width="94px"
            height="64px"
            img-classes="rounded-lg"
          />
          <VPicture v-else src="/images/productPlaceholder.png" alt="Изображение товара" width="94px" height="64px" img-classes="rounded-lg" />
        </template>
      </div>
      <div class="ml-4">
        <div v-if="type === 'Новинка'" class="grid items-center gap-4 xl:grid-cols-[440px_auto]">
          <div class="flex w-full flex-col justify-between">
            <div class="flex flex-col gap-1">
              <h3 class="text-mob-small-bold">{{ (item as IProduct).name }}</h3>
              <dl class="flex flex-col gap-1 md:flex-row md:items-center md:gap-8">
                <div class="flex items-center gap-1">
                  <dd class="text-complimentary-reg text-subsidiary">Средний вес</dd>
                  <dt class="text-subsidiary-medium">
                    {{ (item as IProduct).weight }}
                    {{ (item as IProduct).weight_type }}
                  </dt>
                </div>
                <div class="flex items-center gap-1">
                  <dd class="text-complimentary-reg text-subsidiary">Бренд</dd>
                  <dt class="text-subsidiary-medium">{{ (item as IProduct).brands[0]?.name }}</dt>
                </div>
              </dl>
            </div>
            <p class="text-mob-small-bold mt-3">{{ (item as IProduct).price }} {{ (item as IProduct).price_type }}</p>
          </div>

          <Link v-if="!isMobile" :href="button_link">
            <VoltButton label="Подробнее" variant="outlined" class="shrink-0" rounded size="small" />
          </Link>
        </div>
      </div>
      <div v-if="type === 'Акция'" class="grid items-center gap-4 xl:grid-cols-[440px_auto]">
        <div class="flex w-full flex-col justify-between">
          <div class="flex flex-col gap-1">
            <h3 class="text-mob-small-bold truncate lg:max-w-[420px]">{{ (item as IPromo).name }}</h3>
            <p class="text-complimentary-reg max-w-[440px]">{{ (item as IPromo).short_description }}</p>
          </div>
          <div class="text-complimentary-reg mt-3 flex flex-wrap items-center gap-2 md:gap-4">
            <span class="bg-full rounded-full px-2 py-1 text-nowrap">{{ (item as IPromo).type }}</span>
            <span class="bg-delete rounded-full px-2 py-1 text-nowrap text-white">-{{ (item as IPromo).sale_percent }}%</span>
            <div class="flex items-center gap-1 text-nowrap">
              <span class="text-subsidiary">Срок действия акции</span> <span class="text-subsidiary-medium">до {{ (item as IPromo).end_date }}</span>
            </div>
          </div>
        </div>
        <Link v-if="!isMobile" :href="button_link">
          <VoltButton label="Подробнее" variant="outlined" class="w-full shrink-0" rounded size="small" />
        </Link>
      </div>
    </div>
    <div v-if="!isMobile" class="flex w-full items-center justify-end gap-4">
      <div class="text-subsidiary-reg text-additional flex items-center gap-1">
        <div v-if="!is_read" class="bg-default h-2 w-2 rounded-full" />
        <span>{{ created_at }}</span>
      </div>
      <slot v-if="!isMobile" name="deleteButton" />
    </div>
    <Link v-if="isMobile" :href="button_link" class="w-full">
      <VoltButton label="Подробнее" variant="outlined" class="mt-2 w-full shrink-0" rounded size="small" />
    </Link>
  </article>
</template>

<style scoped></style>
