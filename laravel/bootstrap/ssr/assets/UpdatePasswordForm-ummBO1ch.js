import { v as vueExports, c as useForm, s as serverRenderer_cjs_prodExports } from "../ssr.js";
import _sfc_main$3 from "./InputError-DKuEcXO-.js";
import _sfc_main$1 from "./InputLabel-CuB8Zh6m.js";
import PrimaryButton from "./PrimaryButton-BdhY1PRS.js";
import _sfc_main$2 from "./TextInput-PoD0kEYt.js";
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
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordInput = vueExports.ref(null);
    const currentPasswordInput = vueExports.ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Update Password</h2><p class="mt-1 text-sm text-gray-600">Ensure your account is using a long, random password to stay secure.</p></header><form class="mt-6 space-y-6"><div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
        for: "current_password",
        value: "Current Password"
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
        id: "current_password",
        ref_key: "currentPasswordInput",
        ref: currentPasswordInput,
        modelValue: vueExports.unref(form).current_password,
        "onUpdate:modelValue": ($event) => vueExports.unref(form).current_password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "current-password"
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
        message: vueExports.unref(form).errors.current_password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
        for: "password",
        value: "New Password"
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
        id: "password",
        ref_key: "passwordInput",
        ref: passwordInput,
        modelValue: vueExports.unref(form).password,
        "onUpdate:modelValue": ($event) => vueExports.unref(form).password = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
        message: vueExports.unref(form).errors.password,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
        for: "password_confirmation",
        value: "Confirm Password"
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
        id: "password_confirmation",
        modelValue: vueExports.unref(form).password_confirmation,
        "onUpdate:modelValue": ($event) => vueExports.unref(form).password_confirmation = $event,
        type: "password",
        class: "mt-1 block w-full",
        autocomplete: "new-password"
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
        message: vueExports.unref(form).errors.password_confirmation,
        class: "mt-2"
      }, null, _parent));
      _push(`</div><div class="flex items-center gap-4">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(PrimaryButton, {
        disabled: vueExports.unref(form).processing
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Save`);
          } else {
            return [
              vueExports.createTextVNode("Save")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (vueExports.unref(form).recentlySuccessful) {
        _push(`<p class="text-sm text-gray-600">Saved.</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></form></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/back/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
