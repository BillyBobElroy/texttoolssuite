"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

const defaultSafe = ["-", "_", "."]

function buildRegex(safe: string[]): RegExp {
  const escaped = safe.map((c) => `\\${c}`).join("")
  return new RegExp(`[^a-zA-Z0-9${escaped}]`, "g")
}

function removeSymbols(text: string, safeChars: string[]): string {
  const regex = buildRegex(safeChars)
  return text.replace(regex, "")
}

export default function SymbolRemover() {
  const [input, setInput] = useState("")
  const [safe, setSafe] = useState(defaultSafe)

  const output = removeSymbols(input, safe)

  const toggleSafe = (char: string) => {
    setSafe((prev) =>
      prev.includes(char) ? prev.filter((c) => c !== char) : [...prev, char]
    )
  }

  return (
    <div className="space-y-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste text with special characters..."
        className="w-full h-40 p-4 border rounded-md text-sm"
      />

      <div className="flex flex-wrap gap-2 text-sm">
        <span className="text-gray-600">Keep:</span>
        {["-", "_", ".", "@", ":", "/"].map((char) => (
          <button
            key={char}
            onClick={() => toggleSafe(char)}
            className={`px-2 py-1 border rounded-md ${
              safe.includes(char) ? "bg-black text-white" : "bg-gray-100"
            }`}
          >
            {char}
          </button>
        ))}
      </div>

      <div className="flex justify-end gap-3">
        <CopyButton value={output} />
        <ShareButton title="Symbol Remover" />
      </div>

      <textarea
        value={output}
        readOnly
        className="w-full h-40 p-4 border rounded-md text-sm bg-gray-50"
      />
    </div>
  )
}