<script setup lang="ts">
import { computed } from 'vue';

import { ICombination } from '@/entities/combination';

const { combination } = defineProps<{
  combination: ICombination;
}>();

const combinationImageUrl = computed<string>(() => {
  return `url('${combination.image.path}')`;
});
</script>

<template>
  <article class="combination-preview-card rounded-20 flex h-50 items-end p-3 xl:h-65 xl:p-4">
    <h4 class="text-mob-small-bold xl:text-default-bold text-white">
      {{ combination.name }}
    </h4>
  </article>
</template>

<style scoped>
.combination-preview-card {
  background-image: v-bind(combinationImageUrl), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
}
</style>
