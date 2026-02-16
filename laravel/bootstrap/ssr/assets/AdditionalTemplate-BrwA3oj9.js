import { v as vueExports, b as usePage, s as serverRenderer_cjs_prodExports, h as head_default, V as VContainer } from "../ssr.js";
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
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "AdditionalTemplate",
  __ssrInlineRender: true,
  setup(__props) {
    const { props } = usePage();
    vueExports.onMounted(() => {
      function showError(input2, message) {
        let error = input2.nextElementSibling;
        if (!error || !error.classList.contains("error-message")) {
          error = document.createElement("div");
          error.className = "error-message text-red-500 text-complimentary-reg mt-1";
          input2.insertAdjacentElement("afterend", error);
        }
        error.textContent = message;
        input2.classList.add("border-red-500");
      }
      function clearError(input2) {
        const error = input2.nextElementSibling;
        if (error && error.classList.contains("error-message")) {
          error.remove();
        }
        input2.classList.remove("border-red-500");
      }
      const input = document.getElementById("phone");
      const newsletterForm = document.getElementById("newsletter-form");
      const subscribeForm = document.getElementById("subscribe-form");
      const modal = document.querySelector("#modal");
      const closeModalBtn = document.querySelector("#close-modal");
      function openModal() {
        if (!modal) return;
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        document.body.classList.add("overflow-hidden");
      }
      function closeModal() {
        if (!modal) return;
        modal.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
      }
      if (modal && closeModalBtn) {
        closeModalBtn.addEventListener("click", closeModal);
        modal.addEventListener("click", (e) => {
          if (e.target === modal) closeModal();
        });
      }
      if (input) {
        input.addEventListener("input", (e) => {
          const target = e.target;
          let value = target.value.replace(/\D/g, "");
          if (value.startsWith("8")) value = "7" + value.slice(1);
          if (!value.startsWith("7")) value = "7" + value;
          value = value.substring(0, 11);
          let formatted = "+7";
          if (value.length > 1) formatted += " (" + value.substring(1, 4);
          if (value.length >= 5) formatted += ") " + value.substring(4, 7);
          if (value.length >= 8) formatted += "-" + value.substring(7, 9);
          if (value.length >= 10) formatted += "-" + value.substring(9, 11);
          target.value = formatted;
          clearError(target);
        });
        input.addEventListener("keypress", (e) => {
          if (!/[0-9]/.test(e.key)) e.preventDefault();
        });
      }
      if (subscribeForm) {
        subscribeForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const form = e.target;
          const nameInput = form.querySelector('input[type="text"]');
          const check = form.querySelector("#check");
          const emailInput = form.querySelector('input[type="email"]');
          if (!nameInput.value.trim()) {
            showError(nameInput, "Введите ваше имя");
          } else {
            clearError(nameInput);
          }
          const formData = {
            name: nameInput.value.trim(),
            email: emailInput == null ? void 0 : emailInput.value.trim(),
            agreement: check.checked
          };
          fetch("/email-subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
          }).then((res) => {
            if (!res.ok) throw new Error("Ошибка отправки");
            form.reset();
            openModal();
          }).catch(() => console.log("Ошибка при отправке формы."));
        });
      }
      if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const form = e.target;
          const nameInput = form.querySelector('input[type="text"]');
          const phoneInput = form.querySelector("#phone");
          const check = form.querySelector("#check");
          const emailInput = form.querySelector('input[type="email"]');
          const commentInput = form.querySelector("#comment");
          let isValid = true;
          if (!nameInput.value.trim()) {
            showError(nameInput, "Введите ваше имя");
            isValid = false;
          } else {
            clearError(nameInput);
          }
          const digits = phoneInput.value.replace(/\D/g, "");
          if (digits.length !== 11) {
            showError(phoneInput, "Введите корректный номер телефона");
            isValid = false;
          } else {
            clearError(phoneInput);
          }
          if (!check.checked) {
            isValid = false;
          }
          if (isValid) {
            const formData = {
              name: nameInput.value.trim(),
              phone: phoneInput.value,
              type: "question_form",
              agreement: check.checked
            };
            if (emailInput && emailInput.value.trim()) {
              formData.email = emailInput.value.trim();
            }
            if (commentInput && commentInput.value.trim()) {
              formData.comment = commentInput.value.trim();
            }
            fetch("/contactform/call-contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData)
            }).then((res) => {
              if (!res.ok) throw new Error("Ошибка отправки");
              form.reset();
              openModal();
            }).catch(() => console.log("Ошибка при отправке формы."));
          }
        });
      }
    });
    vueExports.onMounted(() => {
      const headers = document.querySelectorAll(".accordion-header");
      headers.forEach((header) => {
        header.addEventListener("click", () => {
          const content = header.nextElementSibling;
          const icon = header.querySelector(".accordion-toggle");
          if (!content || !icon) return;
          const isOpen = content.style.maxHeight;
          document.querySelectorAll(".accordion-content").forEach((c) => {
            c.style.maxHeight = "";
            c.classList.remove("open");
          });
          document.querySelectorAll(".accordion-header").forEach((h) => {
            const svg = h.querySelector(".accordion-toggle");
            h.classList.remove("active");
            if (svg) svg.classList.remove("rotate");
          });
          if (!isOpen) {
            content.style.maxHeight = `${content.scrollHeight + 50}px`;
            content.classList.add("open");
            header.classList.add("active");
            icon.classList.add("rotate");
          }
        });
      });
      const firstHeader = headers[0];
      const firstContent = firstHeader == null ? void 0 : firstHeader.nextElementSibling;
      const firstIcon = firstHeader == null ? void 0 : firstHeader.querySelector(".accordion-toggle");
      if (firstHeader && firstContent && firstIcon) {
        firstContent.style.maxHeight = `${firstContent.scrollHeight + 50}px`;
        firstContent.classList.add("open");
        firstHeader.classList.add("active");
        firstIcon.classList.add("rotate");
      }
      const checkbox = document.getElementById("check");
      const box = document.getElementById("checkbox-box");
      if (checkbox && box) {
        checkbox.addEventListener("change", () => {
          box.classList.toggle("checked", checkbox.checked);
        });
      }
      function toggleActiveCircle() {
        const desktopSteps = document.querySelectorAll(".md\\:flex .step");
        const mobileSteps = document.querySelectorAll(".md\\:hidden .step");
        let activeIndex = 0;
        function updateActiveStep() {
          desktopSteps.forEach((step, index) => {
            const circle = step.querySelector(".circle");
            if (circle) {
              if (index === activeIndex) {
                circle.classList.add("bg-text", "text-white");
                circle.classList.remove("bg-white");
              } else {
                circle.classList.add("bg-white");
                circle.classList.remove("bg-text", "text-white");
              }
            }
          });
          mobileSteps.forEach((step, index) => {
            const circle = step.querySelector(".circle");
            if (circle) {
              if (index === activeIndex) {
                circle.classList.add("bg-text", "text-white");
                circle.classList.remove("bg-white");
              } else {
                circle.classList.add("bg-white");
                circle.classList.remove("bg-text", "text-white");
              }
            }
          });
          activeIndex = (activeIndex + 1) % desktopSteps.length;
        }
        updateActiveStep();
        setInterval(updateActiveStep, 2e3);
      }
      toggleActiveCircle();
      const comm = document.getElementById("comm");
      if (comm) {
        const textarea = document.createElement("textarea");
        textarea.id = "comment";
        textarea.placeholder = "Сообщение";
        textarea.className = "bg-input rounded-20 placeholder:text-additional text-mob-small-reg h-[100px] w-full resize-none p-4 focus:outline-none";
        comm.replaceWith(textarea);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (vueExports.unref(props).seoData) {
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(head_default), null, {
          default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<title${_scopeId}>${serverRenderer_cjs_prodExports.ssrInterpolate(vueExports.unref(props).seoData.seo_title)}</title>`);
              if (vueExports.unref(props).seoData.seo_description) {
                _push2(`<meta name="description"${serverRenderer_cjs_prodExports.ssrRenderAttr("content", vueExports.unref(props).seoData.seo_description)}${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
              if (vueExports.unref(props).seoData.seo_keywords) {
                _push2(`<meta name="keywords"${serverRenderer_cjs_prodExports.ssrRenderAttr("content", vueExports.unref(props).seoData.seo_keywords)}${_scopeId}>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                vueExports.createVNode("title", null, vueExports.toDisplayString(vueExports.unref(props).seoData.seo_title), 1),
                vueExports.unref(props).seoData.seo_description ? (vueExports.openBlock(), vueExports.createBlock("meta", {
                  key: 0,
                  name: "description",
                  content: vueExports.unref(props).seoData.seo_description
                }, null, 8, ["content"])) : vueExports.createCommentVNode("", true),
                vueExports.unref(props).seoData.seo_keywords ? (vueExports.openBlock(), vueExports.createBlock("meta", {
                  key: 1,
                  name: "keywords",
                  content: vueExports.unref(props).seoData.seo_keywords
                }, null, 8, ["content"])) : vueExports.createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VContainer), null, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-6 sm:px-8"${_scopeId}>${vueExports.unref(props).content ?? ""}</div>`);
          } else {
            return [
              vueExports.createVNode("div", {
                class: "px-6 sm:px-8",
                innerHTML: vueExports.unref(props).content
              }, null, 8, ["innerHTML"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/[additional]/ui/AdditionalTemplate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
