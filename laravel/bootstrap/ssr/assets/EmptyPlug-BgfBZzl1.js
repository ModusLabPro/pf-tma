import { v as vueExports, s as serverRenderer_cjs_prodExports, _ as _sfc_main$1, l as link_default, a as VButton } from "../ssr.js";
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "EmptyPlug",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "bg-light-gray max-w-300 rounded-[40px]" }, _attrs))}><div class="flex flex-col items-center gap-8 px-4 py-6 md:gap-15 lg:flex-row lg:justify-center lg:px-48">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
        src: "/images/test-images/image_exclamation.webp",
        alt: "восклицание",
        class: "-mt-15 max-w-[120px] lg:max-w-[200px]"
      }, null, _parent));
      _push(`<div class="flex flex-col justify-between gap-8 xl:max-w-[540px]"><p class="text-mob-small-medium md:text-heavy-medium max-md:text-center"> Здесь пока ничего нет, но скоро будет! <br> Мы уже бежим за новыми порциями контента </p>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
        href: _ctx.route("main-page")
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), { label: "На главную" }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(VButton), { label: "На главную" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/empty-plug/EmptyPlug.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
