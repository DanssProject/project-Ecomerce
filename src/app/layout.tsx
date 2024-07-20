import type { Metadata } from "next";

import "./globals.css";
import Floating from "./Components/Floating";

export const metadata: Metadata = {
  title: "CARTRIDGE KINGS",
  description: "Halaman tes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-slate-100">
        <Floating />
        {children}</body>
    </html>
  );
}
