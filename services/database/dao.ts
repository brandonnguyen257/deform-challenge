import { createClient } from "@supabase/supabase-js";
import { ArtistPage, ArtistPageData, UnreleasedMusic } from "../model/Models";

const supabase = createClient(process?.env.NEXT_PUBLIC_SUPABASE_URL || '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '');

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

    const {error: unreleasedMusicError } = await supabase
        .from('unreleased_music')
        .insert({ ...data.unreleasedMusic, artist_page_id: artistPageId.id });

    if (unreleasedMusicError) {
        console.error('Error inserting unreleased music: ', unreleasedMusicError);
        return;
    }

//   // Insert into concert_presale_codes table
  const {error: concertPresaleCodeError } = await supabase
    .from('concert_presale_code')
    .insert({ ...data.concertPresaleCode, artist_page_id: artistPageId.id });

  if (concertPresaleCodeError) {
    console.error('Error inserting concert presale code: ', concertPresaleCodeError);
    return;
  }
  console.log('Data inserted successfully');
}




export const getArtistPage = async (pageId: number) => {
    const { data: pageData, error:getArtistPageError } = await supabase
    .from("artist_page")
    .select()
    .eq('id', pageId)
    .maybeSingle();
    if (getArtistPageError) {
        console.error('Error getArtistPageData: ', getArtistPageError);
        return;
      }
    console.log(pageData);
    return pageData as ArtistPage;
}

export const getArtistPageData = async (pageId: number) => {
    const { data, error } = await supabase
      .from('artist_page')
      .select(`
        *,
        unreleased_music (
          *
        ),
        concert_presale_code (
          *
        )
      `)
      .eq('id', pageId)
      .maybeSingle();
  
    if (error) {
      console.error('Error fetching data: ', error);
      return;
    }
  
    const transformedData:ArtistPageData = {
        artistPage: {
          id: data.id,
          wallet_address: data.wallet_address,
          token_contract: data.token_contract,
          created_at: data.created_at,
        },
        unreleasedMusic: data.unreleased_music,
        concertPresaleCode: data.concert_presale_code,
      };
    
      console.log(transformedData);
      return transformedData;
  }