import { v as vueExports, al as _sfc_main$1, u as useScreenSize, s as serverRenderer_cjs_prodExports, an as IconBookOpen, _ as _sfc_main$7, l as link_default, a as VButton, U as ProductCard, P as _sfc_main$8, W as _sfc_main$9, t as _export_sfc } from "../ssr.js";
import { _ as _sfc_main$c } from "./RecipeCard-BgvuIkQ1.js";
import _sfc_main$a from "./FavoriteProductBanner-DGcJvJ3y.js";
import _sfc_main$e from "./FavoriteRecipeBanner-C8F2JUyu.js";
import { I as IconShoppingBag } from "./IconShoppingBag-CjMfLdtN.js";
import { _ as _sfc_main$b } from "./VPagination-cbnzOOCr.js";
import { _ as _sfc_main$d } from "./VShare-C36WNIjH.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, d as _sfc_main$6 } from "./Tabs-_owbj9IT.js";
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
import "./IconChefHat-CbLzs3Yv.js";
import "./getFormattedTime-DfpF6FCc.js";
import "primevue/tab";
import "primevue/tablist";
import "primevue/tabpanel";
import "primevue/tabpanels";
import "primevue/tabs";
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  ...{
    layout: _sfc_main$1
  },
  __name: "ProfileFavorite",
  __ssrInlineRender: true,
  props: {
    products: {},
    recipes: {},
    recipeWhiteListBanner: {},
    productWhiteListBanner: {}
  },
  setup(__props) {
    const props = __props;
    const activeTab = vueExports.ref("0");
    if (route().params.tab === "recipes") {
      activeTab.value = "1";
    }
    const pageContent = vueExports.useTemplateRef("favorite-page");
    const onPageUpdate = async () => {
      var _a;
      (_a = pageContent.value) == null ? void 0 : _a.scrollIntoView({
        behavior: "smooth"
      });
    };
    const currentPage = vueExports.ref(1);
    const perPage = vueExports.computed(() => {
      if (activeTab.value === "0") {
        return currentPage.value === 1 ? 10 : 12;
      }
      if (activeTab.value === "1") {
        return currentPage.value === 1 ? 11 : 12;
      }
      return 12;
    });
    const paginatedProducts = vueExports.computed(() => {
      const start = (currentPage.value - 1) * perPage.value;
      const end = start + perPage.value;
      return props.products.slice(start, end);
    });
    const paginatedRecipes = vueExports.computed(() => {
      const start = (currentPage.value - 1) * perPage.value;
      const end = start + perPage.value;
      return props.recipes.slice(start, end);
    });
    vueExports.watch(
      () => activeTab,
      () => {
        currentPage.value = 1;
      },
      { immediate: true, deep: true }
    );
    const { isMobile } = useScreenSize();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        ref: "favorite-page",
        class: "w-full max-md:p-6"
      }, _attrs))} data-v-b1e0fd4f><h1 class="text-default-bold" data-v-b1e0fd4f>Избранное</h1>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
        value: activeTab.value,
        "onUpdate:value": ($event) => activeTab.value = $event,
        class: "mt-8"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, null, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                    value: "0",
                    class: "flex basis-1/2 items-center justify-center gap-2"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconShoppingBag), null, null, _parent4, _scopeId3));
                        _push4(`<span data-v-b1e0fd4f${_scopeId3}>Товары</span>`);
                      } else {
                        return [
                          vueExports.createVNode(vueExports.unref(IconShoppingBag)),
                          vueExports.createVNode("span", null, "Товары")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                    value: "1",
                    class: "flex basis-1/2 items-center justify-center gap-2"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconBookOpen), null, null, _parent4, _scopeId3));
                        _push4(`<span data-v-b1e0fd4f${_scopeId3}>Рецепты</span>`);
                      } else {
                        return [
                          vueExports.createVNode(vueExports.unref(IconBookOpen)),
                          vueExports.createVNode("span", null, "Рецепты")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_sfc_main$4, {
                      value: "0",
                      class: "flex basis-1/2 items-center justify-center gap-2"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(vueExports.unref(IconShoppingBag)),
                        vueExports.createVNode("span", null, "Товары")
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_sfc_main$4, {
                      value: "1",
                      class: "flex basis-1/2 items-center justify-center gap-2"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(vueExports.unref(IconBookOpen)),
                        vueExports.createVNode("span", null, "Рецепты")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, null, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, { value: "0" }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (_ctx.products.length < 1) {
                          _push4(`<div class="bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15" data-v-b1e0fd4f${_scopeId3}><div class="flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15" data-v-b1e0fd4f${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$7), {
                            src: "/images/profile/HeartRotated.png",
                            alt: "heart",
                            class: "max-md:-mt-6 lg:ml-40 xl:scale-115",
                            height: vueExports.unref(isMobile) ? "100px" : "200px"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="flex flex-col justify-between py-4 max-md:items-center lg:max-w-[615px]" data-v-b1e0fd4f${_scopeId3}><p class="text-default-medium md:text-heavy-medium max-md:text-center" data-v-b1e0fd4f${_scopeId3}>Здесь будут подборки из понравившихся вам товаров</p>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                            href: _ctx.route("catalog.index")
                          }, {
                            default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                                  label: "В каталог",
                                  class: "w-fit max-md:mt-6"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(VButton), {
                                    label: "В каталог",
                                    class: "w-fit max-md:mt-6"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div></div>`);
                        } else {
                          _push4(`<!--[--><div class="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8" data-v-b1e0fd4f${_scopeId3}><!--[-->`);
                          serverRenderer_cjs_prodExports.ssrRenderList(paginatedProducts.value, (product, index) => {
                            _push4(`<!--[-->`);
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ProductCard), {
                              id: product.id,
                              "has-gift": product.is_have_gift,
                              title: product.name,
                              slug: product.slug,
                              images: product.images.map((i) => i.path),
                              weight: product.weight,
                              description: product.short_description,
                              "is-favorite": product.is_wishlist,
                              categories: product.tags.map((b) => b.name) ?? [],
                              unit: product.weight_type,
                              price: Number(product.sale_price) ?? 0,
                              "price-unit": product.price_type,
                              "old-price": Number(product.price) ?? 0,
                              cashback_percent: product.cashback_percent
                            }, {
                              favoriteButton: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$9), {
                                    id: product.id,
                                    "initial-value": product.is_wishlist
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    vueExports.createVNode(vueExports.unref(_sfc_main$9), {
                                      id: product.id,
                                      "initial-value": product.is_wishlist
                                    }, null, 8, ["id", "initial-value"])
                                  ];
                                }
                              }),
                              footer: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$8), {
                                    id: product.id,
                                    "count-in-cart": product.count_in_cart,
                                    quantity: product.quantity
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                      id: product.id,
                                      "count-in-cart": product.count_in_cart,
                                      quantity: product.quantity
                                    }, null, 8, ["id", "count-in-cart", "quantity"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            if (index === 5 && currentPage.value === 1) {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$a, vueExports.mergeProps({ ref_for: true }, _ctx.productWhiteListBanner[0]), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`<!--]-->`);
                          });
                          _push4(`<!--]-->`);
                          if (paginatedProducts.value.length < 6 && currentPage.value === 1) {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$a, _ctx.productWhiteListBanner[0], null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$b), {
                            modelValue: currentPage.value,
                            "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                            "per-page": perPage.value,
                            "total-count": _ctx.products.length,
                            class: "mx-auto mt-8 justify-center"
                          }, null, _parent4, _scopeId3));
                          _push4(`<!--]-->`);
                        }
                      } else {
                        return [
                          _ctx.products.length < 1 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                          }, [
                            vueExports.createVNode("div", { class: "flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15" }, [
                              vueExports.createVNode(vueExports.unref(_sfc_main$7), {
                                src: "/images/profile/HeartRotated.png",
                                alt: "heart",
                                class: "max-md:-mt-6 lg:ml-40 xl:scale-115",
                                height: vueExports.unref(isMobile) ? "100px" : "200px"
                              }, null, 8, ["height"]),
                              vueExports.createVNode("div", { class: "flex flex-col justify-between py-4 max-md:items-center lg:max-w-[615px]" }, [
                                vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "Здесь будут подборки из понравившихся вам товаров"),
                                vueExports.createVNode(vueExports.unref(link_default), {
                                  href: _ctx.route("catalog.index")
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(VButton), {
                                      label: "В каталог",
                                      class: "w-fit max-md:mt-6"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ])
                            ])
                          ])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                            vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8" }, [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedProducts.value, (product, index) => {
                                return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                  key: product.id
                                }, [
                                  vueExports.createVNode(vueExports.unref(ProductCard), {
                                    id: product.id,
                                    "has-gift": product.is_have_gift,
                                    title: product.name,
                                    slug: product.slug,
                                    images: product.images.map((i) => i.path),
                                    weight: product.weight,
                                    description: product.short_description,
                                    "is-favorite": product.is_wishlist,
                                    categories: product.tags.map((b) => b.name) ?? [],
                                    unit: product.weight_type,
                                    price: Number(product.sale_price) ?? 0,
                                    "price-unit": product.price_type,
                                    "old-price": Number(product.price) ?? 0,
                                    cashback_percent: product.cashback_percent
                                  }, {
                                    favoriteButton: vueExports.withCtx(() => [
                                      vueExports.createVNode(vueExports.unref(_sfc_main$9), {
                                        id: product.id,
                                        "initial-value": product.is_wishlist
                                      }, null, 8, ["id", "initial-value"])
                                    ]),
                                    footer: vueExports.withCtx(() => [
                                      vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                        id: product.id,
                                        "count-in-cart": product.count_in_cart,
                                        quantity: product.quantity
                                      }, null, 8, ["id", "count-in-cart", "quantity"])
                                    ]),
                                    _: 2
                                  }, 1032, ["id", "has-gift", "title", "slug", "images", "weight", "description", "is-favorite", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]),
                                  index === 5 && currentPage.value === 1 ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$a, vueExports.mergeProps({
                                    key: 0,
                                    ref_for: true
                                  }, _ctx.productWhiteListBanner[0]), null, 16)) : vueExports.createCommentVNode("", true)
                                ], 64);
                              }), 128)),
                              paginatedProducts.value.length < 6 && currentPage.value === 1 ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$a, vueExports.mergeProps({ key: 0 }, _ctx.productWhiteListBanner[0]), null, 16)) : vueExports.createCommentVNode("", true)
                            ]),
                            vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                              modelValue: currentPage.value,
                              "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                              "per-page": perPage.value,
                              "total-count": _ctx.products.length,
                              class: "mx-auto mt-8 justify-center"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "per-page", "total-count"])
                          ], 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, { value: "1" }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (_ctx.recipes.length < 1) {
                          _push4(`<div class="bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15" data-v-b1e0fd4f${_scopeId3}><div class="flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15" data-v-b1e0fd4f${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$7), {
                            src: "/images/profile/Grill.webp",
                            alt: "heart",
                            class: "scale-130 max-md:-mt-6 lg:ml-40 xl:scale-150",
                            height: vueExports.unref(isMobile) ? "100px" : "200px"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="flex flex-col justify-between py-4 max-md:items-center lg:max-w-[615px]" data-v-b1e0fd4f${_scopeId3}><p class="text-default-medium md:text-heavy-medium max-md:text-center" data-v-b1e0fd4f${_scopeId3}>Здесь будут подборки из понравившихся вам рецептов</p>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                            href: _ctx.route("recipe.index")
                          }, {
                            default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                                  label: "К рецептам",
                                  class: "w-fit max-md:mt-6"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(VButton), {
                                    label: "К рецептам",
                                    class: "w-fit max-md:mt-6"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div></div>`);
                        } else {
                          _push4(`<!--[--><div class="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6" data-v-b1e0fd4f${_scopeId3}><!--[-->`);
                          serverRenderer_cjs_prodExports.ssrRenderList(paginatedRecipes.value, (recipe, index) => {
                            _push4(`<!--[-->`);
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$c), {
                              id: recipe.id,
                              title: recipe.title,
                              description: recipe.mini_description,
                              difficulty: recipe.difficult,
                              portions: recipe.number_of_persons,
                              "cook-time": recipe.cooking_time_minutes,
                              image: recipe.image.path,
                              "is-favorite": recipe.is_wishlist
                            }, {
                              actions: vueExports.withCtx(({ isFavorite }, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$9), {
                                    id: recipe.id,
                                    "initial-value": isFavorite,
                                    "item-type": "recipe"
                                  }, null, _parent5, _scopeId4));
                                  _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$d), {
                                    url: _ctx.route("recipe.show", { recipe: recipe.id })
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    vueExports.createVNode(vueExports.unref(_sfc_main$9), {
                                      id: recipe.id,
                                      "initial-value": isFavorite,
                                      "item-type": "recipe"
                                    }, null, 8, ["id", "initial-value"]),
                                    vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                                      url: _ctx.route("recipe.show", { recipe: recipe.id })
                                    }, null, 8, ["url"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            if (index === 5 && currentPage.value === 1) {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$e, vueExports.mergeProps({ ref_for: true }, _ctx.recipeWhiteListBanner[0]), null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`<!--]-->`);
                          });
                          _push4(`<!--]-->`);
                          if (paginatedRecipes.value.length < 6 && currentPage.value === 1) {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$e, _ctx.recipeWhiteListBanner[0], null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$b), {
                            modelValue: currentPage.value,
                            "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                            "per-page": perPage.value,
                            "total-count": _ctx.recipes.length,
                            class: "mx-auto mt-8 justify-center"
                          }, null, _parent4, _scopeId3));
                          _push4(`<!--]-->`);
                        }
                      } else {
                        return [
                          _ctx.recipes.length < 1 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                          }, [
                            vueExports.createVNode("div", { class: "flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15" }, [
                              vueExports.createVNode(vueExports.unref(_sfc_main$7), {
                                src: "/images/profile/Grill.webp",
                                alt: "heart",
                                class: "scale-130 max-md:-mt-6 lg:ml-40 xl:scale-150",
                                height: vueExports.unref(isMobile) ? "100px" : "200px"
                              }, null, 8, ["height"]),
                              vueExports.createVNode("div", { class: "flex flex-col justify-between py-4 max-md:items-center lg:max-w-[615px]" }, [
                                vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "Здесь будут подборки из понравившихся вам рецептов"),
                                vueExports.createVNode(vueExports.unref(link_default), {
                                  href: _ctx.route("recipe.index")
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(VButton), {
                                      label: "К рецептам",
                                      class: "w-fit max-md:mt-6"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ])
                            ])
                          ])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                            vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6" }, [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedRecipes.value, (recipe, index) => {
                                return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                  key: recipe.id
                                }, [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$c), {
                                    id: recipe.id,
                                    title: recipe.title,
                                    description: recipe.mini_description,
                                    difficulty: recipe.difficult,
                                    portions: recipe.number_of_persons,
                                    "cook-time": recipe.cooking_time_minutes,
                                    image: recipe.image.path,
                                    "is-favorite": recipe.is_wishlist
                                  }, {
                                    actions: vueExports.withCtx(({ isFavorite }) => [
                                      vueExports.createVNode(vueExports.unref(_sfc_main$9), {
                                        id: recipe.id,
                                        "initial-value": isFavorite,
                                        "item-type": "recipe"
                                      }, null, 8, ["id", "initial-value"]),
                                      vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                                        url: _ctx.route("recipe.show", { recipe: recipe.id })
                                      }, null, 8, ["url"])
                                    ]),
                                    _: 2
                                  }, 1032, ["id", "title", "description", "difficulty", "portions", "cook-time", "image", "is-favorite"]),
                                  index === 5 && currentPage.value === 1 ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$e, vueExports.mergeProps({
                                    key: 0,
                                    ref_for: true
                                  }, _ctx.recipeWhiteListBanner[0]), null, 16)) : vueExports.createCommentVNode("", true)
                                ], 64);
                              }), 128)),
                              paginatedRecipes.value.length < 6 && currentPage.value === 1 ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$e, vueExports.mergeProps({ key: 0 }, _ctx.recipeWhiteListBanner[0]), null, 16)) : vueExports.createCommentVNode("", true)
                            ]),
                            vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                              modelValue: currentPage.value,
                              "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                              "per-page": perPage.value,
                              "total-count": _ctx.recipes.length,
                              class: "mx-auto mt-8 justify-center"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "per-page", "total-count"])
                          ], 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_sfc_main$6, { value: "0" }, {
                      default: vueExports.withCtx(() => [
                        _ctx.products.length < 1 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 0,
                          class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                        }, [
                          vueExports.createVNode("div", { class: "flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15" }, [
                            vueExports.createVNode(vueExports.unref(_sfc_main$7), {
                              src: "/images/profile/HeartRotated.png",
                              alt: "heart",
                              class: "max-md:-mt-6 lg:ml-40 xl:scale-115",
                              height: vueExports.unref(isMobile) ? "100px" : "200px"
                            }, null, 8, ["height"]),
                            vueExports.createVNode("div", { class: "flex flex-col justify-between py-4 max-md:items-center lg:max-w-[615px]" }, [
                              vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "Здесь будут подборки из понравившихся вам товаров"),
                              vueExports.createVNode(vueExports.unref(link_default), {
                                href: _ctx.route("catalog.index")
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(VButton), {
                                    label: "В каталог",
                                    class: "w-fit max-md:mt-6"
                                  })
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ])
                        ])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                          vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8" }, [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedProducts.value, (product, index) => {
                              return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                key: product.id
                              }, [
                                vueExports.createVNode(vueExports.unref(ProductCard), {
                                  id: product.id,
                                  "has-gift": product.is_have_gift,
                                  title: product.name,
                                  slug: product.slug,
                                  images: product.images.map((i) => i.path),
                                  weight: product.weight,
                                  description: product.short_description,
                                  "is-favorite": product.is_wishlist,
                                  categories: product.tags.map((b) => b.name) ?? [],
                                  unit: product.weight_type,
                                  price: Number(product.sale_price) ?? 0,
                                  "price-unit": product.price_type,
                                  "old-price": Number(product.price) ?? 0,
                                  cashback_percent: product.cashback_percent
                                }, {
                                  favoriteButton: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(_sfc_main$9), {
                                      id: product.id,
                                      "initial-value": product.is_wishlist
                                    }, null, 8, ["id", "initial-value"])
                                  ]),
                                  footer: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                      id: product.id,
                                      "count-in-cart": product.count_in_cart,
                                      quantity: product.quantity
                                    }, null, 8, ["id", "count-in-cart", "quantity"])
                                  ]),
                                  _: 2
                                }, 1032, ["id", "has-gift", "title", "slug", "images", "weight", "description", "is-favorite", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]),
                                index === 5 && currentPage.value === 1 ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$a, vueExports.mergeProps({
                                  key: 0,
                                  ref_for: true
                                }, _ctx.productWhiteListBanner[0]), null, 16)) : vueExports.createCommentVNode("", true)
                              ], 64);
                            }), 128)),
                            paginatedProducts.value.length < 6 && currentPage.value === 1 ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$a, vueExports.mergeProps({ key: 0 }, _ctx.productWhiteListBanner[0]), null, 16)) : vueExports.createCommentVNode("", true)
                          ]),
                          vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                            modelValue: currentPage.value,
                            "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                            "per-page": perPage.value,
                            "total-count": _ctx.products.length,
                            class: "mx-auto mt-8 justify-center"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "per-page", "total-count"])
                        ], 64))
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_sfc_main$6, { value: "1" }, {
                      default: vueExports.withCtx(() => [
                        _ctx.recipes.length < 1 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 0,
                          class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                        }, [
                          vueExports.createVNode("div", { class: "flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15" }, [
                            vueExports.createVNode(vueExports.unref(_sfc_main$7), {
                              src: "/images/profile/Grill.webp",
                              alt: "heart",
                              class: "scale-130 max-md:-mt-6 lg:ml-40 xl:scale-150",
                              height: vueExports.unref(isMobile) ? "100px" : "200px"
                            }, null, 8, ["height"]),
                            vueExports.createVNode("div", { class: "flex flex-col justify-between py-4 max-md:items-center lg:max-w-[615px]" }, [
                              vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "Здесь будут подборки из понравившихся вам рецептов"),
                              vueExports.createVNode(vueExports.unref(link_default), {
                                href: _ctx.route("recipe.index")
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(VButton), {
                                    label: "К рецептам",
                                    class: "w-fit max-md:mt-6"
                                  })
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ])
                        ])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                          vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6" }, [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedRecipes.value, (recipe, index) => {
                              return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                key: recipe.id
                              }, [
                                vueExports.createVNode(vueExports.unref(_sfc_main$c), {
                                  id: recipe.id,
                                  title: recipe.title,
                                  description: recipe.mini_description,
                                  difficulty: recipe.difficult,
                                  portions: recipe.number_of_persons,
                                  "cook-time": recipe.cooking_time_minutes,
                                  image: recipe.image.path,
                                  "is-favorite": recipe.is_wishlist
                                }, {
                                  actions: vueExports.withCtx(({ isFavorite }) => [
                                    vueExports.createVNode(vueExports.unref(_sfc_main$9), {
                                      id: recipe.id,
                                      "initial-value": isFavorite,
                                      "item-type": "recipe"
                                    }, null, 8, ["id", "initial-value"]),
                                    vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                                      url: _ctx.route("recipe.show", { recipe: recipe.id })
                                    }, null, 8, ["url"])
                                  ]),
                                  _: 2
                                }, 1032, ["id", "title", "description", "difficulty", "portions", "cook-time", "image", "is-favorite"]),
                                index === 5 && currentPage.value === 1 ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$e, vueExports.mergeProps({
                                  key: 0,
                                  ref_for: true
                                }, _ctx.recipeWhiteListBanner[0]), null, 16)) : vueExports.createCommentVNode("", true)
                              ], 64);
                            }), 128)),
                            paginatedRecipes.value.length < 6 && currentPage.value === 1 ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$e, vueExports.mergeProps({ key: 0 }, _ctx.recipeWhiteListBanner[0]), null, 16)) : vueExports.createCommentVNode("", true)
                          ]),
                          vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                            modelValue: currentPage.value,
                            "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                            "per-page": perPage.value,
                            "total-count": _ctx.recipes.length,
                            class: "mx-auto mt-8 justify-center"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "per-page", "total-count"])
                        ], 64))
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$3, null, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_sfc_main$4, {
                    value: "0",
                    class: "flex basis-1/2 items-center justify-center gap-2"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(vueExports.unref(IconShoppingBag)),
                      vueExports.createVNode("span", null, "Товары")
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_sfc_main$4, {
                    value: "1",
                    class: "flex basis-1/2 items-center justify-center gap-2"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(vueExports.unref(IconBookOpen)),
                      vueExports.createVNode("span", null, "Рецепты")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              vueExports.createVNode(_sfc_main$5, null, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_sfc_main$6, { value: "0" }, {
                    default: vueExports.withCtx(() => [
                      _ctx.products.length < 1 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                      }, [
                        vueExports.createVNode("div", { class: "flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15" }, [
                          vueExports.createVNode(vueExports.unref(_sfc_main$7), {
                            src: "/images/profile/HeartRotated.png",
                            alt: "heart",
                            class: "max-md:-mt-6 lg:ml-40 xl:scale-115",
                            height: vueExports.unref(isMobile) ? "100px" : "200px"
                          }, null, 8, ["height"]),
                          vueExports.createVNode("div", { class: "flex flex-col justify-between py-4 max-md:items-center lg:max-w-[615px]" }, [
                            vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "Здесь будут подборки из понравившихся вам товаров"),
                            vueExports.createVNode(vueExports.unref(link_default), {
                              href: _ctx.route("catalog.index")
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(VButton), {
                                  label: "В каталог",
                                  class: "w-fit max-md:mt-6"
                                })
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])
                        ])
                      ])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                        vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8" }, [
                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedProducts.value, (product, index) => {
                            return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                              key: product.id
                            }, [
                              vueExports.createVNode(vueExports.unref(ProductCard), {
                                id: product.id,
                                "has-gift": product.is_have_gift,
                                title: product.name,
                                slug: product.slug,
                                images: product.images.map((i) => i.path),
                                weight: product.weight,
                                description: product.short_description,
                                "is-favorite": product.is_wishlist,
                                categories: product.tags.map((b) => b.name) ?? [],
                                unit: product.weight_type,
                                price: Number(product.sale_price) ?? 0,
                                "price-unit": product.price_type,
                                "old-price": Number(product.price) ?? 0,
                                cashback_percent: product.cashback_percent
                              }, {
                                favoriteButton: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$9), {
                                    id: product.id,
                                    "initial-value": product.is_wishlist
                                  }, null, 8, ["id", "initial-value"])
                                ]),
                                footer: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                    id: product.id,
                                    "count-in-cart": product.count_in_cart,
                                    quantity: product.quantity
                                  }, null, 8, ["id", "count-in-cart", "quantity"])
                                ]),
                                _: 2
                              }, 1032, ["id", "has-gift", "title", "slug", "images", "weight", "description", "is-favorite", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]),
                              index === 5 && currentPage.value === 1 ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$a, vueExports.mergeProps({
                                key: 0,
                                ref_for: true
                              }, _ctx.productWhiteListBanner[0]), null, 16)) : vueExports.createCommentVNode("", true)
                            ], 64);
                          }), 128)),
                          paginatedProducts.value.length < 6 && currentPage.value === 1 ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$a, vueExports.mergeProps({ key: 0 }, _ctx.productWhiteListBanner[0]), null, 16)) : vueExports.createCommentVNode("", true)
                        ]),
                        vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                          modelValue: currentPage.value,
                          "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                          "per-page": perPage.value,
                          "total-count": _ctx.products.length,
                          class: "mx-auto mt-8 justify-center"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "per-page", "total-count"])
                      ], 64))
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_sfc_main$6, { value: "1" }, {
                    default: vueExports.withCtx(() => [
                      _ctx.recipes.length < 1 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                      }, [
                        vueExports.createVNode("div", { class: "flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15" }, [
                          vueExports.createVNode(vueExports.unref(_sfc_main$7), {
                            src: "/images/profile/Grill.webp",
                            alt: "heart",
                            class: "scale-130 max-md:-mt-6 lg:ml-40 xl:scale-150",
                            height: vueExports.unref(isMobile) ? "100px" : "200px"
                          }, null, 8, ["height"]),
                          vueExports.createVNode("div", { class: "flex flex-col justify-between py-4 max-md:items-center lg:max-w-[615px]" }, [
                            vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "Здесь будут подборки из понравившихся вам рецептов"),
                            vueExports.createVNode(vueExports.unref(link_default), {
                              href: _ctx.route("recipe.index")
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(VButton), {
                                  label: "К рецептам",
                                  class: "w-fit max-md:mt-6"
                                })
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])
                        ])
                      ])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                        vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6" }, [
                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedRecipes.value, (recipe, index) => {
                            return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                              key: recipe.id
                            }, [
                              vueExports.createVNode(vueExports.unref(_sfc_main$c), {
                                id: recipe.id,
                                title: recipe.title,
                                description: recipe.mini_description,
                                difficulty: recipe.difficult,
                                portions: recipe.number_of_persons,
                                "cook-time": recipe.cooking_time_minutes,
                                image: recipe.image.path,
                                "is-favorite": recipe.is_wishlist
                              }, {
                                actions: vueExports.withCtx(({ isFavorite }) => [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$9), {
                                    id: recipe.id,
                                    "initial-value": isFavorite,
                                    "item-type": "recipe"
                                  }, null, 8, ["id", "initial-value"]),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                                    url: _ctx.route("recipe.show", { recipe: recipe.id })
                                  }, null, 8, ["url"])
                                ]),
                                _: 2
                              }, 1032, ["id", "title", "description", "difficulty", "portions", "cook-time", "image", "is-favorite"]),
                              index === 5 && currentPage.value === 1 ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$e, vueExports.mergeProps({
                                key: 0,
                                ref_for: true
                              }, _ctx.recipeWhiteListBanner[0]), null, 16)) : vueExports.createCommentVNode("", true)
                            ], 64);
                          }), 128)),
                          paginatedRecipes.value.length < 6 && currentPage.value === 1 ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$e, vueExports.mergeProps({ key: 0 }, _ctx.recipeWhiteListBanner[0]), null, 16)) : vueExports.createCommentVNode("", true)
                        ]),
                        vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                          modelValue: currentPage.value,
                          "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                          "per-page": perPage.value,
                          "total-count": _ctx.recipes.length,
                          class: "mx-auto mt-8 justify-center"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "per-page", "total-count"])
                      ], 64))
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/profile/profile-favorite/ui/ProfileFavorite.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProfileFavorite = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b1e0fd4f"]]);
export {
  ProfileFavorite as default
};
