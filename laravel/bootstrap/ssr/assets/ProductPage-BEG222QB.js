import { v as vueExports, M as useOrderCalculate, u as useScreenSize, s as serverRenderer_cjs_prodExports, V as VContainer, x as _sfc_main$1, l as link_default, n as _sfc_main$2, o as _sfc_main$3, G as IconCaretRight, P as _sfc_main$5, K as _sfc_main$6, S as _sfc_main$7, N as _sfc_main$8, ak as IconArrowDown, _ as _sfc_main$a, k as _sfc_main$b, W as _sfc_main$d, U as ProductCard, a4 as CombinationPreviewCard, a5 as _sfc_main$f } from "../ssr.js";
import { addDays, isToday, format, isTomorrow, differenceInCalendarDays } from "date-fns";
import { useI18n } from "vue-i18n";
import { _ as _sfc_main$c } from "./RecipeCard-BgvuIkQ1.js";
import _sfc_main$4 from "./ProductQuantityIndicator-BmwOXfWQ.js";
import _sfc_main$9 from "./ProductReviews-BMzPyRW8.js";
import ProductSlider from "./ProductSlider-BX2Z8Zhs.js";
import { P as ProductDelivery } from "./ProductDelivery-BXe-oVgu.js";
import { _ as _sfc_main$e } from "./VShare-C36WNIjH.js";
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
import "./IconChefHat-CbLzs3Yv.js";
import "./getFormattedTime-DfpF6FCc.js";
import "./reactToReview-DRKkDf2Q.js";
import "./IconArrowsDownUp-DpCY8QBc.js";
import "./IconThumbsDown-D69dI4Zk.js";
import "./IconThumbsUp-BHrWpxEP.js";
import "primevue/skeleton";
import "primevue/accordion";
import "primevue/accordioncontent";
import "@primevue/icons/chevronup";
import "primevue/accordionheader";
import "primevue/accordionpanel";
import "./Tabs-_owbj9IT.js";
import "primevue/tab";
import "primevue/tablist";
import "primevue/tabpanel";
import "primevue/tabpanels";
import "primevue/tabs";
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ProductPage",
  __ssrInlineRender: true,
  props: {
    product: {},
    recomended_recipes: {},
    recommended_products: {},
    user_purchased_products: {},
    auth: {},
    cities: {},
    combinations: {}
  },
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    const selectedCity = vueExports.ref();
    const selectedAddress = vueExports.shallowRef();
    const { calculateData, calculateOrder, calculationModel } = useOrderCalculate();
    calculationModel.delivery_type = "courier";
    calculationModel.product_id = props.product.id;
    const getFormattingDeliveryDate = (daysCount) => {
      const finalDate = addDays(/* @__PURE__ */ new Date(), daysCount);
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
    };
    const formattingDeliveryDate = vueExports.computed(() => {
      if (!calculateData.value || !calculateData.value.delivery_detail.delivery_zone_time_min) return "";
      return getFormattingDeliveryDate(calculateData.value.delivery_detail.delivery_zone_time_min);
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
    const hasNoZones = vueExports.computed(() => {
      var _a, _b;
      return !((((_b = (_a = selectedCity.value) == null ? void 0 : _a.delivery_zones) == null ? void 0 : _b.length) ?? 0) > 0);
    });
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
    const tabs = vueExports.computed(() => {
      const baseTabs = [
        { id: "about", label: t("product_detail_card.about_product") },
        { id: "reviews", label: `Отзывы (${props.product.reviews_count})` },
        { id: "delivery", label: t("product_detail_card.delivery") },
        { id: "manufacturer", label: t("product_detail_card.manufacturer") }
      ];
      if (props.product.cutting.content) {
        baseTabs.splice(3, 0, { id: "cutting", label: t("product_detail_card.cutting") });
      }
      return baseTabs;
    });
    const currentTab = vueExports.ref("about");
    const isExpanded = vueExports.ref(false);
    const isExpandable = vueExports.ref(false);
    const descriptionRef = vueExports.ref(null);
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const el = entry.target;
        const height = el.getBoundingClientRect().height;
        isExpandable.value = height > 42;
      }
    });
    vueExports.watch(descriptionRef, (el) => {
      if (el) {
        resizeObserver.observe(el);
      }
    });
    vueExports.onUnmounted(() => {
      resizeObserver.disconnect();
    });
    const toggle = () => {
      isExpanded.value = !isExpanded.value;
    };
    const firstAttributes = vueExports.computed(() => props.product.attributes.filter((a) => a.isFirstAttribute));
    const otherAttributes = vueExports.computed(() => props.product.attributes.filter((a) => !a.isFirstAttribute));
    const filledAttributesCount = vueExports.computed(() => props.product.attributes.filter((a) => !!a.value).length);
    const filledOtherAttributesCount = vueExports.computed(() => props.product.attributes.filter((a) => !a.isFirstAttribute && !!a.value).length);
    const breadcrumbItems = vueExports.computed(() => {
      const items = [
        { label: "Главная", route: route("main-page") },
        { label: "Каталог", route: route("catalog.index") }
      ];
      return [
        ...items,
        ...props.product.categories.map((el) => ({
          label: el.name,
          route: `/catalog/${el.slug}`
        })),
        { label: props.product.name, route: `/catalog/product/${props.product.slug}` }
      ];
    });
    function getEmbedLink(link) {
      var _a, _b;
      if (!link) return null;
      if (link.includes("youtube.com/watch?v=")) {
        const id = new URL(link).searchParams.get("v");
        return `https://www.youtube.com/embed/${id}`;
      }
      if (link.includes("youtu.be/")) {
        const id = link.split("youtu.be/")[1].split(/[?&]/)[0];
        return `https://www.youtube.com/embed/${id}`;
      }
      if (link.includes("rutube.ru/video/")) {
        const id = (_a = link.split("/video/")[1]) == null ? void 0 : _a.split("/")[0];
        return `https://rutube.ru/play/embed/${id}`;
      }
      if (link.includes("rutube.ru/play/embed/")) {
        return link;
      }
      if (link.includes("vimeo.com/")) {
        const id = (_b = link.split("vimeo.com/")[1]) == null ? void 0 : _b.split(/[?&]/)[0];
        return `https://player.vimeo.com/video/${id}`;
      }
      return link;
    }
    const embedLink = vueExports.computed(() => {
      var _a, _b;
      return getEmbedLink((_b = (_a = props.product) == null ? void 0 : _a.cutting) == null ? void 0 : _b.video_link);
    });
    vueExports.watch(selectedCity, (newCity) => {
      if (newCity) {
        calculationModel.city_id = newCity.id;
      }
    });
    vueExports.watchEffect(calculateOrder);
    const { isMobile } = useScreenSize();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), vueExports.mergeProps({ class: "text-text" }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (vueExports.unref(isMobile)) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
                model: breadcrumbItems.value,
                class: "mx-3 mb-4 !shrink-0 !overflow-auto bg-white"
              }, {
                item: vueExports.withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                      href: item.route,
                      only: ["products", "category_target"]
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
                        only: ["products", "category_target"]
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
                model: breadcrumbItems.value,
                class: "mx-8 mt-6"
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
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), { class: "max-sm:!p-0" }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T;
                if (_push3) {
                  _push3(`<div class="gap-8 lg:flex"${_scopeId2}><div class="flex-1"${_scopeId2}><div class="flex flex-col gap-8 max-md:items-center sm:flex-row"${_scopeId2}><div class="max-md:max-w-full"${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(ProductSlider, { product: _ctx.product }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full max-sm:px-6"${_scopeId2}><div class="text-subsidiary-medium md:text-mob-small-medium flex justify-between"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}><div class="flex items-center gap-1"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.average_rating)} `);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                    "default-value": Number(_ctx.product.average_rating),
                    readonly: "",
                    class: "-mt-0.5"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><a href="#reviews" class="text-subsidiary flex items-center gap-1 md:gap-2"${_scopeId2}><span${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.reviews", _ctx.product.reviews_count))}</span>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
                    width: "16px",
                    height: "16px"
                  }, null, _parent3, _scopeId2));
                  _push3(`</a></div>`);
                  if (_ctx.product.article_number) {
                    _push3(`<div${_scopeId2}><span class="text-subsidiary max-md:text-complimentary-reg"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.article"))}</span> ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.article_number)}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div><h1 class="text-small-medium lg:text-large-medium mt-6"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.name)}</h1><p class="text-subsidiary-reg md:text-small-medium"${_scopeId2}><span class="text-complimentary-reg md:text-mob-small-medium text-subsidiary"${_scopeId2}>Средний вес:</span> ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.weight)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.weight_type)}</p>`);
                  if (filledAttributesCount.value) {
                    _push3(`<div class="bg-input rounded-20 mt-6 hidden flex-col gap-4 p-4 min-[1500px]:flex"${_scopeId2}><!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(firstAttributes.value, (attribute) => {
                      _push3(`<!--[-->`);
                      if (attribute.value) {
                        _push3(`<div class="bg-filling text-subsidiary w-fit rounded-lg px-2 py-1 text-[14px] font-medium"${_scopeId2}>`);
                        if (attribute.isFirstAttribute) {
                          _push3(`<span${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(attribute.attribute_name)}: <span class="text-mob-small-medium text-text"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(attribute.value)}</span></span>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<!--]-->`);
                    });
                    _push3(`<!--]-->`);
                    if (filledOtherAttributesCount.value) {
                      _push3(`<dl class="grid grid-cols-2 gap-y-2.5 md:max-w-[350px]"${_scopeId2}><!--[-->`);
                      serverRenderer_cjs_prodExports.ssrRenderList(otherAttributes.value, (attribute) => {
                        _push3(`<!--[-->`);
                        if (attribute.value) {
                          _push3(`<!--[--><dt class="text-complimentary-reg md:text-subsidiary-medium text-additional"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(attribute.attribute_name)}:</dt><dd class="text-subsidiary-medium md:text-mob-small-medium -mt-1"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(attribute.value)}</dd><!--]-->`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<!--]-->`);
                      });
                      _push3(`<!--]--></dl>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="rounded-20 mx-auto mt-6 hidden max-w-md p-4 shadow-[0px_2px_20px_rgba(0,0,0,0.25)] min-[1500px]:!hidden sm:block"${_scopeId2}>`);
                  if (!!_ctx.product.sale_price) {
                    _push3(`<div class="flex justify-between"${_scopeId2}>`);
                    if (_ctx.product.sale_price) {
                      _push3(`<p class="text-small-medium md:text-heavy-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.sale_price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.price_type)}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<p class="text-small-medium md:text-medium-medium text-subsidiary line-through"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.price_type)}</p></div>`);
                  } else {
                    _push3(`<p class="text-small-medium md:text-heavy-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.price_type)}</p>`);
                  }
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                    class: "mt-2",
                    quantity: _ctx.product.quantity
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="mt-6 flex flex-col gap-2"${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                    id: _ctx.product.id,
                    "count-in-cart": _ctx.product.count_in_cart,
                    quantity: _ctx.product.quantity,
                    "button-type": "full"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  if (vueExports.unref(isMobile)) {
                    _push3(`<div${_scopeId2}><div class="rounded-20 mt-4 p-4 shadow-[0px_2px_20px_rgba(0,0,0,0.25)]"${_scopeId2}>`);
                    if (!!_ctx.product.sale_price) {
                      _push3(`<div class="flex justify-between"${_scopeId2}>`);
                      if (_ctx.product.sale_price) {
                        _push3(`<p class="text-small-medium md:text-heavy-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.sale_price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.price_type)}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<p class="text-small-medium md:text-medium-medium text-subsidiary line-through"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.price_type)}</p></div>`);
                    } else {
                      _push3(`<p class="text-small-medium md:text-heavy-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.price_type)}</p>`);
                    }
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                      class: "mt-2",
                      quantity: _ctx.product.quantity
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="mt-6 flex flex-col gap-2"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                      id: _ctx.product.id,
                      "count-in-cart": _ctx.product.count_in_cart,
                      quantity: _ctx.product.quantity,
                      "button-type": "full"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="border-filling rounded-20 text-text-secondary mt-6 w-full border p-4"${_scopeId2}><h4 class="text-default-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.delivery_info"))}</h4><div class="mt-6 flex flex-col gap-2"${_scopeId2}><p class="text-small-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.delivery_address"))}</p>`);
                    if (props.auth.user) {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, {
                        modelValue: selectedAddress.value,
                        "onUpdate:modelValue": [($event) => selectedAddress.value = $event, setCity],
                        options: props.auth.user.addresses,
                        fluid: "",
                        "option-label": "final_address",
                        size: "large",
                        placeholder: "Выберите адрес"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, {
                      modelValue: selectedCity.value,
                      "onUpdate:modelValue": ($event) => selectedCity.value = $event,
                      options: props.cities,
                      "option-label": "name",
                      fluid: "",
                      size: "large",
                      placeholder: vueExports.unref(t)("cart_page.city")
                    }, null, _parent3, _scopeId2));
                    if (!hasNoZones.value && vueExports.unref(calculationModel).delivery_type === "courier") {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, {
                        modelValue: vueExports.unref(calculationModel).delivery_zone_id,
                        "onUpdate:modelValue": ($event) => vueExports.unref(calculationModel).delivery_zone_id = $event,
                        options: deliveryZones.value,
                        "option-value": "id",
                        "option-label": "name",
                        fluid: "",
                        "empty-message": selectedCity.value ? "Для этого города нет зон доставки" : "Сначала выберите город",
                        size: "large",
                        placeholder: "Выберите зону доставки"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (((_a = vueExports.unref(calculateData)) == null ? void 0 : _a.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id) {
                      _push3(`<p class="text-mob-small-reg text-additional"${_scopeId2}> Доставим ${serverRenderer_cjs_prodExports.ssrInterpolate(formattingDeliveryDate.value)}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (hasNoZones.value) {
                      _push3(`<p class="flex w-min min-w-[238px] gap-1"${_scopeId2}><span class="text-mob-small-reg text-additional block w-fit"${_scopeId2}>Срок и стоимость доставки определяется индивидуально</span>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$7), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" }, null, _parent3, _scopeId2));
                      _push3(`</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                    if (((_b = vueExports.unref(calculateData)) == null ? void 0 : _b.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id) {
                      _push3(`<div class="border-t-filling mt-2 border-t py-2"${_scopeId2}><h5 class="text-small-medium mb-2"${_scopeId2}>Стоимость доставки</h5><dl class="grid grid-cols-2 items-center gap-2"${_scopeId2}><dt class="text-mob-small-reg"${_scopeId2}>Заказ от ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum)} руб.</dt><dd class="text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5"${_scopeId2}>бесплатно</dd><dt class="text-mob-small-reg"${_scopeId2}>Заказ до ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum)} руб.</dt><dd class="text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate((_c = vueExports.unref(calculateData)) == null ? void 0 : _c.delivery_detail.delivery_price)} руб. </dd></dl></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if ((_d = vueExports.unref(calculateData)) == null ? void 0 : _d.delivery_detail.pickup_location_time_min) {
                      _push3(`<div class="border-t-filling mt-2 border-t"${_scopeId2}><h5 class="text-small-medium py-2"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.pickup"))}</h5><p class="text-mob-small-reg text-additional"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(getFormattingDeliveryDate(vueExports.unref(calculateData).delivery_detail.pickup_location_time_min))}</p></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="bg-filling hover:bg-default text-subsidiary-reg mt-6 w-fit rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white"${_scopeId2}><a href="#delivery" class="flex items-center gap-2"${_scopeId2}><span${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.all_delivery_terms"))}</span>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
                      width: "16px",
                      height: "16px"
                    }, null, _parent3, _scopeId2));
                    _push3(`</a></div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="mt-8"${_scopeId2}><div${_scopeId2}><div class="hidden w-full gap-4 min-[1500px]:!hidden sm:flex"${_scopeId2}>`);
                  if (filledAttributesCount.value > 0) {
                    _push3(`<div class="bg-input rounded-20 mt-6 flex basis-1/2 flex-col gap-4 p-4"${_scopeId2}><!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(firstAttributes.value, (attribute) => {
                      _push3(`<!--[-->`);
                      if (attribute.value) {
                        _push3(`<div class="bg-filling text-subsidiary mb-2 w-fit rounded-lg px-2 py-1 text-[14px] font-medium"${_scopeId2}>`);
                        if (attribute.isFirstAttribute) {
                          _push3(`<span${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(attribute.attribute_name)}: <span class="text-mob-small-medium text-text"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(attribute.value)}</span></span>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<!--]-->`);
                    });
                    _push3(`<!--]--><dl class="grid grid-cols-2 gap-y-2.5 md:max-w-[350px]"${_scopeId2}><!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(otherAttributes.value, (attribute) => {
                      _push3(`<!--[-->`);
                      if (attribute.value) {
                        _push3(`<!--[--><dt class="text-complimentary-reg md:text-subsidiary-medium text-additional"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(attribute.attribute_name)}:</dt><dd class="text-subsidiary-medium md:text-mob-small-medium -mt-1"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(attribute.value)}</dd><!--]-->`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<!--]-->`);
                    });
                    _push3(`<!--]--></dl></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="border-filling rounded-20 text-text-secondary mt-6 basis-1/2 border p-4"${_scopeId2}><h4 class="text-default-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.delivery_info"))}</h4><div class="mt-6 flex flex-col gap-2"${_scopeId2}><p class="text-small-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.delivery_address"))}</p>`);
                  if (props.auth.user) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, {
                      modelValue: selectedAddress.value,
                      "onUpdate:modelValue": [($event) => selectedAddress.value = $event, setCity],
                      options: props.auth.user.addresses,
                      fluid: "",
                      "option-label": "final_address",
                      size: "large",
                      placeholder: "Выберите адресс"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, {
                    modelValue: selectedCity.value,
                    "onUpdate:modelValue": ($event) => selectedCity.value = $event,
                    options: props.cities,
                    "option-label": "name",
                    fluid: "",
                    size: "large",
                    placeholder: vueExports.unref(t)("cart_page.city")
                  }, null, _parent3, _scopeId2));
                  if (!hasNoZones.value && vueExports.unref(calculationModel).delivery_type === "courier") {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, {
                      modelValue: vueExports.unref(calculationModel).delivery_zone_id,
                      "onUpdate:modelValue": ($event) => vueExports.unref(calculationModel).delivery_zone_id = $event,
                      options: deliveryZones.value,
                      "option-value": "id",
                      "option-label": "name",
                      fluid: "",
                      "empty-message": selectedCity.value ? "Для этого города нет зон доставки" : "Сначала выберите город",
                      size: "large",
                      placeholder: "Выберите зону доставки"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (((_e = vueExports.unref(calculateData)) == null ? void 0 : _e.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id) {
                    _push3(`<p class="text-mob-small-reg text-additional"${_scopeId2}> Доставим ${serverRenderer_cjs_prodExports.ssrInterpolate(formattingDeliveryDate.value)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (hasNoZones.value) {
                    _push3(`<p class="flex w-min min-w-[238px] gap-1"${_scopeId2}><span class="text-mob-small-reg text-additional block w-fit"${_scopeId2}>Срок и стоимость доставки определяется индивидуально</span>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$7), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" }, null, _parent3, _scopeId2));
                    _push3(`</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  if (((_f = vueExports.unref(calculateData)) == null ? void 0 : _f.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id) {
                    _push3(`<div class="border-t-filling mt-2 border-t py-2"${_scopeId2}><h5 class="text-small-medium mb-2"${_scopeId2}>Стоимость доставки</h5><dl class="grid grid-cols-2 items-center gap-2"${_scopeId2}><dt class="text-mob-small-reg"${_scopeId2}>Заказ от ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum)} руб.</dt><dd class="text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5"${_scopeId2}>бесплатно</dd><dt class="text-mob-small-reg"${_scopeId2}>Заказ до ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum)} руб.</dt><dd class="text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate((_g = vueExports.unref(calculateData)) == null ? void 0 : _g.delivery_detail.delivery_price)} руб. </dd></dl></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if ((_h = vueExports.unref(calculateData)) == null ? void 0 : _h.delivery_detail.pickup_location_time_min) {
                    _push3(`<div class="border-t-filling mt-2 border-t"${_scopeId2}><h5 class="text-small-medium py-2"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.pickup"))}</h5><p class="text-mob-small-reg text-additional"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(getFormattingDeliveryDate(vueExports.unref(calculateData).delivery_detail.pickup_location_time_min))}</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="bg-filling hover:bg-default text-subsidiary-reg mt-6 w-fit rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white"${_scopeId2}><a href="#delivery" class="flex items-center gap-2"${_scopeId2}><span${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.all_delivery_terms"))}</span>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
                    width: "16px",
                    height: "16px"
                  }, null, _parent3, _scopeId2));
                  _push3(`</a></div></div></div>`);
                  if (_ctx.product.gift_product && ((_i = _ctx.product.gift_product) == null ? void 0 : _i.gift_items.length)) {
                    _push3(`<!--[--><!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<!--[-->`);
                  serverRenderer_cjs_prodExports.ssrRenderList((_j = _ctx.product.gift_product) == null ? void 0 : _j.gift_items, (gift) => {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$8, {
                      key: gift.id,
                      "gift-type": "forProduct",
                      item: { ...gift, total_price: 0 }
                    }, {
                      addToCart: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (gift.is_available) {
                            _push4(`<div class="text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"${_scopeId3}> 1 шт </div>`);
                          } else {
                            _push4(`<span class="text-mob-small-bold"${_scopeId3}>Нет в наличии</span>`);
                          }
                        } else {
                          return [
                            gift.is_available ? (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 0,
                              class: "text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"
                            }, " 1 шт ")) : (vueExports.openBlock(), vueExports.createBlock("span", {
                              key: 1,
                              class: "text-mob-small-bold"
                            }, "Нет в наличии"))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--><div class="mt-8 w-full max-w-full overflow-x-auto max-sm:pl-6"${_scopeId2}><div class="flex min-w-max gap-2 whitespace-nowrap"${_scopeId2}><!--[-->`);
                  serverRenderer_cjs_prodExports.ssrRenderList(tabs.value, (tab) => {
                    _push3(`<button class="${serverRenderer_cjs_prodExports.ssrRenderClass([currentTab.value === tab.id ? "bg-text text-white" : "", "text-subsidiary-reg md:text-mob-small-reg bg-input rounded-20 shrink-0 cursor-pointer px-4 py-3"])}"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(tab.label)}</button>`);
                  });
                  _push3(`<!--]--></div></div><div class="mt-4 max-sm:px-6 lg:mt-8"${_scopeId2}>`);
                  if (currentTab.value === "about") {
                    _push3(`<div${_scopeId2}>`);
                    if (vueExports.unref(isMobile) && filledAttributesCount.value > 0) {
                      _push3(`<div class="bg-input rounded-20 mt-6 mb-4 p-4"${_scopeId2}><!--[-->`);
                      serverRenderer_cjs_prodExports.ssrRenderList(firstAttributes.value, (attribute) => {
                        _push3(`<!--[-->`);
                        if (attribute.value) {
                          _push3(`<div class="bg-filling text-subsidiary mb-2 w-fit rounded-lg px-2 py-1 text-[14px] font-medium"${_scopeId2}>`);
                          if (attribute.isFirstAttribute) {
                            _push3(`<span${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(attribute.attribute_name)}: <span class="text-mob-small-medium text-text"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(attribute.value)}</span></span>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          _push3(`</div>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<!--]-->`);
                      });
                      _push3(`<!--]--><dl class="mt-4 grid grid-cols-2 gap-y-2.5 md:max-w-[350px]"${_scopeId2}><!--[-->`);
                      serverRenderer_cjs_prodExports.ssrRenderList(otherAttributes.value, (attribute) => {
                        _push3(`<!--[-->`);
                        if (attribute.value) {
                          _push3(`<!--[--><dt class="text-complimentary-reg md:text-subsidiary-medium text-additional"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(attribute.attribute_name)}:</dt><dd class="text-subsidiary-medium md:text-mob-small-medium -mt-1"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(attribute.value)}</dd><!--]-->`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<!--]-->`);
                      });
                      _push3(`<!--]--></dl></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<p class="${serverRenderer_cjs_prodExports.ssrRenderClass(["text-subsidiary-reg transition-all duration-300 ease-in-out", { "line-clamp-3": !isExpanded.value }])}"${_scopeId2}>${_ctx.product.description ?? ""}</p>`);
                    if (isExpandable.value) {
                      _push3(`<button class="text-subsidiary-medium mt-2 flex cursor-pointer items-center gap-2 focus:outline-none"${serverRenderer_cjs_prodExports.ssrRenderAttr("aria-expanded", isExpanded.value)}${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(isExpanded.value ? "Меньше" : "Смотреть полностью")} `);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowDown), {
                        class: ["mt-0.5 transition-transform duration-200 ease-in-out", { "rotate-180": isExpanded.value }]
                      }, null, _parent3, _scopeId2));
                      _push3(`</button>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (currentTab.value === "reviews") {
                    _push3(`<div id="reviews"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, {
                      reviews: _ctx.product.reviews,
                      slug: _ctx.product.slug
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (currentTab.value === "delivery") {
                    _push3(`<div id="delivery"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ProductDelivery), null, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (currentTab.value === "cutting") {
                    _push3(`<div class="flex flex-col gap-2 md:flex-row md:justify-between md:gap-8"${_scopeId2}><div${_scopeId2}><div${_scopeId2}>${_ctx.product.cutting.content ?? ""}</div>`);
                    if ((_l = (_k = _ctx.product.cutting) == null ? void 0 : _k.image) == null ? void 0 : _l.path) {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$a), {
                        src: (_n = (_m = _ctx.product.cutting) == null ? void 0 : _m.image) == null ? void 0 : _n.path,
                        alt: "бык",
                        class: "mt-4"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="bg-filling hover:bg-default text-subsidiary-reg mt-4 w-fit rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white"${_scopeId2}><a${serverRenderer_cjs_prodExports.ssrRenderAttr("href", _ctx.product.cutting.button_link)} class="flex items-center gap-2"${_scopeId2}><span${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.cutting.button_text)}</span>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
                      width: "16px",
                      height: "16px"
                    }, null, _parent3, _scopeId2));
                    _push3(`</a></div></div>`);
                    if ((_o = _ctx.product.cutting) == null ? void 0 : _o.video_link) {
                      _push3(`<div class="shrink-0"${_scopeId2}><h4 class="text-default-medium"${_scopeId2}>Видео</h4><div class="rounded-20 mt-3 overflow-hidden"${_scopeId2}><iframe width="352" height="240"${serverRenderer_cjs_prodExports.ssrRenderAttr("src", embedLink.value)} allow="clipboard-write; autoplay" allowFullScreen${_scopeId2}></iframe></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (currentTab.value === "manufacturer") {
                    _push3(`<div class="sm:grid sm:grid-cols-[auto_1fr] sm:gap-8"${_scopeId2}><div class="flex-grow items-center gap-2 max-md:mt-4 max-sm:flex"${_scopeId2}>`);
                    if ((_q = (_p = _ctx.product.manufacturer) == null ? void 0 : _p.image) == null ? void 0 : _q.path) {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$a), {
                        src: (_s = (_r = _ctx.product.manufacturer) == null ? void 0 : _r.image) == null ? void 0 : _s.path,
                        alt: "123",
                        class: "max-w-[60px] flex-shrink-0 sm:min-w-[132px]"
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    if (vueExports.unref(isMobile)) {
                      _push3(`<h4 class="text-small-medium uppercase"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.manufacturer.name)}</h4>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div class="text-subsidiary-reg sm:text-mob-small-reg"${_scopeId2}>`);
                    if (!vueExports.unref(isMobile)) {
                      _push3(`<h4 class="text-default-medium uppercase"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.manufacturer.name)}</h4>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div${_scopeId2}>${_ctx.product.manufacturer.content ?? ""}</div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div></div></div><div class="hidden max-w-[352px] min-[1500px]:block"${_scopeId2}><div class="rounded-20 min-w-[352px] p-4 shadow"${_scopeId2}>`);
                  if (!!_ctx.product.sale_price) {
                    _push3(`<div class="flex justify-between"${_scopeId2}>`);
                    if (_ctx.product.sale_price) {
                      _push3(`<p class="text-small-medium md:text-heavy-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.sale_price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.price_type)}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<p class="text-small-medium md:text-medium-medium text-subsidiary line-through"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.price_type)}</p></div>`);
                  } else {
                    _push3(`<p class="text-small-medium md:text-heavy-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.product.price_type)}</p>`);
                  }
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                    class: "mt-2",
                    quantity: _ctx.product.quantity
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="mt-6 flex flex-col gap-2"${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                    id: _ctx.product.id,
                    "count-in-cart": _ctx.product.count_in_cart,
                    quantity: _ctx.product.quantity,
                    "button-type": "full"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="border-filling rounded-20 text-text-secondary mt-6 max-w-[352px] border p-4"${_scopeId2}><h4 class="text-default-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.delivery_info"))}</h4><div class="mt-6 flex flex-col gap-2"${_scopeId2}><p class="text-small-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.delivery_address"))}</p>`);
                  if (props.auth.user) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, {
                      modelValue: selectedAddress.value,
                      "onUpdate:modelValue": [($event) => selectedAddress.value = $event, setCity],
                      options: props.auth.user.addresses,
                      fluid: "",
                      "option-label": "final_address",
                      size: "large",
                      placeholder: "Выберите адрес"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, {
                    modelValue: selectedCity.value,
                    "onUpdate:modelValue": ($event) => selectedCity.value = $event,
                    options: props.cities,
                    "option-label": "name",
                    fluid: "",
                    size: "large",
                    placeholder: vueExports.unref(t)("cart_page.city")
                  }, null, _parent3, _scopeId2));
                  if (!hasNoZones.value && vueExports.unref(calculationModel).delivery_type === "courier") {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, {
                      modelValue: vueExports.unref(calculationModel).delivery_zone_id,
                      "onUpdate:modelValue": ($event) => vueExports.unref(calculationModel).delivery_zone_id = $event,
                      options: deliveryZones.value,
                      "option-value": "id",
                      "option-label": "name",
                      fluid: "",
                      "empty-message": selectedCity.value ? "Для этого города нет зон доставки" : "Сначала выберите город",
                      size: "large",
                      placeholder: "Выберите зону доставки"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  if (((_t = vueExports.unref(calculateData)) == null ? void 0 : _t.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id) {
                    _push3(`<p class="text-mob-small-reg text-additional"${_scopeId2}> Доставим ${serverRenderer_cjs_prodExports.ssrInterpolate(formattingDeliveryDate.value)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (hasNoZones.value) {
                    _push3(`<p class="flex w-min min-w-[238px] gap-1"${_scopeId2}><span class="text-mob-small-reg text-additional block w-fit"${_scopeId2}>Срок и стоимость доставки определяется индивидуально</span>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$7), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" }, null, _parent3, _scopeId2));
                    _push3(`</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  if (((_u = vueExports.unref(calculateData)) == null ? void 0 : _u.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id) {
                    _push3(`<div class="border-t-filling mt-2 border-t py-2"${_scopeId2}><h5 class="text-small-medium mb-2"${_scopeId2}>Стоимость доставки</h5><dl class="grid grid-cols-2 items-center gap-2"${_scopeId2}><dt class="text-mob-small-reg"${_scopeId2}> Заказ от ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum)} руб. </dt><dd class="text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5"${_scopeId2}>бесплатно</dd><dt class="text-mob-small-reg"${_scopeId2}> Заказ до ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum)} руб. </dt><dd class="text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate((_v = vueExports.unref(calculateData)) == null ? void 0 : _v.delivery_detail.delivery_price)} руб. </dd></dl></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if ((_w = vueExports.unref(calculateData)) == null ? void 0 : _w.delivery_detail.pickup_location_time_min) {
                    _push3(`<div class="border-t-filling mt-2 border-t"${_scopeId2}><h5 class="text-small-medium py-2"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.pickup"))}</h5><p class="text-mob-small-reg text-additional"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(getFormattingDeliveryDate(vueExports.unref(calculateData).delivery_detail.pickup_location_time_min))}</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="bg-filling hover:bg-default text-subsidiary-reg mt-6 w-fit rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white"${_scopeId2}><a href="#delivery" class="flex items-center gap-2"${_scopeId2}><span${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.all_delivery_terms"))}</span>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
                    width: "16px",
                    height: "16px"
                  }, null, _parent3, _scopeId2));
                  _push3(`</a></div></div></div></div>`);
                } else {
                  return [
                    vueExports.createVNode("div", { class: "gap-8 lg:flex" }, [
                      vueExports.createVNode("div", { class: "flex-1" }, [
                        vueExports.createVNode("div", { class: "flex flex-col gap-8 max-md:items-center sm:flex-row" }, [
                          vueExports.createVNode("div", { class: "max-md:max-w-full" }, [
                            vueExports.createVNode(ProductSlider, { product: _ctx.product }, null, 8, ["product"])
                          ]),
                          vueExports.createVNode("div", { class: "w-full max-sm:px-6" }, [
                            vueExports.createVNode("div", { class: "text-subsidiary-medium md:text-mob-small-medium flex justify-between" }, [
                              vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                                vueExports.createVNode("div", { class: "flex items-center gap-1" }, [
                                  vueExports.createTextVNode(vueExports.toDisplayString(_ctx.product.average_rating) + " ", 1),
                                  vueExports.createVNode(_sfc_main$3, {
                                    "default-value": Number(_ctx.product.average_rating),
                                    readonly: "",
                                    class: "-mt-0.5"
                                  }, null, 8, ["default-value"])
                                ]),
                                vueExports.createVNode("a", {
                                  href: "#reviews",
                                  class: "text-subsidiary flex items-center gap-1 md:gap-2",
                                  onClick: ($event) => currentTab.value = "reviews"
                                }, [
                                  vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.reviews", _ctx.product.reviews_count)), 1),
                                  vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                    width: "16px",
                                    height: "16px"
                                  })
                                ], 8, ["onClick"])
                              ]),
                              _ctx.product.article_number ? (vueExports.openBlock(), vueExports.createBlock("div", { key: 0 }, [
                                vueExports.createVNode("span", { class: "text-subsidiary max-md:text-complimentary-reg" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.article")), 1),
                                vueExports.createTextVNode(" " + vueExports.toDisplayString(_ctx.product.article_number), 1)
                              ])) : vueExports.createCommentVNode("", true)
                            ]),
                            vueExports.createVNode("h1", { class: "text-small-medium lg:text-large-medium mt-6" }, vueExports.toDisplayString(_ctx.product.name), 1),
                            vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-small-medium" }, [
                              vueExports.createVNode("span", { class: "text-complimentary-reg md:text-mob-small-medium text-subsidiary" }, "Средний вес:"),
                              vueExports.createTextVNode(" " + vueExports.toDisplayString(_ctx.product.weight) + " " + vueExports.toDisplayString(_ctx.product.weight_type), 1)
                            ]),
                            filledAttributesCount.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 0,
                              class: "bg-input rounded-20 mt-6 hidden flex-col gap-4 p-4 min-[1500px]:flex"
                            }, [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(firstAttributes.value, (attribute) => {
                                return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                  key: attribute.attribute_id
                                }, [
                                  attribute.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: 0,
                                    class: "bg-filling text-subsidiary w-fit rounded-lg px-2 py-1 text-[14px] font-medium"
                                  }, [
                                    attribute.isFirstAttribute ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 0 }, [
                                      vueExports.createTextVNode(vueExports.toDisplayString(attribute.attribute_name) + ": ", 1),
                                      vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, vueExports.toDisplayString(attribute.value), 1)
                                    ])) : vueExports.createCommentVNode("", true)
                                  ])) : vueExports.createCommentVNode("", true)
                                ], 64);
                              }), 128)),
                              filledOtherAttributesCount.value ? (vueExports.openBlock(), vueExports.createBlock("dl", {
                                key: 0,
                                class: "grid grid-cols-2 gap-y-2.5 md:max-w-[350px]"
                              }, [
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(otherAttributes.value, (attribute) => {
                                  return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                    key: attribute.attribute_id
                                  }, [
                                    attribute.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                      vueExports.createVNode("dt", { class: "text-complimentary-reg md:text-subsidiary-medium text-additional" }, vueExports.toDisplayString(attribute.attribute_name) + ":", 1),
                                      vueExports.createVNode("dd", { class: "text-subsidiary-medium md:text-mob-small-medium -mt-1" }, vueExports.toDisplayString(attribute.value), 1)
                                    ], 64)) : vueExports.createCommentVNode("", true)
                                  ], 64);
                                }), 128))
                              ])) : vueExports.createCommentVNode("", true)
                            ])) : vueExports.createCommentVNode("", true),
                            vueExports.createVNode("div", { class: "rounded-20 mx-auto mt-6 hidden max-w-md p-4 shadow-[0px_2px_20px_rgba(0,0,0,0.25)] min-[1500px]:!hidden sm:block" }, [
                              !!_ctx.product.sale_price ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 0,
                                class: "flex justify-between"
                              }, [
                                _ctx.product.sale_price ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                  key: 0,
                                  class: "text-small-medium md:text-heavy-medium"
                                }, vueExports.toDisplayString(_ctx.product.sale_price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode("p", { class: "text-small-medium md:text-medium-medium text-subsidiary line-through" }, vueExports.toDisplayString(_ctx.product.price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)
                              ])) : (vueExports.openBlock(), vueExports.createBlock("p", {
                                key: 1,
                                class: "text-small-medium md:text-heavy-medium"
                              }, vueExports.toDisplayString(_ctx.product.price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)),
                              vueExports.createVNode(_sfc_main$4, {
                                class: "mt-2",
                                quantity: _ctx.product.quantity
                              }, null, 8, ["quantity"]),
                              vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                                vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                  id: _ctx.product.id,
                                  "count-in-cart": _ctx.product.count_in_cart,
                                  quantity: _ctx.product.quantity,
                                  "button-type": "full"
                                }, null, 8, ["id", "count-in-cart", "quantity"])
                              ])
                            ]),
                            vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("div", { key: 1 }, [
                              vueExports.createVNode("div", { class: "rounded-20 mt-4 p-4 shadow-[0px_2px_20px_rgba(0,0,0,0.25)]" }, [
                                !!_ctx.product.sale_price ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "flex justify-between"
                                }, [
                                  _ctx.product.sale_price ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                    key: 0,
                                    class: "text-small-medium md:text-heavy-medium"
                                  }, vueExports.toDisplayString(_ctx.product.sale_price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)) : vueExports.createCommentVNode("", true),
                                  vueExports.createVNode("p", { class: "text-small-medium md:text-medium-medium text-subsidiary line-through" }, vueExports.toDisplayString(_ctx.product.price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)
                                ])) : (vueExports.openBlock(), vueExports.createBlock("p", {
                                  key: 1,
                                  class: "text-small-medium md:text-heavy-medium"
                                }, vueExports.toDisplayString(_ctx.product.price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)),
                                vueExports.createVNode(_sfc_main$4, {
                                  class: "mt-2",
                                  quantity: _ctx.product.quantity
                                }, null, 8, ["quantity"]),
                                vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                    id: _ctx.product.id,
                                    "count-in-cart": _ctx.product.count_in_cart,
                                    quantity: _ctx.product.quantity,
                                    "button-type": "full"
                                  }, null, 8, ["id", "count-in-cart", "quantity"])
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "border-filling rounded-20 text-text-secondary mt-6 w-full border p-4" }, [
                                vueExports.createVNode("h4", { class: "text-default-medium" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.delivery_info")), 1),
                                vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                                  vueExports.createVNode("p", { class: "text-small-medium" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.delivery_address")), 1),
                                  props.auth.user ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$6, {
                                    key: 0,
                                    modelValue: selectedAddress.value,
                                    "onUpdate:modelValue": [($event) => selectedAddress.value = $event, setCity],
                                    options: props.auth.user.addresses,
                                    fluid: "",
                                    "option-label": "final_address",
                                    size: "large",
                                    placeholder: "Выберите адрес"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : vueExports.createCommentVNode("", true),
                                  vueExports.createVNode(_sfc_main$6, {
                                    modelValue: selectedCity.value,
                                    "onUpdate:modelValue": ($event) => selectedCity.value = $event,
                                    options: props.cities,
                                    "option-label": "name",
                                    fluid: "",
                                    size: "large",
                                    placeholder: vueExports.unref(t)("cart_page.city")
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"]),
                                  !hasNoZones.value && vueExports.unref(calculationModel).delivery_type === "courier" ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$6, {
                                    key: 1,
                                    modelValue: vueExports.unref(calculationModel).delivery_zone_id,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(calculationModel).delivery_zone_id = $event,
                                    options: deliveryZones.value,
                                    "option-value": "id",
                                    "option-label": "name",
                                    fluid: "",
                                    "empty-message": selectedCity.value ? "Для этого города нет зон доставки" : "Сначала выберите город",
                                    size: "large",
                                    placeholder: "Выберите зону доставки"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "empty-message"])) : vueExports.createCommentVNode("", true),
                                  ((_x = vueExports.unref(calculateData)) == null ? void 0 : _x.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                    key: 2,
                                    class: "text-mob-small-reg text-additional"
                                  }, " Доставим " + vueExports.toDisplayString(formattingDeliveryDate.value), 1)) : vueExports.createCommentVNode("", true),
                                  hasNoZones.value ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                    key: 3,
                                    class: "flex w-min min-w-[238px] gap-1"
                                  }, [
                                    vueExports.createVNode("span", { class: "text-mob-small-reg text-additional block w-fit" }, "Срок и стоимость доставки определяется индивидуально"),
                                    vueExports.createVNode(vueExports.unref(_sfc_main$7), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" })
                                  ])) : vueExports.createCommentVNode("", true)
                                ]),
                                ((_y = vueExports.unref(calculateData)) == null ? void 0 : _y.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "border-t-filling mt-2 border-t py-2"
                                }, [
                                  vueExports.createVNode("h5", { class: "text-small-medium mb-2" }, "Стоимость доставки"),
                                  vueExports.createVNode("dl", { class: "grid grid-cols-2 items-center gap-2" }, [
                                    vueExports.createVNode("dt", { class: "text-mob-small-reg" }, "Заказ от " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб.", 1),
                                    vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, "бесплатно"),
                                    vueExports.createVNode("dt", { class: "text-mob-small-reg" }, "Заказ до " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб.", 1),
                                    vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, vueExports.toDisplayString((_z = vueExports.unref(calculateData)) == null ? void 0 : _z.delivery_detail.delivery_price) + " руб. ", 1)
                                  ])
                                ])) : vueExports.createCommentVNode("", true),
                                ((_A = vueExports.unref(calculateData)) == null ? void 0 : _A.delivery_detail.pickup_location_time_min) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 1,
                                  class: "border-t-filling mt-2 border-t"
                                }, [
                                  vueExports.createVNode("h5", { class: "text-small-medium py-2" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.pickup")), 1),
                                  vueExports.createVNode("p", { class: "text-mob-small-reg text-additional" }, vueExports.toDisplayString(getFormattingDeliveryDate(vueExports.unref(calculateData).delivery_detail.pickup_location_time_min)), 1)
                                ])) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg mt-6 w-fit rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white" }, [
                                  vueExports.createVNode("a", {
                                    href: "#delivery",
                                    class: "flex items-center gap-2",
                                    onClick: ($event) => currentTab.value = "delivery"
                                  }, [
                                    vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.all_delivery_terms")), 1),
                                    vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                      width: "16px",
                                      height: "16px"
                                    })
                                  ], 8, ["onClick"])
                                ])
                              ])
                            ])) : vueExports.createCommentVNode("", true)
                          ])
                        ]),
                        vueExports.createVNode("div", { class: "mt-8" }, [
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("div", { class: "hidden w-full gap-4 min-[1500px]:!hidden sm:flex" }, [
                              filledAttributesCount.value > 0 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 0,
                                class: "bg-input rounded-20 mt-6 flex basis-1/2 flex-col gap-4 p-4"
                              }, [
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(firstAttributes.value, (attribute) => {
                                  return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                    key: attribute.attribute_id
                                  }, [
                                    attribute.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 0,
                                      class: "bg-filling text-subsidiary mb-2 w-fit rounded-lg px-2 py-1 text-[14px] font-medium"
                                    }, [
                                      attribute.isFirstAttribute ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 0 }, [
                                        vueExports.createTextVNode(vueExports.toDisplayString(attribute.attribute_name) + ": ", 1),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, vueExports.toDisplayString(attribute.value), 1)
                                      ])) : vueExports.createCommentVNode("", true)
                                    ])) : vueExports.createCommentVNode("", true)
                                  ], 64);
                                }), 128)),
                                vueExports.createVNode("dl", { class: "grid grid-cols-2 gap-y-2.5 md:max-w-[350px]" }, [
                                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(otherAttributes.value, (attribute) => {
                                    return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                      key: attribute.attribute_id
                                    }, [
                                      attribute.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                        vueExports.createVNode("dt", { class: "text-complimentary-reg md:text-subsidiary-medium text-additional" }, vueExports.toDisplayString(attribute.attribute_name) + ":", 1),
                                        vueExports.createVNode("dd", { class: "text-subsidiary-medium md:text-mob-small-medium -mt-1" }, vueExports.toDisplayString(attribute.value), 1)
                                      ], 64)) : vueExports.createCommentVNode("", true)
                                    ], 64);
                                  }), 128))
                                ])
                              ])) : vueExports.createCommentVNode("", true),
                              vueExports.createVNode("div", { class: "border-filling rounded-20 text-text-secondary mt-6 basis-1/2 border p-4" }, [
                                vueExports.createVNode("h4", { class: "text-default-medium" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.delivery_info")), 1),
                                vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                                  vueExports.createVNode("p", { class: "text-small-medium" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.delivery_address")), 1),
                                  props.auth.user ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$6, {
                                    key: 0,
                                    modelValue: selectedAddress.value,
                                    "onUpdate:modelValue": [($event) => selectedAddress.value = $event, setCity],
                                    options: props.auth.user.addresses,
                                    fluid: "",
                                    "option-label": "final_address",
                                    size: "large",
                                    placeholder: "Выберите адресс"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : vueExports.createCommentVNode("", true),
                                  vueExports.createVNode(_sfc_main$6, {
                                    modelValue: selectedCity.value,
                                    "onUpdate:modelValue": ($event) => selectedCity.value = $event,
                                    options: props.cities,
                                    "option-label": "name",
                                    fluid: "",
                                    size: "large",
                                    placeholder: vueExports.unref(t)("cart_page.city")
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"]),
                                  !hasNoZones.value && vueExports.unref(calculationModel).delivery_type === "courier" ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$6, {
                                    key: 1,
                                    modelValue: vueExports.unref(calculationModel).delivery_zone_id,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(calculationModel).delivery_zone_id = $event,
                                    options: deliveryZones.value,
                                    "option-value": "id",
                                    "option-label": "name",
                                    fluid: "",
                                    "empty-message": selectedCity.value ? "Для этого города нет зон доставки" : "Сначала выберите город",
                                    size: "large",
                                    placeholder: "Выберите зону доставки"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "empty-message"])) : vueExports.createCommentVNode("", true),
                                  ((_B = vueExports.unref(calculateData)) == null ? void 0 : _B.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                    key: 2,
                                    class: "text-mob-small-reg text-additional"
                                  }, " Доставим " + vueExports.toDisplayString(formattingDeliveryDate.value), 1)) : vueExports.createCommentVNode("", true),
                                  hasNoZones.value ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                    key: 3,
                                    class: "flex w-min min-w-[238px] gap-1"
                                  }, [
                                    vueExports.createVNode("span", { class: "text-mob-small-reg text-additional block w-fit" }, "Срок и стоимость доставки определяется индивидуально"),
                                    vueExports.createVNode(vueExports.unref(_sfc_main$7), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" })
                                  ])) : vueExports.createCommentVNode("", true)
                                ]),
                                ((_C = vueExports.unref(calculateData)) == null ? void 0 : _C.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "border-t-filling mt-2 border-t py-2"
                                }, [
                                  vueExports.createVNode("h5", { class: "text-small-medium mb-2" }, "Стоимость доставки"),
                                  vueExports.createVNode("dl", { class: "grid grid-cols-2 items-center gap-2" }, [
                                    vueExports.createVNode("dt", { class: "text-mob-small-reg" }, "Заказ от " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб.", 1),
                                    vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, "бесплатно"),
                                    vueExports.createVNode("dt", { class: "text-mob-small-reg" }, "Заказ до " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб.", 1),
                                    vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, vueExports.toDisplayString((_D = vueExports.unref(calculateData)) == null ? void 0 : _D.delivery_detail.delivery_price) + " руб. ", 1)
                                  ])
                                ])) : vueExports.createCommentVNode("", true),
                                ((_E = vueExports.unref(calculateData)) == null ? void 0 : _E.delivery_detail.pickup_location_time_min) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 1,
                                  class: "border-t-filling mt-2 border-t"
                                }, [
                                  vueExports.createVNode("h5", { class: "text-small-medium py-2" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.pickup")), 1),
                                  vueExports.createVNode("p", { class: "text-mob-small-reg text-additional" }, vueExports.toDisplayString(getFormattingDeliveryDate(vueExports.unref(calculateData).delivery_detail.pickup_location_time_min)), 1)
                                ])) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg mt-6 w-fit rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white" }, [
                                  vueExports.createVNode("a", {
                                    href: "#delivery",
                                    class: "flex items-center gap-2",
                                    onClick: ($event) => currentTab.value = "delivery"
                                  }, [
                                    vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.all_delivery_terms")), 1),
                                    vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                      width: "16px",
                                      height: "16px"
                                    })
                                  ], 8, ["onClick"])
                                ])
                              ])
                            ]),
                            _ctx.product.gift_product && ((_F = _ctx.product.gift_product) == null ? void 0 : _F.gift_items.length) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [], 64)) : vueExports.createCommentVNode("", true),
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList((_G = _ctx.product.gift_product) == null ? void 0 : _G.gift_items, (gift) => {
                              return vueExports.openBlock(), vueExports.createBlock(_sfc_main$8, {
                                key: gift.id,
                                "gift-type": "forProduct",
                                item: { ...gift, total_price: 0 }
                              }, {
                                addToCart: vueExports.withCtx(() => [
                                  gift.is_available ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: 0,
                                    class: "text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"
                                  }, " 1 шт ")) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                    key: 1,
                                    class: "text-mob-small-bold"
                                  }, "Нет в наличии"))
                                ]),
                                _: 2
                              }, 1032, ["item"]);
                            }), 128)),
                            vueExports.createVNode("div", { class: "mt-8 w-full max-w-full overflow-x-auto max-sm:pl-6" }, [
                              vueExports.createVNode("div", { class: "flex min-w-max gap-2 whitespace-nowrap" }, [
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(tabs.value, (tab) => {
                                  return vueExports.openBlock(), vueExports.createBlock("button", {
                                    key: tab.id,
                                    class: ["text-subsidiary-reg md:text-mob-small-reg bg-input rounded-20 shrink-0 cursor-pointer px-4 py-3", currentTab.value === tab.id ? "bg-text text-white" : ""],
                                    onClick: ($event) => currentTab.value = tab.id
                                  }, vueExports.toDisplayString(tab.label), 11, ["onClick"]);
                                }), 128))
                              ])
                            ]),
                            vueExports.createVNode("div", { class: "mt-4 max-sm:px-6 lg:mt-8" }, [
                              currentTab.value === "about" ? (vueExports.openBlock(), vueExports.createBlock("div", { key: 0 }, [
                                vueExports.unref(isMobile) && filledAttributesCount.value > 0 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "bg-input rounded-20 mt-6 mb-4 p-4"
                                }, [
                                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(firstAttributes.value, (attribute) => {
                                    return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                      key: attribute.attribute_id
                                    }, [
                                      attribute.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                        key: 0,
                                        class: "bg-filling text-subsidiary mb-2 w-fit rounded-lg px-2 py-1 text-[14px] font-medium"
                                      }, [
                                        attribute.isFirstAttribute ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 0 }, [
                                          vueExports.createTextVNode(vueExports.toDisplayString(attribute.attribute_name) + ": ", 1),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, vueExports.toDisplayString(attribute.value), 1)
                                        ])) : vueExports.createCommentVNode("", true)
                                      ])) : vueExports.createCommentVNode("", true)
                                    ], 64);
                                  }), 128)),
                                  vueExports.createVNode("dl", { class: "mt-4 grid grid-cols-2 gap-y-2.5 md:max-w-[350px]" }, [
                                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(otherAttributes.value, (attribute) => {
                                      return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                        key: attribute.attribute_id
                                      }, [
                                        attribute.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                          vueExports.createVNode("dt", { class: "text-complimentary-reg md:text-subsidiary-medium text-additional" }, vueExports.toDisplayString(attribute.attribute_name) + ":", 1),
                                          vueExports.createVNode("dd", { class: "text-subsidiary-medium md:text-mob-small-medium -mt-1" }, vueExports.toDisplayString(attribute.value), 1)
                                        ], 64)) : vueExports.createCommentVNode("", true)
                                      ], 64);
                                    }), 128))
                                  ])
                                ])) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode("p", {
                                  ref_key: "descriptionRef",
                                  ref: descriptionRef,
                                  class: ["text-subsidiary-reg transition-all duration-300 ease-in-out", { "line-clamp-3": !isExpanded.value }],
                                  innerHTML: _ctx.product.description
                                }, null, 10, ["innerHTML"]),
                                isExpandable.value ? (vueExports.openBlock(), vueExports.createBlock("button", {
                                  key: 1,
                                  class: "text-subsidiary-medium mt-2 flex cursor-pointer items-center gap-2 focus:outline-none",
                                  "aria-expanded": isExpanded.value,
                                  onClick: toggle
                                }, [
                                  vueExports.createTextVNode(vueExports.toDisplayString(isExpanded.value ? "Меньше" : "Смотреть полностью") + " ", 1),
                                  vueExports.createVNode(vueExports.unref(IconArrowDown), {
                                    class: ["mt-0.5 transition-transform duration-200 ease-in-out", { "rotate-180": isExpanded.value }]
                                  }, null, 8, ["class"])
                                ], 8, ["aria-expanded"])) : vueExports.createCommentVNode("", true)
                              ])) : vueExports.createCommentVNode("", true),
                              currentTab.value === "reviews" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 1,
                                id: "reviews"
                              }, [
                                vueExports.createVNode(_sfc_main$9, {
                                  reviews: _ctx.product.reviews,
                                  slug: _ctx.product.slug
                                }, null, 8, ["reviews", "slug"])
                              ])) : vueExports.createCommentVNode("", true),
                              currentTab.value === "delivery" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 2,
                                id: "delivery"
                              }, [
                                vueExports.createVNode(vueExports.unref(ProductDelivery))
                              ])) : vueExports.createCommentVNode("", true),
                              currentTab.value === "cutting" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 3,
                                class: "flex flex-col gap-2 md:flex-row md:justify-between md:gap-8"
                              }, [
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode("div", {
                                    innerHTML: _ctx.product.cutting.content
                                  }, null, 8, ["innerHTML"]),
                                  ((_I = (_H = _ctx.product.cutting) == null ? void 0 : _H.image) == null ? void 0 : _I.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$a), {
                                    key: 0,
                                    src: (_K = (_J = _ctx.product.cutting) == null ? void 0 : _J.image) == null ? void 0 : _K.path,
                                    alt: "бык",
                                    class: "mt-4"
                                  }, null, 8, ["src"])) : vueExports.createCommentVNode("", true),
                                  vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg mt-4 w-fit rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white" }, [
                                    vueExports.createVNode("a", {
                                      href: _ctx.product.cutting.button_link,
                                      class: "flex items-center gap-2"
                                    }, [
                                      vueExports.createVNode("span", null, vueExports.toDisplayString(_ctx.product.cutting.button_text), 1),
                                      vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                        width: "16px",
                                        height: "16px"
                                      })
                                    ], 8, ["href"])
                                  ])
                                ]),
                                ((_L = _ctx.product.cutting) == null ? void 0 : _L.video_link) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "shrink-0"
                                }, [
                                  vueExports.createVNode("h4", { class: "text-default-medium" }, "Видео"),
                                  vueExports.createVNode("div", { class: "rounded-20 mt-3 overflow-hidden" }, [
                                    vueExports.createVNode("iframe", {
                                      width: "352",
                                      height: "240",
                                      src: embedLink.value,
                                      allow: "clipboard-write; autoplay",
                                      allowFullScreen: ""
                                    }, null, 8, ["src"])
                                  ])
                                ])) : vueExports.createCommentVNode("", true)
                              ])) : vueExports.createCommentVNode("", true),
                              currentTab.value === "manufacturer" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 4,
                                class: "sm:grid sm:grid-cols-[auto_1fr] sm:gap-8"
                              }, [
                                vueExports.createVNode("div", { class: "flex-grow items-center gap-2 max-md:mt-4 max-sm:flex" }, [
                                  ((_N = (_M = _ctx.product.manufacturer) == null ? void 0 : _M.image) == null ? void 0 : _N.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$a), {
                                    key: 0,
                                    src: (_P = (_O = _ctx.product.manufacturer) == null ? void 0 : _O.image) == null ? void 0 : _P.path,
                                    alt: "123",
                                    class: "max-w-[60px] flex-shrink-0 sm:min-w-[132px]"
                                  }, null, 8, ["src"])) : vueExports.createCommentVNode("", true),
                                  vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("h4", {
                                    key: 1,
                                    class: "text-small-medium uppercase"
                                  }, vueExports.toDisplayString(_ctx.product.manufacturer.name), 1)) : vueExports.createCommentVNode("", true)
                                ]),
                                vueExports.createVNode("div", { class: "text-subsidiary-reg sm:text-mob-small-reg" }, [
                                  !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("h4", {
                                    key: 0,
                                    class: "text-default-medium uppercase"
                                  }, vueExports.toDisplayString(_ctx.product.manufacturer.name), 1)) : vueExports.createCommentVNode("", true),
                                  vueExports.createVNode("div", {
                                    innerHTML: _ctx.product.manufacturer.content
                                  }, null, 8, ["innerHTML"])
                                ])
                              ])) : vueExports.createCommentVNode("", true)
                            ])
                          ])
                        ])
                      ]),
                      vueExports.createVNode("div", { class: "hidden max-w-[352px] min-[1500px]:block" }, [
                        vueExports.createVNode("div", { class: "rounded-20 min-w-[352px] p-4 shadow" }, [
                          !!_ctx.product.sale_price ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "flex justify-between"
                          }, [
                            _ctx.product.sale_price ? (vueExports.openBlock(), vueExports.createBlock("p", {
                              key: 0,
                              class: "text-small-medium md:text-heavy-medium"
                            }, vueExports.toDisplayString(_ctx.product.sale_price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)) : vueExports.createCommentVNode("", true),
                            vueExports.createVNode("p", { class: "text-small-medium md:text-medium-medium text-subsidiary line-through" }, vueExports.toDisplayString(_ctx.product.price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)
                          ])) : (vueExports.openBlock(), vueExports.createBlock("p", {
                            key: 1,
                            class: "text-small-medium md:text-heavy-medium"
                          }, vueExports.toDisplayString(_ctx.product.price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)),
                          vueExports.createVNode(_sfc_main$4, {
                            class: "mt-2",
                            quantity: _ctx.product.quantity
                          }, null, 8, ["quantity"]),
                          vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                            vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                              id: _ctx.product.id,
                              "count-in-cart": _ctx.product.count_in_cart,
                              quantity: _ctx.product.quantity,
                              "button-type": "full"
                            }, null, 8, ["id", "count-in-cart", "quantity"])
                          ])
                        ]),
                        vueExports.createVNode("div", { class: "border-filling rounded-20 text-text-secondary mt-6 max-w-[352px] border p-4" }, [
                          vueExports.createVNode("h4", { class: "text-default-medium" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.delivery_info")), 1),
                          vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                            vueExports.createVNode("p", { class: "text-small-medium" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.delivery_address")), 1),
                            props.auth.user ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$6, {
                              key: 0,
                              modelValue: selectedAddress.value,
                              "onUpdate:modelValue": [($event) => selectedAddress.value = $event, setCity],
                              options: props.auth.user.addresses,
                              fluid: "",
                              "option-label": "final_address",
                              size: "large",
                              placeholder: "Выберите адрес"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : vueExports.createCommentVNode("", true),
                            vueExports.createVNode(_sfc_main$6, {
                              modelValue: selectedCity.value,
                              "onUpdate:modelValue": ($event) => selectedCity.value = $event,
                              options: props.cities,
                              "option-label": "name",
                              fluid: "",
                              size: "large",
                              placeholder: vueExports.unref(t)("cart_page.city")
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"]),
                            !hasNoZones.value && vueExports.unref(calculationModel).delivery_type === "courier" ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$6, {
                              key: 1,
                              modelValue: vueExports.unref(calculationModel).delivery_zone_id,
                              "onUpdate:modelValue": ($event) => vueExports.unref(calculationModel).delivery_zone_id = $event,
                              options: deliveryZones.value,
                              "option-value": "id",
                              "option-label": "name",
                              fluid: "",
                              "empty-message": selectedCity.value ? "Для этого города нет зон доставки" : "Сначала выберите город",
                              size: "large",
                              placeholder: "Выберите зону доставки"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "empty-message"])) : vueExports.createCommentVNode("", true),
                            ((_Q = vueExports.unref(calculateData)) == null ? void 0 : _Q.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("p", {
                              key: 2,
                              class: "text-mob-small-reg text-additional"
                            }, " Доставим " + vueExports.toDisplayString(formattingDeliveryDate.value), 1)) : vueExports.createCommentVNode("", true),
                            hasNoZones.value ? (vueExports.openBlock(), vueExports.createBlock("p", {
                              key: 3,
                              class: "flex w-min min-w-[238px] gap-1"
                            }, [
                              vueExports.createVNode("span", { class: "text-mob-small-reg text-additional block w-fit" }, "Срок и стоимость доставки определяется индивидуально"),
                              vueExports.createVNode(vueExports.unref(_sfc_main$7), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" })
                            ])) : vueExports.createCommentVNode("", true)
                          ]),
                          ((_R = vueExports.unref(calculateData)) == null ? void 0 : _R.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "border-t-filling mt-2 border-t py-2"
                          }, [
                            vueExports.createVNode("h5", { class: "text-small-medium mb-2" }, "Стоимость доставки"),
                            vueExports.createVNode("dl", { class: "grid grid-cols-2 items-center gap-2" }, [
                              vueExports.createVNode("dt", { class: "text-mob-small-reg" }, " Заказ от " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб. ", 1),
                              vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, "бесплатно"),
                              vueExports.createVNode("dt", { class: "text-mob-small-reg" }, " Заказ до " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб. ", 1),
                              vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, vueExports.toDisplayString((_S = vueExports.unref(calculateData)) == null ? void 0 : _S.delivery_detail.delivery_price) + " руб. ", 1)
                            ])
                          ])) : vueExports.createCommentVNode("", true),
                          ((_T = vueExports.unref(calculateData)) == null ? void 0 : _T.delivery_detail.pickup_location_time_min) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 1,
                            class: "border-t-filling mt-2 border-t"
                          }, [
                            vueExports.createVNode("h5", { class: "text-small-medium py-2" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.pickup")), 1),
                            vueExports.createVNode("p", { class: "text-mob-small-reg text-additional" }, vueExports.toDisplayString(getFormattingDeliveryDate(vueExports.unref(calculateData).delivery_detail.pickup_location_time_min)), 1)
                          ])) : vueExports.createCommentVNode("", true),
                          vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg mt-6 w-fit rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white" }, [
                            vueExports.createVNode("a", {
                              href: "#delivery",
                              class: "flex items-center gap-2",
                              onClick: ($event) => currentTab.value = "delivery"
                            }, [
                              vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.all_delivery_terms")), 1),
                              vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                width: "16px",
                                height: "16px"
                              })
                            ], 8, ["onClick"])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (_ctx.recomended_recipes.length > 0) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                title: vueExports.unref(t)("product_detail_card.chef_recipes"),
                class: "mt-12 max-[640px]:!p-0 max-[640px]:!pl-4"
              }, {
                headerAction: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      href: _ctx.route("recipe.index"),
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
                          href: _ctx.route("recipe.index"),
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
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$b), {
                      slides: _ctx.recomended_recipes,
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
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$c), {
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
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$d), {
                                  id: slide.id,
                                  "initial-value": isFavorite
                                }, null, _parent5, _scopeId4));
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$e), {
                                  url: _ctx.route("recipe.show", { recipe: slide.id })
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                                    id: slide.id,
                                    "initial-value": isFavorite
                                  }, null, 8, ["id", "initial-value"]),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$e), {
                                    url: _ctx.route("recipe.show", { recipe: slide.id })
                                  }, null, 8, ["url"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode(vueExports.unref(_sfc_main$c), {
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
                                vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                                  id: slide.id,
                                  "initial-value": isFavorite
                                }, null, 8, ["id", "initial-value"]),
                                vueExports.createVNode(vueExports.unref(_sfc_main$e), {
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
                      vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                        slides: _ctx.recomended_recipes,
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
                          vueExports.createVNode(vueExports.unref(_sfc_main$c), {
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
                              vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                                id: slide.id,
                                "initial-value": isFavorite
                              }, null, 8, ["id", "initial-value"]),
                              vueExports.createVNode(vueExports.unref(_sfc_main$e), {
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
            if (_ctx.recommended_products.length > 0) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                title: vueExports.unref(t)("product_detail_card.often_bought_with"),
                class: "mt-12 max-[640px]:!p-0 max-[640px]:!pl-4"
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$b), {
                      slides: _ctx.recommended_products,
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
                            slug: slide.slug,
                            title: slide.name,
                            images: slide.images.map((i) => i.path),
                            weight: slide.weight,
                            description: slide.short_description,
                            "is-favorite": slide.is_wishlist,
                            "degree-type": slide.degree_type,
                            categories: slide.tags.map((b) => b.name) ?? [],
                            unit: slide.weight_type,
                            "sale-percent": slide.sale_percent,
                            "is-new": slide.is_new,
                            price: Number(slide.sale_price) ?? 0,
                            "price-unit": slide.price_type,
                            "old-price": Number(slide.price) ?? 0,
                            cashback_percent: slide.cashback_percent
                          }, {
                            favoriteButton: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$d), {
                                  id: slide.id,
                                  "initial-value": slide.is_wishlist
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                                    id: slide.id,
                                    "initial-value": slide.is_wishlist
                                  }, null, 8, ["id", "initial-value"])
                                ];
                              }
                            }),
                            footer: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                                  id: slide.id,
                                  "count-in-cart": slide.count_in_cart,
                                  quantity: _ctx.product.quantity
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                    id: slide.id,
                                    "count-in-cart": slide.count_in_cart,
                                    quantity: _ctx.product.quantity
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
                              description: slide.short_description,
                              "is-favorite": slide.is_wishlist,
                              "degree-type": slide.degree_type,
                              categories: slide.tags.map((b) => b.name) ?? [],
                              unit: slide.weight_type,
                              "sale-percent": slide.sale_percent,
                              "is-new": slide.is_new,
                              price: Number(slide.sale_price) ?? 0,
                              "price-unit": slide.price_type,
                              "old-price": Number(slide.price) ?? 0,
                              cashback_percent: slide.cashback_percent
                            }, {
                              favoriteButton: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                                  id: slide.id,
                                  "initial-value": slide.is_wishlist
                                }, null, 8, ["id", "initial-value"])
                              ]),
                              footer: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                  id: slide.id,
                                  "count-in-cart": slide.count_in_cart,
                                  quantity: _ctx.product.quantity
                                }, null, 8, ["id", "count-in-cart", "quantity"])
                              ]),
                              _: 2
                            }, 1032, ["id", "has-gift", "slug", "title", "images", "weight", "description", "is-favorite", "degree-type", "categories", "unit", "sale-percent", "is-new", "price", "price-unit", "old-price", "cashback_percent"]))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                        slides: _ctx.recommended_products,
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
                            slug: slide.slug,
                            title: slide.name,
                            images: slide.images.map((i) => i.path),
                            weight: slide.weight,
                            description: slide.short_description,
                            "is-favorite": slide.is_wishlist,
                            "degree-type": slide.degree_type,
                            categories: slide.tags.map((b) => b.name) ?? [],
                            unit: slide.weight_type,
                            "sale-percent": slide.sale_percent,
                            "is-new": slide.is_new,
                            price: Number(slide.sale_price) ?? 0,
                            "price-unit": slide.price_type,
                            "old-price": Number(slide.price) ?? 0,
                            cashback_percent: slide.cashback_percent
                          }, {
                            favoriteButton: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                                id: slide.id,
                                "initial-value": slide.is_wishlist
                              }, null, 8, ["id", "initial-value"])
                            ]),
                            footer: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                id: slide.id,
                                "count-in-cart": slide.count_in_cart,
                                quantity: _ctx.product.quantity
                              }, null, 8, ["id", "count-in-cart", "quantity"])
                            ]),
                            _: 2
                          }, 1032, ["id", "has-gift", "slug", "title", "images", "weight", "description", "is-favorite", "degree-type", "categories", "unit", "sale-percent", "is-new", "price", "price-unit", "old-price", "cashback_percent"]))
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
            if (_ctx.combinations.length > 0) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                title: "Рекомендации по сочетанию продуктов",
                class: "mt-4 max-[640px]:!p-0 max-[640px]:!pl-4"
              }, {
                headerAction: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      href: _ctx.route("combination.index"),
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
                          href: _ctx.route("combination.index"),
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
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$b), {
                      slides: _ctx.combinations,
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
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(CombinationPreviewCard), { combination: slide }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode(vueExports.unref(CombinationPreviewCard), { combination: slide }, null, 8, ["combination"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                        slides: _ctx.combinations,
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
                          vueExports.createVNode(vueExports.unref(CombinationPreviewCard), { combination: slide }, null, 8, ["combination"])
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
            if (_ctx.user_purchased_products.length > 0) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                title: "Вы уже покупали",
                class: "mt-4 max-[640px]:!p-0 max-[640px]:!pl-4"
              }, {
                headerAction: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      href: _ctx.route("user.profile.orders_history"),
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
                          href: _ctx.route("user.profile.orders_history"),
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
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$b), {
                      slides: _ctx.user_purchased_products,
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
                            slug: slide.slug,
                            title: slide.name,
                            images: slide.images.map((i) => i.path),
                            weight: slide.weight,
                            description: slide.short_description,
                            "is-favorite": slide.is_wishlist,
                            "degree-type": slide.degree_type,
                            categories: slide.tags.map((b) => b.name) ?? [],
                            unit: slide.weight_type,
                            "sale-percent": slide.sale_percent,
                            "is-new": slide.is_new,
                            price: Number(slide.sale_price) ?? 0,
                            "price-unit": slide.price_type,
                            "old-price": Number(slide.price) ?? 0,
                            cashback_percent: slide.cashback_percent
                          }, {
                            favoriteButton: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$d), {
                                  id: slide.id,
                                  "initial-value": slide.is_wishlist
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                                    id: slide.id,
                                    "initial-value": slide.is_wishlist
                                  }, null, 8, ["id", "initial-value"])
                                ];
                              }
                            }),
                            footer: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                                  id: slide.id,
                                  "count-in-cart": slide.count_in_cart,
                                  quantity: slide.quantity
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$5), {
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
                              description: slide.short_description,
                              "is-favorite": slide.is_wishlist,
                              "degree-type": slide.degree_type,
                              categories: slide.tags.map((b) => b.name) ?? [],
                              unit: slide.weight_type,
                              "sale-percent": slide.sale_percent,
                              "is-new": slide.is_new,
                              price: Number(slide.sale_price) ?? 0,
                              "price-unit": slide.price_type,
                              "old-price": Number(slide.price) ?? 0,
                              cashback_percent: slide.cashback_percent
                            }, {
                              favoriteButton: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                                  id: slide.id,
                                  "initial-value": slide.is_wishlist
                                }, null, 8, ["id", "initial-value"])
                              ]),
                              footer: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                  id: slide.id,
                                  "count-in-cart": slide.count_in_cart,
                                  quantity: slide.quantity
                                }, null, 8, ["id", "count-in-cart", "quantity"])
                              ]),
                              _: 2
                            }, 1032, ["id", "has-gift", "slug", "title", "images", "weight", "description", "is-favorite", "degree-type", "categories", "unit", "sale-percent", "is-new", "price", "price-unit", "old-price", "cashback_percent"]))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                        slides: _ctx.user_purchased_products,
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
                            slug: slide.slug,
                            title: slide.name,
                            images: slide.images.map((i) => i.path),
                            weight: slide.weight,
                            description: slide.short_description,
                            "is-favorite": slide.is_wishlist,
                            "degree-type": slide.degree_type,
                            categories: slide.tags.map((b) => b.name) ?? [],
                            unit: slide.weight_type,
                            "sale-percent": slide.sale_percent,
                            "is-new": slide.is_new,
                            price: Number(slide.sale_price) ?? 0,
                            "price-unit": slide.price_type,
                            "old-price": Number(slide.price) ?? 0,
                            cashback_percent: slide.cashback_percent
                          }, {
                            favoriteButton: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                                id: slide.id,
                                "initial-value": slide.is_wishlist
                              }, null, 8, ["id", "initial-value"])
                            ]),
                            footer: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                id: slide.id,
                                "count-in-cart": slide.count_in_cart,
                                quantity: slide.quantity
                              }, null, 8, ["id", "count-in-cart", "quantity"])
                            ]),
                            _: 2
                          }, 1032, ["id", "has-gift", "slug", "title", "images", "weight", "description", "is-favorite", "degree-type", "categories", "unit", "sale-percent", "is-new", "price", "price-unit", "old-price", "cashback_percent"]))
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
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), null, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$f), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(_sfc_main$f))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
                key: 0,
                model: breadcrumbItems.value,
                class: "mx-3 mb-4 !shrink-0 !overflow-auto bg-white"
              }, {
                item: vueExports.withCtx(({ item }) => [
                  vueExports.createVNode(vueExports.unref(link_default), {
                    class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                    href: item.route,
                    only: ["products", "category_target"]
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
                model: breadcrumbItems.value,
                class: "mx-8 mt-6"
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
              }, 8, ["model"])),
              vueExports.createVNode(vueExports.unref(_sfc_main$2), { class: "max-sm:!p-0" }, {
                default: vueExports.withCtx(() => {
                  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
                  return [
                    vueExports.createVNode("div", { class: "gap-8 lg:flex" }, [
                      vueExports.createVNode("div", { class: "flex-1" }, [
                        vueExports.createVNode("div", { class: "flex flex-col gap-8 max-md:items-center sm:flex-row" }, [
                          vueExports.createVNode("div", { class: "max-md:max-w-full" }, [
                            vueExports.createVNode(ProductSlider, { product: _ctx.product }, null, 8, ["product"])
                          ]),
                          vueExports.createVNode("div", { class: "w-full max-sm:px-6" }, [
                            vueExports.createVNode("div", { class: "text-subsidiary-medium md:text-mob-small-medium flex justify-between" }, [
                              vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                                vueExports.createVNode("div", { class: "flex items-center gap-1" }, [
                                  vueExports.createTextVNode(vueExports.toDisplayString(_ctx.product.average_rating) + " ", 1),
                                  vueExports.createVNode(_sfc_main$3, {
                                    "default-value": Number(_ctx.product.average_rating),
                                    readonly: "",
                                    class: "-mt-0.5"
                                  }, null, 8, ["default-value"])
                                ]),
                                vueExports.createVNode("a", {
                                  href: "#reviews",
                                  class: "text-subsidiary flex items-center gap-1 md:gap-2",
                                  onClick: ($event) => currentTab.value = "reviews"
                                }, [
                                  vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.reviews", _ctx.product.reviews_count)), 1),
                                  vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                    width: "16px",
                                    height: "16px"
                                  })
                                ], 8, ["onClick"])
                              ]),
                              _ctx.product.article_number ? (vueExports.openBlock(), vueExports.createBlock("div", { key: 0 }, [
                                vueExports.createVNode("span", { class: "text-subsidiary max-md:text-complimentary-reg" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.article")), 1),
                                vueExports.createTextVNode(" " + vueExports.toDisplayString(_ctx.product.article_number), 1)
                              ])) : vueExports.createCommentVNode("", true)
                            ]),
                            vueExports.createVNode("h1", { class: "text-small-medium lg:text-large-medium mt-6" }, vueExports.toDisplayString(_ctx.product.name), 1),
                            vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-small-medium" }, [
                              vueExports.createVNode("span", { class: "text-complimentary-reg md:text-mob-small-medium text-subsidiary" }, "Средний вес:"),
                              vueExports.createTextVNode(" " + vueExports.toDisplayString(_ctx.product.weight) + " " + vueExports.toDisplayString(_ctx.product.weight_type), 1)
                            ]),
                            filledAttributesCount.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 0,
                              class: "bg-input rounded-20 mt-6 hidden flex-col gap-4 p-4 min-[1500px]:flex"
                            }, [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(firstAttributes.value, (attribute) => {
                                return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                  key: attribute.attribute_id
                                }, [
                                  attribute.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: 0,
                                    class: "bg-filling text-subsidiary w-fit rounded-lg px-2 py-1 text-[14px] font-medium"
                                  }, [
                                    attribute.isFirstAttribute ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 0 }, [
                                      vueExports.createTextVNode(vueExports.toDisplayString(attribute.attribute_name) + ": ", 1),
                                      vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, vueExports.toDisplayString(attribute.value), 1)
                                    ])) : vueExports.createCommentVNode("", true)
                                  ])) : vueExports.createCommentVNode("", true)
                                ], 64);
                              }), 128)),
                              filledOtherAttributesCount.value ? (vueExports.openBlock(), vueExports.createBlock("dl", {
                                key: 0,
                                class: "grid grid-cols-2 gap-y-2.5 md:max-w-[350px]"
                              }, [
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(otherAttributes.value, (attribute) => {
                                  return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                    key: attribute.attribute_id
                                  }, [
                                    attribute.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                      vueExports.createVNode("dt", { class: "text-complimentary-reg md:text-subsidiary-medium text-additional" }, vueExports.toDisplayString(attribute.attribute_name) + ":", 1),
                                      vueExports.createVNode("dd", { class: "text-subsidiary-medium md:text-mob-small-medium -mt-1" }, vueExports.toDisplayString(attribute.value), 1)
                                    ], 64)) : vueExports.createCommentVNode("", true)
                                  ], 64);
                                }), 128))
                              ])) : vueExports.createCommentVNode("", true)
                            ])) : vueExports.createCommentVNode("", true),
                            vueExports.createVNode("div", { class: "rounded-20 mx-auto mt-6 hidden max-w-md p-4 shadow-[0px_2px_20px_rgba(0,0,0,0.25)] min-[1500px]:!hidden sm:block" }, [
                              !!_ctx.product.sale_price ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 0,
                                class: "flex justify-between"
                              }, [
                                _ctx.product.sale_price ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                  key: 0,
                                  class: "text-small-medium md:text-heavy-medium"
                                }, vueExports.toDisplayString(_ctx.product.sale_price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode("p", { class: "text-small-medium md:text-medium-medium text-subsidiary line-through" }, vueExports.toDisplayString(_ctx.product.price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)
                              ])) : (vueExports.openBlock(), vueExports.createBlock("p", {
                                key: 1,
                                class: "text-small-medium md:text-heavy-medium"
                              }, vueExports.toDisplayString(_ctx.product.price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)),
                              vueExports.createVNode(_sfc_main$4, {
                                class: "mt-2",
                                quantity: _ctx.product.quantity
                              }, null, 8, ["quantity"]),
                              vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                                vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                  id: _ctx.product.id,
                                  "count-in-cart": _ctx.product.count_in_cart,
                                  quantity: _ctx.product.quantity,
                                  "button-type": "full"
                                }, null, 8, ["id", "count-in-cart", "quantity"])
                              ])
                            ]),
                            vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("div", { key: 1 }, [
                              vueExports.createVNode("div", { class: "rounded-20 mt-4 p-4 shadow-[0px_2px_20px_rgba(0,0,0,0.25)]" }, [
                                !!_ctx.product.sale_price ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "flex justify-between"
                                }, [
                                  _ctx.product.sale_price ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                    key: 0,
                                    class: "text-small-medium md:text-heavy-medium"
                                  }, vueExports.toDisplayString(_ctx.product.sale_price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)) : vueExports.createCommentVNode("", true),
                                  vueExports.createVNode("p", { class: "text-small-medium md:text-medium-medium text-subsidiary line-through" }, vueExports.toDisplayString(_ctx.product.price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)
                                ])) : (vueExports.openBlock(), vueExports.createBlock("p", {
                                  key: 1,
                                  class: "text-small-medium md:text-heavy-medium"
                                }, vueExports.toDisplayString(_ctx.product.price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)),
                                vueExports.createVNode(_sfc_main$4, {
                                  class: "mt-2",
                                  quantity: _ctx.product.quantity
                                }, null, 8, ["quantity"]),
                                vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                    id: _ctx.product.id,
                                    "count-in-cart": _ctx.product.count_in_cart,
                                    quantity: _ctx.product.quantity,
                                    "button-type": "full"
                                  }, null, 8, ["id", "count-in-cart", "quantity"])
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "border-filling rounded-20 text-text-secondary mt-6 w-full border p-4" }, [
                                vueExports.createVNode("h4", { class: "text-default-medium" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.delivery_info")), 1),
                                vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                                  vueExports.createVNode("p", { class: "text-small-medium" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.delivery_address")), 1),
                                  props.auth.user ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$6, {
                                    key: 0,
                                    modelValue: selectedAddress.value,
                                    "onUpdate:modelValue": [($event) => selectedAddress.value = $event, setCity],
                                    options: props.auth.user.addresses,
                                    fluid: "",
                                    "option-label": "final_address",
                                    size: "large",
                                    placeholder: "Выберите адрес"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : vueExports.createCommentVNode("", true),
                                  vueExports.createVNode(_sfc_main$6, {
                                    modelValue: selectedCity.value,
                                    "onUpdate:modelValue": ($event) => selectedCity.value = $event,
                                    options: props.cities,
                                    "option-label": "name",
                                    fluid: "",
                                    size: "large",
                                    placeholder: vueExports.unref(t)("cart_page.city")
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"]),
                                  !hasNoZones.value && vueExports.unref(calculationModel).delivery_type === "courier" ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$6, {
                                    key: 1,
                                    modelValue: vueExports.unref(calculationModel).delivery_zone_id,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(calculationModel).delivery_zone_id = $event,
                                    options: deliveryZones.value,
                                    "option-value": "id",
                                    "option-label": "name",
                                    fluid: "",
                                    "empty-message": selectedCity.value ? "Для этого города нет зон доставки" : "Сначала выберите город",
                                    size: "large",
                                    placeholder: "Выберите зону доставки"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "empty-message"])) : vueExports.createCommentVNode("", true),
                                  ((_a = vueExports.unref(calculateData)) == null ? void 0 : _a.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                    key: 2,
                                    class: "text-mob-small-reg text-additional"
                                  }, " Доставим " + vueExports.toDisplayString(formattingDeliveryDate.value), 1)) : vueExports.createCommentVNode("", true),
                                  hasNoZones.value ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                    key: 3,
                                    class: "flex w-min min-w-[238px] gap-1"
                                  }, [
                                    vueExports.createVNode("span", { class: "text-mob-small-reg text-additional block w-fit" }, "Срок и стоимость доставки определяется индивидуально"),
                                    vueExports.createVNode(vueExports.unref(_sfc_main$7), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" })
                                  ])) : vueExports.createCommentVNode("", true)
                                ]),
                                ((_b = vueExports.unref(calculateData)) == null ? void 0 : _b.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "border-t-filling mt-2 border-t py-2"
                                }, [
                                  vueExports.createVNode("h5", { class: "text-small-medium mb-2" }, "Стоимость доставки"),
                                  vueExports.createVNode("dl", { class: "grid grid-cols-2 items-center gap-2" }, [
                                    vueExports.createVNode("dt", { class: "text-mob-small-reg" }, "Заказ от " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб.", 1),
                                    vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, "бесплатно"),
                                    vueExports.createVNode("dt", { class: "text-mob-small-reg" }, "Заказ до " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб.", 1),
                                    vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, vueExports.toDisplayString((_c = vueExports.unref(calculateData)) == null ? void 0 : _c.delivery_detail.delivery_price) + " руб. ", 1)
                                  ])
                                ])) : vueExports.createCommentVNode("", true),
                                ((_d = vueExports.unref(calculateData)) == null ? void 0 : _d.delivery_detail.pickup_location_time_min) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 1,
                                  class: "border-t-filling mt-2 border-t"
                                }, [
                                  vueExports.createVNode("h5", { class: "text-small-medium py-2" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.pickup")), 1),
                                  vueExports.createVNode("p", { class: "text-mob-small-reg text-additional" }, vueExports.toDisplayString(getFormattingDeliveryDate(vueExports.unref(calculateData).delivery_detail.pickup_location_time_min)), 1)
                                ])) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg mt-6 w-fit rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white" }, [
                                  vueExports.createVNode("a", {
                                    href: "#delivery",
                                    class: "flex items-center gap-2",
                                    onClick: ($event) => currentTab.value = "delivery"
                                  }, [
                                    vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.all_delivery_terms")), 1),
                                    vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                      width: "16px",
                                      height: "16px"
                                    })
                                  ], 8, ["onClick"])
                                ])
                              ])
                            ])) : vueExports.createCommentVNode("", true)
                          ])
                        ]),
                        vueExports.createVNode("div", { class: "mt-8" }, [
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("div", { class: "hidden w-full gap-4 min-[1500px]:!hidden sm:flex" }, [
                              filledAttributesCount.value > 0 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 0,
                                class: "bg-input rounded-20 mt-6 flex basis-1/2 flex-col gap-4 p-4"
                              }, [
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(firstAttributes.value, (attribute) => {
                                  return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                    key: attribute.attribute_id
                                  }, [
                                    attribute.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 0,
                                      class: "bg-filling text-subsidiary mb-2 w-fit rounded-lg px-2 py-1 text-[14px] font-medium"
                                    }, [
                                      attribute.isFirstAttribute ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 0 }, [
                                        vueExports.createTextVNode(vueExports.toDisplayString(attribute.attribute_name) + ": ", 1),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, vueExports.toDisplayString(attribute.value), 1)
                                      ])) : vueExports.createCommentVNode("", true)
                                    ])) : vueExports.createCommentVNode("", true)
                                  ], 64);
                                }), 128)),
                                vueExports.createVNode("dl", { class: "grid grid-cols-2 gap-y-2.5 md:max-w-[350px]" }, [
                                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(otherAttributes.value, (attribute) => {
                                    return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                      key: attribute.attribute_id
                                    }, [
                                      attribute.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                        vueExports.createVNode("dt", { class: "text-complimentary-reg md:text-subsidiary-medium text-additional" }, vueExports.toDisplayString(attribute.attribute_name) + ":", 1),
                                        vueExports.createVNode("dd", { class: "text-subsidiary-medium md:text-mob-small-medium -mt-1" }, vueExports.toDisplayString(attribute.value), 1)
                                      ], 64)) : vueExports.createCommentVNode("", true)
                                    ], 64);
                                  }), 128))
                                ])
                              ])) : vueExports.createCommentVNode("", true),
                              vueExports.createVNode("div", { class: "border-filling rounded-20 text-text-secondary mt-6 basis-1/2 border p-4" }, [
                                vueExports.createVNode("h4", { class: "text-default-medium" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.delivery_info")), 1),
                                vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                                  vueExports.createVNode("p", { class: "text-small-medium" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.delivery_address")), 1),
                                  props.auth.user ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$6, {
                                    key: 0,
                                    modelValue: selectedAddress.value,
                                    "onUpdate:modelValue": [($event) => selectedAddress.value = $event, setCity],
                                    options: props.auth.user.addresses,
                                    fluid: "",
                                    "option-label": "final_address",
                                    size: "large",
                                    placeholder: "Выберите адресс"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : vueExports.createCommentVNode("", true),
                                  vueExports.createVNode(_sfc_main$6, {
                                    modelValue: selectedCity.value,
                                    "onUpdate:modelValue": ($event) => selectedCity.value = $event,
                                    options: props.cities,
                                    "option-label": "name",
                                    fluid: "",
                                    size: "large",
                                    placeholder: vueExports.unref(t)("cart_page.city")
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"]),
                                  !hasNoZones.value && vueExports.unref(calculationModel).delivery_type === "courier" ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$6, {
                                    key: 1,
                                    modelValue: vueExports.unref(calculationModel).delivery_zone_id,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(calculationModel).delivery_zone_id = $event,
                                    options: deliveryZones.value,
                                    "option-value": "id",
                                    "option-label": "name",
                                    fluid: "",
                                    "empty-message": selectedCity.value ? "Для этого города нет зон доставки" : "Сначала выберите город",
                                    size: "large",
                                    placeholder: "Выберите зону доставки"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "empty-message"])) : vueExports.createCommentVNode("", true),
                                  ((_e = vueExports.unref(calculateData)) == null ? void 0 : _e.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                    key: 2,
                                    class: "text-mob-small-reg text-additional"
                                  }, " Доставим " + vueExports.toDisplayString(formattingDeliveryDate.value), 1)) : vueExports.createCommentVNode("", true),
                                  hasNoZones.value ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                    key: 3,
                                    class: "flex w-min min-w-[238px] gap-1"
                                  }, [
                                    vueExports.createVNode("span", { class: "text-mob-small-reg text-additional block w-fit" }, "Срок и стоимость доставки определяется индивидуально"),
                                    vueExports.createVNode(vueExports.unref(_sfc_main$7), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" })
                                  ])) : vueExports.createCommentVNode("", true)
                                ]),
                                ((_f = vueExports.unref(calculateData)) == null ? void 0 : _f.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "border-t-filling mt-2 border-t py-2"
                                }, [
                                  vueExports.createVNode("h5", { class: "text-small-medium mb-2" }, "Стоимость доставки"),
                                  vueExports.createVNode("dl", { class: "grid grid-cols-2 items-center gap-2" }, [
                                    vueExports.createVNode("dt", { class: "text-mob-small-reg" }, "Заказ от " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб.", 1),
                                    vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, "бесплатно"),
                                    vueExports.createVNode("dt", { class: "text-mob-small-reg" }, "Заказ до " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб.", 1),
                                    vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, vueExports.toDisplayString((_g = vueExports.unref(calculateData)) == null ? void 0 : _g.delivery_detail.delivery_price) + " руб. ", 1)
                                  ])
                                ])) : vueExports.createCommentVNode("", true),
                                ((_h = vueExports.unref(calculateData)) == null ? void 0 : _h.delivery_detail.pickup_location_time_min) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 1,
                                  class: "border-t-filling mt-2 border-t"
                                }, [
                                  vueExports.createVNode("h5", { class: "text-small-medium py-2" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.pickup")), 1),
                                  vueExports.createVNode("p", { class: "text-mob-small-reg text-additional" }, vueExports.toDisplayString(getFormattingDeliveryDate(vueExports.unref(calculateData).delivery_detail.pickup_location_time_min)), 1)
                                ])) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg mt-6 w-fit rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white" }, [
                                  vueExports.createVNode("a", {
                                    href: "#delivery",
                                    class: "flex items-center gap-2",
                                    onClick: ($event) => currentTab.value = "delivery"
                                  }, [
                                    vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.all_delivery_terms")), 1),
                                    vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                      width: "16px",
                                      height: "16px"
                                    })
                                  ], 8, ["onClick"])
                                ])
                              ])
                            ]),
                            _ctx.product.gift_product && ((_i = _ctx.product.gift_product) == null ? void 0 : _i.gift_items.length) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [], 64)) : vueExports.createCommentVNode("", true),
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList((_j = _ctx.product.gift_product) == null ? void 0 : _j.gift_items, (gift) => {
                              return vueExports.openBlock(), vueExports.createBlock(_sfc_main$8, {
                                key: gift.id,
                                "gift-type": "forProduct",
                                item: { ...gift, total_price: 0 }
                              }, {
                                addToCart: vueExports.withCtx(() => [
                                  gift.is_available ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: 0,
                                    class: "text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"
                                  }, " 1 шт ")) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                    key: 1,
                                    class: "text-mob-small-bold"
                                  }, "Нет в наличии"))
                                ]),
                                _: 2
                              }, 1032, ["item"]);
                            }), 128)),
                            vueExports.createVNode("div", { class: "mt-8 w-full max-w-full overflow-x-auto max-sm:pl-6" }, [
                              vueExports.createVNode("div", { class: "flex min-w-max gap-2 whitespace-nowrap" }, [
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(tabs.value, (tab) => {
                                  return vueExports.openBlock(), vueExports.createBlock("button", {
                                    key: tab.id,
                                    class: ["text-subsidiary-reg md:text-mob-small-reg bg-input rounded-20 shrink-0 cursor-pointer px-4 py-3", currentTab.value === tab.id ? "bg-text text-white" : ""],
                                    onClick: ($event) => currentTab.value = tab.id
                                  }, vueExports.toDisplayString(tab.label), 11, ["onClick"]);
                                }), 128))
                              ])
                            ]),
                            vueExports.createVNode("div", { class: "mt-4 max-sm:px-6 lg:mt-8" }, [
                              currentTab.value === "about" ? (vueExports.openBlock(), vueExports.createBlock("div", { key: 0 }, [
                                vueExports.unref(isMobile) && filledAttributesCount.value > 0 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "bg-input rounded-20 mt-6 mb-4 p-4"
                                }, [
                                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(firstAttributes.value, (attribute) => {
                                    return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                      key: attribute.attribute_id
                                    }, [
                                      attribute.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                        key: 0,
                                        class: "bg-filling text-subsidiary mb-2 w-fit rounded-lg px-2 py-1 text-[14px] font-medium"
                                      }, [
                                        attribute.isFirstAttribute ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 0 }, [
                                          vueExports.createTextVNode(vueExports.toDisplayString(attribute.attribute_name) + ": ", 1),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, vueExports.toDisplayString(attribute.value), 1)
                                        ])) : vueExports.createCommentVNode("", true)
                                      ])) : vueExports.createCommentVNode("", true)
                                    ], 64);
                                  }), 128)),
                                  vueExports.createVNode("dl", { class: "mt-4 grid grid-cols-2 gap-y-2.5 md:max-w-[350px]" }, [
                                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(otherAttributes.value, (attribute) => {
                                      return vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, {
                                        key: attribute.attribute_id
                                      }, [
                                        attribute.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                          vueExports.createVNode("dt", { class: "text-complimentary-reg md:text-subsidiary-medium text-additional" }, vueExports.toDisplayString(attribute.attribute_name) + ":", 1),
                                          vueExports.createVNode("dd", { class: "text-subsidiary-medium md:text-mob-small-medium -mt-1" }, vueExports.toDisplayString(attribute.value), 1)
                                        ], 64)) : vueExports.createCommentVNode("", true)
                                      ], 64);
                                    }), 128))
                                  ])
                                ])) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode("p", {
                                  ref_key: "descriptionRef",
                                  ref: descriptionRef,
                                  class: ["text-subsidiary-reg transition-all duration-300 ease-in-out", { "line-clamp-3": !isExpanded.value }],
                                  innerHTML: _ctx.product.description
                                }, null, 10, ["innerHTML"]),
                                isExpandable.value ? (vueExports.openBlock(), vueExports.createBlock("button", {
                                  key: 1,
                                  class: "text-subsidiary-medium mt-2 flex cursor-pointer items-center gap-2 focus:outline-none",
                                  "aria-expanded": isExpanded.value,
                                  onClick: toggle
                                }, [
                                  vueExports.createTextVNode(vueExports.toDisplayString(isExpanded.value ? "Меньше" : "Смотреть полностью") + " ", 1),
                                  vueExports.createVNode(vueExports.unref(IconArrowDown), {
                                    class: ["mt-0.5 transition-transform duration-200 ease-in-out", { "rotate-180": isExpanded.value }]
                                  }, null, 8, ["class"])
                                ], 8, ["aria-expanded"])) : vueExports.createCommentVNode("", true)
                              ])) : vueExports.createCommentVNode("", true),
                              currentTab.value === "reviews" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 1,
                                id: "reviews"
                              }, [
                                vueExports.createVNode(_sfc_main$9, {
                                  reviews: _ctx.product.reviews,
                                  slug: _ctx.product.slug
                                }, null, 8, ["reviews", "slug"])
                              ])) : vueExports.createCommentVNode("", true),
                              currentTab.value === "delivery" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 2,
                                id: "delivery"
                              }, [
                                vueExports.createVNode(vueExports.unref(ProductDelivery))
                              ])) : vueExports.createCommentVNode("", true),
                              currentTab.value === "cutting" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 3,
                                class: "flex flex-col gap-2 md:flex-row md:justify-between md:gap-8"
                              }, [
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode("div", {
                                    innerHTML: _ctx.product.cutting.content
                                  }, null, 8, ["innerHTML"]),
                                  ((_l = (_k = _ctx.product.cutting) == null ? void 0 : _k.image) == null ? void 0 : _l.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$a), {
                                    key: 0,
                                    src: (_n = (_m = _ctx.product.cutting) == null ? void 0 : _m.image) == null ? void 0 : _n.path,
                                    alt: "бык",
                                    class: "mt-4"
                                  }, null, 8, ["src"])) : vueExports.createCommentVNode("", true),
                                  vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg mt-4 w-fit rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white" }, [
                                    vueExports.createVNode("a", {
                                      href: _ctx.product.cutting.button_link,
                                      class: "flex items-center gap-2"
                                    }, [
                                      vueExports.createVNode("span", null, vueExports.toDisplayString(_ctx.product.cutting.button_text), 1),
                                      vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                        width: "16px",
                                        height: "16px"
                                      })
                                    ], 8, ["href"])
                                  ])
                                ]),
                                ((_o = _ctx.product.cutting) == null ? void 0 : _o.video_link) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "shrink-0"
                                }, [
                                  vueExports.createVNode("h4", { class: "text-default-medium" }, "Видео"),
                                  vueExports.createVNode("div", { class: "rounded-20 mt-3 overflow-hidden" }, [
                                    vueExports.createVNode("iframe", {
                                      width: "352",
                                      height: "240",
                                      src: embedLink.value,
                                      allow: "clipboard-write; autoplay",
                                      allowFullScreen: ""
                                    }, null, 8, ["src"])
                                  ])
                                ])) : vueExports.createCommentVNode("", true)
                              ])) : vueExports.createCommentVNode("", true),
                              currentTab.value === "manufacturer" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 4,
                                class: "sm:grid sm:grid-cols-[auto_1fr] sm:gap-8"
                              }, [
                                vueExports.createVNode("div", { class: "flex-grow items-center gap-2 max-md:mt-4 max-sm:flex" }, [
                                  ((_q = (_p = _ctx.product.manufacturer) == null ? void 0 : _p.image) == null ? void 0 : _q.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$a), {
                                    key: 0,
                                    src: (_s = (_r = _ctx.product.manufacturer) == null ? void 0 : _r.image) == null ? void 0 : _s.path,
                                    alt: "123",
                                    class: "max-w-[60px] flex-shrink-0 sm:min-w-[132px]"
                                  }, null, 8, ["src"])) : vueExports.createCommentVNode("", true),
                                  vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("h4", {
                                    key: 1,
                                    class: "text-small-medium uppercase"
                                  }, vueExports.toDisplayString(_ctx.product.manufacturer.name), 1)) : vueExports.createCommentVNode("", true)
                                ]),
                                vueExports.createVNode("div", { class: "text-subsidiary-reg sm:text-mob-small-reg" }, [
                                  !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("h4", {
                                    key: 0,
                                    class: "text-default-medium uppercase"
                                  }, vueExports.toDisplayString(_ctx.product.manufacturer.name), 1)) : vueExports.createCommentVNode("", true),
                                  vueExports.createVNode("div", {
                                    innerHTML: _ctx.product.manufacturer.content
                                  }, null, 8, ["innerHTML"])
                                ])
                              ])) : vueExports.createCommentVNode("", true)
                            ])
                          ])
                        ])
                      ]),
                      vueExports.createVNode("div", { class: "hidden max-w-[352px] min-[1500px]:block" }, [
                        vueExports.createVNode("div", { class: "rounded-20 min-w-[352px] p-4 shadow" }, [
                          !!_ctx.product.sale_price ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "flex justify-between"
                          }, [
                            _ctx.product.sale_price ? (vueExports.openBlock(), vueExports.createBlock("p", {
                              key: 0,
                              class: "text-small-medium md:text-heavy-medium"
                            }, vueExports.toDisplayString(_ctx.product.sale_price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)) : vueExports.createCommentVNode("", true),
                            vueExports.createVNode("p", { class: "text-small-medium md:text-medium-medium text-subsidiary line-through" }, vueExports.toDisplayString(_ctx.product.price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)
                          ])) : (vueExports.openBlock(), vueExports.createBlock("p", {
                            key: 1,
                            class: "text-small-medium md:text-heavy-medium"
                          }, vueExports.toDisplayString(_ctx.product.price) + " " + vueExports.toDisplayString(_ctx.product.price_type), 1)),
                          vueExports.createVNode(_sfc_main$4, {
                            class: "mt-2",
                            quantity: _ctx.product.quantity
                          }, null, 8, ["quantity"]),
                          vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                            vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                              id: _ctx.product.id,
                              "count-in-cart": _ctx.product.count_in_cart,
                              quantity: _ctx.product.quantity,
                              "button-type": "full"
                            }, null, 8, ["id", "count-in-cart", "quantity"])
                          ])
                        ]),
                        vueExports.createVNode("div", { class: "border-filling rounded-20 text-text-secondary mt-6 max-w-[352px] border p-4" }, [
                          vueExports.createVNode("h4", { class: "text-default-medium" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.delivery_info")), 1),
                          vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                            vueExports.createVNode("p", { class: "text-small-medium" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.delivery_address")), 1),
                            props.auth.user ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$6, {
                              key: 0,
                              modelValue: selectedAddress.value,
                              "onUpdate:modelValue": [($event) => selectedAddress.value = $event, setCity],
                              options: props.auth.user.addresses,
                              fluid: "",
                              "option-label": "final_address",
                              size: "large",
                              placeholder: "Выберите адрес"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : vueExports.createCommentVNode("", true),
                            vueExports.createVNode(_sfc_main$6, {
                              modelValue: selectedCity.value,
                              "onUpdate:modelValue": ($event) => selectedCity.value = $event,
                              options: props.cities,
                              "option-label": "name",
                              fluid: "",
                              size: "large",
                              placeholder: vueExports.unref(t)("cart_page.city")
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"]),
                            !hasNoZones.value && vueExports.unref(calculationModel).delivery_type === "courier" ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$6, {
                              key: 1,
                              modelValue: vueExports.unref(calculationModel).delivery_zone_id,
                              "onUpdate:modelValue": ($event) => vueExports.unref(calculationModel).delivery_zone_id = $event,
                              options: deliveryZones.value,
                              "option-value": "id",
                              "option-label": "name",
                              fluid: "",
                              "empty-message": selectedCity.value ? "Для этого города нет зон доставки" : "Сначала выберите город",
                              size: "large",
                              placeholder: "Выберите зону доставки"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "empty-message"])) : vueExports.createCommentVNode("", true),
                            ((_t = vueExports.unref(calculateData)) == null ? void 0 : _t.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("p", {
                              key: 2,
                              class: "text-mob-small-reg text-additional"
                            }, " Доставим " + vueExports.toDisplayString(formattingDeliveryDate.value), 1)) : vueExports.createCommentVNode("", true),
                            hasNoZones.value ? (vueExports.openBlock(), vueExports.createBlock("p", {
                              key: 3,
                              class: "flex w-min min-w-[238px] gap-1"
                            }, [
                              vueExports.createVNode("span", { class: "text-mob-small-reg text-additional block w-fit" }, "Срок и стоимость доставки определяется индивидуально"),
                              vueExports.createVNode(vueExports.unref(_sfc_main$7), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" })
                            ])) : vueExports.createCommentVNode("", true)
                          ]),
                          ((_u = vueExports.unref(calculateData)) == null ? void 0 : _u.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "border-t-filling mt-2 border-t py-2"
                          }, [
                            vueExports.createVNode("h5", { class: "text-small-medium mb-2" }, "Стоимость доставки"),
                            vueExports.createVNode("dl", { class: "grid grid-cols-2 items-center gap-2" }, [
                              vueExports.createVNode("dt", { class: "text-mob-small-reg" }, " Заказ от " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб. ", 1),
                              vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, "бесплатно"),
                              vueExports.createVNode("dt", { class: "text-mob-small-reg" }, " Заказ до " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб. ", 1),
                              vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, vueExports.toDisplayString((_v = vueExports.unref(calculateData)) == null ? void 0 : _v.delivery_detail.delivery_price) + " руб. ", 1)
                            ])
                          ])) : vueExports.createCommentVNode("", true),
                          ((_w = vueExports.unref(calculateData)) == null ? void 0 : _w.delivery_detail.pickup_location_time_min) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 1,
                            class: "border-t-filling mt-2 border-t"
                          }, [
                            vueExports.createVNode("h5", { class: "text-small-medium py-2" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.pickup")), 1),
                            vueExports.createVNode("p", { class: "text-mob-small-reg text-additional" }, vueExports.toDisplayString(getFormattingDeliveryDate(vueExports.unref(calculateData).delivery_detail.pickup_location_time_min)), 1)
                          ])) : vueExports.createCommentVNode("", true),
                          vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg mt-6 w-fit rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white" }, [
                            vueExports.createVNode("a", {
                              href: "#delivery",
                              class: "flex items-center gap-2",
                              onClick: ($event) => currentTab.value = "delivery"
                            }, [
                              vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.all_delivery_terms")), 1),
                              vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                width: "16px",
                                height: "16px"
                              })
                            ], 8, ["onClick"])
                          ])
                        ])
                      ])
                    ])
                  ];
                }),
                _: 1
              }),
              _ctx.recomended_recipes.length > 0 ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$2), {
                key: 2,
                title: vueExports.unref(t)("product_detail_card.chef_recipes"),
                class: "mt-12 max-[640px]:!p-0 max-[640px]:!pl-4"
              }, {
                headerAction: vueExports.withCtx(() => [
                  vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4" }, [
                    vueExports.createVNode(vueExports.unref(link_default), {
                      href: _ctx.route("recipe.index"),
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
                  vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                    slides: _ctx.recomended_recipes,
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
                      vueExports.createVNode(vueExports.unref(_sfc_main$c), {
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
                          vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                            id: slide.id,
                            "initial-value": isFavorite
                          }, null, 8, ["id", "initial-value"]),
                          vueExports.createVNode(vueExports.unref(_sfc_main$e), {
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
              }, 8, ["title"])) : vueExports.createCommentVNode("", true),
              _ctx.recommended_products.length > 0 ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$2), {
                key: 3,
                title: vueExports.unref(t)("product_detail_card.often_bought_with"),
                class: "mt-12 max-[640px]:!p-0 max-[640px]:!pl-4"
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                    slides: _ctx.recommended_products,
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
                        slug: slide.slug,
                        title: slide.name,
                        images: slide.images.map((i) => i.path),
                        weight: slide.weight,
                        description: slide.short_description,
                        "is-favorite": slide.is_wishlist,
                        "degree-type": slide.degree_type,
                        categories: slide.tags.map((b) => b.name) ?? [],
                        unit: slide.weight_type,
                        "sale-percent": slide.sale_percent,
                        "is-new": slide.is_new,
                        price: Number(slide.sale_price) ?? 0,
                        "price-unit": slide.price_type,
                        "old-price": Number(slide.price) ?? 0,
                        cashback_percent: slide.cashback_percent
                      }, {
                        favoriteButton: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                            id: slide.id,
                            "initial-value": slide.is_wishlist
                          }, null, 8, ["id", "initial-value"])
                        ]),
                        footer: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                            id: slide.id,
                            "count-in-cart": slide.count_in_cart,
                            quantity: _ctx.product.quantity
                          }, null, 8, ["id", "count-in-cart", "quantity"])
                        ]),
                        _: 2
                      }, 1032, ["id", "has-gift", "slug", "title", "images", "weight", "description", "is-favorite", "degree-type", "categories", "unit", "sale-percent", "is-new", "price", "price-unit", "old-price", "cashback_percent"]))
                    ]),
                    _: 1
                  }, 8, ["slides"])
                ]),
                _: 1
              }, 8, ["title"])) : vueExports.createCommentVNode("", true),
              _ctx.combinations.length > 0 ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$2), {
                key: 4,
                title: "Рекомендации по сочетанию продуктов",
                class: "mt-4 max-[640px]:!p-0 max-[640px]:!pl-4"
              }, {
                headerAction: vueExports.withCtx(() => [
                  vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4" }, [
                    vueExports.createVNode(vueExports.unref(link_default), {
                      href: _ctx.route("combination.index"),
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
                  vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                    slides: _ctx.combinations,
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
                      vueExports.createVNode(vueExports.unref(CombinationPreviewCard), { combination: slide }, null, 8, ["combination"])
                    ]),
                    _: 1
                  }, 8, ["slides"])
                ]),
                _: 1
              })) : vueExports.createCommentVNode("", true),
              _ctx.user_purchased_products.length > 0 ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$2), {
                key: 5,
                title: "Вы уже покупали",
                class: "mt-4 max-[640px]:!p-0 max-[640px]:!pl-4"
              }, {
                headerAction: vueExports.withCtx(() => [
                  vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4" }, [
                    vueExports.createVNode(vueExports.unref(link_default), {
                      href: _ctx.route("user.profile.orders_history"),
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
                  vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                    slides: _ctx.user_purchased_products,
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
                        slug: slide.slug,
                        title: slide.name,
                        images: slide.images.map((i) => i.path),
                        weight: slide.weight,
                        description: slide.short_description,
                        "is-favorite": slide.is_wishlist,
                        "degree-type": slide.degree_type,
                        categories: slide.tags.map((b) => b.name) ?? [],
                        unit: slide.weight_type,
                        "sale-percent": slide.sale_percent,
                        "is-new": slide.is_new,
                        price: Number(slide.sale_price) ?? 0,
                        "price-unit": slide.price_type,
                        "old-price": Number(slide.price) ?? 0,
                        cashback_percent: slide.cashback_percent
                      }, {
                        favoriteButton: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$d), {
                            id: slide.id,
                            "initial-value": slide.is_wishlist
                          }, null, 8, ["id", "initial-value"])
                        ]),
                        footer: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                            id: slide.id,
                            "count-in-cart": slide.count_in_cart,
                            quantity: slide.quantity
                          }, null, 8, ["id", "count-in-cart", "quantity"])
                        ]),
                        _: 2
                      }, 1032, ["id", "has-gift", "slug", "title", "images", "weight", "description", "is-favorite", "degree-type", "categories", "unit", "sale-percent", "is-new", "price", "price-unit", "old-price", "cashback_percent"]))
                    ]),
                    _: 1
                  }, 8, ["slides"])
                ]),
                _: 1
              })) : vueExports.createCommentVNode("", true),
              vueExports.createVNode(vueExports.unref(_sfc_main$2), null, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(_sfc_main$f))
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/product/ui/ProductPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
