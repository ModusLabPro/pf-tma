<script setup lang="ts">
import { Head, Link, router } from '@inertiajs/vue3';
import { computed, nextTick, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { route } from 'ziggy-js';

import { MainLayout } from '@/app/layouts';
import { IProduct, ProductCard } from '@/entities/products';
import { IOrderedProduct } from '@/entities/products/model/product';
import { RecipeCard } from '@/entities/recipes';
import { IRecipe } from '@/entities/recipes/model';
import { IUser } from '@/entities/user';
import { IUserBonusCard } from '@/entities/user/model/userTypes';
import { AddToFavorite } from '@/features/Product/add-to-favorite';
import { AddToCart } from '@/features/Product/manage-cart';
import { TPhotoCategories } from '@/pages/main-page/model/photoCategories';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg?skipsvgo';
import { useScreenSize } from '@/shared/media-queries';
import { VButton as Button, VButton } from '@/shared/ui/button';
import { VContainer } from '@/shared/ui/container';
import { VPicture } from '@/shared/ui/picture';
import { VScrollPanel } from '@/shared/ui/scroll-panel';
import { VSection } from '@/shared/ui/section';
import { VShare } from '@/shared/ui/share';
import { VNavigationButton, VSlider } from '@/shared/ui/slider';
import { BonusCard } from '@/widgets/bonus-card';

import { TBanner } from '../model/banners';

defineOptions({
  layout: MainLayout,
});

const props = defineProps<{
  auth: { user: IUser };
  mainBanners: TBanner[];
  recommendedProducts: IProduct[];
  specialProducts: IProduct[];
  noveltyProducts: IProduct[];
  orderedProducts: IOrderedProduct[];
  comboPacks: IProduct[];
  comboPacksBanners: TBanner;
  photoCategories: TPhotoCategories[];
  infoBanners: TBanner[];
  noveltyBanner: TBanner;
  recipes: IRecipe[];
  userBonusCard: IUserBonusCard;
  seoData: {
    page_name: string;
    seo_title: string;
    seo_description: string;
    seo_keywords: string;
  } | null;
}>();

const getGridClasses = computed(() => {
  return props.photoCategories.map((_, index) => {
    if (isCategoriesMobile.value) {
      switch (index) {
        case 0:
          return 'col-span-2 row-span-1';
        case 1:
          return 'col-span-2';
        case 2:
          return 'row-span-1 outline outline-text';
        case 3:
          return 'col-span-1 col-start-1 row-start-4';
        case 4:
          return 'col-span-1 outline outline-text';
        case 5:
          return 'row-start-2 outline outline-text';
        case 6:
          return 'row-start-2';
        case 7:
          return 'col-span-2 row-start-5';
        case 8:
          return 'col-span-1 row-span-1';
        default:
          return '';
      }
    } else if (isCategoriesTablet.value) {
      switch (index) {
        case 0:
          return 'col-span-6 row-span-4';
        case 1:
          return 'col-span-4 row-span-2 col-start-7 pb-8';
        case 2:
          return 'col-span-5 row-span-2 col-start-11 outline outline-text pb-8';
        case 3:
          return 'col-span-2 row-span-2 col-start-7 row-start-3';
        case 4:
          return 'col-span-7 row-span-2 col-start-9 row-start-3 outline outline-text';
        case 5:
          return 'col-span-5 row-span-3 col-start-11 row-start-5 outline outline-text';
        case 6:
          return 'col-span-3 row-span-3 col-start-4 row-start-5';
        case 7:
          return 'col-span-4 row-span-3 col-start-7 row-start-5';
        case 8:
          return 'col-span-3 row-span-3 row-start-5 pb-8';
        default:
          return '';
      }
    } else {
      switch (index) {
        case 0:
          return 'col-span-4 row-span-2';
        case 1:
          return 'col-span-2 col-start-5';
        case 2:
          return 'col-start-7 outline outline-text';
        case 3:
          return 'col-start-8';
        case 4:
          return 'col-span-2 col-start-9 outline outline-text';
        case 5:
          return 'col-start-5 row-start-2 outline outline-text';
        case 6:
          return 'col-start-6 row-start-2';
        case 7:
          return 'col-span-2 col-start-7 row-start-2';
        case 8:
          return 'col-span-2 col-start-9 row-start-2';
        default:
          return '';
      }
    }
  });
});

onMounted(() => {
  const url = new URL(window.location.href);
  const scrollTarget = url.searchParams.get('scroll');

  if (scrollTarget === 'novelty') {
    nextTick(() => {
      const section = document.getElementById('noveltySection');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
});

const { isMobile, isCategoriesMobile, isCategoriesTablet } = useScreenSize();
const { t } = useI18n();
</script>

<template>
  <Head v-if="props.seoData">
    <title>{{ props.seoData.seo_title }}</title>
    <meta v-if="props.seoData.seo_description" name="description" :content="props.seoData.seo_description" />
    <meta v-if="props.seoData.seo_keywords" name="keywords" :content="props.seoData.seo_keywords" />
  </Head>
  <div class="text-text">
    <VContainer>
      <VSection>
        <div class="relative overflow-hidden rounded-[40px]">
          <swiper-container
            space-between="32"
            loop="true"
            :navigation="{
              nextEl: '.slider-next-main',
              prevEl: '.slider-prev-main',
            }"
          >
            <swiper-slide v-for="(banner, index) in mainBanners" :key="banner.id">
              <div
                class="relative h-100 rounded-[40px] bg-cover bg-bottom bg-no-repeat p-2 min-[900px]:p-8 md:bg-center"
                :style="{
                  backgroundImage: `url(${banner.image.path})`,
                }"
              >
                <div class="w-fit min-[900px]:relative">
                  <div
                    class="bg-text flex h-64 flex-col justify-between mask-[url(../../images/masks/for_main_mobile.svg)] mask-no-repeat p-3 max-[900px]:max-w-[305px] max-[900px]:mask-size-[305px_auto] min-[900px]:h-84 min-[900px]:w-184 min-[900px]:mask-[url(../../images/masks/for_main.svg)] min-[900px]:p-6"
                  >
                    <div class="p-2 min-[900px]:mb-8">
                      <div class="font-vast text-vast-additional min-[900px]:text-vast-title-bold mb-3 font-bold text-white uppercase">
                        {{ banner.title }}
                      </div>
                      <span class="text-subsidiary-reg md:text-mob-small-reg text-white" v-html="banner.description"></span>
                    </div>
                    <Link v-if="banner.link_url && banner.button_text" :href="banner.link_url">
                      <Button :label="banner.button_text" variant="light" class="max-[900px]:!text-subsidiary-reg mb-6 w-fit max-[900px]:ml-2" />
                    </Link>
                  </div>
                  <div
                    class="absolute right-15 bottom-6 z-100 flex w-[173px] items-center gap-1 max-[900px]:right-1/2 max-[900px]:bottom-4 max-[900px]:translate-x-1/2 max-[900px]:translate-y-1/2"
                  >
                    <span
                      v-for="j in mainBanners.length"
                      :key="j"
                      :style="{ flexBasis: `${(1 / mainBanners.length) * 100}%` }"
                      class="rounded-20 block h-0.5"
                      :class="[j === index + 1 ? 'bg-white' : 'bg-[#D4D3D3]/50']"
                    />
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
          <VNavigationButton class="absolute right-4 bottom-4 z-10 max-[900px]:hidden" slider-key="main" />
        </div>
      </VSection>
      <VSection v-if="specialProducts.length" :title="t('main_page.special_offers')" class="max-[640px]:!pr-0 md:mt-12">
        <template #headerAction>
          <div
            class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-[640px]:mr-4"
          >
            <Link :href="route('promotion.index')" class="flex items-center gap-2">
              <span>{{ t('main_page.all') }}</span>
              <IconCaretRight :width="'16px'" :height="'16px'" />
            </Link>
          </div>
        </template>
        <VSlider
          :slides="specialProducts"
          :slider-options="{
            slidesPerView: 6,
            spaceBetween: 32,
            allowTouchMove: true,
          }"
        >
          <template #slide="{ slide }">
            <ProductCard
              :id="slide.id"
              :key="`${slide.id}-${slide.count_in_cart}`"
              :has-gift="slide.is_have_gift"
              :slug="slide.slug"
              :title="slide.name"
              :images="slide.images.map((i) => i.path)"
              :weight="slide.weight"
              :description="slide.short_description"
              :is-favorite="slide.is_wishlist"
              :is-new="slide.is_new"
              :degree-type="slide.degree_type"
              :sale-percent="slide.sale_percent"
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
      </VSection>
      <VSection v-if="recommendedProducts.length" :title="t('main_page.recommended_products')" class="bg-light-gray mt-6 max-[640px]:!pr-0 md:mt-12">
        <VSlider
          :slides="recommendedProducts"
          :slider-options="{
            slidesPerView: 6,
            spaceBetween: 32,
            allowTouchMove: true,
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
              :description="slide.short_description"
              :is-favorite="slide.is_wishlist"
              :is-new="slide.is_new"
              :degree-type="slide.degree_type"
              :sale-percent="slide.sale_percent"
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
      </VSection>
      <VSection v-if="photoCategories.length" :title="t('main_page.product_categories')" class="mt-6 md:mt-12">
        <div
          v-if="!isCategoriesMobile"
          :class="[
            'mt-8 grid gap-3',
            isCategoriesTablet ? 'grid-cols-[repeat(15,1fr)] grid-rows-[repeat(7,90px)]' : 'grid-cols-10 grid-rows-[140px_140px]',
          ]"
        >
          <Link
            v-for="(category, index) in photoCategories"
            :key="category.id"
            :href="`/catalog/?category=${category.category_slug}`"
            :class="[
              getGridClasses[index],
              'rounded-20 hover:outline-stroke overflow-hidden bg-cover bg-center bg-no-repeat transition-shadow duration-300 ease-in hover:shadow-xl hover:outline',
            ]"
            :style="{ backgroundImage: `url('${category.desktop_photo}')` }"
          >
            <h2
              class="font-vast z-10 line-clamp-3 max-w-full break-words px-4 pt-4 font-bold uppercase"
              :style="{ color: category.text_color, fontSize: category.desktop_font_size, lineHeight: category.desktop_line_height }"
            >
              {{ category.name }}
            </h2>
            <p v-if="category.description" class="text-subsidiary-reg mt-1 line-clamp-2 max-w-full break-words pl-4 pr-2">
              {{ category.description }}
            </p>
          </Link>
        </div>

        <div v-else :class="['mt-8 grid gap-3', 'auto-rows-[140px] grid-cols-2']">
          <Link
            v-for="(category, index) in photoCategories"
            :key="category.id"
            :href="`/catalog/?category=${category.category_slug}`"
            :class="[
              getGridClasses[index],
              'rounded-20 hover:outline-stroke overflow-hidden bg-size-[100%_100%] bg-center bg-no-repeat transition-shadow duration-300 ease-in hover:shadow-xl hover:outline',
            ]"
            :style="{ backgroundImage: `url('${category.mobile_photo}')` }"
          >
            <h2
              class="font-vast z-10 px-2 pt-2 font-bold uppercase"
              :style="{ color: category.text_color, fontSize: category.mobile_font_size, lineHeight: category.mobile_line_height }"
            >
              {{ category.name }}
            </h2>
            <p v-if="category.description" class="text-subsidiary-reg mt-1 max-w-[150px] pl-2">
              {{ category.description }}
            </p>
          </Link>
        </div>
      </VSection>
      <VSection
        v-if="noveltyProducts.length"
        id="noveltySection"
        :title="t('main_page.novelty')"
        class="mt-6 max-[640px]:!p-0 max-[640px]:!pl-6 md:mt-12"
      >
        <div v-if="noveltyBanner.id" class="flex flex-col gap-6 xl:flex-row">
          <div class="xl:w-[50%]">
            <VSlider
              :slides="noveltyProducts"
              :slider-options="{
                slidesPerView: 3,
                spaceBetween: 32,
                breakpoints: {
                  0: { slidesPerView: 1.7, spaceBetween: 8 },
                  640: { slidesPerView: 3, spaceBetween: 32 },
                },
              }"
            >
              <template #slide="{ slide }">
                <ProductCard
                  :id="slide.id"
                  :key="slide.id"
                  :has-gift="slide.is_have_gift"
                  :slug="slide.slug"
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
          <div v-if="noveltyBanner.id" class="bg-text mr-6 rounded-[40px] xl:w-[50%]">
            <div class="h-full sm:flex">
              <div class="p-6 sm:p-8">
                <div class="items flex flex-col gap-3 text-white sm:gap-4">
                  <p class="text-subsidiary text-subsidiary-reg sm:text-mob-small-reg">
                    {{ noveltyBanner.addition_description }}
                  </p>
                  <h3 class="font-vast text-vast-additional sm:text-vast-title-additional mb-3 font-bold uppercase">
                    {{ noveltyBanner.title }}
                  </h3>
                  <p class="text-subsidiary-reg sm:text-mob-small-reg">
                    {{ noveltyBanner.description }}
                  </p>
                </div>
                <Button :label="noveltyBanner.button_text" variant="light" class="mt-4 max-sm:w-full sm:mt-6" />
              </div>
              <div>
                <VPicture
                  class="rounded-20 h-full w-[300px] overflow-hidden !object-contain max-sm:!h-[160px] max-sm:w-full"
                  height="100%"
                  width="100%"
                  :src="noveltyBanner.image?.path"
                  alt="steak image"
                />
              </div>
            </div>
          </div>
        </div>
        <VSlider
          v-else
          :slides="noveltyProducts"
          :slider-options="{
            slidesPerView: 6,
            spaceBetween: 32,
          }"
        >
          <template #slide="{ slide }">
            <ProductCard
              :id="slide.id"
              :key="slide.id"
              :has-gift="slide.is_have_gift"
              :slug="slide.slug"
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
      </VSection>
      <VSection>
        <div class="grid items-stretch gap-8 md:mt-12" :class="auth.user ? 'xl:grid-cols-[1.5fr_2fr_1.5fr]' : 'sm:grid-cols-2 xl:grid-cols-3'">
          <div class="gap-8" :class="auth.user ? 'grid' : 'grid-rows-2 sm:grid'">
            <div v-if="!auth.user">
              <h2 class="text-default-bold sm:text-heavy-bold">
                {{ t('info_banners.reg_title') }}
              </h2>
              <p class="text-subsidiary-reg sm:text-mob-small-reg mt-2">
                {{ t('info_banners.reg_description') }}
              </p>
            </div>
            <div v-if="isMobile && !auth.user" class="rounded-20 bg-filling mt-6 p-4 sm:mt-0">
              <p class="text-mob-small-reg text-subsidiary">{{ t('info_banners.loyalty_title') }}</p>
              <h4 class="text-default-bold sm:text-heavy-bold mt-1">{{ t('info_banners.loyalty_description_step_1') }}</h4>
              <h4 class="text-default-bold sm:text-heavy-bold mt-2">{{ t('info_banners.loyalty_description_step_2') }}</h4>
              <p class="text-mob-small-reg mt-1">{{ t('info_banners.loyalty_addition_description') }}</p>
            </div>
            <!-- TODO: подумать о более универсальном варианте -->
            <div v-if="isMobile && !auth.user" class="rounded-20 bg-filling relative mt-2 flex justify-end gap-4 overflow-hidden">
              <div
                class="absolute bottom-0 left-0 h-[270px] w-[300px] bg-cover bg-bottom-right bg-no-repeat"
                :style="{
                  backgroundImage: 'url(/images/test-images/reg-info-estore.webp)',
                  transform: 'translate(-20%, 30%)',
                }"
              ></div>
              <div class="ml-auto w-[65%] p-3">
                <div>
                  <h4 class="text-default-bold">Интернет магазин</h4>
                  <p class="text-subsidiary-reg mt-2 sm:mt-0">Авторизуйтесь чтобы получить доступ к программе CASHBACK</p>
                </div>
                <Button label="Регистрация" class="mt-6" @click="router.get(route('api.v1.auth-check'), {}, { preserveScroll: true })" />
              </div>
            </div>
            <div v-if="!isMobile && !auth.user" class="rounded-20 bg-filling relative mt-2 flex gap-4 overflow-hidden sm:mt-0">
              <div
                class="absolute right-0 bottom-0 h-[390px] w-[350px] bg-cover bg-bottom max-xl:h-[250px] max-xl:w-[230px]"
                :style="{
                  backgroundImage: 'url(/images/test-images/reg-info-estore.webp)',
                  transform: 'translate(25%, 35%)',
                }"
              ></div>
              <div class="p-4 sm:w-[60%]">
                <div>
                  <h4 class="text-heavy-bold">Интернет магазин</h4>
                  <p class="text-mob-small-reg mt-2 sm:mt-0">Авторизуйтесь чтобы получить доступ к программе CASHBACK</p>
                </div>
                <Button label="Регистрация" class="mt-8" @click="router.get(route('api.v1.auth-check'), {}, { preserveScroll: true })" />
              </div>
            </div>
            <div v-else-if="auth.user">
              <div class="flex h-full flex-col gap-6">
                <div>
                  <h2 class="text-default-bold sm:text-heavy-bold">Здравствуйте, {{ !!auth.user.name ? auth.user.name : 'Пользователь' }}</h2>
                  <p class="text-subsidiary-reg sm:text-mob-small-reg text-subsidiary mt-2">Москва и МО</p>
                </div>

                <div>
                  <BonusCard
                    :card-number="userBonusCard.number"
                    :card-level="userBonusCard.level"
                    :cashback="userBonusCard.cashback + '%'"
                    :card-balance="userBonusCard.amount"
                  />

                  <div v-if="false" class="bg-text rounded-20 mt-2 flex justify-between p-4 text-white">
                    <p class="text-small-medium">Подарочная карта</p>
                    <VPicture src="/images/logo.png" alt="logo" width="50px" height="" />
                  </div>
                </div>
              </div>
            </div>
            <div v-if="isMobile && !auth.user" class="bg-text rounded-20 relative mt-2 overflow-hidden text-white sm:mt-0">
              <!-- TODO: подумать о более универсальном варианте -->
              <div
                class="absolute right-0 bottom-0 h-[200px] w-[200px] rotate-[-60deg] bg-cover bg-bottom sm:h-[220px] sm:w-[300px]"
                :style="{
                  backgroundImage: 'url(/images/test-images/reg-info-for-companies.webp)',
                  transform: 'translate(-5%, 40%)',
                }"
              ></div>
              <div class="relative">
                <div class="p-3">
                  <h4 class="text-default-bold">Для компаний</h4>
                  <p class="text-subsidiary-reg mt-2">для HORECA</p>
                  <Link href="/page/contacts">
                    <Button label="Подробнее" variant="light" class="mt-8" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div v-if="!isMobile && !auth.user" class="grid-rows-2 gap-8 sm:grid">
            <div class="rounded-20 bg-filling p-4">
              <p class="text-mob-small-reg text-subsidiary">{{ t('info_banners.loyalty_title') }}</p>
              <h4 class="text-heavy-bold mt-1">{{ t('info_banners.loyalty_description_step_1') }}</h4>
              <h4 class="text-heavy-bold mt-2">{{ t('info_banners.loyalty_description_step_2') }}</h4>
              <p class="text-mob-small-reg mt-1">{{ t('info_banners.loyalty_addition_description') }}</p>
            </div>
            <div class="bg-text rounded-20 relative overflow-hidden text-white">
              <!-- TODO: подумать о более универсальном варианте -->
              <div
                class="absolute right-0 bottom-0 h-[220px] w-[300px] rotate-[-60deg] bg-cover bg-bottom"
                :style="{
                  backgroundImage: 'url(/images/test-images/reg-info-for-companies.webp)',
                  transform: 'translate(-5%, 40%)',
                }"
              ></div>
              <div class="relative">
                <div class="p-4">
                  <h4 class="text-heavy-bold">Для компаний</h4>
                  <p class="text-mob-small-reg mt-2">для HORECA</p>
                  <Link href="/page/contacts">
                    <Button label="Подробнее" variant="light" class="mt-8" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div v-else-if="auth.user" class="bg-light-gray rounded-20 p-3 sm:p-4">
            <div class="flex items-center justify-between">
              <h4 class="text-default-bold sm:text-heavy-bold">Вы недавно заказывали</h4>
              <div
                class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 text-nowrap transition-all duration-300 hover:text-white"
              >
                <Link :href="route('user.profile.orders_history')" class="flex items-center gap-2">
                  <span>Все заказы</span>
                  <IconCaretRight :width="'16px'" :height="'16px'" />
                </Link>
              </div>
            </div>
            <div class="mt-4 space-y-2">
              <div v-if="orderedProducts.length === 0" class="my-4 flex items-start gap-8 md:items-center lg:my-26">
                <VPicture src="/images/test-images/EmptyCart.webp" alt="Package" :width="isMobile ? '60px' : '124px'" />
                <div>
                  <p class="text-mob-small-medium md:text-default-medium">Здесь покажем ваши заказы за последнее время</p>
                  <Link :href="route('catalog.index')">
                    <VButton label="В каталог" class="mt-8" />
                  </Link>
                </div>
              </div>
              <VScrollPanel v-else class="max-h-[305px]">
                <article
                  v-for="product in orderedProducts"
                  :key="product.id"
                  class="border-b-filling flex flex-col justify-between gap-4 border-b py-3 last:border-b-0 md:flex-row md:items-center"
                >
                  <div class="flex items-center gap-4">
                    <VPicture
                      v-if="product.item.images[0]?.path"
                      :src="product.item.images[0].path"
                      alt="product_image"
                      :width="isMobile ? '74px' : '116px'"
                      :height="isMobile ? '64px' : '80px'"
                      class="flex-shrink-0"
                      img-classes="rounded-lg"
                    />
                    <VPicture
                      v-else
                      src="/images/productPlaceholder.png"
                      alt="productPlaceholder"
                      :width="isMobile ? '74px' : '116px'"
                      :height="isMobile ? '64px' : '80px'"
                      class="flex-shrink-0"
                      img-classes="rounded-lg"
                    />
                    <div class="flex flex-col justify-between gap-3">
                      <h4 class="text-mob-small-bold line-clamp-2">{{ product.item.name }}</h4>
                      <div v-if="!!product.unit_sale_percent" class="flex items-center gap-4">
                        <div class="flex flex-col gap-0.5">
                          <span class="text-subsidiary text-complimentary-reg line-through"
                            >{{ product.price_for_unit }} {{ product.item.price_type }}</span
                          >
                          <span class="text-mob-small-bold">{{ product.price_for_unit_without_sale }} {{ product.item.price_type }} </span>
                        </div>
                        <div v-if="product.unit_sale_percent" class="bg-delete text-complimentary-reg rounded-20 px-2 py-1 text-white">
                          -{{ product.unit_sale_percent }}%
                        </div>
                      </div>
                      <span v-else class="text-mob-small-bold"> {{ product.item.price }} {{ product.item.price_type }} </span>
                    </div>
                  </div>
                  <AddToCart :id="product.item.id" :is-combo="product.type === 'Combo'" retry class="text-nowrap" />
                </article>
              </VScrollPanel>
            </div>
          </div>
          <div
            v-if="!isMobile"
            class="rounded-20 relative bg-[url(/images/test-images/reg-info-bg.webp)] bg-cover bg-center text-white max-xl:col-span-2 max-xl:row-span-3"
          >
            <div class="rounded-20 absolute inset-0 z-0 bg-black/30"></div>
            <div class="relative z-10 flex h-full items-end p-4">
              <div>
                <h4 class="text-heavy-bold">Рецепты</h4>
                <p class="text-mob-small-reg mb-4">Подскажем и покажем, что приготовить из наших продуктов</p>
                <Link :href="route('recipe.index')">
                  <Button label="Подробнее" variant="light" />
                </Link>
              </div>
            </div>
          </div>
          <div v-if="isMobile && auth.user" class="rounded-20 relative bg-[url(/images/test-images/reg-info-bg.webp)] bg-cover bg-center text-white">
            <div class="rounded-20 absolute inset-0 z-0 bg-black/30"></div>
            <div class="relative z-10 flex h-full items-end p-4">
              <div class="mt-[25%]">
                <h4 class="text-heavy-bold">Рецепты</h4>
                <p class="text-mob-small-reg mt-2 mb-4">Подскажем и покажем, что приготовить из наших продуктов</p>
                <Link :href="route('recipe.index')">
                  <Button label="Подробнее" variant="light" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </VSection>
      <VSection v-if="recipes.length" :title="t('main_page.recipes_for_cooking')" class="mt-10 max-[640px]:!p-0 max-[640px]:!pl-6 md:mt-12">
        <template #headerAction>
          <div
            class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-[640px]:mr-4"
          >
            <Link :href="route('recipe.index')" class="flex items-center gap-2">
              <span>{{ t('main_page.all') }}</span>
              <IconCaretRight :width="'16px'" :height="'16px'" />
            </Link>
          </div>
        </template>

        <VSlider
          :slides="recipes"
          :slider-options="{
            slidesPerView: 4,
            spaceBetween: 32,
            allowTouchMove: true,
            breakpoints: {
              0: { slidesPerView: 1.7, spaceBetween: 8 },
              640: { slidesPerView: 3, spaceBetween: 16 },
              1280: { slidesPerView: 4, spaceBetween: 32 },
            },
          }"
        >
          <template #slide="{ slide }">
            <RecipeCard
              :id="slide.id"
              :title="slide.title"
              :description="slide.mini_description"
              :difficulty="slide.difficult"
              :portions="slide.number_of_persons"
              :cook-time="slide.cooking_time_minutes"
              :image="slide.image?.path"
              :is-favorite="slide.is_wishlist"
            >
              <template #actions="{ isFavorite }">
                <AddToFavorite :id="slide.id" :initial-value="isFavorite" item-type="recipe" />
                <VShare :url="route('recipe.show', { recipe: slide.id })" />
              </template>
            </RecipeCard>
          </template>
        </VSlider>
      </VSection>
      <VSection v-if="comboPacks.length" :title="t('main_page.combo_packs')" class="mt-6 md:mt-12">
        <template #headerAction>
          <div class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white">
            <Link :href="route('combo.index')" class="flex items-center gap-2">
              <span v-if="!isMobile">{{ t('main_page.allCombo') }}</span>
              <span v-else>{{ t('main_page.all') }}</span>
              <IconCaretRight :width="'16px'" :height="'16px'" />
            </Link>
          </div>
        </template>
        <div class="grid grid-cols-2 items-center justify-center gap-6 max-[480px]:grid-cols-1 min-[820px]:grid-cols-3 xl:grid-cols-4 xl:grid-rows-3">
          <div
            class="col-span-2 flex h-full flex-col overflow-hidden rounded-[40px] bg-right bg-no-repeat max-[480px]:col-span-1 min-[820px]:col-span-3 lg:flex xl:row-span-3"
            :style="{
              backgroundImage: !isMobile ? `url(${comboPacksBanners.image.path})` : '',
              backgroundSize: '50%',
            }"
          >
            <div
              class="bg-text relative z-0 h-full w-full mask-[url('/images/masks/for_combo_mobile1.svg')] mask-cover mask-bottom-right mask-no-repeat max-sm:pb-14 sm:max-w-[67%] sm:mask-[url('/images/masks/for_combo.svg')] sm:mask-right"
            >
              <div class="relative z-10 flex flex-col justify-between p-6 pb-10 text-white sm:mr-14 md:max-h-full md:pr-20 lg:p-8">
                <div>
                  <h3 class="font-vast text-vast-additional md:text-vast-title-additional font-bold uppercase">
                    {{ comboPacksBanners.title }}
                  </h3>
                  <p class="text-subsidiary-reg md:text-mob-small-reg mt-4">
                    {{ comboPacksBanners.description }}
                  </p>
                </div>
                <div
                  class="text-subsidiary-reg md:text-mob-small-reg mt-10 flex flex-col justify-between gap-6 sm:mt-30 md:flex-row md:items-center md:gap-8"
                >
                  <p>{{ comboPacksBanners.addition_description }}</p>
                  <Button :label="comboPacksBanners.button_text" variant="light" />
                </div>
              </div>
            </div>
            <VPicture v-if="isMobile" class="-mt-30" height="300px" width="100%" :src="comboPacksBanners.image.path" alt="combo" />
          </div>
          <div
            v-for="(combo, index) in comboPacks"
            :key="combo.id"
            :class="index === 0 ? 'xl:col-start-4 xl:row-span-3' : 'xl:row-span-3 xl:row-start-4'"
            class="h-full"
          >
            <ProductCard
              :id="combo.id"
              :key="combo.id"
              class="flex h-full flex-col"
              :title="combo.name"
              :is-combo="true"
              :images="combo.images.map((i) => i.path)"
              :weight="combo.weight"
              :description="combo.short_description"
              :is-favorite="combo.is_wishlist"
              :categories="combo.tags?.map((b) => b.name) ?? []"
              :unit="combo.weight_type"
              :price="Number(combo.sale_price) ?? 0"
              :price-unit="combo.price_type"
              :old-price="Number(combo.price) ?? 0"
              :cashback_percent="combo.cashback_percent"
            >
              <template #footer>
                <AddToCart :id="combo.id" :count-in-cart="combo.count_in_cart" nowrap type="combo" is-combo :quantity="combo.quantity" />
              </template>
            </ProductCard>
          </div>
        </div>
      </VSection>
    </VContainer>
  </div>
</template>

<style scoped></style>
