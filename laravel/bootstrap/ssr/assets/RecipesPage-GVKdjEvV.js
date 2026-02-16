import { v as vueExports, u as useScreenSize, T, c as useForm, s as serverRenderer_cjs_prodExports, h as head_default, V as VContainer, x as _sfc_main$1, l as link_default, ap as _sfc_main$2, aq as IconCircleCross, E as IconPlus, F as IconSearch, _ as _sfc_main$3, W as _sfc_main$6, t as _export_sfc } from "../ssr.js";
import { useI18n } from "vue-i18n";
import { _ as _sfc_main$5 } from "./RecipeCard-BgvuIkQ1.js";
import { _ as _sfc_main$4 } from "./EmptyPlug-BgfBZzl1.js";
import { _ as _sfc_main$8 } from "./VPagination-cbnzOOCr.js";
import { _ as _sfc_main$7 } from "./VShare-C36WNIjH.js";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "@vue/shared";
import "@vue/compiler-ssr";
import "node:stream";
import "@inertiajs/core";
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
import "./IconChefHat-CbLzs3Yv.js";
import "./getFormattedTime-DfpF6FCc.js";
const perPage = 16;
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "RecipesPage",
  __ssrInlineRender: true,
  props: {
    recipes: {},
    recipeCategories: {},
    seoData: {}
  },
  setup(__props) {
    var _a, _b;
    const { isDesktop } = useScreenSize();
    const breadcrumbItems = [
      { label: "Главная", route: T("main-page") },
      { label: "Рецепты", route: T("recipe.index") }
    ];
    const pageContent = vueExports.useTemplateRef("recipes-page");
    const { t } = useI18n();
    const props = __props;
    const filters = useForm({
      selection_id: ((_a = T().queryParams) == null ? void 0 : _a.selection_id) ?? [],
      recipe_search: ((_b = T().queryParams) == null ? void 0 : _b.recipe_search) ?? void 0
    });
    const resetSearch = () => {
      filters.recipe_search = "";
      filters.get(T("recipe.index"), {
        only: ["recipes", "recipeCategories"],
        preserveScroll: true
      });
    };
    vueExports.watch(
      () => filters.recipe_search,
      (newVal, oldVal) => {
        if (oldVal && !newVal) {
          resetSearch();
        }
      }
    );
    const onPageUpdate = async () => {
      var _a2;
      (_a2 = pageContent.value) == null ? void 0 : _a2.scrollIntoView({
        behavior: "smooth"
      });
    };
    const currentPage = vueExports.ref(1);
    const paginatedRecipes = vueExports.computed(() => {
      const start = (currentPage.value - 1) * perPage;
      const end = start + perPage;
      return props.recipes.slice(start, end);
    });
    const fastTags = vueExports.computed(() => {
      return [...props.recipeCategories];
    });
    const applyFilters = () => {
      return new Promise((resolve) => {
        filters.get(T("recipe.index"), {
          only: ["recipes", "recipeCategories"],
          preserveScroll: true
        });
        resolve();
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (_ctx.seoData) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(head_default), null, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<title data-v-223e27e2${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.seoData.seo_title)}</title><meta name="description"${serverRenderer_cjs_prodExports.ssrRenderAttr("content", _ctx.seoData.seo_description)} data-v-223e27e2${_scopeId}><meta name="keywords"${serverRenderer_cjs_prodExports.ssrRenderAttr("content", _ctx.seoData.seo_keywords)} data-v-223e27e2${_scopeId}>`);
            } else {
              return [
                vueExports.createVNode("title", null, vueExports.toDisplayString(_ctx.seoData.seo_title), 1),
                vueExports.createVNode("meta", {
                  name: "description",
                  content: _ctx.seoData.seo_description
                }, null, 8, ["content"]),
                vueExports.createVNode("meta", {
                  name: "keywords",
                  content: _ctx.seoData.seo_keywords
                }, null, 8, ["content"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div data-v-223e27e2>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), { class: "flex flex-col px-6 sm:px-8" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!vueExports.unref(isDesktop)) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
                model: breadcrumbItems,
                class: "mb-4 bg-white px-0!"
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
            _push2(`<div class="rounded-20 catalog-banner mb-4 h-50 bg-gray-100 mask-[url(../../images/masks/for_catalog_mobile.svg)] mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 pt-4 min-[425px]:mask-[url(../../images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-65 lg:px-8 lg:pt-8" data-v-223e27e2${_scopeId}><div class="flex h-42 max-w-1/2 flex-col justify-end gap-4 pb-8 lg:h-47 lg:justify-between" data-v-223e27e2${_scopeId}>`);
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
            _push2(`<h1 class="font-vast text-vast-mob-title-bold lg:text-vast-title-bold text-white" data-v-223e27e2${_scopeId}>Рецепты</h1></div></div><form class="flex flex-col justify-between gap-2 lg:flex-row" data-v-223e27e2${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
              modelValue: vueExports.unref(filters).selection_id,
              "onUpdate:modelValue": ($event) => vueExports.unref(filters).selection_id = $event,
              options: fastTags.value,
              "option-label": "title",
              "option-value": "id",
              multiple: "",
              onValueChange: applyFilters
            }, {
              option: vueExports.withCtx(({ option }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="inline-flex gap-2" data-v-223e27e2${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(option.title)} `);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCircleCross), { class: "group-p-checked:inline hidden" }, null, _parent3, _scopeId2));
                  _push3(`</span>`);
                } else {
                  return [
                    vueExports.createVNode("span", { class: "inline-flex gap-2" }, [
                      vueExports.createTextVNode(vueExports.toDisplayString(option.title) + " ", 1),
                      vueExports.createVNode(vueExports.unref(IconCircleCross), { class: "group-p-checked:inline hidden" })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex max-w-150 flex-1 items-center justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4" data-v-223e27e2${_scopeId}><input${serverRenderer_cjs_prodExports.ssrRenderAttr("value", vueExports.unref(filters).recipe_search)} type="text" class="text-subsidiary-reg w-full outline-none"${serverRenderer_cjs_prodExports.ssrRenderAttr("placeholder", vueExports.unref(t)("header.search"))} data-v-223e27e2${_scopeId}><button data-v-223e27e2${_scopeId}>`);
            if (!!vueExports.unref(filters).recipe_search) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPlus), { class: "text-default rotate-45 cursor-pointer" }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</button><button class="bg-text disabled:bg-filling cursor-pointer rounded-[50px] p-2 text-white disabled:cursor-not-allowed disabled:text-[#666666]"${serverRenderer_cjs_prodExports.ssrIncludeBooleanAttr(!vueExports.unref(filters).recipe_search) ? " disabled" : ""} data-v-223e27e2${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconSearch), null, null, _parent2, _scopeId));
            _push2(`</button></div></form>`);
            if (vueExports.unref(filters).recipe_search && _ctx.recipes.length === 0) {
              _push2(`<div class="bg-light-gray mx-auto mt-16 max-w-[1200px] rounded-[40px] md:mt-30" data-v-223e27e2${_scopeId}><div class="flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48" data-v-223e27e2${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                src: "/images/test-images/image_exclamation.webp",
                alt: "восклицание",
                class: "-mt-20 max-w-[120px] lg:max-w-[200px]"
              }, null, _parent2, _scopeId));
              _push2(`<p class="text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]" data-v-223e27e2${_scopeId}> К сожалению, по заданным параметрам ничего не найдено </p></div></div>`);
            } else if (_ctx.recipes.length === 0) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), { class: "mx-auto mt-16 md:mt-30" }, null, _parent2, _scopeId));
            } else {
              _push2(`<section class="mt-8 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-8" data-v-223e27e2${_scopeId}><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(paginatedRecipes.value, (recipe) => {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                  id: recipe.id,
                  key: recipe.id,
                  title: recipe.title,
                  description: recipe.mini_description,
                  image: recipe.image.path,
                  "cook-time": recipe.cooking_time_minutes,
                  portions: recipe.number_of_persons,
                  difficulty: recipe.difficult,
                  "is-favorite": recipe.is_wishlist
                }, {
                  actions: vueExports.withCtx(({ isFavorite }, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
                        id: recipe.id,
                        "initial-value": isFavorite,
                        "item-type": "recipe"
                      }, null, _parent3, _scopeId2));
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$7), {
                        url: vueExports.unref(T)("recipe.show", { recipe: recipe.id })
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                          id: recipe.id,
                          "initial-value": isFavorite,
                          "item-type": "recipe"
                        }, null, 8, ["id", "initial-value"]),
                        vueExports.createVNode(vueExports.unref(_sfc_main$7), {
                          url: vueExports.unref(T)("recipe.show", { recipe: recipe.id })
                        }, null, 8, ["url"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]--></section>`);
            }
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$8), {
              modelValue: currentPage.value,
              "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
              "per-page": perPage,
              "total-count": _ctx.recipes.length,
              class: "mx-auto mt-4 md:mt-8"
            }, null, _parent2, _scopeId));
          } else {
            return [
              !vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
                key: 0,
                model: breadcrumbItems,
                class: "mb-4 bg-white px-0!"
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
              vueExports.createVNode("div", { class: "rounded-20 catalog-banner mb-4 h-50 bg-gray-100 mask-[url(../../images/masks/for_catalog_mobile.svg)] mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 pt-4 min-[425px]:mask-[url(../../images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-65 lg:px-8 lg:pt-8" }, [
                vueExports.createVNode("div", { class: "flex h-42 max-w-1/2 flex-col justify-end gap-4 pb-8 lg:h-47 lg:justify-between" }, [
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
                  vueExports.createVNode("h1", { class: "font-vast text-vast-mob-title-bold lg:text-vast-title-bold text-white" }, "Рецепты")
                ])
              ]),
              vueExports.createVNode("form", {
                class: "flex flex-col justify-between gap-2 lg:flex-row",
                onSubmit: vueExports.withModifiers(() => {
                }, ["prevent"])
              }, [
                vueExports.createVNode(_sfc_main$2, {
                  modelValue: vueExports.unref(filters).selection_id,
                  "onUpdate:modelValue": ($event) => vueExports.unref(filters).selection_id = $event,
                  options: fastTags.value,
                  "option-label": "title",
                  "option-value": "id",
                  multiple: "",
                  onValueChange: applyFilters
                }, {
                  option: vueExports.withCtx(({ option }) => [
                    vueExports.createVNode("span", { class: "inline-flex gap-2" }, [
                      vueExports.createTextVNode(vueExports.toDisplayString(option.title) + " ", 1),
                      vueExports.createVNode(vueExports.unref(IconCircleCross), { class: "group-p-checked:inline hidden" })
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                vueExports.createVNode("div", { class: "flex max-w-150 flex-1 items-center justify-between gap-2 rounded-[50px] border border-solid border-[#E0E0E0] py-1 pr-1 pl-4" }, [
                  vueExports.withDirectives(vueExports.createVNode("input", {
                    "onUpdate:modelValue": ($event) => vueExports.unref(filters).recipe_search = $event,
                    type: "text",
                    class: "text-subsidiary-reg w-full outline-none",
                    placeholder: vueExports.unref(t)("header.search")
                  }, null, 8, ["onUpdate:modelValue", "placeholder"]), [
                    [vueExports.vModelText, vueExports.unref(filters).recipe_search]
                  ]),
                  vueExports.createVNode("button", {
                    onClick: vueExports.withModifiers(resetSearch, ["stop"])
                  }, [
                    !!vueExports.unref(filters).recipe_search ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(IconPlus), {
                      key: 0,
                      class: "text-default rotate-45 cursor-pointer"
                    })) : vueExports.createCommentVNode("", true)
                  ]),
                  vueExports.createVNode("button", {
                    class: "bg-text disabled:bg-filling cursor-pointer rounded-[50px] p-2 text-white disabled:cursor-not-allowed disabled:text-[#666666]",
                    disabled: !vueExports.unref(filters).recipe_search,
                    onClick: applyFilters
                  }, [
                    vueExports.createVNode(vueExports.unref(IconSearch))
                  ], 8, ["disabled"])
                ])
              ], 40, ["onSubmit"]),
              vueExports.unref(filters).recipe_search && _ctx.recipes.length === 0 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                key: 1,
                class: "bg-light-gray mx-auto mt-16 max-w-[1200px] rounded-[40px] md:mt-30"
              }, [
                vueExports.createVNode("div", { class: "flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48" }, [
                  vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                    src: "/images/test-images/image_exclamation.webp",
                    alt: "восклицание",
                    class: "-mt-20 max-w-[120px] lg:max-w-[200px]"
                  }),
                  vueExports.createVNode("p", { class: "text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]" }, " К сожалению, по заданным параметрам ничего не найдено ")
                ])
              ])) : _ctx.recipes.length === 0 ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$4), {
                key: 2,
                class: "mx-auto mt-16 md:mt-30"
              })) : (vueExports.openBlock(), vueExports.createBlock("section", {
                key: 3,
                class: "mt-8 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-8"
              }, [
                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedRecipes.value, (recipe) => {
                  return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$5), {
                    id: recipe.id,
                    key: recipe.id,
                    title: recipe.title,
                    description: recipe.mini_description,
                    image: recipe.image.path,
                    "cook-time": recipe.cooking_time_minutes,
                    portions: recipe.number_of_persons,
                    difficulty: recipe.difficult,
                    "is-favorite": recipe.is_wishlist
                  }, {
                    actions: vueExports.withCtx(({ isFavorite }) => [
                      vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                        id: recipe.id,
                        "initial-value": isFavorite,
                        "item-type": "recipe"
                      }, null, 8, ["id", "initial-value"]),
                      vueExports.createVNode(vueExports.unref(_sfc_main$7), {
                        url: vueExports.unref(T)("recipe.show", { recipe: recipe.id })
                      }, null, 8, ["url"])
                    ]),
                    _: 2
                  }, 1032, ["id", "title", "description", "image", "cook-time", "portions", "difficulty", "is-favorite"]);
                }), 128))
              ])),
              vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                modelValue: currentPage.value,
                "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                "per-page": perPage,
                "total-count": _ctx.recipes.length,
                class: "mx-auto mt-4 md:mt-8"
              }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/recipe/recipes/ui/RecipesPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RecipesPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-223e27e2"]]);
export {
  RecipesPage as default
};
