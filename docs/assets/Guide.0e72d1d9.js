import { _ as _export_sfc, e as defineComponent, r as ref, N as ElButton, g as openBlock, A as createElementBlock, m as createCommentVNode, k as createBaseVNode, l as createVNode, j as withCtx, C as unref, q as pushScopeId, s as popScopeId, cw as createStaticVNode, J as createTextVNode, D as toDisplayString } from './index.3c02df72.js';

var _imports_0 = "/assets/akav9-4xo0e.d91ceccd.jpg";

var _imports_1 = "/assets/emb.91b095ba.png";

var _imports_2 = "/assets/app-img.2b462290.png";

var _imports_3 = "data:image/png;base64,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";

var Android = "/assets/android.f83e495a.svg";

var Guide_scss_vue_type_style_index_0_src_59444478_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-59444478"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "app-guide flex flex-align-center flex-pack-center" };
const _hoisted_2 = {
  key: 0,
  class: "wxtip"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", { src: _imports_0 }, null, -1));
const _hoisted_4 = { class: "operate" };
const _hoisted_5 = { class: "flex flex-align-center flex-pack-center app-guide-warp container" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "bg",
  src: _imports_1
}, null, -1));
const _hoisted_7 = { class: "flex1" };
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<div class="images" data-v-59444478><img class="img1" src="' + _imports_2 + '" data-v-59444478></div><div class="logo" data-v-59444478><img src="' + _imports_3 + '" data-v-59444478></div><div class="drsc" data-v-59444478>\u82E5\u559C\uFF5C\u5143\u7F51\u6700\u5927\u6570\u5B57\u85CF\u54C1\u5E02\u573A\u3002</div>', 3);
const _hoisted_11 = { class: "operate flex flex-align-center" };
const _hoisted_12 = { class: "warp flex flex-align-center" };
const _hoisted_13 = ["src"];
const _hoisted_14 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "cont" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "title" }, "\u4E0B\u8F7D\u82E5\u559CAPP"),
  /* @__PURE__ */ createBaseVNode("div", { class: "subtitle" }, "Android APK")
], -1));
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "title" }, "\u4F7F\u7528\u82E5\u559CH5\u5546\u57CE", -1));
const _hoisted_16 = [
  _hoisted_15
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    document.title = "\u82E5\u559C";
    const UA = window.navigator.userAgent.toLowerCase();
    const isWechat = !!(UA && /micromessenger/.test(UA));
    const isShowWechatModal = ref(false);
    function download() {
      if (isWechat)
        isShowWechatModal.value = true;
      else {
        window.location.href = "https://www.show.sv/app/ruoxi.apk";
      }
    }
    function toNos() {
      window.location.href = "https://nft.nos.art/";
    }
    return (_ctx, _cache) => {
      const _component_ElButton = ElButton;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createCommentVNode(" \u5FAE\u4FE1\u73AF\u5883\u5F15\u5BFC\u7528\u6237\u4F7F\u7528\u6D4F\u89C8\u5668\u6253\u5F00 "),
        isShowWechatModal.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          _hoisted_3,
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_ElButton, {
              size: "large",
              onClick: _cache[0] || (_cache[0] = ($event) => isShowWechatModal.value = false)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
              ]),
              _: 1
            })
          ])
        ])) : createCommentVNode("v-if", true),
        createBaseVNode("div", _hoisted_5, [
          _hoisted_6,
          createBaseVNode("div", _hoisted_7, [
            _hoisted_8,
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("a", {
                class: "flex1 flex flex-align-center flex-pack-center",
                onClick: download
              }, [
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("img", {
                    class: "icon",
                    src: unref(Android)
                  }, null, 8, _hoisted_13),
                  _hoisted_14
                ])
              ]),
              createBaseVNode("a", {
                class: "flex1 flex flex-align-center flex-pack-center",
                onClick: toNos
              }, _hoisted_16)
            ])
          ])
        ])
      ]);
    };
  }
});
var Guide = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-59444478"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/app/Guide.vue"]]);

export { Guide as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3VpZGUuMGU3MmQxZDkuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
