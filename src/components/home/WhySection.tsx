"use client"

import { motion } from "framer-motion"

export default function WhySection() {
  return (
    <motion.section
      className="px-6 py-24 max-w-6xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="space-y-6">
        <h2 className="text-4xl font-extrabold tracking-tight text-black">
          Why Choose Text Tools Suite?
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Lightning-fast, SEO-optimized text utilities designed for writers, developers, and digital creators. Clean, format, and optimize text with no barriers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left text-gray-700 text-base mt-10">
          {/* 1 */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-black">✅ No Signups, No Hassle</h3>
            <p>Start using our text tools instantly — no account creation or credit cards needed. Your time matters.</p>
          </div>

          {/* 2 */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-black">⚡ Blazing Fast Performance</h3>
            <p>All utilities run client-side for immediate results. No servers, no waiting, no limits — just pure speed.</p>
          </div>

          {/* 3 */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-black">🌐 SEO-Optimized Outputs</h3>
            <p>Each tool is crafted with search-friendly metadata and structured formatting to enhance your SEO workflows.</p>
          </div>

          {/* 4 */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-black">📚 Built for Writers, Developers, and Marketers</h3>
            <p>Whether you are preparing clean blog drafts or JSON data, Text Tools Suite fits seamlessly into your productivity stack.</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
