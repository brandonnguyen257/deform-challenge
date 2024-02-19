import { Typography } from '@mui/material';
import React from 'react';

interface CardTitleProps {
	text: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ text }) => {
	return (
		<Typography variant="h2" align="center" style={{ color: '#fff' }}>
			{text}
		</Typography>
	);
};
