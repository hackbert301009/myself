---
title: "Albert's Weather Station"
summary:
  de: "Eine Flask-Web-App auf dem Raspberry Pi, die einen DHT22-Sensor ausliest und einen Komfortindex berechnet."
  en: "A Flask web app on the Raspberry Pi that reads a DHT22 sensor and computes a comfort index."
category: "embedded"
tech: ["Python", "Flask", "Raspberry Pi", "DHT22", "GPIO"]
year: "2025"
status: "finished"
featured: false
order: 7
cover: "../../assets/projects/wetterstation.jpg"
needsConfirmation: false
---

Albert's Weather Station is a Flask web application running on a Raspberry Pi that reads temperature and humidity from a DHT22 sensor over GPIO.

From those readings it computes a comfort index and presents a live readout, so current conditions can be checked from a browser.

The project combines Python and Flask on the software side with direct hardware access to the DHT22 sensor on the Raspberry Pi.
