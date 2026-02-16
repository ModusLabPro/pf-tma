import { v as vueExports, s as serverRenderer_cjs_prodExports, _ as _sfc_main$1, k as _sfc_main$2, U as ProductCard, P as _sfc_main$3, W as _sfc_main$4 } from "../ssr.js";
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
  __name: "CombinationBlock",
  __ssrInlineRender: true,
  props: {
    variant: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "grid gap-4 lg:gap-8 xl:grid-cols-2" }, _attrs))}><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.variant.products && ((_a = _ctx.variant.products) == null ? void 0 : _a.length) > 1 ? "pr-6 sm:pr-0" : "", "flex flex-col gap-2"])}">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
        src: _ctx.variant.image.path,
        height: "100%",
        width: "100%",
        alt: "Вариант сервировки",
        "img-classes": "w-full",
        class: "h-[200px] overflow-hidden rounded-2xl lg:h-[300px]"
      }, null, _parent));
      _push(`<h4 class="text-default-bold">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.variant.name)}</h4><p class="text-mob-small-reg">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.variant.description)}</p></div><div class="flex flex-col gap-4"><p class="text-mob-small-bold lg:text-default-bold">Вам могут понадобиться</p><div class="max-w-[calc(100dvw_-_24px)] sm:max-w-[calc(100dvw_-_2*32px)]">`);
      if (_ctx.variant.products) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
          slides: _ctx.variant.products,
          "slider-options": {
            slidesPerView: 3,
            spaceBetween: 32,
            breakpoints: {
              0: { slidesPerView: 1.7, spaceBetween: 8 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
              1280: { slidesPerView: 2, spaceBetween: 32 },
              1504: { slidesPerView: 3, spaceBetween: 32 }
            }
          }
        }, {
          slide: vueExports.withCtx(({ slide }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ProductCard), {
                id: slide.id,
                key: slide.id,
                slug: slide.slug,
                "has-gift": slide.is_have_gift,
                title: slide.name,
                images: slide.images.map((i) => i.path),
                weight: slide.weight,
                "is-new": slide.is_new,
                "sale-percent": slide.sale_percent,
                description: slide.short_description,
                "degree-type": slide.degree_type,
                "is-favorite": slide.is_wishlist,
                categories: slide.tags.map((b) => b.name) ?? [],
                unit: slide.weight_type,
                price: Number(slide.sale_price) ?? 0,
                "price-unit": slide.price_type,
                "old-price": Number(slide.price) ?? 0,
                cashback_percent: slide.cashback_percent
              }, {
                favoriteButton: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
                      id: slide.id,
                      "initial-value": slide.is_wishlist
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                        id: slide.id,
                        "initial-value": slide.is_wishlist
                      }, null, 8, ["id", "initial-value"])
                    ];
                  }
                }),
                footer: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                      id: slide.id,
                      "count-in-cart": slide.count_in_cart,
                      quantity: slide.quantity
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                        id: slide.id,
                        "count-in-cart": slide.count_in_cart,
                        quantity: slide.quantity
                      }, null, 8, ["id", "count-in-cart", "quantity"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(ProductCard), {
                  id: slide.id,
                  key: slide.id,
                  slug: slide.slug,
                  "has-gift": slide.is_have_gift,
                  title: slide.name,
                  images: slide.images.map((i) => i.path),
                  weight: slide.weight,
                  "is-new": slide.is_new,
                  "sale-percent": slide.sale_percent,
                  description: slide.short_description,
                  "degree-type": slide.degree_type,
                  "is-favorite": slide.is_wishlist,
                  categories: slide.tags.map((b) => b.name) ?? [],
                  unit: slide.weight_type,
                  price: Number(slide.sale_price) ?? 0,
                  "price-unit": slide.price_type,
                  "old-price": Number(slide.price) ?? 0,
                  cashback_percent: slide.cashback_percent
                }, {
                  favoriteButton: vueExports.withCtx(() => [
                    vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                      id: slide.id,
                      "initial-value": slide.is_wishlist
                    }, null, 8, ["id", "initial-value"])
                  ]),
                  footer: vueExports.withCtx(() => [
                    vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                      id: slide.id,
                      "count-in-cart": slide.count_in_cart,
                      quantity: slide.quantity
                    }, null, 8, ["id", "count-in-cart", "quantity"])
                  ]),
                  _: 2
                }, 1032, ["id", "slug", "has-gift", "title", "images", "weight", "is-new", "sale-percent", "description", "degree-type", "is-favorite", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/combination-detail/ui/CombinationBlock.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
