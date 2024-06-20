import type { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";
import Head from "next/head";
import "./globals.css";

export const metadata: Metadata = {
  title: "PhotoMagic - AI Photo Restoration",
  description:
    "Revive your old, faded photos with PhotoMagic. Our AI-powered tool enhances and restores images, bringing your precious memories back to life in stunning clarity. Start restoring your photos today.",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen grainy-light bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="max-w-6xl mx-auto py-2">
          <Head>
            <title>Photo Restorer</title>
          </Head>
          <Header />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
