<script setup lang="ts">
import type { Component } from 'vue';

import { Link, router, usePage } from '@inertiajs/vue3';
import { provide, ref, shallowRef, useTemplateRef, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import { IUser } from '@/entities/user';
import IconArrowLeft from '@/shared/icons/IconArrowLeft.svg';
import IconUserCircle from '@/shared/icons/IconUserCircle.svg';
import { personInitials } from '@/shared/lib/helpers/personInitials';
import { useScreenSize } from '@/shared/media-queries';
import Avatar from '@/shared/ui/volt/Avatar.vue';
import VoltButton from '@/shared/ui/volt/Button.vue';
import VDialog from '@/shared/ui/volt/Dialog.vue';
import VPopover from '@/shared/ui/volt/Popover.vue';
import SignUp from '@/widgets/auth/ui/sign-up/SignUp.vue';

import ForgotPassword from './ForgotPassword.vue';
import SignIn from './sign-in/SignIn.vue';

const { t } = useI18n();

const isModalOpen = ref<boolean>(false);

const formComponent = shallowRef<Component>(SignIn);

const openUserActions = useTemplateRef<InstanceType<typeof VPopover>>('open-user-actions');

const toggleUserActionsOpen = (e: Event): void => {
  openUserActions.value?.toggle(e);
};

const toRegister = () => {
  formComponent.value = SignUp;
};

const toLogin = () => {
  formComponent.value = SignIn;
};

const logout = (event: Event): void => {
  router.post(route('logout'));
  toggleUserActionsOpen(event);
};

const backBtn = ref<{
  isVisible: boolean;
  action?: () => void;
}>({
  isVisible: false,
  action: () => {},
});

const setBackBtn = (visibility: boolean, action: () => void): void => {
  backBtn.value.action = action;
  backBtn.value.isVisible = visibility;
};

watch(isModalOpen, (newValue: boolean): void => {
  if (!newValue) {
    formComponent.value = SignIn;
    backBtn.value.isVisible = false;
    backBtn.value.action = () => {};
  }
});

const toReset = (): void => {
  formComponent.value = ForgotPassword;
  setBackBtn(true, () => {
    backBtn.value.isVisible = false;
    formComponent.value = SignIn;
  });
};

const page = usePage<{
  auth: { user: IUser };
}>();

const { isMobile, isTablet } = useScreenSize();

const openModal = (): void => {
  isModalOpen.value = true;
};

provide('backBtn', {
  backBtn,
  setBackBtn,
});

defineExpose({
  openModal,
});
</script>

<template>
  <div v-if="!isMobile && !isTablet">
    <VoltButton
      :label="page.props.auth.user ? 'Личный кабинет' : t('header.enter')"
      variant="outlined"
      rounded
      @click="!page.props.auth.user ? (isModalOpen = true) : toggleUserActionsOpen($event)"
    >
      <template #icon>
        <IconUserCircle />
      </template>
    </VoltButton>
    <VPopover ref="open-user-actions" class="!rounded-20 min-w-[240px]">
      <div class="text-mob-small-reg flex flex-col">
        <Link :href="route('user.profile.index')" class="hover:bg-light-gray rounded-lg p-2 transition-colors duration-200">Профиль </Link>
        <button class="hover:bg-light-gray cursor-pointer rounded-lg p-2 text-left transition-colors duration-200 ease-in" @click="logout">
          Выход
        </button>
      </div>
    </VPopover>
  </div>

  <button v-else @click="!page.props.auth.user ? (isModalOpen = true) : router.visit(route('user.profile.index'))">
    <IconUserCircle v-if="!page.props.auth.user" width="32px" height="32px" />
    <Avatar
      v-else
      shape="circle"
      :label="
        page.props.auth.user.name || page.props.auth?.user.last_name
          ? personInitials(page.props.auth.user.name + ' ' + page.props.auth?.user.last_name)
          : 'П'
      "
      class="!bg-text !text-subsidiary-reg !text-white"
    />
  </button>
  <VDialog v-model:visible="isModalOpen" modal :draggable="false" class="w-110">
    <template #header>
      <button v-if="backBtn.isVisible" class="cursor-pointer" @click="backBtn.action">
        <IconArrowLeft />
      </button>
    </template>
    <Component :is="formComponent" @success="isModalOpen = false" @to-register="toRegister" @to-login="toLogin" @to-reset="toReset" />
  </VDialog>
</template>
