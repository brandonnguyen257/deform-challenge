import { UnreleasedMusic } from '@/services/model/Models';
import { Box, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { CreatePageTextFieldSx } from './StylingConfig';

interface UnreleasedMusicSectionProps {
	unreleasedMusic: UnreleasedMusic;
	setUnreleasedMusic: (unreleasedMusic: UnreleasedMusic) => void;
}

export const UnreleasedMusicSection: React.FC<UnreleasedMusicSectionProps> = ({
	unreleasedMusic,
	setUnreleasedMusic
}) => {
	useEffect(() => {
		setUnreleasedMusic(unreleasedMusic);
	}, [unreleasedMusic]);

	const handleInputChange = (key: keyof UnreleasedMusic, value: string) => {
		const updatedUnreleasedMusic = { ...unreleasedMusic, [key]: value };
		setUnreleasedMusic(updatedUnreleasedMusic);
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
					Unreleased Music Section
				</Typography>
				<TextField
					required
					id="outlined-basic"
					label="Song Name"
					variant="outlined"
					value={unreleasedMusic.song_name}
					onChange={(e) =>
						handleInputChange('song_name', e.target.value)
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
					label="Song Link"
					variant="outlined"
					value={unreleasedMusic.song_link}
					onChange={(e) =>
						handleInputChange('song_link', e.target.value)
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
