---
title: "CNN-Visualizer"
summary:
  de: "Ein interaktives Werkzeug zum Debuggen und Visualisieren von CNNs mit Grad-CAM, Feature-Maps und Fehleranalyse."
  en: "An interactive tool for debugging and visualizing CNNs with Grad-CAM, feature maps and misclassification analysis."
category: "ml"
tech: ["Python", "PyTorch", "OpenCV", "Matplotlib", "Tkinter"]
year: "2025"
status: "active"
featured: true
order: 3
repo: "https://github.com/hackbert301009/cnn-visualizer"
cover: "../../assets/projects/cv-processed.jpg"
needsConfirmation: false
---

CNN-Visualizer is an interactive tool for understanding and debugging convolutional neural networks. It renders Grad-CAM attention maps, lets you inspect intermediate feature maps, and surfaces misclassification analysis to make model behaviour transparent.

The tool integrates with real-time PyTorch training, so the internal state of a model can be observed as it learns rather than only after the fact.

Built in Python with PyTorch, OpenCV and Matplotlib, and wrapped in a Tkinter desktop interface, it is aimed at developers who need to reason about what their networks are actually attending to.
