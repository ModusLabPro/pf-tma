import { v as vueExports, u as useScreenSize, c as useForm, s as serverRenderer_cjs_prodExports, h as head_default, V as VContainer, x as _sfc_main$1, l as link_default, E as IconPlus, R as IconPhone, C as _sfc_main$2, e as _sfc_main$3, f as _sfc_main$4, g as _sfc_main$5, a as VButton, j as _sfc_main$6, _ as _sfc_main$7 } from "../ssr.js";
import { Form } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";
import { I as IconChefHat } from "./IconChefHat-CbLzs3Yv.js";
import { I as IconClockOutline } from "./IconClockOutline-BglWD8g2.js";
import { I as IconGlobeOutline } from "./IconGlobeOutline-C0euSem-.js";
import { I as IconCart } from "./IconShoppingCart-1v7bHyH6.js";
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
const faqSchema = z.object({
  name: z.string({ required_error: "Обязательное поле" }).min(1, "Обязательное поле"),
  phone: z.string({
    required_error: "Обязательное поле"
  }).regex(/^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, "Введите корректный номер"),
  agreement: z.boolean().refine((val) => val, {
    message: "Обязательное поле",
    path: ["agreement"]
  }),
  type: z.string()
});
const faqResolver = zodResolver(faqSchema);
const _hoisted_1$7 = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render$7(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1$7, _cache[0] || (_cache[0] = [
    vueExports.createStaticVNode('<g clip-path="url(#clip0_5027_221412)"><path d="M7 3C7 4.5913 7.63214 6.11742 8.75736 7.24264C9.88258 8.36786 11.4087 9 13 9H19C20.5913 9 22.1174 8.36786 23.2426 7.24264C24.3679 6.11742 25 4.5913 25 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 20H10C7.79086 20 6 21.7909 6 24C6 26.2091 7.79086 28 10 28H22C24.2091 28 26 26.2091 26 24C26 21.7909 24.2091 20 22 20Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 24H12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 24H22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.5 17C13.3284 17 14 16.3284 14 15.5C14 14.6716 13.3284 14 12.5 14C11.6716 14 11 14.6716 11 15.5C11 16.3284 11.6716 17 12.5 17Z" fill="currentColor"></path><path d="M19.5 17C20.3284 17 21 16.3284 21 15.5C21 14.6716 20.3284 14 19.5 14C18.6716 14 18 14.6716 18 15.5C18 16.3284 18.6716 17 19.5 17Z" fill="currentColor"></path><path d="M20 9H24.0975C25.4836 8.99961 26.8271 9.47915 27.8997 10.3571C28.9723 11.2351 29.7078 12.4574 29.9813 13.8162C30.0082 13.9605 30.0031 14.1089 29.9663 14.251C29.9294 14.393 29.8618 14.5252 29.7682 14.6382C29.6745 14.7512 29.5571 14.8421 29.4244 14.9047C29.2916 14.9672 29.1467 14.9997 29 15H24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.0002 9H7.90273C6.51662 8.99961 5.17313 9.47915 4.10055 10.3571C3.02796 11.2351 2.29245 12.4574 2.01898 13.8162C1.99202 13.9605 1.99713 14.1089 2.03395 14.251C2.07078 14.393 2.13842 14.5252 2.23207 14.6382C2.32572 14.7512 2.44308 14.8421 2.57584 14.9047C2.7086 14.9672 2.85349 14.9997 3.00023 15H8.00023" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 20.535V13C8 11.9391 8.42143 10.9217 9.17157 10.1716C9.92172 9.42143 10.9391 9 12 9H20C21.0609 9 22.0783 9.42143 22.8284 10.1716C23.5786 10.9217 24 11.9391 24 13V20.535" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_5027_221412"><rect width="32" height="32" fill="white"></rect></clipPath></defs>', 2)
  ]));
}
const IconCow = { render: render$7 };
const _hoisted_1$6 = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render$6(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1$6, _cache[0] || (_cache[0] = [
    vueExports.createStaticVNode('<g clip-path="url(#clip0_5027_221448)"><path d="M10 5V11" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 16V28" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26 21H19C19 21 19 8 26 5V28" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6 5L5 11C5 12.3261 5.52678 13.5979 6.46447 14.5355C7.40215 15.4732 8.67392 16 10 16C11.3261 16 12.5979 15.4732 13.5355 14.5355C14.4732 13.5979 15 12.3261 15 11L14 5" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_5027_221448"><rect width="32" height="32" fill="white"></rect></clipPath></defs>', 2)
  ]));
}
const IconForkKnife = { render: render$6 };
const _hoisted_1$5 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render$5(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1$5, _cache[0] || (_cache[0] = [
    vueExports.createStaticVNode('<g clip-path="url(#clip0_4539_185169)"><path d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75Z" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_4539_185169"><rect width="24" height="24" fill="white"></rect></clipPath></defs>', 2)
  ]));
}
const IconMapPinOutline = { render: render$5 };
const _hoisted_1$4 = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render$4(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1$4, _cache[0] || (_cache[0] = [
    vueExports.createStaticVNode('<g clip-path="url(#clip0_5027_221427)"><path d="M10.5334 21.4659L3.64718 18.9284C3.4573 18.8583 3.29347 18.7317 3.17775 18.5657C3.06204 18.3996 3 18.2021 3 17.9997C3 17.7973 3.06204 17.5997 3.17775 17.4337C3.29347 17.2676 3.4573 17.141 3.64718 17.0709L10.5334 14.5334L13.0709 7.64718C13.141 7.4573 13.2676 7.29347 13.4337 7.17775C13.5997 7.06204 13.7973 7 13.9997 7C14.2021 7 14.3996 7.06204 14.5657 7.17775C14.7317 7.29347 14.8583 7.4573 14.9284 7.64718L17.4659 14.5334L24.3522 17.0709C24.5421 17.141 24.7059 17.2676 24.8216 17.4337C24.9373 17.5997 24.9994 17.7973 24.9994 17.9997C24.9994 18.2021 24.9373 18.3996 24.8216 18.5657C24.7059 18.7317 24.5421 18.8583 24.3522 18.9284L17.4659 21.4659L14.9284 28.3522C14.8583 28.5421 14.7317 28.7059 14.5657 28.8216C14.3996 28.9373 14.2021 28.9994 13.9997 28.9994C13.7973 28.9994 13.5997 28.9373 13.4337 28.8216C13.2676 28.7059 13.141 28.5421 13.0709 28.3522L10.5334 21.4659Z" stroke="#02283F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 2V8" stroke="#02283F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M28 9V13" stroke="#02283F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 5H25" stroke="#02283F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M26 11H30" stroke="#02283F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_5027_221427"><rect width="32" height="32" fill="white"></rect></clipPath></defs>', 2)
  ]));
}
const IconSparkle = { render: render$4 };
const _hoisted_1$3 = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render$3(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [
    vueExports.createStaticVNode('<rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="currentcolor"></rect><g clip-path="url(#clip0_4211_122742)"><path d="M25.4575 6.45514C25.3413 6.3548 25.1999 6.28806 25.0486 6.26213C24.8973 6.23619 24.7417 6.25203 24.5987 6.30795L5.59937 13.7433C5.3301 13.848 5.10214 14.0373 4.9498 14.2828C4.79745 14.5283 4.72898 14.8166 4.75468 15.1043C4.78037 15.3921 4.89886 15.6637 5.09229 15.8783C5.28572 16.0929 5.54362 16.2389 5.82718 16.2942L10.75 17.2608V22.7498C10.749 23.0488 10.8379 23.3412 11.005 23.5891C11.1722 23.837 11.4099 24.029 11.6875 24.1401C11.9646 24.2533 12.2694 24.2805 12.5621 24.2181C12.8549 24.1557 13.1221 24.0067 13.3291 23.7905L15.7028 21.3286L19.4687 24.6248C19.7404 24.8658 20.0909 24.9992 20.4541 24.9998C20.6132 24.9997 20.7714 24.9747 20.9228 24.9258C21.1703 24.8472 21.3928 24.7053 21.5683 24.514C21.7438 24.3227 21.8662 24.0887 21.9231 23.8355L25.7284 7.28108C25.7625 7.13178 25.7552 6.97603 25.7075 6.83053C25.6598 6.68503 25.5734 6.55527 25.4575 6.45514ZM20.4559 23.4998L12.7047 16.703L23.8609 8.70702L20.4559 23.4998Z" fill="currentcolor"></path></g><defs><clipPath id="clip0_4211_122742"><rect width="24" height="24" fill="white" transform="translate(4 4)"></rect></clipPath></defs>', 3)
  ]));
}
const IconTelegramOutline = { render: render$3 };
const _hoisted_1$2 = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render$2(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    vueExports.createStaticVNode('<g clip-path="url(#clip0_5027_221397)"><path d="M26.5 27C28.433 27 30 25.433 30 23.5C30 21.567 28.433 20 26.5 20C24.567 20 23 21.567 23 23.5C23 25.433 24.567 27 26.5 27Z" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 27C11.5376 27 14 24.5376 14 21.5C14 18.4624 11.5376 16 8.5 16C5.46243 16 3 18.4624 3 21.5C3 24.5376 5.46243 27 8.5 27Z" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.5 23C9.32843 23 10 22.3284 10 21.5C10 20.6716 9.32843 20 8.5 20C7.67157 20 7 20.6716 7 21.5C7 22.3284 7.67157 23 8.5 23Z" fill="#02283F"></path><path d="M29 21V16.75C28.9999 16.535 28.9306 16.3258 28.8023 16.1533C28.6739 15.9808 28.4934 15.8543 28.2875 15.7925L18 13V6H7V12" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 6H7" stroke="#02283F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 6H20" stroke="#02283F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 12H8.5C11.0196 12 13.4359 13.0009 15.2175 14.7825C16.9991 16.5641 18 18.9804 18 21.5V23H23.035" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18 13V23" stroke="#02283F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23 14.3538V9" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_5027_221397"><rect width="32" height="32" fill="white"></rect></clipPath></defs>', 2)
  ]));
}
const IconTractor = { render: render$2 };
const _hoisted_1$1 = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render$1(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    vueExports.createStaticVNode('<g clip-path="url(#clip0_5027_221438)"><path d="M16 29V11" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 19L10 16" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 16L22 13" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 22.245C17.4734 23.4275 19.3191 24.0477 21.2075 23.995C25.4488 23.8875 29.0113 20.2175 29 15.975C28.9955 14.3824 28.5157 12.8273 27.622 11.509C26.7284 10.1906 25.4615 9.16906 23.9838 8.57504C23.3857 6.93832 22.2991 5.52495 20.8711 4.52635C19.443 3.52775 17.7426 2.99219 16 2.99219C14.2575 2.99219 12.557 3.52775 11.129 4.52635C9.70093 5.52495 8.61431 6.93832 8.01628 8.57504C6.53773 9.16938 5.27036 10.1917 4.37664 11.511C3.48292 12.8304 3.00356 14.3865 3.00003 15.98C2.98878 20.2225 6.55253 23.8925 10.7938 24C12.6824 24.0511 14.5277 23.4291 16 22.245Z" stroke="#02283F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_5027_221438"><rect width="32" height="32" fill="white"></rect></clipPath></defs>', 2)
  ]));
}
const IconTree = { render: render$1 };
const _hoisted_1 = {
  width: "32",
  height: "32",
  viewBox: "0 0 32 32",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    vueExports.createElementVNode("rect", {
      x: "0.5",
      y: "0.5",
      width: "31",
      height: "31",
      rx: "7.5",
      stroke: "currentcolor"
    }, null, -1),
    vueExports.createElementVNode("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M15.7425 22.9413H17.177C17.177 22.9413 17.6102 22.8925 17.8317 22.6488C18.0353 22.4248 18.0288 22.0045 18.0288 22.0045C18.0288 22.0045 18.0008 20.0363 18.894 19.7465C19.7748 19.4608 20.9057 21.6486 22.1042 22.4899C23.0106 23.1264 23.6994 22.9871 23.6994 22.9871L26.9045 22.9413C26.9045 22.9413 28.5811 22.8355 27.7861 21.4876C27.721 21.3775 27.3229 20.4906 25.4029 18.6683C23.393 16.761 23.6625 17.0696 26.0833 13.7704C27.5576 11.7612 28.1469 10.5346 27.9628 10.0093C27.7873 9.50879 26.7029 9.641 26.7029 9.641L23.0942 9.66382C23.0942 9.66382 22.8265 9.62657 22.6282 9.7479C22.4342 9.86654 22.3098 10.1438 22.3098 10.1438C22.3098 10.1438 21.7384 11.6984 20.9769 13.0208C19.37 15.8108 18.7274 15.9585 18.4647 15.7849C17.8536 15.3811 18.0063 14.163 18.0063 13.2974C18.0063 10.5935 18.4074 9.46619 17.2253 9.17437C16.8331 9.07759 16.5441 9.01355 15.5409 9.0031C14.2532 8.9897 13.1635 9.00716 12.5464 9.31626C12.1359 9.52184 11.8191 9.97983 12.0122 10.0062C12.2507 10.0387 12.7908 10.1553 13.0771 10.5536C13.447 11.0682 13.4341 12.2234 13.4341 12.2234C13.4341 12.2234 13.6466 15.4063 12.9378 15.8015C12.4514 16.0727 11.7841 15.5191 10.3515 12.9879C9.6176 11.6913 9.06328 10.258 9.06328 10.258C9.06328 10.258 8.95654 9.9902 8.76589 9.84684C8.53466 9.67315 8.21157 9.6181 8.21157 9.6181L4.78225 9.641C4.78225 9.641 4.26757 9.65569 4.07843 9.8846C3.91017 10.0884 4.065 10.5093 4.065 10.5093C4.065 10.5093 6.7496 16.9317 9.78966 20.1683C12.5775 23.1361 15.7425 22.9413 15.7425 22.9413Z",
      fill: "currentcolor"
    }, null, -1)
  ]));
}
const IconVkOutline = { render };
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "FaqPage",
  __ssrInlineRender: true,
  props: {
    faqs: {},
    seoData: {}
  },
  setup(__props) {
    const breadcrumbItems = vueExports.computed(() => [
      { label: "Главная", route: route("main-page") },
      { label: "Часто задаваемые вопросы", route: "/faq" }
    ]);
    const { isMobile } = useScreenSize();
    const openIndex = vueExports.ref(1);
    const toggle = (index) => {
      openIndex.value = openIndex.value === index ? null : index;
    };
    const form = useForm({
      name: "",
      phone: "",
      agreement: false,
      type: "call_form"
    });
    const onSubmit = ({ valid }) => {
      if (valid) {
        form.post("/contactform/call-contact", {
          preserveScroll: true,
          preserveState: true,
          onSuccess: () => {
            form.reset();
          }
        });
      }
    };
    const scrollTo = (id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const headerOffset = 120;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (_ctx.seoData) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(head_default), null, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<title${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.seoData.seo_title)}</title>`);
              if (_ctx.seoData.seo_description) {
                _push2(`<meta name="description"${serverRenderer_cjs_prodExports.ssrRenderAttr("content", _ctx.seoData.seo_description)}${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.seoData.seo_keywords) {
                _push2(`<meta name="keywords"${serverRenderer_cjs_prodExports.ssrRenderAttr("content", _ctx.seoData.seo_keywords)}${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                vueExports.createVNode("title", null, vueExports.toDisplayString(_ctx.seoData.seo_title), 1),
                _ctx.seoData.seo_description ? (vueExports.openBlock(), vueExports.createBlock("meta", {
                  key: 0,
                  name: "description",
                  content: _ctx.seoData.seo_description
                }, null, 8, ["content"])) : vueExports.createCommentVNode("", true),
                _ctx.seoData.seo_keywords ? (vueExports.openBlock(), vueExports.createBlock("meta", {
                  key: 1,
                  name: "keywords",
                  content: _ctx.seoData.seo_keywords
                }, null, 8, ["content"])) : vueExports.createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), { class: "px-6 md:px-8" }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}>`);
            if (vueExports.unref(isMobile)) {
              _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$1, {
                model: breadcrumbItems.value,
                class: "my-2 !shrink-0 !overflow-auto bg-white"
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
            _push2(`<div class="rounded-20 mb-4 h-50 bg-[url(/images/bg-faq.webp)] mask-[url(../../images/masks/for_catalog_mobile.svg)] bg-cover bg-center bg-no-repeat mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 pt-4 pb-4 min-[425px]:mask-[url(../../images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-67 lg:px-8 lg:pt-8"${_scopeId}><div class="flex h-full flex-col gap-8 pb-8 max-md:justify-end lg:h-64"${_scopeId}>`);
            if (!vueExports.unref(isMobile)) {
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
            _push2(`<h1 class="font-vast lg:text-vast-title-bold text-vast-mob-title-bold max-w-180 font-bold text-white"${_scopeId}>Часто задаваемые вопросы</h1></div></div></div><div class="mt-4 flex flex-col gap-8 md:mt-17 md:flex-row"${_scopeId}><div class="flex flex-1 flex-col gap-6"${_scopeId}><!--[-->`);
            serverRenderer_cjs_prodExports.ssrRenderList(_ctx.faqs, (faqSection) => {
              _push2(`<div${serverRenderer_cjs_prodExports.ssrRenderAttr("id", faqSection.section_name)} class="border-filling rounded-20 even:bg-light-gray border p-3 md:p-6"${_scopeId}><h3 class="text-default-bold md:text-heavy-bold mb-4"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(faqSection.section_name)}</h3><!--[-->`);
              serverRenderer_cjs_prodExports.ssrRenderList(faqSection.faqs, (faq) => {
                _push2(`<div class="border-b-filling border-b last:border-0"${_scopeId}><button class="flex w-full cursor-pointer items-center justify-between"${_scopeId}><h5 class="text-mob-small-medium md:text-default-medium py-3"${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(faq.name)}</h5>`);
                _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPlus), {
                  class: ["text-additional h-4 w-4 transition-transform duration-300 ease-in", openIndex.value === faq.id ? "rotate-45" : ""]
                }, null, _parent2, _scopeId));
                _push2(`</button>`);
                if (openIndex.value === faq.id) {
                  _push2(`<div class="transition-all duration-300 ease-in-out"${_scopeId}><div class="mt-4 mb-3"${_scopeId}>${faq.description ?? ""}</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            });
            _push2(`<!--]--></div><aside class="md:min-w-[352px]"${_scopeId}><div class="bg-light-gray rounded-20 p-3 md:p-4"${_scopeId}><h5 class="text-default-bold md:text-heavy-bold"${_scopeId}>Может быть интересно</h5><div class="mt-6 flex flex-col gap-6 md:mt-8"${_scopeId}><a href="#Доставка" class="bg-text hover:bg-text/85 relative flex items-center justify-between rounded-2xl text-white transition-colors duration-200 ease-in"${_scopeId}><p class="text-small-bold px-3 py-4.5"${_scopeId}>Доставка</p><img class="absolute right-4 -bottom-0 max-h-20" src="/images/test-images/image_package.webp" alt="package"${_scopeId}></a><a href="#Оплата" class="bg-text hover:bg-text/85 relative flex items-center justify-between rounded-2xl text-white transition-colors duration-200 ease-in"${_scopeId}><p class="text-small-bold px-3 py-4.5"${_scopeId}>Оплата</p><img class="absolute right-4 -bottom-0 max-h-20" src="/images/test-images/image_phone_credit.webp" alt="package"${_scopeId}></a>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
              href: "/page/return-exchange",
              class: "bg-text hover:bg-text/85 relative flex items-center justify-between rounded-2xl text-white transition-colors duration-200 ease-in"
            }, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-small-bold px-3 py-4.5"${_scopeId2}>Условия возврата</p><img class="absolute right-4 bottom-1 max-h-18" src="/images/test-images/image_exclamation.webp" alt="package"${_scopeId2}>`);
                } else {
                  return [
                    vueExports.createVNode("p", { class: "text-small-bold px-3 py-4.5" }, "Условия возврата"),
                    vueExports.createVNode("img", {
                      class: "absolute right-4 bottom-1 max-h-18",
                      src: "/images/test-images/image_exclamation.webp",
                      alt: "package"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="rounded-20 border-filling mt-6 border p-3 md:p-4"${_scopeId}><h5 class="text-small-medium md:text-default-medium"${_scopeId}>Контактная информация</h5><div class="border-b-filling mt-4 flex flex-col gap-2 border-b pb-6 md:mt-6"${_scopeId}><p class="flex items-center gap-2"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPhone), null, null, _parent2, _scopeId));
            _push2(`<a class="text-mob-small-bold" href="tel:8 (800) 550-46-22"${_scopeId}>8 (800) 550-46-22</a></p><p class="flex items-center gap-2"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconClockOutline), null, null, _parent2, _scopeId));
            _push2(`<span class="text-subsidiary-reg sm:text-mob-small-reg"${_scopeId}>Открыто до 20:00</span></p><p class="flex items-center gap-2"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconMapPinOutline), null, null, _parent2, _scopeId));
            _push2(`<span class="text-subsidiary-reg sm:text-mob-small-reg"${_scopeId}>Москва, Рябиновая улица, 45, стр. 4</span></p><p class="flex items-center gap-2"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconGlobeOutline), null, null, _parent2, _scopeId));
            _push2(`<a class="text-subsidiary-reg sm:text-mob-small-reg" href="https://dostavka.primebeef.ru" target="_blank" rel="noopener"${_scopeId}>dostavka.primebeef.ru</a></p></div><div class="mt-6"${_scopeId}><h5 class="text-mob-small-reg text-additional"${_scopeId}>Связаться через мессенджеры</h5><div class="text-additional mt-2 flex items-center gap-3"${_scopeId}><a href="https://t.me/primefoods_ru" target="_blank" rel="noopener"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconTelegramOutline), { class: "hover:text-default transition-colors duration-300" }, null, _parent2, _scopeId));
            _push2(`</a><a href="https://vk.com/primefoods_ru" target="_blank" rel="noopener"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconVkOutline), { class: "hover:text-default transition-colors duration-300" }, null, _parent2, _scopeId));
            _push2(`</a></div></div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), null, {
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
            _push2(`</div></aside></div><div class="bg-text rounded-20 mt-10 p-4 text-white md:mt-20 md:p-6"${_scopeId}><h4 class="text-default-bold md:text-heavy-bold"${_scopeId}>Не нашли ответ? Задайте вопрос</h4><p class="text-subsidiary-reg md:text-mob-small-reg mt-2"${_scopeId}> Мы свяжемся с вами и предоставим консультацию. Наши эксперты всегда помогут определиться с выбором </p>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Form), {
              class: "mt-4 md:mt-8",
              resolver: vueExports.unref(faqResolver),
              "initial-values": vueExports.unref(form),
              "validate-on-value-update": false,
              "validate-on-blur": "",
              onSubmit
            }, {
              default: vueExports.withCtx(($form, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-2 md:flex-row md:items-start"${_scopeId2}><div class="flex flex-col items-start gap-2 md:flex-grow md:flex-row"${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                    error: ((_b = (_a = $form.name) == null ? void 0 : _a.error) == null ? void 0 : _b.message) || vueExports.unref(form).errors.name,
                    class: "w-full"
                  }, {
                    default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                          modelValue: vueExports.unref(form).name,
                          "onUpdate:modelValue": ($event) => vueExports.unref(form).name = $event,
                          name: "name",
                          placeholder: "Ваше имя",
                          type: "text",
                          class: "text-text w-full !bg-white"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(_sfc_main$4, {
                            modelValue: vueExports.unref(form).name,
                            "onUpdate:modelValue": ($event) => vueExports.unref(form).name = $event,
                            name: "name",
                            placeholder: "Ваше имя",
                            type: "text",
                            class: "text-text w-full !bg-white"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                    error: ((_d = (_c = $form.phone) == null ? void 0 : _c.error) == null ? void 0 : _d.message) || vueExports.unref(form).errors.phone,
                    class: "w-full"
                  }, {
                    default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, {
                          modelValue: vueExports.unref(form).phone,
                          "onUpdate:modelValue": ($event) => vueExports.unref(form).phone = $event,
                          mask: "+7 (999) 999-99-99",
                          name: "phone",
                          unmask: "",
                          class: "text-text !bg-white",
                          placeholder: "+7 (000) 000-00-00",
                          fluid: "",
                          autocomplete: "phone"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(_sfc_main$5, {
                            modelValue: vueExports.unref(form).phone,
                            "onUpdate:modelValue": ($event) => vueExports.unref(form).phone = $event,
                            mask: "+7 (999) 999-99-99",
                            name: "phone",
                            unmask: "",
                            class: "text-text !bg-white",
                            placeholder: "+7 (000) 000-00-00",
                            fluid: "",
                            autocomplete: "phone"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                    label: "Связаться с экспертом",
                    variant: "light"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mt-2 flex items-center gap-2"${_scopeId2}>`);
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, {
                    modelValue: vueExports.unref(form).agreement,
                    "onUpdate:modelValue": ($event) => vueExports.unref(form).agreement = $event,
                    "input-id": "check",
                    required: "",
                    binary: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<label for="check" class="text-complimentary-reg"${_scopeId2}> Нажимая на кнопку «Связаться с экспертом» я подтверждаю, что ознакомился с <a class="underline" href="/page/privacy-policy"${_scopeId2}>политикой конфиденциальности</a> и даю согласие на обработку персональных данных </label></div>`);
                } else {
                  return [
                    vueExports.createVNode("div", { class: "flex flex-col gap-2 md:flex-row md:items-start" }, [
                      vueExports.createVNode("div", { class: "flex flex-col items-start gap-2 md:flex-grow md:flex-row" }, [
                        vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                          error: ((_f = (_e = $form.name) == null ? void 0 : _e.error) == null ? void 0 : _f.message) || vueExports.unref(form).errors.name,
                          class: "w-full"
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode(_sfc_main$4, {
                              modelValue: vueExports.unref(form).name,
                              "onUpdate:modelValue": ($event) => vueExports.unref(form).name = $event,
                              name: "name",
                              placeholder: "Ваше имя",
                              type: "text",
                              class: "text-text w-full !bg-white"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1032, ["error"]),
                        vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                          error: ((_h = (_g = $form.phone) == null ? void 0 : _g.error) == null ? void 0 : _h.message) || vueExports.unref(form).errors.phone,
                          class: "w-full"
                        }, {
                          default: vueExports.withCtx(() => [
                            vueExports.createVNode(_sfc_main$5, {
                              modelValue: vueExports.unref(form).phone,
                              "onUpdate:modelValue": ($event) => vueExports.unref(form).phone = $event,
                              mask: "+7 (999) 999-99-99",
                              name: "phone",
                              unmask: "",
                              class: "text-text !bg-white",
                              placeholder: "+7 (000) 000-00-00",
                              fluid: "",
                              autocomplete: "phone"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 2
                        }, 1032, ["error"])
                      ]),
                      vueExports.createVNode(vueExports.unref(VButton), {
                        label: "Связаться с экспертом",
                        variant: "light"
                      })
                    ]),
                    vueExports.createVNode("div", { class: "mt-2 flex items-center gap-2" }, [
                      vueExports.createVNode(_sfc_main$6, {
                        modelValue: vueExports.unref(form).agreement,
                        "onUpdate:modelValue": ($event) => vueExports.unref(form).agreement = $event,
                        "input-id": "check",
                        required: "",
                        binary: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      vueExports.createVNode("label", {
                        for: "check",
                        class: "text-complimentary-reg"
                      }, [
                        vueExports.createTextVNode(" Нажимая на кнопку «Связаться с экспертом» я подтверждаю, что ознакомился с "),
                        vueExports.createVNode("a", {
                          class: "underline",
                          href: "/page/privacy-policy"
                        }, "политикой конфиденциальности"),
                        vueExports.createTextVNode(" и даю согласие на обработку персональных данных ")
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="mt-10 md:mt-20"${_scopeId}><h4 class="text-default-bold md:text-heavy-bold"${_scopeId}>Информация о гарантии качества продукции</h4><div class="mt-6 grid gap-8 md:mt-8 md:grid-cols-4"${_scopeId}><div class="flex gap-2 max-md:items-start md:flex-col md:gap-4"${_scopeId}><div class="bg-light-gray w-fit rounded-full p-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconTractor), null, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h5 class="text-mob-small-medium md:text-default-medium"${_scopeId}>Полный цикл производства</h5><p class="text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4"${_scopeId}>от разведения бычков до их откорма и разделки</p></div></div><div class="flex gap-2 max-md:items-start md:flex-col md:gap-4"${_scopeId}><div class="bg-light-gray w-fit rounded-full p-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCow), null, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h5 class="text-mob-small-medium md:text-default-medium"${_scopeId}>200 дневный откорм</h5><p class="text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4"${_scopeId}> только на основе пятикомпонентной кукурузной смеси, благодаря чему жир в мышечной ткани распределяется равномерно, а мясо обретает сочность и нежность и сладковатый вкус </p></div></div><div class="flex gap-2 max-md:items-start md:flex-col md:gap-4"${_scopeId}><div class="bg-light-gray w-fit rounded-full p-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconSparkle), null, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h5 class="text-mob-small-medium md:text-default-medium"${_scopeId}>Идеальная генетика</h5><p class="text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4"${_scopeId}> на производство идут только молодые бычки мясных пород, преимущественно абердин-ангус </p></div></div><div class="flex gap-2 max-md:items-start md:flex-col md:gap-4"${_scopeId}><div class="bg-light-gray w-fit rounded-full p-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconTree), null, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h5 class="text-mob-small-medium md:text-default-medium"${_scopeId}>Животных выращивают</h5><p class="text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4"${_scopeId}>в экологически чистых районах</p></div></div><div class="flex gap-2 max-md:items-start md:flex-col md:gap-4"${_scopeId}><div class="bg-light-gray w-fit rounded-full p-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconForkKnife), null, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h5 class="text-mob-small-medium md:text-default-medium"${_scopeId}>Широчайший выбор</h5><p class="text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4"${_scopeId}> стейки, антрекоты, филе, мякоти, вырезка, грудинка, лопатка, ребрышки и т.д. </p></div></div><div class="flex gap-2 max-md:items-start md:flex-col md:gap-4"${_scopeId}><div class="bg-light-gray w-fit rounded-full p-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconChefHat), { class: "h-8 w-8" }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h5 class="text-mob-small-medium md:text-default-medium"${_scopeId}>Высшая степень мраморности</h5><p class="text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4"${_scopeId}> Мраморность придает мясу невероятную мягкость и нежный, насыщенный вкус </p></div></div><div class="flex gap-2 max-md:items-start md:flex-col md:gap-4"${_scopeId}><div class="bg-light-gray w-fit rounded-full p-3"${_scopeId}>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCart), { class: "h-8 w-8" }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><h5 class="text-mob-small-medium md:text-default-medium"${_scopeId}>Продажа оптом и в розницу</h5><p class="text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4"${_scopeId}>Быстрая доставка</p></div></div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$7), {
              src: "/images/test-images/image_faq.png",
              alt: "изображение стейков"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
              label: "Назад в каталог",
              class: "mx-auto mt-8",
              onClick: ($event) => vueExports.unref(router).visit(_ctx.route("catalog.index"))
            }, null, _parent2, _scopeId));
          } else {
            return [
              vueExports.createVNode("div", null, [
                vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
                  key: 0,
                  model: breadcrumbItems.value,
                  class: "my-2 !shrink-0 !overflow-auto bg-white"
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
                vueExports.createVNode("div", { class: "rounded-20 mb-4 h-50 bg-[url(/images/bg-faq.webp)] mask-[url(../../images/masks/for_catalog_mobile.svg)] bg-cover bg-center bg-no-repeat mask-size-[100%_auto] mask-bottom-left mask-no-repeat px-4 pt-4 pb-4 min-[425px]:mask-[url(../../images/masks/for_catalog.svg)] min-[425px]:mask-size-[auto_100%] lg:h-67 lg:px-8 lg:pt-8" }, [
                  vueExports.createVNode("div", { class: "flex h-full flex-col gap-8 pb-8 max-md:justify-end lg:h-64" }, [
                    !vueExports.unref(isMobile) ? (vueExports.openBlock(), vueExports.createBlock(_sfc_main$1, {
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
                    vueExports.createVNode("h1", { class: "font-vast lg:text-vast-title-bold text-vast-mob-title-bold max-w-180 font-bold text-white" }, "Часто задаваемые вопросы")
                  ])
                ])
              ]),
              vueExports.createVNode("div", { class: "mt-4 flex flex-col gap-8 md:mt-17 md:flex-row" }, [
                vueExports.createVNode("div", { class: "flex flex-1 flex-col gap-6" }, [
                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(_ctx.faqs, (faqSection) => {
                    return vueExports.openBlock(), vueExports.createBlock("div", {
                      id: faqSection.section_name,
                      key: faqSection.section_id,
                      class: "border-filling rounded-20 even:bg-light-gray border p-3 md:p-6"
                    }, [
                      vueExports.createVNode("h3", { class: "text-default-bold md:text-heavy-bold mb-4" }, vueExports.toDisplayString(faqSection.section_name), 1),
                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(faqSection.faqs, (faq) => {
                        return vueExports.openBlock(), vueExports.createBlock("div", {
                          key: faq.id,
                          class: "border-b-filling border-b last:border-0"
                        }, [
                          vueExports.createVNode("button", {
                            class: "flex w-full cursor-pointer items-center justify-between",
                            onClick: ($event) => toggle(faq.id)
                          }, [
                            vueExports.createVNode("h5", { class: "text-mob-small-medium md:text-default-medium py-3" }, vueExports.toDisplayString(faq.name), 1),
                            vueExports.createVNode(vueExports.unref(IconPlus), {
                              class: ["text-additional h-4 w-4 transition-transform duration-300 ease-in", openIndex.value === faq.id ? "rotate-45" : ""]
                            }, null, 8, ["class"])
                          ], 8, ["onClick"]),
                          vueExports.createVNode(vueExports.Transition, {
                            "enter-from-class": "max-h-0",
                            "leave-to-class": "max-h-0",
                            "enter-active-class": "transition-all duration-400 ease-in-out overflow-hidden",
                            "leave-active-class": "transition-all duration-400 ease-in-out overflow-hidden",
                            "enter-to-class": "max-h-96",
                            "leave-from-class": "max-h-96"
                          }, {
                            default: vueExports.withCtx(() => [
                              openIndex.value === faq.id ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 0,
                                class: "transition-all duration-300 ease-in-out"
                              }, [
                                vueExports.createVNode("div", {
                                  class: "mt-4 mb-3",
                                  innerHTML: faq.description
                                }, null, 8, ["innerHTML"])
                              ])) : vueExports.createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ]);
                      }), 128))
                    ], 8, ["id"]);
                  }), 128))
                ]),
                vueExports.createVNode("aside", { class: "md:min-w-[352px]" }, [
                  vueExports.createVNode("div", { class: "bg-light-gray rounded-20 p-3 md:p-4" }, [
                    vueExports.createVNode("h5", { class: "text-default-bold md:text-heavy-bold" }, "Может быть интересно"),
                    vueExports.createVNode("div", { class: "mt-6 flex flex-col gap-6 md:mt-8" }, [
                      vueExports.createVNode("a", {
                        href: "#Доставка",
                        class: "bg-text hover:bg-text/85 relative flex items-center justify-between rounded-2xl text-white transition-colors duration-200 ease-in",
                        onClick: vueExports.withModifiers(($event) => scrollTo("Доставка"), ["prevent"])
                      }, [
                        vueExports.createVNode("p", { class: "text-small-bold px-3 py-4.5" }, "Доставка"),
                        vueExports.createVNode("img", {
                          class: "absolute right-4 -bottom-0 max-h-20",
                          src: "/images/test-images/image_package.webp",
                          alt: "package"
                        })
                      ], 8, ["onClick"]),
                      vueExports.createVNode("a", {
                        href: "#Оплата",
                        class: "bg-text hover:bg-text/85 relative flex items-center justify-between rounded-2xl text-white transition-colors duration-200 ease-in",
                        onClick: vueExports.withModifiers(($event) => scrollTo("Оплата"), ["prevent"])
                      }, [
                        vueExports.createVNode("p", { class: "text-small-bold px-3 py-4.5" }, "Оплата"),
                        vueExports.createVNode("img", {
                          class: "absolute right-4 -bottom-0 max-h-20",
                          src: "/images/test-images/image_phone_credit.webp",
                          alt: "package"
                        })
                      ], 8, ["onClick"]),
                      vueExports.createVNode(vueExports.unref(link_default), {
                        href: "/page/return-exchange",
                        class: "bg-text hover:bg-text/85 relative flex items-center justify-between rounded-2xl text-white transition-colors duration-200 ease-in"
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode("p", { class: "text-small-bold px-3 py-4.5" }, "Условия возврата"),
                          vueExports.createVNode("img", {
                            class: "absolute right-4 bottom-1 max-h-18",
                            src: "/images/test-images/image_exclamation.webp",
                            alt: "package"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  vueExports.createVNode("div", { class: "rounded-20 border-filling mt-6 border p-3 md:p-4" }, [
                    vueExports.createVNode("h5", { class: "text-small-medium md:text-default-medium" }, "Контактная информация"),
                    vueExports.createVNode("div", { class: "border-b-filling mt-4 flex flex-col gap-2 border-b pb-6 md:mt-6" }, [
                      vueExports.createVNode("p", { class: "flex items-center gap-2" }, [
                        vueExports.createVNode(vueExports.unref(IconPhone)),
                        vueExports.createVNode("a", {
                          class: "text-mob-small-bold",
                          href: "tel:8 (800) 550-46-22"
                        }, "8 (800) 550-46-22")
                      ]),
                      vueExports.createVNode("p", { class: "flex items-center gap-2" }, [
                        vueExports.createVNode(vueExports.unref(IconClockOutline)),
                        vueExports.createVNode("span", { class: "text-subsidiary-reg sm:text-mob-small-reg" }, "Открыто до 20:00")
                      ]),
                      vueExports.createVNode("p", { class: "flex items-center gap-2" }, [
                        vueExports.createVNode(vueExports.unref(IconMapPinOutline)),
                        vueExports.createVNode("span", { class: "text-subsidiary-reg sm:text-mob-small-reg" }, "Москва, Рябиновая улица, 45, стр. 4")
                      ]),
                      vueExports.createVNode("p", { class: "flex items-center gap-2" }, [
                        vueExports.createVNode(vueExports.unref(IconGlobeOutline)),
                        vueExports.createVNode("a", {
                          class: "text-subsidiary-reg sm:text-mob-small-reg",
                          href: "https://dostavka.primebeef.ru",
                          target: "_blank",
                          rel: "noopener"
                        }, "dostavka.primebeef.ru")
                      ])
                    ]),
                    vueExports.createVNode("div", { class: "mt-6" }, [
                      vueExports.createVNode("h5", { class: "text-mob-small-reg text-additional" }, "Связаться через мессенджеры"),
                      vueExports.createVNode("div", { class: "text-additional mt-2 flex items-center gap-3" }, [
                        vueExports.createVNode("a", {
                          href: "https://t.me/primefoods_ru",
                          target: "_blank",
                          rel: "noopener"
                        }, [
                          vueExports.createVNode(vueExports.unref(IconTelegramOutline), { class: "hover:text-default transition-colors duration-300" })
                        ]),
                        vueExports.createVNode("a", {
                          href: "https://vk.com/primefoods_ru",
                          target: "_blank",
                          rel: "noopener"
                        }, [
                          vueExports.createVNode(vueExports.unref(IconVkOutline), { class: "hover:text-default transition-colors duration-300" })
                        ])
                      ])
                    ]),
                    vueExports.createVNode(vueExports.unref(_sfc_main$2), null, {
                      button: vueExports.withCtx(({ openModal }) => [
                        vueExports.createVNode("button", {
                          class: "text-mob-small-reg bg-filling mt-6 w-full cursor-pointer rounded-full py-4 transition-colors duration-200 ease-in hover:bg-gray-300",
                          onClick: vueExports.withModifiers(openModal, ["stop"])
                        }, " Обратная связь ", 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              vueExports.createVNode("div", { class: "bg-text rounded-20 mt-10 p-4 text-white md:mt-20 md:p-6" }, [
                vueExports.createVNode("h4", { class: "text-default-bold md:text-heavy-bold" }, "Не нашли ответ? Задайте вопрос"),
                vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-2" }, " Мы свяжемся с вами и предоставим консультацию. Наши эксперты всегда помогут определиться с выбором "),
                vueExports.createVNode(vueExports.unref(Form), {
                  class: "mt-4 md:mt-8",
                  resolver: vueExports.unref(faqResolver),
                  "initial-values": vueExports.unref(form),
                  "validate-on-value-update": false,
                  "validate-on-blur": "",
                  onSubmit
                }, {
                  default: vueExports.withCtx(($form) => {
                    var _a, _b, _c, _d;
                    return [
                      vueExports.createVNode("div", { class: "flex flex-col gap-2 md:flex-row md:items-start" }, [
                        vueExports.createVNode("div", { class: "flex flex-col items-start gap-2 md:flex-grow md:flex-row" }, [
                          vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                            error: ((_b = (_a = $form.name) == null ? void 0 : _a.error) == null ? void 0 : _b.message) || vueExports.unref(form).errors.name,
                            class: "w-full"
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode(_sfc_main$4, {
                                modelValue: vueExports.unref(form).name,
                                "onUpdate:modelValue": ($event) => vueExports.unref(form).name = $event,
                                name: "name",
                                placeholder: "Ваше имя",
                                type: "text",
                                class: "text-text w-full !bg-white"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1032, ["error"]),
                          vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                            error: ((_d = (_c = $form.phone) == null ? void 0 : _c.error) == null ? void 0 : _d.message) || vueExports.unref(form).errors.phone,
                            class: "w-full"
                          }, {
                            default: vueExports.withCtx(() => [
                              vueExports.createVNode(_sfc_main$5, {
                                modelValue: vueExports.unref(form).phone,
                                "onUpdate:modelValue": ($event) => vueExports.unref(form).phone = $event,
                                mask: "+7 (999) 999-99-99",
                                name: "phone",
                                unmask: "",
                                class: "text-text !bg-white",
                                placeholder: "+7 (000) 000-00-00",
                                fluid: "",
                                autocomplete: "phone"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1032, ["error"])
                        ]),
                        vueExports.createVNode(vueExports.unref(VButton), {
                          label: "Связаться с экспертом",
                          variant: "light"
                        })
                      ]),
                      vueExports.createVNode("div", { class: "mt-2 flex items-center gap-2" }, [
                        vueExports.createVNode(_sfc_main$6, {
                          modelValue: vueExports.unref(form).agreement,
                          "onUpdate:modelValue": ($event) => vueExports.unref(form).agreement = $event,
                          "input-id": "check",
                          required: "",
                          binary: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        vueExports.createVNode("label", {
                          for: "check",
                          class: "text-complimentary-reg"
                        }, [
                          vueExports.createTextVNode(" Нажимая на кнопку «Связаться с экспертом» я подтверждаю, что ознакомился с "),
                          vueExports.createVNode("a", {
                            class: "underline",
                            href: "/page/privacy-policy"
                          }, "политикой конфиденциальности"),
                          vueExports.createTextVNode(" и даю согласие на обработку персональных данных ")
                        ])
                      ])
                    ];
                  }),
                  _: 1
                }, 8, ["resolver", "initial-values"])
              ]),
              vueExports.createVNode("div", { class: "mt-10 md:mt-20" }, [
                vueExports.createVNode("h4", { class: "text-default-bold md:text-heavy-bold" }, "Информация о гарантии качества продукции"),
                vueExports.createVNode("div", { class: "mt-6 grid gap-8 md:mt-8 md:grid-cols-4" }, [
                  vueExports.createVNode("div", { class: "flex gap-2 max-md:items-start md:flex-col md:gap-4" }, [
                    vueExports.createVNode("div", { class: "bg-light-gray w-fit rounded-full p-3" }, [
                      vueExports.createVNode(vueExports.unref(IconTractor))
                    ]),
                    vueExports.createVNode("div", null, [
                      vueExports.createVNode("h5", { class: "text-mob-small-medium md:text-default-medium" }, "Полный цикл производства"),
                      vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4" }, "от разведения бычков до их откорма и разделки")
                    ])
                  ]),
                  vueExports.createVNode("div", { class: "flex gap-2 max-md:items-start md:flex-col md:gap-4" }, [
                    vueExports.createVNode("div", { class: "bg-light-gray w-fit rounded-full p-3" }, [
                      vueExports.createVNode(vueExports.unref(IconCow))
                    ]),
                    vueExports.createVNode("div", null, [
                      vueExports.createVNode("h5", { class: "text-mob-small-medium md:text-default-medium" }, "200 дневный откорм"),
                      vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4" }, " только на основе пятикомпонентной кукурузной смеси, благодаря чему жир в мышечной ткани распределяется равномерно, а мясо обретает сочность и нежность и сладковатый вкус ")
                    ])
                  ]),
                  vueExports.createVNode("div", { class: "flex gap-2 max-md:items-start md:flex-col md:gap-4" }, [
                    vueExports.createVNode("div", { class: "bg-light-gray w-fit rounded-full p-3" }, [
                      vueExports.createVNode(vueExports.unref(IconSparkle))
                    ]),
                    vueExports.createVNode("div", null, [
                      vueExports.createVNode("h5", { class: "text-mob-small-medium md:text-default-medium" }, "Идеальная генетика"),
                      vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4" }, " на производство идут только молодые бычки мясных пород, преимущественно абердин-ангус ")
                    ])
                  ]),
                  vueExports.createVNode("div", { class: "flex gap-2 max-md:items-start md:flex-col md:gap-4" }, [
                    vueExports.createVNode("div", { class: "bg-light-gray w-fit rounded-full p-3" }, [
                      vueExports.createVNode(vueExports.unref(IconTree))
                    ]),
                    vueExports.createVNode("div", null, [
                      vueExports.createVNode("h5", { class: "text-mob-small-medium md:text-default-medium" }, "Животных выращивают"),
                      vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4" }, "в экологически чистых районах")
                    ])
                  ]),
                  vueExports.createVNode("div", { class: "flex gap-2 max-md:items-start md:flex-col md:gap-4" }, [
                    vueExports.createVNode("div", { class: "bg-light-gray w-fit rounded-full p-3" }, [
                      vueExports.createVNode(vueExports.unref(IconForkKnife))
                    ]),
                    vueExports.createVNode("div", null, [
                      vueExports.createVNode("h5", { class: "text-mob-small-medium md:text-default-medium" }, "Широчайший выбор"),
                      vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4" }, " стейки, антрекоты, филе, мякоти, вырезка, грудинка, лопатка, ребрышки и т.д. ")
                    ])
                  ]),
                  vueExports.createVNode("div", { class: "flex gap-2 max-md:items-start md:flex-col md:gap-4" }, [
                    vueExports.createVNode("div", { class: "bg-light-gray w-fit rounded-full p-3" }, [
                      vueExports.createVNode(vueExports.unref(IconChefHat), { class: "h-8 w-8" })
                    ]),
                    vueExports.createVNode("div", null, [
                      vueExports.createVNode("h5", { class: "text-mob-small-medium md:text-default-medium" }, "Высшая степень мраморности"),
                      vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4" }, " Мраморность придает мясу невероятную мягкость и нежный, насыщенный вкус ")
                    ])
                  ]),
                  vueExports.createVNode("div", { class: "flex gap-2 max-md:items-start md:flex-col md:gap-4" }, [
                    vueExports.createVNode("div", { class: "bg-light-gray w-fit rounded-full p-3" }, [
                      vueExports.createVNode(vueExports.unref(IconCart), { class: "h-8 w-8" })
                    ]),
                    vueExports.createVNode("div", null, [
                      vueExports.createVNode("h5", { class: "text-mob-small-medium md:text-default-medium" }, "Продажа оптом и в розницу"),
                      vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-2 md:mt-4" }, "Быстрая доставка")
                    ])
                  ]),
                  vueExports.createVNode(vueExports.unref(_sfc_main$7), {
                    src: "/images/test-images/image_faq.png",
                    alt: "изображение стейков"
                  })
                ])
              ]),
              vueExports.createVNode(vueExports.unref(VButton), {
                label: "Назад в каталог",
                class: "mx-auto mt-8",
                onClick: ($event) => vueExports.unref(router).visit(_ctx.route("catalog.index"))
              }, null, 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/faq/ui/FaqPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
