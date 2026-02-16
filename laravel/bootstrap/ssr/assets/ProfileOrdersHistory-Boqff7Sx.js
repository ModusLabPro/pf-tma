import { v as vueExports, al as _sfc_main$1, c as useForm, T, u as useScreenSize, s as serverRenderer_cjs_prodExports, l as link_default, m as IconCaretRight, S as _sfc_main$2, D as _sfc_main$3, _ as _sfc_main$5, a as VButton } from "../ssr.js";
import { format } from "date-fns";
import { useI18n } from "vue-i18n";
import { I as IconArrowsDownUp } from "./IconArrowsDownUp-DpCY8QBc.js";
import { _ as _sfc_main$4 } from "./VPagination-cbnzOOCr.js";
import { router } from "@inertiajs/core";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "@vue/shared";
import "@vue/compiler-ssr";
import "node:stream";
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
const perPage = 4;
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  ...{ layout: _sfc_main$1 },
  __name: "ProfileOrdersHistory",
  __ssrInlineRender: true,
  props: {
    userOrders: {}
  },
  setup(__props) {
    var _a, _b;
    const props = __props;
    const { t } = useI18n();
    const form = useForm({
      sort_by: ((_a = T().queryParams) == null ? void 0 : _a.sort_by) ?? "created_at",
      sort_dir: ((_b = T().queryParams) == null ? void 0 : _b.sort_dir) ?? "asc"
    });
    const currentSortBy = vueExports.computed(() => form.sort_by);
    const currentSortDir = vueExports.computed(() => form.sort_dir);
    const pageContent = vueExports.useTemplateRef("orders-history");
    const onPageUpdate = async () => {
      var _a2;
      (_a2 = pageContent.value) == null ? void 0 : _a2.scrollIntoView({
        behavior: "smooth"
      });
    };
    const currentPage = vueExports.ref(1);
    const paginatedOrders = vueExports.computed(() => {
      const start = (currentPage.value - 1) * perPage;
      const end = start + perPage;
      return props.userOrders.slice(start, end);
    });
    const { isMobile } = useScreenSize();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        ref: "orders-history",
        class: "w-full max-md:p-6"
      }, _attrs))}><section class="flex items-center justify-between"><h1 class="text-default-bold">История заказов</h1>`);
      if (_ctx.userOrders.length > 0 && !vueExports.unref(isMobile)) {
        _push(`<div class="text-mob-small-medium flex items-center gap-2"><p class="text-mob-small-reg text-additional">Сортировка:</p><button class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ "text-default": currentSortBy.value === "created_at" }, "flex cursor-pointer items-center gap-1 transition-all duration-200 ease-in-out"])}"><span>по дате</span>`);
        if (currentSortBy.value === "created_at") {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowsDownUp), {
            class: { "rotate-180": currentSortDir.value === "desc" }
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button><button class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ "text-default": currentSortBy.value === "status" }, "flex cursor-pointer items-center"])}"><span>по статусу</span>`);
        if (currentSortBy.value === "status") {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowsDownUp), {
            class: { "rotate-180": currentSortDir.value === "desc" }
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button><button class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ "text-default": currentSortBy.value === "code" }, "flex cursor-pointer items-center"])}"><span>по номеру заказа</span>`);
        if (currentSortBy.value === "code") {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowsDownUp), {
            class: { "rotate-180": currentSortDir.value === "desc" }
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
      if (_ctx.userOrders.length > 0) {
        _push(`<section class="mt-8 flex flex-col gap-2"><!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(paginatedOrders.value, (order) => {
          _push(`<article class="rounded-20 bg-light-gray flex flex-col gap-2 p-3 transition-colors duration-200 ease-in hover:bg-white hover:shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] md:p-4"><div class="flex flex-col justify-between gap-2 md:flex-row md:items-center"><div class="flex items-center gap-6"><h3 class="text-mob-small-bold md:text-default-bold"> Заказ <span class="text-mob-small-medium md:text-default-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(order.id)}</span></h3>`);
          if (!vueExports.unref(isMobile)) {
            _push(`<div class="text-mob-small-medium"><span class="text-subsidiary-medium text-additional">от: </span> ${serverRenderer_cjs_prodExports.ssrInterpolate(order.created_at)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
          if (!vueExports.unref(isMobile)) {
            _push(`<div class="flex items-center gap-2">`);
            if (order.status === "Ожидает оплаты" && order.payment_link) {
              _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                href: order.payment_link,
                class: "bg-marker hover:bg-marker/80 text-subsidiary-reg sm:text-mob-small-medium disabled:text-additional flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-white transition-colors duration-200 ease-in"
              }, {
                default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<span${_scopeId}>Оплатить заказ</span>`);
                    _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), { class: "h-5 w-5" }, null, _parent2, _scopeId));
                  } else {
                    return [
                      vueExports.createVNode("span", null, "Оплатить заказ"),
                      vueExports.createVNode(vueExports.unref(IconCaretRight), { class: "h-5 w-5" })
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass([{
              "bg-full": order.status === "В обработке" || order.status === "Новый" || order.status === "Ожидает оплаты",
              "bg-[#CEE9F9]": order.status === "Оплачен" || order.status === "В работе/в сборке" || order.status === "Подтвержден" || order.status === "Отправлен/в пути",
              "bg-push-green": order.status === "Выполнен" || order.status === "Готов к выдаче",
              "bg-[#ED1C241A]": order.status === "Отменён"
            }, "text-mob-small-medium rounded-lg px-3 py-2"])}"><span class="text-subsidiary-medium text-additional">Статус заказа: </span><span>${serverRenderer_cjs_prodExports.ssrInterpolate(order.status)}</span></div></div>`);
          } else {
            _push(`<div class="flex flex-col gap-2"><div class="flex items-center justify-between"><div class="text-mob-small-medium"><span class="text-subsidiary-medium text-additional">от: </span> ${serverRenderer_cjs_prodExports.ssrInterpolate(order.created_at)}</div>`);
            if (order.status === "Ожидает оплаты" && order.payment_link) {
              _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                href: order.payment_link,
                class: "bg-marker hover:bg-marker/80 text-subsidiary-reg sm:text-mob-small-medium disabled:text-additional flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-white transition-colors duration-200 ease-in"
              }, {
                default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<span${_scopeId}>Оплатить заказ</span>`);
                    _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), { class: "h-5 w-5" }, null, _parent2, _scopeId));
                  } else {
                    return [
                      vueExports.createVNode("span", null, "Оплатить заказ"),
                      vueExports.createVNode(vueExports.unref(IconCaretRight), { class: "h-5 w-5" })
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</div><div><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([{
              "bg-full": order.status === "В обработке" || order.status === "Новый" || order.status === "Ожидает оплаты",
              "bg-[#CEE9F9]": order.status === "Оплачен" || order.status === "В работе/в сборке" || order.status === "Подтвержден" || order.status === "Отправлен/в пути",
              "bg-push-green": order.status === "Выполнен" || order.status === "Готов к выдаче",
              "bg-[#ED1C241A]": order.status === "Отменён"
            }, "text-mob-small-medium w-full rounded-lg px-3 py-2"])}"><span class="text-subsidiary-medium text-additional">Статус заказа: </span><span>${serverRenderer_cjs_prodExports.ssrInterpolate(order.status)}</span></div></div></div>`);
          }
          _push(`</div><div class="border-b-filling grid border-b pb-2 md:grid-cols-2"><dl class="border-b-filling flex flex-col gap-0.5 max-lg:border-b max-lg:pb-2 md:gap-2"><div class="grid grid-cols-[140px_1fr] items-center"><dt class="text-subsidiary-medium text-additional">Сумма заказа:</dt><dd class="text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(order.order_price)} руб</dd></div>`);
          if (!!Number(order.order_sale)) {
            _push(`<div class="grid grid-cols-[140px_1fr] items-center"><dt class="text-subsidiary-medium text-additional">Скидка по промокоду:</dt><dd class="text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(order.order_sale)} руб</dd></div>`);
          } else {
            _push(`<!---->`);
          }
          if (order.price_final_1c) {
            _push(`<div class="grid grid-cols-[140px_1fr] items-center"><dt class="text-subsidiary-medium text-additional">Итоговая сумма заказа:</dt><dd class="text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(order.price_final_1c)} руб</dd></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="grid grid-cols-[140px_1fr] items-center"><dt class="text-subsidiary-medium text-additional">Вес заказа:</dt><dd class="text-mob-small-medium flex items-center gap-0.5"><span>${serverRenderer_cjs_prodExports.ssrInterpolate(order.order_weight)} кг</span>`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), { value: "Итоговый вес заказа формируется после сборки заказа на складе" }, null, _parent));
          _push(`</dd></div><div class="grid grid-cols-[140px_1fr] items-center"><dt class="text-subsidiary-medium text-additional">Количество товаров:</dt><dd class="text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(order.product_count)}</dd></div></dl><dl class="flex flex-col gap-0.5 max-lg:pt-2 md:gap-2"><div class="grid grid-cols-[140px_1fr] items-center"><dt class="text-subsidiary-medium text-additional">Дата доставки:</dt><dd class="text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(format)(order.delivery_date, "dd.MM.yyyy"))}</dd></div><div class="grid grid-cols-[140px_1fr] items-center"><dt class="text-subsidiary-medium text-additional">Стоимость доставки:</dt><dd class="text-mob-small-medium flex items-center gap-0.5"><span>${serverRenderer_cjs_prodExports.ssrInterpolate(order.delivery_price)} руб</span>`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" }, null, _parent));
          _push(`</dd></div></dl></div><footer class="flex flex-col justify-between gap-4 lg:flex-row lg:items-center"><p class="text-small-medium md:text-default-medium"><span class="inline-flex items-center gap-1">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("profile.delivery_total"))} ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("profile.delivery_description", order.product_count))} ${serverRenderer_cjs_prodExports.ssrInterpolate(order.price_final)} руб `);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), { value: "Итоговая сумма заказа формируется после сборки заказа на складе" }, null, _parent));
          _push(`</span></p><div class="flex items-center gap-6">`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
            label: "Повторить заказ",
            variant: "outlined",
            rounded: "",
            size: "small",
            onClick: ($event) => vueExports.unref(router).post(
              vueExports.unref(T)("cart.retryOrder", order.id),
              {
                order_id: order.id
              },
              {
                preserveScroll: true
              }
            )
          }, null, _parent));
          _push(`<div class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-[640px]:mr-4">`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
            href: vueExports.unref(T)("user.profile.orders.history.show", order.id),
            class: "flex items-center justify-center gap-2"
          }, {
            default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}>Подробнее</span>`);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), { class: "h-4 w-4" }, null, _parent2, _scopeId));
              } else {
                return [
                  vueExports.createVNode("span", null, "Подробнее"),
                  vueExports.createVNode(vueExports.unref(IconCaretRight), { class: "h-4 w-4" })
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></footer></article>`);
        });
        _push(`<!--]--><div class="mt-8">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
          modelValue: currentPage.value,
          "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
          "per-page": perPage,
          "total-count": _ctx.userOrders.length,
          class: "mx-auto justify-center"
        }, null, _parent));
        _push(`</div></section>`);
      } else {
        _push(`<div class="bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"><div class="flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
          src: "/images/test-images/EmptyCart.webp",
          alt: "heart",
          class: "max-md:-mt-6 xl:scale-120",
          height: vueExports.unref(isMobile) ? "100px" : "200px"
        }, null, _parent));
        _push(`<div class="flex flex-col justify-between py-4 max-md:items-center lg:max-w-[705px]"><p class="text-default-medium md:text-heavy-medium max-md:text-center">Здесь покажем ваши заказы</p>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
          href: vueExports.unref(T)("catalog.index")
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                label: "В каталог",
                class: "w-fit max-md:mt-6"
              }, null, _parent2, _scopeId));
            } else {
              return [
                vueExports.createVNode(vueExports.unref(VButton), {
                  label: "В каталог",
                  class: "w-fit max-md:mt-6"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/profile/profile-orders-history/ui/ProfileOrdersHistory.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
