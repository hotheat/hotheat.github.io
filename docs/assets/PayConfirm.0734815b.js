import { e as defineComponent, bc as isValidComponentSize, b5 as UPDATE_MODEL_EVENT, r as ref, d as computed, ba as inject, bd as elFormItemKey, b7 as provide, v as reactive, be as toRefs, w as watch, a as onMounted, O as withInstall, P as withNoopInstall, bf as useGlobalConfig, bg as elFormKey, n as nextTick, g as openBlock, A as createElementBlock, k as createBaseVNode, T as withDirectives, bh as vModelRadio, L as normalizeClass, p as renderSlot, J as createTextVNode, D as toDisplayString, K as withModifiers, bb as withKeys, a9 as normalizeStyle, ac as EVENT_CODE, _ as _export_sfc, l as createVNode, u as useI18n, U as UnitName, i as createBlock, j as withCtx, bi as isRef, q as pushScopeId, s as popScopeId, E as useStore, X as ElMessage, M as Mutation, ap as ElDialog, bj as commonjsGlobal, bk as dayjs, au as store, bl as legalNftConverterCNY, bm as legalNftConverterBSV, at as Decimal, I as converterCNY, H as converterBSV, aV as bsv, ar as GetLegalNftDetail, bn as getUserBuyExtraFee, aS as GetBlindBoxSaleDetail, a2 as NFTApiGetNFTDetail, bo as onUnmounted, f as resolveComponent, m as createCommentVNode, C as unref, F as Fragment, B as renderList, a3 as router, a0 as ElLoading, Z as checkSdkStatus, bp as GetLegalBuyNftInfo, bq as Platform, br as checkVersion, bs as BuyBlindBox, bt as BuyBlindBoxStatus, bu as SendRawTx, bv as createNftOrderForLegal, ao as ElMessageBox, bw as ElInput, N as ElButton, bx as GetUserInfo } from './index.3c02df72.js';
import { E as ElSkeletonItem, a as ElSkeleton } from './skeleton.048068e8.js';
import { N as NFTCover } from './Cover.5869eba2.js';
import { B as BsvIcon } from './logo_bsv.3a6b2418.js';
import { s as sandPayTitleIcon } from './sandPay_title.2edd4dc3.js';
import { P as PayPlatform, a as PaySource, o as orderError } from './enum.2d046482.js';

const radioGroupKey = "RadioGroup";

const useRadio = () => {
  const ELEMENT = useGlobalConfig();
  const elForm = inject(elFormKey, {});
  const elFormItem = inject(elFormItemKey, {});
  const radioGroup = inject(radioGroupKey, {});
  const focus = ref(false);
  const isGroup = computed(() => (radioGroup == null ? void 0 : radioGroup.name) === "ElRadioGroup");
  const elFormItemSize = computed(() => elFormItem.size || ELEMENT.size);
  return {
    isGroup,
    focus,
    radioGroup,
    elForm,
    ELEMENT,
    elFormItemSize
  };
};
const useRadioAttrs = (props, { isGroup, radioGroup, elForm, model }) => {
  const isDisabled = computed(() => {
    return isGroup.value ? radioGroup.disabled || props.disabled || elForm.disabled : props.disabled || elForm.disabled;
  });
  const tabIndex = computed(() => {
    return isDisabled.value || isGroup.value && model.value !== props.label ? -1 : 0;
  });
  return {
    isDisabled,
    tabIndex
  };
};

var script$2 = defineComponent({
  name: "ElRadio",
  componentName: "ElRadio",
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: ""
    },
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    disabled: Boolean,
    name: {
      type: String,
      default: ""
    },
    border: Boolean,
    size: {
      type: String,
      validator: isValidComponentSize
    }
  },
  emits: [UPDATE_MODEL_EVENT, "change"],
  setup(props, ctx) {
    const { isGroup, radioGroup, elFormItemSize, ELEMENT, focus, elForm } = useRadio();
    const radioRef = ref();
    const model = computed({
      get() {
        return isGroup.value ? radioGroup.modelValue : props.modelValue;
      },
      set(val) {
        if (isGroup.value) {
          radioGroup.changeEvent(val);
        } else {
          ctx.emit(UPDATE_MODEL_EVENT, val);
        }
        radioRef.value.checked = props.modelValue === props.label;
      }
    });
    const { tabIndex, isDisabled } = useRadioAttrs(props, {
      isGroup,
      radioGroup,
      elForm,
      model
    });
    const radioSize = computed(() => {
      const temRadioSize = props.size || elFormItemSize.value || ELEMENT.size;
      return isGroup.value ? radioGroup.radioGroupSize || temRadioSize : temRadioSize;
    });
    function handleChange() {
      nextTick(() => {
        ctx.emit("change", model.value);
      });
    }
    return {
      focus,
      isGroup,
      isDisabled,
      model,
      tabIndex,
      radioSize,
      handleChange,
      radioRef
    };
  }
});

const _hoisted_1$1$1 = ["aria-checked", "aria-disabled", "tabindex"];
const _hoisted_2$1$1 = /* @__PURE__ */ createBaseVNode("span", { class: "el-radio__inner" }, null, -1);
const _hoisted_3$4 = ["value", "name", "disabled"];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass(["el-radio", {
      [`el-radio--${_ctx.radioSize || ""}`]: _ctx.radioSize,
      "is-disabled": _ctx.isDisabled,
      "is-focus": _ctx.focus,
      "is-bordered": _ctx.border,
      "is-checked": _ctx.model === _ctx.label
    }]),
    role: "radio",
    "aria-checked": _ctx.model === _ctx.label,
    "aria-disabled": _ctx.isDisabled,
    tabindex: _ctx.tabIndex,
    onKeydown: _cache[5] || (_cache[5] = withKeys(withModifiers(($event) => _ctx.model = _ctx.isDisabled ? _ctx.model : _ctx.label, ["stop", "prevent"]), ["space"]))
  }, [
    createBaseVNode("span", {
      class: normalizeClass(["el-radio__input", {
        "is-disabled": _ctx.isDisabled,
        "is-checked": _ctx.model === _ctx.label
      }])
    }, [
      _hoisted_2$1$1,
      withDirectives(createBaseVNode("input", {
        ref: "radioRef",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.model = $event),
        class: "el-radio__original",
        value: _ctx.label,
        type: "radio",
        "aria-hidden": "true",
        name: _ctx.name,
        disabled: _ctx.isDisabled,
        tabindex: "-1",
        onFocus: _cache[1] || (_cache[1] = ($event) => _ctx.focus = true),
        onBlur: _cache[2] || (_cache[2] = ($event) => _ctx.focus = false),
        onChange: _cache[3] || (_cache[3] = (...args) => _ctx.handleChange && _ctx.handleChange(...args))
      }, null, 40, _hoisted_3$4), [
        [vModelRadio, _ctx.model]
      ])
    ], 2),
    createBaseVNode("span", {
      class: "el-radio__label",
      onKeydown: _cache[4] || (_cache[4] = withModifiers(() => {
      }, ["stop"]))
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(_ctx.label), 1)
      ])
    ], 32)
  ], 42, _hoisted_1$1$1);
}

script$2.render = render$2;
script$2.__file = "packages/components/radio/src/radio.vue";

var script$1 = defineComponent({
  name: "ElRadioButton",
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    disabled: Boolean,
    name: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const { isGroup, radioGroup, elFormItemSize, ELEMENT, focus, elForm } = useRadio();
    const size = computed(() => {
      return radioGroup.radioGroupSize || elFormItemSize.value || ELEMENT.size;
    });
    const radioRef = ref();
    const value = computed({
      get() {
        return radioGroup.modelValue;
      },
      set(value2) {
        radioGroup.changeEvent(value2);
        radioRef.value.checked = radioGroup.modelValue === props.label;
      }
    });
    const { isDisabled, tabIndex } = useRadioAttrs(props, {
      model: value,
      elForm,
      radioGroup,
      isGroup
    });
    const activeStyle = computed(() => {
      return {
        backgroundColor: radioGroup.fill || "",
        borderColor: radioGroup.fill || "",
        boxShadow: radioGroup.fill ? `-1px 0 0 0 ${radioGroup.fill}` : "",
        color: radioGroup.textColor || ""
      };
    });
    return {
      isGroup,
      size,
      isDisabled,
      tabIndex,
      value,
      focus,
      activeStyle,
      radioRef
    };
  }
});

const _hoisted_1$4 = ["aria-checked", "aria-disabled", "tabindex"];
const _hoisted_2$4 = ["value", "name", "disabled"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass(["el-radio-button", [
      _ctx.size ? "el-radio-button--" + _ctx.size : "",
      {
        "is-active": _ctx.value === _ctx.label,
        "is-disabled": _ctx.isDisabled,
        "is-focus": _ctx.focus
      }
    ]]),
    role: "radio",
    "aria-checked": _ctx.value === _ctx.label,
    "aria-disabled": _ctx.isDisabled,
    tabindex: _ctx.tabIndex,
    onKeydown: _cache[4] || (_cache[4] = withKeys(withModifiers(($event) => _ctx.value = _ctx.isDisabled ? _ctx.value : _ctx.label, ["stop", "prevent"]), ["space"]))
  }, [
    withDirectives(createBaseVNode("input", {
      ref: "radioRef",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
      class: "el-radio-button__original-radio",
      value: _ctx.label,
      type: "radio",
      name: _ctx.name,
      disabled: _ctx.isDisabled,
      tabindex: "-1",
      onFocus: _cache[1] || (_cache[1] = ($event) => _ctx.focus = true),
      onBlur: _cache[2] || (_cache[2] = ($event) => _ctx.focus = false)
    }, null, 40, _hoisted_2$4), [
      [vModelRadio, _ctx.value]
    ]),
    createBaseVNode("span", {
      class: "el-radio-button__inner",
      style: normalizeStyle(_ctx.value === _ctx.label ? _ctx.activeStyle : null),
      onKeydown: _cache[3] || (_cache[3] = withModifiers(() => {
      }, ["stop"]))
    }, [
      renderSlot(_ctx.$slots, "default", {}, () => [
        createTextVNode(toDisplayString(_ctx.label), 1)
      ])
    ], 36)
  ], 42, _hoisted_1$4);
}

script$1.render = render$1;
script$1.__file = "packages/components/radio/src/radio-button.vue";

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var script = defineComponent({
  name: "ElRadioGroup",
  componentName: "ElRadioGroup",
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: ""
    },
    size: {
      type: String,
      validator: isValidComponentSize
    },
    fill: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: ""
    },
    disabled: Boolean
  },
  emits: [UPDATE_MODEL_EVENT, "change"],
  setup(props, ctx) {
    const radioGroup = ref(null);
    const elFormItem = inject(elFormItemKey, {});
    const radioGroupSize = computed(() => {
      return props.size || elFormItem.size;
    });
    const changeEvent = (value) => {
      ctx.emit(UPDATE_MODEL_EVENT, value);
      nextTick(() => {
        ctx.emit("change", value);
      });
    };
    provide(radioGroupKey, reactive(__spreadProps(__spreadValues({
      name: "ElRadioGroup"
    }, toRefs(props)), {
      radioGroupSize,
      changeEvent
    })));
    watch(() => props.modelValue, () => {
      var _a;
      (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change");
    });
    const handleKeydown = (e) => {
      const target = e.target;
      const className = target.nodeName === "INPUT" ? "[type=radio]" : "[role=radio]";
      const radios = radioGroup.value.querySelectorAll(className);
      const length = radios.length;
      const index = Array.from(radios).indexOf(target);
      const roleRadios = radioGroup.value.querySelectorAll("[role=radio]");
      let nextIndex = null;
      switch (e.code) {
        case EVENT_CODE.left:
        case EVENT_CODE.up:
          e.stopPropagation();
          e.preventDefault();
          nextIndex = index === 0 ? length - 1 : index - 1;
          break;
        case EVENT_CODE.right:
        case EVENT_CODE.down:
          e.stopPropagation();
          e.preventDefault();
          nextIndex = index === length - 1 ? 0 : index + 1;
          break;
      }
      if (nextIndex === null)
        return;
      roleRadios[nextIndex].click();
      roleRadios[nextIndex].focus();
    };
    onMounted(() => {
      const radios = radioGroup.value.querySelectorAll("[type=radio]");
      const firstLabel = radios[0];
      if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
        firstLabel.tabIndex = 0;
      }
    });
    return {
      handleKeydown,
      radioGroupSize,
      radioGroup
    };
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "radioGroup",
    class: "el-radio-group",
    role: "radiogroup",
    onKeydown: _cache[0] || (_cache[0] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 544);
}

script.render = render;
script.__file = "packages/components/radio/src/radio-group.vue";

const ElRadio = withInstall(script$2, {
  RadioButton: script$1,
  RadioGroup: script
});
withNoopInstall(script);
withNoopInstall(script$1);

var _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAAAAAAAAQCEeRdzAAACrUlEQVR4nK2V22uSYRzHnUwd6utKBOeWuTXXDuDapEzSJNblDsGuhtEYY7qDR9gBgi66qREdoOtonQZBUX/Abuo6oosuYt0U0TrRYBiUy8pf39/r+9IreZjTFz6ojz7fz+Pv9z7Pq1Lt7loGKfAaHN5lRtHrIiBnYyMJWi3h/ZNahs9w+ImmJsrOzlKwu5sFn4CpFuFDINNpMtHmxATR/Dyd6emRBY3VhrvBlkWnpfWxMaJEgv5EItRntbLgebXh+8BbTV0dPR0ZEcMpFqWXwSCp1WoWXKom3ACeAVodGCBKJonm5kTJ1UCAwxn/ToKMYK/q/2Y94pBljye3cg5nYjE66XBw+AZoAQLYI8E5eT2ZAu/AF2nCOWl8kMNDXV1iIKHmYjheN6emSNDpWPBTlWvyZwWc8xE8BBYO2rLq9XTcZiO70ShP4pVcE+rr6cP4eE4grx5kIUn299Mhi4U8aPRR4JHwAhfG69AzZNxnASV6e4kWF+myz8eDv4ED3GyDMB0O/1u9EvlfFQLfDXV0cNZ2IcEvsJ8FrRD8CIUKC8RyFQH9GnQ65T2iorjLRbSwAMExpWClrZygoDRCXzHHkiv3g9oL4nFaGx2Vb+GZUoJbBwShcgHKc9brlXvpKiW4zYJ0uEIBGuyz2zlnHWhKCtpFQZG7qBDRKL2fnCShoYFzVuSNVkxwp2IB6v94eFiu/+myAmelAtQ/5nbL9397OcFdFmxXIMiiRH14GGHuC+VZVGij8U6+dxAPl8z09M4EaO4bPIh0Gg1nXM8TJFmwtERX8o+KVbvBQN9wsInHQjRSgqhY/wt+v1z/U0pByobDbqClhVpREnzOADOI849dZjMFmpvJj8OwGHxQHsEhJz2AXgG9UsC7LSWZ0+C8NK4FN8B36bty8MLWQKcy/C8yyA+BOW531gAAAABJRU5ErkJggg==";

var _imports_4 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAAAAXNSR0IArs4c6QAAActJREFUSEu11kuIzWEYx/HPuF8yDRYsUC7ZTGrKxq1cSo0SUbMYO7fMxEKxEIooJJdmUjQlRSGLqdnJymYikhQ2kpUFxmyYnVuPnlPTdJzjnDn/d/Pf/N/f931/7/N73rdJ7WMierAXQ+jA03/JNNWurw/78RaL8BqrGwU4i5N4hK24jR2Y1gjAQVzDc2zCdzxAO5rHCwif7+E91uELwt6P+IC14wFswEMMp1AIxliFJziBc/UC2vA4J6/Hq1FC53EMrXngZRmxzSnpaRzUjxQMf2dlhcxLn0ugklBU0XzsKaP8E8/wKQAD2Dbqp5dYiUPoxT7cHCMyAd8wo0KZj0SFBSBog7ibK92e9X0GuzAzdzZWK84gLCw3Anw8ghiA37iB7vQ0vF2M+EYJzq4jjDHlDjqLBLzDSFGAJZmZS0UBunAdm4sC9Of5zSkCMCnbeKR8SxGANVn2R3ClEuBieFhHmZ7GKayITlAJcBXR6GrNQVizEAsiDI0GtKT/EbLd1QCXsRFzM+3/E+gD2RU6cb8EiKb0FW+wFMsQHTR+jivyRV4w1QDT8774jOWR4hLgMC5gaja1eDEcRUy4hZ2YXE0dv/J1EQuLh8Df8QcL/n7YszINzAAAAABJRU5ErkJggg==";

var PayIcon = "/assets/pay_icon_wallet.fa6fa919.svg";

var PayConfirmSkeleton_scss_vue_type_style_index_0_src_67afd408_scoped_true_lang = '';

const _hoisted_1$3 = { class: "pay-confirm" };
const _hoisted_2$3 = { class: "nft flex" };
const _hoisted_3$3 = { class: "cover" };
const _hoisted_4$3 = { class: "flex1" };
const _hoisted_5$3 = { class: "name" };
const _hoisted_6$2 = { class: "user-list" };
const _hoisted_7$2 = { class: "user-item flex flex-align-center" };
const _hoisted_8$1 = { class: "user-item flex flex-align-center" };
const _hoisted_9$1 = { class: "price-list" };
const _hoisted_10$1 = { class: "price-item flex flex-align-center" };
const _hoisted_11$1 = { class: "name flex1" };
const _hoisted_12$1 = { class: "amount" };
const _hoisted_13$1 = { class: "price-item flex flex-align-center" };
const _hoisted_14$1 = { class: "name flex1" };
const _hoisted_15$1 = { class: "amount" };
const _hoisted_16$1 = { class: "price-item flex flex-align-center" };
const _hoisted_17$1 = { class: "name flex1" };
const _hoisted_18$1 = { class: "amount" };
const _hoisted_19$1 = { class: "total-price flex flex-align-center" };
const _hoisted_20$1 = { class: "name flex1" };
const _hoisted_21$1 = { class: "amount" };
const _hoisted_22$1 = { class: "operate flex" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_ElSkeletonItem = ElSkeletonItem;
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("div", _hoisted_3$3, [
            createVNode(NFTCover, {
              cover: [],
              "is-skeleton": true
            })
          ]),
          createBaseVNode("div", _hoisted_4$3, [
            createBaseVNode("div", _hoisted_5$3, [
              createVNode(_component_ElSkeletonItem, { variant: "text" })
            ]),
            createBaseVNode("div", _hoisted_6$2, [
              createBaseVNode("div", _hoisted_7$2, [
                createVNode(_component_ElSkeletonItem, { variant: "circle" }),
                createVNode(_component_ElSkeletonItem, { variant: "text" })
              ]),
              createBaseVNode("div", _hoisted_8$1, [
                createVNode(_component_ElSkeletonItem, { variant: "circle" }),
                createVNode(_component_ElSkeletonItem, { variant: "text" })
              ])
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_9$1, [
          createBaseVNode("div", _hoisted_10$1, [
            createBaseVNode("div", _hoisted_11$1, [
              createVNode(_component_ElSkeletonItem, { variant: "text" })
            ]),
            createBaseVNode("div", _hoisted_12$1, [
              createVNode(_component_ElSkeletonItem, { variant: "text" })
            ])
          ]),
          createBaseVNode("div", _hoisted_13$1, [
            createBaseVNode("div", _hoisted_14$1, [
              createVNode(_component_ElSkeletonItem, { variant: "text" })
            ]),
            createBaseVNode("div", _hoisted_15$1, [
              createVNode(_component_ElSkeletonItem, { variant: "text" })
            ])
          ]),
          createBaseVNode("div", _hoisted_16$1, [
            createBaseVNode("div", _hoisted_17$1, [
              createVNode(_component_ElSkeletonItem, { variant: "text" })
            ]),
            createBaseVNode("div", _hoisted_18$1, [
              createVNode(_component_ElSkeletonItem, { variant: "text" })
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_19$1, [
          createBaseVNode("div", _hoisted_20$1, [
            createVNode(_component_ElSkeletonItem, { variant: "text" })
          ]),
          createBaseVNode("div", _hoisted_21$1, [
            createVNode(_component_ElSkeletonItem, { variant: "text" })
          ])
        ]),
        createBaseVNode("div", _hoisted_22$1, [
          createVNode(_component_ElSkeletonItem, {
            class: "flex1",
            variant: "button"
          })
        ])
      ]);
    };
  }
});
var PayConfirmSkeletonVue = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-67afd408"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/PayConfirm/PayConfirmSkeleton.vue"]]);

var radio = '';

var payModeDialog_scss_vue_type_style_index_0_src_6e0f48b7_scoped_true_lang = '';

const _withScopeId$2 = (n) => (pushScopeId("data-v-6e0f48b7"), n = n(), popScopeId(), n);
const _hoisted_1$2 = { class: "payModeDialogTitle" };
const _hoisted_2$2 = { class: "payModeDialogBody" };
const _hoisted_3$2 = { class: "radioGroud" };
const _hoisted_4$2 = { class: "bsvMode" };
const _hoisted_5$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", null, "BSV", -1));
const _hoisted_6$1 = { class: "cnyMode" };
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("span", null, "CNY", -1));
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    visible: { type: Boolean, required: true, default: false },
    isLegal: { type: Boolean, required: true, default: false }
  },
  emits: ["payModeclose"],
  setup(__props, { emit }) {
    const props = __props;
    const i18n = useI18n();
    const store = useStore();
    const currentPayMode = ref("1");
    watch(() => props.visible, (value) => {
      if (value) {
        currentPayMode.value = store.state.currentPrice === UnitName.BSV ? "1" : "2";
      }
    });
    function confirmMode() {
      if (currentPayMode.value === "1") {
        if (props.isLegal) {
          return ElMessage.error(`${i18n.t("notSupportBsvBuyLegal")}`);
        }
        store.commit(Mutation.CHANGEPRICES, UnitName.BSV);
        window.localStorage.setItem("currentPrice", UnitName.BSV);
      } else {
        store.commit(Mutation.CHANGEPRICES, UnitName.RMB);
        window.localStorage.setItem("currentPrice", UnitName.RMB);
      }
      store.commit(Mutation.GETEXCHANGERATE, true);
      closeDialog();
    }
    function closeDialog() {
      emit("payModeclose");
    }
    return (_ctx, _cache) => {
      const _component_el_radio = ElRadio;
      const _component_ElDialog = ElDialog;
      return openBlock(), createBlock(_component_ElDialog, {
        "custom-class": "payModeDialog",
        modelValue: __props.visible,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(visible) ? visible.value = $event : null),
        onClose: closeDialog,
        center: "",
        "close-on-click-modal": false
      }, {
        title: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("span", null, toDisplayString(_ctx.$t("selectPay")), 1)
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2$2, [
            createBaseVNode("div", _hoisted_3$2, [
              createBaseVNode("div", _hoisted_4$2, [
                _hoisted_5$2,
                createVNode(_component_el_radio, {
                  modelValue: currentPayMode.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentPayMode.value = $event),
                  label: "1",
                  size: "large"
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_6$1, [
                _hoisted_7$1,
                createVNode(_component_el_radio, {
                  modelValue: currentPayMode.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => currentPayMode.value = $event),
                  label: "2",
                  size: "large"
                }, null, 8, ["modelValue"])
              ])
            ]),
            createBaseVNode("div", {
              onClick: confirmMode,
              class: "btn btn-block"
            }, toDisplayString(_ctx.$t("confirm")), 1)
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
var PayModeDialog = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6e0f48b7"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/payModeDialog/payModeDialog.vue"]]);

var wechatTitleIcon = "/assets/wechatTitle.1f557859.svg";

var alipayTitleIcon = "/assets/alipay-circle.a776f3c5.svg";

var browser = {};

// can-promise has a crash in some versions of react native that dont have
// standard global objects
// https://github.com/soldair/node-qrcode/issues/157

var canPromise$1 = function () {
  return typeof Promise === 'function' && Promise.prototype && Promise.prototype.then
};

var qrcode = {};

var utils$1 = {};

let toSJISFunction;
const CODEWORDS_COUNT = [
  0, // Not used
  26, 44, 70, 100, 134, 172, 196, 242, 292, 346,
  404, 466, 532, 581, 655, 733, 815, 901, 991, 1085,
  1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185,
  2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706
];

/**
 * Returns the QR Code size for the specified version
 *
 * @param  {Number} version QR Code version
 * @return {Number}         size of QR code
 */
utils$1.getSymbolSize = function getSymbolSize (version) {
  if (!version) throw new Error('"version" cannot be null or undefined')
  if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40')
  return version * 4 + 17
};

/**
 * Returns the total number of codewords used to store data and EC information.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Data length in bits
 */
utils$1.getSymbolTotalCodewords = function getSymbolTotalCodewords (version) {
  return CODEWORDS_COUNT[version]
};

/**
 * Encode data with Bose-Chaudhuri-Hocquenghem
 *
 * @param  {Number} data Value to encode
 * @return {Number}      Encoded value
 */
utils$1.getBCHDigit = function (data) {
  let digit = 0;

  while (data !== 0) {
    digit++;
    data >>>= 1;
  }

  return digit
};

utils$1.setToSJISFunction = function setToSJISFunction (f) {
  if (typeof f !== 'function') {
    throw new Error('"toSJISFunc" is not a valid function.')
  }

  toSJISFunction = f;
};

utils$1.isKanjiModeEnabled = function () {
  return typeof toSJISFunction !== 'undefined'
};

utils$1.toSJIS = function toSJIS (kanji) {
  return toSJISFunction(kanji)
};

var errorCorrectionLevel = {};

(function (exports) {
exports.L = { bit: 1 };
exports.M = { bit: 0 };
exports.Q = { bit: 3 };
exports.H = { bit: 2 };

function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  const lcStr = string.toLowerCase();

  switch (lcStr) {
    case 'l':
    case 'low':
      return exports.L

    case 'm':
    case 'medium':
      return exports.M

    case 'q':
    case 'quartile':
      return exports.Q

    case 'h':
    case 'high':
      return exports.H

    default:
      throw new Error('Unknown EC Level: ' + string)
  }
}

exports.isValid = function isValid (level) {
  return level && typeof level.bit !== 'undefined' &&
    level.bit >= 0 && level.bit < 4
};

exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
};
}(errorCorrectionLevel));

function BitBuffer$1 () {
  this.buffer = [];
  this.length = 0;
}

BitBuffer$1.prototype = {

  get: function (index) {
    const bufIndex = Math.floor(index / 8);
    return ((this.buffer[bufIndex] >>> (7 - index % 8)) & 1) === 1
  },

  put: function (num, length) {
    for (let i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) === 1);
    }
  },

  getLengthInBits: function () {
    return this.length
  },

  putBit: function (bit) {
    const bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }

    if (bit) {
      this.buffer[bufIndex] |= (0x80 >>> (this.length % 8));
    }

    this.length++;
  }
};

var bitBuffer = BitBuffer$1;

/**
 * Helper class to handle QR Code symbol modules
 *
 * @param {Number} size Symbol size
 */

function BitMatrix$1 (size) {
  if (!size || size < 1) {
    throw new Error('BitMatrix size must be defined and greater than 0')
  }

  this.size = size;
  this.data = new Uint8Array(size * size);
  this.reservedBit = new Uint8Array(size * size);
}

/**
 * Set bit value at specified location
 * If reserved flag is set, this bit will be ignored during masking process
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 * @param {Boolean} reserved
 */
BitMatrix$1.prototype.set = function (row, col, value, reserved) {
  const index = row * this.size + col;
  this.data[index] = value;
  if (reserved) this.reservedBit[index] = true;
};

/**
 * Returns bit value at specified location
 *
 * @param  {Number}  row
 * @param  {Number}  col
 * @return {Boolean}
 */
BitMatrix$1.prototype.get = function (row, col) {
  return this.data[row * this.size + col]
};

/**
 * Applies xor operator at specified location
 * (used during masking process)
 *
 * @param {Number}  row
 * @param {Number}  col
 * @param {Boolean} value
 */
BitMatrix$1.prototype.xor = function (row, col, value) {
  this.data[row * this.size + col] ^= value;
};

/**
 * Check if bit at specified location is reserved
 *
 * @param {Number}   row
 * @param {Number}   col
 * @return {Boolean}
 */
BitMatrix$1.prototype.isReserved = function (row, col) {
  return this.reservedBit[row * this.size + col]
};

var bitMatrix = BitMatrix$1;

var alignmentPattern = {};

/**
 * Alignment pattern are fixed reference pattern in defined positions
 * in a matrix symbology, which enables the decode software to re-synchronise
 * the coordinate mapping of the image modules in the event of moderate amounts
 * of distortion of the image.
 *
 * Alignment patterns are present only in QR Code symbols of version 2 or larger
 * and their number depends on the symbol version.
 */

(function (exports) {
const getSymbolSize = utils$1.getSymbolSize;

/**
 * Calculate the row/column coordinates of the center module of each alignment pattern
 * for the specified QR Code version.
 *
 * The alignment patterns are positioned symmetrically on either side of the diagonal
 * running from the top left corner of the symbol to the bottom right corner.
 *
 * Since positions are simmetrical only half of the coordinates are returned.
 * Each item of the array will represent in turn the x and y coordinate.
 * @see {@link getPositions}
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinate
 */
exports.getRowColCoords = function getRowColCoords (version) {
  if (version === 1) return []

  const posCount = Math.floor(version / 7) + 2;
  const size = getSymbolSize(version);
  const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
  const positions = [size - 7]; // Last coord is always (size - 7)

  for (let i = 1; i < posCount - 1; i++) {
    positions[i] = positions[i - 1] - intervals;
  }

  positions.push(6); // First coord is always 6

  return positions.reverse()
};

/**
 * Returns an array containing the positions of each alignment pattern.
 * Each array's element represent the center point of the pattern as (x, y) coordinates
 *
 * Coordinates are calculated expanding the row/column coordinates returned by {@link getRowColCoords}
 * and filtering out the items that overlaps with finder pattern
 *
 * @example
 * For a Version 7 symbol {@link getRowColCoords} returns values 6, 22 and 38.
 * The alignment patterns, therefore, are to be centered on (row, column)
 * positions (6,22), (22,6), (22,22), (22,38), (38,22), (38,38).
 * Note that the coordinates (6,6), (6,38), (38,6) are occupied by finder patterns
 * and are not therefore used for alignment patterns.
 *
 * let pos = getPositions(7)
 * // [[6,22], [22,6], [22,22], [22,38], [38,22], [38,38]]
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
exports.getPositions = function getPositions (version) {
  const coords = [];
  const pos = exports.getRowColCoords(version);
  const posLength = pos.length;

  for (let i = 0; i < posLength; i++) {
    for (let j = 0; j < posLength; j++) {
      // Skip if position is occupied by finder patterns
      if ((i === 0 && j === 0) || // top-left
          (i === 0 && j === posLength - 1) || // bottom-left
          (i === posLength - 1 && j === 0)) { // top-right
        continue
      }

      coords.push([pos[i], pos[j]]);
    }
  }

  return coords
};
}(alignmentPattern));

var finderPattern = {};

const getSymbolSize = utils$1.getSymbolSize;
const FINDER_PATTERN_SIZE = 7;

/**
 * Returns an array containing the positions of each finder pattern.
 * Each array's element represent the top-left point of the pattern as (x, y) coordinates
 *
 * @param  {Number} version QR Code version
 * @return {Array}          Array of coordinates
 */
finderPattern.getPositions = function getPositions (version) {
  const size = getSymbolSize(version);

  return [
    // top-left
    [0, 0],
    // top-right
    [size - FINDER_PATTERN_SIZE, 0],
    // bottom-left
    [0, size - FINDER_PATTERN_SIZE]
  ]
};

var maskPattern = {};

/**
 * Data mask pattern reference
 * @type {Object}
 */

(function (exports) {
exports.Patterns = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
};

/**
 * Weighted penalty scores for the undesirable features
 * @type {Object}
 */
const PenaltyScores = {
  N1: 3,
  N2: 3,
  N3: 40,
  N4: 10
};

/**
 * Check if mask pattern value is valid
 *
 * @param  {Number}  mask    Mask pattern
 * @return {Boolean}         true if valid, false otherwise
 */
exports.isValid = function isValid (mask) {
  return mask != null && mask !== '' && !isNaN(mask) && mask >= 0 && mask <= 7
};

/**
 * Returns mask pattern from a value.
 * If value is not valid, returns undefined
 *
 * @param  {Number|String} value        Mask pattern value
 * @return {Number}                     Valid mask pattern or undefined
 */
exports.from = function from (value) {
  return exports.isValid(value) ? parseInt(value, 10) : undefined
};

/**
* Find adjacent modules in row/column with the same color
* and assign a penalty value.
*
* Points: N1 + i
* i is the amount by which the number of adjacent modules of the same color exceeds 5
*/
exports.getPenaltyN1 = function getPenaltyN1 (data) {
  const size = data.size;
  let points = 0;
  let sameCountCol = 0;
  let sameCountRow = 0;
  let lastCol = null;
  let lastRow = null;

  for (let row = 0; row < size; row++) {
    sameCountCol = sameCountRow = 0;
    lastCol = lastRow = null;

    for (let col = 0; col < size; col++) {
      let module = data.get(row, col);
      if (module === lastCol) {
        sameCountCol++;
      } else {
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        lastCol = module;
        sameCountCol = 1;
      }

      module = data.get(col, row);
      if (module === lastRow) {
        sameCountRow++;
      } else {
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
        lastRow = module;
        sameCountRow = 1;
      }
    }

    if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
    if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
  }

  return points
};

/**
 * Find 2x2 blocks with the same color and assign a penalty value
 *
 * Points: N2 * (m - 1) * (n - 1)
 */
exports.getPenaltyN2 = function getPenaltyN2 (data) {
  const size = data.size;
  let points = 0;

  for (let row = 0; row < size - 1; row++) {
    for (let col = 0; col < size - 1; col++) {
      const last = data.get(row, col) +
        data.get(row, col + 1) +
        data.get(row + 1, col) +
        data.get(row + 1, col + 1);

      if (last === 4 || last === 0) points++;
    }
  }

  return points * PenaltyScores.N2
};

/**
 * Find 1:1:3:1:1 ratio (dark:light:dark:light:dark) pattern in row/column,
 * preceded or followed by light area 4 modules wide
 *
 * Points: N3 * number of pattern found
 */
exports.getPenaltyN3 = function getPenaltyN3 (data) {
  const size = data.size;
  let points = 0;
  let bitsCol = 0;
  let bitsRow = 0;

  for (let row = 0; row < size; row++) {
    bitsCol = bitsRow = 0;
    for (let col = 0; col < size; col++) {
      bitsCol = ((bitsCol << 1) & 0x7FF) | data.get(row, col);
      if (col >= 10 && (bitsCol === 0x5D0 || bitsCol === 0x05D)) points++;

      bitsRow = ((bitsRow << 1) & 0x7FF) | data.get(col, row);
      if (col >= 10 && (bitsRow === 0x5D0 || bitsRow === 0x05D)) points++;
    }
  }

  return points * PenaltyScores.N3
};

/**
 * Calculate proportion of dark modules in entire symbol
 *
 * Points: N4 * k
 *
 * k is the rating of the deviation of the proportion of dark modules
 * in the symbol from 50% in steps of 5%
 */
exports.getPenaltyN4 = function getPenaltyN4 (data) {
  let darkCount = 0;
  const modulesCount = data.data.length;

  for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];

  const k = Math.abs(Math.ceil((darkCount * 100 / modulesCount) / 5) - 10);

  return k * PenaltyScores.N4
};

/**
 * Return mask value at given position
 *
 * @param  {Number} maskPattern Pattern reference value
 * @param  {Number} i           Row
 * @param  {Number} j           Column
 * @return {Boolean}            Mask value
 */
function getMaskAt (maskPattern, i, j) {
  switch (maskPattern) {
    case exports.Patterns.PATTERN000: return (i + j) % 2 === 0
    case exports.Patterns.PATTERN001: return i % 2 === 0
    case exports.Patterns.PATTERN010: return j % 3 === 0
    case exports.Patterns.PATTERN011: return (i + j) % 3 === 0
    case exports.Patterns.PATTERN100: return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0
    case exports.Patterns.PATTERN101: return (i * j) % 2 + (i * j) % 3 === 0
    case exports.Patterns.PATTERN110: return ((i * j) % 2 + (i * j) % 3) % 2 === 0
    case exports.Patterns.PATTERN111: return ((i * j) % 3 + (i + j) % 2) % 2 === 0

    default: throw new Error('bad maskPattern:' + maskPattern)
  }
}

/**
 * Apply a mask pattern to a BitMatrix
 *
 * @param  {Number}    pattern Pattern reference number
 * @param  {BitMatrix} data    BitMatrix data
 */
exports.applyMask = function applyMask (pattern, data) {
  const size = data.size;

  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size; row++) {
      if (data.isReserved(row, col)) continue
      data.xor(row, col, getMaskAt(pattern, row, col));
    }
  }
};

/**
 * Returns the best mask pattern for data
 *
 * @param  {BitMatrix} data
 * @return {Number} Mask pattern reference number
 */
exports.getBestMask = function getBestMask (data, setupFormatFunc) {
  const numPatterns = Object.keys(exports.Patterns).length;
  let bestPattern = 0;
  let lowerPenalty = Infinity;

  for (let p = 0; p < numPatterns; p++) {
    setupFormatFunc(p);
    exports.applyMask(p, data);

    // Calculate penalty
    const penalty =
      exports.getPenaltyN1(data) +
      exports.getPenaltyN2(data) +
      exports.getPenaltyN3(data) +
      exports.getPenaltyN4(data);

    // Undo previously applied mask
    exports.applyMask(p, data);

    if (penalty < lowerPenalty) {
      lowerPenalty = penalty;
      bestPattern = p;
    }
  }

  return bestPattern
};
}(maskPattern));

var errorCorrectionCode = {};

const ECLevel$1 = errorCorrectionLevel;

const EC_BLOCKS_TABLE = [
// L  M  Q  H
  1, 1, 1, 1,
  1, 1, 1, 1,
  1, 1, 2, 2,
  1, 2, 2, 4,
  1, 2, 4, 4,
  2, 4, 4, 4,
  2, 4, 6, 5,
  2, 4, 6, 6,
  2, 5, 8, 8,
  4, 5, 8, 8,
  4, 5, 8, 11,
  4, 8, 10, 11,
  4, 9, 12, 16,
  4, 9, 16, 16,
  6, 10, 12, 18,
  6, 10, 17, 16,
  6, 11, 16, 19,
  6, 13, 18, 21,
  7, 14, 21, 25,
  8, 16, 20, 25,
  8, 17, 23, 25,
  9, 17, 23, 34,
  9, 18, 25, 30,
  10, 20, 27, 32,
  12, 21, 29, 35,
  12, 23, 34, 37,
  12, 25, 34, 40,
  13, 26, 35, 42,
  14, 28, 38, 45,
  15, 29, 40, 48,
  16, 31, 43, 51,
  17, 33, 45, 54,
  18, 35, 48, 57,
  19, 37, 51, 60,
  19, 38, 53, 63,
  20, 40, 56, 66,
  21, 43, 59, 70,
  22, 45, 62, 74,
  24, 47, 65, 77,
  25, 49, 68, 81
];

const EC_CODEWORDS_TABLE = [
// L  M  Q  H
  7, 10, 13, 17,
  10, 16, 22, 28,
  15, 26, 36, 44,
  20, 36, 52, 64,
  26, 48, 72, 88,
  36, 64, 96, 112,
  40, 72, 108, 130,
  48, 88, 132, 156,
  60, 110, 160, 192,
  72, 130, 192, 224,
  80, 150, 224, 264,
  96, 176, 260, 308,
  104, 198, 288, 352,
  120, 216, 320, 384,
  132, 240, 360, 432,
  144, 280, 408, 480,
  168, 308, 448, 532,
  180, 338, 504, 588,
  196, 364, 546, 650,
  224, 416, 600, 700,
  224, 442, 644, 750,
  252, 476, 690, 816,
  270, 504, 750, 900,
  300, 560, 810, 960,
  312, 588, 870, 1050,
  336, 644, 952, 1110,
  360, 700, 1020, 1200,
  390, 728, 1050, 1260,
  420, 784, 1140, 1350,
  450, 812, 1200, 1440,
  480, 868, 1290, 1530,
  510, 924, 1350, 1620,
  540, 980, 1440, 1710,
  570, 1036, 1530, 1800,
  570, 1064, 1590, 1890,
  600, 1120, 1680, 1980,
  630, 1204, 1770, 2100,
  660, 1260, 1860, 2220,
  720, 1316, 1950, 2310,
  750, 1372, 2040, 2430
];

/**
 * Returns the number of error correction block that the QR Code should contain
 * for the specified version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction blocks
 */
errorCorrectionCode.getBlocksCount = function getBlocksCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel$1.L:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 0]
    case ECLevel$1.M:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 1]
    case ECLevel$1.Q:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 2]
    case ECLevel$1.H:
      return EC_BLOCKS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
};

/**
 * Returns the number of error correction codewords to use for the specified
 * version and error correction level.
 *
 * @param  {Number} version              QR Code version
 * @param  {Number} errorCorrectionLevel Error correction level
 * @return {Number}                      Number of error correction codewords
 */
errorCorrectionCode.getTotalCodewordsCount = function getTotalCodewordsCount (version, errorCorrectionLevel) {
  switch (errorCorrectionLevel) {
    case ECLevel$1.L:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0]
    case ECLevel$1.M:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1]
    case ECLevel$1.Q:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2]
    case ECLevel$1.H:
      return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3]
    default:
      return undefined
  }
};

var polynomial = {};

var galoisField = {};

const EXP_TABLE = new Uint8Array(512);
const LOG_TABLE = new Uint8Array(256)
/**
 * Precompute the log and anti-log tables for faster computation later
 *
 * For each possible value in the galois field 2^8, we will pre-compute
 * the logarithm and anti-logarithm (exponential) of this value
 *
 * ref {@link https://en.wikiversity.org/wiki/Reed%E2%80%93Solomon_codes_for_coders#Introduction_to_mathematical_fields}
 */
;(function initTables () {
  let x = 1;
  for (let i = 0; i < 255; i++) {
    EXP_TABLE[i] = x;
    LOG_TABLE[x] = i;

    x <<= 1; // multiply by 2

    // The QR code specification says to use byte-wise modulo 100011101 arithmetic.
    // This means that when a number is 256 or larger, it should be XORed with 0x11D.
    if (x & 0x100) { // similar to x >= 256, but a lot faster (because 0x100 == 256)
      x ^= 0x11D;
    }
  }

  // Optimization: double the size of the anti-log table so that we don't need to mod 255 to
  // stay inside the bounds (because we will mainly use this table for the multiplication of
  // two GF numbers, no more).
  // @see {@link mul}
  for (let i = 255; i < 512; i++) {
    EXP_TABLE[i] = EXP_TABLE[i - 255];
  }
}());

/**
 * Returns log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
galoisField.log = function log (n) {
  if (n < 1) throw new Error('log(' + n + ')')
  return LOG_TABLE[n]
};

/**
 * Returns anti-log value of n inside Galois Field
 *
 * @param  {Number} n
 * @return {Number}
 */
galoisField.exp = function exp (n) {
  return EXP_TABLE[n]
};

/**
 * Multiplies two number inside Galois Field
 *
 * @param  {Number} x
 * @param  {Number} y
 * @return {Number}
 */
galoisField.mul = function mul (x, y) {
  if (x === 0 || y === 0) return 0

  // should be EXP_TABLE[(LOG_TABLE[x] + LOG_TABLE[y]) % 255] if EXP_TABLE wasn't oversized
  // @see {@link initTables}
  return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]]
};

(function (exports) {
const GF = galoisField;

/**
 * Multiplies two polynomials inside Galois Field
 *
 * @param  {Uint8Array} p1 Polynomial
 * @param  {Uint8Array} p2 Polynomial
 * @return {Uint8Array}    Product of p1 and p2
 */
exports.mul = function mul (p1, p2) {
  const coeff = new Uint8Array(p1.length + p2.length - 1);

  for (let i = 0; i < p1.length; i++) {
    for (let j = 0; j < p2.length; j++) {
      coeff[i + j] ^= GF.mul(p1[i], p2[j]);
    }
  }

  return coeff
};

/**
 * Calculate the remainder of polynomials division
 *
 * @param  {Uint8Array} divident Polynomial
 * @param  {Uint8Array} divisor  Polynomial
 * @return {Uint8Array}          Remainder
 */
exports.mod = function mod (divident, divisor) {
  let result = new Uint8Array(divident);

  while ((result.length - divisor.length) >= 0) {
    const coeff = result[0];

    for (let i = 0; i < divisor.length; i++) {
      result[i] ^= GF.mul(divisor[i], coeff);
    }

    // remove all zeros from buffer head
    let offset = 0;
    while (offset < result.length && result[offset] === 0) offset++;
    result = result.slice(offset);
  }

  return result
};

/**
 * Generate an irreducible generator polynomial of specified degree
 * (used by Reed-Solomon encoder)
 *
 * @param  {Number} degree Degree of the generator polynomial
 * @return {Uint8Array}    Buffer containing polynomial coefficients
 */
exports.generateECPolynomial = function generateECPolynomial (degree) {
  let poly = new Uint8Array([1]);
  for (let i = 0; i < degree; i++) {
    poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
  }

  return poly
};
}(polynomial));

const Polynomial = polynomial;

function ReedSolomonEncoder$1 (degree) {
  this.genPoly = undefined;
  this.degree = degree;

  if (this.degree) this.initialize(this.degree);
}

/**
 * Initialize the encoder.
 * The input param should correspond to the number of error correction codewords.
 *
 * @param  {Number} degree
 */
ReedSolomonEncoder$1.prototype.initialize = function initialize (degree) {
  // create an irreducible generator polynomial
  this.degree = degree;
  this.genPoly = Polynomial.generateECPolynomial(this.degree);
};

/**
 * Encodes a chunk of data
 *
 * @param  {Uint8Array} data Buffer containing input data
 * @return {Uint8Array}      Buffer containing encoded data
 */
ReedSolomonEncoder$1.prototype.encode = function encode (data) {
  if (!this.genPoly) {
    throw new Error('Encoder not initialized')
  }

  // Calculate EC for this data block
  // extends data size to data+genPoly size
  const paddedData = new Uint8Array(data.length + this.degree);
  paddedData.set(data);

  // The error correction codewords are the remainder after dividing the data codewords
  // by a generator polynomial
  const remainder = Polynomial.mod(paddedData, this.genPoly);

  // return EC data blocks (last n byte, where n is the degree of genPoly)
  // If coefficients number in remainder are less than genPoly degree,
  // pad with 0s to the left to reach the needed number of coefficients
  const start = this.degree - remainder.length;
  if (start > 0) {
    const buff = new Uint8Array(this.degree);
    buff.set(remainder, start);

    return buff
  }

  return remainder
};

var reedSolomonEncoder = ReedSolomonEncoder$1;

var version = {};

var mode = {};

var versionCheck = {};

/**
 * Check if QR Code version is valid
 *
 * @param  {Number}  version QR Code version
 * @return {Boolean}         true if valid version, false otherwise
 */

versionCheck.isValid = function isValid (version) {
  return !isNaN(version) && version >= 1 && version <= 40
};

var regex = {};

const numeric = '[0-9]+';
const alphanumeric = '[A-Z $%*+\\-./:]+';
let kanji = '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
  '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
  '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
  '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
kanji = kanji.replace(/u/g, '\\u');

const byte = '(?:(?![A-Z0-9 $%*+\\-./:]|' + kanji + ')(?:.|[\r\n]))+';

regex.KANJI = new RegExp(kanji, 'g');
regex.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g');
regex.BYTE = new RegExp(byte, 'g');
regex.NUMERIC = new RegExp(numeric, 'g');
regex.ALPHANUMERIC = new RegExp(alphanumeric, 'g');

const TEST_KANJI = new RegExp('^' + kanji + '$');
const TEST_NUMERIC = new RegExp('^' + numeric + '$');
const TEST_ALPHANUMERIC = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');

regex.testKanji = function testKanji (str) {
  return TEST_KANJI.test(str)
};

regex.testNumeric = function testNumeric (str) {
  return TEST_NUMERIC.test(str)
};

regex.testAlphanumeric = function testAlphanumeric (str) {
  return TEST_ALPHANUMERIC.test(str)
};

(function (exports) {
const VersionCheck = versionCheck;
const Regex = regex;

/**
 * Numeric mode encodes data from the decimal digit set (0 - 9)
 * (byte values 30HEX to 39HEX).
 * Normally, 3 data characters are represented by 10 bits.
 *
 * @type {Object}
 */
exports.NUMERIC = {
  id: 'Numeric',
  bit: 1 << 0,
  ccBits: [10, 12, 14]
};

/**
 * Alphanumeric mode encodes data from a set of 45 characters,
 * i.e. 10 numeric digits (0 - 9),
 *      26 alphabetic characters (A - Z),
 *   and 9 symbols (SP, $, %, *, +, -, ., /, :).
 * Normally, two input characters are represented by 11 bits.
 *
 * @type {Object}
 */
exports.ALPHANUMERIC = {
  id: 'Alphanumeric',
  bit: 1 << 1,
  ccBits: [9, 11, 13]
};

/**
 * In byte mode, data is encoded at 8 bits per character.
 *
 * @type {Object}
 */
exports.BYTE = {
  id: 'Byte',
  bit: 1 << 2,
  ccBits: [8, 16, 16]
};

/**
 * The Kanji mode efficiently encodes Kanji characters in accordance with
 * the Shift JIS system based on JIS X 0208.
 * The Shift JIS values are shifted from the JIS X 0208 values.
 * JIS X 0208 gives details of the shift coded representation.
 * Each two-byte character value is compacted to a 13-bit binary codeword.
 *
 * @type {Object}
 */
exports.KANJI = {
  id: 'Kanji',
  bit: 1 << 3,
  ccBits: [8, 10, 12]
};

/**
 * Mixed mode will contain a sequences of data in a combination of any of
 * the modes described above
 *
 * @type {Object}
 */
exports.MIXED = {
  bit: -1
};

/**
 * Returns the number of bits needed to store the data length
 * according to QR Code specifications.
 *
 * @param  {Mode}   mode    Data mode
 * @param  {Number} version QR Code version
 * @return {Number}         Number of bits
 */
exports.getCharCountIndicator = function getCharCountIndicator (mode, version) {
  if (!mode.ccBits) throw new Error('Invalid mode: ' + mode)

  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid version: ' + version)
  }

  if (version >= 1 && version < 10) return mode.ccBits[0]
  else if (version < 27) return mode.ccBits[1]
  return mode.ccBits[2]
};

/**
 * Returns the most efficient mode to store the specified data
 *
 * @param  {String} dataStr Input data string
 * @return {Mode}           Best mode
 */
exports.getBestModeForData = function getBestModeForData (dataStr) {
  if (Regex.testNumeric(dataStr)) return exports.NUMERIC
  else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC
  else if (Regex.testKanji(dataStr)) return exports.KANJI
  else return exports.BYTE
};

/**
 * Return mode name as string
 *
 * @param {Mode} mode Mode object
 * @returns {String}  Mode name
 */
exports.toString = function toString (mode) {
  if (mode && mode.id) return mode.id
  throw new Error('Invalid mode')
};

/**
 * Check if input param is a valid mode object
 *
 * @param   {Mode}    mode Mode object
 * @returns {Boolean} True if valid mode, false otherwise
 */
exports.isValid = function isValid (mode) {
  return mode && mode.bit && mode.ccBits
};

/**
 * Get mode object from its name
 *
 * @param   {String} string Mode name
 * @returns {Mode}          Mode object
 */
function fromString (string) {
  if (typeof string !== 'string') {
    throw new Error('Param is not a string')
  }

  const lcStr = string.toLowerCase();

  switch (lcStr) {
    case 'numeric':
      return exports.NUMERIC
    case 'alphanumeric':
      return exports.ALPHANUMERIC
    case 'kanji':
      return exports.KANJI
    case 'byte':
      return exports.BYTE
    default:
      throw new Error('Unknown mode: ' + string)
  }
}

/**
 * Returns mode from a value.
 * If value is not a valid mode, returns defaultValue
 *
 * @param  {Mode|String} value        Encoding mode
 * @param  {Mode}        defaultValue Fallback value
 * @return {Mode}                     Encoding mode
 */
exports.from = function from (value, defaultValue) {
  if (exports.isValid(value)) {
    return value
  }

  try {
    return fromString(value)
  } catch (e) {
    return defaultValue
  }
};
}(mode));

(function (exports) {
const Utils = utils$1;
const ECCode = errorCorrectionCode;
const ECLevel = errorCorrectionLevel;
const Mode = mode;
const VersionCheck = versionCheck;

// Generator polynomial used to encode version information
const G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
const G18_BCH = Utils.getBCHDigit(G18);

function getBestVersionForDataLength (mode, length, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
      return currentVersion
    }
  }

  return undefined
}

function getReservedBitsCount (mode, version) {
  // Character count indicator + mode indicator bits
  return Mode.getCharCountIndicator(mode, version) + 4
}

function getTotalBitsFromDataArray (segments, version) {
  let totalBits = 0;

  segments.forEach(function (data) {
    const reservedBits = getReservedBitsCount(data.mode, version);
    totalBits += reservedBits + data.getBitsLength();
  });

  return totalBits
}

function getBestVersionForMixedData (segments, errorCorrectionLevel) {
  for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
    const length = getTotalBitsFromDataArray(segments, currentVersion);
    if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
      return currentVersion
    }
  }

  return undefined
}

/**
 * Returns version number from a value.
 * If value is not a valid version, returns defaultValue
 *
 * @param  {Number|String} value        QR Code version
 * @param  {Number}        defaultValue Fallback value
 * @return {Number}                     QR Code version number
 */
exports.from = function from (value, defaultValue) {
  if (VersionCheck.isValid(value)) {
    return parseInt(value, 10)
  }

  return defaultValue
};

/**
 * Returns how much data can be stored with the specified QR code version
 * and error correction level
 *
 * @param  {Number} version              QR Code version (1-40)
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Mode}   mode                 Data mode
 * @return {Number}                      Quantity of storable data
 */
exports.getCapacity = function getCapacity (version, errorCorrectionLevel, mode) {
  if (!VersionCheck.isValid(version)) {
    throw new Error('Invalid QR Code version')
  }

  // Use Byte mode as default
  if (typeof mode === 'undefined') mode = Mode.BYTE;

  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils.getSymbolTotalCodewords(version);

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);

  // Total number of data codewords
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;

  if (mode === Mode.MIXED) return dataTotalCodewordsBits

  const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);

  // Return max number of storable codewords
  switch (mode) {
    case Mode.NUMERIC:
      return Math.floor((usableBits / 10) * 3)

    case Mode.ALPHANUMERIC:
      return Math.floor((usableBits / 11) * 2)

    case Mode.KANJI:
      return Math.floor(usableBits / 13)

    case Mode.BYTE:
    default:
      return Math.floor(usableBits / 8)
  }
};

/**
 * Returns the minimum version needed to contain the amount of data
 *
 * @param  {Segment} data                    Segment of data
 * @param  {Number} [errorCorrectionLevel=H] Error correction level
 * @param  {Mode} mode                       Data mode
 * @return {Number}                          QR Code version
 */
exports.getBestVersionForData = function getBestVersionForData (data, errorCorrectionLevel) {
  let seg;

  const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);

  if (Array.isArray(data)) {
    if (data.length > 1) {
      return getBestVersionForMixedData(data, ecl)
    }

    if (data.length === 0) {
      return 1
    }

    seg = data[0];
  } else {
    seg = data;
  }

  return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl)
};

/**
 * Returns version information with relative error correction bits
 *
 * The version information is included in QR Code symbols of version 7 or larger.
 * It consists of an 18-bit sequence containing 6 data bits,
 * with 12 error correction bits calculated using the (18, 6) Golay code.
 *
 * @param  {Number} version QR Code version
 * @return {Number}         Encoded version info bits
 */
exports.getEncodedBits = function getEncodedBits (version) {
  if (!VersionCheck.isValid(version) || version < 7) {
    throw new Error('Invalid QR Code version')
  }

  let d = version << 12;

  while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
    d ^= (G18 << (Utils.getBCHDigit(d) - G18_BCH));
  }

  return (version << 12) | d
};
}(version));

var formatInfo = {};

const Utils$3 = utils$1;

const G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
const G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);
const G15_BCH = Utils$3.getBCHDigit(G15);

/**
 * Returns format information with relative error correction bits
 *
 * The format information is a 15-bit sequence containing 5 data bits,
 * with 10 error correction bits calculated using the (15, 5) BCH code.
 *
 * @param  {Number} errorCorrectionLevel Error correction level
 * @param  {Number} mask                 Mask pattern
 * @return {Number}                      Encoded format information bits
 */
formatInfo.getEncodedBits = function getEncodedBits (errorCorrectionLevel, mask) {
  const data = ((errorCorrectionLevel.bit << 3) | mask);
  let d = data << 10;

  while (Utils$3.getBCHDigit(d) - G15_BCH >= 0) {
    d ^= (G15 << (Utils$3.getBCHDigit(d) - G15_BCH));
  }

  // xor final data with mask pattern in order to ensure that
  // no combination of Error Correction Level and data mask pattern
  // will result in an all-zero data string
  return ((data << 10) | d) ^ G15_MASK
};

var segments = {};

const Mode$4 = mode;

function NumericData (data) {
  this.mode = Mode$4.NUMERIC;
  this.data = data.toString();
}

NumericData.getBitsLength = function getBitsLength (length) {
  return 10 * Math.floor(length / 3) + ((length % 3) ? ((length % 3) * 3 + 1) : 0)
};

NumericData.prototype.getLength = function getLength () {
  return this.data.length
};

NumericData.prototype.getBitsLength = function getBitsLength () {
  return NumericData.getBitsLength(this.data.length)
};

NumericData.prototype.write = function write (bitBuffer) {
  let i, group, value;

  // The input data string is divided into groups of three digits,
  // and each group is converted to its 10-bit binary equivalent.
  for (i = 0; i + 3 <= this.data.length; i += 3) {
    group = this.data.substr(i, 3);
    value = parseInt(group, 10);

    bitBuffer.put(value, 10);
  }

  // If the number of input digits is not an exact multiple of three,
  // the final one or two digits are converted to 4 or 7 bits respectively.
  const remainingNum = this.data.length - i;
  if (remainingNum > 0) {
    group = this.data.substr(i);
    value = parseInt(group, 10);

    bitBuffer.put(value, remainingNum * 3 + 1);
  }
};

var numericData = NumericData;

const Mode$3 = mode;

/**
 * Array of characters available in alphanumeric mode
 *
 * As per QR Code specification, to each character
 * is assigned a value from 0 to 44 which in this case coincides
 * with the array index
 *
 * @type {Array}
 */
const ALPHA_NUM_CHARS = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ' ', '$', '%', '*', '+', '-', '.', '/', ':'
];

function AlphanumericData (data) {
  this.mode = Mode$3.ALPHANUMERIC;
  this.data = data;
}

AlphanumericData.getBitsLength = function getBitsLength (length) {
  return 11 * Math.floor(length / 2) + 6 * (length % 2)
};

AlphanumericData.prototype.getLength = function getLength () {
  return this.data.length
};

AlphanumericData.prototype.getBitsLength = function getBitsLength () {
  return AlphanumericData.getBitsLength(this.data.length)
};

AlphanumericData.prototype.write = function write (bitBuffer) {
  let i;

  // Input data characters are divided into groups of two characters
  // and encoded as 11-bit binary codes.
  for (i = 0; i + 2 <= this.data.length; i += 2) {
    // The character value of the first character is multiplied by 45
    let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;

    // The character value of the second digit is added to the product
    value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);

    // The sum is then stored as 11-bit binary number
    bitBuffer.put(value, 11);
  }

  // If the number of input data characters is not a multiple of two,
  // the character value of the final character is encoded as a 6-bit binary number.
  if (this.data.length % 2) {
    bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
  }
};

var alphanumericData = AlphanumericData;

var encodeUtf8$1 = function encodeUtf8 (input) {
  var result = [];
  var size = input.length;

  for (var index = 0; index < size; index++) {
    var point = input.charCodeAt(index);

    if (point >= 0xD800 && point <= 0xDBFF && size > index + 1) {
      var second = input.charCodeAt(index + 1);

      if (second >= 0xDC00 && second <= 0xDFFF) {
        // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
        point = (point - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        index += 1;
      }
    }

    // US-ASCII
    if (point < 0x80) {
      result.push(point);
      continue
    }

    // 2-byte UTF-8
    if (point < 0x800) {
      result.push((point >> 6) | 192);
      result.push((point & 63) | 128);
      continue
    }

    // 3-byte UTF-8
    if (point < 0xD800 || (point >= 0xE000 && point < 0x10000)) {
      result.push((point >> 12) | 224);
      result.push(((point >> 6) & 63) | 128);
      result.push((point & 63) | 128);
      continue
    }

    // 4-byte UTF-8
    if (point >= 0x10000 && point <= 0x10FFFF) {
      result.push((point >> 18) | 240);
      result.push(((point >> 12) & 63) | 128);
      result.push(((point >> 6) & 63) | 128);
      result.push((point & 63) | 128);
      continue
    }

    // Invalid character
    result.push(0xEF, 0xBF, 0xBD);
  }

  return new Uint8Array(result).buffer
};

const encodeUtf8 = encodeUtf8$1;
const Mode$2 = mode;

function ByteData (data) {
  this.mode = Mode$2.BYTE;
  this.data = new Uint8Array(encodeUtf8(data));
}

ByteData.getBitsLength = function getBitsLength (length) {
  return length * 8
};

ByteData.prototype.getLength = function getLength () {
  return this.data.length
};

ByteData.prototype.getBitsLength = function getBitsLength () {
  return ByteData.getBitsLength(this.data.length)
};

ByteData.prototype.write = function (bitBuffer) {
  for (let i = 0, l = this.data.length; i < l; i++) {
    bitBuffer.put(this.data[i], 8);
  }
};

var byteData = ByteData;

const Mode$1 = mode;
const Utils$2 = utils$1;

function KanjiData (data) {
  this.mode = Mode$1.KANJI;
  this.data = data;
}

KanjiData.getBitsLength = function getBitsLength (length) {
  return length * 13
};

KanjiData.prototype.getLength = function getLength () {
  return this.data.length
};

KanjiData.prototype.getBitsLength = function getBitsLength () {
  return KanjiData.getBitsLength(this.data.length)
};

KanjiData.prototype.write = function (bitBuffer) {
  let i;

  // In the Shift JIS system, Kanji characters are represented by a two byte combination.
  // These byte values are shifted from the JIS X 0208 values.
  // JIS X 0208 gives details of the shift coded representation.
  for (i = 0; i < this.data.length; i++) {
    let value = Utils$2.toSJIS(this.data[i]);

    // For characters with Shift JIS values from 0x8140 to 0x9FFC:
    if (value >= 0x8140 && value <= 0x9FFC) {
      // Subtract 0x8140 from Shift JIS value
      value -= 0x8140;

    // For characters with Shift JIS values from 0xE040 to 0xEBBF
    } else if (value >= 0xE040 && value <= 0xEBBF) {
      // Subtract 0xC140 from Shift JIS value
      value -= 0xC140;
    } else {
      throw new Error(
        'Invalid SJIS character: ' + this.data[i] + '\n' +
        'Make sure your charset is UTF-8')
    }

    // Multiply most significant byte of result by 0xC0
    // and add least significant byte to product
    value = (((value >>> 8) & 0xff) * 0xC0) + (value & 0xff);

    // Convert result to a 13-bit binary string
    bitBuffer.put(value, 13);
  }
};

var kanjiData = KanjiData;

var dijkstra = {exports: {}};

(function (module) {

/******************************************************************************
 * Created 2008-08-19.
 *
 * Dijkstra path-finding functions. Adapted from the Dijkstar Python project.
 *
 * Copyright (C) 2008
 *   Wyatt Baldwin <self@wyattbaldwin.com>
 *   All rights reserved
 *
 * Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *****************************************************************************/
var dijkstra = {
  single_source_shortest_paths: function(graph, s, d) {
    // Predecessor map for each node that has been encountered.
    // node ID => predecessor node ID
    var predecessors = {};

    // Costs of shortest paths from s to all nodes encountered.
    // node ID => cost
    var costs = {};
    costs[s] = 0;

    // Costs of shortest paths from s to all nodes encountered; differs from
    // `costs` in that it provides easy access to the node that currently has
    // the known shortest path from s.
    // XXX: Do we actually need both `costs` and `open`?
    var open = dijkstra.PriorityQueue.make();
    open.push(s, 0);

    var closest,
        u, v,
        cost_of_s_to_u,
        adjacent_nodes,
        cost_of_e,
        cost_of_s_to_u_plus_cost_of_e,
        cost_of_s_to_v,
        first_visit;
    while (!open.empty()) {
      // In the nodes remaining in graph that have a known cost from s,
      // find the node, u, that currently has the shortest path from s.
      closest = open.pop();
      u = closest.value;
      cost_of_s_to_u = closest.cost;

      // Get nodes adjacent to u...
      adjacent_nodes = graph[u] || {};

      // ...and explore the edges that connect u to those nodes, updating
      // the cost of the shortest paths to any or all of those nodes as
      // necessary. v is the node across the current edge from u.
      for (v in adjacent_nodes) {
        if (adjacent_nodes.hasOwnProperty(v)) {
          // Get the cost of the edge running from u to v.
          cost_of_e = adjacent_nodes[v];

          // Cost of s to u plus the cost of u to v across e--this is *a*
          // cost from s to v that may or may not be less than the current
          // known cost to v.
          cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;

          // If we haven't visited v yet OR if the current known cost from s to
          // v is greater than the new cost we just found (cost of s to u plus
          // cost of u to v across e), update v's cost in the cost list and
          // update v's predecessor in the predecessor list (it's now u).
          cost_of_s_to_v = costs[v];
          first_visit = (typeof costs[v] === 'undefined');
          if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
            costs[v] = cost_of_s_to_u_plus_cost_of_e;
            open.push(v, cost_of_s_to_u_plus_cost_of_e);
            predecessors[v] = u;
          }
        }
      }
    }

    if (typeof d !== 'undefined' && typeof costs[d] === 'undefined') {
      var msg = ['Could not find a path from ', s, ' to ', d, '.'].join('');
      throw new Error(msg);
    }

    return predecessors;
  },

  extract_shortest_path_from_predecessor_list: function(predecessors, d) {
    var nodes = [];
    var u = d;
    while (u) {
      nodes.push(u);
      u = predecessors[u];
    }
    nodes.reverse();
    return nodes;
  },

  find_path: function(graph, s, d) {
    var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
    return dijkstra.extract_shortest_path_from_predecessor_list(
      predecessors, d);
  },

  /**
   * A very naive priority queue implementation.
   */
  PriorityQueue: {
    make: function (opts) {
      var T = dijkstra.PriorityQueue,
          t = {},
          key;
      opts = opts || {};
      for (key in T) {
        if (T.hasOwnProperty(key)) {
          t[key] = T[key];
        }
      }
      t.queue = [];
      t.sorter = opts.sorter || T.default_sorter;
      return t;
    },

    default_sorter: function (a, b) {
      return a.cost - b.cost;
    },

    /**
     * Add a new item to the queue and ensure the highest priority element
     * is at the front of the queue.
     */
    push: function (value, cost) {
      var item = {value: value, cost: cost};
      this.queue.push(item);
      this.queue.sort(this.sorter);
    },

    /**
     * Return the highest priority element in the queue.
     */
    pop: function () {
      return this.queue.shift();
    },

    empty: function () {
      return this.queue.length === 0;
    }
  }
};


// node.js module exports
{
  module.exports = dijkstra;
}
}(dijkstra));

(function (exports) {
const Mode = mode;
const NumericData = numericData;
const AlphanumericData = alphanumericData;
const ByteData = byteData;
const KanjiData = kanjiData;
const Regex = regex;
const Utils = utils$1;
const dijkstra$1 = dijkstra.exports;

/**
 * Returns UTF8 byte length
 *
 * @param  {String} str Input string
 * @return {Number}     Number of byte
 */
function getStringByteLength (str) {
  return unescape(encodeURIComponent(str)).length
}

/**
 * Get a list of segments of the specified mode
 * from a string
 *
 * @param  {Mode}   mode Segment mode
 * @param  {String} str  String to process
 * @return {Array}       Array of object with segments data
 */
function getSegments (regex, mode, str) {
  const segments = [];
  let result;

  while ((result = regex.exec(str)) !== null) {
    segments.push({
      data: result[0],
      index: result.index,
      mode: mode,
      length: result[0].length
    });
  }

  return segments
}

/**
 * Extracts a series of segments with the appropriate
 * modes from a string
 *
 * @param  {String} dataStr Input string
 * @return {Array}          Array of object with segments data
 */
function getSegmentsFromString (dataStr) {
  const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
  const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
  let byteSegs;
  let kanjiSegs;

  if (Utils.isKanjiModeEnabled()) {
    byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
    kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
  } else {
    byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
    kanjiSegs = [];
  }

  const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);

  return segs
    .sort(function (s1, s2) {
      return s1.index - s2.index
    })
    .map(function (obj) {
      return {
        data: obj.data,
        mode: obj.mode,
        length: obj.length
      }
    })
}

/**
 * Returns how many bits are needed to encode a string of
 * specified length with the specified mode
 *
 * @param  {Number} length String length
 * @param  {Mode} mode     Segment mode
 * @return {Number}        Bit length
 */
function getSegmentBitsLength (length, mode) {
  switch (mode) {
    case Mode.NUMERIC:
      return NumericData.getBitsLength(length)
    case Mode.ALPHANUMERIC:
      return AlphanumericData.getBitsLength(length)
    case Mode.KANJI:
      return KanjiData.getBitsLength(length)
    case Mode.BYTE:
      return ByteData.getBitsLength(length)
  }
}

/**
 * Merges adjacent segments which have the same mode
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function mergeSegments (segs) {
  return segs.reduce(function (acc, curr) {
    const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
    if (prevSeg && prevSeg.mode === curr.mode) {
      acc[acc.length - 1].data += curr.data;
      return acc
    }

    acc.push(curr);
    return acc
  }, [])
}

/**
 * Generates a list of all possible nodes combination which
 * will be used to build a segments graph.
 *
 * Nodes are divided by groups. Each group will contain a list of all the modes
 * in which is possible to encode the given text.
 *
 * For example the text '12345' can be encoded as Numeric, Alphanumeric or Byte.
 * The group for '12345' will contain then 3 objects, one for each
 * possible encoding mode.
 *
 * Each node represents a possible segment.
 *
 * @param  {Array} segs Array of object with segments data
 * @return {Array}      Array of object with segments data
 */
function buildNodes (segs) {
  const nodes = [];
  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i];

    switch (seg.mode) {
      case Mode.NUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ]);
        break
      case Mode.ALPHANUMERIC:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: seg.length }
        ]);
        break
      case Mode.KANJI:
        nodes.push([seg,
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ]);
        break
      case Mode.BYTE:
        nodes.push([
          { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
        ]);
    }
  }

  return nodes
}

/**
 * Builds a graph from a list of nodes.
 * All segments in each node group will be connected with all the segments of
 * the next group and so on.
 *
 * At each connection will be assigned a weight depending on the
 * segment's byte length.
 *
 * @param  {Array} nodes    Array of object with segments data
 * @param  {Number} version QR Code version
 * @return {Object}         Graph of all possible segments
 */
function buildGraph (nodes, version) {
  const table = {};
  const graph = { start: {} };
  let prevNodeIds = ['start'];

  for (let i = 0; i < nodes.length; i++) {
    const nodeGroup = nodes[i];
    const currentNodeIds = [];

    for (let j = 0; j < nodeGroup.length; j++) {
      const node = nodeGroup[j];
      const key = '' + i + j;

      currentNodeIds.push(key);
      table[key] = { node: node, lastCount: 0 };
      graph[key] = {};

      for (let n = 0; n < prevNodeIds.length; n++) {
        const prevNodeId = prevNodeIds[n];

        if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
          graph[prevNodeId][key] =
            getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) -
            getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);

          table[prevNodeId].lastCount += node.length;
        } else {
          if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;

          graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) +
            4 + Mode.getCharCountIndicator(node.mode, version); // switch cost
        }
      }
    }

    prevNodeIds = currentNodeIds;
  }

  for (let n = 0; n < prevNodeIds.length; n++) {
    graph[prevNodeIds[n]].end = 0;
  }

  return { map: graph, table: table }
}

/**
 * Builds a segment from a specified data and mode.
 * If a mode is not specified, the more suitable will be used.
 *
 * @param  {String} data             Input data
 * @param  {Mode | String} modesHint Data mode
 * @return {Segment}                 Segment
 */
function buildSingleSegment (data, modesHint) {
  let mode;
  const bestMode = Mode.getBestModeForData(data);

  mode = Mode.from(modesHint, bestMode);

  // Make sure data can be encoded
  if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
    throw new Error('"' + data + '"' +
      ' cannot be encoded with mode ' + Mode.toString(mode) +
      '.\n Suggested mode is: ' + Mode.toString(bestMode))
  }

  // Use Mode.BYTE if Kanji support is disabled
  if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
    mode = Mode.BYTE;
  }

  switch (mode) {
    case Mode.NUMERIC:
      return new NumericData(data)

    case Mode.ALPHANUMERIC:
      return new AlphanumericData(data)

    case Mode.KANJI:
      return new KanjiData(data)

    case Mode.BYTE:
      return new ByteData(data)
  }
}

/**
 * Builds a list of segments from an array.
 * Array can contain Strings or Objects with segment's info.
 *
 * For each item which is a string, will be generated a segment with the given
 * string and the more appropriate encoding mode.
 *
 * For each item which is an object, will be generated a segment with the given
 * data and mode.
 * Objects must contain at least the property "data".
 * If property "mode" is not present, the more suitable mode will be used.
 *
 * @param  {Array} array Array of objects with segments data
 * @return {Array}       Array of Segments
 */
exports.fromArray = function fromArray (array) {
  return array.reduce(function (acc, seg) {
    if (typeof seg === 'string') {
      acc.push(buildSingleSegment(seg, null));
    } else if (seg.data) {
      acc.push(buildSingleSegment(seg.data, seg.mode));
    }

    return acc
  }, [])
};

/**
 * Builds an optimized sequence of segments from a string,
 * which will produce the shortest possible bitstream.
 *
 * @param  {String} data    Input string
 * @param  {Number} version QR Code version
 * @return {Array}          Array of segments
 */
exports.fromString = function fromString (data, version) {
  const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());

  const nodes = buildNodes(segs);
  const graph = buildGraph(nodes, version);
  const path = dijkstra$1.find_path(graph.map, 'start', 'end');

  const optimizedSegs = [];
  for (let i = 1; i < path.length - 1; i++) {
    optimizedSegs.push(graph.table[path[i]].node);
  }

  return exports.fromArray(mergeSegments(optimizedSegs))
};

/**
 * Splits a string in various segments with the modes which
 * best represent their content.
 * The produced segments are far from being optimized.
 * The output of this function is only used to estimate a QR Code version
 * which may contain the data.
 *
 * @param  {string} data Input string
 * @return {Array}       Array of segments
 */
exports.rawSplit = function rawSplit (data) {
  return exports.fromArray(
    getSegmentsFromString(data, Utils.isKanjiModeEnabled())
  )
};
}(segments));

const Utils$1 = utils$1;
const ECLevel = errorCorrectionLevel;
const BitBuffer = bitBuffer;
const BitMatrix = bitMatrix;
const AlignmentPattern = alignmentPattern;
const FinderPattern = finderPattern;
const MaskPattern = maskPattern;
const ECCode = errorCorrectionCode;
const ReedSolomonEncoder = reedSolomonEncoder;
const Version = version;
const FormatInfo = formatInfo;
const Mode = mode;
const Segments = segments;

/**
 * QRCode for JavaScript
 *
 * modified by Ryan Day for nodejs support
 * Copyright (c) 2011 Ryan Day
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
*/

/**
 * Add finder patterns bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupFinderPattern (matrix, version) {
  const size = matrix.size;
  const pos = FinderPattern.getPositions(version);

  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0];
    const col = pos[i][1];

    for (let r = -1; r <= 7; r++) {
      if (row + r <= -1 || size <= row + r) continue

      for (let c = -1; c <= 7; c++) {
        if (col + c <= -1 || size <= col + c) continue

        if ((r >= 0 && r <= 6 && (c === 0 || c === 6)) ||
          (c >= 0 && c <= 6 && (r === 0 || r === 6)) ||
          (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}

/**
 * Add timing pattern bits to matrix
 *
 * Note: this function must be called before {@link setupAlignmentPattern}
 *
 * @param  {BitMatrix} matrix Modules matrix
 */
function setupTimingPattern (matrix) {
  const size = matrix.size;

  for (let r = 8; r < size - 8; r++) {
    const value = r % 2 === 0;
    matrix.set(r, 6, value, true);
    matrix.set(6, r, value, true);
  }
}

/**
 * Add alignment patterns bits to matrix
 *
 * Note: this function must be called after {@link setupTimingPattern}
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupAlignmentPattern (matrix, version) {
  const pos = AlignmentPattern.getPositions(version);

  for (let i = 0; i < pos.length; i++) {
    const row = pos[i][0];
    const col = pos[i][1];

    for (let r = -2; r <= 2; r++) {
      for (let c = -2; c <= 2; c++) {
        if (r === -2 || r === 2 || c === -2 || c === 2 ||
          (r === 0 && c === 0)) {
          matrix.set(row + r, col + c, true, true);
        } else {
          matrix.set(row + r, col + c, false, true);
        }
      }
    }
  }
}

/**
 * Add version info bits to matrix
 *
 * @param  {BitMatrix} matrix  Modules matrix
 * @param  {Number}    version QR Code version
 */
function setupVersionInfo (matrix, version) {
  const size = matrix.size;
  const bits = Version.getEncodedBits(version);
  let row, col, mod;

  for (let i = 0; i < 18; i++) {
    row = Math.floor(i / 3);
    col = i % 3 + size - 8 - 3;
    mod = ((bits >> i) & 1) === 1;

    matrix.set(row, col, mod, true);
    matrix.set(col, row, mod, true);
  }
}

/**
 * Add format info bits to matrix
 *
 * @param  {BitMatrix} matrix               Modules matrix
 * @param  {ErrorCorrectionLevel}    errorCorrectionLevel Error correction level
 * @param  {Number}    maskPattern          Mask pattern reference value
 */
function setupFormatInfo (matrix, errorCorrectionLevel, maskPattern) {
  const size = matrix.size;
  const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
  let i, mod;

  for (i = 0; i < 15; i++) {
    mod = ((bits >> i) & 1) === 1;

    // vertical
    if (i < 6) {
      matrix.set(i, 8, mod, true);
    } else if (i < 8) {
      matrix.set(i + 1, 8, mod, true);
    } else {
      matrix.set(size - 15 + i, 8, mod, true);
    }

    // horizontal
    if (i < 8) {
      matrix.set(8, size - i - 1, mod, true);
    } else if (i < 9) {
      matrix.set(8, 15 - i - 1 + 1, mod, true);
    } else {
      matrix.set(8, 15 - i - 1, mod, true);
    }
  }

  // fixed module
  matrix.set(size - 8, 8, 1, true);
}

/**
 * Add encoded data bits to matrix
 *
 * @param  {BitMatrix}  matrix Modules matrix
 * @param  {Uint8Array} data   Data codewords
 */
function setupData (matrix, data) {
  const size = matrix.size;
  let inc = -1;
  let row = size - 1;
  let bitIndex = 7;
  let byteIndex = 0;

  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6) col--;

    while (true) {
      for (let c = 0; c < 2; c++) {
        if (!matrix.isReserved(row, col - c)) {
          let dark = false;

          if (byteIndex < data.length) {
            dark = (((data[byteIndex] >>> bitIndex) & 1) === 1);
          }

          matrix.set(row, col - c, dark);
          bitIndex--;

          if (bitIndex === -1) {
            byteIndex++;
            bitIndex = 7;
          }
        }
      }

      row += inc;

      if (row < 0 || size <= row) {
        row -= inc;
        inc = -inc;
        break
      }
    }
  }
}

/**
 * Create encoded codewords from data input
 *
 * @param  {Number}   version              QR Code version
 * @param  {ErrorCorrectionLevel}   errorCorrectionLevel Error correction level
 * @param  {ByteData} data                 Data input
 * @return {Uint8Array}                    Buffer containing encoded codewords
 */
function createData (version, errorCorrectionLevel, segments) {
  // Prepare data buffer
  const buffer = new BitBuffer();

  segments.forEach(function (data) {
    // prefix data with mode indicator (4 bits)
    buffer.put(data.mode.bit, 4);

    // Prefix data with character count indicator.
    // The character count indicator is a string of bits that represents the
    // number of characters that are being encoded.
    // The character count indicator must be placed after the mode indicator
    // and must be a certain number of bits long, depending on the QR version
    // and data mode
    // @see {@link Mode.getCharCountIndicator}.
    buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));

    // add binary data sequence to buffer
    data.write(buffer);
  });

  // Calculate required number of bits
  const totalCodewords = Utils$1.getSymbolTotalCodewords(version);
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
  const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;

  // Add a terminator.
  // If the bit string is shorter than the total number of required bits,
  // a terminator of up to four 0s must be added to the right side of the string.
  // If the bit string is more than four bits shorter than the required number of bits,
  // add four 0s to the end.
  if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
    buffer.put(0, 4);
  }

  // If the bit string is fewer than four bits shorter, add only the number of 0s that
  // are needed to reach the required number of bits.

  // After adding the terminator, if the number of bits in the string is not a multiple of 8,
  // pad the string on the right with 0s to make the string's length a multiple of 8.
  while (buffer.getLengthInBits() % 8 !== 0) {
    buffer.putBit(0);
  }

  // Add pad bytes if the string is still shorter than the total number of required bits.
  // Extend the buffer to fill the data capacity of the symbol corresponding to
  // the Version and Error Correction Level by adding the Pad Codewords 11101100 (0xEC)
  // and 00010001 (0x11) alternately.
  const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
  for (let i = 0; i < remainingByte; i++) {
    buffer.put(i % 2 ? 0x11 : 0xEC, 8);
  }

  return createCodewords(buffer, version, errorCorrectionLevel)
}

/**
 * Encode input data with Reed-Solomon and return codewords with
 * relative error correction bits
 *
 * @param  {BitBuffer} bitBuffer            Data to encode
 * @param  {Number}    version              QR Code version
 * @param  {ErrorCorrectionLevel} errorCorrectionLevel Error correction level
 * @return {Uint8Array}                     Buffer containing encoded codewords
 */
function createCodewords (bitBuffer, version, errorCorrectionLevel) {
  // Total codewords for this QR code version (Data + Error correction)
  const totalCodewords = Utils$1.getSymbolTotalCodewords(version);

  // Total number of error correction codewords
  const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);

  // Total number of data codewords
  const dataTotalCodewords = totalCodewords - ecTotalCodewords;

  // Total number of blocks
  const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);

  // Calculate how many blocks each group should contain
  const blocksInGroup2 = totalCodewords % ecTotalBlocks;
  const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;

  const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);

  const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
  const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;

  // Number of EC codewords is the same for both groups
  const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;

  // Initialize a Reed-Solomon encoder with a generator polynomial of degree ecCount
  const rs = new ReedSolomonEncoder(ecCount);

  let offset = 0;
  const dcData = new Array(ecTotalBlocks);
  const ecData = new Array(ecTotalBlocks);
  let maxDataSize = 0;
  const buffer = new Uint8Array(bitBuffer.buffer);

  // Divide the buffer into the required number of blocks
  for (let b = 0; b < ecTotalBlocks; b++) {
    const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;

    // extract a block of data from buffer
    dcData[b] = buffer.slice(offset, offset + dataSize);

    // Calculate EC codewords for this data block
    ecData[b] = rs.encode(dcData[b]);

    offset += dataSize;
    maxDataSize = Math.max(maxDataSize, dataSize);
  }

  // Create final data
  // Interleave the data and error correction codewords from each block
  const data = new Uint8Array(totalCodewords);
  let index = 0;
  let i, r;

  // Add data codewords
  for (i = 0; i < maxDataSize; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      if (i < dcData[r].length) {
        data[index++] = dcData[r][i];
      }
    }
  }

  // Apped EC codewords
  for (i = 0; i < ecCount; i++) {
    for (r = 0; r < ecTotalBlocks; r++) {
      data[index++] = ecData[r][i];
    }
  }

  return data
}

/**
 * Build QR Code symbol
 *
 * @param  {String} data                 Input string
 * @param  {Number} version              QR Code version
 * @param  {ErrorCorretionLevel} errorCorrectionLevel Error level
 * @param  {MaskPattern} maskPattern     Mask pattern
 * @return {Object}                      Object containing symbol data
 */
function createSymbol (data, version, errorCorrectionLevel, maskPattern) {
  let segments;

  if (Array.isArray(data)) {
    segments = Segments.fromArray(data);
  } else if (typeof data === 'string') {
    let estimatedVersion = version;

    if (!estimatedVersion) {
      const rawSegments = Segments.rawSplit(data);

      // Estimate best version that can contain raw splitted segments
      estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
    }

    // Build optimized segments
    // If estimated version is undefined, try with the highest version
    segments = Segments.fromString(data, estimatedVersion || 40);
  } else {
    throw new Error('Invalid data')
  }

  // Get the min version that can contain data
  const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);

  // If no version is found, data cannot be stored
  if (!bestVersion) {
    throw new Error('The amount of data is too big to be stored in a QR Code')
  }

  // If not specified, use min version as default
  if (!version) {
    version = bestVersion;

  // Check if the specified version can contain the data
  } else if (version < bestVersion) {
    throw new Error('\n' +
      'The chosen QR Code version cannot contain this amount of data.\n' +
      'Minimum version required to store current data is: ' + bestVersion + '.\n'
    )
  }

  const dataBits = createData(version, errorCorrectionLevel, segments);

  // Allocate matrix buffer
  const moduleCount = Utils$1.getSymbolSize(version);
  const modules = new BitMatrix(moduleCount);

  // Add function modules
  setupFinderPattern(modules, version);
  setupTimingPattern(modules);
  setupAlignmentPattern(modules, version);

  // Add temporary dummy bits for format info just to set them as reserved.
  // This is needed to prevent these bits from being masked by {@link MaskPattern.applyMask}
  // since the masking operation must be performed only on the encoding region.
  // These blocks will be replaced with correct values later in code.
  setupFormatInfo(modules, errorCorrectionLevel, 0);

  if (version >= 7) {
    setupVersionInfo(modules, version);
  }

  // Add data codewords
  setupData(modules, dataBits);

  if (isNaN(maskPattern)) {
    // Find best mask pattern
    maskPattern = MaskPattern.getBestMask(modules,
      setupFormatInfo.bind(null, modules, errorCorrectionLevel));
  }

  // Apply mask pattern
  MaskPattern.applyMask(maskPattern, modules);

  // Replace format info bits with correct values
  setupFormatInfo(modules, errorCorrectionLevel, maskPattern);

  return {
    modules: modules,
    version: version,
    errorCorrectionLevel: errorCorrectionLevel,
    maskPattern: maskPattern,
    segments: segments
  }
}

/**
 * QR Code
 *
 * @param {String | Array} data                 Input data
 * @param {Object} options                      Optional configurations
 * @param {Number} options.version              QR Code version
 * @param {String} options.errorCorrectionLevel Error correction level
 * @param {Function} options.toSJISFunc         Helper func to convert utf8 to sjis
 */
qrcode.create = function create (data, options) {
  if (typeof data === 'undefined' || data === '') {
    throw new Error('No input text')
  }

  let errorCorrectionLevel = ECLevel.M;
  let version;
  let mask;

  if (typeof options !== 'undefined') {
    // Use higher error correction level as default
    errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
    version = Version.from(options.version);
    mask = MaskPattern.from(options.maskPattern);

    if (options.toSJISFunc) {
      Utils$1.setToSJISFunction(options.toSJISFunc);
    }
  }

  return createSymbol(data, version, errorCorrectionLevel, mask)
};

var canvas = {};

var utils = {};

(function (exports) {
function hex2rgba (hex) {
  if (typeof hex === 'number') {
    hex = hex.toString();
  }

  if (typeof hex !== 'string') {
    throw new Error('Color should be defined as hex string')
  }

  let hexCode = hex.slice().replace('#', '').split('');
  if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
    throw new Error('Invalid hex color: ' + hex)
  }

  // Convert from short to long form (fff -> ffffff)
  if (hexCode.length === 3 || hexCode.length === 4) {
    hexCode = Array.prototype.concat.apply([], hexCode.map(function (c) {
      return [c, c]
    }));
  }

  // Add default alpha value
  if (hexCode.length === 6) hexCode.push('F', 'F');

  const hexValue = parseInt(hexCode.join(''), 16);

  return {
    r: (hexValue >> 24) & 255,
    g: (hexValue >> 16) & 255,
    b: (hexValue >> 8) & 255,
    a: hexValue & 255,
    hex: '#' + hexCode.slice(0, 6).join('')
  }
}

exports.getOptions = function getOptions (options) {
  if (!options) options = {};
  if (!options.color) options.color = {};

  const margin = typeof options.margin === 'undefined' ||
    options.margin === null ||
    options.margin < 0
    ? 4
    : options.margin;

  const width = options.width && options.width >= 21 ? options.width : undefined;
  const scale = options.scale || 4;

  return {
    width: width,
    scale: width ? 4 : scale,
    margin: margin,
    color: {
      dark: hex2rgba(options.color.dark || '#000000ff'),
      light: hex2rgba(options.color.light || '#ffffffff')
    },
    type: options.type,
    rendererOpts: options.rendererOpts || {}
  }
};

exports.getScale = function getScale (qrSize, opts) {
  return opts.width && opts.width >= qrSize + opts.margin * 2
    ? opts.width / (qrSize + opts.margin * 2)
    : opts.scale
};

exports.getImageWidth = function getImageWidth (qrSize, opts) {
  const scale = exports.getScale(qrSize, opts);
  return Math.floor((qrSize + opts.margin * 2) * scale)
};

exports.qrToImageData = function qrToImageData (imgData, qr, opts) {
  const size = qr.modules.size;
  const data = qr.modules.data;
  const scale = exports.getScale(size, opts);
  const symbolSize = Math.floor((size + opts.margin * 2) * scale);
  const scaledMargin = opts.margin * scale;
  const palette = [opts.color.light, opts.color.dark];

  for (let i = 0; i < symbolSize; i++) {
    for (let j = 0; j < symbolSize; j++) {
      let posDst = (i * symbolSize + j) * 4;
      let pxColor = opts.color.light;

      if (i >= scaledMargin && j >= scaledMargin &&
        i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
        const iSrc = Math.floor((i - scaledMargin) / scale);
        const jSrc = Math.floor((j - scaledMargin) / scale);
        pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
      }

      imgData[posDst++] = pxColor.r;
      imgData[posDst++] = pxColor.g;
      imgData[posDst++] = pxColor.b;
      imgData[posDst] = pxColor.a;
    }
  }
};
}(utils));

(function (exports) {
const Utils = utils;

function clearCanvas (ctx, canvas, size) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!canvas.style) canvas.style = {};
  canvas.height = size;
  canvas.width = size;
  canvas.style.height = size + 'px';
  canvas.style.width = size + 'px';
}

function getCanvasElement () {
  try {
    return document.createElement('canvas')
  } catch (e) {
    throw new Error('You need to specify a canvas element')
  }
}

exports.render = function render (qrData, canvas, options) {
  let opts = options;
  let canvasEl = canvas;

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas;
    canvas = undefined;
  }

  if (!canvas) {
    canvasEl = getCanvasElement();
  }

  opts = Utils.getOptions(opts);
  const size = Utils.getImageWidth(qrData.modules.size, opts);

  const ctx = canvasEl.getContext('2d');
  const image = ctx.createImageData(size, size);
  Utils.qrToImageData(image.data, qrData, opts);

  clearCanvas(ctx, canvasEl, size);
  ctx.putImageData(image, 0, 0);

  return canvasEl
};

exports.renderToDataURL = function renderToDataURL (qrData, canvas, options) {
  let opts = options;

  if (typeof opts === 'undefined' && (!canvas || !canvas.getContext)) {
    opts = canvas;
    canvas = undefined;
  }

  if (!opts) opts = {};

  const canvasEl = exports.render(qrData, canvas, opts);

  const type = opts.type || 'image/png';
  const rendererOpts = opts.rendererOpts || {};

  return canvasEl.toDataURL(type, rendererOpts.quality)
};
}(canvas));

var svgTag = {};

const Utils = utils;

function getColorAttrib (color, attrib) {
  const alpha = color.a / 255;
  const str = attrib + '="' + color.hex + '"';

  return alpha < 1
    ? str + ' ' + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"'
    : str
}

function svgCmd (cmd, x, y) {
  let str = cmd + x;
  if (typeof y !== 'undefined') str += ' ' + y;

  return str
}

function qrToPath (data, size, margin) {
  let path = '';
  let moveBy = 0;
  let newRow = false;
  let lineLength = 0;

  for (let i = 0; i < data.length; i++) {
    const col = Math.floor(i % size);
    const row = Math.floor(i / size);

    if (!col && !newRow) newRow = true;

    if (data[i]) {
      lineLength++;

      if (!(i > 0 && col > 0 && data[i - 1])) {
        path += newRow
          ? svgCmd('M', col + margin, 0.5 + row + margin)
          : svgCmd('m', moveBy, 0);

        moveBy = 0;
        newRow = false;
      }

      if (!(col + 1 < size && data[i + 1])) {
        path += svgCmd('h', lineLength);
        lineLength = 0;
      }
    } else {
      moveBy++;
    }
  }

  return path
}

svgTag.render = function render (qrData, options, cb) {
  const opts = Utils.getOptions(options);
  const size = qrData.modules.size;
  const data = qrData.modules.data;
  const qrcodesize = size + opts.margin * 2;

  const bg = !opts.color.light.a
    ? ''
    : '<path ' + getColorAttrib(opts.color.light, 'fill') +
      ' d="M0 0h' + qrcodesize + 'v' + qrcodesize + 'H0z"/>';

  const path =
    '<path ' + getColorAttrib(opts.color.dark, 'stroke') +
    ' d="' + qrToPath(data, size, opts.margin) + '"/>';

  const viewBox = 'viewBox="' + '0 0 ' + qrcodesize + ' ' + qrcodesize + '"';

  const width = !opts.width ? '' : 'width="' + opts.width + '" height="' + opts.width + '" ';

  const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + '</svg>\n';

  if (typeof cb === 'function') {
    cb(null, svgTag);
  }

  return svgTag
};

const canPromise = canPromise$1;

const QRCode = qrcode;
const CanvasRenderer = canvas;
const SvgRenderer = svgTag;

function renderCanvas (renderFunc, canvas, text, opts, cb) {
  const args = [].slice.call(arguments, 1);
  const argsNum = args.length;
  const isLastArgCb = typeof args[argsNum - 1] === 'function';

  if (!isLastArgCb && !canPromise()) {
    throw new Error('Callback required as last argument')
  }

  if (isLastArgCb) {
    if (argsNum < 2) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 2) {
      cb = text;
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 3) {
      if (canvas.getContext && typeof cb === 'undefined') {
        cb = opts;
        opts = undefined;
      } else {
        cb = opts;
        opts = text;
        text = canvas;
        canvas = undefined;
      }
    }
  } else {
    if (argsNum < 1) {
      throw new Error('Too few arguments provided')
    }

    if (argsNum === 1) {
      text = canvas;
      canvas = opts = undefined;
    } else if (argsNum === 2 && !canvas.getContext) {
      opts = text;
      text = canvas;
      canvas = undefined;
    }

    return new Promise(function (resolve, reject) {
      try {
        const data = QRCode.create(text, opts);
        resolve(renderFunc(data, canvas, opts));
      } catch (e) {
        reject(e);
      }
    })
  }

  try {
    const data = QRCode.create(text, opts);
    cb(null, renderFunc(data, canvas, opts));
  } catch (e) {
    cb(e);
  }
}

browser.create = QRCode.create;
browser.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
browser.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);

// only svg for now.
browser.toString = renderCanvas.bind(null, function (data, _, opts) {
  return SvgRenderer.render(data, opts)
});

var duration$1 = {exports: {}};

(function (module, exports) {
!function(t,s){module.exports=s();}(commonjsGlobal,(function(){var t,s,n=1e3,i=6e4,e=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,h=2592e6,a=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:u,months:h,days:r,hours:e,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},c=function(t){return t instanceof p},f=function(t,s,n){return new p(t,n,s.$l)},m=function(t){return s.p(t)+"s"},l=function(t){return t<0},$=function(t){return l(t)?Math.ceil(t):Math.floor(t)},y=function(t){return Math.abs(t)},g=function(t,s){return t?l(t)?{negative:!0,format:""+y(t)+s}:{negative:!1,format:""+t+s}:{negative:!1,format:""}},p=function(){function l(t,s,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),s)return f(t*d[m(s)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(s){i.$d[m(s)]=t[s];})),this.calMilliseconds(),this;if("string"==typeof t){var e=t.match(a);if(e){var r=e.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var y=l.prototype;return y.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(s,n){return s+(t.$d[n]||0)*d[n]}),0);},y.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=$(t/u),t%=u,this.$d.months=$(t/h),t%=h,this.$d.days=$(t/r),t%=r,this.$d.hours=$(t/e),t%=e,this.$d.minutes=$(t/i),t%=i,this.$d.seconds=$(t/n),t%=n,this.$d.milliseconds=t;},y.toISOString=function(){var t=g(this.$d.years,"Y"),s=g(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=g(n,"D"),e=g(this.$d.hours,"H"),r=g(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var u=g(o,"S"),h=t.negative||s.negative||i.negative||e.negative||r.negative||u.negative,a=e.format||r.format||u.format?"T":"",d=(h?"-":"")+"P"+t.format+s.format+i.format+a+e.format+r.format+u.format;return "P"===d||"-P"===d?"P0D":d},y.toJSON=function(){return this.toISOString()},y.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,s){return s||String(i[t])}))},y.as=function(t){return this.$ms/d[m(t)]},y.get=function(t){var s=this.$ms,n=m(t);return "milliseconds"===n?s%=1e3:s="weeks"===n?$(s/d[n]):this.$d[n],0===s?0:s},y.add=function(t,s,n){var i;return i=s?t*d[m(s)]:c(t)?t.$ms:f(t,this).$ms,f(this.$ms+i*(n?-1:1),this)},y.subtract=function(t,s){return this.add(t,s,!0)},y.locale=function(t){var s=this.clone();return s.$l=t,s},y.clone=function(){return f(this.$ms,this)},y.humanize=function(s){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!s)},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},l}();return function(n,i,e){t=e,s=e().$utils(),e.duration=function(t,s){var n=e.locale();return f(t,{$l:n},s)},e.isDuration=c;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,s){return c(t)&&(t=t.asMilliseconds()),r.bind(this)(t,s)},i.prototype.subtract=function(t,s){return c(t)&&(t=t.asMilliseconds()),o.bind(this)(t,s)};}}));
}(duration$1));

var duration = duration$1.exports;

var spinner_vue_vue_type_style_index_0_scoped_true_lang = '';

const _sfc_main$1 = {};

const _withScopeId$1 = n => (pushScopeId("data-v-0de230c3"),n=n(),popScopeId(),n);
const _hoisted_1$1 = { class: "spinner" };
const _hoisted_2$1 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/createBaseVNode("div", { class: "bounce1" }, null, -1 /* HOISTED */));
const _hoisted_3$1 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/createBaseVNode("div", { class: "bounce2" }, null, -1 /* HOISTED */));
const _hoisted_4$1 = /*#__PURE__*/ _withScopeId$1(() => /*#__PURE__*/createBaseVNode("div", { class: "bounce3" }, null, -1 /* HOISTED */));
const _hoisted_5$1 = [
  _hoisted_2$1,
  _hoisted_3$1,
  _hoisted_4$1
];

function _sfc_render(_ctx, _cache) {
  return (openBlock(), createElementBlock("div", _hoisted_1$1, _hoisted_5$1))
}
var spinner = /*#__PURE__*/_export_sfc(_sfc_main$1, [['render',_sfc_render],['__scopeId',"data-v-0de230c3"],['__file',"/Users/hotheat/Desktop/nft/nft-show/src/components/spinner/spinner.vue"]]);

var WechatPayIcon = "/assets/icon_wechat_pay.5ea904ad.svg";

var AliPayIcon = "/assets/icon_zfb_pay.7bf70e26.svg";

var SandPayIcon = "/assets/sandPay_icon.7bc987cd.svg";

var PayConfirm_scss_vue_type_style_index_0_src_b449c1e2_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-b449c1e2"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  key: 0,
  class: "dialogTitleWrap"
};
const _hoisted_2 = ["srcdoc"];
const _hoisted_3 = {
  key: 0,
  class: "wechat-pay-success"
};
const _hoisted_4 = { class: "paySuccessWrap" };
const _hoisted_5 = { class: "top" };
const _hoisted_6 = ["src"];
const _hoisted_7 = { class: "center" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "ShowPayLimited", -1));
const _hoisted_9 = { class: "foot" };
const _hoisted_10 = { key: 0 };
const _hoisted_11 = {
  key: 1,
  class: "appPaySuccessCallBackWrap"
};
const _hoisted_12 = { class: "item" };
const _hoisted_13 = { class: "item" };
const _hoisted_14 = {
  key: 2,
  class: "wechat-pay-confirm"
};
const _hoisted_15 = { class: "nftName" };
const _hoisted_16 = { key: 0 };
const _hoisted_17 = { class: "buyInfoWrap" };
const _hoisted_18 = { class: "orderAmount" };
const _hoisted_19 = { class: "top" };
const _hoisted_20 = { class: "left" };
const _hoisted_21 = { class: "right" };
const _hoisted_22 = { class: "qrcodeWrap" };
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("canvas", { id: "qrcodeContainer" }, null, -1));
const _hoisted_24 = { class: "restTime" };
const _hoisted_25 = { key: 0 };
const _hoisted_26 = { key: 1 };
const _hoisted_27 = {
  key: 0,
  class: "invaliableTime"
};
const _hoisted_28 = { class: "foot" };
const _hoisted_29 = {
  key: 0,
  class: "legalWaitingConfirmWrap"
};
const _hoisted_30 = { class: "item" };
const _hoisted_31 = { class: "item" };
const _hoisted_32 = {
  key: 1,
  class: "waitingConfirmWrap"
};
const _hoisted_33 = { class: "item" };
const _hoisted_34 = { class: "item" };
const _hoisted_35 = {
  key: 3,
  class: "pay-confirm"
};
const _hoisted_36 = { class: "nft flex" };
const _hoisted_37 = { class: "top" };
const _hoisted_38 = { class: "cover" };
const _hoisted_39 = { class: "flex1" };
const _hoisted_40 = { class: "name" };
const _hoisted_41 = { class: "user-list" };
const _hoisted_42 = { class: "user-item flex flex-align-center" };
const _hoisted_43 = { class: "username" };
const _hoisted_44 = { class: "label" };
const _hoisted_45 = { class: "user-item flex flex-align-center" };
const _hoisted_46 = { class: "username" };
const _hoisted_47 = { class: "label" };
const _hoisted_48 = {
  key: 0,
  class: "composeFlagWrap"
};
const _hoisted_49 = { class: "left" };
const _hoisted_50 = { class: "right" };
const _hoisted_51 = { class: "price-list" };
const _hoisted_52 = {
  key: 0,
  class: "price-item flex flex-align-center"
};
const _hoisted_53 = { class: "name flex1" };
const _hoisted_54 = { class: "buyCalc" };
const _hoisted_55 = { class: "price-item flex flex-align-center" };
const _hoisted_56 = { class: "name flex1" };
const _hoisted_57 = { class: "amount" };
const _hoisted_58 = { key: 0 };
const _hoisted_59 = {
  key: 1,
  class: "price-item flex flex-align-center"
};
const _hoisted_60 = { class: "name flex1" };
const _hoisted_61 = { class: "amount" };
const _hoisted_62 = { key: 0 };
const _hoisted_63 = {
  key: 2,
  class: "price-item flex flex-align-center"
};
const _hoisted_64 = { class: "name flex1" };
const _hoisted_65 = { class: "amount" };
const _hoisted_66 = { class: "total-price flex flex-align-center" };
const _hoisted_67 = { class: "name flex1" };
const _hoisted_68 = { class: "amount flex flex-align-center" };
const _hoisted_69 = ["src"];
const _hoisted_70 = { key: 1 };
const _hoisted_71 = { class: "operate flex" };
const _hoisted_72 = {
  key: 0,
  class: "wechatBtnWrap"
};
const _hoisted_73 = { class: "pay-platform-list" };
const _hoisted_74 = ["src"];
const _hoisted_75 = { class: "title" };
const _hoisted_76 = { class: "name" };
const _hoisted_77 = {
  key: 0,
  class: "tips"
};
const _hoisted_78 = {
  key: 1,
  class: "bsvPayWrap flex"
};
const _hoisted_79 = ["src"];
const _hoisted_80 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "el-icon-caret-right" }, null, -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    visible: { type: Boolean, required: true, default: true },
    genesis: { type: String, required: true },
    codehash: { type: String, required: true },
    tokenIndex: { type: String, required: true },
    isLegal: { type: Boolean, required: true, default: false },
    uuid: { type: String, required: true, default: "" },
    price: { type: String, required: true, default: "0" },
    blindBoxPage: { type: Boolean, required: false }
  },
  emits: ["close", "success", "fail"],
  setup(__props, { emit }) {
    const props = __props;
    dayjs.extend(duration);
    const i18n = useI18n();
    const isSkeleton = ref(true);
    const balance = ref(0);
    const buyAmount = ref(1);
    const quickPayDoc = ref("");
    const quickPayOpen = ref(false);
    const envLimited = ref(`${"0"}`);
    const cnyMode = computed(() => {
      return store.state.currentPrice === UnitName.RMB;
    });
    const payPlatformList = [
      {
        icon: WechatPayIcon,
        name: i18n.t("wechatpay"),
        platform: PayPlatform.WechatPay,
        background: "#909399",
        disabled: true,
        suffix: false
      },
      {
        icon: AliPayIcon,
        name: i18n.t("aliPay"),
        platform: PayPlatform.AliPay,
        background: "#108EE9",
        disabled: false,
        suffix: false
      },
      {
        icon: SandPayIcon,
        name: i18n.t("quickPay"),
        platform: PayPlatform.Sand,
        background: "#FCA63D",
        disabled: false,
        suffix: true
      }
    ];
    const payPlatformIndex = ref(-1);
    const isOpenPayMode = ref(false);
    const nft = reactive({
      val: null
    });
    const fee = { val: null };
    const qrcodeUrl = ref("");
    const wechatpayState = ref(0);
    const wechatpayOverTime = ref(null);
    const restPayTime = ref("01:00");
    const endTime = ref(null);
    const restPayTimeInterval = ref(null);
    const orderInvaildFlag = ref(false);
    const payWechatSuccess = ref(false);
    const skipToDetail = ref(null);
    const appPaySuccessCallBack = ref(false);
    const overTime = ref(5);
    ref(null);
    const nftSalePrice = computed(() => {
      if (props.isLegal) {
        if (cnyMode.value) {
          return legalNftConverterCNY(nft.val?.nftPrice * buyAmount.value);
        } else {
          return legalNftConverterBSV(nft.val?.nftPrice * buyAmount.value);
        }
      } else if (props.blindBoxPage) {
        if (cnyMode.value) {
          return new Decimal(nft.val.rmbPrice * 0.01 * buyAmount.value).toFixed(2);
        } else {
          return new Decimal(nft.val.bsvPrice * buyAmount.value).div(Math.pow(10, 8)).toNumber();
        }
      } else {
        if (cnyMode.value) {
          return converterCNY(nft.val?.nftPrice * buyAmount.value);
        } else {
          return converterBSV(nft.val?.nftPrice * buyAmount.value);
        }
      }
    });
    computed(() => {
      return new Decimal(nftSalePrice.value).plus(new Decimal(platformFee.value)).mul(Math.pow(10, 2)).toString();
    });
    const shouldPayPrice = computed(() => {
      let tempPrice;
      if (props.price) {
        tempPrice = new Decimal(Math.ceil((+props.price.split(" ")[1] * buyAmount.value + +platformFee.value) * 100)).toString();
      }
      return tempPrice;
    });
    const cnyPlatformFee = computed(() => {
      return store.state.exchangeRate.feeRate;
    });
    const isApp = computed(() => {
      return window?.appMetaIdJs || window?.appMetaIdJsV2;
    });
    const legalOriginalPrice = computed(() => {
      return +nftSalePrice.value / (1 + new Decimal(fee.val?.platformPercentage).plus(fee.val?.royaltyPercentage).toNumber());
    });
    const platformFee = computed(() => {
      if (props.isLegal) {
        let platFee = new Decimal(fee.val?.platformPercentage).mul(legalOriginalPrice.value).toNumber();
        return platFee < 0.01 ? 0.01 : platFee.toFixed(2);
      } else if (props.blindBoxPage) {
        if (cnyMode.value) {
          return new Decimal(+nftSalePrice.value * 0.06 * buyAmount.value).toFixed(2) != "0.00" ? new Decimal(+nftSalePrice.value * 0.06 * buyAmount.value).toFixed(2) : "0.01";
        } else {
          return new Decimal(+nftSalePrice.value * 0.06 * buyAmount.value).div(Math.pow(10, 8)).toNumber() > 1e3 / 10 ** 8 ? new Decimal(+nftSalePrice.value * 0.06 * buyAmount.value).div(Math.pow(10, 8)).toNumber() : 1e3 / 10 ** 8;
        }
      } else {
        if (cnyMode.value && !props.blindBoxPage) {
          return new Decimal((+nftSalePrice.value * store.state.exchangeRate.feeRate / 100).toFixed(2)).toNumber() <= 0 ? 0.01 : (+nftSalePrice.value * store.state.exchangeRate.feeRate / 100).toFixed(2);
        } else {
          return bsv(fee.val?.platformFee * buyAmount.value);
        }
      }
    });
    const royaltyFee = computed(() => {
      if (props.isLegal) {
        let royalFee = new Decimal(fee.val?.royaltyPercentage).mul(legalOriginalPrice.value).toNumber();
        return royalFee < 0.01 ? 0.01 : royalFee.toFixed(2);
      } else if (props.blindBoxPage) {
        return 0;
      } else {
        if (cnyMode.value) {
          return 0;
        } else {
          return bsv(fee.val?.royaltyFee * buyAmount.value);
        }
      }
    });
    const totalPrice = computed(() => {
      if (props.isLegal) {
        return Number(nftSalePrice.value).toFixed(2);
      } else if (props.blindBoxPage) {
        if (cnyMode.value) {
          return Number(nftSalePrice.value).toFixed(2);
        } else {
          return Number(nftSalePrice.value);
        }
      } else {
        if (cnyMode.value) {
          return (+platformFee.value + +nftSalePrice.value).toFixed(2);
        } else {
          return new Decimal(bsv(nft.val?.nftPrice * buyAmount.value)).plus(bsv(fee.val?.total * buyAmount.value));
        }
      }
    });
    const nftSaleUnit = computed(() => {
      if (props.isLegal) {
        return "";
      } else {
        if (cnyMode.value) {
          return "";
        } else {
          return "BSV";
        }
      }
    });
    watch(() => props.visible, async () => {
      if (props.visible) {
        isSkeleton.value = true;
        if (props.genesis && props.codehash && props.tokenIndex) {
          await getDetail();
          await getBalance();
          isSkeleton.value = false;
        } else if (props.blindBoxPage) {
          await getDetail();
          await getBalance();
          isSkeleton.value = false;
        } else {
          ElMessage.error(i18n.t("errorParams"));
        }
      }
    });
    function minus() {
      buyAmount.value--;
      if (buyAmount.value < 1)
        buyAmount.value = 1;
    }
    function plus() {
      if (buyAmount.value >= 10) {
        return ElMessage.error(`${i18n.t("limitedTen")}`);
      }
      buyAmount.value++;
      if (buyAmount.value > 10) {
        buyAmount.value = 10;
      }
    }
    function toIndex() {
      closeDialog();
      if (props.blindBoxPage) {
        router.push({
          path: `/self/${store.state.userInfo.metaId}/myBlindbox`
        });
      }
      router.push({ name: "home" });
    }
    function payTimeOver() {
      const duration2 = dayjs.duration(+dayjs(endTime.value) - +dayjs());
      const minutes = duration2.minutes() % 60 < 10 ? "0" + duration2.minutes() % 60 : duration2.minutes() % 60;
      const seconds = duration2.seconds() % 60 < 10 ? "0" + duration2.seconds() % 60 : duration2.seconds() % 60;
      if (minutes <= 0 && seconds <= 0) {
        restPayTime.value = "";
        orderInvaildFlag.value = true;
        clearInterval(restPayTimeInterval.value);
      } else {
        restPayTime.value = `${minutes}:${seconds}`;
      }
    }
    async function newQrcode() {
      await nextTick();
      const canvas = document.querySelector("#qrcodeContainer");
      browser.toCanvas(canvas, qrcodeUrl.value, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("success");
        }
      });
    }
    function closeDialog() {
      emit("close");
      qrcodeUrl.value = "";
      restPayTime.value = "01:00";
      orderInvaildFlag.value = false;
      payWechatSuccess.value = false;
      appPaySuccessCallBack.value = false;
      clearInterval(skipToDetail.value);
      clearInterval(wechatpayOverTime.value);
      clearInterval(restPayTimeInterval.value);
    }
    onUnmounted(() => {
      restPayTime.value = "05:00";
      clearInterval(wechatpayOverTime.value);
      clearInterval(restPayTimeInterval.value);
    });
    function getDetail() {
      return new Promise(async (resolve) => {
        let res;
        if (props.isLegal) {
          res = await GetLegalNftDetail({
            uuid: props.uuid
          });
          if (res.code == 0) {
            nft.val = res.data;
            console.log("xxxxxxx", nft.val, res.data);
            fee.val = await getUserBuyExtraFee({
              isFirstSell: nft.val.nftIsFirstSell,
              codehash: props.codehash,
              genesis: props.genesis,
              amount: nft.val.nftPrice
            });
            console.log("xxxxxxxxxxasasaszxzxzx", fee.val);
          }
        } else if (props.blindBoxPage) {
          let _nft;
          res = await GetBlindBoxSaleDetail();
          if (res.code == 0) {
            _nft = res.data;
            const tempNftObj = {
              nftName: "MetaBotAvatar",
              classify: [`${i18n.t("fragment")}`],
              describe: _nft.sellDesc,
              forgeTime: 0,
              tokenId: "",
              sellTxId: "",
              foundryName: "ShowPayTeam",
              nftIssuer: "ShowPayTeam",
              foundryMetaId: "974e2977d5c9446f7f48fd82c9ea51f82749b9ef7c00d26b73bc450d167d5f31",
              issueUserAvatarType: "nft-metabot",
              nftIssueAvatarType: "nft-metabot",
              nftIssueMetaId: "974e2977d5c9446f7f48fd82c9ea51f82749b9ef7c00d26b73bc450d167d5f31",
              nftOwnerAvatarType: "MetaBotAvatar",
              nftOwnerName: "ShowPayTeam",
              nftOwnerMetaId: "974e2977d5c9446f7f48fd82c9ea51f82749b9ef7c00d26b73bc450d167d5f31",
              ownerMetaId: "974e2977d5c9446f7f48fd82c9ea51f82749b9ef7c00d26b73bc450d167d5f31",
              ownerName: "ShowPayTeam",
              limited: 9560,
              round: _nft.round,
              total: _nft.total,
              remain: _nft.remain,
              sellState: _nft.remain > 0 ? 0 : 1,
              putAway: _nft.remain > 0
            };
            nft.val = { ...tempNftObj, ..._nft };
          }
        } else {
          res = await NFTApiGetNFTDetail({
            genesis: props.genesis,
            codehash: props.codehash,
            tokenIndex: props.tokenIndex
          });
          if (res.code === 0) {
            if (res.data.results.items.length > 0) {
              nft.val = res.data.results.items[0];
              fee.val = await getUserBuyExtraFee({
                isFirstSell: nft.val.nftIsFirstSell,
                codehash: props.codehash,
                genesis: props.genesis,
                amount: nft.val.nftPrice
              });
            } else {
              ElMessage.error(i18n.t("nftNotExist"));
              return;
            }
          }
        }
        resolve();
      });
    }
    function toSuceessPage() {
      if (props.blindBoxPage) {
        router.push({
          path: `/self/${store.state.userInfo.metaId}/myBlindbox`
        });
      } else {
        emit("success", { ...props });
        clearInterval(skipToDetail.value);
      }
    }
    function wechatpay(res) {
      if (typeof res === "string") {
        const { errCode, errStr, transaction, openId } = JSON.parse(res);
        if (errCode === 0) {
          ElMessage.success(`${i18n.t("alipaySuceess")}`);
          if (props.isLegal) {
            appPaySuccessCallBack.value = true;
            wechatpayOverTime.value = setInterval(async () => {
              const result = await GetLegalNftDetail({
                uuid: props.uuid
              });
              if (result.code === 0) {
                wechatpayState.value = result.data.nftSellState;
                if (wechatpayState.value !== 0) {
                  appPaySuccessCallBack.value = false;
                  emit("success", { ...props });
                  clearInterval(wechatpayOverTime.value);
                }
              }
            }, 3e3);
          } else if (props.blindBoxPage) {
            wechatpayOverTime.value = setInterval(async () => {
              const orderStatusRes = await BuyBlindBoxStatus({
                wxCoreOrderId: blindBoxBuyRes.data.wxCoreOrderId
              });
              if (orderStatusRes.code == 0 && orderStatusRes.data === "success") {
                router.push({
                  path: `/self/${store.state.userInfo.metaId}/myBlindbox`
                });
                clearInterval(wechatpayOverTime.value);
              }
            }, 3e3);
          } else {
            appPaySuccessCallBack.value = true;
            wechatpayOverTime.value = setInterval(async () => {
              const result = await NFTApiGetNFTDetail({
                genesis: nft.val.nftGenesis,
                codehash: nft.val.nftCodehash,
                tokenIndex: nft.val.nftTokenIndex
              });
              if (result.code === 0) {
                if (result.data.results.items[0].nftSellState === 0 && !result.data.results.items[0].nftIsReady) {
                  appPaySuccessCallBack.value = false;
                  emit("success", res);
                  clearInterval(wechatpayOverTime.value);
                }
              }
            }, 3e3);
          }
        } else if (errCode === -1) {
          if (errStr)
            ElMessage.error(`${i18n.t(errStr)}`);
        } else if (errCode === -2) {
          ElMessage.error(`${i18n.t("payCancel")}`);
        } else if (errCode === 1e4) {
          ElMessage.error(`${i18n.t("uninstallWeChat")}`);
        }
      }
    }
    async function checkUserAddress(metaid) {
      try {
        const res = await GetUserInfo({ metaId: metaid });
        if (res.code == 0) {
          return res.data.address;
        } else {
        }
      } catch {
      }
    }
    async function confirmPay(payPlatform) {
      if (payPlatform) {
        payPlatformIndex.value = payPlatformList.findIndex((item) => item.platform === payPlatform);
      }
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        customClass: "full-loading"
      });
      try {
        await checkSdkStatus();
        console.log("nft.val", nft);
        if (store.state.userInfo.metaId === nft.val.nftOwnerMetaId) {
          loading.close();
          ElMessage.error(i18n.t("notCanBuySelf"));
          return;
        } else {
          if ((!nft.val.nftSellTxId || nft.val.nftSellTxId && nft.val.nftSellTxId === "") && !props.isLegal && !props.blindBoxPage) {
            loading.close();
            ElMessage.error(i18n.t("buySellTxIdFail"));
            return;
          } else {
            if (props.isLegal) {
              if (payPlatform === PayPlatform.WechatPay) {
                loading.close();
                return ElMessage.error(`${i18n.t("closeWeChatPay")}`);
              }
              if (isApp.value) {
                try {
                  const wechatpayResultForApp = await GetLegalBuyNftInfo({
                    uuid: props.uuid,
                    metaid: store.state.userInfo.metaId,
                    type: Platform.app,
                    payType: payPlatform,
                    from: store.state.isIOS ? PaySource.IOS : PaySource.ANDROID,
                    quitUrl: `${"https://beta.xskynft.shop"}/close`
                  });
                  if (payPlatform === PayPlatform.AliPay) {
                    if (!window.appMetaIdJsV2.hasOwnProperty("aliPayForApp")) {
                      loading.close();
                      return ElMessage.error(`${i18n.t("updateAppVersionForAlipay")}`);
                    }
                    const cbName = "alipay";
                    window[cbName] = wechatpay;
                    if (wechatpayResultForApp.code == 0) {
                      loading.close();
                      window.appMetaIdJsV2.aliPayForApp(store.state.token.access_token, wechatpayResultForApp.data.url, cbName);
                    } else {
                      loading.close();
                      ElMessage.error(`${i18n.t("getAlipayorderFail")}`);
                    }
                  } else if (payPlatform === PayPlatform.Sand) {
                    checkVersion();
                    if (!window.appMetaIdJsV2.hasOwnProperty("unionPayForApp")) {
                      loading.close();
                      return ElMessage.error(`${i18n.t("updateAppVersionForBank")}`);
                    }
                    const cbName = "sandPay";
                    window[cbName] = wechatpay;
                    if (wechatpayResultForApp.code == 0) {
                      loading.close();
                      window.appMetaIdJsV2.unionPayForApp(store.state.token.access_token, wechatpayResultForApp.data.url, cbName);
                    } else {
                      loading.close();
                      ElMessage.error(`${i18n.t("getSandPayorderFail")}`);
                    }
                  }
                } catch (error) {
                  loading.close();
                  ElMessage.error(payPlatform === PayPlatform.Sand ? `${i18n.t("getSandPayorderFail")}` : `${i18n.t("getAlipayorderFail")}`);
                }
              } else {
                const payResult = await GetLegalBuyNftInfo({
                  uuid: props.uuid,
                  metaid: store.state.userInfo.metaId,
                  type: payPlatform === PayPlatform.Sand ? Platform.h5 : Platform.native,
                  payType: payPlatform,
                  from: PaySource.WEB,
                  quitUrl: `${"https://beta.xskynft.shop"}/close`
                });
                if (payResult.code === 0) {
                  if (payPlatform === PayPlatform.AliPay) {
                    loading.close();
                    qrcodeUrl.value = payResult.data.url;
                    newQrcode();
                    setTimeout(() => {
                      endTime.value = dayjs().add(1, "m").toString();
                    }, 1e3);
                    restPayTimeInterval.value = setInterval(() => {
                      payTimeOver();
                    }, 1e3);
                    wechatpayOverTime.value = setInterval(async () => {
                      const result = await GetLegalNftDetail({
                        uuid: props.uuid
                      });
                      if (result.code === 0) {
                        wechatpayState.value = result.data.nftSellState;
                        if (wechatpayState.value !== 0) {
                          payWechatSuccess.value = true;
                          clearInterval(wechatpayOverTime.value);
                          clearInterval(restPayTimeInterval.value);
                          skipToDetail.value = setInterval(() => {
                            overTime.value--;
                            if (overTime.value <= 0) {
                              emit("success", { ...props });
                              clearInterval(skipToDetail.value);
                              loading.close();
                            }
                          }, 1e3);
                        }
                      }
                    }, 3e3);
                  } else if (payPlatform === PayPlatform.Sand) {
                    if (payResult.data.url) {
                      loading.close();
                      quickPayOpen.value = true;
                      quickPayDoc.value = payResult.data.url;
                      window.addEventListener("message", (e) => {
                        console.log(e.origin, e.data);
                        if (e.data === "success") {
                          quickPayOpen.value = false;
                          appPaySuccessCallBack.value = true;
                          wechatpayOverTime.value = setInterval(async () => {
                            const result = await GetLegalNftDetail({
                              uuid: props.uuid
                            });
                            if (result.code === 0) {
                              wechatpayState.value = result.data.nftSellState;
                              if (wechatpayState.value !== 0) {
                                appPaySuccessCallBack.value = false;
                                clearInterval(wechatpayOverTime.value);
                                emit("success", { ...props });
                              }
                            }
                          }, 3e3);
                        }
                      });
                    } else {
                      loading.close();
                      ElMessage.error(`${i18n.t("getUrlFail")}`);
                    }
                  }
                } else if (payResult.code == 1005) {
                  loading.close();
                  ElMessage.error(i18n.t("waitFiveMin"));
                } else {
                  loading.close();
                  ElMessage.error(i18n.t("createdAliPayFail"));
                }
              }
            } else if (props.blindBoxPage) {
              const blindBoxBuyRes2 = await BuyBlindBox({
                quantity: buyAmount.value,
                metaid: store.state.userInfo.metaId,
                address: store.state.userInfo.address,
                currency: store.getters.getterCurrentPrice,
                type: store.state.isApp ? 2 : 1
              });
              if (blindBoxBuyRes2.code === 0) {
                if (cnyMode.value) {
                  if (payPlatform === PayPlatform.WechatPay) {
                    loading.close();
                    return ElMessage.error(`${i18n.t("closeWeChatPay")}`);
                  }
                  if (isApp.value) {
                    if (!window.appMetaIdJsV2.hasOwnProperty("weChatPayForApp")) {
                      loading.close();
                      return ElMessage.error(`${i18n.t("updateAppVersion")}`);
                    }
                    if (!window.appMetaIdJsV2.hasOwnProperty("aliPayForApp")) {
                      loading.close();
                      return ElMessage.error(`${i18n.t("updateAppVersionForAlipay")}`);
                    }
                    if (!window.appMetaIdJsV2.hasOwnProperty("unionPayForApp")) {
                      loading.close();
                      return ElMessage.error(`${i18n.t("updateAppVersionForBank")}`);
                    }
                    if (blindBoxBuyRes2.code == 0) {
                      const cbName = "wechatpay";
                      window[cbName] = wechatpay(blindBoxBuyRes2);
                      loading.close();
                      window.appMetaIdJsV2.weChatPayForApp(store.state.token.access_token, JSON.stringify(blindBoxBuyRes2.data), cbName);
                    }
                  } else {
                    if (blindBoxBuyRes2.code == 0) {
                      loading.close();
                      qrcodeUrl.value = blindBoxBuyRes2.data.url;
                      newQrcode();
                      setTimeout(() => {
                        endTime.value = dayjs().add(1, "m").toString();
                      }, 1e3);
                      restPayTimeInterval.value = setInterval(() => {
                        payTimeOver();
                      }, 1e3);
                      wechatpayOverTime.value = setInterval(async () => {
                        const orderStatusRes = await BuyBlindBoxStatus({
                          wxCoreOrderId: blindBoxBuyRes2.data.wxCoreOrderId
                        });
                        console.log("xzxzxzxzx222szx", orderStatusRes);
                        if (orderStatusRes.code == 0 && orderStatusRes.data === "success") {
                          payWechatSuccess.value = true;
                          clearInterval(restPayTimeInterval.value);
                          clearInterval(wechatpayOverTime.value);
                        }
                      }, 3e3);
                    } else {
                      switch (blindBoxBuyRes2.code) {
                        case orderError.lostParams:
                          ElMessage.error(`${i18n.t("lostParams")}`);
                          break;
                        case orderError.notAllowBuy:
                          ElMessage.error(`${i18n.t("notAllowBuy")}`);
                          break;
                        case orderError.restEnougth:
                          ElMessage.error(`${i18n.t("restEnougth")}`);
                          break;
                        case orderError.limitedOnceSale:
                          ElMessage.error(`${i18n.t("limitedOnceSale")}`);
                          break;
                        case orderError.limitedMetaIdBuy:
                          ElMessage.error(`${i18n.t("limitedMetaIdBuy")}`);
                          break;
                        case orderError.serviceBusy:
                          ElMessage.error(`${i18n.t("serviceBusy")}`);
                          break;
                        case orderError.notFoundWxCoreId:
                          ElMessage.error(`${i18n.t("notFoundWxCoreId")}`);
                          break;
                        case orderError.wxCoreOrderFail:
                          ElMessage.error(`${i18n.t("wxCoreOrderFail")}`);
                          break;
                        default:
                          break;
                      }
                      clearInterval(restPayTimeInterval.value);
                      clearInterval(wechatpayOverTime.value);
                      loading.close();
                    }
                  }
                } else {
                  if (blindBoxBuyRes2.code === 0) {
                    const res = await store.state.sdk.makeTx([
                      {
                        amount: blindBoxBuyRes2.data.amount,
                        address: blindBoxBuyRes2.data.address
                      }
                    ]);
                    if (res?.code === 200) {
                      const sendRes = await SendRawTx({
                        address: store.state.userInfo.address,
                        metaId: store.state.userInfo.metaId,
                        orderId: blindBoxBuyRes2.data.wxCoreOrderId,
                        tx_raw: res.data.rawTx
                      });
                      if (sendRes.code === 0) {
                        const checkOrderStatus = setInterval(async () => {
                          const orderStatusRes = await BuyBlindBoxStatus({
                            wxCoreOrderId: blindBoxBuyRes2.data.wxCoreOrderId
                          });
                          if (orderStatusRes.code === 0 && orderStatusRes.data === "success") {
                            clearInterval(checkOrderStatus);
                            loading.close();
                            ElMessage.success(`${i18n.t("buy")} ${i18n.t("success")}`);
                            router.push({
                              path: `/self/${store.state.userInfo.metaId}/myBlindbox`
                            });
                          }
                        }, 3e3);
                      }
                    }
                  }
                }
              } else {
                ElMessage.error(blindBoxBuyRes2.error);
                loading.close();
              }
            } else {
              if (payPlatform === PayPlatform.WechatPay) {
                loading.close();
                return ElMessage.error(`${i18n.t("closeWeChatPay")}`);
              }
              const params = {
                codehash: nft.val.nftCodehash,
                genesis: nft.val.nftGenesis,
                tokenIndex: nft.val.nftTokenIndex,
                genesisTxid: nft.val.nftGenesisTxId,
                sensibleId: nft.val.nftSensibleId,
                sellTxId: nft.val.nftSellTxId,
                sellContractTxId: nft.val.nftSellContractTxId,
                amount: nft.val.nftPrice,
                issueMetaId: nft.val.nftIssueMetaId,
                issueAddress: nft.val.nftIssueAddress,
                isFirstSell: nft.val.nftIsFirstSell,
                ownerMetaId: nft.val.nftOwnerMetaId
              };
              if (cnyMode.value) {
                const address = store.state.userInfo.address ? store.state.userInfo.address : await checkUserAddress(store.state.userInfo.metaId);
                if (!address) {
                  return ElMessage.error(`${i18n.t("getUserAddressFali")}`);
                }
                try {
                  const legalOrderResult = await createNftOrderForLegal({
                    address: store.state.userInfo.address,
                    amount: new Decimal(shouldPayPrice.value).toString(),
                    codehash: params.codehash,
                    contract: params.sellContractTxId,
                    currency: UnitName.RMB,
                    description: nft.val.nftSellDesc,
                    genesis: params.genesis,
                    goods_name: nft.val.nftName,
                    index: params.tokenIndex,
                    metaid: store.state.userInfo.metaId,
                    types: isApp.value ? Platform.app : payPlatform == PayPlatform.Sand ? Platform.h5 : Platform.native,
                    pay_type: payPlatform,
                    quit_url: payPlatform == PayPlatform.Sand ? `${"https://beta.xskynft.shop"}/close` : location.href
                  });
                  if (isApp.value) {
                    if (payPlatform === PayPlatform.WechatPay) {
                      if (!window.appMetaIdJsV2.hasOwnProperty("weChatPayForApp")) {
                        loading.close();
                        return ElMessage.error(`${i18n.t("updateAppVersion")}`);
                      }
                      const cbName = "wechatpay";
                      window[cbName] = wechatpay;
                      if (legalOrderResult.code === 0) {
                        loading.close();
                        window.appMetaIdJsV2.weChatPayForApp(store.state.token.access_token, JSON.stringify(legalOrderResult.data), cbName);
                      }
                    } else if (payPlatform === PayPlatform.AliPay) {
                      if (!window.appMetaIdJsV2.hasOwnProperty("aliPayForApp")) {
                        loading.close();
                        return ElMessage.error(`${i18n.t("updateAppVersionForAlipay")}`);
                      }
                      const cbName = "alipay";
                      window[cbName] = wechatpay;
                      if (legalOrderResult.code === 0) {
                        loading.close();
                        window.appMetaIdJsV2.aliPayForApp(store.state.token.access_token, legalOrderResult.data.url, cbName);
                      } else {
                        loading.close();
                        ElMessage.error(`${i18n.t("getAlipayorderFail")}`);
                      }
                    } else if (payPlatform === PayPlatform.Sand) {
                      checkVersion();
                      if (!window.appMetaIdJsV2.hasOwnProperty("unionPayForApp")) {
                        loading.close();
                        return ElMessage.error(`${i18n.t("updateAppVersionForBank")}`);
                      }
                      const cbName = "sandPay";
                      window[cbName] = wechatpay;
                      if (legalOrderResult.code == 0) {
                        loading.close();
                        window.appMetaIdJsV2.unionPayForApp(store.state.token.access_token, legalOrderResult.data.url, cbName);
                      } else {
                        loading.close();
                        ElMessage.error(`${i18n.t("getSandPayorderFail")}`);
                      }
                    }
                  } else {
                    if (legalOrderResult.code == 0) {
                      loading.close();
                      if (payPlatform === PayPlatform.AliPay) {
                        qrcodeUrl.value = legalOrderResult.data.url;
                        newQrcode();
                        setTimeout(() => {
                          endTime.value = dayjs().add(1, "m").toString();
                        }, 1e3);
                        restPayTimeInterval.value = setInterval(() => {
                          payTimeOver();
                        }, 1e3);
                        wechatpayOverTime.value = setInterval(async () => {
                          const result = await NFTApiGetNFTDetail({
                            genesis: params.genesis,
                            codehash: params.codehash,
                            tokenIndex: params.tokenIndex
                          });
                          if (result.code === 0) {
                            if (result.data.results.items[0].nftSellState == 0 && !result.data.results.items[0].nftIsReady) {
                              payWechatSuccess.value = true;
                              clearInterval(wechatpayOverTime.value);
                              clearInterval(restPayTimeInterval.value);
                            }
                            console.log("xxxxxzzzzxxxzzz", result.data.results.items);
                          } else {
                            clearInterval(wechatpayOverTime.value);
                            clearInterval(restPayTimeInterval.value);
                            loading.close();
                          }
                        }, 3e3);
                      } else if (payPlatform === PayPlatform.Sand) {
                        if (legalOrderResult.data.url) {
                          loading.close();
                          quickPayOpen.value = true;
                          quickPayDoc.value = legalOrderResult.data.url;
                          window.addEventListener("message", (e) => {
                            console.log(e.origin, e.data);
                            if (e.data === "success") {
                              quickPayOpen.value = false;
                              appPaySuccessCallBack.value = true;
                              wechatpayOverTime.value = setInterval(async () => {
                                const result = await NFTApiGetNFTDetail({
                                  genesis: params.genesis,
                                  codehash: params.codehash,
                                  tokenIndex: params.tokenIndex
                                });
                                if (result.code === 0) {
                                  if (result.data.results.items[0].nftSellState == 0 && !result.data.results.items[0].nftIsReady) {
                                    payWechatSuccess.value = true;
                                    clearInterval(wechatpayOverTime.value);
                                  }
                                  console.log("xxxxxzzzzxxxzzz", result.data.results.items);
                                } else {
                                  clearInterval(wechatpayOverTime.value);
                                  loading.close();
                                }
                              }, 3e3);
                            }
                          });
                        } else {
                          loading.close();
                          ElMessage.error(`${i18n.t("overLimitedPayAmount")}`);
                        }
                      }
                    }
                  }
                } catch (error) {
                  if (loading)
                    loading.close();
                  emit("fail", error);
                  return ElMessage.error(typeof error === "string" ? error.indexOf("6001") != -1 ? `${i18n.t("overLimitedPayAmount")}` : `${i18n.t("orderIsPurchased")}` : error);
                }
              } else {
                const userBalanceRes = await store.state.sdk?.getBalance();
                if (userBalanceRes && userBalanceRes.code === 200) {
                  const allSatoshis = new Decimal(nft.val.nftPrice).plus(fee.val.platformFee).plus(fee.val.royaltyFee).toNumber();
                  if (userBalanceRes.data.satoshis > allSatoshis) {
                    const res = await store.state.sdk?.nftBuy(params);
                    if (res.code === 200) {
                      emit("success", res);
                      ElMessage.success(i18n.t("buySuccess"));
                      loading.close();
                    }
                  } else {
                    loading.close();
                    ElMessageBox.alert(`
            <p>${i18n.t("useAmountTips")}: ${allSatoshis} Satoshis</p>
            <p>${i18n.t("insufficientBalance")}</p>
            `, {
                      confirmButtonText: i18n.t("confirm"),
                      dangerouslyUseHTMLString: true
                    });
                  }
                }
              }
            }
          }
        }
      } catch (error) {
        if (loading)
          loading.close();
        if (error)
          ElMessage.error(typeof error === "string" ? error : JSON.stringify(error));
        emit("fail", error);
      }
    }
    function getBalance() {
      return new Promise(async (resolve) => {
        const userBalanceRes = await store.state.sdk?.getBalance();
        if (userBalanceRes && userBalanceRes.code === 200) {
          balance.value = userBalanceRes.data.bsv;
        }
        resolve();
      });
    }
    function toWallet() {
      window.open("https://www.showmoney.app");
    }
    return (_ctx, _cache) => {
      const _component_ElDialog = ElDialog;
      const _component_UserAvatar = resolveComponent("UserAvatar");
      const _component_el_input = ElInput;
      const _component_el_button = ElButton;
      const _component_ElButton = ElButton;
      const _component_ElSkeleton = ElSkeleton;
      return openBlock(), createBlock(_component_ElDialog, {
        modelValue: __props.visible,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(visible) ? visible.value = $event : null),
        onClose: closeDialog,
        center: "",
        "close-on-click-modal": !qrcodeUrl.value || !payWechatSuccess.value
      }, {
        title: withCtx(() => [
          !payWechatSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("span", null, toDisplayString(_ctx.$t("PayConfirm")), 1)
          ])) : createCommentVNode("v-if", true)
        ]),
        default: withCtx(() => [
          createVNode(_component_ElSkeleton, {
            loading: isSkeleton.value,
            animated: ""
          }, {
            template: withCtx(() => [
              createVNode(PayConfirmSkeletonVue)
            ]),
            default: withCtx(() => [
              createVNode(_component_ElDialog, {
                "custom-class": "quickPayDialog",
                modelValue: quickPayOpen.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => quickPayOpen.value = $event),
                center: "",
                "close-on-click-modal": false,
                "append-to-body": ""
              }, {
                default: withCtx(() => [
                  createBaseVNode("iframe", {
                    id: "payIframe",
                    width: "100%",
                    height: "90%",
                    srcdoc: quickPayDoc.value,
                    frameborder: "0"
                  }, null, 8, _hoisted_2)
                ]),
                _: 1
              }, 8, ["modelValue"]),
              payWechatSuccess.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createBaseVNode("div", _hoisted_5, [
                    createBaseVNode("img", {
                      src: payPlatformList[payPlatformIndex.value].platform === unref(PayPlatform).WechatPay ? unref(wechatTitleIcon) : payPlatformList[payPlatformIndex.value].platform === unref(PayPlatform).AliPay ? unref(alipayTitleIcon) : unref(sandPayTitleIcon),
                      alt: ""
                    }, null, 8, _hoisted_6),
                    createBaseVNode("span", {
                      class: normalizeClass([
                        payPlatformList[payPlatformIndex.value].platform === unref(PayPlatform).WechatPay ? "wechat" : payPlatformList[payPlatformIndex.value].platform === unref(PayPlatform).AliPay ? "alipay" : "sandpay"
                      ])
                    }, toDisplayString(_ctx.$t("paySuccess")), 3)
                  ]),
                  createBaseVNode("div", _hoisted_7, [
                    _hoisted_8,
                    createBaseVNode("span", null, "\xA5" + toDisplayString(unref(totalPrice)), 1)
                  ]),
                  createBaseVNode("div", _hoisted_9, [
                    createBaseVNode("span", {
                      class: normalizeClass([
                        payPlatformList[payPlatformIndex.value].platform === unref(PayPlatform).WechatPay ? "wechat" : payPlatformList[payPlatformIndex.value].platform === unref(PayPlatform).AliPay ? "alipay" : "sandpay"
                      ]),
                      onClick: toSuceessPage
                    }, toDisplayString(_ctx.$t("complie")), 3),
                    props.isLegal ? (openBlock(), createElementBlock("span", _hoisted_10, toDisplayString(_ctx.$t("skipDetail")) + toDisplayString(overTime.value) + toDisplayString(_ctx.$t("overTimeClose")), 1)) : createCommentVNode("v-if", true)
                  ])
                ])
              ])) : appPaySuccessCallBack.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("span", null, toDisplayString(_ctx.$t("waitTransitionConfirm")), 1),
                  createVNode(spinner)
                ]),
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("span", null, toDisplayString(_ctx.$t("waitTolong")), 1),
                  createBaseVNode("span", {
                    class: "toIndex",
                    onClick: toIndex
                  }, toDisplayString(_ctx.$t("goOnCheckOther")), 1),
                  createBaseVNode("span", null, toDisplayString(_ctx.$t("laterToMyNft")), 1)
                ])
              ])) : qrcodeUrl.value ? (openBlock(), createElementBlock("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("span", null, toDisplayString(_ctx.$t("legalBuy")), 1),
                  createBaseVNode("span", null, toDisplayString(unref(nft).val.nftName), 1),
                  __props.blindBoxPage ? (openBlock(), createElementBlock("span", _hoisted_16, "*" + toDisplayString(buyAmount.value), 1)) : createCommentVNode("v-if", true)
                ]),
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("div", _hoisted_19, [
                      createBaseVNode("div", _hoisted_20, [
                        createBaseVNode("span", null, toDisplayString(_ctx.$t("legalOrderAmount")), 1),
                        createBaseVNode("span", null, toDisplayString(_ctx.$t("LegalpaySuceessTip")), 1)
                      ]),
                      createBaseVNode("div", _hoisted_21, "\xA5" + toDisplayString(unref(totalPrice)), 1)
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_22, [
                    _hoisted_23,
                    createBaseVNode("div", _hoisted_24, [
                      payPlatformIndex.value !== -1 ? (openBlock(), createElementBlock("span", _hoisted_25, toDisplayString(orderInvaildFlag.value ? "" : _ctx.$t("plaseUse") + _ctx.$t("payType" + payPlatformList[payPlatformIndex.value].platform) + _ctx.$t("screenPay")), 1)) : createCommentVNode("v-if", true),
                      props.isLegal || unref(cnyMode) ? (openBlock(), createElementBlock("span", _hoisted_26, "\xA0" + toDisplayString(restPayTime.value) + "\xA0" + toDisplayString(orderInvaildFlag.value ? _ctx.$t("codeInviliad") : ""), 1)) : createCommentVNode("v-if", true)
                    ]),
                    unref(cnyMode) && !props.isLegal ? (openBlock(), createElementBlock("div", _hoisted_27, toDisplayString(orderInvaildFlag.value ? "" : props.blindBoxPage ? _ctx.$t("blindBoxInvilable") : _ctx.$t("codeInviliable")), 1)) : createCommentVNode("v-if", true)
                  ]),
                  createBaseVNode("div", _hoisted_28, [
                    props.isLegal && !orderInvaildFlag.value ? (openBlock(), createElementBlock("div", _hoisted_29, [
                      createBaseVNode("div", _hoisted_30, [
                        createBaseVNode("span", null, toDisplayString(_ctx.$t("friendTips")), 1)
                      ]),
                      createBaseVNode("div", _hoisted_31, [
                        createBaseVNode("span", null, toDisplayString(_ctx.$t("waitTolong")), 1),
                        createBaseVNode("span", {
                          class: "toIndex",
                          onClick: toIndex
                        }, toDisplayString(_ctx.$t("goOnCheckOther")), 1),
                        createBaseVNode("span", null, toDisplayString(_ctx.$t("laterToMyNft")), 1)
                      ])
                    ])) : !props.isLegal && unref(cnyMode) && !orderInvaildFlag.value ? (openBlock(), createElementBlock("div", _hoisted_32, [
                      createBaseVNode("div", null, [
                        createBaseVNode("div", _hoisted_33, [
                          createBaseVNode("span", null, toDisplayString(_ctx.$t("waitTransitionConfirm")), 1),
                          createVNode(spinner)
                        ]),
                        createBaseVNode("div", _hoisted_34, [
                          createBaseVNode("span", null, toDisplayString(_ctx.$t("waitTolong")), 1),
                          createBaseVNode("span", {
                            class: "toIndex",
                            onClick: toIndex
                          }, toDisplayString(_ctx.$t("goOnCheckOther")), 1),
                          createBaseVNode("span", null, toDisplayString(_ctx.$t("laterToMyNft")), 1)
                        ])
                      ])
                    ])) : createCommentVNode("v-if", true)
                  ])
                ])
              ])) : (openBlock(), createElementBlock("div", _hoisted_35, [
                createBaseVNode("div", _hoisted_36, [
                  createBaseVNode("div", _hoisted_37, [
                    createBaseVNode("div", _hoisted_38, [
                      createVNode(NFTCover, {
                        isBlindBox: props.blindBoxPage,
                        blindBoxRest: unref(nft).val.remain,
                        cover: [
                          _ctx.$filters.metafile(unref(nft).val?.nftIcon),
                          unref(nft).val?.nftBackIcon ? _ctx.$filters.metafile(unref(nft).val?.nftBackIcon) : void 0
                        ]
                      }, null, 8, ["isBlindBox", "blindBoxRest", "cover"])
                    ]),
                    createBaseVNode("div", _hoisted_39, [
                      createBaseVNode("div", _hoisted_40, toDisplayString(unref(nft).val?.nftName), 1),
                      createBaseVNode("div", _hoisted_41, [
                        createBaseVNode("div", _hoisted_42, [
                          createVNode(_component_UserAvatar, {
                            metaId: unref(nft).val?.nftIssueMetaId,
                            type: unref(nft).val?.nftIssueAvatarType
                          }, null, 8, ["metaId", "type"]),
                          createBaseVNode("span", _hoisted_43, toDisplayString(unref(nft).val?.nftIssuer), 1),
                          createBaseVNode("span", _hoisted_44, "(" + toDisplayString(_ctx.$t("creater")) + ")", 1)
                        ]),
                        createBaseVNode("div", _hoisted_45, [
                          createVNode(_component_UserAvatar, {
                            metaId: unref(nft).val?.nftOwnerMetaId,
                            type: unref(nft).val?.nftOwnerAvatarType
                          }, null, 8, ["metaId", "type"]),
                          createBaseVNode("span", _hoisted_46, toDisplayString(unref(nft).val?.nftOwnerName), 1),
                          createBaseVNode("span", _hoisted_47, "(" + toDisplayString(_ctx.$t("owner")) + ")", 1)
                        ])
                      ])
                    ])
                  ]),
                  unref(nft).val.nftHasCompound ? (openBlock(), createElementBlock("div", _hoisted_48, [
                    createBaseVNode("div", _hoisted_49, [
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("composeStatus")), 1),
                      createCommentVNode(" <span>{{$t('composeTips')}}</span> ")
                    ]),
                    createBaseVNode("div", _hoisted_50, [
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("isCompose")), 1)
                    ])
                  ])) : createCommentVNode("v-if", true)
                ]),
                createBaseVNode("div", _hoisted_51, [
                  __props.blindBoxPage ? (openBlock(), createElementBlock("div", _hoisted_52, [
                    createBaseVNode("div", _hoisted_53, toDisplayString(_ctx.$t("buyAmount")), 1),
                    createBaseVNode("div", _hoisted_54, [
                      createBaseVNode("i", {
                        class: "el-icon-minus",
                        onClick: minus
                      }),
                      createVNode(_component_el_input, { modelValue: buyAmount.value }, null, 8, ["modelValue"]),
                      createBaseVNode("i", {
                        class: "el-icon-plus",
                        onClick: plus
                      })
                    ])
                  ])) : createCommentVNode("v-if", true),
                  createBaseVNode("div", _hoisted_55, [
                    createBaseVNode("div", _hoisted_56, toDisplayString(_ctx.$t("price")), 1),
                    createBaseVNode("div", _hoisted_57, [
                      unref(cnyMode) ? (openBlock(), createElementBlock("span", _hoisted_58, "\uFFE5")) : createCommentVNode("v-if", true),
                      createTextVNode(toDisplayString(props.isLegal ? unref(legalOriginalPrice).toFixed(2) : unref(nftSalePrice)) + "\xA0" + toDisplayString(unref(nftSaleUnit)), 1)
                    ])
                  ]),
                  unref(platformFee) ? (openBlock(), createElementBlock("div", _hoisted_59, [
                    createBaseVNode("div", _hoisted_60, toDisplayString(_ctx.$t("buyFeeTips3")) + "(" + toDisplayString(__props.blindBoxPage ? 6 : props.isLegal ? new unref(Decimal)(fee.val.platformPercentage).mul(100).toNumber() : unref(cnyMode) ? new unref(Decimal)(unref(cnyPlatformFee)).toNumber() : new unref(Decimal)(fee.val.platformPercentage).mul(100).toNumber()) + "%) ", 1),
                    createBaseVNode("div", _hoisted_61, [
                      unref(cnyMode) ? (openBlock(), createElementBlock("span", _hoisted_62, "\uFFE5")) : createCommentVNode("v-if", true),
                      createTextVNode(toDisplayString(unref(platformFee)) + "\xA0" + toDisplayString(unref(nftSaleUnit)), 1)
                    ])
                  ])) : createCommentVNode("v-if", true),
                  unref(royaltyFee) ? (openBlock(), createElementBlock("div", _hoisted_63, [
                    createBaseVNode("div", _hoisted_64, toDisplayString(_ctx.$t("buyFeeTips2")) + "(" + toDisplayString(new unref(Decimal)(fee.val.royaltyPercentage).mul(100).toNumber()) + "%) ", 1),
                    createBaseVNode("div", _hoisted_65, toDisplayString(unref(cnyMode) ? "\xA5" : "") + "\xA0" + toDisplayString(unref(royaltyFee)) + "\xA0" + toDisplayString(unref(nftSaleUnit)), 1)
                  ])) : createCommentVNode("v-if", true)
                ]),
                createBaseVNode("div", _hoisted_66, [
                  createBaseVNode("div", _hoisted_67, toDisplayString(_ctx.$t("needPayAmount")), 1),
                  createBaseVNode("div", _hoisted_68, [
                    !props.isLegal && !unref(cnyMode) ? (openBlock(), createElementBlock("img", {
                      key: 0,
                      src: unref(BsvIcon)
                    }, null, 8, _hoisted_69)) : createCommentVNode("v-if", true),
                    unref(cnyMode) ? (openBlock(), createElementBlock("span", _hoisted_70, "\uFFE5")) : createCommentVNode("v-if", true),
                    createTextVNode(toDisplayString(unref(totalPrice)) + "\xA0" + toDisplayString(unref(nftSaleUnit)), 1)
                  ])
                ]),
                createBaseVNode("div", _hoisted_71, [
                  props.isLegal || unref(cnyMode) ? (openBlock(), createElementBlock("div", _hoisted_72, [
                    createBaseVNode("div", _hoisted_73, [
                      (openBlock(), createElementBlock(Fragment, null, renderList(payPlatformList, (item) => {
                        return createVNode(_component_el_button, {
                          class: "pay-platform-item",
                          key: item.platform,
                          disabled: item.disabled,
                          style: normalizeStyle({ background: item.background }),
                          onClick: ($event) => confirmPay(item.platform)
                        }, {
                          default: withCtx(() => [
                            createBaseVNode("div", null, [
                              createBaseVNode("img", {
                                class: "icon",
                                src: item.icon
                              }, null, 8, _hoisted_74),
                              createBaseVNode("div", _hoisted_75, [
                                createBaseVNode("span", _hoisted_76, toDisplayString(item.name), 1),
                                +envLimited.value && item.suffix ? (openBlock(), createElementBlock("span", _hoisted_77, toDisplayString(_ctx.$t("envLimited")), 1)) : createCommentVNode("v-if", true)
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["disabled", "style", "onClick"]);
                      }), 64))
                    ])
                  ])) : (openBlock(), createElementBlock("div", _hoisted_78, [
                    balance.value > unref(totalPrice) ? (openBlock(), createBlock(_component_ElButton, {
                      key: 0,
                      class: "flex1",
                      size: "large",
                      type: "primary",
                      onClick: confirmPay
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("ConfirmPay")), 1)
                      ]),
                      _: 1
                    })) : (openBlock(), createBlock(_component_ElButton, {
                      key: 1,
                      class: "flex1",
                      type: "info",
                      size: "large",
                      onClick: toWallet
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.$t("InsufficientBalance")), 1),
                        createBaseVNode("a", null, toDisplayString(_ctx.$t("yourWallet")), 1)
                      ]),
                      _: 1
                    }))
                  ]))
                ]),
                createBaseVNode("div", {
                  class: "selectPayMode",
                  onClick: _cache[1] || (_cache[1] = ($event) => isOpenPayMode.value = true)
                }, [
                  createBaseVNode("img", {
                    src: unref(PayIcon),
                    alt: ""
                  }, null, 8, _hoisted_79),
                  createBaseVNode("span", null, toDisplayString(_ctx.$t("selectPayMode")), 1),
                  _hoisted_80
                ])
              ]))
            ]),
            _: 1
          }, 8, ["loading"]),
          createVNode(PayModeDialog, {
            visible: isOpenPayMode.value,
            isLegal: props.isLegal,
            onPayModeclose: _cache[2] || (_cache[2] = ($event) => isOpenPayMode.value = false)
          }, null, 8, ["visible", "isLegal"])
        ]),
        _: 1
      }, 8, ["modelValue", "close-on-click-modal"]);
    };
  }
});
var PayConfirmVue = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b449c1e2"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/PayConfirm/PayConfirm.vue"]]);

export { PayConfirmVue as P, _imports_3 as _, _imports_4 as a };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5Q29uZmlybS4wNzM0ODE1Yi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
