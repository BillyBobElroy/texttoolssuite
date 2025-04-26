"use client"

import { useSearchParams, usePathname, useRouter } from "next/navigation"

interface TagFilterProps {
  tags: string[]
  onSelect?: (tag: string | null) => void
}

export default function TagFilter({ tags, onSelect }: TagFilterProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const activeTag = searchParams.get("tag")

  const handleClick = (tag: string | null) => {
    // Call external onSelect handler if provided
    if (onSelect) onSelect(tag)

    // Update the URL query param for bookmarking/back button
    const params = new URLSearchParams(searchParams.toString())
    if (tag) {
      params.set("tag", tag)
    } else {
      params.delete("tag")
    }
    router.replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => handleClick(null)}
        className={`px-2 py-1 rounded-md border transition ${
          !activeTag ? "bg-black text-white" : "bg-gray-100 text-gray-700"
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleClick(tag)}
          className={`px-2 py-1 rounded-md border transition ${
            activeTag === tag ? "bg-black text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
