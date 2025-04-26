"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

function generateSlug(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")                         // handle accents
    .replace(/[\u0300-\u036f]/g, "")         // remove accents
    .replace(/[^a-z0-9\s-]/g, "")            // remove special chars
    .trim()
    .replace(/\s+/g, "-")                    // replace spaces with dash
    .replace(/-+/g, "-")                     // remove duplicate dashes
}

export default function SlugGenerator() {
  const [text, setText] = useState("")
  const slug = generateSlug(text)

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm"
        placeholder="Type or paste a title, sentence, or phrase..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">Slug: <span className="font-mono">{slug}</span></p>
        <div className="flex gap-3">
          <CopyButton value={slug} />
          <ShareButton title="Slug Generator" />
        </div>
      </div>

      <input
        type="text"
        readOnly
        value={slug}
        className="w-full p-4 border rounded-md text-sm bg-gray-50 font-mono"
      />
    </div>
  )
}
