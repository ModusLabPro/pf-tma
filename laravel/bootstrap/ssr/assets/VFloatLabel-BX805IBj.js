import { v as vueExports, s as serverRenderer_cjs_prodExports, t as _export_sfc } from "../ssr.js";
import FloatLabel from "primevue/floatlabel";
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "VFloatLabel",
  __ssrInlineRender: true,
  props: {
    label: {},
    required: { type: Boolean },
    dt: {},
    pt: {},
    ptOptions: {},
    unstyled: { type: Boolean },
    variant: { default: "in" }
  },
  setup(__props) {
    const props = vueExports.createPropsRestProxy(__props, ["variant", "label"]);
    const inputId = vueExports.useId();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(FloatLabel), vueExports.mergeProps(props, {
        variant: _ctx.variant,
        class: "v-float-label"
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", { labelId: vueExports.unref(inputId) }, null, _push2, _parent2, _scopeId);
            _push2(`<label${serverRenderer_cjs_prodExports.ssrRenderAttr("for", vueExports.unref(inputId))} data-v-0399de32${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.label)} `);
            if (props.required) {
              _push2(`<span class="text-marker" data-v-0399de32${_scopeId}>*</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</label>`);
          } else {
            return [
              vueExports.renderSlot(_ctx.$slots, "default", { labelId: vueExports.unref(inputId) }, void 0, true),
              vueExports.createVNode("label", { for: vueExports.unref(inputId) }, [
                vueExports.createTextVNode(vueExports.toDisplayString(_ctx.label) + " ", 1),
                props.required ? (vueExports.openBlock(), vueExports.createBlock("span", {
                  key: 0,
                  class: "text-marker"
                }, "*")) : vueExports.createCommentVNode("", true)
              ], 8, ["for"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/float-label/VFloatLabel.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const VFloatLabel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0399de32"]]);
export {
  VFloatLabel as V
};
