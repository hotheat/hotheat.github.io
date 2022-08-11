import { _ as _export_sfc, e as defineComponent, r as ref, v as reactive, aP as pagination, u as useI18n, f as resolveComponent, ap as ElDialog, g as openBlock, A as createElementBlock, l as createVNode, j as withCtx, k as createBaseVNode, J as createTextVNode, D as toDisplayString, C as unref, m as createCommentVNode, F as Fragment, E as useStore, cF as CertificationType, b2 as NftApiCode, cG as GetAllOnSellNftList, cH as GetNftOnShowListByClassify, cI as GetNftOnShowListBySearch } from './index.f03006d5.js';
import { I as InnerPageHeader } from './InnerPageHeader.616ed680.js';
import { N as NftList, S as SetHomeDatas } from './homeSetData.c16b38fb.js';
import { c as SortType, O as OrderType } from './enum.2d046482.js';
import './bannet_icon_ins.9e5a53b7.js';
import './icon_search.00d5970e.js';
import './LoadMore.4d34a19f.js';
import './IsNull.7a0d2f8f.js';
import './NftSkeleton.669199ed.js';
import './skeleton.4c62fb88.js';
import './image-viewer.1c165fb3.js';
import './SendNft.9ca5fa2f.js';
import './icon_cer_nft.95196f53.js';
import './offSale.97e1f547.js';
import './nftDetail.28374e41.js';
import './Cover.bf0d133a.js';
import './icon_cer.5f0b2a62.js';
import './card_icon_ins.9e46280c.js';

var CountryFair_scss_vue_type_style_index_0_src_e1f0fae0_scoped_true_lang = '';

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
    const pagination$1 = reactive({
      ...pagination,
      pageSize: 24
    });
    let apiType = "GetAllOnSellNftList";
    const i18n = useI18n();
    const store = useStore();
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
    async function getNftList(isCover = false) {
      const apiName = {
        GetAllOnSellNftList,
        GetNftOnShowListByClassify,
        GetNftOnShowListBySearch
      };
      const res = await apiName[apiType]({
        PageSize: pagination$1.pageSize.toString(),
        Page: pagination$1.page.toString(),
        classify: apiType === "GetNftOnShowListByClassify" ? classify.value : void 0,
        SearchWord: apiType === "GetNftOnShowListBySearch" ? keyword.value : void 0,
        CertificationType: CertificationType.unCert,
        orderType: sorts.find((item) => item.value === sortValue.value)?.orderType,
        sortType: sortValue.value
      });
      if (res.code === NftApiCode.success) {
        if (isCover)
          nfts.length = 0;
        if (res.data.results.items.length > 0) {
          const results = await SetHomeDatas(res.data.results.items);
          nfts.push(...results);
        } else {
          pagination$1.nothing = true;
        }
        isShowNftListSkeleton.value = false;
      }
    }
    async function search(_keyword) {
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
    }
    getNftList();
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_ElDialog = ElDialog;
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
            classifyList: unref(store).state.marketClassifyList,
            onSearch: search,
            onChangeClassify: changeClassify,
            onGetMore: getMore,
            sorts: unref(sorts),
            sortValue: sortValue.value,
            onChangeSort: changeSort
          }, null, 8, ["nfts", "pagination", "keyword", "isShowSkeleton", "classify", "classifyList", "sorts", "sortValue"])
        ]),
        createCommentVNode(" countryFairTips modal "),
        createVNode(_component_ElDialog, {
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
var CountryFair = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e1f0fae0"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/CountryFair.vue"]]);

export { CountryFair as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ291bnRyeUZhaXIuNDEwZjc0NzUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
