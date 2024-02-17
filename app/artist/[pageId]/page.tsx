'use client'
import { getAccessToPage } from "@/services/wallet/WalletService";
import { useEffect, useState } from "react";

export default function ArtistPage({
    params
} : {
    params: {pageId: string}}) {

      const [hasAccess, setHasAccess] = useState(false);


      useEffect(() => {
        const verifyAccess = async () => {
          const res = await getAccessToPage();
          setHasAccess(res.hasAccess);
        };
    
        verifyAccess();
      }, []); 

      //TODO: create a component that takes in NFT contract id and display an unauthorized page
      if (!hasAccess) {
        return <p>You do not have access to this page.</p>;
      }

    const onButtonClick = async () => {
        // const res = await callApi();
        console.log('onButtonClick');
    }

    return (
        <div>
            <h1>Hello Artist Page {params.pageId}</h1>
          <button onClick={onButtonClick}>Call API</button>
        </div>
      );
}