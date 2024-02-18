'use client'

import {
    getContractMetadata,
    getCurrentWalletAddress,
    getNftsForOwner
} from '@/services/wallet/WalletService'

export default async function CurrentNfts() {
    const handleClick = async () => {
        const currentWalletAddress = await getCurrentWalletAddress()

        if (!currentWalletAddress) {
            console.log('Please connect wallet to view NFTs')
            return
        }
        const nfts = await getNftsForOwner(currentWalletAddress)
        console.log('getting current nfts')
        console.log(await getContractMetadata('joe'))
    }

    return <button onClick={handleClick}>Current Nfts</button>
}
