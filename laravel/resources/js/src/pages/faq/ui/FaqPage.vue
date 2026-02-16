<script setup lang="ts">
import type { FaqPageProps } from '../model/FaqTypes';

import { Head, Link, router, useForm } from '@inertiajs/vue3';
import { Form, FormSubmitEvent } from '@primevue/forms';
import { computed, ref } from 'vue';

import { faqModel, faqResolver } from '@/pages/faq/model/faq.model';
import IconChefHat from '@/shared/icons/IconChefHat.svg';
import IconClockOutline from '@/shared/icons/IconClockOutline.svg';
import IconCow from '@/shared/icons/IconCow.svg';
import IconForkKnife from '@/shared/icons/IconForkKnife.svg';
import IconGlobeOutline from '@/shared/icons/IconGlobeOutline.svg';
import IconMapPinOutline from '@/shared/icons/IconMapPinOutline.svg';
import IconPhoneCall from '@/shared/icons/IconPhoneCall.svg';
import IconPlus from '@/shared/icons/IconPlus.svg';
import IconCart from '@/shared/icons/IconShoppingCart.svg';
import IconSparkle from '@/shared/icons/IconSparkle.svg';
import IconTelegramOutline from '@/shared/icons/IconTelegramOutline.svg';
import IconTractor from '@/shared/icons/IconTractor.svg';
import IconTree from '@/shared/icons/IconTree.svg';
import IconVkOutline from '@/shared/icons/IconVkOutline.svg';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VContainer } from '@/shared/ui/container';
import { VFormItem } from '@/shared/ui/form-item';
import { VPicture } from '@/shared/ui/picture';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';
import CheckBox from '@/shared/ui/volt/Checkbox.vue';
import InputMask from '@/shared/ui/volt/InputMask.vue';
import InputText from '@/shared/ui/volt/InputText.vue';
import { CallMe } from '@/widgets/call-me';
import InputPhone from '@/shared/ui/input-phone/InputPhone.vue';

const breadcrumbItems = computed<{ label: string; route: string }[]>(() => [
  { label: 'Главная', route: route('main-page') },
  { label: 'Часто задаваемые вопросы', route: '/faq' },
]);

const { isMobile } = useScreenSize();

const openIndex = ref<number | null>(1);

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const form = useForm<faqModel>({
  name: '',
  phone: '',
  agreement: false,
  type: 'call_form',
});

const onSubmit = ({ valid }: FormSubmitEvent) => {
  if (valid) {
    form.post('/contactform/call-contact', {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        form.reset();
      },
    });
  }
};

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 120;
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

defineProps<FaqPageProps>();
</script>

<template>
  <Head v-if="seoData">
    <title>{{ seoData.seo_title }}</title>
    <meta v-if="seoData.seo_description" name="description" :content="seoData.seo_description" />
    <meta v-if="seoData.seo_keywords" name="keywords" :content="seoData.seo_keywords" />
  </Head>
  <VContainer class="px-6 md:px-8">
    <div>
      <Breadcrumb v-if="isMobile" :model="breadcrumbItems" class="my-2 !shrink-0 !overflow-auto bg-white">
        <template #item="{ item }">
          <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
            {{ item.label }}
          </Link>
        </template>
      </Breadcrumb>
      <div
        class="rounded-20 mb-4 h-50 bg-[url(/images/bg-faq.webp)] mask-[url(../../images/masks/for_catalog_mobile.svg)] bg-cover bg-center bg-no-repeat mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 pt-4 pb-4 min-[425px]:mask-[url(../../images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-67 lg:px-8 lg:pt-8"
      >
        <div class="flex h-full flex-col gap-8 pb-8 max-md:justify-end lg:h-64">
          <Breadcrumb v-if="!isMobile" :model="breadcrumbItems">
            <template #item="{ item }">
              <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
                {{ item.label }}
              </Link>
            </template>
          </Breadcrumb>
          <h1 class="font-vast lg:text-vast-title-bold text-vast-mob-title-bold max-w-180 font-bold text-white">Часто задаваемые вопросы</h1>
        </div>
      </div>
    </div>
    <div class="mt-4 flex flex-col gap-8 md:mt-17 md:flex-row">
      <div class="flex flex-1 flex-col gap-6">
        <div
          v-for="faqSection in faqs"
          :id="faqSection.section_name"
          :key="faqSection.section_id"
          class="border-filling rounded-20 even:bg-light-gray border p-3 md:p-6"
        >
          <h3 class="text-default-bold md:text-heavy-bold mb-4">{{ faqSection.section_name }}</h3>
          <div v-for="faq in faqSection.faqs" :key="faq.id" class="border-b-filling border-b last:border-0">
            <button class="flex w-full cursor-pointer items-center justify-between" @click="toggle(faq.id)">
              <h5 class="text-mob-small-medium md:text-default-medium py-3">
                {{ faq.name }}
              </h5>
              <IconPlus class="text-additional h-4 w-4 transition-transform duration-300 ease-in" :class="openIndex === faq.id ? 'rotate-45' : ''" />
            </button>
            <Transition
              enter-from-class="max-h-0"
              leave-to-class="max-h-0"
              enter-active-class="transition-all duration-400 ease-in-out overflow-hidden"
              leave-active-class="transition-all duration-400 ease-in-out overflow-hidden"
              enter-to-class="max-h-96"
              leave-from-class="max-h-96"
            >
              <div v-if="openIndex === faq.id" class="transition-all duration-300 ease-in-out">
                <div class="mt-4 mb-3" v-html="faq.description" />
              </div>
            </Transition>
          </div>
        </div>
      </div>
      <aside class="md:min-w-[352px]">
        <div class="bg-light-gray rounded-20 p-3 md:p-4">
          <h5 class="text-default-bold md:text-heavy-bold">Может быть интересно</h5>
          <div class="mt-6 flex flex-col gap-6 md:mt-8">
            <a
              href="#Доставка"
              class="bg-text hover:bg-text/85 relative flex items-center justify-between rounded-2xl text-white transition-colors duration-200 ease-in"
              @click.prevent="scrollTo('Доставка')"
            >
              <p class="text-small-bold px-3 py-4.5">Доставка</p>
              <img class="absolute right-4 -bottom-0 max-h-20" src="/images/test-images/image_package.webp" alt="package" />
            </a>
            <a
              href="#Оплата"
              class="bg-text hover:bg-text/85 relative flex items-center justify-between rounded-2xl text-white transition-colors duration-200 ease-in"
              @click.prevent="scrollTo('Оплата')"
            >
              <p class="text-small-bold px-3 py-4.5">Оплата</p>
              <img class="absolute right-4 -bottom-0 max-h-20" src="/images/test-images/image_phone_credit.webp" alt="package" />
            </a>
            <Link
              href="/page/return-exchange"
              class="bg-text hover:bg-text/85 relative flex items-center justify-between rounded-2xl text-white transition-colors duration-200 ease-in"
            >
              <p class="text-small-bold px-3 py-4.5">Условия возврата</p>
              <img class="absolute right-4 bottom-1 max-h-18" src="/images/test-images/image_exclamation.webp" alt="package" />
            </Link>
          </div>
        </div>
        <div class="rounded-20 border-filling mt-6 border p-3 md:p-4">
          <h5 class="text-small-medium md:text-default-medium">Контактная информация</h5>
          <div class="border-b-filling mt-4 flex flex-col gap-2 border-b pb-6 md:mt-6">
            <p class="flex items-center gap-2">
              <IconPhoneCall />
              <a class="text-mob-small-bold" href="tel:8 (800) 550-46-22">8 (800) 550-46-22</a>
            </p>
            <p class="flex items-center gap-2">
              <IconClockOutline />
              <span class="text-subsidiary-reg sm:text-mob-small-reg">Открыто до 20:00</span>
            </p>
            <p class="flex items-center gap-2">
              <IconMapPinOutline />
              <span class="text-subsidiary-reg sm:text-mob-small-reg">Москва, Рябиновая улица, 45, стр. 4</span>
            </p>
            <p class="flex items-center gap-2">
              <IconGlobeOutline />
              <a class="text-subsidiary-reg sm:text-mob-small-reg" href="https://dostavka.primebeef.ru" target="_blank" rel="noopener"
                >dostavka.primebeef.ru</a
              >
            </p>
          </div>
          <div class="mt-6">
            <h5 class="text-mob-small-reg text-additional">Связаться через мессенджеры</h5>
            <div class="text-additional mt-2 flex items-center gap-3">
              <a href="https://t.me/primefoods_ru" target="_blank" rel="noopener">
                <IconTelegramOutline class="hover:text-default transition-colors duration-300" />
              </a>
              <a href="https://vk.com/primefoods_ru" target="_blank" rel="noopener">
                <IconVkOutline class="hover:text-default transition-colors duration-300" />
              </a>
            </div>
          </div>
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
        </div>
      </aside>
    </div>
    <div class="bg-text rounded-20 mt-10 p-4 text-white md:mt-20 md:p-6">
      <h4 class="text-default-bold md:text-heavy-bold">Не нашли ответ? Задайте вопрос</h4>
      <p class="text-subsidiary-reg md:text-mob-small-reg mt-2">
        Мы свяжемся с вами и предоставим консультацию. Наши эксперты всегда помогут определиться с выбором
      </p>
      <Form
        v-slot="$form"
        class="mt-4 md:mt-8"
        :resolver="faqResolver"
        :initial-values="form"
        :validate-on-value-update="false"
        validate-on-blur
        @submit="onSubmit"
      >
        <div class="flex flex-col gap-2 md:flex-row md:items-start">
          <div class="flex flex-col items-start gap-2 md:flex-grow md:flex-row">
            <VFormItem :error="$form.name?.error?.message || form.errors.name" class="w-full">
              <InputText v-model="form.name" name="name" placeholder="Ваше имя" type="text" class="text-text w-full !bg-white" />
            </VFormItem>
            <VFormItem :error="$form.phone?.error?.message || form.errors.phone" class="w-full">
              <InputPhone
                v-model="form.phone"
                mask="+7 (999) 999-99-99"
                name="phone"
                unmask
                class="text-text !bg-white"
                placeholder="+7 (000) 000-00-00"
                fluid
                autocomplete="phone"
              />
            </VFormItem>
          </div>
          <VButton label="Связаться с экспертом" variant="light" />
        </div>
        <div class="mt-2 flex items-center gap-2">
          <CheckBox v-model="form.agreement" input-id="check" required binary />
          <label for="check" class="text-complimentary-reg">
            Нажимая на кнопку &laquo;Связаться с экспертом&raquo; я подтверждаю, что ознакомился с
            <a class="underline" href="/page/privacy-policy">политикой конфиденциальности</a> и даю согласие на обработку персональных данных
          </label>
        </div>
      </Form>
    </div>
    <div class="mt-10 md:mt-20">
      <h4 class="text-default-bold md:text-heavy-bold">Информация о гарантии качества продукции</h4>
      <div class="mt-6 grid gap-8 md:mt-8 md:grid-cols-4">
        <div class="flex gap-2 max-md:items-start md:flex-col md:gap-4">
          <div class="bg-light-gray w-fit rounded-full p-3">
            <IconTractor />
          </div>
          <div>
            <h5 class="text-mob-small-medium md:text-default-medium">Полный цикл производства</h5>
            <p class="text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4">от разведения бычков до их откорма и разделки</p>
          </div>
        </div>
        <div class="flex gap-2 max-md:items-start md:flex-col md:gap-4">
          <div class="bg-light-gray w-fit rounded-full p-3">
            <IconCow />
          </div>
          <div>
            <h5 class="text-mob-small-medium md:text-default-medium">200 дневный откорм</h5>
            <p class="text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4">
              только на основе пятикомпонентной кукурузной смеси, благодаря чему жир в мышечной ткани распределяется равномерно, а мясо обретает
              сочность и нежность и сладковатый вкус
            </p>
          </div>
        </div>
        <div class="flex gap-2 max-md:items-start md:flex-col md:gap-4">
          <div class="bg-light-gray w-fit rounded-full p-3">
            <IconSparkle />
          </div>
          <div>
            <h5 class="text-mob-small-medium md:text-default-medium">Идеальная генетика</h5>
            <p class="text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4">
              на производство идут только молодые бычки мясных пород, преимущественно абердин-ангус
            </p>
          </div>
        </div>
        <div class="flex gap-2 max-md:items-start md:flex-col md:gap-4">
          <div class="bg-light-gray w-fit rounded-full p-3">
            <IconTree />
          </div>
          <div>
            <h5 class="text-mob-small-medium md:text-default-medium">Животных выращивают</h5>
            <p class="text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4">в экологически чистых районах</p>
          </div>
        </div>
        <div class="flex gap-2 max-md:items-start md:flex-col md:gap-4">
          <div class="bg-light-gray w-fit rounded-full p-3">
            <IconForkKnife />
          </div>
          <div>
            <h5 class="text-mob-small-medium md:text-default-medium">Широчайший выбор</h5>
            <p class="text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4">
              стейки, антрекоты, филе, мякоти, вырезка, грудинка, лопатка, ребрышки и&nbsp;т.д.
            </p>
          </div>
        </div>
        <div class="flex gap-2 max-md:items-start md:flex-col md:gap-4">
          <div class="bg-light-gray w-fit rounded-full p-3">
            <IconChefHat class="h-8 w-8" />
          </div>
          <div>
            <h5 class="text-mob-small-medium md:text-default-medium">Высшая степень мраморности</h5>
            <p class="text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4">
              Мраморность придает мясу невероятную мягкость и нежный, насыщенный вкус
            </p>
          </div>
        </div>
        <div class="flex gap-2 max-md:items-start md:flex-col md:gap-4">
          <div class="bg-light-gray w-fit rounded-full p-3">
            <IconCart class="h-8 w-8" />
          </div>
          <div>
            <h5 class="text-mob-small-medium md:text-default-medium">Продажа оптом и в розницу</h5>
            <p class="text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4">Быстрая доставка</p>
          </div>
        </div>
        <VPicture src="/images/test-images/image_faq.png" alt="изображение стейков" />
      </div>
    </div>
    <VButton label="Назад в каталог" class="mx-auto mt-8" @click="router.visit(route('catalog.index'))" />
  </VContainer>
</template>
