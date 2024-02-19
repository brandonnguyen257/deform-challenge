import { supabase } from "../database/ArtistPageDao";

export const uploadProfileImage = async (file: File, walletAddress:string) => {
    console.log('Uploading profile image...');

    //TODO: unlikely two people will upload at the very same time, ideally we add a UID to this key
    const fileKey = `${walletAddress}_${new Date().getTime()}_profile_image.png`;
    console.log(fileKey);
    const {error } = await supabase
        .storage
        .from('profile_image')
        .upload(fileKey, file, {
            cacheControl: '3600',
            upsert: false
          });

    if (error) {
        console.error('Error uploading profile image: ', error);
        return;
    }

    console.log('getting public url');
    const { data } = await supabase
        .storage
        .from('profile_images')
        .getPublicUrl(fileKey);

  return data.publicUrl;
};