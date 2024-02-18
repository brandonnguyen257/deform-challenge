import { ConcertPresaleCode } from '@/services/model/Models';
import { Box, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { CreatePageTextFieldSx } from './StylingConfig';

interface ConcertPresaleCodeSectionProps {
	concertPresaleCode: ConcertPresaleCode;
	setConcertPresaleCode: (concertPresaleCode: ConcertPresaleCode) => void;
}

export const ConcertPresaleCodeSection: React.FC<
	ConcertPresaleCodeSectionProps
> = ({ concertPresaleCode, setConcertPresaleCode }) => {
	useEffect(() => {
		setConcertPresaleCode(concertPresaleCode);
	}, [concertPresaleCode]);

	const handleInputChange = (
		key: keyof ConcertPresaleCode,
		value: string
	) => {
		const updatedConcertPresaleCode = {
			...concertPresaleCode,
			[key]: value
		};
		setConcertPresaleCode(updatedConcertPresaleCode);
	};

	return (
		<>
			<Box
				component="form"
				sx={{
					'& > :not(style)': { m: 1, width: '25ch' }
				}}
				noValidate
				autoComplete="off"
			>
				<Typography
					variant="h4"
					component="div"
					sx={{ flexGrow: 1, color: 'white' }}
				>
					Concert Presale Code Section
				</Typography>
				<TextField
					required
					id="outlined-basic"
					label="Presale Code"
					variant="outlined"
					value={concertPresaleCode.presale_code}
					onChange={(e) =>
						handleInputChange('presale_code', e.target.value)
					}
					InputProps={{
						style: {
							color: 'white'
						}
					}}
					InputLabelProps={{
						style: {
							color: 'white'
						}
					}}
					sx={CreatePageTextFieldSx}
				/>
				<TextField
					required
					id="outlined-basic"
					label="Venue"
					variant="outlined"
					value={concertPresaleCode.venue}
					onChange={(e) => handleInputChange('venue', e.target.value)}
					InputProps={{
						style: {
							color: 'white'
						}
					}}
					InputLabelProps={{
						style: {
							color: 'white'
						}
					}}
					sx={CreatePageTextFieldSx}
				/>
				<TextField
					required
					id="outlined-basic"
					label="Ticket Link"
					variant="outlined"
					value={concertPresaleCode.ticket_link}
					onChange={(e) =>
						handleInputChange('ticket_link', e.target.value)
					}
					InputProps={{
						style: {
							color: 'white'
						}
					}}
					InputLabelProps={{
						style: {
							color: 'white'
						}
					}}
					sx={CreatePageTextFieldSx}
				/>
			</Box>
		</>
	);
};
