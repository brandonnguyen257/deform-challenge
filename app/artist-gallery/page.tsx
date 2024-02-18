'use client';
import Loading from '@/components/Loading';
import { getAllArtistPages } from '@/services/database/dao';
import { ArtistPage } from '@/services/model/Models';
import Link from 'next/link';
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
		<div>
			{artistPages.map((artistPage) => (
				<div key={artistPage.id}>
					<Link href={`/artist/${artistPage.id}`}>
						Artist: {artistPage.page_name}
					</Link>
				</div>
			))}
		</div>
	);
}
