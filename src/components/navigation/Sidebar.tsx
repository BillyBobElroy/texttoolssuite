"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { toolTags } from "@/lib/toolTags"
import { tools } from "@/lib/tools"
import { Menu, X } from "lucide-react"

const uniqueTags = Array.from(new Set(Object.values(toolTags).flat()))

export default function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const activeTag = searchParams.get("tag")

  const [isOpen, setIsOpen] = useState(false)

  const handleTagClick = (tag: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    if (tag) {
      params.set("tag", tag)
    } else {
      params.delete("tag")
    }
    router.replace(`${pathname}?${params.toString()}`)
  }

  const filteredTools = tools.filter((tool) =>
    activeTag ? toolTags[tool.slug]?.includes(activeTag) : true
  )

  useEffect(() => {
    const closeOnResize = () => setIsOpen(false)
    window.addEventListener("resize", closeOnResize)
    return () => window.removeEventListener("resize", closeOnResize)
  }, [])

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="sm:hidden px-4 pt-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 transition"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          {isOpen ? "Close" : "Browse Tools"}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? "block" : "hidden"
        } sm:block fixed sm:static top-20 z-40 w-full sm:w-64 bg-white sm:bg-transparent border-r sm:border-none px-6 py-8 text-sm transition-all duration-300`}
      >
        {/* Filter Tags */}
        <div className="space-y-6">
          <div>
            <h2 className="text-base font-semibold text-gray-700 mb-3">Filter by Tag</h2>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleTagClick(null)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                  !activeTag ? "bg-black text-white" : "bg-gray-100 text-gray-700"
                } hover:bg-gray-200 transition`}
              >
                All
              </button>
              {uniqueTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                    activeTag === tag ? "bg-black text-white" : "bg-gray-100 text-gray-700"
                  } hover:bg-gray-200 transition`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Tool List */}
          <div>
            <h3 className="text-base font-semibold text-gray-700 mb-3">All Tools</h3>
            <ul className="space-y-2">
              {filteredTools.map((tool) => {
                const Icon = tool.icon
                return (
                  <li key={tool.slug} className="flex items-center gap-3">
                    {Icon && (
                      <span className="w-5 h-5 text-gray-400 flex items-center justify-center">
                        <Icon />
                      </span>
                    )}
                    <Link
                      href={`/tools/${tool.slug}`}
                      className="text-gray-600 hover:text-black transition font-medium"
                    >
                      {tool.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </aside>
    </>
  )
}