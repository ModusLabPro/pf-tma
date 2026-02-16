import { v as vueExports, s as serverRenderer_cjs_prodExports, $ as ptViewMerge } from "../ssr.js";
import Tab from "primevue/tab";
import TabList from "primevue/tablist";
import TabPanel from "primevue/tabpanel";
import TabPanels from "primevue/tabpanels";
import Tabs from "primevue/tabs";
const _sfc_main$4 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Tab",
  __ssrInlineRender: true,
  setup(__props) {
    const props = __props;
    const theme = vueExports.ref({
      root: `flex-shrink-0 cursor-pointer select-none relative whitespace-nowrap py-2 px-3 md:px-4 lg:min-w-[210px] md:px-[1.125rem]
        text-mob-small-reg
        text-surface-500 dark:text-surface-400
        transition-all duration-250 -mb-px
        rounded-20
        not-p-active:enabled:hover:text-surface-700 dark:not-p-active:enabled:hover:text-surface-0
        p-active:bg-default p-active:text-white
        disabled:pointer-events-none disabled:opacity-60
        focus-visible:z-10 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-primary`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Tab), vueExports.mergeProps({
        value: props.value,
        unstyled: "",
        pt: theme.value,
        ptOptions: {
          mergeProps: vueExports.unref(ptViewMerge)
        }
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vueExports.renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/volt/Tab.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const navButton = `!absolute flex-shrink-0 top-0 z-20 h-full flex items-center justify-center cursor-pointer
        bg-surface-0 dark:bg-surface-900 text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-0 w-10
        shadow-[0px_0px_10px_50px_rgba(255,255,255,0.6)] dark:shadow-[0px_0px_10px_50px] dark:shadow-surface-900/50
        focus-visible:z-10 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-primary
        transition-colors duration-200`;
const _sfc_main$3 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "TabList",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = vueExports.ref({
      root: `flex relative`,
      prevButton: navButton + ` start-0`,
      nextButton: navButton + ` end-0`,
      content: `flex-grow
        p-scrollable:overflow-x-auto p-scrollable:overflow-y-hidden p-scrollable:overscroll-y-contain p-scrollable:overscroll-x-auto
        scroll-smooth [scrollbar-width:none]`,
      tabList: `relative flex justify-between bg-filling rounded-[24px] dark:bg-surface-900 py-1.5 px-2 dark:border-surface-700
        p-scrollable:overflow-hidden`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(TabList), vueExports.mergeProps({
        unstyled: "",
        pt: theme.value,
        ptOptions: {
          mergeProps: vueExports.unref(ptViewMerge)
        }
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vueExports.renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/volt/TabList.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "TabPanel",
  __ssrInlineRender: true,
  setup(__props) {
    const props = __props;
    const theme = vueExports.ref({
      root: ``
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(TabPanel), vueExports.mergeProps({
        value: props.value,
        unstyled: "",
        pt: theme.value,
        ptOptions: {
          mergeProps: vueExports.unref(ptViewMerge)
        }
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vueExports.renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/volt/TabPanel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "TabPanels",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = vueExports.ref({
      root: `bg-surface-0 dark:bg-surface-900 text-surface-700 dark:text-surface-0
        pt-6 pb-[1.125rem]  outline-none`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(TabPanels), vueExports.mergeProps({
        unstyled: "",
        pt: theme.value,
        ptOptions: {
          mergeProps: vueExports.unref(ptViewMerge)
        }
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vueExports.renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/volt/TabPanels.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  setup(__props) {
    const props = __props;
    const theme = vueExports.ref({
      root: `flex flex-col`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Tabs), vueExports.mergeProps({
        value: props.value,
        unstyled: "",
        pt: theme.value,
        ptOptions: {
          mergeProps: vueExports.unref(ptViewMerge)
        }
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              vueExports.renderSlot(_ctx.$slots, "default")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/volt/Tabs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$3 as a,
  _sfc_main$4 as b,
  _sfc_main$1 as c,
  _sfc_main$2 as d
};
