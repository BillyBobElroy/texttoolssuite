import Link from "next/link"
import { Tool } from "@/lib/tools"
import { motion } from "framer-motion"

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 0.4 }} 
    viewport={{ once: true }}
    >      
    <Link href={`/tools/${tool.slug}`}>
      <div className="p-5 border rounded-xl bg-pastel-blue/20 hover:bg-pastel-blue/30 transition shadow-sm cursor-pointer">
        <h3 className="font-semibold text-lg mb-1">{tool.name}</h3>
        <p className="text-sm text-gray-600">{tool.description}</p>
      </div>
    </Link>
    </motion.div>
  )
}
