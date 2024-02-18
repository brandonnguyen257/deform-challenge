import { Card, CardContent, Typography } from '@mui/material';
import { CARD_STYLE } from './ArtistPageStylingConfig';

export const UnreleasedMusicSection = () => {
	return (
		<Card sx={CARD_STYLE}>
			<CardContent>
				<Typography variant="h5">Unreleased Music</Typography>
				{/* Add more card content here */}
			</CardContent>
		</Card>
	);
};
