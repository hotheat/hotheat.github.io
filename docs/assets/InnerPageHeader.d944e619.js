import { _ as _export_sfc, d as defineComponent, V as useRouter, o as openBlock, c as createElementBlock, a as createBaseVNode, g as unref, j as createCommentVNode, P as createTextVNode, t as toDisplayString, a5 as renderSlot, y as withDirectives, z as vModelText, Q as isRef, A as withKeys } from "./index.1063289c.js";
import { _ as _imports_0 } from "./bannet_icon_ins.c0e9a236.js";
import { _ as _imports_1 } from "./icon_search.630cdfed.js";
var InnerPageHeader_scss_vue_type_style_index_0_src_1899352b_scoped_true_lang = "";
const _hoisted_1 = { class: "inner-page-header container flex flex-align-center" };
const _hoisted_2 = { class: "inner-page-header-left flex1" };
const _hoisted_3 = { class: "title flex flex-align-center" };
const _hoisted_4 = { class: "flex1 flex flex-align-center" };
const _hoisted_5 = { class: "drsc" };
const _hoisted_6 = {
  key: 0,
  class: "search-warp flex flex-align-center"
};
const _hoisted_7 = ["placeholder", "onKeyup"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: {
      type: String,
      default: ""
    },
    intro: {
      type: String,
      default: ""
    },
    keyword: {
      type: String,
      default: ""
    },
    isHasBackIcon: {
      type: Boolean,
      default: true
    },
    isShowSearch: {
      type: Boolean,
      default: true
    }
  },
  emits: ["search"],
  setup(__props, { emit }) {
    const props = __props;
    const router = useRouter();
    function search() {
      emit("search", props.keyword);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              __props.isHasBackIcon ? (openBlock(), createElementBlock("img", {
                key: 0,
                onClick: _cache[0] || (_cache[0] = ($event) => unref(router).back()),
                src: _imports_0
              })) : createCommentVNode("", true),
              createTextVNode(" " + toDisplayString(__props.title), 1)
            ]),
            renderSlot(_ctx.$slots, "right", {}, void 0, true)
          ]),
          createBaseVNode("div", _hoisted_5, [
            createTextVNode(toDisplayString(__props.intro) + " ", 1),
            renderSlot(_ctx.$slots, "intro", {}, void 0, true)
          ])
        ]),
        __props.isShowSearch ? (openBlock(), createElementBlock("div", _hoisted_6, [
          withDirectives(createBaseVNode("input", {
            class: "flex1",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(keyword) ? keyword.value = $event : null),
            placeholder: _ctx.$t("search"),
            onKeyup: withKeys(search, ["enter"]),
            type: "text"
          }, null, 40, _hoisted_7), [
            [vModelText, __props.keyword]
          ]),
          createBaseVNode("img", {
            src: _imports_1,
            onClick: search
          })
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
var InnerPageHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1899352b"]]);
export { InnerPageHeader as I };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5uZXJQYWdlSGVhZGVyLmQ5NDRlNjE5LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
