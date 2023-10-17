import React from "react";
import { SorobanReactProvider } from "@soroban-react/core";
import { allowedChains } from "@/soroban/allowedChains";
import { allowedConnectors } from "@/soroban/allowedConnectors";

export default function SorobanProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SorobanReactProvider connectors={allowedConnectors} chains={allowedChains}>
      {children}
    </SorobanReactProvider>
  );
}
