<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { Form, FormSubmitEvent } from '@primevue/forms';
import { ref, watch } from 'vue';

import { Nullable } from '@/shared/lib/utility-types/Nullable';
import { VButton } from '@/shared/ui/button';
import { VFormItem } from '@/shared/ui/form-item';
import { VImageUploader } from '@/shared/ui/image-uploader';
import VDialog from '@/shared/ui/volt/Dialog.vue';
import Rating from '@/shared/ui/volt/Rating.vue';
import Textarea from '@/shared/ui/volt/Textarea.vue';

import { addReviewResolver, addReviewSchema } from '../model/addReview.model';

const props = defineProps<{
  item: Nullable<{ id: number; type: 'Product' | 'Recipe' | 'Combo' }>;
}>();

const visible = defineModel<boolean>('visible', { required: true });
const numberOfStars = defineModel<number>('numberOfStars', { required: false, default: 0 });

const profileAddReviewForm = useForm<addReviewSchema>({
  item_id: 0,
  item_type: 'Product',
  rating: 0,
  text: '',
  images: [],
});

const selectedImages = ref<{ url: string; file: File }[]>([]);

watch(visible, (newVal) => {
  if (newVal && props.item) {
    profileAddReviewForm.item_id = props.item.id;
    profileAddReviewForm.item_type = props?.item?.type;
  }
});

watch(numberOfStars, (val) => {
  profileAddReviewForm.rating = val;
});

const onSubmitAddReview = ({ valid }: FormSubmitEvent): void => {
  if (valid) {
    profileAddReviewForm.images = selectedImages.value.map((i) => i.file);
    profileAddReviewForm.post(route('user.profile.reviews.store'), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        visible.value = false;
        resetImages();
      },
    });
  }
};

const resetImages = () => {
  selectedImages.value.forEach((img) => URL.revokeObjectURL(img.url));
  selectedImages.value = [];
};
</script>

<template>
  <VDialog
    v-model:visible="visible"
    :draggable="false"
    modal
    class="md:w-110"
    @hide="
      profileAddReviewForm.reset();
      resetImages();
    "
  >
    <div class="">
      <div>
        <h2 class="text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0">Оцените {{ item?.type === 'Recipe' ? 'рецепт' : 'товар' }}</h2>
      </div>
      <Form
        v-slot="$form"
        :resolver="addReviewResolver"
        validate-on-blur
        :initial-values="profileAddReviewForm"
        class="mt-2 flex flex-col gap-6"
        @submit="onSubmitAddReview"
      >
        <VFormItem
          class="flex w-full flex-col items-center justify-center"
          :error="$form.rating?.error?.message || profileAddReviewForm.errors.rating"
        >
          <Rating v-model="profileAddReviewForm.rating" name="rating" size="large" />
        </VFormItem>
        <VFormItem class="w-full" :error="$form.images?.error?.message || profileAddReviewForm.errors.images">
          <VImageUploader v-model="selectedImages" :max="8" />
        </VFormItem>

        <VFormItem class="w-full text-subsidiary-reg md:text-mob-small-reg" :error="$form.text?.error?.message || profileAddReviewForm.errors.text">
          <label for="text">Расскажите впечатления</label>
          <Textarea
            v-model="profileAddReviewForm.text"
            name="text"
            placeholder="Комментарий"
            rows="4"
            :class="profileAddReviewForm.text ? 'bg-transparent' : 'bg-light-gray'"
            :invalid="!!profileAddReviewForm.errors.text"
            class="mt-1 resize-none"
          />
        </VFormItem>
        <VButton label="Оставить отзыв" class="w-full" type="submit" />
      </Form>
    </div>
  </VDialog>
</template>
