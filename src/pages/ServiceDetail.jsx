import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { pageTransition, fadeIn } from '../lib/animation'

const details = {
  industrial: {
    title: 'Industrial Electrical Services',
    body: 'We provide complete industrial electrical solutions including heavy machinery wiring, control panel installation, motor controls, plant automation, and preventive maintenance. Our industrial team is trained for high-voltage systems and complex electrical infrastructure.',
  },
  commercial: {
    title: 'Commercial Electrical Services',
    body: 'From office fit-outs to retail store wiring, our commercial team delivers reliable electrical systems for businesses. Services include lighting design, power distribution, data cabling, fire alarm systems, and energy-efficient upgrades.',
  },
  residential: {
    title: 'Residential Electrical Services',
    body: 'We bring 15 years of residential expertise to your home. Services include new construction wiring, renovations, panel upgrades, surge protection, smart home automation, lighting installation, and troubleshooting.',
  },
  emergency: {
    title: '24/7 Emergency Electrical Services',
    body: 'Electrical emergencies don\'t wait. Our team is on call 24 hours a day, 7 days a week for power outages, sparking outlets, breaker trips, exposed wires, and any urgent electrical issue. Fast response, guaranteed.',
  },
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = details[slug]

  if (!service) {
    return (
      <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
        <section className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Service Not Found</h1>
          <Link to="/services" className="text-accent hover:underline inline-flex items-center gap-1"><ArrowLeft size={16} /> Back to Services</Link>
        </section>
      </motion.div>
    )
  }

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <section className="max-w-3xl mx-auto px-4 py-20">
        <Link to="/services" className="text-accent hover:underline inline-flex items-center gap-1 mb-8"><ArrowLeft size={16} /> Back to Services</Link>
        <motion.h1 variants={fadeIn} className="text-4xl font-bold text-primary mb-6">{service.title}</motion.h1>
        <p className="text-text-muted text-lg leading-relaxed">{service.body}</p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <Link to="/quote" className="inline-block bg-accent hover:bg-accent-light text-dark font-semibold px-6 py-3 rounded-lg transition-all">
            Request This Service
          </Link>
        </motion.div>
      </section>
    </motion.div>
  )
}
