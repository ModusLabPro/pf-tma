<script setup lang="ts">
interface Source {
  srcset: string;
  media?: string;
  type?: string;
}

interface Props {
  sources?: Source[];
  src: string;
  alt: string;
  width?: string;
  height?: string;
  imgClasses?: string;
}

defineProps<Props>();
</script>

<template>
  <picture class="block">
    <source v-for="source in sources" :key="source.srcset" :srcset="source.srcset" :media="source.media" :type="source.type" />

    <img class="object-cover object-center" :class="imgClasses" :src="src" :alt="alt" :style="{ height, width }" loading="lazy" />
  </picture>
</template>
