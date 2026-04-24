<!--
  PlotCraft 工作流概览 — Animated & Professional Edition
-->
<style>
@keyframes flowGradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
@keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes scanLight { 0% { left: -100%; } 100% { left: 200%; } }
@keyframes h2Underline { from { width: 0; } to { width: 60px; } }
@keyframes breathe { 0%, 100% { box-shadow: 0 0 15px rgba(255,107,53,0.3); } 50% { box-shadow: 0 0 35px rgba(255,107,53,0.7); } }
@keyframes footerGlow { 0%, 100% { text-shadow: 0 0 10px rgba(69,184,172,0.4); } 50% { text-shadow: 0 0 30px rgba(69,184,172,0.9), 0 0 60px rgba(69,184,172,0.4); } }
@keyframes iconSpin { 0% { transform: rotate(0deg) scale(1); } 50% { transform: rotate(180deg) scale(1.15); } 100% { transform: rotate(360deg) scale(1); } }
.breadcrumb { font-size: 0.82em; color: rgba(255,255,255,0.4); margin-bottom: 18px; animation: fadeIn 0.6s ease-out; }
.breadcrumb a { color: #45B8AC; text-decoration: none; transition: color 0.3s ease; }
.breadcrumb a:hover { color: #FF6B35; }
.hero-banner { font-family: 'Segoe UI', system-ui, sans-serif; background: linear-gradient(-45deg, #0a0a0f, #1a1a2e, #16213e, #0f3460, #1a1a2e); background-size: 400% 400%; animation: flowGradient 12s ease infinite; padding: 20px 18px; border-radius: 12px; text-align: center; margin-bottom: 28px; border: 1px solid rgba(255,107,53,0.25); position: relative; overflow: hidden; }
.hero-banner::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(135deg, rgba(255,107,53,0.05) 0%, rgba(69,184,172,0.05) 100%); pointer-events: none; }
.hero-title { font-size: 1.8em; font-weight: 800; color: #fff; margin: 0 0 6px; letter-spacing: 1px; animation: slideUp 0.6s ease-out; }
.hero-subtitle { color: rgba(255,255,255,0.7); font-size: 1em; margin: 0; animation: slideUp 0.7s ease-out 0.15s both; }
.h2-section { position: relative; margin-top: 34px; margin-bottom: 14px; font-size: 1.4em; font-weight: 700; color: #e8e8e8; padding-bottom: 8px; animation: slideUp 0.6s ease-out; }
.h2-section::after { content: ''; position: absolute; bottom: 0; left: 0; height: 3px; background: linear-gradient(90deg, #FF6B35, #45B8AC, #FF6B35); background-size: 200% 100%; animation: flowGradient 3s ease infinite, h2Underline 0.8s ease-out forwards; border-radius: 2px; }
table { width: 100%; border-collapse: collapse; margin: 10px 0 22px; animation: fadeIn 0.8s ease-out; }
thead tr { background: linear-gradient(90deg, rgba(255,107,53,0.15), rgba(69,184,172,0.1)); }
th { padding: 10px 14px; text-align: left; font-size: 0.88em; color: #FF6B35; border-bottom: 2px solid rgba(255,107,53,0.3); font-weight: 700; }
td { padding: 9px 14px; font-size: 0.88em; color: rgba(255,255,255,0.78); border-bottom: 1px solid rgba(255,255,255,0.06); }
tr { transition: background 0.25s ease; animation: slideUp 0.4s ease-out both; }
tbody tr:nth-child(1) { animation-delay: 0.05s; } tbody tr:nth-child(2) { animation-delay: 0.1s; } tbody tr:nth-child(3) { animation-delay: 0.15s; } tbody tr:nth-child(4) { animation-delay: 0.2s; } tbody tr:nth-child(5) { animation-delay: 0.25s; } tbody tr:nth-child(6) { animation-delay: 0.3s; } tbody tr:nth-child(7) { animation-delay: 0.35s; }
tbody tr:hover { background: rgba(255,107,53,0.08); } tr:last-child td { border-bottom: none; }
.workflow-diagram { background: linear-gradient(135deg, rgba(10,10,15,0.95), rgba(22,33,62,0.9)); border: 1px solid rgba(255,107,53,0.2); border-radius: 12px; padding: 18px 22px; overflow-x: auto; margin: 10px 0 20px; animation: slideUp 0.6s ease-out; position: relative; }
.workflow-diagram pre { background: transparent; border: none; padding: 0; font-size: 0.82em; line-height: 1.65; color: rgba(255,255,255,0.82); }
.workflow-diagram::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.015), transparent); animation: scanLight 8s ease-in-out infinite; pointer-events: none; border-radius: 12px; }
.step-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin: 10px 0 20px; }
.step-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 14px 16px; animation: slideUp 0.5s ease-out both; transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; position: relative; overflow: hidden; }
.step-card:hover { transform: translateY(-4px); box-shadow: 0 8px 22px rgba(255,107,53,0.18); border-color: rgba(255,107,53,0.4); }
.step-card:hover .step-icon { animation: iconSpin 0.5s ease-in-out; }
.step-card:nth-child(1) { animation-delay: 0.05s; } .step-card:nth-child(2) { animation-delay: 0.1s; } .step-card:nth-child(3) { animation-delay: 0.15s; } .step-card:nth-child(4) { animation-delay: 0.2s; } .step-card:nth-child(5) { animation-delay: 0.25s; } .step-card:nth-child(6) { animation-delay: 0.3s; } .step-card:nth-child(7) { animation-delay: 0.35s; }
.step-icon { font-size: 1.4em; display: block; margin-bottom: 6px; }
.step-name { font-weight: 700; font-size: 0.9em; color: #FF6B35; margin-bottom: 4px; }
.step-detail { font-size: 0.8em; color: rgba(255,255,255,0.6); margin: 0; }
.separator { border: none; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.3), rgba(69,184,172,0.3), transparent); margin: 26px 0; animation: fadeIn 1s ease-out; }
.footer-section { text-align: center; padding: 22px 16px 8px; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 30px; animation: fadeIn 1s ease-out; }
.footer-text { color: rgba(255,255,255,0.5); font-size: 0.85em; animation: footerGlow 3s ease-in-out infinite; }
.footer-tagline { color: rgba(255,255,255,0.35); font-size: 0.8em; margin-top: 6px; animation: breathe 4s ease-in-out infinite; }
</style>

<div class="breadcrumb">← [文档首页](https://agions.github.io/PlotCraft) · [用户指南](../user-guide/workflow-overview.md) · 导入分析 →</div>

<div class="hero-banner"><div class="hero-title">🔀 工作流概览</div><div class="hero-subtitle">PlotCraft 七步工作流将你的故事转化为精美的视频内容</div></div>

## 工作流程图

<div class="workflow-diagram"><pre>
┌──────────────────────────────────────────────────────────────────────┐
│                         PLOTCRAFT 七步工作流                           │
├──────────────────────────────────────────────────────────────────────┤
│                                                                       │
│   📥 导入    →   🧠 AI分析    →   📝 脚本生成   →   🎬 分镜设计       │
│      │              │               │                │              │
│      ↓              ↓               ↓                ↓              │
│  小说/脚本/      多模型并行     结构化视频      自动分镜图            │
│  提示词上传     内容分析       脚本输出       含镜头/构图            │
│                                                                       │
│   🎭 角色设计  →   🖼️ 批量渲染   →   📤 导出                       │
│        │               │               │                            │
│        ↓               ↓               ↓                            │
│   AI角色参考图    多模型并行     MP4/WebM/MOV                         │
│   种子一致性      场景渲染       字幕+唇形同步                         │
│                                                                       │
└──────────────────────────────────────────────────────────────────────┘
</pre></div>

---

## 步骤详解

<div class="step-grid">
  <div class="step-card">
    <span class="step-icon">📥</span>
    <div class="step-name">第一步：导入</div>
    <div class="step-detail">上传小说/脚本/提示词<br>自动编码检测<br>智能章节切分</div>
  </div>
  <div class="step-card">
    <span class="step-icon">🧠</span>
    <div class="step-name">第二步：AI 分析</div>
    <div class="step-detail">GLM-5、M2.5、Kimi K2.5 等<br>章节结构/角色关系<br>场景类型/情感基调</div>
  </div>
  <div class="step-card">
    <span class="step-icon">📝</span>
    <div class="step-name">第三步：脚本生成</div>
    <div class="step-detail">分镜头脚本<br>对话台词（带情感标注）<br>场景描述</div>
  </div>
  <div class="step-card">
    <span class="step-icon">🎬</span>
    <div class="step-name">第四步：分镜设计</div>
    <div class="step-detail">AI 自动生成分镜图<br>镜头角度建议<br>构图参考/时长估算</div>
  </div>
  <div class="step-card">
    <span class="step-icon">🎭</span>
    <div class="step-name">第五步：角色设计</div>
    <div class="step-detail">AI 创建角色参考图<br>种子机制确保一致性<br>表情/姿态可编辑</div>
  </div>
  <div class="step-card">
    <span class="step-icon">🖼️</span>
    <div class="step-name">第六步：批量渲染</div>
    <div class="step-detail">Seedream 5.0、Kling 1.6 等<br>多模型并行渲染<br>支持光照/风格/调色预设</div>
  </div>
  <div class="step-card">
    <span class="step-icon">📤</span>
    <div class="step-name">第七步：导出</div>
    <div class="step-detail">MP4、WebM、MOV<br>720p/1080p/4K<br>字幕嵌入+唇形同步</div>
  </div>
</div>

## 工作流状态

| 状态 | 描述 |
|------|------|
| `idle` | 未开始 |
| `running` | 进行中 |
| `paused` | 用户暂停 |
| `completed` | 成功完成 |
| `error` | 失败并报错 |

## 导航

- [导入与分析](./import-analysis.md)
- [脚本生成](./script-generation.md)
- [分镜设计](./storyboard-design.md)
- [角色设计](./character-design.md)
- [渲染与导出](./rendering-export.md)

<hr class="separator">
<div class="footer-section"><div class="footer-text">PlotCraft 文档 · AI 驱动的专业视频脚本创作平台</div><div class="footer-tagline">_💫 将你的故事转化为专业级视频内容_</div></div>
