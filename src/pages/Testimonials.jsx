import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { staggerContainer, fadeIn, scaleIn, pageTransition } from '../lib/animation'

const testimonials = [
  { name: 'John D.', role: 'Plant Manager', text: 'ElectFirm handled our entire plant rewiring. Professional, safe, and completed ahead of schedule. Highly recommend.' },
  { name: 'Sarah M.', role: 'Office Manager', text: 'We use ElectFirm for all our commercial properties. Reliable, responsive, and their team is always professional.' },
  { name: 'Mike R.', role: 'Homeowner', text: 'Great experience from quote to completion. They upgraded our panel and installed smart lighting. Fair prices and excellent work.' },
  { name: 'Lisa K.', role: 'Restaurant Owner', text: 'Emergency call at 11 PM — they were here within 30 minutes and had us back up and running. Lifesavers!' },
]

export default function Testimonials() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-6xl mx-auto px-4 py-20"
    >
      <motion.div variants={fadeIn} className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">What Our Clients Say</h1>
        <p className="text-text-muted max-w-xl mx-auto">Don't take our word for it — hear from the people we've served.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            whileHover={{ y: -4 }}
            className="p-8 rounded-xl bg-surface border border-border relative"
          >
            <Quote className="text-accent/20 absolute top-4 right-4" size={48} />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => <Star key={j} size={16} className="text-accent fill-accent" />)}
            </div>
            <p className="text-text-muted mb-6 relative z-10">"{t.text}"</p>
            <div>
              <p className="font-bold text-primary">{t.name}</p>
              <p className="text-sm text-text-muted">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
    </motion.div>
  )
}
