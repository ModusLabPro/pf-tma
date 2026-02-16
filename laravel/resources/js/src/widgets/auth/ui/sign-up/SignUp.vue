<script setup lang="ts">
import type { Component } from 'vue';

import { router, usePage } from '@inertiajs/vue3';
import { computed, inject, Ref, ref } from 'vue';

import IconChat from '@/shared/icons/IconChatTeardrop.svg';
import IconEnvelop from '@/shared/icons/IconEnvelop.svg';
import { VkAuth, YandexAuth } from '@/shared/o-auth';
import { VButton } from '@/shared/ui/button';
import VoltSecondaryButton from '@/shared/ui/volt/SecondaryButton.vue';
import { ISocialAuthTypes } from '@/widgets/auth/model/socialAuthTypes';
import SignUpByEmail from '@/widgets/auth/ui/sign-up/SignUpByEmail.vue';
import SignUpByPhone from '@/widgets/auth/ui/sign-up/SignUpByPhone.vue';

const emit = defineEmits<{
  (event: 'toLogin'): void;
  (event: 'success'): void;
}>();

const page = usePage<{ social_auth: ISocialAuthTypes }>();

const mode = ref<'email' | 'phone'>('email');
const switchMode = (): void => {
  mode.value = mode.value === 'email' ? 'phone' : 'email';
};

const signComponent = computed<Component>(() => {
  return mode.value === 'email' ? SignUpByEmail : SignUpByPhone;
});
const toLogin = (): void => {
  emit('toLogin');
};

const onSuccess = (): void => {
  emit('success');
};

const backBtnInj = inject<{
  backBtn: Ref<{
    isVisible: boolean;
    action: () => void;
  }>;
  setBackBtn: (visibility: boolean, action?: () => void) => void;
}>('backBtn');

const onSuccessVkAuth = (data: any): void => {
  fetch('/auth/vk/callback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((resp) => {
      if (resp.success) {
        router.reload();
        emit('success');
      }
    })
    .catch((err) => console.error('Ошибка:', err));

  // onSuccess();
};
</script>

<template>
  <div class="flex flex-col gap-6">
    <header class="flex flex-col items-center gap-2">
      <h3 class="text-heavy-bold">Регистрация</h3>
      <p class="text-mob-small-reg text-center">Зарегистрируйтесь, чтобы совершать покупки, а также добавлять товары в избранное</p>
    </header>
    <div>
      <Component :is="signComponent" @success="onSuccess" @to-login="toLogin" />
    </div>
    <template v-if="!backBtnInj?.backBtn.value.isVisible">
      <div class="flex flex-col items-center gap-2">
        <p class="text-mob-small-reg text-text">Зарегистрироваться с помощью</p>
        <div class="flex w-full items-center gap-2">
          <VoltSecondaryButton
            :label="mode === 'email' ? 'Через смс' : 'Через почту'"
            rounded
            size="large"
            :class="{ 'w-full': !page.props.social_auth.yandex_available }"
            @click="switchMode"
          >
            <template #icon>
              <IconChat v-if="mode === 'email'" />
              <IconEnvelop v-if="mode === 'phone'" />
            </template>
          </VoltSecondaryButton>
          <YandexAuth v-if="page.props.social_auth.yandex_available" class="flex-1" />
          <VkAuth  v-if="page.props.social_auth.vk_available" id="VK_button" class="w-fit" :handler="onSuccessVkAuth" />
        </div>
      </div>
      <div class="flex items-center justify-between gap-2">
        Уже есть аккаунт?
        <VButton label="Войти" variant="outline" class="flex-1" @click="toLogin" />
      </div>
    </template>
  </div>
</template>

<style scoped></style>
