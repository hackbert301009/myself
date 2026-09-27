# hackbert.org — Portfolio von Albert Heruth

Zweisprachiges (DE/EN) Portfolio rund um **Angewandte Mathematik, Machine Learning und Embedded Systems**.
Gebaut mit **Astro 6 + Tailwind CSS v4**, gehostet kostenlos auf **GitHub Pages**.

---

## 🚀 Schnellstart

> Benötigt **Node 22+** (`.nvmrc` vorhanden → `nvm use`).

```bash
nvm use            # Node 22
npm install        # Abhängigkeiten
npm run dev        # Dev-Server  → http://localhost:4321
npm run build      # Produktions-Build → ./dist
npm run preview    # Build lokal ansehen
```

---

## ✏️ Inhalte pflegen (das Wichtigste)

Projekte liegen als **Markdown-Dateien** unter `src/content/projects/`. Du brauchst
kein HTML/JS anzufassen — eine neue Datei = ein neuer Eintrag.

| Was              | Wo                                              |
| ---------------- | ----------------------------------------------- |
| Projekte         | `src/content/projects/` (Markdown-Collection)   |
| Zertifikate      | Array `certs` in `src/components/pages/CertificatesPage.astro` |
| Publikationen    | Array `publications` in derselben Datei         |

### Neues Projekt anlegen

Lege z. B. `src/content/projects/mein-projekt.md` an:

```markdown
---
title: "Mein Projekt"
summary:
  de: "Kurzbeschreibung auf Deutsch."
  en: "Short description in English."
category: "cv"          # cv | ml | embedded | web | security | systems
tech: ["Python", "PyTorch"]
year: "2026"
status: "active"        # active | finished | prototype | research
featured: false
order: 5                # kleinere Zahl = weiter oben, pro Projekt eindeutig halten
repo: "https://github.com/..."   # optional
demo: "https://..."              # optional
cover: "../../assets/projects/mein-bild.jpg"  # optional
---

Längerer Beschreibungstext (Markdown).
```

Bild dazu? Datei nach `src/assets/projects/` legen und unter `cover:` referenzieren —
Astro optimiert sie automatisch (WebP, responsive Größen).

### Texte der Oberfläche (Navigation, Hero, Buttons …)

Zentral in **`src/i18n/ui.ts`** — pro Schlüssel je ein `de`- und `en`-Wert.

---

## 🌐 Zweisprachigkeit

- Deutsch ist Standard und liegt unter `/`.
- Englisch liegt unter `/en`.
- Umschalter ist in der Navigation (`Nav.astro`).
- UI-Strings: `src/i18n/ui.ts`. Inhalts-Strings: `de`/`en`-Felder in den Markdown-Dateien.

---

## 🎨 Design-System

Alle Farben, Fonts und Tokens stehen zentral in **`src/styles/global.css`**
im `@theme`-Block (Apple-minimalistisch: Hell als Standard, Dunkel per `.dark`,
Akzent `#0071e3`, Scan-Akzent für die technische Ebene). Siehe auch `DESIGN.md`.
Eine Farbe dort ändern → wirkt überall.

---

## 📦 Deployment (GitHub Pages, kostenlos)

1. Diesen Ordner als Repository pushen (oder Inhalt ins bestehende `myself`-Repo).
2. In GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Der Workflow `.github/workflows/deploy.yml` baut bei jedem Push auf `main`
   automatisch und veröffentlicht `./dist`.
4. `public/CNAME` enthält `hackbert.org` → Custom Domain bleibt aktiv.

> Hinweis: Ein wirklich sicheres Login ist auf reinem GitHub Pages nicht möglich.
> Falls später gewünscht: **Cloudflare Access** vor `hackbert.org` schalten
> (kostenlos bis 50 Nutzer) — der Code muss dafür nicht geändert werden.

---

## 🗂️ Struktur

```
src/
├── assets/            Bilder (werden optimiert)
├── components/        Hero, Nav, Footer, ProjectCard, VisionLab, …
├── content/projects/  ← Projekte als Markdown
├── content.config.ts  Schema der Inhalte (Zod)
├── i18n/              Übersetzungen + Helfer
├── layouts/Base.astro Grund-Layout (Head, SEO, Reveal-Animationen)
├── pages/             index.astro (DE) · en/index.astro (EN)
└── styles/global.css  Design-Tokens & Basis-Styles
```

---

## ✅ Offene Punkte

Einige Projektdateien tragen im Frontmatter ein `needsConfirmation: true` für
Aussagen, die inhaltlich noch bestätigt werden müssen. **Achtung:** Das Feld ist
nur eine Notiz für dich. Es steht nicht im Schema (`content.config.ts`), wird von
Zod stillschweigend verworfen und nirgends auf der Seite angezeigt — es gibt
keinen **ⓘ**-Marker. Aktuell betroffen: `acsess.md`, `web-vulnerability-scanner.md`.

Wenn der Marker wirklich sichtbar sein soll, muss das Feld ins Schema aufgenommen
und in `ProjectCard.astro` gerendert werden.
