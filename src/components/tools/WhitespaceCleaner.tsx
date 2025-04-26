"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

export default function WhitespaceCleaner() {
  const [text, setText] = useState("")

  const cleaned = text
    .replace(/\t+/g, " ") // convert tabs to single space
    .replace(/\s{2,}/g, " ") // reduce multiple spaces
    .replace(/^\s+|\s+$/gm, "") // trim leading/trailing on each line

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm"
        placeholder="Paste text with messy spacing..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm bg-gray-50"
        value={cleaned}
        readOnly
      />
        <div className="absolute top-2 right-3 flex gap-3">
          <CopyButton value={cleaned} />
          <ShareButton title="Whitespace Cleaner" />
        </div>
      </div>
  )
}
