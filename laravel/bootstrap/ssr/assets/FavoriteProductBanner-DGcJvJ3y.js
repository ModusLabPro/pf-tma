import { v as vueExports, s as serverRenderer_cjs_prodExports, l as link_default, a as VButton, _ as _sfc_main$1 } from "../ssr.js";
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
  __name: "FavoriteProductBanner",
  __ssrInlineRender: true,
  props: {
    id: {},
    title: {},
    description: {},
    addition_description: {},
    link_url: {},
    button_text: {},
    image: {},
    promotion_days_left: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "col-span-2 flex h-full flex-col overflow-hidden rounded-[30px]" }, _attrs))}><div class="bg-text relative z-0 h-full w-full mask-[url(&#39;/images/masks/for_combo_mobile1.svg&#39;)] mask-cover mask-bottom-right mask-no-repeat max-sm:pb-14"><div class="relative z-10 flex flex-col justify-between p-4 text-white md:max-h-full lg:p-6 lg:pb-12"><div><h3 class="font-vast text-vast-additional lg:text-vast-mob-title-bold font-bold uppercase">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.title)}</h3><p class="text-subsidiary-reg md:text-mob-small-reg mt-2">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.description)}</p>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), { href: _ctx.link_url }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
              label: _ctx.button_text,
              variant: "light",
              class: "mt-6"
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(VButton), {
                label: _ctx.button_text,
                variant: "light",
                class: "mt-6"
              }, null, 8, ["label"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
        class: "-mt-30",
        height: "300px",
        width: "100%",
        src: _ctx.image.path,
        alt: "combo"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/profile/profile-favorite/ui/FavoriteProductBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
