import { _ as _export_sfc, g as openBlock, A as createElementBlock, k as createBaseVNode, m as createCommentVNode, l as createVNode, F as Fragment, e as defineComponent, u as useI18n, r as ref, v as reactive, aM as computed, a as onMounted, f as resolveComponent, D as toDisplayString, B as renderList, C as unref, J as createTextVNode, L as normalizeClass, q as pushScopeId, s as popScopeId, aN as BlindBoxBuyReCord, aO as BlindBoxOpenReCord, a0 as ElLoading, X as ElMessage, aq as useRoute, d as computed$1, aP as pagination, w as watch, aQ as legalNftConverterPrice, aR as converterPrice, ar as GetLegalNftDetail, aS as GetBlindBoxSaleDetail, aT as GetNftAuctionDetail, aU as bsvStr, aV as bsv, at as Decimal, ap as ElDialog, aW as resolveDirective, j as withCtx, aX as format, i as createBlock, T as withDirectives, V as vModelText, E as useStore, U as UnitName, aY as satoshis, aZ as toCNY, ao as ElMessageBox, a3 as router, a_ as GetMyNftEligibility, a$ as Langs, Z as checkSdkStatus, a1 as confirmToSendMetaData, b0 as GetNftAuctionHistory, b1 as GetNftHolderList, b2 as NftApiCode, b3 as GetFeeInfo, M as Mutation, b4 as ToUser } from './index.3c02df72.js';
import { E as ElCollapseItem, a as ElCollapse } from './collapse.b54deb1b.js';
import { E as ElPopover, U as UnCertIcon } from './icon_uncer.6a55b767.js';
import { E as ElSkeletonItem, a as ElSkeleton } from './skeleton.048068e8.js';
import { P as PayConfirmVue, _ as _imports_3, a as _imports_4 } from './PayConfirm.0734815b.js';
import { _ as _imports_0, a as _imports_1 } from './detailDetach-owner.53484477.js';
import { t as toClipboard } from './vue3-clipboard.esm-bundler.76b8e6c2.js';
import { N as NftOffSale } from './offSale.321e6ef4.js';
import { N as NFTDetail } from './nftDetail.c876de9e.js';
import { C as CertIcon } from './icon_cer.5f0b2a62.js';
import { i as index } from './vue-countdown.esm.951461a2.js';
import { L as LoadMore } from './LoadMore.538873cb.js';
import { M as MoreContentModal } from './MoreContentModal.690bcf63.js';
import { a as auctionConfirmSend } from './auction.e18783c5.js';
import { N as NFTCover } from './Cover.5869eba2.js';
import { C as CastingIcon } from './icon_casting.15a68292.js';
import { E as ElImage } from './image-viewer.62daae40.js';
import './logo_bsv.3a6b2418.js';
import './sandPay_title.2edd4dc3.js';
import './enum.2d046482.js';

var DetailSkeleton_scss_vue_type_style_index_0_src_6e4d5578_scoped_true_lang = '';

const _sfc_main$2 = {};
const _hoisted_1$2 = { class: "top flex container" };
const _hoisted_2$2 = { class: "cont flex1 flex flex-v" };
const _hoisted_3$2 = { class: "name flex flex-align-center" };
const _hoisted_4$2 = { class: "creater-msg" };
const _hoisted_5$2 = { class: "author flex flex-align-center" };
const _hoisted_6$2 = { class: "author-msg flex1" };
const _hoisted_7$2 = { class: "cert" };
const _hoisted_8$2 = { class: "drsc flex1 flex flex-v" };
const _hoisted_9$2 = { class: "cont flex1" };
const _hoisted_10$2 = { class: "timeleft" };
const _hoisted_11$2 = { class: "operate-warp" };
const _hoisted_12$2 = { class: "bottom" };
const _hoisted_13$2 = { class: "bottom-warp" };
const _hoisted_14$2 = { class: "tab" };
const _hoisted_15$2 = { class: "tab-cont" };
const _hoisted_16$2 = {
  key: 0,
  class: "work-deail"
};
const _hoisted_17$2 = { class: "work-deail-section" };
const _hoisted_18$2 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_19$2 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_20$2 = { class: "work-detail-item flex flex-align-baseline" };
const _hoisted_21$2 = { class: "work-deail-section" };
const _hoisted_22$2 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_23$2 = { class: "work-detail-item flex flex flex-align-baseline" };
const _hoisted_24$2 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_25$2 = { class: "work-deail-section" };
const _hoisted_26$2 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_27$2 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_28$2 = { class: "work-deail-section" };
const _hoisted_29$2 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_30$2 = {
  key: 0,
  class: "work-detail-item flex flex-align-center"
};
const _hoisted_31$2 = {
  key: 1,
  class: "work-detail-item flex flex-align-center"
};
const _hoisted_32$2 = { class: "remark" };
const _hoisted_33$2 = { class: "remark-item" };
const _hoisted_34$2 = { class: "remark-item" };
const _hoisted_35$2 = { class: "remark-item" };

function _sfc_render(_ctx, _cache) {
  const _component_ElSkeletonItem = ElSkeletonItem;

  return (openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1$2, [
      createCommentVNode(" {{ nft.val.coverUrl }} "),
      createVNode(_component_ElSkeletonItem, {
        class: "cover",
        variant: "image"
      }),
      createBaseVNode("div", _hoisted_2$2, [
        createBaseVNode("div", _hoisted_3$2, [
          createVNode(_component_ElSkeletonItem, {
            class: "text",
            variant: "text",
            style: {"width":"80%"}
          })
        ]),
        createBaseVNode("div", _hoisted_4$2, [
          createBaseVNode("div", _hoisted_5$2, [
            createVNode(_component_ElSkeletonItem, {
              variant: "image",
              class: "avatar"
            }),
            createBaseVNode("div", _hoisted_6$2, [
              createVNode(_component_ElSkeletonItem, {
                class: "creater",
                variant: "text"
              }),
              createVNode(_component_ElSkeletonItem, {
                class: "metaid",
                variant: "text"
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_7$2, [
            createVNode(_component_ElSkeletonItem, {
              class: "text",
              variant: "text",
              style: {"width":"20%"}
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_8$2, [
          createVNode(_component_ElSkeletonItem, {
            class: "title",
            variant: "h1"
          }),
          createBaseVNode("div", _hoisted_9$2, [
            createVNode(_component_ElSkeletonItem, {
              variant: "text",
              style: {"width":"80%"}
            }),
            createVNode(_component_ElSkeletonItem, {
              variant: "text",
              style: {"width":"60%","margin-top":"15px"}
            }),
            createVNode(_component_ElSkeletonItem, {
              variant: "text",
              style: {"width":"40%","margin-top":"15px"}
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_10$2, [
          createVNode(_component_ElSkeletonItem, { variant: "text" })
        ]),
        createBaseVNode("div", _hoisted_11$2, [
          createVNode(_component_ElSkeletonItem, {
            class: "btn btn-block",
            variant: "button"
          })
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_12$2, [
      createBaseVNode("div", _hoisted_13$2, [
        createBaseVNode("div", _hoisted_14$2, [
          createVNode(_component_ElSkeletonItem, { variant: "text" }),
          createVNode(_component_ElSkeletonItem, { variant: "text" })
        ]),
        createBaseVNode("div", _hoisted_15$2, [
          createCommentVNode(" 作品细节 "),
          (_ctx.tabIndex === 0)
            ? (openBlock(), createElementBlock("div", _hoisted_16$2, [
                createBaseVNode("div", _hoisted_17$2, [
                  createBaseVNode("div", _hoisted_18$2, [
                    createVNode(_component_ElSkeletonItem, {
                      class: "key",
                      variant: "text"
                    }),
                    createVNode(_component_ElSkeletonItem, {
                      class: "value flex1",
                      variant: "text"
                    })
                  ]),
                  createBaseVNode("div", _hoisted_19$2, [
                    createVNode(_component_ElSkeletonItem, {
                      class: "key",
                      variant: "text"
                    }),
                    createVNode(_component_ElSkeletonItem, {
                      class: "value flex1",
                      variant: "text"
                    })
                  ]),
                  createBaseVNode("div", _hoisted_20$2, [
                    createVNode(_component_ElSkeletonItem, {
                      class: "key",
                      variant: "text"
                    }),
                    createVNode(_component_ElSkeletonItem, {
                      class: "value flex1",
                      variant: "text"
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_21$2, [
                  createBaseVNode("div", _hoisted_22$2, [
                    createVNode(_component_ElSkeletonItem, {
                      class: "key",
                      variant: "text"
                    }),
                    createVNode(_component_ElSkeletonItem, {
                      class: "value flex1",
                      variant: "text"
                    })
                  ]),
                  createBaseVNode("div", _hoisted_23$2, [
                    createVNode(_component_ElSkeletonItem, {
                      class: "key",
                      variant: "text"
                    }),
                    createVNode(_component_ElSkeletonItem, {
                      class: "value flex1",
                      variant: "text"
                    })
                  ]),
                  createBaseVNode("div", _hoisted_24$2, [
                    createVNode(_component_ElSkeletonItem, {
                      class: "key",
                      variant: "text"
                    }),
                    createVNode(_component_ElSkeletonItem, {
                      class: "value flex1",
                      variant: "text"
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_25$2, [
                  createBaseVNode("div", _hoisted_26$2, [
                    createVNode(_component_ElSkeletonItem, {
                      class: "key",
                      variant: "text"
                    }),
                    createVNode(_component_ElSkeletonItem, {
                      class: "value flex1",
                      variant: "text"
                    })
                  ]),
                  createBaseVNode("div", _hoisted_27$2, [
                    createVNode(_component_ElSkeletonItem, {
                      class: "key",
                      variant: "text"
                    }),
                    createVNode(_component_ElSkeletonItem, {
                      class: "value flex1",
                      variant: "text"
                    })
                  ])
                ]),
                createBaseVNode("div", _hoisted_28$2, [
                  createBaseVNode("div", _hoisted_29$2, [
                    createVNode(_component_ElSkeletonItem, {
                      class: "key",
                      variant: "text"
                    }),
                    createVNode(_component_ElSkeletonItem, {
                      class: "value flex1",
                      variant: "text"
                    })
                  ]),
                  (_ctx.nft.val.type === '3')
                    ? (openBlock(), createElementBlock("div", _hoisted_30$2, [
                        createVNode(_component_ElSkeletonItem, {
                          class: "key",
                          variant: "text"
                        }),
                        createVNode(_component_ElSkeletonItem, {
                          class: "value flex1",
                          variant: "text"
                        })
                      ]))
                    : (openBlock(), createElementBlock("div", _hoisted_31$2, [
                        createVNode(_component_ElSkeletonItem, {
                          class: "key",
                          variant: "text"
                        }),
                        createVNode(_component_ElSkeletonItem, {
                          class: "value flex1",
                          variant: "text"
                        })
                      ]))
                ]),
                createBaseVNode("div", _hoisted_32$2, [
                  createBaseVNode("div", _hoisted_33$2, [
                    createVNode(_component_ElSkeletonItem, { variant: "text" })
                  ]),
                  createBaseVNode("div", _hoisted_34$2, [
                    createVNode(_component_ElSkeletonItem, { variant: "text" })
                  ]),
                  createBaseVNode("div", _hoisted_35$2, [
                    createVNode(_component_ElSkeletonItem, { variant: "text" })
                  ])
                ])
              ]))
            : createCommentVNode("v-if", true)
        ])
      ])
    ])
  ], 64 /* STABLE_FRAGMENT */))
}
var DetailSkeletonVue = /*#__PURE__*/_export_sfc(_sfc_main$2, [['render',_sfc_render],['__scopeId',"data-v-6e4d5578"],['__file',"/Users/hotheat/Desktop/nft/nft-show/src/views/DetailSkeleton.vue"]]);

var ListIcon = "/assets/list_icon_ins.e07bb3c5.svg";

var LinkIcon = "/assets/list_icon_link.bd234ca5.svg";

const getSrc = (part, index) => {
  let path;
  if (part === "Body") {
    path = `/metabot/${part}/MetaBot Avatar - Main Body.png`;
  } else {
    path = `/metabot/${part}/MetaBot Avatar - ${part} ${index}.png`;
  }
  return path;
};

var partDetail_scss_vue_type_style_index_0_src_67f17f1d_scoped_true_lang = '';

const _withScopeId$1 = (n) => (pushScopeId("data-v-67f17f1d"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "partDetailWrap container" };
const _hoisted_2$1 = { class: "box" };
const _hoisted_3$1 = { class: "partDetail-top" };
const _hoisted_4$1 = { class: "partDetail-list" };
const _hoisted_5$1 = { class: "left" };
const _hoisted_6$1 = { class: "right" };
const _hoisted_7$1 = { class: "partName" };
const _hoisted_8$1 = { class: "supplyAmount" };
const _hoisted_9$1 = { class: "nftDetailAndDesc box" };
const _hoisted_10$1 = { class: "title" };
const _hoisted_11$1 = { class: "work-deail-section" };
const _hoisted_12$1 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_13$1 = { class: "key" };
const _hoisted_14$1 = { class: "value flex1" };
const _hoisted_15$1 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_16$1 = { class: "key" };
const _hoisted_17$1 = { class: "value flex1" };
const _hoisted_18$1 = /* @__PURE__ */ createTextVNode("--");
const _hoisted_19$1 = { class: "work-detail-item flex flex-align-baseline" };
const _hoisted_20$1 = { class: "key" };
const _hoisted_21$1 = { class: "value flex1" };
const _hoisted_22$1 = { class: "work-deail-section" };
const _hoisted_23$1 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_24$1 = { class: "key" };
const _hoisted_25$1 = { class: "value flex1" };
const _hoisted_26$1 = {
  key: 0,
  class: "work-detail-item flex flex flex-align-baseline"
};
const _hoisted_27$1 = { class: "key" };
const _hoisted_28$1 = { class: "value flex1" };
const _hoisted_29$1 = { class: "work-deail-section" };
const _hoisted_30$1 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_31$1 = { class: "key" };
const _hoisted_32$1 = { class: "value flex1" };
const _hoisted_33$1 = { class: "author flex flex-align-center" };
const _hoisted_34$1 = { class: "author-msg flex1" };
const _hoisted_35$1 = { class: "creater" };
const _hoisted_36$1 = {
  key: 0,
  class: "metaid"
};
const _hoisted_37$1 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_38$1 = { class: "key" };
const _hoisted_39$1 = { class: "value flex1" };
const _hoisted_40$1 = { class: "author flex flex-align-center" };
const _hoisted_41$1 = { class: "author-msg flex1" };
const _hoisted_42$1 = { class: "creater" };
const _hoisted_43$1 = {
  key: 0,
  class: "metaid"
};
const _hoisted_44$1 = { class: "remark" };
const _hoisted_45$1 = { class: "remark-item" };
const _hoisted_46$1 = { class: "remark-item" };
const _hoisted_47$1 = { class: "remark-item" };
const _hoisted_48$1 = { class: "blindBoxRecorddWrap box" };
const _hoisted_49$1 = { class: "blindBoxRecordTab" };
const _hoisted_50$1 = ["onClick"];
const _hoisted_51$1 = { class: "tab-cont" };
const _hoisted_52$1 = { class: "tabTop" };
const _hoisted_53$1 = {
  key: 0,
  class: "buyRecord"
};
const _hoisted_54$1 = { class: "tr th flex flex-align-center" };
const _hoisted_55$1 = { class: "td flex1" };
const _hoisted_56$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "td flex1" }, "MetaID", -1));
const _hoisted_57$1 = { class: "td flex1" };
const _hoisted_58$1 = { class: "td flex1" };
const _hoisted_59$1 = { class: "td flex1" };
const _hoisted_60$1 = { class: "td blindboxUser flex1 flex flex-align-center" };
const _hoisted_61$1 = ["src"];
const _hoisted_62$1 = { class: "td blindboxMetaId flex1 flex flex-align-center" };
const _hoisted_63$1 = { class: "td blindboxOperation flex1 flex flex-align-center" };
const _hoisted_64$1 = { class: "td blindboxAmount flex1 flex flex-align-center" };
const _hoisted_65$1 = { class: "td blindboxTime flex1 flex flex-align-center" };
const _hoisted_66$1 = {
  key: 1,
  class: "extractRecord"
};
const _hoisted_67$1 = { class: "tr th flex flex-align-center" };
const _hoisted_68$1 = { class: "td flex1" };
const _hoisted_69$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", { class: "td flex1" }, "MetaID", -1));
const _hoisted_70$1 = { class: "td flex1" };
const _hoisted_71$1 = { class: "td flex1" };
const _hoisted_72$1 = { class: "td blindboxUser flex1 flex flex-align-center" };
const _hoisted_73$1 = ["src"];
const _hoisted_74$1 = { class: "td blindboxMetaId flex1 flex flex-align-center" };
const _hoisted_75$1 = { class: "td blindboxOperation flex1 flex flex-align-center" };
const _hoisted_76$1 = { class: "td blindboxTime flex1 flex flex-align-center" };
const _hoisted_77$1 = {
  key: 0,
  class: "getRecordMore"
};
const _hoisted_78$1 = {
  key: 1,
  class: "getRecordMore"
};
const _hoisted_79$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    nft: { type: null, required: true }
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const tabIndex = ref(0);
    ref(false);
    const tabs = [
      { name: i18n.t("buyRecord"), key: "buyRecord" },
      { name: i18n.t("extractRecord"), key: "extractRecord" }
    ];
    const BlindboxPagination = reactive({
      buyVal: {
        page: 1,
        pageSize: 20
      },
      openVal: {
        page: 1,
        pageSize: 20
      }
    });
    const partList = reactive([
      {
        partModule: "Body",
        partName: "MetaBot Avatar - Main Body",
        partStyle: 1,
        everyPartIssuerAmout: 580,
        probability: "6%"
      },
      {
        partModule: "Arms",
        partName: "MetaBot Avatar - Arms ",
        partStyle: 14,
        everyPartIssuerAmout: 200,
        probability: "2.1%"
      },
      {
        partModule: "Legs",
        partName: "MetaBot Avatar - Legs ",
        partStyle: 14,
        everyPartIssuerAmout: 200,
        probability: "2.1%"
      },
      {
        partModule: "Boots",
        partName: "MetaBot Avatar - Boots ",
        partStyle: 14,
        everyPartIssuerAmout: 200,
        probability: "2.1%"
      },
      {
        partModule: "Tool",
        partName: "MetaBot Avatar - Tool ",
        partStyle: 14,
        everyPartIssuerAmout: 40,
        probability: "0.4%"
      }
    ]);
    const partListTotal = computed(() => {
      const newList = [];
      partList.map((item, id) => {
        for (let i = 1; i <= item.partStyle; i++) {
          newList.push({
            partModule: `${item.partModule}`,
            id: i,
            partName: item.partStyle <= 1 ? `${item.partName}` : `${item.partName}${i}`,
            everyPartIssuerAmout: item.everyPartIssuerAmout,
            probability: item.probability
          });
        }
      });
      return newList;
    });
    const historyRecords = reactive([]);
    const openRecords = reactive([]);
    const historyRecordsNoData = ref(false);
    const openRecordsNoData = ref(false);
    async function getBlindBoxRecord(isInit = false) {
      if (isInit) {
        try {
          const initBuyRes = await BlindBoxBuyReCord({
            page: BlindboxPagination.buyVal.page.toString(),
            pageSize: BlindboxPagination.buyVal.pageSize.toString()
          });
          if (initBuyRes.code == 0) {
            if (!initBuyRes.data) {
              openRecordsNoData.value = true;
            } else {
              historyRecords.push(...initBuyRes.data);
            }
          }
        } catch {
          historyRecordsNoData.value = true;
        }
        try {
          const initOpenRes = await BlindBoxOpenReCord({
            page: BlindboxPagination.openVal.page.toString(),
            pageSize: BlindboxPagination.openVal.pageSize.toString()
          });
          if (initOpenRes.code == 0) {
            if (!initOpenRes.data) {
              openRecordsNoData.value = true;
            } else {
              openRecords.push(...initOpenRes.data);
            }
          }
        } catch {
          openRecordsNoData.value = true;
        }
      } else {
        if (tabIndex.value == 0) {
          const BuyReCordRes = await BlindBoxBuyReCord({
            page: BlindboxPagination.buyVal.page.toString(),
            pageSize: BlindboxPagination.buyVal.pageSize.toString()
          });
          if (BuyReCordRes.code == 0 && BuyReCordRes.data) {
            historyRecords.push(...BuyReCordRes.data);
          } else {
            historyRecordsNoData.value = true;
          }
        } else {
          const OpenRecordRes = await BlindBoxOpenReCord({
            page: BlindboxPagination.openVal.page.toString(),
            pageSize: BlindboxPagination.openVal.pageSize.toString()
          });
          if (OpenRecordRes.code == 0 && OpenRecordRes.data) {
            openRecords.push(...OpenRecordRes.data);
          } else {
            openRecordsNoData.value = true;
          }
        }
      }
    }
    function loadMore() {
      const loading2 = ElLoading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        customClass: "full-loading"
      });
      if (tabIndex.value == 0) {
        if (historyRecordsNoData.value) {
          loading2.close();
          return;
        }
        BlindboxPagination.buyVal.page++;
      } else {
        if (openRecordsNoData.value) {
          loading2.close();
          return;
        }
        BlindboxPagination.openVal.page++;
      }
      getBlindBoxRecord();
      loading2.close();
    }
    function changeTabIndex(index) {
      if (tabIndex.value === index) {
        return;
      }
      tabIndex.value = index;
    }
    function copy(value) {
      toClipboard(value).then(() => {
        ElMessage.success(i18n.t("copysuccess"));
      }).catch(() => {
        ElMessage.success(i18n.t("copyerror"));
      });
    }
    function toWhatsonchain(txId) {
      window.open(`https://whatsonchain.com/tx/${txId}`);
    }
    onMounted(() => {
      getBlindBoxRecord(true);
    });
    return (_ctx, _cache) => {
      const _component_ElImage = ElImage;
      const _component_UserAvatar = resolveComponent("UserAvatar");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("span", null, toDisplayString(_ctx.$t("blindBoxDetail")), 1),
            createBaseVNode("span", null, toDisplayString(_ctx.$t("blindboxTips")), 1)
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(partListTotal), (item, id) => {
              return openBlock(), createElementBlock("div", {
                class: "partDetail-item",
                key: id
              }, [
                createBaseVNode("div", _hoisted_5$1, [
                  createVNode(_component_ElImage, {
                    fit: "contain",
                    src: unref(getSrc)(item.partModule, item.id),
                    "preview-src-list": [unref(getSrc)(item.partModule, item.id)]
                  }, null, 8, ["src", "preview-src-list"])
                ]),
                createBaseVNode("div", _hoisted_6$1, [
                  createBaseVNode("div", _hoisted_7$1, toDisplayString(item.partName), 1),
                  createBaseVNode("div", _hoisted_8$1, [
                    createBaseVNode("div", null, [
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("supplyAmount")), 1),
                      createBaseVNode("span", null, toDisplayString(item.everyPartIssuerAmout), 1)
                    ]),
                    createBaseVNode("div", null, [
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("probability")), 1),
                      createBaseVNode("span", null, toDisplayString(item.probability), 1)
                    ])
                  ])
                ])
              ]);
            }), 128))
          ])
        ]),
        createBaseVNode("div", _hoisted_9$1, [
          createBaseVNode("div", _hoisted_10$1, toDisplayString(_ctx.$t("authorDescAndDetail")), 1),
          createBaseVNode("div", _hoisted_11$1, [
            createBaseVNode("div", _hoisted_12$1, [
              createBaseVNode("div", _hoisted_13$1, toDisplayString(_ctx.$t("workname")) + "\uFF1A", 1),
              createBaseVNode("div", _hoisted_14$1, toDisplayString(props.nft.nftName), 1)
            ]),
            createBaseVNode("div", _hoisted_15$1, [
              createBaseVNode("div", _hoisted_16$1, toDisplayString(_ctx.$t("workclass")) + "\uFF1A", 1),
              createBaseVNode("div", _hoisted_17$1, [
                props.nft.classify && props.nft.classify.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(props.nft.classify, (item) => {
                  return openBlock(), createElementBlock("span", { key: item }, toDisplayString(item === "avatar" ? _ctx.$t("profilepic") : _ctx.$t(item)), 1);
                }), 128)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  _hoisted_18$1
                ], 2112))
              ])
            ]),
            createCommentVNode(" \u4F5C\u54C1\u94FE\u63A5 "),
            createCommentVNode(` <div
          class="work-detail-item flex flex-align-center"
          v-if="
            props.nft.classify.find(item => item === 'article') &&
              props.nft.classify.find(item => item === 'rights')
          "
        >
          <div class="key">{{ $t('worklink') }}\uFF1A</div>
          <div class="value flex1">
            <a class="link" :href="props.nft.nftWebsite" target="_blank">{{
              $t('workdetaillink')
            }}</a>
          </div>
        </div> `),
            createBaseVNode("div", _hoisted_19$1, [
              createBaseVNode("div", _hoisted_20$1, toDisplayString(_ctx.$t("workdrsc")) + "\uFF1A", 1),
              createBaseVNode("div", _hoisted_21$1, [
                createBaseVNode("pre", null, toDisplayString(props.nft.describe), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_22$1, [
            createBaseVNode("div", _hoisted_23$1, [
              createBaseVNode("div", _hoisted_24$1, toDisplayString(_ctx.$t("createtime")) + "\uFF1A", 1),
              createBaseVNode("div", _hoisted_25$1, toDisplayString(_ctx.$filters.dateTimeFormat(props.nft.forgeTime)), 1)
            ]),
            props.nft.sellTxId !== "" && !props.nft?.uuid ? (openBlock(), createElementBlock("div", _hoisted_26$1, [
              createBaseVNode("div", _hoisted_27$1, toDisplayString(_ctx.$t("contractaddr")) + "\uFF1A", 1),
              createBaseVNode("div", _hoisted_28$1, [
                createTextVNode(toDisplayString(props.nft.sellTxId) + " ", 1),
                createBaseVNode("a", {
                  class: "copy",
                  onClick: _cache[0] || (_cache[0] = ($event) => copy(props.nft.sellTxId))
                }, toDisplayString(_ctx.$t("copy")), 1),
                createBaseVNode("a", {
                  class: "copy",
                  onClick: _cache[1] || (_cache[1] = ($event) => toWhatsonchain(props.nft.sellTxId))
                }, toDisplayString(_ctx.$t("look")), 1)
              ])
            ])) : createCommentVNode("v-if", true),
            createCommentVNode(`
         <div class="work-detail-item flex flex-align-center">
          <div class="key">TokenID\uFF1A</div>
          <div class="value flex1">
            {{ props.nft.tokenId }}
            <a class="copy" @click="copy(props.nft.tokenId)">{{ $t('copy') }}</a>
          </div>
        </div>
       `),
            createCommentVNode(`
        <div class="work-detail-item flex flex-align-center">
          <div class="key">{{ $t('issueMetaTxId') }}\uFF1A</div>
          <div class="value flex1">
            {{ props.nft.issueMetaTxId }}
            <a class="copy" @click="copy(props.nft.issueMetaTxId)">{{ $t('copy') }}</a>
            <a class="copy" @click="toWhatsonchain(props.nft.issueMetaTxId)">
              {{ $t('look') }}
            </a>
          </div>
        </div>
       `)
          ]),
          createBaseVNode("div", _hoisted_29$1, [
            createBaseVNode("div", _hoisted_30$1, [
              createBaseVNode("div", _hoisted_31$1, toDisplayString(_ctx.$t("creater")) + "\uFF1A", 1),
              createBaseVNode("div", _hoisted_32$1, [
                createBaseVNode("div", _hoisted_33$1, [
                  createVNode(_component_UserAvatar, {
                    class: "avatar",
                    metaId: props.nft.foundryMetaId,
                    type: props.nft.issueUserAvatarType
                  }, null, 8, ["metaId", "type"]),
                  createBaseVNode("div", _hoisted_34$1, [
                    createBaseVNode("div", _hoisted_35$1, toDisplayString(props.nft.foundryName), 1),
                    props.nft.foundryMetaId ? (openBlock(), createElementBlock("div", _hoisted_36$1, " MetaID: " + toDisplayString(props.nft.foundryMetaId.slice(0, 6)), 1)) : createCommentVNode("v-if", true)
                  ])
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_37$1, [
              createBaseVNode("div", _hoisted_38$1, toDisplayString(_ctx.$t("haveder")) + "\uFF1A", 1),
              createBaseVNode("div", _hoisted_39$1, [
                createBaseVNode("div", _hoisted_40$1, [
                  createVNode(_component_UserAvatar, {
                    class: "avatar",
                    metaId: props.nft.ownerMetaId,
                    type: props.nft.ownerAvatarType
                  }, null, 8, ["metaId", "type"]),
                  createBaseVNode("div", _hoisted_41$1, [
                    createBaseVNode("div", _hoisted_42$1, toDisplayString(props.nft.ownerName ? props.nft.ownerName : props.nft.ownerAddress), 1),
                    props.nft.ownerMetaId ? (openBlock(), createElementBlock("div", _hoisted_43$1, " MetaID:" + toDisplayString(props.nft.ownerMetaId.slice(0, 6)), 1)) : createCommentVNode("v-if", true)
                  ])
                ])
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_44$1, [
            createBaseVNode("div", _hoisted_45$1, [
              createTextVNode(toDisplayString(_ctx.$t("remark1")), 1),
              createCommentVNode(` <a @click="more">{{ $t('knowmore') }}</a> `)
            ]),
            createBaseVNode("div", _hoisted_46$1, toDisplayString(_ctx.$t("remark2")), 1),
            createBaseVNode("div", _hoisted_47$1, toDisplayString(_ctx.$t("remark3")), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_48$1, [
          createBaseVNode("div", _hoisted_49$1, [
            (openBlock(), createElementBlock(Fragment, null, renderList(tabs, (tab, index) => {
              return createBaseVNode("a", {
                class: normalizeClass({ active: index === tabIndex.value }),
                key: index,
                onClick: ($event) => changeTabIndex(index)
              }, toDisplayString(_ctx.$t(tab.key)), 11, _hoisted_50$1);
            }), 64))
          ]),
          createBaseVNode("div", _hoisted_51$1, [
            createBaseVNode("div", _hoisted_52$1, [
              tabIndex.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_53$1, [
                createBaseVNode("div", _hoisted_54$1, [
                  createBaseVNode("span", _hoisted_55$1, toDisplayString(_ctx.$t("blindboxUser")), 1),
                  _hoisted_56$1,
                  createBaseVNode("span", _hoisted_57$1, toDisplayString(_ctx.$t("blindboxOperation")), 1),
                  createBaseVNode("span", _hoisted_58$1, toDisplayString(_ctx.$t("blindboxAmount")), 1),
                  createBaseVNode("span", _hoisted_59$1, toDisplayString(_ctx.$t("blindboxTime")), 1)
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(historyRecords), (record, index) => {
                  return openBlock(), createElementBlock("div", {
                    class: "tr flex flex-align-center",
                    key: record.id
                  }, [
                    createBaseVNode("div", _hoisted_60$1, [
                      createBaseVNode("img", {
                        src: _ctx.$filters.avatar(record.metaid),
                        alt: ""
                      }, null, 8, _hoisted_61$1),
                      createBaseVNode("span", null, toDisplayString(record.name), 1)
                    ]),
                    createBaseVNode("div", _hoisted_62$1, [
                      createBaseVNode("span", null, toDisplayString(record.metaid.slice(0, 6)), 1)
                    ]),
                    createBaseVNode("div", _hoisted_63$1, [
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("buyBlindBox")) + "\xA0", 1),
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("metabotBlindBox")), 1)
                    ]),
                    createBaseVNode("div", _hoisted_64$1, [
                      createBaseVNode("span", null, toDisplayString(record.quantity), 1)
                    ]),
                    createBaseVNode("div", _hoisted_65$1, [
                      createBaseVNode("span", null, toDisplayString(_ctx.$filters.dateTimeFormat(+record.create_time, "YYYY-MM-DD HH:mm")), 1)
                    ])
                  ]);
                }), 128))
              ])) : createCommentVNode("v-if", true),
              tabIndex.value === 1 ? (openBlock(), createElementBlock("div", _hoisted_66$1, [
                createBaseVNode("div", _hoisted_67$1, [
                  createBaseVNode("span", _hoisted_68$1, toDisplayString(_ctx.$t("blindboxUser")), 1),
                  _hoisted_69$1,
                  createBaseVNode("span", _hoisted_70$1, toDisplayString(_ctx.$t("blindboxOperation")), 1),
                  createBaseVNode("span", _hoisted_71$1, toDisplayString(_ctx.$t("blindboxTime")), 1)
                ]),
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(openRecords), (record, index) => {
                  return openBlock(), createElementBlock("div", {
                    class: "tr flex flex-align-center",
                    key: record.id
                  }, [
                    createBaseVNode("div", _hoisted_72$1, [
                      createBaseVNode("img", {
                        src: _ctx.$filters.avatar(record.avatar_txid),
                        alt: ""
                      }, null, 8, _hoisted_73$1),
                      createBaseVNode("span", null, toDisplayString(record.name), 1)
                    ]),
                    createBaseVNode("div", _hoisted_74$1, [
                      createBaseVNode("span", null, toDisplayString(record.metaid?.slice(0, 6)), 1)
                    ]),
                    createBaseVNode("div", _hoisted_75$1, [
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("openOneBlindBox")) + "\xA0", 1),
                      createBaseVNode("span", null, toDisplayString(record.metabot_avatar_name), 1)
                    ]),
                    createBaseVNode("div", _hoisted_76$1, [
                      createBaseVNode("span", null, toDisplayString(_ctx.$filters.dateTimeFormat(+record.create_time, "YYYY-MM-DD HH:mm")), 1)
                    ])
                  ]);
                }), 128))
              ])) : createCommentVNode("v-if", true)
            ]),
            tabIndex.value === 0 ? (openBlock(), createElementBlock("div", _hoisted_77$1, [
              createBaseVNode("span", { onClick: loadMore }, toDisplayString(historyRecordsNoData.value ? _ctx.$t("noMoreRecord") : _ctx.$t("getRecordMore")), 1)
            ])) : (openBlock(), createElementBlock("div", _hoisted_78$1, [
              createBaseVNode("span", { onClick: loadMore }, toDisplayString(openRecordsNoData.value ? _ctx.$t("noMoreRecord") : _ctx.$t("getRecordMore")), 1)
            ]))
          ])
        ]),
        _hoisted_79$1
      ]);
    };
  }
});
var PartDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-67f17f1d"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/BlindBox/partDetail.vue"]]);

var Detail_scss_vue_type_style_index_0_src_40f4caea_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-40f4caea"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "nft-detail" };
const _hoisted_2 = { class: "top flex container" };
const _hoisted_3 = {
  key: 0,
  class: "cover"
};
const _hoisted_4 = {
  key: 1,
  class: "partDetailContainer"
};
const _hoisted_5 = {
  key: 2,
  class: "product-intro"
};
const _hoisted_6 = { class: "work-detail-item flex flex-align-baseline" };
const _hoisted_7 = { class: "value flex1" };
const _hoisted_8 = { class: "work-deail-section" };
const _hoisted_9 = { class: "work-detail-item flex flex-align-center flex-pack-justify" };
const _hoisted_10 = { class: "key flex1" };
const _hoisted_11 = { class: "value flex1" };
const _hoisted_12 = {
  key: 0,
  class: "work-detail-item flex"
};
const _hoisted_13 = { class: "flex1 key" };
const _hoisted_14 = { class: "value flex1 nowrap" };
const _hoisted_15 = { class: "container" };
const _hoisted_16 = { class: "clip" };
const _hoisted_17 = { class: "work-detail-item flex" };
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "flex1 key" }, "TokenID", -1));
const _hoisted_19 = { class: "value flex1 nowrap" };
const _hoisted_20 = { class: "work-detail-item flex" };
const _hoisted_21 = { class: "flex1 key" };
const _hoisted_22 = { class: "value flex1 nowrap" };
const _hoisted_23 = { class: "container" };
const _hoisted_24 = { class: "clip" };
const _hoisted_25 = {
  key: 3,
  class: "remark"
};
const _hoisted_26 = { class: "remark-item" };
const _hoisted_27 = { class: "remark-item" };
const _hoisted_28 = { class: "remark-item" };
const _hoisted_29 = { class: "cont flex1 flex flex-v" };
const _hoisted_30 = { class: "name flex flex-align-center flex-pack-justify" };
const _hoisted_31 = { class: "text flex1" };
const _hoisted_32 = {
  key: 0,
  src: _imports_3
};
const _hoisted_33 = {
  key: 1,
  src: _imports_4
};
const _hoisted_34 = { class: "num" };
const _hoisted_35 = { class: "user-item flex flex-align-center" };
const _hoisted_36 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "avatar",
  src: _imports_0,
  alt: ""
}, null, -1));
const _hoisted_37 = { class: "username" };
const _hoisted_38 = ["src"];
const _hoisted_39 = ["src"];
const _hoisted_40 = {
  key: 0,
  class: "cover"
};
const _hoisted_41 = { class: "sale-container" };
const _hoisted_42 = { class: "drsc flex1 flex flex-v" };
const _hoisted_43 = { class: "title flex flex-align-center" };
const _hoisted_44 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "avatar",
  src: _imports_1,
  alt: ""
}, null, -1));
const _hoisted_45 = { class: "own-name" };
const _hoisted_46 = { class: "cont" };
const _hoisted_47 = { key: 0 };
const _hoisted_48 = /* @__PURE__ */ createTextVNode(" ... ");
const _hoisted_49 = { class: "putAway-msg flex flex-align-center" };
const _hoisted_50 = {
  key: 0,
  class: "blindBoxRestWrap"
};
const _hoisted_51 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "timeleft flex1" }, null, -1));
const _hoisted_52 = {
  key: 1,
  class: "my-sell-price"
};
const _hoisted_53 = {
  key: 0,
  class: "auction-msg flex flex-align-center"
};
const _hoisted_54 = { class: "auction-msg-item flex1" };
const _hoisted_55 = { class: "title" };
const _hoisted_56 = {
  key: 0,
  class: "cont"
};
const _hoisted_57 = {
  key: 0,
  class: "auction-msg-item"
};
const _hoisted_58 = { class: "title" };
const _hoisted_59 = { class: "cont" };
const _hoisted_60 = { class: "count-down" };
const _hoisted_61 = { class: "operate-warp flex flex-align-center" };
const _hoisted_62 = { class: "flex1" };
const _hoisted_63 = { class: "auctionFailTips" };
const _hoisted_64 = {
  key: 1,
  class: "btn btn-block btn-gray flex1 flex flex-align-center flex-pack-center"
};
const _hoisted_65 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "dot" }, null, -1));
const _hoisted_66 = {
  key: 0,
  class: "flex flex-align-center putAway-warp flex1"
};
const _hoisted_67 = {
  key: 1,
  class: "buy-fee-tips"
};
const _hoisted_68 = { class: "haved-record-section" };
const _hoisted_69 = { class: "haved-record" };
const _hoisted_70 = { class: "tr th flex flex-align-center" };
const _hoisted_71 = { class: "td flex1" };
const _hoisted_72 = { class: "td flex1" };
const _hoisted_73 = { class: "td flex1" };
const _hoisted_74 = { class: "td price flex1" };
const _hoisted_75 = ["src"];
const _hoisted_76 = ["onClick"];
const _hoisted_77 = ["src", "alt"];
const _hoisted_78 = { class: "name" };
const _hoisted_79 = { class: "td role flex1 flex flex-align-center" };
const _hoisted_80 = ["src"];
const _hoisted_81 = { class: "td time flex1" };
const _hoisted_82 = { class: "td price flex1" };
const _hoisted_83 = ["onClick"];
const _hoisted_84 = ["src"];
const _hoisted_85 = {
  key: 1,
  class: "historical-bid"
};
const _hoisted_86 = { class: "author flex1 flex flex-align-center" };
const _hoisted_87 = { class: "author-msg flex1" };
const _hoisted_88 = { class: "creater" };
const _hoisted_89 = {
  key: 0,
  class: "metaid"
};
const _hoisted_90 = { class: "auction-price" };
const _hoisted_91 = { class: "price flex flex-align-center" };
const _hoisted_92 = {
  key: 0,
  class: "btn btn-min"
};
const _hoisted_93 = { class: "title" };
const _hoisted_94 = { class: "amount" };
const _hoisted_95 = { class: "time" };
const _hoisted_96 = { class: "historical-bid-item flex flex-align-center" };
const _hoisted_97 = { class: "author flex1 flex flex-align-center" };
const _hoisted_98 = { class: "author-msg flex1" };
const _hoisted_99 = { class: "creater" };
const _hoisted_100 = {
  key: 0,
  class: "metaid"
};
const _hoisted_101 = { class: "auction-price" };
const _hoisted_102 = { class: "price flex flex-align-center" };
const _hoisted_103 = { class: "title" };
const _hoisted_104 = { class: "amount" };
const _hoisted_105 = {
  key: 1,
  class: "remark"
};
const _hoisted_106 = { class: "remark-item" };
const _hoisted_107 = { class: "remark-item" };
const _hoisted_108 = { class: "remark-item" };
const _hoisted_109 = { class: "auction-modal" };
const _hoisted_110 = { class: "title" };
const _hoisted_111 = { class: "msg-list" };
const _hoisted_112 = { class: "msg-item flex flex-align-center" };
const _hoisted_113 = { class: "key flex1" };
const _hoisted_114 = {
  key: 0,
  class: "value"
};
const _hoisted_115 = { class: "msg-item flex flex-align-center" };
const _hoisted_116 = { class: "key flex1" };
const _hoisted_117 = {
  key: 0,
  class: "value"
};
const _hoisted_118 = { class: "cont flex flex-align-center" };
const _hoisted_119 = ["min", "setp"];
const _hoisted_120 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "BSV", -1));
const _hoisted_121 = { class: "msg-list haved-bsv" };
const _hoisted_122 = { class: "msg-item flex flex-align-center" };
const _hoisted_123 = { class: "key flex1" };
const _hoisted_124 = { class: "value" };
const _hoisted_125 = ["src"];
const _hoisted_126 = { class: "auctionFailTips" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const i18n = useI18n();
    const route = useRoute();
    const store = useStore();
    new Date().getTime();
    const tabs = [
      { name: i18n.t("workdetail"), key: "workdetail" },
      { name: i18n.t("possessionrecord"), key: "possessionrecord" }
    ];
    const tabIndex = ref(0);
    const isShowSkeleton = ref(true);
    const isShowDrscDetail = ref(false);
    const isShowAuctionModal = ref(false);
    const isShowConfirm = ref(false);
    const cnyMode = computed$1(() => {
      return store.state.currentPrice === UnitName.RMB;
    });
    const isShowMobile = window.screen.width < 500;
    const activeNames = ref(["1", "2"]);
    const nftExtraFeePercent = ref(0);
    const nftRoyaltyPercent = ref(0);
    const nftPlatformPercent = ref(0);
    const nftRoyaltyFee = computed$1(() => {
      let fee = 0;
      if (nft.val) {
        if (auctionPrice.value) {
          fee = Math.ceil(new Decimal(satoshis(auctionPrice.value)).mul(nftRoyaltyPercent.value / 100).toNumber());
        } else {
          fee = Math.ceil(new Decimal(nft.val.amount).mul(nftRoyaltyPercent.value / 100).toNumber());
        }
      }
      return bsv(fee);
    });
    const blindBoxPage = computed$1(() => {
      return route.name === "blindBoxDetail";
    });
    const isLegal = computed$1(() => {
      return route.name === "legaldetail";
    });
    computed$1(() => {
      console.log("xzzxzxxxxxxzxzxz", price.value);
      return toCNY(nft.val.nftPrice).toFixed(2);
    });
    const blindBoxPrice = computed$1(() => {
      if (cnyMode.value) {
        return new Decimal(nft.val.rmbPrice * 0.01).toFixed(2);
      } else {
        return new Decimal(nft.val.bsvPrice).div(Math.pow(10, 8)).toNumber();
      }
    });
    const nftExtraFee = computed$1(() => {
      let fee = 0;
      if (nftExtraFeePercent.value && nft.val) {
        if (auctionPrice.value) {
          fee = Math.ceil(new Decimal(satoshis(auctionPrice.value)).mul(nftExtraFeePercent.value).toNumber());
        } else {
          fee = Math.ceil(new Decimal(nft.val.amount).mul(nftExtraFeePercent.value).toNumber());
        }
      }
      return bsv(fee);
    });
    const nftPlatformFee = computed$1(() => {
      let fee = 0;
      if (nft.val) {
        if (auctionPrice.value) {
          fee = Math.ceil(new Decimal(satoshis(auctionPrice.value)).mul(nftPlatformPercent.value / 100).toNumber());
        } else {
          fee = Math.ceil(new Decimal(nft.val.amount).mul(nftPlatformPercent.value / 100).toNumber());
        }
      }
      return bsv(fee);
    });
    const nftAuctionExtraFeeText = computed$1(() => {
      return `${i18n.t("buyFeeTips")}: ${i18n.t("buyFeeTips3")}(${nftPlatformPercent.value + nftRoyaltyPercent.value}%) = ${nftPlatformFee.value + nftRoyaltyFee.value} BSV ${auctionPrice.value ? i18n.t("auctionFeeTips") : ""}`;
    });
    const auctionBtnClassGray = computed$1(() => {
      if (nft.val.auctionStatus === 2) {
        return false;
      } else if (nft.val.auctionStatus === 3) {
        if (store.state.userInfo && store.state.userInfo.metaId === nft.val.ownerMetaId) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    });
    computed$1(() => {
      return `${i18n.t("buyFeeTips")}: ${nftRoyaltyPercent.value ? `${i18n.t("buyFeeTips2")}(${nftRoyaltyPercent.value}%) = ${nftRoyaltyFee.value} BSV;` : ""}  ${i18n.t("buyFeeTips3")}(${nftPlatformPercent.value}%) = ${nftPlatformFee.value} BSV ${auctionPrice.value ? i18n.t("auctionFeeTips") : ""}`;
    });
    const balance = ref(0);
    const getBalanceLoading = ref(true);
    const auctionRecords = reactive([]);
    const ownerHistoryPagination = reactive({
      ...pagination
    });
    const nft = reactive({
      val: null
    });
    const auctionPrice = ref(0);
    const minActionPrice = ref(0);
    const price = ref("0");
    watch(() => [store.state.currentPrice, nft.val], (newVal) => {
      if (newVal[0] && newVal[1]) {
        if (isLegal.value) {
          price.value = legalNftConverterPrice(newVal[1].nftPrice);
        } else {
          price.value = converterPrice(newVal[1].amount);
        }
      }
    }, { immediate: true });
    function getDetail() {
      return new Promise(async (resolve) => {
        let _nft;
        if (route.name === "legaldetail") {
          const res = await GetLegalNftDetail({
            uuid: typeof route.params.uuid === "string" ? route.params.uuid : ""
          }).catch(() => isShowSkeleton.value = false);
          if (res?.code == 0) {
            _nft = res.data;
          }
        } else if (blindBoxPage.value) {
          try {
            const blindBoxRes = await GetBlindBoxSaleDetail();
            if (blindBoxRes.code == 0) {
              _nft = blindBoxRes.data;
            }
          } catch {
            isShowSkeleton.value = false;
          }
        } else {
          _nft = await NFTDetail(typeof route.params.genesisId === "string" ? route.params.genesisId : "", typeof route.params.codehash === "string" ? route.params.codehash : "", typeof route.params.tokenIndex === "string" ? route.params.tokenIndex : "").catch(() => isShowSkeleton.value = false);
        }
        if (_nft && typeof _nft !== "boolean") {
          nft.val = _nft;
          if (route.name === "legaldetail") {
            nft.val.classify = _nft.nftClassifyList;
            nft.val.foundryMetaId = _nft.nftIssueMetaId;
            nft.val.issueUserAvatarType = _nft.nftIssueAvatarType;
            nft.val.foundryName = _nft.nftIssuer;
            nft.val.coverUrl = _nft.nftBackIcon || _nft.nftIcon;
            nft.val.putAway = true;
            nft.val.ownerMetaId = _nft.nftOwnerMetaId;
            nft.val.ownerAvatarType = _nft.nftOwnerAvatarType;
            nft.val.ownerName = _nft.nftOwnerName;
            nft.val.describe = _nft.nftDesc;
            nft.val.tokenId = _nft.nftTokenId;
            nft.val.issueMetaTxId = _nft.nftIssueMetaTxId;
            nft.val.genesis = _nft.nftGenesis;
            nft.val.codeHash = _nft.nftCodehash;
            nft.val.tokenIndex = _nft.nftTokenIndex;
            nft.val.sellState = _nft.nftSellState;
            nft.val.sellDesc = _nft.nftSellDesc;
          }
          if (blindBoxPage.value) {
            nft.val.nftName = "MetaBot\u5F62\u8C61\u76F2\u76D2";
            nft.val.classify = [`${i18n.t("fragment")}`];
            nft.val.describe = _nft.sellDesc;
            nft.val.forgeTime = 0;
            nft.val.tokenId = "";
            nft.val.sellTxId = "";
            nft.val.foundryName = "ShowPayTeam";
            nft.val.nftIssuer = "ShowPayTeam";
            nft.val.foundryMetaId = "974e2977d5c9446f7f48fd82c9ea51f82749b9ef7c00d26b73bc450d167d5f31";
            nft.val.issueUserAvatarType = "MetaBotAvatar";
            nft.val.nftIssueAvatarType = "MetaBotAvatar";
            nft.val.nftIssueMetaId = "974e2977d5c9446f7f48fd82c9ea51f82749b9ef7c00d26b73bc450d167d5f31";
            nft.val.nftOwnerAvatarType = "MetaBotAvatar";
            nft.val.nftOwnerName = "ShowPayTeam";
            nft.val.nftOwnerMetaId = "974e2977d5c9446f7f48fd82c9ea51f82749b9ef7c00d26b73bc450d167d5f31";
            nft.val.ownerMetaId = "974e2977d5c9446f7f48fd82c9ea51f82749b9ef7c00d26b73bc450d167d5f31";
            nft.val.ownerName = "ShowPayTeam";
            nft.val.limited = 9560;
            nft.val.round = _nft.round;
            nft.val.total = _nft.total;
            nft.val.remain = _nft.remain < 0 ? 0 : _nft.remain;
            nft.val.sellState = _nft.remain > 0 ? 0 : 1;
            nft.val.putAway = _nft.remain > 0;
          }
          console.log("zxzxzx222asas", nft.val);
          if (nft.val.nftCurrentAuctionCreateTxId && nft.val.nftCurrentAuctionCreateTxId !== "" && !isLegal.value) {
            nft.val.isAuction = true;
            const _tabIndex = tabs.findIndex((item) => item.key === "historicalBid");
            if (_tabIndex === -1) {
              tabs.push({ name: i18n.t("historicalBid"), key: "historicalBid" });
            }
            tabIndex.value = 2;
            const res = await GetNftAuctionDetail(nft.val.nftCurrentAuctionCreateTxId);
            if (res.code === 0) {
              nft.val.auctionMetaId = res.data.metaId;
              nft.val.auctionUserName = res.data.userName;
              nft.val.auctionAvatarType = res.data.avatarType;
              nft.val.auctionId = res.data.nftAuctionId;
              nft.val.startPrice = bsvStr(res.data.startingPrice);
              nft.val.amount = bsv(res.data.startingPriceInt);
              nft.val.currentPrice = res.data.currentBidPrice === "" || res.data.currentBidPrice === "0" ? new Decimal(res.data.startingPrice).toNumber() : new Decimal(res.data.currentBidPrice).toNumber();
              nft.val.minGapPrice = Math.ceil(new Decimal(nft.val.currentPrice).mul(new Decimal(nft.val.nftMinBidIncreaseInt).div(100).toNumber()).toNumber());
              nft.val.auctionTime = res.data.endTimeStamp - new Date().getTime();
              nft.val.auctionStatus = res.data.currentAuctionState;
              nft.val.update_time = res.data.timestamp;
              auctionPrice.value = bsv(new Decimal(nft.val.currentPrice).plus(nft.val.minGapPrice).toNumber());
              minActionPrice.value = auctionPrice.value;
              getNftAuctionHistorys();
            }
          }
          if (route.name !== "legaldetail") {
            await getNftFeePercent();
          } else {
            await getlegalFeePercent(_nft);
          }
          isShowSkeleton.value = false;
        }
        resolve();
      });
    }
    const records = reactive([]);
    const ownerRecord = reactive({
      val: null
    });
    const issueRecord = reactive({
      val: null
    });
    function auctionCountDownFinish() {
      if (nft.val.auctionStatus === 2) {
        nft.val.auctionStatus = 3;
      }
    }
    function transformSlotProps(props) {
      const formattedProps = {};
      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });
      return formattedProps;
    }
    function copy(value) {
      toClipboard(value).then(() => {
        ElMessage.success(i18n.t("copysuccess"));
      }).catch(() => {
        ElMessage.success(i18n.t("copyerror"));
      });
    }
    ref(0);
    ref(0);
    ref(0);
    ref(0);
    const NFTMainMsgDesc = computed$1(() => {
      return nft.val.isAuction ? nft.val.describe : nft.val.putAway ? nft.val.sellDesc : nft.val.describe;
    });
    function offSale() {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        customClass: "full-loading"
      });
      ElMessageBox.confirm(`${i18n.t("offsaleConfirm")} ${nft.val.nftName} ?`, i18n.t("niceWarning"), {
        confirmButtonText: i18n.t("confirm"),
        cancelButtonText: i18n.t("cancel"),
        closeOnClickModal: false
      }).then(async () => {
        if (route.name === "legaldetail") {
          loading.close();
        } else {
          NftOffSale(nft.val, loading).then(() => {
            loading.close();
          }).catch(() => {
            loading.close();
          });
        }
      }).catch(() => loading.close());
    }
    function startBuy() {
      if (store.state.blindboxLimitedTime && blindBoxPage.value) {
        return ElMessage.error(`${i18n.t("blindboxOverTime")}`);
      }
      if (nft.val.remain <= 0 && blindBoxPage.value) {
        router.push("/collection/detail/MetaBotAvatar/974e2977d5c9446f7f48fd82c9ea51f82749b9ef7c00d26b73bc450d167d5f31");
      }
      if (nft.val.sellState !== 0)
        return;
      if (isLegal.value && !cnyMode.value) {
        return ElMessage.error(`${i18n.t("notSupportBsvBuyLegal")}`);
      }
      isShowConfirm.value = true;
    }
    async function buySuccess(result) {
      console.log("xzx2222asa", result);
      nft.val.ownerMetaId = store.state.userInfo.metaId;
      nft.val.ownerName = store.state.userInfo.name;
      nft.val.putAway = false;
      isShowConfirm.value = false;
      router.replace({
        name: "nftSuccess",
        params: {
          genesisId: nft.val.genesis,
          tokenIndex: nft.val.tokenIndex,
          codehash: nft.val.codeHash
        },
        query: {
          type: result.uuid ? "buylegal" : "buyed",
          uuid: result.uuid ? result.uuid : ""
        }
      });
    }
    async function toSale() {
      const res = await GetMyNftEligibility({
        MetaId: store.state.userInfo.metaId,
        IssueMetaId: nft.val.foundryMetaId,
        lang: i18n.locale.value === "en" ? Langs.EN : Langs.CN
      });
      if (res.code !== 0) {
        ElMessage.error(res.data);
        return;
      }
      router.push({
        name: "sale",
        params: {
          genesisId: nft.val.genesis,
          codehash: nft.val.codeHash,
          tokenIndex: nft.val.tokenIndex
        }
      });
    }
    async function getBalance() {
      const res = await store.state.sdk?.getBalance();
      if (res?.code === 200) {
        balance.value = res.data.bsv;
        getBalanceLoading.value = false;
      }
    }
    function onAuctionPriceChange() {
      if (new Decimal(auctionPrice.value).toNumber() < new Decimal(minActionPrice.value).toNumber()) {
        auctionPrice.value = minActionPrice.value;
      }
    }
    function toWallet() {
      window.open("https://www.showmoney.app");
    }
    async function openAuctionModal() {
      if (nft.val.auctionStatus === 3 && store.state.userInfo && store.state.userInfo.metaId === nft.val.ownerMetaId) {
        const loading = ElLoading.service({
          lock: true,
          text: "Loading",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)",
          customClass: "full-loading"
        });
        const params = {
          nft: {
            codehash: nft.val.codeHash,
            genesis: nft.val.genesis,
            genesisTxid: nft.val.genesisTxId,
            tokenIndex: nft.val.tokenIndex,
            sensibleId: nft.val.sensibleId
          },
          issueAddress: nft.val.nftIssueAddress,
          issueMetaId: nft.val.nftIssueMetaId,
          nftAuctionId: nft.val.nftCurrentAuctionCreateTxId,
          amount: nft.val.currentPrice ? satoshis(nft.val.currentPrice) : satoshis(nft.val.startPrice),
          isFirstSell: nft.val.nftIsFirstSell
        };
        const result = await await auctionConfirmSend(params).catch((error) => {
          if (error)
            ElMessage.error(JSON.stringify(error));
          loading.close();
        });
        if (result) {
          setTimeout(() => {
            ElMessage.success(i18n.t("success"));
            loading.close();
            getDetail();
          }, 2e3);
        }
      }
      if (nft.val.auctionStatus !== 2)
        return;
      await checkSdkStatus();
      isShowAuctionModal.value = true;
      getBalance();
    }
    async function bid() {
      if (new Decimal(balance.value).toNumber() < new Decimal(auctionPrice.value).toNumber())
        return;
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        customClass: "full-loading"
      });
      try {
        const params = {
          nft: {
            codehash: nft.val.codeHash,
            genesis: nft.val.genesis,
            genesisTxid: nft.val.genesisTxId,
            tokenIndex: nft.val.tokenIndex,
            sensibleId: nft.val.sensibleId
          },
          lastBsvBidPrice: nft.val.currentPrice,
          bsvBidPrice: satoshis(auctionPrice.value),
          nftAuctionId: nft.val.nftCurrentAuctionCreateTxId
        };
        const res = await store.state.sdk?.nftAuctionBid({
          ...params,
          checkOnly: true
        });
        if (res?.code === 200) {
          const usedAmount = new Decimal(Math.abs(res.data.amount)).toNumber();
          const result = await confirmToSendMetaData(usedAmount);
          if (result) {
            const response = await store.state.sdk?.nftAuctionBid(params);
            if (response && response?.code === 200) {
              ElMessage.success(i18n.t("bidSuccess"));
              nft.val.currentPrice = satoshis(auctionPrice.value);
              nft.val.minGapPrice = Math.ceil(new Decimal(nft.val.currentPrice).mul(new Decimal(nft.val.nftMinBidIncreaseInt).div(100).toNumber()).toNumber());
              minActionPrice.value = new Decimal(nft.val.currentPrice).plus(nft.val.minGapPrice).toNumber();
              auctionPrice.value = bsv(minActionPrice.value);
              isShowAuctionModal.value = false;
              auctionRecords.unshift({
                bidPrice: nft.val.currentPrice.toString(),
                bidPriceInt: nft.val.currentPrice,
                chargeUnit: "bsv",
                codehash: nft.val.codeHash,
                genesis: nft.val.genesis,
                genesisTxId: nft.val.genesisTxId,
                issuerMetaId: nft.val.foundryMetaId,
                issuerMetaTxId: nft.val.issueMetaTxId,
                metaId: store.state.userInfo.metaId,
                metanetId: "",
                nftAuctionId: response.data.txId,
                nftHash: "",
                tokenIndex: nft.val.tokenIndex,
                txId: response.data.txId,
                zeroAddress: store.state.userInfo.address,
                timestamp: new Date().getTime(),
                userName: store.state.userInfo.name
              });
              loading.close();
            }
          }
        }
      } catch (error) {
        getDetail();
        ElMessage.error(i18n.t("bidFail"));
        if (loading)
          loading.close();
      }
    }
    async function getNftAuctionHistorys() {
      const res = await GetNftAuctionHistory({
        auctionTxId: nft.val.nftCurrentAuctionCreateTxId,
        page: 1,
        pageSize: 99
      });
      if (res.code === 0) {
        auctionRecords.length = 0;
        auctionRecords.push(...res.data.results.items);
      }
    }
    async function getNftHolderList(isCover = false) {
      return new Promise(async (resolve) => {
        let res;
        if (route.name === "legaldetail") {
          res = await GetNftHolderList({
            genesis: nft.val.nftGenesis ? nft.val.nftGenesis : "",
            codehash: nft.val.nftCodehash ? nft.val.nftCodehash : "",
            tokenIndex: nft.val.nftTokenIndex ? nft.val.nftTokenIndex : "",
            page: ownerHistoryPagination.page.toString(),
            pageSize: ownerHistoryPagination.pageSize.toString()
          });
          console.log("x222xzxz", res);
        } else {
          res = await GetNftHolderList({
            genesis: typeof route.params.genesisId === "string" ? route.params.genesisId : "",
            codehash: typeof route.params.codehash === "string" ? route.params.codehash : "",
            tokenIndex: typeof route.params.tokenIndex === "string" ? route.params.tokenIndex : "",
            page: ownerHistoryPagination.page.toString(),
            pageSize: ownerHistoryPagination.pageSize.toString()
          });
        }
        if (res && res.code === NftApiCode.success) {
          if (isCover) {
            records.length = 0;
          }
          records.push(...res.data.results.items.holderList);
          console.log("x222xxxxxxxxxxxzxz", records);
          ownerRecord.val = res.data.results.items.owner;
          issueRecord.val = res.data.results.items.issuer;
          const totalPages = Math.ceil(res.data.total / ownerHistoryPagination.pageSize);
          if (totalPages <= ownerHistoryPagination.page) {
            ownerHistoryPagination.nothing = true;
          }
        }
      });
    }
    function getMoreRecords() {
      ownerHistoryPagination.loading = true;
      ownerHistoryPagination.page++;
      getNftHolderList().then(() => {
        ownerHistoryPagination.loading = false;
      });
    }
    async function payLike() {
      if (nft.val.nftHasLike)
        return;
      await checkSdkStatus();
      const res = await store.state.sdk.addPayLikeProtocol({
        receiveAddress: nft.val.ownerAddress,
        txId: nft.val.issueMetaTxId
      });
      if (res.code === 200) {
        ElMessage.success(i18n.t("payLikeSuccess"));
        nft.val.nftHasLike = true;
        nft.val.nftLikeCount++;
      }
    }
    async function getlegalFeePercent(value) {
      return new Promise(async (resolve) => {
        const res = await GetFeeInfo({
          codehash: value.nftCodehash,
          genesis: value.nftGenesis
        });
        if (res.code === 0) {
          nftPlatformPercent.value = nft.val.nftIsFirstSell ? res.data.first_platform : res.data.other_platform;
          nftRoyaltyPercent.value = nft.val.nftIsFirstSell ? res.data.first_royalty : res.data.other_royalty;
        }
        resolve();
      });
    }
    async function getNftFeePercent() {
      return new Promise(async (resolve) => {
        const res = await GetFeeInfo({
          codehash: route.params.codehash,
          genesis: route.params.genesisId
        });
        if (res.code === 0) {
          nftPlatformPercent.value = nft.val.nftIsFirstSell ? res.data.first_platform : res.data.other_platform;
          nftRoyaltyPercent.value = nft.val.nftIsFirstSell ? res.data.first_royalty : res.data.other_royalty;
        }
        resolve();
      });
    }
    function blindBoxCutDown() {
      store.commit(Mutation.GetLimitedTime, 0);
    }
    onMounted(() => {
      if (route.params.genesisId && route.params.codehash && route.params.tokenIndex) {
        getDetail();
        getNftHolderList();
      }
      if (route.params?.uuid) {
        getDetail();
      }
      if (blindBoxPage.value) {
        getDetail();
      }
    });
    return (_ctx, _cache) => {
      const _component_ElCollapseItem = ElCollapseItem;
      const _component_ElCollapse = ElCollapse;
      const _component_ElPopover = ElPopover;
      const _component_UserAvatar = resolveComponent("UserAvatar");
      const _component_ElSkeleton = ElSkeleton;
      const _component_ElDialog = ElDialog;
      const _directive_loading = resolveDirective("loading");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(_component_ElSkeleton, {
            loading: isShowSkeleton.value,
            animated: ""
          }, {
            template: withCtx(() => [
              createVNode(DetailSkeletonVue)
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", null, [
                  createCommentVNode(" \u5C01\u9762\u56FE "),
                  !isShowMobile ? (openBlock(), createElementBlock("div", _hoisted_3, [
                    createVNode(NFTCover, {
                      needGizp: true,
                      cover: [
                        _ctx.$filters.metafile(unref(nft).val.coverUrl, 500),
                        unref(nft).val.nftBackIcon ? unref(nft).val.nftBackIcon : void 0
                      ],
                      "is-show-prew": true,
                      "is-lazy": false,
                      "is-remint": unref(nft).val.nftHasCompound,
                      isBlindBox: unref(blindBoxPage),
                      blindBoxRest: unref(nft).val.remain
                    }, null, 8, ["cover", "is-remint", "isBlindBox", "blindBoxRest"])
                  ])) : createCommentVNode("v-if", true),
                  unref(blindBoxPage) ? (openBlock(), createElementBlock("div", _hoisted_4, [
                    createVNode(PartDetail, {
                      nft: unref(nft).val
                    }, null, 8, ["nft"])
                  ])) : (openBlock(), createElementBlock("div", _hoisted_5, [
                    createVNode(_component_ElCollapse, {
                      modelValue: activeNames.value,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => activeNames.value = $event)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_ElCollapseItem, { name: "1" }, {
                          title: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("workdrsc")), 1)
                          ]),
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_6, [
                              createBaseVNode("div", _hoisted_7, [
                                createBaseVNode("pre", null, toDisplayString(unref(nft).val.describe), 1)
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_ElCollapseItem, { name: "2" }, {
                          title: withCtx(() => [
                            createTextVNode(toDisplayString(_ctx.$t("authorDescAndDetail")), 1)
                          ]),
                          default: withCtx(() => [
                            createBaseVNode("div", _hoisted_8, [
                              createBaseVNode("div", _hoisted_9, [
                                createBaseVNode("div", _hoisted_10, toDisplayString(_ctx.$t("createtime")), 1),
                                createBaseVNode("div", _hoisted_11, toDisplayString(_ctx.$filters.dateTimeFormat(unref(nft).val.forgeTime)), 1)
                              ]),
                              unref(nft).val.sellTxId !== "" && !unref(nft).val?.uuid ? (openBlock(), createElementBlock("div", _hoisted_12, [
                                createBaseVNode("div", _hoisted_13, toDisplayString(_ctx.$t("contractaddr")), 1),
                                createBaseVNode("div", _hoisted_14, [
                                  createBaseVNode("a", {
                                    class: "copy",
                                    onClick: _cache[0] || (_cache[0] = ($event) => copy(unref(nft).val.sellTxId))
                                  }, [
                                    createBaseVNode("div", _hoisted_15, [
                                      createBaseVNode("span", null, toDisplayString(unref(nft).val.sellTxId), 1),
                                      createBaseVNode("span", _hoisted_16, toDisplayString(unref(nft).val.sellTxId), 1)
                                    ])
                                  ])
                                ])
                              ])) : createCommentVNode("v-if", true),
                              createBaseVNode("div", _hoisted_17, [
                                _hoisted_18,
                                createBaseVNode("div", _hoisted_19, [
                                  createTextVNode(toDisplayString(unref(nft).val.tokenId) + " ", 1),
                                  createBaseVNode("a", {
                                    class: "copy",
                                    onClick: _cache[1] || (_cache[1] = ($event) => copy(unref(nft).val.tokenId))
                                  }, [
                                    createBaseVNode("span", null, toDisplayString(unref(nft).val.tokenId), 1)
                                  ])
                                ])
                              ]),
                              createBaseVNode("div", _hoisted_20, [
                                createBaseVNode("div", _hoisted_21, toDisplayString(_ctx.$t("issueMetaTxId")), 1),
                                createBaseVNode("div", _hoisted_22, [
                                  createBaseVNode("a", {
                                    class: "copy",
                                    onClick: _cache[2] || (_cache[2] = ($event) => copy(unref(nft).val.issueMetaTxId))
                                  }, [
                                    createBaseVNode("div", _hoisted_23, [
                                      createBaseVNode("span", null, toDisplayString(unref(nft).val.issueMetaTxId), 1),
                                      createBaseVNode("span", _hoisted_24, toDisplayString(unref(nft).val.issueMetaTxId), 1)
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ])),
                  isShowMobile ? (openBlock(), createElementBlock("div", _hoisted_25, [
                    createBaseVNode("div", _hoisted_26, [
                      createTextVNode(toDisplayString(_ctx.$t("remark1")), 1),
                      createCommentVNode(` <a @click="more">{{ $t('knowmore') }}</a> `)
                    ]),
                    createBaseVNode("div", _hoisted_27, toDisplayString(_ctx.$t("remark2")), 1),
                    createBaseVNode("div", _hoisted_28, toDisplayString(_ctx.$t("remark3")), 1)
                  ])) : createCommentVNode("v-if", true)
                ]),
                createBaseVNode("div", null, [
                  createBaseVNode("div", _hoisted_29, [
                    createBaseVNode("div", _hoisted_30, [
                      createBaseVNode("div", null, [
                        createVNode(_component_ElPopover, {
                          placement: "bottom",
                          width: 400,
                          trigger: "hover",
                          "popper-class": "common-popover"
                        }, {
                          reference: withCtx(() => [
                            createBaseVNode("span", _hoisted_31, toDisplayString(unref(nft).val.nftName), 1)
                          ]),
                          default: withCtx(() => [
                            createTextVNode(" " + toDisplayString(unref(nft).val.nftName), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("a", {
                        class: "like flex flex-align-center",
                        onClick: payLike
                      }, [
                        unref(nft).val?.nftHasLike ? (openBlock(), createElementBlock("img", _hoisted_32)) : (openBlock(), createElementBlock("img", _hoisted_33)),
                        createBaseVNode("span", _hoisted_34, toDisplayString(unref(nft).val.nftLikeCount), 1)
                      ]),
                      createCommentVNode(`                <img :src="ShareIcon" :alt="$t('share')" @click="share" />`)
                    ]),
                    createBaseVNode("div", _hoisted_35, [
                      _hoisted_36,
                      createBaseVNode("span", _hoisted_37, toDisplayString(unref(nft).val.foundryName), 1),
                      unref(nft).val.nftCertificationType === 1 ? (openBlock(), createElementBlock("img", {
                        key: 0,
                        src: unref(CertIcon)
                      }, null, 8, _hoisted_38)) : (openBlock(), createElementBlock("img", {
                        key: 1,
                        src: unref(UnCertIcon)
                      }, null, 8, _hoisted_39))
                    ]),
                    isShowMobile ? (openBlock(), createElementBlock("div", _hoisted_40, [
                      createVNode(NFTCover, {
                        needGizp: true,
                        cover: [
                          _ctx.$filters.metafile(unref(nft).val.coverUrl, 500),
                          unref(nft).val.nftBackIcon ? unref(nft).val.nftBackIcon : void 0
                        ],
                        "is-show-prew": true,
                        "is-lazy": false,
                        "is-remint": unref(nft).val.nftHasCompound,
                        isBlindBox: unref(blindBoxPage),
                        blindBoxRest: unref(nft).val.remain
                      }, null, 8, ["cover", "is-remint", "isBlindBox", "blindBoxRest"])
                    ])) : createCommentVNode("v-if", true),
                    createCommentVNode(" \u4EF7\u683C "),
                    createBaseVNode("div", _hoisted_41, [
                      createBaseVNode("div", _hoisted_42, [
                        createBaseVNode("div", _hoisted_43, [
                          unref(nft).val.putAway ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            createCommentVNode('                      <UserAvatar :metaId="nft.val.ownerMetaId" :type="nft.val.ownerAvatarType" />'),
                            _hoisted_44,
                            createBaseVNode("span", _hoisted_45, toDisplayString(unref(nft).val.ownerName), 1),
                            createTextVNode(" " + toDisplayString(_ctx.$t("theIntro")) + "\uFF1A ", 1)
                          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            createTextVNode(toDisplayString(_ctx.$t("drsc")) + ":", 1)
                          ], 2112))
                        ]),
                        createBaseVNode("div", _hoisted_46, [
                          createTextVNode(toDisplayString(unref(NFTMainMsgDesc) && unref(NFTMainMsgDesc).length > 60 ? unref(NFTMainMsgDesc).slice(0, 60) : unref(NFTMainMsgDesc)) + " ", 1),
                          unref(NFTMainMsgDesc) && unref(NFTMainMsgDesc).length > 60 ? (openBlock(), createElementBlock("a", _hoisted_47, [
                            _hoisted_48,
                            createBaseVNode("span", {
                              onClick: _cache[4] || (_cache[4] = ($event) => isShowDrscDetail.value = true)
                            }, toDisplayString(_ctx.$t("getmore")), 1)
                          ])) : createCommentVNode("v-if", true)
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_49, [
                        unref(blindBoxPage) ? (openBlock(), createElementBlock("div", _hoisted_50, [
                          createBaseVNode("span", null, toDisplayString(_ctx.$t("blindBoxIssuerAmount")) + toDisplayString(unref(nft).val.limited) + toDisplayString(_ctx.$t("blindBoxNum")) + "\uFF0C" + toDisplayString(_ctx.$t("num")) + toDisplayString(unref(nft).val.round) + toDisplayString(_ctx.$t("numSale")) + toDisplayString(unref(nft).val.total) + toDisplayString(_ctx.$t("blindBoxNum")) + "\uFF0C" + toDisplayString(_ctx.$t("restBlindBox")), 1),
                          createBaseVNode("span", null, toDisplayString(unref(format)(unref(nft).val.remain)) + toDisplayString(_ctx.$t("blindBoxNum")) + toDisplayString(unref(nft).val.remain > 0 ? "" : _ctx.$t("blindBoxSaleOff")), 1)
                        ])) : createCommentVNode("v-if", true),
                        _hoisted_51,
                        createCommentVNode(" \u5F53\u81EA\u5DF1\u7684 NFT \u4E0A\u67B6\u65F6\u4E5F\u8981\u663E\u793A\u4EF7\u683C "),
                        unref(nft).val.putAway && unref(store).state.userInfo && unref(store).state.userInfo.metaId === unref(nft).val.ownerMetaId ? (openBlock(), createElementBlock("div", _hoisted_52, toDisplayString(_ctx.$t("sellingPrice")) + ": " + toDisplayString(price.value), 1)) : createCommentVNode("v-if", true)
                      ]),
                      createCommentVNode(" \u62CD\u5356\u4FE1\u606F "),
                      unref(nft).val.isAuction ? (openBlock(), createElementBlock("div", _hoisted_53, [
                        createBaseVNode("div", _hoisted_54, [
                          createBaseVNode("div", _hoisted_55, toDisplayString(_ctx.$t("currentBid")) + "\uFF1A", 1),
                          unref(nft).val.currentPrice ? (openBlock(), createElementBlock("div", _hoisted_56, toDisplayString(_ctx.$filters.bsv(unref(nft).val.currentPrice)) + " BSV ", 1)) : createCommentVNode("v-if", true)
                        ]),
                        unref(nft).val.isAuction && unref(nft).val.auctionStatus === 2 ? (openBlock(), createElementBlock("div", _hoisted_57, [
                          createBaseVNode("div", _hoisted_58, toDisplayString(_ctx.$t("auctionEndTime")) + "\uFF1A", 1),
                          createBaseVNode("div", _hoisted_59, [
                            createVNode(unref(index), {
                              time: unref(nft).val.auctionTime,
                              transform: transformSlotProps,
                              onEnd: auctionCountDownFinish,
                              class: "count-down-warp"
                            }, {
                              default: withCtx(({ days, hours, minutes, seconds }) => [
                                createBaseVNode("div", _hoisted_60, [
                                  createTextVNode(toDisplayString(days) + " ", 1),
                                  createBaseVNode("span", null, toDisplayString(_ctx.$t("day")), 1),
                                  createTextVNode(" " + toDisplayString(hours) + " ", 1),
                                  createBaseVNode("span", null, toDisplayString(_ctx.$t("hour")), 1),
                                  createTextVNode(" " + toDisplayString(minutes) + " ", 1),
                                  createBaseVNode("span", null, toDisplayString(_ctx.$t("minu")), 1),
                                  createTextVNode(" " + toDisplayString(seconds) + " ", 1),
                                  createBaseVNode("span", null, toDisplayString(_ctx.$t("second")), 1)
                                ])
                              ]),
                              _: 1
                            }, 8, ["time"])
                          ])
                        ])) : createCommentVNode("v-if", true)
                      ])) : createCommentVNode("v-if", true),
                      createCommentVNode(" \u64CD\u4F5C "),
                      createBaseVNode("div", _hoisted_61, [
                        unref(nft).val.isAuction && unref(nft).val.auctionStatus !== 0 && unref(nft).val.auctionStatus !== 4 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          createCommentVNode(" \u62CD\u5356 "),
                          createBaseVNode("div", _hoisted_62, [
                            createBaseVNode("div", {
                              class: normalizeClass(["btn btn-block flex1 flex flex-align-center flex-pack-center", { "btn-gray": unref(auctionBtnClassGray) }]),
                              onClick: openAuctionModal
                            }, toDisplayString(unref(nft).val.auctionStatus === 1 ? _ctx.$t("unStart") : unref(nft).val.auctionStatus === 2 ? _ctx.$t("iWanToBid") : unref(nft).val.auctionStatus === 3 && unref(store).state.userInfo && unref(store).state.userInfo.metaId === unref(nft).val.ownerMetaId ? _ctx.$t("confirmAuctionSend") : _ctx.$t("isBeBuyed")), 3),
                            createBaseVNode("div", _hoisted_63, "*" + toDisplayString(_ctx.$t("auctionFailTips")), 1)
                          ]),
                          createCommentVNode(" \u4E00\u53E3\u4EF7\u8D2D\u4E70 "),
                          createCommentVNode(' <div\n                            class="btn btn-block btn-black flex1 flex-align-center flex-pack-center"\n                            @click="buy"\n                          >\n                            <div>\n                              <div class="title">\u4E00\u53E3\u4EF7</div>\n                              <div class="cont">4.55 BSV</div>\n                            </div>\n                    </div>')
                        ], 2112)) : unref(nft).val.sellState === 3 ? (openBlock(), createElementBlock("div", _hoisted_64, toDisplayString(_ctx.$t("comingSoon")), 1)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                          createCommentVNode(" \u975E\u81EA\u5DF1\u7684 "),
                          !unref(store).state.userInfo || unref(store).state.userInfo && unref(store).state.userInfo.metaId !== unref(nft).val.ownerMetaId ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            createCommentVNode(" \u8D2D\u4E70 "),
                            createBaseVNode("div", {
                              class: normalizeClass(["btn btn-block flex1 flex flex-align-center flex-pack-center", [!unref(nft).val?.putAway && !unref(blindBoxPage) ? "btn-gray" : unref(blindBoxPage) ? unref(nft).val.remain > 0 ? "" : "btn-noColor" : ""]]),
                              onClick: startBuy
                            }, [
                              unref(nft).val?.putAway && !unref(nft).val?.uuid && !unref(blindBoxPage) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                createTextVNode(toDisplayString(unref(i18n).locale.value === "zh" ? `\u4EE5 ${price.value}  \u8D2D\u4E70` : `Buy Now At ${price.value} `), 1)
                              ], 2112)) : unref(nft).val?.putAway && unref(nft).val?.uuid && !unref(blindBoxPage) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                createTextVNode(toDisplayString(unref(i18n).locale.value === "zh" ? `\u4EE5 ${price.value} \u8D2D\u4E70` : `Buy Now At ${price.value}`), 1)
                              ], 2112)) : unref(blindBoxPage) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                                createCommentVNode("\u76F2\u76D2\u8D2D\u4E70\u72B6\u6001"),
                                createTextVNode(toDisplayString(unref(nft).val.remain > 0 ? `${_ctx.$t("blindBoxSalePrice")} ${unref(cnyMode) ? "\xA5" : ""}${unref(blindBoxPrice)} ${unref(cnyMode) ? "" : "BSV"}` : unref(store).state.blindboxLimitedTime ? `${_ctx.$t("buyblindboxTimeOver")}` : `${_ctx.$t("lookOther")}`) + " ", 1),
                                unref(store).state.blindboxLimitedTime ? (openBlock(), createBlock(unref(index), {
                                  key: 0,
                                  class: "countdown",
                                  time: unref(store).state.blindboxLimitedTime - new Date().getTime(),
                                  transform: transformSlotProps,
                                  onEnd: blindBoxCutDown
                                }, {
                                  default: withCtx(({ days, hours, minutes, seconds }) => [
                                    _hoisted_65,
                                    createBaseVNode("span", null, toDisplayString(parseInt(hours) + parseInt(days) * 24) + ":" + toDisplayString(minutes) + ":" + toDisplayString(seconds), 1)
                                  ]),
                                  _: 1
                                }, 8, ["time"])) : createCommentVNode("v-if", true)
                              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
                                createTextVNode(toDisplayString(_ctx.$t("isBeBuyedOrCanceled")), 1)
                              ], 2112))
                            ], 2)
                          ], 2112)) : unref(store).state.userInfo && unref(store).state.userInfo.metaId === unref(nft).val.ownerMetaId ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            createCommentVNode(" \u81EA\u5DF1\u7684 "),
                            unref(nft).val.putAway ? (openBlock(), createElementBlock("div", _hoisted_66, [
                              createBaseVNode("div", {
                                class: "btn btn-block btn-plain flex1 flex flex-align-center flex-pack-center",
                                onClick: offSale
                              }, toDisplayString(_ctx.$t("offsale")), 1),
                              createCommentVNode(` <template v-if="now > nft.val.remainingTime">
                        <div class="btn btn-block flex1" @click="toSale">{{$t('saleAgain')}}</div>
                          </template>`)
                            ])) : (openBlock(), createElementBlock("div", {
                              key: 1,
                              class: "btn btn-block flex1 flex flex-align-center flex-pack-center",
                              onClick: toSale
                            }, toDisplayString(_ctx.$t("sale")), 1))
                          ], 2112)) : createCommentVNode("v-if", true)
                        ], 2112))
                      ]),
                      createCommentVNode(" buy-fee-tips \u62CD\u5356\u7684\u65F6\u5019\u4E0D\u663E\u793A "),
                      unref(nft).val.putAway && !unref(nft).val.isAuction && (!unref(store).state.userInfo || unref(store).state.userInfo && unref(store).state.userInfo.metaId !== unref(nft).val.ownerMetaId) ? (openBlock(), createElementBlock("div", _hoisted_67)) : createCommentVNode("v-if", true)
                    ]),
                    createBaseVNode("div", _hoisted_68, [
                      createVNode(_component_ElCollapse, {
                        modelValue: activeNames.value,
                        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => activeNames.value = $event)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_ElCollapseItem, { name: "1" }, {
                            title: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("possessionrecord")), 1)
                            ]),
                            default: withCtx(() => [
                              createBaseVNode("div", _hoisted_69, [
                                createBaseVNode("div", _hoisted_70, [
                                  createBaseVNode("span", _hoisted_71, toDisplayString(_ctx.$t("owner")), 1),
                                  createBaseVNode("span", _hoisted_72, toDisplayString(_ctx.$t("role")), 1),
                                  createBaseVNode("span", _hoisted_73, toDisplayString(_ctx.$t("time")), 1),
                                  createBaseVNode("span", _hoisted_74, toDisplayString(_ctx.$t("price")), 1)
                                ]),
                                createCommentVNode(" \u5386\u53F2\u62E5\u6709\u8005 "),
                                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(records), (record, index) => {
                                  return openBlock(), createElementBlock("div", {
                                    class: "tr flex flex-align-center",
                                    key: record.timestamp
                                  }, [
                                    index !== 0 ? (openBlock(), createElementBlock("img", {
                                      key: 0,
                                      class: "tobe",
                                      src: unref(ListIcon)
                                    }, null, 8, _hoisted_75)) : createCommentVNode("v-if", true),
                                    createBaseVNode("span", {
                                      class: "td flex1 user flex flex-align-center",
                                      onClick: ($event) => unref(ToUser)(record.metaId)
                                    }, [
                                      createBaseVNode("img", {
                                        src: _ctx.$filters.avatar(record.metaId),
                                        alt: record.name
                                      }, null, 8, _hoisted_77),
                                      createBaseVNode("span", _hoisted_78, toDisplayString(record.name), 1)
                                    ], 8, _hoisted_76),
                                    createBaseVNode("span", _hoisted_79, [
                                      index === unref(records).length - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                        createBaseVNode("img", { src: unref(CastingIcon) }, null, 8, _hoisted_80),
                                        createTextVNode(" " + toDisplayString(_ctx.$t("creater")), 1)
                                      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                        createTextVNode(toDisplayString(index === 0 ? _ctx.$t("haveder") : _ctx.$t("histsoryowner")), 1)
                                      ], 2112))
                                    ]),
                                    createBaseVNode("span", _hoisted_81, toDisplayString(_ctx.$filters.dateTimeFormat(record.timestamp, "YYYY-MM-DD HH:mm")), 1),
                                    createBaseVNode("span", _hoisted_82, toDisplayString(record.satoshisPrice ? _ctx.$filters.bsv(record.satoshisPrice) + "BSV" : _ctx.$t("noPaid")), 1),
                                    createBaseVNode("a", {
                                      class: "link",
                                      onClick: ($event) => unref(store).state.sdk?.toTxLink(record.txId)
                                    }, [
                                      createBaseVNode("img", { src: unref(LinkIcon) }, null, 8, _hoisted_84)
                                    ], 8, _hoisted_83)
                                  ]);
                                }), 128)),
                                unref(records).length > unref(ownerHistoryPagination).pageSize ? (openBlock(), createBlock(LoadMore, {
                                  key: 0,
                                  pagination: unref(ownerHistoryPagination),
                                  onGetMore: getMoreRecords
                                }, null, 8, ["pagination"])) : createCommentVNode("v-if", true),
                                createCommentVNode(" \u62CD\u5356\u4FE1\u606F--\u5386\u53F2\u51FA\u4EF7 "),
                                unref(nft).val.isAuction ? (openBlock(), createElementBlock("div", _hoisted_85, [
                                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(auctionRecords), (item, index) => {
                                    return openBlock(), createElementBlock("div", {
                                      class: "historical-bid-item flex flex-align-center",
                                      key: item.txId
                                    }, [
                                      createCommentVNode(" \u7528\u6237\u4FE1\u606F "),
                                      createBaseVNode("div", _hoisted_86, [
                                        createVNode(_component_UserAvatar, {
                                          class: "avatar",
                                          metaId: item.metaId
                                        }, null, 8, ["metaId"]),
                                        createBaseVNode("div", _hoisted_87, [
                                          createBaseVNode("div", _hoisted_88, toDisplayString(item.userName), 1),
                                          item.metaId ? (openBlock(), createElementBlock("div", _hoisted_89, " MetaID:" + toDisplayString(item.metaId.slice(0, 6)), 1)) : createCommentVNode("v-if", true)
                                        ])
                                      ]),
                                      createCommentVNode(" \u51FA\u4EF7\u4FE1\u606F "),
                                      createBaseVNode("div", _hoisted_90, [
                                        createBaseVNode("div", _hoisted_91, [
                                          index === 0 || unref(auctionRecords).length === 1 ? (openBlock(), createElementBlock("a", _hoisted_92, [
                                            createCommentVNode(` <template v-if="item.status === 2">{{ $t('sealTheDeal') }}</template>
                                <template v-else>{{ $t('latestBid') }}</template> `),
                                            createTextVNode(toDisplayString(_ctx.$t("latestBid")), 1)
                                          ])) : createCommentVNode("v-if", true),
                                          createBaseVNode("span", _hoisted_93, toDisplayString(_ctx.$t("auctionBid")), 1),
                                          createBaseVNode("span", _hoisted_94, toDisplayString(_ctx.$filters.bsv(item.bidPrice)) + " BSV", 1)
                                        ]),
                                        createBaseVNode("div", _hoisted_95, toDisplayString(_ctx.$filters.dateTimeFormat(item.timestamp, "MM \u6708 DD \u65E5 HH:mm:ss")), 1)
                                      ])
                                    ]);
                                  }), 128)),
                                  createBaseVNode("div", _hoisted_96, [
                                    createCommentVNode(" \u7528\u6237\u4FE1\u606F "),
                                    createBaseVNode("div", _hoisted_97, [
                                      createVNode(_component_UserAvatar, {
                                        class: "avatar",
                                        metaId: unref(nft).val.auctionMetaId,
                                        type: unref(nft).val.auctionAvatarType
                                      }, null, 8, ["metaId", "type"]),
                                      createBaseVNode("div", _hoisted_98, [
                                        createBaseVNode("div", _hoisted_99, toDisplayString(unref(nft).val.auctionUserName), 1),
                                        unref(nft).val.auctionMetaId ? (openBlock(), createElementBlock("div", _hoisted_100, " MetaID:" + toDisplayString(unref(nft).val.auctionMetaId.slice(0, 6)), 1)) : createCommentVNode("v-if", true)
                                      ])
                                    ]),
                                    createCommentVNode(" \u51FA\u4EF7\u4FE1\u606F "),
                                    createBaseVNode("div", _hoisted_101, [
                                      createBaseVNode("div", _hoisted_102, [
                                        createBaseVNode("span", _hoisted_103, toDisplayString(_ctx.$t("auctionBid")), 1),
                                        createBaseVNode("span", _hoisted_104, toDisplayString(unref(nft).val.startPrice) + " BSV", 1)
                                      ]),
                                      createCommentVNode(` <div class="time">
                              {{ $filters.dateTimeFormat(nft.val.update_time, 'MM \u6708 DD \u65E5 HH:mm:ss') }}
                            </div> `)
                                    ])
                                  ])
                                ])) : createCommentVNode("v-if", true)
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    !isShowMobile ? (openBlock(), createElementBlock("div", _hoisted_105, [
                      createBaseVNode("div", _hoisted_106, [
                        createTextVNode(toDisplayString(_ctx.$t("remark1")), 1),
                        createCommentVNode(` <a @click="more">{{ $t('knowmore') }}</a> `)
                      ]),
                      createBaseVNode("div", _hoisted_107, toDisplayString(_ctx.$t("remark2")), 1),
                      createBaseVNode("div", _hoisted_108, toDisplayString(_ctx.$t("remark3")), 1)
                    ])) : createCommentVNode("v-if", true)
                  ])
                ])
              ])
            ]),
            _: 1
          }, 8, ["loading"])
        ]),
        createCommentVNode(" drsc detail "),
        createVNode(MoreContentModal, {
          visible: isShowDrscDetail.value,
          title: _ctx.$t("seller") + _ctx.$t("drsc"),
          onChange: _cache[6] || (_cache[6] = (value) => isShowDrscDetail.value = value)
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(NFTMainMsgDesc)), 1)
          ]),
          _: 1
        }, 8, ["visible", "title"]),
        createCommentVNode(" auction price "),
        createVNode(_component_ElDialog, {
          modelValue: isShowAuctionModal.value,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => isShowAuctionModal.value = $event)
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_109, [
              createBaseVNode("div", _hoisted_110, toDisplayString(_ctx.$t("iWanToBid")), 1),
              createBaseVNode("div", _hoisted_111, [
                createBaseVNode("div", _hoisted_112, [
                  createBaseVNode("div", _hoisted_113, toDisplayString(_ctx.$t("currentBid")), 1),
                  unref(nft).val.currentPrice ? (openBlock(), createElementBlock("div", _hoisted_114, toDisplayString(_ctx.$filters.bsv(unref(nft).val.currentPrice)) + " BSV ", 1)) : createCommentVNode("v-if", true)
                ]),
                createBaseVNode("div", _hoisted_115, [
                  createBaseVNode("div", _hoisted_116, toDisplayString(_ctx.$t("minimumMarkup")) + "(" + toDisplayString(unref(nft).val?.nftMinBidIncreaseInt) + "%) ", 1),
                  unref(nft).val.minGapPrice ? (openBlock(), createElementBlock("div", _hoisted_117, toDisplayString(_ctx.$filters.bsv(unref(nft).val.minGapPrice)) + " BSV ", 1)) : createCommentVNode("v-if", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_118, [
                createBaseVNode("span", null, toDisplayString(_ctx.$t("myBid")), 1),
                withDirectives(createBaseVNode("input", {
                  type: "number",
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => auctionPrice.value = $event),
                  min: new unref(Decimal)(minActionPrice.value).toNumber(),
                  setp: unref(nft).val.minGapPrice ? new unref(Decimal)(unref(nft).val.minGapPrice).toNumber() : 0.1,
                  class: "warp flex1",
                  onChange: onAuctionPriceChange
                }, null, 40, _hoisted_119), [
                  [vModelText, auctionPrice.value]
                ]),
                _hoisted_120
              ]),
              createCommentVNode(' <div class="equal">\u22481036 CNY</div> '),
              createBaseVNode("div", _hoisted_121, [
                createBaseVNode("div", _hoisted_122, [
                  createBaseVNode("div", _hoisted_123, toDisplayString(_ctx.$t("availableAssets")), 1),
                  createBaseVNode("div", _hoisted_124, toDisplayString(balance.value) + " BSV", 1)
                ])
              ]),
              new unref(Decimal)(unref(nftExtraFee)).plus(auctionPrice.value).toNumber() <= balance.value || true ? withDirectives((openBlock(), createElementBlock("div", {
                key: 0,
                class: "btn btn-block",
                onClick: bid
              }, [
                createTextVNode(toDisplayString(_ctx.$t("bid")), 1)
              ])), [
                [_directive_loading, getBalanceLoading.value]
              ]) : withDirectives((openBlock(), createElementBlock("div", {
                key: 1,
                class: "btn btn-block btn-gray",
                onClick: toWallet
              }, [
                createTextVNode(toDisplayString(_ctx.$t("insufficientBalanceToWallet")) + " ", 1),
                createBaseVNode("img", { src: unref(CardIcon) }, null, 8, _hoisted_125)
              ])), [
                [_directive_loading, getBalanceLoading.value]
              ]),
              createBaseVNode("div", _hoisted_126, "*" + toDisplayString(unref(nftAuctionExtraFeeText)), 1)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createCommentVNode(" pay confirm "),
        createVNode(PayConfirmVue, {
          visible: isShowConfirm.value,
          genesis: unref(nft).val?.genesis,
          codehash: unref(nft).val?.codeHash,
          "token-index": unref(nft).val?.tokenIndex,
          isLegal: unref(isLegal),
          uuid: unref(nft).val?.uuid,
          onClose: _cache[9] || (_cache[9] = ($event) => isShowConfirm.value = false),
          onSuccess: buySuccess,
          price: price.value,
          blindBoxPage: unref(blindBoxPage)
        }, null, 8, ["visible", "genesis", "codehash", "token-index", "isLegal", "uuid", "price", "blindBoxPage"])
      ], 64);
    };
  }
});
var Detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-40f4caea"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/Detail.vue"]]);

export { Detail as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV0YWlsLmMyMTAwZDc3LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
