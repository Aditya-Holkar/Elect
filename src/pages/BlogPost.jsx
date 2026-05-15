import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar } from 'lucide-react'
import { pageTransition } from '../lib/animation'

const postContent = {
  'electrical-safety-tips': {
    title: 'Essential Electrical Safety Tips for Homeowners',
    date: '2025-12-01',
    body: 'Electrical safety should be a priority in every home. Here are key tips to keep your family safe:\n\n1. Avoid overloading outlets — Use power strips with built-in surge protection.\n2. Check cords regularly — Replace frayed or damaged cords immediately.\n3. Keep water away — Never use electrical devices near water sources.\n4. Test GFCI outlets — Press the test button monthly to ensure they work.\n5. Know your panel — Label all breakers and know how to shut off power.\n\nWhen in doubt, always call a licensed electrician. Safety first!',
  },
  'energy-efficient-lighting': {
    title: 'How LED Lighting Can Cut Your Energy Bills',
    date: '2025-11-15',
    body: 'LED lighting has revolutionized energy efficiency. Compared to traditional incandescent bulbs, LEDs use up to 75% less energy and last 25 times longer.\n\nFor commercial properties, the savings are even more dramatic. A full LED retrofit can reduce lighting energy costs by 40-60%, with payback periods as short as 1-2 years.\n\nBeyond savings, LEDs produce less heat, are available in various color temperatures, and contain no harmful mercury. It\'s one of the simplest upgrades you can make for both your wallet and the environment.',
  },
  'smart-home-basics': {
    title: 'Smart Home Wiring: What You Need to Know',
    date: '2025-10-20',
    body: 'Thinking about making your home smarter? Here\'s what you should plan for:\n\nNeutral wires: Most smart switches require a neutral wire. If your home was built before the 1980s, you may need an electrician to run new wiring.\n\nLoad capacity: Smart devices add to your electrical load. A panel upgrade may be necessary for extensive automation.\n\nWi-Fi vs. wired: While many devices run on Wi-Fi, wired connections are more reliable for critical systems like security.\n\nPlan ahead: Decide which systems you want to automate — lighting, climate, security, shades — and wire for them now, even if you install later.',
  },
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = postContent[slug]

  if (!post) {
    return (
      <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
        <section className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-accent hover:underline inline-flex items-center gap-1"><ArrowLeft size={16} /> Back to Blog</Link>
        </section>
      </motion.div>
    )
  }

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <article className="max-w-3xl mx-auto px-4 py-20">
        <Link to="/blog" className="text-accent hover:underline inline-flex items-center gap-1 mb-8"><ArrowLeft size={16} /> Back to Blog</Link>
        <div className="flex items-center gap-2 text-sm text-text-muted mb-4">
          <Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
        <h1 className="text-4xl font-bold text-primary mb-6">{post.title}</h1>
        <div className="text-text-muted text-lg leading-relaxed whitespace-pre-line">{post.body}</div>
      </article>
    </motion.div>
  )
}
