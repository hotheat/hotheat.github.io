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
import { N as NftMsgCard } from "./NftMsgCard.1c1af026.js";
import { d as defineComponent, W as useRoute, V as useRouter, u as useI18n, r as reactive, e as ref, o as openBlock, c as createElementBlock, h as createVNode, w as withCtx, g as unref, a4 as ElSkeletonItem, t as toDisplayString, j as createCommentVNode, a6 as ElSkeleton, a as createBaseVNode, F as Fragment, k as useStore, T as checkSdkStatus, a2 as ElLoading, a3 as ElMessageBox } from "./index.1063289c.js";
/* empty css                           *//* empty css                     */import { N as NftOffSale } from "./offSale.8a5b3e0c.js";
import { N as NFTDetail } from "./nftDetail.d498c8f0.js";
/* empty css                          */import "./Cert.4dc6bf7f.js";
import "./icon_cer.d2259267.js";
/* empty css                     */var NftSuccess_scss_vue_type_style_index_0_src_2fbd6b1e_scope_true_lang = "";
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
const _hoisted_5 = { class: "operates flex flex-align-center" };
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
    function getDetail() {
      return new Promise((resolve) => __async(this, null, function* () {
        var _a;
        if (route.query.txId && typeof route.query.txId === "string") {
          yield (_a = store.state.sdk) == null ? void 0 : _a.checkNftTxIdStatus(route.query.txId);
        }
        const _nft = yield NFTDetail(typeof route.params.genesisId === "string" ? route.params.genesisId : "", typeof route.params.codehash === "string" ? route.params.codehash : "", typeof route.params.tokenIndex === "string" ? route.params.tokenIndex : "").catch(() => isShowSkeleton.value = false);
        if (_nft && typeof _nft !== "boolean") {
          nft.val = _nft;
          isShowSkeleton.value = false;
        }
        resolve();
      }));
    }
    function toDetail() {
      router.replace({
        name: "detail",
        params: {
          genesisId: route.params.genesisId,
          codehash: route.params.codehash,
          tokenIndex: route.params.tokenIndex
        }
      });
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
    function offSale() {
      return __async(this, null, function* () {
        yield checkSdkStatus();
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
        }).then(() => __async(this, null, function* () {
          NftOffSale(nft.val, loading).then(() => {
            nft.val.putAway = false;
            loading.close();
          }).catch(() => {
            loading.close();
          });
        })).catch(() => loading.close());
      });
    }
    if (route.params.genesisId && route.params.codehash && route.params.tokenIndex) {
      getDetail();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(ElSkeleton), {
          loading: isShowSkeleton.value,
          animated: ""
        }, {
          template: withCtx(() => [
            createVNode(unref(ElSkeletonItem), {
              class: "title",
              variant: "h1"
            })
          ]),
          default: withCtx(() => [
            unref(route).query.type === "created" ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(_ctx.$t("createdSuccessTitle")), 1)) : unref(route).query.type === "buyed" ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(_ctx.$t("buySuccessTitle")), 1)) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["loading"]),
        createVNode(NftMsgCard, {
          skeleton: isShowSkeleton.value,
          "user-name": unref(nft).val.foundryName,
          "cover-url": unref(nft).val.coverUrl,
          name: unref(nft).val.nftName,
          "created-at": unref(nft).val.forgeTime,
          "meta-id": unref(nft).val.foundryMetaId
        }, null, 8, ["skeleton", "user-name", "cover-url", "name", "created-at", "meta-id"]),
        createVNode(unref(ElSkeleton), {
          loading: isShowSkeleton.value,
          animated: ""
        }, {
          template: withCtx(() => [
            createBaseVNode("div", _hoisted_4, [
              createVNode(unref(ElSkeletonItem), {
                class: "btn btn-plain btn-block flex1",
                variant: "button"
              }),
              createVNode(unref(ElSkeletonItem), {
                class: "btn btn-plain btn-block flex1",
                variant: "button"
              })
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_5, [
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
              ], 64)) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["loading"])
      ]);
    };
  }
});
export { _sfc_main as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmZ0U3VjY2Vzcy5iMmVhNmM4ZC5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
