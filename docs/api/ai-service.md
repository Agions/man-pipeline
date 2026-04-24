<!--
  PlotCraft AI 服务 — Animated & Professional Edition
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
tbody tr:nth-child(1) { animation-delay: 0.05s; } tbody tr:nth-child(2) { animation-delay: 0.1s; } tbody tr:nth-child(3) { animation-delay: 0.15s; } tbody tr:nth-child(4) { animation-delay: 0.2s; }
tbody tr:hover { background: rgba(255,107,53,0.08); } tr:last-child td { border-bottom: none; }
.provider-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin: 10px 0 20px; }
.provider-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px 14px; animation: slideUp 0.4s ease-out both; transition: transform 0.3s ease, border-color 0.3s ease; }
.provider-card:hover { transform: translateY(-3px); border-color: rgba(255,107,53,0.35); }
.provider-name { font-weight: 700; font-size: 0.85em; color: #FF6B35; margin-bottom: 3px; }
.provider-models { font-size: 0.78em; color: rgba(255,255,255,0.6); margin: 0; }
.hint-block { background: rgba(69,184,172,0.08); border-left: 3px solid #45B8AC; border-radius: 0 8px 8px 0; padding: 10px 16px; margin: 14px 0; animation: slideUp 0.5s ease-out; }
.hint-block p { margin: 0; font-size: 0.88em; color: rgba(255,255,255,0.75); }
.separator { border: none; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.3), rgba(69,184,172,0.3), transparent); margin: 26px 0; animation: fadeIn 1s ease-out; }
.footer-section { text-align: center; padding: 22px 16px 8px; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 30px; animation: fadeIn 1s ease-out; }
.footer-text { color: rgba(255,255,255,0.5); font-size: 0.85em; animation: footerGlow 3s ease-in-out infinite; }
.footer-tagline { color: rgba(255,255,255,0.35); font-size: 0.8em; margin-top: 6px; animation: breathe 4s ease-in-out infinite; }
</style>

<div class="breadcrumb">← [文档首页](https://agions.github.io/PlotCraft) · [API 概述](./overview.md) · 图像生成 →</div>

<div class="hero-banner"><div class="hero-title">🤖 AI 服务</div><div class="hero-subtitle">跨多个提供商的统一 AI 文本生成接口</div></div>

## 概述

AIService 提供单一接口，可使用多种 AI 提供商（阿里通义千问、OpenAI GPT、DeepSeek 等）生成文本内容。

## 导入

```typescript
import { aiService } from '@/core/services';
```

## 方法

### generate()

使用 AI 生成文本内容。

```typescript
async generate(
  prompt: string,
  options?: GenerationOptions
): Promise<GenerationResult>
```

**参数：**

| 参数 | 类型 | 描述 |
|-------|------|-------------|
| `prompt` | `string` | 输入提示或指令 |
| `options.provider` | `string` | 使用的 AI 提供商 |
| `options.model` | `string` | 模型名称 |
| `options.maxTokens` | `number` | 最大响应 token 数 |
| `options.temperature` | `number` | 随机性 (0-2) |
| `options.systemPrompt` | `string` | 系统提示词 |

**示例：**

```typescript
const result = await aiService.generate(
  '写一段侦探和嫌疑人之间的戏剧性场景。',
  {
    provider: 'alibaba',
    model: 'qwen-3.5',
    maxTokens: 1000,
    temperature: 0.8,
  }
);

console.log(result.content);
// "侦探倾身向前，仔细研究着嫌疑人的面孔..."
```

### analyze()

分析内容并提取结构化信息。

```typescript
async analyze(
  content: string,
  options?: AnalysisOptions
): Promise<AnalysisResult>
```

**示例：**

```typescript
const analysis = await aiService.analyze(
  '很久以前，在一个遥远的王国里...',
  {
    type: 'novel',
    extractCharacters: true,
    extractThemes: true,
  }
);
```

### chat()

多轮对话。

```typescript
async chat(
  messages: ChatMessage[],
  options?: ChatOptions
): Promise<ChatResult>
```

## 支持的提供商

<div class="provider-grid">
  <div class="provider-card"><div class="provider-name">阿里云</div><div class="provider-models">qwen-3.5</div></div>
  <div class="provider-card"><div class="provider-name">OpenAI</div><div class="provider-models">gpt-4, gpt-3.5-turbo</div></div>
  <div class="provider-card"><div class="provider-name">DeepSeek</div><div class="provider-models">deepseek-chat</div></div>
  <div class="provider-card"><div class="provider-name">Azure</div><div class="provider-models">gpt-4</div></div>
</div>

## 错误处理

```typescript
try {
  const result = await aiService.generate(prompt);
} catch (error) {
  if (error.code === 'API_KEY_MISSING') {
    console.error('请在 .env.local 中设置您的 API 密钥');
  }
  if (error.code === 'RATE_LIMIT_EXCEEDED') {
    await sleep(1000);
    return aiService.generate(prompt);
  }
  if (error.code === 'CONTENT_POLICY_VIOLATION') {
    console.error('内容违反政策');
  }
}
```

## 速率限制

| 提供商 | 请求数/分钟 | Token数/分钟 |
|----------|--------------|------------|
| 阿里云 | 60 | 10000 |
| OpenAI | 500 | 150000 |
| DeepSeek | 120 | 20000 |

<div class="hint-block"><p>💡 <strong>最佳实践</strong>：Temperature 较低 (0.1-0.3) 适用于事实性内容，较高 (0.7-1.0) 适用于创意内容。</p></div>

<hr class="separator">
<div class="footer-section"><div class="footer-text">PlotCraft 文档 · AI 驱动的专业视频脚本创作平台</div><div class="footer-tagline">_💫 将你的故事转化为专业级视频内容_</div></div>
