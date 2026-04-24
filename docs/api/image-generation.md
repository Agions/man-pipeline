<!--
  PlotCraft 图像生成服务 — Animated & Professional Edition
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
tbody tr:nth-child(1) { animation-delay: 0.05s; } tbody tr:nth-child(2) { animation-delay: 0.1s; } tbody tr:nth-child(3) { animation-delay: 0.15s; } tbody tr:nth-child(4) { animation-delay: 0.2s; } tbody tr:nth-child(5) { animation-delay: 0.25s; }
tbody tr:hover { background: rgba(255,107,53,0.08); } tr:last-child td { border-bottom: none; }
.model-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px; margin: 10px 0 20px; }
.model-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px 14px; animation: slideUp 0.4s ease-out both; transition: transform 0.3s ease, border-color 0.3s ease; }
.model-card:hover { transform: translateY(-3px); border-color: rgba(255,107,53,0.35); }
.model-name { font-weight: 700; font-size: 0.85em; color: #FF6B35; margin-bottom: 3px; }
.model-provider { font-size: 0.78em; color: rgba(255,255,255,0.6); margin: 0; }
.hint-block { background: rgba(69,184,172,0.08); border-left: 3px solid #45B8AC; border-radius: 0 8px 8px 0; padding: 10px 16px; margin: 14px 0; animation: slideUp 0.5s ease-out; }
.hint-block p { margin: 0; font-size: 0.88em; color: rgba(255,255,255,0.75); }
.separator { border: none; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.3), rgba(69,184,172,0.3), transparent); margin: 26px 0; animation: fadeIn 1s ease-out; }
.footer-section { text-align: center; padding: 22px 16px 8px; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 30px; animation: fadeIn 1s ease-out; }
.footer-text { color: rgba(255,255,255,0.5); font-size: 0.85em; animation: footerGlow 3s ease-in-out infinite; }
.footer-tagline { color: rgba(255,255,255,0.35); font-size: 0.8em; margin-top: 6px; animation: breathe 4s ease-in-out infinite; }
</style>

<div class="breadcrumb">← [文档首页](https://agions.github.io/PlotCraft) · [API 概述](./overview.md) · TTS 服务 →</div>

<div class="hero-banner"><div class="hero-title">🖼️ 图像生成服务</div><div class="hero-subtitle">支持角色一致性的多提供商图像合成</div></div>

## 概述

ImageGenerationService 提供对多种 AI 图像生成提供商的统一访问，包括 Seedream（MiniMax）、FLUX（Replicate）和 DALL-E（OpenAI）。

## 导入

```typescript
import { imageGenerationService } from '@/core/services';
```

## 方法

### generateImage()

从文本提示生成单个图像。

```typescript
async generateImage(
  prompt: string,
  options?: ImageGenerationOptions
): Promise<ImageResult>
```

**示例：**

```typescript
const result = await imageGenerationService.generateImage(
  '一位武士站在传统日式寺庙前，日落时分，电影级灯光，4K',
  {
    model: 'seedream-5.0',
    resolution: '16:9',
    quality: 'hd',
  }
);
```

### generateCharacterImage()

生成具有角色一致性的图像。

```typescript
async generateCharacterImage(
  character: Character,
  prompt: string,
  options?: ImageGenerationOptions
): Promise<ImageResult>
```

### generateBatch()

批量生成多个图像。

```typescript
async generateBatch(
  prompts: string[],
  options?: ImageGenerationOptions
): Promise<ImageResult[]>
```

## 支持的模型

<div class="model-grid">
  <div class="model-card"><div class="model-name">seedream-5.0</div><div class="model-provider">MiniMax · 动漫、插画</div></div>
  <div class="model-card"><div class="model-name">flux</div><div class="model-provider">Replicate · 写实、多样化</div></div>
  <div class="model-card"><div class="model-name">dalle-3</div><div class="model-provider">OpenAI · 创意、艺术</div></div>
  <div class="model-card"><div class="model-name">sdxl</div><div class="model-provider">Stability · 稳定、可靠</div></div>
</div>

## 分辨率预设

| 预设 | 尺寸 | 宽高比 |
|--------|------------|--------------|
| `1:1` | 1024×1024 | 正方形 |
| `16:9` | 1280×720 | 宽屏 |
| `9:16` | 720×1280 | 竖屏 |
| `4:3` | 1024×768 | 标准 |

## 角色一致性

为保持角色外观一致：

```typescript
// 1. 设置角色一致性种子
character.consistency = {
  seed: Math.floor(Math.random() * 999999),
  referenceImages: [uploadedRefUrl],
};

// 2. 在生成时使用 characterId
imageGenerationService.generateCharacterImage(
  character,
  '角色执行动作',
  { model: 'seedream-5.0' }
);
```

## 成本估算

| 模型 | 单张图像成本 |
|-------|----------------|
| seedream-5.0 | ~$0.05 |
| dalle-3 | ~$0.04 |
| flux | ~$0.02 |
| sdxl | 免费（本地） |

<div class="hint-block"><p>💡 <strong>最佳实践</strong>：提示词应明确指定风格、灯光、构图细节和情绪/氛围。</p></div>

<hr class="separator">
<div class="footer-section"><div class="footer-text">PlotCraft 文档 · AI 驱动的专业视频脚本创作平台</div><div class="footer-tagline">_💫 将你的故事转化为专业级视频内容_</div></div>
