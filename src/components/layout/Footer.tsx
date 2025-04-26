

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 text-sm text-gray-600 space-y-8">

        {/* Bottom Section */}
        <div className="text-center space-y-3">
          {/* Affiliate Disclosure */}
          <p className="text-xs text-gray-400">
            Some links may be affiliate links. We may earn a small commission if you purchase through them.
          </p>

          {/* Tagline + Copyright */}
          <div className="text-sm space-y-1">
            <p className="text-gray-500">Built for creators, devs & students.</p>
            <p className="text-gray-400">© {new Date().getFullYear()} TextToolsSuite.com</p>
          </div>
        </div>

      </div>
    </footer>
  )
}
