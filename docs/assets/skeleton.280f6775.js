import { r as ref, a as onMounted, w as watch, e as defineComponent, d as computed, O as withInstall, P as withNoopInstall, g as openBlock, A as createElementBlock, f as resolveComponent, i as createBlock, m as createCommentVNode, L as normalizeClass, F as Fragment, B as renderList, p as renderSlot, l as createVNode, Q as mergeProps, R as normalizeProps, k as createBaseVNode } from './index.e6d8aff8.js';

function useThrottleRender (loading, throttle = 0) {
    if (throttle === 0)
        return loading;
    const throttled = ref(false);
    let timeoutHandle = 0;
    const dispatchThrottling = () => {
        if (timeoutHandle) {
            clearTimeout(timeoutHandle);
        }
        timeoutHandle = window.setTimeout(() => {
            throttled.value = loading.value;
        }, throttle);
    };
    onMounted(dispatchThrottling);
    watch(() => loading.value, (val) => {
        if (val) {
            dispatchThrottling();
        }
        else {
            throttled.value = val;
        }
    });
    return throttled;
}

var script$2 = defineComponent({
  name: "ImgPlaceholder"
});

const _hoisted_1 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", { d: "M64 896V128h896v768H64z m64-128l192-192 116.352 116.352L640 448l256 307.2V192H128v576z m224-480a96 96 0 1 1-0.064 192.064A96 96 0 0 1 352 288z" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_3);
}

script$2.render = render$2;
script$2.__file = "packages/components/skeleton/src/image-placeholder.vue";

var script$1 = defineComponent({
  name: "ElSkeletonItem",
  components: {
    [script$2.name]: script$2
  },
  props: {
    variant: {
      type: String,
      default: "text"
    }
  }
});

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_img_placeholder = resolveComponent("img-placeholder");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-skeleton__item", `el-skeleton__${_ctx.variant}`])
  }, [
    _ctx.variant === "image" ? (openBlock(), createBlock(_component_img_placeholder, { key: 0 })) : createCommentVNode("v-if", true)
  ], 2);
}

script$1.render = render$1;
script$1.__file = "packages/components/skeleton/src/item.vue";

var script = defineComponent({
  name: "ElSkeleton",
  components: {
    [script$1.name]: script$1
  },
  props: {
    animated: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 1
    },
    rows: {
      type: Number,
      default: 3
    },
    loading: {
      type: Boolean,
      default: true
    },
    throttle: {
      type: Number
    }
  },
  setup(props) {
    const innerLoading = computed(() => {
      return props.loading;
    });
    const uiLoading = useThrottleRender(innerLoading, props.throttle);
    return {
      uiLoading
    };
  }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_skeleton_item = resolveComponent("el-skeleton-item");
  return _ctx.uiLoading ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    class: ["el-skeleton", _ctx.animated ? "is-animated" : ""]
  }, _ctx.$attrs), [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.count, (i) => {
      return openBlock(), createElementBlock(Fragment, { key: i }, [
        _ctx.loading ? renderSlot(_ctx.$slots, "template", { key: i }, () => [
          createVNode(_component_el_skeleton_item, {
            class: "is-first",
            variant: "p"
          }),
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.rows, (item) => {
            return openBlock(), createBlock(_component_el_skeleton_item, {
              key: item,
              class: normalizeClass({
                "el-skeleton__paragraph": true,
                "is-last": item === _ctx.rows && _ctx.rows > 1
              }),
              variant: "p"
            }, null, 8, ["class"]);
          }), 128))
        ]) : createCommentVNode("v-if", true)
      ], 64);
    }), 128))
  ], 16)) : renderSlot(_ctx.$slots, "default", normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)));
}

script.render = render;
script.__file = "packages/components/skeleton/src/index.vue";

const ElSkeleton = withInstall(script, {
  SkeletonItem: script$1
});
const ElSkeletonItem = withNoopInstall(script$1);

var skeletonItem = '';

var skeleton = '';

export { ElSkeletonItem as E, ElSkeleton as a };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tlbGV0b24uMjgwZjY3NzUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
