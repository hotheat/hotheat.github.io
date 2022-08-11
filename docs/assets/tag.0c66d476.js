import { ad as buildProps, e as defineComponent, bf as useGlobalConfig, d as computed, O as withInstall, g as openBlock, A as createElementBlock, p as renderSlot, m as createCommentVNode, L as normalizeClass, a9 as normalizeStyle, i as createBlock, j as withCtx, k as createBaseVNode, aa as Transition } from './index.f03006d5.js';

const tagProps = buildProps({
  closable: Boolean,
  type: {
    type: String,
    values: ["success", "info", "warning", "danger", ""],
    default: ""
  },
  hit: Boolean,
  disableTransitions: Boolean,
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    values: ["medium", "small", "mini"]
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  }
});
const tagEmits = {
  close: (evt) => evt instanceof MouseEvent,
  click: (evt) => evt instanceof MouseEvent
};

var script = defineComponent({
  name: "ElTag",
  props: tagProps,
  emits: tagEmits,
  setup(props, { emit }) {
    const ELEMENT = useGlobalConfig();
    const tagSize = computed(() => props.size || ELEMENT.size);
    const classes = computed(() => {
      const { type, hit, effect } = props;
      return [
        "el-tag",
        type ? `el-tag--${type}` : "",
        tagSize.value ? `el-tag--${tagSize.value}` : "",
        effect ? `el-tag--${effect}` : "",
        hit && "is-hit"
      ];
    });
    const handleClose = (event) => {
      event.stopPropagation();
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    return {
      classes,
      handleClose,
      handleClick
    };
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return !_ctx.disableTransitions ? (openBlock(), createElementBlock("span", {
    key: 0,
    class: normalizeClass(_ctx.classes),
    style: normalizeStyle({ backgroundColor: _ctx.color }),
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    renderSlot(_ctx.$slots, "default"),
    _ctx.closable ? (openBlock(), createElementBlock("i", {
      key: 0,
      class: "el-tag__close el-icon-close",
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
    })) : createCommentVNode("v-if", true)
  ], 6)) : (openBlock(), createBlock(Transition, {
    key: 1,
    name: "el-zoom-in-center"
  }, {
    default: withCtx(() => [
      createBaseVNode("span", {
        class: normalizeClass(_ctx.classes),
        style: normalizeStyle({ backgroundColor: _ctx.color }),
        onClick: _cache[3] || (_cache[3] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
      }, [
        renderSlot(_ctx.$slots, "default"),
        _ctx.closable ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: "el-tag__close el-icon-close",
          onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleClose && _ctx.handleClose(...args))
        })) : createCommentVNode("v-if", true)
      ], 6)
    ]),
    _: 3
  }));
}

script.render = render;
script.__file = "packages/components/tag/src/tag.vue";

const ElTag = withInstall(script);

var tag = '';

export { ElTag as E };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLjBjNjZkNDc2LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
