import UnauthenticatedUserWarning from "@/components/UnauthenticatedUserWarning";
import { isUserLoggedInWithWallet } from "@/services/wallet/WalletService";

export default function CreatePage() {
    if (!isUserLoggedInWithWallet()) {
        return <UnauthenticatedUserWarning/>
    }
    
    return <h1>Hello Create Page</h1>
}