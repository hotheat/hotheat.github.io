import { _ as _export_sfc, e as defineComponent, r as ref, d as computed, g as openBlock, i as createBlock, j as withCtx, k as createBaseVNode, l as createVNode, A as createElementBlock, D as toDisplayString, m as createCommentVNode, C as unref, K as withModifiers, by as metafile } from './index.e0dfe776.js';
import { E as ElSkeletonItem, a as ElSkeleton } from './skeleton.3d9978fa.js';
import { E as ElImage } from './image-viewer.bccbfe17.js';

var BlindBoxImg = "/assets/blindBoxImg.4f257fef.png";

var BlindBoxSaleOff = "/assets/blindBoxSaleOff.3b6950d2.svg";

/**
 * 图片切换特效，支持img和canvas标签
 * 调用方式
 * 	1. 初始化方式调用，在点击时自动执行
 * 		img.initEffect({
 * 			animate: "fadeout",	// 动画类型
 * 			target: "http://i.gtimg.cn/music/common/upload/t_cm3_photo_publish/1432038769616126350.jpg",	// 替换的新图片
 * 			audio: "http://i.gtimg.cn/music/common/upload/ct/broken.mp3"	// 音效
 * 		}).then(function() {
 * 			console.log("执行成功")
 * 		})
 * 	2. 手动触发调用
 * 		img.execEffect({
 * 			animate: "fadeout",	// 动画类型
 * 			target: "http://i.gtimg.cn/music/common/upload/t_cm3_photo_publish/1432038769616126350.jpg",	// 替换的新图片
 * 			audio: "http://i.gtimg.cn/music/common/upload/ct/broken.mp3",	// 音效
 * 			x: e.offsetX,	// x坐标
 * 			y: e.offsetY	// y坐标
 * 		}).then(function() {
 * 			console.log("执行成功")
 * 		})
 * 添加特效动画
 * 	window.addImgEffect("动画名", function(callback){[动画处理函数]})
 * 		this.canvas	加载当前图片
 * 		this.img	加载下一张图片
 * 		this.parentElement
 * 		this.x	点击坐标
 * 		this.y
 * 		this.offset.left	img相对页面偏移
 * 		this.offset.top
 * 		this.direction.x	滑动方向向量
 * 		this.direction.y
 *
 * @author ct
 * @version 2015-05-20
 * github: https://github.com/xingqiao/ct_effect
 */
 (function (window, document) {
    var lastTime = 0;
    window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
        var id = window.setTimeout(function () { callback(currTime + timeToCall); }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    });
    window.cancelAnimationFrame || (window.cancelAnimationFrame = window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function (id) { clearTimeout(id); });
})(window);
 (function (window, document) {
    var doc = document;
    var $ = function (s, p) { return p && p.querySelector ? p.querySelector(s) : doc.querySelector(s) };
    var $$ = function (s, p) { return p && p.querySelectorAll ? p.querySelectorAll(s) : doc.querySelectorAll(s) };
    var _ef = {}, opts = [], curIndex, timer;
    _ef.fadeout = function (callback) {
        var o = this;
        o.canvas.style.transition = o.canvas.style.webkitTransition = 'opacity .8s';
        setTimeout(function () { o.canvas.style.opacity = 0; }, 0);
        setTimeout(callback, 800);
    };
    // 获取元素相对与body的offset偏移
    function _getOffset(e) {
        var o = { left: e.offsetLeft, top: e.offsetTop };
        while (e = e.offsetParent) {
            o.left += e.offsetLeft;
            o.top += e.offsetTop;
        }
        return o;
    }    // 获取坐标
    function _getCoords(e, offset) {
        var c;
        if ((window.MouseEvent && e instanceof MouseEvent) || (window.TouchEvent && e instanceof TouchEvent)) {
            c = {};
            c.x = (e.touches ? e.touches[0].pageX : e.pageX) - (offset ? offset.left : 0);
            c.y = (e.touches ? e.touches[0].pageY : e.pageY) - (offset ? offset.top : 0);
        }
        return c;
    }    // 执行动画
    function _ani(params) {
        if (_ef._in_ani) {
            return;
        }
        console.time('animate');

        var img = params && params.img;
        if (img) {
            _ef._in_ani = 1;
            // 播放音效
            if (params.audio) {
                var bgm = new Audio();
                bgm.src = params.audio;
                setTimeout(function () { bgm.play(); }, 0);
            }
            // 绘制到canvas
            var d = document.createElement('div'), w, h;
            params.parentElement = img.parentElement;
            params.canvas = document.createElement('canvas');
            params.ctx = params.canvas.getContext('2d');
            params.ctx.drawImage(img, 0, 0, w = params.width = params.canvas.width = img.width, h = params.height = params.canvas.height = img.height);
            d.appendChild(params.canvas);
            d.style.cssText = 'position:absolute;top:' + img.offsetTop + 'px;left:' + img.offsetLeft + 'px;width:' + w + 'px;height:' + h + 'px;overflow:hidden;';
            params.parentElement.appendChild(d);
            // 规范坐标
            params.x = (params.x >= 0 ? params.x : w / 2) | 0;
            params.y = (params.y >= 0 ? params.y : h / 2) | 0;
            // 加载替换的图片
            if (params.target) {
                img.src = params.target;
            } else {
                img.style.display = 'none';
            }
            // 执行动画
            var callback = function () {
                console.timeEnd('animate');

                var _cb = params._cb;
                // 防止多次触发回调
                delete params._cb;
                try {
                    params.parentElement.contains(d) && params.parentElement.removeChild(d);
                } catch (ex) {
                    console.log(ex);
                }
                _ef._in_ani = 0;
                _cb && _cb.forEach && _cb.forEach(function (cb) {
                    typeof cb == 'function' && cb.call(img);
                });
            };
            setTimeout(function () {
                (_ef[params.animate] || _ef.fadeout).call(params, callback, params.x, params.y);
            }, 0);
        }
    }    function _start(e) {
        var img = e.target;
        if (img.hasAttribute('data-ct-effect')) {
            curIndex = img.getAttribute('data-ct-effect'), params = opts[curIndex] || {};
            params.img = img;
            params.$ = $;
            params.$$ = $$;
            // 只响应一次动画
            img.removeAttribute('data-ct-effect');
            // 获取参数
            ['animate', 'audio', 'target'].forEach(function (attr) {
                var a = img.getAttribute('data-ct-effect-' + attr);
                a && (params[attr] = a);
            });
            // 获取坐标
            params.offset = _getOffset(img);
            var coords = _getCoords(e, params.offset);
            if (coords) {
                params.x = coords.x;
                params.y = coords.y;
            }
            params.direction = { x: 0, y: 0 };
            timer = setTimeout(_end, 100);
            // 停止事件冒泡
            e.preventDefault();
            e.stopPropagation();
        }
    }    function _move(e) {
        var params = opts[curIndex];
        if (params) {
            var coords = _getCoords(e, params.offset);
            params.direction.x = coords.x - params.x;
            params.direction.y = coords.y - params.y;
        }
    }    function _end() {
        var params = opts[curIndex];
        if (params) {
            if (timer > 0) {
                clearTimeout(timer);
                timer = 0;
            }
            delete opts[curIndex];
            // 执行动画
            _ani(params);
        }
    }    // 预处理参数
    function _normalParam(img, params, cb) {
        params || (params = {});
        if (typeof params == 'function') {
            params = { _cb: [params] };
        } else {
            params._cb = [];
            typeof params.cb == 'function' && params._cb.push(params.cb);
            typeof cb == 'function' && params._cb.push(cb);
            delete params.cb;
        }
        img.then = function (cb) { return typeof cb == 'function' && params._cb.push(cb), img };
        return params;
    }    // 添加事件
    doc.addEventListener('touchstart', _start);
    doc.addEventListener('mousedown', _start);
    doc.addEventListener('touchmove', _move);
    doc.addEventListener('mousemove', _move);
    doc.addEventListener('touchend', _end);
    doc.addEventListener('mouseuo', _end);
    // 添加外部调用接口
    HTMLImageElement.prototype.initEffect = HTMLCanvasElement.prototype.initEffect = function (params, cb) {
        var img = this, e = img.getAttribute('data-ct-effect');
        params = _normalParam(img, params, cb);
        if (!e) {
            e = opts.length;
            img.setAttribute('data-ct-effect', e);
        }
        ['animate', 'audio', 'target'].forEach(function (attr) {
            params[attr] ? img.setAttribute('data-ct-effect-' + attr, params[attr]) : img.removeAttribute('data-ct-effect-' + attr);
        });
        opts[e] = params;
        img.then = function (cb) { return typeof cb == 'function' && params._cb.push(cb), img };
        return img;
    };
    HTMLImageElement.prototype.execEffect = HTMLCanvasElement.prototype.execEffect = function (params, cb) {
        params = _normalParam(this, params, cb);
        params.img = this;
        _ani(params);
        return this;
    };
    // 注册动画接口
    window.addImgEffect = function (name, ani) {
        if (typeof ani == 'function') {
            (name instanceof Array ? name : [name]).forEach(function (n) {
                _ef[n] = ani;
            });
        }
    };
})(window, document);

/**
 * 立方体特效
 * 	动画名	立方体|cube
 * 	初始化参数
 * 		direct	翻转方向，不传该参数时会根据滑动方向自动判断，点击时默认为left
 * 			top|bottom|left|right
 * 		duration = 1500,	// 持续时间
 *
 * @author ct
 * @version 2015-06-05
 * github: https://github.com/xingqiao/ct_effect
 */
(function(window, document) {
    var opts = {
        direct: 'left',	// 翻转方向
        duration: 1000,	// 翻转时间
        perspective: 500	// 视点距离
    };
    function _cube(params, callback) {
        var duration = params.duration > 300 ? params.duration : opts.duration,
            perspective = params.perspective > 500 ? params.perspective : opts.perspective,
            direct = /^(top|bottom|left|right)$/i.test(params.direct) ? params.direct.toLowerCase() : 'left',
            wrap = params.canvas.parentElement,
            css = {},
            isLR = /left|right/.test(direct),
            isTR = /top|right/.test(direct),
            isBR = /bottom|right/.test(direct);
        ['transition', 'transform', 'transform-style', 'transform-origin', 'backface-visibility'].forEach(function(s){
            css[s] = (s in wrap.style ? '' : '-webkit-') + s;
        });
        var w = params.width, h = params.height,
            dc = (isLR ? w : h) / 2,	// 旋转中心距平面距离,
            rd = '' + ~~!isLR + ',' + ~~isLR + ',0';	// 旋转轴
            document.createDocumentFragment(); var c = params.canvas;
        var d = document.createElement('div');
        wrap.appendChild(d);
        d.style.cssText = 'margin:0;display:block;position:absolute;' + css['transform-style'] + ':preserve-3d;' + css['backface-visibility'] + ':hidden;' + css.transition + ':transform ' + (duration - 50) + 'ms ease;' + css['backface-visibility'] + ':hidden;' + css.transform + ':perspective(' + perspective + 'px) translate3d(0,0,-' + dc + 'px)';
        c.style[css.transform] = 'translate3d(0,0,' + dc + 'px)';
        d.appendChild(c);
        if (params.target) {
            var nextImg = new Image();
            nextImg.width = w;
            nextImg.height = h;
            nextImg.style.cssText = 'position:absolute;top:0;left:0;' + css.transform + ':translate3d(' + (isLR ? (isBR ? '-100%' : '100%') : 0) + ',' + (isLR ? 0 : (isBR ? '-100%' : '100%')) + ',' + dc + 'px) rotate3d(' + rd + ', ' + (isTR ? '-' : '') + '90deg);' + css['transform-origin'] + ':' + (isLR ? (isTR ? '100%' : 0) + ' 50%' : '50% ' + (isTR ? 0 : '100%'));
            nextImg.src = params.target;
            d.appendChild(nextImg);
            params.img.style.display = 'none';
        }
        setTimeout(function(){
            d.style[css.transform] = d.style[css.transform] + ' rotate3d(' + rd + ',' + (isTR ? '' : '-') + '90deg)';
        }, 50);
        setTimeout(function(){
            params.target && (params.img.style.display = '');
            callback && callback();
        }, duration);
    }    window.addImgEffect && addImgEffect(['立方体', 'cube'], function(callback) {
        if (!this.direct && this.direction) {
            params.direct = Math.abs(this.direction.y) > Math.abs(this.direction.x) ? (this.direction.y > 0 ? 'bottom' : 'top') : (this.direction.x > 0 ? 'right' : 'left');
        }
        _cube(this, callback);
    });
})(window, document);

var Cover_scss_vue_type_style_index_0_src_0d142784_scoped_true_lang = '';

const _hoisted_1 = { class: "cover" };
const _hoisted_2 = { class: "cover" };
const _hoisted_3 = {
  key: 0,
  class: "remint"
};
const _hoisted_4 = {
  key: 1,
  class: "cube"
};
const _hoisted_5 = ["src", "onClick"];
const _hoisted_6 = {
  key: 2,
  class: "blindBoxImg"
};
const _hoisted_7 = ["src"];
const _hoisted_8 = ["src"];
const _hoisted_9 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    cover: { type: Array, required: true },
    secondCover: { type: String, required: false },
    isLazy: { type: Boolean, required: false, default: true },
    isShowPrew: { type: Boolean, required: false, default: false },
    isRemint: { type: Boolean, required: false },
    isSkeleton: { type: Boolean, required: false, default: false },
    isBlindBox: { type: Boolean, required: false, default: false },
    blindBoxRest: { type: Number, required: true, default: 0 },
    isShowSaleOut: { type: Boolean, required: false, default: true },
    needGizp: { type: Boolean, required: false, default: false }
  },
  setup(__props) {
    const props = __props;
    console.log("xzxzxzxzxz", props.needGizp);
    const imgRef = ref();
    const currentImaIndex = ref(0);
    const isChangeing = ref(false);
    function change() {
      if (isChangeing.value)
        return;
      isChangeing.value = false;
      currentImaIndex.value = currentImaIndex.value ? 0 : 1;
      imgRef.value.execEffect({
        animate: "cube",
        target: metafile(emptyCover.value[currentImaIndex.value])
      }).then(() => {
        isChangeing.value = false;
      });
    }
    const emptyCover = computed(() => {
      return props.cover.filter((item) => {
        if (item)
          return item;
      });
    });
    return (_ctx, _cache) => {
      const _component_ElSkeletonItem = ElSkeletonItem;
      const _component_ElImage = ElImage;
      const _component_ElSkeleton = ElSkeleton;
      return openBlock(), createBlock(_component_ElSkeleton, {
        loading: __props.isSkeleton,
        animated: ""
      }, {
        template: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_ElSkeletonItem, { variant: "image" })
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            __props.isRemint ? (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(_ctx.$t("isReminted")), 1)) : createCommentVNode("v-if", true),
            unref(emptyCover).length > 1 ? (openBlock(), createElementBlock("div", _hoisted_4, [
              createBaseVNode("img", {
                src: _ctx.$filters.metafile(unref(emptyCover)[0]),
                ref_key: "imgRef",
                ref: imgRef,
                onClick: withModifiers(change, ["stop"])
              }, null, 8, _hoisted_5)
            ])) : props.isBlindBox ? (openBlock(), createElementBlock("div", _hoisted_6, [
              createBaseVNode("img", {
                src: unref(BlindBoxImg),
                alt: ""
              }, null, 8, _hoisted_7),
              __props.blindBoxRest <= 0 && props.isShowSaleOut ? (openBlock(), createElementBlock("img", {
                key: 0,
                src: unref(BlindBoxSaleOff),
                alt: ""
              }, null, 8, _hoisted_8)) : createCommentVNode("v-if", true),
              __props.blindBoxRest <= 0 && props.isShowSaleOut ? (openBlock(), createElementBlock("span", _hoisted_9, toDisplayString(_ctx.$t("saleOut")), 1)) : createCommentVNode("v-if", true)
            ])) : (openBlock(), createBlock(_component_ElImage, {
              key: 3,
              fit: "contain",
              lazy: true,
              src: _ctx.$filters.metafile(__props.cover[0]),
              "preview-src-list": __props.isShowPrew ? [__props.needGizp ? _ctx.$filters.metafile(__props.cover[0].split("?")[0], -1) : _ctx.$filters.metafile(__props.cover[0], -1)] : []
            }, null, 8, ["src", "preview-src-list"]))
          ])
        ]),
        _: 1
      }, 8, ["loading"]);
    };
  }
});
var NFTCover = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0d142784"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/components/NFT/Cover.vue"]]);

export { NFTCover as N };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ292ZXIuNWZmZDhhY2MuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
