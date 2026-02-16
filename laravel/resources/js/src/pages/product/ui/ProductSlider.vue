<script setup lang="ts">
import type { SwiperContainer } from 'swiper/element';

import { computed, nextTick, onMounted, ref } from 'vue';

import { AddToFavorite } from '@/features/Product/add-to-favorite';
import { IProductDetail } from '@/pages/product/model';
import IconArrowDown from '@/shared/icons/IconArrowDown.svg';
import IconArrowUp from '@/shared/icons/IconArrowUp.svg';
import IconCaretLeft from '@/shared/icons/IconCaretLeft.svg';
import IconCaretRight from '@/shared/icons/IconCaretRight.svg';
import IconGiftOutline from '@/shared/icons/IconGiftOutline.svg';
import IconPlayButton from '@/shared/icons/IconPlayButton.svg';
import IconSnowflake from '@/shared/icons/IconSnowflake.svg';
import IconThermometr from '@/shared/icons/IconThermometr.svg';
import IconXCircleDelete from '@/shared/icons/IconXCircleDelete.svg';
import { useScreenSize } from '@/shared/media-queries';
import { VPicture } from '@/shared/ui/picture';
import { VShare } from '@/shared/ui/share';
import Skeleton from '@/shared/ui/volt/Skeleton.vue';

const thumbsSwiper = ref<SwiperContainer | null>(null);
const mainSwiper = ref<SwiperContainer | null>(null);
const gallerySwiper = ref<SwiperContainer | null>(null);
const activeIndex = ref<number>(0);
const isLoaded = ref(false);

const initSwipers = () => {
  if (mainSwiper.value && thumbsSwiper.value) {
    const main = mainSwiper.value.swiper;
    const thumbs = thumbsSwiper.value.swiper;

    main.thumbs.swiper = thumbs;
    main.thumbs.init();
    main.thumbs.update(true);

    main.on('slideChange', () => {
      activeIndex.value = main.realIndex;
      thumbs.slideToLoop(main.realIndex);
    });

    activeIndex.value = main.realIndex;
  } else if (mainSwiper.value) {
    const main = mainSwiper.value.swiper;
    main.on('slideChange', () => {
      activeIndex.value = main.realIndex;
    });

    activeIndex.value = main.realIndex;
  }
};

async function generateThumbnail(videoUrl: string): Promise<string> {
  const video = document.createElement('video');
  video.src = videoUrl;
  video.crossOrigin = 'anonymous';
  video.muted = true;
  video.preload = 'metadata';

  await new Promise<void>((resolve, reject) => {
    video.onloadedmetadata = () => resolve();
    video.onerror = () => reject(new Error('ошибка: метаданные'));
  });

  video.currentTime = Math.min(1, video.duration - 0.1);

  await new Promise<void>((resolve) => {
    video.onseeked = () => resolve();
  });

  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('canvas err');

  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  video.remove();

  return canvas.toDataURL('image/png');
}

type VideoItem = { preview: { url: string } | null; video_url: string };
type Slide = { type: 'image'; url: string; key: string } | { type: 'video'; preview: string; url: string; key: string };

const slides = ref<Slide[]>([]);

onMounted(async () => {
  const videoSlides = await Promise.all(
    (props.product.videos || []).map(async (v: VideoItem, idx: number) => {
      let preview = '';
      if (v.preview !== null) {
        preview = v.preview.url;
      } else {
        try {
          preview = await generateThumbnail(v.video_url);
        } catch (error) {
          console.error('Failed to generate thumbnail:', error);
          preview = '';
        }
      }
      return {
        type: 'video' as const,
        preview,
        url: v.video_url,
        key: `v${idx}`,
      };
    }),
  );

  const imageSlides = props.product.images.map((i, idx) => ({
    type: 'image' as const,
    url: i.path,
    key: `i${idx}`,
  }));

  slides.value = [...videoSlides, ...imageSlides];
  isLoaded.value = true;

  await nextTick();
  initSwipers();
});

const slideCount = computed<number>(() => slides.value.length);

const isFirstSlide = computed<boolean>(() => activeIndex.value === 0);
const isLastSlide = computed<boolean>(() => activeIndex.value === slideCount.value - 1);

const props = defineProps<{ product: IProductDetail }>();

const buttonPosition = computed<string>(() => {
  const slidesPerView: number = Math.min(slideCount.value, 3.5);
  const slideHeight: number = 95;
  const spaceBetween: number = 20;

  const totalHeight: number = slidesPerView * slideHeight + (slidesPerView - 1) * spaceBetween;
  return `${totalHeight}px`;
});

const { isMobile, isDesktop } = useScreenSize();

const showVideoModal = ref(false);
const currentVideoUrl = ref('');

const openVideoPlayer = (url: string) => {
  currentVideoUrl.value = url;
  showVideoModal.value = true;
};

const showGalleryModal = ref(false);
const galleryActiveIndex = ref(0);

const pauseAllVideos = () => {
  const videos = document.querySelectorAll('.gallery-video');
  videos.forEach((video) => {
    const videoElement = video as HTMLVideoElement;
    videoElement.pause();
    videoElement.currentTime = 0;
  });
};

const playCurrentVideo = () => {
  pauseAllVideos();
  const currentSlide = slides.value[galleryActiveIndex.value];
  if (currentSlide.type === 'video') {
    nextTick(() => {
      const video = document.querySelector(`.gallery-video-${galleryActiveIndex.value}`) as HTMLVideoElement;
      if (video) {
        video.play().catch(() => {});
      }
    });
  }
};

const openGallery = (index: number) => {
  galleryActiveIndex.value = index;
  showGalleryModal.value = true;

  nextTick(() => {
    if (gallerySwiper.value) {
      gallerySwiper.value.swiper.slideTo(index);
      gallerySwiper.value.swiper.on('slideChange', () => {
        galleryActiveIndex.value = gallerySwiper.value!.swiper.realIndex;
        playCurrentVideo();
      });
      playCurrentVideo();
    }
  });
};

const closeGallery = () => {
  pauseAllVideos();
  showGalleryModal.value = false;
};

const isGalleryFirstSlide = computed(() => galleryActiveIndex.value === 0);
const isGalleryLastSlide = computed(() => galleryActiveIndex.value === slideCount.value - 1);

const handleGalleryKeydown = (e: KeyboardEvent) => {
  if (!showGalleryModal.value) return;

  if (e.key === 'Escape') {
    closeGallery();
  } else if (e.key === 'ArrowLeft') {
    gallerySwiper.value?.swiper.slidePrev();
  } else if (e.key === 'ArrowRight') {
    gallerySwiper.value?.swiper.slideNext();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleGalleryKeydown);
});
</script>

<template>
  <div v-if="isLoaded" class="gap-4 sm:flex">
    <template v-if="slideCount">
      <div v-if="slideCount > 1" class="relative hidden max-h-[400px] min-[900px]:block">
        <button
          :disabled="isFirstSlide"
          class="absolute top-0 right-[calc(50%-24px)] z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] disabled:invisible"
          @click="mainSwiper?.swiper.slidePrev()"
        >
          <IconArrowUp />
        </button>
        <swiper-container
          ref="thumbsSwiper"
          direction="vertical"
          slides-per-view="3.5"
          space-between="20"
          watch-slides-progress
          watch-slides-visibility
          class="relative !h-full"
          style="width: 100px"
        >
          <swiper-slide v-for="(slide, idx) in slides" :key="slide.key">
            <div class="relative">
              <img
                :src="slide.type === 'video' ? slide.preview : slide.url"
                alt="slide"
                class="h-[100px] w-[100px] cursor-pointer overflow-hidden rounded-xl bg-[#f2f2f2] object-cover opacity-40"
                :class="{ 'border-stroke border opacity-100': idx === activeIndex }"
              />
              <button
                v-if="slide.type === 'video'"
                class="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm bg-black/40 px-3 py-1"
                @click="openVideoPlayer(slide.url)"
              >
                <IconPlayButton class="h-4 w-4" />
              </button>
            </div>
          </swiper-slide>
        </swiper-container>
        <button
          :disabled="isLastSlide"
          class="absolute right-[calc(50%-24px)] z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] disabled:invisible"
          :style="{ top: buttonPosition }"
          @click="mainSwiper?.swiper.slideNext()"
        >
          <IconArrowDown />
        </button>
      </div>
      <div class="relative" :style="{ height: !isMobile ? '400px' : '200px', width: isDesktop ? '500px' : '300px' }">
        <button
          v-if="slideCount > 1"
          class="absolute top-[calc(50%-31px)] right-0 z-[50] flex h-16 w-16 translate-x-1/2 cursor-pointer items-center justify-center bg-white mask-[url('/images/image2.svg')] mask-contain mask-no-repeat"
          @click="mainSwiper?.swiper.slideNext()"
        >
          <IconCaretRight class="z-[50] mr-4" />
        </button>
        <div class="text-subsidiary-medium absolute top-3 right-4 z-10 flex items-center gap-2 text-white">
          <div v-if="!!product.sale_percent" class="bg-delete rounded-full px-2 py-1">-{{ product.sale_percent }}%</div>
          <div v-if="product.is_new" class="bg-default rounded-full px-2 py-1">Новинка</div>
          <div v-if="product.cashback_percent" class="bg-marker rounded-full px-2 py-1">Кэшбек +{{ product.cashback_percent }}%</div>
          <div v-if="product.second_item_discount_percent" class="text-subsidiary-medium bg-ready-green rounded-full px-2 py-1 text-white">
            -{{ product.second_item_discount_percent }}% на второй товар
          </div>
          <div v-if="product.is_have_gift" class="bg-text/80 z-10 cursor-pointer rounded-full p-2">
            <IconGiftOutline class="h-5 w-5 text-white" />
          </div>
        </div>

        <div class="absolute right-4 bottom-2 z-10 flex gap-2">
          <template v-if="product.degree_type">
            <div v-if="product.degree_type === 'frozen'" class="bg-text/80 cursor-pointer rounded-full p-2">
              <IconSnowflake />
            </div>
            <div v-else class="bg-text/80 cursor-pointer rounded-full p-2">
              <IconThermometr />
            </div>
          </template>
          <AddToFavorite :id="product.id" :initial-value="product.is_wishlist" />
          <VShare
            :url="product.slug ? route('catalog.product.show', { product: product.slug }) : route('catalog.product.show', product.id)"
            :title="product.seo_title"
            :description="product.seo_description"
          />
        </div>
        <div class="without-scrollbar absolute bottom-3 left-4 z-10 flex gap-1 overflow-auto max-lg:max-w-[130px] lg:max-w-[340px]">
          <div v-for="tag in product.tags" :key="tag.id" class="bg-filling text-complimentary-reg rounded-lg px-2 py-1 text-nowrap">
            {{ tag.name }}
          </div>
        </div>
        <swiper-container ref="mainSwiper" loop="true" navigation thumbs class="h-full w-full overflow-hidden">
          <swiper-slide v-for="(slide, idx) in slides" :key="slide.key">
            <div class="relative h-full w-full cursor-pointer" @click="openGallery(idx)">
              <img
                :src="slide.type === 'video' ? slide.preview : slide.url"
                alt="slide"
                class="rounded-20 z-10 h-full w-full bg-[#f2f2f2] object-cover"
              />
              <button
                v-if="slide.type === 'video'"
                class="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg bg-black/70 px-4 py-2"
              >
                <IconPlayButton />
              </button>
            </div>
          </swiper-slide>
        </swiper-container>
        <button
          :disabled="isFirstSlide"
          class="absolute top-[calc(50%-31px)] left-8 z-[50] flex h-16 w-16 -translate-x-1/2 cursor-pointer items-center justify-center bg-white mask-[url('/images/image3.svg')] mask-contain mask-no-repeat disabled:invisible"
          @click="mainSwiper?.swiper.slidePrev()"
        >
          <IconCaretLeft class="z-[50] mr-10" />
        </button>
        <div v-if="slideCount > 1" class="absolute -bottom-2 left-1/2 z-[100] mt-2 flex w-full -translate-x-1/2 items-center gap-1">
          <span
            v-for="(slide, i) in slides"
            :key="i"
            :style="{ flexBasis: `${(1 / slides.length) * 100}%` }"
            class="block h-0.5 rounded-full transition-colors duration-300"
            :class="i === activeIndex ? 'bg-text' : 'bg-filling'"
          />
        </div>
      </div>
    </template>
    <template v-else>
      <div>
        <div class="relative" :style="{ height: !isMobile ? '400px' : '200px', width: isDesktop ? '500px' : '300px' }">
          <div class="text-subsidiary-medium absolute top-3 right-4 z-10 flex gap-2 text-white">
            <div class="bg-delete rounded-full px-2 py-1">-{{ product.sale_percent }}%</div>
            <div v-if="product.is_new" class="bg-default rounded-full px-2 py-1">Новинка</div>
          </div>

          <div class="absolute right-4 bottom-2 z-10 flex gap-2">
            <template v-if="product.degree_type">
              <div v-if="product.degree_type === 'frozen'" class="bg-text/80 cursor-pointer rounded-full p-2">
                <IconSnowflake />
              </div>
              <div v-else class="bg-text/80 cursor-pointer rounded-full p-2">
                <IconThermometr />
              </div>
            </template>
            <AddToFavorite :id="product.id" :initial-value="product.is_wishlist" />
            <VShare
              :url="route('catalog.product.show', { product: product.slug })"
              :title="product.seo_title"
              :description="product.seo_description"
            />
          </div>
          <div class="absolute bottom-3 left-4 z-10 flex gap-1 max-lg:max-w-[130px] max-lg:overflow-auto">
            <div v-for="tag in product.tags" :key="tag.id" class="bg-filling text-complimentary-reg rounded-lg px-2 py-1 text-nowrap">
              {{ tag.name }}
            </div>
          </div>
          <VPicture src="/images/productPlaceholder.png" alt="" width="100%" :height="isMobile ? '200px' : '400px'" class="rounded-2xl" />
        </div>
      </div>
    </template>
  </div>
  <div v-else class="gap-4 sm:flex">
    <div class="relative hidden min-[900px]:block">
      <div class="flex flex-col space-y-[10px]" style="width: 100px">
        <Skeleton v-for="i in 3" :key="i" width="100px" height="100px" border-radius="12px" />
      </div>
    </div>
    <div class="relative" :style="{ height: !isMobile ? '400px' : '200px', width: isDesktop ? '500px' : '300px' }">
      <Skeleton width="100%" height="100%" border-radius="20px" />
    </div>
  </div>

  <!--  <div v-if="showVideoModal" class="fixed inset-0 z-[3000] flex items-center justify-center bg-black/70">-->
  <!--    <div class="relative flex items-center justify-center">-->
  <!--      <button-->
  <!--        class="text-default-medium bg-default absolute -top-10 right-1 cursor-pointer rounded-full p-0.5 text-white"-->
  <!--        @click="showVideoModal = false"-->
  <!--      >-->
  <!--        <IconXCircleDelete class="h-6 w-6" />-->
  <!--      </button>-->
  <!--      <video :src="currentVideoUrl" controls autoplay playsinline class="max-h-[500px] max-w-[85%] rounded-xl object-cover" />-->
  <!--    </div>-->
  <!--  </div>-->

  <div v-if="showGalleryModal" class="fixed inset-0 z-[3500] flex items-center justify-center bg-black/80" @click.self="closeGallery">
    <button
      class="absolute top-4 right-4 z-[3600] cursor-pointer rounded-full bg-white/5 p-2 text-white transition-all hover:bg-white/20"
      @click="closeGallery"
    >
      <IconXCircleDelete class="h-8 w-8" />
    </button>

    <div class="relative h-full w-full max-w-[90vw] px-16 py-8">
      <button
        v-if="!isGalleryFirstSlide"
        class="absolute top-1/2 left-4 z-[3600] flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/20 transition-all hover:bg-white/30"
        @click="gallerySwiper?.swiper.slidePrev()"
      >
        <IconCaretLeft class="h-6 w-6 text-white" />
      </button>

      <button
        v-if="!isGalleryLastSlide"
        class="absolute top-1/2 right-4 z-[3600] flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/20 transition-all hover:bg-white/30"
        @click="gallerySwiper?.swiper.slideNext()"
      >
        <IconCaretRight class="h-6 w-6 text-white" />
      </button>

      <div class="absolute top-4 left-1/2 z-[3600] -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-white">
        <span class="text-lg font-medium">{{ galleryActiveIndex + 1 }} / {{ slideCount }}</span>
      </div>

      <swiper-container ref="gallerySwiper" loop="true" keyboard class="h-full w-full">
        <swiper-slide v-for="(slide, idx) in slides" :key="slide.key" class="flex items-center justify-center">
          <div class="flex h-full w-full items-center justify-center">
            <template v-if="slide.type === 'image'">
              <img :src="slide.url" alt="Gallery slide" class="max-h-full max-w-full object-contain" />
            </template>
            <template v-else>
              <video
                :src="slide.url"
                :class="`gallery-video gallery-video-${idx}`"
                controls
                playsinline
                class="max-h-full max-w-full rounded-xl object-contain"
              />
            </template>
          </div>
        </swiper-slide>
      </swiper-container>

      <div class="absolute bottom-4 left-1/2 z-[3600] flex max-w-[80%] -translate-x-1/2 gap-2 overflow-x-auto rounded-lg bg-black/50 p-2">
        <div
          v-for="(slide, idx) in slides"
          :key="slide.key"
          class="relative h-16 w-16 flex-shrink-0 cursor-pointer overflow-hidden rounded-md transition-all"
          :class="idx === galleryActiveIndex ? 'ring-2 ring-white' : 'opacity-50 hover:opacity-75'"
          @click="gallerySwiper?.swiper.slideTo(idx)"
        >
          <img :src="slide.type === 'video' ? slide.preview : slide.url" alt="Thumbnail" class="h-full w-full object-cover" />
          <div v-if="slide.type === 'video'" class="absolute inset-0 flex items-center justify-center bg-black/30">
            <IconPlayButton class="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overflow-x-auto::-webkit-scrollbar {
  height: 4px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
