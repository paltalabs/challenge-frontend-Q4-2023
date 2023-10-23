import { Link } from "@mui/material";

type Props = {
  children: string;
};

const explorerUrl = "https://stellar.expert/explorer/testnet/account/";

export default function WalletAddressLink({ children }: Props) {
  return (
    <Link href={explorerUrl + children} underline="always" target="_blank">
      Wallet Address: {children}
    </Link>
  );
}
