import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Check } from 'lucide-react'
import { staggerContainer, fadeIn, pageTransition } from '../lib/animation'

export default function Quote() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    toast.success('Quote request submitted! We\'ll contact you within 24 hours.')
  }

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-3xl mx-auto px-4 py-20"
    >
      <motion.div variants={fadeIn} className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Request a Free Quote</h1>
        <p className="text-text-muted">Tell us about your project and we'll get back to you with a detailed estimate within 24 hours.</p>
      </motion.div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 rounded-xl p-12 text-center"
        >
          <Check size={48} className="text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-green-800 mb-2">Quote Request Received!</h2>
          <p className="text-green-700">We'll review your project and contact you within 24 hours.</p>
        </motion.div>
      ) : (
        <motion.form
          variants={staggerContainer}
          onSubmit={handleSubmit}
          className="space-y-4 bg-surface p-8 rounded-xl border border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={fadeIn}>
              <input name="firstName" placeholder="First Name *" required className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent" />
            </motion.div>
            <motion.div variants={fadeIn}>
              <input name="lastName" placeholder="Last Name *" required className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent" />
            </motion.div>
          </div>
          <motion.div variants={fadeIn}>
            <input type="email" name="email" placeholder="Email *" required className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent" />
          </motion.div>
          <motion.div variants={fadeIn}>
            <input type="tel" name="phone" placeholder="Phone *" required className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent" />
          </motion.div>
          <motion.div variants={fadeIn}>
            <select name="serviceType" className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent">
              <option value="">Select Service Type *</option>
              <option>Industrial</option>
              <option>Commercial</option>
              <option>Residential</option>
              <option>Emergency</option>
            </select>
          </motion.div>
          <motion.div variants={fadeIn}>
            <textarea name="description" placeholder="Describe your project *" rows={5} required className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent" />
          </motion.div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-accent hover:bg-accent-light text-dark font-semibold px-6 py-3 rounded-lg text-lg transition-all"
          >
            Submit Request
          </motion.button>
        </motion.form>
      )}
    </motion.section>
    </motion.div>
  )
}
