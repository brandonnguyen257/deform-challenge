import { Card, CardContent, Typography } from '@mui/material';
import { CARD_STYLE } from './ArtistPageStylingConfig';
import { CardTitle } from './CardTitle';

export const UnreleasedMusicSection = () => {
	return (
		<Card sx={CARD_STYLE}>
			<CardContent>
				<CardTitle text="Unreleased Music" />
			</CardContent>
		</Card>
	);
};
