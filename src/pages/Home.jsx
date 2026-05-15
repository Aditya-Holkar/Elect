import { useEffect, useRef, lazy } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ArrowRight, Zap, Shield, Clock, Users } from 'lucide-react'
import { staggerContainer, fadeIn, fadeInLeft, fadeInRight, scaleIn, pageTransition } from '../lib/animation'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Scene3D = lazy(() => import('../components/Scene3D'))

const features = [
  { icon: Zap, title: '15 Years Experience', desc: 'Serving industrial, commercial, and residential clients since 2011.' },
  { icon: Shield, title: 'Licensed & Insured', desc: 'Fully certified electricians with comprehensive insurance coverage.' },
  { icon: Clock, title: '24/7 Emergency Service', desc: 'Round-the-clock emergency response for urgent electrical needs.' },
  { icon: Users, title: 'Expert Team', desc: 'Skilled professionals dedicated to quality and safety.' },
]

export default function Home() {
  const heroRef = useRef(null)
  const featuresRef = useScrollReveal()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.7, ease: 'power3.out' } })
      tl.fromTo(heroRef.current.querySelector('.hero-title'),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1 }
      )
      tl.fromTo(heroRef.current.querySelector('.hero-sub'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1 },
        '-=0.3'
      )
      tl.fromTo(heroRef.current.querySelectorAll('.hero-btn'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15 },
        '-=0.2'
      )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <section ref={heroRef} className="relative bg-gradient-to-br from-primary to-primary-light text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="hero-title text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Powering Your World<br />
            <span className="text-accent">for 15 Years & Counting</span>
          </h1>
          <p className="hero-sub text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Industrial · Commercial · Residential — trusted electrical services backed by a decade and a half of expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote" className="hero-btn bg-accent hover:bg-accent-light text-dark font-semibold px-8 py-3 rounded-lg text-lg transition-all">
              Get a Free Quote
            </Link>
            <Link to="/services" className="hero-btn border-2 border-white hover:bg-white hover:text-primary font-semibold px-8 py-3 rounded-lg text-lg transition-all">
              Our Services
            </Link>
          </div>
        </div>
        <div className="hidden lg:block h-96 w-full">
          <Scene3D />
        </div>
      </section>

      <motion.section
        ref={featuresRef}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="max-w-7xl mx-auto px-4 py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div key={i} variants={scaleIn} className="text-center p-6 rounded-xl bg-surface hover:shadow-lg transition-shadow">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center"
              >
                <f.icon className="text-accent" size={28} />
              </motion.div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-text-muted text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-accent py-16"
      >
        <motion.div variants={fadeIn} className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg text-dark/80 mb-6">Contact us today for a free consultation and estimate.</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-dark text-white hover:bg-dark/80 font-semibold px-8 py-3 rounded-lg text-lg transition-all">
              Get in Touch <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  )
}
