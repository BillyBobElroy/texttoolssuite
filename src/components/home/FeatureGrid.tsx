import { FaTools, FaKeyboard, FaCode, FaSyncAlt } from "react-icons/fa"
import { motion } from "framer-motion"

const features = [
  {
    icon: <FaTools />,
    title: "Simple Text Utilities",
    desc: "Word counter, case converter, line break remover — everything you need for text cleanup."
  },
  {
    icon: <FaKeyboard />,
    title: "Live Feedback",
    desc: "Character counting, formatting previews, and real-time updates as you type."
  },
  {
    icon: <FaCode />,
    title: "Developer-Friendly",
    desc: "Perfect for string prep, JSON formatting, URL encoding, and fast test data cleaning."
  },
  {
    icon: <FaSyncAlt />,
    title: "No Logins, No Delays",
    desc: "Open a tool, paste your text, and get results. No accounts. No loading screens."
  }
]

export default function FeatureGrid() {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
 
    <section className="px-6 py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="bg-white rounded-xl p-5 border text-center shadow-sm">
            <div className="text-3xl mb-3 text-gray-700">{f.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
    </motion.div>
  )
}