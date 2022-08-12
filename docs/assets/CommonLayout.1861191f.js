import { _ as _export_sfc, e as defineComponent, f as resolveComponent, g as openBlock, i as createBlock, j as withCtx, l as createVNode, k as createBaseVNode, cC as KeepAlive, cE as resolveDynamicComponent, m as createCommentVNode, L as normalizeClass, aa as Transition } from './index.e0dfe776.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(_component_router_view, null, {
        default: withCtx(({ Component, route }) => [
          createVNode(Transition, { name: "fade" }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(["transition-warp flex1", { setFull: route.meta?.isHideHeaderAndFooter }])
              }, [
                (openBlock(), createBlock(KeepAlive, null, [
                  route.meta && route.meta.keepAlive ? (openBlock(), createBlock(resolveDynamicComponent(Component), {
                    key: route.fullPath
                  })) : createCommentVNode("v-if", true)
                ], 1024)),
                !route.meta || route.meta && !route.meta.keepAlive ? (openBlock(), createBlock(resolveDynamicComponent(Component), {
                  key: route.fullPath
                })) : createCommentVNode("v-if", true)
              ], 2)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 1
      });
    };
  }
});
var CommonLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/hotheat/Desktop/nft/nft-show/src/layouts/CommonLayout.vue"]]);

export { CommonLayout as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbW9uTGF5b3V0LjE4NjExOTFmLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
