'use client'
import UnauthenticatedUserWarning from "@/components/Warnings/UnauthenticatedUserWarning";
import UnauthorizedContractAccess from "@/components/Warnings/UnauthroizedContractAccess";
import { getCurrentWalletAddress, hasAccessToPage } from "@/services/wallet/WalletService";

const DEFORM_TEST_TOKEN_CONTRACT = '0xa87D30B1d97523B8AeAA170A57126fa1C1d46196';
export default async function ArtistPage({
    params
} : {
    params: {pageId: string}}) {

    const walletAddress = getCurrentWalletAddress();

    if (!walletAddress) {
      return <UnauthenticatedUserWarning/>
    }

    const hasAccess = hasAccessToPage(DEFORM_TEST_TOKEN_CONTRACT);
    console.log(hasAccess);
    if (!hasAccess) {
      return <UnauthorizedContractAccess contractToken={DEFORM_TEST_TOKEN_CONTRACT}/>;
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