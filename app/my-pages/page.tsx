'use client';
import { ArtistCard } from '@/components/ArtistGallery/ArtistCard';
import Loading from '@/components/Loading';
import { getMyArtistPages } from '@/services/database/ArtistPageDao';
import { ArtistPage } from '@/services/model/Models';
import { getCurrentWalletAddress } from '@/services/wallet/WalletService';
import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

export default function MyArtistPages() {
	const [artistPages, setArtistPages] = useState<ArtistPage[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [walletAddress, setWalletAddress] = useState<string | null>();

	useEffect(() => {
		const fetchMyArtistPages = async () => {
			const walletAddress = await getCurrentWalletAddress();
			setWalletAddress(walletAddress);
			const data = await getMyArtistPages(walletAddress);
			setArtistPages(data);
			setIsLoading(false);
		};

		fetchMyArtistPages();
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Container maxWidth="xl">
			<Grid container spacing={3}>
				{artistPages.map((artist, index) => (
					<Grid item xs={12} sm={6} md={6} lg={4} key={index}>
						<ArtistCard
							artistPage={artist}
							onClickEndpointRoute="/analytics"
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
