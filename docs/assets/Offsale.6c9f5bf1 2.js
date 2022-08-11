import { _ as _export_sfc, e as defineComponent, v as reactive, aP as pagination, d as computed, r as ref, aq as useRoute, u as useI18n, c5 as checkUserInfoFinish, cd as GetMyNftSummaryList, ce as nftDataStrGetClassify, g as openBlock, A as createElementBlock, l as createVNode, j as withCtx, C as unref, F as Fragment, B as renderList, m as createCommentVNode, i as createBlock, bi as isRef, E as useStore, cf as MyBlindBoxList } from './index.2d61a762.js';
import { E as ElCol, a as ElRow, S as ScreenWarp } from './ScreenWarp.072c0635.js';
import { N as NFT } from './NFT.ae0b6dda.js';
import { L as LoadMore } from './LoadMore.8e01938d.js';
import { I as IsNull } from './IsNull.09881841.js';
import './skeleton.7a1b0929.js';
import './collapse.cc6db880.js';
import './tag.5cc2de99.js';
import './enum.2d046482.js';
import './card_icon_ins.9e46280c.js';
import './detailDetach-owner.53484477.js';
import './PayConfirm.f2947032.js';
import './Cover.5945de54.js';
import './image-viewer.990d1b5f.js';
import './logo_bsv.3a6b2418.js';
import './sandPay_title.2edd4dc3.js';
import './auction.00fdfd17.js';
import './nftDetail.671bf513.js';
import './offSale.718ee02c.js';
import './vue-countdown.esm.7496e381.js';
import './icon_cer_nft.95196f53.js';
import './SendNft.ef362db8.js';

var Offsale_scss_vue_type_style_index_0_src_4e0d01ed_scoped_true_lang = '';

const _hoisted_1 = { key: 0 };
const _hoisted_2 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const pagination$1 = reactive({
      ...pagination,
      pageSize: 12
    });
    const BlindboxPage = computed(() => {
      return route.name === "myBlindbox";
    });
    const myBlindBoxAmount = ref(0);
    const store = useStore();
    const route = useRoute();
    const i18n = useI18n();
    const nfts = reactive([]);
    const isShowNftListSkeleton = ref(true);
    const screenActiveName = reactive([]);
    const cellVal = ref(2);
    const cells = [
      { val: 1, xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
      { val: 2, xs: 12, sm: 8, md: 6, lg: 4, xl: 3 }
    ];
    function removeNfts() {
      nfts.length = 0;
    }
    function removeBlindBox() {
      nfts[0].limited--;
    }
    function getMyNfts(isCover = false) {
      return new Promise(async (resolve) => {
        const res = await GetMyNftSummaryList({
          Address: store.state.userInfo?.address,
          Page: pagination$1.page.toString(),
          PageSize: pagination$1.pageSize.toString()
        });
        if (res && res.code === 0) {
          if (isCover) {
            nfts.length = 0;
          }
          if (res.data.results.items.length > 0) {
            for (let i = 0; i < res.data.results.items.length; i++) {
              const nft = res.data.results.items[i];
              const classify = nftDataStrGetClassify(nft.nftDataStr);
              nfts.push({
                classify,
                cover: nft.nftIcon,
                issueMetaId: nft.nftIssueMetaId,
                issueName: nft.nftIssuer,
                issueAvatarType: nft.nftIssueAvatarType,
                ownerMetaId: nft.nftDetailItemList.length > 0 ? nft.nftDetailItemList[0].nftOwnerMetaId : "",
                ownerName: nft.nftDetailItemList.length > 0 ? nft.nftDetailItemList[0].nftOwnerName : "",
                ownerAvatarType: nft.nftDetailItemList.length > 0 ? nft.nftDetailItemList[0].nftOwnerAvatarType : "",
                status: 1,
                genesis: nft.nftGenesis,
                codehash: nft.nftCodehash,
                genesisTxId: nft.nftGenesisTxId,
                tokenIndex: nft.nftDetailItemList.length > 0 ? nft.nftDetailItemList[0].nftTokenIndex : "",
                name: nft.nftMyCount + nft.nftMyPendingCount > 1 ? nft.nftSeriesName : nft.nftName,
                hasSeriesCount: nft.nftMyCount + nft.nftMyPendingCount,
                seriesTotal: nft.nftTotalSupply,
                backCover: nft.nftBackIcon ? nft.nftBackIcon : void 0,
                isCompound: nft.nftHasCompound,
                isLegal: false
              });
            }
          } else {
            pagination$1.nothing = true;
          }
        }
        isShowNftListSkeleton.value = false;
        resolve();
      });
    }
    function getMore() {
      pagination$1.page++;
      getMyNfts();
    }
    async function getMyBlindBoxList() {
      const res = await MyBlindBoxList({
        metaid: store.state.userInfo.metaId
      });
      if (res.code === 0) {
        myBlindBoxAmount.value = res.data.quantity;
        if (myBlindBoxAmount.value > 0) {
          nfts.push({
            classify: i18n.t("fragment"),
            cover: "",
            issueMetaId: "974e2977d5c9446f7f48fd82c9ea51f82749b9ef7c00d26b73bc450d167d5f31",
            issueName: "ShowPayTeam",
            issueAvatarType: "nft-metabot",
            ownerMetaId: store.state.userInfo.metaId,
            ownerName: store.state.userInfo.name,
            ownerAvatarType: store.state.userInfo.avatarType,
            status: 1,
            genesis: "",
            codehash: "",
            tokenIndex: "",
            name: "MetaBotAvatar",
            hasSeriesCount: 0,
            seriesTotal: 9560,
            backCover: "",
            isCompound: false,
            isLegal: false,
            limited: myBlindBoxAmount.value
          });
        }
      }
    }
    function removeItem(nft) {
      const index = nfts.findIndex((item) => item.genesis == nft.genesis && item.codehash === nft.codehash && item.tokenIndex === nft.tokenIndex);
      if (index !== -1) {
        nfts.splice(index, 1);
      }
    }
    checkUserInfoFinish().then(() => {
      console.log("zxczxczxczxc", route);
      if (route.name === "myBlindbox") {
        getMyBlindBoxList();
      } else {
        getMyNfts();
      }
    });
    return (_ctx, _cache) => {
      const _component_ElCol = ElCol;
      const _component_ElRow = ElRow;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(ScreenWarp, {
          "cell-val": cellVal.value,
          isSelf: true,
          isHasScreen: false,
          isHasSort: false,
          onChangeCell: _cache[0] || (_cache[0] = (val) => cellVal.value = val),
          "is-skeleton": unref(BlindboxPage) ? false : isShowNftListSkeleton.value,
          "active-name": unref(screenActiveName),
          onActiveNameChange: _cache[1] || (_cache[1] = (val) => isRef(screenActiveName) ? screenActiveName.value = val : screenActiveName = val)
        }, {
          default: withCtx(() => [
            unref(BlindboxPage) ? (openBlock(), createElementBlock("div", _hoisted_1, [
              createVNode(_component_ElRow, { gutter: 20 }, {
                default: withCtx(() => [
                  unref(nfts).length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(nfts), (nft, index) => {
                    return openBlock(), createBlock(_component_ElCol, {
                      class: "mb20",
                      xs: cells.find((item) => item.val === cellVal.value).xs,
                      sm: cells.find((item) => item.val === cellVal.value).sm,
                      md: cells.find((item) => item.val === cellVal.value).md,
                      lg: cells.find((item) => item.val === cellVal.value).lg,
                      xl: cells.find((item) => item.val === cellVal.value).xl,
                      key: index
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(NFT, {
                          isShowSaleOut: false,
                          isBlindBoxPage: unref(BlindboxPage),
                          nft,
                          key: index,
                          "is-skeleton": false,
                          onRemoveOneBlindBox: removeBlindBox,
                          onRemoveNft: removeNfts
                        }, null, 8, ["isBlindBoxPage", "nft"]))
                      ]),
                      _: 2
                    }, 1032, ["xs", "sm", "md", "lg", "xl"]);
                  }), 128)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createCommentVNode(" null "),
                    createVNode(IsNull, { class: "flex1" })
                  ], 2112))
                ]),
                _: 1
              })
            ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
              createVNode(_component_ElRow, { gutter: 20 }, {
                default: withCtx(() => [
                  unref(nfts).length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(nfts), (nft) => {
                    return openBlock(), createBlock(_component_ElCol, {
                      class: "mb20",
                      xs: cells.find((item) => item.val === cellVal.value).xs,
                      sm: cells.find((item) => item.val === cellVal.value).sm,
                      md: cells.find((item) => item.val === cellVal.value).md,
                      lg: cells.find((item) => item.val === cellVal.value).lg,
                      xl: cells.find((item) => item.val === cellVal.value).xl,
                      key: nft.genesis + nft.codehash + nft.tokenIndex
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(NFT, {
                          nft,
                          key: nft.genesis + nft.codehash + nft.tokenIndex,
                          "is-skeleton": isShowNftListSkeleton.value,
                          onRemove: removeItem
                        }, null, 8, ["nft", "is-skeleton"]))
                      ]),
                      _: 2
                    }, 1032, ["xs", "sm", "md", "lg", "xl"]);
                  }), 128)) : (openBlock(), createBlock(IsNull, {
                    key: 1,
                    class: "flex1"
                  }))
                ]),
                _: 1
              }),
              unref(nfts).length > 0 ? (openBlock(), createBlock(LoadMore, {
                key: 0,
                class: "flex1",
                pagination: unref(pagination$1),
                onGetMore: getMore
              }, null, 8, ["pagination"])) : createCommentVNode("v-if", true)
            ]))
          ]),
          _: 1
        }, 8, ["cell-val", "is-skeleton", "active-name"]),
        createCommentVNode(' <NftListVue\n    :nfts="nfts"\n    :pagination="pagination"\n    :isShowSkeleton="isShowNftListSkeleton"\n    @get-more="getMore"\n  /> ')
      ], 2112);
    };
  }
});
var Offsale = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4e0d01ed"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/self/Offsale.vue"]]);

export { Offsale as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2Zmc2FsZS42YzlmNWJmMS5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
