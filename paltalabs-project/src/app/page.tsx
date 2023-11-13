import Image from 'next/image'
import React from 'react'
import styles from './styles/Home.module.css'
import { WalletData } from '@/components/wallet-data'

export default function Home() {
  return (

    <main className={styles.main}>
      <div className={styles.title}>
        <h1>Freighter Wallet</h1>
        <h3 className={styles.description}>by <a className={styles.descriptionLink} href='https://www.linkedin.com/in/benjam%C3%ADn-guiloff-m%C3%BCller-770a8820a/'>Benjamín Guiloff</a></h3>
      </div>
      <WalletData />
    </main>
  )
}
