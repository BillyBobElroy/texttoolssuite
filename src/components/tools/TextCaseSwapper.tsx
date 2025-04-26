"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

const formats = ["uppercase", "lowercase", "titlecase", "sentencecase"] as const
type Format = typeof formats[number]

function convert(text: string, format: Format): string {
  switch (format) {
    case "uppercase":
      return text.toUpperCase()
    case "lowercase":
      return text.toLowerCase()
    case "titlecase":
      return text
        .toLowerCase()
        .split(" ")
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    case "sentencecase":
      return text
        .toLowerCase()
        .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase())
    default:
      return text
  }
}

export default function TextCaseSwapper() {
  const [text, setText] = useState("")
  const [formatIndex, setFormatIndex] = useState(0)

  const currentFormat = formats[formatIndex]
  const output = convert(text, currentFormat)

  const cycleFormat = () => {
    setFormatIndex((formatIndex + 1) % formats.length)
  }

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm"
        placeholder="Type or paste text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex items-center justify-between">
        <button
          onClick={cycleFormat}
          className="px-4 py-1 border rounded-md bg-black text-white text-sm"
        >
          Format: {currentFormat}
        </button>

        <div className="flex gap-3">
          <CopyButton value={output} />
          <ShareButton title="Text Case Swapper" />
        </div>
      </div>

      <textarea
        readOnly
        value={output}
        className="w-full h-40 p-4 border rounded-md text-sm bg-gray-50"
      />
    </div>
  )
}
