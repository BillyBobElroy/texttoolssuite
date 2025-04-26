"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

export default function TextToMarkdown() {
  const [text, setText] = useState("")

  const convertToMarkdown = (input: string) => {
    return input
      .replace(/^###### (.*$)/gim, "###### $1")
      .replace(/^##### (.*$)/gim, "##### $1")
      .replace(/^#### (.*$)/gim, "#### $1")
      .replace(/^### (.*$)/gim, "### $1")
      .replace(/^## (.*$)/gim, "## $1")
      .replace(/^# (.*$)/gim, "# $1")
      .replace(/\*\*(.*?)\*\*/gim, "**$1**")
      .replace(/\*(.*?)\*/gim, "*$1*")
      .replace(/\[(.*?)\]\((.*?)\)/gim, "[$1]($2)")
      .replace(/^- (.*$)/gim, "- $1")
      .trim()
  }

  const markdown = convertToMarkdown(text)

  return (
    <div className="space-y-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your content here..."
        className="w-full h-40 p-4 border rounded-md text-sm"
      />

      <textarea
        value={markdown}
        readOnly
        className="w-full h-40 p-4 border rounded-md text-sm bg-gray-50"
      />

      <div className="flex justify-end gap-3">
        <CopyButton value={markdown} />
        <ShareButton title="Text to Markdown" />
      </div>
    </div>
  )
}
