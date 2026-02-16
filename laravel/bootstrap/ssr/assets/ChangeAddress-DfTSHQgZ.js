import { v as vueExports, b as usePage, s as serverRenderer_cjs_prodExports, ai as _sfc_main$1, m as IconCaretRight, d as _sfc_main$2, L as _sfc_main$3, a as VButton } from "../ssr.js";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "@vue/shared";
import "@vue/compiler-ssr";
import "node:stream";
import "@inertiajs/core";
import "lodash-es";
import "@inertiajs/core/server";
import "vue-i18n";
import "primevue";
import "primevue/menu";
import "tailwind-merge";
import "primevue/config";
import "pinia";
import "@vueuse/core";
import "swiper/element/bundle";
import "primevue/avatar";
import "@primevue/icons/starfill";
import "primevue/rating";
import "@primevue/forms";
import "@primevue/forms/resolvers/zod";
import "zod";
import "primevue/scrollpanel";
import "primevue/breadcrumb";
import "primevue/menubar";
import "primevue/button";
import "@primevue/icons/check";
import "@primevue/icons/minus";
import "primevue/checkbox";
import "primevue/confirmdialog";
import "@primevue/icons/times";
import "@primevue/icons/windowmaximize";
import "@primevue/icons/windowminimize";
import "primevue/dialog";
import "primevue/inputtext";
import "primevue/badge";
import "primevue/popover";
import "primevue/radiobutton";
import "primevue/toast";
import "@vkid/sdk";
import "@primevue/icons/eye";
import "@primevue/icons/eyeslash";
import "primevue/password";
import "primevue/inputotp";
import "primevue/inputmask";
import "primevue/textarea";
import "axios";
import "primevue/useconfirm";
import "@primevue/icons/angledown";
import "@primevue/icons/angleup";
import "primevue/inputnumber";
import "@primevue/icons/chevrondown";
import "@primevue/icons/search";
import "@primevue/icons/spinner";
import "primevue/select";
import "primevue/selectbutton";
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ChangeAddress",
  __ssrInlineRender: true,
  props: {
    selectedAddressId: {},
    disabled: { type: Boolean, default: false }
  },
  emits: ["change-address"],
  setup(__props, { emit: __emit }) {
    const isModalOpen = vueExports.shallowRef(false);
    const page = usePage();
    const selectedAddress = vueExports.shallowRef();
    if (__props.selectedAddressId) {
      selectedAddress.value = page.props.auth.user.addresses.find((addr) => addr.id === __props.selectedAddressId);
    }
    const emit = __emit;
    const onSelectAddress = () => {
      if (!selectedAddress.value) return;
      emit("change-address", selectedAddress.value);
      isModalOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
        size: "small",
        rounded: "",
        disabled: _ctx.disabled,
        onClick: ($event) => isModalOpen.value = true
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="flex items-center gap-2"${_scopeId}> Выбрать другой адрес `);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), { class: "h-5 w-5" }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              vueExports.createVNode("span", { class: "flex items-center gap-2" }, [
                vueExports.createTextVNode(" Выбрать другой адрес "),
                vueExports.createVNode(vueExports.unref(IconCaretRight), { class: "h-5 w-5" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
        visible: isModalOpen.value,
        "onUpdate:visible": ($event) => isModalOpen.value = $event,
        class: "w-110",
        modal: "",
        draggable: false
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid gap-6"${_scopeId}><header class="flex flex-col items-center gap-2"${_scopeId}><h4 class="text-heavy-bold"${_scopeId}>Изменить адрес доставки</h4><p class="text-mob-small-reg"${_scopeId}>Выберите адрес</p></header><div class="flex flex-col gap-2"${_scopeId}><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(page).props.auth.user.addresses, (addr) => {
              _push2(`<div class="grid grid-cols-[auto_1fr] items-center gap-3 py-2"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                modelValue: selectedAddress.value,
                "onUpdate:modelValue": ($event) => selectedAddress.value = $event,
                value: addr,
                "input-id": `${addr.id}`
              }, null, _parent2, _scopeId));
              _push2(`<label${serverRenderer_cjs_prodExports.ssrRenderAttr("for", `${addr.id}`)}${_scopeId}><span class="text-mob-small-reg mb-0.5 block"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(addr.final_address)}</span>`);
              if (addr.is_primary) {
                _push2(`<span class="text-complimentary-bold text-additional block"${_scopeId}>Основной адрес</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</label></div>`);
            });
            _push2(`<!--]--></div><div class="grid grid-cols-2 gap-2"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
              label: "Отменить",
              variant: "outline",
              onClick: ($event) => isModalOpen.value = false
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
              label: "Сохранить",
              onClick: onSelectAddress
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "grid gap-6" }, [
                vueExports.createVNode("header", { class: "flex flex-col items-center gap-2" }, [
                  vueExports.createVNode("h4", { class: "text-heavy-bold" }, "Изменить адрес доставки"),
                  vueExports.createVNode("p", { class: "text-mob-small-reg" }, "Выберите адрес")
                ]),
                vueExports.createVNode("div", { class: "flex flex-col gap-2" }, [
                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(page).props.auth.user.addresses, (addr) => {
                    return vueExports.openBlock(), vueExports.createBlock("div", {
                      key: addr.id,
                      class: "grid grid-cols-[auto_1fr] items-center gap-3 py-2"
                    }, [
                      vueExports.createVNode(_sfc_main$3, {
                        modelValue: selectedAddress.value,
                        "onUpdate:modelValue": ($event) => selectedAddress.value = $event,
                        value: addr,
                        "input-id": `${addr.id}`
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "input-id"]),
                      vueExports.createVNode("label", {
                        for: `${addr.id}`
                      }, [
                        vueExports.createVNode("span", { class: "text-mob-small-reg mb-0.5 block" }, vueExports.toDisplayString(addr.final_address), 1),
                        addr.is_primary ? (vueExports.openBlock(), vueExports.createBlock("span", {
                          key: 0,
                          class: "text-complimentary-bold text-additional block"
                        }, "Основной адрес")) : vueExports.createCommentVNode("", true)
                      ], 8, ["for"])
                    ]);
                  }), 128))
                ]),
                vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2" }, [
                  vueExports.createVNode(vueExports.unref(VButton), {
                    label: "Отменить",
                    variant: "outline",
                    onClick: ($event) => isModalOpen.value = false
                  }, null, 8, ["onClick"]),
                  vueExports.createVNode(vueExports.unref(VButton), {
                    label: "Сохранить",
                    onClick: onSelectAddress
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/making-order/ui/ChangeAddress.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
