'use client'
import { getArtistPage, getArtistPageData } from '@/services/database/dao';
import { getTestData } from '@/services/database/demo';
import { ArtistPage, ArtistPageData } from '@/services/model/Models';
import { TestModel } from '@/services/model/TestModel';
import { getCurrentWalletAddress, hasAccessToPage } from '@/services/wallet/WalletService';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const router = usePathname();
  const pageId:number = parseInt(router.split('/').pop() || '', 10);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const [walletAddress, setWalletAddress] = useState<string|null>();

  const [hasAccess, setHasAccess] = useState<boolean>(false);
  const [artistPageData, setArtistPageData] = useState<ArtistPageData|undefined>();
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetching user authentication status
    const fetchUserStatus = async () => {
      setIsPageLoading(true);
      const walletAddress = await getCurrentWalletAddress();
      setWalletAddress(walletAddress);
      setIsLoggedIn(walletAddress !== null);

      const data:ArtistPageData|undefined = await getArtistPageData(pageId);
      setArtistPageData(data);

      const hasAccess = await hasAccessToPage(data?.artistPage.token_contract || '');
      setHasAccess(hasAccess);
      setIsPageLoading(false);
      await getArtistPageData(pageId);
    };

    fetchUserStatus();
  }, []);

  
  if(!isPageLoading && !isLoggedIn) {
    return <div>NOT LOGGED IN</div>
  }
  if(!isPageLoading && !hasAccess) {
    return <div>NO ACCESS</div>
  }
  if(artistPageData === null) {
    return <div>Page does not exist</div>
  }
  if(isPageLoading) {
    return <div>LOADING</div>
  }

  return (
    <div>ARTIST PAGE {JSON.stringify(artistPageData, null, 2)}</div>

  );
};

export default Page;