"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\r?\n/g, "<br />")
}

export default function TextToHtml() {
  const [input, setInput] = useState("")
  const output = escapeHtml(input)

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm"
        placeholder="Enter plain text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex justify-end gap-3">
        <CopyButton value={output} />
        <ShareButton title="Text to HTML" />
      </div>

      <textarea
        readOnly
        className="w-full h-40 p-4 border rounded-md text-sm bg-gray-50 font-mono"
        value={output}
      />
    </div>
  )
}