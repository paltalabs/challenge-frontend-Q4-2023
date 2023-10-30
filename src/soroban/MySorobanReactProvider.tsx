'use client'
import React from 'react'
import {SorobanReactProvider} from '@soroban-react/core'
import { ChainMetadata } from "@soroban-react/types";
import { freighter } from '@soroban-react/freighter'

const appName = 'Paltalabs test'
const connectorName = "My Allowed Connectors for paltalabs test"
const allowedChains: ChainMetadata[] = [ {
  id: "testnet",
  name: "Testnet",
  networkPassphrase:'Test SDF Network ; September 2015',
},];

const myConnector = 
    {
      ...freighter(),
      appName:appName, 
      chains:allowedChains
    }

export default function MySorobanReactProvider({children}:{children: React.ReactNode}) {
  //this is where the magic happens! here, we create the soroban context to interact with the wallet
  return (
    <SorobanReactProvider
      chains={allowedChains}
      connectors={[myConnector]}
      autoconnect={false}
      appName={appName}
      >
        {children}
    </SorobanReactProvider>
  )
} 