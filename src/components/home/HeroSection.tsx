"use client"

import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <motion.section
      className="relative px-6 py-24 text-center max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Optional subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-pastel-blue/20 to-transparent pointer-events-none"></div>

      <div className="relative z-10 space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-black leading-tight drop-shadow-sm">
          Free Online Text Tools for Writers, Coders & Creators
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Instantly clean, convert, count, and format your text with one-click utilities. No login, no clutter — just pure productivity.
        </p>
      </div>
    </motion.section>
  )
}
