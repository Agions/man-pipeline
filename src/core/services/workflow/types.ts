/**
 * 工作流类型定义
 */

// 工作流步骤类型
export type WorkflowStepType =
  | 'script'      // 1. 剧本创作
  | 'storyboard'  // 2. 分镜设计
  | 'character'   // 3. 角色设定
  | 'scene'       // 4. 场景生成
  | 'image'       // 5. 图像生成
  | 'dubbing'     // 6. 智能配音
  | 'video'       // 7. 视频生成
  | 'edit'        // 8. 后期剪辑
  | 'export';     // 9. 导出成品

// 工作流步骤状态
export interface WorkflowStep {
  id: string;
  type: WorkflowStepType;
  name: string;
  description: string;
  status: 'pending' | 'running' | 'completed' | 'failed' | 'skipped';
  progress: number;
  input?: any;
  output?: any;
  error?: string;
  startTime?: number;
  endTime?: number;
  duration?: number;
}

// 工作流配置
export interface WorkflowConfig {
  name: string;
  description?: string;
  aiProvider: string;
  aiApiKey: string;
  imageProvider: string;
  imageApiKey: string;
  videoProvider: string;
  videoApiKey: string;
  ttsProvider: string;
  ttsApiKey?: string;
  ttsSecretKey?: string;
  ttsAppId?: string;
  style?: string;
  aspectRatio?: string;
  duration?: number;
  autoProceed?: boolean;
}

// 分镜项
export interface StoryboardItem {
  id: string;
  sceneNumber: number;
  description: string;
  cameraAngle?: string;
  duration: number;
  dialogue?: string;
  action?: string;
}

// 角色设定
export interface Character {
  id: string;
  name: string;
  description: string;
  personality?: string;
  appearance?: string;
  voice?: string;
}

// 场景
export interface Scene {
  id: string;
  name: string;
  description: string;
  location?: string;
  time?: string;
  mood?: string;
}

// 漫剧项目
export interface ComicDramaProject {
  id: string;
  name: string;
  config: WorkflowConfig;
  steps: WorkflowStep[];
  currentStep: number;
  status: 'idle' | 'running' | 'paused' | 'completed' | 'failed';
  createdAt: number;
  updatedAt: number;
  output?: {
    script?: string;
    storyboard?: StoryboardItem[];
    characters?: Character[];
    scenes?: Scene[];
    images?: string[];
    audio?: string[];
    videos?: string[];
    finalVideo?: string;
  };
}

// 工作流事件
export interface WorkflowEvent {
  type: 'stepStart' | 'stepProgress' | 'stepComplete' | 'stepFail' | 'workflowComplete' | 'workflowFail';
  projectId: string;
  stepType?: WorkflowStepType;
  stepIndex?: number;
  progress?: number;
  error?: string;
  timestamp: number;
}

// 事件监听器
export type WorkflowEventListener = (event: WorkflowEvent) => void;
