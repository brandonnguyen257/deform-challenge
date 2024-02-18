import { ArtistPage } from '@/services/model/Models';
import {
	Avatar,
	Box,
	ButtonBase,
	Card,
	CardContent,
	Typography
} from '@mui/material';
import { useRouter } from 'next/navigation';

interface ArtistCardProps {
	artistPage: ArtistPage;
}

const ArtistCardSx = {
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	bgcolor: 'black',
	width: '100%',
	border: '1px solid white'
};

export const ArtistCard = ({ artistPage }: ArtistCardProps) => {
	const router = useRouter();

	const onCardClick = () => {
		console.log(artistPage.profile_image);
		// router.push(`/artist/${artistPage.id}`);
	};
	return (
		<ButtonBase
			onClick={onCardClick}
			component="div"
			style={{ width: '100%' }}
		>
			<Card sx={ArtistCardSx}>
				<CardContent sx={{ flexGrow: 1 }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}
					>
						<Avatar
							src={artistPage.profile_image}
							sx={{ margin: 'auto', width: 100, height: 100 }}
						/>
						<Typography
							variant="h5"
							component="div"
							sx={{ color: 'white' }}
						>
							{artistPage.page_name}
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</ButtonBase>
	);
};
