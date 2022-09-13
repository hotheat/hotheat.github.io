var __defProp = Object.defineProperty;
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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { d as defineComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, aW as normalizeStyle, t as toDisplayString, _ as _export_sfc, ad as tranfromImgFile, h as createVNode, g as unref, ac as ElImage, j as createCommentVNode, p as pushScopeId, b as popScopeId, r as reactive, a_ as v1, e as ref, V as useRouter, u as useI18n, L as computed, a2 as ElLoading, O as resolveComponent, $ as withModifiers, aV as ElSwitch, F as Fragment, i as renderList, l as createBlock, y as withDirectives, z as vModelText, P as createTextVNode, w as withCtx, a$ as ElProgress, R as ElDialog, k as useStore, T as checkSdkStatus, af as checkUserCanIssueNft, S as ElMessage, a8 as confirmToSendMetaData } from "./index.1063289c.js";
/* empty css                     *//* empty css                    *//* empty css                      */import { _ as _imports_0, C as ChooseSeriesModal, P as PickerModel } from "./ChooseSeriesModal.ef2eaeaa.js";
import { c as classifyList, a as canCreateCardClassifyListMetaids } from "./config.c3ac3733.js";
import { I as InnerPageHeader } from "./InnerPageHeader.d944e619.js";
import { T as TextAlign } from "./enum.cb4b74f9.js";
/* empty css                          */import "./bannet_icon_ins.c0e9a236.js";
import "./icon_search.630cdfed.js";
var InputFile_scss_vue_type_style_index_0_src_abb6c940_scoped_true_lang = "";
const _hoisted_1$2 = { class: "input-file" };
const _hoisted_2$2 = ["disabled", "placeholder", "accept"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    originalFile: { default: null },
    placeholder: { default: "" },
    accept: { default: "*" },
    align: { default: TextAlign.Right },
    disabled: { type: Boolean, default: false }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    function onChange(e) {
      return __async(this, null, function* () {
        const input = e.target;
        let files = input.files;
        const metaFiles = [];
        if (files) {
          for (let i = 0; i < files.length; i++) {
            const res = yield tranfromImgFile(files[i]);
            metaFiles.push(res);
          }
        }
        emit("change", metaFiles);
      });
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("input", {
          disabled: __props.disabled,
          type: "file",
          placeholder: __props.placeholder,
          onChange,
          accept: __props.accept
        }, null, 40, _hoisted_2$2),
        __props.originalFile ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "val",
          style: normalizeStyle({ textAlign: __props.align })
        }, toDisplayString((_a = __props.originalFile.raw) == null ? void 0 : _a.name), 5)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: "placeholder",
          style: normalizeStyle({ textAlign: __props.align })
        }, toDisplayString(__props.placeholder), 5))
      ]);
    };
  }
});
var InputFile = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-abb6c940"]]);
var InputImage_scss_vue_type_style_index_0_src_4622d0de_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-4622d0de"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "input-image" };
const _hoisted_2$1 = { class: "upload" };
const _hoisted_3$1 = { class: "add flex flex-align-center flex-pack-center" };
const _hoisted_4$1 = {
  key: 0,
  class: "cover-warp"
};
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "icon",
  src: _imports_0
}, null, -1));
const _hoisted_6$1 = { class: "label" };
const _hoisted_7$1 = ["accept", "disabled"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    cover: { default: null },
    placeholder: { default: "" },
    accept: { default: "image/*" },
    isPreview: { type: Boolean, default: false },
    isShowRemoveBtn: { type: Boolean, default: true },
    disabled: { type: Boolean, default: false }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    function onChange(e) {
      return __async(this, null, function* () {
        const input = e.target;
        let files = input.files;
        let metaFile = null;
        if (files[0]) {
          metaFile = yield tranfromImgFile(files[0]);
        }
        emit("change", metaFile);
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            __props.cover ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
              createVNode(unref(ElImage), {
                class: "cover",
                fit: "cover",
                src: __props.cover.base64Data,
                "preview-src-list": __props.isPreview ? [__props.cover.base64Data] : [],
                "append-to-body": true
              }, null, 8, ["src", "preview-src-list"]),
              __props.isShowRemoveBtn ? (openBlock(), createElementBlock("a", {
                key: 0,
                class: "close",
                onClick: _cache[0] || (_cache[0] = ($event) => emit("change", null))
              }, toDisplayString(_ctx.$t("delete")), 1)) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            createBaseVNode("div", null, [
              _hoisted_5$1,
              createBaseVNode("div", _hoisted_6$1, toDisplayString(__props.placeholder), 1)
            ]),
            createBaseVNode("input", {
              type: "file",
              accept: __props.accept,
              disabled: __props.disabled,
              onChange,
              style: normalizeStyle({ zIndex: __props.isShowRemoveBtn ? 2 : 3 })
            }, null, 44, _hoisted_7$1)
          ])
        ])
      ]);
    };
  }
});
var InputImage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4622d0de"]]);
var Create_scss_vue_type_style_index_0_src_09d9db9d_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-09d9db9d"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "batch-create container" };
const _hoisted_2 = { class: "section-header flex flex-align-center" };
const _hoisted_3 = { class: "select-series flex1 screen-item" };
const _hoisted_4 = { class: "input-item flex flex-align-center" };
const _hoisted_5 = { class: "select-warp flex flex-align-center" };
const _hoisted_6 = { class: "key flex1" };
const _hoisted_7 = { key: 0 };
const _hoisted_8 = {
  key: 1,
  class: "placeholder"
};
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "el-icon-arrow-right" }, null, -1));
const _hoisted_10 = { class: "screen-item flex1" };
const _hoisted_11 = { class: "select-warp flex flex-align-center" };
const _hoisted_12 = ["onClick"];
const _hoisted_13 = { class: "title" };
const _hoisted_14 = { class: "value" };
const _hoisted_15 = { key: 0 };
const _hoisted_16 = /* @__PURE__ */ createTextVNode(",");
const _hoisted_17 = {
  key: 1,
  class: "placeholder"
};
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "el-icon-arrow-right" }, null, -1));
const _hoisted_19 = { class: "section-header flex" };
const _hoisted_20 = { class: "screen-item flex1" };
const _hoisted_21 = { class: "input-item flex" };
const _hoisted_22 = { class: "select-warp flex" };
const _hoisted_23 = { class: "key flex1" };
const _hoisted_24 = { class: "title" };
const _hoisted_25 = { class: "screen-item flex1" };
const _hoisted_26 = {
  key: 0,
  class: "input-item flex flex-align-center"
};
const _hoisted_27 = { class: "select-warp flex flex-align-center" };
const _hoisted_28 = { class: "key flex1 flex flex-align-center" };
const _hoisted_29 = { class: "title" };
const _hoisted_30 = { class: "value flex1 flex flex-pack-end" };
const _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "el-icon-arrow-right" }, null, -1));
const _hoisted_32 = { class: "section-header flex" };
const _hoisted_33 = { class: "screen-item flex1" };
const _hoisted_34 = { class: "input-item flex" };
const _hoisted_35 = { class: "select-warp flex" };
const _hoisted_36 = { class: "key flex1" };
const _hoisted_37 = { class: "title" };
const _hoisted_38 = { class: "value flex1" };
const _hoisted_39 = { class: "screen-item flex1" };
const _hoisted_40 = { class: "input-item flex" };
const _hoisted_41 = { class: "select-warp flex" };
const _hoisted_42 = { class: "key flex1" };
const _hoisted_43 = { class: "title" };
const _hoisted_44 = {
  key: 0,
  class: "value flex1"
};
const _hoisted_45 = ["placeholder", "readonly"];
const _hoisted_46 = { class: "section-header flex" };
const _hoisted_47 = { class: "screen-item flex1" };
const _hoisted_48 = { class: "input-item flex" };
const _hoisted_49 = { class: "select-warp" };
const _hoisted_50 = { class: "key flex1" };
const _hoisted_51 = { class: "title" };
const _hoisted_52 = {
  key: 0,
  class: "value flex1"
};
const _hoisted_53 = {
  key: 0,
  class: "preview"
};
const _hoisted_54 = { class: "flex flex-align-center" };
const _hoisted_55 = ["readOnly", "placeholder"];
const _hoisted_56 = { class: "preview" };
const _hoisted_57 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_58 = { class: "screen-item flex1" };
const _hoisted_59 = { class: "input-item flex" };
const _hoisted_60 = { class: "select-warp" };
const _hoisted_61 = { class: "key flex1" };
const _hoisted_62 = { class: "title" };
const _hoisted_63 = {
  key: 0,
  class: "value flex1"
};
const _hoisted_64 = { class: "flex flex-align-center mt10" };
const _hoisted_65 = ["readOnly"];
const _hoisted_66 = { class: "batch-create-list" };
const _hoisted_67 = ["id"];
const _hoisted_68 = {
  key: 0,
  class: "cover upload-warp"
};
const _hoisted_69 = {
  key: 2,
  class: "name input-item"
};
const _hoisted_70 = ["readOnly", "onUpdate:modelValue", "placeholder"];
const _hoisted_71 = {
  key: 3,
  class: "intro input-item"
};
const _hoisted_72 = ["onUpdate:modelValue", "readOnly", "placeholder"];
const _hoisted_73 = ["onClick"];
const _hoisted_74 = {
  key: 0,
  class: "val"
};
const _hoisted_75 = /* @__PURE__ */ createTextVNode(",");
const _hoisted_76 = {
  key: 1,
  class: "placeholder"
};
const _hoisted_77 = { class: "index input-item" };
const _hoisted_78 = ["onUpdate:modelValue", "placeholder"];
const _hoisted_79 = ["onClick"];
const _hoisted_80 = {
  key: 0,
  class: "batch-create-item"
};
const _hoisted_81 = {
  key: 0,
  class: "cover upload-warp"
};
const _hoisted_82 = { class: "upload" };
const _hoisted_83 = {
  key: 2,
  class: "name input-item"
};
const _hoisted_84 = ["readOnly", "placeholder"];
const _hoisted_85 = {
  key: 3,
  class: "intro input-item"
};
const _hoisted_86 = ["placeholder"];
const _hoisted_87 = {
  key: 4,
  class: "orginFile input-item"
};
const _hoisted_88 = { class: "placeholder" };
const _hoisted_89 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "index input-item" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    type: "number",
    readOnly: true,
    disabled: true
  })
], -1));
const _hoisted_90 = { class: "btn btn-block btn-default" };
const _hoisted_91 = {
  key: 0,
  class: "flex flex-align-center btn-group"
};
const _hoisted_92 = { class: "result" };
const _hoisted_93 = { class: "batch-create-tips" };
const _hoisted_94 = { class: "result-msg" };
const _hoisted_95 = { class: "result-num" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const list = reactive([
      {
        id: v1(),
        cover: null,
        originalFile: null,
        index: 1,
        name: "",
        intro: "",
        isCreated: false,
        classify: [],
        isShowClassifyModal: false
      }
    ]);
    const classList = reactive(classifyList);
    const classify = reactive([]);
    const isSameClassify = ref(false);
    const isShowClassifyModal = ref(false);
    const router = useRouter();
    const store = useStore();
    const isShowSeriesModal = ref(false);
    const selectedSeries = reactive([]);
    const i18n = useI18n();
    const root = ref();
    const isShowResult = ref(false);
    const isBreak = ref(false);
    const isCreated = ref(false);
    ref(null);
    const sameInfo = reactive({
      isSameOriginalFile: false,
      originalFile: null,
      isSameCover: false,
      cover: null,
      isCoverAndoriginalSame: false,
      isSameDrsc: false,
      drsc: "",
      isSameName: false,
      name: "",
      isBatchAdd: false,
      totalNum: 0
    });
    const paramsList = [];
    const successNum = computed(() => {
      let num = 0;
      for (let i = 0; i < list.length; i++) {
        if (list[i].genesis && list[i].codehash && list[i].tokenIndex) {
          num = num + 1;
        } else {
          break;
        }
      }
      return num;
    });
    function setUserCreatCard() {
      if (store.state.userInfo) {
        const index = canCreateCardClassifyListMetaids.findIndex((item) => {
          var _a;
          return item === ((_a = store.state.userInfo) == null ? void 0 : _a.metaId);
        });
        if (index !== -1) {
          const cardIndex = classList.findIndex((item) => item.classify === "card");
          classList[cardIndex].disabled = false;
        }
        const rightsIndex = classList.findIndex((item) => item.classify === "rights");
        classList[rightsIndex].disabled = false;
      }
    }
    function addItem() {
      let index = 1;
      if (selectedSeries.length > 0) {
        if (list.length > 0) {
          index = list[list.length - 1].index + 1;
        } else {
          const seriesIndex = root.value.series.findIndex((item) => item.name === selectedSeries[0]);
          if (seriesIndex !== -1) {
            index = root.value.series[seriesIndex].currentNumber + 1;
          }
        }
      }
      list.push({
        id: v1(),
        cover: null,
        originalFile: null,
        name: "",
        intro: "",
        isCreated: false,
        classify: isSameClassify.value ? JSON.parse(JSON.stringify(classify)) : [],
        isShowClassifyModal: false,
        index
      });
    }
    function removeItem(index) {
      if (index === list.length - 1 || selectedSeries.length <= 0)
        list.splice(index, 1);
      else {
        list.splice(index, 1);
        if (selectedSeries.length > 0) {
          const startNum = root.value.series.find((item) => item.name === selectedSeries[0]).currentNumber + 1;
          for (let i = 0; i < list.length; i++) {
            list[i].index = startNum + i;
          }
        }
      }
    }
    function onChangeSameClassify() {
      if (isSameClassify.value) {
        list.map((item) => {
          item.classify = JSON.parse(JSON.stringify(classify));
          item.isShowClassifyModal = false;
        });
      }
    }
    function onSetAllClassify() {
      return __async(this, null, function* () {
        yield checkSdkStatus();
        isShowClassifyModal.value = false;
        list.map((item) => {
          item.classify = JSON.parse(JSON.stringify(classify));
          item.isShowClassifyModal = false;
        });
      });
    }
    function onSeriesConfirm() {
      return __async(this, null, function* () {
        yield checkSdkStatus();
        isShowSeriesModal.value = false;
        if (selectedSeries.length > 0) {
          const item = root.value.series.find((item2) => item2.name === selectedSeries[0]);
          if (item) {
            for (let i = 0; i < list.length; i++) {
              list[i].index = item.currentNumber + 1 + i;
            }
          }
        } else {
          for (let i = 0; i < list.length; i++) {
            list[i].index = 1;
          }
        }
      });
    }
    function sleepTime() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 5e3);
      });
    }
    function startBacth() {
      return __async(this, null, function* () {
        var _a, _c, _d;
        if (list.length <= 0)
          return;
        paramsList.length = 0;
        isBreak.value = false;
        yield checkSdkStatus();
        const result = yield checkUserCanIssueNft();
        if (!result)
          return;
        if (sameInfo.isSameName && sameInfo.name === "") {
          ElMessage.error(i18n.t("nameplac"));
          return;
        }
        if (sameInfo.isSameDrsc && sameInfo.drsc === "") {
          ElMessage.error(i18n.t("drscplac"));
          return;
        }
        if (sameInfo.isSameCover && !sameInfo.cover) {
          ElMessage.error(i18n.t("uploadcover"));
          return;
        }
        if (!sameInfo.isCoverAndoriginalSame) {
          if (sameInfo.isSameOriginalFile && !sameInfo.originalFile) {
            ElMessage.error(i18n.t("nftoriginal"));
            return;
          }
        }
        const loading2 = ElLoading.service();
        try {
          let currentSeriesItem = void 0;
          if (selectedSeries.length > 0) {
            currentSeriesItem = root.value.series.find((item) => item.name === selectedSeries[0]);
            if (currentSeriesItem && currentSeriesItem.maxNumber < list[list.length - 1].index) {
              ElMessage.error(i18n.t("overSeriesNum"));
              loading2.close();
              return;
            }
          }
          let amount = 0;
          let isReady = true;
          for (let i = 0; i < list.length; i++) {
            if (!list[i].cover && !sameInfo.isSameCover) {
              ElMessage.error(`${i + 1}: ${i18n.t("uploadcover")}`);
              isReady = false;
              loading2.close();
              break;
            }
            if (!sameInfo.isCoverAndoriginalSame) {
              if (!list[i].originalFile && !sameInfo.isSameOriginalFile) {
                ElMessage.error(`${i + 1}: ${i18n.t("uploadTips")}`);
                isReady = false;
                loading2.close();
                break;
              }
            }
            if (list[i].name.replace(/\s*/g, "") === "" && !sameInfo.isSameName) {
              ElMessage.error(`${i + 1}: ${i18n.t("nameplac")}`);
              isReady = false;
              loading2.close();
              break;
            }
            if (list[i].intro === "" && !sameInfo.isSameDrsc) {
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
            if (!list[i].genesis && !list[i].codehash && !list[i].tokenIndex) {
              let originalFile;
              if (sameInfo.isCoverAndoriginalSame) {
                if (sameInfo.isSameCover) {
                  originalFile = sameInfo.cover;
                } else {
                  originalFile = list[i].cover;
                }
              } else {
                if (sameInfo.isSameOriginalFile) {
                  originalFile = sameInfo.originalFile;
                } else {
                  originalFile = list[i].originalFile;
                }
              }
              let nftname;
              if (sameInfo.isSameName) {
                nftname = sameInfo.name.replace(/\$index/g, list[i].index.toString()).replace(/\$total/g, currentSeriesItem ? currentSeriesItem.maxNumber.toString() : "1");
              } else {
                nftname = list[i].name;
              }
              const params = {
                receiverAddress: store.state.userInfo.address,
                nftname,
                nftdesc: sameInfo.drsc ? sameInfo.drsc : list[i].intro,
                nfticon: {
                  fileType: sameInfo.isSameCover ? sameInfo.cover.data_type : list[i].cover.data_type,
                  fileName: sameInfo.isSameCover ? sameInfo.cover.name : list[i].cover.name,
                  data: sameInfo.isSameCover ? sameInfo.cover.hexData : list[i].cover.hexData
                },
                nftwebsite: "",
                nftissuerName: store.state.userInfo.name,
                content: {
                  nftType: "1",
                  classifyList: JSON.stringify(list[i].classify),
                  originalFileTxid: {
                    fileType: originalFile.data_type,
                    fileName: originalFile.name,
                    data: originalFile.hexData
                  },
                  contentTxId: ""
                },
                codeHash: currentSeriesItem ? currentSeriesItem.codeHash : void 0,
                genesis: currentSeriesItem ? currentSeriesItem.genesis : void 0,
                genesisTxId: currentSeriesItem ? currentSeriesItem.genesisTxId : void 0,
                sensibleId: currentSeriesItem ? currentSeriesItem.sensibleId : void 0
              };
              paramsList.push(__spreadValues({
                id: list[i].id
              }, params));
              const res = yield (_a = store.state.sdk) == null ? void 0 : _a.createNFT(__spreadValues({
                checkOnly: true
              }, params));
              if (typeof res === "number") {
                amount += res;
              }
            }
          }
          if (!isReady)
            return;
          const isConfirm = yield confirmToSendMetaData(amount);
          if (isConfirm) {
            isCreated.value = true;
            loading2.close();
            isShowResult.value = true;
            for (let i = 0; i < paramsList.length; i++) {
              let isCreatedSuccess = false;
              try {
                const _b = paramsList[i], { id } = _b, currentParams = __objRest(_b, ["id"]);
                const res = yield (_c = store.state.sdk) == null ? void 0 : _c.createNFT(__spreadValues({}, currentParams));
                if (res && typeof res !== "number") {
                  if (currentSeriesItem)
                    root.value.upgradeCurrentSeriesNumber();
                  isCreatedSuccess = true;
                  const index = list.findIndex((item) => item.id === id);
                  list[index].codehash = res.codehash;
                  list[index].genesis = res.genesisId;
                  list[index].tokenIndex = res.tokenIndex;
                  if (parseInt(res.tokenIndex) === list[index].index - 1) {
                    ElMessage.success(`${i18n.t("castingsuccess")}`);
                    yield (_d = store.state.sdk) == null ? void 0 : _d.checkNftTxIdStatus(res.sendMoneyTx).catch(() => ElMessage.error(i18n.t("networkTimeout")));
                    yield sleepTime();
                  } else {
                    isBreak.value = true;
                    isShowResult.value = false;
                    ElMessage.error(i18n.t("tokenIndexNotMatch"));
                    break;
                  }
                }
              } catch (error) {
                if (error)
                  ElMessage.error(JSON.stringify(error));
                isShowResult.value = false;
                break;
              }
              if (!isCreatedSuccess) {
                break;
              }
            }
            isShowResult.value = false;
            loading2.close();
          }
        } catch (error) {
          debugger;
          if (error)
            ElMessage.error(JSON.stringify(error));
          loading2.close();
        }
      });
    }
    function resetBacth() {
      return __async(this, null, function* () {
        list.length = 0;
        isCreated.value = false;
      });
    }
    const loading = ElLoading.service();
    function getDatas() {
      if (store.getters.isCerted) {
        setUserCreatCard();
        loading.close();
      } else {
        ElMessage.error(i18n.t("unAuth"));
        loading.close();
        router.push({ name: "home" });
      }
    }
    function addTo() {
      if (list.length >= sameInfo.totalNum) {
        ElMessage.error(i18n.t("mustLargeCurrentNum"));
        return false;
      }
      const loading2 = ElLoading.service();
      const addNum = sameInfo.totalNum - list.length;
      for (let i = 0; i < addNum; i++) {
        addItem();
      }
      loading2.close();
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
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(InnerPageHeader, {
          title: _ctx.$t("batchCreate"),
          intro: _ctx.$t("batchCreateDrsc"),
          "is-show-search": false
        }, null, 8, ["title", "intro"]),
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.$t("chooseserices")), 1),
                  createBaseVNode("div", {
                    class: "value",
                    onClick: _cache[0] || (_cache[0] = ($event) => isCreated.value ? isShowSeriesModal.value = false : isShowSeriesModal.value = true)
                  }, [
                    unref(selectedSeries).length > 0 ? (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString(unref(selectedSeries)[0]), 1)) : (openBlock(), createElementBlock("span", _hoisted_8, toDisplayString(_ctx.$t("choose")), 1)),
                    _hoisted_9
                  ]),
                  createVNode(ChooseSeriesModal, {
                    isShowSeriesModal: isShowSeriesModal.value,
                    selectedSeries: unref(selectedSeries),
                    onChange: onSeriesConfirm,
                    onConfirm: _cache[1] || (_cache[1] = ($event) => isShowSeriesModal.value = false),
                    ref_key: "root",
                    ref: root
                  }, null, 8, ["isShowSeriesModal", "selectedSeries"])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", {
                class: "input-item flex flex-align-center",
                onClick: _cache[3] || (_cache[3] = ($event) => isSameClassify.value ? isShowClassifyModal.value = true : isShowClassifyModal.value = false)
              }, [
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", {
                    class: "key flex1 flex flex-align-center",
                    onClick: withModifiers(onChangeSameClassify, ["stop"])
                  }, [
                    createBaseVNode("span", _hoisted_13, toDisplayString(_ctx.$t("sameClassify")) + ":", 1),
                    createVNode(unref(ElSwitch), {
                      disabled: isCreated.value,
                      modelValue: isSameClassify.value,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isSameClassify.value = $event)
                    }, null, 8, ["disabled", "modelValue"])
                  ], 8, _hoisted_12),
                  createBaseVNode("div", _hoisted_14, [
                    unref(classify).length > 0 ? (openBlock(), createElementBlock("span", _hoisted_15, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(classify), (_item, index) => {
                        return openBlock(), createElementBlock(Fragment, { key: _item }, [
                          createTextVNode(toDisplayString(_ctx.$t(_item)), 1),
                          index !== unref(classify).length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            _hoisted_16
                          ], 64)) : createCommentVNode("", true)
                        ], 64);
                      }), 128))
                    ])) : (openBlock(), createElementBlock("span", _hoisted_17, toDisplayString(_ctx.$t("choose")), 1)),
                    _hoisted_18
                  ]),
                  createVNode(PickerModel, {
                    name: "classify",
                    listKey: "classify",
                    title: _ctx.$t("choosetype"),
                    multiple: true,
                    disabled: "disabled",
                    visible: isShowClassifyModal.value,
                    onConfirm: onSetAllClassify,
                    list: unref(classList),
                    selecteds: unref(classify)
                  }, null, 8, ["title", "visible", "list", "selecteds"])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_19, [
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("div", _hoisted_21, [
                createBaseVNode("div", _hoisted_22, [
                  createBaseVNode("div", _hoisted_23, [
                    createBaseVNode("span", _hoisted_24, toDisplayString(_ctx.$t("isCoverAndoriginalSame")) + ":", 1),
                    createVNode(unref(ElSwitch), {
                      disabled: isCreated.value,
                      modelValue: unref(sameInfo).isCoverAndoriginalSame,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(sameInfo).isCoverAndoriginalSame = $event)
                    }, null, 8, ["disabled", "modelValue"])
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_25, [
              !unref(sameInfo).isCoverAndoriginalSame ? (openBlock(), createElementBlock("div", _hoisted_26, [
                createBaseVNode("div", _hoisted_27, [
                  createBaseVNode("div", _hoisted_28, [
                    createBaseVNode("span", _hoisted_29, toDisplayString(_ctx.$t("isSameOriginalFile")) + ":", 1),
                    createVNode(unref(ElSwitch), {
                      disabled: isCreated.value,
                      modelValue: unref(sameInfo).isSameOriginalFile,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(sameInfo).isSameOriginalFile = $event)
                    }, null, 8, ["disabled", "modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_30, [
                    createVNode(InputFile, {
                      class: "flex1",
                      disabled: isCreated.value,
                      placeholder: _ctx.$t("nftoriginal"),
                      "original-file": unref(sameInfo).originalFile,
                      onChange: _cache[6] || (_cache[6] = (files) => unref(sameInfo).originalFile = files[0])
                    }, null, 8, ["disabled", "placeholder", "original-file"])
                  ]),
                  _hoisted_31
                ])
              ])) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_32, [
            createBaseVNode("div", _hoisted_33, [
              createBaseVNode("div", _hoisted_34, [
                createBaseVNode("div", _hoisted_35, [
                  createBaseVNode("div", _hoisted_36, [
                    createBaseVNode("span", _hoisted_37, toDisplayString(_ctx.$t("isSameNFTCover")) + ":", 1),
                    createVNode(unref(ElSwitch), {
                      disabled: isCreated.value,
                      modelValue: unref(sameInfo).isSameCover,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(sameInfo).isSameCover = $event)
                    }, null, 8, ["disabled", "modelValue"])
                  ]),
                  createBaseVNode("div", _hoisted_38, [
                    unref(sameInfo).isSameCover ? (openBlock(), createBlock(InputImage, {
                      key: 0,
                      disabled: isCreated.value,
                      cover: unref(sameInfo).cover,
                      onChange: _cache[8] || (_cache[8] = (file) => unref(sameInfo).cover = file),
                      placeholder: _ctx.$t("uploadcover")
                    }, null, 8, ["disabled", "cover", "placeholder"])) : createCommentVNode("", true)
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_39, [
              createBaseVNode("div", _hoisted_40, [
                createBaseVNode("div", _hoisted_41, [
                  createBaseVNode("div", _hoisted_42, [
                    createBaseVNode("span", _hoisted_43, toDisplayString(_ctx.$t("isSameNFTDrsc")) + ":", 1),
                    createVNode(unref(ElSwitch), {
                      disabled: isCreated.value,
                      modelValue: unref(sameInfo).isSameDrsc,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(sameInfo).isSameDrsc = $event)
                    }, null, 8, ["disabled", "modelValue"])
                  ]),
                  unref(sameInfo).isSameDrsc ? (openBlock(), createElementBlock("div", _hoisted_44, [
                    withDirectives(createBaseVNode("textarea", {
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(sameInfo).drsc = $event),
                      placeholder: _ctx.$t("drscplac"),
                      readonly: isCreated.value || !unref(sameInfo).isSameDrsc
                    }, null, 8, _hoisted_45), [
                      [vModelText, unref(sameInfo).drsc]
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_46, [
            createBaseVNode("div", _hoisted_47, [
              createBaseVNode("div", _hoisted_48, [
                createBaseVNode("div", _hoisted_49, [
                  createBaseVNode("div", _hoisted_50, [
                    createBaseVNode("span", _hoisted_51, toDisplayString(_ctx.$t("isSameNFTName")) + ":", 1),
                    createVNode(unref(ElSwitch), {
                      disabled: isCreated.value,
                      modelValue: unref(sameInfo).isSameName,
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(sameInfo).isSameName = $event)
                    }, null, 8, ["disabled", "modelValue"])
                  ]),
                  unref(sameInfo).isSameName ? (openBlock(), createElementBlock("div", _hoisted_52, [
                    unref(sameInfo).name !== "" ? (openBlock(), createElementBlock("div", _hoisted_53, toDisplayString(_ctx.$t("preview")) + ": " + toDisplayString(unref(sameInfo).name.replace(/\$index/g, "1").replace(/\$total/g, "999")), 1)) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_54, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(sameInfo).name = $event),
                        readOnly: isCreated.value || !unref(sameInfo).isSameName,
                        type: "text",
                        placeholder: _ctx.$t("nameplac"),
                        class: "flex1"
                      }, null, 8, _hoisted_55), [
                        [vModelText, unref(sameInfo).name]
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_56, [
                      createTextVNode(toDisplayString(_ctx.$t("sameNameTips")) + " ", 1),
                      _hoisted_57,
                      createTextVNode(" \u4F8B\u5982\uFF1A " + toDisplayString(_ctx.$t("sameNameTips2")), 1)
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_58, [
              createBaseVNode("div", _hoisted_59, [
                createBaseVNode("div", _hoisted_60, [
                  createBaseVNode("div", _hoisted_61, [
                    createBaseVNode("span", _hoisted_62, toDisplayString(_ctx.$t("batchAddMany")) + ":", 1),
                    createVNode(unref(ElSwitch), {
                      disabled: isCreated.value,
                      modelValue: unref(sameInfo).isBatchAdd,
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(sameInfo).isBatchAdd = $event)
                    }, null, 8, ["disabled", "modelValue"])
                  ]),
                  unref(sameInfo).isBatchAdd ? (openBlock(), createElementBlock("div", _hoisted_63, [
                    createBaseVNode("div", _hoisted_64, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(sameInfo).totalNum = $event),
                        readOnly: isCreated.value,
                        type: "number",
                        class: "flex1"
                      }, null, 8, _hoisted_65), [
                        [vModelText, unref(sameInfo).totalNum]
                      ]),
                      createTextVNode(" " + toDisplayString(_ctx.$t("piece")) + " ", 1),
                      createBaseVNode("button", {
                        class: "btn ml10",
                        onClick: addTo
                      }, toDisplayString(_ctx.$t("confirm")), 1)
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_66, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(list), (item, index) => {
              return openBlock(), createElementBlock("div", {
                class: "batch-create-item",
                key: index,
                id: "batchItem" + index
              }, [
                !unref(sameInfo).isSameCover ? (openBlock(), createElementBlock("div", _hoisted_68, [
                  createVNode(InputImage, {
                    cover: item.cover,
                    disabled: isCreated.value,
                    "is-preview": true,
                    onChange: (file) => item.cover = file,
                    placeholder: _ctx.$t("uploadcover")
                  }, null, 8, ["cover", "disabled", "onChange", "placeholder"])
                ])) : createCommentVNode("", true),
                !unref(sameInfo).isSameOriginalFile && !unref(sameInfo).isCoverAndoriginalSame ? (openBlock(), createBlock(InputFile, {
                  key: 1,
                  placeholder: _ctx.$t("nftoriginal"),
                  "original-file": item.originalFile,
                  disabled: isCreated.value,
                  align: unref(TextAlign).Start,
                  onChange: (files) => item.originalFile = files[0]
                }, null, 8, ["placeholder", "original-file", "disabled", "align", "onChange"])) : createCommentVNode("", true),
                !unref(sameInfo).isSameName ? (openBlock(), createElementBlock("div", _hoisted_69, [
                  withDirectives(createBaseVNode("input", {
                    type: "text",
                    readOnly: isCreated.value || unref(sameInfo).isSameName,
                    "onUpdate:modelValue": ($event) => item.name = $event,
                    placeholder: _ctx.$t("nameplac")
                  }, null, 8, _hoisted_70), [
                    [vModelText, item.name]
                  ])
                ])) : createCommentVNode("", true),
                !unref(sameInfo).isSameDrsc ? (openBlock(), createElementBlock("div", _hoisted_71, [
                  withDirectives(createBaseVNode("textarea", {
                    "onUpdate:modelValue": ($event) => item.intro = $event,
                    readOnly: item.genesis,
                    placeholder: _ctx.$t("drscplac")
                  }, null, 8, _hoisted_72), [
                    [vModelText, item.intro]
                  ])
                ])) : createCommentVNode("", true),
                !isSameClassify.value ? (openBlock(), createElementBlock("div", {
                  key: 4,
                  class: "orginFile input-item",
                  onClick: ($event) => isSameClassify.value || item.genesis ? item.isShowClassifyModal = false : item.isShowClassifyModal = true
                }, [
                  item.classify.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_74, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(item.classify, (_item, index2) => {
                      return openBlock(), createElementBlock(Fragment, { key: _item }, [
                        createTextVNode(toDisplayString(_ctx.$t(_item)), 1),
                        index2 !== item.classify.length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          _hoisted_75
                        ], 64)) : createCommentVNode("", true)
                      ], 64);
                    }), 128))
                  ])) : (openBlock(), createElementBlock("div", _hoisted_76, toDisplayString(_ctx.$t("choosetype")), 1)),
                  createVNode(PickerModel, {
                    name: "classify",
                    listKey: "classify",
                    title: _ctx.$t("choosetype"),
                    multiple: true,
                    disabled: "disabled",
                    visible: item.isShowClassifyModal,
                    onConfirm: ($event) => item.isShowClassifyModal = false,
                    list: unref(classList),
                    selecteds: item.classify
                  }, null, 8, ["title", "visible", "onConfirm", "list", "selecteds"])
                ], 8, _hoisted_73)) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_77, [
                  withDirectives(createBaseVNode("input", {
                    type: "number",
                    readOnly: true,
                    disabled: true,
                    "onUpdate:modelValue": ($event) => item.index = $event,
                    placeholder: _ctx.$t("indexNumber")
                  }, null, 8, _hoisted_78), [
                    [vModelText, item.index]
                  ])
                ]),
                !item.genesis ? (openBlock(), createElementBlock("div", {
                  key: 5,
                  class: "btn btn-block btn-default",
                  onClick: ($event) => removeItem(index)
                }, toDisplayString(_ctx.$t("delete")), 9, _hoisted_79)) : (openBlock(), createBlock(_component_router_link, {
                  key: 6,
                  to: {
                    name: "detail",
                    params: {
                      genesisId: item.genesis,
                      codehash: item.codehash,
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
              ], 8, _hoisted_67);
            }), 128)),
            !isCreated.value ? (openBlock(), createElementBlock("div", _hoisted_80, [
              !unref(sameInfo).isSameCover ? (openBlock(), createElementBlock("div", _hoisted_81, [
                createBaseVNode("div", _hoisted_82, [
                  createVNode(InputImage, {
                    placeholder: _ctx.$t("uploadcover")
                  }, null, 8, ["placeholder"])
                ])
              ])) : createCommentVNode("", true),
              !unref(sameInfo).isSameOriginalFile && !unref(sameInfo).isCoverAndoriginalSame ? (openBlock(), createBlock(InputFile, {
                key: 1,
                placeholder: _ctx.$t("nftoriginal")
              }, null, 8, ["placeholder"])) : createCommentVNode("", true),
              !unref(sameInfo).isSameName ? (openBlock(), createElementBlock("div", _hoisted_83, [
                createBaseVNode("input", {
                  type: "text",
                  readOnly: isCreated.value || unref(sameInfo).isSameName,
                  placeholder: _ctx.$t("nameplac")
                }, null, 8, _hoisted_84)
              ])) : createCommentVNode("", true),
              !unref(sameInfo).isSameDrsc ? (openBlock(), createElementBlock("div", _hoisted_85, [
                createBaseVNode("textarea", {
                  placeholder: _ctx.$t("drscplac")
                }, null, 8, _hoisted_86)
              ])) : createCommentVNode("", true),
              !isSameClassify.value ? (openBlock(), createElementBlock("div", _hoisted_87, [
                createBaseVNode("div", _hoisted_88, toDisplayString(_ctx.$t("choosetype")), 1)
              ])) : createCommentVNode("", true),
              _hoisted_89,
              createBaseVNode("div", _hoisted_90, toDisplayString(_ctx.$t("delete")), 1),
              createBaseVNode("div", {
                class: "add flex flex-align-center flex-pack-center",
                onClick: addItem
              }, " + ")
            ])) : createCommentVNode("", true)
          ]),
          isCreated.value ? (openBlock(), createElementBlock("div", _hoisted_91, [
            createBaseVNode("div", {
              class: "btn btn-block flex1",
              onClick: resetBacth
            }, toDisplayString(_ctx.$t("resetBatchCreate")), 1),
            unref(successNum) < unref(list).length ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "btn btn-block flex1",
              onClick: startBacth
            }, toDisplayString(_ctx.$t("continueBatchCreate")), 1)) : createCommentVNode("", true)
          ])) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: "btn btn-block",
            onClick: startBacth
          }, toDisplayString(isBreak.value ? _ctx.$t("continue") : _ctx.$t("startBatchCreate")), 1))
        ]),
        createVNode(unref(ElDialog), {
          modelValue: isShowResult.value,
          "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => isShowResult.value = $event),
          title: _ctx.$t("batchCreateIniting"),
          "close-on-click-modal": false,
          "close-on-press-escape": false,
          "show-close": false
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_92, [
              createBaseVNode("div", _hoisted_93, toDisplayString(_ctx.$t("batchCreateTips")), 1),
              createBaseVNode("div", _hoisted_94, [
                createBaseVNode("div", _hoisted_95, [
                  createTextVNode(toDisplayString(_ctx.$t("batchCreatNum")) + ":", 1),
                  createBaseVNode("span", null, toDisplayString(unref(list).length), 1),
                  createTextVNode(" " + toDisplayString(_ctx.$t("indivual")) + ", " + toDisplayString(_ctx.$t("beSuccess")) + ":", 1),
                  createBaseVNode("span", null, toDisplayString(unref(successNum)), 1),
                  createTextVNode(" " + toDisplayString(_ctx.$t("indivual")), 1)
                ]),
                createVNode(unref(ElProgress), {
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
var Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-09d9db9d"]]);
export { Create as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlLjdhMjdmZTkwLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
