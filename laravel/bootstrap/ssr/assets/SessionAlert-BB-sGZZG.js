import { t as _export_sfc, s as serverRenderer_cjs_prodExports, v as vueExports } from "../ssr.js";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><svg xmlns="http://www.w3.org/2000/svg" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "display": "none" })}"><symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></symbol><symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></symbol><symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></symbol></svg><div>`);
  if (_ctx.$page.props.flash.success) {
    _push(`<div class="border-additional justify-content-start alert-session alert alert-success alert-dismissible fade show bg-green-active border-additional mt-8 flex h-[50px] items-center gap-3 rounded-[12px] border p-0 px-3 py-2 sm:mt-10 sm:ml-72 sm:p-4" role="alert"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><g clip-path="url(#clip0_62_33575)"><path d="M11 17L14 20L21 13" stroke="#01814E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#01814E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_62_33575"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg><h3 class="text-secondary text-sm font-semibold">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.$page.props.flash.success)}</h3><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$page.props.flash.message) {
    _push(`<div class="alert-session alert alert-primary alert-{{ $page.props.flash.alert }} alert-dismissible fade show" role="alert"><svg class="bi me-2 flex-shrink-0" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "margin-right": "10px" })}" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"></use></svg><strong>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.$page.props.flash.message)}</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$page.props.flash.error) {
    _push(`<div class="alert-session alert alert-warning alert-dismissible fade show" role="alert"><svg class="bi me-2 flex-shrink-0" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "margin-right": "10px" })}" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"></use></svg><strong>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.$page.props.flash.error)}</strong><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.$page.props.flash.errors) {
    _push(`<div class="alert-session alert alert-warning alert-dismissible fade show" role="alert"><svg class="bi me-2 flex-shrink-0" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ "margin-right": "10px" })}" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"></use></svg><!--[-->`);
    serverRenderer_cjs_prodExports.ssrRenderList(_ctx.$page.props.flash.errors, (error, index) => {
      _push(`<strong>${serverRenderer_cjs_prodExports.ssrInterpolate(error)}</strong>`);
    });
    _push(`<!--]--><button type="button" class="btn-close" onclick="" data-bs-dismiss="alert" aria-label="Close"></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/back/Components/SessionAlert.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SessionAlert = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  SessionAlert as default
};
