import { _ as _export_sfc, e as defineComponent, u as useI18n, a as onMounted, g as openBlock, i as createBlock, j as withCtx, k as createBaseVNode, D as toDisplayString, l as createVNode, C as unref, as as metafileUrl, A as createElementBlock, m as createCommentVNode, L as normalizeClass, J as createTextVNode, bi as isRef, q as pushScopeId, s as popScopeId, X as ElMessage, N as ElButton, ap as ElDialog, t as useRouter, aq as useRoute, r as ref, d as computed, U as UnitName, v as reactive, w as watch, n as nextTick, aQ as legalNftConverterPrice, aR as converterPrice, aV as bsv, K as withModifiers, F as Fragment, E as useStore, cj as openMyBlindBox, a2 as NFTApiGetNFTDetail, Z as checkSdkStatus, a0 as ElLoading, ao as ElMessageBox } from './index.f03006d5.js';
import { E as ElSkeletonItem, a as ElSkeleton } from './skeleton.4c62fb88.js';
import { _ as _imports_0$2, a as _imports_1 } from './detailDetach-owner.53484477.js';
import { P as PayConfirmVue, _ as _imports_3, a as _imports_4 } from './PayConfirm.c06f8772.js';
import { a as auctionConfirmSend } from './auction.b50cb735.js';
import { N as NFTDetail } from './nftDetail.28374e41.js';
import { N as NftOffSale } from './offSale.97e1f547.js';
import { i as index } from './vue-countdown.esm.dedc6811.js';
import { N as NFTCover } from './Cover.bf0d133a.js';
import { _ as _imports_0$1 } from './icon_cer_nft.95196f53.js';
import { E as ElImage } from './image-viewer.1c165fb3.js';
import { _ as _imports_0, S as SendNft } from './SendNft.9ca5fa2f.js';

var _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAXCAYAAADpwXTaAAAAAXNSR0IArs4c6QAAAWFJREFUOE+t1TFIXEEQxvHfqVErMSQiWAZELSWVENFaTBGwtJKUFoIY0M7OImAgreliYwJKQEgVJaTUQrA5EEljJyoIGhExzPEOzuUuefJuu32z+3/zfbM7W/JwtOAYX7CQxPqxj7fYSGKVaSn52IlrbOFNEhvHDhaxkgfWihN8xWyyYQgHmMHnPLBY045b3NfZ0IGbeqCqzNAfflTHM1xlchvtC+AePuCouig8+1YDi/kALjO5jWBd6Mt++ho/HluAFDyRVf0ML8Kax1SzXparmMMofhWFzeM9JrFdBBbH6CdGMpm/88BCwnCi8QnC+DGsYzpvAc7R3aisiPg7rOXJLK7RywR2hwv0ZAWIYzKVB/aPpCqhOBaHKDcDFsBdvGoGLBhlPC8Ka8MylvApYJsYzIzJezerPvbiaZbZaAqLRRGMBvnnP85HizrFd3yM5pDKLNzPahNoaqdt6htQ6HX6C2OzYNUuOuEvAAAAAElFTkSuQmCC";

var _imports_5 = "data:image/png;base64,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";

var _imports_6 = "data:image/png;base64,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";

var BlindBoxDialog_scss_vue_type_style_index_0_src_f0619a92_scoped_true_lang = '';

const _withScopeId$1 = (n) => (pushScopeId("data-v-f0619a92"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "blindBoxDialogTitle" };
const _hoisted_2$1 = { class: "blindBoxDialogBody flex" };
const _hoisted_3$1 = { class: "top flex" };
const _hoisted_4$1 = { class: "blindboxImgWrap flex" };
const _hoisted_5$1 = { class: "issuerWrap flex" };
const _hoisted_6$1 = { class: "issuer" };
const _hoisted_7$1 = { class: "author" };
const _hoisted_8$1 = {
  key: 0,
  src: _imports_0,
  class: "mask"
};
const _hoisted_9$1 = ["src"];
const _hoisted_10$1 = { class: "username" };
const _hoisted_11$1 = { class: "contactAddress flex" };
const _hoisted_12$1 = { class: "left" };
const _hoisted_13$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "right flex" }, [
  /* @__PURE__ */ createBaseVNode("span", null, "--"),
  /* @__PURE__ */ createCommentVNode(` <a class="copy" >{{ $t('look') }}</a> `)
], -1));
const _hoisted_14$1 = { class: "amountTip flex" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    visible: { type: Boolean, required: true, default: false },
    blindBoxRestNum: { type: Number, required: true },
    blindBoxOpenedResult: { type: null, required: true }
  },
  emits: ["blindBoxclose", "goOnRemoveBlindBox", "removeFail", "removeNftList"],
  setup(__props, { emit }) {
    const props = __props;
    const i18n = useI18n();
    onMounted(() => {
    });
    function closeDialog() {
      if (props.blindBoxRestNum <= 0) {
        emit("removeNftList");
      }
      emit("blindBoxclose");
    }
    function removeMoreBlindBox() {
      if (props.blindBoxRestNum <= 0) {
        return ElMessage.error(`${i18n.t("noMoreBlindbox")}`);
      } else {
        emit("goOnRemoveBlindBox");
      }
    }
    return (_ctx, _cache) => {
      const _component_ElImage = ElImage;
      const _component_ElButton = ElButton;
      const _component_ElDialog = ElDialog;
      return openBlock(), createBlock(_component_ElDialog, {
        "custom-class": "blindBoxDialog",
        modelValue: __props.visible,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(visible) ? visible.value = $event : null),
        onClose: closeDialog,
        center: "",
        "close-on-click-modal": false
      }, {
        title: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("span", null, toDisplayString(_ctx.$t("blindBoxDialogTitle")), 1)
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("div", _hoisted_3$1, [
              createBaseVNode("span", null, toDisplayString(__props.blindBoxOpenedResult.nftName), 1)
            ]),
            createBaseVNode("div", _hoisted_4$1, [
              createVNode(_component_ElImage, {
                fit: "contain",
                src: unref(metafileUrl)(__props.blindBoxOpenedResult.nftIcon),
                "preview-src-list": [unref(metafileUrl)(__props.blindBoxOpenedResult.nftIcon)]
              }, null, 8, ["src", "preview-src-list"])
            ]),
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("div", _hoisted_6$1, toDisplayString(_ctx.$t("creater")) + ":", 1),
              createBaseVNode("div", _hoisted_7$1, [
                __props.blindBoxOpenedResult.nftIssueAvatarType === "nft-metabot" ? (openBlock(), createElementBlock("img", _hoisted_8$1)) : createCommentVNode("v-if", true),
                createBaseVNode("img", {
                  class: normalizeClass(["avatar", {
                    hasmask: __props.blindBoxOpenedResult.nftIssueAvatarType === "nft-metabot"
                  }]),
                  src: _ctx.$filters.avatar(__props.blindBoxOpenedResult.nftIssueMetaId)
                }, null, 10, _hoisted_9$1),
                createBaseVNode("span", _hoisted_10$1, toDisplayString(__props.blindBoxOpenedResult.nftIssuer), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_11$1, [
              createBaseVNode("div", _hoisted_12$1, toDisplayString(_ctx.$t("contractaddr")) + "\uFF1A", 1),
              _hoisted_13$1
            ]),
            createVNode(_component_ElButton, {
              class: "btn removeBlindBoxBtn",
              size: "large",
              onClick: removeMoreBlindBox
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(__props.blindBoxRestNum > 0 ? _ctx.$t("goOnRemove") : _ctx.$t("noMoreBox")), 1)
              ]),
              _: 1
            }),
            createBaseVNode("div", _hoisted_14$1, [
              createBaseVNode("span", null, toDisplayString(__props.blindBoxRestNum > 0 ? `\u5269\u4F59${__props.blindBoxRestNum}\u4E2A\u76F2\u76D2` : _ctx.$t("noMoreBlindbox")), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
var BlindBoxDialogVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f0619a92"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/BlindBox/BlindBoxDialog.vue"]]);

var NFT_scss_vue_type_style_index_0_src_a138cf6e_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-a138cf6e"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "nft" };
const _hoisted_2 = { class: "cover" };
const _hoisted_3 = { class: "cont" };
const _hoisted_4 = { class: "name" };
const _hoisted_5 = { class: "user-list" };
const _hoisted_6 = { class: "user-item flex flex-align-center" };
const _hoisted_7 = { class: "user-item flex flex-align-center" };
const _hoisted_8 = { class: "operate flex flex-align-center" };
const _hoisted_9 = { class: "flex1" };
const _hoisted_10 = { class: "cover" };
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "dot" }, null, -1));
const _hoisted_12 = { class: "cont" };
const _hoisted_13 = { class: "operate flex flex-align-center" };
const _hoisted_14 = {
  key: 0,
  class: "name"
};
const _hoisted_15 = {
  key: 1,
  class: "blindBoxName"
};
const _hoisted_16 = ["src"];
const _hoisted_17 = { class: "operateBtn" };
const _hoisted_18 = {
  key: 0,
  class: "blindBoxBtn"
};
const _hoisted_19 = ["size"];
const _hoisted_20 = {
  key: 1,
  class: "otherBtn"
};
const _hoisted_21 = {
  key: 0,
  class: "seriesAmount"
};
const _hoisted_22 = ["type", "onClick"];
const _hoisted_23 = { class: "user-list" };
const _hoisted_24 = { class: "user-item flex flex-align-center" };
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "avatar",
  src: _imports_0$2,
  alt: ""
}, null, -1));
const _hoisted_26 = { class: "username" };
const _hoisted_27 = { class: "label" };
const _hoisted_28 = {
  key: 0,
  class: "user-item flex flex-align-center"
};
const _hoisted_29 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "avatar",
  src: _imports_1,
  alt: ""
}, null, -1));
const _hoisted_30 = { class: "user-info" };
const _hoisted_31 = { class: "username" };
const _hoisted_32 = { class: "label" };
const _hoisted_33 = {
  key: 0,
  class: "operate flex flex-align-center flex-pack-justify"
};
const _hoisted_34 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, [
  /* @__PURE__ */ createBaseVNode("img", { src: _imports_2 })
], -1));
const _hoisted_35 = {
  key: 0,
  src: _imports_3
};
const _hoisted_36 = {
  key: 1,
  src: _imports_4
};
const _hoisted_37 = {
  key: 1,
  class: "detail-op flex flex-align-center flex-pack-justify"
};
const _hoisted_38 = { class: "flex flex-align-center" };
const _hoisted_39 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_5,
  alt: ""
}, null, -1));
const _hoisted_40 = ["type", "onClick"];
const _hoisted_41 = { class: "flex flex-align-center" };
const _hoisted_42 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  src: _imports_6,
  alt: ""
}, null, -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    nft: { type: null, required: true },
    isSkeleton: { type: Boolean, required: false, default: true },
    isShowSaleOut: { type: Boolean, required: false, default: true }
  },
  emits: ["remove", "removeOneBlindBox", "removeNft"],
  setup(__props, { emit }) {
    const props = __props;
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const i18n = useI18n();
    const price = ref("0");
    const isShowConfirm = ref(false);
    const isBlindBoxPage = computed(() => {
      return route.name === "myBlindbox";
    });
    const isOpenBlindBox = ref(false);
    const isOpenSendNft = ref(false);
    const cnyMode = computed(() => {
      return store.state.currentPrice === UnitName.RMB;
    });
    const blindBoxOpenedResult = reactive({
      val: null
    });
    watch(() => store.state.currentPrice, (newVal) => {
      if (newVal) {
        nextTick(() => {
          if (props.nft.isLegal) {
            price.value = legalNftConverterPrice(props.nft.price);
          } else {
            price.value = converterPrice(props.nft.price);
          }
        });
      }
    }, { immediate: true });
    console.log("x2222ssss222xxx", props.nft);
    const isSelf = computed(() => {
      if (store.state.userInfo) {
        if (store.state.userInfo.metaId === props.nft.ownerMetaId || store.state.userInfo.metaId === route.params.metaId) {
          const userRouterList = ["selfOffsale", "userSale", "userAuction", "userSeries", "myBlindbox"];
          return userRouterList.find((item) => item === route.name) ? true : false;
        } else {
          return false;
        }
      } else {
        return false;
      }
    });
    const nftButtonText = computed(() => {
      if (isSelf.value) {
        if (props.nft.hasSeriesCount > 1) {
          return i18n.t("seeAll");
        } else if (props.nft.status === 1) {
          return i18n.t("sale");
        } else if (props.nft.status === 0) {
          return i18n.t("offsale");
        } else if (props.nft.status === 2) {
          return i18n.t("sale");
        } else if (props.nft.status === 3) {
          return i18n.t("sale");
        } else if (props.nft.status === 4) {
          return i18n.t("offsale");
        } else if (props.nft.status === 5) {
          return i18n.t("sale");
        } else if (props.nft.status === 6) {
          return i18n.t("sale");
        } else if (props.nft.status === 7) {
          return i18n.t("auctioning");
        } else if (props.nft.status === 8) {
          return i18n.t("confirmAuctionSend");
        } else if (props.nft.status === 9) {
          return i18n.t("isBeBuyed");
        }
      } else {
        if (props.nft.status === 1) {
          return i18n.t("isBeBuyedOrCanceled");
        } else if (props.nft.status === 0) {
          return price.value;
        } else if (props.nft.status === 2) {
          return i18n.t("isBeBuyedOrCanceled");
        } else if (props.nft.status === 3) {
          return i18n.t("comingSoon");
        } else if (props.nft.status === 4) {
          return price.value;
        } else if (props.nft.status === 5) {
          return i18n.t("notSale");
        } else if (props.nft.status === 6) {
          return i18n.t("unauctioning");
        } else if (props.nft.status === 7) {
          return i18n.t("iWanToBid");
        } else if (props.nft.status === 8) {
          return bsv(props.nft.price) + " BSV";
        } else if (props.nft.status === 9) {
          return bsv(props.nft.price) + " BSV";
        } else {
          return price.value;
        }
      }
    });
    computed(() => {
      return props.nft.status === 0;
    });
    const nftButtonType = computed(() => {
      if (isSelf.value) {
        if (props.nft.hasSeriesCount > 1) {
          return "";
        } else if (props.nft.status === 1) {
          return "";
        } else if (props.nft.status === 0) {
          return "primary";
        } else if (props.nft.status === 2) {
          return "primary";
        } else if (props.nft.status === 3) {
          return "primary";
        } else if (props.nft.status === 4) {
          return "primary";
        } else if (props.nft.status === 5) {
          return "primary";
        } else if (props.nft.status === 6) {
          return "primary";
        } else if (props.nft.status === 7) {
          return "primary";
        } else if (props.nft.status === 8) {
          if (props.nft.ownerMetaId === store.state.userInfo.metaId) {
            return "primary";
          } else {
            return "info";
          }
        } else if (props.nft.status === 9) {
          return "info";
        }
      } else {
        if (props.nft.status === 1) {
          return "info";
        } else if (props.nft.status === 0) {
          return "default";
        } else if (props.nft.status === 2) {
          return "info";
        } else if (props.nft.status === 3) {
          return "info";
        } else if (props.nft.status === 4) {
          return "snap";
        } else if (props.nft.status === 5) {
          return "info";
        } else if (props.nft.status === 6) {
          return "info";
        } else if (props.nft.status === 7) {
          return "default";
        } else if (props.nft.status === 8) {
          return "info";
        } else if (props.nft.status === 9) {
          return "info";
        } else {
          return "primary";
        }
      }
    });
    const isShowBsvIcon = computed(() => {
      if (isSelf.value) {
        return false;
      } else {
        if (props.nft.status === 1) {
          return false;
        } else if (props.nft.status === 0) {
          return true;
        } else if (props.nft.status === 2) {
          return false;
        } else if (props.nft.status === 3) {
          return false;
        } else if (props.nft.status === 4) {
          return true;
        } else if (props.nft.status === 5) {
          return false;
        } else if (props.nft.status === 6) {
          return false;
        } else if (props.nft.status === 7) {
          return false;
        } else if (props.nft.status === 8) {
          return true;
        } else if (props.nft.status === 9) {
          return true;
        } else {
          return true;
        }
      }
    });
    async function continueRemoveBlindBox() {
      const res = await openMyBlindBox({
        metaid: store.state.userInfo.metaId
      });
      if (res.code == 0) {
        const blindBoxOpenNft = await NFTApiGetNFTDetail({
          tokenIndex: res.data.tokenIndex,
          codehash: res.data.codehash,
          genesis: res.data.genesis
        });
        if (blindBoxOpenNft.data.results.items.length > 0) {
          blindBoxOpenedResult.val = blindBoxOpenNft.data.results.items[0];
          if (!isOpenBlindBox.value) {
            isOpenBlindBox.value = true;
          }
          console.log("xzxzxzxzx", blindBoxOpenedResult.val);
          emit("removeOneBlindBox");
        } else {
          ElMessage.error(i18n.t("nftNotExist"));
        }
      }
    }
    function nftButtonFun() {
      if (isSelf.value) {
        if (props.nft.hasSeriesCount > 1) {
          toDetail();
        } else if (props.nft.status === 1) {
          toSale();
        } else if (props.nft.status === 0) {
          offSale();
        } else if (props.nft.status === 2) {
          toSale();
        } else if (props.nft.status === 3) {
          toSale();
        } else if (props.nft.status === 4) {
          offSale();
        } else if (props.nft.status === 5) {
          toSale();
        } else if (props.nft.status === 6) {
          toSale();
        } else if (props.nft.status === 7) {
          toDetail();
        } else if (props.nft.status === 8) {
          if (props.nft.ownerMetaId === store.state.userInfo.metaId) {
            confirmSend();
          } else {
            toDetail();
          }
        }
      } else {
        if (props.nft.status === 0 || props.nft.status === 4) {
          if (props.nft.isLegal && !cnyMode.value) {
            return ElMessage.error(`${i18n.t("notSupportBsvBuyLegal")}`);
          } else {
            isShowConfirm.value = true;
          }
        } else {
          toDetail();
        }
      }
    }
    async function payLike(nft) {
      if (nft.isHasLike)
        return;
      await checkSdkStatus();
      const res = await store.state.sdk.addPayLikeProtocol({
        receiveAddress: nft.ownerAddress,
        txId: nft.issueTxId
      });
      if (res.code === 200) {
        nft.isHasLike = true;
        nft.likeCount = nft.likeCount + 1;
      }
    }
    async function confirmSend() {
      if (props.nft.status !== 8)
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
            codehash: props.nft.codehash,
            genesis: props.nft.genesis,
            genesisTxid: props.nft.genesisTxId,
            tokenIndex: props.nft.tokenIndex,
            sensibleId: props.nft.sensibleId
          },
          issueAddress: props.nft.issueAddress,
          issueMetaId: props.nft.issueMetaId,
          nftAuctionId: props.nft.auctionTxId,
          amount: props.nft.price,
          isFirstSell: props.nft.isFirstSell
        };
        const result = await await auctionConfirmSend(params);
        if (result) {
          emit("remove", props.nft);
          loading.close();
          ElMessage.success(i18n.t("success"));
        }
      } catch (error) {
        if (error)
          ElMessage.error(JSON.stringify(error));
        loading.close();
      }
    }
    async function toSale() {
      router.push({
        name: "sale",
        params: {
          tokenIndex: props.nft.tokenIndex,
          genesisId: props.nft.genesis,
          codehash: props.nft.codehash
        }
      });
    }
    function offSale() {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        customClass: "full-loading"
      });
      ElMessageBox.confirm(`${i18n.t("offsaleConfirm")} ${props.nft.name} ?`, i18n.t("niceWarning"), {
        confirmButtonText: i18n.t("confirm"),
        cancelButtonText: i18n.t("cancel"),
        closeOnClickModal: false
      }).then(async () => {
        const nftDetail = await NFTDetail(props.nft.genesis, props.nft.codehash, props.nft.tokenIndex).catch(() => loading.close());
        if (nftDetail) {
          NftOffSale(nftDetail, loading).then(() => {
            emit("remove", props.nft);
            loading.close();
          }).catch(() => {
            loading.close();
          });
        }
      }).catch(() => loading.close());
    }
    function toDetail() {
      if (isBlindBoxPage.value) {
        return;
      }
      if (props.nft.hasSeriesCount > 1) {
        router.push({
          name: "series",
          params: {
            genesisId: props.nft.genesis,
            codehash: props.nft.codehash
          },
          query: { name: props.nft.name }
        });
      } else {
        console.log("\u8DF3\u8F6C\u5230\u8BE6\u60C5\u9875", 1231321321);
        const query = {};
        if (props.nft.status >= 6 && props.nft.status <= 8) {
          query.isAuctioin = true;
        }
        if (props.nft.isLegal) {
          router.push({
            name: "legaldetail",
            params: {
              uuid: props.nft.uuid
            }
          });
        } else {
          router.push({
            name: "detail",
            params: {
              genesisId: props.nft.genesis,
              codehash: props.nft.codehash,
              tokenIndex: props.nft.tokenIndex
            },
            query
          });
        }
      }
    }
    function transformSlotProps(props2) {
      const formattedProps = {};
      Object.entries(props2).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });
      return formattedProps;
    }
    function buySuccess() {
      props.nft.status = 1;
      props.nft.ownerMetaId = store.state.userInfo.metaId;
      props.nft.ownerName = store.state.userInfo.name;
      ElMessage.success(i18n.t("buySuccess"));
      isShowConfirm.value = false;
      router.push({
        name: "nftSuccess",
        params: {
          genesisId: props.nft.genesis,
          tokenIndex: props.nft.tokenIndex,
          codehash: props.nft.codehash
        },
        query: {
          type: props.nft.uuid ? "buylegal" : "buyed",
          uuid: props.nft.uuid ? props.nft.uuid : ""
        }
      });
    }
    function onCountdownEnd() {
      props.nft.status = 8;
    }
    function onRemoveNft() {
      emit("removeNft");
    }
    return (_ctx, _cache) => {
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElSkeleton = ElSkeleton;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_ElSkeleton, {
          loading: __props.isSkeleton,
          animated: ""
        }, {
          template: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", _hoisted_2, [
                createVNode(_component_ElSkeletonItem, { variant: "rect" })
              ]),
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(_component_ElSkeletonItem, { variant: "text" })
                ]),
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("div", _hoisted_6, [
                    createVNode(_component_ElSkeletonItem, { variant: "circle" }),
                    createVNode(_component_ElSkeletonItem, { variant: "p" })
                  ]),
                  createBaseVNode("div", _hoisted_7, [
                    createVNode(_component_ElSkeletonItem, { variant: "circle" }),
                    createVNode(_component_ElSkeletonItem, { variant: "p" })
                  ])
                ]),
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("div", _hoisted_9, [
                    unref(isSelf) ? (openBlock(), createBlock(_component_ElSkeletonItem, {
                      key: 0,
                      variant: "button"
                    })) : (openBlock(), createBlock(_component_ElSkeletonItem, {
                      key: 1,
                      variant: "button"
                    }))
                  ]),
                  !unref(isSelf) ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: "like flex flex-align-center",
                    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => payLike(__props.nft), ["stop"]))
                  }, [
                    createVNode(_component_ElSkeletonItem, { variant: "text" })
                  ])) : createCommentVNode("v-if", true)
                ])
              ])
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", {
              class: "nft",
              onClick: toDetail
            }, [
              createBaseVNode("div", _hoisted_10, [
                createVNode(NFTCover, {
                  cover: [
                    _ctx.$filters.metafile(__props.nft.cover),
                    __props.nft.backCover ? _ctx.$filters.metafile(__props.nft.backCover) : void 0
                  ],
                  isShowSaleOut: props.isShowSaleOut,
                  isRemint: __props.nft.isCompound,
                  isBlindBox: unref(isBlindBoxPage)
                }, null, 8, ["cover", "isShowSaleOut", "isRemint", "isBlindBox"]),
                createCommentVNode(' <ElImage fit="contain" :lazy="true" :src="$filters.metafile(nft.cover)" /> '),
                createCommentVNode(" \u5206\u7C7B "),
                createCommentVNode(`          <span class="classify" v-if="nft.classify && nft.classify !== '' && !isBlindBoxPage">{{`),
                createCommentVNode("              $t(nft.classify)"),
                createCommentVNode("            }}</span>"),
                createCommentVNode(" \u62CD\u5356 \u5012\u8BA1\u65F6 "),
                __props.nft.status === 7 ? (openBlock(), createBlock(unref(index), {
                  key: 0,
                  class: "countdown",
                  time: __props.nft.acutionEndTime ? __props.nft.acutionEndTime - new Date().getTime() : 0,
                  transform: transformSlotProps,
                  onEnd: onCountdownEnd
                }, {
                  default: withCtx(({ days, hours, minutes, seconds }) => [
                    _hoisted_11,
                    createBaseVNode("span", null, toDisplayString(parseInt(hours) + parseInt(days) * 24) + ":" + toDisplayString(minutes) + ":" + toDisplayString(seconds), 1)
                  ]),
                  _: 1
                }, 8, ["time"])) : createCommentVNode("v-if", true)
              ]),
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("div", _hoisted_13, [
                  !unref(isBlindBoxPage) ? (openBlock(), createElementBlock("div", _hoisted_14, toDisplayString(__props.nft.name), 1)) : (openBlock(), createElementBlock("div", _hoisted_15, [
                    createBaseVNode("span", null, toDisplayString(__props.nft.name), 1),
                    createBaseVNode("img", {
                      src: unref(_imports_0$1),
                      alt: ""
                    }, null, 8, _hoisted_16)
                  ])),
                  createBaseVNode("div", _hoisted_17, [
                    unref(isBlindBoxPage) ? (openBlock(), createElementBlock("div", _hoisted_18, [
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("myBlindboxAmount")) + toDisplayString(__props.nft.limited), 1),
                      createBaseVNode("a", {
                        onClick: continueRemoveBlindBox,
                        size: unref(store).state.isApp ? "mini" : "",
                        class: "flex flex-align-center btn-gray"
                      }, [
                        createBaseVNode("span", null, toDisplayString(_ctx.$t("openBlindBox")), 1)
                      ], 8, _hoisted_19)
                    ])) : (openBlock(), createElementBlock("div", _hoisted_20, [
                      props.nft.hasSeriesCount > 1 && unref(isSelf) ? (openBlock(), createElementBlock("span", _hoisted_21, toDisplayString(_ctx.$t("nftSeries")) + toDisplayString(props.nft.hasSeriesCount) + "/" + toDisplayString(props.nft.seriesTotal), 1)) : createCommentVNode("v-if", true),
                      !unref(isSelf) ? (openBlock(), createElementBlock("a", {
                        key: 1,
                        class: "flex flex-align-center btn-gray",
                        type: unref(nftButtonType),
                        size: "mini",
                        onClick: withModifiers(nftButtonFun, ["stop"])
                      }, toDisplayString(unref(nftButtonText)), 9, _hoisted_22)) : createCommentVNode("v-if", true),
                      unref(isShowBsvIcon) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [], 64)) : createCommentVNode("v-if", true)
                    ]))
                  ])
                ]),
                createBaseVNode("div", _hoisted_23, [
                  createBaseVNode("div", _hoisted_24, [
                    createCommentVNode("              <UserAvatar :metaId='nft.issueMetaId' :type='nft.issueAvatarType'></UserAvatar>"),
                    _hoisted_25,
                    createBaseVNode("span", _hoisted_26, toDisplayString(__props.nft.issueName), 1),
                    createBaseVNode("span", _hoisted_27, "(" + toDisplayString(unref(isBlindBoxPage) ? _ctx.$t("issuer") : _ctx.$t("creater")) + ")", 1)
                  ]),
                  !unref(isSelf) ? (openBlock(), createElementBlock("div", _hoisted_28, [
                    createCommentVNode("              <UserAvatar :metaId='nft.ownerMetaId' :type='nft.ownerAvatarType'></UserAvatar>"),
                    _hoisted_29,
                    createBaseVNode("div", _hoisted_30, [
                      createBaseVNode("span", _hoisted_31, toDisplayString(__props.nft.ownerName), 1),
                      createBaseVNode("span", _hoisted_32, "(" + toDisplayString(_ctx.$t("owner")) + ")", 1)
                    ])
                  ])) : createCommentVNode("v-if", true)
                ]),
                !unref(isSelf) && !unref(isBlindBoxPage) ? (openBlock(), createElementBlock("div", _hoisted_33, [
                  _hoisted_34,
                  createBaseVNode("div", {
                    class: "like flex flex-align-center",
                    onClick: _cache[1] || (_cache[1] = withModifiers(($event) => payLike(__props.nft), ["stop"]))
                  }, [
                    __props.nft.isHasLike ? (openBlock(), createElementBlock("img", _hoisted_35)) : (openBlock(), createElementBlock("img", _hoisted_36)),
                    createBaseVNode("span", null, toDisplayString(__props.nft.likeCount), 1)
                  ])
                ])) : (openBlock(), createElementBlock("div", _hoisted_37, [
                  createBaseVNode("div", _hoisted_38, [
                    _hoisted_39,
                    unref(isSelf) ? (openBlock(), createElementBlock("a", {
                      key: 0,
                      class: "flex flex-align-center btn-gray",
                      type: unref(nftButtonType),
                      size: "mini",
                      onClick: withModifiers(nftButtonFun, ["stop"])
                    }, toDisplayString(unref(nftButtonText)), 9, _hoisted_40)) : createCommentVNode("v-if", true)
                  ]),
                  createBaseVNode("div", _hoisted_41, [
                    _hoisted_42,
                    props.nft.hasSeriesCount <= 1 && unref(isSelf) ? (openBlock(), createElementBlock("a", {
                      key: 0,
                      size: "mini",
                      onClick: _cache[2] || (_cache[2] = withModifiers(($event) => isOpenSendNft.value = true, ["stop"])),
                      class: "flex sendNftBtn flex-align-center btn-gray"
                    }, toDisplayString(_ctx.$t("sendNft")), 1)) : createCommentVNode("v-if", true)
                  ])
                ]))
              ])
            ])
          ]),
          _: 1
        }, 8, ["loading"]),
        createCommentVNode(" pay confirm "),
        createVNode(PayConfirmVue, {
          price: price.value,
          visible: isShowConfirm.value,
          genesis: __props.nft.genesis,
          codehash: __props.nft.codehash,
          "token-index": __props.nft.tokenIndex,
          isLegal: props.nft.isLegal,
          uuid: props.nft.uuid,
          onClose: _cache[3] || (_cache[3] = ($event) => isShowConfirm.value = false),
          onSuccess: buySuccess
        }, null, 8, ["price", "visible", "genesis", "codehash", "token-index", "isLegal", "uuid"]),
        createCommentVNode("\u76F2\u76D2\u5F39\u7A97"),
        createVNode(BlindBoxDialogVue, {
          blindBoxOpenedResult: unref(blindBoxOpenedResult).val,
          blindBoxRestNum: __props.nft.limited,
          visible: isOpenBlindBox.value,
          onClose: _cache[4] || (_cache[4] = ($event) => isOpenBlindBox.value = false),
          onGoOnRemoveBlindBox: continueRemoveBlindBox,
          onRemoveNftList: onRemoveNft
        }, null, 8, ["blindBoxOpenedResult", "blindBoxRestNum", "visible"]),
        createCommentVNode("\u8F6CNFT\u5F39\u7A97"),
        createVNode(SendNft, {
          onRemoveNft: _cache[5] || (_cache[5] = ($event) => emit("remove", props.nft)),
          nft: __props.nft,
          visible: isOpenSendNft.value,
          onNftDialogClose: _cache[6] || (_cache[6] = ($event) => isOpenSendNft.value = false)
        }, null, 8, ["nft", "visible"])
      ], 64);
    };
  }
});
var NFT = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a138cf6e"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/NFT/NFT.vue"]]);

export { NFT as N };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTkZULmY5N2U3ODBkLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
