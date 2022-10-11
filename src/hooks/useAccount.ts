import { useEthers } from "@usedapp/core";

interface UseAccount {
  account?: string | null;
  isWrongNetwork: boolean;
  isConnected: boolean;
  deploymentNetwork: number;
}

export function useAccount(): UseAccount {
  const { account, library, chainId } = useEthers();
  const deploymentNetwork = process.env.NEXT_PUBLIC_NETWORK
    ? parseInt(process.env.NEXT_PUBLIC_NETWORK, 10)
    : 0;
  const isConnected = typeof account === "string" && !!library;
  const isWrongNetwork = chainId !== deploymentNetwork;

  return {
    account,
    isWrongNetwork,
    isConnected,
    deploymentNetwork,
  };
}

export default useAccount;
