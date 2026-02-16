<script setup lang="ts">
import { Link, useForm } from '@inertiajs/vue3';
import { Form, FormSubmitEvent } from '@primevue/forms';
import { useCountdown } from '@vueuse/core';
import { useToast } from 'primevue';
import { computed, ref, useTemplateRef, watch } from 'vue';

import { ProfileLayout } from '@/app/layouts';
import { IUser } from '@/entities/user';
import {
  changeEmailResolver,
  changeEmailSchema,
  changePasswordResolver,
  changePasswordSchema,
  changePhoneResolver,
  changePhoneSchema,
  checkCodeResolver,
  checkCodeSchema,
  settingsResolver,
  settingsUpdateSchema,
} from '@/pages/profile/profile-settings/model/settings.model';
import IconArrowDown from '@/shared/icons/IconArrowDown.svg';
import IconCheckCircle from '@/shared/icons/IconCheckCircle.svg';
import IconXCircle from '@/shared/icons/IconXCircleWhite.svg';
import { VButton } from '@/shared/ui/button';
import { ICatalogCategory } from '@/shared/ui/catalog-menu/model/catalogMenuProps';
import { VFormItem } from '@/shared/ui/form-item';
import { VInputOtp } from '@/shared/ui/input-otp';
import { VScrollPanel } from '@/shared/ui/scroll-panel';
import Checkbox from '@/shared/ui/volt/Checkbox.vue';
import VDialog from '@/shared/ui/volt/Dialog.vue';
import InputMask from '@/shared/ui/volt/InputMask.vue';
import InputText from '@/shared/ui/volt/InputText.vue';
import Password from '@/shared/ui/volt/Password.vue';
import Popover from '@/shared/ui/volt/Popover.vue';
import VRadioButton from '@/shared/ui/volt/RadioButton.vue';
import SecondaryButton from '@/shared/ui/volt/SecondaryButton.vue';
import ToggleSwitch from '@/shared/ui/volt/ToggleSwitch.vue';
import InputPhone from '@/shared/ui/input-phone/InputPhone.vue';

const { add } = useToast();
const { start, remaining, isActive } = useCountdown(60);

const props = defineProps<{
  userSetting: settingsUpdateSchema;
  categories: ICatalogCategory[];
  flash: { success: string; error: string };
  auth: {
    user: IUser;
  };
}>();
const categoriesContainer = useTemplateRef<InstanceType<typeof Popover>>('categories-popover');

const toggleCategoriesSelect = (e: Event): void => {
  categoriesContainer.value?.toggle(e);
};

const showPush = ref<boolean>(false);

const updateSettingsForm = useForm<Partial<settingsUpdateSchema>>({
  comment_notifications: props.userSetting.comment_notifications ?? false,
  sale_notifications: props.userSetting.sale_notifications ?? false,
  email_notifications: props.userSetting.email_notifications ?? false,
  sms_notifications: props.userSetting.sms_notifications ?? false,
  messenger_notifications: props.userSetting.messenger_notifications ?? false,
  favorite_categories: props.userSetting.favorite_categories ?? false,
  often_type: props.userSetting.often_type ?? undefined,
  favorite_categories_list: props.userSetting.favorite_categories_list ?? [],
});

watch(
  () => updateSettingsForm.favorite_categories,
  (newVal) => {
    if (newVal === false) {
      updateSettingsForm.favorite_categories_list = [];
    }
  },
);

const onUpdateUserSettings = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    updateSettingsForm.put(route('user.profile.settings.update'), { preserveScroll: true });
    showPush.value = true;
  }
};

const changePasswordForm = useForm<changePasswordSchema>({
  credentials: '',
  old_password: '',
  password: '',
  password_confirmation: '',
});

const changeEmailForm = useForm<changeEmailSchema>({
  email: '',
  password: '',
});

const changePhoneForm = useForm<changePhoneSchema>({
  phone: '',
});

const checkCodeForm = useForm<checkCodeSchema>({
  code: '',
});

const timer = computed<string>(() => {
  if (isActive.value) {
    const minutes = Math.floor(remaining.value / 60);
    const seconds = remaining.value % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  return '';
});

const isCheckCodeOpen = ref<boolean>(false);

const onChangePassword = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    changePasswordForm.post(route('user.profile.password.change'), {
      onSuccess: () => {
        showPush.value = true;
        changePasswordForm.reset()
      },
      preserveState: true
    });
  }
};

const onEmailChange = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    changeEmailForm.post(route('email.change.store'), { preserveScroll: true });
  }
};

const onPhoneChange = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    changePhoneForm.post(route('phone.change.send'), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: (data: any) => {
        isCheckCodeOpen.value = true;
        add({
          severity: 'success',
          detail: data?.props?.flash.success,
        });
        start();
      },
    });
  }
};

const onCheckCode = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    checkCodeForm.post(route('phone.change.confirm'), {
      onSuccess: (data: any) => {
        isCheckCodeOpen.value = false;
        if (data?.props?.flash.error) {
          add({
            severity: 'error',
            detail: data?.props?.flash.error,
          });
        }
      },
    });
  }
};

const refreshCode = () => {
  changePhoneForm.post(route('phone.change.send'), {
    preserveScroll: true,
    preserveState: true,
    onSuccess: (data: any) => {
      add({
        severity: 'success',
        detail: data?.props?.flash.success,
      });
      start();
    },
  });
};

const removeCategory = (id: number): void => {
  updateSettingsForm.favorite_categories_list = updateSettingsForm?.favorite_categories_list?.filter((catId) => catId !== id);
};

const notificationsFrequency = [
  { type: 'daily', name: 'Ежедневно' },
  { type: 'weekly', name: 'Еженедельно' },
  { type: 'sales_only', name: 'Только при наличии акций' },
];

defineOptions({
  layout: ProfileLayout,
});
</script>

<template>
  <section class="w-full max-md:p-6">
    <div v-if="showPush" class="bg-push-green text-mob-small-reg mt-4 flex items-center justify-between rounded-lg p-2">
      <div class="flex items-center gap-2">
        <IconCheckCircle class="text-ready-green h-5 w-5" />
        <span>{{ flash.success }}</span>
      </div>
      <button class="cursor-pointer" @click="showPush = false">
        <IconXCircle class="h-5 w-5" />
      </button>
    </div>
    <h1 class="text-default-bold mt-2">Настройки</h1>
    <Form
      v-slot="$form"
      :resolver="settingsResolver"
      :initial-values="updateSettingsForm"
      validate-on-blur
      class="mt-6 md:mt-8"
      @submit="onUpdateUserSettings"
    >
      <div class="text-mob-small-medium md:text-small-medium flex flex-col gap-4">
        <h2>Уведомления</h2>
        <div class="border-b-filling flex flex-col gap-6 border-b pb-4">
          <VFormItem :error="$form.comment_notifications?.error?.message || updateSettingsForm.errors.comment_notifications">
            <div class="flex items-center gap-2 md:gap-8">
              <label for="comment_notifications" class="w-full max-w-[440px]">Сообщать о новых лайках и ответах в комментариях</label>
              <ToggleSwitch v-model="updateSettingsForm.comment_notifications" name="comment_notifications" class="shrink-0" />
            </div>
          </VFormItem>
          <VFormItem :error="$form.sale_notifications?.error?.message || updateSettingsForm.errors.sale_notifications">
            <div class="flex items-center gap-2 md:gap-8">
              <label for="sale_notifications" class="w-full max-w-[440px]">Сообщать о новых скидках и акциях</label>
              <ToggleSwitch v-model="updateSettingsForm.sale_notifications" name="sale_notifications" class="shrink-0" />
            </div>
          </VFormItem>
          <VFormItem :error="$form.favorite_categories?.error?.message || updateSettingsForm.errors.favorite_categories">
            <div class="flex items-center gap-2 md:gap-8">
              <div class="flex w-full max-w-[440px] flex-col gap-0.5">
                <label for="favorite_categories">Сообщать о новых товарах из любимых категорий</label>
                <span v-show="updateSettingsForm.favorite_categories" class="text-subsidiary-reg text-additional"
                  >Категории товаров, по которым вы хотите получать уведомления</span
                >
              </div>
              <ToggleSwitch v-model="updateSettingsForm.favorite_categories" name="favorite_categories" class="shrink-0" />
            </div>
          </VFormItem>
          <VFormItem v-show="updateSettingsForm.favorite_categories">
            <button
              class="bg-input rounded-20 flex max-w-[360px] cursor-pointer items-center justify-between border border-transparent p-3.5 px-4 transition-all duration-200 ease-in"
              type="button"
              @click="toggleCategoriesSelect"
            >
              <span class="text-additional transition-colors duration-200 ease-in">Выберите категории</span>
              <IconArrowDown class="transition-transform duration-200 ease-in" />
            </button>
          </VFormItem>
          <Popover ref="categories-popover">
            <div class="text-small-regular flex min-w-[320px] flex-col">
              <VScrollPanel style="height: 320px">
                <div
                  v-for="category in categories"
                  :key="category.id"
                  class="hover:bg-input flex cursor-pointer items-center rounded-lg py-2 transition-colors duration-200 ease-in"
                >
                  <Checkbox
                    v-model="updateSettingsForm.favorite_categories_list"
                    :input-id="String(category.id)"
                    :name="String(category.id)"
                    :value="category.id"
                  />
                  <label class="cursor-pointer pl-3" :for="String(category.id)">{{ category.name }}</label>
                </div>
              </VScrollPanel>
            </div>
          </Popover>
          <div
            v-if="
              updateSettingsForm.favorite_categories_list &&
              updateSettingsForm.favorite_categories_list.length > 0 &&
              updateSettingsForm.favorite_categories
            "
            class="flex items-center gap-6"
          >
            <p class="text-mob-small-reg text-additional text-nowrap">Любимые категории</p>
            <div class="flex flex-wrap items-center gap-2">
              <div
                v-for="categoryId in updateSettingsForm.favorite_categories_list"
                :key="categoryId"
                class="rounded-20 bg-text flex items-center gap-2 px-4 py-3.5 text-white"
              >
                <span class="text-mob-small-reg">
                  {{ props.categories.find((cat) => cat.id === categoryId)?.name || 'Неизвестная категория' }}
                </span>
                <button class="cursor-pointer" @click="removeCategory(categoryId)">
                  <IconXCircle />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-6 pb-4">
          <VFormItem :error="$form.email_notifications?.error?.message || updateSettingsForm.errors.email_notifications">
            <div class="flex items-center gap-2 md:gap-8">
              <div class="flex w-full max-w-[440px] flex-col gap-0.5">
                <label for="email_notifications">Получать рассылки на почту</label>
                <span class="text-subsidiary-reg text-additional">Почту можно привязать во вкладке «Личный кабинет»</span>
              </div>
              <ToggleSwitch v-model="updateSettingsForm.email_notifications" name="email_notifications" class="shrink-0" />
            </div>
          </VFormItem>
          <VFormItem :error="$form.sms_notifications?.error?.message || updateSettingsForm.errors.sms_notifications">
            <div class="flex items-center gap-2 md:gap-8">
              <div class="flex w-full max-w-[440px] flex-col gap-0.5">
                <label for="sms_notifications">Получать СМС-рассылки</label>
                <span class="text-subsidiary-reg text-additional">Номер можно привязать во вкладке «Личный кабинет»</span>
              </div>
              <ToggleSwitch v-model="updateSettingsForm.sms_notifications" name="sms_notifications" class="shrink-0" />
            </div>
          </VFormItem>
          <VFormItem :error="$form.messenger_notifications?.error?.message || updateSettingsForm.errors.messenger_notifications">
            <div class="flex items-center gap-2 md:gap-8">
              <div class="flex w-full max-w-[440px] flex-col gap-0.5">
                <label for="messenger_notifications">Получать рассылки через мессенджеры</label>
                <span class="text-subsidiary-reg text-additional">Мессенджеры можно привязать во вкладке «Личный кабинет»</span>
              </div>
              <ToggleSwitch v-model="updateSettingsForm.messenger_notifications" name="messenger_notifications" class="shrink-0" />
            </div>
          </VFormItem>
          <VFormItem :error="$form.messenger_notifications?.error?.message || updateSettingsForm.errors.messenger_notifications">
            <div class="flex flex-col gap-2 md:flex-row md:items-center md:gap-8">
              <span class="text-additional text-mob-small-reg max-md:w-full">Частота уведомлений</span>
              <div class="flex flex-wrap max-md:justify-between">
                <div v-for="notification in notificationsFrequency" :key="notification.type" class="cursor-pointer rounded-lg p-2">
                  <VRadioButton
                    v-model="updateSettingsForm.often_type"
                    :input-id="String(notification.type)"
                    :name="String(notification.type)"
                    :disabled="
                      !updateSettingsForm.email_notifications && !updateSettingsForm.sms_notifications && !updateSettingsForm.messenger_notifications
                    "
                    :value="notification.type"
                  />
                  <label
                    class="text-mob-small-reg cursor-pointer pl-3"
                    :class="{
                      'text-additional':
                        !updateSettingsForm.email_notifications &&
                        !updateSettingsForm.sms_notifications &&
                        !updateSettingsForm.messenger_notifications,
                    }"
                    :for="notification.type"
                    >{{ notification.name }}</label
                  >
                </div>
              </div>
            </div>
          </VFormItem>
          <VButton type="submit" class="w-fit" label="Сохранить изменения" />
        </div>
      </div>
    </Form>
    <Form
      id="change-email"
      v-slot="$form"
      :resolver="changePasswordResolver"
      :initial-values="changePasswordForm"
      validate-on-blur
      :validate-on-value-update="false"
      class="flex flex-col gap-4"
      @submit="onChangePassword"
    >
      <h2 class="text-small-medium mt-8">{{ auth.user.is_have_password ? 'Смена пароля' : 'Установка пароля' }}</h2>
      <div class="flex flex-col gap-2">
        <div v-if="auth.user.is_have_password">
          <label for="password">
            <span>Введите старый пароль</span>
          </label>
        </div>
        <div class="flex flex-col items-start justify-between gap-4 md:flex-row">
          <VFormItem
            v-if="auth.user.is_have_password"
            :error="$form.old_password?.error?.message ?? changePasswordForm.errors.old_password"
            class="flex w-full flex-col justify-between"
          >
            <Password
              v-model="changePasswordForm.old_password"
              placeholder="Старый пароль"
              :input-props="{ autocomplete: 'new-password', required: true }"
              name="old_password"
              :feedback="false"
              toggle-mask
              fluid
              :invalid="!!changePasswordForm.errors.old_password"
            />
          </VFormItem>
          <VFormItem :error="$form.password?.error?.message ?? changePasswordForm.errors.password" class="w-full">
            <Password
              v-model="changePasswordForm.password"
              placeholder="Новый пароль"
              :input-props="{ autocomplete: 'new-password', required: true }"
              name="password"
              :feedback="false"
              toggle-mask
              fluid
              :invalid="!!changePasswordForm.errors.password"
            />
          </VFormItem>

          <div class="w-full">
            <VFormItem :error="$form.password_confirmation?.error?.message ?? changePasswordForm.errors.password_confirmation" class="w-full">
              <Password
                v-model="changePasswordForm.password_confirmation"
                placeholder="Подтверждение пароля"
                :input-props="{ autocomplete: 'new-password', required: true }"
                name="password_confirmation"
                toggle-mask
                :feedback="false"
                fluid
                :invalid="!!changePasswordForm.errors.password_confirmation"
              />
            </VFormItem>
          </div>
        </div>
      </div>
      <VButton type="submit" :label="`${auth.user.is_have_password ? 'Сменить' : 'Установить'} пароль`" class="w-fit" />
    </Form>
    <Form
      v-slot="$form"
      :resolver="changeEmailResolver"
      :initial-values="changeEmailForm"
      validate-on-blur
      :validate-on-value-update="false"
      class="flex flex-col gap-4"
      @submit="onEmailChange"
    >
      <h2 class="text-small-medium mt-8">Смена почты</h2>
      <div class="flex flex-col gap-2">
        <div class="grid grid-cols-1 items-start justify-between gap-4 md:grid-cols-2">
          <VFormItem
            v-if="auth.user.is_have_password"
            :error="$form.password?.error?.message ?? changeEmailForm.errors.password"
            class="flex w-full flex-col justify-between"
          >
            <label for="password">
              <span>Введите пароль</span>
            </label>

            <Password
              v-model="changeEmailForm.password"
              placeholder="Ваш пароль"
              :input-props="{ autocomplete: 'new-password', required: true }"
              name="old_password"
              :feedback="false"
              toggle-mask
              fluid
              class="mt-2"
              :invalid="!!changeEmailForm.errors.password"
            />
          </VFormItem>

          <div class="w-full">
            <VFormItem :error="$form.email?.error?.message ?? changeEmailForm.errors.email" class="flex w-full flex-col justify-between gap-3">
              <label for="email"> Введите новый e-mail, он будет указан в личном кабинете </label>
              <InputText
                v-model="changeEmailForm.email"
                placeholder="Введите новый email"
                name="email"
                type="email"
                fluid
                :invalid="!!changeEmailForm.errors.email"
              />
            </VFormItem>
          </div>
        </div>
      </div>
      <VButton type="submit" label="Сменить почту" class="w-fit" />
    </Form>
    <Form
      id="change-number"
      v-slot="$form"
      :resolver="changePhoneResolver"
      :initial-values="changePhoneForm"
      validate-on-blur
      :validate-on-value-update="false"
      class="flex flex-col gap-4"
      @submit="onPhoneChange"
    >
      <h2 class="text-small-medium mt-8">Смена номера</h2>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col items-start justify-between gap-4 md:flex-row">
          <VFormItem :error="$form.phone?.error?.message ?? changePhoneForm.errors.phone" class="flex w-full flex-col justify-between gap-3">
            <label for="phone"> Введите новый номер телефона, он будет указан в личном кабинете </label>
            <InputPhone
              v-model="changePhoneForm.phone"
              mask="+7 (999) 999-99-99"
              name="phone"
              unmask
              placeholder="+7 (000) 000-00-00"
              fluid
              :invalid="!!changePhoneForm.errors.phone"
              autocomplete="phone"
              class="max-w-[540px]"
            />
          </VFormItem>
        </div>
        <VButton type="submit" label="Сменить номер" class="w-fit text-nowrap" />
      </div>
    </Form>
    <VDialog v-model:visible="isCheckCodeOpen" :draggable="false" modal class="md:w-100" @hide="checkCodeForm.reset()">
      <h2 class="text-default-bold text-center">Смена номера</h2>
      <Form v-slot="$form" :resolver="checkCodeResolver" class="mt-3 flex flex-col gap-6" @submit="onCheckCode">
        <VFormItem :error="$form.code?.error?.message || checkCodeForm.errors.code">
          <label for="code" class="text-mob-small-reg">Введите код подтверждения</label>
          <VInputOtp v-model="checkCodeForm.code" name="code" />
        </VFormItem>
        <VButton type="submit" label="Подтвердить смену номера" />
      </Form>
      <SecondaryButton size="large" rounded fluid class="mt-2" :disabled="isActive" :loading="changePhoneForm.processing" @click="refreshCode">
        Отравить код повторно {{ timer }}
      </SecondaryButton>
    </VDialog>
    <div class="rounded-20 bg-filling mt-8 p-4">
      <h2 class="text-small-medium">Удаление аккаунта</h2>
      <p class="text-mob-small-reg mt-0.5">Карта лояльности будет аннулирована, данные удалены безвозвратно</p>
      <Link :href="route('user.profile.delete.page')">
        <VButton label="Удалить аккаунт" variant="delete" class="mt-4" />
      </Link>
    </div>
  </section>
</template>

<style scoped></style>
