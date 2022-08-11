import { _ as _export_sfc, e as defineComponent, u as useI18n, r as ref, d as computed, az as GetCertUserInfo, g as openBlock, A as createElementBlock, l as createVNode, j as withCtx, k as createBaseVNode, C as unref, D as toDisplayString, m as createCommentVNode, F as Fragment, E as useStore } from './index.e6d8aff8.js';
import { U as UnCertIcon, E as ElPopover } from './icon_uncer.76f0b6c4.js';
import { C as CertIcon } from './icon_cer.5f0b2a62.js';

var Cert_scss_vue_type_style_index_0_src_298333cf_scoped_true_lang = '';

const _hoisted_1 = { class: "cert flex flex-pack-end flex-align-center" };
const _hoisted_2 = { class: "flex flex-align-center flex-pack-end" };
const _hoisted_3 = ["src"];
const _hoisted_4 = ["src"];
const _hoisted_5 = { key: 2 };
const _hoisted_6 = {
  key: 3,
  class: "el-icon-arrow-right icon-right"
};
const _hoisted_7 = { class: "certed-user-info" };
const _hoisted_8 = { class: "certed-user-item flex flex-align-center" };
const _hoisted_9 = { class: "label" };
const _hoisted_10 = { class: "value flex1" };
const _hoisted_11 = { class: "certed-user-item flex flex-align-center" };
const _hoisted_12 = { class: "label" };
const _hoisted_13 = { class: "value flex1" };
const _hoisted_14 = { class: "certed-user-item flex flex-align-center" };
const _hoisted_15 = { class: "label" };
const _hoisted_16 = { class: "value flex1" };
const _hoisted_17 = {
  key: 1,
  class: "no-cert"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    metaId: { type: String, required: false },
    certed: { type: Boolean, required: false },
    isOnlyIcon: { type: Boolean, required: false }
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
    async function getCertUserInfo() {
      try {
        const res = await GetCertUserInfo(props.metaId);
        if (res.code === 0) {
          userInfo.val = res.data;
        }
      } catch (error) {
      }
    }
    return (_ctx, _cache) => {
      const _component_ElPopover = ElPopover;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_ElPopover, {
          placement: "bottom",
          trigger: "hover",
          width: "auto"
        }, {
          reference: withCtx(() => [
            createBaseVNode("a", _hoisted_2, [
              props.metaId && unref(isCert) ? (openBlock(), createElementBlock("img", {
                key: 0,
                class: "icon-cert",
                src: unref(CertIcon)
              }, null, 8, _hoisted_3)) : (openBlock(), createElementBlock("img", {
                key: 1,
                class: "icon-cert",
                src: unref(UnCertIcon)
              }, null, 8, _hoisted_4)),
              !__props.isOnlyIcon ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(props.metaId && unref(isCert) || __props.certed ? _ctx.$t("isCert") : _ctx.$t("unCert")), 1)) : createCommentVNode("v-if", true),
              !__props.isOnlyIcon ? (openBlock(), createElementBlock("i", _hoisted_6)) : createCommentVNode("v-if", true)
            ])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_7, [
              unref(isCert) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("span", _hoisted_9, toDisplayString(_ctx.$t("realName")) + ":", 1),
                  createBaseVNode("span", _hoisted_10, toDisplayString(userInfo.val?.realName ? userInfo.val?.realName : _ctx.$t("noMsg")), 1)
                ]),
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("span", _hoisted_12, toDisplayString(_ctx.$t("idNumber")) + ":", 1),
                  createBaseVNode("span", _hoisted_13, toDisplayString(userInfo.val?.idNumber ? userInfo.val?.idNumber : _ctx.$t("noMsg")), 1)
                ]),
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("span", _hoisted_15, toDisplayString(_ctx.$t("certBody")) + ":", 1),
                  createBaseVNode("span", _hoisted_16, toDisplayString(userInfo.val?.userCertificationType === 1 ? _ctx.$t("personCert") : userInfo.val?.organizationName ? userInfo.val?.organizationName : _ctx.$t("noMsg")), 1)
                ])
              ], 64)) : (openBlock(), createElementBlock("div", _hoisted_17, toDisplayString(_ctx.$t("userNotCerted")), 1))
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
var CertTemp = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-298333cf"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/Cert/Cert.vue"]]);

export { CertTemp as C };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VydC43ZTVlMDExMy5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
