import { v as vueExports, u as useScreenSize, s as serverRenderer_cjs_prodExports, _ as _sfc_main$1, Z as IconClockOutline } from "../ssr.js";
import { useI18n } from "vue-i18n";
import { I as IconChefHat } from "./IconChefHat-CbLzs3Yv.js";
import { g as getFormattedTime, I as IconCookingPot } from "./getFormattedTime-DfpF6FCc.js";
const total = 5;
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "RecipeCard",
  __ssrInlineRender: true,
  props: {
    id: {},
    title: {},
    description: {},
    image: {},
    cookTime: {},
    portions: {},
    difficulty: {},
    isFavorite: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const difficultyLevels = Array.from({ length: total }, (_, i) => i < props.difficulty);
    const { isMobile } = useScreenSize();
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "border-stroke rounded-20 flex h-full cursor-pointer flex-col border" }, _attrs))}><div class="relative"><div class="absolute top-2 right-2 flex items-center gap-2">`);
      serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "actions", { isFavorite: _ctx.isFavorite }, null, _push, _parent);
      _push(`</div>`);
      if (_ctx.image) {
        _push(`<!--[-->`);
        if (!vueExports.unref(isMobile)) {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
            src: _ctx.image,
            alt: "рецепт",
            width: "100%",
            height: "200px",
            class: "overflow-hidden rounded-2xl"
          }, null, _parent));
        } else {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
            src: _ctx.image,
            alt: "рецепт",
            width: "100%",
            height: "120px",
            class: "overflow-hidden rounded-2xl"
          }, null, _parent));
        }
        _push(`<!--]-->`);
      } else {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
          src: "/images/productPlaceholder.png",
          alt: "рецепт",
          width: "100%",
          height: !vueExports.unref(isMobile) ? "200px" : "120px",
          class: "overflow-hidden rounded-2xl"
        }, null, _parent));
      }
      _push(`<div class="bg-filling text-complimentary-reg absolute right-2 bottom-2 rounded-lg px-2 py-1"><div class="flex items-center gap-1"><span>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), {
        width: 16,
        height: 16
      }, null, _parent));
      _push(`</span><span class="mt-0.5">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(getFormattedTime)(_ctx.cookTime))}</span></div></div></div><div class="flex flex-auto flex-col p-2 sm:p-4 sm:pt-3"><div class="flex flex-1 flex-col"><h4 class="text-mob-small-bold">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.title)}</h4><p class="text-complimentary-reg mt-2 line-clamp-2">${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.description)}</p></div><div class="text-complimentary-reg mt-4 flex flex-col gap-1 lg:flex-row lg:items-center lg:gap-3"><div class="flex items-center gap-1"><div class="mb-0.5">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCookingPot), null, null, _parent));
      _push(`</div><p class="text-nowrap">${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("recipe_card.portion", _ctx.portions))}</p></div><div class="flex items-center gap-1"><div class="mb-0.5">`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconChefHat), null, null, _parent));
      _push(`</div><div class="flex items-center gap-1"><p>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("recipe_card.difficult"))}</p><div class="flex items-center gap-1"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(difficultyLevels), (filled, index) => {
        _push(`<span class="${serverRenderer_cjs_prodExports.ssrRenderClass([filled ? "bg-default" : "border-default border-2", "h-2 w-2 rounded-full"])}"></span>`);
      });
      _push(`<!--]--></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/entities/recipes/ui/RecipeCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
