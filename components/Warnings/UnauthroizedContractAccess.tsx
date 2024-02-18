import { useEffect, useState } from 'react';
import { getContractMetadata } from '@/services/wallet/WalletService';
import { NftContract } from 'alchemy-sdk';

interface UnauthorizedContractAccessProps {
	contractToken: string | undefined;
}

export default function UnauthorizedContractAccess({
	contractToken
}: UnauthorizedContractAccessProps) {
	const [contract, setContract] = useState<NftContract | undefined>();

	useEffect(() => {
		async function fetchContract() {
			const contractData: NftContract | undefined =
				await getContractMetadata(contractToken);
			setContract(contractData);
			console.log(contractData);
		}
		fetchContract();
	}, [contractToken]);

	if (!contract) {
		return <p>No contract found</p>;
	}

	return (
		<p>You are unauthorized to see this. You must own a {contract.name}</p>
	);
}
