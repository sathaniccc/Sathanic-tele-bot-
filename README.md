# 🚀 Sathanic — Futuristic Multi-Feature Telegram Bot

[![Status](https://img.shields.io/badge/status-production-brightgreen)](https://github.com/sathaniccc/sathanic-telegram-bot)
[![Node](https://img.shields.io/badge/node-%3E=18.0-blue)](https://nodejs.org/)
[![Koyeb Ready](https://img.shields.io/badge/hosting-Koyeb-purple)](https://koyeb.com)

---

## ✨ Overview
**Sathanic** — ഒരു *future-ready*, *lightweight*, *high-speed* Telegram bot.  
YouTube / Instagram downloader, HD photo enhance, song (MP3) extractor, alive/ping status, menu UI എന്നിവയൊക്കെ ഒരു modular architecture-ൽ.

> 🔮 Designed for **Koyeb** deployment (no port errors — built-in health check fix).

---

## 🎬 Demo & Animated Preview
> *Place a short demo GIF here for the VIP look.*  
Upload an animation to `assets/demo.gif` then GitHub README will show it:

![Demo Preview](assets/demo.gif)

---

## 📁 Project structure (What goes where)
---

## ⚙️ Required files (exact names)
- `index.js` — main server + `startBot()` call  
- `src/bot.js` — initializes `node-telegram-bot-api` polling, routes messages to handlers  
- `src/menu.js` — main menu keyboard JSON  
- `src/handlers/*.js` — feature handlers (one per feature)  
- `package.json` — dependencies & start script  
- `Dockerfile` — Koyeb-compatible Dockerfile  
- `.env` — local env (DO NOT commit)

---

## 🔐 Environment variables (Koyeb / .env)
Add these in **Koyeb → Environment Variables** (or local `.env` for testing):
