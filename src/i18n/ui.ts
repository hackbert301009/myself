// ─────────────────────────────────────────────────────────────
// i18n dictionary. Add a key here once, reference via t(lang, key).
// Content items (projects) carry their own DE/EN fields.
// ─────────────────────────────────────────────────────────────

export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

export const ui = {
  de: {
    // Navigation
    'nav.home': 'Start',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Kontakt',

    // Hero
    'hero.role': 'AI & Computer-Vision Engineer',
    'hero.title.1': 'Ich bringe Maschinen',
    'hero.title.2': 'das Sehen bei.',
    'hero.lead':
      'Von medizinischer Bildverarbeitung über neuronale Netze bis hin zu Embedded-Systemen — ich baue intelligente Systeme, die in der realen Welt funktionieren.',
    'hero.cta.work': 'Projekte ansehen',
    'hero.cta.contact': 'Kontakt aufnehmen',
    'hero.status': 'Verfügbar für Projekte',

    // About
    'about.label': 'Über mich',
    'about.title': 'Mathematik, Modelle und Maschinen.',
    'about.p1':
      'Ich bin Albert Heruth — ich verbinde angewandte Mathematik mit praktischem Engineering. Mein Schwerpunkt liegt auf Computer Vision und maschinellem Lernen, von der Idee bis zum lauffähigen System auf echter Hardware.',
    'about.p2':
      'Neben meiner Arbeit an Automatisierung und Kamerainspektion entwickle ich eigene CV-Modelle, Embedded-Prototypen und Tools — am liebsten dort, wo Hardware auf intelligente Software trifft.',
    'about.skills': 'Kernkompetenzen',
    'about.philosophy': 'Meine Philosophie',
    'about.philosophy.p':
      'Ich suche nicht nur den Fehler — ich suche die Lösung. Ein gut verstandenes, sauber dokumentiertes System ist mir lieber als ein schneller Hack.',

    // Home
    'home.featured': 'Ausgewählte Projekte',
    'home.featured.title': 'Woran ich arbeite',
    'home.featured.lead': 'Ein Auszug meiner Arbeit. Alle Projekte im Archiv.',
    'home.viewall': 'Alle Projekte',
    'home.cta.title': 'Lass uns etwas bauen.',
    'home.cta.lead':
      'Interesse an einer Zusammenarbeit oder Fragen zu meinen Projekten? Ich freue mich über eine Nachricht.',

    // Projects
    'projects.label': 'Projekte',
    'projects.title': 'Projekt-Archiv',
    'projects.lead': 'Alle Arbeiten in Computer Vision, ML, Embedded Systems und mehr.',
    'projects.all': 'Alle',
    'projects.empty': 'Keine Projekte in dieser Kategorie.',

    // Contact
    'contact.label': 'Kontakt',
    'contact.title': 'Lass uns etwas bauen.',
    'contact.lead':
      'Interesse an einer Zusammenarbeit, Fragen zu meinen Projekten oder einfach Lust, über Tech zu reden? Schreib mir.',
    'contact.email': 'E-Mail',
    'contact.phone': 'Telefon',
    'contact.send': 'Nachricht senden',
    'contact.sending': 'Wird gesendet …',
    'contact.name': 'Name',
    'contact.message': 'Nachricht',
    'contact.success': 'Nachricht gesendet — danke! Ich melde mich.',
    'contact.error': 'Etwas ist schiefgelaufen. Versuch es erneut oder schreib mir direkt per E-Mail.',
    'contact.elsewhere': 'Oder finde mich hier',

    // Footer
    'footer.built': 'Gebaut mit Astro & Tailwind',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.nav': 'Navigation',
    'footer.connect': 'Kontakt',
    'footer.projects.ext': 'Projekte live',
    'footer.legal': 'Rechtliches',
    'footer.imprint': 'Impressum',
    'footer.privacy': 'Datenschutz',

    // Meta
    'meta.title': 'Albert Heruth — AI & Computer-Vision Engineer',
    'meta.desc':
      'Portfolio von Albert Heruth: Computer Vision, maschinelles Lernen, Embedded Systems und Systemintegration.',
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cta': 'Contact',

    'hero.role': 'AI & Computer-Vision Engineer',
    'hero.title.1': 'I teach machines',
    'hero.title.2': 'how to see.',
    'hero.lead':
      'From medical image processing and neural networks to embedded systems — I build intelligent systems that work in the real world.',
    'hero.cta.work': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'hero.status': 'Available for projects',

    'about.label': 'About',
    'about.title': 'Mathematics, models and machines.',
    'about.p1':
      "I'm Albert Heruth — I combine applied mathematics with hands-on engineering. My focus is computer vision and machine learning, from the idea all the way to systems running on real hardware.",
    'about.p2':
      'Alongside my work on automation and camera inspection, I build my own CV models, embedded prototypes and tools — happiest where hardware meets intelligent software.',
    'about.skills': 'Core skills',
    'about.philosophy': 'My philosophy',
    'about.philosophy.p':
      "I don't just look for the bug — I look for the solution. A well-understood, well-documented system beats a quick hack.",

    'home.featured': 'Selected projects',
    'home.featured.title': 'What I build',
    'home.featured.lead': 'A glimpse of my work. Find everything in the archive.',
    'home.viewall': 'All projects',
    'home.cta.title': "Let's build something.",
    'home.cta.lead':
      'Interested in working together or curious about my projects? I would love to hear from you.',

    'projects.label': 'Projects',
    'projects.title': 'Project archive',
    'projects.lead': 'All work in computer vision, ML, embedded systems and more.',
    'projects.all': 'All',
    'projects.empty': 'No projects in this category.',

    'contact.label': 'Contact',
    'contact.title': "Let's build something.",
    'contact.lead':
      'Interested in working together, have questions about my projects, or just want to talk tech? Drop me a line.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.send': 'Send message',
    'contact.sending': 'Sending …',
    'contact.name': 'Name',
    'contact.message': 'Message',
    'contact.success': "Message sent — thank you! I'll get back to you.",
    'contact.error': 'Something went wrong. Please try again or email me directly.',
    'contact.elsewhere': 'Or find me here',

    'footer.built': 'Built with Astro & Tailwind',
    'footer.rights': 'All rights reserved.',
    'footer.nav': 'Navigation',
    'footer.connect': 'Connect',
    'footer.projects.ext': 'Live projects',
    'footer.legal': 'Legal',
    'footer.imprint': 'Imprint',
    'footer.privacy': 'Privacy',

    'meta.title': 'Albert Heruth — AI & Computer-Vision Engineer',
    'meta.desc':
      'Portfolio of Albert Heruth: computer vision, machine learning, embedded systems and systems integration.',
  },
} as const;

export type UIKey = keyof (typeof ui)['de'];
