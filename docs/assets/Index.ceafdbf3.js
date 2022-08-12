import { _ as _export_sfc, e as defineComponent, r as ref, t as useRouter, u as useI18n, v as reactive, d as computed, f as resolveComponent, g as openBlock, A as createElementBlock, m as createCommentVNode, k as createBaseVNode, D as toDisplayString, F as Fragment, B as renderList, C as unref, l as createVNode, q as pushScopeId, s as popScopeId, E as useStore, cx as getTopics, K as withModifiers } from './index.3c02df72.js';
import { L as LoadMore } from './LoadMore.538873cb.js';
import { C as CertIcon } from './icon_cer.5f0b2a62.js';

var _imports_0 = "/assets/topic-bg.aba77efb.png";

var Index_scss_vue_type_style_index_0_src_272512a8_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-272512a8"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "topic-banner" }, [
  /* @__PURE__ */ createBaseVNode("img", {
    src: _imports_0,
    alt: "topic.banner"
  })
], -1));
const _hoisted_2 = { class: "topic-title" };
const _hoisted_3 = { class: "topic-list container" };
const _hoisted_4 = ["onClick"];
const _hoisted_5 = { class: "cover" };
const _hoisted_6 = ["src", "alt"];
const _hoisted_7 = { class: "cont" };
const _hoisted_8 = { class: "user" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "" };
const _hoisted_11 = ["src"];
const _hoisted_12 = ["onClick"];
const _hoisted_13 = { class: "genesis" };
const _hoisted_14 = { class: "name" };
const _hoisted_15 = { class: "intro" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    ref("");
    const router = useRouter();
    const i18n = useI18n();
    const store = useStore();
    const pagination = reactive({
      ...store.state.pagination,
      pageSize: 16
    });
    const collections = reactive([]);
    computed(() => {
      let result = false;
      const metaIds = [
        "9bb6bf6aab238912d16018b4ba0cdea4b49ac50c0c319ca7b42dc2649bf76c4c",
        "6fea074ef3faeabc0211624c47d6ff0fb95693e14cfa861a35c029b88177c7e7",
        "c90c06b66c4c155b0ee0ba18c5d075df53d4fd5ad37c1cd2c05ef03f18c57af2",
        "d87608e93f84982acacd186b9aee65c837baf9923186bf5f984a4ad776edcb81",
        "e9ab42667c5f5a6a1e7d45ed023f8961ee6950bba8a771d68732c8fb460a7aae"
      ];
      if (store.state.userInfo && metaIds.findIndex((item) => item === store.state.userInfo.metaId) !== -1) {
        result = true;
      }
      return result;
    });
    function toDetail(key, metaId) {
      router.push({ name: "topicDetail", params: { key, metaId } });
    }
    function getCollects(isCover = false) {
      return new Promise(async (resolve) => {
        const res = await getTopics();
        if (res.code === 0) {
          if (isCover)
            collections.length = 0;
          collections.push(...res.data.result);
          const totalPages = Math.ceil(res.data.total / pagination.pageSize);
          if (totalPages <= pagination.page)
            pagination.nothing = true;
        }
        resolve();
      });
    }
    function getMore() {
      pagination.page++;
      getCollects();
    }
    return (_ctx, _cache) => {
      const _component_UserAvatar = resolveComponent("UserAvatar");
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createCommentVNode("  <InnerPageHeader"),
        createCommentVNode(`    :title="$t('topic')"`),
        createCommentVNode(`    :intro="$t('topicTips')"`),
        createCommentVNode("    :isShowSearch='false'"),
        createCommentVNode("    :keyword='keyword'"),
        createCommentVNode("    @search='search'"),
        createCommentVNode("  />"),
        createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.$t("topic")), 1),
        createBaseVNode("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(store).state.topics, (topic) => {
            return openBlock(), createElementBlock("div", {
              onClick: ($event) => toDetail(topic.key, topic.createMetaId),
              class: "hot-topic-item",
              key: topic.key
            }, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("img", {
                  src: _ctx.$filters.getI18nContent(topic, "coverPicUrl"),
                  alt: topic.name
                }, null, 8, _hoisted_6)
              ]),
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createVNode(_component_UserAvatar, {
                    metaId: topic.createMetaId,
                    type: "",
                    onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                    }, ["stop"]))
                  }, null, 8, ["metaId"]),
                  createBaseVNode("div", {
                    class: "name flex flex-align-center flex-pack-center",
                    onClick: withModifiers(($event) => _ctx.$filters.toUser(topic.createMetaId), ["stop"])
                  }, [
                    createBaseVNode("span", _hoisted_10, toDisplayString(topic.createName), 1),
                    createBaseVNode("img", { src: unref(CertIcon) }, null, 8, _hoisted_11)
                  ], 8, _hoisted_9),
                  createBaseVNode("div", {
                    class: "metaId",
                    onClick: withModifiers(($event) => _ctx.$filters.toUser(topic.createMetaId), ["stop"])
                  }, " MetaID:" + toDisplayString(topic.createMetaId.slice(0, 6)), 9, _hoisted_12)
                ]),
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", _hoisted_14, toDisplayString(topic.name), 1),
                  createBaseVNode("div", _hoisted_15, toDisplayString(topic.info ? topic.info[unref(i18n).locale.value] : ""), 1)
                ])
              ])
            ], 8, _hoisted_4);
          }), 128)),
          createVNode(LoadMore, {
            pagination: unref(pagination),
            onGetMore: getMore
          }, null, 8, ["pagination"])
        ])
      ], 64);
    };
  }
});
var Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-272512a8"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/topic/Index.vue"]]);

export { Index as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5kZXguY2VhZmRiZjMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
