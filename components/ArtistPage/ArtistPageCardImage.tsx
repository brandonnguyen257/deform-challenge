import { Avatar } from '@mui/material';
import React from 'react';

interface ArtistPageCardImageProps {
	src?: string;
}

export const ArtistPageCardImage: React.FC<ArtistPageCardImageProps> = ({
	src
}) => {
	return (
		<Avatar src={src} sx={{ margin: 'auto', width: 200, height: 200 }} />
	);
};
