import { v as vueExports, b as usePage, c as useForm, s as serverRenderer_cjs_prodExports, at as resolver, e as _sfc_main$1, f as _sfc_main$2, w as _sfc_main$3, a as VButton } from "../ssr.js";
import { Form } from "@primevue/forms";
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
import "@vueuse/core";
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
  __name: "SignInByEmail",
  __ssrInlineRender: true,
  emits: ["success", "to-register", "to-reset"],
  setup(__props, { emit: __emit }) {
    const page = usePage();
    const { add } = useToast();
    const emit = __emit;
    const form = useForm({
      email: void 0,
      password: void 0
    });
    const submit = ({ valid }) => {
      if (valid) {
        form.post(route("login"), {
          onSuccess: () => {
            form.reset();
            emit("success");
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "flex flex-col gap-6" }, _attrs))}><div class="flex flex-col items-start gap-2">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Form), {
        id: "login-form",
        "initial-values": vueExports.unref(form),
        resolver: vueExports.unref(resolver),
        "validate-on-value-update": false,
        "validate-on-blur": "",
        class: "w-full",
        onSubmit: submit
      }, {
        default: vueExports.withCtx(($form, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
              class: "mb-2",
              error: ((_b = (_a = $form.email) == null ? void 0 : _a.error) == null ? void 0 : _b.message) ?? vueExports.unref(form).errors.email
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
                    modelValue: vueExports.unref(form).email,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
                    type: "email",
                    placeholder: "Введите ваш e-mail",
                    name: "email",
                    invalid: !!vueExports.unref(form).errors.email,
                    autocomplete: "username",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_sfc_main$2, {
                      modelValue: vueExports.unref(form).email,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
                      type: "email",
                      placeholder: "Введите ваш e-mail",
                      name: "email",
                      invalid: !!vueExports.unref(form).errors.email,
                      autocomplete: "username",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
              error: ((_d = (_c = $form.password) == null ? void 0 : _c.error) == null ? void 0 : _d.message) ?? vueExports.unref(form).errors.password
            }, {
              default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                    modelValue: vueExports.unref(form).password,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).password = $event,
                    fluid: "",
                    feedback: false,
                    "toggle-mask": "",
                    placeholder: "Пароль",
                    name: "password",
                    "input-props": {
                      autocomplete: "current-password",
                      required: true
                    },
                    invalid: !!vueExports.unref(form).errors.password
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_sfc_main$3, {
                      modelValue: vueExports.unref(form).password,
                      "onUpdate:modelValue": ($event) => vueExports.unref(form).password = $event,
                      fluid: "",
                      feedback: false,
                      "toggle-mask": "",
                      placeholder: "Пароль",
                      name: "password",
                      "input-props": {
                        autocomplete: "current-password",
                        required: true
                      },
                      invalid: !!vueExports.unref(form).errors.password
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(_sfc_main$1), {
                class: "mb-2",
                error: ((_f = (_e = $form.email) == null ? void 0 : _e.error) == null ? void 0 : _f.message) ?? vueExports.unref(form).errors.email
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_sfc_main$2, {
                    modelValue: vueExports.unref(form).email,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
                    type: "email",
                    placeholder: "Введите ваш e-mail",
                    name: "email",
                    invalid: !!vueExports.unref(form).errors.email,
                    autocomplete: "username",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                ]),
                _: 2
              }, 1032, ["error"]),
              vueExports.createVNode(vueExports.unref(_sfc_main$1), {
                error: ((_h = (_g = $form.password) == null ? void 0 : _g.error) == null ? void 0 : _h.message) ?? vueExports.unref(form).errors.password
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_sfc_main$3, {
                    modelValue: vueExports.unref(form).password,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).password = $event,
                    fluid: "",
                    feedback: false,
                    "toggle-mask": "",
                    placeholder: "Пароль",
                    name: "password",
                    "input-props": {
                      autocomplete: "current-password",
                      required: true
                    },
                    invalid: !!vueExports.unref(form).errors.password
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "invalid"])
                ]),
                _: 2
              }, 1032, ["error"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="text-subsidiary text-mob-small-medium cursor-pointer">Забыли пароль?</button></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
        label: "Войти в аккаунт",
        type: "submit",
        form: "login-form",
        class: "w-full",
        disabled: vueExports.unref(form).processing
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/widgets/auth/ui/sign-in/SignInByEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
