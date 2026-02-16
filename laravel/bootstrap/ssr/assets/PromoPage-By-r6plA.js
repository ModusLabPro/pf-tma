import { v as vueExports, ag as PromoLayout, u as useScreenSize, T, c as useForm, s as serverRenderer_cjs_prodExports, h as head_default, V as VContainer, x as _sfc_main$1, l as link_default, r as VNavigationButton, n as _sfc_main$2, a as VButton, ap as _sfc_main$5, aq as IconCircleCross } from "../ssr.js";
import { useWindowSize } from "@vueuse/core";
import { useI18n } from "vue-i18n";
import { _ as _sfc_main$3 } from "./VShare-C36WNIjH.js";
import { _ as _sfc_main$4 } from "./EmptyPlug-BgfBZzl1.js";
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
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  ...{
    layout: PromoLayout
  },
  __name: "PromoPage",
  __ssrInlineRender: true,
  props: {
    promotions: {},
    promotionTypes: {},
    seo_title: {},
    seo_description: {}
  },
  setup(__props) {
    var _a;
    const { isDesktop } = useScreenSize();
    const breadcrumbItems = [
      { label: "Главная", route: T("main-page") },
      { label: "Акции и спецпредложения", route: T("promotion.index") }
    ];
    const filters = useForm({
      type: ((_a = T().queryParams) == null ? void 0 : _a.type) ?? []
    });
    const applyFilters = () => {
      return new Promise((resolve) => {
        filters.get(T("promotion.index"), {
          only: ["promotions"],
          preserveScroll: true,
          preserveState: true
        });
        resolve();
      });
    };
    const { width } = useWindowSize();
    const nbStyles = vueExports.computed(() => {
      if (width.value >= 1280) {
        return {
          "--nb-w": "600px",
          "--nb-r": "44px"
        };
      } else if (width.value >= 900) {
        return {
          "--nb-w": "300px",
          "--nb-r": "32px"
        };
      } else {
        return {
          "--nb-w": "120px",
          "--nb-r": "24px"
        };
      }
    });
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (_ctx.seo_title || _ctx.seo_description) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(head_default), null, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<title${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.seo_title)}</title>`);
              if (_ctx.seo_description) {
                _push2(`<meta name="description"${serverRenderer_cjs_prodExports.ssrRenderAttr("content", _ctx.seo_description)}${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                vueExports.createVNode("title", null, vueExports.toDisplayString(_ctx.seo_title), 1),
                _ctx.seo_description ? (vueExports.openBlock(), vueExports.createBlock("meta", {
                  key: 0,
                  name: "description",
                  content: _ctx.seo_description
                }, null, 8, ["content"])) : vueExports.createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), { class: "px-6 md:px-8" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!vueExports.unref(isDesktop)) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
                model: breadcrumbItems,
                class: "mb-4"
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
              _push2(`<!---->`);
            }
            _push2(`<div class="relative"${_scopeId}><swiper-container space-between="32" loop="true"${serverRenderer_cjs_prodExports.ssrRenderAttr("navigation", {
              nextEl: ".slider-next-promo",
              prevEl: ".slider-prev-promo"
            })}${_scopeId}><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(3, (index) => {
              _push2(`<swiper-slide${_scopeId}><div class="bg-multiply nebo nebo--tr relative mb-4 flex h-70 w-full flex-col justify-between rounded-[40px] bg-[url(&#39;/images/test-images/catalog.jpg&#39;)] bg-cover bg-center bg-no-repeat px-4 pt-4 lg:h-100 lg:p-8" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ ...nbStyles.value, "--nb-h": "1px" })}"${_scopeId}><div class="rounded-20 absolute inset-0 bg-black/50 mix-blend-multiply"${_scopeId}></div><div class="relative z-10 flex h-full flex-col gap-3 pb-8 min-[900px]:max-w-1/2"${_scopeId}>`);
              if (vueExports.unref(isDesktop)) {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { model: breadcrumbItems }, {
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
                  _: 2
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<h1 class="font-vast text-vast-mob-title-bold lg:text-vast-title-bold mt-4 max-w-[600px] text-white uppercase max-[900px]:mt-10 xl:mt-10"${_scopeId}> Полезные подарки для стейк-энтузиастов </h1><p class="text-mob-small-reg text-white"${_scopeId}>Все для вас как для себя</p></div><div class="relative z-100 mb-1.75 ml-28 flex w-[173px] items-center gap-1 max-[1023px]:mb-8.75"${_scopeId}><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(3, (j) => {
                _push2(`<span style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ flexBasis: `${1 / 3 * 100}%` })}" class="${serverRenderer_cjs_prodExports.ssrRenderClass([[j === index ? "bg-white" : "bg-[#D4D3D3]/50"], "rounded-20 block h-0.5"])}"${_scopeId}></span>`);
              });
              _push2(`<!--]--></div></div></swiper-slide>`);
            });
            _push2(`<!--]--></swiper-container>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VNavigationButton), {
              class: "absolute bottom-8 left-8 z-10",
              "slider-key": "promo"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              !vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
                key: 0,
                model: breadcrumbItems,
                class: "mb-4"
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
              })) : vueExports.createCommentVNode("", true),
              vueExports.createVNode("div", { class: "relative" }, [
                vueExports.createVNode("swiper-container", {
                  "space-between": "32",
                  loop: "true",
                  navigation: {
                    nextEl: ".slider-next-promo",
                    prevEl: ".slider-prev-promo"
                  }
                }, [
                  (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(3, (index) => {
                    return vueExports.createVNode("swiper-slide", { key: index }, [
                      vueExports.createVNode("div", {
                        class: "bg-multiply nebo nebo--tr relative mb-4 flex h-70 w-full flex-col justify-between rounded-[40px] bg-[url('/images/test-images/catalog.jpg')] bg-cover bg-center bg-no-repeat px-4 pt-4 lg:h-100 lg:p-8",
                        style: { ...nbStyles.value, "--nb-h": "1px" }
                      }, [
                        vueExports.createVNode("div", { class: "rounded-20 absolute inset-0 bg-black/50 mix-blend-multiply" }),
                        vueExports.createVNode("div", { class: "relative z-10 flex h-full flex-col gap-3 pb-8 min-[900px]:max-w-1/2" }, [
                          vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
                            key: 0,
                            model: breadcrumbItems
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
                          })) : vueExports.createCommentVNode("", true),
                          vueExports.createVNode("h1", { class: "font-vast text-vast-mob-title-bold lg:text-vast-title-bold mt-4 max-w-[600px] text-white uppercase max-[900px]:mt-10 xl:mt-10" }, " Полезные подарки для стейк-энтузиастов "),
                          vueExports.createVNode("p", { class: "text-mob-small-reg text-white" }, "Все для вас как для себя")
                        ]),
                        vueExports.createVNode("div", { class: "relative z-100 mb-1.75 ml-28 flex w-[173px] items-center gap-1 max-[1023px]:mb-8.75" }, [
                          (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(3, (j) => {
                            return vueExports.createVNode("span", {
                              key: j,
                              style: { flexBasis: `${1 / 3 * 100}%` },
                              class: ["rounded-20 block h-0.5", [j === index ? "bg-white" : "bg-[#D4D3D3]/50"]]
                            }, null, 2);
                          }), 64))
                        ])
                      ], 4)
                    ]);
                  }), 64))
                ]),
                vueExports.createVNode(vueExports.unref(VNavigationButton), {
                  class: "absolute bottom-8 left-8 z-10",
                  "slider-key": "promo"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), { class: "mt-4 flex flex-col gap-20 px-2 lg:mt-17.5" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), null, vueExports.createSlots({
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (_ctx.promotions.length) {
                    _push3(`<div class="grid gap-2 md:grid-cols-2 md:gap-4 lg:gap-8 xl:grid-cols-3"${_scopeId2}><!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(_ctx.promotions, (promo) => {
                      _push3(`<article class="rounded-20 flex flex-col justify-between gap-23 bg-cover bg-center bg-no-repeat p-3 text-white md:p-4" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({
                        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${promo.image.path})`
                      })}"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><p class="text-complimentary-reg md:text-subsidiary-reg rounded-20 border-complimentary w-fit border bg-[#e5e5e5]/10 p-1 backdrop-blur-[10px] md:px-3 md:py-2"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(promo.type)}</p><div class="flex items-center gap-1 md:gap-2"${_scopeId2}>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                        url: vueExports.unref(T)("promotion.show", { promotion: promo.id })
                      }, null, _parent3, _scopeId2));
                      _push3(`<p class="bg-delete text-complimentary-reg md:text-subsidiary-medium rounded-full p-1"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("promo_page.daysLeft", promo.days_left))}</p><p class="bg-delete text-complimentary-bold md:text-subsidiary-medium rounded-full p-1"${_scopeId2}>-${serverRenderer_cjs_prodExports.ssrInterpolate(promo.sale_percent)}%</p></div></div><div class="flex flex-col gap-2"${_scopeId2}><h3 class="text-default-bold md:text-heavy-bold"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(promo.name)}</h3><p class="text-subsidiary-medium md:text-mob-small-medium line-clamp-3"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(promo.short_description)}</p><div class="mt-1 flex flex-col justify-between gap-2 lg:flex-row lg:items-center"${_scopeId2}><div class="flex flex-row items-center gap-2 md:flex-col md:items-start"${_scopeId2}><span class="text-subsidiary-reg text-filling"${_scopeId2}>Акция действует до:</span><span class="text-mob-small-bold"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(promo.end_date)}</span></div>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                        href: vueExports.unref(T)("promotion.show", promo.id)
                      }, {
                        default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                              label: vueExports.unref(t)("promo_page.buyWithDiscount"),
                              variant: "light"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              vueExports.createVNode(vueExports.unref(VButton), {
                                label: vueExports.unref(t)("promo_page.buyWithDiscount"),
                                variant: "light"
                              }, null, 8, ["label"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div></div></article>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), { class: "mx-auto" }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    _ctx.promotions.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      class: "grid gap-2 md:grid-cols-2 md:gap-4 lg:gap-8 xl:grid-cols-3"
                    }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.promotions, (promo) => {
                        return vueExports.openBlock(), vueExports.createBlock("article", {
                          key: promo.id,
                          class: "rounded-20 flex flex-col justify-between gap-23 bg-cover bg-center bg-no-repeat p-3 text-white md:p-4",
                          style: {
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${promo.image.path})`
                          }
                        }, [
                          vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                            vueExports.createVNode("p", { class: "text-complimentary-reg md:text-subsidiary-reg rounded-20 border-complimentary w-fit border bg-[#e5e5e5]/10 p-1 backdrop-blur-[10px] md:px-3 md:py-2" }, vueExports.toDisplayString(promo.type), 1),
                            vueExports.createVNode("div", { class: "flex items-center gap-1 md:gap-2" }, [
                              vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                                url: vueExports.unref(T)("promotion.show", { promotion: promo.id })
                              }, null, 8, ["url"]),
                              vueExports.createVNode("p", { class: "bg-delete text-complimentary-reg md:text-subsidiary-medium rounded-full p-1" }, vueExports.toDisplayString(vueExports.unref(t)("promo_page.daysLeft", promo.days_left)), 1),
                              vueExports.createVNode("p", { class: "bg-delete text-complimentary-bold md:text-subsidiary-medium rounded-full p-1" }, "-" + vueExports.toDisplayString(promo.sale_percent) + "%", 1)
                            ])
                          ]),
                          vueExports.createVNode("div", { class: "flex flex-col gap-2" }, [
                            vueExports.createVNode("h3", { class: "text-default-bold md:text-heavy-bold" }, vueExports.toDisplayString(promo.name), 1),
                            vueExports.createVNode("p", { class: "text-subsidiary-medium md:text-mob-small-medium line-clamp-3" }, vueExports.toDisplayString(promo.short_description), 1),
                            vueExports.createVNode("div", { class: "mt-1 flex flex-col justify-between gap-2 lg:flex-row lg:items-center" }, [
                              vueExports.createVNode("div", { class: "flex flex-row items-center gap-2 md:flex-col md:items-start" }, [
                                vueExports.createVNode("span", { class: "text-subsidiary-reg text-filling" }, "Акция действует до:"),
                                vueExports.createVNode("span", { class: "text-mob-small-bold" }, vueExports.toDisplayString(promo.end_date), 1)
                              ]),
                              vueExports.createVNode(vueExports.unref(link_default), {
                                href: vueExports.unref(T)("promotion.show", promo.id)
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(VButton), {
                                    label: vueExports.unref(t)("promo_page.buyWithDiscount"),
                                    variant: "light"
                                  }, null, 8, ["label"])
                                ]),
                                _: 2
                              }, 1032, ["href"])
                            ])
                          ])
                        ], 4);
                      }), 128))
                    ])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$4), {
                      key: 1,
                      class: "mx-auto"
                    }))
                  ];
                }
              }),
              _: 2
            }, [
              _ctx.promotions.length ? {
                name: "header",
                fn: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="mb-8 flex flex-col justify-between gap-3 lg:flex-row lg:items-center"${_scopeId2}><h2 class="text-default-bold md:text-heavy-bold"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("promo_page.promotionsAndSpecialOffers"))}</h2><form class="flex justify-between gap-2"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, {
                      modelValue: vueExports.unref(filters).type,
                      "onUpdate:modelValue": ($event) => vueExports.unref(filters).type = $event,
                      options: _ctx.promotionTypes,
                      "option-label": "name",
                      "option-value": "type",
                      multiple: "",
                      onValueChange: applyFilters
                    }, {
                      option: vueExports.withCtx(({ option }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="inline-flex gap-2"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(option.name)} `);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCircleCross), { class: "group-p-checked:inline hidden" }, null, _parent4, _scopeId3));
                          _push4(`</span>`);
                        } else {
                          return [
                            vueExports.createVNode("span", { class: "inline-flex gap-2" }, [
                              vueExports.createTextVNode(vueExports.toDisplayString(option.name) + " ", 1),
                              vueExports.createVNode(vueExports.unref(IconCircleCross), { class: "group-p-checked:inline hidden" })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</form></div>`);
                  } else {
                    return [
                      vueExports.createVNode("div", { class: "mb-8 flex flex-col justify-between gap-3 lg:flex-row lg:items-center" }, [
                        vueExports.createVNode("h2", { class: "text-default-bold md:text-heavy-bold" }, vueExports.toDisplayString(vueExports.unref(t)("promo_page.promotionsAndSpecialOffers")), 1),
                        vueExports.createVNode("form", {
                          class: "flex justify-between gap-2",
                          onSubmit: vueExports.withModifiers(() => {
                          }, ["prevent"])
                        }, [
                          vueExports.createVNode(_sfc_main$5, {
                            modelValue: vueExports.unref(filters).type,
                            "onUpdate:modelValue": ($event) => vueExports.unref(filters).type = $event,
                            options: _ctx.promotionTypes,
                            "option-label": "name",
                            "option-value": "type",
                            multiple: "",
                            onValueChange: applyFilters
                          }, {
                            option: vueExports.withCtx(({ option }) => [
                              vueExports.createVNode("span", { class: "inline-flex gap-2" }, [
                                vueExports.createTextVNode(vueExports.toDisplayString(option.name) + " ", 1),
                                vueExports.createVNode(vueExports.unref(IconCircleCross), { class: "group-p-checked:inline hidden" })
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                        ], 40, ["onSubmit"])
                      ])
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ]), _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(_sfc_main$2), null, vueExports.createSlots({
                default: vueExports.withCtx(() => [
                  _ctx.promotions.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 0,
                    class: "grid gap-2 md:grid-cols-2 md:gap-4 lg:gap-8 xl:grid-cols-3"
                  }, [
                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.promotions, (promo) => {
                      return vueExports.openBlock(), vueExports.createBlock("article", {
                        key: promo.id,
                        class: "rounded-20 flex flex-col justify-between gap-23 bg-cover bg-center bg-no-repeat p-3 text-white md:p-4",
                        style: {
                          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${promo.image.path})`
                        }
                      }, [
                        vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                          vueExports.createVNode("p", { class: "text-complimentary-reg md:text-subsidiary-reg rounded-20 border-complimentary w-fit border bg-[#e5e5e5]/10 p-1 backdrop-blur-[10px] md:px-3 md:py-2" }, vueExports.toDisplayString(promo.type), 1),
                          vueExports.createVNode("div", { class: "flex items-center gap-1 md:gap-2" }, [
                            vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                              url: vueExports.unref(T)("promotion.show", { promotion: promo.id })
                            }, null, 8, ["url"]),
                            vueExports.createVNode("p", { class: "bg-delete text-complimentary-reg md:text-subsidiary-medium rounded-full p-1" }, vueExports.toDisplayString(vueExports.unref(t)("promo_page.daysLeft", promo.days_left)), 1),
                            vueExports.createVNode("p", { class: "bg-delete text-complimentary-bold md:text-subsidiary-medium rounded-full p-1" }, "-" + vueExports.toDisplayString(promo.sale_percent) + "%", 1)
                          ])
                        ]),
                        vueExports.createVNode("div", { class: "flex flex-col gap-2" }, [
                          vueExports.createVNode("h3", { class: "text-default-bold md:text-heavy-bold" }, vueExports.toDisplayString(promo.name), 1),
                          vueExports.createVNode("p", { class: "text-subsidiary-medium md:text-mob-small-medium line-clamp-3" }, vueExports.toDisplayString(promo.short_description), 1),
                          vueExports.createVNode("div", { class: "mt-1 flex flex-col justify-between gap-2 lg:flex-row lg:items-center" }, [
                            vueExports.createVNode("div", { class: "flex flex-row items-center gap-2 md:flex-col md:items-start" }, [
                              vueExports.createVNode("span", { class: "text-subsidiary-reg text-filling" }, "Акция действует до:"),
                              vueExports.createVNode("span", { class: "text-mob-small-bold" }, vueExports.toDisplayString(promo.end_date), 1)
                            ]),
                            vueExports.createVNode(vueExports.unref(link_default), {
                              href: vueExports.unref(T)("promotion.show", promo.id)
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(VButton), {
                                  label: vueExports.unref(t)("promo_page.buyWithDiscount"),
                                  variant: "light"
                                }, null, 8, ["label"])
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ])
                        ])
                      ], 4);
                    }), 128))
                  ])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$4), {
                    key: 1,
                    class: "mx-auto"
                  }))
                ]),
                _: 2
              }, [
                _ctx.promotions.length ? {
                  name: "header",
                  fn: vueExports.withCtx(() => [
                    vueExports.createVNode("div", { class: "mb-8 flex flex-col justify-between gap-3 lg:flex-row lg:items-center" }, [
                      vueExports.createVNode("h2", { class: "text-default-bold md:text-heavy-bold" }, vueExports.toDisplayString(vueExports.unref(t)("promo_page.promotionsAndSpecialOffers")), 1),
                      vueExports.createVNode("form", {
                        class: "flex justify-between gap-2",
                        onSubmit: vueExports.withModifiers(() => {
                        }, ["prevent"])
                      }, [
                        vueExports.createVNode(_sfc_main$5, {
                          modelValue: vueExports.unref(filters).type,
                          "onUpdate:modelValue": ($event) => vueExports.unref(filters).type = $event,
                          options: _ctx.promotionTypes,
                          "option-label": "name",
                          "option-value": "type",
                          multiple: "",
                          onValueChange: applyFilters
                        }, {
                          option: vueExports.withCtx(({ option }) => [
                            vueExports.createVNode("span", { class: "inline-flex gap-2" }, [
                              vueExports.createTextVNode(vueExports.toDisplayString(option.name) + " ", 1),
                              vueExports.createVNode(vueExports.unref(IconCircleCross), { class: "group-p-checked:inline hidden" })
                            ])
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ], 40, ["onSubmit"])
                    ])
                  ]),
                  key: "0"
                } : void 0
              ]), 1024)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/promo/promo-page/ui/PromoPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
