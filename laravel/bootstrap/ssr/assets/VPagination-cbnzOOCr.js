import { v as vueExports, s as serverRenderer_cjs_prodExports, G as IconCaretRight } from "../ssr.js";
const _hoisted_1 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    vueExports.createElementVNode("g", null, [
      vueExports.createElementVNode("path", {
        d: "M15 19.5L7.5 12L15 4.5",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      })
    ], -1)
  ]));
}
const IconCaretLeft = { render };
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "VPagination",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    perPage: {},
    totalCount: {}
  }, {
    "modelValue": {
      default: 1
    },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const props = __props;
    const pageCount = vueExports.computed(() => Math.ceil(props.totalCount / props.perPage));
    const currentPage = vueExports.useModel(__props, "modelValue");
    const middlePagesNumbers = vueExports.computed(() => {
      const pageNumbers = [];
      if (pageCount.value > 2 && pageCount.value <= 7) {
        for (let i = 3; i <= pageCount.value - 2; i++) {
          pageNumbers.push(i);
        }
      } else if (pageCount.value > 7) {
        if (currentPage.value < 5) {
          pageNumbers.push(3, 4, 5);
        } else if (currentPage.value >= 5 && currentPage.value < pageCount.value - 2) {
          const addedPages = [
            currentPage.value - 1 > 2 ? currentPage.value - 1 : 0,
            currentPage.value > 2 && currentPage.value < pageCount.value - 1 ? currentPage.value : 0,
            currentPage.value + 1 < pageCount.value - 1 ? currentPage.value + 1 : 0
          ];
          pageNumbers.push(...addedPages.filter(Boolean));
        } else {
          pageNumbers.push(pageCount.value - 4, pageCount.value - 3, pageCount.value - 2);
        }
      }
      return pageNumbers;
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (pageCount.value > 1) {
        _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "flex items-center gap-3" }, _attrs))}><button${serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} class="border-default text-default enabled:hover:bg-default flex items-center justify-center rounded-full border p-[7px] transition-colors duration-200 enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-50">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretLeft), { class: "h-[18px] w-[18px]" }, null, _parent));
        _push(`</button><div class="flex items-center gap-1"><button class="${serverRenderer_cjs_prodExports.ssrRenderClass([[currentPage.value === 1 ? "bg-default text-white" : "bg-filling text-subsidiary hover:bg-default hover:text-white"], "text-subsidiary-reg flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl transition-colors duration-200"])}"> 1 </button>`);
        if (pageCount.value > 1) {
          _push(`<button class="${serverRenderer_cjs_prodExports.ssrRenderClass([[currentPage.value === 2 ? "bg-default text-white" : "bg-filling text-subsidiary hover:bg-default hover:text-white"], "text-subsidiary-reg flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl transition-colors duration-200"])}"> 2 </button>`);
        } else {
          _push(`<!---->`);
        }
        if (pageCount.value > 7 && middlePagesNumbers.value[0] - 2 > 1) {
          _push(`<button class="text-subsidiary-reg bg-filling text-subsidiary hover:bg-default flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl transition-colors duration-200 hover:text-white"> ... </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        serverRenderer_cjs_prodExports.ssrRenderList(middlePagesNumbers.value, (n) => {
          _push(`<button class="${serverRenderer_cjs_prodExports.ssrRenderClass([[currentPage.value === n ? "bg-default text-white" : "bg-filling text-subsidiary hover:bg-default hover:text-white"], "text-subsidiary-reg flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl transition-colors duration-200"])}">${serverRenderer_cjs_prodExports.ssrInterpolate(n)}</button>`);
        });
        _push(`<!--]-->`);
        if (pageCount.value > 7 && pageCount.value - 1 - middlePagesNumbers.value[2] > 1) {
          _push(`<button class="text-subsidiary-reg bg-filling text-subsidiary hover:bg-default flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl transition-colors duration-200 hover:text-white"> ... </button>`);
        } else {
          _push(`<!---->`);
        }
        if (pageCount.value - 1 > 2) {
          _push(`<button class="${serverRenderer_cjs_prodExports.ssrRenderClass([[currentPage.value === pageCount.value - 1 ? "bg-default text-white" : "bg-filling text-subsidiary hover:bg-default hover:text-white"], "text-subsidiary-reg flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl transition-colors duration-200"])}">${serverRenderer_cjs_prodExports.ssrInterpolate(pageCount.value - 1)}</button>`);
        } else {
          _push(`<!---->`);
        }
        if (pageCount.value > 2) {
          _push(`<button class="${serverRenderer_cjs_prodExports.ssrRenderClass([[currentPage.value === pageCount.value ? "bg-default text-white" : "bg-filling text-subsidiary hover:bg-default hover:text-white"], "text-subsidiary-reg flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl transition-colors duration-200"])}">${serverRenderer_cjs_prodExports.ssrInterpolate(pageCount.value)}</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><button${serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(currentPage.value === pageCount.value) ? " disabled" : ""} class="border-default text-default enabled:hover:bg-default :disabled:cursor-not-allowed flex cursor-pointer items-center justify-center rounded-full border p-[7px] transition-colors duration-200 enabled:hover:text-white disabled:opacity-50">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), { class: "h-[18px] w-[18px]" }, null, _parent));
        _push(`</button></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/pagination/VPagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
