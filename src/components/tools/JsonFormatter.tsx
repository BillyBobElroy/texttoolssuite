"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

export default function JsonFormatter() {
  const [input, setInput] = useState("")
  const [mode, setMode] = useState<"pretty" | "compact">("pretty")

  let output = ""
  const error = false;

  try {
    const parsed = JSON.parse(input)
    output = mode === "pretty"
      ? JSON.stringify(parsed, null, 2)
      : JSON.stringify(parsed)
  } catch {
        console.error("JSON formatting failed");
      }

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-48 p-4 border rounded-md text-sm font-mono"
        placeholder='Paste JSON like {"name": "Alice"}'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex items-center justify-between">
        <div className="flex gap-2 text-sm">
          <button
            className={`px-3 py-1 rounded-md border ${
              mode === "pretty" ? "bg-black text-white" : "bg-gray-100"
            }`}
            onClick={() => setMode("pretty")}
          >
            Pretty
          </button>
          <button
            className={`px-3 py-1 rounded-md border ${
              mode === "compact" ? "bg-black text-white" : "bg-gray-100"
            }`}
            onClick={() => setMode("compact")}
          >
            Compact
          </button>
        </div>
        <div className="flex gap-3">
          <CopyButton value={output} />
          <ShareButton title="JSON Formatter" />
        </div>
      </div>

      <textarea
        className="w-full h-48 p-4 border rounded-md text-sm bg-gray-50 font-mono"
        value={error || output}
        readOnly
      />
    </div>
  )
}