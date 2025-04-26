import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pro Writer Toolkit – Instant Download | Text Tools Suite",
  description: "Unlock premium templates, cheatsheets, and offline access to text utilities. Download the Pro Writer Toolkit and supercharge your workflow.",
  openGraph: {
    title: "Pro Writer Toolkit – Instant Download",
    description: "Unlock premium templates, cheatsheets, and offline access to text utilities. Download now.",
    url: "https://yourdomain.com/toolkit/landing", // ✅ Replace with real domain
    siteName: "Text Tools Suite",
    images: [
      {
        url: "https://yourdomain.com/og-toolkit.png",
        width: 1200,
        height: 630,
        alt: "Pro Writer Toolkit",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Writer Toolkit – Download Now",
    description: "Supercharge your text workflows with premium templates and offline utilities.",
  },
  robots: {
    index: true,
    follow: true,
  },
}
