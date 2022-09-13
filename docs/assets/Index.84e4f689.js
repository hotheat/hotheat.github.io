import { I as InnerPageHeader } from "./InnerPageHeader.d944e619.js";
import { _ as _export_sfc, d as defineComponent, e as ref, V as useRouter, u as useI18n, O as resolveComponent, o as openBlock, c as createElementBlock, h as createVNode, a as createBaseVNode, F as Fragment, i as renderList, g as unref, k as useStore, t as toDisplayString, P as createTextVNode } from "./index.1063289c.js";
import "./bannet_icon_ins.c0e9a236.js";
import "./icon_search.630cdfed.js";
var Index_scss_vue_type_style_index_0_src_da20f088_scoped_true_lang = "";
const _hoisted_1 = { class: "topic-list container" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "msg" };
const _hoisted_5 = { class: "title" };
const _hoisted_6 = { class: "time" };
const _hoisted_7 = { class: "creater flex1 flex flex-align-center" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const keyword = ref("");
    const router = useRouter();
    useI18n();
    const store = useStore();
    function search() {
    }
    function toDetail(key, metaId) {
      if (key === "MetaBot") {
        router.push({ name: "metaBot" });
      } else {
        router.push({ name: "topicDetail", params: { key, metaId } });
      }
    }
    return (_ctx, _cache) => {
      const _component_UserAvatar = resolveComponent("UserAvatar");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(InnerPageHeader, {
          title: _ctx.$t("topic"),
          intro: _ctx.$t("topicTips"),
          isShowSearch: false,
          isHasBackIcon: false,
          keyword: keyword.value,
          onSearch: search
        }, null, 8, ["title", "intro", "keyword"]),
        createBaseVNode("div", _hoisted_1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(store).state.topics, (topic) => {
            return openBlock(), createElementBlock("div", {
              to: { name: "topicDetail" },
              class: "topic-item",
              key: topic.key,
              onClick: ($event) => toDetail(topic.key, topic.createMetaId)
            }, [
              createBaseVNode("img", {
                class: "cover",
                src: _ctx.$filters.getI18nContent(topic, "coverPicUrl")
              }, null, 8, _hoisted_3),
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, toDisplayString(topic.name), 1),
                createBaseVNode("div", _hoisted_6, toDisplayString(_ctx.$t("issueDate")) + ": " + toDisplayString(_ctx.$filters.dateTimeFormat(topic.timestamp, "YYYY-MM-DD")), 1),
                createBaseVNode("div", _hoisted_7, [
                  createTextVNode(toDisplayString(_ctx.$t("eventParty")) + ":", 1),
                  createVNode(_component_UserAvatar, {
                    metaId: topic.createMetaId
                  }, null, 8, ["metaId"]),
                  createTextVNode(toDisplayString(topic.createName), 1)
                ])
              ])
            ], 8, _hoisted_2);
          }), 128))
        ])
      ], 64);
    };
  }
});
var Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-da20f088"]]);
export { Index as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXguODRlNGY2ODkuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
