var __defProp = Object.defineProperty;
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
import { _ as _imports_0 } from "./bannet_icon_ins.c0e9a236.js";
import { N as NftList } from "./NftList.697e9c37.js";
import { p as pagination } from "./config.c3ac3733.js";
import { _ as _export_sfc, d as defineComponent, V as useRouter, r as reactive, e as ref, M as GetRecommendOnSellNftList, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, h as createVNode, g as unref } from "./index.1063289c.js";
import { S as SetHomeDatas } from "./homeSetData.92dc270f.js";
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
var Recommend_scss_vue_type_style_index_0_src_4372f74e_scoped_true_lang = "";
const _hoisted_1 = { class: "recommend container" };
const _hoisted_2 = { class: "recommend-header flex" };
const _hoisted_3 = { class: "flex1 cont" };
const _hoisted_4 = { class: "title" };
const _hoisted_5 = { class: "drsc" };
const _hoisted_6 = { class: "recomment-list nft-list" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const router = useRouter();
    const nfts = reactive([]);
    const isShowSkeleton = ref(true);
    const pagination$1 = reactive(__spreadValues({}, pagination));
    function getRecommendNftList() {
      return new Promise((resolve) => __async(this, null, function* () {
        const res = yield GetRecommendOnSellNftList({
          Page: pagination$1.page.toString(),
          PageSize: pagination$1.pageSize.toString()
        });
        if (res.code === 0) {
          if (res.data.results.items.length > 0) {
            const results = yield SetHomeDatas(res.data.results.items);
            nfts.push(...results);
          } else {
            pagination$1.nothing = true;
          }
          isShowSkeleton.value = false;
        }
        resolve();
      }));
    }
    function getMore() {
      pagination$1.loading = true;
      pagination$1.page++;
      getRecommendNftList().then(() => {
        pagination$1.loading = false;
      });
    }
    function back() {
      router.back();
    }
    getRecommendNftList();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("img", {
            onClick: back,
            src: _imports_0,
            class: "back-icon"
          }),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("recommentprod")), 1),
            createBaseVNode("div", _hoisted_5, toDisplayString(_ctx.$t("recommenttext")), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_6, [
          createVNode(NftList, {
            nfts: unref(nfts),
            pagination: unref(pagination$1),
            isShowSkeleton: isShowSkeleton.value,
            onGetMore: getMore
          }, null, 8, ["nfts", "pagination", "isShowSkeleton"])
        ])
      ]);
    };
  }
});
var Recommend = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4372f74e"]]);
export { Recommend as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjb21tZW5kLjk5ZDg3YTdkLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
