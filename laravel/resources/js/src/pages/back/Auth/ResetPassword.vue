<script setup lang="ts">
import { Link, useForm } from '@inertiajs/vue3';
import { Form } from '@primevue/forms';
import { z } from 'zod';

import { VButton } from '@/shared/ui/button';
import { VFormItem } from '@/shared/ui/form-item';
import Password from '@/shared/ui/volt/Password.vue';

const props = defineProps<{
  email: string;
  token: string;
}>();

const resetPasswordSchema = z
  .object({
    token: z.string(),
    email: z.string().email('Введите валидный e-mail'),
    password: z.string({ required_error: 'Обязательное поле' }).superRefine((val, ctx) => {
      if (val.length < 8) {
        ctx.addIssue({
          code: z.ZodIssueCode.too_small,
          minimum: 8,
          type: 'string',
          inclusive: true,
          message: 'Минимум 8 символов',
        });
        return;
      }

      const regex = /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)(?=.*[^A-Za-zА-Яа-яЁё0-9]).{8,}$/u;
      if (!regex.test(val)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ',
        });
      }
    }),
    password_confirmation: z.string({ required_error: 'Обязательное поле' }).min(8, 'Минимум 8 символов'),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Указанный пароль не совпадает',
    path: ['password_confirmation'],
  });

type ResetPasswordModel = z.infer<typeof resetPasswordSchema>;

const resetPasswordForm = useForm<ResetPasswordModel>({
  token: props.token,
  email: props.email,
  password: '',
  password_confirmation: '',
});

const validateField = (name: keyof ResetPasswordModel) => {
  const partialData = { ...resetPasswordForm.data() };

  const result = resetPasswordSchema.safeParse(partialData);

  resetPasswordForm.clearErrors(name);

  if (!result.success) {
    for (const issue of result.error.issues) {
      if (issue.path[0] === name) {
        resetPasswordForm.setError({ [name]: issue.message });
      }
    }
  }
};

const onSubmit = async (): Promise<void> => {
  const result = resetPasswordSchema.safeParse(resetPasswordForm.data());

  resetPasswordForm.clearErrors();

  if (!result.success) {
    const fieldErrors: Record<string, string> = {};
    for (const err of result.error.issues) {
      const field = err.path[0];
      fieldErrors[field] = err.message;
    }
    resetPasswordForm.setError(fieldErrors);
    return;
  }

  resetPasswordForm.post(route('password.store'));
};
</script>

<template>
  <div class="my-20 flex flex-col items-center justify-center">
    <div class="border-text flex max-w-110 flex-1 flex-col gap-6 rounded-[30px] border p-8">
      <Form
        id="reset-password-form"
        v-slot="$form"
        :initial-values="resetPasswordForm"
        validate-on-blur
        :validate-on-value-update="false"
        class="flex flex-col gap-6"
        @submit="onSubmit"
      >
        <div class="text-center">
          <h1 class="text-heavy-bold">Восстановление пароля</h1>
          <p class="text-mob-small-reg mt-2">Придумайте новый пароль</p>
        </div>
        <div>
          <VFormItem :error="$form.password?.error?.message ?? resetPasswordForm.errors.password">
            <label for="password" class="text-subsidiary-reg">
              Обратите внимание, он должен состоять из минимум 8 символов. И содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и
              один специальный символ.
            </label>

            <Password
              v-model="resetPasswordForm.password"
              placeholder="Пароль"
              :input-props="{ autocomplete: 'new-password', required: true }"
              name="password"
              :feedback="false"
              toggle-mask
              fluid
              class="mt-2"
              :invalid="!!resetPasswordForm.errors.password || !!$form.password?.error?.message"
              @blur="validateField('password')"
            />
          </VFormItem>
          <VFormItem :error="$form.password_confirmation?.error?.message ?? resetPasswordForm.errors.password_confirmation">
            <Password
              v-model="resetPasswordForm.password_confirmation"
              placeholder="Подтверждение пароля"
              :input-props="{ autocomplete: 'new-password', required: true }"
              name="password_confirmation"
              :feedback="false"
              toggle-mask
              fluid
              class="mt-2"
              :invalid="!!resetPasswordForm.errors.password_confirmation || !!$form.password_confirmation?.error?.message"
              @blur="validateField('password_confirmation')"
            />
          </VFormItem>
        </div>

        <VButton label="Восстановить пароль" type="submit" />

        <Link :href="route('main-page')">
          <VButton label="Вернуться на главную" type="button" variant="outline" class="w-full" />
        </Link>

        <div class="text-mob-small-reg text-additional text-center">
          <p>Ваши данные надёжно защищены.</p>
          <Link href="#" class="underline">Политика безопасности</Link>
        </div>
      </Form>
    </div>
  </div>
</template>
