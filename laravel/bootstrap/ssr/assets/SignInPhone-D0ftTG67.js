import { v as vueExports, b as usePage, c as useForm, s as serverRenderer_cjs_prodExports, au as getCodeResolver, e as _sfc_main$1, g as _sfc_main$2, a as VButton, av as checkCodeResolver, ao as _sfc_main$3, ai as _sfc_main$4 } from "../ssr.js";
import { Form } from "@primevue/forms";
import { useCountdown } from "@vueuse/core";
import { useToast } from "primevue";
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
  __name: "SignInPhone",
  __ssrInlineRender: true,
  emits: ["success", "checkingCode"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const page = usePage();
    const { add } = useToast();
    const backBtnInjection = vueExports.inject("backBtn");
    const step = vueExports.ref(1);
    const { start, remaining, isActive } = useCountdown(60);
    const getCodeForm = useForm({
      rule: "exist",
      phone: "",
      target: "login"
    });
    const checkCodeForm = useForm({
      phone: "",
      code: "",
      target: "login"
    });
    const toStepOne = () => {
      step.value = 1;
      backBtnInjection.setBackBtn(false);
    };
    const getCodeFormSubmit = ({ valid }) => {
      if (valid) {
        getCodeForm.post(route("code.send"), {
          onSuccess(data) {
            add({
              severity: "success",
              detail: data.props.flash.success
            });
            step.value = 2;
            backBtnInjection.setBackBtn(true, toStepOne);
            checkCodeForm.phone = getCodeForm.phone;
            emit("checkingCode");
            start();
          },
          onError: () => {
            if (page.props.errors.blocked) {
              add({
                detail: page.props.errors.blocked,
                life: 3e3,
                severity: "error"
              });
            }
          }
        });
      }
    };
    const checkCodeSubmit = ({ valid }) => {
      if (valid) {
        checkCodeForm.post(route("code.confirm"), {
          onSuccess() {
            emit("success");
            step.value = 1;
            checkCodeForm.reset();
            getCodeForm.reset();
          }
        });
      }
    };
    const refreshCode = () => {
      getCodeForm.post(route("code.send"), {
        onSuccess(data) {
          start();
          add({
            severity: "success",
            detail: data.props.flash.success
          });
        }
      });
    };
    const timer = vueExports.computed(() => {
      if (isActive.value) {
        const minutes = Math.floor(remaining.value / 60);
        const seconds = remaining.value % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      }
      return "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (step.value === 1) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Form), {
          resolver: vueExports.unref(getCodeResolver),
          "validate-on-value-update": false,
          "validate-on-blur": "",
          class: "flex flex-col gap-6",
          onSubmit: getCodeFormSubmit
        }, {
          default: vueExports.withCtx(($form, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d;
            if (_push2) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
                error: ((_b = (_a = $form.phone) == null ? void 0 : _a.error) == null ? void 0 : _b.message) || vueExports.unref(getCodeForm).errors.phone
              }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
                      modelValue: vueExports.unref(getCodeForm).phone,
                      "onUpdate:modelValue": ($event) => vueExports.unref(getCodeForm).phone = $event,
                      mask: "+7 (999) 999-99-99",
                      name: "phone",
                      unmask: "",
                      placeholder: "+7 (000) 000-00-00",
                      fluid: "",
                      autocomplete: "phone"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(_sfc_main$2, {
                        modelValue: vueExports.unref(getCodeForm).phone,
                        "onUpdate:modelValue": ($event) => vueExports.unref(getCodeForm).phone = $event,
                        mask: "+7 (999) 999-99-99",
                        name: "phone",
                        unmask: "",
                        placeholder: "+7 (000) 000-00-00",
                        fluid: "",
                        autocomplete: "phone"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                type: "submit",
                label: "Продолжить"
              }, null, _parent2, _scopeId));
            } else {
              return [
                vueExports.createVNode(vueExports.unref(_sfc_main$1), {
                  error: ((_d = (_c = $form.phone) == null ? void 0 : _c.error) == null ? void 0 : _d.message) || vueExports.unref(getCodeForm).errors.phone
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(_sfc_main$2, {
                      modelValue: vueExports.unref(getCodeForm).phone,
                      "onUpdate:modelValue": ($event) => vueExports.unref(getCodeForm).phone = $event,
                      mask: "+7 (999) 999-99-99",
                      name: "phone",
                      unmask: "",
                      placeholder: "+7 (000) 000-00-00",
                      fluid: "",
                      autocomplete: "phone"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["error"]),
                vueExports.createVNode(vueExports.unref(VButton), {
                  type: "submit",
                  label: "Продолжить"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (step.value === 2) {
        _push(`<!--[-->`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Form), {
          resolver: vueExports.unref(checkCodeResolver),
          class: "flex flex-col gap-6",
          onSubmit: checkCodeSubmit
        }, {
          default: vueExports.withCtx(($form, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d;
            if (_push2) {
              _push2(`<input${serverRenderer_cjs_prodExports.ssrRenderAttr("value", vueExports.unref(checkCodeForm).phone)} type="text" hidden${_scopeId}><span${_scopeId}>Введите код из смс</span>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
                error: ((_b = (_a = $form.code) == null ? void 0 : _a.error) == null ? void 0 : _b.message) || vueExports.unref(checkCodeForm).errors.code
              }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                      modelValue: vueExports.unref(checkCodeForm).code,
                      "onUpdate:modelValue": ($event) => vueExports.unref(checkCodeForm).code = $event
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                        modelValue: vueExports.unref(checkCodeForm).code,
                        "onUpdate:modelValue": ($event) => vueExports.unref(checkCodeForm).code = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                type: "submit",
                label: "Войти в аккаунт"
              }, null, _parent2, _scopeId));
            } else {
              return [
                vueExports.withDirectives(vueExports.createVNode("input", {
                  "onUpdate:modelValue": ($event) => vueExports.unref(checkCodeForm).phone = $event,
                  type: "text",
                  hidden: ""
                }, null, 8, ["onUpdate:modelValue"]), [
                  [vueExports.vModelText, vueExports.unref(checkCodeForm).phone]
                ]),
                vueExports.createVNode("span", null, "Введите код из смс"),
                vueExports.createVNode(vueExports.unref(_sfc_main$1), {
                  error: ((_d = (_c = $form.code) == null ? void 0 : _c.error) == null ? void 0 : _d.message) || vueExports.unref(checkCodeForm).errors.code
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                      modelValue: vueExports.unref(checkCodeForm).code,
                      "onUpdate:modelValue": ($event) => vueExports.unref(checkCodeForm).code = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["error"]),
                vueExports.createVNode(vueExports.unref(VButton), {
                  type: "submit",
                  label: "Войти в аккаунт"
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
          size: "large",
          rounded: "",
          fluid: "",
          class: "mt-2",
          disabled: vueExports.unref(isActive),
          loading: vueExports.unref(getCodeForm).processing,
          onClick: refreshCode
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Отравить код повторно ${serverRenderer_cjs_prodExports.ssrInterpolate(timer.value)}`);
            } else {
              return [
                vueExports.createTextVNode(" Отравить код повторно " + vueExports.toDisplayString(timer.value), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/widgets/auth/ui/sign-in/SignInPhone.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
