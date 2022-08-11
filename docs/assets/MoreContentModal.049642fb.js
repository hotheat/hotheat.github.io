import { _ as _export_sfc, e as defineComponent, g as openBlock, A as createElementBlock, m as createCommentVNode, l as createVNode, j as withCtx, k as createBaseVNode, D as toDisplayString, p as renderSlot, bi as isRef, F as Fragment, J as createTextVNode, ap as ElDialog } from './index.e6d8aff8.js';

const _hoisted_1 = { class: "modal-drsc" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("       ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("   \n      ");
const _hoisted_4 = {
  class: "modal-footer",
  slot: "footer"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: { type: String, required: true, default: "" },
    visible: { type: Boolean, required: true, default: false }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      const _component_ElDialog = ElDialog;
      return openBlock(), createElementBlock(Fragment, null, [
        createCommentVNode(" drsc detail "),
        createVNode(_component_ElDialog, {
          modelValue: __props.visible,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(visible) ? visible.value = $event : null),
          "custom-class": "modal",
          title: __props.title,
          onClose: _cache[2] || (_cache[2] = ($event) => emit("change", false))
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", {
                class: "btn btn-default",
                onClick: _cache[0] || (_cache[0] = ($event) => emit("change", false))
              }, toDisplayString(_ctx.$t("confirm")), 1)
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("pre", null, [
                _hoisted_2,
                renderSlot(_ctx.$slots, "default"),
                _hoisted_3
              ])
            ])
          ]),
          _: 3
        }, 8, ["modelValue", "title"])
      ], 2112);
    };
  }
});
var MoreContentModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/Modal/MoreContentModal/MoreContentModal.vue"]]);

export { MoreContentModal as M };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9yZUNvbnRlbnRNb2RhbC4wNDk2NDJmYi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
