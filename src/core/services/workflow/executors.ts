/**
 * 工作流步骤执行器
 */

import { message } from 'antd';
import { aiService } from '../ai.service';
import { generationService } from '../generation.service';
import { ttsService } from '../tts.service';
import { ffmpegService } from '../ffmpeg.service';
import { WorkflowStep, WorkflowConfig, ComicDramaProject, StoryboardItem, Character, Scene } from './types';

// 执行上下文
interface ExecutionContext {
  project: ComicDramaProject;
  step: WorkflowStep;
  onProgress: (progress: number) => void;
}

// 步骤执行器类型
type StepExecutor = (context: ExecutionContext) => Promise<any>;

// 剧本创作
const executeScript: StepExecutor = async ({ project, onProgress }) => {
  onProgress(10);

  const prompt = `创作一个漫剧剧本，主题：${project.config.name}。\n\n要求：\n1. 包含角色介绍\n2. 分场景描述\n3. 有对话和动作\n4. 适合改编为视频`;

  onProgress(30);

  const response = await aiService.generate({
    provider: project.config.aiProvider as any,
    apiKey: project.config.aiApiKey,
    prompt,
    temperature: 0.8,
  });

  onProgress(80);

  if (!response.success) {
    throw new Error(response.error || '剧本生成失败');
  }

  onProgress(100);
  return { script: response.text };
};

// 分镜设计
const executeStoryboard: StepExecutor = async ({ project, onProgress }) => {
  onProgress(10);

  const script = project.output?.script;
  if (!script) {
    throw new Error('缺少剧本');
  }

  const prompt = `将以下剧本转换为分镜脚本：\n\n${script}\n\n要求：\n1. 按场景分镜\n2. 描述画面内容\n3. 标注镜头角度\n4. 包含对话和动作\n\n输出 JSON 格式：[{"sceneNumber": 1, "description": "...", "cameraAngle": "...", "duration": 5, "dialogue": "...", "action": "..."}]`;

  onProgress(30);

  const response = await aiService.generate({
    provider: project.config.aiProvider as any,
    apiKey: project.config.aiApiKey,
    prompt,
    temperature: 0.7,
  });

  onProgress(60);

  if (!response.success) {
    throw new Error(response.error || '分镜生成失败');
  }

  // 解析 JSON
  let storyboard: StoryboardItem[] = [];
  try {
    const jsonMatch = response.text.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      storyboard = JSON.parse(jsonMatch[0]);
    }
  } catch (e) {
    console.warn('分镜 JSON 解析失败，使用默认格式');
    storyboard = [{ id: '1', sceneNumber: 1, description: '场景 1', duration: 5 }];
  }

  onProgress(100);
  return { storyboard };
};

// 角色设定
const executeCharacter: StepExecutor = async ({ project, onProgress }) => {
  onProgress(10);

  const script = project.output?.script;
  if (!script) {
    throw new Error('缺少剧本');
  }

  const prompt = `从以下剧本中提取角色信息：\n\n${script}\n\n要求：\n1. 角色名称\n2. 性格特点\n3. 外貌描述\n4. 配音特点\n\n输出 JSON 格式：[{"name": "...", "description": "...", "personality": "...", "appearance": "...", "voice": "..."}]`;

  onProgress(40);

  const response = await aiService.generate({
    provider: project.config.aiProvider as any,
    apiKey: project.config.aiApiKey,
    prompt,
    temperature: 0.7,
  });

  onProgress(70);

  if (!response.success) {
    throw new Error(response.error || '角色提取失败');
  }

  let characters: Character[] = [];
  try {
    const jsonMatch = response.text.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      characters = JSON.parse(jsonMatch[0]);
    }
  } catch (e) {
    console.warn('角色 JSON 解析失败');
    characters = [{ id: '1', name: '主角', description: '主要角色' }];
  }

  onProgress(100);
  return { characters };
};

// 场景生成
const executeScene: StepExecutor = async ({ project, onProgress }) => {
  onProgress(10);

  const script = project.output?.script;
  if (!script) {
    throw new Error('缺少剧本');
  }

  const prompt = `从以下剧本中提取场景信息：\n\n${script}\n\n要求：\n1. 场景名称\n2. 场景描述\n3. 地点\n4. 时间\n5. 氛围\n\n输出 JSON 格式：[{"name": "...", "description": "...", "location": "...", "time": "...", "mood": "..."}]`;

  onProgress(40);

  const response = await aiService.generate({
    provider: project.config.aiProvider as any,
    apiKey: project.config.aiApiKey,
    prompt,
    temperature: 0.7,
  });

  onProgress(70);

  if (!response.success) {
    throw new Error(response.error || '场景提取失败');
  }

  let scenes: Scene[] = [];
  try {
    const jsonMatch = response.text.match(/\[[\s\S]*\]/);
    if (jsonMatch) {
      scenes = JSON.parse(jsonMatch[0]);
    }
  } catch (e) {
    console.warn('场景 JSON 解析失败');
    scenes = [{ id: '1', name: '场景 1', description: '主要场景' }];
  }

  onProgress(100);
  return { scenes };
};

// 图像生成
const executeImage: StepExecutor = async ({ project, onProgress }) => {
  onProgress(10);

  const storyboard = project.output?.storyboard;
  if (!storyboard || storyboard.length === 0) {
    throw new Error('缺少分镜');
  }

  const images: string[] = [];
  const total = Math.min(storyboard.length, 5);

  for (let i = 0; i < total; i++) {
    const item = storyboard[i];
    const progress = 10 + Math.floor((i / total) * 80);
    onProgress(progress);

    const prompt = `${item.description}，${project.config.style}风格，高质量，精致细节`;

    const result = await generationService.generateImage(
      {
        prompt,
        aspectRatio: project.config.aspectRatio as any,
        style: project.config.style,
        numImages: 1,
      },
      { provider: project.config.imageProvider as any, apiKey: project.config.imageApiKey },
      () => {}
    );

    if (result.status === 'completed' && result.url) {
      images.push(result.url);
    }

    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  onProgress(100);
  return { images };
};

// 智能配音
const executeDubbing: StepExecutor = async ({ project, onProgress }) => {
  onProgress(10);

  const storyboard = project.output?.storyboard;
  if (!storyboard) {
    throw new Error('缺少分镜');
  }

  const audio: string[] = [];
  const itemsWithDialogue = storyboard.filter((item) => item.dialogue);
  const total = Math.min(itemsWithDialogue.length, 3);

  for (let i = 0; i < total; i++) {
    const item = itemsWithDialogue[i];
    const progress = 10 + Math.floor((i / total) * 80);
    onProgress(progress);

    if (item.dialogue) {
      const result = await ttsService.synthesize({
        text: item.dialogue,
        voice: 'zh-CN-XiaoxiaoNeural',
        provider: project.config.ttsProvider as any,
      });

      if (result.success && result.audioUrl) {
        audio.push(result.audioUrl);
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 300));
  }

  onProgress(100);
  return { audio };
};

// 视频生成
const executeVideo: StepExecutor = async ({ project, onProgress }) => {
  onProgress(10);

  const images = project.output?.images;
  if (!images || images.length === 0) {
    throw new Error('缺少图像');
  }

  const videos: string[] = [];
  const total = Math.min(images.length, 3);

  for (let i = 0; i < total; i++) {
    const progress = 10 + Math.floor((i / total) * 80);
    onProgress(progress);

    const result = await generationService.generateVideo(
      {
        prompt: '动态视频',
        imageUrl: images[i],
        duration: project.config.duration as 5 | 10,
        aspectRatio: project.config.aspectRatio as any,
      },
      { provider: project.config.videoProvider as any, apiKey: project.config.videoApiKey },
      () => {}
    );

    if (result.status === 'completed' && result.url) {
      videos.push(result.url);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  onProgress(100);
  return { videos };
};

// 后期剪辑
const executeEdit: StepExecutor = async ({ project, onProgress }) => {
  onProgress(10);

  const videos = project.output?.videos;
  if (!videos || videos.length === 0) {
    throw new Error('缺少视频片段');
  }

  onProgress(50);

  // 模拟剪辑过程
  await new Promise((resolve) => setTimeout(resolve, 2000));

  onProgress(100);
  return { editComplete: true };
};

// 导出成品
const executeExport: StepExecutor = async ({ project, onProgress }) => {
  onProgress(10);

  const videos = project.output?.videos;
  if (!videos || videos.length === 0) {
    throw new Error('缺少视频');
  }

  onProgress(30);

  // 模拟导出过程
  await new Promise((resolve) => setTimeout(resolve, 3000));

  onProgress(100);
  return { finalVideo: videos[0] };
};

// 执行器映射
export const STEP_EXECUTORS: Record<string, StepExecutor> = {
  script: executeScript,
  storyboard: executeStoryboard,
  character: executeCharacter,
  scene: executeScene,
  image: executeImage,
  dubbing: executeDubbing,
  video: executeVideo,
  edit: executeEdit,
  export: executeExport,
};

// 获取执行器
export const getExecutor = (stepType: string): StepExecutor | null => {
  return STEP_EXECUTORS[stepType] || null;
};
