import { motion } from 'framer-motion'
import { Shield, Award, Users, Wrench } from 'lucide-react'
import { staggerContainer, fadeIn, scaleIn, pageTransition } from '../lib/animation'

const stats = [
  { icon: Award, value: '15+', label: 'Years Experience' },
  { icon: Users, value: '500+', label: 'Projects Completed' },
  { icon: Shield, value: '100%', label: 'Licensed & Insured' },
  { icon: Wrench, value: '24/7', label: 'Emergency Service' },
]

export default function About() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-4xl mx-auto px-4 py-20"
    >
      <motion.div variants={fadeIn}>
        <h1 className="text-4xl font-bold text-primary mb-6">About ElectFirm</h1>
        <p className="text-text-muted text-lg leading-relaxed mb-8">
          Founded in 2011, ElectFirm has grown from a small family operation into a trusted electrical contractor serving industrial, commercial, and residential clients. Our commitment to quality, safety, and customer satisfaction has made us a preferred partner for projects of all sizes.
        </p>
        <p className="text-text-muted text-lg leading-relaxed mb-12">
          We're proud of our team of licensed electricians who bring expertise, professionalism, and a dedication to excellence on every job. From complex industrial installations to thoughtful home renovations, we treat every project with the same level of care.
        </p>
      </motion.div>
      <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div key={i} variants={scaleIn} className="text-center p-6 rounded-xl bg-surface">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
              <s.icon className="text-accent" size={24} />
            </div>
            <div className="text-2xl font-bold text-primary">{s.value}</div>
            <div className="text-sm text-text-muted">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
    </motion.div>
  )
}
