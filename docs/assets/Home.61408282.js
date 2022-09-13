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
import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, p as pushScopeId, b as popScopeId, d as defineComponent, r as reactive, e as ref, u as useI18n, f as checkUserInfoFinish, G as GetNFTRanks, g as unref, h as createVNode, w as withCtx, F as Fragment, i as renderList, j as createCommentVNode, k as useStore, C as CertificationType, N as NftApiCode, l as createBlock, m as GetAllOnSellNftList, n as GetNftOnShowListByClassify, q as GetNftOnShowListBySearch } from "./index.1063289c.js";
import { S as SetHomeDatas } from "./homeSetData.92dc270f.js";
import { N as NftList } from "./NftList.697e9c37.js";
import { c as classifyList } from "./config.c3ac3733.js";
import { $, c as createElementIfNotDefined, a as classesToSelector, S as Scrollbar, A as A11y, b as Autoplay, d as Swiper, R as RecommentSwiper, e as SwiperSlide } from "./RecommentSwiper.704c9464.js";
import { S as SortType, O as OrderType } from "./enum.cb4b74f9.js";
import "./icon_search.630cdfed.js";
import "./LoadMore.917b373d.js";
import "./IsNull.f190e793.js";
import "./NftSkeleton.c784c379.js";
/* empty css                           */import "./icon_cer.d2259267.js";
import "./icon_cer_nft.f25ddb49.js";
/* empty css                     */import "./offSale.8a5b3e0c.js";
import "./nftDetail.d498c8f0.js";
import "./Sort.f551df98.js";
var _imports_0 = "/assets/img_2.24a6ec12.svg";
var _imports_1 = "/assets/img_1.856749d7.svg";
var _imports_2 = "/assets/img_4.bba57176.svg";
var _imports_3 = "/assets/img_3.0c94455d.svg";
var HomeNFTIntro_scss_vue_type_style_index_0_src_36eb4d87_scoped_true_lang = "";
const _sfc_main$1 = {};
const _withScopeId = (n) => (pushScopeId("data-v-36eb4d87"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "nft-muodle" };
const _hoisted_2$1 = { class: "container" };
const _hoisted_3$1 = { class: "title" };
const _hoisted_4$1 = { class: "nft-module-list flex" };
const _hoisted_5$1 = { class: "nft-module-item flex1" };
const _hoisted_6$1 = { class: "nft-module-item-warp" };
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("img", { src: _imports_0 })
], -1));
const _hoisted_8$1 = { class: "name" };
const _hoisted_9$1 = { class: "drsc" };
const _hoisted_10 = { class: "nft-module-item flex1" };
const _hoisted_11 = { class: "nft-module-item-warp" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("img", { src: _imports_1 })
], -1));
const _hoisted_13 = { class: "name" };
const _hoisted_14 = { class: "drsc" };
const _hoisted_15 = { class: "nft-module-item flex1" };
const _hoisted_16 = { class: "nft-module-item-warp" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("img", { src: _imports_2 })
], -1));
const _hoisted_18 = { class: "name" };
const _hoisted_19 = { class: "drsc" };
const _hoisted_20 = { class: "nft-module-item flex1" };
const _hoisted_21 = { class: "nft-module-item-warp" };
const _hoisted_22 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "icon" }, [
  /* @__PURE__ */ createBaseVNode("img", { src: _imports_3 })
], -1));
const _hoisted_23 = { class: "name" };
const _hoisted_24 = { class: "drsc" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createBaseVNode("div", _hoisted_2$1, [
      createBaseVNode("div", _hoisted_3$1, toDisplayString(_ctx.$t("nftModuleTitle")), 1),
      createBaseVNode("div", _hoisted_4$1, [
        createBaseVNode("div", _hoisted_5$1, [
          createBaseVNode("div", _hoisted_6$1, [
            _hoisted_7$1,
            createBaseVNode("div", _hoisted_8$1, toDisplayString(_ctx.$t("nftModuleName1")), 1),
            createBaseVNode("div", _hoisted_9$1, [
              createBaseVNode("div", null, toDisplayString(_ctx.$t("nftModuleDrsc1")), 1)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("div", _hoisted_11, [
            _hoisted_12,
            createBaseVNode("div", _hoisted_13, toDisplayString(_ctx.$t("nftModuleName2")), 1),
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("div", null, toDisplayString(_ctx.$t("nftModuleDrsc2")), 1)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_15, [
          createBaseVNode("div", _hoisted_16, [
            _hoisted_17,
            createBaseVNode("div", _hoisted_18, toDisplayString(_ctx.$t("nftModuleName3")), 1),
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("div", null, toDisplayString(_ctx.$t("nftModuleDrsc3")), 1)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_20, [
          createBaseVNode("div", _hoisted_21, [
            _hoisted_22,
            createBaseVNode("div", _hoisted_23, toDisplayString(_ctx.$t("nftModuleName4")), 1),
            createBaseVNode("div", _hoisted_24, [
              createBaseVNode("div", null, toDisplayString(_ctx.$t("nftModuleDrsc4")), 1)
            ])
          ])
        ])
      ])
    ])
  ]);
}
var HomeNFTIntro = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__scopeId", "data-v-36eb4d87"]]);
function Navigation({
  swiper,
  extendParams,
  on,
  emit
}) {
  extendParams({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: false,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock"
    }
  });
  swiper.navigation = {
    nextEl: null,
    $nextEl: null,
    prevEl: null,
    $prevEl: null
  };
  function getEl(el) {
    let $el;
    if (el) {
      $el = $(el);
      if (swiper.params.uniqueNavElements && typeof el === "string" && $el.length > 1 && swiper.$el.find(el).length === 1) {
        $el = swiper.$el.find(el);
      }
    }
    return $el;
  }
  function toggleEl($el, disabled) {
    const params = swiper.params.navigation;
    if ($el && $el.length > 0) {
      $el[disabled ? "addClass" : "removeClass"](params.disabledClass);
      if ($el[0] && $el[0].tagName === "BUTTON")
        $el[0].disabled = disabled;
      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
      }
    }
  }
  function update() {
    if (swiper.params.loop)
      return;
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
    toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
  }
  function onPrevClick(e) {
    e.preventDefault();
    if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind)
      return;
    swiper.slidePrev();
  }
  function onNextClick(e) {
    e.preventDefault();
    if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind)
      return;
    swiper.slideNext();
  }
  function init() {
    const params = swiper.params.navigation;
    swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    });
    if (!(params.nextEl || params.prevEl))
      return;
    const $nextEl = getEl(params.nextEl);
    const $prevEl = getEl(params.prevEl);
    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on("click", onNextClick);
    }
    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on("click", onPrevClick);
    }
    Object.assign(swiper.navigation, {
      $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl,
      prevEl: $prevEl && $prevEl[0]
    });
    if (!swiper.enabled) {
      if ($nextEl)
        $nextEl.addClass(params.lockClass);
      if ($prevEl)
        $prevEl.addClass(params.lockClass);
    }
  }
  function destroy() {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    if ($nextEl && $nextEl.length) {
      $nextEl.off("click", onNextClick);
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }
    if ($prevEl && $prevEl.length) {
      $prevEl.off("click", onPrevClick);
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  }
  on("init", () => {
    init();
    update();
  });
  on("toEdge fromEdge lock unlock", () => {
    update();
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    if ($nextEl) {
      $nextEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
    }
    if ($prevEl) {
      $prevEl[swiper.enabled ? "removeClass" : "addClass"](swiper.params.navigation.lockClass);
    }
  });
  on("click", (_s, e) => {
    const {
      $nextEl,
      $prevEl
    } = swiper.navigation;
    const targetEl = e.target;
    if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
      if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl)))
        return;
      let isHidden;
      if ($nextEl) {
        isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
      } else if ($prevEl) {
        isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
      }
      if (isHidden === true) {
        emit("navigationShow");
      } else {
        emit("navigationHide");
      }
      if ($nextEl) {
        $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
      if ($prevEl) {
        $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
      }
    }
  });
  Object.assign(swiper.navigation, {
    update,
    init,
    destroy
  });
}
function Pagination({
  swiper,
  extendParams,
  on,
  emit
}) {
  const pfx = "swiper-pagination";
  extendParams({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: false,
      type: "bullets",
      dynamicBullets: false,
      dynamicMainBullets: 1,
      formatFractionCurrent: (number) => number,
      formatFractionTotal: (number) => number,
      bulletClass: `${pfx}-bullet`,
      bulletActiveClass: `${pfx}-bullet-active`,
      modifierClass: `${pfx}-`,
      currentClass: `${pfx}-current`,
      totalClass: `${pfx}-total`,
      hiddenClass: `${pfx}-hidden`,
      progressbarFillClass: `${pfx}-progressbar-fill`,
      progressbarOppositeClass: `${pfx}-progressbar-opposite`,
      clickableClass: `${pfx}-clickable`,
      lockClass: `${pfx}-lock`,
      horizontalClass: `${pfx}-horizontal`,
      verticalClass: `${pfx}-vertical`
    }
  });
  swiper.pagination = {
    el: null,
    $el: null,
    bullets: []
  };
  let bulletSize;
  let dynamicBulletIndex = 0;
  function isPaginationDisabled() {
    return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
  }
  function setSideBullets($bulletEl, position) {
    const {
      bulletActiveClass
    } = swiper.params.pagination;
    $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
  }
  function update() {
    const rtl = swiper.rtl;
    const params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    let current;
    const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
      if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
        current -= slidesLength - swiper.loopedSlides * 2;
      }
      if (current > total - 1)
        current -= total;
      if (current < 0 && swiper.params.paginationType !== "bullets")
        current = total + current;
    } else if (typeof swiper.snapIndex !== "undefined") {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    }
    if (params.type === "bullets" && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      const bullets = swiper.pagination.bullets;
      let firstIndex;
      let lastIndex;
      let midIndex;
      if (params.dynamicBullets) {
        bulletSize = bullets.eq(0)[swiper.isHorizontal() ? "outerWidth" : "outerHeight"](true);
        $el.css(swiper.isHorizontal() ? "width" : "height", `${bulletSize * (params.dynamicMainBullets + 4)}px`);
        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== void 0) {
          dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);
          if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
            dynamicBulletIndex = params.dynamicMainBullets - 1;
          } else if (dynamicBulletIndex < 0) {
            dynamicBulletIndex = 0;
          }
        }
        firstIndex = Math.max(current - dynamicBulletIndex, 0);
        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
        midIndex = (lastIndex + firstIndex) / 2;
      }
      bullets.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((suffix) => `${params.bulletActiveClass}${suffix}`).join(" "));
      if ($el.length > 1) {
        bullets.each((bullet) => {
          const $bullet = $(bullet);
          const bulletIndex = $bullet.index();
          if (bulletIndex === current) {
            $bullet.addClass(params.bulletActiveClass);
          }
          if (params.dynamicBullets) {
            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
              $bullet.addClass(`${params.bulletActiveClass}-main`);
            }
            if (bulletIndex === firstIndex) {
              setSideBullets($bullet, "prev");
            }
            if (bulletIndex === lastIndex) {
              setSideBullets($bullet, "next");
            }
          }
        });
      } else {
        const $bullet = bullets.eq(current);
        const bulletIndex = $bullet.index();
        $bullet.addClass(params.bulletActiveClass);
        if (params.dynamicBullets) {
          const $firstDisplayedBullet = bullets.eq(firstIndex);
          const $lastDisplayedBullet = bullets.eq(lastIndex);
          for (let i = firstIndex; i <= lastIndex; i += 1) {
            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
          }
          if (swiper.params.loop) {
            if (bulletIndex >= bullets.length) {
              for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
              }
              bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
            } else {
              setSideBullets($firstDisplayedBullet, "prev");
              setSideBullets($lastDisplayedBullet, "next");
            }
          } else {
            setSideBullets($firstDisplayedBullet, "prev");
            setSideBullets($lastDisplayedBullet, "next");
          }
        }
      }
      if (params.dynamicBullets) {
        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
        const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
        const offsetProp = rtl ? "right" : "left";
        bullets.css(swiper.isHorizontal() ? offsetProp : "top", `${bulletsOffset}px`);
      }
    }
    if (params.type === "fraction") {
      $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
      $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
    }
    if (params.type === "progressbar") {
      let progressbarDirection;
      if (params.progressbarOpposite) {
        progressbarDirection = swiper.isHorizontal() ? "vertical" : "horizontal";
      } else {
        progressbarDirection = swiper.isHorizontal() ? "horizontal" : "vertical";
      }
      const scale = (current + 1) / total;
      let scaleX = 1;
      let scaleY = 1;
      if (progressbarDirection === "horizontal") {
        scaleX = scale;
      } else {
        scaleY = scale;
      }
      $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
    }
    if (params.type === "custom" && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      emit("paginationRender", $el[0]);
    } else {
      emit("paginationUpdate", $el[0]);
    }
    if (swiper.params.watchOverflow && swiper.enabled) {
      $el[swiper.isLocked ? "addClass" : "removeClass"](params.lockClass);
    }
  }
  function render() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    const $el = swiper.pagination.$el;
    let paginationHTML = "";
    if (params.type === "bullets") {
      let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
        numberOfBullets = slidesLength;
      }
      for (let i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
        }
      }
      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
    }
    if (params.type === "fraction") {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML = `<span class="${params.currentClass}"></span> / <span class="${params.totalClass}"></span>`;
      }
      $el.html(paginationHTML);
    }
    if (params.type === "progressbar") {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
      }
      $el.html(paginationHTML);
    }
    if (params.type !== "custom") {
      emit("paginationRender", swiper.pagination.$el[0]);
    }
  }
  function init() {
    swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
      el: "swiper-pagination"
    });
    const params = swiper.params.pagination;
    if (!params.el)
      return;
    let $el = $(params.el);
    if ($el.length === 0)
      return;
    if (swiper.params.uniqueNavElements && typeof params.el === "string" && $el.length > 1) {
      $el = swiper.$el.find(params.el);
      if ($el.length > 1) {
        $el = $el.filter((el) => {
          if ($(el).parents(".swiper")[0] !== swiper.el)
            return false;
          return true;
        });
      }
    }
    if (params.type === "bullets" && params.clickable) {
      $el.addClass(params.clickableClass);
    }
    $el.addClass(params.modifierClass + params.type);
    $el.addClass(params.modifierClass + swiper.params.direction);
    if (params.type === "bullets" && params.dynamicBullets) {
      $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
      dynamicBulletIndex = 0;
      if (params.dynamicMainBullets < 1) {
        params.dynamicMainBullets = 1;
      }
    }
    if (params.type === "progressbar" && params.progressbarOpposite) {
      $el.addClass(params.progressbarOppositeClass);
    }
    if (params.clickable) {
      $el.on("click", classesToSelector(params.bulletClass), function onClick(e) {
        e.preventDefault();
        let index = $(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop)
          index += swiper.loopedSlides;
        swiper.slideTo(index);
      });
    }
    Object.assign(swiper.pagination, {
      $el,
      el: $el[0]
    });
    if (!swiper.enabled) {
      $el.addClass(params.lockClass);
    }
  }
  function destroy() {
    const params = swiper.params.pagination;
    if (isPaginationDisabled())
      return;
    const $el = swiper.pagination.$el;
    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    $el.removeClass(params.modifierClass + swiper.params.direction);
    if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass)
      swiper.pagination.bullets.removeClass(params.bulletActiveClass);
    if (params.clickable) {
      $el.off("click", classesToSelector(params.bulletClass));
    }
  }
  on("init", () => {
    init();
    render();
    update();
  });
  on("activeIndexChange", () => {
    if (swiper.params.loop) {
      update();
    } else if (typeof swiper.snapIndex === "undefined") {
      update();
    }
  });
  on("snapIndexChange", () => {
    if (!swiper.params.loop) {
      update();
    }
  });
  on("slidesLengthChange", () => {
    if (swiper.params.loop) {
      render();
      update();
    }
  });
  on("snapGridLengthChange", () => {
    if (!swiper.params.loop) {
      render();
      update();
    }
  });
  on("destroy", () => {
    destroy();
  });
  on("enable disable", () => {
    const {
      $el
    } = swiper.pagination;
    if ($el) {
      $el[swiper.enabled ? "removeClass" : "addClass"](swiper.params.pagination.lockClass);
    }
  });
  on("lock unlock", () => {
    update();
  });
  on("click", (_s, e) => {
    const targetEl = e.target;
    const {
      $el
    } = swiper.pagination;
    if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
      if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl))
        return;
      const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);
      if (isHidden === true) {
        emit("paginationShow");
      } else {
        emit("paginationHide");
      }
      $el.toggleClass(swiper.params.pagination.hiddenClass);
    }
  });
  Object.assign(swiper.pagination, {
    render,
    update,
    init,
    destroy
  });
}
var Home_scss_vue_type_style_index_0_src_ab6583f2_scoped_true_lang = "";
const _hoisted_1 = {
  key: 0,
  class: "banner"
};
const _hoisted_2 = ["href", "target"];
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "home" };
const _hoisted_5 = { class: "section all" };
const _hoisted_6 = { class: "container" };
const _hoisted_7 = { class: "section-header" };
const _hoisted_8 = { class: "title" };
const _hoisted_9 = { class: "intro" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const store = useStore();
    reactive([]);
    let Nfts = reactive([]);
    const pagination = reactive(__spreadProps(__spreadValues({}, store.state.pagination), {
      pageSize: 24
    }));
    const keyword = ref("");
    const classify = ref("all");
    const i18n = useI18n();
    let apiType = "GetAllOnSellNftList";
    const sorts = reactive([
      {
        name: i18n.t("time"),
        nameKey: "time",
        value: SortType.Time,
        orderType: OrderType.DESC
      },
      {
        name: i18n.t("price"),
        nameKey: "price",
        value: SortType.Price,
        orderType: OrderType.DESC
      }
    ]);
    const sortValue = ref(SortType.Time);
    function changeSort(value) {
      if (sortValue.value === value) {
        const index = sorts.findIndex((item) => item.value === value);
        sorts[index].orderType = sorts[index].orderType === OrderType.ASC ? OrderType.DESC : OrderType.ASC;
      } else {
        sortValue.value = value;
      }
      pagination.page = 1;
      pagination.loading = false;
      pagination.nothing = false;
      getNftList(true);
    }
    ref(true);
    const isShowNftListSkeleton = ref(true);
    function getNftList(isCover = false) {
      return __async(this, null, function* () {
        var _a;
        const apiName = {
          GetAllOnSellNftList,
          GetNftOnShowListByClassify,
          GetNftOnShowListBySearch
        };
        const res = yield apiName[apiType]({
          PageSize: pagination.pageSize.toString(),
          Page: pagination.page.toString(),
          classify: apiType === "GetNftOnShowListByClassify" ? classify.value : void 0,
          SearchWord: apiType === "GetNftOnShowListBySearch" ? keyword.value : void 0,
          CertificationType: CertificationType.isCert,
          orderType: (_a = sorts.find((item) => item.value === sortValue.value)) == null ? void 0 : _a.orderType,
          sortType: sortValue.value,
          metaId: store.state.userInfo ? store.state.userInfo.metaId : void 0
        });
        if (res.code === NftApiCode.success) {
          if (isCover)
            Nfts.length = 0;
          if (res.data.results.items.length > 0) {
            const results = yield SetHomeDatas(res.data.results.items);
            Nfts.push(...results);
          } else {
            pagination.nothing = true;
          }
          isShowNftListSkeleton.value = false;
        }
      });
    }
    function getMore() {
      pagination.loading = true;
      pagination.page++;
      getNftList().then(() => {
        pagination.loading = false;
      });
    }
    function changeClassify(classifyName) {
      if (classify.value === classifyName)
        return;
      isShowNftListSkeleton.value = true;
      classify.value = classifyName;
      pagination.page = 1;
      pagination.loading = false;
      pagination.nothing = false;
      if (classifyName === "all") {
        apiType = "GetAllOnSellNftList";
      } else {
        apiType = "GetNftOnShowListByClassify";
      }
      getNftList(true);
      keyword.value = "";
    }
    function search(_keyword) {
      return __async(this, null, function* () {
        debugger;
        keyword.value = _keyword;
        isShowNftListSkeleton.value = true;
        pagination.loading = false;
        pagination.nothing = false;
        pagination.page = 1;
        if (keyword.value === "") {
          classify.value = "all";
          apiType = "GetAllOnSellNftList";
        } else {
          classify.value = "";
          apiType = "GetNftOnShowListBySearch";
        }
        getNftList(true);
      });
    }
    function getRanks() {
      return new Promise((resolve) => __async(this, null, function* () {
        const params = { page: 1, pageSize: 12 };
        const results = yield Promise.all([
          GetNFTRanks(__spreadProps(__spreadValues({}, params), { key: "Issue" })),
          GetNFTRanks(__spreadProps(__spreadValues({}, params), { key: "PayLike" })),
          GetNFTRanks(__spreadProps(__spreadValues({}, params), { key: "SimpleArticleDonate" }))
        ]);
        if (results) {
          if (results[0].code === 0) {
            results[0].data.results.items;
          }
          if (results[1].code === 0) {
            results[0].data.results.items;
          }
          if (results[2].code === 0) {
            results[0].data.results.items;
          }
        }
        resolve();
      }));
    }
    checkUserInfoFinish().then(() => {
      getNftList();
      getRanks();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        unref(store).state.banners.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createVNode(unref(Swiper), {
            autoHeight: true,
            modules: [unref(Navigation), unref(Pagination), unref(Scrollbar), unref(A11y), unref(Autoplay)],
            pagination: { clickable: true },
            autoplay: true,
            loop: true
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(store).state.banners, (banner) => {
                return openBlock(), createBlock(unref(SwiperSlide), null, {
                  default: withCtx(() => [
                    createBaseVNode("a", {
                      href: banner.url,
                      target: banner.url.indexOf("http://") !== -1 || banner.url.indexOf("https://") !== -1 ? "_blank" : "_self"
                    }, [
                      createBaseVNode("img", {
                        src: _ctx.$filters.getI18nContent(banner, "picUrl"),
                        alt: "metaelf"
                      }, null, 8, _hoisted_3)
                    ], 8, _hoisted_2)
                  ]),
                  _: 2
                }, 1024);
              }), 256))
            ]),
            _: 1
          }, 8, ["modules"])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_4, [
          createVNode(RecommentSwiper),
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, toDisplayString(_ctx.$t("allmenu")), 1),
                createBaseVNode("div", _hoisted_9, toDisplayString(_ctx.$t("allmenuIntro")), 1)
              ]),
              createVNode(NftList, {
                nfts: unref(Nfts),
                pagination: unref(pagination),
                keyword: keyword.value,
                isShowSkeleton: isShowNftListSkeleton.value,
                classify: classify.value,
                classifyList: unref(classifyList),
                sorts: unref(sorts),
                sortValue: sortValue.value,
                onChangeSort: changeSort,
                onSearch: search,
                onChangeClassify: changeClassify,
                onGetMore: getMore
              }, null, 8, ["nfts", "pagination", "keyword", "isShowSkeleton", "classify", "classifyList", "sorts", "sortValue"])
            ])
          ]),
          createVNode(HomeNFTIntro)
        ])
      ], 64);
    };
  }
});
var Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ab6583f2"]]);
export { Home as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZS42MTQwODI4Mi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
