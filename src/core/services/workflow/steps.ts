/**
 * 工作流步骤配置
 */

import { WorkflowStep, WorkflowStepType } from './types';

// 步骤配置
export const STEP_CONFIG: Record<WorkflowStepType, { name: string; description: string }> = {
  script: {
    name: '剧本创作',
    description: 'AI 根据主题生成漫剧剧本',
  },
  storyboard: {
    name: '分镜设计',
    description: '将剧本转换为分镜脚本',
  },
  character: {
    name: '角色设定',
    description: '提取并设计角色信息',
  },
  scene: {
    name: '场景生成',
    description: '提取并设计场景信息',
  },
  image: {
    name: '图像生成',
    description: '根据分镜批量生成图像',
  },
  dubbing: {
    name: '智能配音',
    description: '为角色生成配音',
  },
  video: {
    name: '视频生成',
    description: '将图像转换为视频',
  },
  edit: {
    name: '后期剪辑',
    description: '合并片段，添加特效',
  },
  export: {
    name: '导出成品',
    description: '输出最终视频文件',
  },
};

// 步骤顺序
export const STEP_ORDER: WorkflowStepType[] = [
  'script',
  'storyboard',
  'character',
  'scene',
  'image',
  'dubbing',
  'video',
  'edit',
  'export',
];

// 创建初始步骤
export const createInitialSteps = (): WorkflowStep[] => {
  return STEP_ORDER.map((type, index) => ({
    id: `step-${index}`,
    type,
    name: STEP_CONFIG[type].name,
    description: STEP_CONFIG[type].description,
    status: 'pending',
    progress: 0,
  }));
};

// 获取下一步
export const getNextStep = (currentStep: number): number => {
  return Math.min(currentStep + 1, STEP_ORDER.length - 1);
};

// 获取上一步
export const getPrevStep = (currentStep: number): number => {
  return Math.max(currentStep - 1, 0);
};

// 检查是否最后一步
export const isLastStep = (stepIndex: number): boolean => {
  return stepIndex >= STEP_ORDER.length - 1;
};

// 检查是否第一步
export const isFirstStep = (stepIndex: number): boolean => {
  return stepIndex <= 0;
};
