import { v as vueExports, s as serverRenderer_cjs_prodExports, t as _export_sfc } from "../ssr.js";
import { I as IconArrowDownFull } from "./IconArrowDownFull-CQhNp1Ot.js";
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
  __name: "BonusNotification",
  __ssrInlineRender: true,
  props: {
    id: {},
    amount: {},
    type: {},
    status: {},
    active_date: {},
    end_date: {}
  },
  setup(__props) {
    const isFutureDate = (dateStr) => {
      const [day, month, year] = dateStr.split(".").map(Number);
      const date = new Date(year, month - 1, day);
      const now = /* @__PURE__ */ new Date();
      return date > now;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "bonus-notification bg-input flex cursor-pointer items-center justify-between rounded-2xl p-3 transition-colors duration-200 ease-in hover:shadow-[0_4px_20px_0_rgba(0,0,0,0.1)]" }, _attrs))} data-v-a63114f8><div class="flex items-center gap-2" data-v-a63114f8><div class="bonus-notification__arrow-container bg-filling w-fit rounded-full p-2 transition-colors duration-200 ease-in" data-v-a63114f8>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowDownFull), {
        class: ["bonus-notification__arrow", { "rotate-180": _ctx.type === "Списание" }]
      }, null, _parent));
      _push(`</div><div data-v-a63114f8><h4 class="bonus-notification__title text-mob-small-medium transition-colors duration-200 ease-in" data-v-a63114f8>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.type)}</h4><div class="mt-1 flex items-center gap-2" data-v-a63114f8><span class="text-subsidiary-reg text-additional" data-v-a63114f8>${serverRenderer_cjs_prodExports.ssrInterpolate(isFutureDate(_ctx.active_date) ? "Будет начислено " : "")}${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.active_date)}</span>`);
      if (_ctx.end_date) {
        _push(`<span class="bg-default text-subsidiary-reg rounded-lg px-2 py-1 text-white" data-v-a63114f8>до ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.end_date)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="flex flex-col justify-between text-right" data-v-a63114f8><span class="text-mob-small-medium justify-end" data-v-a63114f8>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.type === "Начисление" ? "+" : "-")} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.amount)}</span><p class="text-subsidiary-reg text-additional" data-v-a63114f8>${serverRenderer_cjs_prodExports.ssrInterpolate(isFutureDate(_ctx.active_date) ? "В обработке" : _ctx.status)}</p></div></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/profile/profile-privilege-history/ui/BonusNotification.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BonusNotification = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a63114f8"]]);
export {
  BonusNotification as default
};
