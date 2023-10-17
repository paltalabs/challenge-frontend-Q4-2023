import MyConnectButton from "@/components/WalletConnectButton";
import useMounted from "@/hooks/useMounted";
import { useSorobanReact } from "@soroban-react/core";

export default function Home() {
  const { address } = useSorobanReact();
  const mounted = useMounted();

  if (!mounted) {
    return null;
  }
  return (
    <main className="flex justify-center pt-24">
      {address ? (
        <div className="flex gap-2">
          <span>Wallet address:</span>
          <span>{address}</span>
        </div>
      ) : (
        <MyConnectButton />
      )}
    </main>
  );
}
