import { tools } from "@/lib/tools"

export async function getToolBySlug(slug: string) {
  return tools.find(t => t.slug === slug) || null
}