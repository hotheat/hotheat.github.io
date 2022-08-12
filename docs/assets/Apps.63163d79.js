import { _ as _export_sfc, e as defineComponent, u as useI18n, r as ref, v as reactive, aq as useRoute, t as useRouter, cZ as GetApps, g as openBlock, A as createElementBlock, k as createBaseVNode, D as toDisplayString, L as normalizeClass, m as createCommentVNode, F as Fragment, B as renderList, C as unref, q as pushScopeId, s as popScopeId, au as store, X as ElMessage, K as withModifiers } from './index.e0dfe776.js';

var _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAolJREFUSEullc9PE1EQx2des7Zv2+3GHzSmpp40GJpo9GQoSb0K6sFg5CRn5Sox3uCmkXgw8gdwMMZEPdjAWcDiyUQPhSjcGknFH9h9ZV9L6RuzS4ttpdtW9vh25rPfnXnzHYQWjxDUU4HSMEM1SIS9gBB1QwnWEekzIpsF5X9lGPh9PwQ2HxJRwCoU7wPQHUScQ8ZSslz8pKRcd2IZ51GuBc6RUleJaBAAp8OhwANELNazGsC2TSfKSr4BglXNB+O6rmdb/ZFzbtt2rFyBKUA4pTF+Tdfxay1+D1yFphHgSTikP/YCNr+zCvY4AYxpjCdqcBeczWZ5+PDRdwjwrFto7SNV+Ii1+XMgFotJF5wXchKAek1DH+lGaXNsXtgvAHDFNPgEOt1XIJc1H1zwqulCOrNIACqZiCdbfVxKeXJ7hz4w4H34WxRvM6SL4RAf9VI7v5SRRACXEnHuFWcV5AwivkerYKeQ+WYM3f/SK2EhvTxEtEPJgbNzXnHCLg2TqoxiXsgvJbU9FDHN1YPUt5a7kc+f9rNDs5gvyK0ta7MnGo3a3orb19jJz+VyQR4yv3UMnl/KkJOY7I//M631gv6ChVwtqe3LEdNca9O8jsB7pXCbRzBjGLpn8zpVLIR9gxBudXPdOlJcvW5LmBMiwsGXaTcgb9OZRURQyf72A2JDpa9+pM+Yhn7zIFfOHWmGK2aQTzSb0PNwSJ/6H/i+JrTrrY4XF9MI9LRb+C4UxzQWaLTNmsI6o1/TfHC3ndFXTeeRp9HX4K43Hzl2DxSNuauJKKU09jHs97urySqVoqyszhPiFXc1MZy2fv146Hhwy9XUMEFCRIJMu06khlot0y1Vfn3cMDb268kfZttpuV/tQMQAAAAASUVORK5CYII=";

var _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAABJVJREFUSEuNls9vFVUUxz9n3s+2vFB4SPtEkYTAa9WF8QcIJm50AcZEEoIxiv4LkBjj1i2uWLhxW3aSujCGEtckpEgTEwO8YjCaYloaftTS11+vb445987Mm3l9Ld5kMjN37tzv+X7Pj3uEbYZOV0eg8D7IUaCOyBCqgyj97jdhGZEFVB8A04Q6SXHjFzn48O5W20r3B/2GgE+GTyPyFfAmyqY1mX+k+7MqcBPVb6nPjYtg78nIrNY7lSrBjjGUD7ZjvuW3zeBXCJe+kNGnj+J/EkCdruyBHddQ6smGGdu2MSFt9mbQBv3Nd+TFxcfeC9HQ6doEygn32g0Uv9vq9POWWtnOaSv0qtRnTyaA2hg+A/LDJjC3uWw2INEnQs8w7KGEgWv4sYzMXXZLtTF8A+StxPo0kD33ktb+jIGkB3BGP1urN6Q+d1T0bnUULdwijDRwAClWoS0uQ+45CPpA2xA+gfZjD5i+Ysu6A9fTUqT1smhj6BwaXOzIGYEZkIFLBYqHIbcHaEP7CUgI7QVo/WWWp5hGAZAw786H8LwBXkKDs27zmJk9hwKyE8qvQuElKI/C+gysNTywbbp627NNS9oNljFIL4neSfnPQGKwYBD6Xgex+2vmdFgxgH87rFr/wOotKOyF4j7QNVi/B7rakTpIsTY/6p3afZR9CTuTMqhC/3GgAFqC3G4Im9Be6oCZ5WszsDwF+y9Aab/XL1yBxauwMA5By88Z68AF1n3R27UlYMABOr/1wc4PgXJK4kxOdaxfvA5rf0L1NAy+l6pfCqsNePgdyEa03gE2TdINNMg5MLvKb0D/kaw/k/hPhf/6PDz+CcoHYegzr0YmHxUWLsPqVIehaNsDhpJzDNsCOz+C0uGI7RZ1u/UAHo5DsQbVUxDks9keB9Hq7/D0ZzA/mqQO8HatiUp/Eiw7TsDAsWwuprdbn4X5MQgGYM8pkHy2MLi8jFJl5TdYue7BPKBJWpsh5IXEh7l9MPQlqAsvP1w+Amv3Ye57CJehcgzKB6LSZylkklqUr/s8tWtxAvRJxNBtNCPaGJ4klCMu7+KUGHgXdp8FclmpHv0ICxN+rvI25KseMLDi8LyvQpYq2oSVKWjPRswSSSdN0jHg80xaGHixDtVPoVwHidianH+f94A2XxgG8lA8AH2HoDXvo3P5JoQPUmCRzHDJAM8hXEzYxcU6rjrBLihF0lkKWElzuVWG8ghQgkIN8rtgYx6aN6FtYBEru8c+VSttVrzD4i1C0yZVR2PfGXCv4TKkBPkhyFV8JXJyLqbSIC7uFjRGqTXq63i6vLmJ1GnR6/DtNia9JmaTnCJxcddfZXTuSHwenkGjAzjebLuDNwZIzslUK9B9XHXOzM4B7DAawxOo+BYjPXr2Ndt0Ac6/XQey6FUZmeu0GA7QmigduAbim6hnNVCbmr/URLbETdNePi6vdDVR3peVKjIwBrJ1m/gsQ2J1fMW5Qtjs3SZmVLxbO43y9f9qhOMqFN+tlbBGOJALcnh2vNtDW8S8X6Z/7D3IRnCSoLvV106rr7IA1urLNKqT5MMJOTR/r3cuwX/d3erSHKtK3QAAAABJRU5ErkJggg==";

var _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAAAXNSR0IArs4c6QAAAH9JREFUKFOt0TEKAkEMBdCXK3gCwd6TuL14APVAulgIHsJKG/FMgoJNZGS3nFXBlJP/IMmESmXmCTcsIuLZx2IALLHDEfOIeJRsFZRmZq7R4oJZQYOgQytscX2jzDxgXBute59ihHMBe0y+Bh+C/R6bbqTml6WbiLj/76y1j3sBArE3hOaZvAkAAAAASUVORK5CYII=";

var Apps_scss_vue_type_style_index_0_src_c88ec04c_scoped_true_lang = '';

const _withScopeId = (n) => (pushScopeId("data-v-c88ec04c"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "apps flex flex-v" };
const _hoisted_2 = { class: "top" };
const _hoisted_3 = { class: "header flex flex-align-center flex-pack-center" };
const _hoisted_4 = { class: "tabs flex flex-align-center flex-pack-center" };
const _hoisted_5 = { class: "flex1 tabs-item-warp" };
const _hoisted_6 = { class: "flex1 tabs-item-warp" };
const _hoisted_7 = { class: "app-list flex1" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = ["src"];
const _hoisted_10 = { class: "right flex1 flex flex-align-center" };
const _hoisted_11 = { class: "cont flex1" };
const _hoisted_12 = { class: "title" };
const _hoisted_13 = { class: "drsc" };
const _hoisted_14 = ["onClick"];
const _hoisted_15 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "icon",
  src: _imports_1
}, null, -1));
const _hoisted_16 = { class: "flex1" };
const _hoisted_17 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "right",
  src: _imports_2
}, null, -1));
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const i18n = useI18n();
    const certificationStage = ref("0");
    const apps = reactive([]);
    const route = useRoute();
    const router = useRouter();
    function getApps() {
      return new Promise(async (resolve) => {
        const res = await GetApps({ certificationStage: certificationStage.value });
        if (res.code === 200) {
          apps.length = 0;
          apps.push(...res.result.apps);
        }
      });
    }
    function changeCert(type) {
      if (certificationStage.value === type)
        return;
      certificationStage.value = type;
      getApps();
    }
    function open(url) {
      if (store.state.isIOS) {
        ElMessage.warning(i18n.t("iosNotToLink"));
        return;
      }
      window.open(url, "blank");
    }
    function toAppDetail(tag) {
      router.push({
        name: "appDetail",
        params: {
          isCert: certificationStage.value,
          tag
        }
      });
    }
    if (route.query.lang && typeof route.query.lang === "string") {
      i18n.locale.value = route.query.lang;
    }
    getApps();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, toDisplayString(_ctx.$t("appsTitle")), 1),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("a", {
                class: normalizeClass({ active: certificationStage.value === "0" }),
                onClick: _cache[0] || (_cache[0] = ($event) => changeCert("0"))
              }, toDisplayString(_ctx.$t("iscertBlock")), 3)
            ]),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("a", {
                class: normalizeClass({ active: certificationStage.value === "1" }),
                onClick: _cache[1] || (_cache[1] = ($event) => changeCert("1"))
              }, toDisplayString(_ctx.$t("uncertBlock")), 3)
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_7, [
          createCommentVNode(" \u63A8\u8350\u6316\u77FF "),
          createCommentVNode(` <a @click="open('https://www.show.sv/')" class="app-item flex flex-align-center">
        <img class="icon" src="@/assets/images/app_icon_showcoin.png" />
        <div class="right flex1 flex flex-align-center">
          <div class="cont flex1">
            <div class="title">
              {{ $t('recommendedMining') }} <img src="@/assets/images/icon_fire.png" />
            </div>
            <div class="drsc">{{ $t('recommendedMiningDrsc') }}</div>
          </div>
        </div>
      </a> `),
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(apps), (app) => {
            return openBlock(), createElementBlock("a", {
              onClick: ($event) => open(app.url),
              class: "app-item flex flex-align-center",
              key: app.appTag
            }, [
              createBaseVNode("img", {
                class: "icon",
                src: app.avatarUrl
              }, null, 8, _hoisted_9),
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("div", _hoisted_12, toDisplayString(app[`name${unref(i18n).locale.value === "zh" ? "ZH" : "EN"}`]), 1),
                  createBaseVNode("div", _hoisted_13, toDisplayString(app[`content${unref(i18n).locale.value === "zh" ? "ZH" : "EN"}`]), 1)
                ]),
                createBaseVNode("img", {
                  class: "info",
                  src: _imports_0,
                  onClick: withModifiers(($event) => toAppDetail(app.appTag), ["stop"])
                }, null, 8, _hoisted_14)
              ])
            ], 8, _hoisted_8);
          }), 128))
        ]),
        createBaseVNode("div", {
          class: "app-dowmload flex flex-align-center",
          onClick: _cache[2] || (_cache[2] = ($event) => open("https://www.show.sv/"))
        }, [
          _hoisted_15,
          createBaseVNode("div", _hoisted_16, toDisplayString(_ctx.$t("appdownloadTips")), 1),
          _hoisted_17
        ])
      ]);
    };
  }
});
var Apps = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c88ec04c"], ["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/app/Apps.vue"]]);

export { Apps as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwcy42MzE2M2Q3OS5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
