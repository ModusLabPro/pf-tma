<script setup lang="ts">
import { Link, router } from '@inertiajs/vue3';
import { computed, ref, useTemplateRef } from 'vue';
import { route } from 'ziggy-js';

import { IProduct, ProductCard } from '@/entities/products';
import { getFormattedTime } from '@/entities/recipes/lib';
import { IRecipeDetail } from '@/entities/recipes/model';
import { IReview } from '@/entities/review';
import { IUser } from '@/entities/user';
import { AddToFavorite } from '@/features/Product/add-to-favorite';
import { AddToCart } from '@/features/Product/manage-cart';
import { AddReviewModal } from '@/features/Review/add-review';
import { reactToReview } from '@/features/Review/react-review';
import IconChefHat from '@/shared/icons/IconChefHat.svg';
import IconClockOutline from '@/shared/icons/IconClockOutline.svg';
import IconCookingPot from '@/shared/icons/IconCookingPot.svg';
import IconHeart from '@/shared/icons/IconHeart.svg';
import IconHeartFilled from '@/shared/icons/IconHeartFilled.svg';
import IconThumbsDown from '@/shared/icons/IconThumbsDown.svg';
import IconThumbsUp from '@/shared/icons/IconThumbsUp.svg';
import { personInitials } from '@/shared/lib/helpers/personInitials';
import { Nullable } from '@/shared/lib/utility-types/Nullable';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VContainer } from '@/shared/ui/container';
import { VPicture } from '@/shared/ui/picture';
import { VSection } from '@/shared/ui/section';
import { VShare } from '@/shared/ui/share';
import { VSlider } from '@/shared/ui/slider';
import Avatar from '@/shared/ui/volt/Avatar.vue';
import Breadcrumb from '@/shared/ui/volt/Breadcrumb.vue';
import VoltButton from '@/shared/ui/volt/Button.vue';
import Rating from '@/shared/ui/volt/Rating.vue';

const { isDesktop } = useScreenSize();

const props = defineProps<{
  recipe: IRecipeDetail;
  recipeProducts: IProduct[];
  auth: { user: Nullable<IUser> };
  reviews: IReview[];
}>();

const total = 5;
const difficultyLevels = Array.from({ length: total }, (_, i) => i < props.recipe.difficult);

const breadcrumbItems = computed<{ label: string; route: string }[]>(() => {
  const items = [
    { label: 'Главная', route: route('main-page') },
    { label: 'Рецепты', route: route('recipe.index') },
  ];

  return [
    ...items,
    {
      label: props.recipe.title,
      route: route('recipe.show', props.recipe.id),
    },
  ];
});

const isAddModalOpen = ref<boolean>(false);
const initialRating = ref<number>(0);

const { isMobile } = useScreenSize();

const shareComp = useTemplateRef('shareComponent');

const clickOnShareText = (event: Event): void => {
  if (shareComp.value) {
    shareComp.value.click(event);
  }
};
const isFavorite = ref<boolean>(props.recipe.is_wishlist);

const addToFavorite = () => {
  router.post(
    route('whitelist.add'),
    {
      item_id: props.recipe.id,
      item_type: 'recipe',
    },
    {
      preserveScroll: true,
      preserveState: true,
      only: ['recipe'],
      onSuccess: () => {
        isFavorite.value = true;
      },
    },
  );
};

const removeFromFavorite = () => {
  router.delete(route('whitelist.remove'), {
    data: {
      item_id: props.recipe.id,
      item_type: 'recipe',
    },
    preserveScroll: true,
    preserveState: true,
    only: ['recipe'],
    onSuccess: () => {
      isFavorite.value = false;
    },
  });
};
</script>

<template>
  <VContainer class="px-6 sm:px-8">
    <Breadcrumb v-if="!isDesktop" :model="breadcrumbItems" class="bg-white max-md:px-0! md:mb-4">
      <template #item="{ item }">
        <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
          {{ item.label }}
        </Link>
      </template>
    </Breadcrumb>
    <Breadcrumb v-else :model="breadcrumbItems">
      <template #item="{ item }">
        <Link class="text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200" :href="item.route">
          {{ item.label }}
        </Link>
      </template>
    </Breadcrumb>
  </VContainer>
  <VContainer>
    <VSection class="max-sm:!py-4">
      <article
        class="border-filling flex flex-col-reverse gap-4 rounded-3xl border p-2 lg:flex-row lg:items-center lg:gap-8 lg:rounded-[40px] lg:p-6"
      >
        <div class="flex w-full flex-grow flex-col justify-between">
          <div class="flex items-center justify-between">
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-2">
                <Rating size="small" readonly :default-value="recipe.rating" />
                <span class="text-mob-small-medium">{{ recipe.rating }}</span>
              </div>
              <span class="text-complimentary-reg text-additional">Рецепт / {{ recipe.created_at }}</span>
            </div>
            <div class="flex items-center gap-4">
              <div v-if="isFavorite" class="bg-text/80 cursor-pointer rounded-full p-2" @click.stop="removeFromFavorite">
                <IconHeartFilled />
              </div>
              <div v-else class="bg-text/80 cursor-pointer rounded-full p-2" @click.stop="addToFavorite">
                <IconHeart />
              </div>
              <VShare :url="route('recipe.show', { recipe: recipe.id })" />
            </div>
          </div>
          <div class="mt-4 flex flex-col gap-4">
            <h1 class="font-vast text-vast-additional md:text-vast-title-bold font-bold">{{ recipe.title }}</h1>
            <p class="text-subsidiary-reg md:text-mob-small-reg" v-html="recipe.description" />
            <div class="flex flex-col justify-between gap-2 min-[800px]:flex-row min-[800px]:items-center min-[800px]:gap-4">
              <div class="bg-full text-subsidiary-reg w-fit rounded-lg px-2 py-1 text-nowrap">
                <div class="flex items-center gap-1">
                  <IconClockOutline class="h-4 w-4" />
                  <span>Время приготовления: {{ getFormattedTime(recipe.cooking_time_minutes) }}</span>
                </div>
              </div>
              <div class="bg-full text-subsidiary-reg w-fit rounded-lg px-2 py-1 text-nowrap">
                <div class="flex items-center gap-1">
                  <IconClockOutline class="h-4 w-4" />
                  <span>Активное время: {{ getFormattedTime(recipe.active_cooking_time_minutes) }}</span>
                </div>
              </div>
              <div class="flex items-center gap-1">
                <div class="mb-0.5">
                  <IconCookingPot />
                </div>
                <p class="text-nowrap">{{ recipe.number_of_persons }} порции</p>
              </div>
              <div class="flex items-center gap-1">
                <div class="mb-0.5">
                  <IconChefHat />
                </div>
                <div class="flex items-center gap-1">
                  <p>Сложность</p>
                  <div class="flex items-center gap-1">
                    <span
                      v-for="(filled, index) in difficultyLevels"
                      :key="index"
                      class="h-2 w-2 rounded-full"
                      :class="filled ? 'bg-default' : 'border-default border-2'"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full">
          <VPicture
            v-if="recipe?.images[0]?.path"
            :src="recipe?.images[0]?.path"
            alt=""
            img-classes="rounded-20 w-full max-h-[200px] md:max-h-[280px]"
            class="w-full"
          />
          <VPicture
            v-else
            src="/images/productPlaceholder.png"
            alt="Изображение рецепта"
            img-classes="rounded-20 w-full max-h-[200px] md:max-h-[280px]"
            class="w-full"
          />
        </div>
      </article>
    </VSection>
    <div class="flex flex-col-reverse items-start min-[820px]:flex-row">
      <div class="max-w-full min-w-0 flex-1 overflow-hidden">
        <VSection v-if="recipeProducts?.length > 0" class="max-sm:!pr-0">
          <template #header>
            <header class="flex items-center justify-between">
              <h2 class="text-default-bold md:text-heavy-bold">
                Продукты для рецепта <span class="text-additional text-default-bold md:text-heavy font-normal">({{ recipeProducts.length }})</span>
              </h2>
              <VoltButton
                :size="isMobile ? 'small' : ''"
                :label="isMobile ? 'В корзину' : 'Добавить все в корзину'"
                rounded
                @click="router.post(route('cart.', recipe.id), {}, { preserveScroll: true, preserveState: true, only: ['cart'] })"
              />
            </header>
          </template>
          <VSlider
            class="mt-8 max-w-full"
            :slides="recipeProducts"
            :slider-options="{
              allowTouchMove: true,
              breakpoints: {
                0: { slidesPerView: 1.4, spaceBetween: 8 },
                640: { slidesPerView: 2, spaceBetween: 8 },
                900: { slidesPerView: 2.5, spaceBetween: 8 },
                1050: { slidesPerView: 3, spaceBetween: 16 },
                1280: { slidesPerView: 4.4, spaceBetween: 32 },
              },
            }"
          >
            <template #slide="{ slide }">
              <ProductCard
                :id="slide.id"
                :key="slide.id"
                :title="slide.name"
                :has-gift="slide.is_have_gift"
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
        <VSection v-if="recipe.steps?.length > 0">
          <template #header>
            <header class="flex items-center justify-between">
              <h2 class="text-default-bold md:text-heavy-bold">Приготовление</h2>
              <VoltButton v-if="recipe.videos?.length > 0" label="Смотреть видео рецепт" :size="isMobile ? 'small' : ''" rounded variant="outlined" />
            </header>
          </template>
          <div class="mt-8">
            <template v-for="step in recipe.steps" :key="step.id">
              <div class="border-b-filling flex flex-col items-start justify-between gap-8 border-b py-4 sm:flex-row">
                <div class="basis-1/2">
                  <span class="bg-filling text-default-medium rounded-lg px-2 py-0.5">{{ step.title }}</span>
                  <p class="text-mob-small-reg mt-4">{{ step.description }}</p>
                </div>
                <VPicture
                  v-if="step?.images"
                  :src="step?.images"
                  :height="isMobile ? '200px' : '260px'"
                  class="w-full sm:basis-1/2"
                  img-classes="rounded-20 w-full"
                  alt="изображение шага рецепта"
                />
              </div>
            </template>
          </div>
        </VSection>
        <VSection class="md:mt-2" :class="{ '!pb-35': !!auth.user }">
          <template #header>
            <header class="flex flex-col justify-between gap-4 min-[920px]:flex-row min-[920px]:items-center">
              <div class="flex items-center gap-4">
                <h2 class="text-default-bold md:text-heavy-bold">Оцените рецепт</h2>
                <Rating v-if="!!auth.user" v-model="initialRating" size="large" @change="isAddModalOpen = true" />
                <Rating v-else readonly size="large" />
              </div>
              <div class="flex items-center gap-4">
                <div class="flex cursor-pointer items-center gap-2">
                  <span class="text-complimentary-reg" @click="clickOnShareText">Поделиться</span>
                  <VShare ref="shareComponent" :url="route('recipe.show', { recipe: recipe.id })" />
                </div>
                <div>
                  <div v-if="isFavorite" class="flex cursor-pointer items-center gap-2" @click.stop="removeFromFavorite">
                    <span class="text-complimentary-reg"> Добавить в избранное</span>
                    <div class="bg-text/80 rounded-full p-2">
                      <IconHeartFilled />
                    </div>
                  </div>
                  <div v-else class="flex cursor-pointer items-center gap-2" @click.stop="addToFavorite">
                    <span class="text-complimentary-reg"> Добавить в избранное</span>
                    <div class="bg-text/80 rounded-full p-2">
                      <IconHeart />
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </template>
          <div v-if="!auth.user" class="bg-light-gray rounded-20 mt-4 flex items-center justify-between p-4 md:mt-6">
            <p class="text-mob-small-bold md:text-default-medium">Авторизуйтесь чтобы оставить отзыв</p>
            <VButton type="button" label="Войти" @click="router.get(route('api.v1.auth-check'), {}, { preserveScroll: true })" />
          </div>
          <div v-for="review in reviews" :key="review.id" class="mt-4">
            <article class="border-b-stroke flex flex-col gap-3 border-b pb-2 md:pb-3">
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
          </div>
        </VSection>
      </div>
      <aside class="w-full shrink-0 max-[820px]:px-6 min-[820px]:max-w-[320px] min-[820px]:pr-8 md:mt-8">
        <div class="rounded-20 w-full bg-gray-50 p-4">
          <template v-if="recipe.ingredients_for_dish_json.length > 0">
            <h2 class="text-default-medium">Ингредиенты для блюда</h2>
            <dl class="mt-6">
              <template v-for="(item, index) in recipe.ingredients_for_dish_json" :key="index">
                <div class="custom-dashed-border flex justify-between py-2">
                  <dt class="text-mob-small-reg">{{ item.title }}</dt>
                  <dd class="text-mob-small-bold">{{ item.count }}</dd>
                </div>
              </template>
            </dl>
          </template>
          <div v-if="recipe.ingredients_for_sauce_json.length > 0" class="mt-6">
            <h2 class="text-default-medium">Ингредиенты для соуса</h2>
            <dl class="mt-6">
              <template v-for="(item, index) in recipe.ingredients_for_sauce_json" :key="index">
                <div class="custom-dashed-border flex justify-between py-2">
                  <dt class="text-mob-small-reg">{{ item.title }}</dt>
                  <dd class="text-mob-small-bold">{{ item.count }}</dd>
                </div>
              </template>
            </dl>
          </div>
        </div>
      </aside>
    </div>
    <AddReviewModal v-model:visible="isAddModalOpen" v-model:number-of-stars="initialRating" :item="{ id: recipe.id, type: 'Recipe' }" />
  </VContainer>
</template>

<style scoped>
.custom-dashed-border {
  border-bottom: 1px dashed transparent;
  border-image: repeating-linear-gradient(to right, var(--color-filling) 0, var(--color-filling) 10px, transparent 10px, transparent 14px) 1;
}
</style>
