import { useState, useEffect } from 'react'
import { t as dict } from './data/content'
import Header from './components/Header'
import Hero from './components/Hero'
import { Story, Menu, Experience, Gallery, Why } from './components/Sections'
import { Contact, Footer } from './components/Contact'
export default function App() {
  const [lang, setLang] = useState('en'); const t = dict[lang]
  useEffect(() => { document.documentElement.lang = lang }, [lang])
  return (<><a href="#menu" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-cream focus:p-3">Skip to menu</a>
    <Header t={t} lang={lang} setLang={setLang} /><main><Hero t={t} /><Story t={t} /><Menu t={t} lang={lang} /><Experience t={t} />
    <Gallery t={t} lang={lang} /><Why t={t} /><Contact t={t} lang={lang} /></main><Footer t={t} lang={lang} /></>)
}
