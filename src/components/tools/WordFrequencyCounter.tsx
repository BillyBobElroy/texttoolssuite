"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

function getWordFrequencies(text: string): [string, number][] {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/gi, "")
    .split(/\s+/)
    .filter(Boolean)

  const freqMap: Record<string, number> = {}
  for (const word of words) {
    freqMap[word] = (freqMap[word] || 0) + 1
  }

  return Object.entries(freqMap).sort((a, b) => b[1] - a[1])
}

export default function WordFrequencyCounter() {
  const [input, setInput] = useState("")
  const frequencies = getWordFrequencies(input)

  const tableText = frequencies.map(([word, count]) => `${word}: ${count}`).join("\n")

  return (
    <div className="space-y-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste text to analyze..."
        className="w-full h-40 p-4 border rounded-md text-sm"
      />

      <div className="flex justify-end gap-3">
        <CopyButton value={tableText} />
        <ShareButton title="Word Frequency Counter" />
      </div>

      <div className="overflow-x-auto border rounded-md bg-white text-sm font-mono">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Word</th>
              <th className="p-2">Count</th>
            </tr>
          </thead>
          <tbody>
            {frequencies.map(([word, count]) => (
              <tr key={word} className="even:bg-gray-50">
                <td className="p-2">{word}</td>
                <td className="p-2">{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
