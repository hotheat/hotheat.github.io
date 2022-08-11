import { _ as _export_sfc, e as defineComponent, g as openBlock, A as createElementBlock, D as toDisplayString, k as createBaseVNode, m as createCommentVNode } from './index.e6d8aff8.js';

var LoadMore_scss_vue_type_style_index_0_src_3110bc2f_scoped_true_lang = '';

const _hoisted_1 = { class: "pagination" };
const _hoisted_2 = {
  key: 0,
  class: "nothing"
};
const _hoisted_3 = {
  key: 1,
  class: "nothing"
};
const _hoisted_4 = { class: "tips" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    pagination: { type: null, required: true }
  },
  emits: ["getMore"],
  setup(__props, { emit }) {
    function getMore() {
      emit("getMore");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        __props.pagination.nothing ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(_ctx.$t("nomore")), 1)) : __props.pagination.loading ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(_ctx.$t("loading")), 1)) : (openBlock(), createElementBlock("div", {
          key: 2,
          class: "more-warp",
          onClick: getMore
        }, [
          createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("clickmore")), 1),
          createCommentVNode('      <div class="icon"><img :src="home_icon_ins" /></div>')
        ]))
      ]);
    };
  }
});
var LoadMore = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3110bc2f"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/LoadMore/LoadMore.vue"]]);

export { LoadMore as L };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9hZE1vcmUuMWE1NjcwMmIuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
