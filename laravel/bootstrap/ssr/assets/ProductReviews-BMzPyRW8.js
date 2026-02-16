import { v as vueExports, u as useScreenSize, c as useForm, T, s as serverRenderer_cjs_prodExports, J as IconSort, d as _sfc_main$1, L as _sfc_main$2, a as VButton, a6 as IconTooltip, l as link_default, G as IconCaretRight, p as _sfc_main$3, q as personInitials, o as _sfc_main$4, _ as _sfc_main$5 } from "../ssr.js";
import { useI18n } from "vue-i18n";
import { r as reactToReview } from "./reactToReview-DRKkDf2Q.js";
import { I as IconArrowsDownUp } from "./IconArrowsDownUp-DpCY8QBc.js";
import { I as IconThumbsDown } from "./IconThumbsDown-D69dI4Zk.js";
import { I as IconThumbsUp } from "./IconThumbsUp-BHrWpxEP.js";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "@vue/shared";
import "@vue/compiler-ssr";
import "node:stream";
import "@inertiajs/core";
import "lodash-es";
import "@inertiajs/core/server";
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
const initialCount = 4;
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ProductReviews",
  __ssrInlineRender: true,
  props: {
    reviews: {},
    slug: {}
  },
  setup(__props) {
    var _a, _b;
    const { isMobile } = useScreenSize();
    const isSortModalOpen = vueExports.ref(false);
    const { t } = useI18n();
    const sortOptions = vueExports.ref([
      { sortLabel: "По дате", key: "created_at" },
      { sortLabel: "По оценке", key: "rating" },
      { sortLabel: "По полезности", key: "usefulness" }
    ]);
    const selectedSort = vueExports.ref("created_at");
    const props = __props;
    const form = useForm({
      sort_by: ((_a = T().queryParams) == null ? void 0 : _a.sort_by) ?? "created_at",
      sort_dir: ((_b = T().queryParams) == null ? void 0 : _b.sort_dir) ?? "asc"
    });
    const currentSortBy = vueExports.computed(() => form.sort_by);
    const currentSortDir = vueExports.computed(() => form.sort_dir);
    const sortBy = (field) => {
      if (form.sort_by === field) {
        form.sort_dir = form.sort_dir === "desc" ? "asc" : "desc";
      } else {
        form.sort_by = field;
        form.sort_dir = "asc";
      }
      form.get(T("catalog.product.show", props.slug), {
        preserveState: true,
        replace: true,
        preserveScroll: true,
        onSuccess: () => {
          isSortModalOpen.value = false;
        }
      });
    };
    const showAll = vueExports.ref(false);
    const displayedReviews = vueExports.computed(() => {
      return showAll.value ? props.reviews : props.reviews.slice(0, initialCount);
    });
    const showButton = vueExports.computed(() => props.reviews.length > initialCount);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}><div class="flex justify-between"><h4 class="text-small-medium md:text-default-medium">Всего ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.reviews", _ctx.reviews.length).toLowerCase())}</h4>`);
      if (!vueExports.unref(isMobile)) {
        _push(`<div class="text-mob-small-medium flex items-center gap-2"><p class="text-mob-small-reg text-additional">Сортировка:</p><button class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ "text-default": currentSortBy.value === "created_at" }, "flex cursor-pointer items-center gap-1 transition-all duration-200 ease-in-out"])}"><span>по дате</span>`);
        if (currentSortBy.value === "created_at") {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowsDownUp), {
            class: { "rotate-180": currentSortDir.value === "desc" }
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button><button class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ "text-default": currentSortBy.value === "rating" }, "flex cursor-pointer items-center"])}"><span>по оценке</span>`);
        if (currentSortBy.value === "rating") {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowsDownUp), {
            class: { "rotate-180": currentSortDir.value === "desc" }
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button><button class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ "text-default": currentSortBy.value === "usefulness" }, "flex cursor-pointer items-center"])}"><span>по полезности</span>`);
        if (currentSortBy.value === "usefulness") {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowsDownUp), {
            class: { "rotate-180": currentSortDir.value === "desc" }
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button></div>`);
      } else {
        _push(`<div class="text-subsidiary-reg flex items-center gap-1"><button class="inline-flex items-center">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconSort), {
          width: "16px",
          height: "16px"
        }, null, _parent));
        _push(`<span>Сортировка</span></button>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
          visible: isSortModalOpen.value,
          "onUpdate:visible": ($event) => isSortModalOpen.value = $event,
          modal: "",
          draggable: false,
          class: "!rounded-20 w-9/10 pb-2"
        }, {
          header: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h4 class="text-default-bold"${_scopeId}>Сортировка</h4>`);
            } else {
              return [
                vueExports.createVNode("h4", { class: "text-default-bold" }, "Сортировка")
              ];
            }
          }),
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-small-regular mt-1 flex min-w-[260px] flex-col gap-2"${_scopeId}><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(sortOptions.value, (sort) => {
                _push2(`<div class="ml-2"${_scopeId}>`);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
                  modelValue: selectedSort.value,
                  "onUpdate:modelValue": ($event) => selectedSort.value = $event,
                  "input-id": sort.key,
                  name: sort.key,
                  value: sort.key
                }, null, _parent2, _scopeId));
                _push2(`<label class="cursor-pointer pl-3"${serverRenderer_cjs_prodExports.ssrRenderAttr("for", sort.key)}${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(sort.sortLabel)}</label></div>`);
              });
              _push2(`<!--]-->`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                label: "Применить",
                class: "mt-3",
                type: "submit",
                onClick: ($event) => sortBy(selectedSort.value)
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                vueExports.createVNode("div", { class: "text-small-regular mt-1 flex min-w-[260px] flex-col gap-2" }, [
                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(sortOptions.value, (sort) => {
                    return vueExports.openBlock(), vueExports.createBlock("div", {
                      key: sort.key,
                      class: "ml-2"
                    }, [
                      vueExports.createVNode(_sfc_main$2, {
                        modelValue: selectedSort.value,
                        "onUpdate:modelValue": ($event) => selectedSort.value = $event,
                        "input-id": sort.key,
                        name: sort.key,
                        value: sort.key
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                      vueExports.createVNode("label", {
                        class: "cursor-pointer pl-3",
                        for: sort.key
                      }, vueExports.toDisplayString(sort.sortLabel), 9, ["for"])
                    ]);
                  }), 128)),
                  vueExports.createVNode(vueExports.unref(VButton), {
                    label: "Применить",
                    class: "mt-3",
                    type: "submit",
                    onClick: ($event) => sortBy(selectedSort.value)
                  }, null, 8, ["onClick"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div><div class="bg-non-active mt-6 flex flex-col justify-between gap-1 rounded-lg p-2 md:flex-row md:gap-0"><p class="max-md:text-subsidiary-reg flex gap-1 md:items-center">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconTooltip), { class: "text-default" }, null, _parent));
      _push(` Оставить отзыв можно через личный кабинет после покупки товара </p>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
        href: "#",
        class: "max-md:text-subsidiary-reg max-md:text-additional ml-5 flex items-center"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Правила оформления отзывов <span${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), { class: "!h-4 !w-4" }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              vueExports.createTextVNode("Правила оформления отзывов "),
              vueExports.createVNode("span", null, [
                vueExports.createVNode(vueExports.unref(IconCaretRight), { class: "!h-4 !w-4" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-6">`);
      if (_ctx.reviews.length > 0) {
        _push(`<div><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(displayedReviews.value, (review) => {
          _push(`<article class="border-b-stroke flex flex-col gap-3 border-b p-4"><div class="flex items-center justify-between gap-3"><div class="flex items-center gap-2">`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
            shape: "circle",
            label: review.userName ? vueExports.unref(personInitials)(review.userName) : "П"
          }, null, _parent));
          _push(`<div class="flex flex-col gap-0.5"><span class="text-subsidiary-medium text-text">${serverRenderer_cjs_prodExports.ssrInterpolate(review.userName)}</span><span class="text-complimentary-bold text-additional">${serverRenderer_cjs_prodExports.ssrInterpolate(review.created_at)}</span></div></div><div class="text-additional flex items-center gap-2">`);
          if (review.likes_count) {
            _push(`<p class="text-additional text-complimentary-reg">${serverRenderer_cjs_prodExports.ssrInterpolate(review.likes_count)} полезно</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconThumbsUp), {
            class: ["cursor-pointer", { "text-text": review.liked_by_user }],
            onClick: ($event) => vueExports.unref(reactToReview)(review.id, "like")
          }, null, _parent));
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconThumbsDown), {
            class: ["cursor-pointer", { "text-text": review.disliked_by_user }],
            onClick: ($event) => vueExports.unref(reactToReview)(review.id, "dislike")
          }, null, _parent));
          _push(`</div></div><div class="flex items-center gap-2"><div class="text-subsidiary-medium flex h-[22px] items-center gap-2 font-semibold max-md:flex-row-reverse md:text-base/[22px]">`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
            "default-value": review.rating,
            readonly: ""
          }, null, _parent));
          _push(` ${serverRenderer_cjs_prodExports.ssrInterpolate(review.rating)}</div><h3 class="text-complimentary-bold text-[#AC9B58]">${serverRenderer_cjs_prodExports.ssrInterpolate(review.product)}</h3></div><p class="text-subsidiary-reg md:text-mob-small-reg">${serverRenderer_cjs_prodExports.ssrInterpolate(review.text)}</p>`);
          if (review.images.length) {
            _push(`<div class="flex items-center gap-2"><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(review.images, (image) => {
              _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                key: image.id,
                src: image.path,
                alt: "Изображение товара",
                width: vueExports.unref(isMobile) ? "54px" : "90px",
                height: vueExports.unref(isMobile) ? "60px" : "100px",
                class: "bg-filling shrink-0 rounded-lg sm:rounded-2xl",
                "img-classes": "rounded-lg sm:rounded-2xl bg-filling"
              }, null, _parent));
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          if (review.answer) {
            _push(`<div class="bg-input text-subsidiary-reg md:text-mob-small-reg mt-2 rounded-lg p-3"><p class="text-additional">Ответ магазина</p><p class="mt-1">${serverRenderer_cjs_prodExports.ssrInterpolate(review.answer)}</p></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</article>`);
        });
        _push(`<!--]-->`);
        if (showButton.value && !showAll.value) {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
            label: "Показать еще отзывы",
            variant: "outline",
            class: "mt-6 justify-self-center",
            onClick: ($event) => showAll.value = true
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div><p class="text-center">На этот товар еще никто не оставил отзыв.</p></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/product/ui/ProductReviews.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
