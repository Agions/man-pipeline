# ManGaAI 开发指南

## 开发环境

### 要求

- Node.js 18+
- Rust 1.70+
- FFmpeg（可选，视频处理功能需要）

### 安装

```bash
# 克隆项目
git clone https://github.com/Agions/ManGaAI.git
cd ManGaAI

# 安装依赖
npm install

# 安装 Tauri CLI
npm install -g @tauri-apps/cli
```

## 开发命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 构建并检查 TypeScript
npm run build:check

# 预览生产构建
npm run preview

# Tauri 开发
npm run tauri dev

# Tauri 构建
npm run tauri build
```

## 代码规范

### 组件结构

```tsx
// 1. 导入
import React from 'react';
import { Button } from 'antd';

// 2. 类型定义
interface Props {
  name: string;
}

// 3. 组件
const MyComponent: React.FC<Props> = ({ name }) => {
  return <Button>{name}</Button>;
};

// 4. 导出
export default MyComponent;
```

### 大组件拆分原则

当组件超过 300 行时，考虑拆分：

```
MyComponent/
├── components/           # 子组件
│   ├── SubComponentA.tsx
│   ├── SubComponentB.tsx
│   └── index.ts          # 统一导出
├── hooks/                # 自定义 hooks
│   └── useMyComponent.ts
├── types.ts              # 类型定义
├── utils.ts              # 工具函数
└── index.tsx             # 主组件
```

### 自定义 Hook 模板

```ts
import { useState, useCallback } from 'react';

export const useMyFeature = () => {
  const [state, setState] = useState('');

  const action = useCallback(() => {
    // 逻辑
  }, []);

  return {
    state,
    setState,
    action,
  };
};

export default useMyFeature;
```

## 状态管理

### Zustand Store

```ts
// stores/my.store.ts
import { create } from 'zustand';

interface MyState {
  value: string;
  setValue: (value: string) => void;
}

export const useMyStore = create<MyState>((set) => ({
  value: '',
  setValue: (value) => set({ value }),
}));
```

### 使用

```tsx
const MyComponent = () => {
  const { value, setValue } = useMyStore();
  return <div>{value}</div>;
};
```

## API 服务

### 添加新 AI 模型

1. 在 `src/core/constants/index.ts` 添加配置：

```ts
export const MOONSHOT_CONFIG = {
  name: '月之暗面',
  model: 'kimi-k2.5',
  endpoint: 'https://api.moonshot.cn/v1/chat/completions',
};
```

2. 在 `src/core/services/ai.service.ts` 实现调用：

```ts
private async callMoonshot(params: AIRequestParams): Promise<AIResponse> {
  // 实现
}
```

3. 在 switch 中添加 case：

```ts
case 'moonshot':
  return this.callMoonshot(params);
```

## 调试技巧

### 浏览器调试

```bash
# 启动开发服务器
npm run dev

# 打开浏览器开发者工具
# F12 或 Ctrl+Shift+I
```

### Tauri 调试

```bash
# 查看 Rust 日志
RUST_LOG=debug npm run tauri dev

# 查看 WebView 控制台
# 在应用中按 F12
```

### 日志

```ts
// 使用 console 打印
console.log('调试信息');
console.error('错误信息');

// 使用 message 提示用户
import { message } from 'antd';
message.success('成功');
message.error('失败');
```

## 常见问题

### 依赖安装失败

```bash
# 使用淘宝镜像
npm config set registry https://registry.npmmirror.com

# 清除缓存重新安装
rm -rf node_modules package-lock.json
npm install
```

### TypeScript 错误

```bash
# 检查类型
npx tsc --noEmit

# 自动修复
npx tsc --noEmit --skipLibCheck
```

### FFmpeg 未找到

```bash
# 安装 FFmpeg
# macOS
brew install ffmpeg

# Ubuntu
sudo apt install ffmpeg

# Windows
winget install Gyan.FFmpeg
```

## 提交规范

```
feat: 新功能
fix: 修复 bug
docs: 文档更新
style: 代码格式（不影响功能）
refactor: 代码重构
perf: 性能优化
test: 测试相关
chore: 构建/工具相关
```

示例：

```bash
git commit -m "feat: 添加月之暗面 AI 模型支持"
git commit -m "fix: 修复图像生成失败问题"
git commit -m "refactor: 优化 WorkflowManager 组件结构"
```

## 性能优化

### 1. 使用 React.memo

```tsx
const MyComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});
```

### 2. 使用 useMemo/useCallback

```tsx
const memoizedValue = useMemo(() => compute(value), [value]);
const memoizedCallback = useCallback(() => doSomething(value), [value]);
```

### 3. 懒加载组件

```tsx
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Spin />}>
  <HeavyComponent />
</Suspense>
```

## 测试

```bash
# 运行测试（待添加）
npm test

# 检查代码风格
npm run lint
```

## 部署

### Web 版本

```bash
npm run build
# 部署 dist/ 目录
```

### Tauri 桌面版

```bash
npm run tauri build
# 输出在 src-tauri/target/release/
```

## 贡献指南

1. Fork 项目
2. 创建分支：`git checkout -b feature/my-feature`
3. 提交更改：`git commit -m "feat: 添加功能"`
4. 推送分支：`git push origin feature/my-feature`
5. 创建 Pull Request

## 资源

- [React 文档](https://react.dev/)
- [Ant Design](https://ant.design/)
- [Tauri 文档](https://tauri.app/)
- [Zustand 文档](https://docs.pmnd.rs/zustand)
