import React from 'react'
import { setAllowed } from '@stellar/freighter-api'
import styles from './style.module.css'

export interface ConnectButtonProps {
  label: string
  isHigher?: boolean
}

const handleClick = async () => {
  try {
    await setAllowed();
    window.location.reload();
  } catch (error) {
    console.error('Error while executing setAllowed:', error);
  }
};

export function ConnectButton({ label, isHigher }: ConnectButtonProps) {
  return (
    <button
      className={styles.button}
      style={{ height: isHigher ? 50 : 38 }}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}