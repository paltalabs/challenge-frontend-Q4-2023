import { isConnected, getPublicKey } from "@stellar/freighter-api";

export const isUserConnected = async () => {
  const isUserConnectedToFreighter = await isConnected();

  return isUserConnectedToFreighter;
};

export const getPublicWalletAddress = async () => {
  const publicKey = await getPublicKey();

  return publicKey;
};
