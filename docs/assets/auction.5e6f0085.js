import { Z as checkSdkStatus, au as store, a1 as confirmToSendMetaData } from './index.e0dfe776.js';

function auctionConfirmSend(params) {
  return new Promise(async (resolve, reject) => {
    checkSdkStatus();
    try {
      const res = await store.state.sdk.nftAuctionWithdraw({
        ...params,
        checkOnly: true
      });
      if (res.code === 200) {
        const result = await confirmToSendMetaData(res.data.amount);
        if (result) {
          const response = await store.state.sdk.nftAuctionWithdraw(params);
          if (response.code === 200) {
            resolve(true);
          }
        }
      }
    } catch (error) {
      reject(error);
    }
  });
}

export { auctionConfirmSend as a };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVjdGlvbi41ZTZmMDA4NS5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
