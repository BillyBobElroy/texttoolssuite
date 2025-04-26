"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

function extractNumbers(text: string): string[] {
  const matches = text.match(/-?\d+(\.\d+)?/g)
  return matches || []
}

export default function NumberExtractor() {
  const [input, setInput] = useState("")
  const [asCsv, setAsCsv] = useState(false)

  const numbers = extractNumbers(input)
  const output = asCsv ? numbers.join(", ") : numbers.join("\n")

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm"
        placeholder="Paste text with numbers mixed in..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={asCsv}
            onChange={() => setAsCsv(!asCsv)}
          />
          Output as CSV
        </label>
        <div className="flex gap-3">
          <CopyButton value={output} />
          <ShareButton title="Number Extractor" />
        </div>
      </div>

      <textarea
        value={output}
        readOnly
        className="w-full h-32 p-4 border rounded-md text-sm bg-gray-50 font-mono"
      />
    </div>
  )
}