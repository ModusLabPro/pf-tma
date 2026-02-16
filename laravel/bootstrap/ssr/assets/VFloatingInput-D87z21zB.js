import { v as vueExports, s as serverRenderer_cjs_prodExports, e as _sfc_main$1, f as _sfc_main$2 } from "../ssr.js";
const _hoisted_1 = {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    vueExports.createStaticVNode('<g clip-path="url(#clip0_6506_205773)"><path d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" fill="#E7EAEC" stroke="#E7EAEC" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.5 7.5L7.5 12.5" stroke="#83939E" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.5 7.5L12.5 12.5" stroke="#83939E" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_6506_205773"><rect width="20" height="20" fill="white"></rect></clipPath></defs>', 2)
  ]));
}
const IconXCircle = { render };
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "VFloatingInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    name: {},
    label: {},
    type: {},
    error: {},
    required: { type: Boolean },
    disabled: { type: Boolean },
    clearable: { type: Boolean },
    readonly: { type: Boolean }
  },
  emits: ["update:modelValue", "blur"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isFocused = vueExports.ref(false);
    const inputClass = vueExports.computed(() => props.error ? "bg-[#ED1C241A] !border-[#ED1C241A]" : "");
    function onInput(value) {
      emit("update:modelValue", value);
    }
    function clearInput() {
      if (props.disabled) return;
      emit("update:modelValue", "");
    }
    function handleBlur(event) {
      isFocused.value = false;
      emit("blur", event);
    }
    function handleFocus() {
      isFocused.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), vueExports.mergeProps({
        class: "relative w-full [&_.p-inputtext]:pt-[23px] [&_.p-inputtext]:pb-[7px]",
        error: _ctx.error
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative"${_scopeId}>`);
            if (_ctx.$slots.default) {
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "input", {
                modelValue: _ctx.modelValue,
                updateValue: onInput,
                onBlur: handleBlur,
                onFocus: handleFocus,
                class: [inputClass.value, "w-full"],
                type: _ctx.type ?? "text",
                required: _ctx.required,
                invalid: !!_ctx.error
              }, null, _push2, _parent2, _scopeId);
              if (!_ctx.$slots.input) {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
                  type: _ctx.type ?? "text",
                  name: _ctx.name,
                  invalid: !!_ctx.error,
                  readonly: _ctx.readonly,
                  disabled: _ctx.disabled,
                  class: ["transition-all duration-200 ease-in", [inputClass.value, "w-full"]],
                  "model-value": props.modelValue,
                  required: _ctx.required,
                  "onUpdate:modelValue": onInput,
                  onFocus: handleFocus,
                  onBlur: handleBlur
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            }
            if (_ctx.clearable && props.modelValue && !props.disabled) {
              _push2(`<span type="button" class="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconXCircle), null, null, _parent2, _scopeId));
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><label${serverRenderer_cjs_prodExports.ssrRenderAttr("for", _ctx.name)} class="${serverRenderer_cjs_prodExports.ssrRenderClass([{
              "text-complimentary-reg !top-[9px] left-[12px]": isFocused.value || !!props.modelValue
            }, "text-additional dark:text-surface-400 pointer-events-none absolute top-[14px] left-[15px] transition-all duration-200"])}"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.label)} `);
            if (_ctx.required) {
              _push2(`<span class="text-marker"${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</label>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "relative" }, [
                _ctx.$slots.default ? vueExports.renderSlot(_ctx.$slots, "default", { key: 0 }) : (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                  vueExports.renderSlot(_ctx.$slots, "input", {
                    modelValue: _ctx.modelValue,
                    updateValue: onInput,
                    onBlur: handleBlur,
                    onFocus: handleFocus,
                    class: [inputClass.value, "w-full"],
                    type: _ctx.type ?? "text",
                    required: _ctx.required,
                    invalid: !!_ctx.error
                  }),
                  !_ctx.$slots.input ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$2, {
                    key: 0,
                    type: _ctx.type ?? "text",
                    name: _ctx.name,
                    invalid: !!_ctx.error,
                    readonly: _ctx.readonly,
                    disabled: _ctx.disabled,
                    class: ["transition-all duration-200 ease-in", [inputClass.value, "w-full"]],
                    "model-value": props.modelValue,
                    required: _ctx.required,
                    "onUpdate:modelValue": onInput,
                    onFocus: handleFocus,
                    onBlur: handleBlur
                  }, null, 8, ["type", "name", "invalid", "readonly", "disabled", "class", "model-value", "required"])) : vueExports.createCommentVNode("", true)
                ], 64)),
                _ctx.clearable && props.modelValue && !props.disabled ? (vueExports.openBlock(), vueExports.createBlock("span", {
                  key: 2,
                  type: "button",
                  class: "absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer",
                  onClick: clearInput
                }, [
                  vueExports.createVNode(vueExports.unref(IconXCircle))
                ])) : vueExports.createCommentVNode("", true)
              ]),
              vueExports.createVNode("label", {
                for: _ctx.name,
                class: ["text-additional dark:text-surface-400 pointer-events-none absolute top-[14px] left-[15px] transition-all duration-200", {
                  "text-complimentary-reg !top-[9px] left-[12px]": isFocused.value || !!props.modelValue
                }]
              }, [
                vueExports.createTextVNode(vueExports.toDisplayString(_ctx.label) + " ", 1),
                _ctx.required ? (vueExports.openBlock(), vueExports.createBlock("span", {
                  key: 0,
                  class: "text-marker"
                }, "*")) : vueExports.createCommentVNode("", true)
              ], 10, ["for"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/floating-input/VFloatingInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  IconXCircle as I,
  _sfc_main as _
};
