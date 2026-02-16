<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import { TFile } from '@/shared/file';
import { useScreenSize } from '@/shared/media-queries';
import { VPicture } from '@/shared/ui/picture';

defineProps<{
  id: number;
  title: string;
  description: string;
  image: TFile;
  updatedAt: string;
}>();

const { isMobile } = useScreenSize();
</script>

<template>
  <Link :href="route('blog.article.show', id)" class="border-stroke rounded-20 flex h-full max-w-[352px] cursor-pointer flex-col border">
    <div class="relative">
      <div class="absolute top-2 right-2 flex items-center gap-2">
        <slot name="actions" />
      </div>
      <VPicture v-if="image?.path" :src="image?.path" :alt="title" width="100%" height="200px" img-classes="rounded-20" />
      <VPicture
        v-else
        src="/images/productPlaceholder.png"
        :alt="title"
        width="100%"
        :height="isMobile ? '120px' : '200px'"
        img-classes="rounded-20"
      />
    </div>

    <div class="flex flex-auto flex-col p-2 sm:p-4 sm:pt-3">
      <div class="flex flex-1 flex-col">
        <h4 class="text-mob-small-bold">{{ title }}</h4>
        <p class="text-complimentary-reg mt-2 line-clamp-2">{{ description }}</p>
      </div>
    </div>
  </Link>
</template>

<style scoped></style>
