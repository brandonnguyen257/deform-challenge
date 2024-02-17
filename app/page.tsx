import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/SignUpUserSteps";
import Header from "@/components/Header";
import Link from "next/link";
import ConnectWallet from "@/components/ConnectWallet";


export default async function Index() {
  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div>
    <Link href="/artist-gallery">Artist Gallery</Link>
    <br/>
    <Link href="/create-page">Create Artist Page</Link>
    <br/>
    <br/>
    <br/>
    <div><ConnectWallet/></div>
    <div><button id='siweBtn'>Sign-in with Ethereum</button></div>
    <div><button id="infoBtn">Get session information</button></div>
      </div>
    
  );
}
