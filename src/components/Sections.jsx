import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Coffee, Croissant, Sandwich, Check, X } from 'lucide-react'
import { menu, gallery } from '../data/content'
import { Reveal, Kicker, Img } from './ui'

export function Story({ t }) {
  return (<section id="story" className="mx-auto max-w-4xl px-5 py-24 text-center">
    <Reveal><Kicker>{t.story.k}</Kicker><h2 className="font-serif text-4xl sm:text-5xl">{t.story.h}</h2>
    <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-roast">{t.story.p}</p></Reveal></section>)
}

export function Menu({ t, lang }) {
  const [cat, setCat] = useState('all')
  const cats = ['all', 'coffee', 'bakery', 'sandwiches', 'gastro', 'drinks']
  const items = menu.filter(i => cat === 'all' || i.cat === cat)
  return (<section id="menu" className="bg-beige/50 py-24"><div className="mx-auto max-w-6xl px-5">
    <Reveal><Kicker>{t.menu.k}</Kicker><h2 className="font-serif text-4xl sm:text-5xl">{t.menu.h}</h2></Reveal>
    <div role="tablist" aria-label="Menu categories" className="mt-8 flex flex-wrap gap-2">
      {cats.map(c => <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
        className={`rounded-full border px-4 py-2 text-sm transition ${cat === c ? 'border-espresso bg-espresso text-cream' : 'border-espresso/25 hover:border-terracotta'}`}>{t.cats[c]}</button>)}
    </div>
    <motion.ul layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">{items.map(i => (
        <motion.li layout key={i.en[0]} initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="group overflow-hidden rounded-3xl bg-cream shadow-sm transition hover:shadow-lg">
          <div className="overflow-hidden"><Img src={i.image} alt={i[lang][0]} className="h-48 w-full" /></div>
          <div className="p-5"><div className="flex items-baseline justify-between gap-3">
            <h3 className="font-serif text-2xl">{i[lang][0]}</h3>
            <span className="shrink-0 text-xs text-terracotta">{i.price ?? t.menu.price}</span></div>
            <p className="mt-2 text-sm text-roast">{i[lang][1]}</p></div>
        </motion.li>))}</AnimatePresence></motion.ul>
  </div></section>)
}

export function Experience({ t }) {
  const icons = [Coffee, Croissant, Sandwich]
  return (<section className="mx-auto max-w-6xl px-5 py-24"><Reveal><Kicker>{t.exp.k}</Kicker></Reveal>
    <div className="grid gap-6 md:grid-cols-3">{t.exp.items.map(([, h, p], n) => { const I = icons[n]; return (
      <Reveal key={h} delay={n * .1}><div className="h-full rounded-3xl border border-beige bg-white/50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
        <I className="text-terracotta" size={30} aria-hidden /><h3 className="mt-5 font-serif text-2xl">{h}</h3><p className="mt-3 text-roast">{p}</p></div></Reveal>) })}</div></section>)
}

export function Gallery({ t, lang }) {
  const [sel, setSel] = useState(null)
  useEffect(() => { const k = e => e.key === 'Escape' && setSel(null); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [])
  return (<section id="gallery" className="bg-espresso py-24 text-cream"><div className="mx-auto max-w-6xl px-5">
    <Reveal><Kicker>{t.gal.k}</Kicker><h2 className="font-serif text-4xl sm:text-5xl">{t.gal.h}</h2>
    <p className="mt-2 text-sm text-beige/70">{t.gal.note}</p></Reveal>
    <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">{gallery.map((g, n) => (
      <li key={n} className={n === 0 || n === 5 ? 'md:row-span-2' : ''}><button onClick={() => setSel(g)} className="group block h-full w-full overflow-hidden rounded-2xl">
        <Img src={g.image} alt={g[lang]} className="h-full min-h-44 w-full" /></button></li>))}</ul></div>
    {sel && <div role="dialog" aria-modal="true" aria-label={sel[lang]} onClick={() => setSel(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-6">
      <button autoFocus aria-label={t.gal.close} className="absolute right-5 top-5"><X /></button>
      <div onClick={e => e.stopPropagation()} className="group w-full max-w-3xl overflow-hidden rounded-2xl"><Img src={sel.image} alt={sel[lang]} className="h-[60vh] w-full" /></div></div>}
  </section>)
}

export function Why({ t }) {
  return (<section className="mx-auto max-w-4xl px-5 py-24"><Reveal><Kicker>{t.why.k}</Kicker>
    <ul className="grid gap-4 sm:grid-cols-2">{t.why.items.map(x => <li key={x} className="flex items-center gap-3 font-serif text-2xl"><Check className="shrink-0 text-terracotta" aria-hidden />{x}</li>)}</ul></Reveal></section>)
}
