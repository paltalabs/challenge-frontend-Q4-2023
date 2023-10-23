import { useSorobanReact } from "@soroban-react/core";
import Container from "@mui/material/Container";
import ConnectWalletButton from "./ConnectWalletButton";
import WalletAddressLink from "./WalletAddressLink";

export default function WalletInfo() {
  const { address } = useSorobanReact();
  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {address ? (
        <WalletAddressLink>{address}</WalletAddressLink>
      ) : (
        <ConnectWalletButton />
      )}
    </Container>
  );
}
