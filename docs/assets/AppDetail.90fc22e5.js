import { _ as _export_sfc, e as defineComponent, d as computed, f as resolveComponent, g as openBlock, A as createElementBlock, k as createBaseVNode, l as createVNode, a9 as normalizeStyle, J as createTextVNode, D as toDisplayString, C as unref, m as createCommentVNode, q as pushScopeId, s as popScopeId, E as useStore, u as useI18n, r as ref, v as reactive, t as useRouter, aq as useRoute, cZ as GetApps, au as store, X as ElMessage } from './index.e0dfe776.js';
import { C as CertIcon } from './icon_cer.5f0b2a62.js';

var _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAOpJREFUOE+90sFOwzAMBmA7bd8Did3WWN7GBBPHsXdm8AIcoHWn7IjEcyxZjSJRicNKu6gip0iRvvi3jTDRwYkc+H9oPl/OEE/qnPu8lGJURcz8qGCeEeBNpNolQdYuNiYze0Q4aRt2TdPUV0NE9GCyYg8AHvT8JCLSN5zeaER0/4MED+32WNfNXxO+CJXl6jYv9AMAffC6da46DK1JP5TrOyCE4CEdir8z81ohNhnb5GhdjLJc3GU5vkQsudkdZq1dmax4HcJGLSQRLdFETCupExeyq4yZb+JdRL6uXsihkf9+HxVtDDgZ9A3kSlsT7RQrEgAAAABJRU5ErkJggg==";

var UserMsg_vue_vue_type_style_index_0_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-0894f9bd"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "user-msg flex flex-align-center" };
const _hoisted_2$1 = { class: "cont flex1" };
const _hoisted_3$1 = { class: "username" };
const _hoisted_4$1 = ["src"];
const _hoisted_5$1 = { class: "metaId" };
const _hoisted_6$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "MetaID:", -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    metaId: { type: String, required: true },
    name: { type: String, required: true },
    avatarType: { type: String, required: false },
    loading: { type: Boolean, required: false },
    width: { type: Number, required: false },
    marginRight: { type: Number, required: false },
    nameSize: { type: Number, required: false },
    avatarDisabled: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    const store = useStore();
    const isCerted = computed(() => {
      return props.metaId && store.state.isCertedMetaIds.find((item) => item === props.metaId);
    });
    return (_ctx, _cache) => {
      const _component_UserAvatar = resolveComponent("UserAvatar");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", {
          class: "avatar-warp",
          style: normalizeStyle({ marginRight: __props.marginRight ? `${__props.marginRight}px` : "20px" })
        }, [
          createVNode(_component_UserAvatar, {
            metaId: __props.metaId,
            disabled: __props.avatarDisabled
          }, null, 8, ["metaId", "disabled"])
        ], 4),
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createTextVNode(toDisplayString(__props.name), 1),
            unref(isCerted) ? (openBlock(), createElementBlock("img", {
              key: 0,
              class: "cert-icon",
              src: unref(CertIcon)
            }, null, 8, _hoisted_4$1)) : createCommentVNode("v-if", true)
          ]),
          createBaseVNode("div", _hoisted_5$1, [
            _hoisted_6$1,
            createTextVNode(toDisplayString(__props.metaId ? __props.metaId.slice(0, 6) : ""), 1)
          ])
        ])
      ]);
    };
  }
});
var UserMsg = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-0894f9bd"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/UserMsg/UserMsg.vue"]]);

var AppDetail_scss_vue_type_style_index_0_src_4baf5ccc_scoped_true_lang = '';

const _hoisted_1 = { class: "apps" };
const _hoisted_2 = { class: "top" };
const _hoisted_3 = { class: "header flex flex-align-center flex-pack-center" };
const _hoisted_4 = { class: "app-detail" };
const _hoisted_5 = { class: "app-base-info flex" };
const _hoisted_6 = ["src"];
const _hoisted_7 = { class: "cont flex1" };
const _hoisted_8 = {
  key: 0,
  class: "title"
};
const _hoisted_9 = {
  key: 1,
  class: "drsc"
};
const _hoisted_10 = { class: "labels" };
const _hoisted_11 = { key: 0 };
const _hoisted_12 = { class: "detail-section" };
const _hoisted_13 = { class: "name" };
const _hoisted_14 = { class: "cont flex1" };
const _hoisted_15 = { class: "detail-section" };
const _hoisted_16 = { class: "name" };
const _hoisted_17 = { class: "cont flex1" };
const _hoisted_18 = { class: "detail-section-cont" };
const _hoisted_19 = { class: "detail-section" };
const _hoisted_20 = { class: "name" };
const _hoisted_21 = { class: "cont flex1" };
const _hoisted_22 = { class: "detail-section-cont" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const i18n = useI18n();
    ref("0");
    const app = reactive({ val: null });
    const router = useRouter();
    const route = useRoute();
    function getApps() {
      return new Promise(async (resolve) => {
        const res = await GetApps({
          certificationStage: typeof route.params.isCert === "string" ? route.params.isCert : ""
        });
        if (res.code === 200) {
          app.val = res.result.apps.find((item) => item.appTag === route.params.tag);
        }
        resolve();
      });
    }
    function open(url) {
      if (store.state.isIOS) {
        ElMessage.warning(i18n.t("iosNotToLink"));
        return;
      }
      window.open(url, "blank");
    }
    if (route.query.lang && typeof route.query.lang === "string") {
      i18n.locale.value = route.query.lang;
    }
    getApps();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("img", {
              src: _imports_0,
              class: "back",
              onClick: _cache[0] || (_cache[0] = ($event) => unref(router).back())
            }),
            createTextVNode(" " + toDisplayString(_ctx.$t("appsDetail")), 1)
          ])
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("img", {
              class: "logo",
              src: unref(app).val?.avatarUrl
            }, null, 8, _hoisted_6),
            createBaseVNode("div", _hoisted_7, [
              unref(app).val ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString(unref(app).val[`name${unref(i18n).locale.value === "zh" ? "ZH" : "EN"}`]), 1)) : createCommentVNode("v-if", true),
              unref(app).val ? (openBlock(), createElementBlock("div", _hoisted_9, toDisplayString(unref(app).val[`content${unref(i18n).locale.value === "zh" ? "ZH" : "EN"}`]), 1)) : createCommentVNode("v-if", true)
            ])
          ]),
          createCommentVNode(" labels "),
          createBaseVNode("div", _hoisted_10, [
            unref(app).val?.appType === 1 ? (openBlock(), createElementBlock("span", _hoisted_11, toDisplayString(_ctx.$t("showApp")), 1)) : createCommentVNode("v-if", true)
          ]),
          createCommentVNode(" \u5F00\u53D1\u8005 "),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("div", _hoisted_13, toDisplayString(_ctx.$t("developers")), 1),
            createBaseVNode("div", _hoisted_14, [
              createVNode(UserMsg, {
                width: 36,
                marginRight: 8,
                name: unref(app).val?.developerName,
                metaId: unref(app).val?.developerMetaId,
                avatarDisabled: true
              }, null, 8, ["name", "metaId"])
            ])
          ]),
          createCommentVNode(" \u5E94\u7528\u6536\u6B3E\u5730\u5740 "),
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("div", _hoisted_16, toDisplayString(_ctx.$t("appPayAddress")), 1),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, toDisplayString(unref(app).val?.appAddress), 1)
            ])
          ]),
          createCommentVNode(" \u5E94\u7528\u94FE\u63A5 "),
          createBaseVNode("div", _hoisted_19, [
            createBaseVNode("div", _hoisted_20, toDisplayString(_ctx.$t("appLink")), 1),
            createBaseVNode("div", _hoisted_21, [
              createBaseVNode("div", _hoisted_22, [
                createTextVNode(toDisplayString(unref(app).val?.url) + " ", 1),
                createBaseVNode("a", {
                  onClick: _cache[1] || (_cache[1] = ($event) => open(unref(app).val?.url))
                }, toDisplayString(_ctx.$t("open")), 1)
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
var AppDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4baf5ccc"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/app/AppDetail.vue"]]);

export { AppDetail as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwRGV0YWlsLjkwZmMyMmU1LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
