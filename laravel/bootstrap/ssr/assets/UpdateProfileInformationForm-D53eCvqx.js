import { b as usePage, c as useForm, s as serverRenderer_cjs_prodExports, v as vueExports, l as link_default } from "../ssr.js";
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
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: {
      type: Boolean
    },
    status: {
      type: String
    }
  },
  setup(__props) {
    const user = usePage().props.auth.user;
    const form = useForm({
      name: user.name,
      email: user.email,
      phone: user.phone
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${serverRenderer_cjs_prodExports.ssrRenderAttrs(_attrs)}><header><h2 class="text-lg font-medium text-gray-900">Profile Information</h2><p class="mt-1 text-sm text-gray-600">Update your account&#39;s profile information and email address.</p></header><form class="mt-6 space-y-6"><div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
        for: "name",
        value: "Name"
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
        id: "name",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: vueExports.unref(form).name,
        "onUpdate:modelValue": ($event) => vueExports.unref(form).name = $event,
        autofocus: "",
        autocomplete: "name"
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
        class: "mt-2",
        message: vueExports.unref(form).errors.name
      }, null, _parent));
      _push(`</div><div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
        for: "email",
        value: "Email"
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
        id: "email",
        type: "email",
        class: "mt-1 block w-full",
        modelValue: vueExports.unref(form).email,
        "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
        autocomplete: "username"
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
        class: "mt-2",
        message: vueExports.unref(form).errors.email
      }, null, _parent));
      _push(`</div>`);
      if (vueExports.unref(user).phone && vueExports.unref(user).phone_verified_at === null) {
        _push(`<div><p class="mt-2 text-sm text-gray-800"> Your phone is unverified. `);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
          href: _ctx.route("phone-verify"),
          method: "get",
          as: "button",
          class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Click here to send the verification phone. `);
            } else {
              return [
                vueExports.createTextVNode(" Click here to send the verification phone. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p><div style="${serverRenderer_cjs_prodExports.ssrRenderStyle(__props.status === "verification-link-sent" ? null : { display: "none" })}" class="mt-2 text-sm font-medium text-green-600"> A new verification code has been sent to your phone. </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
        for: "phone",
        value: "Phone"
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
        id: "phone",
        type: "text",
        class: "mt-1 block w-full",
        modelValue: vueExports.unref(form).phone,
        "onUpdate:modelValue": ($event) => vueExports.unref(form).phone = $event,
        autocomplete: "phone"
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
        class: "mt-2",
        message: vueExports.unref(form).errors.phone
      }, null, _parent));
      _push(`</div>`);
      if (__props.mustVerifyEmail && vueExports.unref(user).email != null && vueExports.unref(user).email_verified_at === null) {
        _push(`<div><p class="mt-2 text-sm text-gray-800"> Your email address is unverified. `);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
          href: _ctx.route("verification.send"),
          method: "post",
          as: "button",
          class: "rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Click here to re-send the verification email. `);
            } else {
              return [
                vueExports.createTextVNode(" Click here to re-send the verification email. ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p><div style="${serverRenderer_cjs_prodExports.ssrRenderStyle(__props.status === "verification-link-sent" ? null : { display: "none" })}" class="mt-2 text-sm font-medium text-green-600"> A new verification link has been sent to your email address. </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-4">`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/back/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
