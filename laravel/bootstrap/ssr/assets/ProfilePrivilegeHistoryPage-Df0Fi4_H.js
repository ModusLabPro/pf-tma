import { v as vueExports, al as _sfc_main$1, s as serverRenderer_cjs_prodExports, t as _export_sfc } from "../ssr.js";
import BonusNotification from "./BonusNotification-BYGwuYQx.js";
import _sfc_main$7 from "./EmptyBonusNotification-CkZmA7Mk.js";
import { _ as _sfc_main$8 } from "./VPagination-cbnzOOCr.js";
import { _ as _sfc_main$2, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, d as _sfc_main$6 } from "./Tabs-_owbj9IT.js";
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
import "./IconArrowDownFull-CQhNp1Ot.js";
import "primevue/tab";
import "primevue/tablist";
import "primevue/tabpanel";
import "primevue/tabpanels";
import "primevue/tabs";
const perPage = 8;
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  ...{
    layout: _sfc_main$1
  },
  __name: "ProfilePrivilegeHistoryPage",
  __ssrInlineRender: true,
  props: {
    bonusHistory: {},
    processingHistory: {},
    withdrawalHistory: {},
    accrualHistory: {}
  },
  setup(__props) {
    const props = __props;
    const pageContent = vueExports.useTemplateRef("history-page");
    const onPageUpdate = async () => {
      var _a;
      (_a = pageContent.value) == null ? void 0 : _a.scrollIntoView({
        behavior: "smooth"
      });
    };
    const currentPage = vueExports.ref(1);
    const activeTab = vueExports.ref("0");
    const paginatedAllHistory = vueExports.computed(() => {
      const start = (currentPage.value - 1) * perPage;
      const end = start + perPage;
      return props.bonusHistory.slice(start, end);
    });
    const paginatedAccrualHistory = vueExports.computed(() => {
      const start = (currentPage.value - 1) * perPage;
      const end = start + perPage;
      return props.accrualHistory.slice(start, end);
    });
    const paginatedWithdrawalHistory = vueExports.computed(() => {
      const start = (currentPage.value - 1) * perPage;
      const end = start + perPage;
      return props.withdrawalHistory.slice(start, end);
    });
    const paginatedProcessingHistory = vueExports.computed(() => {
      const start = (currentPage.value - 1) * perPage;
      const end = start + perPage;
      return props.processingHistory.slice(start, end);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        ref: "history-page",
        class: "w-full max-md:p-6 lg:min-w-0 lg:flex-1"
      }, _attrs))} data-v-799c14a4><h1 class="text-default-bold" data-v-799c14a4>История начисления и использования баллов</h1>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, {
        modelValue: activeTab.value,
        "onUpdate:modelValue": ($event) => activeTab.value = $event,
        value: "0",
        class: "mt-8"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, null, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                    value: "0",
                    class: "basis-1/4"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Все`);
                      } else {
                        return [
                          vueExports.createTextVNode(" Все")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                    value: "1",
                    class: "basis-1/4"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Зачисления`);
                      } else {
                        return [
                          vueExports.createTextVNode(" Зачисления")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                    value: "2",
                    class: "basis-1/4"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Списания`);
                      } else {
                        return [
                          vueExports.createTextVNode(" Списания")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                    value: "3",
                    class: "basis-1/4"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` В обработке`);
                      } else {
                        return [
                          vueExports.createTextVNode(" В обработке")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_sfc_main$4, {
                      value: "0",
                      class: "basis-1/4"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createTextVNode(" Все")
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_sfc_main$4, {
                      value: "1",
                      class: "basis-1/4"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createTextVNode(" Зачисления")
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_sfc_main$4, {
                      value: "2",
                      class: "basis-1/4"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createTextVNode(" Списания")
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_sfc_main$4, {
                      value: "3",
                      class: "basis-1/4"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createTextVNode(" В обработке")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, null, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, { value: "0" }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col gap-6 md:gap-8" data-v-799c14a4${_scopeId3}>`);
                        if (paginatedAllHistory.value.length) {
                          _push4(`<section class="flex flex-col gap-2" data-v-799c14a4${_scopeId3}><!--[-->`);
                          serverRenderer_cjs_prodExports.ssrRenderList(paginatedAllHistory.value, (notification) => {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(BonusNotification, {
                              id: notification.id,
                              key: notification.id,
                              amount: notification.amount,
                              type: notification.type,
                              status: notification.status,
                              active_date: notification.active_date,
                              end_date: notification.end_date
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></section>`);
                        } else {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, null, null, _parent4, _scopeId3));
                        }
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$8), {
                          modelValue: currentPage.value,
                          "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                          "per-page": perPage,
                          "total-count": _ctx.bonusHistory.length,
                          class: "mx-auto mt-8 justify-center"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                            paginatedAllHistory.value.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                              key: 0,
                              class: "flex flex-col gap-2"
                            }, [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedAllHistory.value, (notification) => {
                                return vueExports.openBlock(), vueExports.createBlock(BonusNotification, {
                                  id: notification.id,
                                  key: notification.id,
                                  amount: notification.amount,
                                  type: notification.type,
                                  status: notification.status,
                                  active_date: notification.active_date,
                                  end_date: notification.end_date
                                }, null, 8, ["id", "amount", "type", "status", "active_date", "end_date"]);
                              }), 128))
                            ])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$7, { key: 1 })),
                            vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                              modelValue: currentPage.value,
                              "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                              "per-page": perPage,
                              "total-count": _ctx.bonusHistory.length,
                              class: "mx-auto mt-8 justify-center"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, { value: "1" }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col gap-6 md:gap-8" data-v-799c14a4${_scopeId3}>`);
                        if (paginatedAccrualHistory.value.length) {
                          _push4(`<section class="flex flex-col gap-2" data-v-799c14a4${_scopeId3}><!--[-->`);
                          serverRenderer_cjs_prodExports.ssrRenderList(paginatedAccrualHistory.value, (notification) => {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(BonusNotification, {
                              id: notification.id,
                              key: notification.id,
                              amount: notification.amount,
                              type: notification.type,
                              status: notification.status,
                              active_date: notification.active_date,
                              end_date: notification.end_date
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></section>`);
                        } else {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, null, null, _parent4, _scopeId3));
                        }
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$8), {
                          modelValue: currentPage.value,
                          "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                          "per-page": perPage,
                          "total-count": _ctx.accrualHistory.length,
                          class: "mx-auto mt-8 justify-center"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                            paginatedAccrualHistory.value.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                              key: 0,
                              class: "flex flex-col gap-2"
                            }, [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedAccrualHistory.value, (notification) => {
                                return vueExports.openBlock(), vueExports.createBlock(BonusNotification, {
                                  id: notification.id,
                                  key: notification.id,
                                  amount: notification.amount,
                                  type: notification.type,
                                  status: notification.status,
                                  active_date: notification.active_date,
                                  end_date: notification.end_date
                                }, null, 8, ["id", "amount", "type", "status", "active_date", "end_date"]);
                              }), 128))
                            ])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$7, { key: 1 })),
                            vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                              modelValue: currentPage.value,
                              "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                              "per-page": perPage,
                              "total-count": _ctx.accrualHistory.length,
                              class: "mx-auto mt-8 justify-center"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, { value: "2" }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col gap-6 md:gap-8" data-v-799c14a4${_scopeId3}>`);
                        if (paginatedWithdrawalHistory.value.length) {
                          _push4(`<section class="flex flex-col gap-2" data-v-799c14a4${_scopeId3}><!--[-->`);
                          serverRenderer_cjs_prodExports.ssrRenderList(paginatedWithdrawalHistory.value, (notification) => {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(BonusNotification, {
                              id: notification.id,
                              key: notification.id,
                              amount: notification.amount,
                              type: notification.type,
                              status: notification.status,
                              active_date: notification.active_date,
                              end_date: notification.end_date
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></section>`);
                        } else {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, null, null, _parent4, _scopeId3));
                        }
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$8), {
                          modelValue: currentPage.value,
                          "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                          "per-page": perPage,
                          "total-count": _ctx.withdrawalHistory.length,
                          class: "mx-auto mt-8 justify-center"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                            paginatedWithdrawalHistory.value.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                              key: 0,
                              class: "flex flex-col gap-2"
                            }, [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedWithdrawalHistory.value, (notification) => {
                                return vueExports.openBlock(), vueExports.createBlock(BonusNotification, {
                                  id: notification.id,
                                  key: notification.id,
                                  amount: notification.amount,
                                  type: notification.type,
                                  status: notification.status,
                                  active_date: notification.active_date,
                                  end_date: notification.end_date
                                }, null, 8, ["id", "amount", "type", "status", "active_date", "end_date"]);
                              }), 128))
                            ])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$7, { key: 1 })),
                            vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                              modelValue: currentPage.value,
                              "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                              "per-page": perPage,
                              "total-count": _ctx.withdrawalHistory.length,
                              class: "mx-auto mt-8 justify-center"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, { value: "3" }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col gap-6 md:gap-8" data-v-799c14a4${_scopeId3}>`);
                        if (paginatedProcessingHistory.value.length) {
                          _push4(`<section class="flex flex-col gap-2" data-v-799c14a4${_scopeId3}><!--[-->`);
                          serverRenderer_cjs_prodExports.ssrRenderList(paginatedProcessingHistory.value, (notification) => {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(BonusNotification, {
                              id: notification.id,
                              key: notification.id,
                              amount: notification.amount,
                              type: notification.type,
                              status: notification.status,
                              active_date: notification.active_date,
                              end_date: notification.end_date
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]--></section>`);
                        } else {
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$7, null, null, _parent4, _scopeId3));
                        }
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$8), {
                          modelValue: currentPage.value,
                          "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                          "per-page": perPage,
                          "total-count": _ctx.processingHistory.length,
                          class: "mx-auto mt-8 justify-center"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                            paginatedProcessingHistory.value.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                              key: 0,
                              class: "flex flex-col gap-2"
                            }, [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedProcessingHistory.value, (notification) => {
                                return vueExports.openBlock(), vueExports.createBlock(BonusNotification, {
                                  id: notification.id,
                                  key: notification.id,
                                  amount: notification.amount,
                                  type: notification.type,
                                  status: notification.status,
                                  active_date: notification.active_date,
                                  end_date: notification.end_date
                                }, null, 8, ["id", "amount", "type", "status", "active_date", "end_date"]);
                              }), 128))
                            ])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$7, { key: 1 })),
                            vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                              modelValue: currentPage.value,
                              "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                              "per-page": perPage,
                              "total-count": _ctx.processingHistory.length,
                              class: "mx-auto mt-8 justify-center"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_sfc_main$6, { value: "0" }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                          paginatedAllHistory.value.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                            key: 0,
                            class: "flex flex-col gap-2"
                          }, [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedAllHistory.value, (notification) => {
                              return vueExports.openBlock(), vueExports.createBlock(BonusNotification, {
                                id: notification.id,
                                key: notification.id,
                                amount: notification.amount,
                                type: notification.type,
                                status: notification.status,
                                active_date: notification.active_date,
                                end_date: notification.end_date
                              }, null, 8, ["id", "amount", "type", "status", "active_date", "end_date"]);
                            }), 128))
                          ])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$7, { key: 1 })),
                          vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                            modelValue: currentPage.value,
                            "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                            "per-page": perPage,
                            "total-count": _ctx.bonusHistory.length,
                            class: "mx-auto mt-8 justify-center"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                        ])
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_sfc_main$6, { value: "1" }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                          paginatedAccrualHistory.value.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                            key: 0,
                            class: "flex flex-col gap-2"
                          }, [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedAccrualHistory.value, (notification) => {
                              return vueExports.openBlock(), vueExports.createBlock(BonusNotification, {
                                id: notification.id,
                                key: notification.id,
                                amount: notification.amount,
                                type: notification.type,
                                status: notification.status,
                                active_date: notification.active_date,
                                end_date: notification.end_date
                              }, null, 8, ["id", "amount", "type", "status", "active_date", "end_date"]);
                            }), 128))
                          ])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$7, { key: 1 })),
                          vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                            modelValue: currentPage.value,
                            "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                            "per-page": perPage,
                            "total-count": _ctx.accrualHistory.length,
                            class: "mx-auto mt-8 justify-center"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                        ])
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_sfc_main$6, { value: "2" }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                          paginatedWithdrawalHistory.value.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                            key: 0,
                            class: "flex flex-col gap-2"
                          }, [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedWithdrawalHistory.value, (notification) => {
                              return vueExports.openBlock(), vueExports.createBlock(BonusNotification, {
                                id: notification.id,
                                key: notification.id,
                                amount: notification.amount,
                                type: notification.type,
                                status: notification.status,
                                active_date: notification.active_date,
                                end_date: notification.end_date
                              }, null, 8, ["id", "amount", "type", "status", "active_date", "end_date"]);
                            }), 128))
                          ])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$7, { key: 1 })),
                          vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                            modelValue: currentPage.value,
                            "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                            "per-page": perPage,
                            "total-count": _ctx.withdrawalHistory.length,
                            class: "mx-auto mt-8 justify-center"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                        ])
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_sfc_main$6, { value: "3" }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                          paginatedProcessingHistory.value.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                            key: 0,
                            class: "flex flex-col gap-2"
                          }, [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedProcessingHistory.value, (notification) => {
                              return vueExports.openBlock(), vueExports.createBlock(BonusNotification, {
                                id: notification.id,
                                key: notification.id,
                                amount: notification.amount,
                                type: notification.type,
                                status: notification.status,
                                active_date: notification.active_date,
                                end_date: notification.end_date
                              }, null, 8, ["id", "amount", "type", "status", "active_date", "end_date"]);
                            }), 128))
                          ])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$7, { key: 1 })),
                          vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                            modelValue: currentPage.value,
                            "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                            "per-page": perPage,
                            "total-count": _ctx.processingHistory.length,
                            class: "mx-auto mt-8 justify-center"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
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
              vueExports.createVNode(_sfc_main$3, null, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_sfc_main$4, {
                    value: "0",
                    class: "basis-1/4"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" Все")
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_sfc_main$4, {
                    value: "1",
                    class: "basis-1/4"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" Зачисления")
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_sfc_main$4, {
                    value: "2",
                    class: "basis-1/4"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" Списания")
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_sfc_main$4, {
                    value: "3",
                    class: "basis-1/4"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createTextVNode(" В обработке")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              vueExports.createVNode(_sfc_main$5, null, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_sfc_main$6, { value: "0" }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                        paginatedAllHistory.value.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                          key: 0,
                          class: "flex flex-col gap-2"
                        }, [
                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedAllHistory.value, (notification) => {
                            return vueExports.openBlock(), vueExports.createBlock(BonusNotification, {
                              id: notification.id,
                              key: notification.id,
                              amount: notification.amount,
                              type: notification.type,
                              status: notification.status,
                              active_date: notification.active_date,
                              end_date: notification.end_date
                            }, null, 8, ["id", "amount", "type", "status", "active_date", "end_date"]);
                          }), 128))
                        ])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$7, { key: 1 })),
                        vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                          modelValue: currentPage.value,
                          "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                          "per-page": perPage,
                          "total-count": _ctx.bonusHistory.length,
                          class: "mx-auto mt-8 justify-center"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                      ])
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_sfc_main$6, { value: "1" }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                        paginatedAccrualHistory.value.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                          key: 0,
                          class: "flex flex-col gap-2"
                        }, [
                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedAccrualHistory.value, (notification) => {
                            return vueExports.openBlock(), vueExports.createBlock(BonusNotification, {
                              id: notification.id,
                              key: notification.id,
                              amount: notification.amount,
                              type: notification.type,
                              status: notification.status,
                              active_date: notification.active_date,
                              end_date: notification.end_date
                            }, null, 8, ["id", "amount", "type", "status", "active_date", "end_date"]);
                          }), 128))
                        ])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$7, { key: 1 })),
                        vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                          modelValue: currentPage.value,
                          "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                          "per-page": perPage,
                          "total-count": _ctx.accrualHistory.length,
                          class: "mx-auto mt-8 justify-center"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                      ])
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_sfc_main$6, { value: "2" }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                        paginatedWithdrawalHistory.value.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                          key: 0,
                          class: "flex flex-col gap-2"
                        }, [
                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedWithdrawalHistory.value, (notification) => {
                            return vueExports.openBlock(), vueExports.createBlock(BonusNotification, {
                              id: notification.id,
                              key: notification.id,
                              amount: notification.amount,
                              type: notification.type,
                              status: notification.status,
                              active_date: notification.active_date,
                              end_date: notification.end_date
                            }, null, 8, ["id", "amount", "type", "status", "active_date", "end_date"]);
                          }), 128))
                        ])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$7, { key: 1 })),
                        vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                          modelValue: currentPage.value,
                          "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                          "per-page": perPage,
                          "total-count": _ctx.withdrawalHistory.length,
                          class: "mx-auto mt-8 justify-center"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                      ])
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_sfc_main$6, { value: "3" }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                        paginatedProcessingHistory.value.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                          key: 0,
                          class: "flex flex-col gap-2"
                        }, [
                          (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedProcessingHistory.value, (notification) => {
                            return vueExports.openBlock(), vueExports.createBlock(BonusNotification, {
                              id: notification.id,
                              key: notification.id,
                              amount: notification.amount,
                              type: notification.type,
                              status: notification.status,
                              active_date: notification.active_date,
                              end_date: notification.end_date
                            }, null, 8, ["id", "amount", "type", "status", "active_date", "end_date"]);
                          }), 128))
                        ])) : (vueExports.openBlock(), vueExports.createBlock(_sfc_main$7, { key: 1 })),
                        vueExports.createVNode(vueExports.unref(_sfc_main$8), {
                          modelValue: currentPage.value,
                          "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                          "per-page": perPage,
                          "total-count": _ctx.processingHistory.length,
                          class: "mx-auto mt-8 justify-center"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/profile/profile-privilege-history/ui/ProfilePrivilegeHistoryPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProfilePrivilegeHistoryPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-799c14a4"]]);
export {
  ProfilePrivilegeHistoryPage as default
};
