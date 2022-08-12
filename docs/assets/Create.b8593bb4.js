import { e as defineComponent, bU as _Input, bc as isValidComponentSize, bf as useGlobalConfig, ba as inject, bg as elFormKey, bd as elFormItemKey, r as ref, v as reactive, d as computed, aB as debugWarn, w as watch, a as onMounted, cJ as toRawType, o as onUpdated, f as resolveComponent, aW as resolveDirective, g as openBlock, A as createElementBlock, T as withDirectives, L as normalizeClass, bb as withKeys, k as createBaseVNode, m as createCommentVNode, l as createVNode, K as withModifiers, a9 as normalizeStyle, D as toDisplayString, _ as _export_sfc, W as tranfromImgFile, C as unref, t as useRouter, u as useI18n, a0 as ElLoading, bw as ElInput, ap as ElDialog, F as Fragment, B as renderList, j as withCtx, J as createTextVNode, q as pushScopeId, s as popScopeId, E as useStore, Z as checkSdkStatus, $ as checkUserCanIssueNft, X as ElMessage, cK as isExistSha256, a1 as confirmToSendMetaData, M as Mutation, N as ElButton, V as vModelText, i as createBlock } from './index.3c02df72.js';
import { E as ElSwitch, a as ElProgress } from './progress.b2029f70.js';
import { E as ElOption, a as ElSelect } from './select.8a227f18.js';
import './tag.f27c7368.js';
import { R as RepeatClick } from './scrollbar.0bf2b7b8.js';
import { U as UploadIcon, C as ChooseSeriesModal, P as PickerModel } from './img_upload.6db61b30.js';
import { I as InnerPageHeader } from './InnerPageHeader.76b4d972.js';
import { T as TextAlign } from './enum.2d046482.js';
import { E as ElImage } from './image-viewer.62daae40.js';
import { v as v1 } from './v1.93131899.js';
import './bannet_icon_ins.9e5a53b7.js';
import './icon_search.00d5970e.js';

var script = defineComponent({
  name: "ElInputNumber",
  components: {
    ElInput: _Input
  },
  directives: {
    RepeatClick
  },
  props: {
    step: {
      type: Number,
      default: 1
    },
    stepStrictly: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    modelValue: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator: isValidComponentSize
    },
    controls: {
      type: Boolean,
      default: true
    },
    controlsPosition: {
      type: String,
      default: ""
    },
    name: String,
    label: String,
    placeholder: String,
    precision: {
      type: Number,
      validator: (val) => val >= 0 && val === parseInt(`${val}`, 10)
    }
  },
  emits: ["update:modelValue", "change", "input", "blur", "focus"],
  setup(props, { emit }) {
    const ELEMENT = useGlobalConfig();
    const elForm = inject(elFormKey, {});
    const elFormItem = inject(elFormItemKey, {});
    const input = ref(null);
    const data = reactive({
      currentValue: props.modelValue,
      userInput: null
    });
    const minDisabled = computed(() => {
      return _decrease(props.modelValue) < props.min;
    });
    const maxDisabled = computed(() => {
      return _increase(props.modelValue) > props.max;
    });
    const numPrecision = computed(() => {
      const stepPrecision = getPrecision(props.step);
      if (props.precision !== void 0) {
        if (stepPrecision > props.precision) {
          debugWarn("InputNumber", "precision should not be less than the decimal places of step");
        }
        return props.precision;
      } else {
        return Math.max(getPrecision(props.modelValue), stepPrecision);
      }
    });
    const controlsAtRight = computed(() => {
      return props.controls && props.controlsPosition === "right";
    });
    const inputNumberSize = computed(() => {
      return props.size || elFormItem.size || ELEMENT.size;
    });
    const inputNumberDisabled = computed(() => {
      return props.disabled || elForm.disabled;
    });
    const displayValue = computed(() => {
      if (data.userInput !== null) {
        return data.userInput;
      }
      let currentValue = data.currentValue;
      if (typeof currentValue === "number") {
        if (props.precision !== void 0) {
          currentValue = currentValue.toFixed(props.precision);
        }
      }
      return currentValue;
    });
    const toPrecision = (num, pre) => {
      if (pre === void 0)
        pre = numPrecision.value;
      return parseFloat(`${Math.round(num * Math.pow(10, pre)) / Math.pow(10, pre)}`);
    };
    const getPrecision = (value) => {
      if (value === void 0)
        return 0;
      const valueString = value.toString();
      const dotPosition = valueString.indexOf(".");
      let precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    };
    const _increase = (val) => {
      if (typeof val !== "number" && val !== void 0)
        return data.currentValue;
      const precisionFactor = Math.pow(10, numPrecision.value);
      return toPrecision((precisionFactor * val + precisionFactor * props.step) / precisionFactor);
    };
    const _decrease = (val) => {
      if (typeof val !== "number" && val !== void 0)
        return data.currentValue;
      const precisionFactor = Math.pow(10, numPrecision.value);
      return toPrecision((precisionFactor * val - precisionFactor * props.step) / precisionFactor);
    };
    const increase = () => {
      if (inputNumberDisabled.value || maxDisabled.value)
        return;
      const value = props.modelValue || 0;
      const newVal = _increase(value);
      setCurrentValue(newVal);
    };
    const decrease = () => {
      if (inputNumberDisabled.value || minDisabled.value)
        return;
      const value = props.modelValue || 0;
      const newVal = _decrease(value);
      setCurrentValue(newVal);
    };
    const setCurrentValue = (newVal) => {
      const oldVal = data.currentValue;
      if (typeof newVal === "number" && props.precision !== void 0) {
        newVal = toPrecision(newVal, props.precision);
      }
      if (newVal !== void 0 && newVal >= props.max)
        newVal = props.max;
      if (newVal !== void 0 && newVal <= props.min)
        newVal = props.min;
      if (oldVal === newVal)
        return;
      data.userInput = null;
      emit("update:modelValue", newVal);
      emit("input", newVal);
      emit("change", newVal, oldVal);
      data.currentValue = newVal;
    };
    const handleInput = (value) => {
      return data.userInput = value;
    };
    const handleInputChange = (value) => {
      const newVal = value === "" ? void 0 : Number(value);
      if (!isNaN(newVal) || value === "") {
        setCurrentValue(newVal);
      }
      data.userInput = null;
    };
    const focus = () => {
      var _a, _b;
      (_b = (_a = input.value).focus) == null ? void 0 : _b.call(_a);
    };
    const blur = () => {
      var _a, _b;
      (_b = (_a = input.value).blur) == null ? void 0 : _b.call(_a);
    };
    watch(() => props.modelValue, (value) => {
      let newVal = value === void 0 ? value : Number(value);
      if (newVal !== void 0) {
        if (isNaN(newVal))
          return;
        if (props.stepStrictly) {
          const stepPrecision = getPrecision(props.step);
          const precisionFactor = Math.pow(10, stepPrecision);
          newVal = Math.round(newVal / props.step) * precisionFactor * props.step / precisionFactor;
        }
        if (props.precision !== void 0) {
          newVal = toPrecision(newVal, props.precision);
        }
      }
      if (newVal !== void 0 && newVal >= props.max) {
        newVal = props.max;
        emit("update:modelValue", newVal);
      }
      if (newVal !== void 0 && newVal <= props.min) {
        newVal = props.min;
        emit("update:modelValue", newVal);
      }
      data.currentValue = newVal;
      data.userInput = null;
    }, { immediate: true });
    onMounted(() => {
      const innerInput = input.value.input;
      innerInput.setAttribute("role", "spinbutton");
      innerInput.setAttribute("aria-valuemax", props.max);
      innerInput.setAttribute("aria-valuemin", props.min);
      innerInput.setAttribute("aria-valuenow", data.currentValue);
      innerInput.setAttribute("aria-disabled", inputNumberDisabled.value);
      if (toRawType(props.modelValue) !== "Number" && props.modelValue !== void 0) {
        emit("update:modelValue", void 0);
      }
    });
    onUpdated(() => {
      const innerInput = input.value.input;
      innerInput.setAttribute("aria-valuenow", data.currentValue);
    });
    return {
      input,
      displayValue,
      handleInput,
      handleInputChange,
      controlsAtRight,
      decrease,
      increase,
      inputNumberSize,
      inputNumberDisabled,
      maxDisabled,
      minDisabled,
      focus,
      blur
    };
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _directive_repeat_click = resolveDirective("repeat-click");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
      "el-input-number",
      _ctx.inputNumberSize ? "el-input-number--" + _ctx.inputNumberSize : "",
      { "is-disabled": _ctx.inputNumberDisabled },
      { "is-without-controls": !_ctx.controls },
      { "is-controls-right": _ctx.controlsAtRight }
    ]),
    onDragstart: _cache[4] || (_cache[4] = withModifiers(() => {
    }, ["prevent"]))
  }, [
    _ctx.controls ? withDirectives((openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(["el-input-number__decrease", { "is-disabled": _ctx.minDisabled }]),
      role: "button",
      onKeydown: _cache[0] || (_cache[0] = withKeys((...args) => _ctx.decrease && _ctx.decrease(...args), ["enter"]))
    }, [
      createBaseVNode("i", {
        class: normalizeClass(`el-icon-${_ctx.controlsAtRight ? "arrow-down" : "minus"}`)
      }, null, 2)
    ], 34)), [
      [_directive_repeat_click, _ctx.decrease]
    ]) : createCommentVNode("v-if", true),
    _ctx.controls ? withDirectives((openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass(["el-input-number__increase", { "is-disabled": _ctx.maxDisabled }]),
      role: "button",
      onKeydown: _cache[1] || (_cache[1] = withKeys((...args) => _ctx.increase && _ctx.increase(...args), ["enter"]))
    }, [
      createBaseVNode("i", {
        class: normalizeClass(`el-icon-${_ctx.controlsAtRight ? "arrow-up" : "plus"}`)
      }, null, 2)
    ], 34)), [
      [_directive_repeat_click, _ctx.increase]
    ]) : createCommentVNode("v-if", true),
    createVNode(_component_el_input, {
      ref: "input",
      "model-value": _ctx.displayValue,
      placeholder: _ctx.placeholder,
      disabled: _ctx.inputNumberDisabled,
      size: _ctx.inputNumberSize,
      max: _ctx.max,
      min: _ctx.min,
      name: _ctx.name,
      label: _ctx.label,
      onKeydown: [
        withKeys(withModifiers(_ctx.increase, ["prevent"]), ["up"]),
        withKeys(withModifiers(_ctx.decrease, ["prevent"]), ["down"])
      ],
      onBlur: _cache[2] || (_cache[2] = (event) => _ctx.$emit("blur", event)),
      onFocus: _cache[3] || (_cache[3] = (event) => _ctx.$emit("focus", event)),
      onInput: _ctx.handleInput,
      onChange: _ctx.handleInputChange
    }, null, 8, ["model-value", "placeholder", "disabled", "size", "max", "min", "name", "label", "onKeydown", "onInput", "onChange"])
  ], 34);
}

script.render = render;
script.__file = "packages/components/input-number/src/index.vue";

script.install = (app) => {
  app.component(script.name, script);
};
const _InputNumber = script;
const ElInputNumber = _InputNumber;

var inputNumber = '';

var InputFile_scss_vue_type_style_index_0_src_40225546_scoped_true_lang = '';

const _hoisted_1$2 = ["disabled", "placeholder", "accept"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    originalFile: { type: null, required: true, default: null },
    placeholder: { type: String, required: false, default: "" },
    accept: { type: String, required: false, default: "*" },
    align: { type: null, required: false, default: TextAlign.Right },
    disabled: { type: Boolean, required: false, default: false }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    const inputRef = ref();
    async function onChange(e) {
      const input = e.target;
      let files = input.files;
      const metaFiles = [];
      if (files) {
        for (let i = 0; i < files.length; i++) {
          const res = await tranfromImgFile(files[i]);
          metaFiles.push(res);
        }
      }
      emit("change", metaFiles);
      inputRef.value.value = "";
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["input-file", { disabled: __props.disabled }])
      }, [
        createBaseVNode("input", {
          disabled: __props.disabled,
          type: "file",
          placeholder: __props.placeholder,
          onChange,
          accept: __props.accept,
          ref_key: "inputRef",
          ref: inputRef,
          title: ""
        }, null, 40, _hoisted_1$2),
        __props.originalFile ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "val",
          style: normalizeStyle({ textAlign: __props.align })
        }, toDisplayString(__props.originalFile.raw?.name), 5)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: "placeholder",
          style: normalizeStyle({ textAlign: __props.align })
        }, toDisplayString(__props.placeholder), 5))
      ], 2);
    };
  }
});
var InputFile = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-40225546"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/InputFile/InputFile.vue"]]);

var InputImage_scss_vue_type_style_index_0_src_6e22b16f_scoped_true_lang = '';

const _hoisted_1$1 = { class: "input-image" };
const _hoisted_2$1 = { class: "upload" };
const _hoisted_3$1 = { class: "add flex flex-align-center flex-pack-center" };
const _hoisted_4$1 = {
  key: 0,
  class: "cover-warp"
};
const _hoisted_5$1 = ["src"];
const _hoisted_6$1 = { class: "label" };
const _hoisted_7$1 = ["accept", "disabled"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    cover: { type: null, required: true, default: null },
    placeholder: { type: String, required: false, default: "" },
    accept: { type: String, required: false, default: "image/*" },
    isPreview: { type: Boolean, required: false, default: false },
    isShowRemoveBtn: { type: Boolean, required: false, default: true },
    disabled: { type: Boolean, required: false, default: false }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    const fileRef = ref();
    async function onChange(e) {
      const input = e.target;
      let files = input.files;
      let metaFile = null;
      if (files[0]) {
        metaFile = await tranfromImgFile(files[0]);
      }
      emit("change", metaFile);
      fileRef.value.value = "";
    }
    return (_ctx, _cache) => {
      const _component_ElImage = ElImage;
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            __props.cover ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
              createVNode(_component_ElImage, {
                class: "cover",
                fit: "cover",
                src: __props.cover.base64Data,
                "preview-src-list": __props.isPreview ? [__props.cover.base64Data] : [],
                "append-to-body": true
              }, null, 8, ["src", "preview-src-list"]),
              __props.isShowRemoveBtn && !__props.disabled ? (openBlock(), createElementBlock("a", {
                key: 0,
                class: "close",
                onClick: _cache[0] || (_cache[0] = ($event) => emit("change", null))
              }, toDisplayString(_ctx.$t("delete")), 1)) : createCommentVNode("v-if", true)
            ])) : createCommentVNode("v-if", true),
            createBaseVNode("div", null, [
              createBaseVNode("img", {
                class: "icon",
                src: unref(UploadIcon)
              }, null, 8, _hoisted_5$1),
              createBaseVNode("div", _hoisted_6$1, toDisplayString(__props.placeholder), 1)
            ]),
            createBaseVNode("input", {
              type: "file",
              accept: __props.accept,
              disabled: __props.disabled,
              onChange,
              style: normalizeStyle({ zIndex: __props.isShowRemoveBtn ? 2 : 3 }),
              ref_key: "fileRef",
              ref: fileRef
            }, null, 44, _hoisted_7$1)
          ])
        ])
      ]);
    };
  }
});
var InputImage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6e22b16f"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/InputImage/InputImage.vue"]]);

var Create_scss_vue_type_style_index_0_src_35cd5e2b_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-35cd5e2b"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "batch-create container" };
const _hoisted_2 = { class: "batch-create-list" };
const _hoisted_3 = ["id"];
const _hoisted_4 = { class: "cover upload-warp" };
const _hoisted_5 = ["readOnly", "onUpdate:modelValue", "placeholder", "onChange"];
const _hoisted_6 = ["onUpdate:modelValue", "readOnly", "placeholder", "onChange"];
const _hoisted_7 = ["onClick"];
const _hoisted_8 = {
  key: 0,
  class: "val"
};
const _hoisted_9 = /* @__PURE__ */ createTextVNode(",");
const _hoisted_10 = {
  key: 1,
  class: "placeholder"
};
const _hoisted_11 = ["onClick"];
const _hoisted_12 = {
  key: 0,
  class: "val"
};
const _hoisted_13 = {
  key: 1,
  class: "placeholder"
};
const _hoisted_14 = { class: "index input-item disabled" };
const _hoisted_15 = ["onUpdate:modelValue", "placeholder"];
const _hoisted_16 = ["onClick"];
const _hoisted_17 = {
  key: 0,
  class: "batch-create-item"
};
const _hoisted_18 = { class: "cover upload-warp" };
const _hoisted_19 = { class: "upload" };
const _hoisted_20 = { class: "name input-item" };
const _hoisted_21 = ["readOnly", "placeholder"];
const _hoisted_22 = { class: "intro input-item" };
const _hoisted_23 = ["placeholder"];
const _hoisted_24 = { class: "orginFile input-item" };
const _hoisted_25 = { class: "placeholder" };
const _hoisted_26 = { class: "orginFile input-item" };
const _hoisted_27 = { class: "placeholder" };
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "index input-item" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    type: "number",
    readOnly: true,
    disabled: true
  })
], -1));
const _hoisted_29 = { class: "btn btn-block btn-default" };
const _hoisted_30 = {
  key: 0,
  class: "flex flex-align-center btn-group"
};
const _hoisted_31 = { class: "option-list" };
const _hoisted_32 = { class: "option-item" };
const _hoisted_33 = { class: "option-item-header flex flex-align-center" };
const _hoisted_34 = { class: "label flex1" };
const _hoisted_35 = { class: "same flex flex-align-center" };
const _hoisted_36 = { class: "cont" };
const _hoisted_37 = { class: "option-item" };
const _hoisted_38 = { class: "option-item-header flex flex-align-center" };
const _hoisted_39 = { class: "label flex1" };
const _hoisted_40 = { class: "same flex flex-align-center" };
const _hoisted_41 = { class: "cont flex flex-align-center" };
const _hoisted_42 = { class: "option-item" };
const _hoisted_43 = { class: "option-item-header flex flex-align-center" };
const _hoisted_44 = { class: "label flex1" };
const _hoisted_45 = { class: "same flex flex-align-center" };
const _hoisted_46 = { class: "cont" };
const _hoisted_47 = { class: "option-item" };
const _hoisted_48 = { class: "option-item-header flex flex-align-center" };
const _hoisted_49 = { class: "label flex1" };
const _hoisted_50 = { class: "same flex flex-align-center" };
const _hoisted_51 = { class: "cont" };
const _hoisted_52 = { class: "option-item" };
const _hoisted_53 = { class: "option-item-header flex flex-align-center" };
const _hoisted_54 = { class: "label flex1" };
const _hoisted_55 = { class: "same flex flex-align-center" };
const _hoisted_56 = { class: "cont" };
const _hoisted_57 = { class: "tips" };
const _hoisted_58 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_59 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "$index", -1));
const _hoisted_60 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "$total", -1));
const _hoisted_61 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_62 = { class: "option-item" };
const _hoisted_63 = { class: "option-item-header flex flex-align-center" };
const _hoisted_64 = { class: "label flex1" };
const _hoisted_65 = { class: "same flex flex-align-center" };
const _hoisted_66 = { class: "cont" };
const _hoisted_67 = { class: "option-item" };
const _hoisted_68 = { class: "option-item-header flex flex-align-center" };
const _hoisted_69 = { class: "label flex1" };
const _hoisted_70 = { class: "same flex flex-align-center" };
const _hoisted_71 = { class: "flex" };
const _hoisted_72 = { class: "result" };
const _hoisted_73 = { class: "batch-create-tips" };
const _hoisted_74 = { class: "result-msg" };
const _hoisted_75 = { class: "result-num" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const list = reactive([]);
    const initNewItem = {
      cover: null,
      originalFile: null,
      name: "",
      intro: "",
      classify: [],
      series: [],
      count: 1
    };
    const newItem = reactive({ val: { ...JSON.parse(JSON.stringify(initNewItem)) } });
    const isSame = reactive({
      cover: false,
      originalFile: false,
      name: false,
      intro: false,
      classify: false,
      series: false
    });
    reactive([]);
    ref(false);
    const router = useRouter();
    const store = useStore();
    const isShowSeriesModal = ref(false);
    reactive([]);
    const i18n = useI18n();
    const isShowResult = ref(false);
    const isBreak = ref(false);
    const isCreated = ref(false);
    const paramsList = [];
    const isShowOption = ref(false);
    const successNum = computed(() => {
      let num = 0;
      for (let i = 0; i < list.length; i++) {
        if (list[i].genesis && list[i].codeHash && list[i].tokenIndex) {
          num = num + 1;
        } else {
          break;
        }
      }
      return num;
    });
    function removeItem(index) {
      const oldSeries = list[index].series;
      list.splice(index, 1);
      if (oldSeries.length > 0) {
        for (let i = index; i < list.length; i++) {
          if (list[i].series[0] === oldSeries[0]) {
            const currentIndex = getCurrentIndex(oldSeries[0], index);
            list[i].index = currentIndex;
          }
        }
      }
    }
    async function startBacth() {
      if (list.length <= 0)
        return;
      paramsList.length = 0;
      isBreak.value = false;
      await checkSdkStatus();
      const result = await checkUserCanIssueNft();
      if (!result)
        return;
      const loading2 = ElLoading.service();
      try {
        let amount = 0;
        let isReady = true;
        const amountUuids = [];
        for (let i = 0; i < list.length; i++) {
          if (!list[i].tokenIndex) {
            if (!list[i].cover) {
              ElMessage.error(`${i + 1}: ${i18n.t("uploadcover")}`);
              isReady = false;
              loading2.close();
              break;
            }
            if (!list[i].originalFile) {
              ElMessage.error(`${i + 1}: ${i18n.t("uploadTips")}`);
              isReady = false;
              loading2.close();
              break;
            }
            if (list[i].name.replace(/\s*/g, "") === "") {
              ElMessage.error(`${i + 1}: ${i18n.t("nameplac")}`);
              isReady = false;
              loading2.close();
              break;
            }
            if (list[i].intro === "") {
              ElMessage.error(`${i + 1}: ${i18n.t("drscplac")}`);
              isReady = false;
              loading2.close();
              break;
            }
            if (list[i].classify.length <= 0) {
              ElMessage.error(i18n.t("choosetype"));
              isReady = false;
              loading2.close();
              break;
            }
            const isImgSha256Exist = await Promise.all([
              isExistSha256(list[i].cover.sha256, store.state.userInfo.metaId),
              isExistSha256(list[i].originalFile.sha256, store.state.userInfo.metaId)
            ]);
            const nfticon = isImgSha256Exist[0] ? `${isImgSha256Exist[0].txId}` : {
              fileType: list[i].cover.data_type,
              fileName: list[i].cover.name,
              data: list[i].cover.hexData
            };
            const iconType = isImgSha256Exist[0] ? "txId" : "pic";
            const originalFileTxid = isImgSha256Exist[1] ? void 0 : {
              fileType: list[i].originalFile.data_type,
              fileName: list[i].originalFile.name,
              data: list[i].originalFile.hexData
            };
            const originalFileIsTxid = isImgSha256Exist[1] ? `${isImgSha256Exist[1].txId}` : void 0;
            const params = {
              nfticon,
              iconType,
              receiverAddress: store.state.userInfo.address,
              nftname: list[i].name,
              nftdesc: list[i].intro,
              nftwebsite: "",
              nftissuerName: store.state.userInfo.name,
              content: {
                originalFileTxid,
                originalFileIsTxid,
                nftType: "1",
                classifyList: JSON.stringify(list[i].classify),
                contentTxId: ""
              },
              codeHash: list[i].codeHash,
              genesis: list[i].genesis,
              genesisTxId: list[i].genesisTxId,
              sensibleId: list[i].sensibleId,
              isBatch: true
            };
            paramsList.push({
              id: list[i].id,
              ...params
            });
            const amountUuid = amountUuids.find((item) => item.uuid === list[i].sameUuid);
            if (amountUuid) {
              amount += amountUuid.amount;
            } else {
              const res = await store.state.sdk?.createNFT({
                checkOnly: true,
                ...params
              });
              if (typeof res === "number") {
                amount += res;
                amountUuids.push({
                  uuid: list[i].sameUuid,
                  amount: res
                });
              }
            }
          }
        }
        if (!isReady)
          return;
        const isConfirm = await confirmToSendMetaData(amount);
        if (isConfirm) {
          isCreated.value = true;
          loading2.close();
          isShowResult.value = true;
          for (let i = 0; i < paramsList.length; i++) {
            let isCreatedSuccess = false;
            try {
              const { id, ...currentParams } = paramsList[i];
              const res = await store.state.sdk?.createNFT({
                ...currentParams
              });
              if (res && typeof res !== "number") {
                isCreatedSuccess = true;
                const index = list.findIndex((item) => item.id === id);
                list[index].codeHash = res.codehash;
                list[index].genesis = res.genesisId;
                list[index].tokenIndex = res.tokenIndex;
                if (parseInt(res.tokenIndex) === list[index].index - 1) {
                  if (list[i].series.length > 0) {
                    store.commit(Mutation.UPDATESERIESNUM, { series: list[i].series[0] });
                  }
                  await store.state.sdk?.checkNftTxIdStatus(res.sendMoneyTx);
                } else {
                  isBreak.value = true;
                  isShowResult.value = false;
                  ElMessage.error(i18n.t("tokenIndexNotMatch"));
                  if (i === 2)
                    new Error("error");
                  else
                    break;
                }
              }
            } catch (error) {
              if (error)
                ElMessage.error(JSON.stringify(error));
              isShowResult.value = false;
            }
            if (!isCreatedSuccess) {
              break;
            }
          }
          isShowResult.value = false;
          loading2.close();
        }
      } catch (error) {
        loading2.close();
        if (error)
          ElMessage.error(typeof error === "string" ? error : JSON.stringify(error));
      }
    }
    async function resetBacth() {
      list.length = 0;
      isCreated.value = false;
    }
    const loading = ElLoading.service();
    function getDatas() {
      if (store.getters.isCerted) {
        loading.close();
      } else {
        ElMessage.error(i18n.t("unAuth"));
        loading.close();
        router.push({ name: "home" });
      }
    }
    function changeItemSeries(val, item) {
      const oldSeries = item.series;
      item.series = val;
      const currentSeriesItem = val.length > 0 ? store.state.series.find((_item) => _item.name === item.series[0]) : void 0;
      item.genesis = currentSeriesItem ? currentSeriesItem.genesis : void 0;
      item.codeHash = currentSeriesItem ? currentSeriesItem.codeHash : void 0;
      item.genesisTxId = currentSeriesItem ? currentSeriesItem.genesisTxId : void 0;
      item.sensibleId = currentSeriesItem ? currentSeriesItem.sensibleId : void 0;
      item.sameUuid = v1();
      const index = list.findIndex((_item) => _item.id === item.id);
      const currentIndex = getCurrentIndex(val[0], index);
      item.index = currentIndex;
      for (let i = index + 1; i < list.length; i++) {
        if (oldSeries.length > 0 && list[i].series[0] === oldSeries[0] || val.length > 0 && val[0] === list[i].series[0]) {
          const newCurrentIndex = getCurrentIndex(list[i].series[0], i);
          list[i].index = newCurrentIndex;
        }
      }
    }
    function getCurrentIndex(series, stoplistIndex) {
      if (series) {
        const currentSeriesItem = store.state.series.find((item) => item.name === series);
        const currentSeriesList = list.filter((item, index) => {
          if (item.genesis === currentSeriesItem.genesis && item.codeHash === currentSeriesItem.codeHash && item.genesisTxId === currentSeriesItem.genesisTxId && item.sensibleId === currentSeriesItem.sensibleId) {
            if (typeof stoplistIndex === "number") {
              if (index < stoplistIndex) {
                return item;
              }
            } else {
              return item;
            }
          }
        });
        if (currentSeriesList.length > 0) {
          return currentSeriesList[currentSeriesList.length - 1].index + 1;
        } else {
          return currentSeriesItem.currentNumber + 1;
        }
      } else {
        return 1;
      }
    }
    function confirmAdd() {
      const loading2 = ElLoading.service();
      try {
        const { count, ...item } = newItem.val;
        const currentSeriesItem = item.series.length > 0 ? store.state.series.find((_item) => _item.name === item.series[0]) : void 0;
        let sameUuid;
        if (isSame.classify && isSame.cover && isSame.intro && isSame.name && isSame.originalFile && isSame.series)
          sameUuid = v1();
        for (let i = 0; i < count; i++) {
          const currentItemIndex = getCurrentIndex(i === 0 || isSame.series ? item.series[0] : null);
          list.push({
            index: currentItemIndex,
            id: v1(),
            sameUuid: sameUuid ? sameUuid : v1(),
            genesis: currentSeriesItem ? currentSeriesItem.genesis : void 0,
            codeHash: currentSeriesItem ? currentSeriesItem.codeHash : void 0,
            genesisTxId: currentSeriesItem ? currentSeriesItem.genesisTxId : void 0,
            sensibleId: currentSeriesItem ? currentSeriesItem.sensibleId : void 0,
            cover: i === 0 || isSame.cover ? item.cover : null,
            originalFile: i === 0 || isSame.originalFile ? item.originalFile : null,
            name: i === 0 || isSame.name ? item.name.replaceAll("$index", currentItemIndex.toString()).replaceAll("$total", currentSeriesItem ? currentSeriesItem.maxNumber.toString() : "1") : "",
            intro: i === 0 || isSame.intro ? item.intro : "",
            classify: i === 0 || isSame.classify ? item.classify : [],
            isShowClassifyModal: false,
            isShowSeriesModal: false,
            series: i === 0 || isSame.series ? item.series : []
          });
        }
        isShowOption.value = false;
        newItem.val = { ...JSON.parse(JSON.stringify(initNewItem)) };
        for (let i in isSame) {
          isSame[i] = false;
        }
        loading2.close();
      } catch (error) {
        if (error)
          ElMessage.error(typeof error === "string" ? error : JSON.stringify(error));
        loading2.close();
      }
    }
    if (store.state.userInfo) {
      getDatas();
    } else {
      store.watch((state) => state.userInfo, () => {
        if (store.state.userInfo)
          getDatas();
      });
    }
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_ElSwitch = ElSwitch;
      const _component_ElOption = ElOption;
      const _component_ElSelect = ElSelect;
      const _component_ElInput = ElInput;
      const _component_ElInputNumber = ElInputNumber;
      const _component_ElButton = ElButton;
      const _component_ElDialog = ElDialog;
      const _component_ElProgress = ElProgress;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(InnerPageHeader, {
          title: _ctx.$t("batchCreate"),
          intro: _ctx.$t("batchCreateDrsc"),
          "is-show-search": false
        }, null, 8, ["title", "intro"]),
        createBaseVNode("div", _hoisted_1, [
          createCommentVNode(" \u6279\u91CF\u94F8\u9020\u5217\u8868 "),
          createBaseVNode("div", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(list), (item, index) => {
              return openBlock(), createElementBlock("div", {
                class: "batch-create-item",
                key: item.id,
                id: item.id
              }, [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(InputImage, {
                    cover: item.cover,
                    disabled: isCreated.value,
                    "is-preview": true,
                    onChange: (file) => (item.cover = file, item.sameUuid = unref(v1)()),
                    placeholder: _ctx.$t("uploadcover")
                  }, null, 8, ["cover", "disabled", "onChange", "placeholder"])
                ]),
                createVNode(InputFile, {
                  placeholder: _ctx.$t("nftoriginal"),
                  "original-file": item.originalFile,
                  disabled: isCreated.value,
                  align: unref(TextAlign).Start,
                  onChange: (files) => (item.originalFile = files[0], item.sameUuid = unref(v1)())
                }, null, 8, ["placeholder", "original-file", "disabled", "align", "onChange"]),
                createBaseVNode("div", {
                  class: normalizeClass(["name input-item", { disabled: isCreated.value }])
                }, [
                  withDirectives(createBaseVNode("input", {
                    type: "text",
                    readOnly: isCreated.value,
                    "onUpdate:modelValue": ($event) => item.name = $event,
                    placeholder: _ctx.$t("nameplac"),
                    onChange: ($event) => item.sameUuid = unref(v1)()
                  }, null, 40, _hoisted_5), [
                    [vModelText, item.name]
                  ])
                ], 2),
                createBaseVNode("div", {
                  class: normalizeClass(["intro input-item", { disabled: isCreated.value }])
                }, [
                  withDirectives(createBaseVNode("textarea", {
                    "onUpdate:modelValue": ($event) => item.intro = $event,
                    readOnly: isCreated.value,
                    placeholder: _ctx.$t("drscplac"),
                    onChange: ($event) => item.sameUuid = unref(v1)()
                  }, null, 40, _hoisted_6), [
                    [vModelText, item.intro]
                  ])
                ], 2),
                createBaseVNode("div", {
                  class: normalizeClass(["orginFile input-item", { disabled: isCreated.value }]),
                  onClick: ($event) => isCreated.value ? "" : item.isShowClassifyModal = !item.isShowClassifyModal
                }, [
                  item.classify.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_8, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(item.classify, (_item, index2) => {
                      return openBlock(), createElementBlock(Fragment, { key: _item }, [
                        createTextVNode(toDisplayString(_ctx.$t(_item)), 1),
                        index2 !== item.classify.length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          _hoisted_9
                        ], 2112)) : createCommentVNode("v-if", true)
                      ], 64);
                    }), 128))
                  ])) : (openBlock(), createElementBlock("div", _hoisted_10, toDisplayString(_ctx.$t("choosetype")), 1)),
                  createVNode(PickerModel, {
                    name: "classify",
                    listKey: "classify",
                    title: _ctx.$t("choosetype"),
                    multiple: true,
                    disabled: "disabled",
                    visible: item.isShowClassifyModal,
                    onConfirm: ($event) => item.isShowClassifyModal = false,
                    list: unref(store).state.classifyList,
                    selecteds: item.classify,
                    onChange: (val) => (item.classify = val, item.sameUuid = unref(v1)())
                  }, null, 8, ["title", "visible", "onConfirm", "list", "selecteds", "onChange"])
                ], 10, _hoisted_7),
                createBaseVNode("div", {
                  class: normalizeClass(["orginFile input-item", { disabled: isCreated.value }]),
                  onClick: ($event) => isCreated.value ? "" : item.isShowSeriesModal = !item.isShowSeriesModal
                }, [
                  item.series?.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_12, toDisplayString(item.series[0]), 1)) : (openBlock(), createElementBlock("div", _hoisted_13, toDisplayString(_ctx.$t("chooseserices")), 1)),
                  createVNode(ChooseSeriesModal, {
                    isShowSeriesModal: item.isShowSeriesModal,
                    selectedSeries: item.series,
                    onChange: (val) => changeItemSeries(val, item),
                    onConfirm: ($event) => item.isShowSeriesModal = false
                  }, null, 8, ["isShowSeriesModal", "selectedSeries", "onChange", "onConfirm"])
                ], 10, _hoisted_11),
                createBaseVNode("div", _hoisted_14, [
                  withDirectives(createBaseVNode("input", {
                    type: "number",
                    readOnly: true,
                    disabled: true,
                    "onUpdate:modelValue": ($event) => item.index = $event,
                    placeholder: _ctx.$t("indexNumber")
                  }, null, 8, _hoisted_15), [
                    [vModelText, item.index]
                  ])
                ]),
                !item.tokenIndex ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: "btn btn-block btn-default",
                  onClick: ($event) => removeItem(index)
                }, toDisplayString(_ctx.$t("delete")), 9, _hoisted_16)) : (openBlock(), createBlock(_component_router_link, {
                  key: 1,
                  to: {
                    name: "detail",
                    params: {
                      genesisId: item.genesis,
                      codehash: item.codeHash,
                      tokenIndex: item.tokenIndex
                    }
                  },
                  class: "btn btn-block"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("lookDetail")), 1)
                  ]),
                  _: 2
                }, 1032, ["to"]))
              ], 8, _hoisted_3);
            }), 128)),
            createCommentVNode(" \u6DFB\u52A0 "),
            !isCreated.value ? (openBlock(), createElementBlock("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                createBaseVNode("div", _hoisted_19, [
                  createVNode(InputImage, {
                    placeholder: _ctx.$t("uploadcover")
                  }, null, 8, ["placeholder"])
                ])
              ]),
              createVNode(InputFile, {
                placeholder: _ctx.$t("nftoriginal")
              }, null, 8, ["placeholder"]),
              createBaseVNode("div", _hoisted_20, [
                createBaseVNode("input", {
                  type: "text",
                  readOnly: isCreated.value,
                  placeholder: _ctx.$t("nameplac")
                }, null, 8, _hoisted_21)
              ]),
              createBaseVNode("div", _hoisted_22, [
                createBaseVNode("textarea", {
                  placeholder: _ctx.$t("drscplac")
                }, null, 8, _hoisted_23)
              ]),
              createBaseVNode("div", _hoisted_24, [
                createBaseVNode("div", _hoisted_25, toDisplayString(_ctx.$t("choosetype")), 1)
              ]),
              createBaseVNode("div", _hoisted_26, [
                createBaseVNode("div", _hoisted_27, toDisplayString(_ctx.$t("choosetype")), 1)
              ]),
              _hoisted_28,
              createBaseVNode("div", _hoisted_29, toDisplayString(_ctx.$t("delete")), 1),
              createBaseVNode("div", {
                class: "add flex flex-align-center flex-pack-center",
                onClick: _cache[0] || (_cache[0] = ($event) => isShowOption.value = true)
              }, " + ")
            ])) : createCommentVNode("v-if", true)
          ]),
          isCreated.value ? (openBlock(), createElementBlock("div", _hoisted_30, [
            createBaseVNode("div", {
              class: "btn btn-block flex1",
              onClick: resetBacth
            }, toDisplayString(_ctx.$t("resetBatchCreate")), 1),
            unref(successNum) < unref(list).length ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "btn btn-block flex1",
              onClick: startBacth
            }, toDisplayString(_ctx.$t("continueBatchCreate")), 1)) : createCommentVNode("v-if", true)
          ])) : unref(list).length > 0 ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: "btn btn-block",
            onClick: startBacth
          }, toDisplayString(isBreak.value ? _ctx.$t("continue") : _ctx.$t("startBatchCreate")), 1)) : createCommentVNode("v-if", true)
        ]),
        createCommentVNode(" \u6DFB\u52A0\u6279\u91CF\u94F8\u9020 "),
        createVNode(_component_ElDialog, {
          modelValue: isShowOption.value,
          "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => isShowOption.value = $event),
          title: _ctx.$t("addcreateBatch"),
          "close-on-click-modal": false,
          "close-on-press-escape": false,
          "show-close": false
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_31, [
              createCommentVNode(" \u9009\u62E9NFT\u7CFB\u5217 "),
              createBaseVNode("div", _hoisted_32, [
                createBaseVNode("div", _hoisted_33, [
                  createBaseVNode("div", _hoisted_34, toDisplayString(_ctx.$t("ChooseNFTSeries")), 1),
                  createBaseVNode("div", _hoisted_35, [
                    createTextVNode(toDisplayString(_ctx.$t("sameSeries")) + " ", 1),
                    createVNode(_component_ElSwitch, {
                      disabled: isCreated.value,
                      modelValue: unref(isSame).series,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(isSame).series = $event)
                    }, null, 8, ["disabled", "modelValue"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_36, [
                  createBaseVNode("div", {
                    class: "series-choose flex flex-align-center",
                    onClick: _cache[4] || (_cache[4] = ($event) => isShowSeriesModal.value = !isShowSeriesModal.value)
                  }, [
                    createBaseVNode("span", {
                      class: normalizeClass({ placeholder: unref(newItem).val.series.length <= 0 })
                    }, toDisplayString(unref(newItem).val.series.length <= 0 ? _ctx.$t("batchCreateSeriesTips") : unref(newItem).val.series[0]), 3),
                    createVNode(ChooseSeriesModal, {
                      isShowSeriesModal: isShowSeriesModal.value,
                      selectedSeries: unref(newItem).val.series,
                      onChange: _cache[2] || (_cache[2] = (val) => unref(newItem).val.series = val),
                      onConfirm: _cache[3] || (_cache[3] = ($event) => isShowSeriesModal.value = false)
                    }, null, 8, ["isShowSeriesModal", "selectedSeries"])
                  ])
                ])
              ]),
              createCommentVNode(" \u9009\u62E9NFT\u5206\u7C7B "),
              createBaseVNode("div", _hoisted_37, [
                createBaseVNode("div", _hoisted_38, [
                  createBaseVNode("div", _hoisted_39, toDisplayString(_ctx.$t("ChooseNFTClassIfy")), 1),
                  createBaseVNode("div", _hoisted_40, [
                    createTextVNode(toDisplayString(_ctx.$t("sameClassify")) + " ", 1),
                    createVNode(_component_ElSwitch, {
                      disabled: isCreated.value,
                      modelValue: unref(isSame).classify,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(isSame).classify = $event)
                    }, null, 8, ["disabled", "modelValue"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_41, [
                  createVNode(_component_ElSelect, {
                    class: "flex1",
                    modelValue: unref(newItem).val.classify,
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(newItem).val.classify = $event),
                    multiple: "",
                    placeholder: _ctx.$t("choosetype")
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(store).state.classifyList, (item) => {
                        return openBlock(), createBlock(_component_ElOption, {
                          key: item.classify,
                          label: _ctx.$t(item.classify),
                          value: item.classify,
                          disabled: item.disabled
                        }, null, 8, ["label", "value", "disabled"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder"])
                ])
              ]),
              createCommentVNode(" NFT\u5C01\u9762 "),
              createBaseVNode("div", _hoisted_42, [
                createBaseVNode("div", _hoisted_43, [
                  createBaseVNode("div", _hoisted_44, toDisplayString(_ctx.$t("NFTCover")), 1),
                  createBaseVNode("div", _hoisted_45, [
                    createTextVNode(toDisplayString(_ctx.$t("isSameNFTCover")) + " ", 1),
                    createVNode(_component_ElSwitch, {
                      disabled: isCreated.value,
                      modelValue: unref(isSame).cover,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(isSame).cover = $event)
                    }, null, 8, ["disabled", "modelValue"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_46, [
                  createVNode(InputImage, {
                    disabled: isCreated.value,
                    cover: unref(newItem).val.cover,
                    onChange: _cache[8] || (_cache[8] = (file) => unref(newItem).val.cover = file),
                    placeholder: _ctx.$t("uploadcover")
                  }, null, 8, ["disabled", "cover", "placeholder"])
                ])
              ]),
              createCommentVNode(" NFT\u6E90\u6587\u4EF6 "),
              createBaseVNode("div", _hoisted_47, [
                createBaseVNode("div", _hoisted_48, [
                  createBaseVNode("div", _hoisted_49, toDisplayString(_ctx.$t("nftoriginal")), 1),
                  createBaseVNode("div", _hoisted_50, [
                    createTextVNode(toDisplayString(_ctx.$t("isSameOriginalFile")) + " ", 1),
                    createVNode(_component_ElSwitch, {
                      disabled: isCreated.value,
                      modelValue: unref(isSame).originalFile,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(isSame).originalFile = $event)
                    }, null, 8, ["disabled", "modelValue"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_51, [
                  createVNode(InputFile, {
                    class: "flex1",
                    align: unref(TextAlign).Start,
                    disabled: isCreated.value,
                    placeholder: _ctx.$t("nftoriginal"),
                    "original-file": unref(newItem).val.originalFile,
                    onChange: _cache[10] || (_cache[10] = (files) => unref(newItem).val.originalFile = files[0])
                  }, null, 8, ["align", "disabled", "placeholder", "original-file"])
                ])
              ]),
              createCommentVNode(" NFT\u4F5C\u54C1\u540D\u79F0 "),
              createBaseVNode("div", _hoisted_52, [
                createBaseVNode("div", _hoisted_53, [
                  createBaseVNode("div", _hoisted_54, toDisplayString(_ctx.$t("NFTName")), 1),
                  createBaseVNode("div", _hoisted_55, [
                    createTextVNode(toDisplayString(_ctx.$t("isSameNFTName")) + " ", 1),
                    createVNode(_component_ElSwitch, {
                      disabled: isCreated.value,
                      modelValue: unref(isSame).name,
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(isSame).name = $event)
                    }, null, 8, ["disabled", "modelValue"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_56, [
                  createVNode(_component_ElInput, {
                    modelValue: unref(newItem).val.name,
                    "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(newItem).val.name = $event),
                    placeholder: _ctx.$t("nameplac")
                  }, null, 8, ["modelValue", "placeholder"]),
                  createBaseVNode("div", _hoisted_57, [
                    createTextVNode(toDisplayString(_ctx.$t("sameNameTips")) + " ", 1),
                    _hoisted_58,
                    _hoisted_59,
                    createTextVNode("\xA0" + toDisplayString(_ctx.$t("sameNameTips2")), 1),
                    _hoisted_60,
                    createTextVNode("\xA0" + toDisplayString(_ctx.$t("sameNameTips3")) + " ", 1),
                    _hoisted_61,
                    createTextVNode(" " + toDisplayString(_ctx.$t("sameNameTips4")), 1)
                  ])
                ])
              ]),
              createCommentVNode(" NFT\u4F5C\u54C1\u63CF\u8FF0 "),
              createBaseVNode("div", _hoisted_62, [
                createBaseVNode("div", _hoisted_63, [
                  createBaseVNode("div", _hoisted_64, toDisplayString(_ctx.$t("NFTDrsc")), 1),
                  createBaseVNode("div", _hoisted_65, [
                    createTextVNode(toDisplayString(_ctx.$t("isSameNFTDrsc")) + " ", 1),
                    createVNode(_component_ElSwitch, {
                      disabled: isCreated.value,
                      modelValue: unref(isSame).intro,
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(isSame).intro = $event)
                    }, null, 8, ["disabled", "modelValue"])
                  ])
                ]),
                createBaseVNode("div", _hoisted_66, [
                  createVNode(_component_ElInput, {
                    modelValue: unref(newItem).val.intro,
                    "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(newItem).val.intro = $event),
                    type: "textarea",
                    placeholder: _ctx.$t("drscplac")
                  }, null, 8, ["modelValue", "placeholder"])
                ])
              ]),
              createCommentVNode(" \u8BBE\u7F6E\u6DFB\u52A0\u6279\u91CF\u94F8\u9020\u7684\u6570\u91CF "),
              createBaseVNode("div", _hoisted_67, [
                createBaseVNode("div", _hoisted_68, [
                  createBaseVNode("div", _hoisted_69, toDisplayString(_ctx.$t("batchAddMany")), 1),
                  createBaseVNode("div", _hoisted_70, [
                    createVNode(_component_ElInputNumber, {
                      min: 1,
                      modelValue: unref(newItem).val.count,
                      "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => unref(newItem).val.count = $event)
                    }, null, 8, ["modelValue"])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_71, [
              createVNode(_component_ElButton, {
                size: "large",
                class: "flex1",
                onClick: _cache[16] || (_cache[16] = ($event) => isShowOption.value = false)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_ElButton, {
                type: "primary",
                size: "large",
                class: "flex1",
                onClick: confirmAdd
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        createVNode(_component_ElDialog, {
          modelValue: isShowResult.value,
          "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => isShowResult.value = $event),
          title: _ctx.$t("batchCreateIniting"),
          "close-on-click-modal": false,
          "close-on-press-escape": false,
          "show-close": false
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_72, [
              createBaseVNode("div", _hoisted_73, toDisplayString(_ctx.$t("batchCreateTips")), 1),
              createBaseVNode("div", _hoisted_74, [
                createBaseVNode("div", _hoisted_75, [
                  createTextVNode(toDisplayString(_ctx.$t("batchCreatNum")) + ":", 1),
                  createBaseVNode("span", null, toDisplayString(unref(list).length), 1),
                  createTextVNode(" " + toDisplayString(_ctx.$t("indivual")) + ", " + toDisplayString(_ctx.$t("beSuccess")) + ":", 1),
                  createBaseVNode("span", null, toDisplayString(unref(successNum)), 1),
                  createTextVNode(" " + toDisplayString(_ctx.$t("indivual")), 1)
                ]),
                createVNode(_component_ElProgress, {
                  percentage: Math.ceil(unref(successNum) / unref(list).length * 100),
                  "stroke-width": 30
                }, null, 8, ["percentage"])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 64);
    };
  }
});
var Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-35cd5e2b"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/batch/Create.vue"]]);

export { Create as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlLmI4NTkzYmI0LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
