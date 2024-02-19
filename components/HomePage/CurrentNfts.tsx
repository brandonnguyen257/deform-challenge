'use client';

import {
	getContractMetadata,
	getCurrentWalletAddress,
	getNftsForOwner
} from '@/services/wallet/WalletService';

export default async function CurrentNfts() {
	const handleClick = async () => {
		const currentWalletAddress = await getCurrentWalletAddress();

		if (!currentWalletAddress) {
			return;
		}
		const nfts = await getNftsForOwner(currentWalletAddress);
	};

	return <button onClick={handleClick}>Current Nfts</button>;
}
