var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
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
import { _ as _export_sfc, d as defineComponent, u as useI18n, W as useRoute, r as reactive, L as computed, e as ref, O as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, h as createVNode, w as withCtx, g as unref, a4 as ElSkeletonItem, t as toDisplayString, P as createTextVNode, av as ElDropdown, aw as ElDropdownMenu, ay as ElDropdownItem, j as createCommentVNode, a6 as ElSkeleton, F as Fragment, i as renderList, l as createBlock, a5 as renderSlot, x as normalizeClass, ac as ElImage, Y as metafileUrl, a7 as Decimal, X as dayjs, $ as withModifiers, R as ElDialog, p as pushScopeId, b as popScopeId, k as useStore, aC as GetMyNftOnShowSellSuccessList, aD as GetMyNftOnShowBuySuccessList, ag as router } from "./index.1063289c.js";
import { L as LoadMore } from "./LoadMore.917b373d.js";
/* empty css                           *//* empty css                          */import { C as CertTemp } from "./Cert.4dc6bf7f.js";
var _imports_0 = "data:image/png;base64,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";
var _imports_1 = "data:image/png;base64,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";
var UserCenter_scss_vue_type_style_index_0_src_2d607d88_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-2d607d88"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "user-msg" };
const _hoisted_2 = { class: "container" };
const _hoisted_3 = { class: "user-msg-warp flex flex-align-center flex-pack-center" };
const _hoisted_4 = { class: "flex-box" };
const _hoisted_5 = { class: "avatar" };
const _hoisted_6 = { class: "name" };
const _hoisted_7 = { class: "metaid flex flex-align-center" };
const _hoisted_8 = { class: "operate flex flex-align-center" };
const _hoisted_9 = { class: "user-msg-warp flex flex-align-center flex-pack-center" };
const _hoisted_10 = { class: "flex-box" };
const _hoisted_11 = { class: "avatar" };
const _hoisted_12 = { class: "name" };
const _hoisted_13 = { class: "metaid flex flex-align-center" };
const _hoisted_14 = {
  key: 0,
  class: "operate flex flex-align-center"
};
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  t: "1638860083244",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "5637",
  width: "200",
  height: "200"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M871.232 721.6c0-82.56-68.16-149.504-152.192-149.504-84.032 0-152.192 66.944-152.192 149.504 0 82.56 68.16 149.504 152.192 149.504 84.032 0 152.192-66.944 152.192-149.504z m60.8 0c0 115.584-95.36 209.28-212.992 209.28-117.632 0-213.056-93.696-213.056-209.28s95.36-209.28 213.056-209.28c117.632 0 213.056 93.696 213.056 209.28z m-140.928 14.848l-41.6-23.808v-50.88a30.144 30.144 0 0 0-30.464-29.888 30.144 30.144 0 0 0-30.464 29.888v67.712c0 10.24 5.312 19.712 14.08 25.216 0.768 0.576 20.096 11.776 57.984 33.6h0.128a30.592 30.592 0 0 0 41.408-10.88 29.76 29.76 0 0 0-11.072-40.96zM627.712 302.4a30.144 30.144 0 0 0-30.4-29.888H292.992a30.144 30.144 0 0 0-30.464 29.888c0 16.512 13.632 29.888 30.464 29.888h304.32c16.768 0 30.4-13.376 30.4-29.888zM505.984 481.792a30.144 30.144 0 0 0-30.4-29.888H292.992a30.144 30.144 0 0 0-30.464 29.888c0 16.512 13.632 29.952 30.464 29.952H475.52c16.768 0 30.4-13.44 30.4-29.952zM292.992 631.36a30.144 30.144 0 0 0-30.464 29.888c0 16.512 13.632 29.888 30.464 29.888H414.72c16.768 0 30.4-13.44 30.4-29.888a30.144 30.144 0 0 0-30.4-29.888H292.992z m212.992 269.056a30.144 30.144 0 0 1-30.4 29.952H262.528c-67.2 0-121.728-53.568-121.728-119.68V212.736c0-66.048 54.528-119.552 121.728-119.552h426.048c67.264 0 121.792 53.504 121.792 119.552v209.344a30.144 30.144 0 0 1-30.464 29.888 30.144 30.144 0 0 1-30.464-29.888v-209.28a60.352 60.352 0 0 0-60.8-59.84H262.464a60.352 60.352 0 0 0-60.864 59.776v598.08c0 33.024 27.264 59.776 60.864 59.776h213.056c16.768 0 30.4 13.44 30.4 29.888z",
    "p-id": "5638"
  })
], -1));
const _hoisted_16 = { class: "operate-item flex flex-align-center" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  t: "1638860948018",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "6428",
  width: "200",
  height: "200"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M437.333333 224C437.333333 183.466667 471.466667 149.333333 512 149.333333s74.666667 34.133333 74.666667 74.666667S552.533333 298.666667 512 298.666667s-74.666667-34.133333-74.666667-74.666667zM439.466667 512c0-40.533333 34.133333-74.666667 74.666666-74.666667s74.666667 34.133333 74.666667 74.666667-34.133333 74.666667-74.666667 74.666667-74.666667-34.133333-74.666666-74.666667zM437.333333 800c0-40.533333 34.133333-74.666667 74.666667-74.666667s74.666667 34.133333 74.666667 74.666667S552.533333 874.666667 512 874.666667s-74.666667-34.133333-74.666667-74.666667z",
    fill: "#666666",
    "p-id": "6429"
  })
], -1));
const _hoisted_18 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "el-dropdown-link" }, "Dropdown List", -1));
const _hoisted_19 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", { src: _imports_0 }, null, -1));
const _hoisted_20 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", { src: _imports_1 }, null, -1));
const _hoisted_21 = { class: "section container" };
const _hoisted_22 = { class: "section-header flex flex-align-center" };
const _hoisted_23 = { class: "tab flex flex-align-center" };
const _hoisted_24 = { class: "record-modal" };
const _hoisted_25 = { class: "tab record-tab" };
const _hoisted_26 = ["onClick"];
const _hoisted_27 = { class: "record-list" };
const _hoisted_28 = { class: "record-item flex" };
const _hoisted_29 = { class: "cont flex1 flex flex-v flex-pack-justify" };
const _hoisted_30 = { class: "top flex flex flex-align-center" };
const _hoisted_31 = { class: "title flex1" };
const _hoisted_32 = { class: "time" };
const _hoisted_33 = { class: "bottom flex flex-align-center" };
const _hoisted_34 = { class: "seller flex1 flex flex-align-center" };
const _hoisted_35 = ["onClick"];
const _hoisted_36 = { class: "cont flex1 flex flex-v flex-pack-justify" };
const _hoisted_37 = { class: "top flex flex flex-align-center" };
const _hoisted_38 = { class: "title flex1" };
const _hoisted_39 = { class: "time" };
const _hoisted_40 = { class: "bottom flex flex-align-center" };
const _hoisted_41 = { class: "seller flex1 flex flex-align-center" };
const _hoisted_42 = ["src"];
const _hoisted_43 = ["src"];
const _hoisted_44 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    userInfoLoading: {
      type: Boolean,
      default: true
    },
    user: {
      type: Object,
      default: () => {
        return {
          metaId: "",
          name: "",
          address: ""
        };
      }
    },
    isHideAuthor: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const store = useStore();
    const route = useRoute();
    const recordPagination = reactive(__spreadValues({}, store.state.pagination));
    const recordTabs = [
      { name: i18n.t("purchaseHistory"), key: "purchaseHistory" },
      { name: i18n.t("saleRecord"), key: "saleRecord" }
    ];
    const tabs = computed(() => {
      const metaId = route.params.metaId;
      const key = store.state.userInfo && store.state.userInfo.metaId === metaId ? "self" : "user";
      return [
        { name: i18n.t("mynft"), val: 1, path: `/${key}/${metaId}/offsale` },
        {
          name: store.state.userInfo && store.state.userInfo.metaId === props.user.metaId ? i18n.t("mySellNft") : i18n.t("SellNft"),
          val: 2,
          path: `/${key}/${metaId}/sale`
        },
        {
          name: store.state.userInfo && store.state.userInfo.metaId === props.user.metaId ? i18n.t("myAuctionNFT") : i18n.t("AuctionNFT"),
          val: 3,
          path: `/${key}/${metaId}/auction`
        }
      ];
    });
    const isShowRcordSkeleton = ref(true);
    const records = reactive([]);
    const recordTabIndex = ref(0);
    const isShowRecordModal = ref(false);
    function openUrl(type) {
      let url = type === "showBuzz" ? `https://www.showbuzz.app/user_index/user_buzz/${props.user.metaId}` : `https://metacenter.top/#/pages/index/indexCenter?metaId=${props.user.metaId}`;
      window.open(url);
    }
    function getMoreRecords() {
      recordPagination.loading = true;
      recordPagination.page++;
      getRecordList().then(() => {
        recordPagination.loading = false;
      });
    }
    function getRecordList(isCover = false) {
      return __async(this, null, function* () {
        return new Promise((resolve) => __async(this, null, function* () {
          let res;
          const params = {
            MetaId: typeof route.params.metaId === "string" ? route.params.metaId : "",
            Page: recordPagination.page.toString(),
            PageSize: recordPagination.pageSize.toString()
          };
          if (recordTabIndex.value === 1) {
            res = yield GetMyNftOnShowSellSuccessList(params);
          } else {
            res = yield GetMyNftOnShowBuySuccessList(params);
          }
          if (res.code === 0) {
            if (isCover)
              records.length = 0;
            records.push(...res.data.results.items);
            isShowRcordSkeleton.value = false;
            const totalPages = Math.ceil(res.data.total / recordPagination.pageSize);
            if (recordPagination.page >= totalPages) {
              recordPagination.nothing = true;
            }
          }
          resolve();
        }));
      });
    }
    function changeRecordTab(index) {
      if (recordTabIndex.value === index)
        return;
      recordPagination.page = 1;
      recordPagination.loading = false;
      recordPagination.nothing = false;
      recordTabIndex.value = index;
      getRecordList(true);
    }
    function openRecordModal() {
      getRecordList(true);
      isShowRecordModal.value = true;
    }
    function toDetail(record) {
      router.push({
        name: "detail",
        params: {
          genesisId: record.nftGenesis,
          codehash: record.nftCodehash,
          tokenIndex: record.nftTokenIndex
        }
      });
    }
    return (_ctx, _cache) => {
      const _component_UserAvatar = resolveComponent("UserAvatar");
      const _component_router_link = resolveComponent("router-link");
      const _component_IsNull = resolveComponent("IsNull");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createVNode(unref(ElSkeleton), {
              loading: __props.userInfoLoading,
              animated: ""
            }, {
              template: withCtx(() => [
                createBaseVNode("div", _hoisted_3, [
                  createBaseVNode("div", _hoisted_4, [
                    createBaseVNode("div", _hoisted_5, [
                      createVNode(unref(ElSkeletonItem), { variant: "image" })
                    ]),
                    createBaseVNode("div", _hoisted_6, [
                      createVNode(unref(ElSkeletonItem), { variant: "text" })
                    ]),
                    createBaseVNode("div", _hoisted_7, [
                      createVNode(unref(ElSkeletonItem), { variant: "text" })
                    ]),
                    createVNode(unref(ElSkeletonItem), { variant: "text" })
                  ]),
                  createBaseVNode("div", _hoisted_8, [
                    createVNode(unref(ElSkeletonItem), { variant: "text" })
                  ])
                ])
              ]),
              default: withCtx(() => [
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("div", _hoisted_10, [
                    createBaseVNode("div", _hoisted_11, [
                      createVNode(_component_UserAvatar, {
                        metaId: __props.user.metaId,
                        hasmask: false
                      }, null, 8, ["metaId"])
                    ]),
                    createBaseVNode("div", _hoisted_12, toDisplayString(__props.user.name), 1),
                    createBaseVNode("div", _hoisted_13, [
                      createTextVNode(" MetaID: " + toDisplayString(__props.user.metaId.slice(0, 6)) + " ", 1),
                      createBaseVNode("a", {
                        onClick: _cache[0] || (_cache[0] = ($event) => {
                          var _a;
                          return (_a = unref(store).state.sdk) == null ? void 0 : _a.toTxLink(__props.user.metaId);
                        })
                      }, toDisplayString(_ctx.$t("txDetail")), 1)
                    ]),
                    createVNode(CertTemp, {
                      metaId: __props.user.metaId
                    }, null, 8, ["metaId"])
                  ]),
                  (unref(store).state.userInfo && unref(store).state.userInfo.metaId === unref(route).params.metaId ? "self" : "user") === "self" ? (openBlock(), createElementBlock("div", _hoisted_14, [
                    createBaseVNode("div", {
                      class: "operate-item flex flex-align-center",
                      onClick: openRecordModal
                    }, [
                      _hoisted_15,
                      createTextVNode(" " + toDisplayString(_ctx.$t("ransactionRecord")), 1)
                    ]),
                    createBaseVNode("div", _hoisted_16, [
                      _hoisted_17,
                      createTextVNode(" " + toDisplayString(_ctx.$t("more")) + " ", 1),
                      createVNode(unref(ElDropdown), {
                        class: "operate-item",
                        trigger: "click",
                        placement: "bottom-end"
                      }, {
                        dropdown: withCtx(() => [
                          createVNode(unref(ElDropdownMenu), { class: "more-list" }, {
                            default: withCtx(() => [
                              createVNode(unref(ElDropdownItem), {
                                class: "more-item flex flex-align-center",
                                onClick: _cache[1] || (_cache[1] = ($event) => openUrl("showBuzz"))
                              }, {
                                default: withCtx(() => [
                                  _hoisted_19,
                                  createTextVNode(" " + toDisplayString(_ctx.$t("look")) + "ShowBuzz ", 1)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(ElDropdownItem), {
                                class: "more-item flex flex-align-center",
                                onClick: _cache[2] || (_cache[2] = ($event) => openUrl("metaCenter"))
                              }, {
                                default: withCtx(() => [
                                  _hoisted_20,
                                  createTextVNode(" " + toDisplayString(_ctx.$t("look")) + "MetaCenter ", 1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        default: withCtx(() => [
                          _hoisted_18
                        ]),
                        _: 1
                      })
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ]),
              _: 1
            }, 8, ["loading"])
          ])
        ]),
        createBaseVNode("div", _hoisted_21, [
          createBaseVNode("div", _hoisted_22, [
            createBaseVNode("div", _hoisted_23, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(tabs), (tab, index) => {
                return openBlock(), createElementBlock(Fragment, { key: index }, [
                  index !== 0 || index === 0 && unref(store).state.userInfo && unref(store).state.userInfo.metaId === __props.user.metaId ? (openBlock(), createBlock(_component_router_link, {
                    to: { path: tab.path },
                    key: index
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(tab.name), 1)
                    ]),
                    _: 2
                  }, 1032, ["to"])) : createCommentVNode("", true)
                ], 64);
              }), 128))
            ])
          ]),
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        createBaseVNode("div", _hoisted_24, [
          createVNode(unref(ElDialog), {
            modelValue: isShowRecordModal.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isShowRecordModal.value = $event),
            "custom-class": "",
            top: "0"
          }, {
            title: withCtx(() => [
              createBaseVNode("div", _hoisted_25, [
                (openBlock(), createElementBlock(Fragment, null, renderList(recordTabs, (tab, index) => {
                  return createBaseVNode("a", {
                    class: normalizeClass({ active: index === recordTabIndex.value }),
                    onClick: ($event) => changeRecordTab(index)
                  }, toDisplayString(_ctx.$t(tab.key)), 11, _hoisted_26);
                }), 64))
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_27, [
                createVNode(unref(ElSkeleton), {
                  loading: isShowRcordSkeleton.value,
                  animated: "",
                  count: unref(recordPagination).pageSize
                }, {
                  template: withCtx(() => [
                    createBaseVNode("div", _hoisted_28, [
                      createVNode(unref(ElSkeletonItem), {
                        variant: "image",
                        class: "cover"
                      }),
                      createBaseVNode("div", _hoisted_29, [
                        createBaseVNode("div", _hoisted_30, [
                          createBaseVNode("div", _hoisted_31, [
                            createVNode(unref(ElSkeletonItem), {
                              variant: "text",
                              style: { "width": "40%" }
                            })
                          ]),
                          createBaseVNode("div", {
                            class: normalizeClass(["price", { active: recordTabIndex.value === 1 }])
                          }, [
                            createVNode(unref(ElSkeletonItem), {
                              variant: "text",
                              style: { "width": "20%" }
                            })
                          ], 2)
                        ]),
                        createBaseVNode("div", _hoisted_32, [
                          createVNode(unref(ElSkeletonItem), {
                            variant: "text",
                            style: { "width": "20%" }
                          })
                        ]),
                        createBaseVNode("div", _hoisted_33, [
                          createBaseVNode("div", _hoisted_34, [
                            createVNode(unref(ElSkeletonItem), {
                              variant: "text",
                              style: { "width": "30%" }
                            })
                          ]),
                          createBaseVNode("a", null, [
                            createVNode(unref(ElSkeletonItem), {
                              variant: "text",
                              style: { "width": "10%" }
                            })
                          ])
                        ])
                      ])
                    ])
                  ]),
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(records), (record) => {
                      return openBlock(), createElementBlock("div", {
                        class: "record-item flex",
                        key: record.nftSellTxId,
                        onClick: ($event) => toDetail(record)
                      }, [
                        createVNode(unref(ElImage), {
                          class: "cover",
                          src: unref(metafileUrl)(record.nftIcon),
                          lazy: true,
                          "preview-src-list": [unref(metafileUrl)(record.nftIcon, 800)],
                          fit: "contain"
                        }, null, 8, ["src", "preview-src-list"]),
                        createBaseVNode("div", _hoisted_36, [
                          createBaseVNode("div", _hoisted_37, [
                            createBaseVNode("div", _hoisted_38, toDisplayString(recordTabIndex.value === 0 ? _ctx.$t("buy") : _ctx.$t("sell")) + " " + toDisplayString(record.nftName), 1),
                            createBaseVNode("div", {
                              class: normalizeClass(["price flex flex-align-center", { active: recordTabIndex.value === 1 }])
                            }, toDisplayString(recordTabIndex.value === 0 ? "-" : "+") + toDisplayString(new unref(Decimal)(record.nftPrice).div(Math.pow(10, 8)).toString()) + " BSV ", 3)
                          ]),
                          createBaseVNode("div", _hoisted_39, toDisplayString(unref(dayjs)(record.nftBuyerTimestamp).format("YYYY-MM-DD HH:mm")), 1),
                          createBaseVNode("div", _hoisted_40, [
                            createBaseVNode("div", _hoisted_41, [
                              recordTabIndex.value === 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                createTextVNode(toDisplayString(_ctx.$t("buyer")) + ": ", 1),
                                createBaseVNode("img", {
                                  src: _ctx.$filters.avatar(record.nftBuyerMetaId)
                                }, null, 8, _hoisted_42),
                                createTextVNode(" " + toDisplayString(record.nftBuyerName), 1)
                              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                createTextVNode(toDisplayString(_ctx.$t("seller")) + ": ", 1),
                                createBaseVNode("img", {
                                  src: _ctx.$filters.avatar(record.nftOwnerMetaId)
                                }, null, 8, _hoisted_43),
                                createTextVNode(" " + toDisplayString(record.nftOwnerName), 1)
                              ], 64))
                            ]),
                            createBaseVNode("a", {
                              onClick: withModifiers(($event) => {
                                var _a;
                                return (_a = unref(store).state.sdk) == null ? void 0 : _a.toTxLink(record.nftSellTxId);
                              }, ["stop"])
                            }, toDisplayString(_ctx.$t("look")) + "TX", 9, _hoisted_44)
                          ])
                        ])
                      ], 8, _hoisted_35);
                    }), 128)),
                    unref(records).length > 0 && !isShowRcordSkeleton.value ? (openBlock(), createBlock(LoadMore, {
                      key: 0,
                      pagination: unref(recordPagination),
                      onGetMore: getMoreRecords
                    }, null, 8, ["pagination"])) : unref(records).length <= 0 && !isShowRcordSkeleton.value ? (openBlock(), createBlock(_component_IsNull, { key: 1 })) : createCommentVNode("", true)
                  ]),
                  _: 1
                }, 8, ["loading", "count"])
              ])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])
      ], 64);
    };
  }
});
var UserCenter = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2d607d88"]]);
export { UserCenter as U };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckNlbnRlci4xNWVlZjMwYy5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
