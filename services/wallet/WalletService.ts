export const getAccessToPage = async () => {
    try {
      const res = await fetch('/wallet/access');
      return res.json();
    } catch (error) {
      console.error('Error:', error);
    }
};

export const isUserLoggedInWithWallet = (): boolean => {
    return false;
}