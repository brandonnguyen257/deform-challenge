'use client'

import { getCurrentWalletAddress } from "@/services/wallet/WalletService";
import { BrowserProvider } from "ethers";
export default function SessionInformation() {

    const handleClick = async () => {
        const currentWalletAddress = await getCurrentWalletAddress();

        console.log(currentWalletAddress);

    };

    return <button onClick={handleClick}>Session Information</button>
}
