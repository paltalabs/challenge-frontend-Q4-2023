import SorobanProvider from "@/components/SorobanProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SorobanProvider>
      <Component {...pageProps} />
    </SorobanProvider>
  );
}
