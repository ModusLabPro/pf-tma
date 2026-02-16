<template>
  <InputText
    :model-value="modelValue"
    type="tel"
    inputmode="numeric"
    autocomplete="tel"
    autocorrect="off"
    autocapitalize="off"
    spellcheck="false"
    maxlength="18"
    class="w-full"
    @input="onInput"
    @paste="onPaste"
    @blur="onBlur"
  />
</template>

<script setup lang="ts">
import InputText from '@/shared/ui/volt/InputText.vue';

import { useRuPhoneMask } from '@/shared/composables/usePhoneMask.js';

const modelValue = defineModel<string>();

const { onInput, onPaste, onBlur } = useRuPhoneMask(modelValue);
</script>
