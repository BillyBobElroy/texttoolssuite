"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

type SortMode = "alphabetical" | "length"

export default function TextSorter() {
  const [text, setText] = useState("")
  const [mode, setMode] = useState<SortMode>("alphabetical")

  const sorted = text
    .split(/\r?\n/)
    .filter(line => line.trim() !== "")
    .sort((a, b) =>
      mode === "alphabetical"
        ? a.localeCompare(b)
        : a.length - b.length
    )
    .join("\n")

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm"
        placeholder="Paste lines to sort..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex gap-2 text-sm">
        <button
          className={`px-3 py-1 rounded-md border ${
            mode === "alphabetical" ? "bg-black text-white" : "bg-gray-100"
          }`}
          onClick={() => setMode("alphabetical")}
        >
          Sort A-Z
        </button>
        <button
          className={`px-3 py-1 rounded-md border ${
            mode === "length" ? "bg-black text-white" : "bg-gray-100"
          }`}
          onClick={() => setMode("length")}
        >
          Sort by Length
        </button>
      </div>

      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm bg-gray-50"
        value={sorted}
        readOnly
      />
        <div className="absolute top-2 right-3 flex gap-3">
          <CopyButton value={sorted} />
          <ShareButton title="Text Sorter" />
        </div>
      </div>
  )
}
