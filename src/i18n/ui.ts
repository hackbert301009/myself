// ─────────────────────────────────────────────────────────────
// i18n dictionary. Add a key here once, reference via t(lang, key).
// Content items (projects, certs, posts) carry their own DE/EN fields.
// ─────────────────────────────────────────────────────────────

export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

export const ui = {
  de: {
    // Navigation
    'nav.home': 'Start',
    'nav.about': 'Über mich',
    'nav.projects': 'Projekte',
    'nav.labs': 'Labs',
    'nav.research': 'Forschung',
    'nav.certificates': 'Zertifikate',
    'nav.cv': 'Lebenslauf',
    'nav.goals': 'Ziele',
    'nav.news': 'Aktuelles',
    'nav.contact': 'Kontakt',
    'nav.person': 'Profil',
    'nav.cta': 'Kontakt',

    // Hero
    'hero.role': 'AI & Computer-Vision Engineer',
    'hero.title.1': 'Ich bringe Maschinen',
    'hero.title.2': 'das Sehen bei.',
    'hero.lead':
      'Von medizinischer Bildverarbeitung über neuronale Netze bis hin zu Embedded-Systemen — ich baue intelligente Systeme, die in der realen Welt funktionieren.',
    'hero.cta.work': 'Projekte ansehen',
    'hero.cta.labs': 'Live-Labs ausprobieren',
    'hero.cta.contact': 'Kontakt',
    'hero.status': 'Verfügbar für Projekte',

    // Home teasers
    'home.explore': 'Bereiche erkunden',
    'home.explore.lead': 'Wähle einen Bereich — jede Sektion lädt eigene Inhalte.',
    'home.featured': 'Ausgewählte Projekte',
    'home.featured.lead': 'Ein Auszug. Alle Projekte im Projekt-Archiv.',
    'home.viewall': 'Alle Projekte',
    'home.labs.title': 'Interaktive Labs',
    'home.labs.lead': 'Computer Vision direkt im Browser — Kamera an und ausprobieren.',
    'home.news.title': 'Aktuelles',
    'home.stats.projects': 'Projekte',
    'home.stats.years': 'Jahre Erfahrung',
    'home.stats.domains': 'Fachbereiche',
    'home.stats.repos': 'GitHub Repos',

    // About
    'about.label': '// whoami',
    'about.title': 'Mathematik, Modelle und Maschinen.',
    'about.p1':
      'Ich bin Albert Heruth — ich verbinde angewandte Mathematik mit praktischem Engineering. Mein Schwerpunkt liegt auf Computer Vision und maschinellem Lernen, von der Forschung bis zum lauffähigen System auf echter Hardware.',
    'about.p2':
      'Bei der EyeSpec FAW Group arbeite ich an Automatisierung und Kamerainspektion. Daneben entwickle ich eigene CV-Modelle, Embedded-Prototypen und Tools — am liebsten dort, wo Hardware auf intelligente Software trifft.',
    'about.skills': 'Kernkompetenzen',
    'about.philosophy': 'Meine Philosophie',
    'about.philosophy.p':
      'Ich suche nicht nur den Fehler — ich suche die Lösung. Ein gut verstandenes, sauber dokumentiertes System ist mir lieber als ein schneller Hack. Mathematik gibt mir das Fundament, Engineering die Umsetzung.',
    'about.terminal': 'Mehr über mich',

    // Domains / expertise
    'domains.cv': 'Computer Vision & ML',
    'domains.cv.desc': 'Neuronale Netze, Bildklassifikation, Objekterkennung, medizinische Bildverarbeitung.',
    'domains.embedded': 'Embedded & IoT',
    'domains.embedded.desc': 'ESP32, Raspberry Pi, Sensorik, Echtzeit-Signalverarbeitung.',
    'domains.systems': 'Systeme & Infrastruktur',
    'domains.systems.desc': 'Linux, Docker, Server-Monitoring, Netzwerk & Virtualisierung.',
    'domains.security': 'Security',
    'domains.security.desc': 'Pentesting, Härtung, Krypto-Grundlagen, CTF-Challenges.',

    // Projects
    'projects.label': '// ls ./projects',
    'projects.title': 'Projekt-Archiv',
    'projects.lead': 'Alle Arbeiten in Computer Vision, ML, Embedded Systems und mehr.',
    'projects.all': 'Alle',
    'projects.viewcode': 'Code',
    'projects.empty': 'Keine Projekte in dieser Kategorie.',

    // Labs
    'labs.label': '// ./run_experiment',
    'labs.title': 'Labs',
    'labs.lead':
      'Interaktive Computer-Vision-Experimente, die komplett in deinem Browser laufen. Erlaube den Kamerazugriff und leg los — es werden keine Daten gesendet.',
    'labs.launch': 'Lab starten',
    'labs.fullscreen': 'In neuem Tab öffnen',
    'labs.privacy': 'Läuft lokal · keine Daten verlassen dein Gerät',
    'labs.camera': 'Benötigt Kamera',

    // Research
    'research.label': '// research',
    'research.title': 'Forschung & Wettbewerbe',
    'research.lead': 'Akademische Arbeit, Whitepaper und Wettbewerbsbeiträge.',

    // Certificates
    'certs.label': '// certificates --verified',
    'certs.title': 'Zertifikate & Ausbildung',
    'certs.lead': 'Verifizierte Qualifikationen und akademischer Werdegang.',

    // CV
    'cv.label': '// cat lebenslauf',
    'cv.title': 'Lebenslauf',
    'cv.lead': 'Beruflicher und akademischer Werdegang.',
    'cv.download': 'Als PDF herunterladen',
    'cv.experience': 'Werdegang',
    'cv.education': 'Ausbildung',

    // Goals
    'goals.label': '// future_vision',
    'goals.title': 'Ziele & Roadmap',
    'goals.lead': 'Technologie bleibt nie stehen. Ich auch nicht.',
    'goals.roadmap': 'Roadmap',
    'goals.bucket': 'Tech Bucket List',
    'goals.dream': 'Langfristiges Ziel',

    // News / Blog
    'news.label': '// tail -f aktuelles.log',
    'news.title': 'Aktuelles',
    'news.lead': 'Gedanken, Projekt-Updates und was gerade passiert.',
    'news.readmore': 'Weiterlesen',
    'news.back': 'Zurück zu Aktuelles',

    // Contact
    'contact.label': '// open connection',
    'contact.title': 'Lass uns etwas bauen.',
    'contact.lead':
      'Interesse an einer Zusammenarbeit, Fragen zu meinen Projekten oder einfach Lust, über Tech zu reden? Schreib mir.',
    'contact.email': 'E-Mail',
    'contact.send': 'Nachricht senden',
    'contact.sending': 'Wird gesendet …',
    'contact.name': 'Name',
    'contact.message': 'Nachricht',
    'contact.success': 'Nachricht gesendet — danke! Ich melde mich.',
    'contact.error': 'Etwas ist schiefgelaufen. Versuch es erneut oder schreib mir direkt per E-Mail.',
    'contact.elsewhere': 'Oder finde mich hier',

    // Footer
    'footer.built': 'Gebaut mit Astro, Tailwind & Three.js',
    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.nav': 'Navigation',
    'footer.connect': 'Kontakt',

    // Meta
    'meta.title': 'Albert Heruth — AI & Computer-Vision Engineer',
    'meta.desc':
      'Portfolio von Albert Heruth: Computer Vision, maschinelles Lernen, Embedded Systems und Systemintegration.',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.labs': 'Labs',
    'nav.research': 'Research',
    'nav.certificates': 'Certificates',
    'nav.cv': 'CV',
    'nav.goals': 'Goals',
    'nav.news': 'Blog',
    'nav.contact': 'Contact',
    'nav.person': 'Profile',
    'nav.cta': 'Contact',

    'hero.role': 'AI & Computer-Vision Engineer',
    'hero.title.1': 'I teach machines',
    'hero.title.2': 'how to see.',
    'hero.lead':
      'From medical image processing and neural networks to embedded systems — I build intelligent systems that work in the real world.',
    'hero.cta.work': 'View projects',
    'hero.cta.labs': 'Try the live labs',
    'hero.cta.contact': 'Contact',
    'hero.status': 'Available for projects',

    'home.explore': 'Explore areas',
    'home.explore.lead': 'Pick an area — each section loads its own content.',
    'home.featured': 'Selected projects',
    'home.featured.lead': 'A glimpse. Find everything in the project archive.',
    'home.viewall': 'All projects',
    'home.labs.title': 'Interactive labs',
    'home.labs.lead': 'Computer vision right in your browser — turn on your camera and try.',
    'home.news.title': 'Latest',
    'home.stats.projects': 'Projects',
    'home.stats.years': 'Years experience',
    'home.stats.domains': 'Domains',
    'home.stats.repos': 'GitHub repos',

    'about.label': '// whoami',
    'about.title': 'Mathematics, models and machines.',
    'about.p1':
      "I'm Albert Heruth — I combine applied mathematics with hands-on engineering. My focus is computer vision and machine learning, from research all the way to systems running on real hardware.",
    'about.p2':
      'At EyeSpec FAW Group I work on automation and camera inspection. On the side I build my own CV models, embedded prototypes and tools — happiest where hardware meets intelligent software.',
    'about.skills': 'Core skills',
    'about.philosophy': 'My philosophy',
    'about.philosophy.p':
      "I don't just look for the bug — I look for the solution. A well-understood, well-documented system beats a quick hack. Mathematics gives me the foundation, engineering the execution.",
    'about.terminal': 'More about me',

    'domains.cv': 'Computer Vision & ML',
    'domains.cv.desc': 'Neural networks, image classification, object detection, medical imaging.',
    'domains.embedded': 'Embedded & IoT',
    'domains.embedded.desc': 'ESP32, Raspberry Pi, sensors, real-time signal processing.',
    'domains.systems': 'Systems & Infrastructure',
    'domains.systems.desc': 'Linux, Docker, server monitoring, networking & virtualization.',
    'domains.security': 'Security',
    'domains.security.desc': 'Pentesting, hardening, cryptography basics, CTF challenges.',

    'projects.label': '// ls ./projects',
    'projects.title': 'Project archive',
    'projects.lead': 'All work in computer vision, ML, embedded systems and more.',
    'projects.all': 'All',
    'projects.viewcode': 'Code',
    'projects.empty': 'No projects in this category.',

    'labs.label': '// ./run_experiment',
    'labs.title': 'Labs',
    'labs.lead':
      'Interactive computer-vision experiments that run entirely in your browser. Allow camera access and go — nothing is sent anywhere.',
    'labs.launch': 'Launch lab',
    'labs.fullscreen': 'Open in new tab',
    'labs.privacy': 'Runs locally · no data leaves your device',
    'labs.camera': 'Needs camera',

    'research.label': '// research',
    'research.title': 'Research & competitions',
    'research.lead': 'Academic work, whitepapers and competition entries.',

    'certs.label': '// certificates --verified',
    'certs.title': 'Certificates & education',
    'certs.lead': 'Verified qualifications and academic background.',

    'cv.label': '// cat resume',
    'cv.title': 'Résumé',
    'cv.lead': 'Professional and academic background.',
    'cv.download': 'Download as PDF',
    'cv.experience': 'Experience',
    'cv.education': 'Education',

    'goals.label': '// future_vision',
    'goals.title': 'Goals & roadmap',
    'goals.lead': 'Technology never stands still. Neither do I.',
    'goals.roadmap': 'Roadmap',
    'goals.bucket': 'Tech bucket list',
    'goals.dream': 'Long-term goal',

    'news.label': '// tail -f blog.log',
    'news.title': 'Blog',
    'news.lead': 'Thoughts, project updates and what I am up to.',
    'news.readmore': 'Read more',
    'news.back': 'Back to blog',

    'contact.label': '// open connection',
    'contact.title': "Let's build something.",
    'contact.lead':
      'Interested in working together, have questions about my projects, or just want to talk tech? Drop me a line.',
    'contact.email': 'Email',
    'contact.send': 'Send message',
    'contact.sending': 'Sending …',
    'contact.name': 'Name',
    'contact.message': 'Message',
    'contact.success': "Message sent — thank you! I'll get back to you.",
    'contact.error': 'Something went wrong. Please try again or email me directly.',
    'contact.elsewhere': 'Or find me here',

    'footer.built': 'Built with Astro, Tailwind & Three.js',
    'footer.rights': 'All rights reserved.',
    'footer.nav': 'Navigation',
    'footer.connect': 'Connect',

    'meta.title': 'Albert Heruth — AI & Computer-Vision Engineer',
    'meta.desc':
      'Portfolio of Albert Heruth: computer vision, machine learning, embedded systems and systems integration.',
  },
} as const;

export type UIKey = keyof (typeof ui)['de'];
