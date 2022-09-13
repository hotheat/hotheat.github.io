import { d as defineComponent, O as resolveComponent, o as openBlock, l as createBlock, w as withCtx, h as createVNode, a as createBaseVNode, aX as KeepAlive, aY as resolveDynamicComponent, j as createCommentVNode, x as normalizeClass, aZ as Transition } from "./index.1063289c.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(_component_router_view, null, {
        default: withCtx(({ Component, route }) => [
          createVNode(Transition, { name: "fade" }, {
            default: withCtx(() => {
              var _a;
              return [
                createBaseVNode("div", {
                  class: normalizeClass(["transition-warp flex1", { setFull: (_a = route.meta) == null ? void 0 : _a.isHideHeaderAndFooter }])
                }, [
                  (openBlock(), createBlock(KeepAlive, null, [
                    route.meta && route.meta.keepAlive ? (openBlock(), createBlock(resolveDynamicComponent(Component), {
                      key: route.fullPath
                    })) : createCommentVNode("", true)
                  ], 1024)),
                  !route.meta || route.meta && !route.meta.keepAlive ? (openBlock(), createBlock(resolveDynamicComponent(Component), {
                    key: route.fullPath
                  })) : createCommentVNode("", true)
                ], 2)
              ];
            }),
            _: 2
          }, 1024)
        ]),
        _: 1
      });
    };
  }
});
export { _sfc_main as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbW9uTGF5b3V0LjkyMzcxNmNhLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
