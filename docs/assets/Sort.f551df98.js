import { O as OrderType } from "./enum.cb4b74f9.js";
import { _ as _export_sfc, d as defineComponent, O as resolveComponent, o as openBlock, c as createElementBlock, F as Fragment, i as renderList, x as normalizeClass, a as createBaseVNode, t as toDisplayString, g as unref, l as createBlock } from "./index.1063289c.js";
var Sort_scss_vue_type_style_index_0_src_1e844138_scoped_true_lang = "";
const _hoisted_1 = { class: "sort-warp flex flex-align-center" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "sort-name" };
const _hoisted_4 = { class: "sort-type" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    sorts: null,
    sortValue: null
  },
  emits: ["changeSort"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      const _component_SvgIcon = resolveComponent("SvgIcon");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.sorts, (sort) => {
          return openBlock(), createElementBlock("div", {
            class: normalizeClass(["sort-item flex flex-align-center", { active: sort.value === __props.sortValue }]),
            onClick: ($event) => emit("changeSort", sort.value)
          }, [
            createBaseVNode("div", _hoisted_3, toDisplayString(_ctx.$t(sort.nameKey)), 1),
            createBaseVNode("div", _hoisted_4, [
              sort.orderType === unref(OrderType).ASC ? (openBlock(), createBlock(_component_SvgIcon, {
                key: 0,
                name: "sort-asc"
              })) : (openBlock(), createBlock(_component_SvgIcon, {
                key: 1,
                name: "sort-desc"
              }))
            ])
          ], 10, _hoisted_2);
        }), 256))
      ]);
    };
  }
});
var Sort = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1e844138"]]);
export { Sort as S };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29ydC5mNTUxZGY5OC5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
