import { motion } from 'framer-motion'
import { MapPin, CheckCircle } from 'lucide-react'
import { staggerContainer, fadeIn, scaleIn, pageTransition } from '../lib/animation'

const areas = [
  'Downtown Metro', 'Northside', 'Southside', 'East End', 'West County',
  'Industrial District', 'Suburb North', 'Suburb East', 'Suburb West', 'Rural County',
]

export default function ServiceAreas() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-4xl mx-auto px-4 py-20"
    >
      <motion.div variants={fadeIn}>
        <h1 className="text-4xl font-bold text-primary mb-4">Service Areas</h1>
        <div className="flex items-center gap-2 text-text-muted mb-8"><MapPin size={20} /> We proudly serve the following areas:</div>
      </motion.div>
      <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {areas.map((area, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            className="flex items-center gap-2 p-3 rounded-lg bg-surface border border-border"
          >
            <CheckCircle size={16} className="text-green-500 shrink-0" />
            <span>{area}</span>
          </motion.div>
        ))}
      </motion.div>
      <p className="mt-8 text-text-muted">Not sure if we cover your area? Contact us to check availability.</p>
    </motion.section>
    </motion.div>
  )
}
