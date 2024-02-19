import { Avatar } from '@mui/material';
import React from 'react';

interface ArtistPageCardImageProps {
	src?: string;
}

export const ArtistPageCardImage: React.FC<ArtistPageCardImageProps> = ({
	src
}) => {
	//TODO: Replace filler circle with image uploads
	// <Avatar src={src} sx={{ margin: 'auto', width: 200, height: 200 }} />;
	return (
		<svg height="200" width="200" style={{ margin: 'auto' }}>
			<circle cx="100" cy="100" r="80" stroke="darkgray" fill="gray" />
		</svg>
	);
};
