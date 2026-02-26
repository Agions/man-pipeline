/**
 * 应用相关常量
 */

// 存储键名
export const STORAGE_KEYS = {
  PROJECTS: 'mangaai_projects',
  APP_STATE: 'mangaai_app_state',
  USER_PREFERENCES: 'mangaai_preferences',
  RECENT_FILES: 'mangaai_recent_files',
  MODEL_SETTINGS: 'mangaai_model_settings',
  EXPORT_HISTORY: 'mangaai_export_history',
  API_KEYS: 'mangaai_api_keys',
  WORKFLOW_STATE: 'mangaai_workflow_state',
} as const;

// 路由路径
export const ROUTES = {
  HOME: '/',
  WORKFLOW: '/workflow',
  PROJECTS: '/projects',
  PROJECT_DETAIL: '/projects/:id',
  PROJECT_EDIT: '/projects/:id/edit',
  EDITOR: '/editor',
  EDITOR_WITH_ID: '/editor/:projectId',
  SCRIPTS: '/scripts',
  SCRIPT_DETAIL: '/script/:scriptId',
  TEMPLATES: '/templates',
  SETTINGS: '/settings',
} as const;

// 事件名称
export const EVENTS = {
  PROJECT_CREATED: 'project:created',
  PROJECT_UPDATED: 'project:updated',
  PROJECT_DELETED: 'project:deleted',
  SCRIPT_GENERATED: 'script:generated',
  VIDEO_UPLOADED: 'video:uploaded',
  EXPORT_STARTED: 'export:started',
  EXPORT_COMPLETED: 'export:completed',
  EXPORT_FAILED: 'export:failed',
  WORKFLOW_STEP_START: 'workflow:step:start',
  WORKFLOW_STEP_COMPLETE: 'workflow:step:complete',
  WORKFLOW_STEP_FAIL: 'workflow:step:fail',
  WORKFLOW_COMPLETE: 'workflow:complete',
  WORKFLOW_FAIL: 'workflow:fail',
} as const;

// 错误码
export const ERROR_CODES = {
  UNKNOWN: 'E0000',
  NETWORK_ERROR: 'E0001',
  API_ERROR: 'E0002',
  VALIDATION_ERROR: 'E0003',
  NOT_FOUND: 'E0004',
  UNAUTHORIZED: 'E0005',
  FILE_TOO_LARGE: 'E0006',
  UNSUPPORTED_FORMAT: 'E0007',
  PROCESSING_ERROR: 'E0008',
  TIMEOUT: 'E0009',
  CANCELLED: 'E0010',
} as const;

// 默认配置
export const DEFAULTS = {
  AUTO_SAVE_INTERVAL: 30, // 秒
  MAX_FILE_SIZE: 2 * 1024 * 1024 * 1024, // 2GB
  MAX_PROJECTS: 100,
  MAX_RECENT_FILES: 20,
  DEFAULT_VIDEO_QUALITY: 'high',
  DEFAULT_OUTPUT_FORMAT: 'mp4',
  DEFAULT_LANGUAGE: 'zh',
  DEFAULT_SCRIPT_LENGTH: 'medium',
  DEFAULT_STYLE: 'professional',
  DEFAULT_ASPECT_RATIO: '16:9',
  DEFAULT_RESOLUTION: '1080p',
  DEFAULT_FPS: 30,
  DEFAULT_CODEC: 'h264',
  MAX_RETRY_COUNT: 3,
  RETRY_DELAY: 1000, // ms
  REQUEST_TIMEOUT: 60000, // ms
} as const;

// 文件类型映射
export const FILE_TYPE_MAP: Record<string, string> = {
  mp4: 'video',
  mov: 'video',
  avi: 'video',
  mkv: 'video',
  webm: 'video',
  flv: 'video',
  wmv: 'video',
  mp3: 'audio',
  wav: 'audio',
  flac: 'audio',
  aac: 'audio',
  jpg: 'image',
  jpeg: 'image',
  png: 'image',
  gif: 'image',
  webp: 'image',
  svg: 'image',
  pdf: 'document',
  doc: 'document',
  docx: 'document',
  txt: 'text',
  json: 'code',
  js: 'code',
  ts: 'code',
  srt: 'subtitle',
  vtt: 'subtitle',
  ass: 'subtitle',
} as const;
