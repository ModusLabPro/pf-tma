import { v as vueExports, b as usePage, M as useOrderCalculate, c as useForm, s as serverRenderer_cjs_prodExports, e as _sfc_main$3, D as _sfc_main$4, aj as _sfc_main$5, K as _sfc_main$7, a as VButton, ai as _sfc_main$8 } from "../ssr.js";
import axios from "axios";
import { addDays, format } from "date-fns";
import { useToast } from "primevue";
import { z, ZodError } from "zod";
import { _ as _sfc_main$2, a as _sfc_main$6 } from "./DatePicker-CNY4OO13.js";
import { I as IconCheckCircleGreen } from "./IconCheckCircleGreen-DQz2sOR5.js";
import _sfc_main$1 from "./ChangeAddress-DfTSHQgZ.js";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "@vue/shared";
import "@vue/compiler-ssr";
import "node:stream";
import "@inertiajs/core";
import "lodash-es";
import "@inertiajs/core/server";
import "vue-i18n";
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
import "primevue/useconfirm";
import "@primevue/icons/angledown";
import "@primevue/icons/angleup";
import "primevue/inputnumber";
import "@primevue/icons/chevrondown";
import "@primevue/icons/search";
import "@primevue/icons/spinner";
import "primevue/select";
import "primevue/selectbutton";
import "./VFloatLabel-BX805IBj.js";
import "primevue/floatlabel";
import "./VFloatingInput-D87z21zB.js";
import "primevue/autocomplete";
import "@primevue/icons/calendar";
import "@primevue/icons/chevronup";
import "primevue/datepicker";
const _hoisted_1 = {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    vueExports.createStaticVNode('<g clip-path="url(#clip0_7105_138389)"><path d="M16.25 3.125H3.75C3.40482 3.125 3.125 3.40482 3.125 3.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V3.75C16.875 3.40482 16.5952 3.125 16.25 3.125Z" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.75 1.875V4.375" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.25 1.875V4.375" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.125 6.875H16.875" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 11.25C10.5178 11.25 10.9375 10.8303 10.9375 10.3125C10.9375 9.79473 10.5178 9.375 10 9.375C9.48223 9.375 9.0625 9.79473 9.0625 10.3125C9.0625 10.8303 9.48223 11.25 10 11.25Z" fill="#A39874"></path><path d="M13.4375 11.25C13.9553 11.25 14.375 10.8303 14.375 10.3125C14.375 9.79473 13.9553 9.375 13.4375 9.375C12.9197 9.375 12.5 9.79473 12.5 10.3125C12.5 10.8303 12.9197 11.25 13.4375 11.25Z" fill="#A39874"></path><path d="M6.5625 14.375C7.08027 14.375 7.5 13.9553 7.5 13.4375C7.5 12.9197 7.08027 12.5 6.5625 12.5C6.04473 12.5 5.625 12.9197 5.625 13.4375C5.625 13.9553 6.04473 14.375 6.5625 14.375Z" fill="#A39874"></path><path d="M10 14.375C10.5178 14.375 10.9375 13.9553 10.9375 13.4375C10.9375 12.9197 10.5178 12.5 10 12.5C9.48223 12.5 9.0625 12.9197 9.0625 13.4375C9.0625 13.9553 9.48223 14.375 10 14.375Z" fill="#A39874"></path><path d="M13.4375 14.375C13.9553 14.375 14.375 13.9553 14.375 13.4375C14.375 12.9197 13.9553 12.5 13.4375 12.5C12.9197 12.5 12.5 12.9197 12.5 13.4375C12.5 13.9553 12.9197 14.375 13.4375 14.375Z" fill="#A39874"></path></g><defs><clipPath id="clip0_7105_138389"><rect width="20" height="20" fill="white"></rect></clipPath></defs>', 2)
  ]));
}
const IconCalendar = { render };
const courierDeliveryFormSchema = z.object({
  city_id: z.number({
    required_error: "Обязательное поле"
  }),
  delivery_zone_id: z.number({
    required_error: "Обязательное поле"
  }),
  value_dadata: z.string({
    required_error: "Обязательное поле"
  })
});
const courierDeliveryFormSchemaWithoutZone = z.object({
  city_id: z.number({
    required_error: "Обязательное поле"
  }),
  value_dadata: z.string({
    required_error: "Обязательное поле"
  })
});
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "CourierDeliveryForm",
  __ssrInlineRender: true,
  props: {
    "deliveryDate": {
      default: /* @__PURE__ */ new Date()
    },
    "deliveryDateModifiers": {},
    "timeInterval": {},
    "timeIntervalModifiers": {},
    "addressId": {},
    "addressIdModifiers": {},
    "cityId": {},
    "cityIdModifiers": {}
  },
  emits: /* @__PURE__ */ vueExports.mergeModels(["address-applied", "reset-address", "deblock-address"], ["update:deliveryDate", "update:timeInterval", "update:addressId", "update:cityId"]),
  setup(__props, { emit: __emit }) {
    var _a, _b, _c, _d, _e, _f, _g;
    const page = usePage();
    const emit = __emit;
    const { add } = useToast();
    const deliveryDate = vueExports.useModel(__props, "deliveryDate");
    const timeInterval = vueExports.useModel(__props, "timeInterval");
    const addressId = vueExports.useModel(__props, "addressId");
    const cityId = vueExports.useModel(__props, "cityId");
    const isAddressApplied = vueExports.shallowRef(false);
    const popover = vueExports.useTemplateRef("popover");
    const { calculationModel, calculateOrder, calculateData } = useOrderCalculate();
    const togglePopover = (event) => {
      var _a2;
      (_a2 = popover.value) == null ? void 0 : _a2.toggle(event);
    };
    const isCalendarOpen = vueExports.shallowRef(false);
    const tempDate = vueExports.shallowRef(deliveryDate.value);
    const tempTimeInterval = vueExports.shallowRef();
    const onApplyDeliveryDate = (event) => {
      var _a2;
      (_a2 = popover.value) == null ? void 0 : _a2.toggle(event);
    };
    const addressModel = useForm({
      city_id: ((_a = route().queryParams) == null ? void 0 : _a.city_id) ? Number((_b = route().queryParams) == null ? void 0 : _b.city_id) : void 0,
      delivery_zone_id: ((_c = route().queryParams) == null ? void 0 : _c.delivery_zone_id) ? Number((_d = route().queryParams) == null ? void 0 : _d.delivery_zone_id) : void 0,
      city_dadata: "",
      postal_code: "",
      value_dadata: void 0,
      region: "",
      entrance: "",
      floor: "",
      apartment: "",
      dadata_json: void 0,
      street: "",
      house: ""
    });
    const selectedZone = vueExports.computed(() => {
      if (!addressModel.delivery_zone_id) return null;
      const selectedCity = page.props.cities.find((c) => c.id === addressModel.city_id);
      return (selectedCity == null ? void 0 : selectedCity.delivery_zones.find((zone) => zone.id === addressModel.delivery_zone_id)) || null;
    });
    const timeIntervals = vueExports.computed(() => {
      if (!selectedZone.value) return [];
      return selectedZone.value.time_intervals.map((i) => ({
        label: `С ${i.from} до ${i.to}`,
        value: {
          to: i.to,
          from: i.from
        }
      }));
    });
    const defaultCityId = vueExports.shallowRef(null);
    const validateErrors = vueExports.ref({});
    const setCity = (city) => {
      defaultCityId.value = city.id;
      addressModel.defaults({
        city_id: city.city_id,
        delivery_zone_id: city.delivery_zone_id,
        city_dadata: "",
        postal_code: city.postal_code,
        value_dadata: city.value_dadata,
        region: city.region,
        entrance: `${city.entrance ?? ""}`,
        floor: `${city.floor ?? ""}`,
        apartment: `${city.apartment ?? ""}`,
        street: city.street,
        house: `${city.house}`
      });
      addressModel.reset();
    };
    if (page.props.auth.user) {
      if ((_e = route().queryParams) == null ? void 0 : _e.address_id) {
        const selectedAddress = page.props.auth.user.addresses.find((address) => {
          var _a2;
          return address.id == ((_a2 = route().queryParams) == null ? void 0 : _a2.address_id);
        });
        if (selectedAddress) {
          setCity(selectedAddress);
        }
      } else if (!((_f = route().queryParams) == null ? void 0 : _f.city_id) || !((_g = route().queryParams) == null ? void 0 : _g.delivery_zone_id)) {
        const primaryCity = page.props.auth.user.addresses.find((address) => address.is_primary);
        if (primaryCity) {
          setCity(primaryCity);
        }
      }
    }
    const isLoading = vueExports.shallowRef(false);
    const isSelectedCityHasDeliveryZones = vueExports.computed(() => {
      const selectedCity = page.props.cities.find((address) => address.id === addressModel.city_id);
      return !!(selectedCity == null ? void 0 : selectedCity.delivery_zones.length);
    });
    const validationSchema = vueExports.computed(() => {
      if (!isSelectedCityHasDeliveryZones.value) {
        return courierDeliveryFormSchemaWithoutZone;
      }
      return courierDeliveryFormSchema;
    });
    const onApplyAddress = async (save) => {
      try {
        await validationSchema.value.parseAsync(addressModel);
        isLoading.value = true;
        if (!defaultCityId.value || addressModel.isDirty) {
          const res = await axios.post(route("store.api"), {
            address: {
              ...addressModel
            },
            save
          });
          addressId.value = res.data.data.address.id;
          isAddressApplied.value = true;
        } else {
          addressId.value = defaultCityId.value;
          isAddressApplied.value = true;
          await Promise.resolve();
        }
        deliveryDate.value = tempDate.value;
        timeInterval.value = tempTimeInterval.value;
        emit("address-applied", isAddressApplied.value, !isSelectedCityHasDeliveryZones.value);
      } catch (e) {
        if (e instanceof ZodError) {
          e.issues.forEach((issue) => {
            const path = issue.path.join(".");
            validateErrors.value[path] = issue.message;
          });
        }
        if (save) {
          throw e;
        }
      } finally {
        isLoading.value = false;
      }
    };
    const onSaveAddress = async () => {
      try {
        await onApplyAddress(true);
        add({
          detail: "Адрес сохранен в профиле",
          severity: "success",
          life: 3e3
        });
      } catch (error) {
        console.error(error);
      }
    };
    const onDeblockAddress = () => {
      setCity({
        id: addressId.value,
        city_id: addressModel.city_id,
        delivery_zone_id: addressModel.delivery_zone_id,
        postal_code: addressModel.postal_code ?? "",
        value_dadata: addressModel.value_dadata ?? "",
        region: addressModel.region ?? null,
        entrance: addressModel.entrance ?? null,
        floor: addressModel.floor ?? null,
        apartment: addressModel.apartment ?? null,
        street: addressModel.street ?? null,
        house: addressModel.house ?? null
      });
      isAddressApplied.value = false;
      emit("reset-address");
    };
    vueExports.watch(addressModel, () => {
      validateErrors.value = {};
    });
    vueExports.watch(
      () => addressModel.city_id,
      (newId) => {
        cityId.value = newId;
      },
      { immediate: true }
    );
    const minDeliveryDate = vueExports.computed(() => {
      var _a2;
      if (!((_a2 = calculateData.value) == null ? void 0 : _a2.delivery_detail.delivery_zone_time_min)) {
        return /* @__PURE__ */ new Date();
      }
      return addDays(/* @__PURE__ */ new Date(), calculateData.value.delivery_detail.delivery_zone_time_min);
    });
    vueExports.watchEffect(async () => {
      calculationModel.delivery_zone_id = addressModel.delivery_zone_id;
      await calculateOrder();
      if (tempDate.value < minDeliveryDate.value) {
        tempDate.value = minDeliveryDate.value;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "grid gap-4 sm:gap-6" }, _attrs))}><div class="${serverRenderer_cjs_prodExports.ssrRenderClass({ "rounded-20 bg-light-gray p-4": vueExports.unref(page).props.auth.user })}"><div class="mb-4 flex justify-between gap-2"><p class="text-mob-small-medium sm:text-small-medium">Адрес доставки</p>`);
      if (vueExports.unref(page).props.auth.user && vueExports.unref(page).props.auth.user.addresses && vueExports.unref(page).props.auth.user.addresses.length) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
          "selected-address-id": defaultCityId.value,
          disabled: isAddressApplied.value,
          onChangeAddress: setCity
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="text-subsidiary-reg text-additional mb-2">От адреса зависит ассортимент, цены и условия получения заказа</p>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
        apartment: vueExports.unref(addressModel).apartment,
        "onUpdate:apartment": ($event) => vueExports.unref(addressModel).apartment = $event,
        "city-id": vueExports.unref(addressModel).city_id,
        "onUpdate:cityId": ($event) => vueExports.unref(addressModel).city_id = $event,
        "delivery-zone-id": vueExports.unref(addressModel).delivery_zone_id,
        "onUpdate:deliveryZoneId": ($event) => vueExports.unref(addressModel).delivery_zone_id = $event,
        entrance: vueExports.unref(addressModel).entrance,
        "onUpdate:entrance": ($event) => vueExports.unref(addressModel).entrance = $event,
        "value-dadata": vueExports.unref(addressModel).value_dadata,
        "onUpdate:valueDadata": ($event) => vueExports.unref(addressModel).value_dadata = $event,
        floor: vueExports.unref(addressModel).floor,
        "onUpdate:floor": ($event) => vueExports.unref(addressModel).floor = $event,
        "postal-code": vueExports.unref(addressModel).postal_code,
        "onUpdate:postalCode": ($event) => vueExports.unref(addressModel).postal_code = $event,
        "city-dadata": vueExports.unref(addressModel).city_dadata,
        "onUpdate:cityDadata": ($event) => vueExports.unref(addressModel).city_dadata = $event,
        disabled: isAddressApplied.value,
        errors: validateErrors.value
      }, null, _parent));
      _push(`</div>`);
      if (isSelectedCityHasDeliveryZones.value) {
        _push(`<div class="mt-4 grid gap-2 sm:mt-2 sm:grid-cols-2">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), null, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass([[isCalendarOpen.value ? "border-primary bg-white" : "bg-input border-input"], "rounded-20 flex items-center justify-between gap-2 border border-solid py-[6px] pr-[6px] pl-[15px] transition-colors"])}"${_scopeId}><div class="h flex items-center gap-2"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCalendar), { class: "shrink-0" }, null, _parent2, _scopeId));
              _push2(`<span class="text-mob-small-reg max-w-full sm:max-w-full"${_scopeId}>Дата доставки ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(format)(tempDate.value, "dd.MM.yyyy"))}</span></div>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                outlined: !isCalendarOpen.value,
                label: "Изменить дату",
                rounded: "",
                size: "small",
                disabled: isAddressApplied.value,
                class: "shrink-0",
                onClick: togglePopover
              }, null, _parent2, _scopeId));
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, {
                ref_key: "popover",
                ref: popover,
                "append-to": "self",
                class: "delivery-calendar",
                onShow: ($event) => isCalendarOpen.value = true,
                onHide: ($event) => isCalendarOpen.value = false
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, {
                      modelValue: tempDate.value,
                      "onUpdate:modelValue": ($event) => tempDate.value = $event,
                      inline: "",
                      "min-date": minDeliveryDate.value,
                      disabled: isAddressApplied.value
                    }, {
                      footer: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="mt-4 flex justify-end"${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                            size: "small",
                            label: "Применить",
                            rounded: "",
                            "ml-auto": "",
                            onClick: onApplyDeliveryDate
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            vueExports.createVNode("div", { class: "mt-4 flex justify-end" }, [
                              vueExports.createVNode(_sfc_main$4, {
                                size: "small",
                                label: "Применить",
                                rounded: "",
                                "ml-auto": "",
                                onClick: onApplyDeliveryDate
                              })
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(_sfc_main$6, {
                        modelValue: tempDate.value,
                        "onUpdate:modelValue": ($event) => tempDate.value = $event,
                        inline: "",
                        "min-date": minDeliveryDate.value,
                        disabled: isAddressApplied.value
                      }, {
                        footer: vueExports.withCtx(() => [
                          vueExports.createVNode("div", { class: "mt-4 flex justify-end" }, [
                            vueExports.createVNode(_sfc_main$4, {
                              size: "small",
                              label: "Применить",
                              rounded: "",
                              "ml-auto": "",
                              onClick: onApplyDeliveryDate
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "min-date", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                vueExports.createVNode("div", {
                  class: ["rounded-20 flex items-center justify-between gap-2 border border-solid py-[6px] pr-[6px] pl-[15px] transition-colors", [isCalendarOpen.value ? "border-primary bg-white" : "bg-input border-input"]]
                }, [
                  vueExports.createVNode("div", { class: "h flex items-center gap-2" }, [
                    vueExports.createVNode(vueExports.unref(IconCalendar), { class: "shrink-0" }),
                    vueExports.createVNode("span", { class: "text-mob-small-reg max-w-full sm:max-w-full" }, "Дата доставки " + vueExports.toDisplayString(vueExports.unref(format)(tempDate.value, "dd.MM.yyyy")), 1)
                  ]),
                  vueExports.createVNode(_sfc_main$4, {
                    outlined: !isCalendarOpen.value,
                    label: "Изменить дату",
                    rounded: "",
                    size: "small",
                    disabled: isAddressApplied.value,
                    class: "shrink-0",
                    onClick: togglePopover
                  }, null, 8, ["outlined", "disabled"]),
                  vueExports.createVNode(_sfc_main$5, {
                    ref_key: "popover",
                    ref: popover,
                    "append-to": "self",
                    class: "delivery-calendar",
                    onShow: ($event) => isCalendarOpen.value = true,
                    onHide: ($event) => isCalendarOpen.value = false
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_sfc_main$6, {
                        modelValue: tempDate.value,
                        "onUpdate:modelValue": ($event) => tempDate.value = $event,
                        inline: "",
                        "min-date": minDeliveryDate.value,
                        disabled: isAddressApplied.value
                      }, {
                        footer: vueExports.withCtx(() => [
                          vueExports.createVNode("div", { class: "mt-4 flex justify-end" }, [
                            vueExports.createVNode(_sfc_main$4, {
                              size: "small",
                              label: "Применить",
                              rounded: "",
                              "ml-auto": "",
                              onClick: onApplyDeliveryDate
                            })
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "min-date", "disabled"])
                    ]),
                    _: 1
                  }, 8, ["onShow", "onHide"])
                ], 2)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), null, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
                modelValue: tempTimeInterval.value,
                "onUpdate:modelValue": ($event) => tempTimeInterval.value = $event,
                options: timeIntervals.value,
                disabled: isAddressApplied.value,
                size: "large",
                placeholder: "Выберите временной интервал доставки",
                "option-label": "label",
                "option-value": "value",
                "label-class": "w-[1px]",
                "empty-message": !vueExports.unref(addressModel).delivery_zone_id ? "Выберите зону доставки" : "Нет доступных вариантов"
              }, null, _parent2, _scopeId));
            } else {
              return [
                vueExports.createVNode(_sfc_main$7, {
                  modelValue: tempTimeInterval.value,
                  "onUpdate:modelValue": ($event) => tempTimeInterval.value = $event,
                  options: timeIntervals.value,
                  disabled: isAddressApplied.value,
                  size: "large",
                  placeholder: "Выберите временной интервал доставки",
                  "option-label": "label",
                  "option-value": "value",
                  "label-class": "w-[1px]",
                  "empty-message": !vueExports.unref(addressModel).delivery_zone_id ? "Выберите зону доставки" : "Нет доступных вариантов"
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "disabled", "empty-message"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex gap-2">`);
      if (!isAddressApplied.value) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
          type: "button",
          label: "Подтвердить выбор",
          disabled: isLoading.value,
          class: "w-fit",
          onClick: () => onApplyAddress()
        }, null, _parent));
      } else {
        _push(`<div class="bg-filling text-mob-small-reg flex w-fit items-center gap-2 rounded-[50px] px-6 py-[14px] select-none">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCheckCircleGreen), null, null, _parent));
        _push(` Выбор подтвержден </div>`);
      }
      if (isAddressApplied.value) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$8, {
          label: "Редактировать",
          rounded: "",
          onClick: onDeblockAddress
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (vueExports.unref(page).props.auth.user && vueExports.unref(addressModel).isDirty && !isAddressApplied.value) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$8, {
          label: "Сохранить адрес",
          rounded: "",
          onClick: onSaveAddress
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/making-order/ui/CourierDeliveryForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
