import { Card, CardContent, Typography } from '@mui/material';
import { CARD_STYLE } from './ArtistPageStylingConfig';

export const PromoCodeSection = () => {
	return (
		<Card sx={CARD_STYLE}>
			<CardContent>
				<Typography variant="h5">Promo Code</Typography>
				{/* Add more card content here */}
			</CardContent>
		</Card>
	);
};
