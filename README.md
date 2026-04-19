# PlotCraft

> Professional AI-Powered Video Script Creation Platform

<p align="center">
  <img src="https://img.shields.io/badge/version-3.0.0-blue.svg" alt="Version" />
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License" />
  <img src="https://img.shields.io/badge/React-18-61dafb?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tauri-ffc131?logo=tauri" alt="Tauri" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript" alt="TypeScript" />
  <a href="https://agions.github.io/PlotCraft"><img src="https://img.shields.io/badge/Docs-Online-purple.svg" alt="Documentation" /></a>
</p>

---

## 🎬 Overview

**PlotCraft** is a professional AI-powered video script creation platform that transforms stories and scripts into polished video content. Built for content creators, video producers, and storytelling professionals.

> *Craft Your Story, Render Your Vision*

---

## ✨ Key Features

- 📥 **Multi-Format Import** - Novels, screenplays, AI prompts
- 🤖 **Multi-Model AI** - GPT-4, Claude, Qwen, ERNIE, and more
- 🎬 **Intelligent Storyboarding** - Automated comic/video panel generation
- 👤 **Character Consistency** - Unified character design across projects
- 🎤 **Voice Synthesis** - Edge TTS, Azure, Alibaba Cloud, Baidu TTS
- 💰 **Cost Control** - Real-time API consumption tracking

---

## 🔄 7-Step Workflow

```
Import → Generate → Storyboard → Character → Render → Compose → Export
```

| Step | Function | Key Config |
|------|----------|------------|
| 📥 Import | Novel/Script/Prompt | Encoding detection, smart chaptering |
| 🤖 Generate | AI script generation | Model selection, episodes (1-200) |
| 🎬 Storyboard | Smart panel design | Aspect ratio (9:16/16:9), resolution |
| 👤 Character | Character design | Style (anime/comic/realistic), consistency |
| 🎨 Render | Scene rendering | Engine, lighting, color grading |
| ✨ Compose | Dynamic composition | Animation, TTS, SFX, BGM |
| 📤 Export | Video export | Format (MP4/WebM), quality |

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React 18 + TypeScript 5 + Vite |
| UI | Ant Design 5 + Styled Components |
| State | Zustand |
| Animation | Framer Motion |
| Desktop | Tauri (Rust) |
| Testing | Jest + React Testing Library |

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Agions/PlotCraft.git
cd PlotCraft

# Install dependencies
npm install

# Development mode
npm run dev

# Build desktop app
npm run tauri build
```

---

## 🎤 Voice Synthesis Providers

| Provider | Features |
|----------|----------|
| Edge TTS | Free, multiple voices |
| Azure TTS | High quality |
| Alibaba Cloud TTS | Chinese optimization |
| Baidu TTS | Chinese optimization |

---

## 🤖 Supported AI Models (Updated 2026)

### Text Generation

| Provider | Model | Release |
|----------|-------|---------|
| Zhipu | GLM-5 | Feb 2026 |
| MiniMax | M2.5 | Feb 2026 |
| Moonshot | Kimi K2.5 | 2026 |
| ByteDance | Doubao 2.0 | 2026 |
| Alibaba | Qwen 2.5 | 2026 |
| Baidu | ERNIE 4.0 | 2026 |

### Image Generation

| Provider | Model | Features | Release |
|----------|-------|----------|---------|
| ByteDance | Seedream 5.0 | 2K direct, 4K AI upscale, control brush | Feb 10, 2026 |
| Kuaishou | Kling 1.6 | Image + Video | 2026 |
| Shengshu | Vidu 2.0 | Image + Video | 2026 |

### Video Generation

| Provider | Model | Features | Release |
|----------|-------|----------|---------|
| ByteDance | Seedance 2.0 | Text/Image/Video input, consistent镜头 | Feb 12, 2026 |
| Kuaishou | Kling 1.6 | AI video generation | 2026 |
| Shengshu | Vidu 2.0 | AI video generation | 2026 |

### Voice Synthesis

| Provider | Model/Service | Features |
|----------|---------------|----------|
| Alibaba Cloud | CosyVoice 2.0 | Open source, 3s cloning, dialect/emotion support |
| Alibaba Cloud | KAN-TTS | Neural network + domain knowledge, multilingual |
| Baidu | TTS | Chinese optimization |
| iFLYTEK | TTS | Multilingual support |

---

## 📁 Project Structure

```
PlotCraft/
├── src/
│   ├── app/              # Application entry
│   ├── features/         # Feature modules
│   ├── components/       # UI components
│   │   ├── ui/          # Base UI components
│   │   ├── layout/       # Layout components
│   │   └── business/    # Business components
│   ├── core/             # Core functionality
│   │   ├── services/    # API services
│   │   ├── stores/      # State management
│   │   └── config/      # Configuration
│   ├── hooks/            # Custom hooks
│   ├── utils/           # Utilities
│   └── types/           # Type definitions
├── src-tauri/           # Tauri desktop backend
├── public/              # Static assets
└── docs/                # Documentation (docsify)
    ├── getting-started/  # Quick start, installation, config
    ├── user-guide/       # User documentation
    ├── developer-guide/  # Developer documentation
    ├── deployment/       # Deployment guides
    └── api/             # API reference
```

---

## 📚 Documentation

- **[Quick Start](https://agions.github.io/PlotCraft/#/getting-started/quick-start)** - Get started in 5 minutes
- **[User Guide](https://agions.github.io/PlotCraft/#/user-guide/workflow-overview)** - Complete workflow guide
- **[Developer Guide](https://agions.github.io/PlotCraft/#/developer-guide/architecture)** - Architecture & development
- **[API Reference](https://agions.github.io/PlotCraft/#/api/overview)** - Service API documentation
- **[Deployment](https://agions.github.io/PlotCraft/#/deployment/build)** - Build & deploy guide

---

## 📄 License

MIT License

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit Pull Requests.

---

<p align="center">
  <strong>PlotCraft</strong> — Craft Your Story, Render Your Vision
</p>
