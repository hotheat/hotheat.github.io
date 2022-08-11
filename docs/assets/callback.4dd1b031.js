import { _ as _export_sfc, e as defineComponent, r as ref, a as onMounted, bo as onUnmounted, g as openBlock, A as createElementBlock, k as createBaseVNode, C as unref, D as toDisplayString } from './index.e6d8aff8.js';
import { s as sandPayTitleIcon } from './sandPay_title.2edd4dc3.js';

var callback_scss_vue_type_style_index_0_src_3e9b7e52_scoped_true_lang = '';

const _hoisted_1 = { class: "closeWrap" };
const _hoisted_2 = { class: "top" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "foot" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const skipToDetail = ref(null);
    const overTime = ref(5);
    onMounted(() => {
      skipToDetail.value = setInterval(() => {
        overTime.value--;
        if (overTime.value <= 0) {
          clearInterval(skipToDetail.value);
          window.parent.postMessage("success", "*");
        }
      }, 1e3);
    });
    function sendMsg() {
      window.parent.postMessage("success", "*");
    }
    onUnmounted(() => {
      clearInterval(skipToDetail.value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("img", {
            src: unref(sandPayTitleIcon),
            alt: ""
          }, null, 8, _hoisted_3),
          createBaseVNode("span", null, toDisplayString(_ctx.$t("sandPaySuccess")), 1)
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("button", { onClick: sendMsg }, toDisplayString(_ctx.$t("confrimSkip")), 1),
          createBaseVNode("span", null, toDisplayString(_ctx.$t("skipDetail")) + toDisplayString(overTime.value) + toDisplayString(_ctx.$t("overTimeClose")), 1)
        ])
      ]);
    };
  }
});
var callback = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3e9b7e52"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/iframePage/callback.vue"]]);

export { callback as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsbGJhY2suNGRkMWIwMzEuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
