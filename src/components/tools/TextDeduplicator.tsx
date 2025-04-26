"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

function deduplicateWords(text: string): string {
  const seen = new Set<string>()
  return text
    .split(/\s+/)
    .filter(word => {
      const lower = word.toLowerCase()
      if (seen.has(lower)) return false
      seen.add(lower)
      return true
    })
    .join(" ")
}

export default function TextDeduplicator() {
  const [input, setInput] = useState("")
  const output = deduplicateWords(input)

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm"
        placeholder="Enter text with repeated words..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex justify-end gap-3">
        <CopyButton value={output} />
        <ShareButton title="Text Deduplicator" />
      </div>

      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm bg-gray-50"
        readOnly
        value={output}
      />
    </div>
  )
}
