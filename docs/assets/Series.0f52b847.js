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
import { _ as _imports_0 } from "./bannet_icon_ins.c0e9a236.js";
import { _ as _export_sfc, d as defineComponent, W as useRoute, V as useRouter, u as useI18n, r as reactive, e as ref, I as onMounted, aJ as GetSeriesNftList, s as setDataStrclassify, S as ElMessage, o as openBlock, c as createElementBlock, a as createBaseVNode, g as unref, P as createTextVNode, t as toDisplayString, h as createVNode, w as withCtx, F as Fragment, i as renderList, k as useStore, l as createBlock } from "./index.1063289c.js";
import { a as NftSkeleton, N as NftItem } from "./NftSkeleton.c784c379.js";
import { L as LoadMore } from "./LoadMore.917b373d.js";
/* empty css                           */import "./icon_cer.d2259267.js";
import "./icon_cer_nft.f25ddb49.js";
/* empty css                     */import "./offSale.8a5b3e0c.js";
import "./nftDetail.d498c8f0.js";
var Series_scss_vue_type_style_index_0_src_66c837d0_scoped_true_lang = "";
const _hoisted_1 = { class: "self" };
const _hoisted_2 = { class: "section container" };
const _hoisted_3 = { class: "section-header flex flex-align-center" };
const _hoisted_4 = { class: "title flex1" };
const _hoisted_5 = { class: "section-cont nft-list" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const i18n = useI18n();
    const pagination = reactive(__spreadProps(__spreadValues({}, store.state.pagination), {
      pageSize: 12
    }));
    const nfts = reactive([]);
    const isShowNftListSkeleton = ref(true);
    function getMyNfts(isCover = false) {
      return new Promise((resolve) => __async(this, null, function* () {
        const res = yield GetSeriesNftList({
          Page: pagination.page.toString(),
          PageSize: pagination.pageSize.toString(),
          Address: store.state.userInfo.address,
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
                name: item.nftName ? item.nftName : "--",
                amount: 0,
                foundryName: store.state.userInfo.name,
                classify,
                tokenId: item.nftGenesis + item.nftTokenIndex,
                coverUrl: item.nftIcon,
                putAway: item.nftIsReady,
                metaId: item.nftOwnerMetaId,
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
      }));
    }
    function getMore() {
      pagination.loading = true;
      pagination.page++;
      getMyNfts().then(() => {
        pagination.loading = false;
      });
    }
    onMounted(() => {
      pagination.page = 1;
      if (store.state.token) {
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
                src: _imports_0,
                onClick: _cache[0] || (_cache[0] = ($event) => unref(router).back())
              }),
              createTextVNode(toDisplayString(unref(route).query.name), 1)
            ])
          ]),
          createVNode(NftSkeleton, {
            loading: isShowNftListSkeleton.value,
            count: unref(pagination).pageSize,
            class: "section-cont nft-list"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_5, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(nfts), (nft) => {
                  return openBlock(), createBlock(NftItem, {
                    key: nft.tokenId,
                    item: nft,
                    isSelf: true
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
var Series = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-66c837d0"]]);
export { Series as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyaWVzLjBmNTJiODQ3LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
