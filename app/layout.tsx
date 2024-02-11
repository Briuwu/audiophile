import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/nav/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audiophile",
  description:
    "Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-white-100`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster theme="light" richColors />
      </body>
    </html>
  );
}
