'use client';
import { ArtistPageSection } from '@/components/ArtistPage/ArtistPageSection';
import Loading from '@/components/Loading';
import UnauthenticatedUserWarning from '@/components/Warnings/UnauthenticatedUserWarning';
import { getArtistPageAnalytics } from '@/services/database/AnalyticsDao';
import { getArtistPageData } from '@/services/database/ArtistPageDao';
import { ArtistPageAnalytics, ArtistPageData } from '@/services/model/Models';
import { getCurrentWalletAddress } from '@/services/wallet/WalletService';
import { Box, Card, CardContent, Container, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AnalyticsPage() {
	const router = usePathname();
	const pageId: number = parseInt(router.split('/').pop() || '', 10);

	const [isPageLoading, setIsPageLoading] = useState<boolean>(true);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>();

	const [walletAddress, setWalletAddress] = useState<string | null>();
	const [artistPageData, setArtistPageData] = useState<
		ArtistPageData | undefined
	>();

	const [artistPageAnalytics, setArtistPageAnalytics] =
		useState<ArtistPageAnalytics>();
	useEffect(() => {
		const getMyArtistPageAnalytics = async () => {
			setIsPageLoading(true);

			const walletAddress = await getCurrentWalletAddress();
			setWalletAddress(walletAddress);
			setIsLoggedIn(walletAddress !== null);

			const data: ArtistPageData | undefined =
				await getArtistPageData(pageId);
			setArtistPageData(data);

			setArtistPageAnalytics(await getArtistPageAnalytics(pageId));
			setIsPageLoading(false);
		};
		getMyArtistPageAnalytics();
	}, []);

	if (!isPageLoading && !isLoggedIn) {
		return <UnauthenticatedUserWarning />;
	}
	if (isPageLoading) {
		return <Loading />;
	}

	if (artistPageData?.artistPage.wallet_address !== walletAddress) {
		return <div>You are not the owner of this page</div>;
	}

	const cardSx = {
		bgcolor: 'black',
		borderColor: 'white',
		flex: '1'
	};
	const boxSx = {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between'
	};
	return (
		<Container>
			<ArtistPageSection artistPage={artistPageData?.artistPage} />
			<Typography variant="h3" color="white" sx={{ textAlign: 'center' }}>
				Analytics
			</Typography>
			<Box sx={boxSx}>
				<Card variant="outlined" sx={cardSx}>
					<CardContent>
						<Typography
							variant="h4"
							color="white"
							sx={{ textAlign: 'center' }}
						>
							{artistPageData?.unreleasedMusic.song_name} Link
							Clicked {artistPageAnalytics?.timesSongLinkClicked}{' '}
							times
						</Typography>
					</CardContent>
				</Card>
				<Card variant="outlined" sx={cardSx}>
					<CardContent>
						<Typography
							variant="h4"
							color="white"
							sx={{ textAlign: 'center' }}
						>
							Ticket Link for{' '}
							{artistPageData?.concertPresaleCode.venue} clicked{' '}
							{artistPageAnalytics?.timesTicketLinkClicked} times
						</Typography>
					</CardContent>
				</Card>
			</Box>
		</Container>
	);
}
