import { _ as _export_sfc, e as defineComponent, t as useRouter, v as reactive, r as ref, aP as pagination, cv as GetRecommendOnSellNftList, g as openBlock, A as createElementBlock, k as createBaseVNode, C as unref, D as toDisplayString, l as createVNode } from './index.2d61a762.js';
import { S as SetHomeDatas, N as NftList } from './homeSetData.174ed001.js';
import { B as BannetIcon } from './bannet_icon_ins.9e5a53b7.js';
import './LoadMore.8e01938d.js';
import './IsNull.09881841.js';
import './NftSkeleton.166e5746.js';
import './skeleton.7a1b0929.js';
import './image-viewer.990d1b5f.js';
import './SendNft.ef362db8.js';
import './icon_cer_nft.95196f53.js';
import './offSale.718ee02c.js';
import './nftDetail.671bf513.js';
import './Cover.5945de54.js';
import './icon_cer.5f0b2a62.js';
import './card_icon_ins.9e46280c.js';
import './enum.2d046482.js';
import './icon_search.00d5970e.js';

var Recommend_scss_vue_type_style_index_0_src_085619f2_scoped_true_lang = '';

const _hoisted_1 = { class: "recommend container" };
const _hoisted_2 = { class: "recommend-header flex" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "flex1 cont" };
const _hoisted_5 = { class: "title" };
const _hoisted_6 = { class: "drsc" };
const _hoisted_7 = { class: "recomment-list nft-list" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const router = useRouter();
    const nfts = reactive([]);
    const isShowSkeleton = ref(true);
    const pagination$1 = reactive({
      ...pagination
    });
    function getRecommendNftList() {
      return new Promise(async (resolve) => {
        const res = await GetRecommendOnSellNftList({
          Page: pagination$1.page.toString(),
          PageSize: pagination$1.pageSize.toString()
        });
        if (res.code === 0) {
          if (res.data.results.items.length > 0) {
            const results = await SetHomeDatas(res.data.results.items);
            nfts.push(...results);
          } else {
            pagination$1.nothing = true;
          }
          isShowSkeleton.value = false;
        }
        resolve();
      });
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
            src: unref(BannetIcon),
            class: "back-icon"
          }, null, 8, _hoisted_3),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, toDisplayString(_ctx.$t("recommentprod")), 1),
            createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.$t("recommenttext")), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
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
var Recommend = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-085619f2"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/Recommend.vue"]]);

export { Recommend as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjb21tZW5kLmRmZjU4NjU5LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
