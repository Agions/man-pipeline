# ManGaAI 项目结构

## 目录结构

```
src/
├── core/                      # 核心逻辑
│   ├── constants/             # 常量配置
│   │   └── index.ts           # AI 模型、TTS 等配置
│   ├── hooks/                 # 全局自定义 hooks
│   │   ├── useModel.ts
│   │   ├── useProject.ts
│   │   ├── useVideo.ts
│   │   └── useWorkflow.ts
│   ├── services/              # 核心服务
│   │   ├── ai.service.ts      # 6 个国产 AI 模型
│   │   ├── tts.service.ts     # TTS 语音合成
│   │   ├── generation.service.ts  # 图像/视频生成
│   │   ├── ffmpeg.service.ts  # FFmpeg 视频处理
│   │   ├── workflow.service.ts    # 9 步漫剧工作流
│   │   ├── index.ts           # 统一导出
│   │   └── legacy/            # 旧服务（待清理）
│   ├── stores/                # Zustand 状态管理
│   │   ├── app.store.ts
│   │   ├── project.store.ts
│   │   └── user.store.ts
│   └── types/                 # 类型定义
│       └── index.ts
├── components/                # 组件
│   ├── AIPanel/               # AI 面板组件
│   │   ├── SmartDubbing/      # 智能配音
│   │   │   ├── components/
│   │   │   │   ├── VoiceSelector.tsx
│   │   │   │   └── VoiceList.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useVoiceover.ts
│   │   │   ├── types.ts
│   │   │   └── index.tsx
│   │   ├── SubtitleGenerator.tsx
│   │   └── AIClipController.tsx
│   ├── business/              # 业务组件
│   │   ├── AIImageGenerator/  # 图像/视频生成
│   │   │   ├── components/
│   │   │   │   ├── GenerationForm.tsx
│   │   │   │   ├── TaskList.tsx
│   │   │   │   └── PreviewModal.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useGeneration.ts
│   │   │   └── index.tsx
│   │   ├── WorkflowManager/   # 工作流管理
│   │   │   ├── components/
│   │   │   │   ├── ProjectList.tsx
│   │   │   │   ├── CreateProjectModal.tsx
│   │   │   │   ├── StepTimeline.tsx
│   │   │   │   ├── EventLog.tsx
│   │   │   │   └── WorkflowControls.tsx
│   │   │   └── index.tsx
│   │   ├── FFmpegStatus/      # FFmpeg 状态
│   │   ├── VideoEditor.tsx    # 视频编辑器
│   │   ├── ScriptGenerator/   # 脚本生成器
│   │   └── ...
│   ├── layout/                # 布局组件
│   │   └── Layout.tsx
│   └── ui/                    # 基础 UI 组件
├── pages/                     # 页面
│   ├── Home.tsx
│   ├── Workflow/
│   │   ├── index.tsx
│   │   └── index.module.less
│   ├── Editor.tsx
│   └── Settings.tsx
├── context/                   # React Context
│   └── ThemeContext.tsx
├── utils/                     # 工具函数
└── App.tsx                    # 根组件
```

## 核心服务

| 服务 | 文件 | 功能 | 行数 |
|------|------|------|------|
| AI 服务 | `ai.service.ts` | 6 个国产 AI 模型 | 720 |
| TTS 服务 | `tts.service.ts` | 4 引擎语音合成 | 541 |
| 生成服务 | `generation.service.ts` | 图像/视频生成 | 705 |
| FFmpeg 服务 | `ffmpeg.service.ts` | 视频处理 | 262 |
| 工作流服务 | `workflow.service.ts` | 9 步漫剧工作流 | 887 |

## 优化后的组件

| 组件 | 优化前 | 优化后 | 拆分 |
|------|--------|--------|------|
| WorkflowManager | 600+ 行 | 200 行 | 5 子组件 |
| AIImageGenerator | 600+ 行 | 200 行 | 3 子组件 + hook |
| SmartDubbing | 500+ 行 | 100 行 | 2 子组件 + hook |

## 设计原则

1. **单一职责** - 每个组件/函数只做一件事
2. **自定义 Hooks** - 状态逻辑提取到可复用 hooks
3. **组件拆分** - 大组件拆分为小组件
4. **类型安全** - TypeScript 严格类型
5. **统一导出** - 使用 index.ts 管理导出

## 待清理

- `src/core/services/legacy/` - 旧服务文件
- `src/core/types/legacy.types.ts` - 旧类型定义
- `src/core/stores/legacy.store.ts` - 旧状态管理
