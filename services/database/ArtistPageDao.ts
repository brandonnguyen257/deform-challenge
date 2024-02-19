import { createClient } from '@supabase/supabase-js';
import { ArtistPage, ArtistPageData } from '../model/Models';

export const supabase = createClient(
	process?.env.NEXT_PUBLIC_SUPABASE_URL || '',
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

//TODO: Create database function to do this in 1 transaction
export const insertArtistPageData = async (data: ArtistPageData) => {
	const { data: artistPageId, error: artistPageError } = await supabase
		.from('artist_page')
		.insert(data.artistPage)
		.select('id')
		.single();

	if (artistPageError) {
		console.error('Error inserting artist page: ', artistPageError);
		return;
	}

	const { error: unreleasedMusicError } = await supabase
		.from('unreleased_music')
		.insert({ ...data.unreleasedMusic, artist_page_id: artistPageId.id });

	if (unreleasedMusicError) {
		console.error(
			'Error inserting unreleased music: ',
			unreleasedMusicError
		);
		return;
	}

	const { error: concertPresaleCodeError } = await supabase
		.from('concert_presale_code')
		.insert({
			...data.concertPresaleCode,
			artist_page_id: artistPageId.id
		});

	if (concertPresaleCodeError) {
		console.error(
			'Error inserting concert presale code: ',
			concertPresaleCodeError
		);
		return;
	}
};

export const getArtistPageData = async (pageId: number) => {
	const { data, error } = await supabase
		.from('artist_page')
		.select(
			`
        *,
        unreleased_music (
          *
        ),
        concert_presale_code (
          *
        )
      `
		)
		.eq('id', pageId)
		.maybeSingle();

	if (error) {
		console.error('Error fetching data: ', error);
		return ;
	}
	//This returns a list, but right now treat it as a 1:1 relationship
	//Omit time clicked columns since that is "private" data for the artist
	const { times_song_link_clicked
		, ...unreleasedMusic } = data.unreleased_music[0];

	
	const { times_ticket_link_clicked
		, ...concertPresaleCode } = data.concert_presale_code[0];

	const transformedData: ArtistPageData = {
		artistPage: {
			id: data.id,
			wallet_address: data.wallet_address,
			token_contract: data.token_contract,
			created_at: data.created_at,
            page_name: data.page_name,
			profile_image: data.profile_image
		},
		unreleasedMusic: unreleasedMusic,
		concertPresaleCode: concertPresaleCode
	};

	return transformedData;
};

export const getAllArtistPages = async () => {
	const { data, error } = await supabase.from('artist_page').select();

	if (error) {
		console.error('Error fetching data: ', error);
		return [];
	}

	return data as ArtistPage[];
};


export const getMyArtistPages = async (walletAddress: string|undefined|null) => {
	const { data, error } = await supabase
	.from('artist_page')
	.select()
	.eq('wallet_address', walletAddress);

	if (error) {
		console.error('Error fetching data: ', error);
		return [];
	}

	return data as ArtistPage[];
}

export const hasAccessToPage = async (walletAddress: string|undefined|null) => {

	const { data, error } = await supabase
	.from('artist_page')
	.select()
	.eq('wallet_address', walletAddress);

	if (error) {
		console.error('Error fetching data: ', error);
	}

}