import { _ as _export_sfc, e as defineComponent, f as resolveComponent, g as openBlock, A as createElementBlock, l as createVNode, j as withCtx, k as createBaseVNode, F as Fragment, B as renderList, i as createBlock, m as createCommentVNode, J as createTextVNode, D as toDisplayString, L as normalizeClass } from './index.f03006d5.js';
import { E as ElSkeletonItem, a as ElSkeleton } from './skeleton.4c62fb88.js';

var Tab_scss_vue_type_style_index_0_src_787a4e7b_scoped_true_lang = '';

const _hoisted_1 = { id: "tab-warp" };
const _hoisted_2 = { id: "tabs" };
const _hoisted_3 = { id: "tabs" };
const _hoisted_4 = ["src"];
const _hoisted_5 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    tabs: { type: Array, required: true },
    val: { type: null, required: false },
    isSkeleton: { type: Boolean, required: false, default: false }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    console.log("zxzxz22asasz", props.tabs);
    function change(val) {
      if (props.val === val) {
        return;
      }
      emit("change", val);
    }
    return (_ctx, _cache) => {
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_router_link = resolveComponent("router-link");
      const _component_ElSkeleton = ElSkeleton;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ElSkeleton, {
          loading: __props.isSkeleton,
          animated: ""
        }, {
          template: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(Array.from({ length: 3 }), (tab) => {
                return openBlock(), createBlock(_component_ElSkeletonItem, { variant: "button" });
              }), 256))
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (tab) => {
                return openBlock(), createElementBlock("span", {
                  key: tab.val,
                  class: "tab-item"
                }, [
                  tab.imgPath ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: tab.imgPath
                  }, null, 8, _hoisted_4)) : createCommentVNode("v-if", true),
                  tab.path ? (openBlock(), createBlock(_component_router_link, {
                    key: 1,
                    to: tab.path
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(tab.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])) : (openBlock(), createElementBlock("a", {
                    key: 2,
                    class: normalizeClass({ active: __props.val === tab.val }),
                    onClick: ($event) => change(tab.val)
                  }, toDisplayString(tab.name), 11, _hoisted_5))
                ]);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["loading"])
      ]);
    };
  }
});
var Tab = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-787a4e7b"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/Tab/Tab.vue"]]);

export { Tab as T };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFiLjM1ZDE5YzNlLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
