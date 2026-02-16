import { v as vueExports, s as serverRenderer_cjs_prodExports, S as _sfc_main$1 } from "../ssr.js";
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
  __name: "ProductQuantityIndicator",
  __ssrInlineRender: true,
  props: {
    quantity: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.quantity === "Много") {
        _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "flex items-center gap-0.5 text-[#867F7F]" }, _attrs))}><div class="h-2 w-2 rounded-full bg-[#0A9570]"></div><div class="h-2 w-2 rounded-full bg-[#0A9570]"></div><div class="h-2 w-2 rounded-full bg-[#0A9570]"></div><div class="h-2 w-2 rounded-full bg-[#0A9570]"></div><div class="text-subsidiary-reg md:text-mob-small-medium ml-0.5">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.quantity)}</div><div>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), { value: "В наличии на складе" }, null, _parent));
        _push(`</div></div>`);
      } else if (_ctx.quantity === "Мало") {
        _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "flex items-center gap-0.5 text-[#867F7F]" }, _attrs))}><div class="h-2 w-2 rounded-full bg-[#f49f04]"></div><div class="h-2 w-2 rounded-full bg-[#f49f04]"></div><div class="h-2 w-2 rounded-full bg-[#f49f04]"></div><div class="bg-filling h-2 w-2 rounded-full"></div><div class="text-subsidiary-reg md:text-mob-small-medium ml-0.5">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.quantity)}</div><div>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), { value: "На складе ограниченное количество" }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "flex items-center gap-0.5" }, _attrs))}><div class="text-subsidiary-reg md:text-mob-small-medium text-[#e20000]">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.quantity)}</div><div>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), { value: "Доступно под заказ. Уточните детали у менеджера" }, null, _parent));
        _push(`</div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/product/ui/ProductQuantityIndicator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
