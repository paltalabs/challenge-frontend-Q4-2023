import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SorobanProvider from "./soroban/SorobanProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Paltalabs Challenge",
  description: "Soroban React library integration challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SorobanProvider>{children}</SorobanProvider>
      </body>
    </html>
  );
}
