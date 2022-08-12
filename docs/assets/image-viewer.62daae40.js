import { a4 as isFirefox, e as defineComponent, a5 as useLocaleInject, r as ref, d as computed, w as watch, n as nextTick, a as onMounted, a6 as on, a7 as off, g as openBlock, i as createBlock, j as withCtx, k as createBaseVNode, K as withModifiers, m as createCommentVNode, A as createElementBlock, L as normalizeClass, F as Fragment, B as renderList, T as withDirectives, a8 as vShow, a9 as normalizeStyle, p as renderSlot, aa as Transition, ab as rafThrottle, ac as EVENT_CODE, ad as buildProps, ae as useAttrs, af as isServer, O as withInstall, ag as definePropType, ah as mutable, ai as isString, aj as getScrollContainer, ak as useEventListener, f as resolveComponent, D as toDisplayString, Q as mergeProps, al as Teleport, am as isInContainer, an as useThrottleFn } from './index.3c02df72.js';

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const Mode = {
  CONTAIN: {
    name: "contain",
    icon: "el-icon-full-screen"
  },
  ORIGINAL: {
    name: "original",
    icon: "el-icon-c-scale-to-original"
  }
};
const mousewheelEventName = isFirefox() ? "DOMMouseScroll" : "mousewheel";
const CLOSE_EVENT = "close";
const SWITCH_EVENT = "switch";
var script$1 = defineComponent({
  name: "ElImageViewer",
  props: {
    urlList: {
      type: Array,
      default: () => []
    },
    zIndex: {
      type: Number,
      default: 2e3
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    infinite: {
      type: Boolean,
      default: true
    },
    hideOnClickModal: {
      type: Boolean,
      default: false
    }
  },
  emits: [CLOSE_EVENT, SWITCH_EVENT],
  setup(props, { emit }) {
    const { t } = useLocaleInject();
    let _keyDownHandler = null;
    let _mouseWheelHandler = null;
    let _dragHandler = null;
    const loading = ref(true);
    const index = ref(props.initialIndex);
    const wrapper = ref(null);
    const img = ref(null);
    const mode = ref(Mode.CONTAIN);
    const transform = ref({
      scale: 1,
      deg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: false
    });
    const isSingle = computed(() => {
      const { urlList } = props;
      return urlList.length <= 1;
    });
    const isFirst = computed(() => {
      return index.value === 0;
    });
    const isLast = computed(() => {
      return index.value === props.urlList.length - 1;
    });
    const currentImg = computed(() => {
      return props.urlList[index.value];
    });
    const imgStyle = computed(() => {
      const { scale, deg, offsetX, offsetY, enableTransition } = transform.value;
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg)`,
        transition: enableTransition ? "transform .3s" : "",
        marginLeft: `${offsetX}px`,
        marginTop: `${offsetY}px`
      };
      if (mode.value.name === Mode.CONTAIN.name) {
        style.maxWidth = style.maxHeight = "100%";
      }
      return style;
    });
    function hide() {
      deviceSupportUninstall();
      emit(CLOSE_EVENT);
    }
    function deviceSupportInstall() {
      _keyDownHandler = rafThrottle((e) => {
        switch (e.code) {
          case EVENT_CODE.esc:
            hide();
            break;
          case EVENT_CODE.space:
            toggleMode();
            break;
          case EVENT_CODE.left:
            prev();
            break;
          case EVENT_CODE.up:
            handleActions("zoomIn");
            break;
          case EVENT_CODE.right:
            next();
            break;
          case EVENT_CODE.down:
            handleActions("zoomOut");
            break;
        }
      });
      _mouseWheelHandler = rafThrottle((e) => {
        const delta = e.wheelDelta ? e.wheelDelta : -e.detail;
        if (delta > 0) {
          handleActions("zoomIn", {
            zoomRate: 0.015,
            enableTransition: false
          });
        } else {
          handleActions("zoomOut", {
            zoomRate: 0.015,
            enableTransition: false
          });
        }
      });
      on(document, "keydown", _keyDownHandler);
      on(document, mousewheelEventName, _mouseWheelHandler);
    }
    function deviceSupportUninstall() {
      off(document, "keydown", _keyDownHandler);
      off(document, mousewheelEventName, _mouseWheelHandler);
      _keyDownHandler = null;
      _mouseWheelHandler = null;
    }
    function handleImgLoad() {
      loading.value = false;
    }
    function handleImgError(e) {
      loading.value = false;
      e.target.alt = t("el.image.error");
    }
    function handleMouseDown(e) {
      if (loading.value || e.button !== 0)
        return;
      const { offsetX, offsetY } = transform.value;
      const startX = e.pageX;
      const startY = e.pageY;
      const divLeft = wrapper.value.clientLeft;
      const divRight = wrapper.value.clientLeft + wrapper.value.clientWidth;
      const divTop = wrapper.value.clientTop;
      const divBottom = wrapper.value.clientTop + wrapper.value.clientHeight;
      _dragHandler = rafThrottle((ev) => {
        transform.value = __spreadProps(__spreadValues({}, transform.value), {
          offsetX: offsetX + ev.pageX - startX,
          offsetY: offsetY + ev.pageY - startY
        });
      });
      on(document, "mousemove", _dragHandler);
      on(document, "mouseup", (e2) => {
        const mouseX = e2.pageX;
        const mouseY = e2.pageY;
        if (mouseX < divLeft || mouseX > divRight || mouseY < divTop || mouseY > divBottom) {
          reset();
        }
        off(document, "mousemove", _dragHandler);
      });
      e.preventDefault();
    }
    function reset() {
      transform.value = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false
      };
    }
    function toggleMode() {
      if (loading.value)
        return;
      const modeNames = Object.keys(Mode);
      const modeValues = Object.values(Mode);
      const currentMode = mode.value.name;
      const index2 = modeValues.findIndex((i) => i.name === currentMode);
      const nextIndex = (index2 + 1) % modeNames.length;
      mode.value = Mode[modeNames[nextIndex]];
      reset();
    }
    function prev() {
      if (isFirst.value && !props.infinite)
        return;
      const len = props.urlList.length;
      index.value = (index.value - 1 + len) % len;
    }
    function next() {
      if (isLast.value && !props.infinite)
        return;
      const len = props.urlList.length;
      index.value = (index.value + 1) % len;
    }
    function handleActions(action, options = {}) {
      if (loading.value)
        return;
      const { zoomRate, rotateDeg, enableTransition } = __spreadValues({
        zoomRate: 0.2,
        rotateDeg: 90,
        enableTransition: true
      }, options);
      switch (action) {
        case "zoomOut":
          if (transform.value.scale > 0.2) {
            transform.value.scale = parseFloat((transform.value.scale - zoomRate).toFixed(3));
          }
          break;
        case "zoomIn":
          transform.value.scale = parseFloat((transform.value.scale + zoomRate).toFixed(3));
          break;
        case "clocelise":
          transform.value.deg += rotateDeg;
          break;
        case "anticlocelise":
          transform.value.deg -= rotateDeg;
          break;
      }
      transform.value.enableTransition = enableTransition;
    }
    watch(currentImg, () => {
      nextTick(() => {
        const $img = img.value;
        if (!$img.complete) {
          loading.value = true;
        }
      });
    });
    watch(index, (val) => {
      reset();
      emit(SWITCH_EVENT, val);
    });
    onMounted(() => {
      var _a, _b;
      deviceSupportInstall();
      (_b = (_a = wrapper.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    });
    return {
      index,
      wrapper,
      img,
      isSingle,
      isFirst,
      isLast,
      currentImg,
      imgStyle,
      mode,
      handleActions,
      prev,
      next,
      hide,
      toggleMode,
      handleImgLoad,
      handleImgError,
      handleMouseDown
    };
  }
});

const _hoisted_1$1 = /* @__PURE__ */ createBaseVNode("i", { class: "el-icon-close" }, null, -1);
const _hoisted_2$1 = [
  _hoisted_1$1
];
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("i", { class: "el-icon-arrow-left" }, null, -1);
const _hoisted_4$1 = [
  _hoisted_3$1
];
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("i", { class: "el-icon-arrow-right" }, null, -1);
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = { class: "el-image-viewer__btn el-image-viewer__actions" };
const _hoisted_8 = { class: "el-image-viewer__actions__inner" };
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("i", { class: "el-image-viewer__actions__divider" }, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("i", { class: "el-image-viewer__actions__divider" }, null, -1);
const _hoisted_11 = { class: "el-image-viewer__canvas" };
const _hoisted_12 = ["src"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, { name: "viewer-fade" }, {
    default: withCtx(() => [
      createBaseVNode("div", {
        ref: "wrapper",
        tabindex: -1,
        class: "el-image-viewer__wrapper",
        style: normalizeStyle({ zIndex: _ctx.zIndex })
      }, [
        createBaseVNode("div", {
          class: "el-image-viewer__mask",
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.hideOnClickModal && _ctx.hide(), ["self"]))
        }),
        createCommentVNode(" CLOSE "),
        createBaseVNode("span", {
          class: "el-image-viewer__btn el-image-viewer__close",
          onClick: _cache[1] || (_cache[1] = (...args) => _ctx.hide && _ctx.hide(...args))
        }, _hoisted_2$1),
        createCommentVNode(" ARROW "),
        !_ctx.isSingle ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("span", {
            class: normalizeClass(["el-image-viewer__btn el-image-viewer__prev", { "is-disabled": !_ctx.infinite && _ctx.isFirst }]),
            onClick: _cache[2] || (_cache[2] = (...args) => _ctx.prev && _ctx.prev(...args))
          }, _hoisted_4$1, 2),
          createBaseVNode("span", {
            class: normalizeClass(["el-image-viewer__btn el-image-viewer__next", { "is-disabled": !_ctx.infinite && _ctx.isLast }]),
            onClick: _cache[3] || (_cache[3] = (...args) => _ctx.next && _ctx.next(...args))
          }, _hoisted_6, 2)
        ], 64)) : createCommentVNode("v-if", true),
        createCommentVNode(" ACTIONS "),
        createBaseVNode("div", _hoisted_7, [
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("i", {
              class: "el-icon-zoom-out",
              onClick: _cache[4] || (_cache[4] = ($event) => _ctx.handleActions("zoomOut"))
            }),
            createBaseVNode("i", {
              class: "el-icon-zoom-in",
              onClick: _cache[5] || (_cache[5] = ($event) => _ctx.handleActions("zoomIn"))
            }),
            _hoisted_9,
            createBaseVNode("i", {
              class: normalizeClass(_ctx.mode.icon),
              onClick: _cache[6] || (_cache[6] = (...args) => _ctx.toggleMode && _ctx.toggleMode(...args))
            }, null, 2),
            _hoisted_10,
            createBaseVNode("i", {
              class: "el-icon-refresh-left",
              onClick: _cache[7] || (_cache[7] = ($event) => _ctx.handleActions("anticlocelise"))
            }),
            createBaseVNode("i", {
              class: "el-icon-refresh-right",
              onClick: _cache[8] || (_cache[8] = ($event) => _ctx.handleActions("clocelise"))
            })
          ])
        ]),
        createCommentVNode(" CANVAS "),
        createBaseVNode("div", _hoisted_11, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.urlList, (url, i) => {
            return withDirectives((openBlock(), createElementBlock("img", {
              ref: "img",
              key: url,
              src: url,
              style: normalizeStyle(_ctx.imgStyle),
              class: "el-image-viewer__img",
              onLoad: _cache[9] || (_cache[9] = (...args) => _ctx.handleImgLoad && _ctx.handleImgLoad(...args)),
              onError: _cache[10] || (_cache[10] = (...args) => _ctx.handleImgError && _ctx.handleImgError(...args)),
              onMousedown: _cache[11] || (_cache[11] = (...args) => _ctx.handleMouseDown && _ctx.handleMouseDown(...args))
            }, null, 44, _hoisted_12)), [
              [vShow, i === _ctx.index]
            ]);
          }), 128))
        ]),
        renderSlot(_ctx.$slots, "default")
      ], 4)
    ]),
    _: 3
  });
}

script$1.render = render$1;
script$1.__file = "packages/components/image-viewer/src/index.vue";

script$1.install = (app) => {
  app.component(script$1.name, script$1);
};
const _ImageViewer = script$1;

const isBoolean = (val) => typeof val === 'boolean';

const imageProps = buildProps({
  appendToBody: {
    type: Boolean,
    default: false
  },
  hideOnClickModal: {
    type: Boolean,
    default: false
  },
  src: {
    type: String,
    default: ""
  },
  fit: {
    type: String,
    values: ["", "contain", "cover", "fill", "none", "scale-down"],
    default: ""
  },
  lazy: {
    type: Boolean,
    default: false
  },
  scrollContainer: {
    type: definePropType([String, Object])
  },
  previewSrcList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  zIndex: {
    type: Number,
    default: 2e3
  }
});
const imageEmits = {
  error: (evt) => evt instanceof Event,
  switch: (val) => isBoolean(val),
  close: () => true
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
const isHtmlElement = (e) => e && e.nodeType === Node.ELEMENT_NODE;
let prevOverflow = "";
var script = defineComponent({
  name: "ElImage",
  components: {
    ImageViewer: _ImageViewer
  },
  inheritAttrs: false,
  props: imageProps,
  emits: imageEmits,
  setup(props, { emit, attrs: rawAttrs }) {
    const { t } = useLocaleInject();
    const attrs = useAttrs();
    const hasLoadError = ref(false);
    const loading = ref(true);
    const imgWidth = ref(0);
    const imgHeight = ref(0);
    const showViewer = ref(false);
    const container = ref();
    const _scrollContainer = ref();
    let stopScrollListener;
    let stopWheelListener;
    const containerStyle = computed(() => rawAttrs.style);
    const imageStyle = computed(() => {
      const { fit } = props;
      if (!isServer && fit) {
        return { objectFit: fit };
      }
      return {};
    });
    const preview = computed(() => {
      const { previewSrcList } = props;
      return Array.isArray(previewSrcList) && previewSrcList.length > 0;
    });
    const imageIndex = computed(() => {
      const { src, previewSrcList } = props;
      let previewIndex = 0;
      const srcIndex = previewSrcList.indexOf(src);
      if (srcIndex >= 0) {
        previewIndex = srcIndex;
      }
      return previewIndex;
    });
    const loadImage = () => {
      if (isServer)
        return;
      loading.value = true;
      hasLoadError.value = false;
      const img = new Image();
      img.addEventListener("load", (e) => handleLoad(e, img));
      img.addEventListener("error", handleError);
      Object.entries(attrs.value).forEach(([key, value]) => {
        if (key.toLowerCase() === "onload")
          return;
        img.setAttribute(key, value);
      });
      img.src = props.src;
    };
    function handleLoad(e, img) {
      imgWidth.value = img.width;
      imgHeight.value = img.height;
      loading.value = false;
      hasLoadError.value = false;
    }
    function handleError(event) {
      loading.value = false;
      hasLoadError.value = true;
      emit("error", event);
    }
    function handleLazyLoad() {
      if (isInContainer(container.value, _scrollContainer.value)) {
        loadImage();
        removeLazyLoadListener();
      }
    }
    const lazyLoadHandler = useThrottleFn(handleLazyLoad, 200);
    function addLazyLoadListener() {
      return __async(this, null, function* () {
        var _a;
        if (isServer)
          return;
        yield nextTick();
        const { scrollContainer } = props;
        if (isHtmlElement(scrollContainer)) {
          _scrollContainer.value = scrollContainer;
        } else if (isString(scrollContainer) && scrollContainer !== "") {
          _scrollContainer.value = (_a = document.querySelector(scrollContainer)) != null ? _a : void 0;
        } else if (container.value) {
          _scrollContainer.value = getScrollContainer(container.value);
        }
        if (_scrollContainer.value) {
          stopScrollListener = useEventListener(_scrollContainer, "scroll", lazyLoadHandler);
          setTimeout(() => handleLazyLoad(), 100);
        }
      });
    }
    function removeLazyLoadListener() {
      if (isServer || !_scrollContainer.value || !lazyLoadHandler)
        return;
      stopScrollListener();
      _scrollContainer.value = void 0;
    }
    function wheelHandler(e) {
      if (!e.ctrlKey)
        return;
      if (e.deltaY < 0) {
        e.preventDefault();
        return false;
      } else if (e.deltaY > 0) {
        e.preventDefault();
        return false;
      }
    }
    function clickHandler() {
      if (!preview.value)
        return;
      stopWheelListener = useEventListener("wheel", wheelHandler, {
        passive: false
      });
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      showViewer.value = true;
    }
    function closeViewer() {
      stopWheelListener == null ? void 0 : stopWheelListener();
      document.body.style.overflow = prevOverflow;
      showViewer.value = false;
      emit("close");
    }
    function switchViewer(val) {
      emit("switch", val);
    }
    watch(() => props.src, () => {
      if (props.lazy) {
        loading.value = true;
        hasLoadError.value = false;
        removeLazyLoadListener();
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    onMounted(() => {
      if (props.lazy) {
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    return {
      attrs,
      loading,
      hasLoadError,
      showViewer,
      containerStyle,
      imageStyle,
      preview,
      imageIndex,
      container,
      clickHandler,
      closeViewer,
      switchViewer,
      t
    };
  }
});

const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "el-image__placeholder" }, null, -1);
const _hoisted_2 = { class: "el-image__error" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { key: 0 };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_image_viewer = resolveComponent("image-viewer");
  return openBlock(), createElementBlock("div", {
    ref: "container",
    class: normalizeClass(["el-image", _ctx.$attrs.class]),
    style: normalizeStyle(_ctx.containerStyle)
  }, [
    _ctx.loading ? renderSlot(_ctx.$slots, "placeholder", { key: 0 }, () => [
      _hoisted_1
    ]) : _ctx.hasLoadError ? renderSlot(_ctx.$slots, "error", { key: 1 }, () => [
      createBaseVNode("div", _hoisted_2, toDisplayString(_ctx.t("el.image.error")), 1)
    ]) : (openBlock(), createElementBlock("img", mergeProps({
      key: 2,
      class: "el-image__inner"
    }, _ctx.attrs, {
      src: _ctx.src,
      style: _ctx.imageStyle,
      class: {
        "el-image__preview": _ctx.preview
      },
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args))
    }), null, 16, _hoisted_3)),
    (openBlock(), createBlock(Teleport, {
      to: "body",
      disabled: !_ctx.appendToBody
    }, [
      _ctx.preview ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        _ctx.showViewer ? (openBlock(), createBlock(_component_image_viewer, {
          key: 0,
          "z-index": _ctx.zIndex,
          "initial-index": _ctx.imageIndex,
          "url-list": _ctx.previewSrcList,
          "hide-on-click-modal": _ctx.hideOnClickModal,
          onClose: _ctx.closeViewer,
          onSwitch: _ctx.switchViewer
        }, {
          default: withCtx(() => [
            _ctx.$slots.viewer ? (openBlock(), createElementBlock("div", _hoisted_4, [
              renderSlot(_ctx.$slots, "viewer")
            ])) : createCommentVNode("v-if", true)
          ]),
          _: 3
        }, 8, ["z-index", "initial-index", "url-list", "hide-on-click-modal", "onClose", "onSwitch"])) : createCommentVNode("v-if", true)
      ], 2112)) : createCommentVNode("v-if", true)
    ], 8, ["disabled"]))
  ], 6);
}

script.render = render;
script.__file = "packages/components/image/src/image.vue";

const ElImage = withInstall(script);

var image = '';

var imageViewer = '';

export { ElImage as E };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2Utdmlld2VyLjYyZGFhZTQwLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
