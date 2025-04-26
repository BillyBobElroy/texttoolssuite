"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

export default function RemoveDuplicateLines() {
  const [text, setText] = useState("")

  const uniqueLines = Array.from(
    new Set(text.split(/\r?\n/).filter(line => line.trim() !== ""))
  ).join("\n")

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm"
        placeholder="Paste lines of text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm bg-gray-50"
        value={uniqueLines}
        readOnly
      />
        <div className="absolute top-2 right-3 flex gap-3">
          <CopyButton value={uniqueLines} />
          <ShareButton title="Remove Duplicate Lines" />
        </div>
      </div>
  )
}
