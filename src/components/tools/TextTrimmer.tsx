"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

type TrimMode = "block" | "lines" | "words"

function trimText(text: string, mode: TrimMode): string {
  switch (mode) {
    case "block":
      return text.trim()
    case "lines":
      return text
        .split(/\r?\n/)
        .map(line => line.trim())
        .join("\n")
    case "words":
      return text
        .split(/\s+/)
        .map(word => word.trim())
        .join(" ")
    default:
      return text
  }
}

export default function TextTrimmer() {
  const [input, setInput] = useState("")
  const [mode, setMode] = useState<TrimMode>("block")
  const output = trimText(input, mode)

  return (
    <div className="space-y-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste text with extra spaces..."
        className="w-full h-40 p-4 border rounded-md text-sm"
      />

      <div className="flex items-center justify-between">
        <div className="flex gap-2 text-sm">
          <button
            className={`px-3 py-1 rounded-md border ${
              mode === "block" ? "bg-black text-white" : "bg-gray-100"
            }`}
            onClick={() => setMode("block")}
          >
            Trim Block
          </button>
          <button
            className={`px-3 py-1 rounded-md border ${
              mode === "lines" ? "bg-black text-white" : "bg-gray-100"
            }`}
            onClick={() => setMode("lines")}
          >
            Trim Lines
          </button>
          <button
            className={`px-3 py-1 rounded-md border ${
              mode === "words" ? "bg-black text-white" : "bg-gray-100"
            }`}
            onClick={() => setMode("words")}
          >
            Trim Words
          </button>
        </div>

        <div className="flex gap-3">
          <CopyButton value={output} />
          <ShareButton title="Text Trimmer" />
        </div>
      </div>

      <textarea
        value={output}
        readOnly
        className="w-full h-40 p-4 border rounded-md text-sm bg-gray-50"
      />
    </div>
  )
}
