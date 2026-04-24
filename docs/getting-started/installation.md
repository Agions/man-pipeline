<!--
  PlotCraft 安装指南 — Animated & Professional Edition
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
@keyframes iconSpin {
  0%   { transform: rotate(0deg) scale(1); }
  50%  { transform: rotate(180deg) scale(1.15); }
  100% { transform: rotate(360deg) scale(1); }
}
@keyframes badgePulse {
  0%, 100% { transform: scale(1); box-shadow: 0 4px 14px rgba(255,107,53,0.4); }
  50%      { transform: scale(1.06); box-shadow: 0 4px 24px rgba(255,107,53,0.7); }
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
@keyframes cardFloat {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-4px); }
}
@keyframes glowPulse {
  0%, 100% { border-color: rgba(255,107,53,0.3); }
  50%      { border-color: rgba(255,107,53,0.8); }
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

/* ── Requirement Cards ─────────────────────────────────── */
.req-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin: 10px 0 20px;
}
@media (max-width: 600px) {
  .req-grid { grid-template-columns: 1fr; }
}
.req-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 16px;
  animation: slideUp 0.5s ease-out both;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.req-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(255,107,53,0.18);
  border-color: rgba(255,107,53,0.4);
}
.req-card::after {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 50%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
  transition: left 0.5s ease;
  pointer-events: none;
}
.req-card:hover::after { left: 200%; animation: scanLight 0.8s ease-out; }
.req-card:nth-child(1) { animation-delay: 0.05s; }
.req-card:nth-child(2) { animation-delay: 0.1s; }
.req-card:nth-child(3) { animation-delay: 0.15s; }
.req-card:nth-child(4) { animation-delay: 0.2s; }
.req-icon { font-size: 1.5em; display: block; margin-bottom: 6px; }
.req-title { font-weight: 700; font-size: 0.95em; color: #FF6B35; margin-bottom: 4px; }
.req-detail { font-size: 0.82em; color: rgba(255,255,255,0.6); margin: 0; }
.req-tag {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.72em;
  font-weight: 700;
  margin-top: 6px;
}
.req-tag.min { background: rgba(69,184,172,0.2); color: #45B8AC; }
.req-tag.rec { background: rgba(255,107,53,0.2); color: #FF6B35; }

/* ── Method Cards ───────────────────────────────────────── */
.method-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
  margin: 10px 0 20px;
}
.method-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 18px 16px;
  animation: slideUp 0.5s ease-out both;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.method-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent);
  animation: scanLight 6s ease-in-out infinite;
  pointer-events: none;
}
.method-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 28px rgba(255,107,53,0.2);
  border-color: rgba(255,107,53,0.45);
  animation: glowPulse 2s ease-in-out infinite;
}
.method-card:nth-child(1) { animation-delay: 0.05s; }
.method-card:nth-child(2) { animation-delay: 0.1s; }
.method-card-icon { font-size: 1.5em; display: block; margin-bottom: 8px; }
.method-card-title { font-weight: 700; font-size: 0.95em; color: #FF6B35; margin-bottom: 4px; }
.method-card-desc { font-size: 0.82em; color: rgba(255,255,255,0.6); margin: 0; }
.method-card-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.72em;
  font-weight: 700;
  margin-top: 8px;
  background: rgba(69,184,172,0.2);
  color: #45B8AC;
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
tbody tr:nth-child(6)  { animation-delay: 0.3s; }
tbody tr:nth-child(7)  { animation-delay: 0.35s; }
tbody tr:hover { background: rgba(255,107,53,0.08); }
tr:last-child td { border-bottom: none; }

/* ── Troubleshooting Cards ──────────────────────────────── */
.ts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin: 10px 0 20px;
}
.ts-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px;
  padding: 14px 16px;
  animation: slideUp 0.5s ease-out both;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.ts-card:hover {
  transform: translateY(-3px);
  border-color: rgba(255,107,53,0.3);
}
.ts-card:nth-child(1) { animation-delay: 0.05s; }
.ts-card:nth-child(2) { animation-delay: 0.1s; }
.ts-card:nth-child(3) { animation-delay: 0.15s; }
.ts-problem { font-weight: 700; font-size: 0.88em; color: #FF6B35; margin-bottom: 6px; }
.ts-solution { font-size: 0.82em; color: rgba(255,255,255,0.65); margin: 0; }

/* ── Next Steps Grid ────────────────────────────────────── */
.next-steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
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
.hint-block p { margin: 0; font-size: 0.88em; color: rgba(255,255,255,0.75); }

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

← [文档首页](https://agions.github.io/PlotCraft) · [快速开始](./quick-start.md) · 配置 →

</div>

<div class="hero-banner">

# 📦 安装

**PlotCraft 的详细安装说明**

</div>

## 系统要求

<div class="req-grid">

<div class="req-card">
  <span class="req-icon">🖥️</span>
  <div class="req-title">操作系统</div>
  <div class="req-detail">Windows 10+ · macOS 10.15+ · Ubuntu 20.04+</div>
  <span class="req-tag min">最低</span>
</div>

<div class="req-card">
  <span class="req-icon">💾</span>
  <div class="req-title">内存</div>
  <div class="req-detail">8GB（最低） · 16GB+（推荐）</div>
  <span class="req-tag rec">推荐</span>
</div>

<div class="req-card">
  <span class="req-icon">🎮</span>
  <div class="req-title">显卡</div>
  <div class="req-detail">NVIDIA 6GB+ 显存 GPU（本地渲染加速）</div>
  <span class="req-tag rec">推荐</span>
</div>

<div class="req-card">
  <span class="req-icon">💿</span>
  <div class="req-title">存储空间</div>
  <div class="req-detail">2GB（最低） · SSD 10GB+（推荐）</div>
  <span class="req-tag min">最低</span>
</div>

</div>

<div class="hint-block">

> 🌐 **网络**：稳定的互联网连接（用于 AI API 调用）

</div>

---

## 安装方法

<div class="method-grid">

<div class="method-card">
  <span class="method-card-icon">🌐</span>
  <div class="method-card-title">方法一：Web 开发</div>
  <div class="method-card-desc">推荐方式，本地开发预览</div>
  <span class="method-card-badge">推荐</span>
</div>

<div class="method-card">
  <span class="method-card-icon">🖥️</span>
  <div class="method-card-title">方法二：桌面应用</div>
  <div class="method-card-desc">Tauri 2.0 原生桌面应用</div>
  <span class="method-card-badge">Tauri 2.0</span>
</div>

</div>

### 方法一：Web 开发（推荐）

```bash
# 克隆仓库
git clone https://github.com/Agions/PlotCraft.git
cd PlotCraft

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

应用运行在 `http://localhost:5173`。

### 方法二：桌面应用（Tauri 2.0）

#### 前置条件

**macOS / Linux：**

```bash
# 安装 Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# macOS 额外依赖
brew installwebkit2gtk python3 gtkmm3 libsoup3
```

**Windows：**

- 安装 [Rust](https://rustup.rs/)
- 安装 [Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)

#### 构建桌面应用

```bash
# 安装依赖
npm install

# 构建 Tauri 应用
npm run tauri build
```

构建输出位于 `src-tauri/target/release/bundle/`

---

## 依赖

### 核心依赖

| 包 | 版本 | 用途 |
|-----|------|------|
| `react` | `^18.2` | UI 框架 |
| `react-dom` | `^18.2` | DOM 渲染 |
| `vite` | `^4.4` | 构建工具 |
| `typescript` | `^5.0` | 类型安全 |
| `zustand` | `^4.4` | 状态管理 |
| `antd` | `^5.11` | UI 组件库 |
| `@tauri-apps/api` | `^2.0` | 桌面集成 |
| `framer-motion` | `^12.10` | 动画 |

### AI 服务依赖

| 包 | 用途 |
|-----|------|
| `axios` | HTTP 客户端 |
| `i18next` | 国际化 |

---

## 故障排除

<div class="ts-grid">

<div class="ts-card">
  <div class="ts-problem">🔌 端口已被占用</div>
  <div class="ts-solution">
    <code>lsof -i :5173</code><br>
    <code>kill -9 &lt;PID&gt;</code>
  </div>
</div>

<div class="ts-card">
  <div class="ts-problem">⚠️ TypeScript 错误</div>
  <div class="ts-solution">
    <code>rm -rf node_modules</code><br>
    <code>npm install</code>
  </div>
</div>

<div class="ts-card">
  <div class="ts-problem">🔧 Tauri 构建失败</div>
  <div class="ts-solution">
    <code>rustup update</code><br>
    <code>rustc --version</code>
  </div>
</div>

</div>

---

## 下一步

<div class="next-steps-grid">

<a href="./configuration.md" class="next-step-card">
  <div class="next-step-icon">⚙️</div>
  <div>
    <div class="next-step-label">配置指南</div>
    <div class="next-step-link">配置 API Keys →</div>
  </div>
</a>

<a href="./quick-start.md" class="next-step-card">
  <div class="next-step-icon">🚀</div>
  <div>
    <div class="next-step-label">快速入门</div>
    <div class="next-step-link">5 分钟上手 →</div>
  </div>
</a>

</div>

<hr class="separator">

<div class="footer-section">

<div class="footer-text">PlotCraft 文档 · AI 驱动的专业视频脚本创作平台</div>

<div class="footer-tagline">_💫 将你的故事转化为专业级视频内容_</div>

</div>
