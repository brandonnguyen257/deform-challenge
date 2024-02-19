import { Card, CardContent, Typography } from '@mui/material';
import { CARD_STYLE } from './ArtistPageStylingConfig';
import { CardTitle } from './CardTitle';

export const PromoCodeSection = () => {
	return (
		<Card sx={CARD_STYLE}>
			<CardContent>
				<CardTitle text="Promo Code" />
			</CardContent>
		</Card>
	);
};
