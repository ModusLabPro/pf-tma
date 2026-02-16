import { v as vueExports, al as _sfc_main$1, u as useScreenSize, s as serverRenderer_cjs_prodExports, y as IconCheckCircle, z as IconXCircle, l as link_default, _ as _sfc_main$2, m as IconCaretRight, k as _sfc_main$3, a as VButton, H as VScrollPanel, P as _sfc_main$5, t as _export_sfc } from "../ssr.js";
import { useI18n } from "vue-i18n";
import { I as IconChats, a as IconRepeat, b as IconQuestion } from "./IconRepeat-CvcBfLWa.js";
import { _ as _sfc_main$4 } from "./BonusCard-ahXj-8wJ.js";
import { _ as _sfc_main$6 } from "./ReferralModal-B71PFo7f.js";
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
    layout: _sfc_main$1
  },
  __name: "ProfilePage",
  __ssrInlineRender: true,
  props: {
    auth: {},
    orderedProducts: {},
    deliveries: {},
    userBonusCard: {},
    itemsWithoutReviewCount: {},
    flash: {},
    second_banners: {},
    first_banners: {}
  },
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    const { isMobile } = useScreenSize();
    const showMessage = vueExports.ref(false);
    const isReferralModalOpen = vueExports.ref(false);
    const referralModalRef = vueExports.useTemplateRef("referralModalRef");
    if (props.flash.success) {
      showMessage.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "w-full max-md:p-6" }, _attrs))} data-v-32e8797d>`);
      if (!vueExports.unref(isMobile) && showMessage.value) {
        _push(`<div class="bg-push-green text-mob-small-reg mb-2 flex items-center justify-between rounded-lg p-2" data-v-32e8797d><div class="flex items-center gap-2" data-v-32e8797d>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCheckCircle), { class: "text-ready-green h-5 w-5" }, null, _parent));
        _push(`<span data-v-32e8797d>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.flash.success)}</span></div><button class="cursor-pointer" data-v-32e8797d>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconXCircle), { class: "h-5 w-5" }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<nav class="grid grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-4" data-v-32e8797d>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
        href: _ctx.route("promotion.index"),
        class: "bg-input hover:bg-filling flex shrink-0 items-center rounded-2xl p-3 pb-10 transition-colors duration-300"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-32e8797d${_scopeId}><h5 class="text-mob-small-bold md:text-default-bold lg:text-nowrap" data-v-32e8797d${_scopeId}>Промокоды и акции</h5>`);
            if (!vueExports.unref(isMobile)) {
              _push2(`<p class="text-subsidiary-reg text-additional mt-1" data-v-32e8797d${_scopeId}>Больше выгоды от покупок</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              src: "/images/profile/SalePercent.png",
              alt: "SalePercent",
              width: "74px",
              class: "-mb-14"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), null, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode("div", null, [
                vueExports.createVNode("h5", { class: "text-mob-small-bold md:text-default-bold lg:text-nowrap" }, "Промокоды и акции"),
                !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("p", {
                  key: 0,
                  class: "text-subsidiary-reg text-additional mt-1"
                }, "Больше выгоды от покупок")) : vueExports.createCommentVNode("", true)
              ]),
              vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                src: "/images/profile/SalePercent.png",
                alt: "SalePercent",
                width: "74px",
                class: "-mb-14"
              }),
              vueExports.createVNode(vueExports.unref(IconCaretRight))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
        href: _ctx.route("user.profile.white_list"),
        class: "bg-input hover:bg-filling flex items-center justify-between rounded-2xl p-3 pb-10 transition-colors duration-300"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-32e8797d${_scopeId}><h5 class="text-mob-small-bold md:text-default-bold" data-v-32e8797d${_scopeId}>Избранное</h5>`);
            if (!vueExports.unref(isMobile)) {
              _push2(`<p class="text-subsidiary-reg text-additional mt-1" data-v-32e8797d${_scopeId}>Любимые товары</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              src: "/images/profile/Heart.png",
              alt: "SalePercent",
              width: "74px",
              class: "-mb-14"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), null, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode("div", null, [
                vueExports.createVNode("h5", { class: "text-mob-small-bold md:text-default-bold" }, "Избранное"),
                !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("p", {
                  key: 0,
                  class: "text-subsidiary-reg text-additional mt-1"
                }, "Любимые товары")) : vueExports.createCommentVNode("", true)
              ]),
              vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                src: "/images/profile/Heart.png",
                alt: "SalePercent",
                width: "74px",
                class: "-mb-14"
              }),
              vueExports.createVNode(vueExports.unref(IconCaretRight))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
        href: _ctx.route("user.profile.white_list"),
        data: { tab: "recipes" },
        class: "bg-input hover:bg-filling flex shrink-0 items-center rounded-2xl p-3 pb-10 transition-colors duration-300"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-32e8797d${_scopeId}><h5 class="text-mob-small-bold md:text-default-bold lg:text-nowrap" data-v-32e8797d${_scopeId}>Любимые рецепты</h5>`);
            if (!vueExports.unref(isMobile)) {
              _push2(`<p class="text-subsidiary-reg text-additional mt-1" data-v-32e8797d${_scopeId}>от шеф-повара</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              src: "/images/profile/Grill.webp",
              alt: "SalePercent",
              width: "74px",
              class: "-mb-14"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), null, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode("div", null, [
                vueExports.createVNode("h5", { class: "text-mob-small-bold md:text-default-bold lg:text-nowrap" }, "Любимые рецепты"),
                !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("p", {
                  key: 0,
                  class: "text-subsidiary-reg text-additional mt-1"
                }, "от шеф-повара")) : vueExports.createCommentVNode("", true)
              ]),
              vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                src: "/images/profile/Grill.webp",
                alt: "SalePercent",
                width: "74px",
                class: "-mb-14"
              }),
              vueExports.createVNode(vueExports.unref(IconCaretRight))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
        href: _ctx.route("user.profile.reviews"),
        class: "bg-input hover:bg-filling flex items-center justify-between rounded-2xl p-3 pb-10 transition-colors duration-300"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-32e8797d${_scopeId}><h5 class="text-mob-small-bold md:text-default-bold" data-v-32e8797d${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("profile.waiting_reviews"))}</h5>`);
            if (!vueExports.unref(isMobile)) {
              _push2(`<p class="text-subsidiary-reg text-additional mt-1" data-v-32e8797d${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("profile.waiting_reviews_little", _ctx.itemsWithoutReviewCount))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              src: "/images/profile/Stars.png",
              alt: "Stars",
              width: "74px",
              class: "-mb-14"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), null, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode("div", null, [
                vueExports.createVNode("h5", { class: "text-mob-small-bold md:text-default-bold" }, vueExports.toDisplayString(vueExports.unref(t)("profile.waiting_reviews")), 1),
                !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("p", {
                  key: 0,
                  class: "text-subsidiary-reg text-additional mt-1"
                }, vueExports.toDisplayString(vueExports.unref(t)("profile.waiting_reviews_little", _ctx.itemsWithoutReviewCount)), 1)) : vueExports.createCommentVNode("", true)
              ]),
              vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                src: "/images/profile/Stars.png",
                alt: "Stars",
                width: "74px",
                class: "-mb-14"
              }),
              vueExports.createVNode(vueExports.unref(IconCaretRight))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="mt-8 flex flex-col gap-8 min-[1568px]:flex-row min-[1568px]:items-stretch" data-v-32e8797d><div class="flex flex-1 flex-col gap-2 lg:gap-6" data-v-32e8797d>`);
      if (!_ctx.deliveries.length) {
        _push(`<div class="bg-light-gray rounded-20 p-4" data-v-32e8797d><h3 class="text-default-bold" data-v-32e8797d>Доставка</h3><p class="text-additional text-subsidiary-medium mt-0.5" data-v-32e8797d>Доставка не ожидается</p><div class="mt-8 flex items-center gap-2 max-md:pb-12 md:mt-6 md:gap-8" data-v-32e8797d>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
          src: "/images/test-images/image_package.webp",
          alt: "Package",
          width: vueExports.unref(isMobile) ? "60px" : "124px"
        }, null, _parent));
        _push(`<p class="text-small-medium md:text-default-medium" data-v-32e8797d>Здесь покажем ближайшие доставки</p></div></div>`);
      } else {
        _push(`<div class="max-lg:mb-4 min-[1568px]:max-w-[600px] lg:max-[1568px]:max-w-[calc(99svw_-_64px_-_352px_-_32px)]" data-v-32e8797d>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
          slides: _ctx.deliveries,
          "slider-options": {
            allowTouchMove: true,
            breakpoints: {
              0: { slidesPerView: 1, spaceBetween: 0 }
            }
          }
        }, {
          slide: vueExports.withCtx(({ slide }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<article class="bg-light-gray rounded-20 flex h-full flex-col gap-4 p-2 md:p-4" data-v-32e8797d${_scopeId}><div class="flex flex-col justify-between gap-2 lg:flex-row lg:items-center" data-v-32e8797d${_scopeId}><h5 class="text-default-bold" data-v-32e8797d${_scopeId}>Доставка рассчитывается</h5><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([{
                "bg-full": slide.status === "В обработке" || slide.status === "Новый" || slide.status === "Ожидает оплаты",
                "bg-[#CEE9F9]": slide.status === "Оплачен" || slide.status === "В работе/в сборке" || slide.status === "Подтвержден" || slide.status === "Отправлен/в пути",
                "bg-push-green": slide.status === "Выполнен" || slide.status === "Готов к выдаче",
                "bg-[#ED1C241A]": slide.status === "Отменён"
              }, "text-mob-small-medium rounded-lg px-3 py-2"])}" data-v-32e8797d${_scopeId}><span class="text-subsidiary-medium text-additional" data-v-32e8797d${_scopeId}>Статус заказа: </span><span data-v-32e8797d${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.status)}</span></div></div><div class="flex items-center gap-3" data-v-32e8797d${_scopeId}><p class="text-additional text-subsidiary-medium" data-v-32e8797d${_scopeId}> Заказ: <span class="text-text text-mob-small-medium" data-v-32e8797d${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.id)}</span></p><p class="text-additional text-subsidiary-medium" data-v-32e8797d${_scopeId}> от: <span class="text-text text-mob-small-medium" data-v-32e8797d${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.created_at)}</span></p></div><div class="flex flex-col justify-between gap-1 lg:flex-row lg:items-center" data-v-32e8797d${_scopeId}><p class="text-small-medium lg:text-default-medium" data-v-32e8797d${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("profile.delivery_total"))} ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("profile.delivery_description", slide.product_count))} ${serverRenderer_cjs_prodExports.ssrInterpolate(slide.order_price)} руб </p>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                href: _ctx.route("user.profile.orders.history.show", slide.id),
                class: "text-subsidiary-reg bg-filling rounded-20 hover:bg-default flex w-fit flex-shrink-0 items-center gap-2 px-3 py-2 transition-colors duration-300 hover:text-white"
              }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span data-v-32e8797d${_scopeId2}>Подробнее</span>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode("span", null, "Подробнее"),
                      vueExports.createVNode(vueExports.unref(IconCaretRight))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></article>`);
            } else {
              return [
                vueExports.createVNode("article", { class: "bg-light-gray rounded-20 flex h-full flex-col gap-4 p-2 md:p-4" }, [
                  vueExports.createVNode("div", { class: "flex flex-col justify-between gap-2 lg:flex-row lg:items-center" }, [
                    vueExports.createVNode("h5", { class: "text-default-bold" }, "Доставка рассчитывается"),
                    vueExports.createVNode("div", {
                      class: ["text-mob-small-medium rounded-lg px-3 py-2", {
                        "bg-full": slide.status === "В обработке" || slide.status === "Новый" || slide.status === "Ожидает оплаты",
                        "bg-[#CEE9F9]": slide.status === "Оплачен" || slide.status === "В работе/в сборке" || slide.status === "Подтвержден" || slide.status === "Отправлен/в пути",
                        "bg-push-green": slide.status === "Выполнен" || slide.status === "Готов к выдаче",
                        "bg-[#ED1C241A]": slide.status === "Отменён"
                      }]
                    }, [
                      vueExports.createVNode("span", { class: "text-subsidiary-medium text-additional" }, "Статус заказа: "),
                      vueExports.createVNode("span", null, vueExports.toDisplayString(slide.status), 1)
                    ], 2)
                  ]),
                  vueExports.createVNode("div", { class: "flex items-center gap-3" }, [
                    vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                      vueExports.createTextVNode(" Заказ: "),
                      vueExports.createVNode("span", { class: "text-text text-mob-small-medium" }, vueExports.toDisplayString(slide.id), 1)
                    ]),
                    vueExports.createVNode("p", { class: "text-additional text-subsidiary-medium" }, [
                      vueExports.createTextVNode(" от: "),
                      vueExports.createVNode("span", { class: "text-text text-mob-small-medium" }, vueExports.toDisplayString(slide.created_at), 1)
                    ])
                  ]),
                  vueExports.createVNode("div", { class: "flex flex-col justify-between gap-1 lg:flex-row lg:items-center" }, [
                    vueExports.createVNode("p", { class: "text-small-medium lg:text-default-medium" }, vueExports.toDisplayString(vueExports.unref(t)("profile.delivery_total")) + " " + vueExports.toDisplayString(vueExports.unref(t)("profile.delivery_description", slide.product_count)) + " " + vueExports.toDisplayString(slide.order_price) + " руб ", 1),
                    vueExports.createVNode(vueExports.unref(link_default), {
                      href: _ctx.route("user.profile.orders.history.show", slide.id),
                      class: "text-subsidiary-reg bg-filling rounded-20 hover:bg-default flex w-fit flex-shrink-0 items-center gap-2 px-3 py-2 transition-colors duration-300 hover:text-white"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("span", null, "Подробнее"),
                        vueExports.createVNode(vueExports.unref(IconCaretRight))
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      if (vueExports.unref(isMobile)) {
        _push(`<!--[-->`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
          "card-number": _ctx.userBonusCard.number,
          "card-level": _ctx.userBonusCard.level,
          cashback: _ctx.userBonusCard.cashback + "%",
          "card-balance": _ctx.userBonusCard.amount
        }, null, _parent));
        _push(`<div class="border-text rounded-20 bg-light-gray mt-2 flex cursor-pointer items-center justify-between gap-8 border p-4" data-v-32e8797d><div data-v-32e8797d><h5 class="text-small-medium" data-v-32e8797d>Пригласить друга</h5><p class="text-subsidiary-reg mt-1 font-light" data-v-32e8797d>+500 баллов вам, другу - приветственный бонус</p></div>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
          src: "/images/imageGift.png",
          alt: "logo",
          width: "60px",
          height: ""
        }, null, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="bg-light-gray rounded-20 p-4 max-lg:mt-4" data-v-32e8797d><div class="flex items-center justify-between" data-v-32e8797d><h3 class="text-default-bold" data-v-32e8797d>Вы недавно заказывали</h3>`);
      if (_ctx.orderedProducts && !vueExports.unref(isMobile)) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
          href: _ctx.route("user.profile.orders_history"),
          class: "text-subsidiary-reg bg-filling rounded-20 hover:bg-default flex flex-shrink-0 items-center gap-2 px-3 py-2 transition-colors duration-300 hover:text-white"
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span data-v-32e8797d${_scopeId}>Все заказы</span>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), null, null, _parent2, _scopeId));
            } else {
              return [
                vueExports.createVNode("span", null, "Все заказы"),
                vueExports.createVNode(vueExports.unref(IconCaretRight))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.orderedProducts.length === 0) {
        _push(`<div class="my-4 flex items-start gap-8 md:items-center lg:my-26" data-v-32e8797d>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
          src: "/images/test-images/EmptyCart.webp",
          alt: "Package",
          width: vueExports.unref(isMobile) ? "60px" : "124px"
        }, null, _parent));
        _push(`<div data-v-32e8797d><p class="text-mob-small-medium md:text-default-medium max-md:max-w-[200px]" data-v-32e8797d> Здесь покажем ваши заказы `);
        if (!vueExports.unref(isMobile)) {
          _push(`<br data-v-32e8797d>`);
        } else {
          _push(`<!---->`);
        }
        _push(` за последнее время </p>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
          label: "В каталог",
          class: "mt-8"
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="mt-4" data-v-32e8797d>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VScrollPanel), { class: "max-h-[305px]" }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(_ctx.orderedProducts, (product) => {
                var _a;
                _push2(`<article class="border-b-filling flex flex-col justify-between gap-4 border-b py-3 last:border-b-0 md:flex-row md:items-center" data-v-32e8797d${_scopeId}><div class="flex items-center gap-4" data-v-32e8797d${_scopeId}>`);
                if ((_a = product.item.images[0]) == null ? void 0 : _a.path) {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                    src: product.item.images[0].path,
                    alt: "product_image",
                    width: vueExports.unref(isMobile) ? "74px" : "116px",
                    height: vueExports.unref(isMobile) ? "64px" : "80px",
                    class: "flex-shrink-0",
                    "img-classes": "rounded-lg"
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                    src: "/images/productPlaceholder.png",
                    alt: "productPlaceholder",
                    width: vueExports.unref(isMobile) ? "74px" : "116px",
                    height: vueExports.unref(isMobile) ? "64px" : "80px",
                    class: "flex-shrink-0",
                    "img-classes": "rounded-lg"
                  }, null, _parent2, _scopeId));
                }
                _push2(`<div class="flex flex-col justify-between gap-3" data-v-32e8797d${_scopeId}><h4 class="text-mob-small-bold line-clamp-2" data-v-32e8797d${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(product.item.name)}</h4>`);
                if (!!product.unit_sale_percent) {
                  _push2(`<div class="flex items-center gap-4" data-v-32e8797d${_scopeId}><div class="flex flex-col gap-0.5" data-v-32e8797d${_scopeId}><span class="text-subsidiary text-complimentary-reg line-through" data-v-32e8797d${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(product.price_for_unit)} ${serverRenderer_cjs_prodExports.ssrInterpolate(product.item.price_type)}</span><span class="text-mob-small-bold" data-v-32e8797d${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(product.price_for_unit_without_sale)} ${serverRenderer_cjs_prodExports.ssrInterpolate(product.item.price_type)}</span></div>`);
                  if (product.unit_sale_percent) {
                    _push2(`<div class="bg-delete text-complimentary-reg rounded-20 px-2 py-1 text-white" data-v-32e8797d${_scopeId}> -${serverRenderer_cjs_prodExports.ssrInterpolate(product.unit_sale_percent)}% </div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<span class="text-mob-small-bold" data-v-32e8797d${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(product.item.price)} ${serverRenderer_cjs_prodExports.ssrInterpolate(product.item.price_type)}</span>`);
                }
                _push2(`</div></div>`);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                  id: product.item.id,
                  "is-combo": product.type === "Combo",
                  retry: "",
                  class: "text-nowrap"
                }, null, _parent2, _scopeId));
                _push2(`</article>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.orderedProducts, (product) => {
                  var _a;
                  return vueExports.openBlock(), vueExports.createBlock("article", {
                    key: product.id,
                    class: "border-b-filling flex flex-col justify-between gap-4 border-b py-3 last:border-b-0 md:flex-row md:items-center"
                  }, [
                    vueExports.createVNode("div", { class: "flex items-center gap-4" }, [
                      ((_a = product.item.images[0]) == null ? void 0 : _a.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$2), {
                        key: 0,
                        src: product.item.images[0].path,
                        alt: "product_image",
                        width: vueExports.unref(isMobile) ? "74px" : "116px",
                        height: vueExports.unref(isMobile) ? "64px" : "80px",
                        class: "flex-shrink-0",
                        "img-classes": "rounded-lg"
                      }, null, 8, ["src", "width", "height"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$2), {
                        key: 1,
                        src: "/images/productPlaceholder.png",
                        alt: "productPlaceholder",
                        width: vueExports.unref(isMobile) ? "74px" : "116px",
                        height: vueExports.unref(isMobile) ? "64px" : "80px",
                        class: "flex-shrink-0",
                        "img-classes": "rounded-lg"
                      }, null, 8, ["width", "height"])),
                      vueExports.createVNode("div", { class: "flex flex-col justify-between gap-3" }, [
                        vueExports.createVNode("h4", { class: "text-mob-small-bold line-clamp-2" }, vueExports.toDisplayString(product.item.name), 1),
                        !!product.unit_sale_percent ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 0,
                          class: "flex items-center gap-4"
                        }, [
                          vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                            vueExports.createVNode("span", { class: "text-subsidiary text-complimentary-reg line-through" }, vueExports.toDisplayString(product.price_for_unit) + " " + vueExports.toDisplayString(product.item.price_type), 1),
                            vueExports.createVNode("span", { class: "text-mob-small-bold" }, vueExports.toDisplayString(product.price_for_unit_without_sale) + " " + vueExports.toDisplayString(product.item.price_type), 1)
                          ]),
                          product.unit_sale_percent ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "bg-delete text-complimentary-reg rounded-20 px-2 py-1 text-white"
                          }, " -" + vueExports.toDisplayString(product.unit_sale_percent) + "% ", 1)) : vueExports.createCommentVNode("", true)
                        ])) : (vueExports.openBlock(), vueExports.createBlock("span", {
                          key: 1,
                          class: "text-mob-small-bold"
                        }, vueExports.toDisplayString(product.item.price) + " " + vueExports.toDisplayString(product.item.price_type), 1))
                      ])
                    ]),
                    vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                      id: product.item.id,
                      "is-combo": product.type === "Combo",
                      retry: "",
                      class: "text-nowrap"
                    }, null, 8, ["id", "is-combo"])
                  ]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></div><div class="flex max-w-full flex-col gap-6 min-[1568px]:max-w-120 lg:max-[1568px]:max-w-[calc(99dvw_-_64px_-_352px_-_32px)]" data-v-32e8797d>`);
      if (!vueExports.unref(isMobile)) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
          "card-number": _ctx.userBonusCard.number,
          "card-level": _ctx.userBonusCard.level,
          cashback: _ctx.userBonusCard.cashback + "%",
          "card-balance": _ctx.userBonusCard.amount
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
        "slider-options": {
          spaceBetween: 20,
          breakpoints: {
            0: {
              slidesPerView: 1
            }
          }
        },
        slides: _ctx.first_banners
      }, {
        slide: vueExports.withCtx(({ slide }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ backgroundImage: `url(${slide.image.path}), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))` })}" class="rounded-20 flex h-full flex-col justify-between gap-3 bg-[url(/images/privilege_banner.webp)] bg-cover bg-center bg-no-repeat p-4 text-white bg-blend-color" data-v-32e8797d${_scopeId}><div data-v-32e8797d${_scopeId}><p class="text-subsidiary-medium md:text-mob-small-medium mb-3" data-v-32e8797d${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.description)}</p><h4 class="font-vast text-vast-mob-title-bold mb-1" data-v-32e8797d${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.title)}</h4><p class="text-subsidiary-medium md:text-mob-small-reg" data-v-32e8797d${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.addition_description)}</p></div>`);
            if (slide.button_text && slide.link_url) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                href: slide.link_url
              }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                      label: slide.button_text,
                      variant: "light",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(VButton), {
                        label: slide.button_text,
                        variant: "light",
                        class: "w-full"
                      }, null, 8, ["label"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              vueExports.createVNode("div", {
                style: { backgroundImage: `url(${slide.image.path}), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))` },
                class: "rounded-20 flex h-full flex-col justify-between gap-3 bg-[url(/images/privilege_banner.webp)] bg-cover bg-center bg-no-repeat p-4 text-white bg-blend-color"
              }, [
                vueExports.createVNode("div", null, [
                  vueExports.createVNode("p", { class: "text-subsidiary-medium md:text-mob-small-medium mb-3" }, vueExports.toDisplayString(slide.description), 1),
                  vueExports.createVNode("h4", { class: "font-vast text-vast-mob-title-bold mb-1" }, vueExports.toDisplayString(slide.title), 1),
                  vueExports.createVNode("p", { class: "text-subsidiary-medium md:text-mob-small-reg" }, vueExports.toDisplayString(slide.addition_description), 1)
                ]),
                slide.button_text && slide.link_url ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(link_default), {
                  key: 0,
                  href: slide.link_url
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(vueExports.unref(VButton), {
                      label: slide.button_text,
                      variant: "light",
                      class: "w-full"
                    }, null, 8, ["label"])
                  ]),
                  _: 2
                }, 1032, ["href"])) : vueExports.createCommentVNode("", true)
              ], 4)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (!vueExports.unref(isMobile)) {
        _push(`<div class="border-text rounded-20 bg-light-gray flex cursor-pointer items-center justify-between gap-8 border p-4" data-v-32e8797d><div data-v-32e8797d><h5 class="text-small-medium" data-v-32e8797d>Пригласить друга</h5><p class="text-subsidiary-reg mt-1 font-light" data-v-32e8797d>+500 баллов вам, другу - приветственный бонус</p></div>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
          src: "/images/imageGift.png",
          alt: "logo",
          width: "60px",
          height: ""
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
        "slider-options": {
          spaceBetween: 20,
          breakpoints: {
            0: {
              slidesPerView: 1
            }
          }
        },
        slides: _ctx.second_banners
      }, {
        slide: vueExports.withCtx(({ slide }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ backgroundImage: `url(${slide.image.path}), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))` })}" class="rounded-20 flex h-full flex-col justify-between gap-3 bg-[url(/images/privilege_banner.webp)] bg-cover bg-center bg-no-repeat p-4 text-white bg-blend-color" data-v-32e8797d${_scopeId}><div data-v-32e8797d${_scopeId}><h4 class="font-vast text-vast-mob-title-bold mb-1" data-v-32e8797d${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.title)}</h4><p class="text-subsidiary-medium md:text-mob-small-medium mb-1" data-v-32e8797d${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.description)}</p><p class="text-subsidiary-medium md:text-mob-small-reg" data-v-32e8797d${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.addition_description)}</p></div>`);
            if (slide.button_text && slide.link_url) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                href: slide.link_url
              }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                      label: slide.button_text,
                      variant: "light",
                      class: "w-full"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(VButton), {
                        label: slide.button_text,
                        variant: "light",
                        class: "w-full"
                      }, null, 8, ["label"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              vueExports.createVNode("div", {
                style: { backgroundImage: `url(${slide.image.path}), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))` },
                class: "rounded-20 flex h-full flex-col justify-between gap-3 bg-[url(/images/privilege_banner.webp)] bg-cover bg-center bg-no-repeat p-4 text-white bg-blend-color"
              }, [
                vueExports.createVNode("div", null, [
                  vueExports.createVNode("h4", { class: "font-vast text-vast-mob-title-bold mb-1" }, vueExports.toDisplayString(slide.title), 1),
                  vueExports.createVNode("p", { class: "text-subsidiary-medium md:text-mob-small-medium mb-1" }, vueExports.toDisplayString(slide.description), 1),
                  vueExports.createVNode("p", { class: "text-subsidiary-medium md:text-mob-small-reg" }, vueExports.toDisplayString(slide.addition_description), 1)
                ]),
                slide.button_text && slide.link_url ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(link_default), {
                  key: 0,
                  href: slide.link_url
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(vueExports.unref(VButton), {
                      label: slide.button_text,
                      variant: "light",
                      class: "w-full"
                    }, null, 8, ["label"])
                  ]),
                  _: 2
                }, 1032, ["href"])) : vueExports.createCommentVNode("", true)
              ], 4)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="rounded-20 mt-8 p-3 shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] md:p-4" data-v-32e8797d><h3 class="text-default-bold" data-v-32e8797d>Техническая поддержка</h3><nav class="mt-4 flex flex-col justify-between gap-2 md:flex-row" data-v-32e8797d><a href="mailto:inet_shop@primefood.ru" class="bg-input hover:bg-filling flex w-full items-center gap-2 rounded-lg p-3 transition-colors duration-200 max-md:px-2" data-v-32e8797d>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconChats), null, null, _parent));
      _push(`<span class="text-mob-small-reg" data-v-32e8797d>Написать в поддержку</span></a>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
        href: "/page/return-exchange",
        class: "bg-input hover:bg-filling flex w-full items-center gap-2 rounded-lg p-3 transition-colors duration-200 max-md:px-2"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconRepeat), null, null, _parent2, _scopeId));
            _push2(`<span class="text-mob-small-reg" data-v-32e8797d${_scopeId}>Условия возврата и обмена товаров</span>`);
          } else {
            return [
              vueExports.createVNode(vueExports.unref(IconRepeat)),
              vueExports.createVNode("span", { class: "text-mob-small-reg" }, "Условия возврата и обмена товаров")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
        href: _ctx.route("faq.faq.index"),
        class: "bg-input hover:bg-filling flex w-full items-center gap-2 rounded-lg p-3 transition-colors duration-200 max-md:px-2"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconQuestion), null, null, _parent2, _scopeId));
            _push2(`<span class="text-mob-small-reg" data-v-32e8797d${_scopeId}>Частые вопросы</span>`);
          } else {
            return [
              vueExports.createVNode(vueExports.unref(IconQuestion)),
              vueExports.createVNode("span", { class: "text-mob-small-reg" }, "Частые вопросы")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/profile/profile-page/ui/ProfilePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProfilePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-32e8797d"]]);
export {
  ProfilePage as default
};
