import { at as Decimal, au as store, a1 as confirmToSendMetaData, av as RemoveDeadlineTime, X as ElMessage, aw as i18n } from './index.e0dfe776.js';

function NftOffSale(nft, loading) {
  return new Promise(async (resolve, reject) => {
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
      const useAmountRes = await store.state.sdk?.nftCancel({
        checkOnly: true,
        ...params
      });
      if (useAmountRes?.code === 200) {
        const result = await confirmToSendMetaData(useAmountRes.data.amount);
        if (result) {
          const res = await store.state.sdk?.nftCancel(params);
          if (res?.code === 200) {
            await RemoveDeadlineTime({
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
  });
}

export { NftOffSale as N };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmU2FsZS5jMGVlYWNhNy5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
