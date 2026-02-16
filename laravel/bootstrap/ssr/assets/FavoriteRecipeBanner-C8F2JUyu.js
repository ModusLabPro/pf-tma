import { v as vueExports, s as serverRenderer_cjs_prodExports, l as link_default, a as VButton } from "../ssr.js";
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
  __name: "FavoriteRecipeBanner",
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
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "bg-text rounded-20 flex h-full flex-col justify-between p-2 text-white md:p-4" }, _attrs))}><div class="flex flex-col gap-2"><h3 class="font-vast text-vast-mob-title-bold">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.title)}</h3><p class="text-subsidiary-reg md:text-mob-small-reg">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.description)}</p></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), { href: _ctx.link_url }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
              variant: "light",
              label: _ctx.button_text,
              class: "line-clamp-1 w-fit"
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(VButton), {
                variant: "light",
                label: _ctx.button_text,
                class: "line-clamp-1 w-fit"
              }, null, 8, ["label"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/profile/profile-favorite/ui/FavoriteRecipeBanner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
