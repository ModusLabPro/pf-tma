<script setup lang="ts">
import { ICombinationVariant } from '@/entities/combination';
import { ProductCard } from '@/entities/products';
import { AddToFavorite } from '@/features/Product/add-to-favorite';
import { AddToCart } from '@/features/Product/manage-cart';
import { VPicture } from '@/shared/ui/picture';
import { VSlider } from '@/shared/ui/slider';

const { variant } = defineProps<{
  variant: ICombinationVariant;
}>();
</script>

<template>
  <section class="grid gap-4 lg:gap-8 xl:grid-cols-2">
    <div class="flex flex-col gap-2" :class="variant.products && variant.products?.length > 1 ? 'pr-6 sm:pr-0' : ''">
      <VPicture
        :src="variant.image.path"
        height="100%"
        width="100%"
        alt="Вариант сервировки"
        img-classes="w-full"
        class="h-[200px] overflow-hidden rounded-2xl lg:h-[300px]"
      />
      <h4 class="text-default-bold">{{ variant.name }}</h4>
      <p class="text-mob-small-reg">{{ variant.description }}</p>
    </div>
    <div class="flex flex-col gap-4">
      <p class="text-mob-small-bold lg:text-default-bold">Вам могут понадобиться</p>
      <div class="max-w-[calc(100dvw_-_24px)] sm:max-w-[calc(100dvw_-_2*32px)]">
        <VSlider
          v-if="variant.products"
          :slides="variant.products"
          :slider-options="{
            slidesPerView: 3,
            spaceBetween: 32,
            breakpoints: {
              0: { slidesPerView: 1.7, spaceBetween: 8 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
              1280: { slidesPerView: 2, spaceBetween: 32 },
              1504: { slidesPerView: 3, spaceBetween: 32 },
            },
          }"
        >
          <template #slide="{ slide }">
            <ProductCard
              :id="slide.id"
              :key="slide.id"
              :slug="slide.slug"
              :has-gift="slide.is_have_gift"
              :title="slide.name"
              :images="slide.images.map((i) => i.path)"
              :weight="slide.weight"
              :is-new="slide.is_new"
              :sale-percent="slide.sale_percent"
              :description="slide.short_description"
              :degree-type="slide.degree_type"
              :is-favorite="slide.is_wishlist"
              :categories="slide.tags.map((b) => b.name) ?? []"
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
      </div>
    </div>
  </section>
</template>

<style scoped></style>
