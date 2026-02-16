<script setup lang="ts">
import { Link, router, useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

import { IUser } from '@/entities/user';
import IconCaretLeft from '@/shared/icons/IconCaretLeft.svg';
import IconChats from '@/shared/icons/IconChats.svg';
import IconCheckCircle from '@/shared/icons/IconCheckCircle.svg';
import IconHome from '@/shared/icons/IconHome.svg';
import IconQuestion from '@/shared/icons/IconQuestion.svg';
import IconRepeat from '@/shared/icons/IconRepeat.svg';
import IconSignOut from '@/shared/icons/IconSignOut.svg';
import IconXCircle from '@/shared/icons/IconXCircleWhite.svg';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VFloatingInput } from '@/shared/ui/floating-input';
import { VPicture } from '@/shared/ui/picture';
import { VSection } from '@/shared/ui/section';
import VAvatar from '@/shared/ui/volt/Avatar.vue';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';
import VDialog from '@/shared/ui/volt/Dialog.vue';
import { CallMe } from '@/widgets/call-me';

const breadcrumbItems: Array<{ label: string; route: string }> = [
  { label: 'Главная', route: route('main-page') },
  { label: 'Личный кабинет', route: route('user.profile.index') },
];

const showMessage = ref<boolean>(false);

const props = defineProps<{
  auth: { user: IUser };
}>();

const isLogoutModalOpen = ref<boolean>(false);

const form = useForm({
  email: props.auth.user.new_email ?? props.auth.user.email ?? '',
});

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const submit = () => {
  if (!validateEmail(form.email)) {
    form.setError('email', 'Введите корректный email');
    return;
  }

  form.post(route('verification.send'), {
    onSuccess: () => {
      showMessage.value = true;
    },
  });
};

const { isMobile, isDesktop } = useScreenSize();
</script>

<template>
  <div class="lg:mx-auto lg:max-w-392">
    <div class="mx-6 mt-6 md:mx-8">
      <div v-if="isMobile">
        <Breadcrumb v-if="isMobile" :model="breadcrumbItems" class="!shrink-0 !overflow-auto bg-white !p-0">
          <template #item="{ item }">
            <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
              {{ item.label }}
            </Link>
          </template>
        </Breadcrumb>
        <div v-if="isMobile && showMessage" class="bg-push-green text-mob-small-reg mt-4 flex items-center justify-between rounded-lg p-2">
          <div class="flex items-center gap-2">
            <IconCheckCircle class="text-ready-green h-5 w-5" />
            <span>Письмо успешно отправлено</span>
          </div>
          <button class="cursor-pointer" @click="showMessage = false">
            <IconXCircle class="h-5 w-5" />
          </button>
        </div>
        <div class="mt-4 flex items-center justify-between">
          <h1 class="text-default-bold">Личный кабинет</h1>
          <Link
            :href="route('catalog.index')"
            class="text-subsidiary-reg bg-filling rounded-20 hover:bg-default flex items-center gap-2 px-3 py-2 transition-colors duration-300 hover:text-white"
          >
            <IconCaretLeft class="h-5 w-5" />
            <span v-if="isMobile">В каталог</span>
            <span v-else>Вернуться к каталогу </span>
          </Link>
        </div>
      </div>
      <div v-else class="flex items-center justify-between">
        <Breadcrumb :model="breadcrumbItems">
          <template #item="{ item }">
            <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
              {{ item.label }}
            </Link>
          </template>
        </Breadcrumb>
        <Link
          :href="route('catalog.index')"
          class="text-subsidiary-reg bg-filling rounded-20 hover:bg-default flex items-center gap-2 px-3 py-2 transition-colors duration-300 hover:text-white"
        >
          <IconCaretLeft class="h-5 w-5" />
          <span v-if="isMobile">В каталог</span>
          <span v-else>Вернуться к каталогу </span>
        </Link>
      </div>
    </div>

    <VSection class="max-md:!p-0">
      <div class="flex flex-col items-start md:gap-8 lg:flex-row">
        <div class="max-lg:w-full max-md:mt-4 max-md:px-6">
          <aside class="w-full flex-grow rounded-[30px] p-4 shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] lg:w-[352px]">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <VAvatar label="П" shape="circle" size="large" />

                <p class="text-mob-small-bold md:text-default-bold truncate">Пользователь</p>
              </div>
            </div>
            <template v-if="isDesktop">
              <nav class="border-b-filling mt-6 flex flex-col gap-3 border-b pb-6">
                <Link href="#" class="bg-input hover:bg-filling flex items-center gap-2 rounded-lg p-3 transition-colors duration-300">
                  <IconHome class="text-default" />
                  <span class="text-mob-small-bold">Личный кабинет</span>
                </Link>
              </nav>
              <button
                class="hover:bg-filling mt-6 flex w-full cursor-pointer items-center gap-2 rounded-2xl p-3 transition-colors duration-200"
                @click="isLogoutModalOpen = true"
              >
                <IconSignOut />
                <span class="text-mob-small-reg">Выход из аккаунта</span>
              </button>
              <VDialog v-model:visible="isLogoutModalOpen" :draggable="false" modal class="md:w-110">
                <h2 class="text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0">Хотите выйти?</h2>
                <p class="text-subsidiary-reg md:text-mob-small-reg mt-3 text-center md:mt-2">
                  С авторизацией вы сможете пользоваться скидками по карте лояльности
                </p>
                <div class="mt-3 flex flex-col gap-2 md:mt-6 md:flex-row">
                  <VButton label="Отмена" variant="outline" class="w-full" @click="isLogoutModalOpen = false" />
                  <VButton label="Выйти" class="w-full" @click="router.post(route('logout'))" />
                </div>
              </VDialog>
              <CallMe>
                <template #button="{ openModal }">
                  <button
                    class="text-mob-small-reg bg-filling mt-6 w-full cursor-pointer rounded-full py-4 transition-colors duration-200 ease-in hover:bg-gray-300"
                    @click.stop="openModal"
                  >
                    Обратная связь
                  </button>
                </template>
              </CallMe>
            </template>
          </aside>
        </div>
        <div v-if="!isDesktop" class="w-full">
          <nav class="border-b-filling mt-4 flex gap-3 overflow-x-auto whitespace-nowrap max-md:ml-6">
            <Link
              :href="route('user.profile.index')"
              class="bg-input hover:bg-filling flex shrink-0 items-center gap-2 rounded-lg p-3 transition-colors duration-300"
            >
              <IconHome class="text-default" />
              <span class="text-mob-small-bold">Личный кабинет</span>
            </Link>
          </nav>
        </div>

        <div class="flex flex-grow flex-col gap-8 px-6 sm:px-8">
          <div v-if="isDesktop && showMessage" class="bg-push-green text-mob-small-reg flex items-center justify-between rounded-lg p-2">
            <div class="flex items-center gap-2">
              <IconCheckCircle class="text-ready-green h-5 w-5" />
              <span>Письмо успешно отправлено</span>
            </div>
            <button class="cursor-pointer" @click="showMessage = false">
              <IconXCircle class="h-5 w-5" />
            </button>
          </div>
          <div
            class="bg-light-gray flex flex-col items-center justify-between gap-6 rounded-[40px] p-4 max-lg:mt-14 lg:flex-row lg:items-start lg:gap-15"
          >
            <VPicture
              src="/images/test-images/verify.webp"
              height="100%"
              :width="isDesktop ? '270px' : '100px'"
              alt="verify"
              class="-mt-8 lg:ml-21"
            />
            <div>
              <h1 class="text-default-medium lg:text-heavy-medium max-lg:text-center">
                На вашу электронную почту отправлена ссылка для подтверждения аккаунта
              </h1>
              <p class="text-subsidiary-reg lg:text-mob-small-reg mt-2 max-lg:text-center">
                Пожалуйста, перейдите по ссылке в письме, чтобы активировать аккаунт и получить доступ ко всем функциям нашего сервиса.
              </p>
              <form class="mt-8 flex flex-col items-center gap-2 md:flex-row" @submit.prevent="submit">
                <VFloatingInput
                  v-model="form.email"
                  name="email"
                  :error="form.errors?.email"
                  type="email"
                  class="w-full"
                  label="Ваш e-mail"
                  clearable
                />
                <VButton label="Отправить письмо повторно" class="w-full text-nowrap md:w-fit" type="submit" />
              </form>
            </div>
          </div>
          <div class="rounded-20 mt-8 p-3 shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] md:p-4">
            <h3 class="text-default-bold">Техническая поддержка</h3>
            <nav class="mt-4 flex flex-col justify-between gap-2 md:flex-row">
              <a
                href="mailto:inet_shop@primefood.ru"
                class="bg-input hover:bg-filling flex w-full items-center gap-2 rounded-lg p-3 transition-colors duration-200 max-md:px-2"
              >
                <IconChats />
                <span class="text-mob-small-reg">Написать в поддержку</span>
              </a>
              <Link
                href="/page/return-exchange"
                class="bg-input hover:bg-filling flex w-full items-center gap-2 rounded-lg p-3 transition-colors duration-200 max-md:px-2"
              >
                <IconRepeat />
                <span class="text-mob-small-reg">Условия возврата и обмена товаров</span>
              </Link>
              <Link
                :href="route('faq.faq.index')"
                class="bg-input hover:bg-filling flex w-full items-center gap-2 rounded-lg p-3 transition-colors duration-200 max-md:px-2"
              >
                <IconQuestion />
                <span class="text-mob-small-reg">Частые вопросы</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </VSection>
  </div>
</template>
