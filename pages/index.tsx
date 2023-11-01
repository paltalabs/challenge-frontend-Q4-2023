import Head from "next/head";
import { Home as HomeComponent } from "@/components/pages/Home";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wallet Connection</title>
        <meta name="description" content="Challenge frontend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent />
    </>
  );
}
