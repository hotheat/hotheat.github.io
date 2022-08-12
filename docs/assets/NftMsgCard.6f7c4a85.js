import { _ as _export_sfc, e as defineComponent, g as openBlock, i as createBlock, j as withCtx, k as createBaseVNode, l as createVNode, C as unref, as as metafileUrl, D as toDisplayString, m as createCommentVNode } from './index.3c02df72.js';
import { E as ElSkeletonItem, a as ElSkeleton } from './skeleton.048068e8.js';
import { E as ElImage } from './image-viewer.62daae40.js';
import { C as CertTemp } from './Cert.8ed408b2.js';

var NftMsgCard_scss_vue_type_style_index_0_src_7ad692ef_scoped_true_lang = '';

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
    coverUrl: { type: String, required: true },
    name: { type: String, required: true },
    metaId: { type: String, required: true },
    userName: { type: String, required: true },
    createdAt: { type: Number, required: true },
    isShowCert: { type: Boolean, required: false },
    skeleton: { type: Boolean, required: false }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElImage = ElImage;
      const _component_ElSkeleton = ElSkeleton;
      return openBlock(), createBlock(_component_ElSkeleton, {
        loading: __props.skeleton,
        animated: ""
      }, {
        template: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_ElSkeletonItem, {
              variant: "image",
              class: "cover"
            }),
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, [
                  createVNode(_component_ElSkeletonItem, { variant: "text" })
                ]),
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("span", _hoisted_6, [
                    createVNode(_component_ElSkeletonItem, { variant: "text" })
                  ]),
                  createBaseVNode("div", _hoisted_7, [
                    createBaseVNode("div", _hoisted_8, [
                      createVNode(_component_ElSkeletonItem, {
                        variant: "circle",
                        style: { "width": "20px", "height": "20px" }
                      }),
                      createVNode(_component_ElSkeletonItem, {
                        variant: "text",
                        class: "username",
                        style: { "width": "100px" }
                      })
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("span", _hoisted_10, [
                    createVNode(_component_ElSkeletonItem, { variant: "text" })
                  ]),
                  createBaseVNode("div", _hoisted_11, [
                    createVNode(_component_ElSkeletonItem, { variant: "text" })
                  ])
                ])
              ])
            ])
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_12, [
            createVNode(_component_ElImage, {
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
              props.isShowCert ? (openBlock(), createBlock(CertTemp, {
                key: 0,
                "meta-id": __props.metaId
              }, null, 8, ["meta-id"])) : createCommentVNode("v-if", true)
            ])
          ])
        ]),
        _: 1
      }, 8, ["loading"]);
    };
  }
});
var NftMsgCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7ad692ef"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/NftMsgCard/NftMsgCard.vue"]]);

export { NftMsgCard as N };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmZ0TXNnQ2FyZC42ZjdjNGE4NS5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
