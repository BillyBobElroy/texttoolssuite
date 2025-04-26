import { Metadata } from "next"
import HomePageClient from "@/components/home/HomePage"

export const metadata: Metadata = {
  title: "Text Tools Suite – Free Online Text Utilities",
  description:
    "Access a suite of free online text utilities — including word counters, case converters, URL encoders, and more. Perfect for writers, developers, and students.",
  openGraph: {
    title: "Text Tools Suite – Free Online Text Utilities",
    description:
      "Instant text formatting, cleaning, and SEO tools. No login required. Trusted by thousands of creators and developers.",
    url: "https://texttoolssuite.com", // ✅ replace with your real domain
    siteName: "Text Tools Suite",
    images: [
      {
        url: "https://texttoolssuite.com/og-default.png", // ✅ replace with real og-image
        width: 1200,
        height: 630,
        alt: "Text Tools Suite",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Tools Suite – Free Text Utilities",
    description: "Quick online text tools for writers, devs, and students. Word counting, formatting, encoding, and more.",
    images: ["https://texttoolssuite.com/og-default.png"], // ✅ replace with real og-image
  },
  metadataBase: new URL("https://texttoolssuite.com"),
  robots: {
    index: true,
    follow: true,
  },
}

export default function HomePage() {
  return <HomePageClient />
}