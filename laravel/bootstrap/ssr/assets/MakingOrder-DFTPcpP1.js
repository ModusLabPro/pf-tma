import { v as vueExports, u as useScreenSize, M as useOrderCalculate, c as useForm, s as serverRenderer_cjs_prodExports, h as head_default, V as VContainer, x as _sfc_main$1, l as link_default, n as _sfc_main$2, k as _sfc_main$3, e as _sfc_main$6, g as _sfc_main$7, L as _sfc_main$9, Q as _sfc_main$c, Y as YandexMapDefaultMarker, i as _sfc_main$d, _ as _sfc_main$e, N as _sfc_main$f, X as IconFire, S as _sfc_main$i, j as _sfc_main$k, a as VButton, I as IconCaretLeft } from "../ssr.js";
import { Form } from "@primevue/forms";
import { parseISO, addDays, isToday, format, isTomorrow, differenceInCalendarDays } from "date-fns";
import { storeToRefs } from "pinia";
import { useToast } from "primevue";
import { useI18n } from "vue-i18n";
import { z } from "zod";
import { _ as _sfc_main$g, a as _sfc_main$j } from "./ApplyPromocode-DeUy5y2A.js";
import { _ as _sfc_main$8 } from "./ContactMethodsSelect-CKzNy_d1.js";
import { u as usePickupLocationsStore } from "./IconPin-WhIOrlAF.js";
import { I as IconChats, a as IconRepeat, b as IconQuestion } from "./IconRepeat-CvcBfLWa.js";
import { V as VFloatLabel } from "./VFloatLabel-BX805IBj.js";
import { _ as _sfc_main$5 } from "./VFloatingInput-D87z21zB.js";
import { _ as _sfc_main$4 } from "./ProgressBar-BwvGch4m.js";
import { _ as _sfc_main$h } from "./ToggleSwitch-kQXei-3B.js";
import _sfc_main$a from "./CourierDeliveryForm-ykjZ4B2n.js";
import _sfc_main$b from "./PickUpForm--EJRc0Eg.js";
import { router } from "@inertiajs/core";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "@vue/shared";
import "@vue/compiler-ssr";
import "node:stream";
import "lodash-es";
import "@inertiajs/core/server";
import "primevue/menu";
import "tailwind-merge";
import "primevue/config";
import "@vueuse/core";
import "swiper/element/bundle";
import "primevue/avatar";
import "@primevue/icons/starfill";
import "primevue/rating";
import "@primevue/forms/resolvers/zod";
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
import "./IconCheckCircleGreen-DQz2sOR5.js";
import "primevue/multiselect";
import "primevue/floatlabel";
import "primevue/progressbar";
import "primevue/toggleswitch";
import "./DatePicker-CNY4OO13.js";
import "primevue/autocomplete";
import "@primevue/icons/calendar";
import "@primevue/icons/chevronup";
import "primevue/datepicker";
import "./ChangeAddress-DfTSHQgZ.js";
import "./IconClockOutline-BglWD8g2.js";
import "./IconGlobeOutline-C0euSem-.js";
const _hoisted_1 = {
  width: "32",
  height: "20",
  viewBox: "0 0 32 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    vueExports.createElementVNode("path", {
      d: "M17.4266 0.0371666C16.6755 0.155851 16.0048 0.663557 15.6762 1.3427C15.5286 1.65919 15.5018 1.79766 15.5018 2.33833C15.5018 2.87901 15.5286 3.01747 15.6829 3.34056L15.864 3.72299H13.5703C11.0084 3.72299 10.9748 3.72958 10.6596 4.18454C10.5121 4.39553 10.5054 4.45488 10.5054 5.98459C10.5054 7.46156 10.5121 7.58024 10.6462 7.81102C10.8273 8.1341 11.0956 8.27916 11.5851 8.31873L11.9808 8.35829L11.9942 13.3101L12.0144 18.2619L12.2022 18.6377C12.5643 19.363 13.2014 19.818 14.0398 19.9432C14.3416 19.9894 16.8364 20.0092 21.5713 19.996L28.6469 19.9762L29.0492 19.818C29.5925 19.6004 30.1424 19.0597 30.3638 18.5256L30.5247 18.13L30.5448 13.231L30.565 8.33851H30.8466C31.2289 8.33191 31.6447 8.1407 31.8392 7.87036C32.0002 7.64618 32.0002 7.63299 32.0002 6.01756C32.0002 4.47466 31.9935 4.38235 31.8593 4.20432C31.7856 4.10542 31.6179 3.95376 31.4972 3.86805C31.2759 3.72299 31.249 3.72299 28.9755 3.72299C27.7079 3.72299 26.6684 3.7098 26.6684 3.69661C26.6684 3.68343 26.7489 3.49881 26.8495 3.28781C27.0104 2.95813 27.0373 2.81307 27.0306 2.33174C27.0306 1.82403 27.0104 1.71194 26.8159 1.32951C26.3867 0.478937 25.6222 0.0173855 24.6564 0.0239792C23.9723 0.0239792 23.4961 0.202005 23.0267 0.617403C22.9194 0.709713 22.4834 1.32292 22.0609 1.97568C21.6317 2.62845 21.2762 3.16912 21.2695 3.18231C21.2561 3.1955 20.9208 2.68779 20.5117 2.0614C19.5325 0.564653 19.1033 0.162445 18.3387 0.0635395C18.1845 0.0371666 17.99 0.0107918 17.9162 0.00419807C17.8424 -0.00898933 17.6211 0.0107918 17.4266 0.0371666ZM18.3857 1.14489C18.5332 1.21083 18.721 1.33611 18.8015 1.42182C18.949 1.58666 20.2971 3.63068 20.2971 3.69661C20.2971 3.71639 19.6532 3.72299 18.8619 3.7098L17.4266 3.69002L17.1315 3.49221C16.4273 3.00429 16.2932 2.10756 16.8297 1.50094C17.2388 1.04599 17.8559 0.900927 18.3857 1.14489ZM25.2667 1.17126C26.105 1.60644 26.2392 2.72076 25.5283 3.35375C25.146 3.69661 24.9247 3.72958 23.4693 3.7098L22.1816 3.69002L22.8523 2.66801C23.5833 1.5471 23.8315 1.25039 24.1467 1.11192C24.4753 0.973457 24.9314 0.999832 25.2667 1.17126ZM18.8887 5.99778V7.28353H15.2H11.5114V5.99778V4.71203H15.2H18.8887V5.99778ZM22.5773 11.8331V18.9542H21.2695H19.9617V11.8331V4.71203H21.2695H22.5773V11.8331ZM30.9606 5.99778V7.28353H27.272H23.5833V5.99778V4.71203H27.272H30.9606V5.99778ZM18.8887 13.6464V18.9542H16.5078C13.9123 18.9542 13.8319 18.9476 13.4362 18.5718C13.0002 18.163 13.0204 18.4795 13.0002 13.165L12.9801 8.33851H15.9378H18.8887V13.6464ZM29.4852 13.1386V17.9454L29.3309 18.2355C29.2437 18.3937 29.0425 18.6113 28.8883 18.7234L28.5999 18.9212L26.0916 18.941L23.5833 18.9608V13.6464V8.33851H26.5343H29.4852V13.1386Z",
      fill: "#02283F"
    }, null, -1),
    vueExports.createElementVNode("path", {
      d: "M4.48263 3.93149C2.85291 4.17545 1.47134 5.34911 0.988462 6.91179C0.69337 7.86127 0.760436 8.99537 1.15613 9.85913C1.33721 10.2548 1.33721 10.2679 1.20978 10.3405C0.907982 10.5053 0.364744 11.0921 0.197078 11.435C-0.0711883 11.9691 -0.0644816 12.5823 0.210491 13.09L0.41169 13.4526L0.217198 13.8153C-0.0644816 14.3296 -0.0711883 14.9362 0.197078 15.4769L0.384864 15.8593L0.197078 16.2351C-0.057775 16.7494 -0.0644816 17.389 0.176958 17.8704C0.63301 18.7935 1.96763 19.5715 3.59064 19.855C4.3552 19.9869 5.93126 19.9869 6.70923 19.8484C8.31883 19.5715 9.55956 18.8726 10.0693 17.9561C10.2436 17.6528 10.2705 17.5407 10.2705 17.0791C10.2705 16.6308 10.2436 16.4989 10.0827 16.2022L9.9016 15.8593L10.0827 15.5098C10.2369 15.2197 10.2705 15.0879 10.2705 14.6395C10.2705 14.1845 10.2436 14.0659 10.0827 13.7823L9.89489 13.4461L10.0827 13.123C10.2436 12.8394 10.2705 12.7208 10.2705 12.2658C10.2705 11.824 10.2369 11.6856 10.0894 11.4086C9.89489 11.046 9.59309 10.7031 9.21752 10.4262L8.97608 10.2482L9.12363 9.90529C9.48578 9.10746 9.58638 8.13161 9.3986 7.25466C9.07668 5.74473 7.7823 4.40623 6.2733 4.03039C5.75018 3.89852 4.97892 3.85896 4.48263 3.93149ZM5.97821 5.01284C7.56098 5.42164 8.64075 6.99751 8.41943 8.57998C8.21823 10.0372 7.05798 11.1713 5.54898 11.3888C5.07281 11.4614 4.9588 11.4548 4.42897 11.3229C3.71807 11.1515 3.23519 10.8745 2.75231 10.3668C1.98775 9.56242 1.67925 8.46129 1.92739 7.4195C2.18895 6.29859 3.16142 5.32933 4.33508 5.00625C4.7576 4.89415 5.50874 4.89415 5.97821 5.01284ZM2.2426 11.3493C3.43639 12.4768 5.53557 12.7603 7.07139 12.0021C7.31954 11.8768 7.70852 11.6262 7.94326 11.4416L8.35907 11.1053L8.54685 11.2372C8.84195 11.4416 9.08339 11.7185 9.19069 11.9757C9.4992 12.6944 8.56697 13.512 6.95067 13.934C6.38731 14.079 6.17941 14.0988 5.17341 14.1054C4.21436 14.1054 3.93939 14.0856 3.4498 13.9604C1.69937 13.5318 0.726903 12.635 1.14942 11.8438C1.25002 11.646 1.82679 11.1119 1.9341 11.1119C1.96763 11.1119 2.10847 11.2174 2.2426 11.3493ZM3.02728 14.9098C3.94609 15.1472 5.60264 15.2065 6.62205 15.0351C7.41343 14.9098 8.31883 14.6131 8.77488 14.3362C9.11021 14.1384 9.13704 14.145 9.23093 14.4812C9.42542 15.134 8.40601 15.978 7.03115 16.3275C6.75618 16.3934 6.21965 16.4791 5.83737 16.5187C3.20836 16.7626 0.559237 15.5296 1.1226 14.3296L1.18966 14.1779L1.77314 14.4549C2.09506 14.6131 2.65842 14.8175 3.02728 14.9098ZM2.96022 17.3033C3.64429 17.4747 4.48263 17.5736 5.19353 17.5736C6.40743 17.5736 7.93655 17.2308 8.74135 16.7758L9.0968 16.5714L9.1974 16.8022C9.46566 17.4352 8.72793 18.1868 7.40672 18.6154C5.44838 19.2484 3.06752 18.9979 1.66583 18.0088C1.16954 17.666 0.921396 17.0791 1.11589 16.7165C1.17625 16.5978 1.21649 16.611 1.80667 16.8813C2.14201 17.0396 2.66512 17.2308 2.96022 17.3033Z",
      fill: "#02283F"
    }, null, -1)
  ]));
}
const IconPickupBonus = { render };
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "MakingOrder",
  __ssrInlineRender: true,
  props: {
    transactionMethods: {},
    cartItems: {},
    promocodeStatus: {},
    allContactMethods: {},
    auth: {},
    cities: {},
    cart: {},
    banners: {},
    seoData: {}
  },
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u;
    const props = __props;
    if (((_a = route().queryParams) == null ? void 0 : _a.product_id) || ((_b = route().queryParams) == null ? void 0 : _b.combo_id)) {
      router.reload({
        only: ["cart"]
      });
    }
    const { t } = useI18n();
    const { isMobile } = useScreenSize();
    const { add } = useToast();
    const { calculationModel, calculateOrder, calculateData } = useOrderCalculate();
    const formattingDeliveryDate = vueExports.computed(() => {
      if (!calculateData.value) return "";
      const finalDate = calculateData.value.delivery_detail.delivery_date ? parseISO(calculateData.value.delivery_detail.delivery_date) : addDays(
        /* @__PURE__ */ new Date(),
        calculationModel.delivery_type === "courier" ? calculateData.value.delivery_detail.delivery_zone_time_min ?? 0 : calculateData.value.delivery_detail.pickup_location_time_min ?? 0
      );
      if (isToday(finalDate)) {
        return `сегодня, ${format(finalDate, "dd.MM.yyyy")}`;
      }
      if (isTomorrow(finalDate)) {
        return `завтра, ${format(finalDate, "dd.MM.yyyy")}`;
      }
      if (differenceInCalendarDays(finalDate, /* @__PURE__ */ new Date()) === 2) {
        return `послезавтра, ${format(finalDate, "dd.MM.yyyy")}`;
      }
      return format(finalDate, "dd.MM.yyyy");
    });
    const breadcrumbs = [
      { label: "Главная", route: route("main-page") },
      { label: "Корзина", route: route("cart.index") },
      { label: "Оформление заказа", route: route("order.create") }
    ];
    const steps = vueExports.shallowRef([
      {
        id: 1,
        stepName: ((_c = route().queryParams) == null ? void 0 : _c.product_id) || ((_d = route().queryParams) == null ? void 0 : _d.combo_id) ? "Быстрая покупка" : "Корзина",
        stepDescription: vueExports.computed(() => {
          var _a2, _b2;
          return t("checkout.added_goods", ((_b2 = (_a2 = calculateData.value) == null ? void 0 : _a2.order_detail) == null ? void 0 : _b2.quantity) || 0);
        }),
        progress: 100
      },
      {
        id: 2,
        stepName: "Данные для доставки",
        stepDescription: "Заполните данные от этого будет завесить стоимость доставки и итоговая сумма заказа",
        progress: 2.2
      },
      {
        id: 3,
        stepName: "Оплата",
        stepDescription: "Оплатите заказ онлайн или наличными курьеру",
        progress: 0
      },
      {
        id: 4,
        stepName: "Подтверждение",
        stepDescription: "Подтверждение придет на указанную вами почту или номер телефона. Так же вы сможете просмотреть детали заказа на сайте в личном кабинете",
        progress: 0
      }
    ]);
    calculationModel.product_id = ((_e = route().queryParams) == null ? void 0 : _e.product_id) ? Number((_f = route().queryParams) == null ? void 0 : _f.product_id) : void 0;
    calculationModel.combo_id = ((_g = route().queryParams) == null ? void 0 : _g.combo_id) ? Number((_h = route().queryParams) == null ? void 0 : _h.combo_id) : void 0;
    calculationModel.use_expiring_bonuses = ((_i = route().queryParams) == null ? void 0 : _i.use_expiring_bonuses) === "true";
    const makeOrderForm = useForm({
      last_name: (_j = props.auth.user) == null ? void 0 : _j.last_name,
      name: (_k = props.auth.user) == null ? void 0 : _k.name,
      second_name: (_l = props.auth.user) == null ? void 0 : _l.second_name,
      email: (_m = props.auth.user) == null ? void 0 : _m.email,
      phone: (_n = props.auth.user) == null ? void 0 : _n.phone,
      delivery_type: ((_o = route().queryParams) == null ? void 0 : _o.delivery_type) || "courier",
      comment: "",
      transaction_method_id: void 0,
      address_id: (_p = route().queryParams) == null ? void 0 : _p.address_id,
      pickup_location_id: (_q = route().queryParams) == null ? void 0 : _q.pickup_location_id,
      combo_id: (_r = route().queryParams) == null ? void 0 : _r.combo_id,
      product_id: (_s = route().queryParams) == null ? void 0 : _s.product_id,
      delivery_date: void 0,
      delivery_time_from: void 0,
      delivery_time_to: void 0,
      contact_methods: void 0,
      promo: (_t = route().queryParams) == null ? void 0 : _t.promocode,
      use_expiring_bonuses: ((_u = route().queryParams) == null ? void 0 : _u.use_expiring_bonuses) === "true"
    });
    const orderModelResolver = vueExports.computed(() => {
      if (makeOrderForm.delivery_type === "courier") {
        return z.object({
          last_name: z.string({
            required_error: "Обязательное поле"
          }),
          name: z.string({
            required_error: "Обязательное поле"
          }),
          email: z.string({
            required_error: "Обязательное поле"
          }).email("Введите корректный e-mail"),
          phone: z.string({
            required_error: "Обязательное поле"
          }).regex(/^([0-9\s\-+()]*)$/, "Введите корректный номер"),
          address_id: z.number({
            required_error: "Необходимо указать и подтвердить адрес доставки"
          }),
          transaction_method_id: z.number({
            required_error: "Обязательное поле"
          })
        });
      }
      return z.object({
        last_name: z.string({
          required_error: "Обязательное поле"
        }),
        name: z.string({
          required_error: "Обязательное поле"
        }),
        email: z.string({
          required_error: "Обязательное поле"
        }).email("Введите корректный e-mail"),
        phone: z.string({
          required_error: "Обязательное поле"
        }).regex(/^([0-9\s\-+()]*)$/, "Введите корректный номер"),
        pickup_location_id: z.number({
          required_error: "Необходимо выбрать и подтвердить выбор пункта самовывоза"
        }),
        transaction_method_id: z.number({
          required_error: "Обязательное поле"
        })
      });
    });
    const validationErrors = vueExports.shallowRef({});
    const onUpdateTimeInterval = ({ to, from }) => {
      makeOrderForm.delivery_time_from = from;
      makeOrderForm.delivery_time_to = to;
    };
    const isAgree = vueExports.shallowRef(false);
    const createFormSubmit = () => {
      const { success, error } = orderModelResolver.value.safeParse(makeOrderForm);
      if (success && isAgree.value) {
        makeOrderForm.post(route("order.store"), {
          onSuccess(data) {
            var _a2;
            makeOrderForm.reset();
            add({
              detail: (_a2 = data.props.flash) == null ? void 0 : _a2.success,
              severity: "success",
              life: 1e4,
              group: "html"
            });
          },
          onError() {
            add({
              detail: "Не удалось создать заказ",
              severity: "error",
              life: 1e4
            });
          }
        });
      } else {
        if (error) {
          for (const [key, value] of Object.entries(error == null ? void 0 : error.format())) {
            validationErrors.value = {
              ...validationErrors.value,
              [key]: { error: Array.isArray(value) ? value : { message: value._errors[0] } }
            };
          }
        }
        if (!isAgree.value) {
          validationErrors.value = { ...validationErrors.value, isAgree: { error: { message: "Обязательное поле" } } };
        }
        console.log(validationErrors.value);
      }
    };
    const onPromocodeApplied = (promocode) => {
      calculationModel.promo = promocode;
      makeOrderForm.promo = promocode;
      calculateOrder();
    };
    const pickupLocationStore = usePickupLocationsStore();
    const onChosePickupLocation = async () => {
      var _a2;
      if (pickupLocationStore.selectedLocation) {
        makeOrderForm.pickup_location_id = pickupLocationStore.selectedLocation.id;
        calculationModel.pickup_location_id = pickupLocationStore.selectedLocation.id;
        await calculateOrder();
        makeOrderForm.delivery_date = addDays(/* @__PURE__ */ new Date(), ((_a2 = calculateData.value) == null ? void 0 : _a2.delivery_detail.pickup_location_time_min) ?? 0);
        isAddressApplied.value = true;
      }
    };
    const isAddressApplied = vueExports.shallowRef(false);
    const isOtherCity = vueExports.shallowRef(false);
    const onAddressApplied = async (value, otherCity) => {
      isAddressApplied.value = value;
      isOtherCity.value = otherCity;
      steps.value[1].progress = 100;
      try {
        calculationModel.address_id = makeOrderForm.address_id;
        calculationModel.delivery_date = makeOrderForm.delivery_date;
        calculationModel.delivery_time_from = makeOrderForm.delivery_time_from;
        calculationModel.delivery_time_to = makeOrderForm.delivery_time_to;
        await calculateOrder();
      } catch (error) {
        console.error(error);
      }
    };
    vueExports.computed(() => {
      switch (makeOrderForm.delivery_type) {
        case "courier": {
          return !(isAddressApplied.value && makeOrderForm.last_name && makeOrderForm.name && makeOrderForm.email && makeOrderForm.phone && makeOrderForm.address_id && makeOrderForm.transaction_method_id && isAgree.value);
        }
        case "pickup": {
          return !(makeOrderForm.last_name && makeOrderForm.name && makeOrderForm.email && makeOrderForm.phone && makeOrderForm.pickup_location_id && makeOrderForm.transaction_method_id && isAgree.value);
        }
        default: {
          return true;
        }
      }
    });
    calculateOrder();
    vueExports.onBeforeUnmount(() => {
      pickupLocationStore.resetStore();
    });
    const onResetAddress = () => {
      isAddressApplied.value = false;
      makeOrderForm.address_id = void 0;
      makeOrderForm.pickup_location_id = void 0;
      steps.value[1].progress = 2.2;
    };
    const onDeblockAddress = async () => {
      calculationModel.address_id = void 0;
      calculationModel.delivery_date = void 0;
      calculationModel.delivery_time_from = void 0;
      calculationModel.delivery_time_to = void 0;
      await calculateOrder();
    };
    function smartFormat(number) {
      return new Intl.NumberFormat("ru-RU", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(number);
    }
    const { selectedCity } = storeToRefs(pickupLocationStore);
    const selectedCourierCityId = vueExports.ref(0);
    const pickupBonusPoints = vueExports.computed(() => {
      var _a2;
      if (makeOrderForm.delivery_type === "courier") {
        const city = props.cities.find((c) => c.id === selectedCourierCityId.value);
        return (city == null ? void 0 : city.pickup_bonus_points) ?? 0;
      } else if (makeOrderForm.delivery_type === "pickup") {
        return ((_a2 = selectedCity.value) == null ? void 0 : _a2.pickup_bonus_points) ?? 0;
      }
      return 0;
    });
    const checkGift = () => {
      if (!props.auth.user) {
        router.post(
          route("cart.checkGift"),
          {
            email: makeOrderForm.email,
            phone: makeOrderForm.phone
          },
          {
            only: ["cart"],
            preserveScroll: true
          }
        );
      }
    };
    vueExports.watch(
      () => makeOrderForm.use_expiring_bonuses,
      (newValue) => {
        if (calculationModel.use_expiring_bonuses !== newValue) {
          calculationModel.use_expiring_bonuses = newValue;
          calculateOrder();
        }
      }
    );
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
      _push(`<div class="mt-3">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), null, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-6 sm:px-8"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
              model: breadcrumbs,
              class: "mt-4 mb-6 sm:mt-0"
            }, {
              item: vueExports.withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                    class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                    href: item.route
                  }, {
                    default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${serverRenderer_cjs_prodExports.ssrInterpolate(item.label)}`);
                      } else {
                        return [
                          vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(link_default), {
                      class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                      href: item.route
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), { class: "p-0!" }, {
              header: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<header class="mb-6 grid w-full gap-4 sm:gap-6"${_scopeId2}><div class="flex max-w-full items-center justify-between gap-4 sm:gap-6"${_scopeId2}><h2 class="text-default-bold sm:text-heavy-bold mb-1"${_scopeId2}>Оформление заказа</h2>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                    href: _ctx.route("cart.index"),
                    class: "bg-filling text-subsidiary-reg text-text hover:bg-default rounded-20 flex items-center gap-2 px-3 py-2 transition-colors hover:text-white"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretLeft), { class: "h-5 w-5" }, null, _parent4, _scopeId3));
                        _push4(` ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(isMobile) ? "В корзину" : "Вернуться в корзину")}`);
                      } else {
                        return [
                          vueExports.createVNode(vueExports.unref(IconCaretLeft), { class: "h-5 w-5" }),
                          vueExports.createTextVNode(" " + vueExports.toDisplayString(vueExports.unref(isMobile) ? "В корзину" : "Вернуться в корзину"), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></header>`);
                } else {
                  return [
                    vueExports.createVNode("header", { class: "mb-6 grid w-full gap-4 sm:gap-6" }, [
                      vueExports.createVNode("div", { class: "flex max-w-full items-center justify-between gap-4 sm:gap-6" }, [
                        vueExports.createVNode("h2", { class: "text-default-bold sm:text-heavy-bold mb-1" }, "Оформление заказа"),
                        vueExports.createVNode(vueExports.unref(link_default), {
                          href: _ctx.route("cart.index"),
                          class: "bg-filling text-subsidiary-reg text-text hover:bg-default rounded-20 flex items-center gap-2 px-3 py-2 transition-colors hover:text-white"
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode(vueExports.unref(IconCaretLeft), { class: "h-5 w-5" }),
                            vueExports.createTextVNode(" " + vueExports.toDisplayString(vueExports.unref(isMobile) ? "В корзину" : "Вернуться в корзину"), 1)
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ])
                  ];
                }
              }),
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2, _s2, _t2, _u2, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T;
                if (_push3) {
                  if ((_a2 = _ctx.banners) == null ? void 0 : _a2.length) {
                    _push3(`<div class="my-6 w-full"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                      "slider-options": {
                        spaceBetween: 20,
                        breakpoints: {
                          0: {
                            slidesPerView: 1
                          }
                        }
                      },
                      slides: _ctx.banners,
                      class: "max-w-full"
                    }, {
                      slide: vueExports.withCtx(({ slide }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ backgroundImage: `url(${slide.image.path}), linear-gradient(to bottom, rgba(2, 40, 63, 0), rgba(2, 40, 63, 1))` })}" class="rounded-20 flex min-h-[238px] w-full items-end bg-cover bg-center bg-no-repeat p-4 text-white bg-blend-color md:min-h-[193px] md:items-center md:p-6"${_scopeId3}><div class="grid gap-2"${_scopeId3}>`);
                          if (slide.promotion_days_left) {
                            _push4(`<div class="bg-delete text-subsidiary-medium w-fit rounded-[100px] px-2 py-1 text-white"${_scopeId3}> Еще ${serverRenderer_cjs_prodExports.ssrInterpolate(slide.promotion_days_left)} дней </div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<h2 class="text-vast-mob-title-bold md:text-vast-title-bold uppercase"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.title)}</h2><p class="text-mob-small-bold md:text-default-bold"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.description)}</p><p class="text-subsidiary-reg md:text-mob-small-reg"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.addition_description)}</p></div></div>`);
                        } else {
                          return [
                            vueExports.createVNode("div", {
                              style: { backgroundImage: `url(${slide.image.path}), linear-gradient(to bottom, rgba(2, 40, 63, 0), rgba(2, 40, 63, 1))` },
                              class: "rounded-20 flex min-h-[238px] w-full items-end bg-cover bg-center bg-no-repeat p-4 text-white bg-blend-color md:min-h-[193px] md:items-center md:p-6"
                            }, [
                              vueExports.createVNode("div", { class: "grid gap-2" }, [
                                slide.promotion_days_left ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "bg-delete text-subsidiary-medium w-fit rounded-[100px] px-2 py-1 text-white"
                                }, " Еще " + vueExports.toDisplayString(slide.promotion_days_left) + " дней ", 1)) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode("h2", { class: "text-vast-mob-title-bold md:text-vast-title-bold uppercase" }, vueExports.toDisplayString(slide.title), 1),
                                vueExports.createVNode("p", { class: "text-mob-small-bold md:text-default-bold" }, vueExports.toDisplayString(slide.description), 1),
                                vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(slide.addition_description), 1)
                              ])
                            ], 4)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="bg-light-gray grid w-[calc(100dvw_-_24px)] grid-cols-[repeat(4,minmax(182px,1fr))] gap-1 overflow-x-scroll rounded-2xl p-3 sm:w-full sm:overflow-x-auto"${_scopeId2}><!--[-->`);
                  serverRenderer_cjs_prodExports.ssrRenderList(steps.value, (step) => {
                    _push3(`<div class="flex flex-1 flex-col gap-1"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                      value: step.progress,
                      "show-value": false
                    }, null, _parent3, _scopeId2));
                    _push3(`<p class="text-mob-small-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(step.stepName)}</p><p class="text-complimentary-reg text-additional"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(step.stepDescription)}</p></div>`);
                  });
                  _push3(`<!--]--></div><div class="mt-6 flex flex-col gap-8 xl:flex-row"${_scopeId2}><div class="grow basis-3/4"${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Form), {
                    id: "make-order",
                    onSubmit: createFormSubmit
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a3, _b3, _c3, _d3, _e3, _f3, _g3, _h3, _i3, _j3, _k3, _l3, _m3, _n3, _o3, _p3, _q3, _r3, _s3, _t3, _u3, _v2, _w2, _x2, _y2, _z2, _A2, _B2, _C2, _D2, _E2, _F2, _G2, _H2, _I2, _J2, _K2, _L2, _M2, _N2, _O2, _P2;
                      if (_push4) {
                        _push4(`<div class="border-filling border-b border-solid pb-6"${_scopeId3}><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ "bg-light-gray rounded-20 p-4": _ctx.auth.user }, "flex flex-col gap-4"])}"${_scopeId3}><p class="text-small-bold sm:text-default-bold"${_scopeId3}>Получатель</p><fieldset${_scopeId3}><legend class="text-mob-small-medium sm:text-small-medium mb-4"${_scopeId3}>Данные получателя</legend><div class="grid gap-2 sm:grid-cols-3"${_scopeId3}>`);
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                          modelValue: vueExports.unref(makeOrderForm).last_name,
                          "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).last_name = $event,
                          label: "Ваша фамилия",
                          name: "last_name",
                          error: (_c3 = (_b3 = (_a3 = validationErrors.value) == null ? void 0 : _a3.last_name) == null ? void 0 : _b3.error) == null ? void 0 : _c3.message,
                          required: "",
                          clearable: ""
                        }, null, _parent4, _scopeId3));
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                          modelValue: vueExports.unref(makeOrderForm).name,
                          "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).name = $event,
                          name: "name",
                          label: "Ваше имя",
                          error: (_f3 = (_e3 = (_d3 = validationErrors.value) == null ? void 0 : _d3.name) == null ? void 0 : _e3.error) == null ? void 0 : _f3.message,
                          clearable: "",
                          required: ""
                        }, null, _parent4, _scopeId3));
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                          modelValue: vueExports.unref(makeOrderForm).second_name,
                          "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).second_name = $event,
                          name: "second_name",
                          label: "Ваше отчество",
                          clearable: ""
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></fieldset><fieldset${_scopeId3}><legend class="text-mob-small-medium sm:text-small-medium mb-4"${_scopeId3}>Контактные данные</legend><div class="grid gap-2 sm:grid-cols-3"${_scopeId3}>`);
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                          modelValue: vueExports.unref(makeOrderForm).email,
                          "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).email = $event,
                          error: (_i3 = (_h3 = (_g3 = validationErrors.value) == null ? void 0 : _g3.email) == null ? void 0 : _h3.error) == null ? void 0 : _i3.message,
                          name: "email",
                          type: "email",
                          label: "Ваш e-mail",
                          clearable: "",
                          required: "",
                          onBlur: checkGift
                        }, null, _parent4, _scopeId3));
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
                          error: (_l3 = (_k3 = (_j3 = validationErrors.value) == null ? void 0 : _j3.phone) == null ? void 0 : _k3.error) == null ? void 0 : _l3.message
                        }, {
                          default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VFloatLabel), {
                                label: vueExports.unref(t)("checkout.phone"),
                                required: ""
                              }, {
                                default: vueExports.withCtx(({ labelId }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
                                      id: labelId,
                                      modelValue: vueExports.unref(makeOrderForm).phone,
                                      "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).phone = $event,
                                      unmask: "",
                                      mask: "+7 (999) 999-99-99",
                                      name: "phone",
                                      type: "phone",
                                      fluid: "",
                                      required: "",
                                      onBlur: checkGift
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      vueExports.createVNode(_sfc_main$7, {
                                        id: labelId,
                                        modelValue: vueExports.unref(makeOrderForm).phone,
                                        "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).phone = $event,
                                        unmask: "",
                                        mask: "+7 (999) 999-99-99",
                                        name: "phone",
                                        type: "phone",
                                        fluid: "",
                                        required: "",
                                        onBlur: checkGift
                                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                vueExports.createVNode(vueExports.unref(VFloatLabel), {
                                  label: vueExports.unref(t)("checkout.phone"),
                                  required: ""
                                }, {
                                  default: vueExports.withCtx(({ labelId }) => [
                                    vueExports.createVNode(_sfc_main$7, {
                                      id: labelId,
                                      modelValue: vueExports.unref(makeOrderForm).phone,
                                      "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).phone = $event,
                                      unmask: "",
                                      mask: "+7 (999) 999-99-99",
                                      name: "phone",
                                      type: "phone",
                                      fluid: "",
                                      required: "",
                                      onBlur: checkGift
                                    }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }, 8, ["label"])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$8), {
                          modelValue: vueExports.unref(makeOrderForm).contact_methods,
                          "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).contact_methods = $event,
                          options: _ctx.allContactMethods
                        }, null, _parent4, _scopeId3));
                        _push4(`</div></fieldset></div></div><div class="border-filling mt-6 flex flex-col gap-4 border-b border-solid pb-6"${_scopeId3}><p class="text-small-bold sm:text-default-bold"${_scopeId3}>Доставка</p><div class="flex flex-col gap-4 md:flex-row lg:gap-8"${_scopeId3}><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([[vueExports.unref(makeOrderForm).delivery_type === "pickup" ? "basis-1/2" : "w-full"], "flex flex-col gap-6"])}"${_scopeId3}><fieldset${_scopeId3}><legend class="text-mob-small-medium sm:text-small-medium mb-4 flex items-center gap-2"${_scopeId3}><span${_scopeId3}>Способ доставки</span>`);
                        if (pickupBonusPoints.value) {
                          _push4(`<div class="bg-push-green text-subsidiary-reg inline-flex items-center gap-2 rounded-full p-2"${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPickupBonus), null, null, _parent4, _scopeId3));
                          _push4(`<span${_scopeId3}><span class="text-subsidiary-medium"${_scopeId3}>+${serverRenderer_cjs_prodExports.ssrInterpolate(pickupBonusPoints.value)}</span> баллов за самовывоз </span></div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</legend><div class="flex gap-6"${_scopeId3}><label class="flex items-center gap-3 p-2"${_scopeId3}>`);
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, {
                          modelValue: vueExports.unref(makeOrderForm).delivery_type,
                          "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).delivery_type = $event,
                          value: "courier",
                          name: "deliveryMethod",
                          disabled: isAddressApplied.value
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="text-mob-small-reg"${_scopeId3}>Курьер</span></label><label class="flex items-center gap-3 p-2"${_scopeId3}>`);
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, {
                          modelValue: vueExports.unref(makeOrderForm).delivery_type,
                          "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).delivery_type = $event,
                          value: "pickup",
                          name: "deliveryMethod",
                          disabled: isAddressApplied.value
                        }, null, _parent4, _scopeId3));
                        _push4(`<span class="text-mob-small-reg"${_scopeId3}>Самовывоз</span></label></div></fieldset>`);
                        if (vueExports.unref(makeOrderForm).delivery_type === "courier") {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
                            error: (_o3 = (_n3 = (_m3 = validationErrors.value) == null ? void 0 : _m3.address_id) == null ? void 0 : _n3.error) == null ? void 0 : _o3.message
                          }, {
                            default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$a, {
                                  "address-id": vueExports.unref(makeOrderForm).address_id,
                                  "onUpdate:addressId": ($event) => vueExports.unref(makeOrderForm).address_id = $event,
                                  "delivery-date": vueExports.unref(makeOrderForm).delivery_date,
                                  "onUpdate:deliveryDate": ($event) => vueExports.unref(makeOrderForm).delivery_date = $event,
                                  "city-id": selectedCourierCityId.value,
                                  "onUpdate:cityId": ($event) => selectedCourierCityId.value = $event,
                                  "onUpdate:timeInterval": onUpdateTimeInterval,
                                  onAddressApplied,
                                  onResetAddress,
                                  onDeblockAddress
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(_sfc_main$a, {
                                    "address-id": vueExports.unref(makeOrderForm).address_id,
                                    "onUpdate:addressId": ($event) => vueExports.unref(makeOrderForm).address_id = $event,
                                    "delivery-date": vueExports.unref(makeOrderForm).delivery_date,
                                    "onUpdate:deliveryDate": ($event) => vueExports.unref(makeOrderForm).delivery_date = $event,
                                    "city-id": selectedCourierCityId.value,
                                    "onUpdate:cityId": ($event) => selectedCourierCityId.value = $event,
                                    "onUpdate:timeInterval": onUpdateTimeInterval,
                                    onAddressApplied,
                                    onResetAddress,
                                    onDeblockAddress
                                  }, null, 8, ["address-id", "onUpdate:addressId", "delivery-date", "onUpdate:deliveryDate", "city-id", "onUpdate:cityId"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (vueExports.unref(makeOrderForm).delivery_type === "pickup") {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
                            error: (_r3 = (_q3 = (_p3 = validationErrors.value) == null ? void 0 : _p3.pickup_location_id) == null ? void 0 : _q3.error) == null ? void 0 : _r3.message
                          }, {
                            default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$b, {
                                  onApplyChose: onChosePickupLocation,
                                  onReset: onResetAddress
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(_sfc_main$b, {
                                    onApplyChose: onChosePickupLocation,
                                    onReset: onResetAddress
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div>`);
                        if (vueExports.unref(makeOrderForm).delivery_type === "pickup") {
                          _push4(`<div class="rounded-20 basis-1/2 overflow-hidden"${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$c), {
                            zoom: vueExports.unref(pickupLocationStore).selectedLocation ? 19 : 11,
                            center: vueExports.unref(pickupLocationStore).locationCoordinates,
                            height: vueExports.unref(isMobile) ? "420px" : "100%"
                          }, {
                            marker: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<!--[-->`);
                                serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(pickupLocationStore).locationsList, (location) => {
                                  _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(YandexMapDefaultMarker), {
                                    settings: {
                                      coordinates: [Number(location.longitude), Number(location.latitude)]
                                    }
                                  }, null, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                return [
                                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(pickupLocationStore).locationsList, (location) => {
                                    return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(YandexMapDefaultMarker), {
                                      key: location.id,
                                      settings: {
                                        coordinates: [Number(location.longitude), Number(location.latitude)]
                                      }
                                    }, null, 8, ["settings"]);
                                  }), 128))
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(`</div></div><div class="border-filling mt-6 flex flex-col gap-4 border-b border-solid pb-6"${_scopeId3}><p class="text-small-bold sm:text-default-bold"${_scopeId3}>Комментарий к заказу</p>`);
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$d, {
                          modelValue: vueExports.unref(makeOrderForm).comment,
                          "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).comment = $event,
                          class: "resize-none",
                          placeholder: "Комментарий"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div><div class="border-filling mt-6 flex flex-col gap-4 border-b border-solid pb-6"${_scopeId3}><p class="text-small-bold sm:text-default-bold"${_scopeId3}>Способ оплаты</p>`);
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
                          error: (_u3 = (_t3 = (_s3 = validationErrors.value) == null ? void 0 : _s3.transaction_method_id) == null ? void 0 : _t3.error) == null ? void 0 : _u3.message
                        }, {
                          default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="grid auto-cols-fr gap-2 sm:grid-flow-col"${_scopeId4}><!--[-->`);
                              serverRenderer_cjs_prodExports.ssrRenderList(_ctx.transactionMethods, (transactionMethod) => {
                                var _a4, _b4, _c4;
                                _push5(`<label class="bg-light-gray grid grid-cols-[auto_1fr_auto] gap-2 rounded-2xl p-3"${_scopeId4}><span${_scopeId4}>`);
                                if (transactionMethod.icon) {
                                  _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$e), {
                                    src: transactionMethod.icon.path,
                                    alt: "Иконка"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</span><span class="inline-flex flex-col gap-1"${_scopeId4}><span class="text-mob-small-medium"${_scopeId4}>${serverRenderer_cjs_prodExports.ssrInterpolate(transactionMethod.name)}</span><span class="text-subsidiary-reg text-additional"${_scopeId4}>${serverRenderer_cjs_prodExports.ssrInterpolate(transactionMethod.description)}</span></span>`);
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, {
                                  modelValue: vueExports.unref(makeOrderForm).transaction_method_id,
                                  "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).transaction_method_id = $event,
                                  value: transactionMethod.id,
                                  invalid: !!((_c4 = (_b4 = (_a4 = validationErrors.value) == null ? void 0 : _a4.transaction_method_id) == null ? void 0 : _b4.error) == null ? void 0 : _c4.message),
                                  name: "transaction_method_id"
                                }, null, _parent5, _scopeId4));
                                _push5(`</label>`);
                              });
                              _push5(`<!--]--></div>`);
                            } else {
                              return [
                                vueExports.createVNode("div", { class: "grid auto-cols-fr gap-2 sm:grid-flow-col" }, [
                                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.transactionMethods, (transactionMethod) => {
                                    var _a4, _b4, _c4;
                                    return vueExports.openBlock(), vueExports.createBlock("label", {
                                      key: transactionMethod.id,
                                      class: "bg-light-gray grid grid-cols-[auto_1fr_auto] gap-2 rounded-2xl p-3"
                                    }, [
                                      vueExports.createVNode("span", null, [
                                        transactionMethod.icon ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$e), {
                                          key: 0,
                                          src: transactionMethod.icon.path,
                                          alt: "Иконка"
                                        }, null, 8, ["src"])) : vueExports.createCommentVNode("", true)
                                      ]),
                                      vueExports.createVNode("span", { class: "inline-flex flex-col gap-1" }, [
                                        vueExports.createVNode("span", { class: "text-mob-small-medium" }, vueExports.toDisplayString(transactionMethod.name), 1),
                                        vueExports.createVNode("span", { class: "text-subsidiary-reg text-additional" }, vueExports.toDisplayString(transactionMethod.description), 1)
                                      ]),
                                      vueExports.createVNode(_sfc_main$9, {
                                        modelValue: vueExports.unref(makeOrderForm).transaction_method_id,
                                        "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).transaction_method_id = $event,
                                        value: transactionMethod.id,
                                        invalid: !!((_c4 = (_b4 = (_a4 = validationErrors.value) == null ? void 0 : _a4.transaction_method_id) == null ? void 0 : _b4.error) == null ? void 0 : _c4.message),
                                        name: "transaction_method_id"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "invalid"])
                                    ]);
                                  }), 128))
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          vueExports.createVNode("div", { class: "border-filling border-b border-solid pb-6" }, [
                            vueExports.createVNode("div", {
                              class: ["flex flex-col gap-4", { "bg-light-gray rounded-20 p-4": _ctx.auth.user }]
                            }, [
                              vueExports.createVNode("p", { class: "text-small-bold sm:text-default-bold" }, "Получатель"),
                              vueExports.createVNode("fieldset", null, [
                                vueExports.createVNode("legend", { class: "text-mob-small-medium sm:text-small-medium mb-4" }, "Данные получателя"),
                                vueExports.createVNode("div", { class: "grid gap-2 sm:grid-cols-3" }, [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                    modelValue: vueExports.unref(makeOrderForm).last_name,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).last_name = $event,
                                    label: "Ваша фамилия",
                                    name: "last_name",
                                    error: (_x2 = (_w2 = (_v2 = validationErrors.value) == null ? void 0 : _v2.last_name) == null ? void 0 : _w2.error) == null ? void 0 : _x2.message,
                                    required: "",
                                    clearable: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                    modelValue: vueExports.unref(makeOrderForm).name,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).name = $event,
                                    name: "name",
                                    label: "Ваше имя",
                                    error: (_A2 = (_z2 = (_y2 = validationErrors.value) == null ? void 0 : _y2.name) == null ? void 0 : _z2.error) == null ? void 0 : _A2.message,
                                    clearable: "",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                    modelValue: vueExports.unref(makeOrderForm).second_name,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).second_name = $event,
                                    name: "second_name",
                                    label: "Ваше отчество",
                                    clearable: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])
                              ]),
                              vueExports.createVNode("fieldset", null, [
                                vueExports.createVNode("legend", { class: "text-mob-small-medium sm:text-small-medium mb-4" }, "Контактные данные"),
                                vueExports.createVNode("div", { class: "grid gap-2 sm:grid-cols-3" }, [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                    modelValue: vueExports.unref(makeOrderForm).email,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).email = $event,
                                    error: (_D2 = (_C2 = (_B2 = validationErrors.value) == null ? void 0 : _B2.email) == null ? void 0 : _C2.error) == null ? void 0 : _D2.message,
                                    name: "email",
                                    type: "email",
                                    label: "Ваш e-mail",
                                    clearable: "",
                                    required: "",
                                    onBlur: checkGift
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                                    error: (_G2 = (_F2 = (_E2 = validationErrors.value) == null ? void 0 : _E2.phone) == null ? void 0 : _F2.error) == null ? void 0 : _G2.message
                                  }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(vueExports.unref(VFloatLabel), {
                                        label: vueExports.unref(t)("checkout.phone"),
                                        required: ""
                                      }, {
                                        default: vueExports.withCtx(({ labelId }) => [
                                          vueExports.createVNode(_sfc_main$7, {
                                            id: labelId,
                                            modelValue: vueExports.unref(makeOrderForm).phone,
                                            "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).phone = $event,
                                            unmask: "",
                                            mask: "+7 (999) 999-99-99",
                                            name: "phone",
                                            type: "phone",
                                            fluid: "",
                                            required: "",
                                            onBlur: checkGift
                                          }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }, 8, ["label"])
                                    ]),
                                    _: 1
                                  }, 8, ["error"]),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                    modelValue: vueExports.unref(makeOrderForm).contact_methods,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).contact_methods = $event,
                                    options: _ctx.allContactMethods
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ])
                              ])
                            ], 2)
                          ]),
                          vueExports.createVNode("div", { class: "border-filling mt-6 flex flex-col gap-4 border-b border-solid pb-6" }, [
                            vueExports.createVNode("p", { class: "text-small-bold sm:text-default-bold" }, "Доставка"),
                            vueExports.createVNode("div", { class: "flex flex-col gap-4 md:flex-row lg:gap-8" }, [
                              vueExports.createVNode("div", {
                                class: ["flex flex-col gap-6", [vueExports.unref(makeOrderForm).delivery_type === "pickup" ? "basis-1/2" : "w-full"]]
                              }, [
                                vueExports.createVNode("fieldset", null, [
                                  vueExports.createVNode("legend", { class: "text-mob-small-medium sm:text-small-medium mb-4 flex items-center gap-2" }, [
                                    vueExports.createVNode("span", null, "Способ доставки"),
                                    pickupBonusPoints.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 0,
                                      class: "bg-push-green text-subsidiary-reg inline-flex items-center gap-2 rounded-full p-2"
                                    }, [
                                      vueExports.createVNode(vueExports.unref(IconPickupBonus)),
                                      vueExports.createVNode("span", null, [
                                        vueExports.createVNode("span", { class: "text-subsidiary-medium" }, "+" + vueExports.toDisplayString(pickupBonusPoints.value), 1),
                                        vueExports.createTextVNode(" баллов за самовывоз ")
                                      ])
                                    ])) : vueExports.createCommentVNode("", true)
                                  ]),
                                  vueExports.createVNode("div", { class: "flex gap-6" }, [
                                    vueExports.createVNode("label", { class: "flex items-center gap-3 p-2" }, [
                                      vueExports.createVNode(_sfc_main$9, {
                                        modelValue: vueExports.unref(makeOrderForm).delivery_type,
                                        "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).delivery_type = $event,
                                        value: "courier",
                                        name: "deliveryMethod",
                                        disabled: isAddressApplied.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                      vueExports.createVNode("span", { class: "text-mob-small-reg" }, "Курьер")
                                    ]),
                                    vueExports.createVNode("label", { class: "flex items-center gap-3 p-2" }, [
                                      vueExports.createVNode(_sfc_main$9, {
                                        modelValue: vueExports.unref(makeOrderForm).delivery_type,
                                        "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).delivery_type = $event,
                                        value: "pickup",
                                        name: "deliveryMethod",
                                        disabled: isAddressApplied.value
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                      vueExports.createVNode("span", { class: "text-mob-small-reg" }, "Самовывоз")
                                    ])
                                  ])
                                ]),
                                vueExports.unref(makeOrderForm).delivery_type === "courier" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$6), {
                                  key: 0,
                                  error: (_J2 = (_I2 = (_H2 = validationErrors.value) == null ? void 0 : _H2.address_id) == null ? void 0 : _I2.error) == null ? void 0 : _J2.message
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$a, {
                                      "address-id": vueExports.unref(makeOrderForm).address_id,
                                      "onUpdate:addressId": ($event) => vueExports.unref(makeOrderForm).address_id = $event,
                                      "delivery-date": vueExports.unref(makeOrderForm).delivery_date,
                                      "onUpdate:deliveryDate": ($event) => vueExports.unref(makeOrderForm).delivery_date = $event,
                                      "city-id": selectedCourierCityId.value,
                                      "onUpdate:cityId": ($event) => selectedCourierCityId.value = $event,
                                      "onUpdate:timeInterval": onUpdateTimeInterval,
                                      onAddressApplied,
                                      onResetAddress,
                                      onDeblockAddress
                                    }, null, 8, ["address-id", "onUpdate:addressId", "delivery-date", "onUpdate:deliveryDate", "city-id", "onUpdate:cityId"])
                                  ]),
                                  _: 1
                                }, 8, ["error"])) : vueExports.createCommentVNode("", true),
                                vueExports.unref(makeOrderForm).delivery_type === "pickup" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$6), {
                                  key: 1,
                                  error: (_M2 = (_L2 = (_K2 = validationErrors.value) == null ? void 0 : _K2.pickup_location_id) == null ? void 0 : _L2.error) == null ? void 0 : _M2.message
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(_sfc_main$b, {
                                      onApplyChose: onChosePickupLocation,
                                      onReset: onResetAddress
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["error"])) : vueExports.createCommentVNode("", true)
                              ], 2),
                              vueExports.unref(makeOrderForm).delivery_type === "pickup" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 0,
                                class: "rounded-20 basis-1/2 overflow-hidden"
                              }, [
                                vueExports.createVNode(vueExports.unref(_sfc_main$c), {
                                  zoom: vueExports.unref(pickupLocationStore).selectedLocation ? 19 : 11,
                                  center: vueExports.unref(pickupLocationStore).locationCoordinates,
                                  height: vueExports.unref(isMobile) ? "420px" : "100%"
                                }, {
                                  marker: vueExports.withCtx(() => [
                                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(pickupLocationStore).locationsList, (location) => {
                                      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(YandexMapDefaultMarker), {
                                        key: location.id,
                                        settings: {
                                          coordinates: [Number(location.longitude), Number(location.latitude)]
                                        }
                                      }, null, 8, ["settings"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["zoom", "center", "height"])
                              ])) : vueExports.createCommentVNode("", true)
                            ])
                          ]),
                          vueExports.createVNode("div", { class: "border-filling mt-6 flex flex-col gap-4 border-b border-solid pb-6" }, [
                            vueExports.createVNode("p", { class: "text-small-bold sm:text-default-bold" }, "Комментарий к заказу"),
                            vueExports.createVNode(_sfc_main$d, {
                              modelValue: vueExports.unref(makeOrderForm).comment,
                              "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).comment = $event,
                              class: "resize-none",
                              placeholder: "Комментарий"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          vueExports.createVNode("div", { class: "border-filling mt-6 flex flex-col gap-4 border-b border-solid pb-6" }, [
                            vueExports.createVNode("p", { class: "text-small-bold sm:text-default-bold" }, "Способ оплаты"),
                            vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                              error: (_P2 = (_O2 = (_N2 = validationErrors.value) == null ? void 0 : _N2.transaction_method_id) == null ? void 0 : _O2.error) == null ? void 0 : _P2.message
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode("div", { class: "grid auto-cols-fr gap-2 sm:grid-flow-col" }, [
                                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.transactionMethods, (transactionMethod) => {
                                    var _a4, _b4, _c4;
                                    return vueExports.openBlock(), vueExports.createBlock("label", {
                                      key: transactionMethod.id,
                                      class: "bg-light-gray grid grid-cols-[auto_1fr_auto] gap-2 rounded-2xl p-3"
                                    }, [
                                      vueExports.createVNode("span", null, [
                                        transactionMethod.icon ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$e), {
                                          key: 0,
                                          src: transactionMethod.icon.path,
                                          alt: "Иконка"
                                        }, null, 8, ["src"])) : vueExports.createCommentVNode("", true)
                                      ]),
                                      vueExports.createVNode("span", { class: "inline-flex flex-col gap-1" }, [
                                        vueExports.createVNode("span", { class: "text-mob-small-medium" }, vueExports.toDisplayString(transactionMethod.name), 1),
                                        vueExports.createVNode("span", { class: "text-subsidiary-reg text-additional" }, vueExports.toDisplayString(transactionMethod.description), 1)
                                      ]),
                                      vueExports.createVNode(_sfc_main$9, {
                                        modelValue: vueExports.unref(makeOrderForm).transaction_method_id,
                                        "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).transaction_method_id = $event,
                                        value: transactionMethod.id,
                                        invalid: !!((_c4 = (_b4 = (_a4 = validationErrors.value) == null ? void 0 : _a4.transaction_method_id) == null ? void 0 : _b4.error) == null ? void 0 : _c4.message),
                                        name: "transaction_method_id"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "invalid"])
                                    ]);
                                  }), 128))
                                ])
                              ]),
                              _: 1
                            }, 8, ["error"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="mt-6"${_scopeId2}><p class="text-small-bold sm:text-default-bold mb-4"${_scopeId2}>Содержание заказа</p><div class="grid"${_scopeId2}>`);
                  if ((_b2 = _ctx.cart.formatedItems) == null ? void 0 : _b2.length) {
                    _push3(`<!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(_ctx.cart.formatedItems, (item) => {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$f, {
                        key: item.id,
                        item
                      }, {
                        addToCart: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            if (!item.is_combo && !item.is_gift) {
                              _push4(`<div class="text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(`${smartFormat(item.quantity * Number(item.item.weight))} ${item.item.weight_type}`)}</div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            if (item.is_gift) {
                              _push4(`<div class="text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"${_scopeId3}> 1 шт </div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                          } else {
                            return [
                              !item.is_combo && !item.is_gift ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 0,
                                class: "text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"
                              }, vueExports.toDisplayString(`${smartFormat(item.quantity * Number(item.item.weight))} ${item.item.weight_type}`), 1)) : vueExports.createCommentVNode("", true),
                              item.is_gift ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 1,
                                class: "text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"
                              }, " 1 шт ")) : vueExports.createCommentVNode("", true)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div></div><div class="rounded-20 flex w-full shrink-0 flex-col gap-2 xl:max-w-88"${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$g), { onPromocodeApplied }, {
                    usePointsExpire: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a3, _b3, _c3, _d3, _e3, _f3, _g3, _h3;
                      if (_push4) {
                        if (_ctx.auth.user && ((_b3 = (_a3 = vueExports.unref(calculateData)) == null ? void 0 : _a3.order_detail) == null ? void 0 : _b3.bonus_spent_limit)) {
                          _push4(`<div class="mt-6 flex items-center gap-2"${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconFire), { class: "text-delete h-6 w-6" }, null, _parent4, _scopeId3));
                          _push4(`<div${_scopeId3}><p class="text-mob-small-medium"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("checkout.takePoints"))} <span class="text-delete"${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("checkout.takePointsValue", (_d3 = (_c3 = vueExports.unref(calculateData)) == null ? void 0 : _c3.order_detail) == null ? void 0 : _d3.bonus_spent_limit))}</span></p><p class="text-subsidiary-reg text-additional"${_scopeId3}>Баллы действуют до ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.$page.props.expireDate)}</p></div>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$h, {
                            modelValue: vueExports.unref(makeOrderForm).use_expiring_bonuses,
                            "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).use_expiring_bonuses = $event,
                            name: "use_expiring_bonuses",
                            class: "shrink-0"
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          _ctx.auth.user && ((_f3 = (_e3 = vueExports.unref(calculateData)) == null ? void 0 : _e3.order_detail) == null ? void 0 : _f3.bonus_spent_limit) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "mt-6 flex items-center gap-2"
                          }, [
                            vueExports.createVNode(vueExports.unref(IconFire), { class: "text-delete h-6 w-6" }),
                            vueExports.createVNode("div", null, [
                              vueExports.createVNode("p", { class: "text-mob-small-medium" }, [
                                vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("checkout.takePoints")) + " ", 1),
                                vueExports.createVNode("span", { class: "text-delete" }, vueExports.toDisplayString(vueExports.unref(t)("checkout.takePointsValue", (_h3 = (_g3 = vueExports.unref(calculateData)) == null ? void 0 : _g3.order_detail) == null ? void 0 : _h3.bonus_spent_limit)), 1)
                              ]),
                              vueExports.createVNode("p", { class: "text-subsidiary-reg text-additional" }, "Баллы действуют до " + vueExports.toDisplayString(_ctx.$page.props.expireDate), 1)
                            ]),
                            vueExports.createVNode(_sfc_main$h, {
                              modelValue: vueExports.unref(makeOrderForm).use_expiring_bonuses,
                              "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).use_expiring_bonuses = $event,
                              name: "use_expiring_bonuses",
                              class: "shrink-0"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])) : vueExports.createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<section class="rounded-20 bg-light-gray p-4"${_scopeId2}><header class="mb-4 sm:mb-6"${_scopeId2}><h4 class="text-small-medium sm:text-default-medium mb-2"${_scopeId2}>Детали доставки</h4><p class="text-subsidiary-reg text-additional"${_scopeId2}>В зависимости от выбранного способа доставки и адреса данные могут измениться</p></header><dl class="grid grid-cols-[minmax(0,140px)_1fr] items-start gap-2"${_scopeId2}>`);
                  if (vueExports.unref(makeOrderForm).delivery_type === "courier") {
                    _push3(`<!--[--><dt class="text-subsidiary-medium text-subsidiary py-0.5"${_scopeId2}>Срок доставки:</dt><dd class="text-mob-small-medium"${_scopeId2}>`);
                    if (!isOtherCity.value) {
                      _push3(`<!--[-->`);
                      if ((_c2 = vueExports.unref(calculateData)) == null ? void 0 : _c2.delivery_detail.delivery_date) {
                        _push3(`<!--[-->${serverRenderer_cjs_prodExports.ssrInterpolate(formattingDeliveryDate.value)}<!--]-->`);
                      } else {
                        _push3(`<span class="text-additional"${_scopeId2}>не выбрано</span>`);
                      }
                      _push3(`<!--]-->`);
                    } else {
                      _push3(`<span class="inline-flex items-start gap-1"${_scopeId2}><span class="block max-w-[120px]"${_scopeId2}>Рассчитывается индивидуально</span>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$i), { value: "Срок доставки зависит от адреса, веса и стоимости заказа" }, null, _parent3, _scopeId2));
                      _push3(`</span>`);
                    }
                    _push3(`</dd>`);
                    if (!isOtherCity.value) {
                      _push3(`<!--[--><dt class="text-subsidiary-medium text-subsidiary py-0.5"${_scopeId2}>Время доставки:</dt><dd class="text-mob-small-medium"${_scopeId2}>`);
                      if (((_d2 = vueExports.unref(calculateData)) == null ? void 0 : _d2.delivery_detail.delivery_time_from) && ((_e2 = vueExports.unref(calculateData)) == null ? void 0 : _e2.delivery_detail.delivery_time_to)) {
                        _push3(`<!--[-->${serverRenderer_cjs_prodExports.ssrInterpolate(`с ${vueExports.unref(calculateData).delivery_detail.delivery_time_from} до ${(_f2 = vueExports.unref(calculateData)) == null ? void 0 : _f2.delivery_detail.delivery_time_to}`)}<!--]-->`);
                      } else {
                        _push3(`<span class="text-additional"${_scopeId2}>не выбрано</span>`);
                      }
                      _push3(`</dd><!--]-->`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<dt class="text-subsidiary-medium text-subsidiary py-0.5"${_scopeId2}>Город:</dt><dd class="text-mob-small-medium"${_scopeId2}>`);
                    if ((_g2 = vueExports.unref(calculateData)) == null ? void 0 : _g2.delivery_detail.city) {
                      _push3(`<!--[-->${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(calculateData).delivery_detail.city)}<!--]-->`);
                    } else {
                      _push3(`<span class="text-additional"${_scopeId2}>не выбрано</span>`);
                    }
                    _push3(`</dd><dt class="text-subsidiary-medium text-subsidiary py-0.5"${_scopeId2}>Адрес:</dt><dd class="text-mob-small-medium"${_scopeId2}>`);
                    if ((_h2 = vueExports.unref(calculateData)) == null ? void 0 : _h2.delivery_detail.address_full) {
                      _push3(`<!--[-->${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(calculateData).delivery_detail.address_full)}<!--]-->`);
                    } else {
                      _push3(`<span class="text-additional"${_scopeId2}>не выбрано</span>`);
                    }
                    _push3(`</dd>`);
                    if (!isOtherCity.value) {
                      _push3(`<!--[--><dt class="text-subsidiary-medium text-subsidiary py-0.5"${_scopeId2}>Зона доставки:</dt><dd${_scopeId2}>`);
                      if ((_i2 = vueExports.unref(calculateData)) == null ? void 0 : _i2.delivery_detail.delivery_zone_name) {
                        _push3(`<span class="inline-flex items-center gap-1"${_scopeId2}><span class="text-mob-small-medium"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(calculateData).delivery_detail.delivery_zone_name)}</span><span class="text-complimentary-reg text-additional"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate((_j2 = vueExports.unref(calculateData)) == null ? void 0 : _j2.delivery_detail.delivery_zone_description)}</span></span>`);
                      } else {
                        _push3(`<span class="text-additional text-mob-small-medium block"${_scopeId2}>не выбрано</span>`);
                      }
                      _push3(`</dd><!--]-->`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (vueExports.unref(makeOrderForm).delivery_type === "pickup") {
                    _push3(`<!--[--><dt class="text-subsidiary-medium text-subsidiary py-0.5"${_scopeId2}>Срок доставки:</dt><dd class="text-mob-small-medium"${_scopeId2}>`);
                    if (!isOtherCity.value) {
                      _push3(`<!--[-->`);
                      if ((_k2 = vueExports.unref(calculateData)) == null ? void 0 : _k2.delivery_detail.pickup_location_time_min) {
                        _push3(`<!--[-->${serverRenderer_cjs_prodExports.ssrInterpolate(formattingDeliveryDate.value)}<!--]-->`);
                      } else {
                        _push3(`<span class="text-additional"${_scopeId2}>не выбрано</span>`);
                      }
                      _push3(`<!--]-->`);
                    } else {
                      _push3(`<span class="inline-flex items-start gap-1"${_scopeId2}><span class="block max-w-[120px]"${_scopeId2}>Рассчитывается индивидуально</span>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$i), { value: "Срок доставки зависит от адреса, веса и стоимости заказа" }, null, _parent3, _scopeId2));
                      _push3(`</span>`);
                    }
                    _push3(`</dd><dt class="text-subsidiary-medium text-subsidiary self-start py-0.5"${_scopeId2}>Пункт выдачи:</dt><dd class="text-mob-small-medium"${_scopeId2}>`);
                    if (((_l2 = vueExports.unref(calculateData)) == null ? void 0 : _l2.delivery_detail.pickup_location_address) && ((_m2 = vueExports.unref(calculateData)) == null ? void 0 : _m2.delivery_detail.pickup_location_name)) {
                      _push3(`<!--[-->${serverRenderer_cjs_prodExports.ssrInterpolate(`${(_n2 = vueExports.unref(calculateData)) == null ? void 0 : _n2.delivery_detail.pickup_location_name}, ${(_o2 = vueExports.unref(calculateData)) == null ? void 0 : _o2.delivery_detail.pickup_location_address}`)}<!--]-->`);
                    } else {
                      _push3(`<span class="text-additional"${_scopeId2}>не выбран</span>`);
                    }
                    _push3(`</dd><!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<dt class="text-subsidiary-medium text-subsidiary py-0.5"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(makeOrderForm).delivery_type === "courier" ? "Стоимость доставки:" : "Стоимость:")}</dt><dd class="text-mob-small-medium"${_scopeId2}>`);
                  if (!isOtherCity.value) {
                    _push3(`<span class="inline-flex items-center gap-2"${_scopeId2}>`);
                    if (((_p2 = vueExports.unref(calculateData)) == null ? void 0 : _p2.delivery_detail.delivery_zone_name) || ((_q2 = vueExports.unref(calculateData)) == null ? void 0 : _q2.delivery_detail.address_full) || ((_r2 = vueExports.unref(calculateData)) == null ? void 0 : _r2.delivery_detail.pickup_location_address)) {
                      _push3(`<!--[-->${serverRenderer_cjs_prodExports.ssrInterpolate((_s2 = vueExports.unref(calculateData)) == null ? void 0 : _s2.delivery_detail.delivery_price)} руб. <!--]-->`);
                    } else {
                      _push3(`<span class="text-mob-small-medium text-additional"${_scopeId2}>нет данных</span>`);
                    }
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$i), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" }, null, _parent3, _scopeId2));
                    _push3(`</span>`);
                  } else {
                    _push3(`<span class="flex items-start gap-1"${_scopeId2}><span class="block max-w-[120px]"${_scopeId2}>Рассчитывается индивидуально</span>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$i), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" }, null, _parent3, _scopeId2));
                    _push3(`</span>`);
                  }
                  _push3(`</dd></dl></section>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$j), {
                    "order-detail": ((_t2 = vueExports.unref(calculateData)) == null ? void 0 : _t2.order_detail) ?? null,
                    "is-delivery-price-enabled": !!((_u2 = vueExports.unref(calculateData)) == null ? void 0 : _u2.delivery_detail.delivery_zone_name) || !!((_v = vueExports.unref(calculateData)) == null ? void 0 : _v.delivery_detail.address_full) || !!((_w = vueExports.unref(calculateData)) == null ? void 0 : _w.delivery_detail.pickup_location_address),
                    "is-individual": isOtherCity.value
                  }, {
                    footer: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      var _a3, _b3, _c3, _d3, _e3, _f3;
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
                          error: (_c3 = (_b3 = (_a3 = validationErrors.value) == null ? void 0 : _a3.isAgree) == null ? void 0 : _b3.error) == null ? void 0 : _c3.message
                        }, {
                          default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                            var _a4, _b4, _c4, _d4, _e4, _f4;
                            if (_push5) {
                              _push5(`<div class="flex gap-3"${_scopeId4}>`);
                              _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$k, {
                                modelValue: isAgree.value,
                                "onUpdate:modelValue": ($event) => isAgree.value = $event,
                                binary: "",
                                required: "",
                                name: "agreement",
                                invalid: !!((_c4 = (_b4 = (_a4 = validationErrors.value) == null ? void 0 : _a4.isAgree) == null ? void 0 : _b4.error) == null ? void 0 : _c4.message),
                                "form-control": { invalid: true }
                              }, null, _parent5, _scopeId4));
                              _push5(`<p class="text-complimentary-reg text-additional"${_scopeId4}> Нажимая на кнопку «Оформить заказ» я подтверждаю, что ознакомился с <a href="#" target="_blank" class="hover:text-text underline transition-colors"${_scopeId4}>политикой конфиденциальности</a> и <a href="#" target="_blank" class="hover:text-text underline transition-colors"${_scopeId4}>условиями покупки</a></p></div>`);
                            } else {
                              return [
                                vueExports.createVNode("div", { class: "flex gap-3" }, [
                                  vueExports.createVNode(_sfc_main$k, {
                                    modelValue: isAgree.value,
                                    "onUpdate:modelValue": ($event) => isAgree.value = $event,
                                    binary: "",
                                    required: "",
                                    name: "agreement",
                                    invalid: !!((_f4 = (_e4 = (_d4 = validationErrors.value) == null ? void 0 : _d4.isAgree) == null ? void 0 : _e4.error) == null ? void 0 : _f4.message),
                                    "form-control": { invalid: true }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"]),
                                  vueExports.createVNode("p", { class: "text-complimentary-reg text-additional" }, [
                                    vueExports.createTextVNode(" Нажимая на кнопку «Оформить заказ» я подтверждаю, что ознакомился с "),
                                    vueExports.createVNode("a", {
                                      href: "#",
                                      target: "_blank",
                                      class: "hover:text-text underline transition-colors"
                                    }, "политикой конфиденциальности"),
                                    vueExports.createTextVNode(" и "),
                                    vueExports.createVNode("a", {
                                      href: "#",
                                      target: "_blank",
                                      class: "hover:text-text underline transition-colors"
                                    }, "условиями покупки")
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                          label: "Оформить заказ",
                          class: "mt-6 w-full",
                          form: "make-order"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                            error: (_f3 = (_e3 = (_d3 = validationErrors.value) == null ? void 0 : _d3.isAgree) == null ? void 0 : _e3.error) == null ? void 0 : _f3.message
                          }, {
                            default: vueExports.withCtx(() => {
                              var _a4, _b4, _c4;
                              return [
                                vueExports.createVNode("div", { class: "flex gap-3" }, [
                                  vueExports.createVNode(_sfc_main$k, {
                                    modelValue: isAgree.value,
                                    "onUpdate:modelValue": ($event) => isAgree.value = $event,
                                    binary: "",
                                    required: "",
                                    name: "agreement",
                                    invalid: !!((_c4 = (_b4 = (_a4 = validationErrors.value) == null ? void 0 : _a4.isAgree) == null ? void 0 : _b4.error) == null ? void 0 : _c4.message),
                                    "form-control": { invalid: true }
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"]),
                                  vueExports.createVNode("p", { class: "text-complimentary-reg text-additional" }, [
                                    vueExports.createTextVNode(" Нажимая на кнопку «Оформить заказ» я подтверждаю, что ознакомился с "),
                                    vueExports.createVNode("a", {
                                      href: "#",
                                      target: "_blank",
                                      class: "hover:text-text underline transition-colors"
                                    }, "политикой конфиденциальности"),
                                    vueExports.createTextVNode(" и "),
                                    vueExports.createVNode("a", {
                                      href: "#",
                                      target: "_blank",
                                      class: "hover:text-text underline transition-colors"
                                    }, "условиями покупки")
                                  ])
                                ])
                              ];
                            }),
                            _: 1
                          }, 8, ["error"]),
                          vueExports.createVNode(vueExports.unref(VButton), {
                            label: "Оформить заказ",
                            class: "mt-6 w-full",
                            form: "make-order"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<section class="border-filling rounded-20 border border-solid p-4"${_scopeId2}><h4 class="text-small-medium sm:text-default-medium mb-4"${_scopeId2}>Техническая поддержка</h4><div class="grid grid-cols-1 gap-2"${_scopeId2}><div class="flex flex-col gap-1"${_scopeId2}><span class="text-complimentary-reg text-additional"${_scopeId2}>Свяжитесь с нами, если у вас возникли вопросы или проблемы с оформлением заказа</span><a href="tel:88005504622" class="text-small-bold"${_scopeId2}>8 (800) 550-46-22</a></div><div class="flex flex-col gap-1"${_scopeId2}><span class="text-complimentary-reg text-additional"${_scopeId2}>Или напишите нам на почту</span><a href="mailto:zakaz@primebeefmoscow.ru" class="text-mob-small-reg"${_scopeId2}>zakaz@primebeefmoscow.ru</a></div><div class="grid grid-cols-1 gap-2"${_scopeId2}><button class="bg-input text-mob-small-reg inline-flex items-center gap-2 rounded-lg p-3 text-start"${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconChats), { class: "shrink-0" }, null, _parent3, _scopeId2));
                  _push3(` Чат с технической поддержкой </button>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                    href: "/page/return-exchange",
                    class: "bg-input text-mob-small-reg inline-flex items-center gap-2 rounded-lg p-3 text-start"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconRepeat), { class: "shrink-0" }, null, _parent4, _scopeId3));
                        _push4(` Условия возврата и обмена товаров `);
                      } else {
                        return [
                          vueExports.createVNode(vueExports.unref(IconRepeat), { class: "shrink-0" }),
                          vueExports.createTextVNode(" Условия возврата и обмена товаров ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                    href: _ctx.route("faq.faq.index"),
                    class: "bg-input text-mob-small-reg inline-flex items-center gap-2 rounded-lg p-3 text-start"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconQuestion), { class: "shrink-0" }, null, _parent4, _scopeId3));
                        _push4(` Частые вопросы `);
                      } else {
                        return [
                          vueExports.createVNode(vueExports.unref(IconQuestion), { class: "shrink-0" }),
                          vueExports.createTextVNode(" Частые вопросы ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></section></div></div>`);
                } else {
                  return [
                    ((_x = _ctx.banners) == null ? void 0 : _x.length) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      class: "my-6 w-full"
                    }, [
                      vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                        "slider-options": {
                          spaceBetween: 20,
                          breakpoints: {
                            0: {
                              slidesPerView: 1
                            }
                          }
                        },
                        slides: _ctx.banners,
                        class: "max-w-full"
                      }, {
                        slide: vueExports.withCtx(({ slide }) => [
                          vueExports.createVNode("div", {
                            style: { backgroundImage: `url(${slide.image.path}), linear-gradient(to bottom, rgba(2, 40, 63, 0), rgba(2, 40, 63, 1))` },
                            class: "rounded-20 flex min-h-[238px] w-full items-end bg-cover bg-center bg-no-repeat p-4 text-white bg-blend-color md:min-h-[193px] md:items-center md:p-6"
                          }, [
                            vueExports.createVNode("div", { class: "grid gap-2" }, [
                              slide.promotion_days_left ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 0,
                                class: "bg-delete text-subsidiary-medium w-fit rounded-[100px] px-2 py-1 text-white"
                              }, " Еще " + vueExports.toDisplayString(slide.promotion_days_left) + " дней ", 1)) : vueExports.createCommentVNode("", true),
                              vueExports.createVNode("h2", { class: "text-vast-mob-title-bold md:text-vast-title-bold uppercase" }, vueExports.toDisplayString(slide.title), 1),
                              vueExports.createVNode("p", { class: "text-mob-small-bold md:text-default-bold" }, vueExports.toDisplayString(slide.description), 1),
                              vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(slide.addition_description), 1)
                            ])
                          ], 4)
                        ]),
                        _: 1
                      }, 8, ["slides"])
                    ])) : vueExports.createCommentVNode("", true),
                    vueExports.createVNode("div", { class: "bg-light-gray grid w-[calc(100dvw_-_24px)] grid-cols-[repeat(4,minmax(182px,1fr))] gap-1 overflow-x-scroll rounded-2xl p-3 sm:w-full sm:overflow-x-auto" }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(steps.value, (step) => {
                        return vueExports.openBlock(), vueExports.createBlock("div", {
                          key: step.id,
                          class: "flex flex-1 flex-col gap-1"
                        }, [
                          vueExports.createVNode(_sfc_main$4, {
                            value: step.progress,
                            "show-value": false
                          }, null, 8, ["value"]),
                          vueExports.createVNode("p", { class: "text-mob-small-medium" }, vueExports.toDisplayString(step.stepName), 1),
                          vueExports.createVNode("p", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString(step.stepDescription), 1)
                        ]);
                      }), 128))
                    ]),
                    vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-8 xl:flex-row" }, [
                      vueExports.createVNode("div", { class: "grow basis-3/4" }, [
                        vueExports.createVNode(vueExports.unref(Form), {
                          id: "make-order",
                          onSubmit: createFormSubmit
                        }, {
                          default: vueExports.withCtx(() => {
                            var _a3, _b3, _c3, _d3, _e3, _f3, _g3, _h3, _i3, _j3, _k3, _l3, _m3, _n3, _o3, _p3, _q3, _r3, _s3, _t3, _u3;
                            return [
                              vueExports.createVNode("div", { class: "border-filling border-b border-solid pb-6" }, [
                                vueExports.createVNode("div", {
                                  class: ["flex flex-col gap-4", { "bg-light-gray rounded-20 p-4": _ctx.auth.user }]
                                }, [
                                  vueExports.createVNode("p", { class: "text-small-bold sm:text-default-bold" }, "Получатель"),
                                  vueExports.createVNode("fieldset", null, [
                                    vueExports.createVNode("legend", { class: "text-mob-small-medium sm:text-small-medium mb-4" }, "Данные получателя"),
                                    vueExports.createVNode("div", { class: "grid gap-2 sm:grid-cols-3" }, [
                                      vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                        modelValue: vueExports.unref(makeOrderForm).last_name,
                                        "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).last_name = $event,
                                        label: "Ваша фамилия",
                                        name: "last_name",
                                        error: (_c3 = (_b3 = (_a3 = validationErrors.value) == null ? void 0 : _a3.last_name) == null ? void 0 : _b3.error) == null ? void 0 : _c3.message,
                                        required: "",
                                        clearable: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                      vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                        modelValue: vueExports.unref(makeOrderForm).name,
                                        "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).name = $event,
                                        name: "name",
                                        label: "Ваше имя",
                                        error: (_f3 = (_e3 = (_d3 = validationErrors.value) == null ? void 0 : _d3.name) == null ? void 0 : _e3.error) == null ? void 0 : _f3.message,
                                        clearable: "",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                      vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                        modelValue: vueExports.unref(makeOrderForm).second_name,
                                        "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).second_name = $event,
                                        name: "second_name",
                                        label: "Ваше отчество",
                                        clearable: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ])
                                  ]),
                                  vueExports.createVNode("fieldset", null, [
                                    vueExports.createVNode("legend", { class: "text-mob-small-medium sm:text-small-medium mb-4" }, "Контактные данные"),
                                    vueExports.createVNode("div", { class: "grid gap-2 sm:grid-cols-3" }, [
                                      vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                        modelValue: vueExports.unref(makeOrderForm).email,
                                        "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).email = $event,
                                        error: (_i3 = (_h3 = (_g3 = validationErrors.value) == null ? void 0 : _g3.email) == null ? void 0 : _h3.error) == null ? void 0 : _i3.message,
                                        name: "email",
                                        type: "email",
                                        label: "Ваш e-mail",
                                        clearable: "",
                                        required: "",
                                        onBlur: checkGift
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                      vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                                        error: (_l3 = (_k3 = (_j3 = validationErrors.value) == null ? void 0 : _j3.phone) == null ? void 0 : _k3.error) == null ? void 0 : _l3.message
                                      }, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode(vueExports.unref(VFloatLabel), {
                                            label: vueExports.unref(t)("checkout.phone"),
                                            required: ""
                                          }, {
                                            default: vueExports.withCtx(({ labelId }) => [
                                              vueExports.createVNode(_sfc_main$7, {
                                                id: labelId,
                                                modelValue: vueExports.unref(makeOrderForm).phone,
                                                "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).phone = $event,
                                                unmask: "",
                                                mask: "+7 (999) 999-99-99",
                                                name: "phone",
                                                type: "phone",
                                                fluid: "",
                                                required: "",
                                                onBlur: checkGift
                                              }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          }, 8, ["label"])
                                        ]),
                                        _: 1
                                      }, 8, ["error"]),
                                      vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                        modelValue: vueExports.unref(makeOrderForm).contact_methods,
                                        "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).contact_methods = $event,
                                        options: _ctx.allContactMethods
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ])
                                  ])
                                ], 2)
                              ]),
                              vueExports.createVNode("div", { class: "border-filling mt-6 flex flex-col gap-4 border-b border-solid pb-6" }, [
                                vueExports.createVNode("p", { class: "text-small-bold sm:text-default-bold" }, "Доставка"),
                                vueExports.createVNode("div", { class: "flex flex-col gap-4 md:flex-row lg:gap-8" }, [
                                  vueExports.createVNode("div", {
                                    class: ["flex flex-col gap-6", [vueExports.unref(makeOrderForm).delivery_type === "pickup" ? "basis-1/2" : "w-full"]]
                                  }, [
                                    vueExports.createVNode("fieldset", null, [
                                      vueExports.createVNode("legend", { class: "text-mob-small-medium sm:text-small-medium mb-4 flex items-center gap-2" }, [
                                        vueExports.createVNode("span", null, "Способ доставки"),
                                        pickupBonusPoints.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                          key: 0,
                                          class: "bg-push-green text-subsidiary-reg inline-flex items-center gap-2 rounded-full p-2"
                                        }, [
                                          vueExports.createVNode(vueExports.unref(IconPickupBonus)),
                                          vueExports.createVNode("span", null, [
                                            vueExports.createVNode("span", { class: "text-subsidiary-medium" }, "+" + vueExports.toDisplayString(pickupBonusPoints.value), 1),
                                            vueExports.createTextVNode(" баллов за самовывоз ")
                                          ])
                                        ])) : vueExports.createCommentVNode("", true)
                                      ]),
                                      vueExports.createVNode("div", { class: "flex gap-6" }, [
                                        vueExports.createVNode("label", { class: "flex items-center gap-3 p-2" }, [
                                          vueExports.createVNode(_sfc_main$9, {
                                            modelValue: vueExports.unref(makeOrderForm).delivery_type,
                                            "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).delivery_type = $event,
                                            value: "courier",
                                            name: "deliveryMethod",
                                            disabled: isAddressApplied.value
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                          vueExports.createVNode("span", { class: "text-mob-small-reg" }, "Курьер")
                                        ]),
                                        vueExports.createVNode("label", { class: "flex items-center gap-3 p-2" }, [
                                          vueExports.createVNode(_sfc_main$9, {
                                            modelValue: vueExports.unref(makeOrderForm).delivery_type,
                                            "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).delivery_type = $event,
                                            value: "pickup",
                                            name: "deliveryMethod",
                                            disabled: isAddressApplied.value
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                          vueExports.createVNode("span", { class: "text-mob-small-reg" }, "Самовывоз")
                                        ])
                                      ])
                                    ]),
                                    vueExports.unref(makeOrderForm).delivery_type === "courier" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$6), {
                                      key: 0,
                                      error: (_o3 = (_n3 = (_m3 = validationErrors.value) == null ? void 0 : _m3.address_id) == null ? void 0 : _n3.error) == null ? void 0 : _o3.message
                                    }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(_sfc_main$a, {
                                          "address-id": vueExports.unref(makeOrderForm).address_id,
                                          "onUpdate:addressId": ($event) => vueExports.unref(makeOrderForm).address_id = $event,
                                          "delivery-date": vueExports.unref(makeOrderForm).delivery_date,
                                          "onUpdate:deliveryDate": ($event) => vueExports.unref(makeOrderForm).delivery_date = $event,
                                          "city-id": selectedCourierCityId.value,
                                          "onUpdate:cityId": ($event) => selectedCourierCityId.value = $event,
                                          "onUpdate:timeInterval": onUpdateTimeInterval,
                                          onAddressApplied,
                                          onResetAddress,
                                          onDeblockAddress
                                        }, null, 8, ["address-id", "onUpdate:addressId", "delivery-date", "onUpdate:deliveryDate", "city-id", "onUpdate:cityId"])
                                      ]),
                                      _: 1
                                    }, 8, ["error"])) : vueExports.createCommentVNode("", true),
                                    vueExports.unref(makeOrderForm).delivery_type === "pickup" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$6), {
                                      key: 1,
                                      error: (_r3 = (_q3 = (_p3 = validationErrors.value) == null ? void 0 : _p3.pickup_location_id) == null ? void 0 : _q3.error) == null ? void 0 : _r3.message
                                    }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createVNode(_sfc_main$b, {
                                          onApplyChose: onChosePickupLocation,
                                          onReset: onResetAddress
                                        })
                                      ]),
                                      _: 1
                                    }, 8, ["error"])) : vueExports.createCommentVNode("", true)
                                  ], 2),
                                  vueExports.unref(makeOrderForm).delivery_type === "pickup" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: 0,
                                    class: "rounded-20 basis-1/2 overflow-hidden"
                                  }, [
                                    vueExports.createVNode(vueExports.unref(_sfc_main$c), {
                                      zoom: vueExports.unref(pickupLocationStore).selectedLocation ? 19 : 11,
                                      center: vueExports.unref(pickupLocationStore).locationCoordinates,
                                      height: vueExports.unref(isMobile) ? "420px" : "100%"
                                    }, {
                                      marker: vueExports.withCtx(() => [
                                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(pickupLocationStore).locationsList, (location) => {
                                          return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(YandexMapDefaultMarker), {
                                            key: location.id,
                                            settings: {
                                              coordinates: [Number(location.longitude), Number(location.latitude)]
                                            }
                                          }, null, 8, ["settings"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    }, 8, ["zoom", "center", "height"])
                                  ])) : vueExports.createCommentVNode("", true)
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "border-filling mt-6 flex flex-col gap-4 border-b border-solid pb-6" }, [
                                vueExports.createVNode("p", { class: "text-small-bold sm:text-default-bold" }, "Комментарий к заказу"),
                                vueExports.createVNode(_sfc_main$d, {
                                  modelValue: vueExports.unref(makeOrderForm).comment,
                                  "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).comment = $event,
                                  class: "resize-none",
                                  placeholder: "Комментарий"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              vueExports.createVNode("div", { class: "border-filling mt-6 flex flex-col gap-4 border-b border-solid pb-6" }, [
                                vueExports.createVNode("p", { class: "text-small-bold sm:text-default-bold" }, "Способ оплаты"),
                                vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                                  error: (_u3 = (_t3 = (_s3 = validationErrors.value) == null ? void 0 : _s3.transaction_method_id) == null ? void 0 : _t3.error) == null ? void 0 : _u3.message
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode("div", { class: "grid auto-cols-fr gap-2 sm:grid-flow-col" }, [
                                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.transactionMethods, (transactionMethod) => {
                                        var _a4, _b4, _c4;
                                        return vueExports.openBlock(), vueExports.createBlock("label", {
                                          key: transactionMethod.id,
                                          class: "bg-light-gray grid grid-cols-[auto_1fr_auto] gap-2 rounded-2xl p-3"
                                        }, [
                                          vueExports.createVNode("span", null, [
                                            transactionMethod.icon ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$e), {
                                              key: 0,
                                              src: transactionMethod.icon.path,
                                              alt: "Иконка"
                                            }, null, 8, ["src"])) : vueExports.createCommentVNode("", true)
                                          ]),
                                          vueExports.createVNode("span", { class: "inline-flex flex-col gap-1" }, [
                                            vueExports.createVNode("span", { class: "text-mob-small-medium" }, vueExports.toDisplayString(transactionMethod.name), 1),
                                            vueExports.createVNode("span", { class: "text-subsidiary-reg text-additional" }, vueExports.toDisplayString(transactionMethod.description), 1)
                                          ]),
                                          vueExports.createVNode(_sfc_main$9, {
                                            modelValue: vueExports.unref(makeOrderForm).transaction_method_id,
                                            "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).transaction_method_id = $event,
                                            value: transactionMethod.id,
                                            invalid: !!((_c4 = (_b4 = (_a4 = validationErrors.value) == null ? void 0 : _a4.transaction_method_id) == null ? void 0 : _b4.error) == null ? void 0 : _c4.message),
                                            name: "transaction_method_id"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "invalid"])
                                        ]);
                                      }), 128))
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["error"])
                              ])
                            ];
                          }),
                          _: 1
                        }),
                        vueExports.createVNode("div", { class: "mt-6" }, [
                          vueExports.createVNode("p", { class: "text-small-bold sm:text-default-bold mb-4" }, "Содержание заказа"),
                          vueExports.createVNode("div", { class: "grid" }, [
                            ((_y = _ctx.cart.formatedItems) == null ? void 0 : _y.length) ? (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, { key: 0 }, vueExports.renderList(_ctx.cart.formatedItems, (item) => {
                              return vueExports.openBlock(), vueExports.createBlock(_sfc_main$f, {
                                key: item.id,
                                item
                              }, {
                                addToCart: vueExports.withCtx(() => [
                                  !item.is_combo && !item.is_gift ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: 0,
                                    class: "text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"
                                  }, vueExports.toDisplayString(`${smartFormat(item.quantity * Number(item.item.weight))} ${item.item.weight_type}`), 1)) : vueExports.createCommentVNode("", true),
                                  item.is_gift ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: 1,
                                    class: "text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"
                                  }, " 1 шт ")) : vueExports.createCommentVNode("", true)
                                ]),
                                _: 2
                              }, 1032, ["item"]);
                            }), 128)) : vueExports.createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      vueExports.createVNode("div", { class: "rounded-20 flex w-full shrink-0 flex-col gap-2 xl:max-w-88" }, [
                        vueExports.createVNode(vueExports.unref(_sfc_main$g), { onPromocodeApplied }, {
                          usePointsExpire: vueExports.withCtx(() => {
                            var _a3, _b3, _c3, _d3;
                            return [
                              _ctx.auth.user && ((_b3 = (_a3 = vueExports.unref(calculateData)) == null ? void 0 : _a3.order_detail) == null ? void 0 : _b3.bonus_spent_limit) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 0,
                                class: "mt-6 flex items-center gap-2"
                              }, [
                                vueExports.createVNode(vueExports.unref(IconFire), { class: "text-delete h-6 w-6" }),
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode("p", { class: "text-mob-small-medium" }, [
                                    vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("checkout.takePoints")) + " ", 1),
                                    vueExports.createVNode("span", { class: "text-delete" }, vueExports.toDisplayString(vueExports.unref(t)("checkout.takePointsValue", (_d3 = (_c3 = vueExports.unref(calculateData)) == null ? void 0 : _c3.order_detail) == null ? void 0 : _d3.bonus_spent_limit)), 1)
                                  ]),
                                  vueExports.createVNode("p", { class: "text-subsidiary-reg text-additional" }, "Баллы действуют до " + vueExports.toDisplayString(_ctx.$page.props.expireDate), 1)
                                ]),
                                vueExports.createVNode(_sfc_main$h, {
                                  modelValue: vueExports.unref(makeOrderForm).use_expiring_bonuses,
                                  "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).use_expiring_bonuses = $event,
                                  name: "use_expiring_bonuses",
                                  class: "shrink-0"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ])) : vueExports.createCommentVNode("", true)
                            ];
                          }),
                          _: 1
                        }),
                        vueExports.createVNode("section", { class: "rounded-20 bg-light-gray p-4" }, [
                          vueExports.createVNode("header", { class: "mb-4 sm:mb-6" }, [
                            vueExports.createVNode("h4", { class: "text-small-medium sm:text-default-medium mb-2" }, "Детали доставки"),
                            vueExports.createVNode("p", { class: "text-subsidiary-reg text-additional" }, "В зависимости от выбранного способа доставки и адреса данные могут измениться")
                          ]),
                          vueExports.createVNode("dl", { class: "grid grid-cols-[minmax(0,140px)_1fr] items-start gap-2" }, [
                            vueExports.unref(makeOrderForm).delivery_type === "courier" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                              vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Срок доставки:"),
                              vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                !isOtherCity.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                  ((_z = vueExports.unref(calculateData)) == null ? void 0 : _z.delivery_detail.delivery_date) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                    vueExports.createTextVNode(vueExports.toDisplayString(formattingDeliveryDate.value), 1)
                                  ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                    key: 1,
                                    class: "text-additional"
                                  }, "не выбрано"))
                                ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                  key: 1,
                                  class: "inline-flex items-start gap-1"
                                }, [
                                  vueExports.createVNode("span", { class: "block max-w-[120px]" }, "Рассчитывается индивидуально"),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$i), { value: "Срок доставки зависит от адреса, веса и стоимости заказа" })
                                ]))
                              ]),
                              !isOtherCity.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Время доставки:"),
                                vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                  ((_A = vueExports.unref(calculateData)) == null ? void 0 : _A.delivery_detail.delivery_time_from) && ((_B = vueExports.unref(calculateData)) == null ? void 0 : _B.delivery_detail.delivery_time_to) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                    vueExports.createTextVNode(vueExports.toDisplayString(`с ${vueExports.unref(calculateData).delivery_detail.delivery_time_from} до ${(_C = vueExports.unref(calculateData)) == null ? void 0 : _C.delivery_detail.delivery_time_to}`), 1)
                                  ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                    key: 1,
                                    class: "text-additional"
                                  }, "не выбрано"))
                                ])
                              ], 64)) : vueExports.createCommentVNode("", true),
                              vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Город:"),
                              vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                ((_D = vueExports.unref(calculateData)) == null ? void 0 : _D.delivery_detail.city) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                  vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.city), 1)
                                ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                  key: 1,
                                  class: "text-additional"
                                }, "не выбрано"))
                              ]),
                              vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Адрес:"),
                              vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                ((_E = vueExports.unref(calculateData)) == null ? void 0 : _E.delivery_detail.address_full) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                  vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.address_full), 1)
                                ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                  key: 1,
                                  class: "text-additional"
                                }, "не выбрано"))
                              ]),
                              !isOtherCity.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                                vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Зона доставки:"),
                                vueExports.createVNode("dd", null, [
                                  ((_F = vueExports.unref(calculateData)) == null ? void 0 : _F.delivery_detail.delivery_zone_name) ? (vueExports.openBlock(), vueExports.createBlock("span", {
                                    key: 0,
                                    class: "inline-flex items-center gap-1"
                                  }, [
                                    vueExports.createVNode("span", { class: "text-mob-small-medium" }, vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_name), 1),
                                    vueExports.createVNode("span", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString((_G = vueExports.unref(calculateData)) == null ? void 0 : _G.delivery_detail.delivery_zone_description), 1)
                                  ])) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                    key: 1,
                                    class: "text-additional text-mob-small-medium block"
                                  }, "не выбрано"))
                                ])
                              ], 64)) : vueExports.createCommentVNode("", true)
                            ], 64)) : vueExports.createCommentVNode("", true),
                            vueExports.unref(makeOrderForm).delivery_type === "pickup" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                              vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Срок доставки:"),
                              vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                !isOtherCity.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                  ((_H = vueExports.unref(calculateData)) == null ? void 0 : _H.delivery_detail.pickup_location_time_min) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                    vueExports.createTextVNode(vueExports.toDisplayString(formattingDeliveryDate.value), 1)
                                  ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                    key: 1,
                                    class: "text-additional"
                                  }, "не выбрано"))
                                ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                  key: 1,
                                  class: "inline-flex items-start gap-1"
                                }, [
                                  vueExports.createVNode("span", { class: "block max-w-[120px]" }, "Рассчитывается индивидуально"),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$i), { value: "Срок доставки зависит от адреса, веса и стоимости заказа" })
                                ]))
                              ]),
                              vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary self-start py-0.5" }, "Пункт выдачи:"),
                              vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                ((_I = vueExports.unref(calculateData)) == null ? void 0 : _I.delivery_detail.pickup_location_address) && ((_J = vueExports.unref(calculateData)) == null ? void 0 : _J.delivery_detail.pickup_location_name) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                  vueExports.createTextVNode(vueExports.toDisplayString(`${(_K = vueExports.unref(calculateData)) == null ? void 0 : _K.delivery_detail.pickup_location_name}, ${(_L = vueExports.unref(calculateData)) == null ? void 0 : _L.delivery_detail.pickup_location_address}`), 1)
                                ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                  key: 1,
                                  class: "text-additional"
                                }, "не выбран"))
                              ])
                            ], 64)) : vueExports.createCommentVNode("", true),
                            vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, vueExports.toDisplayString(vueExports.unref(makeOrderForm).delivery_type === "courier" ? "Стоимость доставки:" : "Стоимость:"), 1),
                            vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                              !isOtherCity.value ? (vueExports.openBlock(), vueExports.createBlock("span", {
                                key: 0,
                                class: "inline-flex items-center gap-2"
                              }, [
                                ((_M = vueExports.unref(calculateData)) == null ? void 0 : _M.delivery_detail.delivery_zone_name) || ((_N = vueExports.unref(calculateData)) == null ? void 0 : _N.delivery_detail.address_full) || ((_O = vueExports.unref(calculateData)) == null ? void 0 : _O.delivery_detail.pickup_location_address) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                  vueExports.createTextVNode(vueExports.toDisplayString((_P = vueExports.unref(calculateData)) == null ? void 0 : _P.delivery_detail.delivery_price) + " руб. ", 1)
                                ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                  key: 1,
                                  class: "text-mob-small-medium text-additional"
                                }, "нет данных")),
                                vueExports.createVNode(vueExports.unref(_sfc_main$i), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" })
                              ])) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                key: 1,
                                class: "flex items-start gap-1"
                              }, [
                                vueExports.createVNode("span", { class: "block max-w-[120px]" }, "Рассчитывается индивидуально"),
                                vueExports.createVNode(vueExports.unref(_sfc_main$i), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" })
                              ]))
                            ])
                          ])
                        ]),
                        vueExports.createVNode(vueExports.unref(_sfc_main$j), {
                          "order-detail": ((_Q = vueExports.unref(calculateData)) == null ? void 0 : _Q.order_detail) ?? null,
                          "is-delivery-price-enabled": !!((_R = vueExports.unref(calculateData)) == null ? void 0 : _R.delivery_detail.delivery_zone_name) || !!((_S = vueExports.unref(calculateData)) == null ? void 0 : _S.delivery_detail.address_full) || !!((_T = vueExports.unref(calculateData)) == null ? void 0 : _T.delivery_detail.pickup_location_address),
                          "is-individual": isOtherCity.value
                        }, {
                          footer: vueExports.withCtx(() => {
                            var _a3, _b3, _c3;
                            return [
                              vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                                error: (_c3 = (_b3 = (_a3 = validationErrors.value) == null ? void 0 : _a3.isAgree) == null ? void 0 : _b3.error) == null ? void 0 : _c3.message
                              }, {
                                default: vueExports.withCtx(() => {
                                  var _a4, _b4, _c4;
                                  return [
                                    vueExports.createVNode("div", { class: "flex gap-3" }, [
                                      vueExports.createVNode(_sfc_main$k, {
                                        modelValue: isAgree.value,
                                        "onUpdate:modelValue": ($event) => isAgree.value = $event,
                                        binary: "",
                                        required: "",
                                        name: "agreement",
                                        invalid: !!((_c4 = (_b4 = (_a4 = validationErrors.value) == null ? void 0 : _a4.isAgree) == null ? void 0 : _b4.error) == null ? void 0 : _c4.message),
                                        "form-control": { invalid: true }
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"]),
                                      vueExports.createVNode("p", { class: "text-complimentary-reg text-additional" }, [
                                        vueExports.createTextVNode(" Нажимая на кнопку «Оформить заказ» я подтверждаю, что ознакомился с "),
                                        vueExports.createVNode("a", {
                                          href: "#",
                                          target: "_blank",
                                          class: "hover:text-text underline transition-colors"
                                        }, "политикой конфиденциальности"),
                                        vueExports.createTextVNode(" и "),
                                        vueExports.createVNode("a", {
                                          href: "#",
                                          target: "_blank",
                                          class: "hover:text-text underline transition-colors"
                                        }, "условиями покупки")
                                      ])
                                    ])
                                  ];
                                }),
                                _: 1
                              }, 8, ["error"]),
                              vueExports.createVNode(vueExports.unref(VButton), {
                                label: "Оформить заказ",
                                class: "mt-6 w-full",
                                form: "make-order"
                              })
                            ];
                          }),
                          _: 1
                        }, 8, ["order-detail", "is-delivery-price-enabled", "is-individual"]),
                        vueExports.createVNode("section", { class: "border-filling rounded-20 border border-solid p-4" }, [
                          vueExports.createVNode("h4", { class: "text-small-medium sm:text-default-medium mb-4" }, "Техническая поддержка"),
                          vueExports.createVNode("div", { class: "grid grid-cols-1 gap-2" }, [
                            vueExports.createVNode("div", { class: "flex flex-col gap-1" }, [
                              vueExports.createVNode("span", { class: "text-complimentary-reg text-additional" }, "Свяжитесь с нами, если у вас возникли вопросы или проблемы с оформлением заказа"),
                              vueExports.createVNode("a", {
                                href: "tel:88005504622",
                                class: "text-small-bold"
                              }, "8 (800) 550-46-22")
                            ]),
                            vueExports.createVNode("div", { class: "flex flex-col gap-1" }, [
                              vueExports.createVNode("span", { class: "text-complimentary-reg text-additional" }, "Или напишите нам на почту"),
                              vueExports.createVNode("a", {
                                href: "mailto:zakaz@primebeefmoscow.ru",
                                class: "text-mob-small-reg"
                              }, "zakaz@primebeefmoscow.ru")
                            ]),
                            vueExports.createVNode("div", { class: "grid grid-cols-1 gap-2" }, [
                              vueExports.createVNode("button", { class: "bg-input text-mob-small-reg inline-flex items-center gap-2 rounded-lg p-3 text-start" }, [
                                vueExports.createVNode(vueExports.unref(IconChats), { class: "shrink-0" }),
                                vueExports.createTextVNode(" Чат с технической поддержкой ")
                              ]),
                              vueExports.createVNode(vueExports.unref(link_default), {
                                href: "/page/return-exchange",
                                class: "bg-input text-mob-small-reg inline-flex items-center gap-2 rounded-lg p-3 text-start"
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(IconRepeat), { class: "shrink-0" }),
                                  vueExports.createTextVNode(" Условия возврата и обмена товаров ")
                                ]),
                                _: 1
                              }),
                              vueExports.createVNode(vueExports.unref(link_default), {
                                href: _ctx.route("faq.faq.index"),
                                class: "bg-input text-mob-small-reg inline-flex items-center gap-2 rounded-lg p-3 text-start"
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(IconQuestion), { class: "shrink-0" }),
                                  vueExports.createTextVNode(" Частые вопросы ")
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ])
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "px-6 sm:px-8" }, [
                vueExports.createVNode(_sfc_main$1, {
                  model: breadcrumbs,
                  class: "mt-4 mb-6 sm:mt-0"
                }, {
                  item: vueExports.withCtx(({ item }) => [
                    vueExports.createVNode(vueExports.unref(link_default), {
                      class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                      href: item.route
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ]),
                  _: 1
                }),
                vueExports.createVNode(vueExports.unref(_sfc_main$2), { class: "p-0!" }, {
                  header: vueExports.withCtx(() => [
                    vueExports.createVNode("header", { class: "mb-6 grid w-full gap-4 sm:gap-6" }, [
                      vueExports.createVNode("div", { class: "flex max-w-full items-center justify-between gap-4 sm:gap-6" }, [
                        vueExports.createVNode("h2", { class: "text-default-bold sm:text-heavy-bold mb-1" }, "Оформление заказа"),
                        vueExports.createVNode(vueExports.unref(link_default), {
                          href: _ctx.route("cart.index"),
                          class: "bg-filling text-subsidiary-reg text-text hover:bg-default rounded-20 flex items-center gap-2 px-3 py-2 transition-colors hover:text-white"
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode(vueExports.unref(IconCaretLeft), { class: "h-5 w-5" }),
                            vueExports.createTextVNode(" " + vueExports.toDisplayString(vueExports.unref(isMobile) ? "В корзину" : "Вернуться в корзину"), 1)
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ])
                  ]),
                  default: vueExports.withCtx(() => {
                    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2, _s2, _t2, _u2, _v, _w;
                    return [
                      ((_a2 = _ctx.banners) == null ? void 0 : _a2.length) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        class: "my-6 w-full"
                      }, [
                        vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                          "slider-options": {
                            spaceBetween: 20,
                            breakpoints: {
                              0: {
                                slidesPerView: 1
                              }
                            }
                          },
                          slides: _ctx.banners,
                          class: "max-w-full"
                        }, {
                          slide: vueExports.withCtx(({ slide }) => [
                            vueExports.createVNode("div", {
                              style: { backgroundImage: `url(${slide.image.path}), linear-gradient(to bottom, rgba(2, 40, 63, 0), rgba(2, 40, 63, 1))` },
                              class: "rounded-20 flex min-h-[238px] w-full items-end bg-cover bg-center bg-no-repeat p-4 text-white bg-blend-color md:min-h-[193px] md:items-center md:p-6"
                            }, [
                              vueExports.createVNode("div", { class: "grid gap-2" }, [
                                slide.promotion_days_left ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "bg-delete text-subsidiary-medium w-fit rounded-[100px] px-2 py-1 text-white"
                                }, " Еще " + vueExports.toDisplayString(slide.promotion_days_left) + " дней ", 1)) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode("h2", { class: "text-vast-mob-title-bold md:text-vast-title-bold uppercase" }, vueExports.toDisplayString(slide.title), 1),
                                vueExports.createVNode("p", { class: "text-mob-small-bold md:text-default-bold" }, vueExports.toDisplayString(slide.description), 1),
                                vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(slide.addition_description), 1)
                              ])
                            ], 4)
                          ]),
                          _: 1
                        }, 8, ["slides"])
                      ])) : vueExports.createCommentVNode("", true),
                      vueExports.createVNode("div", { class: "bg-light-gray grid w-[calc(100dvw_-_24px)] grid-cols-[repeat(4,minmax(182px,1fr))] gap-1 overflow-x-scroll rounded-2xl p-3 sm:w-full sm:overflow-x-auto" }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(steps.value, (step) => {
                          return vueExports.openBlock(), vueExports.createBlock("div", {
                            key: step.id,
                            class: "flex flex-1 flex-col gap-1"
                          }, [
                            vueExports.createVNode(_sfc_main$4, {
                              value: step.progress,
                              "show-value": false
                            }, null, 8, ["value"]),
                            vueExports.createVNode("p", { class: "text-mob-small-medium" }, vueExports.toDisplayString(step.stepName), 1),
                            vueExports.createVNode("p", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString(step.stepDescription), 1)
                          ]);
                        }), 128))
                      ]),
                      vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-8 xl:flex-row" }, [
                        vueExports.createVNode("div", { class: "grow basis-3/4" }, [
                          vueExports.createVNode(vueExports.unref(Form), {
                            id: "make-order",
                            onSubmit: createFormSubmit
                          }, {
                            default: vueExports.withCtx(() => {
                              var _a3, _b3, _c3, _d3, _e3, _f3, _g3, _h3, _i3, _j3, _k3, _l3, _m3, _n3, _o3, _p3, _q3, _r3, _s3, _t3, _u3;
                              return [
                                vueExports.createVNode("div", { class: "border-filling border-b border-solid pb-6" }, [
                                  vueExports.createVNode("div", {
                                    class: ["flex flex-col gap-4", { "bg-light-gray rounded-20 p-4": _ctx.auth.user }]
                                  }, [
                                    vueExports.createVNode("p", { class: "text-small-bold sm:text-default-bold" }, "Получатель"),
                                    vueExports.createVNode("fieldset", null, [
                                      vueExports.createVNode("legend", { class: "text-mob-small-medium sm:text-small-medium mb-4" }, "Данные получателя"),
                                      vueExports.createVNode("div", { class: "grid gap-2 sm:grid-cols-3" }, [
                                        vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                          modelValue: vueExports.unref(makeOrderForm).last_name,
                                          "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).last_name = $event,
                                          label: "Ваша фамилия",
                                          name: "last_name",
                                          error: (_c3 = (_b3 = (_a3 = validationErrors.value) == null ? void 0 : _a3.last_name) == null ? void 0 : _b3.error) == null ? void 0 : _c3.message,
                                          required: "",
                                          clearable: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                        vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                          modelValue: vueExports.unref(makeOrderForm).name,
                                          "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).name = $event,
                                          name: "name",
                                          label: "Ваше имя",
                                          error: (_f3 = (_e3 = (_d3 = validationErrors.value) == null ? void 0 : _d3.name) == null ? void 0 : _e3.error) == null ? void 0 : _f3.message,
                                          clearable: "",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                        vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                          modelValue: vueExports.unref(makeOrderForm).second_name,
                                          "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).second_name = $event,
                                          name: "second_name",
                                          label: "Ваше отчество",
                                          clearable: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ])
                                    ]),
                                    vueExports.createVNode("fieldset", null, [
                                      vueExports.createVNode("legend", { class: "text-mob-small-medium sm:text-small-medium mb-4" }, "Контактные данные"),
                                      vueExports.createVNode("div", { class: "grid gap-2 sm:grid-cols-3" }, [
                                        vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                                          modelValue: vueExports.unref(makeOrderForm).email,
                                          "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).email = $event,
                                          error: (_i3 = (_h3 = (_g3 = validationErrors.value) == null ? void 0 : _g3.email) == null ? void 0 : _h3.error) == null ? void 0 : _i3.message,
                                          name: "email",
                                          type: "email",
                                          label: "Ваш e-mail",
                                          clearable: "",
                                          required: "",
                                          onBlur: checkGift
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                                        vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                                          error: (_l3 = (_k3 = (_j3 = validationErrors.value) == null ? void 0 : _j3.phone) == null ? void 0 : _k3.error) == null ? void 0 : _l3.message
                                        }, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode(vueExports.unref(VFloatLabel), {
                                              label: vueExports.unref(t)("checkout.phone"),
                                              required: ""
                                            }, {
                                              default: vueExports.withCtx(({ labelId }) => [
                                                vueExports.createVNode(_sfc_main$7, {
                                                  id: labelId,
                                                  modelValue: vueExports.unref(makeOrderForm).phone,
                                                  "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).phone = $event,
                                                  unmask: "",
                                                  mask: "+7 (999) 999-99-99",
                                                  name: "phone",
                                                  type: "phone",
                                                  fluid: "",
                                                  required: "",
                                                  onBlur: checkGift
                                                }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            }, 8, ["label"])
                                          ]),
                                          _: 1
                                        }, 8, ["error"]),
                                        vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                          modelValue: vueExports.unref(makeOrderForm).contact_methods,
                                          "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).contact_methods = $event,
                                          options: _ctx.allContactMethods
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                      ])
                                    ])
                                  ], 2)
                                ]),
                                vueExports.createVNode("div", { class: "border-filling mt-6 flex flex-col gap-4 border-b border-solid pb-6" }, [
                                  vueExports.createVNode("p", { class: "text-small-bold sm:text-default-bold" }, "Доставка"),
                                  vueExports.createVNode("div", { class: "flex flex-col gap-4 md:flex-row lg:gap-8" }, [
                                    vueExports.createVNode("div", {
                                      class: ["flex flex-col gap-6", [vueExports.unref(makeOrderForm).delivery_type === "pickup" ? "basis-1/2" : "w-full"]]
                                    }, [
                                      vueExports.createVNode("fieldset", null, [
                                        vueExports.createVNode("legend", { class: "text-mob-small-medium sm:text-small-medium mb-4 flex items-center gap-2" }, [
                                          vueExports.createVNode("span", null, "Способ доставки"),
                                          pickupBonusPoints.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                            key: 0,
                                            class: "bg-push-green text-subsidiary-reg inline-flex items-center gap-2 rounded-full p-2"
                                          }, [
                                            vueExports.createVNode(vueExports.unref(IconPickupBonus)),
                                            vueExports.createVNode("span", null, [
                                              vueExports.createVNode("span", { class: "text-subsidiary-medium" }, "+" + vueExports.toDisplayString(pickupBonusPoints.value), 1),
                                              vueExports.createTextVNode(" баллов за самовывоз ")
                                            ])
                                          ])) : vueExports.createCommentVNode("", true)
                                        ]),
                                        vueExports.createVNode("div", { class: "flex gap-6" }, [
                                          vueExports.createVNode("label", { class: "flex items-center gap-3 p-2" }, [
                                            vueExports.createVNode(_sfc_main$9, {
                                              modelValue: vueExports.unref(makeOrderForm).delivery_type,
                                              "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).delivery_type = $event,
                                              value: "courier",
                                              name: "deliveryMethod",
                                              disabled: isAddressApplied.value
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                            vueExports.createVNode("span", { class: "text-mob-small-reg" }, "Курьер")
                                          ]),
                                          vueExports.createVNode("label", { class: "flex items-center gap-3 p-2" }, [
                                            vueExports.createVNode(_sfc_main$9, {
                                              modelValue: vueExports.unref(makeOrderForm).delivery_type,
                                              "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).delivery_type = $event,
                                              value: "pickup",
                                              name: "deliveryMethod",
                                              disabled: isAddressApplied.value
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"]),
                                            vueExports.createVNode("span", { class: "text-mob-small-reg" }, "Самовывоз")
                                          ])
                                        ])
                                      ]),
                                      vueExports.unref(makeOrderForm).delivery_type === "courier" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$6), {
                                        key: 0,
                                        error: (_o3 = (_n3 = (_m3 = validationErrors.value) == null ? void 0 : _m3.address_id) == null ? void 0 : _n3.error) == null ? void 0 : _o3.message
                                      }, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode(_sfc_main$a, {
                                            "address-id": vueExports.unref(makeOrderForm).address_id,
                                            "onUpdate:addressId": ($event) => vueExports.unref(makeOrderForm).address_id = $event,
                                            "delivery-date": vueExports.unref(makeOrderForm).delivery_date,
                                            "onUpdate:deliveryDate": ($event) => vueExports.unref(makeOrderForm).delivery_date = $event,
                                            "city-id": selectedCourierCityId.value,
                                            "onUpdate:cityId": ($event) => selectedCourierCityId.value = $event,
                                            "onUpdate:timeInterval": onUpdateTimeInterval,
                                            onAddressApplied,
                                            onResetAddress,
                                            onDeblockAddress
                                          }, null, 8, ["address-id", "onUpdate:addressId", "delivery-date", "onUpdate:deliveryDate", "city-id", "onUpdate:cityId"])
                                        ]),
                                        _: 1
                                      }, 8, ["error"])) : vueExports.createCommentVNode("", true),
                                      vueExports.unref(makeOrderForm).delivery_type === "pickup" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$6), {
                                        key: 1,
                                        error: (_r3 = (_q3 = (_p3 = validationErrors.value) == null ? void 0 : _p3.pickup_location_id) == null ? void 0 : _q3.error) == null ? void 0 : _r3.message
                                      }, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode(_sfc_main$b, {
                                            onApplyChose: onChosePickupLocation,
                                            onReset: onResetAddress
                                          })
                                        ]),
                                        _: 1
                                      }, 8, ["error"])) : vueExports.createCommentVNode("", true)
                                    ], 2),
                                    vueExports.unref(makeOrderForm).delivery_type === "pickup" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 0,
                                      class: "rounded-20 basis-1/2 overflow-hidden"
                                    }, [
                                      vueExports.createVNode(vueExports.unref(_sfc_main$c), {
                                        zoom: vueExports.unref(pickupLocationStore).selectedLocation ? 19 : 11,
                                        center: vueExports.unref(pickupLocationStore).locationCoordinates,
                                        height: vueExports.unref(isMobile) ? "420px" : "100%"
                                      }, {
                                        marker: vueExports.withCtx(() => [
                                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(pickupLocationStore).locationsList, (location) => {
                                            return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(YandexMapDefaultMarker), {
                                              key: location.id,
                                              settings: {
                                                coordinates: [Number(location.longitude), Number(location.latitude)]
                                              }
                                            }, null, 8, ["settings"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["zoom", "center", "height"])
                                    ])) : vueExports.createCommentVNode("", true)
                                  ])
                                ]),
                                vueExports.createVNode("div", { class: "border-filling mt-6 flex flex-col gap-4 border-b border-solid pb-6" }, [
                                  vueExports.createVNode("p", { class: "text-small-bold sm:text-default-bold" }, "Комментарий к заказу"),
                                  vueExports.createVNode(_sfc_main$d, {
                                    modelValue: vueExports.unref(makeOrderForm).comment,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).comment = $event,
                                    class: "resize-none",
                                    placeholder: "Комментарий"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                vueExports.createVNode("div", { class: "border-filling mt-6 flex flex-col gap-4 border-b border-solid pb-6" }, [
                                  vueExports.createVNode("p", { class: "text-small-bold sm:text-default-bold" }, "Способ оплаты"),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                                    error: (_u3 = (_t3 = (_s3 = validationErrors.value) == null ? void 0 : _s3.transaction_method_id) == null ? void 0 : _t3.error) == null ? void 0 : _u3.message
                                  }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode("div", { class: "grid auto-cols-fr gap-2 sm:grid-flow-col" }, [
                                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.transactionMethods, (transactionMethod) => {
                                          var _a4, _b4, _c4;
                                          return vueExports.openBlock(), vueExports.createBlock("label", {
                                            key: transactionMethod.id,
                                            class: "bg-light-gray grid grid-cols-[auto_1fr_auto] gap-2 rounded-2xl p-3"
                                          }, [
                                            vueExports.createVNode("span", null, [
                                              transactionMethod.icon ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$e), {
                                                key: 0,
                                                src: transactionMethod.icon.path,
                                                alt: "Иконка"
                                              }, null, 8, ["src"])) : vueExports.createCommentVNode("", true)
                                            ]),
                                            vueExports.createVNode("span", { class: "inline-flex flex-col gap-1" }, [
                                              vueExports.createVNode("span", { class: "text-mob-small-medium" }, vueExports.toDisplayString(transactionMethod.name), 1),
                                              vueExports.createVNode("span", { class: "text-subsidiary-reg text-additional" }, vueExports.toDisplayString(transactionMethod.description), 1)
                                            ]),
                                            vueExports.createVNode(_sfc_main$9, {
                                              modelValue: vueExports.unref(makeOrderForm).transaction_method_id,
                                              "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).transaction_method_id = $event,
                                              value: transactionMethod.id,
                                              invalid: !!((_c4 = (_b4 = (_a4 = validationErrors.value) == null ? void 0 : _a4.transaction_method_id) == null ? void 0 : _b4.error) == null ? void 0 : _c4.message),
                                              name: "transaction_method_id"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "value", "invalid"])
                                          ]);
                                        }), 128))
                                      ])
                                    ]),
                                    _: 1
                                  }, 8, ["error"])
                                ])
                              ];
                            }),
                            _: 1
                          }),
                          vueExports.createVNode("div", { class: "mt-6" }, [
                            vueExports.createVNode("p", { class: "text-small-bold sm:text-default-bold mb-4" }, "Содержание заказа"),
                            vueExports.createVNode("div", { class: "grid" }, [
                              ((_b2 = _ctx.cart.formatedItems) == null ? void 0 : _b2.length) ? (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, { key: 0 }, vueExports.renderList(_ctx.cart.formatedItems, (item) => {
                                return vueExports.openBlock(), vueExports.createBlock(_sfc_main$f, {
                                  key: item.id,
                                  item
                                }, {
                                  addToCart: vueExports.withCtx(() => [
                                    !item.is_combo && !item.is_gift ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 0,
                                      class: "text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"
                                    }, vueExports.toDisplayString(`${smartFormat(item.quantity * Number(item.item.weight))} ${item.item.weight_type}`), 1)) : vueExports.createCommentVNode("", true),
                                    item.is_gift ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 1,
                                      class: "text-subsidiary-medium bg-filling flex h-full items-center justify-center rounded-xl p-2"
                                    }, " 1 шт ")) : vueExports.createCommentVNode("", true)
                                  ]),
                                  _: 2
                                }, 1032, ["item"]);
                              }), 128)) : vueExports.createCommentVNode("", true)
                            ])
                          ])
                        ]),
                        vueExports.createVNode("div", { class: "rounded-20 flex w-full shrink-0 flex-col gap-2 xl:max-w-88" }, [
                          vueExports.createVNode(vueExports.unref(_sfc_main$g), { onPromocodeApplied }, {
                            usePointsExpire: vueExports.withCtx(() => {
                              var _a3, _b3, _c3, _d3;
                              return [
                                _ctx.auth.user && ((_b3 = (_a3 = vueExports.unref(calculateData)) == null ? void 0 : _a3.order_detail) == null ? void 0 : _b3.bonus_spent_limit) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "mt-6 flex items-center gap-2"
                                }, [
                                  vueExports.createVNode(vueExports.unref(IconFire), { class: "text-delete h-6 w-6" }),
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode("p", { class: "text-mob-small-medium" }, [
                                      vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("checkout.takePoints")) + " ", 1),
                                      vueExports.createVNode("span", { class: "text-delete" }, vueExports.toDisplayString(vueExports.unref(t)("checkout.takePointsValue", (_d3 = (_c3 = vueExports.unref(calculateData)) == null ? void 0 : _c3.order_detail) == null ? void 0 : _d3.bonus_spent_limit)), 1)
                                    ]),
                                    vueExports.createVNode("p", { class: "text-subsidiary-reg text-additional" }, "Баллы действуют до " + vueExports.toDisplayString(_ctx.$page.props.expireDate), 1)
                                  ]),
                                  vueExports.createVNode(_sfc_main$h, {
                                    modelValue: vueExports.unref(makeOrderForm).use_expiring_bonuses,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(makeOrderForm).use_expiring_bonuses = $event,
                                    name: "use_expiring_bonuses",
                                    class: "shrink-0"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ])) : vueExports.createCommentVNode("", true)
                              ];
                            }),
                            _: 1
                          }),
                          vueExports.createVNode("section", { class: "rounded-20 bg-light-gray p-4" }, [
                            vueExports.createVNode("header", { class: "mb-4 sm:mb-6" }, [
                              vueExports.createVNode("h4", { class: "text-small-medium sm:text-default-medium mb-2" }, "Детали доставки"),
                              vueExports.createVNode("p", { class: "text-subsidiary-reg text-additional" }, "В зависимости от выбранного способа доставки и адреса данные могут измениться")
                            ]),
                            vueExports.createVNode("dl", { class: "grid grid-cols-[minmax(0,140px)_1fr] items-start gap-2" }, [
                              vueExports.unref(makeOrderForm).delivery_type === "courier" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Срок доставки:"),
                                vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                  !isOtherCity.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                    ((_c2 = vueExports.unref(calculateData)) == null ? void 0 : _c2.delivery_detail.delivery_date) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                      vueExports.createTextVNode(vueExports.toDisplayString(formattingDeliveryDate.value), 1)
                                    ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                      key: 1,
                                      class: "text-additional"
                                    }, "не выбрано"))
                                  ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                    key: 1,
                                    class: "inline-flex items-start gap-1"
                                  }, [
                                    vueExports.createVNode("span", { class: "block max-w-[120px]" }, "Рассчитывается индивидуально"),
                                    vueExports.createVNode(vueExports.unref(_sfc_main$i), { value: "Срок доставки зависит от адреса, веса и стоимости заказа" })
                                  ]))
                                ]),
                                !isOtherCity.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                  vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Время доставки:"),
                                  vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                    ((_d2 = vueExports.unref(calculateData)) == null ? void 0 : _d2.delivery_detail.delivery_time_from) && ((_e2 = vueExports.unref(calculateData)) == null ? void 0 : _e2.delivery_detail.delivery_time_to) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                      vueExports.createTextVNode(vueExports.toDisplayString(`с ${vueExports.unref(calculateData).delivery_detail.delivery_time_from} до ${(_f2 = vueExports.unref(calculateData)) == null ? void 0 : _f2.delivery_detail.delivery_time_to}`), 1)
                                    ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                      key: 1,
                                      class: "text-additional"
                                    }, "не выбрано"))
                                  ])
                                ], 64)) : vueExports.createCommentVNode("", true),
                                vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Город:"),
                                vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                  ((_g2 = vueExports.unref(calculateData)) == null ? void 0 : _g2.delivery_detail.city) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                    vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.city), 1)
                                  ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                    key: 1,
                                    class: "text-additional"
                                  }, "не выбрано"))
                                ]),
                                vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Адрес:"),
                                vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                  ((_h2 = vueExports.unref(calculateData)) == null ? void 0 : _h2.delivery_detail.address_full) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                    vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.address_full), 1)
                                  ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                    key: 1,
                                    class: "text-additional"
                                  }, "не выбрано"))
                                ]),
                                !isOtherCity.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                                  vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Зона доставки:"),
                                  vueExports.createVNode("dd", null, [
                                    ((_i2 = vueExports.unref(calculateData)) == null ? void 0 : _i2.delivery_detail.delivery_zone_name) ? (vueExports.openBlock(), vueExports.createBlock("span", {
                                      key: 0,
                                      class: "inline-flex items-center gap-1"
                                    }, [
                                      vueExports.createVNode("span", { class: "text-mob-small-medium" }, vueExports.toDisplayString(vueExports.unref(calculateData).delivery_detail.delivery_zone_name), 1),
                                      vueExports.createVNode("span", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString((_j2 = vueExports.unref(calculateData)) == null ? void 0 : _j2.delivery_detail.delivery_zone_description), 1)
                                    ])) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                      key: 1,
                                      class: "text-additional text-mob-small-medium block"
                                    }, "не выбрано"))
                                  ])
                                ], 64)) : vueExports.createCommentVNode("", true)
                              ], 64)) : vueExports.createCommentVNode("", true),
                              vueExports.unref(makeOrderForm).delivery_type === "pickup" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                                vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, "Срок доставки:"),
                                vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                  !isOtherCity.value ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                    ((_k2 = vueExports.unref(calculateData)) == null ? void 0 : _k2.delivery_detail.pickup_location_time_min) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                      vueExports.createTextVNode(vueExports.toDisplayString(formattingDeliveryDate.value), 1)
                                    ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                      key: 1,
                                      class: "text-additional"
                                    }, "не выбрано"))
                                  ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                    key: 1,
                                    class: "inline-flex items-start gap-1"
                                  }, [
                                    vueExports.createVNode("span", { class: "block max-w-[120px]" }, "Рассчитывается индивидуально"),
                                    vueExports.createVNode(vueExports.unref(_sfc_main$i), { value: "Срок доставки зависит от адреса, веса и стоимости заказа" })
                                  ]))
                                ]),
                                vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary self-start py-0.5" }, "Пункт выдачи:"),
                                vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                  ((_l2 = vueExports.unref(calculateData)) == null ? void 0 : _l2.delivery_detail.pickup_location_address) && ((_m2 = vueExports.unref(calculateData)) == null ? void 0 : _m2.delivery_detail.pickup_location_name) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                    vueExports.createTextVNode(vueExports.toDisplayString(`${(_n2 = vueExports.unref(calculateData)) == null ? void 0 : _n2.delivery_detail.pickup_location_name}, ${(_o2 = vueExports.unref(calculateData)) == null ? void 0 : _o2.delivery_detail.pickup_location_address}`), 1)
                                  ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                    key: 1,
                                    class: "text-additional"
                                  }, "не выбран"))
                                ])
                              ], 64)) : vueExports.createCommentVNode("", true),
                              vueExports.createVNode("dt", { class: "text-subsidiary-medium text-subsidiary py-0.5" }, vueExports.toDisplayString(vueExports.unref(makeOrderForm).delivery_type === "courier" ? "Стоимость доставки:" : "Стоимость:"), 1),
                              vueExports.createVNode("dd", { class: "text-mob-small-medium" }, [
                                !isOtherCity.value ? (vueExports.openBlock(), vueExports.createBlock("span", {
                                  key: 0,
                                  class: "inline-flex items-center gap-2"
                                }, [
                                  ((_p2 = vueExports.unref(calculateData)) == null ? void 0 : _p2.delivery_detail.delivery_zone_name) || ((_q2 = vueExports.unref(calculateData)) == null ? void 0 : _q2.delivery_detail.address_full) || ((_r2 = vueExports.unref(calculateData)) == null ? void 0 : _r2.delivery_detail.pickup_location_address) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                                    vueExports.createTextVNode(vueExports.toDisplayString((_s2 = vueExports.unref(calculateData)) == null ? void 0 : _s2.delivery_detail.delivery_price) + " руб. ", 1)
                                  ], 64)) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                    key: 1,
                                    class: "text-mob-small-medium text-additional"
                                  }, "нет данных")),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$i), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" })
                                ])) : (vueExports.openBlock(), vueExports.createBlock("span", {
                                  key: 1,
                                  class: "flex items-start gap-1"
                                }, [
                                  vueExports.createVNode("span", { class: "block max-w-[120px]" }, "Рассчитывается индивидуально"),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$i), { value: "Стоимость доставки зависит от адреса, веса и стоимости заказа" })
                                ]))
                              ])
                            ])
                          ]),
                          vueExports.createVNode(vueExports.unref(_sfc_main$j), {
                            "order-detail": ((_t2 = vueExports.unref(calculateData)) == null ? void 0 : _t2.order_detail) ?? null,
                            "is-delivery-price-enabled": !!((_u2 = vueExports.unref(calculateData)) == null ? void 0 : _u2.delivery_detail.delivery_zone_name) || !!((_v = vueExports.unref(calculateData)) == null ? void 0 : _v.delivery_detail.address_full) || !!((_w = vueExports.unref(calculateData)) == null ? void 0 : _w.delivery_detail.pickup_location_address),
                            "is-individual": isOtherCity.value
                          }, {
                            footer: vueExports.withCtx(() => {
                              var _a3, _b3, _c3;
                              return [
                                vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                                  error: (_c3 = (_b3 = (_a3 = validationErrors.value) == null ? void 0 : _a3.isAgree) == null ? void 0 : _b3.error) == null ? void 0 : _c3.message
                                }, {
                                  default: vueExports.withCtx(() => {
                                    var _a4, _b4, _c4;
                                    return [
                                      vueExports.createVNode("div", { class: "flex gap-3" }, [
                                        vueExports.createVNode(_sfc_main$k, {
                                          modelValue: isAgree.value,
                                          "onUpdate:modelValue": ($event) => isAgree.value = $event,
                                          binary: "",
                                          required: "",
                                          name: "agreement",
                                          invalid: !!((_c4 = (_b4 = (_a4 = validationErrors.value) == null ? void 0 : _a4.isAgree) == null ? void 0 : _b4.error) == null ? void 0 : _c4.message),
                                          "form-control": { invalid: true }
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"]),
                                        vueExports.createVNode("p", { class: "text-complimentary-reg text-additional" }, [
                                          vueExports.createTextVNode(" Нажимая на кнопку «Оформить заказ» я подтверждаю, что ознакомился с "),
                                          vueExports.createVNode("a", {
                                            href: "#",
                                            target: "_blank",
                                            class: "hover:text-text underline transition-colors"
                                          }, "политикой конфиденциальности"),
                                          vueExports.createTextVNode(" и "),
                                          vueExports.createVNode("a", {
                                            href: "#",
                                            target: "_blank",
                                            class: "hover:text-text underline transition-colors"
                                          }, "условиями покупки")
                                        ])
                                      ])
                                    ];
                                  }),
                                  _: 1
                                }, 8, ["error"]),
                                vueExports.createVNode(vueExports.unref(VButton), {
                                  label: "Оформить заказ",
                                  class: "mt-6 w-full",
                                  form: "make-order"
                                })
                              ];
                            }),
                            _: 1
                          }, 8, ["order-detail", "is-delivery-price-enabled", "is-individual"]),
                          vueExports.createVNode("section", { class: "border-filling rounded-20 border border-solid p-4" }, [
                            vueExports.createVNode("h4", { class: "text-small-medium sm:text-default-medium mb-4" }, "Техническая поддержка"),
                            vueExports.createVNode("div", { class: "grid grid-cols-1 gap-2" }, [
                              vueExports.createVNode("div", { class: "flex flex-col gap-1" }, [
                                vueExports.createVNode("span", { class: "text-complimentary-reg text-additional" }, "Свяжитесь с нами, если у вас возникли вопросы или проблемы с оформлением заказа"),
                                vueExports.createVNode("a", {
                                  href: "tel:88005504622",
                                  class: "text-small-bold"
                                }, "8 (800) 550-46-22")
                              ]),
                              vueExports.createVNode("div", { class: "flex flex-col gap-1" }, [
                                vueExports.createVNode("span", { class: "text-complimentary-reg text-additional" }, "Или напишите нам на почту"),
                                vueExports.createVNode("a", {
                                  href: "mailto:zakaz@primebeefmoscow.ru",
                                  class: "text-mob-small-reg"
                                }, "zakaz@primebeefmoscow.ru")
                              ]),
                              vueExports.createVNode("div", { class: "grid grid-cols-1 gap-2" }, [
                                vueExports.createVNode("button", { class: "bg-input text-mob-small-reg inline-flex items-center gap-2 rounded-lg p-3 text-start" }, [
                                  vueExports.createVNode(vueExports.unref(IconChats), { class: "shrink-0" }),
                                  vueExports.createTextVNode(" Чат с технической поддержкой ")
                                ]),
                                vueExports.createVNode(vueExports.unref(link_default), {
                                  href: "/page/return-exchange",
                                  class: "bg-input text-mob-small-reg inline-flex items-center gap-2 rounded-lg p-3 text-start"
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(IconRepeat), { class: "shrink-0" }),
                                    vueExports.createTextVNode(" Условия возврата и обмена товаров ")
                                  ]),
                                  _: 1
                                }),
                                vueExports.createVNode(vueExports.unref(link_default), {
                                  href: _ctx.route("faq.faq.index"),
                                  class: "bg-input text-mob-small-reg inline-flex items-center gap-2 rounded-lg p-3 text-start"
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(IconQuestion), { class: "shrink-0" }),
                                    vueExports.createTextVNode(" Частые вопросы ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ])
                            ])
                          ])
                        ])
                      ])
                    ];
                  }),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/making-order/ui/MakingOrder.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
