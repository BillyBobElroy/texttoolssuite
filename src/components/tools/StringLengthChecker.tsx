"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

export default function StringLengthChecker() {
  const [input, setInput] = useState("")
  const [limit, setLimit] = useState(100)

  const lines = input.split(/\r?\n/)
  const markedLines = lines.map((line, i) => ({
    line,
    length: line.length,
    exceeds: line.length > limit,
    id: i,
  }))

  return (
    <div className="space-y-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste or write lines to measure..."
        className="w-full h-40 p-4 border rounded-md text-sm"
      />

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          Max Length:
          <input
            type="number"
            value={limit}
            onChange={(e) => setLimit(parseInt(e.target.value))}
            className="w-20 px-2 py-1 border rounded-md text-right"
          />
        </label>

        <div className="flex gap-3">
          <CopyButton value={input} />
          <ShareButton title="String Length Checker" />
        </div>
      </div>

      <div className="text-sm font-mono border rounded-md bg-white overflow-x-auto">
        {markedLines.map(({ line, length, exceeds, id }) => (
          <div
            key={id}
            className={`flex justify-between px-4 py-2 border-b ${
              exceeds ? "bg-red-50 text-red-600" : "bg-gray-50"
            }`}
          >
            <span className="truncate max-w-[80%]">{line || "␣"}</span>
            <span className="text-right">{length}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
