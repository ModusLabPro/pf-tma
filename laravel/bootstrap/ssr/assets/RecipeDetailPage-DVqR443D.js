import { v as vueExports, u as useScreenSize, T, s as serverRenderer_cjs_prodExports, V as VContainer, x as _sfc_main$1, l as link_default, n as _sfc_main$2, o as _sfc_main$3, ar as IconHeartFilled, as as IconHeart, _ as _sfc_main$5, k as _sfc_main$6, U as ProductCard, P as _sfc_main$7, W as _sfc_main$8, D as _sfc_main$9, a as VButton, p as _sfc_main$a, q as personInitials, t as _export_sfc } from "../ssr.js";
import { g as getFormattedTime, I as IconCookingPot } from "./getFormattedTime-DfpF6FCc.js";
import { a as _sfc_main$b } from "./AddReviewModal-fl2Fe4q6.js";
import { r as reactToReview } from "./reactToReview-DRKkDf2Q.js";
import { I as IconChefHat } from "./IconChefHat-CbLzs3Yv.js";
import { I as IconClockOutline } from "./IconClockOutline-BglWD8g2.js";
import { I as IconThumbsDown } from "./IconThumbsDown-D69dI4Zk.js";
import { I as IconThumbsUp } from "./IconThumbsUp-BHrWpxEP.js";
import { _ as _sfc_main$4 } from "./VShare-C36WNIjH.js";
import { router } from "@inertiajs/core";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "@vue/shared";
import "@vue/compiler-ssr";
import "node:stream";
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
const total = 5;
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "RecipeDetailPage",
  __ssrInlineRender: true,
  props: {
    recipe: {},
    recipeProducts: {},
    auth: {},
    reviews: {}
  },
  setup(__props) {
    const { isDesktop } = useScreenSize();
    const props = __props;
    const difficultyLevels = Array.from({ length: total }, (_, i) => i < props.recipe.difficult);
    const breadcrumbItems = vueExports.computed(() => {
      const items = [
        { label: "Главная", route: T("main-page") },
        { label: "Рецепты", route: T("recipe.index") }
      ];
      return [
        ...items,
        {
          label: props.recipe.title,
          route: T("recipe.show", props.recipe.id)
        }
      ];
    });
    const isAddModalOpen = vueExports.ref(false);
    const initialRating = vueExports.ref(0);
    const { isMobile } = useScreenSize();
    const shareComp = vueExports.useTemplateRef("shareComponent");
    const clickOnShareText = (event) => {
      if (shareComp.value) {
        shareComp.value.click(event);
      }
    };
    const isFavorite = vueExports.ref(props.recipe.is_wishlist);
    const addToFavorite = () => {
      router.post(
        T("whitelist.add"),
        {
          item_id: props.recipe.id,
          item_type: "recipe"
        },
        {
          preserveScroll: true,
          preserveState: true,
          only: ["recipe"],
          onSuccess: () => {
            isFavorite.value = true;
          }
        }
      );
    };
    const removeFromFavorite = () => {
      router.delete(T("whitelist.remove"), {
        data: {
          item_id: props.recipe.id,
          item_type: "recipe"
        },
        preserveScroll: true,
        preserveState: true,
        only: ["recipe"],
        onSuccess: () => {
          isFavorite.value = false;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), { class: "px-6 sm:px-8" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!vueExports.unref(isDesktop)) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
                model: breadcrumbItems.value,
                class: "bg-white max-md:px-0! md:mb-4"
              }, {
                item: vueExports.withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                      href: item.route
                    }, {
                      default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${serverRenderer_cjs_prodExports.ssrInterpolate(item.label)}`);
                        } else {
                          return [
                            vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(link_default), {
                        class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                        href: item.route
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { model: breadcrumbItems.value }, {
                item: vueExports.withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                      href: item.route
                    }, {
                      default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${serverRenderer_cjs_prodExports.ssrInterpolate(item.label)}`);
                        } else {
                          return [
                            vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(link_default), {
                        class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                        href: item.route
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [
              !vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
                key: 0,
                model: breadcrumbItems.value,
                class: "bg-white max-md:px-0! md:mb-4"
              }, {
                item: vueExports.withCtx(({ item }) => [
                  vueExports.createVNode(vueExports.unref(link_default), {
                    class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                    href: item.route
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["href"])
                ]),
                _: 1
              }, 8, ["model"])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
                key: 1,
                model: breadcrumbItems.value
              }, {
                item: vueExports.withCtx(({ item }) => [
                  vueExports.createVNode(vueExports.unref(link_default), {
                    class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                    href: item.route
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["href"])
                ]),
                _: 1
              }, 8, ["model"]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), null, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), { class: "max-sm:!py-4" }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c2, _d2, _e, _f, _g, _h;
                if (_push3) {
                  _push3(`<article class="border-filling flex flex-col-reverse gap-4 rounded-3xl border p-2 lg:flex-row lg:items-center lg:gap-8 lg:rounded-[40px] lg:p-6" data-v-8f345751${_scopeId2}><div class="flex w-full flex-grow flex-col justify-between" data-v-8f345751${_scopeId2}><div class="flex items-center justify-between" data-v-8f345751${_scopeId2}><div class="flex flex-col gap-1" data-v-8f345751${_scopeId2}><div class="flex items-center gap-2" data-v-8f345751${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                    size: "small",
                    readonly: "",
                    "default-value": _ctx.recipe.rating
                  }, null, _parent3, _scopeId2));
                  _push3(`<span class="text-mob-small-medium" data-v-8f345751${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.recipe.rating)}</span></div><span class="text-complimentary-reg text-additional" data-v-8f345751${_scopeId2}>Рецепт / ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.recipe.created_at)}</span></div><div class="flex items-center gap-4" data-v-8f345751${_scopeId2}>`);
                  if (isFavorite.value) {
                    _push3(`<div class="bg-text/80 cursor-pointer rounded-full p-2" data-v-8f345751${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconHeartFilled), null, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<div class="bg-text/80 cursor-pointer rounded-full p-2" data-v-8f345751${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconHeart), null, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  }
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
                    url: vueExports.unref(T)("recipe.show", { recipe: _ctx.recipe.id })
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="mt-4 flex flex-col gap-4" data-v-8f345751${_scopeId2}><h1 class="font-vast text-vast-additional md:text-vast-title-bold font-bold" data-v-8f345751${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.recipe.title)}</h1><p class="text-subsidiary-reg md:text-mob-small-reg" data-v-8f345751${_scopeId2}>${_ctx.recipe.description ?? ""}</p><div class="flex flex-col justify-between gap-2 min-[800px]:flex-row min-[800px]:items-center min-[800px]:gap-4" data-v-8f345751${_scopeId2}><div class="bg-full text-subsidiary-reg w-fit rounded-lg px-2 py-1 text-nowrap" data-v-8f345751${_scopeId2}><div class="flex items-center gap-1" data-v-8f345751${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-8f345751${_scopeId2}>Время приготовления: ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(getFormattedTime)(_ctx.recipe.cooking_time_minutes))}</span></div></div><div class="bg-full text-subsidiary-reg w-fit rounded-lg px-2 py-1 text-nowrap" data-v-8f345751${_scopeId2}><div class="flex items-center gap-1" data-v-8f345751${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                  _push3(`<span data-v-8f345751${_scopeId2}>Активное время: ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(getFormattedTime)(_ctx.recipe.active_cooking_time_minutes))}</span></div></div><div class="flex items-center gap-1" data-v-8f345751${_scopeId2}><div class="mb-0.5" data-v-8f345751${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCookingPot), null, null, _parent3, _scopeId2));
                  _push3(`</div><p class="text-nowrap" data-v-8f345751${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.recipe.number_of_persons)} порции</p></div><div class="flex items-center gap-1" data-v-8f345751${_scopeId2}><div class="mb-0.5" data-v-8f345751${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconChefHat), null, null, _parent3, _scopeId2));
                  _push3(`</div><div class="flex items-center gap-1" data-v-8f345751${_scopeId2}><p data-v-8f345751${_scopeId2}>Сложность</p><div class="flex items-center gap-1" data-v-8f345751${_scopeId2}><!--[-->`);
                  serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(difficultyLevels), (filled, index) => {
                    _push3(`<span class="${serverRenderer_cjs_prodExports.ssrRenderClass([filled ? "bg-default" : "border-default border-2", "h-2 w-2 rounded-full"])}" data-v-8f345751${_scopeId2}></span>`);
                  });
                  _push3(`<!--]--></div></div></div></div></div></div><div class="w-full" data-v-8f345751${_scopeId2}>`);
                  if ((_b2 = (_a2 = _ctx.recipe) == null ? void 0 : _a2.images[0]) == null ? void 0 : _b2.path) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                      src: (_d2 = (_c2 = _ctx.recipe) == null ? void 0 : _c2.images[0]) == null ? void 0 : _d2.path,
                      alt: "",
                      "img-classes": "rounded-20 w-full max-h-[200px] md:max-h-[280px]",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                      src: "/images/productPlaceholder.png",
                      alt: "Изображение рецепта",
                      "img-classes": "rounded-20 w-full max-h-[200px] md:max-h-[280px]",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  }
                  _push3(`</div></article>`);
                } else {
                  return [
                    vueExports.createVNode("article", { class: "border-filling flex flex-col-reverse gap-4 rounded-3xl border p-2 lg:flex-row lg:items-center lg:gap-8 lg:rounded-[40px] lg:p-6" }, [
                      vueExports.createVNode("div", { class: "flex w-full flex-grow flex-col justify-between" }, [
                        vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                          vueExports.createVNode("div", { class: "flex flex-col gap-1" }, [
                            vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                              vueExports.createVNode(_sfc_main$3, {
                                size: "small",
                                readonly: "",
                                "default-value": _ctx.recipe.rating
                              }, null, 8, ["default-value"]),
                              vueExports.createVNode("span", { class: "text-mob-small-medium" }, vueExports.toDisplayString(_ctx.recipe.rating), 1)
                            ]),
                            vueExports.createVNode("span", { class: "text-complimentary-reg text-additional" }, "Рецепт / " + vueExports.toDisplayString(_ctx.recipe.created_at), 1)
                          ]),
                          vueExports.createVNode("div", { class: "flex items-center gap-4" }, [
                            isFavorite.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 0,
                              class: "bg-text/80 cursor-pointer rounded-full p-2",
                              onClick: vueExports.withModifiers(removeFromFavorite, ["stop"])
                            }, [
                              vueExports.createVNode(vueExports.unref(IconHeartFilled))
                            ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 1,
                              class: "bg-text/80 cursor-pointer rounded-full p-2",
                              onClick: vueExports.withModifiers(addToFavorite, ["stop"])
                            }, [
                              vueExports.createVNode(vueExports.unref(IconHeart))
                            ])),
                            vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                              url: vueExports.unref(T)("recipe.show", { recipe: _ctx.recipe.id })
                            }, null, 8, ["url"])
                          ])
                        ]),
                        vueExports.createVNode("div", { class: "mt-4 flex flex-col gap-4" }, [
                          vueExports.createVNode("h1", { class: "font-vast text-vast-additional md:text-vast-title-bold font-bold" }, vueExports.toDisplayString(_ctx.recipe.title), 1),
                          vueExports.createVNode("p", {
                            class: "text-subsidiary-reg md:text-mob-small-reg",
                            innerHTML: _ctx.recipe.description
                          }, null, 8, ["innerHTML"]),
                          vueExports.createVNode("div", { class: "flex flex-col justify-between gap-2 min-[800px]:flex-row min-[800px]:items-center min-[800px]:gap-4" }, [
                            vueExports.createVNode("div", { class: "bg-full text-subsidiary-reg w-fit rounded-lg px-2 py-1 text-nowrap" }, [
                              vueExports.createVNode("div", { class: "flex items-center gap-1" }, [
                                vueExports.createVNode(vueExports.unref(IconClockOutline), { class: "h-4 w-4" }),
                                vueExports.createVNode("span", null, "Время приготовления: " + vueExports.toDisplayString(vueExports.unref(getFormattedTime)(_ctx.recipe.cooking_time_minutes)), 1)
                              ])
                            ]),
                            vueExports.createVNode("div", { class: "bg-full text-subsidiary-reg w-fit rounded-lg px-2 py-1 text-nowrap" }, [
                              vueExports.createVNode("div", { class: "flex items-center gap-1" }, [
                                vueExports.createVNode(vueExports.unref(IconClockOutline), { class: "h-4 w-4" }),
                                vueExports.createVNode("span", null, "Активное время: " + vueExports.toDisplayString(vueExports.unref(getFormattedTime)(_ctx.recipe.active_cooking_time_minutes)), 1)
                              ])
                            ]),
                            vueExports.createVNode("div", { class: "flex items-center gap-1" }, [
                              vueExports.createVNode("div", { class: "mb-0.5" }, [
                                vueExports.createVNode(vueExports.unref(IconCookingPot))
                              ]),
                              vueExports.createVNode("p", { class: "text-nowrap" }, vueExports.toDisplayString(_ctx.recipe.number_of_persons) + " порции", 1)
                            ]),
                            vueExports.createVNode("div", { class: "flex items-center gap-1" }, [
                              vueExports.createVNode("div", { class: "mb-0.5" }, [
                                vueExports.createVNode(vueExports.unref(IconChefHat))
                              ]),
                              vueExports.createVNode("div", { class: "flex items-center gap-1" }, [
                                vueExports.createVNode("p", null, "Сложность"),
                                vueExports.createVNode("div", { class: "flex items-center gap-1" }, [
                                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(difficultyLevels), (filled, index) => {
                                    return vueExports.openBlock(), vueExports.createBlock("span", {
                                      key: index,
                                      class: ["h-2 w-2 rounded-full", filled ? "bg-default" : "border-default border-2"]
                                    }, null, 2);
                                  }), 128))
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      vueExports.createVNode("div", { class: "w-full" }, [
                        ((_f = (_e = _ctx.recipe) == null ? void 0 : _e.images[0]) == null ? void 0 : _f.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                          key: 0,
                          src: (_h = (_g = _ctx.recipe) == null ? void 0 : _g.images[0]) == null ? void 0 : _h.path,
                          alt: "",
                          "img-classes": "rounded-20 w-full max-h-[200px] md:max-h-[280px]",
                          class: "w-full"
                        }, null, 8, ["src"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                          key: 1,
                          src: "/images/productPlaceholder.png",
                          alt: "Изображение рецепта",
                          "img-classes": "rounded-20 w-full max-h-[200px] md:max-h-[280px]",
                          class: "w-full"
                        }))
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex flex-col-reverse items-start min-[820px]:flex-row" data-v-8f345751${_scopeId}><div class="max-w-full min-w-0 flex-1 overflow-hidden" data-v-8f345751${_scopeId}>`);
            if (((_a = _ctx.recipeProducts) == null ? void 0 : _a.length) > 0) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), { class: "max-sm:!pr-0" }, {
                header: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<header class="flex items-center justify-between" data-v-8f345751${_scopeId2}><h2 class="text-default-bold md:text-heavy-bold" data-v-8f345751${_scopeId2}> Продукты для рецепта <span class="text-additional text-default-bold md:text-heavy font-normal" data-v-8f345751${_scopeId2}>(${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.recipeProducts.length)})</span></h2>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, {
                      size: vueExports.unref(isMobile) ? "small" : "",
                      label: vueExports.unref(isMobile) ? "В корзину" : "Добавить все в корзину",
                      rounded: "",
                      onClick: ($event) => vueExports.unref(router).post(vueExports.unref(T)("cart.", _ctx.recipe.id), {}, { preserveScroll: true, preserveState: true, only: ["cart"] })
                    }, null, _parent3, _scopeId2));
                    _push3(`</header>`);
                  } else {
                    return [
                      vueExports.createVNode("header", { class: "flex items-center justify-between" }, [
                        vueExports.createVNode("h2", { class: "text-default-bold md:text-heavy-bold" }, [
                          vueExports.createTextVNode(" Продукты для рецепта "),
                          vueExports.createVNode("span", { class: "text-additional text-default-bold md:text-heavy font-normal" }, "(" + vueExports.toDisplayString(_ctx.recipeProducts.length) + ")", 1)
                        ]),
                        vueExports.createVNode(_sfc_main$9, {
                          size: vueExports.unref(isMobile) ? "small" : "",
                          label: vueExports.unref(isMobile) ? "В корзину" : "Добавить все в корзину",
                          rounded: "",
                          onClick: ($event) => vueExports.unref(router).post(vueExports.unref(T)("cart.", _ctx.recipe.id), {}, { preserveScroll: true, preserveState: true, only: ["cart"] })
                        }, null, 8, ["size", "label", "onClick"])
                      ])
                    ];
                  }
                }),
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
                      class: "mt-8 max-w-full",
                      slides: _ctx.recipeProducts,
                      "slider-options": {
                        allowTouchMove: true,
                        breakpoints: {
                          0: { slidesPerView: 1.4, spaceBetween: 8 },
                          640: { slidesPerView: 2, spaceBetween: 8 },
                          900: { slidesPerView: 2.5, spaceBetween: 8 },
                          1050: { slidesPerView: 3, spaceBetween: 16 },
                          1280: { slidesPerView: 4.4, spaceBetween: 32 }
                        }
                      }
                    }, {
                      slide: vueExports.withCtx(({ slide }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ProductCard), {
                            id: slide.id,
                            key: slide.id,
                            title: slide.name,
                            "has-gift": slide.is_have_gift,
                            slug: slide.slug,
                            images: slide.images.map((i) => i.path),
                            weight: slide.weight,
                            description: slide.short_description,
                            "is-favorite": slide.is_wishlist,
                            "is-new": slide.is_new,
                            "degree-type": slide.degree_type,
                            "sale-percent": slide.sale_percent,
                            categories: slide.tags.map((b) => b.name),
                            unit: slide.weight_type,
                            price: Number(slide.sale_price) ?? 0,
                            "price-unit": slide.price_type,
                            "old-price": Number(slide.price) ?? 0,
                            cashback_percent: slide.cashback_percent
                          }, {
                            favoriteButton: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$8), {
                                  id: slide.id,
                                  "initial-value": slide.is_wishlist
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                    id: slide.id,
                                    "initial-value": slide.is_wishlist
                                  }, null, 8, ["id", "initial-value"])
                                ];
                              }
                            }),
                            footer: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$7), {
                                  id: slide.id,
                                  "count-in-cart": slide.count_in_cart,
                                  quantity: slide.quantity
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$7), {
                                    id: slide.id,
                                    "count-in-cart": slide.count_in_cart,
                                    quantity: slide.quantity
                                  }, null, 8, ["id", "count-in-cart", "quantity"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ProductCard), {
                              id: slide.id,
                              key: slide.id,
                              title: slide.name,
                              "has-gift": slide.is_have_gift,
                              slug: slide.slug,
                              images: slide.images.map((i) => i.path),
                              weight: slide.weight,
                              description: slide.short_description,
                              "is-favorite": slide.is_wishlist,
                              "is-new": slide.is_new,
                              "degree-type": slide.degree_type,
                              "sale-percent": slide.sale_percent,
                              categories: slide.tags.map((b) => b.name),
                              unit: slide.weight_type,
                              price: Number(slide.sale_price) ?? 0,
                              "price-unit": slide.price_type,
                              "old-price": Number(slide.price) ?? 0,
                              cashback_percent: slide.cashback_percent
                            }, {
                              favoriteButton: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                  id: slide.id,
                                  "initial-value": slide.is_wishlist
                                }, null, 8, ["id", "initial-value"])
                              ]),
                              footer: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$7), {
                                  id: slide.id,
                                  "count-in-cart": slide.count_in_cart,
                                  quantity: slide.quantity
                                }, null, 8, ["id", "count-in-cart", "quantity"])
                              ]),
                              _: 2
                            }, 1032, ["id", "title", "has-gift", "slug", "images", "weight", "description", "is-favorite", "is-new", "degree-type", "sale-percent", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                        class: "mt-8 max-w-full",
                        slides: _ctx.recipeProducts,
                        "slider-options": {
                          allowTouchMove: true,
                          breakpoints: {
                            0: { slidesPerView: 1.4, spaceBetween: 8 },
                            640: { slidesPerView: 2, spaceBetween: 8 },
                            900: { slidesPerView: 2.5, spaceBetween: 8 },
                            1050: { slidesPerView: 3, spaceBetween: 16 },
                            1280: { slidesPerView: 4.4, spaceBetween: 32 }
                          }
                        }
                      }, {
                        slide: vueExports.withCtx(({ slide }) => [
                          (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ProductCard), {
                            id: slide.id,
                            key: slide.id,
                            title: slide.name,
                            "has-gift": slide.is_have_gift,
                            slug: slide.slug,
                            images: slide.images.map((i) => i.path),
                            weight: slide.weight,
                            description: slide.short_description,
                            "is-favorite": slide.is_wishlist,
                            "is-new": slide.is_new,
                            "degree-type": slide.degree_type,
                            "sale-percent": slide.sale_percent,
                            categories: slide.tags.map((b) => b.name),
                            unit: slide.weight_type,
                            price: Number(slide.sale_price) ?? 0,
                            "price-unit": slide.price_type,
                            "old-price": Number(slide.price) ?? 0,
                            cashback_percent: slide.cashback_percent
                          }, {
                            favoriteButton: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                id: slide.id,
                                "initial-value": slide.is_wishlist
                              }, null, 8, ["id", "initial-value"])
                            ]),
                            footer: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$7), {
                                id: slide.id,
                                "count-in-cart": slide.count_in_cart,
                                quantity: slide.quantity
                              }, null, 8, ["id", "count-in-cart", "quantity"])
                            ]),
                            _: 2
                          }, 1032, ["id", "title", "has-gift", "slug", "images", "weight", "description", "is-favorite", "is-new", "degree-type", "sale-percent", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
                        ]),
                        _: 1
                      }, 8, ["slides"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (((_b = _ctx.recipe.steps) == null ? void 0 : _b.length) > 0) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), null, {
                header: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(`<header class="flex items-center justify-between" data-v-8f345751${_scopeId2}><h2 class="text-default-bold md:text-heavy-bold" data-v-8f345751${_scopeId2}>Приготовление</h2>`);
                    if (((_a2 = _ctx.recipe.videos) == null ? void 0 : _a2.length) > 0) {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, {
                        label: "Смотреть видео рецепт",
                        size: vueExports.unref(isMobile) ? "small" : "",
                        rounded: "",
                        variant: "outlined"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</header>`);
                  } else {
                    return [
                      vueExports.createVNode("header", { class: "flex items-center justify-between" }, [
                        vueExports.createVNode("h2", { class: "text-default-bold md:text-heavy-bold" }, "Приготовление"),
                        ((_b2 = _ctx.recipe.videos) == null ? void 0 : _b2.length) > 0 ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$9, {
                          key: 0,
                          label: "Смотреть видео рецепт",
                          size: vueExports.unref(isMobile) ? "small" : "",
                          rounded: "",
                          variant: "outlined"
                        }, null, 8, ["size"])) : vueExports.createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="mt-8" data-v-8f345751${_scopeId2}><!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(_ctx.recipe.steps, (step) => {
                      _push3(`<div class="border-b-filling flex flex-col items-start justify-between gap-8 border-b py-4 sm:flex-row" data-v-8f345751${_scopeId2}><div class="basis-1/2" data-v-8f345751${_scopeId2}><span class="bg-filling text-default-medium rounded-lg px-2 py-0.5" data-v-8f345751${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(step.title)}</span><p class="text-mob-small-reg mt-4" data-v-8f345751${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(step.description)}</p></div>`);
                      if (step == null ? void 0 : step.images) {
                        _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                          src: step == null ? void 0 : step.images,
                          height: vueExports.unref(isMobile) ? "200px" : "260px",
                          class: "w-full sm:basis-1/2",
                          "img-classes": "rounded-20 w-full",
                          alt: "изображение шага рецепта"
                        }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      vueExports.createVNode("div", { class: "mt-8" }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.recipe.steps, (step) => {
                          return vueExports.openBlock(), vueExports.createBlock("div", {
                            key: step.id,
                            class: "border-b-filling flex flex-col items-start justify-between gap-8 border-b py-4 sm:flex-row"
                          }, [
                            vueExports.createVNode("div", { class: "basis-1/2" }, [
                              vueExports.createVNode("span", { class: "bg-filling text-default-medium rounded-lg px-2 py-0.5" }, vueExports.toDisplayString(step.title), 1),
                              vueExports.createVNode("p", { class: "text-mob-small-reg mt-4" }, vueExports.toDisplayString(step.description), 1)
                            ]),
                            (step == null ? void 0 : step.images) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                              key: 0,
                              src: step == null ? void 0 : step.images,
                              height: vueExports.unref(isMobile) ? "200px" : "260px",
                              class: "w-full sm:basis-1/2",
                              "img-classes": "rounded-20 w-full",
                              alt: "изображение шага рецепта"
                            }, null, 8, ["src", "height"])) : vueExports.createCommentVNode("", true)
                          ]);
                        }), 128))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              class: ["md:mt-2", { "!pb-35": !!_ctx.auth.user }]
            }, {
              header: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<header class="flex flex-col justify-between gap-4 min-[920px]:flex-row min-[920px]:items-center" data-v-8f345751${_scopeId2}><div class="flex items-center gap-4" data-v-8f345751${_scopeId2}><h2 class="text-default-bold md:text-heavy-bold" data-v-8f345751${_scopeId2}>Оцените рецепт</h2>`);
                  if (!!_ctx.auth.user) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                      modelValue: initialRating.value,
                      "onUpdate:modelValue": ($event) => initialRating.value = $event,
                      size: "large",
                      onChange: ($event) => isAddModalOpen.value = true
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                      readonly: "",
                      size: "large"
                    }, null, _parent3, _scopeId2));
                  }
                  _push3(`</div><div class="flex items-center gap-4" data-v-8f345751${_scopeId2}><div class="flex cursor-pointer items-center gap-2" data-v-8f345751${_scopeId2}><span class="text-complimentary-reg" data-v-8f345751${_scopeId2}>Поделиться</span>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
                    ref: "shareComponent",
                    url: vueExports.unref(T)("recipe.show", { recipe: _ctx.recipe.id })
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div data-v-8f345751${_scopeId2}>`);
                  if (isFavorite.value) {
                    _push3(`<div class="flex cursor-pointer items-center gap-2" data-v-8f345751${_scopeId2}><span class="text-complimentary-reg" data-v-8f345751${_scopeId2}> Добавить в избранное</span><div class="bg-text/80 rounded-full p-2" data-v-8f345751${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconHeartFilled), null, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<div class="flex cursor-pointer items-center gap-2" data-v-8f345751${_scopeId2}><span class="text-complimentary-reg" data-v-8f345751${_scopeId2}> Добавить в избранное</span><div class="bg-text/80 rounded-full p-2" data-v-8f345751${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconHeart), null, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  }
                  _push3(`</div></div></header>`);
                } else {
                  return [
                    vueExports.createVNode("header", { class: "flex flex-col justify-between gap-4 min-[920px]:flex-row min-[920px]:items-center" }, [
                      vueExports.createVNode("div", { class: "flex items-center gap-4" }, [
                        vueExports.createVNode("h2", { class: "text-default-bold md:text-heavy-bold" }, "Оцените рецепт"),
                        !!_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$3, {
                          key: 0,
                          modelValue: initialRating.value,
                          "onUpdate:modelValue": ($event) => initialRating.value = $event,
                          size: "large",
                          onChange: ($event) => isAddModalOpen.value = true
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$3, {
                          key: 1,
                          readonly: "",
                          size: "large"
                        }))
                      ]),
                      vueExports.createVNode("div", { class: "flex items-center gap-4" }, [
                        vueExports.createVNode("div", { class: "flex cursor-pointer items-center gap-2" }, [
                          vueExports.createVNode("span", {
                            class: "text-complimentary-reg",
                            onClick: clickOnShareText
                          }, "Поделиться"),
                          vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                            ref: "shareComponent",
                            url: vueExports.unref(T)("recipe.show", { recipe: _ctx.recipe.id })
                          }, null, 8, ["url"])
                        ]),
                        vueExports.createVNode("div", null, [
                          isFavorite.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "flex cursor-pointer items-center gap-2",
                            onClick: vueExports.withModifiers(removeFromFavorite, ["stop"])
                          }, [
                            vueExports.createVNode("span", { class: "text-complimentary-reg" }, " Добавить в избранное"),
                            vueExports.createVNode("div", { class: "bg-text/80 rounded-full p-2" }, [
                              vueExports.createVNode(vueExports.unref(IconHeartFilled))
                            ])
                          ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 1,
                            class: "flex cursor-pointer items-center gap-2",
                            onClick: vueExports.withModifiers(addToFavorite, ["stop"])
                          }, [
                            vueExports.createVNode("span", { class: "text-complimentary-reg" }, " Добавить в избранное"),
                            vueExports.createVNode("div", { class: "bg-text/80 rounded-full p-2" }, [
                              vueExports.createVNode(vueExports.unref(IconHeart))
                            ])
                          ]))
                        ])
                      ])
                    ])
                  ];
                }
              }),
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!_ctx.auth.user) {
                    _push3(`<div class="bg-light-gray rounded-20 mt-4 flex items-center justify-between p-4 md:mt-6" data-v-8f345751${_scopeId2}><p class="text-mob-small-bold md:text-default-medium" data-v-8f345751${_scopeId2}>Авторизуйтесь чтобы оставить отзыв</p>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                      type: "button",
                      label: "Войти",
                      onClick: ($event) => vueExports.unref(router).get(vueExports.unref(T)("api.v1.auth-check"), {}, { preserveScroll: true })
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<!--[-->`);
                  serverRenderer_cjs_prodExports.ssrRenderList(_ctx.reviews, (review) => {
                    _push3(`<div class="mt-4" data-v-8f345751${_scopeId2}><article class="border-b-stroke flex flex-col gap-3 border-b pb-2 md:pb-3" data-v-8f345751${_scopeId2}><div class="flex items-center justify-between gap-3" data-v-8f345751${_scopeId2}><div class="flex items-center gap-2" data-v-8f345751${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$a, {
                      shape: "circle",
                      label: review.userName ? vueExports.unref(personInitials)(review.userName) : "П"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="flex flex-col gap-0.5" data-v-8f345751${_scopeId2}><span class="text-subsidiary-medium text-text" data-v-8f345751${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.userName)}</span><span class="text-complimentary-bold text-additional" data-v-8f345751${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.created_at)}</span></div></div><div class="text-additional flex items-center gap-2" data-v-8f345751${_scopeId2}>`);
                    if (review.likes_count) {
                      _push3(`<p class="text-additional text-complimentary-reg" data-v-8f345751${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.likes_count)} полезно</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconThumbsUp), {
                      class: ["cursor-pointer", { "text-text": review.liked_by_user }],
                      onClick: ($event) => vueExports.unref(reactToReview)(review.id, "like")
                    }, null, _parent3, _scopeId2));
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconThumbsDown), {
                      class: ["cursor-pointer", { "text-text": review.disliked_by_user }],
                      onClick: ($event) => vueExports.unref(reactToReview)(review.id, "dislike")
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="flex items-center gap-2" data-v-8f345751${_scopeId2}><div class="text-subsidiary-medium flex h-[22px] items-center gap-2 font-semibold max-md:flex-row-reverse md:text-base/[22px]" data-v-8f345751${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                      "default-value": review.rating,
                      readonly: ""
                    }, null, _parent3, _scopeId2));
                    _push3(` ${serverRenderer_cjs_prodExports.ssrInterpolate(review.rating)}</div><h3 class="text-complimentary-bold text-[#AC9B58]" data-v-8f345751${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.product)}</h3></div><p class="text-subsidiary-reg md:text-mob-small-reg" data-v-8f345751${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.text)}</p>`);
                    if (review.images.length) {
                      _push3(`<div class="flex items-center gap-2" data-v-8f345751${_scopeId2}><!--[-->`);
                      serverRenderer_cjs_prodExports.ssrRenderList(review.images, (image) => {
                        _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                          key: image.id,
                          src: image.path,
                          alt: "Изображение товара",
                          width: vueExports.unref(isMobile) ? "54px" : "90px",
                          height: vueExports.unref(isMobile) ? "60px" : "100px",
                          class: "bg-filling shrink-0 rounded-lg sm:rounded-2xl",
                          "img-classes": "rounded-lg sm:rounded-2xl bg-filling"
                        }, null, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (review.answer) {
                      _push3(`<div class="bg-input text-subsidiary-reg md:text-mob-small-reg mt-2 rounded-lg p-3" data-v-8f345751${_scopeId2}><p class="text-additional" data-v-8f345751${_scopeId2}>Ответ магазина</p><p class="mt-1" data-v-8f345751${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.answer)}</p></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</article></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    !_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      class: "bg-light-gray rounded-20 mt-4 flex items-center justify-between p-4 md:mt-6"
                    }, [
                      vueExports.createVNode("p", { class: "text-mob-small-bold md:text-default-medium" }, "Авторизуйтесь чтобы оставить отзыв"),
                      vueExports.createVNode(vueExports.unref(VButton), {
                        type: "button",
                        label: "Войти",
                        onClick: ($event) => vueExports.unref(router).get(vueExports.unref(T)("api.v1.auth-check"), {}, { preserveScroll: true })
                      }, null, 8, ["onClick"])
                    ])) : vueExports.createCommentVNode("", true),
                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.reviews, (review) => {
                      return vueExports.openBlock(), vueExports.createBlock("div", {
                        key: review.id,
                        class: "mt-4"
                      }, [
                        vueExports.createVNode("article", { class: "border-b-stroke flex flex-col gap-3 border-b pb-2 md:pb-3" }, [
                          vueExports.createVNode("div", { class: "flex items-center justify-between gap-3" }, [
                            vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                              vueExports.createVNode(_sfc_main$a, {
                                shape: "circle",
                                label: review.userName ? vueExports.unref(personInitials)(review.userName) : "П"
                              }, null, 8, ["label"]),
                              vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                                vueExports.createVNode("span", { class: "text-subsidiary-medium text-text" }, vueExports.toDisplayString(review.userName), 1),
                                vueExports.createVNode("span", { class: "text-complimentary-bold text-additional" }, vueExports.toDisplayString(review.created_at), 1)
                              ])
                            ]),
                            vueExports.createVNode("div", { class: "text-additional flex items-center gap-2" }, [
                              review.likes_count ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                key: 0,
                                class: "text-additional text-complimentary-reg"
                              }, vueExports.toDisplayString(review.likes_count) + " полезно", 1)) : vueExports.createCommentVNode("", true),
                              vueExports.createVNode(vueExports.unref(IconThumbsUp), {
                                class: ["cursor-pointer", { "text-text": review.liked_by_user }],
                                onClick: ($event) => vueExports.unref(reactToReview)(review.id, "like")
                              }, null, 8, ["class", "onClick"]),
                              vueExports.createVNode(vueExports.unref(IconThumbsDown), {
                                class: ["cursor-pointer", { "text-text": review.disliked_by_user }],
                                onClick: ($event) => vueExports.unref(reactToReview)(review.id, "dislike")
                              }, null, 8, ["class", "onClick"])
                            ])
                          ]),
                          vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                            vueExports.createVNode("div", { class: "text-subsidiary-medium flex h-[22px] items-center gap-2 font-semibold max-md:flex-row-reverse md:text-base/[22px]" }, [
                              vueExports.createVNode(_sfc_main$3, {
                                "default-value": review.rating,
                                readonly: ""
                              }, null, 8, ["default-value"]),
                              vueExports.createTextVNode(" " + vueExports.toDisplayString(review.rating), 1)
                            ]),
                            vueExports.createVNode("h3", { class: "text-complimentary-bold text-[#AC9B58]" }, vueExports.toDisplayString(review.product), 1)
                          ]),
                          vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(review.text), 1),
                          review.images.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "flex items-center gap-2"
                          }, [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(review.images, (image) => {
                              return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                                key: image.id,
                                src: image.path,
                                alt: "Изображение товара",
                                width: vueExports.unref(isMobile) ? "54px" : "90px",
                                height: vueExports.unref(isMobile) ? "60px" : "100px",
                                class: "bg-filling shrink-0 rounded-lg sm:rounded-2xl",
                                "img-classes": "rounded-lg sm:rounded-2xl bg-filling"
                              }, null, 8, ["src", "width", "height"]);
                            }), 128))
                          ])) : vueExports.createCommentVNode("", true),
                          review.answer ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 1,
                            class: "bg-input text-subsidiary-reg md:text-mob-small-reg mt-2 rounded-lg p-3"
                          }, [
                            vueExports.createVNode("p", { class: "text-additional" }, "Ответ магазина"),
                            vueExports.createVNode("p", { class: "mt-1" }, vueExports.toDisplayString(review.answer), 1)
                          ])) : vueExports.createCommentVNode("", true)
                        ])
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><aside class="w-full shrink-0 max-[820px]:px-6 min-[820px]:max-w-[320px] min-[820px]:pr-8 md:mt-8" data-v-8f345751${_scopeId}><div class="rounded-20 w-full bg-gray-50 p-4" data-v-8f345751${_scopeId}>`);
            if (_ctx.recipe.ingredients_for_dish_json.length > 0) {
              _push2(`<!--[--><h2 class="text-default-medium" data-v-8f345751${_scopeId}>Ингредиенты для блюда</h2><dl class="mt-6" data-v-8f345751${_scopeId}><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(_ctx.recipe.ingredients_for_dish_json, (item, index) => {
                _push2(`<div class="custom-dashed-border flex justify-between py-2" data-v-8f345751${_scopeId}><dt class="text-mob-small-reg" data-v-8f345751${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.title)}</dt><dd class="text-mob-small-bold" data-v-8f345751${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.count)}</dd></div>`);
              });
              _push2(`<!--]--></dl><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.recipe.ingredients_for_sauce_json.length > 0) {
              _push2(`<div class="mt-6" data-v-8f345751${_scopeId}><h2 class="text-default-medium" data-v-8f345751${_scopeId}>Ингредиенты для соуса</h2><dl class="mt-6" data-v-8f345751${_scopeId}><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(_ctx.recipe.ingredients_for_sauce_json, (item, index) => {
                _push2(`<div class="custom-dashed-border flex justify-between py-2" data-v-8f345751${_scopeId}><dt class="text-mob-small-reg" data-v-8f345751${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.title)}</dt><dd class="text-mob-small-bold" data-v-8f345751${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.count)}</dd></div>`);
              });
              _push2(`<!--]--></dl></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></aside></div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$b), {
              visible: isAddModalOpen.value,
              "onUpdate:visible": ($event) => isAddModalOpen.value = $event,
              "number-of-stars": initialRating.value,
              "onUpdate:numberOfStars": ($event) => initialRating.value = $event,
              item: { id: _ctx.recipe.id, type: "Recipe" }
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(_sfc_main$2), { class: "max-sm:!py-4" }, {
                default: vueExports.withCtx(() => {
                  var _a2, _b2, _c2, _d2;
                  return [
                    vueExports.createVNode("article", { class: "border-filling flex flex-col-reverse gap-4 rounded-3xl border p-2 lg:flex-row lg:items-center lg:gap-8 lg:rounded-[40px] lg:p-6" }, [
                      vueExports.createVNode("div", { class: "flex w-full flex-grow flex-col justify-between" }, [
                        vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                          vueExports.createVNode("div", { class: "flex flex-col gap-1" }, [
                            vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                              vueExports.createVNode(_sfc_main$3, {
                                size: "small",
                                readonly: "",
                                "default-value": _ctx.recipe.rating
                              }, null, 8, ["default-value"]),
                              vueExports.createVNode("span", { class: "text-mob-small-medium" }, vueExports.toDisplayString(_ctx.recipe.rating), 1)
                            ]),
                            vueExports.createVNode("span", { class: "text-complimentary-reg text-additional" }, "Рецепт / " + vueExports.toDisplayString(_ctx.recipe.created_at), 1)
                          ]),
                          vueExports.createVNode("div", { class: "flex items-center gap-4" }, [
                            isFavorite.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 0,
                              class: "bg-text/80 cursor-pointer rounded-full p-2",
                              onClick: vueExports.withModifiers(removeFromFavorite, ["stop"])
                            }, [
                              vueExports.createVNode(vueExports.unref(IconHeartFilled))
                            ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 1,
                              class: "bg-text/80 cursor-pointer rounded-full p-2",
                              onClick: vueExports.withModifiers(addToFavorite, ["stop"])
                            }, [
                              vueExports.createVNode(vueExports.unref(IconHeart))
                            ])),
                            vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                              url: vueExports.unref(T)("recipe.show", { recipe: _ctx.recipe.id })
                            }, null, 8, ["url"])
                          ])
                        ]),
                        vueExports.createVNode("div", { class: "mt-4 flex flex-col gap-4" }, [
                          vueExports.createVNode("h1", { class: "font-vast text-vast-additional md:text-vast-title-bold font-bold" }, vueExports.toDisplayString(_ctx.recipe.title), 1),
                          vueExports.createVNode("p", {
                            class: "text-subsidiary-reg md:text-mob-small-reg",
                            innerHTML: _ctx.recipe.description
                          }, null, 8, ["innerHTML"]),
                          vueExports.createVNode("div", { class: "flex flex-col justify-between gap-2 min-[800px]:flex-row min-[800px]:items-center min-[800px]:gap-4" }, [
                            vueExports.createVNode("div", { class: "bg-full text-subsidiary-reg w-fit rounded-lg px-2 py-1 text-nowrap" }, [
                              vueExports.createVNode("div", { class: "flex items-center gap-1" }, [
                                vueExports.createVNode(vueExports.unref(IconClockOutline), { class: "h-4 w-4" }),
                                vueExports.createVNode("span", null, "Время приготовления: " + vueExports.toDisplayString(vueExports.unref(getFormattedTime)(_ctx.recipe.cooking_time_minutes)), 1)
                              ])
                            ]),
                            vueExports.createVNode("div", { class: "bg-full text-subsidiary-reg w-fit rounded-lg px-2 py-1 text-nowrap" }, [
                              vueExports.createVNode("div", { class: "flex items-center gap-1" }, [
                                vueExports.createVNode(vueExports.unref(IconClockOutline), { class: "h-4 w-4" }),
                                vueExports.createVNode("span", null, "Активное время: " + vueExports.toDisplayString(vueExports.unref(getFormattedTime)(_ctx.recipe.active_cooking_time_minutes)), 1)
                              ])
                            ]),
                            vueExports.createVNode("div", { class: "flex items-center gap-1" }, [
                              vueExports.createVNode("div", { class: "mb-0.5" }, [
                                vueExports.createVNode(vueExports.unref(IconCookingPot))
                              ]),
                              vueExports.createVNode("p", { class: "text-nowrap" }, vueExports.toDisplayString(_ctx.recipe.number_of_persons) + " порции", 1)
                            ]),
                            vueExports.createVNode("div", { class: "flex items-center gap-1" }, [
                              vueExports.createVNode("div", { class: "mb-0.5" }, [
                                vueExports.createVNode(vueExports.unref(IconChefHat))
                              ]),
                              vueExports.createVNode("div", { class: "flex items-center gap-1" }, [
                                vueExports.createVNode("p", null, "Сложность"),
                                vueExports.createVNode("div", { class: "flex items-center gap-1" }, [
                                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(difficultyLevels), (filled, index) => {
                                    return vueExports.openBlock(), vueExports.createBlock("span", {
                                      key: index,
                                      class: ["h-2 w-2 rounded-full", filled ? "bg-default" : "border-default border-2"]
                                    }, null, 2);
                                  }), 128))
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      vueExports.createVNode("div", { class: "w-full" }, [
                        ((_b2 = (_a2 = _ctx.recipe) == null ? void 0 : _a2.images[0]) == null ? void 0 : _b2.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                          key: 0,
                          src: (_d2 = (_c2 = _ctx.recipe) == null ? void 0 : _c2.images[0]) == null ? void 0 : _d2.path,
                          alt: "",
                          "img-classes": "rounded-20 w-full max-h-[200px] md:max-h-[280px]",
                          class: "w-full"
                        }, null, 8, ["src"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                          key: 1,
                          src: "/images/productPlaceholder.png",
                          alt: "Изображение рецепта",
                          "img-classes": "rounded-20 w-full max-h-[200px] md:max-h-[280px]",
                          class: "w-full"
                        }))
                      ])
                    ])
                  ];
                }),
                _: 1
              }),
              vueExports.createVNode("div", { class: "flex flex-col-reverse items-start min-[820px]:flex-row" }, [
                vueExports.createVNode("div", { class: "max-w-full min-w-0 flex-1 overflow-hidden" }, [
                  ((_c = _ctx.recipeProducts) == null ? void 0 : _c.length) > 0 ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$2), {
                    key: 0,
                    class: "max-sm:!pr-0"
                  }, {
                    header: vueExports.withCtx(() => [
                      vueExports.createVNode("header", { class: "flex items-center justify-between" }, [
                        vueExports.createVNode("h2", { class: "text-default-bold md:text-heavy-bold" }, [
                          vueExports.createTextVNode(" Продукты для рецепта "),
                          vueExports.createVNode("span", { class: "text-additional text-default-bold md:text-heavy font-normal" }, "(" + vueExports.toDisplayString(_ctx.recipeProducts.length) + ")", 1)
                        ]),
                        vueExports.createVNode(_sfc_main$9, {
                          size: vueExports.unref(isMobile) ? "small" : "",
                          label: vueExports.unref(isMobile) ? "В корзину" : "Добавить все в корзину",
                          rounded: "",
                          onClick: ($event) => vueExports.unref(router).post(vueExports.unref(T)("cart.", _ctx.recipe.id), {}, { preserveScroll: true, preserveState: true, only: ["cart"] })
                        }, null, 8, ["size", "label", "onClick"])
                      ])
                    ]),
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                        class: "mt-8 max-w-full",
                        slides: _ctx.recipeProducts,
                        "slider-options": {
                          allowTouchMove: true,
                          breakpoints: {
                            0: { slidesPerView: 1.4, spaceBetween: 8 },
                            640: { slidesPerView: 2, spaceBetween: 8 },
                            900: { slidesPerView: 2.5, spaceBetween: 8 },
                            1050: { slidesPerView: 3, spaceBetween: 16 },
                            1280: { slidesPerView: 4.4, spaceBetween: 32 }
                          }
                        }
                      }, {
                        slide: vueExports.withCtx(({ slide }) => [
                          (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ProductCard), {
                            id: slide.id,
                            key: slide.id,
                            title: slide.name,
                            "has-gift": slide.is_have_gift,
                            slug: slide.slug,
                            images: slide.images.map((i) => i.path),
                            weight: slide.weight,
                            description: slide.short_description,
                            "is-favorite": slide.is_wishlist,
                            "is-new": slide.is_new,
                            "degree-type": slide.degree_type,
                            "sale-percent": slide.sale_percent,
                            categories: slide.tags.map((b) => b.name),
                            unit: slide.weight_type,
                            price: Number(slide.sale_price) ?? 0,
                            "price-unit": slide.price_type,
                            "old-price": Number(slide.price) ?? 0,
                            cashback_percent: slide.cashback_percent
                          }, {
                            favoriteButton: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                id: slide.id,
                                "initial-value": slide.is_wishlist
                              }, null, 8, ["id", "initial-value"])
                            ]),
                            footer: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$7), {
                                id: slide.id,
                                "count-in-cart": slide.count_in_cart,
                                quantity: slide.quantity
                              }, null, 8, ["id", "count-in-cart", "quantity"])
                            ]),
                            _: 2
                          }, 1032, ["id", "title", "has-gift", "slug", "images", "weight", "description", "is-favorite", "is-new", "degree-type", "sale-percent", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
                        ]),
                        _: 1
                      }, 8, ["slides"])
                    ]),
                    _: 1
                  })) : vueExports.createCommentVNode("", true),
                  ((_d = _ctx.recipe.steps) == null ? void 0 : _d.length) > 0 ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$2), { key: 1 }, {
                    header: vueExports.withCtx(() => {
                      var _a2;
                      return [
                        vueExports.createVNode("header", { class: "flex items-center justify-between" }, [
                          vueExports.createVNode("h2", { class: "text-default-bold md:text-heavy-bold" }, "Приготовление"),
                          ((_a2 = _ctx.recipe.videos) == null ? void 0 : _a2.length) > 0 ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$9, {
                            key: 0,
                            label: "Смотреть видео рецепт",
                            size: vueExports.unref(isMobile) ? "small" : "",
                            rounded: "",
                            variant: "outlined"
                          }, null, 8, ["size"])) : vueExports.createCommentVNode("", true)
                        ])
                      ];
                    }),
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "mt-8" }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.recipe.steps, (step) => {
                          return vueExports.openBlock(), vueExports.createBlock("div", {
                            key: step.id,
                            class: "border-b-filling flex flex-col items-start justify-between gap-8 border-b py-4 sm:flex-row"
                          }, [
                            vueExports.createVNode("div", { class: "basis-1/2" }, [
                              vueExports.createVNode("span", { class: "bg-filling text-default-medium rounded-lg px-2 py-0.5" }, vueExports.toDisplayString(step.title), 1),
                              vueExports.createVNode("p", { class: "text-mob-small-reg mt-4" }, vueExports.toDisplayString(step.description), 1)
                            ]),
                            (step == null ? void 0 : step.images) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                              key: 0,
                              src: step == null ? void 0 : step.images,
                              height: vueExports.unref(isMobile) ? "200px" : "260px",
                              class: "w-full sm:basis-1/2",
                              "img-classes": "rounded-20 w-full",
                              alt: "изображение шага рецепта"
                            }, null, 8, ["src", "height"])) : vueExports.createCommentVNode("", true)
                          ]);
                        }), 128))
                      ])
                    ]),
                    _: 1
                  })) : vueExports.createCommentVNode("", true),
                  vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                    class: ["md:mt-2", { "!pb-35": !!_ctx.auth.user }]
                  }, {
                    header: vueExports.withCtx(() => [
                      vueExports.createVNode("header", { class: "flex flex-col justify-between gap-4 min-[920px]:flex-row min-[920px]:items-center" }, [
                        vueExports.createVNode("div", { class: "flex items-center gap-4" }, [
                          vueExports.createVNode("h2", { class: "text-default-bold md:text-heavy-bold" }, "Оцените рецепт"),
                          !!_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$3, {
                            key: 0,
                            modelValue: initialRating.value,
                            "onUpdate:modelValue": ($event) => initialRating.value = $event,
                            size: "large",
                            onChange: ($event) => isAddModalOpen.value = true
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$3, {
                            key: 1,
                            readonly: "",
                            size: "large"
                          }))
                        ]),
                        vueExports.createVNode("div", { class: "flex items-center gap-4" }, [
                          vueExports.createVNode("div", { class: "flex cursor-pointer items-center gap-2" }, [
                            vueExports.createVNode("span", {
                              class: "text-complimentary-reg",
                              onClick: clickOnShareText
                            }, "Поделиться"),
                            vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                              ref: "shareComponent",
                              url: vueExports.unref(T)("recipe.show", { recipe: _ctx.recipe.id })
                            }, null, 8, ["url"])
                          ]),
                          vueExports.createVNode("div", null, [
                            isFavorite.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 0,
                              class: "flex cursor-pointer items-center gap-2",
                              onClick: vueExports.withModifiers(removeFromFavorite, ["stop"])
                            }, [
                              vueExports.createVNode("span", { class: "text-complimentary-reg" }, " Добавить в избранное"),
                              vueExports.createVNode("div", { class: "bg-text/80 rounded-full p-2" }, [
                                vueExports.createVNode(vueExports.unref(IconHeartFilled))
                              ])
                            ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 1,
                              class: "flex cursor-pointer items-center gap-2",
                              onClick: vueExports.withModifiers(addToFavorite, ["stop"])
                            }, [
                              vueExports.createVNode("span", { class: "text-complimentary-reg" }, " Добавить в избранное"),
                              vueExports.createVNode("div", { class: "bg-text/80 rounded-full p-2" }, [
                                vueExports.createVNode(vueExports.unref(IconHeart))
                              ])
                            ]))
                          ])
                        ])
                      ])
                    ]),
                    default: vueExports.withCtx(() => [
                      !_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        class: "bg-light-gray rounded-20 mt-4 flex items-center justify-between p-4 md:mt-6"
                      }, [
                        vueExports.createVNode("p", { class: "text-mob-small-bold md:text-default-medium" }, "Авторизуйтесь чтобы оставить отзыв"),
                        vueExports.createVNode(vueExports.unref(VButton), {
                          type: "button",
                          label: "Войти",
                          onClick: ($event) => vueExports.unref(router).get(vueExports.unref(T)("api.v1.auth-check"), {}, { preserveScroll: true })
                        }, null, 8, ["onClick"])
                      ])) : vueExports.createCommentVNode("", true),
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.reviews, (review) => {
                        return vueExports.openBlock(), vueExports.createBlock("div", {
                          key: review.id,
                          class: "mt-4"
                        }, [
                          vueExports.createVNode("article", { class: "border-b-stroke flex flex-col gap-3 border-b pb-2 md:pb-3" }, [
                            vueExports.createVNode("div", { class: "flex items-center justify-between gap-3" }, [
                              vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                                vueExports.createVNode(_sfc_main$a, {
                                  shape: "circle",
                                  label: review.userName ? vueExports.unref(personInitials)(review.userName) : "П"
                                }, null, 8, ["label"]),
                                vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                                  vueExports.createVNode("span", { class: "text-subsidiary-medium text-text" }, vueExports.toDisplayString(review.userName), 1),
                                  vueExports.createVNode("span", { class: "text-complimentary-bold text-additional" }, vueExports.toDisplayString(review.created_at), 1)
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "text-additional flex items-center gap-2" }, [
                                review.likes_count ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                  key: 0,
                                  class: "text-additional text-complimentary-reg"
                                }, vueExports.toDisplayString(review.likes_count) + " полезно", 1)) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode(vueExports.unref(IconThumbsUp), {
                                  class: ["cursor-pointer", { "text-text": review.liked_by_user }],
                                  onClick: ($event) => vueExports.unref(reactToReview)(review.id, "like")
                                }, null, 8, ["class", "onClick"]),
                                vueExports.createVNode(vueExports.unref(IconThumbsDown), {
                                  class: ["cursor-pointer", { "text-text": review.disliked_by_user }],
                                  onClick: ($event) => vueExports.unref(reactToReview)(review.id, "dislike")
                                }, null, 8, ["class", "onClick"])
                              ])
                            ]),
                            vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                              vueExports.createVNode("div", { class: "text-subsidiary-medium flex h-[22px] items-center gap-2 font-semibold max-md:flex-row-reverse md:text-base/[22px]" }, [
                                vueExports.createVNode(_sfc_main$3, {
                                  "default-value": review.rating,
                                  readonly: ""
                                }, null, 8, ["default-value"]),
                                vueExports.createTextVNode(" " + vueExports.toDisplayString(review.rating), 1)
                              ]),
                              vueExports.createVNode("h3", { class: "text-complimentary-bold text-[#AC9B58]" }, vueExports.toDisplayString(review.product), 1)
                            ]),
                            vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(review.text), 1),
                            review.images.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 0,
                              class: "flex items-center gap-2"
                            }, [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(review.images, (image) => {
                                return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                                  key: image.id,
                                  src: image.path,
                                  alt: "Изображение товара",
                                  width: vueExports.unref(isMobile) ? "54px" : "90px",
                                  height: vueExports.unref(isMobile) ? "60px" : "100px",
                                  class: "bg-filling shrink-0 rounded-lg sm:rounded-2xl",
                                  "img-classes": "rounded-lg sm:rounded-2xl bg-filling"
                                }, null, 8, ["src", "width", "height"]);
                              }), 128))
                            ])) : vueExports.createCommentVNode("", true),
                            review.answer ? (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 1,
                              class: "bg-input text-subsidiary-reg md:text-mob-small-reg mt-2 rounded-lg p-3"
                            }, [
                              vueExports.createVNode("p", { class: "text-additional" }, "Ответ магазина"),
                              vueExports.createVNode("p", { class: "mt-1" }, vueExports.toDisplayString(review.answer), 1)
                            ])) : vueExports.createCommentVNode("", true)
                          ])
                        ]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["class"])
                ]),
                vueExports.createVNode("aside", { class: "w-full shrink-0 max-[820px]:px-6 min-[820px]:max-w-[320px] min-[820px]:pr-8 md:mt-8" }, [
                  vueExports.createVNode("div", { class: "rounded-20 w-full bg-gray-50 p-4" }, [
                    _ctx.recipe.ingredients_for_dish_json.length > 0 ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                      vueExports.createVNode("h2", { class: "text-default-medium" }, "Ингредиенты для блюда"),
                      vueExports.createVNode("dl", { class: "mt-6" }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.recipe.ingredients_for_dish_json, (item, index) => {
                          return vueExports.openBlock(), vueExports.createBlock("div", {
                            key: index,
                            class: "custom-dashed-border flex justify-between py-2"
                          }, [
                            vueExports.createVNode("dt", { class: "text-mob-small-reg" }, vueExports.toDisplayString(item.title), 1),
                            vueExports.createVNode("dd", { class: "text-mob-small-bold" }, vueExports.toDisplayString(item.count), 1)
                          ]);
                        }), 128))
                      ])
                    ], 64)) : vueExports.createCommentVNode("", true),
                    _ctx.recipe.ingredients_for_sauce_json.length > 0 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 1,
                      class: "mt-6"
                    }, [
                      vueExports.createVNode("h2", { class: "text-default-medium" }, "Ингредиенты для соуса"),
                      vueExports.createVNode("dl", { class: "mt-6" }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.recipe.ingredients_for_sauce_json, (item, index) => {
                          return vueExports.openBlock(), vueExports.createBlock("div", {
                            key: index,
                            class: "custom-dashed-border flex justify-between py-2"
                          }, [
                            vueExports.createVNode("dt", { class: "text-mob-small-reg" }, vueExports.toDisplayString(item.title), 1),
                            vueExports.createVNode("dd", { class: "text-mob-small-bold" }, vueExports.toDisplayString(item.count), 1)
                          ]);
                        }), 128))
                      ])
                    ])) : vueExports.createCommentVNode("", true)
                  ])
                ])
              ]),
              vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                visible: isAddModalOpen.value,
                "onUpdate:visible": ($event) => isAddModalOpen.value = $event,
                "number-of-stars": initialRating.value,
                "onUpdate:numberOfStars": ($event) => initialRating.value = $event,
                item: { id: _ctx.recipe.id, type: "Recipe" }
              }, null, 8, ["visible", "onUpdate:visible", "number-of-stars", "onUpdate:numberOfStars", "item"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/recipe/recipe-detail/ui/RecipeDetailPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RecipeDetailPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8f345751"]]);
export {
  RecipeDetailPage as default
};
