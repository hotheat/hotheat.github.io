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
import { d as defineComponent, W as useRoute, V as useRouter, az as GetToken, aA as Mutation, aB as Action, k as useStore } from "./index.1063289c.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const code = route.query.code;
    const env = { "VITE_AppName": "NFTXSKY", "VITE_AppDescription": "Bitcoin(BSV)\u30D6\u30ED\u30C3\u30AF\u30C1\u30A7\u30FC\u30F3NFT\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0", "VITE_Hosts": "https://nftxsky.net", "VITE_RedirectPath": "/login", "VITE_WalletApi": "https://api.showmoney.app", "VITE_AppImgApi": "https://showman.metaidservices.com", "VITE_AuthUrl": "https://www.showmoney.app", "VITE_NftApi": "https://www.nftonshow.com/api/nftonshow", "VITE_ShowMan": "https://showman.showpay.io", "VITE_CreateNeedMc": "50000", "VITE_MetaIdTag": "metaid", "VITE_AppAddress": "1HBfgXq5dzaD8wDS8i8UE6Ne4WzU3frmz3", "VITE_ShowBotApi": "https://api.nftonshow.com/showbot", "VITE_ToolApi": "https://api.nftonshow.com/equity", "VITE_AggregationBaseUrl": "https://api.showmoney.app/aggregation", "VITE_AppId": "73f7900b-c766-48fb-a94d-b518a8109140", "VITE_AppSecret": "65f3e687-8015-487c-8eb9-3aaa480e7f5f", "VITE_BlockSiteMetaIdList": "3a972bd069d98bd228ca408ef890899165e326b446c3d76054bea8b6324ee312", "VITE_SiteConfigMetanetId": "fc0a92af9977f4b3bf82492508c18ab28f666922eb8ee52dcefd5b7f2a690f83", "BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true };
    const host = env.VITE_Hosts;
    const redirectPath = env.VITE_RedirectPath;
    if (code) {
      GetToken({
        code,
        grant_type: "authorization_code",
        redirect_uri: `${host}${redirectPath}`,
        scope: "app",
        client_id: env.VITE_AppId,
        client_secret: env.VITE_AppSecret
      }).then((res) => {
        if (res && res.access_token) {
          store.commit(Mutation.SETTOKEN, __spreadProps(__spreadValues({}, res), {
            expires_time: new Date().getTime() + res.expires_in - 60 * 1e3
          }));
          store.dispatch(Action.initSdk);
          router.replace("/");
        }
      });
    } else {
      router.replace("/");
    }
    return () => {
    };
  }
});
export { _sfc_main as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uNzdiNzA1MjYuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
