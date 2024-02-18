'use client';
import UnauthenticatedUserWarning from '@/components/Warnings/UnauthenticatedUserWarning';
import { insertArtistPageData } from '@/services/database/dao';
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
import { ArtistPageConfigurations } from '@/components/CreatePage/ArtistPageConfigurations';
import { UnreleasedMusicSection } from '@/components/CreatePage/UnreleasedMusicSection';

export default function CreatePage() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
	const [walletAddress, setWalletAddress] = useState<string | null>();

	const [presaleCode, setPresaleCode] = useState('');
	const [venue, setVenue] = useState('');
	const [ticketLink, setTicketLink] = useState('');

	const [artistPage, setArtistPage] = useState<ArtistPage>({
		wallet_address: walletAddress ? walletAddress : '',
		token_contract: '',
		page_name: ''
	});
	const [unreleasedMusic, setUnreleasedMusic] = useState<UnreleasedMusic>({
		song_name: '',
		song_link: ''
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

		const concertPresaleCode: ConcertPresaleCode = {
			presale_code: presaleCode,
			venue: venue,
			ticket_link: ticketLink
		};

		const artistPageData: ArtistPageData = {
			artistPage: artistPage,
			unreleasedMusic: unreleasedMusic,
			concertPresaleCode: concertPresaleCode
		};
		console.log(artistPageData);

		await insertArtistPageData(artistPageData);
		router.push('/artist-gallery');
	};

	if (!isLoggedIn) {
		return <UnauthenticatedUserWarning />;
	}

	return (
		<form onSubmit={handleSubmit}>
			<br />
			<ArtistPageConfigurations
				artistPage={artistPage}
				setArtistPage={setArtistPage}
			/>
			<br />
			<UnreleasedMusicSection
				unreleasedMusic={unreleasedMusic}
				setUnreleasedMusic={setUnreleasedMusic}
			/>

			<br />
			<div>Presale Codes</div>
			<label>
				presaleCode:
				<input
					type="text"
					value={presaleCode}
					style={{ color: 'black' }}
					onChange={(e) => setPresaleCode(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Venue:
				<input
					type="text"
					value={venue}
					style={{ color: 'black' }}
					onChange={(e) => setVenue(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Ticket Link:
				<input
					type="text"
					value={ticketLink}
					style={{ color: 'black' }}
					onChange={(e) => setTicketLink(e.target.value)}
				/>
			</label>

			<br />
			<br />
			<button type="submit">Submit</button>
		</form>
	);
}
