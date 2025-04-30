import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Text Tools Suite – Free Online Text Utilities",
  description:
    "Access instant text formatting, counting, cleaning, and conversion tools. Built for writers, developers, and digital creators.",
  openGraph: {
    title: "Text Tools Suite",
    description:
      "The ultimate free suite for text cleanup, formatting, and SEO optimization.",
    url: "https://texttoolssuite.com",
    siteName: "Text Tools Suite",
    images: [
      {
        url: "https://texttoolssuite.com/og-default.png",
        width: 1200,
        height: 630,
        alt: "Text Tools Suite",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Tools Suite – Quick, Free Text Utilities",
    description:
      "Instant text formatting and cleanup tools for writers and developers. No sign-up needed.",
  },
  metadataBase: new URL("https://texttoolssuite.com"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white text-black antialiased">
      <body className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen bg-white text-black`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
