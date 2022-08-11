import { e as defineComponent, d as computed, g as openBlock, A as createElementBlock, k as createBaseVNode, L as normalizeClass, a9 as normalizeStyle, p as renderSlot, D as toDisplayString, R as normalizeProps, cD as guardReactiveProps, m as createCommentVNode, ba as inject, bg as elFormKey, bd as elFormItemKey, r as ref, w as watch, a as onMounted, n as nextTick, cL as isPromise, cM as isBool, cN as throwError, aB as debugWarn, bb as withKeys, K as withModifiers } from './index.f03006d5.js';

var script$1 = defineComponent({
  name: "ElProgress",
  props: {
    type: {
      type: String,
      default: "line",
      validator: (val) => ["line", "circle", "dashboard"].indexOf(val) > -1
    },
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: (val) => val >= 0 && val <= 100
    },
    status: {
      type: String,
      default: "",
      validator: (val) => ["", "success", "exception", "warning"].indexOf(val) > -1
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,
      default: 3
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    strokeLinecap: {
      type: String,
      default: "round"
    },
    textInside: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 126
    },
    showText: {
      type: Boolean,
      default: true
    },
    color: {
      type: [String, Array, Function],
      default: ""
    },
    format: {
      type: Function,
      default: (percentage) => `${percentage}%`
    }
  },
  setup(props) {
    const barStyle = computed(() => {
      return {
        width: `${props.percentage}%`,
        animationDuration: `${props.duration}s`,
        backgroundColor: getCurrentColor(props.percentage)
      };
    });
    const relativeStrokeWidth = computed(() => {
      return (props.strokeWidth / props.width * 100).toFixed(1);
    });
    const radius = computed(() => {
      if (props.type === "circle" || props.type === "dashboard") {
        return parseInt(`${50 - parseFloat(relativeStrokeWidth.value) / 2}`, 10);
      } else {
        return 0;
      }
    });
    const trackPath = computed(() => {
      const r = radius.value;
      const isDashboard = props.type === "dashboard";
      return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "-" : ""}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "" : "-"}${r * 2}
          `;
    });
    const perimeter = computed(() => {
      return 2 * Math.PI * radius.value;
    });
    const rate = computed(() => {
      return props.type === "dashboard" ? 0.75 : 1;
    });
    const strokeDashoffset = computed(() => {
      const offset = -1 * perimeter.value * (1 - rate.value) / 2;
      return `${offset}px`;
    });
    const trailPathStyle = computed(() => {
      return {
        strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
        strokeDashoffset: strokeDashoffset.value
      };
    });
    const circlePathStyle = computed(() => {
      return {
        strokeDasharray: `${perimeter.value * rate.value * (props.percentage / 100)}px, ${perimeter.value}px`,
        strokeDashoffset: strokeDashoffset.value,
        transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease"
      };
    });
    const stroke = computed(() => {
      let ret;
      if (props.color) {
        ret = getCurrentColor(props.percentage);
      } else {
        switch (props.status) {
          case "success":
            ret = "#13ce66";
            break;
          case "exception":
            ret = "#ff4949";
            break;
          case "warning":
            ret = "#e6a23c";
            break;
          default:
            ret = "#20a0ff";
        }
      }
      return ret;
    });
    const iconClass = computed(() => {
      if (props.status === "warning") {
        return "el-icon-warning";
      }
      if (props.type === "line") {
        return props.status === "success" ? "el-icon-circle-check" : "el-icon-circle-close";
      } else {
        return props.status === "success" ? "el-icon-check" : "el-icon-close";
      }
    });
    const progressTextSize = computed(() => {
      return props.type === "line" ? 12 + props.strokeWidth * 0.4 : props.width * 0.111111 + 2;
    });
    const content = computed(() => {
      return props.format(props.percentage);
    });
    const getCurrentColor = (percentage) => {
      var _a;
      const { color } = props;
      if (typeof color === "function") {
        return color(percentage);
      } else if (typeof color === "string") {
        return color;
      } else {
        const span = 100 / color.length;
        const seriesColors = color.map((seriesColor, index) => {
          if (typeof seriesColor === "string") {
            return {
              color: seriesColor,
              percentage: (index + 1) * span
            };
          }
          return seriesColor;
        });
        const colorArray = seriesColors.sort((a, b) => a.percentage - b.percentage);
        for (let i = 0; i < colorArray.length; i++) {
          if (colorArray[i].percentage > percentage) {
            return colorArray[i].color;
          }
        }
        return (_a = colorArray[colorArray.length - 1]) == null ? void 0 : _a.color;
      }
    };
    const slotData = computed(() => {
      return {
        percentage: props.percentage
      };
    });
    return {
      barStyle,
      relativeStrokeWidth,
      radius,
      trackPath,
      perimeter,
      rate,
      strokeDashoffset,
      trailPathStyle,
      circlePathStyle,
      stroke,
      iconClass,
      progressTextSize,
      content,
      getCurrentColor,
      slotData
    };
  }
});

const _hoisted_1$1 = ["aria-valuenow"];
const _hoisted_2$1 = {
  key: 0,
  class: "el-progress-bar"
};
const _hoisted_3$1 = {
  key: 0,
  class: "el-progress-bar__innerText"
};
const _hoisted_4$1 = { viewBox: "0 0 100 100" };
const _hoisted_5$1 = ["d", "stroke-width"];
const _hoisted_6$1 = ["d", "stroke", "stroke-linecap", "stroke-width"];
const _hoisted_7 = { key: 0 };
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-progress", [
      `el-progress--${_ctx.type}`,
      _ctx.status ? `is-${_ctx.status}` : "",
      {
        "el-progress--without-text": !_ctx.showText,
        "el-progress--text-inside": _ctx.textInside
      }
    ]]),
    role: "progressbar",
    "aria-valuenow": _ctx.percentage,
    "aria-valuemin": "0",
    "aria-valuemax": "100"
  }, [
    _ctx.type === "line" ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
      createBaseVNode("div", {
        class: "el-progress-bar__outer",
        style: normalizeStyle({ height: `${_ctx.strokeWidth}px` })
      }, [
        createBaseVNode("div", {
          class: normalizeClass([
            "el-progress-bar__inner",
            { "el-progress-bar__inner--indeterminate": _ctx.indeterminate }
          ]),
          style: normalizeStyle(_ctx.barStyle)
        }, [
          (_ctx.showText || _ctx.$slots.default) && _ctx.textInside ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
            renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(_ctx.slotData)), () => [
              createBaseVNode("span", null, toDisplayString(_ctx.content), 1)
            ])
          ])) : createCommentVNode("v-if", true)
        ], 6)
      ], 4)
    ])) : (openBlock(), createElementBlock("div", {
      key: 1,
      class: "el-progress-circle",
      style: normalizeStyle({ height: `${_ctx.width}px`, width: `${_ctx.width}px` })
    }, [
      (openBlock(), createElementBlock("svg", _hoisted_4$1, [
        createBaseVNode("path", {
          class: "el-progress-circle__track",
          d: _ctx.trackPath,
          stroke: "#e5e9f2",
          "stroke-width": _ctx.relativeStrokeWidth,
          fill: "none",
          style: normalizeStyle(_ctx.trailPathStyle)
        }, null, 12, _hoisted_5$1),
        createBaseVNode("path", {
          class: "el-progress-circle__path",
          d: _ctx.trackPath,
          stroke: _ctx.stroke,
          fill: "none",
          "stroke-linecap": _ctx.strokeLinecap,
          "stroke-width": _ctx.percentage ? _ctx.relativeStrokeWidth : 0,
          style: normalizeStyle(_ctx.circlePathStyle)
        }, null, 12, _hoisted_6$1)
      ]))
    ], 4)),
    (_ctx.showText || _ctx.$slots.default) && !_ctx.textInside ? (openBlock(), createElementBlock("div", {
      key: 2,
      class: "el-progress__text",
      style: normalizeStyle({ fontSize: `${_ctx.progressTextSize}px` })
    }, [
      renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(_ctx.slotData)), () => [
        !_ctx.status ? (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString(_ctx.content), 1)) : (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass(_ctx.iconClass)
        }, null, 2))
      ])
    ], 4)) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1$1);
}

script$1.render = render$1;
script$1.__file = "packages/components/progress/src/index.vue";

script$1.install = (app) => {
  app.component(script$1.name, script$1);
};
const _Progress = script$1;
const ElProgress = _Progress;

var script = defineComponent({
  name: "ElSwitch",
  props: {
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 40
    },
    activeIconClass: {
      type: String,
      default: ""
    },
    inactiveIconClass: {
      type: String,
      default: ""
    },
    activeText: {
      type: String,
      default: ""
    },
    inactiveText: {
      type: String,
      default: ""
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    borderColor: {
      type: String,
      default: ""
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    id: String,
    loading: {
      type: Boolean,
      default: false
    },
    beforeChange: Function
  },
  emits: ["update:modelValue", "change", "input"],
  setup(props, ctx) {
    const elForm = inject(elFormKey, {});
    const elFormItem = inject(elFormItemKey, {});
    const isModelValue = ref(props.modelValue !== false);
    const input = ref(null);
    const core = ref(null);
    const scope = "ElSwitch";
    watch(() => props.modelValue, () => {
      isModelValue.value = true;
    });
    watch(() => props.value, () => {
      isModelValue.value = false;
    });
    const actualValue = computed(() => {
      return isModelValue.value ? props.modelValue : props.value;
    });
    const checked = computed(() => {
      return actualValue.value === props.activeValue;
    });
    if (!~[props.activeValue, props.inactiveValue].indexOf(actualValue.value)) {
      ctx.emit("update:modelValue", props.inactiveValue);
      ctx.emit("change", props.inactiveValue);
      ctx.emit("input", props.inactiveValue);
    }
    watch(checked, () => {
      var _a;
      input.value.checked = checked.value;
      if (props.activeColor || props.inactiveColor) {
        setBackgroundColor();
      }
      if (props.validateEvent) {
        (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change");
      }
    });
    const switchDisabled = computed(() => {
      return props.disabled || props.loading || (elForm || {}).disabled;
    });
    const handleChange = () => {
      const val = checked.value ? props.inactiveValue : props.activeValue;
      ctx.emit("update:modelValue", val);
      ctx.emit("change", val);
      ctx.emit("input", val);
      nextTick(() => {
        input.value.checked = checked.value;
      });
    };
    const switchValue = () => {
      if (switchDisabled.value)
        return;
      const { beforeChange } = props;
      if (!beforeChange) {
        handleChange();
        return;
      }
      const shouldChange = beforeChange();
      const isExpectType = [isPromise(shouldChange), isBool(shouldChange)].some((i) => i);
      if (!isExpectType) {
        throwError(scope, "beforeChange must return type `Promise<boolean>` or `boolean`");
      }
      if (isPromise(shouldChange)) {
        shouldChange.then((result) => {
          if (result) {
            handleChange();
          }
        }).catch((e) => {
          debugWarn(scope, `some error occurred: ${e}`);
        });
      } else if (shouldChange) {
        handleChange();
      }
    };
    const setBackgroundColor = () => {
      const newColor = checked.value ? props.activeColor : props.inactiveColor;
      const coreEl = core.value;
      if (props.borderColor)
        coreEl.style.borderColor = props.borderColor;
      else if (!props.borderColor)
        coreEl.style.borderColor = newColor;
      coreEl.style.backgroundColor = newColor;
      coreEl.children[0].style.color = newColor;
    };
    const focus = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    };
    onMounted(() => {
      if (props.activeColor || props.inactiveColor || props.borderColor) {
        setBackgroundColor();
      }
      input.value.checked = checked.value;
    });
    return {
      input,
      core,
      switchDisabled,
      checked,
      handleChange,
      switchValue,
      focus
    };
  }
});

const _hoisted_1 = ["aria-checked", "aria-disabled"];
const _hoisted_2 = ["id", "name", "true-value", "false-value", "disabled"];
const _hoisted_3 = ["aria-hidden"];
const _hoisted_4 = { class: "el-switch__action" };
const _hoisted_5 = {
  key: 0,
  class: "el-icon-loading"
};
const _hoisted_6 = ["aria-hidden"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-switch", { "is-disabled": _ctx.switchDisabled, "is-checked": _ctx.checked }]),
    role: "switch",
    "aria-checked": _ctx.checked,
    "aria-disabled": _ctx.switchDisabled,
    onClick: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.switchValue && _ctx.switchValue(...args), ["prevent"]))
  }, [
    createBaseVNode("input", {
      id: _ctx.id,
      ref: "input",
      class: "el-switch__input",
      type: "checkbox",
      name: _ctx.name,
      "true-value": _ctx.activeValue,
      "false-value": _ctx.inactiveValue,
      disabled: _ctx.switchDisabled,
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
      onKeydown: _cache[1] || (_cache[1] = withKeys((...args) => _ctx.switchValue && _ctx.switchValue(...args), ["enter"]))
    }, null, 40, _hoisted_2),
    _ctx.inactiveIconClass || _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass([
        "el-switch__label",
        "el-switch__label--left",
        !_ctx.checked ? "is-active" : ""
      ])
    }, [
      _ctx.inactiveIconClass ? (openBlock(), createElementBlock("i", {
        key: 0,
        class: normalizeClass([_ctx.inactiveIconClass])
      }, null, 2)) : createCommentVNode("v-if", true),
      !_ctx.inactiveIconClass && _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
        key: 1,
        "aria-hidden": _ctx.checked
      }, toDisplayString(_ctx.inactiveText), 9, _hoisted_3)) : createCommentVNode("v-if", true)
    ], 2)) : createCommentVNode("v-if", true),
    createBaseVNode("span", {
      ref: "core",
      class: "el-switch__core",
      style: normalizeStyle({ width: (_ctx.width || 40) + "px" })
    }, [
      createBaseVNode("div", _hoisted_4, [
        _ctx.loading ? (openBlock(), createElementBlock("i", _hoisted_5)) : createCommentVNode("v-if", true)
      ])
    ], 4),
    _ctx.activeIconClass || _ctx.activeText ? (openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass([
        "el-switch__label",
        "el-switch__label--right",
        _ctx.checked ? "is-active" : ""
      ])
    }, [
      _ctx.activeIconClass ? (openBlock(), createElementBlock("i", {
        key: 0,
        class: normalizeClass([_ctx.activeIconClass])
      }, null, 2)) : createCommentVNode("v-if", true),
      !_ctx.activeIconClass && _ctx.activeText ? (openBlock(), createElementBlock("span", {
        key: 1,
        "aria-hidden": !_ctx.checked
      }, toDisplayString(_ctx.activeText), 9, _hoisted_6)) : createCommentVNode("v-if", true)
    ], 2)) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1);
}

script.render = render;
script.__file = "packages/components/switch/src/index.vue";

script.install = (app) => {
  app.component(script.name, script);
};
const _Switch = script;
const ElSwitch = _Switch;

var _switch = '';

var progress = '';

export { ElSwitch as E, ElProgress as a };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuYjM3MGE3ZGMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
