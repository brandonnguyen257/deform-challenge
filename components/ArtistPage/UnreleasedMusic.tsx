import { Card, CardContent, Typography } from '@mui/material';
import { CARD_STYLE } from './ArtistPageStylingConfig';
import { CardTitle } from './CardTitle';
import { ArtistPageCardImage } from './ArtistPageCardImage';

export const UnreleasedMusicSection = () => {
	return (
		<Card sx={CARD_STYLE}>
			<CardContent>
				<CardTitle text="Unreleased Music" />
				<ArtistPageCardImage />
				<Typography
					align="center"
					variant="h4"
					style={{ color: '#fff' }}
				>
					Song Name
				</Typography>
			</CardContent>
		</Card>
	);
};
