import { v as vueExports, u as useScreenSize, T, c as useForm, s as serverRenderer_cjs_prodExports, V as VContainer, x as _sfc_main$1, l as link_default, n as _sfc_main$2, _ as _sfc_main$4, H as VScrollPanel, E as IconPlus, F as IconSearch, J as IconSort, K as _sfc_main$6, L as _sfc_main$7, d as _sfc_main$8, a as VButton, k as _sfc_main$9, m as IconCaretRight, t as _export_sfc } from "../ssr.js";
import { useI18n } from "vue-i18n";
import { a as _sfc_main$3, _ as _sfc_main$a } from "./ArticleBlog-Ba0P9vkG.js";
import { _ as _sfc_main$5 } from "./EmptyPlug-BgfBZzl1.js";
import { _ as _sfc_main$b } from "./VShare-C36WNIjH.js";
import { router } from "@inertiajs/core";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "@vue/shared";
import "@vue/compiler-ssr";
import "node:stream";
import "lodash-es";
import "@inertiajs/core/server";
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
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "BlogPage",
  __ssrInlineRender: true,
  props: {
    popular_article: {},
    popular_selections: {},
    mainSelection: {},
    selections: {}
  },
  setup(__props) {
    var _a, _b, _c, _d;
    const { isDesktop, isMobile } = useScreenSize();
    const breadcrumbItems = [
      { label: "Главная", route: T("main-page") },
      { label: "Блог", route: T("blog.index") }
    ];
    const filters = useForm({
      sort: ((_a = T().queryParams) == null ? void 0 : _a.sort) ?? void 0,
      blog_search: ((_b = T().queryParams) == null ? void 0 : _b.blog_search) ?? void 0
    });
    const filtersApplied = vueExports.ref(false);
    if (((_c = T().queryParams) == null ? void 0 : _c.sort) || ((_d = T().queryParams) == null ? void 0 : _d.blog_search)) {
      filtersApplied.value = true;
    }
    vueExports.watch(
      () => filters.blog_search,
      (newVal, oldVal) => {
        if (oldVal && !newVal) {
          resetSearch();
        }
      }
    );
    const sortOptions = vueExports.ref([
      {
        label: "Популярные",
        value: "popular"
      },
      {
        label: "Новинки",
        value: "newest"
      }
    ]);
    const resetSearch = () => {
      filters.blog_search = "";
      filters.get(T("blog.index"), {
        preserveScroll: true
      });
    };
    const applyFilters = () => {
      return new Promise((resolve) => {
        filters.get(T("blog.index"), {
          preserveScroll: true,
          onSuccess: () => {
            filtersApplied.value = true;
            resolve();
          }
        });
      });
    };
    const isSortModalOpen = vueExports.ref(false);
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), { class: "px-6 sm:px-8" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!vueExports.unref(isDesktop)) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
                model: breadcrumbItems,
                class: "mb-4 bg-white"
              }, {
                item: vueExports.withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                      href: item.route
                    }, {
                      default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${serverRenderer_cjs_prodExports.ssrInterpolate(item.label)}`);
                        } else {
                          return [
                            vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(link_default), {
                        class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                        href: item.route
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="rounded-20 blog-banner mb-4 h-50 bg-gray-100 mask-[url(/images/masks/for_catalog_mobile.svg)] mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 pt-4 min-[425px]:mask-[url(/images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-65 lg:px-8 lg:pt-8" data-v-c3722c6a${_scopeId}><div class="flex h-42 flex-col justify-end gap-4 pb-8 lg:h-47 lg:justify-between" data-v-c3722c6a${_scopeId}>`);
            if (vueExports.unref(isDesktop)) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { model: breadcrumbItems }, {
                item: vueExports.withCtx(({ item }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                      href: item.route
                    }, {
                      default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${serverRenderer_cjs_prodExports.ssrInterpolate(item.label)}`);
                        } else {
                          return [
                            vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(link_default), {
                        class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                        href: item.route
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h1 class="font-vast text-vast-mob-title-bold lg:text-vast-title-bold text-white" data-v-c3722c6a${_scopeId}>Блог</h1></div></div>`);
          } else {
            return [
              !vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
                key: 0,
                model: breadcrumbItems,
                class: "mb-4 bg-white"
              }, {
                item: vueExports.withCtx(({ item }) => [
                  vueExports.createVNode(vueExports.unref(link_default), {
                    class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                    href: item.route
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                    ]),
                    _: 2
                  }, 1032, ["href"])
                ]),
                _: 1
              })) : vueExports.createCommentVNode("", true),
              vueExports.createVNode("div", { class: "rounded-20 blog-banner mb-4 h-50 bg-gray-100 mask-[url(/images/masks/for_catalog_mobile.svg)] mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 pt-4 min-[425px]:mask-[url(/images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-65 lg:px-8 lg:pt-8" }, [
                vueExports.createVNode("div", { class: "flex h-42 flex-col justify-end gap-4 pb-8 lg:h-47 lg:justify-between" }, [
                  vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
                    key: 0,
                    model: breadcrumbItems
                  }, {
                    item: vueExports.withCtx(({ item }) => [
                      vueExports.createVNode(vueExports.unref(link_default), {
                        class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                        href: item.route
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ]),
                    _: 1
                  })) : vueExports.createCommentVNode("", true),
                  vueExports.createVNode("h1", { class: "font-vast text-vast-mob-title-bold lg:text-vast-title-bold text-white" }, "Блог")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), null, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), null, vueExports.createSlots({
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l;
                if (_push3) {
                  if (filtersApplied.value && (vueExports.unref(filters).blog_search || vueExports.unref(filters).sort)) {
                    _push3(`<!--[-->`);
                    if (_ctx.selections.length > 0) {
                      _push3(`<div class="mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4" data-v-c3722c6a${_scopeId2}><!--[-->`);
                      serverRenderer_cjs_prodExports.ssrRenderList(_ctx.selections, (article) => {
                        _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                          id: article.id,
                          key: article.id,
                          title: article.title,
                          image: article.image,
                          description: article.description,
                          "article-count": article.article_count,
                          "is-category": "",
                          "updated-at": article.updated_at
                        }, null, _parent3, _scopeId2));
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<div class="bg-light-gray mx-auto mt-16 max-w-[1200px] rounded-[40px] md:mt-30" data-v-c3722c6a${_scopeId2}><div class="flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48" data-v-c3722c6a${_scopeId2}>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
                        src: "/images/test-images/image_exclamation.webp",
                        alt: "восклицание",
                        class: "-mt-20 max-w-[120px] lg:max-w-[200px]"
                      }, null, _parent3, _scopeId2));
                      _push3(`<p class="text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]" data-v-c3722c6a${_scopeId2}> К сожалению, по заданным параметрам ничего не найдено </p></div></div>`);
                    }
                    _push3(`<!--]-->`);
                  } else if (!_ctx.popular_selections.length && !_ctx.selections.length && !_ctx.mainSelection) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), { class: "mx-auto mt-6 md:mt-15" }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<div class="${serverRenderer_cjs_prodExports.ssrRenderClass([_ctx.popular_selections.length ? "xl:grid-cols-[352px_1fr_480px]" : "xl:grid-cols-2", "mt-4 grid gap-8 md:grid-cols-2"])}" data-v-c3722c6a${_scopeId2}><div class="flex flex-col gap-6" data-v-c3722c6a${_scopeId2}><!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(_ctx.selections, (article) => {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                        id: article.id,
                        key: article.id,
                        title: article.title,
                        image: article.image,
                        description: article.description,
                        "article-count": article.article_count,
                        "is-category": "",
                        "updated-at": article.updated_at
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                    if (!!((_a2 = _ctx.mainSelection) == null ? void 0 : _a2.id)) {
                      _push3(`<div class="rounded-20 hidden h-full w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat p-2 max-md:flex max-md:h-60 max-md:py-3 md:p-6 min-xl:flex" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({
                        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${((_c2 = (_b2 = _ctx.mainSelection) == null ? void 0 : _b2.image) == null ? void 0 : _c2.path) || "/images/productPlaceholder.png"})`,
                        backgroundColor: "var(--color-gray-200)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundBlendMode: "multiply"
                      })}" data-v-c3722c6a${_scopeId2}><div class="mt-auto flex flex-1 items-end text-white" data-v-c3722c6a${_scopeId2}><div class="flex w-full flex-col gap-2" data-v-c3722c6a${_scopeId2}><div class="flex w-full items-center justify-between" data-v-c3722c6a${_scopeId2}><span class="text-mob-small-reg" data-v-c3722c6a${_scopeId2}><span class="text-small-bold" data-v-c3722c6a${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.mainSelection.article_count)}</span> статей</span><span class="text-complimentary-reg" data-v-c3722c6a${_scopeId2}>Обновлено: ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.mainSelection.updated_at)}</span></div><h2 class="text-mob-small-bold md:text-large-bold" data-v-c3722c6a${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.mainSelection.title)}</h2><p class="text-subsidiary-reg md:text-mob-small-reg" data-v-c3722c6a${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.mainSelection.description)}</p></div></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (_ctx.popular_selections.length) {
                      _push3(`<div class="bg-light-gray rounded-20 px-2 py-3 md:px-4 md:py-6" data-v-c3722c6a${_scopeId2}><h2 class="text-default-bold sm:text-heavy-bold mb-1" data-v-c3722c6a${_scopeId2}>Популярное</h2>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VScrollPanel), { class: "max-h-[460px] md:max-h-[600px]" }, {
                        default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            serverRenderer_cjs_prodExports.ssrRenderList(_ctx.popular_selections, (article) => {
                              _push4(`<article class="border-b-filling border-b py-3" data-v-c3722c6a${_scopeId3}>`);
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                                href: vueExports.unref(T)("blog.selection.show", article.id),
                                class: "flex"
                              }, {
                                default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
                                      src: article.image.path,
                                      alt: "Изображение статьи",
                                      width: vueExports.unref(isDesktop) ? "122px" : "82px",
                                      height: vueExports.unref(isDesktop) ? "122px" : "82px",
                                      "img-classes": "rounded-2xl",
                                      class: "shrink-0"
                                    }, null, _parent5, _scopeId4));
                                    _push5(`<div class="flex w-full flex-col gap-2 p-2 md:p-4" data-v-c3722c6a${_scopeId4}><div class="text-additional flex items-center justify-between" data-v-c3722c6a${_scopeId4}><span class="text-subsidiary-reg md:text-mob-small-reg" data-v-c3722c6a${_scopeId4}><span class="text-subsidiary-medium md:text-small-bold" data-v-c3722c6a${_scopeId4}>${serverRenderer_cjs_prodExports.ssrInterpolate(article.article_count)}</span> статей</span><span class="text-complimentary-reg" data-v-c3722c6a${_scopeId4}>Обновлено: ${serverRenderer_cjs_prodExports.ssrInterpolate(article.updated_at)}</span></div><h2 class="text-mob-small-bold md:text-default-bold" data-v-c3722c6a${_scopeId4}>${serverRenderer_cjs_prodExports.ssrInterpolate(article.title)}</h2><p class="text-complimentary-reg md:text-mob-small-reg" data-v-c3722c6a${_scopeId4}>${serverRenderer_cjs_prodExports.ssrInterpolate(article.description)}</p></div>`);
                                  } else {
                                    return [
                                      vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                        src: article.image.path,
                                        alt: "Изображение статьи",
                                        width: vueExports.unref(isDesktop) ? "122px" : "82px",
                                        height: vueExports.unref(isDesktop) ? "122px" : "82px",
                                        "img-classes": "rounded-2xl",
                                        class: "shrink-0"
                                      }, null, 8, ["src", "width", "height"]),
                                      vueExports.createVNode("div", { class: "flex w-full flex-col gap-2 p-2 md:p-4" }, [
                                        vueExports.createVNode("div", { class: "text-additional flex items-center justify-between" }, [
                                          vueExports.createVNode("span", { class: "text-subsidiary-reg md:text-mob-small-reg" }, [
                                            vueExports.createVNode("span", { class: "text-subsidiary-medium md:text-small-bold" }, vueExports.toDisplayString(article.article_count), 1),
                                            vueExports.createTextVNode(" статей")
                                          ]),
                                          vueExports.createVNode("span", { class: "text-complimentary-reg" }, "Обновлено: " + vueExports.toDisplayString(article.updated_at), 1)
                                        ]),
                                        vueExports.createVNode("h2", { class: "text-mob-small-bold md:text-default-bold" }, vueExports.toDisplayString(article.title), 1),
                                        vueExports.createVNode("p", { class: "text-complimentary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(article.description), 1)
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</article>`);
                            });
                            _push4(`<!--]-->`);
                          } else {
                            return [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.popular_selections, (article) => {
                                return vueExports.openBlock(), vueExports.createBlock("article", {
                                  key: article.id,
                                  class: "border-b-filling border-b py-3"
                                }, [
                                  vueExports.createVNode(vueExports.unref(link_default), {
                                    href: vueExports.unref(T)("blog.selection.show", article.id),
                                    class: "flex"
                                  }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                        src: article.image.path,
                                        alt: "Изображение статьи",
                                        width: vueExports.unref(isDesktop) ? "122px" : "82px",
                                        height: vueExports.unref(isDesktop) ? "122px" : "82px",
                                        "img-classes": "rounded-2xl",
                                        class: "shrink-0"
                                      }, null, 8, ["src", "width", "height"]),
                                      vueExports.createVNode("div", { class: "flex w-full flex-col gap-2 p-2 md:p-4" }, [
                                        vueExports.createVNode("div", { class: "text-additional flex items-center justify-between" }, [
                                          vueExports.createVNode("span", { class: "text-subsidiary-reg md:text-mob-small-reg" }, [
                                            vueExports.createVNode("span", { class: "text-subsidiary-medium md:text-small-bold" }, vueExports.toDisplayString(article.article_count), 1),
                                            vueExports.createTextVNode(" статей")
                                          ]),
                                          vueExports.createVNode("span", { class: "text-complimentary-reg" }, "Обновлено: " + vueExports.toDisplayString(article.updated_at), 1)
                                        ]),
                                        vueExports.createVNode("h2", { class: "text-mob-small-bold md:text-default-bold" }, vueExports.toDisplayString(article.title), 1),
                                        vueExports.createVNode("p", { class: "text-complimentary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(article.description), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ]);
                              }), 128))
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (!!((_d2 = _ctx.mainSelection) == null ? void 0 : _d2.id)) {
                      _push3(`<div class="rounded-20 col-span-2 flex h-full min-h-70 w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat p-2 max-md:hidden max-md:h-60 max-md:py-3 md:p-6 xl:hidden" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({
                        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${((_f = (_e = _ctx.mainSelection) == null ? void 0 : _e.image) == null ? void 0 : _f.path) || "/images/productPlaceholder.png"})`,
                        backgroundColor: "var(--color-gray-200)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundBlendMode: "multiply"
                      })}" data-v-c3722c6a${_scopeId2}><div class="mt-auto flex flex-1 items-end text-white" data-v-c3722c6a${_scopeId2}><div class="flex w-full flex-col gap-2" data-v-c3722c6a${_scopeId2}><div class="flex w-full items-center justify-between" data-v-c3722c6a${_scopeId2}><span class="text-mob-small-reg" data-v-c3722c6a${_scopeId2}><span class="text-small-bold" data-v-c3722c6a${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.mainSelection.article_count)}</span> статей</span><span class="text-complimentary-reg" data-v-c3722c6a${_scopeId2}>Обновлено: ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.mainSelection.updated_at)}</span></div><h2 class="text-mob-small-bold md:text-large-bold" data-v-c3722c6a${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.mainSelection.title)}</h2><p class="text-subsidiary-reg md:text-mob-small-reg" data-v-c3722c6a${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.mainSelection.description)}</p></div></div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  }
                } else {
                  return [
                    filtersApplied.value && (vueExports.unref(filters).blog_search || vueExports.unref(filters).sort) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                      _ctx.selections.length > 0 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        class: "mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4"
                      }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.selections, (article) => {
                          return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$3), {
                            id: article.id,
                            key: article.id,
                            title: article.title,
                            image: article.image,
                            description: article.description,
                            "article-count": article.article_count,
                            "is-category": "",
                            "updated-at": article.updated_at
                          }, null, 8, ["id", "title", "image", "description", "article-count", "updated-at"]);
                        }), 128))
                      ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 1,
                        class: "bg-light-gray mx-auto mt-16 max-w-[1200px] rounded-[40px] md:mt-30"
                      }, [
                        vueExports.createVNode("div", { class: "flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48" }, [
                          vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                            src: "/images/test-images/image_exclamation.webp",
                            alt: "восклицание",
                            class: "-mt-20 max-w-[120px] lg:max-w-[200px]"
                          }),
                          vueExports.createVNode("p", { class: "text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]" }, " К сожалению, по заданным параметрам ничего не найдено ")
                        ])
                      ]))
                    ], 64)) : !_ctx.popular_selections.length && !_ctx.selections.length && !_ctx.mainSelection ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                      key: 1,
                      class: "mx-auto mt-6 md:mt-15"
                    })) : (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 2,
                      class: ["mt-4 grid gap-8 md:grid-cols-2", _ctx.popular_selections.length ? "xl:grid-cols-[352px_1fr_480px]" : "xl:grid-cols-2"]
                    }, [
                      vueExports.createVNode("div", { class: "flex flex-col gap-6" }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.selections, (article) => {
                          return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$3), {
                            id: article.id,
                            key: article.id,
                            title: article.title,
                            image: article.image,
                            description: article.description,
                            "article-count": article.article_count,
                            "is-category": "",
                            "updated-at": article.updated_at
                          }, null, 8, ["id", "title", "image", "description", "article-count", "updated-at"]);
                        }), 128))
                      ]),
                      !!((_g = _ctx.mainSelection) == null ? void 0 : _g.id) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        class: "rounded-20 hidden h-full w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat p-2 max-md:flex max-md:h-60 max-md:py-3 md:p-6 min-xl:flex",
                        style: {
                          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${((_i = (_h = _ctx.mainSelection) == null ? void 0 : _h.image) == null ? void 0 : _i.path) || "/images/productPlaceholder.png"})`,
                          backgroundColor: "var(--color-gray-200)",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundBlendMode: "multiply"
                        },
                        onClick: ($event) => vueExports.unref(router).visit(vueExports.unref(T)("blog.selection.show", _ctx.mainSelection.id))
                      }, [
                        vueExports.createVNode("div", { class: "mt-auto flex flex-1 items-end text-white" }, [
                          vueExports.createVNode("div", { class: "flex w-full flex-col gap-2" }, [
                            vueExports.createVNode("div", { class: "flex w-full items-center justify-between" }, [
                              vueExports.createVNode("span", { class: "text-mob-small-reg" }, [
                                vueExports.createVNode("span", { class: "text-small-bold" }, vueExports.toDisplayString(_ctx.mainSelection.article_count), 1),
                                vueExports.createTextVNode(" статей")
                              ]),
                              vueExports.createVNode("span", { class: "text-complimentary-reg" }, "Обновлено: " + vueExports.toDisplayString(_ctx.mainSelection.updated_at), 1)
                            ]),
                            vueExports.createVNode("h2", { class: "text-mob-small-bold md:text-large-bold" }, vueExports.toDisplayString(_ctx.mainSelection.title), 1),
                            vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(_ctx.mainSelection.description), 1)
                          ])
                        ])
                      ], 12, ["onClick"])) : vueExports.createCommentVNode("", true),
                      _ctx.popular_selections.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 1,
                        class: "bg-light-gray rounded-20 px-2 py-3 md:px-4 md:py-6"
                      }, [
                        vueExports.createVNode("h2", { class: "text-default-bold sm:text-heavy-bold mb-1" }, "Популярное"),
                        vueExports.createVNode(vueExports.unref(VScrollPanel), { class: "max-h-[460px] md:max-h-[600px]" }, {
                          default: vueExports.withCtx(() => [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.popular_selections, (article) => {
                              return vueExports.openBlock(), vueExports.createBlock("article", {
                                key: article.id,
                                class: "border-b-filling border-b py-3"
                              }, [
                                vueExports.createVNode(vueExports.unref(link_default), {
                                  href: vueExports.unref(T)("blog.selection.show", article.id),
                                  class: "flex"
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                      src: article.image.path,
                                      alt: "Изображение статьи",
                                      width: vueExports.unref(isDesktop) ? "122px" : "82px",
                                      height: vueExports.unref(isDesktop) ? "122px" : "82px",
                                      "img-classes": "rounded-2xl",
                                      class: "shrink-0"
                                    }, null, 8, ["src", "width", "height"]),
                                    vueExports.createVNode("div", { class: "flex w-full flex-col gap-2 p-2 md:p-4" }, [
                                      vueExports.createVNode("div", { class: "text-additional flex items-center justify-between" }, [
                                        vueExports.createVNode("span", { class: "text-subsidiary-reg md:text-mob-small-reg" }, [
                                          vueExports.createVNode("span", { class: "text-subsidiary-medium md:text-small-bold" }, vueExports.toDisplayString(article.article_count), 1),
                                          vueExports.createTextVNode(" статей")
                                        ]),
                                        vueExports.createVNode("span", { class: "text-complimentary-reg" }, "Обновлено: " + vueExports.toDisplayString(article.updated_at), 1)
                                      ]),
                                      vueExports.createVNode("h2", { class: "text-mob-small-bold md:text-default-bold" }, vueExports.toDisplayString(article.title), 1),
                                      vueExports.createVNode("p", { class: "text-complimentary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(article.description), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ]);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ])) : vueExports.createCommentVNode("", true),
                      !!((_j = _ctx.mainSelection) == null ? void 0 : _j.id) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 2,
                        class: "rounded-20 col-span-2 flex h-full min-h-70 w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat p-2 max-md:hidden max-md:h-60 max-md:py-3 md:p-6 xl:hidden",
                        style: {
                          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${((_l = (_k = _ctx.mainSelection) == null ? void 0 : _k.image) == null ? void 0 : _l.path) || "/images/productPlaceholder.png"})`,
                          backgroundColor: "var(--color-gray-200)",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundBlendMode: "multiply"
                        },
                        onClick: ($event) => vueExports.unref(router).visit(vueExports.unref(T)("blog.selection.show", _ctx.mainSelection.id))
                      }, [
                        vueExports.createVNode("div", { class: "mt-auto flex flex-1 items-end text-white" }, [
                          vueExports.createVNode("div", { class: "flex w-full flex-col gap-2" }, [
                            vueExports.createVNode("div", { class: "flex w-full items-center justify-between" }, [
                              vueExports.createVNode("span", { class: "text-mob-small-reg" }, [
                                vueExports.createVNode("span", { class: "text-small-bold" }, vueExports.toDisplayString(_ctx.mainSelection.article_count), 1),
                                vueExports.createTextVNode(" статей")
                              ]),
                              vueExports.createVNode("span", { class: "text-complimentary-reg" }, "Обновлено: " + vueExports.toDisplayString(_ctx.mainSelection.updated_at), 1)
                            ]),
                            vueExports.createVNode("h2", { class: "text-mob-small-bold md:text-large-bold" }, vueExports.toDisplayString(_ctx.mainSelection.title), 1),
                            vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(_ctx.mainSelection.description), 1)
                          ])
                        ])
                      ], 12, ["onClick"])) : vueExports.createCommentVNode("", true)
                    ], 2))
                  ];
                }
              }),
              _: 2
            }, [
              _ctx.popular_selections.length || _ctx.selections.length || _ctx.mainSelection ? {
                name: "header",
                fn: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<header class="flex items-center justify-between gap-3" data-v-c3722c6a${_scopeId2}><h2 class="text-default-bold sm:text-heavy-bold" data-v-c3722c6a${_scopeId2}>Категории блога</h2><form class="flex flex-grow flex-row items-stretch justify-end gap-2" data-v-c3722c6a${_scopeId2}>`);
                    if (vueExports.unref(isDesktop)) {
                      _push3(`<div class="flex max-w-150 flex-1 items-center justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4" data-v-c3722c6a${_scopeId2}><input${serverRenderer_cjs_prodExports.ssrRenderAttr("value", vueExports.unref(filters).blog_search)} type="text" class="text-subsidiary-reg w-full outline-none"${serverRenderer_cjs_prodExports.ssrRenderAttr("placeholder", vueExports.unref(t)("header.search"))} data-v-c3722c6a${_scopeId2}><span data-v-c3722c6a${_scopeId2}>`);
                      if (!!vueExports.unref(filters).blog_search) {
                        _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPlus), { class: "text-default rotate-45 cursor-pointer" }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</span><button class="bg-text disabled:bg-filling cursor-pointer rounded-[50px] p-2 text-white disabled:cursor-not-allowed disabled:text-[#666666]"${serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(!vueExports.unref(filters).blog_search) ? " disabled" : ""} data-v-c3722c6a${_scopeId2}>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconSearch), null, null, _parent3, _scopeId2));
                      _push3(`</button></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (!vueExports.unref(isMobile)) {
                      _push3(`<div class="relative" data-v-c3722c6a${_scopeId2}>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconSort), { class: "absolute start-4 top-1/2 z-1 -translate-y-1/2" }, null, _parent3, _scopeId2));
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, {
                        modelValue: vueExports.unref(filters).sort,
                        "onUpdate:modelValue": ($event) => vueExports.unref(filters).sort = $event,
                        options: sortOptions.value,
                        "option-value": "value",
                        "option-label": "label",
                        "pt:overlay": "!rounded-20 px-2 mt-2",
                        variant: "filled",
                        class: "p-1 pl-12",
                        placeholder: "Сортировка",
                        "show-clear": "",
                        onValueChange: () => applyFilters()
                      }, {
                        header: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="p-2" data-v-c3722c6a${_scopeId3}><span class="text-subsidiary-medium text-nowrap" data-v-c3722c6a${_scopeId3}>Какие статьи показать сначала</span></div>`);
                          } else {
                            return [
                              vueExports.createVNode("div", { class: "p-2" }, [
                                vueExports.createVNode("span", { class: "text-subsidiary-medium text-nowrap" }, "Какие статьи показать сначала")
                              ])
                            ];
                          }
                        }),
                        option: vueExports.withCtx(({ option, selected }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
                              "model-value": selected,
                              "input-id": option.value,
                              binary: ""
                            }, null, _parent4, _scopeId3));
                            _push4(`<label class="cursor-pointer pl-3"${serverRenderer_cjs_prodExports.ssrRenderAttr("for", option.value)} data-v-c3722c6a${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(option.label)}</label>`);
                          } else {
                            return [
                              vueExports.createVNode(_sfc_main$7, {
                                "model-value": selected,
                                "input-id": option.value,
                                binary: ""
                              }, null, 8, ["model-value", "input-id"]),
                              vueExports.createVNode("label", {
                                class: "cursor-pointer pl-3",
                                for: option.value
                              }, vueExports.toDisplayString(option.label), 9, ["for"])
                            ];
                          }
                        }),
                        clearicon: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<button class="text-additional inline-flex cursor-pointer items-center justify-center" data-v-c3722c6a${_scopeId3}><i class="pi pi-times" data-v-c3722c6a${_scopeId3}></i></button>`);
                          } else {
                            return [
                              vueExports.createVNode("button", {
                                class: "text-additional inline-flex cursor-pointer items-center justify-center",
                                onClick: vueExports.withModifiers(
                                  () => {
                                    vueExports.unref(filters).sort = void 0;
                                    applyFilters();
                                  },
                                  ["stop"]
                                )
                              }, [
                                vueExports.createVNode("i", { class: "pi pi-times" })
                              ], 8, ["onClick"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<button class="bg-input rounded-20 flex items-center gap-2 px-4 py-3.5" data-v-c3722c6a${_scopeId2}>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconSort), { class: "h-4 w-4" }, null, _parent3, _scopeId2));
                      _push3(`<span class="text-subsidiary-reg" data-v-c3722c6a${_scopeId2}>Сортировка</span></button>`);
                    }
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$8, {
                      visible: isSortModalOpen.value,
                      "onUpdate:visible": ($event) => isSortModalOpen.value = $event,
                      draggable: false,
                      modal: "",
                      class: "w-80 max-md:mx-4",
                      header: "Сортировка"
                    }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p class="text-subsidiary-reg md:text-mob-small-reg" data-v-c3722c6a${_scopeId3}>Какие новости показать сначала</p><div class="mt-3 flex flex-col gap-2" data-v-c3722c6a${_scopeId3}><!--[-->`);
                          serverRenderer_cjs_prodExports.ssrRenderList(sortOptions.value, (sort) => {
                            _push4(`<div class="ml-2" data-v-c3722c6a${_scopeId3}>`);
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
                              modelValue: vueExports.unref(filters).sort,
                              "onUpdate:modelValue": ($event) => vueExports.unref(filters).sort = $event,
                              "input-id": sort.value,
                              name: sort.label,
                              value: sort.value
                            }, null, _parent4, _scopeId3));
                            _push4(`<label class="cursor-pointer pl-3"${serverRenderer_cjs_prodExports.ssrRenderAttr("for", sort.label)} data-v-c3722c6a${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(sort.label)}</label></div>`);
                          });
                          _push4(`<!--]-->`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                            label: "Применить",
                            class: "mt-3",
                            onClick: ($event) => {
                              isSortModalOpen.value = false;
                              applyFilters();
                            }
                          }, null, _parent4, _scopeId3));
                          _push4(`</div>`);
                        } else {
                          return [
                            vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, "Какие новости показать сначала"),
                            vueExports.createVNode("div", { class: "mt-3 flex flex-col gap-2" }, [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(sortOptions.value, (sort) => {
                                return vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: sort.label,
                                  class: "ml-2"
                                }, [
                                  vueExports.createVNode(_sfc_main$7, {
                                    modelValue: vueExports.unref(filters).sort,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(filters).sort = $event,
                                    "input-id": sort.value,
                                    name: sort.label,
                                    value: sort.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                                  vueExports.createVNode("label", {
                                    class: "cursor-pointer pl-3",
                                    for: sort.label
                                  }, vueExports.toDisplayString(sort.label), 9, ["for"])
                                ]);
                              }), 128)),
                              vueExports.createVNode(vueExports.unref(VButton), {
                                label: "Применить",
                                class: "mt-3",
                                onClick: ($event) => {
                                  isSortModalOpen.value = false;
                                  applyFilters();
                                }
                              }, null, 8, ["onClick"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</form></header>`);
                    if (!vueExports.unref(isDesktop)) {
                      _push3(`<div class="mt-2 flex flex-1 items-center justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4" data-v-c3722c6a${_scopeId2}><input${serverRenderer_cjs_prodExports.ssrRenderAttr("value", vueExports.unref(filters).blog_search)} type="text" class="text-subsidiary-reg w-full outline-none"${serverRenderer_cjs_prodExports.ssrRenderAttr("placeholder", vueExports.unref(t)("header.search"))} data-v-c3722c6a${_scopeId2}><span data-v-c3722c6a${_scopeId2}>`);
                      if (!!vueExports.unref(filters).blog_search) {
                        _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPlus), { class: "text-default rotate-45 cursor-pointer" }, null, _parent3, _scopeId2));
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</span><button class="bg-text disabled:bg-filling cursor-pointer rounded-[50px] p-2 text-white disabled:cursor-not-allowed disabled:text-[#666666]"${serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(!vueExports.unref(filters).blog_search) ? " disabled" : ""} data-v-c3722c6a${_scopeId2}>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconSearch), null, null, _parent3, _scopeId2));
                      _push3(`</button></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      vueExports.createVNode("header", { class: "flex items-center justify-between gap-3" }, [
                        vueExports.createVNode("h2", { class: "text-default-bold sm:text-heavy-bold" }, "Категории блога"),
                        vueExports.createVNode("form", {
                          class: "flex flex-grow flex-row items-stretch justify-end gap-2",
                          onSubmit: vueExports.withModifiers(() => {
                          }, ["prevent"])
                        }, [
                          vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "flex max-w-150 flex-1 items-center justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4"
                          }, [
                            vueExports.withDirectives(vueExports.createVNode("input", {
                              "onUpdate:modelValue": ($event) => vueExports.unref(filters).blog_search = $event,
                              type: "text",
                              class: "text-subsidiary-reg w-full outline-none",
                              placeholder: vueExports.unref(t)("header.search")
                            }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                              [vueExports.vModelText, vueExports.unref(filters).blog_search]
                            ]),
                            vueExports.createVNode("span", {
                              onClick: vueExports.withModifiers(resetSearch, ["stop"])
                            }, [
                              !!vueExports.unref(filters).blog_search ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(IconPlus), {
                                key: 0,
                                class: "text-default rotate-45 cursor-pointer"
                              })) : vueExports.createCommentVNode("", true)
                            ]),
                            vueExports.createVNode("button", {
                              class: "bg-text disabled:bg-filling cursor-pointer rounded-[50px] p-2 text-white disabled:cursor-not-allowed disabled:text-[#666666]",
                              disabled: !vueExports.unref(filters).blog_search,
                              onClick: applyFilters
                            }, [
                              vueExports.createVNode(vueExports.unref(IconSearch))
                            ], 8, ["disabled"])
                          ])) : vueExports.createCommentVNode("", true),
                          !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 1,
                            class: "relative"
                          }, [
                            vueExports.createVNode(vueExports.unref(IconSort), { class: "absolute start-4 top-1/2 z-1 -translate-y-1/2" }),
                            vueExports.createVNode(_sfc_main$6, {
                              modelValue: vueExports.unref(filters).sort,
                              "onUpdate:modelValue": ($event) => vueExports.unref(filters).sort = $event,
                              options: sortOptions.value,
                              "option-value": "value",
                              "option-label": "label",
                              "pt:overlay": "!rounded-20 px-2 mt-2",
                              variant: "filled",
                              class: "p-1 pl-12",
                              placeholder: "Сортировка",
                              "show-clear": "",
                              onValueChange: () => applyFilters()
                            }, {
                              header: vueExports.withCtx(() => [
                                vueExports.createVNode("div", { class: "p-2" }, [
                                  vueExports.createVNode("span", { class: "text-subsidiary-medium text-nowrap" }, "Какие статьи показать сначала")
                                ])
                              ]),
                              option: vueExports.withCtx(({ option, selected }) => [
                                vueExports.createVNode(_sfc_main$7, {
                                  "model-value": selected,
                                  "input-id": option.value,
                                  binary: ""
                                }, null, 8, ["model-value", "input-id"]),
                                vueExports.createVNode("label", {
                                  class: "cursor-pointer pl-3",
                                  for: option.value
                                }, vueExports.toDisplayString(option.label), 9, ["for"])
                              ]),
                              clearicon: vueExports.withCtx(() => [
                                vueExports.createVNode("button", {
                                  class: "text-additional inline-flex cursor-pointer items-center justify-center",
                                  onClick: vueExports.withModifiers(
                                    () => {
                                      vueExports.unref(filters).sort = void 0;
                                      applyFilters();
                                    },
                                    ["stop"]
                                  )
                                }, [
                                  vueExports.createVNode("i", { class: "pi pi-times" })
                                ], 8, ["onClick"])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "options", "onValueChange"])
                          ])) : (vueExports.openBlock(), vueExports.createBlock("button", {
                            key: 2,
                            class: "bg-input rounded-20 flex items-center gap-2 px-4 py-3.5",
                            onClick: ($event) => isSortModalOpen.value = true
                          }, [
                            vueExports.createVNode(vueExports.unref(IconSort), { class: "h-4 w-4" }),
                            vueExports.createVNode("span", { class: "text-subsidiary-reg" }, "Сортировка")
                          ], 8, ["onClick"])),
                          vueExports.createVNode(_sfc_main$8, {
                            visible: isSortModalOpen.value,
                            "onUpdate:visible": ($event) => isSortModalOpen.value = $event,
                            draggable: false,
                            modal: "",
                            class: "w-80 max-md:mx-4",
                            header: "Сортировка"
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, "Какие новости показать сначала"),
                              vueExports.createVNode("div", { class: "mt-3 flex flex-col gap-2" }, [
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(sortOptions.value, (sort) => {
                                  return vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: sort.label,
                                    class: "ml-2"
                                  }, [
                                    vueExports.createVNode(_sfc_main$7, {
                                      modelValue: vueExports.unref(filters).sort,
                                      "onUpdate:modelValue": ($event) => vueExports.unref(filters).sort = $event,
                                      "input-id": sort.value,
                                      name: sort.label,
                                      value: sort.value
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                                    vueExports.createVNode("label", {
                                      class: "cursor-pointer pl-3",
                                      for: sort.label
                                    }, vueExports.toDisplayString(sort.label), 9, ["for"])
                                  ]);
                                }), 128)),
                                vueExports.createVNode(vueExports.unref(VButton), {
                                  label: "Применить",
                                  class: "mt-3",
                                  onClick: ($event) => {
                                    isSortModalOpen.value = false;
                                    applyFilters();
                                  }
                                }, null, 8, ["onClick"])
                              ])
                            ]),
                            _: 1
                          }, 8, ["visible", "onUpdate:visible"])
                        ], 40, ["onSubmit"])
                      ]),
                      !vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        class: "mt-2 flex flex-1 items-center justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4"
                      }, [
                        vueExports.withDirectives(vueExports.createVNode("input", {
                          "onUpdate:modelValue": ($event) => vueExports.unref(filters).blog_search = $event,
                          type: "text",
                          class: "text-subsidiary-reg w-full outline-none",
                          placeholder: vueExports.unref(t)("header.search")
                        }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                          [vueExports.vModelText, vueExports.unref(filters).blog_search]
                        ]),
                        vueExports.createVNode("span", {
                          onClick: vueExports.withModifiers(resetSearch, ["stop"])
                        }, [
                          !!vueExports.unref(filters).blog_search ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(IconPlus), {
                            key: 0,
                            class: "text-default rotate-45 cursor-pointer"
                          })) : vueExports.createCommentVNode("", true)
                        ]),
                        vueExports.createVNode("button", {
                          class: "bg-text disabled:bg-filling cursor-pointer rounded-[50px] p-2 text-white disabled:cursor-not-allowed disabled:text-[#666666]",
                          disabled: !vueExports.unref(filters).blog_search,
                          onClick: applyFilters
                        }, [
                          vueExports.createVNode(vueExports.unref(IconSearch))
                        ], 8, ["disabled"])
                      ])) : vueExports.createCommentVNode("", true)
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ]), _parent2, _scopeId));
            if (_ctx.popular_article.length) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                title: "Популярные статьи",
                class: "max-[640px]:!pr-0"
              }, {
                headerAction: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4" data-v-c3722c6a${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                      href: "#",
                      class: "flex items-center gap-2"
                    }, {
                      default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span data-v-c3722c6a${_scopeId3}>Все</span>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
                            width: "16px",
                            height: "16px"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode("span", null, "Все"),
                            vueExports.createVNode(vueExports.unref(IconCaretRight), {
                              width: "16px",
                              height: "16px"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4" }, [
                        vueExports.createVNode(vueExports.unref(link_default), {
                          href: "#",
                          class: "flex items-center gap-2"
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode("span", null, "Все"),
                            vueExports.createVNode(vueExports.unref(IconCaretRight), {
                              width: "16px",
                              height: "16px"
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$9), {
                      slides: _ctx.popular_article,
                      "slider-options": {
                        slidesPerView: 4,
                        spaceBetween: 32,
                        allowTouchMove: true,
                        breakpoints: {
                          0: { slidesPerView: 1.7, spaceBetween: 8 },
                          640: { slidesPerView: 3, spaceBetween: 16 },
                          1280: { slidesPerView: 4, spaceBetween: 32 }
                        }
                      }
                    }, {
                      slide: vueExports.withCtx(({ slide }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$a), {
                            id: slide.id,
                            key: slide.id,
                            title: slide.title,
                            description: slide.mini_description,
                            "updated-at": slide.created_at,
                            image: slide.image
                          }, {
                            actions: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$b), {
                                  url: vueExports.unref(T)("blog.article.show", slide.id)
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                                    url: vueExports.unref(T)("blog.article.show", slide.id)
                                  }, null, 8, ["url"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$a), {
                              id: slide.id,
                              key: slide.id,
                              title: slide.title,
                              description: slide.mini_description,
                              "updated-at": slide.created_at,
                              image: slide.image
                            }, {
                              actions: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                                  url: vueExports.unref(T)("blog.article.show", slide.id)
                                }, null, 8, ["url"])
                              ]),
                              _: 2
                            }, 1032, ["id", "title", "description", "updated-at", "image"]))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$9), {
                        slides: _ctx.popular_article,
                        "slider-options": {
                          slidesPerView: 4,
                          spaceBetween: 32,
                          allowTouchMove: true,
                          breakpoints: {
                            0: { slidesPerView: 1.7, spaceBetween: 8 },
                            640: { slidesPerView: 3, spaceBetween: 16 },
                            1280: { slidesPerView: 4, spaceBetween: 32 }
                          }
                        }
                      }, {
                        slide: vueExports.withCtx(({ slide }) => [
                          (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$a), {
                            id: slide.id,
                            key: slide.id,
                            title: slide.title,
                            description: slide.mini_description,
                            "updated-at": slide.created_at,
                            image: slide.image
                          }, {
                            actions: vueExports.withCtx(() => [
                              vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                                url: vueExports.unref(T)("blog.article.show", slide.id)
                              }, null, 8, ["url"])
                            ]),
                            _: 2
                          }, 1032, ["id", "title", "description", "updated-at", "image"]))
                        ]),
                        _: 1
                      }, 8, ["slides"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vueExports.createVNode(vueExports.unref(_sfc_main$2), null, vueExports.createSlots({
                default: vueExports.withCtx(() => {
                  var _a2, _b2, _c2, _d2, _e, _f;
                  return [
                    filtersApplied.value && (vueExports.unref(filters).blog_search || vueExports.unref(filters).sort) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                      _ctx.selections.length > 0 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        class: "mt-4 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4"
                      }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.selections, (article) => {
                          return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$3), {
                            id: article.id,
                            key: article.id,
                            title: article.title,
                            image: article.image,
                            description: article.description,
                            "article-count": article.article_count,
                            "is-category": "",
                            "updated-at": article.updated_at
                          }, null, 8, ["id", "title", "image", "description", "article-count", "updated-at"]);
                        }), 128))
                      ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 1,
                        class: "bg-light-gray mx-auto mt-16 max-w-[1200px] rounded-[40px] md:mt-30"
                      }, [
                        vueExports.createVNode("div", { class: "flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48" }, [
                          vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                            src: "/images/test-images/image_exclamation.webp",
                            alt: "восклицание",
                            class: "-mt-20 max-w-[120px] lg:max-w-[200px]"
                          }),
                          vueExports.createVNode("p", { class: "text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]" }, " К сожалению, по заданным параметрам ничего не найдено ")
                        ])
                      ]))
                    ], 64)) : !_ctx.popular_selections.length && !_ctx.selections.length && !_ctx.mainSelection ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                      key: 1,
                      class: "mx-auto mt-6 md:mt-15"
                    })) : (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 2,
                      class: ["mt-4 grid gap-8 md:grid-cols-2", _ctx.popular_selections.length ? "xl:grid-cols-[352px_1fr_480px]" : "xl:grid-cols-2"]
                    }, [
                      vueExports.createVNode("div", { class: "flex flex-col gap-6" }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.selections, (article) => {
                          return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$3), {
                            id: article.id,
                            key: article.id,
                            title: article.title,
                            image: article.image,
                            description: article.description,
                            "article-count": article.article_count,
                            "is-category": "",
                            "updated-at": article.updated_at
                          }, null, 8, ["id", "title", "image", "description", "article-count", "updated-at"]);
                        }), 128))
                      ]),
                      !!((_a2 = _ctx.mainSelection) == null ? void 0 : _a2.id) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 0,
                        class: "rounded-20 hidden h-full w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat p-2 max-md:flex max-md:h-60 max-md:py-3 md:p-6 min-xl:flex",
                        style: {
                          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${((_c2 = (_b2 = _ctx.mainSelection) == null ? void 0 : _b2.image) == null ? void 0 : _c2.path) || "/images/productPlaceholder.png"})`,
                          backgroundColor: "var(--color-gray-200)",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundBlendMode: "multiply"
                        },
                        onClick: ($event) => vueExports.unref(router).visit(vueExports.unref(T)("blog.selection.show", _ctx.mainSelection.id))
                      }, [
                        vueExports.createVNode("div", { class: "mt-auto flex flex-1 items-end text-white" }, [
                          vueExports.createVNode("div", { class: "flex w-full flex-col gap-2" }, [
                            vueExports.createVNode("div", { class: "flex w-full items-center justify-between" }, [
                              vueExports.createVNode("span", { class: "text-mob-small-reg" }, [
                                vueExports.createVNode("span", { class: "text-small-bold" }, vueExports.toDisplayString(_ctx.mainSelection.article_count), 1),
                                vueExports.createTextVNode(" статей")
                              ]),
                              vueExports.createVNode("span", { class: "text-complimentary-reg" }, "Обновлено: " + vueExports.toDisplayString(_ctx.mainSelection.updated_at), 1)
                            ]),
                            vueExports.createVNode("h2", { class: "text-mob-small-bold md:text-large-bold" }, vueExports.toDisplayString(_ctx.mainSelection.title), 1),
                            vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(_ctx.mainSelection.description), 1)
                          ])
                        ])
                      ], 12, ["onClick"])) : vueExports.createCommentVNode("", true),
                      _ctx.popular_selections.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 1,
                        class: "bg-light-gray rounded-20 px-2 py-3 md:px-4 md:py-6"
                      }, [
                        vueExports.createVNode("h2", { class: "text-default-bold sm:text-heavy-bold mb-1" }, "Популярное"),
                        vueExports.createVNode(vueExports.unref(VScrollPanel), { class: "max-h-[460px] md:max-h-[600px]" }, {
                          default: vueExports.withCtx(() => [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.popular_selections, (article) => {
                              return vueExports.openBlock(), vueExports.createBlock("article", {
                                key: article.id,
                                class: "border-b-filling border-b py-3"
                              }, [
                                vueExports.createVNode(vueExports.unref(link_default), {
                                  href: vueExports.unref(T)("blog.selection.show", article.id),
                                  class: "flex"
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                                      src: article.image.path,
                                      alt: "Изображение статьи",
                                      width: vueExports.unref(isDesktop) ? "122px" : "82px",
                                      height: vueExports.unref(isDesktop) ? "122px" : "82px",
                                      "img-classes": "rounded-2xl",
                                      class: "shrink-0"
                                    }, null, 8, ["src", "width", "height"]),
                                    vueExports.createVNode("div", { class: "flex w-full flex-col gap-2 p-2 md:p-4" }, [
                                      vueExports.createVNode("div", { class: "text-additional flex items-center justify-between" }, [
                                        vueExports.createVNode("span", { class: "text-subsidiary-reg md:text-mob-small-reg" }, [
                                          vueExports.createVNode("span", { class: "text-subsidiary-medium md:text-small-bold" }, vueExports.toDisplayString(article.article_count), 1),
                                          vueExports.createTextVNode(" статей")
                                        ]),
                                        vueExports.createVNode("span", { class: "text-complimentary-reg" }, "Обновлено: " + vueExports.toDisplayString(article.updated_at), 1)
                                      ]),
                                      vueExports.createVNode("h2", { class: "text-mob-small-bold md:text-default-bold" }, vueExports.toDisplayString(article.title), 1),
                                      vueExports.createVNode("p", { class: "text-complimentary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(article.description), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ]);
                            }), 128))
                          ]),
                          _: 1
                        })
                      ])) : vueExports.createCommentVNode("", true),
                      !!((_d2 = _ctx.mainSelection) == null ? void 0 : _d2.id) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                        key: 2,
                        class: "rounded-20 col-span-2 flex h-full min-h-70 w-full cursor-pointer flex-col bg-cover bg-center bg-no-repeat p-2 max-md:hidden max-md:h-60 max-md:py-3 md:p-6 xl:hidden",
                        style: {
                          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${((_f = (_e = _ctx.mainSelection) == null ? void 0 : _e.image) == null ? void 0 : _f.path) || "/images/productPlaceholder.png"})`,
                          backgroundColor: "var(--color-gray-200)",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          backgroundBlendMode: "multiply"
                        },
                        onClick: ($event) => vueExports.unref(router).visit(vueExports.unref(T)("blog.selection.show", _ctx.mainSelection.id))
                      }, [
                        vueExports.createVNode("div", { class: "mt-auto flex flex-1 items-end text-white" }, [
                          vueExports.createVNode("div", { class: "flex w-full flex-col gap-2" }, [
                            vueExports.createVNode("div", { class: "flex w-full items-center justify-between" }, [
                              vueExports.createVNode("span", { class: "text-mob-small-reg" }, [
                                vueExports.createVNode("span", { class: "text-small-bold" }, vueExports.toDisplayString(_ctx.mainSelection.article_count), 1),
                                vueExports.createTextVNode(" статей")
                              ]),
                              vueExports.createVNode("span", { class: "text-complimentary-reg" }, "Обновлено: " + vueExports.toDisplayString(_ctx.mainSelection.updated_at), 1)
                            ]),
                            vueExports.createVNode("h2", { class: "text-mob-small-bold md:text-large-bold" }, vueExports.toDisplayString(_ctx.mainSelection.title), 1),
                            vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(_ctx.mainSelection.description), 1)
                          ])
                        ])
                      ], 12, ["onClick"])) : vueExports.createCommentVNode("", true)
                    ], 2))
                  ];
                }),
                _: 2
              }, [
                _ctx.popular_selections.length || _ctx.selections.length || _ctx.mainSelection ? {
                  name: "header",
                  fn: vueExports.withCtx(() => [
                    vueExports.createVNode("header", { class: "flex items-center justify-between gap-3" }, [
                      vueExports.createVNode("h2", { class: "text-default-bold sm:text-heavy-bold" }, "Категории блога"),
                      vueExports.createVNode("form", {
                        class: "flex flex-grow flex-row items-stretch justify-end gap-2",
                        onSubmit: vueExports.withModifiers(() => {
                        }, ["prevent"])
                      }, [
                        vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 0,
                          class: "flex max-w-150 flex-1 items-center justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4"
                        }, [
                          vueExports.withDirectives(vueExports.createVNode("input", {
                            "onUpdate:modelValue": ($event) => vueExports.unref(filters).blog_search = $event,
                            type: "text",
                            class: "text-subsidiary-reg w-full outline-none",
                            placeholder: vueExports.unref(t)("header.search")
                          }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                            [vueExports.vModelText, vueExports.unref(filters).blog_search]
                          ]),
                          vueExports.createVNode("span", {
                            onClick: vueExports.withModifiers(resetSearch, ["stop"])
                          }, [
                            !!vueExports.unref(filters).blog_search ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(IconPlus), {
                              key: 0,
                              class: "text-default rotate-45 cursor-pointer"
                            })) : vueExports.createCommentVNode("", true)
                          ]),
                          vueExports.createVNode("button", {
                            class: "bg-text disabled:bg-filling cursor-pointer rounded-[50px] p-2 text-white disabled:cursor-not-allowed disabled:text-[#666666]",
                            disabled: !vueExports.unref(filters).blog_search,
                            onClick: applyFilters
                          }, [
                            vueExports.createVNode(vueExports.unref(IconSearch))
                          ], 8, ["disabled"])
                        ])) : vueExports.createCommentVNode("", true),
                        !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                          key: 1,
                          class: "relative"
                        }, [
                          vueExports.createVNode(vueExports.unref(IconSort), { class: "absolute start-4 top-1/2 z-1 -translate-y-1/2" }),
                          vueExports.createVNode(_sfc_main$6, {
                            modelValue: vueExports.unref(filters).sort,
                            "onUpdate:modelValue": ($event) => vueExports.unref(filters).sort = $event,
                            options: sortOptions.value,
                            "option-value": "value",
                            "option-label": "label",
                            "pt:overlay": "!rounded-20 px-2 mt-2",
                            variant: "filled",
                            class: "p-1 pl-12",
                            placeholder: "Сортировка",
                            "show-clear": "",
                            onValueChange: () => applyFilters()
                          }, {
                            header: vueExports.withCtx(() => [
                              vueExports.createVNode("div", { class: "p-2" }, [
                                vueExports.createVNode("span", { class: "text-subsidiary-medium text-nowrap" }, "Какие статьи показать сначала")
                              ])
                            ]),
                            option: vueExports.withCtx(({ option, selected }) => [
                              vueExports.createVNode(_sfc_main$7, {
                                "model-value": selected,
                                "input-id": option.value,
                                binary: ""
                              }, null, 8, ["model-value", "input-id"]),
                              vueExports.createVNode("label", {
                                class: "cursor-pointer pl-3",
                                for: option.value
                              }, vueExports.toDisplayString(option.label), 9, ["for"])
                            ]),
                            clearicon: vueExports.withCtx(() => [
                              vueExports.createVNode("button", {
                                class: "text-additional inline-flex cursor-pointer items-center justify-center",
                                onClick: vueExports.withModifiers(
                                  () => {
                                    vueExports.unref(filters).sort = void 0;
                                    applyFilters();
                                  },
                                  ["stop"]
                                )
                              }, [
                                vueExports.createVNode("i", { class: "pi pi-times" })
                              ], 8, ["onClick"])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "options", "onValueChange"])
                        ])) : (vueExports.openBlock(), vueExports.createBlock("button", {
                          key: 2,
                          class: "bg-input rounded-20 flex items-center gap-2 px-4 py-3.5",
                          onClick: ($event) => isSortModalOpen.value = true
                        }, [
                          vueExports.createVNode(vueExports.unref(IconSort), { class: "h-4 w-4" }),
                          vueExports.createVNode("span", { class: "text-subsidiary-reg" }, "Сортировка")
                        ], 8, ["onClick"])),
                        vueExports.createVNode(_sfc_main$8, {
                          visible: isSortModalOpen.value,
                          "onUpdate:visible": ($event) => isSortModalOpen.value = $event,
                          draggable: false,
                          modal: "",
                          class: "w-80 max-md:mx-4",
                          header: "Сортировка"
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, "Какие новости показать сначала"),
                            vueExports.createVNode("div", { class: "mt-3 flex flex-col gap-2" }, [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(sortOptions.value, (sort) => {
                                return vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: sort.label,
                                  class: "ml-2"
                                }, [
                                  vueExports.createVNode(_sfc_main$7, {
                                    modelValue: vueExports.unref(filters).sort,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(filters).sort = $event,
                                    "input-id": sort.value,
                                    name: sort.label,
                                    value: sort.value
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                                  vueExports.createVNode("label", {
                                    class: "cursor-pointer pl-3",
                                    for: sort.label
                                  }, vueExports.toDisplayString(sort.label), 9, ["for"])
                                ]);
                              }), 128)),
                              vueExports.createVNode(vueExports.unref(VButton), {
                                label: "Применить",
                                class: "mt-3",
                                onClick: ($event) => {
                                  isSortModalOpen.value = false;
                                  applyFilters();
                                }
                              }, null, 8, ["onClick"])
                            ])
                          ]),
                          _: 1
                        }, 8, ["visible", "onUpdate:visible"])
                      ], 40, ["onSubmit"])
                    ]),
                    !vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      class: "mt-2 flex flex-1 items-center justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4"
                    }, [
                      vueExports.withDirectives(vueExports.createVNode("input", {
                        "onUpdate:modelValue": ($event) => vueExports.unref(filters).blog_search = $event,
                        type: "text",
                        class: "text-subsidiary-reg w-full outline-none",
                        placeholder: vueExports.unref(t)("header.search")
                      }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                        [vueExports.vModelText, vueExports.unref(filters).blog_search]
                      ]),
                      vueExports.createVNode("span", {
                        onClick: vueExports.withModifiers(resetSearch, ["stop"])
                      }, [
                        !!vueExports.unref(filters).blog_search ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(IconPlus), {
                          key: 0,
                          class: "text-default rotate-45 cursor-pointer"
                        })) : vueExports.createCommentVNode("", true)
                      ]),
                      vueExports.createVNode("button", {
                        class: "bg-text disabled:bg-filling cursor-pointer rounded-[50px] p-2 text-white disabled:cursor-not-allowed disabled:text-[#666666]",
                        disabled: !vueExports.unref(filters).blog_search,
                        onClick: applyFilters
                      }, [
                        vueExports.createVNode(vueExports.unref(IconSearch))
                      ], 8, ["disabled"])
                    ])) : vueExports.createCommentVNode("", true)
                  ]),
                  key: "0"
                } : void 0
              ]), 1024),
              _ctx.popular_article.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$2), {
                key: 0,
                title: "Популярные статьи",
                class: "max-[640px]:!pr-0"
              }, {
                headerAction: vueExports.withCtx(() => [
                  vueExports.createVNode("div", { class: "bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4" }, [
                    vueExports.createVNode(vueExports.unref(link_default), {
                      href: "#",
                      class: "flex items-center gap-2"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("span", null, "Все"),
                        vueExports.createVNode(vueExports.unref(IconCaretRight), {
                          width: "16px",
                          height: "16px"
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(vueExports.unref(_sfc_main$9), {
                    slides: _ctx.popular_article,
                    "slider-options": {
                      slidesPerView: 4,
                      spaceBetween: 32,
                      allowTouchMove: true,
                      breakpoints: {
                        0: { slidesPerView: 1.7, spaceBetween: 8 },
                        640: { slidesPerView: 3, spaceBetween: 16 },
                        1280: { slidesPerView: 4, spaceBetween: 32 }
                      }
                    }
                  }, {
                    slide: vueExports.withCtx(({ slide }) => [
                      (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$a), {
                        id: slide.id,
                        key: slide.id,
                        title: slide.title,
                        description: slide.mini_description,
                        "updated-at": slide.created_at,
                        image: slide.image
                      }, {
                        actions: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$b), {
                            url: vueExports.unref(T)("blog.article.show", slide.id)
                          }, null, 8, ["url"])
                        ]),
                        _: 2
                      }, 1032, ["id", "title", "description", "updated-at", "image"]))
                    ]),
                    _: 1
                  }, 8, ["slides"])
                ]),
                _: 1
              })) : vueExports.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/blog/blog-page/ui/BlogPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlogPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c3722c6a"]]);
export {
  BlogPage as default
};
