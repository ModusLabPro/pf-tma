import { v as vueExports, s as serverRenderer_cjs_prodExports, $ as ptViewMerge, u as useScreenSize, a7 as IconArrowUp, a8 as IconArrowDown, m as IconCaretRight, a9 as IconGiftOutline, aa as IconSnowflake, ab as IconThermometr, W as _sfc_main$2, I as IconCaretLeft, _ as _sfc_main$4, ac as IconXCircleDelete, t as _export_sfc } from "../ssr.js";
import { _ as _sfc_main$3 } from "./VShare-C36WNIjH.js";
import Skeleton from "primevue/skeleton";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "@vue/shared";
import "@vue/compiler-ssr";
import "node:stream";
import "@inertiajs/core";
import "lodash-es";
import "@inertiajs/core/server";
import "vue-i18n";
import "primevue";
import "primevue/menu";
import "tailwind-merge";
import "primevue/config";
import "pinia";
import "@vueuse/core";
import "swiper/element/bundle";
import "primevue/avatar";
import "@primevue/icons/starfill";
import "primevue/rating";
import "@primevue/forms";
import "@primevue/forms/resolvers/zod";
import "zod";
import "primevue/scrollpanel";
import "primevue/breadcrumb";
import "primevue/menubar";
import "primevue/button";
import "@primevue/icons/check";
import "@primevue/icons/minus";
import "primevue/checkbox";
import "primevue/confirmdialog";
import "@primevue/icons/times";
import "@primevue/icons/windowmaximize";
import "@primevue/icons/windowminimize";
import "primevue/dialog";
import "primevue/inputtext";
import "primevue/badge";
import "primevue/popover";
import "primevue/radiobutton";
import "primevue/toast";
import "@vkid/sdk";
import "@primevue/icons/eye";
import "@primevue/icons/eyeslash";
import "primevue/password";
import "primevue/inputotp";
import "primevue/inputmask";
import "primevue/textarea";
import "axios";
import "primevue/useconfirm";
import "@primevue/icons/angledown";
import "@primevue/icons/angleup";
import "primevue/inputnumber";
import "@primevue/icons/chevrondown";
import "@primevue/icons/search";
import "@primevue/icons/spinner";
import "primevue/select";
import "primevue/selectbutton";
const _hoisted_1 = {
  width: "23",
  height: "24",
  viewBox: "0 0 23 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    vueExports.createElementVNode("path", {
      d: "M21.0747 8.82371C21.6562 9.13019 22.1425 9.58771 22.4817 10.1473C22.8208 10.7068 23 11.3472 23 12C23 12.6528 22.8208 13.2932 22.4817 13.8528C22.1425 14.4123 21.6562 14.8698 21.0747 15.1763L5.56497 23.5365C3.06757 24.884 0 23.1321 0 20.3614V3.63986C0 0.867943 3.06757 -0.882805 5.56497 0.462355L21.0747 8.82371Z",
      fill: "white"
    }, null, -1)
  ]));
}
const IconPlayButton = { render };
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Skeleton",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = vueExports.ref({
      root: `overflow-hidden bg-[#f2f2f2] dark:bg-surface-700 animate-pulse rounded-md p-circle:rounded-full`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Skeleton), vueExports.mergeProps({
        unstyled: "",
        pt: theme.value,
        ptOptions: {
          mergeProps: vueExports.unref(ptViewMerge)
        }
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/volt/Skeleton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ProductSlider",
  __ssrInlineRender: true,
  props: {
    product: {}
  },
  setup(__props) {
    const thumbsSwiper = vueExports.ref(null);
    const mainSwiper = vueExports.ref(null);
    const gallerySwiper = vueExports.ref(null);
    const activeIndex = vueExports.ref(0);
    const isLoaded = vueExports.ref(false);
    const initSwipers = () => {
      if (mainSwiper.value && thumbsSwiper.value) {
        const main = mainSwiper.value.swiper;
        const thumbs = thumbsSwiper.value.swiper;
        main.thumbs.swiper = thumbs;
        main.thumbs.init();
        main.thumbs.update(true);
        main.on("slideChange", () => {
          activeIndex.value = main.realIndex;
          thumbs.slideToLoop(main.realIndex);
        });
        activeIndex.value = main.realIndex;
      } else if (mainSwiper.value) {
        const main = mainSwiper.value.swiper;
        main.on("slideChange", () => {
          activeIndex.value = main.realIndex;
        });
        activeIndex.value = main.realIndex;
      }
    };
    async function generateThumbnail(videoUrl) {
      const video = document.createElement("video");
      video.src = videoUrl;
      video.crossOrigin = "anonymous";
      video.muted = true;
      video.preload = "metadata";
      await new Promise((resolve, reject) => {
        video.onloadedmetadata = () => resolve();
        video.onerror = () => reject(new Error("ошибка: метаданные"));
      });
      video.currentTime = Math.min(1, video.duration - 0.1);
      await new Promise((resolve) => {
        video.onseeked = () => resolve();
      });
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("canvas err");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      video.remove();
      return canvas.toDataURL("image/png");
    }
    const slides = vueExports.ref([]);
    vueExports.onMounted(async () => {
      const videoSlides = await Promise.all(
        (props.product.videos || []).map(async (v, idx) => {
          let preview = "";
          if (v.preview !== null) {
            preview = v.preview.url;
          } else {
            try {
              preview = await generateThumbnail(v.video_url);
            } catch (error) {
              console.error("Failed to generate thumbnail:", error);
              preview = "";
            }
          }
          return {
            type: "video",
            preview,
            url: v.video_url,
            key: `v${idx}`
          };
        })
      );
      const imageSlides = props.product.images.map((i, idx) => ({
        type: "image",
        url: i.path,
        key: `i${idx}`
      }));
      slides.value = [...videoSlides, ...imageSlides];
      isLoaded.value = true;
      await vueExports.nextTick();
      initSwipers();
    });
    const slideCount = vueExports.computed(() => slides.value.length);
    const isFirstSlide = vueExports.computed(() => activeIndex.value === 0);
    const isLastSlide = vueExports.computed(() => activeIndex.value === slideCount.value - 1);
    const props = __props;
    const buttonPosition = vueExports.computed(() => {
      const slidesPerView = Math.min(slideCount.value, 3.5);
      const slideHeight = 95;
      const spaceBetween = 20;
      const totalHeight = slidesPerView * slideHeight + (slidesPerView - 1) * spaceBetween;
      return `${totalHeight}px`;
    });
    const { isMobile, isDesktop } = useScreenSize();
    vueExports.ref(false);
    vueExports.ref("");
    const showGalleryModal = vueExports.ref(false);
    const galleryActiveIndex = vueExports.ref(0);
    const pauseAllVideos = () => {
      const videos = document.querySelectorAll(".gallery-video");
      videos.forEach((video) => {
        const videoElement = video;
        videoElement.pause();
        videoElement.currentTime = 0;
      });
    };
    const closeGallery = () => {
      pauseAllVideos();
      showGalleryModal.value = false;
    };
    const isGalleryFirstSlide = vueExports.computed(() => galleryActiveIndex.value === 0);
    const isGalleryLastSlide = vueExports.computed(() => galleryActiveIndex.value === slideCount.value - 1);
    const handleGalleryKeydown = (e) => {
      var _a, _b;
      if (!showGalleryModal.value) return;
      if (e.key === "Escape") {
        closeGallery();
      } else if (e.key === "ArrowLeft") {
        (_a = gallerySwiper.value) == null ? void 0 : _a.swiper.slidePrev();
      } else if (e.key === "ArrowRight") {
        (_b = gallerySwiper.value) == null ? void 0 : _b.swiper.slideNext();
      }
    };
    vueExports.onMounted(() => {
      document.addEventListener("keydown", handleGalleryKeydown);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (isLoaded.value) {
        _push(`<div class="gap-4 sm:flex" data-v-2a398127>`);
        if (slideCount.value) {
          _push(`<!--[-->`);
          if (slideCount.value > 1) {
            _push(`<div class="relative hidden max-h-[400px] min-[900px]:block" data-v-2a398127><button${serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(isFirstSlide.value) ? " disabled" : ""} class="absolute top-0 right-[calc(50%-24px)] z-10 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] disabled:invisible" data-v-2a398127>`);
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowUp), null, null, _parent));
            _push(`</button><swiper-container direction="vertical" slides-per-view="3.5" space-between="20" watch-slides-progress watch-slides-visibility class="relative !h-full" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "100px" })}" data-v-2a398127><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(slides.value, (slide, idx) => {
              _push(`<swiper-slide data-v-2a398127><div class="relative" data-v-2a398127><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", slide.type === "video" ? slide.preview : slide.url)} alt="slide" class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ "border-stroke border opacity-100": idx === activeIndex.value }, "h-[100px] w-[100px] cursor-pointer overflow-hidden rounded-xl bg-[#f2f2f2] object-cover opacity-40"])}" data-v-2a398127>`);
              if (slide.type === "video") {
                _push(`<button class="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-sm bg-black/40 px-3 py-1" data-v-2a398127>`);
                _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPlayButton), { class: "h-4 w-4" }, null, _parent));
                _push(`</button>`);
              } else {
                _push(`<!---->`);
              }
              _push(`</div></swiper-slide>`);
            });
            _push(`<!--]--></swiper-container><button${serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(isLastSlide.value) ? " disabled" : ""} class="absolute right-[calc(50%-24px)] z-10 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.1)] disabled:invisible" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ top: buttonPosition.value })}" data-v-2a398127>`);
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowDown), null, null, _parent));
            _push(`</button></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="relative" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ height: !vueExports.unref(isMobile) ? "400px" : "200px", width: vueExports.unref(isDesktop) ? "500px" : "300px" })}" data-v-2a398127>`);
          if (slideCount.value > 1) {
            _push(`<button class="absolute top-[calc(50%-31px)] right-0 z-[50] flex h-16 w-16 translate-x-1/2 cursor-pointer items-center justify-center bg-white mask-[url(&#39;/images/image2.svg&#39;)] mask-contain mask-no-repeat" data-v-2a398127>`);
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), { class: "z-[50] mr-4" }, null, _parent));
            _push(`</button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="text-subsidiary-medium absolute top-3 right-4 z-10 flex items-center gap-2 text-white" data-v-2a398127>`);
          if (!!_ctx.product.sale_percent) {
            _push(`<div class="bg-delete rounded-full px-2 py-1" data-v-2a398127>-${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.sale_percent)}%</div>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.product.is_new) {
            _push(`<div class="bg-default rounded-full px-2 py-1" data-v-2a398127>Новинка</div>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.product.cashback_percent) {
            _push(`<div class="bg-marker rounded-full px-2 py-1" data-v-2a398127>Кэшбек +${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.cashback_percent)}%</div>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.product.second_item_discount_percent) {
            _push(`<div class="text-subsidiary-medium bg-ready-green rounded-full px-2 py-1 text-white" data-v-2a398127> -${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.second_item_discount_percent)}% на второй товар </div>`);
          } else {
            _push(`<!---->`);
          }
          if (_ctx.product.is_have_gift) {
            _push(`<div class="bg-text/80 z-10 cursor-pointer rounded-full p-2" data-v-2a398127>`);
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconGiftOutline), { class: "h-5 w-5 text-white" }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="absolute right-4 bottom-2 z-10 flex gap-2" data-v-2a398127>`);
          if (_ctx.product.degree_type) {
            _push(`<!--[-->`);
            if (_ctx.product.degree_type === "frozen") {
              _push(`<div class="bg-text/80 cursor-pointer rounded-full p-2" data-v-2a398127>`);
              _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconSnowflake), null, null, _parent));
              _push(`</div>`);
            } else {
              _push(`<div class="bg-text/80 cursor-pointer rounded-full p-2" data-v-2a398127>`);
              _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconThermometr), null, null, _parent));
              _push(`</div>`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
            id: _ctx.product.id,
            "initial-value": _ctx.product.is_wishlist
          }, null, _parent));
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
            url: _ctx.product.slug ? _ctx.route("catalog.product.show", { product: _ctx.product.slug }) : _ctx.route("catalog.product.show", _ctx.product.id),
            title: _ctx.product.seo_title,
            description: _ctx.product.seo_description
          }, null, _parent));
          _push(`</div><div class="without-scrollbar absolute bottom-3 left-4 z-10 flex gap-1 overflow-auto max-lg:max-w-[130px] lg:max-w-[340px]" data-v-2a398127><!--[-->`);
          serverRenderer_cjs_prodExports.ssrRenderList(_ctx.product.tags, (tag) => {
            _push(`<div class="bg-filling text-complimentary-reg rounded-lg px-2 py-1 text-nowrap" data-v-2a398127>${serverRenderer_cjs_prodExports.ssrInterpolate(tag.name)}</div>`);
          });
          _push(`<!--]--></div><swiper-container loop="true" navigation thumbs class="h-full w-full overflow-hidden" data-v-2a398127><!--[-->`);
          serverRenderer_cjs_prodExports.ssrRenderList(slides.value, (slide, idx) => {
            _push(`<swiper-slide data-v-2a398127><div class="relative h-full w-full cursor-pointer" data-v-2a398127><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", slide.type === "video" ? slide.preview : slide.url)} alt="slide" class="rounded-20 z-10 h-full w-full bg-[#f2f2f2] object-cover" data-v-2a398127>`);
            if (slide.type === "video") {
              _push(`<button class="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg bg-black/70 px-4 py-2" data-v-2a398127>`);
              _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPlayButton), null, null, _parent));
              _push(`</button>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div></swiper-slide>`);
          });
          _push(`<!--]--></swiper-container><button${serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(isFirstSlide.value) ? " disabled" : ""} class="absolute top-[calc(50%-31px)] left-8 z-[50] flex h-16 w-16 -translate-x-1/2 cursor-pointer items-center justify-center bg-white mask-[url(&#39;/images/image3.svg&#39;)] mask-contain mask-no-repeat disabled:invisible" data-v-2a398127>`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretLeft), { class: "z-[50] mr-10" }, null, _parent));
          _push(`</button>`);
          if (slideCount.value > 1) {
            _push(`<div class="absolute -bottom-2 left-1/2 z-[100] mt-2 flex w-full -translate-x-1/2 items-center gap-1" data-v-2a398127><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(slides.value, (slide, i) => {
              _push(`<span style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ flexBasis: `${1 / slides.value.length * 100}%` })}" class="${serverRenderer_cjs_prodExports.ssrRenderClass([i === activeIndex.value ? "bg-text" : "bg-filling", "block h-0.5 rounded-full transition-colors duration-300"])}" data-v-2a398127></span>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><!--]-->`);
        } else {
          _push(`<div data-v-2a398127><div class="relative" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ height: !vueExports.unref(isMobile) ? "400px" : "200px", width: vueExports.unref(isDesktop) ? "500px" : "300px" })}" data-v-2a398127><div class="text-subsidiary-medium absolute top-3 right-4 z-10 flex gap-2 text-white" data-v-2a398127><div class="bg-delete rounded-full px-2 py-1" data-v-2a398127>-${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.sale_percent)}%</div>`);
          if (_ctx.product.is_new) {
            _push(`<div class="bg-default rounded-full px-2 py-1" data-v-2a398127>Новинка</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="absolute right-4 bottom-2 z-10 flex gap-2" data-v-2a398127>`);
          if (_ctx.product.degree_type) {
            _push(`<!--[-->`);
            if (_ctx.product.degree_type === "frozen") {
              _push(`<div class="bg-text/80 cursor-pointer rounded-full p-2" data-v-2a398127>`);
              _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconSnowflake), null, null, _parent));
              _push(`</div>`);
            } else {
              _push(`<div class="bg-text/80 cursor-pointer rounded-full p-2" data-v-2a398127>`);
              _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconThermometr), null, null, _parent));
              _push(`</div>`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
            id: _ctx.product.id,
            "initial-value": _ctx.product.is_wishlist
          }, null, _parent));
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
            url: _ctx.route("catalog.product.show", { product: _ctx.product.slug }),
            title: _ctx.product.seo_title,
            description: _ctx.product.seo_description
          }, null, _parent));
          _push(`</div><div class="absolute bottom-3 left-4 z-10 flex gap-1 max-lg:max-w-[130px] max-lg:overflow-auto" data-v-2a398127><!--[-->`);
          serverRenderer_cjs_prodExports.ssrRenderList(_ctx.product.tags, (tag) => {
            _push(`<div class="bg-filling text-complimentary-reg rounded-lg px-2 py-1 text-nowrap" data-v-2a398127>${serverRenderer_cjs_prodExports.ssrInterpolate(tag.name)}</div>`);
          });
          _push(`<!--]--></div>`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
            src: "/images/productPlaceholder.png",
            alt: "",
            width: "100%",
            height: vueExports.unref(isMobile) ? "200px" : "400px",
            class: "rounded-2xl"
          }, null, _parent));
          _push(`</div></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="gap-4 sm:flex" data-v-2a398127><div class="relative hidden min-[900px]:block" data-v-2a398127><div class="flex flex-col space-y-[10px]" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "width": "100px" })}" data-v-2a398127><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(3, (i) => {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
            key: i,
            width: "100px",
            height: "100px",
            "border-radius": "12px"
          }, null, _parent));
        });
        _push(`<!--]--></div></div><div class="relative" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ height: !vueExports.unref(isMobile) ? "400px" : "200px", width: vueExports.unref(isDesktop) ? "500px" : "300px" })}" data-v-2a398127>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
          width: "100%",
          height: "100%",
          "border-radius": "20px"
        }, null, _parent));
        _push(`</div></div>`);
      }
      if (showGalleryModal.value) {
        _push(`<div class="fixed inset-0 z-[3500] flex items-center justify-center bg-black/80" data-v-2a398127><button class="absolute top-4 right-4 z-[3600] cursor-pointer rounded-full bg-white/5 p-2 text-white transition-all hover:bg-white/20" data-v-2a398127>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconXCircleDelete), { class: "h-8 w-8" }, null, _parent));
        _push(`</button><div class="relative h-full w-full max-w-[90vw] px-16 py-8" data-v-2a398127>`);
        if (!isGalleryFirstSlide.value) {
          _push(`<button class="absolute top-1/2 left-4 z-[3600] flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/20 transition-all hover:bg-white/30" data-v-2a398127>`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretLeft), { class: "h-6 w-6 text-white" }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        if (!isGalleryLastSlide.value) {
          _push(`<button class="absolute top-1/2 right-4 z-[3600] flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/20 transition-all hover:bg-white/30" data-v-2a398127>`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), { class: "h-6 w-6 text-white" }, null, _parent));
          _push(`</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="absolute top-4 left-1/2 z-[3600] -translate-x-1/2 rounded-full bg-black/50 px-4 py-2 text-white" data-v-2a398127><span class="text-lg font-medium" data-v-2a398127>${serverRenderer_cjs_prodExports.ssrInterpolate(galleryActiveIndex.value + 1)} / ${serverRenderer_cjs_prodExports.ssrInterpolate(slideCount.value)}</span></div><swiper-container loop="true" keyboard class="h-full w-full" data-v-2a398127><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(slides.value, (slide, idx) => {
          _push(`<swiper-slide class="flex items-center justify-center" data-v-2a398127><div class="flex h-full w-full items-center justify-center" data-v-2a398127>`);
          if (slide.type === "image") {
            _push(`<img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", slide.url)} alt="Gallery slide" class="max-h-full max-w-full object-contain" data-v-2a398127>`);
          } else {
            _push(`<video${serverRenderer_cjs_prodExports.ssrRenderAttr("src", slide.url)} class="${serverRenderer_cjs_prodExports.ssrRenderClass([`gallery-video gallery-video-${idx}`, "max-h-full max-w-full rounded-xl object-contain"])}" controls playsinline data-v-2a398127></video>`);
          }
          _push(`</div></swiper-slide>`);
        });
        _push(`<!--]--></swiper-container><div class="absolute bottom-4 left-1/2 z-[3600] flex max-w-[80%] -translate-x-1/2 gap-2 overflow-x-auto rounded-lg bg-black/50 p-2" data-v-2a398127><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(slides.value, (slide, idx) => {
          _push(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass([idx === galleryActiveIndex.value ? "ring-2 ring-white" : "opacity-50 hover:opacity-75", "relative h-16 w-16 flex-shrink-0 cursor-pointer overflow-hidden rounded-md transition-all"])}" data-v-2a398127><img${serverRenderer_cjs_prodExports.ssrRenderAttr("src", slide.type === "video" ? slide.preview : slide.url)} alt="Thumbnail" class="h-full w-full object-cover" data-v-2a398127>`);
          if (slide.type === "video") {
            _push(`<div class="absolute inset-0 flex items-center justify-center bg-black/30" data-v-2a398127>`);
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPlayButton), { class: "h-4 w-4" }, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/product/ui/ProductSlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductSlider = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2a398127"]]);
export {
  ProductSlider as default
};
