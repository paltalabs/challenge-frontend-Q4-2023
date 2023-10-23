"use client";
import { useSorobanReact } from "@soroban-react/core";
import Button from "@mui/material/Button";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

export default function ConnectWalletButton() {
  const { connect } = useSorobanReact();

  async function handleClick() {
    try {
      await connect();
    } catch (error) {}
  }

  return (
    <Button
      variant="contained"
      startIcon={<AccountBalanceWalletIcon />}
      onClick={handleClick}
    >
      Connect your wallet
    </Button>
  );
}
