import { _ as _export_sfc, e as defineComponent, r as ref, v as reactive, aq as useRoute, a as onMounted, cq as GetMetaIdInfo, f as resolveComponent, g as openBlock, i as createBlock, j as withCtx, l as createVNode, C as unref } from './index.3c02df72.js';
import { U as UserCenter } from './UserCenter.ce7940fc.js';
import './skeleton.048068e8.js';
import './image-viewer.62daae40.js';
import './detailDetach-owner.53484477.js';
import './LoadMore.538873cb.js';
import './Cert.8ed408b2.js';
import './icon_uncer.6a55b767.js';
import './icon_cer.5f0b2a62.js';
import './Tab.3126e5a0.js';
import './vue3-clipboard.esm-bundler.76b8e6c2.js';
import './IsNull.42d97953.js';
import './v1.93131899.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const root = ref();
    const user = reactive({
      name: "",
      metaId: ""
    });
    const loading = ref(true);
    const route = useRoute();
    onMounted(async () => {
      if (route.params.metaId && typeof route.params.metaId === "string") {
        const res = await GetMetaIdInfo(route.params.metaId);
        if (res.code === 200) {
          user.name = res.result.name;
          user.metaId = res.result.metaId;
          loading.value = false;
        }
      }
    });
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(UserCenter, {
        user: unref(user),
        userInfoLoading: loading.value,
        ref_key: "root",
        ref: root
      }, {
        default: withCtx(() => [
          createVNode(_component_router_view)
        ]),
        _: 1
      }, 8, ["user", "userInfoLoading"]);
    };
  }
});
var User = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/User.vue"]]);

export { User as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci4xMzM1YzJjYi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
