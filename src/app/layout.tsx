import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "./ui/header";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Teeny",
  description: "The Url Shortener",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
