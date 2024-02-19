'use client';

import { Box, Card, CardContent, Link, Typography } from '@mui/material';
import { CARD_STYLE } from './ArtistPageStylingConfig';
import { CardTitle } from './CardTitle';
import { ArtistPageCardImage } from './ArtistPageCardImage';
import { UnreleasedMusic } from '@/services/model/Models';
import { incrementSongLinkClicked } from '@/services/database/UnreleasedMusicDao';

interface UnreleasedMusicSectionProps {
	unreleasedMusic: UnreleasedMusic;
}

export const UnreleasedMusicSection = ({
	unreleasedMusic
}: UnreleasedMusicSectionProps) => {
	const onLinkClick = async () => {
		await incrementSongLinkClicked(unreleasedMusic.id);
	};
	return (
		<Card sx={CARD_STYLE}>
			<CardContent>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<CardTitle text="Unreleased Music" />
					<ArtistPageCardImage />
					<Typography variant="h4" style={{ color: 'white' }}>
						{unreleasedMusic.song_name}
					</Typography>
					<Link
						href={unreleasedMusic.song_link}
						target="_blank"
						rel="noreferrer"
						variant="h4"
                        onClick={onLinkClick}
					>
						Download Link
					</Link>
				</Box>
			</CardContent>
		</Card>
	);
};
