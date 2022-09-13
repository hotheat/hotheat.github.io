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
import { _ as _export_sfc, d as defineComponent, I as onMounted, o as openBlock, c as createElementBlock, a as createBaseVNode, P as createTextVNode, t as toDisplayString, j as createCommentVNode, a5 as renderSlot, F as Fragment, i as renderList, x as normalizeClass, $ as withModifiers, r as reactive, u as useI18n, e as ref, ah as GetSeries, N as NftApiCode, O as resolveComponent, h as createVNode, w as withCtx, g as unref, y as withDirectives, z as vModelText, k as useStore, S as ElMessage, a2 as ElLoading, a3 as ElMessageBox } from "./index.1063289c.js";
/* empty css                     */var _imports_0$1 = "/assets/img_upload.9d9e8775.svg";
var _imports_0 = "/assets/pop_icon_hook.4bcf896b.svg";
var PickerModel_scss_vue_type_style_index_0_src_84966f40_scoped_true_lang = "";
const _hoisted_1$1 = {
  key: 0,
  class: "picker-modal"
};
const _hoisted_2$1 = { class: "picker-modal-header flex flex-align-center" };
const _hoisted_3$1 = { class: "title flex1" };
const _hoisted_4$1 = { key: 0 };
const _hoisted_5$1 = { class: "top-right" };
const _hoisted_6$1 = { class: "picker-model-body" };
const _hoisted_7 = {
  key: 0,
  class: "picker-model-list"
};
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "label flex1" };
const _hoisted_10 = { class: "icon" };
const _hoisted_11 = {
  key: 0,
  class: "secected",
  src: _imports_0
};
const _hoisted_12 = {
  key: 1,
  class: "null"
};
const _hoisted_13 = ["onClick"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    visible: { type: Boolean },
    list: null,
    name: null,
    listKey: null,
    selecteds: null,
    multiple: { type: Boolean },
    title: null,
    disabled: null
  },
  emits: ["confirm", "change"],
  setup(__props, { emit }) {
    const props = __props;
    function confirm() {
      emit("confirm");
    }
    function isSellected(item) {
      return props.selecteds.find((_item) => _item === item);
    }
    function itemClick(item) {
      const isDisabled = checkDisabled(item);
      if (isDisabled)
        return;
      let index;
      if (typeof item === "string") {
        index = props.selecteds.findIndex((_item) => _item === item);
      } else {
        index = props.selecteds.findIndex((_item) => _item === item[props.listKey]);
      }
      if (index === -1) {
        if (!props.multiple) {
          props.selecteds.length = 0;
        }
        props.selecteds.push(typeof item === "string" ? item : item[props.listKey]);
      } else {
        props.selecteds.splice(index, 1);
      }
      emit("change", props.selecteds);
    }
    function checkDisabled(item) {
      if (props.disabled) {
        if (typeof props.disabled === "string") {
          return item[props.disabled];
        } else {
          return props.disabled(item);
        }
      } else {
        return false;
      }
    }
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      return __props.visible ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createTextVNode(toDisplayString(props.title), 1),
            __props.multiple ? (openBlock(), createElementBlock("span", _hoisted_4$1, "(" + toDisplayString(_ctx.$t("multiple")) + ")", 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("span", _hoisted_5$1, [
            renderSlot(_ctx.$slots, "topRight", {}, void 0, true)
          ])
        ]),
        createBaseVNode("div", _hoisted_6$1, [
          props.list.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(props.list, (item, index) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["picker-model-item flex flex-align-center", { disabled: checkDisabled(item) }]),
                key: item.toString(),
                onClick: ($event) => itemClick(item)
              }, [
                createBaseVNode("div", _hoisted_9, [
                  createTextVNode(toDisplayString(props.name ? _ctx.$t(item[props.name]) : _ctx.$t(item)) + " ", 1),
                  renderSlot(_ctx.$slots, "item", { item }, void 0, true)
                ]),
                createBaseVNode("div", _hoisted_10, [
                  isSellected(props.listKey ? item[props.listKey] : item) ? (openBlock(), createElementBlock("img", _hoisted_11)) : createCommentVNode("", true)
                ])
              ], 10, _hoisted_8);
            }), 128))
          ])) : (openBlock(), createElementBlock("div", _hoisted_12, toDisplayString(_ctx.$t("null")), 1))
        ]),
        createBaseVNode("div", {
          class: "btn btn-block confirm-btn",
          onClick: withModifiers(confirm, ["stop"])
        }, toDisplayString(_ctx.$t("confirm")), 9, _hoisted_13)
      ])) : createCommentVNode("", true);
    };
  }
});
var PickerModel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-84966f40"]]);
var ChooseSeriesModal_scss_vue_type_style_index_0_src_71938b80_scoped_true_lang = "";
const _hoisted_1 = ["onClick"];
const _hoisted_2 = { class: "create-series" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "drsc" };
const _hoisted_5 = ["placeholder"];
const _hoisted_6 = ["placeholder"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    isShowSeriesModal: { type: Boolean },
    selectedSeries: null
  },
  emits: ["confirm", "change"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const store = useStore();
    const series = reactive([]);
    const i18n = useI18n();
    const serie = reactive({
      name: "",
      number: ""
    });
    const isShowCreateSeriesModal = ref(false);
    const disabledFunction = (item) => item.maxNumber <= item.currentNumber;
    let key = "";
    let isHasGetOldSeriesKey = "";
    function getSeries() {
      return new Promise((resolve) => __async(this, null, function* () {
        series.length = 0;
        const string = localStorage.getItem(key);
        if (string) {
          const list = JSON.parse(string);
          series.push(...list.filter((item) => {
            var _a;
            return item.metaId === ((_a = store.state.userInfo) == null ? void 0 : _a.metaId);
          }));
        }
        debugger;
        const isHasGetOldSeries = localStorage.getItem(isHasGetOldSeriesKey);
        if (!isHasGetOldSeries) {
          const res = yield GetSeries({ page: 1, pageSize: 99 });
          if (res.code === NftApiCode.success) {
            if (res.data.length > 0) {
              res.data.map((item) => {
                series.push({
                  name: item.series,
                  currentNumber: item.currentNumber,
                  maxNumber: item.maxNumber,
                  codeHash: item.codeHash,
                  genesis: item.genesis,
                  genesisTxId: item.genesisTxId,
                  sensibleId: item.sensibleId,
                  metaId: store.state.userInfo.metaId
                });
              });
            }
          }
          localStorage.setItem(key, JSON.stringify(series));
          localStorage.setItem(isHasGetOldSeriesKey, "true");
        }
        resolve();
      }));
    }
    function createSerie() {
      return __async(this, null, function* () {
        var _a;
        if (serie.name === "") {
          ElMessage.error(i18n.t("createSeriesNamePlar"));
          return;
        }
        if (!serie.number) {
          ElMessage.error(i18n.t("createSeriesNumberPlar"));
          return;
        }
        const index = series.findIndex((item) => item.name === serie.name);
        if (index !== -1) {
          ElMessage.error(i18n.t("havedSameNameSeries"));
          return;
        }
        const loading = ElLoading.service({
          lock: true,
          text: "Loading",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)",
          customClass: "full-loading"
        });
        const response = yield (_a = store.state.sdk) == null ? void 0 : _a.genesisNFT({
          seriesName: serie.name,
          nftTotal: serie.number
        });
        if (response && response.code === 200) {
          series.unshift({
            name: serie.name,
            maxNumber: parseInt(serie.number),
            codeHash: response.data.codehash,
            genesis: response.data.genesisId,
            genesisTxId: response.data.genesisTxid,
            sensibleId: response.data.sensibleId,
            metaId: store.state.userInfo.metaId,
            currentNumber: 0
          });
          localStorage.setItem(key, JSON.stringify(series));
          ElMessage.success(i18n.t("createdSuccess"));
          serie.name = "";
          serie.number = "";
          isShowCreateSeriesModal.value = false;
        }
        loading.close();
      });
    }
    function upgradeCurrentSeriesNumber() {
      return __async(this, null, function* () {
        if (props.selectedSeries && props.selectedSeries[0]) {
          const index = series.findIndex((item) => item.name === props.selectedSeries[0]);
          if (index !== -1) {
            series[index].currentNumber = series[index].currentNumber + 1;
            localStorage.setItem(key, JSON.stringify(series));
          }
        }
      });
    }
    function removeSeries(seriesItem) {
      return __async(this, null, function* () {
        ElMessageBox.confirm(`${i18n.t("deleteMessage")} ${seriesItem.name} ?`, i18n.t("niceWarning"), {
          confirmButtonText: i18n.t("confirm"),
          cancelButtonText: i18n.t("cancel")
        }).then(() => {
          if (props.selectedSeries && props.selectedSeries.indexOf(seriesItem.name) !== -1) {
            props.selectedSeries.splice(props.selectedSeries.indexOf(seriesItem.name), 1);
          }
          const index = series.findIndex((item) => item.name === seriesItem.name);
          series.splice(index, 1);
          localStorage.setItem(key, JSON.stringify(series));
        });
      });
    }
    if (store.state.nftToken) {
      key = `nftGenesis${store.state.userInfo.metaId}`;
      isHasGetOldSeriesKey = `isHasGetOldSeriesKey${store.state.userInfo.metaId}`;
      getSeries();
    } else {
      const watchNFTToken = store.watch((state) => state.nftToken, (nftToken) => {
        if (nftToken) {
          watchNFTToken();
          key = `nftGenesis${store.state.userInfo.metaId}`;
          isHasGetOldSeriesKey = `isHasGetOldSeriesKey${store.state.userInfo.metaId}`;
          getSeries();
        }
      });
    }
    expose({
      series,
      getSeries,
      upgradeCurrentSeriesNumber
    });
    return (_ctx, _cache) => {
      const _component_ElDialog = resolveComponent("ElDialog");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(PickerModel, {
          name: "name",
          listKey: "name",
          title: _ctx.$t("chooseserices"),
          visible: __props.isShowSeriesModal,
          onConfirm: _cache[1] || (_cache[1] = ($event) => emit("confirm")),
          list: unref(series),
          selecteds: __props.selectedSeries,
          disabled: disabledFunction,
          onChange: _cache[2] || (_cache[2] = (selecteds) => emit("change", selecteds))
        }, {
          item: withCtx(({ item }) => [
            createBaseVNode("span", null, [
              createTextVNode(toDisplayString(item.currentNumber) + "/" + toDisplayString(item.maxNumber) + " ", 1),
              createBaseVNode("a", {
                class: "delete",
                onClick: withModifiers(($event) => removeSeries(item), ["stop"])
              }, toDisplayString(_ctx.$t("delete")), 9, _hoisted_1)
            ])
          ]),
          topRight: withCtx(() => [
            createBaseVNode("a", {
              class: "create-series-btn",
              onClick: _cache[0] || (_cache[0] = ($event) => isShowCreateSeriesModal.value = true)
            }, toDisplayString(_ctx.$t("createSerie")), 1)
          ]),
          _: 1
        }, 8, ["title", "visible", "list", "selecteds"]),
        createVNode(_component_ElDialog, {
          modelValue: isShowCreateSeriesModal.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isShowCreateSeriesModal.value = $event)
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, toDisplayString(_ctx.$t("createSerieProd")), 1),
              createBaseVNode("div", _hoisted_4, toDisplayString(_ctx.$t("createSerieTips")), 1),
              withDirectives(createBaseVNode("input", {
                type: "text",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(serie).name = $event),
                placeholder: _ctx.$t("createSeriesNamePlar")
              }, null, 8, _hoisted_5), [
                [vModelText, unref(serie).name]
              ]),
              withDirectives(createBaseVNode("input", {
                type: "number",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(serie).number = $event),
                min: "0",
                placeholder: _ctx.$t("createSeriesNumberPlar")
              }, null, 8, _hoisted_6), [
                [vModelText, unref(serie).number]
              ]),
              createBaseVNode("div", {
                class: "btn btn-block",
                onClick: createSerie
              }, toDisplayString(_ctx.$t("create")), 1)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
});
var ChooseSeriesModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-71938b80"]]);
export { ChooseSeriesModal as C, PickerModel as P, _imports_0$1 as _ };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hvb3NlU2VyaWVzTW9kYWwuZWYyZWFlYWEuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
