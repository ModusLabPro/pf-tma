<script setup lang="ts">
import type { FormSubmitEvent } from '@primevue/forms';
import type { LoginByEmailFormModel } from '../../model/login.model';

import { useForm, usePage } from '@inertiajs/vue3';
import { Form } from '@primevue/forms';
import { useToast } from 'primevue';

import { VButton } from '@/shared/ui/button';
import { VFormItem } from '@/shared/ui/form-item';
import InputText from '@/shared/ui/volt/InputText.vue';
import Password from '@/shared/ui/volt/Password.vue';

import { resolver } from '../../model/login.model';

// const { t } = useI18n();
const page = usePage();
const { add } = useToast();

const emit = defineEmits<{
  (event: 'success'): void;
  (event: 'to-register'): void;
  (event: 'to-reset'): void;
}>();

const form = useForm<Partial<LoginByEmailFormModel>>({
  email: undefined,
  password: undefined,
});

const submit = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    form.post(route('login'), {
      onSuccess: () => {
        form.reset();
        emit('success');
      },
      onError: () => {
        if (page.props.errors.blocked) {
          add({
            detail: page.props.errors.blocked,
            life: 3000,
            severity: 'error',
          });
        }
      },
    });
  }
};
</script>

<template>
  <div class="flex flex-col gap-6">
    <div class="flex flex-col items-start gap-2">
      <Form
        id="login-form"
        v-slot="$form"
        :initial-values="form"
        :resolver
        :validate-on-value-update="false"
        validate-on-blur
        class="w-full"
        @submit="submit"
      >
        <VFormItem class="mb-2" :error="$form.email?.error?.message ?? form.errors.email">
          <InputText
            v-model="form.email"
            type="email"
            placeholder="Введите ваш e-mail"
            name="email"
            :invalid="!!form.errors.email"
            autocomplete="username"
            required
          />
        </VFormItem>
        <VFormItem :error="$form.password?.error?.message ?? form.errors.password">
          <Password
            v-model="form.password"
            fluid
            :feedback="false"
            toggle-mask
            placeholder="Пароль"
            name="password"
            :input-props="{
              autocomplete: 'current-password',
              required: true,
            }"
            :invalid="!!form.errors.password"
          />
        </VFormItem>
      </Form>
      <button class="text-subsidiary text-mob-small-medium cursor-pointer" @click="$emit('to-reset')">Забыли пароль?</button>
    </div>
    <VButton label="Войти в аккаунт" type="submit" form="login-form" class="w-full" :disabled="form.processing" />
  </div>
</template>

<style scoped></style>
