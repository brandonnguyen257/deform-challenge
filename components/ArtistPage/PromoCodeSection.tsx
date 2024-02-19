import { Card, CardContent, Typography } from '@mui/material';
import { CARD_STYLE } from './ArtistPageStylingConfig';
import { CardTitle } from './CardTitle';
import { ArtistPageCardImage } from './ArtistPageCardImage';

export const PromoCodeSection = () => {
	return (
		<Card sx={CARD_STYLE}>
			<CardContent>
				<CardTitle text="Promo Code" />
				<ArtistPageCardImage />
				<Typography
					align="center"
					variant="h4"
					style={{ color: '#fff' }}
				>
					Location
				</Typography>
			</CardContent>
		</Card>
	);
};
