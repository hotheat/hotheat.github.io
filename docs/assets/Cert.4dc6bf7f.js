var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
import { _ as _imports_0 } from "./icon_cer.d2259267.js";
import { _ as _export_sfc, d as defineComponent, u as useI18n, e as ref, L as computed, ai as GetCertUserInfo, o as openBlock, c as createElementBlock, h as createVNode, w as withCtx, a as createBaseVNode, g as unref, j as createCommentVNode, t as toDisplayString, F as Fragment, aj as ElPopover, p as pushScopeId, b as popScopeId, k as useStore } from "./index.1063289c.js";
/* empty css                     */var Cert_scss_vue_type_style_index_0_src_35158ee8_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-35158ee8"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "cert flex flex-pack-end" };
const _hoisted_2 = { class: "flex flex-align-center flex-pack-end" };
const _hoisted_3 = {
  key: 0,
  class: "icon-cert",
  src: _imports_0
};
const _hoisted_4 = { class: "cert-text" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("i", { class: "el-icon-arrow-right icon-right" }, null, -1));
const _hoisted_6 = { class: "certed-user-info" };
const _hoisted_7 = { class: "certed-user-item flex flex-align-center" };
const _hoisted_8 = { class: "label" };
const _hoisted_9 = { class: "value flex1" };
const _hoisted_10 = { class: "certed-user-item flex flex-align-center" };
const _hoisted_11 = { class: "label" };
const _hoisted_12 = { class: "value flex1" };
const _hoisted_13 = { class: "certed-user-item flex flex-align-center" };
const _hoisted_14 = { class: "label" };
const _hoisted_15 = { class: "value flex1" };
const _hoisted_16 = {
  key: 1,
  class: "no-cert"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    metaId: null,
    certed: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const store = useStore();
    useI18n();
    const userInfo = { val: null };
    const isGetUserInfoed = ref(false);
    const isCert = computed(() => {
      const result = props.metaId && store.state.isCertedMetaIds.find((item) => item === props.metaId);
      if (result && !isGetUserInfoed.value) {
        isGetUserInfoed.value = true;
        getCertUserInfo();
      }
      return result;
    });
    function getCertUserInfo() {
      return __async(this, null, function* () {
        try {
          const res = yield GetCertUserInfo(props.metaId);
          if (res.code === 0) {
            userInfo.val = res.data;
          }
        } catch (error) {
        }
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(ElPopover), {
          placement: "bottom",
          trigger: "hover",
          width: "auto"
        }, {
          reference: withCtx(() => [
            createBaseVNode("a", _hoisted_2, [
              props.metaId && unref(isCert) ? (openBlock(), createElementBlock("img", _hoisted_3)) : createCommentVNode("", true),
              createBaseVNode("span", _hoisted_4, toDisplayString(props.metaId && unref(isCert) || __props.certed ? _ctx.$t("isCert") : _ctx.$t("unCert")), 1),
              _hoisted_5
            ])
          ]),
          default: withCtx(() => {
            var _a, _b, _c, _d, _e, _f, _g;
            return [
              createBaseVNode("div", _hoisted_6, [
                unref(isCert) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createBaseVNode("div", _hoisted_7, [
                    createBaseVNode("span", _hoisted_8, toDisplayString(_ctx.$t("realName")) + ":", 1),
                    createBaseVNode("span", _hoisted_9, toDisplayString(((_a = userInfo.val) == null ? void 0 : _a.realName) ? (_b = userInfo.val) == null ? void 0 : _b.realName : _ctx.$t("noMsg")), 1)
                  ]),
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("span", _hoisted_11, toDisplayString(_ctx.$t("idNumber")) + ":", 1),
                    createBaseVNode("span", _hoisted_12, toDisplayString(((_c = userInfo.val) == null ? void 0 : _c.idNumber) ? (_d = userInfo.val) == null ? void 0 : _d.idNumber : _ctx.$t("noMsg")), 1)
                  ]),
                  createBaseVNode("div", _hoisted_13, [
                    createBaseVNode("span", _hoisted_14, toDisplayString(_ctx.$t("certBody")) + ":", 1),
                    createBaseVNode("span", _hoisted_15, toDisplayString(((_e = userInfo.val) == null ? void 0 : _e.userCertificationType) === 1 ? _ctx.$t("personCert") : ((_f = userInfo.val) == null ? void 0 : _f.organizationName) ? (_g = userInfo.val) == null ? void 0 : _g.organizationName : _ctx.$t("noMsg")), 1)
                  ])
                ], 64)) : (openBlock(), createElementBlock("div", _hoisted_16, toDisplayString(_ctx.$t("userNotCerted")), 1))
              ])
            ];
          }),
          _: 1
        })
      ]);
    };
  }
});
var CertTemp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-35158ee8"]]);
export { CertTemp as C };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VydC40ZGM2YmY3Zi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
