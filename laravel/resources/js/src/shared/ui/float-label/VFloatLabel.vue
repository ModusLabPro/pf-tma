<script setup lang="ts">
import FloatLabel, { FloatLabelProps } from 'primevue/floatlabel';
import { useId } from 'vue';

interface IFloatLabelProps extends FloatLabelProps {
  label: string;
  required?: boolean;
}

const { variant = 'in', label, ...props } = defineProps<IFloatLabelProps>();

const inputId = useId();
</script>

<template>
  <FloatLabel v-bind="props" :variant class="v-float-label">
    <slot :label-id="inputId" />
    <label :for="inputId">
      {{ label }}
      <span v-if="props.required" class="text-marker">*</span>
    </label>
  </FloatLabel>
</template>

<style scoped>
.v-float-label {
  display: block;
  height: fit-content;
  --p-floatlabel-font-weight: 400;
  --p-floatlabel-color: var(--color-additional);
  --p-floatlabel-transition-duration: 0.2s;
  --p-floatlabel-position-x: 15px;
  --p-floatlabel-in-input-padding-top: 23px;
  --p-floatlabel-in-input-padding-bottom: 7px;
  --p-floatlabel-in-active-top: 13px;
  --p-floatlabel-active-font-size: 12px;
  --p-floatlabel-focus-color: var(--color-additional);
  --p-floatlabel-active-color: var(--color-additional);
}
</style>
