import { getContractMetadata } from '@/services/wallet/WalletService'
import { NftContract } from 'alchemy-sdk'

interface UnauthorizedContractAccessProps {
  contractToken: string
}

export default async function UnauthorizedContractAccess({
  contractToken
}: UnauthorizedContractAccessProps) {
  const contract: NftContract = await getContractMetadata(contractToken)
  return (
    <p>You are unauthorized to see this. You must own a {contract.name} NFT</p>
  )
}
