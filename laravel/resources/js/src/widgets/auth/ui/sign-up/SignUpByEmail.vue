<script setup lang="ts">
import type { FormSubmitEvent } from '@primevue/forms';
import type { RegisterModel } from '../../model/register.model';

import { useForm, usePage } from '@inertiajs/vue3';
import { Form } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from 'primevue';

import { VButton } from '@/shared/ui/button';
import { VFormItem } from '@/shared/ui/form-item';
import Checkbox from '@/shared/ui/volt/Checkbox.vue';
import InputText from '@/shared/ui/volt/InputText.vue';
import Password from '@/shared/ui/volt/Password.vue';

import { registerByEmailSchema } from '../../model/register.model';

const emit = defineEmits<{
  (event: 'toLogin'): void;
  (event: 'success'): void;
}>();

const page = usePage();
const { add } = useToast();

const resolver = zodResolver(registerByEmailSchema);

const form = useForm<RegisterModel>({
  email: '',
  password: '',
  password_confirmation: '',
  referral_code: route().params.ref ?? '',
  agreement: false,
});

const onSubmit = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    form.post(route('register'), {
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
    <Form
      v-slot="$form"
      :resolver
      :initial-values="form"
      validate-on-blur
      :validate-on-value-update="false"
      class="flex flex-col gap-6"
      @submit="onSubmit"
    >
      <div class="flex flex-col gap-2">
        <VFormItem :error="$form.email?.error?.message ?? form.errors.email">
          <InputText
            v-model="form.email"
            placeholder="Введите ваш e-mail"
            type="email"
            required
            autocomplete="username"
            name="email"
            :invalid="!!form.errors.email"
          />
        </VFormItem>
        <VFormItem :error="$form.password?.error?.message ?? form.errors.password">
          <Password
            v-model="form.password"
            placeholder="Пароль"
            :input-props="{ autocomplete: 'new-password', required: true }"
            name="password"
            :feedback="false"
            toggle-mask
            fluid
            :invalid="!!form.errors.password"
          />
        </VFormItem>
        <VFormItem :error="$form.password_confirmation?.error?.message ?? form.errors.password_confirmation">
          <Password
            v-model="form.password_confirmation"
            placeholder="Подтверждение пароля"
            :input-props="{ autocomplete: 'new-password', required: true }"
            name="password_confirmation"
            toggle-mask
            :feedback="false"
            fluid
            :invalid="!!form.errors.password_confirmation"
          />
        </VFormItem>
      </div>
      <VFormItem>
        <div class="flex gap-3">
          <Checkbox v-model="form.agreement" input-id="policy-checkbox" binary size="small" name="agreement" required />
          <label for="policy-checkbox" class="text-complimentary-reg"
            >Нажимая на кнопку «Зарегистрироваться» я подтверждаю, что ознакомился с
            <a href="#" target="_blank" download="политика конфиденциальности.pdf" class="hover:text-additional underline transition-colors"
              >политикой конфиденциальности</a
            >
            и даю соглашение на обработку персональных данных</label
          >
        </div>
      </VFormItem>
      <VButton type="submit" label="Зарегистрироваться" :disabled="form.processing" />
    </Form>
  </div>
</template>

<style scoped></style>
