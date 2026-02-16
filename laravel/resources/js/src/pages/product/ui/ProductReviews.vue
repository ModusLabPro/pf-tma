<script setup lang="ts">
import type { IReview } from '@/entities/review';

import { Link, useForm } from '@inertiajs/vue3';
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { route } from 'ziggy-js';

import { reactToReview } from '@/features/Review/react-review';
import IconArrowsDownUp from '@/shared/icons/IconArrowsDownUp.svg';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg?skipsvgo';
import IconSort from '@/shared/icons/IconSort.svg';
import IconThumbsDown from '@/shared/icons/IconThumbsDown.svg';
import IconThumbsUp from '@/shared/icons/IconThumbsUp.svg';
import IconTooltip from '@/shared/icons/IconTooltip.svg';
import { personInitials } from '@/shared/lib/helpers/personInitials';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VPicture } from '@/shared/ui/picture';
import Avatar from '@/shared/ui/volt/Avatar.vue';
import Dialog from '@/shared/ui/volt/Dialog.vue';
import RadioButton from '@/shared/ui/volt/RadioButton.vue';
import Rating from '@/shared/ui/volt/Rating.vue';

const { isMobile } = useScreenSize();
const isSortModalOpen = ref<boolean>(false);

const { t } = useI18n();

const sortOptions = ref<Array<{ sortLabel: string; key: string }>>([
  { sortLabel: 'По дате', key: 'created_at' },
  { sortLabel: 'По оценке', key: 'rating' },
  { sortLabel: 'По полезности', key: 'usefulness' },
]);

const selectedSort = ref<'created_at' | 'rating' | 'usefulness'>('created_at');

const props = defineProps<{ reviews: IReview[]; slug: string }>();

const form = useForm({
  sort_by: route().queryParams?.sort_by ?? 'created_at',
  sort_dir: route().queryParams?.sort_dir ?? 'asc',
});

const currentSortBy = computed(() => form.sort_by);
const currentSortDir = computed(() => form.sort_dir);

const sortBy = (field: 'created_at' | 'rating' | 'usefulness') => {
  if (form.sort_by === field) {
    form.sort_dir = form.sort_dir === 'desc' ? 'asc' : 'desc';
  } else {
    form.sort_by = field;
    form.sort_dir = 'asc';
  }

  form.get(route('catalog.product.show', props.slug), {
    preserveState: true,
    replace: true,
    preserveScroll: true,
    onSuccess: () => {
      isSortModalOpen.value = false;
    },
  });
};

const initialCount: number = 4;
const showAll = ref<boolean>(false);

const displayedReviews = computed<IReview[]>(() => {
  return showAll.value ? props.reviews : props.reviews.slice(0, initialCount);
});

const showButton = computed<boolean>(() => props.reviews.length > initialCount);
</script>

<template>
  <div>
    <div class="flex justify-between">
      <h4 class="text-small-medium md:text-default-medium">Всего {{ t('product_detail_card.reviews', reviews.length).toLowerCase() }}</h4>
      <div v-if="!isMobile" class="text-mob-small-medium flex items-center gap-2">
        <p class="text-mob-small-reg text-additional">Сортировка:</p>
        <button
          class="flex cursor-pointer items-center gap-1 transition-all duration-200 ease-in-out"
          :class="{ 'text-default': currentSortBy === 'created_at' }"
          @click="sortBy('created_at')"
        >
          <span>по дате</span>
          <IconArrowsDownUp v-if="currentSortBy === 'created_at'" :class="{ 'rotate-180': currentSortDir === 'desc' }" />
        </button>
        <button class="flex cursor-pointer items-center" :class="{ 'text-default': currentSortBy === 'rating' }" @click="sortBy('rating')">
          <span>по оценке</span>
          <IconArrowsDownUp v-if="currentSortBy === 'rating'" :class="{ 'rotate-180': currentSortDir === 'desc' }" />
        </button>
        <button class="flex cursor-pointer items-center" :class="{ 'text-default': currentSortBy === 'usefulness' }" @click="sortBy('usefulness')">
          <span>по полезности</span>
          <IconArrowsDownUp v-if="currentSortBy === 'usefulness'" :class="{ 'rotate-180': currentSortDir === 'desc' }" />
        </button>
      </div>
      <div v-else class="text-subsidiary-reg flex items-center gap-1">
        <button class="inline-flex items-center" @click="isSortModalOpen = true">
          <IconSort width="16px" height="16px" />
          <span>Сортировка</span>
        </button>
        <Dialog v-model:visible="isSortModalOpen" modal :draggable="false" class="!rounded-20 w-9/10 pb-2">
          <template #header>
            <h4 class="text-default-bold">Сортировка</h4>
          </template>

          <div class="text-small-regular mt-1 flex min-w-[260px] flex-col gap-2">
            <div v-for="sort in sortOptions" :key="sort.key" class="ml-2">
              <RadioButton v-model="selectedSort" :input-id="sort.key" :name="sort.key" :value="sort.key" />
              <label class="cursor-pointer pl-3" :for="sort.key">{{ sort.sortLabel }}</label>
            </div>
            <VButton label="Применить" class="mt-3" type="submit" @click="sortBy(selectedSort)" />
          </div>
        </Dialog>
      </div>
    </div>
    <div class="bg-non-active mt-6 flex flex-col justify-between gap-1 rounded-lg p-2 md:flex-row md:gap-0">
      <p class="max-md:text-subsidiary-reg flex gap-1 md:items-center">
        <IconTooltip class="text-default" />
        Оставить отзыв можно через личный кабинет после покупки товара
      </p>
      <Link href="#" class="max-md:text-subsidiary-reg max-md:text-additional ml-5 flex items-center"
        >Правила оформления отзывов <span><IconCaretRight class="!h-4 !w-4" /></span
      ></Link>
    </div>
    <div class="mt-6">
      <div v-if="reviews.length > 0">
        <template v-for="review in displayedReviews" :key="review.id">
          <article class="border-b-stroke flex flex-col gap-3 border-b p-4">
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
                <IconThumbsUp class="cursor-pointer" :class="{ 'text-text': review.liked_by_user }" @click="reactToReview(review.id, 'like')" />
                <IconThumbsDown
                  class="cursor-pointer"
                  :class="{ 'text-text': review.disliked_by_user }"
                  @click="reactToReview(review.id, 'dislike')"
                />
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div class="text-subsidiary-medium flex h-[22px] items-center gap-2 font-semibold max-md:flex-row-reverse md:text-base/[22px]">
                <Rating :default-value="review.rating" readonly />
                {{ review.rating }}
              </div>
              <h3 class="text-complimentary-bold text-[#AC9B58]">{{ review.product }}</h3>
            </div>
            <p class="text-subsidiary-reg md:text-mob-small-reg">
              {{ review.text }}
            </p>
            <div v-if="review.images.length" class="flex items-center gap-2">
              <VPicture
                v-for="image in review.images"
                :key="image.id"
                :src="image.path"
                alt="Изображение товара"
                :width="isMobile ? '54px' : '90px'"
                :height="isMobile ? '60px' : '100px'"
                class="bg-filling shrink-0 rounded-lg sm:rounded-2xl"
                img-classes="rounded-lg sm:rounded-2xl bg-filling"
              />
            </div>
            <div v-if="review.answer" class="bg-input text-subsidiary-reg md:text-mob-small-reg mt-2 rounded-lg p-3">
              <p class="text-additional">Ответ магазина</p>
              <p class="mt-1">{{ review.answer }}</p>
            </div>
          </article>
        </template>
        <VButton
          v-if="showButton && !showAll"
          label="Показать еще отзывы"
          variant="outline"
          class="mt-6 justify-self-center"
          @click="showAll = true"
        />
      </div>
      <div v-else><p class="text-center">На этот товар еще никто не оставил отзыв.</p></div>
    </div>
  </div>
</template>

<style scoped></style>
