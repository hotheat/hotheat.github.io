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
import { _ as _export_sfc, d as defineComponent, r as reactive, W as useRoute, e as ref, aF as GetMyOnSellNftList, ab as GetDeadlineTime, s as setDataStrclassify, o as openBlock, l as createBlock, g as unref, k as useStore } from "./index.1063289c.js";
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
var Offsale_scss_vue_type_style_index_0_src_61d33c6f_scoped_true_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const pagination$1 = reactive(__spreadProps(__spreadValues({}, pagination), {
      pageSize: 12
    }));
    const store = useStore();
    const route = useRoute();
    const nfts = reactive([]);
    const isShowNftListSkeleton = ref(true);
    function getMyNfts(isCover = false) {
      return new Promise((resolve) => __async(this, null, function* () {
        debugger;
        const res = yield GetMyOnSellNftList({
          MetaId: typeof route.params.metaId === "string" ? route.params.metaId : "",
          Page: pagination$1.page.toString(),
          PageSize: pagination$1.pageSize.toString()
        });
        if (res && res.code === 0) {
          if (isCover) {
            nfts.length = 0;
          }
          if (res.data.results.items.length > 0) {
            for (let i = 0; i < res.data.results.items.length; i++) {
              const item = res.data.results.items[i];
              const data = item.nftDataStr ? JSON.parse(item.nftDataStr) : null;
              const deadlineTimeRes = yield GetDeadlineTime({
                codeHash: item.nftCodehash,
                genesis: item.nftGenesis,
                tokenIndex: item.nftTokenIndex
              });
              const classify = setDataStrclassify(data);
              nfts.push({
                name: item.nftName ? item.nftName : "--",
                amount: item.nftPrice,
                foundryName: item.nftIssuer,
                classify,
                head: "",
                tokenId: item.nftGenesis + item.nftTokenIndex,
                coverUrl: item.nftIcon,
                putAway: item.nftIsReady,
                metaId: item.nftIssueMetaId,
                productName: item.nftName,
                deadlineTime: deadlineTimeRes && deadlineTimeRes.data && deadlineTimeRes.data.deadlineTime ? deadlineTimeRes.data.deadlineTime : null,
                genesis: item.nftGenesis,
                tokenIndex: item.nftTokenIndex,
                codehash: item.nftCodehash
              });
            }
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
    getMyNfts();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(NftList, {
        nfts: unref(nfts),
        pagination: unref(pagination$1),
        isShowSkeleton: isShowNftListSkeleton.value,
        isSelf: unref(store).state.userInfo && unref(store).state.userInfo.metaId === unref(route).params.metaId,
        onGetMore: getMore
      }, null, 8, ["nfts", "pagination", "isShowSkeleton", "isSelf"]);
    };
  }
});
var Sale = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61d33c6f"]]);
export { Sale as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2FsZS41MGFlMzEyMC5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
