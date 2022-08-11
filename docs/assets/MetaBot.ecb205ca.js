import { Z as checkSdkStatus, au as store, X as ElMessage, aw as i18n, at as Decimal, ao as ElMessageBox, _ as _export_sfc, e as defineComponent, t as useRouter, u as useI18n, r as ref, v as reactive, d as computed, a as onMounted, cs as GetMetaBotList, ct as GetNftAuctions, a2 as NFTApiGetNFTDetail, f as resolveComponent, g as openBlock, A as createElementBlock, l as createVNode, m as createCommentVNode, k as createBaseVNode, C as unref, i as createBlock, j as withCtx, D as toDisplayString, F as Fragment, B as renderList, E as useStore, cu as GetMetaBotListBySearch, L as normalizeClass, as as metafileUrl, K as withModifiers, q as pushScopeId, s as popScopeId, a0 as ElLoading } from './index.f03006d5.js';
import { E as ElSkeletonItem, a as ElSkeleton } from './skeleton.4c62fb88.js';
import { E as ElImage } from './image-viewer.1c165fb3.js';
import { I as IsNull } from './IsNull.7a0d2f8f.js';
import { N as NFTDetail } from './nftDetail.28374e41.js';
import { i as index } from './vue-countdown.esm.dedc6811.js';
import { I as InnerPageHeader } from './InnerPageHeader.616ed680.js';
import './bannet_icon_ins.9e5a53b7.js';
import './icon_search.00d5970e.js';

var _imports_0 = "/assets/cn-banner-metabot.a13c8399.png";

async function buy(nft) {
  return new Promise(async (resolve, reject) => {
    if (!nft.putAway) {
      reject();
    } else {
      checkSdkStatus().then(async () => {
        if (store.state.userInfo.metaId === nft.ownerMetaId) {
          ElMessage.error(i18n.global.t("notCanBuySelf"));
          reject();
        } else {
          if (!nft.sellTxId || nft.sellTxId && nft.sellTxId === "") {
            ElMessage.error(i18n.global.t("buySellTxIdFail"));
            reject();
          } else {
            const params = {
              codehash: nft.codeHash,
              genesis: nft.genesis,
              tokenIndex: nft.tokenIndex,
              genesisTxid: nft.genesisTxId,
              sensibleId: nft.sensibleId,
              sellTxId: nft.sellTxId,
              sellContractTxId: nft.sellContractTxId,
              amount: new Decimal(nft.amount).toNumber(),
              issueMetaId: nft.nftIssueMetaId,
              issueAddress: nft.nftIssueAddress,
              isFirstSell: nft.nftIsFirstSell,
              ownerMetaId: nft.ownerMetaId
            };
            const useAmountRes = await store.state.sdk?.nftBuy({
              checkOnly: true,
              ...params
            }).catch(() => {
              reject();
            });
            if (useAmountRes?.code === 200) {
              const useAmount = useAmountRes.data.amount + nft.amount;
              const userBalanceRes = await store.state.sdk?.getBalance();
              if (userBalanceRes && userBalanceRes.code === 200) {
                if (userBalanceRes.data.satoshis > useAmount) {
                  ElMessageBox.confirm(`${i18n.global.t("useAmountTips")}: ${useAmount} SATS`, i18n.global.t("niceWarning"), {
                    confirmButtonText: i18n.global.t("confirm"),
                    cancelButtonText: i18n.global.t("cancel"),
                    closeOnClickModal: false
                  }).then(async () => {
                    const res = await store.state.sdk?.nftBuy(params).catch(() => reject());
                    if (res?.code === 200) {
                      resolve(true);
                    } else {
                      reject(res);
                    }
                  }).catch(() => reject());
                } else {
                  ElMessageBox.alert(`
                            <p>${i18n.global.t("useAmountTips")}: ${useAmount} SATS</p>
                            <p>${i18n.global.t("insufficientBalance")}</p>
                          `, {
                    confirmButtonText: i18n.global.t("confirm"),
                    dangerouslyUseHTMLString: true
                  });
                  reject();
                }
              }
            } else {
              reject(useAmountRes);
            }
          }
        }
      }).catch(() => {
        reject();
      });
    }
  });
}

var MetaBot_scss_vue_type_style_index_0_src_46fd3b38_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-46fd3b38"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "banner container" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: "Metabot"
}, null, -1));
const _hoisted_3 = [
  _hoisted_2
];
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_0,
  alt: "Metabot"
}, null, -1));
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = { class: "countdown" };
const _hoisted_7 = { class: "title" };
const _hoisted_8 = { class: "cont" };
const _hoisted_9 = { class: "metabot-tags container" };
const _hoisted_10 = ["onClick"];
const _hoisted_11 = { class: "meta-bot-item" };
const _hoisted_12 = { class: "cover" };
const _hoisted_13 = { class: "cont" };
const _hoisted_14 = { class: "name" };
const _hoisted_15 = { class: "user-list" };
const _hoisted_16 = { class: "user-item flex flex-align-center" };
const _hoisted_17 = { class: "user-item flex flex-align-center" };
const _hoisted_18 = { class: "meta-bot-list container" };
const _hoisted_19 = ["onClick"];
const _hoisted_20 = { class: "cover" };
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "dot" }, null, -1));
const _hoisted_22 = { class: "cont" };
const _hoisted_23 = { class: "name" };
const _hoisted_24 = { class: "user-list" };
const _hoisted_25 = { class: "user-item flex flex-align-center" };
const _hoisted_26 = { class: "name" };
const _hoisted_27 = { class: "type" };
const _hoisted_28 = { class: "user-item flex flex-align-center" };
const _hoisted_29 = { class: "name" };
const _hoisted_30 = { class: "type" };
const _hoisted_31 = ["onClick"];
const _hoisted_32 = {
  key: 0,
  class: "btn btn-block auction-btn flex flex-align-center flex-pack-center btn-gray"
};
const _hoisted_33 = {
  key: 1,
  class: "btn btn-block auction-btn flex flex-align-center flex-pack-center btn-gray"
};
const _hoisted_34 = { class: "status" };
const _hoisted_35 = {
  key: 0,
  class: "amount"
};
const _hoisted_36 = ["onClick"];
const _hoisted_37 = ["onClick"];
const _hoisted_38 = { class: "page-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const store = useStore();
    const router = useRouter();
    const i18n = useI18n();
    const isShowSkeleton = ref(true);
    const keyword = ref("");
    const metaBots = reactive([]);
    const pagination = reactive({
      ...store.state.pagination,
      pageSize: 100
    });
    const countdown = ref(0);
    const isShowCountdown = ref(true);
    const isAuction = computed(() => sections[sectionIndex.value].name === "#001-015");
    const now = new Date().getTime();
    const sections = [
      { name: "#001-015", start: 1, end: 15 },
      { name: "#016-100", start: 16, end: 100 },
      { name: "#101-200", start: 101, end: 200 },
      { name: "#201-300", start: 201, end: 300 },
      { name: "#301-400", start: 301, end: 400 },
      { name: "#401-500", start: 401, end: 500 },
      { name: "#501-600", start: 501, end: 600 },
      { name: "#601-700", start: 601, end: 700 },
      { name: "#701-800", start: 701, end: 800 },
      { name: "#801-900", start: 801, end: 900 },
      { name: "#901-999", start: 901, end: 999 }
    ];
    const sectionIndex = ref(0);
    function onCountdownEnd() {
      setTimeout(() => {
        pagination.page = 1;
        pagination.loading = false;
        pagination.nothing = false;
        keyword.value = "";
        sectionIndex.value = 0;
        isShowCountdown.value = false;
        getDatas(true);
      }, 3e3);
    }
    function transformSlotProps(props) {
      const formattedProps = {};
      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });
      return formattedProps;
    }
    function search(_keyword) {
      keyword.value = _keyword;
      isShowSkeleton.value = true;
      pagination.page = 1;
      pagination.loading = false;
      pagination.nothing = false;
      if (keyword.value === "") {
        sectionIndex.value = 0;
        getDatas(true);
      } else {
        sectionIndex.value = -1;
        getSearchDatas(true);
      }
    }
    function toMetabot() {
      window.open("https://www.metabot.world");
    }
    function toDetail(metabot) {
      let query = {};
      if (isAuction.value && !metabot.isOnlyDisplay && metabot.nftSellState === 3) {
        query.isAuctioin = true;
      } else if (isAuction.value && !metabot.isOnlyDisplay && metabot.nftSellState !== 3 && !metabot.nftIsReady) {
        query.isAuctioin = true;
      }
      router.push({
        name: "detail",
        params: {
          genesisId: metabot.nftGenesis,
          codehash: metabot.nftCodehash,
          tokenIndex: metabot.nftTokenIndex
        },
        query
      });
    }
    function getDatas(isCover = false) {
      return new Promise(async (resolve) => {
        const res = await GetMetaBotList({
          Page: pagination.page.toString(),
          PageSize: pagination.pageSize.toString(),
          Start: sections[sectionIndex.value].start,
          End: sections[sectionIndex.value].end
        });
        if (res.code === 0) {
          if (isCover) {
            metaBots.length = 0;
          }
          if (sections[sectionIndex.value].name === "#001-015") {
            const auctionRes = await GetNftAuctions({
              page: pagination.page,
              page_size: pagination.pageSize
            });
            if (auctionRes.code === 0) {
              const list = auctionRes.data.filter((item) => item.codehash === "0d0fc08db6e27dc0263b594d6b203f55fb5282e2" && item.genesis === "204dafb6ee543796b4da6f1d4134c1df2609bdf1");
              for (let i = 0; i < list.length; i++) {
                const auctionItem = list[i];
                const item = res.data.results.items.find((item2) => item2.nftCodehash === auctionItem.codehash && item2.nftGenesis === auctionItem.genesis && item2.nftTokenIndex === auctionItem.token_index.toString());
                if (item) {
                  if (item.nftSellState === 3) {
                    item.isAuction = true;
                    item.auctionStatus = auctionItem.status, item.auctionDeadTime = auctionItem.dead_time, item.currentPrice = auctionItem.buyer_value === "0" ? auctionItem.value : auctionItem.buyer_value;
                  }
                } else {
                  const response = await NFTApiGetNFTDetail({
                    codehash: auctionItem.codehash,
                    genesis: auctionItem.genesis,
                    tokenIndex: auctionItem.token_index.toString()
                  });
                  if (response.code === 0) {
                    const item2 = response.data.results.items[0];
                    res.data.results.items.push({
                      nftSellState: item2.nftSellState,
                      nftBalance: item2.nftBalance,
                      nftBuyTimestamp: 0,
                      nftBuyTxId: "",
                      nftCancelTimestamp: 0,
                      nftCancelTxId: "",
                      nftCodehash: item2.nftCodehash,
                      nftDataStr: item2.nftDataStr,
                      nftDesc: item2.nftDesc,
                      nftGenesis: item2.nftGenesis,
                      nftGenesisTxId: item2.nftGenesisTxId,
                      nftIcon: item2.nftIcon,
                      nftIssueAvatarTxId: item2.nftIssueMetaId,
                      nftIssueMetaId: item2.nftIssueMetaId,
                      nftIssueTimestamp: item2.nftTimestamp,
                      nftIssueVersion: "",
                      nftIssuer: item2.nftIssuer,
                      nftName: item2.nftName,
                      nftOwnerAvatarTxId: item2.nftOwnerAvatarTxId,
                      nftOwnerMetaId: item2.nftOwnerMetaId,
                      nftOwnerName: item2.nftOwnerName,
                      nftPrice: item2.nftPrice,
                      nftSellContractTxId: item2.nftSellContractTxId,
                      nftSellDesc: item2.nftSellDesc,
                      nftSellTimestamp: 0,
                      nftSellTxId: item2.nftSellTxId,
                      nftSensibleId: item2.nftSensibleId,
                      nftSeriesName: "",
                      nftSymbol: "",
                      nftTimestamp: 0,
                      nftTokenIndex: item2.nftTokenIndex,
                      nftWebsite: "",
                      nftIsReady: item2.nftIsReady,
                      isAuction: true,
                      auctionStatus: auctionItem.status,
                      auctionDeadTime: auctionItem.dead_time,
                      currentPrice: auctionItem.buyer_value === "0" ? auctionItem.value : auctionItem.buyer_value
                    });
                  }
                }
              }
            }
          }
          if (res.data.results.items.length > 0) {
            metaBots.push(...res.data.results.items);
          } else {
            pagination.nothing = true;
          }
          if (countdown.value <= 0) {
            if (res.data.countdown > 0) {
              countdown.value = res.data.countdown + 1e3;
              if (!isShowCountdown.value)
                isShowCountdown.value = true;
            } else {
              countdown.value = res.data.countdown;
              if (isShowCountdown.value)
                isShowCountdown.value = false;
            }
          }
          isShowSkeleton.value = false;
        }
        resolve();
      });
    }
    function getSearchDatas(isCover = false) {
      return new Promise(async (resolve) => {
        const res = await GetMetaBotListBySearch({
          Page: pagination.page.toString(),
          PageSize: pagination.pageSize.toString(),
          SearchWord: keyword.value
        });
        if (res.code === 0) {
          if (isCover) {
            metaBots.length = 0;
          }
          if (res.data.results.items.length > 0) {
            metaBots.push(...res.data.results.items);
          } else {
            pagination.nothing = true;
          }
          isShowSkeleton.value = false;
        }
        resolve();
      });
    }
    function changeSectionIndex(index) {
      if (sectionIndex.value === index)
        return;
      sectionIndex.value = index;
      isShowSkeleton.value = true;
      pagination.page = 1;
      pagination.loading = false;
      pagination.nothing = false;
      keyword.value = "";
      getDatas(true);
    }
    async function buy$1(metabot) {
      if (metabot.nftSellState === 1) {
        ElMessage.warning(i18n.t("isBeCancelSelled"));
        return;
      } else if (metabot.nftSellState === 2) {
        ElMessage.warning(i18n.t("isBeBuyed"));
        return;
      } else if (metabot.nftSellState === 3) {
        ElMessage.warning(i18n.t("comingSoon "));
        return;
      } else {
        if (!metabot.nftIsReady)
          return;
      }
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        customClass: "full-loading"
      });
      const nftDetail = await NFTDetail(metabot.nftGenesis, metabot.nftCodehash, metabot.nftTokenIndex).catch(() => loading.close());
      if (nftDetail) {
        buy(nftDetail).then(() => {
          metabot.nftSellState = 1;
          metabot.nftOwnerMetaId = store.state.userInfo.metaId;
          metabot.nftOwnerName = store.state.userInfo.name;
          ElMessage.success(i18n.t("buySuccess"));
          loading.close();
          router.push({
            name: "nftSuccess",
            params: {
              genesisId: metabot.nftGenesis,
              tokenIndex: metabot.nftTokenIndex,
              codehash: metabot.nftCodehash
            },
            query: {
              type: "buyed"
            }
          });
        }).catch((res) => {
          loading.close();
          if (res)
            nftNotCanBuy(res);
        });
      }
    }
    function nftNotCanBuy(res) {
      if (res.code === 204 && res.data && res.data.message === "The NFT is not for sale because  the corresponding SellUtxo cannot be found." || res.data.message === "258: txn-mempool-conflict") {
        ElMessage.error(i18n.t("nftNotCanBuy"));
        pagination.page = 1;
        pagination.loading = false;
        pagination.nothing = false;
        isShowSkeleton.value = true;
        getDatas(true);
      }
    }
    onMounted(() => {
      pagination.page = 1;
      pagination.loading = false;
      pagination.nothing = false;
      getDatas(true);
    });
    return (_ctx, _cache) => {
      const _component_el_skeleton_item = ElSkeletonItem;
      const _component_ElImage = ElImage;
      const _component_UserAvatar = resolveComponent("UserAvatar");
      const _component_el_skeleton = ElSkeleton;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(InnerPageHeader, {
          title: "MetaBot",
          intro: _ctx.$t("metaBotDrsc"),
          keyword: keyword.value,
          onSearch: search
        }, null, 8, ["intro", "keyword"]),
        createCommentVNode(" banner "),
        createBaseVNode("div", _hoisted_1, [
          unref(i18n).locale.value === "zh" ? (openBlock(), createElementBlock("a", {
            key: 0,
            onClick: toMetabot
          }, _hoisted_3)) : (openBlock(), createElementBlock("a", {
            key: 1,
            onClick: toMetabot
          }, _hoisted_5))
        ]),
        countdown.value > 0 && isShowCountdown.value ? (openBlock(), createBlock(unref(index), {
          key: 0,
          time: countdown.value,
          transform: transformSlotProps,
          onEnd: onCountdownEnd
        }, {
          default: withCtx(({ days, hours, minutes, seconds }) => [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, "#016 - #200 " + toDisplayString(_ctx.$t("sellCountDown")) + ":", 1),
              createBaseVNode("div", _hoisted_8, toDisplayString(parseInt(hours) + parseInt(days) * 24) + " : " + toDisplayString(minutes) + " : " + toDisplayString(seconds), 1)
            ])
          ]),
          _: 1
        }, 8, ["time"])) : createCommentVNode("v-if", true),
        createBaseVNode("div", _hoisted_9, [
          (openBlock(), createElementBlock(Fragment, null, renderList(sections, (section, index) => {
            return createBaseVNode("a", {
              class: normalizeClass(["metabot-tag", { active: sectionIndex.value === index }]),
              key: index,
              onClick: ($event) => changeSectionIndex(index)
            }, toDisplayString(section.name), 11, _hoisted_10);
          }), 64))
        ]),
        createVNode(_component_el_skeleton, {
          class: "meta-bot-list container",
          loading: isShowSkeleton.value,
          animated: "",
          count: unref(pagination).pageSize
        }, {
          template: withCtx(() => [
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", _hoisted_12, [
                createVNode(_component_el_skeleton_item, {
                  variant: "image",
                  class: "el-skeleton-item-image"
                })
              ]),
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("div", _hoisted_14, [
                  createVNode(_component_el_skeleton_item, {
                    variant: "text",
                    style: { "width": "30%" }
                  })
                ]),
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("div", _hoisted_16, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "text",
                      style: { "width": "60%" }
                    })
                  ]),
                  createBaseVNode("div", _hoisted_17, [
                    createVNode(_component_el_skeleton_item, {
                      variant: "text",
                      style: { "width": "60%" }
                    })
                  ])
                ]),
                createVNode(_component_el_skeleton_item, {
                  class: "btn btn-block btn-gray",
                  variant: "button",
                  style: { "width": "100%", "box-sizing": "border-box", "border": "none" }
                })
              ])
            ])
          ]),
          default: withCtx(() => [
            createCommentVNode(" MetaBot list "),
            createBaseVNode("div", _hoisted_18, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(metaBots), (metabot, index$1) => {
                return openBlock(), createElementBlock("a", {
                  onClick: ($event) => toDetail(metabot),
                  class: "meta-bot-item",
                  key: metabot.nftGenesis + metabot.nftCodehash + metabot.nftTokenIndex
                }, [
                  createCommentVNode(' <div class="cover">\n            <img :src="metafileUrl(metabot.nftIcon)" :alt="metabot.nftName" />\n          </div> '),
                  createBaseVNode("div", _hoisted_20, [
                    createVNode(_component_ElImage, {
                      lazy: true,
                      src: unref(metafileUrl)(metabot.nftIcon)
                    }, null, 8, ["src"]),
                    metabot.isAuction && metabot.auctionStatus === 1 && metabot.auctionDeadTime && metabot.auctionDeadTime > unref(now) ? (openBlock(), createBlock(unref(index), {
                      key: 0,
                      class: "countdown",
                      time: metabot.auctionDeadTime ? metabot.auctionDeadTime - new Date().getTime() : 0,
                      transform: transformSlotProps,
                      onEnd: onCountdownEnd
                    }, {
                      default: withCtx(({ days, hours, minutes, seconds }) => [
                        _hoisted_21,
                        createBaseVNode("span", null, toDisplayString(parseInt(hours) + parseInt(days) * 24) + ":" + toDisplayString(minutes) + ":" + toDisplayString(seconds), 1)
                      ]),
                      _: 2
                    }, 1032, ["time"])) : createCommentVNode("v-if", true)
                  ]),
                  createBaseVNode("div", _hoisted_22, [
                    createBaseVNode("div", _hoisted_23, toDisplayString(metabot.nftName), 1),
                    createBaseVNode("div", _hoisted_24, [
                      createBaseVNode("div", _hoisted_25, [
                        createVNode(_component_UserAvatar, {
                          class: "avatar",
                          metaId: metabot.nftIssueMetaId,
                          type: metabot.nftIssueAvatarType
                        }, null, 8, ["metaId", "type"]),
                        createBaseVNode("span", _hoisted_26, toDisplayString(metabot.nftIssuer), 1),
                        createBaseVNode("span", _hoisted_27, "(" + toDisplayString(_ctx.$t("creater")) + ")", 1)
                      ]),
                      createBaseVNode("div", _hoisted_28, [
                        createVNode(_component_UserAvatar, {
                          class: "avatar",
                          metaId: metabot.nftOwnerMetaId,
                          hasmask: metabot.nftOwnerAvatarType === "nft-metabot"
                        }, null, 8, ["metaId", "hasmask"]),
                        createBaseVNode("span", _hoisted_29, toDisplayString(metabot.nftOwnerName), 1),
                        createBaseVNode("span", _hoisted_30, "(" + toDisplayString(_ctx.$t("owner")) + ")", 1)
                      ])
                    ]),
                    createCommentVNode(" nftSellState !== 3 \u4E0A\u67B6\u51FA\u552E/ \u5DF2\u88AB\u4E0B\u67B6/\u5DF2\u88AB\u8D2D\u4E70 "),
                    metabot.nftSellState !== 3 && metabot.nftIsReady ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: normalizeClass(["btn btn-block", {
                        "btn-gray": metabot.nftSellState !== 0 || !metabot.nftIsReady,
                        "line-through": metabot.nftSellState !== 0 || !metabot.nftIsReady
                      }]),
                      onClick: withModifiers(($event) => buy$1(metabot), ["stop"])
                    }, toDisplayString(new unref(Decimal)(metabot.nftPrice).div(Math.pow(10, 8)).toString()) + " BSV ", 11, _hoisted_31)) : unref(isAuction) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createCommentVNode(" \u62CD\u5356 "),
                      index$1 <= 1 ? (openBlock(), createElementBlock("div", _hoisted_32, toDisplayString(_ctx.$t("NotForSale")), 1)) : !metabot.currentPrice ? (openBlock(), createElementBlock("div", _hoisted_33, toDisplayString(_ctx.$t("unStart")), 1)) : (openBlock(), createElementBlock("div", {
                        key: 2,
                        class: normalizeClass(["btn btn-block auction-btn flex flex-align-center flex-pack-center", { "btn-gray": metabot.auctionStatus !== 1 }])
                      }, [
                        createBaseVNode("div", null, [
                          createBaseVNode("div", _hoisted_34, toDisplayString(metabot.auctionStatus === 0 ? _ctx.$t("unStart") : metabot.auctionStatus === 1 ? _ctx.$t("currentBid") : metabot.auctionStatus === 2 ? _ctx.$t("finalPrice") : ""), 1),
                          metabot.auctionStatus !== 0 ? (openBlock(), createElementBlock("div", _hoisted_35, toDisplayString(metabot.currentPrice) + " BSV ", 1)) : createCommentVNode("v-if", true)
                        ])
                      ], 2))
                    ], 2112)) : metabot.nftSellState === 2 || metabot.nftSellState === 1 || metabot.nftSellState === 0 ? (openBlock(), createElementBlock("div", {
                      key: 2,
                      class: normalizeClass(["btn btn-block", {
                        "btn-gray": metabot.nftSellState !== 0 || !metabot.nftIsReady,
                        "line-through": metabot.nftSellState !== 0 || !metabot.nftIsReady
                      }]),
                      onClick: withModifiers(($event) => buy$1(metabot), ["stop"])
                    }, toDisplayString(new unref(Decimal)(metabot.nftPrice).div(Math.pow(10, 8)).toString()) + " BSV ", 11, _hoisted_36)) : metabot.nftSellState === 3 ? (openBlock(), createElementBlock("div", {
                      key: 3,
                      class: "btn btn-block btn-gray",
                      onClick: withModifiers(($event) => buy$1(metabot), ["stop"])
                    }, toDisplayString(_ctx.$t("comingSoon ")), 9, _hoisted_37)) : createCommentVNode("v-if", true)
                  ])
                ], 8, _hoisted_19);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["loading", "count"]),
        createBaseVNode("div", _hoisted_38, [
          createCommentVNode(' <LoadMore\n        :pagination="pagination"\n        @getMore="getMore"\n        v-if="metaBots.length > 0 && !isShowSkeleton"\n      /> '),
          unref(metaBots).length <= 0 ? (openBlock(), createBlock(IsNull, { key: 0 })) : createCommentVNode("v-if", true)
        ])
      ], 64);
    };
  }
});
var MetaBot = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-46fd3b38"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/MetaBot.vue"]]);

export { MetaBot as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YUJvdC5lY2IyMDVjYS5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
