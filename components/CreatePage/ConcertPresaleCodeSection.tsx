'use client';

import { ConcertPresaleCode } from '@/services/model/Models';
import { useEffect } from 'react';

interface ConcertPresaleCodeSectionProps {
	concertPresaleCode: ConcertPresaleCode;
	setConcertPresaleCode: (concertPresaleCode: ConcertPresaleCode) => void;
}

export const ConcertPresaleCodeSection: React.FC<
	ConcertPresaleCodeSectionProps
> = ({ concertPresaleCode, setConcertPresaleCode }) => {
	useEffect(() => {
		setConcertPresaleCode(concertPresaleCode);
	}, [concertPresaleCode]);

	const handleInputChange = (
		key: keyof ConcertPresaleCode,
		value: string
	) => {
		const updatedConcertPresaleCode = {
			...concertPresaleCode,
			[key]: value
		};
		setConcertPresaleCode(updatedConcertPresaleCode);
	};

	return (
		<>
			<div>Concert Presale Code Configurations</div>
			<label>
				Presale Code:
				<input
					type="text"
					value={concertPresaleCode.presale_code}
					onChange={(e) =>
						handleInputChange('presale_code', e.target.value)
					}
					style={{ color: 'black' }}
				/>
			</label>
			<br />
			<label>
				Venue:
				<input
					type="text"
					value={concertPresaleCode.venue}
					onChange={(e) => handleInputChange('venue', e.target.value)}
					style={{ color: 'black' }}
				/>
			</label>
			<br />
			<label>
				Ticket Link:
				<input
					type="text"
					value={concertPresaleCode.ticket_link}
					onChange={(e) =>
						handleInputChange('ticket_link', e.target.value)
					}
					style={{ color: 'black' }}
				/>
			</label>
			<br />
		</>
	);
};
