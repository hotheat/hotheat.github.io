import { _ as _export_sfc, e as defineComponent, t as useRouter, aq as useRoute, u as useI18n, r as ref, v as reactive, w as watch, n as nextTick, aR as converterPrice, a as onMounted, d as computed, bk as dayjs, f as resolveComponent, g as openBlock, A as createElementBlock, k as createBaseVNode, l as createVNode, C as unref, as as metafileUrl, D as toDisplayString, m as createCommentVNode, L as normalizeClass, F as Fragment, J as createTextVNode, K as withModifiers, j as withCtx, E as useStore, bD as getMyNftEligibility, a0 as ElLoading, ao as ElMessageBox, i as createBlock, p as renderSlot } from './index.f03006d5.js';
import { E as ElSkeletonItem, a as ElSkeleton } from './skeleton.4c62fb88.js';
import { E as ElImage } from './image-viewer.1c165fb3.js';
import { S as SendNft, _ as _imports_0 } from './SendNft.9ca5fa2f.js';
import { _ as _imports_0$1 } from './icon_cer_nft.95196f53.js';
import { N as NftOffSale } from './offSale.97e1f547.js';
import { N as NFTDetail } from './nftDetail.28374e41.js';
import { N as NFTCover } from './Cover.bf0d133a.js';
import { C as CertIcon } from './icon_cer.5f0b2a62.js';
import { C as CardIcon } from './card_icon_ins.9e46280c.js';

var TimeIcon = "/assets/icon_time.ef87ebfc.svg";

var FireIcon = "/assets/card_icon_fire.96189a71.svg";

var NftItem_scss_vue_type_style_index_0_src_5091aa4f_scoped_true_lang = '';

const _hoisted_1$1 = { class: "cover" };
const _hoisted_2$1 = { key: 0 };
const _hoisted_3$1 = { class: "cont" };
const _hoisted_4$1 = ["title"];
const _hoisted_5$1 = { class: "content flex" };
const _hoisted_6 = { class: "msg flex1" };
const _hoisted_7 = {
  key: 0,
  class: "price"
};
const _hoisted_8 = { class: "label" };
const _hoisted_9 = { class: "aount" };
const _hoisted_10 = {
  key: 1,
  class: "author flex flex-align-center"
};
const _hoisted_11 = {
  key: 0,
  src: _imports_0,
  class: "mask"
};
const _hoisted_12 = ["src", "alt"];
const _hoisted_13 = { class: "username" };
const _hoisted_14 = ["src"];
const _hoisted_15 = {
  key: 2,
  class: "cert-icon",
  src: _imports_0$1
};
const _hoisted_16 = {
  key: 0,
  class: "operate flex flex-align-center"
};
const _hoisted_17 = { class: "timeleft flex1" };
const _hoisted_18 = {
  key: 1,
  class: "flex flex-align-center"
};
const _hoisted_19 = ["src"];
const _hoisted_20 = {
  key: 0,
  class: "btn btn-min btn-plain"
};
const _hoisted_21 = ["onClick"];
const _hoisted_22 = {
  key: 1,
  class: "seriesBtn"
};
const _hoisted_23 = ["onClick"];
const _hoisted_24 = {
  key: 0,
  class: "recommend-card flex flex-v"
};
const _hoisted_25 = { class: "icon" };
const _hoisted_26 = ["src"];
const _hoisted_27 = { class: "title" };
const _hoisted_28 = { class: "drsc flex1" };
const _hoisted_29 = { class: "more" };
const _hoisted_30 = ["src"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    item: { type: null, required: true },
    isRecommendCard: { type: Boolean, required: false },
    isHideAuthor: { type: Boolean, required: false },
    isSelf: { type: Boolean, required: false }
  },
  emits: ["remove"],
  setup(__props, { emit }) {
    const props = __props;
    const store = useStore();
    const router = useRouter();
    useRoute();
    const i18n = useI18n();
    const now = new Date().getTime();
    const price = ref("0");
    const isOpenSendNft = ref(false);
    const nft = reactive({
      val: null
    });
    watch(() => store.state.currentPrice, (newVal) => {
      if (newVal) {
        nextTick(() => {
          price.value = converterPrice(props.item?.amount);
        });
      }
    }, { immediate: true });
    onMounted(() => {
      let obj = {
        classify: props.item.classify[0],
        cover: props.item.nftIcon,
        issueMetaId: props.item.nftIssueMetaId,
        issueName: props.item.nftIssuer,
        issueAvatarType: props.item.nftIssueAvatarType,
        status: 1,
        genesis: props.item.nftGenesis,
        codehash: props.item.nftCodehash,
        genesisTxId: props.item.nftGenesisTxId,
        tokenIndex: props.item.nftTokenIndex,
        name: props.item.nftName,
        backCover: props.item.nftBackIcon ? props.item.nftBackIcon : void 0,
        isCompound: props.item.nftHasCompound,
        isLegal: false,
        ownerMetaId: props.item.nftOwnerMetaId,
        ownerName: props.item.nftOwnerName,
        ownerAvatarType: props.item.nftOwnerAvatarType
      };
      nft.val = obj;
      console.log("22222223123123", nft.val);
    });
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
    async function toSale() {
      const result = await getMyNftEligibility(props.item.metaId);
      if (!result)
        return;
      if (props.item?.tokenId) {
        router.push({
          name: "sale",
          params: {
            tokenIndex: props.item.tokenIndex,
            genesisId: props.item.genesis,
            codehash: props.item.codehash
          }
        });
      }
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
      }).then(async () => {
        const nft2 = await NFTDetail(props.item.genesis, props.item.codehash, props.item.tokenIndex).catch(() => loading.close());
        if (nft2) {
          NftOffSale(nft2, loading).then(() => {
            props.item.putAway = false;
            loading.close();
          }).catch(() => {
            loading.close();
          });
        }
      }).catch(() => loading.close());
    }
    function removeNft() {
      emit("remove", props.item);
    }
    return (_ctx, _cache) => {
      const _component_ElImage = ElImage;
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createElementBlock("a", {
          onClick: _cache[1] || (_cache[1] = ($event) => toDetail()),
          class: "nft-item",
          key: __props.item?.tokenId
        }, [
          createBaseVNode("div", _hoisted_1$1, [
            createVNode(NFTCover, {
              cover: [__props.item.coverUrl, __props.item.nftBackIcon ? __props.item.nftBackIcon : void 0],
              "is-remint": __props.item.nftHasCompound
            }, null, 8, ["cover", "is-remint"]),
            createVNode(_component_ElImage, {
              class: "cover-image",
              lazy: true,
              src: unref(metafileUrl)(__props.item.coverUrl),
              fit: "contain"
            }, null, 8, ["src"]),
            __props.item.classify && __props.item.classify.length > 0 ? (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(_ctx.$t(__props.item.classify[0])), 1)) : createCommentVNode("v-if", true)
          ]),
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("div", {
              class: "name",
              title: __props.item.name
            }, toDisplayString(__props.item?.name), 9, _hoisted_4$1),
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("div", _hoisted_6, [
                __props.item.amount || props.isRecommendCard ? (openBlock(), createElementBlock("div", _hoisted_7, [
                  createBaseVNode("div", _hoisted_8, toDisplayString(_ctx.$t("price")), 1),
                  createBaseVNode("div", _hoisted_9, toDisplayString(price.value), 1)
                ])) : createCommentVNode("v-if", true),
                !__props.isHideAuthor ? (openBlock(), createElementBlock("div", _hoisted_10, [
                  __props.item.issueUserAvatarType === "nft-metabot" ? (openBlock(), createElementBlock("img", _hoisted_11)) : createCommentVNode("v-if", true),
                  createBaseVNode("img", {
                    class: normalizeClass(["avatar", {
                      hasmask: __props.item.avatarType === "nft-metabot"
                    }]),
                    src: _ctx.$filters.avatar(__props.item?.metaId),
                    alt: __props.item?.foundryName
                  }, null, 10, _hoisted_12),
                  createBaseVNode("span", _hoisted_13, toDisplayString(__props.item?.foundryName), 1),
                  __props.item.nftCertificationType ? (openBlock(), createElementBlock("img", {
                    key: 1,
                    class: "cert-icon",
                    src: unref(CertIcon)
                  }, null, 8, _hoisted_14)) : createCommentVNode("v-if", true),
                  __props.item.nftGenesisCertificationType ? (openBlock(), createElementBlock("img", _hoisted_15)) : createCommentVNode("v-if", true)
                ])) : createCommentVNode("v-if", true)
              ])
            ]),
            __props.isSelf ? (openBlock(), createElementBlock("div", _hoisted_16, [
              createBaseVNode("div", _hoisted_17, [
                createCommentVNode(" \u7CFB\u5217 \u4E14\u62E5\u6709\u6570\u91CF > 1 "),
                __props.item.hasCount && __props.item.hasCount > 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  createTextVNode(toDisplayString(_ctx.$t("series")) + " " + toDisplayString(__props.item.hasCount) + "/" + toDisplayString(__props.item.total), 1)
                ], 2112)) : __props.item.putAway ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  unref(overTime) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString(_ctx.$t("overTime")), 1)
                  ], 2112)) : (openBlock(), createElementBlock("div", _hoisted_18, [
                    createBaseVNode("img", { src: unref(TimeIcon) }, null, 8, _hoisted_19),
                    createBaseVNode("span", null, toDisplayString(unref(day)) + toDisplayString(_ctx.$t("day")) + toDisplayString(unref(hour)) + toDisplayString(_ctx.$t("hour")), 1)
                  ]))
                ], 2112)) : createCommentVNode("v-if", true)
              ]),
              createCommentVNode(" \u7CFB\u5217 "),
              __props.item.hasCount && __props.item.hasCount > 1 ? (openBlock(), createElementBlock("a", _hoisted_20, toDisplayString(_ctx.$t("seeAll")), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createCommentVNode(" \u975E\u7CFB\u5217 "),
                __props.item?.putAway ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  class: "btn btn-min btn-plain",
                  onClick: withModifiers(offSale, ["stop"])
                }, toDisplayString(_ctx.$t("offsale")), 9, _hoisted_21)) : (openBlock(), createElementBlock("div", _hoisted_22, [
                  createBaseVNode("a", {
                    class: "btn btn-min",
                    onClick: withModifiers(toSale, ["stop"])
                  }, toDisplayString(_ctx.$t("sale")), 9, _hoisted_23),
                  createBaseVNode("a", {
                    class: "btn btn-min",
                    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => isOpenSendNft.value = true, ["stop"]))
                  }, toDisplayString(_ctx.$t("sendNft")), 1)
                ]))
              ], 2112))
            ])) : createCommentVNode("v-if", true)
          ]),
          createCommentVNode(" \u63A8\u8350\u5361\u7247 "),
          props.isRecommendCard ? (openBlock(), createElementBlock("div", _hoisted_24, [
            createBaseVNode("div", _hoisted_25, [
              createBaseVNode("img", { src: unref(FireIcon) }, null, 8, _hoisted_26)
            ]),
            createBaseVNode("div", _hoisted_27, toDisplayString(_ctx.$t("recommentprod")), 1),
            createBaseVNode("div", _hoisted_28, toDisplayString(_ctx.$t("recommenttext")), 1),
            createBaseVNode("div", _hoisted_29, [
              createVNode(_component_router_link, { to: { name: "recommned" } }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("getmore")) + " ", 1),
                  createBaseVNode("img", { src: unref(CardIcon) }, null, 8, _hoisted_30)
                ]),
                _: 1
              })
            ])
          ])) : createCommentVNode("v-if", true)
        ])),
        createCommentVNode("\u8F6CNFT\u5F39\u7A97"),
        createVNode(SendNft, {
          nft: unref(nft).val,
          visible: isOpenSendNft.value,
          onRemoveNft: removeNft,
          onNftDialogClose: _cache[2] || (_cache[2] = ($event) => isOpenSendNft.value = false)
        }, null, 8, ["nft", "visible"])
      ], 64);
    };
  }
});
var NftItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5091aa4f"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/Nft-item/Nft-item.vue"]]);

var NftSkeleton_scss_vue_type_style_index_0_src_16543ba3_scoped_true_lang = '';

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
    loading: { type: Boolean, required: true },
    count: { type: Number, required: true },
    isSelf: { type: Boolean, required: false },
    isReCommend: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElSkeleton = ElSkeleton;
      return openBlock(), createBlock(_component_ElSkeleton, {
        loading: __props.loading,
        animated: "",
        count: __props.count
      }, {
        template: withCtx((slotProps) => [
          slotProps.key === 1 && props.isReCommend ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createCommentVNode(" @ts-ignore "),
            createVNode(NftItem, {
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
            })
          ], 2112)) : (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_ElSkeletonItem, {
                class: "cover-image flex flex-align-center flex-pack-center",
                variant: "image"
              })
            ]),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", null, [
                createVNode(_component_ElSkeletonItem, {
                  class: "title",
                  variant: "text",
                  style: { "width": "75%", "background": "#F2F4F7" }
                })
              ]),
              createBaseVNode("div", _hoisted_4, [
                createVNode(_component_ElSkeletonItem, {
                  variant: "text",
                  style: { "width": "40%" }
                })
              ]),
              createBaseVNode("div", _hoisted_5, [
                createVNode(_component_ElSkeletonItem, {
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
var NftSkeleton = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-16543ba3"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/NftSkeleton/NftSkeleton.vue"]]);

export { NftSkeleton as N, NftItem as a };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmZ0U2tlbGV0b24uNjY5MTk5ZWQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
