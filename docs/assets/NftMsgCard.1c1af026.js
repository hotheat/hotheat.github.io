import { _ as _export_sfc, d as defineComponent, o as openBlock, l as createBlock, w as withCtx, a as createBaseVNode, h as createVNode, g as unref, a4 as ElSkeletonItem, Y as metafileUrl, ac as ElImage, t as toDisplayString, j as createCommentVNode, a6 as ElSkeleton } from "./index.1063289c.js";
/* empty css                           *//* empty css                          */import { C as CertTemp } from "./Cert.4dc6bf7f.js";
var NftMsgCard_scss_vue_type_style_index_0_src_d997c170_scoped_true_lang = "";
const _hoisted_1 = { class: "nft-msg-card flex" };
const _hoisted_2 = { class: "cont flex1 flex flex-v" };
const _hoisted_3 = { class: "flex1" };
const _hoisted_4 = { class: "name" };
const _hoisted_5 = { class: "msg-item flex flex-align-center" };
const _hoisted_6 = { class: "key" };
const _hoisted_7 = { class: "value flex1 flex flex-align-center" };
const _hoisted_8 = { class: "author flex flex-align-center" };
const _hoisted_9 = { class: "msg-item flex flex-align-center" };
const _hoisted_10 = { class: "key" };
const _hoisted_11 = { class: "value flex1" };
const _hoisted_12 = { class: "nft-msg-card flex" };
const _hoisted_13 = { class: "cont flex1 flex flex-v" };
const _hoisted_14 = { class: "flex1" };
const _hoisted_15 = { class: "name" };
const _hoisted_16 = { class: "msg-item flex flex-align-center" };
const _hoisted_17 = { class: "key" };
const _hoisted_18 = { class: "value flex1 flex flex-align-center" };
const _hoisted_19 = { class: "author flex flex-align-center" };
const _hoisted_20 = ["src", "alt"];
const _hoisted_21 = { class: "username" };
const _hoisted_22 = { class: "msg-item flex flex-align-center" };
const _hoisted_23 = { class: "key" };
const _hoisted_24 = { class: "value flex1" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    coverUrl: null,
    name: null,
    metaId: null,
    userName: null,
    createdAt: null,
    isShowCert: { type: Boolean },
    skeleton: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElSkeleton), {
        loading: __props.skeleton,
        animated: ""
      }, {
        template: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(unref(ElSkeletonItem), {
              variant: "image",
              class: "cover"
            }),
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(unref(ElSkeletonItem), { variant: "text" })
                ]),
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("span", _hoisted_6, [
                    createVNode(unref(ElSkeletonItem), { variant: "text" })
                  ]),
                  createBaseVNode("div", _hoisted_7, [
                    createBaseVNode("div", _hoisted_8, [
                      createVNode(unref(ElSkeletonItem), {
                        variant: "circle",
                        style: { "width": "20px", "height": "20px" }
                      }),
                      createVNode(unref(ElSkeletonItem), {
                        variant: "text",
                        class: "username",
                        style: { "width": "100px" }
                      })
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("span", _hoisted_10, [
                    createVNode(unref(ElSkeletonItem), { variant: "text" })
                  ]),
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(unref(ElSkeletonItem), { variant: "text" })
                  ])
                ])
              ])
            ])
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_12, [
            createVNode(unref(ElImage), {
              class: "cover",
              src: unref(metafileUrl)(props.coverUrl),
              alt: props.name,
              fit: "cover",
              "preview-src-list": [unref(metafileUrl)(props.coverUrl, 800)]
            }, null, 8, ["src", "alt", "preview-src-list"]),
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, toDisplayString(props.name), 1),
                createBaseVNode("div", _hoisted_16, [
                  createBaseVNode("span", _hoisted_17, toDisplayString(_ctx.$t("creater")) + "\uFF1A", 1),
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("div", _hoisted_19, [
                      createBaseVNode("img", {
                        class: "",
                        src: _ctx.$filters.avatar(props.metaId),
                        alt: props.userName
                      }, null, 8, _hoisted_20),
                      createBaseVNode("span", _hoisted_21, toDisplayString(props.userName), 1)
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_22, [
                  createBaseVNode("span", _hoisted_23, toDisplayString(_ctx.$t("createtime")) + "\uFF1A", 1),
                  createBaseVNode("div", _hoisted_24, toDisplayString(_ctx.$filters.dateTimeFormat(props.createdAt)), 1)
                ])
              ]),
              props.isShowCert ? (openBlock(), createBlock(CertTemp, { key: 0 })) : createCommentVNode("", true)
            ])
          ])
        ]),
        _: 1
      }, 8, ["loading"]);
    };
  }
});
var NftMsgCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d997c170"]]);
export { NftMsgCard as N };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmZ0TXNnQ2FyZC4xYzFhZjAyNi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
