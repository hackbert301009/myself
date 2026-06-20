---
title: "Adaptive Noise Classifier"
summary:
  de: "Ein ESP32-Audioklassifikator, der mit FFT Klangbänder erkennt und adaptive Geräuschmaskierung anwendet."
  en: "An ESP32 audio classifier that uses FFT to recognise sound bands and applies adaptive noise masking."
category: "embedded"
tech: ["C++", "Arduino", "ESP32", "ArduinoFFT"]
year: "2025"
status: "prototype"
featured: false
order: 8
needsConfirmation: false
---

The Adaptive Noise Classifier is a real-time audio system running on an ESP32. Using a 1024-point FFT at an 8 kHz sample rate, it classifies sound into bands such as bass, voice and rain.

Based on the classification it applies adaptive noise masking, generating white, pink or brown noise as well as a notch response to counter specific frequencies.

It is implemented in C++ on the Arduino framework for the ESP32, with ArduinoFFT handling the frequency analysis.
