const { TweedBackendSDK, Environment } = require("@paytweed/backend-sdk");
const nftService = require("./nft.service");
const tokenService = require("./token.service");

class TweedService {
  async initialize() {
    this._client = await TweedBackendSDK.setup({
      apiKey: "lTb8oCLxqtYb9plUrm08zrQxTMQozRXx",
      apiSecret:
        "4hlL4JLXLSD4MVNZHczebowo40pIqqD1TM5H94XLEvQbwFnfio-fqKQmZAJjIRmM",
      defaultBlockchainIds: ["ethereumSepolia"],
      callbacks: {
        getNftPurchaseData: async ({ nftId }) => nftService.getById(nftId),
        getTokenPurchaseData: async ({ tokenId }) =>
          tokenService.getById(tokenId),
      },
    });
    return this._client;
  }
}

module.exports = new TweedService();
