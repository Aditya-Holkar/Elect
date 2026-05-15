import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageTransition } from '../lib/animation'

export default function NotFound() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <section className="max-w-2xl mx-auto px-4 py-24 text-center">
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="text-6xl font-bold text-primary mb-4"
      >
        404
      </motion.h1>
      <p className="text-xl text-text-muted mb-8">Page not found. The page you're looking for doesn't exist or has been moved.</p>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link to="/" className="inline-block bg-accent hover:bg-accent-light text-dark font-semibold px-6 py-3 rounded-lg transition-all">
          Back to Home
        </Link>
      </motion.div>
    </section>
    </motion.div>
  )
}
