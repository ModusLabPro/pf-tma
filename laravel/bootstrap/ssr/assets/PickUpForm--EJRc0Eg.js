import { v as vueExports, b as usePage, s as serverRenderer_cjs_prodExports, K as _sfc_main$1, f as _sfc_main$2, H as VScrollPanel, R as IconPhone, L as _sfc_main$3, a as VButton, ai as _sfc_main$4 } from "../ssr.js";
import { storeToRefs } from "pinia";
import { u as usePickupLocationsStore, I as IconPin } from "./IconPin-WhIOrlAF.js";
import { I as IconCheckCircleGreen } from "./IconCheckCircleGreen-DQz2sOR5.js";
import { I as IconClockOutline } from "./IconClockOutline-BglWD8g2.js";
import { I as IconGlobeOutline } from "./IconGlobeOutline-C0euSem-.js";
import { V as VFloatLabel } from "./VFloatLabel-BX805IBj.js";
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
import "primevue/floatlabel";
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "PickUpForm",
  __ssrInlineRender: true,
  emits: ["applyChose", "reset"],
  setup(__props, { emit: __emit }) {
    const page = usePage();
    const emit = __emit;
    const pickupLocationsStore = usePickupLocationsStore();
    const { locationsList, selectedLocation, selectedCity } = storeToRefs(pickupLocationsStore);
    const onChangeCity = ({ value }) => {
      pickupLocationsStore.getLocations(value.id);
    };
    const isApplied = vueExports.shallowRef(false);
    const onApplyChose = () => {
      emit("applyChose");
      isApplied.value = true;
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
    const reset = () => {
      selectedLocation.value = void 0;
      isApplied.value = false;
      emit("reset");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "grid gap-4" }, _attrs))}><p class="text-mob-small-medium">Пункты самовывоза</p><div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
        modelValue: vueExports.unref(selectedCity),
        "onUpdate:modelValue": ($event) => vueExports.isRef(selectedCity) ? selectedCity.value = $event : null,
        "option-label": "name",
        options: vueExports.unref(page).props.cities.filter((c) => c.is_has_pickup),
        fluid: "",
        size: "large",
        placeholder: "Выберите город",
        onChange: onChangeCity
      }, null, _parent));
      _push(`<div class="mt-2 grid grid-cols-2 gap-2">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VFloatLabel), { label: "Улица" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
              readonly: "",
              fluid: "",
              "model-value": ((_a = vueExports.unref(selectedLocation)) == null ? void 0 : _a.street) || ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$2, {
                readonly: "",
                fluid: "",
                "model-value": ((_b = vueExports.unref(selectedLocation)) == null ? void 0 : _b.street) || ""
              }, null, 8, ["model-value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VFloatLabel), { label: "Номер дома" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
              readonly: "",
              fluid: "",
              "model-value": ((_a = vueExports.unref(selectedLocation)) == null ? void 0 : _a.house) || ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$2, {
                readonly: "",
                fluid: "",
                "model-value": ((_b = vueExports.unref(selectedLocation)) == null ? void 0 : _b.house) || ""
              }, null, 8, ["model-value"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VScrollPanel), { style: { height: "440px" } }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 gap-2"${_scopeId}><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(locationsList), (location) => {
              _push2(`<div class="bg-input flex gap-2 rounded-2xl p-3"${_scopeId}><div class="grid grow gap-3"${_scopeId}><p class="text-mob-small-medium"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(location.title)}</p><div class="grid min-[820px]:grid-cols-2 gap-2"${_scopeId}>`);
              if (location.phone) {
                _push2(`<a${serverRenderer_cjs_prodExports.ssrRenderAttr("href", `tel:${location.phone.replace(/(?!^\+)[^\d]/g, "")}`)} class="text-mob-small-bold inline-flex items-center gap-2"${_scopeId}>`);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPhone), { class: "h-6 w-6 shrink-0" }, null, _parent2, _scopeId));
                _push2(` ${serverRenderer_cjs_prodExports.ssrInterpolate(location.phone)}</a>`);
              } else {
                _push2(`<!---->`);
              }
              if (location.working_hours_from || location.working_hours_to) {
                _push2(`<div class="text-mob-small-reg flex items-center gap-2"${_scopeId}>`);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), { class: "h-6 w-6 shrink-0" }, null, _parent2, _scopeId));
                _push2(` ${serverRenderer_cjs_prodExports.ssrInterpolate(getWorkingHours(location))}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="text-mob-small-reg flex items-center gap-2"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPin), { class: "shrink-0" }, null, _parent2, _scopeId));
              _push2(` ${serverRenderer_cjs_prodExports.ssrInterpolate(location.fullAddress)}</div>`);
              if (location.site) {
                _push2(`<a${serverRenderer_cjs_prodExports.ssrRenderAttr("href", location.site)} class="text-mob-small-reg flex items-center gap-2"${_scopeId}>`);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconGlobeOutline), { class: "h-6 w-6 shrink-0" }, null, _parent2, _scopeId));
                _push2(` ${serverRenderer_cjs_prodExports.ssrInterpolate(location.site)}</a>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                modelValue: vueExports.unref(selectedLocation),
                "onUpdate:modelValue": ($event) => vueExports.isRef(selectedLocation) ? selectedLocation.value = $event : null,
                disabled: isApplied.value,
                value: location
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "grid grid-cols-1 gap-2" }, [
                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(locationsList), (location) => {
                  return vueExports.openBlock(), vueExports.createBlock("div", {
                    key: location.id,
                    class: "bg-input flex gap-2 rounded-2xl p-3"
                  }, [
                    vueExports.createVNode("div", { class: "grid grow gap-3" }, [
                      vueExports.createVNode("p", { class: "text-mob-small-medium" }, vueExports.toDisplayString(location.title), 1),
                      vueExports.createVNode("div", { class: "grid min-[820px]:grid-cols-2 gap-2" }, [
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
                    vueExports.createVNode(_sfc_main$3, {
                      modelValue: vueExports.unref(selectedLocation),
                      "onUpdate:modelValue": ($event) => vueExports.isRef(selectedLocation) ? selectedLocation.value = $event : null,
                      disabled: isApplied.value,
                      value: location
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled", "value"])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!isApplied.value) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
          label: "Подтвердить выбор",
          class: "w-fit",
          disabled: !vueExports.unref(selectedLocation),
          onClick: onApplyChose
        }, null, _parent));
      } else {
        _push(`<div class="flex gap-3"><div class="bg-filling text-mob-small-reg flex w-fit items-center gap-2 rounded-[50px] px-6 py-[14px] select-none">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCheckCircleGreen), null, null, _parent));
        _push(` Выбор подтвержден </div>`);
        if (isApplied.value) {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
            label: "Редактировать",
            rounded: "",
            onClick: reset
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/making-order/ui/PickUpForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
