import { v as vueExports, s as serverRenderer_cjs_prodExports, d as _sfc_main$1 } from "../ssr.js";
import { router } from "@inertiajs/core";
const _hoisted_1 = {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    vueExports.createElementVNode("path", {
      d: "M12.7586 0.0416098C11.8101 0.209589 10.7777 0.668301 10.0356 1.23685C9.4291 1.70202 7.48689 3.66608 7.48044 3.8276C7.45463 4.24755 7.64821 4.49952 7.99019 4.49952C8.19667 4.49952 8.31927 4.39614 9.38393 3.34951C10.6293 2.12197 10.9003 1.9023 11.6359 1.55988C12.3392 1.22392 13.0038 1.07533 13.8104 1.07533C15.7526 1.07533 17.5076 2.16073 18.3594 3.88575C19.0821 5.33295 19.1014 6.92875 18.4239 8.35658C18.0819 9.08664 17.869 9.35799 16.6366 10.6114C15.6042 11.6709 15.488 11.8066 15.488 12.0004C15.4945 12.3687 15.7848 12.6013 16.1462 12.5302C16.3655 12.4914 18.5917 10.2366 18.9724 9.67457C19.3208 9.15771 19.637 8.47287 19.8112 7.85264C19.9919 7.23241 20.0564 5.86919 19.9467 5.17143C19.566 2.81326 17.8496 0.887966 15.5203 0.196668C15.0363 0.0545311 14.7847 0.0222273 14.0039 0.00284481C13.4877 -0.00361538 12.9264 0.00930595 12.7586 0.0416098Z",
      fill: "#094067"
    }, null, -1),
    vueExports.createElementVNode("path", {
      d: "M9.60306 9.59105L5.67993 13.5127V13.7905C5.67993 14.1523 5.8477 14.3203 6.20904 14.3203H6.4865L10.4032 10.3922C14.3069 6.4899 14.3263 6.47052 14.3263 6.20563C14.3263 5.85675 14.1263 5.66293 13.7714 5.66293C13.5262 5.66293 13.4552 5.72753 9.60306 9.59105Z",
      fill: "#094067"
    }, null, -1),
    vueExports.createElementVNode("path", {
      d: "M2.47938 8.71056C1.18242 10.0285 0.827534 10.5066 0.440384 11.4241C-0.146795 12.8131 -0.146795 14.7901 0.440384 16.1792C0.930775 17.3486 1.91801 18.505 2.95686 19.1253C3.5634 19.4871 4.53128 19.8359 5.22815 19.9458C5.98309 20.0621 7.20261 19.9845 7.90594 19.7778C9.20289 19.3966 9.91912 18.9121 11.4742 17.3421C12.4743 16.3278 12.5195 16.2696 12.5195 16.0241C12.5195 15.6946 12.3195 15.4814 12.0033 15.4814C11.8162 15.4814 11.6613 15.6042 10.6224 16.625C9.97719 17.2581 9.28678 17.8848 9.08675 18.0205C7.18971 19.2803 4.84745 19.2028 3.05365 17.8331C2.802 17.6393 2.44066 17.2969 2.25999 17.0772C1.84703 16.5797 1.33728 15.5331 1.20178 14.9193C1.05982 14.2733 1.06628 13.2525 1.22114 12.6064C1.4986 11.4499 1.88575 10.8749 3.36337 9.36955C4.41513 8.30353 4.51837 8.18078 4.51837 7.97403C4.51837 7.66392 4.29899 7.4701 3.96345 7.4701C3.71181 7.4701 3.66664 7.50886 2.47938 8.71056Z",
      fill: "#094067"
    }, null, -1)
  ]));
}
const IconCopy = { render };
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "ReferralModal",
  __ssrInlineRender: true,
  props: {
    "visible": { type: Boolean, ...{ default: false } },
    "visibleModifiers": {}
  },
  emits: ["update:visible"],
  setup(__props, { expose: __expose }) {
    const visible = vueExports.useModel(__props, "visible");
    const referralLink = vueExports.ref("");
    const copied = vueExports.ref(false);
    const handleVisibilityChange = (value) => {
      visible.value = value;
      if (!value) {
        copied.value = false;
      }
    };
    const openModal = () => {
      router.get(
        "/referral/get-link",
        {},
        {
          preserveScroll: true,
          preserveState: true,
          onSuccess: (page) => {
            var _a;
            referralLink.value = ((_a = page.props.flash) == null ? void 0 : _a.message) || "";
            visible.value = true;
          }
        }
      );
    };
    const copyToClipboard = async () => {
      try {
        if (referralLink.value) {
          await navigator.clipboard.writeText(referralLink.value);
          copied.value = true;
        } else {
          console.error("Ошибка сервера: ссылка отсутствует");
        }
      } catch (err) {
        console.error("Ошибка при копировании:", err);
      }
    };
    __expose({
      openModal
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, vueExports.mergeProps({
        visible: visible.value,
        draggable: false,
        modal: "",
        class: "max-md:w-82 md:w-110",
        "onUpdate:visible": handleVisibilityChange
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0"${_scopeId}>Приглашайте друзей — получайте бонусы!</h2><p class="text-subsidiary-reg md:text-mob-small-reg mt-3 text-center md:mt-2"${_scopeId}> Поделитесь персональной ссылкой и мы начислим вам <span class="font-bold"${_scopeId}>500 баллов</span>, как только приглашенный друг совершит первую покупку. <br${_scopeId}> А ваш друг получит приветственный бонус! </p><div class="mt-3 flex flex-col gap-1 md:mt-6"${_scopeId}><div class="border-text flex items-center justify-between rounded-full border border-dashed px-6 py-4"${_scopeId}><span class="text-mob-small-reg flex-1 truncate pr-4"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(referralLink.value)}</span><button class="shrink-0 cursor-pointer"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCopy), null, null, _parent2, _scopeId));
            _push2(`</button></div><p class="${serverRenderer_cjs_prodExports.ssrRenderClass([copied.value ? "opacity-100" : "opacity-0", "text-complimentary-reg text-additional text-center transition-opacity duration-200 ease-in"])}"${_scopeId}> Ссылка успешно скопирована! </p></div>`);
          } else {
            return [
              vueExports.createVNode("h2", { class: "text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0" }, "Приглашайте друзей — получайте бонусы!"),
              vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-3 text-center md:mt-2" }, [
                vueExports.createTextVNode(" Поделитесь персональной ссылкой и мы начислим вам "),
                vueExports.createVNode("span", { class: "font-bold" }, "500 баллов"),
                vueExports.createTextVNode(", как только приглашенный друг совершит первую покупку. "),
                vueExports.createVNode("br"),
                vueExports.createTextVNode(" А ваш друг получит приветственный бонус! ")
              ]),
              vueExports.createVNode("div", { class: "mt-3 flex flex-col gap-1 md:mt-6" }, [
                vueExports.createVNode("div", { class: "border-text flex items-center justify-between rounded-full border border-dashed px-6 py-4" }, [
                  vueExports.createVNode("span", { class: "text-mob-small-reg flex-1 truncate pr-4" }, vueExports.toDisplayString(referralLink.value), 1),
                  vueExports.createVNode("button", {
                    class: "shrink-0 cursor-pointer",
                    onClick: vueExports.withModifiers(copyToClipboard, ["stop"])
                  }, [
                    vueExports.createVNode(vueExports.unref(IconCopy))
                  ])
                ]),
                vueExports.createVNode("p", {
                  class: ["text-complimentary-reg text-additional text-center transition-opacity duration-200 ease-in", copied.value ? "opacity-100" : "opacity-0"]
                }, " Ссылка успешно скопирована! ", 2)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/widgets/referral-modal/ui/ReferralModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
