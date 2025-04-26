"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-black text-white px-6 py-24 text-center"
    >
      <div className="space-y-8 max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold tracking-tight leading-tight">
          Boost Your Workflow with One-Click Text Tools
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Access free online text utilities for writers, developers, and creators — or upgrade with the Pro Toolkit for powerful offline use.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/tools"
            className="bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition text-sm"
          >
            Browse Free Tools
          </Link>
          <Link
            href="/toolkit/landing"
            className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition text-sm"
          >
            Download Pro Toolkit
          </Link>
        </div>
      </div>
    </motion.section>
  )
}