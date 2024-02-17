
import { createClient } from "@/utils/supabase/server";

import Link from "next/link";
import ConnectWallet from "@/components/HomePage/ConnectWallet";
import SessionInformation from "@/components/HomePage/SessionInformation";
import { useState } from "react";


export default async function Index() {
  
  // const canInitSupabaseClient = () => {
  //   // This function is just for the interactive tutorial.
  //   // Feel free to remove it once you have Supabase connected.

  //   try {
  //     createClient();
  //     return true;
  //   } catch (e) {
  //     return false;
  //   }
  // };
  // const isSupabaseConnected = canInitSupabaseClient();


  return (
    
    <div>
    <Link href="/artist-gallery">Artist Gallery</Link>
    <br/>
    <Link href="/create-page">Create Artist Page</Link>
    <br/>
    <br/>
    <br/>
    <ConnectWallet/>
    {/* <div><button id='siweBtn'>Sign-in with Ethereum</button></div> */}
    <SessionInformation/>
    </div>
    
  );
}
