<script setup lang="ts">
import type { FormSubmitEvent } from '@primevue/forms';

import { Head, Link, useForm } from '@inertiajs/vue3';
import { Form } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { onMounted, ref, useId } from 'vue';
import { z } from 'zod';

import { aboutPageProps } from '@/pages/about/model/aboutTypes';
import IconCaretLeft from '@/shared/icons/IconCaretLeft.svg';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg';
import { personInitials } from '@/shared/lib/helpers/personInitials';
import { VButton } from '@/shared/ui/button';
import { VContainer } from '@/shared/ui/container';
import { VFormItem } from '@/shared/ui/form-item';
import { VPicture } from '@/shared/ui/picture';
import { VSection } from '@/shared/ui/section';
import { VNavigationButton, VSlider } from '@/shared/ui/slider';
import Avatar from '@/shared/ui/volt/Avatar.vue';
import Checkbox from '@/shared/ui/volt/Checkbox.vue';
import VDialog from '@/shared/ui/volt/Dialog.vue';
import InputMask from '@/shared/ui/volt/InputMask.vue';
import InputText from '@/shared/ui/volt/InputText.vue';
import Rating from '@/shared/ui/volt/Rating.vue';
import Textarea from '@/shared/ui/volt/Textarea.vue';
import InputPhone from '@/shared/ui/input-phone/InputPhone.vue';

const props = defineProps<aboutPageProps>();

onMounted(() => {
  const aboutWrappers = document.querySelectorAll('.about-wrapper');
  aboutWrappers.forEach((elem) => {
    elem.addEventListener('click', (e) => {
      e.stopPropagation();
      if (elem.classList.contains('active')) {
        elem.classList.remove('active');
      } else {
        elem.classList.add('active');
      }
    });
  });
});

const isJoinTeamModalOpen = ref<boolean>(false);
const isQuestionModalOpen = ref<boolean>(false);

const joinTeamSchema = z.object({
  name: z.string({ required_error: 'Обязательное поле' }).min(1, 'Обязательное поле'),
  phone: z.string({ required_error: 'Обязательное поле' }).min(1, 'Обязательное поле'),
  email: z.string({ required_error: 'Обязательное поле' }).email('Введите правильный e-mail'),
  preference: z.string({ required_error: 'Обязательное поле' }).min(1, 'Обязательное поле'),
  comment: z.string().optional(),
  type: z.string(),
  agreement: z.boolean().refine((val) => val, {
    message: 'Обязательное поле',
    path: ['agreement'],
  }),
});

const questionSchema = z.object({
  name: z.string({ required_error: 'Обязательное поле' }).min(1, 'Обязательное поле'),
  phone: z.string({ required_error: 'Обязательное поле' }).min(1, 'Обязательное поле'),
  email: z.string({ required_error: 'Обязательное поле' }).email('Введите правильный e-mail'),
  comment: z.string().optional(),
  type: z.string(),
  agreement: z.boolean().refine((val) => val, {
    message: 'Обязательное поле',
    path: ['agreement'],
  }),
});

type questionModel = z.infer<typeof questionSchema>;
type joinTeamModel = z.infer<typeof joinTeamSchema>;

const joinTeamForm = useForm<joinTeamModel>({
  name: '',
  phone: '',
  email: '',
  preference: '',
  comment: '',
  type: 'interview',
  agreement: false,
});

const questionForm = useForm<questionModel>({
  name: '',
  phone: '',
  email: '',
  comment: '',
  agreement: false,
  type: 'question_form',
});

const joinTeamResolver = zodResolver(joinTeamSchema);
const questionResolver = zodResolver(questionSchema);

const onSubmitJoinTeamForm = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    joinTeamForm.post('/contactform/call-contact', {
      preserveScroll: true,
      onSuccess: () => {
        isJoinTeamModalOpen.value = false;
        joinTeamForm.reset();
      },
    });
  }
};

const onSubmitQuestionForm = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    questionForm.post('/contactform/call-contact', {
      preserveScroll: true,
      onSuccess: () => {
        isQuestionModalOpen.value = false;
        questionForm.reset();
      },
    });
  }
};
</script>

<template>
  <Head v-if="props.seoData">
    <title>{{ props.seoData.seo_title }}</title>
    <meta v-if="props.seoData.seo_description" name="description" :content="props.seoData.seo_description" />
    <meta v-if="props.seoData.seo_keywords" name="keywords" :content="props.seoData.seo_keywords" />
  </Head>
  <VContainer>
    <VDialog v-model:visible="isJoinTeamModalOpen" :draggable="false" modal class="max-md:mx-4 md:w-110" @hide="joinTeamForm.reset()">
      <h2 class="text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0">Присоединяйся к нашей команде</h2>
      <p class="text-subsidiary-reg md:text-mob-small-reg mt-3 text-center md:mt-2">Оставь свои контактные данные</p>
      <div class="mt-3 flex flex-col gap-2">
        <Form
          v-slot="$form"
          :resolver="joinTeamResolver"
          validate-on-blur
          :validate-on-value-update="false"
          :initial-values="joinTeamForm"
          class="mt-2 flex flex-col gap-2"
          @submit="onSubmitJoinTeamForm"
        >
          <VFormItem :error="$form.name?.error?.message || joinTeamForm.errors.name">
            <InputText v-model="joinTeamForm.name" name="name" type="text" placeholder="Ваше имя" class="w-full" />
          </VFormItem>
          <VFormItem class="w-full" :error="$form.phone?.error?.message || joinTeamForm.errors.phone">
            <InputPhone
              v-model="joinTeamForm.phone"
              mask="+7 (999) 999-99-99"
              name="phone"
              unmask
              placeholder="+7 (000) 000-00-00"
              fluid
              autocomplete="phone"
              class="max-w-[540px]"
            />
          </VFormItem>
          <VFormItem :error="$form.email?.error?.message || joinTeamForm.errors.email">
            <InputText v-model="joinTeamForm.email" name="email" type="email" placeholder="Ваш e-mail" class="w-full" />
          </VFormItem>
          <VFormItem :error="$form.preference?.error?.message || joinTeamForm.errors.preference">
            <InputText v-model="joinTeamForm.preference" name="preference" type="text" placeholder="Желаемая должность" />
          </VFormItem>
          <VFormItem
            class="text-subsidiary-reg md:text-mob-small-reg mt-4 w-full"
            :error="$form.comment?.error?.message || joinTeamForm.errors.comment"
          >
            <label for="text">Расскажите о себе</label>
            <Textarea
              v-model="joinTeamForm.comment"
              name="text"
              placeholder="Комментарий"
              rows="4"
              :class="joinTeamForm.comment ? 'bg-transparent' : 'bg-light-gray'"
              class="mt-1 resize-none"
            />
          </VFormItem>
          <VFormItem class="mt-2 flex flex-row gap-3">
            <Checkbox v-model="joinTeamForm.agreement" input-id="join-team-modal-checkbox" binary size="small" name="agreement" required />
            <label for="join-team-modal-checkbox" class="text-complimentary-reg"
              >Нажимая на кнопку «Отправить» я подтверждаю, что ознакомился с
              <a href="/page/privacy-policy" target="_blank" class="hover:text-additional underline transition-colors"
                >политикой конфиденциальности</a
              >
              и даю соглашение на обработку персональных данных</label
            >
          </VFormItem>
          <VButton label="Отправить" class="mt-4 w-full" type="submit" />
        </Form>
      </div>
    </VDialog>
    <VDialog v-model:visible="isQuestionModalOpen" :draggable="false" modal class="max-md:mx-4 md:w-110" @hide="questionForm.reset()">
      <h2 class="text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0">Остались вопросы?</h2>
      <p class="text-subsidiary-reg md:text-mob-small-reg mt-3 text-center md:mt-2">Оставьте заявку и мы свяжемся с вами в ближайшее вермя</p>
      <div class="mt-3 flex flex-col gap-2">
        <Form
          v-slot="$form"
          :resolver="questionResolver"
          validate-on-blur
          :validate-on-value-update="false"
          :initial-values="questionForm"
          class="mt-2 flex flex-col gap-2"
          @submit="onSubmitQuestionForm"
        >
          <VFormItem :error="$form.name?.error?.message || questionForm.errors.name">
            <InputText v-model="questionForm.name" name="name" type="text" placeholder="Ваше имя" class="w-full" />
          </VFormItem>
          <VFormItem class="w-full" :error="$form.phone?.error?.message || questionForm.errors.phone">
            <InputPhone
              v-model="questionForm.phone"
              mask="+7 (999) 999-99-99"
              name="phone"
              unmask
              placeholder="+7 (000) 000-00-00"
              fluid
              autocomplete="phone"
              class="max-w-[540px]"
            />
          </VFormItem>
          <VFormItem :error="$form.email?.error?.message || questionForm.errors.email">
            <InputText v-model="questionForm.email" name="email" type="email" placeholder="Ваш e-mail" class="w-full" />
          </VFormItem>

          <VFormItem class="text-subsidiary-reg md:text-mob-small-reg w-full" :error="$form.comment?.error?.message || questionForm.errors.comment">
            <Textarea
              v-model="questionForm.comment"
              name="text"
              placeholder="Сообщение"
              rows="4"
              :class="questionForm.comment ? 'bg-transparent' : 'bg-light-gray'"
              class="resize-none"
            />
          </VFormItem>
          <VFormItem class="mt-4 flex flex-row gap-3">
            <Checkbox v-model="questionForm.agreement" input-id="question-modal-checkbox" binary size="small" name="agreement" required />
            <label for="question-modal-checkbox" class="text-complimentary-reg"
              >Нажимая на кнопку «Отправить» я подтверждаю, что ознакомился с
              <a href="/page/privacy-policy" target="_blank" class="hover:text-additional underline transition-colors"
                >политикой конфиденциальности</a
              >
              и даю соглашение на обработку персональных данных</label
            >
          </VFormItem>
          <VButton label="Отправить" class="mt-4 w-full" type="submit" />
        </Form>
      </div>
    </VDialog>
    <div class="px-6 md:px-8">
      <nav class="text-complimentary-reg my-2 flex w-fit items-center gap-1 rounded-full px-3 py-2 md:hidden">
        <a class="hover:text-additional transition-colors duration-200 ease-in" href="/">Главная</a>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path d="M9 4.5L16.5 12L9 19.5" stroke="#867F7F" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </svg>
        <a class="text-additional" href="/page/company/about-us">О нас</a>
      </nav>
    </div>
    <div
      class="rounded-20 relative mx-6 mb-4 h-156 bg-[url(/images/about/about-bg.webp)] bg-cover bg-center bg-no-repeat px-4 pt-4 pb-4 md:mx-8 md:h-130 lg:px-8 lg:pt-8"
    >
      <div class="rounded-20 absolute inset-0 z-0 bg-black/20">&nbsp;</div>
      <div class="relative z-10 flex h-full flex-col md:pb-8">
        <nav class="bg-input text-complimentary-reg flex w-fit items-center gap-1 rounded-full px-3 py-2 max-md:hidden">
          <a class="hover:text-additional transition-colors duration-200 ease-in" href="/">Главная</a>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M9 4.5L16.5 12L9 19.5" stroke="#867F7F" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
          <a class="text-additional" href="/page/company/about-us">О нас</a>
        </nav>
        <div class="flex h-full flex-col justify-between text-white md:flex-row">
          <div class="flex max-w-176 flex-auto flex-col gap-3 md:mt-8">
            <div
              class="rounded-20 border-complimentary text-subsidiary-reg md:text-mob-small-reg relative w-fit border bg-[#e5e5e5]/10 px-4 py-3 backdrop-blur-[10px] max-md:p-4"
            >
              Наша миссия и ценности
            </div>
            <h1 class="font-vast lg:text-vast-title-bold text-vast-mob-title-bold text-white">
              Prime Foods наполняет радостью и удовольствием жизнь людей
            </h1>
            <p class="text-mob-small-bold md:text-default-medium font-normal">
              предоставляя продукты питания эталонного качества, обладающие потрясающим вкусом и честным составом.
            </p>
            <div class="mt-4 flex items-end">
              <Link href="#firstSection">
                <button class="v-button v-button_light">
                  <span class="v-button__label">Подробнее</span>
                  <span class="v-button__arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3200_28568)">
                        <path d="M5 15L15 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M6.875 5H15V13.125" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3200_28568">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div class="flex items-end justify-end">
            <div class="relative h-44 w-80 md:h-52 md:w-80">
              <div class="absolute inset-0 overflow-hidden">
                <svg width="320" height="216" viewBox="0 0 320 216" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-full w-full">
                  <foreignObject x="-10" y="-10" width="340" height="236">
                    <div
                      xmlns="http://www.w3.org/1999/xhtml"
                      style="backdrop-filter: blur(5px); clip-path: url(#bgblur_0_4851_188430_clip_path); height: 100%; width: 100%"
                    ></div>
                  </foreignObject>
                  <g data-figma-bg-blur-radius="10">
                    <mask id="path-1-inside-1_4851_188430" fill="white">
                      <path
                        d="M300 0C311.046 0 320 8.95431 320 20V160.278C320 171.324 311.046 180.278 300 180.278H161.306C153.861 180.278 147.031 184.415 143.582 191.013L136.132 205.265C132.683 211.864 125.853 216 118.407 216H20C8.95431 216 5.1544e-07 207.046 0 196V20C5.1544e-07 8.95431 8.95431 0 20 0H300Z"
                      />
                    </mask>
                    <path
                      d="M300 0C311.046 0 320 8.95431 320 20V160.278C320 171.324 311.046 180.278 300 180.278H161.306C153.861 180.278 147.031 184.415 143.582 191.013L136.132 205.265C132.683 211.864 125.853 216 118.407 216H20C8.95431 216 5.1544e-07 207.046 0 196V20C5.1544e-07 8.95431 8.95431 0 20 0H300Z"
                      fill="#E5E5E5"
                      fill-opacity="0.1"
                    />
                    <path
                      d="M320 20H321H320ZM0 196H-1H0ZM0 20H-1H0ZM136.132 205.265L135.246 204.802L136.132 205.265ZM143.582 191.013L144.468 191.476L143.582 191.013ZM300 0V1C310.493 1 319 9.50659 319 20H320H321C321 8.40202 311.598 -1 300 -1V0ZM320 20H319V160.278H320H321V20H320ZM300 180.278V179.278H161.306V180.278V181.278H300V180.278ZM143.582 191.013L142.696 190.55L135.246 204.802L136.132 205.265L137.018 205.728L144.468 191.476L143.582 191.013ZM118.407 216V215H20V216V217H118.407V216ZM20 216V215C9.50659 215 1 206.493 1 196H0H-1C-0.999999 207.598 8.40202 217 20 217V216ZM0 196H1V20H0H-1V196H0ZM0 20H1C1 9.50659 9.50659 1 20 1V0V-1C8.40202 -1 -0.999999 8.40202 -1 20H0ZM20 0V1H300V0V-1H20V0ZM136.132 205.265L135.246 204.802C131.969 211.071 125.481 215 118.407 215V216V217C126.226 217 133.396 212.657 137.018 205.728L136.132 205.265ZM161.306 180.278V179.278C153.488 179.278 146.317 183.621 142.696 190.55L143.582 191.013L144.468 191.476C147.745 185.208 154.233 181.278 161.306 181.278V180.278ZM320 160.278H319C319 170.772 310.493 179.278 300 179.278V180.278V181.278C311.598 181.278 321 171.876 321 160.278H320Z"
                      fill="#D4D3D3"
                      mask="url(#path-1-inside-1_4851_188430)"
                    />
                  </g>
                  <defs>
                    <clipPath id="bgblur_0_4851_188430_clip_path" transform="translate(10 10)">
                      <path
                        d="M300 0C311.046 0 320 8.95431 320 20V160.278C320 171.324 311.046 180.278 300 180.278H161.306C153.861 180.278 147.031 184.415 143.582 191.013L136.132 205.265C132.683 211.864 125.853 216 118.407 216H20C8.95431 216 5.1544e-07 207.046 0 196V20C5.1544e-07 8.95431 8.95431 0 20 0H300Z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div class="relative z-10 p-6 text-white">
                <h5 class="text-mob-small-bold md:text-default-medium max-md:px-2">Наша миссия</h5>
                <p class="text-subsidiary-reg md:text-mob-small-reg max-md:mt-2 max-md:px-2">
                  Каждый продукт тщательно отбирается, чтобы соответствовать высоким стандартам вкуса и качества.
                </p>
                <Link href="#firstSection" class="text-subsidiary-reg mt-4 flex items-center gap-2 px-2 md:mt-8"
                  ><span>Подробнее</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_6231_180780)">
                      <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_6231_180780">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="firstSection" class="flex flex-wrap gap-2 px-6 md:mt-17 md:px-8">
      <div class="rounded-20 bg-light-gray text-subsidiary-reg md:text-mob-small-reg flex items-center justify-center px-4 py-3">О нас</div>
      <div class="rounded-20 bg-light-gray text-subsidiary-reg md:text-mob-small-reg flex items-center justify-center px-4 py-3">Наши ценности</div>
      <div class="rounded-20 bg-light-gray text-subsidiary-reg md:text-mob-small-reg flex items-center justify-center px-4 py-3">Наша миссия</div>
      <div class="rounded-20 bg-light-gray text-subsidiary-reg md:text-mob-small-reg flex items-center justify-center px-4 py-3">
        Ключевые этапы развития
      </div>
    </div>
    <div class="mt-6 flex flex-col gap-4 px-6 md:mt-8 md:gap-8 md:px-8 lg:flex-row">
      <h3 class="text-default-bold md:text-heavy-bold">
        Мы компания-дистрибьютор эксклюзивных брендов: PRIMEBEEF и Заречное. Производители широкой линейки собственных продуктов под брендом Prime
        Foods.
      </h3>
      <div>
        <p class="text-subsidiary-reg md:text-default-medium font-normal">
          Мы просто делаем то, что умеем лучше всего! Prime Foods стремится расширять сообщество осознанных покупателей, которые разделяют наши
          ценности и страсть к качественной еде.
        </p>
        <p class="text-subsidiary-reg md:text-default-medium mt-4 font-normal">
          Мы просто делаем то, что умеем лучше всего! Prime Foods стремится расширять сообщество осознанных покупателей, которые разделяют наши
          ценности и страсть к качественной еде.
        </p>
      </div>
      <div>
        <img
          src="/images/about/about-additional.webp"
          alt="1"
          loading="lazy"
          class="rounded-20 hidden max-w-[352px] object-cover object-center lg:block"
        />
      </div>
    </div>
    <div class="mt-6 grid gap-8 px-6 md:mt-8 md:grid-cols-2 md:px-8 xl:grid-cols-4">
      <div>
        <img src="/images/about/about-meeting.webp" alt="1" loading="lazy" class="rounded-20 h-[200px] object-cover max-xl:w-full md:min-w-[352px]" />
      </div>
      <div class="bg-light-gray rounded-20 p-4">
        <div class="flex items-center justify-between gap-4">
          <h4 class="text-default-medium max-w-[230px]">Тех, кто так же увлечены искусством</h4>
          <div class="bg-text w-fit rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_4851_188561)">
                <path d="M5 15L15 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.875 5H15V13.125" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_4851_188561">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <p class="text-mob-small-reg mt-4">
          приготовления пищи, внимательны к деталям и хотят активно участвовать в формировании новой гастрономической культуры страны.
        </p>
      </div>
      <div>
        <img
          src="/images/about/about-additional.webp"
          alt="1"
          loading="lazy"
          class="rounded-20 h-[200px] object-cover object-center max-xl:w-full md:min-w-[352px]"
        />
      </div>
      <div class="bg-light-gray rounded-20 p-4">
        <div class="flex items-center justify-between gap-4">
          <h4 class="text-default-medium max-w-[250px]">Мы стремимся объединить тех, кто</h4>
          <div class="bg-text w-fit rounded-full p-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_4851_188561)">
                <path d="M5 15L15 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.875 5H15V13.125" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_4851_188561">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <p class="text-mob-small-reg mt-4">как и мы, не допускает компромиссов, когда дело касается выбора продуктов.</p>
      </div>
    </div>
    <div class="mt-10 px-6 md:mt-20 md:px-8">
      <h2 class="text-default-bold md:text-heavy-bold">История компании</h2>
      <div class="mt-6 md:mt-8">
        <div class="relative">
          <div class="absolute left-5 z-0 h-full w-px bg-[#c4bb9c] md:left-7 xl:top-[1.8125rem] xl:left-0 xl:h-px xl:w-full xl:translate-x-0"></div>

          <div class="relative z-10 grid gap-4 xl:grid-cols-5">
            <div class="about-wrapper max-xl:flex max-xl:items-start max-xl:gap-4">
              <div
                class="about-arrow text-default border-stroke relative z-10 w-fit rounded-full border bg-white p-2 transition-all duration-500 ease-in-out md:p-4"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4851_188684)">
                    <path d="M3.75 12H20.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4851_188684">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="mt-4">
                <p class="text-subsidiary-reg">Начало пути</p>
                <p class="about-year text-additional text-[60px] transition-colors duration-500 ease-in-out md:text-[100px]/[100%]">2008</p>
                <div class="about-content flex flex-col gap-3">
                  <h5 class="text-default-medium">Ввоз первых абердин-ангусов из США</h5>
                  <p class="text-mob-small-reg">
                    В 2008 году Центр генетики «Ангус», входящий в группу компаний «Заречное», импортировал в Россию первую партию из 250 нетелей и 10
                    быков породы абердин-ангус, положив начало высококачественному мясному производству в стране.
                  </p>
                </div>
              </div>
            </div>
            <div class="about-wrapper max-xl:flex max-xl:items-start max-xl:gap-4">
              <div
                class="about-arrow text-default border-stroke relative z-10 w-fit rounded-full border bg-white p-2 transition-all duration-500 ease-in-out md:p-4"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4851_188684)">
                    <path d="M3.75 12H20.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4851_188684">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="mt-4">
                <p class="text-subsidiary-reg">Создание бренда PRIMEBEEF</p>
                <p class="about-year text-additional text-[60px] transition-colors duration-500 ease-in-out md:text-[100px]/[100%]">2010</p>
                <div class="about-content flex flex-col gap-3">
                  <h5 class="text-default-medium">Запуск премиального бренда мраморной говядины</h5>
                  <p class="text-mob-small-reg">
                    В 2010 году был основан бренд Primebeef, специализирующийся на производстве высококачественной мраморной говядины, что стало
                    важным шагом в продвижении мясной культуры в России.
                  </p>
                </div>
              </div>
            </div>
            <div class="about-wrapper max-xl:flex max-xl:items-start max-xl:gap-4">
              <div
                class="about-arrow text-default border-stroke relative z-10 w-fit rounded-full border bg-white p-2 transition-all duration-500 ease-in-out md:p-4"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4851_188684)">
                    <path d="M3.75 12H20.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4851_188684">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="mt-4">
                <p class="text-subsidiary-reg">Расширение производственных мощностей</p>
                <p class="about-year text-additional text-[60px] transition-colors duration-500 ease-in-out md:text-[100px]/[100%]">2015</p>
                <div class="about-content flex flex-col gap-3">
                  <h5 class="text-default-medium">Увеличение поголовья и производственных объемов</h5>
                  <p class="text-mob-small-reg">
                    К 2015 году компания значительно увеличила поголовье скота и расширила производственные мощности, что позволило обеспечить
                    высококачественной говядиной не только ближайшие регионы, но и более отдаленные области России.
                  </p>
                </div>
              </div>
            </div>
            <div class="about-wrapper max-xl:flex max-xl:items-start max-xl:gap-4">
              <div
                class="about-arrow text-default border-stroke relative z-10 w-fit rounded-full border bg-white p-2 transition-all duration-500 ease-in-out md:p-4"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4851_188684)">
                    <path d="M3.75 12H20.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4851_188684">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="mt-4">
                <p class="text-subsidiary-reg">Запуск PRIMEBEEF Academy</p>
                <p class="about-year text-additional text-[60px] transition-colors duration-500 ease-in-out md:text-[100px]/[100%]">2018</p>
                <div class="about-content flex flex-col gap-3">
                  <h5 class="text-default-medium">Открытие образовательного центра для профессионалов кулинарии</h5>
                  <p class="text-mob-small-reg">
                    В 2018 году была основана Primebeef Academy — кулинарный и образовательный центр, направленный на повышение квалификации
                    шеф-поваров и популяризацию культуры потребления мраморной говядины.
                  </p>
                </div>
              </div>
            </div>
            <div class="about-wrapper max-xl:flex max-xl:items-start max-xl:gap-4">
              <div
                class="about-arrow text-default border-stroke relative z-10 w-fit rounded-full border bg-white p-2 transition-all duration-500 ease-in-out md:p-4"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_4851_188684)">
                    <path d="M3.75 12H20.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4851_188684">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div class="mt-4">
                <p class="text-subsidiary-reg">Торговый дом Prime Foods</p>
                <p class="about-year text-additional text-[60px] transition-colors duration-500 ease-in-out md:text-[100px]/[100%]">2025</p>
                <div class="about-content flex flex-col gap-3">
                  <h5 class="text-default-medium">Расширение ассортимента продукции компании</h5>
                  <p class="text-mob-small-reg">
                    В 2025 году Prime Foods начала расширять свой ассортимент, добавив к мраморной говядине другие премиальные продукты, укрепляя свои
                    позиции на рынке высококачественных мясных продуктов.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 px-6 md:mt-20 md:px-8">
      <h3 class="text-default-bold md:text-heavy-bold">Преимущества компании</h3>
      <div class="mt-6 grid gap-4 md:mt-8 md:gap-8 xl:grid-cols-2">
        <div>
          <img src="/images/about/about-meeting.webp" alt="встреча" class="rounded-20 w-full object-cover object-center max-md:max-h-[200px]" />
        </div>
        <div class="grid gap-2 md:gap-8 lg:grid-cols-2">
          <div class="rounded-20 border-stroke border p-3 md:p-4">
            <div class="flex items-start justify-between gap-4">
              <h4 class="text-mob-small-bold md:text-default-bold">Эксклюзивный дистрибьютор премиального бренда PRIMEBEEF</h4>
              <div class="bg-text w-fit rounded-full p-2 md:p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clip-path="url(#clip0_4851_188561)">
                    <path d="M5 15L15 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.875 5H15V13.125" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4851_188561">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <p class="text-subsidiary-reg md:text-mob-small-reg mt-3 md:mt-4">
              Мы поставляем высококачественную мраморную говядину от производителя, гарантируя стабильность поставок и контроль качества на каждом
              этапе.
            </p>
          </div>
          <div class="rounded-20 border-stroke border p-3 md:p-4">
            <div class="flex items-start justify-between gap-4">
              <h4 class="text-mob-small-bold md:text-default-bold">
                PRIMEBEEF: гастрономические пространства, мясные бутики и кейтеринг премиум-класса
              </h4>
              <div class="bg-text w-fit rounded-full p-2 md:p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clip-path="url(#clip0_4851_188561)">
                    <path d="M5 15L15 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.875 5H15V13.125" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4851_188561">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <p class="text-subsidiary-reg md:text-mob-small-reg mt-3 md:mt-4">
              Наши рестораны и сервисы предлагают гостям возможность попробовать лучшее мясо в авторских блюдах, заказать эксклюзивные продукты и
              организовать мероприятия.
            </p>
          </div>
          <div class="rounded-20 border-stroke border p-3 md:p-4">
            <div class="flex items-start justify-between gap-4">
              <h4 class="text-mob-small-bold md:text-default-bold">Собственные линейки премиальных продуктов: вкус, проверенный экспертами</h4>
              <div class="bg-text w-fit rounded-full p-2 md:p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clip-path="url(#clip0_4851_188561)">
                    <path d="M5 15L15 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.875 5H15V13.125" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4851_188561">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <p class="text-subsidiary-reg md:text-mob-small-reg mt-3 md:mt-4">
              Мы создаем широкую линейку собственных продуктов — от мраморной говядины и утки до деликатесов и полуфабрикатов, обеспечивая
              первоклассный вкус и удобство для покупателей.
            </p>
          </div>
          <div class="rounded-20 border-stroke border p-3 md:p-4">
            <div class="flex items-start justify-between gap-4">
              <h4 class="text-mob-small-bold md:text-default-bold">Станьте нашим партнером: работаем в России и за рубежом</h4>
              <div class="bg-text w-fit rounded-full p-2 md:p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g clip-path="url(#clip0_4851_188561)">
                    <path d="M5 15L15 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.875 5H15V13.125" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_4851_188561">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <p class="text-subsidiary-reg md:text-mob-small-reg mt-3 md:mt-4">
              Мы сотрудничаем с ведущими ритейлерами, маркетплейсами, дистрибьюторами и ресторанами, а также экспортируем продукцию в разные страны.
              Присоединяйтесь к нам, чтобы предлагать клиентам эталонные продукты высочайшего качества.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 px-6 md:mt-20 md:px-8">
      <h3 class="text-default-bold md:text-heavy-bold">Особенности нашей продукции</h3>
      <div class="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        <div class="flex flex-col gap-4 md:gap-8">
          <div class="flex items-center gap-4">
            <div class="bg-light-gray w-fit rounded-full p-3">
              <svg class="h-6 w-6" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5027_221397)">
                  <path
                    d="M26.5 27C28.433 27 30 25.433 30 23.5C30 21.567 28.433 20 26.5 20C24.567 20 23 21.567 23 23.5C23 25.433 24.567 27 26.5 27Z"
                    stroke="#02283F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.5 27C11.5376 27 14 24.5376 14 21.5C14 18.4624 11.5376 16 8.5 16C5.46243 16 3 18.4624 3 21.5C3 24.5376 5.46243 27 8.5 27Z"
                    stroke="#02283F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.5 23C9.32843 23 10 22.3284 10 21.5C10 20.6716 9.32843 20 8.5 20C7.67157 20 7 20.6716 7 21.5C7 22.3284 7.67157 23 8.5 23Z"
                    fill="#02283F"
                  />
                  <path
                    d="M29 21V16.75C28.9999 16.535 28.9306 16.3258 28.8023 16.1533C28.6739 15.9808 28.4934 15.8543 28.2875 15.7925L18 13V6H7V12"
                    stroke="#02283F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M5 6H7" stroke="#02283F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M18 6H20" stroke="#02283F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M5 12H8.5C11.0196 12 13.4359 13.0009 15.2175 14.7825C16.9991 16.5641 18 18.9804 18 21.5V23H23.035"
                    stroke="#02283F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M18 13V23" stroke="#02283F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M23 14.3538V9" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_5027_221397">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h5 class="text-mob-small-medium md:text-default-medium">Полный цикл производства</h5>
              <p class="text-subsidiary-reg md:text-mob-small-reg mt-2">от разведения бычков до их откорма и разделки</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="bg-light-gray w-fit rounded-full p-3">
              <svg class="h-6 w-6" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5027_221438)">
                  <path d="M16 29V11" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 19L10 16" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 16L22 13" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M16 22.245C17.4734 23.4275 19.3191 24.0477 21.2075 23.995C25.4488 23.8875 29.0113 20.2175 29 15.975C28.9955 14.3824 28.5157 12.8273 27.622 11.509C26.7284 10.1906 25.4615 9.16906 23.9838 8.57504C23.3857 6.93832 22.2991 5.52495 20.8711 4.52635C19.443 3.52775 17.7426 2.99219 16 2.99219C14.2575 2.99219 12.557 3.52775 11.129 4.52635C9.70093 5.52495 8.61431 6.93832 8.01628 8.57504C6.53773 9.16938 5.27036 10.1917 4.37664 11.511C3.48292 12.8304 3.00356 14.3865 3.00003 15.98C2.98878 20.2225 6.55253 23.8925 10.7938 24C12.6824 24.0511 14.5277 23.4291 16 22.245Z"
                    stroke="#02283F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5027_221438">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h5 class="text-mob-small-medium md:text-default-medium">Животных выращивают</h5>
              <p class="text-subsidiary-reg md:text-mob-small-reg mt-2">в экологически чистых районах</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="bg-light-gray w-fit rounded-full p-3">
              <svg class="h-6 w-6" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5027_221427)">
                  <path
                    d="M10.5334 21.4659L3.64718 18.9284C3.4573 18.8583 3.29347 18.7317 3.17775 18.5657C3.06204 18.3996 3 18.2021 3 17.9997C3 17.7973 3.06204 17.5997 3.17775 17.4337C3.29347 17.2676 3.4573 17.141 3.64718 17.0709L10.5334 14.5334L13.0709 7.64718C13.141 7.4573 13.2676 7.29347 13.4337 7.17775C13.5997 7.06204 13.7973 7 13.9997 7C14.2021 7 14.3996 7.06204 14.5657 7.17775C14.7317 7.29347 14.8583 7.4573 14.9284 7.64718L17.4659 14.5334L24.3522 17.0709C24.5421 17.141 24.7059 17.2676 24.8216 17.4337C24.9373 17.5997 24.9994 17.7973 24.9994 17.9997C24.9994 18.2021 24.9373 18.3996 24.8216 18.5657C24.7059 18.7317 24.5421 18.8583 24.3522 18.9284L17.4659 21.4659L14.9284 28.3522C14.8583 28.5421 14.7317 28.7059 14.5657 28.8216C14.3996 28.9373 14.2021 28.9994 13.9997 28.9994C13.7973 28.9994 13.5997 28.9373 13.4337 28.8216C13.2676 28.7059 13.141 28.5421 13.0709 28.3522L10.5334 21.4659Z"
                    stroke="#02283F"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M22 2V8" stroke="#02283F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M28 9V13" stroke="#02283F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M19 5H25" stroke="#02283F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26 11H30" stroke="#02283F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_5027_221427">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h5 class="text-mob-small-medium md:text-default-medium">Идеальная генетика</h5>
              <p class="text-subsidiary-reg md:text-mob-small-reg mt-2">
                на производство идут только молодые бычки мясных пород, преимущественно абердин-ангус
              </p>
            </div>
          </div>
          <div class="mt-8 hidden md:block">
            <img src="/images/about/about-additional2.webp" alt="Стейки" class="rounded-20 h-[132px] w-full object-cover object-center" />
          </div>
        </div>
        <div class="flex flex-col gap-4 md:gap-8">
          <div class="flex items-center gap-4">
            <div class="bg-light-gray w-fit rounded-full p-3">
              <svg class="h-6 w-6" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5027_221412)">
                  <path
                    d="M7 3C7 4.5913 7.63214 6.11742 8.75736 7.24264C9.88258 8.36786 11.4087 9 13 9H19C20.5913 9 22.1174 8.36786 23.2426 7.24264C24.3679 6.11742 25 4.5913 25 3"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 20H10C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28H22C24.2091 28 26 26.2091 26 24C26 21.7909 24.2091 20 22 20Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M10 24H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M20 24H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M12.5 17C13.3284 17 14 16.3284 14 15.5C14 14.6716 13.3284 14 12.5 14C11.6716 14 11 14.6716 11 15.5C11 16.3284 11.6716 17 12.5 17Z"
                    fill="currentColor"
                  />
                  <path
                    d="M19.5 17C20.3284 17 21 16.3284 21 15.5C21 14.6716 20.3284 14 19.5 14C18.6716 14 18 14.6716 18 15.5C18 16.3284 18.6716 17 19.5 17Z"
                    fill="currentColor"
                  />
                  <path
                    d="M20 9H24.0975C25.4836 8.99961 26.8271 9.47915 27.8997 10.3571C28.9723 11.2351 29.7078 12.4574 29.9813 13.8162C30.0082 13.9605 30.0031 14.1089 29.9663 14.251C29.9294 14.393 29.8618 14.5252 29.7682 14.6382C29.6745 14.7512 29.5571 14.8421 29.4244 14.9047C29.2916 14.9672 29.1467 14.9997 29 15H24"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.0002 9H7.90273C6.51662 8.99961 5.17313 9.47915 4.10055 10.3571C3.02796 11.2351 2.29245 12.4574 2.01898 13.8162C1.99202 13.9605 1.99713 14.1089 2.03395 14.251C2.07078 14.393 2.13842 14.5252 2.23207 14.6382C2.32572 14.7512 2.44308 14.8421 2.57584 14.9047C2.7086 14.9672 2.85349 14.9997 3.00023 15H8.00023"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 20.535V13C8 11.9391 8.42143 10.9217 9.17157 10.1716C9.92172 9.42143 10.9391 9 12 9H20C21.0609 9 22.0783 9.42143 22.8284 10.1716C23.5786 10.9217 24 11.9391 24 13V20.535"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5027_221412">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h5 class="text-mob-small-medium md:text-default-medium">200 дневный откорм</h5>
              <p class="text-subsidiary-reg md:text-mob-small-reg mt-2">
                только на основе пятикомпонентной кукурузной смеси, благодаря чему жир в мышечной ткани распределяется равномерно, а мясо обретает
                сочность и нежность и сладковатый вкус
              </p>
            </div>
          </div>
          <div class="mt-4 flex items-center gap-4">
            <div class="bg-light-gray w-fit rounded-full p-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3606_690)">
                  <path
                    d="M17.625 17.25H8.54719C8.19591 17.2499 7.85579 17.1266 7.58612 16.9015C7.31646 16.6764 7.13435 16.3637 7.07156 16.0181L4.56844 2.25H2.25"
                    stroke="currentcolor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.625 21C9.66053 21 10.5 20.1605 10.5 19.125C10.5 18.0895 9.66053 17.25 8.625 17.25C7.58947 17.25 6.75 18.0895 6.75 19.125C6.75 20.1605 7.58947 21 8.625 21Z"
                    stroke="currentcolor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17.625 21C18.6605 21 19.5 20.1605 19.5 19.125C19.5 18.0895 18.6605 17.25 17.625 17.25C16.5895 17.25 15.75 18.0895 15.75 19.125C15.75 20.1605 16.5895 21 17.625 21Z"
                    stroke="currentcolor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.61406 13.5H18.3844C18.7357 13.4999 19.0758 13.3766 19.3454 13.1515C19.6151 12.9264 19.7972 12.6137 19.86 12.2681L21 6H5.25"
                    stroke="currentcolor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3606_690">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h5 class="text-mob-small-medium md:text-default-medium">Продажа оптом и в розницу</h5>
              <p class="text-subsidiary-reg md:text-mob-small-reg mt-2">Быстрая доставка</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="bg-light-gray w-fit rounded-full p-3">
              <svg class="h-6 w-6" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5027_221448)">
                  <path d="M10 5V11" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10 16V28" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M26 21H19C19 21 19 8 26 5V28" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M6 5L5 11C5 12.3261 5.52678 13.5979 6.46447 14.5355C7.40215 15.4732 8.67392 16 10 16C11.3261 16 12.5979 15.4732 13.5355 14.5355C14.4732 13.5979 15 12.3261 15 11L14 5"
                    stroke="#02283F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5027_221448">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h5 class="text-mob-small-medium md:text-default-medium">Широчайший выбор</h5>
              <p class="text-subsidiary-reg md:text-mob-small-reg mt-2">
                стейки, антрекоты, филе, мякоти, вырезка, грудинка, лопатка, ребрышки и т.д.
              </p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="bg-light-gray w-fit rounded-full p-3">
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <g clip-path="url(#clip0_5027_221458)">
                  <path d="M12 20L11 16" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M20 20L21 16" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M16 20V16" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path
                    d="M21.7069 8.14C22.5296 7.95909 23.3813 7.95345 24.2063 8.12345C25.0314 8.29345 25.8114 8.63527 26.4956 9.12668C27.1798 9.61808 27.7528 10.2481 28.1775 10.9756C28.6021 11.7031 28.8687 12.5119 28.9601 13.3493C29.0514 14.1868 28.9654 15.034 28.7077 15.836C28.4499 16.638 28.0261 17.3767 27.464 18.0041C26.9018 18.6314 26.2138 19.1334 25.4448 19.4773C24.6758 19.8212 23.8431 19.9993 23.0007 20H9.00066C8.15828 19.9993 7.32549 19.8212 6.55649 19.4773C5.78749 19.1334 5.09953 18.6314 4.53737 18.0041C3.9752 17.3767 3.55145 16.638 3.29368 15.836C3.0359 15.034 2.94989 14.1868 3.04124 13.3493C3.13259 12.5119 3.39926 11.7031 3.82387 10.9756C4.24849 10.2481 4.82155 9.61808 5.50576 9.12668C6.18996 8.63527 6.96997 8.29345 7.79503 8.12345C8.62008 7.95345 9.47168 7.95909 10.2944 8.14"
                    stroke="#02283F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M10 10C10 8.4087 10.6321 6.88258 11.7574 5.75736C12.8826 4.63214 14.4087 4 16 4C17.5913 4 19.1174 4.63214 20.2426 5.75736C21.3679 6.88258 22 8.4087 22 10"
                    stroke="#02283F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M25 19.6562V25.9975C25 26.2627 24.8946 26.5171 24.7071 26.7046C24.5196 26.8921 24.2652 26.9975 24 26.9975H8C7.73478 26.9975 7.48043 26.8921 7.29289 26.7046C7.10536 26.5171 7 26.2627 7 25.9975V19.6562"
                    stroke="#02283F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_5027_221458">
                    <rect width="32" height="32" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h5 class="text-mob-small-medium md:text-default-medium">Высшая степень мраморности</h5>
              <p class="text-subsidiary-reg md:text-mob-small-reg mt-2">Мраморность придает мясу невероятную мягкость и нежный, насыщенный вкус</p>
            </div>
          </div>
        </div>
        <div
          class="relative rounded-[40px] bg-[url(/images/about/about-banner-additional.webp)] bg-cover bg-center bg-no-repeat p-4 text-white max-xl:col-span-2 max-md:col-span-1 md:p-8 xl:col-span-1"
        >
          <div class="absolute inset-0 z-0 rounded-[40px] bg-black/20">&nbsp;</div>
          <div class="relative z-10 flex h-full flex-col">
            <div class="flex-1">
              <h5 class="font-vast text-vast-mob-title-bold md:text-vast-title-bold uppercase">Попробуйте продукцию PRIMEBEEF</h5>
              <p class="text-subsidiary-reg md:text-mob-small-reg mt-3">
                в Москве и других городах РФ, а также крупных торговых сетях, и вы будете покупать их снова и снова.
              </p>
            </div>
            <div class="flex items-end max-xl:mt-15">
              <Link :href="route('catalog.index')">
                <button class="v-button v-button_light" type="submit">
                  <span class="v-button__label">Станьте нашим клиентом</span>
                  <span class="v-button__arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_3200_28568)">
                        <path d="M5 15L15 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M6.875 5H15V13.125" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_3200_28568">
                          <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 px-6 md:mt-20 md:px-8">
      <h3 class="text-default-bold md:text-heavy-bold">Гарантия безопасности и качества</h3>
      <div class="mt-4 flex flex-col items-stretch gap-4 md:mt-8 md:gap-8 lg:flex-row">
        <div>
          <img
            src="/images/about/about-additional3.webp"
            alt="Изображение"
            class="rounded-20 max-h-[288px] object-cover max-lg:w-full md:min-w-[608px]"
          />
        </div>
        <div class="flex w-full flex-col gap-2">
          <div class="bg-light-gray rounded-20 flex items-center gap-4 p-2 md:gap-8 md:p-4">
            <div class="bg-default rounded-lg p-1 text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5743_260849)">
                  <path d="M8.25 12.75L10.5 15L15.75 9.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5743_260849">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h5 class="text-mob-small-bold md:text-default-bold">До 150 тонн продукции в сутки</h5>
              <p class="text-subsidiary-reg md:text-mob-small-reg mt-2">
                современное производство с автоматизированными линиями и инновационной упаковкой
              </p>
            </div>
          </div>
          <div class="bg-light-gray rounded-20 flex items-center gap-4 p-2 md:gap-8 md:p-4">
            <div class="bg-default rounded-lg p-1 text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5743_260849)">
                  <path d="M8.25 12.75L10.5 15L15.75 9.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5743_260849">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h5 class="text-mob-small-bold md:text-default-bold">Международные стандарты</h5>
              <p class="text-subsidiary-reg md:text-mob-small-reg mt-2">соответствие требованиям USDA, ЕС и российской государственной проверки</p>
            </div>
          </div>
          <div class="bg-light-gray rounded-20 flex items-center gap-4 p-2 md:gap-8 md:p-4">
            <div class="bg-default rounded-lg p-1 text-white">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_5743_260849)">
                  <path d="M8.25 12.75L10.5 15L15.75 9.75" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5743_260849">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <h5 class="text-mob-small-bold md:text-default-bold">Этичный подход</h5>
              <p class="text-subsidiary-reg md:text-mob-small-reg mt-2">
                минимальный стресс у животных благодаря технологиям доктора Темпл Грандин, что улучшает качество мяса
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 grid gap-4 px-6 md:mt-20 md:grid-cols-2 md:gap-8 md:px-8">
      <div class="flex flex-col gap-2 md:gap-4">
        <h3 class="text-default-bold md:text-heavy-bold">Американский стандарт NAMP</h3>
        <p class="text-mob-small-medium md:text-default-medium text-additional font-normal">
          От выбора правильного куска из разруба туши зависит его мягкость и вкусовые качества.
        </p>
        <p class="text-subsidiary-reg md:text-mob-small-reg">
          В мире существуют различные способы разделки говядины: американский, британский, голландский, итальянский, датский, австралийский и др. Мы
          используем северо-американскую систему NAMP, т.к. в ней идет более подробное деление туши на отруба и стейки.
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <div class="bg-text w-fit rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16 " viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_4851_188561)">
                <path d="M5 15L15 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.875 5H15V13.125" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_4851_188561">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p class="text-subsidiary-reg md:text-mob-small-reg">Однородность качеств каждого продукта</p>
        </div>
        <div class="flex items-center gap-2">
          <div class="bg-text w-fit rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16 " viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_4851_188561)">
                <path d="M5 15L15 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.875 5H15V13.125" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_4851_188561">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p class="text-subsidiary-reg md:text-mob-small-reg">Стабильность вкусовых характеристик</p>
        </div>
        <div class="flex items-center gap-2">
          <div class="bg-text w-fit rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16 " viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_4851_188561)">
                <path d="M5 15L15 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.875 5H15V13.125" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_4851_188561">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p class="text-subsidiary-reg md:text-mob-small-reg">Возможность выделения премиальных стейков и отрубов</p>
        </div>
        <div class="flex items-center gap-2">
          <div class="bg-text w-fit rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16 " viewBox="0 0 20 20" fill="none">
              <g clip-path="url(#clip0_4851_188561)">
                <path d="M5 15L15 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.875 5H15V13.125" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_4851_188561">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p class="text-subsidiary-reg md:text-mob-small-reg">Наличие максимального ассортимента для покупателя</p>
        </div>
      </div>
    </div>
    <div class="mt-10 gap-8 px-6 md:mt-20 md:px-8 lg:grid lg:grid-cols-[1fr_auto] lg:items-stretch">
      <div class="lg:h-full">
        <h2 class="text-default-bold md:text-heavy-bold">
          Мраморная говядина PRIMEBEEF одобрена международным центром стандартизации и сертификации «Халяль»
        </h2>
        <div class="mt-4 grid gap-2 md:mt-8 lg:grid-cols-3">
          <div class="flex items-center gap-2">
            <div class="bg-text w-fit rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_4851_188561)">
                  <path d="M5 15L15 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6.875 5H15V13.125" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_4851_188561">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>Обособленная линия производства для Халяль</div>
          </div>
          <div class="flex items-center gap-2">
            <div class="bg-text w-fit rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_4851_188561)">
                  <path d="M5 15L15 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6.875 5H15V13.125" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_4851_188561">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>Обособленная линия производства для Халяль</div>
          </div>
          <div class="flex items-center gap-2">
            <div class="bg-text w-fit rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_4851_188561)">
                  <path d="M5 15L15 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6.875 5H15V13.125" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_4851_188561">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>Обособленная линия производства для Халяль</div>
          </div>
        </div>
        <div
          class="rounded-20 relative mt-4 flex h-full max-h-[340px] w-full flex-col bg-[url(/images/about/about-banner-halal.webp)] bg-cover bg-center p-4 text-white max-md:pt-10 md:mt-8 md:justify-end"
        >
          <div class="rounded-20 absolute inset-0 z-0 bg-black/40">&nbsp;</div>
          <div class="relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
            <div>
              <h3 class="font-vast text-vast-mob-title-bold md:text-vast-title-bold">Что такое мясо халяль</h3>
              <p class="text-subsidiary-reg md:text-mob-small-reg">
                Это слово относится к исламу и обозначает все, что разрешено и допустимо в религии мусульман в противовес хараму (запретным
                действиям). Фактически, это питание, поведение, одежда и все остальное, из чего складывается образ жизни, соответствующий правилам
                Корана.
              </p>
            </div>
            <button class="v-button v-button_light max-md:w-full" type="submit">
              <span class="v-button__label text-nowrap">Читать статью</span>
              <span class="v-button__arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_3200_28568)">
                    <path d="M5 15L15 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M6.875 5H15V13.125" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_3200_28568">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div class="max-lg:mt-4">
        <img src="/images/about/about-certificate-halal.webp" alt="object-cover" class="mx-auto block max-h-[515px]" />
      </div>
    </div>
    <section class="mt-10 max-md:pl-6 md:mt-20 md:px-8">
      <h2 class="text-default-bold md:text-heavy-bold">Сертификаты и награды</h2>
      <div>
        <VSlider
          class="mt-4 md:mt-8"
          :slides="rewards"
          :slider-options="{
            slidesPerView: 4,
            spaceBetween: 32,
            breakpoints: {
              0: { slidesPerView: 1.7, spaceBetween: 8 },
              640: { slidesPerView: 3, spaceBetween: 16 },
              1280: { slidesPerView: 4, spaceBetween: 32 },
            },
          }"
        >
          <template #slide="{ slide }">
            <VPicture :src="slide.image.path" alt="" />
          </template>
        </VSlider>
      </div>
    </section>
<!--    <section class="mt-10 max-md:pl-6 md:mt-20 md:px-8">-->
<!--      <h2 class="text-default-bold md:text-heavy-bold">Команда</h2>-->
<!--      <div class="relative mt-4 md:mt-8">-->
<!--        <swiper-container-->
<!--          :navigation="{-->
<!--            nextEl: '.slider-next-teams',-->
<!--            prevEl: '.slider-prev-teams',-->
<!--          }"-->
<!--          :breakpoints="{-->
<!--            0: { slidesPerView: 1.4, spaceBetween: 8 },-->
<!--            768: { slidesPerView: 3, spaceBetween: 16 },-->
<!--            1280: { slidesPerView: 4, spaceBetween: 32 },-->
<!--          }"-->
<!--        >-->
<!--          <swiper-slide class="!h-auto">-->
<!--            <div class="rounded-20 bg-light-gray flex h-full flex-col p-2 md:p-4">-->
<!--              <div class="flex-auto">-->
<!--                <h3 class="text-default-bold md:text-heavy-bold">Присоединяйтесь к нашей команде</h3>-->
<!--                <p class="text-subsidiary-reg md:text-mob-small-reg mt-2">-->
<!--                  Мы видим свое развитие в развитии тех, кто разделяет наши ценности и стремится к общим целям.-->
<!--                </p>-->
<!--              </div>-->
<!--              <div class="mt-auto">-->
<!--                <button class="v-button v-button_outline" @click.stop="isJoinTeamModalOpen = true">-->
<!--                  <span class="v-button__label text-nowrap">Присоединиться</span>-->
<!--                  <span class="v-button__arrow">-->
<!--                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                      <g clip-path="url(#clip0_3200_28568)">-->
<!--                        <path d="M5 15L15 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>-->
<!--                        <path d="M6.875 5H15V13.125" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>-->
<!--                      </g>-->
<!--                      <defs>-->
<!--                        <clipPath id="clip0_3200_28568">-->
<!--                          <rect width="20" height="20" fill="white"></rect>-->
<!--                        </clipPath>-->
<!--                      </defs>-->
<!--                    </svg>-->
<!--                  </span>-->
<!--                </button>-->
<!--              </div>-->
<!--            </div>-->
<!--          </swiper-slide>-->

<!--          <template v-for="slide in teams" :key="slide.full_name + useId()">-->
<!--            <swiper-slide>-->
<!--              <article class="rounded-20 border-filling h-auto border">-->
<!--                <VPicture :src="slide.image.path" alt="" img-classes="w-full" />-->
<!--                <div class="p-4">-->
<!--                  <h4 class="text-mob-small-bold">{{ slide.full_name }}</h4>-->
<!--                  <p class="text-subsidiary-reg mt-0.5">{{ slide.description }}</p>-->
<!--                </div>-->
<!--              </article>-->
<!--            </swiper-slide>-->
<!--          </template>-->
<!--        </swiper-container>-->
<!--        <button-->
<!--          class="absolute top-[calc(50%-24px)] left-0 z-10 hidden h-12 w-12 -translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] disabled:invisible md:flex"-->
<!--          :class="`slider-prev-teams`"-->
<!--        >-->
<!--          <IconCaretLeft />-->
<!--        </button>-->
<!--        <button-->
<!--          class="absolute top-[calc(50%-24px)] right-0 z-10 hidden h-12 w-12 translate-x-1/2 cursor-pointer items-center justify-center rounded-full bg-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] disabled:invisible md:flex"-->
<!--          :class="`slider-next-teams`"-->
<!--        >-->
<!--          <IconCaretRight />-->
<!--        </button>-->
<!--      </div>-->
<!--    </section>-->
    <VSection class="bg-light-gray md:rounded-e-20 mt-10 rounded-e-none !p-0 max-md:ml-2 md:mx-4 md:mt-20 md:ml-2 lg:ml-0">
      <template #header>
        <header class="flex items-center justify-between gap-4 px-4 pt-4 lg:px-8 lg:pt-8">
          <h2 class="text-default-bold md:text-heavy-bold">Отзывы клиентов и партнеров</h2>
          <VNavigationButton class="hidden md:block" slider-key="reviews" />
        </header>
      </template>
      <div class="overflow-hidden">
        <swiper-container
          :navigation="{
            nextEl: '.slider-next-reviews',
            prevEl: '.slider-prev-reviews',
          }"
          :breakpoints="{
            0: { slidesPerView: 1.4, spaceBetween: 8 },
            768: { slidesPerView: 3, spaceBetween: 16 },
            1280: { slidesPerView: 4, spaceBetween: 32 },
          }"
          slide-active-class="sm:shadow-[0_10px_30px_0_rgba(0,0,0,0.1)]"
          class="reviews ml-4 pb-4 lg:ml-0 lg:w-[calc(100%_-_64px)]"
        >
          <template v-for="review in reviews" :key="review.id">
            <swiper-slide class="rounded-20 flex h-auto flex-col md:w-full md:max-w-88">
              <article class="rounded-20 flex h-full flex-col gap-3 bg-white p-4">
                <div class="flex flex-col gap-2">
                  <div class="flex h-[22px] items-center justify-between gap-2 text-base/[22px] font-semibold">
                    <Rating :default-value="review.rating" readonly />
                    <span class="text-complimentary-bold text-[#867F7F]">{{ review.created_at }}</span>
                  </div>
                </div>
                <div class="flex items-center justify-between gap-3">
                  <div class="flex items-center gap-2">
                    <Avatar shape="circle" :label="review.userName ? personInitials(review.userName) : 'П'" />
                    <div class="text-subsidiary-medium text-text flex flex-col">
                      <span>{{ review.userName }}.</span> <span class="text-subsidiary text-complimentary-reg">Клиент</span>
                    </div>
                  </div>
                </div>

                <p class="text-subsidiary-reg flex-grow">
                  {{ review.text }}
                </p>
              </article>
            </swiper-slide>
          </template>
        </swiper-container>
      </div>
    </VSection>
    <div class="mt-10 px-6 md:mt-20 md:px-8">
      <div class="grid gap-4 md:gap-8 lg:grid-cols-3">
        <h2 class="text-default-bold md:text-heavy-bold">Мраморная говядина PRIMEBEEF — стандарт качества!</h2>
        <p class="text-subsidiary-reg md:text-mob-small-reg">
          Мраморность придает мясу невероятную мягкость и нежный, насыщенный вкус. Жировые прожилки в мышечных тканях делают его сочным и буквально
          тающим во рту.
        </p>
        <p class="text-subsidiary-reg md:text-mob-small-reg">
          Продукт содержит много белка и умеренное количество жира, и не содержит холестерина, благодаря чему становится незаменимым в диетических
          блюдах.
        </p>
      </div>
      <div class="mt-4 md:mt-8">
        <div class="flex flex-col items-stretch justify-between gap-2 md:gap-8 lg:flex-row">
          <div
            class="rounded-20 relative flex min-h-full basis-1/2 flex-col justify-end bg-[url(/images/about/about-additional3.webp)] bg-cover bg-center p-2 text-white max-lg:min-h-[200px] md:p-4"
          >
            <div class="rounded-20 absolute inset-0 z-0 bg-black/20">&nbsp;</div>
            <div class="relative z-10">
              <h4 class="text-default-bold md:text-heavy-bold">Производственная мощность</h4>
              <p class="text-subsidiary-reg md:text-mob-small-reg mt-2">до 150 тонн продукции в сутки</p>
            </div>
          </div>
          <div class="rounded-20 bg-light-gray basis-1/4 p-2 md:p-4">
            <div class="bg-text w-fit rounded-full p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_4851_188561)">
                  <path d="M5 15L15 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6.875 5H15V13.125" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_4851_188561">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="mt-8">
              <h5 class="text-default-bold md:text-heavy-bold">Самые современные линии, автоматизированное производство,</h5>
              <p class="text-subsidiary-reg md:text-mob-small-reg mt-4">в т.ч. инновационное упаковочное оборудование</p>
            </div>
          </div>
          <div class="rounded-20 w-full overflow-hidden lg:basis-1/4">
            <iframe
              width="100%"
              height="260"
              src="https://rutube.ru/play/embed/c882d7e2f60840df82ff6d3514307726"
              allow="clipboard-write; autoplay"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div class="mt-4 flex flex-col justify-between gap-2 md:mt-8 md:gap-8 lg:flex-row">
          <div class="rounded-20 bg-light-gray basis-1/2 p-2 md:p-4">
            <div class="bg-text w-fit rounded-full p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clip-path="url(#clip0_4851_188561)">
                  <path d="M5 15L15 5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6.875 5H15V13.125" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_4851_188561">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div class="mt-8">
              <h5 class="text-default-bold md:text-heavy-bold">О производстве и продукте</h5>
              <p class="text-subsidiary-reg md:text-mob-small-reg mt-4">
                Производственная мощность до 150 тонн продукции в сутки. Производство прошло российскую государственную проверку, а также полностью
                соответствует требованиям Министерства сельского хозяйства США (USDA) и европейским стандартам. Помещение предубойной выдержки
                животных построено на основе научных работ знаменитого зоолога и специалиста по поведению животных доктора Темпл Грандин.
              </p>
            </div>
          </div>
          <div class="rounded-20 overflow-hidden md:basis-1/4">
            <iframe
              width="100%"
              height="260"
              src="https://rutube.ru/play/embed/c882d7e2f60840df82ff6d3514307726"
              allow="clipboard-write; autoplay"
              allowFullScreen
            ></iframe>
          </div>
          <div class="md:basis-1/4">
            <img src="/images/about/about-additional4.webp" alt="" class="rounded-20 max-md:max-h-[260px] md:min-h-[260px]" />
          </div>
        </div>
      </div>
      <div class="mt-10 flex flex-col justify-between gap-4 md:mt-20 md:flex-row md:gap-8">
        <div>
          <h2 class="text-default-bold md:text-heavy-bold">Доставка мраморной говядины Prime Foods по России</h2>
          <p class="text-subsidiary-reg md:text-mob-small-reg mt-2">Мраморная говядина стала еще ближе</p>
          <Link :href="route('faq.faq.index')">
            <button class="v-button v-button_dark mt-8 max-md:!hidden md:block" type="submit">
              <span class="v-button__label text-nowrap">Подробнее</span>
              <span class="v-button__arrow">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_3200_28568)">
                    <path d="M5 15L15 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M6.875 5H15V13.125" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_3200_28568">
                      <rect width="20" height="20" fill="white"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </button>
          </Link>
        </div>
        <div class="flex flex-col gap-2 md:max-w-[420px]">
          <div class="flex items-start gap-2">
            <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_4539_185058)">
                <path d="M6 6L18 18" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.25 18H18V8.25" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_4539_185058">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p class="text-subsidiary-reg md:text-mob-small-reg">
              Обратите внимание, если в карточке товара указан средний вес, то после сборки заказа вес может незначительно поменяться.
            </p>
          </div>
          <div class="flex items-start gap-2">
            <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_4539_185058)">
                <path d="M6 6L18 18" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.25 18H18V8.25" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_4539_185058">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p class="text-subsidiary-reg md:text-mob-small-reg">В случае оформления после 20:15 Ваш заказ будет обработан на следующий день.</p>
          </div>
          <div class="flex items-start gap-2">
            <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_4539_185058)">
                <path d="M6 6L18 18" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.25 18H18V8.25" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_4539_185058">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p class="text-subsidiary-reg md:text-mob-small-reg">
              После сборки заказа, Вам на почту придет накладная и удобная ссылка на оплату. Также мы дублируем ссылку в СМС, отправителем указан
              Prime Foods.
            </p>
          </div>
        </div>
        <div class="md:-mt-20">
          <img src="/images/about/about-map.webp" alt="" />
        </div>
        <button class="v-button v-button_dark mt-8 w-fit md:!hidden" type="submit">
          <span class="v-button__label text-nowrap">Подробнее</span>
          <span class="v-button__arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_3200_28568)">
                <path d="M5 15L15 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M6.875 5H15V13.125" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
              <defs>
                <clipPath id="clip0_3200_28568">
                  <rect width="20" height="20" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
        </button>
      </div>
    </div>
    <div class="mt-10 px-6 md:mt-20 md:px-8">
      <h2 class="text-default-bold md:text-heavy-bold">Контактная информация</h2>
      <div class="mt-4 flex flex-col gap-4 md:mt-8 md:gap-8 lg:flex-row">
        <div class="flex flex-col gap-4 md:gap-8 lg:basis-1/2">
          <div class="rounded-20 border-stroke border p-2 md:p-4">
            <h3 class="text-mob-small-medium md:text-default-medium">Офис Prime Foods</h3>
            <div class="mt-3">
              <div class="md:bg-light-gray md:rounded-20 max-md:border-b-stroke max-md:border-b max-md:pb-2 md:p-3">
                <h5 class="text-subsidiary-medium md:text-mob-small-medium flex gap-2">
                  <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4539_185058)">
                      <path d="M6 6L18 18" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.25 18H18V8.25" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4539_185058">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>HR</span>
                </h5>
                <div class="mt-2 flex flex-wrap gap-2 md:mt-3 md:gap-4">
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185156)">
                        <path
                          d="M14.25 4.5C15.5114 4.83218 16.6621 5.4932 17.5844 6.41557C18.5068 7.33793 19.1678 8.48858 19.5 9.75"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5 7.5C15.0488 7.91438 16.0856 8.95125 16.5 10.5"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6616 14.3757C14.7654 14.3066 14.8849 14.2645 15.0091 14.2532C15.1334 14.2419 15.2585 14.2618 15.3731 14.311L19.7944 16.292C19.9434 16.3557 20.0677 16.4659 20.1489 16.6062C20.23 16.7464 20.2635 16.9092 20.2444 17.0701C20.0987 18.1586 19.5627 19.1571 18.736 19.88C17.9093 20.6029 16.8482 21.0009 15.75 21.0001C12.3685 21.0001 9.12548 19.6568 6.73439 17.2657C4.3433 14.8746 3 11.6316 3 8.2501C2.99916 7.15192 3.3972 6.0908 4.12009 5.2641C4.84298 4.4374 5.84152 3.90138 6.93 3.75573C7.09091 3.73661 7.25368 3.77012 7.39395 3.85124C7.53422 3.93236 7.64444 4.05673 7.70813 4.20573L9.68906 8.63073C9.73774 8.74438 9.75756 8.8683 9.74676 8.99146C9.73596 9.11463 9.69489 9.23321 9.62719 9.33666L7.62375 11.7189C7.55269 11.8261 7.51066 11.9499 7.50179 12.0783C7.49291 12.2066 7.51749 12.335 7.57313 12.451C8.34844 14.0382 9.98906 15.6592 11.5809 16.427C11.6975 16.4824 11.8266 16.5064 11.9553 16.4967C12.084 16.487 12.208 16.4439 12.315 16.3717L14.6616 14.3757Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185156">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a href="tel:+7 (800) 101-47-28" class="text-mob-small-bold">+7 (800) 101-47-28</a>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M21 5.25L12 13.5L3 5.25" stroke="#02283F" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </svg>

                    <a href="mailto:job@primefoods.ru" class="text-complimentary-reg md:text-mob-small-reg">job@primefoods.ru</a>
                  </div>
                </div>
              </div>
              <div class="border-b-stroke border-b max-md:pt-2 max-md:pb-2 md:p-3">
                <h5 class="text-subsidiary-medium md:text-mob-small-medium flex gap-2">
                  <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4539_185058)">
                      <path d="M6 6L18 18" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.25 18H18V8.25" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4539_185058">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Маркетинг</span>
                </h5>
                <div class="mt-3 flex flex-wrap gap-2 md:gap-4">
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185156)">
                        <path
                          d="M14.25 4.5C15.5114 4.83218 16.6621 5.4932 17.5844 6.41557C18.5068 7.33793 19.1678 8.48858 19.5 9.75"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5 7.5C15.0488 7.91438 16.0856 8.95125 16.5 10.5"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6616 14.3757C14.7654 14.3066 14.8849 14.2645 15.0091 14.2532C15.1334 14.2419 15.2585 14.2618 15.3731 14.311L19.7944 16.292C19.9434 16.3557 20.0677 16.4659 20.1489 16.6062C20.23 16.7464 20.2635 16.9092 20.2444 17.0701C20.0987 18.1586 19.5627 19.1571 18.736 19.88C17.9093 20.6029 16.8482 21.0009 15.75 21.0001C12.3685 21.0001 9.12548 19.6568 6.73439 17.2657C4.3433 14.8746 3 11.6316 3 8.2501C2.99916 7.15192 3.3972 6.0908 4.12009 5.2641C4.84298 4.4374 5.84152 3.90138 6.93 3.75573C7.09091 3.73661 7.25368 3.77012 7.39395 3.85124C7.53422 3.93236 7.64444 4.05673 7.70813 4.20573L9.68906 8.63073C9.73774 8.74438 9.75756 8.8683 9.74676 8.99146C9.73596 9.11463 9.69489 9.23321 9.62719 9.33666L7.62375 11.7189C7.55269 11.8261 7.51066 11.9499 7.50179 12.0783C7.49291 12.2066 7.51749 12.335 7.57313 12.451C8.34844 14.0382 9.98906 15.6592 11.5809 16.427C11.6975 16.4824 11.8266 16.5064 11.9553 16.4967C12.084 16.487 12.208 16.4439 12.315 16.3717L14.6616 14.3757Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185156">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a href="tel:+7 (800) 101-47-28" class="text-mob-small-bold">+7 (800) 101-47-28</a>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M21 5.25L12 13.5L3 5.25" stroke="#02283F" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </svg>

                    <a href="mailto:marketing@primefoods.ru" class="text-complimentary-reg md:text-mob-small-reg">marketing@primefoods.ru</a>
                  </div>
                </div>
              </div>
              <div class="border-b-stroke border-b max-md:pt-2 max-md:pb-2 md:p-3">
                <h5 class="text-subsidiary-medium md:text-mob-small-medium flex gap-2">
                  <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4539_185058)">
                      <path d="M6 6L18 18" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.25 18H18V8.25" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4539_185058">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Horeca</span>
                </h5>
                <div class="mt-3 flex flex-wrap gap-2 md:gap-4">
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185156)">
                        <path
                          d="M14.25 4.5C15.5114 4.83218 16.6621 5.4932 17.5844 6.41557C18.5068 7.33793 19.1678 8.48858 19.5 9.75"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5 7.5C15.0488 7.91438 16.0856 8.95125 16.5 10.5"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6616 14.3757C14.7654 14.3066 14.8849 14.2645 15.0091 14.2532C15.1334 14.2419 15.2585 14.2618 15.3731 14.311L19.7944 16.292C19.9434 16.3557 20.0677 16.4659 20.1489 16.6062C20.23 16.7464 20.2635 16.9092 20.2444 17.0701C20.0987 18.1586 19.5627 19.1571 18.736 19.88C17.9093 20.6029 16.8482 21.0009 15.75 21.0001C12.3685 21.0001 9.12548 19.6568 6.73439 17.2657C4.3433 14.8746 3 11.6316 3 8.2501C2.99916 7.15192 3.3972 6.0908 4.12009 5.2641C4.84298 4.4374 5.84152 3.90138 6.93 3.75573C7.09091 3.73661 7.25368 3.77012 7.39395 3.85124C7.53422 3.93236 7.64444 4.05673 7.70813 4.20573L9.68906 8.63073C9.73774 8.74438 9.75756 8.8683 9.74676 8.99146C9.73596 9.11463 9.69489 9.23321 9.62719 9.33666L7.62375 11.7189C7.55269 11.8261 7.51066 11.9499 7.50179 12.0783C7.49291 12.2066 7.51749 12.335 7.57313 12.451C8.34844 14.0382 9.98906 15.6592 11.5809 16.427C11.6975 16.4824 11.8266 16.5064 11.9553 16.4967C12.084 16.487 12.208 16.4439 12.315 16.3717L14.6616 14.3757Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185156">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a href="tel:+7 (800) 101-47-28" class="text-mob-small-bold">+7 (800) 101-47-28</a>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M21 5.25L12 13.5L3 5.25" stroke="#02283F" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </svg>

                    <a href="mailto:zakaz@primefoods.ru" class="text-complimentary-reg md:text-mob-small-reg">zakaz@primefoods.ru</a>
                  </div>
                </div>
              </div>
              <div class="max-md:pt-2 max-md:pb-2 md:p-3">
                <h5 class="text-subsidiary-medium md:text-mob-small-medium flex gap-2">
                  <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4539_185058)">
                      <path d="M6 6L18 18" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.25 18H18V8.25" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4539_185058">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Дистрибьюция</span>
                </h5>
                <div class="mt-3 flex flex-wrap gap-2 md:gap-4">
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185156)">
                        <path
                          d="M14.25 4.5C15.5114 4.83218 16.6621 5.4932 17.5844 6.41557C18.5068 7.33793 19.1678 8.48858 19.5 9.75"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5 7.5C15.0488 7.91438 16.0856 8.95125 16.5 10.5"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6616 14.3757C14.7654 14.3066 14.8849 14.2645 15.0091 14.2532C15.1334 14.2419 15.2585 14.2618 15.3731 14.311L19.7944 16.292C19.9434 16.3557 20.0677 16.4659 20.1489 16.6062C20.23 16.7464 20.2635 16.9092 20.2444 17.0701C20.0987 18.1586 19.5627 19.1571 18.736 19.88C17.9093 20.6029 16.8482 21.0009 15.75 21.0001C12.3685 21.0001 9.12548 19.6568 6.73439 17.2657C4.3433 14.8746 3 11.6316 3 8.2501C2.99916 7.15192 3.3972 6.0908 4.12009 5.2641C4.84298 4.4374 5.84152 3.90138 6.93 3.75573C7.09091 3.73661 7.25368 3.77012 7.39395 3.85124C7.53422 3.93236 7.64444 4.05673 7.70813 4.20573L9.68906 8.63073C9.73774 8.74438 9.75756 8.8683 9.74676 8.99146C9.73596 9.11463 9.69489 9.23321 9.62719 9.33666L7.62375 11.7189C7.55269 11.8261 7.51066 11.9499 7.50179 12.0783C7.49291 12.2066 7.51749 12.335 7.57313 12.451C8.34844 14.0382 9.98906 15.6592 11.5809 16.427C11.6975 16.4824 11.8266 16.5064 11.9553 16.4967C12.084 16.487 12.208 16.4439 12.315 16.3717L14.6616 14.3757Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185156">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a href="tel:+7 (800) 101-47-28" class="text-mob-small-bold">+7 (800) 101-47-28</a>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M21 5.25L12 13.5L3 5.25" stroke="#02283F" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </svg>

                    <a href="mailto:zakaz@primefoods.ru" class="text-complimentary-reg md:text-mob-small-reg">zakaz@primefoods.ru</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-20 border-stroke border p-2 md:p-4 md:pb-11">
            <h3 class="text-mob-small-medium md:text-default-medium">Представительства</h3>
            <div class="mt-2 md:mt-3">
              <div class="border-b-stroke border-b max-md:pt-2 max-md:pb-2 md:p-3">
                <h5 class="text-subsidiary-medium md:text-mob-small-medium flex gap-2">
                  <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4539_185058)">
                      <path d="M6 6L18 18" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.25 18H18V8.25" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4539_185058">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Санкт-Петербург</span>
                </h5>
                <div class="mt-3 flex flex-wrap gap-2 md:gap-4">
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185156)">
                        <path
                          d="M14.25 4.5C15.5114 4.83218 16.6621 5.4932 17.5844 6.41557C18.5068 7.33793 19.1678 8.48858 19.5 9.75"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5 7.5C15.0488 7.91438 16.0856 8.95125 16.5 10.5"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6616 14.3757C14.7654 14.3066 14.8849 14.2645 15.0091 14.2532C15.1334 14.2419 15.2585 14.2618 15.3731 14.311L19.7944 16.292C19.9434 16.3557 20.0677 16.4659 20.1489 16.6062C20.23 16.7464 20.2635 16.9092 20.2444 17.0701C20.0987 18.1586 19.5627 19.1571 18.736 19.88C17.9093 20.6029 16.8482 21.0009 15.75 21.0001C12.3685 21.0001 9.12548 19.6568 6.73439 17.2657C4.3433 14.8746 3 11.6316 3 8.2501C2.99916 7.15192 3.3972 6.0908 4.12009 5.2641C4.84298 4.4374 5.84152 3.90138 6.93 3.75573C7.09091 3.73661 7.25368 3.77012 7.39395 3.85124C7.53422 3.93236 7.64444 4.05673 7.70813 4.20573L9.68906 8.63073C9.73774 8.74438 9.75756 8.8683 9.74676 8.99146C9.73596 9.11463 9.69489 9.23321 9.62719 9.33666L7.62375 11.7189C7.55269 11.8261 7.51066 11.9499 7.50179 12.0783C7.49291 12.2066 7.51749 12.335 7.57313 12.451C8.34844 14.0382 9.98906 15.6592 11.5809 16.427C11.6975 16.4824 11.8266 16.5064 11.9553 16.4967C12.084 16.487 12.208 16.4439 12.315 16.3717L14.6616 14.3757Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185156">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a href="tel:+7 (925) 699-70-29 " class="text-mob-small-bold">+7 (925) 699-70-29</a>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M21 5.25L12 13.5L3 5.25" stroke="#02283F" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </svg>

                    <a href="mailto:bnh.spb@primefoods.ru" class="text-complimentary-reg md:text-mob-small-reg">bnh.spb@primefoods.ru</a>
                  </div>

                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185169)">
                        <path
                          d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                          stroke="currentcolor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75Z"
                          stroke="currentcolor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185169">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span class="text-complimentary-reg md:text-mob-small-reg">ул. Арсенальная 78С</span>
                  </div>
                </div>
              </div>
              <div class="border-b-stroke border-b max-md:pt-2 max-md:pb-2 md:p-3">
                <h5 class="text-subsidiary-medium md:text-mob-small-medium flex gap-2">
                  <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4539_185058)">
                      <path d="M6 6L18 18" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.25 18H18V8.25" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4539_185058">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Сочи</span>
                </h5>
                <div class="mt-3 flex flex-wrap gap-2 md:gap-4">
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185156)">
                        <path
                          d="M14.25 4.5C15.5114 4.83218 16.6621 5.4932 17.5844 6.41557C18.5068 7.33793 19.1678 8.48858 19.5 9.75"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5 7.5C15.0488 7.91438 16.0856 8.95125 16.5 10.5"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6616 14.3757C14.7654 14.3066 14.8849 14.2645 15.0091 14.2532C15.1334 14.2419 15.2585 14.2618 15.3731 14.311L19.7944 16.292C19.9434 16.3557 20.0677 16.4659 20.1489 16.6062C20.23 16.7464 20.2635 16.9092 20.2444 17.0701C20.0987 18.1586 19.5627 19.1571 18.736 19.88C17.9093 20.6029 16.8482 21.0009 15.75 21.0001C12.3685 21.0001 9.12548 19.6568 6.73439 17.2657C4.3433 14.8746 3 11.6316 3 8.2501C2.99916 7.15192 3.3972 6.0908 4.12009 5.2641C4.84298 4.4374 5.84152 3.90138 6.93 3.75573C7.09091 3.73661 7.25368 3.77012 7.39395 3.85124C7.53422 3.93236 7.64444 4.05673 7.70813 4.20573L9.68906 8.63073C9.73774 8.74438 9.75756 8.8683 9.74676 8.99146C9.73596 9.11463 9.69489 9.23321 9.62719 9.33666L7.62375 11.7189C7.55269 11.8261 7.51066 11.9499 7.50179 12.0783C7.49291 12.2066 7.51749 12.335 7.57313 12.451C8.34844 14.0382 9.98906 15.6592 11.5809 16.427C11.6975 16.4824 11.8266 16.5064 11.9553 16.4967C12.084 16.487 12.208 16.4439 12.315 16.3717L14.6616 14.3757Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185156">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a href="tel:+7 (931) 408-90-41" class="text-mob-small-bold">+7 (931) 408-90-41</a>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M21 5.25L12 13.5L3 5.25" stroke="#02283F" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </svg>

                    <a href="mailto:aai.spb@primefoods.ru" class="text-complimentary-reg md:text-mob-small-reg">aai.spb@primefoods.ru</a>
                  </div>

                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185169)">
                        <path
                          d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                          stroke="currentcolor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75Z"
                          stroke="currentcolor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185169">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span class="text-complimentary-reg md:text-mob-small-reg">ул. Труда, 33/2</span>
                  </div>
                </div>
              </div>
              <div class="max-md:pt-2 max-md:pb-2 md:px-3 md:pt-3">
                <h5 class="text-subsidiary-medium md:text-mob-small-medium flex gap-2">
                  <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4539_185058)">
                      <path d="M6 6L18 18" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.25 18H18V8.25" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4539_185058">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Нижний Новгород</span>
                </h5>
                <div class="mt-3 flex flex-wrap gap-2 md:gap-4">
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185156)">
                        <path
                          d="M14.25 4.5C15.5114 4.83218 16.6621 5.4932 17.5844 6.41557C18.5068 7.33793 19.1678 8.48858 19.5 9.75"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5 7.5C15.0488 7.91438 16.0856 8.95125 16.5 10.5"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6616 14.3757C14.7654 14.3066 14.8849 14.2645 15.0091 14.2532C15.1334 14.2419 15.2585 14.2618 15.3731 14.311L19.7944 16.292C19.9434 16.3557 20.0677 16.4659 20.1489 16.6062C20.23 16.7464 20.2635 16.9092 20.2444 17.0701C20.0987 18.1586 19.5627 19.1571 18.736 19.88C17.9093 20.6029 16.8482 21.0009 15.75 21.0001C12.3685 21.0001 9.12548 19.6568 6.73439 17.2657C4.3433 14.8746 3 11.6316 3 8.2501C2.99916 7.15192 3.3972 6.0908 4.12009 5.2641C4.84298 4.4374 5.84152 3.90138 6.93 3.75573C7.09091 3.73661 7.25368 3.77012 7.39395 3.85124C7.53422 3.93236 7.64444 4.05673 7.70813 4.20573L9.68906 8.63073C9.73774 8.74438 9.75756 8.8683 9.74676 8.99146C9.73596 9.11463 9.69489 9.23321 9.62719 9.33666L7.62375 11.7189C7.55269 11.8261 7.51066 11.9499 7.50179 12.0783C7.49291 12.2066 7.51749 12.335 7.57313 12.451C8.34844 14.0382 9.98906 15.6592 11.5809 16.427C11.6975 16.4824 11.8266 16.5064 11.9553 16.4967C12.084 16.487 12.208 16.4439 12.315 16.3717L14.6616 14.3757Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185156">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a href="tel:+7 (926) 836-80-06" class="text-mob-small-bold">+7 (926) 836-80-06 </a>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M21 5.25L12 13.5L3 5.25" stroke="#02283F" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </svg>

                    <a href="mailto:nn@primefoods.ru" class="text-complimentary-reg md:text-mob-small-reg">nn@primefoods.ru</a>
                  </div>

                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185169)">
                        <path
                          d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                          stroke="currentcolor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75Z"
                          stroke="currentcolor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185169">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span class="text-complimentary-reg md:text-mob-small-reg">Московское шоссе 52, к6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4 md:gap-8 lg:basis-1/2">
          <div class="rounded-20 border-stroke border p-2 md:p-4">
            <h3 class="text-mob-small-medium md:text-default-medium">Заказать</h3>
            <div class="mt-2 md:mt-3">
              <div class="border-b-stroke border-b max-md:pb-2 md:p-3">
                <h5 class="text-subsidiary-medium md:text-mob-small-medium flex gap-2">
                  <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4539_185058)">
                      <path d="M6 6L18 18" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.25 18H18V8.25" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4539_185058">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Интернет-магазин</span>
                </h5>
                <div class="mt-3 flex flex-wrap gap-2 md:gap-4">
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185156)">
                        <path
                          d="M14.25 4.5C15.5114 4.83218 16.6621 5.4932 17.5844 6.41557C18.5068 7.33793 19.1678 8.48858 19.5 9.75"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5 7.5C15.0488 7.91438 16.0856 8.95125 16.5 10.5"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6616 14.3757C14.7654 14.3066 14.8849 14.2645 15.0091 14.2532C15.1334 14.2419 15.2585 14.2618 15.3731 14.311L19.7944 16.292C19.9434 16.3557 20.0677 16.4659 20.1489 16.6062C20.23 16.7464 20.2635 16.9092 20.2444 17.0701C20.0987 18.1586 19.5627 19.1571 18.736 19.88C17.9093 20.6029 16.8482 21.0009 15.75 21.0001C12.3685 21.0001 9.12548 19.6568 6.73439 17.2657C4.3433 14.8746 3 11.6316 3 8.2501C2.99916 7.15192 3.3972 6.0908 4.12009 5.2641C4.84298 4.4374 5.84152 3.90138 6.93 3.75573C7.09091 3.73661 7.25368 3.77012 7.39395 3.85124C7.53422 3.93236 7.64444 4.05673 7.70813 4.20573L9.68906 8.63073C9.73774 8.74438 9.75756 8.8683 9.74676 8.99146C9.73596 9.11463 9.69489 9.23321 9.62719 9.33666L7.62375 11.7189C7.55269 11.8261 7.51066 11.9499 7.50179 12.0783C7.49291 12.2066 7.51749 12.335 7.57313 12.451C8.34844 14.0382 9.98906 15.6592 11.5809 16.427C11.6975 16.4824 11.8266 16.5064 11.9553 16.4967C12.084 16.487 12.208 16.4439 12.315 16.3717L14.6616 14.3757Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185156">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a href="tel:+7 (499) 938-90-10" class="text-mob-small-bold">+7 (499) 938-90-10</a>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M21 5.25L12 13.5L3 5.25" stroke="#02283F" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </svg>

                    <a href="mailto:im@primefoods.ru" class="text-complimentary-reg md:text-mob-small-reg">im@primefoods.ru</a>
                  </div>
                </div>
              </div>
              <div class="max-md:pt-2 max-md:pb-2 md:p-3">
                <h5 class="text-subsidiary-medium md:text-mob-small-medium flex gap-2">
                  <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4539_185058)">
                      <path d="M6 6L18 18" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.25 18H18V8.25" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4539_185058">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Клиентский сервис</span>
                </h5>
                <div class="mt-3 flex flex-wrap gap-2 md:gap-4">
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185156)">
                        <path
                          d="M14.25 4.5C15.5114 4.83218 16.6621 5.4932 17.5844 6.41557C18.5068 7.33793 19.1678 8.48858 19.5 9.75"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5 7.5C15.0488 7.91438 16.0856 8.95125 16.5 10.5"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6616 14.3757C14.7654 14.3066 14.8849 14.2645 15.0091 14.2532C15.1334 14.2419 15.2585 14.2618 15.3731 14.311L19.7944 16.292C19.9434 16.3557 20.0677 16.4659 20.1489 16.6062C20.23 16.7464 20.2635 16.9092 20.2444 17.0701C20.0987 18.1586 19.5627 19.1571 18.736 19.88C17.9093 20.6029 16.8482 21.0009 15.75 21.0001C12.3685 21.0001 9.12548 19.6568 6.73439 17.2657C4.3433 14.8746 3 11.6316 3 8.2501C2.99916 7.15192 3.3972 6.0908 4.12009 5.2641C4.84298 4.4374 5.84152 3.90138 6.93 3.75573C7.09091 3.73661 7.25368 3.77012 7.39395 3.85124C7.53422 3.93236 7.64444 4.05673 7.70813 4.20573L9.68906 8.63073C9.73774 8.74438 9.75756 8.8683 9.74676 8.99146C9.73596 9.11463 9.69489 9.23321 9.62719 9.33666L7.62375 11.7189C7.55269 11.8261 7.51066 11.9499 7.50179 12.0783C7.49291 12.2066 7.51749 12.335 7.57313 12.451C8.34844 14.0382 9.98906 15.6592 11.5809 16.427C11.6975 16.4824 11.8266 16.5064 11.9553 16.4967C12.084 16.487 12.208 16.4439 12.315 16.3717L14.6616 14.3757Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185156">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a href="tel:+7 (800) 101-47-28" class="text-mob-small-bold">+7 (800) 101-47-28</a>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M21 5.25L12 13.5L3 5.25" stroke="#02283F" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </svg>

                    <a href="mailto:zakaz@primefoods.ru" class="text-complimentary-reg md:text-mob-small-reg">zakaz@primefoods.ru</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-20 border-stroke border p-2 md:p-4">
            <h3 class="text-mob-small-medium md:text-default-medium">Где попробовать</h3>
            <div class="mt-2 md:mt-3">
              <div class="border-b-stroke border-b max-md:pb-2 md:p-3">
                <h5 class="text-subsidiary-medium md:text-mob-small-medium flex gap-2">
                  <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4539_185058)">
                      <path d="M6 6L18 18" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.25 18H18V8.25" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4539_185058">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Кейтеринг PRIMEBEEF</span>
                </h5>
                <div class="mt-3 flex flex-wrap gap-2 md:gap-4">
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185156)">
                        <path
                          d="M14.25 4.5C15.5114 4.83218 16.6621 5.4932 17.5844 6.41557C18.5068 7.33793 19.1678 8.48858 19.5 9.75"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5 7.5C15.0488 7.91438 16.0856 8.95125 16.5 10.5"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6616 14.3757C14.7654 14.3066 14.8849 14.2645 15.0091 14.2532C15.1334 14.2419 15.2585 14.2618 15.3731 14.311L19.7944 16.292C19.9434 16.3557 20.0677 16.4659 20.1489 16.6062C20.23 16.7464 20.2635 16.9092 20.2444 17.0701C20.0987 18.1586 19.5627 19.1571 18.736 19.88C17.9093 20.6029 16.8482 21.0009 15.75 21.0001C12.3685 21.0001 9.12548 19.6568 6.73439 17.2657C4.3433 14.8746 3 11.6316 3 8.2501C2.99916 7.15192 3.3972 6.0908 4.12009 5.2641C4.84298 4.4374 5.84152 3.90138 6.93 3.75573C7.09091 3.73661 7.25368 3.77012 7.39395 3.85124C7.53422 3.93236 7.64444 4.05673 7.70813 4.20573L9.68906 8.63073C9.73774 8.74438 9.75756 8.8683 9.74676 8.99146C9.73596 9.11463 9.69489 9.23321 9.62719 9.33666L7.62375 11.7189C7.55269 11.8261 7.51066 11.9499 7.50179 12.0783C7.49291 12.2066 7.51749 12.335 7.57313 12.451C8.34844 14.0382 9.98906 15.6592 11.5809 16.427C11.6975 16.4824 11.8266 16.5064 11.9553 16.4967C12.084 16.487 12.208 16.4439 12.315 16.3717L14.6616 14.3757Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185156">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a href="tel:+7 (926) 673-00-10" class="text-mob-small-bold">+7 (926) 673-00-10</a>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M21 5.25L12 13.5L3 5.25" stroke="#02283F" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </svg>

                    <a href="mailto:ef@primefoods.ru" class="text-complimentary-reg md:text-mob-small-reg">ef@primefoods.ru</a>
                  </div>

                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185169)">
                        <path
                          d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                          stroke="currentcolor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75Z"
                          stroke="currentcolor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185169">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span class="text-complimentary-reg md:text-mob-small-reg">МО, Москва</span>
                  </div>
                </div>
              </div>
              <div class="border-b-stroke border-b max-md:pt-2 max-md:pb-2 md:p-3">
                <h5 class="text-subsidiary-medium md:text-mob-small-medium flex gap-2">
                  <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4539_185058)">
                      <path d="M6 6L18 18" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.25 18H18V8.25" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4539_185058">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>PRIMEBEEF BOUTIQUE</span>
                </h5>
                <div class="mt-3 flex flex-wrap gap-2 md:gap-4">
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185156)">
                        <path
                          d="M14.25 4.5C15.5114 4.83218 16.6621 5.4932 17.5844 6.41557C18.5068 7.33793 19.1678 8.48858 19.5 9.75"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5 7.5C15.0488 7.91438 16.0856 8.95125 16.5 10.5"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6616 14.3757C14.7654 14.3066 14.8849 14.2645 15.0091 14.2532C15.1334 14.2419 15.2585 14.2618 15.3731 14.311L19.7944 16.292C19.9434 16.3557 20.0677 16.4659 20.1489 16.6062C20.23 16.7464 20.2635 16.9092 20.2444 17.0701C20.0987 18.1586 19.5627 19.1571 18.736 19.88C17.9093 20.6029 16.8482 21.0009 15.75 21.0001C12.3685 21.0001 9.12548 19.6568 6.73439 17.2657C4.3433 14.8746 3 11.6316 3 8.2501C2.99916 7.15192 3.3972 6.0908 4.12009 5.2641C4.84298 4.4374 5.84152 3.90138 6.93 3.75573C7.09091 3.73661 7.25368 3.77012 7.39395 3.85124C7.53422 3.93236 7.64444 4.05673 7.70813 4.20573L9.68906 8.63073C9.73774 8.74438 9.75756 8.8683 9.74676 8.99146C9.73596 9.11463 9.69489 9.23321 9.62719 9.33666L7.62375 11.7189C7.55269 11.8261 7.51066 11.9499 7.50179 12.0783C7.49291 12.2066 7.51749 12.335 7.57313 12.451C8.34844 14.0382 9.98906 15.6592 11.5809 16.427C11.6975 16.4824 11.8266 16.5064 11.9553 16.4967C12.084 16.487 12.208 16.4439 12.315 16.3717L14.6616 14.3757Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185156">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a href="tel:+7 (915) 389-87-70" class="text-mob-small-bold">+7 (915) 389-87-70</a>
                  </div>

                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185169)">
                        <path
                          d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                          stroke="currentcolor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75Z"
                          stroke="currentcolor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185169">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span class="text-complimentary-reg md:text-mob-small-reg">МО, Москва</span>
                  </div>
                </div>
              </div>
              <div class="max-md:pt-2 md:p-3">
                <h5 class="text-subsidiary-medium md:text-mob-small-medium flex gap-2">
                  <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4539_185058)">
                      <path d="M6 6L18 18" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.25 18H18V8.25" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4539_185058">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Корнеры PRIMEBEEF</span>
                </h5>
                <div class="mt-3 flex flex-wrap gap-2 md:gap-4">
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185156)">
                        <path
                          d="M14.25 4.5C15.5114 4.83218 16.6621 5.4932 17.5844 6.41557C18.5068 7.33793 19.1678 8.48858 19.5 9.75"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5 7.5C15.0488 7.91438 16.0856 8.95125 16.5 10.5"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.6616 14.3757C14.7654 14.3066 14.8849 14.2645 15.0091 14.2532C15.1334 14.2419 15.2585 14.2618 15.3731 14.311L19.7944 16.292C19.9434 16.3557 20.0677 16.4659 20.1489 16.6062C20.23 16.7464 20.2635 16.9092 20.2444 17.0701C20.0987 18.1586 19.5627 19.1571 18.736 19.88C17.9093 20.6029 16.8482 21.0009 15.75 21.0001C12.3685 21.0001 9.12548 19.6568 6.73439 17.2657C4.3433 14.8746 3 11.6316 3 8.2501C2.99916 7.15192 3.3972 6.0908 4.12009 5.2641C4.84298 4.4374 5.84152 3.90138 6.93 3.75573C7.09091 3.73661 7.25368 3.77012 7.39395 3.85124C7.53422 3.93236 7.64444 4.05673 7.70813 4.20573L9.68906 8.63073C9.73774 8.74438 9.75756 8.8683 9.74676 8.99146C9.73596 9.11463 9.69489 9.23321 9.62719 9.33666L7.62375 11.7189C7.55269 11.8261 7.51066 11.9499 7.50179 12.0783C7.49291 12.2066 7.51749 12.335 7.57313 12.451C8.34844 14.0382 9.98906 15.6592 11.5809 16.427C11.6975 16.4824 11.8266 16.5064 11.9553 16.4967C12.084 16.487 12.208 16.4439 12.315 16.3717L14.6616 14.3757Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185156">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <a href="tel:+7 (916) 300-50-75" class="text-mob-small-bold">+7 (916) 300-50-75</a>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M21 5.25L12 13.5L3 5.25" stroke="#02283F" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </svg>

                    <a href="mailto:ef@primefoods.ru" class="text-complimentary-reg md:text-mob-small-reg">ef@primefoods.ru</a>
                  </div>

                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_4539_185169)">
                        <path
                          d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                          stroke="currentcolor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75Z"
                          stroke="currentcolor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4539_185169">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <span class="text-complimentary-reg md:text-mob-small-reg">МО, Москва</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-20 border-stroke border p-2 md:p-4">
            <h3 class="text-mob-small-medium md:text-default-medium">Учиться с нами</h3>
            <div class="mt-2 md:mt-3">
              <div class="max-md:pt-2 max-md:pb-2 md:p-3">
                <h5 class="text-subsidiary-medium md:text-mob-small-medium flex gap-2">
                  <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_4539_185058)">
                      <path d="M6 6L18 18" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M8.25 18H18V8.25" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4539_185058">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span>Академия Prime Foods</span>
                </h5>
                <div class="mt-3 flex flex-wrap justify-between gap-2 md:gap-4">
                  <div class="flex items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path
                          d="M3 5.25H21V18C21 18.1989 20.921 18.3897 20.7803 18.5303C20.6397 18.671 20.4489 18.75 20.25 18.75H3.75C3.55109 18.75 3.36032 18.671 3.21967 18.5303C3.07902 18.3897 3 18.1989 3 18V5.25Z"
                          stroke="#02283F"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M21 5.25L12 13.5L3 5.25" stroke="#02283F" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                    </svg>

                    <a href="mailto:marketing@primefoods.ru" class="text-complimentary-reg md:text-mob-small-reg">marketing@primefoods.ru</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="v-button v-button_dark mx-auto mt-4 md:mt-8" @click.stop="isQuestionModalOpen = true">
        <span class="v-button__label text-nowrap">Задать вопрос</span>
        <span class="v-button__arrow">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3200_28568)">
              <path d="M5 15L15 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M6.875 5H15V13.125" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
            <defs>
              <clipPath id="clip0_3200_28568">
                <rect width="20" height="20" fill="white"></rect>
              </clipPath>
            </defs>
          </svg>
        </span>
      </button>
    </div>
    <div class="relative mt-10 mb-10 rounded-[40px] px-6 md:mt-20 md:px-8">
      <div
        class="h-105 overflow-hidden rounded-[40px] bg-cover bg-center bg-no-repeat md:h-80"
        :style="{
          backgroundImage: 'url(/images/test-images/main-slider.jpg)',
        }"
      >
        <div class="h-[100%]">
          <div
            class="bg-text h-2/3 mask-[url('/images/masks/for_combo_mobile1.svg')] mask-cover mask-bottom mask-no-repeat p-6 md:h-full md:max-w-[100%] md:mask-[url('/images/masks/for_combo.svg')] md:mask-size-[auto_100%] md:mask-right lg:max-w-[900px] lg:mask-cover lg:mask-left"
          >
            <div class="mb-6 md:mb-8">
              <div class="font-vast text-vast-mob-title-bold md:text-vast-title-bold mb-2 text-white uppercase md:mb-3">
                премиальная продукция <br />
                собственного <br />
                производства
              </div>
            </div>
            <Link :href="route('catalog.index')">
              <VButton label="Перейти к покупке" variant="light" class="w-full md:w-fit" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </VContainer>
</template>

<style scoped>
.v-button {
  border: 1px solid;
  padding: 3px 3px 3px 24px;
  border-radius: 50px;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  align-items: center;
  font-size: var(--text-mob-small-reg);
  line-height: var(--text-mob-small-reg--line-height);
  font-weight: var(--text-mob-small-reg--font-weight);
  cursor: pointer;
  transition: all 0.3s ease-in;

  .v-button__arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 100%;
    background-color: white;
    color: var(--color-text);
    transition: all 0.3s ease-in;
  }

  &.v-button_dark {
    background-color: var(--color-text);
    border-color: var(--color-text);

    &:hover {
      background-color: var(--color-default);
      border-color: var(--color-default);

      .v-button__arrow {
        color: var(--color-default);
        transform: rotate(90deg);
      }
    }

    .v-button__label {
      color: white;
    }
  }

  &.v-button_light {
    background-color: white;
    border-color: white;
    transition: all 0.3s ease-in-out;

    &:hover {
      .v-button__label {
        color: var(--color-default);
      }

      .v-button__arrow {
        background-color: var(--color-default);
        transform: rotate(90deg);
      }
    }

    .v-button__label {
      color: var(--color-text);
    }

    .v-button__arrow {
      background-color: var(--color-text);
      color: white;
      transition: all 0.3s ease-in-out;
    }
  }

  &.v-button_outline {
    background-color: transparent;
    border-color: var(--color-text);
    transition: all 0.3s ease-in-out;

    &:hover {
      border-color: var(--color-default);

      .v-button__label {
        color: var(--color-default);
      }

      .v-button__arrow {
        background-color: var(--color-default);
        transform: rotate(90deg);
      }
    }

    .v-button__label {
      color: var(--color-text);
      transition: color 0.3s ease-in-out;
    }

    .v-button__arrow {
      background-color: var(--color-text);
      color: white;
      transition: all 0.3s ease-in-out;
    }
  }
}

.v-button:disabled {
  background-color: #cdd4d8;
  border-color: #cdd4d8;
  cursor: not-allowed;

  .v-button__label {
    color: var(--color-additional);
  }

  .v-button__arrow {
    background-color: white;
    color: var(--color-additional);
  }
}

.about-wrapper {
  cursor: pointer;
}

.about-wrapper.active {
  .about-content {
    opacity: 1;
    max-height: 500px;
  }

  .about-year {
    color: var(--color-text);
  }

  .about-arrow {
    background-color: var(--color-default);
    transform: rotate(45deg);
    color: white;
  }
}

.about-content {
  opacity: 0;
  max-height: 0;
  pointer-events: none;
  transition: all 0.5s ease-in;
}

.about-arrow {
  cursor: pointer;
}

@media (min-width: 1023px) {
  .about-wrapper:hover {
    .about-content {
      opacity: 1;
      max-height: 500px;
    }

    .about-year {
      color: var(--color-text);
    }

    .about-arrow {
      background-color: var(--color-default);
      transform: rotate(45deg);
      color: white;
    }
  }
}

swiper-container.reviews::part(container) {
  padding: 32px;
}

@media (max-width: 1023px) {
  swiper-container.reviews::part(container) {
    padding: 16px 16px 16px 0;
    width: calc(100% - 16px);
  }
}
</style>
