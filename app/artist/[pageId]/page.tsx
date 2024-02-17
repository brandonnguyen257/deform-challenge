'use client'
import { getTestData } from '@/services/database/demo';
import { TestModel } from '@/services/model/TestModel';
import { getCurrentWalletAddress, hasAccessToPage } from '@/services/wallet/WalletService';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const router = usePathname();
  const page_id:number = parseInt(router.split('/').pop() || '', 10);

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const [walletAddress, setWalletAddress] = useState<string|null>();

  const [hasAccess, setHasAccess] = useState<boolean>();
  const [testData, setTestData] = useState<TestModel>();
  const [isPageLoading, setIsPageLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate fetching user authentication status
    const fetchUserStatus = async () => {
      setIsPageLoading(true);
      const walletAddress = await getCurrentWalletAddress();
      setWalletAddress(walletAddress);
      setIsLoggedIn(walletAddress !== null);

      const pageData = await getTestData(page_id);
      setTestData(pageData);

      const hasAccess = await hasAccessToPage(pageData?.token_contract);
      setHasAccess(hasAccess);
      setIsPageLoading(false);
    };

    fetchUserStatus();
  }, []);

  
  if(!isPageLoading && !isLoggedIn) {
    return <div>NOT LOGGED IN</div>
  }
  if(!isPageLoading && !hasAccess) {
    return <div>NO ACCESS</div>
  }
  if(testData === null) {
    return <div>Page does not exist</div>
  }
  if(isPageLoading) {
    return <div>LOADING</div>
  }

  return (
    <div>ARTIST PAGE {JSON.stringify(testData, null, 2)}</div>

  );
};

export default Page;