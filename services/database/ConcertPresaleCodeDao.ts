import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
	process?.env.NEXT_PUBLIC_SUPABASE_URL || '',
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

//TODO: There is a chance 2 people grab the same value and one count will be missed
//Solution is to create a database function that grabs the value and increments it in 1 transaction
export const incrementTicketLinkClicked = async (id: number|undefined) => {
	const { data: timesClicked, error: artistPageError } = await supabase
		.from('concert_presale_code')
        .select('times_ticket_link_clicked')
        .eq('id', id)
        .single();

    if(artistPageError){
        console.log(artistPageError);
        return;
    }

    const { error } = await supabase
        .from('concert_presale_code')
        .update({times_ticket_link_clicked: timesClicked.times_ticket_link_clicked + 1})
        .eq('id', id);
    if(error){
        console.log(error);
        return;
    }
}