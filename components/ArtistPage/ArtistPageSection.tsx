import { ArtistPage } from '@/services/model/Models';
import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';

interface ArtistPageSectionProps {
	artistPage: ArtistPage;
}

export const ArtistPageSection = ({ artistPage }: ArtistPageSectionProps) => {
	const ArtistCardSx = {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		bgcolor: 'black',
		width: '100%'
	};
	return (
		<Card sx={ArtistCardSx}>
			<CardContent sx={{ flexGrow: 1 }}>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center'
					}}
				>
					<Avatar
						src={artistPage.profile_image || ''}
						sx={{ margin: 'auto', width: 300, height: 300 }}
					/>
					<Typography
						variant="h1"
						component="div"
						sx={{ color: 'white' }}
					>
						{artistPage.page_name}
					</Typography>
					<Typography
						variant="h6"
						component="div"
						sx={{ color: 'white' }}
					>
						Artist Wallet: {artistPage.wallet_address}
					</Typography>
					<Typography
						variant="h6"
						component="div"
						sx={{ color: 'white' }}
					>
						Contract Token: {artistPage.token_contract}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};
