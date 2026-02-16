import { v as vueExports, a3 as CombinationLayout, s as serverRenderer_cjs_prodExports, h as head_default, l as link_default, a4 as CombinationPreviewCard, _ as _sfc_main$2 } from "../ssr.js";
import { _ as _sfc_main$1 } from "./VPagination-cbnzOOCr.js";
import { router } from "@inertiajs/core";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "@vue/shared";
import "@vue/compiler-ssr";
import "node:stream";
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
  ...{
    layout: CombinationLayout
  },
  __name: "CombinationPage",
  __ssrInlineRender: true,
  props: {
    is_combinations_group: { type: Boolean },
    combinations: {},
    seoData: {}
  },
  setup(__props) {
    const currentPage = vueExports.shallowRef(route().queryParams.page ? Number(route().queryParams.page) : 1);
    const onUpdatePage = (pageNumber) => {
      const currentRoute = route().current();
      const currentQuery = route().queryParams;
      if (currentRoute) {
        router.visit(route(currentRoute, { ...currentQuery, page: pageNumber }), {
          only: ["combinations"]
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(head_default), null, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.seoData.seo_title)}</title><meta name="description"${serverRenderer_cjs_prodExports.ssrRenderAttr("content", _ctx.seoData.seo_description)}${_scopeId}><meta name="keywords"${serverRenderer_cjs_prodExports.ssrRenderAttr("content", _ctx.seoData.seo_keywords)}${_scopeId}>`);
          } else {
            return [
              vueExports.createVNode("title", null, vueExports.toDisplayString(_ctx.seoData.seo_title), 1),
              vueExports.createVNode("meta", {
                name: "description",
                content: _ctx.seoData.seo_description
              }, null, 8, ["content"]),
              vueExports.createVNode("meta", {
                name: "keywords",
                content: _ctx.seoData.seo_keywords
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.combinations.total > 0) {
        _push(`<div class="flex flex-col gap-8">`);
        if (_ctx.is_combinations_group) {
          _push(`<!--[-->`);
          serverRenderer_cjs_prodExports.ssrRenderList(_ctx.combinations.data, (value, key) => {
            _push(`<section><header class="mb-4"><h2 class="md:text-heavy-bold text-default-bold">${serverRenderer_cjs_prodExports.ssrInterpolate(key)}</h2></header><div class="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-8"><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(value, (combination) => {
              _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                href: _ctx.route("combination.show", { combination: combination.id })
              }, {
                default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(CombinationPreviewCard), { combination }, null, _parent2, _scopeId));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(CombinationPreviewCard), { combination }, null, 8, ["combination"])
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]--></div></section>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<div class="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8"><!--[-->`);
          serverRenderer_cjs_prodExports.ssrRenderList(_ctx.combinations.data, (combination) => {
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
              href: _ctx.route("combination.show", { combination: combination.id })
            }, {
              default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(CombinationPreviewCard), { combination }, null, _parent2, _scopeId));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(CombinationPreviewCard), { combination }, null, 8, ["combination"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div>`);
        }
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
          modelValue: currentPage.value,
          "onUpdate:modelValue": [($event) => currentPage.value = $event, onUpdatePage],
          "per-page": _ctx.combinations.per_page,
          "total-count": _ctx.combinations.total,
          class: "mx-auto"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="bg-light-gray mt-16 rounded-[40px] md:mt-30"><div class="flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
          src: "/images/test-images/image_exclamation.webp",
          alt: "восклицание",
          class: "-mt-20 max-w-[120px] lg:max-w-[200px]"
        }, null, _parent));
        _push(`<p class="text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]"> К сожалению, по заданным параметрам ничего не найдено </p></div></div>`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/combination/ui/CombinationPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
