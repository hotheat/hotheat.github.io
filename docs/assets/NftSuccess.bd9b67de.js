import { _ as _export_sfc, e as defineComponent, aq as useRoute, t as useRouter, u as useI18n, v as reactive, r as ref, ar as GetLegalNftDetail, g as openBlock, A as createElementBlock, l as createVNode, j as withCtx, C as unref, D as toDisplayString, m as createCommentVNode, k as createBaseVNode, F as Fragment, E as useStore, Z as checkSdkStatus, a0 as ElLoading, ao as ElMessageBox } from './index.e6d8aff8.js';
import { E as ElSkeletonItem, a as ElSkeleton } from './skeleton.280f6775.js';
import { N as NftMsgCard } from './NftMsgCard.f74864d1.js';
import { N as NftOffSale } from './offSale.1055d404.js';
import { N as NFTDetail } from './nftDetail.94766a12.js';
import './image-viewer.d1105775.js';
import './Cert.7e5e0113.js';
import './icon_uncer.76f0b6c4.js';
import './icon_cer.5f0b2a62.js';

var NftSuccess_scss_vue_type_style_index_0_src_276aee3e_scope_true_lang = '';

const _hoisted_1 = { class: "create-success" };
const _hoisted_2 = {
  key: 0,
  class: "title"
};
const _hoisted_3 = {
  key: 1,
  class: "title"
};
const _hoisted_4 = { class: "operates flex flex-align-center" };
const _hoisted_5 = {
  key: 0,
  class: "legalBuySuccessWrap"
};
const _hoisted_6 = {
  key: 1,
  class: "operates flex flex-align-center"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const i18n = useI18n();
    const store = useStore();
    const nft = reactive({
      val: {}
    });
    const isShowSkeleton = ref(true);
    function tolegalIndex() {
      router.push({
        name: "topicDetail",
        params: {
          key: "legal",
          metaId: store.state.userInfo.metaId
        }
      });
    }
    function getDetail() {
      return new Promise(async (resolve) => {
        console.log("zxczx222asas", route.query);
        if (route.query.txId && typeof route.query.txId === "string") {
          await store.state.sdk?.checkNftTxIdStatus(route.query.txId);
        }
        let _nft;
        if (route.query.uuid) {
          let res = await GetLegalNftDetail({
            uuid: typeof route.query.uuid === "string" ? route.query.uuid : ""
          }).catch(() => isShowSkeleton.value = false);
          if (res?.code == 0) {
            _nft = res.data;
          }
        } else {
          _nft = await NFTDetail(typeof route.params.genesisId === "string" ? route.params.genesisId : "", typeof route.params.codehash === "string" ? route.params.codehash : "", typeof route.params.tokenIndex === "string" ? route.params.tokenIndex : "").catch(() => isShowSkeleton.value = false);
        }
        if (_nft && typeof _nft !== "boolean") {
          nft.val = _nft;
          if (route.query.uuid) {
            nft.val.coverUrl = _nft.nftIcon;
            nft.val.foundryName = _nft.nftIssuer;
            nft.val.foundryMetaId = _nft.nftIssueMetaId;
          }
          console.log("xzxzxz22a", nft.val);
          isShowSkeleton.value = false;
        }
        resolve();
      });
    }
    function toDetail() {
      if (route.query.type === "buylegal") {
        router.replace({
          name: "legaldetail",
          params: {
            uuid: route.query.uuid
          }
        });
      } else {
        router.replace({
          name: "detail",
          params: {
            genesisId: route.params.genesisId,
            codehash: route.params.codehash,
            tokenIndex: route.params.tokenIndex
          }
        });
      }
    }
    function toSale() {
      router.replace({
        name: "sale",
        params: {
          genesisId: route.params.genesisId,
          codehash: route.params.codehash,
          tokenIndex: route.params.tokenIndex
        }
      });
    }
    async function offSale() {
      await checkSdkStatus();
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
        NftOffSale(nft.val, loading).then(() => {
          nft.val.putAway = false;
          loading.close();
        }).catch(() => {
          loading.close();
        });
      }).catch(() => loading.close());
    }
    if (route.params.genesisId && route.params.codehash && route.params.tokenIndex) {
      getDetail();
    }
    return (_ctx, _cache) => {
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElSkeleton = ElSkeleton;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ElSkeleton, {
          loading: isShowSkeleton.value,
          animated: ""
        }, {
          template: withCtx(() => [
            createVNode(_component_ElSkeletonItem, {
              class: "title",
              variant: "h1"
            })
          ]),
          default: withCtx(() => [
            unref(route).query.type === "created" ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(_ctx.$t("createdSuccessTitle")), 1)) : unref(route).query.type === "buyed" || unref(route).query.type === "buylegal" ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(_ctx.$t("buySuccessTitle")), 1)) : createCommentVNode("v-if", true)
          ]),
          _: 1
        }, 8, ["loading"]),
        createCommentVNode(" nft \u4FE1\u606F \u5361\u7247 "),
        createVNode(NftMsgCard, {
          skeleton: isShowSkeleton.value,
          "user-name": unref(nft).val.foundryName,
          "cover-url": unref(nft).val.coverUrl,
          name: unref(nft).val.nftName,
          "created-at": unref(nft).val.forgeTime,
          "meta-id": unref(nft).val.foundryMetaId
        }, null, 8, ["skeleton", "user-name", "cover-url", "name", "created-at", "meta-id"]),
        createVNode(_component_ElSkeleton, {
          loading: isShowSkeleton.value,
          animated: ""
        }, {
          template: withCtx(() => [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_ElSkeletonItem, {
                class: "btn btn-plain btn-block flex1",
                variant: "button"
              }),
              createVNode(_component_ElSkeletonItem, {
                class: "btn btn-plain btn-block flex1",
                variant: "button"
              })
            ])
          ]),
          default: withCtx(() => [
            unref(route).query.type === "buylegal" ? (openBlock(), createElementBlock("div", _hoisted_5, [
              createBaseVNode("span", null, toDisplayString(_ctx.$t("waitMiniute")), 1),
              createBaseVNode("a", {
                class: "btn flex1 btn-block",
                onClick: tolegalIndex
              }, toDisplayString(_ctx.$t("goOnView")), 1)
            ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
              createBaseVNode("a", {
                class: "btn btn-plain btn-block flex1",
                onClick: toDetail
              }, toDisplayString(_ctx.$t("lookNftDetail")), 1),
              unref(route).query.type === "created" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                unref(nft).val.putAway ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  class: "btn flex1 btn-block",
                  onClick: offSale
                }, toDisplayString(_ctx.$t("offsale")), 1)) : (openBlock(), createElementBlock("a", {
                  key: 1,
                  class: "btn flex1 btn-block",
                  onClick: toSale
                }, toDisplayString(_ctx.$t("salenft")), 1))
              ], 2112)) : createCommentVNode("v-if", true)
            ]))
          ]),
          _: 1
        }, 8, ["loading"])
      ]);
    };
  }
});
var NftSuccess = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/NftSuccess.vue"]]);

export { NftSuccess as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmZ0U3VjY2Vzcy5iZDliNjdkZS5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
