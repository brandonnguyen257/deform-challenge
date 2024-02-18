'use client';
import { Button, ButtonGroup } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
	const router = useRouter();

	return (
		<ButtonGroup
			variant="outlined"
			aria-label="Basic button group"
			sx={{
				position: 'absolute', // Position the ButtonGroup absolutely
				top: 0, // Position it at the top
				left: 0 // Position it at the left
			}}
		>
			<Button onClick={() => router.push('/')}>Home</Button>
			<Button onClick={() => router.push('/artist-gallery')}>
				Gallery
			</Button>
			<Button onClick={() => router.push('/create-page')}>
				Create page
			</Button>
		</ButtonGroup>
	);
}
