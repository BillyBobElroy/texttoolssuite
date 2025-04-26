"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

function listToCsv(text: string): string {
  return text
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
    .join(", ")
}

export default function ListToCsv() {
  const [input, setInput] = useState("")
  const output = listToCsv(input)

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm"
        placeholder="Enter one item per line"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex justify-end gap-3">
        <CopyButton value={output} />
        <ShareButton title="List to CSV" />
      </div>

      <textarea
        readOnly
        className="w-full h-20 p-4 border rounded-md text-sm bg-gray-50"
        value={output}
      />
    </div>
  )
}
