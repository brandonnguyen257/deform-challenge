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
	onClickEndpointRoute?: string;
}

const ArtistCardSx = {
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	bgcolor: 'black',
	width: '100%',
	border: '1px solid white',

	'&:hover': {
		transform: 'scale(1.05)',
		boxShadow: '0 0 50px rgba(255, 255, 255, 0.5)'
	},
	transition: 'transform 0.2s ease-in-out, boxShadow 0.2s ease-in-out'
};
export const ArtistCard = ({
	artistPage,
	onClickEndpointRoute
}: ArtistCardProps) => {
	const router = useRouter();

	const displayDate = artistPage?.created_at
		? new Date(artistPage.created_at)?.toLocaleDateString()
		: '';

	const onCardClick = () => {
		router.push(`${onClickEndpointRoute}/${artistPage.id}`);
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
							src={artistPage.profile_image || ''}
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
				<Box
					sx={{
						position: 'absolute',
						right: 0,
						top: 0,
						p: 1,
						color: 'white'
					}}
				>
					{artistPage.id}
				</Box>
			</Card>
		</ButtonBase>
	);
};
