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
import { _ as _export_sfc, d as defineComponent, u as useI18n, e as ref, r as reactive, V as useRouter, W as useRoute, b4 as GetApps, o as openBlock, c as createElementBlock, a as createBaseVNode, g as unref, P as createTextVNode, t as toDisplayString, j as createCommentVNode, h as createVNode, U as store, S as ElMessage } from "./index.1063289c.js";
import { U as UserMsg } from "./UserMsg.dc51c2d7.js";
import "./icon_cer.d2259267.js";
var _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAOpJREFUOE+90sFOwzAMBmA7bd8Did3WWN7GBBPHsXdm8AIcoHWn7IjEcyxZjSJRicNKu6gip0iRvvi3jTDRwYkc+H9oPl/OEE/qnPu8lGJURcz8qGCeEeBNpNolQdYuNiYze0Q4aRt2TdPUV0NE9GCyYg8AHvT8JCLSN5zeaER0/4MED+32WNfNXxO+CJXl6jYv9AMAffC6da46DK1JP5TrOyCE4CEdir8z81ohNhnb5GhdjLJc3GU5vkQsudkdZq1dmax4HcJGLSQRLdFETCupExeyq4yZb+JdRL6uXsihkf9+HxVtDDgZ9A3kSlsT7RQrEgAAAABJRU5ErkJggg==";
var AppDetail_scss_vue_type_style_index_0_src_6b4b5a12_scoped_true_lang = "";
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
      return new Promise((resolve) => __async(this, null, function* () {
        const res = yield GetApps({
          certificationStage: typeof route.params.isCert === "string" ? route.params.isCert : ""
        });
        if (res.code === 200) {
          app.val = res.result.apps.find((item) => item.appTag === route.params.tag);
        }
        resolve();
      }));
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
      var _a, _b, _c, _d, _e, _f;
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
              src: (_a = unref(app).val) == null ? void 0 : _a.avatarUrl
            }, null, 8, _hoisted_6),
            createBaseVNode("div", _hoisted_7, [
              unref(app).val ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString(unref(app).val[`name${unref(i18n).locale.value === "zh" ? "ZH" : "EN"}`]), 1)) : createCommentVNode("", true),
              unref(app).val ? (openBlock(), createElementBlock("div", _hoisted_9, toDisplayString(unref(app).val[`content${unref(i18n).locale.value === "zh" ? "ZH" : "EN"}`]), 1)) : createCommentVNode("", true)
            ])
          ]),
          createBaseVNode("div", _hoisted_10, [
            ((_b = unref(app).val) == null ? void 0 : _b.appType) === 1 ? (openBlock(), createElementBlock("span", _hoisted_11, toDisplayString(_ctx.$t("showApp")), 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_12, [
            createBaseVNode("div", _hoisted_13, toDisplayString(_ctx.$t("developers")), 1),
            createBaseVNode("div", _hoisted_14, [
              createVNode(UserMsg, {
                width: 36,
                marginRight: 8,
                name: (_c = unref(app).val) == null ? void 0 : _c.developerName,
                metaId: (_d = unref(app).val) == null ? void 0 : _d.developerMetaId,
                avatarDisabled: true
              }, null, 8, ["name", "metaId"])
            ])
          ]),
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("div", _hoisted_16, toDisplayString(_ctx.$t("appPayAddress")), 1),
            createBaseVNode("div", _hoisted_17, [
              createBaseVNode("div", _hoisted_18, toDisplayString((_e = unref(app).val) == null ? void 0 : _e.appAddress), 1)
            ])
          ]),
          createBaseVNode("div", _hoisted_19, [
            createBaseVNode("div", _hoisted_20, toDisplayString(_ctx.$t("appLink")), 1),
            createBaseVNode("div", _hoisted_21, [
              createBaseVNode("div", _hoisted_22, [
                createTextVNode(toDisplayString((_f = unref(app).val) == null ? void 0 : _f.url) + " ", 1),
                createBaseVNode("a", {
                  onClick: _cache[1] || (_cache[1] = ($event) => {
                    var _a2;
                    return open((_a2 = unref(app).val) == null ? void 0 : _a2.url);
                  })
                }, toDisplayString(_ctx.$t("open")), 1)
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
var AppDetail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6b4b5a12"]]);
export { AppDetail as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwRGV0YWlsLjRmZjhhM2E4LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
