"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

type ReverseMode = "characters" | "words"

export default function ReverseText() {
  const [text, setText] = useState("")
  const [mode, setMode] = useState<ReverseMode>("characters")

  const reversed =
    mode === "characters"
      ? text.split("").reverse().join("")
      : text.split(" ").reverse().join(" ")

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm"
        placeholder="Paste text to reverse..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex gap-2 text-sm">
        <button
          className={`px-3 py-1 rounded-md border ${
            mode === "characters" ? "bg-black text-white" : "bg-gray-100"
          }`}
          onClick={() => setMode("characters")}
        >
          Reverse Characters
        </button>
        <button
          className={`px-3 py-1 rounded-md border ${
            mode === "words" ? "bg-black text-white" : "bg-gray-100"
          }`}
          onClick={() => setMode("words")}
        >
          Reverse Words
        </button>
      </div>

      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm bg-gray-50"
        value={reversed}
        readOnly
      />
        <div className="absolute top-2 right-3 flex gap-3">
          <CopyButton value={reversed} />
          <ShareButton title="Reverse Text" />
        </div>
      </div>
  )
}