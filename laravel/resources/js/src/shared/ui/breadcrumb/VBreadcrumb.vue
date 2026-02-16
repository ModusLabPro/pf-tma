<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { MenuItem } from 'primevue/menuitem';

import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';

const { model, only = undefined } = defineProps<{
  model: MenuItem[];
  only?: string[];
}>();

const emit = defineEmits<{
  (event: 'click', value: Event): void;
}>();
</script>

<template>
  <Breadcrumb :model>
    <template #item="{ item }">
      <Link
        class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200"
        :href="item.route"
        :only
        @click="emit('click', $event)"
      >
        {{ item.label }}
      </Link>
    </template>
  </Breadcrumb>
</template>

<style scoped></style>
