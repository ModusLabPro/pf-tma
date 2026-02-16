import { v as vueExports, u as useScreenSize, s as serverRenderer_cjs_prodExports, _ as _sfc_main$1, l as link_default, D as _sfc_main$2 } from "../ssr.js";
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
  __name: "VPromoAlert",
  __ssrInlineRender: true,
  props: {
    type: {},
    item: {},
    id: {},
    button_link: {},
    is_read: { type: Boolean },
    created_at: {}
  },
  setup(__props) {
    const { isMobile } = useScreenSize();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      _push(`<article${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "border-b-default items-center gap-4 border-b py-2 transition-colors duration-200 ease-in sm:flex" }, _attrs))}>`);
      if (vueExports.unref(isMobile)) {
        _push(`<div class="mb-2 flex items-center justify-between"><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([{
          "bg-default": _ctx.type === "Новинка",
          "bg-delete": _ctx.type === "Акция"
        }, "w-full max-w-[94px] rounded-lg py-1 text-center"])}"><p class="text-complimentary-reg text-white">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.type)}</p></div><div class="flex w-full items-center justify-end gap-4"><div class="text-complimentary-reg text-additional flex items-center gap-1">`);
        if (!_ctx.is_read) {
          _push(`<div class="bg-default h-2 w-2 rounded-full"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.created_at)}</span></div>`);
        serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "deleteButton", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex w-full items-start xl:items-center"><div class="flex shrink-0 flex-col items-stretch gap-1">`);
      if (!vueExports.unref(isMobile)) {
        _push(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass([{
          "bg-default": _ctx.type === "Новинка",
          "bg-delete": _ctx.type === "Акция"
        }, "rounded-lg py-1 text-center"])}"><p class="text-complimentary-reg text-white">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.type)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.type === "Акция") {
        _push(`<!--[-->`);
        if (!!((_a = _ctx.item.image) == null ? void 0 : _a.path)) {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
            src: (_b = _ctx.item.image) == null ? void 0 : _b.path,
            alt: (_c = _ctx.item) == null ? void 0 : _c.name,
            width: "94px",
            height: vueExports.unref(isMobile) ? "100px" : "64px",
            "img-classes": "rounded-lg"
          }, null, _parent));
        } else {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
            src: "/images/productPlaceholder.png",
            alt: "Изображение товара",
            width: "94px",
            height: vueExports.unref(isMobile) ? "100px" : "64px",
            "img-classes": "rounded-lg"
          }, null, _parent));
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.type === "Новинка") {
        _push(`<!--[-->`);
        if (!!((_d = _ctx.item.images[0]) == null ? void 0 : _d.path)) {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
            src: (_e = _ctx.item.images[0]) == null ? void 0 : _e.path,
            alt: _ctx.item.name,
            width: "94px",
            height: "64px",
            "img-classes": "rounded-lg"
          }, null, _parent));
        } else {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
            src: "/images/productPlaceholder.png",
            alt: "Изображение товара",
            width: "94px",
            height: "64px",
            "img-classes": "rounded-lg"
          }, null, _parent));
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="ml-4">`);
      if (_ctx.type === "Новинка") {
        _push(`<div class="grid items-center gap-4 xl:grid-cols-[440px_auto]"><div class="flex w-full flex-col justify-between"><div class="flex flex-col gap-1"><h3 class="text-mob-small-bold">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.name)}</h3><dl class="flex flex-col gap-1 md:flex-row md:items-center md:gap-8"><div class="flex items-center gap-1"><dd class="text-complimentary-reg text-subsidiary">Средний вес</dd><dt class="text-subsidiary-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.weight)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.weight_type)}</dt></div><div class="flex items-center gap-1"><dd class="text-complimentary-reg text-subsidiary">Бренд</dd><dt class="text-subsidiary-medium">${serverRenderer_cjs_prodExports.ssrInterpolate((_f = _ctx.item.brands[0]) == null ? void 0 : _f.name)}</dt></div></dl></div><p class="text-mob-small-bold mt-3">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.price_type)}</p></div>`);
        if (!vueExports.unref(isMobile)) {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), { href: _ctx.button_link }, {
            default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
                  label: "Подробнее",
                  variant: "outlined",
                  class: "shrink-0",
                  rounded: "",
                  size: "small"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  vueExports.createVNode(_sfc_main$2, {
                    label: "Подробнее",
                    variant: "outlined",
                    class: "shrink-0",
                    rounded: "",
                    size: "small"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.type === "Акция") {
        _push(`<div class="grid items-center gap-4 xl:grid-cols-[440px_auto]"><div class="flex w-full flex-col justify-between"><div class="flex flex-col gap-1"><h3 class="text-mob-small-bold truncate lg:max-w-[420px]">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.name)}</h3><p class="text-complimentary-reg max-w-[440px]">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.short_description)}</p></div><div class="text-complimentary-reg mt-3 flex flex-wrap items-center gap-2 md:gap-4"><span class="bg-full rounded-full px-2 py-1 text-nowrap">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.type)}</span><span class="bg-delete rounded-full px-2 py-1 text-nowrap text-white">-${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.sale_percent)}%</span><div class="flex items-center gap-1 text-nowrap"><span class="text-subsidiary">Срок действия акции</span> <span class="text-subsidiary-medium">до ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.item.end_date)}</span></div></div></div>`);
        if (!vueExports.unref(isMobile)) {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), { href: _ctx.button_link }, {
            default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
                  label: "Подробнее",
                  variant: "outlined",
                  class: "w-full shrink-0",
                  rounded: "",
                  size: "small"
                }, null, _parent2, _scopeId));
              } else {
                return [
                  vueExports.createVNode(_sfc_main$2, {
                    label: "Подробнее",
                    variant: "outlined",
                    class: "w-full shrink-0",
                    rounded: "",
                    size: "small"
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!vueExports.unref(isMobile)) {
        _push(`<div class="flex w-full items-center justify-end gap-4"><div class="text-subsidiary-reg text-additional flex items-center gap-1">`);
        if (!_ctx.is_read) {
          _push(`<div class="bg-default h-2 w-2 rounded-full"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.created_at)}</span></div>`);
        if (!vueExports.unref(isMobile)) {
          serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "deleteButton", {}, null, _push, _parent);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vueExports.unref(isMobile)) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
          href: _ctx.button_link,
          class: "w-full"
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
                label: "Подробнее",
                variant: "outlined",
                class: "mt-2 w-full shrink-0",
                rounded: "",
                size: "small"
              }, null, _parent2, _scopeId));
            } else {
              return [
                vueExports.createVNode(_sfc_main$2, {
                  label: "Подробнее",
                  variant: "outlined",
                  class: "mt-2 w-full shrink-0",
                  rounded: "",
                  size: "small"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/profile/profile-notifications/ui/VPromoAlert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
