'use client';
import { ArtistCard } from '@/components/ArtistGallery/ArtistCard';
import { ArtistPageSection } from '@/components/ArtistPage/ArtistPageSection';
import Loading from '@/components/Loading';
import UnauthenticatedUserWarning from '@/components/Warnings/UnauthenticatedUserWarning';
import UnauthorizedContractAccess from '@/components/Warnings/UnauthroizedContractAccess';
import { getArtistPageData } from '@/services/database/dao';
import { ArtistPageData } from '@/services/model/Models';
import {
	getCurrentWalletAddress,
	hasAccessToPage
} from '@/services/wallet/WalletService';
import { Container } from '@mui/material';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
	const router = usePathname();
	const pageId: number = parseInt(router.split('/').pop() || '', 10);

	const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
	const [walletAddress, setWalletAddress] = useState<string | null>();

	const [hasAccess, setHasAccess] = useState<boolean>(false);
	const [artistPageData, setArtistPageData] = useState<
		ArtistPageData | undefined
	>();
	const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
	const [isOwner, setIsOwner] = useState<boolean>(false);

	useEffect(() => {
		const fetchUserStatus = async () => {
			setIsPageLoading(true);
			const walletAddress = await getCurrentWalletAddress();
			setWalletAddress(walletAddress);
			setIsLoggedIn(walletAddress !== null);

			const data: ArtistPageData | undefined =
				await getArtistPageData(pageId);
			setArtistPageData(data);

			const hasAccess = await hasAccessToPage(
				data?.artistPage.token_contract || ''
			);
			setHasAccess(hasAccess);
			setIsPageLoading(false);
			await getArtistPageData(pageId);
			setIsOwner(data?.artistPage.wallet_address === walletAddress);
		};

		fetchUserStatus();
	}, []);

	if (!isPageLoading && !isLoggedIn) {
		return <UnauthenticatedUserWarning />;
	}
	if (!isOwner && !isPageLoading && !hasAccess) {
		return (
			<UnauthorizedContractAccess
				contractToken={artistPageData?.artistPage.token_contract}
			/>
		);
	}
	if (artistPageData === null) {
		return <div>Page does not exist</div>;
	}
	if (isPageLoading) {
		return <Loading />;
	}
	return (
		<Container maxWidth="xl">
			{artistPageData?.artistPage && (
				<ArtistPageSection artistPage={artistPageData?.artistPage} />
			)}
		</Container>
	);
};

export default Page;
