---
title: "Computer Vision Blueprint"
summary:
  de: "Ein node-basierter visueller Editor, um OpenCV-Pipelines ohne Code zusammenzubauen."
  en: "A node-based visual editor for building OpenCV pipelines without writing code."
category: "cv"
tech: ["C++", "Qt6", "OpenCV", "CMake"]
year: "2025"
status: "prototype"
featured: false
order: 6
repo: "https://github.com/PabloPicose/ComputerVisionBlueprint"
needsConfirmation: false
---

Computer Vision Blueprint is a node-based visual editor that lets you assemble OpenCV pipelines without writing code. By wiring nodes together you can compose operations such as face detection, filters and colour conversion.

The aim is to make experimenting with computer-vision pipelines accessible and fast, replacing repeated edit-compile-run cycles with a visual graph.

It is implemented in C++ with Qt6 for the interface, OpenCV for the vision operations, and CMake for the build. This entry is a contribution and fork of the upstream project.
