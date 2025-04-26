import { Metadata } from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { tools } = await import("@/lib/tools")
  const tool = tools.find((t) => t.slug === params.slug)

  if (!tool) {
    return {
      title: "Tool Not Found | Text Tools Suite",
      description: "This tool does not exist in the Text Tools Suite.",
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  return {
    title: `${tool.name} | Free Online Tool`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} | Text Tools Suite`,
      description: tool.description,
      url: `https://yourdomain.com/tools/${tool.slug}`, // ✅ Replace with your real domain
      siteName: "Text Tools Suite",
      images: [
        {
          url: `https://yourdomain.com/og-default.png`, // ✅ Default or dynamic OG image later
          width: 1200,
          height: 630,
          alt: `${tool.name} | Text Tools Suite`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} | Text Tools Suite`,
      description: tool.description,
      images: [`https://yourdomain.com/og-default.png`], // ✅ Same or custom for Twitter
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}