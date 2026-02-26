/**
 * 视频相关常量
 */

// 视频格式
export const VIDEO_FORMATS = [
  { value: 'mp4', label: 'MP4', ext: '.mp4' },
  { value: 'mov', label: 'MOV', ext: '.mov' },
  { value: 'webm', label: 'WebM', ext: '.webm' },
  { value: 'avi', label: 'AVI', ext: '.avi' }
] as const;

// 导出质量
export const EXPORT_QUALITIES = [
  { value: 'low', label: '低质量', crf: 28 },
  { value: 'medium', label: '中等质量', crf: 23 },
  { value: 'high', label: '高质量', crf: 18 },
  { value: 'ultra', label: '超高质量', crf: 15 }
] as const;

// 分辨率选项
export const RESOLUTION_OPTIONS = [
  { value: '720p', label: '720p HD', width: 1280, height: 720 },
  { value: '1080p', label: '1080p Full HD', width: 1920, height: 1080 },
  { value: '2k', label: '2K QHD', width: 2560, height: 1440 },
  { value: '4k', label: '4K UHD', width: 3840, height: 2160 }
] as const;

// 视频宽高比选项
export const ASPECT_RATIOS = [
  {
    value: '9:16',
    label: '9:16',
    labelCn: '竖屏',
    desc: '抖音/快手/视频号',
    width: 1080,
    height: 1920,
    category: 'short'
  },
  {
    value: '16:9',
    label: '16:9',
    labelCn: '横屏',
    desc: '西瓜视频/YouTube',
    width: 1920,
    height: 1080,
    category: 'landscape'
  },
  {
    value: '1:1',
    label: '1:1',
    labelCn: '方屏',
    desc: '小红书/Instagram',
    width: 1080,
    height: 1080,
    category: 'square'
  },
  {
    value: '4:3',
    label: '4:3',
    labelCn: '传统',
    desc: '传统视频比例',
    width: 1440,
    height: 1080,
    category: 'traditional'
  }
] as const;

// 帧率选项
export const FRAME_RATE_OPTIONS = [
  { value: 24, label: '24fps', desc: '电影标准' },
  { value: 25, label: '25fps', desc: 'PAL标准' },
  { value: 30, label: '30fps', desc: 'NTSC标准' },
  { value: 60, label: '60fps', desc: '流畅' }
] as const;

// 视频编码器
export const VIDEO_CODECS = [
  { value: 'h264', label: 'H.264', desc: '兼容性最好' },
  { value: 'h265', label: 'H.265/HEVC', desc: '压缩率高' },
  { value: 'vp9', label: 'VP9', desc: 'WebM格式' },
  { value: 'av1', label: 'AV1', desc: '新一代编码' }
] as const;
