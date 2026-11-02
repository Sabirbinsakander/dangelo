import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { business } from '../data/content'
export default function Hero({ t }) {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-center overflow-hidden bg-espresso pt-16 text-cream">
      {/* Replace with a real hero photo: <img src="/img/hero.jpg" className="absolute inset-0 h-full w-full object-cover opacity-50" alt="" /> */}
      <div aria-hidden className="absolute -right-24 top-24 h-96 w-96 rounded-full border border-terracotta/40" />
      <div aria-hidden className="absolute -right-4 top-44 h-64 w-64 rounded-full bg-terracotta/20" />
      <div className="relative mx-auto w-full max-w-6xl px-5">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-5 text-xs uppercase tracking-[0.3em] text-beige">Roma · Via Venti Settembre</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl font-serif text-5xl leading-[1.05] sm:text-7xl">{t.hero.h}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-6 max-w-xl text-lg text-beige">{t.hero.p}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }} className="mt-9 flex flex-wrap gap-3">
          <a href="#menu" className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 font-medium transition hover:bg-[#9c4a30] active:scale-95">{t.hero.c1} <ArrowRight size={18} /></a>
          <a href={business.maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/50 px-7 py-3.5 transition hover:bg-cream hover:text-espresso active:scale-95"><MapPin size={18} /> {t.hero.c2}</a>
        </motion.div>
      </div>
    </section>)
}
