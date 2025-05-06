"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { tools } from "@/lib/tools";
import { toolTags } from "@/lib/toolTags";
import { Badge } from "@/components/ui/Badge";
import TagFilter from "@/components/ui/TagFilter";

const uniqueTags = Array.from(new Set(Object.values(toolTags).flat()));

export default function AllToolsClient() {
  const searchParams = useSearchParams();
  const activeTagParam = searchParams.get("tag");
  const [activeTag, setActiveTag] = useState<string | null>(activeTagParam);
  const [query, setQuery] = useState("")

  const filteredTools = tools.filter((tool) => {
    const matchesTag = activeTag ? toolTags[tool.slug]?.includes(activeTag) : true
    const matchesQuery =
      query === "" ||
      tool.name.toLowerCase().includes(query.toLowerCase()) ||
      tool.description.toLowerCase().includes(query.toLowerCase())
  
    return matchesTag && matchesQuery
  })

  const grouped: Record<string, typeof tools> = {};
  for (const tool of filteredTools) {
    const tags = toolTags[tool.slug] || ["Misc"];
    for (const tag of tags) {
      if (!grouped[tag]) grouped[tag] = [];
      grouped[tag].push(tool);
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <TagFilter tags={uniqueTags} onSelect={setActiveTag} />
      </div>

      {Object.entries(grouped).map(([tag, tagTools]) => (
        <div key={tag} className="space-y-6 mt-12">
          <h2 className="text-2xl font-bold text-gray-800">{tag}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tagTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group border rounded-xl p-5 bg-white hover:bg-pastel-blue/20 transition flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-black group-hover:underline underline-offset-4">
                      {tool.name}
                    </span>
                    {Icon && (
                      <span className="w-5 h-5 text-gray-400 flex items-center justify-center">
                        <Icon />
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {tool.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {(toolTags[tool.slug] || []).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}
