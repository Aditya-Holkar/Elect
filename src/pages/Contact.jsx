import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { z } from 'zod/v4'
import { staggerContainer, fadeIn, fadeInLeft, fadeInRight, pageTransition } from '../lib/animation'

const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.email('Invalid email address'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: undefined }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const result = contactSchema.safeParse(form)
    if (!result.success) {
      const fieldErrors = {}
      for (const issue of result.issues) {
        fieldErrors[issue.path[0]] = issue.message
      }
      setErrors(fieldErrors)
      toast.error('Please fix the form errors before submitting.')
      return
    }
    setSubmitted(true)
    toast.success('Message sent successfully! We\'ll get back to you shortly.')
  }

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="max-w-6xl mx-auto px-4 py-20"
    >
      <motion.div variants={fadeIn} className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
        <p className="text-text-muted max-w-xl mx-auto">Have a question or need assistance? Reach out — we're here to help.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div variants={fadeInLeft}>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-xl p-8 text-center"
            >
              <p className="text-green-800 text-lg font-semibold">Thank you! We'll get back to you shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-accent`} />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-accent`} />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>
              <div>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-accent`} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-accent" />
              <div>
                <select name="service" value={form.service} onChange={handleChange} className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-accent`}>
                  <option value="">Select Service</option>
                  <option>Industrial</option>
                  <option>Commercial</option>
                  <option>Residential</option>
                  <option>Emergency</option>
                  <option>Other</option>
                </select>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
              </div>
              <div>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={5} className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-border'} focus:outline-none focus:ring-2 focus:ring-accent`} />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent hover:bg-accent-light text-dark font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>

        <motion.div variants={fadeInRight} className="space-y-6">
          {[
            { icon: Phone, label: 'Phone', value: '(555) 123-4567' },
            { icon: Mail, label: 'Email', value: 'info@electfirm.com' },
            { icon: MapPin, label: 'Address', value: '123 Main St, City, State 12345' },
            { icon: Clock, label: 'Hours', value: 'Mon-Fri: 7am-6pm | 24/7 Emergency' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <item.icon className="text-accent" size={20} />
              </div>
              <div>
                <p className="font-semibold text-primary">{item.label}</p>
                <p className="text-text-muted">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
    </motion.div>
  )
}
