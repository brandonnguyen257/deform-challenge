'use client';
import { Button, ButtonGroup } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Header() {
	const router = useRouter();
	const buttonStyles = {
		color: 'white',
		borderColor: 'white',

		'&:hover': {
			transform: 'scale(1.05)',
			boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
		},
		transition: 'transform 0.2s ease-in-out, boxShadow 0.2s ease-in-out'
	};

	return (
		<ButtonGroup
			variant="outlined"
			aria-label="Basic button group"
			sx={{
				position: 'absolute',
				top: 0,
				left: 0
			}}
		>
			<Button onClick={() => router.push('/')} sx={buttonStyles}>
				Home
			</Button>
			<Button
				onClick={() => router.push('/artist-gallery')}
				sx={buttonStyles}
			>
				Gallery
			</Button>
			<Button
				onClick={() => router.push('/create-page')}
				sx={buttonStyles}
			>
				Create page
			</Button>
			<Button onClick={() => router.push('/my-pages')} sx={buttonStyles}>
				My Pages
			</Button>
		</ButtonGroup>
	);
}
