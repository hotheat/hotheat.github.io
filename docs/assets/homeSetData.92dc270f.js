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
import { s as setDataStrclassify } from "./index.1063289c.js";
function SetHomeDatas(list) {
  return new Promise((resolve) => {
    const results = [];
    list.forEach((item) => {
      if (item.nftIssueMetaId.slice(0, 6) !== "0064d4") {
        if (item.nftIssuer.toLowerCase().indexOf("showpayteam") === -1) {
          const data = item.nftDataStr ? JSON.parse(item.nftDataStr) : null;
          const classify = setDataStrclassify(data);
          results.push(__spreadValues({
            ownerAvatarType: item.nftOwnerAvatarType,
            issueUserAvatarType: item.nftIssueAvatarType,
            name: item.nftName ? item.nftName : "--",
            amount: item.nftPrice,
            foundryName: item.nftIssuer,
            classify,
            head: "",
            tokenId: item.nftGenesis + item.nftTokenIndex,
            coverUrl: item.nftIcon,
            putAway: item.nftIsReady,
            metaId: item.nftIssueMetaId,
            productName: item.nftName,
            deadlineTime: 0,
            genesis: item.nftGenesis,
            tokenIndex: item.nftTokenIndex,
            codehash: item.nftCodehash,
            nftCertificationType: item.nftCertificationType,
            nftGenesisCertificationType: item.nftGenesisCertificationType
          }, item));
        }
      }
    });
    resolve(results);
  });
}
export { SetHomeDatas as S };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVNldERhdGEuOTJkYzI3MGYuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
