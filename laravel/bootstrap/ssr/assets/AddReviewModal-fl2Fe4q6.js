import { v as vueExports, u as useScreenSize, s as serverRenderer_cjs_prodExports, _ as _sfc_main$2, E as IconPlus, c as useForm, d as _sfc_main$3, e as _sfc_main$4, o as _sfc_main$5, i as _sfc_main$6, a as VButton } from "../ssr.js";
import { Form } from "@primevue/forms";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { z } from "zod";
const _sfc_main$1 = /* @__PURE__ */ vueExports.defineComponent({
  __name: "VImageUploader",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    max: {}
  }, {
    "modelValue": { required: true },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const selectedImages = vueExports.useModel(__props, "modelValue");
    const { isMobile } = useScreenSize();
    vueExports.useTemplateRef("fileInput");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer_cjs_prodExports.ssrRenderAttrs(vueExports.mergeProps({ class: "w-full" }, _attrs))}><span class="text-subsidiary-reg md:text-mob-small-reg">Добавьте фото</span><div class="mt-1 grid grid-cols-4 gap-2"><!--[-->`);
      serverRenderer_cjs_prodExports.ssrRenderList(selectedImages.value, (img, index) => {
        _push(`<div class="relative">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$2), {
          src: img.url,
          alt: "Предпросмотр фото",
          width: vueExports.unref(isMobile) ? "71px" : "90px",
          height: vueExports.unref(isMobile) ? "100px" : "100px",
          class: "bg-filling shrink-0 rounded-lg",
          "img-classes": "rounded-lg bg-filling object-cover"
        }, null, _parent));
        _push(`<button class="absolute top-1 right-1 z-10 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPlus), { class: "text-text h-4 w-4 rotate-45" }, null, _parent));
        _push(`</button></div>`);
      });
      _push(`<!--]-->`);
      if (selectedImages.value.length < (_ctx.max ?? 8)) {
        _push(`<div class="bg-input flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl p-3 md:p-4" style="${serverRenderer_cjs_prodExports.ssrRenderStyle({ width: vueExports.unref(isMobile) ? "71px" : "90px", height: vueExports.unref(isMobile) ? "100px" : "100px" })}">`);
        _push(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(IconPlus), { class: "h-5 w-5" }, null, _parent));
        _push(`<div class="text-subsidiary-reg flex flex-col gap-0.5 text-center"><p>Фото</p><p class="text-complimentary-reg text-additional">до ${serverRenderer_cjs_prodExports.ssrInterpolate((_ctx.max ?? 8) - selectedImages.value.length)} шт</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><input type="file" multiple accept="image/*" class="hidden"></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/shared/ui/image-uploader/VImageUploader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const addReviewSchema = z.object({
  item_type: z.string(),
  item_id: z.number(),
  rating: z.preprocess(
    (val) => val === null ? void 0 : val,
    z.number({ required_error: "Поставьте рейтинг продукту" }).min(1, "Оцените товар").max(5)
  ),
  text: z.string({ required_error: "Обязательно поле" }).min(50, "Минимум 50 символов"),
  images: z.array(z.instanceof(File)).max(8, "Максимум 8 фото")
});
const addReviewResolver = zodResolver(addReviewSchema);
const _sfc_main = /* @__PURE__ */ vueExports.defineComponent({
  __name: "AddReviewModal",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vueExports.mergeModels({
    item: {}
  }, {
    "visible": { type: Boolean, ...{ required: true } },
    "visibleModifiers": {},
    "numberOfStars": { required: false, default: 0 },
    "numberOfStarsModifiers": {}
  }),
  emits: ["update:visible", "update:numberOfStars"],
  setup(__props) {
    const props = __props;
    const visible = vueExports.useModel(__props, "visible");
    const numberOfStars = vueExports.useModel(__props, "numberOfStars");
    const profileAddReviewForm = useForm({
      item_id: 0,
      item_type: "Product",
      rating: 0,
      text: "",
      images: []
    });
    const selectedImages = vueExports.ref([]);
    vueExports.watch(visible, (newVal) => {
      var _a;
      if (newVal && props.item) {
        profileAddReviewForm.item_id = props.item.id;
        profileAddReviewForm.item_type = (_a = props == null ? void 0 : props.item) == null ? void 0 : _a.type;
      }
    });
    vueExports.watch(numberOfStars, (val) => {
      profileAddReviewForm.rating = val;
    });
    const onSubmitAddReview = ({ valid }) => {
      if (valid) {
        profileAddReviewForm.images = selectedImages.value.map((i) => i.file);
        profileAddReviewForm.post(route("user.profile.reviews.store"), {
          preserveScroll: true,
          preserveState: true,
          onSuccess: () => {
            visible.value = false;
            resetImages();
          }
        });
      }
    };
    const resetImages = () => {
      selectedImages.value.forEach((img) => URL.revokeObjectURL(img.url));
      selectedImages.value = [];
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$3, vueExports.mergeProps({
        visible: visible.value,
        "onUpdate:visible": ($event) => visible.value = $event,
        draggable: false,
        modal: "",
        class: "md:w-110",
        onHide: ($event) => {
          vueExports.unref(profileAddReviewForm).reset();
          resetImages();
        }
      }, _attrs), {
        default: vueExports.withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class=""${_scopeId}><div${_scopeId}><h2 class="text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0"${_scopeId}>Оцените ${serverRenderer_cjs_prodExports.ssrInterpolate(((_a = _ctx.item) == null ? void 0 : _a.type) === "Recipe" ? "рецепт" : "товар")}</h2></div>`);
            _push2(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(Form), {
              resolver: vueExports.unref(addReviewResolver),
              "validate-on-blur": "",
              "initial-values": vueExports.unref(profileAddReviewForm),
              class: "mt-2 flex flex-col gap-6",
              onSubmit: onSubmitAddReview
            }, {
              default: vueExports.withCtx(($form, _push3, _parent3, _scopeId2) => {
                var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
                if (_push3) {
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
                    class: "flex w-full flex-col items-center justify-center",
                    error: ((_b2 = (_a2 = $form.rating) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message) || vueExports.unref(profileAddReviewForm).errors.rating
                  }, {
                    default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$5, {
                          modelValue: vueExports.unref(profileAddReviewForm).rating,
                          "onUpdate:modelValue": ($event) => vueExports.unref(profileAddReviewForm).rating = $event,
                          name: "rating",
                          size: "large"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(_sfc_main$5, {
                            modelValue: vueExports.unref(profileAddReviewForm).rating,
                            "onUpdate:modelValue": ($event) => vueExports.unref(profileAddReviewForm).rating = $event,
                            name: "rating",
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
                    class: "w-full",
                    error: ((_d = (_c = $form.images) == null ? void 0 : _c.error) == null ? void 0 : _d.message) || vueExports.unref(profileAddReviewForm).errors.images
                  }, {
                    default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$1), {
                          modelValue: selectedImages.value,
                          "onUpdate:modelValue": ($event) => selectedImages.value = $event,
                          max: 8
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode(vueExports.unref(_sfc_main$1), {
                            modelValue: selectedImages.value,
                            "onUpdate:modelValue": ($event) => selectedImages.value = $event,
                            max: 8
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(_sfc_main$4), {
                    class: "w-full text-subsidiary-reg md:text-mob-small-reg",
                    error: ((_f = (_e = $form.text) == null ? void 0 : _e.error) == null ? void 0 : _f.message) || vueExports.unref(profileAddReviewForm).errors.text
                  }, {
                    default: vueExports.withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<label for="text"${_scopeId3}>Расскажите впечатления</label>`);
                        _push4(serverRenderer_cjs_prodExports.ssrRenderComponent(_sfc_main$6, {
                          modelValue: vueExports.unref(profileAddReviewForm).text,
                          "onUpdate:modelValue": ($event) => vueExports.unref(profileAddReviewForm).text = $event,
                          name: "text",
                          placeholder: "Комментарий",
                          rows: "4",
                          class: [vueExports.unref(profileAddReviewForm).text ? "bg-transparent" : "bg-light-gray", "mt-1 resize-none"],
                          invalid: !!vueExports.unref(profileAddReviewForm).errors.text
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          vueExports.createVNode("label", { for: "text" }, "Расскажите впечатления"),
                          vueExports.createVNode(_sfc_main$6, {
                            modelValue: vueExports.unref(profileAddReviewForm).text,
                            "onUpdate:modelValue": ($event) => vueExports.unref(profileAddReviewForm).text = $event,
                            name: "text",
                            placeholder: "Комментарий",
                            rows: "4",
                            class: [vueExports.unref(profileAddReviewForm).text ? "bg-transparent" : "bg-light-gray", "mt-1 resize-none"],
                            invalid: !!vueExports.unref(profileAddReviewForm).errors.text
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "invalid"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(serverRenderer_cjs_prodExports.ssrRenderComponent(vueExports.unref(VButton), {
                    label: "Оставить отзыв",
                    class: "w-full",
                    type: "submit"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                      class: "flex w-full flex-col items-center justify-center",
                      error: ((_h = (_g = $form.rating) == null ? void 0 : _g.error) == null ? void 0 : _h.message) || vueExports.unref(profileAddReviewForm).errors.rating
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(_sfc_main$5, {
                          modelValue: vueExports.unref(profileAddReviewForm).rating,
                          "onUpdate:modelValue": ($event) => vueExports.unref(profileAddReviewForm).rating = $event,
                          name: "rating",
                          size: "large"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["error"]),
                    vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                      class: "w-full",
                      error: ((_j = (_i = $form.images) == null ? void 0 : _i.error) == null ? void 0 : _j.message) || vueExports.unref(profileAddReviewForm).errors.images
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode(vueExports.unref(_sfc_main$1), {
                          modelValue: selectedImages.value,
                          "onUpdate:modelValue": ($event) => selectedImages.value = $event,
                          max: 8
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 2
                    }, 1032, ["error"]),
                    vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                      class: "w-full text-subsidiary-reg md:text-mob-small-reg",
                      error: ((_l = (_k = $form.text) == null ? void 0 : _k.error) == null ? void 0 : _l.message) || vueExports.unref(profileAddReviewForm).errors.text
                    }, {
                      default: vueExports.withCtx(() => [
                        vueExports.createVNode("label", { for: "text" }, "Расскажите впечатления"),
                        vueExports.createVNode(_sfc_main$6, {
                          modelValue: vueExports.unref(profileAddReviewForm).text,
                          "onUpdate:modelValue": ($event) => vueExports.unref(profileAddReviewForm).text = $event,
                          name: "text",
                          placeholder: "Комментарий",
                          rows: "4",
                          class: [vueExports.unref(profileAddReviewForm).text ? "bg-transparent" : "bg-light-gray", "mt-1 resize-none"],
                          invalid: !!vueExports.unref(profileAddReviewForm).errors.text
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "invalid"])
                      ]),
                      _: 2
                    }, 1032, ["error"]),
                    vueExports.createVNode(vueExports.unref(VButton), {
                      label: "Оставить отзыв",
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
                  vueExports.createVNode("h2", { class: "text-default-bold md:text-heavy-bold mt-3 text-center md:mt-0" }, "Оцените " + vueExports.toDisplayString(((_b = _ctx.item) == null ? void 0 : _b.type) === "Recipe" ? "рецепт" : "товар"), 1)
                ]),
                vueExports.createVNode(vueExports.unref(Form), {
                  resolver: vueExports.unref(addReviewResolver),
                  "validate-on-blur": "",
                  "initial-values": vueExports.unref(profileAddReviewForm),
                  class: "mt-2 flex flex-col gap-6",
                  onSubmit: onSubmitAddReview
                }, {
                  default: vueExports.withCtx(($form) => {
                    var _a2, _b2, _c, _d, _e, _f;
                    return [
                      vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                        class: "flex w-full flex-col items-center justify-center",
                        error: ((_b2 = (_a2 = $form.rating) == null ? void 0 : _a2.error) == null ? void 0 : _b2.message) || vueExports.unref(profileAddReviewForm).errors.rating
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(_sfc_main$5, {
                            modelValue: vueExports.unref(profileAddReviewForm).rating,
                            "onUpdate:modelValue": ($event) => vueExports.unref(profileAddReviewForm).rating = $event,
                            name: "rating",
                            size: "large"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1032, ["error"]),
                      vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                        class: "w-full",
                        error: ((_d = (_c = $form.images) == null ? void 0 : _c.error) == null ? void 0 : _d.message) || vueExports.unref(profileAddReviewForm).errors.images
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode(vueExports.unref(_sfc_main$1), {
                            modelValue: selectedImages.value,
                            "onUpdate:modelValue": ($event) => selectedImages.value = $event,
                            max: 8
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1032, ["error"]),
                      vueExports.createVNode(vueExports.unref(_sfc_main$4), {
                        class: "w-full text-subsidiary-reg md:text-mob-small-reg",
                        error: ((_f = (_e = $form.text) == null ? void 0 : _e.error) == null ? void 0 : _f.message) || vueExports.unref(profileAddReviewForm).errors.text
                      }, {
                        default: vueExports.withCtx(() => [
                          vueExports.createVNode("label", { for: "text" }, "Расскажите впечатления"),
                          vueExports.createVNode(_sfc_main$6, {
                            modelValue: vueExports.unref(profileAddReviewForm).text,
                            "onUpdate:modelValue": ($event) => vueExports.unref(profileAddReviewForm).text = $event,
                            name: "text",
                            placeholder: "Комментарий",
                            rows: "4",
                            class: [vueExports.unref(profileAddReviewForm).text ? "bg-transparent" : "bg-light-gray", "mt-1 resize-none"],
                            invalid: !!vueExports.unref(profileAddReviewForm).errors.text
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "class", "invalid"])
                        ]),
                        _: 2
                      }, 1032, ["error"]),
                      vueExports.createVNode(vueExports.unref(VButton), {
                        label: "Оставить отзыв",
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vueExports.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/src/features/Review/add-review/ui/AddReviewModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
