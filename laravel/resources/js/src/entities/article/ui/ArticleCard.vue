<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import { TFile } from '@/shared/file';
import { useScreenSize } from '@/shared/media-queries';
import { VPicture } from '@/shared/ui/picture';

withDefaults(
  defineProps<{
    id: number;
    title: string;
    description: string;
    image: TFile;
    articleCount?: number;
    updatedAt: string;
    isCategory?: boolean;
  }>(),
  {
    articleCount: 0,
    isCategory: false,
  },
);

const { isDesktop, isTablet } = useScreenSize();
</script>

<template>
  <Link :href="isCategory ? route('blog.selection.show', id) : route('blog.article.show', id)">
    <article class="flex h-full cursor-pointer flex-col sm:max-w-[352px]">
      <VPicture
        v-if="image?.path"
        :src="image?.path"
        alt="Изображение статьи"
        width="100%"
        :height="isDesktop || isTablet ? '186px' : '120px'"
        class="overflow-hidden rounded-2xl"
      />
      <VPicture
        v-else
        src="/images/productPlaceholder.png"
        alt="Изображение статьи"
        width="100%"
        :height="isDesktop || isTablet ? '186px' : '120px'"
        img-classes="rounded-2xl"
      />

      <div class="flex flex-1 flex-col gap-2 p-4">
        <div class="text-additional flex items-center justify-between">
          <span v-if="isCategory" class="text-mob-small-reg"
            ><span class="text-small-bold">{{ articleCount }}</span> статей</span
          >
          <span class="text-complimentary-reg">Обновлено: {{ updatedAt }}</span>
        </div>
        <header class="flex flex-col gap-2">
          <slot name="title">
            <h3 class="text-mob-small-bold">{{ title }}</h3>
          </slot>
          <span v-if="description" class="text-complimentary-reg">{{ description }}</span>
        </header>
      </div>
    </article>
  </Link>
</template>

<style scoped></style>
