<!--
  PlotCraft 快速开始 — Animated & Professional Edition
-->
<style>
/* ── Reset & Base ─────────────────────────────────────── */
@keyframes flowGradient {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes breathe {
  0%, 100% { box-shadow: 0 0 15px rgba(255,107,53,0.3); }
  50%      { box-shadow: 0 0 35px rgba(255,107,53,0.7); }
}
@keyframes footerGlow {
  0%, 100% { text-shadow: 0 0 10px rgba(69,184,172,0.4); }
  50%      { text-shadow: 0 0 30px rgba(69,184,172,0.9), 0 0 60px rgba(69,184,172,0.4); }
}
@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes iconSpin {
  0%   { transform: rotate(0deg) scale(1); }
  50%  { transform: rotate(180deg) scale(1.15); }
  100% { transform: rotate(360deg) scale(1); }
}
@keyframes borderGlow {
  0%, 100% { border-color: rgba(255,107,53,0.4); }
  50%      { border-color: rgba(255,107,53,1); }
}
@keyframes badgePulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.08); }
}
@keyframes tableRowSlide {
  from { opacity: 0; transform: translateX(-20px); }
  to   { opacity: 1; transform: translateX(0); }
}
@keyframes scanLight {
  0%   { left: -100%; }
  100% { left: 200%; }
}
@keyframes h2Underline {
  from { width: 0; }
  to   { width: 60px; }
}
@keyframes stepBounce {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-4px); }
}
@keyframes flowArrow {
  0%, 100% { opacity: 0.6; transform: translateX(0); }
  50%      { opacity: 1; transform: translateX(4px); }
}
@keyframes cardFloat {
  0%, 100% { transform: translateY(0px); }
  50%      { transform: translateY(-5px); }
}

/* ── Breadcrumb ─────────────────────────────────────────── */
.breadcrumb {
  font-size: 0.82em;
  color: rgba(255,255,255,0.4);
  margin-bottom: 18px;
  animation: fadeIn 0.6s ease-out;
}
.breadcrumb a {
  color: #45B8AC;
  text-decoration: none;
  transition: color 0.3s ease;
}
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
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, rgba(255,107,53,0.05) 0%, rgba(69,184,172,0.05) 100%);
  pointer-events: none;
}
.hero-title {
  font-size: 1.8em;
  font-weight: 800;
  color: #fff;
  margin: 0 0 6px;
  letter-spacing: 1px;
  animation: slideUp 0.6s ease-out;
}
.hero-subtitle {
  color: rgba(255,255,255,0.7);
  font-size: 1em;
  margin: 0;
  animation: slideUp 0.7s ease-out 0.15s both;
}

/* ── Section H2 ─────────────────────────────────────────── */
.h2-section {
  position: relative;
  margin-top: 34px;
  margin-bottom: 14px;
  font-size: 1.4em;
  font-weight: 700;
  color: #e8e8e8;
  padding-bottom: 8px;
  animation: slideUp 0.6s ease-out;
}
.h2-section::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  height: 3px;
  background: linear-gradient(90deg, #FF6B35, #45B8AC, #FF6B35);
  background-size: 200% 100%;
  animation: flowGradient 3s ease infinite, h2Underline 0.8s ease-out forwards;
  border-radius: 2px;
}

/* ── Step Badges ────────────────────────────────────────── */
.step-indicator {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin: 14px 0 8px;
  animation: slideUp 0.5s ease-out;
}
.step-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF6B35, #e85a2a);
  color: #fff;
  font-weight: 800;
  font-size: 0.95em;
  box-shadow: 0 4px 14px rgba(255,107,53,0.4);
  animation: badgePulse 2.5s ease-in-out infinite;
  flex-shrink: 0;
}
.step-title {
  font-weight: 700;
  font-size: 1.05em;
  color: #fff;
}
.step-desc {
  color: rgba(255,255,255,0.6);
  font-size: 0.85em;
  margin: 4px 0 12px;
  padding-left: 42px;
  animation: fadeIn 0.6s ease-out 0.1s both;
}

/* ── Code Blocks ───────────────────────────────────────── */
pre {
  background: linear-gradient(135deg, #0d0d14, #1a1a2e);
  border: 1px solid rgba(255,107,53,0.2);
  border-radius: 10px;
  padding: 16px 20px;
  overflow-x: auto;
  animation: slideUp 0.6s ease-out;
  position: relative;
}
pre::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent);
  animation: scanLight 6s ease-in-out infinite;
  pointer-events: none;
  border-radius: 10px;
}
code {
  color: #e8e8e8;
  font-size: 0.88em;
  font-family: 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
}
:not(pre) > code {
  background: rgba(255,107,53,0.1);
  padding: 2px 7px;
  border-radius: 4px;
  color: #FF6B35;
}

/* ── Tables ────────────────────────────────────────────── */
table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0 22px;
  animation: fadeIn 0.8s ease-out;
}
thead tr {
  background: linear-gradient(90deg, rgba(255,107,53,0.15), rgba(69,184,172,0.1));
}
th {
  padding: 10px 14px;
  text-align: left;
  font-size: 0.88em;
  color: #FF6B35;
  border-bottom: 2px solid rgba(255,107,53,0.3);
  font-weight: 700;
}
td {
  padding: 9px 14px;
  font-size: 0.88em;
  color: rgba(255,255,255,0.78);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
tr {
  transition: background 0.25s ease;
  animation: tableRowSlide 0.5s ease-out both;
}
tbody tr:nth-child(1)  { animation-delay: 0.05s; }
tbody tr:nth-child(2)  { animation-delay: 0.1s; }
tbody tr:nth-child(3)  { animation-delay: 0.15s; }
tbody tr:nth-child(4)  { animation-delay: 0.2s; }
tbody tr:nth-child(5)  { animation-delay: 0.25s; }
tbody tr:hover {
  background: rgba(255,107,53,0.08);
}
tr:last-child td { border-bottom: none; }

/* ── Workflow Diagram ──────────────────────────────────── */
.workflow-section {
  animation: slideUp 0.6s ease-out;
}
.workflow-pre {
  background: linear-gradient(135deg, rgba(10,10,15,0.95), rgba(22,33,62,0.9));
  border: 1px solid rgba(255,107,53,0.2);
  border-radius: 10px;
  padding: 18px 22px;
  color: rgba(255,255,255,0.85);
  font-size: 0.88em;
  line-height: 1.65;
  overflow-x: auto;
  margin-bottom: 20px;
}
.workflow-step-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin: 10px 0 20px;
}
.workflow-step-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 14px 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  animation: slideUp 0.5s ease-out both;
  position: relative;
  overflow: hidden;
}
.workflow-step-card::after {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 50%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
  transition: left 0.5s ease;
  pointer-events: none;
}
.workflow-step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 28px rgba(255,107,53,0.2);
  border-color: rgba(255,107,53,0.45);
}
.workflow-step-card:hover::after { left: 200%; animation: scanLight 0.8s ease-out; }
.workflow-step-card:nth-child(1) { animation-delay: 0.05s; }
.workflow-step-card:nth-child(2) { animation-delay: 0.1s; }
.workflow-step-card:nth-child(3) { animation-delay: 0.15s; }
.workflow-step-card:nth-child(4) { animation-delay: 0.2s; }
.workflow-step-card:nth-child(5) { animation-delay: 0.25s; }
.workflow-step-card:nth-child(6) { animation-delay: 0.3s; }
.workflow-step-card:nth-child(7) { animation-delay: 0.35s; }
.workflow-step-icon {
  font-size: 1.5em;
  display: inline-block;
  transition: transform 0.4s ease;
}
.workflow-step-card:hover .workflow-step-icon { animation: iconSpin 0.6s ease-in-out; }
.workflow-step-name {
  font-weight: 700;
  font-size: 0.95em;
  color: #FF6B35;
  margin: 6px 0 4px;
}
.workflow-step-detail {
  font-size: 0.82em;
  color: rgba(255,255,255,0.6);
  margin: 0;
}

/* ── Next Steps Grid ───────────────────────────────────── */
.next-steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin: 14px 0 24px;
}
.next-step-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 14px 16px;
  text-decoration: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  animation: slideUp 0.5s ease-out both;
}
.next-step-card:nth-child(1) { animation-delay: 0.05s; }
.next-step-card:nth-child(2) { animation-delay: 0.1s; }
.next-step-card:nth-child(3) { animation-delay: 0.15s; }
.next-step-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 22px rgba(255,107,53,0.18);
  border-color: rgba(255,107,53,0.45);
}
.next-step-icon { font-size: 1.3em; flex-shrink: 0; }
.next-step-label { font-size: 0.88em; font-weight: 600; color: rgba(255,255,255,0.85); }
.next-step-link { font-size: 0.78em; color: #45B8AC; }

/* ── Hint Block ────────────────────────────────────────── */
.hint-block {
  background: rgba(69,184,172,0.08);
  border-left: 3px solid #45B8AC;
  border-radius: 0 8px 8px 0;
  padding: 10px 16px;
  margin: 14px 0;
  animation: slideUp 0.5s ease-out;
}
.hint-block p {
  margin: 0;
  font-size: 0.88em;
  color: rgba(255,255,255,0.75);
}

/* ── Separator ─────────────────────────────────────────── */
.separator {
  border: none;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,107,53,0.3), rgba(69,184,172,0.3), transparent);
  margin: 26px 0;
  animation: fadeIn 1s ease-out;
}

/* ── Footer ─────────────────────────────────────────────── */
.footer-section {
  text-align: center;
  padding: 22px 16px 8px;
  border-top: 1px solid rgba(255,255,255,0.06);
  margin-top: 30px;
  animation: fadeIn 1s ease-out;
}
.footer-text {
  color: rgba(255,255,255,0.5);
  font-size: 0.85em;
  animation: footerGlow 3s ease-in-out infinite;
}
.footer-tagline {
  color: rgba(255,255,255,0.35);
  font-size: 0.8em;
  margin-top: 6px;
  animation: breathe 4s ease-in-out infinite;
}
</style>

<div class="breadcrumb">

← [文档首页](https://agions.github.io/PlotCraft) · [开始使用](../getting-started/installation.md) · 配置 →

</div>

<div class="hero-banner">

# ⚡ 快速开始

**5 分钟内启动并运行 PlotCraft**

</div>

## 前置要求

| 要求 | 版本 | 说明 |
|:---:|:---:|------|
| **Node.js** | 18+ | JavaScript 运行时 |
| **npm** | 9+ | 包管理器（或 pnpm 8+） |
| **Git** | 最新 | 代码版本控制 |
| **AI API Key** | — | 见[配置指南](./configuration.md) |

---

## 安装

<div class="step-indicator">
  <span class="step-badge">1</span>
  <span class="step-title">克隆仓库</span>
</div>

```bash
git clone https://github.com/Agions/PlotCraft.git
cd PlotCraft
```

<div class="step-indicator">
  <span class="step-badge">2</span>
  <span class="step-title">安装依赖</span>
</div>

```bash
npm install
```

<div class="step-indicator">
  <span class="step-badge">3</span>
  <span class="step-title">配置 AI 提供商</span>
</div>

在项目根目录创建 `.env.local` 文件：

```bash
# 文字生成（至少配置一个）
VITE_ALIBABA_API_KEY=your-alibaba-key
VITE_MINIMAX_API_KEY=your-minimax-key
VITE_OPENAI_API_KEY=your-openai-key

# 图像生成（可选）
VITE_SEEDDREAM_API_KEY=your-seedream-key

# 语音合成（可选）
VITE_TTS_PROVIDER=edge
```

<div class="step-indicator">
  <span class="step-badge">4</span>
  <span class="step-title">运行开发服务器</span>
</div>

```bash
npm run dev
```

应用将在 `http://localhost:5173` 可用 🎉

<div class="hint-block">

> 💡 **提示**：需要配置 `.env` 文件中的 API Key 才能使用 AI 功能，详见[配置指南](./configuration.md)

</div>

---

## 七步工作流

PlotCraft 的核心是七步 AI 驱动工作流：

<div class="workflow-section">

```
┌─────────────────────────────────────────────────────────────────────┐
│                    PLOTCRAFT 七步 AI 驱动工作流                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  📥 导入  ──▶  🧠 AI分析  ──▶  📝 脚本生成  ──▶  🎬 分镜设计        │
│      │              │               │                │              │
│      ↓              ↓               ↓                ↓              │
│  小说/脚本/      多模型并行     结构化视频      自动分镜图             │
│  提示词上传     内容分析       脚本输出       含镜头/构图             │
│                                                                      │
│  🎭 角色设计  ──▶  🖼️ 批量渲染  ──▶  📤 导出                        │
│        │               │               │                            │
│        ↓               ↓               ↓                            │
│   AI角色参考图    多模型并行     MP4/WebM/MOV                         │
│   种子一致性      场景渲染       字幕+唇形同步                         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

</div>

---

## 分步指南

<div class="workflow-step-grid">

<div class="workflow-step-card">
  <div class="workflow-step-icon">📥</div>
  <div class="workflow-step-name">步骤 1：导入</div>
  <div class="workflow-step-detail">上传小说/脚本/提示词<br>自动编码检测<br>智能章节切分</div>
</div>

<div class="workflow-step-card">
  <div class="workflow-step-icon">🧠</div>
  <div class="workflow-step-name">步骤 2：AI 分析</div>
  <div class="workflow-step-detail">GLM-5、M2.5、Kimi K2.5 等<br>识别章节结构/角色关系<br>场景类型/情感基调</div>
</div>

<div class="workflow-step-card">
  <div class="workflow-step-icon">📝</div>
  <div class="workflow-step-name">步骤 3：脚本生成</div>
  <div class="workflow-step-detail">分镜头描述<br>对话台词（带情感标注）<br>场景描述</div>
</div>

<div class="workflow-step-card">
  <div class="workflow-step-icon">🎬</div>
  <div class="workflow-step-name">步骤 4：分镜设计</div>
  <div class="workflow-step-detail">AI 自动生成分镜图<br>镜头角度建议<br>构图参考/时长估算</div>
</div>

<div class="workflow-step-card">
  <div class="workflow-step-icon">🎭</div>
  <div class="workflow-step-name">步骤 5：角色设计</div>
  <div class="workflow-step-detail">AI 创建角色参考图<br>种子机制确保一致性<br>表情/姿态可编辑</div>
</div>

<div class="workflow-step-card">
  <div class="workflow-step-icon">🖼️</div>
  <div class="workflow-step-name">步骤 6：批量渲染</div>
  <div class="workflow-step-detail">Seedream 5.0、Kling 1.6 等<br>多模型并行渲染<br>支持光照/风格/调色预设</div>
</div>

<div class="workflow-step-card">
  <div class="workflow-step-icon">📤</div>
  <div class="workflow-step-name">步骤 7：导出</div>
  <div class="workflow-step-detail">MP4、WebM、MOV<br>720p/1080p/4K<br>字幕嵌入+唇形同步</div>
</div>

</div>

---

## 下一步

<div class="next-steps-grid">

<a href="./installation.md" class="next-step-card">
  <div class="next-step-icon">📖</div>
  <div>
    <div class="next-step-label">安装指南</div>
    <div class="next-step-link">详细的安装说明 →</div>
  </div>
</a>

<a href="./configuration.md" class="next-step-card">
  <div class="next-step-icon">⚙️</div>
  <div>
    <div class="next-step-label">配置</div>
    <div class="next-step-link">所有配置选项 →</div>
  </div>
</a>

<a href="../user-guide/workflow-overview.md" class="next-step-card">
  <div class="next-step-icon">🔀</div>
  <div>
    <div class="next-step-label">工作流概述</div>
    <div class="next-step-link">深入了解工作流 →</div>
  </div>
</a>

</div>

<hr class="separator">

<div class="footer-section">

<div class="footer-text">PlotCraft 文档 · AI 驱动的专业视频脚本创作平台</div>

<div class="footer-tagline">_💫 将你的故事转化为专业级视频内容_</div>

</div>
