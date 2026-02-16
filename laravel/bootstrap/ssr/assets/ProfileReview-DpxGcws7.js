import { v as vueExports, c as useForm, s as serverRenderer_cjs_prodExports, d as _sfc_main$2, e as _sfc_main$3, o as _sfc_main$4, i as _sfc_main$6, a as VButton, al as _sfc_main$7, u as useScreenSize, T, an as IconBookOpen, S as _sfc_main$d, a6 as IconTooltip, k as _sfc_main$e, _ as _sfc_main$f, l as link_default, y as IconCheckCircle, D as _sfc_main$g, t as _export_sfc } from "../ssr.js";
import { _ as _sfc_main$5, a as _sfc_main$i } from "./AddReviewModal-fl2Fe4q6.js";
import { Form } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";
import { I as IconArrowsDownUp } from "./IconArrowsDownUp-DpCY8QBc.js";
import { I as IconShoppingBag } from "./IconShoppingBag-CjMfLdtN.js";
import { I as IconThumbsUp } from "./IconThumbsUp-BHrWpxEP.js";
import { _ as _sfc_main$h } from "./VPagination-cbnzOOCr.js";
import { _ as _sfc_main$8, a as _sfc_main$9, b as _sfc_main$a, c as _sfc_main$b, d as _sfc_main$c } from "./Tabs-_owbj9IT.js";
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
import "primevue/tab";
import "primevue/tablist";
import "primevue/tabpanel";
import "primevue/tabpanels";
import "primevue/tabs";
const editReviewSchema = z.object({
  rating: z.preprocess(
    (val) => val === null ? void 0 : val,
    z.number({ required_error: "Поставьте рейтинг продукту" }).min(1, "Оцените товар").max(5)
  ),
  text: z.string({ required_error: "Обязательно поле" }).min(50, "Минимум 50 символов"),
  images: z.array(z.union([z.instanceof(File), z.number()])).max(8, "Максимум 8 фото")
});
const editReviewResolver = zodResolver(editReviewSchema);
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "EditReviewModal",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    review: {}
  }, {
    "visible": { type: Boolean, ...{ required: true } },
    "visibleModifiers": {}
  }),
  emits: ["update:visible"],
  setup(__props) {
    const props = __props;
    const visible = vueExports.useModel(__props, "visible");
    const profileEditReviewForm = useForm({
      rating: 0,
      text: "",
      images: []
    });
    const selectedImages = vueExports.ref([]);
    vueExports.watch(visible, (newVal) => {
      if (newVal && props.review) {
        profileEditReviewForm.rating = props.review.rating;
        profileEditReviewForm.text = props.review.text;
        selectedImages.value = props.review.images.map((img) => ({ url: img.path, id: img.id }));
      }
    });
    const onSubmitEditReview = ({ valid }) => {
      if (valid && props.review) {
        profileEditReviewForm.images = selectedImages.value.map((i) => "id" in i ? i.id : i.file);
        console.log(profileEditReviewForm);
        console.log(profileEditReviewForm.images);
        profileEditReviewForm.post(route("user.profile.reviews.update", props.review.id), {
          preserveScroll: true,
          onSuccess: () => {
            visible.value = false;
            resetImages();
          }
        });
      }
    };
    const resetImages = () => {
      selectedImages.value.forEach((img) => {
        if ("file" in img) {
          URL.revokeObjectURL(img.url);
        }
      });
      selectedImages.value = [];
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$2, vueExports.mergeProps({
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        draggable: false,
        modal: "",
        class: "md:w-110",
        onHide: ($event) => {
          vueExports.unref(profileEditReviewForm).reset();
          resetImages();
        }
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class=""${_scopeId}><div${_scopeId}><h2 class="text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0"${_scopeId}>Редактировать отзыв</h2></div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Form), {
              resolver: vueExports.unref(editReviewResolver),
              "validate-on-blur": "",
              "initial-values": vueExports.unref(profileEditReviewForm),
              class: "mt-2 flex flex-col gap-6",
              onSubmit: onSubmitEditReview
            }, {
              default: vueExports.withCtx(($form, _push3, _parent3, _scopeId2) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                    class: "flex w-full flex-col items-center justify-center",
                    error: ((_b = (_a = $form.rating) == null ? void 0 : _a.error) == null ? void 0 : _b.message) || vueExports.unref(profileEditReviewForm).errors.rating
                  }, {
                    default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                          modelValue: vueExports.unref(profileEditReviewForm).rating,
                          "onUpdate:modelValue": ($event) => vueExports.unref(profileEditReviewForm).rating = $event,
                          name: "rating",
                          size: "large"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(_sfc_main$4, {
                            modelValue: vueExports.unref(profileEditReviewForm).rating,
                            "onUpdate:modelValue": ($event) => vueExports.unref(profileEditReviewForm).rating = $event,
                            name: "rating",
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                    class: "w-full",
                    error: ((_d = (_c = $form.images) == null ? void 0 : _c.error) == null ? void 0 : _d.message) || vueExports.unref(profileEditReviewForm).errors.images
                  }, {
                    default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$5), {
                          modelValue: selectedImages.value,
                          "onUpdate:modelValue": ($event) => selectedImages.value = $event,
                          max: 8
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                            modelValue: selectedImages.value,
                            "onUpdate:modelValue": ($event) => selectedImages.value = $event,
                            max: 8
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$3), {
                    class: "w-full text-subsidiary-reg md:text-mob-small-reg",
                    error: ((_f = (_e = $form.text) == null ? void 0 : _e.error) == null ? void 0 : _f.message) || vueExports.unref(profileEditReviewForm).errors.text
                  }, {
                    default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<label for="text"${_scopeId3}>Расскажите впечатления</label>`);
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, {
                          modelValue: vueExports.unref(profileEditReviewForm).text,
                          "onUpdate:modelValue": ($event) => vueExports.unref(profileEditReviewForm).text = $event,
                          name: "text",
                          placeholder: "Комментарий",
                          rows: "4",
                          class: [vueExports.unref(profileEditReviewForm).text ? "bg-transparent" : "bg-light-gray", "mt-1 resize-none"],
                          invalid: !!vueExports.unref(profileEditReviewForm).errors.text
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode("label", { for: "text" }, "Расскажите впечатления"),
                          vueExports.createVNode(_sfc_main$6, {
                            modelValue: vueExports.unref(profileEditReviewForm).text,
                            "onUpdate:modelValue": ($event) => vueExports.unref(profileEditReviewForm).text = $event,
                            name: "text",
                            placeholder: "Комментарий",
                            rows: "4",
                            class: [vueExports.unref(profileEditReviewForm).text ? "bg-transparent" : "bg-light-gray", "mt-1 resize-none"],
                            invalid: !!vueExports.unref(profileEditReviewForm).errors.text
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "invalid"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                    label: "Сохранить отзыв",
                    class: "w-full",
                    type: "submit"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                      class: "flex w-full flex-col items-center justify-center",
                      error: ((_h = (_g = $form.rating) == null ? void 0 : _g.error) == null ? void 0 : _h.message) || vueExports.unref(profileEditReviewForm).errors.rating
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(_sfc_main$4, {
                          modelValue: vueExports.unref(profileEditReviewForm).rating,
                          "onUpdate:modelValue": ($event) => vueExports.unref(profileEditReviewForm).rating = $event,
                          name: "rating",
                          size: "large"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["error"]),
                    vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                      class: "w-full",
                      error: ((_j = (_i = $form.images) == null ? void 0 : _i.error) == null ? void 0 : _j.message) || vueExports.unref(profileEditReviewForm).errors.images
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                          modelValue: selectedImages.value,
                          "onUpdate:modelValue": ($event) => selectedImages.value = $event,
                          max: 8
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["error"]),
                    vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                      class: "w-full text-subsidiary-reg md:text-mob-small-reg",
                      error: ((_l = (_k = $form.text) == null ? void 0 : _k.error) == null ? void 0 : _l.message) || vueExports.unref(profileEditReviewForm).errors.text
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("label", { for: "text" }, "Расскажите впечатления"),
                        vueExports.createVNode(_sfc_main$6, {
                          modelValue: vueExports.unref(profileEditReviewForm).text,
                          "onUpdate:modelValue": ($event) => vueExports.unref(profileEditReviewForm).text = $event,
                          name: "text",
                          placeholder: "Комментарий",
                          rows: "4",
                          class: [vueExports.unref(profileEditReviewForm).text ? "bg-transparent" : "bg-light-gray", "mt-1 resize-none"],
                          invalid: !!vueExports.unref(profileEditReviewForm).errors.text
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "invalid"])
                      ]),
                      _: 2
                    }, 1032, ["error"]),
                    vueExports.createVNode(vueExports.unref(VButton), {
                      label: "Сохранить отзыв",
                      class: "w-full",
                      type: "submit"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vueExports.createVNode("div", { class: "" }, [
                vueExports.createVNode("div", null, [
                  vueExports.createVNode("h2", { class: "text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0" }, "Редактировать отзыв")
                ]),
                vueExports.createVNode(vueExports.unref(Form), {
                  resolver: vueExports.unref(editReviewResolver),
                  "validate-on-blur": "",
                  "initial-values": vueExports.unref(profileEditReviewForm),
                  class: "mt-2 flex flex-col gap-6",
                  onSubmit: onSubmitEditReview
                }, {
                  default: vueExports.withCtx(($form) => {
                    var _a, _b, _c, _d, _e, _f;
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                        class: "flex w-full flex-col items-center justify-center",
                        error: ((_b = (_a = $form.rating) == null ? void 0 : _a.error) == null ? void 0 : _b.message) || vueExports.unref(profileEditReviewForm).errors.rating
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_sfc_main$4, {
                            modelValue: vueExports.unref(profileEditReviewForm).rating,
                            "onUpdate:modelValue": ($event) => vueExports.unref(profileEditReviewForm).rating = $event,
                            name: "rating",
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1032, ["error"]),
                      vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                        class: "w-full",
                        error: ((_d = (_c = $form.images) == null ? void 0 : _c.error) == null ? void 0 : _d.message) || vueExports.unref(profileEditReviewForm).errors.images
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$5), {
                            modelValue: selectedImages.value,
                            "onUpdate:modelValue": ($event) => selectedImages.value = $event,
                            max: 8
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1032, ["error"]),
                      vueExports.createVNode(vueExports.unref(_sfc_main$3), {
                        class: "w-full text-subsidiary-reg md:text-mob-small-reg",
                        error: ((_f = (_e = $form.text) == null ? void 0 : _e.error) == null ? void 0 : _f.message) || vueExports.unref(profileEditReviewForm).errors.text
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode("label", { for: "text" }, "Расскажите впечатления"),
                          vueExports.createVNode(_sfc_main$6, {
                            modelValue: vueExports.unref(profileEditReviewForm).text,
                            "onUpdate:modelValue": ($event) => vueExports.unref(profileEditReviewForm).text = $event,
                            name: "text",
                            placeholder: "Комментарий",
                            rows: "4",
                            class: [vueExports.unref(profileEditReviewForm).text ? "bg-transparent" : "bg-light-gray", "mt-1 resize-none"],
                            invalid: !!vueExports.unref(profileEditReviewForm).errors.text
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "invalid"])
                        ]),
                        _: 2
                      }, 1032, ["error"]),
                      vueExports.createVNode(vueExports.unref(VButton), {
                        label: "Сохранить отзыв",
                        class: "w-full",
                        type: "submit"
                      })
                    ];
                  }),
                  _: 1
                }, 8, ["resolver", "initial-values"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/features/Review/edit-review/ui/EditReviewModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
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
      d: "M8.32515 18.9517C8.15848 18.9517 8.02515 18.9184 7.92515 18.8767C7.59181 18.7517 7.02515 18.3434 7.02515 17.0517V11.6767H5.07515C3.95848 11.6767 3.55848 11.1517 3.41681 10.8434C3.27515 10.5267 3.15015 9.88502 3.88348 9.04335L10.1918 1.87669C11.0418 0.910019 11.7335 0.976686 12.0668 1.10169C12.4001 1.22669 12.9668 1.63502 12.9668 2.92669V8.30169H14.9168C16.0335 8.30169 16.4335 8.82669 16.5751 9.13502C16.7168 9.45169 16.8418 10.0934 16.1085 10.935L9.80015 18.1017C9.20848 18.7767 8.69181 18.9517 8.32515 18.9517ZM11.6085 2.27669C11.5835 2.31002 11.4085 2.39335 11.1335 2.71002L4.82515 9.87669C4.59181 10.1434 4.55848 10.31 4.55848 10.3434C4.57515 10.3517 4.72515 10.435 5.07515 10.435H7.65015C7.99181 10.435 8.27515 10.7184 8.27515 11.06V17.06C8.27515 17.4767 8.35015 17.66 8.38348 17.71C8.40848 17.6767 8.58348 17.5934 8.85848 17.2767L15.1668 10.11C15.4001 9.84335 15.4335 9.67669 15.4335 9.64335C15.4168 9.63502 15.2668 9.55169 14.9168 9.55169H12.3418C12.0001 9.55169 11.7168 9.26835 11.7168 8.92669V2.92669C11.7251 2.51002 11.6418 2.33502 11.6085 2.27669Z",
      fill: "#EBBA1A"
    }, null, -1)
  ]));
}
const IconFlash = { render };
const perPage = 4;
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  ...{
    layout: _sfc_main$7
  },
  __name: "ProfileReview",
  __ssrInlineRender: true,
  props: {
    productsPendingReview: {},
    productsReviewed: {},
    recipesPendingReview: {},
    recipesReviewed: {},
    reviewsLeft: {},
    canLeaveReview: { type: Boolean },
    reviewBonusAmount: {}
  },
  setup(__props) {
    var _a, _b;
    const props = __props;
    const { isMobile } = useScreenSize();
    const form = useForm({
      sort_by: ((_a = T().queryParams) == null ? void 0 : _a.sort_by) ?? "created_at",
      sort_dir: ((_b = T().queryParams) == null ? void 0 : _b.sort_dir) ?? "desc"
    });
    const currentSortBy = vueExports.computed(() => form.sort_by);
    const currentSortDir = vueExports.computed(() => form.sort_dir);
    const sortByDate = () => {
      form.sort_dir = form.sort_dir === "asc" ? "desc" : "asc";
      form.get(T("user.profile.reviews"), {
        preserveState: true,
        replace: true,
        preserveScroll: true
      });
    };
    const pageContent = vueExports.useTemplateRef("reviews-page");
    const onPageUpdate = async () => {
      var _a2;
      (_a2 = pageContent.value) == null ? void 0 : _a2.scrollIntoView({
        behavior: "smooth"
      });
    };
    const currentPage = vueExports.ref(1);
    const paginatedProducts = vueExports.computed(() => {
      const start = (currentPage.value - 1) * perPage;
      const end = start + perPage;
      return props.productsReviewed.slice(start, end);
    });
    const paginatedRecipes = vueExports.computed(() => {
      const start = (currentPage.value - 1) * perPage;
      const end = start + perPage;
      return props.recipesReviewed.slice(start, end);
    });
    const isAddModalOpen = vueExports.ref(false);
    const currentItem = vueExports.ref(null);
    const activeTab = vueExports.ref("0");
    const openAddModal = (slide) => {
      if ("type" in slide && slide.type === "Product" || "type" in slide && slide.type === "Combo") {
        isAddModalOpen.value = true;
        currentItem.value = {
          id: slide.item.id,
          type: slide.type
        };
      } else {
        isAddModalOpen.value = true;
        currentItem.value = {
          id: slide.id,
          type: "Recipe"
        };
      }
    };
    const isEditModalOpen = vueExports.ref(false);
    const currentReview = vueExports.ref(null);
    const openEditModal = (review) => {
      isEditModalOpen.value = true;
      currentReview.value = review;
    };
    const deleteReview = (id) => {
      router.delete(T("user.profile.reviews.destroy", id), { preserveScroll: true, preserveState: true });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({
        ref: "reviews-page",
        class: "w-full max-md:p-6 lg:min-w-0 lg:flex-1"
      }, _attrs))} data-v-ba92c3e4><h1 class="text-default-bold" data-v-ba92c3e4>Мои отзывы</h1>`);
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$8, {
        modelValue: activeTab.value,
        "onUpdate:modelValue": ($event) => activeTab.value = $event,
        value: "0",
        class: "mt-8"
      }, {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$9, null, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$a, {
                    value: "0",
                    class: "flex basis-1/2 items-center justify-center gap-2"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconShoppingBag), null, null, _parent4, _scopeId3));
                        _push4(`<span data-v-ba92c3e4${_scopeId3}>Товары</span>`);
                      } else {
                        return [
                          vueExports.createVNode(vueExports.unref(IconShoppingBag)),
                          vueExports.createVNode("span", null, "Товары")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$a, {
                    value: "1",
                    class: "flex basis-1/2 items-center justify-center gap-2"
                  }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconBookOpen), null, null, _parent4, _scopeId3));
                        _push4(`<span data-v-ba92c3e4${_scopeId3}>Рецепты</span>`);
                      } else {
                        return [
                          vueExports.createVNode(vueExports.unref(IconBookOpen)),
                          vueExports.createVNode("span", null, "Рецепты")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(_sfc_main$a, {
                      value: "0",
                      class: "flex basis-1/2 items-center justify-center gap-2"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(vueExports.unref(IconShoppingBag)),
                        vueExports.createVNode("span", null, "Товары")
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_sfc_main$a, {
                      value: "1",
                      class: "flex basis-1/2 items-center justify-center gap-2"
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(vueExports.unref(IconBookOpen)),
                        vueExports.createVNode("span", null, "Рецепты")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$b, null, {
              default: vueExports.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$c, { value: "0" }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col gap-6 md:gap-8" data-v-ba92c3e4${_scopeId3}>`);
                        if (_ctx.productsPendingReview.length) {
                          _push4(`<section class="flex flex-col gap-4" data-v-ba92c3e4${_scopeId3}><div class="flex flex-col gap-2" data-v-ba92c3e4${_scopeId3}><div class="flex items-center justify-between" data-v-ba92c3e4${_scopeId3}><h2 class="text-small-medium" data-v-ba92c3e4${_scopeId3}>Ждут отзыва</h2><div class="flex items-center gap-2" data-v-ba92c3e4${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconFlash), { class: "h-5 w-5" }, null, _parent4, _scopeId3));
                          _push4(`<span class="text-subsidiary-medium md:text-mob-small-bold" data-v-ba92c3e4${_scopeId3}>Получайте бонусы за отзывы!</span></div></div><div class="flex items-center gap-2" data-v-ba92c3e4${_scopeId3}><p class="text-mob-small-reg md:text-small-reg text-additional font-normal" data-v-ba92c3e4${_scopeId3}> Доступно отзывов в этом месяце: ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.reviewsLeft)} из 3 </p>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$d), { value: "Можно оставить до 3 отзывов в месяц" }, {
                            default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconTooltip), { class: "text-additional hover:text-primary transition-colors" }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(IconTooltip), { class: "text-additional hover:text-primary transition-colors" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                          if (_ctx.canLeaveReview) {
                            _push4(`<div class="w-full" data-v-ba92c3e4${_scopeId3}>`);
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$e), {
                              slides: _ctx.productsPendingReview,
                              "slider-options": {
                                allowTouchMove: true,
                                breakpoints: {
                                  0: { slidesPerView: 1, spaceBetween: 8 },
                                  640: { slidesPerView: 2, spaceBetween: 8 },
                                  1485: { slidesPerView: 3, spaceBetween: 12 }
                                }
                              }
                            }, {
                              slide: vueExports.withCtx(({ slide }, _push5, _parent5, _scopeId4) => {
                                var _a2, _b2;
                                if (_push5) {
                                  _push5(`<article class="border-filling rounded-20 flex h-full cursor-pointer items-start gap-2 border p-2 transition-all duration-200 ease-in hover:border-white hover:shadow-[0_1px_5px_0_rgba(0,0,0,0.1)] md:p-4" data-v-ba92c3e4${_scopeId4}>`);
                                  if ((_a2 = slide.item.images[0]) == null ? void 0 : _a2.path) {
                                    _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$f), {
                                      src: slide.item.images[0].path,
                                      alt: "Изображение товара",
                                      width: vueExports.unref(isMobile) ? "74px" : "116px",
                                      height: vueExports.unref(isMobile) ? "100%" : "80px",
                                      class: "bg-filling shrink-0 rounded-lg max-md:rounded-xl max-sm:h-full",
                                      "img-classes": "rounded-lg"
                                    }, null, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<!---->`);
                                  }
                                  _push5(`<div class="flex flex-col gap-0.5" data-v-ba92c3e4${_scopeId4}><h4 class="text-mob-small-bold line-clamp-2" data-v-ba92c3e4${_scopeId4}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.item.name)}</h4><p class="text-mob-small-medium" data-v-ba92c3e4${_scopeId4}><span class="text-subsidiary-medium text-additional" data-v-ba92c3e4${_scopeId4}>Дата доставки:</span> 31.06.2025</p>`);
                                  _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                                    size: "large",
                                    readonly: ""
                                  }, null, _parent5, _scopeId4));
                                  _push5(`</div></article>`);
                                } else {
                                  return [
                                    vueExports.createVNode("article", {
                                      class: "border-filling rounded-20 flex h-full cursor-pointer items-start gap-2 border p-2 transition-all duration-200 ease-in hover:border-white hover:shadow-[0_1px_5px_0_rgba(0,0,0,0.1)] md:p-4",
                                      onClick: ($event) => openAddModal(slide)
                                    }, [
                                      ((_b2 = slide.item.images[0]) == null ? void 0 : _b2.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$f), {
                                        key: 0,
                                        src: slide.item.images[0].path,
                                        alt: "Изображение товара",
                                        width: vueExports.unref(isMobile) ? "74px" : "116px",
                                        height: vueExports.unref(isMobile) ? "100%" : "80px",
                                        class: "bg-filling shrink-0 rounded-lg max-md:rounded-xl max-sm:h-full",
                                        "img-classes": "rounded-lg"
                                      }, null, 8, ["src", "width", "height"])) : vueExports.createCommentVNode("", true),
                                      vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                                        vueExports.createVNode("h4", { class: "text-mob-small-bold line-clamp-2" }, vueExports.toDisplayString(slide.item.name), 1),
                                        vueExports.createVNode("p", { class: "text-mob-small-medium" }, [
                                          vueExports.createVNode("span", { class: "text-subsidiary-medium text-additional" }, "Дата доставки:"),
                                          vueExports.createTextVNode(" 31.06.2025")
                                        ]),
                                        vueExports.createVNode(_sfc_main$4, {
                                          size: "large",
                                          readonly: ""
                                        })
                                      ])
                                    ], 8, ["onClick"])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            _push4(`<div class="bg-light-gray mt-2 flex flex-col items-center gap-6 rounded-[40px] max-[1120px]:p-6 min-[1120px]:pl-40 md:flex-row lg:gap-15" data-v-ba92c3e4${_scopeId3}>`);
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$f), {
                              src: "/images/ReviewsLeft.png",
                              alt: "Лимит исчерпан",
                              class: "max-md:-mt-10 md:-my-4",
                              "img-classes": "max-h-[100px] md:max-h-[180px] "
                            }, null, _parent4, _scopeId3));
                            _push4(`<div class="text-center md:text-left" data-v-ba92c3e4${_scopeId3}><h2 class="text-default-medium md:text-heavy-medium" data-v-ba92c3e4${_scopeId3}>Лимит отзывов исчерпан</h2><p class="text-subsidiary-reg md:text-mob-small-reg mt-2" data-v-ba92c3e4${_scopeId3}>Новые отзывы можно будет оставить с 1 числа следующего месяца</p></div></div>`);
                          }
                          _push4(`</section>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (_ctx.productsReviewed.length) {
                          _push4(`<section class="flex flex-col gap-4" data-v-ba92c3e4${_scopeId3}><div class="flex items-center justify-between" data-v-ba92c3e4${_scopeId3}><h2 class="text-small-medium" data-v-ba92c3e4${_scopeId3}>Вы уже оценили</h2><div class="text-mob-small-medium flex items-center gap-3" data-v-ba92c3e4${_scopeId3}><span class="text-mob-small-reg text-additional" data-v-ba92c3e4${_scopeId3}>Сортировка:</span><button class="flex cursor-pointer items-center gap-1 transition-all duration-200 ease-in-out" data-v-ba92c3e4${_scopeId3}><span data-v-ba92c3e4${_scopeId3}>по дате</span>`);
                          if (currentSortBy.value === "created_at") {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowsDownUp), {
                              class: { "rotate-180": currentSortDir.value === "asc" }
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</button></div></div><div data-v-ba92c3e4${_scopeId3}><!--[-->`);
                          serverRenderer_cjs_prodExports.ssrRenderList(paginatedProducts.value, (review) => {
                            var _a2, _b2;
                            _push4(`<article class="border-b-stroke flex flex-col gap-2 border-b py-3" data-v-ba92c3e4${_scopeId3}><div class="flex flex-col-reverse items-start justify-between gap-2 md:flex-row" data-v-ba92c3e4${_scopeId3}><div class="flex flex-1 items-start gap-2" data-v-ba92c3e4${_scopeId3}>`);
                            if ((_a2 = review.product_images) == null ? void 0 : _a2.path) {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$f), {
                                src: (_b2 = review.product_images) == null ? void 0 : _b2.path,
                                alt: "Изображение товара",
                                width: vueExports.unref(isMobile) ? "106px" : "116px",
                                height: vueExports.unref(isMobile) ? "74px" : "80px",
                                class: "bg-filling shrink-0 rounded-lg",
                                "img-classes": "rounded-lg bg-filling"
                              }, null, _parent4, _scopeId3));
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`<div class="flex w-full flex-col gap-0.5" data-v-ba92c3e4${_scopeId3}>`);
                            if (review.item_type === "Combo\\Models\\Combo") {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                                href: vueExports.unref(T)("combo.show", review.id)
                              }, {
                                default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<h4 class="text-mob-small-medium line-clamp-2 w-full" data-v-ba92c3e4${_scopeId4}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.name)}</h4>`);
                                  } else {
                                    return [
                                      vueExports.createVNode("h4", { class: "text-mob-small-medium line-clamp-2 w-full" }, vueExports.toDisplayString(review.name), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                                href: vueExports.unref(T)("catalog.product.show", review.slug)
                              }, {
                                default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<h4 class="text-mob-small-medium line-clamp-2 w-full" data-v-ba92c3e4${_scopeId4}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.name)}</h4>`);
                                  } else {
                                    return [
                                      vueExports.createVNode("h4", { class: "text-mob-small-medium line-clamp-2 w-full" }, vueExports.toDisplayString(review.name), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            }
                            _push4(`<p class="text-complimentary-reg text-additional" data-v-ba92c3e4${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.created_at)}</p>`);
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                              "default-value": review.rating,
                              readonly: ""
                            }, null, _parent4, _scopeId3));
                            _push4(`</div></div><div class="flex items-center justify-end max-md:w-full" data-v-ba92c3e4${_scopeId3}>`);
                            if (review.status === "На модерации") {
                              _push4(`<div class="flex items-center" data-v-ba92c3e4${_scopeId3}><p class="text-complimentary-reg md:text-mob-small-medium mr-2" data-v-ba92c3e4${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.status)}</p>`);
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$d), { value: "Проверяем отзыв на соответствие правилам платформы и законодательству. Это займет не более 24 часов." }, {
                                default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconTooltip), { class: "hover:text-additional transition-colors" }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      vueExports.createVNode(vueExports.unref(IconTooltip), { class: "hover:text-additional transition-colors" })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div>`);
                            } else if (review.status === "Активен") {
                              _push4(`<div class="flex items-center gap-4" data-v-ba92c3e4${_scopeId3}>`);
                              if (review.likes_count) {
                                _push4(`<div class="flex items-center gap-2" data-v-ba92c3e4${_scopeId3}><span class="text-complimentary-reg text-additional" data-v-ba92c3e4${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.likes_count)} полезно</span>`);
                                _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconThumbsUp), { class: "text-additional h-5 w-5" }, null, _parent4, _scopeId3));
                                _push4(`</div>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`<div class="flex items-center gap-2" data-v-ba92c3e4${_scopeId3}><span class="text-complimentary-reg md:text-mob-small-medium text-ready-green" data-v-ba92c3e4${_scopeId3}>Опубликован</span>`);
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCheckCircle), { class: "text-ready-green h-5 w-5" }, null, _parent4, _scopeId3));
                              _push4(`</div>`);
                              if (review.bonus_awarded) {
                                _push4(`<div class="text-default text-complimentary-reg md:text-mob-small-reg" data-v-ba92c3e4${_scopeId3}><span class="text-complimentary-bold md:text-mob-small-medium" data-v-ba92c3e4${_scopeId3}>+ ${serverRenderer_cjs_prodExports.ssrInterpolate(_ctx.reviewBonusAmount)}</span> бонусов </div>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`</div>`);
                            } else if (review.status === "Отклонён") {
                              _push4(`<!--[--><p class="text-complimentary-reg md:text-mob-small-medium text-additional mr-2" data-v-ba92c3e4${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.status)}</p>`);
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconTooltip), null, null, _parent4, _scopeId3));
                              _push4(`<!--]-->`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div></div><p class="text-subsidiary-reg md:text-mob-small-reg" data-v-ba92c3e4${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.text)}</p>`);
                            if (review.images.length) {
                              _push4(`<div class="flex items-center gap-2" data-v-ba92c3e4${_scopeId3}><!--[-->`);
                              serverRenderer_cjs_prodExports.ssrRenderList(review.images, (image) => {
                                _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$f), {
                                  key: image.id,
                                  src: image == null ? void 0 : image.path,
                                  alt: "Изображение товара",
                                  width: vueExports.unref(isMobile) ? "54px" : "90px",
                                  height: vueExports.unref(isMobile) ? "60px" : "100px",
                                  class: "bg-filling shrink-0 rounded-lg",
                                  "img-classes": "rounded-lg bg-filling"
                                }, null, _parent4, _scopeId3));
                              });
                              _push4(`<!--]--></div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            if (review.status !== "Активен") {
                              _push4(`<div class="flex items-center gap-2" data-v-ba92c3e4${_scopeId3}>`);
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$g, {
                                label: "Редактировать отзыв",
                                rounded: "",
                                variant: "outlined",
                                size: "small",
                                onClick: ($event) => openEditModal(review)
                              }, null, _parent4, _scopeId3));
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$g, {
                                label: "Удалить отзыв",
                                class: "danger-button !border-[#F04E27]",
                                rounded: "",
                                variant: "outlined",
                                size: "small",
                                onClick: ($event) => deleteReview(review.id)
                              }, null, _parent4, _scopeId3));
                              _push4(`</div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            if (review.answer) {
                              _push4(`<div class="bg-input flex flex-col gap-0.5 rounded-lg p-3" data-v-ba92c3e4${_scopeId3}><h5 class="text-subsidiary-medium md:text-mob-small-reg text-additional" data-v-ba92c3e4${_scopeId3}>Ответ магазина</h5><p class="text-subsidiary-reg md:text-mob-small-reg" data-v-ba92c3e4${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.answer)}</p></div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</article>`);
                          });
                          _push4(`<!--]--></div></section>`);
                        } else {
                          _push4(`<section class="bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15" data-v-ba92c3e4${_scopeId3}><div class="flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15" data-v-ba92c3e4${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$f), {
                            src: "/images/profile/productReviewEmpty.webp",
                            alt: "heart",
                            class: "-mt-6 lg:ml-4 xl:scale-115",
                            height: vueExports.unref(isMobile) ? "100px" : "140px"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]" data-v-ba92c3e4${_scopeId3}><p class="text-default-medium md:text-heavy-medium max-md:text-center" data-v-ba92c3e4${_scopeId3}>Ждём ваши оценки и отзывы</p>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                            href: vueExports.unref(T)("catalog.index")
                          }, {
                            default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                                  label: "В каталог",
                                  class: "w-fit max-md:mt-6 md:mt-8"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(VButton), {
                                    label: "В каталог",
                                    class: "w-fit max-md:mt-6 md:mt-8"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div></section>`);
                        }
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$h), {
                          modelValue: currentPage.value,
                          "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                          "per-page": perPage,
                          "total-count": _ctx.productsReviewed.length,
                          class: "mx-auto mt-8 justify-center"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                            _ctx.productsPendingReview.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                              key: 0,
                              class: "flex flex-col gap-4"
                            }, [
                              vueExports.createVNode("div", { class: "flex flex-col gap-2" }, [
                                vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                                  vueExports.createVNode("h2", { class: "text-small-medium" }, "Ждут отзыва"),
                                  vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                                    vueExports.createVNode(vueExports.unref(IconFlash), { class: "h-5 w-5" }),
                                    vueExports.createVNode("span", { class: "text-subsidiary-medium md:text-mob-small-bold" }, "Получайте бонусы за отзывы!")
                                  ])
                                ]),
                                vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                                  vueExports.createVNode("p", { class: "text-mob-small-reg md:text-small-reg text-additional font-normal" }, " Доступно отзывов в этом месяце: " + vueExports.toDisplayString(_ctx.reviewsLeft) + " из 3 ", 1),
                                  vueExports.createVNode(vueExports.unref(_sfc_main$d), { value: "Можно оставить до 3 отзывов в месяц" }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(vueExports.unref(IconTooltip), { class: "text-additional hover:text-primary transition-colors" })
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _ctx.canLeaveReview ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 0,
                                class: "w-full"
                              }, [
                                vueExports.createVNode(vueExports.unref(_sfc_main$e), {
                                  slides: _ctx.productsPendingReview,
                                  "slider-options": {
                                    allowTouchMove: true,
                                    breakpoints: {
                                      0: { slidesPerView: 1, spaceBetween: 8 },
                                      640: { slidesPerView: 2, spaceBetween: 8 },
                                      1485: { slidesPerView: 3, spaceBetween: 12 }
                                    }
                                  }
                                }, {
                                  slide: vueExports.withCtx(({ slide }) => {
                                    var _a2;
                                    return [
                                      vueExports.createVNode("article", {
                                        class: "border-filling rounded-20 flex h-full cursor-pointer items-start gap-2 border p-2 transition-all duration-200 ease-in hover:border-white hover:shadow-[0_1px_5px_0_rgba(0,0,0,0.1)] md:p-4",
                                        onClick: ($event) => openAddModal(slide)
                                      }, [
                                        ((_a2 = slide.item.images[0]) == null ? void 0 : _a2.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$f), {
                                          key: 0,
                                          src: slide.item.images[0].path,
                                          alt: "Изображение товара",
                                          width: vueExports.unref(isMobile) ? "74px" : "116px",
                                          height: vueExports.unref(isMobile) ? "100%" : "80px",
                                          class: "bg-filling shrink-0 rounded-lg max-md:rounded-xl max-sm:h-full",
                                          "img-classes": "rounded-lg"
                                        }, null, 8, ["src", "width", "height"])) : vueExports.createCommentVNode("", true),
                                        vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                                          vueExports.createVNode("h4", { class: "text-mob-small-bold line-clamp-2" }, vueExports.toDisplayString(slide.item.name), 1),
                                          vueExports.createVNode("p", { class: "text-mob-small-medium" }, [
                                            vueExports.createVNode("span", { class: "text-subsidiary-medium text-additional" }, "Дата доставки:"),
                                            vueExports.createTextVNode(" 31.06.2025")
                                          ]),
                                          vueExports.createVNode(_sfc_main$4, {
                                            size: "large",
                                            readonly: ""
                                          })
                                        ])
                                      ], 8, ["onClick"])
                                    ];
                                  }),
                                  _: 1
                                }, 8, ["slides"])
                              ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                                key: 1,
                                class: "bg-light-gray mt-2 flex flex-col items-center gap-6 rounded-[40px] max-[1120px]:p-6 min-[1120px]:pl-40 md:flex-row lg:gap-15"
                              }, [
                                vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                  src: "/images/ReviewsLeft.png",
                                  alt: "Лимит исчерпан",
                                  class: "max-md:-mt-10 md:-my-4",
                                  "img-classes": "max-h-[100px] md:max-h-[180px] "
                                }),
                                vueExports.createVNode("div", { class: "text-center md:text-left" }, [
                                  vueExports.createVNode("h2", { class: "text-default-medium md:text-heavy-medium" }, "Лимит отзывов исчерпан"),
                                  vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-2" }, "Новые отзывы можно будет оставить с 1 числа следующего месяца")
                                ])
                              ]))
                            ])) : vueExports.createCommentVNode("", true),
                            _ctx.productsReviewed.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                              key: 1,
                              class: "flex flex-col gap-4"
                            }, [
                              vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                                vueExports.createVNode("h2", {
                                  ref: "productsReviewedHeader",
                                  class: "text-small-medium"
                                }, "Вы уже оценили", 512),
                                vueExports.createVNode("div", { class: "text-mob-small-medium flex items-center gap-3" }, [
                                  vueExports.createVNode("span", { class: "text-mob-small-reg text-additional" }, "Сортировка:"),
                                  vueExports.createVNode("button", {
                                    class: "flex cursor-pointer items-center gap-1 transition-all duration-200 ease-in-out",
                                    onClick: sortByDate
                                  }, [
                                    vueExports.createVNode("span", null, "по дате"),
                                    currentSortBy.value === "created_at" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(IconArrowsDownUp), {
                                      key: 0,
                                      class: { "rotate-180": currentSortDir.value === "asc" }
                                    }, null, 8, ["class"])) : vueExports.createCommentVNode("", true)
                                  ])
                                ])
                              ]),
                              vueExports.createVNode("div", null, [
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedProducts.value, (review) => {
                                  var _a2, _b2;
                                  return vueExports.openBlock(), vueExports.createBlock("article", {
                                    key: review.id,
                                    class: "border-b-stroke flex flex-col gap-2 border-b py-3"
                                  }, [
                                    vueExports.createVNode("div", { class: "flex flex-col-reverse items-start justify-between gap-2 md:flex-row" }, [
                                      vueExports.createVNode("div", { class: "flex flex-1 items-start gap-2" }, [
                                        ((_a2 = review.product_images) == null ? void 0 : _a2.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$f), {
                                          key: 0,
                                          src: (_b2 = review.product_images) == null ? void 0 : _b2.path,
                                          alt: "Изображение товара",
                                          width: vueExports.unref(isMobile) ? "106px" : "116px",
                                          height: vueExports.unref(isMobile) ? "74px" : "80px",
                                          class: "bg-filling shrink-0 rounded-lg",
                                          "img-classes": "rounded-lg bg-filling"
                                        }, null, 8, ["src", "width", "height"])) : vueExports.createCommentVNode("", true),
                                        vueExports.createVNode("div", { class: "flex w-full flex-col gap-0.5" }, [
                                          review.item_type === "Combo\\Models\\Combo" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(link_default), {
                                            key: 0,
                                            href: vueExports.unref(T)("combo.show", review.id)
                                          }, {
                                            default: vueExports.withCtx(() => [
                                              vueExports.createVNode("h4", { class: "text-mob-small-medium line-clamp-2 w-full" }, vueExports.toDisplayString(review.name), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["href"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(link_default), {
                                            key: 1,
                                            href: vueExports.unref(T)("catalog.product.show", review.slug)
                                          }, {
                                            default: vueExports.withCtx(() => [
                                              vueExports.createVNode("h4", { class: "text-mob-small-medium line-clamp-2 w-full" }, vueExports.toDisplayString(review.name), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["href"])),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString(review.created_at), 1),
                                          vueExports.createVNode(_sfc_main$4, {
                                            "default-value": review.rating,
                                            readonly: ""
                                          }, null, 8, ["default-value"])
                                        ])
                                      ]),
                                      vueExports.createVNode("div", { class: "flex items-center justify-end max-md:w-full" }, [
                                        review.status === "На модерации" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                          key: 0,
                                          class: "flex items-center"
                                        }, [
                                          vueExports.createVNode("p", { class: "text-complimentary-reg md:text-mob-small-medium mr-2" }, vueExports.toDisplayString(review.status), 1),
                                          vueExports.createVNode(vueExports.unref(_sfc_main$d), { value: "Проверяем отзыв на соответствие правилам платформы и законодательству. Это займет не более 24 часов." }, {
                                            default: vueExports.withCtx(() => [
                                              vueExports.createVNode(vueExports.unref(IconTooltip), { class: "hover:text-additional transition-colors" })
                                            ]),
                                            _: 1
                                          })
                                        ])) : review.status === "Активен" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                          key: 1,
                                          class: "flex items-center gap-4"
                                        }, [
                                          review.likes_count ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                            key: 0,
                                            class: "flex items-center gap-2"
                                          }, [
                                            vueExports.createVNode("span", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString(review.likes_count) + " полезно", 1),
                                            vueExports.createVNode(vueExports.unref(IconThumbsUp), { class: "text-additional h-5 w-5" })
                                          ])) : vueExports.createCommentVNode("", true),
                                          vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                                            vueExports.createVNode("span", { class: "text-complimentary-reg md:text-mob-small-medium text-ready-green" }, "Опубликован"),
                                            vueExports.createVNode(vueExports.unref(IconCheckCircle), { class: "text-ready-green h-5 w-5" })
                                          ]),
                                          review.bonus_awarded ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                            key: 1,
                                            class: "text-default text-complimentary-reg md:text-mob-small-reg"
                                          }, [
                                            vueExports.createVNode("span", { class: "text-complimentary-bold md:text-mob-small-medium" }, "+ " + vueExports.toDisplayString(_ctx.reviewBonusAmount), 1),
                                            vueExports.createTextVNode(" бонусов ")
                                          ])) : vueExports.createCommentVNode("", true)
                                        ])) : review.status === "Отклонён" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 2 }, [
                                          vueExports.createVNode("p", { class: "text-complimentary-reg md:text-mob-small-medium text-additional mr-2" }, vueExports.toDisplayString(review.status), 1),
                                          vueExports.createVNode(vueExports.unref(IconTooltip))
                                        ], 64)) : vueExports.createCommentVNode("", true)
                                      ])
                                    ]),
                                    vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(review.text), 1),
                                    review.images.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 0,
                                      class: "flex items-center gap-2"
                                    }, [
                                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(review.images, (image) => {
                                        return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$f), {
                                          key: image.id,
                                          src: image == null ? void 0 : image.path,
                                          alt: "Изображение товара",
                                          width: vueExports.unref(isMobile) ? "54px" : "90px",
                                          height: vueExports.unref(isMobile) ? "60px" : "100px",
                                          class: "bg-filling shrink-0 rounded-lg",
                                          "img-classes": "rounded-lg bg-filling"
                                        }, null, 8, ["src", "width", "height"]);
                                      }), 128))
                                    ])) : vueExports.createCommentVNode("", true),
                                    review.status !== "Активен" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 1,
                                      class: "flex items-center gap-2"
                                    }, [
                                      vueExports.createVNode(_sfc_main$g, {
                                        label: "Редактировать отзыв",
                                        rounded: "",
                                        variant: "outlined",
                                        size: "small",
                                        onClick: ($event) => openEditModal(review)
                                      }, null, 8, ["onClick"]),
                                      vueExports.createVNode(_sfc_main$g, {
                                        label: "Удалить отзыв",
                                        class: "danger-button !border-[#F04E27]",
                                        rounded: "",
                                        variant: "outlined",
                                        size: "small",
                                        onClick: ($event) => deleteReview(review.id)
                                      }, null, 8, ["onClick"])
                                    ])) : vueExports.createCommentVNode("", true),
                                    review.answer ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 2,
                                      class: "bg-input flex flex-col gap-0.5 rounded-lg p-3"
                                    }, [
                                      vueExports.createVNode("h5", { class: "text-subsidiary-medium md:text-mob-small-reg text-additional" }, "Ответ магазина"),
                                      vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(review.answer), 1)
                                    ])) : vueExports.createCommentVNode("", true)
                                  ]);
                                }), 128))
                              ])
                            ])) : (vueExports.openBlock(), vueExports.createBlock("section", {
                              key: 2,
                              class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                            }, [
                              vueExports.createVNode("div", { class: "flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15" }, [
                                vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                  src: "/images/profile/productReviewEmpty.webp",
                                  alt: "heart",
                                  class: "-mt-6 lg:ml-4 xl:scale-115",
                                  height: vueExports.unref(isMobile) ? "100px" : "140px"
                                }, null, 8, ["height"]),
                                vueExports.createVNode("div", { class: "flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]" }, [
                                  vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "Ждём ваши оценки и отзывы"),
                                  vueExports.createVNode(vueExports.unref(link_default), {
                                    href: vueExports.unref(T)("catalog.index")
                                  }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(vueExports.unref(VButton), {
                                        label: "В каталог",
                                        class: "w-fit max-md:mt-6 md:mt-8"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["href"])
                                ])
                              ])
                            ])),
                            vueExports.createVNode(vueExports.unref(_sfc_main$h), {
                              modelValue: currentPage.value,
                              "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                              "per-page": perPage,
                              "total-count": _ctx.productsReviewed.length,
                              class: "mx-auto mt-8 justify-center"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$c, { value: "1" }, {
                    default: vueExports.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex flex-col gap-8" data-v-ba92c3e4${_scopeId3}>`);
                        if (_ctx.recipesPendingReview.length) {
                          _push4(`<section class="flex flex-col gap-4" data-v-ba92c3e4${_scopeId3}><div class="flex items-center justify-between" data-v-ba92c3e4${_scopeId3}><h2 class="text-small-medium" data-v-ba92c3e4${_scopeId3}>Любимые рецепты</h2></div><div class="w-full" data-v-ba92c3e4${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$e), {
                            slides: _ctx.recipesPendingReview,
                            "slider-options": {
                              allowTouchMove: true,
                              breakpoints: {
                                0: { slidesPerView: 1, spaceBetween: 8 },
                                1280: { slidesPerView: 3, spaceBetween: 12 }
                              }
                            }
                          }, {
                            slide: vueExports.withCtx(({ slide }, _push5, _parent5, _scopeId4) => {
                              var _a2, _b2, _c, _d;
                              if (_push5) {
                                _push5(`<article class="border-filling rounded-20 flex h-full cursor-pointer items-start gap-2 border p-2 transition-all duration-200 ease-in hover:border-white hover:shadow-[0_1px_5px_0_rgba(0,0,0,0.1)] md:p-4" data-v-ba92c3e4${_scopeId4}>`);
                                if ((_a2 = slide.image) == null ? void 0 : _a2.path) {
                                  _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$f), {
                                    src: (_b2 = slide.image) == null ? void 0 : _b2.path,
                                    alt: "Изображение товара",
                                    width: vueExports.unref(isMobile) ? "74px" : "116px",
                                    height: vueExports.unref(isMobile) ? "97px" : "80px",
                                    class: "bg-filling shrink-0 rounded-xl max-sm:h-full md:rounded-lg",
                                    "img-classes": "rounded-lg"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`<div class="flex h-full flex-col gap-0.5" data-v-ba92c3e4${_scopeId4}><h4 class="text-mob-small-bold line-clamp-2" data-v-ba92c3e4${_scopeId4}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.title)}</h4><p class="text-complimentary-reg line-clamp-2" data-v-ba92c3e4${_scopeId4}>${serverRenderer_cjs_prodExports.ssrInterpolate(slide.mini_description)}</p>`);
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                                  size: "large",
                                  readonly: ""
                                }, null, _parent5, _scopeId4));
                                _push5(`</div></article>`);
                              } else {
                                return [
                                  vueExports.createVNode("article", {
                                    class: "border-filling rounded-20 flex h-full cursor-pointer items-start gap-2 border p-2 transition-all duration-200 ease-in hover:border-white hover:shadow-[0_1px_5px_0_rgba(0,0,0,0.1)] md:p-4",
                                    onClick: ($event) => openAddModal(slide)
                                  }, [
                                    ((_c = slide.image) == null ? void 0 : _c.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$f), {
                                      key: 0,
                                      src: (_d = slide.image) == null ? void 0 : _d.path,
                                      alt: "Изображение товара",
                                      width: vueExports.unref(isMobile) ? "74px" : "116px",
                                      height: vueExports.unref(isMobile) ? "97px" : "80px",
                                      class: "bg-filling shrink-0 rounded-xl max-sm:h-full md:rounded-lg",
                                      "img-classes": "rounded-lg"
                                    }, null, 8, ["src", "width", "height"])) : vueExports.createCommentVNode("", true),
                                    vueExports.createVNode("div", { class: "flex h-full flex-col gap-0.5" }, [
                                      vueExports.createVNode("h4", { class: "text-mob-small-bold line-clamp-2" }, vueExports.toDisplayString(slide.title), 1),
                                      vueExports.createVNode("p", { class: "text-complimentary-reg line-clamp-2" }, vueExports.toDisplayString(slide.mini_description), 1),
                                      vueExports.createVNode(_sfc_main$4, {
                                        size: "large",
                                        readonly: ""
                                      })
                                    ])
                                  ], 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></section>`);
                        } else {
                          _push4(`<!---->`);
                        }
                        if (_ctx.recipesReviewed.length) {
                          _push4(`<section class="flex flex-col gap-4" data-v-ba92c3e4${_scopeId3}><div class="flex items-center justify-between" data-v-ba92c3e4${_scopeId3}><h2 class="text-small-medium" data-v-ba92c3e4${_scopeId3}>Вы уже оценили</h2><div class="text-mob-small-medium flex items-center gap-3" data-v-ba92c3e4${_scopeId3}><span class="text-mob-small-reg text-additional" data-v-ba92c3e4${_scopeId3}>Сортировка:</span><button class="flex cursor-pointer items-center gap-1 transition-all duration-200 ease-in-out" data-v-ba92c3e4${_scopeId3}><span data-v-ba92c3e4${_scopeId3}>по дате</span>`);
                          if (currentSortBy.value === "created_at") {
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconArrowsDownUp), {
                              class: { "rotate-180": currentSortDir.value === "asc" }
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</button></div></div><div data-v-ba92c3e4${_scopeId3}><!--[-->`);
                          serverRenderer_cjs_prodExports.ssrRenderList(paginatedRecipes.value, (review) => {
                            var _a2;
                            _push4(`<article class="border-b-stroke flex flex-col gap-2 border-b py-3" data-v-ba92c3e4${_scopeId3}><div class="flex flex-col-reverse items-start justify-between md:flex-row" data-v-ba92c3e4${_scopeId3}><div class="flex flex-1 items-start gap-2" data-v-ba92c3e4${_scopeId3}>`);
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$f), {
                              src: (_a2 = review == null ? void 0 : review.product_images) == null ? void 0 : _a2.path,
                              alt: "Изображение товара",
                              width: vueExports.unref(isMobile) ? "107px" : "116px",
                              height: vueExports.unref(isMobile) ? "74px" : "80px",
                              class: "bg-filling shrink-0 rounded-lg",
                              "img-classes": "rounded-lg bg-filling"
                            }, null, _parent4, _scopeId3));
                            _push4(`<div class="flex flex-col gap-0.5" data-v-ba92c3e4${_scopeId3}><h4 class="text-mob-small-medium max-md:line-clamp-2" data-v-ba92c3e4${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.name)}</h4><p class="text-complimentary-reg text-additional" data-v-ba92c3e4${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.created_at)}</p>`);
                            _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$4, {
                              "default-value": review.rating,
                              readonly: ""
                            }, null, _parent4, _scopeId3));
                            _push4(`</div></div><div class="flex items-center justify-end max-md:w-full" data-v-ba92c3e4${_scopeId3}>`);
                            if (review.status === "На модерации") {
                              _push4(`<div class="flex items-center" data-v-ba92c3e4${_scopeId3}><p class="text-complimentary-reg md:text-mob-small-medium mr-2" data-v-ba92c3e4${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.status)}</p>`);
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$d), { value: "Проверяем отзыв на соответствие правилам платформы и законодательству. Это займет не более 24 часов." }, {
                                default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconTooltip), { class: "hover:text-additional transition-colors" }, null, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      vueExports.createVNode(vueExports.unref(IconTooltip), { class: "hover:text-additional transition-colors" })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div>`);
                            } else if (review.status === "Активен") {
                              _push4(`<div class="flex items-center gap-4" data-v-ba92c3e4${_scopeId3}>`);
                              if (review.likes_count) {
                                _push4(`<div class="flex items-center gap-2" data-v-ba92c3e4${_scopeId3}><span class="text-complimentary-reg text-additional" data-v-ba92c3e4${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.likes_count)} полезно</span>`);
                                _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconThumbsUp), { class: "text-additional h-5 w-5" }, null, _parent4, _scopeId3));
                                _push4(`</div>`);
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(`<div class="flex items-center gap-2" data-v-ba92c3e4${_scopeId3}><span class="text-complimentary-reg md:text-mob-small-medium text-ready-green" data-v-ba92c3e4${_scopeId3}>Опубликован</span>`);
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconCheckCircle), { class: "text-ready-green h-5 w-5" }, null, _parent4, _scopeId3));
                              _push4(`</div></div>`);
                            } else if (review.status === "Отклонён") {
                              _push4(`<!--[--><p class="text-complimentary-reg md:text-mob-small-medium text-additional mr-2" data-v-ba92c3e4${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.status)}</p>`);
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconTooltip), null, null, _parent4, _scopeId3));
                              _push4(`<!--]-->`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</div></div><p class="text-subsidiary-reg md:text-mob-small-reg break-all" data-v-ba92c3e4${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.text)}</p>`);
                            if (review.images.length) {
                              _push4(`<div class="flex items-center gap-2" data-v-ba92c3e4${_scopeId3}><!--[-->`);
                              serverRenderer_cjs_prodExports.ssrRenderList(review.images, (image) => {
                                _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$f), {
                                  key: image.id,
                                  src: image == null ? void 0 : image.path,
                                  alt: "Изображение товара",
                                  width: vueExports.unref(isMobile) ? "74px" : "90px",
                                  height: vueExports.unref(isMobile) ? "64px" : "100px",
                                  class: "bg-filling shrink-0 rounded-lg",
                                  "img-classes": "rounded-lg bg-filling"
                                }, null, _parent4, _scopeId3));
                              });
                              _push4(`<!--]--></div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            if (review.status !== "Активен") {
                              _push4(`<div class="flex items-center gap-2" data-v-ba92c3e4${_scopeId3}>`);
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$g, {
                                label: "Редактировать отзыв",
                                rounded: "",
                                variant: "outlined",
                                size: "small",
                                onClick: ($event) => openEditModal(review)
                              }, null, _parent4, _scopeId3));
                              _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$g, {
                                label: "Удалить отзыв",
                                class: "danger-button !border-[#F04E27]",
                                rounded: "",
                                variant: "outlined",
                                size: "small",
                                onClick: ($event) => deleteReview(review.id)
                              }, null, _parent4, _scopeId3));
                              _push4(`</div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            if (review.answer) {
                              _push4(`<div class="bg-input flex flex-col gap-0.5 rounded-lg p-3" data-v-ba92c3e4${_scopeId3}><h5 class="text-mob-small-reg text-additional" data-v-ba92c3e4${_scopeId3}>Ответ магазина</h5><p class="text-mob-small-reg" data-v-ba92c3e4${_scopeId3}>${serverRenderer_cjs_prodExports.ssrInterpolate(review.answer)}</p></div>`);
                            } else {
                              _push4(`<!---->`);
                            }
                            _push4(`</article>`);
                          });
                          _push4(`<!--]--></div></section>`);
                        } else {
                          _push4(`<section class="bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15" data-v-ba92c3e4${_scopeId3}><div class="flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15" data-v-ba92c3e4${_scopeId3}>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$f), {
                            src: "/images/profile/productReviewEmpty.webp",
                            alt: "heart",
                            class: "-mt-6 lg:ml-4 xl:scale-115",
                            height: vueExports.unref(isMobile) ? "100px" : "140px"
                          }, null, _parent4, _scopeId3));
                          _push4(`<div class="flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]" data-v-ba92c3e4${_scopeId3}><p class="text-default-medium md:text-heavy-medium max-md:text-center" data-v-ba92c3e4${_scopeId3}>Ждём ваши оценки и отзывы</p>`);
                          _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(link_default), {
                            href: vueExports.unref(T)("catalog.index")
                          }, {
                            default: vueExports.withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                                  label: "В каталог",
                                  class: "w-fit max-md:mt-6 md:mt-8"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  vueExports.createVNode(vueExports.unref(VButton), {
                                    label: "В каталог",
                                    class: "w-fit max-md:mt-6 md:mt-8"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`</div></div></section>`);
                        }
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$h), {
                          modelValue: currentPage.value,
                          "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                          "per-page": perPage,
                          "total-count": _ctx.recipesReviewed.length,
                          class: "mx-auto mt-8 justify-center"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          vueExports.createVNode("div", { class: "flex flex-col gap-8" }, [
                            _ctx.recipesPendingReview.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                              key: 0,
                              class: "flex flex-col gap-4"
                            }, [
                              vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                                vueExports.createVNode("h2", { class: "text-small-medium" }, "Любимые рецепты")
                              ]),
                              vueExports.createVNode("div", { class: "w-full" }, [
                                vueExports.createVNode(vueExports.unref(_sfc_main$e), {
                                  slides: _ctx.recipesPendingReview,
                                  "slider-options": {
                                    allowTouchMove: true,
                                    breakpoints: {
                                      0: { slidesPerView: 1, spaceBetween: 8 },
                                      1280: { slidesPerView: 3, spaceBetween: 12 }
                                    }
                                  }
                                }, {
                                  slide: vueExports.withCtx(({ slide }) => {
                                    var _a2, _b2;
                                    return [
                                      vueExports.createVNode("article", {
                                        class: "border-filling rounded-20 flex h-full cursor-pointer items-start gap-2 border p-2 transition-all duration-200 ease-in hover:border-white hover:shadow-[0_1px_5px_0_rgba(0,0,0,0.1)] md:p-4",
                                        onClick: ($event) => openAddModal(slide)
                                      }, [
                                        ((_a2 = slide.image) == null ? void 0 : _a2.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$f), {
                                          key: 0,
                                          src: (_b2 = slide.image) == null ? void 0 : _b2.path,
                                          alt: "Изображение товара",
                                          width: vueExports.unref(isMobile) ? "74px" : "116px",
                                          height: vueExports.unref(isMobile) ? "97px" : "80px",
                                          class: "bg-filling shrink-0 rounded-xl max-sm:h-full md:rounded-lg",
                                          "img-classes": "rounded-lg"
                                        }, null, 8, ["src", "width", "height"])) : vueExports.createCommentVNode("", true),
                                        vueExports.createVNode("div", { class: "flex h-full flex-col gap-0.5" }, [
                                          vueExports.createVNode("h4", { class: "text-mob-small-bold line-clamp-2" }, vueExports.toDisplayString(slide.title), 1),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg line-clamp-2" }, vueExports.toDisplayString(slide.mini_description), 1),
                                          vueExports.createVNode(_sfc_main$4, {
                                            size: "large",
                                            readonly: ""
                                          })
                                        ])
                                      ], 8, ["onClick"])
                                    ];
                                  }),
                                  _: 1
                                }, 8, ["slides"])
                              ])
                            ])) : vueExports.createCommentVNode("", true),
                            _ctx.recipesReviewed.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                              key: 1,
                              class: "flex flex-col gap-4"
                            }, [
                              vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                                vueExports.createVNode("h2", { class: "text-small-medium" }, "Вы уже оценили"),
                                vueExports.createVNode("div", { class: "text-mob-small-medium flex items-center gap-3" }, [
                                  vueExports.createVNode("span", { class: "text-mob-small-reg text-additional" }, "Сортировка:"),
                                  vueExports.createVNode("button", {
                                    class: "flex cursor-pointer items-center gap-1 transition-all duration-200 ease-in-out",
                                    onClick: sortByDate
                                  }, [
                                    vueExports.createVNode("span", null, "по дате"),
                                    currentSortBy.value === "created_at" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(IconArrowsDownUp), {
                                      key: 0,
                                      class: { "rotate-180": currentSortDir.value === "asc" }
                                    }, null, 8, ["class"])) : vueExports.createCommentVNode("", true)
                                  ])
                                ])
                              ]),
                              vueExports.createVNode("div", null, [
                                (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedRecipes.value, (review) => {
                                  var _a2;
                                  return vueExports.openBlock(), vueExports.createBlock("article", {
                                    key: review.id,
                                    class: "border-b-stroke flex flex-col gap-2 border-b py-3"
                                  }, [
                                    vueExports.createVNode("div", { class: "flex flex-col-reverse items-start justify-between md:flex-row" }, [
                                      vueExports.createVNode("div", { class: "flex flex-1 items-start gap-2" }, [
                                        vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                          src: (_a2 = review == null ? void 0 : review.product_images) == null ? void 0 : _a2.path,
                                          alt: "Изображение товара",
                                          width: vueExports.unref(isMobile) ? "107px" : "116px",
                                          height: vueExports.unref(isMobile) ? "74px" : "80px",
                                          class: "bg-filling shrink-0 rounded-lg",
                                          "img-classes": "rounded-lg bg-filling"
                                        }, null, 8, ["src", "width", "height"]),
                                        vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                                          vueExports.createVNode("h4", { class: "text-mob-small-medium max-md:line-clamp-2" }, vueExports.toDisplayString(review.name), 1),
                                          vueExports.createVNode("p", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString(review.created_at), 1),
                                          vueExports.createVNode(_sfc_main$4, {
                                            "default-value": review.rating,
                                            readonly: ""
                                          }, null, 8, ["default-value"])
                                        ])
                                      ]),
                                      vueExports.createVNode("div", { class: "flex items-center justify-end max-md:w-full" }, [
                                        review.status === "На модерации" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                          key: 0,
                                          class: "flex items-center"
                                        }, [
                                          vueExports.createVNode("p", { class: "text-complimentary-reg md:text-mob-small-medium mr-2" }, vueExports.toDisplayString(review.status), 1),
                                          vueExports.createVNode(vueExports.unref(_sfc_main$d), { value: "Проверяем отзыв на соответствие правилам платформы и законодательству. Это займет не более 24 часов." }, {
                                            default: vueExports.withCtx(() => [
                                              vueExports.createVNode(vueExports.unref(IconTooltip), { class: "hover:text-additional transition-colors" })
                                            ]),
                                            _: 1
                                          })
                                        ])) : review.status === "Активен" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                          key: 1,
                                          class: "flex items-center gap-4"
                                        }, [
                                          review.likes_count ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                            key: 0,
                                            class: "flex items-center gap-2"
                                          }, [
                                            vueExports.createVNode("span", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString(review.likes_count) + " полезно", 1),
                                            vueExports.createVNode(vueExports.unref(IconThumbsUp), { class: "text-additional h-5 w-5" })
                                          ])) : vueExports.createCommentVNode("", true),
                                          vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                                            vueExports.createVNode("span", { class: "text-complimentary-reg md:text-mob-small-medium text-ready-green" }, "Опубликован"),
                                            vueExports.createVNode(vueExports.unref(IconCheckCircle), { class: "text-ready-green h-5 w-5" })
                                          ])
                                        ])) : review.status === "Отклонён" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 2 }, [
                                          vueExports.createVNode("p", { class: "text-complimentary-reg md:text-mob-small-medium text-additional mr-2" }, vueExports.toDisplayString(review.status), 1),
                                          vueExports.createVNode(vueExports.unref(IconTooltip))
                                        ], 64)) : vueExports.createCommentVNode("", true)
                                      ])
                                    ]),
                                    vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg break-all" }, vueExports.toDisplayString(review.text), 1),
                                    review.images.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 0,
                                      class: "flex items-center gap-2"
                                    }, [
                                      (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(review.images, (image) => {
                                        return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$f), {
                                          key: image.id,
                                          src: image == null ? void 0 : image.path,
                                          alt: "Изображение товара",
                                          width: vueExports.unref(isMobile) ? "74px" : "90px",
                                          height: vueExports.unref(isMobile) ? "64px" : "100px",
                                          class: "bg-filling shrink-0 rounded-lg",
                                          "img-classes": "rounded-lg bg-filling"
                                        }, null, 8, ["src", "width", "height"]);
                                      }), 128))
                                    ])) : vueExports.createCommentVNode("", true),
                                    review.status !== "Активен" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 1,
                                      class: "flex items-center gap-2"
                                    }, [
                                      vueExports.createVNode(_sfc_main$g, {
                                        label: "Редактировать отзыв",
                                        rounded: "",
                                        variant: "outlined",
                                        size: "small",
                                        onClick: ($event) => openEditModal(review)
                                      }, null, 8, ["onClick"]),
                                      vueExports.createVNode(_sfc_main$g, {
                                        label: "Удалить отзыв",
                                        class: "danger-button !border-[#F04E27]",
                                        rounded: "",
                                        variant: "outlined",
                                        size: "small",
                                        onClick: ($event) => deleteReview(review.id)
                                      }, null, 8, ["onClick"])
                                    ])) : vueExports.createCommentVNode("", true),
                                    review.answer ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 2,
                                      class: "bg-input flex flex-col gap-0.5 rounded-lg p-3"
                                    }, [
                                      vueExports.createVNode("h5", { class: "text-mob-small-reg text-additional" }, "Ответ магазина"),
                                      vueExports.createVNode("p", { class: "text-mob-small-reg" }, vueExports.toDisplayString(review.answer), 1)
                                    ])) : vueExports.createCommentVNode("", true)
                                  ]);
                                }), 128))
                              ])
                            ])) : (vueExports.openBlock(), vueExports.createBlock("section", {
                              key: 2,
                              class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                            }, [
                              vueExports.createVNode("div", { class: "flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15" }, [
                                vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                  src: "/images/profile/productReviewEmpty.webp",
                                  alt: "heart",
                                  class: "-mt-6 lg:ml-4 xl:scale-115",
                                  height: vueExports.unref(isMobile) ? "100px" : "140px"
                                }, null, 8, ["height"]),
                                vueExports.createVNode("div", { class: "flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]" }, [
                                  vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "Ждём ваши оценки и отзывы"),
                                  vueExports.createVNode(vueExports.unref(link_default), {
                                    href: vueExports.unref(T)("catalog.index")
                                  }, {
                                    default: vueExports.withCtx(() => [
                                      vueExports.createVNode(vueExports.unref(VButton), {
                                        label: "В каталог",
                                        class: "w-fit max-md:mt-6 md:mt-8"
                                      })
                                    ]),
                                    _: 1
                                  }, 8, ["href"])
                                ])
                              ])
                            ])),
                            vueExports.createVNode(vueExports.unref(_sfc_main$h), {
                              modelValue: currentPage.value,
                              "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                              "per-page": perPage,
                              "total-count": _ctx.recipesReviewed.length,
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
                    vueExports.createVNode(_sfc_main$c, { value: "0" }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                          _ctx.productsPendingReview.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                            key: 0,
                            class: "flex flex-col gap-4"
                          }, [
                            vueExports.createVNode("div", { class: "flex flex-col gap-2" }, [
                              vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                                vueExports.createVNode("h2", { class: "text-small-medium" }, "Ждут отзыва"),
                                vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                                  vueExports.createVNode(vueExports.unref(IconFlash), { class: "h-5 w-5" }),
                                  vueExports.createVNode("span", { class: "text-subsidiary-medium md:text-mob-small-bold" }, "Получайте бонусы за отзывы!")
                                ])
                              ]),
                              vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                                vueExports.createVNode("p", { class: "text-mob-small-reg md:text-small-reg text-additional font-normal" }, " Доступно отзывов в этом месяце: " + vueExports.toDisplayString(_ctx.reviewsLeft) + " из 3 ", 1),
                                vueExports.createVNode(vueExports.unref(_sfc_main$d), { value: "Можно оставить до 3 отзывов в месяц" }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(IconTooltip), { class: "text-additional hover:text-primary transition-colors" })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _ctx.canLeaveReview ? (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 0,
                              class: "w-full"
                            }, [
                              vueExports.createVNode(vueExports.unref(_sfc_main$e), {
                                slides: _ctx.productsPendingReview,
                                "slider-options": {
                                  allowTouchMove: true,
                                  breakpoints: {
                                    0: { slidesPerView: 1, spaceBetween: 8 },
                                    640: { slidesPerView: 2, spaceBetween: 8 },
                                    1485: { slidesPerView: 3, spaceBetween: 12 }
                                  }
                                }
                              }, {
                                slide: vueExports.withCtx(({ slide }) => {
                                  var _a2;
                                  return [
                                    vueExports.createVNode("article", {
                                      class: "border-filling rounded-20 flex h-full cursor-pointer items-start gap-2 border p-2 transition-all duration-200 ease-in hover:border-white hover:shadow-[0_1px_5px_0_rgba(0,0,0,0.1)] md:p-4",
                                      onClick: ($event) => openAddModal(slide)
                                    }, [
                                      ((_a2 = slide.item.images[0]) == null ? void 0 : _a2.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$f), {
                                        key: 0,
                                        src: slide.item.images[0].path,
                                        alt: "Изображение товара",
                                        width: vueExports.unref(isMobile) ? "74px" : "116px",
                                        height: vueExports.unref(isMobile) ? "100%" : "80px",
                                        class: "bg-filling shrink-0 rounded-lg max-md:rounded-xl max-sm:h-full",
                                        "img-classes": "rounded-lg"
                                      }, null, 8, ["src", "width", "height"])) : vueExports.createCommentVNode("", true),
                                      vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                                        vueExports.createVNode("h4", { class: "text-mob-small-bold line-clamp-2" }, vueExports.toDisplayString(slide.item.name), 1),
                                        vueExports.createVNode("p", { class: "text-mob-small-medium" }, [
                                          vueExports.createVNode("span", { class: "text-subsidiary-medium text-additional" }, "Дата доставки:"),
                                          vueExports.createTextVNode(" 31.06.2025")
                                        ]),
                                        vueExports.createVNode(_sfc_main$4, {
                                          size: "large",
                                          readonly: ""
                                        })
                                      ])
                                    ], 8, ["onClick"])
                                  ];
                                }),
                                _: 1
                              }, 8, ["slides"])
                            ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                              key: 1,
                              class: "bg-light-gray mt-2 flex flex-col items-center gap-6 rounded-[40px] max-[1120px]:p-6 min-[1120px]:pl-40 md:flex-row lg:gap-15"
                            }, [
                              vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                src: "/images/ReviewsLeft.png",
                                alt: "Лимит исчерпан",
                                class: "max-md:-mt-10 md:-my-4",
                                "img-classes": "max-h-[100px] md:max-h-[180px] "
                              }),
                              vueExports.createVNode("div", { class: "text-center md:text-left" }, [
                                vueExports.createVNode("h2", { class: "text-default-medium md:text-heavy-medium" }, "Лимит отзывов исчерпан"),
                                vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-2" }, "Новые отзывы можно будет оставить с 1 числа следующего месяца")
                              ])
                            ]))
                          ])) : vueExports.createCommentVNode("", true),
                          _ctx.productsReviewed.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                            key: 1,
                            class: "flex flex-col gap-4"
                          }, [
                            vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                              vueExports.createVNode("h2", {
                                ref: "productsReviewedHeader",
                                class: "text-small-medium"
                              }, "Вы уже оценили", 512),
                              vueExports.createVNode("div", { class: "text-mob-small-medium flex items-center gap-3" }, [
                                vueExports.createVNode("span", { class: "text-mob-small-reg text-additional" }, "Сортировка:"),
                                vueExports.createVNode("button", {
                                  class: "flex cursor-pointer items-center gap-1 transition-all duration-200 ease-in-out",
                                  onClick: sortByDate
                                }, [
                                  vueExports.createVNode("span", null, "по дате"),
                                  currentSortBy.value === "created_at" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(IconArrowsDownUp), {
                                    key: 0,
                                    class: { "rotate-180": currentSortDir.value === "asc" }
                                  }, null, 8, ["class"])) : vueExports.createCommentVNode("", true)
                                ])
                              ])
                            ]),
                            vueExports.createVNode("div", null, [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedProducts.value, (review) => {
                                var _a2, _b2;
                                return vueExports.openBlock(), vueExports.createBlock("article", {
                                  key: review.id,
                                  class: "border-b-stroke flex flex-col gap-2 border-b py-3"
                                }, [
                                  vueExports.createVNode("div", { class: "flex flex-col-reverse items-start justify-between gap-2 md:flex-row" }, [
                                    vueExports.createVNode("div", { class: "flex flex-1 items-start gap-2" }, [
                                      ((_a2 = review.product_images) == null ? void 0 : _a2.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$f), {
                                        key: 0,
                                        src: (_b2 = review.product_images) == null ? void 0 : _b2.path,
                                        alt: "Изображение товара",
                                        width: vueExports.unref(isMobile) ? "106px" : "116px",
                                        height: vueExports.unref(isMobile) ? "74px" : "80px",
                                        class: "bg-filling shrink-0 rounded-lg",
                                        "img-classes": "rounded-lg bg-filling"
                                      }, null, 8, ["src", "width", "height"])) : vueExports.createCommentVNode("", true),
                                      vueExports.createVNode("div", { class: "flex w-full flex-col gap-0.5" }, [
                                        review.item_type === "Combo\\Models\\Combo" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(link_default), {
                                          key: 0,
                                          href: vueExports.unref(T)("combo.show", review.id)
                                        }, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("h4", { class: "text-mob-small-medium line-clamp-2 w-full" }, vueExports.toDisplayString(review.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["href"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(link_default), {
                                          key: 1,
                                          href: vueExports.unref(T)("catalog.product.show", review.slug)
                                        }, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode("h4", { class: "text-mob-small-medium line-clamp-2 w-full" }, vueExports.toDisplayString(review.name), 1)
                                          ]),
                                          _: 2
                                        }, 1032, ["href"])),
                                        vueExports.createVNode("p", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString(review.created_at), 1),
                                        vueExports.createVNode(_sfc_main$4, {
                                          "default-value": review.rating,
                                          readonly: ""
                                        }, null, 8, ["default-value"])
                                      ])
                                    ]),
                                    vueExports.createVNode("div", { class: "flex items-center justify-end max-md:w-full" }, [
                                      review.status === "На модерации" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                        key: 0,
                                        class: "flex items-center"
                                      }, [
                                        vueExports.createVNode("p", { class: "text-complimentary-reg md:text-mob-small-medium mr-2" }, vueExports.toDisplayString(review.status), 1),
                                        vueExports.createVNode(vueExports.unref(_sfc_main$d), { value: "Проверяем отзыв на соответствие правилам платформы и законодательству. Это займет не более 24 часов." }, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode(vueExports.unref(IconTooltip), { class: "hover:text-additional transition-colors" })
                                          ]),
                                          _: 1
                                        })
                                      ])) : review.status === "Активен" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                        key: 1,
                                        class: "flex items-center gap-4"
                                      }, [
                                        review.likes_count ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                          key: 0,
                                          class: "flex items-center gap-2"
                                        }, [
                                          vueExports.createVNode("span", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString(review.likes_count) + " полезно", 1),
                                          vueExports.createVNode(vueExports.unref(IconThumbsUp), { class: "text-additional h-5 w-5" })
                                        ])) : vueExports.createCommentVNode("", true),
                                        vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                                          vueExports.createVNode("span", { class: "text-complimentary-reg md:text-mob-small-medium text-ready-green" }, "Опубликован"),
                                          vueExports.createVNode(vueExports.unref(IconCheckCircle), { class: "text-ready-green h-5 w-5" })
                                        ]),
                                        review.bonus_awarded ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                          key: 1,
                                          class: "text-default text-complimentary-reg md:text-mob-small-reg"
                                        }, [
                                          vueExports.createVNode("span", { class: "text-complimentary-bold md:text-mob-small-medium" }, "+ " + vueExports.toDisplayString(_ctx.reviewBonusAmount), 1),
                                          vueExports.createTextVNode(" бонусов ")
                                        ])) : vueExports.createCommentVNode("", true)
                                      ])) : review.status === "Отклонён" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 2 }, [
                                        vueExports.createVNode("p", { class: "text-complimentary-reg md:text-mob-small-medium text-additional mr-2" }, vueExports.toDisplayString(review.status), 1),
                                        vueExports.createVNode(vueExports.unref(IconTooltip))
                                      ], 64)) : vueExports.createCommentVNode("", true)
                                    ])
                                  ]),
                                  vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(review.text), 1),
                                  review.images.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: 0,
                                    class: "flex items-center gap-2"
                                  }, [
                                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(review.images, (image) => {
                                      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$f), {
                                        key: image.id,
                                        src: image == null ? void 0 : image.path,
                                        alt: "Изображение товара",
                                        width: vueExports.unref(isMobile) ? "54px" : "90px",
                                        height: vueExports.unref(isMobile) ? "60px" : "100px",
                                        class: "bg-filling shrink-0 rounded-lg",
                                        "img-classes": "rounded-lg bg-filling"
                                      }, null, 8, ["src", "width", "height"]);
                                    }), 128))
                                  ])) : vueExports.createCommentVNode("", true),
                                  review.status !== "Активен" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: 1,
                                    class: "flex items-center gap-2"
                                  }, [
                                    vueExports.createVNode(_sfc_main$g, {
                                      label: "Редактировать отзыв",
                                      rounded: "",
                                      variant: "outlined",
                                      size: "small",
                                      onClick: ($event) => openEditModal(review)
                                    }, null, 8, ["onClick"]),
                                    vueExports.createVNode(_sfc_main$g, {
                                      label: "Удалить отзыв",
                                      class: "danger-button !border-[#F04E27]",
                                      rounded: "",
                                      variant: "outlined",
                                      size: "small",
                                      onClick: ($event) => deleteReview(review.id)
                                    }, null, 8, ["onClick"])
                                  ])) : vueExports.createCommentVNode("", true),
                                  review.answer ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: 2,
                                    class: "bg-input flex flex-col gap-0.5 rounded-lg p-3"
                                  }, [
                                    vueExports.createVNode("h5", { class: "text-subsidiary-medium md:text-mob-small-reg text-additional" }, "Ответ магазина"),
                                    vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(review.answer), 1)
                                  ])) : vueExports.createCommentVNode("", true)
                                ]);
                              }), 128))
                            ])
                          ])) : (vueExports.openBlock(), vueExports.createBlock("section", {
                            key: 2,
                            class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                          }, [
                            vueExports.createVNode("div", { class: "flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15" }, [
                              vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                src: "/images/profile/productReviewEmpty.webp",
                                alt: "heart",
                                class: "-mt-6 lg:ml-4 xl:scale-115",
                                height: vueExports.unref(isMobile) ? "100px" : "140px"
                              }, null, 8, ["height"]),
                              vueExports.createVNode("div", { class: "flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]" }, [
                                vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "Ждём ваши оценки и отзывы"),
                                vueExports.createVNode(vueExports.unref(link_default), {
                                  href: vueExports.unref(T)("catalog.index")
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(VButton), {
                                      label: "В каталог",
                                      class: "w-fit max-md:mt-6 md:mt-8"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ])
                            ])
                          ])),
                          vueExports.createVNode(vueExports.unref(_sfc_main$h), {
                            modelValue: currentPage.value,
                            "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                            "per-page": perPage,
                            "total-count": _ctx.productsReviewed.length,
                            class: "mx-auto mt-8 justify-center"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                        ])
                      ]),
                      _: 1
                    }),
                    vueExports.createVNode(_sfc_main$c, { value: "1" }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("div", { class: "flex flex-col gap-8" }, [
                          _ctx.recipesPendingReview.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                            key: 0,
                            class: "flex flex-col gap-4"
                          }, [
                            vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                              vueExports.createVNode("h2", { class: "text-small-medium" }, "Любимые рецепты")
                            ]),
                            vueExports.createVNode("div", { class: "w-full" }, [
                              vueExports.createVNode(vueExports.unref(_sfc_main$e), {
                                slides: _ctx.recipesPendingReview,
                                "slider-options": {
                                  allowTouchMove: true,
                                  breakpoints: {
                                    0: { slidesPerView: 1, spaceBetween: 8 },
                                    1280: { slidesPerView: 3, spaceBetween: 12 }
                                  }
                                }
                              }, {
                                slide: vueExports.withCtx(({ slide }) => {
                                  var _a2, _b2;
                                  return [
                                    vueExports.createVNode("article", {
                                      class: "border-filling rounded-20 flex h-full cursor-pointer items-start gap-2 border p-2 transition-all duration-200 ease-in hover:border-white hover:shadow-[0_1px_5px_0_rgba(0,0,0,0.1)] md:p-4",
                                      onClick: ($event) => openAddModal(slide)
                                    }, [
                                      ((_a2 = slide.image) == null ? void 0 : _a2.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$f), {
                                        key: 0,
                                        src: (_b2 = slide.image) == null ? void 0 : _b2.path,
                                        alt: "Изображение товара",
                                        width: vueExports.unref(isMobile) ? "74px" : "116px",
                                        height: vueExports.unref(isMobile) ? "97px" : "80px",
                                        class: "bg-filling shrink-0 rounded-xl max-sm:h-full md:rounded-lg",
                                        "img-classes": "rounded-lg"
                                      }, null, 8, ["src", "width", "height"])) : vueExports.createCommentVNode("", true),
                                      vueExports.createVNode("div", { class: "flex h-full flex-col gap-0.5" }, [
                                        vueExports.createVNode("h4", { class: "text-mob-small-bold line-clamp-2" }, vueExports.toDisplayString(slide.title), 1),
                                        vueExports.createVNode("p", { class: "text-complimentary-reg line-clamp-2" }, vueExports.toDisplayString(slide.mini_description), 1),
                                        vueExports.createVNode(_sfc_main$4, {
                                          size: "large",
                                          readonly: ""
                                        })
                                      ])
                                    ], 8, ["onClick"])
                                  ];
                                }),
                                _: 1
                              }, 8, ["slides"])
                            ])
                          ])) : vueExports.createCommentVNode("", true),
                          _ctx.recipesReviewed.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                            key: 1,
                            class: "flex flex-col gap-4"
                          }, [
                            vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                              vueExports.createVNode("h2", { class: "text-small-medium" }, "Вы уже оценили"),
                              vueExports.createVNode("div", { class: "text-mob-small-medium flex items-center gap-3" }, [
                                vueExports.createVNode("span", { class: "text-mob-small-reg text-additional" }, "Сортировка:"),
                                vueExports.createVNode("button", {
                                  class: "flex cursor-pointer items-center gap-1 transition-all duration-200 ease-in-out",
                                  onClick: sortByDate
                                }, [
                                  vueExports.createVNode("span", null, "по дате"),
                                  currentSortBy.value === "created_at" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(IconArrowsDownUp), {
                                    key: 0,
                                    class: { "rotate-180": currentSortDir.value === "asc" }
                                  }, null, 8, ["class"])) : vueExports.createCommentVNode("", true)
                                ])
                              ])
                            ]),
                            vueExports.createVNode("div", null, [
                              (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedRecipes.value, (review) => {
                                var _a2;
                                return vueExports.openBlock(), vueExports.createBlock("article", {
                                  key: review.id,
                                  class: "border-b-stroke flex flex-col gap-2 border-b py-3"
                                }, [
                                  vueExports.createVNode("div", { class: "flex flex-col-reverse items-start justify-between md:flex-row" }, [
                                    vueExports.createVNode("div", { class: "flex flex-1 items-start gap-2" }, [
                                      vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                        src: (_a2 = review == null ? void 0 : review.product_images) == null ? void 0 : _a2.path,
                                        alt: "Изображение товара",
                                        width: vueExports.unref(isMobile) ? "107px" : "116px",
                                        height: vueExports.unref(isMobile) ? "74px" : "80px",
                                        class: "bg-filling shrink-0 rounded-lg",
                                        "img-classes": "rounded-lg bg-filling"
                                      }, null, 8, ["src", "width", "height"]),
                                      vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                                        vueExports.createVNode("h4", { class: "text-mob-small-medium max-md:line-clamp-2" }, vueExports.toDisplayString(review.name), 1),
                                        vueExports.createVNode("p", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString(review.created_at), 1),
                                        vueExports.createVNode(_sfc_main$4, {
                                          "default-value": review.rating,
                                          readonly: ""
                                        }, null, 8, ["default-value"])
                                      ])
                                    ]),
                                    vueExports.createVNode("div", { class: "flex items-center justify-end max-md:w-full" }, [
                                      review.status === "На модерации" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                        key: 0,
                                        class: "flex items-center"
                                      }, [
                                        vueExports.createVNode("p", { class: "text-complimentary-reg md:text-mob-small-medium mr-2" }, vueExports.toDisplayString(review.status), 1),
                                        vueExports.createVNode(vueExports.unref(_sfc_main$d), { value: "Проверяем отзыв на соответствие правилам платформы и законодательству. Это займет не более 24 часов." }, {
                                          default: vueExports.withCtx(() => [
                                            vueExports.createVNode(vueExports.unref(IconTooltip), { class: "hover:text-additional transition-colors" })
                                          ]),
                                          _: 1
                                        })
                                      ])) : review.status === "Активен" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                        key: 1,
                                        class: "flex items-center gap-4"
                                      }, [
                                        review.likes_count ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                          key: 0,
                                          class: "flex items-center gap-2"
                                        }, [
                                          vueExports.createVNode("span", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString(review.likes_count) + " полезно", 1),
                                          vueExports.createVNode(vueExports.unref(IconThumbsUp), { class: "text-additional h-5 w-5" })
                                        ])) : vueExports.createCommentVNode("", true),
                                        vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                                          vueExports.createVNode("span", { class: "text-complimentary-reg md:text-mob-small-medium text-ready-green" }, "Опубликован"),
                                          vueExports.createVNode(vueExports.unref(IconCheckCircle), { class: "text-ready-green h-5 w-5" })
                                        ])
                                      ])) : review.status === "Отклонён" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 2 }, [
                                        vueExports.createVNode("p", { class: "text-complimentary-reg md:text-mob-small-medium text-additional mr-2" }, vueExports.toDisplayString(review.status), 1),
                                        vueExports.createVNode(vueExports.unref(IconTooltip))
                                      ], 64)) : vueExports.createCommentVNode("", true)
                                    ])
                                  ]),
                                  vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg break-all" }, vueExports.toDisplayString(review.text), 1),
                                  review.images.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: 0,
                                    class: "flex items-center gap-2"
                                  }, [
                                    (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(review.images, (image) => {
                                      return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$f), {
                                        key: image.id,
                                        src: image == null ? void 0 : image.path,
                                        alt: "Изображение товара",
                                        width: vueExports.unref(isMobile) ? "74px" : "90px",
                                        height: vueExports.unref(isMobile) ? "64px" : "100px",
                                        class: "bg-filling shrink-0 rounded-lg",
                                        "img-classes": "rounded-lg bg-filling"
                                      }, null, 8, ["src", "width", "height"]);
                                    }), 128))
                                  ])) : vueExports.createCommentVNode("", true),
                                  review.status !== "Активен" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: 1,
                                    class: "flex items-center gap-2"
                                  }, [
                                    vueExports.createVNode(_sfc_main$g, {
                                      label: "Редактировать отзыв",
                                      rounded: "",
                                      variant: "outlined",
                                      size: "small",
                                      onClick: ($event) => openEditModal(review)
                                    }, null, 8, ["onClick"]),
                                    vueExports.createVNode(_sfc_main$g, {
                                      label: "Удалить отзыв",
                                      class: "danger-button !border-[#F04E27]",
                                      rounded: "",
                                      variant: "outlined",
                                      size: "small",
                                      onClick: ($event) => deleteReview(review.id)
                                    }, null, 8, ["onClick"])
                                  ])) : vueExports.createCommentVNode("", true),
                                  review.answer ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                    key: 2,
                                    class: "bg-input flex flex-col gap-0.5 rounded-lg p-3"
                                  }, [
                                    vueExports.createVNode("h5", { class: "text-mob-small-reg text-additional" }, "Ответ магазина"),
                                    vueExports.createVNode("p", { class: "text-mob-small-reg" }, vueExports.toDisplayString(review.answer), 1)
                                  ])) : vueExports.createCommentVNode("", true)
                                ]);
                              }), 128))
                            ])
                          ])) : (vueExports.openBlock(), vueExports.createBlock("section", {
                            key: 2,
                            class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                          }, [
                            vueExports.createVNode("div", { class: "flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15" }, [
                              vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                src: "/images/profile/productReviewEmpty.webp",
                                alt: "heart",
                                class: "-mt-6 lg:ml-4 xl:scale-115",
                                height: vueExports.unref(isMobile) ? "100px" : "140px"
                              }, null, 8, ["height"]),
                              vueExports.createVNode("div", { class: "flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]" }, [
                                vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "Ждём ваши оценки и отзывы"),
                                vueExports.createVNode(vueExports.unref(link_default), {
                                  href: vueExports.unref(T)("catalog.index")
                                }, {
                                  default: vueExports.withCtx(() => [
                                    vueExports.createVNode(vueExports.unref(VButton), {
                                      label: "В каталог",
                                      class: "w-fit max-md:mt-6 md:mt-8"
                                    })
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ])
                            ])
                          ])),
                          vueExports.createVNode(vueExports.unref(_sfc_main$h), {
                            modelValue: currentPage.value,
                            "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                            "per-page": perPage,
                            "total-count": _ctx.recipesReviewed.length,
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
              vueExports.createVNode(_sfc_main$9, null, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_sfc_main$a, {
                    value: "0",
                    class: "flex basis-1/2 items-center justify-center gap-2"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(vueExports.unref(IconShoppingBag)),
                      vueExports.createVNode("span", null, "Товары")
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_sfc_main$a, {
                    value: "1",
                    class: "flex basis-1/2 items-center justify-center gap-2"
                  }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode(vueExports.unref(IconBookOpen)),
                      vueExports.createVNode("span", null, "Рецепты")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              vueExports.createVNode(_sfc_main$b, null, {
                default: vueExports.withCtx(() => [
                  vueExports.createVNode(_sfc_main$c, { value: "0" }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "flex flex-col gap-6 md:gap-8" }, [
                        _ctx.productsPendingReview.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                          key: 0,
                          class: "flex flex-col gap-4"
                        }, [
                          vueExports.createVNode("div", { class: "flex flex-col gap-2" }, [
                            vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                              vueExports.createVNode("h2", { class: "text-small-medium" }, "Ждут отзыва"),
                              vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                                vueExports.createVNode(vueExports.unref(IconFlash), { class: "h-5 w-5" }),
                                vueExports.createVNode("span", { class: "text-subsidiary-medium md:text-mob-small-bold" }, "Получайте бонусы за отзывы!")
                              ])
                            ]),
                            vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                              vueExports.createVNode("p", { class: "text-mob-small-reg md:text-small-reg text-additional font-normal" }, " Доступно отзывов в этом месяце: " + vueExports.toDisplayString(_ctx.reviewsLeft) + " из 3 ", 1),
                              vueExports.createVNode(vueExports.unref(_sfc_main$d), { value: "Можно оставить до 3 отзывов в месяц" }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(IconTooltip), { class: "text-additional hover:text-primary transition-colors" })
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _ctx.canLeaveReview ? (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 0,
                            class: "w-full"
                          }, [
                            vueExports.createVNode(vueExports.unref(_sfc_main$e), {
                              slides: _ctx.productsPendingReview,
                              "slider-options": {
                                allowTouchMove: true,
                                breakpoints: {
                                  0: { slidesPerView: 1, spaceBetween: 8 },
                                  640: { slidesPerView: 2, spaceBetween: 8 },
                                  1485: { slidesPerView: 3, spaceBetween: 12 }
                                }
                              }
                            }, {
                              slide: vueExports.withCtx(({ slide }) => {
                                var _a2;
                                return [
                                  vueExports.createVNode("article", {
                                    class: "border-filling rounded-20 flex h-full cursor-pointer items-start gap-2 border p-2 transition-all duration-200 ease-in hover:border-white hover:shadow-[0_1px_5px_0_rgba(0,0,0,0.1)] md:p-4",
                                    onClick: ($event) => openAddModal(slide)
                                  }, [
                                    ((_a2 = slide.item.images[0]) == null ? void 0 : _a2.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$f), {
                                      key: 0,
                                      src: slide.item.images[0].path,
                                      alt: "Изображение товара",
                                      width: vueExports.unref(isMobile) ? "74px" : "116px",
                                      height: vueExports.unref(isMobile) ? "100%" : "80px",
                                      class: "bg-filling shrink-0 rounded-lg max-md:rounded-xl max-sm:h-full",
                                      "img-classes": "rounded-lg"
                                    }, null, 8, ["src", "width", "height"])) : vueExports.createCommentVNode("", true),
                                    vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                                      vueExports.createVNode("h4", { class: "text-mob-small-bold line-clamp-2" }, vueExports.toDisplayString(slide.item.name), 1),
                                      vueExports.createVNode("p", { class: "text-mob-small-medium" }, [
                                        vueExports.createVNode("span", { class: "text-subsidiary-medium text-additional" }, "Дата доставки:"),
                                        vueExports.createTextVNode(" 31.06.2025")
                                      ]),
                                      vueExports.createVNode(_sfc_main$4, {
                                        size: "large",
                                        readonly: ""
                                      })
                                    ])
                                  ], 8, ["onClick"])
                                ];
                              }),
                              _: 1
                            }, 8, ["slides"])
                          ])) : (vueExports.openBlock(), vueExports.createBlock("div", {
                            key: 1,
                            class: "bg-light-gray mt-2 flex flex-col items-center gap-6 rounded-[40px] max-[1120px]:p-6 min-[1120px]:pl-40 md:flex-row lg:gap-15"
                          }, [
                            vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                              src: "/images/ReviewsLeft.png",
                              alt: "Лимит исчерпан",
                              class: "max-md:-mt-10 md:-my-4",
                              "img-classes": "max-h-[100px] md:max-h-[180px] "
                            }),
                            vueExports.createVNode("div", { class: "text-center md:text-left" }, [
                              vueExports.createVNode("h2", { class: "text-default-medium md:text-heavy-medium" }, "Лимит отзывов исчерпан"),
                              vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg mt-2" }, "Новые отзывы можно будет оставить с 1 числа следующего месяца")
                            ])
                          ]))
                        ])) : vueExports.createCommentVNode("", true),
                        _ctx.productsReviewed.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                          key: 1,
                          class: "flex flex-col gap-4"
                        }, [
                          vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                            vueExports.createVNode("h2", {
                              ref: "productsReviewedHeader",
                              class: "text-small-medium"
                            }, "Вы уже оценили", 512),
                            vueExports.createVNode("div", { class: "text-mob-small-medium flex items-center gap-3" }, [
                              vueExports.createVNode("span", { class: "text-mob-small-reg text-additional" }, "Сортировка:"),
                              vueExports.createVNode("button", {
                                class: "flex cursor-pointer items-center gap-1 transition-all duration-200 ease-in-out",
                                onClick: sortByDate
                              }, [
                                vueExports.createVNode("span", null, "по дате"),
                                currentSortBy.value === "created_at" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(IconArrowsDownUp), {
                                  key: 0,
                                  class: { "rotate-180": currentSortDir.value === "asc" }
                                }, null, 8, ["class"])) : vueExports.createCommentVNode("", true)
                              ])
                            ])
                          ]),
                          vueExports.createVNode("div", null, [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedProducts.value, (review) => {
                              var _a2, _b2;
                              return vueExports.openBlock(), vueExports.createBlock("article", {
                                key: review.id,
                                class: "border-b-stroke flex flex-col gap-2 border-b py-3"
                              }, [
                                vueExports.createVNode("div", { class: "flex flex-col-reverse items-start justify-between gap-2 md:flex-row" }, [
                                  vueExports.createVNode("div", { class: "flex flex-1 items-start gap-2" }, [
                                    ((_a2 = review.product_images) == null ? void 0 : _a2.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$f), {
                                      key: 0,
                                      src: (_b2 = review.product_images) == null ? void 0 : _b2.path,
                                      alt: "Изображение товара",
                                      width: vueExports.unref(isMobile) ? "106px" : "116px",
                                      height: vueExports.unref(isMobile) ? "74px" : "80px",
                                      class: "bg-filling shrink-0 rounded-lg",
                                      "img-classes": "rounded-lg bg-filling"
                                    }, null, 8, ["src", "width", "height"])) : vueExports.createCommentVNode("", true),
                                    vueExports.createVNode("div", { class: "flex w-full flex-col gap-0.5" }, [
                                      review.item_type === "Combo\\Models\\Combo" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(link_default), {
                                        key: 0,
                                        href: vueExports.unref(T)("combo.show", review.id)
                                      }, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("h4", { class: "text-mob-small-medium line-clamp-2 w-full" }, vueExports.toDisplayString(review.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["href"])) : (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(link_default), {
                                        key: 1,
                                        href: vueExports.unref(T)("catalog.product.show", review.slug)
                                      }, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode("h4", { class: "text-mob-small-medium line-clamp-2 w-full" }, vueExports.toDisplayString(review.name), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["href"])),
                                      vueExports.createVNode("p", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString(review.created_at), 1),
                                      vueExports.createVNode(_sfc_main$4, {
                                        "default-value": review.rating,
                                        readonly: ""
                                      }, null, 8, ["default-value"])
                                    ])
                                  ]),
                                  vueExports.createVNode("div", { class: "flex items-center justify-end max-md:w-full" }, [
                                    review.status === "На модерации" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 0,
                                      class: "flex items-center"
                                    }, [
                                      vueExports.createVNode("p", { class: "text-complimentary-reg md:text-mob-small-medium mr-2" }, vueExports.toDisplayString(review.status), 1),
                                      vueExports.createVNode(vueExports.unref(_sfc_main$d), { value: "Проверяем отзыв на соответствие правилам платформы и законодательству. Это займет не более 24 часов." }, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode(vueExports.unref(IconTooltip), { class: "hover:text-additional transition-colors" })
                                        ]),
                                        _: 1
                                      })
                                    ])) : review.status === "Активен" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 1,
                                      class: "flex items-center gap-4"
                                    }, [
                                      review.likes_count ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                        key: 0,
                                        class: "flex items-center gap-2"
                                      }, [
                                        vueExports.createVNode("span", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString(review.likes_count) + " полезно", 1),
                                        vueExports.createVNode(vueExports.unref(IconThumbsUp), { class: "text-additional h-5 w-5" })
                                      ])) : vueExports.createCommentVNode("", true),
                                      vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                                        vueExports.createVNode("span", { class: "text-complimentary-reg md:text-mob-small-medium text-ready-green" }, "Опубликован"),
                                        vueExports.createVNode(vueExports.unref(IconCheckCircle), { class: "text-ready-green h-5 w-5" })
                                      ]),
                                      review.bonus_awarded ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                        key: 1,
                                        class: "text-default text-complimentary-reg md:text-mob-small-reg"
                                      }, [
                                        vueExports.createVNode("span", { class: "text-complimentary-bold md:text-mob-small-medium" }, "+ " + vueExports.toDisplayString(_ctx.reviewBonusAmount), 1),
                                        vueExports.createTextVNode(" бонусов ")
                                      ])) : vueExports.createCommentVNode("", true)
                                    ])) : review.status === "Отклонён" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 2 }, [
                                      vueExports.createVNode("p", { class: "text-complimentary-reg md:text-mob-small-medium text-additional mr-2" }, vueExports.toDisplayString(review.status), 1),
                                      vueExports.createVNode(vueExports.unref(IconTooltip))
                                    ], 64)) : vueExports.createCommentVNode("", true)
                                  ])
                                ]),
                                vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(review.text), 1),
                                review.images.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "flex items-center gap-2"
                                }, [
                                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(review.images, (image) => {
                                    return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$f), {
                                      key: image.id,
                                      src: image == null ? void 0 : image.path,
                                      alt: "Изображение товара",
                                      width: vueExports.unref(isMobile) ? "54px" : "90px",
                                      height: vueExports.unref(isMobile) ? "60px" : "100px",
                                      class: "bg-filling shrink-0 rounded-lg",
                                      "img-classes": "rounded-lg bg-filling"
                                    }, null, 8, ["src", "width", "height"]);
                                  }), 128))
                                ])) : vueExports.createCommentVNode("", true),
                                review.status !== "Активен" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 1,
                                  class: "flex items-center gap-2"
                                }, [
                                  vueExports.createVNode(_sfc_main$g, {
                                    label: "Редактировать отзыв",
                                    rounded: "",
                                    variant: "outlined",
                                    size: "small",
                                    onClick: ($event) => openEditModal(review)
                                  }, null, 8, ["onClick"]),
                                  vueExports.createVNode(_sfc_main$g, {
                                    label: "Удалить отзыв",
                                    class: "danger-button !border-[#F04E27]",
                                    rounded: "",
                                    variant: "outlined",
                                    size: "small",
                                    onClick: ($event) => deleteReview(review.id)
                                  }, null, 8, ["onClick"])
                                ])) : vueExports.createCommentVNode("", true),
                                review.answer ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 2,
                                  class: "bg-input flex flex-col gap-0.5 rounded-lg p-3"
                                }, [
                                  vueExports.createVNode("h5", { class: "text-subsidiary-medium md:text-mob-small-reg text-additional" }, "Ответ магазина"),
                                  vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg" }, vueExports.toDisplayString(review.answer), 1)
                                ])) : vueExports.createCommentVNode("", true)
                              ]);
                            }), 128))
                          ])
                        ])) : (vueExports.openBlock(), vueExports.createBlock("section", {
                          key: 2,
                          class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                        }, [
                          vueExports.createVNode("div", { class: "flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15" }, [
                            vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                              src: "/images/profile/productReviewEmpty.webp",
                              alt: "heart",
                              class: "-mt-6 lg:ml-4 xl:scale-115",
                              height: vueExports.unref(isMobile) ? "100px" : "140px"
                            }, null, 8, ["height"]),
                            vueExports.createVNode("div", { class: "flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]" }, [
                              vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "Ждём ваши оценки и отзывы"),
                              vueExports.createVNode(vueExports.unref(link_default), {
                                href: vueExports.unref(T)("catalog.index")
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(VButton), {
                                    label: "В каталог",
                                    class: "w-fit max-md:mt-6 md:mt-8"
                                  })
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ])
                        ])),
                        vueExports.createVNode(vueExports.unref(_sfc_main$h), {
                          modelValue: currentPage.value,
                          "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                          "per-page": perPage,
                          "total-count": _ctx.productsReviewed.length,
                          class: "mx-auto mt-8 justify-center"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "total-count"])
                      ])
                    ]),
                    _: 1
                  }),
                  vueExports.createVNode(_sfc_main$c, { value: "1" }, {
                    default: vueExports.withCtx(() => [
                      vueExports.createVNode("div", { class: "flex flex-col gap-8" }, [
                        _ctx.recipesPendingReview.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                          key: 0,
                          class: "flex flex-col gap-4"
                        }, [
                          vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                            vueExports.createVNode("h2", { class: "text-small-medium" }, "Любимые рецепты")
                          ]),
                          vueExports.createVNode("div", { class: "w-full" }, [
                            vueExports.createVNode(vueExports.unref(_sfc_main$e), {
                              slides: _ctx.recipesPendingReview,
                              "slider-options": {
                                allowTouchMove: true,
                                breakpoints: {
                                  0: { slidesPerView: 1, spaceBetween: 8 },
                                  1280: { slidesPerView: 3, spaceBetween: 12 }
                                }
                              }
                            }, {
                              slide: vueExports.withCtx(({ slide }) => {
                                var _a2, _b2;
                                return [
                                  vueExports.createVNode("article", {
                                    class: "border-filling rounded-20 flex h-full cursor-pointer items-start gap-2 border p-2 transition-all duration-200 ease-in hover:border-white hover:shadow-[0_1px_5px_0_rgba(0,0,0,0.1)] md:p-4",
                                    onClick: ($event) => openAddModal(slide)
                                  }, [
                                    ((_a2 = slide.image) == null ? void 0 : _a2.path) ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$f), {
                                      key: 0,
                                      src: (_b2 = slide.image) == null ? void 0 : _b2.path,
                                      alt: "Изображение товара",
                                      width: vueExports.unref(isMobile) ? "74px" : "116px",
                                      height: vueExports.unref(isMobile) ? "97px" : "80px",
                                      class: "bg-filling shrink-0 rounded-xl max-sm:h-full md:rounded-lg",
                                      "img-classes": "rounded-lg"
                                    }, null, 8, ["src", "width", "height"])) : vueExports.createCommentVNode("", true),
                                    vueExports.createVNode("div", { class: "flex h-full flex-col gap-0.5" }, [
                                      vueExports.createVNode("h4", { class: "text-mob-small-bold line-clamp-2" }, vueExports.toDisplayString(slide.title), 1),
                                      vueExports.createVNode("p", { class: "text-complimentary-reg line-clamp-2" }, vueExports.toDisplayString(slide.mini_description), 1),
                                      vueExports.createVNode(_sfc_main$4, {
                                        size: "large",
                                        readonly: ""
                                      })
                                    ])
                                  ], 8, ["onClick"])
                                ];
                              }),
                              _: 1
                            }, 8, ["slides"])
                          ])
                        ])) : vueExports.createCommentVNode("", true),
                        _ctx.recipesReviewed.length ? (vueExports.openBlock(), vueExports.createBlock("section", {
                          key: 1,
                          class: "flex flex-col gap-4"
                        }, [
                          vueExports.createVNode("div", { class: "flex items-center justify-between" }, [
                            vueExports.createVNode("h2", { class: "text-small-medium" }, "Вы уже оценили"),
                            vueExports.createVNode("div", { class: "text-mob-small-medium flex items-center gap-3" }, [
                              vueExports.createVNode("span", { class: "text-mob-small-reg text-additional" }, "Сортировка:"),
                              vueExports.createVNode("button", {
                                class: "flex cursor-pointer items-center gap-1 transition-all duration-200 ease-in-out",
                                onClick: sortByDate
                              }, [
                                vueExports.createVNode("span", null, "по дате"),
                                currentSortBy.value === "created_at" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.unref(IconArrowsDownUp), {
                                  key: 0,
                                  class: { "rotate-180": currentSortDir.value === "asc" }
                                }, null, 8, ["class"])) : vueExports.createCommentVNode("", true)
                              ])
                            ])
                          ]),
                          vueExports.createVNode("div", null, [
                            (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(paginatedRecipes.value, (review) => {
                              var _a2;
                              return vueExports.openBlock(), vueExports.createBlock("article", {
                                key: review.id,
                                class: "border-b-stroke flex flex-col gap-2 border-b py-3"
                              }, [
                                vueExports.createVNode("div", { class: "flex flex-col-reverse items-start justify-between md:flex-row" }, [
                                  vueExports.createVNode("div", { class: "flex flex-1 items-start gap-2" }, [
                                    vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                                      src: (_a2 = review == null ? void 0 : review.product_images) == null ? void 0 : _a2.path,
                                      alt: "Изображение товара",
                                      width: vueExports.unref(isMobile) ? "107px" : "116px",
                                      height: vueExports.unref(isMobile) ? "74px" : "80px",
                                      class: "bg-filling shrink-0 rounded-lg",
                                      "img-classes": "rounded-lg bg-filling"
                                    }, null, 8, ["src", "width", "height"]),
                                    vueExports.createVNode("div", { class: "flex flex-col gap-0.5" }, [
                                      vueExports.createVNode("h4", { class: "text-mob-small-medium max-md:line-clamp-2" }, vueExports.toDisplayString(review.name), 1),
                                      vueExports.createVNode("p", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString(review.created_at), 1),
                                      vueExports.createVNode(_sfc_main$4, {
                                        "default-value": review.rating,
                                        readonly: ""
                                      }, null, 8, ["default-value"])
                                    ])
                                  ]),
                                  vueExports.createVNode("div", { class: "flex items-center justify-end max-md:w-full" }, [
                                    review.status === "На модерации" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 0,
                                      class: "flex items-center"
                                    }, [
                                      vueExports.createVNode("p", { class: "text-complimentary-reg md:text-mob-small-medium mr-2" }, vueExports.toDisplayString(review.status), 1),
                                      vueExports.createVNode(vueExports.unref(_sfc_main$d), { value: "Проверяем отзыв на соответствие правилам платформы и законодательству. Это займет не более 24 часов." }, {
                                        default: vueExports.withCtx(() => [
                                          vueExports.createVNode(vueExports.unref(IconTooltip), { class: "hover:text-additional transition-colors" })
                                        ]),
                                        _: 1
                                      })
                                    ])) : review.status === "Активен" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                      key: 1,
                                      class: "flex items-center gap-4"
                                    }, [
                                      review.likes_count ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                        key: 0,
                                        class: "flex items-center gap-2"
                                      }, [
                                        vueExports.createVNode("span", { class: "text-complimentary-reg text-additional" }, vueExports.toDisplayString(review.likes_count) + " полезно", 1),
                                        vueExports.createVNode(vueExports.unref(IconThumbsUp), { class: "text-additional h-5 w-5" })
                                      ])) : vueExports.createCommentVNode("", true),
                                      vueExports.createVNode("div", { class: "flex items-center gap-2" }, [
                                        vueExports.createVNode("span", { class: "text-complimentary-reg md:text-mob-small-medium text-ready-green" }, "Опубликован"),
                                        vueExports.createVNode(vueExports.unref(IconCheckCircle), { class: "text-ready-green h-5 w-5" })
                                      ])
                                    ])) : review.status === "Отклонён" ? (vueExports.openBlock(), vueExports.createBlock(vueExports.Fragment, { key: 2 }, [
                                      vueExports.createVNode("p", { class: "text-complimentary-reg md:text-mob-small-medium text-additional mr-2" }, vueExports.toDisplayString(review.status), 1),
                                      vueExports.createVNode(vueExports.unref(IconTooltip))
                                    ], 64)) : vueExports.createCommentVNode("", true)
                                  ])
                                ]),
                                vueExports.createVNode("p", { class: "text-subsidiary-reg md:text-mob-small-reg break-all" }, vueExports.toDisplayString(review.text), 1),
                                review.images.length ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 0,
                                  class: "flex items-center gap-2"
                                }, [
                                  (vueExports.openBlock(true), vueExports.createBlock(vueExports.Fragment, null, vueExports.renderList(review.images, (image) => {
                                    return vueExports.openBlock(), vueExports.createBlock(vueExports.unref(_sfc_main$f), {
                                      key: image.id,
                                      src: image == null ? void 0 : image.path,
                                      alt: "Изображение товара",
                                      width: vueExports.unref(isMobile) ? "74px" : "90px",
                                      height: vueExports.unref(isMobile) ? "64px" : "100px",
                                      class: "bg-filling shrink-0 rounded-lg",
                                      "img-classes": "rounded-lg bg-filling"
                                    }, null, 8, ["src", "width", "height"]);
                                  }), 128))
                                ])) : vueExports.createCommentVNode("", true),
                                review.status !== "Активен" ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 1,
                                  class: "flex items-center gap-2"
                                }, [
                                  vueExports.createVNode(_sfc_main$g, {
                                    label: "Редактировать отзыв",
                                    rounded: "",
                                    variant: "outlined",
                                    size: "small",
                                    onClick: ($event) => openEditModal(review)
                                  }, null, 8, ["onClick"]),
                                  vueExports.createVNode(_sfc_main$g, {
                                    label: "Удалить отзыв",
                                    class: "danger-button !border-[#F04E27]",
                                    rounded: "",
                                    variant: "outlined",
                                    size: "small",
                                    onClick: ($event) => deleteReview(review.id)
                                  }, null, 8, ["onClick"])
                                ])) : vueExports.createCommentVNode("", true),
                                review.answer ? (vueExports.openBlock(), vueExports.createBlock("div", {
                                  key: 2,
                                  class: "bg-input flex flex-col gap-0.5 rounded-lg p-3"
                                }, [
                                  vueExports.createVNode("h5", { class: "text-mob-small-reg text-additional" }, "Ответ магазина"),
                                  vueExports.createVNode("p", { class: "text-mob-small-reg" }, vueExports.toDisplayString(review.answer), 1)
                                ])) : vueExports.createCommentVNode("", true)
                              ]);
                            }), 128))
                          ])
                        ])) : (vueExports.openBlock(), vueExports.createBlock("section", {
                          key: 2,
                          class: "bg-light-gray mt-6 flex items-center justify-center rounded-[40px] md:mt-15"
                        }, [
                          vueExports.createVNode("div", { class: "flex flex-col gap-6 max-md:items-center md:flex-row lg:gap-15" }, [
                            vueExports.createVNode(vueExports.unref(_sfc_main$f), {
                              src: "/images/profile/productReviewEmpty.webp",
                              alt: "heart",
                              class: "-mt-6 lg:ml-4 xl:scale-115",
                              height: vueExports.unref(isMobile) ? "100px" : "140px"
                            }, null, 8, ["height"]),
                            vueExports.createVNode("div", { class: "flex h-full flex-col justify-between py-4 max-md:items-center lg:max-w-[620px]" }, [
                              vueExports.createVNode("p", { class: "text-default-medium md:text-heavy-medium max-md:text-center" }, "Ждём ваши оценки и отзывы"),
                              vueExports.createVNode(vueExports.unref(link_default), {
                                href: vueExports.unref(T)("catalog.index")
                              }, {
                                default: vueExports.withCtx(() => [
                                  vueExports.createVNode(vueExports.unref(VButton), {
                                    label: "В каталог",
                                    class: "w-fit max-md:mt-6 md:mt-8"
                                  })
                                ]),
                                _: 1
                              }, 8, ["href"])
                            ])
                          ])
                        ])),
                        vueExports.createVNode(vueExports.unref(_sfc_main$h), {
                          modelValue: currentPage.value,
                          "onUpdate:modelValue": [($event) => currentPage.value = $event, onPageUpdate],
                          "per-page": perPage,
                          "total-count": _ctx.recipesReviewed.length,
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
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$i), {
        visible: isAddModalOpen.value,
        "onUpdate:visible": ($event) => isAddModalOpen.value = $event,
        item: currentItem.value
      }, null, _parent));
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
        visible: isEditModalOpen.value,
        "onUpdate:visible": ($event) => isEditModalOpen.value = $event,
        review: currentReview.value
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/pages/profile/profile-review/ui/ProfileReview.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProfileReview = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ba92c3e4"]]);
export {
  ProfileReview as default
};
