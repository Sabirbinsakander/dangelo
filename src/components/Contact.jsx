import { useState } from 'react'
import { Phone, Navigation, Instagram } from 'lucide-react'
import { business as b } from '../data/content'
import { Reveal, Kicker } from './ui'

export function Contact({ t, lang }) {
  const [v, setV] = useState({ name: '', email: '', msg: '' }), [err, setErr] = useState({}), [ok, setOk] = useState(false)
  const submit = e => {
    e.preventDefault()
    const x = {}
    if (!v.name.trim()) x.name = t.form.errName
    if (!/^\S+@\S+\.\S+$/.test(v.email)) x.email = t.form.errEmail
    if (v.msg.trim().length < 10) x.msg = t.form.errMsg
    setErr(x); setOk(false)
    if (Object.keys(x).length) return
    // No backend: opens the visitor's email app. Swap for Formspree/EmailJS/API later.
    window.location.href = `mailto:${b.email}?subject=${encodeURIComponent('Website message from ' + v.name)}&body=${encodeURIComponent(v.msg + '\n\n' + v.name + ' <' + v.email + '>')}`
    setOk(true)
  }
  const F = ({ id, label, area }) => { const P = area ? 'textarea' : 'input'; return (<div>
    <label htmlFor={id} className="mb-1 block text-sm font-medium">{label}</label>
    <P id={id} rows={area ? 4 : undefined} type={id === 'email' ? 'email' : 'text'} value={v[id === 'message' ? 'msg' : id]} onChange={e => setV({ ...v, [id === 'message' ? 'msg' : id]: e.target.value })}
      aria-invalid={!!err[id === 'message' ? 'msg' : id]} className="w-full rounded-xl border border-espresso/25 bg-white/70 px-4 py-3" />
    {err[id === 'message' ? 'msg' : id] && <p role="alert" className="mt-1 text-sm text-terracotta">{err[id === 'message' ? 'msg' : id]}</p>}</div>) }
  return (<section id="contact" className="bg-beige/50 py-24"><div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2">
    <Reveal><Kicker>{t.loc.k}</Kicker><h2 className="font-serif text-4xl">{b.name}</h2>
      <address className="mt-4 not-italic text-roast">{b.address}</address>
      <h3 className="mt-8 font-serif text-2xl">{t.loc.hours}</h3>
      <dl className="mt-2">{b.hours.map(h => <div key={h.time} className="flex justify-between border-b border-espresso/10 py-2 sm:max-w-sm"><dt>{h.days[lang]}</dt><dd>{h.time}</dd></div>)}</dl>
      <p className="mt-2 text-xs text-roast/70">{t.loc.verify}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={b.tel} className="inline-flex items-center gap-2 rounded-full bg-espresso px-6 py-3 text-cream transition hover:bg-terracotta"><Phone size={18} />{t.loc.call} {b.phone}</a>
        <a href={b.maps} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-espresso px-6 py-3 transition hover:bg-espresso hover:text-cream"><Navigation size={18} />{t.loc.dir}</a>
        {b.instagram && <a href={b.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="rounded-full border border-espresso p-3"><Instagram size={20} /></a>}</div>
      <iframe title="Map" loading="lazy" src={b.mapEmbed} className="mt-8 h-64 w-full rounded-2xl border-0" /></Reveal>
    <Reveal delay={.1}><form onSubmit={submit} noValidate className="space-y-4 rounded-3xl bg-cream p-8 shadow-sm">
      <F id="name" label={t.form.name} /><F id="email" label={t.form.email} /><F id="message" label={t.form.msg} area />
      <button className="rounded-full bg-terracotta px-7 py-3 font-medium text-cream transition hover:bg-[#9c4a30] active:scale-95">{t.form.send}</button>
      {ok && <p role="status" className="text-sm text-roast">{t.form.ok}</p>}</form></Reveal>
  </div></section>)
}

export function Footer({ t, lang }) {
  return (<footer className="bg-espresso py-12 text-sm text-beige"><div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3">
    <div><p className="font-serif text-2xl text-cream">D’Angelo <span className="italic text-terracotta">Caffè</span></p><p className="mt-2">& Gastronomia</p></div>
    <div><p>{b.address}</p><p className="mt-1"><a href={b.tel} className="hover:text-cream">{b.phone}</a></p>
      {b.hours.map(h => <p key={h.time}>{h.days[lang]}: {h.time}</p>)}
      {b.instagram && <a href={b.instagram} className="mt-1 inline-block hover:text-cream">Instagram</a>}</div>
    <ul>{['home','story','menu','gallery','contact'].map(k => <li key={k}><a className="hover:text-cream" href={'#' + (k)}>{t.nav[k]}</a></li>)}</ul>
    <p className="md:col-span-3">© {new Date().getFullYear()} {b.name}. {t.foot}</p></div></footer>)
}
