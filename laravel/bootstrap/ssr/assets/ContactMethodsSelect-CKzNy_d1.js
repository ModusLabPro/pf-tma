import { v as vueExports, s as serverRenderer_cjs_prodExports, $ as ptViewMerge, a8 as IconArrowDown } from "../ssr.js";
import { I as IconXCircle } from "./VFloatingInput-D87z21zB.js";
import { V as VFloatLabel } from "./VFloatLabel-BX805IBj.js";
import ChevronDownIcon from "@primevue/icons/chevrondown";
import SearchIcon from "@primevue/icons/search";
import SpinnerIcon from "@primevue/icons/spinner";
import TimesIcon from "@primevue/icons/times";
import MultiSelect from "primevue/multiselect";
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MultiSelect",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = vueExports.ref({
      root: (options) => {
        return {
          class: [
            `inline-flex cursor-pointer relative select-none rounded-20 p-fluid:flex
        text-text text-mob-small-reg
        bg-input dark:bg-surface-950
        border border-transparent hover:border-surface-400 dark:border-surface-600 dark:hover:border-surface-700
        p-focus:border-primary
        p-filled:bg-transparent dark:p-filled:bg-surface-800
        p-invalid:border-red-400 dark:p-invalid:border-red-300
        p-disabled:bg-surface-200 p-disabled:text-surface-500 dark:p-disabled:bg-surface-700 dark:p-disabled:text-surface-400 p-disabled:pointer-events-none
        shadow-[0_1px_2px_0_rgba(18,18,23,0.05)]
        transition-colors duration-200`,
            {
              "border !border-text p-invalid:border-marker bg-transparent p-inputwrapper-filled": options.state.d_value
            }
          ]
        };
      },
      labelContainer: `overflow-hidden flex-auto relative`,
      label: `p-multiselect-label flex items-center gap-1 whitespace-nowrap overflow-hidden text-ellipsis p-3.5 p-has-chip:py-1 p-has-chip:px-[0.375rem]
        text-surface-700 dark:text-surface-0
        p-placeholder:text-additional dark:p-placeholder:text-surface-400
        p-disabled:text-surface-500 dark:p-disabled:text-surface-400
        p-empty:overflow-hidden p-empty:opacity-0
        p-small:text-sm p-small:px-[0.625rem] p-small:py-[0.375rem]
        p-large:text-lg p-large:px-[0.875rem] p-large:py-[0.625rem]`,
      chipItem: ``,
      pcChip: {
        root: `inline-flex items-center gap-2 px-3 py-1 rounded-sm
            bg-surface-100 dark:bg-surface-800
            text-surface-800 dark:text-surface-0
            has-[img]:pt-1 has-[img]:pb-1
            p-removable:pe-2`,
        removeIcon: `cursor-pointer text-base w-4 h-4 rounded-full text-surface-800 dark:text-surface-0`
      },
      dropdown: `flex items-center justify-center shrink-0 bg-transparent
        text-surface-400 w-10 rounded-e-md`,
      overlay: `absolute top-0 mt-2 px-2 py-3 left-0 rounded-20 p-portal-self:min-w-full
        bg-surface-0 dark:bg-surface-900
        border border-surface-200 dark:border-surface-700
        text-surface-700 dark:text-surface-0
        shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]`,
      header: `!hidden flex items-center pt-2 pb-1 px-4 gap-2`,
      pcHeaderCheckbox: {
        root: `relative !hidden inline-flex select-none w-5 h-5 align-bottom`,
        input: `peer cursor-pointer disabled:cursor-default appearance-none
            absolute start-0 top-0 w-full h-full m-0 p-0 opacity-0 z-10
            border border-transparent rounded-xs`,
        box: `flex justify-center items-center rounded-sm w-5 h-5
            border border-surface-300 dark:border-surface-700
            bg-surface-0 dark:bg-surface-950
            text-surface-700 dark:text-surface-0
            peer-enabled:peer-hover:border-surface-400 dark:peer-enabled:peer-hover:border-surface-600
            p-checked:border-primary p-checked:bg-default p-checked:text-primary-contrast
            peer-enabled:peer-hover:p-checked:bg-primary-emphasis peer-enabled:peer-hover:p-checked:border-primary-emphasis
            peer-focus-visible:outline-1 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary peer-focus-visible:outline
            p-disabled:bg-surface-200 dark:p-disabled:bg-surface-400 p-disabled:border-surface-300 dark:p-disabled:border-surface-700 p-disabled:text-surface-700 dark:p-disabled:text-surface-400
            shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] transition-colors duration-200`,
        icon: `text-sm w-[0.875rem] h-[0.875rem] transition-none`
      },
      pcFilterContainer: {
        root: `relative flex-auto`
      },
      pcFilter: {
        root: `w-full appearance-none rounded-md outline-hidden
            bg-surface-0 dark:bg-surface-950
            text-surface-700 dark:text-surface-0
            placeholder:text-surface-500 dark:placeholder:text-surface-400
            border border-surface-300 dark:border-surface-700
            enabled:hover:border-surface-400 dark:enabled:hover:border-surface-600
            enabled:focus:border-primary
            disabled:bg-surface-200 disabled:text-surface-500
            dark:disabled:bg-surface-700 dark:disabled:text-surface-400
            ps-3 pe-10 py-2 p-fluid:w-full
            transition-colors duration-200 shadow-[0_1px_2px_0_rgba(18,18,23,0.05)]`
      },
      pcFilterIconContainer: {
        root: `absolute top-1/2 -mt-2 leading-none end-3 z-1`
      },
      listContainer: `overflow-auto`,
      virtualScroller: ``,
      list: `m-0 p-1 list-none gap-[2px] flex flex-col`,
      optionGroup: `m-0 px-3 py-2 bg-transparent text-surface-500 dark:text-surface-400 font-semibold`,
      option: `cursor-pointer font-normal whitespace-nowrap relative overflow-hidden flex items-center gap-2 px-3 py-2
        rounded-sm text- dark:text-surface-0 bg-transparent border-none
        p-focus:bg-surface-100 dark:p-focus:bg-surface-800 p-focus:text-surface-800 dark:p-focus:text-surface-0
        transition-colors duration-200`,
      optionLabel: ``,
      pcOptionCheckbox: {
        root: `relative inline-flex select-none w-5 h-5 align-bottom`,
        input: `peer cursor-pointer disabled:cursor-default appearance-none
            absolute start-0 top-0 w-full h-full m-0 p-0 opacity-0 z-10
            border border-transparent rounded-xs`,
        box: `flex justify-center items-center rounded-sm w-5 h-5
            border border-default dark:border-surface-700
            bg-surface-0 dark:bg-surface-950
            text-surface-700 dark:text-surface-0
            peer-enabled:peer-hover:border-surface-400 dark:peer-enabled:peer-hover:border-surface-600
            p-checked:border-default p-checked:bg-default p-checked:text-primary-contrast
            peer-enabled:peer-hover:p-checked:bg-default peer-enabled:peer-hover:p-checked:border-default
            peer-focus-visible:outline-1 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary peer-focus-visible:outline
            p-disabled:bg-surface-200 dark:p-disabled:bg-surface-400 p-disabled:border-surface-300 dark:p-disabled:border-surface-700 p-disabled:text-surface-700 dark:p-disabled:text-surface-400
            shadow-[0_1px_2px_0_rgba(18,18,23,0.05)] transition-colors duration-200`,
        icon: `text-sm w-[0.875rem] h-[0.875rem] transition-none`
      },
      emptyMessage: `px-3 py-2`,
      transition: {
        enterFromClass: "opacity-0 scale-y-75",
        enterActiveClass: "transition duration-120 ease-[cubic-bezier(0,0,0.2,1)]",
        leaveActiveClass: "transition-opacity duration-100 ease-linear",
        leaveToClass: "opacity-0"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(MultiSelect), vueExports.mergeProps({
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
        loadingicon: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(SpinnerIcon), { class: "animate-spin" }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(SpinnerIcon), { class: "animate-spin" })
            ];
          }
        }),
        filtericon: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(SearchIcon), { class: "text-surface-400" }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(SearchIcon), { class: "text-surface-400" })
            ];
          }
        }),
        clearicon: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(TimesIcon), { class: "text-surface-400 absolute end-10 top-1/2 -mt-2" }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(TimesIcon), { class: "text-surface-400 absolute end-10 top-1/2 -mt-2" })
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/volt/MultiSelect.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ContactMethodsSelect",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    options: {}
  }, {
    "modelValue": { default: [] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = vueExports.useModel(__props, "modelValue");
    const isOpen = vueExports.ref(false);
    const clearSelection = () => {
      model.value = [];
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VFloatLabel), vueExports.mergeProps({ label: "Способ связи" }, _attrs), {
        default: vueExports.withCtx(({ labelId }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
              modelValue: model.value,
              "onUpdate:modelValue": ($event) => model.value = $event,
              "input-id": labelId,
              options: _ctx.options,
              "option-label": "name",
              "option-value": "id",
              class: "w-full",
              onShow: ($event) => isOpen.value = true,
              onHide: ($event) => isOpen.value = false
            }, {
              value: vueExports.withCtx(({ value }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (value == null ? void 0 : value.length) {
                    _push3(`<span class="flex w-full justify-between"${_scopeId2}><span${_scopeId2}>Выбрано</span><span class="text-subsidiary-reg bg-text absolute top-1/2 right-[14px] flex -translate-y-1/2 items-center gap-1 rounded-full py-0.5 pr-1 pl-2 text-white"${_scopeId2}><span${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(value.length)}</span><button type="button" class="bg-filling p text-additional cursor-pointer rounded-full"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconXCircle), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                    _push3(`</button></span></span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    (value == null ? void 0 : value.length) ? (vueExports.openBlock(), vueExports.createBlock("span", {
                      key: 0,
                      class: "flex w-full justify-between"
                    }, [
                      vueExports.createVNode("span", null, "Выбрано"),
                      vueExports.createVNode("span", { class: "text-subsidiary-reg bg-text absolute top-1/2 right-[14px] flex -translate-y-1/2 items-center gap-1 rounded-full py-0.5 pr-1 pl-2 text-white" }, [
                        vueExports.createVNode("span", null, vueExports.toDisplayString(value.length), 1),
                        vueExports.createVNode("button", {
                          type: "button",
                          class: "bg-filling p text-additional cursor-pointer rounded-full",
                          onClick: vueExports.withModifiers(clearSelection, ["stop"])
                        }, [
                          vueExports.createVNode(vueExports.unref(IconXCircle), { class: "h-4 w-4" })
                        ])
                      ])
                    ])) : vueExports.createCommentVNode("", true)
                  ];
                }
              }),
              dropdownicon: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowDown), {
                    class: ["text-default h-4 w-4", { "rotate-180": isOpen.value }]
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(IconArrowDown), {
                      class: ["text-default h-4 w-4", { "rotate-180": isOpen.value }]
                    }, null, 8, ["class"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$1, {
                modelValue: model.value,
                "onUpdate:modelValue": ($event) => model.value = $event,
                "input-id": labelId,
                options: _ctx.options,
                "option-label": "name",
                "option-value": "id",
                class: "w-full",
                onShow: ($event) => isOpen.value = true,
                onHide: ($event) => isOpen.value = false
              }, {
                value: vueExports.withCtx(({ value }) => [
                  (value == null ? void 0 : value.length) ? (vueExports.openBlock(), vueExports.createBlock("span", {
                    key: 0,
                    class: "flex w-full justify-between"
                  }, [
                    vueExports.createVNode("span", null, "Выбрано"),
                    vueExports.createVNode("span", { class: "text-subsidiary-reg bg-text absolute top-1/2 right-[14px] flex -translate-y-1/2 items-center gap-1 rounded-full py-0.5 pr-1 pl-2 text-white" }, [
                      vueExports.createVNode("span", null, vueExports.toDisplayString(value.length), 1),
                      vueExports.createVNode("button", {
                        type: "button",
                        class: "bg-filling p text-additional cursor-pointer rounded-full",
                        onClick: vueExports.withModifiers(clearSelection, ["stop"])
                      }, [
                        vueExports.createVNode(vueExports.unref(IconXCircle), { class: "h-4 w-4" })
                      ])
                    ])
                  ])) : vueExports.createCommentVNode("", true)
                ]),
                dropdownicon: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(IconArrowDown), {
                    class: ["text-default h-4 w-4", { "rotate-180": isOpen.value }]
                  }, null, 8, ["class"])
                ]),
                _: 2
              }, 1032, ["modelValue", "onUpdate:modelValue", "input-id", "options", "onShow", "onHide"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/features/Address/contact-methods-select/ui/ContactMethodsSelect.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
