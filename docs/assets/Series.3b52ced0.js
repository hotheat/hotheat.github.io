import { _ as _export_sfc, e as defineComponent, v as reactive, r as ref, aq as useRoute, au as store, d0 as GetUserSeries, g as openBlock, i as createBlock, j as withCtx, k as createBaseVNode, l as createVNode, C as unref, A as createElementBlock, B as renderList, F as Fragment, m as createCommentVNode, bi as isRef, D as toDisplayString, q as pushScopeId, s as popScopeId } from './index.f03006d5.js';
import { E as ElCol, a as ElRow, S as ScreenWarp } from './ScreenWarp.af357932.js';
import { L as LoadMore } from './LoadMore.4d34a19f.js';
import { I as IsNull } from './IsNull.7a0d2f8f.js';
import './skeleton.4c62fb88.js';
import './collapse.3d03d1c1.js';
import './tag.0c66d476.js';
import './enum.2d046482.js';
import './card_icon_ins.9e46280c.js';

var Series_scss_vue_type_style_index_0_src_092e4fb1_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-092e4fb1"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "user-series" };
const _hoisted_2 = { class: "user-series-item" };
const _hoisted_3 = { class: "cover" };
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "cont" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "name flex flex-align-center" }, [
  /* @__PURE__ */ createBaseVNode("span"),
  /* @__PURE__ */ createCommentVNode(' <img src="@/assets/images/icon_cer_nft.png" /> ')
], -1));
const _hoisted_7 = { class: "drsc" };
const _hoisted_8 = { class: "nft-list" };
const _hoisted_9 = ["src", "title", "alt"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const screenActiveName = reactive([]);
    const seriesList = reactive([]);
    const cellVal = ref(1);
    const cells = [
      { val: 1, xs: 24, sm: 12, md: 8, lg: 8, xl: 6 },
      { val: 2, xs: 12, sm: 8, md: 6, lg: 6, xl: 4 }
    ];
    const route = useRoute();
    const pagination = {
      ...store.state.pagination
    };
    function getSeries(isCover = false) {
      return new Promise(async (resolve) => {
        const res = await GetUserSeries({
          ...pagination,
          metaId: route.params.metaId
        });
        if (isCover) {
          seriesList.length = 0;
        }
        seriesList.push(...res.data.results.items);
        const totalPage = Math.ceil(res.data.total / pagination.pageSize);
        if (totalPage <= pagination.page)
          pagination.nothing = true;
      });
    }
    function getMore() {
      if (pagination.loading || pagination.nothing)
        return;
      pagination.loading = true;
      pagination.page++;
      getSeries().then(() => {
        pagination.loading = false;
      });
    }
    getSeries();
    return (_ctx, _cache) => {
      const _component_ElCol = ElCol;
      const _component_ElRow = ElRow;
      return openBlock(), createBlock(ScreenWarp, {
        "cell-val": cellVal.value,
        isSellTypeNotClose: true,
        "is-has-screen": false,
        "is-has-sort": false,
        onChangeCell: _cache[0] || (_cache[0] = (val) => cellVal.value = val),
        "active-name": unref(screenActiveName),
        onActiveNameChange: _cache[1] || (_cache[1] = (val) => isRef(screenActiveName) ? screenActiveName.value = val : screenActiveName = val)
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_ElRow, {
              class: "user-series-list",
              gutter: 20
            }, {
              default: withCtx(() => [
                unref(seriesList).length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(seriesList), (item) => {
                  return openBlock(), createBlock(_component_ElCol, {
                    key: item.genesis + item.codehash,
                    xs: cells.find((item2) => item2.val === cellVal.value).xs,
                    sm: cells.find((item2) => item2.val === cellVal.value).sm,
                    md: cells.find((item2) => item2.val === cellVal.value).md,
                    lg: cells.find((item2) => item2.val === cellVal.value).lg,
                    xl: cells.find((item2) => item2.val === cellVal.value).xl
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_2, [
                        createBaseVNode("div", _hoisted_3, [
                          createBaseVNode("img", {
                            src: _ctx.$filters.metafile(item.icon)
                          }, null, 8, _hoisted_4)
                        ]),
                        createBaseVNode("div", _hoisted_5, [
                          _hoisted_6,
                          createBaseVNode("div", _hoisted_7, toDisplayString(item), 1),
                          createBaseVNode("div", _hoisted_8, [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(item.nftList.filter((item2, index) => index <= 3), (nft, index) => {
                              return openBlock(), createElementBlock("a", { key: index }, [
                                createBaseVNode("img", {
                                  src: _ctx.$filters.metafile(nft.icon),
                                  title: nft.name,
                                  alt: nft.name
                                }, null, 8, _hoisted_9)
                              ]);
                            }), 128))
                          ])
                        ])
                      ])
                    ]),
                    _: 2
                  }, 1032, ["xs", "sm", "md", "lg", "xl"]);
                }), 128)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createCommentVNode(" null "),
                  createVNode(IsNull, { class: "flex1" })
                ], 2112))
              ]),
              _: 1
            }),
            unref(seriesList).length > 0 ? (openBlock(), createBlock(LoadMore, {
              key: 0,
              class: "flex1",
              pagination,
              onGetMore: getMore
            })) : createCommentVNode("v-if", true)
          ])
        ]),
        _: 1
      }, 8, ["cell-val", "active-name"]);
    };
  }
});
var Series = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-092e4fb1"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/user/Series.vue"]]);

export { Series as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VyaWVzLjNiNTJjZWQwLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
