import { v as vueExports, c as useForm, s as serverRenderer_cjs_prodExports } from "../ssr.js";
import DangerButton from "./DangerButton-CdGjiN2T.js";
import _sfc_main$4 from "./InputError-DKuEcXO-.js";
import _sfc_main$2 from "./InputLabel-CuB8Zh6m.js";
import _sfc_main$1 from "./Modal-CIggtUzG.js";
import _sfc_main$5 from "./SecondaryButton-C9YWiCEC.js";
import _sfc_main$3 from "./TextInput-PoD0kEYt.js";
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
const _sfc_main = {
  __name: "DeleteUserForm",
  __ssrInlineRender: true,
  setup(__props) {
    const confirmingUserDeletion = vueExports.ref(false);
    const passwordInput = vueExports.ref(null);
    const form = useForm({
      password: ""
    });
    const confirmUserDeletion = () => {
      confirmingUserDeletion.value = true;
      vueExports.nextTick(() => passwordInput.value.focus());
    };
    const deleteUser = () => {
      form.delete(route("profile.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingUserDeletion.value = false;
      form.clearErrors();
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "space-y-6" }, _attrs))}><header><h2 class="text-lg font-medium text-gray-900">Delete Account</h2><p class="mt-1 text-sm text-gray-600"> Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. </p></header>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(DangerButton, { onClick: confirmUserDeletion }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Delete Account`);
          } else {
            return [
              vueExports.createTextVNode("Delete Account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
        show: confirmingUserDeletion.value,
        onClose: closeModal
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900"${_scopeId}>Are you sure you want to delete your account?</h2><p class="mt-1 text-sm text-gray-600"${_scopeId}> Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. </p><div class="mt-6"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
              for: "password",
              value: "Password",
              class: "sr-only"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
              id: "password",
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: vueExports.unref(form).password,
              "onUpdate:modelValue": ($event) => vueExports.unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-3/4",
              placeholder: "Password",
              onKeyup: deleteUser
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
              message: vueExports.unref(form).errors.password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-6 flex justify-end"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, { onClick: closeModal }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    vueExports.createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(DangerButton, {
              class: ["ms-3", { "opacity-25": vueExports.unref(form).processing }],
              disabled: vueExports.unref(form).processing,
              onClick: deleteUser
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete Account `);
                } else {
                  return [
                    vueExports.createTextVNode(" Delete Account ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "p-6" }, [
                vueExports.createVNode("h2", { class: "text-lg font-medium text-gray-900" }, "Are you sure you want to delete your account?"),
                vueExports.createVNode("p", { class: "mt-1 text-sm text-gray-600" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                vueExports.createVNode("div", { class: "mt-6" }, [
                  vueExports.createVNode(_sfc_main$2, {
                    for: "password",
                    value: "Password",
                    class: "sr-only"
                  }),
                  vueExports.createVNode(_sfc_main$3, {
                    id: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: vueExports.unref(form).password,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: "Password",
                    onKeyup: vueExports.withKeys(deleteUser, ["enter"])
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  vueExports.createVNode(_sfc_main$4, {
                    message: vueExports.unref(form).errors.password,
                    class: "mt-2"
                  }, null, 8, ["message"])
                ]),
                vueExports.createVNode("div", { class: "mt-6 flex justify-end" }, [
                  vueExports.createVNode(_sfc_main$5, { onClick: closeModal }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(DangerButton, {
                    class: ["ms-3", { "opacity-25": vueExports.unref(form).processing }],
                    disabled: vueExports.unref(form).processing,
                    onClick: deleteUser
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" Delete Account ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/back/Profile/Partials/DeleteUserForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
