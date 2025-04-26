"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

export default function CharacterCounter() {
  const [text, setText] = useState("")

  const charactersWithSpaces = text.length
  const charactersWithoutSpaces = text.replace(/\s/g, "").length
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length

  const outputSummary = `Chars (with spaces): ${charactersWithSpaces}, Chars (no spaces): ${charactersWithoutSpaces}, Words: ${wordCount}`

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-48 p-4 border rounded-md text-sm"
        placeholder="Type or paste your text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
        <div><strong>Characters (with spaces):</strong> {charactersWithSpaces}</div>
        <div><strong>Characters (no spaces):</strong> {charactersWithoutSpaces}</div>
        <div><strong>Word count:</strong> {wordCount}</div>
      </div>

      <div className="flex justify-end gap-3">
        <CopyButton value={outputSummary} />
        <ShareButton title="Character Counter" />
      </div>
      <div className="mt-4 text-sm text-gray-600 border-t pt-4">
  ✨ Need optimized copy under 150 characters?  
  <a
    href="https://your-affiliate-link"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline hover:text-blue-800"
  >
    Try Jasper AI →
  </a>
</div>
    </div>
  )
}
