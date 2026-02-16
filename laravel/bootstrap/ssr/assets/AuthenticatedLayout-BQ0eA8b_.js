import { v as vueExports, s as serverRenderer_cjs_prodExports, l as link_default } from "../ssr.js";
import ApplicationLogo from "./ApplicationLogo-Dx0DNpZm.js";
import _sfc_main$2 from "./Dropdown-mpLSjbIz.js";
import _sfc_main$3 from "./DropdownLink-Cqbzg9aU.js";
import _sfc_main$1 from "./NavLink-Cg9sjghU.js";
import _sfc_main$4 from "./ResponsiveNavLink-B0E0gCCV.js";
import SessionAlert from "./SessionAlert-BB-sGZZG.js";
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
  __name: "AuthenticatedLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = vueExports.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(SessionAlert, null, null, _parent));
      _push(`<div><div class="min-h-screen bg-gray-100"><nav class="border-b border-gray-100 bg-white"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="flex h-16 justify-between"><div class="flex"><div class="flex shrink-0 items-center">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
        href: _ctx.route("dashboard")
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(ApplicationLogo, { class: "block h-9 w-auto fill-current text-gray-800" }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(ApplicationLogo, { class: "block h-9 w-auto fill-current text-gray-800" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              vueExports.createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden sm:ms-6 sm:flex sm:items-center"><div class="relative ms-3">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
        align: "right",
        width: "48"
      }, {
        trigger: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm leading-4 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.$page.props.auth.user.name ?? "Menu")} <svg class="ms-2 -me-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId}></path></svg></button></span>`);
          } else {
            return [
              vueExports.createVNode("span", { class: "inline-flex rounded-md" }, [
                vueExports.createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm leading-4 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                }, [
                  vueExports.createTextVNode(vueExports.toDisplayString(_ctx.$page.props.auth.user.name ?? "Menu") + " ", 1),
                  (vueExports.openBlock(), vueExports.createBlock("svg", {
                    class: "ms-2 -me-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor"
                  }, [
                    vueExports.createVNode("path", {
                      "fill-rule": "evenodd",
                      d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                      "clip-rule": "evenodd"
                    })
                  ]))
                ])
              ])
            ];
          }
        }),
        content: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
              href: _ctx.route("profile.edit")
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Profile `);
                } else {
                  return [
                    vueExports.createTextVNode(" Profile ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
              href: _ctx.route("logout"),
              method: "post",
              as: "button"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    vueExports.createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$3, {
                href: _ctx.route("profile.edit")
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createTextVNode(" Profile ")
                ]),
                _: 1
              }, 8, ["href"]),
              vueExports.createVNode(_sfc_main$3, {
                href: _ctx.route("logout"),
                method: "post",
                as: "button"
              }, {
                default: vueExports.withCtx(() => [
                  vueExports.createTextVNode(" Log Out ")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="-me-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${serverRenderer_cjs_prodExports.ssrRenderClass({
        hidden: showingNavigationDropdown.value,
        "inline-flex": !showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${serverRenderer_cjs_prodExports.ssrRenderClass({
        hidden: !showingNavigationDropdown.value,
        "inline-flex": showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${serverRenderer_cjs_prodExports.ssrRenderClass([{
        block: showingNavigationDropdown.value,
        hidden: !showingNavigationDropdown.value
      }, "sm:hidden"])}"><div class="space-y-1 pt-2 pb-3">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              vueExports.createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-t border-gray-200 pt-4 pb-1"><div class="px-4"><div class="text-base font-medium text-gray-800">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><div class="text-sm font-medium text-gray-500">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.$page.props.auth.user.email)}</div></div><div class="mt-3 space-y-1">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
        href: _ctx.route("profile.edit")
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile `);
          } else {
            return [
              vueExports.createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
        href: _ctx.route("logout"),
        method: "post",
        as: "button"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log Out `);
          } else {
            return [
              vueExports.createTextVNode(" Log Out ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></nav>`);
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white shadow"><div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">`);
        serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/back/Layouts/AuthenticatedLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
