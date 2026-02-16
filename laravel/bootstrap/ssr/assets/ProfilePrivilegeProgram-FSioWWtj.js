import { v as vueExports, al as _sfc_main$1, u as useScreenSize, s as serverRenderer_cjs_prodExports, X as IconFire, l as link_default, m as IconCaretRight, a as VButton, r as VNavigationButton, k as _sfc_main$4, U as ProductCard, P as _sfc_main$5, W as _sfc_main$6 } from "../ssr.js";
import { useI18n } from "vue-i18n";
import { _ as _sfc_main$3 } from "./ProgressBar-BwvGch4m.js";
import { _ as _sfc_main$2 } from "./BonusCard-ahXj-8wJ.js";
import { _ as _sfc_main$7 } from "./ReferralModal-B71PFo7f.js";
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
import "primevue/progressbar";
const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    vueExports.createElementVNode("g", { "clip-path": "url(#clip0_7033_236933)" }, [
      vueExports.createElementVNode("path", {
        d: "M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM3.75 10.5H7.5V13.5H3.75V10.5ZM9 10.5H20.25V13.5H9V10.5ZM3.75 15H7.5V18H3.75V15ZM20.25 18H9V15H20.25V18Z",
        fill: "currentColor"
      })
    ], -1),
    vueExports.createElementVNode("defs", null, [
      vueExports.createElementVNode("clipPath", { id: "clip0_7033_236933" }, [
        vueExports.createElementVNode("rect", {
          width: "24",
          height: "24",
          fill: "white"
        })
      ])
    ], -1)
  ]));
}
const IconTable = { render };
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  ...{
    layout: _sfc_main$1
  },
  __name: "ProfilePrivilegeProgram",
  __ssrInlineRender: true,
  props: {
    photoCategories: {},
    noveltyProducts: {},
    userBonusCard: {},
    levels: {},
    oldestBonusCount: {},
    currentLevel: {},
    pointsToNext: {},
    expireDate: {},
    banners: {}
  },
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    const getGridClasses = vueExports.computed(() => {
      return props.photoCategories.map((_, index) => {
        if (isCategoriesMobile.value) {
          switch (index) {
            case 0:
              return "col-span-2 row-span-1";
            case 1:
              return "col-span-2";
            case 2:
              return "row-span-1 outline outline-text";
            case 3:
              return "col-span-1 col-start-1 row-start-4";
            case 4:
              return "col-span-1 outline outline-text";
            case 5:
              return "row-start-2 outline outline-text";
            case 6:
              return "row-start-2";
            case 7:
              return "col-span-2 row-start-5";
            case 8:
              return "col-span-1 row-span-1";
            default:
              return "";
          }
        } else {
          switch (index) {
            case 0:
              return "col-span-6 row-span-4";
            case 1:
              return "col-span-4 row-span-2 col-start-7 pb-8";
            case 2:
              return "col-span-5 row-span-2 col-start-11 outline outline-text pb-8";
            case 3:
              return "col-span-2 row-span-2 col-start-7 row-start-3";
            case 4:
              return "col-span-7 row-span-2 col-start-9 row-start-3 outline outline-text";
            case 5:
              return "col-span-5 row-span-3 col-start-11 row-start-5 outline outline-text";
            case 6:
              return "col-span-3 row-span-3 col-start-4 row-start-5";
            case 7:
              return "col-span-4 row-span-3 col-start-7 row-start-5";
            case 8:
              return "col-span-3 row-span-3 row-start-5 pb-8";
            default:
              return "";
          }
        }
      });
    });
    const { isCategoriesMobile, isCategoriesTablet } = useScreenSize();
    const isReferralModalOpen = vueExports.ref(false);
    const referralModalRef = vueExports.useTemplateRef("referralModalRef");
    const openReferralModal = () => {
      var _a;
      (_a = referralModalRef.value) == null ? void 0 : _a.openModal();
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "flex w-full flex-col gap-6 max-md:p-6 md:gap-8 lg:min-w-0 lg:flex-1" }, _attrs))}><h1 class="text-default-bold">Программа привилегий</h1><section class="flex flex-col gap-8"><nav class="grid gap-2 md:grid-cols-2"><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.oldestBonusCount ? "bg-[#F04E2714]" : "bg-input hover:bg-filling", "flex justify-between rounded-2xl p-3 transition-colors duration-300"])}"><div class="flex gap-2">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconFire), {
        class: ["h-6 w-6", _ctx.oldestBonusCount ? "text-delete" : "text-additional"]
      }, null, _parent));
      _push(`<div><h5 class="text-mob-small-medium"> Скоро сгорят `);
      if (!_ctx.oldestBonusCount) {
        _push(`<span class="text-additional">0 баллов</span>`);
      } else {
        _push(`<span class="text-delete">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("profile.points", _ctx.oldestBonusCount))}</span>`);
      }
      _push(`</h5><p class="text-subsidiary-reg text-additional mt-0.5"> Баллы действуют ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.oldestBonusCount ? `до ${_ctx.expireDate}` : "90 дней ")} <br> Успейте потратить! </p></div></div></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
        href: _ctx.route("user.profile.bonus.history"),
        class: "bg-input hover:bg-filling flex justify-between rounded-2xl p-3 transition-colors duration-300"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex gap-2"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconTable), { class: "text-additional h-6 w-6" }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><h5 class="text-mob-small-medium"${_scopeId}>История начисления и использования баллов</h5></div></div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), null, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode("div", { class: "flex gap-2" }, [
                vueExports.createVNode(vueExports.unref(IconTable), { class: "text-additional h-6 w-6" }),
                vueExports.createVNode("div", null, [
                  vueExports.createVNode("h5", { class: "text-mob-small-medium" }, "История начисления и использования баллов")
                ])
              ]),
              vueExports.createVNode(vueExports.unref(IconCaretRight))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="grid gap-8 lg:grid-cols-2">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
        "card-number": _ctx.userBonusCard.number,
        "card-level": _ctx.userBonusCard.level,
        cashback: _ctx.userBonusCard.cashback + "%",
        "card-balance": _ctx.userBonusCard.amount
      }, null, _parent));
      _push(`<div class="bg-text rounded-20 flex flex-col justify-between p-4 text-white"><div class="flex flex-col gap-2"><h3 class="font-vast text-vast-additional md:text-vast-mob-title-bold font-bold">Пригласи друга</h3><p class="text-subsidiary-reg md:text-mob-small-reg">Пригласи друга и получи 500 баллов</p></div><div class="flex flex-col gap-4 max-lg:mt-8">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
        label: "Пригласить",
        variant: "light",
        class: "w-fit",
        onClick: openReferralModal
      }, null, _parent));
      _push(`<p class="text-complimentary-reg text-additional"> Бонусы будут начислены после того, как приглашенный пользователь совершит первую покупку. Приглашенный пользователь также получает приветственные бонусы. </p></div></div></div><div class="bg-light-gray grid gap-4 rounded-2xl p-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-0.5"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(_ctx.levels, (level) => {
        _push(`<div class="flex flex-col gap-0.5"><h4 class="text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(level.name)} <span class="text-default">CASHBACK ${serverRenderer_cjs_prodExports.ssrInterpolate(level.discount_percent)}%</span></h4><p class="text-additional text-complimentary-reg"> Сумма заказов за последние 3 месяца ${serverRenderer_cjs_prodExports.ssrInterpolate(level.from ? `от ${level.from}` : "")} ${serverRenderer_cjs_prodExports.ssrInterpolate(level.id === 3 ? "руб" : "")} ${serverRenderer_cjs_prodExports.ssrInterpolate(level.to ? `до ${level.to} руб` : "")}</p>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
          value: level.progress,
          "show-value": false
        }, null, _parent));
        if (level.name === _ctx.currentLevel && level.name !== "Well Done") {
          _push(`<span class="text-complimentary-reg">До следующего уровня ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.pointsToNext)} руб</span>`);
        } else if (level.name === _ctx.currentLevel && level.name === "Well Done") {
          _push(`<span class="text-complimentary-reg">Вы достигли максимального статуса в Программе лояльности</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></section>`);
      if ((_a = _ctx.banners) == null ? void 0 : _a.length) {
        _push(`<section class="flex flex-col gap-4"><h2 class="text-small-medium">Доступные акции и специальные предложения</h2><div class="relative overflow-hidden rounded-[40px]"><swiper-container space-between="32" loop="true"${serverRenderer_cjs_prodExports.ssrRenderAttr("navigation", {
          nextEl: ".slider-next-main",
          prevEl: ".slider-prev-main"
        })}><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(_ctx.banners, (banner) => {
          _push(`<swiper-slide><div class="bg-additional relative rounded-[40px] bg-cover bg-bottom bg-no-repeat p-6 md:bg-center md:p-8" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({
            backgroundImage: `url(${banner.image.path})`
          })}"><div class="h-full max-md:mt-8"><div class="flex h-full flex-col justify-between text-white"><div>`);
          if (banner.promotion_days_left) {
            _push(`<div class="bg-delete text-subsidiary-medium mb-3 w-fit rounded-[100px] px-2 py-1 text-white"> Еще ${serverRenderer_cjs_prodExports.ssrInterpolate(banner.promotion_days_left)} дней </div>`);
          } else {
            _push(`<!---->`);
          }
          if (banner.title) {
            _push(`<h3 class="font-vast text-vast-additional min-[900px]:text-vast-title-bold mb-3 font-bold uppercase">${serverRenderer_cjs_prodExports.ssrInterpolate(banner.title)}</h3>`);
          } else {
            _push(`<!---->`);
          }
          if (banner.description) {
            _push(`<p class="text-subsidiary-medium md:text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(banner.description)}</p>`);
          } else {
            _push(`<!---->`);
          }
          if (banner.addition_description) {
            _push(`<p class="text-subsidiary-reg md:text-mob-small-reg mt-2">${serverRenderer_cjs_prodExports.ssrInterpolate(banner.addition_description)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (banner.link_url && banner.button_text) {
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
              href: banner.link_url
            }, {
              default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                    label: banner.button_text,
                    variant: "light",
                    class: "mt-8 w-full md:w-fit"
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(VButton), {
                      label: banner.button_text,
                      variant: "light",
                      class: "mt-8 w-full md:w-fit"
                    }, null, 8, ["label"])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div></div></swiper-slide>`);
        });
        _push(`<!--]--></swiper-container>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VNavigationButton), {
          class: "absolute top-4 right-4 z-10",
          "slider-key": "main"
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_b = _ctx.noveltyProducts) == null ? void 0 : _b.length) {
        _push(`<section class="flex flex-col gap-4"><h2 class="text-default-bold">Новинки</h2>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
          slides: _ctx.noveltyProducts,
          "slider-options": {
            allowTouchMove: true,
            slidesPerView: 1.7,
            spaceBetween: 8,
            breakpoints: {
              0: { slidesPerView: 1.7, spaceBetween: 8 },
              640: { slidesPerView: 2, spaceBetween: 12 },
              1080: { slidesPerView: 3, spaceBetween: 24 },
              1440: { slidesPerView: 4, spaceBetween: 32 }
            }
          }
        }, {
          slide: vueExports.withCtx(({ slide }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(ProductCard), {
                id: slide.id,
                key: slide.id,
                "has-gift": slide.is_have_gift,
                title: slide.name,
                slug: slide.slug,
                images: slide.images.map((i) => i.path),
                weight: slide.weight,
                description: slide.short_description,
                "is-favorite": slide.is_wishlist,
                "is-new": slide.is_new,
                "sale-percent": slide.sale_percent,
                categories: slide.tags.map((b) => b.name) ?? [],
                unit: slide.weight_type,
                price: Number(slide.sale_price) ?? 0,
                "price-unit": slide.price_type,
                "old-price": Number(slide.price) ?? 0,
                cashback_percent: slide.cashback_percent
              }, {
                favoriteButton: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
                      id: slide.id,
                      "initial-value": slide.is_wishlist
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                        id: slide.id,
                        "initial-value": slide.is_wishlist
                      }, null, 8, ["id", "initial-value"])
                    ];
                  }
                }),
                footer: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                      id: slide.id,
                      "count-in-cart": slide.count_in_cart,
                      quantity: slide.quantity
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$5), {
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
                  "has-gift": slide.is_have_gift,
                  title: slide.name,
                  slug: slide.slug,
                  images: slide.images.map((i) => i.path),
                  weight: slide.weight,
                  description: slide.short_description,
                  "is-favorite": slide.is_wishlist,
                  "is-new": slide.is_new,
                  "sale-percent": slide.sale_percent,
                  categories: slide.tags.map((b) => b.name) ?? [],
                  unit: slide.weight_type,
                  price: Number(slide.sale_price) ?? 0,
                  "price-unit": slide.price_type,
                  "old-price": Number(slide.price) ?? 0,
                  cashback_percent: slide.cashback_percent
                }, {
                  favoriteButton: vueExports.withCtx(() => [
                    vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                      id: slide.id,
                      "initial-value": slide.is_wishlist
                    }, null, 8, ["id", "initial-value"])
                  ]),
                  footer: vueExports.withCtx(() => [
                    vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                      id: slide.id,
                      "count-in-cart": slide.count_in_cart,
                      quantity: slide.quantity
                    }, null, 8, ["id", "count-in-cart", "quantity"])
                  ]),
                  _: 2
                }, 1032, ["id", "has-gift", "title", "slug", "images", "weight", "description", "is-favorite", "is-new", "sale-percent", "categories", "unit", "price", "price-unit", "old-price", "cashback_percent"]))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      if ((_c = _ctx.photoCategories) == null ? void 0 : _c.length) {
        _push(`<section class="flex flex-col gap-4"><h2 class="text-default-bold">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("main_page.product_categories"))}</h2>`);
        if (!vueExports.unref(isCategoriesMobile)) {
          _push(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass(["grid gap-3", !vueExports.unref(isCategoriesTablet) ? "grid-cols-11 grid-rows-6" : "grid-cols-10 grid-rows-[140px_140px]"])}"><!--[-->`);
          serverRenderer_cjs_prodExports.ssrRenderList(_ctx.photoCategories, (category, index) => {
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
              key: category.id,
              href: `/catalog/?category=${category.category_slug}`,
              class: [
                getGridClasses.value[index],
                "rounded-20 hover:outline-stroke overflow-hidden bg-cover bg-center bg-no-repeat transition-shadow duration-300 ease-in hover:shadow-xl hover:outline"
              ],
              style: { backgroundImage: `url('${category.desktop_photo}')` }
            }, {
              default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<h2 class="font-vast z-10 max-w-[201px] px-4 pt-4 font-bold uppercase" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ color: category.text_color, fontSize: category.desktop_font_size, lineHeight: category.desktop_line_height })}"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(category.name)}</h2>`);
                  if (category.description) {
                    _push2(`<p class="text-subsidiary-reg mt-1 max-w-[150px] pl-4"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(category.description)}</p>`);
                  } else {
                    _push2(`<!---->`);
                  }
                } else {
                  return [
                    vueExports.createVNode("h2", {
                      class: "font-vast z-10 max-w-[201px] px-4 pt-4 font-bold uppercase",
                      style: { color: category.text_color, fontSize: category.desktop_font_size, lineHeight: category.desktop_line_height }
                    }, vueExports.toDisplayString(category.name), 5),
                    category.description ? (vueExports.openBlock(), vueExports.createBlock("p", {
                      key: 0,
                      class: "text-subsidiary-reg mt-1 max-w-[150px] pl-4"
                    }, vueExports.toDisplayString(category.description), 1)) : vueExports.createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass(["grid gap-3", "auto-rows-[140px] grid-cols-2"])}"><!--[-->`);
          serverRenderer_cjs_prodExports.ssrRenderList(_ctx.photoCategories, (category, index) => {
            _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
              key: category.id,
              href: `/catalog/?category=${category.category_slug}`,
              class: [
                getGridClasses.value[index],
                "rounded-20 hover:outline-stroke overflow-hidden bg-size-[100%_100%] bg-center bg-no-repeat transition-shadow duration-300 ease-in hover:shadow-xl hover:outline"
              ],
              style: { backgroundImage: `url('${category.mobile_photo}')` }
            }, {
              default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<h2 class="font-vast z-10 px-2 pt-2 font-bold uppercase" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ color: category.text_color, fontSize: category.mobile_font_size, lineHeight: category.mobile_line_height })}"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(category.name)}</h2>`);
                  if (category.description) {
                    _push2(`<p class="text-subsidiary-reg mt-1 max-w-[150px] pl-2"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(category.description)}</p>`);
                  } else {
                    _push2(`<!---->`);
                  }
                } else {
                  return [
                    vueExports.createVNode("h2", {
                      class: "font-vast z-10 px-2 pt-2 font-bold uppercase",
                      style: { color: category.text_color, fontSize: category.mobile_font_size, lineHeight: category.mobile_line_height }
                    }, vueExports.toDisplayString(category.name), 5),
                    category.description ? (vueExports.openBlock(), vueExports.createBlock("p", {
                      key: 0,
                      class: "text-subsidiary-reg mt-1 max-w-[150px] pl-2"
                    }, vueExports.toDisplayString(category.description), 1)) : vueExports.createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent));
          });
          _push(`<!--]--></div>`);
        }
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$7), {
        ref_key: "referralModalRef",
        ref: referralModalRef,
        visible: isReferralModalOpen.value,
        "onUpdate:visible": ($event) => isReferralModalOpen.value = $event
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/profile/profile-privilege-program/ui/ProfilePrivilegeProgram.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
