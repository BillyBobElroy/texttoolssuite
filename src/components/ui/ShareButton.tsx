"use client"

import { Share } from "lucide-react"

export default function ShareButton({ title }: { title: string }) {
  const handleShare = () => {
    const url = window.location.href
    const shareData = {
      title: title,
      text: `Check out this tool: ${title}`,
      url,
    }

    if (navigator.share) {
      navigator.share(shareData)
    } else {
      navigator.clipboard.writeText(url)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <button
      onClick={handleShare}
      className="text-xs flex items-center gap-1 text-gray-600 hover:text-black transition"
    >
      <Share className="w-4 h-4" />
      Share
    </button>
  )
}