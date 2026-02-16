import { v as vueExports, s as serverRenderer_cjs_prodExports, S as _sfc_main$2, c as useForm, e as _sfc_main$3, f as _sfc_main$4, a as VButton, X as IconFire } from "../ssr.js";
import { useI18n } from "vue-i18n";
import { Form } from "@primevue/forms";
import { I as IconCheckCircleGreen } from "./IconCheckCircleGreen-DQz2sOR5.js";
import { _ as _sfc_main$5 } from "./ToggleSwitch-kQXei-3B.js";
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "OrderDetail",
  __ssrInlineRender: true,
  props: {
    orderDetail: {},
    isDeliveryPriceEnabled: { type: Boolean },
    isIndividual: { type: Boolean, default: false }
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i;
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "rounded-20 bg-light-gray p-4" }, _attrs))}><h4 class="text-small-medium sm:text-default-medium mb-4 sm:mb-6">Детали заказа</h4><dl class="border-b-filling grid grid-cols-[minmax(0,140px)_1fr] items-center gap-2 border-b border-solid pb-2"><dt class="text-subsidiary-medium text-subsidiary py-0.5">Сумма заказа:</dt><dd><span class="inline-flex items-center gap-2"><span class="text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate((_a = _ctx.orderDetail) == null ? void 0 : _a.cart_sum)} руб</span>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
        value: "Итоговая сумма заказа формируется после сборки заказа на складе",
        "hide-delay": 5e3
      }, null, _parent));
      _push(`</span></dd><dt class="text-subsidiary-medium text-subsidiary py-0.5">Вес заказа:</dt><dd><span class="inline-flex items-center gap-2"><span class="text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate((_b = _ctx.orderDetail) == null ? void 0 : _b.weight)} кг</span>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), { value: "Итоговый вес заказа формируется после сборки заказа на складе" }, null, _parent));
      _push(`</span></dd></dl><dl class="border-b-filling grid grid-cols-[minmax(0,140px)_1fr] items-start gap-2 border-b border-solid py-2"><dt class="text-subsidiary-medium text-subsidiary py-0.5">Доставка:</dt><dd class="text-mob-small-medium">`);
      if (!_ctx.isIndividual) {
        _push(`<span class="inline-flex items-center gap-2">`);
        if (_ctx.isDeliveryPriceEnabled) {
          _push(`<!--[-->`);
          if (!((_c = _ctx.orderDetail) == null ? void 0 : _c.delivery_price)) {
            _push(`<span class="text-ready-green">Бесплатно</span>`);
          } else {
            _push(`<!--[-->${serverRenderer_cjs_prodExports.ssrInterpolate((_d = _ctx.orderDetail) == null ? void 0 : _d.delivery_price)} руб <!--]-->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<span class="text-additional">нет данных</span>`);
        }
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<span class="flex items-start gap-1"><span class="block w-min">Рассчитывается индивидуально</span>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" }, null, _parent));
        _push(`</span>`);
      }
      _push(`</dd>`);
      if ((_e = _ctx.orderDetail) == null ? void 0 : _e.personal_discount) {
        _push(`<!--[--><dt class="text-subsidiary-medium text-subsidiary py-0.5">Моя скидка:</dt><dd class="text-mob-small-medium">- ${serverRenderer_cjs_prodExports.ssrInterpolate((_f = _ctx.orderDetail) == null ? void 0 : _f.personal_discount)} руб</dd><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if ((_g = _ctx.orderDetail) == null ? void 0 : _g.second_item_discount) {
        _push(`<!--[--><dt class="text-subsidiary-medium text-subsidiary py-0.5">Скидка на второй товар:</dt><dd class="text-mob-small-medium">- ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.orderDetail.second_item_discount)} руб</dd><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if ((_h = _ctx.orderDetail) == null ? void 0 : _h.promocode_discount) {
        _push(`<!--[--><dt class="text-subsidiary-medium text-subsidiary py-0.5">Промокод:</dt><dd class="text-mob-small-medium">- ${serverRenderer_cjs_prodExports.ssrInterpolate((_i = _ctx.orderDetail) == null ? void 0 : _i.promocode_discount)} руб</dd><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</dl><div class="my-6 flex flex-col gap-0.5">`);
      if (_ctx.orderDetail) {
        _push(`<span class="text-default-medium flex items-center gap-2"><span>Итого:</span><span>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("cart.goods", _ctx.orderDetail.quantity))} на ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.orderDetail.price_final)} руб</span></span>`);
      } else {
        _push(`<!---->`);
      }
      if (!_ctx.isDeliveryPriceEnabled || _ctx.isIndividual) {
        _push(`<span class="text-subsidiary-medium flex items-center gap-1 text-[#867F7F]"> Стоимость без учета доставки`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" }, null, _parent));
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      _push(`</section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/entities/order/ui/OrderDetail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ApplyPromocode",
  __ssrInlineRender: true,
  props: {
    bonusSpentLimit: {}
  },
  emits: ["promocode-applied", "bonuses-toggled"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const emit = __emit;
    const pageRoute = route();
    const promocodeForm = useForm({
      promocode: pageRoute.queryParams.promocode
    });
    if (pageRoute.queryParams.promocode) {
      emit("promocode-applied", pageRoute.queryParams.promocode);
    }
    const applyPromocode = () => {
      promocodeForm.post(
        route("order.promo.check", {
          promo: promocodeForm.promocode
        }),
        {
          onSuccess() {
            emit("promocode-applied", promocodeForm.promocode);
          },
          preserveState: true
        }
      );
    };
    const useExpiringBonuses = vueExports.ref(false);
    vueExports.watch(useExpiringBonuses, (newValue) => {
      emit("bonuses-toggled", newValue);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "rounded-20 bg-light-gray p-4" }, _attrs))}><header class="mb-4 sm:mb-6"><h4 class="text-small-medium sm:text-default-medium mb-2">Промокод</h4></header>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Form), { onSubmit: applyPromocode }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
              error: _ctx.$page.props.errors.promocode
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex gap-2"${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                    modelValue: vueExports.unref(promocodeForm).promocode,
                    "onUpdate:modelValue": ($event) => vueExports.unref(promocodeForm).promocode = $event,
                    name: "promocode",
                    placeholder: "Промокод",
                    invalid: !!_ctx.$page.props.errors.promocode,
                    class: ["min-w-0 grow shadow-none", [
                      (_ctx.$page.props.flash.success === "Промокод применён" || vueExports.unref(pageRoute).queryParams.promocode) && !!vueExports.unref(promocodeForm).promocode ? "border-text bg-transparent!" : "border-white bg-white"
                    ]],
                    readonly: (_ctx.$page.props.flash.success === "Промокод применён" || !!vueExports.unref(pageRoute).queryParams.promocode) && !!vueExports.unref(promocodeForm).promocode
                  }, null, _parent3, _scopeId2));
                  if (_ctx.$page.props.flash.success !== "Промокод применён" && !vueExports.unref(pageRoute).queryParams.promocode) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                      variant: "outline",
                      label: "Применить",
                      class: "w-full max-w-[160px] shrink-0"
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<div class="bg-filling text-mob-small-reg flex items-center gap-2 rounded-[50px] px-6 py-[14px]"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCheckCircleGreen), null, null, _parent3, _scopeId2));
                    _push3(` Применен </div>`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    vueExports.createVNode("div", { class: "flex gap-2" }, [
                      vueExports.createVNode(_sfc_main$4, {
                        modelValue: vueExports.unref(promocodeForm).promocode,
                        "onUpdate:modelValue": ($event) => vueExports.unref(promocodeForm).promocode = $event,
                        name: "promocode",
                        placeholder: "Промокод",
                        invalid: !!_ctx.$page.props.errors.promocode,
                        class: ["min-w-0 grow shadow-none", [
                          (_ctx.$page.props.flash.success === "Промокод применён" || vueExports.unref(pageRoute).queryParams.promocode) && !!vueExports.unref(promocodeForm).promocode ? "border-text bg-transparent!" : "border-white bg-white"
                        ]],
                        readonly: (_ctx.$page.props.flash.success === "Промокод применён" || !!vueExports.unref(pageRoute).queryParams.promocode) && !!vueExports.unref(promocodeForm).promocode
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid", "class", "readonly"]),
                      _ctx.$page.props.flash.success !== "Промокод применён" && !vueExports.unref(pageRoute).queryParams.promocode ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(VButton), {
                        key: 0,
                        variant: "outline",
                        label: "Применить",
                        class: "w-full max-w-[160px] shrink-0"
                      })) : (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 1,
                        class: "bg-filling text-mob-small-reg flex items-center gap-2 rounded-[50px] px-6 py-[14px]"
                      }, [
                        vueExports.createVNode(vueExports.unref(IconCheckCircleGreen)),
                        vueExports.createTextVNode(" Применен ")
                      ]))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                error: _ctx.$page.props.errors.promocode
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode("div", { class: "flex gap-2" }, [
                    vueExports.createVNode(_sfc_main$4, {
                      modelValue: vueExports.unref(promocodeForm).promocode,
                      "onUpdate:modelValue": ($event) => vueExports.unref(promocodeForm).promocode = $event,
                      name: "promocode",
                      placeholder: "Промокод",
                      invalid: !!_ctx.$page.props.errors.promocode,
                      class: ["min-w-0 grow shadow-none", [
                        (_ctx.$page.props.flash.success === "Промокод применён" || vueExports.unref(pageRoute).queryParams.promocode) && !!vueExports.unref(promocodeForm).promocode ? "border-text bg-transparent!" : "border-white bg-white"
                      ]],
                      readonly: (_ctx.$page.props.flash.success === "Промокод применён" || !!vueExports.unref(pageRoute).queryParams.promocode) && !!vueExports.unref(promocodeForm).promocode
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid", "class", "readonly"]),
                    _ctx.$page.props.flash.success !== "Промокод применён" && !vueExports.unref(pageRoute).queryParams.promocode ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(VButton), {
                      key: 0,
                      variant: "outline",
                      label: "Применить",
                      class: "w-full max-w-[160px] shrink-0"
                    })) : (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 1,
                      class: "bg-filling text-mob-small-reg flex items-center gap-2 rounded-[50px] px-6 py-[14px]"
                    }, [
                      vueExports.createVNode(vueExports.unref(IconCheckCircleGreen)),
                      vueExports.createTextVNode(" Применен ")
                    ]))
                  ])
                ]),
                _: 1
              }, 8, ["error"])
            ];
          }
        }),
        _: 1
      }, _parent));
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "usePointsExpire", {}, () => {
        var _a;
        if (_ctx.bonusSpentLimit && !!((_a = _ctx.$page.props.auth) == null ? void 0 : _a.user)) {
          _push(`<div class="mt-6 flex items-center gap-2">`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconFire), { class: "text-delete h-6 w-6" }, null, _parent));
          _push(`<div><p class="text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("checkout.takePoints"))} <span class="text-delete">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("checkout.takePointsValue", _ctx.bonusSpentLimit))}</span></p><p class="text-subsidiary-reg text-additional">Баллы действуют до ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.$page.props.expireDate)}</p></div>`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, {
            modelValue: useExpiringBonuses.value,
            "onUpdate:modelValue": ($event) => useExpiringBonuses.value = $event,
            name: "use_expiring_bonuses",
            class: "shrink-0"
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/features/applyPromocode/ui/ApplyPromocode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
