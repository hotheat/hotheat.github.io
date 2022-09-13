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
import { aa as NFTApiGetNFTDetail, ab as GetDeadlineTime, s as setDataStrclassify } from "./index.1063289c.js";
const elfDrsc = `\u300A\u5143\u7075\u5927\u9646\u300B\u6E38\u620F\u662FMetaSoft \u5143\u8F6F\u7B2C\u4E00\u4E2A\u62D3\u8352\u9879\u76EE\uFF0C\u6709\u8D23\u4EFB\u786E\u4FDD\u6E38\u620F\u6700\u7EC8\u63A8\u51FA\uFF0C\u4F46\u4E8B\u5B9E\u4E0A\u4E5F\u5B58\u5728\u5404\u79CD\u4E0D\u786E\u5B9A\u6027\uFF0C\u5DE8\u5927\u7684\u673A\u4F1A\u4E0E\u98CE\u9669\u5E76\u5B58\u3002\u82E5\u4EE5\u6E38\u620F\u5229\u6DA6\u5206\u914D\u6743NFT\u5361\uFF08\u9650\u533A\u5757\u94FE\u670D\u52A1\u5668\uFF09\u7684\u65B9\u5F0F\u53C2\u4E0E\u300A\u5143\u7075\u5927\u9646\u300B\uFF0C\u662F\u673A\u4F1A\u4EA6\u6709\u98CE\u9669\u3002

MetaSoft \u5143\u8F6F\u8054\u5408\u521B\u529E\u4EBA\u76EE\u524D\u5408\u8BA1\u5171\u6301\u670975%\u300A\u5143\u7075\u5927\u9646\u300B\u6E38\u620F\u76F8\u5173\u6240\u6709\u6743\u6743\u76CA\uFF0CMetaSoft \u5143\u8F6F\u5B50\u5C5E\u6E38\u620F\u56E2\u961F\u6301\u670925%\u7684\u6E38\u620F\u76F8\u5173\u6240\u6709\u6743\u6743\u76CA\u3002

\u5143\u8F6F\u552E\u5356\u300A\u5143\u7075\u5927\u9646\u300B\u6E38\u620F\uFF08\u9650\u533A\u5757\u94FE\u670D\u52A1\u5668\uFF094%\u7684\u5229\u6DA6\u5206\u914D\u6743\uFF0C\u603B\u8BA1400\u5F20NFT\u5361\u3002\u4E00\u7ECF\u552E\u51FA\uFF0C\u5143\u8F6F\u4F1A\u786E\u4FDD\u5143\u8F6F\u8054\u5408\u521B\u529E\u4EBA\u6240\u6301\u6709\u7684\u300A\u5143\u7075\u5927\u9646\u300B\u6E38\u620F\u76F8\u5173\u6240\u6709\u6743\u6743\u76CA\u4E2D\u7684\u6700\u5C114%\u662F\u56FA\u5B9A\u9501\u4ED3\u7531\u5143\u8F6F\u8054\u5408\u521B\u529E\u4EBA\u6240\u6301\u6709\uFF0C\u4E0D\u4F1A\u8F6C\u8BA9\u81F3\u975E\u5143\u8F6F\u8054\u5408\u521B\u529E\u4EBA\u6240\u63A7\u5236\u7684\u5B9E\u4F53\u4E0A\u3002

\u672C\u6B21\u6240\u552E\u5356\u76844% \u6E38\u620F\u5229\u6DA6\u5206\u914D\u6743\u3010\u9650\u533A\u5757\u94FE\u670D\u52A1\u5668\u3011\u7684\u6743\u76CA\uFF0C\u4E0E\u5176\u4ED6\u5DF2\u51FA\u552E \uFF08\u5DF2\u88AB\u5185\u90E8\u8BA4\u8D2D\uFF09\u7684NFT\u5361\u5229\u6DA6\u5206\u914D\u6743\u5177\u6709\u540C\u7B49\u6743\u76CA\uFF0C\u6B64NFT\u5361\u4E0E\u672A\u51FA\u552E\u3001\u672A\u4E0A\u94FE\u6210\u4E3ANFT\u5361\u7684\u4F59\u4E0B\u6E38\u620F\u76F8\u5173\u6240\u6709\u6743\u6743\u76CA\u662F\u4E0D\u7B49\u540C\u7684\uFF0C\u6240\u6709\u672A\u51FA\u552E\u3001\u672A\u4E0A\u94FE\u6210\u4E3ANFT\u5361\u7684\u4F59\u4E0B\u6E38\u620F\u76F8\u5173\u6240\u6709\u6743\u6743\u76CA\u4E0D\u53D7\u4EE5\u4E0B\u4EFB\u4F55\u6761\u6B3E\u9650\u5236\u3002

\u6709\u5174\u8DA3\u60F3\u8D2D\u4E70\u6216\u6301\u6709\u300A\u5143\u7075\u5927\u9646\u300B\u5229\u6DA6\u5206\u914D\u6743NFT\u5361\u7684\u670B\u53CB\uFF0C\u5728\u8D2D\u4E70\u524D\uFF0C\u8BF7\u52A1\u5FC5\u8BA4\u771F\u4ED4\u7EC6\u9605\u8BFB\u4EE5\u4E0B\u6761\u6B3E\u53CA\u6CE8\u610F\u4E8B\u9879\uFF08\u4EE5\u4E0B\u6587\u4E2DNFT\u5373\u6307\u300A\u5143\u7075\u5927\u9646\u300B\u5229\u6DA6\u5206\u914D\u6743NFT\u5361\uFF0C\u6E38\u620F\u5373\u6307\u300A\u5143\u7075\u5927\u9646\u300B\u6E38\u620F\uFF09

\u6301\u6709NFT\u8005\u6216\u8D2D\u4E70NFT\u8005\uFF0C\u7B49\u540C\u4E8E\u8868\u793A\u7406\u89E3\u548C\u63A5\u53D7\u672C\u6587\u6240\u6709\u6761\u6B3E\u5185\u5BB9\u548C\u58F0\u660E\u3002

1. \u5173\u4E8E\u6B64NFT\u5361\u6240\u4EE3\u8868\u7684\u5229\u6DA6
\u6BCF\u5F20NFT\u5361\u4EC5\u4EE3\u88680.01%\u300A\u5143\u7075\u5927\u9646\u300B\u6E38\u620F\uFF08\u9650\u533A\u5757\u94FE\u670D\u52A1\u5668\uFF09\u7684\u5229\u6DA6\u5206\u914D\u6743\u3002\u5E76\u4E0D\u4EE3\u8868\u6709\u4EFB\u4F55\u5176\u4ED6\u6E38\u620F\u76F8\u5173\u6240\u6709\u6743\u6743\u76CA\uFF0C\u53CA\u65E5\u540E\u4E5F\u6CA1\u6709\u4EFB\u4F55\u6E38\u620F\u653F\u7B56\u3001\u8425\u8FD0\u65B9\u5411\u7B49\u7B49\u4E00\u5207\u7684\u6295\u7968\u51B3\u7B56\u6743\u5229\u3002

NFT\u5361\u7684\u5229\u6DA6\u5206\u914D\u6743\uFF0C\u8FD9\u91CC\u4EE3\u8868\u8BE5\u6708\u6216\u8BE5\u5B63\u6263\u9664\u8FD0\u8425\u6210\u672C\u540E\u7684\u5229\u6DA6\uFF0C\u901A\u8FC7NFT\u5361\u53D1\u653E\u7684\u5229\u6DA6\u3002

\uFF081\uFF09\u5143\u8F6F\u4E0D\u4F1A\u5BF9\u6301\u6709\u4F4E\u4E8E15%\u5229\u6DA6\u5206\u914D\u6743\u7684NFT\u5361\u6301\u6709\u8005\uFF0C\u6216\u5B9E\u4F53\u516C\u5E03\u6E38\u620F\u8FD0\u8425\u7684\u4E00\u5207\u8D22\u52A1\u72B6\u51B5\u3002\u5EFA\u8BAE\u6709\u5174\u8DA3\u5927\u91CF\u6536\u8D2D\u300A\u5143\u7075\u5927\u9646\u300B\u5229\u6DA6\u5206\u914D\u6743NFT\u5361\u7684\u5B9E\u4F53\uFF0C\u76F4\u63A5\u4E0E\u5143\u8F6F\u8054\u7EDC\uFF0C\u8C28\u614E\u8003\u8651\u98CE\u9669\u540E\u624D\u8FDB\u884C\u76F8\u5173\u7684\u6536\u8D2D\u6D3B\u52A8\u3002

\uFF082\uFF09\u6E38\u620F\u3010\u73B0\u5B9E\u670D\u52A1\u5668\u3011\u53CA\u6E38\u620F\u5916\u56F4\u7684\u4E00\u5207\u5229\u6DA6\u5982\u5E7F\u544A\u3001\u52A8\u753B\u7B49\u7B49\u5982\u4F55\u5206\u914D\u7ED9NFT \u5361\u6301\u6709\u8005\uFF0C\u76EE\u524D\u5B58\u5728\u64CD\u4F5C\u56F0\u96BE\u53CA\u6F5C\u5728\u7684\u653F\u7B56\u98CE\u9669\uFF0C\u56E0\u6B64\uFF0C\u300A\u5143\u7075\u5927\u9646\u300B\u6E38\u620F\u4E00\u5207 \u3010\u73B0\u5B9E\u670D\u76F8\u5173\u670D\u52A1\u5668\u3011\u53CA\u6E38\u620F\u5916\u56F4\u7684\u4E00\u5207\u5229\u6DA6\uFF0C\u5982\u8DE8\u94FE\u670D\u52A1\u8D39\u3001\u5E7F\u544A\u3001\u52A8\u753B\u3001\u516C\u4ED4\u7B49\u7B49\uFF0C\u662F\u4E0D\u5305\u62EC\u5728\u6B64NFT\u5361\u6743\u76CA\u5185\u7684\u3002

\uFF083\uFF09\u5143\u8F6F\u4E0D\u4FDD\u8BC1\u4F1A\u53D1\u653E\u4EFB\u4F55\u3010\u975E\u533A\u5757\u94FE\u670D\u52A1\u5668\u3011\u76F8\u5173\u7684\u6E38\u620F\u5229\u6DA6\uFF0C\u5982\u8DE8\u94FE\u670D\u52A1\u8D39\u3001\u5E7F\u544A\u3001\u52A8\u753B \u3001\u73B0\u5B9E\u670D\u670D\u52A1\u5668\u6240\u4EA7\u751F\u7684\u5229\u6DA6\u7ED9 NFT\u5361\u6301\u6709\u8005\u3002

\uFF084\uFF09\u5143\u8F6F\u4F1A\u5C06\u975E\u3010\u975E\u533A\u5757\u94FE\u670D\u52A1\u5668\u3011\u7684\u6E38\u620F\u76F8\u5173\u5229\u6DA6\uFF0C\u5982\uFF1A\u300A\u5143\u7075\u5927\u9646\u300B\u6E38\u620F \u3010\u73B0\u5B9E\u670D\u52A1\u5668\u3011\u53CA\u6E38\u620F\u5916\u56F4\u7684\u4E00\u5207\u5229\u6DA6\u5982\u5E7F\u544A\u3001\u52A8\u753B\u3001\u516C\u4ED4\u7B49\u90E8\u5206\u7528\u4F5C\u6148\u5584\u6216\u300A\u5143\u7075\u5927\u9646\u300B\u6E38\u620F\u7684\u540E\u7EED\u6E38\u620F\u5F00\u53D1\u7528\u9014\u3002

2. \u5173\u4E8ENFT\u5361\u4EF7\u683C
\u6BCF\u5F20NFT\u5361\u552E\u4EF7\u5927\u7EA6160USDT\u3002\u76EE\u524D\uFF0C\u7531\u4E8ENFTXSKY\u6CA1\u6709\u6536\u53D6USDT\u529F\u80FD\uFF0C\u6240\u4EE5MetaSoft \u5143\u8F6F\u6536\u53D6\u7B49\u503CFT\uFF08BSV\uFF09\u3002

3. \u5173\u4E8E\u5E02\u573A\u4EF7\u683C\u6CE2\u52A8 
NFT\u5361\u5728\u552E\u5356\u671F\u95F4\u53CA\u4E00\u7ECF\u552E\u51FA\uFF0C\u56E0\u5E02\u573A\u4EF7\u683C\u6CE2\u52A8\u6240\u4EA7\u751F\u7684FT\uFF08BSV\uFF09\u4E0A\u4E0B\u6D6E\u52A8\uFF0CMetaSoft \u5143\u8F6F\u4E0D\u4F1A\u9000\u8FD8\u591A\u6536\u53D6\u7684FT\uFF08BSV\uFF09\uFF0C\u4EA6\u4E0D\u4F1A\u7D22\u53D6\u635F\u5931\u7684FT\uFF08BSV\uFF09\u3002MetaSoft \u5143\u8F6F\u5728NFT\u5361\u552E\u51FA\u540E\u6240\u6536\u53D6\u7684FT\uFF08BSV\uFF09\uFF0C\u4F1A\u7ACB\u5373\u8F6C\u6362\u6210USDT \uFF0C\u4EE5\u4F9B\u6E38\u620F\u8FD0\u8425\u4F7F\u7528\u3002

4. \u5173\u4E8ENFT\u5361\u5229\u6DA6\u7684\u53D1\u653E\u65F6\u95F4
NFT\u5361\u5229\u6DA6\u53D1\u653E\u65F6\u95F4\uFF0C\u521D\u5B9A\u6BCF\u6708\u6216\u6BCF\u5B63\u53D1\u653E\u5229\u6DA6\uFF0C MetaSoft \u5143\u8F6F\u4F1A\u6839\u636E\u5B9E\u9645\u8FD0\u8425\u60C5\u51B5\u518D\u505A\u8C03\u6574\u5229\u6DA6\u53D1\u653E\u65F6\u95F4\u3002

MetaSoft \u5143\u8F6F\u4E0D\u4FDD\u8BC1\u6E38\u620F\u6BCF\u6708\u6216\u6BCF\u5B63\u7686\u6709\u5229\u6DA6\uFF0C\u751A\u81F3\u53EF\u80FD\u957F\u671F\u662F\u4E8F\u635F\uFF0C \u5728\u6CA1\u6709\u5229\u6DA6\u7684\u60C5\u51B5\u4E0B\u5F53\u6708\u6216\u5F53\u5B63\u4E0D\u4F1A\u53D1\u653E\u5229\u6DA6\u3002

5. \u5173\u4E8ENFT\u5361\u5229\u6DA6\u7684\u53D1\u653E\u65B9\u5F0F
USDT\u3001BSV\u6216\u5143\u7075\u5E01\u4EFB\u610F\u540C\u7B49\u4EF7\u503C\u7684\u8F7D\u4F53\uFF0C\u6BCF\u6B21\u53EF\u80FD\u4F1A\u6709\u6240\u4E0D\u540C\u3002\u5143\u8F6F\u4FDD\u7559\u53D1\u653E\u4F55\u79CD\u5229\u6DA6\u8F7D\u4F53\u7684\u6700\u7EC8\u51B3\u5B9A\u6743\u3002

6. \u5173\u4E8E\u6E38\u620F\u4E0A\u7EBF\u65F6\u95F4
\u9884\u671F\u4E0A\u7EBF\u65F6\u95F4\uFF1A2022\u5E742~3\u6708\u3002\u82E5\u9047\u5E02\u573A\u53D8\u5316\uFF08\u5982\u718A\u5E02\u6765\u4E34\uFF09\uFF0CMetaSoft \u5143\u8F6F\u4F1A\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u63D0\u524D\u6216\u63A8\u8FDF\u4E0A\u7EBF\u3002

7. \u5173\u4E8ENFT\u5361\u672A\u6765\u7684\u5229\u6DA6\u548C\u4E8F\u635F\uFF0C\u53CA\u8D2D\u4E70\u8D44\u683C
\u8BF7\u8C28\u614E\u4E09\u601D\uFF0C \u6CE8\u610F\u6295\u8D44\u98CE\u9669\u3002

MetaSoft \u5143\u8F6F\u4E0D\u4F1A\u4E3A\u8D2D\u4E70\u300A\u5143\u7075\u5927\u9646\u300B\u5229\u6DA6\u5206\u914D\u6743NFT\u5361\u5BFC\u81F4\u7684\u4EFB\u4F55\u4E8F\u635F\u6216\u4EF7\u503C\u5F52\u96F6\u800C\u8D1F\u8D23\u3002\u4EC5\u8BF7\u80FD\u4E3A\u81EA\u5DF1\u7684\u6295\u8D44\u8D1F\u8D23\u7684\u670B\u53CB\u8D2D\u4E70\u3002

\u6301\u6709\u6B64NFT\u5361\u4E0D\u4EE3\u8868\u6BCF\u6708\u6216\u6BCF\u5B63\u7686\u6709\u5229\u6DA6\uFF0C\u5982\u679C\u6263\u9664\u8FD0\u8425\u6210\u672C\u540E\u5F53\u6708\u6216\u5F53\u5B63\u6CA1\u6709\u5229\u6DA6\u53D1\u653E\uFF0C\u4F1A\u4F7F\u670B\u53CB\u60A8\u611F\u5230\u6709\u4EFB\u4F55\u4E0D\u9002\u6216\u4F1A\u51FA\u73B0\u88AB\u9A97\u7684\u611F\u89C9\uFF0C\u8BF7\u4E0D\u8981\u8D2D\u4E70\u300A\u5143\u7075\u5927\u9646\u300B \u7684\u6E38\u620F\u5229\u6DA6\u5206\u914D\u6743NFT\uFF0C\u8C22\u8C22\uFF01

\u5047\u82E5\u8D2D\u4E70\u6B64NFT\u5361\u6700\u7EC8\u6709\u53EF\u80FD\u4F7F\u60A8\u4E8F\u635F\uFF0C\u6216\u4EF7\u503C\u5F52\u96F6\uFF0C\u53C8\u6216\u662F\u4EFB\u4F55\u4E8F\u635F\uFF0C\u4EF7\u503C\u5F52\u96F6\u90FD\u4F1A\u4F7F\u670B\u53CB\u60A8\u611F\u5230\u6709\u4EFB\u4F55\u4E0D\u9002\uFF0C\u6216\u4F1A\u611F\u5230\u88AB\u9A97\uFF0C\u8BF7\u4E0D\u8981\u8D2D\u4E70 \u300A\u5143\u7075\u5927\u9646\u300B\u7684\u6E38\u620F\u5229\u6DA6\u5206\u914D\u6743NFT\u5361\uFF0C \u8C22\u8C22\uFF01

8. \u5173\u4E8ENFT\u5361\u7684\u5B58\u653E
\u5229\u6DA6\u5206\u914D\u6743NFT\u5361\u4EC5\u652F\u6301MetaID\uFF08BSV\u94FE\uFF09\u8EAB\u4EFD\u8BA4\u8BC1\u6280\u672F\u7684BSV\u94B1\u5305\u4E2D\u4E92\u76F8\u4F20\u9001\u53CA\u4FDD\u5B58\u3002\u5143\u8F6F\u4E0D\u8D1F\u8D23\u4EFB\u4F55\u5C06 NFT\u5361\u5BC4\u5F80\u4E0D\u652F\u6301 MetaID \u8EAB\u4EFD\u8BA4\u8BC1\u6280\u672F\u7684BSV\u94B1\u5305\u6240\u5BFC\u81F4\u7684\u635F\u5931\u3002\u5BC4\u5F80\u975EMetaID\u8EAB\u4EFD\u8BA4\u8BC1\u6280\u672F\u7684\u94B1\u5305\u5B58\u5728NFT\u5361\u7684\u9057\u5931\u98CE\u9669\uFF0C\u5143\u8F6F\u4E0D\u4F1A\u8D1F\u8D23\u4E3A\u6301\u5361\u8005\u53D6\u56DENFT\u5361\uFF0C\u4EA6\u4E0D\u4F1A\u4E3A\u6B64\u4F5C\u51FA\u4EFB\u4F55\u8D54\u507F\uFF0C\u8BF7\u8C28\u614E\u5B58\u653E\u5229\u6DA6\u5206\u914D\u6743NFT\u5361\u3002

9. \u56E0\u4E0D\u53EF\u6297\u529B\uFF0C\u5173\u4E8E\u6E38\u620F\u6682\u505C\u6216\u505C\u6B62\u8FD0\u8425
\u56E0\u9047\u4EFB\u4F55\u4E0D\u53EF\u6297\u529B\u7684\u56E0\u7D20\uFF08\u81EA\u7136\u707E\u5BB3\u3001\u653F\u7B56\u53D8\u5316\u3001\u957F\u671F\u4E8F\u635F\u7B49\uFF09\u5BFC\u81F4\u6E38\u620F\u65E0\u6CD5\u7EE7\u7EED\u8425\u8FD0\uFF0CMetaSoft \u5143\u8F6F\u5BF9\u6E38\u620F\u8C03\u6574\u65B9\u5411\u3001\u6682\u505C\u6216\u505C\u6B62\u7EE7\u7EED\u8FD0\u8425\u4FDD\u7559\u4E00\u5207\u6700\u7EC8\u51B3\u5B9A\u6743\uFF0C\u4E0D\u4F1A\u56E0\u8C03\u6574\u3001\u6682\u505C\u6216\u505C\u6B62\u6E38\u620F\u7684\u8FD0\u8425\u5BF9\u8D2D\u4E70\u6216\u6301\u6709NFT\u5361\u8005\u4F5C\u51FA\u4EFB\u4F55\u8D54\u507F\u3002

\u6700\u540E\u7279\u522B\u58F0\u660E\uFF1A
MetaSoft \u5143\u8F6F\u6709\u8D23\u4EFB\u786E\u4FDD\u6E38\u620F\u6700\u7EC8\u4F1A\u63A8\u51FA\uFF0C\u4F46\u4E0D\u786E\u4FDD\u6E38\u620F\u6700\u7EC8\u7684\u5229\u6DA6\uFF0C MetaSoft \u5143\u8F6F\u4E0D\u8D1F\u8D23\u4FDD\u8BC1\u6E38\u620F\u6709\u5229\u6DA6\u3002

\u5F00\u8352\u9879\u76EE\u90FD\u662F\u9AD8\u98CE\u9669\uFF0C\u6CA1\u4EBA\u80FD\u4FDD\u8BC1\u6210\u529F\uFF0C\u5404\u9879\u66FE\u53D1\u5E03\u7684\u5185\u5BB9\u7686\u5B58\u5728\u4E0D\u786E\u5B9A\u6027\u3002

\u300A\u5143\u7075\u5927\u9646\u300B\u662F\u5F00\u8352\u9879\u76EE\uFF0C\u66FE\u53D1\u5E03\u7684\u5185\u5BB9\uFF0C\u4E5F\u5B58\u5728\u4E0D\u786E\u5B9A\u6027\u3002\u4E0D\u4F1A\u5BF9MetaSoft \u5143\u8F6F\u5B98\u7F51\uFF0C\u5FAE\u4FE1\u516C\u4F17\u53F7\uFF0C\u521B\u529E\u4EBA\uFF0C\u6216MetaSoft\u5143\u8F6F\u4E00\u5207\u76F8\u5173\u4EBA\u5458\u66FE\u53D1\u8868\u7684\u300A\u5143\u7075\u5927\u9646\u300B\u76F8\u5173\u6E38\u620F\u5185\u5BB9\u8D1F\u8D23\u3002

\u4E0D\u8BA4\u540C\u3001\u4E0D\u7406\u89E3\u3001\u4E0D\u652F\u6301\u3001\u4E0D\u660E\u767D\u6216\u4E0D\u63A5\u53D7\u4EE5\u4E0A\u4EFB\u4F55\u4E00\u9879\u6761\u6B3E\u7684\u670B\u53CB\uFF0C\u8BF7\u4E0D\u8981\u8D2D\u4E70\u53CA\u8BF7\u4E0D\u8981\u6301\u6709\u300A\u5143\u7075\u5927\u9646\u300B\u7684\u6E38\u620F\u5229\u6DA6\u6743NFT\uFF0C\u8C22\u8C22\uFF01

\u8D2D\u4E70\u6216\u672A\u6765\u6301\u6709\u6B64NFT\u5229\u6DA6\u5361\u8005\u5373\u8868\u793A\u8BA4\u53EF\u4EE5\u4E0A\u6761\u6B3E\uFF0C\u4E0D\u5F97\u5F02\u8BAE\u3002

\u672C\u514D\u8D23\u58F0\u660E\u6709\u7FFB\u8BD1\u82F1\u6587\u7248\u672C\u5982\u4E0B\u3002\u5982\u4E2D\u3001\u82F1\u6587\u7248\u672C\u6709\u4EFB\u4F55\u62B5\u89E6\u6216\u6B67\u5F02\uFF0C\u5E94\u4EE5\u4E2D\u6587\u7248\u672C\u4E3A\u51C6\u3002
\u5F53\u4F60\u4F7F\u7528 \u6216\u6301\u6709\u6B64NFT\u5361\u65F6\uFF0C\u5373\u8868\u793A\u540C\u610F\u65E0\u6761\u4EF6\u63A5\u53D7\u672C\u514D\u8D23\u58F0\u660E\u7684\u6761\u6B3E\u53CA\u5176\u4EFB\u4F55\u53D8\u66F4\u3002 MetaSoft\u4F1A\u4E0D\u65F6\u4FEE\u6539\u53CA\uFF0F\u6216\u4FEE\u8BA2\u6709\u5173\u6761\u6B3E\uFF0C\u800C\u65E0\u987B\u4E8B\u5148\u901A\u77E5\u3002

MetaSoft \u5143\u8F6F\u3010\u5373\uFF1A\u5143\u8F6F\u8F6F\u4EF6\uFF08\u6FB3\u95E8\uFF09\u6709\u9650\u516C\u53F8\u3011\u4FDD\u7559\u5BF9\u672C\u6587\u6240\u6709\u6761\u6B3E\u53CA\u58F0\u660E\u7684\u6700\u7EC8\u89E3\u91CA\u6743\u3002

------------------------------------------------------------------------------

The "MetaElf Land" game is MetaSoft's first pioneering project. Although MetaSoft is responsible for ensuring the final launch of the game, there are, in fact, also various uncertainties, meaning that huge opportunities and risks coexist. Participating in "MetaElf Land" with the NFT card of game profit distribution rights [limited to blockchain server] is an opportunity and risk.

The co-founders of MetaSoft currently hold a total of 75% of the game-related ownership rights of "MetaElf Land", and the game team of MetaSoft holds the remaining 25%.

MetaSoft sell the 4% profit distribution rights of the "MetaElf Land" game [limited to blockchain server]. Once sold, MetaSoft will ensure that at least 4% of the ["MetaElf Land"] game-related ownership rights originally held by the co-founders of MetaSoft are still held by them and will not be transferred to [Non- MetaSoft co-founder or entity not  controlled by MetaSoft co-founder.

The 4% of the game profit distribution rights sold this time [limited to blockchain server] is equivalent to other sold (internally subscribed) NFT card profit distribution rights, but it is clearly different from the remaining game-related ownership rights and interests that are [unsold] and have not been chained to become NFT cards. All ownership rights and interests that are [unsold] and have not been chained to become NFT cards are not subject to any of the following clauses.

Friends who are interested in buying or holding the NFT card of "MetaElf Land" profit distribution rights, please be sure to carefully read the following terms and precautions before purchasing. (The NFT in the following text refers to the "MetaElf Land" profit distribution NFT card, and the game refers to the "MetaElf Land" game.)

Holders of NFTs or purchasers of NFTs indicate that they understand and accept the above content and all the following terms and statements.

1. About the profit represented by this NFT card
Each NFT card only represents 0.01% of the profit distribution rights of "MetaElf Land" Game [limited to Blockchain Servers]. Holding NFT card does not mean that there are any other game-related ownership rights, and there will be no voting rights for any game policy, operation direction, etc. in the future.

The profit distribution right of the NFT card, here represents the profit after deducting the operating cost of the month or the quarter, and issued through the NFT card.

\uFF081\uFF09MetaSoft will not disclose all the financial status of game operations to NFT card holders or entities holding less than 15% profit distribution rights. It is recommended that entities, that are interested in large-scale acquisition of "MetaElf Land" profit distribution rights NFT cards, directly contact MetaSoft and carefully consider risks before proceeding with relevant acquisition activities.

\uFF082\uFF09Currently, there are operational difficulties and potential policy risks about how the game [Reality Server] and all the profits around the game, such as advertisements, animations, etc., are distributed to NFT card holders. Therefore, everything about "MetaElf Land" Game [Reality Related Server] and all profits surrounding the game, such as cross-chain service fees, advertisements, animations, dolls, etc., are not included in the NFT card rights.

\uFF083\uFF09MetaSoft does not guarantee that any [non-blockchain server] related game profits such as cross-chain service fees, advertisements, animations, and profits generated by real server servers will be distributed to NFT card holders.

\uFF084\uFF09MetaSoft will use non-[blockchain server] game-related profits, such as MetaSoft MetaElf game [reality server] and all profits around the game such as advertising, animation, dolls, etc., for charity purpose or the follow-up game development purpose of "MetaElf Land" Game.

2. About NFT card price
Each NFT card sells for approximately 160 USDT. Currently, because NFTXSKY does not have the function of charging USDT, MetaSoft charges equivalent FT (BSV).

3. About market price fluctuations
Once the NFT card is sold during the sale period, if the FT (BSV) fluctuates due to market price fluctuations, MetaSoft will not refund the overcharged FT (BSV), nor will it claim the lost FT (BSV). The FT (BSV) collected by MetaSoft after the NFT card is sold will immediately be converted into USDT for use in game operations.

4. About the issuance time of NFT card profit
The profit distribution time of NFT card is initially set monthly or quarterly, and MetaSoft will adjust the profit distribution time according to actual operating conditions.

MetaSoft does not guarantee that the game will have profit every month or quarter, and may even bear a long-term loss. If there is no profit, no profit will be issued in the current month or quarter.

5. About the method of issuance of NFT card profits
Any carrier of the same value of USDT, BSV or \u2019\u2019MetaElf\u2019\u2019 Coin (FT) may be different each time. MetaSoft reserves the right to make the final decision on which profit carrier to issue.

6. About the launch time of the game
Expected launch time: February to March 2022. In case of market changes (such as the advent of a bear market), MetaSoft will advance or postpone the launch according to the actual situation.

7. About future profits and losses of NFT cards, and eligibility for purchase
Please think twice and pay attention to investment risks.

MetaSoft will not be responsible for any loss or zero value incurred by purchasing the NFT card of "MetaElf Land" profit distribution rights. Please only buy this NFT card when you can be responsible for your investment.

Holding this NFT card does not mean that there are monthly or quarterly profits. If there is no profit distribution in the any month or quarter after deducting the operating costs, and if it will make you feel any discomfort or feel cheated, please do not buy or hold this NFT card, thank you!

If buying this NFT card may eventually cause you to lose money or get zero value, and if it will make you feel any discomfort or feel cheated, please do not buy this NFT card, thank you!

8.  NFT card storage important remark 
The profit distribution right NFT card (SV chain) can only be used for mutual transfer and storage in SV wallets that support Metaid ID authentication technology. MetaSoft will not be responsible for any loss caused by sending NFT cards to SV wallets that do not support Metaid authentication technology. 

There is a risk of NFT card loss in wallets sent to non-METAID authentication technology wallet. MetaSoft will not be responsible for retrieving the NFT card for cardholders, and will not make any compensation for this. Please handle profit distribution rights NFT cards with caution.

9. About the suspension or suspension of operations of the game due to force majeure

If the game cannot continue to operate due to any force majeure factors (natural disasters, policy changes, long-term losses, etc.), MetaSoft reserves the right to make the final decision on the game's adjustment, suspension or cessation of operation, and will not make any compensation to those who purchase or hold NFT cards if the operation of the game is adjusted, suspended or stopped.

Final special statement:
It is MetaSoft's responsibility to ensure that the game will be released, but not that the game will be profitable. MetaSoft is not responsible for ensuring that the game will be profitable.

New projects are high-risk, and no one can guarantee success. There are uncertainties in all previously published content.

"MetaElf Land" is a newly developed project, and the content that has been released is also uncertain. MetaSoft will not be responsible for the game content related to the official website, WeChat official account, founder, or all related personnel of MetaSoft.

Friends who disagree, do not understand, support, or accept any of the above terms, please do not purchase or hold this profit distribution right\u2019s NFT of the game, thank you!

Those who purchase or hold this NFT profit distribution rights in the future will signify their approval of all the above terms and shall not object.

All disclaimer above has been translated into English. If there is any inconsistency or ambiguity between the English version and the Chinese version, the Chinese version shall prevail.
By holding this NFT card, you agree to accept unconditionally the terms of this Disclaimer and as they may be revised and/or amended from time to time by MetaSoft without prior notice to you.

MetaSoft [namely: Metasoft Software (Macau) Ltd.] reserves the right of final interpretation of all the above terms and statements.
`;
function NFTDetail(genesis, codehash, tokenIndex) {
  return new Promise((resolve, reject) => __async(this, null, function* () {
    const res = yield NFTApiGetNFTDetail({
      genesis,
      codehash,
      tokenIndex
    }).catch(() => reject());
    if ((res == null ? void 0 : res.code) === 0) {
      if (res.data.results.items.length > 0) {
        const item = res.data.results.items[0];
        const data = item.nftDataStr ? JSON.parse(item.nftDataStr) : "";
        const deadlineTimeRes = yield GetDeadlineTime({
          codeHash: item.nftCodehash,
          genesis: item.nftGenesis,
          tokenIndex: item.nftTokenIndex
        });
        const classify = setDataStrclassify(data);
        const nft = __spreadProps(__spreadValues({}, item), {
          foundryName: item.nftIssuer,
          foundryMetaId: item.nftIssueMetaId,
          foundryHead: "",
          amount: item.nftPrice ? item.nftPrice : 0,
          remainingTime: deadlineTimeRes && deadlineTimeRes.data && deadlineTimeRes.data.deadlineTime ? deadlineTimeRes.data.deadlineTime : null,
          nftName: item.nftName ? item.nftName : "--",
          classify,
          describe: item.nftCodehash === "0d0fc08db6e27dc0263b594d6b203f55fb5282e2" && item.nftGenesis === "86038be3cbbfc06aa0dad546e5fea2d165945853" ? elfDrsc : item.nftDesc,
          forgeTime: item.nftTimestamp,
          contractAddress: item.nftSensibleId,
          tokenId: item.nftTokenId,
          ownerName: item.nftOwnerName,
          ownerMetaId: item.nftOwnerMetaId,
          ownerHead: "",
          ownerAddress: item.nftOwnerAddress,
          type: data ? data.nftType : "",
          revenue: "",
          coverUrl: item.nftIcon,
          tx: data ? data.contentTxId : "",
          putAway: item.nftIsReady,
          codeHash: item.nftCodehash,
          genesis: item.nftGenesis,
          tokenIndex: item.nftTokenIndex,
          genesisTxId: item.nftGenesisTxId,
          sellTxId: item.nftSellTxId,
          sensibleId: item.nftSensibleId,
          sellContractTxId: item.nftSellContractTxId,
          sellDesc: item.nftSellDesc,
          issueMetaTxId: item.nftIssueMetaTxId,
          sellState: item.nftSellState,
          ownerAvatarType: item.nftOwnerAvatarType,
          issueUserAvatarType: item.nftIssueAvatarType,
          nftGenesisCertificationType: item.nftGenesisCertificationType,
          nftCertificationType: item.nftCertificationType,
          nftGenesisCertificationName: item.nftGenesisCertificationName,
          nftWebsite: item.nftWebsite,
          nftCurrentAuctionCreateTxId: item.nftCurrentAuctionCreateTxId
        });
        resolve(nft);
      } else {
        reject();
      }
    }
  }));
}
export { NFTDetail as N };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmZ0RGV0YWlsLmQ0OThjOGYwLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
