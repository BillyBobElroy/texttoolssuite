"use client"

import { Search } from "lucide-react"

interface SearchBarProps {
  query: string
  onChange: (val: string) => void
}

export default function SearchBar({ query, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full sm:w-[24rem]">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-2 h-4" />
      <input
        type="text"
        placeholder="Search tools..."
        value={query}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border pl-10 pr-4 py-2 rounded-md text-sm bg-white focus:ring-2 focus:ring-black focus:outline-none placeholder-gray-400"
      />
    </div>
  )
}
