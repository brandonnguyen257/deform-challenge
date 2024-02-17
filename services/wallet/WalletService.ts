import { Alchemy, AlchemySettings, Network } from "alchemy-sdk";
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
  console.log("getting nfts for owner ", walletAddress);
  const nftsForOwner = await alchemy.nft.getNftsForOwner(walletAddress);
  console.log(nftsForOwner);
}

export const getContractMetadata = async (contractAddress: string) => {
  console.log("getting contract metadata for ", "0xa87D30B1d97523B8AeAA170A57126fa1C1d46196");
  const nftMetadata = await alchemy.nft.getContractMetadata("0xa87D30B1d97523B8AeAA170A57126fa1C1d46196");
  console.log(nftMetadata);

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
