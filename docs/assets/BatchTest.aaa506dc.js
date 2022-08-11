import { _ as _export_sfc, e as defineComponent, v as reactive, r as ref, t as useRouter, u as useI18n, d as computed, f as resolveComponent, ap as ElDialog, g as openBlock, A as createElementBlock, l as createVNode, k as createBaseVNode, m as createCommentVNode, D as toDisplayString, C as unref, K as withModifiers, F as Fragment, B as renderList, T as withDirectives, V as vModelText, j as withCtx, J as createTextVNode, q as pushScopeId, s as popScopeId, E as useStore, Z as checkSdkStatus, a0 as ElLoading, X as ElMessage, cX as CreateNft, b2 as NftApiCode, i as createBlock, W as tranfromImgFile } from './index.2d61a762.js';
import { E as ElSwitch, a as ElProgress } from './progress.d48e8cf8.js';
import { E as ElImage } from './image-viewer.990d1b5f.js';
import { C as ChooseSeriesModal, P as PickerModel, U as UploadIcon } from './img_upload.409c9b34.js';
import { I as InnerPageHeader } from './InnerPageHeader.fa64e6c8.js';
import './bannet_icon_ins.9e5a53b7.js';
import './icon_search.00d5970e.js';

var BatchTest_scss_vue_type_style_index_0_src_7033d422_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-7033d422"), n = n(), popScopeId(), n);
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
const _hoisted_19 = { class: "batch-create-list" };
const _hoisted_20 = ["id"];
const _hoisted_21 = { class: "cover upload-warp" };
const _hoisted_22 = { class: "upload" };
const _hoisted_23 = { class: "add flex flex-align-center flex-pack-center" };
const _hoisted_24 = ["onClick"];
const _hoisted_25 = ["src"];
const _hoisted_26 = { class: "label" };
const _hoisted_27 = ["data-index"];
const _hoisted_28 = { class: "orginFile input-item" };
const _hoisted_29 = ["placeholder", "data-index"];
const _hoisted_30 = {
  key: 1,
  class: "val"
};
const _hoisted_31 = {
  key: 2,
  class: "placeholder"
};
const _hoisted_32 = { class: "name input-item" };
const _hoisted_33 = ["readOnly", "onUpdate:modelValue", "placeholder"];
const _hoisted_34 = { class: "intro input-item" };
const _hoisted_35 = ["onUpdate:modelValue", "readOnly", "placeholder"];
const _hoisted_36 = ["onClick"];
const _hoisted_37 = {
  key: 0,
  class: "val"
};
const _hoisted_38 = /* @__PURE__ */ createTextVNode(",");
const _hoisted_39 = {
  key: 1,
  class: "placeholder"
};
const _hoisted_40 = {
  key: 0,
  class: "index input-item"
};
const _hoisted_41 = ["onUpdate:modelValue", "placeholder"];
const _hoisted_42 = ["onClick"];
const _hoisted_43 = {
  key: 0,
  class: "batch-create-item"
};
const _hoisted_44 = { class: "cover upload-warp" };
const _hoisted_45 = { class: "upload" };
const _hoisted_46 = { class: "add flex flex-align-center flex-pack-center" };
const _hoisted_47 = ["src"];
const _hoisted_48 = { class: "label" };
const _hoisted_49 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("input", {
  type: "file",
  accept: "image/*"
}, null, -1));
const _hoisted_50 = { class: "orginFile input-item" };
const _hoisted_51 = { class: "placeholder" };
const _hoisted_52 = { class: "name input-item" };
const _hoisted_53 = ["placeholder"];
const _hoisted_54 = { class: "intro input-item" };
const _hoisted_55 = ["placeholder"];
const _hoisted_56 = { class: "orginFile input-item" };
const _hoisted_57 = { class: "placeholder" };
const _hoisted_58 = {
  key: 0,
  class: "index input-item"
};
const _hoisted_59 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("input", {
  type: "number",
  readOnly: true,
  disabled: true
}, null, -1));
const _hoisted_60 = [
  _hoisted_59
];
const _hoisted_61 = { class: "btn btn-block btn-default" };
const _hoisted_62 = { class: "add flex flex-align-center flex-pack-center" };
const _hoisted_63 = { class: "result" };
const _hoisted_64 = { class: "batch-create-tips" };
const _hoisted_65 = { class: "result-msg" };
const _hoisted_66 = { class: "result-num" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const list = reactive([
      {
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
    const classify = reactive([]);
    const isSameClassify = ref(false);
    const isShowClassifyModal = ref(false);
    useRouter();
    const store = useStore();
    const isShowSeriesModal = ref(false);
    const selectedSeries = reactive([]);
    const i18n = useI18n();
    const root = ref();
    const isShowResult = ref(false);
    const isBreak = ref(false);
    const isCreated = ref(false);
    const createCount = ref(1);
    const currentIndex = ref(null);
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
    async function coverFileInputChage(e) {
      const index = parseInt(e.currentTarget.dataset.index);
      const input = e.target;
      let files = input.files;
      if (files) {
        const res = await tranfromImgFile(files[0]);
        if (res) {
          list[index].cover = res;
        }
      }
    }
    async function originalFileInputChage(e) {
      const index = parseInt(e.currentTarget.dataset.index);
      const input = e.target;
      let files = input.files;
      if (files) {
        const res = await tranfromImgFile(files[0]);
        if (res) {
          list[index].originalFile = res;
        }
      }
    }
    function removeCover(index) {
      list[index].cover = null;
    }
    function removeItem(index) {
      if (index === list.length - 1 || selectedSeries.length <= 0)
        list.splice(index, 1);
      else {
        list.splice(index, 1);
        if (selectedSeries.length > 0) {
          const startNum = root.value.series.find((item) => item.series === selectedSeries[0]).currentNumber + 1;
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
    async function onSetAllClassify() {
      await checkSdkStatus();
      isShowClassifyModal.value = false;
      list.map((item) => {
        item.classify = JSON.parse(JSON.stringify(classify));
        item.isShowClassifyModal = false;
      });
    }
    async function onSeriesConfirm() {
      await checkSdkStatus();
      isShowSeriesModal.value = false;
      if (selectedSeries.length > 0) {
        const item = root.value.series.find((item2) => item2.series === selectedSeries[0]);
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
    }
    async function startBacth() {
      await checkSdkStatus();
      if (list.length <= 0)
        return;
      const loading = ElLoading.service();
      let currentSeriesItem = void 0;
      if (selectedSeries.length > 0) {
        currentSeriesItem = root.value.series.find((item) => item.series === selectedSeries[0]);
        if (currentSeriesItem && currentSeriesItem.maxNumber < createCount.value) {
          ElMessage.error(i18n.t("overSeriesNum"));
          loading.close();
          return;
        }
      }
      let isReady = true;
      let i = 0;
      if (currentIndex.value !== null) {
        i = currentIndex.value;
      }
      if (!isBreak.value) {
        for (let i2 = 1; i2 < createCount.value; i2++) {
          list.push({ ...list[0], index: i2 + list[0].index });
        }
        for (; i < list.length; i++) {
          if (!list[i].cover) {
            ElMessage.error(`${i + 1}: ${i18n.t("uploadcover")}`);
            isReady = false;
            loading.close();
            break;
          }
          if (!list[i].originalFile) {
            ElMessage.error(`${i + 1}: ${i18n.t("uploadTips")}`);
            isReady = false;
            loading.close();
            break;
          }
          if (list[i].name === "") {
            ElMessage.error(`${i + 1}: ${i18n.t("nameplac")}`);
            isReady = false;
            loading.close();
            break;
          }
          if (list[i].intro === "") {
            ElMessage.error(`${i + 1}: ${i18n.t("drscplac")}`);
            isReady = false;
            loading.close();
            break;
          }
          paramsList.push({
            receiverAddress: store.state.userInfo.address,
            nftname: list[i].name,
            nftdesc: list[i].intro,
            nfticon: {
              fileType: list[i].cover.data_type,
              fileName: list[i].cover.name,
              data: list[i].cover.hexData
            },
            nftwebsite: "",
            nftissuerName: store.state.userInfo.name,
            content: {
              nftType: "1",
              classifyList: JSON.stringify(list[i].classify),
              originalFileTxid: {
                fileType: list[i].originalFile.data_type,
                fileName: list[i].originalFile.name,
                data: list[i].originalFile.hexData
              },
              contentTxId: ""
            },
            codeHash: currentSeriesItem ? currentSeriesItem.codeHash : void 0,
            genesis: currentSeriesItem ? currentSeriesItem.genesis : void 0,
            genesisTxId: currentSeriesItem ? currentSeriesItem.genesisTxId : void 0,
            sensibleId: currentSeriesItem ? currentSeriesItem.sensibleId : void 0
          });
        }
      }
      if (!isReady)
        return;
      isCreated.value = true;
      loading.close();
      isShowResult.value = true;
      if (currentIndex.value !== null) {
        i = currentIndex.value;
      } else {
        i = 0;
      }
      for (; i < paramsList.length; i++) {
        try {
          const res = await store.state.sdk?.createNFT({
            ...paramsList[i]
          }).catch(() => {
            isBreak.value = true;
            ElMessage.error(i18n.t("onLineFail"));
            return;
          });
          if (res && typeof res !== "number") {
            const response = await CreateNft({
              nftName: paramsList[i].nftname,
              intro: paramsList[i].nftdesc,
              type: paramsList[i].content.nftType,
              seriesName: selectedSeries[0],
              tx: res.txId,
              classify: paramsList[i].content.classifyList,
              fileUrl: "test",
              coverUrl: "test",
              tokenId: res.codehash + res.genesisId + res.tokenIndex,
              nftId: res.txId,
              codeHash: res.codehash,
              genesis: res.genesisId,
              genesisTxId: res.genesisTxid,
              tokenIndex: res.tokenIndex
            });
            if (response.code === NftApiCode.success) {
              list[i].codehash = res.codehash;
              list[i].genesis = res.genesisId;
              list[i].tokenIndex = res.tokenIndex;
              ElMessage.success(`${selectedSeries.length > 0 ? list[i].index : list[i].name}: ${i18n.t("castingsuccess")}`);
              await store.state.sdk?.checkNftTxIdStatus(res.sendMoneyTx).catch(() => ElMessage.error(i18n.t("networkTimeout")));
            } else {
              isBreak.value = true;
              isShowResult.value = false;
              ElMessage.error(i18n.t("reportFail"));
              return;
            }
          } else {
            isBreak.value = true;
            isShowResult.value = false;
            ElMessage.error(i18n.t("onLineFail"));
            return;
          }
        } catch {
          isBreak.value = true;
          isShowResult.value = false;
          return;
        }
        currentIndex.value = i + 1;
      }
      paramsList.length = 0;
      isBreak.value = false;
      currentIndex.value = null;
      isShowResult.value = false;
    }
    async function resetBacth() {
      await root.value.getSeries();
      list.length = 0;
      isCreated.value = false;
    }
    if (store.state.userInfo) {
      setUserCreatCard();
    } else {
      store.watch((state) => state.userInfo, () => {
        if (store.state.userInfo)
          setUserCreatCard();
      });
    }
    if (!store.state.nftToken) {
      store.watch((state) => state.nftToken, () => {
        if (store.state.nftToken)
          root.value.getSeries();
      });
    }
    return (_ctx, _cache) => {
      const _component_ElSwitch = ElSwitch;
      const _component_ElImage = ElImage;
      const _component_router_link = resolveComponent("router-link");
      const _component_ElProgress = ElProgress;
      const _component_ElDialog = ElDialog;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(InnerPageHeader, {
          title: _ctx.$t("batchCreate"),
          intro: _ctx.$t("batchCreateDrsc"),
          "is-show-search": false
        }, null, 8, ["title", "intro"]),
        createBaseVNode("div", _hoisted_1, [
          createCommentVNode(" \u9009\u62E9\u7CFB\u5217 "),
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
                    onConfirm: onSeriesConfirm,
                    ref_key: "root",
                    ref: root
                  }, null, 8, ["isShowSeriesModal", "selectedSeries"])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", {
                class: "input-item flex flex-align-center",
                onClick: _cache[2] || (_cache[2] = ($event) => isSameClassify.value ? isShowClassifyModal.value = true : isShowClassifyModal.value = false)
              }, [
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", {
                    class: "key flex1 flex flex-align-center",
                    onClick: withModifiers(onChangeSameClassify, ["stop"])
                  }, [
                    createBaseVNode("span", _hoisted_13, toDisplayString(_ctx.$t("sameClassify")) + ":", 1),
                    createVNode(_component_ElSwitch, {
                      modelValue: isSameClassify.value,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isSameClassify.value = $event)
                    }, null, 8, ["modelValue"])
                  ], 8, _hoisted_12),
                  createBaseVNode("div", _hoisted_14, [
                    unref(classify).length > 0 ? (openBlock(), createElementBlock("span", _hoisted_15, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(classify), (_item, index) => {
                        return openBlock(), createElementBlock(Fragment, { key: _item }, [
                          createTextVNode(toDisplayString(_ctx.$t(_item)), 1),
                          index !== unref(classify).length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            _hoisted_16
                          ], 2112)) : createCommentVNode("v-if", true)
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
                    list: unref(store).state.classifyList,
                    selecteds: unref(classify)
                  }, null, 8, ["title", "visible", "list", "selecteds"])
                ])
              ])
            ])
          ]),
          createCommentVNode(" \u6279\u91CF\u94F8\u9020\u5217\u8868 "),
          createBaseVNode("div", _hoisted_19, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(list), (item, index) => {
              return openBlock(), createElementBlock("div", {
                class: "batch-create-item",
                key: index,
                id: "batchItem" + index
              }, [
                createBaseVNode("div", _hoisted_21, [
                  createBaseVNode("div", _hoisted_22, [
                    createBaseVNode("div", _hoisted_23, [
                      item.cover ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                        createVNode(_component_ElImage, {
                          class: "cover",
                          fit: "cover",
                          src: item.cover.base64Data,
                          "preview-src-list": [item.cover.base64Data],
                          "append-to-body": true
                        }, null, 8, ["src", "preview-src-list"]),
                        createBaseVNode("a", {
                          class: "close",
                          onClick: ($event) => removeCover(index)
                        }, toDisplayString(_ctx.$t("delete")), 9, _hoisted_24)
                      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createBaseVNode("div", null, [
                          createBaseVNode("img", {
                            class: "icon",
                            src: unref(UploadIcon)
                          }, null, 8, _hoisted_25),
                          createBaseVNode("div", _hoisted_26, toDisplayString(_ctx.$t("uploadcover")), 1)
                        ]),
                        createBaseVNode("input", {
                          type: "file",
                          accept: "image/*",
                          "data-index": index,
                          onChange: coverFileInputChage
                        }, null, 40, _hoisted_27)
                      ], 64))
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_28, [
                  !item.genesis ? (openBlock(), createElementBlock("input", {
                    key: 0,
                    type: "file",
                    placeholder: _ctx.$t("nftoriginal"),
                    "data-index": index,
                    onChange: originalFileInputChage
                  }, null, 40, _hoisted_29)) : createCommentVNode("v-if", true),
                  item.originalFile ? (openBlock(), createElementBlock("div", _hoisted_30, toDisplayString(item.originalFile.raw?.name), 1)) : (openBlock(), createElementBlock("div", _hoisted_31, toDisplayString(_ctx.$t("nftoriginal")), 1))
                ]),
                createBaseVNode("div", _hoisted_32, [
                  withDirectives(createBaseVNode("input", {
                    type: "text",
                    readOnly: item.genesis,
                    "onUpdate:modelValue": ($event) => item.name = $event,
                    placeholder: _ctx.$t("nameplac")
                  }, null, 8, _hoisted_33), [
                    [vModelText, item.name]
                  ])
                ]),
                createBaseVNode("div", _hoisted_34, [
                  withDirectives(createBaseVNode("textarea", {
                    "onUpdate:modelValue": ($event) => item.intro = $event,
                    readOnly: item.genesis,
                    placeholder: _ctx.$t("drscplac")
                  }, null, 8, _hoisted_35), [
                    [vModelText, item.intro]
                  ])
                ]),
                createBaseVNode("div", {
                  class: "orginFile input-item",
                  onClick: ($event) => isSameClassify.value || item.genesis ? item.isShowClassifyModal = false : item.isShowClassifyModal = true
                }, [
                  item.classify.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_37, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(item.classify, (_item, index2) => {
                      return openBlock(), createElementBlock(Fragment, { key: _item }, [
                        createTextVNode(toDisplayString(_ctx.$t(_item)), 1),
                        index2 !== item.classify.length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          _hoisted_38
                        ], 2112)) : createCommentVNode("v-if", true)
                      ], 64);
                    }), 128))
                  ])) : (openBlock(), createElementBlock("div", _hoisted_39, toDisplayString(_ctx.$t("choosetype")), 1)),
                  createVNode(PickerModel, {
                    name: "classify",
                    listKey: "classify",
                    title: _ctx.$t("choosetype"),
                    multiple: true,
                    disabled: "disabled",
                    visible: item.isShowClassifyModal,
                    onConfirm: ($event) => item.isShowClassifyModal = false,
                    list: unref(store).state.classifyList,
                    selecteds: item.classify
                  }, null, 8, ["title", "visible", "onConfirm", "list", "selecteds"])
                ], 8, _hoisted_36),
                unref(selectedSeries).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_40, [
                  withDirectives(createBaseVNode("input", {
                    type: "number",
                    readOnly: true,
                    disabled: true,
                    "onUpdate:modelValue": ($event) => item.index = $event,
                    placeholder: _ctx.$t("indexNumber")
                  }, null, 8, _hoisted_41), [
                    [vModelText, item.index]
                  ])
                ])) : createCommentVNode("v-if", true),
                !item.genesis ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: "btn btn-block btn-default",
                  onClick: ($event) => removeItem(index)
                }, toDisplayString(_ctx.$t("delete")), 9, _hoisted_42)) : (openBlock(), createBlock(_component_router_link, {
                  key: 2,
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
              ], 8, _hoisted_20);
            }), 128)),
            createCommentVNode(" \u6DFB\u52A0 "),
            !isCreated.value ? (openBlock(), createElementBlock("div", _hoisted_43, [
              createBaseVNode("div", _hoisted_44, [
                createBaseVNode("div", _hoisted_45, [
                  createBaseVNode("div", _hoisted_46, [
                    createBaseVNode("template", null, [
                      createBaseVNode("div", null, [
                        createBaseVNode("img", {
                          class: "icon",
                          src: unref(UploadIcon)
                        }, null, 8, _hoisted_47),
                        createBaseVNode("div", _hoisted_48, toDisplayString(_ctx.$t("uploadcover")), 1)
                      ]),
                      _hoisted_49
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_50, [
                createBaseVNode("div", _hoisted_51, toDisplayString(_ctx.$t("nftoriginal")), 1)
              ]),
              createBaseVNode("div", _hoisted_52, [
                createBaseVNode("input", {
                  type: "text",
                  placeholder: _ctx.$t("nameplac")
                }, null, 8, _hoisted_53)
              ]),
              createBaseVNode("div", _hoisted_54, [
                createBaseVNode("textarea", {
                  placeholder: _ctx.$t("drscplac")
                }, null, 8, _hoisted_55)
              ]),
              createBaseVNode("div", _hoisted_56, [
                createBaseVNode("div", _hoisted_57, toDisplayString(_ctx.$t("choosetype")), 1)
              ]),
              unref(selectedSeries).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_58, _hoisted_60)) : createCommentVNode("v-if", true),
              createBaseVNode("div", _hoisted_61, toDisplayString(_ctx.$t("delete")), 1),
              createBaseVNode("div", _hoisted_62, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => createCount.value = $event)
                }, null, 512), [
                  [vModelText, createCount.value]
                ])
              ])
            ])) : createCommentVNode("v-if", true)
          ]),
          createBaseVNode("div", {
            class: "btn btn-block",
            onClick: resetBacth
          }, toDisplayString(_ctx.$t("resetBatchCreate")), 1),
          createBaseVNode("div", {
            class: "btn btn-block",
            onClick: startBacth
          }, toDisplayString(isBreak.value ? _ctx.$t("continue") : _ctx.$t("startBatchCreate")), 1)
        ]),
        createVNode(_component_ElDialog, {
          modelValue: isShowResult.value,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isShowResult.value = $event),
          title: _ctx.$t("batchCreateIniting"),
          "close-on-click-modal": false,
          "close-on-press-escape": false,
          "show-close": false
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_63, [
              createBaseVNode("div", _hoisted_64, toDisplayString(_ctx.$t("batchCreateTips")), 1),
              createBaseVNode("div", _hoisted_65, [
                createBaseVNode("div", _hoisted_66, [
                  createTextVNode(toDisplayString(_ctx.$t("batchCreatNum")) + ":", 1),
                  createBaseVNode("span", null, toDisplayString(unref(list).length), 1),
                  createTextVNode(" " + toDisplayString(_ctx.$t("indivual")) + ", " + toDisplayString(_ctx.$t("beSuccess")) + ":", 1),
                  createBaseVNode("span", null, toDisplayString(unref(successNum)), 1),
                  createTextVNode(" " + toDisplayString(_ctx.$t("indivual")), 1)
                ]),
                createVNode(_component_ElProgress, {
                  percentage: unref(successNum) / unref(list).length * 100,
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
var BatchTest = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7033d422"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/BatchTest.vue"]]);

export { BatchTest as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmF0Y2hUZXN0LmFhYTUwNmRjLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
