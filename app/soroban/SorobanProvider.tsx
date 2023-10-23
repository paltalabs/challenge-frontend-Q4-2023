"use client";
import { SorobanReactProvider } from "@soroban-react/core";
import { testnet } from "@soroban-react/chains";
import { freighter } from "@soroban-react/freighter";
import { ChainMetadata, Connector } from "@soroban-react/types";

type Props = {
  children: React.ReactNode;
};

const chains: ChainMetadata[] = [testnet];
const connectors: Connector[] = [freighter()];

export default function SorobanProvider({ children }: Props) {
  return (
    <SorobanReactProvider
      chains={chains}
      appName={"Paltalabs Challenge"}
      connectors={connectors}
    >
      {children}
    </SorobanReactProvider>
  );
}
