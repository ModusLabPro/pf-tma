import { s as serverRenderer_cjs_prodExports, v as vueExports, h as head_default } from "../ssr.js";
import _sfc_main$1 from "./AuthenticatedLayout-BQ0eA8b_.js";
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
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(head_default), { title: "Dashboard" }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, null, {
        header: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-xl leading-tight font-semibold text-gray-800"${_scopeId}>Dashboard</h2>`);
          } else {
            return [
              vueExports.createVNode("h2", { class: "text-xl leading-tight font-semibold text-gray-800" }, "Dashboard")
            ];
          }
        }),
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="mx-auto max-w-7xl sm:px-6 lg:px-8"${_scopeId}><div class="overflow-hidden bg-white shadow-sm sm:rounded-lg"${_scopeId}><div class="p-6 text-gray-900"${_scopeId}>You&#39;re logged in!</div></div></div></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "py-12" }, [
                vueExports.createVNode("div", { class: "mx-auto max-w-7xl sm:px-6 lg:px-8" }, [
                  vueExports.createVNode("div", { class: "overflow-hidden bg-white shadow-sm sm:rounded-lg" }, [
                    vueExports.createVNode("div", { class: "p-6 text-gray-900" }, "You're logged in!")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
