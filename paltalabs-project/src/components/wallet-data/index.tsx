'use client'

import React from 'react'
import { useAccount, useIsMounted} from '../../hooks'
import { ConnectButton } from '../connect-button'
import styles from './style.module.css'


export function WalletData() {
  const mounted = useIsMounted()
  const account = useAccount()

  return (
    <>
      {mounted && account ? (
        <div>
          <h2>Display Name:</h2>
          <div className={styles.card}>{account.displayName}</div>
          <h2>Address:</h2>
          <div className={styles.card}>{account.address}</div>
        </div>
      ) : (
        <ConnectButton label="Connect Wallet" />
      )}
    </>
  )
}