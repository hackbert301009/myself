---
title: "PixLang"
summary:
  de: "Eine minimale, lesbare domänenspezifische Sprache (DSL) zum Beschreiben von Computer-Vision-Pipelines — mit Variablen, Schleifen, Plugins, Linter und browserbasiertem visuellem Editor."
  en: "A minimal, human-readable DSL for describing computer-vision pipelines — with variables, loops, plugins, a linter and a browser-based visual flow editor (35 commands, 253 passing tests)."
category: "cv"
tech: ["Python", "DSL", "Computer Vision", "Parser"]
year: "2026"
status: "active"
featured: true
order: 1
repo: "https://github.com/hackbert301009/pixlang"
needsConfirmation: false
---

PixLang is a minimal, human-readable domain-specific language for describing computer-vision pipelines. Instead of wiring together imperative OpenCV calls, you express an image-processing flow as a clear, declarative script that reads close to plain language.

The language supports variables, loops and a plugin system so pipelines can be extended and reused, and it ships with a linter that catches mistakes before a pipeline runs. A browser-based visual flow editor lets you build and inspect pipelines graphically as an alternative to writing the DSL by hand.

Implemented in Python with a custom parser, PixLang currently covers 35 commands and is backed by 253 passing tests, making it a robust foundation for repeatable, inspectable computer-vision workflows.
