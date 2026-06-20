# hackbert.org — Portfolio von Albert Heruth

Zweisprachiges (DE/EN) Portfolio als **AI & Computer-Vision Engineer**.
Gebaut mit **Astro 6 + Tailwind CSS v4 + Three.js**, gehostet kostenlos auf **GitHub Pages**.

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

Alle Inhalte liegen als **Markdown-Dateien** unter `src/content/`. Du brauchst
kein HTML/JS anzufassen — eine neue Datei = ein neuer Eintrag.

| Was              | Ordner                        |
| ---------------- | ----------------------------- |
| Projekte         | `src/content/projects/`       |
| Forschung        | `src/content/research/`       |
| Zertifikate      | `src/content/certificates/`   |

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
order: 5                # kleinere Zahl = weiter oben
repo: "https://github.com/..."   # optional
demo: "https://..."              # optional
cover: "../../assets/projects/mein-bild.jpg"  # optional
needsConfirmation: false         # true = markiert als "noch zu bestätigen" (ⓘ)
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
im `@theme`-Block ("Neural Lab"-Theme: tiefes Blau-Schwarz, Cyan↔Violett).
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
├── components/        Hero (Three.js), Nav, Footer, ProjectCard, …
├── content/           ← Inhalte als Markdown (projects/research/certificates)
├── content.config.ts  Schema der Inhalte (Zod)
├── i18n/              Übersetzungen + Helfer
├── layouts/Base.astro Grund-Layout (Head, SEO, Reveal-Animationen)
├── pages/             index.astro (DE) · en/index.astro (EN)
└── styles/global.css  Design-Tokens & Basis-Styles
```

---

## ✅ Offene Punkte

Einträge mit `needsConfirmation: true` (Marker **ⓘ**) müssen inhaltlich noch
bestätigt werden (z. B. SterilVision, BWKI, einige Zertifikat-Aussteller).
Nach Bestätigung einfach `needsConfirmation: false` setzen.
