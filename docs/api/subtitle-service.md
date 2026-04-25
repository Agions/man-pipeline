# 字幕服务

智能字幕生成服务，支持语音转文字、多格式导出和丰富的样式定制。

## 概述

`SubtitleService` 提供从脚本或音频生成字幕的能力，支持 SRT、VTT、ASS 等主流格式。

## 字幕格式

```typescript
type SubtitleFormat = 'srt' | 'vtt' | 'ass' | 'txt';
```

## 字幕样式

```typescript
interface SubtitleStyle {
  fontFamily: string;        // 字体
  fontSize: number;          // 字号
  fontColor: string;         // 字体颜色
  backgroundColor: string;   // 背景色
  outline: number;           // 描边宽度
  outlineColor: string;      // 描边颜色
  shadow: number;            // 阴影
  alignment: 'left' | 'center' | 'right' | 'top' | 'bottom';
  margin: number;            // 边距
  position: 'top' | 'middle' | 'bottom'; // 位置
}

// 默认样式
const DEFAULT_SUBTITLE_STYLE: SubtitleStyle = {
  fontFamily: 'Microsoft YaHei, SimHei, Arial',
  fontSize: 36,
  fontColor: '#FFFFFF',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  outline: 2,
  outlineColor: '#000000',
  shadow: 1,
  alignment: 'center',
  margin: 10,
  position: 'bottom',
};
```

## 字幕数据结构

```typescript
// 单条字幕
interface SubtitleItem {
  id: string;
  index: number;
  startTime: number;  // 秒
  endTime: number;    // 秒
  text: string;
  style?: Partial<SubtitleStyle>;
}

// 字幕轨道
interface SubtitleTrack {
  id: string;
  name: string;
  language: string;
  items: SubtitleItem[];
  style: SubtitleStyle;
  format: SubtitleFormat;
}
```

## ASS 预设样式

```typescript
// 内置 ASS 样式预设
const ASS_STYLE_PRESETS = {
  standard: { fontSize: 36, position: 'bottom' },
  karaoke: { fontSize: 42, position: 'middle' },
  commentary: { fontSize: 28, position: 'top' },
};
```

## 使用示例

```typescript
import { subtitleService } from '@/core/services';

// 从脚本生成字幕
const track = await subtitleService.generateFromScript(script, {
  language: 'zh-CN',
  style: DEFAULT_SUBTITLE_STYLE,
});

// 从音频识别生成字幕
const trackFromAudio = await subtitleService.generateFromAudio(audioUrl, {
  language: 'zh-CN',
  enableSpeakerDiarization: true,
});

// 转换格式
const srtContent = subtitleService.convert(assContent, 'srt');

// 应用自定义样式
const styled = subtitleService.applyStyle(track, {
  fontSize: 42,
  fontColor: '#FFD700',
  position: 'bottom',
});

// 调整时间轴（整体偏移秒数）
const adjusted = subtitleService.adjustTiming(track, { offset: -0.5 });
```

## 方法

| 方法 | 说明 |
|------|------|
| `generateFromScript(script, options?)` | 从脚本生成字幕 |
| `generateFromAudio(audioUrl, options?)` | 从音频识别生成字幕 |
| `convert(content, toFormat)` | 格式转换 |
| `applyStyle(track, style)` | 应用样式 |
| `adjustTiming(track, options)` | 调整时间轴 |
| `merge(tracks[])` | 合并多语言字幕轨道 |
| `export(track)` | 导出为字符串 |

## 下一步

- [TTS 服务](./tts-service.md) - 语音合成
- [视频合成](./video-compositor-service.md) - 视频合成导出
