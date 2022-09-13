import { _ as _imports_0 } from "./icon_cer.d2259267.js";
import { _ as _export_sfc, d as defineComponent, L as computed, O as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, h as createVNode, aW as normalizeStyle, P as createTextVNode, t as toDisplayString, g as unref, j as createCommentVNode, p as pushScopeId, b as popScopeId, k as useStore } from "./index.1063289c.js";
var UserMsg_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-5dd30755"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "user-msg flex flex-align-center" };
const _hoisted_2 = { class: "cont flex1" };
const _hoisted_3 = { class: "username" };
const _hoisted_4 = {
  key: 0,
  class: "cert-icon",
  src: _imports_0
};
const _hoisted_5 = { class: "metaId" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "MetaID:", -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    metaId: null,
    name: null,
    avatarType: null,
    loading: { type: Boolean },
    width: null,
    marginRight: null,
    nameSize: null,
    avatarDisabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const store = useStore();
    const isCerted = computed(() => {
      return props.metaId && store.state.isCertedMetaIds.find((item) => item === props.metaId);
    });
    return (_ctx, _cache) => {
      const _component_UserAvatar = resolveComponent("UserAvatar");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          class: "avatar-warp",
          style: normalizeStyle({ marginRight: __props.marginRight ? `${__props.marginRight}px` : "20px" })
        }, [
          createVNode(_component_UserAvatar, {
            metaId: __props.metaId,
            disabled: __props.avatarDisabled
          }, null, 8, ["metaId", "disabled"])
        ], 4),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createTextVNode(toDisplayString(__props.name), 1),
            unref(isCerted) ? (openBlock(), createElementBlock("img", _hoisted_4)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_5, [
            _hoisted_6,
            createTextVNode(toDisplayString(__props.metaId ? __props.metaId.slice(0, 6) : ""), 1)
          ])
        ])
      ]);
    };
  }
});
var UserMsg = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5dd30755"]]);
export { UserMsg as U };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlck1zZy5kYzUxYzJkNy5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
