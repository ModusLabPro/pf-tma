import { v as vueExports, s as serverRenderer_cjs_prodExports, $ as ptViewMerge, b as usePage, u as useScreenSize, e as _sfc_main$3, a8 as IconArrowDown, aj as _sfc_main$4, L as _sfc_main$5, ai as _sfc_main$7, m as IconCaretRight, I as IconCaretLeft } from "../ssr.js";
import { useFetch } from "@vueuse/core";
import { V as VFloatLabel } from "./VFloatLabel-BX805IBj.js";
import { _ as _sfc_main$6 } from "./VFloatingInput-D87z21zB.js";
import ChevronDownIcon from "@primevue/icons/chevrondown";
import AutoComplete from "primevue/autocomplete";
import CalendarIcon from "@primevue/icons/calendar";
import ChevronUpIcon from "@primevue/icons/chevronup";
import DatePicker from "primevue/datepicker";
const _sfc_main$2 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "AutoComplete",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = vueExports.ref({
      root: `inline-flex p-fluid:flex`,
      pcInputText: {
        root: (options) => {
          return {
            class: [
              `p-inputtext appearance-none rounded-[20px] outline-hidden
        bg-[#F3F5F7] dark:bg-surface-950
        p-filled:bg-surface-50 dark:p-filled:bg-surface-800
        text-mob-small-reg dark:text-surface-0
        placeholder:text-additional dark:placeholder:text-surface-400
        border border-[#F3F5F7] dark:border-surface-700
        enabled:hover:border-surface-400 dark:enabled:hover:border-surface-600
        enabled:focus:border-primary enabled:focus:bg-white
        disabled:bg-[#F3F5F7] disabled:border-[#F3F5F7] disabled:cursor-not-allowed
        dark:disabled:bg-surface-700 dark:disabled:text-surface-400
        p-invalid:border-marker/10 dark:p-invalid:border-red-300 p-invalid:bg-marker/10
        p-invalid:placeholder:text-red-600 dark:p-invalid:placeholder:text-red-400
        p-[15px] p-fluid:w-full
        p-small:text-sm p-small:px-[0.625rem] p-small:py-[0.375rem]
        p-large:text-mob-small-reg p-large:px-[0.875rem] p-large:py-[0.625rem]
        transition-colors duration-200 shadow-[0_1px_2px_0_rgba(18,18,23,0.05)]`,
              {
                "border-text p-invalid:border-marker bg-transparent p-filled": options.context.filled
              }
            ]
          };
        }
      },
      inputMultiple: `m-0 list-none cursor-text overflow-hidden flex items-center flex-wrap
        px-3 py-1 not-p-empty:px-1 gap-1 text-surface-700 dark:text-surface-0 bg-surface-0 dark:bg-surface-950
        border border-surface-300 dark:border-surface-700 rounded-md p-has-dropdown:rounded-e-none w-full
        hover:border-surface-400 dark:hover:border-surface-600 p-focus:border-primary
        p-invalid:border-red-400 dark:p-invalid:border-red-300
        p-filled:bg-surface-50 dark:p-filled:bg-surface-800
        p-disabled:pointer-events-none p-disabled:bg-surface-200 p-disabled:text-surface-500 dark:p-disabled:bg-surface-700 dark:p-disabled:text-surface-400
        shadow-[0_1px_2px_0_rgba(18,18,23,0.05)]
        transition-colors duration-200 outline-none`,
      chipItem: ``,
      pcChip: {
        root: `inline-flex items-center rounded-sm gap-2 px-3 py-1
            bg-surface-100 dark:bg-surface-800
            text-surface-800 dark:text-surface-0
            has-[img]:pt-1 has-[img]:pb-1
            p-focus:bg-surface-200 p-focus:text-surface-800 dark:p-focus:bg-surface-700 dark:p-focus:text-surface-0
            p-removable:pe-2`,
        image: `rounded-full w-8 h-8 -ms-2`,
        icon: `text-surface-800 dark:bg-surface-0 text-base w-4 h-4`,
        label: ``,
        removeIcon: `cursor-pointer text-base w-4 h-4 rounded-full
            text-surface-800 dark:text-surface-0
            focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary`
      },
      chipIcon: ``,
      inputChip: `flex-auto inline-flex py-1 max-w-30`,
      input: `border-none outline-none bg-transparent m-0 p-0 shadow-none rounded-none w-full text-inherit
        placeholder:text-surface-500 dark:placeholder:text-surface-400`,
      loader: `absolute top-1/2 -mt-2 end-3 p-has-dropdown:end-[3.25rem]`,
      dropdown: `cursor-pointer inline-flex items-center justify-center select-none overflow-hidden relative w-10 shrink-0 rounded-e-md
        border border-s-0 border-surface-300 dark:border-surface-700
        bg-surface-100 enabled:hover:bg-surface-200 enabled:active:bg-surface-300
        text-surface-600 enabled:hover:text-surface-700 enabled:hover:active:text-surface-800
        dark:bg-surface-800 dark:enabled:hover:bg-surface-700 dark:enabled:active:bg-surface-600
        dark:text-surface-300 dark:enabled:hover:text-surface-200 dark:enabled:active:text-surface-100
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary
        transition-colors duration-200`,
      dropdownIcon: ``,
      overlay: `p-portal-self:min-w-full absolute top-0 left-0 rounded-md
        bg-surface-0 dark:bg-surface-900
        border border-surface-200 dark:border-surface-700
        text-surface-700 dark:text-surface-0
        shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]`,
      virtualScroller: ``,
      listContainer: `overflow-auto`,
      list: `m-0 p-1 list-none flex flex-col gap-[2px]`,
      optionGroup: `m-0 px-3 py-2 text-surface-500 dark:text-surface-400 font-semibold bg-transparent`,
      option: `cursor-pointer whitespace-nowrap relative overflow-hidden flex items-center px-3 py-2 rounded-sm
        text-surface-700 dark:text-surface-0 bg-transparent border-none
        p-focus:bg-surface-100 dark:p-focus:bg-surface-800 p-focus:text-surface-800 dark:p-focus:text-surface-0
        p-selected:bg-highlight p-focus:p-selected:bg-highlight-emphasis
        transition-colors duration-200`,
      emptyMessage: `px-3 py-2`,
      searchResultMessage: ``,
      selectedMessage: ``,
      transition: {
        enterFromClass: "opacity-0 scale-y-75",
        enterActiveClass: "transition duration-120 ease-[cubic-bezier(0,0,0.2,1)]",
        leaveActiveClass: "transition-opacity duration-100 ease-linear",
        leaveToClass: "opacity-0"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(AutoComplete), vueExports.mergeProps({
        unstyled: "",
        pt: theme.value,
        ptOptions: {
          mergeProps: vueExports.unref(ptViewMerge)
        }
      }, _attrs), vueExports.createSlots({
        dropdownicon: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ChevronDownIcon), null, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(ChevronDownIcon))
            ];
          }
        }),
        _: 2
      }, [
        vueExports.renderList(_ctx.$slots, (_, slotName) => {
          return {
            name: slotName,
            fn: vueExports.withCtx((slotProps, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, slotName, slotProps ?? {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vueExports.renderSlot(_ctx.$slots, slotName, slotProps ?? {})
                ];
              }
            })
          };
        })
      ]), _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/volt/AutoComplete.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "AddressFields",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    errors: {},
    index: {},
    validateField: { type: Function },
    disabled: { type: Boolean }
  }, {
    "cityId": {},
    "cityIdModifiers": {},
    "deliveryZoneId": {},
    "deliveryZoneIdModifiers": {},
    "valueDadata": {},
    "valueDadataModifiers": {},
    "postalCode": {},
    "postalCodeModifiers": {},
    "entrance": {},
    "entranceModifiers": {},
    "floor": {},
    "floorModifiers": {},
    "apartment": {},
    "apartmentModifiers": {},
    "progress": {
      default: () => ({ filled: 0, total: 7 })
    },
    "progressModifiers": {}
  }),
  emits: ["update:cityId", "update:deliveryZoneId", "update:valueDadata", "update:postalCode", "update:entrance", "update:floor", "update:apartment", "update:progress"],
  setup(__props) {
    const page = usePage();
    const props = __props;
    const getError = (field) => {
      if (!props.errors) return void 0;
      if (props.index !== void 0) {
        const nestedKey = `addresses.${props.index}.${field}`;
        if (nestedKey in props.errors) {
          return props.errors[nestedKey];
        }
      }
      return props.errors[field] ?? void 0;
    };
    const cityId = vueExports.useModel(__props, "cityId");
    const deliveryZoneId = vueExports.useModel(__props, "deliveryZoneId");
    const valueDadata = vueExports.useModel(__props, "valueDadata");
    const postalCode = vueExports.useModel(__props, "postalCode");
    const entrance = vueExports.useModel(__props, "entrance");
    const floor = vueExports.useModel(__props, "floor");
    const apartment = vueExports.useModel(__props, "apartment");
    const progress = vueExports.useModel(__props, "progress");
    const filledFields = vueExports.computed(() => {
      var _a, _b, _c, _d, _e;
      let count = 0;
      if (cityId.value) count++;
      if ((_a = valueDadata.value) == null ? void 0 : _a.trim()) count++;
      if ((_b = postalCode.value) == null ? void 0 : _b.trim()) count++;
      if (deliveryZoneId.value !== null && deliveryZoneId.value !== void 0) count++;
      if ((_c = entrance.value) == null ? void 0 : _c.trim()) count++;
      if ((_d = floor.value) == null ? void 0 : _d.trim()) count++;
      if ((_e = apartment.value) == null ? void 0 : _e.trim()) count++;
      return count;
    });
    vueExports.watch(
      filledFields,
      (newFilled) => {
        progress.value = { ...progress.value, filled: newFilled };
      },
      { immediate: true }
    );
    const cityPopover = vueExports.ref();
    const zonePopover = vueExports.ref();
    const isCitySelectOpen = vueExports.ref(false);
    const isZoneSelectOpen = vueExports.ref(false);
    const selectedCityName = vueExports.computed(() => {
      var _a;
      return ((_a = page.props.cities.find((city) => city.id === cityId.value)) == null ? void 0 : _a.name) || "";
    });
    const selectedZone = vueExports.computed(() => {
      const city = page.props.cities.find((city2) => city2.id === cityId.value);
      return (city == null ? void 0 : city.delivery_zones.find((zone) => zone.id === Number(deliveryZoneId.value))) || null;
    });
    const availableZones = vueExports.computed(() => {
      var _a;
      return ((_a = page.props.cities.find((city) => city.id === cityId.value)) == null ? void 0 : _a.delivery_zones.map((zone) => ({
        ...zone,
        name: [zone.name, zone.description].filter((el) => Boolean(el)).join(", ")
      }))) || "";
    });
    const toggleCitySelect = (event, city) => {
      var _a, _b;
      (_a = cityPopover.value) == null ? void 0 : _a.toggle(event);
      (_b = props.validateField) == null ? void 0 : _b.call(props, `addresses.${props.index}.city_id`);
      if ((city == null ? void 0 : city.name) !== "Другой город") valueDadata.value = city == null ? void 0 : city.name;
    };
    const hasZones = vueExports.computed(() => {
      var _a;
      const city = page.props.cities.find((c) => c.id === cityId.value);
      return !!((_a = city == null ? void 0 : city.delivery_zones) == null ? void 0 : _a.length);
    });
    const toggleZoneSelect = (event) => {
      var _a, _b;
      (_a = zonePopover.value) == null ? void 0 : _a.toggle(event);
      (_b = props.validateField) == null ? void 0 : _b.call(props, `addresses.${props.index}.delivery_zone_id`);
    };
    const { isDesktop } = useScreenSize();
    const dadataQuery = vueExports.computed(() => {
      return {
        query: valueDadata.value,
        // locations: selectedCityName.value
        //   ? selectedCityName.value === 'Москва' || selectedCityName.value === 'Санкт-Петербург'
        //     ? [{ region: selectedCityName.value }]
        //     : selectedCityName.value === 'Другой город'
        //       ? undefined
        //       : [{ city: selectedCityName.value }]
        //   : undefined,
        from_bound: { value: selectedCityName.value ? "street" : "city" },
        to_bound: { value: "house" },
        restrict_value: true
      };
    });
    const { data, execute } = useFetch(
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
      {
        headers: {
          Authorization: `Token ${""}`
        }
      },
      {
        immediate: false,
        afterFetch(ctx) {
          ctx.data.suggestions = ctx.data.suggestions.map((el) => el.value);
          return ctx;
        }
      }
    ).post(dadataQuery).json();
    const inputId = vueExports.useId();
    const zonePrefix = vueExports.useId();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}><div><div class="grid gap-2 lg:grid-cols-[1.5fr_2fr_1fr]"><div class="w-full">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
        error: getError("city_id")
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button"${serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(_ctx.disabled) ? " disabled" : ""} class="${serverRenderer_cjs_prodExports.ssrRenderClass([{
              "!border-text border bg-transparent": !!selectedCityName.value || isCitySelectOpen.value,
              "!border-[#ED1C241A] !bg-[#ED1C241A]": !!getError("city_id")
            }, "bg-input rounded-20 flex w-full cursor-pointer items-center justify-between border border-transparent px-[15px] py-[13px] shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] transition-all duration-200 ease-in disabled:cursor-not-allowed disabled:!border-[#F3F5F7] disabled:bg-[#F3F5F7]"])}"${_scopeId}><span class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ "text-text": !!selectedCityName.value || isCitySelectOpen.value }, "text-additional transition-colors duration-200 ease-in"])}"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(selectedCityName.value || "Город")} <span class="text-red-500"${_scopeId}>*</span></span>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowDown), {
              class: ["text-default transition-transform duration-200 ease-in", { "rotate-180": isCitySelectOpen.value }]
            }, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              vueExports.createVNode("button", {
                class: ["bg-input rounded-20 flex w-full cursor-pointer items-center justify-between border border-transparent px-[15px] py-[13px] shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] transition-all duration-200 ease-in disabled:cursor-not-allowed disabled:!border-[#F3F5F7] disabled:bg-[#F3F5F7]", {
                  "!border-text border bg-transparent": !!selectedCityName.value || isCitySelectOpen.value,
                  "!border-[#ED1C241A] !bg-[#ED1C241A]": !!getError("city_id")
                }],
                type: "button",
                disabled: _ctx.disabled,
                onClick: vueExports.withModifiers(toggleCitySelect, ["stop"])
              }, [
                vueExports.createVNode("span", {
                  class: ["text-additional transition-colors duration-200 ease-in", { "text-text": !!selectedCityName.value || isCitySelectOpen.value }]
                }, [
                  vueExports.createTextVNode(vueExports.toDisplayString(selectedCityName.value || "Город") + " ", 1),
                  vueExports.createVNode("span", { class: "text-red-500" }, "*")
                ], 2),
                vueExports.createVNode(vueExports.unref(IconArrowDown), {
                  class: ["text-default transition-transform duration-200 ease-in", { "rotate-180": isCitySelectOpen.value }]
                }, null, 8, ["class"])
              ], 10, ["disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
        ref_key: "cityPopover",
        ref: cityPopover,
        "append-to": "self",
        class: "lg:min-w-[350px]",
        onShow: ($event) => isCitySelectOpen.value = true,
        onHide: ($event) => isCitySelectOpen.value = false
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-small-regular flex min-w-[260px] flex-col"${_scopeId}><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(page).props.cities, (city) => {
              _push2(`<div class="hover:bg-input flex w-full cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors duration-200 ease-in"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, {
                modelValue: cityId.value,
                "onUpdate:modelValue": ($event) => cityId.value = $event,
                "input-id": String(city.id),
                name: String(city.id),
                value: city.id,
                onChange: ($event) => toggleCitySelect($event, city)
              }, null, _parent2, _scopeId));
              _push2(`<label class="w-full cursor-pointer"${serverRenderer_cjs_prodExports.ssrRenderAttr("for", String(city.id))}${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(city.name)}</label></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "text-small-regular flex min-w-[260px] flex-col" }, [
                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(page).props.cities, (city) => {
                  return vueExports.openBlock(), vueExports.createBlock("div", {
                    key: city.id,
                    class: "hover:bg-input flex w-full cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors duration-200 ease-in"
                  }, [
                    vueExports.createVNode(_sfc_main$5, {
                      modelValue: cityId.value,
                      "onUpdate:modelValue": ($event) => cityId.value = $event,
                      "input-id": String(city.id),
                      name: String(city.id),
                      value: city.id,
                      onChange: ($event) => toggleCitySelect($event, city)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value", "onChange"]),
                    vueExports.createVNode("label", {
                      class: "w-full cursor-pointer",
                      for: String(city.id)
                    }, vueExports.toDisplayString(city.name), 9, ["for"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (!vueExports.unref(isDesktop)) {
        _push(`<div class="w-full">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
          error: hasZones.value ? getError("delivery_zone_id") : ""
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d, _e, _f;
            if (_push2) {
              _push2(`<button type="button"${serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(!hasZones.value || _ctx.disabled) ? " disabled" : ""} class="${serverRenderer_cjs_prodExports.ssrRenderClass([{
                "!border-text border bg-transparent": !!((_a = selectedZone.value) == null ? void 0 : _a.id) || isZoneSelectOpen.value,
                "!border-[#ED1C241A] !bg-[#ED1C241A]": !!getError("delivery_zone_id") && hasZones.value
              }, "bg-input rounded-20 flex w-full cursor-pointer items-center justify-between border border-transparent px-[15px] py-[13px] shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] transition-all duration-200 ease-in disabled:cursor-not-allowed disabled:bg-gray-200 lg:min-w-[352px]"])}"${_scopeId}><span class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ "text-text": !!((_b = selectedZone.value) == null ? void 0 : _b.id) || isZoneSelectOpen.value }, "text-additional transition-colors duration-200 ease-in"])}"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(((_c = selectedZone.value) == null ? void 0 : _c.name) || "Выберите зону доставки")} `);
              if (hasZones.value) {
                _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowDown), {
                class: ["text-default transition-transform duration-200 ease-in", { "rotate-180": isZoneSelectOpen.value }]
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              return [
                vueExports.createVNode("button", {
                  class: ["bg-input rounded-20 flex w-full cursor-pointer items-center justify-between border border-transparent px-[15px] py-[13px] shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] transition-all duration-200 ease-in disabled:cursor-not-allowed disabled:bg-gray-200 lg:min-w-[352px]", {
                    "!border-text border bg-transparent": !!((_d = selectedZone.value) == null ? void 0 : _d.id) || isZoneSelectOpen.value,
                    "!border-[#ED1C241A] !bg-[#ED1C241A]": !!getError("delivery_zone_id") && hasZones.value
                  }],
                  type: "button",
                  disabled: !hasZones.value || _ctx.disabled,
                  onClick: vueExports.withModifiers(toggleZoneSelect, ["stop"])
                }, [
                  vueExports.createVNode("span", {
                    class: ["text-additional transition-colors duration-200 ease-in", { "text-text": !!((_e = selectedZone.value) == null ? void 0 : _e.id) || isZoneSelectOpen.value }]
                  }, [
                    vueExports.createTextVNode(vueExports.toDisplayString(((_f = selectedZone.value) == null ? void 0 : _f.name) || "Выберите зону доставки") + " ", 1),
                    hasZones.value ? (vueExports.openBlock(), vueExports.createBlock("span", {
                      key: 0,
                      class: "text-red-500"
                    }, "*")) : vueExports.createCommentVNode("", true)
                  ], 2),
                  vueExports.createVNode(vueExports.unref(IconArrowDown), {
                    class: ["text-default transition-transform duration-200 ease-in", { "rotate-180": isZoneSelectOpen.value }]
                  }, null, 8, ["class"])
                ], 10, ["disabled"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
          ref_key: "zonePopover",
          ref: zonePopover,
          class: "lg:min-w-[350px]",
          onShow: ($event) => isZoneSelectOpen.value = true,
          onHide: ($event) => isZoneSelectOpen.value = false
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (availableZones.value) {
                _push2(`<div class="text-small-regular flex min-w-[260px] flex-col"${_scopeId}><!--[-->`);
                serverRenderer_cjs_prodExports.ssrRenderList(availableZones.value, (zone) => {
                  _push2(`<div class="hover:bg-input flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors duration-200 ease-in"${_scopeId}>`);
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, {
                    modelValue: deliveryZoneId.value,
                    "onUpdate:modelValue": ($event) => deliveryZoneId.value = $event,
                    "input-id": String(vueExports.unref(zonePrefix) + zone.id),
                    name: String(vueExports.unref(zonePrefix) + zone.id),
                    value: zone.id,
                    onChange: toggleZoneSelect
                  }, null, _parent2, _scopeId));
                  _push2(`<label class="w-full cursor-pointer"${serverRenderer_cjs_prodExports.ssrRenderAttr("for", String(vueExports.unref(zonePrefix) + zone.id))}${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(zone.name)}</label></div>`);
                });
                _push2(`<!--]--></div>`);
              } else if (selectedCityName.value === "Другой город") {
                _push2(`<span${_scopeId}>Для этого города нет зоны доставки</span>`);
              } else {
                _push2(`<span${_scopeId}>Сначала выберите город</span>`);
              }
            } else {
              return [
                availableZones.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                  key: 0,
                  class: "text-small-regular flex min-w-[260px] flex-col"
                }, [
                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(availableZones.value, (zone) => {
                    return vueExports.openBlock(), vueExports.createBlock("div", {
                      key: zone.id,
                      class: "hover:bg-input flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors duration-200 ease-in"
                    }, [
                      vueExports.createVNode(_sfc_main$5, {
                        modelValue: deliveryZoneId.value,
                        "onUpdate:modelValue": ($event) => deliveryZoneId.value = $event,
                        "input-id": String(vueExports.unref(zonePrefix) + zone.id),
                        name: String(vueExports.unref(zonePrefix) + zone.id),
                        value: zone.id,
                        onChange: toggleZoneSelect
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                      vueExports.createVNode("label", {
                        class: "w-full cursor-pointer",
                        for: String(vueExports.unref(zonePrefix) + zone.id)
                      }, vueExports.toDisplayString(zone.name), 9, ["for"])
                    ]);
                  }), 128))
                ])) : selectedCityName.value === "Другой город" ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 1 }, "Для этого города нет зоны доставки")) : (vueExports.openBlock(), vueExports.createBlock("span", { key: 2 }, "Сначала выберите город"))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
        error: getError("value_dadata")
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VFloatLabel), {
              label: selectedCityName.value === "Другой город" ? "Город, улица, номер дома" : "Улица, номер дома",
              required: ""
            }, {
              default: vueExports.withCtx(({ labelId }, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
                    modelValue: valueDadata.value,
                    "onUpdate:modelValue": ($event) => valueDadata.value = $event,
                    fluid: "",
                    "input-id": labelId,
                    disabled: _ctx.disabled,
                    suggestions: ((_a = vueExports.unref(data)) == null ? void 0 : _a.suggestions) ?? [],
                    invalid: !!getError("value_dadata"),
                    onComplete: () => vueExports.unref(execute)(),
                    onBlur: ($event) => {
                      var _a2;
                      return (_a2 = props.validateField) == null ? void 0 : _a2.call(props, `addresses.${props.index}.value_dadata`);
                    }
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_sfc_main$2, {
                      modelValue: valueDadata.value,
                      "onUpdate:modelValue": ($event) => valueDadata.value = $event,
                      fluid: "",
                      "input-id": labelId,
                      disabled: _ctx.disabled,
                      suggestions: ((_b = vueExports.unref(data)) == null ? void 0 : _b.suggestions) ?? [],
                      invalid: !!getError("value_dadata"),
                      onComplete: () => vueExports.unref(execute)(),
                      onBlur: ($event) => {
                        var _a2;
                        return (_a2 = props.validateField) == null ? void 0 : _a2.call(props, `addresses.${props.index}.value_dadata`);
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "disabled", "suggestions", "invalid", "onComplete", "onBlur"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(VFloatLabel), {
                label: selectedCityName.value === "Другой город" ? "Город, улица, номер дома" : "Улица, номер дома",
                required: ""
              }, {
                default: vueExports.withCtx(({ labelId }) => {
                  var _a;
                  return [
                    vueExports.createVNode(_sfc_main$2, {
                      modelValue: valueDadata.value,
                      "onUpdate:modelValue": ($event) => valueDadata.value = $event,
                      fluid: "",
                      "input-id": labelId,
                      disabled: _ctx.disabled,
                      suggestions: ((_a = vueExports.unref(data)) == null ? void 0 : _a.suggestions) ?? [],
                      invalid: !!getError("value_dadata"),
                      onComplete: () => vueExports.unref(execute)(),
                      onBlur: ($event) => {
                        var _a2;
                        return (_a2 = props.validateField) == null ? void 0 : _a2.call(props, `addresses.${props.index}.value_dadata`);
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "disabled", "suggestions", "invalid", "onComplete", "onBlur"])
                  ];
                }),
                _: 1
              }, 8, ["label"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (vueExports.unref(isDesktop)) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
          modelValue: postalCode.value,
          "onUpdate:modelValue": ($event) => postalCode.value = $event,
          class: "w-full",
          name: vueExports.unref(inputId),
          label: "Индекс",
          clearable: "",
          disabled: _ctx.disabled
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (vueExports.unref(isDesktop)) {
        _push(`<div class="mt-2 grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-2"><div class="w-full">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
          error: hasZones.value ? getError("delivery_zone_id") : ""
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d, _e, _f;
            if (_push2) {
              _push2(`<button type="button"${serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(!hasZones.value || _ctx.disabled) ? " disabled" : ""} class="${serverRenderer_cjs_prodExports.ssrRenderClass([{
                "!border-text border bg-transparent": !!((_a = selectedZone.value) == null ? void 0 : _a.id) || isZoneSelectOpen.value,
                "!border-[#ED1C241A] !bg-[#ED1C241A]": !!getError("delivery_zone_id") && hasZones.value
              }, "bg-input rounded-20 flex w-full cursor-pointer items-center justify-between border border-transparent px-[15px] py-[13px] shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] transition-all duration-200 ease-in disabled:cursor-not-allowed disabled:!border-[#F3F5F7] disabled:bg-[#F3F5F7] lg:min-w-[352px]"])}"${_scopeId}><span class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ "text-text": !!((_b = selectedZone.value) == null ? void 0 : _b.id) || isZoneSelectOpen.value }, "text-additional max-w-[280px] truncate transition-colors duration-200 ease-in"])}"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(((_c = selectedZone.value) == null ? void 0 : _c.name) || "Выберите зону доставки")} `);
              if (hasZones.value) {
                _push2(`<span class="text-red-500"${_scopeId}>*</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</span>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowDown), {
                class: ["text-default transition-transform duration-200 ease-in", { "rotate-180": isZoneSelectOpen.value }]
              }, null, _parent2, _scopeId));
              _push2(`</button>`);
            } else {
              return [
                vueExports.createVNode("button", {
                  class: ["bg-input rounded-20 flex w-full cursor-pointer items-center justify-between border border-transparent px-[15px] py-[13px] shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] transition-all duration-200 ease-in disabled:cursor-not-allowed disabled:!border-[#F3F5F7] disabled:bg-[#F3F5F7] lg:min-w-[352px]", {
                    "!border-text border bg-transparent": !!((_d = selectedZone.value) == null ? void 0 : _d.id) || isZoneSelectOpen.value,
                    "!border-[#ED1C241A] !bg-[#ED1C241A]": !!getError("delivery_zone_id") && hasZones.value
                  }],
                  type: "button",
                  disabled: !hasZones.value || _ctx.disabled,
                  onClick: vueExports.withModifiers(toggleZoneSelect, ["stop"])
                }, [
                  vueExports.createVNode("span", {
                    class: ["text-additional max-w-[280px] truncate transition-colors duration-200 ease-in", { "text-text": !!((_e = selectedZone.value) == null ? void 0 : _e.id) || isZoneSelectOpen.value }]
                  }, [
                    vueExports.createTextVNode(vueExports.toDisplayString(((_f = selectedZone.value) == null ? void 0 : _f.name) || "Выберите зону доставки") + " ", 1),
                    hasZones.value ? (vueExports.openBlock(), vueExports.createBlock("span", {
                      key: 0,
                      class: "text-red-500"
                    }, "*")) : vueExports.createCommentVNode("", true)
                  ], 2),
                  vueExports.createVNode(vueExports.unref(IconArrowDown), {
                    class: ["text-default transition-transform duration-200 ease-in", { "rotate-180": isZoneSelectOpen.value }]
                  }, null, 8, ["class"])
                ], 10, ["disabled"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
          ref_key: "zonePopover",
          ref: zonePopover,
          class: "lg:min-w-[350px]",
          onShow: ($event) => isZoneSelectOpen.value = true,
          onHide: ($event) => isZoneSelectOpen.value = false
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (availableZones.value) {
                _push2(`<div class="text-small-regular flex min-w-[260px] flex-col"${_scopeId}><!--[-->`);
                serverRenderer_cjs_prodExports.ssrRenderList(availableZones.value, (zone) => {
                  _push2(`<div class="hover:bg-input flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors duration-200 ease-in"${_scopeId}>`);
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, {
                    modelValue: deliveryZoneId.value,
                    "onUpdate:modelValue": ($event) => deliveryZoneId.value = $event,
                    "input-id": String(vueExports.unref(zonePrefix) + zone.id),
                    name: String(vueExports.unref(zonePrefix) + zone.id),
                    value: zone.id,
                    onChange: toggleZoneSelect
                  }, null, _parent2, _scopeId));
                  _push2(`<label class="w-full cursor-pointer"${serverRenderer_cjs_prodExports.ssrRenderAttr("for", String(vueExports.unref(zonePrefix) + zone.id))}${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(zone.name)}</label></div>`);
                });
                _push2(`<!--]--></div>`);
              } else if (!hasZones.value) {
                _push2(`<span${_scopeId}>Для этого города нет зоны доставки</span>`);
              } else {
                _push2(`<span${_scopeId}>Сначала выберите город</span>`);
              }
            } else {
              return [
                availableZones.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                  key: 0,
                  class: "text-small-regular flex min-w-[260px] flex-col"
                }, [
                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(availableZones.value, (zone) => {
                    return vueExports.openBlock(), vueExports.createBlock("div", {
                      key: zone.id,
                      class: "hover:bg-input flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors duration-200 ease-in"
                    }, [
                      vueExports.createVNode(_sfc_main$5, {
                        modelValue: deliveryZoneId.value,
                        "onUpdate:modelValue": ($event) => deliveryZoneId.value = $event,
                        "input-id": String(vueExports.unref(zonePrefix) + zone.id),
                        name: String(vueExports.unref(zonePrefix) + zone.id),
                        value: zone.id,
                        onChange: toggleZoneSelect
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                      vueExports.createVNode("label", {
                        class: "w-full cursor-pointer",
                        for: String(vueExports.unref(zonePrefix) + zone.id)
                      }, vueExports.toDisplayString(zone.name), 9, ["for"])
                    ]);
                  }), 128))
                ])) : !hasZones.value ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 1 }, "Для этого города нет зоны доставки")) : (vueExports.openBlock(), vueExports.createBlock("span", { key: 2 }, "Сначала выберите город"))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
          modelValue: entrance.value,
          "onUpdate:modelValue": ($event) => entrance.value = $event,
          class: "w-full",
          label: "Подъезд",
          name: "entrance" + vueExports.unref(inputId),
          clearable: "",
          disabled: _ctx.disabled
        }, null, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
          modelValue: floor.value,
          "onUpdate:modelValue": ($event) => floor.value = $event,
          class: "w-full",
          label: "Этаж",
          name: "floor" + vueExports.unref(inputId),
          clearable: "",
          disabled: _ctx.disabled
        }, null, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
          modelValue: apartment.value,
          "onUpdate:modelValue": ($event) => apartment.value = $event,
          class: "w-full",
          name: "apartment" + vueExports.unref(inputId),
          label: "Квартира",
          clearable: "",
          disabled: _ctx.disabled
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="mt-2 grid grid-cols-2 gap-2">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
          modelValue: postalCode.value,
          "onUpdate:modelValue": ($event) => postalCode.value = $event,
          class: "w-full",
          name: vueExports.unref(inputId),
          label: "Индекс",
          clearable: "",
          disabled: _ctx.disabled
        }, null, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
          modelValue: entrance.value,
          "onUpdate:modelValue": ($event) => entrance.value = $event,
          class: "w-full",
          label: "Подъезд",
          name: "entrance" + vueExports.unref(inputId),
          clearable: "",
          disabled: _ctx.disabled
        }, null, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
          modelValue: floor.value,
          "onUpdate:modelValue": ($event) => floor.value = $event,
          class: "w-full",
          label: "Этаж",
          name: "floor" + vueExports.unref(inputId),
          clearable: "",
          disabled: _ctx.disabled
        }, null, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
          modelValue: apartment.value,
          "onUpdate:modelValue": ($event) => apartment.value = $event,
          class: "w-full",
          name: "apartment" + vueExports.unref(inputId),
          label: "Квартира",
          clearable: "",
          disabled: _ctx.disabled
        }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div><div>`);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "additionalFields", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/features/Address/address-fields/ui/AddressFields.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "DatePicker",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = vueExports.ref({
      root: `inline-flex max-w-full relative p-fluid:flex`,
      pcInputText: {
        root: `flex-auto w-[1%] appearance-none rounded-20 outline-hidden
        p-has-dropdown:rounded-e-none p-has-e-icon:pe-10
        bg-input dark:bg-surface-950
        p-filled:bg-white dark:p-filled:bg-white
        text-text dark:text-surface-0
        placeholder:text-additional dark:placeholder:text-surface-400
        border border-surface-300 dark:border-surface-700
        enabled:hover:border-surface-400 dark:enabled:hover:border-surface-600
        enabled:focus:border-primary
        disabled:bg-surface-200 disabled:text-surface-500
        dark:disabled:bg-surface-700 dark:disabled:text-surface-400
        p-invalid:border-red-400 dark:p-invalid:border-red-300
        p-invalid:placeholder:text-red-600 dark:p-invalid:placeholder:text-red-400
        px-4 py-3.5 p-fluid:w-full
        p-small:text-subsidiary-reg p-small:px-[0.625rem] p-small:py-[0.375rem]
        p-large:text-subsidiary-reg p-large:px-[0.875rem] p-large:py-[0.625rem]
        transition-colors duration-200 shadow-[0_1px_2px_0_rgba(18,18,23,0.05)]`
      },
      dropdown: `cursor-pointer inline-flex items-center justify-center select-none overflow-hidden relative w-10 shrink-0 rounded-e-md
        border border-s-0 border-surface-300 dark:border-surface-700
        bg-surface-100 enabled:hover:bg-surface-200 enabled:active:bg-surface-300
        text-surface-600 enabled:hover:text-surface-700 enabled:hover:active:text-surface-800
        dark:bg-surface-800 dark:enabled:hover:bg-surface-700 dark:enabled:active:bg-surface-600
        dark:text-surface-300 dark:enabled:hover:text-surface-200 dark:enabled:active:text-surface-100
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary
        transition-colors duration-200`,
      inputIconContainer: `cursor-pointer absolute top-1/2 end-3 -mt-2 text-surface-400 leading-none p-small:*:size-[0.875rem] p-large:*:size-[1.125rem]`,
      panel: `p-portal-self:min-w-full w-auto p-4 rounded-20
        p-inline:inline-block p-inline:overflow-x-auto p-inline:shadow-none
        border border-surface-200 dark:border-surface-700
        bg-white  dark:bg-surface-900
        text-surface-700 dark:text-surface-0
        shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]`,
      calendarContainer: `flex`,
      calendar: `flex-auto border-s border-surface-200 dark:border-surface-700 gap-3 px-3
        first:ps-0 first:border-s-0 last:pe-0`,
      header: `flex items-center justify-between pt-0 px-0 pb-2 font-medium gap-2
        bg-surface-0 dark:bg-surface-900
        text-surface-700 dark:text-surface-0
        border-b border-surface-200 dark:border-surface-700`,
      title: `flex items-center justify-between gap-2 font-medium`,
      selectMonth: `border-none bg-transparent m-0 cursor-pointer text-small-medium transition-colors duration-200
        py-1 px-2 rounded-md text-surface-700 dark:text-surface-0
        enabled:hover:bg-surface-100 enabled:hover:text-surface-800
        dark:enabled:hover:bg-surface-800 dark:enabled:hover:text-surface-0
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary`,
      selectYear: `border-none bg-transparent m-0 cursor-pointer text-small-medium transition-colors duration-200
        py-1 px-2 rounded-md text-surface-700 dark:text-surface-0
        enabled:hover:bg-surface-100 enabled:hover:text-surface-800
        dark:enabled:hover:bg-surface-800 dark:enabled:hover:text-surface-0
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary`,
      decade: `white-space-nowrap`,
      dayView: `w-full border-collapse text-subsidiary-reg mt-2 mx-0 mb-0`,
      tableHeader: `bg-filling overflow-hidden [&>tr>th:first-child]:rounded-s-20 [&>tr>th:last-child]:rounded-e-20 [&>tr>th]:p-2`,
      tableHeaderRow: ` p-2`,
      weekHeader: `p-1`,
      weekHeaderLabel: `font-medium text-surface-700 dark:text-surface-0 opacity-60`,
      tableHeaderCell: ``,
      weekDayCell: `p-1`,
      weekDay: `font-medium text-surface-700 dark:text-surface-0`,
      tableBody: ``,
      weekNumber: ``,
      weekLabelContainer: `opacity-60 flex w-8 h-8 p-1 justify-center`,
      weekLabel: ``,
      dayCell: `p-1`,
      day: `flex items-center justify-center cursor-pointer my-0 mx-auto overflow-hidden relative w-8 h-8
        rounded-full p-1 transition-colors duration-200 border border-transparent text-surface-700 dark:text-surface-0
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary
        p-disabled:opacity-60 p-disabled:pointer-events-none
        hover:bg-surface-100 hover:text-surface-800 dark:hover:bg-surface-800 dark:hover:text-surface-0
        p-selected:bg-primary p-selected:text-primary-contrast
        p-today:bg-surface-200 p-today:text-surface-900 dark:p-today:bg-surface-700 dark:p-today:text-surface-0
        p-today:hover:bg-surface-100 p-today:hover:text-surface-800 dark:p-today:hover:bg-surface-800 dark:p-today:hover:text-surface-0
        p-today:p-selected:bg-primary p-today:p-selected:text-primary-contrast`,
      monthView: `mt-2 mb-0 mx-0`,
      month: `w-1/3 inline-flex items-center justify-center cursor-pointer overflow-hidden relative
        p-[0.375rem] transition-colors duration-200 rounded-md text-surface-700 dark:text-surface-0
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary
        hover:bg-surface-100 hover:text-surface-800 dark:hover:bg-surface-800 dark:hover:text-surface-0
        p-selected:bg-primary p-selected:text-primary-contrast`,
      yearView: `mt-2 mb-0 mx-0`,
      year: `w-1/2 inline-flex items-center justify-center cursor-pointer overflow-hidden relative
        p-[0.375rem] transition-colors duration-200 rounded-md text-surface-700 dark:text-surface-0
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-primary
        hover:bg-surface-100 hover:text-surface-800 dark:hover:bg-surface-800 dark:hover:text-surface-0
        p-selected:bg-primary p-selected:text-primary-contrast`,
      timePicker: `flex items-center justify-center border-t border-surface-200 dark:border-surface-700 p-0 gap-2
        not-p-time-only:pt-2 not-p-time-only:pb-0 not-p-time-only:px-0`,
      hourPicker: `flex items-center flex-col gap-1`,
      hour: `text-base`,
      separatorContainer: `flex items-center flex-col gap-1`,
      separator: `text-base`,
      minutePicker: `flex items-center flex-col gap-1`,
      minute: `text-base`,
      secondPicker: `flex items-center flex-col gap-1`,
      second: `text-base`,
      ampmPicker: `flex items-center flex-col gap-1`,
      ampm: `text-base`,
      buttonbar: `flex justify-between items-center pt-2 pb-0 px-0 border-t border-surface-200 dark:border-surface-700`,
      transition: {
        enterFromClass: "opacity-0 scale-y-75",
        enterActiveClass: "transition duration-120 ease-[cubic-bezier(0,0,0.2,1)]",
        leaveActiveClass: "transition-opacity duration-100 ease-linear",
        leaveToClass: "opacity-0"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DatePicker), vueExports.mergeProps({
        unstyled: "",
        pt: theme.value,
        ptOptions: {
          mergeProps: vueExports.unref(ptViewMerge)
        }
      }, _attrs), vueExports.createSlots({
        prevbutton: vueExports.withCtx(({ actionCallback, keydownCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button variant="text" rounded${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretLeft), null, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              vueExports.createVNode("button", {
                variant: "text",
                rounded: "",
                onClick: actionCallback,
                onKeydown: keydownCallback
              }, [
                vueExports.createVNode(vueExports.unref(IconCaretLeft))
              ], 40, ["onClick", "onKeydown"])
            ];
          }
        }),
        nextbutton: vueExports.withCtx(({ actionCallback, keydownCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button variant="text" rounded${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), null, null, _parent2, _scopeId));
            _push2(`</button>`);
          } else {
            return [
              vueExports.createVNode("button", {
                variant: "text",
                rounded: "",
                onClick: actionCallback,
                onKeydown: keydownCallback
              }, [
                vueExports.createVNode(vueExports.unref(IconCaretRight))
              ], 40, ["onClick", "onKeydown"])
            ];
          }
        }),
        todaybutton: vueExports.withCtx(({ actionCallback, keydownCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
              variant: "text",
              label: "Today",
              size: "small",
              onClick: actionCallback,
              onKeydown: keydownCallback
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$7, {
                variant: "text",
                label: "Today",
                size: "small",
                onClick: actionCallback,
                onKeydown: keydownCallback
              }, null, 8, ["onClick", "onKeydown"])
            ];
          }
        }),
        clearbutton: vueExports.withCtx(({ actionCallback, keydownCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
              variant: "text",
              label: "Clear",
              size: "small",
              onClick: actionCallback,
              onKeydown: keydownCallback
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$7, {
                variant: "text",
                label: "Clear",
                size: "small",
                onClick: actionCallback,
                onKeydown: keydownCallback
              }, null, 8, ["onClick", "onKeydown"])
            ];
          }
        }),
        dropdownicon: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ChevronDownIcon), null, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(ChevronDownIcon))
            ];
          }
        }),
        inputicon: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(CalendarIcon), null, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(CalendarIcon))
            ];
          }
        }),
        hourincrementbutton: vueExports.withCtx(({ callbacks }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, vueExports.mergeProps({
              variant: "text",
              rounded: ""
            }, vueExports.toHandlers(callbacks)), {
              icon: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ChevronUpIcon), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(ChevronUpIcon))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$7, vueExports.mergeProps({
                variant: "text",
                rounded: ""
              }, vueExports.toHandlers(callbacks)), {
                icon: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(ChevronUpIcon))
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        hourdecrementbutton: vueExports.withCtx(({ callbacks }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, vueExports.mergeProps({
              variant: "text",
              rounded: ""
            }, vueExports.toHandlers(callbacks)), {
              icon: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ChevronDownIcon), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(ChevronDownIcon))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$7, vueExports.mergeProps({
                variant: "text",
                rounded: ""
              }, vueExports.toHandlers(callbacks)), {
                icon: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(ChevronDownIcon))
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        minuteincrementbutton: vueExports.withCtx(({ callbacks }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, vueExports.mergeProps({
              variant: "text",
              rounded: ""
            }, vueExports.toHandlers(callbacks)), {
              icon: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ChevronUpIcon), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(ChevronUpIcon))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$7, vueExports.mergeProps({
                variant: "text",
                rounded: ""
              }, vueExports.toHandlers(callbacks)), {
                icon: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(ChevronUpIcon))
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        minutedecrementbutton: vueExports.withCtx(({ callbacks }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, vueExports.mergeProps({
              variant: "text",
              rounded: ""
            }, vueExports.toHandlers(callbacks)), {
              icon: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ChevronDownIcon), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(ChevronDownIcon))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$7, vueExports.mergeProps({
                variant: "text",
                rounded: ""
              }, vueExports.toHandlers(callbacks)), {
                icon: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(ChevronDownIcon))
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        secondincrementbutton: vueExports.withCtx(({ callbacks }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, vueExports.mergeProps({
              variant: "text",
              rounded: ""
            }, vueExports.toHandlers(callbacks)), {
              icon: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ChevronUpIcon), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(ChevronUpIcon))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$7, vueExports.mergeProps({
                variant: "text",
                rounded: ""
              }, vueExports.toHandlers(callbacks)), {
                icon: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(ChevronUpIcon))
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        seconddecrementbutton: vueExports.withCtx(({ callbacks }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, vueExports.mergeProps({
              variant: "text",
              rounded: ""
            }, vueExports.toHandlers(callbacks)), {
              icon: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ChevronDownIcon), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(ChevronDownIcon))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$7, vueExports.mergeProps({
                variant: "text",
                rounded: ""
              }, vueExports.toHandlers(callbacks)), {
                icon: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(ChevronDownIcon))
                ]),
                _: 2
              }, 1040)
            ];
          }
        }),
        ampmincrementbutton: vueExports.withCtx(({ toggleCallback, keydownCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
              variant: "text",
              rounded: "",
              onClick: toggleCallback,
              onKeydown: keydownCallback
            }, {
              icon: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ChevronUpIcon), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(ChevronUpIcon))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$7, {
                variant: "text",
                rounded: "",
                onClick: toggleCallback,
                onKeydown: keydownCallback
              }, {
                icon: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(ChevronUpIcon))
                ]),
                _: 2
              }, 1032, ["onClick", "onKeydown"])
            ];
          }
        }),
        ampmdecrementbutton: vueExports.withCtx(({ toggleCallback, keydownCallback }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
              variant: "text",
              rounded: "",
              onClick: toggleCallback,
              onKeydown: keydownCallback
            }, {
              icon: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ChevronDownIcon), null, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(ChevronDownIcon))
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$7, {
                variant: "text",
                rounded: "",
                onClick: toggleCallback,
                onKeydown: keydownCallback
              }, {
                icon: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(ChevronDownIcon))
                ]),
                _: 2
              }, 1032, ["onClick", "onKeydown"])
            ];
          }
        }),
        _: 2
      }, [
        vueExports.renderList(_ctx.$slots, (_, slotName) => {
          return {
            name: slotName,
            fn: vueExports.withCtx((slotProps, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, slotName, slotProps ?? {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vueExports.renderSlot(_ctx.$slots, slotName, slotProps ?? {})
                ];
              }
            })
          };
        })
      ]), _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/volt/DatePicker.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
