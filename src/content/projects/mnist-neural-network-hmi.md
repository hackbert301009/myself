---
title: "MNIST Neural Network HMI"
summary:
  de: "Eine Desktop-App, in der man eine Ziffer zeichnet und die vollständige Vorverarbeitungspipeline sowie Live-CNN-Vorhersagen sieht."
  en: "A desktop app where you draw a digit and watch the full preprocessing pipeline and live CNN predictions."
category: "ml"
tech: ["Python", "PyTorch", "CustomTkinter", "torchvision"]
year: "2025"
status: "finished"
featured: false
order: 5
needsConfirmation: false
---

This desktop application turns digit recognition into something you can watch happen. You draw a digit by hand and the app shows the complete preprocessing pipeline, from grayscale conversion through resizing to normalization, before feeding the result into the network.

A three-layer CNN with roughly 150k parameters then produces live predictions, making the connection between input transformation and model output explicit.

The interface is built with CustomTkinter, with PyTorch and torchvision handling the model and data tooling.
