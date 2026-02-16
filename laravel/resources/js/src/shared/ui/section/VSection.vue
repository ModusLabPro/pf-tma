<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <section class="rounded-20 p-6 sm:p-8">
    <slot name="header">
      <header v-if="title || $slots.title || $slots.headerAction" class="mb-8 flex items-center justify-between gap-3">
        <slot name="title">
          <h2 v-if="title" class="text-default-bold sm:text-heavy-bold">
            {{ title }}
          </h2>
        </slot>
        <div v-if="$slots.headerAction">
          <slot name="headerAction" />
        </div>
      </header>
    </slot>
    <slot name="content">
      <div>
        <slot />
      </div>
    </slot>
  </section>
</template>
