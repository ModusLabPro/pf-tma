import { s as serverRenderer_cjs_prodExports, v as vueExports, h as head_default } from "../ssr.js";
import _sfc_main$1 from "./AuthenticatedLayout-BQ0eA8b_.js";
import _sfc_main$4 from "./DeleteUserForm-mrqN6LOk.js";
import _sfc_main$3 from "./UpdatePasswordForm-ummBO1ch.js";
import _sfc_main$2 from "./UpdateProfileInformationForm-D53eCvqx.js";
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
import "./Dropdown-mpLSjbIz.js";
import "./DropdownLink-Cqbzg9aU.js";
import "./NavLink-Cg9sjghU.js";
import "./ResponsiveNavLink-B0E0gCCV.js";
import "./SessionAlert-BB-sGZZG.js";
import "./DangerButton-CdGjiN2T.js";
import "./InputError-DKuEcXO-.js";
import "./InputLabel-CuB8Zh6m.js";
import "./Modal-CIggtUzG.js";
import "./SecondaryButton-C9YWiCEC.js";
import "./TextInput-PoD0kEYt.js";
import "./PrimaryButton-BdhY1PRS.js";
const _sfc_main = {
  __name: "Edit",
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(head_default), { title: "Profile" }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, null, {
        header: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl leading-tight font-semibold text-gray-800"${_scopeId}>Profile</h2>`);
          } else {
            return [
              vueExports.createVNode("h2", { class: "text-xl leading-tight font-semibold text-gray-800" }, "Profile")
            ];
          }
        }),
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8"${_scopeId}><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
              "must-verify-email": __props.mustVerifyEmail,
              status: __props.status,
              class: "max-w-xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div><div class="bg-white p-4 shadow sm:rounded-lg sm:p-8"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "py-12" }, [
                vueExports.createVNode("div", { class: "mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8" }, [
                  vueExports.createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [
                    vueExports.createVNode(_sfc_main$2, {
                      "must-verify-email": __props.mustVerifyEmail,
                      status: __props.status,
                      class: "max-w-xl"
                    }, null, 8, ["must-verify-email", "status"])
                  ]),
                  vueExports.createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [
                    vueExports.createVNode(_sfc_main$3, { class: "max-w-xl" })
                  ]),
                  vueExports.createVNode("div", { class: "bg-white p-4 shadow sm:rounded-lg sm:p-8" }, [
                    vueExports.createVNode(_sfc_main$4, { class: "max-w-xl" })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/back/Profile/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
