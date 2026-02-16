<script setup lang="ts">
import type { Component } from 'vue';

import { router, usePage } from '@inertiajs/vue3';
import { computed, defineAsyncComponent, inject, Ref, ref } from 'vue';

import IconChat from '@/shared/icons/IconChatTeardrop.svg';
import IconEnvelop from '@/shared/icons/IconEnvelop.svg';
import { VkAuth, YandexAuth } from '@/shared/o-auth';
import { VButton } from '@/shared/ui/button';
import VoltSecondaryButton from '@/shared/ui/volt/SecondaryButton.vue';
import { ISocialAuthTypes } from '@/widgets/auth/model/socialAuthTypes';

const SignInByEmail = defineAsyncComponent(() => import('./SignInByEmail.vue'));
const SignInByPhone = defineAsyncComponent(() => import('./SignInPhone.vue'));

const emit = defineEmits<{
  (event: 'success' | 'to-register' | 'to-reset'): void;
}>();

const page = usePage<{ social_auth: ISocialAuthTypes }>();

const mode = ref<'email' | 'phone'>('email');

const signComponent = computed<Component>(() => {
  return mode.value === 'email' ? SignInByEmail : SignInByPhone;
});

const switchMode = (): void => {
  mode.value = mode.value === 'email' ? 'phone' : 'email';
};

const onSuccess = (): void => {
  emit('success');
};

const toRegister = (): void => {
  emit('to-register');
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
      <h3 class="text-heavy-bold">Вход в личный кабинет</h3>
      <p class="text-mob-small-reg text-center">Чтобы совершать покупки, а также добавлять товары в избранное</p>
    </header>
    <div>
      <Component :is="signComponent" @success="onSuccess" @to-reset="$emit('to-reset')" />
    </div>
    <template v-if="!backBtnInj?.backBtn.value.isVisible">
      <div class="flex flex-col items-center gap-2">
        <p class="text-mob-small-reg text-text">Войти с помощью</p>
        <div class="flex w-full items-center gap-2">
          <VoltSecondaryButton
            :label="mode === 'email' ? 'Войти по смс' : 'Войти через почту'"
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
          <VkAuth v-if="page.props.social_auth.vk_available" class="w-fit" :handler="onSuccessVkAuth" />
        </div>
      </div>
      <div class="flex items-center justify-between gap-2">
        Еще нет аккаунта?
        <VButton label="Зарегистрироваться" variant="outline" @click="toRegister" />
      </div>
    </template>
  </div>
</template>

<style scoped></style>
