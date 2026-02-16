<script setup lang="ts">
defineProps<{
  error?: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-1">
    <slot />
    <span v-if="error" class="text-complimentary-reg text-marker">{{ error }}</span>
  </div>
</template>

<style scoped></style>
