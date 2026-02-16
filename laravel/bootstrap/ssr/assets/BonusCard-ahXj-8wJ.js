import { v as vueExports, s as serverRenderer_cjs_prodExports, l as link_default, m as IconCaretRight } from "../ssr.js";
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "BonusCard",
  __ssrInlineRender: true,
  props: {
    cardNumber: {},
    cardLevel: {},
    cashback: {},
    cardBalance: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "bg-default rounded-20 p-4 text-white" }, _attrs))}><h4 class="text-small-medium">Бонусная карта</h4><dl class="mt-6 space-y-2"><div class="text-subsidiary-reg sm:text-mob-small-reg flex justify-between"><dt class="text-full">Номер бонусной карты</dt><dd>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.cardNumber)}</dd></div><div class="text-subsidiary-reg sm:text-mob-small-reg flex justify-between"><dt class="text-full">Уровень карты</dt><dd>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.cardLevel)}</dd></div><div class="text-subsidiary-reg sm:text-mob-small-reg flex justify-between"><dt class="text-full">CASHBACK</dt><dd class="text-mob-small-bold">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.cashback)}</dd></div><div class="text-subsidiary-reg sm:text-mob-small-reg flex items-center justify-between"><dt class="text-full">Баланс бонусов</dt><dd class="text-default-bold sm:text-heavy-bold">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.cardBalance)} бонусов</dd></div></dl><div class="text-subsidiary-medium mt-6">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
        class: "flex items-center justify-end gap-2 text-right",
        href: "/page/privilege-program"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>Подробней о бонусной программе</span>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
              width: "16px",
              height: "16px"
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode("span", null, "Подробней о бонусной программе"),
              vueExports.createVNode(vueExports.unref(IconCaretRight), {
                width: "16px",
                height: "16px"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/widgets/bonus-card/ui/BonusCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
