// ===== EDIT EVERYTHING HERE =====
export const business = {
  name: 'D’Angelo Caffè & Gastronomia',
  address: 'Via Venti Settembre, 25, 00185 Roma RM, Italy',
  phone: '+39 06 4201 0325', tel: 'tel:+390642010325',
  maps: 'https://maps.app.goo.gl/8QZwMbS8VDhEwkWt9',
  mapEmbed: 'https://maps.google.com/maps?q=41.905499,12.495645&z=16&output=embed',
  email: '', // add the café's verified email to enable the contact form's mailto; otherwise it opens a blank draft
  instagram: null, // add a verified URL — hidden while null
  hours: [ { days: { en: 'Monday–Friday', it: 'Lunedì–Venerdì' }, time: '06:00–15:00' },
           { days: { en: 'Saturday–Sunday', it: 'Sabato–Domenica' }, time: '06:00–14:00' } ],
}
// image: real photo path (e.g. '/img/cornetto.jpg') — null shows a labelled placeholder.
// price: null shows "In café"; set e.g. '€1.40' once verified.
const m = (cat, en, it, d1, d2) => ({ cat, en: [en, d1], it: [it, d2], price: null, image: null })
export const menu = [
  m('coffee','Espresso','Espresso','The classic Italian shot, taken at the bar.','Il classico caffè italiano, al banco.'),
  m('coffee','Cappuccino','Cappuccino','Espresso with steamed milk and velvety foam.','Espresso con latte montato e schiuma vellutata.'),
  m('coffee','Americano','Americano','Espresso lengthened with hot water.','Espresso allungato con acqua calda.'),
  m('coffee','Marocchino','Marocchino','Espresso, cocoa and milk foam in a small glass.','Espresso, cacao e schiuma di latte in bicchierino.'),
  m('bakery','Cornetto','Cornetto','Freshly baked Italian breakfast pastry.','Brioche italiana appena sfornata.'),
  m('bakery','Pistachio Croissant','Croissant al pistacchio','Flaky croissant with pistachio filling.','Croissant sfogliato farcito al pistacchio.'),
  m('bakery','Chocolate Croissant','Croissant al cioccolato','Buttery croissant with chocolate.','Croissant al burro con cioccolato.'),
  m('bakery','Muffins & Cookies','Muffin e biscotti','Sweet bakes for your coffee break.','Dolci da accompagnare al caffè.'),
  m('sandwiches','Panini, your way','Panini su misura','Choose your bread and fresh fillings.','Scegli il pane e i ripieni freschi.'),
  m('gastro','Hot Dishes','Piatti caldi','Freshly prepared lunch dishes.','Piatti pranzo preparati al momento.'),
  m('gastro','Cold Dishes & Salads','Piatti freddi e insalate','Fresh, light lunch options.','Opzioni fresche e leggere per pranzo.'),
  m('drinks','Fresh Orange Juice','Spremuta d’arancia','Freshly squeezed.','Spremuta al momento.'),
]
export const gallery = [
  { en:'Espresso preparation', it:'Preparazione dell’espresso', image:null },
  { en:'Cappuccino and latte art', it:'Cappuccino e latte art', image:null },
  { en:'Pistachio croissants', it:'Croissant al pistacchio', image:null },
  { en:'Fresh Italian sandwiches', it:'Panini italiani freschi', image:null },
  { en:'Pastry counter', it:'Bancone dei dolci', image:null },
  { en:'Café atmosphere', it:'L’atmosfera del caffè', image:null },
]
export const t = {
  en: {
    nav:{home:'Home',story:'Our Story',menu:'Menu',gallery:'Gallery',contact:'Contact'}, visit:'Visit Us',
    hero:{h:'A Taste of Italy, Served with Love.', p:'Authentic Italian coffee, freshly baked pastries and delicious moments in the heart of Rome.', c1:'Explore Our Menu', c2:'Find Our Café'},
    story:{k:'Our Story', h:'A real Italian coffee bar, a table of good food.', p:'D’Angelo is a welcoming caffè and gastronomia in central Rome. Come for a proper espresso at the bar, stay for a fresh cornetto, a made-to-order panino or a hot lunch — the everyday Italian café ritual, done with care.'},
    menu:{k:'Signature Menu', h:'From first espresso to lunch', price:'Price in café'},
    cats:{all:'All', coffee:'Coffee', bakery:'Bakery & Pastries', sandwiches:'Sandwiches', gastro:'Gastronomia', drinks:'Drinks'},
    exp:{k:'The Experience', items:[['Coffee Culture','Italian Coffee Culture','Espresso, cappuccino and marocchino, the way a Roman bar serves them.'],['Fresh Pastries','Freshly Prepared Pastries','Cornetti, pistachio and chocolate croissants, muffins and cookies.'],['Panini','Custom Panini & Gastronomia','Pick your bread and fillings, or choose a hot or cold dish.']]},
    gal:{k:'Gallery', h:'A glimpse of the bar', note:'Placeholder frames — replace with real photographs of the café.', close:'Close'},
    why:{k:'Why Visit', items:['Convenient central Rome location','Authentic Italian coffee-bar experience','Quick breakfast and lunch options','Friendly customer service','Takeaway availability']},
    loc:{k:'Find Us', hours:'Opening hours', verify:'Hours to be confirmed with the café.', dir:'Get Directions', call:'Call'},
    form:{name:'Name', email:'Email', msg:'Message', send:'Send message', errName:'Please enter your name.', errEmail:'Please enter a valid email.', errMsg:'Please write a message (10+ characters).', ok:'Thank you — your email app should open with the message ready to send.'},
    foot:'All rights reserved.'
  },
  it: {
    nav:{home:'Home',story:'La nostra storia',menu:'Menù',gallery:'Galleria',contact:'Contatti'}, visit:'Vieni a trovarci',
    hero:{h:'Un assaggio d’Italia, servito con amore.', p:'Caffè italiano autentico, dolci appena sfornati e momenti deliziosi nel cuore di Roma.', c1:'Scopri il menù', c2:'Trova il caffè'},
    story:{k:'La nostra storia', h:'Un vero bar italiano, una tavola di cose buone.', p:'D’Angelo è un caffè e gastronomia accogliente nel centro di Roma. Vieni per un espresso al banco, resta per un cornetto fresco, un panino su misura o un pranzo caldo: il rito quotidiano del caffè italiano, fatto con cura.'},
    menu:{k:'Menù', h:'Dal primo espresso al pranzo', price:'Prezzo al bar'},
    cats:{all:'Tutti', coffee:'Caffè', bakery:'Pasticceria', sandwiches:'Panini', gastro:'Gastronomia', drinks:'Bevande'},
    exp:{k:'L’esperienza', items:[['Cultura del caffè','Cultura del caffè italiano','Espresso, cappuccino e marocchino, come si servono in un bar romano.'],['Dolci freschi','Dolci freschi','Cornetti, croissant al pistacchio e al cioccolato, muffin e biscotti.'],['Panini','Panini su misura e gastronomia','Scegli pane e ripieni, oppure un piatto caldo o freddo.']]},
    gal:{k:'Galleria', h:'Uno sguardo al bar', note:'Riquadri segnaposto — sostituire con foto reali del locale.', close:'Chiudi'},
    why:{k:'Perché venire', items:['Comoda posizione nel centro di Roma','Autentica esperienza da bar italiano','Colazione e pranzo veloci','Servizio cordiale','Disponibile da asporto']},
    loc:{k:'Dove siamo', hours:'Orari di apertura', verify:'Orari da confermare con il locale.', dir:'Indicazioni', call:'Chiama'},
    form:{name:'Nome', email:'Email', msg:'Messaggio', send:'Invia messaggio', errName:'Inserisci il tuo nome.', errEmail:'Inserisci un’email valida.', errMsg:'Scrivi un messaggio (almeno 10 caratteri).', ok:'Grazie — la tua app email dovrebbe aprirsi con il messaggio pronto.'},
    foot:'Tutti i diritti riservati.'
  }
}
