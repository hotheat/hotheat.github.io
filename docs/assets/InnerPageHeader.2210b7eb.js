import { _ as _export_sfc, e as defineComponent, t as useRouter, g as openBlock, A as createElementBlock, k as createBaseVNode, C as unref, m as createCommentVNode, D as toDisplayString, p as renderSlot, J as createTextVNode, T as withDirectives, V as vModelText, bi as isRef, bb as withKeys } from './index.e0dfe776.js';
import { B as BannetIcon } from './bannet_icon_ins.9e5a53b7.js';
import { S as SearchIcon } from './icon_search.00d5970e.js';

var InnerPageHeader_scss_vue_type_style_index_0_src_c4ea2d96_scoped_true_lang = '';

const _hoisted_1 = { class: "inner-page-header container flex flex-align-center" };
const _hoisted_2 = { class: "inner-page-header-left flex1" };
const _hoisted_3 = { class: "title flex flex-align-center" };
const _hoisted_4 = { class: "flex1 flex flex-align-center" };
const _hoisted_5 = ["src"];
const _hoisted_6 = { class: "drsc" };
const _hoisted_7 = {
  key: 0,
  class: "search-warp flex flex-align-center"
};
const _hoisted_8 = ["placeholder", "onKeyup"];
const _hoisted_9 = ["src"];
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
                src: unref(BannetIcon)
              }, null, 8, _hoisted_5)) : createCommentVNode("v-if", true),
              createBaseVNode("span", null, toDisplayString(__props.title), 1)
            ]),
            renderSlot(_ctx.$slots, "right", {}, void 0, true)
          ]),
          createBaseVNode("div", _hoisted_6, [
            createTextVNode(toDisplayString(__props.intro) + " ", 1),
            renderSlot(_ctx.$slots, "intro", {}, void 0, true)
          ])
        ]),
        __props.isShowSearch ? (openBlock(), createElementBlock("div", _hoisted_7, [
          withDirectives(createBaseVNode("input", {
            class: "flex1",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(keyword) ? keyword.value = $event : null),
            placeholder: _ctx.$t("search"),
            onKeyup: withKeys(search, ["enter"]),
            type: "text"
          }, null, 40, _hoisted_8), [
            [vModelText, __props.keyword]
          ]),
          createBaseVNode("img", {
            src: unref(SearchIcon),
            onClick: search
          }, null, 8, _hoisted_9)
        ])) : createCommentVNode("v-if", true)
      ]);
    };
  }
});
var InnerPageHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c4ea2d96"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/InnerPageHeader/InnerPageHeader.vue"]]);

export { InnerPageHeader as I };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5uZXJQYWdlSGVhZGVyLjIyMTBiN2ViLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
