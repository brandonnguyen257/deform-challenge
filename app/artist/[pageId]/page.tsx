'use client'
import { getCurrentWalletAddress, hasAccessToPage } from '@/services/wallet/WalletService';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const router = usePathname();


  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const [walletAddress, setWalletAddress] = useState<string|null>();

  const [hasAccess, setHasAccess] = useState<boolean>();

  useEffect(() => {
    // Simulate fetching user authentication status
    const fetchUserStatus = async () => {
      // Your logic to determine if user is logged in
      const walletAddress = await getCurrentWalletAddress();
      // Your logic to determine if user has access to page
      const hasAccess = await hasAccessToPage("0xa87D30B1d97523B8AeAA170A57126fa1C1d46196"); // Example: Assume user has access to page

      setWalletAddress(walletAddress);
      setIsLoggedIn(walletAddress !== null);
      setHasAccess(hasAccess);
    };

    fetchUserStatus();
  }, []);
  
  if(!isLoggedIn) {
    return <div>NOT LOGGED IN</div>
  }
  if(!hasAccess) {
    return <div>NO ACCESS</div>
  }
  return (
    <div>ARTIST PAGE</div>

  );
};

export default Page;