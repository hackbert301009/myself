---
title: "SterilVision"
summary:
  de: "Ein computervisuelles System zur Überwachung von Sterilisationsprozessen im medizinisch-chirurgischen Umfeld."
  en: "A computer-vision system for monitoring sterilization processes in a medical and surgical context."
category: "cv"
tech: ["Computer Vision", "Python", "Deep Learning"]
year: "2025"
status: "active"
featured: true
order: 2
cover: "../../assets/sterilvision/dashboard.png"
needsConfirmation: true
---

SterilVision is a medical computer-vision platform for surgical-instrument and retained-foreign-object inspection. It runs an end-to-end inspection pipeline built around a ResNet-18 backbone, implemented with PyTorch and served through Flask, to assess inspection state from visual input and reduce reliance on manual checks.

The pipeline is tuned for clinical throughput, achieving sub-second inspection latency at roughly 380 ms per inspection on GPU. Results feed a compliance dashboard that surfaces inspection outcomes in a form suitable for documentation and oversight in a surgical setting.

The system was developed with clinical context drawn from the Westküstenkliniken and the UKSH, and is documented in a 48-page technical whitepaper. It was entered into the BWKI 2026 (Bundeswettbewerb Künstliche Intelligenz), Germany's national AI competition.
