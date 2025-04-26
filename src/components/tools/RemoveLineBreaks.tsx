"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

type Mode = "remove" | "to-spaces"

export default function RemoveLineBreaks() {
  const [text, setText] = useState("")
  const [mode, setMode] = useState<Mode>("remove")

  const cleaned = text.replace(/\r?\n/g, mode === "remove" ? "" : " ")

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm"
        placeholder="Paste your text with line breaks..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex gap-2 text-sm">
        <button
          className={`px-3 py-1 rounded-md border ${
            mode === "remove" ? "bg-black text-white" : "bg-gray-100"
          }`}
          onClick={() => setMode("remove")}
        >
          Remove Breaks
        </button>
        <button
          className={`px-3 py-1 rounded-md border ${
            mode === "to-spaces" ? "bg-black text-white" : "bg-gray-100"
          }`}
          onClick={() => setMode("to-spaces")}
        >
          Convert to Spaces
        </button>
      </div>

      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm bg-gray-50"
        value={cleaned}
        readOnly
      />
        <div className="absolute top-2 right-3 flex gap-3">
          <CopyButton value={cleaned} />
          <ShareButton title="Remove Line Breaks" />
        </div>
      </div>
  )
}
