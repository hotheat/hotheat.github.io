import { _ as _export_sfc, e as defineComponent, c_ as useStore, u as useI18n, aq as useRoute, v as reactive, d as computed, aP as pagination, r as ref, g as openBlock, A as createElementBlock, l as createVNode, C as unref, k as createBaseVNode, F as Fragment, c$ as GetBlindBoxList, b2 as NftApiCode, cF as CertificationType, cG as GetAllOnSellNftList, cH as GetNftOnShowListByClassify, cI as GetNftOnShowListBySearch } from './index.f03006d5.js';
import { I as InnerPageHeader } from './InnerPageHeader.616ed680.js';
import { c as SortType, O as OrderType } from './enum.2d046482.js';
import { N as NftList, S as SetHomeDatas } from './homeSetData.c16b38fb.js';
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

var NFTList_scss_vue_type_style_index_0_src_4edd1630_scoped_true_lang = '';

const _hoisted_1 = { class: "container list-warp" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    useStore();
    const i18n = useI18n();
    const route = useRoute();
    const Nfts = reactive([]);
    const blindboxData = reactive([]);
    const isBlindBoxPage = computed(() => {
      console.log(route.name === "blindbox");
      return route.name === "blindbox";
    });
    const isHasBackIcon = computed(() => {
      return route.name != "blindbox";
    });
    const pagination$1 = reactive({
      ...pagination,
      pageSize: 24
    });
    const isShowNftListSkeleton = ref(true);
    ref("all");
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
    const pageTitle = computed(() => {
      let title = "";
      if (typeof route.query.type === "string") {
        title = i18n.t(route.query.type);
        if (route.query.type !== "all") {
          title += ":";
          if (typeof route.query.val == "string") {
            if (route.query.type === "search") {
              title += route.query.val;
            } else {
              title += i18n.t(route.query.val);
            }
          }
        }
      } else if (route.name === "blindbox") {
        title = i18n.t("blindBox");
      }
      return title;
    });
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
    async function getNftList(isCover = false) {
      const apiName = {
        all: GetAllOnSellNftList,
        classify: GetNftOnShowListByClassify,
        search: GetNftOnShowListBySearch
      };
      let res;
      if (route.name === "blindbox") {
        res = await GetBlindBoxList({
          pageSize: pagination$1.pageSize,
          page: pagination$1.page
        });
        if (res.code === NftApiCode.success) {
          if (isCover)
            Nfts.length = 0;
          if (res.data.results.items.length > 0) {
            let tempList = [];
            tempList.push(...res.data.results.items);
            blindboxData.push(...tempList.reverse());
          } else {
            pagination$1.nothing = true;
          }
          isShowNftListSkeleton.value = false;
        }
      } else {
        res = await apiName[route.query.type]({
          PageSize: pagination$1.pageSize.toString(),
          Page: pagination$1.page.toString(),
          classify: route.query.type === "classify" ? route.query.val : void 0,
          SearchWord: route.query.type === "search" ? route.query.val : void 0,
          CertificationType: CertificationType.isCert,
          orderType: sorts.find((item) => item.value === sortValue.value)?.orderType,
          sortType: sortValue.value
        });
        if (res.code === NftApiCode.success) {
          if (isCover)
            Nfts.length = 0;
          if (res.data.results.items.length > 0) {
            const results = await SetHomeDatas(res.data.results.items);
            Nfts.push(...results);
          } else {
            pagination$1.nothing = true;
          }
          isShowNftListSkeleton.value = false;
        }
      }
    }
    function getMore() {
      pagination$1.loading = true;
      pagination$1.page++;
      getNftList().then(() => {
        pagination$1.loading = false;
      });
    }
    getNftList();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(InnerPageHeader, {
          title: unref(pageTitle),
          isShowSearch: false,
          isHasBackIcon: unref(isHasBackIcon)
        }, null, 8, ["title", "isHasBackIcon"]),
        createBaseVNode("div", _hoisted_1, [
          createVNode(NftList, {
            isBlindBoxPage: unref(isBlindBoxPage),
            blindboxData: unref(blindboxData),
            nfts: unref(Nfts),
            pagination: unref(pagination$1),
            isShowSkeleton: isShowNftListSkeleton.value,
            sorts: unref(sorts),
            sortValue: sortValue.value,
            onChangeSort: changeSort,
            onGetMore: getMore
          }, null, 8, ["isBlindBoxPage", "blindboxData", "nfts", "pagination", "isShowSkeleton", "sorts", "sortValue"])
        ])
      ], 64);
    };
  }
});
var NFTList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4edd1630"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/NFTList.vue"]]);

export { NFTList as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTkZUTGlzdC5hNGY0MTMxMy5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
