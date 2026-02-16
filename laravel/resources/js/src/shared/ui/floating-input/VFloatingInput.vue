<script setup lang="ts">
import { computed, ref } from 'vue';

import IconXCircle from '@/shared/icons/IconXCircle.svg';
import { Nullable } from '@/shared/lib/utility-types/Nullable';
import { VFormItem } from '@/shared/ui/form-item';
import InputText from '@/shared/ui/volt/InputText.vue';

const props = defineProps<{
  modelValue?: Nullable<string>;
  name: string;
  label: string;
  type?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  clearable?: boolean;
  readonly?: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | null | undefined): void;
  (e: 'blur', event: FocusEvent): void;
}>();
const isFocused = ref<boolean>(false);

const inputClass = computed<string>(() => (props.error ? 'bg-[#ED1C241A] !border-[#ED1C241A]' : ''));

function onInput(value: string | number | null | undefined): void {
  emit('update:modelValue', value);
}

function clearInput(): void {
  if (props.disabled) return;
  emit('update:modelValue', '');
}

function handleBlur(event: FocusEvent) {
  isFocused.value = false;
  emit('blur', event);
}

function handleFocus(): void {
  isFocused.value = true;
}
</script>

<template>
  <VFormItem class="relative w-full [&_.p-inputtext]:pt-[23px] [&_.p-inputtext]:pb-[7px]" :error="error">
    <div class="relative">
      <slot v-if="$slots.default" name="default" />

      <template v-else>
        <slot
          name="input"
          :model-value="modelValue"
          :update-value="onInput"
          :on-blur="handleBlur"
          :on-focus="handleFocus"
          :class="[inputClass, 'w-full']"
          :type="type ?? 'text'"
          :required="required"
          :invalid="!!error"
        />

        <InputText
          v-if="!$slots.input"
          :type="type ?? 'text'"
          :name="name"
          :invalid="!!error"
          :readonly
          :disabled
          class="transition-all duration-200 ease-in"
          :class="[inputClass, 'w-full']"
          :model-value="props.modelValue"
          :required="required"
          @update:model-value="onInput"
          @focus="handleFocus"
          @blur="handleBlur"
        />
      </template>

      <span
        v-if="clearable && props.modelValue && !props.disabled"
        type="button"
        class="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"
        @click="clearInput"
      >
        <IconXCircle />
      </span>
    </div>

    <label
      :for="name"
      class="text-additional dark:text-surface-400 pointer-events-none absolute top-[14px] left-[15px] transition-all duration-200"
      :class="{
        'text-complimentary-reg !top-[9px] left-[12px]': isFocused || !!props.modelValue,
      }"
    >
      {{ label }}
      <span v-if="required" class="text-marker">*</span>
    </label>
  </VFormItem>
</template>
