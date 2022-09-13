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
import { _ as _export_sfc, d as defineComponent, u as useI18n, W as useRoute, V as useRouter, e as ref, L as computed, r as reactive, o as openBlock, c as createElementBlock, h as createVNode, w as withCtx, a as createBaseVNode, g as unref, a4 as ElSkeletonItem, t as toDisplayString, x as normalizeClass, y as withDirectives, z as vModelText, j as createCommentVNode, au as ElDatePicker, av as ElDropdown, aw as ElDropdownMenu, F as Fragment, i as renderList, P as createTextVNode, a6 as ElSkeleton, p as pushScopeId, b as popScopeId, a7 as Decimal, a1 as getMyNftEligibility, a2 as ElLoading, U as store, a8 as confirmToSendMetaData, ax as SetDeadlineTime, S as ElMessage, l as createBlock, ay as ElDropdownItem } from "./index.1063289c.js";
import { _ as _imports_0 } from "./bannet_icon_ins.c0e9a236.js";
/* empty css                       *//* empty css                     *//* empty css                           */import { N as NftMsgCard } from "./NftMsgCard.1c1af026.js";
import { u as units, U as UnitName } from "./config.c3ac3733.js";
import { N as NFTDetail } from "./nftDetail.d498c8f0.js";
/* empty css                          */import "./Cert.4dc6bf7f.js";
import "./icon_cer.d2259267.js";
/* empty css                     */var _imports_1 = "/assets/list_icon_calendar.b3d08146.svg";
var Sale_scss_vue_type_style_index_0_src_088ec734_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-088ec734"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "create" };
const _hoisted_2 = { class: "create-header flex flex-align-center" };
const _hoisted_3 = { class: "title flex1 flex flex-align-center" };
const _hoisted_4 = { class: "flex1" };
const _hoisted_5 = { class: "tab flex flex-align-center flex-pack-center" };
const _hoisted_6 = { class: "cont-warp" };
const _hoisted_7 = { class: "nft-sale-set" };
const _hoisted_8 = { class: "form" };
const _hoisted_9 = { class: "form-title" };
const _hoisted_10 = { class: "form-item" };
const _hoisted_11 = { class: "form-item" };
const _hoisted_12 = { class: "form-item" };
const _hoisted_13 = { class: "create-header flex flex-align-center" };
const _hoisted_14 = { class: "title flex1 flex flex-align-center" };
const _hoisted_15 = { class: "flex1" };
const _hoisted_16 = { class: "tab flex flex-align-center flex-pack-center" };
const _hoisted_17 = { class: "cont-warp" };
const _hoisted_18 = { class: "nft-sale-set" };
const _hoisted_19 = { class: "form" };
const _hoisted_20 = { class: "form-title" };
const _hoisted_21 = {
  key: 0,
  class: "form-item"
};
const _hoisted_22 = { class: "cont flex flex-align-center" };
const _hoisted_23 = ["placeholder"];
const _hoisted_24 = {
  key: 1,
  class: "form-item"
};
const _hoisted_25 = { class: "cont flex flex-align-center" };
const _hoisted_26 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "icon",
  src: _imports_1
}, null, -1));
const _hoisted_27 = {
  key: 2,
  class: "form-item"
};
const _hoisted_28 = { class: "cont flex flex-align-center" };
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "icon",
  src: _imports_1
}, null, -1));
const _hoisted_30 = {
  key: 3,
  class: "form-item"
};
const _hoisted_31 = { class: "cont flex flex-align-center" };
const _hoisted_32 = ["placeholder"];
const _hoisted_33 = { class: "type" };
const _hoisted_34 = { class: "flex flex-align-center" };
const _hoisted_35 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "arrow" }, null, -1));
const _hoisted_36 = {
  key: 4,
  class: "form-item"
};
const _hoisted_37 = { class: "cont flex flex-align-center" };
const _hoisted_38 = ["placeholder"];
const _hoisted_39 = { class: "type" };
const _hoisted_40 = { class: "flex flex-align-center" };
const _hoisted_41 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "arrow" }, null, -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const i18n = useI18n();
    const route = useRoute();
    const router = useRouter();
    const unitIndex = ref(0);
    const isShowSkeleton = ref(true);
    const tabIndex = ref(0);
    const auctionPrice = ref("");
    ref("");
    const auctionTime = ref("");
    const minPrice = computed(() => {
      let min = 1e-4;
      if (units[unitIndex.value].unit === UnitName.BSV) {
        min = 1e-6;
      } else {
        min = 1e4;
      }
      return min;
    });
    const minAuctionPrice = computed(() => {
      let min = 0.01;
      if (units[unitIndex.value].unit === UnitName.BSV) {
        min = 0.01;
      } else {
        min = 1e6;
      }
      return min;
    });
    const nft = reactive({
      val: {}
    });
    const saleTime = ref("");
    const saleAmount = ref("");
    const saleIntro = ref("");
    function getDetail() {
      return new Promise((resolve) => __async(this, null, function* () {
        const _nft = yield NFTDetail(typeof route.params.genesisId === "string" ? route.params.genesisId : "", typeof route.params.codehash === "string" ? route.params.codehash : "", typeof route.params.tokenIndex === "string" ? route.params.tokenIndex : "").catch(() => {
        });
        if (_nft && typeof _nft !== "boolean") {
          nft.val = _nft;
          isShowSkeleton.value = false;
        }
        resolve();
      }));
    }
    if (route.params.genesisId && route.params.codehash && route.params.tokenIndex) {
      getDetail();
    }
    function saleAmountChange() {
      if (new Decimal(saleAmount.value).toNumber() < minPrice.value) {
        saleAmount.value = minPrice.value.toString();
      }
    }
    function confirmSale() {
      return __async(this, null, function* () {
        var _a, _b, _c, _d, _e, _f;
        if (tabIndex.value === 0) {
          if (saleTime.value === "" || saleAmount.value === "" || saleIntro.value === "")
            return;
          const result = yield getMyNftEligibility(nft.val.foundryMetaId);
          if (!result)
            return;
          const loading = ElLoading.service({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)",
            customClass: "full-loading"
          });
          try {
            const stasPrice = units[unitIndex.value].unit === "BSV" ? new Decimal(saleAmount.value).mul(Math.pow(10, 8)).toNumber() : new Decimal(saleAmount.value).toNumber();
            const params = {
              codehash: nft.val.codeHash,
              genesis: nft.val.genesis,
              tokenIndex: nft.val.tokenIndex,
              satoshisPrice: stasPrice,
              genesisTxid: nft.val.genesisTxId,
              sensibleId: nft.val.sensibleId,
              sellDesc: saleIntro.value
            };
            const useAmountRes = yield (_a = store.state.sdk) == null ? void 0 : _a.nftSell(__spreadValues({ checkOnly: true }, params));
            if (useAmountRes && useAmountRes.code === 200) {
              const useAmount = useAmountRes.data.amount;
              const result2 = yield confirmToSendMetaData(useAmount);
              if (result2) {
                const res = yield (_b = store.state.sdk) == null ? void 0 : _b.nftSell(params);
                if ((res == null ? void 0 : res.code) === 200) {
                  yield SetDeadlineTime({
                    genesis: nft.val.genesis,
                    codeHash: nft.val.codeHash,
                    tokenIndex: nft.val.tokenIndex,
                    deadlineTime: new Date(saleTime.value).getTime()
                  }).catch(() => {
                    console.log("\u4E0A\u62A5\u65F6\u95F4\u9519\u8BEF");
                  });
                  yield (_c = store.state.sdk) == null ? void 0 : _c.checkNftTxIdStatus(res.data.sellTxId);
                  yield (_d = store.state.sdk) == null ? void 0 : _d.checkNftTxIdStatus(res.data.txid);
                  loading.close();
                  ElMessage.success(i18n.t("saleSuccess"));
                  router.replace({
                    name: "selfSale",
                    params: {
                      metaId: store.state.userInfo.metaId
                    }
                  });
                }
              }
            }
          } catch (error) {
            new Error(JSON.stringify(error));
            if (loading)
              loading.close();
          }
        } else if (tabIndex.value === 1) {
          if (store.state.sdk.isApp) {
            ElMessage.warning(i18n.t("appNotBid"));
            return;
          }
          if (auctionTime.value === "" || auctionPrice.value === "")
            return;
          const loading = ElLoading.service({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)",
            customClass: "full-loading"
          });
          try {
            let _auctionPrice;
            if (units[unitIndex.value].unit === UnitName.SATS) {
              _auctionPrice = auctionPrice.value;
            } else {
              _auctionPrice = new Decimal(auctionPrice.value).mul(Math.pow(10, 8)).toString();
            }
            const params = {
              nft: {
                codehash: nft.val.codeHash,
                genesis: nft.val.genesis,
                tokenIndex: nft.val.tokenIndex,
                genesisTxid: nft.val.genesisTxId,
                sensibleId: nft.val.sensibleId
              },
              startBsvPrice: new Decimal(_auctionPrice).toNumber(),
              endTimeStamp: new Date(auctionTime.value).getTime(),
              feeAddress: "19NeJJM6eEa3bruYnqkTA4Cp6VvdFGSepd",
              feeAmount: 1e3,
              useFeeb: 0.5
            };
            const res = yield (_e = store.state.sdk) == null ? void 0 : _e.nftStartAuction(__spreadProps(__spreadValues({}, params), {
              checkOnly: true
            }));
            if (res.code === 200) {
              const result = yield confirmToSendMetaData(res.data.amount);
              if (result) {
                const response = yield (_f = store.state.sdk) == null ? void 0 : _f.nftStartAuction(params);
                if (response && (response == null ? void 0 : response.code) === 200) {
                  setTimeout(() => {
                    ElMessage.success(i18n.t("createAuctionSuccess"));
                    loading.close();
                    router.replace({
                      name: "selfAuction",
                      params: {
                        metaId: store.state.userInfo.metaId
                      }
                    });
                  }, 2e3);
                }
              }
            }
          } catch (error) {
            if (error)
              ElMessage.error(JSON.stringify(error));
            if (loading)
              loading.close();
          }
        }
      });
    }
    const setDisabledDate = (time) => {
      const now = new Date().getTime() + 1e3 * 60 * 30;
      const max = now + 30 * 24 * 60 * 60 * 1e3;
      return new Date(time).getTime() < now || new Date(time).getTime() > max;
    };
    const setAuctionDisabledDate = (time) => {
      const now = new Date().getTime();
      const max = now + 1e3 * 60 * 60 * 24 * 7;
      return new Date(time).getTime() < now || new Date(time).getTime() > max;
    };
    function changeUnitIndex(index) {
      if (unitIndex.value === index)
        return;
      unitIndex.value = index;
      if (saleAmount.value !== "") {
        saleAmount.value = new Decimal(units[index].sats).mul(saleAmount.value).toString();
      } else if (auctionPrice.value !== "") {
        auctionPrice.value = new Decimal(units[index].sats).mul(auctionPrice.value).toString();
      }
    }
    function changeTabIndex(index) {
      if (tabIndex.value === index)
        return;
      tabIndex.value = index;
    }
    function auctionAmountChange() {
      if (parseFloat(auctionPrice.value) < minAuctionPrice.value) {
        auctionPrice.value = minAuctionPrice.value.toString();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(ElSkeleton), {
          loading: isShowSkeleton.value,
          animated: ""
        }, {
          template: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createVNode(unref(ElSkeletonItem), {
                class: "icon",
                variant: "h1"
              }),
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("span", _hoisted_4, [
                  createVNode(unref(ElSkeletonItem), {
                    class: "title",
                    variant: "h1",
                    style: { "width": "30%" }
                  })
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(unref(ElSkeletonItem), {
                variant: "h1",
                style: { "width": "20%", "margin-right": "40px" }
              }),
              createVNode(unref(ElSkeletonItem), {
                variant: "h1",
                style: { "width": "20%" }
              })
            ]),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createVNode(NftMsgCard, {
                  skeleton: isShowSkeleton.value,
                  "user-name": unref(nft).val.foundryName,
                  "cover-url": unref(nft).val.coverUrl,
                  "is-show-cert": true,
                  name: unref(nft).val.nftName,
                  "created-at": unref(nft).val.forgeTime,
                  "meta-id": unref(nft).val.foundryMetaId
                }, null, 8, ["skeleton", "user-name", "cover-url", "name", "created-at", "meta-id"]),
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(unref(ElSkeletonItem), {
                      variant: "h1",
                      style: { "width": "20%" }
                    })
                  ]),
                  createBaseVNode("div", _hoisted_10, [
                    createVNode(unref(ElSkeletonItem), {
                      class: "textarea-skeleton",
                      variant: "h1"
                    })
                  ]),
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(unref(ElSkeletonItem), {
                      class: "item-skeleton",
                      variant: "h1"
                    })
                  ]),
                  createBaseVNode("div", _hoisted_12, [
                    createVNode(unref(ElSkeletonItem), {
                      class: "item-skeleton",
                      variant: "h1"
                    })
                  ])
                ]),
                createVNode(unref(ElSkeletonItem), {
                  class: "button-skeleton",
                  variant: "button"
                })
              ])
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("img", {
                class: "icon",
                src: _imports_0,
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back())
              }),
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("span", _hoisted_15, toDisplayString(_ctx.$t("salenft")), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("a", {
                class: normalizeClass({ active: tabIndex.value === 0 }),
                onClick: _cache[1] || (_cache[1] = ($event) => changeTabIndex(0))
              }, toDisplayString(_ctx.$t("priceSale")), 3)
            ]),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, [
                createVNode(NftMsgCard, {
                  "user-name": unref(nft).val.foundryName,
                  "cover-url": unref(nft).val.coverUrl,
                  "is-show-cert": true,
                  name: unref(nft).val.nftName,
                  "created-at": unref(nft).val.forgeTime,
                  "meta-id": unref(nft).val.foundryMetaId
                }, null, 8, ["user-name", "cover-url", "name", "created-at", "meta-id"]),
                createBaseVNode("div", _hoisted_19, [
                  createBaseVNode("div", _hoisted_20, toDisplayString(tabIndex.value === 0 ? _ctx.$t("listedInformation") : _ctx.$t("auctionMSg")), 1),
                  tabIndex.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_21, [
                    createBaseVNode("div", _hoisted_22, [
                      withDirectives(createBaseVNode("textarea", {
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => saleIntro.value = $event),
                        placeholder: _ctx.$t("offSaleIntro")
                      }, null, 8, _hoisted_23), [
                        [vModelText, saleIntro.value]
                      ])
                    ])
                  ])) : createCommentVNode("", true),
                  tabIndex.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_24, [
                    createBaseVNode("div", _hoisted_25, [
                      createVNode(unref(ElDatePicker), {
                        class: "el-datetime flex1",
                        modelValue: saleTime.value,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => saleTime.value = $event),
                        editable: false,
                        clearable: false,
                        disabledDate: setDisabledDate,
                        type: "datetime",
                        placeholder: _ctx.$t("timeplac")
                      }, null, 8, ["modelValue", "placeholder"]),
                      _hoisted_26
                    ])
                  ])) : (openBlock(), createElementBlock("div", _hoisted_27, [
                    createBaseVNode("div", _hoisted_28, [
                      createVNode(unref(ElDatePicker), {
                        class: "el-datetime flex1",
                        modelValue: auctionTime.value,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => auctionTime.value = $event),
                        editable: false,
                        clearable: false,
                        disabledDate: setAuctionDisabledDate,
                        type: "datetime",
                        placeholder: _ctx.$t("auctiontimeplac")
                      }, null, 8, ["modelValue", "placeholder"]),
                      _hoisted_29
                    ])
                  ])),
                  tabIndex.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_30, [
                    createBaseVNode("div", _hoisted_31, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => saleAmount.value = $event),
                        placeholder: tabIndex.value === 0 ? _ctx.$t("priceplac") + unref(minPrice) : _ctx.$t("setABuyItPrice"),
                        onChange: saleAmountChange,
                        type: "number",
                        class: "flex1"
                      }, null, 40, _hoisted_32), [
                        [vModelText, saleAmount.value]
                      ]),
                      createBaseVNode("div", _hoisted_33, [
                        createVNode(unref(ElDropdown), { trigger: "click" }, {
                          dropdown: withCtx(() => [
                            createVNode(unref(ElDropdownMenu), null, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(units), (unit, index) => {
                                  return openBlock(), createBlock(unref(ElDropdownItem), {
                                    key: index,
                                    onClick: ($event) => changeUnitIndex(index)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unit.unit), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_34, [
                              createTextVNode(toDisplayString(unref(units)[unitIndex.value].unit) + " ", 1),
                              _hoisted_35
                            ])
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])) : (openBlock(), createElementBlock("div", _hoisted_36, [
                    createBaseVNode("div", _hoisted_37, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => auctionPrice.value = $event),
                        placeholder: _ctx.$t("auctionPriceplac") + unref(minAuctionPrice),
                        onChange: auctionAmountChange,
                        type: "number",
                        class: "flex1"
                      }, null, 40, _hoisted_38), [
                        [vModelText, auctionPrice.value]
                      ]),
                      createBaseVNode("div", _hoisted_39, [
                        createVNode(unref(ElDropdown), { trigger: "click" }, {
                          dropdown: withCtx(() => [
                            createVNode(unref(ElDropdownMenu), null, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(units), (unit, index) => {
                                  return openBlock(), createBlock(unref(ElDropdownItem), {
                                    key: index,
                                    onClick: ($event) => changeUnitIndex(index)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(unit.unit), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]);
                                }), 128))
                              ]),
                              _: 1
                            })
                          ]),
                          default: withCtx(() => [
                            createBaseVNode("span", _hoisted_40, [
                              createTextVNode(toDisplayString(unref(units)[unitIndex.value].unit) + " ", 1),
                              _hoisted_41
                            ])
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]))
                ]),
                createBaseVNode("div", {
                  class: normalizeClass(["btn btn-block", {
                    "btn-gray": tabIndex.value === 0 ? saleIntro.value === "" || saleAmount.value === "" || saleTime.value === "" : auctionTime.value === "" || auctionPrice.value === ""
                  }]),
                  onClick: confirmSale
                }, toDisplayString(_ctx.$t("confirmsale")), 3)
              ])
            ])
          ]),
          _: 1
        }, 8, ["loading"])
      ]);
    };
  }
});
var Sale = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-088ec734"]]);
export { Sale as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FsZS5lZDU4YmM1MS5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
