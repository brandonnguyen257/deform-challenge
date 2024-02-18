'use client';

import { ArtistPage } from '@/services/model/Models';
import { Box, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';

interface ArtistPageSectionProps {
	artistPage: ArtistPage;
	setArtistPage: (artistPage: ArtistPage) => void;
}

export const ArtistPageSection: React.FC<ArtistPageSectionProps> = ({
	artistPage,
	setArtistPage
}) => {
	useEffect(() => {
		setArtistPage(artistPage);
	}, [artistPage]);

	const handleInputChange = (key: keyof ArtistPage, value: string) => {
		const updatedArtistPage = { ...artistPage, [key]: value };
		setArtistPage(updatedArtistPage);
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
					Artist Page Section
				</Typography>
				<TextField
					required
					id="outlined-basic"
					label="Token Contract"
					variant="outlined"
					value={artistPage.token_contract}
					onChange={(e) =>
						handleInputChange('token_contract', e.target.value)
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
					sx={{
						'& .MuiOutlinedInput-root': {
							'& fieldset': {
								borderColor: 'white',
								borderWidth: '2px'
							},
							'&:hover fieldset': {
								borderColor: 'white'
							},
							'&.Mui-focused fieldset': {
								borderColor: 'white'
							}
						}
					}}
				/>
				<TextField
					required
					id="outlined-basic"
					label="Artist Page Name"
					variant="outlined"
					value={artistPage.page_name}
					onChange={(e) =>
						handleInputChange('page_name', e.target.value)
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
					sx={{
						'& .MuiOutlinedInput-root': {
							'& fieldset': {
								borderColor: 'white',
								borderWidth: '2px'
							},
							'&:hover fieldset': {
								borderColor: 'white'
							},
							'&.Mui-focused fieldset': {
								borderColor: 'white'
							}
						}
					}}
				/>
			</Box>
		</>
	);
};
