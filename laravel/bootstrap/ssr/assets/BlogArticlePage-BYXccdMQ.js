import { v as vueExports, u as useScreenSize, T, c as useForm, s as serverRenderer_cjs_prodExports, V as VContainer, x as _sfc_main$1, l as link_default, _ as _sfc_main$2, p as _sfc_main$3, q as personInitials, n as _sfc_main$5, a as VButton, e as _sfc_main$6, i as _sfc_main$7, D as _sfc_main$8, I as IconCaretLeft, m as IconCaretRight, f as _sfc_main$a, j as _sfc_main$b, r as VNavigationButton } from "../ssr.js";
import { Form } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { useToast } from "primevue";
import { useI18n } from "vue-i18n";
import { z } from "zod";
import { _ as _sfc_main$9 } from "./ArticleBlog-Ba0P9vkG.js";
import { I as IconThumbsDown } from "./IconThumbsDown-D69dI4Zk.js";
import { I as IconThumbsUp } from "./IconThumbsUp-BHrWpxEP.js";
import { _ as _sfc_main$4 } from "./VShare-C36WNIjH.js";
import { router } from "@inertiajs/core";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "@vue/shared";
import "@vue/compiler-ssr";
import "node:stream";
import "lodash-es";
import "@inertiajs/core/server";
import "primevue/menu";
import "tailwind-merge";
import "primevue/config";
import "pinia";
import "@vueuse/core";
import "swiper/element/bundle";
import "primevue/avatar";
import "@primevue/icons/starfill";
import "primevue/rating";
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
  __name: "BlogArticlePage",
  __ssrInlineRender: true,
  props: {
    article: {},
    auth: {},
    banners: {},
    flash: {}
  },
  setup(__props) {
    const { isMobile } = useScreenSize();
    const props = __props;
    const breadcrumbItems = vueExports.computed(() => {
      const items = [
        { label: "Главная", route: T("main-page") },
        { label: "Новости", route: T("blog.index") },
        { label: props.article.selection.title, route: T("blog.selection.show", { id: props.article.selection.id }) },
        { label: props.article.title, route: T("blog.article.show", { id: props.article.id }) }
      ];
      return [...items];
    });
    const { add } = useToast();
    const form = useForm({
      email: "",
      agreement: false
    });
    const resolver = zodResolver(
      z.object({
        email: z.string().email("Введите корректный email"),
        agreement: z.boolean().refine((val) => val, {
          message: "Обязательное поле",
          path: ["agreement"]
        })
      })
    );
    const onSubmit = ({ valid }) => {
      if (valid) {
        form.post(T("subscribe.store"), {
          preserveScroll: true,
          onSuccess: () => {
            form.reset();
          }
        });
      }
    };
    const commentForm = useForm({
      item_type: "Article",
      item_id: props.article.id,
      text: ""
    });
    const commentResolver = zodResolver(
      z.object({
        item_type: z.enum(["Article"]),
        item_id: z.number(),
        text: z.string().min(3, "Минимум 3 символа")
      })
    );
    const onSubmitComment = ({ valid }) => {
      if (valid) {
        commentForm.post(T("comment.store"), {
          preserveScroll: true,
          onSuccess: (data) => {
            var _a;
            form.reset();
            add({
              severity: "success",
              life: 3e3,
              detail: (_a = data == null ? void 0 : data.props) == null ? void 0 : _a.flash.success
            });
          }
        });
      }
    };
    const shareComp = vueExports.useTemplateRef("shareComponent");
    const clickOnShareText = (event) => {
      if (shareComp.value) {
        shareComp.value.click(event);
      }
    };
    function reactToComment(id, type) {
      router.post(
        `/comment/${id}/toggle`,
        {
          type
        },
        {
          preserveScroll: true,
          preserveState: true
        }
      );
    }
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), { class: "px-6 sm:px-8" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
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
            return [
              vueExports.createVNode(_sfc_main$1, {
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
              }, 8, ["model"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), { class: "mt-6 flex flex-col gap-8 px-6 sm:px-8 lg:flex-row lg:items-start" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div class="w-full"${_scopeId}><div class="border-filling flex min-w-full flex-col gap-4 rounded-3xl border p-2 md:rounded-[40px] md:p-6"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
              src: (_a = _ctx.article.image) == null ? void 0 : _a.path,
              alt: "",
              height: "260px",
              width: "100%",
              "img-classes": "rounded-20"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            if ((_b = _ctx.article.author) == null ? void 0 : _b.full_name) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                shape: "circle",
                label: vueExports.unref(personInitials)((_c = _ctx.article.author) == null ? void 0 : _c.full_name)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex flex-col gap-0.5"${_scopeId}>`);
            if ((_d = _ctx.article.author) == null ? void 0 : _d.full_name) {
              _push2(`<span class="text-subsidiary-medium"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate((_e = _ctx.article.author) == null ? void 0 : _e.full_name)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<span class="text-complimentary-reg text-additional"${_scopeId}>Статья / ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.article.created_at)}</span></div></div><div class="flex cursor-pointer items-center gap-2"${_scopeId}><span class="text-complimentary-reg"${_scopeId}>Поделиться</span>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
              ref: "shareComponent",
              url: vueExports.unref(T)("blog.article.show", { id: _ctx.article.id })
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex flex-col items-start justify-between gap-3 md:flex-row md:gap-6"${_scopeId}><h1 class="font-vast text-vast-additional lg:text-vast-title-bold max-w-[70%] font-bold"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.article.title)}</h1><div class="flex flex-wrap items-center gap-2"${_scopeId}><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(_ctx.article.tags, (tag) => {
              _push2(`<span class="text-mob-small-reg bg-input rounded-20 px-4 py-3"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(tag)}</span>`);
            });
            _push2(`<!--]--></div></div></div><div class="mt-8"${_scopeId}>${_ctx.article.text ?? ""}</div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), { class: "mt-10 !p-0 md:mt-15" }, {
              title: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-default-bold sm:text-heavy-bold"${_scopeId2}> Комментарии <span class="text-additional font-normal"${_scopeId2}>(${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.article.comments_count)})</span></h2>`);
                } else {
                  return [
                    vueExports.createVNode("h2", { class: "text-default-bold sm:text-heavy-bold" }, [
                      vueExports.createTextVNode(" Комментарии "),
                      vueExports.createVNode("span", { class: "text-additional font-normal" }, "(" + vueExports.toDisplayString(_ctx.article.comments_count) + ")", 1)
                    ])
                  ];
                }
              }),
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (!_ctx.auth.user) {
                    _push3(`<div class="bg-light-gray rounded-20 mt-4 flex items-center justify-between p-4 md:mt-6"${_scopeId2}><p class="text-mob-small-bold md:text-default-medium"${_scopeId2}>Авторизуйтесь чтобы оставить комментарий</p>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                      type: "button",
                      label: "Войти",
                      onClick: ($event) => vueExports.unref(router).get(vueExports.unref(T)("api.v1.auth-check"), {}, { preserveScroll: true })
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<div class="bg-input rounded-20 p-4"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Form), {
                      resolver: vueExports.unref(commentResolver),
                      "validate-on-value-update": false,
                      "validate-on-blur": "",
                      "initial-values": vueExports.unref(commentForm),
                      onSubmit: onSubmitComment
                    }, {
                      default: vueExports.withCtx(($form, _push4, _parent4, _scopeId3) => {
                        var _a2, _b2, _c2, _d2;
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
                            error: ((_b2 = (_a2 = $form.text) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message) ?? vueExports.unref(commentForm).errors.text,
                            class: "w-full"
                          }, {
                            default: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, {
                                  modelValue: vueExports.unref(commentForm).text,
                                  "onUpdate:modelValue": ($event) => vueExports.unref(commentForm).text = $event,
                                  name: "text",
                                  placeholder: "Оставьте свой комментарий",
                                  "pt:root": "shadow-none !bg-transparent overflow-y-auto !rounded-none !p-0 [scrollbar-width:none]\n              [&::-webkit-scrollbar]:hidden resize-none w-full !border-none"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(_sfc_main$7, {
                                    modelValue: vueExports.unref(commentForm).text,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(commentForm).text = $event,
                                    name: "text",
                                    placeholder: "Оставьте свой комментарий",
                                    "pt:root": "shadow-none !bg-transparent overflow-y-auto !rounded-none !p-0 [scrollbar-width:none]\n              [&::-webkit-scrollbar]:hidden resize-none w-full !border-none"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                            label: "Отправить",
                            class: "mt-2 md:justify-self-end"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                              error: ((_d2 = (_c2 = $form.text) == null ? void 0 : _c2.error) == null ? void 0 : _d2.message) ?? vueExports.unref(commentForm).errors.text,
                              class: "w-full"
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(_sfc_main$7, {
                                  modelValue: vueExports.unref(commentForm).text,
                                  "onUpdate:modelValue": ($event) => vueExports.unref(commentForm).text = $event,
                                  name: "text",
                                  placeholder: "Оставьте свой комментарий",
                                  "pt:root": "shadow-none !bg-transparent overflow-y-auto !rounded-none !p-0 [scrollbar-width:none]\n              [&::-webkit-scrollbar]:hidden resize-none w-full !border-none"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1032, ["error"]),
                            vueExports.createVNode(vueExports.unref(VButton), {
                              label: "Отправить",
                              class: "mt-2 md:justify-self-end"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  }
                  if (_ctx.article.comments_count > 0) {
                    _push3(`<div class="mt-4"${_scopeId2}><!--[-->`);
                    serverRenderer_cjs_prodExports.ssrRenderList(_ctx.article.comments, (review) => {
                      _push3(`<article class="border-b-stroke flex flex-col gap-3 border-b p-3"${_scopeId2}><div class="flex items-center justify-between gap-3"${_scopeId2}><div class="flex items-center gap-2"${_scopeId2}>`);
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
                        shape: "circle",
                        label: review.userName ? vueExports.unref(personInitials)(review.userName) : "П"
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="flex flex-col gap-0.5"${_scopeId2}><span class="text-subsidiary-medium text-text"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.userName)}</span><span class="text-complimentary-bold text-additional"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.created_at)}</span></div></div><div class="text-additional flex items-center gap-2"${_scopeId2}>`);
                      if (review.likes_count) {
                        _push3(`<p class="text-additional text-complimentary-reg"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.likes_count)} полезно</p>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconThumbsUp), {
                        class: ["cursor-pointer", { "text-text": review.liked_by_user }],
                        onClick: ($event) => reactToComment(review.id, "like")
                      }, null, _parent3, _scopeId2));
                      _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconThumbsDown), {
                        class: ["cursor-pointer", { "text-text": review.disliked_by_user }],
                        onClick: ($event) => reactToComment(review.id, "dislike")
                      }, null, _parent3, _scopeId2));
                      _push3(`</div></div><p class="text-subsidiary-reg md:text-mob-small-reg"${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.text)}</p></article>`);
                    });
                    _push3(`<!--]--></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    !_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      class: "bg-light-gray rounded-20 mt-4 flex items-center justify-between p-4 md:mt-6"
                    }, [
                      vueExports.createVNode("p", { class: "text-mob-small-bold md:text-default-medium" }, "Авторизуйтесь чтобы оставить комментарий"),
                      vueExports.createVNode(vueExports.unref(VButton), {
                        type: "button",
                        label: "Войти",
                        onClick: ($event) => vueExports.unref(router).get(vueExports.unref(T)("api.v1.auth-check"), {}, { preserveScroll: true })
                      }, null, 8, ["onClick"])
                    ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 1,
                      class: "bg-input rounded-20 p-4"
                    }, [
                      vueExports.createVNode(vueExports.unref(Form), {
                        resolver: vueExports.unref(commentResolver),
                        "validate-on-value-update": false,
                        "validate-on-blur": "",
                        "initial-values": vueExports.unref(commentForm),
                        onSubmit: onSubmitComment
                      }, {
                        default: vueExports.withCtx(($form) => {
                          var _a2, _b2;
                          return [
                            vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                              error: ((_b2 = (_a2 = $form.text) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message) ?? vueExports.unref(commentForm).errors.text,
                              class: "w-full"
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(_sfc_main$7, {
                                  modelValue: vueExports.unref(commentForm).text,
                                  "onUpdate:modelValue": ($event) => vueExports.unref(commentForm).text = $event,
                                  name: "text",
                                  placeholder: "Оставьте свой комментарий",
                                  "pt:root": "shadow-none !bg-transparent overflow-y-auto !rounded-none !p-0 [scrollbar-width:none]\n              [&::-webkit-scrollbar]:hidden resize-none w-full !border-none"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1032, ["error"]),
                            vueExports.createVNode(vueExports.unref(VButton), {
                              label: "Отправить",
                              class: "mt-2 md:justify-self-end"
                            })
                          ];
                        }),
                        _: 1
                      }, 8, ["resolver", "initial-values"])
                    ])),
                    _ctx.article.comments_count > 0 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 2,
                      class: "mt-4"
                    }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.article.comments, (review) => {
                        return vueExports.openBlock(), vueExports.createBlock("article", {
                          key: review.id,
                          class: "border-b-stroke flex flex-col gap-3 border-b p-3"
                        }, [
                          vueExports.createVNode("div", { class: "flex items-center justify-between gap-3" }, [
                            vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                              vueExports.createVNode(_sfc_main$3, {
                                shape: "circle",
                                label: review.userName ? vueExports.unref(personInitials)(review.userName) : "П"
                              }, null, 8, ["label"]),
                              vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                                vueExports.createVNode("span", { class: "text-subsidiary-medium text-text" }, vueExports.toDisplayString(review.userName), 1),
                                vueExports.createVNode("span", { class: "text-complimentary-bold text-additional" }, vueExports.toDisplayString(review.created_at), 1)
                              ])
                            ]),
                            vueExports.createVNode("div", { class: "text-additional flex items-center gap-2" }, [
                              review.likes_count ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                key: 0,
                                class: "text-additional text-complimentary-reg"
                              }, vueExports.toDisplayString(review.likes_count) + " полезно", 1)) : vueExports.createCommentVNode("", true),
                              vueExports.createVNode(vueExports.unref(IconThumbsUp), {
                                class: ["cursor-pointer", { "text-text": review.liked_by_user }],
                                onClick: ($event) => reactToComment(review.id, "like")
                              }, null, 8, ["class", "onClick"]),
                              vueExports.createVNode(vueExports.unref(IconThumbsDown), {
                                class: ["cursor-pointer", { "text-text": review.disliked_by_user }],
                                onClick: ($event) => reactToComment(review.id, "dislike")
                              }, null, 8, ["class", "onClick"])
                            ])
                          ]),
                          vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(review.text), 1)
                        ]);
                      }), 128))
                    ])) : vueExports.createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="mt-10 flex flex-col-reverse justify-between gap-4 md:mt-17.5 lg:flex-row lg:items-center"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
              href: vueExports.unref(T)("blog.index"),
              class: "max-lg:w-full"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$8, {
                    label: "Вернуться в раздел новостей",
                    rounded: "",
                    size: "small",
                    class: "max-lg:w-full"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_sfc_main$8, {
                      label: "Вернуться в раздел новостей",
                      rounded: "",
                      size: "small",
                      class: "max-lg:w-full"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center gap-4 md:gap-8"${_scopeId}>`);
            if (_ctx.article.before_url) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                href: _ctx.article.before_url,
                class: "text-subsidiary-reg bg-filling hover:bg-default flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-300 hover:text-white max-lg:w-full"
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretLeft), { class: "h-5 w-5" }, null, _parent3, _scopeId2));
                    _push3(`<span${_scopeId2}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(isMobile) ? "Назад" : "Предыдущая статья")}</span>`);
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(IconCaretLeft), { class: "h-5 w-5" }),
                      vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(isMobile) ? "Назад" : "Предыдущая статья"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.article.next_url) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                href: _ctx.article.next_url,
                class: "text-subsidiary-reg hover:bg-default bg-filling flex items-center gap-2 rounded-full px-3 py-2 text-nowrap transition-all duration-300 hover:text-white max-lg:w-full"
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="w-full text-right"${_scopeId2}>Следующая статья</span>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), { class: "h-5 w-5" }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode("span", { class: "w-full text-right" }, "Следующая статья"),
                      vueExports.createVNode(vueExports.unref(IconCaretRight), { class: "h-5 w-5" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div><aside class="sm:min-w-[352px]"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
              title: "Похожие статьи",
              class: "!p-0"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="gap-2 max-lg:grid min-[480px]:grid-cols-2 lg:flex lg:flex-col"${_scopeId2}><!--[-->`);
                  serverRenderer_cjs_prodExports.ssrRenderList(_ctx.article.related, (card) => {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$9), {
                      id: card.id,
                      key: card.id,
                      title: card.title,
                      description: card.mini_description,
                      image: card.image,
                      "updated-at": card.updated_at
                    }, {
                      actions: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
                            url: vueExports.unref(T)("blog.article.show", card.id)
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                              url: vueExports.unref(T)("blog.article.show", card.id)
                            }, null, 8, ["url"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div><div class="rounded-20 bg-light-gray mt-6 overflow-hidden p-4 lg:max-w-[352px]"${_scopeId2}><h2 class="text-heavy-bold"${_scopeId2}>Рассылка о вкусном и полезном</h2>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Form), {
                    class: "mt-8 flex flex-col gap-2",
                    resolver: vueExports.unref(resolver),
                    "initial-values": vueExports.unref(form),
                    onSubmit
                  }, {
                    default: vueExports.withCtx(($form, _push4, _parent4, _scopeId3) => {
                      var _a2, _b2, _c2, _d2;
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
                          error: ((_b2 = (_a2 = $form.email) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message) ?? vueExports.unref(form).errors.email
                        }, {
                          default: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$a, {
                                modelValue: vueExports.unref(form).email,
                                "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
                                placeholder: vueExports.unref(t)("footer.input_email"),
                                type: "email",
                                class: "border-text hover:border-text-secondary",
                                required: "",
                                autocomplete: "username",
                                name: "email",
                                invalid: !!vueExports.unref(form).errors.email
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                vueExports.createVNode(_sfc_main$a, {
                                  modelValue: vueExports.unref(form).email,
                                  "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
                                  placeholder: vueExports.unref(t)("footer.input_email"),
                                  type: "email",
                                  class: "border-text hover:border-text-secondary",
                                  required: "",
                                  autocomplete: "username",
                                  name: "email",
                                  invalid: !!vueExports.unref(form).errors.email
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "invalid"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), null, {
                          default: vueExports.withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex gap-3"${_scopeId4}>`);
                              _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$b, {
                                modelValue: vueExports.unref(form).agreement,
                                "onUpdate:modelValue": ($event) => vueExports.unref(form).agreement = $event,
                                "input-id": "checkbox-article",
                                binary: "",
                                size: "small",
                                name: "agreement",
                                required: ""
                              }, null, _parent5, _scopeId4));
                              _push5(`<label for="checkbox-article" class="text-complimentary-reg text-additional"${_scopeId4}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("footer.privacy_policy_checkbox_step_1"))} `);
                              _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                                href: "/page/privacy-policy",
                                class: "hover:text-additional underline transition-colors"
                              }, {
                                default: vueExports.withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("footer.privacy_policy_checkbox_link"))}`);
                                  } else {
                                    return [
                                      vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("footer.privacy_policy_checkbox_link")), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(` ${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(t)("footer.privacy_policy_checkbox_step_2"))}</label></div>`);
                            } else {
                              return [
                                vueExports.createVNode("div", { class: "flex gap-3" }, [
                                  vueExports.createVNode(_sfc_main$b, {
                                    modelValue: vueExports.unref(form).agreement,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(form).agreement = $event,
                                    "input-id": "checkbox-article",
                                    binary: "",
                                    size: "small",
                                    name: "agreement",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  vueExports.createVNode("label", {
                                    for: "checkbox-article",
                                    class: "text-complimentary-reg text-additional"
                                  }, [
                                    vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("footer.privacy_policy_checkbox_step_1")) + " ", 1),
                                    vueExports.createVNode(vueExports.unref(link_default), {
                                      href: "/page/privacy-policy",
                                      class: "hover:text-additional underline transition-colors"
                                    }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("footer.privacy_policy_checkbox_link")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createTextVNode(" " + vueExports.toDisplayString(vueExports.unref(t)("footer.privacy_policy_checkbox_step_2")), 1)
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                          type: "submit",
                          label: "Подписаться",
                          class: "z-10"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                            error: ((_d2 = (_c2 = $form.email) == null ? void 0 : _c2.error) == null ? void 0 : _d2.message) ?? vueExports.unref(form).errors.email
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode(_sfc_main$a, {
                                modelValue: vueExports.unref(form).email,
                                "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
                                placeholder: vueExports.unref(t)("footer.input_email"),
                                type: "email",
                                class: "border-text hover:border-text-secondary",
                                required: "",
                                autocomplete: "username",
                                name: "email",
                                invalid: !!vueExports.unref(form).errors.email
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "invalid"])
                            ]),
                            _: 2
                          }, 1032, ["error"]),
                          vueExports.createVNode(vueExports.unref(_sfc_main$6), null, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode("div", { class: "flex gap-3" }, [
                                vueExports.createVNode(_sfc_main$b, {
                                  modelValue: vueExports.unref(form).agreement,
                                  "onUpdate:modelValue": ($event) => vueExports.unref(form).agreement = $event,
                                  "input-id": "checkbox-article",
                                  binary: "",
                                  size: "small",
                                  name: "agreement",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                vueExports.createVNode("label", {
                                  for: "checkbox-article",
                                  class: "text-complimentary-reg text-additional"
                                }, [
                                  vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("footer.privacy_policy_checkbox_step_1")) + " ", 1),
                                  vueExports.createVNode(vueExports.unref(link_default), {
                                    href: "/page/privacy-policy",
                                    class: "hover:text-additional underline transition-colors"
                                  }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("footer.privacy_policy_checkbox_link")), 1)
                                    ]),
                                    _: 1
                                  }),
                                  vueExports.createTextVNode(" " + vueExports.toDisplayString(vueExports.unref(t)("footer.privacy_policy_checkbox_step_2")), 1)
                                ])
                              ])
                            ]),
                            _: 1
                          }),
                          vueExports.createVNode(vueExports.unref(VButton), {
                            type: "submit",
                            label: "Подписаться",
                            class: "z-10"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
                    src: "/images/test-images/reg-info-estore.webp",
                    alt: "Подписка",
                    "img-classes": "scale-150 -mb-25",
                    class: "mx-auto"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    vueExports.createVNode("div", { class: "gap-2 max-lg:grid min-[480px]:grid-cols-2 lg:flex lg:flex-col" }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.article.related, (card) => {
                        return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$9), {
                          id: card.id,
                          key: card.id,
                          title: card.title,
                          description: card.mini_description,
                          image: card.image,
                          "updated-at": card.updated_at
                        }, {
                          actions: vueExports.withCtx(() => [
                            vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                              url: vueExports.unref(T)("blog.article.show", card.id)
                            }, null, 8, ["url"])
                          ]),
                          _: 2
                        }, 1032, ["id", "title", "description", "image", "updated-at"]);
                      }), 128))
                    ]),
                    vueExports.createVNode("div", { class: "rounded-20 bg-light-gray mt-6 overflow-hidden p-4 lg:max-w-[352px]" }, [
                      vueExports.createVNode("h2", { class: "text-heavy-bold" }, "Рассылка о вкусном и полезном"),
                      vueExports.createVNode(vueExports.unref(Form), {
                        class: "mt-8 flex flex-col gap-2",
                        resolver: vueExports.unref(resolver),
                        "initial-values": vueExports.unref(form),
                        onSubmit
                      }, {
                        default: vueExports.withCtx(($form) => {
                          var _a2, _b2;
                          return [
                            vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                              error: ((_b2 = (_a2 = $form.email) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message) ?? vueExports.unref(form).errors.email
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(_sfc_main$a, {
                                  modelValue: vueExports.unref(form).email,
                                  "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
                                  placeholder: vueExports.unref(t)("footer.input_email"),
                                  type: "email",
                                  class: "border-text hover:border-text-secondary",
                                  required: "",
                                  autocomplete: "username",
                                  name: "email",
                                  invalid: !!vueExports.unref(form).errors.email
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "invalid"])
                              ]),
                              _: 2
                            }, 1032, ["error"]),
                            vueExports.createVNode(vueExports.unref(_sfc_main$6), null, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode("div", { class: "flex gap-3" }, [
                                  vueExports.createVNode(_sfc_main$b, {
                                    modelValue: vueExports.unref(form).agreement,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(form).agreement = $event,
                                    "input-id": "checkbox-article",
                                    binary: "",
                                    size: "small",
                                    name: "agreement",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  vueExports.createVNode("label", {
                                    for: "checkbox-article",
                                    class: "text-complimentary-reg text-additional"
                                  }, [
                                    vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("footer.privacy_policy_checkbox_step_1")) + " ", 1),
                                    vueExports.createVNode(vueExports.unref(link_default), {
                                      href: "/page/privacy-policy",
                                      class: "hover:text-additional underline transition-colors"
                                    }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("footer.privacy_policy_checkbox_link")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createTextVNode(" " + vueExports.toDisplayString(vueExports.unref(t)("footer.privacy_policy_checkbox_step_2")), 1)
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            vueExports.createVNode(vueExports.unref(VButton), {
                              type: "submit",
                              label: "Подписаться",
                              class: "z-10"
                            })
                          ];
                        }),
                        _: 1
                      }, 8, ["resolver", "initial-values"]),
                      vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                        src: "/images/test-images/reg-info-estore.webp",
                        alt: "Подписка",
                        "img-classes": "scale-150 -mb-25",
                        class: "mx-auto"
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</aside>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "w-full" }, [
                vueExports.createVNode("div", { class: "border-filling flex min-w-full flex-col gap-4 rounded-3xl border p-2 md:rounded-[40px] md:p-6" }, [
                  vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                    src: (_f = _ctx.article.image) == null ? void 0 : _f.path,
                    alt: "",
                    height: "260px",
                    width: "100%",
                    "img-classes": "rounded-20"
                  }, null, 8, ["src"]),
                  vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                    vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                      ((_g = _ctx.article.author) == null ? void 0 : _g.full_name) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$3, {
                        key: 0,
                        shape: "circle",
                        label: vueExports.unref(personInitials)((_h = _ctx.article.author) == null ? void 0 : _h.full_name)
                      }, null, 8, ["label"])) : vueExports.createCommentVNode("", true),
                      vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                        ((_i = _ctx.article.author) == null ? void 0 : _i.full_name) ? (vueExports.openBlock(), vueExports.createBlock("span", {
                          key: 0,
                          class: "text-subsidiary-medium"
                        }, vueExports.toDisplayString((_j = _ctx.article.author) == null ? void 0 : _j.full_name), 1)) : vueExports.createCommentVNode("", true),
                        vueExports.createVNode("span", { class: "text-complimentary-reg text-additional" }, "Статья / " + vueExports.toDisplayString(_ctx.article.created_at), 1)
                      ])
                    ]),
                    vueExports.createVNode("div", { class: "flex cursor-pointer items-center gap-2" }, [
                      vueExports.createVNode("span", {
                        class: "text-complimentary-reg",
                        onClick: clickOnShareText
                      }, "Поделиться"),
                      vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                        ref: "shareComponent",
                        url: vueExports.unref(T)("blog.article.show", { id: _ctx.article.id })
                      }, null, 8, ["url"])
                    ])
                  ]),
                  vueExports.createVNode("div", { class: "flex flex-col items-start justify-between gap-3 md:flex-row md:gap-6" }, [
                    vueExports.createVNode("h1", { class: "font-vast text-vast-additional lg:text-vast-title-bold max-w-[70%] font-bold" }, vueExports.toDisplayString(_ctx.article.title), 1),
                    vueExports.createVNode("div", { class: "flex flex-wrap items-center gap-2" }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.article.tags, (tag) => {
                        return vueExports.openBlock(), vueExports.createBlock("span", {
                          key: tag,
                          class: "text-mob-small-reg bg-input rounded-20 px-4 py-3"
                        }, vueExports.toDisplayString(tag), 1);
                      }), 128))
                    ])
                  ])
                ]),
                vueExports.createVNode("div", {
                  class: "mt-8",
                  innerHTML: _ctx.article.text
                }, null, 8, ["innerHTML"]),
                vueExports.createVNode(vueExports.unref(_sfc_main$5), { class: "mt-10 !p-0 md:mt-15" }, {
                  title: vueExports.withCtx(() => [
                    vueExports.createVNode("h2", { class: "text-default-bold sm:text-heavy-bold" }, [
                      vueExports.createTextVNode(" Комментарии "),
                      vueExports.createVNode("span", { class: "text-additional font-normal" }, "(" + vueExports.toDisplayString(_ctx.article.comments_count) + ")", 1)
                    ])
                  ]),
                  default: vueExports.withCtx(() => [
                    !_ctx.auth.user ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 0,
                      class: "bg-light-gray rounded-20 mt-4 flex items-center justify-between p-4 md:mt-6"
                    }, [
                      vueExports.createVNode("p", { class: "text-mob-small-bold md:text-default-medium" }, "Авторизуйтесь чтобы оставить комментарий"),
                      vueExports.createVNode(vueExports.unref(VButton), {
                        type: "button",
                        label: "Войти",
                        onClick: ($event) => vueExports.unref(router).get(vueExports.unref(T)("api.v1.auth-check"), {}, { preserveScroll: true })
                      }, null, 8, ["onClick"])
                    ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 1,
                      class: "bg-input rounded-20 p-4"
                    }, [
                      vueExports.createVNode(vueExports.unref(Form), {
                        resolver: vueExports.unref(commentResolver),
                        "validate-on-value-update": false,
                        "validate-on-blur": "",
                        "initial-values": vueExports.unref(commentForm),
                        onSubmit: onSubmitComment
                      }, {
                        default: vueExports.withCtx(($form) => {
                          var _a2, _b2;
                          return [
                            vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                              error: ((_b2 = (_a2 = $form.text) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message) ?? vueExports.unref(commentForm).errors.text,
                              class: "w-full"
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(_sfc_main$7, {
                                  modelValue: vueExports.unref(commentForm).text,
                                  "onUpdate:modelValue": ($event) => vueExports.unref(commentForm).text = $event,
                                  name: "text",
                                  placeholder: "Оставьте свой комментарий",
                                  "pt:root": "shadow-none !bg-transparent overflow-y-auto !rounded-none !p-0 [scrollbar-width:none]\n              [&::-webkit-scrollbar]:hidden resize-none w-full !border-none"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1032, ["error"]),
                            vueExports.createVNode(vueExports.unref(VButton), {
                              label: "Отправить",
                              class: "mt-2 md:justify-self-end"
                            })
                          ];
                        }),
                        _: 1
                      }, 8, ["resolver", "initial-values"])
                    ])),
                    _ctx.article.comments_count > 0 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                      key: 2,
                      class: "mt-4"
                    }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.article.comments, (review) => {
                        return vueExports.openBlock(), vueExports.createBlock("article", {
                          key: review.id,
                          class: "border-b-stroke flex flex-col gap-3 border-b p-3"
                        }, [
                          vueExports.createVNode("div", { class: "flex items-center justify-between gap-3" }, [
                            vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                              vueExports.createVNode(_sfc_main$3, {
                                shape: "circle",
                                label: review.userName ? vueExports.unref(personInitials)(review.userName) : "П"
                              }, null, 8, ["label"]),
                              vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                                vueExports.createVNode("span", { class: "text-subsidiary-medium text-text" }, vueExports.toDisplayString(review.userName), 1),
                                vueExports.createVNode("span", { class: "text-complimentary-bold text-additional" }, vueExports.toDisplayString(review.created_at), 1)
                              ])
                            ]),
                            vueExports.createVNode("div", { class: "text-additional flex items-center gap-2" }, [
                              review.likes_count ? (vueExports.openBlock(), vueExports.createBlock("p", {
                                key: 0,
                                class: "text-additional text-complimentary-reg"
                              }, vueExports.toDisplayString(review.likes_count) + " полезно", 1)) : vueExports.createCommentVNode("", true),
                              vueExports.createVNode(vueExports.unref(IconThumbsUp), {
                                class: ["cursor-pointer", { "text-text": review.liked_by_user }],
                                onClick: ($event) => reactToComment(review.id, "like")
                              }, null, 8, ["class", "onClick"]),
                              vueExports.createVNode(vueExports.unref(IconThumbsDown), {
                                class: ["cursor-pointer", { "text-text": review.disliked_by_user }],
                                onClick: ($event) => reactToComment(review.id, "dislike")
                              }, null, 8, ["class", "onClick"])
                            ])
                          ]),
                          vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(review.text), 1)
                        ]);
                      }), 128))
                    ])) : vueExports.createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                vueExports.createVNode("div", { class: "mt-10 flex flex-col-reverse justify-between gap-4 md:mt-17.5 lg:flex-row lg:items-center" }, [
                  vueExports.createVNode(vueExports.unref(link_default), {
                    href: vueExports.unref(T)("blog.index"),
                    class: "max-lg:w-full"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(_sfc_main$8, {
                        label: "Вернуться в раздел новостей",
                        rounded: "",
                        size: "small",
                        class: "max-lg:w-full"
                      })
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  vueExports.createVNode("div", { class: "flex items-center gap-4 md:gap-8" }, [
                    _ctx.article.before_url ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(link_default), {
                      key: 0,
                      href: _ctx.article.before_url,
                      class: "text-subsidiary-reg bg-filling hover:bg-default flex items-center gap-2 rounded-full px-3 py-2 transition-all duration-300 hover:text-white max-lg:w-full"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(vueExports.unref(IconCaretLeft), { class: "h-5 w-5" }),
                        vueExports.createVNode("span", null, vueExports.toDisplayString(vueExports.unref(isMobile) ? "Назад" : "Предыдущая статья"), 1)
                      ]),
                      _: 1
                    }, 8, ["href"])) : vueExports.createCommentVNode("", true),
                    _ctx.article.next_url ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(link_default), {
                      key: 1,
                      href: _ctx.article.next_url,
                      class: "text-subsidiary-reg hover:bg-default bg-filling flex items-center gap-2 rounded-full px-3 py-2 text-nowrap transition-all duration-300 hover:text-white max-lg:w-full"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("span", { class: "w-full text-right" }, "Следующая статья"),
                        vueExports.createVNode(vueExports.unref(IconCaretRight), { class: "h-5 w-5" })
                      ]),
                      _: 1
                    }, 8, ["href"])) : vueExports.createCommentVNode("", true)
                  ])
                ])
              ]),
              vueExports.createVNode("aside", { class: "sm:min-w-[352px]" }, [
                vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                  title: "Похожие статьи",
                  class: "!p-0"
                }, {
                  default: vueExports.withCtx(() => [
                    vueExports.createVNode("div", { class: "gap-2 max-lg:grid min-[480px]:grid-cols-2 lg:flex lg:flex-col" }, [
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.article.related, (card) => {
                        return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$9), {
                          id: card.id,
                          key: card.id,
                          title: card.title,
                          description: card.mini_description,
                          image: card.image,
                          "updated-at": card.updated_at
                        }, {
                          actions: vueExports.withCtx(() => [
                            vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                              url: vueExports.unref(T)("blog.article.show", card.id)
                            }, null, 8, ["url"])
                          ]),
                          _: 2
                        }, 1032, ["id", "title", "description", "image", "updated-at"]);
                      }), 128))
                    ]),
                    vueExports.createVNode("div", { class: "rounded-20 bg-light-gray mt-6 overflow-hidden p-4 lg:max-w-[352px]" }, [
                      vueExports.createVNode("h2", { class: "text-heavy-bold" }, "Рассылка о вкусном и полезном"),
                      vueExports.createVNode(vueExports.unref(Form), {
                        class: "mt-8 flex flex-col gap-2",
                        resolver: vueExports.unref(resolver),
                        "initial-values": vueExports.unref(form),
                        onSubmit
                      }, {
                        default: vueExports.withCtx(($form) => {
                          var _a2, _b2;
                          return [
                            vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                              error: ((_b2 = (_a2 = $form.email) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message) ?? vueExports.unref(form).errors.email
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(_sfc_main$a, {
                                  modelValue: vueExports.unref(form).email,
                                  "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
                                  placeholder: vueExports.unref(t)("footer.input_email"),
                                  type: "email",
                                  class: "border-text hover:border-text-secondary",
                                  required: "",
                                  autocomplete: "username",
                                  name: "email",
                                  invalid: !!vueExports.unref(form).errors.email
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "invalid"])
                              ]),
                              _: 2
                            }, 1032, ["error"]),
                            vueExports.createVNode(vueExports.unref(_sfc_main$6), null, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode("div", { class: "flex gap-3" }, [
                                  vueExports.createVNode(_sfc_main$b, {
                                    modelValue: vueExports.unref(form).agreement,
                                    "onUpdate:modelValue": ($event) => vueExports.unref(form).agreement = $event,
                                    "input-id": "checkbox-article",
                                    binary: "",
                                    size: "small",
                                    name: "agreement",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  vueExports.createVNode("label", {
                                    for: "checkbox-article",
                                    class: "text-complimentary-reg text-additional"
                                  }, [
                                    vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("footer.privacy_policy_checkbox_step_1")) + " ", 1),
                                    vueExports.createVNode(vueExports.unref(link_default), {
                                      href: "/page/privacy-policy",
                                      class: "hover:text-additional underline transition-colors"
                                    }, {
                                      default: vueExports.withCtx(() => [
                                        vueExports.createTextVNode(vueExports.toDisplayString(vueExports.unref(t)("footer.privacy_policy_checkbox_link")), 1)
                                      ]),
                                      _: 1
                                    }),
                                    vueExports.createTextVNode(" " + vueExports.toDisplayString(vueExports.unref(t)("footer.privacy_policy_checkbox_step_2")), 1)
                                  ])
                                ])
                              ]),
                              _: 1
                            }),
                            vueExports.createVNode(vueExports.unref(VButton), {
                              type: "submit",
                              label: "Подписаться",
                              class: "z-10"
                            })
                          ];
                        }),
                        _: 1
                      }, 8, ["resolver", "initial-values"]),
                      vueExports.createVNode(vueExports.unref(_sfc_main$2), {
                        src: "/images/test-images/reg-info-estore.webp",
                        alt: "Подписка",
                        "img-classes": "scale-150 -mb-25",
                        class: "mx-auto"
                      })
                    ])
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), { class: "mt-20 px-6 sm:px-8" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative overflow-hidden rounded-[40px]"${_scopeId}><swiper-container space-between="32" loop="true"${serverRenderer_cjs_prodExports.ssrRenderAttr("navigation", {
              nextEl: ".slider-next-main",
              prevEl: ".slider-prev-main"
            })}${_scopeId}><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(_ctx.banners, (banner) => {
              _push2(`<swiper-slide${_scopeId}><div class="h-105 overflow-hidden rounded-[40px] bg-cover bg-center bg-no-repeat md:h-80" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({
                backgroundImage: `url(${banner.image.path})`
              })}"${_scopeId}><div class="h-[100%]"${_scopeId}><div class="bg-text h-2/3 mask-[url(&#39;/images/masks/for_combo_mobile1.svg&#39;)] mask-cover mask-bottom mask-no-repeat p-6 md:h-full md:max-w-[70%] md:mask-[url(&#39;/images/masks/for_combo.svg&#39;)] md:mask-size-[auto_150%] md:mask-right lg:mask-contain lg:mask-left"${_scopeId}><div class="mb-6 md:mb-8"${_scopeId}><div class="font-vast text-vast-mob-title-bold md:text-vast-title-bold mb-2 max-w-[60%] text-white uppercase md:mb-3"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(banner.title)}</div><span class="text-mob-small-reg text-white"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(banner.description)}</span></div>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                href: banner.link_url
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                      label: banner.button_text,
                      variant: "light",
                      class: "w-full md:mt-14 md:w-fit"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(VButton), {
                        label: banner.button_text,
                        variant: "light",
                        class: "w-full md:mt-14 md:w-fit"
                      }, null, 8, ["label"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></div></div></swiper-slide>`);
            });
            _push2(`<!--]--></swiper-container>`);
            if (_ctx.banners.length > 1) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VNavigationButton), {
                class: "absolute right-4 bottom-4 z-10 shadow-none md:top-4 md:bottom-auto",
                "slider-key": "main",
                "button-color": "#E7EAEC"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "relative overflow-hidden rounded-[40px]" }, [
                vueExports.createVNode("swiper-container", {
                  "space-between": "32",
                  loop: "true",
                  navigation: {
                    nextEl: ".slider-next-main",
                    prevEl: ".slider-prev-main"
                  }
                }, [
                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.banners, (banner) => {
                    return vueExports.openBlock(), vueExports.createBlock("swiper-slide", {
                      key: banner.id
                    }, [
                      vueExports.createVNode("div", {
                        class: "h-105 overflow-hidden rounded-[40px] bg-cover bg-center bg-no-repeat md:h-80",
                        style: {
                          backgroundImage: `url(${banner.image.path})`
                        }
                      }, [
                        vueExports.createVNode("div", { class: "h-[100%]" }, [
                          vueExports.createVNode("div", { class: "bg-text h-2/3 mask-[url('/images/masks/for_combo_mobile1.svg')] mask-cover mask-bottom mask-no-repeat p-6 md:h-full md:max-w-[70%] md:mask-[url('/images/masks/for_combo.svg')] md:mask-size-[auto_150%] md:mask-right lg:mask-contain lg:mask-left" }, [
                            vueExports.createVNode("div", { class: "mb-6 md:mb-8" }, [
                              vueExports.createVNode("div", { class: "font-vast text-vast-mob-title-bold md:text-vast-title-bold mb-2 max-w-[60%] text-white uppercase md:mb-3" }, vueExports.toDisplayString(banner.title), 1),
                              vueExports.createVNode("span", { class: "text-mob-small-reg text-white" }, vueExports.toDisplayString(banner.description), 1)
                            ]),
                            vueExports.createVNode(vueExports.unref(link_default), {
                              href: banner.link_url
                            }, {
                              default: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(VButton), {
                                  label: banner.button_text,
                                  variant: "light",
                                  class: "w-full md:mt-14 md:w-fit"
                                }, null, 8, ["label"])
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ])
                        ])
                      ], 4)
                    ]);
                  }), 128))
                ]),
                _ctx.banners.length > 1 ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(VNavigationButton), {
                  key: 0,
                  class: "absolute right-4 bottom-4 z-10 shadow-none md:top-4 md:bottom-auto",
                  "slider-key": "main",
                  "button-color": "#E7EAEC"
                })) : vueExports.createCommentVNode("", true)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/blog/blog-article/ui/BlogArticlePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
