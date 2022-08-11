import { _ as _export_sfc, e as defineComponent, a as onMounted, g as openBlock, A as createElementBlock, k as createBaseVNode, J as createTextVNode, D as toDisplayString, m as createCommentVNode, p as renderSlot, F as Fragment, B as renderList, L as normalizeClass, C as unref, K as withModifiers, u as useI18n, v as reactive, r as ref, l as createVNode, j as withCtx, T as withDirectives, V as vModelText, E as useStore, X as ElMessage, a0 as ElLoading, M as Mutation, ao as ElMessageBox, ap as ElDialog } from './index.f03006d5.js';

var PopIcon = "/assets/pop_icon_hook.4bcf896b.svg";

var PickerModel_scss_vue_type_style_index_0_src_acfe8f6a_scoped_true_lang = '';

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
const _hoisted_11 = ["src"];
const _hoisted_12 = {
  key: 1,
  class: "null"
};
const _hoisted_13 = ["onClick"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    visible: { type: Boolean, required: true },
    list: { type: null, required: true },
    name: { type: String, required: false },
    listKey: { type: String, required: false },
    selecteds: { type: Array, required: true },
    multiple: { type: Boolean, required: false },
    title: { type: String, required: true },
    disabled: { type: [String, Function], required: false }
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
      const selecteds = JSON.parse(JSON.stringify(props.selecteds));
      let index;
      if (typeof item === "string") {
        index = props.selecteds.findIndex((_item) => _item === item);
      } else {
        index = props.selecteds.findIndex((_item) => _item === item[props.listKey]);
      }
      if (index === -1) {
        if (!props.multiple) {
          selecteds.length = 0;
        }
        selecteds.push(typeof item === "string" ? item : item[props.listKey]);
      } else {
        selecteds.splice(index, 1);
      }
      emit("change", selecteds);
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
            __props.multiple ? (openBlock(), createElementBlock("span", _hoisted_4$1, "(" + toDisplayString(_ctx.$t("multiple")) + ")", 1)) : createCommentVNode("v-if", true)
          ]),
          createBaseVNode("span", _hoisted_5$1, [
            renderSlot(_ctx.$slots, "topRight", {}, void 0, true)
          ]),
          createCommentVNode(` <a @click.stop="confirm">{{ $t('confirm') }}</a> `)
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
                  isSellected(props.listKey ? item[props.listKey] : item) ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    class: "secected",
                    src: unref(PopIcon)
                  }, null, 8, _hoisted_11)) : createCommentVNode("v-if", true)
                ])
              ], 10, _hoisted_8);
            }), 128))
          ])) : (openBlock(), createElementBlock("div", _hoisted_12, toDisplayString(_ctx.$t("null")), 1))
        ]),
        createBaseVNode("div", {
          class: "btn btn-block confirm-btn",
          onClick: withModifiers(confirm, ["stop"])
        }, toDisplayString(_ctx.$t("confirm")), 9, _hoisted_13)
      ])) : createCommentVNode("v-if", true);
    };
  }
});
var PickerModel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-acfe8f6a"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/PickerModal/PickerModel.vue"]]);

var ChooseSeriesModal_scss_vue_type_style_index_0_src_4ebce80f_scoped_true_lang = '';

const _hoisted_1 = ["onClick"];
const _hoisted_2 = { class: "create-series" };
const _hoisted_3 = { class: "title" };
const _hoisted_4 = { class: "drsc" };
const _hoisted_5 = ["placeholder"];
const _hoisted_6 = ["placeholder"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    isShowSeriesModal: { type: Boolean, required: true },
    selectedSeries: { type: Array, required: true }
  },
  emits: ["confirm", "change"],
  setup(__props, { emit }) {
    const store = useStore();
    const i18n = useI18n();
    const serie = reactive({
      name: "",
      number: ""
    });
    const isShowCreateSeriesModal = ref(false);
    const disabledFunction = (item) => item.maxNumber <= item.currentNumber;
    async function createSerie() {
      if (serie.name === "") {
        ElMessage.error(i18n.t("createSeriesNamePlar"));
        return;
      }
      if (!serie.number) {
        ElMessage.error(i18n.t("createSeriesNumberPlar"));
        return;
      }
      const index = store.state.series.findIndex((item) => item.name === serie.name);
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
      try {
        const response = await store.state.sdk?.genesisNFT({
          seriesName: serie.name,
          nftTotal: serie.number
        });
        if (response && response.code === 200) {
          store.commit(Mutation.ADDSERIES, {
            name: serie.name,
            maxNumber: parseInt(serie.number),
            codeHash: response.data.codehash,
            genesis: response.data.genesisId,
            genesisTxId: response.data.genesisTxid,
            sensibleId: response.data.sensibleId,
            metaId: store.state.userInfo.metaId,
            currentNumber: 0
          });
          ElMessage.success(i18n.t("createdSuccess"));
          serie.name = "";
          serie.number = "";
          isShowCreateSeriesModal.value = false;
          loading.close();
        }
      } catch (error) {
        loading.close();
        if (error)
          ElMessage.error(typeof error === "string" ? error : JSON.stringify(error));
      }
    }
    async function removeSeries(seriesItem) {
      ElMessageBox.confirm(`${i18n.t("deleteMessage")} ${seriesItem.name} ?`, i18n.t("niceWarning"), {
        confirmButtonText: i18n.t("confirm"),
        cancelButtonText: i18n.t("cancel")
      }).then(() => {
        store.commit(Mutation.REMOVESERIES, seriesItem.name);
      });
    }
    return (_ctx, _cache) => {
      const _component_ElDialog = ElDialog;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(PickerModel, {
          name: "name",
          listKey: "name",
          title: _ctx.$t("chooseserices"),
          visible: __props.isShowSeriesModal,
          onConfirm: _cache[1] || (_cache[1] = ($event) => emit("confirm")),
          list: unref(store).state.series,
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
        createCommentVNode(" \u521B\u5EFA\u7CFB\u5217 "),
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
var ChooseSeriesModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4ebce80f"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/ChooseSeriesModal/ChooseSeriesModal.vue"]]);

var UploadIcon = "/assets/img_upload.9d9e8775.svg";

export { ChooseSeriesModal as C, PickerModel as P, UploadIcon as U };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1nX3VwbG9hZC5lMjgzY2NmNi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
