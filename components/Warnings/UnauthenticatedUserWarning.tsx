import { Typography } from '@mui/material';

export default function UnauthenticatedUserWarning() {
	return (
		<Typography variant="h4" component="h2">
			You do not have access to this page. Please log in with wallet
		</Typography>
	);
}
