import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { business } from '../data/content'
export default function Header({ t, lang, setLang }) {
  const [open, setOpen] = useState(false)
  const links = [['home','#home'],['story','#story'],['menu','#menu'],['gallery','#gallery'],['contact','#contact']]
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-beige/70 bg-cream/90 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-serif text-2xl font-semibold">D’Angelo <span className="italic text-terracotta">Caffè</span></a>
        <ul className="hidden items-center gap-7 text-sm md:flex">
          {links.map(([k, h]) => <li key={k}><a href={h} className="transition hover:text-terracotta">{t.nav[k]}</a></li>)}
        </ul>
        <div className="flex items-center gap-3">
          <button onClick={() => setLang(lang === 'en' ? 'it' : 'en')} className="rounded-full border border-espresso/30 px-3 py-1 text-xs font-semibold" aria-label="Switch language">{lang === 'en' ? 'IT' : 'EN'}</button>
          <a href={business.maps} target="_blank" rel="noreferrer" className="hidden rounded-full bg-espresso px-5 py-2 text-sm text-cream transition hover:bg-terracotta active:scale-95 sm:block">{t.visit}</a>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {open && <ul className="space-y-1 border-t border-beige bg-cream px-5 py-4 md:hidden">
        {links.map(([k, h]) => <li key={k}><a onClick={() => setOpen(false)} href={h} className="block py-2 font-serif text-xl">{t.nav[k]}</a></li>)}
        <li><a href={business.maps} target="_blank" rel="noreferrer" className="mt-2 block rounded-full bg-espresso py-3 text-center text-cream">{t.visit}</a></li></ul>}
    </header>)
}
