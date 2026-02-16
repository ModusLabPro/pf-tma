import { v as vueExports, u as useScreenSize, s as serverRenderer_cjs_prodExports, V as VContainer, x as _sfc_main$1, l as link_default, a2 as _sfc_main$2, U as ProductCard, P as _sfc_main$3, W as _sfc_main$4, _ as _sfc_main$5, t as _export_sfc } from "../ssr.js";
import _sfc_main$6 from "./CombinationBlock-Dwy5R1bY.js";
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
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "CombinationDetailPage",
  __ssrInlineRender: true,
  props: {
    combination: {}
  },
  setup(__props) {
    const combinationBaseBreadcrumbs = [
      { label: "Главная", route: route("main-page") },
      { label: "Рекомендации по сочетанию продуктов", route: route("combination.index") },
      { label: __props.combination.name }
    ];
    const { isDesktop } = useScreenSize();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), _attrs, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="px-6 sm:px-8" data-v-b18ce98e${_scopeId}>`);
            if (!vueExports.unref(isDesktop)) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
                model: combinationBaseBreadcrumbs,
                class: "mb-4 bg-white px-0!"
              }, {
                item: vueExports.withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                      href: item.route,
                      only: ["products", "category_target", "is_products_group", "fast_filter_tags"]
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
                        href: item.route,
                        only: ["products", "category_target", "is_products_group", "fast_filter_tags"]
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
            _push2(`<header class="rounded-20 combination-banner mb-8 bg-gray-100 mask-[url(../../images/masks/for-newsletter-mobile.svg)] mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 py-4 min-[425px]:mask-[url(../../images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-auto lg:min-h-65 lg:px-8 lg:py-8" data-v-b18ce98e${_scopeId}><div class="flex min-h-42 flex-col justify-end gap-4 pb-8 lg:justify-between" data-v-b18ce98e${_scopeId}>`);
            if (vueExports.unref(isDesktop)) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                model: combinationBaseBreadcrumbs,
                class: "shrink-0"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h1 class="font-vast text-vast-mob-title-bold lg:text-vast-title-bold text-white lg:max-w-1/2" data-v-b18ce98e${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combination.name)}</h1></div></header><div class="grid gap-10 lg:gap-20" data-v-b18ce98e${_scopeId}><div class="grid gap-8 pr-6 sm:pr-0 xl:grid-cols-2" data-v-b18ce98e${_scopeId}><div class="flex flex-col gap-4 lg:gap-8" data-v-b18ce98e${_scopeId}><div class="flex flex-col gap-4" data-v-b18ce98e${_scopeId}><h2 class="text-default-bold lg:text-heavy-bold" data-v-b18ce98e${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combination.name)}</h2><p class="text-subsidiary-reg lg:text-mob-small-reg" data-v-b18ce98e${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combination.description)}</p></div><div class="mt-4 flex flex-col gap-4 lg:mt-0" data-v-b18ce98e${_scopeId}><h3 class="text-mob-small-bold lg:text-default-bold" data-v-b18ce98e${_scopeId}>Способы приготовления</h3><p class="text-subsidiary-reg lg:text-mob-small-reg" data-v-b18ce98e${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combination.cooking_method)}</p></div></div><div class="grid grid-cols-[auto_minmax(132px,_1fr)] gap-2 lg:grid-cols-3 lg:gap-8" data-v-b18ce98e${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ProductCard), {
              id: _ctx.combination.product.id,
              "has-gift": _ctx.combination.product.is_have_gift,
              slug: _ctx.combination.product.slug,
              title: _ctx.combination.product.name,
              images: _ctx.combination.product.images.map((i) => i.path),
              weight: _ctx.combination.product.weight,
              description: _ctx.combination.product.short_description,
              "is-favorite": _ctx.combination.product.is_wishlist,
              "degree-type": _ctx.combination.product.degree_type,
              categories: _ctx.combination.product.tags.map((b) => b.name) ?? [],
              unit: _ctx.combination.product.weight_type,
              price: Number(_ctx.combination.product.sale_price) ?? 0,
              "price-unit": _ctx.combination.product.price_type,
              "sale-percent": _ctx.combination.product.sale_percent,
              "is-new": _ctx.combination.product.is_new,
              "old-price": Number(_ctx.combination.product.price) ?? 0,
              cashback_percent: _ctx.combination.product.cashback_percent
            }, {
              favoriteButton: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
                    id: _ctx.combination.product.id,
                    "initial-value": _ctx.combination.product.is_wishlist
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                      id: _ctx.combination.product.id,
                      "initial-value": _ctx.combination.product.is_wishlist
                    }, null, 8, ["id", "initial-value"])
                  ];
                }
              }),
              footer: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                    id: _ctx.combination.product.id,
                    "count-in-cart": _ctx.combination.product.count_in_cart,
                    quantity: _ctx.combination.product.quantity
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                      id: _ctx.combination.product.id,
                      "count-in-cart": _ctx.combination.product.count_in_cart,
                      quantity: _ctx.combination.product.quantity
                    }, null, 8, ["id", "count-in-cart", "quantity"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
              src: _ctx.combination.image.path,
              height: "100%",
              width: "100%",
              alt: "Возможное сочетание продукта",
              class: "block overflow-hidden rounded-2xl lg:col-span-2"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (_ctx.combination.garnishes && _ctx.combination.garnishes.length) {
              _push2(`<section class="grid gap-6 lg:gap-8" data-v-b18ce98e${_scopeId}><header class="flex flex-col justify-between gap-4 pr-6 sm:pr-0 lg:flex-row lg:gap-8" data-v-b18ce98e${_scopeId}><h3 class="text-default-bold lg:text-heavy-bold" data-v-b18ce98e${_scopeId}>Рекомендуемые гарниры</h3><p class="text-subsidiary-reg lg:text-mob-small-reg lg:max-w-136" data-v-b18ce98e${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combination.garnish_title)}</p></header><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(_ctx.combination.garnishes, (garnish) => {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, { variant: garnish }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></section>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.combination.sauces && _ctx.combination.sauces.length) {
              _push2(`<section class="grid gap-6 lg:gap-8" data-v-b18ce98e${_scopeId}><header class="flex flex-col justify-between gap-4 pr-6 sm:pr-0 lg:flex-row lg:gap-8" data-v-b18ce98e${_scopeId}><h3 class="text-default-bold lg:text-heavy-bold" data-v-b18ce98e${_scopeId}>Рекомендуемые соусы</h3><p class="text-subsidiary-reg lg:text-mob-small-reg lg:max-w-136" data-v-b18ce98e${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combination.sauce_title)}</p></header><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(_ctx.combination.sauces, (sause) => {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, { variant: sause }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></section>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.combination.drinks && _ctx.combination.drinks.length) {
              _push2(`<section class="grid gap-6 lg:gap-8" data-v-b18ce98e${_scopeId}><header class="flex flex-col justify-between gap-4 pr-6 sm:pr-0 lg:flex-row lg:gap-8" data-v-b18ce98e${_scopeId}><h3 class="text-default-bold lg:text-heavy-bold" data-v-b18ce98e${_scopeId}>Рекомендуемые напитки</h3><p class="text-subsidiary-reg lg:text-mob-small-reg lg:max-w-136" data-v-b18ce98e${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combination.drink_title)}</p></header><div class="grid grid-cols-2 gap-2 pr-6 sm:pr-0 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4" data-v-b18ce98e${_scopeId}><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(_ctx.combination.drinks, (drink) => {
                _push2(`<div class="flex flex-col gap-2" data-v-b18ce98e${_scopeId}>`);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                  src: drink.image.path,
                  alt: "Напиток",
                  width: "100%",
                  height: "100%",
                  class: "h-[200px] overflow-hidden rounded-2xl lg:h-[300px]"
                }, null, _parent2, _scopeId));
                _push2(`<p class="text-default-bold" data-v-b18ce98e${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(drink.name)}</p><p class="text-mob-small-reg" data-v-b18ce98e${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(drink.description)}</p></div>`);
              });
              _push2(`<!--]--></div></section>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></section>`);
          } else {
            return [
              vueExports.createVNode("section", { class: "px-6 sm:px-8" }, [
                !vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
                  key: 0,
                  model: combinationBaseBreadcrumbs,
                  class: "mb-4 bg-white px-0!"
                }, {
                  item: vueExports.withCtx(({ item }) => [
                    vueExports.createVNode(vueExports.unref(link_default), {
                      class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                      href: item.route,
                      only: ["products", "category_target", "is_products_group", "fast_filter_tags"]
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ]),
                  _: 1
                })) : vueExports.createCommentVNode("", true),
                vueExports.createVNode("header", { class: "rounded-20 combination-banner mb-8 bg-gray-100 mask-[url(../../images/masks/for-newsletter-mobile.svg)] mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 py-4 min-[425px]:mask-[url(../../images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-auto lg:min-h-65 lg:px-8 lg:py-8" }, [
                  vueExports.createVNode("div", { class: "flex min-h-42 flex-col justify-end gap-4 pb-8 lg:justify-between" }, [
                    vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$2), {
                      key: 0,
                      model: combinationBaseBreadcrumbs,
                      class: "shrink-0"
                    })) : vueExports.createCommentVNode("", true),
                    vueExports.createVNode("h1", { class: "font-vast text-vast-mob-title-bold lg:text-vast-title-bold text-white lg:max-w-1/2" }, vueExports.toDisplayString(_ctx.combination.name), 1)
                  ])
                ]),
                vueExports.createVNode("div", { class: "grid gap-10 lg:gap-20" }, [
                  vueExports.createVNode("div", { class: "grid gap-8 pr-6 sm:pr-0 xl:grid-cols-2" }, [
                    vueExports.createVNode("div", { class: "flex flex-col gap-4 lg:gap-8" }, [
                      vueExports.createVNode("div", { class: "flex flex-col gap-4" }, [
                        vueExports.createVNode("h2", { class: "text-default-bold lg:text-heavy-bold" }, vueExports.toDisplayString(_ctx.combination.name), 1),
                        vueExports.createVNode("p", { class: "text-subsidiary-reg lg:text-mob-small-reg" }, vueExports.toDisplayString(_ctx.combination.description), 1)
                      ]),
                      vueExports.createVNode("div", { class: "mt-4 flex flex-col gap-4 lg:mt-0" }, [
                        vueExports.createVNode("h3", { class: "text-mob-small-bold lg:text-default-bold" }, "Способы приготовления"),
                        vueExports.createVNode("p", { class: "text-subsidiary-reg lg:text-mob-small-reg" }, vueExports.toDisplayString(_ctx.combination.cooking_method), 1)
                      ])
                    ]),
                    vueExports.createVNode("div", { class: "grid grid-cols-[auto_minmax(132px,_1fr)] gap-2 lg:grid-cols-3 lg:gap-8" }, [
                      vueExports.createVNode(vueExports.unref(ProductCard), {
                        id: _ctx.combination.product.id,
                        "has-gift": _ctx.combination.product.is_have_gift,
                        slug: _ctx.combination.product.slug,
                        title: _ctx.combination.product.name,
                        images: _ctx.combination.product.images.map((i) => i.path),
                        weight: _ctx.combination.product.weight,
                        description: _ctx.combination.product.short_description,
                        "is-favorite": _ctx.combination.product.is_wishlist,
                        "degree-type": _ctx.combination.product.degree_type,
                        categories: _ctx.combination.product.tags.map((b) => b.name) ?? [],
                        unit: _ctx.combination.product.weight_type,
                        price: Number(_ctx.combination.product.sale_price) ?? 0,
                        "price-unit": _ctx.combination.product.price_type,
                        "sale-percent": _ctx.combination.product.sale_percent,
                        "is-new": _ctx.combination.product.is_new,
                        "old-price": Number(_ctx.combination.product.price) ?? 0,
                        cashback_percent: _ctx.combination.product.cashback_percent
                      }, {
                        favoriteButton: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                            id: _ctx.combination.product.id,
                            "initial-value": _ctx.combination.product.is_wishlist
                          }, null, 8, ["id", "initial-value"])
                        ]),
                        footer: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                            id: _ctx.combination.product.id,
                            "count-in-cart": _ctx.combination.product.count_in_cart,
                            quantity: _ctx.combination.product.quantity
                          }, null, 8, ["id", "count-in-cart", "quantity"])
                        ]),
                        _: 1
                      }, 8, ["id", "has-gift", "slug", "title", "images", "weight", "description", "is-favorite", "degree-type", "categories", "unit", "price", "price-unit", "sale-percent", "is-new", "old-price", "cashback_percent"]),
                      vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                        src: _ctx.combination.image.path,
                        height: "100%",
                        width: "100%",
                        alt: "Возможное сочетание продукта",
                        class: "block overflow-hidden rounded-2xl lg:col-span-2"
                      }, null, 8, ["src"])
                    ])
                  ]),
                  _ctx.combination.garnishes && _ctx.combination.garnishes.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                    key: 0,
                    class: "grid gap-6 lg:gap-8"
                  }, [
                    vueExports.createVNode("header", { class: "flex flex-col justify-between gap-4 pr-6 sm:pr-0 lg:flex-row lg:gap-8" }, [
                      vueExports.createVNode("h3", { class: "text-default-bold lg:text-heavy-bold" }, "Рекомендуемые гарниры"),
                      vueExports.createVNode("p", { class: "text-subsidiary-reg lg:text-mob-small-reg lg:max-w-136" }, vueExports.toDisplayString(_ctx.combination.garnish_title), 1)
                    ]),
                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.combination.garnishes, (garnish) => {
                      return vueExports.openBlock(), vueExports.createBlock(_sfc_main$6, {
                        key: garnish.id,
                        variant: garnish
                      }, null, 8, ["variant"]);
                    }), 128))
                  ])) : vueExports.createCommentVNode("", true),
                  _ctx.combination.sauces && _ctx.combination.sauces.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                    key: 1,
                    class: "grid gap-6 lg:gap-8"
                  }, [
                    vueExports.createVNode("header", { class: "flex flex-col justify-between gap-4 pr-6 sm:pr-0 lg:flex-row lg:gap-8" }, [
                      vueExports.createVNode("h3", { class: "text-default-bold lg:text-heavy-bold" }, "Рекомендуемые соусы"),
                      vueExports.createVNode("p", { class: "text-subsidiary-reg lg:text-mob-small-reg lg:max-w-136" }, vueExports.toDisplayString(_ctx.combination.sauce_title), 1)
                    ]),
                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.combination.sauces, (sause) => {
                      return vueExports.openBlock(), vueExports.createBlock(_sfc_main$6, {
                        key: sause.id,
                        variant: sause
                      }, null, 8, ["variant"]);
                    }), 128))
                  ])) : vueExports.createCommentVNode("", true),
                  _ctx.combination.drinks && _ctx.combination.drinks.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                    key: 2,
                    class: "grid gap-6 lg:gap-8"
                  }, [
                    vueExports.createVNode("header", { class: "flex flex-col justify-between gap-4 pr-6 sm:pr-0 lg:flex-row lg:gap-8" }, [
                      vueExports.createVNode("h3", { class: "text-default-bold lg:text-heavy-bold" }, "Рекомендуемые напитки"),
                      vueExports.createVNode("p", { class: "text-subsidiary-reg lg:text-mob-small-reg lg:max-w-136" }, vueExports.toDisplayString(_ctx.combination.drink_title), 1)
                    ]),
                    vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2 pr-6 sm:pr-0 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4" }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.combination.drinks, (drink) => {
                        return vueExports.openBlock(), vueExports.createBlock("div", {
                          key: drink.id,
                          class: "flex flex-col gap-2"
                        }, [
                          vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                            src: drink.image.path,
                            alt: "Напиток",
                            width: "100%",
                            height: "100%",
                            class: "h-[200px] overflow-hidden rounded-2xl lg:h-[300px]"
                          }, null, 8, ["src"]),
                          vueExports.createVNode("p", { class: "text-default-bold" }, vueExports.toDisplayString(drink.name), 1),
                          vueExports.createVNode("p", { class: "text-mob-small-reg" }, vueExports.toDisplayString(drink.description), 1)
                        ]);
                      }), 128))
                    ])
                  ])) : vueExports.createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/combination-detail/ui/CombinationDetailPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CombinationDetailPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b18ce98e"]]);
export {
  CombinationDetailPage as default
};
