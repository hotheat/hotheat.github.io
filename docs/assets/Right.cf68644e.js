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
import { _ as _imports_1 } from "./icon_cer_nft.f25ddb49.js";
import { _ as _export_sfc, d as defineComponent, r as reactive, b3 as GetRightList, O as resolveComponent, o as openBlock, c as createElementBlock, h as createVNode, a as createBaseVNode, F as Fragment, i as renderList, g as unref, Y as metafileUrl, t as toDisplayString, P as createTextVNode, j as createCommentVNode, x as normalizeClass } from "./index.1063289c.js";
import { I as InnerPageHeader } from "./InnerPageHeader.d944e619.js";
import "./bannet_icon_ins.c0e9a236.js";
import "./icon_search.630cdfed.js";
var Right_scss_vue_type_style_index_0_src_1504a1fe_scoped_true_lang = "";
const _hoisted_1 = { class: "right-list container" };
const _hoisted_2 = { class: "right-item-msg flex" };
const _hoisted_3 = { class: "cover" };
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "cont flex1" };
const _hoisted_6 = { class: "name" };
const _hoisted_7 = { class: "cont-list" };
const _hoisted_8 = { class: "cont-item flex flex-align-center" };
const _hoisted_9 = { class: "key" };
const _hoisted_10 = { class: "value flex flex-align-center" };
const _hoisted_11 = { class: "avatar-warp" };
const _hoisted_12 = {
  key: 0,
  class: "cert-icon",
  src: _imports_0
};
const _hoisted_13 = {
  key: 1,
  class: "cert-icon",
  src: _imports_1
};
const _hoisted_14 = { class: "cont-item" };
const _hoisted_15 = { class: "key" };
const _hoisted_16 = { class: "value" };
const _hoisted_17 = { class: "status flex flex-align-center" };
const _hoisted_18 = { class: "key" };
const _hoisted_19 = { class: "value flex flex-align-center" };
const _hoisted_20 = { class: "right-item-data flex flex-align-center" };
const _hoisted_21 = { class: "data-item flex1" };
const _hoisted_22 = { class: "name" };
const _hoisted_23 = { class: "value" };
const _hoisted_24 = { class: "data-item flex1" };
const _hoisted_25 = { class: "name" };
const _hoisted_26 = { class: "value" };
const _hoisted_27 = { class: "data-item flex1" };
const _hoisted_28 = { class: "name" };
const _hoisted_29 = { class: "value" };
const _hoisted_30 = { class: "data-item flex1" };
const _hoisted_31 = { class: "name" };
const _hoisted_32 = { class: "value" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const rights = reactive([]);
    function getRightList() {
      return new Promise((resolve) => __async(this, null, function* () {
        const res = yield GetRightList();
        if (res && res.code === 0) {
          rights.length = 0;
          rights.push(...res.data);
        }
        resolve();
      }));
    }
    getRightList();
    return (_ctx, _cache) => {
      const _component_UserAvatar = resolveComponent("UserAvatar");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(InnerPageHeader, {
          title: _ctx.$t("rightsList"),
          intro: _ctx.$t("rightsListTips"),
          isShowSearch: false
        }, null, 8, ["title", "intro"]),
        createBaseVNode("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(rights), (right, index) => {
            return openBlock(), createElementBlock("div", {
              class: "right-item",
              key: index
            }, [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("img", {
                    src: unref(metafileUrl)(right.cover)
                  }, null, 8, _hoisted_4)
                ]),
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("div", _hoisted_6, toDisplayString(right.projectName), 1),
                  createBaseVNode("div", _hoisted_7, [
                    createBaseVNode("div", _hoisted_8, [
                      createBaseVNode("span", _hoisted_9, toDisplayString(_ctx.$t("projecter")) + "\uFF1A", 1),
                      createBaseVNode("span", _hoisted_10, [
                        createBaseVNode("div", _hoisted_11, [
                          createVNode(_component_UserAvatar, {
                            bg: "gray",
                            class: "avatar",
                            metaId: right.metaid,
                            hasmask: false,
                            disabled: true
                          }, null, 8, ["metaId"])
                        ]),
                        createTextVNode(" " + toDisplayString(right.prject_team) + " ", 1),
                        right.nftCertificationType ? (openBlock(), createElementBlock("img", _hoisted_12)) : createCommentVNode("", true),
                        right.nftGenesisCertificationType ? (openBlock(), createElementBlock("img", _hoisted_13)) : createCommentVNode("", true)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_14, [
                      createBaseVNode("span", _hoisted_15, toDisplayString(_ctx.$t("nftCount")) + "\uFF1A", 1),
                      createBaseVNode("span", _hoisted_16, toDisplayString(right.nftQuantity), 1)
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_17, [
                  createBaseVNode("span", _hoisted_18, toDisplayString(_ctx.$t("status")) + ":", 1),
                  createBaseVNode("span", _hoisted_19, [
                    createBaseVNode("span", {
                      class: normalizeClass(["dot", { active: right.status }])
                    }, null, 2),
                    createTextVNode(" " + toDisplayString(right.status ? _ctx.$t("normoal") : _ctx.$t("unStar")), 1)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_20, [
                createBaseVNode("div", _hoisted_21, [
                  createBaseVNode("div", _hoisted_22, toDisplayString(_ctx.$t("historicalTotalDividend")), 1),
                  createBaseVNode("div", _hoisted_23, toDisplayString(right.totalDividend ? _ctx.$filters.bsv(right.totalDividend) : "--") + " BSV ", 1)
                ]),
                createBaseVNode("div", _hoisted_24, [
                  createBaseVNode("div", _hoisted_25, toDisplayString(_ctx.$t("lastDividend")), 1),
                  createBaseVNode("div", _hoisted_26, toDisplayString(right.lastDividend ? _ctx.$filters.bsv(right.lastDividend) : "--") + " BSV ", 1)
                ]),
                createBaseVNode("div", _hoisted_27, [
                  createBaseVNode("div", _hoisted_28, toDisplayString(_ctx.$t("lastDividendTime")), 1),
                  createBaseVNode("div", _hoisted_29, toDisplayString(right.lastDividendDate ? _ctx.$filters.dateTimeFormat(right.lastDividendDate) : "--"), 1)
                ]),
                createBaseVNode("div", _hoisted_30, [
                  createBaseVNode("div", _hoisted_31, toDisplayString(_ctx.$t("dividendCycle")), 1),
                  createBaseVNode("div", _hoisted_32, toDisplayString(right.dividendCycle), 1)
                ])
              ])
            ]);
          }), 128))
        ])
      ], 64);
    };
  }
});
var Right = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1504a1fe"]]);
export { Right as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmlnaHQuY2Y2ODY0NGUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
