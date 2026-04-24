<!--
  PlotCraft 渲染与导出 — Animated & Professional Edition
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
tbody tr:hover { background: rgba(255,107,53,0.08); } tr:last-child td { border-bottom: none; }
.pipeline-diagram { background: linear-gradient(135deg, rgba(10,10,15,0.95), rgba(22,33,62,0.9)); border: 1px solid rgba(255,107,53,0.2); border-radius: 12px; padding: 18px 22px; overflow-x: auto; margin: 10px 0 20px; animation: slideUp 0.6s ease-out; position: relative; }
.pipeline-diagram pre { background: transparent; border: none; padding: 0; font-size: 0.82em; line-height: 1.65; color: rgba(255,255,255,0.82); }
.pipeline-diagram::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.015), transparent); animation: scanLight 8s ease-in-out infinite; pointer-events: none; border-radius: 12px; }
.format-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; margin: 10px 0 20px; }
.format-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px 14px; animation: slideUp 0.4s ease-out both; transition: transform 0.3s ease, border-color 0.3s ease; }
.format-card:hover { transform: translateY(-3px); border-color: rgba(255,107,53,0.35); }
.format-name { font-weight: 700; font-size: 0.85em; color: #FF6B35; margin-bottom: 3px; }
.format-detail { font-size: 0.78em; color: rgba(255,255,255,0.6); margin: 0; }
.separator { border: none; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.3), rgba(69,184,172,0.3), transparent); margin: 26px 0; animation: fadeIn 1s ease-out; }
.footer-section { text-align: center; padding: 22px 16px 8px; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 30px; animation: fadeIn 1s ease-out; }
.footer-text { color: rgba(255,255,255,0.5); font-size: 0.85em; animation: footerGlow 3s ease-in-out infinite; }
.footer-tagline { color: rgba(255,255,255,0.35); font-size: 0.8em; margin-top: 6px; animation: breathe 4s ease-in-out infinite; }
</style>

<div class="breadcrumb">← [文档首页](https://agions.github.io/PlotCraft) · [用户指南](./workflow-overview.md) · 概述 →</div>

<div class="hero-banner"><div class="hero-title">🖼️ 渲染与导出</div><div class="hero-subtitle">从故事板和资产生成最终视频</div></div>

## 渲染管线

<div class="pipeline-diagram"><pre>
┌─────────────────────────────────────────────────────────────────────┐
│                        渲染管线                                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────┐    ┌─────────────┐    ┌──────────┐    ┌──────────┐  │
│  │ 故事板  │───▶│  图像生成   │───▶│  口型同步 │───▶│   合成   │  │
│  └─────────┘    └─────────────┘    └──────────┘    └──────────┘  │
│       │               │                 │               │          │
│       │               │                 │               ▼          │
│       │               ▼                 │         ┌──────────┐    │
│       │         ┌─────────────┐    ┌──────────┐   └──────────┘    │
│       │         │    角色     │    │   音频   │                  │
│       │         │    图片     │    │   TTS    │                  │
│       │         └─────────────┘    └──────────┘                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
</pre></div>

## 渲染步骤

### 1. 场景图像生成

为每个故事板帧生成图像：

```typescript
const result = await imageGenerationService.generateImage(
  '侦探在昏暗办公室里的戏剧性场景，黑色电影风格',
  { model: 'seedream-5.0', resolution: '16:9', quality: 'high' }
);
```

### 2. 角色图像生成

生成角色肖像：

```typescript
const result = await imageGenerationService.generateImage(
  '年轻亚裔男性侦探的肖像，表情严肃',
  { model: 'seedream-5.0', characterId: 'detective_01' }
);
```

### 3. 口型同步动画

将角色唇部运动与音频同步：

```typescript
const result = await lipSyncService.syncLip(
  characterImageUrl,
  audioUrl,
  { model: 'wav2lip', quality: 'high' }
);
```

### 4. 音频生成（TTS）

生成语音音频：

```typescript
const result = await ttsService.synthesize({
  text: '您好，欢迎观看节目。',
  config: { provider: 'edge', voice: 'zh-CN-XiaoxiaoNeural', speed: 1.0 }
});
```

## 导出选项

<div class="format-grid">
  <div class="format-card"><div class="format-name">MP4</div><div class="format-detail">H.264 · 通用兼容性</div></div>
  <div class="format-card"><div class="format-name">WebM</div><div class="format-detail">VP9 · 网络、透明</div></div>
  <div class="format-card"><div class="format-name">MOV</div><div class="format-detail">ProRes · 后期制作</div></div>
</div>

### 质量预设

| 预设 | 分辨率 | 码率 | 文件大小（1分钟） |
|--------|------------|---------|-------------------|
| 720p | 1280×720 | 5 Mbps | ~35 MB |
| 1080p | 1920×1080 | 10 Mbps | ~70 MB |
| 4K | 3840×2160 | 35 Mbps | ~250 MB |

## 下一步

- [API 概述](../api/overview.md) - 技术 API 参考
- [部署](../deployment/build.md) - 构建和部署
- [工作流概览](./workflow-overview.md) - 返回工作流

<hr class="separator">
<div class="footer-section"><div class="footer-text">PlotCraft 文档 · AI 驱动的专业视频脚本创作平台</div><div class="footer-tagline">_💫 将你的故事转化为专业级视频内容_</div></div>
