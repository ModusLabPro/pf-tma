import { v as vueExports, s as serverRenderer_cjs_prodExports, $ as ptViewMerge, u as useScreenSize, ad as IconMapPin, ae as IconClockFilled, af as IconTruckFilled, Z as IconClockOutline, t as _export_sfc } from "../ssr.js";
import Accordion from "primevue/accordion";
import AccordionContent from "primevue/accordioncontent";
import ChevronDownIcon from "@primevue/icons/chevrondown";
import ChevronUpIcon from "@primevue/icons/chevronup";
import AccordionHeader from "primevue/accordionheader";
import AccordionPanel from "primevue/accordionpanel";
import { _ as _sfc_main$5, a as _sfc_main$6, b as _sfc_main$7, c as _sfc_main$8, d as _sfc_main$9 } from "./Tabs-_owbj9IT.js";
const _hoisted_1$1 = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render$1(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    vueExports.createStaticVNode('<rect width="32" height="32" rx="8" fill="#A39874"></rect><g clip-path="url(#clip0_4115_157269)"><path d="M23.5 7.75H8.5C8.08579 7.75 7.75 8.08579 7.75 8.5V23.5C7.75 23.9142 8.08579 24.25 8.5 24.25H23.5C23.9142 24.25 24.25 23.9142 24.25 23.5V8.5C24.25 8.08579 23.9142 7.75 23.5 7.75Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5 6.25V9.25" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.5 6.25V9.25" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.75 12.25H24.25" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 17.5C16.6213 17.5 17.125 16.9963 17.125 16.375C17.125 15.7537 16.6213 15.25 16 15.25C15.3787 15.25 14.875 15.7537 14.875 16.375C14.875 16.9963 15.3787 17.5 16 17.5Z" fill="white"></path><path d="M20.125 17.5C20.7463 17.5 21.25 16.9963 21.25 16.375C21.25 15.7537 20.7463 15.25 20.125 15.25C19.5037 15.25 19 15.7537 19 16.375C19 16.9963 19.5037 17.5 20.125 17.5Z" fill="white"></path><path d="M11.875 21.25C12.4963 21.25 13 20.7463 13 20.125C13 19.5037 12.4963 19 11.875 19C11.2537 19 10.75 19.5037 10.75 20.125C10.75 20.7463 11.2537 21.25 11.875 21.25Z" fill="white"></path><path d="M16 21.25C16.6213 21.25 17.125 20.7463 17.125 20.125C17.125 19.5037 16.6213 19 16 19C15.3787 19 14.875 19.5037 14.875 20.125C14.875 20.7463 15.3787 21.25 16 21.25Z" fill="white"></path><path d="M20.125 21.25C20.7463 21.25 21.25 20.7463 21.25 20.125C21.25 19.5037 20.7463 19 20.125 19C19.5037 19 19 19.5037 19 20.125C19 20.7463 19.5037 21.25 20.125 21.25Z" fill="white"></path></g><defs><clipPath id="clip0_4115_157269"><rect width="24" height="24" fill="white" transform="translate(4 4)"></rect></clipPath></defs>', 3)
  ]));
}
const IconCalendarFilled = { render: render$1 };
const _hoisted_1 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    vueExports.createStaticVNode('<g clip-path="url(#clip0_4115_157324)"><path d="M2.5 3.5V11.5C2.5 11.7652 2.60536 12.0196 2.79289 12.2071C2.98043 12.3946 3.23478 12.5 3.5 12.5H13.5C13.6326 12.5 13.7598 12.4473 13.8536 12.3536C13.9473 12.2598 14 12.1326 14 12V5C14 4.86739 13.9473 4.74021 13.8536 4.64645C13.7598 4.55268 13.6326 4.5 13.5 4.5H3.5C3.23478 4.5 2.98043 4.39464 2.79289 4.20711C2.60536 4.01957 2.5 3.76522 2.5 3.5ZM2.5 3.5C2.5 3.23478 2.60536 2.98043 2.79289 2.79289C2.98043 2.60536 3.23478 2.5 3.5 2.5H12" stroke="#02283F" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.25 9C11.6642 9 12 8.66421 12 8.25C12 7.83579 11.6642 7.5 11.25 7.5C10.8358 7.5 10.5 7.83579 10.5 8.25C10.5 8.66421 10.8358 9 11.25 9Z" fill="#02283F"></path></g><defs><clipPath id="clip0_4115_157324"><rect width="16" height="16" fill="white"></rect></clipPath></defs>', 2)
  ]));
}
const IconWalletOutline = { render };
const _sfc_main$4 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "Accordion",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = vueExports.ref({
      root: `mb-10`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Accordion), vueExports.mergeProps({
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/volt/Accordion.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "AccordionContent",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = vueExports.ref({
      root: `flex flex-col -mt-5 mb-1`,
      content: `bg-light-gray pt-6 rounded-b-xl dark:bg-surface-900 text-surface-700 dark:text-surface-0 px-[1.125rem] pb-[1.125rem]`,
      transition: {
        enterFromClass: "max-h-0 opacity-0",
        enterActiveClass: "overflow-hidden transition-all duration-400 ease-in",
        enterToClass: "max-h-[500px] opacity-100",
        leaveFromClass: "max-h-[500px] opacity-100",
        leaveActiveClass: "overflow-hidden transition-all duration-400 ease-in",
        leaveToClass: "max-h-0 opacity-0"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(AccordionContent), vueExports.mergeProps({
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/volt/AccordionContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "AccordionHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = vueExports.ref({
      root: `cursor-pointer disabled:pointer-events-none z-10 disabled:opacity-60 flex items-center justify-between py-1 px-3 font-semibold
        bg-filling rounded-xl dark:bg-surface-900
        text-text dark:text-surface-400
        hover:text-default dark:hover:text-surface-0
        p-active:bg-default p-active:text-white
        transition-colors duration-200
        focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-[-1px] focus-visible:outline-primary mb-1`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(AccordionHeader), vueExports.mergeProps({
        unstyled: "",
        pt: theme.value,
        ptOptions: {
          mergeProps: vueExports.unref(ptViewMerge)
        }
      }, _attrs), {
        toggleicon: vueExports.withCtx(({ active }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (active) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ChevronUpIcon), null, null, _parent2, _scopeId));
            } else {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ChevronDownIcon), null, null, _parent2, _scopeId));
            }
          } else {
            return [
              active ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ChevronUpIcon), { key: 0 })) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ChevronDownIcon), { key: 1 }))
            ];
          }
        }),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/volt/AccordionHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "AccordionPanel",
  __ssrInlineRender: true,
  setup(__props) {
    const props = __props;
    const theme = vueExports.ref({
      root: `flex flex-col gap-2`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(AccordionPanel), vueExports.mergeProps({
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/volt/AccordionPanel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ProductDelivery",
  __ssrInlineRender: true,
  setup(__props) {
    const { isMobile, isDesktop } = useScreenSize();
    const menuItems = [
      { label: "Москва" },
      { label: "Санкт-Петербург" },
      { label: "Сочи" },
      { label: "Нижний Новгород" },
      { label: "Доставка по России" }
    ];
    const openIndex = vueExports.ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      if (vueExports.unref(isDesktop)) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, vueExports.mergeProps({ value: "0" }, _attrs), {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, null, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(menuItems, (item, index) => {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
                        key: index,
                        value: String(index)
                      }, {
                        default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="flex items-center justify-center gap-1.5" data-v-b12bf230${_scopeId3}>`);
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconMapPin), null, null, _parent4, _scopeId3));
                            _push4(`<p data-v-b12bf230${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.label)}</p></div>`);
                          } else {
                            return [
                              vueExports.createVNode("div", { class: "flex items-center justify-center gap-1.5" }, [
                                vueExports.createVNode(vueExports.unref(IconMapPin)),
                                vueExports.createVNode("p", null, vueExports.toDisplayString(item.label), 1)
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(menuItems, (item, index) => {
                        return vueExports.createVNode(_sfc_main$7, {
                          key: index,
                          value: String(index)
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode("div", { class: "flex items-center justify-center gap-1.5" }, [
                              vueExports.createVNode(vueExports.unref(IconMapPin)),
                              vueExports.createVNode("p", null, vueExports.toDisplayString(item.label), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 64))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$8, null, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, { value: "0" }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-text flex gap-8" data-v-b12bf230${_scopeId3}><div class="flex-1 basis-1/2" data-v-b12bf230${_scopeId3}><h4 class="text-default-medium mb-3" data-v-b12bf230${_scopeId3}>График приема заказов</h4><div class="grid grid-cols-2 gap-2" data-v-b12bf230${_scopeId3}><div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230${_scopeId3}><div data-v-b12bf230${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockFilled), null, null, _parent4, _scopeId3));
                          _push4(`</div><div data-v-b12bf230${_scopeId3}><h4 class="text-small-medium" data-v-b12bf230${_scopeId3}>Прием заказов</h4><div class="mt-2 flex flex-col gap-0.5" data-v-b12bf230${_scopeId3}><p class="text-mob-small" data-v-b12bf230${_scopeId3}>с 10:00 до 20:00</p><p class="text-complimentary-reg text-subsidiary" data-v-b12bf230${_scopeId3}>Ежедневно</p><p class="text-subsidiary-reg" data-v-b12bf230${_scopeId3}>Через сайт - круглосуточно</p></div></div></div><div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230${_scopeId3}><div data-v-b12bf230${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconTruckFilled), null, null, _parent4, _scopeId3));
                          _push4(`</div><div data-v-b12bf230${_scopeId3}><h4 class="text-small-medium" data-v-b12bf230${_scopeId3}>Оформление заказов</h4><div class="mt-2" data-v-b12bf230${_scopeId3}><a href="tel:+7 (499) 938-90-10" class="text-mob-small-bold" data-v-b12bf230${_scopeId3}>+7 (499) 938-90-10</a><p class="text-mob-small" data-v-b12bf230${_scopeId3}>с 10:00 до 20:00</p><p class="text-complimentary-reg text-subsidiary" data-v-b12bf230${_scopeId3}>Ежедневно</p></div></div></div><div class="bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230${_scopeId3}><div data-v-b12bf230${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCalendarFilled), null, null, _parent4, _scopeId3));
                          _push4(`</div><div data-v-b12bf230${_scopeId3}><h4 class="text-small-medium" data-v-b12bf230${_scopeId3}>Сроки доставки</h4><div class="mt-2" data-v-b12bf230${_scopeId3}><div class="border-b-filling grid grid-cols-2 gap-4 border-b pb-3" data-v-b12bf230${_scopeId3}><p class="text-additional text-subsidiary-medium" data-v-b12bf230${_scopeId3}> Доставка: <span class="text-mob-small-medium text-text" data-v-b12bf230${_scopeId3}>на следующий день</span></p><p class="text-additional text-subsidiary-medium" data-v-b12bf230${_scopeId3}> Самовывоз: <span class="text-mob-small-medium text-text" data-v-b12bf230${_scopeId3}>день в день</span></p></div><p class="text-additional text-subsidiary-medium mt-3" data-v-b12bf230${_scopeId3}>Оформление заказа после 19:00</p><div class="mt-2 grid grid-cols-2 gap-4" data-v-b12bf230${_scopeId3}><p class="text-additional text-subsidiary-medium basis-1/2" data-v-b12bf230${_scopeId3}> Доставка: <span class="text-mob-small-medium text-text" data-v-b12bf230${_scopeId3}>через день</span></p><p class="text-additional text-subsidiary-medium shrink-0 basis-1/2" data-v-b12bf230${_scopeId3}> Самовывоз: <span class="text-mob-small-medium text-text" data-v-b12bf230${_scopeId3}>на следующий день</span></p></div></div></div></div></div></div><div class="flex-1 basis-1/2" data-v-b12bf230${_scopeId3}><h4 class="text-default-medium text-text mb-3" data-v-b12bf230${_scopeId3}>Стоимость доставки</h4>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, { value: "0" }, {
                            default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { value: "0" }, {
                                  default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex flex-col items-start justify-items-start" data-v-b12bf230${_scopeId6}><p class="text-small-medium" data-v-b12bf230${_scopeId6}>1 зона</p><p class="text-complimentary-reg mt-0.5" data-v-b12bf230${_scopeId6}>в пределах МКАД</p></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                                vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "в пределах МКАД")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex justify-between" data-v-b12bf230${_scopeId6}><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), {
                                              width: "20px",
                                              height: "20px"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Интервалы доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><p class="text-mob-small" data-v-b12bf230${_scopeId6}>Ежедневно с 09:00 до 21:00</p><p class="text-complimentary-reg text-subsidiary" data-v-b12bf230${_scopeId6}>любое 4-х часовое окно</p></div></div></div><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconWalletOutline), { class: "mt-0.5" }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Стоимость доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><div class="text-mob-small flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 8000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>Бесплатно</div></div><div class="text-mob-small mt-2 flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 8000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>400 руб.</div></div></div></div></div></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex justify-between" }, [
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                      width: "20px",
                                                      height: "20px"
                                                    })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 09:00 до 21:00"),
                                                      vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                                    ])
                                                  ])
                                                ]),
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 8000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                      ]),
                                                      vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 8000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "400 руб.")
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "в пределах МКАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 09:00 до 21:00"),
                                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "400 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { value: "1" }, {
                                  default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex flex-col items-start justify-items-start" data-v-b12bf230${_scopeId6}><p class="text-small-medium" data-v-b12bf230${_scopeId6}>2 зона</p><p class="text-complimentary-reg mt-0.5" data-v-b12bf230${_scopeId6}>МКАД до 20 км</p></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                                vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД до 20 км")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex justify-between" data-v-b12bf230${_scopeId6}><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), {
                                              width: "20px",
                                              height: "20px"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Интервалы доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><p class="text-mob-small" data-v-b12bf230${_scopeId6}>Ежедневно с 10:00 до 21:00</p></div></div></div><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconWalletOutline), { class: "mt-0.5" }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Стоимость доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><div class="text-mob-small flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 8000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>Бесплатно</div></div><div class="text-mob-small mt-2 flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 8000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>500 руб.</div></div></div></div></div></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex justify-between" }, [
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                      width: "20px",
                                                      height: "20px"
                                                    })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 10:00 до 21:00")
                                                    ])
                                                  ])
                                                ]),
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 8000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                      ]),
                                                      vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 8000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "500 руб.")
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД до 20 км")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 10:00 до 21:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "500 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { value: "2" }, {
                                  default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex flex-col items-start justify-items-start" data-v-b12bf230${_scopeId6}><p class="text-small-medium" data-v-b12bf230${_scopeId6}>3 зона</p><p class="text-complimentary-reg mt-0.5" data-v-b12bf230${_scopeId6}>МКАД до 30 км</p></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                                vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД до 30 км")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex justify-between" data-v-b12bf230${_scopeId6}><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), {
                                              width: "20px",
                                              height: "20px"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Интервалы доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><p class="text-mob-small" data-v-b12bf230${_scopeId6}>Ежедневно с 12:00 до 18:00</p><p class="text-complimentary-reg text-subsidiary" data-v-b12bf230${_scopeId6}>любое 4-х часовое окно</p></div></div></div><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconWalletOutline), { class: "mt-0.5" }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Стоимость доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><div class="text-mob-small flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 15000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>Бесплатно</div></div><div class="text-mob-small mt-2 flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 15000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>700 руб.</div></div></div></div></div></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex justify-between" }, [
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                      width: "20px",
                                                      height: "20px"
                                                    })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 12:00 до 18:00"),
                                                      vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                                    ])
                                                  ])
                                                ]),
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 15000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                      ]),
                                                      vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 15000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "700 руб.")
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД до 30 км")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 12:00 до 18:00"),
                                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 15000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 15000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "700 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { value: "3" }, {
                                  default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex flex-col items-start justify-items-start" data-v-b12bf230${_scopeId6}><p class="text-small-medium" data-v-b12bf230${_scopeId6}>4 зона</p><p class="text-complimentary-reg mt-0.5" data-v-b12bf230${_scopeId6}>МКАД от 30 км до 60км</p></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                                vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД от 30 км до 60км")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex justify-between" data-v-b12bf230${_scopeId6}><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), {
                                              width: "20px",
                                              height: "20px"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Интервалы доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><p class="text-mob-small" data-v-b12bf230${_scopeId6}>Ежедневно с 12:00 до 18:00</p><p class="text-complimentary-reg text-subsidiary" data-v-b12bf230${_scopeId6}>любое 4-х часовое окно</p></div></div></div><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconWalletOutline), { class: "mt-0.5" }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Стоимость доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><div class="text-mob-small flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 15000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>Бесплатно</div></div><div class="text-mob-small mt-2 flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 15000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>700 руб.</div></div></div></div></div></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex justify-between" }, [
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                      width: "20px",
                                                      height: "20px"
                                                    })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 12:00 до 18:00"),
                                                      vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                                    ])
                                                  ])
                                                ]),
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 15000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                      ]),
                                                      vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 15000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "700 руб.")
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД от 30 км до 60км")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 12:00 до 18:00"),
                                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 15000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 15000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "700 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(_sfc_main$1, { value: "0" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "в пределах МКАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 09:00 до 21:00"),
                                                  vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "400 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "1" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД до 20 км")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 10:00 до 21:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "500 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "2" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД до 30 км")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 12:00 до 18:00"),
                                                  vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 15000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 15000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "700 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "3" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД от 30 км до 60км")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 12:00 до 18:00"),
                                                  vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 15000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 15000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "700 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else {
                          return [
                            vueExports.createVNode("div", { class: "text-text flex gap-8" }, [
                              vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                                vueExports.createVNode("h4", { class: "text-default-medium mb-3" }, "График приема заказов"),
                                vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                  vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode(vueExports.unref(IconClockFilled))
                                    ]),
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode("h4", { class: "text-small-medium" }, "Прием заказов"),
                                      vueExports.createVNode("div", { class: "mt-2 flex flex-col gap-0.5" }, [
                                        vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                        vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно"),
                                        vueExports.createVNode("p", { class: "text-subsidiary-reg" }, "Через сайт - круглосуточно")
                                      ])
                                    ])
                                  ]),
                                  vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode(vueExports.unref(IconTruckFilled))
                                    ]),
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode("h4", { class: "text-small-medium" }, "Оформление заказов"),
                                      vueExports.createVNode("div", { class: "mt-2" }, [
                                        vueExports.createVNode("a", {
                                          href: "tel:+7 (499) 938-90-10",
                                          class: "text-mob-small-bold"
                                        }, "+7 (499) 938-90-10"),
                                        vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                        vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно")
                                      ])
                                    ])
                                  ]),
                                  vueExports.createVNode("div", { class: "bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode(vueExports.unref(IconCalendarFilled))
                                    ]),
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode("h4", { class: "text-small-medium" }, "Сроки доставки"),
                                      vueExports.createVNode("div", { class: "mt-2" }, [
                                        vueExports.createVNode("div", { class: "border-b-filling grid grid-cols-2 gap-4 border-b pb-3" }, [
                                          vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                            vueExports.createTextVNode(" Доставка: "),
                                            vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                          ]),
                                          vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                            vueExports.createTextVNode(" Самовывоз: "),
                                            vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "день в день")
                                          ])
                                        ]),
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium mt-3" }, "Оформление заказа после 19:00"),
                                        vueExports.createVNode("div", { class: "mt-2 grid grid-cols-2 gap-4" }, [
                                          vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium basis-1/2" }, [
                                            vueExports.createTextVNode(" Доставка: "),
                                            vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "через день")
                                          ]),
                                          vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium shrink-0 basis-1/2" }, [
                                            vueExports.createTextVNode(" Самовывоз: "),
                                            vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                                vueExports.createVNode("h4", { class: "text-default-medium text-text mb-3" }, "Стоимость доставки"),
                                vueExports.createVNode(_sfc_main$4, { value: "0" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$1, { value: "0" }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "в пределах МКАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 09:00 до 21:00"),
                                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "400 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$1, { value: "1" }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД до 20 км")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 10:00 до 21:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "500 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$1, { value: "2" }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД до 30 км")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 12:00 до 18:00"),
                                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 15000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 15000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "700 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$1, { value: "3" }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД от 30 км до 60км")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 12:00 до 18:00"),
                                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 15000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 15000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "700 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, { value: "1" }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-text flex gap-8" data-v-b12bf230${_scopeId3}><div class="flex-1 basis-1/2" data-v-b12bf230${_scopeId3}><h4 class="text-default-medium mb-3" data-v-b12bf230${_scopeId3}>График приема заказов</h4><div class="grid grid-cols-2 gap-2" data-v-b12bf230${_scopeId3}><div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230${_scopeId3}><div data-v-b12bf230${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockFilled), null, null, _parent4, _scopeId3));
                          _push4(`</div><div data-v-b12bf230${_scopeId3}><h4 class="text-small-medium" data-v-b12bf230${_scopeId3}>Прием заказов</h4><div class="mt-2 flex flex-col gap-0.5" data-v-b12bf230${_scopeId3}><p class="text-mob-small" data-v-b12bf230${_scopeId3}>с 10:00 до 20:00</p><p class="text-complimentary-reg text-subsidiary" data-v-b12bf230${_scopeId3}>Ежедневно</p><p class="text-subsidiary-reg" data-v-b12bf230${_scopeId3}>Через сайт - круглосуточно</p></div></div></div><div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230${_scopeId3}><div data-v-b12bf230${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconTruckFilled), null, null, _parent4, _scopeId3));
                          _push4(`</div><div data-v-b12bf230${_scopeId3}><h4 class="text-small-medium" data-v-b12bf230${_scopeId3}>Оформление заказов</h4><div class="mt-2" data-v-b12bf230${_scopeId3}><a href="tel:+7 (499) 938-90-10" class="text-mob-small-bold" data-v-b12bf230${_scopeId3}>+7 (499) 938-90-10</a><p class="text-mob-small" data-v-b12bf230${_scopeId3}>с 10:00 до 20:00</p><p class="text-complimentary-reg text-subsidiary" data-v-b12bf230${_scopeId3}>Ежедневно</p></div></div></div><div class="bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230${_scopeId3}><div data-v-b12bf230${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCalendarFilled), null, null, _parent4, _scopeId3));
                          _push4(`</div><div data-v-b12bf230${_scopeId3}><h4 class="text-small-medium" data-v-b12bf230${_scopeId3}>Сроки доставки</h4><div class="mt-2" data-v-b12bf230${_scopeId3}><div class="border-b-filling grid grid-cols-2 gap-4 border-b pb-3" data-v-b12bf230${_scopeId3}><p class="text-additional text-subsidiary-medium" data-v-b12bf230${_scopeId3}> Доставка: <span class="text-mob-small-medium text-text" data-v-b12bf230${_scopeId3}>на следующий день</span></p><p class="text-additional text-subsidiary-medium" data-v-b12bf230${_scopeId3}> Самовывоз: <span class="text-mob-small-medium text-text" data-v-b12bf230${_scopeId3}>день в день</span></p></div><p class="text-additional text-subsidiary-medium mt-3" data-v-b12bf230${_scopeId3}>Оформление заказа после 19:00</p><div class="mt-2 grid grid-cols-2 gap-4" data-v-b12bf230${_scopeId3}><p class="text-additional text-subsidiary-medium basis-1/2" data-v-b12bf230${_scopeId3}> Доставка: <span class="text-mob-small-medium text-text" data-v-b12bf230${_scopeId3}>через день</span></p><p class="text-additional text-subsidiary-medium shrink-0 basis-1/2" data-v-b12bf230${_scopeId3}> Самовывоз: <span class="text-mob-small-medium text-text" data-v-b12bf230${_scopeId3}>на следующий день</span></p></div></div></div></div></div></div><div class="flex-1 basis-1/2" data-v-b12bf230${_scopeId3}><h4 class="text-default-medium text-text mb-3" data-v-b12bf230${_scopeId3}>Стоимость доставки</h4>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, { value: "0" }, {
                            default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { value: "0" }, {
                                  default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex flex-col items-start justify-items-start" data-v-b12bf230${_scopeId6}><p class="text-small-medium" data-v-b12bf230${_scopeId6}>1 зона</p><p class="text-complimentary-reg mt-0.5" data-v-b12bf230${_scopeId6}>внутри КАД</p></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                                vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "внутри КАД")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex justify-between" data-v-b12bf230${_scopeId6}><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), {
                                              width: "20px",
                                              height: "20px"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Интервалы доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><p class="text-mob-small" data-v-b12bf230${_scopeId6}>Ежедневно с 11:00 до 17:00</p><p class="text-complimentary-reg text-subsidiary" data-v-b12bf230${_scopeId6}>17:00 - 22:00</p></div></div></div><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconWalletOutline), { class: "mt-0.5" }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Стоимость доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><div class="text-mob-small flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 8000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>Бесплатно</div></div><div class="text-mob-small mt-2 flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>до 8000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>550 руб.</div></div></div></div></div></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex justify-between" }, [
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                      width: "20px",
                                                      height: "20px"
                                                    })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 11:00 до 17:00"),
                                                      vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "17:00 - 22:00")
                                                    ])
                                                  ])
                                                ]),
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 8000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                      ]),
                                                      vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "до 8000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "550 руб.")
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "внутри КАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 11:00 до 17:00"),
                                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "17:00 - 22:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "550 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { value: "1" }, {
                                  default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex flex-col items-start justify-items-start" data-v-b12bf230${_scopeId6}><p class="text-small-medium" data-v-b12bf230${_scopeId6}>2 зона</p><p class="text-complimentary-reg mt-0.5" data-v-b12bf230${_scopeId6}>до 10 км от КАД</p></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                                vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 10 км от КАД")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex justify-between" data-v-b12bf230${_scopeId6}><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), {
                                              width: "20px",
                                              height: "20px"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Интервалы доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><p class="text-mob-small" data-v-b12bf230${_scopeId6}>Ежедневно с 14:00 до 19:00</p></div></div></div><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconWalletOutline), { class: "mt-0.5" }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Стоимость доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><div class="text-mob-small flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 8000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>Бесплатно</div></div><div class="text-mob-small mt-2 flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>до 8000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>600 руб.</div></div></div></div></div></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex justify-between" }, [
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                      width: "20px",
                                                      height: "20px"
                                                    })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 14:00 до 19:00")
                                                    ])
                                                  ])
                                                ]),
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 8000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                      ]),
                                                      vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "до 8000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "600 руб.")
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 10 км от КАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 14:00 до 19:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "600 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { value: "2" }, {
                                  default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex flex-col items-start justify-items-start" data-v-b12bf230${_scopeId6}><p class="text-small-medium" data-v-b12bf230${_scopeId6}>3 зона</p><p class="text-complimentary-reg mt-0.5" data-v-b12bf230${_scopeId6}>до 20 км от КАД</p></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                                vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 20 км от КАД")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex justify-between" data-v-b12bf230${_scopeId6}><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), {
                                              width: "20px",
                                              height: "20px"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Интервалы доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><p class="text-mob-small" data-v-b12bf230${_scopeId6}>Ежедневно с 19:00 до 23:00</p></div></div></div><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconWalletOutline), { class: "mt-0.5" }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Стоимость доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><div class="text-mob-small flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 30000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>Бесплатно</div></div><div class="text-mob-small mt-2 flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>до 30000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>800 руб.</div></div></div></div></div></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex justify-between" }, [
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                      width: "20px",
                                                      height: "20px"
                                                    })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                    ])
                                                  ])
                                                ]),
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 30000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                      ]),
                                                      vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "до 30000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "800 руб.")
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 20 км от КАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 30000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 30000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "800 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { value: "3" }, {
                                  default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex flex-col items-start justify-items-start" data-v-b12bf230${_scopeId6}><p class="text-small-medium" data-v-b12bf230${_scopeId6}>4 зона</p><p class="text-complimentary-reg mt-0.5" data-v-b12bf230${_scopeId6}>от 20 до 30 км от КАД</p></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                                vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "от 20 до 30 км от КАД")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex justify-between" data-v-b12bf230${_scopeId6}><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), {
                                              width: "20px",
                                              height: "20px"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Интервалы доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><p class="text-mob-small" data-v-b12bf230${_scopeId6}>Ежедневно с 19:00 до 23:00</p></div></div></div><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconWalletOutline), { class: "mt-0.5" }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Стоимость доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><div class="text-mob-small flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 50000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>Бесплатно</div></div><div class="text-mob-small mt-2 flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>до 50000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>1300 руб.</div></div></div></div></div></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex justify-between" }, [
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                      width: "20px",
                                                      height: "20px"
                                                    })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                    ])
                                                  ])
                                                ]),
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 50000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                      ]),
                                                      vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "до 50000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1300 руб.")
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "от 20 до 30 км от КАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 50000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 50000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1300 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(_sfc_main$1, { value: "0" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "внутри КАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 11:00 до 17:00"),
                                                  vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "17:00 - 22:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "550 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "1" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 10 км от КАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 14:00 до 19:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "600 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "2" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 20 км от КАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 30000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 30000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "800 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "3" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "от 20 до 30 км от КАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 50000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 50000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1300 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else {
                          return [
                            vueExports.createVNode("div", { class: "text-text flex gap-8" }, [
                              vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                                vueExports.createVNode("h4", { class: "text-default-medium mb-3" }, "График приема заказов"),
                                vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                  vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode(vueExports.unref(IconClockFilled))
                                    ]),
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode("h4", { class: "text-small-medium" }, "Прием заказов"),
                                      vueExports.createVNode("div", { class: "mt-2 flex flex-col gap-0.5" }, [
                                        vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                        vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно"),
                                        vueExports.createVNode("p", { class: "text-subsidiary-reg" }, "Через сайт - круглосуточно")
                                      ])
                                    ])
                                  ]),
                                  vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode(vueExports.unref(IconTruckFilled))
                                    ]),
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode("h4", { class: "text-small-medium" }, "Оформление заказов"),
                                      vueExports.createVNode("div", { class: "mt-2" }, [
                                        vueExports.createVNode("a", {
                                          href: "tel:+7 (499) 938-90-10",
                                          class: "text-mob-small-bold"
                                        }, "+7 (499) 938-90-10"),
                                        vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                        vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно")
                                      ])
                                    ])
                                  ]),
                                  vueExports.createVNode("div", { class: "bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode(vueExports.unref(IconCalendarFilled))
                                    ]),
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode("h4", { class: "text-small-medium" }, "Сроки доставки"),
                                      vueExports.createVNode("div", { class: "mt-2" }, [
                                        vueExports.createVNode("div", { class: "border-b-filling grid grid-cols-2 gap-4 border-b pb-3" }, [
                                          vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                            vueExports.createTextVNode(" Доставка: "),
                                            vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                          ]),
                                          vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                            vueExports.createTextVNode(" Самовывоз: "),
                                            vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "день в день")
                                          ])
                                        ]),
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium mt-3" }, "Оформление заказа после 19:00"),
                                        vueExports.createVNode("div", { class: "mt-2 grid grid-cols-2 gap-4" }, [
                                          vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium basis-1/2" }, [
                                            vueExports.createTextVNode(" Доставка: "),
                                            vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "через день")
                                          ]),
                                          vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium shrink-0 basis-1/2" }, [
                                            vueExports.createTextVNode(" Самовывоз: "),
                                            vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                                vueExports.createVNode("h4", { class: "text-default-medium text-text mb-3" }, "Стоимость доставки"),
                                vueExports.createVNode(_sfc_main$4, { value: "0" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$1, { value: "0" }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "внутри КАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 11:00 до 17:00"),
                                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "17:00 - 22:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "550 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$1, { value: "1" }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 10 км от КАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 14:00 до 19:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "600 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$1, { value: "2" }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 20 км от КАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 30000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 30000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "800 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$1, { value: "3" }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "от 20 до 30 км от КАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 50000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 50000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1300 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, { value: "2" }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-text flex gap-8" data-v-b12bf230${_scopeId3}><div class="flex-1 basis-1/2" data-v-b12bf230${_scopeId3}><h4 class="text-default-medium mb-3" data-v-b12bf230${_scopeId3}>График приема заказов</h4><div class="grid grid-cols-2 gap-2" data-v-b12bf230${_scopeId3}><div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230${_scopeId3}><div data-v-b12bf230${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockFilled), null, null, _parent4, _scopeId3));
                          _push4(`</div><div data-v-b12bf230${_scopeId3}><h4 class="text-small-medium" data-v-b12bf230${_scopeId3}>Прием заказов</h4><div class="mt-2 flex flex-col gap-0.5" data-v-b12bf230${_scopeId3}><p class="text-mob-small" data-v-b12bf230${_scopeId3}>с 10:00 до 20:00</p><p class="text-complimentary-reg text-subsidiary" data-v-b12bf230${_scopeId3}>Ежедневно</p><p class="text-subsidiary-reg" data-v-b12bf230${_scopeId3}>Через сайт - круглосуточно</p></div></div></div><div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230${_scopeId3}><div data-v-b12bf230${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconTruckFilled), null, null, _parent4, _scopeId3));
                          _push4(`</div><div data-v-b12bf230${_scopeId3}><h4 class="text-small-medium" data-v-b12bf230${_scopeId3}>Оформление заказов</h4><div class="mt-2" data-v-b12bf230${_scopeId3}><a href="tel:+7 (499) 938-90-10" class="text-mob-small-bold" data-v-b12bf230${_scopeId3}>+7 (499) 938-90-10</a><p class="text-mob-small" data-v-b12bf230${_scopeId3}>с 10:00 до 20:00</p><p class="text-complimentary-reg text-subsidiary" data-v-b12bf230${_scopeId3}>Ежедневно</p></div></div></div><div class="bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230${_scopeId3}><div data-v-b12bf230${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCalendarFilled), null, null, _parent4, _scopeId3));
                          _push4(`</div><div data-v-b12bf230${_scopeId3}><h4 class="text-small-medium" data-v-b12bf230${_scopeId3}>Сроки доставки</h4><div class="mt-2" data-v-b12bf230${_scopeId3}><div class="border-b-filling grid grid-cols-2 gap-4 border-b pb-3" data-v-b12bf230${_scopeId3}><p class="text-additional text-subsidiary-medium" data-v-b12bf230${_scopeId3}> Доставка: <span class="text-mob-small-medium text-text" data-v-b12bf230${_scopeId3}>на следующий день</span></p><p class="text-additional text-subsidiary-medium" data-v-b12bf230${_scopeId3}> Самовывоз: <span class="text-mob-small-medium text-text" data-v-b12bf230${_scopeId3}>день в день</span></p></div><p class="text-additional text-subsidiary-medium mt-3" data-v-b12bf230${_scopeId3}>Оформление заказа после 19:00</p><div class="mt-2 grid grid-cols-2 gap-4" data-v-b12bf230${_scopeId3}><p class="text-additional text-subsidiary-medium basis-1/2" data-v-b12bf230${_scopeId3}> Доставка: <span class="text-mob-small-medium text-text" data-v-b12bf230${_scopeId3}>через день</span></p><p class="text-additional text-subsidiary-medium shrink-0 basis-1/2" data-v-b12bf230${_scopeId3}> Самовывоз: <span class="text-mob-small-medium text-text" data-v-b12bf230${_scopeId3}>на следующий день</span></p></div></div></div></div></div></div><div class="flex-1 basis-1/2" data-v-b12bf230${_scopeId3}><h4 class="text-default-medium text-text mb-3" data-v-b12bf230${_scopeId3}>Стоимость доставки</h4>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, { value: "0" }, {
                            default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { value: "0" }, {
                                  default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex flex-col items-start justify-items-start" data-v-b12bf230${_scopeId6}><p class="text-small-medium" data-v-b12bf230${_scopeId6}>1 зона</p><p class="text-complimentary-reg mt-0.5" data-v-b12bf230${_scopeId6}>Сочи</p></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                                vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Сочи")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex justify-between" data-v-b12bf230${_scopeId6}><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), {
                                              width: "20px",
                                              height: "20px"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Интервалы доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><p class="text-mob-small" data-v-b12bf230${_scopeId6}>Ежедневно с 09:00 до 21:00</p></div></div></div><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconWalletOutline), { class: "mt-0.5" }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Стоимость доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><div class="text-mob-small flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 6000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>Бесплатно</div></div><div class="text-mob-small mt-2 flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>до 6000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>400 руб.</div></div></div></div></div></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex justify-between" }, [
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                      width: "20px",
                                                      height: "20px"
                                                    })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 09:00 до 21:00")
                                                    ])
                                                  ])
                                                ]),
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 6000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                      ]),
                                                      vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "до 6000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "400 руб.")
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Сочи")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 09:00 до 21:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 6000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 6000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "400 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { value: "1" }, {
                                  default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex flex-col items-start justify-items-start" data-v-b12bf230${_scopeId6}><p class="text-small-medium" data-v-b12bf230${_scopeId6}>2 зона</p><p class="text-complimentary-reg mt-0.5" data-v-b12bf230${_scopeId6}>Адлер, Сириус</p></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                                vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Адлер, Сириус")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex justify-between" data-v-b12bf230${_scopeId6}><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), {
                                              width: "20px",
                                              height: "20px"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Интервалы доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><p class="text-mob-small" data-v-b12bf230${_scopeId6}>Понедельник, Среда, Пятница</p></div></div></div><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconWalletOutline), { class: "mt-0.5" }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Стоимость доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><div class="text-mob-small flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 8000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>Бесплатно</div></div><div class="text-mob-small mt-2 flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>до 8000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>1000 руб.</div></div></div></div></div></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex justify-between" }, [
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                      width: "20px",
                                                      height: "20px"
                                                    })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("p", { class: "text-mob-small" }, "Понедельник, Среда, Пятница")
                                                    ])
                                                  ])
                                                ]),
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 8000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                      ]),
                                                      vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "до 8000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1000 руб.")
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Адлер, Сириус")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Понедельник, Среда, Пятница")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1000 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { value: "2" }, {
                                  default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex flex-col items-start justify-items-start" data-v-b12bf230${_scopeId6}><p class="text-small-medium" data-v-b12bf230${_scopeId6}>3 зона</p><p class="text-complimentary-reg mt-0.5" data-v-b12bf230${_scopeId6}>Красная Поляна</p></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                                vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Красная Поляна")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex justify-between" data-v-b12bf230${_scopeId6}><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), {
                                              width: "20px",
                                              height: "20px"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Интервалы доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><p class="text-mob-small" data-v-b12bf230${_scopeId6}>Понедельник, Среда, Пятница</p></div></div></div><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconWalletOutline), { class: "mt-0.5" }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Стоимость доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><div class="text-mob-small flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 25000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>Бесплатно</div></div><div class="text-mob-small mt-2 flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>до 25000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>2000 руб.</div></div></div></div></div></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex justify-between" }, [
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                      width: "20px",
                                                      height: "20px"
                                                    })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("p", { class: "text-mob-small" }, "Понедельник, Среда, Пятница")
                                                    ])
                                                  ])
                                                ]),
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 25000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                      ]),
                                                      vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "до 25000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "2000 руб.")
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Красная Поляна")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Понедельник, Среда, Пятница")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 25000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 25000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "2000 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(_sfc_main$1, { value: "0" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Сочи")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 09:00 до 21:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 6000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 6000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "400 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "1" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Адлер, Сириус")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Понедельник, Среда, Пятница")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1000 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "2" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Красная Поляна")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Понедельник, Среда, Пятница")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 25000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 25000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "2000 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else {
                          return [
                            vueExports.createVNode("div", { class: "text-text flex gap-8" }, [
                              vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                                vueExports.createVNode("h4", { class: "text-default-medium mb-3" }, "График приема заказов"),
                                vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                  vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode(vueExports.unref(IconClockFilled))
                                    ]),
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode("h4", { class: "text-small-medium" }, "Прием заказов"),
                                      vueExports.createVNode("div", { class: "mt-2 flex flex-col gap-0.5" }, [
                                        vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                        vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно"),
                                        vueExports.createVNode("p", { class: "text-subsidiary-reg" }, "Через сайт - круглосуточно")
                                      ])
                                    ])
                                  ]),
                                  vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode(vueExports.unref(IconTruckFilled))
                                    ]),
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode("h4", { class: "text-small-medium" }, "Оформление заказов"),
                                      vueExports.createVNode("div", { class: "mt-2" }, [
                                        vueExports.createVNode("a", {
                                          href: "tel:+7 (499) 938-90-10",
                                          class: "text-mob-small-bold"
                                        }, "+7 (499) 938-90-10"),
                                        vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                        vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно")
                                      ])
                                    ])
                                  ]),
                                  vueExports.createVNode("div", { class: "bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode(vueExports.unref(IconCalendarFilled))
                                    ]),
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode("h4", { class: "text-small-medium" }, "Сроки доставки"),
                                      vueExports.createVNode("div", { class: "mt-2" }, [
                                        vueExports.createVNode("div", { class: "border-b-filling grid grid-cols-2 gap-4 border-b pb-3" }, [
                                          vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                            vueExports.createTextVNode(" Доставка: "),
                                            vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                          ]),
                                          vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                            vueExports.createTextVNode(" Самовывоз: "),
                                            vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "день в день")
                                          ])
                                        ]),
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium mt-3" }, "Оформление заказа после 19:00"),
                                        vueExports.createVNode("div", { class: "mt-2 grid grid-cols-2 gap-4" }, [
                                          vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium basis-1/2" }, [
                                            vueExports.createTextVNode(" Доставка: "),
                                            vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "через день")
                                          ]),
                                          vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium shrink-0 basis-1/2" }, [
                                            vueExports.createTextVNode(" Самовывоз: "),
                                            vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                                vueExports.createVNode("h4", { class: "text-default-medium text-text mb-3" }, "Стоимость доставки"),
                                vueExports.createVNode(_sfc_main$4, { value: "0" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$1, { value: "0" }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Сочи")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 09:00 до 21:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 6000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 6000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "400 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$1, { value: "1" }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Адлер, Сириус")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Понедельник, Среда, Пятница")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1000 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$1, { value: "2" }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Красная Поляна")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Понедельник, Среда, Пятница")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 25000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 25000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "2000 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, { value: "3" }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-text flex gap-8" data-v-b12bf230${_scopeId3}><div class="flex-1 basis-1/2" data-v-b12bf230${_scopeId3}><h4 class="text-default-medium mb-3" data-v-b12bf230${_scopeId3}>График приема заказов</h4><div class="grid grid-cols-2 gap-2" data-v-b12bf230${_scopeId3}><div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230${_scopeId3}><div data-v-b12bf230${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockFilled), null, null, _parent4, _scopeId3));
                          _push4(`</div><div data-v-b12bf230${_scopeId3}><h4 class="text-small-medium" data-v-b12bf230${_scopeId3}>Прием заказов</h4><div class="mt-2 flex flex-col gap-0.5" data-v-b12bf230${_scopeId3}><p class="text-mob-small" data-v-b12bf230${_scopeId3}>с 10:00 до 20:00</p><p class="text-complimentary-reg text-subsidiary" data-v-b12bf230${_scopeId3}>Ежедневно</p><p class="text-subsidiary-reg" data-v-b12bf230${_scopeId3}>Через сайт - круглосуточно</p></div></div></div><div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230${_scopeId3}><div data-v-b12bf230${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconTruckFilled), null, null, _parent4, _scopeId3));
                          _push4(`</div><div data-v-b12bf230${_scopeId3}><h4 class="text-small-medium" data-v-b12bf230${_scopeId3}>Оформление заказов</h4><div class="mt-2" data-v-b12bf230${_scopeId3}><a href="tel:+7 (499) 938-90-10" class="text-mob-small-bold" data-v-b12bf230${_scopeId3}>+7 (499) 938-90-10</a><p class="text-mob-small" data-v-b12bf230${_scopeId3}>с 10:00 до 20:00</p><p class="text-complimentary-reg text-subsidiary" data-v-b12bf230${_scopeId3}>Ежедневно</p></div></div></div><div class="bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230${_scopeId3}><div data-v-b12bf230${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCalendarFilled), null, null, _parent4, _scopeId3));
                          _push4(`</div><div data-v-b12bf230${_scopeId3}><h4 class="text-small-medium" data-v-b12bf230${_scopeId3}>Сроки доставки</h4><div class="mt-2" data-v-b12bf230${_scopeId3}><div class="border-b-filling grid grid-cols-2 gap-4 border-b pb-3" data-v-b12bf230${_scopeId3}><p class="text-additional text-subsidiary-medium" data-v-b12bf230${_scopeId3}> Доставка: <span class="text-mob-small-medium text-text" data-v-b12bf230${_scopeId3}>на следующий день</span></p><p class="text-additional text-subsidiary-medium" data-v-b12bf230${_scopeId3}> Самовывоз: <span class="text-mob-small-medium text-text" data-v-b12bf230${_scopeId3}>день в день</span></p></div><p class="text-additional text-subsidiary-medium mt-3" data-v-b12bf230${_scopeId3}>Оформление заказа после 19:00</p><div class="mt-2 grid grid-cols-2 gap-4" data-v-b12bf230${_scopeId3}><p class="text-additional text-subsidiary-medium basis-1/2" data-v-b12bf230${_scopeId3}> Доставка: <span class="text-mob-small-medium text-text" data-v-b12bf230${_scopeId3}>через день</span></p><p class="text-additional text-subsidiary-medium shrink-0 basis-1/2" data-v-b12bf230${_scopeId3}> Самовывоз: <span class="text-mob-small-medium text-text" data-v-b12bf230${_scopeId3}>на следующий день</span></p></div></div></div></div></div></div><div class="flex-1 basis-1/2" data-v-b12bf230${_scopeId3}><h4 class="text-default-medium text-text mb-3" data-v-b12bf230${_scopeId3}>Стоимость доставки</h4>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, { value: "0" }, {
                            default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { value: "0" }, {
                                  default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex flex-col items-start justify-items-start" data-v-b12bf230${_scopeId6}><p class="text-small-medium" data-v-b12bf230${_scopeId6}>1 зона</p><p class="text-complimentary-reg mt-0.5" data-v-b12bf230${_scopeId6}>внутри КАД</p></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                                vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "внутри КАД")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex justify-between" data-v-b12bf230${_scopeId6}><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), {
                                              width: "20px",
                                              height: "20px"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Интервалы доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><p class="text-mob-small" data-v-b12bf230${_scopeId6}>Ежедневно с 11:00 до 17:00</p><p class="text-complimentary-reg text-subsidiary" data-v-b12bf230${_scopeId6}>17:00–22:00</p></div></div></div><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconWalletOutline), { class: "mt-0.5" }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Стоимость доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><div class="text-mob-small flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 8000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>Бесплатно</div></div><div class="text-mob-small mt-2 flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 8000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>550 руб.</div></div></div></div></div></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex justify-between" }, [
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                      width: "20px",
                                                      height: "20px"
                                                    })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 11:00 до 17:00"),
                                                      vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "17:00–22:00")
                                                    ])
                                                  ])
                                                ]),
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 8000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                      ]),
                                                      vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 8000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "550 руб.")
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "внутри КАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 11:00 до 17:00"),
                                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "17:00–22:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "550 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { value: "1" }, {
                                  default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex flex-col items-start justify-items-start" data-v-b12bf230${_scopeId6}><p class="text-small-medium" data-v-b12bf230${_scopeId6}>2 зона</p><p class="text-complimentary-reg mt-0.5" data-v-b12bf230${_scopeId6}>до 10 км от КАД</p></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                                vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 10 км от КАД")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex justify-between" data-v-b12bf230${_scopeId6}><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), {
                                              width: "20px",
                                              height: "20px"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Интервалы доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><p class="text-mob-small" data-v-b12bf230${_scopeId6}>Ежедневно с 14:00 до 19:00</p></div></div></div><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconWalletOutline), { class: "mt-0.5" }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Стоимость доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><div class="text-mob-small flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 8000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>Бесплатно</div></div><div class="text-mob-small mt-2 flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 8000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>600 руб.</div></div></div></div></div></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex justify-between" }, [
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                      width: "20px",
                                                      height: "20px"
                                                    })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 14:00 до 19:00")
                                                    ])
                                                  ])
                                                ]),
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 8000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                      ]),
                                                      vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 8000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "600 руб.")
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 10 км от КАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 14:00 до 19:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "600 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { value: "2" }, {
                                  default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex flex-col items-start justify-items-start" data-v-b12bf230${_scopeId6}><p class="text-small-medium" data-v-b12bf230${_scopeId6}>3 зона</p><p class="text-complimentary-reg mt-0.5" data-v-b12bf230${_scopeId6}>до 20 км от КАД</p></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                                vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 20 км от КАД")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex justify-between" data-v-b12bf230${_scopeId6}><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), {
                                              width: "20px",
                                              height: "20px"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Интервалы доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><p class="text-mob-small" data-v-b12bf230${_scopeId6}>Ежедневно с 19:00 до 23:00</p></div></div></div><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconWalletOutline), { class: "mt-0.5" }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Стоимость доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><div class="text-mob-small flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 50000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>Бесплатно</div></div><div class="text-mob-small mt-2 flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>до 50000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>1300 руб.</div></div></div></div></div></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex justify-between" }, [
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                      width: "20px",
                                                      height: "20px"
                                                    })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                    ])
                                                  ])
                                                ]),
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 50000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                      ]),
                                                      vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "до 50000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1300 руб.")
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 20 км от КАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 50000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 50000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1300 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { value: "3" }, {
                                  default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex flex-col items-start justify-items-start" data-v-b12bf230${_scopeId6}><p class="text-small-medium" data-v-b12bf230${_scopeId6}>4 зона</p><p class="text-complimentary-reg mt-0.5" data-v-b12bf230${_scopeId6}>от 20 до 30 км от КАД</p></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                                vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "от 20 до 30 км от КАД")
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                      _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, null, {
                                        default: vueExports.withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<div class="flex justify-between" data-v-b12bf230${_scopeId6}><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), {
                                              width: "20px",
                                              height: "20px"
                                            }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Интервалы доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><p class="text-mob-small" data-v-b12bf230${_scopeId6}>Ежедневно с 19:00 до 23:00</p></div></div></div><div class="flex gap-2" data-v-b12bf230${_scopeId6}><div data-v-b12bf230${_scopeId6}>`);
                                            _push7(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconWalletOutline), { class: "mt-0.5" }, null, _parent7, _scopeId6));
                                            _push7(`</div><div class="!text-text" data-v-b12bf230${_scopeId6}><h4 class="text-small-medium" data-v-b12bf230${_scopeId6}>Стоимость доставки</h4><div class="mt-1" data-v-b12bf230${_scopeId6}><div class="text-mob-small flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>от 30000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>Бесплатно</div></div><div class="text-mob-small mt-2 flex items-center justify-between gap-10" data-v-b12bf230${_scopeId6}><p data-v-b12bf230${_scopeId6}>до 30000 руб.</p><div class="text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId6}>800 руб.</div></div></div></div></div></div>`);
                                          } else {
                                            return [
                                              vueExports.createVNode("div", { class: "flex justify-between" }, [
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                      width: "20px",
                                                      height: "20px"
                                                    })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                    ])
                                                  ])
                                                ]),
                                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                  vueExports.createVNode("div", null, [
                                                    vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                  ]),
                                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                    vueExports.createVNode("div", { class: "mt-1" }, [
                                                      vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "от 30000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                      ]),
                                                      vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                        vueExports.createVNode("p", null, "до 30000 руб."),
                                                        vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "800 руб.")
                                                      ])
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "от 20 до 30 км от КАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 30000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 30000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "800 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(_sfc_main$1, { value: "0" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "внутри КАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 11:00 до 17:00"),
                                                  vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "17:00–22:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "550 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "1" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 10 км от КАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 14:00 до 19:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "600 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "2" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 20 км от КАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 50000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 50000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1300 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "3" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "от 20 до 30 км от КАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 30000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 30000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "800 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                        } else {
                          return [
                            vueExports.createVNode("div", { class: "text-text flex gap-8" }, [
                              vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                                vueExports.createVNode("h4", { class: "text-default-medium mb-3" }, "График приема заказов"),
                                vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                  vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode(vueExports.unref(IconClockFilled))
                                    ]),
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode("h4", { class: "text-small-medium" }, "Прием заказов"),
                                      vueExports.createVNode("div", { class: "mt-2 flex flex-col gap-0.5" }, [
                                        vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                        vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно"),
                                        vueExports.createVNode("p", { class: "text-subsidiary-reg" }, "Через сайт - круглосуточно")
                                      ])
                                    ])
                                  ]),
                                  vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode(vueExports.unref(IconTruckFilled))
                                    ]),
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode("h4", { class: "text-small-medium" }, "Оформление заказов"),
                                      vueExports.createVNode("div", { class: "mt-2" }, [
                                        vueExports.createVNode("a", {
                                          href: "tel:+7 (499) 938-90-10",
                                          class: "text-mob-small-bold"
                                        }, "+7 (499) 938-90-10"),
                                        vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                        vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно")
                                      ])
                                    ])
                                  ]),
                                  vueExports.createVNode("div", { class: "bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode(vueExports.unref(IconCalendarFilled))
                                    ]),
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode("h4", { class: "text-small-medium" }, "Сроки доставки"),
                                      vueExports.createVNode("div", { class: "mt-2" }, [
                                        vueExports.createVNode("div", { class: "border-b-filling grid grid-cols-2 gap-4 border-b pb-3" }, [
                                          vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                            vueExports.createTextVNode(" Доставка: "),
                                            vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                          ]),
                                          vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                            vueExports.createTextVNode(" Самовывоз: "),
                                            vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "день в день")
                                          ])
                                        ]),
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium mt-3" }, "Оформление заказа после 19:00"),
                                        vueExports.createVNode("div", { class: "mt-2 grid grid-cols-2 gap-4" }, [
                                          vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium basis-1/2" }, [
                                            vueExports.createTextVNode(" Доставка: "),
                                            vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "через день")
                                          ]),
                                          vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium shrink-0 basis-1/2" }, [
                                            vueExports.createTextVNode(" Самовывоз: "),
                                            vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                          ])
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                                vueExports.createVNode("h4", { class: "text-default-medium text-text mb-3" }, "Стоимость доставки"),
                                vueExports.createVNode(_sfc_main$4, { value: "0" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$1, { value: "0" }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "внутри КАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 11:00 до 17:00"),
                                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "17:00–22:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "550 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$1, { value: "1" }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 10 км от КАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 14:00 до 19:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 8000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "600 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$1, { value: "2" }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 20 км от КАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 50000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 50000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1300 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$1, { value: "3" }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(_sfc_main$2, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                              vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                              vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "от 20 до 30 км от КАД")
                                            ])
                                          ]),
                                          _: 1
                                        }),
                                        vueExports.createVNode(_sfc_main$3, null, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("div", { class: "flex justify-between" }, [
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                    width: "20px",
                                                    height: "20px"
                                                  })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                  ])
                                                ])
                                              ]),
                                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                                vueExports.createVNode("div", null, [
                                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                                ]),
                                                vueExports.createVNode("div", { class: "!text-text" }, [
                                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                  vueExports.createVNode("div", { class: "mt-1" }, [
                                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "от 30000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                    ]),
                                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                      vueExports.createVNode("p", null, "до 30000 руб."),
                                                      vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "800 руб.")
                                                    ])
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, { value: "4" }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="text-text flex gap-8" data-v-b12bf230${_scopeId3}>Информация о доставке</div>`);
                        } else {
                          return [
                            vueExports.createVNode("div", { class: "text-text flex gap-8" }, "Информация о доставке")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(_sfc_main$9, { value: "0" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode("div", { class: "text-text flex gap-8" }, [
                            vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                              vueExports.createVNode("h4", { class: "text-default-medium mb-3" }, "График приема заказов"),
                              vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode(vueExports.unref(IconClockFilled))
                                  ]),
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Прием заказов"),
                                    vueExports.createVNode("div", { class: "mt-2 flex flex-col gap-0.5" }, [
                                      vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                      vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно"),
                                      vueExports.createVNode("p", { class: "text-subsidiary-reg" }, "Через сайт - круглосуточно")
                                    ])
                                  ])
                                ]),
                                vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode(vueExports.unref(IconTruckFilled))
                                  ]),
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Оформление заказов"),
                                    vueExports.createVNode("div", { class: "mt-2" }, [
                                      vueExports.createVNode("a", {
                                        href: "tel:+7 (499) 938-90-10",
                                        class: "text-mob-small-bold"
                                      }, "+7 (499) 938-90-10"),
                                      vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                      vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно")
                                    ])
                                  ])
                                ]),
                                vueExports.createVNode("div", { class: "bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode(vueExports.unref(IconCalendarFilled))
                                  ]),
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Сроки доставки"),
                                    vueExports.createVNode("div", { class: "mt-2" }, [
                                      vueExports.createVNode("div", { class: "border-b-filling grid grid-cols-2 gap-4 border-b pb-3" }, [
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                          vueExports.createTextVNode(" Доставка: "),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                        ]),
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                          vueExports.createTextVNode(" Самовывоз: "),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "день в день")
                                        ])
                                      ]),
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium mt-3" }, "Оформление заказа после 19:00"),
                                      vueExports.createVNode("div", { class: "mt-2 grid grid-cols-2 gap-4" }, [
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium basis-1/2" }, [
                                          vueExports.createTextVNode(" Доставка: "),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "через день")
                                        ]),
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium shrink-0 basis-1/2" }, [
                                          vueExports.createTextVNode(" Самовывоз: "),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                              vueExports.createVNode("h4", { class: "text-default-medium text-text mb-3" }, "Стоимость доставки"),
                              vueExports.createVNode(_sfc_main$4, { value: "0" }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(_sfc_main$1, { value: "0" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "в пределах МКАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 09:00 до 21:00"),
                                                  vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "400 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "1" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД до 20 км")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 10:00 до 21:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "500 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "2" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД до 30 км")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 12:00 до 18:00"),
                                                  vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 15000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 15000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "700 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "3" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД от 30 км до 60км")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 12:00 до 18:00"),
                                                  vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 15000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 15000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "700 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_sfc_main$9, { value: "1" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode("div", { class: "text-text flex gap-8" }, [
                            vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                              vueExports.createVNode("h4", { class: "text-default-medium mb-3" }, "График приема заказов"),
                              vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode(vueExports.unref(IconClockFilled))
                                  ]),
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Прием заказов"),
                                    vueExports.createVNode("div", { class: "mt-2 flex flex-col gap-0.5" }, [
                                      vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                      vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно"),
                                      vueExports.createVNode("p", { class: "text-subsidiary-reg" }, "Через сайт - круглосуточно")
                                    ])
                                  ])
                                ]),
                                vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode(vueExports.unref(IconTruckFilled))
                                  ]),
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Оформление заказов"),
                                    vueExports.createVNode("div", { class: "mt-2" }, [
                                      vueExports.createVNode("a", {
                                        href: "tel:+7 (499) 938-90-10",
                                        class: "text-mob-small-bold"
                                      }, "+7 (499) 938-90-10"),
                                      vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                      vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно")
                                    ])
                                  ])
                                ]),
                                vueExports.createVNode("div", { class: "bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode(vueExports.unref(IconCalendarFilled))
                                  ]),
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Сроки доставки"),
                                    vueExports.createVNode("div", { class: "mt-2" }, [
                                      vueExports.createVNode("div", { class: "border-b-filling grid grid-cols-2 gap-4 border-b pb-3" }, [
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                          vueExports.createTextVNode(" Доставка: "),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                        ]),
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                          vueExports.createTextVNode(" Самовывоз: "),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "день в день")
                                        ])
                                      ]),
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium mt-3" }, "Оформление заказа после 19:00"),
                                      vueExports.createVNode("div", { class: "mt-2 grid grid-cols-2 gap-4" }, [
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium basis-1/2" }, [
                                          vueExports.createTextVNode(" Доставка: "),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "через день")
                                        ]),
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium shrink-0 basis-1/2" }, [
                                          vueExports.createTextVNode(" Самовывоз: "),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                              vueExports.createVNode("h4", { class: "text-default-medium text-text mb-3" }, "Стоимость доставки"),
                              vueExports.createVNode(_sfc_main$4, { value: "0" }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(_sfc_main$1, { value: "0" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "внутри КАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 11:00 до 17:00"),
                                                  vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "17:00 - 22:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "550 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "1" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 10 км от КАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 14:00 до 19:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "600 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "2" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 20 км от КАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 30000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 30000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "800 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "3" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "от 20 до 30 км от КАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 50000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 50000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1300 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_sfc_main$9, { value: "2" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode("div", { class: "text-text flex gap-8" }, [
                            vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                              vueExports.createVNode("h4", { class: "text-default-medium mb-3" }, "График приема заказов"),
                              vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode(vueExports.unref(IconClockFilled))
                                  ]),
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Прием заказов"),
                                    vueExports.createVNode("div", { class: "mt-2 flex flex-col gap-0.5" }, [
                                      vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                      vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно"),
                                      vueExports.createVNode("p", { class: "text-subsidiary-reg" }, "Через сайт - круглосуточно")
                                    ])
                                  ])
                                ]),
                                vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode(vueExports.unref(IconTruckFilled))
                                  ]),
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Оформление заказов"),
                                    vueExports.createVNode("div", { class: "mt-2" }, [
                                      vueExports.createVNode("a", {
                                        href: "tel:+7 (499) 938-90-10",
                                        class: "text-mob-small-bold"
                                      }, "+7 (499) 938-90-10"),
                                      vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                      vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно")
                                    ])
                                  ])
                                ]),
                                vueExports.createVNode("div", { class: "bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode(vueExports.unref(IconCalendarFilled))
                                  ]),
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Сроки доставки"),
                                    vueExports.createVNode("div", { class: "mt-2" }, [
                                      vueExports.createVNode("div", { class: "border-b-filling grid grid-cols-2 gap-4 border-b pb-3" }, [
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                          vueExports.createTextVNode(" Доставка: "),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                        ]),
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                          vueExports.createTextVNode(" Самовывоз: "),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "день в день")
                                        ])
                                      ]),
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium mt-3" }, "Оформление заказа после 19:00"),
                                      vueExports.createVNode("div", { class: "mt-2 grid grid-cols-2 gap-4" }, [
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium basis-1/2" }, [
                                          vueExports.createTextVNode(" Доставка: "),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "через день")
                                        ]),
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium shrink-0 basis-1/2" }, [
                                          vueExports.createTextVNode(" Самовывоз: "),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                              vueExports.createVNode("h4", { class: "text-default-medium text-text mb-3" }, "Стоимость доставки"),
                              vueExports.createVNode(_sfc_main$4, { value: "0" }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(_sfc_main$1, { value: "0" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Сочи")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 09:00 до 21:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 6000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 6000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "400 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "1" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Адлер, Сириус")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Понедельник, Среда, Пятница")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1000 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "2" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Красная Поляна")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Понедельник, Среда, Пятница")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 25000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 25000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "2000 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_sfc_main$9, { value: "3" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode("div", { class: "text-text flex gap-8" }, [
                            vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                              vueExports.createVNode("h4", { class: "text-default-medium mb-3" }, "График приема заказов"),
                              vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                                vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode(vueExports.unref(IconClockFilled))
                                  ]),
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Прием заказов"),
                                    vueExports.createVNode("div", { class: "mt-2 flex flex-col gap-0.5" }, [
                                      vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                      vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно"),
                                      vueExports.createVNode("p", { class: "text-subsidiary-reg" }, "Через сайт - круглосуточно")
                                    ])
                                  ])
                                ]),
                                vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode(vueExports.unref(IconTruckFilled))
                                  ]),
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Оформление заказов"),
                                    vueExports.createVNode("div", { class: "mt-2" }, [
                                      vueExports.createVNode("a", {
                                        href: "tel:+7 (499) 938-90-10",
                                        class: "text-mob-small-bold"
                                      }, "+7 (499) 938-90-10"),
                                      vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                      vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно")
                                    ])
                                  ])
                                ]),
                                vueExports.createVNode("div", { class: "bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode(vueExports.unref(IconCalendarFilled))
                                  ]),
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode("h4", { class: "text-small-medium" }, "Сроки доставки"),
                                    vueExports.createVNode("div", { class: "mt-2" }, [
                                      vueExports.createVNode("div", { class: "border-b-filling grid grid-cols-2 gap-4 border-b pb-3" }, [
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                          vueExports.createTextVNode(" Доставка: "),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                        ]),
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                          vueExports.createTextVNode(" Самовывоз: "),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "день в день")
                                        ])
                                      ]),
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium mt-3" }, "Оформление заказа после 19:00"),
                                      vueExports.createVNode("div", { class: "mt-2 grid grid-cols-2 gap-4" }, [
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium basis-1/2" }, [
                                          vueExports.createTextVNode(" Доставка: "),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "через день")
                                        ]),
                                        vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium shrink-0 basis-1/2" }, [
                                          vueExports.createTextVNode(" Самовывоз: "),
                                          vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                        ])
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ]),
                            vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                              vueExports.createVNode("h4", { class: "text-default-medium text-text mb-3" }, "Стоимость доставки"),
                              vueExports.createVNode(_sfc_main$4, { value: "0" }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(_sfc_main$1, { value: "0" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "внутри КАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 11:00 до 17:00"),
                                                  vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "17:00–22:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "550 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "1" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 10 км от КАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 14:00 до 19:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 8000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "600 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "2" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 20 км от КАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 50000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 50000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1300 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createVNode(_sfc_main$1, { value: "3" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(_sfc_main$2, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                            vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                            vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "от 20 до 30 км от КАД")
                                          ])
                                        ]),
                                        _: 1
                                      }),
                                      vueExports.createVNode(_sfc_main$3, null, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("div", { class: "flex justify-between" }, [
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                  width: "20px",
                                                  height: "20px"
                                                })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                                ])
                                              ])
                                            ]),
                                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                                              vueExports.createVNode("div", null, [
                                                vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                              ]),
                                              vueExports.createVNode("div", { class: "!text-text" }, [
                                                vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                                vueExports.createVNode("div", { class: "mt-1" }, [
                                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "от 30000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                  ]),
                                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                    vueExports.createVNode("p", null, "до 30000 руб."),
                                                    vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "800 руб.")
                                                  ])
                                                ])
                                              ])
                                            ])
                                          ])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_sfc_main$9, { value: "4" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode("div", { class: "text-text flex gap-8" }, "Информация о доставке")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                vueExports.createVNode(_sfc_main$6, null, {
                  default: vueExports.withCtx(() => [
                    (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(menuItems, (item, index) => {
                      return vueExports.createVNode(_sfc_main$7, {
                        key: index,
                        value: String(index)
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode("div", { class: "flex items-center justify-center gap-1.5" }, [
                            vueExports.createVNode(vueExports.unref(IconMapPin)),
                            vueExports.createVNode("p", null, vueExports.toDisplayString(item.label), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 64))
                  ]),
                  _: 1
                }),
                vueExports.createVNode(_sfc_main$8, null, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_sfc_main$9, { value: "0" }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("div", { class: "text-text flex gap-8" }, [
                          vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                            vueExports.createVNode("h4", { class: "text-default-medium mb-3" }, "График приема заказов"),
                            vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                              vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode(vueExports.unref(IconClockFilled))
                                ]),
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Прием заказов"),
                                  vueExports.createVNode("div", { class: "mt-2 flex flex-col gap-0.5" }, [
                                    vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно"),
                                    vueExports.createVNode("p", { class: "text-subsidiary-reg" }, "Через сайт - круглосуточно")
                                  ])
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode(vueExports.unref(IconTruckFilled))
                                ]),
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Оформление заказов"),
                                  vueExports.createVNode("div", { class: "mt-2" }, [
                                    vueExports.createVNode("a", {
                                      href: "tel:+7 (499) 938-90-10",
                                      class: "text-mob-small-bold"
                                    }, "+7 (499) 938-90-10"),
                                    vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно")
                                  ])
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode(vueExports.unref(IconCalendarFilled))
                                ]),
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Сроки доставки"),
                                  vueExports.createVNode("div", { class: "mt-2" }, [
                                    vueExports.createVNode("div", { class: "border-b-filling grid grid-cols-2 gap-4 border-b pb-3" }, [
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                        vueExports.createTextVNode(" Доставка: "),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                      ]),
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                        vueExports.createTextVNode(" Самовывоз: "),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "день в день")
                                      ])
                                    ]),
                                    vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium mt-3" }, "Оформление заказа после 19:00"),
                                    vueExports.createVNode("div", { class: "mt-2 grid grid-cols-2 gap-4" }, [
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium basis-1/2" }, [
                                        vueExports.createTextVNode(" Доставка: "),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "через день")
                                      ]),
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium shrink-0 basis-1/2" }, [
                                        vueExports.createTextVNode(" Самовывоз: "),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                            vueExports.createVNode("h4", { class: "text-default-medium text-text mb-3" }, "Стоимость доставки"),
                            vueExports.createVNode(_sfc_main$4, { value: "0" }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(_sfc_main$1, { value: "0" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$2, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                          vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "в пределах МКАД")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$3, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex justify-between" }, [
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                width: "20px",
                                                height: "20px"
                                              })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 09:00 до 21:00"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                              ])
                                            ])
                                          ]),
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 8000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                ]),
                                                vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 8000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "400 руб.")
                                                ])
                                              ])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                vueExports.createVNode(_sfc_main$1, { value: "1" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$2, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                          vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД до 20 км")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$3, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex justify-between" }, [
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                width: "20px",
                                                height: "20px"
                                              })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 10:00 до 21:00")
                                              ])
                                            ])
                                          ]),
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 8000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                ]),
                                                vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 8000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "500 руб.")
                                                ])
                                              ])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                vueExports.createVNode(_sfc_main$1, { value: "2" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$2, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                          vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД до 30 км")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$3, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex justify-between" }, [
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                width: "20px",
                                                height: "20px"
                                              })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 12:00 до 18:00"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                              ])
                                            ])
                                          ]),
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 15000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                ]),
                                                vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 15000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "700 руб.")
                                                ])
                                              ])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                vueExports.createVNode(_sfc_main$1, { value: "3" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$2, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                          vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "МКАД от 30 км до 60км")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$3, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex justify-between" }, [
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                width: "20px",
                                                height: "20px"
                                              })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 12:00 до 18:00"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "любое 4-х часовое окно")
                                              ])
                                            ])
                                          ]),
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 15000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                ]),
                                                vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 15000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "700 руб.")
                                                ])
                                              ])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_sfc_main$9, { value: "1" }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("div", { class: "text-text flex gap-8" }, [
                          vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                            vueExports.createVNode("h4", { class: "text-default-medium mb-3" }, "График приема заказов"),
                            vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                              vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode(vueExports.unref(IconClockFilled))
                                ]),
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Прием заказов"),
                                  vueExports.createVNode("div", { class: "mt-2 flex flex-col gap-0.5" }, [
                                    vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно"),
                                    vueExports.createVNode("p", { class: "text-subsidiary-reg" }, "Через сайт - круглосуточно")
                                  ])
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode(vueExports.unref(IconTruckFilled))
                                ]),
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Оформление заказов"),
                                  vueExports.createVNode("div", { class: "mt-2" }, [
                                    vueExports.createVNode("a", {
                                      href: "tel:+7 (499) 938-90-10",
                                      class: "text-mob-small-bold"
                                    }, "+7 (499) 938-90-10"),
                                    vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно")
                                  ])
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode(vueExports.unref(IconCalendarFilled))
                                ]),
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Сроки доставки"),
                                  vueExports.createVNode("div", { class: "mt-2" }, [
                                    vueExports.createVNode("div", { class: "border-b-filling grid grid-cols-2 gap-4 border-b pb-3" }, [
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                        vueExports.createTextVNode(" Доставка: "),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                      ]),
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                        vueExports.createTextVNode(" Самовывоз: "),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "день в день")
                                      ])
                                    ]),
                                    vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium mt-3" }, "Оформление заказа после 19:00"),
                                    vueExports.createVNode("div", { class: "mt-2 grid grid-cols-2 gap-4" }, [
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium basis-1/2" }, [
                                        vueExports.createTextVNode(" Доставка: "),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "через день")
                                      ]),
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium shrink-0 basis-1/2" }, [
                                        vueExports.createTextVNode(" Самовывоз: "),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                            vueExports.createVNode("h4", { class: "text-default-medium text-text mb-3" }, "Стоимость доставки"),
                            vueExports.createVNode(_sfc_main$4, { value: "0" }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(_sfc_main$1, { value: "0" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$2, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                          vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "внутри КАД")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$3, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex justify-between" }, [
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                width: "20px",
                                                height: "20px"
                                              })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 11:00 до 17:00"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "17:00 - 22:00")
                                              ])
                                            ])
                                          ]),
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 8000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                ]),
                                                vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "до 8000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "550 руб.")
                                                ])
                                              ])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                vueExports.createVNode(_sfc_main$1, { value: "1" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$2, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                          vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 10 км от КАД")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$3, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex justify-between" }, [
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                width: "20px",
                                                height: "20px"
                                              })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 14:00 до 19:00")
                                              ])
                                            ])
                                          ]),
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 8000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                ]),
                                                vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "до 8000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "600 руб.")
                                                ])
                                              ])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                vueExports.createVNode(_sfc_main$1, { value: "2" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$2, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                          vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 20 км от КАД")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$3, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex justify-between" }, [
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                width: "20px",
                                                height: "20px"
                                              })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                              ])
                                            ])
                                          ]),
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 30000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                ]),
                                                vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "до 30000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "800 руб.")
                                                ])
                                              ])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                vueExports.createVNode(_sfc_main$1, { value: "3" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$2, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                          vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "от 20 до 30 км от КАД")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$3, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex justify-between" }, [
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                width: "20px",
                                                height: "20px"
                                              })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                              ])
                                            ])
                                          ]),
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 50000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                ]),
                                                vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "до 50000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1300 руб.")
                                                ])
                                              ])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_sfc_main$9, { value: "2" }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("div", { class: "text-text flex gap-8" }, [
                          vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                            vueExports.createVNode("h4", { class: "text-default-medium mb-3" }, "График приема заказов"),
                            vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                              vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode(vueExports.unref(IconClockFilled))
                                ]),
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Прием заказов"),
                                  vueExports.createVNode("div", { class: "mt-2 flex flex-col gap-0.5" }, [
                                    vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно"),
                                    vueExports.createVNode("p", { class: "text-subsidiary-reg" }, "Через сайт - круглосуточно")
                                  ])
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode(vueExports.unref(IconTruckFilled))
                                ]),
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Оформление заказов"),
                                  vueExports.createVNode("div", { class: "mt-2" }, [
                                    vueExports.createVNode("a", {
                                      href: "tel:+7 (499) 938-90-10",
                                      class: "text-mob-small-bold"
                                    }, "+7 (499) 938-90-10"),
                                    vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно")
                                  ])
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode(vueExports.unref(IconCalendarFilled))
                                ]),
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Сроки доставки"),
                                  vueExports.createVNode("div", { class: "mt-2" }, [
                                    vueExports.createVNode("div", { class: "border-b-filling grid grid-cols-2 gap-4 border-b pb-3" }, [
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                        vueExports.createTextVNode(" Доставка: "),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                      ]),
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                        vueExports.createTextVNode(" Самовывоз: "),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "день в день")
                                      ])
                                    ]),
                                    vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium mt-3" }, "Оформление заказа после 19:00"),
                                    vueExports.createVNode("div", { class: "mt-2 grid grid-cols-2 gap-4" }, [
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium basis-1/2" }, [
                                        vueExports.createTextVNode(" Доставка: "),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "через день")
                                      ]),
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium shrink-0 basis-1/2" }, [
                                        vueExports.createTextVNode(" Самовывоз: "),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                            vueExports.createVNode("h4", { class: "text-default-medium text-text mb-3" }, "Стоимость доставки"),
                            vueExports.createVNode(_sfc_main$4, { value: "0" }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(_sfc_main$1, { value: "0" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$2, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                          vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Сочи")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$3, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex justify-between" }, [
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                width: "20px",
                                                height: "20px"
                                              })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 09:00 до 21:00")
                                              ])
                                            ])
                                          ]),
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 6000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                ]),
                                                vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "до 6000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "400 руб.")
                                                ])
                                              ])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                vueExports.createVNode(_sfc_main$1, { value: "1" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$2, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                          vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Адлер, Сириус")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$3, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex justify-between" }, [
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                width: "20px",
                                                height: "20px"
                                              })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("p", { class: "text-mob-small" }, "Понедельник, Среда, Пятница")
                                              ])
                                            ])
                                          ]),
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 8000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                ]),
                                                vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "до 8000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1000 руб.")
                                                ])
                                              ])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                vueExports.createVNode(_sfc_main$1, { value: "2" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$2, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                          vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "Красная Поляна")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$3, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex justify-between" }, [
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                width: "20px",
                                                height: "20px"
                                              })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("p", { class: "text-mob-small" }, "Понедельник, Среда, Пятница")
                                              ])
                                            ])
                                          ]),
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 25000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                ]),
                                                vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "до 25000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "2000 руб.")
                                                ])
                                              ])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_sfc_main$9, { value: "3" }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("div", { class: "text-text flex gap-8" }, [
                          vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                            vueExports.createVNode("h4", { class: "text-default-medium mb-3" }, "График приема заказов"),
                            vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                              vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode(vueExports.unref(IconClockFilled))
                                ]),
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Прием заказов"),
                                  vueExports.createVNode("div", { class: "mt-2 flex flex-col gap-0.5" }, [
                                    vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно"),
                                    vueExports.createVNode("p", { class: "text-subsidiary-reg" }, "Через сайт - круглосуточно")
                                  ])
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode(vueExports.unref(IconTruckFilled))
                                ]),
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Оформление заказов"),
                                  vueExports.createVNode("div", { class: "mt-2" }, [
                                    vueExports.createVNode("a", {
                                      href: "tel:+7 (499) 938-90-10",
                                      class: "text-mob-small-bold"
                                    }, "+7 (499) 938-90-10"),
                                    vueExports.createVNode("p", { class: "text-mob-small" }, "с 10:00 до 20:00"),
                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "Ежедневно")
                                  ])
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" }, [
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode(vueExports.unref(IconCalendarFilled))
                                ]),
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode("h4", { class: "text-small-medium" }, "Сроки доставки"),
                                  vueExports.createVNode("div", { class: "mt-2" }, [
                                    vueExports.createVNode("div", { class: "border-b-filling grid grid-cols-2 gap-4 border-b pb-3" }, [
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                        vueExports.createTextVNode(" Доставка: "),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                      ]),
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                                        vueExports.createTextVNode(" Самовывоз: "),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "день в день")
                                      ])
                                    ]),
                                    vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium mt-3" }, "Оформление заказа после 19:00"),
                                    vueExports.createVNode("div", { class: "mt-2 grid grid-cols-2 gap-4" }, [
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium basis-1/2" }, [
                                        vueExports.createTextVNode(" Доставка: "),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "через день")
                                      ]),
                                      vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium shrink-0 basis-1/2" }, [
                                        vueExports.createTextVNode(" Самовывоз: "),
                                        vueExports.createVNode("span", { class: "text-mob-small-medium text-text" }, "на следующий день")
                                      ])
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          vueExports.createVNode("div", { class: "flex-1 basis-1/2" }, [
                            vueExports.createVNode("h4", { class: "text-default-medium text-text mb-3" }, "Стоимость доставки"),
                            vueExports.createVNode(_sfc_main$4, { value: "0" }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(_sfc_main$1, { value: "0" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$2, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                          vueExports.createVNode("p", { class: "text-small-medium" }, "1 зона"),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "внутри КАД")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$3, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex justify-between" }, [
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                width: "20px",
                                                height: "20px"
                                              })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 11:00 до 17:00"),
                                                vueExports.createVNode("p", { class: "text-complimentary-reg text-subsidiary" }, "17:00–22:00")
                                              ])
                                            ])
                                          ]),
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 8000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                ]),
                                                vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 8000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "550 руб.")
                                                ])
                                              ])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                vueExports.createVNode(_sfc_main$1, { value: "1" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$2, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                          vueExports.createVNode("p", { class: "text-small-medium" }, "2 зона"),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 10 км от КАД")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$3, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex justify-between" }, [
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                width: "20px",
                                                height: "20px"
                                              })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 14:00 до 19:00")
                                              ])
                                            ])
                                          ]),
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 8000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                ]),
                                                vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 8000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "600 руб.")
                                                ])
                                              ])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                vueExports.createVNode(_sfc_main$1, { value: "2" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$2, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                          vueExports.createVNode("p", { class: "text-small-medium" }, "3 зона"),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "до 20 км от КАД")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$3, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex justify-between" }, [
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                width: "20px",
                                                height: "20px"
                                              })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                              ])
                                            ])
                                          ]),
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 50000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                ]),
                                                vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "до 50000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "1300 руб.")
                                                ])
                                              ])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                vueExports.createVNode(_sfc_main$1, { value: "3" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$2, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex flex-col items-start justify-items-start" }, [
                                          vueExports.createVNode("p", { class: "text-small-medium" }, "4 зона"),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg mt-0.5" }, "от 20 до 30 км от КАД")
                                        ])
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createVNode(_sfc_main$3, null, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode("div", { class: "flex justify-between" }, [
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                                width: "20px",
                                                height: "20px"
                                              })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Интервалы доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("p", { class: "text-mob-small" }, "Ежедневно с 19:00 до 23:00")
                                              ])
                                            ])
                                          ]),
                                          vueExports.createVNode("div", { class: "flex gap-2" }, [
                                            vueExports.createVNode("div", null, [
                                              vueExports.createVNode(vueExports.unref(IconWalletOutline), { class: "mt-0.5" })
                                            ]),
                                            vueExports.createVNode("div", { class: "!text-text" }, [
                                              vueExports.createVNode("h4", { class: "text-small-medium" }, "Стоимость доставки"),
                                              vueExports.createVNode("div", { class: "mt-1" }, [
                                                vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "от 30000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                                ]),
                                                vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                                  vueExports.createVNode("p", null, "до 30000 руб."),
                                                  vueExports.createVNode("div", { class: "text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "800 руб.")
                                                ])
                                              ])
                                            ])
                                          ])
                                        ])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_sfc_main$9, { value: "4" }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("div", { class: "text-text flex gap-8" }, "Информация о доставке")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "mt-4" }, _attrs))} data-v-b12bf230><div class="w-full" data-v-b12bf230><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(menuItems, (item, index) => {
          _push(`<div class="border-stroke justify-between border-b" data-v-b12bf230><button class="flex w-full items-center justify-between px-2 py-4" data-v-b12bf230><h4 class="text-small-medium flex items-center gap-1" data-v-b12bf230>`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconMapPin), {
            width: "13px",
            height: "13px"
          }, null, _parent));
          _push(` ${serverRenderer_cjs_prodExports.ssrInterpolate(item.label)}</h4><div class="flex items-center justify-between gap-2 text-base font-semibold" data-v-b12bf230><div class="relative h-4 w-4" data-v-b12bf230><span class="${serverRenderer_cjs_prodExports.ssrRenderClass([{
            "rotate-45": openIndex.value === index,
            "rotate-0": openIndex.value !== index
          }, "bg-text absolute top-1/2 left-0 h-[1px] w-full transition-transform duration-300"])}" data-v-b12bf230></span><span class="${serverRenderer_cjs_prodExports.ssrRenderClass([{
            "-rotate-45": openIndex.value === index,
            "rotate-90": openIndex.value !== index
          }, "bg-text absolute top-1/2 left-0 h-[1px] w-full transition-transform duration-300"])}" data-v-b12bf230></span></div></div></button><div style="${serverRenderer_cjs_prodExports.ssrRenderStyle(openIndex.value === index ? null : { display: "none" })}" class="space-y-2 transition-all duration-300" data-v-b12bf230><p class="text-mob-small-medium" data-v-b12bf230>График приема заказов ${serverRenderer_cjs_prodExports.ssrInterpolate(index)}</p>`);
          if (vueExports.unref(isMobile)) {
            _push(`<div class="space-y-2" data-v-b12bf230><div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230><div data-v-b12bf230>`);
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockFilled), {
              width: "24px",
              height: "24px"
            }, null, _parent));
            _push(`</div><div data-v-b12bf230><h4 class="text-mob-small-medium" data-v-b12bf230>Прием заказов</h4><div class="mt-2 flex flex-col gap-0.5" data-v-b12bf230><p class="text-subsidiary-reg" data-v-b12bf230>с 10:00 до 20:00</p><p class="text-complimentary-reg text-subsidiary" data-v-b12bf230>Ежедневно</p><p class="text-subsidiary-reg" data-v-b12bf230>Через сайт - круглосуточно</p></div></div></div><div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230><div data-v-b12bf230>`);
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconTruckFilled), {
              width: "24px",
              height: "24px"
            }, null, _parent));
            _push(`</div><div data-v-b12bf230><h4 class="text-mob-small-medium" data-v-b12bf230>Оформление заказов</h4><div class="mt-2" data-v-b12bf230><a href="tel:+7 (499) 938-90-10" class="text-mob-small-bold" data-v-b12bf230>+7 (499) 938-90-10</a><p class="text-subsidiary-reg" data-v-b12bf230>с 10:00 до 20:00</p><p class="text-complimentary-reg text-subsidiary" data-v-b12bf230>Ежедневно</p></div></div></div><div class="bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230><div data-v-b12bf230>`);
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCalendarFilled), {
              width: "24px",
              height: "24px"
            }, null, _parent));
            _push(`</div><div data-v-b12bf230><h4 class="text-mob-small-medium" data-v-b12bf230>Сроки доставки</h4><div class="mt-2" data-v-b12bf230><div class="border-b-filling grid grid-cols-1 gap-1.5 border-b pb-3" data-v-b12bf230><p class="text-additional text-subsidiary-medium" data-v-b12bf230> Доставка: <span class="text-subsidiary-medium text-text" data-v-b12bf230>на следующий день</span></p><p class="text-additional text-subsidiary-medium" data-v-b12bf230> Самовывоз: <span class="text-subsidiary-medium text-text" data-v-b12bf230>день в день</span></p></div><p class="text-additional text-complimentary-reg mt-3" data-v-b12bf230>Оформление заказа после 19:00</p><div class="mt-2 grid grid-cols-1 gap-1.5" data-v-b12bf230><p class="text-additional text-subsidiary-medium basis-1/2" data-v-b12bf230> Доставка: <span class="text-subsidiary-medium text-text" data-v-b12bf230>через день</span></p><p class="text-additional text-subsidiary-medium shrink-0 basis-1/2" data-v-b12bf230> Самовывоз: <span class="text-subsidiary-medium text-text" data-v-b12bf230>на следующий день</span></p></div></div></div></div></div>`);
          } else {
            _push(`<div class="grid grid-cols-2 gap-2" data-v-b12bf230><div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230><div data-v-b12bf230>`);
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockFilled), null, null, _parent));
            _push(`</div><div data-v-b12bf230><h4 class="text-small-medium" data-v-b12bf230>Прием заказов</h4><div class="mt-2 flex flex-col gap-0.5" data-v-b12bf230><p class="text-mob-small" data-v-b12bf230>с 10:00 до 20:00</p><p class="text-complimentary-reg text-subsidiary" data-v-b12bf230>Ежедневно</p><p class="text-subsidiary-reg" data-v-b12bf230>Через сайт - круглосуточно</p></div></div></div><div class="bg-light-gray flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230><div data-v-b12bf230>`);
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconTruckFilled), null, null, _parent));
            _push(`</div><div data-v-b12bf230><h4 class="text-small-medium" data-v-b12bf230>Оформление заказов</h4><div class="mt-2" data-v-b12bf230><a href="tel:+7 (499) 938-90-10" class="text-mob-small-bold" data-v-b12bf230>+7 (499) 938-90-10</a><p class="text-mob-small" data-v-b12bf230>с 10:00 до 20:00</p><p class="text-complimentary-reg text-subsidiary" data-v-b12bf230>Ежедневно</p></div></div></div><div class="bg-light-gray col-span-2 flex gap-2 rounded-2xl p-4 text-nowrap" data-v-b12bf230><div data-v-b12bf230>`);
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCalendarFilled), null, null, _parent));
            _push(`</div><div data-v-b12bf230><h4 class="text-small-medium" data-v-b12bf230>Сроки доставки</h4><div class="mt-2" data-v-b12bf230><div class="border-b-filling grid grid-cols-2 gap-4 border-b pb-3" data-v-b12bf230><p class="text-additional text-subsidiary-medium" data-v-b12bf230> Доставка: <span class="text-mob-small-medium text-text" data-v-b12bf230>на следующий день</span></p><p class="text-additional text-subsidiary-medium" data-v-b12bf230> Самовывоз: <span class="text-mob-small-medium text-text" data-v-b12bf230>день в день</span></p></div><p class="text-additional text-subsidiary-medium mt-3" data-v-b12bf230>Оформление заказа после 19:00</p><div class="mt-2 grid grid-cols-2 gap-4" data-v-b12bf230><p class="text-additional text-subsidiary-medium basis-1/2" data-v-b12bf230> Доставка: <span class="text-mob-small-medium text-text" data-v-b12bf230>через день</span></p><p class="text-additional text-subsidiary-medium shrink-0 basis-1/2" data-v-b12bf230> Самовывоз: <span class="text-mob-small-medium text-text" data-v-b12bf230>на следующий день</span></p></div></div></div></div></div>`);
          }
          _push(`<div class="max-w-fit" data-v-b12bf230><h4 class="text-small-medium mb-2" data-v-b12bf230>Стоимость доставки</h4>`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, { value: "0" }, {
            default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, null, {
                  default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, { value: "0" }, {
                        default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="flex items-center justify-center gap-1.5" data-v-b12bf230${_scopeId3}>1 зона</div>`);
                          } else {
                            return [
                              vueExports.createVNode("div", { class: "flex items-center justify-center gap-1.5" }, "1 зона")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, { value: "1" }, {
                        default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="flex items-center justify-center gap-1.5" data-v-b12bf230${_scopeId3}>2 зона</div>`);
                          } else {
                            return [
                              vueExports.createVNode("div", { class: "flex items-center justify-center gap-1.5" }, "2 зона")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, { value: "2" }, {
                        default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="flex items-center justify-center gap-1.5" data-v-b12bf230${_scopeId3}>3 зона</div>`);
                          } else {
                            return [
                              vueExports.createVNode("div", { class: "flex items-center justify-center gap-1.5" }, "3 зона")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, { value: "3" }, {
                        default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="flex items-center justify-center gap-1.5" data-v-b12bf230${_scopeId3}>4 зона</div>`);
                          } else {
                            return [
                              vueExports.createVNode("div", { class: "flex items-center justify-center gap-1.5" }, "4 зона")
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        vueExports.createVNode(_sfc_main$7, { value: "0" }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode("div", { class: "flex items-center justify-center gap-1.5" }, "1 зона")
                          ]),
                          _: 1
                        }),
                        vueExports.createVNode(_sfc_main$7, { value: "1" }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode("div", { class: "flex items-center justify-center gap-1.5" }, "2 зона")
                          ]),
                          _: 1
                        }),
                        vueExports.createVNode(_sfc_main$7, { value: "2" }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode("div", { class: "flex items-center justify-center gap-1.5" }, "3 зона")
                          ]),
                          _: 1
                        }),
                        vueExports.createVNode(_sfc_main$7, { value: "3" }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode("div", { class: "flex items-center justify-center gap-1.5" }, "4 зона")
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$8, null, {
                  default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      serverRenderer_cjs_prodExports.ssrRenderList(new Array(4), (_3, i) => {
                        _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, {
                          key: i,
                          value: String(i)
                        }, {
                          default: vueExports.withCtx((_4, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="flex gap-2" data-v-b12bf230${_scopeId3}><div data-v-b12bf230${_scopeId3}>`);
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconWalletOutline), {
                                class: "mt-1",
                                width: "16px",
                                height: "16px"
                              }, null, _parent4, _scopeId3));
                              _push4(`</div><div class="flex-grow-1 space-y-2" data-v-b12bf230${_scopeId3}><p class="!text-text text-mob-small-medium" data-v-b12bf230${_scopeId3}>Стоимость доставки ${serverRenderer_cjs_prodExports.ssrInterpolate(i)}</p><div class="text-mob-small flex items-center justify-between gap-10" data-v-b12bf230${_scopeId3}><p class="!text-text max-md:text-subsidiary-reg" data-v-b12bf230${_scopeId3}>от 8000 руб.</p><div class="text-subsidiary-medium md:text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId3}>Бесплатно</div></div><div class="text-mob-small mt-2 flex items-center justify-between gap-10" data-v-b12bf230${_scopeId3}><p class="!text-text max-md:text-subsidiary-reg" data-v-b12bf230${_scopeId3}>от 8000 руб.</p><div class="text-subsidiary-medium md:text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" data-v-b12bf230${_scopeId3}>400 руб.</div></div></div></div><div class="mt-2 flex gap-2" data-v-b12bf230${_scopeId3}><div data-v-b12bf230${_scopeId3}>`);
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), {
                                class: "mt-0.5",
                                width: "16px",
                                height: "16px"
                              }, null, _parent4, _scopeId3));
                              _push4(`</div><div class="!text-text" data-v-b12bf230${_scopeId3}><h4 class="text-mob-small-medium md:text-small-medium" data-v-b12bf230${_scopeId3}>Интервалы доставки</h4><div class="mt-2" data-v-b12bf230${_scopeId3}><p class="text-subsidiary-reg md:text-mob-small" data-v-b12bf230${_scopeId3}>Ежедневно с 09:00 до 21:00</p><p class="text-complimentary-reg text-additional" data-v-b12bf230${_scopeId3}>любое 4-х часовое окно</p></div></div></div>`);
                            } else {
                              return [
                                vueExports.createVNode("div", { class: "flex gap-2" }, [
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode(vueExports.unref(IconWalletOutline), {
                                      class: "mt-1",
                                      width: "16px",
                                      height: "16px"
                                    })
                                  ]),
                                  vueExports.createVNode("div", { class: "flex-grow-1 space-y-2" }, [
                                    vueExports.createVNode("p", { class: "!text-text text-mob-small-medium" }, "Стоимость доставки " + vueExports.toDisplayString(i), 1),
                                    vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                      vueExports.createVNode("p", { class: "!text-text max-md:text-subsidiary-reg" }, "от 8000 руб."),
                                      vueExports.createVNode("div", { class: "text-subsidiary-medium md:text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                    ]),
                                    vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                      vueExports.createVNode("p", { class: "!text-text max-md:text-subsidiary-reg" }, "от 8000 руб."),
                                      vueExports.createVNode("div", { class: "text-subsidiary-medium md:text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "400 руб.")
                                    ])
                                  ])
                                ]),
                                vueExports.createVNode("div", { class: "mt-2 flex gap-2" }, [
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                      class: "mt-0.5",
                                      width: "16px",
                                      height: "16px"
                                    })
                                  ]),
                                  vueExports.createVNode("div", { class: "!text-text" }, [
                                    vueExports.createVNode("h4", { class: "text-mob-small-medium md:text-small-medium" }, "Интервалы доставки"),
                                    vueExports.createVNode("div", { class: "mt-2" }, [
                                      vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small" }, "Ежедневно с 09:00 до 21:00"),
                                      vueExports.createVNode("p", { class: "text-complimentary-reg text-additional" }, "любое 4-х часовое окно")
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(new Array(4), (_3, i) => {
                          return vueExports.openBlock(), vueExports.createBlock(_sfc_main$9, {
                            key: i,
                            value: String(i)
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode("div", { class: "flex gap-2" }, [
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode(vueExports.unref(IconWalletOutline), {
                                    class: "mt-1",
                                    width: "16px",
                                    height: "16px"
                                  })
                                ]),
                                vueExports.createVNode("div", { class: "flex-grow-1 space-y-2" }, [
                                  vueExports.createVNode("p", { class: "!text-text text-mob-small-medium" }, "Стоимость доставки " + vueExports.toDisplayString(i), 1),
                                  vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                    vueExports.createVNode("p", { class: "!text-text max-md:text-subsidiary-reg" }, "от 8000 руб."),
                                    vueExports.createVNode("div", { class: "text-subsidiary-medium md:text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                  ]),
                                  vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                    vueExports.createVNode("p", { class: "!text-text max-md:text-subsidiary-reg" }, "от 8000 руб."),
                                    vueExports.createVNode("div", { class: "text-subsidiary-medium md:text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "400 руб.")
                                  ])
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "mt-2 flex gap-2" }, [
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                    class: "mt-0.5",
                                    width: "16px",
                                    height: "16px"
                                  })
                                ]),
                                vueExports.createVNode("div", { class: "!text-text" }, [
                                  vueExports.createVNode("h4", { class: "text-mob-small-medium md:text-small-medium" }, "Интервалы доставки"),
                                  vueExports.createVNode("div", { class: "mt-2" }, [
                                    vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small" }, "Ежедневно с 09:00 до 21:00"),
                                    vueExports.createVNode("p", { class: "text-complimentary-reg text-additional" }, "любое 4-х часовое окно")
                                  ])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  vueExports.createVNode(_sfc_main$6, null, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_sfc_main$7, { value: "0" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode("div", { class: "flex items-center justify-center gap-1.5" }, "1 зона")
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_sfc_main$7, { value: "1" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode("div", { class: "flex items-center justify-center gap-1.5" }, "2 зона")
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_sfc_main$7, { value: "2" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode("div", { class: "flex items-center justify-center gap-1.5" }, "3 зона")
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(_sfc_main$7, { value: "3" }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode("div", { class: "flex items-center justify-center gap-1.5" }, "4 зона")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_sfc_main$8, null, {
                    default: vueExports.withCtx(() => [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(new Array(4), (_2, i) => {
                        return vueExports.openBlock(), vueExports.createBlock(_sfc_main$9, {
                          key: i,
                          value: String(i)
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode("div", { class: "flex gap-2" }, [
                              vueExports.createVNode("div", null, [
                                vueExports.createVNode(vueExports.unref(IconWalletOutline), {
                                  class: "mt-1",
                                  width: "16px",
                                  height: "16px"
                                })
                              ]),
                              vueExports.createVNode("div", { class: "flex-grow-1 space-y-2" }, [
                                vueExports.createVNode("p", { class: "!text-text text-mob-small-medium" }, "Стоимость доставки " + vueExports.toDisplayString(i), 1),
                                vueExports.createVNode("div", { class: "text-mob-small flex items-center justify-between gap-10" }, [
                                  vueExports.createVNode("p", { class: "!text-text max-md:text-subsidiary-reg" }, "от 8000 руб."),
                                  vueExports.createVNode("div", { class: "text-subsidiary-medium md:text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "Бесплатно")
                                ]),
                                vueExports.createVNode("div", { class: "text-mob-small mt-2 flex items-center justify-between gap-10" }, [
                                  vueExports.createVNode("p", { class: "!text-text max-md:text-subsidiary-reg" }, "от 8000 руб."),
                                  vueExports.createVNode("div", { class: "text-subsidiary-medium md:text-mob-small-medium bg-filling rounded-10 px-2 py-0.5" }, "400 руб.")
                                ])
                              ])
                            ]),
                            vueExports.createVNode("div", { class: "mt-2 flex gap-2" }, [
                              vueExports.createVNode("div", null, [
                                vueExports.createVNode(vueExports.unref(IconClockOutline), {
                                  class: "mt-0.5",
                                  width: "16px",
                                  height: "16px"
                                })
                              ]),
                              vueExports.createVNode("div", { class: "!text-text" }, [
                                vueExports.createVNode("h4", { class: "text-mob-small-medium md:text-small-medium" }, "Интервалы доставки"),
                                vueExports.createVNode("div", { class: "mt-2" }, [
                                  vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small" }, "Ежедневно с 09:00 до 21:00"),
                                  vueExports.createVNode("p", { class: "text-complimentary-reg text-additional" }, "любое 4-х часовое окно")
                                ])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/product-delivery/ui/ProductDelivery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProductDelivery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b12bf230"]]);
export {
  ProductDelivery as P
};
