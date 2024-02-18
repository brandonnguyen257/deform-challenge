import { Box, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';

export default function Loading() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 0); // Delay for 500 milliseconds (0.5 seconds)

		return () => clearTimeout(timer); // Clean up the timer
	}, []);

	if (loading) {
		return null; // Don't render anything while loading
	}

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column', // Stack the children vertically
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh' // Take up the full viewport height
			}}
		>
			<CircularProgress color="inherit" size={100} />
		</Box>
	);
}
