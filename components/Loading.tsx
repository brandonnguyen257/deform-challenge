import { Box, CircularProgress, Typography } from '@mui/material';

export default function Loading() {
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
			{/* <Typography>Loading...</Typography> */}
		</Box>
	);
}
