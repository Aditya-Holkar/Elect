import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, Factory, Home, AlertTriangle } from 'lucide-react'
import { staggerContainer, fadeIn, scaleIn, pageTransition } from '../lib/animation'

const services = [
  { slug: 'industrial', icon: Factory, title: 'Industrial', desc: 'Factory wiring, heavy machinery installation, plant maintenance, and industrial automation.' },
  { slug: 'commercial', icon: Building2, title: 'Commercial', desc: 'Office buildings, retail spaces, restaurants, and commercial property electrical systems.' },
  { slug: 'residential', icon: Home, title: 'Residential', desc: 'Home wiring, renovations, smart home installation, and residential panel upgrades.' },
  { slug: 'emergency', icon: AlertTriangle, title: 'Emergency', desc: '24/7 emergency response for power outages, electrical faults, and urgent repairs.' },
]

export default function Services() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-7xl mx-auto px-4 py-20"
    >
      <motion.div variants={fadeIn} className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Services</h1>
        <p className="text-text-muted max-w-2xl mx-auto">Comprehensive electrical solutions for every need — from residential homes to large-scale industrial operations.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <motion.div key={i} variants={scaleIn} whileHover={{ y: -4 }}>
            <Link to={`/services/${s.slug}`}
              className="group block p-8 rounded-xl bg-surface hover:shadow-lg hover:border-accent border border-border transition-all">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors"
              >
                <s.icon className="text-accent" size={32} />
              </motion.div>
              <h2 className="text-2xl font-bold text-primary mb-2">{s.title}</h2>
              <p className="text-text-muted">{s.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
    </motion.div>
  )
}
