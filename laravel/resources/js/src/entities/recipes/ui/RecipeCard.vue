<script setup lang="ts">
import { Link, router } from '@inertiajs/vue3';
import { useI18n } from 'vue-i18n';

import IconChefHat from '@/shared/icons/IconChefHat.svg';
import IconClockOutline from '@/shared/icons/IconClockOutline.svg?skipsvgo';
import IconCookingPot from '@/shared/icons/IconCookingPot.svg';
import { useScreenSize } from '@/shared/media-queries';
import { VPicture } from '@/shared/ui/picture';

import { getFormattedTime } from '../lib';

const props = defineProps<{
  id: number;
  title: string;
  description: string;
  image: string;
  cookTime: number;
  portions: number;
  difficulty: number;
  isFavorite: boolean;
}>();

const goToRecipe = (): void => {
  router.visit(route('recipe.show', props.id));
};

const total = 5;
const difficultyLevels = Array.from({ length: total }, (_, i) => i < props.difficulty);
const { isMobile } = useScreenSize();
const { t } = useI18n();
</script>

<template>
  <div class="border-stroke rounded-20 flex h-full cursor-pointer flex-col border" @click="goToRecipe">
    <div class="relative">
      <div class="absolute top-2 right-2 flex items-center gap-2">
        <slot name="actions" :is-favorite="isFavorite" />
      </div>
      <template v-if="image">
        <VPicture v-if="!isMobile" :src="image" alt="рецепт" width="100%" height="200px" class="overflow-hidden rounded-2xl" />
        <VPicture v-else :src="image" alt="рецепт" width="100%" height="120px" class="overflow-hidden rounded-2xl" />
      </template>
      <VPicture
        v-else
        src="/images/productPlaceholder.png"
        alt="рецепт"
        width="100%"
        :height="!isMobile ? '200px' : '120px'"
        class="overflow-hidden rounded-2xl"
      />
      <div class="bg-filling text-complimentary-reg absolute right-2 bottom-2 rounded-lg px-2 py-1">
        <div class="flex items-center gap-1">
          <span>
            <IconClockOutline :width="16" :height="16" />
          </span>
          <span class="mt-0.5">{{ getFormattedTime(cookTime) }}</span>
        </div>
      </div>
    </div>

    <div class="flex flex-auto flex-col p-2 sm:p-4 sm:pt-3">
      <div class="flex flex-1 flex-col">
        <h4 class="text-mob-small-bold">{{ title }}</h4>
        <p class="text-complimentary-reg mt-2 line-clamp-2">{{ description }}</p>
      </div>

      <div class="text-complimentary-reg mt-4 flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-3">
        <div class="flex items-center gap-1">
          <div class="mb-0.5">
            <IconCookingPot />
          </div>
          <p class="text-nowrap">{{ t('recipe_card.portion', portions) }}</p>
        </div>
        <div class="flex items-center gap-1">
          <div class="mb-0.5">
            <IconChefHat />
          </div>
          <div class="flex items-center gap-1">
            <p>{{ t('recipe_card.difficult') }}</p>
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
</template>

<style scoped></style>
