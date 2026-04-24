<!--
  PlotCraft 项目结构 — Animated & Professional Edition
-->
<style>
@keyframes flowGradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
@keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes scanLight { 0% { left: -100%; } 100% { left: 200%; } }
@keyframes h2Underline { from { width: 0; } to { width: 60px; } }
@keyframes tableRowSlide { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }
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
tr { transition: background 0.25s ease; animation: tableRowSlide 0.5s ease-out both; }
tbody tr:nth-child(n) { animation-delay: calc(0.05s * var(--row-index, 1)); }
tbody tr:hover { background: rgba(255,107,53,0.08); } tr:last-child td { border-bottom: none; }
.dir-tree { background: linear-gradient(135deg, rgba(10,10,15,0.95), rgba(22,33,62,0.9)); border: 1px solid rgba(255,107,53,0.2); border-radius: 10px; padding: 16px 20px; overflow-x: auto; margin: 10px 0 20px; animation: slideUp 0.6s ease-out; position: relative; }
.dir-tree pre { background: transparent; border: none; padding: 0; font-size: 0.82em; line-height: 1.7; color: rgba(255,255,255,0.78); }
.dir-tree::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.015), transparent); animation: scanLight 8s ease-in-out infinite; pointer-events: none; border-radius: 10px; }
.tree-dir { color: #45B8AC; font-weight: 600; }
.tree-file { color: rgba(255,255,255,0.65); }
.naming-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin: 10px 0 20px; }
.naming-row { display: flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 10px 14px; animation: slideUp 0.4s ease-out both; transition: border-color 0.3s ease, transform 0.3s ease; }
.naming-row:hover { border-color: rgba(255,107,53,0.3); transform: translateX(3px); }
.next-steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin: 14px 0 24px; }
.next-step-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 14px 16px; text-decoration: none; transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; display: flex; align-items: center; gap: 10px; animation: slideUp 0.5s ease-out both; }
.next-step-card:hover { transform: translateY(-4px); box-shadow: 0 8px 22px rgba(255,107,53,0.18); border-color: rgba(255,107,53,0.45); }
.next-step-icon { font-size: 1.3em; flex-shrink: 0; }
.next-step-label { font-size: 0.88em; font-weight: 600; color: rgba(255,255,255,0.85); }
.next-step-link { font-size: 0.78em; color: #45B8AC; }
.separator { border: none; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.3), rgba(69,184,172,0.3), transparent); margin: 26px 0; animation: fadeIn 1s ease-out; }
.footer-section { text-align: center; padding: 22px 16px 8px; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 30px; animation: fadeIn 1s ease-out; }
.footer-text { color: rgba(255,255,255,0.5); font-size: 0.85em; animation: footerGlow 3s ease-in-out infinite; }
.footer-tagline { color: rgba(255,255,255,0.35); font-size: 0.8em; margin-top: 6px; animation: breathe 4s ease-in-out infinite; }
</style>

<div class="breadcrumb">← [文档首页](https://agions.github.io/PlotCraft) · [开发指南](../developer-guide/architecture.md) · 服务 →</div>

<div class="hero-banner"><div class="hero-title">📁 项目结构</div><div class="hero-subtitle">PlotCraft 的详细文件组织</div></div>

## 根目录结构

<div class="dir-tree"><pre>
<span class="tree-dir">PlotCraft/</span>
├── <span class="tree-dir">.github/</span>                   # GitHub 工作流和模板
│   ├── <span class="tree-file">workflows/</span>              # CI/CD 流水线
│   ├── <span class="tree-file">ISSUES_TEMPLATE/</span>       # Issue 模板
│   ├── <span class="tree-file">PULL_REQUEST_TEMPLATE.md</span>
│   └── <span class="tree-file">FUNDING.yml</span>
├── <span class="tree-dir">public/</span>                    # 静态资源
├── <span class="tree-dir">src/</span>                       # 源代码
├── <span class="tree-dir">docs/</span>                      # 文档 (docsify)
├── <span class="tree-dir">scripts/</span>                   # 构建脚本
├── <span class="tree-dir">tests/</span>                     # 测试文件
├── <span class="tree-file">package.json</span>
├── <span class="tree-file">tsconfig.json</span>
├── <span class="tree-file">vite.config.ts</span>
├── <span class="tree-file">tailwind.config.js</span>
└── <span class="tree-file">SPEC.md</span>
</pre></div>

## 源代码结构 (`src/`)

<div class="dir-tree"><pre>
<span class="tree-dir">src/</span>
├── <span class="tree-dir">app/</span>
│   ├── <span class="tree-file">App.tsx</span>               # 根组件
│   ├── <span class="tree-file">router.tsx</span>            # React Router 配置
│   └── <span class="tree-file">main.tsx</span>              # 入口文件
│
├── <span class="tree-dir">pages/</span>                  # 路由级组件
│   ├── <span class="tree-file">HomePage.tsx</span>
│   ├── <span class="tree-file">WorkflowPage.tsx</span>
│   └── <span class="tree-file">SettingsPage.tsx</span>
│
├── <span class="tree-dir">features/</span>               # 领域模块
│   ├── <span class="tree-file">workflow/</span>
│   │   ├── <span class="tree-file">components/</span>         # WorkflowEditor, NodePalette, NodeConfig
│   │   ├── <span class="tree-file">hooks/</span>            # useWorkflow
│   │   ├── <span class="tree-file">services/</span>          # workflow.service
│   │   └── <span class="tree-file">index.ts</span>
│   ├── <span class="tree-file">storyboard/</span>
│   ├── <span class="tree-file">character/</span>
│   └── <span class="tree-file">...</span> (其他功能)
│
├── <span class="tree-dir">shared/</span>                # 共享基础设施
│   ├── <span class="tree-file">components/</span>
│   │   ├── <span class="tree-file">ui/</span>               # Button, Input, Modal
│   │   ├── <span class="tree-file">layout/</span>           # AppLayout, PageHeader
│   │   └── <span class="tree-file">common/</span>           # FileUpload, ProgressBar
│   ├── <span class="tree-file">hooks/</span>               # useDebounce, useLocalStorage
│   ├── <span class="tree-file">services/</span>
│   │   ├── <span class="tree-file">api/</span>              # apiClient
│   │   ├── <span class="tree-file">storage/</span>         # storage.service
│   │   └── <span class="tree-file">ai/</span>               # ai.service
│   ├── <span class="tree-file">stores/</span>              # Zustand stores
│   ├── <span class="tree-file">types/</span>               # 共享类型
│   └── <span class="tree-file">utils/</span>              # 工具函数
│
├── <span class="tree-dir">core/</span>                   # 核心服务 (遗留)
│   ├── <span class="tree-file">config/</span>
│   │   ├── <span class="tree-file">app.config.ts</span>
│   │   └── <span class="tree-file">models.config.ts</span>
│   ├── <span class="tree-file">services/</span>
│   │   ├── <span class="tree-file">ai.service.ts</span>
│   │   ├── <span class="tree-file">image-generation.service.ts</span>
│   │   ├── <span class="tree-file">tts.service.ts</span>
│   │   └── <span class="tree-file">...</span>
│   └── <span class="tree-file">stores/</span>
│
├── <span class="tree-dir">styles/</span>
│   ├── <span class="tree-file">global.less</span>
│   └── <span class="tree-file">variables.less</span>
│
└── <span class="tree-dir">locales/</span>                # 国际化 (未来)
</pre></div>

## 功能模块模式

<div class="dir-tree"><pre>
<span class="tree-dir">features/[名称]/</span>
├── <span class="tree-file">components/</span>
│   ├── <span class="tree-file">FeatureName.tsx</span>       # 主组件
│   ├── <span class="tree-file">SubComponent.tsx</span>      # 子组件
│   └── <span class="tree-file">FeatureName.module.less</span>
├── <span class="tree-file">hooks/</span>
│   └── <span class="tree-file">useFeatureName.ts</span>     # 自定义 Hooks
├── <span class="tree-file">services/</span>
│   └── <span class="tree-file">feature.service.ts</span>   # 业务逻辑
├── <span class="tree-file">types/</span>
│   └── <span class="tree-file">types.ts</span>              # 功能特定类型
├── <span class="tree-file">utils/</span>
│   └── <span class="tree-file">helpers.ts</span>           # 功能辅助函数
└── <span class="tree-file">index.ts</span>               # 公开 API (桶导出)
</pre></div>

## 命名规范

| 类型 | 规范 | 示例 |
|------|------|------|
| 组件 | PascalCase | `WorkflowEditor.tsx` |
| Hooks | camelCase 带 `use` 前缀 | `useWorkflow.ts` |
| 服务 | camelCase | `workflow.service.ts` |
| 类型 | PascalCase | `WorkflowState.ts` |
| 存储 | camelCase 带 `store` 后缀 | `workflowStore.ts` |
| 工具函数 | camelCase | `formatDate.ts` |
| 常量 | SCREAMING_SNAKE | `MAX_FILE_SIZE` |
| CSS 模块 | 匹配组件名称 | `Button.module.less` |

## 导入路径

```typescript
// 绝对导入 (在 vite.config.ts 中配置)
import { Button } from '@/shared/components/ui/Button';
import { workflowService } from '@/features/workflow';
import type { StoryboardFrame } from '@/shared/types';

// 相对导入 (用于近邻文件)
import { useState } from 'react';
import './styles.css';
```

## 关键文件

| 文件 | 用途 |
|------|------|
| `src/app/App.tsx` | 根组件，路由配置 |
| `src/app/router.tsx` | 路由定义 |
| `src/main.tsx` | 入口文件，提供者 |
| `src/shared/stores/*.ts` | Zustand 状态存储 |
| `src/core/services/*.ts` | 核心服务实现 |
| `src/features/*/index.ts` | 功能公开 API |

<div class="next-steps-grid">
  <a href="./architecture.md" class="next-step-card"><div class="next-step-icon">🏗️</div><div><div class="next-step-label">架构</div><div class="next-step-link">高层设计 →</div></div></a>
  <a href="./services.md" class="next-step-card"><div class="next-step-icon">⚙️</div><div><div class="next-step-label">服务</div><div class="next-step-link">服务实现 →</div></div></a>
</div>

<hr class="separator">
<div class="footer-section"><div class="footer-text">PlotCraft 文档 · AI 驱动的专业视频脚本创作平台</div><div class="footer-tagline">_💫 将你的故事转化为专业级视频内容_</div></div>
