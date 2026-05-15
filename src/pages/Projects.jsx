import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { staggerContainer, fadeIn, scaleIn, pageTransition } from '../lib/animation'

const projects = [
  { slug: 'industrial-plant-wiring', title: 'Industrial Plant Wiring', category: 'Industrial', desc: 'Complete electrical infrastructure for a large manufacturing facility.' },
  { slug: 'office-building-fitout', title: 'Office Building Fit-Out', category: 'Commercial', desc: 'Full electrical design and installation for a 5-story commercial building.' },
  { slug: 'smart-home-renovation', title: 'Smart Home Renovation', category: 'Residential', desc: 'Home automation, lighting control, and panel upgrade for a modern residence.' },
  { slug: 'warehouse-lighting', title: 'Warehouse LED Upgrade', category: 'Commercial', desc: 'Energy-efficient LED retrofit reducing power consumption by 40%.' },
]

export default function Projects() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-7xl mx-auto px-4 py-20"
    >
      <motion.div variants={fadeIn} className="text-center mb-16">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Projects</h1>
        <p className="text-text-muted max-w-2xl mx-auto">See the quality and craftsmanship we bring to every job — from industrial complexes to cozy homes.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div key={i} variants={scaleIn} whileHover={{ y: -4 }}>
            <Link to={`/projects/${p.slug}`}
              className="group block p-8 rounded-xl bg-surface hover:shadow-lg border border-border transition-all">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">{p.category}</span>
              <h2 className="text-xl font-bold text-primary mt-1 mb-2">{p.title}</h2>
              <p className="text-text-muted text-sm mb-4">{p.desc}</p>
              <span className="text-accent font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                View Project <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
    </motion.div>
  )
}
