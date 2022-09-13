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
import { _ as _export_sfc, d as defineComponent, r as reactive, W as useRoute, V as useRouter, u as useI18n, e as ref, f as checkUserInfoFinish, aE as GetMyNftSummaryList, s as setDataStrclassify, S as ElMessage, o as openBlock, l as createBlock, g as unref, k as useStore } from "./index.1063289c.js";
import { p as pagination } from "./config.c3ac3733.js";
import { N as NftList } from "./NftList.697e9c37.js";
import "./icon_search.630cdfed.js";
import "./LoadMore.917b373d.js";
import "./IsNull.f190e793.js";
import "./NftSkeleton.c784c379.js";
/* empty css                           */import "./icon_cer.d2259267.js";
import "./icon_cer_nft.f25ddb49.js";
/* empty css                     */import "./offSale.8a5b3e0c.js";
import "./nftDetail.d498c8f0.js";
import "./Sort.f551df98.js";
import "./enum.cb4b74f9.js";
var Offsale_scss_vue_type_style_index_0_src_2b92766a_scoped_true_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const pagination$1 = reactive(__spreadProps(__spreadValues({}, pagination), {
      pageSize: 12
    }));
    const store = useStore();
    useRoute();
    const router = useRouter();
    const i18n = useI18n();
    const nfts = reactive([]);
    const isShowNftListSkeleton = ref(true);
    function getMyNfts(isCover = false) {
      return new Promise((resolve) => __async(this, null, function* () {
        var _a;
        const res = yield GetMyNftSummaryList({
          Address: (_a = store.state.userInfo) == null ? void 0 : _a.address,
          Page: pagination$1.page.toString(),
          PageSize: pagination$1.pageSize.toString()
        });
        if (res && res.code === 0) {
          if (isCover) {
            nfts.length = 0;
          }
          if (res.data.results.items.length > 0) {
            res.data.results.items.map((item) => {
              const nft = item.nftDetailItemList && item.nftDetailItemList[0] ? item.nftDetailItemList[0] : void 0;
              const count = item.nftMyCount + item.nftMyPendingCount;
              const name = count > 1 && item.nftSeriesName && item.nftSeriesName !== "" ? item.nftSeriesName : item.nftName ? item.nftName : "--";
              const data = nft && nft.nftDataStr !== "" ? JSON.parse(nft.nftDataStr) : void 0;
              const classify = setDataStrclassify(data);
              nfts.push({
                name,
                amount: 0,
                foundryName: item.nftIssuer,
                classify,
                head: "",
                tokenId: item.nftGenesis + item.nftCodehash + item.nftTokenIndex,
                coverUrl: item.nftIcon,
                putAway: item.nftIsReady,
                metaId: item.nftIssueMetaId,
                productName: name,
                deadlineTime: 0,
                genesis: item.nftGenesis,
                tokenIndex: (nft == null ? void 0 : nft.nftTokenIndex) ? nft == null ? void 0 : nft.nftTokenIndex : "",
                codehash: item.nftCodehash,
                total: item.nftTotalSupply,
                hasCount: count,
                ownerAvatarType: item.nftOwnerAvatarType,
                issueUserAvatarType: item.nftIssueAvatarType
              });
            });
          } else {
            pagination$1.nothing = true;
          }
        }
        isShowNftListSkeleton.value = false;
        resolve();
      }));
    }
    function getMore() {
      pagination$1.page++;
      getMyNfts();
    }
    checkUserInfoFinish().then((result) => {
      if (result) {
        getMyNfts();
      } else {
        ElMessage.warning(i18n.t("toLoginTip"));
        router.push("/");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(NftList, {
        nfts: unref(nfts),
        pagination: unref(pagination$1),
        isShowSkeleton: isShowNftListSkeleton.value,
        isSelf: true,
        onGetMore: getMore
      }, null, 8, ["nfts", "pagination", "isShowSkeleton"]);
    };
  }
});
var Offsale = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2b92766a"]]);
export { Offsale as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2Zmc2FsZS4wMjY5MzMwMy5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
