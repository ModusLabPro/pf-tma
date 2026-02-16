<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { Form, FormSubmitEvent } from '@primevue/forms';
import { ref } from 'vue';

import IconArrowDown from '@/shared/icons/IconArrowDown.svg';
import IconPhoneCall from '@/shared/icons/IconPhoneCall.svg';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VFormItem } from '@/shared/ui/form-item';
import { VScrollPanel } from '@/shared/ui/scroll-panel';
import Checkbox from '@/shared/ui/volt/Checkbox.vue';
import VDialog from '@/shared/ui/volt/Dialog.vue';
import InputMask from '@/shared/ui/volt/InputMask.vue';
import InputText from '@/shared/ui/volt/InputText.vue';
import Popover from '@/shared/ui/volt/Popover.vue';
import RadioButton from '@/shared/ui/volt/RadioButton.vue';
import Textarea from '@/shared/ui/volt/Textarea.vue';

import { callMeModel, callMeResolver } from '../model/callMe.model';
import InputPhone from '@/shared/ui/input-phone/InputPhone.vue';

const allTimeIntervals = [
  {
    id: 1,
    label: 'С 10:00 до 11:00',
  },
  {
    id: 2,
    label: 'С 11:00 до 12:00',
  },
  {
    id: 3,
    label: 'С 12:00 до 13:00',
  },
  {
    id: 4,
    label: 'С 13:00 до 14:00',
  },
  {
    id: 5,
    label: 'С 14:00 до 15:00',
  },
  {
    id: 6,
    label: 'С 15:00 до 16:00',
  },
  {
    id: 7,
    label: 'С 16:00 до 17:00',
  },
  {
    id: 8,
    label: 'С 17:00 до 18:00',
  },
  {
    id: 8,
    label: 'С 18:00 до 19:00',
  },
  {
    id: 8,
    label: 'С 19:00 до 20:00',
  },
  {
    id: 8,
    label: 'С 20:00 до 21:00',
  },
];

const isCallModalOpen = ref<boolean>(false);
const isThankYouModalOpen = ref<boolean>(false);

const timeIntervalPopover = ref<InstanceType<typeof Popover>>();
const isTimeIntervalPopoverOpen = ref<boolean>(false);

const toggleMethodSelect = (e: Event): void => {
  timeIntervalPopover.value?.toggle(e);
  isTimeIntervalPopoverOpen.value = false;
};

const openModal = () => {
  isCallModalOpen.value = true;
};

const callMeForm = useForm<callMeModel>({
  name: '',
  phone: '',
  comment: '',
  time_interval: '',
  type: 'call_form',
  agreement: false,
});

const onSubmitCallMeForm = ({ valid }: FormSubmitEvent) => {
  if (valid) {
    callMeForm.post('/contactform/call-contact', {
      preserveScroll: true,
      onSuccess: () => {
        isCallModalOpen.value = false;
        isThankYouModalOpen.value = true;
      },
    });
  }
};

const { isMobile } = useScreenSize();
</script>

<template>
  <slot name="button" :open-modal="openModal" />
  <VDialog v-model:visible="isCallModalOpen" :draggable="false" modal class="w-82 md:w-110" @hide="callMeForm.reset()">
    <h2 class="text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0">Заказать звонок</h2>
    <p class="text-subsidiary-reg md:text-mob-small-reg mt-3 text-center md:mt-2">Оставьте заявку и мы свяжется с вами</p>
    <div class="mt-3 flex flex-col gap-2">
      <Form
        v-slot="$form"
        :resolver="callMeResolver"
        validate-on-blur
        :validate-on-value-update="false"
        :initial-values="callMeForm"
        class="mt-2 flex flex-col gap-2"
        @submit="onSubmitCallMeForm"
      >
        <VFormItem :error="$form.name?.error?.message || callMeForm.errors.name">
          <InputText v-model="callMeForm.name" name="name" type="text" placeholder="Ваше имя" class="w-full" />
        </VFormItem>
        <VFormItem class="w-full" :error="$form.phone?.error?.message || callMeForm.errors.phone">
          <InputPhone
            v-model="callMeForm.phone"
            mask="+7 (999) 999-99-99"
            name="phone"
            placeholder="+7 (000) 000-00-00"
            fluid
            autocomplete="phone"
            class="required-input max-w-[540px]"
          />
        </VFormItem>
        <VFormItem>
          <button
            class="bg-input rounded-20 flex max-h-[50px] w-full cursor-pointer items-center justify-between border border-transparent p-3.5 px-4 transition-all duration-200 ease-in"
            type="button"
            :class="{
              '!border-text border bg-transparent': callMeForm.time_interval || isTimeIntervalPopoverOpen,
            }"
            @click="toggleMethodSelect"
          >
            <div
              class="text-additional flex gap-2 transition-colors duration-200 ease-in"
              :class="{ 'text-text': callMeForm.time_interval || isTimeIntervalPopoverOpen }"
            >
              {{ callMeForm.time_interval ? callMeForm.time_interval : `Выберите ${isMobile ? '' : 'удобное'} время для звонка` }}
            </div>
            <IconArrowDown class="text-default transition-transform duration-200 ease-in" :class="{ 'rotate-180': isTimeIntervalPopoverOpen }" />
          </button>
        </VFormItem>

        <Popover ref="timeIntervalPopover" @show="isTimeIntervalPopoverOpen = true" @hide="isTimeIntervalPopoverOpen = false">
          <VScrollPanel :style="{ maxHeight: '200px' }">
            <div class="text-small-regular flex min-w-[240px] flex-col md:min-w-[320px]">
              <div
                v-for="contactMethod in allTimeIntervals"
                :key="contactMethod.id"
                class="hover:bg-input flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors duration-200 ease-in"
              >
                <RadioButton
                  v-model="callMeForm.time_interval"
                  :input-id="String(contactMethod.label)"
                  :name="String(contactMethod.label)"
                  :value="contactMethod.label"
                  @change="toggleMethodSelect"
                />
                <label class="w-full cursor-pointer" :for="String(contactMethod.label)">{{ contactMethod.label }}</label>
              </div>
            </div>
          </VScrollPanel>
        </Popover>

        <VFormItem class="text-subsidiary-reg md:text-mob-small-reg w-full" :error="$form.comment?.error?.message || callMeForm.errors.comment">
          <Textarea
            v-model="callMeForm.comment"
            name="text"
            placeholder="Комментарий"
            rows="4"
            :class="callMeForm.comment ? 'bg-transparent' : 'bg-light-gray'"
            class="resize-none"
          />
        </VFormItem>
        <VFormItem class="mt-4 flex flex-row gap-3">
          <Checkbox v-model="callMeForm.agreement" input-id="question-modal-checkbox" binary size="small" name="agreement" required />
          <label for="question-modal-checkbox" class="text-complimentary-reg"
            >Нажимая на кнопку «Заказать звонок» я подтверждаю, что ознакомился с
            <a href="/page/privacy-policy" target="_blank" class="hover:text-additional underline transition-colors">политикой конфиденциальности</a>
            и даю соглашение на обработку персональных данных</label
          >
        </VFormItem>
        <VButton label="Заказать звонок" class="mt-4 w-full" type="submit" />
      </Form>
    </div>
  </VDialog>
  <VDialog v-model:visible="isThankYouModalOpen" :draggable="false" modal class="w-82 md:w-110">
    <h2 class="text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0">Спасибо!</h2>
    <p class="text-subsidiary-reg md:text-mob-small-reg mt-3 text-center md:mt-2">Мы свяжемся с вами в ближайшее время.</p>
    <VButton label="Понятно" class="mt-6 w-full" @click.stop="isThankYouModalOpen = false" />
  </VDialog>
</template>

<style scoped></style>
