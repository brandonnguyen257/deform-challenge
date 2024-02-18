'use client';

import { ArtistPage } from '@/services/model/Models';
import { useState, useEffect } from 'react';

interface ArtistPageConfigurationsProps {
	artistPage: ArtistPage;
	setArtistPage: (artistPage: ArtistPage) => void;
}

export const ArtistPageConfigurations: React.FC<
	ArtistPageConfigurationsProps
> = ({ artistPage, setArtistPage }) => {
	//   const [artistPageState, setArtistPageState] = useState(artistPage);

	useEffect(() => {
		setArtistPage(artistPage);
	}, [artistPage]);

	const handleInputChange = (key: keyof ArtistPage, value: string) => {
		const updatedArtistPage = { ...artistPage, [key]: value };
		setArtistPage(updatedArtistPage);
	};

	return (
		<>
			<div>Artist Page Configurations</div>
			<label>
				tokenContract:
				<input
					type="text"
					value={artistPage.token_contract}
					onChange={(e) =>
						handleInputChange('token_contract', e.target.value)
					}
					style={{ color: 'black' }}
				/>
			</label>
			<br />
			<label>
				Artist Page Name:
				<input
					type="text"
					value={artistPage.page_name}
					onChange={(e) =>
						handleInputChange('page_name', e.target.value)
					}
					style={{ color: 'black' }}
				/>
			</label>
			<br />
		</>
	);
};
