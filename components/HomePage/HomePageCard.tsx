'use client';
import { Box, ButtonBase, Card, CardContent, Typography } from '@mui/material';
import { CardTitle } from '../ArtistPage/CardTitle';
import { useRouter } from 'next/navigation';

interface HomePageCardProps {
	cardTitleText: string;
	hrefLink: string;
}

export const HomePageCard: React.FC<HomePageCardProps> = ({
	cardTitleText,
	hrefLink
}) => {
	const router = useRouter();

	const onCardClick = () => {
		router.push(hrefLink);
	};
	return (
		<ButtonBase
			onClick={onCardClick}
			component="div"
			style={{ width: '100%' }}
		>
			<Card
				sx={{
					bgcolor: 'black',
					flex: 1,
					border: '1px solid white',
					'&:hover': {
						transform: 'scale(1.05)',
						boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)'
					},
					transition:
						'transform 0.2s ease-in-out, boxShadow 0.2s ease-in-out'
				}}
			>
				<CardContent>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Typography
							variant="h3"
							align="center"
							style={{ color: '#fff' }}
						>
							{cardTitleText}
						</Typography>
					</Box>
				</CardContent>
			</Card>
		</ButtonBase>
	);
};
