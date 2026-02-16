<script setup lang="ts">
import IconHeart from '@/shared/icons/IconHeart.svg';
import IconHeartFilled from '@/shared/icons/IconHeartFilled.svg';

import { manageFavorite } from '../model';

const props = withDefaults(
  defineProps<{
    id: number;
    initialValue: boolean;
    itemType?: 'recipe' | 'product';
  }>(),
  { itemType: 'product' },
);

const { isFavorite, addToFavorite, removeFromFavorite } = manageFavorite(props.id, props.initialValue, props.itemType);
</script>

<template>
  <slot name="text" :is-favorite="isFavorite" :add-to-favorite="addToFavorite" :remove-from-favorite="removeFromFavorite" />
  <div v-if="isFavorite" class="bg-text/80 cursor-pointer rounded-full p-2" @click.stop="removeFromFavorite">
    <IconHeartFilled />
  </div>
  <div v-else class="bg-text/80 cursor-pointer rounded-full p-2" @click.stop="addToFavorite">
    <IconHeart />
  </div>
</template>
