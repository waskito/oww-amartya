import { ChainId, Config } from "@usedapp/core";

const config: Config = {
  readOnlyChainId:
    (parseInt(process.env.NEXT_PUBLIC_NETWORK, 10) as ChainId) ?? 5,
  readOnlyUrls: {
    [ChainId.Goerli]: process.env.NEXT_PUBLIC_RPC_URL_5,
    [ChainId.Mainnet]: process.env.NEXT_PUBLIC_RPC_URL_1,
  },
};

export default config;
