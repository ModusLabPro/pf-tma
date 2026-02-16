import { v as vueExports, u as useScreenSize, s as serverRenderer_cjs_prodExports, _ as _sfc_main$1, P as _sfc_main$2 } from "../ssr.js";
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
  __name: "CartPageProductCard",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { isMobile } = useScreenSize();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      if (!_ctx.item.is_combo) {
        _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([vueExports.unref(isMobile) ? "" : "border-b-filling border-b", "grid grid-cols-[auto_1fr_auto] gap-4 py-2"])}">`);
        if ((_a = _ctx.item.item.images[0]) == null ? void 0 : _a.path) {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
            src: _ctx.item.item.images[0].path,
            alt: "Изображение товара",
            width: vueExports.unref(isMobile) ? "74px" : "116px",
            height: vueExports.unref(isMobile) ? "64px" : "80px",
            class: "rounded-lg"
          }, null, _parent));
        } else {
          _push(`<div class="bg-surface-100 h-20 rounded-lg sm:w-[116px]"></div>`);
        }
        _push(`<div class="gap-3 py-2 sm:flex sm:flex-col"><h4 class="text-subsidiary-medium sm:text-mob-small-bold">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.item.name)}</h4>`);
        if (!vueExports.unref(isMobile)) {
          _push(`<dl class="flex items-center"><dt class="text-complimentary-reg text-additional mr-2">Артикул:</dt><dd class="text-subsidiary-medium mr-8">221312312</dd><dt class="text-complimentary-reg text-additional mr-2">Средний вес:</dt><dd class="text-subsidiary-medium mr-8">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.item.weight)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.item.weight_type)}</dd><dt class="text-complimentary-reg text-additional mr-2">Упаковка:</dt><dd class="text-subsidiary-medium mr-8">Вакуумная упаковка</dd><dt class="text-complimentary-reg text-additional mr-2">Бренд:</dt><dd class="text-subsidiary-medium mr-8">${serverRenderer_cjs_prodExports.ssrInterpolate((_b = _ctx.item.item.brands[0]) == null ? void 0 : _b.name)}</dd></dl>`);
        } else {
          _push(`<!---->`);
        }
        if (!vueExports.unref(isMobile)) {
          _push(`<div class="flex gap-4"><div>`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
            "count-in-cart": _ctx.item.quantity,
            "can-quick-buy": false
          }, null, _parent));
          _push(`</div><div class="flex gap-4"><div class="flex flex-col gap-0.5"><span class="text-complimentary-reg">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.item_price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.item.price_type)}</span><span class="text-mob-small-bold">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.total_price)} руб</span></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        if (vueExports.unref(isMobile)) {
          _push(`<div class="border-b-filling border-b pb-2"><dl class="mt-3 flex flex-wrap items-center gap-2"><dt class="text-complimentary-reg text-additional">Артикул:</dt><dd class="text-complimentary-reg">221312312</dd><dt class="text-complimentary-reg text-additional">Средний вес:</dt><dd class="text-complimentary-reg">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.item.weight)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.item.weight_type)}</dd></dl><dl class="mt-0.5 flex flex-wrap items-center gap-2"><dt class="text-complimentary-reg text-additional">Упаковка:</dt><dd class="text-complimentary-reg">Вакуумная упаковка</dd><dt class="text-complimentary-reg text-additional">Бренд:</dt><dd class="text-complimentary-reg">${serverRenderer_cjs_prodExports.ssrInterpolate((_c = _ctx.item.item.brands[0]) == null ? void 0 : _c.name)}</dd></dl><div class="mt-3 flex gap-4"><div>`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
            "count-in-cart": _ctx.item.quantity,
            "can-quick-buy": false
          }, null, _parent));
          _push(`</div><div class="flex gap-4"><div class="flex flex-col gap-0.5"><span class="text-complimentary-reg">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.item_price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.item.price_type)}</span><span class="text-mob-small-bold">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.total_price)} руб</span></div></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/cart/ui/CartPageProductCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
