"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function ToolkitLandingPage() {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    setLoading(true)
    const res = await fetch("/api/checkout", { method: "POST" })
    const { url } = await res.json()
    window.location.href = url
  }

  return (
    <>
    <Navbar />
    <main className="px-6 py-24 max-w-4xl mx-auto text-center space-y-10">
      <div className="space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-black">
          Download the Pro Writer Toolkit
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Instantly access premium writing templates, expert cheatsheets, and offline versions of our text utilities.
        </p>

        <ul className="text-left space-y-4 text-gray-700 text-base max-w-xl mx-auto">
          <li>✅ 5 premium writing templates</li>
          <li>✅ 5 expert cheatsheets</li>
          <li>✅ Offline text utilities (Word Counter, Case Converter)</li>
          <li>✅ Free updates for 12 months</li>
        </ul>

        <div className="flex justify-center mt-10">
          <Button onClick={handleCheckout} disabled={loading}>
            {loading ? "Redirecting..." : "Buy Now – $9"}
          </Button>
        </div>

        <p className="text-xs text-gray-400 mt-4">
          Instant download after secure checkout.
        </p>
      </div>
    </main>
    <Footer />
    </>
  )
}
