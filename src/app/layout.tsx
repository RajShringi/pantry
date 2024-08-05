import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ItemProvider } from "@/context/ItemContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pantry Tracker",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ItemProvider>
        <body className={inter.className}>{children}</body>
      </ItemProvider>
    </html>
  );
}
