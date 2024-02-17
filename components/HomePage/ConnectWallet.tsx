'use client'
import { BrowserProvider } from 'ethers';



export default function ConnectWallet() {
    const provider = new BrowserProvider((window as any).ethereum);

    const handleClick = () => {
        console.log("Connecting To Wallet");
        provider.send('eth_requestAccounts', [])
        .catch(() => console.log('user rejected request'));
    };

    return <button onClick={handleClick}>Connect Wallet</button>
}