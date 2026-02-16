import { v as vueExports, ag as PromoLayout, u as useScreenSize, T, s as serverRenderer_cjs_prodExports, V as VContainer, x as _sfc_main$1, l as link_default, n as _sfc_main$2, U as ProductCard, P as _sfc_main$3, a as VButton, t as _export_sfc } from "../ssr.js";
import { _ as _sfc_main$5 } from "./VPagination-cbnzOOCr.js";
import { _ as _sfc_main$4 } from "./EmptyPlug-BgfBZzl1.js";
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
const perPage = 12;
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  ...{
    layout: PromoLayout
  },
  __name: "ComboPage",
  __ssrInlineRender: true,
  props: {
    combos: {}
  },
  setup(__props) {
    const { isDesktop } = useScreenSize();
    const breadcrumbItems = [
      { label: "Главная", route: T("main-page") },
      { label: "Комбо наборы", route: T("combo.index") }
    ];
    const pageContent = vueExports.useTemplateRef("combos-page");
    const onPageUpdate = async () => {
      var _a;
      (_a = pageContent.value) == null ? void 0 : _a.scrollIntoView({
        behavior: "smooth"
      });
    };
    const currentPage = vueExports.ref(1);
    const paginatedCombos = vueExports.computed(() => {
      const start = (currentPage.value - 1) * perPage;
      const end = start + perPage;
      return __props.combos.slice(start, end);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ ref: "combos-page" }, _attrs))} data-v-20f7acfa>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), { class: "px-6 sm:px-8" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!vueExports.unref(isDesktop)) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
                model: breadcrumbItems,
                class: "mb-4 bg-white px-0!"
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
            _push2(`<div class="rounded-20 combo-banner mb-4 h-50 bg-gray-100 mask-[url(/images/masks/for_catalog_mobile.svg)] mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 pt-4 min-[425px]:mask-[url(/images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-65 lg:px-8 lg:pt-8" data-v-20f7acfa${_scopeId}><div class="flex h-42 flex-col justify-end gap-4 pb-8 md:max-w-1/2 lg:h-47 lg:justify-between" data-v-20f7acfa${_scopeId}>`);
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
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h1 class="font-vast text-vast-mob-title-bold lg:text-vast-title-bold text-white" data-v-20f7acfa${_scopeId}>Комбо наборы</h1></div></div>`);
          } else {
            return [
              !vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
                key: 0,
                model: breadcrumbItems,
                class: "mb-4 bg-white px-0!"
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
              vueExports.createVNode("div", { class: "rounded-20 combo-banner mb-4 h-50 bg-gray-100 mask-[url(/images/masks/for_catalog_mobile.svg)] mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 pt-4 min-[425px]:mask-[url(/images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-65 lg:px-8 lg:pt-8" }, [
                vueExports.createVNode("div", { class: "flex h-42 flex-col justify-end gap-4 pb-8 md:max-w-1/2 lg:h-47 lg:justify-between" }, [
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
                  vueExports.createVNode("h1", { class: "font-vast text-vast-mob-title-bold lg:text-vast-title-bold text-white" }, "Комбо наборы")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), null, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), null, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (_ctx.combos.length) {
                    _push3(`<div class="grid gap-2 min-[490px]:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-8" data-v-20f7acfa${_scopeId2}><!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(paginatedCombos.value, (combo) => {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ProductCard), {
                        id: combo.id,
                        key: combo.id,
                        class: "flex h-full flex-col",
                        title: combo.name,
                        "is-combo": true,
                        images: combo.images.map((i) => i.path),
                        description: combo.short_description,
                        price: Number(combo.sale_price) ?? 0,
                        "price-unit": combo.price_type,
                        "old-price": Number(combo.price) ?? 0,
                        cashback_percent: combo.cashback_percent
                      }, {
                        footer: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                              id: combo.id,
                              "count-in-cart": combo.count_in_cart,
                              nowrap: "",
                              type: "combo",
                              "is-combo": "",
                              quantity: combo.quantity
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                                id: combo.id,
                                "count-in-cart": combo.count_in_cart,
                                nowrap: "",
                                type: "combo",
                                "is-combo": "",
                                quantity: combo.quantity
                              }, null, 8, ["id", "count-in-cart", "quantity"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), { class: "mx-auto" }, null, _parent3, _scopeId2));
                  }
                  if (_ctx.combos.length) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                      label: "Назад в каталог",
                      class: "mx-auto mt-8 w-fit",
                      onClick: ($event) => vueExports.unref(router).visit(vueExports.unref(T)("catalog.index"))
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (_ctx.combos.length) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                      modelValue: currentPage.value,
                      "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                      "per-page": perPage,
                      "total-count": _ctx.combos.length,
                      class: "mx-auto mt-8 justify-center"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    _ctx.combos.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      class: "grid gap-2 min-[490px]:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-8"
                    }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedCombos.value, (combo) => {
                        return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ProductCard), {
                          id: combo.id,
                          key: combo.id,
                          class: "flex h-full flex-col",
                          title: combo.name,
                          "is-combo": true,
                          images: combo.images.map((i) => i.path),
                          description: combo.short_description,
                          price: Number(combo.sale_price) ?? 0,
                          "price-unit": combo.price_type,
                          "old-price": Number(combo.price) ?? 0,
                          cashback_percent: combo.cashback_percent
                        }, {
                          footer: vueExports.withCtx(() => [
                            vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                              id: combo.id,
                              "count-in-cart": combo.count_in_cart,
                              nowrap: "",
                              type: "combo",
                              "is-combo": "",
                              quantity: combo.quantity
                            }, null, 8, ["id", "count-in-cart", "quantity"])
                          ]),
                          _: 2
                        }, 1032, ["id", "title", "images", "description", "price", "price-unit", "old-price", "cashback_percent"]);
                      }), 128))
                    ])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$4), {
                      key: 1,
                      class: "mx-auto"
                    })),
                    _ctx.combos.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(VButton), {
                      key: 2,
                      label: "Назад в каталог",
                      class: "mx-auto mt-8 w-fit",
                      onClick: ($event) => vueExports.unref(router).visit(vueExports.unref(T)("catalog.index"))
                    }, null, 8, ["onClick"])) : vueExports.createCommentVNode("", true),
                    _ctx.combos.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                      key: 3,
                      modelValue: currentPage.value,
                      "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                      "per-page": perPage,
                      "total-count": _ctx.combos.length,
                      class: "mx-auto mt-8 justify-center"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])) : vueExports.createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(_sfc_main$2), null, {
                default: vueExports.withCtx(() => [
                  _ctx.combos.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 0,
                    class: "grid gap-2 min-[490px]:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-8"
                  }, [
                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedCombos.value, (combo) => {
                      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ProductCard), {
                        id: combo.id,
                        key: combo.id,
                        class: "flex h-full flex-col",
                        title: combo.name,
                        "is-combo": true,
                        images: combo.images.map((i) => i.path),
                        description: combo.short_description,
                        price: Number(combo.sale_price) ?? 0,
                        "price-unit": combo.price_type,
                        "old-price": Number(combo.price) ?? 0,
                        cashback_percent: combo.cashback_percent
                      }, {
                        footer: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                            id: combo.id,
                            "count-in-cart": combo.count_in_cart,
                            nowrap: "",
                            type: "combo",
                            "is-combo": "",
                            quantity: combo.quantity
                          }, null, 8, ["id", "count-in-cart", "quantity"])
                        ]),
                        _: 2
                      }, 1032, ["id", "title", "images", "description", "price", "price-unit", "old-price", "cashback_percent"]);
                    }), 128))
                  ])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$4), {
                    key: 1,
                    class: "mx-auto"
                  })),
                  _ctx.combos.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(VButton), {
                    key: 2,
                    label: "Назад в каталог",
                    class: "mx-auto mt-8 w-fit",
                    onClick: ($event) => vueExports.unref(router).visit(vueExports.unref(T)("catalog.index"))
                  }, null, 8, ["onClick"])) : vueExports.createCommentVNode("", true),
                  _ctx.combos.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                    key: 3,
                    modelValue: currentPage.value,
                    "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                    "per-page": perPage,
                    "total-count": _ctx.combos.length,
                    class: "mx-auto mt-8 justify-center"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])) : vueExports.createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/combo/combo-page/ui/ComboPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ComboPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-20f7acfa"]]);
export {
  ComboPage as default
};
