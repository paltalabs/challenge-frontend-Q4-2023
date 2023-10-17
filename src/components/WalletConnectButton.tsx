import React from "react";
import { useSorobanReact } from "@soroban-react/core";
import { ConnectButton } from "@soroban-react/connect-button";
import { Button } from "@mui/material";

function MyConnectButton() {
  const sorobanContext = useSorobanReact();
  return (
    <Button variant="contained">
      <ConnectButton
        label="Connect your Wallet"
        sorobanContext={sorobanContext}
      />
    </Button>
  );
}

export default MyConnectButton;
