# API 概述

PlotCraft 提供模块化的服务 API，用于 AI 驱动的视频创作。

## 核心服务

| 服务 | 描述 | 位置 |
|---------|-------------|----------|
| `aiService` | 统一 AI 文本生成 | `src/core/services/ai.service.ts` |
| `imageGenerationService` | 多提供商图像生成 | `src/core/services/image-generation.service.ts` |
| `ttsService` | 文本转语音合成 | `src/core/services/tts.service.ts` |
| `lipSyncService` | 唇形同步 | `src/core/services/lip-sync.service.ts` |
| `mangaPipelineService` | 端到端流程 | `src/core/services/manga-pipeline.service.ts` |
| `storyboardService` | 分镜管理 | `src/core/services/storyboard.service.ts` |
| `characterService` | 角色管理 | `src/core/services/character.service.ts` |
| `videoExportService` | 视频合成与导出 | `src/core/services/video-export.service.ts` |

## 服务架构

```
┌─────────────────────────────────────────────────────────────────────┐
│                          应用程序代码                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  import { aiService, imageGenerationService } from '@/core/services';│
│                                                                      │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
┌───────────────────────────────▼─────────────────────────────────────┐
│                        核心服务层                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                  │
│  │ AI 服务      │  │ 图像生成     │  │    TTS     │                  │
│  │             │  │  服务       │  │  服务       │                  │
│  └─────────────┘  └─────────────┘  └─────────────┘                  │
│                                                                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                  │
│  │ 唇形同步      │  │ 漫画管线    │  │ 视频导出    │                  │
│  │  服务        │  │  服务       │  │  服务       │                  │
│  └─────────────┘  └─────────────┘  └─────────────┘                  │
│                                                                      │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
┌───────────────────────────────▼─────────────────────────────────────┐
│                      基础设施层                                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐                  │
│  │  API 客户端  │  │  存储服务   │  │  工作流执行  │                  │
│  │             │  │             │  │  器          │                  │
│  └─────────────┘  └─────────────┘  └─────────────┘                  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

## 使用模式

```typescript
import {
  aiService,
  imageGenerationService,
  ttsService,
  mangaPipelineService,
} from '@/core/services';

// 1. 使用 AI 生成脚本
const script = await aiService.generate(
  '写一段两个角色之间的戏剧性场景'
);

// 2. 为场景生成图像
const image = await imageGenerationService.generateImage(
  '一个角色站在黑暗的房间里，电影级灯光',
  { model: 'seedream-5.0' }
);

// 3. 生成语音音频
const audio = await ttsService.synthesize({
  text: '你好，欢迎来到节目。',
  config: { provider: 'edge', voice: 'zh-CN-XiaoxiaoNeural' }
});

// 4. 运行完整流程
const result = await mangaPipelineService.processSequence(scenes, options);
```

## 服务配置

### 环境变量

```bash
# AI 提供商
VITE_ALIBABA_API_KEY=***

# 图像生成
VITE_SEEDDREAM_API_KEY=***

# TTS
VITE_TTS_PROVIDER=edge
```

## 类型安全

所有服务均使用 TypeScript 接口提供完整类型支持：

```typescript
import type {
  GenerationOptions,
  ImageGenerationOptions,
  TTSConfig,
  PipelineOptions,
} from '@/core/services';
```

## 错误处理

服务会抛出带类型的错误：

```typescript
try {
  await aiService.generate(prompt);
} catch (error) {
  if (error.code === 'API_KEY_MISSING') {
    // 处理 API 密钥缺失
  }
  if (error.code === 'RATE_LIMIT_EXCEEDED') {
    // 处理速率限制
  }
}
```

## 异步/Promise 基于

所有服务方法均返回 Promise：

```typescript
// Async/await
const result = await service.method(params);

// Promise 链式调用
service.method(params)
  .then(result => console.log(result))
  .catch(error => console.error(error));

// 带进度（流式传输）
service.method(params, (progress) => {
  console.log(`${progress.percent}% 完成`);
});
```

## 服务可用性

| 服务 | Web | Desktop | 状态 |
|---------|-----|---------|--------|
| aiService | ✅ | ✅ | 稳定 |
| imageGenerationService | ✅ | ✅ | 稳定 |
| ttsService | ✅ | ✅ | 稳定 |
| lipSyncService | ✅ | ✅ | Beta |
| mangaPipelineService | ✅ | ✅ | 稳定 |
| storyboardService | ✅ | ✅ | 稳定 |
| characterService | ✅ | ✅ | 稳定 |
| videoExportService | ⚠️ | ✅ | Beta |

- ✅ 完全支持
- ⚠️ 有限支持
- ❌ 不可用

## 下一步

- [AI 服务](ai-service.md) - 文本生成
- [图像生成](image-generation.md) - 图像合成
- [TTS 服务](tts-service.md) - 语音合成
