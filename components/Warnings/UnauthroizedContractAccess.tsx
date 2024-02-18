import { useEffect, useState } from 'react';
import { getContractMetadata } from '@/services/wallet/WalletService';
import { NftContract } from 'alchemy-sdk';
import {
	Box,
	Button,
	CircularProgress,
	Modal,
	Typography
} from '@mui/material';
import { Warning } from '@mui/icons-material';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useRouter } from 'next/navigation';
import Loading from '../Loading';

interface UnauthorizedContractAccessProps {
	contractToken: string | undefined;
}

export default function UnauthorizedContractAccess({
	contractToken
}: UnauthorizedContractAccessProps) {
	const router = useRouter();

	const [contract, setContract] = useState<NftContract | undefined>();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		async function fetchContract() {
			const contractData: NftContract | undefined =
				await getContractMetadata(contractToken);
			setContract(contractData);
			setIsLoading(false);
		}
		fetchContract();
	}, [contractToken]);

	const onArtistGalleryClick = () => {
		router.push('/artist-gallery');
	};

	if (isLoading) {
		return <Loading />;
	}
	if (!isLoading && !contract) {
		return <p>No contract found</p>;
	}

	return (
		<>
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: 400
				}}
			>
				<Box
					sx={{
						backgroundColor: '#f44336',
						color: 'white',
						padding: 2
					}}
				>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
						sx={{ color: 'black', textAlign: 'center' }}
					>
						<Warning />
						Unauthorized
					</Typography>
				</Box>
				<Typography
					id="modal-modal-description"
					component="h2"
					sx={{ color: 'white', padding: 2, textAlign: 'center' }}
				>
					You must own a {contract?.name} to access this page.
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						paddingTop: 2
					}}
				>
					<Button
						variant="contained"
						onClick={onArtistGalleryClick}
						sx={{
							'&:hover': {
								transform: 'scale(1.1)' // Make the button 10% bigger on hover
							}
						}}
					>
						<ArrowBackIosRoundedIcon />
						Artist Gallery
					</Button>
				</Box>{' '}
			</Box>
		</>
	);
}
