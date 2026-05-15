import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { pageTransition } from '../lib/animation'

const projectData = {
  'industrial-plant-wiring': { title: 'Industrial Plant Wiring', desc: 'Full electrical infrastructure for a 50,000 sq ft manufacturing plant — including 480V distribution, motor control centers, lighting, and emergency systems. Completed on time and under budget.' },
  'office-building-fitout': { title: 'Office Building Fit-Out', desc: 'Designed and installed complete electrical systems for a 5-story commercial office building. Included power distribution, data cabling, fire alarm, and energy-efficient LED lighting throughout.' },
  'smart-home-renovation': { title: 'Smart Home Renovation', desc: 'Transformed a traditional home into a modern smart home with automated lighting, motorized blinds, smart thermostats, security system, and a full panel upgrade to handle the increased load.' },
  'warehouse-lighting': { title: 'Warehouse LED Upgrade', desc: 'Retrofitted HID lighting with high-bay LED fixtures across a 100,000 sq ft warehouse. Reduced energy consumption by 40% while improving light quality and reducing maintenance costs.' },
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projectData[slug]

  if (!project) {
    return (
      <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
        <section className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-accent hover:underline inline-flex items-center gap-1"><ArrowLeft size={16} /> Back to Projects</Link>
        </section>
      </motion.div>
    )
  }

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <section className="max-w-3xl mx-auto px-4 py-20">
        <Link to="/projects" className="text-accent hover:underline inline-flex items-center gap-1 mb-8"><ArrowLeft size={16} /> Back to Projects</Link>
        <h1 className="text-4xl font-bold text-primary mb-6">{project.title}</h1>
        <p className="text-text-muted text-lg leading-relaxed">{project.desc}</p>
      </section>
    </motion.div>
  )
}
