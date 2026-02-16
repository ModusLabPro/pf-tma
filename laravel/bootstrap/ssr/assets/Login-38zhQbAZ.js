import { c as useForm, s as serverRenderer_cjs_prodExports, v as vueExports, h as head_default, l as link_default } from "../ssr.js";
import _sfc_main$5 from "./Checkbox-DSGxsIH6.js";
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
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, _attrs, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(head_default), { title: "Log in" }, null, _parent2, _scopeId));
            if (__props.status) {
              _push2(`<div class="mb-4 text-sm font-medium text-green-600"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
              id: "email",
              type: "email",
              class: "mt-1 block w-full",
              modelValue: vueExports.unref(form).email,
              "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: vueExports.unref(form).errors.email
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
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
              class: "mt-2",
              message: vueExports.unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4 block"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, {
              name: "remember",
              checked: vueExports.unref(form).remember,
              "onUpdate:checked": ($event) => vueExports.unref(form).remember = $event
            }, null, _parent2, _scopeId));
            _push2(`<span class="ms-2 text-sm text-gray-600"${_scopeId}>Remember me</span></label></div><div class="mt-4 flex items-center justify-end"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
              href: _ctx.route("login-phone"),
              class: "mr-5 rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Login By Phone `);
                } else {
                  return [
                    vueExports.createTextVNode(" Login By Phone ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (__props.canResetPassword) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                href: _ctx.route("password.request"),
                class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Forgot your password? `);
                  } else {
                    return [
                      vueExports.createTextVNode(" Forgot your password? ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(PrimaryButton, {
              class: ["ms-4", { "opacity-25": vueExports.unref(form).processing }],
              disabled: vueExports.unref(form).processing
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log in `);
                } else {
                  return [
                    vueExports.createTextVNode(" Log in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              vueExports.createVNode(vueExports.unref(head_default), { title: "Log in" }),
              __props.status ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 0,
                class: "mb-4 text-sm font-medium text-green-600"
              }, vueExports.toDisplayString(__props.status), 1)) : vueExports.createCommentVNode("", true),
              vueExports.createVNode("form", {
                onSubmit: vueExports.withModifiers(submit, ["prevent"])
              }, [
                vueExports.createVNode("div", null, [
                  vueExports.createVNode(_sfc_main$2, {
                    for: "email",
                    value: "Email"
                  }),
                  vueExports.createVNode(_sfc_main$3, {
                    id: "email",
                    type: "email",
                    class: "mt-1 block w-full",
                    modelValue: vueExports.unref(form).email,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  vueExports.createVNode(_sfc_main$4, {
                    class: "mt-2",
                    message: vueExports.unref(form).errors.email
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
                    autocomplete: "current-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  vueExports.createVNode(_sfc_main$4, {
                    class: "mt-2",
                    message: vueExports.unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                vueExports.createVNode("div", { class: "mt-4 block" }, [
                  vueExports.createVNode("label", { class: "flex items-center" }, [
                    vueExports.createVNode(_sfc_main$5, {
                      name: "remember",
                      checked: vueExports.unref(form).remember,
                      "onUpdate:checked": ($event) => vueExports.unref(form).remember = $event
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    vueExports.createVNode("span", { class: "ms-2 text-sm text-gray-600" }, "Remember me")
                  ])
                ]),
                vueExports.createVNode("div", { class: "mt-4 flex items-center justify-end" }, [
                  vueExports.createVNode(vueExports.unref(link_default), {
                    href: _ctx.route("login-phone"),
                    class: "mr-5 rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" Login By Phone ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  __props.canResetPassword ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(link_default), {
                    key: 0,
                    href: _ctx.route("password.request"),
                    class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" Forgot your password? ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : vueExports.createCommentVNode("", true),
                  vueExports.createVNode(PrimaryButton, {
                    class: ["ms-4", { "opacity-25": vueExports.unref(form).processing }],
                    disabled: vueExports.unref(form).processing
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" Log in ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/back/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
