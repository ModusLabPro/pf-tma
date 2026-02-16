<script setup lang="ts">
import { TBanner } from '@/shared/banner';
import { VButton } from '@/shared/ui/button';
import { VPicture } from '@/shared/ui/picture';
import { Link } from '@inertiajs/vue3';

defineProps<TBanner>();
</script>

<template>
  <div class="col-span-2 flex h-full flex-col overflow-hidden rounded-[30px]">
    <div
      class="bg-text relative z-0 h-full w-full mask-[url('/images/masks/for_combo_mobile1.svg')] mask-cover mask-bottom-right mask-no-repeat max-sm:pb-14"
    >
      <div class="relative z-10 flex flex-col justify-between p-4 text-white md:max-h-full lg:p-6 lg:pb-12">
        <div>
          <h3 class="font-vast text-vast-additional lg:text-vast-mob-title-bold font-bold uppercase">
            {{ title }}
          </h3>
          <p class="text-subsidiary-reg md:text-mob-small-reg mt-2">
            {{ description }}
          </p>
          <Link :href="link_url">
            <VButton :label="button_text" variant="light" class="mt-6" />
          </Link>
        </div>
      </div>
    </div>
    <VPicture class="-mt-30" height="300px" width="100%" :src="image.path" alt="combo" />
  </div>
</template>

<style scoped></style>
