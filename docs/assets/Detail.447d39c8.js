var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __pow = Math.pow;
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
import { _ as _export_sfc, O as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, h as createVNode, j as createCommentVNode, F as Fragment, d as defineComponent, u as useI18n, W as useRoute, e as ref, L as computed, r as reactive, I as onMounted, ak as GetNftAuctionDetail, al as bsvStr, am as bsv, a7 as Decimal, an as resolveDirective, w as withCtx, g as unref, ac as ElImage, Y as metafileUrl, t as toDisplayString, P as createTextVNode, x as normalizeClass, $ as withModifiers, i as renderList, l as createBlock, ao as ToUser, a6 as ElSkeleton, Q as isRef, y as withDirectives, z as vModelText, R as ElDialog, p as pushScopeId, b as popScopeId, k as useStore, S as ElMessage, a2 as ElLoading, a3 as ElMessageBox, ag as router, ap as GetMyNftEligibility, aq as Langs, T as checkSdkStatus, ar as satoshis, a8 as confirmToSendMetaData, as as GetNftAuctionHistory, at as GetNftHolderList, N as NftApiCode } from "./index.1063289c.js";
import { _ as _imports_1$1 } from "./icon_cer_nft.f25ddb49.js";
import { _ as _imports_3 } from "./icon_casting.a29ffd9e.js";
import { D as DonateModalVue, _ as _imports_4 } from "./NftSkeleton.c784c379.js";
/* empty css                     *//* empty css                           *//* empty css                          */import { p as pagination } from "./config.c3ac3733.js";
import { N as NftOffSale } from "./offSale.8a5b3e0c.js";
import { N as NFTDetail } from "./nftDetail.d498c8f0.js";
import { b as buy } from "./buy.8537ea5b.js";
import { i as index } from "./vue-countdown.esm.8e79727e.js";
import { L as LoadMore } from "./LoadMore.917b373d.js";
import { C as CertTemp } from "./Cert.4dc6bf7f.js";
import { R as RecommentSwiper } from "./RecommentSwiper.704c9464.js";
import { _ as _sfc_main$2 } from "./MoreContentModal.89f570d2.js";
import { a as auctionConfirmSend } from "./auction.6e995f53.js";
import "./icon_cer.d2259267.js";
/* empty css                     */import "./homeSetData.92dc270f.js";
var _imports_1 = "/assets/list_icon_ins.e07bb3c5.svg";
var _imports_2 = "/assets/list_icon_link.bd234ca5.svg";
/*!
  * @soerenmartius/vue3-clipboard v0.1.2
  * (c) 2021 Soeren Martius
  * @license MIT
  */
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var clipboard = createCommonjsModule(function(module, exports) {
  /*!
   * clipboard.js v2.0.6
   * https://clipboardjs.com/
   * 
   * Licensed MIT © Zeno Rocha
   */
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, { enumerable: true, get: getter });
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports2, "__esModule", { value: true });
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = /* @__PURE__ */ Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = 6);
    }([
      function(module2, exports2) {
        function select(element) {
          var selectedText;
          if (element.nodeName === "SELECT") {
            element.focus();
            selectedText = element.value;
          } else if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
            var isReadOnly = element.hasAttribute("readonly");
            if (!isReadOnly) {
              element.setAttribute("readonly", "");
            }
            element.select();
            element.setSelectionRange(0, element.value.length);
            if (!isReadOnly) {
              element.removeAttribute("readonly");
            }
            selectedText = element.value;
          } else {
            if (element.hasAttribute("contenteditable")) {
              element.focus();
            }
            var selection = window.getSelection();
            var range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
            selectedText = selection.toString();
          }
          return selectedText;
        }
        module2.exports = select;
      },
      function(module2, exports2) {
        function E() {
        }
        E.prototype = {
          on: function(name, callback, ctx) {
            var e = this.e || (this.e = {});
            (e[name] || (e[name] = [])).push({
              fn: callback,
              ctx
            });
            return this;
          },
          once: function(name, callback, ctx) {
            var self2 = this;
            function listener() {
              self2.off(name, listener);
              callback.apply(ctx, arguments);
            }
            listener._ = callback;
            return this.on(name, listener, ctx);
          },
          emit: function(name) {
            var data = [].slice.call(arguments, 1);
            var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
            var i = 0;
            var len = evtArr.length;
            for (i; i < len; i++) {
              evtArr[i].fn.apply(evtArr[i].ctx, data);
            }
            return this;
          },
          off: function(name, callback) {
            var e = this.e || (this.e = {});
            var evts = e[name];
            var liveEvents = [];
            if (evts && callback) {
              for (var i = 0, len = evts.length; i < len; i++) {
                if (evts[i].fn !== callback && evts[i].fn._ !== callback)
                  liveEvents.push(evts[i]);
              }
            }
            liveEvents.length ? e[name] = liveEvents : delete e[name];
            return this;
          }
        };
        module2.exports = E;
        module2.exports.TinyEmitter = E;
      },
      function(module2, exports2, __webpack_require__) {
        var is = __webpack_require__(3);
        var delegate = __webpack_require__(4);
        function listen(target, type, callback) {
          if (!target && !type && !callback) {
            throw new Error("Missing required arguments");
          }
          if (!is.string(type)) {
            throw new TypeError("Second argument must be a String");
          }
          if (!is.fn(callback)) {
            throw new TypeError("Third argument must be a Function");
          }
          if (is.node(target)) {
            return listenNode(target, type, callback);
          } else if (is.nodeList(target)) {
            return listenNodeList(target, type, callback);
          } else if (is.string(target)) {
            return listenSelector(target, type, callback);
          } else {
            throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
          }
        }
        function listenNode(node, type, callback) {
          node.addEventListener(type, callback);
          return {
            destroy: function() {
              node.removeEventListener(type, callback);
            }
          };
        }
        function listenNodeList(nodeList, type, callback) {
          Array.prototype.forEach.call(nodeList, function(node) {
            node.addEventListener(type, callback);
          });
          return {
            destroy: function() {
              Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
              });
            }
          };
        }
        function listenSelector(selector, type, callback) {
          return delegate(document.body, selector, type, callback);
        }
        module2.exports = listen;
      },
      function(module2, exports2) {
        exports2.node = function(value) {
          return value !== void 0 && value instanceof HTMLElement && value.nodeType === 1;
        };
        exports2.nodeList = function(value) {
          var type = Object.prototype.toString.call(value);
          return value !== void 0 && (type === "[object NodeList]" || type === "[object HTMLCollection]") && "length" in value && (value.length === 0 || exports2.node(value[0]));
        };
        exports2.string = function(value) {
          return typeof value === "string" || value instanceof String;
        };
        exports2.fn = function(value) {
          var type = Object.prototype.toString.call(value);
          return type === "[object Function]";
        };
      },
      function(module2, exports2, __webpack_require__) {
        var closest = __webpack_require__(5);
        function _delegate(element, selector, type, callback, useCapture) {
          var listenerFn = listener.apply(this, arguments);
          element.addEventListener(type, listenerFn, useCapture);
          return {
            destroy: function() {
              element.removeEventListener(type, listenerFn, useCapture);
            }
          };
        }
        function delegate(elements, selector, type, callback, useCapture) {
          if (typeof elements.addEventListener === "function") {
            return _delegate.apply(null, arguments);
          }
          if (typeof type === "function") {
            return _delegate.bind(null, document).apply(null, arguments);
          }
          if (typeof elements === "string") {
            elements = document.querySelectorAll(elements);
          }
          return Array.prototype.map.call(elements, function(element) {
            return _delegate(element, selector, type, callback, useCapture);
          });
        }
        function listener(element, selector, type, callback) {
          return function(e) {
            e.delegateTarget = closest(e.target, selector);
            if (e.delegateTarget) {
              callback.call(element, e);
            }
          };
        }
        module2.exports = delegate;
      },
      function(module2, exports2) {
        var DOCUMENT_NODE_TYPE = 9;
        if (typeof Element !== "undefined" && !Element.prototype.matches) {
          var proto = Element.prototype;
          proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
        }
        function closest(element, selector) {
          while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
            if (typeof element.matches === "function" && element.matches(selector)) {
              return element;
            }
            element = element.parentNode;
          }
        }
        module2.exports = closest;
      },
      function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var src_select = __webpack_require__(0);
        var select_default = /* @__PURE__ */ __webpack_require__.n(src_select);
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var _createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        var clipboard_action_ClipboardAction = function() {
          function ClipboardAction(options) {
            _classCallCheck(this, ClipboardAction);
            this.resolveOptions(options);
            this.initSelection();
          }
          _createClass(ClipboardAction, [{
            key: "resolveOptions",
            value: function resolveOptions() {
              var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              this.action = options.action;
              this.container = options.container;
              this.emitter = options.emitter;
              this.target = options.target;
              this.text = options.text;
              this.trigger = options.trigger;
              this.selectedText = "";
            }
          }, {
            key: "initSelection",
            value: function initSelection() {
              if (this.text) {
                this.selectFake();
              } else if (this.target) {
                this.selectTarget();
              }
            }
          }, {
            key: "selectFake",
            value: function selectFake() {
              var _this = this;
              var isRTL = document.documentElement.getAttribute("dir") == "rtl";
              this.removeFake();
              this.fakeHandlerCallback = function() {
                return _this.removeFake();
              };
              this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || true;
              this.fakeElem = document.createElement("textarea");
              this.fakeElem.style.fontSize = "12pt";
              this.fakeElem.style.border = "0";
              this.fakeElem.style.padding = "0";
              this.fakeElem.style.margin = "0";
              this.fakeElem.style.position = "absolute";
              this.fakeElem.style[isRTL ? "right" : "left"] = "-9999px";
              var yPosition = window.pageYOffset || document.documentElement.scrollTop;
              this.fakeElem.style.top = yPosition + "px";
              this.fakeElem.setAttribute("readonly", "");
              this.fakeElem.value = this.text;
              this.container.appendChild(this.fakeElem);
              this.selectedText = select_default()(this.fakeElem);
              this.copyText();
            }
          }, {
            key: "removeFake",
            value: function removeFake() {
              if (this.fakeHandler) {
                this.container.removeEventListener("click", this.fakeHandlerCallback);
                this.fakeHandler = null;
                this.fakeHandlerCallback = null;
              }
              if (this.fakeElem) {
                this.container.removeChild(this.fakeElem);
                this.fakeElem = null;
              }
            }
          }, {
            key: "selectTarget",
            value: function selectTarget() {
              this.selectedText = select_default()(this.target);
              this.copyText();
            }
          }, {
            key: "copyText",
            value: function copyText() {
              var succeeded = void 0;
              try {
                succeeded = document.execCommand(this.action);
              } catch (err) {
                succeeded = false;
              }
              this.handleResult(succeeded);
            }
          }, {
            key: "handleResult",
            value: function handleResult(succeeded) {
              this.emitter.emit(succeeded ? "success" : "error", {
                action: this.action,
                text: this.selectedText,
                trigger: this.trigger,
                clearSelection: this.clearSelection.bind(this)
              });
            }
          }, {
            key: "clearSelection",
            value: function clearSelection() {
              if (this.trigger) {
                this.trigger.focus();
              }
              document.activeElement.blur();
              window.getSelection().removeAllRanges();
            }
          }, {
            key: "destroy",
            value: function destroy() {
              this.removeFake();
            }
          }, {
            key: "action",
            set: function set() {
              var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "copy";
              this._action = action;
              if (this._action !== "copy" && this._action !== "cut") {
                throw new Error('Invalid "action" value, use either "copy" or "cut"');
              }
            },
            get: function get() {
              return this._action;
            }
          }, {
            key: "target",
            set: function set(target) {
              if (target !== void 0) {
                if (target && (typeof target === "undefined" ? "undefined" : _typeof(target)) === "object" && target.nodeType === 1) {
                  if (this.action === "copy" && target.hasAttribute("disabled")) {
                    throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                  }
                  if (this.action === "cut" && (target.hasAttribute("readonly") || target.hasAttribute("disabled"))) {
                    throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                  }
                  this._target = target;
                } else {
                  throw new Error('Invalid "target" value, use a valid Element');
                }
              }
            },
            get: function get() {
              return this._target;
            }
          }]);
          return ClipboardAction;
        }();
        var clipboard_action = clipboard_action_ClipboardAction;
        var tiny_emitter = __webpack_require__(1);
        var tiny_emitter_default = /* @__PURE__ */ __webpack_require__.n(tiny_emitter);
        var listen = __webpack_require__(2);
        var listen_default = /* @__PURE__ */ __webpack_require__.n(listen);
        var clipboard_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        var clipboard_createClass = function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps)
              defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              defineProperties(Constructor, staticProps);
            return Constructor;
          };
        }();
        function clipboard_classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _possibleConstructorReturn(self2, call) {
          if (!self2) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return call && (typeof call === "object" || typeof call === "function") ? call : self2;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
          if (superClass)
            Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }
        var clipboard_Clipboard = function(_Emitter) {
          _inherits(Clipboard, _Emitter);
          function Clipboard(trigger, options) {
            clipboard_classCallCheck(this, Clipboard);
            var _this = _possibleConstructorReturn(this, (Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(this));
            _this.resolveOptions(options);
            _this.listenClick(trigger);
            return _this;
          }
          clipboard_createClass(Clipboard, [{
            key: "resolveOptions",
            value: function resolveOptions() {
              var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              this.action = typeof options.action === "function" ? options.action : this.defaultAction;
              this.target = typeof options.target === "function" ? options.target : this.defaultTarget;
              this.text = typeof options.text === "function" ? options.text : this.defaultText;
              this.container = clipboard_typeof(options.container) === "object" ? options.container : document.body;
            }
          }, {
            key: "listenClick",
            value: function listenClick(trigger) {
              var _this2 = this;
              this.listener = listen_default()(trigger, "click", function(e) {
                return _this2.onClick(e);
              });
            }
          }, {
            key: "onClick",
            value: function onClick(e) {
              var trigger = e.delegateTarget || e.currentTarget;
              if (this.clipboardAction) {
                this.clipboardAction = null;
              }
              this.clipboardAction = new clipboard_action({
                action: this.action(trigger),
                target: this.target(trigger),
                text: this.text(trigger),
                container: this.container,
                trigger,
                emitter: this
              });
            }
          }, {
            key: "defaultAction",
            value: function defaultAction(trigger) {
              return getAttributeValue("action", trigger);
            }
          }, {
            key: "defaultTarget",
            value: function defaultTarget(trigger) {
              var selector = getAttributeValue("target", trigger);
              if (selector) {
                return document.querySelector(selector);
              }
            }
          }, {
            key: "defaultText",
            value: function defaultText(trigger) {
              return getAttributeValue("text", trigger);
            }
          }, {
            key: "destroy",
            value: function destroy() {
              this.listener.destroy();
              if (this.clipboardAction) {
                this.clipboardAction.destroy();
                this.clipboardAction = null;
              }
            }
          }], [{
            key: "isSupported",
            value: function isSupported() {
              var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"];
              var actions = typeof action === "string" ? [action] : action;
              var support = !!document.queryCommandSupported;
              actions.forEach(function(action2) {
                support = support && !!document.queryCommandSupported(action2);
              });
              return support;
            }
          }]);
          return Clipboard;
        }(tiny_emitter_default.a);
        function getAttributeValue(suffix, element) {
          var attribute = "data-clipboard-" + suffix;
          if (!element.hasAttribute(attribute)) {
            return;
          }
          return element.getAttribute(attribute);
        }
        __webpack_exports__["default"] = clipboard_Clipboard;
      }
    ])["default"];
  });
});
var ClipboardJS = /* @__PURE__ */ getDefaultExportFromCjs(clipboard);
const toClipboard = (text, action = "copy") => {
  return new Promise((resolve, reject) => {
    const fakeElement = document.createElement("button");
    const clipboard2 = new ClipboardJS(fakeElement, {
      text: () => text,
      action: () => action
    });
    clipboard2.on("success", (e) => {
      clipboard2.destroy();
      resolve(e);
    });
    clipboard2.on("error", (e) => {
      clipboard2.destroy();
      reject(e);
    });
    {
      document.body.appendChild(fakeElement);
    }
    fakeElement.click();
    {
      document.body.removeChild(fakeElement);
    }
  });
};
var DetailSkeleton_scss_vue_type_style_index_0_src_a3fe4a76_scoped_true_lang = "";
const _sfc_main$1 = {};
const _hoisted_1$1 = { class: "top flex container" };
const _hoisted_2$1 = { class: "cont flex1 flex flex-v" };
const _hoisted_3$1 = { class: "name flex flex-align-center" };
const _hoisted_4$1 = { class: "creater-msg" };
const _hoisted_5$1 = { class: "author flex flex-align-center" };
const _hoisted_6$1 = { class: "author-msg flex1" };
const _hoisted_7$1 = { class: "cert" };
const _hoisted_8$1 = { class: "drsc flex1 flex flex-v" };
const _hoisted_9$1 = { class: "cont flex1" };
const _hoisted_10$1 = { class: "timeleft" };
const _hoisted_11$1 = { class: "operate-warp" };
const _hoisted_12$1 = { class: "bottom" };
const _hoisted_13$1 = { class: "bottom-warp" };
const _hoisted_14$1 = { class: "tab" };
const _hoisted_15$1 = { class: "tab-cont" };
const _hoisted_16$1 = {
  key: 0,
  class: "work-deail"
};
const _hoisted_17$1 = { class: "work-deail-section" };
const _hoisted_18$1 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_19$1 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_20$1 = { class: "work-detail-item flex flex-align-baseline" };
const _hoisted_21$1 = { class: "work-deail-section" };
const _hoisted_22$1 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_23$1 = { class: "work-detail-item flex flex flex-align-baseline" };
const _hoisted_24$1 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_25$1 = { class: "work-deail-section" };
const _hoisted_26$1 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_27$1 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_28$1 = { class: "work-deail-section" };
const _hoisted_29$1 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_30$1 = {
  key: 0,
  class: "work-detail-item flex flex-align-center"
};
const _hoisted_31$1 = {
  key: 1,
  class: "work-detail-item flex flex-align-center"
};
const _hoisted_32$1 = { class: "remark" };
const _hoisted_33$1 = { class: "remark-item" };
const _hoisted_34$1 = { class: "remark-item" };
const _hoisted_35$1 = { class: "remark-item" };
function _sfc_render(_ctx, _cache) {
  const _component_ElSkeletonItem = resolveComponent("ElSkeletonItem");
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("div", _hoisted_1$1, [
      createVNode(_component_ElSkeletonItem, {
        class: "cover",
        variant: "image"
      }),
      createBaseVNode("div", _hoisted_2$1, [
        createBaseVNode("div", _hoisted_3$1, [
          createVNode(_component_ElSkeletonItem, {
            class: "text",
            variant: "text",
            style: { "width": "80%" }
          })
        ]),
        createBaseVNode("div", _hoisted_4$1, [
          createBaseVNode("div", _hoisted_5$1, [
            createVNode(_component_ElSkeletonItem, {
              variant: "image",
              class: "avatar"
            }),
            createBaseVNode("div", _hoisted_6$1, [
              createVNode(_component_ElSkeletonItem, {
                class: "creater",
                variant: "text"
              }),
              createVNode(_component_ElSkeletonItem, {
                class: "metaid",
                variant: "text"
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_7$1, [
            createVNode(_component_ElSkeletonItem, {
              class: "text",
              variant: "text",
              style: { "width": "20%" }
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_8$1, [
          createVNode(_component_ElSkeletonItem, {
            class: "title",
            variant: "h1"
          }),
          createBaseVNode("div", _hoisted_9$1, [
            createVNode(_component_ElSkeletonItem, {
              variant: "text",
              style: { "width": "80%" }
            }),
            createVNode(_component_ElSkeletonItem, {
              variant: "text",
              style: { "width": "60%", "margin-top": "15px" }
            }),
            createVNode(_component_ElSkeletonItem, {
              variant: "text",
              style: { "width": "40%", "margin-top": "15px" }
            })
          ])
        ]),
        createBaseVNode("div", _hoisted_10$1, [
          createVNode(_component_ElSkeletonItem, { variant: "text" })
        ]),
        createBaseVNode("div", _hoisted_11$1, [
          createVNode(_component_ElSkeletonItem, {
            class: "btn btn-block",
            variant: "button"
          })
        ])
      ])
    ]),
    createBaseVNode("div", _hoisted_12$1, [
      createBaseVNode("div", _hoisted_13$1, [
        createBaseVNode("div", _hoisted_14$1, [
          createVNode(_component_ElSkeletonItem, { variant: "text" }),
          createVNode(_component_ElSkeletonItem, { variant: "text" })
        ]),
        createBaseVNode("div", _hoisted_15$1, [
          _ctx.tabIndex === 0 ? (openBlock(), createElementBlock("div", _hoisted_16$1, [
            createBaseVNode("div", _hoisted_17$1, [
              createBaseVNode("div", _hoisted_18$1, [
                createVNode(_component_ElSkeletonItem, {
                  class: "key",
                  variant: "text"
                }),
                createVNode(_component_ElSkeletonItem, {
                  class: "value flex1",
                  variant: "text"
                })
              ]),
              createBaseVNode("div", _hoisted_19$1, [
                createVNode(_component_ElSkeletonItem, {
                  class: "key",
                  variant: "text"
                }),
                createVNode(_component_ElSkeletonItem, {
                  class: "value flex1",
                  variant: "text"
                })
              ]),
              createBaseVNode("div", _hoisted_20$1, [
                createVNode(_component_ElSkeletonItem, {
                  class: "key",
                  variant: "text"
                }),
                createVNode(_component_ElSkeletonItem, {
                  class: "value flex1",
                  variant: "text"
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_21$1, [
              createBaseVNode("div", _hoisted_22$1, [
                createVNode(_component_ElSkeletonItem, {
                  class: "key",
                  variant: "text"
                }),
                createVNode(_component_ElSkeletonItem, {
                  class: "value flex1",
                  variant: "text"
                })
              ]),
              createBaseVNode("div", _hoisted_23$1, [
                createVNode(_component_ElSkeletonItem, {
                  class: "key",
                  variant: "text"
                }),
                createVNode(_component_ElSkeletonItem, {
                  class: "value flex1",
                  variant: "text"
                })
              ]),
              createBaseVNode("div", _hoisted_24$1, [
                createVNode(_component_ElSkeletonItem, {
                  class: "key",
                  variant: "text"
                }),
                createVNode(_component_ElSkeletonItem, {
                  class: "value flex1",
                  variant: "text"
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_25$1, [
              createBaseVNode("div", _hoisted_26$1, [
                createVNode(_component_ElSkeletonItem, {
                  class: "key",
                  variant: "text"
                }),
                createVNode(_component_ElSkeletonItem, {
                  class: "value flex1",
                  variant: "text"
                })
              ]),
              createBaseVNode("div", _hoisted_27$1, [
                createVNode(_component_ElSkeletonItem, {
                  class: "key",
                  variant: "text"
                }),
                createVNode(_component_ElSkeletonItem, {
                  class: "value flex1",
                  variant: "text"
                })
              ])
            ]),
            createBaseVNode("div", _hoisted_28$1, [
              createBaseVNode("div", _hoisted_29$1, [
                createVNode(_component_ElSkeletonItem, {
                  class: "key",
                  variant: "text"
                }),
                createVNode(_component_ElSkeletonItem, {
                  class: "value flex1",
                  variant: "text"
                })
              ]),
              _ctx.nft.val.type === "3" ? (openBlock(), createElementBlock("div", _hoisted_30$1, [
                createVNode(_component_ElSkeletonItem, {
                  class: "key",
                  variant: "text"
                }),
                createVNode(_component_ElSkeletonItem, {
                  class: "value flex1",
                  variant: "text"
                })
              ])) : (openBlock(), createElementBlock("div", _hoisted_31$1, [
                createVNode(_component_ElSkeletonItem, {
                  class: "key",
                  variant: "text"
                }),
                createVNode(_component_ElSkeletonItem, {
                  class: "value flex1",
                  variant: "text"
                })
              ]))
            ]),
            createBaseVNode("div", _hoisted_32$1, [
              createBaseVNode("div", _hoisted_33$1, [
                createVNode(_component_ElSkeletonItem, { variant: "text" })
              ]),
              createBaseVNode("div", _hoisted_34$1, [
                createVNode(_component_ElSkeletonItem, { variant: "text" })
              ]),
              createBaseVNode("div", _hoisted_35$1, [
                createVNode(_component_ElSkeletonItem, { variant: "text" })
              ])
            ])
          ])) : createCommentVNode("", true)
        ])
      ])
    ])
  ], 64);
}
var DetailSkeletonVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-a3fe4a76"]]);
var Detail_scss_vue_type_style_index_0_src_b593f0fe_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-b593f0fe"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "nft-detail" };
const _hoisted_2 = { class: "top" };
const _hoisted_3 = { class: "flex container" };
const _hoisted_4 = { class: "cont flex1 flex flex-v" };
const _hoisted_5 = { class: "name flex flex-align-center" };
const _hoisted_6 = { class: "text flex1" };
const _hoisted_7 = {
  key: 0,
  class: "series-cert flex flex-align-center"
};
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", { src: _imports_1$1 }, null, -1));
const _hoisted_9 = { class: "other-msg" };
const _hoisted_10 = ["onClick"];
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  t: "1641956579473",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "2145",
  width: "200",
  height: "200"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M933.43288889 350.09422222H657.18044445c14.10844445-41.07377778 19.11466667-83.85422222 21.9591111-125.15555555l0.11377778-1.70666667c3.41333333-49.26577778 8.192-116.84977778-33.67822222-164.97777778-19.22844445-22.07288889-52.33777778-38.00177778-84.42311111-40.61866667-27.87555555-2.27555555-53.93066667 7.96444445-73.61422222 28.78577778-30.37866667 32.19911111-36.97777778 73.84177778-42.78044445 110.47822222-2.16177778 13.42577778-4.20977778 26.16888889-7.168 37.20533334-12.288 45.056-31.40266667 81.00977778-56.77511111 106.95111111-29.12711111 29.696-68.94933333 48.35555555-104.67555555 49.152h-183.18222222c-38.79822222 0-70.31466667 31.51644445-70.31466667 70.31466667v472.51911111c0 38.79822222 31.51644445 70.31466667 70.31466667 70.31466667H835.12888889c37.31911111 0 67.92533333-29.12711111 70.20088889-65.87733334l98.304-473.20177778v-3.75466666c0.11377778-38.912-31.40266667-70.42844445-70.20088889-70.42844445z m-837.85955556 72.81777778h95.80088889v467.51288889H95.57333333V422.912z m737.16622222 466.26133333v1.25155556H263.05422222V422.912h21.16266667c2.84444445 0 5.46133333-0.34133333 8.07822222-0.91022222 50.40355555-5.12 101.83111111-30.49244445 140.62933334-70.20088889 34.13333333-34.816 59.27822222-81.46488889 74.97955555-138.69511111 4.096-14.90488889 6.48533333-30.15111111 8.87466667-45.056 4.55111111-28.78577778 8.87466667-56.09244445 23.89333333-71.90755556 5.68888889-6.03022222 11.15022222-6.37155555 14.67733333-6.144 13.08444445 1.024 28.55822222 7.96444445 35.38488889 15.81511111 22.07288889 25.37244445 18.65955555 73.50044445 16.04266667 112.18488889l-0.11377778 1.70666667c-3.52711111 51.08622222-10.58133333 104.33422222-37.31911111 147.456l0.11377778 0.11377778c-3.41333333 5.57511111-5.46133333 12.06044445-5.46133333 19.11466666 0 20.13866667 16.27022222 36.40888889 36.40888888 36.40888889h329.38666667l-97.05244445 466.37511111z",
    "p-id": "2146"
  })
], -1));
const _hoisted_12 = { class: "num" };
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  t: "1641956804197",
  class: "icon",
  viewBox: "0 0 1024 1024",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "p-id": "4896",
  width: "200",
  height: "200"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    d: "M512 128c212.064 0 384 171.936 384 384s-171.936 384-384 384S128 724.064 128 512 299.936 128 512 128z m0 64C335.264 192 192 335.264 192 512s143.264 320 320 320 320-143.264 320-320S688.736 192 512 192z m38.88 120c43.072 0 77.056 8.448 101.792 25.568 25.44 17.6 38.336 42.496 38.336 73.888 0 36.128-19.104 63.296-56.128 80.992 8.64 3.2 16.256 6.624 22.88 10.24 35.904 19.136 54.24 48.512 54.24 87.136 0 37.44-15.904 67.616-47.232 89.76-30.688 21.664-71.36 32.416-121.92 32.416-15.328 0-34.144-0.704-56.416-2.112l-28.352-1.856a746.496 746.496 0 0 0-42.4-1.728c-10.816 0-20.992 0.576-30.528 1.664l-38.784 4.032c-21.632-0.48-34.368-10.272-34.368-28.48 0-16.608 10.048-26.144 27.136-26.144 17.856 1.92 27.712 2.848 29.632 2.848 16 0 23.488-10.016 23.488-34.048v-228.352c0-24.416-7.52-34.592-23.488-34.592-2.176 0-27.104 2.816-29.632 2.816-17.088 0-27.136-9.536-27.136-26.176 0-18.4 13.536-27.872 36.384-27.872l39.36 4.032c4.544 0.64 15.936 1.152 34.112 1.664 15.392 0 37.44-1.152 66.048-3.392a809.024 809.024 0 0 1 62.976-2.304z m-12.32 211.424h-51.264c-19.168 0-28.992 3.488-30.72 8.32-1.28 3.52-2.016 10.08-2.016 19.456v63.04c0 22.08 3.84 34.88 9.824 38.688 7.264 4.544 31.168 7.296 69.856 7.296 73.024 0 107.424-23.68 107.424-71.552 0-43.52-32.928-65.28-103.104-65.28z m0-160.192l-15.424 0.128c-31.552 0.544-51.456 2.816-58.432 6.4-6.368 3.2-10.144 13.12-10.144 30.912v35.2c0 18.144 1.76 29.376 4.032 32.128 1.824 2.208 10.88 4.16 26.24 4.16h34.56c69.024 0 101.28-19.264 101.28-57.28 0-34.496-25.92-51.648-82.112-51.648z",
    "p-id": "4897"
  })
], -1));
const _hoisted_14 = { class: "num" };
const _hoisted_15 = { class: "creater-msg flex flex-align-center" };
const _hoisted_16 = { class: "author flex1 flex flex-align-center" };
const _hoisted_17 = { class: "author-msg flex1" };
const _hoisted_18 = { class: "creater" };
const _hoisted_19 = {
  key: 0,
  class: "metaid"
};
const _hoisted_20 = { class: "drsc flex1 flex flex-v" };
const _hoisted_21 = { class: "drsc-item flex" };
const _hoisted_22 = { class: "name" };
const _hoisted_23 = { class: "value username flex1" };
const _hoisted_24 = { class: "drsc-item flex" };
const _hoisted_25 = { class: "name" };
const _hoisted_26 = { class: "value flex1" };
const _hoisted_27 = { class: "putAway-msg flex flex-align-center" };
const _hoisted_28 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "timeleft flex1" }, null, -1));
const _hoisted_29 = {
  key: 0,
  class: "my-sell-price"
};
const _hoisted_30 = {
  key: 1,
  class: "auction-msg flex flex-align-center"
};
const _hoisted_31 = { class: "auction-msg-item flex1" };
const _hoisted_32 = { class: "title" };
const _hoisted_33 = {
  key: 0,
  class: "cont"
};
const _hoisted_34 = {
  key: 0,
  class: "auction-msg-item"
};
const _hoisted_35 = { class: "title" };
const _hoisted_36 = { class: "cont" };
const _hoisted_37 = { class: "count-down" };
const _hoisted_38 = { class: "operate-warp flex flex-align-center" };
const _hoisted_39 = {
  key: 0,
  class: "flex1"
};
const _hoisted_40 = { class: "auctionFailTips" };
const _hoisted_41 = {
  key: 1,
  class: "btn btn-block btn-gray flex1 flex flex-align-center flex-pack-center"
};
const _hoisted_42 = {
  key: 0,
  class: "flex flex-align-center putAway-warp flex1"
};
const _hoisted_43 = {
  key: 2,
  class: "buy-fee-tips"
};
const _hoisted_44 = { class: "bottom" };
const _hoisted_45 = { class: "bottom-warp" };
const _hoisted_46 = { class: "tab" };
const _hoisted_47 = ["onClick"];
const _hoisted_48 = { class: "tab-cont" };
const _hoisted_49 = {
  key: 0,
  class: "work-deail"
};
const _hoisted_50 = { class: "work-deail-section" };
const _hoisted_51 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_52 = { class: "key" };
const _hoisted_53 = { class: "value flex1" };
const _hoisted_54 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_55 = { class: "key" };
const _hoisted_56 = { class: "value flex1" };
const _hoisted_57 = /* @__PURE__ */ createTextVNode("--");
const _hoisted_58 = {
  key: 0,
  class: "work-detail-item flex flex-align-center"
};
const _hoisted_59 = { class: "key" };
const _hoisted_60 = { class: "value flex1" };
const _hoisted_61 = ["href"];
const _hoisted_62 = { class: "work-detail-item flex flex-align-baseline" };
const _hoisted_63 = { class: "key" };
const _hoisted_64 = { class: "value flex1" };
const _hoisted_65 = { class: "work-deail-section" };
const _hoisted_66 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_67 = { class: "key" };
const _hoisted_68 = { class: "value flex1" };
const _hoisted_69 = {
  key: 0,
  class: "work-detail-item flex flex flex-align-baseline"
};
const _hoisted_70 = { class: "key" };
const _hoisted_71 = { class: "value flex1 nowrap" };
const _hoisted_72 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_73 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "key" }, "TokenID\uFF1A", -1));
const _hoisted_74 = { class: "value flex1 nowrap" };
const _hoisted_75 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_76 = { class: "key" };
const _hoisted_77 = { class: "value flex1 nowrap" };
const _hoisted_78 = { class: "work-deail-section" };
const _hoisted_79 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_80 = { class: "key" };
const _hoisted_81 = { class: "value flex1" };
const _hoisted_82 = { class: "author flex flex-align-center" };
const _hoisted_83 = { class: "author-msg flex1" };
const _hoisted_84 = { class: "creater" };
const _hoisted_85 = {
  key: 0,
  class: "metaid"
};
const _hoisted_86 = { class: "work-detail-item flex flex-align-center" };
const _hoisted_87 = { class: "key" };
const _hoisted_88 = { class: "value flex1" };
const _hoisted_89 = { class: "author flex flex-align-center" };
const _hoisted_90 = { class: "author-msg flex1" };
const _hoisted_91 = { class: "creater" };
const _hoisted_92 = {
  key: 0,
  class: "metaid"
};
const _hoisted_93 = { class: "remark" };
const _hoisted_94 = { class: "remark-item" };
const _hoisted_95 = { class: "remark-item" };
const _hoisted_96 = { class: "remark-item" };
const _hoisted_97 = {
  key: 1,
  class: "haved-record"
};
const _hoisted_98 = { class: "tr th flex flex-align-center" };
const _hoisted_99 = { class: "td flex1" };
const _hoisted_100 = { class: "td flex1" };
const _hoisted_101 = { class: "td flex1" };
const _hoisted_102 = { class: "td price flex1" };
const _hoisted_103 = {
  key: 0,
  class: "tobe",
  src: _imports_1
};
const _hoisted_104 = ["onClick"];
const _hoisted_105 = ["src", "alt"];
const _hoisted_106 = { class: "name" };
const _hoisted_107 = { class: "td role flex1 flex flex-align-center" };
const _hoisted_108 = { class: "td time flex1" };
const _hoisted_109 = { class: "td price flex1" };
const _hoisted_110 = ["onClick"];
const _hoisted_111 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", { src: _imports_2 }, null, -1));
const _hoisted_112 = [
  _hoisted_111
];
const _hoisted_113 = {
  key: 1,
  class: "tr flex flex-align-center"
};
const _hoisted_114 = {
  key: 0,
  class: "tobe",
  src: _imports_1
};
const _hoisted_115 = ["src", "alt"];
const _hoisted_116 = { class: "name" };
const _hoisted_117 = { class: "td role flex1 flex flex-align-center" };
const _hoisted_118 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", { src: _imports_3 }, null, -1));
const _hoisted_119 = { class: "td time flex1" };
const _hoisted_120 = { class: "td price flex1" };
const _hoisted_121 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", { src: _imports_2 }, null, -1));
const _hoisted_122 = [
  _hoisted_121
];
const _hoisted_123 = {
  key: 2,
  class: "historical-bid"
};
const _hoisted_124 = { class: "author flex1 flex flex-align-center" };
const _hoisted_125 = { class: "author-msg flex1" };
const _hoisted_126 = { class: "creater" };
const _hoisted_127 = {
  key: 0,
  class: "metaid"
};
const _hoisted_128 = { class: "auction-price" };
const _hoisted_129 = { class: "price flex flex-align-center" };
const _hoisted_130 = {
  key: 0,
  class: "btn btn-min"
};
const _hoisted_131 = { class: "title" };
const _hoisted_132 = { class: "amount" };
const _hoisted_133 = { class: "time" };
const _hoisted_134 = { class: "historical-bid-item flex flex-align-center" };
const _hoisted_135 = { class: "author flex1 flex flex-align-center" };
const _hoisted_136 = { class: "author-msg flex1" };
const _hoisted_137 = { class: "creater" };
const _hoisted_138 = {
  key: 0,
  class: "metaid"
};
const _hoisted_139 = { class: "auction-price" };
const _hoisted_140 = { class: "price flex flex-align-center" };
const _hoisted_141 = { class: "title" };
const _hoisted_142 = { class: "amount" };
const _hoisted_143 = { class: "auction-modal" };
const _hoisted_144 = { class: "title" };
const _hoisted_145 = { class: "msg-list" };
const _hoisted_146 = { class: "msg-item flex flex-align-center" };
const _hoisted_147 = { class: "key flex1" };
const _hoisted_148 = {
  key: 0,
  class: "value"
};
const _hoisted_149 = { class: "msg-item flex flex-align-center" };
const _hoisted_150 = { class: "key flex1" };
const _hoisted_151 = {
  key: 0,
  class: "value"
};
const _hoisted_152 = { class: "cont flex flex-align-center" };
const _hoisted_153 = ["min", "setp"];
const _hoisted_154 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "BSV", -1));
const _hoisted_155 = { class: "msg-list haved-bsv" };
const _hoisted_156 = { class: "msg-item flex flex-align-center" };
const _hoisted_157 = { class: "key flex1" };
const _hoisted_158 = { class: "value" };
const _hoisted_159 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", { src: _imports_4 }, null, -1));
const _hoisted_160 = { class: "auctionFailTips" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const i18n = useI18n();
    const route = useRoute();
    const store = useStore();
    new Date().getTime();
    const tabs = [
      { name: i18n.t("workdetail"), key: "workdetail" },
      { name: i18n.t("possessionrecord"), key: "possessionrecord" }
    ];
    let tabIndex = ref(0);
    let isShowSkeleton = ref(true);
    let isShowDrscDetail = ref(false);
    let isShowAuctionModal = ref(false);
    const auctionBtnClassGray = computed(() => {
      if (nft.val.auctionStatus === 2) {
        return false;
      } else if (nft.val.auctionStatus === 3) {
        if (store.state.userInfo && store.state.userInfo.metaId === nft.val.ownerMetaId) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    });
    const balance = ref(0);
    const getBalanceLoading = ref(true);
    const auctionRecords = reactive([]);
    const ownerHistoryPagination = reactive(__spreadValues({}, pagination));
    const nft = reactive({
      val: {}
    });
    const auctionPrice = ref(0);
    const minActionPrice = ref(0);
    const isShowDonateModal = ref(false);
    let isCanBuy = ref(true);
    function getDetail() {
      return new Promise((resolve) => __async(this, null, function* () {
        const _nft = yield NFTDetail(typeof route.params.genesisId === "string" ? route.params.genesisId : "", typeof route.params.codehash === "string" ? route.params.codehash : "", typeof route.params.tokenIndex === "string" ? route.params.tokenIndex : "").catch(() => isShowSkeleton.value = false);
        if (_nft && typeof _nft !== "boolean") {
          nft.val = _nft;
          if (nft.val.nftCurrentAuctionCreateTxId && nft.val.nftCurrentAuctionCreateTxId !== "") {
            nft.val.isAuction = true;
            const _tabIndex = tabs.findIndex((item) => item.key === "historicalBid");
            if (_tabIndex === -1) {
              tabs.push({ name: i18n.t("historicalBid"), key: "historicalBid" });
            }
            tabIndex.value = 2;
            const res = yield GetNftAuctionDetail(nft.val.nftCurrentAuctionCreateTxId);
            if (res.code === 0) {
              nft.val.auctionId = res.data.nftAuctionId;
              nft.val.startPrice = bsvStr(res.data.startingPrice);
              nft.val.amount = bsv(res.data.startingPriceInt);
              nft.val.currentPrice = res.data.currentBidPrice === "" || res.data.currentBidPrice === "0" ? bsvStr(res.data.startingPrice) : bsvStr(res.data.currentBidPrice);
              nft.val.minGapPrice = new Decimal(nft.val.currentPrice).mul(0.1).toFixed(8).toString();
              if (new Decimal(nft.val.minGapPrice).toNumber() < 1e-5) {
                nft.val.minGapPrice = "0.00001";
              }
              nft.val.auctionTime = res.data.endTimeStamp - new Date().getTime();
              nft.val.auctionStatus = res.data.currentAuctionState;
              nft.val.update_time = res.data.timestamp;
              auctionPrice.value = new Decimal(nft.val.currentPrice).plus(nft.val.minGapPrice).toNumber();
              minActionPrice.value = auctionPrice.value;
              getNftAuctionHistorys();
            }
          }
          isShowSkeleton.value = false;
        }
        resolve();
      }));
    }
    const records = reactive([]);
    const ownerRecord = reactive({
      val: null
    });
    const issueRecord = reactive({
      val: null
    });
    function auctionCountDownFinish() {
      if (nft.val.auctionStatus === 2) {
        nft.val.auctionStatus = 3;
      }
    }
    function transformSlotProps(props) {
      const formattedProps = {};
      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });
      return formattedProps;
    }
    function getUserLabel() {
      let userLabel = nft.val.putAway ? i18n.t("seller") : i18n.t("creater");
      if (nft.val.sellState === 0) {
        userLabel = i18n.t("holder");
      }
      return userLabel;
    }
    function getNftDescLabel() {
      let desc_label_pre = nft.val.putAway ? i18n.t("seller") : i18n.t("creater");
      let desc_label = desc_label_pre + i18n.t("theIntro");
      if (nft.val.sellState === 0) {
        desc_label = i18n.t("holderDescLabel");
      }
      return desc_label;
    }
    function changeTabIndex(index2) {
      if (tabIndex.value === index2) {
        return;
      }
      tabIndex.value = index2;
    }
    function copy(value) {
      toClipboard(value).then(() => {
        ElMessage.success(i18n.t("copysuccess"));
      }).catch(() => {
        ElMessage.success(i18n.t("copyerror"));
      });
    }
    ref(0);
    ref(0);
    ref(0);
    ref(0);
    const NFTMainMsgDesc = computed(() => {
      return nft.val.isAuction ? nft.val.describe : nft.val.putAway ? nft.val.sellDesc : nft.val.describe;
    });
    function offSale() {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        customClass: "full-loading"
      });
      ElMessageBox.confirm(`${i18n.t("offsaleConfirm")} ${nft.val.nftName} ?`, i18n.t("niceWarning"), {
        confirmButtonText: i18n.t("confirm"),
        cancelButtonText: i18n.t("cancel"),
        closeOnClickModal: false
      }).then(() => __async(this, null, function* () {
        NftOffSale(nft.val, loading).then(() => {
          loading.close();
        }).catch(() => {
          loading.close();
        });
      })).catch(() => loading.close());
    }
    function buy$1() {
      return __async(this, null, function* () {
        const loading = ElLoading.service({
          lock: true,
          text: "Loading",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)",
          customClass: "full-loading"
        });
        buy(nft.val).then(() => {
          nft.val.ownerMetaId = store.state.userInfo.metaId;
          nft.val.ownerName = store.state.userInfo.name;
          nft.val.putAway = false;
          ElMessage.success(i18n.t("buySuccess"));
          loading.close();
          router.replace({
            name: "nftSuccess",
            params: {
              genesisId: nft.val.genesis,
              tokenIndex: nft.val.tokenIndex,
              codehash: nft.val.codeHash
            },
            query: {
              type: "buyed"
            }
          });
        }).catch((res) => {
          loading.close();
          if (res)
            nftNotCanBuy(res);
        });
      });
    }
    function toWhatsonchain(txId) {
      window.open(`https://whatsonchain.com/tx/${txId}`);
    }
    function nftNotCanBuy(res) {
      if (res.code === 204 && res.data && res.data.message === "The NFT is not for sale because  the corresponding SellUtxo cannot be found." || res.data.message === "258: txn-mempool-conflict") {
        ElMessage.error(i18n.t("nftNotCanBuy"));
        router.back();
      }
    }
    function toSale() {
      return __async(this, null, function* () {
        const res = yield GetMyNftEligibility({
          MetaId: store.state.userInfo.metaId,
          IssueMetaId: nft.val.foundryMetaId,
          lang: i18n.locale.value === "en" ? Langs.EN : Langs.CN
        });
        if (res.code !== 0) {
          ElMessage.error(res.data);
          return;
        }
        router.push({
          name: "sale",
          params: {
            genesisId: nft.val.genesis,
            codehash: nft.val.codeHash,
            tokenIndex: nft.val.tokenIndex
          }
        });
      });
    }
    function getBalance() {
      return __async(this, null, function* () {
        var _a;
        const res = yield (_a = store.state.sdk) == null ? void 0 : _a.getBalance();
        if ((res == null ? void 0 : res.code) === 200) {
          balance.value = res.data.bsv;
          getBalanceLoading.value = false;
        }
      });
    }
    function donateSuccess(params) {
      ElMessage.success(i18n.t("donateSuccess"));
      nft.val.nftHasDonate = true;
      nft.val.nftDonateValue += 1e3;
      isShowDonateModal.value = false;
    }
    function onAuctionPriceChange() {
      if (new Decimal(auctionPrice.value).toNumber() < new Decimal(minActionPrice.value).toNumber()) {
        auctionPrice.value = minActionPrice.value;
      }
    }
    function toWallet() {
      window.open("https://www.showmoney.app");
    }
    function openAuctionModal() {
      return __async(this, null, function* () {
        if (nft.val.auctionStatus === 3 && store.state.userInfo && store.state.userInfo.metaId === nft.val.ownerMetaId) {
          const loading = ElLoading.service({
            lock: true,
            text: "Loading",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)",
            customClass: "full-loading"
          });
          const params = {
            nft: {
              codehash: nft.val.codeHash,
              genesis: nft.val.genesis,
              genesisTxid: nft.val.genesisTxId,
              tokenIndex: nft.val.tokenIndex,
              sensibleId: nft.val.sensibleId
            },
            nftAuctionId: nft.val.nftCurrentAuctionCreateTxId,
            useFeeb: 0.5
          };
          const result = yield yield auctionConfirmSend(params).catch((error) => {
            if (error)
              ElMessage.error(JSON.stringify(error));
            loading.close();
          });
          if (result) {
            setTimeout(() => {
              loading.close();
              getDetail();
            }, 2e3);
          }
        }
        if (nft.val.auctionStatus !== 2)
          return;
        yield checkSdkStatus();
        isShowAuctionModal.value = true;
        getBalance();
      });
    }
    function bid() {
      return __async(this, null, function* () {
        var _a, _b;
        if (store.state.sdk.isApp) {
          ElMessage.warning(i18n.t("appNotBid"));
          return;
        }
        if (new Decimal(balance.value).toNumber() < new Decimal(auctionPrice.value).toNumber())
          return;
        const loading = ElLoading.service({
          lock: true,
          text: "Loading",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)",
          customClass: "full-loading"
        });
        try {
          const params = {
            nft: {
              codehash: nft.val.codeHash,
              genesis: nft.val.genesis,
              genesisTxid: nft.val.genesisTxId,
              tokenIndex: nft.val.tokenIndex,
              sensibleId: nft.val.sensibleId
            },
            bsvBidPrice: satoshis(auctionPrice.value),
            nftAuctionId: nft.val.nftCurrentAuctionCreateTxId,
            useFeeb: 0.5,
            lastBidPrice: nft.val.currentPrice
          };
          const res = yield (_a = store.state.sdk) == null ? void 0 : _a.nftAuctionBid(__spreadProps(__spreadValues({}, params), {
            checkOnly: true
          }));
          if ((res == null ? void 0 : res.code) === 200) {
            const usedAmount = new Decimal(Math.abs(res.data.amount)).toNumber();
            const result = yield confirmToSendMetaData(usedAmount);
            if (result) {
              const response = yield (_b = store.state.sdk) == null ? void 0 : _b.nftAuctionBid(params);
              if (response && (response == null ? void 0 : response.code) === 200) {
                ElMessage.success(i18n.t("bidSuccess"));
                nft.val.currentPrice = new Decimal(auctionPrice.value).toString();
                const min = new Decimal(auctionPrice.value).mul(0.1).toFixed(8);
                nft.val.minGapPrice = min.toString();
                if (new Decimal(nft.val.minGapPrice).toNumber() < 1e-5) {
                  nft.val.minGapPrice = "0.00001";
                }
                minActionPrice.value = new Decimal(nft.val.currentPrice).plus(nft.val.minGapPrice).toNumber();
                auctionPrice.value = minActionPrice.value;
                isShowAuctionModal.value = false;
                auctionRecords.unshift({
                  bidPrice: satoshis(nft.val.currentPrice).toString(),
                  bidPriceInt: satoshis(nft.val.currentPrice),
                  chargeUnit: "bsv",
                  codehash: nft.val.codeHash,
                  genesis: nft.val.genesis,
                  genesisTxId: nft.val.genesisTxId,
                  issuerMetaId: nft.val.foundryMetaId,
                  issuerMetaTxId: nft.val.issueMetaTxId,
                  metaId: store.state.userInfo.metaId,
                  metanetId: "",
                  nftAuctionId: response.data.txId,
                  nftHash: "",
                  tokenIndex: nft.val.tokenIndex,
                  txId: response.data.txId,
                  zeroAddress: store.state.userInfo.address,
                  timestamp: new Date().getTime(),
                  userName: store.state.userInfo.name
                });
                loading.close();
              }
            }
          }
        } catch (error) {
          getDetail();
          ElMessage.error(i18n.t("bidFail"));
          if (loading)
            loading.close();
        }
      });
    }
    function getNftAuctionHistorys() {
      return __async(this, null, function* () {
        const res = yield GetNftAuctionHistory({
          auctionTxId: nft.val.nftCurrentAuctionCreateTxId,
          page: 1,
          pageSize: 99
        });
        if (res.code === 0) {
          auctionRecords.length = 0;
          auctionRecords.push(...res.data.results.items);
        }
      });
    }
    function getNftHolderList(isCover = false) {
      return __async(this, null, function* () {
        return new Promise((resolve) => __async(this, null, function* () {
          const res = yield GetNftHolderList({
            genesis: typeof route.params.genesisId === "string" ? route.params.genesisId : "",
            codehash: typeof route.params.codehash === "string" ? route.params.codehash : "",
            tokenIndex: typeof route.params.tokenIndex === "string" ? route.params.tokenIndex : "",
            page: ownerHistoryPagination.page.toString(),
            pageSize: ownerHistoryPagination.pageSize.toString()
          });
          if (res && res.code === NftApiCode.success) {
            if (isCover) {
              records.length = 0;
            }
            records.push(...res.data.results.items.holderList);
            ownerRecord.val = res.data.results.items.owner;
            issueRecord.val = res.data.results.items.issuer;
            const totalPages = Math.ceil(res.data.total / ownerHistoryPagination.pageSize);
            if (totalPages <= ownerHistoryPagination.page) {
              ownerHistoryPagination.nothing = true;
            }
          }
        }));
      });
    }
    function getMoreRecords() {
      ownerHistoryPagination.loading = true;
      ownerHistoryPagination.page++;
      getNftHolderList().then(() => {
        ownerHistoryPagination.loading = false;
      });
    }
    function payLike() {
      return __async(this, null, function* () {
        const res = yield store.state.sdk.addPayLikeProtocol({
          receiveAddress: nft.val.ownerAddress,
          txId: nft.val.issueMetaTxId
        });
        if (res.code === 200) {
          nft.val.nftLikeCount++;
          nft.val.nftHasLike = true;
          ElMessage.success(i18n.t("payLikeSuccess"));
        }
      });
    }
    onMounted(() => {
      if (route.params.genesisId && route.params.codehash && route.params.tokenIndex) {
        getDetail();
        getNftHolderList();
      }
    });
    return (_ctx, _cache) => {
      const _component_UserAvatar = resolveComponent("UserAvatar");
      const _directive_loading = resolveDirective("loading");
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createVNode(unref(ElSkeleton), {
            loading: unref(isShowSkeleton),
            animated: ""
          }, {
            template: withCtx(() => [
              createVNode(DetailSkeletonVue)
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_2, [
                createBaseVNode("div", _hoisted_3, [
                  createVNode(unref(ElImage), {
                    class: "cover flex flex-align-center flex-pack-center",
                    fit: "contain",
                    alt: unref(nft).val.nftName,
                    src: unref(metafileUrl)(unref(nft).val.coverUrl, 470),
                    "preview-src-list": [unref(metafileUrl)(unref(nft).val.coverUrl, 800)]
                  }, null, 8, ["alt", "src", "preview-src-list"]),
                  createBaseVNode("div", _hoisted_4, [
                    createBaseVNode("div", _hoisted_5, [
                      createBaseVNode("span", _hoisted_6, toDisplayString(unref(nft).val.nftName), 1)
                    ]),
                    unref(nft).val.nftGenesisCertificationType ? (openBlock(), createElementBlock("div", _hoisted_7, [
                      _hoisted_8,
                      createTextVNode(" " + toDisplayString(_ctx.$t("beCertedSeries")) + "\uFF1A" + toDisplayString(_ctx.$t(unref(nft).val.nftGenesisCertificationName)), 1)
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("a", {
                        class: normalizeClass(["other-msg-item", { active: unref(nft).val.nftHasLike }]),
                        onClick: withModifiers(payLike, ["stop"])
                      }, [
                        _hoisted_11,
                        createBaseVNode("span", _hoisted_12, toDisplayString(unref(nft).val.nftLikeCount), 1)
                      ], 10, _hoisted_10),
                      createBaseVNode("a", {
                        class: normalizeClass(["other-msg-item", { active: unref(nft).val.nftHasDonate }]),
                        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => isShowDonateModal.value = true, ["stop"]))
                      }, [
                        _hoisted_13,
                        createBaseVNode("span", _hoisted_14, toDisplayString(unref(nft).val.nftDonateValue), 1)
                      ], 2)
                    ]),
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("div", _hoisted_16, [
                        createVNode(_component_UserAvatar, {
                          class: "avatar",
                          metaId: unref(nft).val.foundryMetaId,
                          hasmask: unref(nft).val.issueUserAvatarType === "nft-metabot"
                        }, null, 8, ["metaId", "hasmask"]),
                        createBaseVNode("div", _hoisted_17, [
                          createBaseVNode("div", _hoisted_18, toDisplayString(_ctx.$t("creater")) + ": " + toDisplayString(unref(nft).val.foundryName), 1),
                          unref(nft).val.foundryMetaId ? (openBlock(), createElementBlock("div", _hoisted_19, " MetaID:" + toDisplayString(unref(nft).val.foundryMetaId.slice(0, 6)), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode(CertTemp, {
                        metaId: unref(nft).val.foundryMetaId,
                        certed: unref(nft).val.nftCertificationType === 1
                      }, null, 8, ["metaId", "certed"])
                    ]),
                    createBaseVNode("div", _hoisted_20, [
                      createBaseVNode("div", _hoisted_21, [
                        createBaseVNode("span", _hoisted_22, toDisplayString(getUserLabel()), 1),
                        createBaseVNode("span", _hoisted_23, toDisplayString(unref(nft).val.ownerName), 1)
                      ]),
                      createBaseVNode("div", _hoisted_24, [
                        createBaseVNode("span", _hoisted_25, toDisplayString(getNftDescLabel()), 1),
                        createBaseVNode("span", _hoisted_26, toDisplayString(unref(nft).val.isAuction ? unref(nft).val.auctionDrsc : unref(nft).val.putAway ? unref(nft).val.sellDesc : unref(nft).val.describe), 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_27, [
                      _hoisted_28,
                      unref(nft).val.putAway && unref(store).state.userInfo && unref(store).state.userInfo.metaId === unref(nft).val.ownerMetaId ? (openBlock(), createElementBlock("div", _hoisted_29, toDisplayString(_ctx.$t("sellingPrice")) + ": " + toDisplayString(new unref(Decimal)(unref(nft).val.amount).div(Math.pow(10, 8)).toString()) + " BSV ", 1)) : createCommentVNode("", true)
                    ]),
                    unref(nft).val.isAuction ? (openBlock(), createElementBlock("div", _hoisted_30, [
                      createBaseVNode("div", _hoisted_31, [
                        createBaseVNode("div", _hoisted_32, toDisplayString(_ctx.$t("currentBid")) + "\uFF1A", 1),
                        unref(nft).val.currentPrice ? (openBlock(), createElementBlock("div", _hoisted_33, toDisplayString(unref(nft).val.currentPrice) + " BSV", 1)) : createCommentVNode("", true)
                      ]),
                      unref(nft).val.isAuction && unref(nft).val.auctionStatus === 2 ? (openBlock(), createElementBlock("div", _hoisted_34, [
                        createBaseVNode("div", _hoisted_35, toDisplayString(_ctx.$t("auctionEndTime")) + "\uFF1A", 1),
                        createBaseVNode("div", _hoisted_36, [
                          createVNode(unref(index), {
                            time: unref(nft).val.auctionTime,
                            transform: transformSlotProps,
                            onEnd: auctionCountDownFinish,
                            class: "count-down-warp"
                          }, {
                            default: withCtx(({ days, hours, minutes, seconds }) => [
                              createBaseVNode("div", _hoisted_37, [
                                createTextVNode(toDisplayString(days) + " ", 1),
                                createBaseVNode("span", null, toDisplayString(_ctx.$t("day")), 1),
                                createTextVNode(" " + toDisplayString(hours) + " ", 1),
                                createBaseVNode("span", null, toDisplayString(_ctx.$t("hour")), 1),
                                createTextVNode(" " + toDisplayString(minutes) + " ", 1),
                                createBaseVNode("span", null, toDisplayString(_ctx.$t("minu")), 1),
                                createTextVNode(" " + toDisplayString(seconds) + " ", 1),
                                createBaseVNode("span", null, toDisplayString(_ctx.$t("second")), 1)
                              ])
                            ]),
                            _: 1
                          }, 8, ["time"])
                        ])
                      ])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_38, [
                      unref(nft).val.isAuction ? (openBlock(), createElementBlock("div", _hoisted_39, [
                        createBaseVNode("div", {
                          class: normalizeClass(["btn btn-block flex1 flex flex-align-center flex-pack-center", { "btn-gray": unref(auctionBtnClassGray) }]),
                          onClick: openAuctionModal
                        }, toDisplayString(unref(nft).val.auctionStatus === 1 ? _ctx.$t("unStart") : unref(nft).val.auctionStatus === 2 ? _ctx.$t("iWanToBid") : unref(nft).val.auctionStatus === 3 && unref(store).state.userInfo && unref(store).state.userInfo.metaId === unref(nft).val.ownerMetaId ? _ctx.$t("confirmAuctionSend") : _ctx.$t("isBeBuyed")), 3),
                        createBaseVNode("div", _hoisted_40, "*" + toDisplayString(_ctx.$t("auctionFailTips")), 1)
                      ])) : unref(nft).val.sellState === 3 ? (openBlock(), createElementBlock("div", _hoisted_41, toDisplayString(_ctx.$t("comingSoon ")), 1)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                        unref(isCanBuy) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          !unref(store).state.userInfo || unref(store).state.userInfo && unref(store).state.userInfo.metaId !== unref(nft).val.ownerMetaId ? (openBlock(), createElementBlock("div", {
                            key: 0,
                            class: normalizeClass(["btn btn-block flex1 flex flex-align-center flex-pack-center", { "btn-gray": !unref(nft).val.putAway }]),
                            onClick: buy$1
                          }, [
                            unref(nft).val.putAway ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                              createTextVNode(toDisplayString(unref(i18n).locale.value === "zh" ? `\u4EE5 ${new unref(Decimal)(unref(nft).val.amount).div(Math.pow(10, 8)).toString()} BSV \u8D2D\u4E70` : `Buy Now At ${new unref(Decimal)(unref(nft).val.amount).div(__pow(10, 8)).toString()} BSV`), 1)
                            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                              createTextVNode(toDisplayString(_ctx.$t("isBeBuyedOrCanceled")), 1)
                            ], 64))
                          ], 2)) : unref(store).state.userInfo && unref(store).state.userInfo.metaId === unref(nft).val.ownerMetaId ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                            unref(nft).val.putAway ? (openBlock(), createElementBlock("div", _hoisted_42, [
                              createBaseVNode("div", {
                                class: "btn btn-block btn-plain flex1 flex flex-align-center flex-pack-center",
                                onClick: offSale
                              }, toDisplayString(_ctx.$t("offsale")), 1)
                            ])) : (openBlock(), createElementBlock("div", {
                              key: 1,
                              class: "btn btn-block flex1 flex flex-align-center flex-pack-center",
                              onClick: toSale
                            }, toDisplayString(_ctx.$t("sale")), 1))
                          ], 64)) : createCommentVNode("", true)
                        ], 64)) : createCommentVNode("", true)
                      ], 64))
                    ]),
                    unref(nft).val.putAway && !unref(nft).val.isAuction && (!unref(store).state.userInfo || unref(store).state.userInfo && unref(store).state.userInfo.metaId !== unref(nft).val.ownerMetaId) ? (openBlock(), createElementBlock("div", _hoisted_43, toDisplayString(_ctx.$t("buyFeeTips")) + ": " + toDisplayString(new unref(Decimal)(unref(nft).val.amount).mul(0.06).div(__pow(10, 8)).mul(unref(store).state.userDiscount).toString()) + " BSV ", 1)) : createCommentVNode("", true)
                  ])
                ])
              ]),
              createBaseVNode("div", _hoisted_44, [
                createBaseVNode("div", _hoisted_45, [
                  createBaseVNode("div", _hoisted_46, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(tabs, (tab, index2) => {
                      return createBaseVNode("a", {
                        class: normalizeClass({ active: index2 === unref(tabIndex) }),
                        key: index2,
                        onClick: ($event) => changeTabIndex(index2)
                      }, toDisplayString(_ctx.$t(tab.key)), 11, _hoisted_47);
                    }), 64))
                  ]),
                  createBaseVNode("div", _hoisted_48, [
                    unref(tabIndex) === 0 ? (openBlock(), createElementBlock("div", _hoisted_49, [
                      createBaseVNode("div", _hoisted_50, [
                        createBaseVNode("div", _hoisted_51, [
                          createBaseVNode("div", _hoisted_52, toDisplayString(_ctx.$t("workname")) + "\uFF1A", 1),
                          createBaseVNode("div", _hoisted_53, toDisplayString(unref(nft).val.nftName), 1)
                        ]),
                        createBaseVNode("div", _hoisted_54, [
                          createBaseVNode("div", _hoisted_55, toDisplayString(_ctx.$t("workclass")) + "\uFF1A", 1),
                          createBaseVNode("div", _hoisted_56, [
                            unref(nft).val.classify && unref(nft).val.classify.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(nft).val.classify, (item) => {
                              return openBlock(), createElementBlock("span", { key: item }, toDisplayString(_ctx.$t(item)), 1);
                            }), 128)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                              _hoisted_57
                            ], 64))
                          ])
                        ]),
                        unref(nft).val.classify.find((item) => item === "article") && unref(nft).val.classify.find((item) => item === "rights") ? (openBlock(), createElementBlock("div", _hoisted_58, [
                          createBaseVNode("div", _hoisted_59, toDisplayString(_ctx.$t("worklink")) + "\uFF1A", 1),
                          createBaseVNode("div", _hoisted_60, [
                            createBaseVNode("a", {
                              class: "link",
                              href: unref(nft).val.nftWebsite,
                              target: "_blank"
                            }, toDisplayString(_ctx.$t("workdetaillink")), 9, _hoisted_61)
                          ])
                        ])) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_62, [
                          createBaseVNode("div", _hoisted_63, toDisplayString(_ctx.$t("workdrsc")) + "\uFF1A", 1),
                          createBaseVNode("div", _hoisted_64, [
                            createBaseVNode("pre", null, toDisplayString(unref(nft).val.describe), 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_65, [
                        createBaseVNode("div", _hoisted_66, [
                          createBaseVNode("div", _hoisted_67, toDisplayString(_ctx.$t("createtime")) + "\uFF1A", 1),
                          createBaseVNode("div", _hoisted_68, toDisplayString(_ctx.$filters.dateTimeFormat(unref(nft).val.forgeTime)), 1)
                        ]),
                        unref(nft).val.sellTxId !== "" ? (openBlock(), createElementBlock("div", _hoisted_69, [
                          createBaseVNode("div", _hoisted_70, toDisplayString(_ctx.$t("contractaddr")) + "\uFF1A", 1),
                          createBaseVNode("div", _hoisted_71, [
                            createTextVNode(toDisplayString(unref(nft).val.sellTxId) + " ", 1),
                            createBaseVNode("a", {
                              class: "copy",
                              onClick: _cache[1] || (_cache[1] = ($event) => copy(unref(nft).val.sellTxId))
                            }, toDisplayString(_ctx.$t("copy")), 1),
                            createBaseVNode("a", {
                              class: "copy",
                              onClick: _cache[2] || (_cache[2] = ($event) => toWhatsonchain(unref(nft).val.sellTxId))
                            }, toDisplayString(_ctx.$t("look")), 1)
                          ])
                        ])) : createCommentVNode("", true),
                        createBaseVNode("div", _hoisted_72, [
                          _hoisted_73,
                          createBaseVNode("div", _hoisted_74, [
                            createTextVNode(toDisplayString(unref(nft).val.tokenId) + " ", 1),
                            createBaseVNode("a", {
                              class: "copy",
                              onClick: _cache[3] || (_cache[3] = ($event) => copy(unref(nft).val.tokenId))
                            }, toDisplayString(_ctx.$t("copy")), 1)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_75, [
                          createBaseVNode("div", _hoisted_76, toDisplayString(_ctx.$t("issueMetaTxId")) + "\uFF1A", 1),
                          createBaseVNode("div", _hoisted_77, [
                            createTextVNode(toDisplayString(unref(nft).val.issueMetaTxId) + " ", 1),
                            createBaseVNode("a", {
                              class: "copy",
                              onClick: _cache[4] || (_cache[4] = ($event) => copy(unref(nft).val.issueMetaTxId))
                            }, toDisplayString(_ctx.$t("copy")), 1),
                            createBaseVNode("a", {
                              class: "copy",
                              onClick: _cache[5] || (_cache[5] = ($event) => toWhatsonchain(unref(nft).val.issueMetaTxId))
                            }, toDisplayString(_ctx.$t("look")), 1)
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_78, [
                        createBaseVNode("div", _hoisted_79, [
                          createBaseVNode("div", _hoisted_80, toDisplayString(_ctx.$t("creater")) + "\uFF1A", 1),
                          createBaseVNode("div", _hoisted_81, [
                            createBaseVNode("div", _hoisted_82, [
                              createVNode(_component_UserAvatar, {
                                class: "avatar",
                                metaId: unref(nft).val.foundryMetaId,
                                hasmask: unref(nft).val.issueUserAvatarType === "nft-metabot"
                              }, null, 8, ["metaId", "hasmask"]),
                              createBaseVNode("div", _hoisted_83, [
                                createBaseVNode("div", _hoisted_84, toDisplayString(unref(nft).val.foundryName), 1),
                                unref(nft).val.foundryMetaId ? (openBlock(), createElementBlock("div", _hoisted_85, " MetaID: " + toDisplayString(unref(nft).val.foundryMetaId.slice(0, 6)), 1)) : createCommentVNode("", true)
                              ])
                            ])
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_86, [
                          createBaseVNode("div", _hoisted_87, toDisplayString(_ctx.$t("haveder")) + "\uFF1A", 1),
                          createBaseVNode("div", _hoisted_88, [
                            createBaseVNode("div", _hoisted_89, [
                              createVNode(_component_UserAvatar, {
                                class: "avatar",
                                metaId: unref(nft).val.ownerMetaId,
                                hasmask: unref(nft).val.ownerAvatarType === "nft-metabot"
                              }, null, 8, ["metaId", "hasmask"]),
                              createBaseVNode("div", _hoisted_90, [
                                createBaseVNode("div", _hoisted_91, toDisplayString(unref(nft).val.ownerName), 1),
                                unref(nft).val.ownerMetaId ? (openBlock(), createElementBlock("div", _hoisted_92, " MetaID:" + toDisplayString(unref(nft).val.ownerMetaId.slice(0, 6)), 1)) : createCommentVNode("", true)
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createBaseVNode("div", _hoisted_93, [
                        createBaseVNode("div", _hoisted_94, toDisplayString(_ctx.$t("remark1")), 1),
                        createBaseVNode("div", _hoisted_95, toDisplayString(_ctx.$t("remark2")), 1),
                        createBaseVNode("div", _hoisted_96, toDisplayString(_ctx.$t("remark3")), 1)
                      ])
                    ])) : unref(tabIndex) === 1 ? (openBlock(), createElementBlock("div", _hoisted_97, [
                      createBaseVNode("div", _hoisted_98, [
                        createBaseVNode("span", _hoisted_99, toDisplayString(_ctx.$t("owner")), 1),
                        createBaseVNode("span", _hoisted_100, toDisplayString(_ctx.$t("role")), 1),
                        createBaseVNode("span", _hoisted_101, toDisplayString(_ctx.$t("time")), 1),
                        createBaseVNode("span", _hoisted_102, toDisplayString(_ctx.$t("price")), 1)
                      ]),
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(records), (record, index2) => {
                        return openBlock(), createElementBlock("div", {
                          class: "tr flex flex-align-center",
                          key: record.timestamp
                        }, [
                          index2 !== 0 ? (openBlock(), createElementBlock("img", _hoisted_103)) : createCommentVNode("", true),
                          createBaseVNode("span", {
                            class: "td flex1 user flex flex-align-center",
                            onClick: ($event) => unref(ToUser)(record.metaId)
                          }, [
                            createBaseVNode("img", {
                              src: _ctx.$filters.avatar(record.metaId),
                              alt: record.name
                            }, null, 8, _hoisted_105),
                            createBaseVNode("span", _hoisted_106, toDisplayString(record.name), 1)
                          ], 8, _hoisted_104),
                          createBaseVNode("span", _hoisted_107, toDisplayString(index2 === 0 ? _ctx.$t("haveder") : _ctx.$t("histsoryowner")), 1),
                          createBaseVNode("span", _hoisted_108, toDisplayString(_ctx.$filters.dateTimeFormat(record.timestamp, "YYYY-MM-DD HH:mm")), 1),
                          createBaseVNode("span", _hoisted_109, toDisplayString(record.satoshisPrice ? _ctx.$filters.bsv(record.satoshisPrice) + "BSV" : _ctx.$t("noPaid")), 1),
                          createBaseVNode("a", {
                            class: "link",
                            onClick: ($event) => {
                              var _a;
                              return (_a = unref(store).state.sdk) == null ? void 0 : _a.toTxLink(record.txId);
                            }
                          }, _hoisted_112, 8, _hoisted_110)
                        ]);
                      }), 128)),
                      unref(records).length > unref(ownerHistoryPagination).pageSize ? (openBlock(), createBlock(LoadMore, {
                        key: 0,
                        pagination: unref(ownerHistoryPagination),
                        onGetMore: getMoreRecords
                      }, null, 8, ["pagination"])) : createCommentVNode("", true),
                      unref(issueRecord).val ? (openBlock(), createElementBlock("div", _hoisted_113, [
                        unref(records).length > 0 ? (openBlock(), createElementBlock("img", _hoisted_114)) : createCommentVNode("", true),
                        createBaseVNode("span", {
                          class: "td flex1 user flex flex-align-center",
                          onClick: _cache[6] || (_cache[6] = ($event) => unref(ToUser)(unref(issueRecord).val ? unref(issueRecord).val.metaId : ""))
                        }, [
                          createBaseVNode("img", {
                            src: _ctx.$filters.avatar(unref(issueRecord).val.metaId),
                            alt: unref(issueRecord).val.name
                          }, null, 8, _hoisted_115),
                          createBaseVNode("span", _hoisted_116, toDisplayString(unref(issueRecord).val.name), 1)
                        ]),
                        createBaseVNode("span", _hoisted_117, [
                          _hoisted_118,
                          createTextVNode(" " + toDisplayString(_ctx.$t("creater")), 1)
                        ]),
                        createBaseVNode("span", _hoisted_119, toDisplayString(_ctx.$filters.dateTimeFormat(unref(issueRecord).val.timestamp, "YYYY-MM-DD HH:mm")), 1),
                        createBaseVNode("span", _hoisted_120, toDisplayString(_ctx.$t("noPaid")), 1),
                        createBaseVNode("a", {
                          class: "link",
                          onClick: _cache[7] || (_cache[7] = ($event) => {
                            var _a;
                            return (_a = unref(store).state.sdk) == null ? void 0 : _a.toTxLink(unref(issueRecord).val.txId);
                          })
                        }, _hoisted_122)
                      ])) : createCommentVNode("", true)
                    ])) : createCommentVNode("", true),
                    unref(tabIndex) === 2 ? (openBlock(), createElementBlock("div", _hoisted_123, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(auctionRecords), (item, index2) => {
                        return openBlock(), createElementBlock("div", {
                          class: "historical-bid-item flex flex-align-center",
                          key: item.txId
                        }, [
                          createBaseVNode("div", _hoisted_124, [
                            createVNode(_component_UserAvatar, {
                              class: "avatar",
                              metaId: item.metaId
                            }, null, 8, ["metaId"]),
                            createBaseVNode("div", _hoisted_125, [
                              createBaseVNode("div", _hoisted_126, toDisplayString(item.userName), 1),
                              item.metaId ? (openBlock(), createElementBlock("div", _hoisted_127, " MetaID:" + toDisplayString(item.metaId.slice(0, 6)), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_128, [
                            createBaseVNode("div", _hoisted_129, [
                              index2 === 0 || unref(auctionRecords).length === 1 ? (openBlock(), createElementBlock("a", _hoisted_130, toDisplayString(_ctx.$t("latestBid")), 1)) : createCommentVNode("", true),
                              createBaseVNode("span", _hoisted_131, toDisplayString(_ctx.$t("auctionBid")), 1),
                              createBaseVNode("span", _hoisted_132, toDisplayString(_ctx.$filters.bsv(item.bidPrice)) + " BSV", 1)
                            ]),
                            createBaseVNode("div", _hoisted_133, toDisplayString(_ctx.$filters.dateTimeFormat(item.timestamp, "MM\u6708DD\u65E5 HH:mm:ss")), 1)
                          ])
                        ]);
                      }), 128)),
                      createBaseVNode("div", _hoisted_134, [
                        createBaseVNode("div", _hoisted_135, [
                          createVNode(_component_UserAvatar, {
                            class: "avatar",
                            metaId: unref(nft).val.foundryMetaId,
                            hasmask: unref(nft).val.issueUserAvatarType === "nft-metabot"
                          }, null, 8, ["metaId", "hasmask"]),
                          createBaseVNode("div", _hoisted_136, [
                            createBaseVNode("div", _hoisted_137, toDisplayString(unref(nft).val.ownerName), 1),
                            unref(nft).val.ownerMetaId ? (openBlock(), createElementBlock("div", _hoisted_138, " MetaID:" + toDisplayString(unref(nft).val.ownerMetaId.slice(0, 6)), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createBaseVNode("div", _hoisted_139, [
                          createBaseVNode("div", _hoisted_140, [
                            createBaseVNode("span", _hoisted_141, toDisplayString(_ctx.$t("auctionBid")), 1),
                            createBaseVNode("span", _hoisted_142, toDisplayString(unref(nft).val.startPrice) + " BSV", 1)
                          ])
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ]),
              createVNode(RecommentSwiper, { "is-hide-title": true })
            ]),
            _: 1
          }, 8, ["loading"])
        ]),
        createVNode(_sfc_main$2, {
          visible: unref(isShowDrscDetail),
          title: _ctx.$t("seller") + _ctx.$t("drsc"),
          onChange: _cache[8] || (_cache[8] = (value) => isRef(isShowDrscDetail) ? isShowDrscDetail.value = value : isShowDrscDetail = value)
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(NFTMainMsgDesc)), 1)
          ]),
          _: 1
        }, 8, ["visible", "title"]),
        createVNode(unref(ElDialog), {
          modelValue: unref(isShowAuctionModal),
          "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => isRef(isShowAuctionModal) ? isShowAuctionModal.value = $event : isShowAuctionModal = $event)
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_143, [
              createBaseVNode("div", _hoisted_144, toDisplayString(_ctx.$t("iWanToBid")), 1),
              createBaseVNode("div", _hoisted_145, [
                createBaseVNode("div", _hoisted_146, [
                  createBaseVNode("div", _hoisted_147, toDisplayString(_ctx.$t("currentBid")), 1),
                  unref(nft).val.currentPrice ? (openBlock(), createElementBlock("div", _hoisted_148, toDisplayString(unref(nft).val.currentPrice) + " BSV", 1)) : createCommentVNode("", true)
                ]),
                createBaseVNode("div", _hoisted_149, [
                  createBaseVNode("div", _hoisted_150, toDisplayString(_ctx.$t("minimumMarkup")) + "(10%)", 1),
                  unref(nft).val.minGapPrice ? (openBlock(), createElementBlock("div", _hoisted_151, toDisplayString(unref(nft).val.minGapPrice) + " BSV", 1)) : createCommentVNode("", true)
                ])
              ]),
              createBaseVNode("div", _hoisted_152, [
                createBaseVNode("span", null, toDisplayString(_ctx.$t("myBid")), 1),
                withDirectives(createBaseVNode("input", {
                  type: "number",
                  "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => auctionPrice.value = $event),
                  min: new unref(Decimal)(minActionPrice.value).toNumber(),
                  setp: unref(nft).val.minGapPrice ? new unref(Decimal)(unref(nft).val.minGapPrice).toNumber() : 0.1,
                  class: "warp flex1",
                  onChange: onAuctionPriceChange
                }, null, 40, _hoisted_153), [
                  [vModelText, auctionPrice.value]
                ]),
                _hoisted_154
              ]),
              createBaseVNode("div", _hoisted_155, [
                createBaseVNode("div", _hoisted_156, [
                  createBaseVNode("div", _hoisted_157, toDisplayString(_ctx.$t("availableAssets")), 1),
                  createBaseVNode("div", _hoisted_158, toDisplayString(balance.value) + " BSV", 1)
                ])
              ]),
              new unref(Decimal)(auctionPrice.value).mul(0.05).plus(auctionPrice.value).toNumber() <= balance.value ? withDirectives((openBlock(), createElementBlock("div", {
                key: 0,
                class: "btn btn-block",
                onClick: bid
              }, [
                createTextVNode(toDisplayString(_ctx.$t("bid")), 1)
              ])), [
                [_directive_loading, getBalanceLoading.value]
              ]) : withDirectives((openBlock(), createElementBlock("div", {
                key: 1,
                class: "btn btn-block btn-gray",
                onClick: toWallet
              }, [
                createTextVNode(toDisplayString(_ctx.$t("insufficientBalanceToWallet")) + " ", 1),
                _hoisted_159
              ])), [
                [_directive_loading, getBalanceLoading.value]
              ]),
              createBaseVNode("div", _hoisted_160, " *" + toDisplayString(_ctx.$t("auctionFeeTips")) + " " + toDisplayString(new unref(Decimal)(auctionPrice.value).mul(0.05).toString()) + " BSV ", 1)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        createVNode(DonateModalVue, {
          visible: isShowDonateModal.value,
          "meta-id": unref(nft).val.ownerMetaId,
          address: unref(nft).val.ownerAddress,
          "target-id": unref(nft).val.issueMetaTxId,
          onChange: _cache[11] || (_cache[11] = (val) => isShowDonateModal.value = val),
          onSuccess: donateSuccess
        }, null, 8, ["visible", "meta-id", "address", "target-id"])
      ], 64);
    };
  }
});
var Detail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b593f0fe"]]);
export { Detail as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV0YWlsLjQ0N2QzOWM4LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
