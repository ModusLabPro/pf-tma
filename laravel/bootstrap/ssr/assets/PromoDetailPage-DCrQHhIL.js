import { v as vueExports, ag as PromoLayout, T, u as useScreenSize, s as serverRenderer_cjs_prodExports, V as VContainer, x as _sfc_main$1, l as link_default, n as _sfc_main$3, U as ProductCard, P as _sfc_main$4, W as _sfc_main$5, a as VButton } from "../ssr.js";
import { _ as _sfc_main$6 } from "./VPagination-cbnzOOCr.js";
import { _ as _sfc_main$2 } from "./VShare-C36WNIjH.js";
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
const perPage = 18;
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  ...{
    layout: PromoLayout
  },
  __name: "PromoDetailPage",
  __ssrInlineRender: true,
  props: {
    promotion: {}
  },
  setup(__props) {
    const props = __props;
    const pageContent = vueExports.useTemplateRef("promo-page");
    const onPageUpdate = async () => {
      var _a;
      (_a = pageContent.value) == null ? void 0 : _a.scrollIntoView({
        behavior: "smooth"
      });
    };
    const paginatedProducts = vueExports.computed(() => {
      const start = (currentPage.value - 1) * perPage;
      const end = start + perPage;
      return props.promotion.items.slice(start, end);
    });
    const currentPage = vueExports.ref(1);
    const breadcrumbItems = vueExports.computed(() => {
      const items = [
        { label: "Главная", route: T("main-page") },
        { label: "Акции и спецпредложения", route: T("promotion.index") }
      ];
      return [
        ...items,
        {
          label: props.promotion.name,
          route: T("promotion.show", props.promotion.id)
        }
      ];
    });
    const { isDesktop } = useScreenSize();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ ref: "promo-page" }, _attrs))}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), { class: "px-6 sm:px-8" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!vueExports.unref(isDesktop)) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
                model: breadcrumbItems.value,
                class: "mb-4 bg-white max-md:px-0!"
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
            _push2(`<div class="rounded-20 mb-4 h-full mask-[url(../../images/masks/for-newsletter-mobile.svg)] bg-cover bg-center bg-no-repeat mask-cover mask-bottom-left mask-no-repeat px-4 pt-4 min-sm:mask-[url(../../images/masks/for_catalog.svg)] lg:px-8 lg:pt-8" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${_ctx.promotion.image.path})` })}"${_scopeId}><div class="flex flex-col-reverse gap-6 pb-8 lg:flex-row lg:items-start lg:justify-between"${_scopeId}><div class="flex flex-col justify-between gap-10"${_scopeId}>`);
            if (vueExports.unref(isDesktop)) {
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
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex h-full flex-col gap-4"${_scopeId}><h1 class="font-vast text-vast-mob-title-bold lg:text-vast-title-bold max-w-[920px] text-white uppercase"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.promotion.name)}</h1><p class="bg-delete text-subsidiary-medium mb-6 w-fit rounded-full px-2 py-1 text-white"${_scopeId}>Действует до ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.promotion.end_date)}</p></div></div><div class="flex items-center gap-4"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              url: vueExports.unref(T)("promotion.show", { promotion: _ctx.promotion.id })
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><p class="text-subsidiary-reg rounded-20 border-complimentary w-fit border bg-[#e5e5e5]/10 p-1.5 text-white backdrop-blur-[10px] lg:px-3 lg:py-2"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.promotion.type)}</p></div></div></div></div>`);
          } else {
            return [
              !vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
                key: 0,
                model: breadcrumbItems.value,
                class: "mb-4 bg-white max-md:px-0!"
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
              }, 8, ["model"])) : vueExports.createCommentVNode("", true),
              vueExports.createVNode("div", {
                class: "rounded-20 mb-4 h-full mask-[url(../../images/masks/for-newsletter-mobile.svg)] bg-cover bg-center bg-no-repeat mask-cover mask-bottom-left mask-no-repeat px-4 pt-4 min-sm:mask-[url(../../images/masks/for_catalog.svg)] lg:px-8 lg:pt-8",
                style: { backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${_ctx.promotion.image.path})` }
              }, [
                vueExports.createVNode("div", { class: "flex flex-col-reverse gap-6 pb-8 lg:flex-row lg:items-start lg:justify-between" }, [
                  vueExports.createVNode("div", { class: "flex flex-col justify-between gap-10" }, [
                    vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
                      key: 0,
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
                    }, 8, ["model"])) : vueExports.createCommentVNode("", true),
                    vueExports.createVNode("div", { class: "flex h-full flex-col gap-4" }, [
                      vueExports.createVNode("h1", { class: "font-vast text-vast-mob-title-bold lg:text-vast-title-bold max-w-[920px] text-white uppercase" }, vueExports.toDisplayString(_ctx.promotion.name), 1),
                      vueExports.createVNode("p", { class: "bg-delete text-subsidiary-medium mb-6 w-fit rounded-full px-2 py-1 text-white" }, "Действует до " + vueExports.toDisplayString(_ctx.promotion.end_date), 1)
                    ])
                  ]),
                  vueExports.createVNode("div", { class: "flex items-center gap-4" }, [
                    vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                      url: vueExports.unref(T)("promotion.show", { promotion: _ctx.promotion.id })
                    }, null, 8, ["url"]),
                    vueExports.createVNode("div", null, [
                      vueExports.createVNode("p", { class: "text-subsidiary-reg rounded-20 border-complimentary w-fit border bg-[#e5e5e5]/10 p-1.5 text-white backdrop-blur-[10px] lg:px-3 lg:py-2" }, vueExports.toDisplayString(_ctx.promotion.type), 1)
                    ])
                  ])
                ])
              ], 4)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), null, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), null, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (_ctx.promotion.items.length) {
                    _push3(`<div class="grid grid-cols-2 gap-x-2 gap-y-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-4 xl:grid-cols-6 xl:gap-x-8"${_scopeId2}><!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(paginatedProducts.value, (product) => {
                      var _a, _b;
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ProductCard), {
                        id: product.item.id,
                        key: product.item.id,
                        "has-gift": product.is_combo ? false : product.item.is_have_gift,
                        slug: product.is_combo ? "" : product.item.slug,
                        title: product.item.name,
                        images: product.item.images.map((i) => i.path),
                        weight: product.item.weight,
                        description: product.item.short_description,
                        "is-favorite": product.item.is_wishlist,
                        "degree-type": product.item.degree_type,
                        "is-combo": product.is_combo,
                        categories: (_a = product.item.tags) == null ? void 0 : _a.map((t) => t.name),
                        unit: product.item.weight_type,
                        price: Math.round(Number(product.item.sale_price)) ?? 0,
                        "price-unit": product.item.price_type,
                        "sale-percent": ((_b = product.item) == null ? void 0 : _b.sale_percent) ?? null,
                        "old-price": Math.round(Number(product.item.price)) ?? 0,
                        cashback_percent: product.item.cashback_percent
                      }, {
                        favoriteButton: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                              id: product.item.id,
                              "initial-value": product.item.is_wishlist
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                id: product.item.id,
                                "initial-value": product.item.is_wishlist
                              }, null, 8, ["id", "initial-value"])
                            ];
                          }
                        }),
                        footer: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
                              id: product.item.id,
                              "count-in-cart": product.item.count_in_cart,
                              type: product.is_combo ? "combo" : "product",
                              quantity: product.item.quantity
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                id: product.item.id,
                                "count-in-cart": product.item.count_in_cart,
                                type: product.is_combo ? "combo" : "product",
                                quantity: product.item.quantity
                              }, null, 8, ["id", "count-in-cart", "type", "quantity"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (vueExports.unref(isDesktop)) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                      label: "Назад к акциям",
                      class: "mx-auto mt-8 w-fit",
                      onClick: ($event) => vueExports.unref(router).visit(vueExports.unref(T)("promotion.index"))
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (_ctx.promotion.items.length) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
                      modelValue: currentPage.value,
                      "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                      "per-page": perPage,
                      "total-count": _ctx.promotion.items.length,
                      class: "mx-auto mt-8 justify-center"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!vueExports.unref(isDesktop)) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                      label: "Назад к акциям",
                      class: "mx-auto mt-8 w-fit",
                      onClick: ($event) => vueExports.unref(router).visit(vueExports.unref(T)("promotion.index"))
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    _ctx.promotion.items.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      class: "grid grid-cols-2 gap-x-2 gap-y-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-4 xl:grid-cols-6 xl:gap-x-8"
                    }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedProducts.value, (product) => {
                        var _a, _b;
                        return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ProductCard), {
                          id: product.item.id,
                          key: product.item.id,
                          "has-gift": product.is_combo ? false : product.item.is_have_gift,
                          slug: product.is_combo ? "" : product.item.slug,
                          title: product.item.name,
                          images: product.item.images.map((i) => i.path),
                          weight: product.item.weight,
                          description: product.item.short_description,
                          "is-favorite": product.item.is_wishlist,
                          "degree-type": product.item.degree_type,
                          "is-combo": product.is_combo,
                          categories: (_a = product.item.tags) == null ? void 0 : _a.map((t) => t.name),
                          unit: product.item.weight_type,
                          price: Math.round(Number(product.item.sale_price)) ?? 0,
                          "price-unit": product.item.price_type,
                          "sale-percent": ((_b = product.item) == null ? void 0 : _b.sale_percent) ?? null,
                          "old-price": Math.round(Number(product.item.price)) ?? 0,
                          cashback_percent: product.item.cashback_percent
                        }, {
                          favoriteButton: vueExports.withCtx(() => [
                            vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                              id: product.item.id,
                              "initial-value": product.item.is_wishlist
                            }, null, 8, ["id", "initial-value"])
                          ]),
                          footer: vueExports.withCtx(() => [
                            vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                              id: product.item.id,
                              "count-in-cart": product.item.count_in_cart,
                              type: product.is_combo ? "combo" : "product",
                              quantity: product.item.quantity
                            }, null, 8, ["id", "count-in-cart", "type", "quantity"])
                          ]),
                          _: 2
                        }, 1032, ["id", "has-gift", "slug", "title", "images", "weight", "description", "is-favorite", "degree-type", "is-combo", "categories", "unit", "price", "price-unit", "sale-percent", "old-price", "cashback_percent"]);
                      }), 128))
                    ])) : vueExports.createCommentVNode("", true),
                    vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(VButton), {
                      key: 1,
                      label: "Назад к акциям",
                      class: "mx-auto mt-8 w-fit",
                      onClick: ($event) => vueExports.unref(router).visit(vueExports.unref(T)("promotion.index"))
                    }, null, 8, ["onClick"])) : vueExports.createCommentVNode("", true),
                    _ctx.promotion.items.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$6), {
                      key: 2,
                      modelValue: currentPage.value,
                      "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                      "per-page": perPage,
                      "total-count": _ctx.promotion.items.length,
                      class: "mx-auto mt-8 justify-center"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])) : vueExports.createCommentVNode("", true),
                    !vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(VButton), {
                      key: 3,
                      label: "Назад к акциям",
                      class: "mx-auto mt-8 w-fit",
                      onClick: ($event) => vueExports.unref(router).visit(vueExports.unref(T)("promotion.index"))
                    }, null, 8, ["onClick"])) : vueExports.createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(_sfc_main$3), null, {
                default: vueExports.withCtx(() => [
                  _ctx.promotion.items.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 0,
                    class: "grid grid-cols-2 gap-x-2 gap-y-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-4 xl:grid-cols-6 xl:gap-x-8"
                  }, [
                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedProducts.value, (product) => {
                      var _a, _b;
                      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ProductCard), {
                        id: product.item.id,
                        key: product.item.id,
                        "has-gift": product.is_combo ? false : product.item.is_have_gift,
                        slug: product.is_combo ? "" : product.item.slug,
                        title: product.item.name,
                        images: product.item.images.map((i) => i.path),
                        weight: product.item.weight,
                        description: product.item.short_description,
                        "is-favorite": product.item.is_wishlist,
                        "degree-type": product.item.degree_type,
                        "is-combo": product.is_combo,
                        categories: (_a = product.item.tags) == null ? void 0 : _a.map((t) => t.name),
                        unit: product.item.weight_type,
                        price: Math.round(Number(product.item.sale_price)) ?? 0,
                        "price-unit": product.item.price_type,
                        "sale-percent": ((_b = product.item) == null ? void 0 : _b.sale_percent) ?? null,
                        "old-price": Math.round(Number(product.item.price)) ?? 0,
                        cashback_percent: product.item.cashback_percent
                      }, {
                        favoriteButton: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                            id: product.item.id,
                            "initial-value": product.item.is_wishlist
                          }, null, 8, ["id", "initial-value"])
                        ]),
                        footer: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                            id: product.item.id,
                            "count-in-cart": product.item.count_in_cart,
                            type: product.is_combo ? "combo" : "product",
                            quantity: product.item.quantity
                          }, null, 8, ["id", "count-in-cart", "type", "quantity"])
                        ]),
                        _: 2
                      }, 1032, ["id", "has-gift", "slug", "title", "images", "weight", "description", "is-favorite", "degree-type", "is-combo", "categories", "unit", "price", "price-unit", "sale-percent", "old-price", "cashback_percent"]);
                    }), 128))
                  ])) : vueExports.createCommentVNode("", true),
                  vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(VButton), {
                    key: 1,
                    label: "Назад к акциям",
                    class: "mx-auto mt-8 w-fit",
                    onClick: ($event) => vueExports.unref(router).visit(vueExports.unref(T)("promotion.index"))
                  }, null, 8, ["onClick"])) : vueExports.createCommentVNode("", true),
                  _ctx.promotion.items.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$6), {
                    key: 2,
                    modelValue: currentPage.value,
                    "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                    "per-page": perPage,
                    "total-count": _ctx.promotion.items.length,
                    class: "mx-auto mt-8 justify-center"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])) : vueExports.createCommentVNode("", true),
                  !vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(VButton), {
                    key: 3,
                    label: "Назад к акциям",
                    class: "mx-auto mt-8 w-fit",
                    onClick: ($event) => vueExports.unref(router).visit(vueExports.unref(T)("promotion.index"))
                  }, null, 8, ["onClick"])) : vueExports.createCommentVNode("", true)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/promo/promo-detail-page/ui/PromoDetailPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
