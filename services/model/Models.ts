export type ArtistPage = {
	id?: number;
	wallet_address: string;
	token_contract: string;
	page_name: string;
	profile_image?: string| null;
	created_at?: Date;
};

export type UnreleasedMusic = {
	id?: number;
	artist_page_id?: number;
	song_name: string;
	song_link: string;
	created_at?: Date;
	times_ticket_link_clicked?: number;
};

export type ConcertPresaleCode = {
	id?: number;
	artist_page_id?: number;
	presale_code: string;
	venue: string;
	ticket_link: string;
	times_ticket_link_clicked?: number;
	created_at?: Date;
};

export type ArtistPageData = {
	artistPage: ArtistPage;
	unreleasedMusic: UnreleasedMusic;
	concertPresaleCode: ConcertPresaleCode;
};
