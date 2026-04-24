<!--
  PlotCraft API 概述 — Animated & Professional Edition
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
table { width: 100%; border-collapse: collapse; margin: 10px 0 22px; animation: fadeIn 0.8s ease-out; }
thead tr { background: linear-gradient(90deg, rgba(255,107,53,0.15), rgba(69,184,172,0.1)); }
th { padding: 10px 14px; text-align: left; font-size: 0.88em; color: #FF6B35; border-bottom: 2px solid rgba(255,107,53,0.3); font-weight: 700; }
td { padding: 9px 14px; font-size: 0.88em; color: rgba(255,255,255,0.78); border-bottom: 1px solid rgba(255,255,255,0.06); }
tr { transition: background 0.25s ease; animation: slideUp 0.4s ease-out both; }
tbody tr:nth-child(1) { animation-delay: 0.05s; } tbody tr:nth-child(2) { animation-delay: 0.1s; } tbody tr:nth-child(3) { animation-delay: 0.15s; } tbody tr:nth-child(4) { animation-delay: 0.2s; }
tbody tr:hover { background: rgba(255,107,53,0.08); } tr:last-child td { border-bottom: none; }
.service-diagram { background: linear-gradient(135deg, rgba(10,10,15,0.95), rgba(22,33,62,0.9)); border: 1px solid rgba(255,107,53,0.2); border-radius: 12px; padding: 18px 22px; overflow-x: auto; margin: 10px 0 20px; animation: slideUp 0.6s ease-out; position: relative; }
.service-diagram pre { background: transparent; border: none; padding: 0; font-size: 0.82em; line-height: 1.65; color: rgba(255,255,255,0.82); }
.service-diagram::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.015), transparent); animation: scanLight 8s ease-in-out infinite; pointer-events: none; border-radius: 12px; }
.service-card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin: 10px 0 20px; }
.service-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px 14px; animation: slideUp 0.4s ease-out both; transition: transform 0.3s ease, border-color 0.3s ease; }
.service-card:hover { transform: translateY(-3px); border-color: rgba(255,107,53,0.35); }
.service-name { font-weight: 700; font-size: 0.85em; color: #FF6B35; margin-bottom: 3px; }
.service-desc { font-size: 0.78em; color: rgba(255,255,255,0.6); margin: 0; }
.hint-block { background: rgba(69,184,172,0.08); border-left: 3px solid #45B8AC; border-radius: 0 8px 8px 0; padding: 10px 16px; margin: 14px 0; animation: slideUp 0.5s ease-out; }
.hint-block p { margin: 0; font-size: 0.88em; color: rgba(255,255,255,0.75); }
.separator { border: none; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.3), rgba(69,184,172,0.3), transparent); margin: 26px 0; animation: fadeIn 1s ease-out; }
.footer-section { text-align: center; padding: 22px 16px 8px; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 30px; animation: fadeIn 1s ease-out; }
.footer-text { color: rgba(255,255,255,0.5); font-size: 0.85em; animation: footerGlow 3s ease-in-out infinite; }
.footer-tagline { color: rgba(255,255,255,0.35); font-size: 0.8em; margin-top: 6px; animation: breathe 4s ease-in-out infinite; }
</style>

<div class="breadcrumb">← [文档首页](https://agions.github.io/PlotCraft) · [API 参考](./ai-service.md) · 图像生成 →</div>

<div class="hero-banner"><div class="hero-title">📡 API 概述</div><div class="hero-subtitle">PlotCraft 模块化的服务 API，用于 AI 驱动的视频创作</div></div>

## 核心服务

<div class="service-card-grid">
  <div class="service-card"><div class="service-name">aiService</div><div class="service-desc">统一 AI 文本生成（多模型支持）</div></div>
  <div class="service-card"><div class="service-name">imageGenerationService</div><div class="service-desc">多提供商图像生成</div></div>
  <div class="service-card"><div class="service-name">ttsService</div><div class="service-desc">文本转语音合成</div></div>
  <div class="service-card"><div class="service-name">lipSyncService</div><div class="service-desc">唇形同步动画</div></div>
  <div class="service-card"><div class="service-name">pipelineService</div><div class="service-desc">端到端视频创作流水线</div></div>
  <div class="service-card"><div class="service-name">storyboardService</div><div class="service-desc">分镜管理</div></div>
  <div class="service-card"><div class="service-name">characterService</div><div class="service-desc">角色管理</div></div>
  <div class="service-card"><div class="service-name">videoExportService</div><div class="service-desc">视频合成与导出</div></div>
</div>

## 服务架构

<div class="service-diagram"><pre>
<span style="color:#e8e8e8">应用程序</span>
    │
    ▼
┌─────────────────────────────────────────┐
│              核心服务层                   │
├─────────────────────────────────────────┤
│                                          │
│  ┌──────────────┐  ┌──────────────┐     │
│  │  AI 文字生成  │  │   图像生成   │     │
│  │  (多模型)    │  │  (多模型)    │     │
│  └──────┬───────┘  └──────┬───────┘     │
│         │                  │              │
│  ┌──────▼───────┐  ┌──────▼───────┐     │
│  │   TTS 语音   │  │   唇形同步   │     │
│  │    合成      │  │    动画      │     │
│  └──────────────┘  └──────────────┘     │
│                                          │
│  ┌──────────────┐  ┌──────────────┐     │
│  │   视频创作   │  │   视频导出   │     │
│  │    流水线    │  │    合成      │     │
│  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────┘
</pre></div>

## 使用示例

```typescript
import {
  aiService,
  imageGenerationService,
  ttsService,
  pipelineService,
} from '@/core/services';

// 1. AI 生成脚本
const script = await aiService.generate({
  model: 'glm-5',
  prompt: '为智能手表广告生成30秒视频脚本，包含3个场景',
  options: { maxTokens: 2048, temperature: 0.8 }
});

// 2. 生成场景图像
const image = await imageGenerationService.generateImage({
  prompt: '现代城市夜景，电影级灯光，温暖色调',
  model: 'seedream-5.0',
  resolution: '16:9'
});

// 3. 语音合成
const audio = await ttsService.synthesize({
  text: '欢迎使用 PlotCraft，让创意触手可及',
  provider: 'cosyvoice',
  voice: 'zh-CN-XiaoxiaoNeural',
  emotion: 'happy'
});

// 4. 运行完整流水线
const result = await pipelineService.run({
  input: novelText,
  steps: ['import', 'analyze', 'script', 'storyboard', 'render', 'export'],
  options: { quality: 'high', resolution: '1080p' }
});
```

## 服务可用性

| 服务 | Web | Desktop | 状态 |
|------|-----|---------|------|
| aiService | ✅ | ✅ | 稳定 |
| imageGenerationService | ✅ | ✅ | 稳定 |
| ttsService | ✅ | ✅ | 稳定 |
| lipSyncService | ✅ | ✅ | 稳定 |
| pipelineService | ✅ | ✅ | 稳定 |
| storyboardService | ✅ | ✅ | 稳定 |
| characterService | ✅ | ✅ | 稳定 |
| videoExportService | ⚠️ | ✅ | Beta |

<div class="hint-block"><p>💡 <strong>类型安全</strong>：所有服务均使用 TypeScript 接口，提供完整类型支持。导入类型：<code>import type { GenerationOptions, ImageGenerationOptions, TTSConfig } from '@/core/services';</code></p></div>

## 下一步

- [AI 服务](./ai-service.md) - 文字生成
- [图像生成](./image-generation.md) - 图像合成
- [TTS 服务](./tts-service.md) - 语音合成

<hr class="separator">
<div class="footer-section"><div class="footer-text">PlotCraft 文档 · AI 驱动的专业视频脚本创作平台</div><div class="footer-tagline">_💫 将你的故事转化为专业级视频内容_</div></div>
