import { d as defineComponent, o as openBlock, l as createBlock, w as withCtx, a as createBaseVNode, t as toDisplayString, a5 as renderSlot, Q as isRef, g as unref, R as ElDialog, P as createTextVNode } from "./index.1063289c.js";
const _hoisted_1 = { class: "modal-drsc" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("       ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode("   \n      ");
const _hoisted_4 = {
  class: "modal-footer",
  slot: "footer"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    title: { default: "" },
    visible: { type: Boolean, default: false }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElDialog), {
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
      }, 8, ["modelValue", "title"]);
    };
  }
});
export { _sfc_main as _ };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9yZUNvbnRlbnRNb2RhbC44OWY1NzBkMi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
