"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import SearchBar from "@/components/ui/SearchBar"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [query, setQuery] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tools", label: "All Tools" },
    { href: "/blog", label: "Blog" },
    //{ href: "/random", label: "FAQ" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4 relative">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-black z-20">
          Text Tools Suite
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex absolute left-1/2 -translate-x-1/2 gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-black transition ${
                pathname === link.href ? "text-black underline underline-offset-4" : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <SearchBar query={query} onChange={setQuery} />
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden text-gray-600 hover:text-black transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-t px-6 py-6 space-y-4 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}