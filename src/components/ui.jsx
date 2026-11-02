import { motion } from 'framer-motion'
import { Coffee } from 'lucide-react'
export const Reveal = ({ children, className = '', delay = 0 }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay }}>{children}</motion.div>)
export const Kicker = ({ children }) => <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-terracotta">{children}</p>
export const Placeholder = ({ label, className = '' }) => (
  <div role="img" aria-label={label} className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-beige to-[#d9c3a3] text-roast/70 ${className}`}>
    <Coffee size={28} aria-hidden /><span className="px-3 text-center font-serif text-lg">{label}</span></div>)
export const Img = ({ src, alt, className = '' }) => src
  ? <img src={src} alt={alt} loading="lazy" decoding="async" className={`object-cover transition duration-700 group-hover:scale-105 ${className}`} />
  : <Placeholder label={alt} className={className} />
