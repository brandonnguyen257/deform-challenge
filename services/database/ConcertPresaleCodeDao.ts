import { supabase } from './ArtistPageDao';

//TODO: There is a chance 2 people grab the same value and one count will be missed
//Solution is to create a database function that grabs the value and increments it in 1 transaction
export const incrementTicketLinkClicked = async (id: number|undefined) => {
	const { data: timesClicked, error: timesClickedError } = await supabase
		.from('concert_presale_code')
        .select('times_ticket_link_clicked')
        .eq('id', id)
        .single();

    if(timesClickedError){
        console.error(timesClickedError);
        return;
    }

    const { error } = await supabase
        .from('concert_presale_code')
        .update({times_ticket_link_clicked: timesClicked.times_ticket_link_clicked + 1})
        .eq('id', id);
    if(error){
        console.error(error);
        return;
    }
}