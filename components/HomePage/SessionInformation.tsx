'use client'

import { getCurrentWalletAddress } from '@/services/wallet/WalletService'
export default async function SessionInformation() {
  const handleClick = async () => {
    const currentWalletAddress = await getCurrentWalletAddress()

    console.log(currentWalletAddress)
  }

  return <button onClick={handleClick}>Session Information</button>
}
