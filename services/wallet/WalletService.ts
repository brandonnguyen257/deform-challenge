import { Alchemy, AlchemySettings, Network, OwnedNftsResponse } from "alchemy-sdk";
import { BrowserProvider } from "ethers";

const settings: AlchemySettings = {
  apiKey: process.env.ALCHEMY_API_KEY, 
  network: Network.ETH_GOERLI, 
};
const alchemy = new Alchemy(settings);


export const getAccessToPage = async () => {
    try {
      const res = await fetch('/wallet/access');
      return res.json();
    } catch (error) {
      console.error('Error:', error);
    }
};

export const isUserLoggedInWithWallet = (): boolean => {
    return false;
}

export const getCurrentWalletAddress = async () =>  {
  return getAddressOfCurrentUser();
}

export const getNftsForOwner = async (walletAddress: string) => {
  const nftsForOwner: OwnedNftsResponse = await alchemy.nft.getNftsForOwner(walletAddress);
  return nftsForOwner;
}

export const getContractMetadata = async (contractAddress: string) => {
  const nftMetadata = await alchemy.nft.getContractMetadata("0xa87D30B1d97523B8AeAA170A57126fa1C1d46196");
  return nftMetadata;
}

export const hasAccessToPage = async (contractAddress: string) => {
  if(!contractAddress) {
    return false;
  }
  console.log("checking access to page" + contractAddress);
  const walletAddress = await getAddressOfCurrentUser();
  if (!walletAddress) {
    return false;
  }
  const nftsForOwner:OwnedNftsResponse = await getNftsForOwner(walletAddress);
  console.log(nftsForOwner.ownedNfts);
  return nftsForOwner.ownedNfts.some(nft => nft.contract.address === contractAddress);
}

const getAddressOfCurrentUser = async () => {
  try{
    const provider = new BrowserProvider((window as any).ethereum);
    const signer = await provider.getSigner();

    return signer.address;
  } catch (error) {
    return null;
  }
}
