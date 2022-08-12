import { _ as _export_sfc, e as defineComponent, aq as useRoute, t as useRouter, u as useI18n, v as reactive, r as ref, a as onMounted, cr as GetSeriesNftList, ay as setDataStrclassify, X as ElMessage, g as openBlock, A as createElementBlock, k as createBaseVNode, C as unref, J as createTextVNode, D as toDisplayString, l as createVNode, j as withCtx, F as Fragment, B as renderList, E as useStore, i as createBlock } from './index.3c02df72.js';
import { N as NftSkeleton, a as NftItem } from './NftSkeleton.c1ce950c.js';
import { L as LoadMore } from './LoadMore.538873cb.js';
import { B as BannetIcon } from './bannet_icon_ins.9e5a53b7.js';
import './skeleton.048068e8.js';
import './image-viewer.62daae40.js';
import './SendNft.ad50f7ab.js';
import './icon_cer_nft.95196f53.js';
import './offSale.321e6ef4.js';
import './nftDetail.c876de9e.js';
import './Cover.5869eba2.js';
import './icon_cer.5f0b2a62.js';
import './card_icon_ins.9e46280c.js';

var Series_scss_vue_type_style_index_0_src_00d1fdb1_scoped_true_lang = '';

const _hoisted_1 = { class: "self" };
const _hoisted_2 = { class: "section container" };
const _hoisted_3 = { class: "section-header flex flex-align-center" };
const _hoisted_4 = { class: "title flex1" };
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "section-cont nft-list" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const i18n = useI18n();
    const pagination = reactive({
      ...store.state.pagination,
      pageSize: 12,
      flag: ""
    });
    const nfts = reactive([]);
    const isShowNftListSkeleton = ref(true);
    function getMyNfts(isCover = false) {
      return new Promise(async (resolve) => {
        const res = await GetSeriesNftList({
          pageSize: pagination.pageSize.toString(),
          flag: pagination.flag,
          address: store.state.userInfo.address,
          codehash: typeof route.params.codehash === "string" ? route.params.codehash : "",
          genesis: typeof route.params.genesisId === "string" ? route.params.genesisId : ""
        });
        if (res && res.code === 0) {
          if (isCover) {
            nfts.length = 0;
          }
          if (res.data.results.items.length > 0) {
            res.data.results.items.map((item) => {
              const data = item.nftDataStr ? JSON.parse(item.nftDataStr) : void 0;
              const classify = setDataStrclassify(data);
              nfts.push({
                ...item,
                name: item.nftName ? item.nftName : "--",
                amount: 0,
                foundryName: item.nftIssuer,
                classify,
                tokenId: item.nftGenesis + item.nftTokenIndex,
                coverUrl: item.nftIcon,
                putAway: item.nftIsReady,
                metaId: item.nftIssueMetaId,
                productName: item.nftName,
                genesis: item.nftGenesis,
                codehash: item.nftCodehash,
                tokenIndex: item.nftTokenIndex
              });
            });
          } else {
            pagination.nothing = true;
          }
        }
        isShowNftListSkeleton.value = false;
        resolve();
      });
    }
    function removeItem(nft) {
      const index = nfts.findIndex((item) => item.genesis == nft.genesis && item.codehash === nft.codehash && item.tokenIndex === nft.tokenIndex);
      if (index !== -1) {
        nfts.splice(index, 1);
      }
    }
    function getMore() {
      pagination.loading = true;
      pagination.flag = nfts[nfts.length - 1].flag;
      getMyNfts().then(() => {
        pagination.loading = false;
      });
    }
    onMounted(() => {
      pagination.page = 1;
      if (store.state.token || store.getters.isExtConnected) {
        if (store.state.userInfo) {
          getMyNfts(true);
        } else {
          store.watch((state) => state.userInfo, () => {
            getMyNfts(true);
          });
        }
      } else {
        ElMessage.warning(i18n.t("toLoginTip"));
        router.replace("/");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("img", {
                src: unref(BannetIcon),
                onClick: _cache[0] || (_cache[0] = ($event) => unref(router).back())
              }, null, 8, _hoisted_5),
              createTextVNode(toDisplayString(unref(route).query.name), 1)
            ])
          ]),
          createVNode(NftSkeleton, {
            loading: isShowNftListSkeleton.value,
            count: unref(pagination).pageSize,
            class: "section-cont nft-list"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_6, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(nfts), (nft) => {
                  return openBlock(), createBlock(NftItem, {
                    key: nft.tokenId,
                    item: nft,
                    isSelf: true,
                    onRemove: removeItem
                  }, null, 8, ["item"]);
                }), 128))
              ])
            ]),
            _: 1
          }, 8, ["loading", "count"])
        ]),
        createVNode(LoadMore, {
          pagination: unref(pagination),
          onGetMore: getMore
        }, null, 8, ["pagination"])
      ]);
    };
  }
});
var Series = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-00d1fdb1"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/Series.vue"]]);

export { Series as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyaWVzLmEwNWQwODk2LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
