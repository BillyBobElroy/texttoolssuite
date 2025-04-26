"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

export default function WordCounter() {
  const [text, setText] = useState("")

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length
  const charCount = text.length
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length
  const readingTime = Math.ceil(wordCount / 200) // 200 wpm

  const outputSummary = `Words: ${wordCount}, Characters: ${charCount}, Sentences: ${sentenceCount}, Reading Time: ${readingTime} min`

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-48 p-4 border rounded-md bg-white text-sm text-gray-800"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div><strong>Words:</strong> {wordCount}</div>
        <div><strong>Characters:</strong> {charCount}</div>
        <div><strong>Sentences:</strong> {sentenceCount}</div>
        <div><strong>Reading Time:</strong> {readingTime} min</div>
      </div>

      <div className="flex justify-end gap-3">
        <CopyButton value={outputSummary} />
        <ShareButton title="Word Counter" />
      </div>
    </div>
  )
}
