'use client'
import { getAccessToPage } from "@/services/wallet/WalletService";
import { useEffect, useState } from "react";

// const getAccessToPage = async () => {
//     try {
//       const res = await fetch('/wallet/access');
//       return res.json();
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

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
      }, []); // Empty dependency array means this effect runs once on mount

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
          {/* {response && <p>{response.message}</p>} */}
        </div>
      );
}