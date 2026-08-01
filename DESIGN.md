# Design Sheet, Albert Heruth

Ein eigenes, ruhiges System mit einer technischen Ebene für das Thema
Bildverarbeitung. Ziel: seriös, individuell, nicht nach Vorlage.

## Farben (Tokens in `src/styles/global.css`)
- Hell ist Standard, Dunkel via `.dark` auf `<html>` (Umschalter in der Nav).
- Ink / Surface / Surface-2, Line, Text / Muted / Faint.
- Akzent: Apple-Blau `#0071e3`, sparsam eingesetzt.
- Scan-Akzent: `#0891b2` (hell) / `#22d3ee` (dunkel), reserviert für die
  technische Ebene (Vision Lab, Sensor-Header, Mono-Marker).

## Typografie
- Display / Text: System-SF-Stack, Inter als Fallback.
- Mono (`--font-mono`, `font-mono`): für technische Labels, Kennzahlen,
  Sensor-Readouts, Zeitstempel. Das ist der "IT"-Charakter.

## Bausteine
- `.card`, `.press` (Micro-Press), `.glass` (Header), `.reveal` (Scroll-Reveal).
- Eigene SVG-Icons in `src/components/Icon.astro`: `detect` (Erkennungsbox),
  `chip`, `stack`, `kernel` (3x3-Faltung), `scan`, `heart` u. a.
  24er-Raster, Strich 1.6, `currentColor`.
- Sektionen sind nummeriert (01, 02, 03) und mit Mono-Labels ausgezeichnet.

## Signatur-Interaktion
- `src/components/VisionLab.astro`: echte Bildverarbeitung im Browser auf dem
  eigenen Portrait. Modi: Scan (Cursor-Spotlight + Sweep), Kanten (Sobel),
  Schwellwert, Pixel, ASCII. Vanilla JS, gedrosselt, `prefers-reduced-motion`.

## Spielelemente
- Konami-Code (Pfeile + B A) schaltet einen Nachtsicht-Scan des Inhalts um,
  mit Mono-Toast. Nav bleibt bedienbar.

## Regeln für den Text
- Keine Gedankenstriche im Fließtext. Titel nutzen den Mittelpunkt `·`.
- Korrekte Umlaute (ä ö ü ß), natürliche Sprache, echte Inhalte.
- Restriktive Bewegung: wenige, konsistente Übergänge, echte Easings.
