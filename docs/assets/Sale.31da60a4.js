import { _ as _export_sfc, e as defineComponent, u as useI18n, aq as useRoute, t as useRouter, r as ref, d as computed, v as reactive, bz as ElDropdownItem, bA as ElDropdownMenu, bB as ElDropdown, g as openBlock, A as createElementBlock, l as createVNode, j as withCtx, k as createBaseVNode, m as createCommentVNode, C as unref, D as toDisplayString, L as normalizeClass, T as withDirectives, V as vModelText, F as Fragment, B as renderList, J as createTextVNode, bC as units, q as pushScopeId, s as popScopeId, U as UnitName, at as Decimal, bD as getMyNftEligibility, a0 as ElLoading, bE as confirmLegalSale, bF as GetLegalRecevierAddress, au as store, bG as LegalSaleNft, X as ElMessage, a1 as confirmToSendMetaData, bH as SetDeadlineTime, i as createBlock } from './index.f03006d5.js';
import { E as ElSkeletonItem, a as ElSkeleton } from './skeleton.4c62fb88.js';
import { E as ElDatePicker } from './date-picker.91c3cc2f.js';
import './scrollbar.ed80349d.js';
import { N as NftMsgCard } from './NftMsgCard.6fb60a67.js';
import { N as NFTDetail } from './nftDetail.28374e41.js';
import { B as BannetIcon } from './bannet_icon_ins.9e5a53b7.js';
import './image-viewer.1c165fb3.js';
import './Cert.062903a8.js';
import './icon_uncer.caf0c366.js';
import './icon_cer.5f0b2a62.js';

var CalendarIcon = "/assets/list_icon_calendar.b3d08146.svg";

var Sale_scss_vue_type_style_index_0_src_0d394105_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-0d394105"), n = n(), popScopeId(), n);
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
const _hoisted_14 = ["src"];
const _hoisted_15 = { class: "title flex1 flex flex-align-center" };
const _hoisted_16 = { class: "flex1" };
const _hoisted_17 = { class: "tab flex flex-align-center flex-pack-center" };
const _hoisted_18 = { class: "cont-warp" };
const _hoisted_19 = { class: "nft-sale-set" };
const _hoisted_20 = { class: "form" };
const _hoisted_21 = { class: "form-title" };
const _hoisted_22 = {
  key: 0,
  class: "form-item"
};
const _hoisted_23 = { class: "cont flex flex-align-center" };
const _hoisted_24 = ["placeholder"];
const _hoisted_25 = {
  key: 1,
  class: "form-item"
};
const _hoisted_26 = { class: "cont flex flex-align-center" };
const _hoisted_27 = ["src"];
const _hoisted_28 = { class: "form-item" };
const _hoisted_29 = { class: "cont flex flex-align-center" };
const _hoisted_30 = ["src"];
const _hoisted_31 = {
  key: 3,
  class: "form-item"
};
const _hoisted_32 = { class: "cont flex flex-align-center" };
const _hoisted_33 = ["placeholder"];
const _hoisted_34 = { class: "type" };
const _hoisted_35 = { class: "flex flex-align-center" };
const _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "arrow" }, null, -1));
const _hoisted_37 = { class: "form-item" };
const _hoisted_38 = { class: "cont flex flex-align-center" };
const _hoisted_39 = ["placeholder"];
const _hoisted_40 = { class: "type" };
const _hoisted_41 = { class: "flex flex-align-center" };
const _hoisted_42 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "arrow" }, null, -1));
const _hoisted_43 = {
  key: 5,
  class: "form-item flex flex-align-center"
};
const _hoisted_44 = { class: "title" };
const _hoisted_45 = { class: "cont flex flex-align-center" };
const _hoisted_46 = /* @__PURE__ */ createTextVNode(" % ");
const _hoisted_47 = { class: "priceTips" };
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
    const minBidIncrease = ref(10);
    const saleUnits = units;
    const minPrice = computed(() => {
      let min = 1e-5;
      if (saleUnits[unitIndex.value].unit === UnitName.BSV) {
        min = 1e-5;
      } else if (saleUnits[unitIndex.value].unit === UnitName.RMB) {
        min = 0.01;
      }
      return min;
    });
    const minAuctionPrice = computed(() => {
      let min = 1e-4;
      if (saleUnits[unitIndex.value].unit === UnitName.BSV) {
        min = 1e-4;
      } else {
        min = 1e4;
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
      return new Promise(async (resolve) => {
        const _nft = await NFTDetail(typeof route.params.genesisId === "string" ? route.params.genesisId : "", typeof route.params.codehash === "string" ? route.params.codehash : "", typeof route.params.tokenIndex === "string" ? route.params.tokenIndex : "").catch(() => {
        });
        if (_nft && typeof _nft !== "boolean") {
          nft.val = _nft;
        }
        resolve();
      });
    }
    function saleAmountChange() {
      console.log("zxz22asasdas", saleAmount.value);
      if (new Decimal(saleAmount.value).toNumber() < minPrice.value) {
        saleAmount.value = minPrice.value.toString();
      }
    }
    async function confirmSale() {
      if (tabIndex.value === 0) {
        if (saleTime.value === "" || saleAmount.value === "" || saleIntro.value === "")
          return;
        const result = await getMyNftEligibility(nft.val.foundryMetaId);
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
          if (saleUnits[unitIndex.value].unit === UnitName.RMB) {
            const confrim = await confirmLegalSale();
            if (!confrim) {
              return;
            }
            let address, txId;
            const result2 = await GetLegalRecevierAddress();
            console.log(result2);
            if (result2.code == 0) {
              address = result2.data.address;
              const res = await store.state.sdk.transferNFT({
                receiverAddress: address,
                tokenIndex: nft.val.tokenIndex,
                codehash: nft.val.codeHash,
                genesisId: nft.val.genesis,
                genesisTxid: nft.val.genesisTxId,
                checkOnly: true
              });
              if (res.code == 200) {
                txId = res.data.txId;
                const results = await LegalSaleNft({
                  price: String(Number(saleAmount.value) * 100),
                  sellDesc: saleIntro.value,
                  txid: txId
                });
                if (results.code == 0) {
                  loading.close();
                  ElMessage.success(i18n.t("sellLegalNftSuccess"));
                  router.replace({
                    name: "topicDetail",
                    params: {
                      key: "legal",
                      metaId: store.state.userInfo.metaId
                    }
                  });
                } else {
                  loading.close();
                  ElMessage.error(i18n.t("sellLegalNftError"));
                }
              } else {
                loading.close();
                ElMessage.error(i18n.t("getNftTransferTxFail"));
              }
            } else {
              loading.close();
              ElMessage.error(i18n.t("getAddressFail"));
            }
          } else {
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
            const useAmountRes = await store.state.sdk?.nftSell({ checkOnly: true, ...params });
            if (useAmountRes && useAmountRes.code === 200) {
              const useAmount = useAmountRes.data.amount;
              const result2 = await confirmToSendMetaData(useAmount);
              if (result2) {
                const res = await store.state.sdk?.nftSell(params);
                if (res?.code === 200) {
                  await SetDeadlineTime({
                    genesis: nft.val.genesis,
                    codeHash: nft.val.codeHash,
                    tokenIndex: nft.val.tokenIndex,
                    deadlineTime: new Date(saleTime.value).getTime()
                  }).catch(() => {
                    console.log("\u4E0A\u62A5\u65F6\u95F4\u9519\u8BEF");
                  });
                  await store.state.sdk?.checkNftTxIdStatus(res.data.sellTxId);
                  await store.state.sdk?.checkNftTxIdStatus(res.data.txid);
                  loading.close();
                  ElMessage.success(i18n.t("saleSuccess"));
                  router.replace({
                    name: "userSale",
                    params: {
                      metaId: store.state.userInfo.metaId
                    }
                  });
                }
              }
            }
          }
        } catch (error) {
          new Error(JSON.stringify(error));
          if (loading)
            loading.close();
        }
      } else if (tabIndex.value === 1) {
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
          if (units[unitIndex.value].unit === UnitName.BSV) {
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
            feeAddress: "176C9RPWDggnvdVcWG3wrZEJcm1bHTcKM5",
            minBidIncrease: minBidIncrease.value
          };
          const res = await store.state.sdk?.nftStartAuction({
            ...params,
            checkOnly: true
          });
          if (res.code === 200) {
            const result = await confirmToSendMetaData(res.data.amount);
            if (result) {
              const response = await store.state.sdk?.nftStartAuction(params);
              if (response && response?.code === 200) {
                setTimeout(() => {
                  ElMessage.success(i18n.t("createAuctionSuccess"));
                  loading.close();
                  router.replace({
                    name: "userSale",
                    params: {
                      metaId: store.state.userInfo.metaId
                    },
                    query: {
                      sellType: "3"
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
      saleAmount.value = "";
      unitIndex.value = index;
      if (saleAmount.value !== "") {
        saleAmount.value = new Decimal(saleUnits[index].sats).mul(saleAmount.value).toString();
      } else if (auctionPrice.value !== "") {
        auctionPrice.value = new Decimal(saleUnits[index].sats).mul(auctionPrice.value).toString();
      }
    }
    function changeTabIndex(index) {
      if (index === 1) {
        const result = store.state.isCertedMetaIds.find((item) => item === store.state.userInfo.metaId);
        if (!result) {
          ElMessage.warning(i18n.t("iscertNotAuction"));
          return;
        }
      }
      if (saleUnits[unitIndex.value].unit === UnitName.RMB) {
        return ElMessage.warning(i18n.t("legalNotAllowAuction"));
      }
      if (tabIndex.value === index)
        return;
      tabIndex.value = index;
    }
    function auctionAmountChange() {
      if (parseFloat(auctionPrice.value) < minAuctionPrice.value) {
        auctionPrice.value = minAuctionPrice.value.toString();
      }
    }
    function minBidIncreaseChange() {
      if (minBidIncrease.value === "")
        minBidIncrease.value = 1;
      minBidIncrease.value = parseInt(minBidIncrease.value.toString());
      if (minBidIncrease.value < 1) {
        minBidIncrease.value = 1;
      }
      if (minBidIncrease.value > 30) {
        minBidIncrease.value = 30;
      }
    }
    if (route.params.genesisId && route.params.codehash && route.params.tokenIndex) {
      getDetail().then(() => {
        isShowSkeleton.value = false;
      });
    }
    return (_ctx, _cache) => {
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElDatePicker = ElDatePicker;
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_ElDropdown = ElDropdown;
      const _component_ElSkeleton = ElSkeleton;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ElSkeleton, {
          loading: isShowSkeleton.value,
          animated: ""
        }, {
          template: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_ElSkeletonItem, {
                class: "icon",
                variant: "h1"
              }),
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("span", _hoisted_4, [
                  createVNode(_component_ElSkeletonItem, {
                    class: "title",
                    variant: "h1",
                    style: { "width": "30%" }
                  })
                ]),
                createCommentVNode(` <router-link :to="{ name: 'saleLegend' }"
          >{{ $t('saledrsc') }}<i class="el-icon-arrow-right"
        /></router-link> `)
              ])
            ]),
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_ElSkeletonItem, {
                variant: "h1",
                style: { "width": "20%", "margin-right": "40px" }
              }),
              createVNode(_component_ElSkeletonItem, {
                variant: "h1",
                style: { "width": "20%" }
              })
            ]),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createCommentVNode(" NFT \u4FE1\u606F \u5361\u7247 "),
                createVNode(NftMsgCard, {
                  skeleton: true,
                  "user-name": "",
                  "cover-url": "",
                  name: "",
                  "created-at": 0,
                  "meta-id": ""
                }),
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, [
                    createVNode(_component_ElSkeletonItem, {
                      variant: "h1",
                      style: { "width": "20%" }
                    })
                  ]),
                  createBaseVNode("div", _hoisted_10, [
                    createVNode(_component_ElSkeletonItem, {
                      class: "textarea-skeleton",
                      variant: "h1"
                    })
                  ]),
                  createBaseVNode("div", _hoisted_11, [
                    createCommentVNode(' <div class="title">\u65F6\u95F4</div> '),
                    createVNode(_component_ElSkeletonItem, {
                      class: "item-skeleton",
                      variant: "h1"
                    })
                  ]),
                  createBaseVNode("div", _hoisted_12, [
                    createCommentVNode(' <div class="title">\u4EF7\u683C</div> '),
                    createVNode(_component_ElSkeletonItem, {
                      class: "item-skeleton",
                      variant: "h1"
                    })
                  ]),
                  createCommentVNode(` <div class="to-histiry">
            <a>{{ $t('seehistoryprice') }}</a>
          </div> `)
                ]),
                createVNode(_component_ElSkeletonItem, {
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
                src: unref(BannetIcon),
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$router.back())
              }, null, 8, _hoisted_14),
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("span", _hoisted_16, toDisplayString(_ctx.$t("salenft")), 1),
                createCommentVNode(` <router-link :to="{ name: 'saleLegend' }"
          >{{ $t('saledrsc') }}<i class="el-icon-arrow-right"
        /></router-link> `)
              ])
            ]),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("a", {
                class: normalizeClass({ active: tabIndex.value === 0 }),
                onClick: _cache[1] || (_cache[1] = ($event) => changeTabIndex(0))
              }, toDisplayString(_ctx.$t("priceSale")), 3),
              createBaseVNode("a", {
                class: normalizeClass({ active: tabIndex.value === 1 }),
                onClick: _cache[2] || (_cache[2] = ($event) => changeTabIndex(1))
              }, toDisplayString(_ctx.$t("auctionSale")), 3)
            ]),
            createBaseVNode("div", _hoisted_18, [
              createBaseVNode("div", _hoisted_19, [
                createCommentVNode(" NFT \u4FE1\u606F \u5361\u7247 "),
                createVNode(NftMsgCard, {
                  "user-name": unref(nft).val?.foundryName,
                  "cover-url": unref(nft).val?.coverUrl,
                  "is-show-cert": true,
                  name: unref(nft).val?.nftName,
                  "created-at": unref(nft).val?.forgeTime,
                  "meta-id": unref(nft).val.foundryMetaId
                }, null, 8, ["user-name", "cover-url", "name", "created-at", "meta-id"]),
                createCommentVNode(" \u4E0A\u67B6\u4FE1\u606F "),
                createBaseVNode("div", _hoisted_20, [
                  createBaseVNode("div", _hoisted_21, toDisplayString(tabIndex.value === 0 ? _ctx.$t("listedInformation") : _ctx.$t("auctionMSg")), 1),
                  createCommentVNode(" \u4E0A\u67B6\u4ECB\u7ECD "),
                  tabIndex.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_22, [
                    createBaseVNode("div", _hoisted_23, [
                      withDirectives(createBaseVNode("textarea", {
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => saleIntro.value = $event),
                        placeholder: _ctx.$t("offSaleIntro")
                      }, null, 8, _hoisted_24), [
                        [vModelText, saleIntro.value]
                      ])
                    ])
                  ])) : createCommentVNode("v-if", true),
                  createCommentVNode(" \u65F6\u95F4 "),
                  createCommentVNode(" \u4E0A\u67B6\u65F6\u95F4 "),
                  tabIndex.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_25, [
                    createBaseVNode("div", _hoisted_26, [
                      createVNode(_component_ElDatePicker, {
                        class: "el-datetime flex1",
                        modelValue: saleTime.value,
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => saleTime.value = $event),
                        editable: false,
                        clearable: false,
                        disabledDate: setDisabledDate,
                        type: "datetime",
                        placeholder: _ctx.$t("timeplac")
                      }, null, 8, ["modelValue", "placeholder"]),
                      createBaseVNode("img", {
                        class: "icon",
                        src: unref(CalendarIcon)
                      }, null, 8, _hoisted_27)
                    ])
                  ])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                    createCommentVNode(" \u7ADE\u62CD\u65F6\u95F4 "),
                    createBaseVNode("div", _hoisted_28, [
                      createBaseVNode("div", _hoisted_29, [
                        createVNode(_component_ElDatePicker, {
                          class: "el-datetime flex1",
                          modelValue: auctionTime.value,
                          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => auctionTime.value = $event),
                          editable: false,
                          clearable: false,
                          disabledDate: setAuctionDisabledDate,
                          type: "datetime",
                          placeholder: _ctx.$t("auctiontimeplac")
                        }, null, 8, ["modelValue", "placeholder"]),
                        createBaseVNode("img", {
                          class: "icon",
                          src: unref(CalendarIcon)
                        }, null, 8, _hoisted_30)
                      ])
                    ])
                  ], 2112)),
                  createCommentVNode(" \u4EF7\u683C "),
                  createCommentVNode(" \u5B9A\u4EF7\u51FA\u552E "),
                  tabIndex.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_31, [
                    createBaseVNode("div", _hoisted_32, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => saleAmount.value = $event),
                        placeholder: tabIndex.value === 0 ? _ctx.$t("priceplac") + unref(saleUnits)[unitIndex.value].min : _ctx.$t("setABuyItPrice"),
                        onChange: saleAmountChange,
                        type: "number",
                        class: "flex1"
                      }, null, 40, _hoisted_33), [
                        [vModelText, saleAmount.value]
                      ]),
                      createBaseVNode("div", _hoisted_34, [
                        createVNode(_component_ElDropdown, { trigger: "click" }, {
                          dropdown: withCtx(() => [
                            createVNode(_component_el_dropdown_menu, null, {
                              default: withCtx(() => [
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(saleUnits), (unit, index) => {
                                  return openBlock(), createBlock(_component_el_dropdown_item, {
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
                            createBaseVNode("span", _hoisted_35, [
                              createTextVNode(toDisplayString(unref(saleUnits)[unitIndex.value].unit) + " ", 1),
                              _hoisted_36
                            ])
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ])) : (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                    createCommentVNode(" \u8BBE\u7F6E\u8D77\u62CD\u4EF7 "),
                    createBaseVNode("div", _hoisted_37, [
                      createBaseVNode("div", _hoisted_38, [
                        withDirectives(createBaseVNode("input", {
                          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => auctionPrice.value = $event),
                          placeholder: _ctx.$t("auctionPriceplac") + unref(minAuctionPrice),
                          onChange: auctionAmountChange,
                          type: "number",
                          class: "flex1"
                        }, null, 40, _hoisted_39), [
                          [vModelText, auctionPrice.value]
                        ]),
                        createBaseVNode("div", _hoisted_40, [
                          createVNode(_component_ElDropdown, { trigger: "click" }, {
                            dropdown: withCtx(() => [
                              createVNode(_component_el_dropdown_menu, null, {
                                default: withCtx(() => [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(units), (unit, index) => {
                                    return openBlock(), createBlock(_component_el_dropdown_item, {
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
                              createBaseVNode("span", _hoisted_41, [
                                createTextVNode(toDisplayString(unref(units)[unitIndex.value].unit) + " ", 1),
                                _hoisted_42
                              ])
                            ]),
                            _: 1
                          })
                        ])
                      ])
                    ])
                  ], 2112)),
                  tabIndex.value === 1 ? (openBlock(), createElementBlock("div", _hoisted_43, [
                    createBaseVNode("div", _hoisted_44, toDisplayString(_ctx.$t("minBidIncrease")) + ":", 1),
                    createBaseVNode("div", _hoisted_45, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => minBidIncrease.value = $event),
                        placeholder: "",
                        onChange: minBidIncreaseChange,
                        type: "number",
                        class: "flex1 increase"
                      }, null, 544), [
                        [vModelText, minBidIncrease.value]
                      ]),
                      _hoisted_46
                    ])
                  ])) : createCommentVNode("v-if", true),
                  createCommentVNode(" \u8BBE\u7F6E\u6700\u5C11\u52A0\u4EF7 "),
                  createCommentVNode(` <div class="form-item" v-if="tabIndex === 1">
                <div class="cont flex flex-align-center">
                  <input
                    v-model="minGapPrice"
                    :placeholder="$t('minGapPriceplac')"
                    type="number"
                    class="flex1"
                  />
                  <div class="type">
                    <ElDropdown trigger="click">
                      <span class="flex flex-align-center">
                        {{ units[unitIndex].unit }} <span class="arrow"></span>
                      </span>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item
                            v-for="(unit, index) in units"
                            :key="index"
                            @click="changeUnitIndex(index)"
                            >{{ unit.unit }}</el-dropdown-item
                          >
                        </el-dropdown-menu>
                      </template>
                    </ElDropdown>
                  </div>
                </div>
              </div> `),
                  createCommentVNode(` <div class="to-histiry">
            <a>{{ $t('seehistoryprice') }}</a>
          </div> `)
                ]),
                createBaseVNode("div", _hoisted_47, [
                  createBaseVNode("span", null, toDisplayString(_ctx.$t("receviceBSV")), 1),
                  createBaseVNode("span", null, toDisplayString(_ctx.$t("receviceCNY")), 1)
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
var Sale = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0d394105"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/sale/Sale.vue"]]);

export { Sale as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FsZS4zMWRhNjBhNC5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
