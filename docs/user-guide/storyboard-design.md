<!--
  PlotCraft 故事板设计 — Animated & Professional Edition
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
.camera-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px; margin: 10px 0 20px; }
.camera-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px 14px; animation: slideUp 0.4s ease-out both; transition: transform 0.3s ease, border-color 0.3s ease; }
.camera-card:hover { transform: translateY(-3px); border-color: rgba(255,107,53,0.35); }
.camera-type { font-weight: 700; font-size: 0.85em; color: #FF6B35; margin-bottom: 3px; }
.camera-desc { font-size: 0.78em; color: rgba(255,255,255,0.6); margin: 0; }
.separator { border: none; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.3), rgba(69,184,172,0.3), transparent); margin: 26px 0; animation: fadeIn 1s ease-out; }
.footer-section { text-align: center; padding: 22px 16px 8px; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 30px; animation: fadeIn 1s ease-out; }
.footer-text { color: rgba(255,255,255,0.5); font-size: 0.85em; animation: footerGlow 3s ease-in-out infinite; }
.footer-tagline { color: rgba(255,255,255,0.35); font-size: 0.8em; margin-top: 6px; animation: breathe 4s ease-in-out infinite; }
</style>

<div class="breadcrumb">← [文档首页](https://agions.github.io/PlotCraft) · [用户指南](./workflow-overview.md) · 角色设计 →</div>

<div class="hero-banner"><div class="hero-title">🎬 故事板设计</div><div class="hero-subtitle">将脚本转换为可视化故事板帧</div></div>

## 概述

故事板制作将脚本转换为一系列可视化面板，每个面板描述：
- **场景内容** — 视觉上发生了什么
- **摄像机角度** — 镜头类型（全景、中景、特写）
- **构图** — 元素如何排列
- **时长** — 帧应该持续多长时间

## StoryboardFrame 结构

```typescript
interface StoryboardFrame {
  id: string;
  title: string;
  sceneDescription: string;
  composition: string;
  cameraType: CameraType;
  dialogue?: string;
  duration: number;
  imageUrl?: string;
}
```

## 摄像机类型

<div class="camera-grid">
  <div class="camera-card"><div class="camera-type">wide</div><div class="camera-desc">全景 · 场景设定</div></div>
  <div class="camera-card"><div class="camera-type">medium</div><div class="camera-desc">中景 · 对话</div></div>
  <div class="camera-card"><div class="camera-type">closeup</div><div class="camera-desc">特写 · 情感、细节</div></div>
  <div class="camera-card"><div class="camera-type">pan</div><div class="camera-desc">横摇 · 跟随动作</div></div>
  <div class="camera-card"><div class="camera-type">tilt</div><div class="camera-desc">竖摇 · 垂直揭示</div></div>
  <div class="camera-card"><div class="camera-type">dolly</div><div class="camera-desc">推拉 · 强调</div></div>
</div>

## 构图类型

| 类型 | 中文 | 描述 |
|------|---------|-------------|
| `center` | 中心构图 | 主体居中 |
| `rule-of-thirds` | 三分法 | 1/3 网格对齐 |
| `diagonal` | 对角线 | 动态角度 |
| `leading-lines` | 引导线 | 线条引导视线 |
| `framing` | 框架式 | 自然框架 |

## 故事板编辑器

### 界面

- **左侧面板**：帧列表（缩略图）
- **中间**：预览/编辑所选帧
- **右侧面板**：帧属性

### 操作

1. **生成帧**：AI 从脚本生成帧
2. **添加帧**：手动插入新帧
3. **删除帧**：删除选中的帧
4. **重新排序**：拖动重新排序帧
5. **生成图片**：为帧创建图片
6. **批量生成**：生成所有帧图片

## 最佳实践

1. **覆盖范围**：包含场景设定的全景 + 情感特写
2. **连续性**：确保帧之间逻辑流畅
3. **节奏**：变化镜头类型以保持视觉兴趣
4. **时长**：平衡 — 每帧通常 3-5 秒

## 下一步

- [角色设计](./character-design.md) - 设计您的角色
- [渲染与导出](./rendering-export.md) - 生成最终视频
- [工作流概览](./workflow-overview.md) - 返回工作流

<hr class="separator">
<div class="footer-section"><div class="footer-text">PlotCraft 文档 · AI 驱动的专业视频脚本创作平台</div><div class="footer-tagline">_💫 将你的故事转化为专业级视频内容_</div></div>
