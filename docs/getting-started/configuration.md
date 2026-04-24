<!--
  PlotCraft 配置 — Animated & Professional Edition
-->
<style>
/* ── Animations ────────────────────────────────────────── */
@keyframes flowGradient {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes scanLight {
  0%   { left: -100%; }
  100% { left: 200%; }
}
@keyframes h2Underline {
  from { width: 0; }
  to   { width: 60px; }
}
@keyframes tableRowSlide {
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes breathe {
  0%, 100% { box-shadow: 0 0 15px rgba(255,107,53,0.3); }
  50%      { box-shadow: 0 0 35px rgba(255,107,53,0.7); }
}
@keyframes footerGlow {
  0%, 100% { text-shadow: 0 0 10px rgba(69,184,172,0.4); }
  50%      { text-shadow: 0 0 30px rgba(69,184,172,0.9), 0 0 60px rgba(69,184,172,0.4); }
}
@keyframes iconSpin {
  0%   { transform: rotate(0deg) scale(1); }
  50%  { transform: rotate(180deg) scale(1.15); }
  100% { transform: rotate(360deg) scale(1); }
}

/* ── Breadcrumb ─────────────────────────────────────────── */
.breadcrumb { font-size: 0.82em; color: rgba(255,255,255,0.4); margin-bottom: 18px; animation: fadeIn 0.6s ease-out; }
.breadcrumb a { color: #45B8AC; text-decoration: none; transition: color 0.3s ease; }
.breadcrumb a:hover { color: #FF6B35; }

/* ── Hero Banner ────────────────────────────────────────── */
.hero-banner {
  font-family: 'Segoe UI', system-ui, sans-serif;
  background: linear-gradient(-45deg, #0a0a0f, #1a1a2e, #16213e, #0f3460, #1a1a2e);
  background-size: 400% 400%;
  animation: flowGradient 12s ease infinite;
  padding: 20px 18px;
  border-radius: 12px;
  text-align: center;
  margin-bottom: 28px;
  border: 1px solid rgba(255,107,53,0.25);
  position: relative;
  overflow: hidden;
}
.hero-banner::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, rgba(255,107,53,0.05) 0%, rgba(69,184,172,0.05) 100%);
  pointer-events: none;
}
.hero-title { font-size: 1.8em; font-weight: 800; color: #fff; margin: 0 0 6px; letter-spacing: 1px; animation: slideUp 0.6s ease-out; }
.hero-subtitle { color: rgba(255,255,255,0.7); font-size: 1em; margin: 0; animation: slideUp 0.7s ease-out 0.15s both; }

/* ── Section H2 ─────────────────────────────────────────── */
.h2-section {
  position: relative; margin-top: 34px; margin-bottom: 14px; font-size: 1.4em;
  font-weight: 700; color: #e8e8e8; padding-bottom: 8px; animation: slideUp 0.6s ease-out;
}
.h2-section::after {
  content: ''; position: absolute; bottom: 0; left: 0; height: 3px;
  background: linear-gradient(90deg, #FF6B35, #45B8AC, #FF6B35);
  background-size: 200% 100%;
  animation: flowGradient 3s ease infinite, h2Underline 0.8s ease-out forwards;
  border-radius: 2px;
}

/* ── Code Blocks ───────────────────────────────────────── */
pre {
  background: linear-gradient(135deg, #0d0d14, #1a1a2e);
  border: 1px solid rgba(255,107,53,0.2);
  border-radius: 10px; padding: 16px 20px; overflow-x: auto; animation: slideUp 0.6s ease-out;
  position: relative;
}
pre::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent);
  animation: scanLight 6s ease-in-out infinite; pointer-events: none; border-radius: 10px;
}
code { color: #e8e8e8; font-size: 0.88em; font-family: 'Fira Code', 'Cascadia Code', 'Consolas', monospace; }
:not(pre) > code { background: rgba(255,107,53,0.1); padding: 2px 7px; border-radius: 4px; color: #FF6B35; }

/* ── Tables ────────────────────────────────────────────── */
table { width: 100%; border-collapse: collapse; margin: 10px 0 22px; animation: fadeIn 0.8s ease-out; }
thead tr { background: linear-gradient(90deg, rgba(255,107,53,0.15), rgba(69,184,172,0.1)); }
th { padding: 10px 14px; text-align: left; font-size: 0.88em; color: #FF6B35; border-bottom: 2px solid rgba(255,107,53,0.3); font-weight: 700; }
td { padding: 9px 14px; font-size: 0.88em; color: rgba(255,255,255,0.78); border-bottom: 1px solid rgba(255,255,255,0.06); }
tr { transition: background 0.25s ease; animation: tableRowSlide 0.5s ease-out both; }
tbody tr:nth-child(1)  { animation-delay: 0.05s; }
tbody tr:nth-child(2)  { animation-delay: 0.1s; }
tbody tr:nth-child(3)  { animation-delay: 0.15s; }
tbody tr:nth-child(4)  { animation-delay: 0.2s; }
tbody tr:nth-child(5)  { animation-delay: 0.25s; }
tbody tr:nth-child(6)  { animation-delay: 0.3s; }
tbody tr:hover { background: rgba(255,107,53,0.08); }
tr:last-child td { border-bottom: none; }

/* ── Model Category Cards ───────────────────────────────── */
.model-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin: 10px 0 20px; }
.model-card {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px; padding: 14px 16px; animation: slideUp 0.5s ease-out both;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.model-card:hover { transform: translateY(-3px); border-color: rgba(255,107,53,0.35); }
.model-card:nth-child(1) { animation-delay: 0.05s; }
.model-card:nth-child(2) { animation-delay: 0.1s; }
.model-card:nth-child(3) { animation-delay: 0.15s; }
.model-card:nth-child(4) { animation-delay: 0.2s; }
.model-cat { font-weight: 700; font-size: 0.9em; color: #FF6B35; margin-bottom: 4px; }
.model-desc { font-size: 0.8em; color: rgba(255,255,255,0.6); margin: 0; }

/* ── Hint Block ────────────────────────────────────────── */
.hint-block { background: rgba(69,184,172,0.08); border-left: 3px solid #45B8AC; border-radius: 0 8px 8px 0; padding: 10px 16px; margin: 14px 0; animation: slideUp 0.5s ease-out; }
.hint-block p { margin: 0; font-size: 0.88em; color: rgba(255,255,255,0.75); }

/* ── Next Steps ────────────────────────────────────────── */
.next-steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin: 14px 0 24px; }
.next-step-card {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px; padding: 14px 16px; text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  display: flex; align-items: center; gap: 10px; animation: slideUp 0.5s ease-out both;
}
.next-step-card:nth-child(1) { animation-delay: 0.05s; }
.next-step-card:nth-child(2) { animation-delay: 0.1s; }
.next-step-card:hover { transform: translateY(-4px); box-shadow: 0 8px 22px rgba(255,107,53,0.18); border-color: rgba(255,107,53,0.45); }
.next-step-icon { font-size: 1.3em; flex-shrink: 0; }
.next-step-label { font-size: 0.88em; font-weight: 600; color: rgba(255,255,255,0.85); }
.next-step-link { font-size: 0.78em; color: #45B8AC; }

/* ── Separator ─────────────────────────────────────────── */
.separator { border: none; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.3), rgba(69,184,172,0.3), transparent); margin: 26px 0; animation: fadeIn 1s ease-out; }

/* ── Footer ─────────────────────────────────────────────── */
.footer-section { text-align: center; padding: 22px 16px 8px; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 30px; animation: fadeIn 1s ease-out; }
.footer-text { color: rgba(255,255,255,0.5); font-size: 0.85em; animation: footerGlow 3s ease-in-out infinite; }
.footer-tagline { color: rgba(255,255,255,0.35); font-size: 0.8em; margin-top: 6px; animation: breathe 4s ease-in-out infinite; }
</style>

<div class="breadcrumb">← [文档首页](https://agions.github.io/PlotCraft) · [快速开始](./quick-start.md) · 工作流概述 →</div>

<div class="hero-banner"><div class="hero-title">⚙️ 配置</div><div class="hero-subtitle">PlotCraft 的所有配置选项</div></div>

## 环境变量

在项目根目录创建 `.env.local`：

### 文字生成模型

```bash
# 智谱 GLM-5（默认）
VITE_ALIBABA_API_KEY=your-key
VITE_ALIBABA_API_URL=https://dashscope.aliyuncs.com/api/v1

# MiniMax M2.5
VITE_MINIMAX_API_KEY=your-key
VITE_MINIMAX_API_URL=https://api.minimax.chat/v1

# OpenAI GPT（可选）
VITE_OPENAI_API_KEY=your-key
VITE_OPENAI_API_URL=https://api.openai.com/v1

# 月之暗面 Kimi K2.5
VITE_KIMI_API_KEY=your-key

# 字节 Doubao 2.0
VITE_DOUBAO_API_KEY=your-key

# 阿里 Qwen 2.5
VITE_QWEN_API_KEY=your-key

# 百度 ERNIE 4.0
VITE_ERNIE_API_KEY=your-key
```

### 图像生成

```bash
# 字节 Seedream 5.0（默认，推荐）
VITE_SEEDDREAM_API_KEY=your-key
VITE_SEEDDREAM_API_URL=https://api.minimax.chat/v1

# 快手 Kling 1.6
VITE_KLING_API_KEY=your-key

# 生数 Vidu 2.0
VITE_VIDU_API_KEY=your-key
```

### 视频生成

```bash
# 字节 Seedance 2.0
VITE_SEEDANCE_API_KEY=your-key

# 快手 Kling 1.6
VITE_KLING_API_KEY=your-key
```

### 语音合成

```bash
# Edge TTS（免费，默认）
VITE_TTS_PROVIDER=edge

# 阿里云 CosyVoice 2.0
VITE_COSYVOICE_API_KEY=your-key

# 阿里云 KAN-TTS
VITE_KANTTS_API_KEY=your-key

# 百度 TTS
VITE_BAIDU_TTS_API_KEY=your-key

# 科大讯飞 TTS
VITE_XUNFEI_TTS_API_KEY=your-key
```

### 应用配置

```bash
# 应用模式
VITE_APP_MODE=web|desktop

# API 基础 URL（用于 Web 部署）
VITE_API_BASE_URL=https://api.plotcraft.example.com
```

---

## 配置文件

对于高级设置，创建 `src/core/config/app.config.ts`：

```typescript
export const appConfig = {
  app: {
    name: 'PlotCraft',
    version: '3.0.0',
    mode: import.meta.env.VITE_APP_MODE || 'web',
  },

  // AI 提供商
  ai: {
    defaultProvider: 'minimax',
    defaultModel: 'glm-5',
    fallbackProviders: ['minimax', 'openai', 'kimi'],
  },

  // 图像生成
  image: {
    defaultModel: 'seedream-5.0',
    defaultResolution: '16:9',
    defaultQuality: 'high',
  },

  // 视频生成
  video: {
    defaultModel: 'seedance-2.0',
    defaultFormat: 'mp4',
    defaultFps: 30,
  },

  // 语音合成
  tts: {
    defaultProvider: 'edge',
    defaultVoice: 'zh-CN-XiaoxiaoNeural',
  },

  // 视频导出
  videoExport: {
    defaultFormat: 'mp4',
    defaultResolution: '1080p',
    defaultFps: 30,
  },

  // 功能开关
  features: {
    workflowAutomation: true,
    collaboration: false,
    cloudSync: false,
  },
};
```

---

## 支持的模型一览（v3.0.0 · 2026年）

<div class="model-grid">
  <div class="model-card"><div class="model-cat">📝 文字生成</div><div class="model-desc">GLM-5 · M2.5 · Kimi K2.5 · Doubao 2.0 · Qwen 2.5 · ERNIE 4.0</div></div>
  <div class="model-card"><div class="model-cat">🖼️ 图像生成</div><div class="model-desc">Seedream 5.0 · Kling 1.6 · Vidu 2.0</div></div>
  <div class="model-card"><div class="model-cat">🎬 视频生成</div><div class="model-desc">Seedance 2.0 · Kling 1.6 · Vidu 2.0</div></div>
  <div class="model-card"><div class="model-cat">🎤 语音合成</div><div class="model-desc">CosyVoice 2.0 · KAN-TTS · Edge TTS</div></div>
</div>

### 文字生成

| 模型 | 提供商 | 上下文 | 发布日期 |
|------|--------|--------|----------|
| GLM-5 | 智谱 AI | 128k | 2026年2月 |
| M2.5 | MiniMax | 128k | 2026年2月 |
| Kimi K2.5 | 月之暗面 | 200k | 2026年 |
| Doubao 2.0 | 字节跳动 | 128k | 2026年 |
| Qwen 2.5 | 阿里云 | 128k | 2026年 |
| ERNIE 4.0 | 百度 | 128k | 2026年 |

### 图像生成

| 模型 | 提供商 | 特性 | 发布日期 |
|------|--------|------|----------|
| Seedream 5.0 | 字节跳动 | 2K直出、AI 4K增强、控制笔刷 | 2026年2月10日 |
| Kling 1.6 | 快手 | 图像+视频生成 | 2026年 |
| Vidu 2.0 | 生数科技 | 图像+视频生成、高一致性 | 2026年 |

### 视频生成

| 模型 | 提供商 | 特性 | 发布日期 |
|------|--------|------|----------|
| Seedance 2.0 | 字节跳动 | 文/图/视频输入、镜头一致 | 2026年2月12日 |
| Kling 1.6 | 快手 | AI视频生成 | 2026年 |
| Vidu 2.0 | 生数科技 | AI视频生成 | 2026年 |

### 语音合成

| 模型/服务 | 提供商 | 特性 |
|-----------|--------|------|
| CosyVoice 2.0 | 阿里云 | 开源、3秒克隆、方言/情感 |
| KAN-TTS | 阿里云 | 神经网络+领域知识、多语言 |
| TTS | 百度 | 中文优化、多语言 |
| TTS | 科大讯飞 | 多语言支持 |

<div class="hint-block"><p>💡 <strong>提示</strong>：至少需要配置一个文字生成模型的 API Key 才能使用 AI 功能。推荐优先配置智谱 GLM-5 或 MiniMax M2.5。</p></div>

---

## 下一步

<div class="next-steps-grid">
  <a href="./quick-start.md" class="next-step-card"><div class="next-step-icon">🚀</div><div><div class="next-step-label">快速开始</div><div class="next-step-link">5 分钟上手 →</div></div></a>
  <a href="../user-guide/workflow-overview.md" class="next-step-card"><div class="next-step-icon">🔀</div><div><div class="next-step-label">工作流程</div><div class="next-step-link">深入了解 →</div></div></a>
</div>

<hr class="separator">
<div class="footer-section"><div class="footer-text">PlotCraft 文档 · AI 驱动的专业视频脚本创作平台</div><div class="footer-tagline">_💫 将你的故事转化为专业级视频内容_</div></div>
