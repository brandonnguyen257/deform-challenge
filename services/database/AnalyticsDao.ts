import { ArtistPageAnalytics } from '../model/Models';
import { supabase } from './ArtistPageDao';

export const getArtistPageAnalytics = async (pageId: number) => {
    const {data:timesSongLinkClicked, error:timesSongLinkClickedError} = await supabase
        .from('unreleased_music')
        .select('times_song_link_clicked')
        .eq('artist_page_id', pageId)
        .single();
    if(timesSongLinkClickedError){
        console.error(timesSongLinkClickedError);
        return;
    }

    const {data:timesTicketLinkClicked, error:timesTicketLinkClickedError} = await supabase
        .from('concert_presale_code')
        .select('times_ticket_link_clicked')
        .eq('artist_page_id', pageId)
        .single();

    if(timesTicketLinkClickedError){
        console.error(timesTicketLinkClickedError);
        return;
    }

    const analytics: ArtistPageAnalytics = {
        timesSongLinkClicked: timesSongLinkClicked.times_song_link_clicked,
        timesTicketLinkClicked: timesTicketLinkClicked.times_ticket_link_clicked
    }
    return analytics;
}


