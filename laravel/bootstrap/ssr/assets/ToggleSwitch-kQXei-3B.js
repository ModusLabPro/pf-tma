import { v as vueExports, s as serverRenderer_cjs_prodExports, $ as ptViewMerge } from "../ssr.js";
import ToggleSwitch from "primevue/toggleswitch";
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ToggleSwitch",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = vueExports.ref({
      root: `inline-block w-13 h-8`,
      input: `peer cursor-pointer disabled:cursor-default appearance-none absolute top-0 start-0 w-full h-full m-0 p-0 opacity-0 z-10 rounded-[30px]`,
      slider: `inline-block w-full h-full rounded-[30px] shadow-[0_1px_2px_0_rgba(18,18,23,0.05)]
        bg-surface-300 dark:bg-surface-700
        border border-transparent
        transition-colors duration-200
        peer-enabled:peer-hover:bg-surface-400 dark:peer-enabled:peer-hover:bg-surface-600
        p-checked:bg-text peer-enabled:peer-hover:p-checked:bg-primary-emphasis
        p-invalid:border-red-400 dark:p-invalid:border-red-300
        p-disabled:bg-surface-200 dark:p-disabled:bg-surface-600
        peer-focus-visible:outline peer-focus-visible:outline-1 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary`,
      handle: `absolute top-1/2 flex justify-center items-center
        bg-surface-0 dark:bg-surface-400
        text-surface-500 dark:text-surface-900
        w-7 h-7 start-1 -mt-3.5
         rounded-full
        transition-[background,color,left] duration-200
        p-checked:bg-surface-0 dark:p-checked:bg-surface-900 p-checked:text-primary p-checked:start-5
        p-disabled:bg-surface-700 dark:p-disabled:bg-surface-900
}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ToggleSwitch), vueExports.mergeProps({
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/volt/ToggleSwitch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
