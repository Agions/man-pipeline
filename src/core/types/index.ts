/**
 * 核心类型定义
 */

// AI 模型类型
export type AIModelType = 'qwen' | 'baidu' | 'glm5' | 'minimax';

// AI 模型信息
export interface AIModelInfo {
  id: string;
  name: string;
  provider: string;
  description: string;
  apiKeyFormat: string;
  defaultModel: string;
  baseUrl: string;
}

// AI 模型设置
export interface AIModelSettings {
  enabled: boolean;
  apiKey?: string;
  apiSecret?: string;
  model?: string;
  temperature?: number;
  maxTokens?: number;
}

// 应用状态
export interface AppState {
  selectedAIModel: AIModelType;
  aiModelsSettings: Record<AIModelType, AIModelSettings>;
  autoSave: boolean;
  isDarkMode: boolean;
}

// 项目数据
export interface ProjectData {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  videoPath?: string;
  script?: ScriptData;
  settings?: ProjectSettings;
}

// 脚本数据
export interface ScriptData {
  id: string;
  content: string;
  segments: ScriptSegment[];
  metadata?: ScriptMetadata;
}

// 脚本片段
export interface ScriptSegment {
  id: string;
  startTime: number;
  endTime: number;
  content: string;
  type: 'narration' | 'dialogue' | 'subtitle';
}

// 脚本元数据
export interface ScriptMetadata {
  style?: string;
  tone?: string;
  length?: 'short' | 'medium' | 'long';
  generatedAt?: string;
  model?: string;
}

// 项目设置
export interface ProjectSettings {
  videoQuality?: 'low' | 'medium' | 'high' | 'ultra';
  outputFormat?: 'mp4' | 'mov' | 'webm';
  subtitleEnabled?: boolean;
  subtitleStyle?: SubtitleStyle;
}

// 字幕样式
export interface SubtitleStyle {
  fontFamily?: string;
  fontSize?: number;
  fontColor?: string;
  backgroundColor?: string;
  position?: 'top' | 'middle' | 'bottom';
}

// 视频信息
export interface VideoInfo {
  path: string;
  duration: number;
  width: number;
  height: number;
  fps: number;
  format: string;
  size: number;
}

// 导出选项
export interface ExportOptions {
  format: 'mp4' | 'mov' | 'webm';
  quality: 'low' | 'medium' | 'high' | 'ultra';
  includeSubtitles: boolean;
  subtitleStyle?: SubtitleStyle;
}

// API 响应
export interface APIResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// 错误类型
export interface AppError {
  code: string;
  message: string;
  details?: unknown;
}
