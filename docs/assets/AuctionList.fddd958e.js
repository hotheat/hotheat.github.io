import { _ as _export_sfc, e as defineComponent, t as useRouter, u as useI18n, f as resolveComponent, g as openBlock, A as createElementBlock, k as createBaseVNode, l as createVNode, C as unref, as as metafileUrl, m as createCommentVNode, D as toDisplayString, i as createBlock, j as withCtx, K as withModifiers, J as createTextVNode, L as normalizeClass, q as pushScopeId, s as popScopeId, E as useStore, a0 as ElLoading, X as ElMessage, v as reactive, aP as pagination, aq as useRoute, co as GetUserAuctionList, cp as GetAuctionList, F as Fragment, B as renderList } from './index.e6d8aff8.js';
import { E as ElImage } from './image-viewer.d1105775.js';
import { i as index } from './vue-countdown.esm.918522ea.js';
import { a as auctionConfirmSend } from './auction.534ed698.js';
import { L as LoadMore } from './LoadMore.1a56702b.js';
import { I as IsNull } from './IsNull.d8cfb8fb.js';

var AuctionItem_scss_vue_type_style_index_0_src_461869ec_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-461869ec"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "cover" };
const _hoisted_2 = {
  key: 0,
  class: "classify"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "dot" }, null, -1));
const _hoisted_4 = { class: "cont" };
const _hoisted_5 = ["title"];
const _hoisted_6 = { class: "user-list" };
const _hoisted_7 = { class: "user-item flex flex-align-center" };
const _hoisted_8 = { class: "name" };
const _hoisted_9 = { class: "type" };
const _hoisted_10 = { class: "user-item flex flex-align-center" };
const _hoisted_11 = { class: "name" };
const _hoisted_12 = { class: "type" };
const _hoisted_13 = { class: "mb5" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    auction: { type: null, required: true }
  },
  emits: ["remove"],
  setup(__props, { emit }) {
    const store = useStore();
    const router = useRouter();
    const i18n = useI18n();
    function toDetail(auction) {
      router.push({
        name: "detail",
        params: {
          genesisId: auction.genesis,
          codehash: auction.codehash,
          tokenIndex: auction.tokenIndex
        }
      });
    }
    function transformSlotProps(props2) {
      const formattedProps = {};
      Object.entries(props2).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });
      return formattedProps;
    }
    async function confirmSend(auction) {
      if (auction.currentAuctionState !== 3)
        return;
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        customClass: "full-loading"
      });
      const params = {
        nft: {
          codehash: auction.codehash,
          genesis: auction.genesis,
          genesisTxid: auction.genesisTxId,
          tokenIndex: auction.tokenIndex,
          sensibleId: auction.sensibleId
        },
        issueAddress: auction.issuerAddress,
        issueMetaId: auction.issuerMetaId,
        nftAuctionId: auction.txId,
        amount: auction.currentBidPriceInt ? auction.currentBidPriceInt : auction.startingPriceInt,
        isFirstSell: auction.nftIsFirstSell
      };
      const result = await await auctionConfirmSend(params).catch((error) => {
        if (error)
          ElMessage.error(JSON.stringify(error));
        loading.close();
      });
      if (result) {
        emit("remove", auction);
        loading.close();
        ElMessage.success(i18n.t("success"));
      }
    }
    return (_ctx, _cache) => {
      const _component_ElImage = ElImage;
      const _component_UserAvatar = resolveComponent("UserAvatar");
      return openBlock(), createElementBlock("div", {
        class: "auction-item",
        key: __props.auction.txId,
        onClick: _cache[1] || (_cache[1] = ($event) => toDetail(__props.auction))
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createVNode(_component_ElImage, {
            class: "cover-image",
            lazy: true,
            src: unref(metafileUrl)(__props.auction.icon),
            fit: "contain"
          }, null, 8, ["src"]),
          createCommentVNode(' <img\n        class="cover-image"\n        :src="metafileUrl(item?.coverUrl)"\n        :alt="item?.name"\n        :onerror="coverDefaultImg"\n      /> '),
          __props.auction.classifyList && __props.auction.classifyList.length > 0 ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(_ctx.$t(__props.auction.classifyList[0])), 1)) : createCommentVNode("v-if", true),
          __props.auction.currentAuctionState === 2 ? (openBlock(), createBlock(unref(index), {
            key: 1,
            class: "countdown",
            time: __props.auction.endTimeStampInt ? __props.auction.endTimeStampInt - new Date().getTime() : 0,
            transform: transformSlotProps,
            onEnd: _ctx.onCountdownEnd
          }, {
            default: withCtx(({ days, hours, minutes, seconds }) => [
              _hoisted_3,
              createBaseVNode("span", null, toDisplayString(parseInt(hours) + parseInt(days) * 24) + ":" + toDisplayString(minutes) + ":" + toDisplayString(seconds), 1)
            ]),
            _: 1
          }, 8, ["time", "onEnd"])) : createCommentVNode("v-if", true)
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", {
            class: "name",
            title: __props.auction.name
          }, toDisplayString(__props.auction.name), 9, _hoisted_5),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createVNode(_component_UserAvatar, {
                class: "avatar",
                metaId: __props.auction.issuerMetaId,
                type: __props.auction.avatarType
              }, null, 8, ["metaId", "type"]),
              createBaseVNode("span", _hoisted_8, toDisplayString(__props.auction.issuerName), 1),
              createBaseVNode("span", _hoisted_9, "(" + toDisplayString(_ctx.$t("creater")) + ")", 1)
            ]),
            createBaseVNode("div", _hoisted_10, [
              createVNode(_component_UserAvatar, {
                class: "avatar",
                metaId: __props.auction.ownerMetaId,
                type: __props.auction.ownerAvatarType
              }, null, 8, ["metaId", "type"]),
              createBaseVNode("span", _hoisted_11, toDisplayString(__props.auction.ownerName), 1),
              createBaseVNode("span", _hoisted_12, "(" + toDisplayString(_ctx.$t("owner")) + ")", 1)
            ])
          ]),
          createCommentVNode(" \u63D0\u53D6 "),
          unref(store).state.userInfo && __props.auction.ownerMetaId === unref(store).state.userInfo.metaId && __props.auction.currentAuctionState === 3 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "btn btn-block",
            onClick: _cache[0] || (_cache[0] = withModifiers(($event) => confirmSend(__props.auction), ["stop"]))
          }, [
            createBaseVNode("div", _hoisted_13, toDisplayString(_ctx.$t("confirmAuctionSend")), 1),
            createTextVNode(" " + toDisplayString(__props.auction.currentBidPrice === "" || __props.auction.currentBidPrice === "0" ? _ctx.$filters.bsvStr(__props.auction.startingPriceInt) : _ctx.$filters.bsvStr(__props.auction.currentBidPrice)) + " BSV ", 1)
          ])) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(["btn btn-block", {
              "btn-gray": __props.auction.currentAuctionState !== 2
            }])
          }, toDisplayString(__props.auction.currentBidPrice === "" || __props.auction.currentBidPrice === "0" ? _ctx.$filters.bsvStr(__props.auction.startingPriceInt) : _ctx.$filters.bsvStr(__props.auction.currentBidPrice)) + " BSV ", 3))
        ])
      ]);
    };
  }
});
var AuctionItemVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-461869ec"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/Auction/AuctionItem.vue"]]);

var AuctionList_scss_vue_type_style_index_0_src_320d79d6_scoped_true_lang = '';

const _hoisted_1 = { class: "auction-list container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    isUser: { type: Boolean, required: true, default: false }
  },
  setup(__props) {
    const props = __props;
    const pagination$1 = reactive({ ...pagination });
    const auctions = reactive([]);
    const route = useRoute();
    function getAuctionList(isCover = false) {
      return new Promise(async (resolve) => {
        let res;
        if (props.isUser) {
          res = await GetUserAuctionList({
            ...pagination$1,
            metaId: typeof route.params?.metaId === "string" ? route.params?.metaId : ""
          });
        } else {
          res = await GetAuctionList({
            ...pagination$1,
            nowTimestamp: new Date().getTime()
          });
        }
        if (res.code === 0) {
          if (isCover)
            auctions.length = 0;
          auctions.push(...res.data.results.items);
          const totalPage = Math.ceil(res.data.total / pagination$1.pageSize);
          if (totalPage <= pagination$1.page) {
            pagination$1.nothing = true;
          }
        }
        resolve();
      });
    }
    function removeItem(auction) {
      const index = auctions.findIndex((item) => item.txId === auction.txId);
      if (index !== -1) {
        auctions.splice(index, 1);
      }
    }
    function getMore() {
      pagination$1.page++;
      getAuctionList();
    }
    getAuctionList();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(auctions), (auction) => {
          return openBlock(), createBlock(AuctionItemVue, {
            auction,
            onRemove: removeItem
          }, null, 8, ["auction"]);
        }), 256)),
        unref(auctions).length > 0 ? (openBlock(), createBlock(LoadMore, {
          key: 0,
          pagination: unref(pagination$1),
          onGetMore: getMore
        }, null, 8, ["pagination"])) : (openBlock(), createBlock(IsNull, { key: 1 }))
      ]);
    };
  }
});
var AuctionListVue = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-320d79d6"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/Auction/AuctionList.vue"]]);

export { AuctionListVue as A };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXVjdGlvbkxpc3QuZmRkZDk1OGUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
