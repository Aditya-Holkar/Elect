import { motion } from 'framer-motion'
import { pageTransition, fadeIn } from '../lib/animation'

export default function Privacy() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <section className="max-w-3xl mx-auto px-4 py-20">
      <motion.h1 variants={fadeIn} className="text-4xl font-bold text-primary mb-6">Privacy Policy</motion.h1>
      <div className="text-text-muted space-y-4 leading-relaxed">
        <p>At ElectFirm, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>
        <h2 className="text-xl font-bold text-primary mt-6">Information We Collect</h2>
        <p>We collect information you provide through our contact forms, quote requests, and communication with us — including your name, email, phone number, and project details.</p>
        <h2 className="text-xl font-bold text-primary mt-6">How We Use Your Information</h2>
        <p>We use your information solely to respond to your inquiries, provide quotes, and deliver our services. We do not sell or share your information with third parties for marketing purposes.</p>
        <h2 className="text-xl font-bold text-primary mt-6">Data Security</h2>
        <p>We implement reasonable security measures to protect your personal information. However, no method of electronic storage is 100% secure.</p>
        <h2 className="text-xl font-bold text-primary mt-6">Contact</h2>
        <p>If you have questions about this policy, contact us at privacy@electfirm.com.</p>
        <p className="text-sm text-gray-400 mt-8">Last updated: 2025</p>
      </div>
    </section>
    </motion.div>
  )
}
