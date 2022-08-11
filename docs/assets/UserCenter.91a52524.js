import { _ as _export_sfc, e as defineComponent, v as reactive, w as watch, n as nextTick, g as openBlock, A as createElementBlock, k as createBaseVNode, l as createVNode, j as withCtx, J as createTextVNode, D as toDisplayString, m as createCommentVNode, N as ElButton, F as Fragment, q as pushScopeId, s as popScopeId, u as useI18n, aq as useRoute, r as ref, d as computed, a as onMounted, c5 as checkUserInfoFinish, bx as GetUserInfo, f as resolveComponent, C as unref, bi as isRef, i as createBlock, p as renderSlot, B as renderList, L as normalizeClass, as as metafileUrl, at as Decimal, bk as dayjs, K as withModifiers, c6 as createSlots, E as useStore, X as ElMessage, c7 as getMetaCenterConfig, c8 as GetMyFollowList, c9 as GetMyNftOnShowSellSuccessList, ca as GetMyNftOnShowBuySuccessList, a3 as router, a0 as ElLoading, cb as base64ToHex, cc as GetUserNftBgs, ap as ElDialog, bw as ElInput } from './index.f03006d5.js';
import { E as ElSkeletonItem, a as ElSkeleton } from './skeleton.4c62fb88.js';
import { E as ElImage } from './image-viewer.1c165fb3.js';
import { _ as _imports_0, a as _imports_1 } from './detailDetach-owner.53484477.js';
import { L as LoadMore } from './LoadMore.4d34a19f.js';
import { C as CertTemp } from './Cert.062903a8.js';
import { T as Tab } from './Tab.35d19c3e.js';
import { t as toClipboard } from './vue3-clipboard.esm-bundler.76b8e6c2.js';
import { I as IsNull } from './IsNull.7a0d2f8f.js';
import { v as v1 } from './v1.93131899.js';

var RecordIcon = "/assets/me_icon_record.54dde42b.svg";

/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var IS_BROWSER = typeof window !== 'undefined' && typeof window.document !== 'undefined';
var WINDOW = IS_BROWSER ? window : {};
var IS_TOUCH_DEVICE = IS_BROWSER && WINDOW.document.documentElement ? 'ontouchstart' in WINDOW.document.documentElement : false;
var HAS_POINTER_EVENT = IS_BROWSER ? 'PointerEvent' in WINDOW : false;
var NAMESPACE = 'cropper'; // Actions

var ACTION_ALL = 'all';
var ACTION_CROP = 'crop';
var ACTION_MOVE = 'move';
var ACTION_ZOOM = 'zoom';
var ACTION_EAST = 'e';
var ACTION_WEST = 'w';
var ACTION_SOUTH = 's';
var ACTION_NORTH = 'n';
var ACTION_NORTH_EAST = 'ne';
var ACTION_NORTH_WEST = 'nw';
var ACTION_SOUTH_EAST = 'se';
var ACTION_SOUTH_WEST = 'sw'; // Classes

var CLASS_CROP = "".concat(NAMESPACE, "-crop");
var CLASS_DISABLED = "".concat(NAMESPACE, "-disabled");
var CLASS_HIDDEN = "".concat(NAMESPACE, "-hidden");
var CLASS_HIDE = "".concat(NAMESPACE, "-hide");
var CLASS_INVISIBLE = "".concat(NAMESPACE, "-invisible");
var CLASS_MODAL = "".concat(NAMESPACE, "-modal");
var CLASS_MOVE = "".concat(NAMESPACE, "-move"); // Data keys

var DATA_ACTION = "".concat(NAMESPACE, "Action");
var DATA_PREVIEW = "".concat(NAMESPACE, "Preview"); // Drag modes

var DRAG_MODE_CROP = 'crop';
var DRAG_MODE_MOVE = 'move';
var DRAG_MODE_NONE = 'none'; // Events

var EVENT_CROP = 'crop';
var EVENT_CROP_END = 'cropend';
var EVENT_CROP_MOVE = 'cropmove';
var EVENT_CROP_START = 'cropstart';
var EVENT_DBLCLICK = 'dblclick';
var EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
var EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
var EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
var EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
var EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
var EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
var EVENT_READY = 'ready';
var EVENT_RESIZE = 'resize';
var EVENT_WHEEL = 'wheel';
var EVENT_ZOOM = 'zoom'; // Mime types

var MIME_TYPE_JPEG = 'image/jpeg'; // RegExps

var REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
var REGEXP_DATA_URL = /^data:/;
var REGEXP_DATA_URL_JPEG = /^data:image\/jpeg;base64,/;
var REGEXP_TAG_NAME = /^img|canvas$/i; // Misc
// Inspired by the default width and height of a canvas element.

var MIN_CONTAINER_WIDTH = 200;
var MIN_CONTAINER_HEIGHT = 100;

var DEFAULTS = {
  // Define the view mode of the cropper
  viewMode: 0,
  // 0, 1, 2, 3
  // Define the dragging mode of the cropper
  dragMode: DRAG_MODE_CROP,
  // 'crop', 'move' or 'none'
  // Define the initial aspect ratio of the crop box
  initialAspectRatio: NaN,
  // Define the aspect ratio of the crop box
  aspectRatio: NaN,
  // An object with the previous cropping result data
  data: null,
  // A selector for adding extra containers to preview
  preview: '',
  // Re-render the cropper when resize the window
  responsive: true,
  // Restore the cropped area after resize the window
  restore: true,
  // Check if the current image is a cross-origin image
  checkCrossOrigin: true,
  // Check the current image's Exif Orientation information
  checkOrientation: true,
  // Show the black modal
  modal: true,
  // Show the dashed lines for guiding
  guides: true,
  // Show the center indicator for guiding
  center: true,
  // Show the white modal to highlight the crop box
  highlight: true,
  // Show the grid background
  background: true,
  // Enable to crop the image automatically when initialize
  autoCrop: true,
  // Define the percentage of automatic cropping area when initializes
  autoCropArea: 0.8,
  // Enable to move the image
  movable: true,
  // Enable to rotate the image
  rotatable: true,
  // Enable to scale the image
  scalable: true,
  // Enable to zoom the image
  zoomable: true,
  // Enable to zoom the image by dragging touch
  zoomOnTouch: true,
  // Enable to zoom the image by wheeling mouse
  zoomOnWheel: true,
  // Define zoom ratio when zoom the image by wheeling mouse
  wheelZoomRatio: 0.1,
  // Enable to move the crop box
  cropBoxMovable: true,
  // Enable to resize the crop box
  cropBoxResizable: true,
  // Toggle drag mode between "crop" and "move" when click twice on the cropper
  toggleDragModeOnDblclick: true,
  // Size limitation
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: MIN_CONTAINER_WIDTH,
  minContainerHeight: MIN_CONTAINER_HEIGHT,
  // Shortcuts of events
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
};

var TEMPLATE = '<div class="cropper-container" touch-action="none">' + '<div class="cropper-wrap-box">' + '<div class="cropper-canvas"></div>' + '</div>' + '<div class="cropper-drag-box"></div>' + '<div class="cropper-crop-box">' + '<span class="cropper-view-box"></span>' + '<span class="cropper-dashed dashed-h"></span>' + '<span class="cropper-dashed dashed-v"></span>' + '<span class="cropper-center"></span>' + '<span class="cropper-face"></span>' + '<span class="cropper-line line-e" data-cropper-action="e"></span>' + '<span class="cropper-line line-n" data-cropper-action="n"></span>' + '<span class="cropper-line line-w" data-cropper-action="w"></span>' + '<span class="cropper-line line-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-e" data-cropper-action="e"></span>' + '<span class="cropper-point point-n" data-cropper-action="n"></span>' + '<span class="cropper-point point-w" data-cropper-action="w"></span>' + '<span class="cropper-point point-s" data-cropper-action="s"></span>' + '<span class="cropper-point point-ne" data-cropper-action="ne"></span>' + '<span class="cropper-point point-nw" data-cropper-action="nw"></span>' + '<span class="cropper-point point-sw" data-cropper-action="sw"></span>' + '<span class="cropper-point point-se" data-cropper-action="se"></span>' + '</div>' + '</div>';

/**
 * Check if the given value is not a number.
 */

var isNaN = Number.isNaN || WINDOW.isNaN;
/**
 * Check if the given value is a number.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a number, else `false`.
 */

function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}
/**
 * Check if the given value is a positive number.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a positive number, else `false`.
 */

var isPositiveNumber = function isPositiveNumber(value) {
  return value > 0 && value < Infinity;
};
/**
 * Check if the given value is undefined.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is undefined, else `false`.
 */

function isUndefined(value) {
  return typeof value === 'undefined';
}
/**
 * Check if the given value is an object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is an object, else `false`.
 */

function isObject(value) {
  return _typeof(value) === 'object' && value !== null;
}
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Check if the given value is a plain object.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a plain object, else `false`.
 */

function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }

  try {
    var _constructor = value.constructor;
    var prototype = _constructor.prototype;
    return _constructor && prototype && hasOwnProperty.call(prototype, 'isPrototypeOf');
  } catch (error) {
    return false;
  }
}
/**
 * Check if the given value is a function.
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if the given value is a function, else `false`.
 */

function isFunction(value) {
  return typeof value === 'function';
}
var slice = Array.prototype.slice;
/**
 * Convert array-like or iterable object to an array.
 * @param {*} value - The value to convert.
 * @returns {Array} Returns a new array.
 */

function toArray(value) {
  return Array.from ? Array.from(value) : slice.call(value);
}
/**
 * Iterate the given data.
 * @param {*} data - The data to iterate.
 * @param {Function} callback - The process function for each element.
 * @returns {*} The original data.
 */

function forEach(data, callback) {
  if (data && isFunction(callback)) {
    if (Array.isArray(data) || isNumber(data.length)
    /* array-like */
    ) {
        toArray(data).forEach(function (value, key) {
          callback.call(data, value, key, data);
        });
      } else if (isObject(data)) {
      Object.keys(data).forEach(function (key) {
        callback.call(data, data[key], key, data);
      });
    }
  }

  return data;
}
/**
 * Extend the given object.
 * @param {*} target - The target object to extend.
 * @param {*} args - The rest objects for merging to the target object.
 * @returns {Object} The extended object.
 */

var assign = Object.assign || function assign(target) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (isObject(target) && args.length > 0) {
    args.forEach(function (arg) {
      if (isObject(arg)) {
        Object.keys(arg).forEach(function (key) {
          target[key] = arg[key];
        });
      }
    });
  }

  return target;
};
var REGEXP_DECIMALS = /\.\d*(?:0|9){12}\d*$/;
/**
 * Normalize decimal number.
 * Check out {@link https://0.30000000000000004.com/}
 * @param {number} value - The value to normalize.
 * @param {number} [times=100000000000] - The times for normalizing.
 * @returns {number} Returns the normalized number.
 */

function normalizeDecimalNumber(value) {
  var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100000000000;
  return REGEXP_DECIMALS.test(value) ? Math.round(value * times) / times : value;
}
var REGEXP_SUFFIX = /^width|height|left|top|marginLeft|marginTop$/;
/**
 * Apply styles to the given element.
 * @param {Element} element - The target element.
 * @param {Object} styles - The styles for applying.
 */

function setStyle(element, styles) {
  var style = element.style;
  forEach(styles, function (value, property) {
    if (REGEXP_SUFFIX.test(property) && isNumber(value)) {
      value = "".concat(value, "px");
    }

    style[property] = value;
  });
}
/**
 * Check if the given element has a special class.
 * @param {Element} element - The element to check.
 * @param {string} value - The class to search.
 * @returns {boolean} Returns `true` if the special class was found.
 */

function hasClass(element, value) {
  return element.classList ? element.classList.contains(value) : element.className.indexOf(value) > -1;
}
/**
 * Add classes to the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be added.
 */

function addClass(element, value) {
  if (!value) {
    return;
  }

  if (isNumber(element.length)) {
    forEach(element, function (elem) {
      addClass(elem, value);
    });
    return;
  }

  if (element.classList) {
    element.classList.add(value);
    return;
  }

  var className = element.className.trim();

  if (!className) {
    element.className = value;
  } else if (className.indexOf(value) < 0) {
    element.className = "".concat(className, " ").concat(value);
  }
}
/**
 * Remove classes from the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be removed.
 */

function removeClass(element, value) {
  if (!value) {
    return;
  }

  if (isNumber(element.length)) {
    forEach(element, function (elem) {
      removeClass(elem, value);
    });
    return;
  }

  if (element.classList) {
    element.classList.remove(value);
    return;
  }

  if (element.className.indexOf(value) >= 0) {
    element.className = element.className.replace(value, '');
  }
}
/**
 * Add or remove classes from the given element.
 * @param {Element} element - The target element.
 * @param {string} value - The classes to be toggled.
 * @param {boolean} added - Add only.
 */

function toggleClass(element, value, added) {
  if (!value) {
    return;
  }

  if (isNumber(element.length)) {
    forEach(element, function (elem) {
      toggleClass(elem, value, added);
    });
    return;
  } // IE10-11 doesn't support the second parameter of `classList.toggle`


  if (added) {
    addClass(element, value);
  } else {
    removeClass(element, value);
  }
}
var REGEXP_CAMEL_CASE = /([a-z\d])([A-Z])/g;
/**
 * Transform the given string from camelCase to kebab-case
 * @param {string} value - The value to transform.
 * @returns {string} The transformed value.
 */

function toParamCase(value) {
  return value.replace(REGEXP_CAMEL_CASE, '$1-$2').toLowerCase();
}
/**
 * Get data from the given element.
 * @param {Element} element - The target element.
 * @param {string} name - The data key to get.
 * @returns {string} The data value.
 */

function getData(element, name) {
  if (isObject(element[name])) {
    return element[name];
  }

  if (element.dataset) {
    return element.dataset[name];
  }

  return element.getAttribute("data-".concat(toParamCase(name)));
}
/**
 * Set data to the given element.
 * @param {Element} element - The target element.
 * @param {string} name - The data key to set.
 * @param {string} data - The data value.
 */

function setData(element, name, data) {
  if (isObject(data)) {
    element[name] = data;
  } else if (element.dataset) {
    element.dataset[name] = data;
  } else {
    element.setAttribute("data-".concat(toParamCase(name)), data);
  }
}
/**
 * Remove data from the given element.
 * @param {Element} element - The target element.
 * @param {string} name - The data key to remove.
 */

function removeData(element, name) {
  if (isObject(element[name])) {
    try {
      delete element[name];
    } catch (error) {
      element[name] = undefined;
    }
  } else if (element.dataset) {
    // #128 Safari not allows to delete dataset property
    try {
      delete element.dataset[name];
    } catch (error) {
      element.dataset[name] = undefined;
    }
  } else {
    element.removeAttribute("data-".concat(toParamCase(name)));
  }
}
var REGEXP_SPACES = /\s\s*/;

var onceSupported = function () {
  var supported = false;

  if (IS_BROWSER) {
    var once = false;

    var listener = function listener() {};

    var options = Object.defineProperty({}, 'once', {
      get: function get() {
        supported = true;
        return once;
      },

      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function set(value) {
        once = value;
      }
    });
    WINDOW.addEventListener('test', listener, options);
    WINDOW.removeEventListener('test', listener, options);
  }

  return supported;
}();
/**
 * Remove event listener from the target element.
 * @param {Element} element - The event target.
 * @param {string} type - The event type(s).
 * @param {Function} listener - The event listener.
 * @param {Object} options - The event options.
 */


function removeListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function (event) {
    if (!onceSupported) {
      var listeners = element.listeners;

      if (listeners && listeners[event] && listeners[event][listener]) {
        handler = listeners[event][listener];
        delete listeners[event][listener];

        if (Object.keys(listeners[event]).length === 0) {
          delete listeners[event];
        }

        if (Object.keys(listeners).length === 0) {
          delete element.listeners;
        }
      }
    }

    element.removeEventListener(event, handler, options);
  });
}
/**
 * Add event listener to the target element.
 * @param {Element} element - The event target.
 * @param {string} type - The event type(s).
 * @param {Function} listener - The event listener.
 * @param {Object} options - The event options.
 */

function addListener(element, type, listener) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var _handler = listener;
  type.trim().split(REGEXP_SPACES).forEach(function (event) {
    if (options.once && !onceSupported) {
      var _element$listeners = element.listeners,
          listeners = _element$listeners === void 0 ? {} : _element$listeners;

      _handler = function handler() {
        delete listeners[event][listener];
        element.removeEventListener(event, _handler, options);

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        listener.apply(element, args);
      };

      if (!listeners[event]) {
        listeners[event] = {};
      }

      if (listeners[event][listener]) {
        element.removeEventListener(event, listeners[event][listener], options);
      }

      listeners[event][listener] = _handler;
      element.listeners = listeners;
    }

    element.addEventListener(event, _handler, options);
  });
}
/**
 * Dispatch event on the target element.
 * @param {Element} element - The event target.
 * @param {string} type - The event type(s).
 * @param {Object} data - The additional event data.
 * @returns {boolean} Indicate if the event is default prevented or not.
 */

function dispatchEvent(element, type, data) {
  var event; // Event and CustomEvent on IE9-11 are global objects, not constructors

  if (isFunction(Event) && isFunction(CustomEvent)) {
    event = new CustomEvent(type, {
      detail: data,
      bubbles: true,
      cancelable: true
    });
  } else {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(type, true, true, data);
  }

  return element.dispatchEvent(event);
}
/**
 * Get the offset base on the document.
 * @param {Element} element - The target element.
 * @returns {Object} The offset data.
 */

function getOffset(element) {
  var box = element.getBoundingClientRect();
  return {
    left: box.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: box.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var location = WINDOW.location;
var REGEXP_ORIGINS = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
/**
 * Check if the given URL is a cross origin URL.
 * @param {string} url - The target URL.
 * @returns {boolean} Returns `true` if the given URL is a cross origin URL, else `false`.
 */

function isCrossOriginURL(url) {
  var parts = url.match(REGEXP_ORIGINS);
  return parts !== null && (parts[1] !== location.protocol || parts[2] !== location.hostname || parts[3] !== location.port);
}
/**
 * Add timestamp to the given URL.
 * @param {string} url - The target URL.
 * @returns {string} The result URL.
 */

function addTimestamp(url) {
  var timestamp = "timestamp=".concat(new Date().getTime());
  return url + (url.indexOf('?') === -1 ? '?' : '&') + timestamp;
}
/**
 * Get transforms base on the given object.
 * @param {Object} obj - The target object.
 * @returns {string} A string contains transform values.
 */

function getTransforms(_ref) {
  var rotate = _ref.rotate,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      translateX = _ref.translateX,
      translateY = _ref.translateY;
  var values = [];

  if (isNumber(translateX) && translateX !== 0) {
    values.push("translateX(".concat(translateX, "px)"));
  }

  if (isNumber(translateY) && translateY !== 0) {
    values.push("translateY(".concat(translateY, "px)"));
  } // Rotate should come first before scale to match orientation transform


  if (isNumber(rotate) && rotate !== 0) {
    values.push("rotate(".concat(rotate, "deg)"));
  }

  if (isNumber(scaleX) && scaleX !== 1) {
    values.push("scaleX(".concat(scaleX, ")"));
  }

  if (isNumber(scaleY) && scaleY !== 1) {
    values.push("scaleY(".concat(scaleY, ")"));
  }

  var transform = values.length ? values.join(' ') : 'none';
  return {
    WebkitTransform: transform,
    msTransform: transform,
    transform: transform
  };
}
/**
 * Get the max ratio of a group of pointers.
 * @param {string} pointers - The target pointers.
 * @returns {number} The result ratio.
 */

function getMaxZoomRatio(pointers) {
  var pointers2 = _objectSpread2({}, pointers);

  var maxRatio = 0;
  forEach(pointers, function (pointer, pointerId) {
    delete pointers2[pointerId];
    forEach(pointers2, function (pointer2) {
      var x1 = Math.abs(pointer.startX - pointer2.startX);
      var y1 = Math.abs(pointer.startY - pointer2.startY);
      var x2 = Math.abs(pointer.endX - pointer2.endX);
      var y2 = Math.abs(pointer.endY - pointer2.endY);
      var z1 = Math.sqrt(x1 * x1 + y1 * y1);
      var z2 = Math.sqrt(x2 * x2 + y2 * y2);
      var ratio = (z2 - z1) / z1;

      if (Math.abs(ratio) > Math.abs(maxRatio)) {
        maxRatio = ratio;
      }
    });
  });
  return maxRatio;
}
/**
 * Get a pointer from an event object.
 * @param {Object} event - The target event object.
 * @param {boolean} endOnly - Indicates if only returns the end point coordinate or not.
 * @returns {Object} The result pointer contains start and/or end point coordinates.
 */

function getPointer(_ref2, endOnly) {
  var pageX = _ref2.pageX,
      pageY = _ref2.pageY;
  var end = {
    endX: pageX,
    endY: pageY
  };
  return endOnly ? end : _objectSpread2({
    startX: pageX,
    startY: pageY
  }, end);
}
/**
 * Get the center point coordinate of a group of pointers.
 * @param {Object} pointers - The target pointers.
 * @returns {Object} The center point coordinate.
 */

function getPointersCenter(pointers) {
  var pageX = 0;
  var pageY = 0;
  var count = 0;
  forEach(pointers, function (_ref3) {
    var startX = _ref3.startX,
        startY = _ref3.startY;
    pageX += startX;
    pageY += startY;
    count += 1;
  });
  pageX /= count;
  pageY /= count;
  return {
    pageX: pageX,
    pageY: pageY
  };
}
/**
 * Get the max sizes in a rectangle under the given aspect ratio.
 * @param {Object} data - The original sizes.
 * @param {string} [type='contain'] - The adjust type.
 * @returns {Object} The result sizes.
 */

function getAdjustedSizes(_ref4) // or 'cover'
{
  var aspectRatio = _ref4.aspectRatio,
      height = _ref4.height,
      width = _ref4.width;
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'contain';
  var isValidWidth = isPositiveNumber(width);
  var isValidHeight = isPositiveNumber(height);

  if (isValidWidth && isValidHeight) {
    var adjustedWidth = height * aspectRatio;

    if (type === 'contain' && adjustedWidth > width || type === 'cover' && adjustedWidth < width) {
      height = width / aspectRatio;
    } else {
      width = height * aspectRatio;
    }
  } else if (isValidWidth) {
    height = width / aspectRatio;
  } else if (isValidHeight) {
    width = height * aspectRatio;
  }

  return {
    width: width,
    height: height
  };
}
/**
 * Get the new sizes of a rectangle after rotated.
 * @param {Object} data - The original sizes.
 * @returns {Object} The result sizes.
 */

function getRotatedSizes(_ref5) {
  var width = _ref5.width,
      height = _ref5.height,
      degree = _ref5.degree;
  degree = Math.abs(degree) % 180;

  if (degree === 90) {
    return {
      width: height,
      height: width
    };
  }

  var arc = degree % 90 * Math.PI / 180;
  var sinArc = Math.sin(arc);
  var cosArc = Math.cos(arc);
  var newWidth = width * cosArc + height * sinArc;
  var newHeight = width * sinArc + height * cosArc;
  return degree > 90 ? {
    width: newHeight,
    height: newWidth
  } : {
    width: newWidth,
    height: newHeight
  };
}
/**
 * Get a canvas which drew the given image.
 * @param {HTMLImageElement} image - The image for drawing.
 * @param {Object} imageData - The image data.
 * @param {Object} canvasData - The canvas data.
 * @param {Object} options - The options.
 * @returns {HTMLCanvasElement} The result canvas.
 */

function getSourceCanvas(image, _ref6, _ref7, _ref8) {
  var imageAspectRatio = _ref6.aspectRatio,
      imageNaturalWidth = _ref6.naturalWidth,
      imageNaturalHeight = _ref6.naturalHeight,
      _ref6$rotate = _ref6.rotate,
      rotate = _ref6$rotate === void 0 ? 0 : _ref6$rotate,
      _ref6$scaleX = _ref6.scaleX,
      scaleX = _ref6$scaleX === void 0 ? 1 : _ref6$scaleX,
      _ref6$scaleY = _ref6.scaleY,
      scaleY = _ref6$scaleY === void 0 ? 1 : _ref6$scaleY;
  var aspectRatio = _ref7.aspectRatio,
      naturalWidth = _ref7.naturalWidth,
      naturalHeight = _ref7.naturalHeight;
  var _ref8$fillColor = _ref8.fillColor,
      fillColor = _ref8$fillColor === void 0 ? 'transparent' : _ref8$fillColor,
      _ref8$imageSmoothingE = _ref8.imageSmoothingEnabled,
      imageSmoothingEnabled = _ref8$imageSmoothingE === void 0 ? true : _ref8$imageSmoothingE,
      _ref8$imageSmoothingQ = _ref8.imageSmoothingQuality,
      imageSmoothingQuality = _ref8$imageSmoothingQ === void 0 ? 'low' : _ref8$imageSmoothingQ,
      _ref8$maxWidth = _ref8.maxWidth,
      maxWidth = _ref8$maxWidth === void 0 ? Infinity : _ref8$maxWidth,
      _ref8$maxHeight = _ref8.maxHeight,
      maxHeight = _ref8$maxHeight === void 0 ? Infinity : _ref8$maxHeight,
      _ref8$minWidth = _ref8.minWidth,
      minWidth = _ref8$minWidth === void 0 ? 0 : _ref8$minWidth,
      _ref8$minHeight = _ref8.minHeight,
      minHeight = _ref8$minHeight === void 0 ? 0 : _ref8$minHeight;
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  var maxSizes = getAdjustedSizes({
    aspectRatio: aspectRatio,
    width: maxWidth,
    height: maxHeight
  });
  var minSizes = getAdjustedSizes({
    aspectRatio: aspectRatio,
    width: minWidth,
    height: minHeight
  }, 'cover');
  var width = Math.min(maxSizes.width, Math.max(minSizes.width, naturalWidth));
  var height = Math.min(maxSizes.height, Math.max(minSizes.height, naturalHeight)); // Note: should always use image's natural sizes for drawing as
  // imageData.naturalWidth === canvasData.naturalHeight when rotate % 180 === 90

  var destMaxSizes = getAdjustedSizes({
    aspectRatio: imageAspectRatio,
    width: maxWidth,
    height: maxHeight
  });
  var destMinSizes = getAdjustedSizes({
    aspectRatio: imageAspectRatio,
    width: minWidth,
    height: minHeight
  }, 'cover');
  var destWidth = Math.min(destMaxSizes.width, Math.max(destMinSizes.width, imageNaturalWidth));
  var destHeight = Math.min(destMaxSizes.height, Math.max(destMinSizes.height, imageNaturalHeight));
  var params = [-destWidth / 2, -destHeight / 2, destWidth, destHeight];
  canvas.width = normalizeDecimalNumber(width);
  canvas.height = normalizeDecimalNumber(height);
  context.fillStyle = fillColor;
  context.fillRect(0, 0, width, height);
  context.save();
  context.translate(width / 2, height / 2);
  context.rotate(rotate * Math.PI / 180);
  context.scale(scaleX, scaleY);
  context.imageSmoothingEnabled = imageSmoothingEnabled;
  context.imageSmoothingQuality = imageSmoothingQuality;
  context.drawImage.apply(context, [image].concat(_toConsumableArray(params.map(function (param) {
    return Math.floor(normalizeDecimalNumber(param));
  }))));
  context.restore();
  return canvas;
}
var fromCharCode = String.fromCharCode;
/**
 * Get string from char code in data view.
 * @param {DataView} dataView - The data view for read.
 * @param {number} start - The start index.
 * @param {number} length - The read length.
 * @returns {string} The read result.
 */

function getStringFromCharCode(dataView, start, length) {
  var str = '';
  length += start;

  for (var i = start; i < length; i += 1) {
    str += fromCharCode(dataView.getUint8(i));
  }

  return str;
}
var REGEXP_DATA_URL_HEAD = /^data:.*,/;
/**
 * Transform Data URL to array buffer.
 * @param {string} dataURL - The Data URL to transform.
 * @returns {ArrayBuffer} The result array buffer.
 */

function dataURLToArrayBuffer(dataURL) {
  var base64 = dataURL.replace(REGEXP_DATA_URL_HEAD, '');
  var binary = atob(base64);
  var arrayBuffer = new ArrayBuffer(binary.length);
  var uint8 = new Uint8Array(arrayBuffer);
  forEach(uint8, function (value, i) {
    uint8[i] = binary.charCodeAt(i);
  });
  return arrayBuffer;
}
/**
 * Transform array buffer to Data URL.
 * @param {ArrayBuffer} arrayBuffer - The array buffer to transform.
 * @param {string} mimeType - The mime type of the Data URL.
 * @returns {string} The result Data URL.
 */

function arrayBufferToDataURL(arrayBuffer, mimeType) {
  var chunks = []; // Chunk Typed Array for better performance (#435)

  var chunkSize = 8192;
  var uint8 = new Uint8Array(arrayBuffer);

  while (uint8.length > 0) {
    // XXX: Babel's `toConsumableArray` helper will throw error in IE or Safari 9
    // eslint-disable-next-line prefer-spread
    chunks.push(fromCharCode.apply(null, toArray(uint8.subarray(0, chunkSize))));
    uint8 = uint8.subarray(chunkSize);
  }

  return "data:".concat(mimeType, ";base64,").concat(btoa(chunks.join('')));
}
/**
 * Get orientation value from given array buffer.
 * @param {ArrayBuffer} arrayBuffer - The array buffer to read.
 * @returns {number} The read orientation value.
 */

function resetAndGetOrientation(arrayBuffer) {
  var dataView = new DataView(arrayBuffer);
  var orientation; // Ignores range error when the image does not have correct Exif information

  try {
    var littleEndian;
    var app1Start;
    var ifdStart; // Only handle JPEG image (start by 0xFFD8)

    if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
      var length = dataView.byteLength;
      var offset = 2;

      while (offset + 1 < length) {
        if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
          app1Start = offset;
          break;
        }

        offset += 1;
      }
    }

    if (app1Start) {
      var exifIDCode = app1Start + 4;
      var tiffOffset = app1Start + 10;

      if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
        var endianness = dataView.getUint16(tiffOffset);
        littleEndian = endianness === 0x4949;

        if (littleEndian || endianness === 0x4D4D
        /* bigEndian */
        ) {
            if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
              var firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

              if (firstIFDOffset >= 0x00000008) {
                ifdStart = tiffOffset + firstIFDOffset;
              }
            }
          }
      }
    }

    if (ifdStart) {
      var _length = dataView.getUint16(ifdStart, littleEndian);

      var _offset;

      var i;

      for (i = 0; i < _length; i += 1) {
        _offset = ifdStart + i * 12 + 2;

        if (dataView.getUint16(_offset, littleEndian) === 0x0112
        /* Orientation */
        ) {
            // 8 is the offset of the current tag's value
            _offset += 8; // Get the original orientation value

            orientation = dataView.getUint16(_offset, littleEndian); // Override the orientation with its default value

            dataView.setUint16(_offset, 1, littleEndian);
            break;
          }
      }
    }
  } catch (error) {
    orientation = 1;
  }

  return orientation;
}
/**
 * Parse Exif Orientation value.
 * @param {number} orientation - The orientation to parse.
 * @returns {Object} The parsed result.
 */

function parseOrientation(orientation) {
  var rotate = 0;
  var scaleX = 1;
  var scaleY = 1;

  switch (orientation) {
    // Flip horizontal
    case 2:
      scaleX = -1;
      break;
    // Rotate left 180°

    case 3:
      rotate = -180;
      break;
    // Flip vertical

    case 4:
      scaleY = -1;
      break;
    // Flip vertical and rotate right 90°

    case 5:
      rotate = 90;
      scaleY = -1;
      break;
    // Rotate right 90°

    case 6:
      rotate = 90;
      break;
    // Flip horizontal and rotate right 90°

    case 7:
      rotate = 90;
      scaleX = -1;
      break;
    // Rotate left 90°

    case 8:
      rotate = -90;
      break;
  }

  return {
    rotate: rotate,
    scaleX: scaleX,
    scaleY: scaleY
  };
}

var render = {
  render: function render() {
    this.initContainer();
    this.initCanvas();
    this.initCropBox();
    this.renderCanvas();

    if (this.cropped) {
      this.renderCropBox();
    }
  },
  initContainer: function initContainer() {
    var element = this.element,
        options = this.options,
        container = this.container,
        cropper = this.cropper;
    var minWidth = Number(options.minContainerWidth);
    var minHeight = Number(options.minContainerHeight);
    addClass(cropper, CLASS_HIDDEN);
    removeClass(element, CLASS_HIDDEN);
    var containerData = {
      width: Math.max(container.offsetWidth, minWidth >= 0 ? minWidth : MIN_CONTAINER_WIDTH),
      height: Math.max(container.offsetHeight, minHeight >= 0 ? minHeight : MIN_CONTAINER_HEIGHT)
    };
    this.containerData = containerData;
    setStyle(cropper, {
      width: containerData.width,
      height: containerData.height
    });
    addClass(element, CLASS_HIDDEN);
    removeClass(cropper, CLASS_HIDDEN);
  },
  // Canvas (image wrapper)
  initCanvas: function initCanvas() {
    var containerData = this.containerData,
        imageData = this.imageData;
    var viewMode = this.options.viewMode;
    var rotated = Math.abs(imageData.rotate) % 180 === 90;
    var naturalWidth = rotated ? imageData.naturalHeight : imageData.naturalWidth;
    var naturalHeight = rotated ? imageData.naturalWidth : imageData.naturalHeight;
    var aspectRatio = naturalWidth / naturalHeight;
    var canvasWidth = containerData.width;
    var canvasHeight = containerData.height;

    if (containerData.height * aspectRatio > containerData.width) {
      if (viewMode === 3) {
        canvasWidth = containerData.height * aspectRatio;
      } else {
        canvasHeight = containerData.width / aspectRatio;
      }
    } else if (viewMode === 3) {
      canvasHeight = containerData.width / aspectRatio;
    } else {
      canvasWidth = containerData.height * aspectRatio;
    }

    var canvasData = {
      aspectRatio: aspectRatio,
      naturalWidth: naturalWidth,
      naturalHeight: naturalHeight,
      width: canvasWidth,
      height: canvasHeight
    };
    this.canvasData = canvasData;
    this.limited = viewMode === 1 || viewMode === 2;
    this.limitCanvas(true, true);
    canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
    canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
    canvasData.left = (containerData.width - canvasData.width) / 2;
    canvasData.top = (containerData.height - canvasData.height) / 2;
    canvasData.oldLeft = canvasData.left;
    canvasData.oldTop = canvasData.top;
    this.initialCanvasData = assign({}, canvasData);
  },
  limitCanvas: function limitCanvas(sizeLimited, positionLimited) {
    var options = this.options,
        containerData = this.containerData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
    var viewMode = options.viewMode;
    var aspectRatio = canvasData.aspectRatio;
    var cropped = this.cropped && cropBoxData;

    if (sizeLimited) {
      var minCanvasWidth = Number(options.minCanvasWidth) || 0;
      var minCanvasHeight = Number(options.minCanvasHeight) || 0;

      if (viewMode > 1) {
        minCanvasWidth = Math.max(minCanvasWidth, containerData.width);
        minCanvasHeight = Math.max(minCanvasHeight, containerData.height);

        if (viewMode === 3) {
          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
            minCanvasWidth = minCanvasHeight * aspectRatio;
          } else {
            minCanvasHeight = minCanvasWidth / aspectRatio;
          }
        }
      } else if (viewMode > 0) {
        if (minCanvasWidth) {
          minCanvasWidth = Math.max(minCanvasWidth, cropped ? cropBoxData.width : 0);
        } else if (minCanvasHeight) {
          minCanvasHeight = Math.max(minCanvasHeight, cropped ? cropBoxData.height : 0);
        } else if (cropped) {
          minCanvasWidth = cropBoxData.width;
          minCanvasHeight = cropBoxData.height;

          if (minCanvasHeight * aspectRatio > minCanvasWidth) {
            minCanvasWidth = minCanvasHeight * aspectRatio;
          } else {
            minCanvasHeight = minCanvasWidth / aspectRatio;
          }
        }
      }

      var _getAdjustedSizes = getAdjustedSizes({
        aspectRatio: aspectRatio,
        width: minCanvasWidth,
        height: minCanvasHeight
      });

      minCanvasWidth = _getAdjustedSizes.width;
      minCanvasHeight = _getAdjustedSizes.height;
      canvasData.minWidth = minCanvasWidth;
      canvasData.minHeight = minCanvasHeight;
      canvasData.maxWidth = Infinity;
      canvasData.maxHeight = Infinity;
    }

    if (positionLimited) {
      if (viewMode > (cropped ? 0 : 1)) {
        var newCanvasLeft = containerData.width - canvasData.width;
        var newCanvasTop = containerData.height - canvasData.height;
        canvasData.minLeft = Math.min(0, newCanvasLeft);
        canvasData.minTop = Math.min(0, newCanvasTop);
        canvasData.maxLeft = Math.max(0, newCanvasLeft);
        canvasData.maxTop = Math.max(0, newCanvasTop);

        if (cropped && this.limited) {
          canvasData.minLeft = Math.min(cropBoxData.left, cropBoxData.left + (cropBoxData.width - canvasData.width));
          canvasData.minTop = Math.min(cropBoxData.top, cropBoxData.top + (cropBoxData.height - canvasData.height));
          canvasData.maxLeft = cropBoxData.left;
          canvasData.maxTop = cropBoxData.top;

          if (viewMode === 2) {
            if (canvasData.width >= containerData.width) {
              canvasData.minLeft = Math.min(0, newCanvasLeft);
              canvasData.maxLeft = Math.max(0, newCanvasLeft);
            }

            if (canvasData.height >= containerData.height) {
              canvasData.minTop = Math.min(0, newCanvasTop);
              canvasData.maxTop = Math.max(0, newCanvasTop);
            }
          }
        }
      } else {
        canvasData.minLeft = -canvasData.width;
        canvasData.minTop = -canvasData.height;
        canvasData.maxLeft = containerData.width;
        canvasData.maxTop = containerData.height;
      }
    }
  },
  renderCanvas: function renderCanvas(changed, transformed) {
    var canvasData = this.canvasData,
        imageData = this.imageData;

    if (transformed) {
      var _getRotatedSizes = getRotatedSizes({
        width: imageData.naturalWidth * Math.abs(imageData.scaleX || 1),
        height: imageData.naturalHeight * Math.abs(imageData.scaleY || 1),
        degree: imageData.rotate || 0
      }),
          naturalWidth = _getRotatedSizes.width,
          naturalHeight = _getRotatedSizes.height;

      var width = canvasData.width * (naturalWidth / canvasData.naturalWidth);
      var height = canvasData.height * (naturalHeight / canvasData.naturalHeight);
      canvasData.left -= (width - canvasData.width) / 2;
      canvasData.top -= (height - canvasData.height) / 2;
      canvasData.width = width;
      canvasData.height = height;
      canvasData.aspectRatio = naturalWidth / naturalHeight;
      canvasData.naturalWidth = naturalWidth;
      canvasData.naturalHeight = naturalHeight;
      this.limitCanvas(true, false);
    }

    if (canvasData.width > canvasData.maxWidth || canvasData.width < canvasData.minWidth) {
      canvasData.left = canvasData.oldLeft;
    }

    if (canvasData.height > canvasData.maxHeight || canvasData.height < canvasData.minHeight) {
      canvasData.top = canvasData.oldTop;
    }

    canvasData.width = Math.min(Math.max(canvasData.width, canvasData.minWidth), canvasData.maxWidth);
    canvasData.height = Math.min(Math.max(canvasData.height, canvasData.minHeight), canvasData.maxHeight);
    this.limitCanvas(false, true);
    canvasData.left = Math.min(Math.max(canvasData.left, canvasData.minLeft), canvasData.maxLeft);
    canvasData.top = Math.min(Math.max(canvasData.top, canvasData.minTop), canvasData.maxTop);
    canvasData.oldLeft = canvasData.left;
    canvasData.oldTop = canvasData.top;
    setStyle(this.canvas, assign({
      width: canvasData.width,
      height: canvasData.height
    }, getTransforms({
      translateX: canvasData.left,
      translateY: canvasData.top
    })));
    this.renderImage(changed);

    if (this.cropped && this.limited) {
      this.limitCropBox(true, true);
    }
  },
  renderImage: function renderImage(changed) {
    var canvasData = this.canvasData,
        imageData = this.imageData;
    var width = imageData.naturalWidth * (canvasData.width / canvasData.naturalWidth);
    var height = imageData.naturalHeight * (canvasData.height / canvasData.naturalHeight);
    assign(imageData, {
      width: width,
      height: height,
      left: (canvasData.width - width) / 2,
      top: (canvasData.height - height) / 2
    });
    setStyle(this.image, assign({
      width: imageData.width,
      height: imageData.height
    }, getTransforms(assign({
      translateX: imageData.left,
      translateY: imageData.top
    }, imageData))));

    if (changed) {
      this.output();
    }
  },
  initCropBox: function initCropBox() {
    var options = this.options,
        canvasData = this.canvasData;
    var aspectRatio = options.aspectRatio || options.initialAspectRatio;
    var autoCropArea = Number(options.autoCropArea) || 0.8;
    var cropBoxData = {
      width: canvasData.width,
      height: canvasData.height
    };

    if (aspectRatio) {
      if (canvasData.height * aspectRatio > canvasData.width) {
        cropBoxData.height = cropBoxData.width / aspectRatio;
      } else {
        cropBoxData.width = cropBoxData.height * aspectRatio;
      }
    }

    this.cropBoxData = cropBoxData;
    this.limitCropBox(true, true); // Initialize auto crop area

    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight); // The width/height of auto crop area must large than "minWidth/Height"

    cropBoxData.width = Math.max(cropBoxData.minWidth, cropBoxData.width * autoCropArea);
    cropBoxData.height = Math.max(cropBoxData.minHeight, cropBoxData.height * autoCropArea);
    cropBoxData.left = canvasData.left + (canvasData.width - cropBoxData.width) / 2;
    cropBoxData.top = canvasData.top + (canvasData.height - cropBoxData.height) / 2;
    cropBoxData.oldLeft = cropBoxData.left;
    cropBoxData.oldTop = cropBoxData.top;
    this.initialCropBoxData = assign({}, cropBoxData);
  },
  limitCropBox: function limitCropBox(sizeLimited, positionLimited) {
    var options = this.options,
        containerData = this.containerData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData,
        limited = this.limited;
    var aspectRatio = options.aspectRatio;

    if (sizeLimited) {
      var minCropBoxWidth = Number(options.minCropBoxWidth) || 0;
      var minCropBoxHeight = Number(options.minCropBoxHeight) || 0;
      var maxCropBoxWidth = limited ? Math.min(containerData.width, canvasData.width, canvasData.width + canvasData.left, containerData.width - canvasData.left) : containerData.width;
      var maxCropBoxHeight = limited ? Math.min(containerData.height, canvasData.height, canvasData.height + canvasData.top, containerData.height - canvasData.top) : containerData.height; // The min/maxCropBoxWidth/Height must be less than container's width/height

      minCropBoxWidth = Math.min(minCropBoxWidth, containerData.width);
      minCropBoxHeight = Math.min(minCropBoxHeight, containerData.height);

      if (aspectRatio) {
        if (minCropBoxWidth && minCropBoxHeight) {
          if (minCropBoxHeight * aspectRatio > minCropBoxWidth) {
            minCropBoxHeight = minCropBoxWidth / aspectRatio;
          } else {
            minCropBoxWidth = minCropBoxHeight * aspectRatio;
          }
        } else if (minCropBoxWidth) {
          minCropBoxHeight = minCropBoxWidth / aspectRatio;
        } else if (minCropBoxHeight) {
          minCropBoxWidth = minCropBoxHeight * aspectRatio;
        }

        if (maxCropBoxHeight * aspectRatio > maxCropBoxWidth) {
          maxCropBoxHeight = maxCropBoxWidth / aspectRatio;
        } else {
          maxCropBoxWidth = maxCropBoxHeight * aspectRatio;
        }
      } // The minWidth/Height must be less than maxWidth/Height


      cropBoxData.minWidth = Math.min(minCropBoxWidth, maxCropBoxWidth);
      cropBoxData.minHeight = Math.min(minCropBoxHeight, maxCropBoxHeight);
      cropBoxData.maxWidth = maxCropBoxWidth;
      cropBoxData.maxHeight = maxCropBoxHeight;
    }

    if (positionLimited) {
      if (limited) {
        cropBoxData.minLeft = Math.max(0, canvasData.left);
        cropBoxData.minTop = Math.max(0, canvasData.top);
        cropBoxData.maxLeft = Math.min(containerData.width, canvasData.left + canvasData.width) - cropBoxData.width;
        cropBoxData.maxTop = Math.min(containerData.height, canvasData.top + canvasData.height) - cropBoxData.height;
      } else {
        cropBoxData.minLeft = 0;
        cropBoxData.minTop = 0;
        cropBoxData.maxLeft = containerData.width - cropBoxData.width;
        cropBoxData.maxTop = containerData.height - cropBoxData.height;
      }
    }
  },
  renderCropBox: function renderCropBox() {
    var options = this.options,
        containerData = this.containerData,
        cropBoxData = this.cropBoxData;

    if (cropBoxData.width > cropBoxData.maxWidth || cropBoxData.width < cropBoxData.minWidth) {
      cropBoxData.left = cropBoxData.oldLeft;
    }

    if (cropBoxData.height > cropBoxData.maxHeight || cropBoxData.height < cropBoxData.minHeight) {
      cropBoxData.top = cropBoxData.oldTop;
    }

    cropBoxData.width = Math.min(Math.max(cropBoxData.width, cropBoxData.minWidth), cropBoxData.maxWidth);
    cropBoxData.height = Math.min(Math.max(cropBoxData.height, cropBoxData.minHeight), cropBoxData.maxHeight);
    this.limitCropBox(false, true);
    cropBoxData.left = Math.min(Math.max(cropBoxData.left, cropBoxData.minLeft), cropBoxData.maxLeft);
    cropBoxData.top = Math.min(Math.max(cropBoxData.top, cropBoxData.minTop), cropBoxData.maxTop);
    cropBoxData.oldLeft = cropBoxData.left;
    cropBoxData.oldTop = cropBoxData.top;

    if (options.movable && options.cropBoxMovable) {
      // Turn to move the canvas when the crop box is equal to the container
      setData(this.face, DATA_ACTION, cropBoxData.width >= containerData.width && cropBoxData.height >= containerData.height ? ACTION_MOVE : ACTION_ALL);
    }

    setStyle(this.cropBox, assign({
      width: cropBoxData.width,
      height: cropBoxData.height
    }, getTransforms({
      translateX: cropBoxData.left,
      translateY: cropBoxData.top
    })));

    if (this.cropped && this.limited) {
      this.limitCanvas(true, true);
    }

    if (!this.disabled) {
      this.output();
    }
  },
  output: function output() {
    this.preview();
    dispatchEvent(this.element, EVENT_CROP, this.getData());
  }
};

var preview = {
  initPreview: function initPreview() {
    var element = this.element,
        crossOrigin = this.crossOrigin;
    var preview = this.options.preview;
    var url = crossOrigin ? this.crossOriginUrl : this.url;
    var alt = element.alt || 'The image to preview';
    var image = document.createElement('img');

    if (crossOrigin) {
      image.crossOrigin = crossOrigin;
    }

    image.src = url;
    image.alt = alt;
    this.viewBox.appendChild(image);
    this.viewBoxImage = image;

    if (!preview) {
      return;
    }

    var previews = preview;

    if (typeof preview === 'string') {
      previews = element.ownerDocument.querySelectorAll(preview);
    } else if (preview.querySelector) {
      previews = [preview];
    }

    this.previews = previews;
    forEach(previews, function (el) {
      var img = document.createElement('img'); // Save the original size for recover

      setData(el, DATA_PREVIEW, {
        width: el.offsetWidth,
        height: el.offsetHeight,
        html: el.innerHTML
      });

      if (crossOrigin) {
        img.crossOrigin = crossOrigin;
      }

      img.src = url;
      img.alt = alt;
      /**
       * Override img element styles
       * Add `display:block` to avoid margin top issue
       * Add `height:auto` to override `height` attribute on IE8
       * (Occur only when margin-top <= -height)
       */

      img.style.cssText = 'display:block;' + 'width:100%;' + 'height:auto;' + 'min-width:0!important;' + 'min-height:0!important;' + 'max-width:none!important;' + 'max-height:none!important;' + 'image-orientation:0deg!important;"';
      el.innerHTML = '';
      el.appendChild(img);
    });
  },
  resetPreview: function resetPreview() {
    forEach(this.previews, function (element) {
      var data = getData(element, DATA_PREVIEW);
      setStyle(element, {
        width: data.width,
        height: data.height
      });
      element.innerHTML = data.html;
      removeData(element, DATA_PREVIEW);
    });
  },
  preview: function preview() {
    var imageData = this.imageData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
    var cropBoxWidth = cropBoxData.width,
        cropBoxHeight = cropBoxData.height;
    var width = imageData.width,
        height = imageData.height;
    var left = cropBoxData.left - canvasData.left - imageData.left;
    var top = cropBoxData.top - canvasData.top - imageData.top;

    if (!this.cropped || this.disabled) {
      return;
    }

    setStyle(this.viewBoxImage, assign({
      width: width,
      height: height
    }, getTransforms(assign({
      translateX: -left,
      translateY: -top
    }, imageData))));
    forEach(this.previews, function (element) {
      var data = getData(element, DATA_PREVIEW);
      var originalWidth = data.width;
      var originalHeight = data.height;
      var newWidth = originalWidth;
      var newHeight = originalHeight;
      var ratio = 1;

      if (cropBoxWidth) {
        ratio = originalWidth / cropBoxWidth;
        newHeight = cropBoxHeight * ratio;
      }

      if (cropBoxHeight && newHeight > originalHeight) {
        ratio = originalHeight / cropBoxHeight;
        newWidth = cropBoxWidth * ratio;
        newHeight = originalHeight;
      }

      setStyle(element, {
        width: newWidth,
        height: newHeight
      });
      setStyle(element.getElementsByTagName('img')[0], assign({
        width: width * ratio,
        height: height * ratio
      }, getTransforms(assign({
        translateX: -left * ratio,
        translateY: -top * ratio
      }, imageData))));
    });
  }
};

var events = {
  bind: function bind() {
    var element = this.element,
        options = this.options,
        cropper = this.cropper;

    if (isFunction(options.cropstart)) {
      addListener(element, EVENT_CROP_START, options.cropstart);
    }

    if (isFunction(options.cropmove)) {
      addListener(element, EVENT_CROP_MOVE, options.cropmove);
    }

    if (isFunction(options.cropend)) {
      addListener(element, EVENT_CROP_END, options.cropend);
    }

    if (isFunction(options.crop)) {
      addListener(element, EVENT_CROP, options.crop);
    }

    if (isFunction(options.zoom)) {
      addListener(element, EVENT_ZOOM, options.zoom);
    }

    addListener(cropper, EVENT_POINTER_DOWN, this.onCropStart = this.cropStart.bind(this));

    if (options.zoomable && options.zoomOnWheel) {
      addListener(cropper, EVENT_WHEEL, this.onWheel = this.wheel.bind(this), {
        passive: false,
        capture: true
      });
    }

    if (options.toggleDragModeOnDblclick) {
      addListener(cropper, EVENT_DBLCLICK, this.onDblclick = this.dblclick.bind(this));
    }

    addListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove = this.cropMove.bind(this));
    addListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd = this.cropEnd.bind(this));

    if (options.responsive) {
      addListener(window, EVENT_RESIZE, this.onResize = this.resize.bind(this));
    }
  },
  unbind: function unbind() {
    var element = this.element,
        options = this.options,
        cropper = this.cropper;

    if (isFunction(options.cropstart)) {
      removeListener(element, EVENT_CROP_START, options.cropstart);
    }

    if (isFunction(options.cropmove)) {
      removeListener(element, EVENT_CROP_MOVE, options.cropmove);
    }

    if (isFunction(options.cropend)) {
      removeListener(element, EVENT_CROP_END, options.cropend);
    }

    if (isFunction(options.crop)) {
      removeListener(element, EVENT_CROP, options.crop);
    }

    if (isFunction(options.zoom)) {
      removeListener(element, EVENT_ZOOM, options.zoom);
    }

    removeListener(cropper, EVENT_POINTER_DOWN, this.onCropStart);

    if (options.zoomable && options.zoomOnWheel) {
      removeListener(cropper, EVENT_WHEEL, this.onWheel, {
        passive: false,
        capture: true
      });
    }

    if (options.toggleDragModeOnDblclick) {
      removeListener(cropper, EVENT_DBLCLICK, this.onDblclick);
    }

    removeListener(element.ownerDocument, EVENT_POINTER_MOVE, this.onCropMove);
    removeListener(element.ownerDocument, EVENT_POINTER_UP, this.onCropEnd);

    if (options.responsive) {
      removeListener(window, EVENT_RESIZE, this.onResize);
    }
  }
};

var handlers = {
  resize: function resize() {
    if (this.disabled) {
      return;
    }

    var options = this.options,
        container = this.container,
        containerData = this.containerData;
    var ratioX = container.offsetWidth / containerData.width;
    var ratioY = container.offsetHeight / containerData.height;
    var ratio = Math.abs(ratioX - 1) > Math.abs(ratioY - 1) ? ratioX : ratioY; // Resize when width changed or height changed

    if (ratio !== 1) {
      var canvasData;
      var cropBoxData;

      if (options.restore) {
        canvasData = this.getCanvasData();
        cropBoxData = this.getCropBoxData();
      }

      this.render();

      if (options.restore) {
        this.setCanvasData(forEach(canvasData, function (n, i) {
          canvasData[i] = n * ratio;
        }));
        this.setCropBoxData(forEach(cropBoxData, function (n, i) {
          cropBoxData[i] = n * ratio;
        }));
      }
    }
  },
  dblclick: function dblclick() {
    if (this.disabled || this.options.dragMode === DRAG_MODE_NONE) {
      return;
    }

    this.setDragMode(hasClass(this.dragBox, CLASS_CROP) ? DRAG_MODE_MOVE : DRAG_MODE_CROP);
  },
  wheel: function wheel(event) {
    var _this = this;

    var ratio = Number(this.options.wheelZoomRatio) || 0.1;
    var delta = 1;

    if (this.disabled) {
      return;
    }

    event.preventDefault(); // Limit wheel speed to prevent zoom too fast (#21)

    if (this.wheeling) {
      return;
    }

    this.wheeling = true;
    setTimeout(function () {
      _this.wheeling = false;
    }, 50);

    if (event.deltaY) {
      delta = event.deltaY > 0 ? 1 : -1;
    } else if (event.wheelDelta) {
      delta = -event.wheelDelta / 120;
    } else if (event.detail) {
      delta = event.detail > 0 ? 1 : -1;
    }

    this.zoom(-delta * ratio, event);
  },
  cropStart: function cropStart(event) {
    var buttons = event.buttons,
        button = event.button;

    if (this.disabled // Handle mouse event and pointer event and ignore touch event
    || (event.type === 'mousedown' || event.type === 'pointerdown' && event.pointerType === 'mouse') && ( // No primary button (Usually the left button)
    isNumber(buttons) && buttons !== 1 || isNumber(button) && button !== 0 // Open context menu
    || event.ctrlKey)) {
      return;
    }

    var options = this.options,
        pointers = this.pointers;
    var action;

    if (event.changedTouches) {
      // Handle touch event
      forEach(event.changedTouches, function (touch) {
        pointers[touch.identifier] = getPointer(touch);
      });
    } else {
      // Handle mouse event and pointer event
      pointers[event.pointerId || 0] = getPointer(event);
    }

    if (Object.keys(pointers).length > 1 && options.zoomable && options.zoomOnTouch) {
      action = ACTION_ZOOM;
    } else {
      action = getData(event.target, DATA_ACTION);
    }

    if (!REGEXP_ACTIONS.test(action)) {
      return;
    }

    if (dispatchEvent(this.element, EVENT_CROP_START, {
      originalEvent: event,
      action: action
    }) === false) {
      return;
    } // This line is required for preventing page zooming in iOS browsers


    event.preventDefault();
    this.action = action;
    this.cropping = false;

    if (action === ACTION_CROP) {
      this.cropping = true;
      addClass(this.dragBox, CLASS_MODAL);
    }
  },
  cropMove: function cropMove(event) {
    var action = this.action;

    if (this.disabled || !action) {
      return;
    }

    var pointers = this.pointers;
    event.preventDefault();

    if (dispatchEvent(this.element, EVENT_CROP_MOVE, {
      originalEvent: event,
      action: action
    }) === false) {
      return;
    }

    if (event.changedTouches) {
      forEach(event.changedTouches, function (touch) {
        // The first parameter should not be undefined (#432)
        assign(pointers[touch.identifier] || {}, getPointer(touch, true));
      });
    } else {
      assign(pointers[event.pointerId || 0] || {}, getPointer(event, true));
    }

    this.change(event);
  },
  cropEnd: function cropEnd(event) {
    if (this.disabled) {
      return;
    }

    var action = this.action,
        pointers = this.pointers;

    if (event.changedTouches) {
      forEach(event.changedTouches, function (touch) {
        delete pointers[touch.identifier];
      });
    } else {
      delete pointers[event.pointerId || 0];
    }

    if (!action) {
      return;
    }

    event.preventDefault();

    if (!Object.keys(pointers).length) {
      this.action = '';
    }

    if (this.cropping) {
      this.cropping = false;
      toggleClass(this.dragBox, CLASS_MODAL, this.cropped && this.options.modal);
    }

    dispatchEvent(this.element, EVENT_CROP_END, {
      originalEvent: event,
      action: action
    });
  }
};

var change = {
  change: function change(event) {
    var options = this.options,
        canvasData = this.canvasData,
        containerData = this.containerData,
        cropBoxData = this.cropBoxData,
        pointers = this.pointers;
    var action = this.action;
    var aspectRatio = options.aspectRatio;
    var left = cropBoxData.left,
        top = cropBoxData.top,
        width = cropBoxData.width,
        height = cropBoxData.height;
    var right = left + width;
    var bottom = top + height;
    var minLeft = 0;
    var minTop = 0;
    var maxWidth = containerData.width;
    var maxHeight = containerData.height;
    var renderable = true;
    var offset; // Locking aspect ratio in "free mode" by holding shift key

    if (!aspectRatio && event.shiftKey) {
      aspectRatio = width && height ? width / height : 1;
    }

    if (this.limited) {
      minLeft = cropBoxData.minLeft;
      minTop = cropBoxData.minTop;
      maxWidth = minLeft + Math.min(containerData.width, canvasData.width, canvasData.left + canvasData.width);
      maxHeight = minTop + Math.min(containerData.height, canvasData.height, canvasData.top + canvasData.height);
    }

    var pointer = pointers[Object.keys(pointers)[0]];
    var range = {
      x: pointer.endX - pointer.startX,
      y: pointer.endY - pointer.startY
    };

    var check = function check(side) {
      switch (side) {
        case ACTION_EAST:
          if (right + range.x > maxWidth) {
            range.x = maxWidth - right;
          }

          break;

        case ACTION_WEST:
          if (left + range.x < minLeft) {
            range.x = minLeft - left;
          }

          break;

        case ACTION_NORTH:
          if (top + range.y < minTop) {
            range.y = minTop - top;
          }

          break;

        case ACTION_SOUTH:
          if (bottom + range.y > maxHeight) {
            range.y = maxHeight - bottom;
          }

          break;
      }
    };

    switch (action) {
      // Move crop box
      case ACTION_ALL:
        left += range.x;
        top += range.y;
        break;
      // Resize crop box

      case ACTION_EAST:
        if (range.x >= 0 && (right >= maxWidth || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }

        check(ACTION_EAST);
        width += range.x;

        if (width < 0) {
          action = ACTION_WEST;
          width = -width;
          left -= width;
        }

        if (aspectRatio) {
          height = width / aspectRatio;
          top += (cropBoxData.height - height) / 2;
        }

        break;

      case ACTION_NORTH:
        if (range.y <= 0 && (top <= minTop || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }

        check(ACTION_NORTH);
        height -= range.y;
        top += range.y;

        if (height < 0) {
          action = ACTION_SOUTH;
          height = -height;
          top -= height;
        }

        if (aspectRatio) {
          width = height * aspectRatio;
          left += (cropBoxData.width - width) / 2;
        }

        break;

      case ACTION_WEST:
        if (range.x <= 0 && (left <= minLeft || aspectRatio && (top <= minTop || bottom >= maxHeight))) {
          renderable = false;
          break;
        }

        check(ACTION_WEST);
        width -= range.x;
        left += range.x;

        if (width < 0) {
          action = ACTION_EAST;
          width = -width;
          left -= width;
        }

        if (aspectRatio) {
          height = width / aspectRatio;
          top += (cropBoxData.height - height) / 2;
        }

        break;

      case ACTION_SOUTH:
        if (range.y >= 0 && (bottom >= maxHeight || aspectRatio && (left <= minLeft || right >= maxWidth))) {
          renderable = false;
          break;
        }

        check(ACTION_SOUTH);
        height += range.y;

        if (height < 0) {
          action = ACTION_NORTH;
          height = -height;
          top -= height;
        }

        if (aspectRatio) {
          width = height * aspectRatio;
          left += (cropBoxData.width - width) / 2;
        }

        break;

      case ACTION_NORTH_EAST:
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || right >= maxWidth)) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
        } else {
          check(ACTION_NORTH);
          check(ACTION_EAST);

          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width += range.x;
          }

          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = ACTION_SOUTH_WEST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_NORTH_WEST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_SOUTH_EAST;
          height = -height;
          top -= height;
        }

        break;

      case ACTION_NORTH_WEST:
        if (aspectRatio) {
          if (range.y <= 0 && (top <= minTop || left <= minLeft)) {
            renderable = false;
            break;
          }

          check(ACTION_NORTH);
          height -= range.y;
          top += range.y;
          width = height * aspectRatio;
          left += cropBoxData.width - width;
        } else {
          check(ACTION_NORTH);
          check(ACTION_WEST);

          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y <= 0 && top <= minTop) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }

          if (range.y <= 0) {
            if (top > minTop) {
              height -= range.y;
              top += range.y;
            }
          } else {
            height -= range.y;
            top += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = ACTION_SOUTH_EAST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_NORTH_EAST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_SOUTH_WEST;
          height = -height;
          top -= height;
        }

        break;

      case ACTION_SOUTH_WEST:
        if (aspectRatio) {
          if (range.x <= 0 && (left <= minLeft || bottom >= maxHeight)) {
            renderable = false;
            break;
          }

          check(ACTION_WEST);
          width -= range.x;
          left += range.x;
          height = width / aspectRatio;
        } else {
          check(ACTION_SOUTH);
          check(ACTION_WEST);

          if (range.x <= 0) {
            if (left > minLeft) {
              width -= range.x;
              left += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width -= range.x;
            left += range.x;
          }

          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = ACTION_NORTH_EAST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_SOUTH_EAST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_NORTH_WEST;
          height = -height;
          top -= height;
        }

        break;

      case ACTION_SOUTH_EAST:
        if (aspectRatio) {
          if (range.x >= 0 && (right >= maxWidth || bottom >= maxHeight)) {
            renderable = false;
            break;
          }

          check(ACTION_EAST);
          width += range.x;
          height = width / aspectRatio;
        } else {
          check(ACTION_SOUTH);
          check(ACTION_EAST);

          if (range.x >= 0) {
            if (right < maxWidth) {
              width += range.x;
            } else if (range.y >= 0 && bottom >= maxHeight) {
              renderable = false;
            }
          } else {
            width += range.x;
          }

          if (range.y >= 0) {
            if (bottom < maxHeight) {
              height += range.y;
            }
          } else {
            height += range.y;
          }
        }

        if (width < 0 && height < 0) {
          action = ACTION_NORTH_WEST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_SOUTH_WEST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_NORTH_EAST;
          height = -height;
          top -= height;
        }

        break;
      // Move canvas

      case ACTION_MOVE:
        this.move(range.x, range.y);
        renderable = false;
        break;
      // Zoom canvas

      case ACTION_ZOOM:
        this.zoom(getMaxZoomRatio(pointers), event);
        renderable = false;
        break;
      // Create crop box

      case ACTION_CROP:
        if (!range.x || !range.y) {
          renderable = false;
          break;
        }

        offset = getOffset(this.cropper);
        left = pointer.startX - offset.left;
        top = pointer.startY - offset.top;
        width = cropBoxData.minWidth;
        height = cropBoxData.minHeight;

        if (range.x > 0) {
          action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
        } else if (range.x < 0) {
          left -= width;
          action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
        }

        if (range.y < 0) {
          top -= height;
        } // Show the crop box if is hidden


        if (!this.cropped) {
          removeClass(this.cropBox, CLASS_HIDDEN);
          this.cropped = true;

          if (this.limited) {
            this.limitCropBox(true, true);
          }
        }

        break;
    }

    if (renderable) {
      cropBoxData.width = width;
      cropBoxData.height = height;
      cropBoxData.left = left;
      cropBoxData.top = top;
      this.action = action;
      this.renderCropBox();
    } // Override


    forEach(pointers, function (p) {
      p.startX = p.endX;
      p.startY = p.endY;
    });
  }
};

var methods = {
  // Show the crop box manually
  crop: function crop() {
    if (this.ready && !this.cropped && !this.disabled) {
      this.cropped = true;
      this.limitCropBox(true, true);

      if (this.options.modal) {
        addClass(this.dragBox, CLASS_MODAL);
      }

      removeClass(this.cropBox, CLASS_HIDDEN);
      this.setCropBoxData(this.initialCropBoxData);
    }

    return this;
  },
  // Reset the image and crop box to their initial states
  reset: function reset() {
    if (this.ready && !this.disabled) {
      this.imageData = assign({}, this.initialImageData);
      this.canvasData = assign({}, this.initialCanvasData);
      this.cropBoxData = assign({}, this.initialCropBoxData);
      this.renderCanvas();

      if (this.cropped) {
        this.renderCropBox();
      }
    }

    return this;
  },
  // Clear the crop box
  clear: function clear() {
    if (this.cropped && !this.disabled) {
      assign(this.cropBoxData, {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      });
      this.cropped = false;
      this.renderCropBox();
      this.limitCanvas(true, true); // Render canvas after crop box rendered

      this.renderCanvas();
      removeClass(this.dragBox, CLASS_MODAL);
      addClass(this.cropBox, CLASS_HIDDEN);
    }

    return this;
  },

  /**
   * Replace the image's src and rebuild the cropper
   * @param {string} url - The new URL.
   * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
   * @returns {Cropper} this
   */
  replace: function replace(url) {
    var hasSameSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (!this.disabled && url) {
      if (this.isImg) {
        this.element.src = url;
      }

      if (hasSameSize) {
        this.url = url;
        this.image.src = url;

        if (this.ready) {
          this.viewBoxImage.src = url;
          forEach(this.previews, function (element) {
            element.getElementsByTagName('img')[0].src = url;
          });
        }
      } else {
        if (this.isImg) {
          this.replaced = true;
        }

        this.options.data = null;
        this.uncreate();
        this.load(url);
      }
    }

    return this;
  },
  // Enable (unfreeze) the cropper
  enable: function enable() {
    if (this.ready && this.disabled) {
      this.disabled = false;
      removeClass(this.cropper, CLASS_DISABLED);
    }

    return this;
  },
  // Disable (freeze) the cropper
  disable: function disable() {
    if (this.ready && !this.disabled) {
      this.disabled = true;
      addClass(this.cropper, CLASS_DISABLED);
    }

    return this;
  },

  /**
   * Destroy the cropper and remove the instance from the image
   * @returns {Cropper} this
   */
  destroy: function destroy() {
    var element = this.element;

    if (!element[NAMESPACE]) {
      return this;
    }

    element[NAMESPACE] = undefined;

    if (this.isImg && this.replaced) {
      element.src = this.originalUrl;
    }

    this.uncreate();
    return this;
  },

  /**
   * Move the canvas with relative offsets
   * @param {number} offsetX - The relative offset distance on the x-axis.
   * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
   * @returns {Cropper} this
   */
  move: function move(offsetX) {
    var offsetY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : offsetX;
    var _this$canvasData = this.canvasData,
        left = _this$canvasData.left,
        top = _this$canvasData.top;
    return this.moveTo(isUndefined(offsetX) ? offsetX : left + Number(offsetX), isUndefined(offsetY) ? offsetY : top + Number(offsetY));
  },

  /**
   * Move the canvas to an absolute point
   * @param {number} x - The x-axis coordinate.
   * @param {number} [y=x] - The y-axis coordinate.
   * @returns {Cropper} this
   */
  moveTo: function moveTo(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
    var canvasData = this.canvasData;
    var changed = false;
    x = Number(x);
    y = Number(y);

    if (this.ready && !this.disabled && this.options.movable) {
      if (isNumber(x)) {
        canvasData.left = x;
        changed = true;
      }

      if (isNumber(y)) {
        canvasData.top = y;
        changed = true;
      }

      if (changed) {
        this.renderCanvas(true);
      }
    }

    return this;
  },

  /**
   * Zoom the canvas with a relative ratio
   * @param {number} ratio - The target ratio.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoom: function zoom(ratio, _originalEvent) {
    var canvasData = this.canvasData;
    ratio = Number(ratio);

    if (ratio < 0) {
      ratio = 1 / (1 - ratio);
    } else {
      ratio = 1 + ratio;
    }

    return this.zoomTo(canvasData.width * ratio / canvasData.naturalWidth, null, _originalEvent);
  },

  /**
   * Zoom the canvas to an absolute ratio
   * @param {number} ratio - The target ratio.
   * @param {Object} pivot - The zoom pivot point coordinate.
   * @param {Event} _originalEvent - The original event if any.
   * @returns {Cropper} this
   */
  zoomTo: function zoomTo(ratio, pivot, _originalEvent) {
    var options = this.options,
        canvasData = this.canvasData;
    var width = canvasData.width,
        height = canvasData.height,
        naturalWidth = canvasData.naturalWidth,
        naturalHeight = canvasData.naturalHeight;
    ratio = Number(ratio);

    if (ratio >= 0 && this.ready && !this.disabled && options.zoomable) {
      var newWidth = naturalWidth * ratio;
      var newHeight = naturalHeight * ratio;

      if (dispatchEvent(this.element, EVENT_ZOOM, {
        ratio: ratio,
        oldRatio: width / naturalWidth,
        originalEvent: _originalEvent
      }) === false) {
        return this;
      }

      if (_originalEvent) {
        var pointers = this.pointers;
        var offset = getOffset(this.cropper);
        var center = pointers && Object.keys(pointers).length ? getPointersCenter(pointers) : {
          pageX: _originalEvent.pageX,
          pageY: _originalEvent.pageY
        }; // Zoom from the triggering point of the event

        canvasData.left -= (newWidth - width) * ((center.pageX - offset.left - canvasData.left) / width);
        canvasData.top -= (newHeight - height) * ((center.pageY - offset.top - canvasData.top) / height);
      } else if (isPlainObject(pivot) && isNumber(pivot.x) && isNumber(pivot.y)) {
        canvasData.left -= (newWidth - width) * ((pivot.x - canvasData.left) / width);
        canvasData.top -= (newHeight - height) * ((pivot.y - canvasData.top) / height);
      } else {
        // Zoom from the center of the canvas
        canvasData.left -= (newWidth - width) / 2;
        canvasData.top -= (newHeight - height) / 2;
      }

      canvasData.width = newWidth;
      canvasData.height = newHeight;
      this.renderCanvas(true);
    }

    return this;
  },

  /**
   * Rotate the canvas with a relative degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotate: function rotate(degree) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(degree));
  },

  /**
   * Rotate the canvas to an absolute degree
   * @param {number} degree - The rotate degree.
   * @returns {Cropper} this
   */
  rotateTo: function rotateTo(degree) {
    degree = Number(degree);

    if (isNumber(degree) && this.ready && !this.disabled && this.options.rotatable) {
      this.imageData.rotate = degree % 360;
      this.renderCanvas(true, true);
    }

    return this;
  },

  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Cropper} this
   */
  scaleX: function scaleX(_scaleX) {
    var scaleY = this.imageData.scaleY;
    return this.scale(_scaleX, isNumber(scaleY) ? scaleY : 1);
  },

  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scaleY: function scaleY(_scaleY) {
    var scaleX = this.imageData.scaleX;
    return this.scale(isNumber(scaleX) ? scaleX : 1, _scaleY);
  },

  /**
   * Scale the image
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Cropper} this
   */
  scale: function scale(scaleX) {
    var scaleY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : scaleX;
    var imageData = this.imageData;
    var transformed = false;
    scaleX = Number(scaleX);
    scaleY = Number(scaleY);

    if (this.ready && !this.disabled && this.options.scalable) {
      if (isNumber(scaleX)) {
        imageData.scaleX = scaleX;
        transformed = true;
      }

      if (isNumber(scaleY)) {
        imageData.scaleY = scaleY;
        transformed = true;
      }

      if (transformed) {
        this.renderCanvas(true, true);
      }
    }

    return this;
  },

  /**
   * Get the cropped area position and size data (base on the original image)
   * @param {boolean} [rounded=false] - Indicate if round the data values or not.
   * @returns {Object} The result cropped data.
   */
  getData: function getData() {
    var rounded = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var options = this.options,
        imageData = this.imageData,
        canvasData = this.canvasData,
        cropBoxData = this.cropBoxData;
    var data;

    if (this.ready && this.cropped) {
      data = {
        x: cropBoxData.left - canvasData.left,
        y: cropBoxData.top - canvasData.top,
        width: cropBoxData.width,
        height: cropBoxData.height
      };
      var ratio = imageData.width / imageData.naturalWidth;
      forEach(data, function (n, i) {
        data[i] = n / ratio;
      });

      if (rounded) {
        // In case rounding off leads to extra 1px in right or bottom border
        // we should round the top-left corner and the dimension (#343).
        var bottom = Math.round(data.y + data.height);
        var right = Math.round(data.x + data.width);
        data.x = Math.round(data.x);
        data.y = Math.round(data.y);
        data.width = right - data.x;
        data.height = bottom - data.y;
      }
    } else {
      data = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }

    if (options.rotatable) {
      data.rotate = imageData.rotate || 0;
    }

    if (options.scalable) {
      data.scaleX = imageData.scaleX || 1;
      data.scaleY = imageData.scaleY || 1;
    }

    return data;
  },

  /**
   * Set the cropped area position and size with new data
   * @param {Object} data - The new data.
   * @returns {Cropper} this
   */
  setData: function setData(data) {
    var options = this.options,
        imageData = this.imageData,
        canvasData = this.canvasData;
    var cropBoxData = {};

    if (this.ready && !this.disabled && isPlainObject(data)) {
      var transformed = false;

      if (options.rotatable) {
        if (isNumber(data.rotate) && data.rotate !== imageData.rotate) {
          imageData.rotate = data.rotate;
          transformed = true;
        }
      }

      if (options.scalable) {
        if (isNumber(data.scaleX) && data.scaleX !== imageData.scaleX) {
          imageData.scaleX = data.scaleX;
          transformed = true;
        }

        if (isNumber(data.scaleY) && data.scaleY !== imageData.scaleY) {
          imageData.scaleY = data.scaleY;
          transformed = true;
        }
      }

      if (transformed) {
        this.renderCanvas(true, true);
      }

      var ratio = imageData.width / imageData.naturalWidth;

      if (isNumber(data.x)) {
        cropBoxData.left = data.x * ratio + canvasData.left;
      }

      if (isNumber(data.y)) {
        cropBoxData.top = data.y * ratio + canvasData.top;
      }

      if (isNumber(data.width)) {
        cropBoxData.width = data.width * ratio;
      }

      if (isNumber(data.height)) {
        cropBoxData.height = data.height * ratio;
      }

      this.setCropBoxData(cropBoxData);
    }

    return this;
  },

  /**
   * Get the container size data.
   * @returns {Object} The result container data.
   */
  getContainerData: function getContainerData() {
    return this.ready ? assign({}, this.containerData) : {};
  },

  /**
   * Get the image position and size data.
   * @returns {Object} The result image data.
   */
  getImageData: function getImageData() {
    return this.sized ? assign({}, this.imageData) : {};
  },

  /**
   * Get the canvas position and size data.
   * @returns {Object} The result canvas data.
   */
  getCanvasData: function getCanvasData() {
    var canvasData = this.canvasData;
    var data = {};

    if (this.ready) {
      forEach(['left', 'top', 'width', 'height', 'naturalWidth', 'naturalHeight'], function (n) {
        data[n] = canvasData[n];
      });
    }

    return data;
  },

  /**
   * Set the canvas position and size with new data.
   * @param {Object} data - The new canvas data.
   * @returns {Cropper} this
   */
  setCanvasData: function setCanvasData(data) {
    var canvasData = this.canvasData;
    var aspectRatio = canvasData.aspectRatio;

    if (this.ready && !this.disabled && isPlainObject(data)) {
      if (isNumber(data.left)) {
        canvasData.left = data.left;
      }

      if (isNumber(data.top)) {
        canvasData.top = data.top;
      }

      if (isNumber(data.width)) {
        canvasData.width = data.width;
        canvasData.height = data.width / aspectRatio;
      } else if (isNumber(data.height)) {
        canvasData.height = data.height;
        canvasData.width = data.height * aspectRatio;
      }

      this.renderCanvas(true);
    }

    return this;
  },

  /**
   * Get the crop box position and size data.
   * @returns {Object} The result crop box data.
   */
  getCropBoxData: function getCropBoxData() {
    var cropBoxData = this.cropBoxData;
    var data;

    if (this.ready && this.cropped) {
      data = {
        left: cropBoxData.left,
        top: cropBoxData.top,
        width: cropBoxData.width,
        height: cropBoxData.height
      };
    }

    return data || {};
  },

  /**
   * Set the crop box position and size with new data.
   * @param {Object} data - The new crop box data.
   * @returns {Cropper} this
   */
  setCropBoxData: function setCropBoxData(data) {
    var cropBoxData = this.cropBoxData;
    var aspectRatio = this.options.aspectRatio;
    var widthChanged;
    var heightChanged;

    if (this.ready && this.cropped && !this.disabled && isPlainObject(data)) {
      if (isNumber(data.left)) {
        cropBoxData.left = data.left;
      }

      if (isNumber(data.top)) {
        cropBoxData.top = data.top;
      }

      if (isNumber(data.width) && data.width !== cropBoxData.width) {
        widthChanged = true;
        cropBoxData.width = data.width;
      }

      if (isNumber(data.height) && data.height !== cropBoxData.height) {
        heightChanged = true;
        cropBoxData.height = data.height;
      }

      if (aspectRatio) {
        if (widthChanged) {
          cropBoxData.height = cropBoxData.width / aspectRatio;
        } else if (heightChanged) {
          cropBoxData.width = cropBoxData.height * aspectRatio;
        }
      }

      this.renderCropBox();
    }

    return this;
  },

  /**
   * Get a canvas drawn the cropped image.
   * @param {Object} [options={}] - The config options.
   * @returns {HTMLCanvasElement} - The result canvas.
   */
  getCroppedCanvas: function getCroppedCanvas() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!this.ready || !window.HTMLCanvasElement) {
      return null;
    }

    var canvasData = this.canvasData;
    var source = getSourceCanvas(this.image, this.imageData, canvasData, options); // Returns the source canvas if it is not cropped.

    if (!this.cropped) {
      return source;
    }

    var _this$getData = this.getData(),
        initialX = _this$getData.x,
        initialY = _this$getData.y,
        initialWidth = _this$getData.width,
        initialHeight = _this$getData.height;

    var ratio = source.width / Math.floor(canvasData.naturalWidth);

    if (ratio !== 1) {
      initialX *= ratio;
      initialY *= ratio;
      initialWidth *= ratio;
      initialHeight *= ratio;
    }

    var aspectRatio = initialWidth / initialHeight;
    var maxSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: options.maxWidth || Infinity,
      height: options.maxHeight || Infinity
    });
    var minSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: options.minWidth || 0,
      height: options.minHeight || 0
    }, 'cover');

    var _getAdjustedSizes = getAdjustedSizes({
      aspectRatio: aspectRatio,
      width: options.width || (ratio !== 1 ? source.width : initialWidth),
      height: options.height || (ratio !== 1 ? source.height : initialHeight)
    }),
        width = _getAdjustedSizes.width,
        height = _getAdjustedSizes.height;

    width = Math.min(maxSizes.width, Math.max(minSizes.width, width));
    height = Math.min(maxSizes.height, Math.max(minSizes.height, height));
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = normalizeDecimalNumber(width);
    canvas.height = normalizeDecimalNumber(height);
    context.fillStyle = options.fillColor || 'transparent';
    context.fillRect(0, 0, width, height);
    var _options$imageSmoothi = options.imageSmoothingEnabled,
        imageSmoothingEnabled = _options$imageSmoothi === void 0 ? true : _options$imageSmoothi,
        imageSmoothingQuality = options.imageSmoothingQuality;
    context.imageSmoothingEnabled = imageSmoothingEnabled;

    if (imageSmoothingQuality) {
      context.imageSmoothingQuality = imageSmoothingQuality;
    } // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D.drawImage


    var sourceWidth = source.width;
    var sourceHeight = source.height; // Source canvas parameters

    var srcX = initialX;
    var srcY = initialY;
    var srcWidth;
    var srcHeight; // Destination canvas parameters

    var dstX;
    var dstY;
    var dstWidth;
    var dstHeight;

    if (srcX <= -initialWidth || srcX > sourceWidth) {
      srcX = 0;
      srcWidth = 0;
      dstX = 0;
      dstWidth = 0;
    } else if (srcX <= 0) {
      dstX = -srcX;
      srcX = 0;
      srcWidth = Math.min(sourceWidth, initialWidth + srcX);
      dstWidth = srcWidth;
    } else if (srcX <= sourceWidth) {
      dstX = 0;
      srcWidth = Math.min(initialWidth, sourceWidth - srcX);
      dstWidth = srcWidth;
    }

    if (srcWidth <= 0 || srcY <= -initialHeight || srcY > sourceHeight) {
      srcY = 0;
      srcHeight = 0;
      dstY = 0;
      dstHeight = 0;
    } else if (srcY <= 0) {
      dstY = -srcY;
      srcY = 0;
      srcHeight = Math.min(sourceHeight, initialHeight + srcY);
      dstHeight = srcHeight;
    } else if (srcY <= sourceHeight) {
      dstY = 0;
      srcHeight = Math.min(initialHeight, sourceHeight - srcY);
      dstHeight = srcHeight;
    }

    var params = [srcX, srcY, srcWidth, srcHeight]; // Avoid "IndexSizeError"

    if (dstWidth > 0 && dstHeight > 0) {
      var scale = width / initialWidth;
      params.push(dstX * scale, dstY * scale, dstWidth * scale, dstHeight * scale);
    } // All the numerical parameters should be integer for `drawImage`
    // https://github.com/fengyuanchen/cropper/issues/476


    context.drawImage.apply(context, [source].concat(_toConsumableArray(params.map(function (param) {
      return Math.floor(normalizeDecimalNumber(param));
    }))));
    return canvas;
  },

  /**
   * Change the aspect ratio of the crop box.
   * @param {number} aspectRatio - The new aspect ratio.
   * @returns {Cropper} this
   */
  setAspectRatio: function setAspectRatio(aspectRatio) {
    var options = this.options;

    if (!this.disabled && !isUndefined(aspectRatio)) {
      // 0 -> NaN
      options.aspectRatio = Math.max(0, aspectRatio) || NaN;

      if (this.ready) {
        this.initCropBox();

        if (this.cropped) {
          this.renderCropBox();
        }
      }
    }

    return this;
  },

  /**
   * Change the drag mode.
   * @param {string} mode - The new drag mode.
   * @returns {Cropper} this
   */
  setDragMode: function setDragMode(mode) {
    var options = this.options,
        dragBox = this.dragBox,
        face = this.face;

    if (this.ready && !this.disabled) {
      var croppable = mode === DRAG_MODE_CROP;
      var movable = options.movable && mode === DRAG_MODE_MOVE;
      mode = croppable || movable ? mode : DRAG_MODE_NONE;
      options.dragMode = mode;
      setData(dragBox, DATA_ACTION, mode);
      toggleClass(dragBox, CLASS_CROP, croppable);
      toggleClass(dragBox, CLASS_MOVE, movable);

      if (!options.cropBoxMovable) {
        // Sync drag mode to crop box when it is not movable
        setData(face, DATA_ACTION, mode);
        toggleClass(face, CLASS_CROP, croppable);
        toggleClass(face, CLASS_MOVE, movable);
      }
    }

    return this;
  }
};

var AnotherCropper = WINDOW.Cropper;

var Cropper = /*#__PURE__*/function () {
  /**
   * Create a new Cropper.
   * @param {Element} element - The target element for cropping.
   * @param {Object} [options={}] - The configuration options.
   */
  function Cropper(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Cropper);

    if (!element || !REGEXP_TAG_NAME.test(element.tagName)) {
      throw new Error('The first argument is required and must be an <img> or <canvas> element.');
    }

    this.element = element;
    this.options = assign({}, DEFAULTS, isPlainObject(options) && options);
    this.cropped = false;
    this.disabled = false;
    this.pointers = {};
    this.ready = false;
    this.reloading = false;
    this.replaced = false;
    this.sized = false;
    this.sizing = false;
    this.init();
  }

  _createClass(Cropper, [{
    key: "init",
    value: function init() {
      var element = this.element;
      var tagName = element.tagName.toLowerCase();
      var url;

      if (element[NAMESPACE]) {
        return;
      }

      element[NAMESPACE] = this;

      if (tagName === 'img') {
        this.isImg = true; // e.g.: "img/picture.jpg"

        url = element.getAttribute('src') || '';
        this.originalUrl = url; // Stop when it's a blank image

        if (!url) {
          return;
        } // e.g.: "https://example.com/img/picture.jpg"


        url = element.src;
      } else if (tagName === 'canvas' && window.HTMLCanvasElement) {
        url = element.toDataURL();
      }

      this.load(url);
    }
  }, {
    key: "load",
    value: function load(url) {
      var _this = this;

      if (!url) {
        return;
      }

      this.url = url;
      this.imageData = {};
      var element = this.element,
          options = this.options;

      if (!options.rotatable && !options.scalable) {
        options.checkOrientation = false;
      } // Only IE10+ supports Typed Arrays


      if (!options.checkOrientation || !window.ArrayBuffer) {
        this.clone();
        return;
      } // Detect the mime type of the image directly if it is a Data URL


      if (REGEXP_DATA_URL.test(url)) {
        // Read ArrayBuffer from Data URL of JPEG images directly for better performance
        if (REGEXP_DATA_URL_JPEG.test(url)) {
          this.read(dataURLToArrayBuffer(url));
        } else {
          // Only a JPEG image may contains Exif Orientation information,
          // the rest types of Data URLs are not necessary to check orientation at all.
          this.clone();
        }

        return;
      } // 1. Detect the mime type of the image by a XMLHttpRequest.
      // 2. Load the image as ArrayBuffer for reading orientation if its a JPEG image.


      var xhr = new XMLHttpRequest();
      var clone = this.clone.bind(this);
      this.reloading = true;
      this.xhr = xhr; // 1. Cross origin requests are only supported for protocol schemes:
      // http, https, data, chrome, chrome-extension.
      // 2. Access to XMLHttpRequest from a Data URL will be blocked by CORS policy
      // in some browsers as IE11 and Safari.

      xhr.onabort = clone;
      xhr.onerror = clone;
      xhr.ontimeout = clone;

      xhr.onprogress = function () {
        // Abort the request directly if it not a JPEG image for better performance
        if (xhr.getResponseHeader('content-type') !== MIME_TYPE_JPEG) {
          xhr.abort();
        }
      };

      xhr.onload = function () {
        _this.read(xhr.response);
      };

      xhr.onloadend = function () {
        _this.reloading = false;
        _this.xhr = null;
      }; // Bust cache when there is a "crossOrigin" property to avoid browser cache error


      if (options.checkCrossOrigin && isCrossOriginURL(url) && element.crossOrigin) {
        url = addTimestamp(url);
      } // The third parameter is required for avoiding side-effect (#682)


      xhr.open('GET', url, true);
      xhr.responseType = 'arraybuffer';
      xhr.withCredentials = element.crossOrigin === 'use-credentials';
      xhr.send();
    }
  }, {
    key: "read",
    value: function read(arrayBuffer) {
      var options = this.options,
          imageData = this.imageData; // Reset the orientation value to its default value 1
      // as some iOS browsers will render image with its orientation

      var orientation = resetAndGetOrientation(arrayBuffer);
      var rotate = 0;
      var scaleX = 1;
      var scaleY = 1;

      if (orientation > 1) {
        // Generate a new URL which has the default orientation value
        this.url = arrayBufferToDataURL(arrayBuffer, MIME_TYPE_JPEG);

        var _parseOrientation = parseOrientation(orientation);

        rotate = _parseOrientation.rotate;
        scaleX = _parseOrientation.scaleX;
        scaleY = _parseOrientation.scaleY;
      }

      if (options.rotatable) {
        imageData.rotate = rotate;
      }

      if (options.scalable) {
        imageData.scaleX = scaleX;
        imageData.scaleY = scaleY;
      }

      this.clone();
    }
  }, {
    key: "clone",
    value: function clone() {
      var element = this.element,
          url = this.url;
      var crossOrigin = element.crossOrigin;
      var crossOriginUrl = url;

      if (this.options.checkCrossOrigin && isCrossOriginURL(url)) {
        if (!crossOrigin) {
          crossOrigin = 'anonymous';
        } // Bust cache when there is not a "crossOrigin" property (#519)


        crossOriginUrl = addTimestamp(url);
      }

      this.crossOrigin = crossOrigin;
      this.crossOriginUrl = crossOriginUrl;
      var image = document.createElement('img');

      if (crossOrigin) {
        image.crossOrigin = crossOrigin;
      }

      image.src = crossOriginUrl || url;
      image.alt = element.alt || 'The image to crop';
      this.image = image;
      image.onload = this.start.bind(this);
      image.onerror = this.stop.bind(this);
      addClass(image, CLASS_HIDE);
      element.parentNode.insertBefore(image, element.nextSibling);
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      var image = this.image;
      image.onload = null;
      image.onerror = null;
      this.sizing = true; // Match all browsers that use WebKit as the layout engine in iOS devices,
      // such as Safari for iOS, Chrome for iOS, and in-app browsers.

      var isIOSWebKit = WINDOW.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(WINDOW.navigator.userAgent);

      var done = function done(naturalWidth, naturalHeight) {
        assign(_this2.imageData, {
          naturalWidth: naturalWidth,
          naturalHeight: naturalHeight,
          aspectRatio: naturalWidth / naturalHeight
        });
        _this2.initialImageData = assign({}, _this2.imageData);
        _this2.sizing = false;
        _this2.sized = true;

        _this2.build();
      }; // Most modern browsers (excepts iOS WebKit)


      if (image.naturalWidth && !isIOSWebKit) {
        done(image.naturalWidth, image.naturalHeight);
        return;
      }

      var sizingImage = document.createElement('img');
      var body = document.body || document.documentElement;
      this.sizingImage = sizingImage;

      sizingImage.onload = function () {
        done(sizingImage.width, sizingImage.height);

        if (!isIOSWebKit) {
          body.removeChild(sizingImage);
        }
      };

      sizingImage.src = image.src; // iOS WebKit will convert the image automatically
      // with its orientation once append it into DOM (#279)

      if (!isIOSWebKit) {
        sizingImage.style.cssText = 'left:0;' + 'max-height:none!important;' + 'max-width:none!important;' + 'min-height:0!important;' + 'min-width:0!important;' + 'opacity:0;' + 'position:absolute;' + 'top:0;' + 'z-index:-1;';
        body.appendChild(sizingImage);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      var image = this.image;
      image.onload = null;
      image.onerror = null;
      image.parentNode.removeChild(image);
      this.image = null;
    }
  }, {
    key: "build",
    value: function build() {
      if (!this.sized || this.ready) {
        return;
      }

      var element = this.element,
          options = this.options,
          image = this.image; // Create cropper elements

      var container = element.parentNode;
      var template = document.createElement('div');
      template.innerHTML = TEMPLATE;
      var cropper = template.querySelector(".".concat(NAMESPACE, "-container"));
      var canvas = cropper.querySelector(".".concat(NAMESPACE, "-canvas"));
      var dragBox = cropper.querySelector(".".concat(NAMESPACE, "-drag-box"));
      var cropBox = cropper.querySelector(".".concat(NAMESPACE, "-crop-box"));
      var face = cropBox.querySelector(".".concat(NAMESPACE, "-face"));
      this.container = container;
      this.cropper = cropper;
      this.canvas = canvas;
      this.dragBox = dragBox;
      this.cropBox = cropBox;
      this.viewBox = cropper.querySelector(".".concat(NAMESPACE, "-view-box"));
      this.face = face;
      canvas.appendChild(image); // Hide the original image

      addClass(element, CLASS_HIDDEN); // Inserts the cropper after to the current image

      container.insertBefore(cropper, element.nextSibling); // Show the image if is hidden

      if (!this.isImg) {
        removeClass(image, CLASS_HIDE);
      }

      this.initPreview();
      this.bind();
      options.initialAspectRatio = Math.max(0, options.initialAspectRatio) || NaN;
      options.aspectRatio = Math.max(0, options.aspectRatio) || NaN;
      options.viewMode = Math.max(0, Math.min(3, Math.round(options.viewMode))) || 0;
      addClass(cropBox, CLASS_HIDDEN);

      if (!options.guides) {
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-dashed")), CLASS_HIDDEN);
      }

      if (!options.center) {
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-center")), CLASS_HIDDEN);
      }

      if (options.background) {
        addClass(cropper, "".concat(NAMESPACE, "-bg"));
      }

      if (!options.highlight) {
        addClass(face, CLASS_INVISIBLE);
      }

      if (options.cropBoxMovable) {
        addClass(face, CLASS_MOVE);
        setData(face, DATA_ACTION, ACTION_ALL);
      }

      if (!options.cropBoxResizable) {
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-line")), CLASS_HIDDEN);
        addClass(cropBox.getElementsByClassName("".concat(NAMESPACE, "-point")), CLASS_HIDDEN);
      }

      this.render();
      this.ready = true;
      this.setDragMode(options.dragMode);

      if (options.autoCrop) {
        this.crop();
      }

      this.setData(options.data);

      if (isFunction(options.ready)) {
        addListener(element, EVENT_READY, options.ready, {
          once: true
        });
      }

      dispatchEvent(element, EVENT_READY);
    }
  }, {
    key: "unbuild",
    value: function unbuild() {
      if (!this.ready) {
        return;
      }

      this.ready = false;
      this.unbind();
      this.resetPreview();
      this.cropper.parentNode.removeChild(this.cropper);
      removeClass(this.element, CLASS_HIDDEN);
    }
  }, {
    key: "uncreate",
    value: function uncreate() {
      if (this.ready) {
        this.unbuild();
        this.ready = false;
        this.cropped = false;
      } else if (this.sizing) {
        this.sizingImage.onload = null;
        this.sizing = false;
        this.sized = false;
      } else if (this.reloading) {
        this.xhr.onabort = null;
        this.xhr.abort();
      } else if (this.image) {
        this.stop();
      }
    }
    /**
     * Get the no conflict cropper class.
     * @returns {Cropper} The cropper class.
     */

  }], [{
    key: "noConflict",
    value: function noConflict() {
      window.Cropper = AnotherCropper;
      return Cropper;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */

  }, {
    key: "setDefaults",
    value: function setDefaults(options) {
      assign(DEFAULTS, isPlainObject(options) && options);
    }
  }]);

  return Cropper;
}();

assign(Cropper.prototype, render, preview, events, handlers, change, methods);

var cropper = '';

var Cropper_scss_vue_type_style_index_0_src_12c42d6b_scoped_true_lang = '';

const _hoisted_1$2 = {
  key: 0,
  class: "cropper flex flex-v"
};
const _hoisted_2$2 = ["src"];
const _hoisted_3$2 = { class: "operate flex flex-align-center" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    img: { type: [String, null], required: true, default: null },
    visible: { type: Boolean, required: true, default: false }
  },
  emits: ["cancel", "confirm"],
  setup(__props, { emit }) {
    const props = __props;
    let cropper = reactive({ val: null });
    watch(() => props.visible, (visible) => {
      if (visible && props.img) {
        nextTick(() => {
          const target = document.getElementById("imgCropper");
          cropper.val = new Cropper(target, {
            viewMode: 0,
            dragMode: "move",
            background: true,
            aspectRatio: 120 / 17,
            preview: ".before",
            autoCropArea: 0.8,
            zoomOnWheel: true,
            center: true
          });
        });
      } else {
        cropper.val = null;
      }
    });
    function confirm() {
      emit("confirm", cropper.val.getCroppedCanvas().toDataURL("image/jpeg"));
    }
    return (_ctx, _cache) => {
      const _component_ElButton = ElButton;
      return __props.visible ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("img", {
          id: "imgCropper",
          src: __props.img,
          class: "flex1"
        }, null, 8, _hoisted_2$2),
        createBaseVNode("div", _hoisted_3$2, [
          createVNode(_component_ElButton, {
            class: "flex1",
            type: "primary",
            onClick: confirm
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("confirm")), 1)
            ]),
            _: 1
          }),
          createVNode(_component_ElButton, {
            class: "flex1",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("cancel"))
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
            ]),
            _: 1
          })
        ])
      ])) : createCommentVNode("v-if", true);
    };
  }
});
var CropperVue = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-12c42d6b"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/Cropper/Cropper.vue"]]);

var UserCenterSkeleton_scss_vue_type_style_index_0_src_7ce360fc_scoped_true_lang = '';

const _withScopeId$1 = (n) => (pushScopeId("data-v-7ce360fc"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "user-msg" };
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("div", { class: "bgImgWrap" }, null, -1));
const _hoisted_3$1 = { class: "container" };
const _hoisted_4$1 = { class: "user-msg-warp flex flex-align-center flex-pack-center" };
const _hoisted_5$1 = { class: "flex-box" };
const _hoisted_6$1 = { class: "avatar" };
const _hoisted_7$1 = { class: "name flex flex-align-center" };
const _hoisted_8$1 = { class: "metaid flex flex-align-center" };
const _hoisted_9$1 = { class: "userCenterDesc flex-v" };
const _hoisted_10$1 = { class: "fansWrap" };
const _hoisted_11$1 = { class: "userCenterOperator" };
const _hoisted_12$1 = { class: "operate flex flex-align-center" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_ElSkeletonItem = ElSkeletonItem;
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1$1, [
          _hoisted_2$1,
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("div", _hoisted_4$1, [
              createBaseVNode("div", _hoisted_5$1, [
                createBaseVNode("div", _hoisted_6$1, [
                  createVNode(_component_ElSkeletonItem, { variant: "circle" })
                ]),
                createBaseVNode("div", _hoisted_7$1, [
                  createVNode(_component_ElSkeletonItem, { variant: "text" })
                ]),
                createBaseVNode("div", _hoisted_8$1, [
                  createVNode(_component_ElSkeletonItem, { variant: "text" })
                ]),
                createBaseVNode("div", _hoisted_9$1, [
                  createVNode(_component_ElSkeletonItem, { variant: "p" }),
                  createVNode(_component_ElSkeletonItem, { variant: "p" }),
                  createVNode(_component_ElSkeletonItem, { variant: "p" })
                ]),
                createBaseVNode("div", _hoisted_10$1, [
                  createVNode(_component_ElSkeletonItem, { variant: "p" })
                ]),
                createBaseVNode("div", _hoisted_11$1, [
                  createVNode(_component_ElSkeletonItem, { variant: "button" }),
                  createVNode(_component_ElSkeletonItem, { variant: "button" }),
                  createVNode(_component_ElSkeletonItem, { variant: "circle" })
                ])
              ]),
              createCommentVNode(" operate "),
              createBaseVNode("div", _hoisted_12$1, [
                createVNode(_component_ElSkeletonItem, { variant: "button" }),
                createVNode(_component_ElSkeletonItem, { variant: "button" })
              ])
            ])
          ])
        ]),
        createVNode(Tab, {
          tabs: [],
          class: "tabs",
          isSkeleton: true
        })
      ], 64);
    };
  }
});
var UserCenterSkeletonVue = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7ce360fc"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/UserCenter/UserCenterSkeleton.vue"]]);

var BgEditIcon = "/assets/per_bg_edit.9aaac3e7.svg";

var ShapeIcon = "/assets/pro_icon_shape.a8c27b91.svg";

var UserCenter_scss_vue_type_style_index_0_src_3fdd2be2_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-3fdd2be2"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "user-msg" };
const _hoisted_2 = ["src"];
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "container" };
const _hoisted_5 = { class: "user-msg-warp flex flex-align-center flex-pack-center" };
const _hoisted_6 = { class: "flex-box" };
const _hoisted_7 = { class: "name flex flex-align-center" };
const _hoisted_8 = { class: "userCenterDesc" };
const _hoisted_9 = { class: "userCenterDesc-warp" };
const _hoisted_10 = { key: 0 };
const _hoisted_11 = {
  key: 0,
  class: "edit-signature"
};
const _hoisted_12 = { class: "fansWrap" };
const _hoisted_13 = { class: "item" };
const _hoisted_14 = { class: "desc" };
const _hoisted_15 = { class: "followedList" };
const _hoisted_16 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "sep" }, "|", -1));
const _hoisted_17 = { class: "item" };
const _hoisted_18 = { class: "desc" };
const _hoisted_19 = { class: "followedList" };
const _hoisted_20 = { class: "userCenterOperator flex flex-align-center" };
const _hoisted_21 = { class: "userCenterOperator-item flex flex-align-center" };
const _hoisted_22 = ["href"];
const _hoisted_23 = { class: "userCenterOperator-item flex flex-align-center" };
const _hoisted_24 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "userOperatorContent" }, "ShowBuzz", -1));
const _hoisted_25 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "userOperatorContent" }, "MetaCenter", -1));
const _hoisted_26 = { class: "operate flex flex-align-center" };
const _hoisted_27 = ["src"];
const _hoisted_28 = ["src"];
const _hoisted_29 = { class: "record-modal" };
const _hoisted_30 = { class: "tab record-tab" };
const _hoisted_31 = ["onClick"];
const _hoisted_32 = { class: "record-list" };
const _hoisted_33 = { class: "record-item flex" };
const _hoisted_34 = { class: "cont flex1 flex flex-v flex-pack-justify" };
const _hoisted_35 = { class: "top flex flex flex-align-center" };
const _hoisted_36 = { class: "title flex1" };
const _hoisted_37 = { class: "time" };
const _hoisted_38 = { class: "bottom flex flex-align-center" };
const _hoisted_39 = { class: "seller flex1 flex flex-align-center" };
const _hoisted_40 = ["onClick"];
const _hoisted_41 = { class: "cont flex1 flex flex-v flex-pack-justify" };
const _hoisted_42 = { class: "top flex flex flex-align-center" };
const _hoisted_43 = { class: "title flex1" };
const _hoisted_44 = /* @__PURE__ */ createTextVNode(" BSV ");
const _hoisted_45 = { class: "bottom flex flex-align-center" };
const _hoisted_46 = { class: "seller flex1 flex flex-align-center" };
const _hoisted_47 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "avatar",
  src: _imports_0,
  alt: ""
}, null, -1));
const _hoisted_48 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "avatar",
  src: _imports_1,
  alt: ""
}, null, -1));
const _hoisted_49 = { class: "time flex flex-pack-justify" };
const _hoisted_50 = ["onClick"];
const _hoisted_51 = { class: "dialog-footer" };
const _hoisted_52 = { class: "modal-header" };
const _hoisted_53 = { class: "modal-header-left" };
const _hoisted_54 = { class: "modal-header-title" };
const _hoisted_55 = {
  key: 0,
  class: "nft-bg-list"
};
const _hoisted_56 = ["onClick"];
const _hoisted_57 = ["src"];
const _hoisted_58 = {
  key: 1,
  class: "nft-bg-preview"
};
const _hoisted_59 = ["src"];
const _hoisted_60 = { class: "dialog-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    userInfoLoading: {
      type: Boolean,
      default: true
    },
    user: {
      type: Object,
      default: () => {
        return {
          metaId: "",
          name: "",
          address: ""
        };
      }
    },
    isHideAuthor: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const store = useStore();
    const route = useRoute();
    ref();
    const showTalk = "https://www.showtalk.app";
    let centerDialogVisible = ref(false);
    const newSignature = ref("");
    const isShowNFTBgModal = ref(false);
    const currentNftBg = reactive({ val: null });
    const nftBgPagination = reactive({
      ...store.state.pagination
    });
    const nftBgs = reactive([]);
    const isSkeleton = ref(true);
    const metacenterConfigData = reactive({ val: null });
    const userCenterInfo = reactive({ val: null });
    let bgDialogIsShow = ref(false);
    ref("");
    const followList = reactive({ val: null });
    const isCropperVisible = ref(false);
    const cropperImage = reactive({ val: null });
    const followingList = computed(() => {
      return followList.val?.followingList?.length;
    });
    const followedList = computed(() => {
      return followList.val?.followedList?.length;
    });
    const isFollow = ref(false);
    watch(() => followList.val, () => {
      isFollow.value = store.state.userInfo && followList.val?.followedList?.includes(store.state.userInfo?.metaId) || store.state.userInfo && store.state.userInfo.metaId === route.params.metaId;
    });
    computed(() => {
      if (metacenterConfigData.val) {
        if (metacenterConfigData.val.coverImg instanceof Array) {
          return metacenterConfigData.val.coverImg[0];
        } else {
          return metacenterConfigData.val.coverImg;
        }
      } else {
        return "";
      }
    });
    async function payFollow() {
      if (isFollow.value) {
        return ElMessage.error(i18n.t("isFollowed"));
      }
      const data = {
        createTime: new Date().getTime(),
        MetaID: userCenterInfo.val.metaId,
        pay: "2000",
        payTo: userCenterInfo.val.address
      };
      const FollowParams = {
        nodeName: "PayFollow",
        brfcId: "8f23b51a047b",
        path: "/Protocols/PayFollow",
        data: JSON.stringify(data),
        payTo: [
          {
            amount: 2e3,
            address: userCenterInfo.val.address
          }
        ]
      };
      const res = await store.state.sdk.sendMetaDataTx(FollowParams);
      if (res.code === 200) {
        followList.val?.followingList.push(store.state.userInfo.metaId);
        isFollow.value = true;
        ElMessage.success(i18n.t("success"));
      }
    }
    async function getHeadImgAndSignature() {
      return new Promise(async (resolve) => {
        const metaId = route.params.metaId;
        const res = await getMetaCenterConfig(metaId);
        if (res) {
          metacenterConfigData.val = {
            coverImg: res.data.coverImg,
            signature: res.data.signature,
            publicKey: res.publicKey
          };
        }
        resolve();
      });
    }
    async function getUserFollowList() {
      const res = await GetMyFollowList({
        metaId: route.params.metaId
      });
      if (res.code == 0) {
        followList.val = res.data;
      }
    }
    const recordPagination = reactive({
      ...store.state.pagination
    });
    const recordTabs = [
      { name: i18n.t("purchaseHistory"), key: "purchaseHistory" },
      { name: i18n.t("saleRecord"), key: "saleRecord" }
    ];
    const isSelf = computed(() => {
      const metaId = route.params.metaId;
      if (store.state.userInfo && store.state.userInfo.metaId === metaId) {
        return true;
      } else
        return false;
    });
    const tabs = computed(() => {
      const metaId = route.params.metaId;
      let _tabs = [
        {
          name: i18n.t("inSale"),
          val: 3,
          path: `/user/${metaId}/sale`,
          imgPath: "/src/assets/images/user_center_insale.png"
        },
        {
          name: i18n.t("topic"),
          val: 4,
          path: `/user/${metaId}/series`,
          imgPath: "/src/assets/images/user_center_collection.png"
        }
      ];
      if (isSelf.value) {
        let selfTab = [
          {
            name: i18n.t("mynft"),
            val: 1,
            path: `/self/${metaId}/offsale`,
            imgPath: "/src/assets/images/user_center_my_nft.png"
          },
          {
            name: i18n.t("blindBox"),
            val: 2,
            path: `/self/${metaId}/myblindbox`,
            imgPath: "/src/assets/images/user_center_manghe.png"
          }
        ];
        _tabs = [...selfTab, ..._tabs];
      }
      return _tabs;
    });
    const isShowRcordSkeleton = ref(true);
    const records = reactive([]);
    const recordTabIndex = ref(0);
    const isShowRecordModal = ref(false);
    async function uploadFileHandler(e) {
    }
    function overBgImg() {
      if (store.state.userInfo && route.params.metaId === store.state.userInfo.metaId) {
        bgDialogIsShow.value = true;
      } else
        return;
    }
    function leaveBgImg() {
      bgDialogIsShow.value = false;
    }
    function openUrl(type) {
      let url = type === "showBuzz" ? `https://www.showbuzz.app/user_index/user_buzz/${props.user.metaId}` : `https://metacenter.top/#/pages/index/indexCenter?metaId=${props.user.metaId}`;
      window.open(url);
    }
    function getMoreRecords() {
      recordPagination.loading = true;
      recordPagination.page++;
      getRecordList().then(() => {
        recordPagination.loading = false;
      });
    }
    async function getRecordList(isCover = false) {
      return new Promise(async (resolve) => {
        let res;
        const params = {
          MetaId: typeof route.params.metaId === "string" ? route.params.metaId : "",
          Page: recordPagination.page.toString(),
          PageSize: recordPagination.pageSize.toString()
        };
        if (recordTabIndex.value === 1) {
          res = await GetMyNftOnShowSellSuccessList(params);
        } else {
          res = await GetMyNftOnShowBuySuccessList(params);
        }
        if (res.code === 0) {
          if (isCover)
            records.length = 0;
          records.push(...res.data.results.items);
          isShowRcordSkeleton.value = false;
          const totalPages = Math.ceil(res.data.total / recordPagination.pageSize);
          if (recordPagination.page >= totalPages) {
            recordPagination.nothing = true;
          }
        }
        resolve();
      });
    }
    function changeRecordTab(index) {
      if (recordTabIndex.value === index)
        return;
      recordPagination.page = 1;
      recordPagination.loading = false;
      recordPagination.nothing = false;
      recordTabIndex.value = index;
      getRecordList(true);
    }
    function openRecordModal() {
      getRecordList(true);
      isShowRecordModal.value = true;
    }
    function toDetail(record) {
      router.push({
        name: "detail",
        params: {
          genesisId: record.nftGenesis,
          codehash: record.nftCodehash,
          tokenIndex: record.nftTokenIndex
        }
      });
    }
    async function cropperConfirm(base64Data) {
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        customClass: "full-loading"
      });
      const params = {
        nodeName: "MetaCenterConfig",
        brfcId: "3cdeaa253606",
        path: "/Protocols/MetaCenterConfig",
        data: JSON.stringify({
          signature: metacenterConfigData.val ? metacenterConfigData.val.signature : "",
          coverImg: `![metafile](0)`
        }),
        attachments: [
          {
            fileName: `${v1()}.jpeg`,
            fileType: "image/jpeg",
            data: base64ToHex(base64Data),
            encrypt: 0
          }
        ],
        nodeKey: metacenterConfigData.val ? metacenterConfigData.val.publicKey : void 0
      };
      const res = await store.state.sdk.sendMetaDataTx(params);
      if (res.code === 200) {
        await getHeadImgAndSignature();
        ElMessage.success(i18n.t("uploadHeadImgSucc"));
        isCropperVisible.value = false;
        loading.close();
      }
    }
    async function confirmEditSignature() {
      if (newSignature.value === "") {
        ElMessage.error(i18n.t("signatureNotAllowNull"));
        return;
      }
      const loading = ElLoading.service({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
        customClass: "full-loading"
      });
      const params = {
        nodeName: "MetaCenterConfig",
        brfcId: "3cdeaa253606",
        path: "/Protocols/MetaCenterConfig",
        data: JSON.stringify({
          signature: newSignature.value,
          coverImg: metacenterConfigData.val ? metacenterConfigData.val.coverImg : ""
        }),
        nodeKey: metacenterConfigData.val ? metacenterConfigData.val.publicKey : void 0
      };
      const res = await store.state.sdk.sendMetaDataTx(params);
      if (res.code === 200) {
        await getHeadImgAndSignature();
        ElMessage.success(i18n.t("uploadSignatureSucc"));
        centerDialogVisible.value = false;
        loading.close();
      }
    }
    function share() {
      const value = `${props.user.name}:${window.location.href}`;
      toClipboard(value).then(() => {
        ElMessage.success(i18n.t("copyShareSuccess"));
      }).catch(() => {
        ElMessage.success(i18n.t("copyerror"));
      });
    }
    function closeNftModal() {
      isShowNFTBgModal.value = false;
      currentNftBg.val = null;
    }
    function getNftBgs(isCover = false) {
      return new Promise(async (resolve) => {
        const res = await GetUserNftBgs({
          ...nftBgPagination,
          address: store.state.userInfo.address
        });
        if (res.code === 0) {
          if (isCover)
            nftBgs.length = 0;
          nftBgs.push(...res.data.results.items);
          const totalPages = Math.ceil(res.data.total / nftBgPagination.pageSize);
          if (totalPages <= nftBgPagination.page) {
            nftBgPagination.nothing = true;
          }
        }
        resolve();
      });
    }
    async function openNftBgModal() {
      if (nftBgs.length <= 0) {
        const loading = ElLoading.service();
        await getNftBgs();
        loading.close();
      }
      isShowNFTBgModal.value = true;
    }
    function getMoreNftBgs() {
      nftBgPagination.loading = true;
      nftBgPagination.page++;
      getNftBgs().then(() => {
        nftBgPagination.loading = false;
      });
    }
    async function confirmNftbg() {
      const res = await store.state.sdk.sendMetaDataTx({
        data: JSON.stringify({
          codehash: currentNftBg.val.codehash,
          genesis: currentNftBg.val.genesis,
          tokenIndex: currentNftBg.val.tokenIndex,
          coverType: "0",
          coverImage: ""
        }),
        brfcId: "a62aa0ed5daa",
        nodeName: "SimpleMetaBackground",
        path: "/Protocols/SimpleMetaBackground",
        nodeKey: userCenterInfo.val?.coverPublicKey && userCenterInfo.val?.coverPublicKey !== "" ? userCenterInfo.val?.coverPublicKey : void 0
      });
      if (res.code === 200) {
        await getUserInfo();
        userCenterInfo.val.coverType = "0";
        userCenterInfo.val.coverUrl = `${"https://showman.metaidservices.com"}/metafile/sensible/${currentNftBg.val.codehash}/${currentNftBg.val.genesis}/${currentNftBg.val.tokenIndex}`;
        ElMessage.success(i18n.t("editBgSuccess"));
        isShowNFTBgModal.value = false;
        currentNftBg.val = null;
      }
    }
    function getUserInfo() {
      return new Promise(async (resolve) => {
        const res = await GetUserInfo({ metaId: route.params.metaId });
        if (res.code == 0) {
          userCenterInfo.val = res.data;
        }
        resolve();
      });
    }
    onMounted(async () => {
      await checkUserInfoFinish(false);
      await getUserFollowList();
      getHeadImgAndSignature();
      await getUserInfo();
      isSkeleton.value = false;
      setTimeout(() => {
      }, 3e3);
    });
    return (_ctx, _cache) => {
      const _component_UserAvatar = resolveComponent("UserAvatar");
      const _component_el_button = ElButton;
      const _component_ElSkeleton = ElSkeleton;
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElImage = ElImage;
      const _component_ElDialog = ElDialog;
      const _component_el_input = ElInput;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_ElSkeleton, {
          loading: isSkeleton.value,
          animated: ""
        }, {
          template: withCtx(() => [
            createVNode(UserCenterSkeletonVue)
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("div", {
                class: "bgImgWrap",
                onClick: uploadFileHandler,
                onMouseover: overBgImg,
                onMouseleave: leaveBgImg
              }, [
                unref(userCenterInfo).val?.coverType === "0" && unref(userCenterInfo).val?.coverUrl ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  class: "bg-cover",
                  src: unref(userCenterInfo).val?.coverUrl
                }, null, 8, _hoisted_2)) : createCommentVNode("v-if", true),
                unref(store).state.userInfo && unref(store).state.userInfo.metaId === unref(route).params.metaId ? (openBlock(), createElementBlock("img", {
                  key: 1,
                  class: "edit-icon",
                  src: unref(BgEditIcon),
                  onClick: openNftBgModal
                }, null, 8, _hoisted_3)) : createCommentVNode("v-if", true)
              ], 32),
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("div", _hoisted_6, [
                    createCommentVNode('              <div class="avatar">'),
                    createVNode(_component_UserAvatar, {
                      metaId: __props.user.metaId,
                      hasmask: false
                    }, null, 8, ["metaId"]),
                    createCommentVNode("              </div>"),
                    createBaseVNode("div", _hoisted_7, [
                      createBaseVNode("span", null, toDisplayString(__props.user.name), 1),
                      createVNode(CertTemp, {
                        metaId: __props.user.metaId,
                        "is-only-icon": true
                      }, null, 8, ["metaId"])
                    ]),
                    createBaseVNode("div", {
                      class: "metaid flex flex-align-center",
                      onClick: _cache[0] || (_cache[0] = ($event) => unref(store).state.sdk?.toTxLink(__props.user.metaId))
                    }, [
                      createBaseVNode("span", null, " MetaID: " + toDisplayString(__props.user.metaId.slice(0, 6)), 1)
                    ]),
                    createBaseVNode("div", _hoisted_8, [
                      createBaseVNode("div", _hoisted_9, [
                        createBaseVNode("pre", null, [
                          createTextVNode(toDisplayString(unref(metacenterConfigData).val?.signature ? unref(metacenterConfigData).val?.signature : _ctx.$t("nonSignature")), 1),
                          unref(store).state.userInfo && unref(store).state.userInfo.metaId === unref(route).params.metaId ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                            createBaseVNode("a", {
                              onClick: _cache[1] || (_cache[1] = ($event) => isRef(centerDialogVisible) ? centerDialogVisible.value = true : centerDialogVisible = true)
                            }, toDisplayString(_ctx.$t("edit")), 1),
                            !unref(metacenterConfigData).val || unref(metacenterConfigData).val && unref(metacenterConfigData).val.signature === "" ? (openBlock(), createElementBlock("span", _hoisted_10, toDisplayString(_ctx.$t("signature")), 1)) : createCommentVNode("v-if", true)
                          ], 64)) : createCommentVNode("v-if", true)
                        ])
                      ]),
                      unref(store).state.userInfo && unref(store).state.userInfo.metaId === unref(route).params.metaId ? (openBlock(), createElementBlock("div", _hoisted_11)) : createCommentVNode("v-if", true)
                    ]),
                    createBaseVNode("div", _hoisted_12, [
                      createBaseVNode("div", _hoisted_13, [
                        createBaseVNode("span", _hoisted_14, toDisplayString(_ctx.$t("follow")), 1),
                        createBaseVNode("span", _hoisted_15, toDisplayString(unref(followingList)), 1)
                      ]),
                      _hoisted_16,
                      createBaseVNode("div", _hoisted_17, [
                        createBaseVNode("span", _hoisted_18, toDisplayString(_ctx.$t("fans")), 1),
                        createBaseVNode("span", _hoisted_19, toDisplayString(unref(followedList)) + "\xA0", 1)
                      ])
                    ]),
                    createBaseVNode("div", _hoisted_20, [
                      createBaseVNode("div", _hoisted_21, [
                        !unref(isSelf) ? (openBlock(), createBlock(_component_el_button, {
                          key: 0,
                          class: "",
                          round: "",
                          onClick: payFollow,
                          type: "primary"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(isFollow.value ? _ctx.$t("followd") : _ctx.$t("follow")), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("v-if", true),
                        !unref(isSelf) ? (openBlock(), createElementBlock("a", {
                          key: 1,
                          class: "",
                          href: `${unref(showTalk)}/chat/user/${__props.user.metaId}`,
                          target: "_blank"
                        }, [
                          createVNode(_component_el_button, { round: "" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(_ctx.$t("sendMsg")), 1)
                            ]),
                            _: 1
                          })
                        ], 8, _hoisted_22)) : createCommentVNode("v-if", true)
                      ]),
                      createBaseVNode("div", _hoisted_23, [
                        createVNode(_component_el_button, {
                          class: "flex flex-align-center",
                          round: "",
                          onClick: _cache[2] || (_cache[2] = ($event) => openUrl("showBuzz"))
                        }, {
                          default: withCtx(() => [
                            createCommentVNode('                    <img :src="ShowBuzzIcon" alt="ShowBuzz" />'),
                            _hoisted_24
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_button, {
                          class: "flex flex-align-center",
                          round: "",
                          onClick: _cache[3] || (_cache[3] = ($event) => openUrl("metaCenter"))
                        }, {
                          default: withCtx(() => [
                            createCommentVNode('                    <img class="mr-10" :src="MetaCenterIcon" alt="MetaCenter" />'),
                            _hoisted_25
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_26, [
                    createBaseVNode("div", {
                      class: "operate-item flex flex-align-center",
                      onClick: openRecordModal
                    }, [
                      createBaseVNode("img", { src: unref(RecordIcon) }, null, 8, _hoisted_27)
                    ]),
                    createBaseVNode("div", {
                      class: "operate-item flex flex-align-center",
                      onClick: share
                    }, [
                      createBaseVNode("img", { src: unref(ShapeIcon) }, null, 8, _hoisted_28)
                    ])
                  ])
                ])
              ])
            ]),
            createVNode(Tab, {
              class: "tabs",
              tabs: unref(tabs)
            }, null, 8, ["tabs"])
          ]),
          _: 1
        }, 8, ["loading"]),
        renderSlot(_ctx.$slots, "default", {}, void 0, true),
        createCommentVNode(" record "),
        createBaseVNode("div", _hoisted_29, [
          createVNode(_component_ElDialog, {
            modelValue: isShowRecordModal.value,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isShowRecordModal.value = $event),
            "custom-class": "",
            top: "0"
          }, {
            title: withCtx(() => [
              createBaseVNode("div", _hoisted_30, [
                (openBlock(), createElementBlock(Fragment, null, renderList(recordTabs, (tab, index) => {
                  return createBaseVNode("a", {
                    class: normalizeClass({ active: index === recordTabIndex.value }),
                    onClick: ($event) => changeRecordTab(index)
                  }, toDisplayString(_ctx.$t(tab.key)), 11, _hoisted_31);
                }), 64))
              ])
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_32, [
                createVNode(_component_ElSkeleton, {
                  loading: isShowRcordSkeleton.value,
                  animated: "",
                  count: unref(recordPagination).pageSize
                }, {
                  template: withCtx(() => [
                    createBaseVNode("div", _hoisted_33, [
                      createVNode(_component_ElSkeletonItem, {
                        variant: "image",
                        class: "cover"
                      }),
                      createBaseVNode("div", _hoisted_34, [
                        createBaseVNode("div", _hoisted_35, [
                          createBaseVNode("div", _hoisted_36, [
                            createVNode(_component_ElSkeletonItem, {
                              variant: "text",
                              style: { "width": "40%" }
                            })
                          ]),
                          createBaseVNode("div", {
                            class: normalizeClass(["price", { active: recordTabIndex.value === 1 }])
                          }, [
                            createVNode(_component_ElSkeletonItem, {
                              variant: "text",
                              style: { "width": "20%" }
                            })
                          ], 2)
                        ]),
                        createBaseVNode("div", _hoisted_37, [
                          createVNode(_component_ElSkeletonItem, {
                            variant: "text",
                            style: { "width": "20%" }
                          })
                        ]),
                        createBaseVNode("div", _hoisted_38, [
                          createBaseVNode("div", _hoisted_39, [
                            createVNode(_component_ElSkeletonItem, {
                              variant: "text",
                              style: { "width": "30%" }
                            })
                          ]),
                          createBaseVNode("a", null, [
                            createVNode(_component_ElSkeletonItem, {
                              variant: "text",
                              style: { "width": "10%" }
                            })
                          ])
                        ])
                      ])
                    ])
                  ]),
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(records), (record) => {
                      return openBlock(), createElementBlock("div", {
                        class: "record-item flex",
                        key: record.nftSellTxId,
                        onClick: ($event) => toDetail(record)
                      }, [
                        createVNode(_component_ElImage, {
                          class: "cover",
                          src: unref(metafileUrl)(record.nftIcon),
                          lazy: true,
                          "preview-src-list": [unref(metafileUrl)(record.nftIcon, 800)],
                          fit: "contain"
                        }, null, 8, ["src", "preview-src-list"]),
                        createBaseVNode("div", _hoisted_41, [
                          createBaseVNode("div", _hoisted_42, [
                            createBaseVNode("div", _hoisted_43, toDisplayString(recordTabIndex.value === 0 ? _ctx.$t("buy") : _ctx.$t("sell")) + " " + toDisplayString(record.nftName), 1),
                            createBaseVNode("div", {
                              class: normalizeClass(["price flex flex-align-center", { active: recordTabIndex.value === 1 }])
                            }, [
                              createBaseVNode("span", null, toDisplayString(recordTabIndex.value === 0 ? "-" : "+") + toDisplayString(new unref(Decimal)(record.nftPrice).div(Math.pow(10, 8)).toString()), 1),
                              _hoisted_44
                            ], 2)
                          ]),
                          createBaseVNode("div", _hoisted_45, [
                            createBaseVNode("div", _hoisted_46, [
                              recordTabIndex.value === 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                                createCommentVNode("                      {{ $t('buyer') }}:"),
                                createCommentVNode('                      <img :src="$filters.avatar(record.nftBuyerMetaId)" />'),
                                _hoisted_47,
                                createTextVNode(" " + toDisplayString(record.nftBuyerName), 1)
                              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                                createCommentVNode("                      {{ $t('seller') }}:"),
                                createCommentVNode('                      <img :src="$filters.avatar(record.nftOwnerMetaId)" />'),
                                _hoisted_48,
                                createTextVNode(" " + toDisplayString(record.nftOwnerName), 1)
                              ], 64))
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_49, [
                            createBaseVNode("div", null, toDisplayString(unref(dayjs)(record.nftBuyerTimestamp).format("YYYY-MM-DD HH:mm")), 1),
                            createBaseVNode("a", {
                              onClick: withModifiers(($event) => unref(store).state.sdk?.toTxLink(record.nftSellTxId), ["stop"])
                            }, toDisplayString(_ctx.$t("look")) + "TX", 9, _hoisted_50)
                          ])
                        ])
                      ], 8, _hoisted_40);
                    }), 128)),
                    createCommentVNode(" \u52A0\u8F7D\u66F4\u591A "),
                    unref(records).length > 0 && !isShowRcordSkeleton.value ? (openBlock(), createBlock(LoadMore, {
                      key: 0,
                      pagination: unref(recordPagination),
                      onGetMore: getMoreRecords
                    }, null, 8, ["pagination"])) : unref(records).length <= 0 && !isShowRcordSkeleton.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createCommentVNode(" \u5185\u5BB9\u4E3A\u7A7A "),
                      createVNode(IsNull)
                    ], 2112)) : createCommentVNode("v-if", true)
                  ]),
                  _: 1
                }, 8, ["loading", "count"])
              ])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        createCommentVNode("\u8F93\u5165 metafile \u5F39\u7A97"),
        createVNode(_component_ElDialog, {
          modelValue: unref(centerDialogVisible),
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => isRef(centerDialogVisible) ? centerDialogVisible.value = $event : centerDialogVisible = $event),
          title: _ctx.$t("editSignature")
        }, {
          footer: withCtx(() => [
            createBaseVNode("span", _hoisted_51, [
              createVNode(_component_el_button, {
                onClick: _cache[6] || (_cache[6] = ($event) => isRef(centerDialogVisible) ? centerDialogVisible.value = false : centerDialogVisible = false)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("cancel")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_button, {
                type: "primary",
                onClick: confirmEditSignature
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.$t("confirm")), 1)
                ]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_el_input, {
              modelValue: newSignature.value,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => newSignature.value = $event),
              autosize: { minRows: 2, maxRows: 6 },
              type: "textarea",
              placeholder: _ctx.$t("editSignature")
            }, null, 8, ["modelValue", "placeholder"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        createCommentVNode("\u8F93\u5165 metafile \u5F39\u7A97"),
        createVNode(_component_ElDialog, {
          modelValue: isShowNFTBgModal.value,
          "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => isShowNFTBgModal.value = $event)
        }, createSlots({
          title: withCtx(() => [
            createBaseVNode("div", _hoisted_52, [
              createBaseVNode("div", _hoisted_53, [
                unref(currentNftBg).val ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  onClick: _cache[8] || (_cache[8] = ($event) => unref(currentNftBg).val = null)
                }, toDisplayString(_ctx.$t("preStep")), 1)) : createCommentVNode("v-if", true)
              ]),
              createBaseVNode("div", _hoisted_54, toDisplayString(unref(currentNftBg).val ? _ctx.$t("nftBgTitle") : _ctx.$t("nftBgTitle2")), 1)
            ])
          ]),
          default: withCtx(() => [
            !unref(currentNftBg).val ? (openBlock(), createElementBlock("div", _hoisted_55, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(nftBgs), (item) => {
                return openBlock(), createElementBlock("a", {
                  class: "nft-bg-item",
                  key: item.genesis + item.codehash + item.tokenIndex,
                  onClick: ($event) => unref(currentNftBg).val = item
                }, [
                  createBaseVNode("img", {
                    src: item.iconUrl
                  }, null, 8, _hoisted_57)
                ], 8, _hoisted_56);
              }), 128)),
              unref(nftBgs).length > 0 ? (openBlock(), createBlock(LoadMore, {
                key: 0,
                pagination: unref(nftBgPagination),
                onGetMore: getMoreNftBgs
              }, null, 8, ["pagination"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createCommentVNode(" \u5185\u5BB9\u4E3A\u7A7A "),
                createVNode(IsNull)
              ], 2112))
            ])) : (openBlock(), createElementBlock("div", _hoisted_58, [
              createBaseVNode("img", {
                src: unref(currentNftBg).val?.iconUrl
              }, null, 8, _hoisted_59)
            ]))
          ]),
          _: 2
        }, [
          unref(currentNftBg).val ? {
            name: "footer",
            fn: withCtx(() => [
              createBaseVNode("span", _hoisted_60, [
                createBaseVNode("a", { onClick: closeNftModal }, toDisplayString(_ctx.$t("cancel")), 1),
                createBaseVNode("a", { onClick: confirmNftbg }, toDisplayString(_ctx.$t("confirm")), 1)
              ])
            ])
          } : void 0
        ]), 1032, ["modelValue"]),
        createCommentVNode(" \u88C1\u526A "),
        createVNode(CropperVue, {
          visible: isCropperVisible.value,
          onCancel: _cache[10] || (_cache[10] = ($event) => isCropperVisible.value = false),
          onConfirm: cropperConfirm,
          img: unref(cropperImage).val
        }, null, 8, ["visible", "img"])
      ], 64);
    };
  }
});
var UserCenter = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3fdd2be2"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/UserCenter/UserCenter.vue"]]);

export { UserCenter as U };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckNlbnRlci45MWE1MjUyNC5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
