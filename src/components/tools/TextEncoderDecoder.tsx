"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

type Mode = "encode" | "decode"
type Type = "base64" | "uri" | "html"

function convert(text: string, mode: Mode, type: Type): string {
  try {
    if (mode === "encode") {
      switch (type) {
        case "base64": return btoa(text)
        case "uri": return encodeURIComponent(text)
        case "html":
          return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
      }
    } else {
      switch (type) {
        case "base64": return atob(text)
        case "uri": return decodeURIComponent(text)
        case "html": return text // decoding HTML is out of scope for now
      }
    }
  } catch {
    console.error("Encoding/decoding failed");
  }  
  return ""
}

export default function TextEncoderDecoder() {
  const [input, setInput] = useState("")
  const [mode, setMode] = useState<Mode>("encode")
  const [type, setType] = useState<Type>("base64")

  const output = convert(input, mode, type)

  return (
    <div className="space-y-4">
      <textarea
        placeholder="Enter text here..."
        className="w-full h-40 p-4 border rounded-md text-sm"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex flex-wrap gap-2 items-center text-sm">
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value as Mode)}
          className="border px-2 py-1 rounded-md"
        >
          <option value="encode">Encode</option>
          <option value="decode">Decode</option>
        </select>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as Type)}
          className="border px-2 py-1 rounded-md"
        >
          <option value="base64">Base64</option>
          <option value="uri">URI Component</option>
          <option value="html">HTML Entities (encode only)</option>
        </select>

        <div className="ml-auto flex gap-3">
          <CopyButton value={output} />
          <ShareButton title="Text Encoder/Decoder" />
        </div>
      </div>

      <textarea
        value={output}
        readOnly
        className="w-full h-40 p-4 border rounded-md text-sm bg-gray-50 font-mono"
      />
    </div>
  )
}