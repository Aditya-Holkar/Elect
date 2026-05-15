import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, scaleIn, pageTransition } from '../lib/animation'

const openings = [
  { title: 'Journeyman Electrician', type: 'Full-Time', location: 'City Office', desc: 'Seeking licensed journeyman with 3+ years experience in commercial/industrial settings.' },
  { title: 'Apprentice Electrician', type: 'Full-Time', location: 'City Office', desc: 'Looking for motivated apprentice to join our team. Training and advancement opportunities available.' },
  { title: 'Electrical Estimator', type: 'Full-Time', location: 'Remote/Hybrid', desc: 'Experienced estimator to prepare bids for commercial and industrial projects.' },
]

export default function Careers() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-4xl mx-auto px-4 py-20"
    >
      <motion.div variants={fadeIn}>
        <h1 className="text-4xl font-bold text-primary mb-4">Join Our Team</h1>
        <p className="text-text-muted mb-12 max-w-2xl">At ElectFirm, we're always looking for skilled electricians and support staff who share our commitment to quality and safety.</p>
      </motion.div>
      <motion.div variants={staggerContainer} className="space-y-4">
        {openings.map((job, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            whileHover={{ x: 4 }}
            className="p-6 rounded-xl bg-surface border border-border"
          >
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <h2 className="text-xl font-bold text-primary">{job.title}</h2>
              <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">{job.type}</span>
            </div>
            <p className="text-sm text-text-muted mb-1">{job.location}</p>
            <p className="text-text-muted">{job.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      <p className="mt-8 text-text-muted text-center">No matching position? Email us your resume at careers@electfirm.com</p>
    </motion.section>
    </motion.div>
  )
}
