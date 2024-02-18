'use client';
import { getAllArtistPages } from '@/services/database/dao';
import { ArtistPage } from '@/services/model/Models';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ArtistGallery() {
	const [artistPages, setArtistPages] = useState<ArtistPage[]>([]);

	useEffect(() => {
		const fetchArtistPages = async () => {
			const data = await getAllArtistPages();
			setArtistPages(data);
		};

		fetchArtistPages();
	}, []);

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
