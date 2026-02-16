<script setup lang="ts">
import { Link, router, usePage } from '@inertiajs/vue3';
import { useToast } from 'primevue';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { ValidRouteName } from 'ziggy-js';

import { DefaultLayout } from '@/app/layouts';
import { IUser } from '@/entities/user';
import { IUserBonusCard } from '@/entities/user/model/userTypes';
import IconBell from '@/shared/icons/IconBell.svg';
import IconCaretLeft from '@/shared/icons/IconCaretLeft.svg';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg';
import IconChatText from '@/shared/icons/IconChatText.svg';
import IconCheckCircle from '@/shared/icons/IconCheckCircle.svg';
import IconClipboardText from '@/shared/icons/IconClipboardText.svg';
import IconFire from '@/shared/icons/IconFire.svg';
import IconGear from '@/shared/icons/IconGear.svg';
import IconHeartGray from '@/shared/icons/IconHeartGray.svg';
import IconHome from '@/shared/icons/IconHome.svg';
import IconSignOut from '@/shared/icons/IconSignOut.svg';
import IconXCircle from '@/shared/icons/IconXCircleWhite.svg';
import { personInitials } from '@/shared/lib/helpers/personInitials';
import { Nullable } from '@/shared/lib/utility-types/Nullable';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VSection } from '@/shared/ui/section';
import VAvatar from '@/shared/ui/volt/Avatar.vue';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';
import VDialog from '@/shared/ui/volt/Dialog.vue';
import OverlayBadge from '@/shared/ui/volt/OverlayBadge.vue';
import { CallMe } from '@/widgets/call-me';

const { t } = useI18n();

const breadcrumbItems: Array<{ label: string; route: string }> = [
  { label: 'Главная', route: route('main-page') },
  { label: 'Личный кабинет', route: route('user.profile.index') },
];

const isLogoutModalOpen = ref<boolean>(false);

const page = usePage<{
  auth: { user: IUser };
  userBonusCard: IUserBonusCard;
  allBonusCount: number;
  oldestBonusCount: number;
  notReadedAlertsCount: number;
  expireDate: string;
  flash: { success: Nullable<string> };
}>();

const showMessage = ref<boolean>(false);

if (page.props.flash.success) {
  showMessage.value = true;
}

const fullName = computed<string>(() => page.props.auth.user.name + ' ' + page.props.auth.user.last_name);

const { isMobile, isDesktop } = useScreenSize();

const currentRoute = computed<ValidRouteName | undefined>(() => {
  const url = page.url;
  return route().current();
});
</script>

<template>
  <DefaultLayout>
    <div class="lg:mx-auto lg:max-w-392">
      <div class="mx-6 mt-6 md:mx-8">
        <div v-if="isMobile">
          <Breadcrumb v-if="isMobile" :model="breadcrumbItems" class="!shrink-0 !overflow-auto bg-white !p-0">
            <template #item="{ item }">
              <Link
                class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200"
                :href="item.route"
                :only="['products', 'category_target']"
              >
                {{ item.label }}
              </Link>
            </template>
          </Breadcrumb>
          <div v-if="isMobile && showMessage" class="bg-push-green text-mob-small-reg mt-4 flex items-center justify-between rounded-lg p-2">
            <div class="flex items-center gap-2">
              <IconCheckCircle class="text-ready-green h-5 w-5" />
              <span>{{ page.props.flash.success }}</span>
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
                  <VAvatar v-if="isMobile" :label="page.props.auth.user.name ? personInitials(fullName) : 'П'" shape="circle" size="normal" />
                  <VAvatar v-else :label="page.props.auth.user.name ? personInitials(fullName) : 'П'" shape="circle" size="large" />
                  <Link :href="route('user.profile.edit')" class="flex max-w-[220px] items-center">
                    <p class="text-mob-small-bold md:text-default-bold truncate">
                      {{ page.props.auth.user.name ? page.props.auth.user.name : 'Пользователь' }}
                    </p>
                    <IconCaretRight class="h-5 w-5 flex-shrink-0" />
                  </Link>
                </div>
                <Link :href="route('user.profile.notifications')">
                  <OverlayBadge :value="page.props.notReadedAlertsCount" severity="danger" class="!text-xs">
                    <IconBell class="h-6 w-6" />
                  </OverlayBadge>
                </Link>
              </div>
              <div class="mt-6 grid grid-cols-2 gap-2">
                <div class="bg-input hover:bg-filling text-additional w-full rounded-2xl p-3 transition-colors duration-300">
                  <template v-if="!page.props.oldestBonusCount">
                    <p class="text-small-medium md:text-default-medium">0 баллов</p>
                    <p class="text-subsidiary-reg">Скоро сгорят</p>
                  </template>
                  <template v-else>
                    <div class="flex items-center gap-0.5">
                      <IconFire class="text-delete !shrink-0 h-4 w-4" />
                      <p class="text-small-medium text-text md:text-default-medium">
                        {{ t('profile.points', page.props.oldestBonusCount) }}
                      </p>
                    </div>
                    <p class="text-subsidiary-reg">Сгорят {{ page.props.expireDate }}</p>
                  </template>
                </div>
                <Link
                  :href="route('user.profile.privilege.program')"
                  class="flex w-full items-center justify-between gap-2 rounded-2xl p-3 transition-colors duration-300"
                  :class="currentRoute !== 'user.profile.privilege.program' ? 'bg-input text-additional hover:bg-filling' : 'bg-text text-white'"
                >
                  <div>
                    <p
                      class="text-small-medium md:text-default-bold"
                      :class="currentRoute !== 'user.profile.privilege.program' ? 'text-default' : ''"
                    >
                      {{ page.props.allBonusCount }}
                    </p>
                    <p class="text-subsidiary-reg text-nowrap">Баланс бонусов</p>
                  </div>
                  <IconCaretRight class="h-5 w-5 flex-shrink-0" />
                </Link>
              </div>
              <template v-if="isDesktop">
                <nav class="border-b-filling mt-6 flex flex-col gap-3 border-b pb-6">
                  <Link
                    :href="route('user.profile.index')"
                    class="bg-input hover:bg-filling flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
                  >
                    <IconHome :class="currentRoute === 'user.profile.index' ? 'text-default' : 'text-additional'" />
                    <span :class="currentRoute !== 'user.profile.index' ? 'text-mob-small-reg' : 'text-mob-small-bold'">Личный кабинет</span>
                  </Link>
                  <div>
                    <h5 class="text-subsidiary-reg text-additional">Заказы</h5>
                    <div class="mt-1 flex flex-col gap-2">
                      <Link
                        :href="route('user.profile.orders_history')"
                        class="bg-input hover:bg-filling flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
                      >
                        <IconClipboardText :class="currentRoute === 'user.profile.orders_history' ? 'text-default' : 'text-additional'" />
                        <span :class="currentRoute !== 'user.profile.orders_history' ? 'text-mob-small-reg' : 'text-mob-small-bold'"
                          >История заказов</span
                        >
                      </Link>
                      <Link
                        :href="route('user.profile.white_list')"
                        class="bg-input hover:bg-filling flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
                      >
                        <IconHeartGray :class="currentRoute === 'user.profile.white_list' ? 'text-default' : 'text-additional'" />
                        <span :class="currentRoute !== 'user.profile.white_list' ? 'text-mob-small-reg' : 'text-mob-small-bold'">Избранное</span>
                      </Link>
                      <Link
                        :href="route('user.profile.reviews')"
                        class="bg-input hover:bg-filling flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
                      >
                        <IconChatText :class="currentRoute === 'user.profile.reviews' ? 'text-default' : 'text-additional'" />
                        <span :class="currentRoute !== 'user.profile.reviews' ? 'text-mob-small-reg' : 'text-mob-small-bold'">Мои отзывы</span>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <h5 class="text-subsidiary-reg text-additional">Управление</h5>
                    <div class="mt-1 flex flex-col gap-2">
                      <Link
                        :href="route('user.profile.settings')"
                        class="bg-input hover:bg-filling flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
                      >
                        <IconGear :class="currentRoute === 'user.profile.settings' ? 'text-default' : 'text-additional'" />
                        <span :class="currentRoute !== 'user.profile.settings' ? 'text-mob-small-reg' : 'text-mob-small-bold'">Настройки</span>
                      </Link>
                    </div>
                  </div>
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
                <IconHome :class="currentRoute === 'user.profile.index' ? 'text-default' : 'text-additional'" />
                <span :class="currentRoute !== 'user.profile.index' ? 'text-mob-small-reg' : 'text-mob-small-bold'">Личный кабинет</span>
              </Link>
              <Link
                :href="route('user.profile.orders_history')"
                class="bg-input hover:bg-filling flex shrink-0 items-center gap-2 rounded-lg p-3 transition-colors duration-300"
              >
                <IconClipboardText :class="currentRoute === 'user.profile.orders_history' ? 'text-default' : 'text-additional'" />
                <span :class="currentRoute !== 'user.profile.orders_history' ? 'text-mob-small-reg' : 'text-mob-small-bold'">История заказов</span>
              </Link>
              <Link
                :href="route('user.profile.white_list')"
                class="bg-input hover:bg-filling flex shrink-0 items-center gap-2 rounded-lg p-3 transition-colors duration-300"
              >
                <IconHeartGray :class="currentRoute === 'user.profile.white_list' ? 'text-default' : 'text-additional'" />
                <span :class="currentRoute !== 'user.profile.white_list' ? 'text-mob-small-reg' : 'text-mob-small-bold'">Избранное</span>
              </Link>
              <Link
                :href="route('user.profile.reviews')"
                class="bg-input hover:bg-filling flex shrink-0 items-center gap-2 rounded-lg p-3 transition-colors duration-300"
              >
                <IconChatText :class="currentRoute === 'user.profile.reviews' ? 'text-default' : 'text-additional'" />
                <span :class="currentRoute !== 'user.profile.reviews' ? 'text-mob-small-reg' : 'text-mob-small-bold'">Мои отзывы</span>
              </Link>
              <Link
                :href="route('user.profile.settings')"
                class="bg-input hover:bg-filling flex shrink-0 items-center gap-2 rounded-lg p-3 transition-colors duration-300"
              >
                <IconGear :class="currentRoute === 'user.profile.settings' ? 'text-default' : 'text-additional'" />
                <span :class="currentRoute !== 'user.profile.settings' ? 'text-mob-small-reg' : 'text-mob-small-bold'">Настройки</span>
              </Link>
            </nav>
          </div>
          <slot />
        </div>
      </VSection>
    </div>
  </DefaultLayout>
</template>

<style scoped></style>
