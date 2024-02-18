'use client'
import { BrowserProvider } from 'ethers'
import { useState } from 'react'

export default function ConnectWallet() {
  const [connecting, setConnecting] = useState(false)

  const handleClick = async () => {
    if (connecting) {
      console.log('Connection in progress. Please wait.')
      return
    }
    setConnecting(true)

    const provider = new BrowserProvider((window as any).ethereum)

    console.log('Connecting To Wallet')
    await provider
      .send('eth_requestAccounts', [])
      .then(() => setConnecting(false))
      .catch((error) => {
        console.log('user rejected request')
        setConnecting(false)
      })
  }

  return <button onClick={handleClick}>Connect Wallet</button>
}
