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
import { a7 as Decimal, U as store, a8 as confirmToSendMetaData, a9 as RemoveDeadlineTime, S as ElMessage, B as i18n } from "./index.1063289c.js";
function NftOffSale(nft, loading) {
  return new Promise((resolve, reject) => __async(this, null, function* () {
    var _a, _b;
    try {
      const params = {
        codehash: nft.codeHash,
        genesis: nft.genesis,
        tokenIndex: nft.tokenIndex,
        genesisTxid: nft.genesisTxId,
        satoshis: new Decimal(nft.amount).toNumber(),
        sensibleId: nft.sensibleId,
        sellTxId: nft.sellTxId,
        sellContractTxId: nft.sellContractTxId
      };
      const useAmountRes = yield (_a = store.state.sdk) == null ? void 0 : _a.nftCancel(__spreadValues({
        checkOnly: true
      }, params));
      if ((useAmountRes == null ? void 0 : useAmountRes.code) === 200) {
        const result = yield confirmToSendMetaData(useAmountRes.data.amount);
        if (result) {
          const res = yield (_b = store.state.sdk) == null ? void 0 : _b.nftCancel(params);
          if ((res == null ? void 0 : res.code) === 200) {
            yield RemoveDeadlineTime({
              genesis: nft.genesis,
              codeHash: nft.codeHash,
              tokenIndex: nft.tokenIndex,
              deadlineTime: nft.remainingTime
            });
            nft.putAway = false;
            ElMessage.success(i18n.global.t("offsale") + i18n.global.t("success"));
            resolve();
          }
        }
      }
    } catch (error) {
      if (loading)
        loading.close();
      reject(error);
    }
  }));
}
export { NftOffSale as N };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmU2FsZS44YTViM2UwYy5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
