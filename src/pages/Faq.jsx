import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { staggerContainer, fadeIn, pageTransition } from '../lib/animation'

const faqs = [
  { q: 'What areas do you serve?', a: 'We serve the entire metropolitan area and surrounding counties. Contact us to confirm coverage for your location.' },
  { q: 'Are you licensed and insured?', a: 'Yes, we are fully licensed, bonded, and insured. We carry general liability and workers compensation insurance.' },
  { q: 'Do you offer emergency services?', a: 'Yes, we provide 24/7 emergency electrical services. Call our emergency line for immediate assistance.' },
  { q: 'How do I get a quote?', a: 'You can request a free quote through our online form, call us, or email us. We typically respond within 24 hours.' },
  { q: 'What types of projects do you handle?', a: 'We handle residential, commercial, and industrial projects of all sizes — from small repairs to large-scale installations.' },
  { q: 'Do you offer warranties on your work?', a: 'Yes, all our work is backed by a satisfaction guarantee and manufacturer warranties on materials used.' },
]

export default function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-3xl mx-auto px-4 py-20"
    >
      <motion.div variants={fadeIn} className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
        <p className="text-text-muted">Have questions? We have answers.</p>
      </motion.div>
      <motion.div variants={staggerContainer} className="space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            className="border border-border rounded-xl overflow-hidden"
          >
            <button onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-primary hover:bg-surface transition-colors">
              {faq.q}
              <motion.div
                animate={{ rotate: open === i ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-text-muted">{faq.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
    </motion.div>
  )
}
