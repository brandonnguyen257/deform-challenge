'use client';

import { UnreleasedMusic } from '@/services/model/Models';
import { useEffect } from 'react';

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
			<div>Unreleased Music Configurations</div>
			<label>
				Song Link:
				<input
					type="text"
					value={unreleasedMusic.song_link}
					onChange={(e) =>
						handleInputChange('song_link', e.target.value)
					}
					style={{ color: 'black' }}
				/>
			</label>
			<br />
			<label>
				Song Name:
				<input
					type="text"
					value={unreleasedMusic.song_name}
					onChange={(e) =>
						handleInputChange('song_name', e.target.value)
					}
					style={{ color: 'black' }}
				/>
			</label>
			<br />
		</>
	);
};
