<script setup lang="ts">
import type { CheckCodeModel } from '../../model/login.model';
import type { GetRegisterCodeModel } from '../../model/register.model';

import { useForm, usePage } from '@inertiajs/vue3';
import { Form, FormSubmitEvent } from '@primevue/forms';
import { useCountdown } from '@vueuse/core';
import { useToast } from 'primevue';
import { computed, inject, Ref, ref } from 'vue';

import { VButton } from '@/shared/ui/button';
import { VFormItem } from '@/shared/ui/form-item';
import { VInputOtp } from '@/shared/ui/input-otp';
import Checkbox from '@/shared/ui/volt/Checkbox.vue';
import InputMask from '@/shared/ui/volt/InputMask.vue';
import SecondaryButton from '@/shared/ui/volt/SecondaryButton.vue';
import { checkCodeResolver } from '@/widgets/auth/model/login.model';

import { getRegisterCodeResolver } from '../../model/register.model';
import InputPhone from '@/shared/ui/input-phone/InputPhone.vue';

const emit = defineEmits<{
  (event: 'success'): void;
  (event: 'checkingCode'): void;
}>();

const page = usePage();
const { add } = useToast();

const backBtnInjection = inject<{
  backBtn: Ref<{
    isVisible: boolean;
    action: () => void;
  }>;
  setBackBtn: (visibility: boolean, action?: () => void) => void;
}>('backBtn');

const step = ref<1 | 2>(1);
const { start, remaining, isActive } = useCountdown(60);

const getCodeForm = useForm<Partial<GetRegisterCodeModel>>({
  rule: 'dont_exist',
  phone: undefined,
  agreement: false,
  target: 'register',
});

const checkCodeForm = useForm<CheckCodeModel>({
  phone: '',
  code: '',
  target: 'register',
  referral_code: route().params.ref ?? '',
});

const toStepOne = () => {
  step.value = 1;
  backBtnInjection!.setBackBtn(false);
};

const getCodeFormSubmit = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    getCodeForm.post(route('code.send'), {
      onSuccess(data) {
        add({
          severity: 'success',
          detail: data.props.flash.success,
        });
        step.value = 2;
        backBtnInjection!.setBackBtn(true, toStepOne);
        checkCodeForm.phone = getCodeForm.phone!;
        emit('checkingCode');
        start();
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

const checkCodeSubmit = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    checkCodeForm.post(route('code.confirm'), {
      onSuccess() {
        emit('success');
        step.value = 1;
        checkCodeForm.reset();
        getCodeForm.reset();
      },
    });
  }
};

const refreshCode = () => {
  getCodeForm.post(route('code.send'), {
    onSuccess(data) {
      start();
      add({
        severity: 'success',
        detail: data.props.flash.success,
      });
    },
  });
};

const timer = computed<string>(() => {
  if (isActive.value) {
    const minutes = Math.floor(remaining.value / 60);
    const seconds = remaining.value % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return '';
});
</script>

<template>
  <Form
    v-if="step === 1"
    v-slot="$form"
    :initial-values="getCodeForm"
    :resolver="getRegisterCodeResolver"
    :validate-on-value-update="false"
    validate-on-blur
    class="flex flex-col gap-6"
    @submit="getCodeFormSubmit"
  >
    <VFormItem :error="$form.phone?.error?.message || getCodeForm.errors.phone">
      <InputPhone
        v-model="getCodeForm.phone"
        mask="+7 (999) 999-99-99"
        name="phone"
        unmask
        placeholder="+7 (000) 000-00-00"
        fluid
        :form-control="{ validateOnValueUpdate: false, validateOnBlur: true }"
        autocomplete="phone"
      />
    </VFormItem>
    <VFormItem>
      <div class="flex gap-3">
        <Checkbox v-model="getCodeForm.agreement" input-id="policy-checkbox" binary size="small" name="agreement" required />
        <label for="policy-checkbox" class="text-complimentary-reg"
          >Нажимая на кнопку «Продолжить» я подтверждаю, что ознакомился с
          <a href="#" target="_blank" download="политика конфиденциальности.pdf" class="hover:text-additional underline transition-colors"
            >политикой конфиденциальности</a
          >
          и даю соглашение на обработку персональных данных</label
        >
      </div>
    </VFormItem>
    <VButton type="submit" label="Продолжить" :disabled="getCodeForm.processing" />
  </Form>
  <template v-if="step === 2">
    <Form v-slot="$form" :resolver="checkCodeResolver" class="flex flex-col gap-6" @submit="checkCodeSubmit">
      <input v-model="checkCodeForm.phone" type="text" hidden />
      <span>Введите код из смс</span>
      <VFormItem :error="$form.code?.error?.message || checkCodeForm.errors.code">
        <VInputOtp v-model="checkCodeForm.code" />
      </VFormItem>
      <VButton type="submit" label="Войти в аккаунт" :disabled="checkCodeForm.processing" />
    </Form>
    <SecondaryButton size="large" rounded fluid class="mt-2" :disabled="isActive" :loading="getCodeForm.processing" @click="refreshCode">
      Отравить код повторно {{ timer }}
    </SecondaryButton>
  </template>
</template>

<style scoped></style>
