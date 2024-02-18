import { ArtistPage } from '@/services/model/Models';
import { Card, CardContent, Typography } from '@mui/material';

interface ArtistCardProps {
	artistPage: ArtistPage;
}

export const ArtistCard = ({ artistPage }: ArtistCardProps) => {
	return (
		<Card
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<CardContent sx={{ flexGrow: 1 }}>
				<Typography variant="h5" component="div">
					{artistPage.page_name}
				</Typography>
			</CardContent>
		</Card>
	);
};
