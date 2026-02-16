import { v as vueExports, s as serverRenderer_cjs_prodExports, ac as IconXCircleDelete, t as _export_sfc, al as _sfc_main$2, c as useForm, u as useScreenSize, l as link_default, m as IconCaretRight, _ as _sfc_main$8, a8 as IconArrowDown, aj as _sfc_main$9, H as VScrollPanel, j as _sfc_main$a, z as IconXCircle } from "../ssr.js";
import VAlert from "./VAlert-eHguw6ZE.js";
import _sfc_main$b from "./VPromoAlert-FF0mSLlj.js";
import { _ as _sfc_main$c } from "./VPagination-cbnzOOCr.js";
import { _ as _sfc_main$3, a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$6, d as _sfc_main$7 } from "./Tabs-_owbj9IT.js";
import { router } from "@inertiajs/core";
import "@vue/compiler-dom";
import "@vue/runtime-dom";
import "@vue/shared";
import "@vue/compiler-ssr";
import "node:stream";
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
import "./IconArrowDownFull-CQhNp1Ot.js";
import "./IconShoppingCart-1v7bHyH6.js";
import "primevue/tab";
import "primevue/tablist";
import "primevue/tabpanel";
import "primevue/tabpanels";
import "primevue/tabs";
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "DeleteAlert",
  __ssrInlineRender: true,
  props: {
    type: {},
    id: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        class: "bg-input deleteButton hover:bg-text cursor-pointer rounded-full p-3",
        type: "button"
      }, _attrs))} data-v-aaeb1ef6><div class="bg-delete deleteIconCircle rounded-full transition-all duration-300 ease-in" data-v-aaeb1ef6>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconXCircleDelete), { class: "deleteIcon h-3 w-3" }, null, _parent));
      _push(`</div></button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/features/Alerts/delete-alert/ui/DeleteAlert.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DeleteAlert = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-aaeb1ef6"]]);
const perPage = 8;
const notifyPerPage = 4;
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  ...{
    layout: _sfc_main$2
  },
  __name: "ProfileNotificationsPage",
  __ssrInlineRender: true,
  props: {
    alerts: {},
    notifications: {},
    categories: {},
    notificationsCount: {}
  },
  setup(__props) {
    var _a;
    function normalizeCategoryIds(param) {
      if (Array.isArray(param)) return param.map((id) => Number(id));
      if (param) return [Number(param)];
      return [];
    }
    const props = __props;
    const pageContent = vueExports.useTemplateRef("notifications-page");
    const alertCategoriesContainer = vueExports.useTemplateRef("alert-categories-popover");
    const isAlertPopoverOpen = vueExports.ref(false);
    const toggleCategoriesSelect = (e) => {
      var _a2;
      (_a2 = alertCategoriesContainer.value) == null ? void 0 : _a2.toggle(e);
    };
    const form = useForm({
      category_ids: normalizeCategoryIds((_a = route().queryParams) == null ? void 0 : _a.category_ids) ?? []
    });
    const removeCategory = (id) => {
      var _a2;
      form.category_ids = (_a2 = form == null ? void 0 : form.category_ids) == null ? void 0 : _a2.filter((catId) => catId !== id);
      filterByCategory();
    };
    const filterByCategory = () => {
      form.get(route("user.profile.notifications"), {
        preserveScroll: true,
        preserveState: true,
        replace: true,
        only: ["notifications"],
        onFinish: () => {
          notifyCurrentPage.value = 1;
        }
      });
    };
    const onPageUpdate = async () => {
      var _a2;
      (_a2 = pageContent.value) == null ? void 0 : _a2.scrollIntoView({
        behavior: "smooth"
      });
    };
    const paginatedAlerts = vueExports.computed(() => {
      const start = (currentPage.value - 1) * perPage;
      const end = start + perPage;
      return props.alerts.slice(start, end);
    });
    const currentPage = vueExports.ref(1);
    const notifyCurrentPage = vueExports.ref(1);
    const paginatedNotifications = vueExports.computed(() => {
      const start = (notifyCurrentPage.value - 1) * notifyPerPage;
      const end = start + notifyPerPage;
      return props.notifications.slice(start, end);
    });
    const markAsRead = () => {
      if (activeTab.value === "1") {
        const ids = paginatedAlerts.value.filter((a) => !a.is_read).map((a) => a.id);
        if (!ids.length) return;
        router.post(
          route("alert.mark-as-read"),
          {
            ids,
            type: "alert"
          },
          {
            preserveScroll: true,
            preserveState: true,
            replace: true,
            only: ["alerts"]
          }
        );
      }
      if (activeTab.value === "0") {
        const ids = paginatedNotifications.value.filter((n) => !n.is_read).map((n) => n.id);
        if (!ids.length) return;
        router.post(
          route("alert.mark-as-read"),
          {
            ids,
            type: "notify"
          },
          {
            preserveScroll: true,
            preserveState: true,
            replace: true,
            only: ["notifications"]
          }
        );
      }
    };
    vueExports.onMounted(() => {
      setTimeout(() => {
        markAsRead();
      }, 2e3);
    });
    const { isMobile } = useScreenSize();
    const activeTab = vueExports.ref("0");
    vueExports.watch([currentPage, notifyCurrentPage, activeTab, form.category_ids], () => {
      setTimeout(() => {
        markAsRead();
      }, 2e3);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        ref: "notifications-page",
        class: "w-full max-md:p-6 lg:min-w-0 lg:flex-1"
      }, _attrs))} data-v-4080cb52><div class="flex items-center justify-between" data-v-4080cb52><h1 class="text-default-bold" data-v-4080cb52>Уведомления</h1><div class="bg-filling hover:bg-default text-subsidiary-reg rounded-full px-3 py-2.5 transition-all duration-300 hover:text-white max-sm:mr-4" data-v-4080cb52>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
        href: _ctx.route("user.profile.settings"),
        class: "flex items-center gap-2"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-4080cb52${_scopeId}>Настроить `);
            if (!vueExports.unref(isMobile)) {
              _push2(`<span data-v-4080cb52${_scopeId}>уведомления</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</span>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretRight), {
              width: "16px",
              height: "16px"
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode("span", null, [
                vueExports.createTextVNode("Настроить "),
                !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 0 }, "уведомления")) : vueExports.createCommentVNode("", true)
              ]),
              vueExports.createVNode(vueExports.unref(IconCaretRight), {
                width: "16px",
                height: "16px"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
        value: activeTab.value,
        "onUpdate:value": ($event) => activeTab.value = $event,
        class: "mt-8",
        scrollable: false
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, null, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, {
                    value: "0",
                    class: "md:basis-1/2"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Новинки и промоакции`);
                      } else {
                        return [
                          vueExports.createTextVNode("Новинки и промоакции")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, {
                    value: "1",
                    class: "md:basis-1/2"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Оповещения`);
                      } else {
                        return [
                          vueExports.createTextVNode("Оповещения")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_sfc_main$5, {
                      value: "0",
                      class: "md:basis-1/2"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createTextVNode("Новинки и промоакции")
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_sfc_main$5, {
                      value: "1",
                      class: "md:basis-1/2"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createTextVNode("Оповещения")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, null, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, { value: "0" }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col gap-6 md:gap-8" data-v-4080cb52${_scopeId3}>`);
                        if (!_ctx.notificationsCount) {
                          _push4(`<section class="bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15" data-v-4080cb52${_scopeId3}><div class="flex flex-col items-center gap-6 md:flex-row lg:gap-15" data-v-4080cb52${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$8), {
                            src: "/images/test-images/Bell.png",
                            alt: "bell",
                            class: "xl:scale-120",
                            height: vueExports.unref(isMobile) ? "100px" : "170px"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]" data-v-4080cb52${_scopeId3}><p class="text-default-medium md:text-heavy-medium max-md:text-center" data-v-4080cb52${_scopeId3}>У вас пока что нет уведомлений</p></div></div></section>`);
                        } else {
                          _push4(`<section data-v-4080cb52${_scopeId3}><div class="mb-4 flex flex-col justify-between gap-2 lg:flex-row lg:items-center" data-v-4080cb52${_scopeId3}><p class="text-small-medium" data-v-4080cb52${_scopeId3}>Уведомления о новых поступлениях и скидках</p><div data-v-4080cb52${_scopeId3}><button class="${serverRenderer_cjs_prodExports.ssrRenderClass([{ "!border-text !text-text bg-transparent": isAlertPopoverOpen.value }, "bg-input rounded-20 text-additional flex w-full cursor-pointer items-center justify-between border border-transparent px-4 py-3 transition-all duration-200 ease-in lg:w-[370px]"])}" type="button" data-v-4080cb52${_scopeId3}><span class="transition-colors duration-200 ease-in" data-v-4080cb52${_scopeId3}>Выберите категории</span>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowDown), {
                            class: ["text-default transition-all duration-200 ease-in", { "rotate-180": isAlertPopoverOpen.value }]
                          }, null, _parent4, _scopeId3));
                          _push4(`</button>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, {
                            ref: "alert-categories-popover",
                            onShow: ($event) => isAlertPopoverOpen.value = true,
                            onHide: ($event) => isAlertPopoverOpen.value = false
                          }, {
                            default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-small-regular flex w-[340px] flex-col" data-v-4080cb52${_scopeId4}>`);
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VScrollPanel), { style: { "height": "210px" } }, {
                                  default: vueExports.withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      serverRenderer_cjs_prodExports.ssrRenderList(_ctx.categories, (category) => {
                                        _push6(`<div class="hover:bg-input flex cursor-pointer items-center rounded-lg py-2 transition-colors duration-200 ease-in" data-v-4080cb52${_scopeId5}>`);
                                        _push6(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$a, {
                                          modelValue: vueExports.unref(form).category_ids,
                                          "onUpdate:modelValue": ($event) => vueExports.unref(form).category_ids = $event,
                                          "input-id": String(category.id),
                                          name: String(category.id),
                                          value: category.id,
                                          onChange: filterByCategory
                                        }, null, _parent6, _scopeId5));
                                        _push6(`<label class="cursor-pointer pl-3"${serverRenderer_cjs_prodExports.ssrRenderAttr("for", String(category.id))} data-v-4080cb52${_scopeId5}>${serverRenderer_cjs_prodExports.ssrInterpolate(category.name)}</label></div>`);
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.categories, (category) => {
                                          return vueExports.openBlock(), vueExports.createBlock("div", {
                                            key: category.id,
                                            class: "hover:bg-input flex cursor-pointer items-center rounded-lg py-2 transition-colors duration-200 ease-in"
                                          }, [
                                            vueExports.createVNode(_sfc_main$a, {
                                              modelValue: vueExports.unref(form).category_ids,
                                              "onUpdate:modelValue": ($event) => vueExports.unref(form).category_ids = $event,
                                              "input-id": String(category.id),
                                              name: String(category.id),
                                              value: category.id,
                                              onChange: filterByCategory
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                                            vueExports.createVNode("label", {
                                              class: "cursor-pointer pl-3",
                                              for: String(category.id)
                                            }, vueExports.toDisplayString(category.name), 9, ["for"])
                                          ]);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  vueExports.createVNode("div", { class: "text-small-regular flex w-[340px] flex-col" }, [
                                    vueExports.createVNode(vueExports.unref(VScrollPanel), { style: { "height": "210px" } }, {
                                      default: vueExports.withCtx(() => [
                                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.categories, (category) => {
                                          return vueExports.openBlock(), vueExports.createBlock("div", {
                                            key: category.id,
                                            class: "hover:bg-input flex cursor-pointer items-center rounded-lg py-2 transition-colors duration-200 ease-in"
                                          }, [
                                            vueExports.createVNode(_sfc_main$a, {
                                              modelValue: vueExports.unref(form).category_ids,
                                              "onUpdate:modelValue": ($event) => vueExports.unref(form).category_ids = $event,
                                              "input-id": String(category.id),
                                              name: String(category.id),
                                              value: category.id,
                                              onChange: filterByCategory
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                                            vueExports.createVNode("label", {
                                              class: "cursor-pointer pl-3",
                                              for: String(category.id)
                                            }, vueExports.toDisplayString(category.name), 9, ["for"])
                                          ]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                          if (vueExports.unref(form).category_ids.length > 0) {
                            _push4(`<div class="flex flex-wrap items-center gap-2" data-v-4080cb52${_scopeId3}><!--[-->`);
                            serverRenderer_cjs_prodExports.ssrRenderList(vueExports.unref(form).category_ids, (categoryId) => {
                              var _a2;
                              _push4(`<div class="rounded-20 bg-text flex items-center gap-2 px-4 py-3.5 text-white" data-v-4080cb52${_scopeId3}><span class="text-mob-small-reg" data-v-4080cb52${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(((_a2 = props.categories.find((cat) => cat.id === categoryId)) == null ? void 0 : _a2.name) || "Неизвестная категория")}</span><button class="cursor-pointer" data-v-4080cb52${_scopeId3}>`);
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconXCircle), null, null, _parent4, _scopeId3));
                              _push4(`</button></div>`);
                            });
                            _push4(`<!--]--></div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          if (_ctx.notifications.length) {
                            _push4(`<!--[-->`);
                            if (!vueExports.unref(form).category_ids.length && notifyCurrentPage.value === 1) {
                              _push4(`<div class="bg-text rounded-20 flex h-full flex-col overflow-hidden bg-top-right bg-no-repeat lg:flex" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({
                                backgroundImage: !vueExports.unref(isMobile) ? `url(/images/test-images/notification_banner.webp)` : "",
                                backgroundSize: "50%"
                              })}" data-v-4080cb52${_scopeId3}><div class="bg-text sm:mask-right-top relative z-0 h-full w-full mask-[url(&#39;/images/masks/for_combo_mobile1.svg&#39;)] mask-cover mask-bottom-right mask-no-repeat max-sm:pb-14 sm:max-w-[75%] sm:mask-[url(&#39;/images/masks/for_notification_banner.svg&#39;)]" data-v-4080cb52${_scopeId3}><div class="relative z-10 flex flex-col justify-between p-4 text-white md:max-h-full md:pr-20 lg:p-4 lg:py-6" data-v-4080cb52${_scopeId3}><div data-v-4080cb52${_scopeId3}><h3 class="font-vast text-vast-mob-title-bold font-bold uppercase max-xl:max-w-[520px] xl:w-full" data-v-4080cb52${_scopeId3}> Мясо в деталях: от фермы до тарелки </h3><p class="text-mob-small-reg mt-2" data-v-4080cb52${_scopeId3}>Узнайте все о работе с премиальной говядиной</p></div></div></div>`);
                              if (vueExports.unref(isMobile)) {
                                _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$8), {
                                  class: "-mt-30",
                                  height: "300px",
                                  width: "100%",
                                  src: "/images/test-images/notification_banner.webp",
                                  alt: "combo"
                                }, null, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`<!--[-->`);
                            serverRenderer_cjs_prodExports.ssrRenderList(paginatedNotifications.value, (notification) => {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$b, vueExports.mergeProps({
                                key: notification.id,
                                ref_for: true
                              }, notification), {
                                deleteButton: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DeleteAlert), {
                                      id: notification.id,
                                      type: "notify"
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      vueExports.createVNode(vueExports.unref(DeleteAlert), {
                                        id: notification.id,
                                        type: "notify"
                                      }, null, 8, ["id"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            });
                            _push4(`<!--]-->`);
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$c), {
                              modelValue: notifyCurrentPage.value,
                              "onUpdate:modelValue": [($event) => notifyCurrentPage.value = $event, onPageUpdate],
                              "per-page": notifyPerPage,
                              "total-count": _ctx.notifications.length,
                              class: "mx-auto mt-8 justify-center"
                            }, null, _parent4, _scopeId3));
                            _push4(`<!--]-->`);
                          } else {
                            _push4(`<div class="bg-light-gray mt-16 rounded-[40px] md:mt-20" data-v-4080cb52${_scopeId3}><div class="flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48" data-v-4080cb52${_scopeId3}>`);
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$8), {
                              src: "/images/test-images/image_exclamation.webp",
                              alt: "восклицание",
                              class: "-mt-20 max-w-[120px] lg:max-w-[200px]"
                            }, null, _parent4, _scopeId3));
                            _push4(`<p class="text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]" data-v-4080cb52${_scopeId3}> К сожалению, по заданным параметрам ничего не найдено </p></div></div>`);
                          }
                          _push4(`</section>`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                            !_ctx.notificationsCount ? (vueExports.openBlock(), vueExports.createBlock("section", {
                              key: 0,
                              class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                            }, [
                              vueExports.createVNode("div", { class: "flex flex-col items-center gap-6 md:flex-row lg:gap-15" }, [
                                vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                  src: "/images/test-images/Bell.png",
                                  alt: "bell",
                                  class: "xl:scale-120",
                                  height: vueExports.unref(isMobile) ? "100px" : "170px"
                                }, null, 8, ["height"]),
                                vueExports.createVNode("div", { class: "flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]" }, [
                                  vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "У вас пока что нет уведомлений")
                                ])
                              ])
                            ])) : (vueExports.openBlock(), vueExports.createBlock("section", { key: 1 }, [
                              vueExports.createVNode("div", { class: "mb-4 flex flex-col justify-between gap-2 lg:flex-row lg:items-center" }, [
                                vueExports.createVNode("p", { class: "text-small-medium" }, "Уведомления о новых поступлениях и скидках"),
                                vueExports.createVNode("div", null, [
                                  vueExports.createVNode("button", {
                                    class: ["bg-input rounded-20 text-additional flex w-full cursor-pointer items-center justify-between border border-transparent px-4 py-3 transition-all duration-200 ease-in lg:w-[370px]", { "!border-text !text-text bg-transparent": isAlertPopoverOpen.value }],
                                    type: "button",
                                    onClick: toggleCategoriesSelect
                                  }, [
                                    vueExports.createVNode("span", { class: "transition-colors duration-200 ease-in" }, "Выберите категории"),
                                    vueExports.createVNode(vueExports.unref(IconArrowDown), {
                                      class: ["text-default transition-all duration-200 ease-in", { "rotate-180": isAlertPopoverOpen.value }]
                                    }, null, 8, ["class"])
                                  ], 2),
                                  vueExports.createVNode(_sfc_main$9, {
                                    ref: "alert-categories-popover",
                                    onShow: ($event) => isAlertPopoverOpen.value = true,
                                    onHide: ($event) => isAlertPopoverOpen.value = false
                                  }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode("div", { class: "text-small-regular flex w-[340px] flex-col" }, [
                                        vueExports.createVNode(vueExports.unref(VScrollPanel), { style: { "height": "210px" } }, {
                                          default: vueExports.withCtx(() => [
                                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.categories, (category) => {
                                              return vueExports.openBlock(), vueExports.createBlock("div", {
                                                key: category.id,
                                                class: "hover:bg-input flex cursor-pointer items-center rounded-lg py-2 transition-colors duration-200 ease-in"
                                              }, [
                                                vueExports.createVNode(_sfc_main$a, {
                                                  modelValue: vueExports.unref(form).category_ids,
                                                  "onUpdate:modelValue": ($event) => vueExports.unref(form).category_ids = $event,
                                                  "input-id": String(category.id),
                                                  name: String(category.id),
                                                  value: category.id,
                                                  onChange: filterByCategory
                                                }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                                                vueExports.createVNode("label", {
                                                  class: "cursor-pointer pl-3",
                                                  for: String(category.id)
                                                }, vueExports.toDisplayString(category.name), 9, ["for"])
                                              ]);
                                            }), 128))
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    _: 1
                                  }, 8, ["onShow", "onHide"])
                                ])
                              ]),
                              vueExports.unref(form).category_ids.length > 0 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 0,
                                class: "flex flex-wrap items-center gap-2"
                              }, [
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(form).category_ids, (categoryId) => {
                                  var _a2;
                                  return vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: categoryId,
                                    class: "rounded-20 bg-text flex items-center gap-2 px-4 py-3.5 text-white"
                                  }, [
                                    vueExports.createVNode("span", { class: "text-mob-small-reg" }, vueExports.toDisplayString(((_a2 = props.categories.find((cat) => cat.id === categoryId)) == null ? void 0 : _a2.name) || "Неизвестная категория"), 1),
                                    vueExports.createVNode("button", {
                                      class: "cursor-pointer",
                                      onClick: ($event) => removeCategory(categoryId)
                                    }, [
                                      vueExports.createVNode(vueExports.unref(IconXCircle))
                                    ], 8, ["onClick"])
                                  ]);
                                }), 128))
                              ])) : vueExports.createCommentVNode("", true),
                              _ctx.notifications.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                                !vueExports.unref(form).category_ids.length && notifyCurrentPage.value === 1 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "bg-text rounded-20 flex h-full flex-col overflow-hidden bg-top-right bg-no-repeat lg:flex",
                                  style: {
                                    backgroundImage: !vueExports.unref(isMobile) ? `url(/images/test-images/notification_banner.webp)` : "",
                                    backgroundSize: "50%"
                                  }
                                }, [
                                  vueExports.createVNode("div", { class: "bg-text sm:mask-right-top relative z-0 h-full w-full mask-[url('/images/masks/for_combo_mobile1.svg')] mask-cover mask-bottom-right mask-no-repeat max-sm:pb-14 sm:max-w-[75%] sm:mask-[url('/images/masks/for_notification_banner.svg')]" }, [
                                    vueExports.createVNode("div", { class: "relative z-10 flex flex-col justify-between p-4 text-white md:max-h-full md:pr-20 lg:p-4 lg:py-6" }, [
                                      vueExports.createVNode("div", null, [
                                        vueExports.createVNode("h3", { class: "font-vast text-vast-mob-title-bold font-bold uppercase max-xl:max-w-[520px] xl:w-full" }, " Мясо в деталях: от фермы до тарелки "),
                                        vueExports.createVNode("p", { class: "text-mob-small-reg mt-2" }, "Узнайте все о работе с премиальной говядиной")
                                      ])
                                    ])
                                  ]),
                                  vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$8), {
                                    key: 0,
                                    class: "-mt-30",
                                    height: "300px",
                                    width: "100%",
                                    src: "/images/test-images/notification_banner.webp",
                                    alt: "combo"
                                  })) : vueExports.createCommentVNode("", true)
                                ], 4)) : vueExports.createCommentVNode("", true),
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedNotifications.value, (notification) => {
                                  return vueExports.openBlock(), vueExports.createBlock(_sfc_main$b, vueExports.mergeProps({
                                    key: notification.id,
                                    ref_for: true
                                  }, notification), {
                                    deleteButton: vueExports.withCtx(() => [
                                      vueExports.createVNode(vueExports.unref(DeleteAlert), {
                                        id: notification.id,
                                        type: "notify"
                                      }, null, 8, ["id"])
                                    ]),
                                    _: 2
                                  }, 1040);
                                }), 128)),
                                vueExports.createVNode(vueExports.unref(_sfc_main$c), {
                                  modelValue: notifyCurrentPage.value,
                                  "onUpdate:modelValue": [($event) => notifyCurrentPage.value = $event, onPageUpdate],
                                  "per-page": notifyPerPage,
                                  "total-count": _ctx.notifications.length,
                                  class: "mx-auto mt-8 justify-center"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                              ], 64)) : (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 2,
                                class: "bg-light-gray mt-16 rounded-[40px] md:mt-20"
                              }, [
                                vueExports.createVNode("div", { class: "flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48" }, [
                                  vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                    src: "/images/test-images/image_exclamation.webp",
                                    alt: "восклицание",
                                    class: "-mt-20 max-w-[120px] lg:max-w-[200px]"
                                  }),
                                  vueExports.createVNode("p", { class: "text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]" }, " К сожалению, по заданным параметрам ничего не найдено ")
                                ])
                              ]))
                            ]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, { value: "1" }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col gap-6 md:gap-8" data-v-4080cb52${_scopeId3}>`);
                        if (!_ctx.alerts.length) {
                          _push4(`<section class="bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15" data-v-4080cb52${_scopeId3}><div class="flex flex-col items-center gap-6 md:flex-row lg:gap-15" data-v-4080cb52${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$8), {
                            src: "/images/test-images/Bell.png",
                            alt: "bell",
                            class: "xl:scale-120",
                            height: vueExports.unref(isMobile) ? "100px" : "170px"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]" data-v-4080cb52${_scopeId3}><p class="text-default-medium md:text-heavy-medium max-md:text-center" data-v-4080cb52${_scopeId3}>У вас пока что нет уведомлений</p></div></div></section>`);
                        } else {
                          _push4(`<section data-v-4080cb52${_scopeId3}><!--[-->`);
                          serverRenderer_cjs_prodExports.ssrRenderList(paginatedAlerts.value, (alert) => {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(VAlert, vueExports.mergeProps({
                              key: alert.id,
                              ref_for: true
                            }, alert), {
                              deleteButton: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(DeleteAlert), {
                                    id: alert.id,
                                    type: "alert"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    vueExports.createVNode(vueExports.unref(DeleteAlert), {
                                      id: alert.id,
                                      type: "alert"
                                    }, null, 8, ["id"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$c), {
                            modelValue: currentPage.value,
                            "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                            "per-page": perPage,
                            "total-count": _ctx.alerts.length,
                            class: "mx-auto mt-8 justify-center"
                          }, null, _parent4, _scopeId3));
                          _push4(`</section>`);
                        }
                        _push4(`</div>`);
                      } else {
                        return [
                          vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                            !_ctx.alerts.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                              key: 0,
                              class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                            }, [
                              vueExports.createVNode("div", { class: "flex flex-col items-center gap-6 md:flex-row lg:gap-15" }, [
                                vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                  src: "/images/test-images/Bell.png",
                                  alt: "bell",
                                  class: "xl:scale-120",
                                  height: vueExports.unref(isMobile) ? "100px" : "170px"
                                }, null, 8, ["height"]),
                                vueExports.createVNode("div", { class: "flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]" }, [
                                  vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "У вас пока что нет уведомлений")
                                ])
                              ])
                            ])) : (vueExports.openBlock(), vueExports.createBlock("section", { key: 1 }, [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedAlerts.value, (alert) => {
                                return vueExports.openBlock(), vueExports.createBlock(VAlert, vueExports.mergeProps({
                                  key: alert.id,
                                  ref_for: true
                                }, alert), {
                                  deleteButton: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(DeleteAlert), {
                                      id: alert.id,
                                      type: "alert"
                                    }, null, 8, ["id"])
                                  ]),
                                  _: 2
                                }, 1040);
                              }), 128)),
                              vueExports.createVNode(vueExports.unref(_sfc_main$c), {
                                modelValue: currentPage.value,
                                "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                                "per-page": perPage,
                                "total-count": _ctx.alerts.length,
                                class: "mx-auto mt-8 justify-center"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                            ]))
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_sfc_main$7, { value: "0" }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                          !_ctx.notificationsCount ? (vueExports.openBlock(), vueExports.createBlock("section", {
                            key: 0,
                            class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                          }, [
                            vueExports.createVNode("div", { class: "flex flex-col items-center gap-6 md:flex-row lg:gap-15" }, [
                              vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                src: "/images/test-images/Bell.png",
                                alt: "bell",
                                class: "xl:scale-120",
                                height: vueExports.unref(isMobile) ? "100px" : "170px"
                              }, null, 8, ["height"]),
                              vueExports.createVNode("div", { class: "flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]" }, [
                                vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "У вас пока что нет уведомлений")
                              ])
                            ])
                          ])) : (vueExports.openBlock(), vueExports.createBlock("section", { key: 1 }, [
                            vueExports.createVNode("div", { class: "mb-4 flex flex-col justify-between gap-2 lg:flex-row lg:items-center" }, [
                              vueExports.createVNode("p", { class: "text-small-medium" }, "Уведомления о новых поступлениях и скидках"),
                              vueExports.createVNode("div", null, [
                                vueExports.createVNode("button", {
                                  class: ["bg-input rounded-20 text-additional flex w-full cursor-pointer items-center justify-between border border-transparent px-4 py-3 transition-all duration-200 ease-in lg:w-[370px]", { "!border-text !text-text bg-transparent": isAlertPopoverOpen.value }],
                                  type: "button",
                                  onClick: toggleCategoriesSelect
                                }, [
                                  vueExports.createVNode("span", { class: "transition-colors duration-200 ease-in" }, "Выберите категории"),
                                  vueExports.createVNode(vueExports.unref(IconArrowDown), {
                                    class: ["text-default transition-all duration-200 ease-in", { "rotate-180": isAlertPopoverOpen.value }]
                                  }, null, 8, ["class"])
                                ], 2),
                                vueExports.createVNode(_sfc_main$9, {
                                  ref: "alert-categories-popover",
                                  onShow: ($event) => isAlertPopoverOpen.value = true,
                                  onHide: ($event) => isAlertPopoverOpen.value = false
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode("div", { class: "text-small-regular flex w-[340px] flex-col" }, [
                                      vueExports.createVNode(vueExports.unref(VScrollPanel), { style: { "height": "210px" } }, {
                                        default: vueExports.withCtx(() => [
                                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.categories, (category) => {
                                            return vueExports.openBlock(), vueExports.createBlock("div", {
                                              key: category.id,
                                              class: "hover:bg-input flex cursor-pointer items-center rounded-lg py-2 transition-colors duration-200 ease-in"
                                            }, [
                                              vueExports.createVNode(_sfc_main$a, {
                                                modelValue: vueExports.unref(form).category_ids,
                                                "onUpdate:modelValue": ($event) => vueExports.unref(form).category_ids = $event,
                                                "input-id": String(category.id),
                                                name: String(category.id),
                                                value: category.id,
                                                onChange: filterByCategory
                                              }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                                              vueExports.createVNode("label", {
                                                class: "cursor-pointer pl-3",
                                                for: String(category.id)
                                              }, vueExports.toDisplayString(category.name), 9, ["for"])
                                            ]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["onShow", "onHide"])
                              ])
                            ]),
                            vueExports.unref(form).category_ids.length > 0 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 0,
                              class: "flex flex-wrap items-center gap-2"
                            }, [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(form).category_ids, (categoryId) => {
                                var _a2;
                                return vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: categoryId,
                                  class: "rounded-20 bg-text flex items-center gap-2 px-4 py-3.5 text-white"
                                }, [
                                  vueExports.createVNode("span", { class: "text-mob-small-reg" }, vueExports.toDisplayString(((_a2 = props.categories.find((cat) => cat.id === categoryId)) == null ? void 0 : _a2.name) || "Неизвестная категория"), 1),
                                  vueExports.createVNode("button", {
                                    class: "cursor-pointer",
                                    onClick: ($event) => removeCategory(categoryId)
                                  }, [
                                    vueExports.createVNode(vueExports.unref(IconXCircle))
                                  ], 8, ["onClick"])
                                ]);
                              }), 128))
                            ])) : vueExports.createCommentVNode("", true),
                            _ctx.notifications.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                              !vueExports.unref(form).category_ids.length && notifyCurrentPage.value === 1 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 0,
                                class: "bg-text rounded-20 flex h-full flex-col overflow-hidden bg-top-right bg-no-repeat lg:flex",
                                style: {
                                  backgroundImage: !vueExports.unref(isMobile) ? `url(/images/test-images/notification_banner.webp)` : "",
                                  backgroundSize: "50%"
                                }
                              }, [
                                vueExports.createVNode("div", { class: "bg-text sm:mask-right-top relative z-0 h-full w-full mask-[url('/images/masks/for_combo_mobile1.svg')] mask-cover mask-bottom-right mask-no-repeat max-sm:pb-14 sm:max-w-[75%] sm:mask-[url('/images/masks/for_notification_banner.svg')]" }, [
                                  vueExports.createVNode("div", { class: "relative z-10 flex flex-col justify-between p-4 text-white md:max-h-full md:pr-20 lg:p-4 lg:py-6" }, [
                                    vueExports.createVNode("div", null, [
                                      vueExports.createVNode("h3", { class: "font-vast text-vast-mob-title-bold font-bold uppercase max-xl:max-w-[520px] xl:w-full" }, " Мясо в деталях: от фермы до тарелки "),
                                      vueExports.createVNode("p", { class: "text-mob-small-reg mt-2" }, "Узнайте все о работе с премиальной говядиной")
                                    ])
                                  ])
                                ]),
                                vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$8), {
                                  key: 0,
                                  class: "-mt-30",
                                  height: "300px",
                                  width: "100%",
                                  src: "/images/test-images/notification_banner.webp",
                                  alt: "combo"
                                })) : vueExports.createCommentVNode("", true)
                              ], 4)) : vueExports.createCommentVNode("", true),
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedNotifications.value, (notification) => {
                                return vueExports.openBlock(), vueExports.createBlock(_sfc_main$b, vueExports.mergeProps({
                                  key: notification.id,
                                  ref_for: true
                                }, notification), {
                                  deleteButton: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(DeleteAlert), {
                                      id: notification.id,
                                      type: "notify"
                                    }, null, 8, ["id"])
                                  ]),
                                  _: 2
                                }, 1040);
                              }), 128)),
                              vueExports.createVNode(vueExports.unref(_sfc_main$c), {
                                modelValue: notifyCurrentPage.value,
                                "onUpdate:modelValue": [($event) => notifyCurrentPage.value = $event, onPageUpdate],
                                "per-page": notifyPerPage,
                                "total-count": _ctx.notifications.length,
                                class: "mx-auto mt-8 justify-center"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                            ], 64)) : (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 2,
                              class: "bg-light-gray mt-16 rounded-[40px] md:mt-20"
                            }, [
                              vueExports.createVNode("div", { class: "flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48" }, [
                                vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                  src: "/images/test-images/image_exclamation.webp",
                                  alt: "восклицание",
                                  class: "-mt-20 max-w-[120px] lg:max-w-[200px]"
                                }),
                                vueExports.createVNode("p", { class: "text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]" }, " К сожалению, по заданным параметрам ничего не найдено ")
                              ])
                            ]))
                          ]))
                        ])
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_sfc_main$7, { value: "1" }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                          !_ctx.alerts.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                            key: 0,
                            class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                          }, [
                            vueExports.createVNode("div", { class: "flex flex-col items-center gap-6 md:flex-row lg:gap-15" }, [
                              vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                src: "/images/test-images/Bell.png",
                                alt: "bell",
                                class: "xl:scale-120",
                                height: vueExports.unref(isMobile) ? "100px" : "170px"
                              }, null, 8, ["height"]),
                              vueExports.createVNode("div", { class: "flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]" }, [
                                vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "У вас пока что нет уведомлений")
                              ])
                            ])
                          ])) : (vueExports.openBlock(), vueExports.createBlock("section", { key: 1 }, [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedAlerts.value, (alert) => {
                              return vueExports.openBlock(), vueExports.createBlock(VAlert, vueExports.mergeProps({
                                key: alert.id,
                                ref_for: true
                              }, alert), {
                                deleteButton: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(DeleteAlert), {
                                    id: alert.id,
                                    type: "alert"
                                  }, null, 8, ["id"])
                                ]),
                                _: 2
                              }, 1040);
                            }), 128)),
                            vueExports.createVNode(vueExports.unref(_sfc_main$c), {
                              modelValue: currentPage.value,
                              "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                              "per-page": perPage,
                              "total-count": _ctx.alerts.length,
                              class: "mx-auto mt-8 justify-center"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                          ]))
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode(_sfc_main$4, null, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_sfc_main$5, {
                    value: "0",
                    class: "md:basis-1/2"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode("Новинки и промоакции")
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_sfc_main$5, {
                    value: "1",
                    class: "md:basis-1/2"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode("Оповещения")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              vueExports.createVNode(_sfc_main$6, null, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_sfc_main$7, { value: "0" }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                        !_ctx.notificationsCount ? (vueExports.openBlock(), vueExports.createBlock("section", {
                          key: 0,
                          class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                        }, [
                          vueExports.createVNode("div", { class: "flex flex-col items-center gap-6 md:flex-row lg:gap-15" }, [
                            vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                              src: "/images/test-images/Bell.png",
                              alt: "bell",
                              class: "xl:scale-120",
                              height: vueExports.unref(isMobile) ? "100px" : "170px"
                            }, null, 8, ["height"]),
                            vueExports.createVNode("div", { class: "flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]" }, [
                              vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "У вас пока что нет уведомлений")
                            ])
                          ])
                        ])) : (vueExports.openBlock(), vueExports.createBlock("section", { key: 1 }, [
                          vueExports.createVNode("div", { class: "mb-4 flex flex-col justify-between gap-2 lg:flex-row lg:items-center" }, [
                            vueExports.createVNode("p", { class: "text-small-medium" }, "Уведомления о новых поступлениях и скидках"),
                            vueExports.createVNode("div", null, [
                              vueExports.createVNode("button", {
                                class: ["bg-input rounded-20 text-additional flex w-full cursor-pointer items-center justify-between border border-transparent px-4 py-3 transition-all duration-200 ease-in lg:w-[370px]", { "!border-text !text-text bg-transparent": isAlertPopoverOpen.value }],
                                type: "button",
                                onClick: toggleCategoriesSelect
                              }, [
                                vueExports.createVNode("span", { class: "transition-colors duration-200 ease-in" }, "Выберите категории"),
                                vueExports.createVNode(vueExports.unref(IconArrowDown), {
                                  class: ["text-default transition-all duration-200 ease-in", { "rotate-180": isAlertPopoverOpen.value }]
                                }, null, 8, ["class"])
                              ], 2),
                              vueExports.createVNode(_sfc_main$9, {
                                ref: "alert-categories-popover",
                                onShow: ($event) => isAlertPopoverOpen.value = true,
                                onHide: ($event) => isAlertPopoverOpen.value = false
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode("div", { class: "text-small-regular flex w-[340px] flex-col" }, [
                                    vueExports.createVNode(vueExports.unref(VScrollPanel), { style: { "height": "210px" } }, {
                                      default: vueExports.withCtx(() => [
                                        (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.categories, (category) => {
                                          return vueExports.openBlock(), vueExports.createBlock("div", {
                                            key: category.id,
                                            class: "hover:bg-input flex cursor-pointer items-center rounded-lg py-2 transition-colors duration-200 ease-in"
                                          }, [
                                            vueExports.createVNode(_sfc_main$a, {
                                              modelValue: vueExports.unref(form).category_ids,
                                              "onUpdate:modelValue": ($event) => vueExports.unref(form).category_ids = $event,
                                              "input-id": String(category.id),
                                              name: String(category.id),
                                              value: category.id,
                                              onChange: filterByCategory
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id", "name", "value"]),
                                            vueExports.createVNode("label", {
                                              class: "cursor-pointer pl-3",
                                              for: String(category.id)
                                            }, vueExports.toDisplayString(category.name), 9, ["for"])
                                          ]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              }, 8, ["onShow", "onHide"])
                            ])
                          ]),
                          vueExports.unref(form).category_ids.length > 0 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "flex flex-wrap items-center gap-2"
                          }, [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(vueExports.unref(form).category_ids, (categoryId) => {
                              var _a2;
                              return vueExports.openBlock(), vueExports.createBlock("div", {
                                key: categoryId,
                                class: "rounded-20 bg-text flex items-center gap-2 px-4 py-3.5 text-white"
                              }, [
                                vueExports.createVNode("span", { class: "text-mob-small-reg" }, vueExports.toDisplayString(((_a2 = props.categories.find((cat) => cat.id === categoryId)) == null ? void 0 : _a2.name) || "Неизвестная категория"), 1),
                                vueExports.createVNode("button", {
                                  class: "cursor-pointer",
                                  onClick: ($event) => removeCategory(categoryId)
                                }, [
                                  vueExports.createVNode(vueExports.unref(IconXCircle))
                                ], 8, ["onClick"])
                              ]);
                            }), 128))
                          ])) : vueExports.createCommentVNode("", true),
                          _ctx.notifications.length ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 1 }, [
                            !vueExports.unref(form).category_ids.length && notifyCurrentPage.value === 1 ? (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 0,
                              class: "bg-text rounded-20 flex h-full flex-col overflow-hidden bg-top-right bg-no-repeat lg:flex",
                              style: {
                                backgroundImage: !vueExports.unref(isMobile) ? `url(/images/test-images/notification_banner.webp)` : "",
                                backgroundSize: "50%"
                              }
                            }, [
                              vueExports.createVNode("div", { class: "bg-text sm:mask-right-top relative z-0 h-full w-full mask-[url('/images/masks/for_combo_mobile1.svg')] mask-cover mask-bottom-right mask-no-repeat max-sm:pb-14 sm:max-w-[75%] sm:mask-[url('/images/masks/for_notification_banner.svg')]" }, [
                                vueExports.createVNode("div", { class: "relative z-10 flex flex-col justify-between p-4 text-white md:max-h-full md:pr-20 lg:p-4 lg:py-6" }, [
                                  vueExports.createVNode("div", null, [
                                    vueExports.createVNode("h3", { class: "font-vast text-vast-mob-title-bold font-bold uppercase max-xl:max-w-[520px] xl:w-full" }, " Мясо в деталях: от фермы до тарелки "),
                                    vueExports.createVNode("p", { class: "text-mob-small-reg mt-2" }, "Узнайте все о работе с премиальной говядиной")
                                  ])
                                ])
                              ]),
                              vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$8), {
                                key: 0,
                                class: "-mt-30",
                                height: "300px",
                                width: "100%",
                                src: "/images/test-images/notification_banner.webp",
                                alt: "combo"
                              })) : vueExports.createCommentVNode("", true)
                            ], 4)) : vueExports.createCommentVNode("", true),
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedNotifications.value, (notification) => {
                              return vueExports.openBlock(), vueExports.createBlock(_sfc_main$b, vueExports.mergeProps({
                                key: notification.id,
                                ref_for: true
                              }, notification), {
                                deleteButton: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(DeleteAlert), {
                                    id: notification.id,
                                    type: "notify"
                                  }, null, 8, ["id"])
                                ]),
                                _: 2
                              }, 1040);
                            }), 128)),
                            vueExports.createVNode(vueExports.unref(_sfc_main$c), {
                              modelValue: notifyCurrentPage.value,
                              "onUpdate:modelValue": [($event) => notifyCurrentPage.value = $event, onPageUpdate],
                              "per-page": notifyPerPage,
                              "total-count": _ctx.notifications.length,
                              class: "mx-auto mt-8 justify-center"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                          ], 64)) : (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 2,
                            class: "bg-light-gray mt-16 rounded-[40px] md:mt-20"
                          }, [
                            vueExports.createVNode("div", { class: "flex flex-col items-center gap-8 px-4 py-8 md:gap-15 lg:flex-row lg:px-48" }, [
                              vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                                src: "/images/test-images/image_exclamation.webp",
                                alt: "восклицание",
                                class: "-mt-20 max-w-[120px] lg:max-w-[200px]"
                              }),
                              vueExports.createVNode("p", { class: "text-mob-small-medium md:text-heavy-medium max-md:text-center xl:max-w-[540px]" }, " К сожалению, по заданным параметрам ничего не найдено ")
                            ])
                          ]))
                        ]))
                      ])
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_sfc_main$7, { value: "1" }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                        !_ctx.alerts.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                          key: 0,
                          class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                        }, [
                          vueExports.createVNode("div", { class: "flex flex-col items-center gap-6 md:flex-row lg:gap-15" }, [
                            vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                              src: "/images/test-images/Bell.png",
                              alt: "bell",
                              class: "xl:scale-120",
                              height: vueExports.unref(isMobile) ? "100px" : "170px"
                            }, null, 8, ["height"]),
                            vueExports.createVNode("div", { class: "flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]" }, [
                              vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "У вас пока что нет уведомлений")
                            ])
                          ])
                        ])) : (vueExports.openBlock(), vueExports.createBlock("section", { key: 1 }, [
                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedAlerts.value, (alert) => {
                            return vueExports.openBlock(), vueExports.createBlock(VAlert, vueExports.mergeProps({
                              key: alert.id,
                              ref_for: true
                            }, alert), {
                              deleteButton: vueExports.withCtx(() => [
                                vueExports.createVNode(vueExports.unref(DeleteAlert), {
                                  id: alert.id,
                                  type: "alert"
                                }, null, 8, ["id"])
                              ]),
                              _: 2
                            }, 1040);
                          }), 128)),
                          vueExports.createVNode(vueExports.unref(_sfc_main$c), {
                            modelValue: currentPage.value,
                            "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                            "per-page": perPage,
                            "total-count": _ctx.alerts.length,
                            class: "mx-auto mt-8 justify-center"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                        ]))
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/profile/profile-notifications/ui/ProfileNotificationsPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProfileNotificationsPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4080cb52"]]);
export {
  ProfileNotificationsPage as default
};
