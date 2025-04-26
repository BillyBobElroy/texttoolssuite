"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

type SplitMode = "lines" | "words" | "chars"

function splitText(text: string, mode: SplitMode): string[] {
  switch (mode) {
    case "lines":
      return text.split(/\r?\n/).filter(Boolean)
    case "words":
      return text.trim().split(/\s+/)
    case "chars":
      return [...text]
    default:
      return []
  }
}

export default function TextSplitter() {
  const [input, setInput] = useState("")
  const [mode, setMode] = useState<SplitMode>("lines")
  const output = splitText(input, mode).join("\n")

  return (
    <div className="space-y-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste text to split..."
        className="w-full h-40 p-4 border rounded-md text-sm"
      />

      <div className="flex justify-between items-center text-sm">
        <div className="flex gap-2">
          <button
            onClick={() => setMode("lines")}
            className={`px-3 py-1 rounded-md border ${
              mode === "lines" ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            Split Lines
          </button>
          <button
            onClick={() => setMode("words")}
            className={`px-3 py-1 rounded-md border ${
              mode === "words" ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            Split Words
          </button>
          <button
            onClick={() => setMode("chars")}
            className={`px-3 py-1 rounded-md border ${
              mode === "chars" ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            Split Chars
          </button>
        </div>

        <div className="flex gap-3">
          <CopyButton value={output} />
          <ShareButton title="Text Splitter" />
        </div>
      </div>

      <textarea
        readOnly
        value={output}
        className="w-full h-40 p-4 border rounded-md text-sm bg-gray-50 font-mono"
      />
    </div>
  )
}