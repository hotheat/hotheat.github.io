import { _ as _export_sfc, e as defineComponent, v as reactive, cY as GetRightList, f as resolveComponent, g as openBlock, A as createElementBlock, l as createVNode, k as createBaseVNode, F as Fragment, B as renderList, C as unref, as as metafileUrl, D as toDisplayString, J as createTextVNode, m as createCommentVNode, L as normalizeClass } from './index.e6d8aff8.js';
import { _ as _imports_0 } from './icon_cer_nft.95196f53.js';
import { I as InnerPageHeader } from './InnerPageHeader.58e89d3b.js';
import { C as CertIcon } from './icon_cer.5f0b2a62.js';
import './bannet_icon_ins.9e5a53b7.js';
import './icon_search.00d5970e.js';

var Right_scss_vue_type_style_index_0_src_1421cb5c_scoped_true_lang = '';

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
const _hoisted_12 = ["src"];
const _hoisted_13 = {
  key: 1,
  class: "cert-icon",
  src: _imports_0
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
      return new Promise(async (resolve) => {
        const res = await GetRightList();
        if (res && res.code === 0) {
          rights.length = 0;
          rights.push(...res.data);
        }
        resolve();
      });
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
                            type: "",
                            disabled: true
                          }, null, 8, ["metaId"])
                        ]),
                        createTextVNode(" " + toDisplayString(right.prject_team) + " ", 1),
                        right.nftCertificationType ? (openBlock(), createElementBlock("img", {
                          key: 0,
                          class: "cert-icon",
                          src: unref(CertIcon)
                        }, null, 8, _hoisted_12)) : createCommentVNode("v-if", true),
                        right.nftGenesisCertificationType ? (openBlock(), createElementBlock("img", _hoisted_13)) : createCommentVNode("v-if", true)
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
                ]),
                createCommentVNode(` <div class="data-item flex1">
          <div class="name">{{ $t('estimatedDividendIncome') }}</div>
          <div class="value">4,125.88 BSV</div>
        </div> `)
              ])
            ]);
          }), 128))
        ])
      ], 64);
    };
  }
});
var Right = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1421cb5c"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/Right.vue"]]);

export { Right as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmlnaHQuODdjNGQ3ZDYuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
