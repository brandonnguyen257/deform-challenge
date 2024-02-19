import { Box, Card, CardContent, Link, Typography } from '@mui/material';
import { CARD_STYLE } from './ArtistPageStylingConfig';
import { CardTitle } from './CardTitle';
import { ArtistPageCardImage } from './ArtistPageCardImage';
import { ConcertPresaleCode } from '@/services/model/Models';
import { incrementTicketLinkClicked } from '@/services/database/ConcertPresaleCodeDao';

interface PromoCodeSectionProps {
	concertPresaleCode: ConcertPresaleCode;
}

export const PromoCodeSection = ({
	concertPresaleCode
}: PromoCodeSectionProps) => {
	const onLinkClick = async () => {

        await incrementTicketLinkClicked(concertPresaleCode.id);
	};

	return (
		<Card sx={CARD_STYLE}>
			<CardContent>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center'
					}}
				>
					<CardTitle text="Presale Code" />
					<ArtistPageCardImage />
					<Typography variant="h4" style={{ color: 'white' }}>
						{concertPresaleCode.venue}
					</Typography>
					<Typography variant="h4" style={{ color: 'white' }}>
						Presale Code: {concertPresaleCode.presale_code}
					</Typography>
					<Link
						href={concertPresaleCode.ticket_link}
						target="_blank"
						rel="noreferrer"
						variant="h4"
						onClick={onLinkClick}
					>
						Ticket Link
					</Link>
				</Box>
			</CardContent>
		</Card>
	);
};
