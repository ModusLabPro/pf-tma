<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { computed, ref, useTemplateRef, watch } from 'vue';

import { ProfileLayout } from '@/app/layouts';
import { IProduct, ProductCard } from '@/entities/products';
import { IRecipe, RecipeCard } from '@/entities/recipes';
import { AddToFavorite } from '@/features/Product/add-to-favorite';
import { AddToCart } from '@/features/Product/manage-cart';
import { TBanner } from '@/pages/main-page/model/banners';
import FavoriteProductBanner from '@/pages/profile/profile-favorite/ui/FavoriteProductBanner.vue';
import FavoriteRecipeBanner from '@/pages/profile/profile-favorite/ui/FavoriteRecipeBanner.vue';
import IconBookOpen from '@/shared/icons/IconBookOpen.svg';
import IconShoppingBag from '@/shared/icons/IconShoppingBag.svg';
import { useScreenSize } from '@/shared/media-queries';
import { VButton } from '@/shared/ui/button';
import { VPagination } from '@/shared/ui/pagination';
import { VPicture } from '@/shared/ui/picture';
import { VShare } from '@/shared/ui/share';
import Tab from '@/shared/ui/volt/Tab.vue';
import TabList from '@/shared/ui/volt/TabList.vue';
import TabPanel from '@/shared/ui/volt/TabPanel.vue';
import TabPanels from '@/shared/ui/volt/TabPanels.vue';
import Tabs from '@/shared/ui/volt/Tabs.vue';

defineOptions({
  layout: ProfileLayout,
});

const props = defineProps<{
  products: IProduct[];
  recipes: IRecipe[];
  recipeWhiteListBanner: TBanner[];
  productWhiteListBanner: TBanner[];
}>();

const activeTab = ref('0');

if (route().params.tab === 'recipes') {
  activeTab.value = '1';
}

const pageContent = useTemplateRef('favorite-page');

const onPageUpdate = async (): Promise<void> => {
  pageContent.value?.scrollIntoView({
    behavior: 'smooth',
  });
};

const currentPage = ref(1);
const perPage = computed(() => {
  if (activeTab.value === '0') {
    return currentPage.value === 1 ? 10 : 12;
  }
  if (activeTab.value === '1') {
    return currentPage.value === 1 ? 11 : 12;
  }
  return 12;
});

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  const end = start + perPage.value;
  return props.products.slice(start, end);
});

const paginatedRecipes = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  const end = start + perPage.value;
  return props.recipes.slice(start, end);
});

watch(
  () => activeTab,
  () => {
    currentPage.value = 1;
  },
  { immediate: true, deep: true },
);

const { isMobile } = useScreenSize();
</script>

<template>
  <div ref="favorite-page" class="w-full max-md:p-6">
    <h1 class="text-default-bold">Избранное</h1>
    <Tabs v-model:value="activeTab" class="mt-8">
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
          <div v-if="products.length < 1" class="bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15">
            <div class="flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15">
              <VPicture
                src="/images/profile/HeartRotated.png"
                alt="heart"
                class="max-md:-mt-6 lg:ml-40 xl:scale-115"
                :height="isMobile ? '100px' : '200px'"
              />
              <div class="flex flex-col justify-between py-4 max-md:items-center lg:max-w-[615px]">
                <p class="text-default-medium md:text-heavy-medium max-md:text-center">Здесь будут подборки из понравившихся вам товаров</p>
                <Link :href="route('catalog.index')">
                  <VButton :label="'В каталог'" class="w-fit max-md:mt-6" />
                </Link>
              </div>
            </div>
          </div>
          <template v-else>
            <div class="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
              <template v-for="(product, index) in paginatedProducts" :key="product.id">
                <ProductCard
                  :id="product.id"
                  :has-gift="product.is_have_gift"
                  :title="product.name"
                  :slug="product.slug"
                  :images="product.images.map((i) => i.path)"
                  :weight="product.weight"
                  :description="product.short_description"
                  :is-favorite="product.is_wishlist"
                  :categories="product.tags.map((b) => b.name) ?? []"
                  :unit="product.weight_type"
                  :price="Number(product.sale_price) ?? 0"
                  :price-unit="product.price_type"
                  :old-price="Number(product.price) ?? 0"
                  :cashback_percent="product.cashback_percent"
                >
                  <template #favoriteButton>
                    <AddToFavorite :id="product.id" :initial-value="product.is_wishlist" />
                  </template>
                  <template #footer>
                    <AddToCart :id="product.id" :count-in-cart="product.count_in_cart" :quantity="product.quantity" />
                  </template>
                </ProductCard>

                <FavoriteProductBanner v-if="index === 5 && currentPage === 1" v-bind="productWhiteListBanner[0]" />
              </template>

              <FavoriteProductBanner v-if="paginatedProducts.length < 6 && currentPage === 1" v-bind="productWhiteListBanner[0]" />
            </div>
            <VPagination
              v-model="currentPage"
              :per-page="perPage"
              :total-count="products.length"
              class="mx-auto mt-8 justify-center"
              @update:model-value="onPageUpdate"
            />
          </template>
        </TabPanel>
        <TabPanel value="1">
          <div v-if="recipes.length < 1" class="bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15">
            <div class="flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15">
              <VPicture
                src="/images/profile/Grill.webp"
                alt="heart"
                class="scale-130 max-md:-mt-6 lg:ml-40 xl:scale-150"
                :height="isMobile ? '100px' : '200px'"
              />
              <div class="flex flex-col justify-between py-4 max-md:items-center lg:max-w-[615px]">
                <p class="text-default-medium md:text-heavy-medium max-md:text-center">Здесь будут подборки из понравившихся вам рецептов</p>
                <Link :href="route('recipe.index')">
                  <VButton :label="'К рецептам'" class="w-fit max-md:mt-6" />
                </Link>
              </div>
            </div>
          </div>
          <template v-else>
            <div class="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
              <template v-for="(recipe, index) in paginatedRecipes" :key="recipe.id">
                <RecipeCard
                  :id="recipe.id"
                  :title="recipe.title"
                  :description="recipe.mini_description"
                  :difficulty="recipe.difficult"
                  :portions="recipe.number_of_persons"
                  :cook-time="recipe.cooking_time_minutes"
                  :image="recipe.image.path"
                  :is-favorite="recipe.is_wishlist"
                >
                  <template #actions="{ isFavorite }">
                    <AddToFavorite :id="recipe.id" :initial-value="isFavorite" item-type="recipe" />
                    <VShare :url="route('recipe.show', { recipe: recipe.id })" />
                  </template>
                </RecipeCard>
                <FavoriteRecipeBanner v-if="index === 5 && currentPage === 1" v-bind="recipeWhiteListBanner[0]" />
              </template>
              <FavoriteRecipeBanner v-if="paginatedRecipes.length < 6 && currentPage === 1" v-bind="recipeWhiteListBanner[0]" />
            </div>
            <VPagination
              v-model="currentPage"
              :per-page="perPage"
              :total-count="recipes.length"
              class="mx-auto mt-8 justify-center"
              @update:model-value="onPageUpdate"
            />
          </template>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>
</template>

<style scoped>
.p-active\:bg-default {
  &[data-p~='active'],
  &[data-p-active='true'] {
    background-color: var(--color-text);
  }
}
</style>
