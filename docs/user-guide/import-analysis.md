<!--
  PlotCraft 导入与分析 — Animated & Professional Edition
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
.format-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin: 10px 0 20px; }
.format-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 14px 16px; animation: slideUp 0.4s ease-out both; transition: transform 0.3s ease, border-color 0.3s ease; }
.format-card:hover { transform: translateY(-3px); border-color: rgba(255,107,53,0.35); }
.format-name { font-weight: 700; font-size: 0.9em; color: #FF6B35; margin-bottom: 4px; }
.format-ext { font-size: 0.78em; color: rgba(255,255,255,0.6); margin: 0; }
.ts-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin: 10px 0 20px; }
.ts-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 12px 14px; animation: slideUp 0.4s ease-out both; transition: border-color 0.3s ease; }
.ts-card:hover { border-color: rgba(255,107,53,0.3); }
.ts-problem { font-weight: 700; font-size: 0.85em; color: #FF6B35; margin-bottom: 4px; }
.ts-solution { font-size: 0.8em; color: rgba(255,255,255,0.6); margin: 0; }
.separator { border: none; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.3), rgba(69,184,172,0.3), transparent); margin: 26px 0; animation: fadeIn 1s ease-out; }
.footer-section { text-align: center; padding: 22px 16px 8px; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 30px; animation: fadeIn 1s ease-out; }
.footer-text { color: rgba(255,255,255,0.5); font-size: 0.85em; animation: footerGlow 3s ease-in-out infinite; }
.footer-tagline { color: rgba(255,255,255,0.35); font-size: 0.8em; margin-top: 6px; animation: breathe 4s ease-in-out infinite; }
</style>

<div class="breadcrumb">← [文档首页](https://agions.github.io/PlotCraft) · [用户指南](../user-guide/workflow-overview.md) · 脚本生成 →</div>

<div class="hero-banner"><div class="hero-title">📥 导入与分析</div><div class="hero-subtitle">如何在 PlotCraft 中导入和分析源内容</div></div>

## 支持的格式

<div class="format-grid">
  <div class="format-card">
    <div class="format-name">📖 小说文件</div>
    <div class="format-ext">.txt, .md（Markdown）</div>
  </div>
  <div class="format-card">
    <div class="format-name">📜 脚本格式（JSON）</div>
    <div class="format-ext">结构化 JSON 脚本</div>
  </div>
  <div class="format-card">
    <div class="format-name">💡 AI 提示词</div>
    <div class="format-ext">自定义 AI 提示词</div>
  </div>
</div>

### 小说文件

**最佳实践**：
- 使用 UTF-8 编码
- 使用空行或 `# 章节` 标题分隔章节
- 在对话前包含角色名称（例如：`小明：今天天气真好！`）

**示例**：
```markdown
# 第一章：相遇

阳光明媚的早晨，小明走在校园里。

小明：今天天气真好！

突然，一个女孩从转角出现。
```

### 脚本格式（JSON）

**模式**：
```json
{
  "title": "脚本标题",
  "scenes": [
    {
      "id": "scene_1",
      "description": "场景描述",
      "dialogue": [
        { "character": "小明", "text": "你好！", "emotion": "happy" }
      ]
    }
  ]
}
```

## 分析功能

### 自动检测

| 功能 | 描述 |
|---------|-------------|
| 章节检测 | 识别章节边界 |
| 场景分割 | 将内容分割为场景 |
| 角色提取 | 识别并命名角色 |
| 情感检测 | 分析情感基调 |
| 对话提取 | 提取角色对话 |

## 故障排除

<div class="ts-grid">
  <div class="ts-card">
    <div class="ts-problem">📁 导入失败</div>
    <div class="ts-solution">检查文件扩展名是否正确，编码是否为 UTF-8</div>
  </div>
  <div class="ts-card">
    <div class="ts-problem">📊 分析结果不佳</div>
    <div class="ts-solution">添加更明确的章节标记，使用一致的角色命名</div>
  </div>
</div>

## 下一步

- [脚本生成](./script-generation.md) - 生成结构化脚本
- [工作流概览](./workflow-overview.md) - 返回工作流

<hr class="separator">
<div class="footer-section"><div class="footer-text">PlotCraft 文档 · AI 驱动的专业视频脚本创作平台</div><div class="footer-tagline">_💫 将你的故事转化为专业级视频内容_</div></div>
