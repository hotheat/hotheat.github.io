import { _ as _export_sfc, e as defineComponent, aq as useRoute, t as useRouter, c3 as GetToken, M as Mutation, c4 as Action, E as useStore } from './index.3c02df72.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();
    const code = route.query.code;
    const env = {"VITE_AppName":"NFTOnShow","VITE_AppDescription":"元网首个NFT市场","VITE_DialogTypeMetafile":"metafile","VITE_DialogTypeSignature":"signature","VITE_ShowTalk":"https://www.showtalk.app","VITE_BlockSiteMetaIdList":"3a972bd069d98bd228ca408ef890899165e326b446c3d76054bea8b6324ee312","VITE_envCondition":"0","VITE_Platform":"2.5","VITE_Royalty":"2.5","VITE_FirstPlatform":"6","VITE_FirstRoyalty":"0","VITE_MinAmount":"546","VITE_Hosts":"https://beta.xskynft.shop","VITE_AppId":"bd685988-223d-4ffa-a341-0362ed8a70e2","VITE_AppSecret":"0eba5572-bcca-4148-8699-76678b1fea06","VITE_RedirectPath":"/login","VITE_WalletApi":"https://api.showmoney.app","VITE_AppImgApi":"https://showman.metaidservices.com","VITE_AuthUrl":"https://www.showmoney.app","VITE_NftApi":"https://www.nftonshow.com/api/nftonshow","VITE_CreateNeedMc":"50000","VITE_MetaIdTag":"metaid","VITE_AppAddress":"176C9RPWDggnvdVcWG3wrZEJcm1bHTcKM5","VITE_ShowBotApi":"https://api.nftonshow.com/showbot","VITE_ToolApi":"https://api.nftonshow.com/equity","VITE_AggregationBaseUrl":"https://api.showmoney.app/aggregation","VITE_PayFollowAmount":"2000","VITE_LegalApi":"https://www.showpay.top","VITE_MetabotAvatarCompose":"https://www.metabot.world/remint/avatar","BASE_URL":"/","MODE":"dev","DEV":true,"PROD":false};
    const host = env.VITE_Hosts ;
    const redirectPath = env.VITE_RedirectPath ;
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
          store.commit(Mutation.SETTOKEN, {
            ...res,
            expires_time: new Date().getTime() + res.expires_in - 60 * 1e3
          });
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
var Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/hotheat/Desktop/nft/nft-show/src/views/Login.vue"]]);

export { Login as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uZjJmMjgwZGMuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
