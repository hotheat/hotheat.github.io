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
import { _ as _export_sfc, d as defineComponent, r as reactive, u as useI18n, e as ref, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, P as createTextVNode, F as Fragment, i as renderList, g as unref, j as createCommentVNode, y as withDirectives, z as vModelText, h as createVNode, ac as ElImage, p as pushScopeId, b as popScopeId, k as useStore, ad as tranfromImgFile, S as ElMessage, ae as GetTxData, T as checkSdkStatus, af as checkUserCanIssueNft, a2 as ElLoading, a8 as confirmToSendMetaData, aa as NFTApiGetNFTDetail, ag as router, x as normalizeClass } from "./index.1063289c.js";
import { _ as _imports_3 } from "./icon_casting.a29ffd9e.js";
import { P as PickerModel, C as ChooseSeriesModal, _ as _imports_0 } from "./ChooseSeriesModal.ef2eaeaa.js";
/* empty css                          *//* empty css                     */import { c as classifyList, n as nftTypes, a as canCreateCardClassifyListMetaids, b as canCreateRightsClassifyListMetaids } from "./config.c3ac3733.js";
var _imports_1 = "/assets/file_upload.975ceb21.svg";
var Create_scss_vue_type_style_index_0_src_4ee8c5aa_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-4ee8c5aa"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "create" };
const _hoisted_2 = { class: "create-header flex flex-align-center" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "icon",
  src: _imports_3
}, null, -1));
const _hoisted_4 = { class: "title flex1 flex flex-align-center" };
const _hoisted_5 = { class: "flex1" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "el-icon-arrow-right" }, null, -1));
const _hoisted_7 = { class: "cont-warp" };
const _hoisted_8 = {
  key: 0,
  class: "tags"
};
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "tips" };
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_16 = {
  key: 1,
  class: "create-form-item"
};
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "title" }, "TXID", -1));
const _hoisted_18 = { class: "cont" };
const _hoisted_19 = { class: "input-warp flex flex-align-center" };
const _hoisted_20 = { class: "input-value flex1" };
const _hoisted_21 = ["placeholder"];
const _hoisted_22 = {
  key: 2,
  class: "create-form-item"
};
const _hoisted_23 = { class: "title" };
const _hoisted_24 = { class: "cont" };
const _hoisted_25 = { class: "input-warp flex flex-align-center" };
const _hoisted_26 = { class: "input-value flex1" };
const _hoisted_27 = { key: 0 };
const _hoisted_28 = {
  key: 1,
  class: "placeholder"
};
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", { src: _imports_1 }, null, -1));
const _hoisted_30 = { class: "create-form-item" };
const _hoisted_31 = { class: "title" };
const _hoisted_32 = { class: "cont" };
const _hoisted_33 = { class: "upload-warp" };
const _hoisted_34 = { class: "upload" };
const _hoisted_35 = { class: "add flex flex-align-center flex-pack-center" };
const _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "icon",
  src: _imports_0
}, null, -1));
const _hoisted_37 = { class: "label" };
const _hoisted_38 = { class: "input-item name" };
const _hoisted_39 = ["placeholder"];
const _hoisted_40 = { class: "input-item drsc" };
const _hoisted_41 = ["placeholder"];
const _hoisted_42 = { class: "select-warp flex flex-align-center" };
const _hoisted_43 = { class: "key flex1" };
const _hoisted_44 = { class: "value" };
const _hoisted_45 = {
  key: 1,
  class: "placeholder"
};
const _hoisted_46 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "el-icon-arrow-right" }, null, -1));
const _hoisted_47 = { class: "create-form-item seices" };
const _hoisted_48 = { class: "title flex flex-align-center" };
const _hoisted_49 = { class: "flex1" };
const _hoisted_50 = { class: "cont" };
const _hoisted_51 = { class: "select-warp flex flex-align-center" };
const _hoisted_52 = { class: "key flex1" };
const _hoisted_53 = { class: "value" };
const _hoisted_54 = { key: 0 };
const _hoisted_55 = {
  key: 1,
  class: "placeholder"
};
const _hoisted_56 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "el-icon-arrow-right" }, null, -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const classList = reactive(classifyList);
    const _nftTypes = reactive(nftTypes);
    const i18n = useI18n();
    const store = useStore();
    const seriesModal = ref();
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
        const _index = canCreateRightsClassifyListMetaids.findIndex((item) => {
          var _a;
          return item === ((_a = store.state.userInfo) == null ? void 0 : _a.metaId);
        });
        if (_index !== -1) {
          const rightsIndex = classList.findIndex((item) => item.classify === "rights");
          classList[rightsIndex].disabled = false;
        }
      }
    }
    if (store.state.userInfo) {
      setUserCreatCard();
    } else {
      store.watch((state) => state.userInfo, () => {
        setUserCreatCard();
      });
    }
    const nft = reactive({
      nftName: "",
      type: "1",
      fileUrl: "",
      coverUrl: "",
      intro: "",
      tx: "",
      classify: []
    });
    const isShowClassifyModal = ref(false);
    const createTypeIndex = ref(0);
    function changeCreateType() {
      createTypeIndex.value = createTypeIndex.value === 0 ? 1 : 0;
    }
    let originalFile = reactive({
      base64Data: "",
      BufferData: "",
      hexData: "",
      name: "",
      data_type: "",
      raw: null
    });
    let coverFile = reactive({
      base64Data: "",
      BufferData: "",
      hexData: "",
      name: "",
      data_type: "",
      raw: null
    });
    function originalFileInputChage(e) {
      return __async(this, null, function* () {
        const input = e.target;
        let files = input.files;
        if (files) {
          const res = yield tranfromImgFile(files[0]);
          if (res) {
            originalFile.name = res.name;
            originalFile.base64Data = res.base64Data;
            originalFile.hexData = res.hexData;
            originalFile.raw = res.raw;
            originalFile.data_type = res.data_type;
          }
        }
      });
    }
    function coverFileInputChage(e) {
      return __async(this, null, function* () {
        const input = e.target;
        let files = input.files;
        if (files) {
          const res = yield tranfromImgFile(files[0]);
          if (res) {
            coverFile.name = res.name;
            coverFile.raw = res.raw;
            coverFile.base64Data = res.base64Data;
            coverFile.hexData = res.hexData;
            coverFile.data_type = res.data_type;
          }
        }
      });
    }
    const selectedSeries = reactive([]);
    const isShowSeriesModal = ref(false);
    function openSeriesModal() {
      isShowSeriesModal.value = true;
      isShowClassifyModal.value = false;
    }
    function openClassifyModal() {
      isShowClassifyModal.value = true;
      isShowSeriesModal.value = false;
    }
    function removeCover() {
      coverFile.name = "";
      coverFile.base64Data = "";
      coverFile.hexData = "";
      coverFile.name = "";
    }
    function changeTag(index) {
      if (createTypeIndex.value === 1)
        return;
      const type = nftTypes[index];
      if (type.disabled)
        return;
      const value = type.value;
      if (nft.type === value)
        return;
      nft.type = value;
    }
    function checkTxIdStatus() {
      return __async(this, null, function* () {
        const result = yield checkTxId();
        if (result.status === 1) {
          nft.tx = "";
          ElMessage.error(i18n.t("txidToNftFaile"));
        } else if (result.status === 2) {
          nft.tx = "";
          ElMessage.error(i18n.t("txIdNotOwner"));
        } else if (result.status === 4) {
          nft.tx = "";
          ElMessage.error(i18n.t("notRightTxId"));
        } else if (result.status === 3) {
          if (result.data) {
            if (result.data.parentNodeName === "MetaFile") {
              nft.type = "1";
            } else if (result.data.parentNodeName === "MetaAccessContent") {
              nft.type = "3";
              nft.nftName = result.data.data.title;
              nft.intro = result.data.data.artMark;
              coverFile = result.data.data.artCover;
            } else {
              nft.tx = "";
              ElMessage.error(i18n.t("txidToNftFaile"));
            }
          }
        }
      });
    }
    function checkTxId() {
      return __async(this, null, function* () {
        return new Promise((resolve) => __async(this, null, function* () {
          var _a;
          const response = yield GetTxData(nft.tx);
          if (response.code == 200 && response.result.data.length > 0) {
            const data = response.result.data[0];
            if (data.rootTxId === ((_a = store.state.userInfo) == null ? void 0 : _a.metaId)) {
              if (nft.type === "3" && createTypeIndex.value !== 1) {
                if (data.parentNodeName !== "MetaAccessContent") {
                  resolve({
                    status: 4,
                    data
                  });
                } else {
                  resolve({
                    status: 3,
                    data
                  });
                }
              } else {
                resolve({
                  status: 3,
                  data
                });
              }
            } else {
              resolve({
                status: 2,
                data
              });
            }
          } else {
            resolve({
              status: 1
            });
          }
        }));
      });
    }
    function createNft() {
      return __async(this, null, function* () {
        var _a, _b;
        yield checkSdkStatus();
        const result = yield checkUserCanIssueNft();
        if (!result)
          return;
        if (nft.type === "") {
          ElMessage.warning(i18n.t("nftTypeTips"));
          return;
        }
        if (createTypeIndex.value == 0) {
          if (originalFile.name === "") {
            ElMessage.warning(i18n.t("uploadTips"));
            return;
          }
        } else {
          if (nft.tx === "") {
            ElMessage.warning(i18n.t("txIdTips"));
            return;
          }
        }
        if (coverFile.name === "") {
          ElMessage.warning(i18n.t("uploadcover"));
          return;
        }
        if (nft.nftName.replace(/\s*/g, "") === "") {
          ElMessage.warning(i18n.t("nameplac"));
          return;
        }
        if (nft.intro === "") {
          ElMessage.warning(i18n.t("drscplac"));
          return;
        }
        if (nft.classify.length <= 0) {
          ElMessage.warning(i18n.t("chooseserices"));
          return;
        }
        const loading = ElLoading.service({
          lock: true,
          text: "Loading",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)",
          customClass: "full-loading"
        });
        try {
          const series = seriesModal.value.series;
          let seriesIndex = -1;
          if (selectedSeries[0]) {
            seriesIndex = series.findIndex((item) => item.name === selectedSeries[0]);
          }
          debugger;
          const params = {
            receiverAddress: store.state.userInfo.address,
            nftname: nft.nftName,
            nftdesc: nft.intro,
            nfticon: {
              fileType: coverFile.data_type,
              fileName: coverFile.name,
              data: coverFile.hexData
            },
            nftwebsite: "",
            nftissuerName: store.state.userInfo.name,
            content: {
              nftType: nft.type,
              classifyList: JSON.stringify(nft.classify),
              originalFileTxid: {
                fileType: originalFile.data_type,
                fileName: originalFile.name,
                data: originalFile.hexData
              },
              contentTxId: nft.tx
            },
            codeHash: seriesIndex !== -1 ? series[seriesIndex].codeHash : void 0,
            genesis: seriesIndex !== -1 ? series[seriesIndex].genesis : void 0,
            genesisTxId: seriesIndex !== -1 ? series[seriesIndex].genesisTxId : void 0,
            sensibleId: seriesIndex !== -1 ? series[seriesIndex].sensibleId : void 0
          };
          const useAmount = yield yield (_a = store.state.sdk) == null ? void 0 : _a.createNFT(__spreadValues({
            checkOnly: true
          }, params));
          if (typeof useAmount === "number") {
            const result2 = yield confirmToSendMetaData(useAmount);
            if (result2) {
              const res = yield (_b = store.state.sdk) == null ? void 0 : _b.createNFT(params);
              if (res && typeof res !== "number") {
                if (selectedSeries[0] && seriesIndex !== -1) {
                  seriesModal.value.upgradeCurrentSeriesNumber();
                }
                yield getNftDetailCycle({
                  tokenIndex: res.tokenIndex,
                  genesis: res.genesisId,
                  codehash: res.codehash
                });
                if (loading)
                  loading.close();
                ElMessage.success(i18n.t("castingsuccess"));
                router.replace({
                  name: "nftSuccess",
                  params: {
                    genesisId: res.genesisId,
                    tokenIndex: res.tokenIndex,
                    codehash: res.codehash
                  },
                  query: {
                    type: "created",
                    txId: res.txId
                  }
                });
              }
            }
          }
        } catch (error) {
          debugger;
          if (loading)
            loading.close();
          new Error(JSON.stringify(error));
        }
      });
    }
    function getNftDetailCycle(params, curretNum = 0, parentResolve) {
      return new Promise((resolve) => __async(this, null, function* () {
        curretNum++;
        try {
          const res = yield NFTApiGetNFTDetail(params);
          if (res && res.code === 0 && res.data.results.items.length > 0) {
            if (parentResolve)
              parentResolve();
            else
              resolve();
          } else {
            new Error("get nft detail fail");
          }
        } catch (error) {
          debugger;
          if (curretNum < 10) {
            setTimeout(() => {
              getNftDetailCycle(params, curretNum, parentResolve ? parentResolve : resolve);
            }, 1e3);
          } else {
            if (parentResolve)
              parentResolve();
            else
              resolve();
          }
        }
      }));
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("span", _hoisted_5, toDisplayString(_ctx.$t("createNft")), 1),
            createBaseVNode("a", { onClick: changeCreateType }, [
              createTextVNode(toDisplayString(createTypeIndex.value === 0 ? _ctx.$t("createbytx") : _ctx.$t("createbylocal")) + " ", 1),
              _hoisted_6
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          createTypeIndex.value !== 1 ? (openBlock(), createElementBlock("div", _hoisted_8, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(_nftTypes), (type, index) => {
              return openBlock(), createElementBlock(Fragment, null, [
                type.disabled ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  onClick: _cache[0] || (_cache[0] = ($event) => unref(ElMessage).info(_ctx.$t("stayTuned")))
                }, toDisplayString(_ctx.$t(type.key)), 1)) : (openBlock(), createElementBlock("a", {
                  key: 1,
                  class: normalizeClass({ active: type.value === unref(nft).type, disabled: type.disabled }),
                  onClick: ($event) => changeTag(index)
                }, toDisplayString(_ctx.$t(type.key)), 11, _hoisted_9))
              ], 64);
            }), 256))
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_10, [
            createTypeIndex.value === 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(_ctx.$t("nftTxidTips")) + " ", 1),
              _hoisted_11
            ], 64)) : createCommentVNode("", true),
            unref(nft).type === "1" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(_ctx.$t("nftImageDrsc")) + " ", 1),
              _hoisted_12
            ], 64)) : createCommentVNode("", true),
            unref(nft).type === "3" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              createTextVNode(toDisplayString(_ctx.$t("nftCopyrightDrsc")) + " ", 1),
              _hoisted_13,
              createTextVNode(" " + toDisplayString(_ctx.$t("nftCopyrightDrsc2")) + " ", 1),
              _hoisted_14
            ], 64)) : createCommentVNode("", true),
            createTextVNode(" " + toDisplayString(_ctx.$t("createtips2")) + " ", 1),
            _hoisted_15,
            createTextVNode(" " + toDisplayString(_ctx.$t("createtips3")), 1)
          ]),
          createTypeIndex.value === 1 || unref(nft).type === "3" ? (openBlock(), createElementBlock("div", _hoisted_16, [
            _hoisted_17,
            createBaseVNode("div", _hoisted_18, [
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("div", _hoisted_20, [
                  withDirectives(createBaseVNode("input", {
                    class: "flex1",
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(nft).tx = $event),
                    type: "text",
                    onBlur: checkTxIdStatus,
                    placeholder: _ctx.$t("txIdTips")
                  }, null, 40, _hoisted_21), [
                    [vModelText, unref(nft).tx]
                  ])
                ])
              ])
            ])
          ])) : createTypeIndex.value === 0 && unref(nft).type !== "3" ? (openBlock(), createElementBlock("div", _hoisted_22, [
            createBaseVNode("div", _hoisted_23, toDisplayString(_ctx.$t("nftoriginal")), 1),
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("div", _hoisted_25, [
                createBaseVNode("div", _hoisted_26, [
                  unref(originalFile) && unref(originalFile).name !== "" ? (openBlock(), createElementBlock("span", _hoisted_27, toDisplayString((_a = unref(originalFile)) == null ? void 0 : _a.name), 1)) : (openBlock(), createElementBlock("span", _hoisted_28, toDisplayString(_ctx.$t("uploadTips")), 1))
                ]),
                _hoisted_29,
                createBaseVNode("input", {
                  class: "flex1",
                  accept: "image/*",
                  type: "file",
                  onChange: originalFileInputChage
                }, null, 32)
              ])
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_30, [
            createBaseVNode("div", _hoisted_31, toDisplayString(_ctx.$t("nftbase")), 1),
            createBaseVNode("div", _hoisted_32, [
              createBaseVNode("div", _hoisted_33, [
                createBaseVNode("div", _hoisted_34, [
                  createBaseVNode("div", _hoisted_35, [
                    unref(coverFile) && unref(coverFile).name !== "" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createVNode(unref(ElImage), {
                        class: "cover",
                        fit: "cover",
                        src: unref(coverFile).base64Data,
                        "preview-src-list": [unref(coverFile).base64Data]
                      }, null, 8, ["src", "preview-src-list"]),
                      createBaseVNode("a", {
                        class: "close",
                        onClick: removeCover
                      }, toDisplayString(_ctx.$t("delete")), 1)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createBaseVNode("div", null, [
                        _hoisted_36,
                        createBaseVNode("div", _hoisted_37, toDisplayString(_ctx.$t("uploadcover")), 1)
                      ]),
                      createBaseVNode("input", {
                        type: "file",
                        accept: "image/*",
                        onChange: coverFileInputChage
                      }, null, 32)
                    ], 64))
                  ])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_38, [
            withDirectives(createBaseVNode("input", {
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(nft).nftName = $event),
              type: "text",
              placeholder: _ctx.$t("nameplac")
            }, null, 8, _hoisted_39), [
              [vModelText, unref(nft).nftName]
            ])
          ]),
          createBaseVNode("div", _hoisted_40, [
            withDirectives(createBaseVNode("textarea", {
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(nft).intro = $event),
              placeholder: _ctx.$t("drscplac")
            }, null, 8, _hoisted_41), [
              [vModelText, unref(nft).intro]
            ])
          ]),
          createBaseVNode("div", {
            class: "input-item type flex flex-align-center",
            onClick: openClassifyModal
          }, [
            createBaseVNode("div", _hoisted_42, [
              createBaseVNode("div", _hoisted_43, toDisplayString(_ctx.$t("choosetype")), 1),
              createBaseVNode("div", _hoisted_44, [
                unref(nft).classify.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(nft).classify, (item) => {
                  return openBlock(), createElementBlock("span", {
                    class: "classify",
                    key: item
                  }, toDisplayString(_ctx.$t(item)), 1);
                }), 128)) : (openBlock(), createElementBlock("span", _hoisted_45, toDisplayString(_ctx.$t("choose")), 1)),
                _hoisted_46
              ]),
              createVNode(PickerModel, {
                name: "classify",
                listKey: "classify",
                title: _ctx.$t("choosetype"),
                multiple: true,
                disabled: "disabled",
                visible: isShowClassifyModal.value,
                onConfirm: _cache[4] || (_cache[4] = ($event) => isShowClassifyModal.value = false),
                list: unref(classList),
                selecteds: unref(nft).classify
              }, null, 8, ["title", "visible", "list", "selecteds"])
            ])
          ]),
          createBaseVNode("div", _hoisted_47, [
            createBaseVNode("div", _hoisted_48, [
              createBaseVNode("span", _hoisted_49, toDisplayString(_ctx.$t("isserices")), 1)
            ]),
            createBaseVNode("div", _hoisted_50, [
              createBaseVNode("div", {
                class: "input-item flex flex-align-center",
                onClick: openSeriesModal
              }, [
                createBaseVNode("div", _hoisted_51, [
                  createBaseVNode("div", _hoisted_52, toDisplayString(_ctx.$t("chooseserices")), 1),
                  createBaseVNode("div", _hoisted_53, [
                    unref(selectedSeries).length > 0 ? (openBlock(), createElementBlock("span", _hoisted_54, toDisplayString(unref(selectedSeries)[0]), 1)) : (openBlock(), createElementBlock("span", _hoisted_55, toDisplayString(_ctx.$t("choose")), 1)),
                    _hoisted_56
                  ]),
                  createVNode(ChooseSeriesModal, {
                    isShowSeriesModal: isShowSeriesModal.value,
                    selectedSeries: unref(selectedSeries),
                    onConfirm: _cache[5] || (_cache[5] = ($event) => isShowSeriesModal.value = false),
                    ref_key: "seriesModal",
                    ref: seriesModal
                  }, null, 8, ["isShowSeriesModal", "selectedSeries"])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", {
            class: "btn btn-block",
            onClick: createNft
          }, toDisplayString(_ctx.$t("confirmcreate")), 1)
        ])
      ]);
    };
  }
});
var Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4ee8c5aa"]]);
export { Create as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlLjEzODhhZDJkLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
