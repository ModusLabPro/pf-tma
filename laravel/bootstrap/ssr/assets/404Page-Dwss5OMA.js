import { v as vueExports, u as useScreenSize, s as serverRenderer_cjs_prodExports, V as VContainer, l as link_default, a as VButton, _ as _sfc_main$1 } from "../ssr.js";
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
  __name: "404Page",
  __ssrInlineRender: true,
  setup(__props) {
    const { isMobile } = useScreenSize();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), vueExports.mergeProps({ class: "px-6 sm:px-8" }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="my-15 flex h-full w-full items-center justify-center"${_scopeId}><div class="bg-light-gray mt-16 rounded-[40px]"${_scopeId}><div class="flex flex-col-reverse items-center gap-8 px-4 py-4 md:flex-row md:gap-15 lg:px-36"${_scopeId}><div class="max-md:text-center lg:max-w-[509px]"${_scopeId}><h1 class="lg:font-vast text-default-medium lg:text-vast-title-additional"${_scopeId}>Ошибка 404</h1><p class="text-subsidiary-reg md:text-mob-small-reg mt-2 max-md:text-center"${_scopeId}> Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке </p>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
              href: _ctx.route("main-page")
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                    label: "Перейти на главную",
                    class: "mt-8 max-md:mx-auto"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(VButton), {
                      label: "Перейти на главную",
                      class: "mt-8 max-md:mx-auto"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (!vueExports.unref(isMobile)) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
                src: "/images/404-img.png",
                alt: "404",
                class: "-mt-10"
              }, null, _parent2, _scopeId));
            } else {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
                src: "/images/404-mob.png",
                alt: "404",
                class: "-mt-20",
                width: "100px",
                height: "100px"
              }, null, _parent2, _scopeId));
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "my-15 flex h-full w-full items-center justify-center" }, [
                vueExports.createVNode("div", { class: "bg-light-gray mt-16 rounded-[40px]" }, [
                  vueExports.createVNode("div", { class: "flex flex-col-reverse items-center gap-8 px-4 py-4 md:flex-row md:gap-15 lg:px-36" }, [
                    vueExports.createVNode("div", { class: "max-md:text-center lg:max-w-[509px]" }, [
                      vueExports.createVNode("h1", { class: "lg:font-vast text-default-medium lg:text-vast-title-additional" }, "Ошибка 404"),
                      vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-2 max-md:text-center" }, " Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке "),
                      vueExports.createVNode(vueExports.unref(link_default), {
                        href: _ctx.route("main-page")
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(VButton), {
                            label: "Перейти на главную",
                            class: "mt-8 max-md:mx-auto"
                          })
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ]),
                    !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$1), {
                      key: 0,
                      src: "/images/404-img.png",
                      alt: "404",
                      class: "-mt-10"
                    })) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$1), {
                      key: 1,
                      src: "/images/404-mob.png",
                      alt: "404",
                      class: "-mt-20",
                      width: "100px",
                      height: "100px"
                    }))
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/404/ui/404Page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
