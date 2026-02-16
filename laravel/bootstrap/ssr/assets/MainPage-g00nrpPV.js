import { v as vueExports, ah as MainLayout, u as useScreenSize, s as serverRenderer_cjs_prodExports, h as head_default, V as VContainer, n as _sfc_main$1, l as link_default, a as VButton, r as VNavigationButton, k as _sfc_main$2, U as ProductCard, P as _sfc_main$3, W as _sfc_main$4, T, G as IconCaretRight, _ as _sfc_main$5, H as VScrollPanel } from "../ssr.js";
import { useI18n } from "vue-i18n";
import { _ as _sfc_main$7 } from "./RecipeCard-BgvuIkQ1.js";
import { _ as _sfc_main$8 } from "./VShare-C36WNIjH.js";
import { _ as _sfc_main$6 } from "./BonusCard-ahXj-8wJ.js";
import { router } from "@inertiajs/core";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "@vue/shared";
import "@vue/compiler-ssr";
import "node:stream";
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
import "./IconChefHat-CbLzs3Yv.js";
import "./getFormattedTime-DfpF6FCc.js";
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  ...{
    layout: MainLayout
  },
  __name: "MainPage",
  __ssrInlineRender: true,
  props: {
    auth: {},
    mainBanners: {},
    recommendedProducts: {},
    specialProducts: {},
    noveltyProducts: {},
    orderedProducts: {},
    comboPacks: {},
    comboPacksBanners: {},
    photoCategories: {},
    infoBanners: {},
    noveltyBanner: {},
    recipes: {},
    userBonusCard: {},
    seoData: {}
  },
  setup(__props) {
    const props = __props;
    const getGridClasses = vueExports.computed(() => {
      return props.photoCategories.map((_, index) => {
        if (isCategoriesMobile.value) {
          switch (index) {
            case 0:
              return "col-span-2 row-span-1";
            case 1:
              return "col-span-2";
            case 2:
              return "row-span-1 outline outline-text";
            case 3:
              return "col-span-1 col-start-1 row-start-4";
            case 4:
              return "col-span-1 outline outline-text";
            case 5:
              return "row-start-2 outline outline-text";
            case 6:
              return "row-start-2";
            case 7:
              return "col-span-2 row-start-5";
            case 8:
              return "col-span-1 row-span-1";
            default:
              return "";
          }
        } else if (isCategoriesTablet.value) {
          switch (index) {
            case 0:
              return "col-span-6 row-span-4";
            case 1:
              return "col-span-4 row-span-2 col-start-7 pb-8";
            case 2:
              return "col-span-5 row-span-2 col-start-11 outline outline-text pb-8";
            case 3:
              return "col-span-2 row-span-2 col-start-7 row-start-3";
            case 4:
              return "col-span-7 row-span-2 col-start-9 row-start-3 outline outline-text";
            case 5:
              return "col-span-5 row-span-3 col-start-11 row-start-5 outline outline-text";
            case 6:
              return "col-span-3 row-span-3 col-start-4 row-start-5";
            case 7:
              return "col-span-4 row-span-3 col-start-7 row-start-5";
            case 8:
              return "col-span-3 row-span-3 row-start-5 pb-8";
            default:
              return "";
          }
        } else {
          switch (index) {
            case 0:
              return "col-span-4 row-span-2";
            case 1:
              return "col-span-2 col-start-5";
            case 2:
              return "col-start-7 outline outline-text";
            case 3:
              return "col-start-8";
            case 4:
              return "col-span-2 col-start-9 outline outline-text";
            case 5:
              return "col-start-5 row-start-2 outline outline-text";
            case 6:
              return "col-start-6 row-start-2";
            case 7:
              return "col-span-2 col-start-7 row-start-2";
            case 8:
              return "col-span-2 col-start-9 row-start-2";
            default:
              return "";
          }
        }
      });
    });
    vueExports.onMounted(() => {
      const url = new URL(window.location.href);
      const scrollTarget = url.searchParams.get("scroll");
      if (scrollTarget === "novelty") {
        vueExports.nextTick(() => {
          const section = document.getElementById("noveltySection");
          if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      }
    });
    const { isMobile, isCategoriesMobile, isCategoriesTablet } = useScreenSize();
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (props.seoData) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(head_default), null, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<title${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(props.seoData.seo_title)}</title>`);
              if (props.seoData.seo_description) {
                _push2(`<meta name="description"${serverRenderer_cjs_prodExports.ssrRenderAttr("content", props.seoData.seo_description)}${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              if (props.seoData.seo_keywords) {
                _push2(`<meta name="keywords"${serverRenderer_cjs_prodExports.ssrRenderAttr("content", props.seoData.seo_keywords)}${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                vueExports.createVNode("title", null, vueExports.toDisplayString(props.seoData.seo_title), 1),
                props.seoData.seo_description ? (vueExports.openBlock(), vueExports.createBlock("meta", {
                  key: 0,
                  name: "description",
                  content: props.seoData.seo_description
                }, null, 8, ["content"])) : vueExports.createCommentVNode("", true),
                props.seoData.seo_keywords ? (vueExports.openBlock(), vueExports.createBlock("meta", {
                  key: 1,
                  name: "keywords",
                  content: props.seoData.seo_keywords
                }, null, 8, ["content"])) : vueExports.createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="text-text">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), null, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), null, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="relative overflow-hidden rounded-[40px]"${_scopeId2}><swiper-container space-between="32" loop="true"${serverRenderer_cjs_prodExports.ssrRenderAttr("navigation", {
                    nextEl: ".slider-next-main",
                    prevEl: ".slider-prev-main"
                  })}${_scopeId2}><!--[-->`);
                  serverRenderer_cjs_prodExports.ssrRenderList(_ctx.mainBanners, (banner, index) => {
                    _push3(`<swiper-slide${_scopeId2}><div class="relative h-100 rounded-[40px] bg-cover bg-bottom bg-no-repeat p-2 min-[900px]:p-8 md:bg-center" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({
                      backgroundImage: `url(${banner.image.path})`
                    })}"${_scopeId2}><div class="w-fit min-[900px]:relative"${_scopeId2}><div class="bg-text flex h-64 flex-col justify-between mask-[url(../../images/masks/for_main_mobile.svg)] mask-no-repeat p-3 max-[900px]:max-w-[305px] max-[900px]:mask-size-[305px_auto] min-[900px]:h-84 min-[900px]:w-184 min-[900px]:mask-[url(../../images/masks/for_main.svg)] min-[900px]:p-6"${_scopeId2}><div class="p-2 min-[900px]:mb-8"${_scopeId2}><div class="font-vast text-vast-additional min-[900px]:text-vast-title-bold mb-3 font-bold text-white uppercase"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(banner.title)}</div><span class="text-subsidiary-reg md:text-mob-small-reg text-white"${_scopeId2}>${banner.description ?? ""}</span></div>`);
                    if (banner.link_url && banner.button_text) {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                        href: banner.link_url
                      }, {
                        default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                              label: banner.button_text,
                              variant: "light",
                              class: "max-[900px]:!text-subsidiary-reg mb-6 w-fit max-[900px]:ml-2"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              vueExports.createVNode(vueExports.unref(VButton), {
                                label: banner.button_text,
                                variant: "light",
                                class: "max-[900px]:!text-subsidiary-reg mb-6 w-fit max-[900px]:ml-2"
                              }, null, 8, ["label"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="absolute right-15 bottom-6 z-100 flex w-[173px] items-center gap-1 max-[900px]:right-1/2 max-[900px]:bottom-4 max-[900px]:translate-x-1/2 max-[900px]:translate-y-1/2"${_scopeId2}><!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(_ctx.mainBanners.length, (j) => {
                      _push3(`<span style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ flexBasis: `${1 / _ctx.mainBanners.length * 100}%` })}" class="${serverRenderer_cjs_prodExports.ssrRenderClass([[j === index + 1 ? "bg-white" : "bg-[#D4D3D3]/50"], "rounded-20 block h-0.5"])}"${_scopeId2}></span>`);
                    });
                    _push3(`<!--]--></div></div></div></swiper-slide>`);
                  });
                  _push3(`<!--]--></swiper-container>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VNavigationButton), {
                    class: "absolute right-4 bottom-4 z-10 max-[900px]:hidden",
                    "slider-key": "main"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    vueExports.createVNode("div", { class: "relative overflow-hidden rounded-[40px]" }, [
                      vueExports.createVNode("swiper-container", {
                        "space-between": "32",
                        loop: "true",
                        navigation: {
                          nextEl: ".slider-next-main",
                          prevEl: ".slider-prev-main"
                        }
                      }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.mainBanners, (banner, index) => {
                          return vueExports.openBlock(), vueExports.createBlock("swiper-slide", {
                            key: banner.id
                          }, [
                            vueExports.createVNode("div", {
                              class: "relative h-100 rounded-[40px] bg-cover bg-bottom bg-no-repeat p-2 min-[900px]:p-8 md:bg-center",
                              style: {
                                backgroundImage: `url(${banner.image.path})`
                              }
                            }, [
                              vueExports.createVNode("div", { class: "w-fit min-[900px]:relative" }, [
                                vueExports.createVNode("div", { class: "bg-text flex h-64 flex-col justify-between mask-[url(../../images/masks/for_main_mobile.svg)] mask-no-repeat p-3 max-[900px]:max-w-[305px] max-[900px]:mask-size-[305px_auto] min-[900px]:h-84 min-[900px]:w-184 min-[900px]:mask-[url(../../images/masks/for_main.svg)] min-[900px]:p-6" }, [
                                  vueExports.createVNode("div", { class: "p-2 min-[900px]:mb-8" }, [
                                    vueExports.createVNode("div", { class: "font-vast text-vast-additional min-[900px]:text-vast-title-bold mb-3 font-bold text-white uppercase" }, vueExports.toDisplayString(banner.title), 1),
                                    vueExports.createVNode("span", {
                                      class: "text-subsidiary-reg md:text-mob-small-reg text-white",
                                      innerHTML: banner.description
                                    }, null, 8, ["innerHTML"])
                                  ]),
                                  banner.link_url && banner.button_text ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(link_default), {
                                    key: 0,
                                    href: banner.link_url
                                  }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(vueExports.unref(VButton), {
                                        label: banner.button_text,
                                        variant: "light",
                                        class: "max-[900px]:!text-subsidiary-reg mb-6 w-fit max-[900px]:ml-2"
                                      }, null, 8, ["label"])
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])) : vueExports.createCommentVNode("", true)
                                ]),
                                vueExports.createVNode("div", { class: "absolute right-15 bottom-6 z-100 flex w-[173px] items-center gap-1 max-[900px]:right-1/2 max-[900px]:bottom-4 max-[900px]:translate-x-1/2 max-[900px]:translate-y-1/2" }, [
                                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.mainBanners.length, (j) => {
                                    return vueExports.openBlock(), vueExports.createBlock("span", {
                                      key: j,
                                      style: { flexBasis: `${1 / _ctx.mainBanners.length * 100}%` },
                                      class: ["rounded-20 block h-0.5", [j === index + 1 ? "bg-white" : "bg-[#D4D3D3]/50"]]
                                    }, null, 6);
                                  }), 128))
                                ])
                              ])
                            ], 4)
                          ]);
                        }), 128))
                      ]),
                      vueExports.createVNode(vueExports.unref(VNavigationButton), {
                        class: "absolute right-4 bottom-4 z-10 max-[900px]:hidden",
                        "slider-key": "main"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (_ctx.specialProducts.length) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
                title: vueExports.unref(t)("main_page.special_offers"),
                class: "max-[640px]:!pr-0 md:mt-12"
              }, {
                headerAction: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-[640px]:mr-4"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      href: vueExports.unref(T)("promotion.index"),
                      class: "flex items-center gap-2"
                    }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("main_page.all"))}</span>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
                            width: "16px",
                            height: "16px"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("main_page.all")), 1),
                            vueExports.createVNode(vueExports.unref(IconCaretRight), {
                              width: "16px",
                              height: "16px"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-[640px]:mr-4" }, [
                        vueExports.createVNode(vueExports.unref(link_default), {
                          href: vueExports.unref(T)("promotion.index"),
                          class: "flex items-center gap-2"
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("main_page.all")), 1),
                            vueExports.createVNode(vueExports.unref(IconCaretRight), {
                              width: "16px",
                              height: "16px"
                            })
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ];
                  }
                }),
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                      slides: _ctx.specialProducts,
                      "slider-options": {
                        slidesPerView: 6,
                        spaceBetween: 32,
                        allowTouchMove: true
                      }
                    }, {
                      slide: vueExports.withCtx(({ slide }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ProductCard), {
                            id: slide.id,
                            key: `${slide.id}-${slide.count_in_cart}`,
                            "has-gift": slide.is_have_gift,
                            slug: slide.slug,
                            title: slide.name,
                            images: slide.images.map((i) => i.path),
                            weight: slide.weight,
                            description: slide.short_description,
                            "is-favorite": slide.is_wishlist,
                            "is-new": slide.is_new,
                            "degree-type": slide.degree_type,
                            "sale-percent": slide.sale_percent,
                            categories: slide.tags.map((b) => b.name) ?? [],
                            unit: slide.weight_type,
                            price: Number(slide.sale_price) ?? 0,
                            "price-unit": slide.price_type,
                            "old-price": Number(slide.price) ?? 0,
                            cashback_percent: slide.cashback_percent
                          }, {
                            favoriteButton: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
                                  id: slide.id,
                                  "initial-value": slide.is_wishlist
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                    id: slide.id,
                                    "initial-value": slide.is_wishlist
                                  }, null, 8, ["id", "initial-value"])
                                ];
                              }
                            }),
                            footer: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                                  id: slide.id,
                                  "count-in-cart": slide.count_in_cart,
                                  quantity: slide.quantity
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$3), {
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
                              key: `${slide.id}-${slide.count_in_cart}`,
                              "has-gift": slide.is_have_gift,
                              slug: slide.slug,
                              title: slide.name,
                              images: slide.images.map((i) => i.path),
                              weight: slide.weight,
                              description: slide.short_description,
                              "is-favorite": slide.is_wishlist,
                              "is-new": slide.is_new,
                              "degree-type": slide.degree_type,
                              "sale-percent": slide.sale_percent,
                              categories: slide.tags.map((b) => b.name) ?? [],
                              unit: slide.weight_type,
                              price: Number(slide.sale_price) ?? 0,
                              "price-unit": slide.price_type,
                              "old-price": Number(slide.price) ?? 0,
                              cashback_percent: slide.cashback_percent
                            }, {
                              favoriteButton: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                  id: slide.id,
                                  "initial-value": slide.is_wishlist
                                }, null, 8, ["id", "initial-value"])
                              ]),
                              footer: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                                  id: slide.id,
                                  "count-in-cart": slide.count_in_cart,
                                  quantity: slide.quantity
                                }, null, 8, ["id", "count-in-cart", "quantity"])
                              ]),
                              _: 2
                            }, 1032, ["id", "has-gift", "slug", "title", "images", "weight", "description", "is-favorite", "is-new", "degree-type", "sale-percent", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                        slides: _ctx.specialProducts,
                        "slider-options": {
                          slidesPerView: 6,
                          spaceBetween: 32,
                          allowTouchMove: true
                        }
                      }, {
                        slide: vueExports.withCtx(({ slide }) => [
                          (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ProductCard), {
                            id: slide.id,
                            key: `${slide.id}-${slide.count_in_cart}`,
                            "has-gift": slide.is_have_gift,
                            slug: slide.slug,
                            title: slide.name,
                            images: slide.images.map((i) => i.path),
                            weight: slide.weight,
                            description: slide.short_description,
                            "is-favorite": slide.is_wishlist,
                            "is-new": slide.is_new,
                            "degree-type": slide.degree_type,
                            "sale-percent": slide.sale_percent,
                            categories: slide.tags.map((b) => b.name) ?? [],
                            unit: slide.weight_type,
                            price: Number(slide.sale_price) ?? 0,
                            "price-unit": slide.price_type,
                            "old-price": Number(slide.price) ?? 0,
                            cashback_percent: slide.cashback_percent
                          }, {
                            favoriteButton: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                id: slide.id,
                                "initial-value": slide.is_wishlist
                              }, null, 8, ["id", "initial-value"])
                            ]),
                            footer: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                                id: slide.id,
                                "count-in-cart": slide.count_in_cart,
                                quantity: slide.quantity
                              }, null, 8, ["id", "count-in-cart", "quantity"])
                            ]),
                            _: 2
                          }, 1032, ["id", "has-gift", "slug", "title", "images", "weight", "description", "is-favorite", "is-new", "degree-type", "sale-percent", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
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
            if (_ctx.recommendedProducts.length) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
                title: vueExports.unref(t)("main_page.recommended_products"),
                class: "bg-light-gray mt-6 max-[640px]:!pr-0 md:mt-12"
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                      slides: _ctx.recommendedProducts,
                      "slider-options": {
                        slidesPerView: 6,
                        spaceBetween: 32,
                        allowTouchMove: true
                      }
                    }, {
                      slide: vueExports.withCtx(({ slide }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ProductCard), {
                            id: slide.id,
                            key: slide.id,
                            slug: slide.slug,
                            "has-gift": slide.is_have_gift,
                            title: slide.name,
                            images: slide.images.map((i) => i.path),
                            weight: slide.weight,
                            description: slide.short_description,
                            "is-favorite": slide.is_wishlist,
                            "is-new": slide.is_new,
                            "degree-type": slide.degree_type,
                            "sale-percent": slide.sale_percent,
                            categories: slide.tags.map((b) => b.name) ?? [],
                            unit: slide.weight_type,
                            price: Number(slide.sale_price) ?? 0,
                            "price-unit": slide.price_type,
                            "old-price": Number(slide.price) ?? 0,
                            cashback_percent: slide.cashback_percent
                          }, {
                            favoriteButton: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
                                  id: slide.id,
                                  "initial-value": slide.is_wishlist
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                    id: slide.id,
                                    "initial-value": slide.is_wishlist
                                  }, null, 8, ["id", "initial-value"])
                                ];
                              }
                            }),
                            footer: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                                  id: slide.id,
                                  "count-in-cart": slide.count_in_cart,
                                  quantity: slide.quantity
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$3), {
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
                              slug: slide.slug,
                              "has-gift": slide.is_have_gift,
                              title: slide.name,
                              images: slide.images.map((i) => i.path),
                              weight: slide.weight,
                              description: slide.short_description,
                              "is-favorite": slide.is_wishlist,
                              "is-new": slide.is_new,
                              "degree-type": slide.degree_type,
                              "sale-percent": slide.sale_percent,
                              categories: slide.tags.map((b) => b.name) ?? [],
                              unit: slide.weight_type,
                              price: Number(slide.sale_price) ?? 0,
                              "price-unit": slide.price_type,
                              "old-price": Number(slide.price) ?? 0,
                              cashback_percent: slide.cashback_percent
                            }, {
                              favoriteButton: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                  id: slide.id,
                                  "initial-value": slide.is_wishlist
                                }, null, 8, ["id", "initial-value"])
                              ]),
                              footer: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                                  id: slide.id,
                                  "count-in-cart": slide.count_in_cart,
                                  quantity: slide.quantity
                                }, null, 8, ["id", "count-in-cart", "quantity"])
                              ]),
                              _: 2
                            }, 1032, ["id", "slug", "has-gift", "title", "images", "weight", "description", "is-favorite", "is-new", "degree-type", "sale-percent", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                        slides: _ctx.recommendedProducts,
                        "slider-options": {
                          slidesPerView: 6,
                          spaceBetween: 32,
                          allowTouchMove: true
                        }
                      }, {
                        slide: vueExports.withCtx(({ slide }) => [
                          (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ProductCard), {
                            id: slide.id,
                            key: slide.id,
                            slug: slide.slug,
                            "has-gift": slide.is_have_gift,
                            title: slide.name,
                            images: slide.images.map((i) => i.path),
                            weight: slide.weight,
                            description: slide.short_description,
                            "is-favorite": slide.is_wishlist,
                            "is-new": slide.is_new,
                            "degree-type": slide.degree_type,
                            "sale-percent": slide.sale_percent,
                            categories: slide.tags.map((b) => b.name) ?? [],
                            unit: slide.weight_type,
                            price: Number(slide.sale_price) ?? 0,
                            "price-unit": slide.price_type,
                            "old-price": Number(slide.price) ?? 0,
                            cashback_percent: slide.cashback_percent
                          }, {
                            favoriteButton: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                id: slide.id,
                                "initial-value": slide.is_wishlist
                              }, null, 8, ["id", "initial-value"])
                            ]),
                            footer: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                                id: slide.id,
                                "count-in-cart": slide.count_in_cart,
                                quantity: slide.quantity
                              }, null, 8, ["id", "count-in-cart", "quantity"])
                            ]),
                            _: 2
                          }, 1032, ["id", "slug", "has-gift", "title", "images", "weight", "description", "is-favorite", "is-new", "degree-type", "sale-percent", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
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
            if (_ctx.photoCategories.length) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
                title: vueExports.unref(t)("main_page.product_categories"),
                class: "mt-6 md:mt-12"
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (!vueExports.unref(isCategoriesMobile)) {
                      _push3(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass(["mt-8 grid gap-3", vueExports.unref(isCategoriesTablet) ? "grid-cols-11 grid-rows-6" : "grid-cols-10 grid-rows-[140px_140px]"])}"${_scopeId2}><!--[-->`);
                      serverRenderer_cjs_prodExports.ssrRenderList(_ctx.photoCategories, (category, index) => {
                        _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                          key: category.id,
                          href: `/catalog/?category=${category.category_slug}`,
                          class: [
                            getGridClasses.value[index],
                            "rounded-20 hover:outline-stroke overflow-hidden bg-cover bg-center bg-no-repeat transition-shadow duration-300 ease-in hover:shadow-xl hover:outline"
                          ],
                          style: { backgroundImage: `url('${category.desktop_photo}')` }
                        }, {
                          default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<h2 class="font-vast z-10 max-w-[201px] px-4 pt-4 font-bold uppercase" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ color: category.text_color, fontSize: category.desktop_font_size, lineHeight: category.desktop_line_height })}"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(category.name)}</h2>`);
                              if (category.description) {
                                _push4(`<p class="text-subsidiary-reg mt-1 max-w-[150px] pl-4"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(category.description)}</p>`);
                              } else {
                                _push4(`<!---->`);
                              }
                            } else {
                              return [
                                vueExports.createVNode("h2", {
                                  class: "font-vast z-10 max-w-[201px] px-4 pt-4 font-bold uppercase",
                                  style: { color: category.text_color, fontSize: category.desktop_font_size, lineHeight: category.desktop_line_height }
                                }, vueExports.toDisplayString(category.name), 5),
                                category.description ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                  key: 0,
                                  class: "text-subsidiary-reg mt-1 max-w-[150px] pl-4"
                                }, vueExports.toDisplayString(category.description), 1)) : vueExports.createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass(["mt-8 grid gap-3", "auto-rows-[140px] grid-cols-2"])}"${_scopeId2}><!--[-->`);
                      serverRenderer_cjs_prodExports.ssrRenderList(_ctx.photoCategories, (category, index) => {
                        _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                          key: category.id,
                          href: `/catalog/?category=${category.category_slug}`,
                          class: [
                            getGridClasses.value[index],
                            "rounded-20 hover:outline-stroke overflow-hidden bg-size-[100%_100%] bg-center bg-no-repeat transition-shadow duration-300 ease-in hover:shadow-xl hover:outline"
                          ],
                          style: { backgroundImage: `url('${category.mobile_photo}')` }
                        }, {
                          default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<h2 class="font-vast z-10 px-2 pt-2 font-bold uppercase" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ color: category.text_color, fontSize: category.mobile_font_size, lineHeight: category.mobile_line_height })}"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(category.name)}</h2>`);
                              if (category.description) {
                                _push4(`<p class="text-subsidiary-reg mt-1 max-w-[150px] pl-2"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(category.description)}</p>`);
                              } else {
                                _push4(`<!---->`);
                              }
                            } else {
                              return [
                                vueExports.createVNode("h2", {
                                  class: "font-vast z-10 px-2 pt-2 font-bold uppercase",
                                  style: { color: category.text_color, fontSize: category.mobile_font_size, lineHeight: category.mobile_line_height }
                                }, vueExports.toDisplayString(category.name), 5),
                                category.description ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                  key: 0,
                                  class: "text-subsidiary-reg mt-1 max-w-[150px] pl-2"
                                }, vueExports.toDisplayString(category.description), 1)) : vueExports.createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div>`);
                    }
                  } else {
                    return [
                      !vueExports.unref(isCategoriesMobile) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        class: ["mt-8 grid gap-3", vueExports.unref(isCategoriesTablet) ? "grid-cols-11 grid-rows-6" : "grid-cols-10 grid-rows-[140px_140px]"]
                      }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.photoCategories, (category, index) => {
                          return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(link_default), {
                            key: category.id,
                            href: `/catalog/?category=${category.category_slug}`,
                            class: [
                              getGridClasses.value[index],
                              "rounded-20 hover:outline-stroke overflow-hidden bg-cover bg-center bg-no-repeat transition-shadow duration-300 ease-in hover:shadow-xl hover:outline"
                            ],
                            style: { backgroundImage: `url('${category.desktop_photo}')` }
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode("h2", {
                                class: "font-vast z-10 max-w-[201px] px-4 pt-4 font-bold uppercase",
                                style: { color: category.text_color, fontSize: category.desktop_font_size, lineHeight: category.desktop_line_height }
                              }, vueExports.toDisplayString(category.name), 5),
                              category.description ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                key: 0,
                                class: "text-subsidiary-reg mt-1 max-w-[150px] pl-4"
                              }, vueExports.toDisplayString(category.description), 1)) : vueExports.createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1032, ["href", "class", "style"]);
                        }), 128))
                      ], 2)) : (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 1,
                        class: ["mt-8 grid gap-3", "auto-rows-[140px] grid-cols-2"]
                      }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.photoCategories, (category, index) => {
                          return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(link_default), {
                            key: category.id,
                            href: `/catalog/?category=${category.category_slug}`,
                            class: [
                              getGridClasses.value[index],
                              "rounded-20 hover:outline-stroke overflow-hidden bg-size-[100%_100%] bg-center bg-no-repeat transition-shadow duration-300 ease-in hover:shadow-xl hover:outline"
                            ],
                            style: { backgroundImage: `url('${category.mobile_photo}')` }
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode("h2", {
                                class: "font-vast z-10 px-2 pt-2 font-bold uppercase",
                                style: { color: category.text_color, fontSize: category.mobile_font_size, lineHeight: category.mobile_line_height }
                              }, vueExports.toDisplayString(category.name), 5),
                              category.description ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                key: 0,
                                class: "text-subsidiary-reg mt-1 max-w-[150px] pl-2"
                              }, vueExports.toDisplayString(category.description), 1)) : vueExports.createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1032, ["href", "class", "style"]);
                        }), 128))
                      ]))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.noveltyProducts.length) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
                id: "noveltySection",
                title: vueExports.unref(t)("main_page.novelty"),
                class: "mt-6 max-[640px]:!p-0 max-[640px]:!pl-6 md:mt-12"
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex flex-col gap-6 xl:flex-row"${_scopeId2}><div class="xl:w-[50%]"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                      slides: _ctx.noveltyProducts,
                      "slider-options": {
                        slidesPerView: 3,
                        spaceBetween: 32,
                        breakpoints: {
                          0: { slidesPerView: 1.7, spaceBetween: 8 },
                          640: { slidesPerView: 3, spaceBetween: 32 }
                        }
                      }
                    }, {
                      slide: vueExports.withCtx(({ slide }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ProductCard), {
                            id: slide.id,
                            key: slide.id,
                            "has-gift": slide.is_have_gift,
                            slug: slide.slug,
                            title: slide.name,
                            images: slide.images.map((i) => i.path),
                            weight: slide.weight,
                            "is-new": slide.is_new,
                            "sale-percent": slide.sale_percent,
                            description: slide.short_description,
                            "degree-type": slide.degree_type,
                            "is-favorite": slide.is_wishlist,
                            categories: slide.tags.map((b) => b.name) ?? [],
                            unit: slide.weight_type,
                            price: Number(slide.sale_price) ?? 0,
                            "price-unit": slide.price_type,
                            "old-price": Number(slide.price) ?? 0,
                            cashback_percent: slide.cashback_percent
                          }, {
                            favoriteButton: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
                                  id: slide.id,
                                  "initial-value": slide.is_wishlist
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                    id: slide.id,
                                    "initial-value": slide.is_wishlist
                                  }, null, 8, ["id", "initial-value"])
                                ];
                              }
                            }),
                            footer: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                                  id: slide.id,
                                  "count-in-cart": slide.count_in_cart,
                                  quantity: slide.quantity
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$3), {
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
                              "has-gift": slide.is_have_gift,
                              slug: slide.slug,
                              title: slide.name,
                              images: slide.images.map((i) => i.path),
                              weight: slide.weight,
                              "is-new": slide.is_new,
                              "sale-percent": slide.sale_percent,
                              description: slide.short_description,
                              "degree-type": slide.degree_type,
                              "is-favorite": slide.is_wishlist,
                              categories: slide.tags.map((b) => b.name) ?? [],
                              unit: slide.weight_type,
                              price: Number(slide.sale_price) ?? 0,
                              "price-unit": slide.price_type,
                              "old-price": Number(slide.price) ?? 0,
                              cashback_percent: slide.cashback_percent
                            }, {
                              favoriteButton: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                  id: slide.id,
                                  "initial-value": slide.is_wishlist
                                }, null, 8, ["id", "initial-value"])
                              ]),
                              footer: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                                  id: slide.id,
                                  "count-in-cart": slide.count_in_cart,
                                  quantity: slide.quantity
                                }, null, 8, ["id", "count-in-cart", "quantity"])
                              ]),
                              _: 2
                            }, 1032, ["id", "has-gift", "slug", "title", "images", "weight", "is-new", "sale-percent", "description", "degree-type", "is-favorite", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div><div class="bg-text mr-6 rounded-[40px] xl:w-[50%]"${_scopeId2}><div class="h-full sm:flex"${_scopeId2}><div class="p-6 sm:p-8"${_scopeId2}><div class="items flex flex-col gap-3 text-white sm:gap-4"${_scopeId2}><p class="text-subsidiary text-subsidiary-reg sm:text-mob-small-reg"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.noveltyBanner.addition_description)}</p><h3 class="font-vast text-vast-additional sm:text-vast-title-additional mb-3 font-bold uppercase"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.noveltyBanner.title)}</h3><p class="text-subsidiary-reg sm:text-mob-small-reg"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.noveltyBanner.description)}</p></div>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                      label: _ctx.noveltyBanner.button_text,
                      variant: "light",
                      class: "mt-4 max-sm:w-full sm:mt-6"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div><div${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                      class: "rounded-20 h-full w-[300px] overflow-hidden !object-contain max-sm:!h-[160px] max-sm:w-full",
                      height: "100%",
                      width: "100%",
                      src: _ctx.noveltyBanner.image.path,
                      alt: "steak image"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div></div></div>`);
                  } else {
                    return [
                      vueExports.createVNode("div", { class: "flex flex-col gap-6 xl:flex-row" }, [
                        vueExports.createVNode("div", { class: "xl:w-[50%]" }, [
                          vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                            slides: _ctx.noveltyProducts,
                            "slider-options": {
                              slidesPerView: 3,
                              spaceBetween: 32,
                              breakpoints: {
                                0: { slidesPerView: 1.7, spaceBetween: 8 },
                                640: { slidesPerView: 3, spaceBetween: 32 }
                              }
                            }
                          }, {
                            slide: vueExports.withCtx(({ slide }) => [
                              (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ProductCard), {
                                id: slide.id,
                                key: slide.id,
                                "has-gift": slide.is_have_gift,
                                slug: slide.slug,
                                title: slide.name,
                                images: slide.images.map((i) => i.path),
                                weight: slide.weight,
                                "is-new": slide.is_new,
                                "sale-percent": slide.sale_percent,
                                description: slide.short_description,
                                "degree-type": slide.degree_type,
                                "is-favorite": slide.is_wishlist,
                                categories: slide.tags.map((b) => b.name) ?? [],
                                unit: slide.weight_type,
                                price: Number(slide.sale_price) ?? 0,
                                "price-unit": slide.price_type,
                                "old-price": Number(slide.price) ?? 0,
                                cashback_percent: slide.cashback_percent
                              }, {
                                favoriteButton: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                    id: slide.id,
                                    "initial-value": slide.is_wishlist
                                  }, null, 8, ["id", "initial-value"])
                                ]),
                                footer: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                                    id: slide.id,
                                    "count-in-cart": slide.count_in_cart,
                                    quantity: slide.quantity
                                  }, null, 8, ["id", "count-in-cart", "quantity"])
                                ]),
                                _: 2
                              }, 1032, ["id", "has-gift", "slug", "title", "images", "weight", "is-new", "sale-percent", "description", "degree-type", "is-favorite", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
                            ]),
                            _: 1
                          }, 8, ["slides"])
                        ]),
                        vueExports.createVNode("div", { class: "bg-text mr-6 rounded-[40px] xl:w-[50%]" }, [
                          vueExports.createVNode("div", { class: "h-full sm:flex" }, [
                            vueExports.createVNode("div", { class: "p-6 sm:p-8" }, [
                              vueExports.createVNode("div", { class: "items flex flex-col gap-3 text-white sm:gap-4" }, [
                                vueExports.createVNode("p", { class: "text-subsidiary text-subsidiary-reg sm:text-mob-small-reg" }, vueExports.toDisplayString(_ctx.noveltyBanner.addition_description), 1),
                                vueExports.createVNode("h3", { class: "font-vast text-vast-additional sm:text-vast-title-additional mb-3 font-bold uppercase" }, vueExports.toDisplayString(_ctx.noveltyBanner.title), 1),
                                vueExports.createVNode("p", { class: "text-subsidiary-reg sm:text-mob-small-reg" }, vueExports.toDisplayString(_ctx.noveltyBanner.description), 1)
                              ]),
                              vueExports.createVNode(vueExports.unref(VButton), {
                                label: _ctx.noveltyBanner.button_text,
                                variant: "light",
                                class: "mt-4 max-sm:w-full sm:mt-6"
                              }, null, 8, ["label"])
                            ]),
                            vueExports.createVNode("div", null, [
                              vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                class: "rounded-20 h-full w-[300px] overflow-hidden !object-contain max-sm:!h-[160px] max-sm:w-full",
                                height: "100%",
                                width: "100%",
                                src: _ctx.noveltyBanner.image.path,
                                alt: "steak image"
                              }, null, 8, ["src"])
                            ])
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), null, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.auth.user ? "xl:grid-cols-[1.5fr_2fr_1.5fr]" : "sm:grid-cols-2 xl:grid-cols-3", "grid items-stretch gap-8 md:mt-12"])}"${_scopeId2}><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.auth.user ? "grid" : "grid-rows-2 sm:grid", "gap-8"])}"${_scopeId2}>`);
                  if (!_ctx.auth.user) {
                    _push3(`<div${_scopeId2}><h2 class="text-default-bold sm:text-heavy-bold"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("info_banners.reg_title"))}</h2><p class="text-subsidiary-reg sm:text-mob-small-reg mt-2"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("info_banners.reg_description"))}</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (vueExports.unref(isMobile) && !_ctx.auth.user) {
                    _push3(`<div class="rounded-20 bg-filling mt-6 p-4 sm:mt-0"${_scopeId2}><p class="text-mob-small-reg text-subsidiary"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("info_banners.loyalty_title"))}</p><h4 class="text-default-bold sm:text-heavy-bold mt-1"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("info_banners.loyalty_description_step_1"))}</h4><h4 class="text-default-bold sm:text-heavy-bold mt-2"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("info_banners.loyalty_description_step_2"))}</h4><p class="text-mob-small-reg mt-1"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("info_banners.loyalty_addition_description"))}</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (vueExports.unref(isMobile) && !_ctx.auth.user) {
                    _push3(`<div class="rounded-20 bg-filling relative mt-2 flex justify-end gap-4 overflow-hidden"${_scopeId2}><div class="absolute bottom-0 left-0 h-[270px] w-[300px] bg-cover bg-bottom-right bg-no-repeat" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({
                      backgroundImage: "url(/images/test-images/reg-info-estore.webp)",
                      transform: "translate(-20%, 30%)"
                    })}"${_scopeId2}></div><div class="ml-auto w-[65%] p-3"${_scopeId2}><div${_scopeId2}><h4 class="text-default-bold"${_scopeId2}>Интернет магазин</h4><p class="text-subsidiary-reg mt-2 sm:mt-0"${_scopeId2}>Авторизуйтесь чтобы получить доступ к программе CASHBACK</p></div>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                      label: "Регистрация",
                      class: "mt-6",
                      onClick: ($event) => vueExports.unref(router).get(vueExports.unref(T)("api.v1.auth-check"), {}, { preserveScroll: true })
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!vueExports.unref(isMobile) && !_ctx.auth.user) {
                    _push3(`<div class="rounded-20 bg-filling relative mt-2 flex gap-4 overflow-hidden sm:mt-0"${_scopeId2}><div class="absolute right-0 bottom-0 h-[390px] w-[350px] bg-cover bg-bottom max-xl:h-[250px] max-xl:w-[230px]" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({
                      backgroundImage: "url(/images/test-images/reg-info-estore.webp)",
                      transform: "translate(25%, 35%)"
                    })}"${_scopeId2}></div><div class="p-4 sm:w-[60%]"${_scopeId2}><div${_scopeId2}><h4 class="text-heavy-bold"${_scopeId2}>Интернет магазин</h4><p class="text-mob-small-reg mt-2 sm:mt-0"${_scopeId2}>Авторизуйтесь чтобы получить доступ к программе CASHBACK</p></div>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                      label: "Регистрация",
                      class: "mt-8",
                      onClick: ($event) => vueExports.unref(router).get(vueExports.unref(T)("api.v1.auth-check"), {}, { preserveScroll: true })
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else if (_ctx.auth.user) {
                    _push3(`<div${_scopeId2}><div class="flex h-full flex-col gap-6"${_scopeId2}><div${_scopeId2}><h2 class="text-default-bold sm:text-heavy-bold"${_scopeId2}>Здравствуйте, ${serverRenderer_cjs_prodExports.ssrInterpolate(!!_ctx.auth.user.name ? _ctx.auth.user.name : "Пользователь")}</h2><p class="text-subsidiary-reg sm:text-mob-small-reg text-subsidiary mt-2"${_scopeId2}>Москва и МО</p></div><div${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
                      "card-number": _ctx.userBonusCard.number,
                      "card-level": _ctx.userBonusCard.level,
                      cashback: _ctx.userBonusCard.cashback + "%",
                      "card-balance": _ctx.userBonusCard.amount
                    }, null, _parent3, _scopeId2));
                    {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (vueExports.unref(isMobile) && !_ctx.auth.user) {
                    _push3(`<div class="bg-text rounded-20 relative mt-2 overflow-hidden text-white sm:mt-0"${_scopeId2}><div class="absolute right-0 bottom-0 h-[200px] w-[200px] rotate-[-60deg] bg-cover bg-bottom sm:h-[220px] sm:w-[300px]" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({
                      backgroundImage: "url(/images/test-images/reg-info-for-companies.webp)",
                      transform: "translate(-5%, 40%)"
                    })}"${_scopeId2}></div><div class="relative"${_scopeId2}><div class="p-3"${_scopeId2}><h4 class="text-default-bold"${_scopeId2}>Для компаний</h4><p class="text-subsidiary-reg mt-2"${_scopeId2}>для HORECA</p>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), { href: "/page/contacts" }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                            label: "Подробнее",
                            variant: "light",
                            class: "mt-8"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode(vueExports.unref(VButton), {
                              label: "Подробнее",
                              variant: "light",
                              class: "mt-8"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  if (!vueExports.unref(isMobile) && !_ctx.auth.user) {
                    _push3(`<div class="grid-rows-2 gap-8 sm:grid"${_scopeId2}><div class="rounded-20 bg-filling p-4"${_scopeId2}><p class="text-mob-small-reg text-subsidiary"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("info_banners.loyalty_title"))}</p><h4 class="text-heavy-bold mt-1"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("info_banners.loyalty_description_step_1"))}</h4><h4 class="text-heavy-bold mt-2"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("info_banners.loyalty_description_step_2"))}</h4><p class="text-mob-small-reg mt-1"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("info_banners.loyalty_addition_description"))}</p></div><div class="bg-text rounded-20 relative overflow-hidden text-white"${_scopeId2}><div class="absolute right-0 bottom-0 h-[220px] w-[300px] rotate-[-60deg] bg-cover bg-bottom" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({
                      backgroundImage: "url(/images/test-images/reg-info-for-companies.webp)",
                      transform: "translate(-5%, 40%)"
                    })}"${_scopeId2}></div><div class="relative"${_scopeId2}><div class="p-4"${_scopeId2}><h4 class="text-heavy-bold"${_scopeId2}>Для компаний</h4><p class="text-mob-small-reg mt-2"${_scopeId2}>для HORECA</p>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), { href: "/page/contacts" }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                            label: "Подробнее",
                            variant: "light",
                            class: "mt-8"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode(vueExports.unref(VButton), {
                              label: "Подробнее",
                              variant: "light",
                              class: "mt-8"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div></div></div>`);
                  } else if (_ctx.auth.user) {
                    _push3(`<div class="bg-light-gray rounded-20 p-3 sm:p-4"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><h4 class="text-default-bold sm:text-heavy-bold"${_scopeId2}>Вы недавно заказывали</h4><div class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 text-nowrap transition-all duration-300 hover:text-white"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      href: vueExports.unref(T)("user.profile.orders_history"),
                      class: "flex items-center gap-2"
                    }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}>Все заказы</span>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
                            width: "16px",
                            height: "16px"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode("span", null, "Все заказы"),
                            vueExports.createVNode(vueExports.unref(IconCaretRight), {
                              width: "16px",
                              height: "16px"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div><div class="mt-4 space-y-2"${_scopeId2}>`);
                    if (_ctx.orderedProducts.length === 0) {
                      _push3(`<div class="my-4 flex items-start gap-8 md:items-center lg:my-26"${_scopeId2}>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                        src: "/images/test-images/EmptyCart.webp",
                        alt: "Package",
                        width: vueExports.unref(isMobile) ? "60px" : "124px"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div${_scopeId2}><p class="text-mob-small-medium md:text-default-medium"${_scopeId2}>Здесь покажем ваши заказы за последнее время</p>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                        href: vueExports.unref(T)("catalog.index")
                      }, {
                        default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                              label: "В каталог",
                              class: "mt-8"
                            }, null, _parent4, _scopeId3));
                          } else {
                            return [
                              vueExports.createVNode(vueExports.unref(VButton), {
                                label: "В каталог",
                                class: "mt-8"
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VScrollPanel), { class: "max-h-[305px]" }, {
                        default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            serverRenderer_cjs_prodExports.ssrRenderList(_ctx.orderedProducts, (product) => {
                              var _a;
                              _push4(`<article class="border-b-filling flex flex-col justify-between gap-4 border-b py-3 last:border-b-0 md:flex-row md:items-center"${_scopeId3}><div class="flex items-center gap-4"${_scopeId3}>`);
                              if ((_a = product.item.images[0]) == null ? void 0 : _a.path) {
                                _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                                  src: product.item.images[0].path,
                                  alt: "product_image",
                                  width: vueExports.unref(isMobile) ? "74px" : "116px",
                                  height: vueExports.unref(isMobile) ? "64px" : "80px",
                                  class: "flex-shrink-0",
                                  "img-classes": "rounded-lg"
                                }, null, _parent4, _scopeId3));
                              } else {
                                _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                                  src: "/images/productPlaceholder.png",
                                  alt: "productPlaceholder",
                                  width: vueExports.unref(isMobile) ? "74px" : "116px",
                                  height: vueExports.unref(isMobile) ? "64px" : "80px",
                                  class: "flex-shrink-0",
                                  "img-classes": "rounded-lg"
                                }, null, _parent4, _scopeId3));
                              }
                              _push4(`<div class="flex flex-col justify-between gap-3"${_scopeId3}><h4 class="text-mob-small-bold line-clamp-2"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(product.item.name)}</h4>`);
                              if (!!product.unit_sale_percent) {
                                _push4(`<div class="flex items-center gap-4"${_scopeId3}><div class="flex flex-col gap-0.5"${_scopeId3}><span class="text-subsidiary text-complimentary-reg line-through"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(product.price_for_unit)} ${serverRenderer_cjs_prodExports.ssrInterpolate(product.item.price_type)}</span><span class="text-mob-small-bold"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(product.price_for_unit_without_sale)} ${serverRenderer_cjs_prodExports.ssrInterpolate(product.item.price_type)}</span></div>`);
                                if (product.unit_sale_percent) {
                                  _push4(`<div class="bg-delete text-complimentary-reg rounded-20 px-2 py-1 text-white"${_scopeId3}>-${serverRenderer_cjs_prodExports.ssrInterpolate(product.unit_sale_percent)}%</div>`);
                                } else {
                                  _push4(`<!---->`);
                                }
                                _push4(`</div>`);
                              } else {
                                _push4(`<span class="text-mob-small-bold"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(product.item.price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(product.item.price_type)}</span>`);
                              }
                              _push4(`</div></div>`);
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                                id: product.item.id,
                                "is-combo": product.type === "Combo",
                                retry: "",
                                class: "text-nowrap"
                              }, null, _parent4, _scopeId3));
                              _push4(`</article>`);
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.orderedProducts, (product) => {
                                var _a;
                                return vueExports.openBlock(), vueExports.createBlock("article", {
                                  key: product.id,
                                  class: "border-b-filling flex flex-col justify-between gap-4 border-b py-3 last:border-b-0 md:flex-row md:items-center"
                                }, [
                                  vueExports.createVNode("div", { class: "flex items-center gap-4" }, [
                                    ((_a = product.item.images[0]) == null ? void 0 : _a.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                                      key: 0,
                                      src: product.item.images[0].path,
                                      alt: "product_image",
                                      width: vueExports.unref(isMobile) ? "74px" : "116px",
                                      height: vueExports.unref(isMobile) ? "64px" : "80px",
                                      class: "flex-shrink-0",
                                      "img-classes": "rounded-lg"
                                    }, null, 8, ["src", "width", "height"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                                      key: 1,
                                      src: "/images/productPlaceholder.png",
                                      alt: "productPlaceholder",
                                      width: vueExports.unref(isMobile) ? "74px" : "116px",
                                      height: vueExports.unref(isMobile) ? "64px" : "80px",
                                      class: "flex-shrink-0",
                                      "img-classes": "rounded-lg"
                                    }, null, 8, ["width", "height"])),
                                    vueExports.createVNode("div", { class: "flex flex-col justify-between gap-3" }, [
                                      vueExports.createVNode("h4", { class: "text-mob-small-bold line-clamp-2" }, vueExports.toDisplayString(product.item.name), 1),
                                      !!product.unit_sale_percent ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                        key: 0,
                                        class: "flex items-center gap-4"
                                      }, [
                                        vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                                          vueExports.createVNode("span", { class: "text-subsidiary text-complimentary-reg line-through" }, vueExports.toDisplayString(product.price_for_unit) + " " + vueExports.toDisplayString(product.item.price_type), 1),
                                          vueExports.createVNode("span", { class: "text-mob-small-bold" }, vueExports.toDisplayString(product.price_for_unit_without_sale) + " " + vueExports.toDisplayString(product.item.price_type), 1)
                                        ]),
                                        product.unit_sale_percent ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                          key: 0,
                                          class: "bg-delete text-complimentary-reg rounded-20 px-2 py-1 text-white"
                                        }, "-" + vueExports.toDisplayString(product.unit_sale_percent) + "%", 1)) : vueExports.createCommentVNode("", true)
                                      ])) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                        key: 1,
                                        class: "text-mob-small-bold"
                                      }, vueExports.toDisplayString(product.item.price) + " " + vueExports.toDisplayString(product.item.price_type), 1))
                                    ])
                                  ]),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                                    id: product.item.id,
                                    "is-combo": product.type === "Combo",
                                    retry: "",
                                    class: "text-nowrap"
                                  }, null, 8, ["id", "is-combo"])
                                ]);
                              }), 128))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    }
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (!vueExports.unref(isMobile)) {
                    _push3(`<div class="rounded-20 relative bg-[url(/images/test-images/reg-info-bg.webp)] bg-cover bg-center text-white max-xl:col-span-2 max-xl:row-span-3"${_scopeId2}><div class="rounded-20 absolute inset-0 z-0 bg-black/30"${_scopeId2}></div><div class="relative z-10 flex h-full items-end p-4"${_scopeId2}><div${_scopeId2}><h4 class="text-heavy-bold"${_scopeId2}>Рецепты</h4><p class="text-mob-small-reg mb-4"${_scopeId2}>Подскажем и покажем, что приготовить из наших продуктов</p>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      href: vueExports.unref(T)("recipe.index")
                    }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                            label: "Подробнее",
                            variant: "light"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode(vueExports.unref(VButton), {
                              label: "Подробнее",
                              variant: "light"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (vueExports.unref(isMobile) && _ctx.auth.user) {
                    _push3(`<div class="rounded-20 relative bg-[url(/images/test-images/reg-info-bg.webp)] bg-cover bg-center text-white"${_scopeId2}><div class="rounded-20 absolute inset-0 z-0 bg-black/30"${_scopeId2}></div><div class="relative z-10 flex h-full items-end p-4"${_scopeId2}><div class="mt-[25%]"${_scopeId2}><h4 class="text-heavy-bold"${_scopeId2}>Рецепты</h4><p class="text-mob-small-reg mt-2 mb-4"${_scopeId2}>Подскажем и покажем, что приготовить из наших продуктов</p>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      href: vueExports.unref(T)("recipe.index")
                    }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                            label: "Подробнее",
                            variant: "light"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode(vueExports.unref(VButton), {
                              label: "Подробнее",
                              variant: "light"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    vueExports.createVNode("div", {
                      class: ["grid items-stretch gap-8 md:mt-12", _ctx.auth.user ? "xl:grid-cols-[1.5fr_2fr_1.5fr]" : "sm:grid-cols-2 xl:grid-cols-3"]
                    }, [
                      vueExports.createVNode("div", {
                        class: ["gap-8", _ctx.auth.user ? "grid" : "grid-rows-2 sm:grid"]
                      }, [
                        !_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", { key: 0 }, [
                          vueExports.createVNode("h2", { class: "text-default-bold sm:text-heavy-bold" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.reg_title")), 1),
                          vueExports.createVNode("p", { class: "text-subsidiary-reg sm:text-mob-small-reg mt-2" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.reg_description")), 1)
                        ])) : vueExports.createCommentVNode("", true),
                        vueExports.unref(isMobile) && !_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 1,
                          class: "rounded-20 bg-filling mt-6 p-4 sm:mt-0"
                        }, [
                          vueExports.createVNode("p", { class: "text-mob-small-reg text-subsidiary" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.loyalty_title")), 1),
                          vueExports.createVNode("h4", { class: "text-default-bold sm:text-heavy-bold mt-1" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.loyalty_description_step_1")), 1),
                          vueExports.createVNode("h4", { class: "text-default-bold sm:text-heavy-bold mt-2" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.loyalty_description_step_2")), 1),
                          vueExports.createVNode("p", { class: "text-mob-small-reg mt-1" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.loyalty_addition_description")), 1)
                        ])) : vueExports.createCommentVNode("", true),
                        vueExports.unref(isMobile) && !_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 2,
                          class: "rounded-20 bg-filling relative mt-2 flex justify-end gap-4 overflow-hidden"
                        }, [
                          vueExports.createVNode("div", {
                            class: "absolute bottom-0 left-0 h-[270px] w-[300px] bg-cover bg-bottom-right bg-no-repeat",
                            style: {
                              backgroundImage: "url(/images/test-images/reg-info-estore.webp)",
                              transform: "translate(-20%, 30%)"
                            }
                          }),
                          vueExports.createVNode("div", { class: "ml-auto w-[65%] p-3" }, [
                            vueExports.createVNode("div", null, [
                              vueExports.createVNode("h4", { class: "text-default-bold" }, "Интернет магазин"),
                              vueExports.createVNode("p", { class: "text-subsidiary-reg mt-2 sm:mt-0" }, "Авторизуйтесь чтобы получить доступ к программе CASHBACK")
                            ]),
                            vueExports.createVNode(vueExports.unref(VButton), {
                              label: "Регистрация",
                              class: "mt-6",
                              onClick: ($event) => vueExports.unref(router).get(vueExports.unref(T)("api.v1.auth-check"), {}, { preserveScroll: true })
                            }, null, 8, ["onClick"])
                          ])
                        ])) : vueExports.createCommentVNode("", true),
                        !vueExports.unref(isMobile) && !_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 3,
                          class: "rounded-20 bg-filling relative mt-2 flex gap-4 overflow-hidden sm:mt-0"
                        }, [
                          vueExports.createVNode("div", {
                            class: "absolute right-0 bottom-0 h-[390px] w-[350px] bg-cover bg-bottom max-xl:h-[250px] max-xl:w-[230px]",
                            style: {
                              backgroundImage: "url(/images/test-images/reg-info-estore.webp)",
                              transform: "translate(25%, 35%)"
                            }
                          }),
                          vueExports.createVNode("div", { class: "p-4 sm:w-[60%]" }, [
                            vueExports.createVNode("div", null, [
                              vueExports.createVNode("h4", { class: "text-heavy-bold" }, "Интернет магазин"),
                              vueExports.createVNode("p", { class: "text-mob-small-reg mt-2 sm:mt-0" }, "Авторизуйтесь чтобы получить доступ к программе CASHBACK")
                            ]),
                            vueExports.createVNode(vueExports.unref(VButton), {
                              label: "Регистрация",
                              class: "mt-8",
                              onClick: ($event) => vueExports.unref(router).get(vueExports.unref(T)("api.v1.auth-check"), {}, { preserveScroll: true })
                            }, null, 8, ["onClick"])
                          ])
                        ])) : _ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", { key: 4 }, [
                          vueExports.createVNode("div", { class: "flex h-full flex-col gap-6" }, [
                            vueExports.createVNode("div", null, [
                              vueExports.createVNode("h2", { class: "text-default-bold sm:text-heavy-bold" }, "Здравствуйте, " + vueExports.toDisplayString(!!_ctx.auth.user.name ? _ctx.auth.user.name : "Пользователь"), 1),
                              vueExports.createVNode("p", { class: "text-subsidiary-reg sm:text-mob-small-reg text-subsidiary mt-2" }, "Москва и МО")
                            ]),
                            vueExports.createVNode("div", null, [
                              vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                                "card-number": _ctx.userBonusCard.number,
                                "card-level": _ctx.userBonusCard.level,
                                cashback: _ctx.userBonusCard.cashback + "%",
                                "card-balance": _ctx.userBonusCard.amount
                              }, null, 8, ["card-number", "card-level", "cashback", "card-balance"]),
                              vueExports.createCommentVNode("", true)
                            ])
                          ])
                        ])) : vueExports.createCommentVNode("", true),
                        vueExports.unref(isMobile) && !_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 5,
                          class: "bg-text rounded-20 relative mt-2 overflow-hidden text-white sm:mt-0"
                        }, [
                          vueExports.createVNode("div", {
                            class: "absolute right-0 bottom-0 h-[200px] w-[200px] rotate-[-60deg] bg-cover bg-bottom sm:h-[220px] sm:w-[300px]",
                            style: {
                              backgroundImage: "url(/images/test-images/reg-info-for-companies.webp)",
                              transform: "translate(-5%, 40%)"
                            }
                          }),
                          vueExports.createVNode("div", { class: "relative" }, [
                            vueExports.createVNode("div", { class: "p-3" }, [
                              vueExports.createVNode("h4", { class: "text-default-bold" }, "Для компаний"),
                              vueExports.createVNode("p", { class: "text-subsidiary-reg mt-2" }, "для HORECA"),
                              vueExports.createVNode(vueExports.unref(link_default), { href: "/page/contacts" }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(VButton), {
                                    label: "Подробнее",
                                    variant: "light",
                                    class: "mt-8"
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ])) : vueExports.createCommentVNode("", true)
                      ], 2),
                      !vueExports.unref(isMobile) && !_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        class: "grid-rows-2 gap-8 sm:grid"
                      }, [
                        vueExports.createVNode("div", { class: "rounded-20 bg-filling p-4" }, [
                          vueExports.createVNode("p", { class: "text-mob-small-reg text-subsidiary" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.loyalty_title")), 1),
                          vueExports.createVNode("h4", { class: "text-heavy-bold mt-1" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.loyalty_description_step_1")), 1),
                          vueExports.createVNode("h4", { class: "text-heavy-bold mt-2" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.loyalty_description_step_2")), 1),
                          vueExports.createVNode("p", { class: "text-mob-small-reg mt-1" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.loyalty_addition_description")), 1)
                        ]),
                        vueExports.createVNode("div", { class: "bg-text rounded-20 relative overflow-hidden text-white" }, [
                          vueExports.createVNode("div", {
                            class: "absolute right-0 bottom-0 h-[220px] w-[300px] rotate-[-60deg] bg-cover bg-bottom",
                            style: {
                              backgroundImage: "url(/images/test-images/reg-info-for-companies.webp)",
                              transform: "translate(-5%, 40%)"
                            }
                          }),
                          vueExports.createVNode("div", { class: "relative" }, [
                            vueExports.createVNode("div", { class: "p-4" }, [
                              vueExports.createVNode("h4", { class: "text-heavy-bold" }, "Для компаний"),
                              vueExports.createVNode("p", { class: "text-mob-small-reg mt-2" }, "для HORECA"),
                              vueExports.createVNode(vueExports.unref(link_default), { href: "/page/contacts" }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(VButton), {
                                    label: "Подробнее",
                                    variant: "light",
                                    class: "mt-8"
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ])
                      ])) : _ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 1,
                        class: "bg-light-gray rounded-20 p-3 sm:p-4"
                      }, [
                        vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                          vueExports.createVNode("h4", { class: "text-default-bold sm:text-heavy-bold" }, "Вы недавно заказывали"),
                          vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 text-nowrap transition-all duration-300 hover:text-white" }, [
                            vueExports.createVNode(vueExports.unref(link_default), {
                              href: vueExports.unref(T)("user.profile.orders_history"),
                              class: "flex items-center gap-2"
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode("span", null, "Все заказы"),
                                vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                  width: "16px",
                                  height: "16px"
                                })
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])
                        ]),
                        vueExports.createVNode("div", { class: "mt-4 space-y-2" }, [
                          _ctx.orderedProducts.length === 0 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "my-4 flex items-start gap-8 md:items-center lg:my-26"
                          }, [
                            vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                              src: "/images/test-images/EmptyCart.webp",
                              alt: "Package",
                              width: vueExports.unref(isMobile) ? "60px" : "124px"
                            }, null, 8, ["width"]),
                            vueExports.createVNode("div", null, [
                              vueExports.createVNode("p", { class: "text-mob-small-medium md:text-default-medium" }, "Здесь покажем ваши заказы за последнее время"),
                              vueExports.createVNode(vueExports.unref(link_default), {
                                href: vueExports.unref(T)("catalog.index")
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(VButton), {
                                    label: "В каталог",
                                    class: "mt-8"
                                  })
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(VScrollPanel), {
                            key: 1,
                            class: "max-h-[305px]"
                          }, {
                            default: vueExports.withCtx(() => [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.orderedProducts, (product) => {
                                var _a;
                                return vueExports.openBlock(), vueExports.createBlock("article", {
                                  key: product.id,
                                  class: "border-b-filling flex flex-col justify-between gap-4 border-b py-3 last:border-b-0 md:flex-row md:items-center"
                                }, [
                                  vueExports.createVNode("div", { class: "flex items-center gap-4" }, [
                                    ((_a = product.item.images[0]) == null ? void 0 : _a.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                                      key: 0,
                                      src: product.item.images[0].path,
                                      alt: "product_image",
                                      width: vueExports.unref(isMobile) ? "74px" : "116px",
                                      height: vueExports.unref(isMobile) ? "64px" : "80px",
                                      class: "flex-shrink-0",
                                      "img-classes": "rounded-lg"
                                    }, null, 8, ["src", "width", "height"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                                      key: 1,
                                      src: "/images/productPlaceholder.png",
                                      alt: "productPlaceholder",
                                      width: vueExports.unref(isMobile) ? "74px" : "116px",
                                      height: vueExports.unref(isMobile) ? "64px" : "80px",
                                      class: "flex-shrink-0",
                                      "img-classes": "rounded-lg"
                                    }, null, 8, ["width", "height"])),
                                    vueExports.createVNode("div", { class: "flex flex-col justify-between gap-3" }, [
                                      vueExports.createVNode("h4", { class: "text-mob-small-bold line-clamp-2" }, vueExports.toDisplayString(product.item.name), 1),
                                      !!product.unit_sale_percent ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                        key: 0,
                                        class: "flex items-center gap-4"
                                      }, [
                                        vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                                          vueExports.createVNode("span", { class: "text-subsidiary text-complimentary-reg line-through" }, vueExports.toDisplayString(product.price_for_unit) + " " + vueExports.toDisplayString(product.item.price_type), 1),
                                          vueExports.createVNode("span", { class: "text-mob-small-bold" }, vueExports.toDisplayString(product.price_for_unit_without_sale) + " " + vueExports.toDisplayString(product.item.price_type), 1)
                                        ]),
                                        product.unit_sale_percent ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                          key: 0,
                                          class: "bg-delete text-complimentary-reg rounded-20 px-2 py-1 text-white"
                                        }, "-" + vueExports.toDisplayString(product.unit_sale_percent) + "%", 1)) : vueExports.createCommentVNode("", true)
                                      ])) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                        key: 1,
                                        class: "text-mob-small-bold"
                                      }, vueExports.toDisplayString(product.item.price) + " " + vueExports.toDisplayString(product.item.price_type), 1))
                                    ])
                                  ]),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                                    id: product.item.id,
                                    "is-combo": product.type === "Combo",
                                    retry: "",
                                    class: "text-nowrap"
                                  }, null, 8, ["id", "is-combo"])
                                ]);
                              }), 128))
                            ]),
                            _: 1
                          }))
                        ])
                      ])) : vueExports.createCommentVNode("", true),
                      !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 2,
                        class: "rounded-20 relative bg-[url(/images/test-images/reg-info-bg.webp)] bg-cover bg-center text-white max-xl:col-span-2 max-xl:row-span-3"
                      }, [
                        vueExports.createVNode("div", { class: "rounded-20 absolute inset-0 z-0 bg-black/30" }),
                        vueExports.createVNode("div", { class: "relative z-10 flex h-full items-end p-4" }, [
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("h4", { class: "text-heavy-bold" }, "Рецепты"),
                            vueExports.createVNode("p", { class: "text-mob-small-reg mb-4" }, "Подскажем и покажем, что приготовить из наших продуктов"),
                            vueExports.createVNode(vueExports.unref(link_default), {
                              href: vueExports.unref(T)("recipe.index")
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(VButton), {
                                  label: "Подробнее",
                                  variant: "light"
                                })
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])
                        ])
                      ])) : vueExports.createCommentVNode("", true),
                      vueExports.unref(isMobile) && _ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 3,
                        class: "rounded-20 relative bg-[url(/images/test-images/reg-info-bg.webp)] bg-cover bg-center text-white"
                      }, [
                        vueExports.createVNode("div", { class: "rounded-20 absolute inset-0 z-0 bg-black/30" }),
                        vueExports.createVNode("div", { class: "relative z-10 flex h-full items-end p-4" }, [
                          vueExports.createVNode("div", { class: "mt-[25%]" }, [
                            vueExports.createVNode("h4", { class: "text-heavy-bold" }, "Рецепты"),
                            vueExports.createVNode("p", { class: "text-mob-small-reg mt-2 mb-4" }, "Подскажем и покажем, что приготовить из наших продуктов"),
                            vueExports.createVNode(vueExports.unref(link_default), {
                              href: vueExports.unref(T)("recipe.index")
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(VButton), {
                                  label: "Подробнее",
                                  variant: "light"
                                })
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])
                        ])
                      ])) : vueExports.createCommentVNode("", true)
                    ], 2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (_ctx.recipes.length) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
                title: vueExports.unref(t)("main_page.recipes_for_cooking"),
                class: "mt-10 max-[640px]:!p-0 max-[640px]:!pl-6 md:mt-12"
              }, {
                headerAction: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-[640px]:mr-4"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      href: vueExports.unref(T)("recipe.index"),
                      class: "flex items-center gap-2"
                    }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("main_page.all"))}</span>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
                            width: "16px",
                            height: "16px"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("main_page.all")), 1),
                            vueExports.createVNode(vueExports.unref(IconCaretRight), {
                              width: "16px",
                              height: "16px"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-[640px]:mr-4" }, [
                        vueExports.createVNode(vueExports.unref(link_default), {
                          href: vueExports.unref(T)("recipe.index"),
                          class: "flex items-center gap-2"
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("main_page.all")), 1),
                            vueExports.createVNode(vueExports.unref(IconCaretRight), {
                              width: "16px",
                              height: "16px"
                            })
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ];
                  }
                }),
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                      slides: _ctx.recipes,
                      "slider-options": {
                        slidesPerView: 4,
                        spaceBetween: 32,
                        allowTouchMove: true,
                        breakpoints: {
                          0: { slidesPerView: 1.7, spaceBetween: 8 },
                          640: { slidesPerView: 3, spaceBetween: 16 },
                          1280: { slidesPerView: 4, spaceBetween: 32 }
                        }
                      }
                    }, {
                      slide: vueExports.withCtx(({ slide }, _push4, _parent4, _scopeId3) => {
                        var _a, _b;
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$7), {
                            id: slide.id,
                            title: slide.title,
                            description: slide.mini_description,
                            difficulty: slide.difficult,
                            portions: slide.number_of_persons,
                            "cook-time": slide.cooking_time_minutes,
                            image: (_a = slide.image) == null ? void 0 : _a.path,
                            "is-favorite": slide.is_wishlist
                          }, {
                            actions: vueExports.withCtx(({ isFavorite }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
                                  id: slide.id,
                                  "initial-value": isFavorite,
                                  "item-type": "recipe"
                                }, null, _parent5, _scopeId4));
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$8), {
                                  url: vueExports.unref(T)("recipe.show", { recipe: slide.id })
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                    id: slide.id,
                                    "initial-value": isFavorite,
                                    "item-type": "recipe"
                                  }, null, 8, ["id", "initial-value"]),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                    url: vueExports.unref(T)("recipe.show", { recipe: slide.id })
                                  }, null, 8, ["url"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode(vueExports.unref(_sfc_main$7), {
                              id: slide.id,
                              title: slide.title,
                              description: slide.mini_description,
                              difficulty: slide.difficult,
                              portions: slide.number_of_persons,
                              "cook-time": slide.cooking_time_minutes,
                              image: (_b = slide.image) == null ? void 0 : _b.path,
                              "is-favorite": slide.is_wishlist
                            }, {
                              actions: vueExports.withCtx(({ isFavorite }) => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                  id: slide.id,
                                  "initial-value": isFavorite,
                                  "item-type": "recipe"
                                }, null, 8, ["id", "initial-value"]),
                                vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                  url: vueExports.unref(T)("recipe.show", { recipe: slide.id })
                                }, null, 8, ["url"])
                              ]),
                              _: 2
                            }, 1032, ["id", "title", "description", "difficulty", "portions", "cook-time", "image", "is-favorite"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                        slides: _ctx.recipes,
                        "slider-options": {
                          slidesPerView: 4,
                          spaceBetween: 32,
                          allowTouchMove: true,
                          breakpoints: {
                            0: { slidesPerView: 1.7, spaceBetween: 8 },
                            640: { slidesPerView: 3, spaceBetween: 16 },
                            1280: { slidesPerView: 4, spaceBetween: 32 }
                          }
                        }
                      }, {
                        slide: vueExports.withCtx(({ slide }) => {
                          var _a;
                          return [
                            vueExports.createVNode(vueExports.unref(_sfc_main$7), {
                              id: slide.id,
                              title: slide.title,
                              description: slide.mini_description,
                              difficulty: slide.difficult,
                              portions: slide.number_of_persons,
                              "cook-time": slide.cooking_time_minutes,
                              image: (_a = slide.image) == null ? void 0 : _a.path,
                              "is-favorite": slide.is_wishlist
                            }, {
                              actions: vueExports.withCtx(({ isFavorite }) => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                  id: slide.id,
                                  "initial-value": isFavorite,
                                  "item-type": "recipe"
                                }, null, 8, ["id", "initial-value"]),
                                vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                  url: vueExports.unref(T)("recipe.show", { recipe: slide.id })
                                }, null, 8, ["url"])
                              ]),
                              _: 2
                            }, 1032, ["id", "title", "description", "difficulty", "portions", "cook-time", "image", "is-favorite"])
                          ];
                        }),
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
            if (_ctx.comboPacks.length) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
                title: vueExports.unref(t)("main_page.combo_packs"),
                class: "mt-6 md:mt-12"
              }, {
                headerAction: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      href: vueExports.unref(T)("combo.index"),
                      class: "flex items-center gap-2"
                    }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (!vueExports.unref(isMobile)) {
                            _push4(`<span${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("main_page.allCombo"))}</span>`);
                          } else {
                            _push4(`<span${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("main_page.all"))}</span>`);
                          }
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
                            width: "16px",
                            height: "16px"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 0 }, vueExports.toDisplayString(vueExports.unref(t)("main_page.allCombo")), 1)) : (vueExports.openBlock(), vueExports.createBlock("span", { key: 1 }, vueExports.toDisplayString(vueExports.unref(t)("main_page.all")), 1)),
                            vueExports.createVNode(vueExports.unref(IconCaretRight), {
                              width: "16px",
                              height: "16px"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white" }, [
                        vueExports.createVNode(vueExports.unref(link_default), {
                          href: vueExports.unref(T)("combo.index"),
                          class: "flex items-center gap-2"
                        }, {
                          default: vueExports.withCtx(() => [
                            !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 0 }, vueExports.toDisplayString(vueExports.unref(t)("main_page.allCombo")), 1)) : (vueExports.openBlock(), vueExports.createBlock("span", { key: 1 }, vueExports.toDisplayString(vueExports.unref(t)("main_page.all")), 1)),
                            vueExports.createVNode(vueExports.unref(IconCaretRight), {
                              width: "16px",
                              height: "16px"
                            })
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ];
                  }
                }),
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="grid grid-cols-2 items-center justify-center gap-6 max-[480px]:grid-cols-1 min-[820px]:grid-cols-3 xl:grid-cols-4 xl:grid-rows-3"${_scopeId2}><div class="col-span-2 flex h-full flex-col overflow-hidden rounded-[40px] bg-right bg-no-repeat max-[480px]:col-span-1 min-[820px]:col-span-3 lg:flex xl:row-span-3" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({
                      backgroundImage: !vueExports.unref(isMobile) ? `url(${_ctx.comboPacksBanners.image.path})` : "",
                      backgroundSize: "50%"
                    })}"${_scopeId2}><div class="bg-text relative z-0 h-full w-full mask-[url(&#39;/images/masks/for_combo_mobile1.svg&#39;)] mask-cover mask-bottom-right mask-no-repeat max-sm:pb-14 sm:max-w-[67%] sm:mask-[url(&#39;/images/masks/for_combo.svg&#39;)] sm:mask-right"${_scopeId2}><div class="relative z-10 flex flex-col justify-between p-6 pb-10 text-white sm:mr-14 md:max-h-full md:pr-20 lg:p-8"${_scopeId2}><div${_scopeId2}><h3 class="font-vast text-vast-additional md:text-vast-title-additional font-bold uppercase"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.comboPacksBanners.title)}</h3><p class="text-subsidiary-reg md:text-mob-small-reg mt-4"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.comboPacksBanners.description)}</p></div><div class="text-subsidiary-reg md:text-mob-small-reg mt-10 flex flex-col justify-between gap-6 sm:mt-30 md:flex-row md:items-center md:gap-8"${_scopeId2}><p${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.comboPacksBanners.addition_description)}</p>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                      label: _ctx.comboPacksBanners.button_text,
                      variant: "light"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div></div>`);
                    if (vueExports.unref(isMobile)) {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                        class: "-mt-30",
                        height: "300px",
                        width: "100%",
                        src: _ctx.comboPacksBanners.image.path,
                        alt: "combo"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(_ctx.comboPacks, (combo, index) => {
                      var _a;
                      _push3(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass([index === 0 ? "xl:col-start-4 xl:row-span-3" : "xl:row-span-3 xl:row-start-4", "h-full"])}"${_scopeId2}>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ProductCard), {
                        id: combo.id,
                        key: combo.id,
                        class: "flex h-full flex-col",
                        title: combo.name,
                        "is-combo": true,
                        images: combo.images.map((i) => i.path),
                        weight: combo.weight,
                        description: combo.short_description,
                        "is-favorite": combo.is_wishlist,
                        categories: ((_a = combo.tags) == null ? void 0 : _a.map((b) => b.name)) ?? [],
                        unit: combo.weight_type,
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
                      _push3(`</div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    return [
                      vueExports.createVNode("div", { class: "grid grid-cols-2 items-center justify-center gap-6 max-[480px]:grid-cols-1 min-[820px]:grid-cols-3 xl:grid-cols-4 xl:grid-rows-3" }, [
                        vueExports.createVNode("div", {
                          class: "col-span-2 flex h-full flex-col overflow-hidden rounded-[40px] bg-right bg-no-repeat max-[480px]:col-span-1 min-[820px]:col-span-3 lg:flex xl:row-span-3",
                          style: {
                            backgroundImage: !vueExports.unref(isMobile) ? `url(${_ctx.comboPacksBanners.image.path})` : "",
                            backgroundSize: "50%"
                          }
                        }, [
                          vueExports.createVNode("div", { class: "bg-text relative z-0 h-full w-full mask-[url('/images/masks/for_combo_mobile1.svg')] mask-cover mask-bottom-right mask-no-repeat max-sm:pb-14 sm:max-w-[67%] sm:mask-[url('/images/masks/for_combo.svg')] sm:mask-right" }, [
                            vueExports.createVNode("div", { class: "relative z-10 flex flex-col justify-between p-6 pb-10 text-white sm:mr-14 md:max-h-full md:pr-20 lg:p-8" }, [
                              vueExports.createVNode("div", null, [
                                vueExports.createVNode("h3", { class: "font-vast text-vast-additional md:text-vast-title-additional font-bold uppercase" }, vueExports.toDisplayString(_ctx.comboPacksBanners.title), 1),
                                vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-4" }, vueExports.toDisplayString(_ctx.comboPacksBanners.description), 1)
                              ]),
                              vueExports.createVNode("div", { class: "text-subsidiary-reg md:text-mob-small-reg mt-10 flex flex-col justify-between gap-6 sm:mt-30 md:flex-row md:items-center md:gap-8" }, [
                                vueExports.createVNode("p", null, vueExports.toDisplayString(_ctx.comboPacksBanners.addition_description), 1),
                                vueExports.createVNode(vueExports.unref(VButton), {
                                  label: _ctx.comboPacksBanners.button_text,
                                  variant: "light"
                                }, null, 8, ["label"])
                              ])
                            ])
                          ]),
                          vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                            key: 0,
                            class: "-mt-30",
                            height: "300px",
                            width: "100%",
                            src: _ctx.comboPacksBanners.image.path,
                            alt: "combo"
                          }, null, 8, ["src"])) : vueExports.createCommentVNode("", true)
                        ], 4),
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.comboPacks, (combo, index) => {
                          var _a;
                          return vueExports.openBlock(), vueExports.createBlock("div", {
                            key: combo.id,
                            class: [index === 0 ? "xl:col-start-4 xl:row-span-3" : "xl:row-span-3 xl:row-start-4", "h-full"]
                          }, [
                            (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ProductCard), {
                              id: combo.id,
                              key: combo.id,
                              class: "flex h-full flex-col",
                              title: combo.name,
                              "is-combo": true,
                              images: combo.images.map((i) => i.path),
                              weight: combo.weight,
                              description: combo.short_description,
                              "is-favorite": combo.is_wishlist,
                              categories: ((_a = combo.tags) == null ? void 0 : _a.map((b) => b.name)) ?? [],
                              unit: combo.weight_type,
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
                            }, 1032, ["id", "title", "images", "weight", "description", "is-favorite", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
                          ], 2);
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
          } else {
            return [
              vueExports.createVNode(vueExports.unref(_sfc_main$1), null, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode("div", { class: "relative overflow-hidden rounded-[40px]" }, [
                    vueExports.createVNode("swiper-container", {
                      "space-between": "32",
                      loop: "true",
                      navigation: {
                        nextEl: ".slider-next-main",
                        prevEl: ".slider-prev-main"
                      }
                    }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.mainBanners, (banner, index) => {
                        return vueExports.openBlock(), vueExports.createBlock("swiper-slide", {
                          key: banner.id
                        }, [
                          vueExports.createVNode("div", {
                            class: "relative h-100 rounded-[40px] bg-cover bg-bottom bg-no-repeat p-2 min-[900px]:p-8 md:bg-center",
                            style: {
                              backgroundImage: `url(${banner.image.path})`
                            }
                          }, [
                            vueExports.createVNode("div", { class: "w-fit min-[900px]:relative" }, [
                              vueExports.createVNode("div", { class: "bg-text flex h-64 flex-col justify-between mask-[url(../../images/masks/for_main_mobile.svg)] mask-no-repeat p-3 max-[900px]:max-w-[305px] max-[900px]:mask-size-[305px_auto] min-[900px]:h-84 min-[900px]:w-184 min-[900px]:mask-[url(../../images/masks/for_main.svg)] min-[900px]:p-6" }, [
                                vueExports.createVNode("div", { class: "p-2 min-[900px]:mb-8" }, [
                                  vueExports.createVNode("div", { class: "font-vast text-vast-additional min-[900px]:text-vast-title-bold mb-3 font-bold text-white uppercase" }, vueExports.toDisplayString(banner.title), 1),
                                  vueExports.createVNode("span", {
                                    class: "text-subsidiary-reg md:text-mob-small-reg text-white",
                                    innerHTML: banner.description
                                  }, null, 8, ["innerHTML"])
                                ]),
                                banner.link_url && banner.button_text ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(link_default), {
                                  key: 0,
                                  href: banner.link_url
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(VButton), {
                                      label: banner.button_text,
                                      variant: "light",
                                      class: "max-[900px]:!text-subsidiary-reg mb-6 w-fit max-[900px]:ml-2"
                                    }, null, 8, ["label"])
                                  ]),
                                  _: 2
                                }, 1032, ["href"])) : vueExports.createCommentVNode("", true)
                              ]),
                              vueExports.createVNode("div", { class: "absolute right-15 bottom-6 z-100 flex w-[173px] items-center gap-1 max-[900px]:right-1/2 max-[900px]:bottom-4 max-[900px]:translate-x-1/2 max-[900px]:translate-y-1/2" }, [
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.mainBanners.length, (j) => {
                                  return vueExports.openBlock(), vueExports.createBlock("span", {
                                    key: j,
                                    style: { flexBasis: `${1 / _ctx.mainBanners.length * 100}%` },
                                    class: ["rounded-20 block h-0.5", [j === index + 1 ? "bg-white" : "bg-[#D4D3D3]/50"]]
                                  }, null, 6);
                                }), 128))
                              ])
                            ])
                          ], 4)
                        ]);
                      }), 128))
                    ]),
                    vueExports.createVNode(vueExports.unref(VNavigationButton), {
                      class: "absolute right-4 bottom-4 z-10 max-[900px]:hidden",
                      "slider-key": "main"
                    })
                  ])
                ]),
                _: 1
              }),
              _ctx.specialProducts.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$1), {
                key: 0,
                title: vueExports.unref(t)("main_page.special_offers"),
                class: "max-[640px]:!pr-0 md:mt-12"
              }, {
                headerAction: vueExports.withCtx(() => [
                  vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-[640px]:mr-4" }, [
                    vueExports.createVNode(vueExports.unref(link_default), {
                      href: vueExports.unref(T)("promotion.index"),
                      class: "flex items-center gap-2"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("main_page.all")), 1),
                        vueExports.createVNode(vueExports.unref(IconCaretRight), {
                          width: "16px",
                          height: "16px"
                        })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ]),
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                    slides: _ctx.specialProducts,
                    "slider-options": {
                      slidesPerView: 6,
                      spaceBetween: 32,
                      allowTouchMove: true
                    }
                  }, {
                    slide: vueExports.withCtx(({ slide }) => [
                      (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ProductCard), {
                        id: slide.id,
                        key: `${slide.id}-${slide.count_in_cart}`,
                        "has-gift": slide.is_have_gift,
                        slug: slide.slug,
                        title: slide.name,
                        images: slide.images.map((i) => i.path),
                        weight: slide.weight,
                        description: slide.short_description,
                        "is-favorite": slide.is_wishlist,
                        "is-new": slide.is_new,
                        "degree-type": slide.degree_type,
                        "sale-percent": slide.sale_percent,
                        categories: slide.tags.map((b) => b.name) ?? [],
                        unit: slide.weight_type,
                        price: Number(slide.sale_price) ?? 0,
                        "price-unit": slide.price_type,
                        "old-price": Number(slide.price) ?? 0,
                        cashback_percent: slide.cashback_percent
                      }, {
                        favoriteButton: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                            id: slide.id,
                            "initial-value": slide.is_wishlist
                          }, null, 8, ["id", "initial-value"])
                        ]),
                        footer: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                            id: slide.id,
                            "count-in-cart": slide.count_in_cart,
                            quantity: slide.quantity
                          }, null, 8, ["id", "count-in-cart", "quantity"])
                        ]),
                        _: 2
                      }, 1032, ["id", "has-gift", "slug", "title", "images", "weight", "description", "is-favorite", "is-new", "degree-type", "sale-percent", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
                    ]),
                    _: 1
                  }, 8, ["slides"])
                ]),
                _: 1
              }, 8, ["title"])) : vueExports.createCommentVNode("", true),
              _ctx.recommendedProducts.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$1), {
                key: 1,
                title: vueExports.unref(t)("main_page.recommended_products"),
                class: "bg-light-gray mt-6 max-[640px]:!pr-0 md:mt-12"
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                    slides: _ctx.recommendedProducts,
                    "slider-options": {
                      slidesPerView: 6,
                      spaceBetween: 32,
                      allowTouchMove: true
                    }
                  }, {
                    slide: vueExports.withCtx(({ slide }) => [
                      (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ProductCard), {
                        id: slide.id,
                        key: slide.id,
                        slug: slide.slug,
                        "has-gift": slide.is_have_gift,
                        title: slide.name,
                        images: slide.images.map((i) => i.path),
                        weight: slide.weight,
                        description: slide.short_description,
                        "is-favorite": slide.is_wishlist,
                        "is-new": slide.is_new,
                        "degree-type": slide.degree_type,
                        "sale-percent": slide.sale_percent,
                        categories: slide.tags.map((b) => b.name) ?? [],
                        unit: slide.weight_type,
                        price: Number(slide.sale_price) ?? 0,
                        "price-unit": slide.price_type,
                        "old-price": Number(slide.price) ?? 0,
                        cashback_percent: slide.cashback_percent
                      }, {
                        favoriteButton: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                            id: slide.id,
                            "initial-value": slide.is_wishlist
                          }, null, 8, ["id", "initial-value"])
                        ]),
                        footer: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                            id: slide.id,
                            "count-in-cart": slide.count_in_cart,
                            quantity: slide.quantity
                          }, null, 8, ["id", "count-in-cart", "quantity"])
                        ]),
                        _: 2
                      }, 1032, ["id", "slug", "has-gift", "title", "images", "weight", "description", "is-favorite", "is-new", "degree-type", "sale-percent", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
                    ]),
                    _: 1
                  }, 8, ["slides"])
                ]),
                _: 1
              }, 8, ["title"])) : vueExports.createCommentVNode("", true),
              _ctx.photoCategories.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$1), {
                key: 2,
                title: vueExports.unref(t)("main_page.product_categories"),
                class: "mt-6 md:mt-12"
              }, {
                default: vueExports.withCtx(() => [
                  !vueExports.unref(isCategoriesMobile) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 0,
                    class: ["mt-8 grid gap-3", vueExports.unref(isCategoriesTablet) ? "grid-cols-11 grid-rows-6" : "grid-cols-10 grid-rows-[140px_140px]"]
                  }, [
                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.photoCategories, (category, index) => {
                      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(link_default), {
                        key: category.id,
                        href: `/catalog/?category=${category.category_slug}`,
                        class: [
                          getGridClasses.value[index],
                          "rounded-20 hover:outline-stroke overflow-hidden bg-cover bg-center bg-no-repeat transition-shadow duration-300 ease-in hover:shadow-xl hover:outline"
                        ],
                        style: { backgroundImage: `url('${category.desktop_photo}')` }
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode("h2", {
                            class: "font-vast z-10 max-w-[201px] px-4 pt-4 font-bold uppercase",
                            style: { color: category.text_color, fontSize: category.desktop_font_size, lineHeight: category.desktop_line_height }
                          }, vueExports.toDisplayString(category.name), 5),
                          category.description ? (vueExports.openBlock(), vueExports.createBlock("p", {
                            key: 0,
                            class: "text-subsidiary-reg mt-1 max-w-[150px] pl-4"
                          }, vueExports.toDisplayString(category.description), 1)) : vueExports.createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["href", "class", "style"]);
                    }), 128))
                  ], 2)) : (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 1,
                    class: ["mt-8 grid gap-3", "auto-rows-[140px] grid-cols-2"]
                  }, [
                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.photoCategories, (category, index) => {
                      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(link_default), {
                        key: category.id,
                        href: `/catalog/?category=${category.category_slug}`,
                        class: [
                          getGridClasses.value[index],
                          "rounded-20 hover:outline-stroke overflow-hidden bg-size-[100%_100%] bg-center bg-no-repeat transition-shadow duration-300 ease-in hover:shadow-xl hover:outline"
                        ],
                        style: { backgroundImage: `url('${category.mobile_photo}')` }
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode("h2", {
                            class: "font-vast z-10 px-2 pt-2 font-bold uppercase",
                            style: { color: category.text_color, fontSize: category.mobile_font_size, lineHeight: category.mobile_line_height }
                          }, vueExports.toDisplayString(category.name), 5),
                          category.description ? (vueExports.openBlock(), vueExports.createBlock("p", {
                            key: 0,
                            class: "text-subsidiary-reg mt-1 max-w-[150px] pl-2"
                          }, vueExports.toDisplayString(category.description), 1)) : vueExports.createCommentVNode("", true)
                        ]),
                        _: 2
                      }, 1032, ["href", "class", "style"]);
                    }), 128))
                  ]))
                ]),
                _: 1
              }, 8, ["title"])) : vueExports.createCommentVNode("", true),
              _ctx.noveltyProducts.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$1), {
                key: 3,
                id: "noveltySection",
                title: vueExports.unref(t)("main_page.novelty"),
                class: "mt-6 max-[640px]:!p-0 max-[640px]:!pl-6 md:mt-12"
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode("div", { class: "flex flex-col gap-6 xl:flex-row" }, [
                    vueExports.createVNode("div", { class: "xl:w-[50%]" }, [
                      vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                        slides: _ctx.noveltyProducts,
                        "slider-options": {
                          slidesPerView: 3,
                          spaceBetween: 32,
                          breakpoints: {
                            0: { slidesPerView: 1.7, spaceBetween: 8 },
                            640: { slidesPerView: 3, spaceBetween: 32 }
                          }
                        }
                      }, {
                        slide: vueExports.withCtx(({ slide }) => [
                          (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ProductCard), {
                            id: slide.id,
                            key: slide.id,
                            "has-gift": slide.is_have_gift,
                            slug: slide.slug,
                            title: slide.name,
                            images: slide.images.map((i) => i.path),
                            weight: slide.weight,
                            "is-new": slide.is_new,
                            "sale-percent": slide.sale_percent,
                            description: slide.short_description,
                            "degree-type": slide.degree_type,
                            "is-favorite": slide.is_wishlist,
                            categories: slide.tags.map((b) => b.name) ?? [],
                            unit: slide.weight_type,
                            price: Number(slide.sale_price) ?? 0,
                            "price-unit": slide.price_type,
                            "old-price": Number(slide.price) ?? 0,
                            cashback_percent: slide.cashback_percent
                          }, {
                            favoriteButton: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                id: slide.id,
                                "initial-value": slide.is_wishlist
                              }, null, 8, ["id", "initial-value"])
                            ]),
                            footer: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                                id: slide.id,
                                "count-in-cart": slide.count_in_cart,
                                quantity: slide.quantity
                              }, null, 8, ["id", "count-in-cart", "quantity"])
                            ]),
                            _: 2
                          }, 1032, ["id", "has-gift", "slug", "title", "images", "weight", "is-new", "sale-percent", "description", "degree-type", "is-favorite", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
                        ]),
                        _: 1
                      }, 8, ["slides"])
                    ]),
                    vueExports.createVNode("div", { class: "bg-text mr-6 rounded-[40px] xl:w-[50%]" }, [
                      vueExports.createVNode("div", { class: "h-full sm:flex" }, [
                        vueExports.createVNode("div", { class: "p-6 sm:p-8" }, [
                          vueExports.createVNode("div", { class: "items flex flex-col gap-3 text-white sm:gap-4" }, [
                            vueExports.createVNode("p", { class: "text-subsidiary text-subsidiary-reg sm:text-mob-small-reg" }, vueExports.toDisplayString(_ctx.noveltyBanner.addition_description), 1),
                            vueExports.createVNode("h3", { class: "font-vast text-vast-additional sm:text-vast-title-additional mb-3 font-bold uppercase" }, vueExports.toDisplayString(_ctx.noveltyBanner.title), 1),
                            vueExports.createVNode("p", { class: "text-subsidiary-reg sm:text-mob-small-reg" }, vueExports.toDisplayString(_ctx.noveltyBanner.description), 1)
                          ]),
                          vueExports.createVNode(vueExports.unref(VButton), {
                            label: _ctx.noveltyBanner.button_text,
                            variant: "light",
                            class: "mt-4 max-sm:w-full sm:mt-6"
                          }, null, 8, ["label"])
                        ]),
                        vueExports.createVNode("div", null, [
                          vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                            class: "rounded-20 h-full w-[300px] overflow-hidden !object-contain max-sm:!h-[160px] max-sm:w-full",
                            height: "100%",
                            width: "100%",
                            src: _ctx.noveltyBanner.image.path,
                            alt: "steak image"
                          }, null, 8, ["src"])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["title"])) : vueExports.createCommentVNode("", true),
              vueExports.createVNode(vueExports.unref(_sfc_main$1), null, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode("div", {
                    class: ["grid items-stretch gap-8 md:mt-12", _ctx.auth.user ? "xl:grid-cols-[1.5fr_2fr_1.5fr]" : "sm:grid-cols-2 xl:grid-cols-3"]
                  }, [
                    vueExports.createVNode("div", {
                      class: ["gap-8", _ctx.auth.user ? "grid" : "grid-rows-2 sm:grid"]
                    }, [
                      !_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", { key: 0 }, [
                        vueExports.createVNode("h2", { class: "text-default-bold sm:text-heavy-bold" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.reg_title")), 1),
                        vueExports.createVNode("p", { class: "text-subsidiary-reg sm:text-mob-small-reg mt-2" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.reg_description")), 1)
                      ])) : vueExports.createCommentVNode("", true),
                      vueExports.unref(isMobile) && !_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 1,
                        class: "rounded-20 bg-filling mt-6 p-4 sm:mt-0"
                      }, [
                        vueExports.createVNode("p", { class: "text-mob-small-reg text-subsidiary" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.loyalty_title")), 1),
                        vueExports.createVNode("h4", { class: "text-default-bold sm:text-heavy-bold mt-1" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.loyalty_description_step_1")), 1),
                        vueExports.createVNode("h4", { class: "text-default-bold sm:text-heavy-bold mt-2" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.loyalty_description_step_2")), 1),
                        vueExports.createVNode("p", { class: "text-mob-small-reg mt-1" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.loyalty_addition_description")), 1)
                      ])) : vueExports.createCommentVNode("", true),
                      vueExports.unref(isMobile) && !_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 2,
                        class: "rounded-20 bg-filling relative mt-2 flex justify-end gap-4 overflow-hidden"
                      }, [
                        vueExports.createVNode("div", {
                          class: "absolute bottom-0 left-0 h-[270px] w-[300px] bg-cover bg-bottom-right bg-no-repeat",
                          style: {
                            backgroundImage: "url(/images/test-images/reg-info-estore.webp)",
                            transform: "translate(-20%, 30%)"
                          }
                        }),
                        vueExports.createVNode("div", { class: "ml-auto w-[65%] p-3" }, [
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("h4", { class: "text-default-bold" }, "Интернет магазин"),
                            vueExports.createVNode("p", { class: "text-subsidiary-reg mt-2 sm:mt-0" }, "Авторизуйтесь чтобы получить доступ к программе CASHBACK")
                          ]),
                          vueExports.createVNode(vueExports.unref(VButton), {
                            label: "Регистрация",
                            class: "mt-6",
                            onClick: ($event) => vueExports.unref(router).get(vueExports.unref(T)("api.v1.auth-check"), {}, { preserveScroll: true })
                          }, null, 8, ["onClick"])
                        ])
                      ])) : vueExports.createCommentVNode("", true),
                      !vueExports.unref(isMobile) && !_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 3,
                        class: "rounded-20 bg-filling relative mt-2 flex gap-4 overflow-hidden sm:mt-0"
                      }, [
                        vueExports.createVNode("div", {
                          class: "absolute right-0 bottom-0 h-[390px] w-[350px] bg-cover bg-bottom max-xl:h-[250px] max-xl:w-[230px]",
                          style: {
                            backgroundImage: "url(/images/test-images/reg-info-estore.webp)",
                            transform: "translate(25%, 35%)"
                          }
                        }),
                        vueExports.createVNode("div", { class: "p-4 sm:w-[60%]" }, [
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("h4", { class: "text-heavy-bold" }, "Интернет магазин"),
                            vueExports.createVNode("p", { class: "text-mob-small-reg mt-2 sm:mt-0" }, "Авторизуйтесь чтобы получить доступ к программе CASHBACK")
                          ]),
                          vueExports.createVNode(vueExports.unref(VButton), {
                            label: "Регистрация",
                            class: "mt-8",
                            onClick: ($event) => vueExports.unref(router).get(vueExports.unref(T)("api.v1.auth-check"), {}, { preserveScroll: true })
                          }, null, 8, ["onClick"])
                        ])
                      ])) : _ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", { key: 4 }, [
                        vueExports.createVNode("div", { class: "flex h-full flex-col gap-6" }, [
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("h2", { class: "text-default-bold sm:text-heavy-bold" }, "Здравствуйте, " + vueExports.toDisplayString(!!_ctx.auth.user.name ? _ctx.auth.user.name : "Пользователь"), 1),
                            vueExports.createVNode("p", { class: "text-subsidiary-reg sm:text-mob-small-reg text-subsidiary mt-2" }, "Москва и МО")
                          ]),
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                              "card-number": _ctx.userBonusCard.number,
                              "card-level": _ctx.userBonusCard.level,
                              cashback: _ctx.userBonusCard.cashback + "%",
                              "card-balance": _ctx.userBonusCard.amount
                            }, null, 8, ["card-number", "card-level", "cashback", "card-balance"]),
                            vueExports.createCommentVNode("", true)
                          ])
                        ])
                      ])) : vueExports.createCommentVNode("", true),
                      vueExports.unref(isMobile) && !_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 5,
                        class: "bg-text rounded-20 relative mt-2 overflow-hidden text-white sm:mt-0"
                      }, [
                        vueExports.createVNode("div", {
                          class: "absolute right-0 bottom-0 h-[200px] w-[200px] rotate-[-60deg] bg-cover bg-bottom sm:h-[220px] sm:w-[300px]",
                          style: {
                            backgroundImage: "url(/images/test-images/reg-info-for-companies.webp)",
                            transform: "translate(-5%, 40%)"
                          }
                        }),
                        vueExports.createVNode("div", { class: "relative" }, [
                          vueExports.createVNode("div", { class: "p-3" }, [
                            vueExports.createVNode("h4", { class: "text-default-bold" }, "Для компаний"),
                            vueExports.createVNode("p", { class: "text-subsidiary-reg mt-2" }, "для HORECA"),
                            vueExports.createVNode(vueExports.unref(link_default), { href: "/page/contacts" }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(VButton), {
                                  label: "Подробнее",
                                  variant: "light",
                                  class: "mt-8"
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ])) : vueExports.createCommentVNode("", true)
                    ], 2),
                    !vueExports.unref(isMobile) && !_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      class: "grid-rows-2 gap-8 sm:grid"
                    }, [
                      vueExports.createVNode("div", { class: "rounded-20 bg-filling p-4" }, [
                        vueExports.createVNode("p", { class: "text-mob-small-reg text-subsidiary" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.loyalty_title")), 1),
                        vueExports.createVNode("h4", { class: "text-heavy-bold mt-1" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.loyalty_description_step_1")), 1),
                        vueExports.createVNode("h4", { class: "text-heavy-bold mt-2" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.loyalty_description_step_2")), 1),
                        vueExports.createVNode("p", { class: "text-mob-small-reg mt-1" }, vueExports.toDisplayString(vueExports.unref(t)("info_banners.loyalty_addition_description")), 1)
                      ]),
                      vueExports.createVNode("div", { class: "bg-text rounded-20 relative overflow-hidden text-white" }, [
                        vueExports.createVNode("div", {
                          class: "absolute right-0 bottom-0 h-[220px] w-[300px] rotate-[-60deg] bg-cover bg-bottom",
                          style: {
                            backgroundImage: "url(/images/test-images/reg-info-for-companies.webp)",
                            transform: "translate(-5%, 40%)"
                          }
                        }),
                        vueExports.createVNode("div", { class: "relative" }, [
                          vueExports.createVNode("div", { class: "p-4" }, [
                            vueExports.createVNode("h4", { class: "text-heavy-bold" }, "Для компаний"),
                            vueExports.createVNode("p", { class: "text-mob-small-reg mt-2" }, "для HORECA"),
                            vueExports.createVNode(vueExports.unref(link_default), { href: "/page/contacts" }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(VButton), {
                                  label: "Подробнее",
                                  variant: "light",
                                  class: "mt-8"
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ])
                    ])) : _ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 1,
                      class: "bg-light-gray rounded-20 p-3 sm:p-4"
                    }, [
                      vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                        vueExports.createVNode("h4", { class: "text-default-bold sm:text-heavy-bold" }, "Вы недавно заказывали"),
                        vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 text-nowrap transition-all duration-300 hover:text-white" }, [
                          vueExports.createVNode(vueExports.unref(link_default), {
                            href: vueExports.unref(T)("user.profile.orders_history"),
                            class: "flex items-center gap-2"
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode("span", null, "Все заказы"),
                              vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                width: "16px",
                                height: "16px"
                              })
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ]),
                      vueExports.createVNode("div", { class: "mt-4 space-y-2" }, [
                        _ctx.orderedProducts.length === 0 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 0,
                          class: "my-4 flex items-start gap-8 md:items-center lg:my-26"
                        }, [
                          vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                            src: "/images/test-images/EmptyCart.webp",
                            alt: "Package",
                            width: vueExports.unref(isMobile) ? "60px" : "124px"
                          }, null, 8, ["width"]),
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("p", { class: "text-mob-small-medium md:text-default-medium" }, "Здесь покажем ваши заказы за последнее время"),
                            vueExports.createVNode(vueExports.unref(link_default), {
                              href: vueExports.unref(T)("catalog.index")
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(VButton), {
                                  label: "В каталог",
                                  class: "mt-8"
                                })
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])
                        ])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(VScrollPanel), {
                          key: 1,
                          class: "max-h-[305px]"
                        }, {
                          default: vueExports.withCtx(() => [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.orderedProducts, (product) => {
                              var _a;
                              return vueExports.openBlock(), vueExports.createBlock("article", {
                                key: product.id,
                                class: "border-b-filling flex flex-col justify-between gap-4 border-b py-3 last:border-b-0 md:flex-row md:items-center"
                              }, [
                                vueExports.createVNode("div", { class: "flex items-center gap-4" }, [
                                  ((_a = product.item.images[0]) == null ? void 0 : _a.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                                    key: 0,
                                    src: product.item.images[0].path,
                                    alt: "product_image",
                                    width: vueExports.unref(isMobile) ? "74px" : "116px",
                                    height: vueExports.unref(isMobile) ? "64px" : "80px",
                                    class: "flex-shrink-0",
                                    "img-classes": "rounded-lg"
                                  }, null, 8, ["src", "width", "height"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                                    key: 1,
                                    src: "/images/productPlaceholder.png",
                                    alt: "productPlaceholder",
                                    width: vueExports.unref(isMobile) ? "74px" : "116px",
                                    height: vueExports.unref(isMobile) ? "64px" : "80px",
                                    class: "flex-shrink-0",
                                    "img-classes": "rounded-lg"
                                  }, null, 8, ["width", "height"])),
                                  vueExports.createVNode("div", { class: "flex flex-col justify-between gap-3" }, [
                                    vueExports.createVNode("h4", { class: "text-mob-small-bold line-clamp-2" }, vueExports.toDisplayString(product.item.name), 1),
                                    !!product.unit_sale_percent ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 0,
                                      class: "flex items-center gap-4"
                                    }, [
                                      vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                                        vueExports.createVNode("span", { class: "text-subsidiary text-complimentary-reg line-through" }, vueExports.toDisplayString(product.price_for_unit) + " " + vueExports.toDisplayString(product.item.price_type), 1),
                                        vueExports.createVNode("span", { class: "text-mob-small-bold" }, vueExports.toDisplayString(product.price_for_unit_without_sale) + " " + vueExports.toDisplayString(product.item.price_type), 1)
                                      ]),
                                      product.unit_sale_percent ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                        key: 0,
                                        class: "bg-delete text-complimentary-reg rounded-20 px-2 py-1 text-white"
                                      }, "-" + vueExports.toDisplayString(product.unit_sale_percent) + "%", 1)) : vueExports.createCommentVNode("", true)
                                    ])) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                      key: 1,
                                      class: "text-mob-small-bold"
                                    }, vueExports.toDisplayString(product.item.price) + " " + vueExports.toDisplayString(product.item.price_type), 1))
                                  ])
                                ]),
                                vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                                  id: product.item.id,
                                  "is-combo": product.type === "Combo",
                                  retry: "",
                                  class: "text-nowrap"
                                }, null, 8, ["id", "is-combo"])
                              ]);
                            }), 128))
                          ]),
                          _: 1
                        }))
                      ])
                    ])) : vueExports.createCommentVNode("", true),
                    !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 2,
                      class: "rounded-20 relative bg-[url(/images/test-images/reg-info-bg.webp)] bg-cover bg-center text-white max-xl:col-span-2 max-xl:row-span-3"
                    }, [
                      vueExports.createVNode("div", { class: "rounded-20 absolute inset-0 z-0 bg-black/30" }),
                      vueExports.createVNode("div", { class: "relative z-10 flex h-full items-end p-4" }, [
                        vueExports.createVNode("div", null, [
                          vueExports.createVNode("h4", { class: "text-heavy-bold" }, "Рецепты"),
                          vueExports.createVNode("p", { class: "text-mob-small-reg mb-4" }, "Подскажем и покажем, что приготовить из наших продуктов"),
                          vueExports.createVNode(vueExports.unref(link_default), {
                            href: vueExports.unref(T)("recipe.index")
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(VButton), {
                                label: "Подробнее",
                                variant: "light"
                              })
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])
                    ])) : vueExports.createCommentVNode("", true),
                    vueExports.unref(isMobile) && _ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 3,
                      class: "rounded-20 relative bg-[url(/images/test-images/reg-info-bg.webp)] bg-cover bg-center text-white"
                    }, [
                      vueExports.createVNode("div", { class: "rounded-20 absolute inset-0 z-0 bg-black/30" }),
                      vueExports.createVNode("div", { class: "relative z-10 flex h-full items-end p-4" }, [
                        vueExports.createVNode("div", { class: "mt-[25%]" }, [
                          vueExports.createVNode("h4", { class: "text-heavy-bold" }, "Рецепты"),
                          vueExports.createVNode("p", { class: "text-mob-small-reg mt-2 mb-4" }, "Подскажем и покажем, что приготовить из наших продуктов"),
                          vueExports.createVNode(vueExports.unref(link_default), {
                            href: vueExports.unref(T)("recipe.index")
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(VButton), {
                                label: "Подробнее",
                                variant: "light"
                              })
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ])
                    ])) : vueExports.createCommentVNode("", true)
                  ], 2)
                ]),
                _: 1
              }),
              _ctx.recipes.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$1), {
                key: 4,
                title: vueExports.unref(t)("main_page.recipes_for_cooking"),
                class: "mt-10 max-[640px]:!p-0 max-[640px]:!pl-6 md:mt-12"
              }, {
                headerAction: vueExports.withCtx(() => [
                  vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-[640px]:mr-4" }, [
                    vueExports.createVNode(vueExports.unref(link_default), {
                      href: vueExports.unref(T)("recipe.index"),
                      class: "flex items-center gap-2"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("main_page.all")), 1),
                        vueExports.createVNode(vueExports.unref(IconCaretRight), {
                          width: "16px",
                          height: "16px"
                        })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ]),
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                    slides: _ctx.recipes,
                    "slider-options": {
                      slidesPerView: 4,
                      spaceBetween: 32,
                      allowTouchMove: true,
                      breakpoints: {
                        0: { slidesPerView: 1.7, spaceBetween: 8 },
                        640: { slidesPerView: 3, spaceBetween: 16 },
                        1280: { slidesPerView: 4, spaceBetween: 32 }
                      }
                    }
                  }, {
                    slide: vueExports.withCtx(({ slide }) => {
                      var _a;
                      return [
                        vueExports.createVNode(vueExports.unref(_sfc_main$7), {
                          id: slide.id,
                          title: slide.title,
                          description: slide.mini_description,
                          difficulty: slide.difficult,
                          portions: slide.number_of_persons,
                          "cook-time": slide.cooking_time_minutes,
                          image: (_a = slide.image) == null ? void 0 : _a.path,
                          "is-favorite": slide.is_wishlist
                        }, {
                          actions: vueExports.withCtx(({ isFavorite }) => [
                            vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                              id: slide.id,
                              "initial-value": isFavorite,
                              "item-type": "recipe"
                            }, null, 8, ["id", "initial-value"]),
                            vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                              url: vueExports.unref(T)("recipe.show", { recipe: slide.id })
                            }, null, 8, ["url"])
                          ]),
                          _: 2
                        }, 1032, ["id", "title", "description", "difficulty", "portions", "cook-time", "image", "is-favorite"])
                      ];
                    }),
                    _: 1
                  }, 8, ["slides"])
                ]),
                _: 1
              }, 8, ["title"])) : vueExports.createCommentVNode("", true),
              _ctx.comboPacks.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$1), {
                key: 5,
                title: vueExports.unref(t)("main_page.combo_packs"),
                class: "mt-6 md:mt-12"
              }, {
                headerAction: vueExports.withCtx(() => [
                  vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white" }, [
                    vueExports.createVNode(vueExports.unref(link_default), {
                      href: vueExports.unref(T)("combo.index"),
                      class: "flex items-center gap-2"
                    }, {
                      default: vueExports.withCtx(() => [
                        !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 0 }, vueExports.toDisplayString(vueExports.unref(t)("main_page.allCombo")), 1)) : (vueExports.openBlock(), vueExports.createBlock("span", { key: 1 }, vueExports.toDisplayString(vueExports.unref(t)("main_page.all")), 1)),
                        vueExports.createVNode(vueExports.unref(IconCaretRight), {
                          width: "16px",
                          height: "16px"
                        })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ]),
                default: vueExports.withCtx(() => [
                  vueExports.createVNode("div", { class: "grid grid-cols-2 items-center justify-center gap-6 max-[480px]:grid-cols-1 min-[820px]:grid-cols-3 xl:grid-cols-4 xl:grid-rows-3" }, [
                    vueExports.createVNode("div", {
                      class: "col-span-2 flex h-full flex-col overflow-hidden rounded-[40px] bg-right bg-no-repeat max-[480px]:col-span-1 min-[820px]:col-span-3 lg:flex xl:row-span-3",
                      style: {
                        backgroundImage: !vueExports.unref(isMobile) ? `url(${_ctx.comboPacksBanners.image.path})` : "",
                        backgroundSize: "50%"
                      }
                    }, [
                      vueExports.createVNode("div", { class: "bg-text relative z-0 h-full w-full mask-[url('/images/masks/for_combo_mobile1.svg')] mask-cover mask-bottom-right mask-no-repeat max-sm:pb-14 sm:max-w-[67%] sm:mask-[url('/images/masks/for_combo.svg')] sm:mask-right" }, [
                        vueExports.createVNode("div", { class: "relative z-10 flex flex-col justify-between p-6 pb-10 text-white sm:mr-14 md:max-h-full md:pr-20 lg:p-8" }, [
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("h3", { class: "font-vast text-vast-additional md:text-vast-title-additional font-bold uppercase" }, vueExports.toDisplayString(_ctx.comboPacksBanners.title), 1),
                            vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-4" }, vueExports.toDisplayString(_ctx.comboPacksBanners.description), 1)
                          ]),
                          vueExports.createVNode("div", { class: "text-subsidiary-reg md:text-mob-small-reg mt-10 flex flex-col justify-between gap-6 sm:mt-30 md:flex-row md:items-center md:gap-8" }, [
                            vueExports.createVNode("p", null, vueExports.toDisplayString(_ctx.comboPacksBanners.addition_description), 1),
                            vueExports.createVNode(vueExports.unref(VButton), {
                              label: _ctx.comboPacksBanners.button_text,
                              variant: "light"
                            }, null, 8, ["label"])
                          ])
                        ])
                      ]),
                      vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                        key: 0,
                        class: "-mt-30",
                        height: "300px",
                        width: "100%",
                        src: _ctx.comboPacksBanners.image.path,
                        alt: "combo"
                      }, null, 8, ["src"])) : vueExports.createCommentVNode("", true)
                    ], 4),
                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.comboPacks, (combo, index) => {
                      var _a;
                      return vueExports.openBlock(), vueExports.createBlock("div", {
                        key: combo.id,
                        class: [index === 0 ? "xl:col-start-4 xl:row-span-3" : "xl:row-span-3 xl:row-start-4", "h-full"]
                      }, [
                        (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ProductCard), {
                          id: combo.id,
                          key: combo.id,
                          class: "flex h-full flex-col",
                          title: combo.name,
                          "is-combo": true,
                          images: combo.images.map((i) => i.path),
                          weight: combo.weight,
                          description: combo.short_description,
                          "is-favorite": combo.is_wishlist,
                          categories: ((_a = combo.tags) == null ? void 0 : _a.map((b) => b.name)) ?? [],
                          unit: combo.weight_type,
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
                        }, 1032, ["id", "title", "images", "weight", "description", "is-favorite", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
                      ], 2);
                    }), 128))
                  ])
                ]),
                _: 1
              }, 8, ["title"])) : vueExports.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/main-page/ui/MainPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
