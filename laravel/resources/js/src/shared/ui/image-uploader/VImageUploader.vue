<script setup lang="ts">
import { useTemplateRef } from 'vue';

import IconPlus from '@/shared/icons/IconPlus.svg';
import { useScreenSize } from '@/shared/media-queries';
import { VPicture } from '@/shared/ui/picture';

const props = defineProps<{
  max?: number;
}>();

const selectedImages = defineModel<{ url: string; file?: File; id?: number }[]>({ required: true });

const { isMobile } = useScreenSize();

const fileInput = useTemplateRef<HTMLInputElement>('fileInput');

const processFiles = (files: File[]) => {
  const remainingSlots = (props.max ?? 8) - selectedImages.value.length;
  const newFiles = files
    .filter((file) => !selectedImages.value.some((img) => img.file?.name === file.name && img.file?.size === file.size))
    .slice(0, remainingSlots);

  newFiles.forEach((file) => {
    selectedImages.value.push({
      url: URL.createObjectURL(file),
      file,
    });
  });
};

const handleFiles = (e: Event) => {
  const target = e.target as HTMLInputElement;
  processFiles(Array.from(target.files || []));
  target.value = '';
};

const handleDrop = (e: DragEvent) => {
  if (!e.dataTransfer?.files) return;
  const files = Array.from(e.dataTransfer.files);
  processFiles(files);
};

const removeImage = (index: number) => {
  const img = selectedImages.value[index];
  if (img.file) {
    URL.revokeObjectURL(img.url);
  }
  selectedImages.value.splice(index, 1);
};

const openFileInput = () => {
  fileInput.value?.click();
};
</script>

<template>
  <div class="w-full" @dragover.prevent @drop.prevent="handleDrop">
    <span class="text-subsidiary-reg md:text-mob-small-reg">Добавьте фото</span>
    <div class="mt-1 grid grid-cols-4 gap-2">
      <div v-for="(img, index) in selectedImages" :key="index" class="relative">
        <VPicture
          :src="img.url"
          alt="Предпросмотр фото"
          :width="isMobile ? '71px' : '90px'"
          :height="isMobile ? '100px' : '100px'"
          class="bg-filling shrink-0 rounded-lg"
          img-classes="rounded-lg bg-filling object-cover"
        />
        <button
          class="absolute top-1 right-1 z-10 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white"
          @click="removeImage(index)"
        >
          <IconPlus class="text-text h-4 w-4 rotate-45" />
        </button>
      </div>
      <div
        v-if="selectedImages.length < (max ?? 8)"
        class="bg-input flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl p-3 md:p-4"
        :style="{ width: isMobile ? '71px' : '90px', height: isMobile ? '100px' : '100px' }"
        @click="openFileInput"
      >
        <IconPlus class="h-5 w-5" />

        <div class="text-subsidiary-reg flex flex-col gap-0.5 text-center">
          <p>Фото</p>
          <p class="text-complimentary-reg text-additional">до {{ (max ?? 8) - selectedImages.length }} шт</p>
        </div>
      </div>
    </div>
    <input ref="fileInput" type="file" multiple accept="image/*" class="hidden" @change="handleFiles" />
  </div>
</template>
