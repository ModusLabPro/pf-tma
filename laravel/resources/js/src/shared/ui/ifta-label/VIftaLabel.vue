<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <span class="relative block w-fit [&_.p-inputtext]:pt-[23px] [&_.p-inputtext]:pb-[7px]">
    <label
      class="text-additional pointer-events-none absolute start-4 top-2 z-1 text-xs leading-none font-medium transition-all duration-200 ease-out"
    >
      {{ label }}
    </label>
    <slot />
  </span>
</template>

<style scoped></style>
