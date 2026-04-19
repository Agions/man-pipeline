# 配置

PlotCraft 的所有配置选项。

## 环境变量

在项目根目录创建 `.env.local`：

### AI 提供商

```bash
# 阿里巴巴（默认）
VITE_ALIBABA_API_KEY=***
VITE_ALIBABA_API_URL=https://dashscope.aliyuncs.com/api/v1

# OpenAI（可选）
VITE_OPENAI_API_KEY=***
VITE_OPENAI_API_URL=https://api.openai.com/v1

# Azure OpenAI（可选）
VITE_AZURE_OPENAI_KEY=your-azure-key
VITE_AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com
VITE_AZURE_OPENAI_DEPLOYMENT=gpt-4

# DeepSeek（可选）
VITE_DEEPSEEK_API_KEY=***
```

### 图像生成

```bash
# Seedream（默认图像服务）
VITE_SEEDDREAM_API_KEY=***
VITE_SEEDDREAM_API_URL=https://api.minimax.chat/v1

# Replicate（FLUX、SDXL）
VITE_REPLICATE_API_KEY=your-r...-key

# OpenAI DALL-E
VITE_DALLE_API_KEY=***
```

### 音频/TTS

```bash
# Edge TTS（免费，默认）
VITE_TTS_PROVIDER=edge

# ElevenLabs（高级）
VITE_ELEVENLABS_API_KEY=your-e...-key
```

### 应用配置

```bash
# 应用模式
VITE_APP_MODE=web|desktop

# API 基础 URL（用于 Web 部署）
VITE_API_BASE_URL=https://api.plotcraft.example.com
```

## 配置文件

对于高级设置，创建 `src/core/config/app.config.ts`：

```typescript
export const appConfig = {
  // 应用设置
  app: {
    name: 'PlotCraft',
    version: '3.0.0',
    mode: import.meta.env.VITE_APP_MODE || 'web',
  },

  // AI 提供商
  ai: {
    defaultProvider: 'alibaba',
    defaultModel: 'qwen-3.5',
    fallbackProviders: ['openai', 'deepseek'],
  },

  // 图像生成
  image: {
    defaultModel: 'seedream-5.0',
    defaultResolution: '16:9',
    defaultQuality: 'high',
  },

  // 视频导出
  video: {
    defaultFormat: 'mp4',
    defaultResolution: '1080p',
    defaultFps: 30,
  },

  // 存储
  storage: {
    provider: 'local', // 'local' | 'cloud'
    maxFileSize: 100 * 1024 * 1024, // 100MB
  },

  // 功能特性
  features: {
    workflowAutomation: true,
    collaboration: false,
    cloudSync: false,
  },
};
```

## AI 模型配置

在 `src/core/config/models.config.ts` 中配置特定模型：

```typescript
export const MODELS_CONFIG = {
  // 文本模型
  'qwen-3.5': {
    provider: 'alibaba',
    capabilities: ['chat', 'analysis', 'generation'],
    maxTokens: 8192,
    pricing: { input: 0.001, output: 0.002 },
  },

  'gpt-4': {
    provider: 'openai',
    capabilities: ['chat', 'analysis', 'generation'],
    maxTokens: 8192,
    pricing: { input: 0.03, output: 0.06 },
  },

  // 图像模型
  'seedream-5.0': {
    provider: 'minimax',
    capabilities: ['text-to-image', 'image-to-video'],
    resolution: '1024x1024',
    pricing: { perImage: 0.05 },
  },
};
```

## 下一步

- [快速入门](quick-start.md)
- [工作流程概述](../user-guide/workflow-overview.md)
