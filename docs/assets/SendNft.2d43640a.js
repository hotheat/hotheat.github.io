import { _ as _export_sfc, e as defineComponent, r as ref, v as reactive, u as useI18n, d as computed, w as watch, f as resolveComponent, g as openBlock, i as createBlock, j as withCtx, k as createBaseVNode, D as toDisplayString, A as createElementBlock, l as createVNode, C as unref, as as metafileUrl, J as createTextVNode, K as withModifiers, L as normalizeClass, bi as isRef, a0 as ElLoading, X as ElMessage, ck as getPayMailAddress, cl as getMetaIdByAddress, cm as GetUserInfoSimple, bw as ElInput, N as ElButton, ap as ElDialog, E as useStore } from './index.e6d8aff8.js';
import { E as ElImage } from './image-viewer.d1105775.js';

var _imports_0 = "/assets/ava_mask.351c6ae4.png";

var SendNft_scss_vue_type_style_index_0_src_3db8ba40_scoped_true_lang = '';

const _hoisted_1 = { class: "sendNftDialogTitle" };
const _hoisted_2 = { class: "sendNftWrap" };
const _hoisted_3 = {
  key: 0,
  class: "home"
};
const _hoisted_4 = { class: "ImgWrap flex" };
const _hoisted_5 = { class: "operate" };
const _hoisted_6 = {
  key: 1,
  class: "sendDetail"
};
const _hoisted_7 = { class: "top" };
const _hoisted_8 = { class: "left" };
const _hoisted_9 = { class: "right" };
const _hoisted_10 = { class: "nftName" };
const _hoisted_11 = { class: "issuerInfo" };
const _hoisted_12 = { class: "issuer" };
const _hoisted_13 = { class: "center" };
const _hoisted_14 = { class: "sender" };
const _hoisted_15 = { class: "receviceInfo" };
const _hoisted_16 = { class: "left" };
const _hoisted_17 = { class: "right" };
const _hoisted_18 = { class: "recevice" };
const _hoisted_19 = { class: "foot" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    visible: { type: Boolean, required: true, default: false },
    nft: { type: null, required: true }
  },
  emits: ["nftDialogClose", "removeNft"],
  setup(__props, { emit }) {
    const props = __props;
    const receviceAddress = ref("");
    const receiverInfo = reactive({
      val: null
    });
    const i18n = useI18n();
    const homePage = ref(true);
    const store = useStore();
    const getMetaIdLoaing = ref(false);
    const btnDiabled = computed(() => {
      if (receviceAddress.value) {
        return false;
      } else
        return true;
    });
    watch(() => props.visible, () => {
      if (props.visible) {
        homePage.value = true;
        receviceAddress.value = "";
      }
    });
    function closeDialog() {
      emit("nftDialogClose");
    }
    async function confrimSendNft() {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        customClass: "full-loading"
      });
      try {
        const res = await store.state.sdk.transferNFT({
          receiverAddress: receviceAddress.value,
          tokenIndex: props.nft.tokenIndex,
          codehash: props.nft.codehash,
          genesisId: props.nft.genesis,
          genesisTxid: props.nft.genesisTxId,
          checkOnly: true
        });
        if (res.code === 200) {
          loading.close();
          ElMessage.success(`${i18n.t("sendNfrSucc")}`);
          emit("removeNft");
          emit("nftDialogClose");
        } else {
          loading.close();
          ElMessage.error(`${i18n.t("sendNfrFail")}`);
        }
      } catch {
        loading.close();
      }
    }
    async function getNftReceiverInfo() {
      const paymaiReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      let isPaymail = paymaiReg.test(receviceAddress.value);
      let paymailToAddress;
      try {
        getMetaIdLoaing.value = true;
        if (isPaymail) {
          const address = await getPayMailAddress({
            Email: receviceAddress.value
          });
          if (address.code == 0) {
            paymailToAddress = address.data;
          }
        }
        const result = await getMetaIdByAddress(isPaymail ? paymailToAddress : receviceAddress.value);
        if (result.code == 0) {
          const res = await GetUserInfoSimple({
            metaId: result.data
          });
          if (res.code == 0) {
            receiverInfo.val = res.data;
            getMetaIdLoaing.value = false;
            homePage.value = false;
          } else {
            getMetaIdLoaing.value = false;
            homePage.value = false;
          }
        } else {
          getMetaIdLoaing.value = false;
          homePage.value = false;
        }
      } catch {
        getMetaIdLoaing.value = false;
        homePage.value = false;
      }
    }
    return (_ctx, _cache) => {
      const _component_ElImage = ElImage;
      const _component_ElInput = ElInput;
      const _component_ElButton = ElButton;
      const _component_UserAvatar = resolveComponent("UserAvatar");
      const _component_ElDialog = ElDialog;
      return openBlock(), createBlock(_component_ElDialog, {
        "custom-class": "sendNftDialog",
        modelValue: __props.visible,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(visible) ? visible.value = $event : null),
        onClose: closeDialog,
        center: "",
        "append-to-body": true,
        "close-on-click-modal": false
      }, {
        title: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("span", null, toDisplayString(homePage.value ? _ctx.$t("sendNftTitle") : _ctx.$t("senderNftConfrime")), 1)
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            homePage.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_ElImage, {
                  fit: "contain",
                  src: unref(metafileUrl)(__props.nft.cover),
                  "preview-src-list": [unref(metafileUrl)(__props.nft.cover)]
                }, null, 8, ["src", "preview-src-list"]),
                createBaseVNode("span", null, toDisplayString(__props.nft.name), 1)
              ]),
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_ElInput, {
                  type: "text",
                  class: "flex1",
                  modelValue: receviceAddress.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => receviceAddress.value = $event),
                  placeholder: _ctx.$t("receviceAddress")
                }, null, 8, ["modelValue", "placeholder"]),
                createVNode(_component_ElButton, {
                  loading: getMetaIdLoaing.value,
                  onClick: withModifiers(getNftReceiverInfo, ["stop"]),
                  disabled: unref(btnDiabled),
                  class: normalizeClass([unref(btnDiabled) ? "btnGray" : ""]),
                  size: "large"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("sendNft")), 1)
                  ]),
                  _: 1
                }, 8, ["loading", "onClick", "disabled", "class"])
              ])
            ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createVNode(_component_ElImage, {
                    fit: "contain",
                    src: unref(metafileUrl)(__props.nft.cover),
                    "preview-src-list": [unref(metafileUrl)(__props.nft.cover)]
                  }, null, 8, ["src", "preview-src-list"])
                ]),
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("span", _hoisted_10, toDisplayString(__props.nft.name), 1),
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(_component_UserAvatar, {
                      metaId: __props.nft.issueMetaId,
                      type: __props.nft.issueAvatarType
                    }, null, 8, ["metaId", "type"]),
                    createBaseVNode("div", _hoisted_12, [
                      createBaseVNode("span", null, toDisplayString(__props.nft.issueName), 1),
                      createBaseVNode("span", null, toDisplayString(_ctx.$t("issue")), 1)
                    ])
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("div", _hoisted_14, [
                  createBaseVNode("span", null, toDisplayString(_ctx.$t("sender")), 1),
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("div", _hoisted_16, [
                      createVNode(_component_UserAvatar, {
                        metaId: unref(receiverInfo).val?.metaId,
                        type: unref(receiverInfo).val?.avatarType
                      }, null, 8, ["metaId", "type"])
                    ]),
                    createBaseVNode("div", _hoisted_17, [
                      createBaseVNode("span", null, toDisplayString(unref(receiverInfo).val?.name), 1),
                      createBaseVNode("span", null, "MetaID:" + toDisplayString(unref(receiverInfo).val?.metaId?.slice(0, 6)), 1)
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_18, [
                  createBaseVNode("span", null, toDisplayString(_ctx.$t("receviceInfo")), 1),
                  createBaseVNode("span", null, toDisplayString(receviceAddress.value), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_19, [
                createVNode(_component_ElButton, {
                  onClick: withModifiers(confrimSendNft, ["stop"]),
                  size: "large"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("sendNftConfrim")), 1)
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ])
            ]))
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
var SendNft = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3db8ba40"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/common/SendNft.vue"]]);

export { SendNft as S, _imports_0 as _ };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VuZE5mdC4yZDQzNjQwYS5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
