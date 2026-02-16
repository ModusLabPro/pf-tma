<script setup lang="ts">
import { router, useForm, usePage } from '@inertiajs/vue3';
import { Form, FormSubmitEvent } from '@primevue/forms';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { route } from 'ziggy-js';

import { DefaultLayout } from '@/app/layouts';
import { IProduct, ProductCard } from '@/entities/products';
import { IReview } from '@/entities/review';
import { AddToFavorite } from '@/features/Product/add-to-favorite';
import { AddToCart } from '@/features/Product/manage-cart';
import { IFaqSection } from '@/pages/faq/model/FaqTypes';
import IconPlus from '@/shared/icons/IconPlus.svg';
import { personInitials } from '@/shared/lib/helpers/personInitials';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VContainer } from '@/shared/ui/container';
import { VFormItem } from '@/shared/ui/form-item';
import { VPicture } from '@/shared/ui/picture';
import { VSection } from '@/shared/ui/section';
import { VNavigationButton, VSlider } from '@/shared/ui/slider';
import Avatar from '@/shared/ui/volt/Avatar.vue';
import Checkbox from '@/shared/ui/volt/Checkbox.vue';
import InputText from '@/shared/ui/volt/InputText.vue';
import Rating from '@/shared/ui/volt/Rating.vue';

import { newsletterSubscribeModel, newsletterSubscribeResolver } from '../model/promo.model';

const { t } = useI18n();

const page = usePage<{
  recommendedProducts: IProduct[];
  reviews: IReview[];
  faqs: IFaqSection;
}>();

const openIndex = ref<number | null>(page.props.faqs?.faqs?.[0]?.id ?? null);

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index;
};

const newsletterForm = useForm<newsletterSubscribeModel>({
  email: '',
  agreement: false,
});

const onSubmitNewsletter = ({ valid }: FormSubmitEvent) => {
  if (valid) {
    newsletterForm.reset();
  }
};

const { isMobile } = useScreenSize();
</script>

<template>
  <DefaultLayout>
    <slot />

    <VContainer class="flex flex-col gap-20">
      <VSection
        v-if="page.props.recommendedProducts.length"
        :title="t('main_page.recommended_products')"
        class="bg-light-gray mt-6 max-[640px]:!pr-0 md:mt-12"
      >
        <VSlider
          :slides="page.props.recommendedProducts"
          :slider-options="{
            slidesPerView: 6,
            spaceBetween: 32,
            allowTouchMove: true,
          }"
        >
          <template #slide="{ slide }">
            <ProductCard
              :id="slide.id"
              :key="slide.id"
              :has-gift="slide.is_have_gift"
              :title="slide.name"
              :slug="slide.slug"
              :images="slide.images.map((i) => i.path)"
              :weight="slide.weight"
              :description="slide.short_description"
              :is-favorite="slide.is_wishlist"
              :is-new="slide.is_new"
              :degree-type="slide.degree_type"
              :sale-percent="slide.sale_percent"
              :categories="slide.tags.map((b) => b.name)"
              :unit="slide.weight_type"
              :price="Number(slide.sale_price) ?? 0"
              :price-unit="slide.price_type"
              :old-price="Number(slide.price) ?? 0"
              :cashback_percent="slide.cashback_percent"
            >
              <template #favoriteButton>
                <AddToFavorite :id="slide.id" :initial-value="slide.is_wishlist" />
              </template>
              <template #footer>
                <AddToCart :id="slide.id" :count-in-cart="slide.count_in_cart" :quantity="slide.quantity" />
              </template>
            </ProductCard>
          </template>
        </VSlider>
      </VSection>
      <VButton
        v-if="route().current() === 'promotion.index'"
        label="Назад в каталог"
        class="mx-auto w-fit"
        @click="router.visit(route('catalog.index'))"
      />
      <VSection>
        <div class="rounded-20 bg-text flex w-full flex-col text-white xl:flex-row">
          <div class="w-full p-3 md:p-6">
            <Form
              v-slot="$form"
              :resolver="newsletterSubscribeResolver"
              :initial-values="newsletterForm"
              validate-on-blur
              :validate-on-value-update="false"
              @submit="onSubmitNewsletter"
            >
              <h4 class="text-default-bold md:text-heavy-bold">Хотите быть в курсе новых акций и спецпредложений?</h4>
              <p class="text-subsidiary-reg md:text-mob-small-reg mt-2">Подписывайтесь на нашу рассылку</p>
              <div class="mt-6 md:mt-8">
                <div class="flex flex-col items-start gap-2 md:flex-row">
                  <VFormItem :error="$form.email?.error?.message ?? newsletterForm.errors.email" class="w-full">
                    <InputText
                      v-model="newsletterForm.email"
                      class="text-text w-full !bg-white"
                      placeholder="Введите ваш e-mail"
                      type="email"
                      required
                      name="email"
                    />
                  </VFormItem>
                  <VButton v-if="!isMobile" variant="light" label="Подписаться" />
                </div>
                <div class="mt-2 flex gap-3">
                  <Checkbox v-model="newsletterForm.agreement" input-id="policy-checkbox" binary size="small" name="agreement" required />
                  <label for="policy-checkbox" class="text-complimentary-reg text-additional"
                    >Нажимая на кнопку «Подписаться» я подтверждаю, что ознакомился с
                    <a href="#" target="_blank" download="политика конфиденциальности.pdf" class="hover:text-additional underline transition-colors"
                      >политикой конфиденциальности</a
                    >
                    и даю соглашение на обработку персональных данных</label
                  >
                </div>
                <VButton v-if="isMobile" variant="light" label="Подписаться" class="mt-2 w-full" />
              </div>
            </Form>
          </div>
          <div class="h-full w-full">
            <VPicture src="/images/test-images/promo-newsletter.png" alt="promo" width="100%" height="100%" class="w-full xl:-mt-10" />
          </div>
        </div>
      </VSection>
      <VSection class="bg-light-gray md:rounded-e-20 rounded-e-none !p-0 md:ml-2 lg:ml-0">
        <template #header>
          <header class="flex items-center justify-between gap-4 px-4 pt-4 lg:px-8 lg:pt-8">
            <h2 class="text-heavy-bold">{{ t('main_page.user_reviews') }}</h2>
            <VNavigationButton v-if="!isMobile" slider-key="reviews" />
          </header>
        </template>
        <div class="reviews overflow-hidden">
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
            loop="true"
            slide-active-class="sm:shadow-[0_10px_30px_0_rgba(0,0,0,0.1)]"
            class="ml-4 lg:ml-0 lg:w-[calc(100%_-_64px)]"
          >
            <template v-for="review in page.props.reviews" :key="review.id">
              <swiper-slide class="rounded-20 flex h-auto flex-col md:w-full md:max-w-88">
                <article class="rounded-20 flex h-full flex-col gap-3 bg-white p-4">
                  <div class="flex items-center justify-between gap-3">
                    <div class="flex items-center gap-2">
                      <Avatar shape="circle" :label="review.userName ? personInitials(review.userName) : 'П'" />
                      <span class="text-subsidiary-medium text-text">{{ review.userName }}.</span>
                    </div>
                    <span class="text-complimentary-bold text-[#867F7F]">{{ review.created_at }}</span>
                  </div>
                  <div class="flex flex-col gap-2">
                    <div class="flex h-[22px] items-center gap-2 text-base/[22px] font-semibold">
                      <Rating :default-value="review.rating" readonly />
                      {{ review.rating }}
                    </div>
                    <h3 class="text-complimentary-bold text-[#AC9B58]">{{ review.name }}</h3>
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

      <VSection title="Часто задаваемые вопросы">
        <div class="flex flex-col-reverse gap-8 lg:flex-row">
          <VPicture
            src="/images/return-exchange-bg.webp"
            alt="faq"
            :width="isMobile ? '100%' : '480px'"
            :height="isMobile ? '200px' : '420px'"
            img-classes="rounded-20"
          />
          <div class="w-full">
            <div v-for="faq in page.props.faqs.faqs" :key="faq.id" class="border-b-filling border-b last:border-0">
              <button class="flex w-full cursor-pointer items-center justify-between" @click="toggle(faq.id)">
                <h5 class="text-mob-small-medium md:text-default-medium py-3">
                  {{ faq.name }}
                </h5>
                <IconPlus
                  class="text-additional h-4 w-4 transition-transform duration-300 ease-in"
                  :class="openIndex === faq.id ? 'rotate-45' : ''"
                />
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
                  <VButton :label="faq.button_text" :href="faq.link_button" variant="outline" class="mb-4" />
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </VSection>
    </VContainer>
  </DefaultLayout>
</template>

<style scoped>
.reviews swiper-container::part(container) {
  padding: 32px;
}

@media (max-width: 1023px) {
  .reviews swiper-container::part(container) {
    padding: 16px 16px 16px 0;
    width: calc(100% - 16px);
  }
}
</style>
