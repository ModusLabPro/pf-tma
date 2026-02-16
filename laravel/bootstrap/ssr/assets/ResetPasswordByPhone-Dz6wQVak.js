import { c as useForm, s as serverRenderer_cjs_prodExports, v as vueExports, h as head_default } from "../ssr.js";
import _sfc_main$4 from "./InputError-DKuEcXO-.js";
import _sfc_main$2 from "./InputLabel-CuB8Zh6m.js";
import PrimaryButton from "./PrimaryButton-BdhY1PRS.js";
import _sfc_main$3 from "./TextInput-PoD0kEYt.js";
import _sfc_main$1 from "./GuestLayout-rAGbMqfJ.js";
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
import "./ApplicationLogo-Dx0DNpZm.js";
import "./SessionAlert-BB-sGZZG.js";
const _sfc_main = {
  __name: "ResetPasswordByPhone",
  __ssrInlineRender: true,
  setup(__props) {
    const params = new URLSearchParams(window.location.search);
    const phone = params.get("phone");
    const code = params.get("code");
    const form = useForm({
      phone,
      code,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("password.store.phone"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, _attrs, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(head_default), { title: "Reset Password By Phone" }, null, _parent2, _scopeId));
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
              for: "phone",
              value: "Phone"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
              id: "phone",
              type: "text",
              class: "mt-1 block w-full",
              modelValue: vueExports.unref(form).phone,
              "onUpdate:modelValue": ($event) => vueExports.unref(form).phone = $event,
              required: "",
              readonly: ""
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: vueExports.unref(form).errors.phone
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
              id: "password",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: vueExports.unref(form).password,
              "onUpdate:modelValue": ($event) => vueExports.unref(form).password = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: vueExports.unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
              id: "password_confirmation",
              type: "password",
              class: "mt-1 block w-full",
              modelValue: vueExports.unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => vueExports.unref(form).password_confirmation = $event,
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: vueExports.unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 flex items-center justify-end"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(PrimaryButton, {
              class: { "opacity-25": vueExports.unref(form).processing },
              disabled: vueExports.unref(form).processing
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset Password `);
                } else {
                  return [
                    vueExports.createTextVNode(" Reset Password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              vueExports.createVNode(vueExports.unref(head_default), { title: "Reset Password By Phone" }),
              vueExports.createVNode("form", {
                onSubmit: vueExports.withModifiers(submit, ["prevent"])
              }, [
                vueExports.createVNode("div", null, [
                  vueExports.createVNode(_sfc_main$2, {
                    for: "phone",
                    value: "Phone"
                  }),
                  vueExports.createVNode(_sfc_main$3, {
                    id: "phone",
                    type: "text",
                    class: "mt-1 block w-full",
                    modelValue: vueExports.unref(form).phone,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).phone = $event,
                    required: "",
                    readonly: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  vueExports.createVNode(_sfc_main$4, {
                    class: "mt-2",
                    message: vueExports.unref(form).errors.phone
                  }, null, 8, ["message"])
                ]),
                vueExports.createVNode("div", { class: "mt-4" }, [
                  vueExports.createVNode(_sfc_main$2, {
                    for: "password",
                    value: "Password"
                  }),
                  vueExports.createVNode(_sfc_main$3, {
                    id: "password",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: vueExports.unref(form).password,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).password = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  vueExports.createVNode(_sfc_main$4, {
                    class: "mt-2",
                    message: vueExports.unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                vueExports.createVNode("div", { class: "mt-4" }, [
                  vueExports.createVNode(_sfc_main$2, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  vueExports.createVNode(_sfc_main$3, {
                    id: "password_confirmation",
                    type: "password",
                    class: "mt-1 block w-full",
                    modelValue: vueExports.unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).password_confirmation = $event,
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  vueExports.createVNode(_sfc_main$4, {
                    class: "mt-2",
                    message: vueExports.unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                vueExports.createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                  vueExports.createVNode(PrimaryButton, {
                    class: { "opacity-25": vueExports.unref(form).processing },
                    disabled: vueExports.unref(form).processing
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" Reset Password ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/back/Auth/ResetPasswordByPhone.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
