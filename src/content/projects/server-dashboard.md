---
title: "Server Dashboard"
summary:
  de: "Ein Flask-Dashboard zur Systemüberwachung von Docker und Podman mit Metriken, Authentifizierung und Container-Verwaltung."
  en: "A Flask dashboard for monitoring Docker and Podman with metrics, authentication and container management."
category: "systems"
tech: ["Python", "Flask", "SQLite", "psutil", "Docker"]
year: "2025"
status: "active"
featured: false
order: 9
cover: "../../assets/projects/server.jpg"
needsConfirmation: false
---

Server Dashboard is a system-monitoring dashboard built with Flask for Docker and Podman environments. It protects access with authentication via Flask-Login.

It reports CPU, RAM and disk metrics through psutil, offers container management, and keeps an event log in SQLite.

The result is a single web interface for keeping an eye on a containerised host and acting on it directly.
