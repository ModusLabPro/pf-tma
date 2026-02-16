import { v as vueExports, s as serverRenderer_cjs_prodExports } from "../ssr.js";
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "VShare",
  __ssrInlineRender: true,
  props: {
    url: {},
    title: { default: () => void 0 },
    description: { default: () => void 0 }
  },
  setup(__props, { expose: __expose }) {
    const btnRef = vueExports.useTemplateRef("btnRef");
    const shareInstance = vueExports.shallowRef();
    const click = (event) => {
      if (shareInstance.value) {
        shareInstance.value._onMoreClick(event);
      }
    };
    __expose({
      click
    });
    vueExports.onMounted(() => {
      shareInstance.value = Ya.share2(btnRef.value, {
        content: {
          url: __props.url,
          title: __props.title,
          description: __props.description
        },
        theme: {
          limit: 0,
          moreButtonType: "short",
          services: "whatsapp,vkontakte,telegram",
          bare: false
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        ref_key: "btnRef",
        ref: btnRef,
        class: "share-btn"
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/share/VShare.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
