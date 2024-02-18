import { Box, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Loading() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 0);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return null;
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh'
			}}
		>
			<CircularProgress color="inherit" size={100} />
		</Box>
	);
}
