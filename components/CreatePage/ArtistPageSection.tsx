'use client';

import { ArtistPage } from '@/services/model/Models';
import { Box, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { CreatePageTextFieldSx } from './StylingConfig';

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
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					'& > :not(style)': { m: 1 }
				}}
				noValidate
				autoComplete="off"
			>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						width: '100%'
					}}
				>
					<Typography
						variant="h4"
						component="div"
						sx={{ flexGrow: 1, color: 'white' }}
					>
						Artist Page Section
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-between',
						gap: 2,
						width: '100%'
					}}
				>
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
						sx={{ ...CreatePageTextFieldSx, width: '50%' }}
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
						sx={{ ...CreatePageTextFieldSx, width: '50%' }}
					/>
				</Box>
			</Box>
		</>
	);
};
