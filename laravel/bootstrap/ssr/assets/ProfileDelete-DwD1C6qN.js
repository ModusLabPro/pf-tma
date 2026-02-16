import { v as vueExports, al as _sfc_main$1, c as useForm, s as serverRenderer_cjs_prodExports, e as _sfc_main$2, L as _sfc_main$3, i as _sfc_main$4, w as _sfc_main$5, j as _sfc_main$6, l as link_default, a as VButton, d as _sfc_main$7 } from "../ssr.js";
import { Form } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
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
const _hoisted_1 = {
  width: "46",
  height: "46",
  viewBox: "0 0 46 46",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    vueExports.createStaticVNode('<g clip-path="url(#clip0_4367_155754)"><path d="M23 40.25C32.5269 40.25 40.25 32.5269 40.25 23C40.25 13.4731 32.5269 5.75 23 5.75C13.4731 5.75 5.75 13.4731 5.75 23C5.75 32.5269 13.4731 40.25 23 40.25Z" fill="#F04E27"></path><path d="M23 24.4375V14.375" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23 33.0625C24.1909 33.0625 25.1562 32.0971 25.1562 30.9062C25.1562 29.7154 24.1909 28.75 23 28.75C21.8091 28.75 20.8438 29.7154 20.8438 30.9062C20.8438 32.0971 21.8091 33.0625 23 33.0625Z" fill="white"></path></g><defs><clipPath id="clip0_4367_155754"><rect width="46" height="46" fill="white"></rect></clipPath></defs>', 2)
  ]));
}
const IconWarningCircle = { render };
const profileDeleteSchema = z.object({
  reason: z.enum(["have_any_account", "data_security", "lots_of_ads", "another"]),
  comment: z.string().optional(),
  password: z.string({ required_error: "Обязательное поле" }).min(8, "Не менее 8 символов").regex(
    /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)(?=.*[^A-Za-zА-Яа-яЁё0-9]).{8,}$/u,
    "Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ"
  ),
  agreement: z.boolean().refine((val) => val, {
    message: "Обязательное поле",
    path: ["agreement"]
  })
}).superRefine((data, ctx) => {
  if (data.reason === "another" && (!data.comment || data.comment.trim() === "")) {
    console.log("reason found");
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["comment"],
      message: "Укажите вашу причину удаления аккаунта"
    });
  }
});
const profileDeleteResolver = zodResolver(profileDeleteSchema);
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  ...{
    layout: _sfc_main$1
  },
  __name: "ProfileDelete",
  __ssrInlineRender: true,
  props: {
    errors: {},
    auth: {}
  },
  setup(__props) {
    const props = __props;
    const localErrors = vueExports.ref({ ...props.errors });
    const profileDeleteForm = useForm({
      reason: "have_any_account",
      comment: "",
      password: "",
      agreement: false
    });
    const deleteReasons = [
      {
        name: "У меня есть другой аккаунт",
        reason: "have_any_account"
      },
      {
        name: "Меня беспокоит безопасность моих данных",
        reason: "data_security"
      },
      {
        name: "Слишком много рекламы",
        reason: "lots_of_ads"
      }
    ];
    const isConfirmModalOpen = vueExports.ref(false);
    vueExports.watch(
      () => profileDeleteForm.reason,
      () => {
        profileDeleteForm.clearErrors("comment");
      }
    );
    const onProfileDelete = ({ valid }) => {
      if (valid) {
        isConfirmModalOpen.value = true;
      }
    };
    const confirmDelete = () => {
      profileDeleteForm.post(route("user.profile.delete"), {
        onFinish: () => {
          isConfirmModalOpen.value = false;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "flex w-full flex-col gap-6 max-md:p-6 md:gap-8" }, _attrs))}><h1 class="text-default-bold">Удаление аккаунта</h1><div class="flex items-center gap-2 rounded-2xl bg-[#F04E2714] p-3">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconWarningCircle), { class: "h-8 w-8 shrink-0 md:h-12 md:w-12" }, null, _parent));
      _push(`<div><p class="text-complimentary-reg md:text-mob-small-reg">Нам очень жаль, что вы решили удалить свою учетную запись</p><p class="text-complimentary-bold md:text-mob-small-bold"> Ваша карта лояльности и весь связанный с ней контент, история заказов и личные данные будут безвозвратно удалены в течение 24 часов. </p></div></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Form), {
        resolver: vueExports.unref(profileDeleteResolver),
        "initial-values": vueExports.unref(profileDeleteForm),
        "validate-on-blur": "",
        "validate-on-value-update": false,
        class: "flex flex-col gap-4",
        onSubmit: onProfileDelete
      }, {
        default: vueExports.withCtx(($form, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<div${_scopeId}><p class="text-mob-small-medium"${_scopeId}>Пожалуйста, выберите причину удаления аккаунта</p><p class="text-subsidiary-reg text-additional mt-0.5"${_scopeId}>Это поможет нам стать лучше</p></div><div class="flex flex-col gap-2"${_scopeId}><div class="border-b-filling border-b pb-4"${_scopeId}><div class="flex flex-col justify-between lg:flex-row"${_scopeId}><div class="flex flex-col gap-2"${_scopeId}><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(deleteReasons, (reason) => {
              var _a2, _b2;
              _push2(`<div${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                error: ((_b2 = (_a2 = $form.reason) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message) || vueExports.unref(profileDeleteForm).errors.reason
              }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-2"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                      modelValue: vueExports.unref(profileDeleteForm).reason,
                      "onUpdate:modelValue": ($event) => vueExports.unref(profileDeleteForm).reason = $event,
                      "input-id": String(reason.reason),
                      name: String(reason.reason),
                      value: reason.reason
                    }, null, _parent3, _scopeId2));
                    _push3(`<label${serverRenderer_cjs_prodExports.ssrRenderAttr("for", String(reason.reason))}${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(reason.name)}</label></div>`);
                  } else {
                    return [
                      vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                        vueExports.createVNode(_sfc_main$3, {
                          modelValue: vueExports.unref(profileDeleteForm).reason,
                          "onUpdate:modelValue": ($event) => vueExports.unref(profileDeleteForm).reason = $event,
                          "input-id": String(reason.reason),
                          name: String(reason.reason),
                          value: reason.reason
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                        vueExports.createVNode("label", {
                          for: String(reason.reason)
                        }, vueExports.toDisplayString(reason.name), 9, ["for"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div><div class="flex flex-col gap-2 max-lg:mt-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
              modelValue: vueExports.unref(profileDeleteForm).reason,
              "onUpdate:modelValue": ($event) => vueExports.unref(profileDeleteForm).reason = $event,
              "input-id": "another",
              name: "another",
              value: "another"
            }, null, _parent2, _scopeId));
            _push2(`<label for="another"${_scopeId}>Другое</label></div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              error: ((_b = (_a = $form.comment) == null ? void 0 : _a.error) == null ? void 0 : _b.message) || vueExports.unref(profileDeleteForm).errors.comment
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c2, _d2;
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                    modelValue: vueExports.unref(profileDeleteForm).comment,
                    "onUpdate:modelValue": ($event) => vueExports.unref(profileDeleteForm).comment = $event,
                    name: "comment",
                    placeholder: "Ваша причина",
                    invalid: !!vueExports.unref(profileDeleteForm).errors.comment || ((_b2 = (_a2 = $form.comment) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message),
                    class: "resize-none lg:min-w-[540px]"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_sfc_main$4, {
                      modelValue: vueExports.unref(profileDeleteForm).comment,
                      "onUpdate:modelValue": ($event) => vueExports.unref(profileDeleteForm).comment = $event,
                      name: "comment",
                      placeholder: "Ваша причина",
                      invalid: !!vueExports.unref(profileDeleteForm).errors.comment || ((_d2 = (_c2 = $form.comment) == null ? void 0 : _c2.error) == null ? void 0 : _d2.message),
                      class: "resize-none lg:min-w-[540px]"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
            if (_ctx.auth.user.is_have_password) {
              _push2(`<div class="border-b-filling mt-2 border-b pb-4"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                error: ((_d = (_c = $form.password) == null ? void 0 : _c.error) == null ? void 0 : _d.message) || vueExports.unref(profileDeleteForm).errors.password || localErrors.value.password
              }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2, _c2, _d2;
                  if (_push3) {
                    _push3(`<label for="password" class="text-mob-small-medium"${_scopeId2}>В целях безопасности введите ваш пароль</label>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, {
                      modelValue: vueExports.unref(profileDeleteForm).password,
                      "onUpdate:modelValue": ($event) => vueExports.unref(profileDeleteForm).password = $event,
                      placeholder: "Ваш пароль",
                      name: "password",
                      feedback: false,
                      "toggle-mask": "",
                      fluid: "",
                      required: "",
                      class: "mt-4 max-w-[540px]",
                      invalid: !!vueExports.unref(profileDeleteForm).errors.password || ((_b2 = (_a2 = $form.password) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message) || !!localErrors.value.password,
                      onBlur: ($event) => localErrors.value.password = ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode("label", {
                        for: "password",
                        class: "text-mob-small-medium"
                      }, "В целях безопасности введите ваш пароль"),
                      vueExports.createVNode(_sfc_main$5, {
                        modelValue: vueExports.unref(profileDeleteForm).password,
                        "onUpdate:modelValue": ($event) => vueExports.unref(profileDeleteForm).password = $event,
                        placeholder: "Ваш пароль",
                        name: "password",
                        feedback: false,
                        "toggle-mask": "",
                        fluid: "",
                        required: "",
                        class: "mt-4 max-w-[540px]",
                        invalid: !!vueExports.unref(profileDeleteForm).errors.password || ((_d2 = (_c2 = $form.password) == null ? void 0 : _c2.error) == null ? void 0 : _d2.message) || !!localErrors.value.password,
                        onBlur: ($event) => localErrors.value.password = ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid", "onBlur"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), null, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="mt-4 flex items-start gap-3"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, {
                      modelValue: vueExports.unref(profileDeleteForm).agreement,
                      "onUpdate:modelValue": ($event) => vueExports.unref(profileDeleteForm).agreement = $event,
                      "input-id": "delete-checkbox",
                      binary: "",
                      size: "small",
                      name: "agreement",
                      required: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`<label for="delete-checkbox" class="text-complimentary-reg text-additional max-w-[380px]"${_scopeId2}>Нажимая на кнопку «Удалить аккаунт» я подтверждаю, что даю согласие на удаление данных и аннулирование карты лояльности</label></div>`);
                  } else {
                    return [
                      vueExports.createVNode("div", { class: "mt-4 flex items-start gap-3" }, [
                        vueExports.createVNode(_sfc_main$6, {
                          modelValue: vueExports.unref(profileDeleteForm).agreement,
                          "onUpdate:modelValue": ($event) => vueExports.unref(profileDeleteForm).agreement = $event,
                          "input-id": "delete-checkbox",
                          binary: "",
                          size: "small",
                          name: "agreement",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        vueExports.createVNode("label", {
                          for: "delete-checkbox",
                          class: "text-complimentary-reg text-additional max-w-[380px]"
                        }, "Нажимая на кнопку «Удалить аккаунт» я подтверждаю, что даю согласие на удаление данных и аннулирование карты лояльности")
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-2"${_scopeId}><p class="text-mob-small-medium max-w-[520px]"${_scopeId}> Как только вы нажмёте кнопку ниже, вы больше не сможете воспользоваться своим аккаунтом. При попытке входа на сайт будет создан новый аккаунт и карта лояльности </p></div></div><div class="flex flex-col gap-2 md:flex-row md:gap-8"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
              href: _ctx.route("user.profile.index")
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                    variant: "outline",
                    label: "Отменить",
                    class: "max-md:w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(VButton), {
                      variant: "outline",
                      label: "Отменить",
                      class: "max-md:w-full"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
              label: "Удалить аккаунт",
              variant: "delete",
              type: "submit"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
              visible: isConfirmModalOpen.value,
              "onUpdate:visible": ($event) => isConfirmModalOpen.value = $event,
              draggable: false,
              modal: "",
              class: "max-md:mx-6 md:w-110"
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0"${_scopeId2}>Удаление аккаунта</h2><p class="text-subsidiary-reg md:text-mob-small-reg mt-3 text-center md:mt-2"${_scopeId2}> Вы действительно хотите удалить аккаунт и потерять все связанные с ним данные? </p><div class="mt-3 flex flex-col gap-2 md:mt-6"${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                    label: "Нет, я передумал",
                    variant: "outline",
                    class: "w-full",
                    onClick: ($event) => isConfirmModalOpen.value = false
                  }, null, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                    label: "Да, удалить аккаунт",
                    variant: "delete",
                    class: "w-full",
                    disabled: vueExports.unref(profileDeleteForm).processing,
                    onClick: confirmDelete
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    vueExports.createVNode("h2", { class: "text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0" }, "Удаление аккаунта"),
                    vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-3 text-center md:mt-2" }, " Вы действительно хотите удалить аккаунт и потерять все связанные с ним данные? "),
                    vueExports.createVNode("div", { class: "mt-3 flex flex-col gap-2 md:mt-6" }, [
                      vueExports.createVNode(vueExports.unref(VButton), {
                        label: "Нет, я передумал",
                        variant: "outline",
                        class: "w-full",
                        onClick: ($event) => isConfirmModalOpen.value = false
                      }, null, 8, ["onClick"]),
                      vueExports.createVNode(vueExports.unref(VButton), {
                        label: "Да, удалить аккаунт",
                        variant: "delete",
                        class: "w-full",
                        disabled: vueExports.unref(profileDeleteForm).processing,
                        onClick: confirmDelete
                      }, null, 8, ["disabled"])
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode("div", null, [
                vueExports.createVNode("p", { class: "text-mob-small-medium" }, "Пожалуйста, выберите причину удаления аккаунта"),
                vueExports.createVNode("p", { class: "text-subsidiary-reg text-additional mt-0.5" }, "Это поможет нам стать лучше")
              ]),
              vueExports.createVNode("div", { class: "flex flex-col gap-2" }, [
                vueExports.createVNode("div", { class: "border-b-filling border-b pb-4" }, [
                  vueExports.createVNode("div", { class: "flex flex-col justify-between lg:flex-row" }, [
                    vueExports.createVNode("div", { class: "flex flex-col gap-2" }, [
                      (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(deleteReasons, (reason) => {
                        var _a2, _b2;
                        return vueExports.createVNode("div", {
                          key: reason.reason
                        }, [
                          vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                            error: ((_b2 = (_a2 = $form.reason) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message) || vueExports.unref(profileDeleteForm).errors.reason
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                                vueExports.createVNode(_sfc_main$3, {
                                  modelValue: vueExports.unref(profileDeleteForm).reason,
                                  "onUpdate:modelValue": ($event) => vueExports.unref(profileDeleteForm).reason = $event,
                                  "input-id": String(reason.reason),
                                  name: String(reason.reason),
                                  value: reason.reason
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                                vueExports.createVNode("label", {
                                  for: String(reason.reason)
                                }, vueExports.toDisplayString(reason.name), 9, ["for"])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["error"])
                        ]);
                      }), 64))
                    ]),
                    vueExports.createVNode("div", { class: "flex flex-col gap-2 max-lg:mt-2" }, [
                      vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                        vueExports.createVNode(_sfc_main$3, {
                          modelValue: vueExports.unref(profileDeleteForm).reason,
                          "onUpdate:modelValue": ($event) => vueExports.unref(profileDeleteForm).reason = $event,
                          "input-id": "another",
                          name: "another",
                          value: "another"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        vueExports.createVNode("label", { for: "another" }, "Другое")
                      ]),
                      vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                        error: ((_f = (_e = $form.comment) == null ? void 0 : _e.error) == null ? void 0 : _f.message) || vueExports.unref(profileDeleteForm).errors.comment
                      }, {
                        default: vueExports.withCtx(() => {
                          var _a2, _b2;
                          return [
                            vueExports.createVNode(_sfc_main$4, {
                              modelValue: vueExports.unref(profileDeleteForm).comment,
                              "onUpdate:modelValue": ($event) => vueExports.unref(profileDeleteForm).comment = $event,
                              name: "comment",
                              placeholder: "Ваша причина",
                              invalid: !!vueExports.unref(profileDeleteForm).errors.comment || ((_b2 = (_a2 = $form.comment) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message),
                              class: "resize-none lg:min-w-[540px]"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                          ];
                        }),
                        _: 2
                      }, 1032, ["error"])
                    ])
                  ])
                ]),
                _ctx.auth.user.is_have_password ? (vueExports.openBlock(), vueExports.createBlock("div", {
                  key: 0,
                  class: "border-b-filling mt-2 border-b pb-4"
                }, [
                  vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                    error: ((_h = (_g = $form.password) == null ? void 0 : _g.error) == null ? void 0 : _h.message) || vueExports.unref(profileDeleteForm).errors.password || localErrors.value.password
                  }, {
                    default: vueExports.withCtx(() => {
                      var _a2, _b2;
                      return [
                        vueExports.createVNode("label", {
                          for: "password",
                          class: "text-mob-small-medium"
                        }, "В целях безопасности введите ваш пароль"),
                        vueExports.createVNode(_sfc_main$5, {
                          modelValue: vueExports.unref(profileDeleteForm).password,
                          "onUpdate:modelValue": ($event) => vueExports.unref(profileDeleteForm).password = $event,
                          placeholder: "Ваш пароль",
                          name: "password",
                          feedback: false,
                          "toggle-mask": "",
                          fluid: "",
                          required: "",
                          class: "mt-4 max-w-[540px]",
                          invalid: !!vueExports.unref(profileDeleteForm).errors.password || ((_b2 = (_a2 = $form.password) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message) || !!localErrors.value.password,
                          onBlur: ($event) => localErrors.value.password = ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid", "onBlur"])
                      ];
                    }),
                    _: 2
                  }, 1032, ["error"]),
                  vueExports.createVNode(vueExports.unref(_sfc_main$2), null, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "mt-4 flex items-start gap-3" }, [
                        vueExports.createVNode(_sfc_main$6, {
                          modelValue: vueExports.unref(profileDeleteForm).agreement,
                          "onUpdate:modelValue": ($event) => vueExports.unref(profileDeleteForm).agreement = $event,
                          "input-id": "delete-checkbox",
                          binary: "",
                          size: "small",
                          name: "agreement",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        vueExports.createVNode("label", {
                          for: "delete-checkbox",
                          class: "text-complimentary-reg text-additional max-w-[380px]"
                        }, "Нажимая на кнопку «Удалить аккаунт» я подтверждаю, что даю согласие на удаление данных и аннулирование карты лояльности")
                      ])
                    ]),
                    _: 1
                  })
                ])) : vueExports.createCommentVNode("", true),
                vueExports.createVNode("div", { class: "mt-2" }, [
                  vueExports.createVNode("p", { class: "text-mob-small-medium max-w-[520px]" }, " Как только вы нажмёте кнопку ниже, вы больше не сможете воспользоваться своим аккаунтом. При попытке входа на сайт будет создан новый аккаунт и карта лояльности ")
                ])
              ]),
              vueExports.createVNode("div", { class: "flex flex-col gap-2 md:flex-row md:gap-8" }, [
                vueExports.createVNode(vueExports.unref(link_default), {
                  href: _ctx.route("user.profile.index")
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(vueExports.unref(VButton), {
                      variant: "outline",
                      label: "Отменить",
                      class: "max-md:w-full"
                    })
                  ]),
                  _: 1
                }, 8, ["href"]),
                vueExports.createVNode(vueExports.unref(VButton), {
                  label: "Удалить аккаунт",
                  variant: "delete",
                  type: "submit"
                })
              ]),
              vueExports.createVNode(_sfc_main$7, {
                visible: isConfirmModalOpen.value,
                "onUpdate:visible": ($event) => isConfirmModalOpen.value = $event,
                draggable: false,
                modal: "",
                class: "max-md:mx-6 md:w-110"
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode("h2", { class: "text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0" }, "Удаление аккаунта"),
                  vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-3 text-center md:mt-2" }, " Вы действительно хотите удалить аккаунт и потерять все связанные с ним данные? "),
                  vueExports.createVNode("div", { class: "mt-3 flex flex-col gap-2 md:mt-6" }, [
                    vueExports.createVNode(vueExports.unref(VButton), {
                      label: "Нет, я передумал",
                      variant: "outline",
                      class: "w-full",
                      onClick: ($event) => isConfirmModalOpen.value = false
                    }, null, 8, ["onClick"]),
                    vueExports.createVNode(vueExports.unref(VButton), {
                      label: "Да, удалить аккаунт",
                      variant: "delete",
                      class: "w-full",
                      disabled: vueExports.unref(profileDeleteForm).processing,
                      onClick: confirmDelete
                    }, null, 8, ["disabled"])
                  ])
                ]),
                _: 1
              }, 8, ["visible", "onUpdate:visible"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/profile/profile-delete/ui/ProfileDelete.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
