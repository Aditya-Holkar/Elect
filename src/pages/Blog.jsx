import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import { staggerContainer, fadeIn, scaleIn, pageTransition } from '../lib/animation'

const posts = [
  { slug: 'electrical-safety-tips', title: 'Essential Electrical Safety Tips for Homeowners', date: '2025-12-01', excerpt: 'Learn the top safety practices every homeowner should know to prevent electrical hazards.' },
  { slug: 'energy-efficient-lighting', title: 'How LED Lighting Can Cut Your Energy Bills', date: '2025-11-15', excerpt: 'Discover the financial and environmental benefits of switching to LED lighting.' },
  { slug: 'smart-home-basics', title: 'Smart Home Wiring: What You Need to Know', date: '2025-10-20', excerpt: 'Planning a smart home? Here\'s what you should consider before starting your project.' },
]

export default function Blog() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-4xl mx-auto px-4 py-20"
    >
      <motion.div variants={fadeIn} className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Our Blog</h1>
        <p className="text-text-muted max-w-xl mx-auto">Tips, insights, and industry knowledge from the ElectFirm team.</p>
      </motion.div>
      <motion.div variants={staggerContainer} className="space-y-8">
        {posts.map((post, i) => (
          <motion.article
            key={i}
            variants={scaleIn}
            whileHover={{ y: -3 }}
            className="p-6 rounded-xl bg-surface border border-border hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-2 text-sm text-text-muted mb-2">
              <Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <h2 className="text-xl font-bold text-primary mb-2">{post.title}</h2>
            <p className="text-text-muted mb-4">{post.excerpt}</p>
            <Link to={`/blog/${post.slug}`} className="text-accent font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
              Read More <ArrowRight size={14} />
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
    </motion.div>
  )
}
