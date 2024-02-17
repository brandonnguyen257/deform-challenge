'use client'
import { getTestData, insertTestData } from "@/services/database/demo";
import { TestModel } from "@/services/model/TestModel";
import { getCurrentWalletAddress } from "@/services/wallet/WalletService";

import { useEffect, useState } from "react";

export default function CreatePage() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
    const [walletAddress, setWalletAddress] = useState<string|null>();

    const [songLink, setSongLink] = useState('');
    const [presaleCode, setPresaleCode] = useState('');
    const [tokenContract, setTokenContract] = useState(''); 
 
    useEffect(() => {
        const fetchUserStatus = async () => {
            const walletAddress = await getCurrentWalletAddress();
            setWalletAddress(walletAddress);
            setIsLoggedIn(walletAddress !== null);
        };

        fetchUserStatus();
    }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // This prevents the page from refreshing when you submit the form
    console.log(await getCurrentWalletAddress());

    const data: TestModel = {
        wallet_address: walletAddress,
        song_link: songLink,
        presale_code: presaleCode,
        token_contract: tokenContract
    };

    console.log("submitting");
    await insertTestData(data);
  };


  if(!isLoggedIn) {
    return <div>NOT LOGGED IN</div>
  }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                songLink:
                <input
                type="text"
                value={songLink}
                style={{ color: 'black' }}

                onChange={(e) => setSongLink(e.target.value)}
                />
            </label>
            <br/>
            <label>
                presaleCode:
                <input
                type="text"
                value={presaleCode}
                style={{ color: 'black' }}

                onChange={(e) => setPresaleCode(e.target.value)}
                />
            </label>
            <br/>
            <label>
                tokenContract: 
                <input
                type="text"
                value={tokenContract}
                onChange={(e) => setTokenContract(e.target.value)} 
                style={{ color: 'black' }}
            
                />
            </label>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}