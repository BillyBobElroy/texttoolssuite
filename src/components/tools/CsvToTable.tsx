"use client"

import { useState } from "react"
import CopyButton from "@/components/ui/CopyButton"
import ShareButton from "@/components/ui/ShareButton"

function parseCSV(csv: string): string[][] {
  const rows = csv.split(/\r?\n/).filter(Boolean)
  return rows.map(row =>
    row
      .match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g)
      ?.map(cell => cell.replace(/^"|"$/g, "").trim()) || []
  )
}

export default function CsvToTable() {
  const [input, setInput] = useState("")
  const rows = parseCSV(input)

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-40 p-4 border rounded-md text-sm"
        placeholder='Paste CSV like:\n"Name", "Age"\n"Alice", "30"'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex justify-end gap-3">
        <CopyButton value={input} />
        <ShareButton title="CSV to Table" />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border text-sm bg-white">
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="even:bg-gray-50">
                {row.map((cell, j) => (
                  <td key={j} className="border px-3 py-2">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td className="text-center text-gray-500 p-4" colSpan={3}>
                  No data to display
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}