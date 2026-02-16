import { v as vueExports, s as serverRenderer_cjs_prodExports, $ as ptViewMerge } from "../ssr.js";
import ProgressBar from "primevue/progressbar";
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ProgressBar",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = vueExports.ref({
      root: `relative overflow-hidden h-2 bg-filling dark:bg-surface-700 rounded-20`,
      value: `m-0 bg-primary
        p-determinate:h-full p-determinate:w-0 p-determinate:absolute p-determinate:flex p-determinate:items-center p-determinate:justify-center
        p-determinate:overflow-hidden p-determinate:transition-[width] p-determinate:duration-1000 p-determinate:ease-in-out
        p-indeterminate:before:content-[''] p-indeterminate:before:absolute p-indeterminate:before:bg-inherit p-indeterminate:before:top-0 p-indeterminate:before:start-0 p-indeterminate:before:bottom-0 p-indeterminate:before:will-change-[inset-inline-start,inset-inline-end]
        p-indeterminate:before:animate-[p-progressbar-indeterminate-anim_2.1s_cubic-bezier(0.65,0.815,0.735,0.395)_infinite]
        p-indeterminate:after:content-[''] p-indeterminate:after:absolute p-indeterminate:after:bg-inherit p-indeterminate:after:top-0 p-indeterminate:after:start-0 p-indeterminate:after:bottom-0 p-indeterminate:after:will-change-[inset-inline-start,inset-inline-end]
        p-indeterminate:after:animate-[p-progressbar-indeterminate-anim-short_2.1s_cubic-bezier(0.165,0.84,0.44,1)_infinite]
        p-indeterminate:after:animate-delay-[1.15s] rounded-20`,
      label: `text-primary-contrast text-xs font-semibold
        p-determinate:inline-flex`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ProgressBar), vueExports.mergeProps({
        unstyled: "",
        pt: theme.value,
        ptOptions: {
          mergeProps: vueExports.unref(ptViewMerge)
        }
      }, _attrs), vueExports.createSlots({ _: 2 }, [
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/volt/ProgressBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
