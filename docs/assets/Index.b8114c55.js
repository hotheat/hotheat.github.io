import { _ as _export_sfc, e as defineComponent, r as ref, u as useI18n, v as reactive, a as onMounted, X as ElMessage, a3 as router, f as resolveComponent, g as openBlock, i as createBlock, j as withCtx, l as createVNode, C as unref, E as useStore } from './index.e6d8aff8.js';
import { U as UserCenter } from './UserCenter.92685a4b.js';
import './skeleton.280f6775.js';
import './image-viewer.d1105775.js';
import './detailDetach-owner.53484477.js';
import './LoadMore.1a56702b.js';
import './Cert.7e5e0113.js';
import './icon_uncer.76f0b6c4.js';
import './icon_cer.5f0b2a62.js';
import './Tab.b16ab2fd.js';
import './vue3-clipboard.esm-bundler.76b8e6c2.js';
import './IsNull.d8cfb8fb.js';
import './v1.93131899.js';

var Index_scss_vue_type_style_index_0_src_7d3a4b6e_scoped_true_lang = '';

const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const root = ref();
    const i18n = useI18n();
    const store = useStore();
    const user = reactive({
      name: store.state.userInfo?.name,
      metaId: store.state.userInfo?.metaId,
      address: store.state.userInfo?.address
    });
    onMounted(() => {
      if (store.getters.isAuthed) {
        if (store.state.userInfo) ; else {
          store.watch((state) => state.userInfo, (userInfo) => {
            if (userInfo) {
              user.name = store.state.userInfo?.name, user.metaId = store.state.userInfo?.metaId, user.address = store.state.userInfo?.address;
            }
          });
        }
      } else {
        ElMessage.warning(i18n.t("toLoginTip"));
        router.replace("/");
      }
    });
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      return openBlock(), createBlock(UserCenter, {
        ref_key: "root",
        ref: root,
        "user-info-loading": unref(store).state.userInfoLoading,
        user: unref(user),
        isHideAuthor: true
      }, {
        default: withCtx(() => [
          createVNode(_component_router_view)
        ]),
        _: 1
      }, 8, ["user-info-loading", "user"]);
    };
  }
});
var Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7d3a4b6e"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/self/Index.vue"]]);

export { Index as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXguYjgxMTRjNTUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
