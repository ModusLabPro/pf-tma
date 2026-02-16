import { v as vueExports, al as _sfc_main$1, s as serverRenderer_cjs_prodExports, l as link_default, I as IconCaretLeft, m as IconCaretRight, N as _sfc_main$2, S as _sfc_main$3, a as VButton } from "../ssr.js";
import { format } from "date-fns";
import { useI18n } from "vue-i18n";
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
const phoneFormat = (phone) => {
  if (!/^\d+$/.test(phone) || phone.length < 10) {
    console.error("Invalid phone number");
    return phone;
  }
  return phone.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, "+7 ($1) $2 $3-$4");
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  ...{
    layout: _sfc_main$1
  },
  __name: "ProfileOrder",
  __ssrInlineRender: true,
  props: {
    order: {}
  },
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "flex w-full flex-col gap-6 max-md:p-6 md:gap-8" }, _attrs))}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
        href: _ctx.route("user.profile.orders_history"),
        class: "text-subsidiary-reg flex items-center gap-2"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretLeft), { class: "h-5 w-5" }, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Вернуться к истории заказов</span>`);
          } else {
            return [
              vueExports.createVNode(vueExports.unref(IconCaretLeft), { class: "h-5 w-5" }),
              vueExports.createVNode("span", null, "Вернуться к истории заказов")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col justify-between gap-2 md:flex-row md:items-center"><div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6"><h3 class="text-default-bold"> Заказ <span class="text-default-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.id)}</span></h3><div class="text-mob-small-medium"><span class="text-subsidiary-medium text-additional">от: </span> ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.created_at)}</div></div><div class="flex flex-col gap-2 sm:flex-row">`);
      if (_ctx.order.status === "Ожидает оплаты" && _ctx.order.payment_link) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
          href: _ctx.order.payment_link,
          class: "bg-marker hover:bg-marker/80 text-subsidiary-reg sm:text-mob-small-medium disabled:text-additional flex w-fit cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-white transition-colors duration-200 ease-in"
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
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass([{
        "bg-full": _ctx.order.status === "В обработке" || _ctx.order.status === "Новый" || _ctx.order.status === "Ожидает оплаты",
        "bg-[#CEE9F9]": _ctx.order.status === "Оплачен" || _ctx.order.status === "В работе/в сборке" || _ctx.order.status === "Подтвержден" || _ctx.order.status === "Отправлен/в пути",
        "bg-push-green": _ctx.order.status === "Выполнен" || _ctx.order.status === "Готов к выдаче",
        "bg-[#ED1C241A]": _ctx.order.status === "Отменён"
      }, "text-mob-small-medium w-fit rounded-lg px-3 py-2"])}"><span class="text-subsidiary-medium text-additional">Статус заказа: </span><span>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.status)}</span></div></div></div><section><h3 class="text-small-medium">Содержание заказа</h3><div class="mt-4"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(_ctx.order.formatedItems, (item) => {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
          key: item.id,
          item: {
            ...item,
            is_available: true,
            total_price: +item.price,
            gift_items: item.gift_items.map((gift) => ({ ...gift, is_available: true, total_price: gift.price }))
          }
        }, {
          addToCart: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(item.quantity)} шт</div>`);
            } else {
              return [
                vueExports.createVNode("div", { class: "text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2" }, vueExports.toDisplayString(item.quantity) + " шт", 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section><section class="flex flex-col gap-4"><h3 class="text-small-medium">Данные заказа</h3><div class="rounded-20 bg-light-gray flex flex-col gap-4 p-3 md:p-4"><div class="flex flex-col gap-2"><p class="text-mob-small-reg">Доставка по адресу</p><dl class="flex flex-col gap-2 max-xl:flex-wrap max-md:gap-x-4 sm:flex-row sm:items-center md:justify-between"><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([!!_ctx.order.order_data.delivery_zone_name ? "xl:basis-1/3" : "xl:basis-1/2", "grid grid-cols-[auto_1fr] items-baseline gap-2"])}"><dt class="text-subsidiary-medium text-additional">Город:</dt><dd class="text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.order_data.city)}</dd></div><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([!!_ctx.order.order_data.delivery_zone_name ? "xl:basis-1/3" : "w-full break-all", "grid grid-cols-[auto_1fr] items-baseline gap-2"])}"><dt class="text-subsidiary-medium text-additional">Улица и дом:</dt><dd class="text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.order_data.address)}</dd></div>`);
      if (!!_ctx.order.order_data.delivery_zone_name) {
        _push(`<div class="grid grid-cols-[auto_1fr] items-baseline gap-2 xl:basis-1/3"><dt class="text-subsidiary-medium text-additional">Зона доставки:</dt><dd class="flex items-center gap-2"><span class="text-mob-small-medium text-nowrap">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.order_data.delivery_zone_name)}</span>`);
        if (!!_ctx.order.order_data.delivery_zone_description) {
          _push(`<span class="text-complimentary-reg text-additional">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.order_data.delivery_zone_description)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</dd></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</dl></div><div class="flex flex-col gap-2"><p class="text-mob-small-reg">Получатель</p><dl class="flex flex-col gap-2 max-xl:flex-wrap max-md:gap-x-4 sm:flex-row sm:items-center md:justify-between"><div class="grid grid-cols-[auto_1fr] items-baseline gap-2 text-nowrap xl:basis-1/3"><dt class="text-subsidiary-medium text-additional">ФИО:</dt><dd class="text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.order_data.user_fio)}</dd></div><div class="grid grid-cols-[auto_1fr] items-baseline gap-2 text-nowrap xl:basis-1/3"><dt class="text-subsidiary-medium text-additional">E-mail:</dt><dd class="text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.order_data.email)}</dd></div><div class="grid grid-cols-[auto_1fr] items-baseline gap-2 text-nowrap xl:basis-1/3"><dt class="text-subsidiary-medium text-additional">Телефон:</dt><dd class="text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(phoneFormat)(_ctx.order.order_data.phone))}</dd></div></dl></div>`);
      if (_ctx.order.comment) {
        _push(`<div class="flex flex-col gap-2"><p class="text-mob-small-reg">Комментарий</p><p class="text-mob-small-reg">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.comment)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><h5 class="text-mob-small-reg">Детали доставки</h5><dl class="border-b-filling flex flex-col gap-2 border-b py-2"><div class="grid grid-cols-[140px_1fr] items-center"><dt class="text-subsidiary-medium text-additional">Срок доставки:</dt><dd class="text-mob-small-medium"><span class="flex items-center gap-1"><span>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.delivery_date ? vueExports.unref(format)(_ctx.order.delivery_date, "dd.MM.yyyy") : "-")}</span></span></dd></div><div class="grid grid-cols-[140px_1fr] items-center"><dt class="text-subsidiary-medium text-additional">Доставка:</dt><dd class="text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.delivery_price)} руб</dd></div></dl><dl class="border-b-filling flex flex-col gap-2 border-b py-2"><div class="grid grid-cols-[140px_1fr] items-center"><dt class="text-subsidiary-medium text-additional">Cумма заказа:</dt><dd class="text-mob-small-medium"><span class="inline-flex items-center gap-1">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.order_price)} руб </span></dd></div>`);
      if (_ctx.order.price_final_1c) {
        _push(`<div class="grid grid-cols-[140px_1fr] items-center"><dt class="text-subsidiary-medium text-additional">Итоговая сумма заказа:</dt><dd class="text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.price_final_1c)} руб</dd></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="grid grid-cols-[140px_1fr] items-center"><dt class="text-subsidiary-medium text-additional">Вес заказа:</dt><dd class="text-mob-small-medium">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.order_weight)} кг</dd></div></dl>`);
      if (!!Number(_ctx.order.promocode_discount) || !!Number(_ctx.order.second_item_discount) || !!Number(_ctx.order.bonus_spent)) {
        _push(`<dl class="border-b-filling flex flex-col gap-2 border-b py-2">`);
        {
          _push(`<!---->`);
        }
        if (!!Number(_ctx.order.second_item_discount)) {
          _push(`<div class="grid grid-cols-[140px_1fr] items-center"><dt class="text-subsidiary-medium text-subsidiary py-0.5">Скидка на второй товар:</dt><dd class="text-mob-small-medium">- ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.second_item_discount)} руб</dd></div>`);
        } else {
          _push(`<!---->`);
        }
        if (Number(_ctx.order.bonus_spent)) {
          _push(`<div class="grid grid-cols-[140px_1fr] items-center"><dt class="text-subsidiary-medium text-additional">Бонусные баллы:</dt><dd class="text-mob-small-medium">- ${serverRenderer_cjs_prodExports.ssrInterpolate(Number(_ctx.order.bonus_spent))} руб</dd></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!!Number(_ctx.order.promocode_discount)) {
          _push(`<div class="grid grid-cols-[140px_1fr] items-center"><dt class="text-subsidiary-medium text-additional">Промокод:</dt><dd class="text-mob-small-medium">- ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.promocode_discount)} руб</dd></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</dl>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><p class="text-default-medium inline-flex items-center gap-1">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("profile.delivery_total"))} ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("profile.delivery_description", _ctx.order.items.length))} ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.order.price_final)} руб `);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), { value: "Итоговая сумма заказа формируется после сборки заказа на складе" }, null, _parent));
      _push(`</p></section><div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-center md:gap-8">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
        href: _ctx.route("user.profile.orders_history")
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
              label: "История заказов",
              variant: "outline",
              class: "w-full"
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(VButton), {
                label: "История заказов",
                variant: "outline",
                class: "w-full"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
        label: "Повторить заказ",
        onClick: ($event) => vueExports.unref(router).post(
          _ctx.route("cart.retryOrder", _ctx.order.id),
          {
            order_id: _ctx.order.id
          },
          {
            preserveScroll: false
          }
        )
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/profile/profile-order/ui/ProfileOrder.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
