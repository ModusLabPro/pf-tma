<script setup lang="ts">
import { computed } from 'vue';

import IconArrowUpRight from '@/shared/icons/IconArrowUpRight.svg';

const props = defineProps<{
  type?: HTMLButtonElement['type'];
  label?: string;
  disabled?: boolean;
  variant?: 'dark' | 'light' | 'outline' | 'delete';
  form?: string;
}>();

const buttonClasses = computed<string | string[]>(() => {
  switch (props.variant) {
    case 'dark': {
      return 'v-button_dark';
    }
    case 'light': {
      return 'v-button_light';
    }
    case 'outline': {
      return 'v-button_outline';
    }
    case 'delete': {
      return 'v-button_delete';
    }
    default: {
      return 'v-button_dark';
    }
  }
});
</script>

<template>
  <button :type="type" :disabled="disabled" class="v-button" :class="buttonClasses" :form="form">
    <span v-if="label" class="v-button__label">{{ label }}</span>
    <span class="v-button__arrow">
      <IconArrowUpRight />
    </span>
  </button>
</template>

<style scoped>
.v-button {
  border: 1px solid;
  padding: 3px 3px 3px 24px;
  border-radius: 50px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  font-size: var(--text-mob-small-reg);
  line-height: var(--text-mob-small-reg--line-height);
  font-weight: var(--text-mob-small-reg--font-weight);
  cursor: pointer;
  transition: all 0.3s ease-in;

  .v-button__arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 100%;
    background-color: white;
    color: var(--color-text);
    transition: all 0.3s ease-in;
  }

  &.v-button_dark {
    background-color: var(--color-text);
    border-color: var(--color-text);

    &:not(:disabled):hover {
      background-color: var(--color-default);
      border-color: var(--color-default);
      .v-button__arrow {
        color: var(--color-default);
        transform: rotate(90deg);
      }
    }

    .v-button__label {
      color: white;
    }
  }

  &.v-button_light {
    background-color: white;
    border-color: white;
    transition: all 0.3s ease-in-out;

    &:not(:disabled):hover {
      .v-button__label {
        color: var(--color-default);
      }

      .v-button__arrow {
        background-color: var(--color-default);
        transform: rotate(90deg);
      }
    }

    .v-button__label {
      color: var(--color-text);
    }

    .v-button__arrow {
      background-color: var(--color-text);
      color: white;
      transition: all 0.3s ease-in-out;
    }
  }

  &.v-button_outline {
    background-color: transparent;
    border-color: var(--color-text);
    transition: all 0.3s ease-in-out;

    &:hover {
      border-color: var(--color-default);

      .v-button__label {
        color: var(--color-default);
      }

      .v-button__arrow {
        background-color: var(--color-default);
        transform: rotate(90deg);
      }
    }

    .v-button__label {
      color: var(--color-text);
      transition: color 0.3s ease-in-out;
    }

    .v-button__arrow {
      background-color: var(--color-text);
      color: white;
      transition: all 0.3s ease-in-out;
    }
  }

  &.v-button_delete {
    background-color: var(--color-delete);
    border: white;
    transition: all 0.3s ease-in-out;

    .v-button__label {
      color: white;
    }

    .v-button__arrow {
      background-color: white;
      color: var(--color-delete);
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      background-color: var(--color-marker);
      .v-button__arrow {
        color: var(--color-marker);
        transform: rotate(90deg);
      }
    }
  }
}

.v-button:disabled {
  background-color: #cdd4d8;
  border-color: #cdd4d8;
  cursor: not-allowed;

  .v-button__label {
    color: var(--color-additional);
  }

  .v-button__arrow {
    background-color: white;
    color: var(--color-additional);
  }
}
</style>
