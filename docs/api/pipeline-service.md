# 流水线引擎

简化线性流程执行引擎，替代 n8n 工作流引擎。流程：导入 → 分析 → 脚本 → 分镜 → 角色 → 渲染 → 导出。

## 概述

`PipelineService` 管理完整的视频创作流水线，支持步骤编排、进度回调、暂停/恢复和错误恢复。

## 核心类型

```typescript
// 步骤 ID
type PipelineStepId = 'import' | 'analysis' | 'script' | 'storyboard' | 'character' | 'render' | 'export';

// 流水线状态
type PipelineStatus = 'idle' | 'running' | 'paused' | 'completed' | 'error';

// 流水线上下文（步骤间共享数据）
interface PipelineContext {
  workflowId: string;
  episodeId?: string;
  projectId?: string;
  getVariable: (name: string) => unknown;
  setVariable: (name: string, value: unknown) => void;
  log: (message: string, level?: 'info' | 'warn' | 'error') => void;
}

// 单个步骤
interface PipelineStep {
  id: string;
  name: string;
  stepId: PipelineStepId;
  execute(input: unknown, context: PipelineContext): Promise<unknown>;
  onProgress?: (progress: number, message?: string) => void;
}

// 流水线配置
interface PipelineConfig {
  workflowId?: string;
  projectId?: string;
  episodeId?: string;
  steps: PipelineStep[];
  onStepChange?: (step: PipelineStep) => void;
  onProgress?: (stepId: string, progress: number, message?: string) => void;
  onComplete?: (result: PipelineResult) => void;
  onError?: (error: string, step?: PipelineStep) => void;
}
```

## 使用示例

```typescript
import {
  PipelineService,
  createImportStep,
  createAnalysisStep,
  createScriptStep,
  createStoryboardStep,
  createRenderStep,
  createExportStep,
} from '@/core/services';

// 创建流水线
const pipeline = new PipelineService();

// 注册步骤工厂
pipeline.registerStepFactory('import', createImportStep);
pipeline.registerStepFactory('analysis', createAnalysisStep);
pipeline.registerStepFactory('script', createScriptStep);
pipeline.registerStepFactory('storyboard', createStoryboardStep);
pipeline.registerStepFactory('render', createRenderStep);
pipeline.registerStepFactory('export', createExportStep);

// 运行流水线
const result = await pipeline.run({
  workflowId: 'workflow-001',
  projectId: 'project-123',
  steps: [
    pipeline.createStep('import', { source: 'novel', content: novelText }),
    pipeline.createStep('analysis', {}),
    pipeline.createStep('script', { style: 'cinematic' }),
    pipeline.createStep('storyboard', {}),
    pipeline.createStep('render', { quality: 'high' }),
    pipeline.createStep('export', { format: 'mp4' }),
  ],
  onStepChange: (step) => console.log(`步骤切换: ${step.name}`),
  onProgress: (stepId, progress, msg) => console.log(`${stepId}: ${progress}% ${msg || ''}`),
  onComplete: (result) => console.log('完成:', result.status),
  onError: (error, step) => console.error(`步骤 ${step?.name} 出错:`, error),
});
```

## 生命周期方法

| 方法 | 说明 |
|------|------|
| `run(config)` | 启动流水线执行 |
| `pause()` | 暂停当前流水线 |
| `resume()` | 恢复暂停的流水线 |
| `cancel()` | 取消当前流水线 |
| `getStatus()` | 获取当前状态 |
| `getStepResults()` | 获取各步骤执行结果 |

## 上下文变量

步骤间通过 `context.setVariable / getVariable` 共享数据：

```typescript
// 步骤 1：导入
execute(input, context) {
  context.setVariable('novelContent', input.content);
  context.log('已导入小说内容', 'info');
}

// 步骤 2：分析（可读取步骤1数据）
execute(input, context) {
  const content = context.getVariable('novelContent');
  // 分析...
}

// 步骤 3：脚本生成
execute(input, context) {
  const analysis = context.getVariable('analysis');
  // 生成脚本...
}
```

## 下一步

- [分镜服务](./storyboard-service.md) - 分镜管理
- [角色服务](./character-service.md) - 角色管理
