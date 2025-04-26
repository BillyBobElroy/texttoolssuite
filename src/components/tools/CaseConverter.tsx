"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

type CaseType = "uppercase" | "lowercase" | "titlecase" | "sentencecase"

function convertText(text: string, type: CaseType) {
  switch (type) {
    case "uppercase":
      return text.toUpperCase()
    case "lowercase":
      return text.toLowerCase()
    case "titlecase":
      return text
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    case "sentencecase":
      return text
        .toLowerCase()
        .replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase())
    default:
      return text
  }
}

export default function CaseConverter() {
  const [text, setText] = useState("")
  const [caseType, setCaseType] = useState<CaseType>("lowercase")

  const converted = convertText(text, caseType)

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex flex-wrap gap-2 text-sm">
        {(["uppercase", "lowercase", "titlecase", "sentencecase"] as CaseType[]).map((type) => (
          <button
            key={type}
            className={`px-3 py-1 rounded-md border ${
              caseType === type ? "bg-black text-white" : "bg-gray-100"
            }`}
            onClick={() => setCaseType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="relative">
        <textarea
          className="w-full h-40 p-4 border rounded-md text-sm bg-gray-50"
          value={converted}
          readOnly
        />
        <div className="absolute top-2 right-3 flex gap-3">
          <CopyButton value={converted} />
          <ShareButton title="Case Converter" />
        </div>
      </div>
    </div>
  )
}