"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

export default function RegexTools() {
  const [input, setInput] = useState("")
  const [pattern, setPattern] = useState("")
  const [replaceWith, setReplaceWith] = useState("")
  const [useReplace, setUseReplace] = useState(false)

  let result = ""
  let error = ""

  try {
    const regex = new RegExp(pattern, "g")
    result = useReplace
      ? input.replace(regex, replaceWith)
      : input.replace(regex, (match) => `[${match}]`)
  } catch {
    error = "⚠️ Invalid regex pattern"
  }

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-32 p-4 border rounded-md text-sm"
        placeholder="Input text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
        <input
          type="text"
          placeholder="Regex pattern (e.g. \\d+)"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Replacement (optional)"
          value={replaceWith}
          onChange={(e) => setReplaceWith(e.target.value)}
          className="p-2 border rounded-md"
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={useReplace}
            onChange={() => setUseReplace(!useReplace)}
          />
          Apply Replacement
        </label>

        <div className="flex gap-3">
          <CopyButton value={error || result} />
          <ShareButton title="Regex Tester" />
        </div>
      </div>

      <textarea
        readOnly
        value={error || result}
        className="w-full h-40 p-4 border rounded-md text-sm bg-gray-50 font-mono"
      />
    </div>
  )
}
