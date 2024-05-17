"use client";
import "./globals.css";
import { Roboto } from "next/font/google";
import { TabelaFipeProvider } from "./context/provider";
import Head from "next/head";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>MobiAuto - Descubra o preço do seu carro</title>
        <meta
          name="description"
          content={"Teste técnico para a empresa Mobiauto"}
        />
      </Head>
      <TabelaFipeProvider>
        <html lang="en">
          <body className={roboto.className}>{children}</body>
        </html>
      </TabelaFipeProvider>
    </>
  );
}
