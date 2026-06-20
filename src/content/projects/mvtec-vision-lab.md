---
title: "MVTec Vision Lab"
summary:
  de: "Ein quelloffenes Browser-Tool zum Erkunden der MVTec-AD-Datensätze, Trainieren von PaDiM-Anomalieerkennungsmodellen und Inspizieren von XAI-Heatmaps."
  en: "An open-source browser tool to explore the MVTec AD datasets, train PaDiM anomaly-detection models and inspect per-image XAI heatmaps."
category: "cv"
tech: ["Python", "FastAPI", "PaDiM", "Anomaly Detection", "XAI"]
year: "2026"
status: "active"
featured: false
order: 13
repo: "https://github.com/hackbert301009/mvtec_datensatz_visualisierer"
needsConfirmation: false
---

MVTec Vision Lab is an open-source browser tool for working with the MVTec AD anomaly-detection datasets. It lets you explore the datasets directly in the browser, making it easy to inspect categories, samples and defect types.

Beyond exploration, the tool can train PaDiM anomaly-detection models on the data and then surface per-image XAI heatmaps, so the regions a model considers anomalous are visible and explainable rather than hidden.

The backend is built in Python with FastAPI, combining dataset browsing, model training and explainability into a single web-based workflow.
