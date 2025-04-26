"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

type Mode = "encode" | "decode"

export default function UrlEncoderDecoder() {
  const [text, setText] = useState("")
  const [mode, setMode] = useState<Mode>("encode")

  let output = ""
  try {
    output = mode === "encode" ? encodeURIComponent(text) : decodeURIComponent(text)
  } catch {
    console.error("Encoding/decoding failed");
  }
  

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm"
        placeholder="Paste your URL or string here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex gap-2 text-sm">
        <button
          className={`px-3 py-1 rounded-md border ${
            mode === "encode" ? "bg-black text-white" : "bg-gray-100"
          }`}
          onClick={() => setMode("encode")}
        >
          Encode
        </button>
        <button
          className={`px-3 py-1 rounded-md border ${
            mode === "decode" ? "bg-black text-white" : "bg-gray-100"
          }`}
          onClick={() => setMode("decode")}
        >
          Decode
        </button>
      </div>

      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm bg-gray-50"
        value={output}
        readOnly
      />
        <div className="absolute top-2 right-3 flex gap-3">
          <CopyButton value={output} />
          <ShareButton title="URL Encoder/Decoder" />
        </div>
      </div>
  )
}