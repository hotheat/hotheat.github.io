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
import { I as InnerPageHeader } from "./InnerPageHeader.d944e619.js";
import { N as NftList } from "./NftList.697e9c37.js";
import { p as pagination, d as countryFairClassifyList } from "./config.c3ac3733.js";
import { _ as _export_sfc, d as defineComponent, e as ref, r as reactive, u as useI18n, O as resolveComponent, o as openBlock, c as createElementBlock, h as createVNode, w as withCtx, a as createBaseVNode, P as createTextVNode, t as toDisplayString, g as unref, R as ElDialog, F as Fragment, C as CertificationType, N as NftApiCode, m as GetAllOnSellNftList, n as GetNftOnShowListByClassify, q as GetNftOnShowListBySearch } from "./index.1063289c.js";
import { S as SetHomeDatas } from "./homeSetData.92dc270f.js";
import { S as SortType, O as OrderType } from "./enum.cb4b74f9.js";
import "./bannet_icon_ins.c0e9a236.js";
import "./icon_search.630cdfed.js";
import "./LoadMore.917b373d.js";
import "./IsNull.f190e793.js";
import "./NftSkeleton.c784c379.js";
/* empty css                           */import "./icon_cer.d2259267.js";
import "./icon_cer_nft.f25ddb49.js";
/* empty css                     */import "./offSale.8a5b3e0c.js";
import "./nftDetail.d498c8f0.js";
import "./Sort.f551df98.js";
var CountryFair_scss_vue_type_style_index_0_src_17c99c41_scoped_true_lang = "";
const _hoisted_1 = { class: "intro-tips" };
const _hoisted_2 = { class: "container country-fair" };
const _hoisted_3 = { class: "modal-drsc" };
const _hoisted_4 = { class: "country-fair-tips-list" };
const _hoisted_5 = { class: "country-fair-tips-item" };
const _hoisted_6 = { class: "country-fair-tips-item" };
const _hoisted_7 = { class: "country-fair-tips-item" };
const _hoisted_8 = { class: "country-fair-tips-item" };
const _hoisted_9 = {
  class: "modal-footer",
  slot: "footer"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const classify = ref("all");
    const keyword = ref("");
    const isShowTipsModal = ref(false);
    const isShowNftListSkeleton = ref(true);
    const nfts = reactive([]);
    const pagination$1 = reactive(__spreadProps(__spreadValues({}, pagination), {
      pageSize: 24
    }));
    let apiType = "GetAllOnSellNftList";
    const i18n = useI18n();
    const sorts = reactive([
      {
        name: i18n.t("time"),
        nameKey: "time",
        value: SortType.Time,
        orderType: OrderType.DESC
      },
      {
        name: i18n.t("price"),
        nameKey: "price",
        value: SortType.Price,
        orderType: OrderType.DESC
      }
    ]);
    const sortValue = ref(SortType.Time);
    function changeSort(value) {
      if (sortValue.value === value) {
        const index = sorts.findIndex((item) => item.value === value);
        sorts[index].orderType = sorts[index].orderType === OrderType.ASC ? OrderType.DESC : OrderType.ASC;
      } else {
        sortValue.value = value;
      }
      pagination$1.page = 1;
      pagination$1.loading = false;
      pagination$1.nothing = false;
      getNftList(true);
    }
    function changeClassify(classifyName) {
      if (classify.value === classifyName)
        return;
      isShowNftListSkeleton.value = true;
      classify.value = classifyName;
      pagination$1.page = 1;
      pagination$1.loading = false;
      pagination$1.nothing = false;
      if (classifyName === "all") {
        apiType = "GetAllOnSellNftList";
      } else {
        apiType = "GetNftOnShowListByClassify";
      }
      getNftList(true);
      keyword.value = "";
    }
    function getMore() {
      pagination$1.loading = true;
      pagination$1.page++;
      getNftList().then(() => {
        pagination$1.loading = false;
      });
    }
    function getNftList(isCover = false) {
      return __async(this, null, function* () {
        var _a;
        const apiName = {
          GetAllOnSellNftList,
          GetNftOnShowListByClassify,
          GetNftOnShowListBySearch
        };
        const res = yield apiName[apiType]({
          PageSize: pagination$1.pageSize.toString(),
          Page: pagination$1.page.toString(),
          classify: apiType === "GetNftOnShowListByClassify" ? classify.value : void 0,
          SearchWord: apiType === "GetNftOnShowListBySearch" ? keyword.value : void 0,
          CertificationType: CertificationType.unCert,
          orderType: (_a = sorts.find((item) => item.value === sortValue.value)) == null ? void 0 : _a.orderType,
          sortType: sortValue.value
        });
        if (res.code === NftApiCode.success) {
          if (isCover)
            nfts.length = 0;
          if (res.data.results.items.length > 0) {
            const results = yield SetHomeDatas(res.data.results.items);
            nfts.push(...results);
          } else {
            pagination$1.nothing = true;
          }
          isShowNftListSkeleton.value = false;
        }
      });
    }
    function search(_keyword) {
      return __async(this, null, function* () {
        keyword.value = _keyword;
        isShowNftListSkeleton.value = true;
        pagination$1.loading = false;
        pagination$1.nothing = false;
        pagination$1.page = 1;
        if (keyword.value === "") {
          classify.value = "all";
          apiType = "GetAllOnSellNftList";
        } else {
          classify.value = "";
          apiType = "GetNftOnShowListBySearch";
        }
        getNftList(true);
      });
    }
    getNftList();
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(InnerPageHeader, {
          title: _ctx.$t("countryFair"),
          intro: "",
          "is-show-search": false,
          "is-has-back-icon": false
        }, {
          intro: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createTextVNode(toDisplayString(_ctx.$t("countryFairIntro")) + " ", 1),
              createBaseVNode("a", {
                onClick: _cache[0] || (_cache[0] = ($event) => isShowTipsModal.value = true)
              }, toDisplayString(_ctx.$t("knowMore")), 1)
            ])
          ]),
          _: 1
        }, 8, ["title"]),
        createBaseVNode("div", _hoisted_2, [
          createVNode(NftList, {
            nfts: unref(nfts),
            pagination: unref(pagination$1),
            keyword: keyword.value,
            isShowSkeleton: isShowNftListSkeleton.value,
            classify: classify.value,
            classifyList: unref(countryFairClassifyList),
            onSearch: search,
            onChangeClassify: changeClassify,
            onGetMore: getMore,
            sorts: unref(sorts),
            sortValue: sortValue.value,
            onChangeSort: changeSort
          }, null, 8, ["nfts", "pagination", "keyword", "isShowSkeleton", "classify", "classifyList", "sorts", "sortValue"])
        ]),
        createVNode(unref(ElDialog), {
          modelValue: isShowTipsModal.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isShowTipsModal.value = $event),
          "custom-class": "modal",
          title: _ctx.$t("countryFairTips")
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", {
                class: "btn btn-default",
                onClick: _cache[1] || (_cache[1] = ($event) => isShowTipsModal.value = false)
              }, toDisplayString(_ctx.$t("iknow")), 1)
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, toDisplayString(_ctx.$t("countryFairTipsContent1")), 1),
                createBaseVNode("div", _hoisted_6, [
                  createTextVNode(toDisplayString(_ctx.$t("countryFairTipsContent2")), 1),
                  createVNode(_component_router_link, { to: { name: "termsOfUse" } }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("countryFairTipsContent3")), 1)
                    ]),
                    _: 1
                  }),
                  createTextVNode("," + toDisplayString(_ctx.$t("countryFairTipsContent4")), 1)
                ]),
                createBaseVNode("div", _hoisted_7, toDisplayString(_ctx.$t("countryFairTipsContent5")), 1),
                createBaseVNode("div", _hoisted_8, [
                  createTextVNode(toDisplayString(_ctx.$t("countryFairTipsContent6")) + " ", 1),
                  createVNode(_component_router_link, { to: { name: "certification" } }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("countryFairTipsContent7")), 1)
                    ]),
                    _: 1
                  }),
                  createTextVNode(toDisplayString(_ctx.$t("countryFairTipsContent8")), 1)
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 64);
    };
  }
});
var CountryFair = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-17c99c41"]]);
export { CountryFair as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291bnRyeUZhaXIuN2IxMDcxOGUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
