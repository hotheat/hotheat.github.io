import { _ as _export_sfc, e as defineComponent, t as useRouter, r as ref, u as useI18n, au as store, a as onMounted, d1 as getMyLegalAmount, at as Decimal, X as ElMessage, g as openBlock, A as createElementBlock, k as createBaseVNode, D as toDisplayString } from './index.2d61a762.js';

var balance_scss_vue_type_style_index_0_src_35bc1adc_scoped_true_lang = '';

const _hoisted_1 = { class: "legalBalanceWrap" };
const _hoisted_2 = { class: "right" };
const _hoisted_3 = { class: "header" };
const _hoisted_4 = { class: "balance" };
const _hoisted_5 = { class: "myLegalBalance" };
const _hoisted_6 = { class: "amount" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const router = useRouter();
    const legalAmount = ref(0);
    const i18n = useI18n();
    store.watch(() => store.state.userInfo, async (newVal) => {
      if (newVal.metaId) {
        getBalance();
      }
    });
    onMounted(() => {
      getBalance();
    });
    async function getBalance() {
      if (store.state.userInfo?.metaId) {
        try {
          const result = await getMyLegalAmount({
            currency: "CNY",
            metaid: store.state.userInfo.metaId
          });
          if (result.code == 0) {
            legalAmount.value = new Decimal(result.data.amount).toNumber();
          }
        } catch {
          return ElMessage.error(`${i18n.t("getBalanceError")}`);
        }
      }
    }
    function back() {
      router.go(-1);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("i", {
          class: "el-icon-back",
          onClick: back
        }),
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("span", null, toDisplayString(_ctx.$t("myBalance")), 1),
            createBaseVNode("span", null, toDisplayString(_ctx.$t("Withdrawal")), 1)
          ]),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("span", _hoisted_5, toDisplayString(_ctx.$t("myBalance")) + "(CNY)", 1),
            createBaseVNode("span", _hoisted_6, "\xA5\xA0" + toDisplayString(legalAmount.value ? legalAmount.value * 0.01 : "--"), 1)
          ])
        ])
      ]);
    };
  }
});
var balance = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-35bc1adc"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/legal/balance.vue"]]);

export { balance as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFsYW5jZS4zMDQ1MTlhMi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
