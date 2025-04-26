"use client"

import { useState } from "react"
import { Copy } from "lucide-react"

export default function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <button
      onClick={handleCopy}
      className="text-xs flex items-center gap-1 text-gray-600 hover:text-black transition"
    >
      <Copy className="w-4 h-4" />
      {copied ? "Copied!" : "Copy"}
    </button>
  )
}