import { BrowserProvider } from "ethers";

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
  try{
    const provider = new BrowserProvider((window as any).ethereum);
    const signer = await provider.getSigner();
    return signer.address;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }

}