<!--
  PlotCraft 架构 — Animated & Professional Edition
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
@keyframes glowPulse {
  0%, 100% { border-color: rgba(255,107,53,0.3); }
  50%      { border-color: rgba(255,107,53,0.8); }
}
@keyframes layerSlide {
  from { opacity: 0; transform: translateX(-15px); }
  to   { opacity: 1; transform: translateX(0); }
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

/* ── Architecture Diagram ───────────────────────────────── */
.arch-diagram {
  background: linear-gradient(135deg, rgba(10,10,15,0.95), rgba(22,33,62,0.9));
  border: 1px solid rgba(255,107,53,0.2);
  border-radius: 12px;
  padding: 20px 22px;
  overflow-x: auto;
  margin: 10px 0 20px;
  animation: slideUp 0.6s ease-out;
  position: relative;
}
.arch-diagram pre {
  background: transparent;
  border: none;
  padding: 0;
  font-size: 0.82em;
  line-height: 1.6;
  color: rgba(255,255,255,0.82);
}
.arch-diagram::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.015), transparent);
  animation: scanLight 8s ease-in-out infinite;
  pointer-events: none;
  border-radius: 12px;
}

/* ── Layer Boxes ───────────────────────────────────────── */
.layer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin: 10px 0 20px;
}
.layer-box {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 14px 16px;
  animation: layerSlide 0.5s ease-out both;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}
.layer-box:hover {
  transform: translateY(-3px);
  border-color: rgba(255,107,53,0.35);
  box-shadow: 0 6px 18px rgba(255,107,53,0.12);
}
.layer-box:nth-child(1) { animation-delay: 0.05s; }
.layer-box:nth-child(2) { animation-delay: 0.1s; }
.layer-box:nth-child(3) { animation-delay: 0.15s; }
.layer-box:nth-child(4) { animation-delay: 0.2s; }
.layer-box:nth-child(5) { animation-delay: 0.25s; }
.layer-name { font-weight: 700; font-size: 0.9em; color: #FF6B35; margin-bottom: 4px; }
.layer-desc { font-size: 0.8em; color: rgba(255,255,255,0.6); margin: 0; }

/* ── Directory Tree ─────────────────────────────────────── */
.dir-tree {
  background: linear-gradient(135deg, rgba(10,10,15,0.95), rgba(22,33,62,0.9));
  border: 1px solid rgba(255,107,53,0.2);
  border-radius: 10px;
  padding: 16px 20px;
  overflow-x: auto;
  margin: 10px 0 20px;
  animation: slideUp 0.6s ease-out;
  position: relative;
}
.dir-tree pre {
  background: transparent;
  border: none;
  padding: 0;
  font-size: 0.82em;
  line-height: 1.7;
  color: rgba(255,255,255,0.78);
}
.dir-tree::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.015), transparent);
  animation: scanLight 8s ease-in-out infinite;
  pointer-events: none;
  border-radius: 10px;
}
.tree-dir { color: #45B8AC; font-weight: 600; }
.tree-file { color: rgba(255,255,255,0.65); }

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
tbody tr:hover { background: rgba(255,107,53,0.08); }
tr:last-child td { border-bottom: none; }

/* ── Service Diagram ────────────────────────────────────── */
.service-flow {
  background: linear-gradient(135deg, rgba(10,10,15,0.95), rgba(22,33,62,0.9));
  border: 1px solid rgba(255,107,53,0.2);
  border-radius: 12px;
  padding: 18px 22px;
  overflow-x: auto;
  margin: 10px 0 20px;
  animation: slideUp 0.6s ease-out;
  position: relative;
}
.service-flow pre {
  background: transparent;
  border: none;
  padding: 0;
  font-size: 0.82em;
  line-height: 1.6;
  color: rgba(255,255,255,0.82);
}
.service-flow::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.015), transparent);
  animation: scanLight 8s ease-in-out infinite;
  pointer-events: none;
  border-radius: 12px;
}

/* ── Pattern Cards ──────────────────────────────────────── */
.pattern-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 12px;
  margin: 10px 0 20px;
}
.pattern-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 14px 16px;
  animation: slideUp 0.5s ease-out both;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.pattern-card:hover {
  transform: translateY(-3px);
  border-color: rgba(255,107,53,0.35);
}
.pattern-card:nth-child(1) { animation-delay: 0.05s; }
.pattern-card:nth-child(2) { animation-delay: 0.1s; }
.pattern-card:nth-child(3) { animation-delay: 0.15s; }
.pattern-card:nth-child(4) { animation-delay: 0.2s; }
.pattern-name { font-weight: 700; font-size: 0.9em; color: #FF6B35; margin-bottom: 4px; }
.pattern-desc { font-size: 0.82em; color: rgba(255,255,255,0.6); margin: 0; }

/* ── Next Steps ────────────────────────────────────────── */
.next-steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
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

← [文档首页](https://agions.github.io/PlotCraft) · [开发指南](../developer-guide/project-structure.md) · 项目结构 →

</div>

<div class="hero-banner">

# 🏗️ 架构

**PlotCraft 基于功能模块化的高层架构设计**

</div>

## 高层架构

<div class="arch-diagram">

```
╔══════════════════════════════════════════════════════════════════════════╗
║                           PLOTCRAFT 应用                                  ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                          ║
║   ┌──────────────┐    ┌──────────────┐    ┌──────────────┐            ║
║   │    页面       │───▶│  功能模块    │───▶│   共享模块   │            ║
║   │  (路由/Views) │    │ (Feature DDD)│    │   (通用)     │            ║
║   └──────────────┘    └──────────────┘    └──────────────┘            ║
║          │                   │                    │                    ║
║          └───────────────────┼────────────────────┘                    ║
║                              ▼                                          ║
║                   ┌──────────────────────┐                           ║
║                   │      核心服务层         │                           ║
║                   │  AI · 流水线 · 工作流   │                           ║
║                   └──────────────────────┘                           ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

</div>

---

## 目录结构

<div class="dir-tree">

```
<span class="tree-dir">src/</span>
├── <span class="tree-dir">app/</span>                    # 应用入口
├── <span class="tree-dir">pages/</span>                   # 路由级页面
├── <span class="tree-dir">features/</span>               # 功能模块 (领域驱动)
│   ├── <span class="tree-file">workflow/</span>          # 工作流引擎
│   ├── <span class="tree-file">project/</span>           # 项目管理
│   ├── <span class="tree-file">script/</span>            # 脚本生成
│   ├── <span class="tree-file">storyboard/</span>        # 分镜编辑器
│   ├── <span class="tree-file">character/</span>         # 角色设计
│   ├── <span class="tree-file">video/</span>             # 视频播放
│   ├── <span class="tree-file">audio/</span>             # 音频处理
│   └── <span class="tree-file">...</span>
├── <span class="tree-dir">shared/</span>                # 共享基础设施
│   ├── <span class="tree-file">components/</span>        # 可复用 UI 组件
│   ├── <span class="tree-file">hooks/</span>             # 可复用 React Hooks
│   ├── <span class="tree-file">services/</span>          # 基础设施服务
│   │   ├── <span class="tree-file">api/</span>           # HTTP 客户端
│   │   └── <span class="tree-file">storage/</span>       # 存储抽象
│   ├── <span class="tree-file">stores/</span>            # Zustand 状态存储
│   ├── <span class="tree-file">types/</span>             # 共享类型定义
│   └── <span class="tree-file">utils/</span>            # 工具函数
├── <span class="tree-dir">core/</span>                  # 核心服务 (遗留代码)
│   ├── <span class="tree-file">config/</span>            # 配置
│   ├── <span class="tree-file">services/</span>          # 核心服务实现
│   ├── <span class="tree-file">hooks/</span>             # 核心 Hooks
│   └── <span class="tree-file">stores/</span>            # 遗留存储重导出
└── <span class="tree-dir">styles/</span>                # 全局样式
```

</div>

---

## 功能模块结构

每个功能遵循一致的结构：

<div class="dir-tree">

```
<span class="tree-dir">features/[功能名称]/</span>
├── <span class="tree-file">components/</span>           # 功能特定的 React 组件
│   ├── <span class="tree-file">ComponentName.tsx</span>
│   └── <span class="tree-file">ComponentName.module.less</span>
├── <span class="tree-file">hooks/</span>                # 功能特定的 Hooks
│   └── <span class="tree-file">useFeatureHook.ts</span>
├── <span class="tree-file">services/</span>             # 功能特定的服务
│   └── <span class="tree-file">feature.service.ts</span>
├── <span class="tree-file">types/</span>                # 功能特定的类型
│   └── <span class="tree-file">types.ts</span>
└── <span class="tree-file">index.ts</span>              # 公开 API (桶导出)
```

</div>

---

## 关键设计模式

<div class="pattern-grid">

<div class="pattern-card">
  <div class="pattern-name">1. 单例服务</div>
  <div class="pattern-desc">服务使用单例模式管理全局状态</div>
</div>

<div class="pattern-card">
  <div class="pattern-name">2. 功能模块</div>
  <div class="pattern-desc">自包含、边界清晰的功能域</div>
</div>

<div class="pattern-card">
  <div class="pattern-name">3. 共享类型</div>
  <div class="pattern-desc">类型集中在 shared/types</div>
</div>

<div class="pattern-card">
  <div class="pattern-name">4. Zustand 存储</div>
  <div class="pattern-desc">领域特定的状态管理</div>
</div>

</div>

### 1. 单例服务

```typescript
// shared/services/storage/storage.service.ts
class StorageService {
  private static instance: StorageService;

  static getInstance(): StorageService {
    if (!StorageService.instance) {
      StorageService.instance = new StorageService();
    }
    return StorageService.instance;
  }
}

export const storageService = StorageService.getInstance();
```

### 2. 功能模块

```typescript
// features/workflow/index.ts
export { WorkflowEditor } from './components/WorkflowEditor';
export { useWorkflow } from './hooks/useWorkflow';
export { workflowService } from './services/workflow.service';
export type { WorkflowState } from './types';
```

### 3. 共享类型

```typescript
// shared/types/index.ts
export interface StoryboardFrame {
  id: string;
  title: string;
  sceneDescription: string;
  // ...
}
```

### 4. Zustand 存储

```typescript
// shared/stores/workflow.store.ts
export const useWorkflowStore = create<WorkflowState>()(
  persist(
    (set, get) => ({
      currentStep: 'import',
      status: 'idle',
      // ...
    }),
    { name: 'workflow-storage' }
  )
);
```

---

## 服务架构

### AI 服务层

<div class="service-flow">

```
┌─────────────────────────────────────────┐
│        AI 服务 (ai.service.ts)          │
├─────────────────────────────────────────┤
│  统一接口，支持所有 AI 提供商             │
│  • 阿里巴巴 (Qwen)                       │
│  • OpenAI (GPT)                         │
│  • DeepSeek                             │
└──────────────────┬──────────────────────┘
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
┌───────────────┐    ┌───────────────┐
│   图片服务    │    │   TTS 服务    │
│               │    │               │
│ • Seedream    │    │ • Edge TTS    │
│ • FLUX        │    │ • ElevenLabs  │
│ • DALL-E      │    │ • 阿里巴巴    │
└───────────────┘    └───────────────┘
```

</div>

### 工作流引擎

n8n 风格的可视化工作流引擎：

```typescript
interface WorkflowDefinition {
  id: string;
  nodes: WorkflowNode[];      // 处理节点
  connections: Connection[];  // 数据流
  settings: WorkflowSettings; // 执行配置
}

interface WorkflowNode {
  id: string;
  type: NodeType;            // 节点类别
  inputs: Port[];            // 输入端口
  outputs: Port[];           // 输出端口
  config: NodeConfig;        // 节点特定配置
}
```

---

## 状态管理

### 存储架构

| 存储 | 用途 | 持久化 |
|------|------|--------|
| `appStore` | UI 状态（主题、通知） | 否 |
| `projectStore` | 项目数据 | 是（localStorage） |
| `workflowStore` | 工作流状态 | 是（localStorage） |
| `userStore` | 用户偏好 | 是（localStorage） |
| `videoEditorStore` | 时间线/编辑器状态 | 否 |

### 数据流

```
用户操作 → Hook → 存储更新 → 组件重渲染
                    ↓
              副作用（API 调用等）
                    ↓
              存储更新（包含结果）
```

---

## 安全性

### API 密钥管理

<div class="hint-block">

> 🔒 **安全策略**：
> - API 密钥存储在环境变量中（`VITE_*`）
> - 密钥不会暴露在客户端包中（Tauri 桌面端）
> - Web 模式通过后端代理进行 API 调用

</div>

### 内容安全

- 用户内容在 AI 处理前进行清理
- 生成的内容经过策略合规性过滤
- AI API 调用限流

---

## 性能优化

| 策略 | 说明 |
|------|------|
| **代码分割** | Vite 处理自动分块 |
| **懒加载** | 功能按需加载 |
| **记忆化** | 昂贵组件使用 `React.memo` |
| **防抖** | 输入处理器防抖 |
| **虚拟化** | 大列表使用虚拟滚动 |

---

## 下一步

<div class="next-steps-grid">

<a href="./project-structure.md" class="next-step-card">
  <div class="next-step-icon">📁</div>
  <div>
    <div class="next-step-label">项目结构</div>
    <div class="next-step-link">详细文件组织 →</div>
  </div>
</a>

<a href="./services.md" class="next-step-card">
  <div class="next-step-icon">⚙️</div>
  <div>
    <div class="next-step-label">服务</div>
    <div class="next-step-link">服务实现 →</div>
  </div>
</a>

<a href="./state-management.md" class="next-step-card">
  <div class="next-step-icon">📊</div>
  <div>
    <div class="next-step-label">状态管理</div>
    <div class="next-step-link">存储模式 →</div>
  </div>
</a>

</div>

<hr class="separator">

<div class="footer-section">

<div class="footer-text">PlotCraft 文档 · AI 驱动的专业视频脚本创作平台</div>

<div class="footer-tagline">_💫 将你的故事转化为专业级视频内容_</div>

</div>
