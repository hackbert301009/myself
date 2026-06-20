---
title:
  de: "PixLang: eine Sprache für Bildverarbeitung"
  en: "PixLang: a language for image processing"
excerpt:
  de: "Eine kleine, lesbare DSL, mit der man Computer-Vision-Pipelines beschreibt — inklusive visuellem Editor."
  en: "A small, readable DSL for describing computer-vision pipelines — including a visual editor."
date: 2026-05-28
category: "Projekt"
draft: false
---

Ich wollte CV-Pipelines beschreiben können, ohne jedes Mal denselben
Boilerplate-Code zu schreiben. Daraus ist **PixLang** entstanden: eine
zeilenbasierte, gut lesbare domänenspezifische Sprache mit Variablen, Schleifen,
einem Linter, Watch-Modus und einem browserbasierten visuellen Editor.

Aktuell umfasst die Sprache 35 Befehle und ist durch 253 Tests abgesichert. Es
hat mir gezeigt, wie viel man über ein Problem lernt, wenn man eine eigene
Abstraktion dafür baut — vom Parser bis zur Ausführung.

Code und Doku gibt es auf GitHub.
