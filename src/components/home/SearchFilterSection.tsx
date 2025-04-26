"use client"

import { useState } from "react"
import { tools } from "@/lib/tools"
import { toolTags } from "@/lib/toolTags"
import ToolCard from "./ToolCard"
import { motion } from "framer-motion"

export default function SearchFilterSection() {
  const [query, setQuery] = useState("")
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filteredTools = tools.filter((tool) => {
    const matchesQuery = tool.name.toLowerCase().includes(query.toLowerCase()) ||
                         tool.keywords.join(" ").toLowerCase().includes(query.toLowerCase())
    const matchesTag = activeTag ? toolTags[tool.slug]?.includes(activeTag) : true
    return matchesQuery && matchesTag
  })

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
 
    <section className="px-6 py-12 max-w-5xl mx-auto">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search tools..."
          className="w-full sm:w-96 border px-4 py-2 rounded-md"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-8 text-sm">
        {["All", ...Array.from(new Set(Object.values(toolTags).flat()))].map((tag) => (
          <button
            key={tag}
            className={`px-3 py-1 rounded-full border ${
              activeTag === tag || (tag === "All" && !activeTag)
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            onClick={() => setActiveTag(tag === "All" ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      {filteredTools.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No tools found for your search.</p>
      )}
    </section>
    </motion.div>
  )
}