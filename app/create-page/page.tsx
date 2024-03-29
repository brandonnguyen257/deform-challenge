'use client';
import UnauthenticatedUserWarning from '@/components/Warnings/UnauthenticatedUserWarning';
import { insertArtistPageData } from '@/services/database/ArtistPageDao';
import {
	ArtistPage,
	ArtistPageData,
	ConcertPresaleCode,
	UnreleasedMusic
} from '@/services/model/Models';
import { getCurrentWalletAddress } from '@/services/wallet/WalletService';
import { useRouter } from 'next/navigation';
import Loading from '@/components/Loading';

import { useEffect, useState } from 'react';
import { ArtistPageSection } from '@/components/CreatePage/ArtistPageSection';
import { UnreleasedMusicSection } from '@/components/CreatePage/UnreleasedMusicSection';
import { ConcertPresaleCodeSection } from '@/components/CreatePage/ConcertPresaleCodeSection';
import { Button, Container, Typography } from '@mui/material';
import { SubmitButtonSx } from '@/components/CreatePage/StylingConfig';

export default function CreatePage() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
	const [walletAddress, setWalletAddress] = useState<string | null>();

	const [artistPage, setArtistPage] = useState<ArtistPage>({
		wallet_address: walletAddress ? walletAddress : '',
		token_contract: '',
		page_name: '',
		profile_image: ''
	});
	const [unreleasedMusic, setUnreleasedMusic] = useState<UnreleasedMusic>({
		song_name: '',
		song_link: ''
	});

	const [concertPresaleCode, setConcertPresaleCode] =
		useState<ConcertPresaleCode>({
			presale_code: '',
			venue: '',
			ticket_link: ''
		});

	useEffect(() => {
		const fetchUserStatus = async () => {
			const walletAddress = await getCurrentWalletAddress();
			setWalletAddress(walletAddress);
			setIsLoggedIn(walletAddress !== null);
			setIsLoading(false);
			setArtistPage({
				...artistPage,
				wallet_address: walletAddress ? walletAddress : ''
			});
		};

		fetchUserStatus();
	}, []);

	if (isLoading) {
		return <Loading />;
	}
	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		const artistPageData: ArtistPageData = {
			artistPage: artistPage,
			unreleasedMusic: unreleasedMusic,
			concertPresaleCode: concertPresaleCode
		};

		await insertArtistPageData(artistPageData);
		router.push('/artist-gallery');
	};

	if (!isLoggedIn) {
		return <UnauthenticatedUserWarning />;
	}

	return (
		<Container
			sx={{
				width: '75%',
				height: '75%'
			}}
		>
			<Typography
				variant="h2"
				component="div"
				sx={{ color: 'white', textAlign: 'center', py: 2 }}
			>
				Create Page Form
			</Typography>

			<ArtistPageSection
				artistPage={artistPage}
				setArtistPage={setArtistPage}
			/>

			<UnreleasedMusicSection
				unreleasedMusic={unreleasedMusic}
				setUnreleasedMusic={setUnreleasedMusic}
			/>

			<ConcertPresaleCodeSection
				concertPresaleCode={concertPresaleCode}
				setConcertPresaleCode={setConcertPresaleCode}
			/>

			<Container
				sx={{
					display: 'flex',
					justifyContent: 'center',
					width: '100%'
				}}
			>
				<Button
					onClick={handleSubmit}
					variant="outlined"
					sx={SubmitButtonSx}
				>
					Submit
				</Button>
			</Container>
		</Container>
	);
}
