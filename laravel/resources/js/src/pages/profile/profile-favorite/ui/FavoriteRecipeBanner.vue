<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

import { TBanner } from '@/shared/banner';
import { VButton } from '@/shared/ui/button';

defineProps<TBanner>();
</script>

<template>
  <div class="bg-text rounded-20 flex h-full flex-col justify-between p-2 text-white md:p-4">
    <div class="flex flex-col gap-2">
      <h3 class="font-vast text-vast-mob-title-bold">{{ title }}</h3>
      <p class="text-subsidiary-reg md:text-mob-small-reg">{{ description }}</p>
    </div>
    <Link :href="link_url">
      <VButton variant="light" :label="button_text" class="line-clamp-1 w-fit" />
    </Link>
  </div>
</template>

<style scoped></style>
