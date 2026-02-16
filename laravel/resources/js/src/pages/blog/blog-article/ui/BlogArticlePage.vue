<script setup lang="ts">
import { Link, router, useForm } from '@inertiajs/vue3';
import { Form, FormSubmitEvent } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { useToast } from 'primevue';
import { computed, useTemplateRef } from 'vue';
import { useI18n } from 'vue-i18n';
import { route } from 'ziggy-js';
import { z } from 'zod';

import { ArticleBlog, IArticleDetail } from '@/entities/article';
import { IUser } from '@/entities/user';
import { TBanner } from '@/shared/banner';
import IconCaretLeft from '@/shared/icons/IconCaretLeft.svg';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg';
import IconThumbsDown from '@/shared/icons/IconThumbsDown.svg';
import IconThumbsUp from '@/shared/icons/IconThumbsUp.svg';
import { personInitials } from '@/shared/lib/helpers/personInitials';
import { Nullable } from '@/shared/lib/utility-types/Nullable';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VContainer } from '@/shared/ui/container';
import { VFormItem } from '@/shared/ui/form-item';
import { VPicture } from '@/shared/ui/picture';
import { VSection } from '@/shared/ui/section';
import { VShare } from '@/shared/ui/share';
import { VNavigationButton } from '@/shared/ui/slider';
import Avatar from '@/shared/ui/volt/Avatar.vue';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';
import VoltButton from '@/shared/ui/volt/Button.vue';
import Checkbox from '@/shared/ui/volt/Checkbox.vue';
import InputText from '@/shared/ui/volt/InputText.vue';
import Textarea from '@/shared/ui/volt/Textarea.vue';

const { isMobile } = useScreenSize();

const props = defineProps<{
  article: IArticleDetail;
  auth: { user: Nullable<IUser> };
  banners: TBanner[];
  flash: { success: string };
}>();

const breadcrumbItems = computed<{ label: string; route: string }[]>(() => {
  const items = [
    { label: 'Главная', route: route('main-page') },
    { label: 'Новости', route: route('blog.index') },
    { label: props.article.selection.title, route: route('blog.selection.show', { id: props.article.selection.id }) },
    { label: props.article.title, route: route('blog.article.show', { id: props.article.id }) },
  ];

  return [...items];
});

const { add } = useToast();

const form = useForm({
  email: '',
  agreement: false,
});

const resolver = zodResolver(
  z.object({
    email: z.string().email('Введите корректный email'),
    agreement: z.boolean().refine((val) => val, {
      message: 'Обязательное поле',
      path: ['agreement'],
    }),
  }),
);

const onSubmit = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    form.post(route('subscribe.store'), {
      preserveScroll: true,
      onSuccess: () => {
        form.reset();
      },
    });
  }
};

const commentForm = useForm({
  item_type: 'Article',
  item_id: props.article.id,
  text: '',
});

const commentResolver = zodResolver(
  z.object({
    item_type: z.enum(['Article']),
    item_id: z.number(),
    text: z.string().min(3, 'Минимум 3 символа'),
  }),
);

const onSubmitComment = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    commentForm.post(route('comment.store'), {
      preserveScroll: true,
      onSuccess: (data: any) => {
        form.reset();
        add({
          severity: 'success',
          life: 3000,
          detail: data?.props?.flash.success,
        });
      },
    });
  }
};

const shareComp = useTemplateRef('shareComponent');

const clickOnShareText = (event: Event): void => {
  if (shareComp.value) {
    shareComp.value.click(event);
  }
};

function reactToComment(id: number, type: 'like' | 'dislike'): void {
  router.post(
    `/comment/${id}/toggle`,
    {
      type,
    },
    {
      preserveScroll: true,
      preserveState: true,
    },
  );
}

const { t } = useI18n();
</script>

<template>
  <VContainer class="px-6 sm:px-8">
    <Breadcrumb :model="breadcrumbItems" class="mb-4 bg-white">
      <template #item="{ item }">
        <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
          {{ item.label }}
        </Link>
      </template>
    </Breadcrumb>
  </VContainer>
  <VContainer class="mt-6 flex flex-col gap-8 px-6 sm:px-8 lg:flex-row lg:items-start">
    <div class="w-full">
      <div class="border-filling flex min-w-full flex-col gap-4 rounded-3xl border p-2 md:rounded-[40px] md:p-6">
        <VPicture :src="article.image?.path" alt="" height="260px" width="100%" img-classes="rounded-20" />
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <Avatar v-if="article.author?.full_name" shape="circle" :label="personInitials(article.author?.full_name)" />
            <div class="flex flex-col gap-0.5">
              <span v-if="article.author?.full_name" class="text-subsidiary-medium">{{ article.author?.full_name }}</span>
              <span class="text-complimentary-reg text-additional">Статья / {{ article.created_at }}</span>
            </div>
          </div>
          <div class="flex cursor-pointer items-center gap-2">
            <span class="text-complimentary-reg" @click="clickOnShareText">Поделиться</span>
            <VShare ref="shareComponent" :url="route('blog.article.show', { id: article.id })" />
          </div>
        </div>
        <div class="flex flex-col items-start justify-between gap-3 md:flex-row md:gap-6">
          <h1 class="font-vast text-vast-additional lg:text-vast-title-bold max-w-[70%] font-bold">
            {{ article.title }}
          </h1>
          <div class="flex flex-wrap items-center gap-2">
            <span v-for="tag in article.tags" :key="tag" class="text-mob-small-reg bg-input rounded-20 px-4 py-3">{{ tag }}</span>
          </div>
        </div>
      </div>
      <div class="mt-8" v-html="article.text" />
      <VSection class="mt-10 !p-0 md:mt-15">
        <template #title>
          <h2 class="text-default-bold sm:text-heavy-bold">
            Комментарии <span class="text-additional font-normal">({{ article.comments_count }})</span>
          </h2>
        </template>
        <div v-if="!auth.user" class="bg-light-gray rounded-20 mt-4 flex items-center justify-between p-4 md:mt-6">
          <p class="text-mob-small-bold md:text-default-medium">Авторизуйтесь чтобы оставить комментарий</p>
          <VButton type="button" label="Войти" @click="router.get(route('api.v1.auth-check'), {}, { preserveScroll: true })" />
        </div>
        <div v-else class="bg-input rounded-20 p-4">
          <Form
            v-slot="$form"
            :resolver="commentResolver"
            :validate-on-value-update="false"
            validate-on-blur
            :initial-values="commentForm"
            @submit="onSubmitComment"
          >
            <VFormItem :error="$form.text?.error?.message ?? commentForm.errors.text" class="w-full">
              <Textarea
                v-model="commentForm.text"
                name="text"
                placeholder="Оставьте свой комментарий"
                pt:root="shadow-none !bg-transparent overflow-y-auto !rounded-none !p-0 [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden resize-none w-full !border-none"
              />
            </VFormItem>
            <VButton label="Отправить" class="mt-2 md:justify-self-end" />
          </Form>
        </div>
        <div v-if="article.comments_count > 0" class="mt-4">
          <article v-for="review in article.comments" :key="review.id" class="border-b-stroke flex flex-col gap-3 border-b p-3">
            <div class="flex items-center justify-between gap-3">
              <div class="flex items-center gap-2">
                <Avatar shape="circle" :label="review.userName ? personInitials(review.userName) : 'П'" />
                <div class="flex flex-col gap-0.5">
                  <span class="text-subsidiary-medium text-text">{{ review.userName }}</span>
                  <span class="text-complimentary-bold text-additional">{{ review.created_at }}</span>
                </div>
              </div>
              <div class="text-additional flex items-center gap-2">
                <p v-if="review.likes_count" class="text-additional text-complimentary-reg">{{ review.likes_count }} полезно</p>
                <IconThumbsUp class="cursor-pointer" :class="{ 'text-text': review.liked_by_user }" @click="reactToComment(review.id, 'like')" />
                <IconThumbsDown
                  class="cursor-pointer"
                  :class="{ 'text-text': review.disliked_by_user }"
                  @click="reactToComment(review.id, 'dislike')"
                />
              </div>
            </div>
            <p class="text-subsidiary-reg md:text-mob-small-reg">
              {{ review.text }}
            </p>
          </article>
        </div>
      </VSection>
      <div class="mt-10 flex flex-col-reverse justify-between gap-4 md:mt-17.5 lg:flex-row lg:items-center">
        <Link :href="route('blog.index')" class="max-lg:w-full">
          <VoltButton label="Вернуться в раздел новостей" rounded size="small" class="max-lg:w-full" />
        </Link>
        <div class="flex items-center gap-4 md:gap-8">
          <Link
            v-if="article.before_url"
            :href="article.before_url"
            class="text-subsidiary-reg bg-filling hover:bg-default flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-300 hover:text-white max-lg:w-full"
          >
            <IconCaretLeft class="h-5 w-5" />
            <span>{{ isMobile ? 'Назад' : 'Предыдущая статья' }}</span></Link
          >
          <Link
            v-if="article.next_url"
            :href="article.next_url"
            class="text-subsidiary-reg hover:bg-default bg-filling flex items-center gap-2 rounded-full px-3 py-2 text-nowrap transition-all duration-300 hover:text-white max-lg:w-full"
            ><span class="w-full text-right">Следующая статья</span>
            <IconCaretRight class="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
    <aside class="sm:min-w-[352px]">
      <VSection title="Похожие статьи" class="!p-0">
        <div class="gap-2 max-lg:grid min-[480px]:grid-cols-2 lg:flex lg:flex-col">
          <ArticleBlog
            v-for="card in article.related"
            :id="card.id"
            :key="card.id"
            :title="card.title"
            :description="card.mini_description"
            :image="card.image"
            :updated-at="card.updated_at"
          >
            <template #actions>
              <VShare :url="route('blog.article.show', card.id)" />
            </template>
          </ArticleBlog>
        </div>
        <div class="rounded-20 bg-light-gray mt-6 overflow-hidden p-4 lg:max-w-[352px]">
          <h2 class="text-heavy-bold">Рассылка о вкусном и полезном</h2>
          <Form v-slot="$form" class="mt-8 flex flex-col gap-2" :resolver :initial-values="form" @submit="onSubmit">
            <VFormItem :error="$form.email?.error?.message ?? form.errors.email">
              <InputText
                v-model="form.email"
                :placeholder="t('footer.input_email')"
                type="email"
                class="border-text hover:border-text-secondary"
                required
                autocomplete="username"
                name="email"
                :invalid="!!form.errors.email"
              />
            </VFormItem>
            <VFormItem>
              <div class="flex gap-3">
                <Checkbox v-model="form.agreement" input-id="checkbox-article" binary size="small" name="agreement" required />
                <label for="checkbox-article" class="text-complimentary-reg text-additional"
                  >{{ t('footer.privacy_policy_checkbox_step_1') }}
                  <Link href="/page/privacy-policy" class="hover:text-additional underline transition-colors"
                    >{{ t('footer.privacy_policy_checkbox_link') }}
                  </Link>
                  {{ t('footer.privacy_policy_checkbox_step_2') }}</label
                >
              </div>
            </VFormItem>
            <VButton type="submit" label="Подписаться" class="z-10" />
          </Form>
          <VPicture src="/images/test-images/reg-info-estore.webp" alt="Подписка" img-classes="scale-150 -mb-25" class="mx-auto" />
        </div>
      </VSection>
    </aside>
  </VContainer>
  <VContainer class="mt-20 px-6 sm:px-8">
    <div class="relative overflow-hidden rounded-[40px]">
      <swiper-container
        space-between="32"
        loop="true"
        :navigation="{
          nextEl: '.slider-next-main',
          prevEl: '.slider-prev-main',
        }"
      >
        <swiper-slide v-for="banner in banners" :key="banner.id">
          <div
            class="h-105 overflow-hidden rounded-[40px] bg-cover bg-center bg-no-repeat md:h-80"
            :style="{
              backgroundImage: `url(${banner.image.path})`,
            }"
          >
            <div class="h-[100%]">
              <div
                class="bg-text h-2/3 mask-[url('/images/masks/for_combo_mobile1.svg')] mask-cover mask-bottom mask-no-repeat p-6 md:h-full md:max-w-[70%] md:mask-[url('/images/masks/for_combo.svg')] md:mask-size-[auto_150%] md:mask-right lg:mask-contain lg:mask-left"
              >
                <div class="mb-6 md:mb-8">
                  <div class="font-vast text-vast-mob-title-bold md:text-vast-title-bold mb-2 max-w-[60%] text-white uppercase md:mb-3">
                    {{ banner.title }}
                  </div>
                  <span class="text-mob-small-reg text-white">{{ banner.description }}</span>
                </div>
                <Link :href="banner.link_url">
                  <VButton :label="banner.button_text" variant="light" class="w-full md:mt-14 md:w-fit" />
                </Link>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <VNavigationButton
        v-if="banners.length > 1"
        class="absolute right-4 bottom-4 z-10 shadow-none md:top-4 md:bottom-auto"
        slider-key="main"
        button-color="#E7EAEC"
      />
    </div>
  </VContainer>
</template>

<style scoped></style>
