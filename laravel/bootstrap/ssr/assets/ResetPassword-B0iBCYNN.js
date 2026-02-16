import { v as vueExports, c as useForm, s as serverRenderer_cjs_prodExports, e as _sfc_main$1, w as _sfc_main$2, a as VButton, l as link_default } from "../ssr.js";
import { Form } from "@primevue/forms";
import { z } from "zod";
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
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: {},
    token: {}
  },
  setup(__props) {
    const props = __props;
    const resetPasswordSchema = z.object({
      token: z.string(),
      email: z.string().email("Введите валидный e-mail"),
      password: z.string({ required_error: "Обязательное поле" }).superRefine((val, ctx) => {
        if (val.length < 8) {
          ctx.addIssue({
            code: z.ZodIssueCode.too_small,
            minimum: 8,
            type: "string",
            inclusive: true,
            message: "Минимум 8 символов"
          });
          return;
        }
        const regex = /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)(?=.*[^A-Za-zА-Яа-яЁё0-9]).{8,}$/u;
        if (!regex.test(val)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ"
          });
        }
      }),
      password_confirmation: z.string({ required_error: "Обязательное поле" }).min(8, "Минимум 8 символов")
    }).refine((data) => data.password === data.password_confirmation, {
      message: "Указанный пароль не совпадает",
      path: ["password_confirmation"]
    });
    const resetPasswordForm = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const validateField = (name) => {
      const partialData = { ...resetPasswordForm.data() };
      const result = resetPasswordSchema.safeParse(partialData);
      resetPasswordForm.clearErrors(name);
      if (!result.success) {
        for (const issue of result.error.issues) {
          if (issue.path[0] === name) {
            resetPasswordForm.setError({ [name]: issue.message });
          }
        }
      }
    };
    const onSubmit = async () => {
      const result = resetPasswordSchema.safeParse(resetPasswordForm.data());
      resetPasswordForm.clearErrors();
      if (!result.success) {
        const fieldErrors = {};
        for (const err of result.error.issues) {
          const field = err.path[0];
          fieldErrors[field] = err.message;
        }
        resetPasswordForm.setError(fieldErrors);
        return;
      }
      resetPasswordForm.post(route("password.store"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "my-20 flex flex-col items-center justify-center" }, _attrs))}><div class="border-text flex max-w-110 flex-1 flex-col gap-6 rounded-[30px] border p-8">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Form), {
        id: "reset-password-form",
        "initial-values": vueExports.unref(resetPasswordForm),
        "validate-on-blur": "",
        "validate-on-value-update": false,
        class: "flex flex-col gap-6",
        onSubmit
      }, {
        default: vueExports.withCtx(($form, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<div class="text-center"${_scopeId}><h1 class="text-heavy-bold"${_scopeId}>Восстановление пароля</h1><p class="text-mob-small-reg mt-2"${_scopeId}>Придумайте новый пароль</p></div><div${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
              error: ((_b = (_a = $form.password) == null ? void 0 : _a.error) == null ? void 0 : _b.message) ?? vueExports.unref(resetPasswordForm).errors.password
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c2, _d2;
                if (_push3) {
                  _push3(`<label for="password" class="text-subsidiary-reg"${_scopeId2}> Обратите внимание, он должен состоять из минимум 8 символов. И содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ. </label>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
                    modelValue: vueExports.unref(resetPasswordForm).password,
                    "onUpdate:modelValue": ($event) => vueExports.unref(resetPasswordForm).password = $event,
                    placeholder: "Пароль",
                    "input-props": { autocomplete: "new-password", required: true },
                    name: "password",
                    feedback: false,
                    "toggle-mask": "",
                    fluid: "",
                    class: "mt-2",
                    invalid: !!vueExports.unref(resetPasswordForm).errors.password || !!((_b2 = (_a2 = $form.password) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message),
                    onBlur: ($event) => validateField("password")
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode("label", {
                      for: "password",
                      class: "text-subsidiary-reg"
                    }, " Обратите внимание, он должен состоять из минимум 8 символов. И содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ. "),
                    vueExports.createVNode(_sfc_main$2, {
                      modelValue: vueExports.unref(resetPasswordForm).password,
                      "onUpdate:modelValue": ($event) => vueExports.unref(resetPasswordForm).password = $event,
                      placeholder: "Пароль",
                      "input-props": { autocomplete: "new-password", required: true },
                      name: "password",
                      feedback: false,
                      "toggle-mask": "",
                      fluid: "",
                      class: "mt-2",
                      invalid: !!vueExports.unref(resetPasswordForm).errors.password || !!((_d2 = (_c2 = $form.password) == null ? void 0 : _c2.error) == null ? void 0 : _d2.message),
                      onBlur: ($event) => validateField("password")
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid", "onBlur"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
              error: ((_d = (_c = $form.password_confirmation) == null ? void 0 : _c.error) == null ? void 0 : _d.message) ?? vueExports.unref(resetPasswordForm).errors.password_confirmation
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c2, _d2;
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
                    modelValue: vueExports.unref(resetPasswordForm).password_confirmation,
                    "onUpdate:modelValue": ($event) => vueExports.unref(resetPasswordForm).password_confirmation = $event,
                    placeholder: "Подтверждение пароля",
                    "input-props": { autocomplete: "new-password", required: true },
                    name: "password_confirmation",
                    feedback: false,
                    "toggle-mask": "",
                    fluid: "",
                    class: "mt-2",
                    invalid: !!vueExports.unref(resetPasswordForm).errors.password_confirmation || !!((_b2 = (_a2 = $form.password_confirmation) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message),
                    onBlur: ($event) => validateField("password_confirmation")
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_sfc_main$2, {
                      modelValue: vueExports.unref(resetPasswordForm).password_confirmation,
                      "onUpdate:modelValue": ($event) => vueExports.unref(resetPasswordForm).password_confirmation = $event,
                      placeholder: "Подтверждение пароля",
                      "input-props": { autocomplete: "new-password", required: true },
                      name: "password_confirmation",
                      feedback: false,
                      "toggle-mask": "",
                      fluid: "",
                      class: "mt-2",
                      invalid: !!vueExports.unref(resetPasswordForm).errors.password_confirmation || !!((_d2 = (_c2 = $form.password_confirmation) == null ? void 0 : _c2.error) == null ? void 0 : _d2.message),
                      onBlur: ($event) => validateField("password_confirmation")
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid", "onBlur"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
              label: "Восстановить пароль",
              type: "submit"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
              href: _ctx.route("main-page")
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                    label: "Вернуться на главную",
                    type: "button",
                    variant: "outline",
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(VButton), {
                      label: "Вернуться на главную",
                      type: "button",
                      variant: "outline",
                      class: "w-full"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`<div class="text-mob-small-reg text-additional text-center"${_scopeId}><p${_scopeId}>Ваши данные надёжно защищены.</p>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
              href: "#",
              class: "underline"
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Политика безопасности`);
                } else {
                  return [
                    vueExports.createTextVNode("Политика безопасности")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "text-center" }, [
                vueExports.createVNode("h1", { class: "text-heavy-bold" }, "Восстановление пароля"),
                vueExports.createVNode("p", { class: "text-mob-small-reg mt-2" }, "Придумайте новый пароль")
              ]),
              vueExports.createVNode("div", null, [
                vueExports.createVNode(vueExports.unref(_sfc_main$1), {
                  error: ((_f = (_e = $form.password) == null ? void 0 : _e.error) == null ? void 0 : _f.message) ?? vueExports.unref(resetPasswordForm).errors.password
                }, {
                  default: vueExports.withCtx(() => {
                    var _a2, _b2;
                    return [
                      vueExports.createVNode("label", {
                        for: "password",
                        class: "text-subsidiary-reg"
                      }, " Обратите внимание, он должен состоять из минимум 8 символов. И содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ. "),
                      vueExports.createVNode(_sfc_main$2, {
                        modelValue: vueExports.unref(resetPasswordForm).password,
                        "onUpdate:modelValue": ($event) => vueExports.unref(resetPasswordForm).password = $event,
                        placeholder: "Пароль",
                        "input-props": { autocomplete: "new-password", required: true },
                        name: "password",
                        feedback: false,
                        "toggle-mask": "",
                        fluid: "",
                        class: "mt-2",
                        invalid: !!vueExports.unref(resetPasswordForm).errors.password || !!((_b2 = (_a2 = $form.password) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message),
                        onBlur: ($event) => validateField("password")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid", "onBlur"])
                    ];
                  }),
                  _: 2
                }, 1032, ["error"]),
                vueExports.createVNode(vueExports.unref(_sfc_main$1), {
                  error: ((_h = (_g = $form.password_confirmation) == null ? void 0 : _g.error) == null ? void 0 : _h.message) ?? vueExports.unref(resetPasswordForm).errors.password_confirmation
                }, {
                  default: vueExports.withCtx(() => {
                    var _a2, _b2;
                    return [
                      vueExports.createVNode(_sfc_main$2, {
                        modelValue: vueExports.unref(resetPasswordForm).password_confirmation,
                        "onUpdate:modelValue": ($event) => vueExports.unref(resetPasswordForm).password_confirmation = $event,
                        placeholder: "Подтверждение пароля",
                        "input-props": { autocomplete: "new-password", required: true },
                        name: "password_confirmation",
                        feedback: false,
                        "toggle-mask": "",
                        fluid: "",
                        class: "mt-2",
                        invalid: !!vueExports.unref(resetPasswordForm).errors.password_confirmation || !!((_b2 = (_a2 = $form.password_confirmation) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message),
                        onBlur: ($event) => validateField("password_confirmation")
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid", "onBlur"])
                    ];
                  }),
                  _: 2
                }, 1032, ["error"])
              ]),
              vueExports.createVNode(vueExports.unref(VButton), {
                label: "Восстановить пароль",
                type: "submit"
              }),
              vueExports.createVNode(vueExports.unref(link_default), {
                href: _ctx.route("main-page")
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(VButton), {
                    label: "Вернуться на главную",
                    type: "button",
                    variant: "outline",
                    class: "w-full"
                  })
                ]),
                _: 1
              }, 8, ["href"]),
              vueExports.createVNode("div", { class: "text-mob-small-reg text-additional text-center" }, [
                vueExports.createVNode("p", null, "Ваши данные надёжно защищены."),
                vueExports.createVNode(vueExports.unref(link_default), {
                  href: "#",
                  class: "underline"
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createTextVNode("Политика безопасности")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/back/Auth/ResetPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
