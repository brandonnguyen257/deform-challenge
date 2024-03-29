import ConnectWallet from '@/components/HomePage/ConnectWallet';
import { HomePageCard } from '@/components/HomePage/HomePageCard';
import { Box, Container } from '@mui/material';

export default async function Index() {
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
				<HomePageCard cardTitleText="My Pages" hrefLink="/my-pages" />
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
