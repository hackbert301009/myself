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
    'nav.certificates': 'Zertifikate',
    'nav.heart': 'Herz',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Kontakt',

    // Hero
    'hero.role': 'AI & Computer-Vision Engineer',
    'hero.title.1': 'Ich bringe Maschinen',
    'hero.title.2': 'das Sehen bei.',
    'hero.lead':
      'Von medizinischer Bildverarbeitung über neuronale Netze bis hin zu Embedded-Systemen, ich baue intelligente Systeme, die in der realen Welt funktionieren.',
    'hero.cta.work': 'Projekte ansehen',
    'hero.cta.contact': 'Kontakt aufnehmen',
    'hero.status': 'Verfügbar für Projekte',

    // About
    'about.label': 'Über mich',
    'about.title': 'Mathematik, Modelle und Maschinen.',
    'about.p1':
      'Ich bin Albert Heruth, ich verbinde angewandte Mathematik mit praktischem Engineering. Mein Schwerpunkt liegt auf Computer Vision und maschinellem Lernen, von der Idee bis zum lauffähigen System auf echter Hardware.',
    'about.p2':
      'Neben meiner Arbeit an Automatisierung und Kamerainspektion entwickle ich eigene CV-Modelle, Embedded-Prototypen und Tools, am liebsten dort, wo Hardware auf intelligente Software trifft.',
    'about.skills': 'Kernkompetenzen',
    'about.philosophy': 'Meine Philosophie',
    'about.philosophy.p':
      'Ich suche nicht nur den Fehler, ich suche die Lösung. Ein gut verstandenes, sauber dokumentiertes System ist mir lieber als ein schneller Hack.',
    'about.p3':
      'Zwei Themen treiben mich besonders an: eigene Forschung wie mein Netz S2P-Net, und Technik, die Menschen im Alltag hilft, etwa meine Assistenz-App Skill-Lens.',

    // Home
    'home.featured': 'Ausgewählte Projekte',
    'home.featured.title': 'Woran ich arbeite',
    'home.featured.lead': 'Ein Auszug meiner Arbeit. Alle Projekte im Archiv.',
    'home.viewall': 'Alle Projekte',
    'home.trust': 'Aktuell tätig & beteiligt',
    'home.stats.projects': 'Projekte',
    'home.stats.areas': 'Fachbereiche',
    'home.stats.tech': 'Technologien',
    'home.stats.since': 'Aktiv seit',
    'home.caps.label': 'Fähigkeiten',
    'home.caps.title': 'Was ich mache',
    'home.caps.lead': 'Drei Bereiche, in denen ich zu Hause bin, von der ersten Idee bis zum lauffähigen System.',
    'home.caps.cv': 'Computer Vision & ML',
    'home.caps.cv.desc': 'Neuronale Netze, Bildklassifikation, Objekt- und Anomalieerkennung, medizinische Bildverarbeitung.',
    'home.caps.embedded': 'Embedded & IoT',
    'home.caps.embedded.desc': 'ESP32, Raspberry Pi, Sensorik und Echtzeit-Signalverarbeitung, wo Software auf Hardware trifft.',
    'home.caps.systems': 'Systeme & Infrastruktur',
    'home.caps.systems.desc': 'Linux, Docker, Netzwerke und saubere, wartbare Backends & Werkzeuge.',
    'lab.label': 'Vision Lab',
    'lab.title': 'Sieh, wie Maschinen sehen',
    'lab.lead': 'Dieses Portrait läuft live durch echte Bildverarbeitung, direkt in deinem Browser. Bewege den Cursor über das Bild oder wähle einen Modus.',
    'lab.mode.scan': 'Scan',
    'lab.mode.edge': 'Kanten',
    'lab.mode.threshold': 'Schwellwert',
    'lab.mode.pixel': 'Pixel',
    'lab.aria': 'Interaktives Bildverarbeitungs-Labor',
    'lab.hint': 'Cursor bewegen zum Scannen',
    'home.cta.title': 'Lass uns etwas bauen.',
    'home.cta.lead':
      'Interesse an einer Zusammenarbeit oder Fragen zu meinen Projekten? Ich freue mich über eine Nachricht.',

    // Research highlight (S2P-Net)
    'home.research.label': 'Eigene Forschung',
    'home.research.title': 'Objekterkennung, die sich nicht aus der Ruhe bringen lässt',
    'home.research.lead':
      'S2P-Net ist mein eigenes neuronales Netz. Es erkennt Objekte zuverlässig, auch wenn sie gedreht sind und nur wenige Trainingsbilder vorliegen. Dafür verbindet es spektrale und räumliche Merkmale in einer polaren Darstellung.',
    'home.research.paper': 'S2P-Net: A Spectral-Spatial Polar Network for Rotation-Invariant Object Recognition in Low-Data Regimes',
    'home.research.meta': 'arXiv · 2026 · Erstautor',
    'home.research.t1': 'Rotationsinvariant',
    'home.research.t1d': 'Erkennt Objekte unabhängig von ihrer Drehung.',
    'home.research.t2': 'Spektral & räumlich',
    'home.research.t2d': 'Verbindet Frequenz- und Ortsmerkmale in polarer Form.',
    'home.research.t3': 'Wenig Daten',
    'home.research.t3d': 'Funktioniert dort, wo kaum Trainingsbilder da sind.',
    'home.research.cta': 'Paper auf arXiv lesen',

    // Skill-Lens spotlight
    'home.spotlight.label': 'Herzensprojekt',
    'home.spotlight.title': 'Skill-Lens: Ich schaff das!',
    'home.spotlight.lead':
      'Eine Assistenz-App für Menschen mit Lernschwierigkeiten. Sie führt in Leichter Sprache durch Alltagsaufgaben, die Kamera bestätigt jeden Schritt im echten Moment. Ganz ohne Cloud, ohne Gewinn.',
    'home.spotlight.p1': 'Leichte Sprache & große Knöpfe',
    'home.spotlight.p2': 'Läuft offline, Fotos bleiben auf dem Gerät',
    'home.spotlight.p3': 'Kein Gewinn, ein Herzensprojekt',
    'home.spotlight.cta': 'Zur Skill-Lens Webseite',
    'home.spotlight.alt': 'Skill-Lens App: junge Person hält ein Handy, das Schritt für Schritt durch das Händewaschen führt.',

    // Projects
    'projects.label': 'Projekte',
    'projects.title': 'Projekt-Archiv',
    'projects.lead': 'Alle Arbeiten in Computer Vision, ML, Embedded Systems und mehr.',
    'projects.all': 'Alle',
    'projects.empty': 'Keine Projekte in dieser Kategorie.',

    'certs.label': 'Zertifikate',
    'certs.title': 'Zertifikate & Ausbildung',
    'certs.lead': 'Verifizierte Qualifikationen und mein akademischer Werdegang.',
    'certs.all': 'Alle',
    'certs.stat.total': 'Zertifikate',
    'certs.stat.areas': 'Bereiche',
    'certs.stat.since': 'Seit',
    'certs.verify': 'Verifizieren',
    'certs.pub': 'Publikationen',
    'certs.pub.lead': 'Eigene Forschung und Veröffentlichungen.',
    'certs.read': 'Paper lesen',

    'heart.label': 'Herzensangelegenheiten',
    'heart.title': 'Was mir am Herzen liegt',
    'heart.lead':
      'Technik ist für mich Mittel zum Zweck, Menschen helfen. Ein paar Organisationen und Werte, die Unterstützung verdienen und mich antreiben.',
    'heart.causes': 'Organisationen, die Unterstützung verdienen',
    'heart.causes.lead': 'Gemeinnützige Projekte, die einen echten Unterschied machen. Schau vorbei oder spende.',
    'heart.values': 'Meine Werte',
    'heart.values.lead': 'Was meine Arbeit und meine Entscheidungen leitet.',
    'heart.support': 'Unterstützen',
    'heart.note': 'Persönliche Auswahl, sie wächst mit der Zeit.',
    'heart.cta.title': 'Gemeinsam Gutes bewegen.',
    'heart.cta.lead': 'Kennst du eine Organisation, die hierher passt? Schreib mir.',

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
    'contact.success': 'Nachricht gesendet, danke! Ich melde mich.',
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
    'meta.title': 'Albert Heruth · AI & Computer-Vision Engineer',
    'meta.desc':
      'Portfolio von Albert Heruth: Computer Vision, maschinelles Lernen, Embedded Systems und Systemintegration.',
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.certificates': 'Certificates',
    'nav.heart': 'Heart',
    'nav.contact': 'Contact',
    'nav.cta': 'Contact',

    'hero.role': 'AI & Computer-Vision Engineer',
    'hero.title.1': 'I teach machines',
    'hero.title.2': 'how to see.',
    'hero.lead':
      'From medical image processing and neural networks to embedded systems, I build intelligent systems that work in the real world.',
    'hero.cta.work': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'hero.status': 'Available for projects',

    'about.label': 'About',
    'about.title': 'Mathematics, models and machines.',
    'about.p1':
      "I'm Albert Heruth, I combine applied mathematics with hands-on engineering. My focus is computer vision and machine learning, from the idea all the way to systems running on real hardware.",
    'about.p2':
      'Alongside my work on automation and camera inspection, I build my own CV models, embedded prototypes and tools, happiest where hardware meets intelligent software.',
    'about.skills': 'Core skills',
    'about.philosophy': 'My philosophy',
    'about.philosophy.p':
      "I don't just look for the bug, I look for the solution. A well-understood, well-documented system beats a quick hack.",
    'about.p3':
      'Two themes drive me most: my own research, like my S2P-Net network, and technology that helps people in everyday life, such as my assistive app Skill-Lens.',

    'home.featured': 'Selected projects',
    'home.featured.title': 'What I build',
    'home.featured.lead': 'A glimpse of my work. Find everything in the archive.',
    'home.viewall': 'All projects',
    'home.trust': 'Currently working & involved',
    'home.stats.projects': 'Projects',
    'home.stats.areas': 'Domains',
    'home.stats.tech': 'Technologies',
    'home.stats.since': 'Active since',
    'home.caps.label': 'Capabilities',
    'home.caps.title': 'What I do',
    'home.caps.lead': 'Three areas I am at home in, from the first idea to a system that runs.',
    'home.caps.cv': 'Computer Vision & ML',
    'home.caps.cv.desc': 'Neural networks, image classification, object and anomaly detection, medical imaging.',
    'home.caps.embedded': 'Embedded & IoT',
    'home.caps.embedded.desc': 'ESP32, Raspberry Pi, sensors and real-time signal processing, where software meets hardware.',
    'home.caps.systems': 'Systems & Infrastructure',
    'home.caps.systems.desc': 'Linux, Docker, networking and clean, maintainable backends & tooling.',
    'lab.label': 'Vision Lab',
    'lab.title': 'See how machines see',
    'lab.lead': 'This portrait runs through real image processing, live in your browser. Move the cursor across it or pick a mode.',
    'lab.mode.scan': 'Scan',
    'lab.mode.edge': 'Edges',
    'lab.mode.threshold': 'Threshold',
    'lab.mode.pixel': 'Pixel',
    'lab.aria': 'Interactive image-processing lab',
    'lab.hint': 'Move the cursor to scan',
    'home.cta.title': "Let's build something.",
    'home.cta.lead':
      'Interested in working together or curious about my projects? I would love to hear from you.',

    // Research highlight (S2P-Net)
    'home.research.label': 'My own research',
    'home.research.title': 'Object recognition that keeps its cool',
    'home.research.lead':
      'S2P-Net is my own neural network. It recognizes objects reliably even when they are rotated and only a handful of training images exist, by combining spectral and spatial features in a polar representation.',
    'home.research.paper': 'S2P-Net: A Spectral-Spatial Polar Network for Rotation-Invariant Object Recognition in Low-Data Regimes',
    'home.research.meta': 'arXiv · 2026 · First author',
    'home.research.t1': 'Rotation-invariant',
    'home.research.t1d': 'Recognizes objects regardless of how they are turned.',
    'home.research.t2': 'Spectral & spatial',
    'home.research.t2d': 'Fuses frequency and location cues in a polar form.',
    'home.research.t3': 'Low data',
    'home.research.t3d': 'Works where hardly any training images exist.',
    'home.research.cta': 'Read the paper on arXiv',

    // Skill-Lens spotlight
    'home.spotlight.label': 'A project close to my heart',
    'home.spotlight.title': 'Skill-Lens: I can do this!',
    'home.spotlight.lead':
      'An assistive app for people with learning difficulties. It guides through everyday tasks in easy language, and the camera confirms every step in the real moment. No cloud, no profit.',
    'home.spotlight.p1': 'Easy language & large buttons',
    'home.spotlight.p2': 'Runs offline, photos stay on the device',
    'home.spotlight.p3': 'No profit, a labour of love',
    'home.spotlight.cta': 'Visit the Skill-Lens site',
    'home.spotlight.alt': 'Skill-Lens app: a young person holds a phone that guides them step by step through washing hands.',

    'projects.label': 'Projects',
    'projects.title': 'Project archive',
    'projects.lead': 'All work in computer vision, ML, embedded systems and more.',
    'projects.all': 'All',
    'projects.empty': 'No projects in this category.',

    'certs.label': 'Certificates',
    'certs.title': 'Certificates & education',
    'certs.lead': 'Verified qualifications and my academic background.',
    'certs.all': 'All',
    'certs.stat.total': 'Certificates',
    'certs.stat.areas': 'Areas',
    'certs.stat.since': 'Since',
    'certs.verify': 'Verify',
    'certs.pub': 'Publications',
    'certs.pub.lead': 'My own research and publications.',
    'certs.read': 'Read paper',

    'heart.label': 'Close to my heart',
    'heart.title': 'What matters to me',
    'heart.lead':
      'Technology is a means to an end for me, helping people. A few organizations and values that deserve support and keep me going.',
    'heart.causes': 'Organizations worth supporting',
    'heart.causes.lead': 'Non-profits that make a real difference. Take a look or donate.',
    'heart.values': 'My values',
    'heart.values.lead': 'What guides my work and my decisions.',
    'heart.support': 'Support',
    'heart.note': 'A personal selection, it keeps growing.',
    'heart.cta.title': 'Let’s do some good together.',
    'heart.cta.lead': 'Know an organization that belongs here? Get in touch.',

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
    'contact.success': "Message sent, thank you! I'll get back to you.",
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

    'meta.title': 'Albert Heruth · AI & Computer-Vision Engineer',
    'meta.desc':
      'Portfolio of Albert Heruth: computer vision, machine learning, embedded systems and systems integration.',
  },
} as const;

export type UIKey = keyof (typeof ui)['de'];
