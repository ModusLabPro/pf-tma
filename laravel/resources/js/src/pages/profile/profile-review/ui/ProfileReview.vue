<script setup lang="ts">
import { Link, router, useForm } from '@inertiajs/vue3';
import { computed, ref, useTemplateRef } from 'vue';
import { route } from 'ziggy-js';

import { ProfileLayout } from '@/app/layouts';
import { IProductsPendingReview, IReviewedProduct } from '@/entities/products/model/product';
import { IRecipe } from '@/entities/recipes';
import { IReviewedRecipe } from '@/entities/recipes/model';
import { AddReviewModal } from '@/features/Review/add-review';
import { EditReviewModal } from '@/features/Review/edit-review';
import IconArrowsDownUp from '@/shared/icons/IconArrowsDownUp.svg';
import IconBookOpen from '@/shared/icons/IconBookOpen.svg';
import IconCheckCircle from '@/shared/icons/IconCheckCircle.svg';
import IconFlash from '@/shared/icons/IconFlash.svg';
import IconShoppingBag from '@/shared/icons/IconShoppingBag.svg';
import IconThumbsUp from '@/shared/icons/IconThumbsUp.svg';
import IconTooltip from '@/shared/icons/IconTooltip.svg';
import { useScreenSize } from '@/shared/media-queries';
import { VTooltip } from '@/shared/tooltip';
import { VButton } from '@/shared/ui/button';
import { VPagination } from '@/shared/ui/pagination';
import { VPicture } from '@/shared/ui/picture';
import { VSlider } from '@/shared/ui/slider';
import VoltButton from '@/shared/ui/volt/Button.vue';
import Rating from '@/shared/ui/volt/Rating.vue';
import Tab from '@/shared/ui/volt/Tab.vue';
import TabList from '@/shared/ui/volt/TabList.vue';
import TabPanel from '@/shared/ui/volt/TabPanel.vue';
import TabPanels from '@/shared/ui/volt/TabPanels.vue';
import Tabs from '@/shared/ui/volt/Tabs.vue';

defineOptions({
  layout: ProfileLayout,
});

const props = defineProps<{
  productsPendingReview: IProductsPendingReview[];
  productsReviewed: IReviewedProduct[];
  recipesPendingReview: IRecipe[];
  recipesReviewed: IReviewedRecipe[];
  reviewsLeft: number;
  canLeaveReview: boolean;
  reviewBonusAmount: number;
}>();

const { isMobile } = useScreenSize();

const form = useForm({
  sort_by: route().queryParams?.sort_by ?? 'created_at',
  sort_dir: route().queryParams?.sort_dir ?? 'desc',
});

const currentSortBy = computed(() => form.sort_by);
const currentSortDir = computed(() => form.sort_dir);

const sortByDate = (): void => {
  form.sort_dir = form.sort_dir === 'asc' ? 'desc' : 'asc';

  form.get(route('user.profile.reviews'), {
    preserveState: true,
    replace: true,
    preserveScroll: true,
  });
};

const pageContent = useTemplateRef('reviews-page');

const onPageUpdate = async (): Promise<void> => {
  pageContent.value?.scrollIntoView({
    behavior: 'smooth',
  });
};
const currentPage = ref<number>(1);
const perPage: number = 4;

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return props.productsReviewed.slice(start, end);
});

const paginatedRecipes = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  const end = start + perPage;
  return props.recipesReviewed.slice(start, end);
});

const isAddModalOpen = ref<boolean>(false);
const currentItem = ref<{ id: number; type: 'Product' | 'Recipe' | 'Combo' } | null>(null);
const activeTab = ref('0');

const openAddModal = (slide: IProductsPendingReview | IRecipe): void => {
  if (('type' in slide && slide.type === 'Product') || ('type' in slide && slide.type === 'Combo')) {
    isAddModalOpen.value = true;
    currentItem.value = {
      id: slide.item.id,
      type: slide.type,
    };
  } else {
    isAddModalOpen.value = true;
    currentItem.value = {
      id: slide.id,
      type: 'Recipe',
    };
  }
};

const isEditModalOpen = ref<boolean>(false);
const currentReview = ref<any>(null);

const openEditModal = (review: IReviewedProduct | IReviewedRecipe): void => {
  isEditModalOpen.value = true;
  currentReview.value = review;
};

const deleteReview = (id: number): void => {
  router.delete(route('user.profile.reviews.destroy', id), { preserveScroll: true, preserveState: true });
};
</script>

<template>
  <div ref="reviews-page" class="w-full max-md:p-6 lg:min-w-0 lg:flex-1">
    <h1 class="text-default-bold">Мои отзывы</h1>
    <Tabs v-model="activeTab" value="0" class="mt-8">
      <TabList>
        <Tab value="0" class="flex basis-1/2 items-center justify-center gap-2">
          <IconShoppingBag />
          <span>Товары</span></Tab
        >
        <Tab value="1" class="flex basis-1/2 items-center justify-center gap-2">
          <IconBookOpen />
          <span>Рецепты</span></Tab
        >
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="flex flex-col gap-6 md:gap-8">
            <section v-if="productsPendingReview.length" class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <div class="flex items-center justify-between">
                  <h2 class="text-small-medium">Ждут отзыва</h2>
                  <div class="flex items-center gap-2">
                    <IconFlash class="h-5 w-5" />
                    <span class="text-subsidiary-medium md:text-mob-small-bold">Получайте бонусы за отзывы!</span>
                  </div>
                </div>
                <div class="flex items-center gap-2">
                  <p class="text-mob-small-reg md:text-small-reg text-additional font-normal">
                    Доступно отзывов в этом месяце: {{ reviewsLeft }} из 3
                  </p>
                  <VTooltip value="Можно оставить до 3 отзывов в месяц">
                    <template #default>
                      <IconTooltip class="text-additional hover:text-primary transition-colors" />
                    </template>
                  </VTooltip>
                </div>
              </div>
              <div v-if="canLeaveReview" class="w-full">
                <VSlider
                  :slides="productsPendingReview"
                  :slider-options="{
                    allowTouchMove: true,
                    breakpoints: {
                      0: { slidesPerView: 1, spaceBetween: 8 },
                      640: { slidesPerView: 2, spaceBetween: 8 },
                      1485: { slidesPerView: 3, spaceBetween: 12 },
                    },
                  }"
                >
                  <template #slide="{ slide }">
                    <article
                      class="border-filling rounded-20 flex h-full cursor-pointer items-start gap-2 border p-2 transition-all duration-200 ease-in hover:border-white hover:shadow-[0_1px_5px_0_rgba(0,0,0,0.1)] md:p-4"
                      @click="openAddModal(slide)"
                    >
                      <VPicture
                        v-if="slide.item.images[0]?.path"
                        :src="slide.item.images[0].path"
                        alt="Изображение товара"
                        :width="isMobile ? '74px' : '116px'"
                        :height="isMobile ? '100%' : '80px'"
                        class="bg-filling shrink-0 rounded-lg max-md:rounded-xl max-sm:h-full"
                        img-classes="rounded-lg"
                      />
                      <div class="flex flex-col gap-0.5">
                        <h4 class="text-mob-small-bold line-clamp-2">{{ slide.item.name }}</h4>
                        <p class="text-mob-small-medium"><span class="text-subsidiary-medium text-additional">Дата доставки:</span> 31.06.2025</p>
                        <Rating size="large" readonly />
                      </div>
                    </article>
                  </template>
                </VSlider>
              </div>
              <div
                v-else
                class="bg-light-gray mt-2 flex flex-col items-center gap-6 rounded-[40px] max-[1120px]:p-6 min-[1120px]:pl-40 md:flex-row lg:gap-15"
              >
                <VPicture
                  src="/images/ReviewsLeft.png"
                  alt="Лимит исчерпан"
                  class="max-md:-mt-10 md:-my-4"
                  img-classes="max-h-[100px] md:max-h-[180px] "
                />
                <div class="text-center md:text-left">
                  <h2 class="text-default-medium md:text-heavy-medium">Лимит отзывов исчерпан</h2>
                  <p class="text-subsidiary-reg md:text-mob-small-reg mt-2">Новые отзывы можно будет оставить с 1 числа следующего месяца</p>
                </div>
              </div>
            </section>
            <section v-if="productsReviewed.length" class="flex flex-col gap-4">
              <div class="flex items-center justify-between">
                <h2 ref="productsReviewedHeader" class="text-small-medium">Вы уже оценили</h2>
                <div class="text-mob-small-medium flex items-center gap-3">
                  <span class="text-mob-small-reg text-additional">Сортировка:</span>
                  <button class="flex cursor-pointer items-center gap-1 transition-all duration-200 ease-in-out" @click="sortByDate">
                    <span>по дате</span>
                    <IconArrowsDownUp v-if="currentSortBy === 'created_at'" :class="{ 'rotate-180': currentSortDir === 'asc' }" />
                  </button>
                </div>
              </div>
              <div>
                <article v-for="review in paginatedProducts" :key="review.id" class="border-b-stroke flex flex-col gap-2 border-b py-3">
                  <div class="flex flex-col-reverse items-start justify-between gap-2 md:flex-row">
                    <div class="flex flex-1 items-start gap-2">
                      <VPicture
                        v-if="review.product_images?.path"
                        :src="review.product_images?.path"
                        alt="Изображение товара"
                        :width="isMobile ? '106px' : '116px'"
                        :height="isMobile ? '74px' : '80px'"
                        class="bg-filling shrink-0 rounded-lg"
                        img-classes="rounded-lg bg-filling"
                      />
                      <div class="flex w-full flex-col gap-0.5">
                        <Link v-if="review.item_type === 'Combo\\Models\\Combo'" :href="route('combo.show', review.id)">
                          <h4 class="text-mob-small-medium line-clamp-2 w-full">{{ review.name }}</h4>
                        </Link>
                        <Link v-else :href="route('catalog.product.show', review.slug)">
                          <h4 class="text-mob-small-medium line-clamp-2 w-full">{{ review.name }}</h4>
                        </Link>
                        <p class="text-complimentary-reg text-additional">{{ review.created_at }}</p>
                        <Rating :default-value="review.rating" readonly />
                      </div>
                    </div>
                    <div class="flex items-center justify-end max-md:w-full">
                      <div v-if="review.status === 'На модерации'" class="flex items-center">
                        <p class="text-complimentary-reg md:text-mob-small-medium mr-2">{{ review.status }}</p>
                        <VTooltip value="Проверяем отзыв на соответствие правилам платформы и законодательству. Это займет не более 24 часов.">
                          <template #default>
                            <IconTooltip class="hover:text-additional transition-colors" />
                          </template>
                        </VTooltip>
                      </div>
                      <div v-else-if="review.status === 'Активен'" class="flex items-center gap-4">
                        <div v-if="review.likes_count" class="flex items-center gap-2">
                          <span class="text-complimentary-reg text-additional">{{ review.likes_count }} полезно</span>
                          <IconThumbsUp class="text-additional h-5 w-5" />
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="text-complimentary-reg md:text-mob-small-medium text-ready-green">Опубликован</span>
                          <IconCheckCircle class="text-ready-green h-5 w-5" />
                        </div>
                        <div v-if="review.bonus_awarded" class="text-default text-complimentary-reg md:text-mob-small-reg">
                          <span class="text-complimentary-bold md:text-mob-small-medium">+ {{ reviewBonusAmount }} </span>
                          бонусов
                        </div>
                      </div>
                      <template v-else-if="review.status === 'Отклонён'">
                        <p class="text-complimentary-reg md:text-mob-small-medium text-additional mr-2">{{ review.status }}</p>
                        <IconTooltip />
                      </template>
                    </div>
                  </div>
                  <p class="text-subsidiary-reg md:text-mob-small-reg">{{ review.text }}</p>
                  <div v-if="review.images.length" class="flex items-center gap-2">
                    <VPicture
                      v-for="image in review.images"
                      :key="image.id"
                      :src="image?.path"
                      alt="Изображение товара"
                      :width="isMobile ? '54px' : '90px'"
                      :height="isMobile ? '60px' : '100px'"
                      class="bg-filling shrink-0 rounded-lg"
                      img-classes="rounded-lg bg-filling"
                    />
                  </div>
                  <div v-if="review.status !== 'Активен'" class="flex items-center gap-2">
                    <VoltButton label="Редактировать отзыв" rounded variant="outlined" size="small" @click="openEditModal(review)" />
                    <VoltButton
                      label="Удалить отзыв"
                      class="danger-button !border-[#F04E27]"
                      rounded
                      variant="outlined"
                      size="small"
                      @click="deleteReview(review.id)"
                    />
                  </div>
                  <div v-if="review.answer" class="bg-input flex flex-col gap-0.5 rounded-lg p-3">
                    <h5 class="text-subsidiary-medium md:text-mob-small-reg text-additional">Ответ магазина</h5>
                    <p class="text-subsidiary-reg md:text-mob-small-reg">{{ review.answer }}</p>
                  </div>
                </article>
              </div>
            </section>
            <section v-else class="bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15">
              <div class="flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15">
                <VPicture
                  src="/images/profile/productReviewEmpty.webp"
                  alt="heart"
                  class="-mt-6 lg:ml-4 xl:scale-115"
                  :height="isMobile ? '100px' : '140px'"
                />
                <div class="flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]">
                  <p class="text-default-medium md:text-heavy-medium max-md:text-center">Ждём ваши оценки и отзывы</p>
                  <Link :href="route('catalog.index')">
                    <VButton :label="'В каталог'" class="w-fit max-md:mt-6 md:mt-8" />
                  </Link>
                </div>
              </div>
            </section>
            <VPagination
              v-model="currentPage"
              :per-page="perPage"
              :total-count="productsReviewed.length"
              class="mx-auto mt-8 justify-center"
              @update:model-value="onPageUpdate"
            />
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="flex flex-col gap-8">
            <section v-if="recipesPendingReview.length" class="flex flex-col gap-4">
              <div class="flex items-center justify-between">
                <h2 class="text-small-medium">Любимые рецепты</h2>
              </div>
              <div class="w-full">
                <VSlider
                  :slides="recipesPendingReview"
                  :slider-options="{
                    allowTouchMove: true,
                    breakpoints: {
                      0: { slidesPerView: 1, spaceBetween: 8 },
                      1280: { slidesPerView: 3, spaceBetween: 12 },
                    },
                  }"
                >
                  <template #slide="{ slide }">
                    <article
                      class="border-filling rounded-20 flex h-full cursor-pointer items-start gap-2 border p-2 transition-all duration-200 ease-in hover:border-white hover:shadow-[0_1px_5px_0_rgba(0,0,0,0.1)] md:p-4"
                      @click="openAddModal(slide)"
                    >
                      <VPicture
                        v-if="slide.image?.path"
                        :src="slide.image?.path"
                        alt="Изображение товара"
                        :width="isMobile ? '74px' : '116px'"
                        :height="isMobile ? '97px' : '80px'"
                        class="bg-filling shrink-0 rounded-xl max-sm:h-full md:rounded-lg"
                        img-classes="rounded-lg"
                      />
                      <div class="flex h-full flex-col gap-0.5">
                        <h4 class="text-mob-small-bold line-clamp-2">{{ slide.title }}</h4>
                        <p class="text-complimentary-reg line-clamp-2">
                          {{ slide.mini_description }}
                        </p>
                        <Rating size="large" readonly />
                      </div>
                    </article>
                  </template>
                </VSlider>
              </div>
            </section>
            <section v-if="recipesReviewed.length" class="flex flex-col gap-4">
              <div class="flex items-center justify-between">
                <h2 class="text-small-medium">Вы уже оценили</h2>
                <div class="text-mob-small-medium flex items-center gap-3">
                  <span class="text-mob-small-reg text-additional">Сортировка:</span>
                  <button class="flex cursor-pointer items-center gap-1 transition-all duration-200 ease-in-out" @click="sortByDate">
                    <span>по дате</span>
                    <IconArrowsDownUp v-if="currentSortBy === 'created_at'" :class="{ 'rotate-180': currentSortDir === 'asc' }" />
                  </button>
                </div>
              </div>
              <div>
                <article v-for="review in paginatedRecipes" :key="review.id" class="border-b-stroke flex flex-col gap-2 border-b py-3">
                  <div class="flex flex-col-reverse items-start justify-between md:flex-row">
                    <div class="flex flex-1 items-start gap-2">
                      <VPicture
                        :src="review?.product_images?.path"
                        alt="Изображение товара"
                        :width="isMobile ? '107px' : '116px'"
                        :height="isMobile ? '74px' : '80px'"
                        class="bg-filling shrink-0 rounded-lg"
                        img-classes="rounded-lg bg-filling"
                      />
                      <div class="flex flex-col gap-0.5">
                        <h4 class="text-mob-small-medium max-md:line-clamp-2">{{ review.name }}</h4>
                        <p class="text-complimentary-reg text-additional">{{ review.created_at }}</p>
                        <Rating :default-value="review.rating" readonly />
                      </div>
                    </div>
                    <div class="flex items-center justify-end max-md:w-full">
                      <div v-if="review.status === 'На модерации'" class="flex items-center">
                        <p class="text-complimentary-reg md:text-mob-small-medium mr-2">{{ review.status }}</p>
                        <VTooltip value="Проверяем отзыв на соответствие правилам платформы и законодательству. Это займет не более 24 часов.">
                          <template #default>
                            <IconTooltip class="hover:text-additional transition-colors" />
                          </template>
                        </VTooltip>
                      </div>
                      <div v-else-if="review.status === 'Активен'" class="flex items-center gap-4">
                        <div v-if="review.likes_count" class="flex items-center gap-2">
                          <span class="text-complimentary-reg text-additional">{{ review.likes_count }} полезно</span>
                          <IconThumbsUp class="text-additional h-5 w-5" />
                        </div>
                        <div class="flex items-center gap-2">
                          <span class="text-complimentary-reg md:text-mob-small-medium text-ready-green">Опубликован</span>
                          <IconCheckCircle class="text-ready-green h-5 w-5" />
                        </div>
                      </div>
                      <template v-else-if="review.status === 'Отклонён'">
                        <p class="text-complimentary-reg md:text-mob-small-medium text-additional mr-2">{{ review.status }}</p>
                        <IconTooltip />
                      </template>
                    </div>
                  </div>
                  <p class="text-subsidiary-reg md:text-mob-small-reg break-all">{{ review.text }}</p>
                  <div v-if="review.images.length" class="flex items-center gap-2">
                    <VPicture
                      v-for="image in review.images"
                      :key="image.id"
                      :src="image?.path"
                      alt="Изображение товара"
                      :width="isMobile ? '74px' : '90px'"
                      :height="isMobile ? '64px' : '100px'"
                      class="bg-filling shrink-0 rounded-lg"
                      img-classes="rounded-lg bg-filling"
                    />
                  </div>
                  <div v-if="review.status !== 'Активен'" class="flex items-center gap-2">
                    <VoltButton label="Редактировать отзыв" rounded variant="outlined" size="small" @click="openEditModal(review)" />
                    <VoltButton
                      label="Удалить отзыв"
                      class="danger-button !border-[#F04E27]"
                      rounded
                      variant="outlined"
                      size="small"
                      @click="deleteReview(review.id)"
                    />
                  </div>
                  <div v-if="review.answer" class="bg-input flex flex-col gap-0.5 rounded-lg p-3">
                    <h5 class="text-mob-small-reg text-additional">Ответ магазина</h5>
                    <p class="text-mob-small-reg">{{ review.answer }}</p>
                  </div>
                </article>
              </div>
            </section>
            <section v-else class="bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15">
              <div class="flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15">
                <VPicture
                  src="/images/profile/productReviewEmpty.webp"
                  alt="heart"
                  class="-mt-6 lg:ml-4 xl:scale-115"
                  :height="isMobile ? '100px' : '140px'"
                />
                <div class="flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]">
                  <p class="text-default-medium md:text-heavy-medium max-md:text-center">Ждём ваши оценки и отзывы</p>
                  <Link :href="route('catalog.index')">
                    <VButton :label="'В каталог'" class="w-fit max-md:mt-6 md:mt-8" />
                  </Link>
                </div>
              </div>
            </section>
            <VPagination
              v-model="currentPage"
              :per-page="perPage"
              :total-count="recipesReviewed.length"
              class="mx-auto mt-8 justify-center"
              @update:model-value="onPageUpdate"
            />
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
    <AddReviewModal v-model:visible="isAddModalOpen" :item="currentItem" />
    <EditReviewModal v-model:visible="isEditModalOpen" :review="currentReview" />
  </div>
</template>

<style scoped>
.p-active\:bg-default {
  &[data-p~='active'],
  &[data-p-active='true'] {
    background-color: var(--color-text);
  }
}

::v-deep(.danger-button [data-pc-section='label']) {
  color: #f04e27 !important;
}
</style>
