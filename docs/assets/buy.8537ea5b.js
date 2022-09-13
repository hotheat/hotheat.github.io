var __defProp = Object.defineProperty;
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
import { T as checkSdkStatus, U as store, S as ElMessage, B as i18n, a7 as Decimal, a3 as ElMessageBox } from "./index.1063289c.js";
function buy(nft) {
  return __async(this, null, function* () {
    return new Promise((resolve, reject) => __async(this, null, function* () {
      if (!nft.putAway) {
        reject();
      } else {
        checkSdkStatus().then(() => __async(this, null, function* () {
          var _a, _b;
          if (store.state.userInfo.metaId === nft.ownerMetaId) {
            ElMessage.error(i18n.global.t("notCanBuySelf"));
            reject();
          } else {
            if (!nft.sellTxId || nft.sellTxId && nft.sellTxId === "") {
              ElMessage.error(i18n.global.t("buySellTxIdFail"));
              reject();
            } else {
              const params = {
                codehash: nft.codeHash,
                genesis: nft.genesis,
                tokenIndex: nft.tokenIndex,
                genesisTxid: nft.genesisTxId,
                sensibleId: nft.sensibleId,
                sellTxId: nft.sellTxId,
                sellContractTxId: nft.sellContractTxId,
                amount: new Decimal(nft.amount).toNumber()
              };
              const useAmountRes = yield (_a = store.state.sdk) == null ? void 0 : _a.nftBuy(__spreadValues({
                checkOnly: true
              }, params)).catch(() => {
                reject();
              });
              if ((useAmountRes == null ? void 0 : useAmountRes.code) === 200) {
                const useAmount = useAmountRes.data.amount + nft.amount;
                const userBalanceRes = yield (_b = store.state.sdk) == null ? void 0 : _b.getBalance();
                if (userBalanceRes && userBalanceRes.code === 200) {
                  if (userBalanceRes.data.satoshis > useAmount) {
                    ElMessageBox.confirm(`${i18n.global.t("useAmountTips")}: ${useAmount} SATS`, i18n.global.t("niceWarning"), {
                      confirmButtonText: i18n.global.t("confirm"),
                      cancelButtonText: i18n.global.t("cancel"),
                      closeOnClickModal: false
                    }).then(() => __async(this, null, function* () {
                      var _a2;
                      const res = yield (_a2 = store.state.sdk) == null ? void 0 : _a2.nftBuy(params).catch(() => reject());
                      if ((res == null ? void 0 : res.code) === 200) {
                        resolve();
                      } else {
                        reject(res);
                      }
                    })).catch(() => reject());
                  } else {
                    ElMessageBox.alert(`
                            <p>${i18n.global.t("useAmountTips")}: ${useAmount} SATS</p>
                            <p>${i18n.global.t("insufficientBalance")}</p>
                          `, {
                      confirmButtonText: i18n.global.t("confirm"),
                      dangerouslyUseHTMLString: true
                    });
                    reject();
                  }
                }
              } else {
                reject(useAmountRes);
              }
            }
          }
        })).catch(() => {
          reject();
        });
      }
    }));
  });
}
export { buy as b };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV5Ljg1MzdlYTViLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
