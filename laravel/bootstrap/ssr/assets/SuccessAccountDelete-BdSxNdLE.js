import { v as vueExports, u as useScreenSize, s as serverRenderer_cjs_prodExports, V as VContainer, a as VButton, _ as _sfc_main$1 } from "../ssr.js";
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
  __name: "SuccessAccountDelete",
  __ssrInlineRender: true,
  setup(__props) {
    const { isMobile } = useScreenSize();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), vueExports.mergeProps({ class: "flex w-full items-center justify-center" }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-light-gray mx-6 my-30 flex w-full flex-col-reverse rounded-[40px] pt-18 pb-4 max-lg:items-center max-lg:p-4 lg:mx-40 lg:flex-row lg:justify-around lg:pl-20 xl:pl-40"${_scopeId}><div${_scopeId}><h2 class="text-default-medium lg:text-heavy-medium max-lg:text-center"${_scopeId}>Готово, ваш аккаунт успешно удален</h2><p class="text-subsidiary-reg md:text-mob-small-reg mt-2 max-lg:text-center"${_scopeId}> Если у вас возникли вопросы или проблемы с доступом на сайт, `);
            if (!vueExports.unref(isMobile)) {
              _push2(`<br${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(` напишите нам </p>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
              label: "Написать в поддержку",
              class: "mt-8 max-lg:mx-auto"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
              src: "/images/test-images/account-delete.png",
              alt: "",
              width: vueExports.unref(isMobile) ? "160px" : "330px",
              class: "-mt-10 lg:-mt-24"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "bg-light-gray mx-6 my-30 flex w-full flex-col-reverse rounded-[40px] pt-18 pb-4 max-lg:items-center max-lg:p-4 lg:mx-40 lg:flex-row lg:justify-around lg:pl-20 xl:pl-40" }, [
                vueExports.createVNode("div", null, [
                  vueExports.createVNode("h2", { class: "text-default-medium lg:text-heavy-medium max-lg:text-center" }, "Готово, ваш аккаунт успешно удален"),
                  vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-2 max-lg:text-center" }, [
                    vueExports.createTextVNode(" Если у вас возникли вопросы или проблемы с доступом на сайт, "),
                    !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("br", { key: 0 })) : vueExports.createCommentVNode("", true),
                    vueExports.createTextVNode(" напишите нам ")
                  ]),
                  vueExports.createVNode(vueExports.unref(VButton), {
                    label: "Написать в поддержку",
                    class: "mt-8 max-lg:mx-auto"
                  })
                ]),
                vueExports.createVNode(vueExports.unref(_sfc_main$1), {
                  src: "/images/test-images/account-delete.png",
                  alt: "",
                  width: vueExports.unref(isMobile) ? "160px" : "330px",
                  class: "-mt-10 lg:-mt-24"
                }, null, 8, ["width"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/success-account-delete/ui/SuccessAccountDelete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
