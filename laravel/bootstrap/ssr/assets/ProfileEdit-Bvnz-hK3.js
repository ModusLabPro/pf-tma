import { v as vueExports, s as serverRenderer_cjs_prodExports, al as _sfc_main$2, c as useForm, e as _sfc_main$4, aj as _sfc_main$5, D as _sfc_main$7, L as _sfc_main$8, f as _sfc_main$9, l as link_default, S as _sfc_main$a, g as _sfc_main$b, j as _sfc_main$e, a as VButton, am as _sfc_main$f } from "../ssr.js";
import { format } from "date-fns";
import { a as _sfc_main$6, _ as _sfc_main$d } from "./DatePicker-CNY4OO13.js";
import { _ as _sfc_main$c } from "./ContactMethodsSelect-CKzNy_d1.js";
import { useConfirm } from "primevue/useconfirm";
import { I as IconCheckCircleGreen } from "./IconCheckCircleGreen-DQz2sOR5.js";
import { _ as _sfc_main$3 } from "./VFloatingInput-D87z21zB.js";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";
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
import "@primevue/icons/angledown";
import "@primevue/icons/angleup";
import "primevue/inputnumber";
import "@primevue/icons/chevrondown";
import "@primevue/icons/search";
import "@primevue/icons/spinner";
import "primevue/select";
import "primevue/selectbutton";
import "./VFloatLabel-BX805IBj.js";
import "primevue/floatlabel";
import "primevue/autocomplete";
import "@primevue/icons/calendar";
import "@primevue/icons/chevronup";
import "primevue/datepicker";
import "primevue/multiselect";
const _hoisted_1$2 = {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render$2(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    vueExports.createStaticVNode('<g clip-path="url(#clip0_7406_252380)"><path d="M7.5 16.8751H3.75C3.58424 16.8751 3.42527 16.8093 3.30806 16.692C3.19085 16.5748 3.125 16.4159 3.125 16.2501V12.7587C3.12508 12.5932 3.19082 12.4344 3.30781 12.3173L12.9422 2.68291C13.0594 2.56579 13.2183 2.5 13.384 2.5C13.5497 2.5 13.7086 2.56579 13.8258 2.68291L17.3172 6.17198C17.4343 6.28917 17.5001 6.44808 17.5001 6.61377C17.5001 6.77946 17.4343 6.93837 17.3172 7.05557L7.5 16.8751Z" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.875 16.875H7.5" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.625 5L15 9.375" stroke="#A39874" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_7406_252380"><rect width="20" height="20" fill="white"></rect></clipPath></defs>', 2)
  ]));
}
const IconPencil = { render: render$2 };
const _hoisted_1$1 = {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render$1(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    vueExports.createElementVNode("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M9.78543 15.7857H10.9808C10.9808 15.7857 11.3419 15.745 11.5264 15.542C11.6961 15.3553 11.6907 15.005 11.6907 15.005C11.6907 15.005 11.6673 13.3649 12.4116 13.1234C13.1457 12.8853 14.0881 14.7085 15.0869 15.4096C15.8422 15.94 16.4162 15.8239 16.4162 15.8239L19.0871 15.7857C19.0871 15.7857 20.4842 15.6976 19.8217 14.5743C19.7675 14.4826 19.4358 13.7435 17.8358 12.2249C16.1609 10.6354 16.3854 10.8926 18.4028 8.14328C19.6313 6.46894 20.1224 5.44681 19.969 5.00905C19.8228 4.59196 18.9191 4.70214 18.9191 4.70214L15.9118 4.72115C15.9118 4.72115 15.6887 4.69011 15.5235 4.79122C15.3619 4.89009 15.2581 5.1211 15.2581 5.1211C15.2581 5.1211 14.782 6.41666 14.1474 7.51865C12.8083 9.84361 12.2728 9.96668 12.0539 9.82208C11.5447 9.48557 11.6719 8.4705 11.6719 7.74916C11.6719 5.49592 12.0062 4.55646 11.0211 4.31328C10.6942 4.23262 10.4534 4.17926 9.61739 4.17055C8.5443 4.15939 7.63629 4.17393 7.12203 4.43152C6.7799 4.60284 6.51594 4.9845 6.6768 5.00646C6.87561 5.03353 7.32564 5.13068 7.56424 5.46265C7.8725 5.89148 7.86173 6.85413 7.86173 6.85413C7.86173 6.85413 8.03885 9.50653 7.44818 9.83591C7.04287 10.0619 6.48679 9.60057 5.29292 7.49121C4.68133 6.41075 4.2194 5.2163 4.2194 5.2163C4.2194 5.2163 4.13045 4.99314 3.97157 4.87367C3.77888 4.72893 3.50964 4.68306 3.50964 4.68306L0.651875 4.70214C0.651875 4.70214 0.222976 4.71438 0.0653612 4.90514C-0.0748581 5.07494 0.0541643 5.42571 0.0541643 5.42571C0.0541643 5.42571 2.29133 10.7777 4.82472 13.4749C7.14788 15.948 9.78543 15.7857 9.78543 15.7857Z",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const IconVkQuick = { render: render$1 };
const _hoisted_1 = {
  width: "33",
  height: "32",
  viewBox: "0 0 33 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    vueExports.createElementVNode("path", {
      d: "M3.46997 16.0003C3.46997 8.63633 9.43797 2.66699 16.8033 2.66699C24.166 2.66699 30.1366 8.63633 30.1366 16.0003C30.1366 23.3643 24.166 29.3337 16.8033 29.3337C9.43797 29.3337 3.46997 23.3643 3.46997 16.0003Z",
      fill: "currentColor"
    }, null, -1),
    vueExports.createElementVNode("path", {
      d: "M18.51 10.2214H17.278C15.0194 10.2214 13.8314 11.3654 13.8314 13.0521C13.8314 14.9587 14.6527 15.8521 16.3394 16.9974L17.7327 17.9361L13.7287 23.9187H10.7367L14.33 18.5667C12.2634 17.0854 11.1034 15.6467 11.1034 13.2134C11.1034 10.1627 13.23 8.08008 17.2634 8.08008H21.2674V23.9041H18.51V10.2214Z",
      fill: "white"
    }, null, -1)
  ]));
}
const IconYandexQuick = { render };
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DetachService",
  __ssrInlineRender: true,
  props: {
    service: {}
  },
  setup(__props) {
    const isHovered = vueExports.shallowRef(false);
    useConfirm();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "text-mob-small-reg relative flex items-center justify-end gap-2 overflow-hidden" }, _attrs))}>`);
      if (isHovered.value) {
        _push(`<span>Отключить</span>`);
      } else {
        _push(`<span class="text-ready-green">Подключено</span>`);
      }
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCheckCircleGreen), { class: "h-5 w-5" }, null, _parent));
      _push(`</button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/o-auth/detach-service/ui/DetachService.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const addressSchema = z.object({
  city_id: z.number({ required_error: "Обязательное поле" }).min(1, "Обязательное поле"),
  postal_code: z.string().optional().nullable(),
  city: z.string().optional(),
  street: z.string().optional(),
  house: z.string().optional().nullable(),
  apartment: z.string().optional().nullable(),
  is_primary: z.boolean(),
  value_dadata: z.string({ required_error: "Обязательное поле" }).min(1, "Обязательное поле"),
  delivery_zone_id: z.number().nullable().optional(),
  car_pass: z.boolean().optional(),
  entrance: z.string().optional().nullable(),
  floor: z.string().optional().nullable()
});
const editUserProfileSchema = z.object({
  name: z.string().min(1, "Обязательное поле"),
  second_name: z.string().optional(),
  last_name: z.string().min(1, "Обязательное поле"),
  email: z.string().optional().nullable(),
  contact_methods: z.number().array().nullable(),
  birth_date: z.string().optional(),
  phone: z.string().optional().nullable(),
  gender: z.enum(["man", "woman"]).optional(),
  phone_additional: z.string().regex(/^([0-9\s\-+()]*)$/, "Введите корректный номер").optional(),
  addresses: z.array(addressSchema).optional().refine(
    (val) => {
      if (!val || val.length === 0) return true;
      const primaries = val.filter((a) => a.is_primary).length;
      return primaries === 1;
    },
    { message: "Должен быть ровно один основной адрес" }
  )
});
zodResolver(editUserProfileSchema);
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  ...{
    layout: _sfc_main$2
  },
  __name: "ProfileEdit",
  __ssrInlineRender: true,
  props: {
    auth: {},
    cities: {},
    user_city: {},
    allContactMethods: {},
    userContactMethods: {},
    social_auth: {}
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const selectedPrimary = vueExports.ref();
    const addAddress = () => {
      var _a2;
      (_a2 = form.addresses) == null ? void 0 : _a2.push({
        city_id: 0,
        postal_code: "",
        city: "",
        street: "",
        house: "",
        apartment: "",
        entrance: "",
        floor: "",
        delivery_zone_id: null,
        value_dadata: "",
        is_primary: false
      });
      selectedCityNames.value.push("");
      isCitySelectOpens.value.push(false);
    };
    const removeAddress = (index) => {
      if (form.addresses && form.addresses.length > 1) {
        form.addresses.splice(index, 1);
        selectedCityNames.value.splice(index, 1);
        isCitySelectOpens.value.splice(index, 1);
        if (selectedPrimary.value >= form.addresses.length) {
          selectedPrimary.value = form.addresses.length - 1;
        }
      }
    };
    const props = __props;
    const isCitySelectOpens = vueExports.ref([]);
    const selectedCityNames = vueExports.ref([]);
    const form = useForm({
      name: props.auth.user.name ?? "",
      second_name: props.auth.user.second_name ?? "",
      email: props.auth.user.email ?? void 0,
      phone: props.auth.user.phone ?? void 0,
      gender: props.auth.user.gender ?? void 0,
      last_name: props.auth.user.last_name ?? "",
      contact_methods: props.userContactMethods ?? [],
      birth_date: props.auth.user.birth_date ? props.auth.user.birth_date : void 0,
      addresses: props.auth.user.addresses.length > 0 ? props.auth.user.addresses : [
        {
          city_id: 0,
          postal_code: "",
          value_dadata: "",
          delivery_zone_id: null,
          city: "",
          street: "",
          house: "",
          apartment: "",
          entrance: "",
          floor: "",
          is_primary: true,
          car_pass: false
        }
      ]
    });
    selectedCityNames.value = ((_a = form.addresses) == null ? void 0 : _a.map(() => "")) ?? [];
    isCitySelectOpens.value = ((_b = form.addresses) == null ? void 0 : _b.map(() => false)) ?? [];
    (_c = form == null ? void 0 : form.addresses) == null ? void 0 : _c.forEach((address, index) => {
      const city = props.cities.find((c) => c.id === address.city_id);
      if (city) selectedCityNames.value[index] = city.name;
    });
    const primaryIndex = (_d = form == null ? void 0 : form.addresses) == null ? void 0 : _d.findIndex((a) => a.is_primary);
    if (primaryIndex !== -1) selectedPrimary.value = primaryIndex;
    const errors = vueExports.ref({});
    const validateField = (path) => {
      console.log("validating", path);
      const data = form.data();
      const result = editUserProfileSchema.safeParse(data);
      if (!result.success) {
        const fieldError = result.error.errors.find((err) => err.path.join(".") === path);
        if (fieldError) {
          errors.value[path] = fieldError.message;
          return false;
        }
      }
      delete errors.value[path];
      return true;
    };
    const popover = vueExports.useTemplateRef("popover");
    const togglePopover = (event) => {
      var _a2;
      (_a2 = popover.value) == null ? void 0 : _a2.toggle(event);
    };
    const isCalendarOpen = vueExports.shallowRef(false);
    const tempDate = vueExports.shallowRef(form.birth_date ? new Date(form.birth_date) : null);
    const birthDateDisplay = vueExports.computed({
      get: () => {
        return tempDate.value ? format(tempDate.value, "dd.MM.yyyy") : "";
      },
      set: (val) => {
        const parts = val.split(".");
        if (parts.length === 3) {
          const [day, month, year] = parts.map(Number);
          const d = new Date(year, month - 1, day);
          if (!isNaN(d.getTime())) {
            tempDate.value = d;
          }
        }
      }
    });
    const onApplyDeliveryDate = (event) => {
      var _a2;
      if (tempDate.value) {
        form.birth_date = format(tempDate.value, "yyyy-MM-dd");
      } else {
        form.birth_date = void 0;
      }
      (_a2 = popover.value) == null ? void 0 : _a2.toggle(event);
    };
    const onSuccessVkAuth = (data) => {
      console.log(data);
      fetch("/auth/vk/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }).then((res) => res.json()).then((resp) => {
        if (resp.success) {
          router.reload();
        }
      }).catch((err) => console.error("Ошибка:", err));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "w-full max-md:p-6" }, _attrs))}><form id="edit-profile-from" class="flex w-full flex-col gap-8"><div><h2 class="text-default-bold">Личные данные</h2><div class="mt-4 grid grid-cols-1 items-start gap-x-2 gap-y-2 md:grid-cols-2 md:gap-y-4 lg:grid-cols-3">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
        modelValue: vueExports.unref(form).last_name,
        "onUpdate:modelValue": ($event) => vueExports.unref(form).last_name = $event,
        class: "w-full",
        name: "last_name",
        label: "Ваша фамилия",
        error: errors.value.last_name,
        required: "",
        clearable: "",
        onBlur: ($event) => validateField("last_name")
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
        modelValue: vueExports.unref(form).name,
        "onUpdate:modelValue": ($event) => vueExports.unref(form).name = $event,
        class: "w-full",
        name: "name",
        label: "Ваше имя",
        error: errors.value.name,
        required: "",
        clearable: "",
        onBlur: ($event) => validateField("name")
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
        modelValue: vueExports.unref(form).second_name,
        "onUpdate:modelValue": ($event) => vueExports.unref(form).second_name = $event,
        class: "w-full",
        name: "second_name",
        label: "Ваше отчество",
        error: errors.value.second_name,
        clearable: "",
        onBlur: ($event) => validateField("second_name")
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), null, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2;
          if (_push2) {
            _push2(`<div class="rounded-20 transition-colors"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
              modelValue: birthDateDisplay.value,
              "onUpdate:modelValue": ($event) => birthDateDisplay.value = $event,
              class: "w-full",
              name: "birth_date",
              label: `Дата рождения ${!!((_a2 = vueExports.unref(form)) == null ? void 0 : _a2.birth_date) ? "(меняется через тех. поддержку)" : ""} `,
              readonly: "",
              disabled: !!((_b2 = vueExports.unref(form)) == null ? void 0 : _b2.birth_date),
              onClick: togglePopover
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, {
              ref_key: "popover",
              ref: popover,
              "append-to": "self",
              class: "calendar-popover",
              onShow: ($event) => isCalendarOpen.value = true,
              onHide: ($event) => isCalendarOpen.value = false
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, {
                    modelValue: tempDate.value,
                    "onUpdate:modelValue": ($event) => tempDate.value = $event,
                    "max-date": /* @__PURE__ */ new Date(),
                    inline: ""
                  }, {
                    footer: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="mt-4 flex justify-end"${_scopeId3}>`);
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
                          size: "small",
                          label: "Применить",
                          rounded: "",
                          "ml-auto": "",
                          onClick: onApplyDeliveryDate
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          vueExports.createVNode("div", { class: "mt-4 flex justify-end" }, [
                            vueExports.createVNode(_sfc_main$7, {
                              size: "small",
                              label: "Применить",
                              rounded: "",
                              "ml-auto": "",
                              onClick: onApplyDeliveryDate
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_sfc_main$6, {
                      modelValue: tempDate.value,
                      "onUpdate:modelValue": ($event) => tempDate.value = $event,
                      "max-date": /* @__PURE__ */ new Date(),
                      inline: ""
                    }, {
                      footer: vueExports.withCtx(() => [
                        vueExports.createVNode("div", { class: "mt-4 flex justify-end" }, [
                          vueExports.createVNode(_sfc_main$7, {
                            size: "small",
                            label: "Применить",
                            rounded: "",
                            "ml-auto": "",
                            onClick: onApplyDeliveryDate
                          })
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "max-date"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "rounded-20 transition-colors" }, [
                vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                  modelValue: birthDateDisplay.value,
                  "onUpdate:modelValue": ($event) => birthDateDisplay.value = $event,
                  class: "w-full",
                  name: "birth_date",
                  label: `Дата рождения ${!!((_c2 = vueExports.unref(form)) == null ? void 0 : _c2.birth_date) ? "(меняется через тех. поддержку)" : ""} `,
                  readonly: "",
                  disabled: !!((_d2 = vueExports.unref(form)) == null ? void 0 : _d2.birth_date),
                  onClick: vueExports.withModifiers(togglePopover, ["stop"])
                }, null, 8, ["modelValue", "onUpdate:modelValue", "label", "disabled"]),
                vueExports.createVNode(_sfc_main$5, {
                  ref_key: "popover",
                  ref: popover,
                  "append-to": "self",
                  class: "calendar-popover",
                  onShow: ($event) => isCalendarOpen.value = true,
                  onHide: ($event) => isCalendarOpen.value = false
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_sfc_main$6, {
                      modelValue: tempDate.value,
                      "onUpdate:modelValue": ($event) => tempDate.value = $event,
                      "max-date": /* @__PURE__ */ new Date(),
                      inline: ""
                    }, {
                      footer: vueExports.withCtx(() => [
                        vueExports.createVNode("div", { class: "mt-4 flex justify-end" }, [
                          vueExports.createVNode(_sfc_main$7, {
                            size: "small",
                            label: "Применить",
                            rounded: "",
                            "ml-auto": "",
                            onClick: onApplyDeliveryDate
                          })
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "max-date"])
                  ]),
                  _: 1
                }, 8, ["onShow", "onHide"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="ml-4"><div class="flex items-center gap-6"><p class="text-mob-small-reg text-additional">Пол</p><div class="flex items-center gap-2">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$8, {
        modelValue: vueExports.unref(form).gender,
        "onUpdate:modelValue": ($event) => vueExports.unref(form).gender = $event,
        "input-id": "man",
        name: "gender",
        value: "man"
      }, null, _parent));
      _push(`<label for="man" class="text-mob-small-reg">Мужской</label></div><div class="flex items-center gap-2">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$8, {
        modelValue: vueExports.unref(form).gender,
        "onUpdate:modelValue": ($event) => vueExports.unref(form).gender = $event,
        "input-id": "woman",
        name: "gender",
        value: "woman"
      }, null, _parent));
      _push(`<label for="woman" class="text-mob-small-reg">Женский</label></div></div></div></div></div><div><h2 class="text-default-bold">Контактные данные</h2><div class="mt-4 flex flex-col items-stretch gap-2 md:flex-row">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
        modelValue: vueExports.unref(form).email,
        "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
        name: "email",
        label: "Ваш e-mail "
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, {
              modelValue: vueExports.unref(form).email,
              "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
              class: "w-full",
              disabled: ""
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
              href: "/user/profile/settings#change-email",
              class: "text-additional absolute top-[17px] right-4 z-50 cursor-pointer transition-all duration-200"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$a), {
                    value: "Чтобы изменить e-mail, нажмите на иконку редактирования",
                    class: "!max-w-40"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPencil), { class: "cursor-pointer" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(vueExports.unref(IconPencil), { class: "cursor-pointer" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(_sfc_main$a), {
                      value: "Чтобы изменить e-mail, нажмите на иконку редактирования",
                      class: "!max-w-40"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(vueExports.unref(IconPencil), { class: "cursor-pointer" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$9, {
                modelValue: vueExports.unref(form).email,
                "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
                class: "w-full",
                disabled: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              vueExports.createVNode(vueExports.unref(link_default), {
                href: "/user/profile/settings#change-email",
                class: "text-additional absolute top-[17px] right-4 z-50 cursor-pointer transition-all duration-200"
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(_sfc_main$a), {
                    value: "Чтобы изменить e-mail, нажмите на иконку редактирования",
                    class: "!max-w-40"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(vueExports.unref(IconPencil), { class: "cursor-pointer" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
        modelValue: vueExports.unref(form).phone,
        "onUpdate:modelValue": ($event) => vueExports.unref(form).phone = $event,
        name: "phone",
        label: "Ваш номер"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$b, {
              modelValue: vueExports.unref(form).phone,
              "onUpdate:modelValue": ($event) => vueExports.unref(form).phone = $event,
              name: "phone",
              mask: "+7 (999) 999-99-99",
              unmask: "",
              disabled: "",
              fluid: "",
              autocomplete: "phone"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
              href: "/user/profile/settings#change-number",
              class: "text-additional absolute top-[17px] right-4 z-50 cursor-pointer transition-all duration-200"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$a), {
                    value: "Чтобы изменить номер, нажмите на иконку редактирования",
                    class: "!max-w-40"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPencil), { class: "cursor-pointer" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(vueExports.unref(IconPencil), { class: "cursor-pointer" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(_sfc_main$a), {
                      value: "Чтобы изменить номер, нажмите на иконку редактирования",
                      class: "!max-w-40"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(vueExports.unref(IconPencil), { class: "cursor-pointer" })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$b, {
                modelValue: vueExports.unref(form).phone,
                "onUpdate:modelValue": ($event) => vueExports.unref(form).phone = $event,
                name: "phone",
                mask: "+7 (999) 999-99-99",
                unmask: "",
                disabled: "",
                fluid: "",
                autocomplete: "phone"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              vueExports.createVNode(vueExports.unref(link_default), {
                href: "/user/profile/settings#change-number",
                class: "text-additional absolute top-[17px] right-4 z-50 cursor-pointer transition-all duration-200"
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(_sfc_main$a), {
                    value: "Чтобы изменить номер, нажмите на иконку редактирования",
                    class: "!max-w-40"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(vueExports.unref(IconPencil), { class: "cursor-pointer" })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), { class: "w-full" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$c), {
              modelValue: vueExports.unref(form).contact_methods,
              "onUpdate:modelValue": ($event) => vueExports.unref(form).contact_methods = $event,
              options: _ctx.allContactMethods
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(_sfc_main$c), {
                modelValue: vueExports.unref(form).contact_methods,
                "onUpdate:modelValue": ($event) => vueExports.unref(form).contact_methods = $event,
                options: _ctx.allContactMethods
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div><div><h2 class="text-default-bold">Адреса</h2><p class="text-additional mt-4">От адреса зависит ассортимент, цены и условия получения заказа</p></div><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(form).addresses, (address, index) => {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$d), {
          key: index,
          "city-id": address.city_id,
          "onUpdate:cityId": ($event) => address.city_id = $event,
          "postal-code": address.postal_code,
          "onUpdate:postalCode": ($event) => address.postal_code = $event,
          floor: address.floor,
          "onUpdate:floor": ($event) => address.floor = $event,
          entrance: address.entrance,
          "onUpdate:entrance": ($event) => address.entrance = $event,
          "value-dadata": address.value_dadata,
          "onUpdate:valueDadata": ($event) => address.value_dadata = $event,
          "delivery-zone-id": address.delivery_zone_id,
          "onUpdate:deliveryZoneId": ($event) => address.delivery_zone_id = $event,
          apartment: address.apartment,
          "onUpdate:apartment": ($event) => address.apartment = $event,
          class: "border-b-filling mt-2 flex flex-col gap-4 border-b pb-4 last:border-b-0",
          index: String(index),
          errors: errors.value ?? vueExports.unref(form).errors,
          "validate-field": validateField
        }, {
          additionalFields: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d2, _e, _f;
            if (_push2) {
              _push2(`<div class="grid grid-cols-2 gap-2 lg:grid-cols-[1.5fr_2fr_1fr]"${_scopeId}><div class="flex items-center gap-3 max-lg:col-span-2"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$e, {
                modelValue: address.car_pass,
                "onUpdate:modelValue": ($event) => address.car_pass = $event,
                "input-id": `car_pass_checkbox-${index}`,
                binary: "",
                size: "small",
                name: `agreement-${index}`
              }, null, _parent2, _scopeId));
              _push2(`<label${serverRenderer_cjs_prodExports.ssrRenderAttr("for", `car_pass_checkbox-${index}`)}${_scopeId}>Нужен пропуск для авто</label></div><div class="flex w-full items-center gap-2"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$8, {
                modelValue: selectedPrimary.value,
                "onUpdate:modelValue": ($event) => selectedPrimary.value = $event,
                "input-id": `primary-${index}`,
                name: "primary",
                value: index
              }, null, _parent2, _scopeId));
              _push2(`<label${serverRenderer_cjs_prodExports.ssrRenderAttr("for", `primary-${index}`)} class="text-mob-small-reg"${_scopeId}>Сделать адрес основным</label></div><button type="button" class="bg-filling text-mob-small-reg disabled:!text-additional cursor-pointer justify-self-end rounded-full px-6 py-4 text-nowrap disabled:cursor-not-allowed disabled:!bg-[#CDD4D8]"${serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(((_a2 = vueExports.unref(form)) == null ? void 0 : _a2.addresses) ? ((_c2 = (_b2 = vueExports.unref(form)) == null ? void 0 : _b2.addresses) == null ? void 0 : _c2.length) <= 1 : false) ? " disabled" : ""}${_scopeId}> Удалить адрес </button></div>`);
            } else {
              return [
                vueExports.createVNode("div", { class: "grid grid-cols-2 gap-2 lg:grid-cols-[1.5fr_2fr_1fr]" }, [
                  vueExports.createVNode("div", { class: "flex items-center gap-3 max-lg:col-span-2" }, [
                    vueExports.createVNode(_sfc_main$e, {
                      modelValue: address.car_pass,
                      "onUpdate:modelValue": ($event) => address.car_pass = $event,
                      "input-id": `car_pass_checkbox-${index}`,
                      binary: "",
                      size: "small",
                      name: `agreement-${index}`
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name"]),
                    vueExports.createVNode("label", {
                      for: `car_pass_checkbox-${index}`
                    }, "Нужен пропуск для авто", 8, ["for"])
                  ]),
                  vueExports.createVNode("div", { class: "flex w-full items-center gap-2" }, [
                    vueExports.createVNode(_sfc_main$8, {
                      modelValue: selectedPrimary.value,
                      "onUpdate:modelValue": ($event) => selectedPrimary.value = $event,
                      "input-id": `primary-${index}`,
                      name: "primary",
                      value: index
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "value"]),
                    vueExports.createVNode("label", {
                      for: `primary-${index}`,
                      class: "text-mob-small-reg"
                    }, "Сделать адрес основным", 8, ["for"])
                  ]),
                  vueExports.createVNode("button", {
                    type: "button",
                    class: "bg-filling text-mob-small-reg disabled:!text-additional cursor-pointer justify-self-end rounded-full px-6 py-4 text-nowrap disabled:cursor-not-allowed disabled:!bg-[#CDD4D8]",
                    disabled: ((_d2 = vueExports.unref(form)) == null ? void 0 : _d2.addresses) ? ((_f = (_e = vueExports.unref(form)) == null ? void 0 : _e.addresses) == null ? void 0 : _f.length) <= 1 : false,
                    onClick: ($event) => removeAddress(index)
                  }, " Удалить адрес ", 8, ["disabled", "onClick"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
        label: "Добавить новый адрес",
        type: "button",
        class: "mt-4",
        variant: "outline",
        onClick: addAddress
      }, null, _parent));
      _push(`</div><div><h2 class="text-default-bold">Быстрый вход через соцсети</h2><div class="mt-4"><p class="text-mob-small-reg text-additional">Привязанные учетные записи</p><div class="mt-2 flex flex-col items-stretch gap-2 lg:flex-row">`);
      if (_ctx.social_auth.yandex_available) {
        _push(`<div class="bg-input rounded-20 flex w-full items-center justify-between px-4 py-2 lg:max-w-1/2"><div class="flex items-center gap-2">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconYandexQuick), { class: "text-additional h-5 w-5" }, null, _parent));
        _push(`<p class="text-mob-small-reg text-additional">Яндекс</p></div>`);
        if (!_ctx.auth.user.yandex_id) {
          _push(`<a${serverRenderer_cjs_prodExports.ssrRenderAttr("href", _ctx.route("yandex.get"))}>`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
            variant: "outlined",
            size: "small",
            rounded: "",
            label: "Подключить"
          }, null, _parent));
          _push(`</a>`);
        } else {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), { service: "yandex" }, null, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.social_auth.vk_available) {
        _push(`<div class="bg-input rounded-20 flex w-full items-center justify-between px-4 py-2 lg:max-w-1/2"><div class="flex items-center gap-2">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconVkQuick), { class: "text-additional h-5 w-5" }, null, _parent));
        _push(`<p class="text-mob-small-reg text-additional">Вконтакте</p></div>`);
        if (!_ctx.auth.user.vk_id) {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$f), {
            class: "w-fit",
            custom: "",
            handler: onSuccessVkAuth
          }, {
            default: vueExports.withCtx(({ loginWithVK }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
                  variant: "outlined",
                  size: "small",
                  rounded: "",
                  label: "Подключить",
                  onClick: loginWithVK
                }, null, _parent2, _scopeId));
              } else {
                return [
                  vueExports.createVNode(_sfc_main$7, {
                    variant: "outlined",
                    size: "small",
                    rounded: "",
                    label: "Подключить",
                    onClick: loginWithVK
                  }, null, 8, ["onClick"])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), { service: "vk" }, null, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="flex flex-col-reverse items-stretch justify-center gap-2 md:flex-row md:gap-8">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
        href: _ctx.route("user.profile.index"),
        class: "bg-filling hover:bg-filling/60 rounded-full px-6 py-4 transition-colors duration-200 ease-in"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Отменить `);
          } else {
            return [
              vueExports.createTextVNode(" Отменить ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
        label: "Сохранить изменения",
        type: "submit",
        form: "edit-profile-from",
        disabled: vueExports.unref(form).processing
      }, null, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/profile/profile-edit/ui/ProfileEdit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
