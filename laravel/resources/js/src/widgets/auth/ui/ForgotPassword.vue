<script setup lang="ts">
import type { FormSubmitEvent } from '@primevue/forms';
import type { ForgotModel } from '../model/forgot.model';

import { useForm } from '@inertiajs/vue3';
import { Form } from '@primevue/forms';
import { inject, ref, Ref } from 'vue';

import { VButton } from '@/shared/ui/button';
import { VFormItem } from '@/shared/ui/form-item';
import InputText from '@/shared/ui/volt/InputText.vue';

import { forgotModelResolver } from '../model/forgot.model';

const emit = defineEmits<{
  (event: 'to-login'): void;
}>();

const backBtnInjection = inject<{
  backBtn: Ref<{
    isVisible: boolean;
    action: () => void;
  }>;
  setBackBtn: (visibility: boolean, action?: () => void) => void;
}>('backBtn');

const forgotForm = useForm<ForgotModel>({
  email: '',
});

const step = ref<1 | 2>(1);

const submit = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    forgotForm.post(route('password.email'), {
      onSuccess() {
        step.value = 2;
        backBtnInjection!.setBackBtn(true, () => {
          step.value = 1;
          backBtnInjection!.setBackBtn(true, () => {
            backBtnInjection!.setBackBtn(false);
            emit('to-login');
          });
        });
      },
    });
  }
};
</script>

<template>
  <div class="flex flex-col gap-6">
    <header class="flex flex-col items-center gap-2">
      <h3 class="text-heavy-bold">Восстановление пароля</h3>
      <p class="text-mob-small-reg text-center">
        {{
          step === 1
            ? 'Введите почту, которая указана в личном кабинете. Убедитесь в правильности введенных данных.'
            : 'На указанную почту было отправлена ссылка для воcстановления пароля'
        }}
      </p>
    </header>
    <Form v-if="step === 1" v-slot="$form" :resolver="forgotModelResolver" :validate-on-value-update="true" validate-on-blur @submit="submit">
      <VFormItem :error="$form.email?.error?.message ?? forgotForm.errors.email">
        <InputText
          v-model="forgotForm.email"
          type="email"
          placeholder="Введите ваш e-mail"
          name="email"
          :invalid="!!forgotForm.errors.email"
          autocomplete="username"
          required
          @input="forgotForm.clearErrors('email')"
        />
      </VFormItem>
      <VButton type="submit" label="Восстановить пароль" class="mt-6 w-full" :disabled="forgotForm.processing" />
    </Form>
  </div>
</template>

<style scoped></style>
