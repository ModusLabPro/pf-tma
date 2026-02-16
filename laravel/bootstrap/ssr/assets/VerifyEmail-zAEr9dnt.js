import { v as vueExports, c as useForm, u as useScreenSize, s as serverRenderer_cjs_prodExports, x as _sfc_main$1, l as link_default, y as IconCheckCircle, z as IconXCircle, I as IconCaretLeft, n as _sfc_main$2, p as _sfc_main$3, A as IconHome, B as IconSignOut, d as _sfc_main$4, a as VButton, C as _sfc_main$5, _ as _sfc_main$6 } from "../ssr.js";
import { I as IconChats, a as IconRepeat, b as IconQuestion } from "./IconRepeat-CvcBfLWa.js";
import { _ as _sfc_main$7 } from "./VFloatingInput-D87z21zB.js";
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
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    auth: {}
  },
  setup(__props) {
    const breadcrumbItems = [
      { label: "Главная", route: route("main-page") },
      { label: "Личный кабинет", route: route("user.profile.index") }
    ];
    const showMessage = vueExports.ref(false);
    const props = __props;
    const isLogoutModalOpen = vueExports.ref(false);
    const form = useForm({
      email: props.auth.user.new_email ?? props.auth.user.email ?? ""
    });
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
    const submit = () => {
      if (!validateEmail(form.email)) {
        form.setError("email", "Введите корректный email");
        return;
      }
      form.post(route("verification.send"), {
        onSuccess: () => {
          showMessage.value = true;
        }
      });
    };
    const { isMobile, isDesktop } = useScreenSize();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "lg:mx-auto lg:max-w-392" }, _attrs))}><div class="mx-6 mt-6 md:mx-8">`);
      if (vueExports.unref(isMobile)) {
        _push(`<div>`);
        if (vueExports.unref(isMobile)) {
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
            model: breadcrumbItems,
            class: "!shrink-0 !overflow-auto bg-white !p-0"
          }, {
            item: vueExports.withCtx(({ item }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                  class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                  href: item.route
                }, {
                  default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(item.label)}`);
                    } else {
                      return [
                        vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
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
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (vueExports.unref(isMobile) && showMessage.value) {
          _push(`<div class="bg-push-green text-mob-small-reg mt-4 flex items-center justify-between rounded-lg p-2"><div class="flex items-center gap-2">`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCheckCircle), { class: "text-ready-green h-5 w-5" }, null, _parent));
          _push(`<span>Письмо успешно отправлено</span></div><button class="cursor-pointer">`);
          _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconXCircle), { class: "h-5 w-5" }, null, _parent));
          _push(`</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-4 flex items-center justify-between"><h1 class="text-default-bold">Личный кабинет</h1>`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
          href: _ctx.route("catalog.index"),
          class: "text-subsidiary-reg bg-filling rounded-20 hover:bg-default flex items-center gap-2 px-3 py-2 transition-colors duration-300 hover:text-white"
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretLeft), { class: "h-5 w-5" }, null, _parent2, _scopeId));
              if (vueExports.unref(isMobile)) {
                _push2(`<span${_scopeId}>В каталог</span>`);
              } else {
                _push2(`<span${_scopeId}>Вернуться к каталогу </span>`);
              }
            } else {
              return [
                vueExports.createVNode(vueExports.unref(IconCaretLeft), { class: "h-5 w-5" }),
                vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 0 }, "В каталог")) : (vueExports.openBlock(), vueExports.createBlock("span", { key: 1 }, "Вернуться к каталогу "))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="flex items-center justify-between">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, { model: breadcrumbItems }, {
          item: vueExports.withCtx(({ item }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                class: "text-complimentary-reg hover:text-additional flex items-center transition-colors duration-200",
                href: item.route
              }, {
                default: vueExports.withCtx((_, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${serverRenderer_cjs_prodExports.ssrInterpolate(item.label)}`);
                  } else {
                    return [
                      vueExports.createTextVNode(vueExports.toDisplayString(item.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
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
        }, _parent));
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
          href: _ctx.route("catalog.index"),
          class: "text-subsidiary-reg bg-filling rounded-20 hover:bg-default flex items-center gap-2 px-3 py-2 transition-colors duration-300 hover:text-white"
        }, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCaretLeft), { class: "h-5 w-5" }, null, _parent2, _scopeId));
              if (vueExports.unref(isMobile)) {
                _push2(`<span${_scopeId}>В каталог</span>`);
              } else {
                _push2(`<span${_scopeId}>Вернуться к каталогу </span>`);
              }
            } else {
              return [
                vueExports.createVNode(vueExports.unref(IconCaretLeft), { class: "h-5 w-5" }),
                vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock("span", { key: 0 }, "В каталог")) : (vueExports.openBlock(), vueExports.createBlock("span", { key: 1 }, "Вернуться к каталогу "))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), { class: "max-md:!p-0" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="flex flex-col items-start md:gap-8 lg:flex-row"${_scopeId}><div class="max-lg:w-full max-md:mt-4 max-md:px-6"${_scopeId}><aside class="w-full flex-grow rounded-[30px] p-4 shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] lg:w-[352px]"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, {
              label: "П",
              shape: "circle",
              size: "large"
            }, null, _parent2, _scopeId));
            _push2(`<p class="text-mob-small-bold md:text-default-bold truncate"${_scopeId}>Пользователь</p></div></div>`);
            if (vueExports.unref(isDesktop)) {
              _push2(`<!--[--><nav class="border-b-filling mt-6 flex flex-col gap-3 border-b pb-6"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                href: "#",
                class: "bg-input hover:bg-filling flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconHome), { class: "text-default" }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-mob-small-bold"${_scopeId2}>Личный кабинет</span>`);
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(IconHome), { class: "text-default" }),
                      vueExports.createVNode("span", { class: "text-mob-small-bold" }, "Личный кабинет")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</nav><button class="hover:bg-filling mt-6 flex w-full cursor-pointer items-center gap-2 rounded-2xl p-3 transition-colors duration-200"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconSignOut), null, null, _parent2, _scopeId));
              _push2(`<span class="text-mob-small-reg"${_scopeId}>Выход из аккаунта</span></button>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                visible: isLogoutModalOpen.value,
                "onUpdate:visible": ($event) => isLogoutModalOpen.value = $event,
                draggable: false,
                modal: "",
                class: "md:w-110"
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h2 class="text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0"${_scopeId2}>Хотите выйти?</h2><p class="text-subsidiary-reg md:text-mob-small-reg mt-3 text-center md:mt-2"${_scopeId2}> С авторизацией вы сможете пользоваться скидками по карте лояльности </p><div class="mt-3 flex flex-col gap-2 md:mt-6 md:flex-row"${_scopeId2}>`);
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                      label: "Отмена",
                      variant: "outline",
                      class: "w-full",
                      onClick: ($event) => isLogoutModalOpen.value = false
                    }, null, _parent3, _scopeId2));
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                      label: "Выйти",
                      class: "w-full",
                      onClick: ($event) => vueExports.unref(router).post(_ctx.route("logout"))
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      vueExports.createVNode("h2", { class: "text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0" }, "Хотите выйти?"),
                      vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-3 text-center md:mt-2" }, " С авторизацией вы сможете пользоваться скидками по карте лояльности "),
                      vueExports.createVNode("div", { class: "mt-3 flex flex-col gap-2 md:mt-6 md:flex-row" }, [
                        vueExports.createVNode(vueExports.unref(VButton), {
                          label: "Отмена",
                          variant: "outline",
                          class: "w-full",
                          onClick: ($event) => isLogoutModalOpen.value = false
                        }, null, 8, ["onClick"]),
                        vueExports.createVNode(vueExports.unref(VButton), {
                          label: "Выйти",
                          class: "w-full",
                          onClick: ($event) => vueExports.unref(router).post(_ctx.route("logout"))
                        }, null, 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), null, {
                button: vueExports.withCtx(({ openModal }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<button class="text-mob-small-reg bg-filling mt-6 w-full cursor-pointer rounded-full py-4 transition-colors duration-200 ease-in hover:bg-gray-300"${_scopeId2}> Обратная связь </button>`);
                  } else {
                    return [
                      vueExports.createVNode("button", {
                        class: "text-mob-small-reg bg-filling mt-6 w-full cursor-pointer rounded-full py-4 transition-colors duration-200 ease-in hover:bg-gray-300",
                        onClick: vueExports.withModifiers(openModal, ["stop"])
                      }, " Обратная связь ", 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</aside></div>`);
            if (!vueExports.unref(isDesktop)) {
              _push2(`<div class="w-full"${_scopeId}><nav class="border-b-filling mt-4 flex gap-3 overflow-x-auto whitespace-nowrap max-md:ml-6"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                href: _ctx.route("user.profile.index"),
                class: "bg-input hover:bg-filling flex shrink-0 items-center gap-2 rounded-lg p-3 transition-colors duration-300"
              }, {
                default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconHome), { class: "text-default" }, null, _parent3, _scopeId2));
                    _push3(`<span class="text-mob-small-bold"${_scopeId2}>Личный кабинет</span>`);
                  } else {
                    return [
                      vueExports.createVNode(vueExports.unref(IconHome), { class: "text-default" }),
                      vueExports.createVNode("span", { class: "text-mob-small-bold" }, "Личный кабинет")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</nav></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex flex-grow flex-col gap-8 px-6 sm:px-8"${_scopeId}>`);
            if (vueExports.unref(isDesktop) && showMessage.value) {
              _push2(`<div class="bg-push-green text-mob-small-reg flex items-center justify-between rounded-lg p-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCheckCircle), { class: "text-ready-green h-5 w-5" }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>Письмо успешно отправлено</span></div><button class="cursor-pointer"${_scopeId}>`);
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconXCircle), { class: "h-5 w-5" }, null, _parent2, _scopeId));
              _push2(`</button></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="bg-light-gray flex flex-col items-center justify-between gap-6 rounded-[40px] p-4 max-lg:mt-14 lg:flex-row lg:items-start lg:gap-15"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$6), {
              src: "/images/test-images/verify.webp",
              height: "100%",
              width: vueExports.unref(isDesktop) ? "270px" : "100px",
              alt: "verify",
              class: "-mt-8 lg:ml-21"
            }, null, _parent2, _scopeId));
            _push2(`<div${_scopeId}><h1 class="text-default-medium lg:text-heavy-medium max-lg:text-center"${_scopeId}> На вашу электронную почту отправлена ссылка для подтверждения аккаунта </h1><p class="text-subsidiary-reg lg:text-mob-small-reg mt-2 max-lg:text-center"${_scopeId}> Пожалуйста, перейдите по ссылке в письме, чтобы активировать аккаунт и получить доступ ко всем функциям нашего сервиса. </p><form class="mt-8 flex flex-col items-center gap-2 md:flex-row"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$7), {
              modelValue: vueExports.unref(form).email,
              "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
              name: "email",
              error: (_a = vueExports.unref(form).errors) == null ? void 0 : _a.email,
              type: "email",
              class: "w-full",
              label: "Ваш e-mail",
              clearable: ""
            }, null, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
              label: "Отправить письмо повторно",
              class: "w-full text-nowrap md:w-fit",
              type: "submit"
            }, null, _parent2, _scopeId));
            _push2(`</form></div></div><div class="rounded-20 mt-8 p-3 shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] md:p-4"${_scopeId}><h3 class="text-default-bold"${_scopeId}>Техническая поддержка</h3><nav class="mt-4 flex flex-col justify-between gap-2 md:flex-row"${_scopeId}><a href="mailto:inet_shop@primefood.ru" class="bg-input hover:bg-filling flex w-full items-center gap-2 rounded-lg p-3 transition-colors duration-200 max-md:px-2"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconChats), null, null, _parent2, _scopeId));
            _push2(`<span class="text-mob-small-reg"${_scopeId}>Написать в поддержку</span></a>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
              href: "/page/return-exchange",
              class: "bg-input hover:bg-filling flex w-full items-center gap-2 rounded-lg p-3 transition-colors duration-200 max-md:px-2"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconRepeat), null, null, _parent3, _scopeId2));
                  _push3(`<span class="text-mob-small-reg"${_scopeId2}>Условия возврата и обмена товаров</span>`);
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(IconRepeat)),
                    vueExports.createVNode("span", { class: "text-mob-small-reg" }, "Условия возврата и обмена товаров")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
              href: _ctx.route("faq.faq.index"),
              class: "bg-input hover:bg-filling flex w-full items-center gap-2 rounded-lg p-3 transition-colors duration-200 max-md:px-2"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconQuestion), null, null, _parent3, _scopeId2));
                  _push3(`<span class="text-mob-small-reg"${_scopeId2}>Частые вопросы</span>`);
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(IconQuestion)),
                    vueExports.createVNode("span", { class: "text-mob-small-reg" }, "Частые вопросы")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</nav></div></div></div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "flex flex-col items-start md:gap-8 lg:flex-row" }, [
                vueExports.createVNode("div", { class: "max-lg:w-full max-md:mt-4 max-md:px-6" }, [
                  vueExports.createVNode("aside", { class: "w-full flex-grow rounded-[30px] p-4 shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] lg:w-[352px]" }, [
                    vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                      vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                        vueExports.createVNode(_sfc_main$3, {
                          label: "П",
                          shape: "circle",
                          size: "large"
                        }),
                        vueExports.createVNode("p", { class: "text-mob-small-bold md:text-default-bold truncate" }, "Пользователь")
                      ])
                    ]),
                    vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 0 }, [
                      vueExports.createVNode("nav", { class: "border-b-filling mt-6 flex flex-col gap-3 border-b pb-6" }, [
                        vueExports.createVNode(vueExports.unref(link_default), {
                          href: "#",
                          class: "bg-input hover:bg-filling flex items-center gap-2 rounded-lg p-3 transition-colors duration-300"
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode(vueExports.unref(IconHome), { class: "text-default" }),
                            vueExports.createVNode("span", { class: "text-mob-small-bold" }, "Личный кабинет")
                          ]),
                          _: 1
                        })
                      ]),
                      vueExports.createVNode("button", {
                        class: "hover:bg-filling mt-6 flex w-full cursor-pointer items-center gap-2 rounded-2xl p-3 transition-colors duration-200",
                        onClick: ($event) => isLogoutModalOpen.value = true
                      }, [
                        vueExports.createVNode(vueExports.unref(IconSignOut)),
                        vueExports.createVNode("span", { class: "text-mob-small-reg" }, "Выход из аккаунта")
                      ], 8, ["onClick"]),
                      vueExports.createVNode(_sfc_main$4, {
                        visible: isLogoutModalOpen.value,
                        "onUpdate:visible": ($event) => isLogoutModalOpen.value = $event,
                        draggable: false,
                        modal: "",
                        class: "md:w-110"
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode("h2", { class: "text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0" }, "Хотите выйти?"),
                          vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-3 text-center md:mt-2" }, " С авторизацией вы сможете пользоваться скидками по карте лояльности "),
                          vueExports.createVNode("div", { class: "mt-3 flex flex-col gap-2 md:mt-6 md:flex-row" }, [
                            vueExports.createVNode(vueExports.unref(VButton), {
                              label: "Отмена",
                              variant: "outline",
                              class: "w-full",
                              onClick: ($event) => isLogoutModalOpen.value = false
                            }, null, 8, ["onClick"]),
                            vueExports.createVNode(vueExports.unref(VButton), {
                              label: "Выйти",
                              class: "w-full",
                              onClick: ($event) => vueExports.unref(router).post(_ctx.route("logout"))
                            }, null, 8, ["onClick"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["visible", "onUpdate:visible"]),
                      vueExports.createVNode(vueExports.unref(_sfc_main$5), null, {
                        button: vueExports.withCtx(({ openModal }) => [
                          vueExports.createVNode("button", {
                            class: "text-mob-small-reg bg-filling mt-6 w-full cursor-pointer rounded-full py-4 transition-colors duration-200 ease-in hover:bg-gray-300",
                            onClick: vueExports.withModifiers(openModal, ["stop"])
                          }, " Обратная связь ", 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ], 64)) : vueExports.createCommentVNode("", true)
                  ])
                ]),
                !vueExports.unref(isDesktop) ? (vueExports.openBlock(), vueExports.createBlock("div", {
                  key: 0,
                  class: "w-full"
                }, [
                  vueExports.createVNode("nav", { class: "border-b-filling mt-4 flex gap-3 overflow-x-auto whitespace-nowrap max-md:ml-6" }, [
                    vueExports.createVNode(vueExports.unref(link_default), {
                      href: _ctx.route("user.profile.index"),
                      class: "bg-input hover:bg-filling flex shrink-0 items-center gap-2 rounded-lg p-3 transition-colors duration-300"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(vueExports.unref(IconHome), { class: "text-default" }),
                        vueExports.createVNode("span", { class: "text-mob-small-bold" }, "Личный кабинет")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])) : vueExports.createCommentVNode("", true),
                vueExports.createVNode("div", { class: "flex flex-grow flex-col gap-8 px-6 sm:px-8" }, [
                  vueExports.unref(isDesktop) && showMessage.value ? (vueExports.openBlock(), vueExports.createBlock("div", {
                    key: 0,
                    class: "bg-push-green text-mob-small-reg flex items-center justify-between rounded-lg p-2"
                  }, [
                    vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                      vueExports.createVNode(vueExports.unref(IconCheckCircle), { class: "text-ready-green h-5 w-5" }),
                      vueExports.createVNode("span", null, "Письмо успешно отправлено")
                    ]),
                    vueExports.createVNode("button", {
                      class: "cursor-pointer",
                      onClick: ($event) => showMessage.value = false
                    }, [
                      vueExports.createVNode(vueExports.unref(IconXCircle), { class: "h-5 w-5" })
                    ], 8, ["onClick"])
                  ])) : vueExports.createCommentVNode("", true),
                  vueExports.createVNode("div", { class: "bg-light-gray flex flex-col items-center justify-between gap-6 rounded-[40px] p-4 max-lg:mt-14 lg:flex-row lg:items-start lg:gap-15" }, [
                    vueExports.createVNode(vueExports.unref(_sfc_main$6), {
                      src: "/images/test-images/verify.webp",
                      height: "100%",
                      width: vueExports.unref(isDesktop) ? "270px" : "100px",
                      alt: "verify",
                      class: "-mt-8 lg:ml-21"
                    }, null, 8, ["width"]),
                    vueExports.createVNode("div", null, [
                      vueExports.createVNode("h1", { class: "text-default-medium lg:text-heavy-medium max-lg:text-center" }, " На вашу электронную почту отправлена ссылка для подтверждения аккаунта "),
                      vueExports.createVNode("p", { class: "text-subsidiary-reg lg:text-mob-small-reg mt-2 max-lg:text-center" }, " Пожалуйста, перейдите по ссылке в письме, чтобы активировать аккаунт и получить доступ ко всем функциям нашего сервиса. "),
                      vueExports.createVNode("form", {
                        class: "mt-8 flex flex-col items-center gap-2 md:flex-row",
                        onSubmit: vueExports.withModifiers(submit, ["prevent"])
                      }, [
                        vueExports.createVNode(vueExports.unref(_sfc_main$7), {
                          modelValue: vueExports.unref(form).email,
                          "onUpdate:modelValue": ($event) => vueExports.unref(form).email = $event,
                          name: "email",
                          error: (_b = vueExports.unref(form).errors) == null ? void 0 : _b.email,
                          type: "email",
                          class: "w-full",
                          label: "Ваш e-mail",
                          clearable: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "error"]),
                        vueExports.createVNode(vueExports.unref(VButton), {
                          label: "Отправить письмо повторно",
                          class: "w-full text-nowrap md:w-fit",
                          type: "submit"
                        })
                      ], 32)
                    ])
                  ]),
                  vueExports.createVNode("div", { class: "rounded-20 mt-8 p-3 shadow-[0_4px_30px_0_rgba(0,0,0,0.1)] md:p-4" }, [
                    vueExports.createVNode("h3", { class: "text-default-bold" }, "Техническая поддержка"),
                    vueExports.createVNode("nav", { class: "mt-4 flex flex-col justify-between gap-2 md:flex-row" }, [
                      vueExports.createVNode("a", {
                        href: "mailto:inet_shop@primefood.ru",
                        class: "bg-input hover:bg-filling flex w-full items-center gap-2 rounded-lg p-3 transition-colors duration-200 max-md:px-2"
                      }, [
                        vueExports.createVNode(vueExports.unref(IconChats)),
                        vueExports.createVNode("span", { class: "text-mob-small-reg" }, "Написать в поддержку")
                      ]),
                      vueExports.createVNode(vueExports.unref(link_default), {
                        href: "/page/return-exchange",
                        class: "bg-input hover:bg-filling flex w-full items-center gap-2 rounded-lg p-3 transition-colors duration-200 max-md:px-2"
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(IconRepeat)),
                          vueExports.createVNode("span", { class: "text-mob-small-reg" }, "Условия возврата и обмена товаров")
                        ]),
                        _: 1
                      }),
                      vueExports.createVNode(vueExports.unref(link_default), {
                        href: _ctx.route("faq.faq.index"),
                        class: "bg-input hover:bg-filling flex w-full items-center gap-2 rounded-lg p-3 transition-colors duration-200 max-md:px-2"
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(IconQuestion)),
                          vueExports.createVNode("span", { class: "text-mob-small-reg" }, "Частые вопросы")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/back/Auth/VerifyEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
