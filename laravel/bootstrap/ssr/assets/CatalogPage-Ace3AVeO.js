import { v as vueExports, a0 as CatalogLayout, a1 as useFiltersStore, s as serverRenderer_cjs_prodExports, h as head_default, U as ProductCard, P as _sfc_main$1, W as _sfc_main$2, _ as _sfc_main$4 } from "../ssr.js";
import { useI18n } from "vue-i18n";
import { _ as _sfc_main$3 } from "./VPagination-cbnzOOCr.js";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "@vue/shared";
import "@vue/compiler-ssr";
import "node:stream";
import "@inertiajs/core";
import "lodash-es";
import "@inertiajs/core/server";
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
    layout: CatalogLayout
  },
  __name: "CatalogPage",
  __ssrInlineRender: true,
  props: {
    categories: {},
    is_products_group: { type: Boolean },
    products: {},
    category_target: {},
    fast_filter_tags: {},
    products_recommended: {},
    combinations: {},
    seoData: {}
  },
  setup(__props) {
    var _a;
    vueExports.useTemplateRef("catalog-page");
    const filtersStore = useFiltersStore();
    vueExports.shallowRef(((_a = route().queryParams) == null ? void 0 : _a.page) ? Number(route().queryParams.page) : 1);
    const onPageUpdate = async () => {
      await filtersStore.applyFilters();
    };
    const getMeta = (arr) => arr.find((i) => i.__meta__);
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (_ctx.seoData) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(head_default), null, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<title${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.seoData.seo_title)}</title>`);
              if (_ctx.seoData.seo_description) {
                _push2(`<meta name="description"${serverRenderer_cjs_prodExports.ssrRenderAttr("content", _ctx.seoData.seo_description)}${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.seoData.seo_keywords) {
                _push2(`<meta name="keywords"${serverRenderer_cjs_prodExports.ssrRenderAttr("content", _ctx.seoData.seo_keywords)}${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                vueExports.createVNode("title", null, vueExports.toDisplayString(_ctx.seoData.seo_title), 1),
                _ctx.seoData.seo_description ? (vueExports.openBlock(), vueExports.createBlock("meta", {
                  key: 0,
                  name: "description",
                  content: _ctx.seoData.seo_description
                }, null, 8, ["content"])) : vueExports.createCommentVNode("", true),
                _ctx.seoData.seo_keywords ? (vueExports.openBlock(), vueExports.createBlock("meta", {
                  key: 1,
                  name: "keywords",
                  content: _ctx.seoData.seo_keywords
                }, null, 8, ["content"])) : vueExports.createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.products.total > 0) {
        _push(`<div class="grid gap-8">`);
        if (_ctx.is_products_group) {
          _push(`<!--[-->`);
          serverRenderer_cjs_prodExports.ssrRenderList(_ctx.products.data, (value, key) => {
            var _a2;
            _push(`<section><header class="mb-4 flex items-center max-md:justify-between lg:gap-6"><h2 class="md:text-heavy-bold text-default-bold">${serverRenderer_cjs_prodExports.ssrInterpolate(key)}</h2>`);
            if ((_a2 = getMeta(value)) == null ? void 0 : _a2.second_item_discount_percent) {
              _push(`<span class="text-subsidiary-medium bg-ready-green rounded-full px-2 py-1 text-white"> -${serverRenderer_cjs_prodExports.ssrInterpolate(getMeta(value).second_item_discount_percent)}% на второй товар </span>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</header><div class="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 2xl:grid-cols-5"><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(value, (product) => {
              _push(`<!--[-->`);
              if (product.id) {
                _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ProductCard), {
                  id: product.id,
                  key: product.id,
                  "has-gift": product.is_have_gift,
                  slug: product.slug,
                  title: product.name,
                  images: product.images.map((i) => i.path),
                  weight: product.weight,
                  description: product.short_description,
                  "is-favorite": product.is_wishlist,
                  "degree-type": product.degree_type,
                  categories: product.tags.map((b) => b.name) ?? [],
                  unit: product.weight_type,
                  price: Number(product.sale_price) ?? 0,
                  "price-unit": product.price_type,
                  "sale-percent": product.sale_percent,
                  "is-new": product.is_new,
                  "old-price": Number(product.price) ?? 0,
                  "cashback-percent": product.cashback_percent
                }, {
                  favoriteButton: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                        id: product.id,
                        "initial-value": product.is_wishlist
                      }, null, _parent2, _scopeId));
                    } else {
                      return [
                        vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                          id: product.id,
                          "initial-value": product.is_wishlist
                        }, null, 8, ["id", "initial-value"])
                      ];
                    }
                  }),
                  footer: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
                        id: product.id,
                        "count-in-cart": product.count_in_cart,
                        quantity: product.quantity
                      }, null, _parent2, _scopeId));
                    } else {
                      return [
                        vueExports.createVNode(vueExports.unref(_sfc_main$1), {
                          id: product.id,
                          "count-in-cart": product.count_in_cart,
                          quantity: product.quantity
                        }, null, 8, ["id", "count-in-cart", "quantity"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(`<!---->`);
              }
              _push(`<!--]-->`);
            });
            _push(`<!--]--></div></section>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!--[-->`);
          if (vueExports.unref(filtersStore).filters.search) {
            _push(`<h3 class="text-heavy-bold mt-4">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("catalog.found"))} <span class="text-subsidiary text-heavy">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("catalog.products", _ctx.products.total))}</span></h3>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8 2xl:grid-cols-5"><!--[-->`);
          serverRenderer_cjs_prodExports.ssrRenderList(_ctx.products.data, (product) => {
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ProductCard), {
              id: product.id,
              key: product.id,
              "has-gift": product.is_have_gift,
              slug: product.slug,
              title: product.name,
              images: product.images.map((i) => i.path),
              weight: product.weight,
              description: product.short_description,
              "is-favorite": product.is_wishlist,
              "degree-type": product.degree_type,
              categories: product.tags.map((b) => b.name) ?? [],
              unit: product.weight_type,
              price: Number(product.sale_price) ?? 0,
              "price-unit": product.price_type,
              "sale-percent": product.sale_percent,
              "is-new": product.is_new,
              "old-price": Number(product.price) ?? 0,
              cashback_percent: product.cashback_percent
            }, {
              favoriteButton: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                    id: product.id,
                    "initial-value": product.is_wishlist
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                      id: product.id,
                      "initial-value": product.is_wishlist
                    }, null, 8, ["id", "initial-value"])
                  ];
                }
              }),
              footer: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
                    id: product.id,
                    "count-in-cart": product.count_in_cart,
                    quantity: product.quantity
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(_sfc_main$1), {
                      id: product.id,
                      "count-in-cart": product.count_in_cart,
                      quantity: product.quantity
                    }, null, 8, ["id", "count-in-cart", "quantity"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div><!--]-->`);
        }
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
          modelValue: vueExports.unref(filtersStore).filters.page,
          "onUpdate:modelValue": [($event) => vueExports.unref(filtersStore).filters.page = $event, onPageUpdate],
          "per-page": _ctx.products.per_page,
          "total-count": _ctx.products.total,
          class: "mx-auto"
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="bg-light-gray mt-16 rounded-[40px] md:mt-30"><div class="flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/catalog/ui/CatalogPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
