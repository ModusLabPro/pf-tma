import { v as vueExports, M as useOrderCalculate, u as useScreenSize, s as serverRenderer_cjs_prodExports, V as VContainer, x as _sfc_main$1, l as link_default, n as _sfc_main$2, o as _sfc_main$3, G as IconCaretRight, P as _sfc_main$5, K as _sfc_main$6, S as _sfc_main$7, _ as _sfc_main$8, a5 as _sfc_main$a } from "../ssr.js";
import { addDays, isToday, format, isTomorrow, differenceInCalendarDays } from "date-fns";
import { useI18n } from "vue-i18n";
import _sfc_main$4 from "./ProductQuantityIndicator-BmwOXfWQ.js";
import _sfc_main$9 from "./ProductReviews-BMzPyRW8.js";
import ProductSlider from "./ProductSlider-BX2Z8Zhs.js";
import { P as ProductDelivery } from "./ProductDelivery-BXe-oVgu.js";
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
import "./reactToReview-DRKkDf2Q.js";
import "./IconArrowsDownUp-DpCY8QBc.js";
import "./IconThumbsDown-D69dI4Zk.js";
import "./IconThumbsUp-BHrWpxEP.js";
import "./VShare-C36WNIjH.js";
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
  __name: "ComboDetailPage",
  __ssrInlineRender: true,
  props: {
    combo: {},
    banners: {},
    cities: {},
    auth: {}
  },
  setup(__props) {
    var _a, _b;
    const { t } = useI18n();
    const props = __props;
    const selectedCity = vueExports.ref();
    const selectedAddress = vueExports.shallowRef();
    const { calculateData, calculateOrder, calculationModel } = useOrderCalculate();
    calculationModel.delivery_type = "courier";
    calculationModel.product_id = props.combo.id;
    const formattingDeliveryDate = vueExports.computed(() => {
      if (!calculateData.value) return "";
      const finalDate = addDays(/* @__PURE__ */ new Date(), calculateData.value.delivery_detail.delivery_zone_time_min);
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
    const deliveryZones = vueExports.computed(() => {
      var _a2;
      return ((_a2 = props.cities.find((city) => {
        var _a3;
        return city.id === ((_a3 = selectedCity.value) == null ? void 0 : _a3.id);
      })) == null ? void 0 : _a2.delivery_zones.map((zone) => ({
        ...zone,
        name: [zone.name, zone.description].filter((el) => Boolean(el)).join(", ")
      }))) || [];
    });
    const hasNoZones = vueExports.computed(() => {
      var _a2, _b2;
      return !((((_b2 = (_a2 = selectedCity.value) == null ? void 0 : _a2.delivery_zones) == null ? void 0 : _b2.length) ?? 0) > 0);
    });
    const setCity = (address) => {
      selectedCity.value = props.cities.find((city) => city.id === address.city_id);
      calculationModel.delivery_zone_id = address.delivery_zone_id;
    };
    if (props.auth.user) {
      const primaryCity = (_b = (_a = props.auth.user) == null ? void 0 : _a.addresses) == null ? void 0 : _b.find((address) => address.is_primary);
      if (primaryCity) {
        selectedAddress.value = primaryCity;
        setCity(primaryCity);
      }
    }
    const tabs = vueExports.computed(() => {
      const baseTabs = [
        { id: "about", label: "Состав" },
        { id: "reviews", label: `Отзывы (${props.combo.reviews_count})` },
        { id: "delivery", label: t("product_detail_card.delivery") }
      ];
      return baseTabs;
    });
    const currentTab = vueExports.ref("about");
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
    const breadcrumbItems = vueExports.computed(() => {
      const items = [
        { label: "Главная", route: route("main-page") },
        { label: "Комбо наборы", route: route("combo.index") }
      ];
      return [...items, { label: props.combo.name, route: `/combo/${props.combo.id}` }];
    });
    vueExports.watchEffect(calculateOrder);
    const { isMobile, isTablet } = useScreenSize();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), _attrs, {
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
                var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
                if (_push3) {
                  _push3(`<div class="gap-8 lg:flex"${_scopeId2}><div class="w-full"${_scopeId2}><div class="flex flex-col gap-8 max-md:items-center sm:flex-row"${_scopeId2}><div class="max-md:max-w-full"${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(ProductSlider, { product: _ctx.combo }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full max-sm:px-6"${_scopeId2}><div class="text-subsidiary-medium md:text-mob-small-medium flex justify-between"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}><div class="flex items-center gap-1"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.average_rating)} `);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                    "default-value": Number(_ctx.combo.average_rating),
                    readonly: "",
                    class: "-mt-0.5"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><a href="#reviews" class="text-subsidiary flex items-center gap-1 md:gap-2"${_scopeId2}><span${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.reviews", _ctx.combo.reviews_count))}</span>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
                    width: "16px",
                    height: "16px"
                  }, null, _parent3, _scopeId2));
                  _push3(`</a></div><div${_scopeId2}><span class="text-subsidiary max-md:text-complimentary-reg"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.article"))}</span> ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.article_number)}</div></div><h1 class="text-small-medium lg:text-large-medium mt-6"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.name)}</h1><p class="text-subsidiary-reg md:text-small-medium"${_scopeId2}><span class="text-complimentary-reg md:text-mob-small-medium text-subsidiary"${_scopeId2}>Средний вес:</span> ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.weight)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.weight_type)}</p><div class="bg-input rounded-20 mt-6 hidden flex-col gap-3 p-4 min-[1500px]:flex"${_scopeId2}><h5 class="text-mob-small-reg text-additional"${_scopeId2}>О товаре</h5><p class="${serverRenderer_cjs_prodExports.ssrRenderClass(["text-mob-small-reg transition-all duration-300 ease-in-out"])}"${_scopeId2}>${_ctx.combo.description ?? ""}</p></div><div class="rounded-20 mx-auto mt-6 hidden max-w-md p-4 shadow-[0px_2px_20px_rgba(0,0,0,0.25)] min-[1500px]:!hidden sm:block"${_scopeId2}>`);
                  if (!!_ctx.combo.sale_price) {
                    _push3(`<div class="flex justify-between"${_scopeId2}>`);
                    if (_ctx.combo.sale_price) {
                      _push3(`<p class="text-small-medium md:text-heavy-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.sale_price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.price_type)}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<p class="text-small-medium md:text-medium-medium text-subsidiary line-through"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.price_type)}</p></div>`);
                  } else {
                    _push3(`<p class="text-small-medium md:text-heavy-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.price_type)}</p>`);
                  }
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                    class: "mt-2",
                    quantity: "Много"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="mt-6 flex flex-col gap-2"${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                    id: _ctx.combo.id,
                    "count-in-cart": _ctx.combo.count_in_cart,
                    "button-type": "full"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  if (vueExports.unref(isMobile)) {
                    _push3(`<div${_scopeId2}><div class="rounded-20 mt-4 p-4 shadow-[0px_2px_20px_rgba(0,0,0,0.25)]"${_scopeId2}>`);
                    if (!!_ctx.combo.sale_price) {
                      _push3(`<div class="flex justify-between"${_scopeId2}>`);
                      if (_ctx.combo.sale_price) {
                        _push3(`<p class="text-small-medium md:text-heavy-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.sale_price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.price_type)}</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<p class="text-small-medium md:text-medium-medium text-subsidiary line-through"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.price_type)}</p></div>`);
                    } else {
                      _push3(`<p class="text-small-medium md:text-heavy-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.price_type)}</p>`);
                    }
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                      class: "mt-2",
                      quantity: "Много"
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="mt-6 flex flex-col gap-2"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                      id: _ctx.combo.id,
                      "count-in-cart": _ctx.combo.count_in_cart,
                      "button-type": "full"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="sm:mt-8"${_scopeId2}><div${_scopeId2}><div class="flex w-full flex-col-reverse gap-4 max-sm:px-6 min-[1500px]:!hidden sm:flex-row"${_scopeId2}><div class="bg-input rounded-20 basis-1/2 p-4 sm:mt-6"${_scopeId2}><h5 class="text-mob-small-reg text-additional"${_scopeId2}>О товаре</h5><p class="${serverRenderer_cjs_prodExports.ssrRenderClass(["text-mob-small-reg transition-all duration-300 ease-in-out"])}"${_scopeId2}>${_ctx.combo.description ?? ""}</p></div><div class="border-filling rounded-20 text-text-secondary mt-6 basis-1/2 border p-4"${_scopeId2}><h4 class="text-default-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.delivery_info"))}</h4><div class="mt-6 flex flex-col gap-2"${_scopeId2}><p class="text-small-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.delivery_address"))}</p>`);
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
                  if (((_a2 = vueExports.unref(calculateData)) == null ? void 0 : _a2.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id) {
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
                  if (((_b2 = vueExports.unref(calculateData)) == null ? void 0 : _b2.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id) {
                    _push3(`<div class="border-t-filling mt-2 border-t py-2"${_scopeId2}><h5 class="text-small-medium mb-2"${_scopeId2}>Стоимость доставки</h5><dl class="grid grid-cols-2 items-center gap-2"${_scopeId2}><dt class="text-mob-small-reg"${_scopeId2}>Заказ от ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum)} руб.</dt><dd class="text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5"${_scopeId2}>бесплатно</dd><dt class="text-mob-small-reg"${_scopeId2}>Заказ до ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum)} руб.</dt><dd class="text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate((_c = vueExports.unref(calculateData)) == null ? void 0 : _c.delivery_detail.delivery_price)} руб. </dd></dl></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="bg-filling hover:bg-default text-subsidiary-reg mt-6 w-fit rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white"${_scopeId2}><a href="#delivery" class="flex items-center gap-2"${_scopeId2}><span${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("product_detail_card.all_delivery_terms"))}</span>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
                    width: "16px",
                    height: "16px"
                  }, null, _parent3, _scopeId2));
                  _push3(`</a></div></div></div><div class="mt-8 w-full max-w-full overflow-x-auto max-sm:pl-6"${_scopeId2}><div class="flex min-w-max gap-2 whitespace-nowrap"${_scopeId2}><!--[-->`);
                  serverRenderer_cjs_prodExports.ssrRenderList(tabs.value, (tab) => {
                    _push3(`<button class="${serverRenderer_cjs_prodExports.ssrRenderClass([currentTab.value === tab.id ? "bg-text text-white" : "", "text-subsidiary-reg md:text-mob-small-reg bg-input rounded-20 shrink-0 cursor-pointer px-4 py-3"])}"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(tab.label)}</button>`);
                  });
                  _push3(`<!--]--></div></div><div class="mt-4 max-sm:px-6 lg:mt-8"${_scopeId2}>`);
                  if (currentTab.value === "about") {
                    _push3(`<div${_scopeId2}><!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(_ctx.combo.products, (item) => {
                      var _a3, _b3;
                      _push3(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass([vueExports.unref(isMobile) ? "border-b-filling border-b" : "border-b-filling border-b", "grid gap-4 py-2 lg:grid-cols-[auto_1fr_auto]"])}"${_scopeId2}>`);
                      if (((_a3 = item.images[0]) == null ? void 0 : _a3.path) && !vueExports.unref(isMobile)) {
                        _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$8), {
                          src: item.images[0].path,
                          alt: "Изображение товара",
                          class: "flex-shrink-0 rounded-lg",
                          width: vueExports.unref(isMobile) ? "74px" : "225px",
                          height: vueExports.unref(isMobile) ? "64px" : "133px",
                          "img-classes": "rounded-lg"
                        }, null, _parent3, _scopeId2));
                      } else if (vueExports.unref(isMobile)) {
                        _push3(`<div class="flex items-start gap-2"${_scopeId2}>`);
                        if ((_b3 = item.images[0]) == null ? void 0 : _b3.path) {
                          _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$8), {
                            src: item.images[0].path,
                            alt: "Изображение товара",
                            class: "flex-shrink-0 rounded-lg",
                            width: vueExports.unref(isMobile) ? "74px" : "225px",
                            height: vueExports.unref(isMobile) ? "64px" : "133px",
                            "img-classes": "rounded-lg"
                          }, null, _parent3, _scopeId2));
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<h4 class="text-subsidiary-medium sm:text-mob-small-bold"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.name)}</h4></div>`);
                      } else {
                        _push3(`<div class="bg-surface-100 h-20 rounded-lg sm:w-[116px]"${_scopeId2}></div>`);
                      }
                      _push3(`<div class="flex flex-col gap-3 py-2"${_scopeId2}>`);
                      if (!vueExports.unref(isMobile)) {
                        _push3(`<h4 class="text-subsidiary-medium sm:text-mob-small-bold line-clamp-2"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.name)}</h4>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (item.type !== "Combo") {
                        _push3(`<dl class="${serverRenderer_cjs_prodExports.ssrRenderClass([vueExports.unref(isTablet) || vueExports.unref(isMobile) ? "flex-wrap gap-1" : "", "flex items-center"])}"${_scopeId2}><dt class="text-complimentary-reg text-additional mr-2"${_scopeId2}>Артикул:</dt><dd class="text-subsidiary-medium mr-8"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.article_number)}</dd><dt class="text-complimentary-reg text-additional mr-2"${_scopeId2}>Средний вес:</dt><dd class="text-subsidiary-medium mr-8"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.weight)} ${serverRenderer_cjs_prodExports.ssrInterpolate(item.weight_type)}</dd><dt class="text-complimentary-reg text-additional mr-2"${_scopeId2}>Бренд:</dt><dd class="text-subsidiary-medium mr-8"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.brands[0].name)}</dd></dl>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<div class="flex gap-8"${_scopeId2}><div class="text-subsidiary-medium bg-filling rounded-xl px-3 py-2"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(1)} шт</div><div class="flex items-center gap-2 md:gap-8"${_scopeId2}><div class="flex flex-col gap-0.5"${_scopeId2}><span class="text-complimentary-reg"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.price)} <span${_scopeId2}>руб/кг</span></span><span class="text-mob-small-bold"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.sale_price)} <span${_scopeId2}>руб</span></span></div>`);
                      if (!!item.sale_percent) {
                        _push3(`<div class="text-subsidiary text-complimentary-reg flex flex-col gap-0.5"${_scopeId2}><p class="line-through"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.price)} <span${_scopeId2}>руб/кг</span></p><p class="line-through"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.price)} руб</p></div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (!!item.sale_percent) {
                        _push3(`<div class="bg-delete text-complimentary-reg rounded-full px-2 py-1 text-white"${_scopeId2}> -${serverRenderer_cjs_prodExports.ssrInterpolate(item.sale_percent)} % </div>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div></div></div></div>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (currentTab.value === "reviews") {
                    _push3(`<div id="reviews"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, {
                      reviews: _ctx.combo.reviews
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
                  _push3(`</div></div></div></div><div class="hidden max-w-[352px] min-[1500px]:block"${_scopeId2}><div class="rounded-20 min-w-[352px] p-4 shadow"${_scopeId2}>`);
                  if (!!_ctx.combo.sale_price) {
                    _push3(`<div class="flex justify-between"${_scopeId2}>`);
                    if (_ctx.combo.sale_price) {
                      _push3(`<p class="text-small-medium md:text-heavy-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.sale_price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.price_type)}</p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<p class="text-small-medium md:text-medium-medium text-subsidiary line-through"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.price_type)}</p></div>`);
                  } else {
                    _push3(`<p class="text-small-medium md:text-heavy-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.combo.price_type)}</p>`);
                  }
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                    class: "mt-2",
                    quantity: "Много"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="mt-6 flex flex-col gap-2"${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                    id: _ctx.combo.id,
                    "count-in-cart": _ctx.combo.count_in_cart,
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
                  if (((_d = vueExports.unref(calculateData)) == null ? void 0 : _d.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id) {
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
                  if (((_e = vueExports.unref(calculateData)) == null ? void 0 : _e.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id) {
                    _push3(`<div class="border-t-filling mt-2 border-t py-2"${_scopeId2}><h5 class="text-small-medium mb-2"${_scopeId2}>Стоимость доставки</h5><dl class="grid grid-cols-2 items-center gap-2"${_scopeId2}><dt class="text-mob-small-reg"${_scopeId2}> Заказ от ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum)} руб. </dt><dd class="text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5"${_scopeId2}>бесплатно</dd><dt class="text-mob-small-reg"${_scopeId2}> Заказ до ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum)} руб. </dt><dd class="text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate((_f = vueExports.unref(calculateData)) == null ? void 0 : _f.delivery_detail.delivery_price)} руб. </dd></dl></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  {
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
                      vueExports.createVNode("div", { class: "w-full" }, [
                        vueExports.createVNode("div", { class: "flex flex-col gap-8 max-md:items-center sm:flex-row" }, [
                          vueExports.createVNode("div", { class: "max-md:max-w-full" }, [
                            vueExports.createVNode(ProductSlider, { product: _ctx.combo }, null, 8, ["product"])
                          ]),
                          vueExports.createVNode("div", { class: "w-full max-sm:px-6" }, [
                            vueExports.createVNode("div", { class: "text-subsidiary-medium md:text-mob-small-medium flex justify-between" }, [
                              vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                                vueExports.createVNode("div", { class: "flex items-center gap-1" }, [
                                  vueExports.createTextVNode(vueExports.toDisplayString(_ctx.combo.average_rating) + " ", 1),
                                  vueExports.createVNode(_sfc_main$3, {
                                    "default-value": Number(_ctx.combo.average_rating),
                                    readonly: "",
                                    class: "-mt-0.5"
                                  }, null, 8, ["default-value"])
                                ]),
                                vueExports.createVNode("a", {
                                  href: "#reviews",
                                  class: "text-subsidiary flex items-center gap-1 md:gap-2",
                                  onClick: ($event) => currentTab.value = "reviews"
                                }, [
                                  vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.reviews", _ctx.combo.reviews_count)), 1),
                                  vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                    width: "16px",
                                    height: "16px"
                                  })
                                ], 8, ["onClick"])
                              ]),
                              vueExports.createVNode("div", null, [
                                vueExports.createVNode("span", { class: "text-subsidiary max-md:text-complimentary-reg" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.article")), 1),
                                vueExports.createTextVNode(" " + vueExports.toDisplayString(_ctx.combo.article_number), 1)
                              ])
                            ]),
                            vueExports.createVNode("h1", { class: "text-small-medium lg:text-large-medium mt-6" }, vueExports.toDisplayString(_ctx.combo.name), 1),
                            vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-small-medium" }, [
                              vueExports.createVNode("span", { class: "text-complimentary-reg md:text-mob-small-medium text-subsidiary" }, "Средний вес:"),
                              vueExports.createTextVNode(" " + vueExports.toDisplayString(_ctx.combo.weight) + " " + vueExports.toDisplayString(_ctx.combo.weight_type), 1)
                            ]),
                            vueExports.createVNode("div", { class: "bg-input rounded-20 mt-6 hidden flex-col gap-3 p-4 min-[1500px]:flex" }, [
                              vueExports.createVNode("h5", { class: "text-mob-small-reg text-additional" }, "О товаре"),
                              vueExports.createVNode("p", {
                                ref_key: "descriptionRef",
                                ref: descriptionRef,
                                class: ["text-mob-small-reg transition-all duration-300 ease-in-out"],
                                innerHTML: _ctx.combo.description
                              }, null, 8, ["innerHTML"])
                            ]),
                            vueExports.createVNode("div", { class: "rounded-20 mx-auto mt-6 hidden max-w-md p-4 shadow-[0px_2px_20px_rgba(0,0,0,0.25)] min-[1500px]:!hidden sm:block" }, [
                              !!_ctx.combo.sale_price ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 0,
                                class: "flex justify-between"
                              }, [
                                _ctx.combo.sale_price ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                  key: 0,
                                  class: "text-small-medium md:text-heavy-medium"
                                }, vueExports.toDisplayString(_ctx.combo.sale_price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode("p", { class: "text-small-medium md:text-medium-medium text-subsidiary line-through" }, vueExports.toDisplayString(_ctx.combo.price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)
                              ])) : (vueExports.openBlock(), vueExports.createBlock("p", {
                                key: 1,
                                class: "text-small-medium md:text-heavy-medium"
                              }, vueExports.toDisplayString(_ctx.combo.price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)),
                              vueExports.createVNode(_sfc_main$4, {
                                class: "mt-2",
                                quantity: "Много"
                              }),
                              vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                                vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                  id: _ctx.combo.id,
                                  "count-in-cart": _ctx.combo.count_in_cart,
                                  "button-type": "full"
                                }, null, 8, ["id", "count-in-cart"])
                              ])
                            ]),
                            vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("div", { key: 0 }, [
                              vueExports.createVNode("div", { class: "rounded-20 mt-4 p-4 shadow-[0px_2px_20px_rgba(0,0,0,0.25)]" }, [
                                !!_ctx.combo.sale_price ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "flex justify-between"
                                }, [
                                  _ctx.combo.sale_price ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                    key: 0,
                                    class: "text-small-medium md:text-heavy-medium"
                                  }, vueExports.toDisplayString(_ctx.combo.sale_price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)) : vueExports.createCommentVNode("", true),
                                  vueExports.createVNode("p", { class: "text-small-medium md:text-medium-medium text-subsidiary line-through" }, vueExports.toDisplayString(_ctx.combo.price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)
                                ])) : (vueExports.openBlock(), vueExports.createBlock("p", {
                                  key: 1,
                                  class: "text-small-medium md:text-heavy-medium"
                                }, vueExports.toDisplayString(_ctx.combo.price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)),
                                vueExports.createVNode(_sfc_main$4, {
                                  class: "mt-2",
                                  quantity: "Много"
                                }),
                                vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                    id: _ctx.combo.id,
                                    "count-in-cart": _ctx.combo.count_in_cart,
                                    "button-type": "full"
                                  }, null, 8, ["id", "count-in-cart"])
                                ])
                              ])
                            ])) : vueExports.createCommentVNode("", true)
                          ])
                        ]),
                        vueExports.createVNode("div", { class: "sm:mt-8" }, [
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("div", { class: "flex w-full flex-col-reverse gap-4 max-sm:px-6 min-[1500px]:!hidden sm:flex-row" }, [
                              vueExports.createVNode("div", { class: "bg-input rounded-20 basis-1/2 p-4 sm:mt-6" }, [
                                vueExports.createVNode("h5", { class: "text-mob-small-reg text-additional" }, "О товаре"),
                                vueExports.createVNode("p", {
                                  ref_key: "descriptionRef",
                                  ref: descriptionRef,
                                  class: ["text-mob-small-reg transition-all duration-300 ease-in-out"],
                                  innerHTML: _ctx.combo.description
                                }, null, 8, ["innerHTML"])
                              ]),
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
                                  ((_g = vueExports.unref(calculateData)) == null ? void 0 : _g.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("p", {
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
                                ((_h = vueExports.unref(calculateData)) == null ? void 0 : _h.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "border-t-filling mt-2 border-t py-2"
                                }, [
                                  vueExports.createVNode("h5", { class: "text-small-medium mb-2" }, "Стоимость доставки"),
                                  vueExports.createVNode("dl", { class: "grid grid-cols-2 items-center gap-2" }, [
                                    vueExports.createVNode("dt", { class: "text-mob-small-reg" }, "Заказ от " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб.", 1),
                                    vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, "бесплатно"),
                                    vueExports.createVNode("dt", { class: "text-mob-small-reg" }, "Заказ до " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб.", 1),
                                    vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, vueExports.toDisplayString((_i = vueExports.unref(calculateData)) == null ? void 0 : _i.delivery_detail.delivery_price) + " руб. ", 1)
                                  ])
                                ])) : vueExports.createCommentVNode("", true),
                                vueExports.createCommentVNode("", true),
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
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.combo.products, (item) => {
                                  var _a3, _b3;
                                  return vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: item.id,
                                    class: ["grid gap-4 py-2 lg:grid-cols-[auto_1fr_auto]", vueExports.unref(isMobile) ? "border-b-filling border-b" : "border-b-filling border-b"]
                                  }, [
                                    ((_a3 = item.images[0]) == null ? void 0 : _a3.path) && !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$8), {
                                      key: 0,
                                      src: item.images[0].path,
                                      alt: "Изображение товара",
                                      class: "flex-shrink-0 rounded-lg",
                                      width: vueExports.unref(isMobile) ? "74px" : "225px",
                                      height: vueExports.unref(isMobile) ? "64px" : "133px",
                                      "img-classes": "rounded-lg"
                                    }, null, 8, ["src", "width", "height"])) : vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 1,
                                      class: "flex items-start gap-2"
                                    }, [
                                      ((_b3 = item.images[0]) == null ? void 0 : _b3.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$8), {
                                        key: 0,
                                        src: item.images[0].path,
                                        alt: "Изображение товара",
                                        class: "flex-shrink-0 rounded-lg",
                                        width: vueExports.unref(isMobile) ? "74px" : "225px",
                                        height: vueExports.unref(isMobile) ? "64px" : "133px",
                                        "img-classes": "rounded-lg"
                                      }, null, 8, ["src", "width", "height"])) : vueExports.createCommentVNode("", true),
                                      vueExports.createVNode("h4", { class: "text-subsidiary-medium sm:text-mob-small-bold" }, vueExports.toDisplayString(item.name), 1)
                                    ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 2,
                                      class: "bg-surface-100 h-20 rounded-lg sm:w-[116px]"
                                    })),
                                    vueExports.createVNode("div", { class: "flex flex-col gap-3 py-2" }, [
                                      !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("h4", {
                                        key: 0,
                                        class: "text-subsidiary-medium sm:text-mob-small-bold line-clamp-2"
                                      }, vueExports.toDisplayString(item.name), 1)) : vueExports.createCommentVNode("", true),
                                      item.type !== "Combo" ? (vueExports.openBlock(), vueExports.createBlock("dl", {
                                        key: 1,
                                        class: ["flex items-center", vueExports.unref(isTablet) || vueExports.unref(isMobile) ? "flex-wrap gap-1" : ""]
                                      }, [
                                        vueExports.createVNode("dt", { class: "text-complimentary-reg text-additional mr-2" }, "Артикул:"),
                                        vueExports.createVNode("dd", { class: "text-subsidiary-medium mr-8" }, vueExports.toDisplayString(item.article_number), 1),
                                        vueExports.createVNode("dt", { class: "text-complimentary-reg text-additional mr-2" }, "Средний вес:"),
                                        vueExports.createVNode("dd", { class: "text-subsidiary-medium mr-8" }, vueExports.toDisplayString(item.weight) + " " + vueExports.toDisplayString(item.weight_type), 1),
                                        vueExports.createVNode("dt", { class: "text-complimentary-reg text-additional mr-2" }, "Бренд:"),
                                        vueExports.createVNode("dd", { class: "text-subsidiary-medium mr-8" }, vueExports.toDisplayString(item.brands[0].name), 1)
                                      ], 2)) : vueExports.createCommentVNode("", true),
                                      vueExports.createVNode("div", { class: "flex gap-8" }, [
                                        vueExports.createVNode("div", { class: "text-subsidiary-medium bg-filling rounded-xl px-3 py-2" }, vueExports.toDisplayString(1) + " шт"),
                                        vueExports.createVNode("div", { class: "flex items-center gap-2 md:gap-8" }, [
                                          vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                                            vueExports.createVNode("span", { class: "text-complimentary-reg" }, [
                                              vueExports.createTextVNode(vueExports.toDisplayString(item.price) + " ", 1),
                                              vueExports.createVNode("span", null, "руб/кг")
                                            ]),
                                            vueExports.createVNode("span", { class: "text-mob-small-bold" }, [
                                              vueExports.createTextVNode(vueExports.toDisplayString(item.sale_price) + " ", 1),
                                              vueExports.createVNode("span", null, "руб")
                                            ])
                                          ]),
                                          !!item.sale_percent ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                            key: 0,
                                            class: "text-subsidiary text-complimentary-reg flex flex-col gap-0.5"
                                          }, [
                                            vueExports.createVNode("p", { class: "line-through" }, [
                                              vueExports.createTextVNode(vueExports.toDisplayString(item.price) + " ", 1),
                                              vueExports.createVNode("span", null, "руб/кг")
                                            ]),
                                            vueExports.createVNode("p", { class: "line-through" }, vueExports.toDisplayString(item.price) + " руб", 1)
                                          ])) : vueExports.createCommentVNode("", true),
                                          !!item.sale_percent ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                            key: 1,
                                            class: "bg-delete text-complimentary-reg rounded-full px-2 py-1 text-white"
                                          }, " -" + vueExports.toDisplayString(item.sale_percent) + " % ", 1)) : vueExports.createCommentVNode("", true)
                                        ])
                                      ])
                                    ])
                                  ], 2);
                                }), 128))
                              ])) : vueExports.createCommentVNode("", true),
                              currentTab.value === "reviews" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 1,
                                id: "reviews"
                              }, [
                                vueExports.createVNode(_sfc_main$9, {
                                  reviews: _ctx.combo.reviews
                                }, null, 8, ["reviews"])
                              ])) : vueExports.createCommentVNode("", true),
                              currentTab.value === "delivery" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 2,
                                id: "delivery"
                              }, [
                                vueExports.createVNode(vueExports.unref(ProductDelivery))
                              ])) : vueExports.createCommentVNode("", true)
                            ])
                          ])
                        ])
                      ]),
                      vueExports.createVNode("div", { class: "hidden max-w-[352px] min-[1500px]:block" }, [
                        vueExports.createVNode("div", { class: "rounded-20 min-w-[352px] p-4 shadow" }, [
                          !!_ctx.combo.sale_price ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "flex justify-between"
                          }, [
                            _ctx.combo.sale_price ? (vueExports.openBlock(), vueExports.createBlock("p", {
                              key: 0,
                              class: "text-small-medium md:text-heavy-medium"
                            }, vueExports.toDisplayString(_ctx.combo.sale_price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)) : vueExports.createCommentVNode("", true),
                            vueExports.createVNode("p", { class: "text-small-medium md:text-medium-medium text-subsidiary line-through" }, vueExports.toDisplayString(_ctx.combo.price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)
                          ])) : (vueExports.openBlock(), vueExports.createBlock("p", {
                            key: 1,
                            class: "text-small-medium md:text-heavy-medium"
                          }, vueExports.toDisplayString(_ctx.combo.price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)),
                          vueExports.createVNode(_sfc_main$4, {
                            class: "mt-2",
                            quantity: "Много"
                          }),
                          vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                            vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                              id: _ctx.combo.id,
                              "count-in-cart": _ctx.combo.count_in_cart,
                              "button-type": "full"
                            }, null, 8, ["id", "count-in-cart"])
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
                            ((_j = vueExports.unref(calculateData)) == null ? void 0 : _j.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("p", {
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
                          ((_k = vueExports.unref(calculateData)) == null ? void 0 : _k.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "border-t-filling mt-2 border-t py-2"
                          }, [
                            vueExports.createVNode("h5", { class: "text-small-medium mb-2" }, "Стоимость доставки"),
                            vueExports.createVNode("dl", { class: "grid grid-cols-2 items-center gap-2" }, [
                              vueExports.createVNode("dt", { class: "text-mob-small-reg" }, " Заказ от " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб. ", 1),
                              vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, "бесплатно"),
                              vueExports.createVNode("dt", { class: "text-mob-small-reg" }, " Заказ до " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб. ", 1),
                              vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, vueExports.toDisplayString((_l = vueExports.unref(calculateData)) == null ? void 0 : _l.delivery_detail.delivery_price) + " руб. ", 1)
                            ])
                          ])) : vueExports.createCommentVNode("", true),
                          vueExports.createCommentVNode("", true),
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
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), null, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$a), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(_sfc_main$a))
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
                  var _a2, _b2, _c, _d, _e, _f;
                  return [
                    vueExports.createVNode("div", { class: "gap-8 lg:flex" }, [
                      vueExports.createVNode("div", { class: "w-full" }, [
                        vueExports.createVNode("div", { class: "flex flex-col gap-8 max-md:items-center sm:flex-row" }, [
                          vueExports.createVNode("div", { class: "max-md:max-w-full" }, [
                            vueExports.createVNode(ProductSlider, { product: _ctx.combo }, null, 8, ["product"])
                          ]),
                          vueExports.createVNode("div", { class: "w-full max-sm:px-6" }, [
                            vueExports.createVNode("div", { class: "text-subsidiary-medium md:text-mob-small-medium flex justify-between" }, [
                              vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                                vueExports.createVNode("div", { class: "flex items-center gap-1" }, [
                                  vueExports.createTextVNode(vueExports.toDisplayString(_ctx.combo.average_rating) + " ", 1),
                                  vueExports.createVNode(_sfc_main$3, {
                                    "default-value": Number(_ctx.combo.average_rating),
                                    readonly: "",
                                    class: "-mt-0.5"
                                  }, null, 8, ["default-value"])
                                ]),
                                vueExports.createVNode("a", {
                                  href: "#reviews",
                                  class: "text-subsidiary flex items-center gap-1 md:gap-2",
                                  onClick: ($event) => currentTab.value = "reviews"
                                }, [
                                  vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.reviews", _ctx.combo.reviews_count)), 1),
                                  vueExports.createVNode(vueExports.unref(IconCaretRight), {
                                    width: "16px",
                                    height: "16px"
                                  })
                                ], 8, ["onClick"])
                              ]),
                              vueExports.createVNode("div", null, [
                                vueExports.createVNode("span", { class: "text-subsidiary max-md:text-complimentary-reg" }, vueExports.toDisplayString(vueExports.unref(t)("product_detail_card.article")), 1),
                                vueExports.createTextVNode(" " + vueExports.toDisplayString(_ctx.combo.article_number), 1)
                              ])
                            ]),
                            vueExports.createVNode("h1", { class: "text-small-medium lg:text-large-medium mt-6" }, vueExports.toDisplayString(_ctx.combo.name), 1),
                            vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-small-medium" }, [
                              vueExports.createVNode("span", { class: "text-complimentary-reg md:text-mob-small-medium text-subsidiary" }, "Средний вес:"),
                              vueExports.createTextVNode(" " + vueExports.toDisplayString(_ctx.combo.weight) + " " + vueExports.toDisplayString(_ctx.combo.weight_type), 1)
                            ]),
                            vueExports.createVNode("div", { class: "bg-input rounded-20 mt-6 hidden flex-col gap-3 p-4 min-[1500px]:flex" }, [
                              vueExports.createVNode("h5", { class: "text-mob-small-reg text-additional" }, "О товаре"),
                              vueExports.createVNode("p", {
                                ref_key: "descriptionRef",
                                ref: descriptionRef,
                                class: ["text-mob-small-reg transition-all duration-300 ease-in-out"],
                                innerHTML: _ctx.combo.description
                              }, null, 8, ["innerHTML"])
                            ]),
                            vueExports.createVNode("div", { class: "rounded-20 mx-auto mt-6 hidden max-w-md p-4 shadow-[0px_2px_20px_rgba(0,0,0,0.25)] min-[1500px]:!hidden sm:block" }, [
                              !!_ctx.combo.sale_price ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 0,
                                class: "flex justify-between"
                              }, [
                                _ctx.combo.sale_price ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                  key: 0,
                                  class: "text-small-medium md:text-heavy-medium"
                                }, vueExports.toDisplayString(_ctx.combo.sale_price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode("p", { class: "text-small-medium md:text-medium-medium text-subsidiary line-through" }, vueExports.toDisplayString(_ctx.combo.price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)
                              ])) : (vueExports.openBlock(), vueExports.createBlock("p", {
                                key: 1,
                                class: "text-small-medium md:text-heavy-medium"
                              }, vueExports.toDisplayString(_ctx.combo.price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)),
                              vueExports.createVNode(_sfc_main$4, {
                                class: "mt-2",
                                quantity: "Много"
                              }),
                              vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                                vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                  id: _ctx.combo.id,
                                  "count-in-cart": _ctx.combo.count_in_cart,
                                  "button-type": "full"
                                }, null, 8, ["id", "count-in-cart"])
                              ])
                            ]),
                            vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("div", { key: 0 }, [
                              vueExports.createVNode("div", { class: "rounded-20 mt-4 p-4 shadow-[0px_2px_20px_rgba(0,0,0,0.25)]" }, [
                                !!_ctx.combo.sale_price ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "flex justify-between"
                                }, [
                                  _ctx.combo.sale_price ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                    key: 0,
                                    class: "text-small-medium md:text-heavy-medium"
                                  }, vueExports.toDisplayString(_ctx.combo.sale_price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)) : vueExports.createCommentVNode("", true),
                                  vueExports.createVNode("p", { class: "text-small-medium md:text-medium-medium text-subsidiary line-through" }, vueExports.toDisplayString(_ctx.combo.price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)
                                ])) : (vueExports.openBlock(), vueExports.createBlock("p", {
                                  key: 1,
                                  class: "text-small-medium md:text-heavy-medium"
                                }, vueExports.toDisplayString(_ctx.combo.price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)),
                                vueExports.createVNode(_sfc_main$4, {
                                  class: "mt-2",
                                  quantity: "Много"
                                }),
                                vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                    id: _ctx.combo.id,
                                    "count-in-cart": _ctx.combo.count_in_cart,
                                    "button-type": "full"
                                  }, null, 8, ["id", "count-in-cart"])
                                ])
                              ])
                            ])) : vueExports.createCommentVNode("", true)
                          ])
                        ]),
                        vueExports.createVNode("div", { class: "sm:mt-8" }, [
                          vueExports.createVNode("div", null, [
                            vueExports.createVNode("div", { class: "flex w-full flex-col-reverse gap-4 max-sm:px-6 min-[1500px]:!hidden sm:flex-row" }, [
                              vueExports.createVNode("div", { class: "bg-input rounded-20 basis-1/2 p-4 sm:mt-6" }, [
                                vueExports.createVNode("h5", { class: "text-mob-small-reg text-additional" }, "О товаре"),
                                vueExports.createVNode("p", {
                                  ref_key: "descriptionRef",
                                  ref: descriptionRef,
                                  class: ["text-mob-small-reg transition-all duration-300 ease-in-out"],
                                  innerHTML: _ctx.combo.description
                                }, null, 8, ["innerHTML"])
                              ]),
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
                                  ((_a2 = vueExports.unref(calculateData)) == null ? void 0 : _a2.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("p", {
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
                                ((_b2 = vueExports.unref(calculateData)) == null ? void 0 : _b2.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("div", {
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
                                vueExports.createCommentVNode("", true),
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
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.combo.products, (item) => {
                                  var _a3, _b3;
                                  return vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: item.id,
                                    class: ["grid gap-4 py-2 lg:grid-cols-[auto_1fr_auto]", vueExports.unref(isMobile) ? "border-b-filling border-b" : "border-b-filling border-b"]
                                  }, [
                                    ((_a3 = item.images[0]) == null ? void 0 : _a3.path) && !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$8), {
                                      key: 0,
                                      src: item.images[0].path,
                                      alt: "Изображение товара",
                                      class: "flex-shrink-0 rounded-lg",
                                      width: vueExports.unref(isMobile) ? "74px" : "225px",
                                      height: vueExports.unref(isMobile) ? "64px" : "133px",
                                      "img-classes": "rounded-lg"
                                    }, null, 8, ["src", "width", "height"])) : vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 1,
                                      class: "flex items-start gap-2"
                                    }, [
                                      ((_b3 = item.images[0]) == null ? void 0 : _b3.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$8), {
                                        key: 0,
                                        src: item.images[0].path,
                                        alt: "Изображение товара",
                                        class: "flex-shrink-0 rounded-lg",
                                        width: vueExports.unref(isMobile) ? "74px" : "225px",
                                        height: vueExports.unref(isMobile) ? "64px" : "133px",
                                        "img-classes": "rounded-lg"
                                      }, null, 8, ["src", "width", "height"])) : vueExports.createCommentVNode("", true),
                                      vueExports.createVNode("h4", { class: "text-subsidiary-medium sm:text-mob-small-bold" }, vueExports.toDisplayString(item.name), 1)
                                    ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 2,
                                      class: "bg-surface-100 h-20 rounded-lg sm:w-[116px]"
                                    })),
                                    vueExports.createVNode("div", { class: "flex flex-col gap-3 py-2" }, [
                                      !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("h4", {
                                        key: 0,
                                        class: "text-subsidiary-medium sm:text-mob-small-bold line-clamp-2"
                                      }, vueExports.toDisplayString(item.name), 1)) : vueExports.createCommentVNode("", true),
                                      item.type !== "Combo" ? (vueExports.openBlock(), vueExports.createBlock("dl", {
                                        key: 1,
                                        class: ["flex items-center", vueExports.unref(isTablet) || vueExports.unref(isMobile) ? "flex-wrap gap-1" : ""]
                                      }, [
                                        vueExports.createVNode("dt", { class: "text-complimentary-reg text-additional mr-2" }, "Артикул:"),
                                        vueExports.createVNode("dd", { class: "text-subsidiary-medium mr-8" }, vueExports.toDisplayString(item.article_number), 1),
                                        vueExports.createVNode("dt", { class: "text-complimentary-reg text-additional mr-2" }, "Средний вес:"),
                                        vueExports.createVNode("dd", { class: "text-subsidiary-medium mr-8" }, vueExports.toDisplayString(item.weight) + " " + vueExports.toDisplayString(item.weight_type), 1),
                                        vueExports.createVNode("dt", { class: "text-complimentary-reg text-additional mr-2" }, "Бренд:"),
                                        vueExports.createVNode("dd", { class: "text-subsidiary-medium mr-8" }, vueExports.toDisplayString(item.brands[0].name), 1)
                                      ], 2)) : vueExports.createCommentVNode("", true),
                                      vueExports.createVNode("div", { class: "flex gap-8" }, [
                                        vueExports.createVNode("div", { class: "text-subsidiary-medium bg-filling rounded-xl px-3 py-2" }, vueExports.toDisplayString(1) + " шт"),
                                        vueExports.createVNode("div", { class: "flex items-center gap-2 md:gap-8" }, [
                                          vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                                            vueExports.createVNode("span", { class: "text-complimentary-reg" }, [
                                              vueExports.createTextVNode(vueExports.toDisplayString(item.price) + " ", 1),
                                              vueExports.createVNode("span", null, "руб/кг")
                                            ]),
                                            vueExports.createVNode("span", { class: "text-mob-small-bold" }, [
                                              vueExports.createTextVNode(vueExports.toDisplayString(item.sale_price) + " ", 1),
                                              vueExports.createVNode("span", null, "руб")
                                            ])
                                          ]),
                                          !!item.sale_percent ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                            key: 0,
                                            class: "text-subsidiary text-complimentary-reg flex flex-col gap-0.5"
                                          }, [
                                            vueExports.createVNode("p", { class: "line-through" }, [
                                              vueExports.createTextVNode(vueExports.toDisplayString(item.price) + " ", 1),
                                              vueExports.createVNode("span", null, "руб/кг")
                                            ]),
                                            vueExports.createVNode("p", { class: "line-through" }, vueExports.toDisplayString(item.price) + " руб", 1)
                                          ])) : vueExports.createCommentVNode("", true),
                                          !!item.sale_percent ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                            key: 1,
                                            class: "bg-delete text-complimentary-reg rounded-full px-2 py-1 text-white"
                                          }, " -" + vueExports.toDisplayString(item.sale_percent) + " % ", 1)) : vueExports.createCommentVNode("", true)
                                        ])
                                      ])
                                    ])
                                  ], 2);
                                }), 128))
                              ])) : vueExports.createCommentVNode("", true),
                              currentTab.value === "reviews" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 1,
                                id: "reviews"
                              }, [
                                vueExports.createVNode(_sfc_main$9, {
                                  reviews: _ctx.combo.reviews
                                }, null, 8, ["reviews"])
                              ])) : vueExports.createCommentVNode("", true),
                              currentTab.value === "delivery" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 2,
                                id: "delivery"
                              }, [
                                vueExports.createVNode(vueExports.unref(ProductDelivery))
                              ])) : vueExports.createCommentVNode("", true)
                            ])
                          ])
                        ])
                      ]),
                      vueExports.createVNode("div", { class: "hidden max-w-[352px] min-[1500px]:block" }, [
                        vueExports.createVNode("div", { class: "rounded-20 min-w-[352px] p-4 shadow" }, [
                          !!_ctx.combo.sale_price ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "flex justify-between"
                          }, [
                            _ctx.combo.sale_price ? (vueExports.openBlock(), vueExports.createBlock("p", {
                              key: 0,
                              class: "text-small-medium md:text-heavy-medium"
                            }, vueExports.toDisplayString(_ctx.combo.sale_price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)) : vueExports.createCommentVNode("", true),
                            vueExports.createVNode("p", { class: "text-small-medium md:text-medium-medium text-subsidiary line-through" }, vueExports.toDisplayString(_ctx.combo.price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)
                          ])) : (vueExports.openBlock(), vueExports.createBlock("p", {
                            key: 1,
                            class: "text-small-medium md:text-heavy-medium"
                          }, vueExports.toDisplayString(_ctx.combo.price) + " " + vueExports.toDisplayString(_ctx.combo.price_type), 1)),
                          vueExports.createVNode(_sfc_main$4, {
                            class: "mt-2",
                            quantity: "Много"
                          }),
                          vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-2" }, [
                            vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                              id: _ctx.combo.id,
                              "count-in-cart": _ctx.combo.count_in_cart,
                              "button-type": "full"
                            }, null, 8, ["id", "count-in-cart"])
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
                            ((_d = vueExports.unref(calculateData)) == null ? void 0 : _d.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("p", {
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
                          ((_e = vueExports.unref(calculateData)) == null ? void 0 : _e.delivery_detail.delivery_zone_time_min) && vueExports.unref(calculationModel).delivery_zone_id ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "border-t-filling mt-2 border-t py-2"
                          }, [
                            vueExports.createVNode("h5", { class: "text-small-medium mb-2" }, "Стоимость доставки"),
                            vueExports.createVNode("dl", { class: "grid grid-cols-2 items-center gap-2" }, [
                              vueExports.createVNode("dt", { class: "text-mob-small-reg" }, " Заказ от " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб. ", 1),
                              vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, "бесплатно"),
                              vueExports.createVNode("dt", { class: "text-mob-small-reg" }, " Заказ до " + vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_min_order_sum) + " руб. ", 1),
                              vueExports.createVNode("dd", { class: "text-mob-small-medium bg-filling w-fit justify-self-end rounded-lg px-2 py-0.5" }, vueExports.toDisplayString((_f = vueExports.unref(calculateData)) == null ? void 0 : _f.delivery_detail.delivery_price) + " руб. ", 1)
                            ])
                          ])) : vueExports.createCommentVNode("", true),
                          vueExports.createCommentVNode("", true),
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
              vueExports.createVNode(vueExports.unref(_sfc_main$2), null, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(_sfc_main$a))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/combo/combo-detail/ui/ComboDetailPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
