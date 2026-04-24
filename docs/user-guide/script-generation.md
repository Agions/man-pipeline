<!--
  PlotCraft 脚本生成 — Animated & Professional Edition
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
.style-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin: 10px 0 20px; }
.style-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px 14px; animation: slideUp 0.4s ease-out both; transition: transform 0.3s ease, border-color 0.3s ease; }
.style-card:hover { transform: translateY(-3px); border-color: rgba(255,107,53,0.35); }
.style-name { font-weight: 700; font-size: 0.85em; color: #FF6B35; margin-bottom: 3px; }
.style-desc { font-size: 0.78em; color: rgba(255,255,255,0.6); margin: 0; }
.bp-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 10px; margin: 10px 0 20px; }
.bp-item { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px 14px; animation: slideUp 0.4s ease-out both; transition: border-color 0.3s ease, transform 0.3s ease; }
.bp-item:hover { border-color: rgba(255,107,53,0.35); transform: translateY(-2px); }
.bp-text { font-size: 0.82em; color: rgba(255,255,255,0.6); margin: 0; }
.separator { border: none; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.3), rgba(69,184,172,0.3), transparent); margin: 26px 0; animation: fadeIn 1s ease-out; }
.footer-section { text-align: center; padding: 22px 16px 8px; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 30px; animation: fadeIn 1s ease-out; }
.footer-text { color: rgba(255,255,255,0.5); font-size: 0.85em; animation: footerGlow 3s ease-in-out infinite; }
.footer-tagline { color: rgba(255,255,255,0.35); font-size: 0.8em; margin-top: 6px; animation: breathe 4s ease-in-out infinite; }
</style>

<div class="breadcrumb">← [文档首页](https://agions.github.io/PlotCraft) · [用户指南](./workflow-overview.md) · 分镜设计 →</div>

<div class="hero-banner"><div class="hero-title">📝 脚本生成</div><div class="hero-subtitle">从已分析内容生成 AI 驱动的脚本</div></div>

## 脚本格式

生成的脚本遵循以下结构：

```typescript
interface Script {
  id: string;
  title: string;
  content: string;           // 完整脚本文本
  segments: ScriptSegment[]; // 结构化片段
  metadata: {
    estimatedDuration: number;  // 秒数
    sceneCount: number;
    dialogueRatio: number;       // 0-1
  };
}

interface ScriptSegment {
  id: string;
  type: 'narration' | 'dialogue' | 'action';
  startTime: number;
  endTime: number;
  content: string;
  character?: string;
  emotion?: string;
}
```

## 生成选项

### 风格预设

<div class="style-grid">
  <div class="style-card"><div class="style-name">dramatic</div><div class="style-desc">强调情感节点</div></div>
  <div class="style-card"><div class="style-name">comedic</div><div class="style-desc">注重时机</div></div>
  <div class="style-card"><div class="style-name">documentary</div><div class="style-desc">纪实、信息丰富</div></div>
  <div class="style-card"><div class="style-name">commercial</div><div class="style-desc">简洁、有说服力</div></div>
</div>

### 参数

| 参数 | 类型 | 默认值 | 描述 |
|-------|------|--------|------|
| `style` | `string` | `dramatic` | 风格预设 |
| `tone` | `string` | — | 例如："严肃"、"轻松" |
| `length` | `string` | `medium` | 目标时长 |
| `dialogueRatio` | `number` | `0.6` | 对话比例 0-1 |
| `includeStageDirections` | `boolean` | `true` | 包含舞台指导 |

## 使用脚本编辑器

1. **查看脚本**：点击任意片段进行预览
2. **编辑内容**：双击编辑文本
3. **调整时间**：拖动片段边缘调整时长
4. **重新排序**：拖动片段重新排序
5. **添加片段**：点击 "+" 添加新片段

## 最佳实践

<div class="bp-grid">
  <div class="bp-item"><div class="bp-text">审查对话：AI 生成的对话应审核其真实性</div></div>
  <div class="bp-item"><div class="bp-text">检查时间：确保片段符合目标视频长度</div></div>
  <div class="bp-item"><div class="bp-text">平衡旁白/对话：目标为 60% 对话，40% 旁白</div></div>
  <div class="bp-item"><div class="bp-text">添加舞台指导：为清晰起见，包含摄像机方向</div></div>
</div>

## 下一步

- [故事板设计](./storyboard-design.md) - 将脚本转换为故事板
- [工作流概览](./workflow-overview.md) - 返回工作流

<hr class="separator">
<div class="footer-section"><div class="footer-text">PlotCraft 文档 · AI 驱动的专业视频脚本创作平台</div><div class="footer-tagline">_💫 将你的故事转化为专业级视频内容_</div></div>
