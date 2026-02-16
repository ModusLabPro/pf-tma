import { v as vueExports, u as useScreenSize, c as useForm, T, s as serverRenderer_cjs_prodExports, V as VContainer, x as _sfc_main$1, l as link_default, n as _sfc_main$2, _ as _sfc_main$5, E as IconPlus, F as IconSearch } from "../ssr.js";
import { a as _sfc_main$3 } from "./ArticleBlog-Ba0P9vkG.js";
import { _ as _sfc_main$4 } from "./VPagination-cbnzOOCr.js";
import { _ as _sfc_main$6 } from "./EmptyPlug-BgfBZzl1.js";
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
const perPage = 12;
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "BlogCategory",
  __ssrInlineRender: true,
  props: {
    selection: {}
  },
  setup(__props) {
    var _a;
    const { isDesktop } = useScreenSize();
    const props = __props;
    const filters = useForm({
      article_search: ((_a = T().queryParams) == null ? void 0 : _a.article_search) ?? void 0
    });
    const resetSearch = () => {
      filters.article_search = "";
      filters.get(T("blog.selection.show", props.selection.id), {
        preserveScroll: true
      });
    };
    vueExports.watch(
      () => filters.article_search,
      (newVal, oldVal) => {
        if (oldVal && !newVal) {
          resetSearch();
        }
      }
    );
    const applyFilters = () => {
      return new Promise((resolve) => {
        filters.get(T("blog.selection.show", props.selection.id), {
          preserveScroll: true
        });
        resolve();
      });
    };
    const breadcrumbItems = vueExports.computed(() => {
      const items = [
        { label: "Главная", route: T("main-page") },
        { label: "Новости", route: T("blog.index") }
      ];
      return [
        ...items,
        {
          label: props.selection.title,
          route: T("blog.selection.show", props.selection.id)
        }
      ];
    });
    const pageContent = vueExports.useTemplateRef("article-page");
    const onPageUpdate = async () => {
      var _a2;
      (_a2 = pageContent.value) == null ? void 0 : _a2.scrollIntoView({
        behavior: "smooth"
      });
    };
    const currentPage = vueExports.ref(1);
    const paginatedArticles = vueExports.computed(() => {
      const start = (currentPage.value - 1) * perPage;
      const end = start + perPage;
      return props.selection.articles.slice(start, end);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ ref: "article-page" }, _attrs))}>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), { class: "px-6 sm:px-8" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            if (!vueExports.unref(isDesktop)) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
                model: breadcrumbItems.value,
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
            _push2(`<div class="rounded-20 mb-4 h-50 bg-gray-100 mask-[url(/images/masks/for_catalog_mobile.svg)] mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 pt-4 min-[425px]:mask-[url(/images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-65 lg:px-8 lg:pt-8" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${((_a2 = _ctx.selection.image) == null ? void 0 : _a2.path) || "/images/productPlaceholder.png"})`,
              backgroundColor: "var(--color-gray-200)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "multiply"
            })}"${_scopeId}><div class="flex h-42 flex-col justify-end gap-4 pb-8 lg:h-47 lg:justify-between xl:max-w-1/2"${_scopeId}>`);
            if (vueExports.unref(isDesktop)) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { model: breadcrumbItems.value }, {
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
            _push2(`<h1 class="font-vast text-vast-mob-title-bold lg:text-vast-title-bold text-white"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.selection.title)}</h1></div></div>`);
          } else {
            return [
              !vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
                key: 0,
                model: breadcrumbItems.value,
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
              }, 8, ["model"])) : vueExports.createCommentVNode("", true),
              vueExports.createVNode("div", {
                class: "rounded-20 mb-4 h-50 bg-gray-100 mask-[url(/images/masks/for_catalog_mobile.svg)] mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 pt-4 min-[425px]:mask-[url(/images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-65 lg:px-8 lg:pt-8",
                style: {
                  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${((_b = _ctx.selection.image) == null ? void 0 : _b.path) || "/images/productPlaceholder.png"})`,
                  backgroundColor: "var(--color-gray-200)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "multiply"
                }
              }, [
                vueExports.createVNode("div", { class: "flex h-42 flex-col justify-end gap-4 pb-8 lg:h-47 lg:justify-between xl:max-w-1/2" }, [
                  vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
                    key: 0,
                    model: breadcrumbItems.value
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
                  }, 8, ["model"])) : vueExports.createCommentVNode("", true),
                  vueExports.createVNode("h1", { class: "font-vast text-vast-mob-title-bold lg:text-vast-title-bold text-white" }, vueExports.toDisplayString(_ctx.selection.title), 1)
                ])
              ], 4)
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
                if (_push3) {
                  if (_ctx.selection.articles.length > 0) {
                    _push3(`<!--[--><div class="mt-5 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4"${_scopeId2}><!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(paginatedArticles.value, (article) => {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                        id: article.id,
                        key: article.id,
                        title: article.title,
                        description: article.mini_description,
                        image: article.image,
                        "updated-at": article.updated_at
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]--></div>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
                      modelValue: currentPage.value,
                      "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                      "per-page": perPage,
                      "total-count": props.selection.articles.length,
                      class: "mx-auto mt-8 justify-center"
                    }, null, _parent3, _scopeId2));
                    _push3(`<!--]-->`);
                  } else if (vueExports.unref(filters).article_search) {
                    _push3(`<div class="bg-light-gray mx-auto mt-16 max-w-[1200px] rounded-[40px] md:mt-30"${_scopeId2}><div class="flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                      src: "/images/test-images/image_exclamation.webp",
                      alt: "восклицание",
                      class: "-mt-20 max-w-[120px] lg:max-w-[200px]"
                    }, null, _parent3, _scopeId2));
                    _push3(`<p class="text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]"${_scopeId2}> К сожалению, по заданным параметрам ничего не найдено </p></div></div>`);
                  } else {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), { class: "mx-auto mt-6 md:mt-14" }, null, _parent3, _scopeId2));
                  }
                } else {
                  return [
                    _ctx.selection.articles.length > 0 ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                      vueExports.createVNode("div", { class: "mt-5 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4" }, [
                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedArticles.value, (article) => {
                          return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$3), {
                            id: article.id,
                            key: article.id,
                            title: article.title,
                            description: article.mini_description,
                            image: article.image,
                            "updated-at": article.updated_at
                          }, null, 8, ["id", "title", "description", "image", "updated-at"]);
                        }), 128))
                      ]),
                      vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                        modelValue: currentPage.value,
                        "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                        "per-page": perPage,
                        "total-count": props.selection.articles.length,
                        class: "mx-auto mt-8 justify-center"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                    ], 64)) : vueExports.unref(filters).article_search ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 1,
                      class: "bg-light-gray mx-auto mt-16 max-w-[1200px] rounded-[40px] md:mt-30"
                    }, [
                      vueExports.createVNode("div", { class: "flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48" }, [
                        vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                          src: "/images/test-images/image_exclamation.webp",
                          alt: "восклицание",
                          class: "-mt-20 max-w-[120px] lg:max-w-[200px]"
                        }),
                        vueExports.createVNode("p", { class: "text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]" }, " К сожалению, по заданным параметрам ничего не найдено ")
                      ])
                    ])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$6), {
                      key: 2,
                      class: "mx-auto mt-6 md:mt-14"
                    }))
                  ];
                }
              }),
              _: 2
            }, [
              _ctx.selection.articles.length ? {
                name: "header",
                fn: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<header class="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-3"${_scopeId2}><h2 class="text-default-bold sm:text-heavy-bold"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.selection.title)}</h2><form class="flex items-stretch gap-2 min-[820px]:flex-grow md:justify-end"${_scopeId2}><div class="flex max-w-150 flex-1 items-center justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4"${_scopeId2}><input${serverRenderer_cjs_prodExports.ssrRenderAttr("value", vueExports.unref(filters).article_search)} type="text" class="text-subsidiary-reg w-full outline-none" placeholder="Найти статью"${_scopeId2}><span${_scopeId2}>`);
                    if (!!vueExports.unref(filters).article_search) {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPlus), { class: "text-default rotate-45 cursor-pointer" }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</span><button class="bg-text disabled:bg-filling cursor-pointer rounded-[50px] p-2 text-white disabled:cursor-not-allowed disabled:text-[#666666]"${serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(!vueExports.unref(filters).article_search) ? " disabled" : ""} type="submit"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconSearch), null, null, _parent3, _scopeId2));
                    _push3(`</button></div></form></header>`);
                  } else {
                    return [
                      vueExports.createVNode("header", { class: "mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-3" }, [
                        vueExports.createVNode("h2", { class: "text-default-bold sm:text-heavy-bold" }, vueExports.toDisplayString(_ctx.selection.title), 1),
                        vueExports.createVNode("form", {
                          class: "flex items-stretch gap-2 min-[820px]:flex-grow md:justify-end",
                          onSubmit: vueExports.withModifiers(() => {
                          }, ["prevent"])
                        }, [
                          vueExports.createVNode("div", { class: "flex max-w-150 flex-1 items-center justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4" }, [
                            vueExports.withDirectives(vueExports.createVNode("input", {
                              "onUpdate:modelValue": ($event) => vueExports.unref(filters).article_search = $event,
                              type: "text",
                              class: "text-subsidiary-reg w-full outline-none",
                              placeholder: "Найти статью"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vueExports.vModelText, vueExports.unref(filters).article_search]
                            ]),
                            vueExports.createVNode("span", {
                              onClick: vueExports.withModifiers(resetSearch, ["stop"])
                            }, [
                              !!vueExports.unref(filters).article_search ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(IconPlus), {
                                key: 0,
                                class: "text-default rotate-45 cursor-pointer"
                              })) : vueExports.createCommentVNode("", true)
                            ]),
                            vueExports.createVNode("button", {
                              class: "bg-text disabled:bg-filling cursor-pointer rounded-[50px] p-2 text-white disabled:cursor-not-allowed disabled:text-[#666666]",
                              disabled: !vueExports.unref(filters).article_search,
                              type: "submit",
                              onClick: applyFilters
                            }, [
                              vueExports.createVNode(vueExports.unref(IconSearch))
                            ], 8, ["disabled"])
                          ])
                        ], 40, ["onSubmit"])
                      ])
                    ];
                  }
                }),
                key: "0"
              } : void 0
            ]), _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(vueExports.unref(_sfc_main$2), null, vueExports.createSlots({
                default: vueExports.withCtx(() => [
                  _ctx.selection.articles.length > 0 ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                    vueExports.createVNode("div", { class: "mt-5 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-8 lg:grid-cols-4" }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedArticles.value, (article) => {
                        return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$3), {
                          id: article.id,
                          key: article.id,
                          title: article.title,
                          description: article.mini_description,
                          image: article.image,
                          "updated-at": article.updated_at
                        }, null, 8, ["id", "title", "description", "image", "updated-at"]);
                      }), 128))
                    ]),
                    vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                      modelValue: currentPage.value,
                      "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                      "per-page": perPage,
                      "total-count": props.selection.articles.length,
                      class: "mx-auto mt-8 justify-center"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                  ], 64)) : vueExports.unref(filters).article_search ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 1,
                    class: "bg-light-gray mx-auto mt-16 max-w-[1200px] rounded-[40px] md:mt-30"
                  }, [
                    vueExports.createVNode("div", { class: "flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48" }, [
                      vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                        src: "/images/test-images/image_exclamation.webp",
                        alt: "восклицание",
                        class: "-mt-20 max-w-[120px] lg:max-w-[200px]"
                      }),
                      vueExports.createVNode("p", { class: "text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]" }, " К сожалению, по заданным параметрам ничего не найдено ")
                    ])
                  ])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$6), {
                    key: 2,
                    class: "mx-auto mt-6 md:mt-14"
                  }))
                ]),
                _: 2
              }, [
                _ctx.selection.articles.length ? {
                  name: "header",
                  fn: vueExports.withCtx(() => [
                    vueExports.createVNode("header", { class: "mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-3" }, [
                      vueExports.createVNode("h2", { class: "text-default-bold sm:text-heavy-bold" }, vueExports.toDisplayString(_ctx.selection.title), 1),
                      vueExports.createVNode("form", {
                        class: "flex items-stretch gap-2 min-[820px]:flex-grow md:justify-end",
                        onSubmit: vueExports.withModifiers(() => {
                        }, ["prevent"])
                      }, [
                        vueExports.createVNode("div", { class: "flex max-w-150 flex-1 items-center justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4" }, [
                          vueExports.withDirectives(vueExports.createVNode("input", {
                            "onUpdate:modelValue": ($event) => vueExports.unref(filters).article_search = $event,
                            type: "text",
                            class: "text-subsidiary-reg w-full outline-none",
                            placeholder: "Найти статью"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vueExports.vModelText, vueExports.unref(filters).article_search]
                          ]),
                          vueExports.createVNode("span", {
                            onClick: vueExports.withModifiers(resetSearch, ["stop"])
                          }, [
                            !!vueExports.unref(filters).article_search ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(IconPlus), {
                              key: 0,
                              class: "text-default rotate-45 cursor-pointer"
                            })) : vueExports.createCommentVNode("", true)
                          ]),
                          vueExports.createVNode("button", {
                            class: "bg-text disabled:bg-filling cursor-pointer rounded-[50px] p-2 text-white disabled:cursor-not-allowed disabled:text-[#666666]",
                            disabled: !vueExports.unref(filters).article_search,
                            type: "submit",
                            onClick: applyFilters
                          }, [
                            vueExports.createVNode(vueExports.unref(IconSearch))
                          ], 8, ["disabled"])
                        ])
                      ], 40, ["onSubmit"])
                    ])
                  ]),
                  key: "0"
                } : void 0
              ]), 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/blog/blog-category/ui/BlogCategory.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
