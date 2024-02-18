'use client';
import { insertArtistPageData } from '@/services/database/dao';
import {
	ArtistPage,
	ArtistPageData,
	ConcertPresaleCode,
	UnreleasedMusic
} from '@/services/model/Models';
import { getCurrentWalletAddress } from '@/services/wallet/WalletService';

import { useEffect, useState } from 'react';

export default function CreatePage() {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
	const [walletAddress, setWalletAddress] = useState<string | null>();

	const [songLink, setSongLink] = useState('');
	const [presaleCode, setPresaleCode] = useState('');
	const [tokenContract, setTokenContract] = useState('');
	const [address, setAddress] = useState('');
	const [ticketLink, setTicketLink] = useState('');
	const [songName, setSongName] = useState('');

	useEffect(() => {
		const fetchUserStatus = async () => {
			const walletAddress = await getCurrentWalletAddress();
			setWalletAddress(walletAddress);
			setIsLoggedIn(walletAddress !== null);
		};

		fetchUserStatus();
	}, []);

	const handleSubmit = async (event: React.FormEvent) => {
		const artistPage: ArtistPage = {
			//TODO add validation to verify non null and non empty
			wallet_address: walletAddress ? walletAddress : '',
			token_contract: tokenContract
		};

		const unreleasedMusic: UnreleasedMusic = {
			song_name: songName,
			song_link: songLink
		};

		const concertPresaleCode: ConcertPresaleCode = {
			presale_code: presaleCode,
			address: address,
			ticket_link: ticketLink
		};

		const artistPageData: ArtistPageData = {
			artistPage: artistPage,
			unreleasedMusic: unreleasedMusic,
			concertPresaleCode: concertPresaleCode
		};

		await insertArtistPageData(artistPageData);
	};

	if (!isLoggedIn) {
		return <div>NOT LOGGED IN</div>;
	}

	return (
		<form onSubmit={handleSubmit}>
			<div>Artist Page Configurations</div>
			<label>
				tokenContract:
				<input
					type="text"
					value={tokenContract}
					onChange={(e) => setTokenContract(e.target.value)}
					style={{ color: 'black' }}
				/>
			</label>
			<div>Unreleased Music</div>
			<label>
				songLink:
				<input
					type="text"
					value={songLink}
					style={{ color: 'black' }}
					onChange={(e) => setSongLink(e.target.value)}
				/>
			</label>
			<br />
			<label>
				Song Name:
				<input
					type="text"
					value={songName}
					style={{ color: 'black' }}
					onChange={(e) => setSongName(e.target.value)}
				/>
			</label>
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
				Address:
				<input
					type="text"
					value={address}
					style={{ color: 'black' }}
					onChange={(e) => setAddress(e.target.value)}
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
			<button type="submit">Submit</button>
		</form>
	);
}
