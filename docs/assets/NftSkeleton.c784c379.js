var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
import { _ as _export_sfc, d as defineComponent, u as useI18n, e as ref, O as resolveComponent, o as openBlock, l as createBlock, w as withCtx, c as createElementBlock, h as createVNode, P as createTextVNode, t as toDisplayString, F as Fragment, i as renderList, a as createBaseVNode, Q as isRef, g as unref, R as ElDialog, S as ElMessage, T as checkSdkStatus, U as store, V as useRouter, W as useRoute, L as computed, X as dayjs, Y as metafileUrl, j as createCommentVNode, Z as Decimal, x as normalizeClass, $ as withModifiers, a0 as _imports_0, p as pushScopeId, b as popScopeId, a1 as getMyNftEligibility, a2 as ElLoading, a3 as ElMessageBox, k as useStore, a4 as ElSkeletonItem, a5 as renderSlot, a6 as ElSkeleton } from "./index.1063289c.js";
/* empty css                           */import { _ as _imports_0$1 } from "./icon_cer.d2259267.js";
import { _ as _imports_1 } from "./icon_cer_nft.f25ddb49.js";
/* empty css                     */import { N as NftOffSale } from "./offSale.8a5b3e0c.js";
import { N as NFTDetail } from "./nftDetail.d498c8f0.js";
var _imports_3 = "/assets/icon_time.ef87ebfc.svg";
var _imports_4$1 = "/assets/card_icon_fire.96189a71.svg";
var _imports_4 = "/assets/card_icon_ins.cf6eab01.svg";
var DonateModal_scss_vue_type_style_index_0_src_5767546c_scoped_true_lang = "";
const _hoisted_1$2 = {
  key: 0,
  class: "input-amount-warp flex flex-align-center"
};
const _hoisted_2$2 = /* @__PURE__ */ createTextVNode("Satoshis");
const _hoisted_3$2 = {
  key: 1,
  class: "reward-list"
};
const _hoisted_4$2 = ["onClick"];
const _hoisted_5$2 = { class: "name" };
const _hoisted_6$1 = { class: "unit" };
const _hoisted_7$1 = { class: "toogle" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    visible: { type: Boolean, default: false },
    targetId: null,
    address: null,
    metaId: null
  },
  emits: ["success", "change"],
  setup(__props, { emit }) {
    const props = __props;
    const rewardAmounts = [
      { satoshis: 1e4, name: "10K", unit: "Satoshis" },
      { satoshis: 5e4, name: "50K", unit: "Satoshis" },
      { satoshis: 2e5, name: "200K", unit: "Satoshis" },
      { satoshis: 1e6, name: "0.01", unit: "BSV" },
      { satoshis: 5e6, name: "0.05", unit: "BSV" },
      { satoshis: 2e7, name: "0.2", unit: "BSV" }
    ];
    const i18n = useI18n();
    const isInputAmount = ref(false);
    const amount = ref();
    function confirm() {
      if (amount.value === "") {
        ElMessage.error(i18n.t("donateInputAmountPlac"));
        return;
      }
      donate(amount.value);
    }
    function donate(satoshis) {
      return __async(this, null, function* () {
        yield checkSdkStatus();
        try {
          if (!props.address || !props.targetId)
            return;
          const params = {
            receiveAddress: props.address,
            receiveMetaId: props.metaId,
            targetId: props.targetId,
            amount: satoshis
          };
          const res = yield store.state.sdk.addDonateProtocol(params);
          if (res.code === 200) {
            emit("success", __spreadProps(__spreadValues({}, params), {
              txId: res.data.txId
            }));
          }
        } catch (error) {
          if (error)
            ElMessage.error(JSON.stringify(error));
        }
      });
    }
    function beforeClose(done) {
      emit("change", false);
      done();
    }
    return (_ctx, _cache) => {
      const _component_ElButton = resolveComponent("ElButton");
      const _component_ElInputNumber = resolveComponent("ElInputNumber");
      return openBlock(), createBlock(unref(ElDialog), {
        modelValue: __props.visible,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(visible) ? visible.value = $event : null),
        title: _ctx.$t("donate"),
        "custom-class": "",
        "before-close": beforeClose
      }, {
        default: withCtx(() => [
          isInputAmount.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
            createVNode(_component_ElButton, null, {
              default: withCtx(() => [
                _hoisted_2$2
              ]),
              _: 1
            }),
            createVNode(_component_ElInputNumber, {
              modelValue: amount.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => amount.value = $event),
              type: "number",
              min: 1e3,
              placeholder: _ctx.$t("donateInputAmountPlac"),
              class: "flex1"
            }, null, 8, ["modelValue", "placeholder"]),
            createVNode(_component_ElButton, {
              type: "primary",
              onClick: confirm
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("confirm")), 1)
              ]),
              _: 1
            })
          ])) : (openBlock(), createElementBlock("div", _hoisted_3$2, [
            (openBlock(), createElementBlock(Fragment, null, renderList(rewardAmounts, (item) => {
              return createBaseVNode("a", {
                class: "reward-item",
                key: item.satoshis,
                onClick: ($event) => donate(item.satoshis)
              }, [
                createBaseVNode("div", _hoisted_5$2, toDisplayString(item.name), 1),
                createBaseVNode("div", _hoisted_6$1, toDisplayString(item.unit), 1)
              ], 8, _hoisted_4$2);
            }), 64))
          ])),
          createBaseVNode("div", _hoisted_7$1, [
            createBaseVNode("a", {
              onClick: _cache[1] || (_cache[1] = ($event) => isInputAmount.value = !isInputAmount.value)
            }, toDisplayString(isInputAmount.value ? _ctx.$t("returnChooseAmount") : _ctx.$t("otherAmount")), 1)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
var DonateModalVue = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5767546c"]]);
var NftItem_scss_vue_type_style_index_0_src_262a7f62_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-262a7f62"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "cover" };
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = { class: "cont" };
const _hoisted_4$1 = ["title"];
const _hoisted_5$1 = { class: "content" };
const _hoisted_6 = { class: "top-msg flex flex-align-end" };
const _hoisted_7 = { class: "flex1" };
const _hoisted_8 = {
  key: 0,
  class: "price flex flex-align-end"
};
const _hoisted_9 = { class: "label" };
const _hoisted_10 = ["title"];
const _hoisted_11 = /* @__PURE__ */ createTextVNode(" BSV ");
const _hoisted_12 = {
  key: 0,
  class: "msg flex1"
};
const _hoisted_13 = { class: "author flex flex-align-center" };
const _hoisted_14 = {
  key: 0,
  src: _imports_0,
  class: "mask"
};
const _hoisted_15 = ["src", "alt"];
const _hoisted_16 = { class: "username" };
const _hoisted_17 = {
  key: 1,
  class: "cert-icon",
  src: _imports_0$1
};
const _hoisted_18 = {
  key: 2,
  class: "cert-icon",
  src: _imports_1
};
const _hoisted_19 = { class: "operate-list flex flex-align-center" };
const _hoisted_20 = ["onClick"];
const _hoisted_21 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  t: "1641956579473",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2145",
  width: "200",
  height: "200"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M933.43288889 350.09422222H657.18044445c14.10844445-41.07377778 19.11466667-83.85422222 21.9591111-125.15555555l0.11377778-1.70666667c3.41333333-49.26577778 8.192-116.84977778-33.67822222-164.97777778-19.22844445-22.07288889-52.33777778-38.00177778-84.42311111-40.61866667-27.87555555-2.27555555-53.93066667 7.96444445-73.61422222 28.78577778-30.37866667 32.19911111-36.97777778 73.84177778-42.78044445 110.47822222-2.16177778 13.42577778-4.20977778 26.16888889-7.168 37.20533334-12.288 45.056-31.40266667 81.00977778-56.77511111 106.95111111-29.12711111 29.696-68.94933333 48.35555555-104.67555555 49.152h-183.18222222c-38.79822222 0-70.31466667 31.51644445-70.31466667 70.31466667v472.51911111c0 38.79822222 31.51644445 70.31466667 70.31466667 70.31466667H835.12888889c37.31911111 0 67.92533333-29.12711111 70.20088889-65.87733334l98.304-473.20177778v-3.75466666c0.11377778-38.912-31.40266667-70.42844445-70.20088889-70.42844445z m-837.85955556 72.81777778h95.80088889v467.51288889H95.57333333V422.912z m737.16622222 466.26133333v1.25155556H263.05422222V422.912h21.16266667c2.84444445 0 5.46133333-0.34133333 8.07822222-0.91022222 50.40355555-5.12 101.83111111-30.49244445 140.62933334-70.20088889 34.13333333-34.816 59.27822222-81.46488889 74.97955555-138.69511111 4.096-14.90488889 6.48533333-30.15111111 8.87466667-45.056 4.55111111-28.78577778 8.87466667-56.09244445 23.89333333-71.90755556 5.68888889-6.03022222 11.15022222-6.37155555 14.67733333-6.144 13.08444445 1.024 28.55822222 7.96444445 35.38488889 15.81511111 22.07288889 25.37244445 18.65955555 73.50044445 16.04266667 112.18488889l-0.11377778 1.70666667c-3.52711111 51.08622222-10.58133333 104.33422222-37.31911111 147.456l0.11377778 0.11377778c-3.41333333 5.57511111-5.46133333 12.06044445-5.46133333 19.11466666 0 20.13866667 16.27022222 36.40888889 36.40888888 36.40888889h329.38666667l-97.05244445 466.37511111z",
    "p-id": "2146"
  })
], -1));
const _hoisted_22 = { class: "num" };
const _hoisted_23 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  t: "1641956804197",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "4896",
  width: "200",
  height: "200"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M512 128c212.064 0 384 171.936 384 384s-171.936 384-384 384S128 724.064 128 512 299.936 128 512 128z m0 64C335.264 192 192 335.264 192 512s143.264 320 320 320 320-143.264 320-320S688.736 192 512 192z m38.88 120c43.072 0 77.056 8.448 101.792 25.568 25.44 17.6 38.336 42.496 38.336 73.888 0 36.128-19.104 63.296-56.128 80.992 8.64 3.2 16.256 6.624 22.88 10.24 35.904 19.136 54.24 48.512 54.24 87.136 0 37.44-15.904 67.616-47.232 89.76-30.688 21.664-71.36 32.416-121.92 32.416-15.328 0-34.144-0.704-56.416-2.112l-28.352-1.856a746.496 746.496 0 0 0-42.4-1.728c-10.816 0-20.992 0.576-30.528 1.664l-38.784 4.032c-21.632-0.48-34.368-10.272-34.368-28.48 0-16.608 10.048-26.144 27.136-26.144 17.856 1.92 27.712 2.848 29.632 2.848 16 0 23.488-10.016 23.488-34.048v-228.352c0-24.416-7.52-34.592-23.488-34.592-2.176 0-27.104 2.816-29.632 2.816-17.088 0-27.136-9.536-27.136-26.176 0-18.4 13.536-27.872 36.384-27.872l39.36 4.032c4.544 0.64 15.936 1.152 34.112 1.664 15.392 0 37.44-1.152 66.048-3.392a809.024 809.024 0 0 1 62.976-2.304z m-12.32 211.424h-51.264c-19.168 0-28.992 3.488-30.72 8.32-1.28 3.52-2.016 10.08-2.016 19.456v63.04c0 22.08 3.84 34.88 9.824 38.688 7.264 4.544 31.168 7.296 69.856 7.296 73.024 0 107.424-23.68 107.424-71.552 0-43.52-32.928-65.28-103.104-65.28z m0-160.192l-15.424 0.128c-31.552 0.544-51.456 2.816-58.432 6.4-6.368 3.2-10.144 13.12-10.144 30.912v35.2c0 18.144 1.76 29.376 4.032 32.128 1.824 2.208 10.88 4.16 26.24 4.16h34.56c69.024 0 101.28-19.264 101.28-57.28 0-34.496-25.92-51.648-82.112-51.648z",
    "p-id": "4897"
  })
], -1));
const _hoisted_24 = { class: "num" };
const _hoisted_25 = {
  key: 0,
  class: "operate flex flex-align-center"
};
const _hoisted_26 = { class: "timeleft flex1" };
const _hoisted_27 = {
  key: 1,
  class: "flex flex-align-center"
};
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", { src: _imports_3 }, null, -1));
const _hoisted_29 = {
  key: 0,
  class: "btn btn-min btn-plain"
};
const _hoisted_30 = ["onClick"];
const _hoisted_31 = ["onClick"];
const _hoisted_32 = {
  key: 0,
  class: "recommend-card flex flex-v"
};
const _hoisted_33 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("img", { src: _imports_4$1 })
], -1));
const _hoisted_34 = { class: "title" };
const _hoisted_35 = { class: "drsc flex1" };
const _hoisted_36 = { class: "more" };
const _hoisted_37 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", { src: _imports_4 }, null, -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    item: null,
    lazy: null,
    isRecommendCard: { type: Boolean },
    isHideAuthor: { type: Boolean },
    isSelf: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const store2 = useStore();
    const router = useRouter();
    useRoute();
    const i18n = useI18n();
    const now = new Date().getTime();
    const day = computed(() => {
      if (now > props.item.deadlineTime)
        return 0;
      console.log(dayjs(now).diff(dayjs(props.item.deadlineTime), "day"));
      return Math.abs(dayjs(now).diff(dayjs(props.item.deadlineTime), "day"));
    });
    const hour = computed(() => {
      if (now > props.item.deadlineTime)
        return 0;
      const day2 = dayjs(now).diff(dayjs(props.item.deadlineTime), "day");
      return Math.abs(dayjs(now).diff(dayjs(props.item.deadlineTime), "hour") - day2 * 24);
    });
    const overTime = computed(() => props.item.deadlineTime && props.item.deadlineTime <= now);
    const isShowDonateModal = ref(false);
    function toDetail() {
      if (props.item.genesis) {
        if (props.item.hasCount && props.item.hasCount > 1) {
          router.push({
            name: "series",
            params: { genesisId: props.item.genesis, codehash: props.item.codehash },
            query: { name: props.item.name }
          });
        } else {
          router.push({
            name: "detail",
            params: {
              tokenIndex: props.item.tokenIndex,
              genesisId: props.item.genesis,
              codehash: props.item.codehash
            }
          });
        }
      }
    }
    function toSale() {
      return __async(this, null, function* () {
        var _a;
        const result = yield getMyNftEligibility(props.item.metaId);
        if (!result)
          return;
        if ((_a = props.item) == null ? void 0 : _a.tokenId) {
          router.push({
            name: "sale",
            params: {
              tokenIndex: props.item.tokenIndex,
              genesisId: props.item.genesis,
              codehash: props.item.codehash
            }
          });
        }
      });
    }
    function offSale() {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        customClass: "full-loading"
      });
      ElMessageBox.confirm(`${i18n.t("offsaleConfirm")} ${props.item.productName} ?`, i18n.t("niceWarning"), {
        confirmButtonText: i18n.t("confirm"),
        cancelButtonText: i18n.t("cancel"),
        closeOnClickModal: false
      }).then(() => __async(this, null, function* () {
        const nft = yield NFTDetail(props.item.genesis, props.item.codehash, props.item.tokenIndex).catch(() => loading.close());
        if (nft) {
          NftOffSale(nft, loading).then(() => {
            props.item.putAway = false;
            loading.close();
          }).catch(() => {
            loading.close();
          });
        }
      })).catch(() => loading.close());
    }
    function donateSuccess(params) {
      ElMessage.success(i18n.t("donateSuccess"));
      props.item.nftHasDonate = true;
      props.item.nftDonateCount += 1e3;
      isShowDonateModal.value = false;
    }
    function payLike() {
      return __async(this, null, function* () {
        yield checkSdkStatus();
        const res = yield store2.state.sdk.addPayLikeProtocol({
          receiveAddress: props.item.nftOwnerAddress,
          txId: props.item.nftIssueMetaTxId
        });
        if (res.code === 200) {
          ElMessage.success(i18n.t("payLikeSuccess"));
          props.item.nftLikeCount++;
          props.item.nftHasLike = true;
        }
      });
    }
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const _component_ElImage = resolveComponent("ElImage");
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("a", {
        onClick: _cache[2] || (_cache[2] = ($event) => toDetail()),
        class: "nft-item",
        key: (_a = __props.item) == null ? void 0 : _a.tokenId
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createVNode(_component_ElImage, {
            class: "cover-image",
            lazy: __props.lazy,
            src: unref(metafileUrl)(__props.item.coverUrl),
            fit: "contain"
          }, null, 8, ["lazy", "src"]),
          __props.item.classify && __props.item.classify.length > 0 ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(_ctx.$t(__props.item.classify[0])), 1)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_3$1, [
          createBaseVNode("div", {
            class: "name",
            title: __props.item.name
          }, toDisplayString((_b = __props.item) == null ? void 0 : _b.name), 9, _hoisted_4$1),
          createBaseVNode("div", _hoisted_5$1, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("span", _hoisted_7, toDisplayString(__props.item.classify && __props.item.classify.length > 0 ? _ctx.$t(__props.item.classify[0]) : ""), 1),
              __props.item.amount || props.isRecommendCard ? (openBlock(), createElementBlock("div", _hoisted_8, [
                createBaseVNode("div", _hoisted_9, toDisplayString(_ctx.$t("price")), 1),
                createBaseVNode("div", {
                  class: "aount",
                  title: new unref(Decimal)((_c = __props.item) == null ? void 0 : _c.amount).div(__pow(10, 8)).toString() + " BSV"
                }, [
                  createBaseVNode("span", null, toDisplayString(new unref(Decimal)((_d = __props.item) == null ? void 0 : _d.amount).div(__pow(10, 8)).toString()), 1),
                  _hoisted_11
                ], 8, _hoisted_10)
              ])) : createCommentVNode("", true)
            ]),
            !__props.isHideAuthor ? (openBlock(), createElementBlock("div", _hoisted_12, [
              createBaseVNode("div", _hoisted_13, [
                __props.item.issueUserAvatarType === "nft-metabot" ? (openBlock(), createElementBlock("img", _hoisted_14)) : createCommentVNode("", true),
                createBaseVNode("img", {
                  class: normalizeClass(["avatar", {
                    hasmask: __props.item.avatarType === "nft-metabot"
                  }]),
                  src: _ctx.$filters.avatar((_e = __props.item) == null ? void 0 : _e.metaId),
                  alt: (_f = __props.item) == null ? void 0 : _f.foundryName
                }, null, 10, _hoisted_15),
                createBaseVNode("span", _hoisted_16, toDisplayString((_g = __props.item) == null ? void 0 : _g.foundryName), 1),
                __props.item.nftCertificationType ? (openBlock(), createElementBlock("img", _hoisted_17)) : createCommentVNode("", true),
                __props.item.nftGenesisCertificationType ? (openBlock(), createElementBlock("img", _hoisted_18)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_19, [
                createBaseVNode("div", {
                  class: normalizeClass(["item flex1 flex flex-align-center flex-pack-center", { active: __props.item.nftHasLike }]),
                  onClick: withModifiers(payLike, ["stop"])
                }, [
                  _hoisted_21,
                  createBaseVNode("span", _hoisted_22, toDisplayString(__props.item.nftLikeCount), 1)
                ], 10, _hoisted_20),
                createBaseVNode("div", {
                  class: normalizeClass(["item flex1 flex flex-align-center flex-pack-center", { active: __props.item.nftHasDonate }]),
                  onClick: _cache[0] || (_cache[0] = withModifiers(($event) => isShowDonateModal.value = true, ["stop"]))
                }, [
                  _hoisted_23,
                  createBaseVNode("span", _hoisted_24, toDisplayString(__props.item.nftDonateValue), 1)
                ], 2)
              ])
            ])) : createCommentVNode("", true)
          ]),
          __props.isSelf ? (openBlock(), createElementBlock("div", _hoisted_25, [
            createBaseVNode("div", _hoisted_26, [
              __props.item.hasCount && __props.item.hasCount > 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(_ctx.$t("series")) + " " + toDisplayString(__props.item.hasCount) + "/" + toDisplayString(__props.item.total), 1)
              ], 64)) : __props.item.putAway ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                unref(overTime) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString(_ctx.$t("overTime")), 1)
                ], 64)) : (openBlock(), createElementBlock("div", _hoisted_27, [
                  _hoisted_28,
                  createBaseVNode("span", null, toDisplayString(unref(day)) + toDisplayString(_ctx.$t("day")) + toDisplayString(unref(hour)) + toDisplayString(_ctx.$t("hour")), 1)
                ]))
              ], 64)) : createCommentVNode("", true)
            ]),
            __props.item.hasCount && __props.item.hasCount > 1 ? (openBlock(), createElementBlock("a", _hoisted_29, toDisplayString(_ctx.$t("seeAll")), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              ((_h = __props.item) == null ? void 0 : _h.putAway) ? (openBlock(), createElementBlock("a", {
                key: 0,
                class: "btn btn-min btn-plain",
                onClick: withModifiers(offSale, ["stop"])
              }, toDisplayString(_ctx.$t("offsale")), 9, _hoisted_30)) : (openBlock(), createElementBlock("a", {
                key: 1,
                class: "btn btn-min",
                onClick: withModifiers(toSale, ["stop"])
              }, toDisplayString(_ctx.$t("sale")), 9, _hoisted_31))
            ], 64))
          ])) : createCommentVNode("", true)
        ]),
        props.isRecommendCard ? (openBlock(), createElementBlock("div", _hoisted_32, [
          _hoisted_33,
          createBaseVNode("div", _hoisted_34, toDisplayString(_ctx.$t("recommentprod")), 1),
          createBaseVNode("div", _hoisted_35, toDisplayString(_ctx.$t("recommenttext")), 1),
          createBaseVNode("div", _hoisted_36, [
            createVNode(_component_router_link, { to: { name: "recommned" } }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.$t("getmore")) + " ", 1),
                _hoisted_37
              ]),
              _: 1
            })
          ])
        ])) : createCommentVNode("", true),
        createVNode(DonateModalVue, {
          visible: isShowDonateModal.value,
          "meta-id": __props.item.nftOwnerMetaId,
          address: __props.item.nftOwnerAddress,
          "target-id": __props.item.nftIssueMetaTxId,
          onChange: _cache[1] || (_cache[1] = (val) => isShowDonateModal.value = val),
          onSuccess: donateSuccess
        }, null, 8, ["visible", "meta-id", "address", "target-id"])
      ]);
    };
  }
});
var NftItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-262a7f62"]]);
var NftSkeleton_scss_vue_type_style_index_0_src_a4e7e728_scoped_true_lang = "";
const _hoisted_1 = {
  key: 1,
  class: "nft-item"
};
const _hoisted_2 = { class: "cover" };
const _hoisted_3 = { class: "cont" };
const _hoisted_4 = { class: "center" };
const _hoisted_5 = { class: "bottom" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    loading: { type: Boolean },
    count: null,
    isSelf: { type: Boolean },
    isReCommend: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElSkeleton), {
        loading: __props.loading,
        animated: "",
        count: __props.count
      }, {
        template: withCtx((slotProps) => [
          slotProps.key === 1 && props.isReCommend ? (openBlock(), createBlock(NftItem, {
            key: 0,
            isRecommendCard: true,
            item: {
              name: "recommend",
              amount: 0,
              foundryName: "",
              classify: "",
              tokenId: "",
              coverUrl: "",
              metaId: ""
            }
          })) : (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(unref(ElSkeletonItem), {
                class: "cover-image flex flex-align-center flex-pack-center",
                variant: "image"
              })
            ]),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", null, [
                createVNode(unref(ElSkeletonItem), {
                  class: "title",
                  variant: "text",
                  style: { "width": "75%", "background": "#F2F4F7" }
                })
              ]),
              createBaseVNode("div", _hoisted_4, [
                createVNode(unref(ElSkeletonItem), {
                  variant: "text",
                  style: { "width": "40%" }
                })
              ]),
              createBaseVNode("div", _hoisted_5, [
                createVNode(unref(ElSkeletonItem), {
                  variant: "text",
                  style: { "width": "27%" }
                })
              ])
            ])
          ]))
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _: 3
      }, 8, ["loading", "count"]);
    };
  }
});
var NftSkeleton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a4e7e728"]]);
export { DonateModalVue as D, NftItem as N, _imports_4 as _, NftSkeleton as a };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmZ0U2tlbGV0b24uYzc4NGMzNzkuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
