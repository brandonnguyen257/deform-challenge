'use client';
import { ArtistCard } from '@/components/ArtistGallery/ArtistCard';
import Loading from '@/components/Loading';
import { getAllArtistPages } from '@/services/database/dao';
import { ArtistPage } from '@/services/model/Models';
import { Container, Grid } from '@mui/material';
import { useEffect, useState } from 'react';

export default function ArtistGallery() {
	const [artistPages, setArtistPages] = useState<ArtistPage[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchArtistPages = async () => {
			const data = await getAllArtistPages();
			setArtistPages(data);
			setIsLoading(false);
		};

		fetchArtistPages();
	}, []);

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Container maxWidth="xl">
			<Grid container spacing={3}>
				{artistPages.map((artist, index) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={index}>
						<ArtistCard artistPage={artist} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
}
