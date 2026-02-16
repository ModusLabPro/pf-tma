<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import { Form, FormSubmitEvent } from '@primevue/forms';
import { ref, watch } from 'vue';

import { IReviewedProduct } from '@/entities/products/model/product';
import { TFile } from '@/shared/file';
import { VButton } from '@/shared/ui/button';
import { VFormItem } from '@/shared/ui/form-item';
import { VImageUploader } from '@/shared/ui/image-uploader';
import VDialog from '@/shared/ui/volt/Dialog.vue';
import Rating from '@/shared/ui/volt/Rating.vue';
import Textarea from '@/shared/ui/volt/Textarea.vue';

import { editReviewResolver, editReviewSchema } from '../model/editReview.model';

const props = defineProps<{
  review: IReviewedProduct;
}>();

const visible = defineModel<boolean>('visible', { required: true });

const profileEditReviewForm = useForm<editReviewSchema>({
  rating: 0,
  text: '',
  images: [],
});

type SelectedImage = { url: string } & ({ id: number } | { file: File });

const selectedImages = ref<SelectedImage[]>([]);

watch(visible, (newVal) => {
  if (newVal && props.review) {
    profileEditReviewForm.rating = props.review.rating;
    profileEditReviewForm.text = props.review.text;
    selectedImages.value = props.review.images.map((img: TFile) => ({ url: img.path, id: img.id }));
  }
});

const onSubmitEditReview = ({ valid }: FormSubmitEvent): void => {
  if (valid && props.review) {
    profileEditReviewForm.images = selectedImages.value.map((i) => ('id' in i ? i.id : i.file));
    console.log(profileEditReviewForm);
    console.log(profileEditReviewForm.images);
    profileEditReviewForm.post(route('user.profile.reviews.update', props.review.id), {
      preserveScroll: true,
      onSuccess: () => {
        visible.value = false;
        resetImages();
      },
    });
  }
};

const resetImages = () => {
  selectedImages.value.forEach((img) => {
    if ('file' in img) {
      URL.revokeObjectURL(img.url);
    }
  });
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
      profileEditReviewForm.reset();
      resetImages();
    "
  >
    <div class="">
      <div>
        <h2 class="text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0">Редактировать отзыв</h2>
      </div>
      <Form
        v-slot="$form"
        :resolver="editReviewResolver"
        validate-on-blur
        :initial-values="profileEditReviewForm"
        class="mt-2 flex flex-col gap-6"
        @submit="onSubmitEditReview"
      >
        <VFormItem
          class="flex w-full flex-col items-center justify-center"
          :error="$form.rating?.error?.message || profileEditReviewForm.errors.rating"
        >
          <Rating v-model="profileEditReviewForm.rating" name="rating" size="large" />
        </VFormItem>
        <VFormItem class="w-full" :error="$form.images?.error?.message || profileEditReviewForm.errors.images">
          <VImageUploader v-model="selectedImages" :max="8" />
        </VFormItem>
        <VFormItem class="w-full text-subsidiary-reg md:text-mob-small-reg" :error="$form.text?.error?.message || profileEditReviewForm.errors.text">
          <label for="text">Расскажите впечатления</label>
          <Textarea
            v-model="profileEditReviewForm.text"
            name="text"
            placeholder="Комментарий"
            rows="4"
            :class="profileEditReviewForm.text ? 'bg-transparent' : 'bg-light-gray'"
            :invalid="!!profileEditReviewForm.errors.text"
            class="mt-1 resize-none"
          />
        </VFormItem>
        <VButton label="Сохранить отзыв" class="w-full" type="submit" />
      </Form>
    </div>
  </VDialog>
</template>
