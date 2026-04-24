<!--
  PlotCraft 环境配置 — Animated & Professional Edition
-->
<style>
@keyframes flowGradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
@keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes scanLight { 0% { left: -100%; } 100% { left: 200%; } }
@keyframes h2Underline { from { width: 0; } to { width: 60px; } }
@keyframes breathe { 0%, 100% { box-shadow: 0 0 15px rgba(255,107,53,0.3); } 50% { box-shadow: 0 0 35px rgba(255,107,53,0.7); } }
@keyframes footerGlow { 0%, 100% { text-shadow: 0 0 10px rgba(69,184,172,0.4); } 50% { text-shadow: 0 0 30px rgba(69,184,172,0.9), 0 0 60px rgba(69,184,172,0.4); } }
.breadcrumb { font-size: 0.82em; color: rgba(255,255,255,0.4); margin-bottom: 18px; animation: fadeIn 0.6s ease-out; }
.breadcrumb a { color: #45B8AC; text-decoration: none; transition: color 0.3s ease; }
.breadcrumb a:hover { color: #FF6B35; }
.hero-banner { font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(-45deg, #0a0a0f, #1a1a2e, #16213e, #0f3460, #1a1a2e); background-size: 400% 400%; animation: flowGradient 12s ease infinite; padding: 20px 18px; border-radius: 12px; text-align: center; margin-bottom: 28px; border: 1px solid rgba(255,107,53,0.25); position: relative; overflow: hidden; }
.hero-banner::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(255,107,53,0.05) 0%, rgba(69,184,172,0.05) 100%); pointer-events: none; }
.hero-title { font-size: 1.8em; font-weight: 800; color: #fff; margin: 0 0 6px; letter-spacing: 1px; animation: slideUp 0.6s ease-out; }
.hero-subtitle { color: rgba(255,255,255,0.7); font-size: 1em; margin: 0; animation: slideUp 0.7s ease-out 0.15s both; }
.h2-section { position: relative; margin-top: 34px; margin-bottom: 14px; font-size: 1.4em; font-weight: 700; color: #e8e8e8; padding-bottom: 8px; animation: slideUp 0.6s ease-out; }
.h2-section::after { content: ''; position: absolute; bottom: 0; left: 0; height: 3px; background: linear-gradient(90deg, #FF6B35, #45B8AC, #FF6B35); background-size: 200% 100%; animation: flowGradient 3s ease infinite, h2Underline 0.8s ease-out forwards; border-radius: 2px; }
pre { background: linear-gradient(135deg, #0d0d14, #1a1a2e); border: 1px solid rgba(255,107,53,0.2); border-radius: 10px; padding: 16px 20px; overflow-x: auto; animation: slideUp 0.6s ease-out; position: relative; }
pre::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent); animation: scanLight 6s ease-in-out infinite; pointer-events: none; border-radius: 10px; }
code { color: #e8e8e8; font-size: 0.88em; font-family: 'Fira Code', 'Cascadia Code', 'Consolas', monospace; }
:not(pre) > code { background: rgba(255,107,53,0.1); padding: 2px 7px; border-radius: 4px; color: #FF6B35; }
.env-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; margin: 10px 0 20px; }
.env-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px 14px; animation: slideUp 0.4s ease-out both; transition: transform 0.3s ease, border-color 0.3s ease; }
.env-card:hover { transform: translateY(-3px); border-color: rgba(255,107,53,0.35); }
.env-cat { font-weight: 700; font-size: 0.85em; color: #FF6B35; margin-bottom: 4px; }
.env-keys { font-size: 0.78em; color: rgba(255,255,255,0.6); margin: 0; font-family: 'Fira Code', monospace; }
.separator { border: none; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.3), rgba(69,184,172,0.3), transparent); margin: 26px 0; animation: fadeIn 1s ease-out; }
.footer-section { text-align: center; padding: 22px 16px 8px; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 30px; animation: fadeIn 1s ease-out; }
.footer-text { color: rgba(255,255,255,0.5); font-size: 0.85em; animation: footerGlow 3s ease-in-out infinite; }
.footer-tagline { color: rgba(255,255,255,0.35); font-size: 0.8em; margin-top: 6px; animation: breathe 4s ease-in-out infinite; }
</style>

<div class="breadcrumb">← [文档首页](https://agions.github.io/PlotCraft) · [部署指南](./build.md) · 构建 →</div>

<div class="hero-banner"><div class="hero-title">🔐 环境配置</div><div class="hero-subtitle">PlotCraft 环境变量和配置参考</div></div>

## 环境文件

| 文件 | 用途 | 优先级 |
|------|------|--------|
| `.env.local` | 本地开发（推荐） | 最高 |
| `.env.production` | 生产构建 | 中 |
| `.env` | 默认值 | 最低 |

## 环境变量速查

<div class="env-grid">
  <div class="env-card"><div class="env-cat">📝 文字生成</div><div class="env-keys">VITE_ALIBABA_API_KEY<br>VITE_MINIMAX_API_KEY<br>VITE_OPENAI_API_KEY<br>VITE_KIMI_API_KEY</div></div>
  <div class="env-card"><div class="env-cat">🖼️ 图像生成</div><div class="env-keys">VITE_SEEDDREAM_API_KEY<br>VITE_KLING_API_KEY<br>VITE_VIDU_API_KEY</div></div>
  <div class="env-card"><div class="env-cat">🎬 视频生成</div><div class="env-keys">VITE_SEEDANCE_API_KEY<br>VITE_KLING_API_KEY</div></div>
  <div class="env-card"><div class="env-cat">🎤 语音合成</div><div class="env-keys">VITE_TTS_PROVIDER<br>VITE_COSYVOICE_API_KEY</div></div>
  <div class="env-card"><div class="env-cat">⚙️ 应用配置</div><div class="env-keys">VITE_APP_MODE<br>VITE_API_BASE_URL</div></div>
</div>

## 示例 .env.local

```bash
# 必填：文字生成
VITE_ALIBABA_API_KEY=your-key

# 推荐：图像生成
VITE_SEEDDREAM_API_KEY=your-key

# 可选：语音合成
VITE_TTS_PROVIDER=edge

# 应用模式
VITE_APP_MODE=web
```

## 生产环境

生产构建时使用 `.env.production`：

```bash
# 构建时自动使用 .env.production
npm run build
```

<div class="separator">
<div class="footer-section"><div class="footer-text">PlotCraft 文档 · AI 驱动的专业视频脚本创作平台</div><div class="footer-tagline">_💫 将你的故事转化为专业级视频内容_</div></div>
