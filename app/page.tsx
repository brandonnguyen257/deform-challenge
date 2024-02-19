import { createClient } from '@/utils/supabase/server';

import Link from 'next/link';
import ConnectWallet from '@/components/HomePage/ConnectWallet';
import SessionInformation from '@/components/HomePage/SessionInformation';
import CurrentNfts from '@/components/HomePage/CurrentNfts';
import { HomePageCard } from '@/components/HomePage/HomePageCard';
import { Box, Container } from '@mui/material';

export default async function Index() {
	// const canInitSupabaseClient = () => {
	//   // This function is just for the interactive tutorial.
	//   // Feel free to remove it once you have Supabase connected.

	//   try {
	//     createClient();
	//     return true;
	//   } catch (e) {
	//     return false;
	//   }
	// };
	// const isSupabaseConnected = canInitSupabaseClient();

	return (
		<Container>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					gap: '10px'
				}}
			>
				<HomePageCard
					cardTitleText="Artist Gallery"
					hrefLink="/artist-gallery"
				/>
				<HomePageCard
					cardTitleText="Create A Page"
					hrefLink="/create-page"
				/>
				<HomePageCard cardTitleText="Analytics" hrefLink="/" />
			</Box>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '20px'
				}}
			>
				<ConnectWallet />
			</Box>
		</Container>
	);
}
