"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

function stripHtml(html: string): string {
  const div = document.createElement("div")
  div.innerHTML = html
  return div.textContent || div.innerText || ""
}

export default function HtmlStripper() {
  const [input, setInput] = useState("")
  const output = stripHtml(input)

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-48 p-4 border rounded-md text-sm font-mono"
        placeholder='<p>Hello <strong>world</strong></p>'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex justify-end gap-3">
        <CopyButton value={output} />
        <ShareButton title="HTML Stripper" />
      </div>

      <textarea
        className="w-full h-48 p-4 border rounded-md text-sm bg-gray-50 font-mono"
        value={output}
        readOnly
      />
    </div>
  )
}