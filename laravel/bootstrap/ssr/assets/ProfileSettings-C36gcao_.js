import { v as vueExports, al as _sfc_main$1, c as useForm, s as serverRenderer_cjs_prodExports, y as IconCheckCircle, z as IconXCircle, e as _sfc_main$2, a8 as IconArrowDown, aj as _sfc_main$4, H as VScrollPanel, j as _sfc_main$5, L as _sfc_main$6, a as VButton, w as _sfc_main$7, f as _sfc_main$8, g as _sfc_main$9, d as _sfc_main$a, ao as _sfc_main$b, ai as _sfc_main$c, l as link_default } from "../ssr.js";
import { Form } from "@primevue/forms";
import { useCountdown } from "@vueuse/core";
import { useToast } from "primevue";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";
import { _ as _sfc_main$3 } from "./ToggleSwitch-kQXei-3B.js";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "@vue/shared";
import "@vue/compiler-ssr";
import "node:stream";
import "@inertiajs/core";
import "lodash-es";
import "@inertiajs/core/server";
import "vue-i18n";
import "primevue/menu";
import "tailwind-merge";
import "primevue/config";
import "pinia";
import "swiper/element/bundle";
import "primevue/avatar";
import "@primevue/icons/starfill";
import "primevue/rating";
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
import "primevue/toggleswitch";
const settingsUpdateSchema = z.object({
  id: z.number(),
  comment_notifications: z.boolean(),
  sale_notifications: z.boolean(),
  email_notifications: z.boolean(),
  sms_notifications: z.boolean(),
  messenger_notifications: z.boolean(),
  favorite_categories: z.boolean(),
  often_type: z.enum(["daily", "weekly", "sales_only"]),
  favorite_categories_list: z.array(z.number()).optional()
});
const changePasswordSchema = z.object({
  credentials: z.string().optional(),
  old_password: z.string({
    required_error: "Обязательное поле"
  }).min(8, "Не менее 8 символов"),
  password: z.string({
    required_error: "Обязательное поле"
  }).min(8, "Не менее 8 символов").regex(
    /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)(?=.*[^A-Za-zА-Яа-яЁё0-9]).{8,}$/u,
    "Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ"
  ),
  password_confirmation: z.string({
    required_error: "Обязательное поле"
  }).min(8, "Не менее 8 символов").regex(
    /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)(?=.*[^A-Za-zА-Яа-яЁё0-9]).{8,}$/u,
    "Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ"
  )
}).refine((data) => data.password === data.password_confirmation, {
  message: "Указанный пароль не совпадает",
  path: ["password_confirmation"]
});
const changeEmailSchema = z.object({
  email: z.string().email("Введите правильный email"),
  password: z.string().min(6, "Не менее 6 символов")
});
const changePhoneSchema = z.object({
  phone: z.string()
});
const checkCodeSchema = z.object({
  code: z.string()
});
const settingsResolver = zodResolver(settingsUpdateSchema);
const changePasswordResolver = zodResolver(changePasswordSchema);
const changeEmailResolver = zodResolver(changeEmailSchema);
const changePhoneResolver = zodResolver(changePhoneSchema);
const checkCodeResolver = zodResolver(checkCodeSchema);
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  ...{
    layout: _sfc_main$1
  },
  __name: "ProfileSettings",
  __ssrInlineRender: true,
  props: {
    userSetting: {},
    categories: {},
    flash: {},
    auth: {}
  },
  setup(__props) {
    const { add } = useToast();
    const { start, remaining, isActive } = useCountdown(60);
    const props = __props;
    const categoriesContainer = vueExports.useTemplateRef("categories-popover");
    const toggleCategoriesSelect = (e) => {
      var _a;
      (_a = categoriesContainer.value) == null ? void 0 : _a.toggle(e);
    };
    const showPush = vueExports.ref(false);
    const updateSettingsForm = useForm({
      comment_notifications: props.userSetting.comment_notifications ?? false,
      sale_notifications: props.userSetting.sale_notifications ?? false,
      email_notifications: props.userSetting.email_notifications ?? false,
      sms_notifications: props.userSetting.sms_notifications ?? false,
      messenger_notifications: props.userSetting.messenger_notifications ?? false,
      favorite_categories: props.userSetting.favorite_categories ?? false,
      often_type: props.userSetting.often_type ?? void 0,
      favorite_categories_list: props.userSetting.favorite_categories_list ?? []
    });
    vueExports.watch(
      () => updateSettingsForm.favorite_categories,
      (newVal) => {
        if (newVal === false) {
          updateSettingsForm.favorite_categories_list = [];
        }
      }
    );
    const onUpdateUserSettings = ({ valid }) => {
      if (valid) {
        updateSettingsForm.put(route("user.profile.settings.update"), { preserveScroll: true });
        showPush.value = true;
      }
    };
    const changePasswordForm = useForm({
      credentials: "",
      old_password: "",
      password: "",
      password_confirmation: ""
    });
    const changeEmailForm = useForm({
      email: "",
      password: ""
    });
    const changePhoneForm = useForm({
      phone: ""
    });
    const checkCodeForm = useForm({
      code: ""
    });
    const timer = vueExports.computed(() => {
      if (isActive.value) {
        const minutes = Math.floor(remaining.value / 60);
        const seconds = remaining.value % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      }
      return "";
    });
    const isCheckCodeOpen = vueExports.ref(false);
    const onChangePassword = ({ valid }) => {
      if (valid) {
        changePasswordForm.post(route("user.profile.password.change"), {
          onSuccess: () => {
            showPush.value = true;
            changePasswordForm.reset();
          },
          preserveState: true
        });
      }
    };
    const onEmailChange = ({ valid }) => {
      if (valid) {
        changeEmailForm.post(route("email.change.store"), { preserveScroll: true });
      }
    };
    const onPhoneChange = ({ valid }) => {
      if (valid) {
        changePhoneForm.post(route("phone.change.send"), {
          preserveScroll: true,
          preserveState: true,
          onSuccess: (data) => {
            var _a;
            isCheckCodeOpen.value = true;
            add({
              severity: "success",
              detail: (_a = data == null ? void 0 : data.props) == null ? void 0 : _a.flash.success
            });
            start();
          }
        });
      }
    };
    const onCheckCode = ({ valid }) => {
      if (valid) {
        checkCodeForm.post(route("phone.change.confirm"), {
          onSuccess: (data) => {
            var _a, _b;
            isCheckCodeOpen.value = false;
            if ((_a = data == null ? void 0 : data.props) == null ? void 0 : _a.flash.error) {
              add({
                severity: "error",
                detail: (_b = data == null ? void 0 : data.props) == null ? void 0 : _b.flash.error
              });
            }
          }
        });
      }
    };
    const refreshCode = () => {
      changePhoneForm.post(route("phone.change.send"), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: (data) => {
          var _a;
          add({
            severity: "success",
            detail: (_a = data == null ? void 0 : data.props) == null ? void 0 : _a.flash.success
          });
          start();
        }
      });
    };
    const removeCategory = (id) => {
      var _a;
      updateSettingsForm.favorite_categories_list = (_a = updateSettingsForm == null ? void 0 : updateSettingsForm.favorite_categories_list) == null ? void 0 : _a.filter((catId) => catId !== id);
    };
    const notificationsFrequency = [
      { type: "daily", name: "Ежедневно" },
      { type: "weekly", name: "Еженедельно" },
      { type: "sales_only", name: "Только при наличии акций" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "w-full max-md:p-6" }, _attrs))}>`);
      if (showPush.value) {
        _push(`<div class="bg-push-green text-mob-small-reg mt-4 flex items-center justify-between rounded-lg p-2"><div class="flex items-center gap-2">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCheckCircle), { class: "text-ready-green h-5 w-5" }, null, _parent));
        _push(`<span>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.flash.success)}</span></div><button class="cursor-pointer">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconXCircle), { class: "h-5 w-5" }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="text-default-bold mt-2">Настройки</h1>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Form), {
        resolver: vueExports.unref(settingsResolver),
        "initial-values": vueExports.unref(updateSettingsForm),
        "validate-on-blur": "",
        class: "mt-6 md:mt-8",
        onSubmit: onUpdateUserSettings
      }, {
        default: vueExports.withCtx(($form, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B;
          if (_push2) {
            _push2(`<div class="text-mob-small-medium md:text-small-medium flex flex-col gap-4"${_scopeId}><h2${_scopeId}>Уведомления</h2><div class="border-b-filling flex flex-col gap-6 border-b pb-4"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              error: ((_b = (_a = $form.comment_notifications) == null ? void 0 : _a.error) == null ? void 0 : _b.message) || vueExports.unref(updateSettingsForm).errors.comment_notifications
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2 md:gap-8"${_scopeId2}><label for="comment_notifications" class="w-full max-w-[440px]"${_scopeId2}>Сообщать о новых лайках и ответах в комментариях</label>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                    modelValue: vueExports.unref(updateSettingsForm).comment_notifications,
                    "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).comment_notifications = $event,
                    name: "comment_notifications",
                    class: "shrink-0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    vueExports.createVNode("div", { class: "flex items-center gap-2 md:gap-8" }, [
                      vueExports.createVNode("label", {
                        for: "comment_notifications",
                        class: "w-full max-w-[440px]"
                      }, "Сообщать о новых лайках и ответах в комментариях"),
                      vueExports.createVNode(_sfc_main$3, {
                        modelValue: vueExports.unref(updateSettingsForm).comment_notifications,
                        "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).comment_notifications = $event,
                        name: "comment_notifications",
                        class: "shrink-0"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              error: ((_d = (_c = $form.sale_notifications) == null ? void 0 : _c.error) == null ? void 0 : _d.message) || vueExports.unref(updateSettingsForm).errors.sale_notifications
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2 md:gap-8"${_scopeId2}><label for="sale_notifications" class="w-full max-w-[440px]"${_scopeId2}>Сообщать о новых скидках и акциях</label>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                    modelValue: vueExports.unref(updateSettingsForm).sale_notifications,
                    "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).sale_notifications = $event,
                    name: "sale_notifications",
                    class: "shrink-0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    vueExports.createVNode("div", { class: "flex items-center gap-2 md:gap-8" }, [
                      vueExports.createVNode("label", {
                        for: "sale_notifications",
                        class: "w-full max-w-[440px]"
                      }, "Сообщать о новых скидках и акциях"),
                      vueExports.createVNode(_sfc_main$3, {
                        modelValue: vueExports.unref(updateSettingsForm).sale_notifications,
                        "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).sale_notifications = $event,
                        name: "sale_notifications",
                        class: "shrink-0"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              error: ((_f = (_e = $form.favorite_categories) == null ? void 0 : _e.error) == null ? void 0 : _f.message) || vueExports.unref(updateSettingsForm).errors.favorite_categories
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2 md:gap-8"${_scopeId2}><div class="flex w-full max-w-[440px] flex-col gap-0.5"${_scopeId2}><label for="favorite_categories"${_scopeId2}>Сообщать о новых товарах из любимых категорий</label><span style="${serverRenderer_cjs_prodExports.ssrRenderStyle(vueExports.unref(updateSettingsForm).favorite_categories ? null : { display: "none" })}" class="text-subsidiary-reg text-additional"${_scopeId2}>Категории товаров, по которым вы хотите получать уведомления</span></div>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                    modelValue: vueExports.unref(updateSettingsForm).favorite_categories,
                    "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).favorite_categories = $event,
                    name: "favorite_categories",
                    class: "shrink-0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    vueExports.createVNode("div", { class: "flex items-center gap-2 md:gap-8" }, [
                      vueExports.createVNode("div", { class: "flex w-full max-w-[440px] flex-col gap-0.5" }, [
                        vueExports.createVNode("label", { for: "favorite_categories" }, "Сообщать о новых товарах из любимых категорий"),
                        vueExports.withDirectives(vueExports.createVNode("span", { class: "text-subsidiary-reg text-additional" }, "Категории товаров, по которым вы хотите получать уведомления", 512), [
                          [vueExports.vShow, vueExports.unref(updateSettingsForm).favorite_categories]
                        ])
                      ]),
                      vueExports.createVNode(_sfc_main$3, {
                        modelValue: vueExports.unref(updateSettingsForm).favorite_categories,
                        "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).favorite_categories = $event,
                        name: "favorite_categories",
                        class: "shrink-0"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              style: vueExports.unref(updateSettingsForm).favorite_categories ? null : { display: "none" }
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<button class="bg-input rounded-20 flex max-w-[360px] cursor-pointer items-center justify-between border border-transparent p-3.5 px-4 transition-all duration-200 ease-in" type="button"${_scopeId2}><span class="text-additional transition-colors duration-200 ease-in"${_scopeId2}>Выберите категории</span>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowDown), { class: "transition-transform duration-200 ease-in" }, null, _parent3, _scopeId2));
                  _push3(`</button>`);
                } else {
                  return [
                    vueExports.createVNode("button", {
                      class: "bg-input rounded-20 flex max-w-[360px] cursor-pointer items-center justify-between border border-transparent p-3.5 px-4 transition-all duration-200 ease-in",
                      type: "button",
                      onClick: toggleCategoriesSelect
                    }, [
                      vueExports.createVNode("span", { class: "text-additional transition-colors duration-200 ease-in" }, "Выберите категории"),
                      vueExports.createVNode(vueExports.unref(IconArrowDown), { class: "transition-transform duration-200 ease-in" })
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, { ref: "categories-popover" }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-small-regular flex min-w-[320px] flex-col"${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VScrollPanel), { style: { "height": "320px" } }, {
                    default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        serverRenderer_cjs_prodExports.ssrRenderList(_ctx.categories, (category) => {
                          _push4(`<div class="hover:bg-input flex cursor-pointer items-center rounded-lg py-2 transition-colors duration-200 ease-in"${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, {
                            modelValue: vueExports.unref(updateSettingsForm).favorite_categories_list,
                            "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).favorite_categories_list = $event,
                            "input-id": String(category.id),
                            name: String(category.id),
                            value: category.id
                          }, null, _parent4, _scopeId3));
                          _push4(`<label class="cursor-pointer pl-3"${serverRenderer_cjs_prodExports.ssrRenderAttr("for", String(category.id))}${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(category.name)}</label></div>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.categories, (category) => {
                            return vueExports.openBlock(), vueExports.createBlock("div", {
                              key: category.id,
                              class: "hover:bg-input flex cursor-pointer items-center rounded-lg py-2 transition-colors duration-200 ease-in"
                            }, [
                              vueExports.createVNode(_sfc_main$5, {
                                modelValue: vueExports.unref(updateSettingsForm).favorite_categories_list,
                                "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).favorite_categories_list = $event,
                                "input-id": String(category.id),
                                name: String(category.id),
                                value: category.id
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                              vueExports.createVNode("label", {
                                class: "cursor-pointer pl-3",
                                for: String(category.id)
                              }, vueExports.toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    vueExports.createVNode("div", { class: "text-small-regular flex min-w-[320px] flex-col" }, [
                      vueExports.createVNode(vueExports.unref(VScrollPanel), { style: { "height": "320px" } }, {
                        default: vueExports.withCtx(() => [
                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.categories, (category) => {
                            return vueExports.openBlock(), vueExports.createBlock("div", {
                              key: category.id,
                              class: "hover:bg-input flex cursor-pointer items-center rounded-lg py-2 transition-colors duration-200 ease-in"
                            }, [
                              vueExports.createVNode(_sfc_main$5, {
                                modelValue: vueExports.unref(updateSettingsForm).favorite_categories_list,
                                "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).favorite_categories_list = $event,
                                "input-id": String(category.id),
                                name: String(category.id),
                                value: category.id
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                              vueExports.createVNode("label", {
                                class: "cursor-pointer pl-3",
                                for: String(category.id)
                              }, vueExports.toDisplayString(category.name), 9, ["for"])
                            ]);
                          }), 128))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            if (vueExports.unref(updateSettingsForm).favorite_categories_list && vueExports.unref(updateSettingsForm).favorite_categories_list.length > 0 && vueExports.unref(updateSettingsForm).favorite_categories) {
              _push2(`<div class="flex items-center gap-6"${_scopeId}><p class="text-mob-small-reg text-additional text-nowrap"${_scopeId}>Любимые категории</p><div class="flex flex-wrap items-center gap-2"${_scopeId}><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(updateSettingsForm).favorite_categories_list, (categoryId) => {
                var _a2;
                _push2(`<div class="rounded-20 bg-text flex items-center gap-2 px-4 py-3.5 text-white"${_scopeId}><span class="text-mob-small-reg"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(((_a2 = props.categories.find((cat) => cat.id === categoryId)) == null ? void 0 : _a2.name) || "Неизвестная категория")}</span><button class="cursor-pointer"${_scopeId}>`);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconXCircle), null, null, _parent2, _scopeId));
                _push2(`</button></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex flex-col gap-6 pb-4"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              error: ((_h = (_g = $form.email_notifications) == null ? void 0 : _g.error) == null ? void 0 : _h.message) || vueExports.unref(updateSettingsForm).errors.email_notifications
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2 md:gap-8"${_scopeId2}><div class="flex w-full max-w-[440px] flex-col gap-0.5"${_scopeId2}><label for="email_notifications"${_scopeId2}>Получать рассылки на почту</label><span class="text-subsidiary-reg text-additional"${_scopeId2}>Почту можно привязать во вкладке «Личный кабинет»</span></div>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                    modelValue: vueExports.unref(updateSettingsForm).email_notifications,
                    "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).email_notifications = $event,
                    name: "email_notifications",
                    class: "shrink-0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    vueExports.createVNode("div", { class: "flex items-center gap-2 md:gap-8" }, [
                      vueExports.createVNode("div", { class: "flex w-full max-w-[440px] flex-col gap-0.5" }, [
                        vueExports.createVNode("label", { for: "email_notifications" }, "Получать рассылки на почту"),
                        vueExports.createVNode("span", { class: "text-subsidiary-reg text-additional" }, "Почту можно привязать во вкладке «Личный кабинет»")
                      ]),
                      vueExports.createVNode(_sfc_main$3, {
                        modelValue: vueExports.unref(updateSettingsForm).email_notifications,
                        "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).email_notifications = $event,
                        name: "email_notifications",
                        class: "shrink-0"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              error: ((_j = (_i = $form.sms_notifications) == null ? void 0 : _i.error) == null ? void 0 : _j.message) || vueExports.unref(updateSettingsForm).errors.sms_notifications
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2 md:gap-8"${_scopeId2}><div class="flex w-full max-w-[440px] flex-col gap-0.5"${_scopeId2}><label for="sms_notifications"${_scopeId2}>Получать СМС-рассылки</label><span class="text-subsidiary-reg text-additional"${_scopeId2}>Номер можно привязать во вкладке «Личный кабинет»</span></div>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                    modelValue: vueExports.unref(updateSettingsForm).sms_notifications,
                    "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).sms_notifications = $event,
                    name: "sms_notifications",
                    class: "shrink-0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    vueExports.createVNode("div", { class: "flex items-center gap-2 md:gap-8" }, [
                      vueExports.createVNode("div", { class: "flex w-full max-w-[440px] flex-col gap-0.5" }, [
                        vueExports.createVNode("label", { for: "sms_notifications" }, "Получать СМС-рассылки"),
                        vueExports.createVNode("span", { class: "text-subsidiary-reg text-additional" }, "Номер можно привязать во вкладке «Личный кабинет»")
                      ]),
                      vueExports.createVNode(_sfc_main$3, {
                        modelValue: vueExports.unref(updateSettingsForm).sms_notifications,
                        "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).sms_notifications = $event,
                        name: "sms_notifications",
                        class: "shrink-0"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              error: ((_l = (_k = $form.messenger_notifications) == null ? void 0 : _k.error) == null ? void 0 : _l.message) || vueExports.unref(updateSettingsForm).errors.messenger_notifications
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center gap-2 md:gap-8"${_scopeId2}><div class="flex w-full max-w-[440px] flex-col gap-0.5"${_scopeId2}><label for="messenger_notifications"${_scopeId2}>Получать рассылки через мессенджеры</label><span class="text-subsidiary-reg text-additional"${_scopeId2}>Мессенджеры можно привязать во вкладке «Личный кабинет»</span></div>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                    modelValue: vueExports.unref(updateSettingsForm).messenger_notifications,
                    "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).messenger_notifications = $event,
                    name: "messenger_notifications",
                    class: "shrink-0"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    vueExports.createVNode("div", { class: "flex items-center gap-2 md:gap-8" }, [
                      vueExports.createVNode("div", { class: "flex w-full max-w-[440px] flex-col gap-0.5" }, [
                        vueExports.createVNode("label", { for: "messenger_notifications" }, "Получать рассылки через мессенджеры"),
                        vueExports.createVNode("span", { class: "text-subsidiary-reg text-additional" }, "Мессенджеры можно привязать во вкладке «Личный кабинет»")
                      ]),
                      vueExports.createVNode(_sfc_main$3, {
                        modelValue: vueExports.unref(updateSettingsForm).messenger_notifications,
                        "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).messenger_notifications = $event,
                        name: "messenger_notifications",
                        class: "shrink-0"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              error: ((_n = (_m = $form.messenger_notifications) == null ? void 0 : _m.error) == null ? void 0 : _n.message) || vueExports.unref(updateSettingsForm).errors.messenger_notifications
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-2 md:flex-row md:items-center md:gap-8"${_scopeId2}><span class="text-additional text-mob-small-reg max-md:w-full"${_scopeId2}>Частота уведомлений</span><div class="flex flex-wrap max-md:justify-between"${_scopeId2}><!--[-->`);
                  serverRenderer_cjs_prodExports.ssrRenderList(notificationsFrequency, (notification) => {
                    _push3(`<div class="cursor-pointer rounded-lg p-2"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, {
                      modelValue: vueExports.unref(updateSettingsForm).often_type,
                      "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).often_type = $event,
                      "input-id": String(notification.type),
                      name: String(notification.type),
                      disabled: !vueExports.unref(updateSettingsForm).email_notifications && !vueExports.unref(updateSettingsForm).sms_notifications && !vueExports.unref(updateSettingsForm).messenger_notifications,
                      value: notification.type
                    }, null, _parent3, _scopeId2));
                    _push3(`<label class="${serverRenderer_cjs_prodExports.ssrRenderClass([{
                      "text-additional": !vueExports.unref(updateSettingsForm).email_notifications && !vueExports.unref(updateSettingsForm).sms_notifications && !vueExports.unref(updateSettingsForm).messenger_notifications
                    }, "text-mob-small-reg cursor-pointer pl-3"])}"${serverRenderer_cjs_prodExports.ssrRenderAttr("for", notification.type)}${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(notification.name)}</label></div>`);
                  });
                  _push3(`<!--]--></div></div>`);
                } else {
                  return [
                    vueExports.createVNode("div", { class: "flex flex-col gap-2 md:flex-row md:items-center md:gap-8" }, [
                      vueExports.createVNode("span", { class: "text-additional text-mob-small-reg max-md:w-full" }, "Частота уведомлений"),
                      vueExports.createVNode("div", { class: "flex flex-wrap max-md:justify-between" }, [
                        (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(notificationsFrequency, (notification) => {
                          return vueExports.createVNode("div", {
                            key: notification.type,
                            class: "cursor-pointer rounded-lg p-2"
                          }, [
                            vueExports.createVNode(_sfc_main$6, {
                              modelValue: vueExports.unref(updateSettingsForm).often_type,
                              "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).often_type = $event,
                              "input-id": String(notification.type),
                              name: String(notification.type),
                              disabled: !vueExports.unref(updateSettingsForm).email_notifications && !vueExports.unref(updateSettingsForm).sms_notifications && !vueExports.unref(updateSettingsForm).messenger_notifications,
                              value: notification.type
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "disabled", "value"]),
                            vueExports.createVNode("label", {
                              class: ["text-mob-small-reg cursor-pointer pl-3", {
                                "text-additional": !vueExports.unref(updateSettingsForm).email_notifications && !vueExports.unref(updateSettingsForm).sms_notifications && !vueExports.unref(updateSettingsForm).messenger_notifications
                              }],
                              for: notification.type
                            }, vueExports.toDisplayString(notification.name), 11, ["for"])
                          ]);
                        }), 64))
                      ])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
              type: "submit",
              class: "w-fit",
              label: "Сохранить изменения"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "text-mob-small-medium md:text-small-medium flex flex-col gap-4" }, [
                vueExports.createVNode("h2", null, "Уведомления"),
                vueExports.createVNode("div", { class: "border-b-filling flex flex-col gap-6 border-b pb-4" }, [
                  vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                    error: ((_p = (_o = $form.comment_notifications) == null ? void 0 : _o.error) == null ? void 0 : _p.message) || vueExports.unref(updateSettingsForm).errors.comment_notifications
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "flex items-center gap-2 md:gap-8" }, [
                        vueExports.createVNode("label", {
                          for: "comment_notifications",
                          class: "w-full max-w-[440px]"
                        }, "Сообщать о новых лайках и ответах в комментариях"),
                        vueExports.createVNode(_sfc_main$3, {
                          modelValue: vueExports.unref(updateSettingsForm).comment_notifications,
                          "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).comment_notifications = $event,
                          name: "comment_notifications",
                          class: "shrink-0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["error"]),
                  vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                    error: ((_r = (_q = $form.sale_notifications) == null ? void 0 : _q.error) == null ? void 0 : _r.message) || vueExports.unref(updateSettingsForm).errors.sale_notifications
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "flex items-center gap-2 md:gap-8" }, [
                        vueExports.createVNode("label", {
                          for: "sale_notifications",
                          class: "w-full max-w-[440px]"
                        }, "Сообщать о новых скидках и акциях"),
                        vueExports.createVNode(_sfc_main$3, {
                          modelValue: vueExports.unref(updateSettingsForm).sale_notifications,
                          "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).sale_notifications = $event,
                          name: "sale_notifications",
                          class: "shrink-0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["error"]),
                  vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                    error: ((_t = (_s = $form.favorite_categories) == null ? void 0 : _s.error) == null ? void 0 : _t.message) || vueExports.unref(updateSettingsForm).errors.favorite_categories
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "flex items-center gap-2 md:gap-8" }, [
                        vueExports.createVNode("div", { class: "flex w-full max-w-[440px] flex-col gap-0.5" }, [
                          vueExports.createVNode("label", { for: "favorite_categories" }, "Сообщать о новых товарах из любимых категорий"),
                          vueExports.withDirectives(vueExports.createVNode("span", { class: "text-subsidiary-reg text-additional" }, "Категории товаров, по которым вы хотите получать уведомления", 512), [
                            [vueExports.vShow, vueExports.unref(updateSettingsForm).favorite_categories]
                          ])
                        ]),
                        vueExports.createVNode(_sfc_main$3, {
                          modelValue: vueExports.unref(updateSettingsForm).favorite_categories,
                          "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).favorite_categories = $event,
                          name: "favorite_categories",
                          class: "shrink-0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["error"]),
                  vueExports.withDirectives(vueExports.createVNode(vueExports.unref(_sfc_main$2), null, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("button", {
                        class: "bg-input rounded-20 flex max-w-[360px] cursor-pointer items-center justify-between border border-transparent p-3.5 px-4 transition-all duration-200 ease-in",
                        type: "button",
                        onClick: toggleCategoriesSelect
                      }, [
                        vueExports.createVNode("span", { class: "text-additional transition-colors duration-200 ease-in" }, "Выберите категории"),
                        vueExports.createVNode(vueExports.unref(IconArrowDown), { class: "transition-transform duration-200 ease-in" })
                      ])
                    ]),
                    _: 1
                  }, 512), [
                    [vueExports.vShow, vueExports.unref(updateSettingsForm).favorite_categories]
                  ]),
                  vueExports.createVNode(_sfc_main$4, { ref: "categories-popover" }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "text-small-regular flex min-w-[320px] flex-col" }, [
                        vueExports.createVNode(vueExports.unref(VScrollPanel), { style: { "height": "320px" } }, {
                          default: vueExports.withCtx(() => [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.categories, (category) => {
                              return vueExports.openBlock(), vueExports.createBlock("div", {
                                key: category.id,
                                class: "hover:bg-input flex cursor-pointer items-center rounded-lg py-2 transition-colors duration-200 ease-in"
                              }, [
                                vueExports.createVNode(_sfc_main$5, {
                                  modelValue: vueExports.unref(updateSettingsForm).favorite_categories_list,
                                  "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).favorite_categories_list = $event,
                                  "input-id": String(category.id),
                                  name: String(category.id),
                                  value: category.id
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                                vueExports.createVNode("label", {
                                  class: "cursor-pointer pl-3",
                                  for: String(category.id)
                                }, vueExports.toDisplayString(category.name), 9, ["for"])
                              ]);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }, 512),
                  vueExports.unref(updateSettingsForm).favorite_categories_list && vueExports.unref(updateSettingsForm).favorite_categories_list.length > 0 && vueExports.unref(updateSettingsForm).favorite_categories ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 0,
                    class: "flex items-center gap-6"
                  }, [
                    vueExports.createVNode("p", { class: "text-mob-small-reg text-additional text-nowrap" }, "Любимые категории"),
                    vueExports.createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(updateSettingsForm).favorite_categories_list, (categoryId) => {
                        var _a2;
                        return vueExports.openBlock(), vueExports.createBlock("div", {
                          key: categoryId,
                          class: "rounded-20 bg-text flex items-center gap-2 px-4 py-3.5 text-white"
                        }, [
                          vueExports.createVNode("span", { class: "text-mob-small-reg" }, vueExports.toDisplayString(((_a2 = props.categories.find((cat) => cat.id === categoryId)) == null ? void 0 : _a2.name) || "Неизвестная категория"), 1),
                          vueExports.createVNode("button", {
                            class: "cursor-pointer",
                            onClick: ($event) => removeCategory(categoryId)
                          }, [
                            vueExports.createVNode(vueExports.unref(IconXCircle))
                          ], 8, ["onClick"])
                        ]);
                      }), 128))
                    ])
                  ])) : vueExports.createCommentVNode("", true)
                ]),
                vueExports.createVNode("div", { class: "flex flex-col gap-6 pb-4" }, [
                  vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                    error: ((_v = (_u = $form.email_notifications) == null ? void 0 : _u.error) == null ? void 0 : _v.message) || vueExports.unref(updateSettingsForm).errors.email_notifications
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "flex items-center gap-2 md:gap-8" }, [
                        vueExports.createVNode("div", { class: "flex w-full max-w-[440px] flex-col gap-0.5" }, [
                          vueExports.createVNode("label", { for: "email_notifications" }, "Получать рассылки на почту"),
                          vueExports.createVNode("span", { class: "text-subsidiary-reg text-additional" }, "Почту можно привязать во вкладке «Личный кабинет»")
                        ]),
                        vueExports.createVNode(_sfc_main$3, {
                          modelValue: vueExports.unref(updateSettingsForm).email_notifications,
                          "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).email_notifications = $event,
                          name: "email_notifications",
                          class: "shrink-0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["error"]),
                  vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                    error: ((_x = (_w = $form.sms_notifications) == null ? void 0 : _w.error) == null ? void 0 : _x.message) || vueExports.unref(updateSettingsForm).errors.sms_notifications
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "flex items-center gap-2 md:gap-8" }, [
                        vueExports.createVNode("div", { class: "flex w-full max-w-[440px] flex-col gap-0.5" }, [
                          vueExports.createVNode("label", { for: "sms_notifications" }, "Получать СМС-рассылки"),
                          vueExports.createVNode("span", { class: "text-subsidiary-reg text-additional" }, "Номер можно привязать во вкладке «Личный кабинет»")
                        ]),
                        vueExports.createVNode(_sfc_main$3, {
                          modelValue: vueExports.unref(updateSettingsForm).sms_notifications,
                          "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).sms_notifications = $event,
                          name: "sms_notifications",
                          class: "shrink-0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["error"]),
                  vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                    error: ((_z = (_y = $form.messenger_notifications) == null ? void 0 : _y.error) == null ? void 0 : _z.message) || vueExports.unref(updateSettingsForm).errors.messenger_notifications
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "flex items-center gap-2 md:gap-8" }, [
                        vueExports.createVNode("div", { class: "flex w-full max-w-[440px] flex-col gap-0.5" }, [
                          vueExports.createVNode("label", { for: "messenger_notifications" }, "Получать рассылки через мессенджеры"),
                          vueExports.createVNode("span", { class: "text-subsidiary-reg text-additional" }, "Мессенджеры можно привязать во вкладке «Личный кабинет»")
                        ]),
                        vueExports.createVNode(_sfc_main$3, {
                          modelValue: vueExports.unref(updateSettingsForm).messenger_notifications,
                          "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).messenger_notifications = $event,
                          name: "messenger_notifications",
                          class: "shrink-0"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["error"]),
                  vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                    error: ((_B = (_A = $form.messenger_notifications) == null ? void 0 : _A.error) == null ? void 0 : _B.message) || vueExports.unref(updateSettingsForm).errors.messenger_notifications
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "flex flex-col gap-2 md:flex-row md:items-center md:gap-8" }, [
                        vueExports.createVNode("span", { class: "text-additional text-mob-small-reg max-md:w-full" }, "Частота уведомлений"),
                        vueExports.createVNode("div", { class: "flex flex-wrap max-md:justify-between" }, [
                          (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(notificationsFrequency, (notification) => {
                            return vueExports.createVNode("div", {
                              key: notification.type,
                              class: "cursor-pointer rounded-lg p-2"
                            }, [
                              vueExports.createVNode(_sfc_main$6, {
                                modelValue: vueExports.unref(updateSettingsForm).often_type,
                                "onUpdate:modelValue": ($event) => vueExports.unref(updateSettingsForm).often_type = $event,
                                "input-id": String(notification.type),
                                name: String(notification.type),
                                disabled: !vueExports.unref(updateSettingsForm).email_notifications && !vueExports.unref(updateSettingsForm).sms_notifications && !vueExports.unref(updateSettingsForm).messenger_notifications,
                                value: notification.type
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "disabled", "value"]),
                              vueExports.createVNode("label", {
                                class: ["text-mob-small-reg cursor-pointer pl-3", {
                                  "text-additional": !vueExports.unref(updateSettingsForm).email_notifications && !vueExports.unref(updateSettingsForm).sms_notifications && !vueExports.unref(updateSettingsForm).messenger_notifications
                                }],
                                for: notification.type
                              }, vueExports.toDisplayString(notification.name), 11, ["for"])
                            ]);
                          }), 64))
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["error"]),
                  vueExports.createVNode(vueExports.unref(VButton), {
                    type: "submit",
                    class: "w-fit",
                    label: "Сохранить изменения"
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Form), {
        id: "change-email",
        resolver: vueExports.unref(changePasswordResolver),
        "initial-values": vueExports.unref(changePasswordForm),
        "validate-on-blur": "",
        "validate-on-value-update": false,
        class: "flex flex-col gap-4",
        onSubmit: onChangePassword
      }, {
        default: vueExports.withCtx(($form, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            _push2(`<h2 class="text-small-medium mt-8"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.auth.user.is_have_password ? "Смена пароля" : "Установка пароля")}</h2><div class="flex flex-col gap-2"${_scopeId}>`);
            if (_ctx.auth.user.is_have_password) {
              _push2(`<div${_scopeId}><label for="password"${_scopeId}><span${_scopeId}>Введите старый пароль</span></label></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex flex-col items-start justify-between gap-4 md:flex-row"${_scopeId}>`);
            if (_ctx.auth.user.is_have_password) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                error: ((_b = (_a = $form.old_password) == null ? void 0 : _a.error) == null ? void 0 : _b.message) ?? vueExports.unref(changePasswordForm).errors.old_password,
                class: "flex w-full flex-col justify-between"
              }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
                      modelValue: vueExports.unref(changePasswordForm).old_password,
                      "onUpdate:modelValue": ($event) => vueExports.unref(changePasswordForm).old_password = $event,
                      placeholder: "Старый пароль",
                      "input-props": { autocomplete: "new-password", required: true },
                      name: "old_password",
                      feedback: false,
                      "toggle-mask": "",
                      fluid: "",
                      invalid: !!vueExports.unref(changePasswordForm).errors.old_password
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(_sfc_main$7, {
                        modelValue: vueExports.unref(changePasswordForm).old_password,
                        "onUpdate:modelValue": ($event) => vueExports.unref(changePasswordForm).old_password = $event,
                        placeholder: "Старый пароль",
                        "input-props": { autocomplete: "new-password", required: true },
                        name: "old_password",
                        feedback: false,
                        "toggle-mask": "",
                        fluid: "",
                        invalid: !!vueExports.unref(changePasswordForm).errors.old_password
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              error: ((_d = (_c = $form.password) == null ? void 0 : _c.error) == null ? void 0 : _d.message) ?? vueExports.unref(changePasswordForm).errors.password,
              class: "w-full"
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
                    modelValue: vueExports.unref(changePasswordForm).password,
                    "onUpdate:modelValue": ($event) => vueExports.unref(changePasswordForm).password = $event,
                    placeholder: "Новый пароль",
                    "input-props": { autocomplete: "new-password", required: true },
                    name: "password",
                    feedback: false,
                    "toggle-mask": "",
                    fluid: "",
                    invalid: !!vueExports.unref(changePasswordForm).errors.password
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_sfc_main$7, {
                      modelValue: vueExports.unref(changePasswordForm).password,
                      "onUpdate:modelValue": ($event) => vueExports.unref(changePasswordForm).password = $event,
                      placeholder: "Новый пароль",
                      "input-props": { autocomplete: "new-password", required: true },
                      name: "password",
                      feedback: false,
                      "toggle-mask": "",
                      fluid: "",
                      invalid: !!vueExports.unref(changePasswordForm).errors.password
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="w-full"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              error: ((_f = (_e = $form.password_confirmation) == null ? void 0 : _e.error) == null ? void 0 : _f.message) ?? vueExports.unref(changePasswordForm).errors.password_confirmation,
              class: "w-full"
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
                    modelValue: vueExports.unref(changePasswordForm).password_confirmation,
                    "onUpdate:modelValue": ($event) => vueExports.unref(changePasswordForm).password_confirmation = $event,
                    placeholder: "Подтверждение пароля",
                    "input-props": { autocomplete: "new-password", required: true },
                    name: "password_confirmation",
                    "toggle-mask": "",
                    feedback: false,
                    fluid: "",
                    invalid: !!vueExports.unref(changePasswordForm).errors.password_confirmation
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_sfc_main$7, {
                      modelValue: vueExports.unref(changePasswordForm).password_confirmation,
                      "onUpdate:modelValue": ($event) => vueExports.unref(changePasswordForm).password_confirmation = $event,
                      placeholder: "Подтверждение пароля",
                      "input-props": { autocomplete: "new-password", required: true },
                      name: "password_confirmation",
                      "toggle-mask": "",
                      feedback: false,
                      fluid: "",
                      invalid: !!vueExports.unref(changePasswordForm).errors.password_confirmation
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
              type: "submit",
              label: `${_ctx.auth.user.is_have_password ? "Сменить" : "Установить"} пароль`,
              class: "w-fit"
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode("h2", { class: "text-small-medium mt-8" }, vueExports.toDisplayString(_ctx.auth.user.is_have_password ? "Смена пароля" : "Установка пароля"), 1),
              vueExports.createVNode("div", { class: "flex flex-col gap-2" }, [
                _ctx.auth.user.is_have_password ? (vueExports.openBlock(), vueExports.createBlock("div", { key: 0 }, [
                  vueExports.createVNode("label", { for: "password" }, [
                    vueExports.createVNode("span", null, "Введите старый пароль")
                  ])
                ])) : vueExports.createCommentVNode("", true),
                vueExports.createVNode("div", { class: "flex flex-col items-start justify-between gap-4 md:flex-row" }, [
                  _ctx.auth.user.is_have_password ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$2), {
                    key: 0,
                    error: ((_h = (_g = $form.old_password) == null ? void 0 : _g.error) == null ? void 0 : _h.message) ?? vueExports.unref(changePasswordForm).errors.old_password,
                    class: "flex w-full flex-col justify-between"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_sfc_main$7, {
                        modelValue: vueExports.unref(changePasswordForm).old_password,
                        "onUpdate:modelValue": ($event) => vueExports.unref(changePasswordForm).old_password = $event,
                        placeholder: "Старый пароль",
                        "input-props": { autocomplete: "new-password", required: true },
                        name: "old_password",
                        feedback: false,
                        "toggle-mask": "",
                        fluid: "",
                        invalid: !!vueExports.unref(changePasswordForm).errors.old_password
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                    ]),
                    _: 2
                  }, 1032, ["error"])) : vueExports.createCommentVNode("", true),
                  vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                    error: ((_j = (_i = $form.password) == null ? void 0 : _i.error) == null ? void 0 : _j.message) ?? vueExports.unref(changePasswordForm).errors.password,
                    class: "w-full"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_sfc_main$7, {
                        modelValue: vueExports.unref(changePasswordForm).password,
                        "onUpdate:modelValue": ($event) => vueExports.unref(changePasswordForm).password = $event,
                        placeholder: "Новый пароль",
                        "input-props": { autocomplete: "new-password", required: true },
                        name: "password",
                        feedback: false,
                        "toggle-mask": "",
                        fluid: "",
                        invalid: !!vueExports.unref(changePasswordForm).errors.password
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                    ]),
                    _: 2
                  }, 1032, ["error"]),
                  vueExports.createVNode("div", { class: "w-full" }, [
                    vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                      error: ((_l = (_k = $form.password_confirmation) == null ? void 0 : _k.error) == null ? void 0 : _l.message) ?? vueExports.unref(changePasswordForm).errors.password_confirmation,
                      class: "w-full"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(_sfc_main$7, {
                          modelValue: vueExports.unref(changePasswordForm).password_confirmation,
                          "onUpdate:modelValue": ($event) => vueExports.unref(changePasswordForm).password_confirmation = $event,
                          placeholder: "Подтверждение пароля",
                          "input-props": { autocomplete: "new-password", required: true },
                          name: "password_confirmation",
                          "toggle-mask": "",
                          feedback: false,
                          fluid: "",
                          invalid: !!vueExports.unref(changePasswordForm).errors.password_confirmation
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                      ]),
                      _: 2
                    }, 1032, ["error"])
                  ])
                ])
              ]),
              vueExports.createVNode(vueExports.unref(VButton), {
                type: "submit",
                label: `${_ctx.auth.user.is_have_password ? "Сменить" : "Установить"} пароль`,
                class: "w-fit"
              }, null, 8, ["label"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Form), {
        resolver: vueExports.unref(changeEmailResolver),
        "initial-values": vueExports.unref(changeEmailForm),
        "validate-on-blur": "",
        "validate-on-value-update": false,
        class: "flex flex-col gap-4",
        onSubmit: onEmailChange
      }, {
        default: vueExports.withCtx(($form, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<h2 class="text-small-medium mt-8"${_scopeId}>Смена почты</h2><div class="flex flex-col gap-2"${_scopeId}><div class="grid grid-cols-1 items-start justify-between gap-4 md:grid-cols-2"${_scopeId}>`);
            if (_ctx.auth.user.is_have_password) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                error: ((_b = (_a = $form.password) == null ? void 0 : _a.error) == null ? void 0 : _b.message) ?? vueExports.unref(changeEmailForm).errors.password,
                class: "flex w-full flex-col justify-between"
              }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<label for="password"${_scopeId2}><span${_scopeId2}>Введите пароль</span></label>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
                      modelValue: vueExports.unref(changeEmailForm).password,
                      "onUpdate:modelValue": ($event) => vueExports.unref(changeEmailForm).password = $event,
                      placeholder: "Ваш пароль",
                      "input-props": { autocomplete: "new-password", required: true },
                      name: "old_password",
                      feedback: false,
                      "toggle-mask": "",
                      fluid: "",
                      class: "mt-2",
                      invalid: !!vueExports.unref(changeEmailForm).errors.password
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode("label", { for: "password" }, [
                        vueExports.createVNode("span", null, "Введите пароль")
                      ]),
                      vueExports.createVNode(_sfc_main$7, {
                        modelValue: vueExports.unref(changeEmailForm).password,
                        "onUpdate:modelValue": ($event) => vueExports.unref(changeEmailForm).password = $event,
                        placeholder: "Ваш пароль",
                        "input-props": { autocomplete: "new-password", required: true },
                        name: "old_password",
                        feedback: false,
                        "toggle-mask": "",
                        fluid: "",
                        class: "mt-2",
                        invalid: !!vueExports.unref(changeEmailForm).errors.password
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="w-full"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              error: ((_d = (_c = $form.email) == null ? void 0 : _c.error) == null ? void 0 : _d.message) ?? vueExports.unref(changeEmailForm).errors.email,
              class: "flex w-full flex-col justify-between gap-3"
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<label for="email"${_scopeId2}> Введите новый e-mail, он будет указан в личном кабинете </label>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$8, {
                    modelValue: vueExports.unref(changeEmailForm).email,
                    "onUpdate:modelValue": ($event) => vueExports.unref(changeEmailForm).email = $event,
                    placeholder: "Введите новый email",
                    name: "email",
                    type: "email",
                    fluid: "",
                    invalid: !!vueExports.unref(changeEmailForm).errors.email
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode("label", { for: "email" }, " Введите новый e-mail, он будет указан в личном кабинете "),
                    vueExports.createVNode(_sfc_main$8, {
                      modelValue: vueExports.unref(changeEmailForm).email,
                      "onUpdate:modelValue": ($event) => vueExports.unref(changeEmailForm).email = $event,
                      placeholder: "Введите новый email",
                      name: "email",
                      type: "email",
                      fluid: "",
                      invalid: !!vueExports.unref(changeEmailForm).errors.email
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
              type: "submit",
              label: "Сменить почту",
              class: "w-fit"
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode("h2", { class: "text-small-medium mt-8" }, "Смена почты"),
              vueExports.createVNode("div", { class: "flex flex-col gap-2" }, [
                vueExports.createVNode("div", { class: "grid grid-cols-1 items-start justify-between gap-4 md:grid-cols-2" }, [
                  _ctx.auth.user.is_have_password ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$2), {
                    key: 0,
                    error: ((_f = (_e = $form.password) == null ? void 0 : _e.error) == null ? void 0 : _f.message) ?? vueExports.unref(changeEmailForm).errors.password,
                    class: "flex w-full flex-col justify-between"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("label", { for: "password" }, [
                        vueExports.createVNode("span", null, "Введите пароль")
                      ]),
                      vueExports.createVNode(_sfc_main$7, {
                        modelValue: vueExports.unref(changeEmailForm).password,
                        "onUpdate:modelValue": ($event) => vueExports.unref(changeEmailForm).password = $event,
                        placeholder: "Ваш пароль",
                        "input-props": { autocomplete: "new-password", required: true },
                        name: "old_password",
                        feedback: false,
                        "toggle-mask": "",
                        fluid: "",
                        class: "mt-2",
                        invalid: !!vueExports.unref(changeEmailForm).errors.password
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                    ]),
                    _: 2
                  }, 1032, ["error"])) : vueExports.createCommentVNode("", true),
                  vueExports.createVNode("div", { class: "w-full" }, [
                    vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                      error: ((_h = (_g = $form.email) == null ? void 0 : _g.error) == null ? void 0 : _h.message) ?? vueExports.unref(changeEmailForm).errors.email,
                      class: "flex w-full flex-col justify-between gap-3"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("label", { for: "email" }, " Введите новый e-mail, он будет указан в личном кабинете "),
                        vueExports.createVNode(_sfc_main$8, {
                          modelValue: vueExports.unref(changeEmailForm).email,
                          "onUpdate:modelValue": ($event) => vueExports.unref(changeEmailForm).email = $event,
                          placeholder: "Введите новый email",
                          name: "email",
                          type: "email",
                          fluid: "",
                          invalid: !!vueExports.unref(changeEmailForm).errors.email
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                      ]),
                      _: 2
                    }, 1032, ["error"])
                  ])
                ])
              ]),
              vueExports.createVNode(vueExports.unref(VButton), {
                type: "submit",
                label: "Сменить почту",
                class: "w-fit"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Form), {
        id: "change-number",
        resolver: vueExports.unref(changePhoneResolver),
        "initial-values": vueExports.unref(changePhoneForm),
        "validate-on-blur": "",
        "validate-on-value-update": false,
        class: "flex flex-col gap-4",
        onSubmit: onPhoneChange
      }, {
        default: vueExports.withCtx(($form, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<h2 class="text-small-medium mt-8"${_scopeId}>Смена номера</h2><div class="flex flex-col gap-4"${_scopeId}><div class="flex flex-col items-start justify-between gap-4 md:flex-row"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              error: ((_b = (_a = $form.phone) == null ? void 0 : _a.error) == null ? void 0 : _b.message) ?? vueExports.unref(changePhoneForm).errors.phone,
              class: "flex w-full flex-col justify-between gap-3"
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<label for="phone"${_scopeId2}> Введите новый номер телефона, он будет указан в личном кабинете </label>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, {
                    modelValue: vueExports.unref(changePhoneForm).phone,
                    "onUpdate:modelValue": ($event) => vueExports.unref(changePhoneForm).phone = $event,
                    mask: "+7 (999) 999-99-99",
                    name: "phone",
                    unmask: "",
                    placeholder: "+7 (000) 000-00-00",
                    fluid: "",
                    invalid: !!vueExports.unref(changePhoneForm).errors.phone,
                    autocomplete: "phone",
                    class: "max-w-[540px]"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode("label", { for: "phone" }, " Введите новый номер телефона, он будет указан в личном кабинете "),
                    vueExports.createVNode(_sfc_main$9, {
                      modelValue: vueExports.unref(changePhoneForm).phone,
                      "onUpdate:modelValue": ($event) => vueExports.unref(changePhoneForm).phone = $event,
                      mask: "+7 (999) 999-99-99",
                      name: "phone",
                      unmask: "",
                      placeholder: "+7 (000) 000-00-00",
                      fluid: "",
                      invalid: !!vueExports.unref(changePhoneForm).errors.phone,
                      autocomplete: "phone",
                      class: "max-w-[540px]"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
              type: "submit",
              label: "Сменить номер",
              class: "w-fit text-nowrap"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vueExports.createVNode("h2", { class: "text-small-medium mt-8" }, "Смена номера"),
              vueExports.createVNode("div", { class: "flex flex-col gap-4" }, [
                vueExports.createVNode("div", { class: "flex flex-col items-start justify-between gap-4 md:flex-row" }, [
                  vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                    error: ((_d = (_c = $form.phone) == null ? void 0 : _c.error) == null ? void 0 : _d.message) ?? vueExports.unref(changePhoneForm).errors.phone,
                    class: "flex w-full flex-col justify-between gap-3"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("label", { for: "phone" }, " Введите новый номер телефона, он будет указан в личном кабинете "),
                      vueExports.createVNode(_sfc_main$9, {
                        modelValue: vueExports.unref(changePhoneForm).phone,
                        "onUpdate:modelValue": ($event) => vueExports.unref(changePhoneForm).phone = $event,
                        mask: "+7 (999) 999-99-99",
                        name: "phone",
                        unmask: "",
                        placeholder: "+7 (000) 000-00-00",
                        fluid: "",
                        invalid: !!vueExports.unref(changePhoneForm).errors.phone,
                        autocomplete: "phone",
                        class: "max-w-[540px]"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                    ]),
                    _: 2
                  }, 1032, ["error"])
                ]),
                vueExports.createVNode(vueExports.unref(VButton), {
                  type: "submit",
                  label: "Сменить номер",
                  class: "w-fit text-nowrap"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$a, {
        visible: isCheckCodeOpen.value,
        "onUpdate:visible": ($event) => isCheckCodeOpen.value = $event,
        draggable: false,
        modal: "",
        class: "md:w-100",
        onHide: ($event) => vueExports.unref(checkCodeForm).reset()
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-default-bold text-center"${_scopeId}>Смена номера</h2>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Form), {
              resolver: vueExports.unref(checkCodeResolver),
              class: "mt-3 flex flex-col gap-6",
              onSubmit: onCheckCode
            }, {
              default: vueExports.withCtx(($form, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d;
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                    error: ((_b = (_a = $form.code) == null ? void 0 : _a.error) == null ? void 0 : _b.message) || vueExports.unref(checkCodeForm).errors.code
                  }, {
                    default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<label for="code" class="text-mob-small-reg"${_scopeId3}>Введите код подтверждения</label>`);
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$b), {
                          modelValue: vueExports.unref(checkCodeForm).code,
                          "onUpdate:modelValue": ($event) => vueExports.unref(checkCodeForm).code = $event,
                          name: "code"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode("label", {
                            for: "code",
                            class: "text-mob-small-reg"
                          }, "Введите код подтверждения"),
                          vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                            modelValue: vueExports.unref(checkCodeForm).code,
                            "onUpdate:modelValue": ($event) => vueExports.unref(checkCodeForm).code = $event,
                            name: "code"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                    type: "submit",
                    label: "Подтвердить смену номера"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                      error: ((_d = (_c = $form.code) == null ? void 0 : _c.error) == null ? void 0 : _d.message) || vueExports.unref(checkCodeForm).errors.code
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("label", {
                          for: "code",
                          class: "text-mob-small-reg"
                        }, "Введите код подтверждения"),
                        vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                          modelValue: vueExports.unref(checkCodeForm).code,
                          "onUpdate:modelValue": ($event) => vueExports.unref(checkCodeForm).code = $event,
                          name: "code"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["error"]),
                    vueExports.createVNode(vueExports.unref(VButton), {
                      type: "submit",
                      label: "Подтвердить смену номера"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$c, {
              size: "large",
              rounded: "",
              fluid: "",
              class: "mt-2",
              disabled: vueExports.unref(isActive),
              loading: vueExports.unref(changePhoneForm).processing,
              onClick: refreshCode
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Отравить код повторно ${serverRenderer_cjs_prodExports.ssrInterpolate(timer.value)}`);
                } else {
                  return [
                    vueExports.createTextVNode(" Отравить код повторно " + vueExports.toDisplayString(timer.value), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode("h2", { class: "text-default-bold text-center" }, "Смена номера"),
              vueExports.createVNode(vueExports.unref(Form), {
                resolver: vueExports.unref(checkCodeResolver),
                class: "mt-3 flex flex-col gap-6",
                onSubmit: onCheckCode
              }, {
                default: vueExports.withCtx(($form) => {
                  var _a, _b;
                  return [
                    vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                      error: ((_b = (_a = $form.code) == null ? void 0 : _a.error) == null ? void 0 : _b.message) || vueExports.unref(checkCodeForm).errors.code
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("label", {
                          for: "code",
                          class: "text-mob-small-reg"
                        }, "Введите код подтверждения"),
                        vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                          modelValue: vueExports.unref(checkCodeForm).code,
                          "onUpdate:modelValue": ($event) => vueExports.unref(checkCodeForm).code = $event,
                          name: "code"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["error"]),
                    vueExports.createVNode(vueExports.unref(VButton), {
                      type: "submit",
                      label: "Подтвердить смену номера"
                    })
                  ];
                }),
                _: 1
              }, 8, ["resolver"]),
              vueExports.createVNode(_sfc_main$c, {
                size: "large",
                rounded: "",
                fluid: "",
                class: "mt-2",
                disabled: vueExports.unref(isActive),
                loading: vueExports.unref(changePhoneForm).processing,
                onClick: refreshCode
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createTextVNode(" Отравить код повторно " + vueExports.toDisplayString(timer.value), 1)
                ]),
                _: 1
              }, 8, ["disabled", "loading"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="rounded-20 bg-filling mt-8 p-4"><h2 class="text-small-medium">Удаление аккаунта</h2><p class="text-mob-small-reg mt-0.5">Карта лояльности будет аннулирована, данные удалены безвозвратно</p>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
        href: _ctx.route("user.profile.delete.page")
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
              label: "Удалить аккаунт",
              variant: "delete",
              class: "mt-4"
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(VButton), {
                label: "Удалить аккаунт",
                variant: "delete",
                class: "mt-4"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/profile/profile-settings/ui/ProfileSettings.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
