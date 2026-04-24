<!--
  PlotCraft 服务 — Animated & Professional Edition
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
tbody tr:nth-child(1) { animation-delay: 0.05s; } tbody tr:nth-child(2) { animation-delay: 0.1s; } tbody tr:nth-child(3) { animation-delay: 0.15s; } tbody tr:nth-child(4) { animation-delay: 0.2s; }
tbody tr:hover { background: rgba(255,107,53,0.08); } tr:last-child td { border-bottom: none; }
.service-diagram { background: linear-gradient(135deg, rgba(10,10,15,0.95), rgba(22,33,62,0.9)); border: 1px solid rgba(255,107,53,0.2); border-radius: 12px; padding: 18px 22px; overflow-x: auto; margin: 10px 0 20px; animation: slideUp 0.6s ease-out; position: relative; }
.service-diagram pre { background: transparent; border: none; padding: 0; font-size: 0.82em; line-height: 1.65; color: rgba(255,255,255,0.82); }
.service-diagram::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.015), transparent); animation: scanLight 8s ease-in-out infinite; pointer-events: none; border-radius: 12px; }
.provider-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px; margin: 10px 0 20px; }
.provider-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 12px 14px; animation: slideUp 0.4s ease-out both; transition: transform 0.3s ease, border-color 0.3s ease; }
.provider-card:hover { transform: translateY(-3px); border-color: rgba(255,107,53,0.35); }
.provider-name { font-weight: 700; font-size: 0.85em; color: #FF6B35; margin-bottom: 3px; }
.provider-model { font-size: 0.78em; color: rgba(255,255,255,0.6); margin: 0; }
.hint-block { background: rgba(69,184,172,0.08); border-left: 3px solid #45B8AC; border-radius: 0 8px 8px 0; padding: 10px 16px; margin: 14px 0; animation: slideUp 0.5s ease-out; }
.hint-block p { margin: 0; font-size: 0.88em; color: rgba(255,255,255,0.75); }
.separator { border: none; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,107,53,0.3), rgba(69,184,172,0.3), transparent); margin: 26px 0; animation: fadeIn 1s ease-out; }
.footer-section { text-align: center; padding: 22px 16px 8px; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 30px; animation: fadeIn 1s ease-out; }
.footer-text { color: rgba(255,255,255,0.5); font-size: 0.85em; animation: footerGlow 3s ease-in-out infinite; }
.footer-tagline { color: rgba(255,255,255,0.35); font-size: 0.8em; margin-top: 6px; animation: breathe 4s ease-in-out infinite; }
</style>

<div class="breadcrumb">← [文档首页](https://agions.github.io/PlotCraft) · [开发指南](../developer-guide/architecture.md) · 状态管理 →</div>

<div class="hero-banner"><div class="hero-title">⚙️ 服务</div><div class="hero-subtitle">PlotCraft 中的核心服务实现</div></div>

## 服务架构

<div class="service-diagram"><pre>
┌─────────────────────────────────────────────────────────┐
│                    应用层                                 │
├─────────────────────────────────────────────────────────┤
│  features/  →  功能特定的业务逻辑                         │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│                    核心服务层                            │
├─────────────────────────────────────────────────────────┤
│  ai.service.ts          - 统一 AI 提供商接口             │
│  image-generation.service.ts - 图片生成                   │
│  tts.service.ts         - 文本转语音                     │
│  lip-sync.service.ts    - 唇音同步                       │
│  manga-pipeline.service.ts - 端到端流水线                │
│  storyboard.service.ts  - 分镜管理                       │
│  character.service.ts   - 角色管理                       │
└────────────────────────┬────────────────────────────────┘
                         │
┌────────────────────────▼────────────────────────────────┐
│                    基础设施层                            │
├─────────────────────────────────────────────────────────┤
│  apiClient.ts           - HTTP 客户端                     │
│  storageService.ts      - 本地/云存储                    │
└─────────────────────────────────────────────────────────┘
</pre></div>

## AI 服务

AI 文本生成的统一接口。

```typescript
// src/core/services/ai.service.ts
class AIService {
  async generate(prompt: string, options?: GenerationOptions): Promise<GenerationResult>;
  async analyze(content: string, options?: AnalysisOptions): Promise<AnalysisResult>;
}
```

**用法:**
```typescript
import { aiService } from '@/core/services';

const result = await aiService.generate(
  '写一个两个角色之间的戏剧性场景',
  { provider: 'alibaba', model: 'qwen-3.5' }
);
```

### 支持的提供商

<div class="provider-grid">
  <div class="provider-card"><div class="provider-name">阿里云</div><div class="provider-model">qwen-3.5, qwen-2.5</div></div>
  <div class="provider-card"><div class="provider-name">OpenAI</div><div class="provider-model">gpt-4, gpt-3.5-turbo</div></div>
  <div class="provider-card"><div class="provider-name">DeepSeek</div><div class="provider-model">deepseek-chat</div></div>
  <div class="provider-card"><div class="provider-name">Azure</div><div class="provider-model">gpt-4</div></div>
</div>

## 图片生成服务

多提供商图片生成。

```typescript
// src/core/services/image-generation.service.ts
class ImageGenerationService {
  async generateImage(prompt: string, options?: ImageGenerationOptions): Promise<ImageResult>;
  async generateCharacterImage(character: Character, prompt: string, options?: ImageGenerationOptions): Promise<ImageResult>;
}
```

**支持的提供商：**
| 提供商 | 模型 | 适用场景 |
|--------|------|----------|
| MiniMax | Seedream 5.0 | 动漫、插画 |
| Replicate | FLUX | 写实、多样性 |
| OpenAI | DALL-E 3 | 创意、艺术 |

## TTS 服务

文本转语音合成。

```typescript
// src/core/services/tts.service.ts
class TTSService {
  async synthesize(text: string, config: TTSConfig): Promise<TTSResult>;
  async synthesizeBatch(texts: string[], config: TTSConfig): Promise<TTSResult[]>;
}
```

**提供商：**
| 提供商 | 质量 | 费用 |
|--------|------|------|
| Edge TTS | 良好 | 免费 |
| ElevenLabs | 优秀 | 付费 |
| 阿里巴巴 | 良好 | 付费 |

## 漫画流水线服务

端到端漫画/视频生成流水线。

```typescript
// src/core/services/manga-pipeline.service.ts
class MangaPipelineService {
  async processSequence(scenes: Scene[], options?: PipelineOptions): Promise<PipelineResult>;
  async generateFromNovel(novelContent: string, scenes: Scene[], options?: PipelineOptions): Promise<PipelineResult>;
}
```

**流水线流程：**
```
输入 → 解析 → 生成脚本 → 创建分镜
      → 生成图片 → 唇音同步 → 合成 → 输出
```

## 服务注册

服务在 `src/core/services/index.ts` 中注册：

```typescript
// src/core/services/index.ts
export const aiService = AIService.getInstance();
export const imageGenerationService = ImageGenerationService.getInstance();
export const ttsService = TTSService.getInstance();
export const lipSyncService = LipSyncService.getInstance();
export const mangaPipelineService = MangaPipelineService.getInstance();
export const storyboardService = StoryboardService.getInstance();
export const characterService = CharacterService.getInstance();
export const storageService = StorageService.getInstance();
```

## 创建新服务

<div class="hint-block"><p>💡 <strong>模式</strong>：使用单例模式，通过 <code>getInstance()</code> 获取实例，并从 <code>index.ts</code> 统一导出。</p></div>

```typescript
// src/core/services/example.service.ts
class ExampleService {
  private static instance: ExampleService;

  static getInstance(): ExampleService {
    if (!ExampleService.instance) {
      ExampleService.instance = new ExampleService();
    }
    return ExampleService.instance;
  }

  // ... 实现
}

export const exampleService = ExampleService.getInstance();
```

<hr class="separator">
<div class="footer-section"><div class="footer-text">PlotCraft 文档 · AI 驱动的专业视频脚本创作平台</div><div class="footer-tagline">_💫 将你的故事转化为专业级视频内容_</div></div>
