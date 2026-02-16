import { v as vueExports, u as useScreenSize, s as serverRenderer_cjs_prodExports, l as link_default, _ as _sfc_main$2 } from "../ssr.js";
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ArticleCard",
  __ssrInlineRender: true,
  props: {
    id: {},
    title: {},
    description: {},
    image: {},
    articleCount: { default: 0 },
    updatedAt: {},
    isCategory: { type: Boolean, default: false }
  },
  setup(__props) {
    const { isDesktop, isTablet } = useScreenSize();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), vueExports.mergeProps({
        href: _ctx.isCategory ? _ctx.route("blog.selection.show", _ctx.id) : _ctx.route("blog.article.show", _ctx.id)
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<article class="flex h-full cursor-pointer flex-col sm:max-w-[352px]"${_scopeId}>`);
            if ((_a = _ctx.image) == null ? void 0 : _a.path) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                src: (_b = _ctx.image) == null ? void 0 : _b.path,
                alt: "Изображение статьи",
                width: "100%",
                height: vueExports.unref(isDesktop) || vueExports.unref(isTablet) ? "186px" : "120px",
                class: "overflow-hidden rounded-2xl"
              }, null, _parent2, _scopeId));
            } else {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                src: "/images/productPlaceholder.png",
                alt: "Изображение статьи",
                width: "100%",
                height: vueExports.unref(isDesktop) || vueExports.unref(isTablet) ? "186px" : "120px",
                "img-classes": "rounded-2xl"
              }, null, _parent2, _scopeId));
            }
            _push2(`<div class="flex flex-1 flex-col gap-2 p-4"${_scopeId}><div class="text-additional flex items-center justify-between"${_scopeId}>`);
            if (_ctx.isCategory) {
              _push2(`<span class="text-mob-small-reg"${_scopeId}><span class="text-small-bold"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.articleCount)}</span> статей</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="text-complimentary-reg"${_scopeId}>Обновлено: ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.updatedAt)}</span></div><header class="flex flex-col gap-2"${_scopeId}>`);
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "title", {}, () => {
              _push2(`<h3 class="text-mob-small-bold"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.title)}</h3>`);
            }, _push2, _parent2, _scopeId);
            if (_ctx.description) {
              _push2(`<span class="text-complimentary-reg"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.description)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</header></div></article>`);
          } else {
            return [
              vueExports.createVNode("article", { class: "flex h-full cursor-pointer flex-col sm:max-w-[352px]" }, [
                ((_c = _ctx.image) == null ? void 0 : _c.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$2), {
                  key: 0,
                  src: (_d = _ctx.image) == null ? void 0 : _d.path,
                  alt: "Изображение статьи",
                  width: "100%",
                  height: vueExports.unref(isDesktop) || vueExports.unref(isTablet) ? "186px" : "120px",
                  class: "overflow-hidden rounded-2xl"
                }, null, 8, ["src", "height"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$2), {
                  key: 1,
                  src: "/images/productPlaceholder.png",
                  alt: "Изображение статьи",
                  width: "100%",
                  height: vueExports.unref(isDesktop) || vueExports.unref(isTablet) ? "186px" : "120px",
                  "img-classes": "rounded-2xl"
                }, null, 8, ["height"])),
                vueExports.createVNode("div", { class: "flex flex-1 flex-col gap-2 p-4" }, [
                  vueExports.createVNode("div", { class: "text-additional flex items-center justify-between" }, [
                    _ctx.isCategory ? (vueExports.openBlock(), vueExports.createBlock("span", {
                      key: 0,
                      class: "text-mob-small-reg"
                    }, [
                      vueExports.createVNode("span", { class: "text-small-bold" }, vueExports.toDisplayString(_ctx.articleCount), 1),
                      vueExports.createTextVNode(" статей")
                    ])) : vueExports.createCommentVNode("", true),
                    vueExports.createVNode("span", { class: "text-complimentary-reg" }, "Обновлено: " + vueExports.toDisplayString(_ctx.updatedAt), 1)
                  ]),
                  vueExports.createVNode("header", { class: "flex flex-col gap-2" }, [
                    vueExports.renderSlot(_ctx.$slots, "title", {}, () => [
                      vueExports.createVNode("h3", { class: "text-mob-small-bold" }, vueExports.toDisplayString(_ctx.title), 1)
                    ]),
                    _ctx.description ? (vueExports.openBlock(), vueExports.createBlock("span", {
                      key: 0,
                      class: "text-complimentary-reg"
                    }, vueExports.toDisplayString(_ctx.description), 1)) : vueExports.createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/entities/article/ui/ArticleCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ArticleBlog",
  __ssrInlineRender: true,
  props: {
    id: {},
    title: {},
    description: {},
    image: {},
    updatedAt: {}
  },
  setup(__props) {
    const { isMobile } = useScreenSize();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), vueExports.mergeProps({
        href: _ctx.route("blog.article.show", _ctx.id),
        class: "border-stroke rounded-20 flex h-full max-w-[352px] cursor-pointer flex-col border"
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="relative"${_scopeId}><div class="absolute top-2 right-2 flex items-center gap-2"${_scopeId}>`);
            serverRenderer_cjs_prodExports.ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
            if ((_a = _ctx.image) == null ? void 0 : _a.path) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                src: (_b = _ctx.image) == null ? void 0 : _b.path,
                alt: _ctx.title,
                width: "100%",
                height: "200px",
                "img-classes": "rounded-20"
              }, null, _parent2, _scopeId));
            } else {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                src: "/images/productPlaceholder.png",
                alt: _ctx.title,
                width: "100%",
                height: vueExports.unref(isMobile) ? "120px" : "200px",
                "img-classes": "rounded-20"
              }, null, _parent2, _scopeId));
            }
            _push2(`</div><div class="flex flex-auto flex-col p-2 sm:p-4 sm:pt-3"${_scopeId}><div class="flex flex-1 flex-col"${_scopeId}><h4 class="text-mob-small-bold"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.title)}</h4><p class="text-complimentary-reg mt-2 line-clamp-2"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.description)}</p></div></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "relative" }, [
                vueExports.createVNode("div", { class: "absolute top-2 right-2 flex items-center gap-2" }, [
                  vueExports.renderSlot(_ctx.$slots, "actions")
                ]),
                ((_c = _ctx.image) == null ? void 0 : _c.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$2), {
                  key: 0,
                  src: (_d = _ctx.image) == null ? void 0 : _d.path,
                  alt: _ctx.title,
                  width: "100%",
                  height: "200px",
                  "img-classes": "rounded-20"
                }, null, 8, ["src", "alt"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$2), {
                  key: 1,
                  src: "/images/productPlaceholder.png",
                  alt: _ctx.title,
                  width: "100%",
                  height: vueExports.unref(isMobile) ? "120px" : "200px",
                  "img-classes": "rounded-20"
                }, null, 8, ["alt", "height"]))
              ]),
              vueExports.createVNode("div", { class: "flex flex-auto flex-col p-2 sm:p-4 sm:pt-3" }, [
                vueExports.createVNode("div", { class: "flex flex-1 flex-col" }, [
                  vueExports.createVNode("h4", { class: "text-mob-small-bold" }, vueExports.toDisplayString(_ctx.title), 1),
                  vueExports.createVNode("p", { class: "text-complimentary-reg mt-2 line-clamp-2" }, vueExports.toDisplayString(_ctx.description), 1)
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/entities/article/ui/ArticleBlog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
