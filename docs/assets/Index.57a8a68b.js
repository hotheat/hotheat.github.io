import { _ as _export_sfc, d as defineComponent, e as ref, u as useI18n, r as reactive, I as onMounted, S as ElMessage, ag as router, O as resolveComponent, o as openBlock, l as createBlock, w as withCtx, h as createVNode, g as unref, k as useStore } from "./index.1063289c.js";
import { U as UserCenter } from "./UserCenter.15eef30c.js";
import "./LoadMore.917b373d.js";
/* empty css                           *//* empty css                          */import "./Cert.4dc6bf7f.js";
import "./icon_cer.d2259267.js";
/* empty css                     */var Index_scss_vue_type_style_index_0_src_09ced0d8_scoped_true_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    var _a, _b, _c;
    const root = ref();
    const i18n = useI18n();
    const store = useStore();
    const user = reactive({
      name: (_a = store.state.userInfo) == null ? void 0 : _a.name,
      metaId: (_b = store.state.userInfo) == null ? void 0 : _b.metaId,
      address: (_c = store.state.userInfo) == null ? void 0 : _c.address
    });
    onMounted(() => {
      if (store.state.token) {
        if (store.state.userInfo)
          ;
        else {
          store.watch((state) => state.userInfo, (userInfo) => {
            var _a2, _b2, _c2;
            if (userInfo) {
              user.name = (_a2 = store.state.userInfo) == null ? void 0 : _a2.name, user.metaId = (_b2 = store.state.userInfo) == null ? void 0 : _b2.metaId, user.address = (_c2 = store.state.userInfo) == null ? void 0 : _c2.address;
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
var Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-09ced0d8"]]);
export { Index as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXguNTdhOGE2OGIuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
