import { _ as _export_sfc, d as defineComponent, e as ref, v as watch, o as openBlock, c as createElementBlock, a as createBaseVNode, x as normalizeClass, t as toDisplayString, F as Fragment, i as renderList, h as createVNode, y as withDirectives, z as vModelText, A as withKeys, j as createCommentVNode, w as withCtx, l as createBlock } from "./index.1063289c.js";
import { _ as _imports_1 } from "./icon_search.630cdfed.js";
import { L as LoadMore } from "./LoadMore.917b373d.js";
import { I as IsNull } from "./IsNull.f190e793.js";
import { N as NftItem, a as NftSkeleton } from "./NftSkeleton.c784c379.js";
import { S as Sort } from "./Sort.f551df98.js";
var NftList_scss_vue_type_style_index_0_src_0a53fc47_scoped_true_lang = "";
const _hoisted_1 = {
  key: 0,
  class: "section-screen flex flex-align-baseline"
};
const _hoisted_2 = { class: "tags flex1 flex flex-align-center flex-wrap-wrap" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "flex flex-align-center screen-rigth" };
const _hoisted_5 = { class: "search-warp flex flex-align-center flex1" };
const _hoisted_6 = ["placeholder"];
const _hoisted_7 = { class: "section-cont nft-list" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    pagination: null,
    isShowSkeleton: { type: Boolean },
    keyword: { default: "" },
    nfts: null,
    classify: { default: "all" },
    classifyList: null,
    isHideAuthor: { type: Boolean, default: false },
    sorts: null,
    sortValue: null,
    isSelf: { type: Boolean, default: false }
  },
  emits: ["search", "changeClassify", "getMore", "changeSort"],
  setup(__props, { emit }) {
    const props = __props;
    const key = ref(props.keyword);
    watch(() => props.keyword, () => {
      key.value = props.keyword;
    });
    function changeSort(value) {
      emit("changeSort", value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        __props.classifyList && __props.classifyList.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("a", {
              class: normalizeClass({ active: __props.classify === "all" }),
              onClick: _cache[0] || (_cache[0] = ($event) => emit("changeClassify", "all"))
            }, toDisplayString(_ctx.$t("all")), 3),
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.classifyList, (item) => {
              return openBlock(), createElementBlock("a", {
                class: normalizeClass({ active: __props.classify === item.classify }),
                key: item.classify,
                onClick: ($event) => emit("changeClassify", item.classify)
              }, toDisplayString(_ctx.$t(item.classify)), 11, _hoisted_3);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(Sort, {
              sorts: __props.sorts,
              sortValue: __props.sortValue,
              onChangeSort: changeSort
            }, null, 8, ["sorts", "sortValue"]),
            createBaseVNode("div", _hoisted_5, [
              withDirectives(createBaseVNode("input", {
                class: "flex1",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => key.value = $event),
                placeholder: _ctx.$t("search"),
                onKeyup: _cache[2] || (_cache[2] = withKeys(($event) => emit("search", key.value), ["enter"])),
                type: "text"
              }, null, 40, _hoisted_6), [
                [vModelText, key.value]
              ]),
              createBaseVNode("img", {
                src: _imports_1,
                onClick: _cache[3] || (_cache[3] = ($event) => emit("search", key.value))
              })
            ])
          ])
        ])) : createCommentVNode("", true),
        createVNode(NftSkeleton, {
          loading: __props.isShowSkeleton,
          count: __props.pagination.pageSize,
          class: "section-cont nft-list"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_7, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.nfts, (item) => {
                return openBlock(), createBlock(NftItem, {
                  item,
                  isHideAuthor: __props.isHideAuthor,
                  isSelf: __props.isSelf
                }, null, 8, ["item", "isHideAuthor", "isSelf"]);
              }), 256))
            ])
          ]),
          _: 1
        }, 8, ["loading", "count"]),
        !__props.isShowSkeleton ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          __props.nfts.length > 0 ? (openBlock(), createBlock(LoadMore, {
            key: 0,
            pagination: __props.pagination,
            onGetMore: _cache[4] || (_cache[4] = ($event) => emit("getMore"))
          }, null, 8, ["pagination"])) : (openBlock(), createBlock(IsNull, { key: 1 }))
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
var NftList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a53fc47"]]);
export { NftList as N };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmZ0TGlzdC42OTdlOWMzNy5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
