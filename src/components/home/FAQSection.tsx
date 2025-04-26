"use client"

import { motion } from "framer-motion"

const faqs = [
  {
    q: "Are the Text Tools Suite utilities really free to use?",
    a: "Yes! Every tool in the suite is completely free — no sign-up, subscription, or intrusive ads. Just fast, clean text processing.",
  },
  {
    q: "Is Text Tools Suite mobile-friendly?",
    a: "Absolutely. Our site is fully responsive and optimized for phones, tablets, and desktops — perfect for work on the go.",
  },
  {
    q: "Do you store or track any text I enter?",
    a: "No. All text processing happens instantly in your browser. We do not store, track, or send your data anywhere.",
  },
  {
    q: "How often are new text tools added?",
    a: "New tools are added regularly based on user feedback and trending SEO needs. Visit often to see the latest updates!",
  },
]

export default function FAQSection() {
  return (
    <motion.section
      className="px-6 py-24 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-extrabold tracking-tight text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Got questions about using Text Tools Suite? Find quick answers below.
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="space-y-2">
              <h3 className="font-semibold text-lg text-black">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}