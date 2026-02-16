import { v as vueExports, M as useOrderCalculate, u as useScreenSize, H as VScrollPanel, s as serverRenderer_cjs_prodExports, h as head_default, V as VContainer, x as _sfc_main$1, l as link_default, k as _sfc_main$2, n as _sfc_main$3, N as _sfc_main$4, O as _sfc_main$5, P as _sfc_main$6, D as _sfc_main$7, L as _sfc_main$8, K as _sfc_main$9, Q as _sfc_main$a, Y as YandexMapDefaultMarker, R as IconPhone, S as _sfc_main$b, a as VButton, m as IconCaretRight, _ as _sfc_main$e, U as ProductCard, W as _sfc_main$f } from "../ssr.js";
import { useElementBounding } from "@vueuse/core";
import { addDays, isToday, format, isTomorrow, differenceInCalendarDays } from "date-fns";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { _ as _sfc_main$c, a as _sfc_main$d } from "./ApplyPromocode-DeUy5y2A.js";
import { _ as _sfc_main$g } from "./RecipeCard-BgvuIkQ1.js";
import { u as usePickupLocationsStore, I as IconPin } from "./IconPin-WhIOrlAF.js";
import { I as IconClockOutline } from "./IconClockOutline-BglWD8g2.js";
import { I as IconGlobeOutline } from "./IconGlobeOutline-C0euSem-.js";
import { _ as _sfc_main$h } from "./VShare-C36WNIjH.js";
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
import "./IconCheckCircleGreen-DQz2sOR5.js";
import "./ToggleSwitch-kQXei-3B.js";
import "primevue/toggleswitch";
import "./IconChefHat-CbLzs3Yv.js";
import "./getFormattedTime-DfpF6FCc.js";
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "CartPage",
  __ssrInlineRender: true,
  props: {
    cart: {},
    recipes: {},
    special_products: {},
    cities: {},
    auth: {},
    cartBanners: {},
    seoData: {}
  },
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    const breadcrumbItems = [
      { label: "Главная", route: route("main-page") },
      { label: "Корзина", route: route("cart.index") }
    ];
    const { calculateData, calculateOrder, calculationModel, loading } = useOrderCalculate();
    const formattingDeliveryDate = vueExports.computed(() => {
      if (!calculateData.value) return "";
      const finalDate = addDays(
        /* @__PURE__ */ new Date(),
        calculationModel.delivery_type === "courier" ? calculateData.value.delivery_detail.delivery_zone_time_min ?? 0 : calculateData.value.delivery_detail.pickup_location_time_min ?? 0
      );
      if (isToday(finalDate)) {
        return `сегодня, ${format(finalDate, "dd.MM.yyyy")}`;
      }
      if (isTomorrow(finalDate)) {
        return `завтра, ${format(finalDate, "dd.MM.yyyy")}`;
      }
      if (differenceInCalendarDays(finalDate, /* @__PURE__ */ new Date()) === 2) {
        return `послезавтра, ${format(finalDate, "dd.MM.yyyy")}`;
      }
      return format(finalDate, "dd.MM.yyyy");
    });
    const pickupLocationsStore = usePickupLocationsStore();
    const { locationsList, selectedLocation, selectedCity, locationCoordinates } = storeToRefs(pickupLocationsStore);
    calculationModel.delivery_type = "courier";
    const citiesList = vueExports.computed(() => {
      switch (calculationModel.delivery_type) {
        case "courier": {
          return [...props.cities];
        }
        case "pickup": {
          return [...props.cities.filter((c) => c.is_has_pickup)];
        }
        default: {
          return [...props.cities];
        }
      }
    });
    const deliveryZones = vueExports.computed(() => {
      var _a;
      return ((_a = props.cities.find((city) => {
        var _a2;
        return city.id === ((_a2 = selectedCity.value) == null ? void 0 : _a2.id);
      })) == null ? void 0 : _a.delivery_zones.map((zone) => ({
        ...zone,
        name: [zone.name, zone.description].filter((el) => Boolean(el)).join(", ")
      }))) || [];
    });
    const deliveryTypes = vueExports.ref([
      { deliveryType: t("cart_page.courier"), key: "1", value: "courier" },
      { deliveryType: t("cart_page.pickup"), key: "2", value: "pickup" }
    ]);
    const { isMobile } = useScreenSize();
    const toCreateOrder = () => {
      var _a;
      router.visit(route("order.create"), {
        data: {
          promocode: calculationModel.promo,
          delivery_type: calculationModel.delivery_type,
          address_id: calculationModel.address_id,
          pickup_location_id: calculationModel.pickup_location_id,
          city_id: (_a = selectedCity.value) == null ? void 0 : _a.id,
          delivery_zone_id: calculationModel.delivery_zone_id,
          use_expiring_bonuses: calculationModel.use_expiring_bonuses
        }
      });
    };
    const isOtherCity = vueExports.computed(() => {
      var _a;
      return ((_a = selectedCity.value) == null ? void 0 : _a.name) === "Другой город";
    });
    const onSelectPickupLocation = (location) => {
      calculationModel.pickup_location_id = location.id;
    };
    const selectedAddress = vueExports.shallowRef();
    const setCity = (address) => {
      selectedCity.value = props.cities.find((city) => city.id === address.city_id);
      calculationModel.delivery_zone_id = address.delivery_zone_id;
    };
    if (props.auth.user) {
      const primaryCity = props.auth.user.addresses.find((address) => address.is_primary);
      if (primaryCity) {
        selectedAddress.value = primaryCity;
        setCity(primaryCity);
      }
    }
    const handleBonusesToggled = (useExpiring) => {
      calculationModel.use_expiring_bonuses = useExpiring;
    };
    vueExports.watchEffect(calculateOrder);
    vueExports.watch(
      () => {
        var _a;
        return (_a = selectedCity.value) == null ? void 0 : _a.id;
      },
      (newId) => {
        if (newId) {
          pickupLocationsStore.getLocations(newId);
        }
      }
    );
    vueExports.watch(
      () => props.cart,
      () => {
        calculateOrder();
      }
    );
    vueExports.watch(
      () => calculationModel.delivery_type,
      () => {
        calculationModel.delivery_zone_id = void 0;
        calculationModel.pickup_location_id = void 0;
      }
    );
    const onPromocodeApplied = (promocode) => {
      calculationModel.promo = promocode;
      calculateOrder();
    };
    const getWorkingHours = (location) => {
      if (!location.working_hours_from && !location.working_hours_to) return "";
      let hours = "Открыто";
      if (location.working_hours_from) {
        hours += ` с ${location.working_hours_from}`;
      }
      if (location.working_hours_to) {
        hours += ` по ${location.working_hours_to}`;
      }
      return hours;
    };
    const pickUpLocationsContainer = vueExports.useTemplateRef("pickUpLocationsContainer");
    const { height: pickUpLocationsContainerHeight } = useElementBounding(pickUpLocationsContainer);
    const cartContentWrap = vueExports.computed(() => {
      if (isMobile.value) {
        return "div";
      }
      return VScrollPanel;
    });
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
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), null, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            if (vueExports.unref(isMobile)) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
                model: breadcrumbItems,
                class: "mx-3 mb-4 !shrink-0 !overflow-auto bg-white"
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
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
                model: breadcrumbItems,
                class: "mx-8 mt-3"
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
            }
            if ((_a = _ctx.cartBanners) == null ? void 0 : _a.length) {
              _push2(`<div class="mt-6 px-6 sm:px-8"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                "slider-options": {
                  spaceBetween: 20,
                  breakpoints: {
                    0: {
                      slidesPerView: 1
                    }
                  }
                },
                slides: _ctx.cartBanners
              }, {
                slide: vueExports.withCtx(({ slide }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ backgroundImage: `url(${slide.image.path}), linear-gradient(to bottom, rgba(2, 40, 63, 0), rgba(2, 40, 63, 1))` })}" class="rounded-20 flex min-h-[238px] w-full items-end bg-cover bg-center bg-no-repeat p-4 text-white bg-blend-color md:min-h-[193px] md:items-center md:p-6"${_scopeId2}><div class="grid gap-2"${_scopeId2}><h2 class="text-vast-mob-title-bold md:text-vast-title-bold uppercase"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.title)}</h2><p class="text-mob-small-bold md:text-default-bold"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.description)}</p><p class="text-subsidiary-reg md:text-mob-small-reg"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.addition_description)}</p></div></div>`);
                  } else {
                    return [
                      vueExports.createVNode("div", {
                        style: { backgroundImage: `url(${slide.image.path}), linear-gradient(to bottom, rgba(2, 40, 63, 0), rgba(2, 40, 63, 1))` },
                        class: "rounded-20 flex min-h-[238px] w-full items-end bg-cover bg-center bg-no-repeat p-4 text-white bg-blend-color md:min-h-[193px] md:items-center md:p-6"
                      }, [
                        vueExports.createVNode("div", { class: "grid gap-2" }, [
                          vueExports.createVNode("h2", { class: "text-vast-mob-title-bold md:text-vast-title-bold uppercase" }, vueExports.toDisplayString(slide.title), 1),
                          vueExports.createVNode("p", { class: "text-mob-small-bold md:text-default-bold" }, vueExports.toDisplayString(slide.description), 1),
                          vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(slide.addition_description), 1)
                        ])
                      ], 4)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.cart.items.length > 0) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), null, {
                title: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h2 class="text-default-bold sm:text-heavy-bold"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("cart.cart"))} <span class="text-subsidiary text-default-medium sm:text-heavy font-normal"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("cart.goods", _ctx.cart.cartQuantity))}</span></h2>`);
                  } else {
                    return [
                      vueExports.createVNode("h2", { class: "text-default-bold sm:text-heavy-bold" }, [
                        vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("cart.cart")) + " ", 1),
                        vueExports.createVNode("span", { class: "text-subsidiary text-default-medium sm:text-heavy font-normal" }, vueExports.toDisplayString(vueExports.unref(t)("cart.goods", _ctx.cart.cartQuantity)), 1)
                      ])
                    ];
                  }
                }),
                headerAction: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      href: _ctx.route("catalog.index"),
                      class: "flex items-center gap-2"
                    }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (!vueExports.unref(isMobile)) {
                            _push4(`<span${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("cart_page.continue_shopping"))}</span>`);
                          } else {
                            _push4(`<span${_scopeId3}>В каталог</span>`);
                          }
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
                            width: "16px",
                            height: "16px"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 0 }, vueExports.toDisplayString(vueExports.unref(t)("cart_page.continue_shopping")), 1)) : (vueExports.openBlock(), vueExports.createBlock("span", { key: 1 }, "В каталог")),
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
                          href: _ctx.route("catalog.index"),
                          class: "flex items-center gap-2"
                        }, {
                          default: vueExports.withCtx(() => [
                            !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 0 }, vueExports.toDisplayString(vueExports.unref(t)("cart_page.continue_shopping")), 1)) : (vueExports.openBlock(), vueExports.createBlock("span", { key: 1 }, "В каталог")),
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
                  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
                  if (_push3) {
                    _push3(`<div class="flex flex-col gap-8 lg:grid-cols-[1fr_0.5fr] xl:grid"${_scopeId2}><div${_scopeId2}>`);
                    serverRenderer_cjs_prodExports.ssrRenderVNode(_push3, vueExports.createVNode(vueExports.resolveDynamicComponent(cartContentWrap.value), {
                      class: { "xl:h-[1000px]": !vueExports.unref(isMobile) }
                    }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          serverRenderer_cjs_prodExports.ssrRenderList(_ctx.cart.formatedItems, (item) => {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                              key: item.id + vueExports.useId(),
                              item,
                              class: "mb-2 last:mb-0"
                            }, vueExports.createSlots({
                              addToCart: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  if (!item.is_gift) {
                                    _push5(`<!--[-->`);
                                    if (item.is_available) {
                                      _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
                                        id: item.item.id,
                                        type: item.is_combo ? "combo" : "product",
                                        "count-in-cart": item.quantity,
                                        "can-quick-buy": false,
                                        "is-combo": item.is_combo
                                      }, null, _parent5, _scopeId4));
                                    } else {
                                      _push5(`<div class="flex items-center gap-4"${_scopeId4}><span class="text-mob-small-bold"${_scopeId4}>Нет в наличии</span>`);
                                      _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
                                        label: "Под заказ",
                                        rounded: "",
                                        size: "small"
                                      }, null, _parent5, _scopeId4));
                                      _push5(`</div>`);
                                    }
                                    _push5(`<!--]-->`);
                                  } else {
                                    _push5(`<!--[-->`);
                                    if (item.is_gift) {
                                      _push5(`<div class="text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"${_scopeId4}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.quantity)} шт </div>`);
                                    } else {
                                      _push5(`<!---->`);
                                    }
                                    _push5(`<!--]-->`);
                                  }
                                } else {
                                  return [
                                    !item.is_gift ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                      item.is_available ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$6), {
                                        key: 0,
                                        id: item.item.id,
                                        type: item.is_combo ? "combo" : "product",
                                        "count-in-cart": item.quantity,
                                        "can-quick-buy": false,
                                        "is-combo": item.is_combo
                                      }, null, 8, ["id", "type", "count-in-cart", "is-combo"])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                                        key: 1,
                                        class: "flex items-center gap-4"
                                      }, [
                                        vueExports.createVNode("span", { class: "text-mob-small-bold" }, "Нет в наличии"),
                                        vueExports.createVNode(_sfc_main$7, {
                                          label: "Под заказ",
                                          rounded: "",
                                          size: "small"
                                        })
                                      ]))
                                    ], 64)) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                                      item.is_gift ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                        key: 0,
                                        class: "text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"
                                      }, vueExports.toDisplayString(item.quantity) + " шт ", 1)) : vueExports.createCommentVNode("", true)
                                    ], 64))
                                  ];
                                }
                              }),
                              removeGiftPosition: vueExports.withCtx(({ giftId, giftQuantity }, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, {
                                    id: giftId,
                                    type: "product",
                                    "count-in-cart": giftQuantity,
                                    "with-confirm": ""
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    vueExports.createVNode(_sfc_main$5, {
                                      id: giftId,
                                      type: "product",
                                      "count-in-cart": giftQuantity,
                                      "with-confirm": ""
                                    }, null, 8, ["id", "count-in-cart"])
                                  ];
                                }
                              }),
                              _: 2
                            }, [
                              item.can_delete ? {
                                name: "removePosition",
                                fn: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, {
                                      id: item.item.id,
                                      type: item.is_combo ? "combo" : "product",
                                      "count-in-cart": item.quantity
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      vueExports.createVNode(_sfc_main$5, {
                                        id: item.item.id,
                                        type: item.is_combo ? "combo" : "product",
                                        "count-in-cart": item.quantity
                                      }, null, 8, ["id", "type", "count-in-cart"])
                                    ];
                                  }
                                }),
                                key: "0"
                              } : void 0
                            ]), _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.cart.formatedItems, (item) => {
                              return vueExports.openBlock(), vueExports.createBlock(_sfc_main$4, {
                                key: item.id + vueExports.useId(),
                                item,
                                class: "mb-2 last:mb-0"
                              }, vueExports.createSlots({
                                addToCart: vueExports.withCtx(() => [
                                  !item.is_gift ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                    item.is_available ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$6), {
                                      key: 0,
                                      id: item.item.id,
                                      type: item.is_combo ? "combo" : "product",
                                      "count-in-cart": item.quantity,
                                      "can-quick-buy": false,
                                      "is-combo": item.is_combo
                                    }, null, 8, ["id", "type", "count-in-cart", "is-combo"])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 1,
                                      class: "flex items-center gap-4"
                                    }, [
                                      vueExports.createVNode("span", { class: "text-mob-small-bold" }, "Нет в наличии"),
                                      vueExports.createVNode(_sfc_main$7, {
                                        label: "Под заказ",
                                        rounded: "",
                                        size: "small"
                                      })
                                    ]))
                                  ], 64)) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                                    item.is_gift ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 0,
                                      class: "text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"
                                    }, vueExports.toDisplayString(item.quantity) + " шт ", 1)) : vueExports.createCommentVNode("", true)
                                  ], 64))
                                ]),
                                removeGiftPosition: vueExports.withCtx(({ giftId, giftQuantity }) => [
                                  vueExports.createVNode(_sfc_main$5, {
                                    id: giftId,
                                    type: "product",
                                    "count-in-cart": giftQuantity,
                                    "with-confirm": ""
                                  }, null, 8, ["id", "count-in-cart"])
                                ]),
                                _: 2
                              }, [
                                item.can_delete ? {
                                  name: "removePosition",
                                  fn: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$5, {
                                      id: item.item.id,
                                      type: item.is_combo ? "combo" : "product",
                                      "count-in-cart": item.quantity
                                    }, null, 8, ["id", "type", "count-in-cart"])
                                  ]),
                                  key: "0"
                                } : void 0
                              ]), 1032, ["item"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }), _parent3, _scopeId2);
                    _push3(`</div><aside class="flex w-full flex-col gap-2 xl:max-w-[480px]"${_scopeId2}><div class="bg-light-gray rounded-20 p-3 sm:p-4"${_scopeId2}><h3 class="text-small-medium sm:text-default-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("cart_page.delivery"))}</h3><div class="mt-3 flex items-center gap-3 max-sm:flex-wrap sm:mt-6 sm:gap-6"${_scopeId2}><!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(deliveryTypes.value, (deliveryType) => {
                      _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$8, {
                        modelValue: vueExports.unref(calculationModel).delivery_type,
                        "onUpdate:modelValue": ($event) => vueExports.unref(calculationModel).delivery_type = $event,
                        "input-id": deliveryType.key,
                        name: deliveryType.key,
                        value: deliveryType.value
                      }, null, _parent3, _scopeId2));
                      _push3(`<label class="text-mob-small-reg cursor-pointer"${serverRenderer_cjs_prodExports.ssrRenderAttr("for", deliveryType.key)}${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(deliveryType.deliveryType)}</label></div>`);
                    });
                    _push3(`<!--]--></div><div class="mt-6"${_scopeId2}><h4 class="text-mob-small-reg"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("cart_page.delivery_address"))}</h4><div class="mt-3"${_scopeId2}>`);
                    if (props.auth.user && props.auth.user.addresses.length) {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, {
                        modelValue: selectedAddress.value,
                        "onUpdate:modelValue": [($event) => selectedAddress.value = $event, setCity],
                        options: props.auth.user.addresses,
                        fluid: "",
                        "option-label": "final_address",
                        variant: "filled",
                        size: "large",
                        class: "mb-2",
                        placeholder: "Выберите адрес"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, {
                      modelValue: vueExports.unref(selectedCity),
                      "onUpdate:modelValue": ($event) => vueExports.isRef(selectedCity) ? selectedCity.value = $event : null,
                      options: citiesList.value,
                      "option-label": "name",
                      fluid: "",
                      variant: "filled",
                      size: "large",
                      class: "mb-2",
                      placeholder: vueExports.unref(t)("cart_page.city")
                    }, null, _parent3, _scopeId2));
                    if (!isOtherCity.value && vueExports.unref(calculationModel).delivery_type === "courier") {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, {
                        modelValue: vueExports.unref(calculationModel).delivery_zone_id,
                        "onUpdate:modelValue": ($event) => vueExports.unref(calculationModel).delivery_zone_id = $event,
                        options: deliveryZones.value,
                        "option-value": "id",
                        "option-label": "name",
                        fluid: "",
                        variant: "filled",
                        size: "large",
                        placeholder: "Выберите зону доставки"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                    if (vueExports.unref(calculationModel).delivery_type === "pickup") {
                      _push3(`<div class="mt-4 overflow-hidden rounded-2xl"${_scopeId2}>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$a), {
                        zoom: vueExports.unref(selectedLocation) ? 19 : 11,
                        center: vueExports.unref(locationCoordinates),
                        height: "200px",
                        class: "mx-auto mb-3 max-w-[95%]"
                      }, {
                        marker: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(locationsList), (location) => {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(YandexMapDefaultMarker), {
                                settings: {
                                  coordinates: [Number(location.longitude), Number(location.latitude)]
                                }
                              }, null, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(locationsList), (location) => {
                                return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(YandexMapDefaultMarker), {
                                  key: location.id,
                                  settings: {
                                    coordinates: [Number(location.longitude), Number(location.latitude)]
                                  }
                                }, null, 8, ["settings"]);
                              }), 128))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VScrollPanel), {
                        style: { maxHeight: "440px", height: `${vueExports.unref(pickUpLocationsContainerHeight)}px` }
                      }, {
                        default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="grid grid-cols-1 gap-2"${_scopeId3}><!--[-->`);
                            serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(locationsList), (location) => {
                              _push4(`<div class="flex gap-2 rounded-2xl bg-white p-3"${_scopeId3}><div class="grid grow gap-3"${_scopeId3}><p class="text-mob-small-medium"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(location.title)}</p><div class="grid gap-2 min-[820px]:grid-cols-2"${_scopeId3}>`);
                              if (location.phone) {
                                _push4(`<a${serverRenderer_cjs_prodExports.ssrRenderAttr("href", `tel:${location.phone.replace(/(?!^\+)[^\d]/g, "")}`)} class="text-mob-small-bold inline-flex items-center gap-2"${_scopeId3}>`);
                                _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPhone), { class: "h-6 w-6 shrink-0" }, null, _parent4, _scopeId3));
                                _push4(` ${serverRenderer_cjs_prodExports.ssrInterpolate(location.phone)}</a>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              if (location.working_hours_from || location.working_hours_to) {
                                _push4(`<div class="text-mob-small-reg flex items-center gap-2"${_scopeId3}>`);
                                _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), { class: "h-6 w-6 shrink-0" }, null, _parent4, _scopeId3));
                                _push4(` ${serverRenderer_cjs_prodExports.ssrInterpolate(getWorkingHours(location))}</div>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`<div class="text-mob-small-reg flex items-center gap-2"${_scopeId3}>`);
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPin), { class: "shrink-0" }, null, _parent4, _scopeId3));
                              _push4(` ${serverRenderer_cjs_prodExports.ssrInterpolate(location.fullAddress)}</div>`);
                              if (location.site) {
                                _push4(`<a${serverRenderer_cjs_prodExports.ssrRenderAttr("href", location.site)} class="text-mob-small-reg flex items-center gap-2"${_scopeId3}>`);
                                _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconGlobeOutline), { class: "h-6 w-6 shrink-0" }, null, _parent4, _scopeId3));
                                _push4(` ${serverRenderer_cjs_prodExports.ssrInterpolate(location.site)}</a>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div></div>`);
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$8, {
                                modelValue: vueExports.unref(selectedLocation),
                                "onUpdate:modelValue": [($event) => vueExports.isRef(selectedLocation) ? selectedLocation.value = $event : null, onSelectPickupLocation],
                                value: location
                              }, null, _parent4, _scopeId3));
                              _push4(`</div>`);
                            });
                            _push4(`<!--]--></div>`);
                          } else {
                            return [
                              vueExports.createVNode("div", {
                                ref_key: "pickUpLocationsContainer",
                                ref: pickUpLocationsContainer,
                                class: "grid grid-cols-1 gap-2"
                              }, [
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(locationsList), (location) => {
                                  return vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: location.id,
                                    class: "flex gap-2 rounded-2xl bg-white p-3"
                                  }, [
                                    vueExports.createVNode("div", { class: "grid grow gap-3" }, [
                                      vueExports.createVNode("p", { class: "text-mob-small-medium" }, vueExports.toDisplayString(location.title), 1),
                                      vueExports.createVNode("div", { class: "grid gap-2 min-[820px]:grid-cols-2" }, [
                                        location.phone ? (vueExports.openBlock(), vueExports.createBlock("a", {
                                          key: 0,
                                          href: `tel:${location.phone.replace(/(?!^\+)[^\d]/g, "")}`,
                                          class: "text-mob-small-bold inline-flex items-center gap-2"
                                        }, [
                                          vueExports.createVNode(vueExports.unref(IconPhone), { class: "h-6 w-6 shrink-0" }),
                                          vueExports.createTextVNode(" " + vueExports.toDisplayString(location.phone), 1)
                                        ], 8, ["href"])) : vueExports.createCommentVNode("", true),
                                        location.working_hours_from || location.working_hours_to ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                          key: 1,
                                          class: "text-mob-small-reg flex items-center gap-2"
                                        }, [
                                          vueExports.createVNode(vueExports.unref(IconClockOutline), { class: "h-6 w-6 shrink-0" }),
                                          vueExports.createTextVNode(" " + vueExports.toDisplayString(getWorkingHours(location)), 1)
                                        ])) : vueExports.createCommentVNode("", true),
                                        vueExports.createVNode("div", { class: "text-mob-small-reg flex items-center gap-2" }, [
                                          vueExports.createVNode(vueExports.unref(IconPin), { class: "shrink-0" }),
                                          vueExports.createTextVNode(" " + vueExports.toDisplayString(location.fullAddress), 1)
                                        ]),
                                        location.site ? (vueExports.openBlock(), vueExports.createBlock("a", {
                                          key: 2,
                                          href: location.site,
                                          class: "text-mob-small-reg flex items-center gap-2"
                                        }, [
                                          vueExports.createVNode(vueExports.unref(IconGlobeOutline), { class: "h-6 w-6 shrink-0" }),
                                          vueExports.createTextVNode(" " + vueExports.toDisplayString(location.site), 1)
                                        ], 8, ["href"])) : vueExports.createCommentVNode("", true)
                                      ])
                                    ]),
                                    vueExports.createVNode(_sfc_main$8, {
                                      modelValue: vueExports.unref(selectedLocation),
                                      "onUpdate:modelValue": [($event) => vueExports.isRef(selectedLocation) ? selectedLocation.value = $event : null, onSelectPickupLocation],
                                      value: location
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                                  ]);
                                }), 128))
                              ], 512)
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if ((vueExports.unref(calculationModel).pickup_location_id || vueExports.unref(calculationModel).delivery_zone_id) && !vueExports.unref(loading) || isOtherCity.value) {
                      _push3(`<div class="border-t-solid border-t-filling mt-3 border-t pt-2"${_scopeId2}><h5 class="text-mob-small-reg mb-2"${_scopeId2}>Детали доставки</h5><dl class="grid grid-cols-[minmax(0,140px)_1fr] items-start gap-2"${_scopeId2}><dt class="text-subsidiary-medium text-subsidiary py-0.5"${_scopeId2}>Срок доставки:</dt><dd class="text-mob-small-medium"${_scopeId2}>`);
                      if (isOtherCity.value) {
                        _push3(`<span class="inline-flex items-center gap-1"${_scopeId2}><span${_scopeId2}>Рассчитывается индивидуально</span>`);
                        _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$b), { value: "Срок доставки зависит от адреса, веса и стоимости заказа" }, null, _parent3, _scopeId2));
                        _push3(`</span>`);
                      } else {
                        _push3(`<!--[-->${serverRenderer_cjs_prodExports.ssrInterpolate(formattingDeliveryDate.value)}<!--]-->`);
                      }
                      _push3(`</dd>`);
                      if (!isOtherCity.value && vueExports.unref(calculationModel).delivery_type !== "pickup") {
                        _push3(`<!--[--><dt class="text-subsidiary-medium text-subsidiary py-0.5"${_scopeId2}>Зона доставки:</dt><dd class="text-mob-small-medium"${_scopeId2}><span class="inline-flex items-center gap-1"${_scopeId2}><span class="text-mob-small-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate((_a2 = vueExports.unref(calculateData)) == null ? void 0 : _a2.delivery_detail.delivery_zone_name)}</span><span class="text-complimentary-reg text-additional"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate((_b2 = vueExports.unref(calculateData)) == null ? void 0 : _b2.delivery_detail.delivery_zone_description)}</span></span></dd><!--]-->`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<dt class="text-subsidiary-medium text-subsidiary py-0.5"${_scopeId2}>Стоимость доставки:</dt><dd class="text-mob-small-medium"${_scopeId2}><span class="inline-flex items-center gap-1"${_scopeId2}><span${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(isOtherCity.value ? "Рассчитывается индивидуально" : `${(_c = vueExports.unref(calculateData)) == null ? void 0 : _c.delivery_detail.delivery_price} руб`)}</span>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$b), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" }, null, _parent3, _scopeId2));
                      _push3(`</span></dd></dl></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$c), {
                      "bonus-spent-limit": (_e = (_d = vueExports.unref(calculateData)) == null ? void 0 : _d.order_detail) == null ? void 0 : _e.bonus_spent_limit,
                      onPromocodeApplied,
                      onBonusesToggled: handleBonusesToggled
                    }, null, _parent3, _scopeId2));
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$d), {
                      "order-detail": ((_f = vueExports.unref(calculateData)) == null ? void 0 : _f.order_detail) ?? null,
                      "is-delivery-price-enabled": !!vueExports.unref(calculationModel).delivery_zone_id || !!vueExports.unref(calculationModel).pickup_location_id,
                      "is-individual": isOtherCity.value
                    }, {
                      footer: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="mt-6"${_scopeId3}><div${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                            label: vueExports.unref(t)("cart_page.checkout"),
                            disabled: _ctx.cart.cartQuantity === 0,
                            class: "w-full",
                            onClick: toCreateOrder
                          }, null, _parent4, _scopeId3));
                          _push4(`</div><div${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                            href: "/page/return-exchange",
                            class: "text-mob-small-reg mt-4 flex items-center gap-2 pb-2"
                          }, {
                            default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span${_scopeId4}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("cart_page.return_exchange_terms"))}</span>`);
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
                                  width: "20px",
                                  height: "20px"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("cart_page.return_exchange_terms")), 1),
                                  vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                    width: "20px",
                                    height: "20px"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else {
                          return [
                            vueExports.createVNode("div", { class: "mt-6" }, [
                              vueExports.createVNode("div", null, [
                                vueExports.createVNode(vueExports.unref(VButton), {
                                  label: vueExports.unref(t)("cart_page.checkout"),
                                  disabled: _ctx.cart.cartQuantity === 0,
                                  class: "w-full",
                                  onClick: toCreateOrder
                                }, null, 8, ["label", "disabled"])
                              ]),
                              vueExports.createVNode("div", null, [
                                vueExports.createVNode(vueExports.unref(link_default), {
                                  href: "/page/return-exchange",
                                  class: "text-mob-small-reg mt-4 flex items-center gap-2 pb-2"
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("cart_page.return_exchange_terms")), 1),
                                    vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                      width: "20px",
                                      height: "20px"
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</aside></div>`);
                  } else {
                    return [
                      vueExports.createVNode("div", { class: "flex flex-col gap-8 lg:grid-cols-[1fr_0.5fr] xl:grid" }, [
                        vueExports.createVNode("div", null, [
                          (vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(cartContentWrap.value), {
                            class: { "xl:h-[1000px]": !vueExports.unref(isMobile) }
                          }, {
                            default: vueExports.withCtx(() => [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.cart.formatedItems, (item) => {
                                return vueExports.openBlock(), vueExports.createBlock(_sfc_main$4, {
                                  key: item.id + vueExports.useId(),
                                  item,
                                  class: "mb-2 last:mb-0"
                                }, vueExports.createSlots({
                                  addToCart: vueExports.withCtx(() => [
                                    !item.is_gift ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                      item.is_available ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$6), {
                                        key: 0,
                                        id: item.item.id,
                                        type: item.is_combo ? "combo" : "product",
                                        "count-in-cart": item.quantity,
                                        "can-quick-buy": false,
                                        "is-combo": item.is_combo
                                      }, null, 8, ["id", "type", "count-in-cart", "is-combo"])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                                        key: 1,
                                        class: "flex items-center gap-4"
                                      }, [
                                        vueExports.createVNode("span", { class: "text-mob-small-bold" }, "Нет в наличии"),
                                        vueExports.createVNode(_sfc_main$7, {
                                          label: "Под заказ",
                                          rounded: "",
                                          size: "small"
                                        })
                                      ]))
                                    ], 64)) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                                      item.is_gift ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                        key: 0,
                                        class: "text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"
                                      }, vueExports.toDisplayString(item.quantity) + " шт ", 1)) : vueExports.createCommentVNode("", true)
                                    ], 64))
                                  ]),
                                  removeGiftPosition: vueExports.withCtx(({ giftId, giftQuantity }) => [
                                    vueExports.createVNode(_sfc_main$5, {
                                      id: giftId,
                                      type: "product",
                                      "count-in-cart": giftQuantity,
                                      "with-confirm": ""
                                    }, null, 8, ["id", "count-in-cart"])
                                  ]),
                                  _: 2
                                }, [
                                  item.can_delete ? {
                                    name: "removePosition",
                                    fn: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$5, {
                                        id: item.item.id,
                                        type: item.is_combo ? "combo" : "product",
                                        "count-in-cart": item.quantity
                                      }, null, 8, ["id", "type", "count-in-cart"])
                                    ]),
                                    key: "0"
                                  } : void 0
                                ]), 1032, ["item"]);
                              }), 128))
                            ]),
                            _: 1
                          }, 8, ["class"]))
                        ]),
                        vueExports.createVNode("aside", { class: "flex w-full flex-col gap-2 xl:max-w-[480px]" }, [
                          vueExports.createVNode("div", { class: "bg-light-gray rounded-20 p-3 sm:p-4" }, [
                            vueExports.createVNode("h3", { class: "text-small-medium sm:text-default-medium" }, vueExports.toDisplayString(vueExports.unref(t)("cart_page.delivery")), 1),
                            vueExports.createVNode("div", { class: "mt-3 flex items-center gap-3 max-sm:flex-wrap sm:mt-6 sm:gap-6" }, [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(deliveryTypes.value, (deliveryType) => {
                                return vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: deliveryType.key,
                                  class: "flex items-center gap-2"
                                }, [
                                  vueExports.createVNode(_sfc_main$8, {
                                    modelValue: vueExports.unref(calculationModel).delivery_type,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(calculationModel).delivery_type = $event,
                                    "input-id": deliveryType.key,
                                    name: deliveryType.key,
                                    value: deliveryType.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                                  vueExports.createVNode("label", {
                                    class: "text-mob-small-reg cursor-pointer",
                                    for: deliveryType.key
                                  }, vueExports.toDisplayString(deliveryType.deliveryType), 9, ["for"])
                                ]);
                              }), 128))
                            ]),
                            vueExports.createVNode("div", { class: "mt-6" }, [
                              vueExports.createVNode("h4", { class: "text-mob-small-reg" }, vueExports.toDisplayString(vueExports.unref(t)("cart_page.delivery_address")), 1),
                              vueExports.createVNode("div", { class: "mt-3" }, [
                                props.auth.user && props.auth.user.addresses.length ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$9, {
                                  key: 0,
                                  modelValue: selectedAddress.value,
                                  "onUpdate:modelValue": [($event) => selectedAddress.value = $event, setCity],
                                  options: props.auth.user.addresses,
                                  fluid: "",
                                  "option-label": "final_address",
                                  variant: "filled",
                                  size: "large",
                                  class: "mb-2",
                                  placeholder: "Выберите адрес"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode(_sfc_main$9, {
                                  modelValue: vueExports.unref(selectedCity),
                                  "onUpdate:modelValue": ($event) => vueExports.isRef(selectedCity) ? selectedCity.value = $event : null,
                                  options: citiesList.value,
                                  "option-label": "name",
                                  fluid: "",
                                  variant: "filled",
                                  size: "large",
                                  class: "mb-2",
                                  placeholder: vueExports.unref(t)("cart_page.city")
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"]),
                                !isOtherCity.value && vueExports.unref(calculationModel).delivery_type === "courier" ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$9, {
                                  key: 1,
                                  modelValue: vueExports.unref(calculationModel).delivery_zone_id,
                                  "onUpdate:modelValue": ($event) => vueExports.unref(calculationModel).delivery_zone_id = $event,
                                  options: deliveryZones.value,
                                  "option-value": "id",
                                  "option-label": "name",
                                  fluid: "",
                                  variant: "filled",
                                  size: "large",
                                  placeholder: "Выберите зону доставки"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : vueExports.createCommentVNode("", true)
                              ])
                            ]),
                            vueExports.unref(calculationModel).delivery_type === "pickup" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 0,
                              class: "mt-4 overflow-hidden rounded-2xl"
                            }, [
                              vueExports.createVNode(vueExports.unref(_sfc_main$a), {
                                zoom: vueExports.unref(selectedLocation) ? 19 : 11,
                                center: vueExports.unref(locationCoordinates),
                                height: "200px",
                                class: "mx-auto mb-3 max-w-[95%]"
                              }, {
                                marker: vueExports.withCtx(() => [
                                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(locationsList), (location) => {
                                    return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(YandexMapDefaultMarker), {
                                      key: location.id,
                                      settings: {
                                        coordinates: [Number(location.longitude), Number(location.latitude)]
                                      }
                                    }, null, 8, ["settings"]);
                                  }), 128))
                                ]),
                                _: 1
                              }, 8, ["zoom", "center"]),
                              vueExports.createVNode(vueExports.unref(VScrollPanel), {
                                style: { maxHeight: "440px", height: `${vueExports.unref(pickUpLocationsContainerHeight)}px` }
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode("div", {
                                    ref_key: "pickUpLocationsContainer",
                                    ref: pickUpLocationsContainer,
                                    class: "grid grid-cols-1 gap-2"
                                  }, [
                                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(locationsList), (location) => {
                                      return vueExports.openBlock(), vueExports.createBlock("div", {
                                        key: location.id,
                                        class: "flex gap-2 rounded-2xl bg-white p-3"
                                      }, [
                                        vueExports.createVNode("div", { class: "grid grow gap-3" }, [
                                          vueExports.createVNode("p", { class: "text-mob-small-medium" }, vueExports.toDisplayString(location.title), 1),
                                          vueExports.createVNode("div", { class: "grid gap-2 min-[820px]:grid-cols-2" }, [
                                            location.phone ? (vueExports.openBlock(), vueExports.createBlock("a", {
                                              key: 0,
                                              href: `tel:${location.phone.replace(/(?!^\+)[^\d]/g, "")}`,
                                              class: "text-mob-small-bold inline-flex items-center gap-2"
                                            }, [
                                              vueExports.createVNode(vueExports.unref(IconPhone), { class: "h-6 w-6 shrink-0" }),
                                              vueExports.createTextVNode(" " + vueExports.toDisplayString(location.phone), 1)
                                            ], 8, ["href"])) : vueExports.createCommentVNode("", true),
                                            location.working_hours_from || location.working_hours_to ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                              key: 1,
                                              class: "text-mob-small-reg flex items-center gap-2"
                                            }, [
                                              vueExports.createVNode(vueExports.unref(IconClockOutline), { class: "h-6 w-6 shrink-0" }),
                                              vueExports.createTextVNode(" " + vueExports.toDisplayString(getWorkingHours(location)), 1)
                                            ])) : vueExports.createCommentVNode("", true),
                                            vueExports.createVNode("div", { class: "text-mob-small-reg flex items-center gap-2" }, [
                                              vueExports.createVNode(vueExports.unref(IconPin), { class: "shrink-0" }),
                                              vueExports.createTextVNode(" " + vueExports.toDisplayString(location.fullAddress), 1)
                                            ]),
                                            location.site ? (vueExports.openBlock(), vueExports.createBlock("a", {
                                              key: 2,
                                              href: location.site,
                                              class: "text-mob-small-reg flex items-center gap-2"
                                            }, [
                                              vueExports.createVNode(vueExports.unref(IconGlobeOutline), { class: "h-6 w-6 shrink-0" }),
                                              vueExports.createTextVNode(" " + vueExports.toDisplayString(location.site), 1)
                                            ], 8, ["href"])) : vueExports.createCommentVNode("", true)
                                          ])
                                        ]),
                                        vueExports.createVNode(_sfc_main$8, {
                                          modelValue: vueExports.unref(selectedLocation),
                                          "onUpdate:modelValue": [($event) => vueExports.isRef(selectedLocation) ? selectedLocation.value = $event : null, onSelectPickupLocation],
                                          value: location
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                                      ]);
                                    }), 128))
                                  ], 512)
                                ]),
                                _: 1
                              }, 8, ["style"])
                            ])) : vueExports.createCommentVNode("", true),
                            (vueExports.unref(calculationModel).pickup_location_id || vueExports.unref(calculationModel).delivery_zone_id) && !vueExports.unref(loading) || isOtherCity.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 1,
                              class: "border-t-solid border-t-filling mt-3 border-t pt-2"
                            }, [
                              vueExports.createVNode("h5", { class: "text-mob-small-reg mb-2" }, "Детали доставки"),
                              vueExports.createVNode("dl", { class: "grid grid-cols-[minmax(0,140px)_1fr] items-start gap-2" }, [
                                vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Срок доставки:"),
                                vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                  isOtherCity.value ? (vueExports.openBlock(), vueExports.createBlock("span", {
                                    key: 0,
                                    class: "inline-flex items-center gap-1"
                                  }, [
                                    vueExports.createVNode("span", null, "Рассчитывается индивидуально"),
                                    vueExports.createVNode(vueExports.unref(_sfc_main$b), { value: "Срок доставки зависит от адреса, веса и стоимости заказа" })
                                  ])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                                    vueExports.createTextVNode(vueExports.toDisplayString(formattingDeliveryDate.value), 1)
                                  ], 64))
                                ]),
                                !isOtherCity.value && vueExports.unref(calculationModel).delivery_type !== "pickup" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                  vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Зона доставки:"),
                                  vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                    vueExports.createVNode("span", { class: "inline-flex items-center gap-1" }, [
                                      vueExports.createVNode("span", { class: "text-mob-small-medium" }, vueExports.toDisplayString((_g = vueExports.unref(calculateData)) == null ? void 0 : _g.delivery_detail.delivery_zone_name), 1),
                                      vueExports.createVNode("span", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString((_h = vueExports.unref(calculateData)) == null ? void 0 : _h.delivery_detail.delivery_zone_description), 1)
                                    ])
                                  ])
                                ], 64)) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Стоимость доставки:"),
                                vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                  vueExports.createVNode("span", { class: "inline-flex items-center gap-1" }, [
                                    vueExports.createVNode("span", null, vueExports.toDisplayString(isOtherCity.value ? "Рассчитывается индивидуально" : `${(_i = vueExports.unref(calculateData)) == null ? void 0 : _i.delivery_detail.delivery_price} руб`), 1),
                                    vueExports.createVNode(vueExports.unref(_sfc_main$b), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" })
                                  ])
                                ])
                              ])
                            ])) : vueExports.createCommentVNode("", true)
                          ]),
                          vueExports.createVNode(vueExports.unref(_sfc_main$c), {
                            "bonus-spent-limit": (_k = (_j = vueExports.unref(calculateData)) == null ? void 0 : _j.order_detail) == null ? void 0 : _k.bonus_spent_limit,
                            onPromocodeApplied,
                            onBonusesToggled: handleBonusesToggled
                          }, null, 8, ["bonus-spent-limit"]),
                          vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                            "order-detail": ((_l = vueExports.unref(calculateData)) == null ? void 0 : _l.order_detail) ?? null,
                            "is-delivery-price-enabled": !!vueExports.unref(calculationModel).delivery_zone_id || !!vueExports.unref(calculationModel).pickup_location_id,
                            "is-individual": isOtherCity.value
                          }, {
                            footer: vueExports.withCtx(() => [
                              vueExports.createVNode("div", { class: "mt-6" }, [
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode(vueExports.unref(VButton), {
                                    label: vueExports.unref(t)("cart_page.checkout"),
                                    disabled: _ctx.cart.cartQuantity === 0,
                                    class: "w-full",
                                    onClick: toCreateOrder
                                  }, null, 8, ["label", "disabled"])
                                ]),
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode(vueExports.unref(link_default), {
                                    href: "/page/return-exchange",
                                    class: "text-mob-small-reg mt-4 flex items-center gap-2 pb-2"
                                  }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("cart_page.return_exchange_terms")), 1),
                                      vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                        width: "20px",
                                        height: "20px"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ])
                            ]),
                            _: 1
                          }, 8, ["order-detail", "is-delivery-price-enabled", "is-individual"])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), null, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-light-gray mx-auto max-w-[640px] rounded-[40px]"${_scopeId2}><div class="flex flex-col items-center gap-4 p-6 sm:flex-row"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$e), {
                      src: "/images/test-images/EmptyCart.webp",
                      alt: "Пустая корзина",
                      class: "-mt-12",
                      "img-classes": "w-[120px] h-[115px] sm:w-[200px] sm:h-[140px]"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div${_scopeId2}><h4 class="text-default-medium sm:text-heavy-medium max-sm:text-center"${_scopeId2}>Корзина пока пуста</h4><p class="text-subsidiary-reg sm:text-mob-small-reg mt-2 max-sm:text-center"${_scopeId2}> Выбирайте понравившиеся товары в нашем каталоге и добавляйте их в корзину </p><div class="mt-6"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                      label: "В каталог",
                      class: "max-sm:mx-auto",
                      onClick: ($event) => vueExports.unref(router).visit(_ctx.route("catalog.index"))
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div></div></div>`);
                  } else {
                    return [
                      vueExports.createVNode("div", { class: "bg-light-gray mx-auto max-w-[640px] rounded-[40px]" }, [
                        vueExports.createVNode("div", { class: "flex flex-col items-center gap-4 p-6 sm:flex-row" }, [
                          vueExports.createVNode(vueExports.unref(_sfc_main$e), {
                            src: "/images/test-images/EmptyCart.webp",
                            alt: "Пустая корзина",
                            class: "-mt-12",
                            "img-classes": "w-[120px] h-[115px] sm:w-[200px] sm:h-[140px]"
                          }),
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("h4", { class: "text-default-medium sm:text-heavy-medium max-sm:text-center" }, "Корзина пока пуста"),
                            vueExports.createVNode("p", { class: "text-subsidiary-reg sm:text-mob-small-reg mt-2 max-sm:text-center" }, " Выбирайте понравившиеся товары в нашем каталоге и добавляйте их в корзину "),
                            vueExports.createVNode("div", { class: "mt-6" }, [
                              vueExports.createVNode(vueExports.unref(VButton), {
                                label: "В каталог",
                                class: "max-sm:mx-auto",
                                onClick: ($event) => vueExports.unref(router).visit(_ctx.route("catalog.index"))
                              }, null, 8, ["onClick"])
                            ])
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            if (_ctx.cart.cartQuantity > 0) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                title: vueExports.unref(t)("product_detail_card.often_bought_with"),
                class: "mt-12 max-[640px]:!p-0 max-[640px]:!pl-4"
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                      slides: _ctx.special_products,
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
                            "degree-type": slide.degree_type,
                            "is-new": slide.is_new,
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
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$f), {
                                  id: slide.id,
                                  "initial-value": slide.is_wishlist
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                    id: slide.id,
                                    "initial-value": slide.is_wishlist
                                  }, null, 8, ["id", "initial-value"])
                                ];
                              }
                            }),
                            footer: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
                                  id: slide.id,
                                  "count-in-cart": slide.count_in_cart,
                                  quantity: slide.quantity
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$6), {
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
                              "degree-type": slide.degree_type,
                              "is-new": slide.is_new,
                              "sale-percent": slide.sale_percent,
                              categories: slide.tags.map((b) => b.name) ?? [],
                              unit: slide.weight_type,
                              price: Number(slide.sale_price) ?? 0,
                              "price-unit": slide.price_type,
                              "old-price": Number(slide.price) ?? 0,
                              cashback_percent: slide.cashback_percent
                            }, {
                              favoriteButton: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                  id: slide.id,
                                  "initial-value": slide.is_wishlist
                                }, null, 8, ["id", "initial-value"])
                              ]),
                              footer: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                                  id: slide.id,
                                  "count-in-cart": slide.count_in_cart,
                                  quantity: slide.quantity
                                }, null, 8, ["id", "count-in-cart", "quantity"])
                              ]),
                              _: 2
                            }, 1032, ["id", "slug", "has-gift", "title", "images", "weight", "description", "is-favorite", "degree-type", "is-new", "sale-percent", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                        slides: _ctx.special_products,
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
                            "degree-type": slide.degree_type,
                            "is-new": slide.is_new,
                            "sale-percent": slide.sale_percent,
                            categories: slide.tags.map((b) => b.name) ?? [],
                            unit: slide.weight_type,
                            price: Number(slide.sale_price) ?? 0,
                            "price-unit": slide.price_type,
                            "old-price": Number(slide.price) ?? 0,
                            cashback_percent: slide.cashback_percent
                          }, {
                            favoriteButton: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                id: slide.id,
                                "initial-value": slide.is_wishlist
                              }, null, 8, ["id", "initial-value"])
                            ]),
                            footer: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                                id: slide.id,
                                "count-in-cart": slide.count_in_cart,
                                quantity: slide.quantity
                              }, null, 8, ["id", "count-in-cart", "quantity"])
                            ]),
                            _: 2
                          }, 1032, ["id", "slug", "has-gift", "title", "images", "weight", "description", "is-favorite", "degree-type", "is-new", "sale-percent", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
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
            if (_ctx.special_products.length > 0) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                title: vueExports.unref(t)("main_page.special_offers"),
                class: "mt-12 max-[640px]:!p-0 max-[640px]:!pl-4"
              }, {
                headerAction: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      href: _ctx.route("main-page"),
                      class: "flex items-center gap-2"
                    }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}>Все</span>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
                            width: "16px",
                            height: "16px"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode("span", null, "Все"),
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
                      vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4" }, [
                        vueExports.createVNode(vueExports.unref(link_default), {
                          href: _ctx.route("main-page"),
                          class: "flex items-center gap-2"
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode("span", null, "Все"),
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
                      slides: _ctx.special_products,
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
                            "has-gift": slide.is_have_gift,
                            title: slide.name,
                            slug: slide.slug,
                            images: slide.images.map((i) => i.path),
                            weight: slide.weight,
                            description: slide.short_description,
                            "is-favorite": slide.is_wishlist,
                            "degree-type": slide.degree_type,
                            "is-new": slide.is_new,
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
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$f), {
                                  id: slide.id,
                                  "initial-value": slide.is_wishlist
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                    id: slide.id,
                                    "initial-value": slide.is_wishlist
                                  }, null, 8, ["id", "initial-value"])
                                ];
                              }
                            }),
                            footer: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
                                  id: slide.id,
                                  "count-in-cart": slide.count_in_cart,
                                  quantity: slide.quantity
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$6), {
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
                              title: slide.name,
                              slug: slide.slug,
                              images: slide.images.map((i) => i.path),
                              weight: slide.weight,
                              description: slide.short_description,
                              "is-favorite": slide.is_wishlist,
                              "degree-type": slide.degree_type,
                              "is-new": slide.is_new,
                              "sale-percent": slide.sale_percent,
                              categories: slide.tags.map((b) => b.name) ?? [],
                              unit: slide.weight_type,
                              price: Number(slide.sale_price) ?? 0,
                              "price-unit": slide.price_type,
                              "old-price": Number(slide.price) ?? 0,
                              cashback_percent: slide.cashback_percent
                            }, {
                              favoriteButton: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                  id: slide.id,
                                  "initial-value": slide.is_wishlist
                                }, null, 8, ["id", "initial-value"])
                              ]),
                              footer: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                                  id: slide.id,
                                  "count-in-cart": slide.count_in_cart,
                                  quantity: slide.quantity
                                }, null, 8, ["id", "count-in-cart", "quantity"])
                              ]),
                              _: 2
                            }, 1032, ["id", "has-gift", "title", "slug", "images", "weight", "description", "is-favorite", "degree-type", "is-new", "sale-percent", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                        slides: _ctx.special_products,
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
                            "has-gift": slide.is_have_gift,
                            title: slide.name,
                            slug: slide.slug,
                            images: slide.images.map((i) => i.path),
                            weight: slide.weight,
                            description: slide.short_description,
                            "is-favorite": slide.is_wishlist,
                            "degree-type": slide.degree_type,
                            "is-new": slide.is_new,
                            "sale-percent": slide.sale_percent,
                            categories: slide.tags.map((b) => b.name) ?? [],
                            unit: slide.weight_type,
                            price: Number(slide.sale_price) ?? 0,
                            "price-unit": slide.price_type,
                            "old-price": Number(slide.price) ?? 0,
                            cashback_percent: slide.cashback_percent
                          }, {
                            favoriteButton: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                id: slide.id,
                                "initial-value": slide.is_wishlist
                              }, null, 8, ["id", "initial-value"])
                            ]),
                            footer: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                                id: slide.id,
                                "count-in-cart": slide.count_in_cart,
                                quantity: slide.quantity
                              }, null, 8, ["id", "count-in-cart", "quantity"])
                            ]),
                            _: 2
                          }, 1032, ["id", "has-gift", "title", "slug", "images", "weight", "description", "is-favorite", "degree-type", "is-new", "sale-percent", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
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
            if (_ctx.recipes.length > 0) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                title: vueExports.unref(t)("product_detail_card.chef_recipes"),
                class: "mt-12 max-[640px]:!p-0 max-[640px]:!pl-4"
              }, {
                headerAction: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      href: _ctx.route("main-page"),
                      class: "flex items-center gap-2"
                    }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span${_scopeId3}>Все</span>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
                            width: "16px",
                            height: "16px"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode("span", null, "Все"),
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
                      vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4" }, [
                        vueExports.createVNode(vueExports.unref(link_default), {
                          href: _ctx.route("main-page"),
                          class: "flex items-center gap-2"
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode("span", null, "Все"),
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
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$g), {
                            id: slide.id,
                            title: slide.title,
                            description: slide.mini_description,
                            difficulty: slide.difficult,
                            portions: slide.number_of_persons,
                            "cook-time": slide.cooking_time_minutes,
                            image: slide.image.path,
                            "is-favorite": slide.is_wishlist
                          }, {
                            actions: vueExports.withCtx(({ isFavorite }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$f), {
                                  id: slide.id,
                                  "initial-value": isFavorite,
                                  "item-type": "recipe"
                                }, null, _parent5, _scopeId4));
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$h), {
                                  url: _ctx.route("recipe.show", { recipe: slide.id })
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                    id: slide.id,
                                    "initial-value": isFavorite,
                                    "item-type": "recipe"
                                  }, null, 8, ["id", "initial-value"]),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$h), {
                                    url: _ctx.route("recipe.show", { recipe: slide.id })
                                  }, null, 8, ["url"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode(vueExports.unref(_sfc_main$g), {
                              id: slide.id,
                              title: slide.title,
                              description: slide.mini_description,
                              difficulty: slide.difficult,
                              portions: slide.number_of_persons,
                              "cook-time": slide.cooking_time_minutes,
                              image: slide.image.path,
                              "is-favorite": slide.is_wishlist
                            }, {
                              actions: vueExports.withCtx(({ isFavorite }) => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                  id: slide.id,
                                  "initial-value": isFavorite,
                                  "item-type": "recipe"
                                }, null, 8, ["id", "initial-value"]),
                                vueExports.createVNode(vueExports.unref(_sfc_main$h), {
                                  url: _ctx.route("recipe.show", { recipe: slide.id })
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
                        slide: vueExports.withCtx(({ slide }) => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$g), {
                            id: slide.id,
                            title: slide.title,
                            description: slide.mini_description,
                            difficulty: slide.difficult,
                            portions: slide.number_of_persons,
                            "cook-time": slide.cooking_time_minutes,
                            image: slide.image.path,
                            "is-favorite": slide.is_wishlist
                          }, {
                            actions: vueExports.withCtx(({ isFavorite }) => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                id: slide.id,
                                "initial-value": isFavorite,
                                "item-type": "recipe"
                              }, null, 8, ["id", "initial-value"]),
                              vueExports.createVNode(vueExports.unref(_sfc_main$h), {
                                url: _ctx.route("recipe.show", { recipe: slide.id })
                              }, null, 8, ["url"])
                            ]),
                            _: 2
                          }, 1032, ["id", "title", "description", "difficulty", "portions", "cook-time", "image", "is-favorite"])
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
          } else {
            return [
              vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
                key: 0,
                model: breadcrumbItems,
                class: "mx-3 mb-4 !shrink-0 !overflow-auto bg-white"
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
              })) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
                key: 1,
                model: breadcrumbItems,
                class: "mx-8 mt-3"
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
              })),
              ((_b = _ctx.cartBanners) == null ? void 0 : _b.length) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 2,
                class: "mt-6 px-6 sm:px-8"
              }, [
                vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                  "slider-options": {
                    spaceBetween: 20,
                    breakpoints: {
                      0: {
                        slidesPerView: 1
                      }
                    }
                  },
                  slides: _ctx.cartBanners
                }, {
                  slide: vueExports.withCtx(({ slide }) => [
                    vueExports.createVNode("div", {
                      style: { backgroundImage: `url(${slide.image.path}), linear-gradient(to bottom, rgba(2, 40, 63, 0), rgba(2, 40, 63, 1))` },
                      class: "rounded-20 flex min-h-[238px] w-full items-end bg-cover bg-center bg-no-repeat p-4 text-white bg-blend-color md:min-h-[193px] md:items-center md:p-6"
                    }, [
                      vueExports.createVNode("div", { class: "grid gap-2" }, [
                        vueExports.createVNode("h2", { class: "text-vast-mob-title-bold md:text-vast-title-bold uppercase" }, vueExports.toDisplayString(slide.title), 1),
                        vueExports.createVNode("p", { class: "text-mob-small-bold md:text-default-bold" }, vueExports.toDisplayString(slide.description), 1),
                        vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(slide.addition_description), 1)
                      ])
                    ], 4)
                  ]),
                  _: 1
                }, 8, ["slides"])
              ])) : vueExports.createCommentVNode("", true),
              _ctx.cart.items.length > 0 ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$3), { key: 3 }, {
                title: vueExports.withCtx(() => [
                  vueExports.createVNode("h2", { class: "text-default-bold sm:text-heavy-bold" }, [
                    vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("cart.cart")) + " ", 1),
                    vueExports.createVNode("span", { class: "text-subsidiary text-default-medium sm:text-heavy font-normal" }, vueExports.toDisplayString(vueExports.unref(t)("cart.goods", _ctx.cart.cartQuantity)), 1)
                  ])
                ]),
                headerAction: vueExports.withCtx(() => [
                  vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white" }, [
                    vueExports.createVNode(vueExports.unref(link_default), {
                      href: _ctx.route("catalog.index"),
                      class: "flex items-center gap-2"
                    }, {
                      default: vueExports.withCtx(() => [
                        !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 0 }, vueExports.toDisplayString(vueExports.unref(t)("cart_page.continue_shopping")), 1)) : (vueExports.openBlock(), vueExports.createBlock("span", { key: 1 }, "В каталог")),
                        vueExports.createVNode(vueExports.unref(IconCaretRight), {
                          width: "16px",
                          height: "16px"
                        })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ]),
                default: vueExports.withCtx(() => {
                  var _a2, _b2, _c, _d, _e, _f;
                  return [
                    vueExports.createVNode("div", { class: "flex flex-col gap-8 lg:grid-cols-[1fr_0.5fr] xl:grid" }, [
                      vueExports.createVNode("div", null, [
                        (vueExports.openBlock(), vueExports.createBlock(vueExports.resolveDynamicComponent(cartContentWrap.value), {
                          class: { "xl:h-[1000px]": !vueExports.unref(isMobile) }
                        }, {
                          default: vueExports.withCtx(() => [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.cart.formatedItems, (item) => {
                              return vueExports.openBlock(), vueExports.createBlock(_sfc_main$4, {
                                key: item.id + vueExports.useId(),
                                item,
                                class: "mb-2 last:mb-0"
                              }, vueExports.createSlots({
                                addToCart: vueExports.withCtx(() => [
                                  !item.is_gift ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                    item.is_available ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$6), {
                                      key: 0,
                                      id: item.item.id,
                                      type: item.is_combo ? "combo" : "product",
                                      "count-in-cart": item.quantity,
                                      "can-quick-buy": false,
                                      "is-combo": item.is_combo
                                    }, null, 8, ["id", "type", "count-in-cart", "is-combo"])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 1,
                                      class: "flex items-center gap-4"
                                    }, [
                                      vueExports.createVNode("span", { class: "text-mob-small-bold" }, "Нет в наличии"),
                                      vueExports.createVNode(_sfc_main$7, {
                                        label: "Под заказ",
                                        rounded: "",
                                        size: "small"
                                      })
                                    ]))
                                  ], 64)) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                                    item.is_gift ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 0,
                                      class: "text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"
                                    }, vueExports.toDisplayString(item.quantity) + " шт ", 1)) : vueExports.createCommentVNode("", true)
                                  ], 64))
                                ]),
                                removeGiftPosition: vueExports.withCtx(({ giftId, giftQuantity }) => [
                                  vueExports.createVNode(_sfc_main$5, {
                                    id: giftId,
                                    type: "product",
                                    "count-in-cart": giftQuantity,
                                    "with-confirm": ""
                                  }, null, 8, ["id", "count-in-cart"])
                                ]),
                                _: 2
                              }, [
                                item.can_delete ? {
                                  name: "removePosition",
                                  fn: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$5, {
                                      id: item.item.id,
                                      type: item.is_combo ? "combo" : "product",
                                      "count-in-cart": item.quantity
                                    }, null, 8, ["id", "type", "count-in-cart"])
                                  ]),
                                  key: "0"
                                } : void 0
                              ]), 1032, ["item"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["class"]))
                      ]),
                      vueExports.createVNode("aside", { class: "flex w-full flex-col gap-2 xl:max-w-[480px]" }, [
                        vueExports.createVNode("div", { class: "bg-light-gray rounded-20 p-3 sm:p-4" }, [
                          vueExports.createVNode("h3", { class: "text-small-medium sm:text-default-medium" }, vueExports.toDisplayString(vueExports.unref(t)("cart_page.delivery")), 1),
                          vueExports.createVNode("div", { class: "mt-3 flex items-center gap-3 max-sm:flex-wrap sm:mt-6 sm:gap-6" }, [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(deliveryTypes.value, (deliveryType) => {
                              return vueExports.openBlock(), vueExports.createBlock("div", {
                                key: deliveryType.key,
                                class: "flex items-center gap-2"
                              }, [
                                vueExports.createVNode(_sfc_main$8, {
                                  modelValue: vueExports.unref(calculationModel).delivery_type,
                                  "onUpdate:modelValue": ($event) => vueExports.unref(calculationModel).delivery_type = $event,
                                  "input-id": deliveryType.key,
                                  name: deliveryType.key,
                                  value: deliveryType.value
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                                vueExports.createVNode("label", {
                                  class: "text-mob-small-reg cursor-pointer",
                                  for: deliveryType.key
                                }, vueExports.toDisplayString(deliveryType.deliveryType), 9, ["for"])
                              ]);
                            }), 128))
                          ]),
                          vueExports.createVNode("div", { class: "mt-6" }, [
                            vueExports.createVNode("h4", { class: "text-mob-small-reg" }, vueExports.toDisplayString(vueExports.unref(t)("cart_page.delivery_address")), 1),
                            vueExports.createVNode("div", { class: "mt-3" }, [
                              props.auth.user && props.auth.user.addresses.length ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$9, {
                                key: 0,
                                modelValue: selectedAddress.value,
                                "onUpdate:modelValue": [($event) => selectedAddress.value = $event, setCity],
                                options: props.auth.user.addresses,
                                fluid: "",
                                "option-label": "final_address",
                                variant: "filled",
                                size: "large",
                                class: "mb-2",
                                placeholder: "Выберите адрес"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : vueExports.createCommentVNode("", true),
                              vueExports.createVNode(_sfc_main$9, {
                                modelValue: vueExports.unref(selectedCity),
                                "onUpdate:modelValue": ($event) => vueExports.isRef(selectedCity) ? selectedCity.value = $event : null,
                                options: citiesList.value,
                                "option-label": "name",
                                fluid: "",
                                variant: "filled",
                                size: "large",
                                class: "mb-2",
                                placeholder: vueExports.unref(t)("cart_page.city")
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"]),
                              !isOtherCity.value && vueExports.unref(calculationModel).delivery_type === "courier" ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$9, {
                                key: 1,
                                modelValue: vueExports.unref(calculationModel).delivery_zone_id,
                                "onUpdate:modelValue": ($event) => vueExports.unref(calculationModel).delivery_zone_id = $event,
                                options: deliveryZones.value,
                                "option-value": "id",
                                "option-label": "name",
                                fluid: "",
                                variant: "filled",
                                size: "large",
                                placeholder: "Выберите зону доставки"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : vueExports.createCommentVNode("", true)
                            ])
                          ]),
                          vueExports.unref(calculationModel).delivery_type === "pickup" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "mt-4 overflow-hidden rounded-2xl"
                          }, [
                            vueExports.createVNode(vueExports.unref(_sfc_main$a), {
                              zoom: vueExports.unref(selectedLocation) ? 19 : 11,
                              center: vueExports.unref(locationCoordinates),
                              height: "200px",
                              class: "mx-auto mb-3 max-w-[95%]"
                            }, {
                              marker: vueExports.withCtx(() => [
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(locationsList), (location) => {
                                  return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(YandexMapDefaultMarker), {
                                    key: location.id,
                                    settings: {
                                      coordinates: [Number(location.longitude), Number(location.latitude)]
                                    }
                                  }, null, 8, ["settings"]);
                                }), 128))
                              ]),
                              _: 1
                            }, 8, ["zoom", "center"]),
                            vueExports.createVNode(vueExports.unref(VScrollPanel), {
                              style: { maxHeight: "440px", height: `${vueExports.unref(pickUpLocationsContainerHeight)}px` }
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode("div", {
                                  ref_key: "pickUpLocationsContainer",
                                  ref: pickUpLocationsContainer,
                                  class: "grid grid-cols-1 gap-2"
                                }, [
                                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(locationsList), (location) => {
                                    return vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: location.id,
                                      class: "flex gap-2 rounded-2xl bg-white p-3"
                                    }, [
                                      vueExports.createVNode("div", { class: "grid grow gap-3" }, [
                                        vueExports.createVNode("p", { class: "text-mob-small-medium" }, vueExports.toDisplayString(location.title), 1),
                                        vueExports.createVNode("div", { class: "grid gap-2 min-[820px]:grid-cols-2" }, [
                                          location.phone ? (vueExports.openBlock(), vueExports.createBlock("a", {
                                            key: 0,
                                            href: `tel:${location.phone.replace(/(?!^\+)[^\d]/g, "")}`,
                                            class: "text-mob-small-bold inline-flex items-center gap-2"
                                          }, [
                                            vueExports.createVNode(vueExports.unref(IconPhone), { class: "h-6 w-6 shrink-0" }),
                                            vueExports.createTextVNode(" " + vueExports.toDisplayString(location.phone), 1)
                                          ], 8, ["href"])) : vueExports.createCommentVNode("", true),
                                          location.working_hours_from || location.working_hours_to ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                            key: 1,
                                            class: "text-mob-small-reg flex items-center gap-2"
                                          }, [
                                            vueExports.createVNode(vueExports.unref(IconClockOutline), { class: "h-6 w-6 shrink-0" }),
                                            vueExports.createTextVNode(" " + vueExports.toDisplayString(getWorkingHours(location)), 1)
                                          ])) : vueExports.createCommentVNode("", true),
                                          vueExports.createVNode("div", { class: "text-mob-small-reg flex items-center gap-2" }, [
                                            vueExports.createVNode(vueExports.unref(IconPin), { class: "shrink-0" }),
                                            vueExports.createTextVNode(" " + vueExports.toDisplayString(location.fullAddress), 1)
                                          ]),
                                          location.site ? (vueExports.openBlock(), vueExports.createBlock("a", {
                                            key: 2,
                                            href: location.site,
                                            class: "text-mob-small-reg flex items-center gap-2"
                                          }, [
                                            vueExports.createVNode(vueExports.unref(IconGlobeOutline), { class: "h-6 w-6 shrink-0" }),
                                            vueExports.createTextVNode(" " + vueExports.toDisplayString(location.site), 1)
                                          ], 8, ["href"])) : vueExports.createCommentVNode("", true)
                                        ])
                                      ]),
                                      vueExports.createVNode(_sfc_main$8, {
                                        modelValue: vueExports.unref(selectedLocation),
                                        "onUpdate:modelValue": [($event) => vueExports.isRef(selectedLocation) ? selectedLocation.value = $event : null, onSelectPickupLocation],
                                        value: location
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "value"])
                                    ]);
                                  }), 128))
                                ], 512)
                              ]),
                              _: 1
                            }, 8, ["style"])
                          ])) : vueExports.createCommentVNode("", true),
                          (vueExports.unref(calculationModel).pickup_location_id || vueExports.unref(calculationModel).delivery_zone_id) && !vueExports.unref(loading) || isOtherCity.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 1,
                            class: "border-t-solid border-t-filling mt-3 border-t pt-2"
                          }, [
                            vueExports.createVNode("h5", { class: "text-mob-small-reg mb-2" }, "Детали доставки"),
                            vueExports.createVNode("dl", { class: "grid grid-cols-[minmax(0,140px)_1fr] items-start gap-2" }, [
                              vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Срок доставки:"),
                              vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                isOtherCity.value ? (vueExports.openBlock(), vueExports.createBlock("span", {
                                  key: 0,
                                  class: "inline-flex items-center gap-1"
                                }, [
                                  vueExports.createVNode("span", null, "Рассчитывается индивидуально"),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$b), { value: "Срок доставки зависит от адреса, веса и стоимости заказа" })
                                ])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                                  vueExports.createTextVNode(vueExports.toDisplayString(formattingDeliveryDate.value), 1)
                                ], 64))
                              ]),
                              !isOtherCity.value && vueExports.unref(calculationModel).delivery_type !== "pickup" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Зона доставки:"),
                                vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                  vueExports.createVNode("span", { class: "inline-flex items-center gap-1" }, [
                                    vueExports.createVNode("span", { class: "text-mob-small-medium" }, vueExports.toDisplayString((_a2 = vueExports.unref(calculateData)) == null ? void 0 : _a2.delivery_detail.delivery_zone_name), 1),
                                    vueExports.createVNode("span", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString((_b2 = vueExports.unref(calculateData)) == null ? void 0 : _b2.delivery_detail.delivery_zone_description), 1)
                                  ])
                                ])
                              ], 64)) : vueExports.createCommentVNode("", true),
                              vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Стоимость доставки:"),
                              vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                vueExports.createVNode("span", { class: "inline-flex items-center gap-1" }, [
                                  vueExports.createVNode("span", null, vueExports.toDisplayString(isOtherCity.value ? "Рассчитывается индивидуально" : `${(_c = vueExports.unref(calculateData)) == null ? void 0 : _c.delivery_detail.delivery_price} руб`), 1),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$b), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" })
                                ])
                              ])
                            ])
                          ])) : vueExports.createCommentVNode("", true)
                        ]),
                        vueExports.createVNode(vueExports.unref(_sfc_main$c), {
                          "bonus-spent-limit": (_e = (_d = vueExports.unref(calculateData)) == null ? void 0 : _d.order_detail) == null ? void 0 : _e.bonus_spent_limit,
                          onPromocodeApplied,
                          onBonusesToggled: handleBonusesToggled
                        }, null, 8, ["bonus-spent-limit"]),
                        vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                          "order-detail": ((_f = vueExports.unref(calculateData)) == null ? void 0 : _f.order_detail) ?? null,
                          "is-delivery-price-enabled": !!vueExports.unref(calculationModel).delivery_zone_id || !!vueExports.unref(calculationModel).pickup_location_id,
                          "is-individual": isOtherCity.value
                        }, {
                          footer: vueExports.withCtx(() => [
                            vueExports.createVNode("div", { class: "mt-6" }, [
                              vueExports.createVNode("div", null, [
                                vueExports.createVNode(vueExports.unref(VButton), {
                                  label: vueExports.unref(t)("cart_page.checkout"),
                                  disabled: _ctx.cart.cartQuantity === 0,
                                  class: "w-full",
                                  onClick: toCreateOrder
                                }, null, 8, ["label", "disabled"])
                              ]),
                              vueExports.createVNode("div", null, [
                                vueExports.createVNode(vueExports.unref(link_default), {
                                  href: "/page/return-exchange",
                                  class: "text-mob-small-reg mt-4 flex items-center gap-2 pb-2"
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("cart_page.return_exchange_terms")), 1),
                                    vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                      width: "20px",
                                      height: "20px"
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["order-detail", "is-delivery-price-enabled", "is-individual"])
                      ])
                    ])
                  ];
                }),
                _: 1
              })) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$3), { key: 4 }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode("div", { class: "bg-light-gray mx-auto max-w-[640px] rounded-[40px]" }, [
                    vueExports.createVNode("div", { class: "flex flex-col items-center gap-4 p-6 sm:flex-row" }, [
                      vueExports.createVNode(vueExports.unref(_sfc_main$e), {
                        src: "/images/test-images/EmptyCart.webp",
                        alt: "Пустая корзина",
                        class: "-mt-12",
                        "img-classes": "w-[120px] h-[115px] sm:w-[200px] sm:h-[140px]"
                      }),
                      vueExports.createVNode("div", null, [
                        vueExports.createVNode("h4", { class: "text-default-medium sm:text-heavy-medium max-sm:text-center" }, "Корзина пока пуста"),
                        vueExports.createVNode("p", { class: "text-subsidiary-reg sm:text-mob-small-reg mt-2 max-sm:text-center" }, " Выбирайте понравившиеся товары в нашем каталоге и добавляйте их в корзину "),
                        vueExports.createVNode("div", { class: "mt-6" }, [
                          vueExports.createVNode(vueExports.unref(VButton), {
                            label: "В каталог",
                            class: "max-sm:mx-auto",
                            onClick: ($event) => vueExports.unref(router).visit(_ctx.route("catalog.index"))
                          }, null, 8, ["onClick"])
                        ])
                      ])
                    ])
                  ])
                ]),
                _: 1
              })),
              _ctx.cart.cartQuantity > 0 ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$3), {
                key: 5,
                title: vueExports.unref(t)("product_detail_card.often_bought_with"),
                class: "mt-12 max-[640px]:!p-0 max-[640px]:!pl-4"
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                    slides: _ctx.special_products,
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
                        "degree-type": slide.degree_type,
                        "is-new": slide.is_new,
                        "sale-percent": slide.sale_percent,
                        categories: slide.tags.map((b) => b.name) ?? [],
                        unit: slide.weight_type,
                        price: Number(slide.sale_price) ?? 0,
                        "price-unit": slide.price_type,
                        "old-price": Number(slide.price) ?? 0,
                        cashback_percent: slide.cashback_percent
                      }, {
                        favoriteButton: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                            id: slide.id,
                            "initial-value": slide.is_wishlist
                          }, null, 8, ["id", "initial-value"])
                        ]),
                        footer: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                            id: slide.id,
                            "count-in-cart": slide.count_in_cart,
                            quantity: slide.quantity
                          }, null, 8, ["id", "count-in-cart", "quantity"])
                        ]),
                        _: 2
                      }, 1032, ["id", "slug", "has-gift", "title", "images", "weight", "description", "is-favorite", "degree-type", "is-new", "sale-percent", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
                    ]),
                    _: 1
                  }, 8, ["slides"])
                ]),
                _: 1
              }, 8, ["title"])) : vueExports.createCommentVNode("", true),
              _ctx.special_products.length > 0 ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$3), {
                key: 6,
                title: vueExports.unref(t)("main_page.special_offers"),
                class: "mt-12 max-[640px]:!p-0 max-[640px]:!pl-4"
              }, {
                headerAction: vueExports.withCtx(() => [
                  vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4" }, [
                    vueExports.createVNode(vueExports.unref(link_default), {
                      href: _ctx.route("main-page"),
                      class: "flex items-center gap-2"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("span", null, "Все"),
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
                    slides: _ctx.special_products,
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
                        "has-gift": slide.is_have_gift,
                        title: slide.name,
                        slug: slide.slug,
                        images: slide.images.map((i) => i.path),
                        weight: slide.weight,
                        description: slide.short_description,
                        "is-favorite": slide.is_wishlist,
                        "degree-type": slide.degree_type,
                        "is-new": slide.is_new,
                        "sale-percent": slide.sale_percent,
                        categories: slide.tags.map((b) => b.name) ?? [],
                        unit: slide.weight_type,
                        price: Number(slide.sale_price) ?? 0,
                        "price-unit": slide.price_type,
                        "old-price": Number(slide.price) ?? 0,
                        cashback_percent: slide.cashback_percent
                      }, {
                        favoriteButton: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                            id: slide.id,
                            "initial-value": slide.is_wishlist
                          }, null, 8, ["id", "initial-value"])
                        ]),
                        footer: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                            id: slide.id,
                            "count-in-cart": slide.count_in_cart,
                            quantity: slide.quantity
                          }, null, 8, ["id", "count-in-cart", "quantity"])
                        ]),
                        _: 2
                      }, 1032, ["id", "has-gift", "title", "slug", "images", "weight", "description", "is-favorite", "degree-type", "is-new", "sale-percent", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
                    ]),
                    _: 1
                  }, 8, ["slides"])
                ]),
                _: 1
              }, 8, ["title"])) : vueExports.createCommentVNode("", true),
              _ctx.recipes.length > 0 ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$3), {
                key: 7,
                title: vueExports.unref(t)("product_detail_card.chef_recipes"),
                class: "mt-12 max-[640px]:!p-0 max-[640px]:!pl-4"
              }, {
                headerAction: vueExports.withCtx(() => [
                  vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4" }, [
                    vueExports.createVNode(vueExports.unref(link_default), {
                      href: _ctx.route("main-page"),
                      class: "flex items-center gap-2"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("span", null, "Все"),
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
                    slide: vueExports.withCtx(({ slide }) => [
                      vueExports.createVNode(vueExports.unref(_sfc_main$g), {
                        id: slide.id,
                        title: slide.title,
                        description: slide.mini_description,
                        difficulty: slide.difficult,
                        portions: slide.number_of_persons,
                        "cook-time": slide.cooking_time_minutes,
                        image: slide.image.path,
                        "is-favorite": slide.is_wishlist
                      }, {
                        actions: vueExports.withCtx(({ isFavorite }) => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                            id: slide.id,
                            "initial-value": isFavorite,
                            "item-type": "recipe"
                          }, null, 8, ["id", "initial-value"]),
                          vueExports.createVNode(vueExports.unref(_sfc_main$h), {
                            url: _ctx.route("recipe.show", { recipe: slide.id })
                          }, null, 8, ["url"])
                        ]),
                        _: 2
                      }, 1032, ["id", "title", "description", "difficulty", "portions", "cook-time", "image", "is-favorite"])
                    ]),
                    _: 1
                  }, 8, ["slides"])
                ]),
                _: 1
              }, 8, ["title"])) : vueExports.createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/cart/ui/CartPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
