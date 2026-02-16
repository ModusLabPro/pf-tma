<script setup lang="ts">
import type { ICity } from '@/entities/city';
import type { IUserCity } from '@/entities/user';

import { Link, router, useForm } from '@inertiajs/vue3';
import axios from 'axios';
import { format } from 'date-fns';
import { computed, ref, shallowRef, useTemplateRef } from 'vue';

import { ProfileLayout } from '@/app/layouts';
import { IContactMethod } from '@/entities/address/model/addressTypes';
import { IUser } from '@/entities/user';
import { AddressFields } from '@/features/Address/address-fields';
import { ContactMethodsSelect } from '@/features/Address/contact-methods-select';
import IconPencil from '@/shared/icons/IconPencil.svg';
import IconVkQuick from '@/shared/icons/IconVkQuick.svg';
import IconYandexQuick from '@/shared/icons/IconYandexQuick.svg';
import { VkAuth } from '@/shared/o-auth';
import { DetachService } from '@/shared/o-auth/detach-service';
import { VTooltip } from '@/shared/tooltip';
import { VButton } from '@/shared/ui/button';
import { VFloatingInput } from '@/shared/ui/floating-input';
import { VFormItem } from '@/shared/ui/form-item';
import Button from '@/shared/ui/volt/Button.vue';
import Checkbox from '@/shared/ui/volt/Checkbox.vue';
import DatePicker from '@/shared/ui/volt/DatePicker.vue';
import InputMask from '@/shared/ui/volt/InputMask.vue';
import InputText from '@/shared/ui/volt/InputText.vue';
import Popover from '@/shared/ui/volt/Popover.vue';
import VRadioButton from '@/shared/ui/volt/RadioButton.vue';
import { ISocialAuthTypes } from '@/widgets/auth/model/socialAuthTypes';

import { editUserProfileSchema, profileEditSchema } from '../model/edit.model';

defineOptions({
  layout: ProfileLayout,
});

const selectedPrimary = ref();
const addAddress = () => {
  form.addresses?.push({
    city_id: 0,
    postal_code: '',
    city: '',
    street: '',
    house: '',
    apartment: '',
    entrance: '',
    floor: '',
    delivery_zone_id: null,
    value_dadata: '',
    is_primary: false,
  });
  selectedCityNames.value.push('');
  isCitySelectOpens.value.push(false);
};

const removeAddress = (index: number) => {
  if (form.addresses && form.addresses.length > 1) {
    form.addresses.splice(index, 1);
    selectedCityNames.value.splice(index, 1);
    isCitySelectOpens.value.splice(index, 1);
    if (selectedPrimary.value >= form.addresses.length) {
      selectedPrimary.value = form.addresses.length - 1;
    }
  }
};

const props = defineProps<{
  auth: { user: IUser };
  cities: ICity[];
  user_city: IUserCity;
  allContactMethods: IContactMethod[];
  userContactMethods: Array<number>;
  social_auth: ISocialAuthTypes;
}>();

const isCitySelectOpens = ref<boolean[]>([]);
const selectedCityNames = ref<string[]>([]);

// const contactMethodsPop = ref<InstanceType<typeof Popover>>();
// const isMethodSelectOpen = ref<boolean>(false);

// const toggleMethodSelect = (e: Event): void => {
//   contactMethodsPop.value?.toggle(e);
//   isMethodSelectOpen.value = false;
// };
//
// const clearContactMethods = (): void => {
//   form.contact_methods = [];
// };

const form = useForm<Partial<profileEditSchema>>({
  name: props.auth.user.name ?? '',
  second_name: props.auth.user.second_name ?? '',
  email: props.auth.user.email ?? undefined,
  phone: props.auth.user.phone ?? undefined,
  gender: props.auth.user.gender ?? undefined,
  last_name: props.auth.user.last_name ?? '',
  contact_methods: props.userContactMethods ?? [],
  birth_date: props.auth.user.birth_date ? props.auth.user.birth_date : undefined,
  addresses:
    props.auth.user.addresses.length > 0
      ? props.auth.user.addresses
      : [
          {
            city_id: 0,
            postal_code: '',
            value_dadata: '',
            delivery_zone_id: null,
            city: '',
            street: '',
            house: '',
            apartment: '',
            entrance: '',
            floor: '',
            is_primary: true,
            car_pass: false,
          },
        ],
}) as ReturnType<typeof useForm<Partial<profileEditSchema>>> & { errors: Record<string, string> };

selectedCityNames.value = form.addresses?.map(() => '') ?? [];
isCitySelectOpens.value = form.addresses?.map(() => false) ?? [];

form?.addresses?.forEach((address, index) => {
  const city = props.cities.find((c) => c.id === address.city_id);
  if (city) selectedCityNames.value[index] = city.name;
});

const primaryIndex = form?.addresses?.findIndex((a) => a.is_primary);
if (primaryIndex !== -1) selectedPrimary.value = primaryIndex;

const errors = ref<Record<string, string>>({});

const validateField = (path: string) => {
  console.log('validating', path);
  const data = form.data();
  const result = editUserProfileSchema.safeParse(data);
  if (!result.success) {
    const fieldError = result.error.errors.find((err) => err.path.join('.') === path);
    if (fieldError) {
      errors.value[path] = fieldError.message;
      return false;
    }
  }
  delete errors.value[path];
  return true;
};

const validateAll = (): boolean => {
  errors.value = {};
  const data = form.data();
  const result = editUserProfileSchema.safeParse(data);
  const formatted: Record<string, string> = {};
  if (!result.success) {
    result.error.errors.forEach((err) => {
      const path = err.path.join('.');
      formatted[path] = err.message;
    });
  }
  if (data.addresses) {
    data.addresses.forEach((address, index) => {
      const city = props.cities.find((c) => c.id === address.city_id);
      if (city?.delivery_zones && city?.delivery_zones?.length > 0 && (address.delivery_zone_id === null || address.delivery_zone_id === undefined)) {
        formatted[`addresses.${index}.delivery_zone_id`] = 'Обязательное поле';
      }
    });
  }
  errors.value = formatted;
  console.log(errors.value);
  return Object.keys(formatted).length === 0;
};

const submit = (): void => {
  if (form.addresses) {
    form.addresses.forEach((address, index) => {
      address.is_primary = index === selectedPrimary.value;
    });
  }

  if (!validateAll()) {
    return;
  }

  form
    .transform((data) => {
      const newData = { ...data };
      if (newData.addresses) {
        // newData.addresses = newData.addresses.filter((address) => {
        //   const isEmpty =
        //     address.city_id === 0 &&
        //     !address?.city?.trim() &&
        //     !address.house?.trim() &&
        //     (!address.apartment || !address.apartment.trim());
        //   return !isEmpty;
        // });
        if (newData.addresses.length === 0) {
          delete newData.addresses;
        }
      }
      return newData;
    })
    .put('/user/profile/update', {
      preserveScroll: true,
    });
};

const popover = useTemplateRef('popover');

const togglePopover = (event: Event): void => {
  popover.value?.toggle(event);
};

const isCalendarOpen = shallowRef<boolean>(false);

const tempDate = shallowRef<Date | null>(form.birth_date ? new Date(form.birth_date) : null);

const birthDateDisplay = computed({
  get: () => {
    return tempDate.value ? format(tempDate.value, 'dd.MM.yyyy') : '';
  },
  set: (val: string) => {
    const parts = val.split('.');
    if (parts.length === 3) {
      const [day, month, year] = parts.map(Number);
      const d = new Date(year, month - 1, day);
      if (!isNaN(d.getTime())) {
        tempDate.value = d;
      }
    }
  },
});

const onApplyDeliveryDate = (event: Event): void => {
  if (tempDate.value) {
    form.birth_date = format(tempDate.value, 'yyyy-MM-dd');
  } else {
    form.birth_date = undefined;
  }
  popover.value?.toggle(event);
};

const onSuccessVkAuth = (data: any): void => {
  console.log(data);
  fetch('/auth/vk/callback', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((resp) => {
      if (resp.success) {
        router.reload();
      }
    })
    .catch((err) => console.error('Ошибка:', err));
};
</script>

<template>
  <div class="w-full max-md:p-6">
    <form id="edit-profile-from" class="flex w-full flex-col gap-8" @submit.prevent="submit">
      <div>
        <h2 class="text-default-bold">Личные данные</h2>
        <div class="mt-4 grid grid-cols-1 items-start gap-x-2 gap-y-2 md:grid-cols-2 md:gap-y-4 lg:grid-cols-3">
          <VFloatingInput
            v-model="form.last_name"
            class="w-full"
            name="last_name"
            label="Ваша фамилия"
            :error="errors.last_name"
            required
            clearable
            @blur="validateField('last_name')"
          />
          <VFloatingInput
            v-model="form.name"
            class="w-full"
            name="name"
            label="Ваше имя"
            :error="errors.name"
            required
            clearable
            @blur="validateField('name')"
          />
          <VFloatingInput
            v-model="form.second_name"
            class="w-full"
            name="second_name"
            label="Ваше отчество"
            :error="errors.second_name"
            clearable
            @blur="validateField('second_name')"
          />
          <VFormItem>
            <div class="rounded-20 transition-colors">
              <VFloatingInput
                v-model="birthDateDisplay"
                class="w-full"
                name="birth_date"
                :label="`Дата рождения ${!!form?.birth_date ? '(меняется через тех. поддержку)' : ''} `"
                readonly
                :disabled="!!form?.birth_date"
                @click.stop="togglePopover"
              />
              <Popover ref="popover" append-to="self" class="calendar-popover" @show="isCalendarOpen = true" @hide="isCalendarOpen = false">
                <DatePicker v-model="tempDate" :max-date="new Date()" inline>
                  <template #footer>
                    <div class="mt-4 flex justify-end">
                      <Button size="small" label="Применить" rounded ml-auto @click="onApplyDeliveryDate" />
                    </div>
                  </template>
                </DatePicker>
              </Popover>
            </div>
          </VFormItem>
          <div class="ml-4">
            <div class="flex items-center gap-6">
              <p class="text-mob-small-reg text-additional">Пол</p>
              <div class="flex items-center gap-2">
                <VRadioButton v-model="form.gender" input-id="man" name="gender" value="man" />
                <label for="man" class="text-mob-small-reg">Мужской</label>
              </div>
              <div class="flex items-center gap-2">
                <VRadioButton v-model="form.gender" input-id="woman" name="gender" value="woman" />
                <label for="woman" class="text-mob-small-reg">Женский</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 class="text-default-bold">Контактные данные</h2>
        <div class="mt-4 flex flex-col items-stretch gap-2 md:flex-row">
          <VFloatingInput v-model="form.email" name="email" label="Ваш e-mail ">
            <template #default>
              <InputText v-model="form.email" class="w-full" disabled />
              <Link
                href="/user/profile/settings#change-email"
                class="text-additional absolute top-[17px] right-4 z-50 cursor-pointer transition-all duration-200"
              >
                <VTooltip value="Чтобы изменить e-mail, нажмите на иконку редактирования" class="!max-w-40">
                  <IconPencil class="cursor-pointer" />
                </VTooltip>
              </Link>
            </template>
          </VFloatingInput>
          <VFloatingInput v-model="form.phone" name="phone" label="Ваш номер">
            <template #default>
              <InputMask v-model="form.phone" name="phone" mask="+7 (999) 999-99-99" unmask disabled fluid autocomplete="phone" />

              <Link
                href="/user/profile/settings#change-number"
                class="text-additional absolute top-[17px] right-4 z-50 cursor-pointer transition-all duration-200"
              >
                <VTooltip value="Чтобы изменить номер, нажмите на иконку редактирования" class="!max-w-40">
                  <IconPencil class="cursor-pointer" />
                </VTooltip>
              </Link>
            </template>
          </VFloatingInput>

          <VFormItem class="w-full">
            <ContactMethodsSelect v-model="form.contact_methods" :options="allContactMethods" />
            <!--            <button-->
            <!--              class="bg-input rounded-20 flex max-h-[50px] w-full cursor-pointer items-center justify-between border border-transparent p-3.5 px-4 transition-all duration-200 ease-in"-->
            <!--              type="button"-->
            <!--              :class="{-->
            <!--                '!border-text border bg-transparent': (form.contact_methods && form.contact_methods.length > 0) || isMethodSelectOpen,-->
            <!--              }"-->
            <!--              @click="toggleMethodSelect"-->
            <!--            >-->
            <!--              <div-->
            <!--                class="text-additional flex gap-2 transition-colors duration-200 ease-in"-->
            <!--                :class="{ 'text-text': (form.contact_methods && form.contact_methods.length > 0) || isMethodSelectOpen }"-->
            <!--              >-->
            <!--                {{ form.contact_methods && form.contact_methods.length > 0 ? `Выбрано` : 'Способ связи' }}-->
            <!--                <div-->
            <!--                  v-if="form.contact_methods && form.contact_methods.length > 0"-->
            <!--                  class="text-subsidiary-reg bg-text flex items-center gap-1 rounded-full py-0.5 pr-1 pl-2 text-white"-->
            <!--                >-->
            <!--                  <span> {{ form.contact_methods.length }}</span>-->
            <!--                  <button type="button" class="bg-filling p text-additional cursor-pointer rounded-full" @click.stop="clearContactMethods">-->
            <!--                    <IconXCircle class="h-4 w-4" />-->
            <!--                  </button>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--              <IconArrowDown class="transition-transform duration-200 ease-in" :class="{ 'rotate-180': isMethodSelectOpen }" />-->
            <!--            </button>-->
          </VFormItem>
          <!--          <Popover ref="contactMethodsPop" @show="isMethodSelectOpen = true" @hide="isMethodSelectOpen = false">-->
          <!--            <div class="text-small-regular flex min-w-[320px] flex-col">-->
          <!--              <div-->
          <!--                v-for="contactMethod in allContactMethods"-->
          <!--                :key="contactMethod.id"-->
          <!--                class="hover:bg-input flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors duration-200 ease-in"-->
          <!--              >-->
          <!--                <Checkbox-->
          <!--                  v-model="form.contact_methods"-->
          <!--                  :input-id="String(contactMethod.id)"-->
          <!--                  :name="String(contactMethod.id)"-->
          <!--                  :value="contactMethod.id"-->
          <!--                />-->
          <!--                <label class="w-full cursor-pointer" :for="String(contactMethod.id)">{{ contactMethod.name }}</label>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </Popover>-->
        </div>
      </div>
      <div>
        <div>
          <h2 class="text-default-bold">Адреса</h2>
          <p class="text-additional mt-4">От адреса зависит ассортимент, цены и условия получения заказа</p>
        </div>
        <AddressFields
          v-for="(address, index) in form.addresses"
          :key="index"
          v-model:city-id="address.city_id"
          v-model:postal-code="address.postal_code"
          v-model:floor="address.floor"
          v-model:entrance="address.entrance"
          v-model:value-dadata="address.value_dadata"
          v-model:delivery-zone-id="address.delivery_zone_id"
          v-model:apartment="address.apartment"
          class="border-b-filling mt-2 flex flex-col gap-4 border-b pb-4 last:border-b-0"
          :index="String(index)"
          :errors="errors ?? form.errors"
          :validate-field="validateField"
        >
          <template #additionalFields>
            <div class="grid grid-cols-2 gap-2 lg:grid-cols-[1.5fr_2fr_1fr]">
              <div class="flex items-center gap-3 max-lg:col-span-2">
                <Checkbox v-model="address.car_pass" :input-id="`car_pass_checkbox-${index}`" binary size="small" :name="`agreement-${index}`" />
                <label :for="`car_pass_checkbox-${index}`">Нужен пропуск для авто</label>
              </div>
              <div class="flex w-full items-center gap-2">
                <VRadioButton v-model="selectedPrimary" :input-id="`primary-${index}`" name="primary" :value="index" />
                <label :for="`primary-${index}`" class="text-mob-small-reg">Сделать адрес основным</label>
              </div>
              <button
                type="button"
                class="bg-filling text-mob-small-reg disabled:!text-additional cursor-pointer justify-self-end rounded-full px-6 py-4 text-nowrap disabled:cursor-not-allowed disabled:!bg-[#CDD4D8]"
                :disabled="form?.addresses ? form?.addresses?.length <= 1 : false"
                @click="removeAddress(index)"
              >
                Удалить адрес
              </button>
            </div>
          </template>
        </AddressFields>
        <VButton label="Добавить новый адрес" type="button" class="mt-4" variant="outline" @click="addAddress" />
      </div>
      <div>
        <h2 class="text-default-bold">Быстрый вход через соцсети</h2>
        <div class="mt-4">
          <p class="text-mob-small-reg text-additional">Привязанные учетные записи</p>
          <div class="mt-2 flex flex-col items-stretch gap-2 lg:flex-row">
            <div v-if="social_auth.yandex_available" class="bg-input rounded-20 flex w-full items-center justify-between px-4 py-2 lg:max-w-1/2">
              <div class="flex items-center gap-2">
                <IconYandexQuick class="text-additional h-5 w-5" />
                <p class="text-mob-small-reg text-additional">Яндекс</p>
              </div>
              <a v-if="!auth.user.yandex_id" :href="route('yandex.get')">
                <Button variant="outlined" size="small" rounded label="Подключить" />
              </a>
              <DetachService v-else service="yandex" />
            </div>
            <div v-if="social_auth.vk_available" class="bg-input rounded-20 flex w-full items-center justify-between px-4 py-2 lg:max-w-1/2">
              <div class="flex items-center gap-2">
                <IconVkQuick class="text-additional h-5 w-5" />
                <p class="text-mob-small-reg text-additional">Вконтакте</p>
              </div>

              <VkAuth v-if="!auth.user.vk_id" class="w-fit" custom :handler="onSuccessVkAuth">
                <template #default="{ loginWithVK }">
                  <Button variant="outlined" size="small" rounded label="Подключить" @click="loginWithVK" />
                </template>
              </VkAuth>
              <DetachService v-else service="vk" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col-reverse items-stretch justify-center gap-2 md:flex-row md:gap-8">
        <Link
          :href="route('user.profile.index')"
          class="bg-filling hover:bg-filling/60 rounded-full px-6 py-4 transition-colors duration-200 ease-in"
        >
          Отменить
        </Link>
        <VButton label="Сохранить изменения" type="submit" form="edit-profile-from" :disabled="form.processing" />
      </div>
    </form>
  </div>
</template>

<style>
.calendar-popover {
  border-radius: 20px;
  border: none;

  [data-pc-section='content'] {
    padding: 0 !important;
  }
}
</style>
